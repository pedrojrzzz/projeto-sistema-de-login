const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './frontend/main.js',
        alterarDados: './frontend/mainAlterarDados.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js', 'bundles'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test:/\.css$/,
            use: ['style-loader', 'css-loader']
      }]
    },
    devtool: 'source-map'
}