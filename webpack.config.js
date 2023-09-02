const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
    devtool: "source-map",
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        open: true,
        watchFiles: ["./src/**"],
        port: 4000,
        hot: true,
    },
};
