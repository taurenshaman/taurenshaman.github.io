var json_editor;
var json_editor_is_initialized = false;

var current_json;

var cy;
var nodesArray, edgesArray;
var position_TapHold;

function prepareData() {
    nodesArray = [
        { data: { id: 1, label: 'Node in\nthe center', shape: 'text', font: { strokeWidth: 4 } }, position: { x: 0, y: 0 } },
        { data: { id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle' }, position: { x: 0, y: 0 } },
        { data: { id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database' }, position: { x: 0, y: 0 } },
        { data: { id: 4, label: 'This is text\non multiple lines', shape: 'box', x: 0, y: 0 } },
        { data: { id: 5, label: 'Little text', shape: 'ellipse', x: 0, y: 0 } },
        { data: { id: 6, font: { multi: true }, label: '<b>This</b> is a\n<i>default</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box', contentType: 'html' }, position: { x: 0, y: 0 } },
        { data: { id: 7, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', shape: 'box', contentType: 'html' }, position: { x: 0, y: 0 } },
        { data: { id: 8, font: { multi: 'md', face: 'georgia' }, label: '*This* is a\n_markdown_ *_multi-_ font* `label`', shape: 'box', contentType: 'markdown' }, position: { x: 0, y: 0 } },
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

        { data: { source: 5, target: 6, font: { multi: true }, label: "multi: <b>true</b>", contentType: 'html' } },
        { data: { source: 5, target: 7, font: { multi: "md" }, label: "*multi*: _md_", contentType: 'markdown' } },
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
            // {
            //     selector: 'node',
            //     style: {
            //         'width': '20px',
            //         'height': '20px',
            //         // 'text-wrap': 'wrap',
            //         // 'text-max-width': '200px',
            //         "overlay-padding": "5px",
            //         "overlay-opacity": 0,
            //         "z-index": 10,
            //         "border-width": 2,
            //         "border-opacity": 0,
            //         'background-color': '#acf',
            //         'border-width': 1,
            //         'border-color': '#69c'
            //     }
            // },
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
                    'width': 1.3,
                    'line-color': '#666',
                    'opacity': 1,
                    'target-arrow-color': '#666',
                    'target-arrow-shape': 'vee',
                    'target-arrow-color': '#666',
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
            { // delete
                content: '<span class="mif-cross mif-lg"></span>',
                select: function (ele) {
                    var itemId = ele.id();
                    console.log("delete node: " + itemId);
                    Metro.dialog.create({
                        title: "Are you sure to DELETE the node?",
                        content: "<div>Node: id = " + itemId + "</div>",
                        actions: [
                            {
                                caption: "OK",
                                cls: "js-dialog-close alert",
                                onclick: function () {
                                    var toDelete = cy.filter(function (element, i) {
                                        return element.isNode() && element.data('id') == itemId;
                                    });
                                    cy.remove(toDelete);
                                    // copy and update JsonEditor
                                    copyCyData(true, true, false);
                                    json_editor.set(current_json);
                                    console.log("delete node: " + itemId + "... DONE!");
                                }
                            },
                            {
                                caption: "Cancel",
                                cls: "js-dialog-close",
                                onclick: function () {
                                    console.log("delete node: " + itemId + "... CANCELLED!");
                                }
                            }
                        ]
                    });
                }
            },

            { // edit
                content: '<span class="mif-pencil mif-lg"></span>',
                select: function (ele) {
                    console.log(ele.data('name'));
                },
                enabled: false
            },

            { // more
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
            { // delete
                content: '<span class="mif-cross mif-lg"></span>',
                select: function (ele) {
                    var itemId = ele.id();
                    console.log("delete edge: " + itemId);
                    Metro.dialog.create({
                        title: "Are you sure to DELETE the edge?",
                        content: "<div>Edge: id = " + itemId + "</div>",
                        actions: [
                            {
                                caption: "OK",
                                cls: "js-dialog-close alert",
                                onclick: function () {
                                    var toDelete = cy.filter(function (element, i) {
                                        return element.isEdge() && element.data('id') == itemId;
                                    });
                                    cy.remove(toDelete);
                                    // copy and update JsonEditor
                                    copyCyData(false, true, false);
                                    json_editor.set(current_json);
                                    console.log("delete edge: " + itemId + "... DONE!");
                                }
                            },
                            {
                                caption: "Cancel",
                                cls: "js-dialog-close",
                                onclick: function () {
                                    console.log("delete edge: " + itemId + "... CANCELLED!");
                                }
                            }
                        ]
                    });
                }
            },

            { // edit
                content: '<span class="mif-pencil mif-lg"></span>',
                select: function (ele) {
                    console.log(ele.data('name'));
                },
                enabled: false
            },

            { // more info
                content: '<span class="mif-more-horiz mif-lg"></span>',
                select: function (ele) {
                    console.log("more info about edge: " + ele.position());
                }
            }
        ]
    });
    // canvas
    cy.cxtmenu({
        selector: 'core',
        commands: [
            {
                content: '<span class="mif-add mif-lg"></span>',
                select: function (ele) {
                    // var pos = ele.getCenterPan();
                    // console.log(pos);
                    // pos = ele.renderedPosition;
                    // console.log(pos);
                    // console.log(cy);
                    // console.log(ele);
                    createNode(position_TapHold.x, position_TapHold.y, "Node.abc");
                    // console.log( "New node at position: (" + pos.x + ", " + pos.y + ")" );
                }
            }//,
            // {
            //     content: 'bg2',
            //     select: function(){
            //         console.log( 'bg2' );
            //     }
            // }
        ]
    });

}

function initVizContentControl(elementId) {
    cy = cytoscape({
        container: document.getElementById(elementId), // container to render in
        zoom: 1,
        elements: current_json.elements,
        style: current_json.style,
        layout: current_json.layout
    });
    // tap/click
    cy.on('tap', 'node', function (evt) {
        // var node = evt.target;
        // console.log('Click/Tap on node:');
        // console.log(evt.target);
    });
    cy.on('tap', 'edge', function (evt) {
        // var edge = evt.target;
        // console.log('Click/Tap on edge:');
        // console.log(evt.target);
    });
    cy.on('cxttap', null, function (evt) {
        // var edge = evt.target;
        // console.log('RightClick/TwoFingersTap:');
        // console.log(evt);
    });
    cy.on('taphold', null, function (evt) {
        position_TapHold = evt.position;
    });

    cy.on('drag', 'node', function (evt) {
        copyCyData(true, true, false);
        json_editor.set(current_json);
    });

    // node label in html
    // https://github.com/kaluginserg/cytoscape-node-html-label
    // cy.nodeHtmlLabel([
    //     {
    //         query: 'node[contentType="html"]',
    //         cssClass: 'cy-title',
    //         valign: "top",
    //         valignBox: "top",
    //         tpl: function (data) {
    //             return '<p class="cy-title">' + data.label + '</p>';
    //         }
    //     },
    //     {
    //         query: 'node',
    //         //cssClass: 'cy-title',
    //         valign: "top",
    //         valignBox: "top",
    //         tpl: function (data) {
    //             return data.label;
    //         }
    //     }
    // ]);

    // https://github.com/cytoscape/cytoscape.js-cxtmenu
    initCxtCommands();
    // https://github.com/cytoscape/cytoscape.js-edgehandles
    let eh = cy.edgehandles({
        noEdgeEventsInDraw: true,
        complete: function (sourceNode, targetNode, addedEles) {
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
            newEdge.id = _.replace(newEdge.id, new RegExp("-", "g"), '');
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

    //var nav = cy.navigator(); // get navigator instance, nav
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

function createNode(x, y, label) {
    var id = _.uuid();
    id = _.replace(id, new RegExp("-", "g"), '');
    nodesArray.push({
        data: {
            id: id,
            label: label
        },
        position: { x: x, y: y }
    });
    current_json.elements.nodes = nodesArray;
    json_editor.set(current_json);
    cy.json(current_json);
}

function copyCyData(copyNodes, copyEdges, copyConfig) {
    var ej = cy.elements().jsons();
    if (copyNodes === true) {
        current_json.elements.nodes = _.filter(ej, function (o) { return o.group === "nodes"; });
    }
    if (copyEdges === true) {
        current_json.elements.edges = _.filter(ej, function (o) { return o.group === "edges"; });
    }
    if (copyConfig === true) {
        // TODO
    }
}

$(document).ready(function () {
    prepareData();

    initJsonEditor("jsoneditor");
    json_editor.set(current_json);

    initVizContentControl("canvasContainer");
});