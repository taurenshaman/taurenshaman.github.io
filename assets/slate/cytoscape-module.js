import { Editor } from 'slate-react'
import { Value } from 'slate'
import React from 'react'
import { isKeyHotkey } from 'is-hotkey'
import { Button, Icon, Toolbar } from 'components'

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

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: '> to be geek_',
                            },
                        ],
                    },
                ],
            },
        ],
    },
});

const DEFAULT_NODE = 'paragraph';
const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');


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

function BoldMark(props) {
    return (
      <strong>{props.children}</strong>
    );
}
function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
}

function CytoscapeNode(props) {
    var uriHash = _computeHash(dataUri);
    var divCyId = "divCy_" + uriHash;
    var exists = document.getElementById(divCyId);
    if (exists) {
        return;
    }
    return (
        <div id=''></div>
    );
}
function CytoscapePlugin(options) {
    const { type, key } = options
    ​
    // Return our "plugin" object, containing the `onKeyDown` handler.
    return {
        onKeyDown(event, editor, next) {
        // If it doesn't match our `key`, let other plugins handle it.
        if (!event.ctrlKey || event.key != key) return next()
    ​
        // Prevent the default characters from being inserted.
        event.preventDefault()
    ​
        // Toggle the mark `type`.
        editor.toggleMark(type)
        },
    }
}


const plugins = [];

class LoreApp extends React.Component {
    /**
     * Deserialize the initial editor value.
     *
     * @type {Object}
     */
  
    state = {
      value: initialValue,
    }
  
    /**
     * Check if the current selection has a mark with `type` in it.
     *
     * @param {String} type
     * @return {Boolean}
     */
  
    hasMark = type => {
      const { value } = this.state
      return value.activeMarks.some(mark => mark.type === type)
    }
  
    /**
     * Check if the any of the currently selected blocks are of `type`.
     *
     * @param {String} type
     * @return {Boolean}
     */
  
    hasBlock = type => {
      const { value } = this.state
      return value.blocks.some(node => node.type === type)
    }
  
    /**
     * Store a reference to the `editor`.
     *
     * @param {Editor} editor
     */
  
    ref = editor => {
      this.editor = editor
    }
  
    /**
     * Render.
     *
     * @return {Element}
     */
  
    render() {
      return (
        <div>
          <Toolbar>
            {this.renderMarkButton('bold', 'format_bold')}
            {this.renderMarkButton('italic', 'format_italic')}
            {this.renderMarkButton('underlined', 'format_underlined')}
            {this.renderMarkButton('code', 'code')}
            {this.renderBlockButton('heading-one', 'looks_one')}
            {this.renderBlockButton('heading-two', 'looks_two')}
            {this.renderBlockButton('block-quote', 'format_quote')}
            {this.renderBlockButton('numbered-list', 'format_list_numbered')}
            {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
          </Toolbar>
          <Editor
            spellCheck
            autoFocus
            placeholder="Enter some rich text..."
            ref={this.ref}
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderBlock={this.renderBlock}
            renderMark={this.renderMark}
          />
        </div>
      )
    }
  
    /**
     * Render a mark-toggling toolbar button.
     *
     * @param {String} type
     * @param {String} icon
     * @return {Element}
     */
  
    renderMarkButton = (type, icon) => {
      const isActive = this.hasMark(type)
  
      return (
        <Button
          active={isActive}
          onMouseDown={event => this.onClickMark(event, type)}
        >
          <Icon>{icon}</Icon>
        </Button>
      )
    }
  
    /**
     * Render a block-toggling toolbar button.
     *
     * @param {String} type
     * @param {String} icon
     * @return {Element}
     */
  
    renderBlockButton = (type, icon) => {
      let isActive = this.hasBlock(type)
  
      if (['numbered-list', 'bulleted-list'].includes(type)) {
        const { value: { document, blocks } } = this.state
  
        if (blocks.size > 0) {
          const parent = document.getParent(blocks.first().key)
          isActive = this.hasBlock('list-item') && parent && parent.type === type
        }
      }
  
      return (
        <Button
          active={isActive}
          onMouseDown={event => this.onClickBlock(event, type)}
        >
          <Icon>{icon}</Icon>
        </Button>
      )
    }
  
    /**
     * Render a Slate block.
     *
     * @param {Object} props
     * @return {Element}
     */
  
    renderBlock = (props, editor, next) => {
      const { attributes, children, node } = props
  
      switch (node.type) {
        case 'block-quote':
          return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
          return <ul {...attributes}>{children}</ul>
        case 'heading-one':
          return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
          return <h2 {...attributes}>{children}</h2>
        case 'list-item':
          return <li {...attributes}>{children}</li>
        case 'numbered-list':
          return <ol {...attributes}>{children}</ol>
        default:
          return next()
      }
    }
  
    /**
     * Render a Slate mark.
     *
     * @param {Object} props
     * @return {Element}
     */
  
    renderMark = (props, editor, next) => {
      const { children, mark, attributes } = props
  
      switch (mark.type) {
        case 'bold':
          return <strong {...attributes}>{children}</strong>
        case 'code':
          return <code {...attributes}>{children}</code>
        case 'italic':
          return <em {...attributes}>{children}</em>
        case 'underlined':
          return <u {...attributes}>{children}</u>
        default:
          return next()
      }
    }
  
    /**
     * On change, save the new `value`.
     *
     * @param {Editor} editor
     */
  
    onChange = ({ value }) => {
      this.setState({ value })
      json_editor.set(value.toJSON())
    }
  
    /**
     * On key down, if it's a formatting command toggle a mark.
     *
     * @param {Event} event
     * @param {Editor} editor
     * @return {Change}
     */
  
    onKeyDown = (event, editor, next) => {
      let mark
  
      if (isBoldHotkey(event)) {
        mark = 'bold'
      } else if (isItalicHotkey(event)) {
        mark = 'italic'
      } else if (isUnderlinedHotkey(event)) {
        mark = 'underlined'
      } else if (isCodeHotkey(event)) {
        mark = 'code'
      } else {
        return next()
      }
  
      event.preventDefault()
      editor.toggleMark(mark)
    }
  
    /**
     * When a mark button is clicked, toggle the current mark.
     *
     * @param {Event} event
     * @param {String} type
     */
  
    onClickMark = (event, type) => {
      event.preventDefault()
      this.editor.toggleMark(type)
    }
  
    /**
     * When a block button is clicked, toggle the block type.
     *
     * @param {Event} event
     * @param {String} type
     */
  
    onClickBlock = (event, type) => {
      event.preventDefault()
  
      const { editor } = this
      const { value } = editor
      const { document } = value
  
      // Handle everything but list buttons.
      if (type !== 'bulleted-list' && type !== 'numbered-list') {
        const isActive = this.hasBlock(type)
        const isList = this.hasBlock('list-item')
  
        if (isList) {
          editor
            .setBlocks(isActive ? DEFAULT_NODE : type)
            .unwrapBlock('bulleted-list')
            .unwrapBlock('numbered-list')
        } else {
          editor.setBlocks(isActive ? DEFAULT_NODE : type)
        }
      } else {
        // Handle the extra wrapping required for list buttons.
        const isList = this.hasBlock('list-item')
        const isType = value.blocks.some(block => {
          return !!document.getClosest(block.key, parent => parent.type === type)
        })
  
        if (isList && isType) {
          editor
            .setBlocks(DEFAULT_NODE)
            .unwrapBlock('bulleted-list')
            .unwrapBlock('numbered-list')
        } else if (isList) {
          editor
            .unwrapBlock(
              type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
            )
            .wrapBlock(type)
        } else {
          editor.setBlocks('list-item').wrapBlock(type)
        }
      }
    }
  }

var json_editor;
var slate;

function initVizContentControl(elementId) {
    var container = document.getElementById(elementId);
    //json_editor.set(c);
    ReactDOM.render(<LoreApp />, container);
}

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

// $(document).ready(function () {
//     initJsonEditor("jsoneditor");
//     initVizContentControl("editorContainer");
// });

initJsonEditor("jsoneditor");
initVizContentControl("editorContainer");

//export default LoreApp;