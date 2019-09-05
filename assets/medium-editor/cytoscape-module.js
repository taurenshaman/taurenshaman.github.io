
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
        concentric: function (node) {
            return node.degree();
        },
        levelWidth: function (nodes) {
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

var DataUriCy = {};
var CyCache = {};

function computeHash(str) {
    var hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function tryRefreshCyAfterResize(id) {
    var cy = CyCache[id];
    if (cy) {
        cy.zoom(1);
        cy.resize();
        cy.center();
    }
}

function setupFullScreen(wrapperId, btn) {
    const wrapper = document.getElementById(wrapperId + "_wrapper");
    if (wrapper.addEventListener) { // listen to exitFullScreen
        wrapper.addEventListener('webkitfullscreenchange', () => {
            tryRefreshCyAfterResize(wrapperId);
        }, false);
        wrapper.addEventListener('mozfullscreenchange', () => {
            tryRefreshCyAfterResize(wrapperId);
        }, false);
        wrapper.addEventListener('fullscreenchange', () => {
            tryRefreshCyAfterResize(wrapperId);
        }, false);
        wrapper.addEventListener('MSFullscreenChange', () => {
            tryRefreshCyAfterResize(wrapperId);
        }, false);
    }

    btn.innerHTML = '<span class="mif-enlarge fg-cyan"></span>';
    btn.addEventListener('click', () => {
        requestFullScreen(wrapper);
    });
}

function buildSelectOption(eleSelect, optionValue, optionTitle) {
    const opt = document.createElement('option');
    opt.setAttribute("value", optionValue);
    opt.text = optionTitle;
    // append to select
    eleSelect.appendChild(opt);
    return opt;
}

function initCyLayout(divLayout, wrapperId) {
    const eleSelect = document.createElement('select');
    eleSelect.setAttribute("data-role", "select");
    // init options list
    buildSelectOption(eleSelect, "breadthfirst", "breadthfirst");
    buildSelectOption(eleSelect, "circle", "circle");
    buildSelectOption(eleSelect, "concentric", "concentric");
    buildSelectOption(eleSelect, "cose", "cose");
    buildSelectOption(eleSelect, "grid", "grid");
    buildSelectOption(eleSelect, "random", "random");
    var defaultLayout = buildSelectOption(eleSelect, "spread", "spread");
    defaultLayout.setAttribute("selected", "selected");
    // onchange
    eleSelect.onchange = (event) => {
        var selectElement = event.target;
        var cy = CyCache[wrapperId];
        var tmp = cy.layout(cyLayoutOptions[selectElement.value]);
        tmp.run();
    };
    // append to div
    divLayout.appendChild(eleSelect);
}


function initCytoscape(data, wrapperId, layoutName) {
    var wrapper = document.getElementById(wrapperId + "_wrapper");

    // cy core
    var divCy = document.getElementById(wrapperId);

    const divSettings = document.createElement('div');
    divSettings.classList.add('flex-justify-center');
    divSettings.classList.add('text-center');
    // cy layout
    // const divCyLayout = document.createElement('div');
    // initCyLayout(divCyLayout, wrapperId);
    // divSettings.appendChild(divCyLayout);

    // fullscreen
    const btnFullscreen = document.createElement('button');
    setupFullScreen(wrapperId, btnFullscreen);
    divSettings.appendChild(btnFullscreen);

    wrapper.innerHTML = '';
    wrapper.appendChild(divCy);
    wrapper.appendChild(divSettings);
    //wrapper.classList.add('support-full-screen');

    var cy = cytoscape({
        container: divCy, //document.getElementById(elementId), // container to render in
        zoom: 1,
        elements: data,
        style: cyStyles,
        layout: {
            name: layoutName
        }
    });
    CyCache[wrapperId] = cy;
    return cy;
}



/*
Markdown example: 
```cytoscape
data: https://raw.githubusercontent.com/taurenshaman/taurenshaman.github.io/master/data/cytoscape-0.json
layout: random
```
*/


rangy.init();

var MeCytoscapeButton = MediumEditor.extensions.button.extend({
    name: 'me-cytoscape',
    buttonLabels: 'fontawesome',
    contentDefault: '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>',
    contentFA: '<i class="fa fa-code-branch"></i>',
    //tagNames: ['mark'],

    init: function () {
        this.button = this.document.createElement('button');
        this.button.classList.add('medium-editor-action');
        this.button.title = 'Cytoscape';

        this.on(this.button, 'click', this.handleClick.bind(this));
    },

    getButton: function () {
        return this.button;
    },

    handleClick: function (event) {
        var dataUri;// = rangy.getSelection(); // rangy not work
        // console.log("rangy.getSelection(): " + dataUri);
        // return;
        var uriHash;// + "#" + layoutName
        var wrapperId;

        // ref: https://github.com/jillix/medium-editor-custom-html/blob/master/src/custom-html.js
        var sel, range;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                //console.log("range: " + range);
                dataUri = _.trim(range);
                uriHash = computeHash(dataUri);// + "#" + layoutName
                wrapperId = "divCy_" + uriHash;
                exists = document.getElementById(wrapperId + "_wrapper");
                if (exists) {
                    return;
                }

                range.deleteContents();

                var html = '<div id="' + wrapperId + '_wrapper">'
                    + '<div id="' + wrapperId + '" class="w-100 h-100 border bd-default bg-white" style="min-height: 500px; min-width: 500px;"></div>'
                    + '</div>';
                
                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else  {
            // IE < 9
            return;
        }
        setTimeout(renderCytoscape.bind(null, wrapperId, dataUri), 0);

        // Ensure the editor knows about an html change so watchers are notified
        // ie: <textarea> elements depend on the editableInput event to stay synchronized
        this.base.checkContentChanged();
    }//,

    // isActive: function () {
    //     return this.button.classList.contains('medium-editor-button-active');
    // },

    // setInactive: function () {
    //     this.button.classList.remove('medium-editor-button-active');
    // },

    // setActive: function () {
    //     this.button.classList.add('medium-editor-button-active');
    // }
});

function renderCytoscape(wrapperId, dataUri) {
    //var el = document.querySelector('#' + wrapperId);
    //el.innerHTML = '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + youtubeId + '"></iframe>';

    console.log("ready to get: " + dataUri);
    var req = new XMLHttpRequest();
    req.open('GET', dataUri);
    req.onload = () => {
        if (req.status === 200) {
            var j = JSON.parse(req.response);
            console.log(j);
            var cy = initCytoscape(j, wrapperId, 'cose');
            //DataUriCy[dataUri] = cy;
        } else {
            console.log(req.statusText);
        }
        //this._acceptTuneView();
    };
    req.send();
}
