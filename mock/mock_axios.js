const Mock = require('mockjs');
const random = Mock.Random;

Mock.setup({
    timeout: '200-400'
});

let data = {
    code: 200,
    message: '操作成功',
    data: [
        'abc','def','ghi','jkm'
    ]
}

Mock.mock('/login','get',data);

Mock.mock('/menu','post',data);
