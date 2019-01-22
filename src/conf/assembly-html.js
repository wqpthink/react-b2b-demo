const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(entrys, webpack_mode){
    let htmls = [];
    for (const key in entrys) {
        if (entrys.hasOwnProperty(key)) {
            let filename_tmp = (key === 'login'?"index.html":`${key}.html`); //在开发中webpack-dev-sever默认启动index.html
            htmls.push(new HtmlWebpackPlugin({
                template: "./src/asset/template.html",
                filename: filename_tmp,
                title: "react b2b demo",
                favicon: '',
                chunks: [`${key}`],
                minify: webpack_mode !== 'production' ? false : {
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeEmptyElements: true,
                    removeTagWhitespace: true,
                    caseSensitive: false,
                    collapseWhitespace: true,
                    sortClassName: true,
                    sortAttributes: true
                }
            }));
        }
    }
    return htmls;
};
