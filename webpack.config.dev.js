const path = require('path');
const webpack = require('webpack');
const assembly_entry = require('./src/conf/assembly-entry');
const assembly_html = require('./src/conf/assembly-html');
const entrys = assembly_entry();
const htmls = assembly_html(entrys, 'development');

module.exports = {
    mode: 'development',
    entry: entrys,
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true
                }
            },
            {
                exclude: [/\.(jsx|js)$/, /\.html$/, /\.json$/, /\.scss$/],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
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
            page: path.resolve(__dirname, 'src/view/page/')
        },
        extensions: ['.jsx', '.js', '.scss', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        ...htmls
    ],
    devtool: 'inline-source-map',
    devServer: {
        open: 'Chrome',
        host: 'localhost',
        port: 8080,
        inline: true,
        contentBase: path.join(__dirname, '/'),
        compress: true,
        // publicPath: path.resolve(__dirname, './devp'),
        hot: true
    }
};
