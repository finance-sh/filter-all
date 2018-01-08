/**
 * @file 过滤器组件  注意：此文件作为单元测试和注释生产文档标准示例，暂不要实际使用！
 * @author 杨小旭
 * @version 1.0.0
 */
// require('./filter.less');
var FilterItem = require('./filter_item.js');

/**
 * Filter 过滤器组件
 *
 * @constructor
 * @param {Object} data {key: 'productName', value: '应用名称', list: [{id: 1, value: '活体识别'}, {id: 2, value: '活体识别2'}, {id: 3, value: '活体识别3'}]}.
 * @param {string} container 装载容器
 */
function Filter(data, container) {
    this.data = data;
    this.container = container;
    this.value = [];
    this.init();
}

/**
 * 初始化
 *
 * @function init
 * @description 初始化.
 */
Filter.prototype.init = function () {
// Create the fragment
    var fragment = document.createDocumentFragment();
    this.data.forEach(function (item, index, obj) {
        var fItme = new FilterItem(item);
        var childDom = fItme.getDom();
        fragment.appendChild(childDom);
    });
    this.container.appendChild(fragment);
};

/**
 * 添加过滤项目
 *
 * @function addFilterItem
 */
Filter.addFilterItem = function () {
    // todo
};

/**
 * 添加自定义过滤项目
 *
 * @function addFilterItem
 */
Filter.addFilterItemCustom = function () {
    // todo
};

/**
 * 重置过滤器.
 *
 * @function reset
 */
Filter.reset = function () {
    // todo
};

module.exports = Filter;
