var json_editor;
var current_json;

var vis_timeline;
var itemsArray;
var optionsData;
var itemsDS;

function prepareData(){
    itemsArray = [
        {id: "v0.1.0", content: '<span class="fg-gray">v0.1.0</span><br>使用测试数据实现只读的Demo。', start: '2017-04-20'},
        {id: "v0.2.0", content: '<span class="fg-gray">v0.2.0</span><br>更新前端框架：SemanticUI-->Metro4。', start: '2017-06-14'},
        {id: "v0.3.0", content: '<span class="fg-gray">v0.3.0</span><br>实现用户系统。', start: '2017-09-18'},
        {id: "v1.0.0", content: '<span class="fg-gray">v1.0.0</span><br>实现基本的CRUD功能。', start: '2018-01-16'},
        {id: "v1.0.3", content: '<span class="fg-gray">v1.0.3</span><br>fix.', start: '2018-03-25'},
        {id: "v1.1.0", content: '<span class="fg-gray">v1.1.0</span><br>引入OpenID等第三方用户系统。', start: '2018-04-27'},
        {id: "v1.2.0", content: '<span class="fg-gray">v1.2.0</span><br>新特性：地图显示。', start: '2018-06-21'},
        {id: "v1.3.0", content: '<span class="fg-gray">v1.3.0</span><br>新特性：成功邀请新用户后有奖励。', start: '2018-08-21'}
    ];
    
    optionsData = {
    };

    itemsDS = new vis.DataSet(itemsArray);

    current_json = {
        items: itemsArray,
        options: optionsData
    };
}

function initVisTimeline(elementId) {
    var container = document.getElementById(elementId);
    vis_timeline = new vis.Timeline(container, itemsDS, optionsData);
}

function initJsonEditor(elementId){
    var container = document.getElementById(elementId);
    var options = {
        mode: 'code',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        onError: function (err) {
            alert(err.toString());
        },
        onChangeText: function(jsonString){
            var json = JSON.parse(jsonString);
            if(json === undefined || !json || _.isEqual(json, current_json))
                return;

            current_json = json;
            
            itemsDS.clear();
            itemsDS.add(current_json["items"]);

            vis_timeline.setOptions(optionsData);
        }
    };
    json_editor = new JSONEditor(container, options);
}

$( document ).ready(function() {
    prepareData();

    initJsonEditor("jsoneditor");
    json_editor.set(current_json);

    initVisTimeline( "canvasContainer" );
});
