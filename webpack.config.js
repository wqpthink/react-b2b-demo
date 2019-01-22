const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const assembly_entry = require('./src/conf/assembly-entry');
const assembly_html = require('./src/conf/assembly-html');
const entrys = assembly_entry();
const htmls = assembly_html(entrys, 'production');


module.exports = {
    mode: 'production',
    entry: entrys,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/image/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    },
                    require.resolve('sass-loader')
                ]
            },
            {
                test: /.scss$/,
                use: [
                    require.resolve('style-loader'),
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    require.resolve('sass-loader')
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                exclude: [/\.(jsx|js)$/, /\.html$/, /\.json$/, /\.scss$/],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/image/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            asset: path.resolve(__dirname, 'src/asset/'),
            conf: path.resolve(__dirname, 'src/conf/'),
            util: path.resolve(__dirname, 'src/util/'),
            common: path.resolve(__dirname, 'src/view/common/'),
            layout: path.resolve(__dirname, 'src/view/layout/'),
            page: path.resolve(__dirname, 'src/view/page/'),
        },
        extensions: ['.jsx', '.js', '.scss', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: 'static/[name].[hash].css',
            chunkFilename: 'static/[name].[chunkhash].css'
        }),
        ...htmls
    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 250000,
        maxAssetSize: 250000,
        assetFilter: function(assetFilename){ return !assetFilename.endsWith('.map')}
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                sourceMap: false
            }), //compress js
            new OptimizeCssAssetsWebpackPlugin({}) //compress css
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            name: true,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                default: false
            }
        }
    }
};
