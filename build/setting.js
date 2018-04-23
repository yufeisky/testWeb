var path = require('path')
var url = require('url')

module.exports = {
  entries: {
    index: ['./src/main.jsx']
  },
  resolve: {
    alias: {
      '@': rsv('../src'),
      '@a': rsv('../src/assets'),
      '@cp': rsv('../src/components'),
      '@ct': rsv('../src/containers')
    },
    extensions: [
      '.js', '.json', '.jsx', '.css', '.scss'
    ],
    modules: [rsv('../src'), 'node_modules']
  },
  lint: true,
  build: {
    pages: getPages(),
    vendor: [
      'react', 'react-dom', 'prop-types'
    ],
    publicPath: './',
    sourceMap: false
  },
  dev: {
    pages: getPages(true),
    port: 8080,
    hmr: true,
    nativeNotifier: true,
    proxyTable: {},
    mockTable: {}
  }
}

function getPages(dev) {
  return {
    index: {
      filename: 'index.html',
      template: 'index.html',
      chunks: ['manifest', 'vendor', 'index'],
      inject: true,
      tplArgs: {
        title: 'index'
      }
    }
  }
}

function rsv(pathName) {
  return path.resolve(__dirname, pathName)
}

