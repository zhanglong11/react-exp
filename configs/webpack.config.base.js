const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(:?jpg|gif|png)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1200
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@Components': path.resolve(__dirname, '../src/components'),
            '@Pages': path.resolve(__dirname, '../src/pages')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CIM6D',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/libs'),
                to: path.resolve(__dirname, '../dist/libs/')
            },
        ])
    ]
}
