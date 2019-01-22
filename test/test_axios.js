require('../mock/mock_axios');
const AxiosUtil = require('../src/util/AxiosUtil');

AxiosUtil.get('/login').then(function(res){
    console.log("result:"+res.data);
}).catch(function(error){
    console.log("error:"+error);
});
