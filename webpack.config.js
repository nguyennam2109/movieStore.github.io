const path = require('path');
const HWP = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const envPlugin = new Dotenv();
const htmlPlugin = new HWP({
    template: "./public/index.html",
    filename: "./index.html"
});
const publicUrl = '/public';
module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
        ]
    },
    node: {
        fs: 'empty'
    },
    target: 'web',
    plugins: [htmlPlugin
        , new Dotenv()
        // , new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
        //     PUBLIC_URL: publicUrl,
        //     // You can pass any key-value pairs, this was just an example.
        //     // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
        // }),
        // // Generates an `index.html` file with the <script> injected.
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: path.resolve('public/index.html'),
        // })
    ]
}