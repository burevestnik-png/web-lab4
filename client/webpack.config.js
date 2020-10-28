const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

const environment = process.env.NODE_ENV

const isDevelopmentMode = environment === 'development'
const isProductionMode = !isDevelopmentMode

const createFileName = (extension, output = '') => {
    return isDevelopmentMode
        ? `${output}[name].${extension}`
        : `${output}[name].[contenthash].${extension}`
}

const createOptimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    }

    if (isProductionMode) {
        config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.tsx',
    output: {
        filename: createFileName('js', './static/js/'),
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            minify: {
                collapseWhitespace: isProductionMode,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: createFileName('css', './static/css/'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'build'),
                },
                /*{
               from: path.resolve(__dirname, "public/logo.png"),
               to: path.resolve(__dirname, "build"),
             },*/
            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.json'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@theme': path.resolve(__dirname, 'src/theme'),
        },
    },
    devtool: isDevelopmentMode ? 'source-map' : '',
    optimization: createOptimization(),
    devServer: {
        port: 4300,
        hot: isDevelopmentMode,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopmentMode,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
}
