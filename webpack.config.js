const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    devtool: "source-map",
    entry: './src/js/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
							url: false // для того, чтобы url(...) в css компилировалось без ошибок
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new miniCss({
            filename: 'css/style.css',
        }),
        

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/images',
                    to: './images',
                    force: true,
                    noErrorOnMissing: true,
                },
                {
                    from: './src/fonts',
                    to: './fonts',
                    force: true,
                    noErrorOnMissing: true,
                },
            ]
        }),
    
    ]
};

module.exports = config;