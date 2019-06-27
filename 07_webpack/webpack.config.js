const webpack = require('webpack')
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new uglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new optimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCSSExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCSSExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...,
                'sass-loader' // Interpreta os comandos do sass
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}