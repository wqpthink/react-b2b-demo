require('../../../../../mock/mock_axios.js');
const AxiosUtil = require('util/AxiosUtil');

export const login_handle = (username, password) => {
    return dispatch => {
        AxiosUtil.get('/login').then(function(res){
            console.log("1result:"+res.data);
        }).catch(function(error){
            console.log("1error:"+error);
        });

        AxiosUtil.post('/menu',{}).then(function(res){
            console.log("2result:"+res.data);
        }).catch(function(error){
            console.log("2error:"+error);
        });

        AxiosUtil.get_download('http://manager-doctor.daanlab.com/resources/image/noimage.png').then(function(res){
            console.log("3result:"+res.data);
        }).catch(function(error){
            console.log("3result:"+error);
        });
    };
};

