/**
 * @file 过滤器 样例
 * @author 杨小旭
 * @version 1.0.0
 */
var Filter = require('../filter_all.js');

var dom = document.getElementById('filter-box');

var data = [{
    key: 'productName',
    value: '应用名称',
    list: [{
        id: 1,
        value: '活体识别'
    },
        {
            id: 2,
            value: '活体识别2'
        }, {
            id: 3,
            value: '活体识别3'
        }]
},
    {
        key: 'product',
        value: '种类',
        list: [{
            id: 1,
            value: '活体识别'
        }, {
            id: 2,
            value: '活体识别2'
        },
            {
                id: 3,
                value: '活体识别3'
            }]
    }
];

var f = new Filter(data, dom);
