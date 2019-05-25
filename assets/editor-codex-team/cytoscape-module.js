
var cyStyles = [ // the stylesheet for the graph
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
        selector: 'node[name]',
        style: {
            'label': 'data(name)'
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
            "label": "data(name)",
            "font-family": "FreeSet,Arial,sans-serif",
            "font-size": 9,
            "font-weight": "bold",
            "text-background-opacity": 1,
            "text-background-color": "#ffffff",
            "text-background-padding": 3,
            "text-background-shape": "roundrectangle",
            "width": 1
        }
    }
];


class CytoscapeModule {
    constructor({ data, api }) {
        this.data = data;
        this.api = api;
        this.wrapper = undefined;
    }

    static get toolbox() {
        return {
            title: 'Cytoscape',
            // icon from: js.cytoscape.org/img/cytoscape-logo.svg
            icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="630" height="630" viewBox="0, 0, 630, 630"><defs><clipPath id="Clip_1"><path d="M211.883,187.846 L602.946,187.846 L602.946,578.909 L211.883,578.909 z"/></clipPath></defs><g id="logo"><path d="M0,0 L630,0 L630,630 L0,630 z" fill="#F7DF1E" id="background"/><path d="M166.65,524.784 L214.863,495.607 C224.164,512.098 232.625,526.051 252.92,526.051 C272.374,526.051 284.639,518.441 284.639,488.841 L284.639,287.541 L343.842,287.541 L343.842,489.678 C343.842,550.998 307.899,578.909 255.458,578.909 C208.096,578.909 180.605,554.381 166.65,524.779" fill="#000000" id="j" display="none"/><path d="M375,520.13 L423.206,492.219 C435.896,512.943 452.389,528.166 481.568,528.166 C506.099,528.166 521.741,515.901 521.741,498.985 C521.741,478.686 505.673,471.496 478.606,459.659 L463.809,453.311 C421.094,435.13 392.759,412.294 392.759,364.084 C392.759,319.68 426.59,285.846 479.454,285.846 C517.091,285.846 544.156,298.957 563.607,333.212 L517.511,362.814 C507.361,344.631 496.369,337.443 479.454,337.443 C462.115,337.443 451.119,348.438 451.119,362.814 C451.119,380.576 462.115,387.766 487.486,398.763 L502.286,405.105 C552.611,426.674 580.946,448.663 580.946,498.139 C580.946,551.426 539.08,580.604 482.836,580.604 C427.86,580.604 392.336,554.386 375,520.13" fill="#000000" id="s" display="none"/><g clip-path="url(#Clip_1)" id="cytoscape-logo"><path d="M520.194,478.644 C547.125,478.644 568.966,500.488 568.966,527.419 C568.966,554.347 547.125,576.191 520.194,576.191 C493.263,576.191 471.419,554.347 471.419,527.419 C471.419,514.948 476.154,503.102 484.568,494.111 L462.669,450.403 C460.537,450.657 458.39,450.784 456.239,450.784 C445.315,450.784 434.77,447.509 425.847,441.408 L401.05,463.246 C401.22,464.527 401.301,465.82 401.301,467.121 C401.301,483.549 387.976,496.878 371.545,496.878 C355.114,496.878 341.785,483.549 341.785,467.121 C341.785,450.686 355.114,437.358 371.545,437.358 C374.38,437.358 377.186,437.762 379.891,438.55 L405.72,415.803 C404.404,412.307 403.462,408.683 402.902,404.987 L341.328,396.693 C332.904,412.349 316.476,422.354 298.37,422.354 C271.442,422.354 249.598,400.51 249.598,373.582 C249.598,346.65 271.442,324.81 298.37,324.81 C322.065,324.81 342.071,341.805 346.314,364.587 L407.874,372.884 C408.285,372.056 408.715,371.242 409.168,370.437 L362.13,322.405 C356.026,325.051 349.44,326.416 342.736,326.416 C315.805,326.416 293.964,304.575 293.964,277.644 C293.964,250.716 315.805,228.872 342.736,228.872 C359.265,228.872 374.484,237.208 383.436,250.765 L454.567,232.825 C457.761,208.908 478.259,190.564 502.909,190.564 C529.837,190.564 551.681,212.408 551.681,239.336 C551.681,265.599 530.909,287.02 504.907,288.069 L485.634,351.571 C500.83,361.446 510.196,378.395 510.196,396.827 C510.196,412.297 503.61,426.828 492.256,437.002 L513.357,479.123 C515.619,478.804 517.903,478.644 520.194,478.644 z M454.346,342.903 L473.882,278.53 C468.893,274.832 464.647,270.207 461.381,264.921 L391.257,282.607 C390.628,288.799 388.829,294.789 385.939,300.29 L432.85,348.192 C439.56,344.959 446.863,343.16 454.346,342.903 z" fill="#000000"/></g></g></svg>'
        };
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('cytoscape-module');
        if (this.data && this.data.dataUri && this.data.layout) {
            this._createCytoscape();
            return this.wrapper;
        }

        const inputDataUrl = document.createElement('input');
        const inputLayout = document.createElement('input');

        inputDataUrl.classList.add('data_uri');
        inputLayout.classList.add('graph_layout');

        this.wrapper.appendChild(inputDataUrl);
        this.wrapper.appendChild(inputLayout);

        inputDataUrl.placeholder = 'Paste an data URL...';
        inputLayout.placeholder = 'layout name: spread/random/grid';

        inputDataUrl.value = this.data && this.data.dataUri ? this.data.dataUri : '';
        inputLayout.value = this.data && this.data.layout ? this.data.layout : 'spread';
        this.data.layout = 'spread';

        inputDataUrl.addEventListener('paste', (event) => {
            //this._createImage(event.clipboardData.getData('text'));
            this.data.dataUri = event.clipboardData.getData('text');
            this._createCytoscape();
        });
        inputLayout.addEventListener('paste', (event) => {
            //this._createImage(event.clipboardData.getData('text'));
            this.data.layout = event.clipboardData.getData('text');
            this._createCytoscape();
        });

        return this.wrapper;
    }

    _createCytoscape() {
        console.log(this.data);
        var dataUri = this.data.dataUri.trim();
        var layoutName = this.data.layout.trim();
        if (!dataUri || !layoutName) {
            return;
        }

        // download json from dataUri, e.g. https://kaluginserg.github.io/cytoscape-node-html-label/demo/sample-dataset.js
        // ...
        var elementsData = sampleDataset;

        var id = _.uuid();
        id = _.replace(id, new RegExp("-", "g"), '');
        // var now = new Date();
        // var id = now.format("yyyy_MM_dd_hh_mm_ss");

        const divCy = document.createElement('div');
        divCy.setAttribute("id", "divCy_" + id);
        divCy.setAttribute("style", "min-height: 500px; min-width: 500px;");
        divCy.classList.add('w-100');
        divCy.classList.add('h-100');
        divCy.classList.add('border');
        divCy.classList.add('bd-default');

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(divCy);

        var cy = cytoscape({
            container: divCy, //document.getElementById(elementId), // container to render in
            zoom: 1,
            elements: elementsData,
            style: cyStyles,
            layout: {
                name: layoutName
            }
        });
    }

    save(blockContent) {
        //const input = blockContent.querySelector('input');
        const inputDataUri = blockContent.querySelector('.data_uri');
        const inputLayout = blockContent.querySelector('.graph_layout');

        return {
            dataUri: inputDataUri.value,
            layout: inputLayout.value
        };
    }

    validate(savedData) {
        if (!savedData.dataUri.trim() || !savedData.layout.trim()) {
            return false;
        }
        return true;
    }

}