const fs = require("fs");
const path = require("path");
const glob = require("glob");
const pattern = "src" + path.sep + "view" + path.sep + "page" + path.sep + "**" + path.sep + "index.js";
const entry_array = glob.sync(pattern);
const process_path = process.cwd();

module.exports = function (){
    let entrys = {};
    entry_array.forEach(function(item){
        item = item.replace(/\//g, path.sep).replace(/\\/g, path.sep);
        item = (process_path + path.sep + item);
        let a = path.dirname(item);
        let b = a.substring(a.lastIndexOf(path.sep));
        let key = b.replace(/\\/g, "").replace(/\//g, "");
        entrys[key] = item;
    });
    return entrys;
};
