const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    // devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "images/[name][ext]",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            templateParameters: {
                title: "we are now in webpack",
            },
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", {interlaced: true}],
                    ["mozjpeg", {quality: 50}],
                    ["pngquant", {quality: [0.5, 0.7]}],
                    ["svgo"],
                ],
            },
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
    ]
}