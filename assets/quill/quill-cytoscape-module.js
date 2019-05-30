
let BlockEmbed = Quill.import('blots/block/embed');

class CytoscapeBlot extends BlockEmbed {
    static create(dataUri) {
        var uriHash = _computeHash(dataUri);
        var divCyId = "divCy_" + uriHash;
        var exists = document.getElementById(divCyId);
        if (exists) {
            return;
        }

        let node = super.create();
        node.dataset.dataUri = dataUri;
        node.dataset.layout = "spread";
        node.setAttribute('id', divCyId);
        // node.setAttribute('src', url);
        // // Set non-format related attributes with static values
        // node.setAttribute('frameborder', '0');
        // node.setAttribute('allowfullscreen', true);
        console.log(node.type);

        return node;
    }

    static formats(node) {
        // We still need to report unregistered embed formats
        // let format = {};
        // if (node.hasAttribute('height')) {
        //   format.height = node.getAttribute('height');
        // }
        // if (node.hasAttribute('width')) {
        //   format.width = node.getAttribute('width');
        // }
        let format = {
            dataUri: node.dataset.dataUri,
            layout: node.dataset.layout
        };
        return format;
    }

    static value(node) {
        //return node.getAttribute('src');
        return node.dataset.dataUri;
    }

    format(name, value) {
        // Handle unregistered embed formats
        if (name === 'dataUri' || name === 'layout') {
            console.log(name + ": " + value);
            if (value) {
                this.domNode.setAttribute(name, value);
            } else {
                this.domNode.removeAttribute(name, value);
            }
        } else {
            super.format(name, value);
        }
    }

    _tryRefreshCyAfterResize() {
        if (this.cy) {
            this.cy.resize();
            this.cy.center();
        }
    }

    static _computeHash(str) {
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

} // class CytoscapeBlot

CytoscapeBlot.blotName = 'cytoscape-block';
CytoscapeBlot.tagName = 'div';

Quill.register(CytoscapeBlot);