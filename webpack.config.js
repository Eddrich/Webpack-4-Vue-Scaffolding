const HTMLWwebpackPlugin = require('html-webpack-plugin');
const {join} = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = {
    mode: 'development',
    entry: join(__dirname, 'src/app.js'),
    output: {
        path: join(__dirname, 'build'),
        filename: "app.bundled.js"
    },
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=/public/fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWwebpackPlugin({
            showErrors: true,
            cache: true,
            title: "Title of Your App",
            // favicon: join(__dirname,'favicon.ico'),
            template: join(__dirname,'public/index.html')
        })
    ]
};
