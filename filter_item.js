/**
 * @file 过滤器组件-单项  注意：此文件作为单元测试和注释生产文档标准示例，暂不要实际使用！
 * @author 杨小旭
 * @version 1.0.0
 */

var templates = {
    'checkbox': '',
    'radio': '',
    'datetime': ''
};

/**
 * Filter 过滤器组件
 *
 * @constructor
 * @param {Object} data {key: 'productName', value: '应用名称', list: [{id: 1, value: '活体识别'}, {id: 2, value: '活体识别2'}, {id: 3, value: '活体识别3'}]}.
 * @param {Array} atData - The author of the book.
 * @param {string} container 装载容器
 */

function FilterItme(data) {
    this.data = data;
    this.value = '';
    this.template = [
        '<div class="item-name">{nameTemplate}</div>',
        '<div class="item-box">',
            '{itemTemplate}',
        '</div>'
    ].join('\r\n');
    this.init();
}

/**
 * 初始化
 *
 * @function init
 */
FilterItme.prototype.init = function () {

};

/**
 * 返回node对象
 *
 * @function getDom
 * @return {Object} 返回dom对象
 */
FilterItme.prototype.getDom = function () {
    var tempValue = this.template.replace(/\{nameTemplate\}/g, this.data.value);
    var tempItems = '';
    this.data.list.forEach(function (item, index, obj) {
        tempItems += '<span class="at">' + item.value + '</span>';
    });
    var endTemp = tempValue.replace(/\{itemTemplate\}/g, tempItems);
    var nodeDom = document.createElement('div');
    nodeDom.innerHTML = endTemp;
    return nodeDom;
};



/**
 * 为过滤器绑定事件
 *
 * @function attachEvent
 */
FilterItme.attachEvent = function () {
    // todo
};



/**
 * 重置过滤器
 *
 * @function reset
 */
FilterItme.reset = function () {
    // todo
};


module.exports = FilterItme;
