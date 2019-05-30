const cyStyles = [ // the stylesheet for the graph
    {
        selector: 'node',
        style: {
            // 'width': '20px',
            // 'height': '20px',
            'text-wrap': 'wrap',
            'text-max-width': '200px',
            // "overlay-padding": "5px",
            // "overlay-opacity": 0,
            // "z-index": 10,
            // "border-width": 2,
            // "border-opacity": 0,
            'background-color': '#acf',
            'border-width': 1,
            'border-color': '#69c'
        }
    },
    {
        selector: 'node[title]',
        style: {
            'label': 'data(title)'
        }
    },

    {
        selector: "edge", // default edge style
        style: {
            "curve-style": "unbundled-bezier",
            "control-point-distance": 30,
            "control-point-weight": 0.5,
            "opacity": 0.9,
            "overlay-padding": "3px",
            "overlay-opacity": 0,
            "label": "data(title)",
            "font-family": "FreeSet,Arial,sans-serif",
            "font-size": 9,
            "font-weight": "bold",
            "text-background-opacity": 1,
            "text-background-color": "#ffffff",
            "text-background-padding": 3,
            "text-background-shape": "roundrectangle",
            "width": 1,
            "target-arrow-shape": "vee"
        }
    }
];

const cyLayoutOptions = {
    breadthfirst: {
        name: "breadthfirst"
    },
    circle: {
        name: "circle"
    },
    concentric: {
        name: "concentric",
        concentric: function( node ){
            return node.degree();
        },
        levelWidth: function( nodes ){
            return nodes.maxDegree() / 4;
        }
    },
    cose: {
        name: 'cose',
        padding: 100,
        nodeOverlap: 10,
        idealEdgeLength: function (edge) {
            // switch (edge.data().type) {
            //     case 1 :
            //         return 30;
            //     case 2 :
            //     case 3 :
            //         return 120;
            //     case 0 :
            //     default :
            //         return 45;
            // }
            return _.random(40, 130);
        },
        edgeElasticity: function (edge) {
            // switch (edge.data().type) {
            //     case 1 :
            //         return 50;
            //     case 2 :
            //     case 3 :
            //         return 200;
            //     case 0 :
            //     default :
            //         return 100;
            // }
            return _.random(80, 260);
        },
        nestingFactor: 1.2,
        initialTemp: 1000,
        coolingFactor: 0.99,
        minTemp: 1.0,
        gravity: 1.4
    },
    grid: {
        name: "grid"
    },
    random: {
        name: "random"
    },
    spread: {
        name: "spread",
        minDist: 40
    }
};

var json_editor;
var quill;


function initVizContentControl(elementId){
  quill = new Quill("#" + elementId, {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block', 'cytoscape-block']
      ]
    },
    placeholder: '> to be geek_',
    theme: 'snow'
  });
  quill.on('text-change', function(delta, oldDelta, source) {
    var c = quill.getContents();
    // var str = JSON.stringify(c);
    // $("#result").text(str);
    json_editor.set(c);
  });
  // Handlers can also be added post initialization
  // var toolbar = quill.getModule('toolbar');
  // toolbar.addHandler('cytoscape-block', showCytoscapeUI);
}

// function showCytoscapeUI(){
//   let range = quill.getSelection(true);
//   quill.insertEmbed(range.index, 'cytoscape-block', {
//     alt: 'Quill Cloud',
//     url: 'https://quilljs.com/0.20/assets/images/cloud.png'
//   }, Quill.sources.USER);
//   quill.setSelection(range.index + 1, Quill.sources.SILENT);
// }

function initJsonEditor(elementId) {
    var container = document.getElementById(elementId);
    var options = {
        mode: 'code',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        onError: function (err) {
            alert(err.toString());
        }
    };
    json_editor = new JSONEditor(container, options);
}

$(document).ready(function () {
  initJsonEditor("jsoneditor");
  initVizContentControl("editorContainer");
});