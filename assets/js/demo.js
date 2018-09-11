var json_editor;
var current_json;

var vis_network;
var nodesArray, edgesArray;
var optionsData;
var nodesDS, edgesDS;

function prepareData(){
    nodesArray = [
        { id: 1, label: 'Node in\nthe center', shape: 'text', font: { strokeWidth: 4 } },
        { id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle' },
        { id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database' },
        { id: 4, label: 'This is text\non multiple lines', shape: 'box' },
        { id: 5, label: 'Little text', shape: 'ellipse' },
        { id: 6, font: { multi: true }, label: '<b>This</b> is a\n<i>default</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' },
        { id: 7, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' },
        { id: 8, font: { multi: 'md', face: 'georgia' }, label: '*This* is a\n_markdown_ *_multi-_ font* `label`', shape: 'box' },
        { id: 11, label: 'star', shape: 'star' },
        { id: 12, font: { size: 30 }, size: 40, label: 'big star', shape: 'star' }
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
    };

    nodesDS = new vis.DataSet(nodesArray);
    edgesDS = new vis.DataSet(edgesArray);

    current_json = {
        nodes: nodesArray,
        edges: edgesArray,
        options: optionsData
    };
}

function initVisNetwork(elementId) {
    var container = document.getElementById(elementId);
    var data = {
        nodes: nodesDS,
        edges: edgesDS
    };
    vis_network = new vis.Network(container, data, optionsData);
    // vis_network.on("stabilized", function (params) {
    //     var positions = vis_network.getPositions();
    //     console.log("stabilized!", params);
    // });
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
            
            nodesDS.clear();
            nodesDS.add(current_json["nodes"]);
            edgesDS.clear();
            edgesDS.add(current_json["edges"]);

            vis_network.setOptions(optionsData);
        }
    };
    json_editor = new JSONEditor(container, options);
}

$( document ).ready(function() {
    prepareData();

    initJsonEditor("jsoneditor");
    json_editor.set(current_json);

    initVisNetwork( "canvasContainer" );
});