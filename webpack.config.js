
const path = require('path')
const fs = require('fs')

const externals = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    externals[mod] = `commonjs ${mod}`
  })

module.exports = {
  externals,
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    library: 'score-board-server',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve('./src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: ["node_modules"],
        include: path.resolve(__dirname, "src"),
        options: {
          configFileName: 'tsconfig.json'
        }
      }
    ]
  }
}
