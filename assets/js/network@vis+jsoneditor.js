var json_editor;
var json_editor_is_initialized = false;
var current_json;

var vis_network;
var nodesArray, edgesArray;
var optionsData;
var nodesDS, edgesDS;

var triggeredByVis = false;
var triggeredByEditor = false;

function prepareData(){
    nodesArray = [
        { id: 1, label: 'Node in\nthe center', shape: 'text', font: { strokeWidth: 4 }, x: 0, y: 0 },
        { id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle' , x: 0, y: 0},
        { id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database' , x: 0, y: 0},
        { id: 4, label: 'This is text\non multiple lines', shape: 'box' , x: 0, y: 0},
        { id: 5, label: 'Little text', shape: 'ellipse' , x: 0, y: 0},
        { id: 6, font: { multi: true }, label: '<b>This</b> is a\n<i>default</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' , x: 0, y: 0},
        { id: 7, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' , x: 0, y: 0},
        { id: 8, font: { multi: 'md', face: 'georgia' }, label: '*This* is a\n_markdown_ *_multi-_ font* `label`', shape: 'box' , x: 0, y: 0},
        { id: 11, label: 'star', shape: 'star' , x: 0, y: 0},
        { id: 12, font: { size: 30 }, size: 40, label: 'big star', shape: 'star' , x: 0, y: 0}
    ];

    edgesArray = [
        { from: 1, to: 2, color: 'red', width: 3, length: 200 }, // individual length definition is possible
        { from: 1, to: 3, dashes: true, width: 1, length: 200 },
        { from: 1, to: 4, width: 1, length: 200, label: 'I\'m an edge!' },
        { from: 1, to: 5, arrows: 'to', width: 3, length: 200, label: 'arrows\nare cool' },
        
        { from: 1, to: 11 },
        { from: 11, to: 12, dashes: true, width: 1, length: 200 },

        { from: 5, to: 6, font: { multi: true }, label: "multi: <b>true</b>" },
        { from: 5, to: 7, font: { multi: "md" }, label: "*multi*: _md_" },
        { from: 5, to: 8, label: "simple" }
    ];

    optionsData = {
        // true: 使图自动布局，更新节点数据中的x和y。在jsoneditor初始化之后设置成false
        // false：为了保存、恢复节点的位置
        physics: true
    };

    nodesDS = new vis.DataSet(nodesArray);
    edgesDS = new vis.DataSet(edgesArray);

    current_json = {
        nodes: nodesArray,
        edges: edgesArray,
        options: optionsData
    };
}

function objectToArray(obj) {
    return Object.keys(obj).map(function (key) {
      obj[key].id = key;
      return obj[key];
    });
}

// 检查是不是所有的节点都在(0,0)
function allNodesAtOrginalPoint(nodes){
    var originalPoints = _.takeWhile(nodes, function(o) { return o.x == 0 && o.y == 0; });
    return _.size(originalPoints) == _.size(nodes);
}

function savePositionsOfNodes(isTriggeredByVis){
    var positions = objectToArray(vis_network.getPositions());
    //console.log("positions", positions);
    
    _.forEach(current_json.nodes, function(cjn) {
        //console.log("cjn", cjn);
        var nodeWithPos = _.find(positions, function(o) { return o.id == cjn.id; });
        //console.log("nodeWithPos", nodeWithPos);
        cjn.x = nodeWithPos.x;
        cjn.y = nodeWithPos.y;
        });

    triggeredByVis = isTriggeredByVis;
    json_editor.set(current_json);
    //console.log("update json_editor by current_json!", params);
}

// 万事俱备准备运行--请确保只运行一次
function allReady(){
    // json editor
    initJsonEditor("jsoneditor");
    // 取消物理效果和自动布局，使得能保存、恢复节点的位置
    current_json.options.physics = false;
    vis_network.setOptions(current_json.options);
    savePositionsOfNodes(false);
}

function initVisNetwork(elementId) {
    var container = document.getElementById(elementId);
    var data = {
        nodes: nodesDS,
        edges: edgesDS
    };
    // 根据是不是所有的节点都在原点来决定是否开启带自动布局的物理效果
    var allDefaultPositions = allNodesAtOrginalPoint(nodesDS.get());
    optionsData.physics = allDefaultPositions;
    vis_network = new vis.Network(container, data, optionsData);
    
    vis_network.on("stabilized", function (params) {
        if(json_editor_is_initialized == true){ // 确保jsoneditor只初始化一次
            return;
        }
        allReady();
    });

    vis_network.on("dragEnd", function (params) {
        //console.log("dragEnd!", params);
        savePositionsOfNodes(true);
    });

    // Set the coordinate system of Network such that it exactly
    // matches the actual pixels of the HTML canvas on screen
    // this must correspond with the width and height set for
    // the networks container element.
    // vis_network.moveTo({
    //     position: {x: 0, y: 0},
    //     offset: {x: -container.width()/2, y: -container.height()/2},
    //     scale: 1,
    // });

    if(allDefaultPositions == false && json_editor_is_initialized == false){
        allReady();
    }
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
            if(triggeredByVis === true){
                triggeredByVis = false;
                return;
            }

            var json = JSON.parse(jsonString);
            if(json === undefined || !json || _.isEqual(json, current_json))
                return;

            current_json = json;
            
            nodesDS.clear();
            nodesDS.add(current_json["nodes"]);
            edgesDS.clear();
            edgesDS.add(current_json["edges"]);

            vis_network.setOptions(optionsData);
        }
    };
    json_editor = new JSONEditor(container, options);
    json_editor_is_initialized = true;
}

$( document ).ready(function() {
    prepareData();

    initVisNetwork( "canvasContainer" );
    
});