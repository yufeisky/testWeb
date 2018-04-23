module.exports = {
  questions: [
    {
      type: 'input',
      name: 'name',
      message: 'Name:',
      default: 'react-base'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:',
      default: 'A react-base project.'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author:',
      default: 'Jack Lo'
    }
  ],
  replace: [
    {
      file: './package.json',
      parser (cnt, args) {
        return cnt
        .replace('"name": "react-base"', `"name": "${args.name}"`)
        .replace('"description": "A react-base project."', `"description": "${args.description}"`)
        .replace('"author": "Jack Lo"', `"author": "${args.author}"`)
      }
    }
  ],
  exclude: ['node_modules/**', 'tplkit.config.js', 'dist/**', '.git/**']
}