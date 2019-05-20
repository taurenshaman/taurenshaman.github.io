var json_editor;
var json_editor_is_initialized = false;

var current_json;

var cy;
var nodesArray, edgesArray;

function prepareData() {
    nodesArray = [
        { data: { id: 1, label: 'Node in\nthe center', shape: 'text', font: { strokeWidth: 4 } }, position: { x: 0, y: 0 } },
        { data: { id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle' }, position: { x: 0, y: 0 } },
        { data: { id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database' }, position: { x: 0, y: 0 } },
        { data: { id: 4, label: 'This is text\non multiple lines', shape: 'box', x: 0, y: 0 } },
        { data: { id: 5, label: 'Little text', shape: 'ellipse', x: 0, y: 0 } },
        { data: { id: 6, font: { multi: true }, label: '<b>This</b> is a\n<i>default</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' }, position: { x: 0, y: 0 } },
        { data: { id: 7, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box' }, position: { x: 0, y: 0 } },
        { data: { id: 8, font: { multi: 'md', face: 'georgia' }, label: '*This* is a\n_markdown_ *_multi-_ font* `label`', shape: 'box' }, position: { x: 0, y: 0 } },
        { data: { id: 11, label: 'star', shape: 'star' }, position: { x: 0, y: 0 } },
        { data: { id: 12, font: { size: 30 }, size: 40, label: 'big star', shape: 'star' }, position: { x: 0, y: 0 } }
    ];

    edgesArray = [
        { data: { source: 1, target: 2, color: 'red', width: 3, length: 200 } }, // individual length definition is possible
        { data: { source: 1, target: 3, dashes: true, width: 1, length: 200 } },
        { data: { source: 1, target: 4, width: 1, length: 200, label: 'I\'m an edge!' } },
        { data: { source: 1, target: 5, arrows: 'to', width: 3, length: 200, label: 'arrows\nare cool' } },

        { data: { source: 1, target: 11 } },
        { data: { source: 11, target: 12, dashes: true, width: 1, length: 200 } },

        { data: { source: 5, target: 6, font: { multi: true }, label: "multi: <b>true</b>" } },
        { data: { source: 5, target: 7, font: { multi: "md" }, label: "*multi*: _md_" } },
        { data: { source: 5, target: 8, label: "simple" } }
    ];

    // optionsData = {
    //     // true: 使图自动布局，更新节点数据中的x和y。在jsoneditor初始化之后设置成false
    //     // false：为了保存、恢复节点的位置
    //     physics: true
    // };

    //var items = _.contact(nodesArray, edgesArray);
    current_json = {
        elements: {
            nodes: nodesArray,
            edges: edgesArray
        },
        style: [ // the stylesheet for the graph
            {
                selector: 'node[label]',
                style: {
                    'background-color': '#666',
                    'label': 'data(label)'
                }
            },

            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width': 3,
                    'line-color': '#ccc',
                    'opacity': 0.666,
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            },
            // edge handler styles
            {
                selector: '.eh-handle',
                style: {
                    'background-color': 'orange',
                    'width': 12,
                    'height': 12,
                    'shape': 'ellipse',
                    'overlay-opacity': 0,
                    'border-width': 12, // makes the handle easier to hit
                    'border-opacity': 0
                }
            },
            {
                selector: '.eh-hover',
                style: {
                    'background-color': 'orange',
                    'opacity': 0.6
                }
            },
            {
                selector: '.eh-source',
                style: {
                    'border-width': 2,
                    'border-color': 'orange'
                }
            },
            {
                selector: '.eh-target',
                style: {
                    'border-width': 2,
                    'border-color': 'orange'
                }
            },
            {
                selector: '.eh-preview, .eh-ghost-edge',
                style: {
                    'background-color': 'orange',
                    'line-color': 'orange',
                    'target-arrow-color': 'orange',
                    'source-arrow-color': 'orange'
                }
            },
            {
                selector: '.eh-ghost-edge.eh-preview-active',
                style: {
                    'opacity': 0
                }
            }
        ],

        layout: {
            name: 'spread',
            minDist: 40
        },
    };
}

function initCxtCommands() {
    // node
    cy.cxtmenu({
        selector: 'node',

        commands: [
            {
                content: '<span class="mif-cross mif-lg"></span>',
                select: function (ele) {
                    console.log("delete node: " + ele.id());
                }
            },

            {
                content: '<span class="mif-star mif-lg"></span>',
                select: function (ele) {
                    console.log(ele.data('name'));
                },
                enabled: false
            },

            {
                content: '<span class="mif-more-horiz mif-lg"></span>',
                select: function (ele) {
                    console.log("more info about node: " + ele.position());
                }
            }
        ]
    });
    // edge
    cy.cxtmenu({
        selector: 'edge',

        commands: [
            {
                content: '<span class="mif-cross mif-lg"></span>',
                select: function (ele) {
                    console.log("delete edge: " + ele.id());
                }
            },

            {
                content: '<span class="mif-star mif-lg"></span>',
                select: function (ele) {
                    console.log(ele.data('name'));
                },
                enabled: false
            },

            {
                content: '<span class="mif-more-horiz mif-lg"></span>',
                select: function (ele) {
                    console.log("more info about edge: " + ele.position());
                }
            }
        ]
    });
    // canvas
    // cy.cxtmenu({
    //     selector: 'core',
    //     commands: [
    //         {
    //             content: '<span class="mif-add mif-lg"></span>',
    //             select: function(ele){
    //                 console.log( ele );
    //             }
    //         }//,
    //         // {
    //         //     content: 'bg2',
    //         //     select: function(){
    //         //         console.log( 'bg2' );
    //         //     }
    //         // }
    //     ]
    // });

}

function initVizContentControl(elementId) {
    cy = cytoscape({
        container: document.getElementById(elementId), // container to render in
        elements: current_json.elements,
        style: current_json.style,
        layout: current_json.layout
    });
    // tap/click
    cy.on('tap', 'node', function (evt) {
        var node = evt.target;
        console.log('Click/Tap on node:');
        console.log(evt.target);
    });
    cy.on('tap', 'edge', function (evt) {
        var edge = evt.target;
        console.log('Click/Tap on edge:');
        console.log(evt.target);
    });
    cy.on('cxttap', null, function (evt) {
        var edge = evt.target;
        console.log('RightClick/TwoFingersTap:');
        console.log(evt);
    });

    cy.on('drag', 'node', function (evt) {
        var ej = cy.elements().jsons();
        current_json.elements.nodes = _.filter(ej, function (o) { return o.group === "nodes"; });
        current_json.elements.edges = _.filter(ej, function (o) { return o.group === "edges"; });
        json_editor.set(current_json);
    });

    // https://github.com/cytoscape/cytoscape.js-cxtmenu
    initCxtCommands();
    // https://github.com/cytoscape/cytoscape.js-edgehandles
    let eh = cy.edgehandles({
        noEdgeEventsInDraw: true,
        complete: function( sourceNode, targetNode, addedEles ){
            // fired when edgehandles is done and elements are added
            // console.log("source:");
            // console.log(sourceNode);
            // console.log("target:");
            // console.log(targetNode);
            // console.log("addedElement:");
            // console.log(addedEles);
            var newEdge = addedEles.data();
            //console.log(newEdge);
            // 如果不适用正则表达式，_.replace只替换第一个符合的项
            newEdge.id = _.replace(newEdge.id, new RegExp("-","g"), '');
            edgesArray.push({
                data: newEdge
            });
            current_json.elements.edges = edgesArray;
            json_editor.set(current_json);
            cy.json(current_json);
            // test // ok:20190520
            // var ej = cy.elements().jsons();
            // var edges = _.filter(ej, function (o) { return o.group === "edges"; });
            // console.log(edges);
        },
    });

    var nav = cy.navigator(); // get navigator instance, nav
}

function initJsonEditor(elementId) {
    var container = document.getElementById(elementId);
    var options = {
        mode: 'code',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        onError: function (err) {
            alert(err.toString());
        },
        onChangeText: function (jsonString) {
            var json = JSON.parse(jsonString);
            if (json === undefined || !json || _.isEqual(json, current_json))
                return;

            current_json = json;

            // itemsDS.clear();
            // itemsDS.add(current_json["items"]);

            // vis_timeline.setOptions(optionsData);
        }
    };
    json_editor = new JSONEditor(container, options);
}

$(document).ready(function () {
    prepareData();

    initJsonEditor("jsoneditor");
    json_editor.set(current_json);

    initVizContentControl("canvasContainer");
});
