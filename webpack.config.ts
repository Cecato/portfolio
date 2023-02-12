const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader"},
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader"}],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: ["file-loader"],
            },
        ],
    },

    devServer: {
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        fallback: {
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
        }
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
};