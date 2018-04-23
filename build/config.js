const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const notifier = require('node-notifier')
const _ = require('lodash')

const setting = require('./setting.js')
const { dev, build } = setting

var entry = setting.entries

module.exports = (env, argv) => {
    var { production: prod } = env

    if (prod && build.vendor && build.vendor.length > 0) {
        entry.vendor = build.vendor
    }
    if (!prod) {

        entry.index = ['./src/assets/js/hooks.js', './src/main.jsx'];

    }
    // hmr配置
    if (!prod && dev.hmr) {
        entry = _.mapValues(entry, (o) => {
            o.unshift('./build/client.js')
            o.unshift('react-hot-loader/patch')
            return o
        })
    }

    var output = {
        filename: prod ? '[name].js?[chunkhash]' : '[name].js',
        path: rsv('../dist'),
        publicPath: prod ? build.publicPath : '/'
    }

    var cssRules = prod ? [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    },
                    'postcss-loader'
                ],
                publicPath: '../../'
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[hash:base64:5]',
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
                publicPath: '../../'
            })
        }
    ] : [{
            test: /\.css$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {}, // 不开启css module,因为引入了antd-mobile
                },
                'postcss-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[hash:base64:5]',
                    },
                },
                'postcss-loader',
                'sass-loader'
            ]
        }
    ]

    var module = {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    'modules': false
                                }
                            ],
                            'react',
                            'stage-0',
                        ],
                        plugins: [
                            'react-hot-loader/babel', ['import', { libraryName: 'antd-mobile', style: 'css' }]
                        ]
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: prod ? '[path][name].[ext]?[hash]' : '[path][name].[ext]',
                        context: rsv('../src'),
                        limit: 1024
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: prod ? '[path][name].[ext]?[hash]' : '[path][name].[ext]',
                        context: rsv('../src'),
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        interpolate: true, // 使得模板支持js语法插入
                    }
                }]
            }
        ].concat(cssRules)
    }

    // 配置lint
    if (setting.lint) {
        // module.rules.unshift({
        //   enforce: 'pre', // 将lint的工作前置
        //   test: /\.jsx?$/,
        //   include: [rsv('../src')],
        //   loader: 'eslint-loader'
        // })
    }

    var resolve = setting.resolve

    var devtool = prod ? (build.sourceMap ? 'source-map' : false) : 'cheap-module-source-map'

    var pages = _.map(prod ? build.pages : dev.pages, (o, k) => {
        // 默认page的filename为文件名，否则使用key作为文件名
        if (!o.filename) {
            o.filename = /\.html$/.test(k) ? k : (k + '.html')
        }

        return new HtmlWebpackPlugin(o)
    })

    var plugins = prod ? [
        new CleanWebpackPlugin(['dist'], {
            root: rsv('..')
        })
    ].concat(pages, [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: 2
        }),
        new ExtractTextPlugin('assets/style/[name].css?[contenthash]'),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyJSPlugin({
            sourceMap: !!build.sourceMap
        })
    ]) : pages.concat([
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${dev.port}`]
            },
            onErrors: (severity, errors) => {
                if (!dev.nativeNotifier) {
                    return
                }

                if (severity !== 'error') {
                    return
                }

                const error = errors[0]

                notifier.notify({
                    title: 'Webpack error',
                    message: severity + ': ' + error.name,
                    subtitle: error.file || ''
                })
            }
        })
    ])

    // 添加hmr所需的plugin
    if (!prod && dev.hmr) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    plugins.push(new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../src/assets/js/rem.js'),
        to: path.resolve(__dirname, '../dist/assets/js/rem.js')
    }]))

    return {
        entry,
        output,
        module,
        resolve,
        devtool,
        plugins,
    }
}

function rsv(pathName) {
    return path.resolve(__dirname, pathName)
}