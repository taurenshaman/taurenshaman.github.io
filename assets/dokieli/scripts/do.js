(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["fetch"], factory);
	else if(typeof exports === 'object')
		exports["DO"] = factory(require("fetch"));
	else
		root["DO"] = factory(root["fetch"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Configuration
 */
module.exports = {
  Lang: document.documentElement.lang,
  DocRefType: '',
  RefType: {
    LNCS: { InlineOpen: '[', InlineClose: ']' },
    ACM: { InlineOpen: '[', InlineClose: ']' }
  },
  Stylesheets: [],
  User: {
    IRI: null,
    Role: null,
    UI: {}
  },
  LocalDocument: (document.location.protocol == 'file:'),
  UseStorage: false,
  AutoSaveId: '',
  AutoSaveTimer: 60000,
  DisableStorageButtons: '<button class="local-storage-disable-html" title="Disable local storage (temporary) in the browser"><i class="fa fa-database fa-2x"></i>Local Storage</button>',
  EnableStorageButtons: '<button class="local-storage-enable-html" title="Enable local storage (temporary) in the browser"><i class="fa fa-database fa-2x"></i>Local Storage</button>',
  CDATAStart: '//<![CDATA[',
  CDATAEnd: '//]]>',
  SortableList: false,
  GraphViewerAvailable: (typeof d3 !== 'undefined'),
  MathAvailable: (typeof MathJax !== 'undefined'),
  EditorAvailable: (typeof MediumEditor !== 'undefined'),
  EditorEnabled: false,
  ContentEditable: false,
  WebExtension: ((window.chrome && chrome.runtime && chrome.runtime.id) || (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id)),
  Editor: {
    headings: ["h1", "h2", "h3", "h4", "h5", "h6"],
    regexEmptyHTMLTags: /<[^\/>][^>]*><\/[^>]+>/gim,
    ButtonLabelType: (((window.chrome && chrome.runtime && chrome.runtime.id) || (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id)) ? 'fontawesome' : (document.querySelector('head link[rel~="stylesheet"][href*="font-awesome"]') ? (!navigator.onLine && document.querySelector('head link[rel~="stylesheet"][href*="font-awesome"][href^="http"]') ? '': 'fontawesome') : '' )),
    DisableReviewButton: '<button class="review-disable" title="Disable review"><i class="fa fa-balance-scale fa-2x"></i>Review</button>',
    EnableReviewButton: '<button class="review-enable" title="Enable review"><i class="fa fa-balance-scale fa-2x"></i>Review</button>',
    DisableEditorButton: '<button class="editor-disable" title="Disable editor"><i class="fa fa-i-cursor fa-2x"></i>Edit</button>',
    EnableEditorButton: '<button class="editor-enable" title="Enable editor"><i class="fa fa-i-cursor fa-2x"></i>Edit</button>'
  },
  Button: {
    Close: '<button class="close" title="Close"><i class="fa fa-close fa-2x"></i></button>'
  },
  DOMNormalisation: {
    'selfClosing': "area base basefont br col colgroup embed hr img input isindex link meta metadata param source wbr",
    'skipAttributes': "contenteditable spellcheck medium-editor-index data-medium-editor-element data-medium-editor-editor-index data-medium-focused data-placeholder role aria-multiline style",
    'sortAttributes': true,
    'skipNodeWithClass': 'do',
    'classWithChildText': {
      'class': '.do.ref',
      'element': 'mark'
    },
    'replaceClassItemWith': {
      'source': "on-document-menu medium-editor-element medium-editor-placeholder",
      'target': ''
    },
    'skipClassWithValue': ''
  },

  SelectorSign: {
    "*": "🔗",
    "aside": "†",
    "audio": "🔊",
    "code": "#",
    "dl": "☝",
    "dl#document-annotation-service": "※",
    "dl#document-created": "📅",
    "dl#document-in-reply-to": "⮪",
    "dl#document-identifier": "🚩",
    "dl#document-inbox": "📥",
    "dl#document-latest-version": "∼",
    "dl#document-license": "🌻",
    "dl#document-memento": "⛰",
    "dl#document-modified": "📅",
    "dl#document-original": "♁",
    "dl#document-predecessor-version": "≺",
    "dl#document-published": "📅",
    "dl#document-rights": "📜",
    "dl#document-resource-state": "🙊",
    "dl#document-see-also": "🙈",
    "dl#document-status": "🎆",
    "dl#document-timemap": "⌚",
    "dfn": "📇",
    "figure": "❦",
    "footer": "⸙",
    "img": "🖼",
    "nav": "☛",
    "p": "¶",
    "pre": "🖩",
    "section": "§",
    "section#acknowledgements": "☺",
    "section#conclusions": "∴",
    "section#keywords": "🏷",
    "section#references": "☛",
    "section#related-work": "⌘",
    "section#results": "∞",
    "table": "𝄜",
    "video": "🎞"
  },

  DocumentItems: [
    'authors',
    'document-identifier',
    'document-created',
    'document-modified',
    'document-published',
    'document-original',
    'document-memento',
    'document-latest-version',
    'document-predecessor-version',
    'document-timegate',
    'document-timemap',
    'document-derived-from',
    'document-derived-on',
    'document-license',
    'document-inbox',
    'document-annotation-service',
    'document-in-reply-to',
    'document-rights',
    'document-resource-state',
    'document-status',
    'document-see-also',
    'table-of-contents',
    'table-of-figures',
    'table-of-tables',
    'table-of-abbrs',
    'authors',
    'abstract',
    'categories-and-subject-descriptors',
    'keywords',
    'general-terms',

    'introduction'
  ],

  CollectionItemsLimit: 20,
  ContextLength: 32,
  ProxyURL: ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/proxy?uri=' : 'https://dokie.li/proxy?uri='),
  AuthEndpoint: ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/' : 'https://dokie.li/'),
  NotificationLicense: 'https://creativecommons.org/publicdomain/zero/1.0/',
  License: {
    "https://creativecommons.org/publicdomain/zero/1.0/": {'name': 'CC0 1.0', 'description': 'Creative Commons Zero'},
    "https://creativecommons.org/licenses/by/4.0/": {'name': 'CC BY 4.0', 'description': 'Creative Commons Attribution'},
    "https://creativecommons.org/licenses/by-sa/4.0/": {'name': 'CC BY-SA 4.0', 'description': 'Creative Commons Attribution-ShareAlike'},
    "https://creativecommons.org/licenses/by-nc/4.0/": {'name': 'CC BY-NC 4.0', 'description': 'Creative Commons Attribution-NonCommercial'},
    "https://creativecommons.org/licenses/by-nd/4.0/": {'name': 'CC BY-ND 4.0', 'description': 'Creative Commons Attribution-NoDerivatives'},
    "https://creativecommons.org/licenses/by-nc-sa/4.0/": {'name': 'CC BY-NC-SA 4.0', 'description': 'Creative Commons Attribution-NonCommercial-ShareAlike'},
    "https://creativecommons.org/licenses/by-nc-nd/4.0/": {'name': 'CC BY-NC-ND 4.0', 'description': 'Creative Commons Attribution-NonCommercial-NoDerivates'}
  },
  PublicationStatus: {
    "http://purl.org/spar/pso/draft": { 'name': 'Draft', 'description': 'The status of a work (for example a document or a dataset) prior to completion and publication.' },
    "http://purl.org/spar/pso/published": { 'name': 'Published', 'description': 'The status of material (for example a document or a dataset) that has been published, i.e. made available for people to access, read or use, either freely or for a purchase price or an access fee.' }
  },
  Citation: {
    'http://purl.org/spar/cito/agreesWith': 'agrees with',
    'http://purl.org/spar/cito/cites': 'cites',
    'http://purl.org/spar/cito/citesAsAuthority': 'cites as authority',
    'http://purl.org/spar/cito/citesAsDataSource': 'cites as data source',
    'http://purl.org/spar/cito/citesAsEvidence': 'cites as evidence',
    'http://purl.org/spar/cito/citesAsMetadataDocument': 'cites as metadata document',
    'http://purl.org/spar/cito/citesAsPotentialSolution': 'cites as potential solution',
    'http://purl.org/spar/cito/citesAsRecommendedReading': 'cites as potential reading',
    'http://purl.org/spar/cito/citesAsRelated': 'cites as related',
    'http://purl.org/spar/cito/citesAsSourceDocument': 'cites as source document',
    'http://purl.org/spar/cito/citesForInformation': 'cites for information',
    'http://purl.org/spar/cito/compiles': 'compiles',
    'http://purl.org/spar/cito/confirms': 'confirms',
    'http://purl.org/spar/cito/containsAssertionFrom': 'contains assertion from',
    'http://purl.org/spar/cito/corrects': 'corrects',
    'http://purl.org/spar/cito/credits': 'credits',
    'http://purl.org/spar/cito/critiques': 'critiques',
    'http://purl.org/spar/cito/derides': 'derides',
    'http://purl.org/spar/cito/describes': 'describes',
    'http://purl.org/spar/cito/disagreesWith': 'disagrees with',
    'http://purl.org/spar/cito/discusses': 'discusses',
    'http://purl.org/spar/cito/disputes': 'disputes',
    'http://purl.org/spar/cito/documents': 'documents',
    'http://purl.org/spar/cito/extends': 'extends',
    'http://purl.org/spar/cito/includesExcerptFrom': 'includes excerpt from',
    'http://purl.org/spar/cito/includesQuotationFrom': 'includes quotation from',
    'http://purl.org/spar/cito/linksTo': 'links to',
    'http://purl.org/spar/cito/obtainsBackgroundFrom': 'obtains background from',
    'http://purl.org/spar/cito/obtainsSupportFrom': 'obtains support from',
    'http://purl.org/spar/cito/parodies': 'parodies',
    'http://purl.org/spar/cito/plagiarizes': 'plagiarizes',
    'http://purl.org/spar/cito/qualifies': 'qualifies',
    'http://purl.org/spar/cito/refutes': 'refutes',
    'http://purl.org/spar/cito/repliesTo': 'replies to',
    'http://purl.org/spar/cito/retracts': 'retracts',
    'http://purl.org/spar/cito/reviews': 'reviews',
    'http://purl.org/spar/cito/ridicules': 'ridicules',
    'http://purl.org/spar/cito/speculatesOn': 'speculates on',
    'http://purl.org/spar/cito/supports': 'supports',
    'http://purl.org/spar/cito/updates': 'updates',
    'http://purl.org/spar/cito/usesConclusionsFrom': 'uses conclusions from',
    'http://purl.org/spar/cito/usesDataFrom': 'uses data from',
    'http://purl.org/spar/cito/usesMethodIn': 'uses method in'
  },

  AvailableMediaTypes: ['text/turtle', 'application/ld+json', 'application/rdf+xml', 'application/xhtml+xml', 'text/html'],

  AcceptBinaryTypes: ['image/png', 'image/jpeg', 'image/gif'],

  Prefixes: {
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'as': 'https://www.w3.org/ns/activitystreams#',
    'oa': 'http://www.w3.org/ns/oa#',
    'schema': 'http://schema.org/'
  },

  Vocab: {
    "rdftype": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "@type": "@id", "@array": true },
    "rdffirst": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#first", "@type": "@id" },
    "rdfrest": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest", "@type": "@id" },
    "rdfvalue": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
    "rdfslabel": { "@id": "http://www.w3.org/2000/01/rdf-schema#label" },
    "rdfsseeAlso": { "@id": "http://www.w3.org/2000/01/rdf-schema#seeAlso", "@type": "@id", "@array": true },

    "owlsameAs": { "@id": "http://www.w3.org/2002/07/owl#sameAs", "@type": "@id", "@array": true },

    "foafname": "http://xmlns.com/foaf/0.1/name",
    "foaffamilyName": "http://xmlns.com/foaf/0.1/familyName",
    "foafgivenName": "http://xmlns.com/foaf/0.1/givenName",
    "foafhomepage": { "@id": "http://xmlns.com/foaf/0.1/homepage", "@type": "@id" },
    "foafweblog": { "@id": "http://xmlns.com/foaf/0.1/weblog", "@type": "@id" },
    "foafimg": { "@id": "http://xmlns.com/foaf/0.1/img", "@type": "@id" },
    "foafdepiction": { "@id": "http://xmlns.com/foaf/0.1/depiction", "@type": "@id" },
    "foafnick": "http://xmlns.com/foaf/0.1/nick",
    "foafmaker": { "@id": "http://xmlns.com/foaf/0.1/maker", "@type": "@id" },
    "foafknows": { "@id": "http://xmlns.com/foaf/0.1/knows", "@type": "@id", "@array": true },

    "vcardfn": "http://www.w3.org/2006/vcard/ns#fn",
    "vcardfamilyname": "http://www.w3.org/2006/vcard/ns#family-name",
    "vcardgivenname": "http://www.w3.org/2006/vcard/ns#given-name",
    "vcardnickname": "http://www.w3.org/2006/vcard/ns#nickname",
    "vcardurl": { "@id": "http://www.w3.org/2006/vcard/ns#url", "@type": "@id" },
    "vcardphoto": { "@id": "http://www.w3.org/2006/vcard/ns#photo", "@type": "@id" },

    "schemaname": "http://schema.org/name",
    "schemafamilyName": "http://schema.org/familyName",
    "schemagivenName": "http://schema.org/givenName",
    "schemaurl": { "@id": "http://schema.org/url", "@type": "@id" },
    "schemaimage": { "@id": "http://schema.org/image", "@type": "@id" },
    "schemacreator": { "@id": "http://schema.org/creator", "@type": "@id", "@array": true },
    "schemaauthor": { "@id": "http://schema.org/author", "@type": "@id", "@array": true },
    "schemacontributor": { "@id": "http://schema.org/contributor", "@type": "@id", "@array": true },
    "schemaeditor": { "@id": "http://schema.org/editor", "@type": "@id", "@array": true },
    "schemalicense": { "@id": "http://schema.org/license", "@type": "@id" },
    "schemacitation": { "@id": "http://schema.org/citation", "@type": "@id", "@array": true },
    "schemaknows": { "@id": "http://schema.org/knows", "@type": "@id", "@array": true },
    "schemadateCreated": "http://schema.org/dateCreated",
    "schemadateModified": "http://schema.org/dateModified",
    "schemadatePublished": "http://schema.org/datePublished",
    "schemadescription": "http://schema.org/description",
    "schemahasPart": { "@id": "http://schema.org/hasPart", "@type": "@id", "@array": true }, 
    "schemaisPartOf": { "@id": "http://schema.org/isPartOf", "@type": "@id", "@array": true },

    "dctermstitle": "http://purl.org/dc/terms/title",
    "dctermsdescription": "http://purl.org/dc/terms/description",
    "dctermscreator": { "@id": "http://purl.org/dc/terms/creator", "@type": "@id", "@array": true },
    "dctermsdate": "http://purl.org/dc/terms/date",
    "dctermsissued": "http://purl.org/dc/terms/issued",
    "dctermscreated": "http://purl.org/dc/terms/created",
    "dctermsrights": { "@id": "http://purl.org/dc/terms/rights", "@type": "@id" },
    "dctermsconformsTo": { "@id": "http://purl.org/dc/terms/conformsTo", "@type": "@id" },
    "dctermshasPart": { "@id": "http://purl.org/dc/terms/hasPart", "@type": "@id", "@array": true },
    "dctermsisPartOf": { "@id": "http://purl.org/dc/terms/isPartOf", "@type": "@id", "@array": true },

    "skosprefLabel": { "@id": "http://www.w3.org/2004/02/skos/core#prefLabel", "@type": "@id", "@array": true },

    "refPeriod": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
    "obsValue": "http://purl.org/linked-data/sdmx/2009/measure#obsValue",

    "biboauthorList": { "@id": "http://purl.org/ontology/bibo/authorList", "@type": "@id" },

    "pimstorage": { "@id": "http://www.w3.org/ns/pim/space#storage", "@type": "@id", "@array": true },
    "preferencesFile": { "@id": "http://www.w3.org/ns/pim/space#preferencesFile", "@type": "@id" },

    "ldpinbox": { "@id": "http://www.w3.org/ns/ldp#inbox", "@type": "@id", "@array": true },

    "solidpreferredProxy": "http://www.w3.org/ns/solid/terms#preferredProxy",

    "oaannotation": { "@id": "http://www.w3.org/ns/oa#Annotation", "@type": "@id" },
    "oahasBody": { "@id": "http://www.w3.org/ns/oa#hasBody", "@type": "@id" },
    "oahasTarget": { "@id": "http://www.w3.org/ns/oa#hasTarget", "@type": "@id" },
    "oahasSource": { "@id": "http://www.w3.org/ns/oa#hasSource", "@type": "@id" },
    "oahasSelector": { "@id": "http://www.w3.org/ns/oa#hasSelector", "@type": "@id" },
    "oarefinedBy": { "@id": "http://www.w3.org/ns/oa#refinedBy", "@type": "@id" },
    "oaexact": "http://www.w3.org/ns/oa#exact",
    "oaprefix": "http://www.w3.org/ns/oa#prefix",
    "oasuffix": "http://www.w3.org/ns/oa#suffix",
    "oamotivatedBy": { "@id": "http://www.w3.org/ns/oa#motivatedBy", "@type": "@id" },
    "oaannotationService": { "@id": "http://www.w3.org/ns/oa#annotationService", "@type": "@id", "@array": true },

    "assubject": { "@id": "https://www.w3.org/ns/activitystreams#subject", "@type": "@id", "@array": true },
    "asobject": { "@id": "https://www.w3.org/ns/activitystreams#object", "@type": "@id", "@array": true },
    "astarget": { "@id": "https://www.w3.org/ns/activitystreams#target", "@type": "@id", "@array": true },
    "asrelationship": { "@id": "https://www.w3.org/ns/activitystreams#relationship", "@type": "@id", "@array": true },
    "ascontext": { "@id": "https://www.w3.org/ns/activitystreams#context", "@type": "@id", "@array": true },
    "asinReplyTo": { "@id": "https://www.w3.org/ns/activitystreams#inReplyTo", "@type": "@id", "@array": true },
    "asactor": { "@id": "https://www.w3.org/ns/activitystreams#actor", "@type": "@id" },
    "asupdated": "https://www.w3.org/ns/activitystreams#updated",
    "aspublished": "https://www.w3.org/ns/activitystreams#published",
    "ascontent": "https://www.w3.org/ns/activitystreams#content",
    "asname": "https://www.w3.org/ns/activitystreams#name",
    "asimage": { "@id": "https://www.w3.org/ns/activitystreams#image", "@type": "@id" },
    "asoutbox": { "@id": "https://www.w3.org/ns/activitystreams#outbox", "@type": "@id", "@array": true },
    "asitems": { "@id": "https://www.w3.org/ns/activitystreams#items", "@type": "@id", "@array": true },
    "asorderedItems": { "@id": "https://www.w3.org/ns/activitystreams#orderedItems", "@type": "@id", "@array": true },
    "astotalItems": "https://www.w3.org/ns/activitystreams#totalItems",
    "asfirst": { "@id": "https://www.w3.org/ns/activitystreams#first", "@type": "@id" },
    "asnext": { "@id": "https://www.w3.org/ns/activitystreams#next", "@type": "@id" },
    "asCollection": { "@id": "https://www.w3.org/ns/activitystreams#Collection", "@type": "@id" },
    "asOrderedCollection": { "@id": "https://www.w3.org/ns/activitystreams#OrderedCollection", "@type": "@id" },

    "siocreplyof": { "@id": "http://rdfs.org/sioc/ns#reply_of", "@type": "@id", "@array": true },
    "siocavatar": { "@id": "http://rdfs.org/sioc/ns#avatar", "@type": "@id" },

    "ldpcontains": { "@id": "http://www.w3.org/ns/ldp#contains", "@type": "@id", "@array": true },
    "ldpResource": { "@id": "http://www.w3.org/ns/ldp#Resource", "@type": "@id" },
    "ldpContainer": { "@id": "http://www.w3.org/ns/ldp#Container", "@type": "@id" },
    "ldpRDFSource": { "@id": "http://www.w3.org/ns/ldp#RDFSource", "@type": "@id" },
    "ldpImmutableResource": { "@id": "http://www.w3.org/ns/ldp#ImmutableResource", "@type": "@id" },

    "memOriginalResource": { "@id": "http://mementoweb.org/ns#OriginalResource", "@type": "@id" },
    "memMemento": { "@id": "http://mementoweb.org/ns#Memento", "@type": "@id" },
    "memoriginal": { "@id": "http://mementoweb.org/ns#original", "@type": "@id" },
    "memmemento": { "@id": "http://mementoweb.org/ns#memento", "@type": "@id" },
    "memtimegate": { "@id": "http://mementoweb.org/ns#timegate", "@type": "@id" },
    "memtimemap": { "@id": "http://mementoweb.org/ns#timemap", "@type": "@id" },

    "relpredecessorversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#predecessor-version", "@type": "@id" },
    "rellatestversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#latest-version", "@type": "@id" },

    "psodraft": { "@id": "http://purl.org/spar/pso/draft", "@type": "@id" },
    "psopublished": { "@id": "http://purl.org/spar/pso/published", "@type": "@id" }
  },

  SecretAgentNames: ['Abraham Lincoln', 'Admiral Awesome', 'Anonymous Coward', 'Believe it or not', 'Creative Monkey', 'Senegoid', 'Dog from the Web', 'Ekrub', 'Elegant Banana', 'Foo Bar', 'Lbmit', 'Lunatic Scholar', 'NahuLcm', 'Noslen', 'Okie Dokie', 'Samurai Cat', 'Vegan Superstar'],

  RefAreas: {"AF":"Afghanistan","A9":"Africa","AL":"Albania","DZ":"Algeria","AS":"American Samoa","L5":"Andean Region","AD":"Andorra","AO":"Angola","AG":"Antigua and Barbuda","1A":"Arab World","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas, The","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BR":"Brazil","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","S3":"Caribbean small states","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","JG":"Channel Islands","CL":"Chile","CN":"China","CO":"Colombia","KM":"Comoros","CD":"Congo, Dem. Rep.","CG":"Congo, Rep.","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curacao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","Z4":"East Asia & Pacific (all income levels)","4E":"East Asia & Pacific (developing only)","C4":"East Asia and the Pacific (IFC classification)","EC":"Ecuador","EG":"Egypt, Arab Rep.","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","XC":"Euro area","Z7":"Europe & Central Asia (all income levels)","7E":"Europe & Central Asia (developing only)","C5":"Europe and Central Asia (IFC classification)","EU":"European Union","FO":"Faeroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","PF":"French Polynesia","GA":"Gabon","GM":"Gambia, The","GE":"Georgia","DE":"Germany","GH":"Ghana","GR":"Greece","GL":"Greenland","GD":"Grenada","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","XE":"Heavily indebted poor countries (HIPC)","XD":"High income","XS":"High income: OECD","XR":"High income: nonOECD","HN":"Honduras","HK":"Hong Kong SAR, China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Rep.","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea, Dem. Rep.","KR":"Korea, Rep.","KV":"Kosovo","KW":"Kuwait","KG":"Kyrgyz Republic","LA":"Lao PDR","ZJ":"Latin America & Caribbean (all income levels)","XJ":"Latin America & Caribbean (developing only)","L4":"Latin America and the Caribbean","C6":"Latin America and the Caribbean (IFC classification)","LV":"Latvia","XL":"Least developed countries: UN classification","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","XO":"Low & middle income","XM":"Low income","XN":"Lower middle income","LU":"Luxembourg","MO":"Macao SAR, China","MK":"Macedonia, FYR","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MR":"Mauritania","MU":"Mauritius","MX":"Mexico","L6":"Mexico and Central America","FM":"Micronesia, Fed. Sts.","ZQ":"Middle East & North Africa (all income levels)","XQ":"Middle East & North Africa (developing only)","C7":"Middle East and North Africa (IFC classification)","XP":"Middle income","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","M2":"North Africa","XU":"North America","MP":"Northern Mariana Islands","NO":"Norway","XY":"Not classified","OE":"OECD members","OM":"Oman","S4":"Other small states","S2":"Pacific island small states","PK":"Pakistan","PW":"Palau","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovak Republic","SI":"Slovenia","S1":"Small states","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","8S":"South Asia","C8":"South Asia (IFC classification)","SS":"South Sudan","L7":"Southern Cone Extended","ES":"Spain","LK":"Sri Lanka","KN":"St. Kitts and Nevis","LC":"St. Lucia","MF":"St. Martin (French part)","VC":"St. Vincent and the Grenadines","C9":"Sub-Saharan Africa (IFC classification)","ZG":"Sub-Saharan Africa (all income levels)","ZF":"Sub-Saharan Africa (developing only)","A4":"Sub-Saharan Africa excluding South Africa","A5":"Sub-Saharan Africa excluding South Africa and Nigeria","SD":"Sudan","SR":"Suriname","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","XT":"Upper middle income","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela, RB","VN":"Vietnam","VI":"Virgin Islands (U.S.)","PS":"West Bank and Gaza","1W":"World","YE":"Yemen, Rep.","ZM":"Zambia","ZW":"Zimbabwe"}
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Config = __webpack_require__(0)

module.exports = {
  encodeString,
  decodeString,
  getAbsoluteIRI,
  getProxyableIRI,
  stripFragmentFromString,
  getFragmentFromString
}

function encodeString (string) {
  return encodeURIComponent(string).replace(/'/g, '%27').replace(/"/g, '%22')
}

/**
 * UNUSED
 *
 * @param string {string}
 *
 * @returns {string}
 */
function decodeString (string) {
  return decodeURIComponent(string.replace(/\+/g, ' '))
}

function getAbsoluteIRI (base, location) {
  var iri = location

  if (location.toLowerCase().slice(0, 4) !== 'http') {
    if (location.startsWith('/')) {
      var x = base.toLowerCase().trim().split('/')

      iri = x[0] + '//' + x[2] + location
    } else if (!base.endsWith('/')) {
      iri = base.substr(0, base.lastIndexOf('/') + 1) + location
    } else {
      iri = base + location
    }
  }

  return iri
}

function getProxyableIRI (url, options = {}) {
  var pIRI = stripFragmentFromString(url)

  if ((typeof document !== 'undefined' && document.location.protocol === 'https:' && pIRI.slice(0, 5).toLowerCase() === 'http:') || 'forceProxy' in options) {
    var proxyURL = ('proxyURL' in options) ? options.proxyURL : Config.ProxyURL
    pIRI = proxyURL + encodeString(pIRI)
  }

  return pIRI
}

function stripFragmentFromString (string) {
  if (typeof string === 'string') {
    let stringIndexFragment = string.indexOf('#')

    if (stringIndexFragment >= 0) {
      string = string.substring(0, stringIndexFragment)
    }
  }
  return string
}

function getFragmentFromString (string) {
  if (typeof string === 'string') {
    let match = string.split('#')[1]

    string = (match) ? match : '';
  }
  return string 
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Config = __webpack_require__(0)

module.exports = {
  domToString,
  dumpNode,
  getDoctype,
  getDocument,
  setHTMLBase
}

function domToString (node, options = {}) {
  var selfClosing = []

  if (options.selfClosing) {
    options.selfClosing.split(' ').forEach(function (n) {
      selfClosing[n] = true
    })
  }

  var skipAttributes = []

  if (options.skipAttributes) {
    options.skipAttributes.split(' ').forEach(function (n) {
      skipAttributes[n] = true
    })
  }

  var noEsc = [ false ]

  return dumpNode(node, options, skipAttributes, selfClosing, noEsc)
}

function dumpNode (node, options, skipAttributes, selfClosing, noEsc) {
  var out = ''

  if (typeof node.nodeType === 'undefined') return out

  if (node.nodeType === 1) {
    if (node.hasAttribute('class') && 'classWithChildText' in options &&
        node.matches(options.classWithChildText.class)) {
      out += node.querySelector(options.classWithChildText.element).textContent
    } else if (!(options.skipNodeWithClass && node.matches('.' + options.skipNodeWithClass))) {
      var ename = node.nodeName.toLowerCase()
      out += '<' + ename

      var attrList = []

      for (let i = node.attributes.length - 1; i >= 0; i--) {
        var atn = node.attributes[i]

        if (skipAttributes[atn.name]) continue

        if (/^\d+$/.test(atn.name)) continue

        if (atn.name === 'class' && 'replaceClassItemWith' in options) {
          atn.value.split(' ').forEach(function (aValue) {
            if (options.replaceClassItemWith.source.split(' ').indexOf(aValue) > -1) {
              var re = new RegExp(aValue, 'g')
              atn.value = atn.value.replace(re, options.replaceClassItemWith.target).trim()
            }
          })
        }

        if (!(atn.name === 'class' && 'skipClassWithValue' in options &&
            options.skipClassWithValue === atn.value)) {
          attrList.push(
            atn.name + '="' +
            atn.value
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;') +
            '"')
        }
      }

      if (attrList.length > 0) {
        if ('sortAttributes' in options && options.sortAttributes) {
          attrList.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
          })
        }
        out += ' ' + attrList.join(' ')
      }

      if (selfClosing[ename]) {
        out += ' />'
      } else {
        out += '>'
        out += (ename === 'html') ? '\n  ' : ''
        noEsc.push(ename === 'style' || ename === 'script' || ename === 'pre')
        for (var i = 0; i < node.childNodes.length; i++) {
          out += dumpNode(node.childNodes[i], options, skipAttributes, selfClosing, noEsc)
        }
        noEsc.pop()
        out += (ename === 'body' || ename === 'html') ? '</' + ename + '>' + '\n' : '</' + ename + '>'
      }
    }
  } else if (node.nodeType === 8) {
    // FIXME: If comments are not tabbed in source, a new line is not prepended
    out += '\n\
<!--' + node.nodeValue + '-->'
  } else if (node.nodeType === 3 || node.nodeType === 4) {
    // XXX: Remove new lines which were added after DOM ready
    let nl = node.nodeValue.replace(/\n+$/, '')
    out += noEsc[noEsc.length - 1]
      ? nl
      : nl.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  } else {
    console.log('Warning; Cannot handle serialising nodes of type: ' + node.nodeType)
  }

  return out
}

function getDoctype () {
  /* Get DOCTYPE from http://stackoverflow.com/a/10162353 */
  var node = document.doctype
  var doctype = ''

  if (node !== null) {
    doctype = '<!DOCTYPE ' +
      node.name +
      (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') +
      (!node.publicId && node.systemId ? ' SYSTEM' : '') +
      (node.systemId ? ' "' + node.systemId + '"' : '') +
      '>'
  }
  return doctype
}

function getDocument (cn, options) {
  let node = cn || document.documentElement.cloneNode(true)
  options = options || Config.DOMNormalisation

  let doctype = getDoctype()
  let s = (doctype.length > 0) ? doctype + '\n' : ''
  s += domToString(node, options)
  return s
}

function setHTMLBase (data, baseURI) {
  let template = document.implementation.createHTMLDocument()
  template.documentElement.innerHTML = data
  let base = template.querySelector('head base[href]')
  if (!base) {
    template.querySelector('head').insertAdjacentHTML('afterbegin', '<base href="' + baseURI + '" />')
    data = template.documentElement.outerHTML
  }
  return data
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  uniqueArray,
  getHash,
  getDateTimeISO,
  removeChildren,
  copyTextToClipboard,
  escapeRegExp,
  sleep
}

/**
 * @param a {Array}
 *
 * @returns {Array}
 */
function uniqueArray (a) {
  var n = {}
  var r = []
  for (var i = 0; i < a.length; i++) {
    if (!n[a[i]]) {
      n[a[i]] = true
      r.push(a[i])
    }
  }
  return r
}

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
function getHash (message, algo = "SHA-256") {
  var buffer = new TextEncoder("utf-8").encode(message);
  return window.crypto.subtle.digest(algo, buffer).then(function (hash) {
    var hexCodes = [];
    var view = new DataView(hash);
    for (var i = 0; i < view.byteLength; i += 4) {
      var value = view.getUint32(i)
      var stringValue = value.toString(16)
      var padding = '00000000'
      var paddedValue = (padding + stringValue).slice(-padding.length)
      hexCodes.push(paddedValue);
    }
    return hexCodes.join("");
  });
}

function getDateTimeISO() {
  var date = new Date();
  return date.toISOString();
}


function removeChildren (node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function copyTextToClipboard(text){
console.log(text)
  if (!navigator.clipboard) {
    try {
      var successful = document.execCommand('copy');
    } catch (err) {}
    return;
  }

  navigator.clipboard.writeText(text).then(function() {
    // console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    // console.error('Async: Could not copy text: ', err);
  });
}

//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fetch = __webpack_require__(10)  // Uses native fetch() in the browser
const Config = __webpack_require__(0)
const doc = __webpack_require__(2)
const uri = __webpack_require__(1)
const graph = __webpack_require__(5)

const DEFAULT_CONTENT_TYPE = 'text/html; charset=utf-8'
const LDP_RESOURCE = '<http://www.w3.org/ns/ldp#Resource>; rel="type"'

module.exports = {
  setAcceptRDFTypes,
  copyResource,
  currentLocation,
  deleteResource,
  getAcceptPostPreference,
  getResource,
  getResourceHead,
  getResourceGraph,
  getResourceOptions,
  parseLinkHeader,
  patchResource,
  postResource,
  putResource,
  putResourceACL,
  postActivity
}

function setAcceptRDFTypes(options) {
  options = options || {};

  return Config.AvailableMediaTypes.map(i => {
    if (i == 'application/xhtml+xml' || i == 'text/html') {
      // q = Number(Math.round((q-0.1)+'e2')+'e-2');
      return i + ';q=0.9';
    }
    return i;
  }).join(',');
}

// I want HTTP COPY and I want it now!
function copyResource (fromURL, toURL, options = {}) {
  let headers = { 'Accept': '*/*' }
  let contentType

  if (!fromURL || !toURL) {
    return Promise.reject(new Error('Missing fromURL or toURL in copyResource'))
  }

  return getResource(fromURL, headers, options)
    .then(response => {
      contentType = response.headers.get('Content-Type')

      return (Config.AcceptBinaryTypes.indexOf(contentType))
        ? response.arrayBuffer()
        : response.text()
    })
    .then(contents => {
      return putResource(toURL, contents, contentType, null, options)
        .catch(error => {
          if (error.status === 0) {
            // Retry with no credentials
            options.noCredentials = true
            return putResource(toURL, contents, contentType, null, options)
          }

          throw error  // re-throw error
        })
    })
}

/**
 * @returns {string}
 */
function currentLocation () {
  return window.location.origin + window.location.pathname
}

/**
 * deleteResource
 *
 * @param url {string}
 * @param options {object}
 *
 * @returns {Promise<Response>}
 */
function deleteResource (url, options = {}) {
  if (!url) {
    return Promise.reject(new Error('Cannot DELETE resource - missing url'))
  }

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  options.method = 'DELETE'

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error deleting resource: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      return response
    })
}

function getAcceptPostPreference (url) {
  const pIRI = uri.getProxyableIRI(url)

  return getResourceOptions(pIRI, {'header': 'Accept-Post'})
    .catch(error => {
      console.error(error)

      return {'headers': 'application/ld+json'}
    })
    .then(result => {
      let header = result.headers.trim().split(/\s*,\s*/)

      if (header.indexOf('text/html') > -1 || header.indexOf('application/xhtml+xml') > -1) {
        return 'text/html'
      } else if (header.indexOf('text/turtle') > -1 || header.indexOf('*/*') > -1) {
        return 'text/turtle'
      } else if (header.indexOf('application/ld+json') > -1 || header.indexOf('application/json') > -1) {
        return 'application/ld+json'
      } else {
        console.log('Accept-Post contains unrecognised media-range; ' + result.headers)
        return result.headers
      }
    })
}

/**
 * getResource
 *
 * @param url {string}
 *
 * @param headers {object}
 * @param [headers.accept='text/turtle'] {string}
 *
 * @param options {object}
 *
 * @returns {Promise<string>|Promise<ArrayBuffer>}
 */
function getResource (url, headers = {}, options = {}) {
  url = url || currentLocation()

  options.method = 'GET'

  if (!headers['Accept']) {
    headers['Accept'] = 'text/turtle'
  }

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  options.headers = Object.assign({}, headers)

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error fetching resource: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      return response
    })
}

/**
 * getResourceHead
 *
 * @param [url] {string}
 *
 * @param options {object}
 * @param options.header {string}
 *
 * @returns {Promise<string>} Resolves with contents of specified header
 */
function getResourceHead (url, options = {}) {
  url = url || currentLocation()

  if (!options.header) {
    return Promise.reject(new Error('options.header not specified'))
  }

  options.method = 'HEAD'

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error fetching resource HEAD: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      let header = response.headers.get(options.header)

      if (!header) {
        throw new Error("'" + options.header + "' header not found")
      }

      return { 'headers': header }
    })
}

function getResourceGraph (iri, headers, options = {}) {
  let defaultHeaders = {'Accept': setAcceptRDFTypes()}
  headers = headers || defaultHeaders
  if (!('Accept' in headers)) {
    Object.assign(headers, defaultHeaders)
  }

  if (iri.slice(0, 5).toLowerCase() === 'http:') {
    options['noCredentials'] = true

    if (document.domain !== iri.split('/')[2]) {
      options['forceProxy'] = true
    }
  }

  let pIRI = uri.getProxyableIRI(iri, options)

  return getResource(pIRI, headers, options)
    .then(response => {
      let cT = response.headers.get('Content-Type')
      options.contentType = (cT) ? cT.split(';')[ 0 ].trim() : 'text/turtle'

      options.subjectURI = uri.stripFragmentFromString(iri)

      return response.text()
    })
    .then(data => {
      return graph.getGraphFromData(data, options)
    })
    .then(g => {
      let fragment = (iri.lastIndexOf('#') >= 0) ? iri.substr(iri.lastIndexOf('#')) : ''

      return SimpleRDF(Config.Vocab, options[ 'subjectURI' ], g, ld.store).child(pIRI + fragment)
    })
}

/**
 * getResourceOptions
 *
 * @param [url] {string} Defaults to current url
 *
 * @param [options={}] {object}
 * @param [options.header] {string} Specific response header to return
 * @param [options.noCredentials] {boolean}
 *
 * @returns {Promise} Resolves with `{ headers: ... }` object
 */
function getResourceOptions (url, options = {}) {
  url = url || currentLocation()

  options.method = 'OPTIONS'

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error fetching resource OPTIONS: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }
      else if (options.header && !response.headers.get(options.header)){
        let error = new Error('OPTIONS without ' + options.header + ' header: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      if (options.header) {  // specific header requested
        return { headers: response.headers.get(options.header) }
      }

      return { headers: response.headers }  // Not currently used anywhere
    })
}

function parseLinkHeader (link) {
  if (!link) {
    return {}
  }
  var linkexp = /<[^>]*>\s*(\s*;\s*[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*")))*(,|$)/g
  var paramexp = /[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*"))/g;
  var matches = link.match(linkexp)
  var rels = {}
  for (var i = 0; i < matches.length; i++) {
    var split = matches[i].split('>')
    var href = split[0].substring(1)
    var ps = split[1]
    var s = ps.match(paramexp)
    for (var j = 0; j < s.length; j++) {
      var p = s[j]
      var paramsplit = p.split('=')
      // var name = paramsplit[0]
      var rel = paramsplit[1].replace(/["']/g, '')
      if (!rels[rel]) {
        rels[rel] = []
      }
      rels[rel].push(href)
      if (rels[rel].length > 1) {
        rels[rel].sort()
      }
    }
  }
  return rels
}

function patchResource (url, deleteBGP, insertBGP, options = {}) {
  // insertBGP and deleteBGP are basic graph patterns.
  deleteBGP = (deleteBGP) ? 'DELETE DATA {\n\
' + deleteBGP + '\n\
};\n\
' : '';

  insertBGP = (insertBGP) ? 'INSERT DATA {\n\
' + insertBGP + '\n\
};\n\
' : '';


  options.body = deleteBGP + insertBGP

  options.method = 'PATCH'

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  options.headers = options.headers || {}

  options.headers['Content-Type'] = 'application/sparql-update; charset=utf-8'

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error patching resource: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      return response
    })
}

function postResource (url, slug, data, contentType, links, options = {}) {
  if (!url) {
    return Promise.reject(new Error('Cannot POST resource - missing url'))
  }

  options.method = 'POST'

  options.body = data

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  options.headers = options.headers || {}

  options.headers['Content-Type'] = contentType || DEFAULT_CONTENT_TYPE

  links = links
    ? LDP_RESOURCE + ', ' + links
    : LDP_RESOURCE

  options.headers['Link'] = links

  if (slug) {
    options.headers['Slug'] = slug
  }

  return fetch(url, options)

    .catch(error => {
      if (error.status === 0 && !options.noCredentials) {
        // Possible CORS error, retry with no credentials
        options.noCredentials = true
        return postResource(url, slug, data, contentType, options)
      }

      throw error
    })

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error creating resource: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      return response
    })
}

/**
 * putResource
 *
 * @param url {string}
 *
 * @param data {string|object}
 *
 * @param [contentType=DEFAULT_CONTENT_TYPE] {string}
 *
 * @param [links=LDP_RESOURCE] {string}
 *
 * @param [options={}] {object}
 *
 * @returns {Promise<Response>}
 */
function putResource (url, data, contentType, links, options = {}) {
  if (!url) {
    return Promise.reject(new Error('Cannot PUT resource - missing url'))
  }

  options.method = 'PUT'

  options.body = data

  if (!options.noCredentials) {
    options.credentials = 'include'
  }

  options.headers = options.headers || {}

  options.headers['Content-Type'] = contentType || DEFAULT_CONTENT_TYPE

  links = links
    ? LDP_RESOURCE + ', ' + links
    : LDP_RESOURCE

  options.headers['Link'] = links

  return fetch(url, options)

    .then(response => {
      if (!response.ok) {  // not a 2xx level response
        let error = new Error('Error writing resource: ' +
          response.status + ' ' + response.statusText)
        error.status = response.status
        error.response = response

        throw error
      }

      return response
    })
}

/**
 * putResourceACL
 *
 * TODO: This doesn't seem to be used anywhere...
 *
 * @param accessToURL
 * @param aclURL
 * @param acl
 *
 * @returns {Promise<Response|null>}
 */
function putResourceACL (accessToURL, aclURL, acl) {
  if (!Config.User.IRI) {
    console.log('Go through sign-in or do: DO.C.User.IRI = "https://example.org/#i";')
    return Promise.resolve(null)
  }

  acl = acl || {
    'u': { 'iri': [Config.User.IRI], 'mode': ['acl:Control', 'acl:Read', 'acl:Write'] },
    'g': { 'iri': ['http://xmlns.com/foaf/0.1/Agent'], 'mode': ['acl:Read'] },
    'o': { 'iri': [], 'mode': [] }
  }

  let agent, agentClass, mode

  if ('u' in acl && 'iri' in acl.u && 'mode' in acl.u) {
    agent = '<' + acl.u.iri.join('> , <') + '>'
    mode = acl.u.mode.join(' , ')
  } else {
    agent = '<' + Config.User.IRI + '>'
    mode = 'acl:Control , acl:Read , acl:Write'
  }

  let authorizations = []

  authorizations.push(
    '[ a acl:Authorization ; acl:accessTo <' +
    accessToURL + '> ; acl:accessTo <' + aclURL + '> ; acl:mode ' + mode +
    ' ; acl:agent ' + agent + ' ] .'
  )

  if ('g' in acl && 'iri' in acl.g && acl.g.iri.length >= 0) {
    agentClass = '<' + acl.g.iri.join('> , <') + '>'
    mode = acl.g.mode.join(' , ')
    authorizations.push(
      '[ a acl:Authorization ; acl:accessTo <' + accessToURL +
      '> ; acl:mode ' + mode + ' ; acl:agentClass ' + agentClass + ' ] .'
    )
  }

  let data = '@prefix acl: <http://www.w3.org/ns/auth/acl#> .\n' +
    authorizations.join('\n') + '\n'

  return putResource(aclURL, data, 'text/turtle; charset=utf-8')
}

function postActivity(url, slug, data, options) {
  return getAcceptPostPreference(url)
    .then(preferredContentType => {
      switch (preferredContentType) {
        case 'text/html':
        case 'application/xhtml+xml':
          return postResource(url, slug, data, 'text/html; charset=utf-8')

        case 'text/turtle':
          // FIXME: proxyURL + http URL doesn't work. https://github.com/solid/node-solid-server/issues/351

          return graph.serializeData(data, options['contentType'], 'text/turtle', options)
            .then(data => {
              return postResource(url, slug, data, 'text/turtle')
            })

        case 'application/ld+json':
        case 'application/json':
        case '*/*':
        default:
          return graph.serializeData(data, options['contentType'], 'application/ld+json', options)
            .then(data => {
              if (!options['canonical']) {
                let x = JSON.parse(data)
                if ('id' in x) {
                  x[ "via" ] = x[ "id" ]
                  x[ "id" ] = ""
                  data = JSON.stringify(x)
                }
              }

              var profile = ('profile' in options) ? '; profile="' + options.profile + '"' : ''

              return postResource(url, slug, data, preferredContentType + profile)
            })
      }
    })
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.SimpleRDF = (typeof ld !== 'undefined') ? ld.SimpleRDF : undefined

const Config = __webpack_require__(0)
const doc = __webpack_require__(2)

module.exports = {
  getGraph,
  getGraphFromData,
  getMatchFromData,
  serializeData,
  serializeGraph,
  applyParserSerializerFixes
}

function getGraph (url) {
  return SimpleRDF(Config.Vocab, url, null, ld.store).get()
}

function getGraphFromData (data, options = {}) {
  if (!('contentType' in options)) {
    options['contentType'] = 'text/turtle'
  }

  // FIXME: This is a dirty filthy fugly but a *fix* to get around the baseURI not being passed to the DOM parser. This injects the `base` element into the document so that the RDFa parse fallsback to that. The actual fix should happen upstream. See related issues:
  // https://github.com/linkeddata/dokieli/issues/132
  // https://github.com/rdf-ext/rdf-parser-dom/issues/2
  // https://github.com/rdf-ext/rdf-parser-rdfa/issues/3
  // https://github.com/simplerdf/simplerdf/issues/19

  if (!('subjectURI' in options)) {
    options['subjectURI'] = 'http://localhost/d79351f4-cdb8-4228-b24f-3e9ac74a840d'
  }
  if (options.contentType === 'text/html' || options.contentType === 'application/xhtml+xml') {
    data = doc.setHTMLBase(data, options.subjectURI)
  }

  return SimpleRDF.parse(data, options['contentType'], options['subjectURI'])
}

function getMatchFromData (data, spo = {}, options = {}) {
  if (!data) { return Promise.resolve({}) }

  spo['subject'] = spo.subject || window.location.origin + window.location.pathname
  spo['predicate'] = spo.predicate || Config.Vocab['rdfslabel']

  options['contentType'] = options.contentType || 'text/html'
  options['subjectURI'] = options.subjectURI || spo.subject

  return getGraphFromData(data, options)
    .then(g => {
      let s = SimpleRDF(Config.Vocab, spo.subject, g, ld.store).child(spo.subject)

      return s[spo.predicate]
    })
    .catch(() => {
      return undefined
    })
}

/**
 * @param data
 * @param fromContentType
 * @param toContentType
 * @param options
 *
 * @returns {Promise}
 */
function serializeData (data, fromContentType, toContentType, options) {
  if (fromContentType === toContentType) {
    return Promise.resolve(data)
  }

  options.contentType = fromContentType

// console.log(data)

  return getGraphFromData(data, options)
    .then(g => {

      options.contentType = toContentType

      switch (toContentType) {
        case 'application/ld+json':
// console.log(g)
          return serializeGraph(g, options).then(subjectTriples => {
            subjectTriples = JSON.parse(subjectTriples)

            var data = {}
            if (options["@context"]) {
              data["@context"] = options["@context"]
            }

            var subjectsChecked = []
            var subjectsList = []
            var rootIndex = 0

            for(var i = 0; i < subjectTriples.length; i++) {
              subjectsList.push(subjectTriples[i]["@id"])

              if ("@id" in subjectTriples[i] && subjectTriples[i]["@id"] == options.subjectURI) {
                Object.assign(data, subjectTriples[i])

                subjectsChecked.push(options.subjectURI)

                rootIndex = i
              }
            }

            var processObject = function(subject) {
              var properties = Object.keys(subject)
              properties.forEach(property => {
                if (typeof subject[property] === 'object') {
                  if ("@id" in subject[property]
                    && subjectsChecked.indexOf(subject[property]["@id"]) < 0
                    && subjectsList.indexOf(subject[property]["@id"]) > -1) {

                    subjectTriples.forEach(o => {
                      if (o["@id"] == subject[property]["@id"]) {
                        subject[property] = o;

                        subjectsChecked.push(subject[property]["@id"])
                      }
                    })
                  }

                  return Object.assign({}, processObject(subject[property]))
                }
              })

              return subject
            }

            var subject = subjectTriples[rootIndex]

            Object.assign(data, processObject(subject))

// console.log(data)
// console.log(JSON.stringify(data))
            return JSON.stringify(data) + '\n'
          })

        default:
          return serializeGraph(g, options)
      }     
    })
    .then(data => {
      switch (toContentType) {
        default:
          break;

        case 'application/ld+json':
          //TODO: Lazy person's JSON-LD compacting. Expect errors!
          if (options["@context"]) {
            var context = (typeof options["@context"] === 'string') ? [options["@context"]] : options['@context']

            data = JSON.parse(data);
            delete data["@context"]
            data = JSON.stringify(data)

            data = data.replace(new RegExp('"@id"', 'g'), '"id"')
            data = data.replace(new RegExp('"@type"', 'g'), '"type"')

            context.forEach(function(c){
              var search = '';
              var replace = '';

              if (typeof c === 'string') {
                switch(c) {
                  case 'http://www.w3.org/ns/anno.jsonld':
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#autoDirection', 'g'), 'auto')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#cachedSource', 'g'), 'cached')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasBody', 'g'), 'body')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasEndSelector', 'g'), 'endSelector')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasPurpose', 'g'), 'purpose')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasScope', 'g'), 'scope')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasSelector', 'g'), 'selector')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasSource', 'g'), 'source')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasStartSelector', 'g'), 'startSelector')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#hasTarget', 'g'), 'target')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#ltrDirection', 'g'), 'ltr')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#motivatedBy', 'g'), 'motivation')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#rtlDirection', 'g'), 'rtl')
                    data = data.replace(new RegExp('http://www.w3.org/ns/oa#styledBy', 'g'), 'stylesheet')

                    data = data.replace(new RegExp('"oa:', 'g'), '"')

                    search = 'http://www.w3.org/ns/oa#'
                    break

                  case 'https://www.w3.org/ns/activitystreams':
                    data = data.replace(new RegExp('"as:', 'g'), '"')

                    search = 'https://www.w3.org/ns/activitystreams#'
                    break

                  case 'http://schema.org/':
                    data = data.replace(new RegExp('"schema:', 'g'), '"')

                    search = 'http:/schema.org/'
                    break
                }
              }
              else {
                replace = Object.keys(c)[0];

                switch(replace) {
                  case 'oa':
                    search = 'http://www.w3.org/ns/oa#'
                    break

                  case 'as':
                    search = 'https://www.w3.org/ns/activitystreams#'
                    break

                  case 'schema':
                    search = 'http://schema.org/'
                    break
                }

                replace = replace + ':'
              }

              data = data.replace(new RegExp(search, 'g'), replace)

            })

            data = JSON.parse(data)
            data = Object.assign({"@context": options["@context"]}, data)
            data = JSON.stringify(data)
          }

          break;
      }
// console.log(data)
      return data
    })
}

function serializeGraph (g, options = {}) {
  if (!('contentType' in options)) {
    options['contentType'] = 'text/turtle'
  }

  return ld.store.serializers[options.contentType].serialize(g._graph)
    .then(data => {
      data = applyParserSerializerFixes(data, options.contentType)

      // XXX: .compact doesn't work as advertised
      // if (options.contentType === 'application/ld+json' && '@context' in options) {
      //   return jsonld.promises().compact(data, options['@context'], {'skipExpansion': true})
      // }

      return data
    })
}

function applyParserSerializerFixes(data, contentType) {
  // FIXME: FUGLY because parser defaults to localhost. Using UUID to minimise conflict
  data = data.replace(/http:\/\/localhost\/d79351f4-cdb8-4228-b24f-3e9ac74a840d/g, '');

  switch(contentType) {
    case 'text/turtle':
      //XXX: Workaround for rdf-parser-rdfa bug that gives '@langauge' instead of @type when encountering datatype in HTML+RDFa . TODO: Link to bug here
      data = data.replace(/Z"@en;/, 'Z"^^<http://www.w3.org/2001/XMLSchema#dateTime>;');
      data = data.replace(/start> "(\d+)"@en;/, 'start> "$1"^^<http://www.w3.org/2001/XMLSchema#nonNegativeInteger>;');
      data = data.replace(/end> "(\d+)"@en;/, 'end> "$1"^^<http://www.w3.org/2001/XMLSchema#nonNegativeInteger>;');
      break;

    case 'application/ld+json':
      var x = JSON.parse(data);

      //XXX: Workaround for rdf-parser-rdfa bug that gives '@language' instead of @type when encountering datatype in HTML+RDFa . See also https://github.com/rdf-ext/rdf-parser-rdfa/issues/5
      var properties = ['https://www.w3.org/ns/activitystreams#published', 'https://www.w3.org/ns/activitystreams#updated', 'http://schema.org/dateCreated', 'http://schema.org/datePublished', 'http://schema.org/dateModified', 'http://www.w3.org/ns/oa#start', 'http://www.w3.org/ns/oa#end'];

      for(var i = 0; i < x.length; i++){
        for(var j = 0; j < properties.length; j++){
          if(properties[j] in x[i]) {
            if (properties[j] == 'http://www.w3.org/ns/oa#start' || properties[j] == 'http://www.w3.org/ns/oa#end') {
              x[i][properties[j]] = {
                '@type': 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
                '@value': x[i][properties[j]]['@value']
              };
            }
            else {
              x[i][properties[j]] = {
                '@type': 'http://www.w3.org/2001/XMLSchema#dateTime',
                '@value': x[i][properties[j]]['@value']
              };
            }
          }
        }
      }

      data = JSON.stringify(x);
      break;
  }        

  return data;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Config = __webpack_require__(0)
const util = __webpack_require__(3)
const uri = __webpack_require__(1)

module.exports = {
  initStorage,
  enableStorage,
  disableStorage,
  updateStorageDocument,
  enableAutoSave,
  disableAutoSave,
  removeStorageItem,
  removeStorageProfile,
  getStorageProfile,
  updateStorageProfile,
  showStorage,
  hideStorage
}


function initStorage(key) {
  if (typeof window.localStorage != 'undefined') {
    enableStorage(key);
  }
}

function enableStorage(key) {
  Config.UseStorage = true;
  var o = localStorage.getItem(key);
  try {
    JSON.parse(o).object.Document;
    document.documentElement.innerHTML = JSON.parse(o).object.content;
  } catch(e){}
  console.log(util.getDateTimeISO() + ': ' + key + ' storage enabled.');
  enableAutoSave(key);
}

function disableStorage(key) {
  Config.UseStorage = false;
  localStorage.removeItem(key);
  disableAutoSave(key);
  console.log(util.getDateTimeISO() + ': ' + key + ' storage disabled.');
}

function updateStorageDocument(key) {
  var content = doc.getDocument();

  var id = DO.U.generateUUID();
  var o = localStorage.getItem(key);

  var datetime = util.getDateTimeISO();

  var object = {
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": id,
    "type": "Update",
    "object": {
      "id": key,
      "type": "Document",
      "updated": datetime,
      "mediaType": "text/html",
      "content": content
    }
  };

  localStorage.setItem(key, JSON.stringify(object));
  console.log(datetime + ': Document saved.');
}

function enableAutoSave(key) {
  Config.AutoSaveId = setInterval(function() { updateStorageDocument(key) }, Config.AutoSaveTimer);
  console.log(util.getDateTimeISO() + ': ' + key + ' autosave enabled.');
}

function disableAutoSave(key) {
  clearInterval(Config.AutoSaveId);
  Config.AutoSaveId = '';
  console.log(util.getDateTimeISO() + ': ' + key + ' autosave disabled.');
}

function removeStorageItem(key) {
  if (!key) { Promise.resolve(); }

  console.log(util.getDateTimeISO() + ': ' + key + ' removed.')

  if (Config.WebExtension) {
    var browser = (typeof browser !== 'undefined') ? browser : chrome;

    return browser.storage.sync.remove(key);
  }
  else if (window.localStorage) {
    return Promise.resolve(localStorage.removeItem(key));
  }
  else {
    return Promise.reject({'message': 'storage is unavailable'})
  }
}

function removeStorageProfile(key) {
  key = key || 'DO.C.User';

  return removeStorageItem(key)
}

function getStorageProfile(key) {
  key = key || 'DO.C.User'

  if (Config.WebExtension) {
    if (typeof browser !== 'undefined') {
      return browser.storage.sync.get(key).then(function(o){ return o[key]; });
    }
    else {
      var value = {};

      chrome.storage.sync.get(key, function(o){ value = o[key]; })

      return new Promise(function(resolve, reject){
        window.setTimeout(function() {
          return resolve(value)
        }, 50);
      });
    }
  }
  else if (window.localStorage) {
    var o = localStorage.getItem(key);
    return Promise.resolve(JSON.parse(o));
  }
  else {
    return Promise.reject({'message': 'storage is unavailable'})
  }
}

function updateStorageProfile(User) {
  if (!User.IRI) { return Promise.resolve({'message': 'User.IRI is not set'}); }

  var key = 'DO.C.User'

  var id = DO.U.generateUUID();
  var datetime = util.getDateTimeISO();

  //because.. cyclic
  if (User.Graph) {
    delete User.Graph
  }

  if (User.Contacts) {
    User.Contacts = {}
  }

  var object = {
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": id,
    "type": "Update",
    "object": {
      "id": key,
      "type": "Profile",
      "describes": User
    },
    "datetime": datetime,
    "actor": User.IRI
  };

  if (Config.WebExtension) {
    if (typeof browser !== 'undefined') {
      return browser.storage.sync.set({[key]: object});
    }
    else {
      return Promise.resolve(chrome.storage.sync.set({[key]: object}));
    }
  }
  else if (window.localStorage) {
    console.log(datetime + ': User ' + User.IRI + ' saved.');
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(object)));
  }
  else {
    return Promise.reject({'message': 'storage is unavailable'})
  }
}

function showStorage(node) {
  if (window.localStorage) {
    if(document.querySelector('#local-storage')) { return; }

    var useStorage, checked;

    if (Config.UseStorage) {
      // if (Config.AutoSaveId) {
      //   checked = ' checked="checked"';
      // }
      // useStorage = Config.DisableStorageButtons + '<input id="local-storage-html-autosave" class="autosave" type="checkbox"' + checked +' /> <label for="local-storage-html-autosave"><i class="fa fa-clock-o"></i> 1m autosave</label>';
      useStorage = Config.DisableStorageButtons;

    }
    else {
      useStorage = Config.EnableStorageButtons;
    }

    node.insertAdjacentHTML('beforeend', '<section id="local-storage" class="do"><h2>Local Storage</h2><ul><li>' + useStorage + '</li></ul></section>');

    var key = uri.stripFragmentFromString(document.location.href);

    document.getElementById('local-storage').addEventListener('click', function(e) {
      if (e.target.closest('button.local-storage-enable-html')) {
        e.target.outerHTML = Config.DisableStorageButtons;
        enableStorage(key);
      }

      if (e.target.closest('button.local-storage-disable-html')) {
        e.target.outerHTML = Config.EnableStorageButtons;
        disableStorage(key);
      }

      // if (e.target.closest('input.autosave')) {
      //   if (e.target.getAttribute('checked')) {
      //     e.target.removeAttribute('checked');
      //     disableAutoSave(key);
      //   }
      //   else {
      //     e.target.setAttribute('checked', 'checked');
      //     enableAutoSave(key);
      //   }
      // }
    });
  }
}

function hideStorage() {
  if (Config.UseStorage) {
    var ls = document.getElementById('local-storage');
    ls.parentNode.removeChild(ls);
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** dokieli
 *
 * Sarven Capadisli <info@csarven.ca> http://csarven.ca/#i
 * http://www.apache.org/licenses/LICENSE-2.0.html Apache License, Version 2.0
 * https://dokie.li/
 * https://github.com/linkeddata/dokieli
 */

const fetcher = __webpack_require__(4)
const doc = __webpack_require__(2)
const uri = __webpack_require__(1)
const graph = __webpack_require__(5)
const inbox = __webpack_require__(11)
const util = __webpack_require__(3)
const storage = __webpack_require__(7)
global.auth = __webpack_require__(12)

if(typeof DO === 'undefined'){
global.SimpleRDF = (typeof ld !== 'undefined') ? ld.SimpleRDF : undefined;
var DO = {
  fetcher,

  C: __webpack_require__(0),

  U: {
    getResourceLabel: function(s) {
      return s.dctermstitle || s['http://purl.org/dc/elements/1.1/title'] || auth.getAgentName(s) || undefined;
    },


    getItemsList: function(url, options) {
      url = url || window.location.origin + window.location.pathname;
      options = options || {};

      DO.C['CollectionItems'] = ('CollectionItems' in DO.C && DO.C.CollectionItems.length > 0) ? DO.C.CollectionItems : [];
      DO.C['CollectionPages'] = ('CollectionPages' in DO.C && DO.C.CollectionPages.length > 0) ? DO.C.CollectionPages : [];

      var pIRI = uri.getProxyableIRI(url);

      return fetcher.getResourceGraph(pIRI)
        .then(
          function(i) {
            var s = i.child(url);

            //XXX: First item is actually the Collection
            DO.C.CollectionPages.push(url);

            // s.ldpcontains.forEach(function(resource) {
            //   var types = s.child(resource).rdftype;
            //   if(types.indexOf(DO.C.Vocab['ldpContainer']["@id"]) < 0 && types.indexOf(DO.C.Vocab['asCollection']["@id"]) < 0) {
            //     DO.C.CollectionItems.push(resource);
            //   }
            // });
            // s.asitems.forEach(function(resource) {
            //   var types = s.child(resource).rdftype;
            //   if(types.indexOf(DO.C.Vocab['ldpContainer']["@id"]) < 0 && types.indexOf(DO.C.Vocab['asCollection']["@id"]) < 0) {
            //     DO.C.CollectionItems.push(resource);
            //   }
            // });
            // s.asorderedItems.forEach(function(resource) {
            //   var types = s.child(resource).rdftype;
            //   if(types.indexOf(DO.C.Vocab['ldpContainer']["@id"]) < 0 && types.indexOf(DO.C.Vocab['asCollection']["@id"]) < 0) {
            //     DO.C.CollectionItems.push(resource);
            //   }
            // });

            var items = [s.asitems, s.asorderedItems, s.ldpcontains];
            Object.keys(items).forEach(function(i) {
              items[i].forEach(function(resource){
                var types = s.child(resource).rdftype;
                if(types.indexOf(DO.C.Vocab['ldpContainer']["@id"]) < 0 &&
                   types.indexOf(DO.C.Vocab['asCollection']["@id"]) < 0 &&
                   types.indexOf(DO.C.Vocab['asOrderedCollection']["@id"]) < 0) {
                  DO.C.CollectionItems.push(resource);
                }                
              });
            });

            if (s.asfirst && DO.C.CollectionPages.indexOf(s.asfirst) < 0) {
              return DO.U.getItemsList(s.asfirst, options);
            }
            else if (s.asnext && DO.C.CollectionPages.indexOf(s.asnext) < 0) {
              return DO.U.getItemsList(s.asnext, options);
            }
            else {
              return util.uniqueArray(DO.C.CollectionItems);
            }
          },
          function(reason) {
            console.log(reason);
            return reason;
          }
        );
    },


    getNotifications: function(url) {
      url = url || window.location.origin + window.location.pathname;
      var notifications = [];
      var pIRI = uri.getProxyableIRI(url);

      return graph.getGraph(pIRI)
        .then(
          function(i) {
            var s = i.child(url);
            s.ldpcontains.forEach(function(resource) {
// console.log(resource);
              var types = s.child(resource).rdftype;
// console.log(types);
              if(types.indexOf(DO.C.Vocab['ldpContainer']["@id"]) < 0) {
                notifications.push(resource);
              }
            });
// console.log(notifications);
            if (notifications.length > 0) {
              return notifications;
            }
            else {
              var reason = {"message": "There are no notifications."};
              return Promise.reject(reason);
            }
          },
          function(reason) {
            console.log(reason);
            return reason;
          }
        );
    },

    showInboxNotifications: function() {
      if (typeof SimpleRDF !== 'undefined') {
        inbox.getEndpoint(DO.C.Vocab['ldpinbox']['@id']).then(
          function(i) {
            i.forEach(function(inboxURL) {
              DO.U.showNotificationSources(inboxURL);
            });
          },
          function(reason) {
// console.log(reason);
          }
        );
      }
    },

    showNotificationSources: function(url) {
      DO.U.getNotifications(url).then(
        function(i) {
          i.forEach(function(notification) {
            var pIRI = uri.getProxyableIRI(notification);
            DO.U.showActivities(pIRI);
          });
        },
        function(reason) {
          console.log('No notifications');
          return reason;
        }
      );
    },

    showContactsActivities: function(e) {
      var showProgress = function(e){
        var rA = e.target.closest('.resource-activities')
        var i = rA.querySelector('.fa-bolt')
        rA.disabled = true;

        if (i) {
          i.classList.add('fa-circle-o-notch', 'fa-spin')
          i.classList.remove('fa-bolt')
        }
      }

      var removeProgress = function(e) {
        var rA = e.target.closest('.resource-activities')
        var i = rA.querySelector('.fa-spin')

        if (i) {
          i.classList.add('fa-circle-o')
          i.classList.remove('fa-circle-o-notch', 'fa-spin')
        }
      }

      if (e) {
        showProgress(e)
      }

      var promises = []

      if (DO.C.User.Outbox && DO.C.User.Outbox.length > 0) {
        DO.U.showOutboxSources(DO.C.User.Outbox[0])
      }

      if (DO.C.User.Contacts && Object.keys(DO.C.User.Contacts).length > 0){
        Object.keys(DO.C.User.Contacts).forEach(function(iri){
          var o = DO.C.User.Contacts[iri].Outbox

          if (o) {
            var sOS = function(outbox) {
              return DO.U.showOutboxSources(outbox)
                .catch(() => {
                  return Promise.resolve()
                })
            }

            promises.push(sOS(o[0]))
          }
        })

        return Promise.all(promises)
          .then(r => {
            removeProgress(e)
          });
      }
      else {
        return DO.U.updateContactsInfo(DO.C.User.IRI, { 'showOutboxSources': true })
          .then(() => {
            removeProgress(e)
          })
          .catch(() => {
            removeProgress(e)
          });
      }
    },

    showOutboxSources: function(url) {
      return DO.U.getOutboxActivities(url).then(
        function(items) {
          var promises = [];

          for (var i = 0; i < items.length && i < DO.C.CollectionItemsLimit; i++) {
            var pI = function(iri) {
              return DO.U.showActivities(iri)
                .catch(() => {
                  return Promise.resolve()
                })
            }

            promises.push(pI(items[i]));
          }

          return Promise.all(promises);
        },
        function(reason) {
          console.log('No activities');
          return reason;
        }
      );
    },

    getOutboxActivities: function(url) {
      url = url || window.location.origin + window.location.pathname;
      var pIRI = uri.getProxyableIRI(url);
      var headers = { 'Accept': 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"'}

      return fetcher.getResourceGraph(pIRI, headers)
        .then(
          function(i) {
// console.log(i)
            var s = i.child(url);
            var items = Object.assign([], s.asitems._array);
            items = Object.assign(items, s.asorderedItems._array);
            items = util.uniqueArray(items);

            if (items.length > 0) {
              return items;
            }
            else {
              var reason = {"message": "There are no activities."};
              return Promise.reject(reason);
            }
          },
          function(reason) {
            console.log(reason);
            return reason;
          }
        );
    },

    showActivities: function(url) {
      return graph.getGraph(url).then(
        function(g) {
// console.log(g);
          var subjects = [];
          g.graph().toArray().forEach(function(t){
            subjects.push(t.subject.nominalValue);
          });
          subjects = util.uniqueArray(subjects);
// console.log(subjects);
          subjects.forEach(function(i){
            var s = g.child(i)
            var types = s.rdftype._array || [];

            var currentPathURL = window.location.origin + window.location.pathname;

            if (types.length > 0) {
              var resourceTypes = types;
              if(resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Like') > -1 ||
                 resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Dislike') > -1){
                if(s.asobject && s.asobject.at(0)) {
                  if(s.ascontext && s.ascontext.at(0)){
                    if(DO.U.getPathURL(s.asobject.at(0)) == currentPathURL) {
                      var context = s.ascontext.at(0);
                      return DO.U.positionInteraction(context).then(
                        function(iri){
                          return iri;
                        },
                        function(reason){
                          console.log(context + ': Context is unreachable');
                        });
                    }
                  }
                  else {
                    var iri = s.iri().toString();
                    var targetIRI = s.asobject.at(0);
                    var motivatedBy = 'oa:assessing';
                    var id = String(Math.abs(DO.U.hashCode(iri)));
                    var refId = 'r-' + id;
                    var refLabel = id;

                    var bodyText = (resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Like') > -1) ? 'Liked' : 'Disliked';

                    var noteData = {
                      "type": 'article',
                      "mode": "read",
                      "motivatedByIRI": motivatedBy,
                      "id": id,
                      "refId": refId,
                      "refLabel": refLabel,
                      // "iri": iri,
                      "creator": {},
                      "target": {
                        "iri": targetIRI
                      },
                      "body": bodyText,
                      "license": {}
                    };

                    if (s.asactor){
                      noteData['creator'] = {
                        'iri': s.asactor
                      }
                      var a = g.child(noteData['creator']['iri']);
                      var actorName = auth.getAgentName(a);
                      var actorImage = auth.getAgentImage(a);

                      if(typeof actorName != 'undefined') {
                        noteData['creator']['name'] = actorName;
                      }
                      if(typeof actorImage != 'undefined') {
                        noteData['creator']['image'] = actorImage;
                      }
                    }
                    else if(type == 'https://www.w3.org/ns/activitystreams#Dislike'){
                      noteData['creator'] = {
                        'name': 'Anonymous Coward'
                      }
                    }
                    if (s.asupdated){
                      noteData['datetime'] = s.asupdated;
                    }
                    if (s.schemalicense){
                      noteData.license["iri"] = s.schemalicense;
                      noteData.license["name"] = DO.C.License[noteData.license["iri"]].name;
                    }

                    DO.U.addInteraction(noteData);
                  }
                }
              }
              else if(resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Relationship') > -1){
                if(s.assubject && s.assubject.at(0) && s.asrelationship && s.asrelationship.at(0) && s.asobject && s.asobject.at(0) && DO.U.getPathURL(s.asobject.at(0)) == currentPathURL) {
                  var subject = s.assubject.at(0);
                  return DO.U.positionInteraction(subject).then(
                    function(iri){
                      return iri;
                    },
                    function(reason){
                      console.log(subject + ': subject is unreachable');
                    });
                }
              }
              else if(resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Announce') > -1 || resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Create') > -1) {
                if(s.asobject && s.asobject.at(0) && s.astarget && s.astarget.at(0) && DO.U.getPathURL(s.astarget.at(0)) == currentPathURL) {
                  var object = s.asobject.at(0);

                  if (object.startsWith(url)) {
                    return DO.U.showAnnotation(object, s);
                  }
                  else {
                    return DO.U.positionInteraction(object).then(
                      function(iri){
                        return iri;
                      },
                      function(reason){
                        console.log(object + ': object is unreachable');
                      });
                  }
                }
              }
              else if(resourceTypes.indexOf('https://www.w3.org/ns/activitystreams#Add') > -1) {
                if(s.asobject && s.asobject.at(0)) {
                  var object = s.asobject.at(0);

                  if (object.startsWith(url)) {
                    return DO.U.showAnnotation(object, s);
                  }
                  else {
                    return DO.U.positionInteraction(object).then(
                      function(iri){
                        return iri;
                      },
                      function(reason){
                        console.log(object + ': object is unreachable');
                      });
                  }
                }
              }
              else {
                // console.log(i + ' has unrecognised types: ' + resourceTypes);
                // return Promise.reject({'message': 'Unrecognised types ' + resourceTypes});
              }
            }
            else {
              // console.log('Skipping ' + i + ': No type.');
              // return Promise.reject({'message': 'Activity has no type. What to do?'});
            }
          });
        },
        function(reason) {
          console.log(url + ': is unreachable. ' + reason);
          return reason;
        }
      );
    },

    //Borrowed the d3 parts from https://bl.ocks.org/mbostock/4600693
    showVisualisationGraph: function(url, data, selector, options) {
      url = url || window.location.origin + window.location.pathname;
      data = data || doc.getDocument();
      selector = selector || 'body';
      options = options || {};
      options['contentType'] = options.contentType || 'text/html';
      options['subjectURI'] = options.subjectURI || url;
      options['license'] = options.license || 'https://creativecommons.org/licenses/by/4.0/';
      var width = options.width || '100%';
      var height = options.height || '100%';

      var id = DO.U.generateAttributeId();


      function positionLink(d) {
        return "M" + d[0].x + "," + d[0].y
             + "S" + d[1].x + "," + d[1].y
             + " " + d[2].x + "," + d[2].y;
      }

      function positionNode(d) {
        return "translate(" + d.x + "," + d.y + ")";
      }

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x, d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x, d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null, d.fy = null;
      }

      var svg = d3.select(selector).append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('id', id)
        .attr('class', 'graph')
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('version', '1.1')
        .attr('xml:lang', 'en')
        .attr('prefix', 'rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# rdfs: http://www.w3.org/2000/01/rdf-schema# xsd: http://www.w3.org/2001/XMLSchema# schema: http://schema.org/');

      var s = document.getElementById(id);
      width = options.width || parseInt(s.ownerDocument.defaultView.getComputedStyle(s, null)["width"]);
      height = options.height || parseInt(s.ownerDocument.defaultView.getComputedStyle(s, null)["height"]);

      svg.append('metadata')
        .append('tspan')
          .attr('rel', 'schema:creator')
          .attr('resource', 'https://dokie.li/');

      if('license' in options) {
        svg.select('metadata')
          .append('tspan')
            .attr('rel', 'schema:license')
            .attr('resource', options.license);
      }

      if('title' in options) {
        svg.append('title')
          .attr('property', 'schema:name')
          .text(options.title);
      }

      svg.append('style').text('.node { stroke: #fff; stroke-width: 1px; } .link { fill: none; stroke: #bbb; }');

      var color = d3.scaleOrdinal(d3.schemeCategory20);

      var simulation = d3.forceSimulation()
          .force("link", d3.forceLink().distance(10).strength(0.25))
          .force('collide', d3.forceCollide().radius(5).strength(0.25))
          // .force("charge", d3.forceManyBody())
          // .force("center", d3.forceCenter());
          .force("center", d3.forceCenter(width / 2, height / 2));

      DO.U.getVisualisationGraphData(url, data, options).then(
        function(graph){
// console.log(graph);
          var nodes = graph.nodes,
              nodeById = d3.map(nodes, function(d) { return d.id; }),
              links = graph.links,
              bilinks = [];

          links.forEach(function(link) {
            var s = link.source = nodeById.get(link.source),
                t = link.target = nodeById.get(link.target),
                i = {}; // intermediate node
            nodes.push(i);
            links.push({source: s, target: i}, {source: i, target: t});
            bilinks.push([s, i, t]);
          });

          var link = svg.selectAll(".link")
            .data(bilinks)
            .enter().append("path")
              .attr("class", "link");

          var node = svg.selectAll(".node")
            .data(nodes.filter(function(d) { return d.id; }))
            .enter().append("circle")
              .attr("class", "node")
              .attr("r", 5)
              .attr("fill", function(d) { return color(d.group); })
              .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

          node.append("title")
              .text(function(d) { return d.id; });

          simulation
              .nodes(nodes)
              .on("tick", ticked);

          simulation.force("link")
              .links(links);

          function ticked() {
            link.attr("d", positionLink);
            node.attr("transform", positionNode);
          }
        });
    },

    getVisualisationGraphData: function(url, data, options) {
      return new Promise(function(resolve, reject) {
        graph.getGraphFromData(data, options).then(
          function(g){
// console.log(g);
            var g = SimpleRDF(DO.C.Vocab, options['subjectURI'], g, ld.store).child(url);
            var graph = {"nodes":[], "links": []};
            var graphNodes = [];

            g.graph().toArray().forEach(function(t){
              var group = 1;
              switch(t.predicate.nominalValue){
                default:
                  group = 1;
                  break;
                // case DO.C.Vocab['rdftype']['@id']:
                //   group = 2;
                //   break;
              }

              if(graphNodes.indexOf(t.subject.nominalValue + ' ' + group) == -1) {
                graphNodes.push(t.subject.nominalValue + ' ' + group);
                graph.nodes.push({"id": t.subject.nominalValue, "group": group});
              }
              if(graphNodes.indexOf(t.object.nominalValue + ' ' + group) == -1) {
                graphNodes.push(t.object.nominalValue + ' ' + group);
                graph.nodes.push({"id": t.object.nominalValue, "group": group});
              }

              graph.links.push({"source": t.subject.nominalValue, "target": t.object.nominalValue, "value": t.predicate.nominalValue});
            });

            delete graphNodes;
            return resolve(graph);
          }
        );
      });
    },

    showGraph: function(resources, selector, options){
      if (!DO.C.GraphViewerAvailable) { return; }

      options = options || {};
      options['contentType'] = options.contentType || 'text/html';
      options['subjectURI'] = location.href.split(location.search||location.hash||/[?#]/)[0];

      if (Array.isArray(resources)) {
        DO.U.showGraphResources(resources, selector, options);
      }
      else {
        var property = (resources && 'filter' in options && 'predicates' in options.filter && options.filter.predicates.length > 0) ? options.filter.predicates[0] : DO.C.Vocab['ldpinbox']['@id'];
        var iri = (resources) ? resources : location.href.split(location.search||location.hash||/[?#]/)[0];

        inbox.getEndpoint(property, iri).then(
          function(resources) {
            DO.U.showGraphResources(resources[0], selector, options);
          },
          function(reason) {
            console.log(reason);
          }
        );
      }
    },

    showGraphResources: function(resources, selector, options) {
      selector = selector || document.body;
      options = options || {};

      var processResources = function(resources, options) {
        if (Array.isArray(resources)) {
          return Promise.resolve(resources);
        }
        else {
          return DO.U.getItemsList(resources, options);
        }
      }

      processResources(resources, options).then(
        function(url) {
          var promises = [];
          url.forEach(function(u) {
            // console.log(u);
            // window.setTimeout(function () {
              var pIRI = uri.getProxyableIRI(u);
              promises.push(fetcher.getResourceGraph(pIRI));
            // }, 1000)
          });

          var dataGraph = SimpleRDF();

          var filterPredicates = false;
          if ('filter' in options && 'predicates' in options.filter && options.filter.predicates.length > 0) {
            filterPredicates = true;
          }

          Promise.all(promises)
            .then(function(graphs) {
              graphs.forEach(function(graph){
                graph = graph.graph();

                dataGraph.graph().addAll(graph);
              });

              if (filterPredicates) {
                dataGraph = dataGraph.graph().filter(function(g) {
                  if (options.filter.predicates.indexOf(g.predicate.nominalValue) >= 0) {
                    return g;
                  }
                });
              }

              graph.serializeGraph(dataGraph, { 'contentType': 'text/turtle' })
                .then(function(data){
                  options['contentType'] = 'text/turtle';
                  // options['subjectURI'] = url;
                  DO.U.showVisualisationGraph(options.subjectURI, data, selector, options);
                });
            });
        });
    },

    urlParam: function(name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results===null){
         return null;
      }
      else{
         return results[1] || 0;
      }
    },

    getTextQuoteSelectorFromLocation: function(location) {
      var regexp = /#selector\(type=TextQuoteSelector,(.*)\)/;
      matches = location.hash.match(regexp);

      if (matches) {
        var selectorsArray = matches[1].split(',')
        var selector = {};

        selectorsArray.forEach(function(s){
          var kv = s.split('=');

          if (kv.length == 2) {
            switch(kv[0]) {
              case 'prefix':
                selector['prefix'] = decodeURIComponent(kv[1]);
                break;
              case 'exact':
                selector['exact'] = decodeURIComponent(kv[1]);
                break;
              case 'suffix':
                selector['suffix'] = decodeURIComponent(kv[1]);
                break;
            }
          }

        })

        return selector;
      }
    },

    showTextQuoteSelector: function(containerNode) {
      var selector = DO.U.getTextQuoteSelectorFromLocation(document.location);
      if (selector && selector.exact && selector.exact.length > 0) {
        //XXX: TODO: Copied from showAnnotation

        // refId = String(Math.abs(DO.U.hashCode(document.location.href)));
        var refId = document.location.hash.substring(1);
        var refLabel = DO.U.getReferenceLabel('oa:highlighting');

        containerNode = containerNode || document.body;

        var docRefType = '<sup class="ref-highlighting">' + refLabel + '</sup>';

        var options = {
          'do': true,
          'mode': '#selector'
        };

        DO.U.importTextQuoteSelector(containerNode, selector, refId, docRefType, options)
      }
    },

    importTextQuoteSelector: function(containerNode, selector, refId, docRefType, options) {
      var containerNodeTextContent = containerNode.textContent;
      //XXX: Seems better?
      // var containerNodeTextContent = DO.U.fragmentFromString(doc.getDocument(containerNode)).textContent.trim();


// console.log(containerNodeTextContent);
      options = options || {};

// console.log(selector)
      var prefix = selector.prefix || '';
      var exact = selector.exact || '';
      var suffix = selector.suffix || '';

      var phrase = util.escapeRegExp(prefix.toString() + exact.toString() + suffix.toString());
// console.log(phrase);

      var selectedParentNode;

      var textMatches = containerNodeTextContent.matchAll(new RegExp(phrase, 'g'));
// console.log(textMatches)

      textMatches.forEach(function(item) {
// console.log('phrase:')
// console.log(phrase)
// console.log(item)
        var selectorIndex = item.index;
// console.log('selectorIndex:')
// console.log(selectorIndex)
      // var selectorIndex = containerNodeTextContent.indexOf(prefix + exact + suffix);
// console.log(selectorIndex);
      // if (selectorIndex >= 0) {
        var exactStart = selectorIndex + prefix.length
        var exactEnd = selectorIndex + prefix.length + exact.length;
        var selection = { start: exactStart, end: exactEnd };
// console.log('selection:')
// console.log(selection)
        var ref = DO.U.getTextQuoteHTML(refId, exact, docRefType, options);
// console.log('containerNode:')
// console.log(containerNode)
        MediumEditor.selection.importSelection(selection, containerNode, document);

        //XXX: Review
        var selection = window.getSelection();
// console.log(selection)
        var r = selection.getRangeAt(0);
        selection.removeAllRanges();
        selection.addRange(r);
        r.collapse(true);
// console.log(r)
// console.log('r.commonAncestorContainer:')
// console.log(r.commonAncestorContainer)
        selectedParentNode = r.commonAncestorContainer.parentNode;
// console.log('selectedParentNode:')
// console.log(selectedParentNode)
        var selectedParentNodeValue = r.commonAncestorContainer.nodeValue;
// console.log(selectedParentNodeValue)

// console.log(selectedParentNodeValue.substr(0, r.startOffset) + ref + selectedParentNodeValue.substr(r.startOffset + exact.length))
        var selectionUpdated = DO.U.fragmentFromString(selectedParentNodeValue.substr(0, r.startOffset) + ref + selectedParentNodeValue.substr(r.startOffset + exact.length));
// console.log(selectionUpdated)

        //XXX: Review. This feels a bit dirty
        for(var i = 0; i < selectedParentNode.childNodes.length; i++) {
          var n = selectedParentNode.childNodes[i];
          if (n.nodeType === 3 && n.nodeValue === selectedParentNodeValue) {
            selectedParentNode.replaceChild(selectionUpdated, n);
          }
        }
// console.log('---')
      })

      return selectedParentNode;
    },

    initUser: function() {
      storage.getStorageProfile().then(user => {
        if (user && 'object' in user) {
          DO.C['User'] = user.object.describes;
        }
      })
    },

    setDocumentMode: function(mode) {
      if (DO.C.EditorAvailable) {
        if (DO.U.urlParam('author') == 'true' || DO.U.urlParam('social') == 'true' || DO.U.urlParam('review') == 'true') {
          if (DO.U.urlParam('social') == 'true') {
            mode = 'social';
          }
          else if (DO.U.urlParam('author') == 'true') {
            mode = 'author';
          }
          else if (DO.U.urlParam('review') == 'true') {
            mode = 'review';
          }
          var url = document.location.href;
          window.history.replaceState({}, null, url.substr(0, url.lastIndexOf('?')));
        }

        if (mode !== 'author') {
          var content = DO.U.selectArticleNode(document);
          content = DO.U.fragmentFromString(doc.domToString(content)).textContent.trim();
          if (content.length == 0) {
            mode = 'author';
          }
        }

        switch(mode || '') {
          case 'social': default:
            DO.U.Editor.enableEditor('social');
            break;
          case 'author':
            DO.U.Editor.enableEditor('author');
            break;
          case 'review':
            DO.U.Editor.enableEditor('review');
            break;
        }
      }
    },

    initDocumentActions: function() {
      document.addEventListener('click', function(e) {
        if (e.target.closest('[about="#document-menu"][typeof="schema:ActivateAction"], [href="#document-menu"][typeof="schema:ActivateAction"], [resource="#document-menu"][typeof="schema:ActivateAction"]')) {
          e.preventDefault();
          e.stopPropagation();

          if (document.body.classList.contains('on-document-menu')) {
            DO.U.hideDocumentMenu(e);
          }
          else {
            DO.U.showDocumentMenu(e);
          }
        }
      });

      var annotationRights = document.querySelectorAll('[about="#annotation-rights"][typeof="schema:ChooseAction"], [href="#annotation-rights"][typeof="schema:ChooseAction"], [resource="#annotation-rights"][typeof="schema:ChooseAction"]');
      for (var i = 0; i < annotationRights.length; i++){
        annotationRights[i].parentNode.replaceChild(DO.U.fragmentFromString('<select>' + DO.U.getLicenseOptionsHTML() + '</select>'), annotationRights[i]);
      }
    },

    showDocumentInfo: function() {
      document.documentElement.appendChild(DO.U.fragmentFromString('<menu id="document-menu" class="do"><button class="show" title="Open Menu"><i class="fa fa-bars"></i></button><header></header><div></div><footer><dl><dt>About</dt><dd id="about-dokieli"><img alt="" height="16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAn1BMVEUAAAAAjwAAkAAAjwAAjwAAjwAAjwAAjwAAkAAAdwAAjwAAjQAAcAAAjwAAjwAAiQAAjwAAjAAAjwAAjwAAjwAAjwAAkAAAjwAAjwAAjwAAjQAAjQAAhQAAhQAAkAAAkAAAkAAAjgAAjwAAiQAAhAAAkAAAjwAAjwAAkAAAjwAAjgAAjgAAjQAAjwAAjQAAjwAAkAAAjwAAjQAAiwAAkABp3EJyAAAANHRSTlMA+fH89enaabMF4iADxJ4SiSa+uXztyoNvQDcsDgvl3pRiXBcH1M+ppJlWUUpFMq6OdjwbMc1+ZgAABAhJREFUeNrt29nSmkAQBeAGZBMUxH3f993/vP+zJZVKVZKCRhibyc3/XVt6SimYPjPSt28Vmt5W/fu2T/9B9HIf7Tp+0RsgDC6DY6OLvzxJj8341DnsakgZUNUmo2XsORYYS6rOeugukhnyragiq56JIs5UEQ/FXKgidRTzompEKOhG1biioDFV44mCAqrGAQWtqRptA8VMqCpR6zpo9iy84VO1opWHPBZVb9QAzyQN/D1YNungJ+DMSYsbOFvSIwGjR3p0wGiQHkMw2qRHC4w76RGBcSA9NmAcSY8QjAdpYiFbTJoYyNYnTWrI1iFNusj2JE1sZBuQJtyE5pImc3Y21cRhZ1NNtsh2Ik127HCsSY8djjVpINuVhPnjVefobee2adXqu2S/6FyivABDEjQ9Lxo1pDlNd5wg24ikRK5ngKGhHhg1DSgZk4RrD6pa9LlRAnUBfWp6xCe+6EOvOT6yrmrigZaCZHPAp6b0gaiBFKvRd0/D1rr1OrvxDqiyoZmmPt9onib0t/VybyEXqdu0Cw16rUNVAfZFlzdjr5KOaoAUK6JsrgWGQapuBlIS4gy70gEmTrk1fuAgU40UxWXv6wvZAC2Dqfx0BfBK1z1H0aJ0WH7Ub4oG8JDlpBCgK1l5tSjHQSoAf0HVfMqxF+yqpzVk2ZGuAGdk8ijPHZlmpOCg0vh5cgE2JtN3qQSoU3lXpbKlLRegrzTpt+U2TNpKY2YiFiA0kS1Q6QccweZ/oinASm2B3RML0AGDNAU4qq3udmIXYVttD3YrFsBR24N1xG5EJpTeaiYWwILS5WRKBfChFsCSehpOwKi/yS0V4AsMWym3TWUFgMqIsRYL8AVOSDlaYgEitbZnDKll+UatchyJBSC1c3lDuQA2VHYAL3KneHpgLCjHSS7AHYyEciwh1g88wDB94rlyAVxwhsR7ygW4gRMTry8XwDdUDkXFgjVdD5wRsRaCAWJwPGI1Baval8Ie3Hqn8AjjhHbZr2DzrInumDTBGlCG8xy8QPY3MNLX4TiRP1q+BWs2pn9ECwu5+qTABc+80h++28UbTkjlTW3wrM6Ufrtu8d5J9Svg1Vch/RTcUYQdUHm+g1z1x2gSGyjGGVN5F7xjoTCjE0ndC3jJMzfCftmiciZ1lNGe3vCGufOWVMLIQHHehi3X1O8JJxR236SalUzninbu937BlwfV/I3k4KdGk2xm+MHuLa8Z0i9TC280qLRrF+8cw9RSjrOg8oIG8j2YgULsbGPomsgR0x9nsOzkOLh+kZr1owZGbfC2JJl78fIV0Wei/gxZDl85XWVtt++cxhuSEQ6bdfzLjlvM86PbaD4vQUjSglV8385My7CdXtO9+ZSyrLcf7nBN376V8gMpRztyq6RXYQAAAABJRU5ErkJggg==" width="16" /><a href="https://dokie.li/" target="_blank">dokieli</a> is an <i class="fa fa-github"></i> <a href="https://github.com/linkeddata/dokieli" target="_blank">open source</a> project. There is <i class="fa fa-flask"></i> <a href="https://dokie.li/docs" target="_blank">documentation</a> and public <i class="fa fa-comments-o"></i> <a href="https://gitter.im/linkeddata/dokieli" target="_blank">chat</a> available. Made with fun.</dd></dl></footer></menu>'));
      document.querySelector('#document-menu').addEventListener('click', function(e) {
        var button = e.target.closest('button');
        if(button){
          if (button.classList.contains('show')) {
            DO.U.showDocumentMenu(e);
          }
          else if (button.classList.contains('hide')) {
            DO.U.hideDocumentMenu(e);
          }
        }
      });
    },

    showDocumentMenu: function showDocumentMenu (e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      DO.U.getResourceInfo().then(function(resourceInfo){
        var body = document.body;
        var dMenu = document.querySelector('#document-menu.do');

        if(dMenu) {
          var dMenuButton = dMenu.querySelector('button');
          var dHead = dMenu.querySelector('header');
          var dInfo = dMenu.querySelector('div');

          dMenuButton.classList.remove('show');
          dMenuButton.classList.add('hide');
          dMenuButton.setAttribute('title', 'Hide Menu');
          dMenuButton.innerHTML = '<i class="fa fa-minus"></i>';
          dMenu.classList.add('on');
          body.classList.add('on-document-menu');

          auth.showUserSigninSignout(dHead);
          DO.U.showDocumentDo(dInfo);
          DO.U.showEmbedData(dInfo);
          storage.showStorage(dInfo);
          DO.U.showViews(dInfo);
          DO.U.showDocumentMetadata(dInfo);
          if(!body.classList.contains('on-slideshow')) {
            DO.U.showDocumentItems();
          }

          document.addEventListener('click', DO.U.eventLeaveDocumentMenu);
        }
        else {
          DO.U.showDocumentInfo();
          DO.U.showDocumentMenu();
        }
      });
    },

    hideDocumentMenu: function(e) {
      document.removeEventListener('click', DO.U.eventLeaveDocumentMenu);

      var body = document.body;
      var dMenu = document.querySelector('#document-menu.do');
      var dMenuButton = dMenu.querySelector('button');

      dMenu.classList.remove('on');
      var sections = dMenu.querySelectorAll('section');
      for (var i = 0; i < sections.length; i++) {
        if(sections[i].id != 'user-info' && !sections[i].querySelector('button.signin-user')) {
          sections[i].parentNode.removeChild(sections[i]);
        }
      };
      var buttonSigninUser = dMenu.querySelector('button.signin-user');
      if(buttonSigninUser) {
        dMenu.querySelector('button.signin-user').disabled = false;
      }
      body.classList.remove('on-document-menu');
      dMenuButton.classList.remove('hide');
      dMenuButton.classList.add('show');
      dMenuButton.setAttribute('title', 'Open Menu');
      dMenuButton.innerHTML = '<i class="fa fa-bars"></i>';

      var removeElementsList = ['document-items', 'embed-data-entry', 'create-new-document', 'open-document', 'source-view', 'save-as-document', 'user-identity-input', 'resource-browser', 'share-resource', 'reply-to-resource', 'memento-document', 'graph-view'];
      removeElementsList.forEach(function(id) {
        var element = document.getElementById(id);
        if(element) {
          element.parentNode.removeChild(element);
        }
      });
    },

    setPolyfill: function() {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
      }

      if (!Element.prototype.closest) {
        Element.prototype.closest = function (selector) {
          var el = this;
          while (el) {
            if (el.matches(selector)) {
              return el;
            }
            el = el.parentElement;
          }
        };
      }


      //From https://web.archive.org/web/20180407184826/http://cwestblog.com/2013/02/26/javascript-string-prototype-matchall/
      if (!String.prototype.matchAll) {
        String.prototype.matchAll = function(regexp) {
          var matches = [];
          this.replace(regexp, function() {
            var arr = ([]).slice.call(arguments, 0);
            var extras = arr.splice(-2);
            arr.index = extras[0];
            arr.input = extras[1];
            matches.push(arr);
          });
          return matches.length ? matches : null;
        };
      }
    },

    showXHRProgressHTML: function(http, options) {
      if ('progress' in options) {
        http.upload.onprogress = function(e) {
          if (e.lengthComputable) {
            options.progress.value = (e.loaded / e.total) * 100;
            options.progress.textContent = options.progress.value; // Fallback for unsupported browsers.
          }
        };
      }
    },

    setDocRefType: function() {
      var link = document.querySelector('head link[rel="stylesheet"][title]');
      if (link) {
        DO.C.DocRefType = link.getAttribute('title');
      }
      if (Object.keys(DO.C.RefType).indexOf(DO.C.DocRefType) == -1) {
        DO.C.DocRefType = 'LNCS';
      }
    },

    getCurrentLinkStylesheet: function() {
      return document.querySelector('head link[rel="stylesheet"][title]:not([href$="do.css"]):not([disabled])');
    },

    showViews: function(node) {
      if(document.querySelector('#document-views')) { return; }

      var stylesheets = document.querySelectorAll('head link[rel~="stylesheet"][title]:not([href$="do.css"])');

      var s = '<section id="document-views" class="do"><h2>Views</h2><i class="fa fa-magic"></i><ul>';
      if (DO.C.GraphViewerAvailable) {
        s += '<li><button class="resource-visualise" title="Change to graph view">Graph</button></li>';
      }
      s += '<li><button title="Change to native device/browser view">Native</button></li>';

      if (stylesheets.length > 0) {
        for (var i = 0; i < stylesheets.length; i++) {
          var stylesheet = stylesheets[i];
          var view = stylesheet.getAttribute('title');
          if(stylesheet.closest('[rel~="alternate"]')) {
            s += '<li><button title="Change to ‘' + view + '’ view">' + view + '</button></li>';
          }
          else {
            s += '<li><button disabled="disabled">' + view + '</button></li>';
          }
        }
      }

      s += '</ul></section>';
      node.insertAdjacentHTML('beforeend', s);

      var viewButtons = document.querySelectorAll('#document-views.do button:not([class~="resource-visualise"])');
      for (var i = 0; i < viewButtons.length; i++) {
        viewButtons[i].removeEventListener('click', DO.U.initCurrentStylesheet);
        viewButtons[i].addEventListener('click', DO.U.initCurrentStylesheet);
      }

      if(DO.C.GraphViewerAvailable) {
        document.querySelector('#document-views.do').addEventListener('click', function(e){
          if (e.target.closest('.resource-visualise')) {
            if(document.querySelector('#graph-view')) { return; }

            if (e) {
              e.target.disabled = true;
            }

            document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="graph-view" class="do on">' + DO.C.Button.Close + '<h2>Graph view</h2></aside>'));

            var graphView = document.getElementById('graph-view');
            graphView.addEventListener('click', function(e) {
              if (e.target.closest('button.close')) {
                var rv = document.querySelector('#document-views .resource-visualise');
                if (rv) {
                  rv.disabled = false;
                }
              }
            });

            var optionsNormalisation = DO.C.DOMNormalisation;
            delete optionsNormalisation['skipNodeWithClass'];

            DO.U.showVisualisationGraph(document.location.href, doc.getDocument(null, optionsNormalisation), '#graph-view');
          }
        });
      }
    },

    initCurrentStylesheet: function(e) {
      var currentStylesheet = DO.U.getCurrentLinkStylesheet();
      currentStylesheet = (currentStylesheet) ? currentStylesheet.getAttribute('title') : '';
      var selected = (e && e.target) ? e.target.textContent.toLowerCase() : currentStylesheet.toLowerCase();
      var stylesheets = document.querySelectorAll('head link[rel~="stylesheet"][title]:not([href$="do.css"])');

      for (var j = 0; j < stylesheets.length; j++) {
        (function(stylesheet) {
          if (stylesheet.getAttribute('title').toLowerCase() != selected) {
              stylesheet.disabled = true;
              stylesheet.setAttribute('rel', 'stylesheet alternate');
          }
        })(stylesheets[j]);
      };
      for (var j = 0; j < stylesheets.length; j++) {
        (function(stylesheet) {
          if (stylesheet.getAttribute('title').toLowerCase() == selected) {
              stylesheet.setAttribute('rel', 'stylesheet');
              stylesheet.disabled = false;
          }
        })(stylesheets[j]);
      }

      var bd = document.querySelectorAll('#document-views.do button');
      for(var j = 0; j < bd.length; j++) {
        bd[j].disabled = (e && e.target && (e.target.textContent == bd[j].textContent)) ? true : false;
      }

      DO.U.showRefs();

      if (selected == 'shower') {
        var slides = document.querySelectorAll('.slide');
        for(var j = 0; j < slides.length; j++) {
          slides[j].classList.add('do');
        }
        document.body.classList.add('on-slideshow', 'list');
        document.querySelector('head').insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=792, user-scalable=no" />');


        var body = document.body;
        var dMenu = document.querySelector('#document-menu.do');

        if(dMenu) {
          var dMenuButton = dMenu.querySelector('button');
          var dHead = dMenu.querySelector('header');
          var dInfo = dMenu.querySelector('div');

          dMenuButton.classList.remove('show');
          dMenuButton.classList.add('hide');
          dMenuButton.setAttribute('title', 'Open Menu');
          dMenuButton.innerHTML = '<i class="fa fa-minus"></i>';
          dMenu.classList.remove('on');
          body.classList.remove('on-document-menu');

          var dMenuSections = dMenu.querySelectorAll('section');
          for (var j = 0; j < dMenuSections.length; j++) {
            dMenuSections[j].parentNode.removeChild(dMSections[j]);
          }
        }

        var toc = document.getElementById('table-of-contents');
        toc = (toc) ? toc.parentNode.removeChild(toc) : false;

        storage.hideStorage();

        shower.initRun();
      }
      if (currentStylesheet.toLowerCase() == 'shower') {
        var slides = document.querySelectorAll('.slide');
        for (var c = 0; c < slides.length; c++){
          slides[c].classList.remove('do');
        }
        document.body.classList.remove('on-slideshow', 'list', 'full');
        document.body.removeAttribute('style');
        var mV = document.querySelector('head meta[name="viewport"][content="width=792, user-scalable=no"]');
        mV = (mV) ? mV.parentNode.removeChild(mV) : false;

        history.pushState(null, null, window.location.pathname);

        shower.removeEvents();
      }
    },

    showEmbedData: function(node) {
      if(document.querySelector('#embed-data-in-html')) { return; }

      node.insertAdjacentHTML('beforeend', '<section id="embed-data-in-html" class="do"><h2>Data</h2><ul><li><button class="embed-data-meta" title="Embed structured data (Turtle, JSON-LD, TriG)"><i class="fa fa-table fa-2x"></i>Embed Data</button></li></ul></section>');

      var eventEmbedData = function(e) {
        e.target.setAttribute('disabled', 'disabled');
        var scriptCurrent = document.querySelectorAll('head script[id^="meta-"]');

        var scriptType = {
          'meta-turtle': {
            scriptStart: '<script id="meta-turtle" title="Turtle" type="text/turtle">',
            cdataStart: '# ' + DO.C.CDATAStart + '\n',
            cdataEnd: '\n# ' + DO.C.CDATAEnd,
            scriptEnd: '</script>'
          },
          'meta-json-ld': {
            scriptStart: '<script id="meta-json-ld" title="JSON-LD" type="application/ld+json">',
            cdataStart: DO.C.CDATAStart + '\n',
            cdataEnd: '\n' + DO.C.CDATAEnd,
            scriptEnd: '</script>'
          },
          'meta-trig': {
            scriptStart: '<script id="meta-trig" title="TriG" type="application/trig">',
            cdataStart: '# ' + DO.C.CDATAStart + '\n',
            cdataEnd: '\n# ' + DO.C.CDATAEnd,
            scriptEnd: '</script>'
          }
        }

        var scriptCurrentData = {};
        if (scriptCurrent.length > 0) {
          for(var i = 0; i < scriptCurrent.length; i++) {
            var v = scriptCurrent[i];
            var id = v.id;
            scriptCurrentData[id] = v.innerHTML.split(/\r\n|\r|\n/);
            scriptCurrentData[id].shift();
            scriptCurrentData[id].pop();
            scriptCurrentData[id] = {
              'type': v.getAttribute('type') || '',
              'title': v.getAttribute('title') || '',
              'content' : scriptCurrentData[id].join('\n')
            };
          }
        }

        var embedMenu = '<aside id="embed-data-entry" class="do on tabs">' + DO.C.Button.Close + '\n\
        <h2>Embed Data</h2>\n\
        <nav><ul><li class="selected"><a href="#embed-data-turtle">Turtle</a></li><li><a href="#embed-data-json-ld">JSON-LD</a></li><li><a href="#embed-data-trig">TriG</a></li></ul></nav>\n\
        <div id="embed-data-turtle" class="selected"><textarea placeholder="Enter data in Turtle" name="meta-turtle" cols="80" rows="24">' + ((scriptCurrentData['meta-turtle']) ? scriptCurrentData['meta-turtle'].content : '') + '</textarea><button class="save">Save</button></div>\n\
        <div id="embed-data-json-ld"><textarea placeholder="Enter data in JSON-LD" name="meta-json-ld" cols="80" rows="24">' + ((scriptCurrentData['meta-json-ld']) ? scriptCurrentData['meta-json-ld'].content : '') + '</textarea><button class="save">Save</button></div>\n\
        <div id="embed-data-trig"><textarea placeholder="Enter data in TriG" name="meta-trig" cols="80" rows="24">' + ((scriptCurrentData['meta-trig']) ? scriptCurrentData['meta-trig'].content : '') + '</textarea><button class="save">Save</button></div>\n\
        </aside>';

        document.documentElement.appendChild(DO.U.fragmentFromString(embedMenu));
        document.querySelector('#embed-data-turtle textarea').focus();
        var a = document.querySelectorAll('#embed-data-entry nav a');
        for(var i = 0; i < a.length; i++) {
          a[i].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var li = e.target.parentNode;
            if(!li.classList.contains('selected')) {
              document.querySelector('#embed-data-entry nav li.selected').classList.remove('selected');
              li.classList.add('selected');
              document.querySelector('#embed-data-entry > div.selected').classList.remove('selected');
              var d = document.querySelector('#embed-data-entry > div' + e.target.hash);
              d.classList.add('selected');
              d.querySelector('textarea').focus();
            }
          });
        }

        document.querySelector('#embed-data-entry button.close').addEventListener('click', function(e) {
          document.querySelector('#embed-data-in-html .embed-data-meta').removeAttribute('disabled');
        });

        var buttonSave = document.querySelectorAll('#embed-data-entry button.save');
        for (var i = 0; i < buttonSave.length; i++) {
          buttonSave[i].addEventListener('click', function(e) {
            var textarea = e.target.parentNode.querySelector('textarea');
            var name = textarea.getAttribute('name');
            var scriptEntry = textarea.value;
            var script = document.getElementById(name);

            if (scriptEntry.length > 0) {
              //If there was a script already
              if (script) {
                var scriptContent = scriptType[name].cdataStart + scriptEntry + scriptType[name].cdataEnd;
                script.innerHTML = scriptContent;
              }
              else {
                var scriptContent = '  ' + scriptType[name].scriptStart + scriptType[name].cdataStart + scriptEntry + scriptType[name].cdataEnd + scriptType[name].scriptEnd;
                document.querySelector('head').insertAdjacentHTML('beforeend', scriptContent);
              }
            }
            else {
              //Remove if no longer used
              script.parentNode.removeChild(script);
            }

            var ede = document.getElementById('embed-data-entry');
            ede.parentNode.removeChild(ede);
            document.querySelector('#embed-data-in-html .embed-data-meta').removeAttribute('disabled');
          });
        };
      };

      var edih = document.querySelector('#embed-data-in-html button');
      edih.removeEventListener('click', eventEmbedData);
      edih.addEventListener('click', eventEmbedData);
    },

    htmlEntities: function(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },

    showDocumentMetadata: function(node) {
      if(document.querySelector('#document-metadata')) { return; }

      var content = DO.U.selectArticleNode(document);
      var count = DO.U.contentCount(content);
      var authors = [], contributors = [], editors = [];

      var data = doc.getDocument();
      var subjectURI = window.location.origin + window.location.pathname;
      var options = {'contentType': 'text/html', 'subjectURI': subjectURI };

      graph.getGraphFromData(data, options).then(
        function(i){
          var g = SimpleRDF(DO.C.Vocab, options['subjectURI'], i, ld.store).child(options['subjectURI']);

          if(g.schemaeditor._array.length > 0) {
            g.schemaeditor.forEach(function(s){
              var label = DO.U.getResourceLabel(g.child(s));
              if(typeof label !== 'undefined'){
                editors.push('<li>' + label + '</li>');
              }
            });
            if(editors.length > 0){
              editors = '<tr class="people"><th>Editors</th><td><ul class="editors">' + editors.join('') + '</ul></td></tr>';
            }
          }

          if(g.schemaauthor._array.length > 0) {
            g.schemaauthor.forEach(function(s){
              var label = DO.U.getResourceLabel(g.child(s));
              if(typeof label !== 'undefined'){
                authors.push('<li>' + label + '</li>');
              }
            });
            if(authors.length > 0){
              authors = '<tr class="people"><th>Authors</th><td><ul class="authors">' + authors.join('') + '</ul></td></tr>';
            }
          }

          if(g.schemacontributor._array.length > 0) {
            g.schemacontributor.forEach(function(s){
              var label = DO.U.getResourceLabel(g.child(s));
              if(typeof label !== 'undefined'){
                contributors.push('<li>' + label + '</li>');
              }
            });
            if(contributors.length > 0){
              contributors = '<tr class="people"><th>Contributors</th><td><ul class="contributors">' + contributors.join('') + '</ul></td></tr>';
            }
          }

          return authors + contributors;
        }).then(
        function(people){
          var s = '<section id="document-metadata" class="do"><table>\n\
            <caption>Document Metadata</caption>\n\
            <tbody>\n\
              ' + people + '\n\
              <tr><th>Reading time</th><td>' + count.readingTime + ' minutes</td></tr>\n\
              <tr><th>Characters</th><td>' + count.chars + '</td></tr>\n\
              <tr><th>Words</th><td>' + count.words + '</td></tr>\n\
              <tr><th>Lines</th><td>' + count.lines + '</td></tr>\n\
              <tr><th>A4 Pages</th><td>' + count.pages.A4 + '</td></tr>\n\
              <tr><th>US Letter</th><td>' + count.pages.USLetter + '</td></tr>\n\
              <tr><th>Bytes</th><td>' + count.bytes + '</td></tr>\n\
            </tbody>\n\
          </table></section>';

          node.insertAdjacentHTML('beforeend', s);
        });
    },

    contentCount: function contentCount (c) {
      var content = DO.U.fragmentFromString(doc.domToString(c)).textContent.trim();
      var contentCount = { readingTime:1, words:0, chars:0, lines:0, pages:{A4:1, USLetter:1}, bytes:0 };
      if (content.length > 0) {
        var lineHeight = c.ownerDocument.defaultView.getComputedStyle(c, null)["line-height"];
        var linesCount = Math.ceil(c.clientHeight / parseInt(lineHeight));
        contentCount = {
          readingTime: Math.ceil(content.split(' ').length / 200),
          words: content.match(/\S+/g).length,
          chars: content.length,
          lines: linesCount,
          pages: { A4: Math.ceil(linesCount / 47), USLetter: Math.ceil(linesCount / 63) },
          bytes: encodeURI(document.documentElement.outerHTML).split(/%..|./).length - 1
        };
      }
      return contentCount;
    },

    showDocumentItems: function() {
      var documentItems = document.getElementById('document-items');

      if(documentItems) { return; }

      var sections = document.querySelectorAll('h1 ~ div > section:not([class~="slide"]):not([id^=table-of])');
      if (sections.length > 0) {
        DO.U.showTableOfStuff(documentItems);

        DO.U.showTableOfContents(documentItems, sections)

        if(DO.C.SortableList && DO.C.EditorEnabled) {
          DO.U.sortToC();
        }
      }
    },

    showTableOfStuff: function(node) {
      if (!node) {
        node = document.getElementById('document-items');
        if (!node) {
          document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="document-items" class="do on">' + DO.C.Button.Close + '</aside>'));
          node = document.getElementById('document-items');
        }
      }

      var disabledInput = '', s = [];
      if (!DO.C.EditorEnabled) {
        disabledInput = ' disabled="disabled"';
      }

      var tableList = [{'content': 'Contents'}, {'figure': 'Figures'}, {'table': 'Tables'}, {'abbr': 'Abbreviations'}];
      tableList.forEach(function(i) {
        var key = Object.keys(i)[0];
        var value = i[key];
        var checkedInput = '';

        var tL = document.getElementById('table-of-'+ key +'s');

        if(tL) {
          checkedInput = ' checked="checked"';

          DO.U.buildTableOfStuff(key);
        }

        s.push('<li><input id="t-o-' + key +'" type="checkbox"' + disabledInput + checkedInput + '/><label for="t-o-' + key + '">' + value + '</label></li>');
      });

      if (s.length > 0) {
        node.insertAdjacentHTML('beforeend', '<section id="table-of-stuff" class="do"><h2>Table of Stuff</h2><ul>' + s.join('') + '</ul></section>');

        if(DO.C.EditorEnabled) {
          document.getElementById('table-of-stuff').addEventListener('click', function(e){
            if (e.target.closest('input')) {
              var id = e.target.id;
              var listType = id.slice(4, id.length);
              if(!e.target.getAttribute('checked')) {
                DO.U.buildTableOfStuff(listType);
                e.target.setAttribute('checked', 'checked');
              }
              else {
                var tol = document.getElementById('table-of-'+listType+'s');
                if(tol) {
                  tol.parentNode.removeChild(tol);
                }
                e.target.removeAttribute('checked');
              }
            }
          });
        }
      }
    },

    showTableOfContents: function(node, sections, options) {
      options = options || {}
      var sortable = (DO.C.SortableList && DO.C.EditorEnabled) ? ' sortable' : '';

      if (!node) {
        node = document.getElementById('document-items');
        if (!node) {
          document.body.insertAdjacentHTML('beforeend', '<aside id="document-items" class="do on">' + DO.C.Button.Close + '</aside>');
          node = document.getElementById('document-items');
        }
      }

      var toc = '<section id="table-of-contents-i" class="do"' + sortable + '><h2>Table of Contents</h2><ol class="toc' + sortable + '">';
      toc += DO.U.getListOfSections(sections, DO.C.SortableList);
      toc += '</ol></section>';

      node.insertAdjacentHTML('beforeend', toc);
    },


    sortToC: function() {
    },

    getListOfSections: function(sections, sortable) {
      var s = '', attributeClass = '';
      if (sortable == true) { attributeClass = ' class="sortable"'; }

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        if(section.id) {
          var heading = section.querySelector('h1, h2, h3, h4, h5, h6, header h1, header h2, header h3, header h4, header h5, header h6') || { 'textContent': section.id };
          if (heading) {
            s += '<li data-id="' + section.id +'"><a href="#' + section.id + '">' + heading.textContent + '</a>';
            var subsections = section.parentNode.querySelectorAll('[id="' + section.id + '"] > div > section[rel*="hasPart"]:not([class~="slide"]), [id="' + section.id + '"] > section[rel*="hasPart"]:not([class~="slide"])');

            if (subsections.length > 0) {
              s += '<ol'+ attributeClass +'>';
              s += DO.U.getListOfSections(subsections, sortable);
              s += '</ol>';
            }
            s += '</li>';
          }
        }
      }

      return s;
    },

    buildTableOfStuff: function(listType) {
      var s = elementId = elementTitle = titleType = tableHeading = '';
      var tableList = [];

      tableList = (listType) ? [listType] : ['content', 'figure', 'table', 'abbr'];

      tableList.forEach(function(element) {
        var e = document.querySelectorAll('section:not([class~="do"]) ' + element);
        if (element == 'content' || e.length > 0) {
          switch(element) {
            case 'figure':
              titleType = 'figcaption';
              tableHeading = 'Table of Figures';
              break;
            case 'table':
              titleType = 'caption';
              tableHeading = 'Table of Tables';
              break;
            case 'abbr':
              titleType = 'title';
              tableHeading = 'Table of Abbreviations';
              break;
            case 'content': default:
              titleType = '';
              tableHeading = 'Table of Contents';
              break;
          }

          elementId = 'table-of-' + element + 's';

          //Refresh
          var tId = document.getElementById(elementId);
          if(tId) { tId.parentNode.removeChild(tId); }

          if (element == 'abbr') {
            s += '<section id="' + elementId + '">';
          }
          else {
            s += '<nav id="' + elementId + '">';
          }
          s += '<h2>' + tableHeading + '</h2>';
          s += '<div><ol class="toc">';

          if (element == 'content') {
            s += DO.U.getListOfSections(document.querySelectorAll('h1 ~ div > section:not([class~="slide"])'), false);
          }
          else {
            if (element == 'abbr') {
              if (e.length > 0) {
                e = [].slice.call(e);
                e.sort(function(a, b) {
                  return a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase());
                });
              }

              for (var i = 0; i < e.length; i++) {
                s += '<dt>' + e[i].textContent + '</dt>';
                s += '<dd>' + e[i].getAttribute(titleType) + '</dd>';
              };
            }
            else {
              for (var i = 0; i < e.length; i++) {
                var title = e[i].querySelector(titleType);
                if(title) {
                  if(e[i].id){
                    s += '<li><a href="#' + e[i].id +'">' + title.textContent +'</a></li>';
                  }
                  else {
                    s += '<li>' + title.textContent +'</li>';
                  }
                }
              };
            }
          }

          if (element == 'abbr'){
            s += '</dl></div>';
            s += '</section>';
          } else {
            s += '</ol></div>';
            s += '</nav>';
          }
        }
      });

      DO.U.insertDocumentLevelHTML(document, s, { 'id': elementId });
    },

    setDocumentStatus: function(rootNode, options) {
      rootNode = rootNode || document;
      options = options || {};

      var s = DO.U.getDocumentStatusHTML(rootNode, options);

      rootNode = DO.U.insertDocumentLevelHTML(rootNode, s, options);

      return rootNode;
    },

    getDocumentStatusHTML: function(rootNode, options) {
      rootNode = rootNode || document;
      options = options || {};
      options['mode'] = ('mode' in options) ? options.mode : '';
      options['id'] = ('id' in options) ? options.id : 'document-status';
      var subjectURI = ('subjectURI' in options) ? ' about="' + options.subjectURI + '"' : '';
      var typeLabel = '', typeOf = '';

      switch(options.type) {
        default:
          definitionTitle = 'Document Status';
          break;
        case 'ldp:ImmutableResource':
          definitionTitle = 'Resource State';
          typeLabel = 'Immutable';
          typeOf = ' typeof="' + options.type + '"';
          break;
      }

      var id = ' id="' + options.id + '"';
      var c = ('class' in options && options.class.length > 0) ? ' class="' + options.class + '"' : '';
      // var datetime = ('datetime' in options) ? options.datetime : util.getDateTimeISO();

      var dd = '<dd><span' + subjectURI + typeOf + '>' + typeLabel + '</span></dd>';

      var s = '';
      var dl = rootNode.querySelector('#' + options.id);

      //FIXME: mode should be an array of operations.

      //TODO: s/update/append
      switch (options.mode) {
        case 'create': default:
          s = '<dl'+c+id+'><dt>' + definitionTitle + '</dt>' + dd + '</dl>';
          break;

        case 'update':
          if(dl) {
            var clone = dl.cloneNode(true);
            dl.parentNode.removeChild(dl);
            clone.insertAdjacentHTML('beforeend', dd);
            s = clone.outerHTML;
          }
          else  {
            s = '<dl'+c+id+'><dt>' + definitionTitle + '</dt>' + dd + '</dl>';
          }
          break;

        case 'delete':
          if(dl) {
            var clone = dl.cloneNode(true);
            dl.parentNode.removeChild(dl);

            var t = clone.querySelector('[typeof="' + options.type + '"]');
            if (t) {
              t.closest('dl').removeChild(t.parentNode);
            }

            var cloneDD = clone.querySelectorAll('#' + options.id + ' dd');
            if (cloneDD.length > 0) {
              s = clone.outerHTML;
            }
          }
          break;
      }

// console.log(s);
      return s;
    },

    insertDocumentLevelHTML: function(rootNode, h, options) {
      rootNode = rootNode || document;
      options = options || {};

      options['id'] = ('id' in options) ? options.id : DO.C.DocumentItems[DO.C.DocumentItems.length-1];

      var item = DO.C.DocumentItems.indexOf(options.id);

      var article = DO.U.selectArticleNode(rootNode);

      h = '\n\
' + h;

      if(item > -1) {
        for(var i = item; i >= 0; i--) {
          var node = rootNode.querySelector('#' + DO.C.DocumentItems[i]);

          if (node) {
            node.insertAdjacentHTML('afterend', h);
            break;
          }
          else if (i == 0) {
            var a = article.querySelector('h1');

            if (a) {
              a.insertAdjacentHTML('afterend', h);
            }
            else {
              article.insertAdjacentHTML('afterbegin', h);
            }
            break;
          }
        }
      }
      else {
        article.insertAdjacentHTML('afterbegin', h);
      }

      return rootNode;
    },


    selectArticleNode: function(node) {
      var selectors = [
        'main > article',
        'main',
        'body'
      ];

      var x = node.querySelectorAll(selectors.join(','));
      return x[x.length - 1];
    },

    buttonClose: function() {
      document.addEventListener('click', function(e) {
        var button = e.target.closest('button.close')
        if (button) {
          var parent = button.parentNode;
          parent.parentNode.removeChild(parent);
        }
      });
    },

    eventEscapeDocumentMenu: function(e) {
      if (e.keyCode == 27) { // Escape
        DO.U.hideDocumentMenu(e);
      }
    },

    eventLeaveDocumentMenu: function(e) {
      if (!e.target.closest('.do.on')) {
        DO.U.hideDocumentMenu(e);
      }
    },

    updateDocumentTitle: function(e) {
      if (!e.target.closest('h1')) {
        var h1 = document.querySelector('h1');
        if (h1) {
          document.title = h1.textContent.trim();
        }
      }
    },

    utf8Tob64: function(s) {
      return window.btoa(encodeURIComponent(s));
    },

    b64Toutf8: function(s) {
      return unescape(decodeURIComponent(window.atob(s)));
    },

    getSelectorSign: function(node) {
      if(!node) {
        return DO.C.SelectorSign["*"];
      }

      if (typeof node === 'object') {
        var nodeName = node.nodeName.toLowerCase();
        var nodeId = '';

        if(node.id) {
          switch(nodeName) {
            default: break;
            case 'section': case 'dl':
              nodeId = '#' + node.id;
              break;
          }
        }

        return DO.C.SelectorSign[nodeName + nodeId] || DO.C.SelectorSign[nodeName] || DO.C.SelectorSign["*"];
      }

      return DO.C.SelectorSign["*"];
    },

    showFragment: function(selector) {
      var ids = (selector) ? document.querySelectorAll(selector) : document.querySelectorAll('main *[id]:not(input):not(textarea):not(select):not(#content)');

      for(var i = 0; i < ids.length; i++){
        ids[i].addEventListener('mouseenter', function(e){
          var fragment = document.querySelector('*[id="' + e.target.id + '"] > .do.fragment');
          if (!fragment && e.target.parentNode.nodeName.toLowerCase() != 'aside'){
            sign = DO.U.getSelectorSign(e.target);

            e.target.insertAdjacentHTML('afterbegin', '<span class="do fragment"><a href="#' + e.target.id + '">' + sign + '</a></span>');
            fragment = document.querySelector('[id="' + e.target.id + '"] > .do.fragment');
            var fragmentClientWidth = fragment.clientWidth;

            var fragmentOffsetLeft = DO.U.getOffset(e.target).left;
            var bodyOffsetLeft = DO.U.getOffset(document.body).left;

            var offsetLeft = 0;
            if ((fragmentOffsetLeft - bodyOffsetLeft) > 200) {
              offsetLeft = e.target.offsetLeft;
            }

            fragment.style.top = Math.ceil(e.target.offsetTop) + 'px';
            fragment.style.left = (offsetLeft - fragmentClientWidth) + 'px';
            fragment.style.height = e.target.clientHeight + 'px';
            fragment.style.width = (fragmentClientWidth - 10) + 'px';
          }
        });

        ids[i].addEventListener('mouseleave', function(e){
          var fragment = document.querySelector('[id="' + e.target.id + '"] > .do.fragment');
          fragment.parentNode.removeChild(fragment);
        });
      }
    },

    showRobustLinks: function() {
      document.querySelectorAll('[data-versionurl], [data-originalurl]').forEach(function(i){
        if (i.nextElementSibling && i.nextElementSibling.classList.contains('do') && i.nextElementSibling.classList.contains('robustlinks')) {
          return;
        }

        var href = i.getAttribute('href');

        var originalurl = i.getAttribute('data-originalurl');
        originalurl = (originalurl) ? originalurl.trim() : undefined;
        originalurl = (originalurl) ? '<dt>Original</dt><dd><a href="' + originalurl + '" target="_blank">' + originalurl + '</a></dd>' : '';

        var versionurl = i.getAttribute('data-versionurl');
        verionurl = (versionurl) ? versionurl.trim() : undefined;
        var versiondate = i.getAttribute('data-versiondate');
        var nearlinkdateurl = '';
        if (versiondate) {
          versiondate = versiondate.trim();
          versiondateNumeric = versiondate.replace(/\D/g, '');
          nearlinkdateurl = 'http://timetravel.mementoweb.org/memento/' + versiondateNumeric + '/' + href;
          nearlinkdateurl = '<dt>Near Link Date</dt><dd><a href="' + nearlinkdateurl + '" target="_blank">' + versiondate + '</a></dd>'
        }
        else if (versionurl) {
          versiondate = versionurl;
        }

        versionurl = (versionurl) ? '<dt>Version</dt><dd><a href="' + versionurl + '" target="_blank">' + versiondate + '</a></dd>' : '';

        i.insertAdjacentHTML('afterend', '<span class="do robustlinks"><button title="Robust Links">🔗<span></span></button><dl>' + originalurl + versionurl + nearlinkdateurl + '</dl></span>');
      });

      document.querySelectorAll('.do.robustlinks').forEach(function(i){
        i.addEventListener('mouseenter', function(e){
          e.target.classList.add('on');
        });
        i.addEventListener('mouseleave', function(e){
          e.target.classList.remove('on');
        });
      });
    },

    getOffset: function(el) {
      var box = el.getBoundingClientRect();

      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
      }
    },

    forceTrailingSlash: function(aString) {
      if (aString.slice(-1) == "/") return aString;
      return aString + "/";
    },

    getUrlPath: function(aString) {
      return aString.split("/");
    },

    exportAsHTML: function() {
      var data = doc.getDocument();
      //XXX: Encodes strings as UTF-8. Consider storing bytes instead?
      var blob = new Blob([data], {type:'text/html;charset=utf-8'});
      var pattern = /[^\w]+/ig;
      var h1 = document.querySelector('h1');
      var title = (h1) ? h1.textContent.toLowerCase().replace(pattern, '-') : "index";
      var timestamp = util.getDateTimeISO().replace(pattern, '') || "now";

      var fileName = title + '.' + timestamp + '.html';

      var a = document.createElement("a");
      a.download = fileName;

      a.href = window.URL.createObjectURL(blob);
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },

    snapshotAtEndpoint: function snapshotAtEndpoint (e, iri, endpoint, noteData, options = {}) {
      iri = iri || window.location.origin + window.location.pathname;
      endpoint = endpoint || 'https://pragma.archivelab.org';

      if(!('contentType' in options)){
        options['contentType'] = 'application/json';
      }

      noteData = noteData || {
        "url": iri,
        "annotation": {
          "@context": "http://www.w3.org/ns/anno.jsonld",
          "@type": "Annotation",
          "motivation": "linking",
          "target": iri,
          "rights": "https://creativecommons.org/publicdomain/zero/1.0/"
        }
      };

      if (DO.C.User.IRI) {
        noteData.annotation['creator'] = {};
        noteData.annotation.creator["@id"] = DO.C.User.IRI;
      }
      if (DO.C.User.Name) {
        noteData.annotation.creator["http://schema.org/name"] = DO.C.User.Name;
      }
      if (DO.C.User.Image) {
        noteData.annotation.creator["http://schema.org/image"] = DO.C.User.Image;
      }
      if (DO.C.User.URL) {
        noteData.annotation.creator["http://schema.org/url"] = DO.C.User.URL;
      }

      // if(note.length > 0) {
      //   noteData.annotation["message"] = note;
      // }

      var button = e.target.closest('button');

      if (typeof e !== 'undefined' && button) {
        if (button.disabled) { return; }
        else { button.disabled = true; }

        var archiveNode = button.parentNode;
        archiveNode.insertAdjacentHTML('beforeend', ' <span class="progress"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Archiving in progress.</span>');
      }

      options.noCredentials = true

      var progress = archiveNode.querySelector('.progress')

      return fetcher.postResource(endpoint, '', JSON.stringify(noteData), options.contentType, null, options)

        .then(response => response.json())

        .then(response => {
          switch (endpoint) {
            case 'https://pragma.archivelab.org':
            default:
              if (response['wayback_id']) {
                let location = 'https://web.archive.org' + response.wayback_id

                progress
                  .innerHTML = '<i class="fa fa-archive fa-fw"></i> Archived at <a target="_blank" href="' +
                  location + '">' + location + '</a>'
              } else {
                progress
                  .innerHTML = '<i class="fa fa-times-circle fa-fw "></i> Archive unavailable. Please try later.'
              }

              break
          }
        })

        .catch(() => {
          progress
            .innerHTML = '<i class="fa fa-times-circle fa-fw "></i> Archive unavailable. Please try later.'
        })
    },

    mementoDocument: function(e) {
      if(typeof e !== 'undefined') {
        var b = e.target.closest('button');
        if(b.disabled) { return; }
        else { b.disabled = true; }
      }

      var buttonDisabled = '';
      if (document.location.protocol === 'file:') {
        buttonDisabled = ' disabled="disabled"';
      }

      var iri = uri.stripFragmentFromString(document.location.href);

      var li = [];
      li.push('<li><button class="create-version"' + buttonDisabled +
        ' title="Version this article"><i class="fa fa-code-fork fa-2x"></i>Version</button></li>');
      li.push('<li><button class="create-immutable"' + buttonDisabled +
        ' title="Make this article immutable and version it"><i class="fa fa-snowflake-o fa-2x"></i>Immutable</button></li>');
      li.push('<li><button class="snapshot-internet-archive"' + buttonDisabled +
        ' title="Capture with Internet Archive"><i class="fa fa-archive fa-2x"></i>Internet Archive</button></li>');
      li.push('<li><button class="export-as-html" title="Export and save to file"><i class="fa fa-external-link fa-2x"></i>Export</button></li>');

      e.target.closest('button').insertAdjacentHTML('afterend', '<ul id="memento-items" class="on">' + li.join('') + '</ul>');

      var mementoItems = document.getElementById('memento-items');

      DO.U.showTimeMap();

      mementoItems.addEventListener('click', function(e) {
        if (e.target.closest('button.resource-save') ||
            e.target.closest('button.create-version') || 
            e.target.closest('button.create-immutable')) {
          DO.U.resourceSave(e);
        }

        if (e.target.closest('button.export-as-html')) {
          DO.U.exportAsHTML(e);
        }

        if (e.target.closest('button.snapshot-internet-archive')){
          DO.U.snapshotAtEndpoint(e, iri, 'https://pragma.archivelab.org', '', {'contentType': 'application/json'});
        }
      });
    },

    showTimeMap: function(node, url) {
      url = url || DO.C.OriginalResourceInfo['timemap']
      if(!url) { return; }

      var elementId = 'memento-document';

      var displayMemento = '';

      DO.U.getTriplesFromGraph(url)
        .then(triples => {
// console.log(triples)
          if (!node) {
            node = document.getElementById(elementId);
            if(!node) {
              document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="' + elementId + '" class="do on"><h2>Memento</h2>' + DO.C.Button.Close + '</aside>'));
              node = document.getElementById(elementId);
            }
          }

          var timemap = node.querySelector('.timemap');
          if (timemap) {
            node.removeChild(timemap);
          }

          triples = DO.U.sortTriples(triples, { sortBy: 'object' });

          var items = [];
          triples.forEach(function(t){
            var s = t.subject.nominalValue;
            var p = t.predicate.nominalValue;
            var o = t.object.nominalValue;

            if(p === DO.C.Vocab['schemadateCreated']) {
              items.push('<li><a href="' + s + '" target="_blank">' + o + '</a></li>');
            }
          });

          var html = '<dl class="timemap"><dt>TimeMap</dt><dd><ul>' + items.join('') + '</ul></dd></dl>';

          node.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
// console.error(error)
        });
    },

    updateTimeMap: function(url, insertBGP, options) {
      return fetcher.patchResource(url, null, insertBGP);
    },

    showDocumentDo: function showDocumentDo (node) {
      if (document.getElementById('document-do')) { return; }

      var buttonDisabled = '';

      var s = '<section id="document-do" class="do"><h2>Do</h2><ul>';
      s += '<li><button class="resource-share" title="Share resource"><i class="fa fa-bullhorn fa-2x"></i>Share</button></li>';
      s += '<li><button class="resource-reply" title="Reply"><i class="fa fa-reply fa-2x"></i>Reply</button></li>';

      if (DO.C.EditorAvailable) {
        var reviewArticle = (DO.C.EditorEnabled && DO.C.User.Role == 'review')
          ? DO.C.Editor.DisableReviewButton
          : DO.C.Editor.EnableReviewButton;
        s += '<li>' + reviewArticle + '</li>';
      }

      buttonDisabled = (DO.C.User.IRI) ? '' : ' disabled="disabled"';

      var activitiesIcon = 'fa-bolt';

      if (DO.C.User['ContactsOutboxChecked']) {
        activitiesIcon = 'fa-circle-o';
        buttonDisabled = ' disabled="disabled"';
      }

      s += '<li><button class="resource-activities"' + buttonDisabled +
        ' title="Show activities"><i class="fa ' + activitiesIcon + ' fa-2x"></i></i>Activities</button></li>';
      s += '<li><button class="resource-new" title="Create new article"><i class="fa fa-lightbulb-o fa-2x"></i></i>New</button></li>';
      s += '<li><button class="resource-open" title="Open article"><i class="fa fa-coffee fa-2x"></i></i>Open</button></li>';

      buttonDisabled = (document.location.protocol === 'file:') ? ' disabled="disabled"' : '';

      s += '<li><button class="resource-save"' + buttonDisabled +
        ' title="Save article"><i class="fa fa-life-ring fa-2x"></i>Save</button></li>';

      s += '<li><button class="resource-save-as" title="Save as article"><i class="fa fa-paper-plane-o fa-2x"></i>Save As</button></li>';
      s += '<li><button class="resource-memento" title="Memento article"><i class="fa fa-clock-o fa-2x"></i>Memento</button></li>';

      if (DO.C.EditorAvailable) {
        var editFile = (DO.C.EditorEnabled && DO.C.User.Role == 'author')
          ? DO.C.Editor.DisableEditorButton
          : DO.C.Editor.EnableEditorButton;
        s += '<li>' + editFile + '</li>';
      }

      s += '<li><button class="resource-source"' + buttonDisabled +
        ' title="Edit article source code"><i class="fa fa-code fa-2x"></i>Source</button></li>';
      s += '</ul></section>';

      node.insertAdjacentHTML('beforeend', s);

      var dd = document.getElementById('document-do');

      dd.addEventListener('click', e => {
        if (e.target.closest('.resource-share')) {
          DO.U.shareResource(e);
        }

        if (e.target.closest('.resource-reply')) {
          DO.U.replyToResource(e);
        }

        if (DO.C.EditorAvailable) {
          if (e.target.closest('button.editor-disable') ||
            e.target.closest('button.review-disable')) {
            e.target.parentNode.innerHTML = DO.C.Editor.EnableEditorButton;
            DO.U.Editor.enableEditor('social', e);
          }
          else {
            if (e.target.closest('button.editor-enable')) {
              e.target.parentNode.innerHTML = DO.C.Editor.DisableEditorButton;
              DO.U.Editor.enableEditor('author', e);
            }
            else if (e.target.closest('button.review-enable')) {
              e.target.parentNode.innerHTML = DO.C.Editor.DisableEditorButton;
              DO.U.Editor.enableEditor('review', e);
            }
          }
        }

        if (e.target.closest('.resource-activities')) {
          DO.U.showContactsActivities(e);
        }

        if (e.target.closest('.resource-new')) {
          DO.U.createNewDocument(e);
        }

        if (e.target.closest('.resource-open')) {
          DO.U.openDocument(e);
        }

        if (e.target.closest('.resource-source')) {
          DO.U.viewSource(e);
        }

        if (e.target.closest('.resource-save')){
          DO.U.resourceSave(e);
        }

        if (e.target.closest('.resource-save-as')) {
          DO.U.saveAsDocument(e);
        }

        if (e.target.closest('.resource-memento')) {
          DO.U.mementoDocument(e);
        }
      });
    },

    resourceSave: function(e, options) {
      var url = window.location.origin + window.location.pathname;
      var data = doc.getDocument();
      options = options || {};

      DO.U.getResourceInfo(data, options).then(function(i) {
        if (e.target.closest('.create-version')) {
          DO.U.createMutableResource(url);
        }
        else if (e.target.closest('.create-immutable')) {
          DO.U.createImmutableResource(url);
        }
        else if (e.target.closest('.resource-save')) {
          DO.U.updateMutableResource(url);
        }
      });
    },

    createImmutableResource: function(url, data, options) {
      if(!url) return;

      var uuid = DO.U.generateUUID();
      var containerIRI = url.substr(0, url.lastIndexOf('/') + 1);
      var immutableURL = containerIRI + uuid;

      var rootNode = document.documentElement.cloneNode(true);

      var date = new Date();
      rootNode = DO.U.setDate(rootNode, { 'id': 'document-created', 'property': 'schema:dateCreated', 'title': 'Created', 'datetime': date });

      var resourceState = rootNode.querySelector('#' + 'document-resource-state');
      if(!resourceState){
        var rSO = {
          'id': 'document-resource-state',
          'subjectURI': '',
          'type': 'ldp:ImmutableResource',
          'mode': 'create'
        }

        rootNode = DO.U.setDocumentStatus(rootNode, rSO);
      }

      var r, o;

      o = { 'id': 'document-identifier', 'title': 'Identifier' };
      r = { 'rel': 'owl:sameAs', 'href': immutableURL };
      rootNode = DO.U.setDocumentRelation(rootNode, [r], o);

      o = { 'id': 'document-original', 'title': 'Original resource' };
      if (DO.C.OriginalResourceInfo['state'] == DO.C.Vocab['ldpImmutableResource']['@id']
        && DO.C.OriginalResourceInfo['profile'] == DO.C.Vocab['memOriginalResource']['@id']) {
        r = { 'rel': 'mem:original', 'href': immutableURL };
      }
      else {
        r = { 'rel': 'mem:original', 'href': url };
      }
      rootNode = DO.U.setDocumentRelation(rootNode, [r], o);

      //TODO document-timegate

      var timeMapURL = DO.C.OriginalResourceInfo['timemap'] || url + '.timemap';
      o = { 'id': 'document-timemap', 'title': 'TimeMap' };
      r = { 'rel': 'mem:timemap', 'href': timeMapURL };
      rootNode = DO.U.setDocumentRelation(rootNode, [r], o);

      // Create URI-M
      data = doc.getDocument(rootNode);
      DO.U.processSave(containerIRI, uuid, data, options);


      var timeMapURL = DO.C.OriginalResourceInfo['timemap'] || url + '.timemap';


      //Update URI-R
      if (DO.C.OriginalResourceInfo['state'] != DO.C.Vocab['ldpImmutableResource']['@id']) {
        DO.U.setDate(document, { 'id': 'document-created', 'property': 'schema:dateCreated', 'title': 'Created', 'datetime': date });

        o = { 'id': 'document-identifier', 'title': 'Identifier' };
        r = { 'rel': 'owl:sameAs', 'href': url };
        DO.U.setDocumentRelation(document, [r], o);

        o = { 'id': 'document-latest-version', 'title': 'Latest Version' };
        r = { 'rel': 'mem:memento rel:latest-version', 'href': immutableURL };
        DO.U.setDocumentRelation(document, [r], o);

        if(DO.C.OriginalResourceInfo['latest-version']) {
          o = { 'id': 'document-predecessor-version', 'title': 'Predecessor Version' };
          r = { 'rel': 'mem:memento rel:predecessor-version', 'href': DO.C.OriginalResourceInfo['latest-version'] };
          DO.U.setDocumentRelation(document, [r], o);
        }

        //TODO document-timegate

        o = { 'id': 'document-timemap', 'title': 'TimeMap' };
        r = { 'rel': 'mem:timemap', 'href': timeMapURL };
        DO.U.setDocumentRelation(document, [r], o);

        // Create URI-R
        data = doc.getDocument();
        DO.U.processSave(url, null, data, options);
      }


      //Update URI-T
      var insertBGP = '@prefix mem: <http://mementoweb.org/ns#> .\n\
@prefix schema: <http://schema.org/> .\n\
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\
<' + url + '> mem:memento <' + immutableURL + '> .\n\
<' + immutableURL + '> schema:dateCreated "' + date.toISOString() + '"^^xsd:dateTime .';

      DO.U.updateTimeMap(timeMapURL, insertBGP).then(() =>{
        DO.U.showTimeMap(null, timeMapURL)
      });

      DO.U.getResourceInfo(null, { 'mode': 'update' });
    },

    createMutableResource: function(url, data, options) {
      if(!url) return;

      DO.U.setDate(document, { 'id': 'document-created', 'property': 'schema:dateCreated', 'title': 'Created' } );

      var uuid = DO.U.generateUUID();
      var containerIRI = url.substr(0, url.lastIndexOf('/') + 1);
      var mutableURL = containerIRI + uuid;

      var r, o;

      o = { 'id': 'document-identifier', 'title': 'Identifier' };
      r = { 'rel': 'owl:sameAs', 'href': mutableURL };
      DO.U.setDocumentRelation(document, [r], o);

      o = { 'id': 'document-latest-version', 'title': 'Latest Version' };
      r = { 'rel': 'rel:latest-version', 'href': mutableURL };
      DO.U.setDocumentRelation(document, [r], o);

      if(DO.C.OriginalResourceInfo['latest-version']) {
        o = { 'id': 'document-predecessor-version', 'title': 'Predecessor Version' };
        r = { 'rel': 'rel:predecessor-version', 'href': DO.C.OriginalResourceInfo['latest-version'] };
        DO.U.setDocumentRelation(document, [r], o);
      }

      data = doc.getDocument();
      DO.U.processSave(containerIRI, uuid, data, options);


      o = { 'id': 'document-identifier', 'title': 'Identifier' };
      r = { 'rel': 'owl:sameAs', 'href': url };
      DO.U.setDocumentRelation(document, [r], o);

      data = doc.getDocument();
      DO.U.processSave(url, null, data, options).then(() => {
        DO.U.getResourceInfo(null, { 'mode': 'update' });
      });
    },

    updateMutableResource: function(url, data, options) {
      if(!url) return;
      options = options || {};

      if (!('datetime' in options)) {
        options['datetime'] = new Date();
      }

      DO.U.setDate(document, { 'id': 'document-modified', 'property': 'schema:dateModified', 'title': 'Modified', 'datetime': options.datetime } );
      DO.U.setEditSelections(options);

      data = doc.getDocument();
      DO.U.processSave(url, null, data, options).then(() => {
        DO.U.getResourceInfo(null, { 'mode': 'update' });
      });
    },

    processSave: function(url, slug, data, options) {
      options = options || {};
      var request = (slug)
                    ? fetcher.postResource(url, slug, data)
                    : fetcher.putResource(url, data)

      return request
        .then(response => {
          DO.U.showActionMessage(document.documentElement, 'Saved')
          return response
        })
        .catch(error => {
          console.log(error)

          let message

          switch (error.status) {
            case 401:
              message = 'Need to authenticate before saving'
              break

            case 403:
              message = 'You are not authorized to save'
              break

            case 405:
            default:
              message = 'Server doesn\'t allow this resource to be rewritten'
              break
          }

          DO.U.showActionMessage(document.documentElement, message)
        })
    },

    replyToResource: function replyToResource (e, iri) {
      iri = iri || fetcher.currentLocation()

      e.target.closest('button').disabled = true

      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="reply-to-resource" class="do on">' + DO.C.Button.Close + '<h2>Reply to this</h2><div id="reply-to-resource-input"><p>Reply to <code>' +
        iri +'</code></p><ul><li><p><label for="reply-to-resource-note">Quick reply (plain text note)</label></p><p><textarea id="reply-to-resource-note" rows="10" cols="40" name="reply-to-resource-note" placeholder="Great article!"></textarea></p></li><li><label for="reply-to-resource-license">License</label> <select id="reply-to-resource-license" name="reply-to-resource-license">' +
        DO.U.getLicenseOptionsHTML() + '</select></li></ul></div>'))

      // TODO: License
      // TODO: ACL - can choose whether to make this reply private (to self), visible only to article author(s), visible to own contacts, public
      // TODO: Show name and face of signed in user reply is from, or 'anon' if article can host replies

      var replyToResource = document.getElementById('reply-to-resource')

      var id = 'location-reply-to'
      var action = 'write'

      DO.U.setupResourceBrowser(replyToResource, id, action)
      document.getElementById(id).insertAdjacentHTML('afterbegin', '<p>Choose a location to save your reply.</p>')

      replyToResource.insertAdjacentHTML('beforeend', '<p>Your reply will be saved at <samp id="' + id +'-' + action +
        '">https://example.org/path/to/article</samp></p>')

      var bli = document.getElementById(id + '-input')
      bli.focus()
      bli.placeholder = 'https://example.org/path/to/article'
      replyToResource.insertAdjacentHTML('beforeend', '<button class="reply">Send now</button>')

      // replyToResource.insertAdjacentHTML('beforeend', 'or <button class="reply-new"><i class="fa fa-paper-plane-o"></i> Write reply in new window</button>');

      replyToResource.addEventListener('click', e => {
        if (e.target.closest('button.close')) {
          document.querySelector('#document-do .resource-reply').disabled = false
        }

        if (e.target.closest('button.reply')) {
          var note = document
            .querySelector('#reply-to-resource #reply-to-resource-note')
            .value.trim()

          var rm = replyToResource.querySelector('.response-message')
          if (rm) {
            rm.parentNode.removeChild(rm)
          }
        }

        replyToResource.insertAdjacentHTML('beforeend', '<div class="response-message"></div>')

        if (!iri || !note) {
          document.querySelector('#reply-to-resource .response-message')
            .innerHTML = '<p class="error">Need a note and a location to save it.</p>'
          return
        }

        var datetime = util.getDateTimeISO()
        var attributeId = DO.U.generateAttributeId()
        var noteIRI = document.querySelector('#reply-to-resource #' + id +
          '-' + action).innerText.trim()
        var motivatedBy = "oa:replying"
        var noteData = {
          "type": 'article',
          "mode": "write",
          "motivatedByIRI": motivatedBy,
          "id": attributeId,
          // "iri": noteIRI, //e.g., https://example.org/path/to/article
          "creator": {},
          "datetime": datetime,
          "target": {
            "iri": iri
          },
          "body": note, // content
          "license": {}
        }
        if (DO.C.User.IRI) {
          noteData.creator["iri"] = DO.C.User.IRI
        }
        if (DO.C.User.Name) {
          noteData.creator["name"] = DO.C.User.Name
        }
        if (DO.C.User.Image) {
          noteData.creator["image"] = DO.C.User.Image
        }
        if (DO.C.User.URL) {
          noteData.creator["url"] = DO.C.User.URL
        }

        var license = document.querySelector('#reply-to-resource-license')
        if (license && license.length > 0) {
          noteData.license["iri"] = license.value.trim()
          noteData.license["name"] = DO.C.License[license.value.trim()].name
        }

        var note = DO.U.createNoteDataHTML(noteData)

        var data = DO.U.createHTML('', note)

        fetcher.putResource(noteIRI, data)

          .catch(error => {
            console.error('Could not save reply:', error)

            let errorMessage

            switch (error.status) {
              case 0:
              case 405:
                errorMessage = 'this location is not writable'
                break
              case 401:
              case 403:
                errorMessage = 'you do not have permission to write here'
                break
              case 406:
                errorMessage = 'enter a name for your resource'
                break
              default:
                // some other reason
                errorMessage = error.message
                break
            }

            // re-throw, to break out of the promise chain
            throw new Error('Cannot save your reply:', errorMessage)
          })

          .then(response => {
            replyToResource
              .querySelector('.response-message')
              .innerHTML = '<p class="success"><a href="' + response.url + '">Reply saved!</a></p>'

            // Determine the inbox endpoint, to send the notification to
            return inbox.getEndpoint(DO.C.Vocab['ldpinbox']['@id'])
              .catch(error => {
                console.error('Could not fetch inbox endpoint:', error)

                // re-throw
                throw new Error('Could not determine the author inbox endpoint')
              })
          })

          .then(inboxes => {
            if (!inboxes) {
              throw new Error('Author inbox endpoint is empty or missing')
            }

            var inboxURL = inboxes[0]

            let notificationStatements = '    <dl about="' + noteIRI +
              '">\n<dt>Object type</dt><dd><a about="' +
              noteIRI + '" typeof="oa:Annotation" href="' +
              DO.C.Vocab['oaannotation']['@id'] +
              '">Annotation</a></dd>\n<dt>Motivation</dt><dd><a href="' +
              DO.C.Prefixes[motivatedBy.split(':')[0]] +
              motivatedBy.split(':')[1] + '" property="oa:motivation">' +
              motivatedBy.split(':')[1] + '</a></dd>\n</dl>\n'

            let notificationData = {
              "type": ['as:Announce'],
              "inbox": inboxURL,
              "object": noteIRI,
              "target": iri,
              "license": noteData.license["iri"],
              "statements": notificationStatements
            }

            inbox.notifyInbox(notificationData)
              .catch(error => {
                console.error('Failed sending notification to ' + inboxURL + ' :', error)

                throw new Error('Failed sending notification to author inbox')
              })
          })

          .then(() => {  // Success!
            replyToResource
              .querySelector('.response-message')
              .innerHTML += '<p class="success">Notification sent</p>';
          })

          .catch(error => {
            // Catch-all error, actually notify the user
            replyToResource
              .querySelector('.response-message')
              .innerHTML += '<p class="error">' +
                'We could not notify the author of your reply:' +
                error.message + '</p>'
          })
      })
    },

    showActionMessage: function(node, message) {
      var message = '<aside id="document-action-message" class="do on"><p>' + message + '</p></aside>';
      node.appendChild(DO.U.fragmentFromString(message));
      window.setTimeout(function () {
        var dam = document.getElementById('document-action-message');
        dam.parentNode.removeChild(dam);
      }, 1500);
    },

    shareResource: function shareResource (e, iri) {
      iri = iri || fetcher.currentLocation();
      if (e) {
        e.target.disabled = true;
      }

      var addContactsButtonDisable = '', noContactsText = '';
      if (!DO.C.User.IRI && !(DO.C.User.Graph && ((DO.C.User.Knows && DO.C.User.Knows.length > 0) || (DO.C.User.Graph.owlsameAs && DO.C.User.Graph.owlsameAs._array.length > 0)))) {
        addContactsButtonDisable = ' disabled="disabled"';
        noContactsText = '<p>Sign in to select from your list of contacts, alternatively, enter contacts individually:</p>';
      }

      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="share-resource" class="do on">' + DO.C.Button.Close + '<h2>Share resource</h2><div id="share-resource-input"><p>Send a notification about <code>' + iri +'</code></p><ul><li id="share-resource-address-book"></li><li><label for="share-resource-to">To</label> <textarea id="share-resource-to" rows="2" cols="40" name="share-resource-to" placeholder="WebID or article IRI (one per line)"></textarea></li><li><label for="share-resource-note">Note</label> <textarea id="share-resource-note" rows="2" cols="40" name="share-resource-note" placeholder="Check this out!"></textarea></li></ul></div><button class="share">Share</button></aside>'));

      var li = document.getElementById('share-resource-address-book');

      if (DO.C.User.Contacts && Object.keys(DO.C.User.Contacts).length > 0) {
        DO.U.selectContacts(li, DO.C.User.IRI);
      }
      else {
        li.insertAdjacentHTML('beforeend', '<button class="add"' + addContactsButtonDisable + '><i class="fa fa-address-book"></i> Add from contacts</button>' + noContactsText);
      }

      var shareResource = document.getElementById('share-resource');
      shareResource.addEventListener('click', function (e) {
        if (e.target.closest('button.close')) {
          var rs = document.querySelector('#document-do .resource-share');
          if (rs) {
            rs.disabled = false;
          }
        }

        if (DO.C.User.IRI && e.target.closest('button.add')) {
          e.preventDefault();
          e.stopPropagation();
          var li = e.target.closest('li');
          li.insertAdjacentHTML('beforeend', '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');
          DO.U.selectContacts(li, DO.C.User.IRI);
        }

        if (e.target.closest('button.share')) {
          var tos = document.querySelector('#share-resource #share-resource-to').value.trim();
          tos = (tos.length > 0) ? tos.split(/\r\n|\r|\n/) : [];
          var note = document.querySelector('#share-resource #share-resource-note').value.trim();

          var ps = document.querySelectorAll('#share-resource-contacts .progress');
          ps.forEach(function(p){
            p.parentNode.removeChild(p);
          });

          var srci = document.querySelectorAll('#share-resource-contacts input:checked');
          if (srci.length > 0) {
            for(var i = 0; i < srci.length; i++) {
              tos.push(srci[i].value);
            }
          }

          if (!iri) {
            return
          }

          // var rm = shareResource.querySelector('.response-message');
          // if (rm) {
          //   rm.parentNode.removeChild(rm);
          // }
          // shareResource.insertAdjacentHTML('beforeend', '<div class="response-message"></div>');

          return inbox.sendNotifications(tos, note, iri, shareResource)
        }
      });
    },

    selectContacts: function(node, url) {
      node.innerHTML = '<p>Select from contacts</p><ul id="share-resource-contacts"></ul>';
      var shareResourceNode = document.getElementById('share-resource-contacts');

      if (DO.C.User.Contacts && Object.keys(DO.C.User.Contacts).length > 0){
        Object.keys(DO.C.User.Contacts).forEach(function(iri){
          if (DO.C.User.Contacts[iri].Inbox) {
            DO.U.addShareResourceContactInput(shareResourceNode, DO.C.User.Contacts[iri].Graph);
          }
        });
      }
      else {
        DO.U.updateContactsInfo(url, {'addShareResourceContactInput': shareResourceNode});
      }
    },

    updateContactsInfo: function(url, options) {
      options = options || {};

      return auth.getUserContacts(url).then(
        function(contacts) {
          if(contacts.length > 0) {
            var promises = [];

            var gC = function(url) {
              return fetcher.getResourceGraph(url).then(i => {
                // console.log(i);
                var s = i.child(url);

                DO.C.User.Contacts[url] = {};
                DO.C.User.Contacts[url]['Graph'] = s;

                var uCO = function(url, s) {
                  return DO.U.updateContactsOutbox(url, s)
                    .then(() => {
                      if ('showOutboxSources' in options) {
                        return DO.U.showOutboxSources(DO.C.User.Contacts[url].Outbox[0])
                      }
                      return Promise.resolve();
                    })
                    .catch(() => {})
                }

                var uCI = function(url, s) {
                  return DO.U.updateContactsInbox(url, s)
                    .then(() => {
                      if ('addShareResourceContactInput' in options) {
                        DO.U.addShareResourceContactInput(options.addShareResourceContactInput, s);
                      }
                      return Promise.resolve();
                    })
                    .catch(() => {})
                }

                //XXX: Holy crap this is fugly.
                if ('showOutboxSources' in options) {
                  uCI(url, s);
                  return uCO(url, s)
                }
                else if ('addShareResourceContactInput' in options) {
                  uCO(url, s)
                  return uCI(url, s)
                }

              }).catch(err => {
// console.log(err)
                return Promise.resolve();
              });
            }

            contacts.forEach(function(url) {
              promises.push(gC(url))
            });

            DO.C.User['ContactsOutboxChecked'] = true;

            return Promise.all(promises)
          }
          else {
            if ('addShareResourceContactInput' in options) {
              options.addShareResourceContactInput.innerHTML = 'No contacts with <i class="fa fa-inbox"></i> inbox found in your profile, but you can enter contacts individually:';
            }

            return Promise.resolve()
          }
        },
        function(reason) {
console.log(reason);
        }
      )
    },

    addShareResourceContactInput: function(node, s) {
      var iri = s.iri().toString();
// console.log(iri.toString());
      var id = encodeURIComponent(iri);
      var name = auth.getAgentName(s) || iri;
      var img = auth.getAgentImage(s);
      img = (img && img.length > 0) ? '<img alt="" height="32" src="' + img + '" width="32" />' : '';
      var input = '<li><input id="share-resource-contact-' + id + '" type="checkbox" value="' + iri + '" /><label for="share-resource-contact-' + id + '">' + img + '<a href="' + iri + '" target="_blank">' + name + '</a></label></li>';

      node.insertAdjacentHTML('beforeend', input);
    },

    updateContactsInbox: function(iri, s) {
      var checkInbox = function(s) {
        var aI = auth.getAgentInbox(s);

        if (aI) {
          return Promise.resolve(aI);
        }
        else {
          return inbox.getEndpointFromHead(DO.C.Vocab['ldpinbox']['@id'], iri);
        }
      }

      return checkInbox(s)
        .then(inboxes => {
          DO.C.User.Contacts[iri]['Inbox'] = inboxes;
        })
    },

    updateContactsOutbox: function(iri, s) {
      var checkOutbox = function(s) {
        var outbox = auth.getAgentOutbox(s);

        if (outbox) {
          return Promise.resolve(outbox)
        }
        else {
          return Promise.reject()
        }
      }

      return checkOutbox(s)
        .then(outboxes => {
          DO.C.User.Contacts[iri]['Outbox'] = outboxes;
        })
    },

    nextLevelButton: function(button, url, id, action) {
      var actionNode = document.getElementById(id + '-' + action);

      button.addEventListener('click', function(){
        if(button.parentNode.classList.contains('container')){
          fetcher.getResourceGraph(url).then(
            function(g){
              actionNode.textContent = (action == 'write') ? url + DO.U.generateAttributeId() : url;
              return DO.U.generateBrowserList(g, url, id, action);
            },
            function(reason){
              var inputBox = document.getElementById(id);
              switch(reason.slice(-3)) { // TODO: simplerdf needs to pass status codes better than in a string.
                default:
                  inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">Unable to access ('+ reason +').</p>');
                  break;
                case '404':
                  inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">Not found.</p></div>');
                  break;
                case '401': case '403':
                  var msg = 'You don\'t have permission to access this location.';
                  if(!DO.C.User.IRI){
                    msg += '</p><p>Try signing in to access your datastore.';
                  }
                  inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">' + msg + '</p></div>');
                  break;
              }
            }
          );
        }
        else {
          document.getElementById(id + '-input').value = url;
          var alreadyChecked = button.parentNode.querySelector('input[type="radio"]').checked;
          var radios = button.parentNode.parentNode.querySelectorAll('input[checked="true"]');

          actionNode.textContent =  url;

          for(var i = 0; i < radios.length; i++){
            radios[i].removeAttribute('checked');
          }
          if(alreadyChecked){
            button.parentNode.querySelector('input[type="radio"]').removeAttribute('checked');
          }
          else{
            button.parentNode.querySelector('input[type="radio"]').setAttribute('checked', 'true');
          }
        }
      }, false);
    },

    generateBrowserList: function(g, url, id, action) {
      return new Promise(function(resolve, reject){
        document.getElementById(id + '-input').value = url;

        var msgs = document.getElementById(id).querySelectorAll('.response-message');
        for(var i = 0; i < msgs.length; i++){
          msgs[i].parentNode.removeChild(msgs[i]);
        }

        var list = document.getElementById(id + '-ul');
        list.innerHTML = '';

        var urlPath = DO.U.getUrlPath(url);
        if(urlPath.length > 4){ // This means it's not the base URL
          urlPath.splice(-2,2);
          var prevUrl = DO.U.forceTrailingSlash(urlPath.join("/"));
          var upBtn = '<li class="container"><input type="radio" name="containers" value="' + prevUrl + '" id="' + prevUrl + '" /><label for="' + prevUrl + '" id="browser-up">..</label></li>';
          list.insertAdjacentHTML('afterbegin', upBtn);
        }

        var current = g.child(url);
        var contains = current.ldpcontains;
        var containersLi = Array();
        var resourcesLi = Array();
        contains.forEach(function(c){
          var cg = g.child(c);
          var types = cg.rdftype;
          var resourceTypes = [];
          types.forEach(function(type){
            resourceTypes.push(type);
          });

          var path = DO.U.getUrlPath(c);
          if(resourceTypes.indexOf('http://www.w3.org/ns/ldp#Container') > -1){
            var slug = path[path.length-2];
            containersLi.push('<li class="container"><input type="radio" name="resources" value="' + c + '" id="' + slug + '"/><label for="' + slug + '">' + slug + '</label></li>');
          }
          else {
            var slug = path[path.length-1];
            resourcesLi.push('<li><input type="radio" name="resources" value="' + c + '" id="' + slug + '"/><label for="' + slug + '">' + slug + '</label></li>');
          }

        });
        containersLi.sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        resourcesLi.sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        var liHTML = containersLi.join('\n') + resourcesLi.join('\n');
        list.insertAdjacentHTML('beforeend', liHTML);

        var buttons = list.querySelectorAll('label');
        if(buttons.length <= 1){
          list.insertAdjacentHTML('beforeend', '<p><em>(empty)</em></p>');
        }

        for(var i = 0; i < buttons.length; i++) {
          var nextUrl = buttons[i].parentNode.querySelector('input').value;
          DO.U.nextLevelButton(buttons[i], nextUrl, id, action);
        }

        return resolve(list);
      });
    },

    initBrowse: function(storageUrl, input, browseButton, id, action){
      input.value = storageUrl;
      fetcher.getResourceGraph(storageUrl).then(function(g){
        DO.U.generateBrowserList(g, storageUrl, id, action);
      }).then(function(i){
        document.getElementById(id + '-' + action).textContent = (action == 'write') ? input.value + DO.U.generateAttributeId() : input.value;
      });

      browseButton.addEventListener('click', function(){
        DO.U.triggerBrowse(input.value, id, action);
      }, false);
    },

    triggerBrowse: function(url, id, action){
      var inputBox = document.getElementById(id);
      if (url.length > 10 && url.match(/^https?:\/\//g) && url.slice(-1) == "/"){
        fetcher.getResourceGraph(url).then(function(g){
          DO.U.generateBrowserList(g, url, id, action).then(function(l){
            return l;
          },
          function(reason){
            console.log('???? ' + reason); // Probably no reason for it to get to here
          });
        },
        function(reason){
          var list = document.getElementById(id + '-ul');
          switch(reason.slice(-3)) { // TODO: simplerdf needs to pass status codes better than in a string.
            default:
              inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">Unable to access ('+ reason +').</p>');
              break;
            case '404':
              inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">Not found.</p></div>');
              break;
            case '401': case '403':
              var msg = 'You don\'t have permission to access this location.';
              if(!DO.C.User.IRI){
                msg += '</p><p>Try signing in to access your datastore.';
              }
              inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">' + msg + '</p></div>');
              break;
          }
        });
      }
      else{
        inputBox.insertAdjacentHTML('beforeend', '<div class="response-message"><p class="error">This is not a valid location.</p></div>');
      }
    },

    setupResourceBrowser: function(parent, id, action){
      id = id || 'browser-location';
      action = action || 'write';

      parent.insertAdjacentHTML('beforeend', '<div id="' + id + '"><label for="' + id +'-input">URL</label> <input type="text" id="' + id +'-input" name="' + id + '-input" placeholder="https://example.org/path/to/" /><button id="' + id +'-update" disabled="disabled">Browse</button></div>\n\
      <div id="' + id +'-contents"></div>');

      var inputBox = document.getElementById(id);
      var storageBox = document.getElementById(id + '-contents');
      var input = document.getElementById(id + '-input');
      var browseButton = document.getElementById(id + '-update');

      input.addEventListener('keyup', function(e){
        var actionNode = document.getElementById(id + '-' + action);
        if (input.value.length > 10 && input.value.match(/^https?:\/\//g) && input.value.slice(-1) == "/") {
          browseButton.removeAttribute('disabled');
          if(e.which == 13){
            DO.U.triggerBrowse(input.value, id, action);
          }
          if(action){
            action.textContent = input.value + DO.U.generateAttributeId();
          }
        }
        else {
          browseButton.disabled = 'disabled';
          if(actionNode) {
            actionNode.textContent = input.value;
          }
        }
      }, false);

      var browserul = document.getElementById(id + '-ul');
      if(!browserul){
        browserul = document.createElement('ul');
        browserul.id = id + '-ul';

        storageBox.appendChild(browserul);
      }

      var storageUrl;

      if(DO.C.User.Storage && DO.C.User.Storage.length > 0) {
        storageUrl = DO.U.forceTrailingSlash(DO.C.User.Storage[0]); // TODO: options for multiple storage
      }

      if(storageUrl){
        DO.U.initBrowse(storageUrl, input, browseButton, id, action);
      }
      else {
        inbox.getEndpoint(DO.C.Vocab['oaannotationService']['@id']).then(
          function(storageUrl) {
            DO.U.initBrowse(storageUrl[0], input, browseButton, id, action);
          },
          function(){
            browseButton.addEventListener('click', function(){
              DO.U.triggerBrowse(input.value, id, action);
            }, false);
          }
        )
      }
    },

    showResourceBrowser: function(id, action) {
      id = id || 'location-' + DO.U.generateAttributeId();
      action = action || 'write';

      var browserHTML = '<aside id="resource-browser-' + id + '" class="do on">' + DO.C.Button.Close + '<h2>Resource Browser</h2></aside>';
      document.documentElement.appendChild(DO.U.fragmentFromString(browserHTML));

      DO.U.setupResourceBrowser(document.getElementById('resource-browser-' + id), id, action);
      document.getElementById('resource-browser-' + id).insertAdjacentHTML('beforeend', '<p><samp id="' + id + '-' + action + '"></samp></p>');
    },

    openInputFile: function(e) {
      var file = e.target.files[0];
// console.log(file);
      var contentType = file.type;

      var reader = new FileReader();
      reader.onload = function(){
// console.log(reader);

        DO.U.spawnDokieli(reader.result, contentType, 'file:' + file.name);
      };
      reader.readAsText(file);
    },

    openDocument: function (e) {
      if(typeof e !== 'undefined') {
        e.target.disabled = true;
      }
      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="open-document" class="do on">' + DO.C.Button.Close + '<h2>Open Document</h2><p><label for="open-local-file">Open local file</label> <input type="file" id="open-local-file" name="open-local-file" /></p></aside>'));

      var id = 'location-open-document';
      var action = 'read';

      var openDocument = document.getElementById('open-document');
      DO.U.setupResourceBrowser(openDocument , id, action);
      var idSamp = (typeof DO.C.User.Storage == 'undefined') ? '' : '<p><samp id="' + id + '-' + action + '">https://example.org/path/to/article</samp></p>';
      openDocument.insertAdjacentHTML('beforeend', idSamp + '<button class="open">Open</button>');

      openDocument.addEventListener('click', function (e) {
        if (e.target.closest('button.close')) {
          document.querySelector('#document-do .resource-open').disabled = false;
        }

        if (e.target.closest('#open-local-file')){
          e.target.addEventListener('change', DO.U.openInputFile, false);
        }

        if (e.target.closest('button.open')) {
          var openDocument = document.getElementById('open-document');
          var rm = openDocument.querySelector('.response-message');
          if (rm) {
            rm.parentNode.removeChild(rm);
          }

          var bli = document.getElementById(id + '-input');
          var iri = bli.value;
          var headers = { 'Accept': fetcher.setAcceptRDFTypes() };
          var options = {};
          var pIRI = uri.getProxyableIRI(iri);
          if (pIRI.slice(0, 5).toLowerCase() == 'http:') {
            options['noCredentials'] = true;
          }

          var handleResource = function handleResource (pIRI, headers, options) {
            return fetcher.getResource(pIRI, headers, options)
              .catch(error => {
                if (error.status === 0) {
                  // retry with proxied uri
                  var pIRI = uri.getProxyableIRI(iri, {'forceProxy': true});
                  return handleResource(pIRI, headers, options);
                }

                throw error  // else, re-throw the error
              })
              .then(response => {
                var cT = response.headers.get('Content-Type');
                var contentType = (cT) ? cT.split(';')[0].trim() : 'text/turtle';

                return response.text()
                  .then(responseText => {
                    DO.U.spawnDokieli(responseText, contentType, iri);
                  })
              })
          }

          handleResource(pIRI, headers, options);
        }
      });
    },

    spawnDokieli: function(data, contentType, iri){
      if(DO.C.AvailableMediaTypes.indexOf(contentType) > -1) {
        var template = document.implementation.createHTMLDocument('template');
// console.log(template);

        switch(contentType){
          case 'text/html': case 'application/xhtml+xml':
            template.documentElement.innerHTML = data;
            break;

          default:
            template.documentElement.innerHTML = '<pre>' + data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
            break;
        }

// console.log(template);

        var documentHasDokieli = template.querySelectorAll('head script[src$="/do.js"]');
// console.log(documentHasDokieli);
// console.log(documentHasDokieli.length)
        if(documentHasDokieli.length == 0) {
          var doFiles = ['font-awesome.min.css', 'do.css', 'simplerdf.js', 'medium-editor.min.js', 'do.js'];
          doFiles.forEach(function(i){
// console.log(i);
            var media = i.endsWith('.css') ? template.querySelectorAll('head link[rel~="stylesheet"][href$="/' + i + '"]') : template.querySelectorAll('head script[src$="/' + i + '"]');
// console.log(media);
// console.log(media.length)
            if (media.length == 0) {
              switch(i) {
                case 'font-awesome.min.css':
                  template.querySelector('head').insertAdjacentHTML('beforeend', '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" media="all" rel="stylesheet" />');
                  break;
                case 'do.css':
                  template.querySelector('head').insertAdjacentHTML('beforeend', '<link href="https://dokie.li/media/css/' + i + '" media="all" rel="stylesheet" />');
                  break;
                case 'simplerdf.js': case 'medium-editor.min.js': case 'do.js':
                  template.querySelector('head').insertAdjacentHTML('beforeend', '<script src="https://dokie.li/scripts/' + i + '"></script>')
                  break;
              }
            }
// console.log(template)
          });

          var nodes = template.querySelectorAll('head link, [src], object[data]');
          nodes = DO.U.rewriteBaseURL(nodes, {'baseURLType': 'base-url-absolute', 'iri': iri});

          document.documentElement.removeAttribute('id');
          document.documentElement.removeAttribute('class');
        }
        else if(!iri.startsWith('file:')) {
          window.open(iri, '_blank');
          return;
        }

        document.documentElement.innerHTML = template.documentElement.innerHTML;

// console.log(document.location.protocol);
        if(!iri.startsWith('file:')){
          var iriHost = iri.split('//')[1].split('/')[0];
          var iriProtocol = iri.split('//')[0];
// console.log(iriHost);
// console.log(iriProtocol);
          if(document.location.protocol == iriProtocol && document.location.host == iriHost) {
            try {
              history.pushState(null, null, iri);
            }
            catch(e) { console.log('Cannot change pushState due to cross-origin.'); }
          }
        }
        DO.U.init();
      }
      else {
console.log('//TODO: Handle server returning wrong Response/Content-Type for the Request/Accept');
      }
    },


    createNewDocument: function createNewDocument (e) {
      e.target.disabled = true
      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="create-new-document" class="do on">' + DO.C.Button.Close + '<h2>Create New Document</h2></aside>'))

      var newDocument = document.getElementById('create-new-document')
      newDocument.addEventListener('click', e => {
        if (e.target.closest('button.close')) {
          document.querySelector('#document-do .resource-new').disabled = false
        }
      })

      var id = 'location-new'
      var action = 'write'

      DO.U.setupResourceBrowser(newDocument, id, action)
      document.getElementById(id).insertAdjacentHTML('afterbegin', '<p>Choose a location to save your new article.</p>')
      var baseURLSelection = (document.location.protocol == 'file:') ? '' : DO.U.getBaseURLSelection()

      newDocument.insertAdjacentHTML('beforeend', baseURLSelection +
        '<p>Your new document will be saved at <samp id="' + id + '-' + action +
        '">https://example.org/path/to/article</samp></p><button class="create">Create</button>')

      var bli = document.getElementById(id + '-input')
      bli.focus()
      bli.placeholder = 'https://example.org/path/to/article'

      newDocument.addEventListener('click', e => {
        if (!e.target.closest('button.create')) {
          return
        }

        var newDocument = document.getElementById('create-new-document')
        var storageIRI = newDocument.querySelector('#' + id + '-' + action).innerText.trim()
        var rm = newDocument.querySelector('.response-message')
        if (rm) {
          rm.parentNode.removeChild(rm)
        }

        var html = document.documentElement.cloneNode(true)
        var baseURLSelectionChecked = newDocument.querySelector('select[name="base-url"]')
        // console.log(baseURLSelectionChecked);

        if (baseURLSelectionChecked.length > 0) {
          var baseURLType = baseURLSelectionChecked.value
          var nodes = html.querySelectorAll('head link, [src], object[data]')
          if (baseURLType == 'base-url-relative') {
            DO.U.copyRelativeResources(storageIRI, nodes)
          }
          nodes = DO.U.rewriteBaseURL(nodes, {'baseURLType': baseURLType})
        }

        html.querySelector('body').innerHTML = '<main><article about="" typeof="schema:Article"></article></main>'
        html.querySelector('head title').innerHTML = ''
        html = doc.getDocument(html)

        fetcher.putResource(storageIRI, html)
          .then(() => {
            var documentMode = (DO.C.WebExtension) ? '' : '?author=true'

            newDocument.insertAdjacentHTML('beforeend',
              '<div class="response-message"><p class="success">' +
              'New document created at <a href="' + storageIRI +
              documentMode + '">' + storageIRI + '</a></p></div>'
            )

            window.open(storageIRI + documentMode, '_blank')
          })

          .catch(error => {
            console.error('Error creating a new document:', error)

            let message

            switch (error.status) {
              case 0:
              case 405:
                message = 'this location is not writable'
                break
              case 401:
              case 403:
                message = 'you do not have permission to write here'
                break
              case 406:
                message = 'enter a name for your resource'
                break
              default:
                message = error.message
                break
            }

            newDocument.insertAdjacentHTML('beforeend',
              '<div class="response-message"><p class="error">' +
              'Could not create new document: ' + message + '</p>'
            )
          })
      })
    },

    saveAsDocument: function saveAsDocument (e) {
      e.target.disabled = true;
      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="save-as-document" class="do on">' + DO.C.Button.Close + '<h2>Save As Document</h2></aside>'));

      var saveAsDocument = document.getElementById('save-as-document');
      saveAsDocument.addEventListener('click', function(e) {
        if (e.target.closest('button.close')) {
          document.querySelector('#document-do .resource-save-as').disabled = false;
        }
      });

      var fieldset = '';

      locationInboxId = 'location-inbox';
      locationInboxAction = 'read';
      saveAsDocument.insertAdjacentHTML('beforeend', '<div><input id="' + locationInboxId + '-set" name="' + locationInboxId + '-set" type="checkbox" /> <label for="' + locationInboxId + '-set">Set Inbox</label></div>');

      saveAsDocument.addEventListener('click', function(e) {
        if (e.target.closest('input#' + locationInboxId + '-set')) {
          if (e.target.getAttribute('checked')) {
            e.target.removeAttribute('checked');

            fieldset = saveAsDocument.querySelector('#' + locationInboxId + '-fieldset');
            fieldset.parentNode.removeChild(fieldset);
          }
          else {
            e.target.setAttribute('checked', 'checked');

            e.target.nextElementSibling.insertAdjacentHTML('afterend', '<fieldset id="' + locationInboxId + '-fieldset"></fieldset>');
            fieldset = saveAsDocument.querySelector('#' + locationInboxId + '-fieldset');
            DO.U.setupResourceBrowser(fieldset, locationInboxId, locationInboxAction);
            fieldset.insertAdjacentHTML('beforeend', '<p>Article\'s <em>inbox</em> will be set to: <samp id="' + locationInboxId + '-' + locationInboxAction + '"></samp></p>');
            var lii = document.getElementById(locationInboxId + '-input');
            lii.focus();
            lii.placeholder = 'https://example.org/path/to/inbox/';
          }
        }
      });

      locationAnnotationServiceId = 'location-annotation-service';
      locationAnnotationServiceAction = 'read';
      saveAsDocument.insertAdjacentHTML('beforeend', '<div><input id="' + locationAnnotationServiceId + '-set" name="' + locationAnnotationServiceId + '-set" type="checkbox" /> <label for="' + locationAnnotationServiceId + '-set">Set Annotation Service</label></div>');

      saveAsDocument.addEventListener('click', function(e) {
        if (e.target.closest('input#' + locationAnnotationServiceId + '-set')) {
          if (e.target.getAttribute('checked')) {
            e.target.removeAttribute('checked');

            fieldset = saveAsDocument.querySelector('#' + locationAnnotationServiceId + '-fieldset');
            fieldset.parentNode.removeChild(fieldset);
          }
          else {
            e.target.setAttribute('checked', 'checked');

            e.target.nextElementSibling.insertAdjacentHTML('afterend', '<fieldset id="' + locationAnnotationServiceId + '-fieldset"></fieldset>');
            fieldset = saveAsDocument.querySelector('#' + locationAnnotationServiceId + '-fieldset');
            DO.U.setupResourceBrowser(fieldset, locationAnnotationServiceId, locationAnnotationServiceAction);
            fieldset.insertAdjacentHTML('beforeend', '<p>Article\'s <em>annotation service</em> will be set to: <samp id="' + locationAnnotationServiceId + '-' + locationAnnotationServiceAction + '"></samp></p>');
            var lasi = document.getElementById(locationAnnotationServiceId + '-input');
            lasi.focus();
            lasi.placeholder = 'https://example.org/path/to/annotation/';
          }
        }
      });

      var id = 'location-save-as';
      var action = 'write';
      saveAsDocument.insertAdjacentHTML('beforeend', '<fieldset id="' + id + '-fieldset"><legend>Save to</legend></fieldset>');
      fieldset = saveAsDocument.querySelector('fieldset#' + id + '-fieldset');
      DO.U.setupResourceBrowser(fieldset, id, action);
      fieldset.insertAdjacentHTML('beforeend', '<p>Article will be saved at: <samp id="' + id + '-' + action + '"></samp></p>' + DO.U.getBaseURLSelection() + '<p><input type="checkbox" id="derivation-data" name="derivation-data" checked="checked" /><label for="derivation-data">Derivation data</label></p><button class="create">Save</button>');
      var bli = document.getElementById(id + '-input');
      bli.focus();
      bli.placeholder = 'https://example.org/path/to/article';


      saveAsDocument.addEventListener('click', e => {
        if (!e.target.closest('button.create')) {
          return
        }

        var currentDocumentURL = uri.stripFragmentFromString(document.location.href)
        var saveAsDocument = document.getElementById('save-as-document')
        var storageIRI = saveAsDocument.querySelector('#' + id + '-' + action).innerText.trim()

        var rm = saveAsDocument.querySelector('.response-message')
        if (rm) {
          rm.parentNode.removeChild(rm)
        }

        if(!storageIRI.length) {
          saveAsDocument.insertAdjacentHTML('beforeend',
            '<div class="response-message"><p class="error">' +
            'Specify the location to save the article to, and optionally set its <em>inbox</em> or <em>annotation service</em>.</p></div>'
          )

          return
        }

        var html = document.documentElement.cloneNode(true)
        var o, r

        var wasDerived = document.querySelector('#derivation-data')
        if (wasDerived.checked) {
          o = { 'id': 'document-derived-from', 'title': 'Derived From' };
          r = { 'rel': 'prov:wasDerivedFrom', 'href': currentDocumentURL };
          html = DO.U.setDocumentRelation(html, [r], o);

          html = DO.U.setDate(html, { 'id': 'document-derived-on', 'property': 'prov:generatedAtTime', 'title': 'Derived On' });

          o = { 'id': 'document-identifier', 'title': 'Identifier' };
          r = { 'rel': 'owl:sameAs', 'href': storageIRI };
          html = DO.U.setDocumentRelation(html, [r], o);
        }

        var inboxLocation = saveAsDocument.querySelector('#' + locationInboxId + '-' + locationInboxAction);
        if (inboxLocation) {
          inboxLocation = inboxLocation.innerText.trim();
          o = { 'id': 'document-inbox', 'title': 'Notifications Inbox' };
          r = { 'rel': 'ldp:inbox', 'href': inboxLocation };
          html = DO.U.setDocumentRelation(html, [r], o);
        }

        var annotationServiceLocation = saveAsDocument.querySelector('#' + locationAnnotationServiceId + '-' + locationAnnotationServiceAction)
        if (annotationServiceLocation) {
          annotationServiceLocation = annotationServiceLocation.innerText.trim();
          o = { 'id': 'document-annotation-service', 'title': 'Annotation Service' };
          r = { 'rel': 'oa:annotationService', 'href': annotationServiceLocation };
          html = DO.U.setDocumentRelation(html, [r], o);
        }

        var baseURLSelectionChecked = saveAsDocument.querySelector('select[name="base-url"]')
        if (baseURLSelectionChecked.length > 0) {
          var baseURLType = baseURLSelectionChecked.value
          var nodes = html.querySelectorAll('head link, [src], object[data]')
          if (baseURLType == 'base-url-relative') {
            DO.U.copyRelativeResources(storageIRI, nodes)
          }
          nodes = DO.U.rewriteBaseURL(nodes, {'baseURLType': baseURLType})
        }

        html = doc.getDocument(html)

        var progress = saveAsDocument.querySelector('progress')
        if(progress) {
          progress.parentNode.removeChild(progress)
        }
        e.target.insertAdjacentHTML('afterend', '<progress min="0" max="100" value="0"></progress>')
        progress = saveAsDocument.querySelector('progress')

        fetcher.putResource(storageIRI, html, null, null, { 'progress': progress })

          .then(response => {
            progress.parentNode.removeChild(progress)

            let url = response.url || storageIRI

            var documentMode = (DO.C.WebExtension) ? '' : '?author=true'

            saveAsDocument.insertAdjacentHTML('beforeend',
              '<div class="response-message"><p class="success">' +
              'Document saved at <a href="' + url + documentMode + '">' + url + '</a></p></div>'
            )

            window.open(url + documentMode, '_blank')
          })

          .catch(error => {
            console.error('Error saving document', error)

            let message

            switch (error.status) {
              case 0:
              case 405:
                message = 'this location is not writable'
                break
              case 401:
              case 403:
                message = 'you do not have permission to write here'
                break
              case 406:
                message = 'enter a name for your resource'
                break
              default:
                message = error.message
                break
            }

            saveAsDocument.insertAdjacentHTML('beforeend',
              '<div class="response-message"><p class="error">' +
              'Unable to save:' + message + '</p></div>'
            )
          })
      })
    },

    viewSource: function(e) {
      e.target.disabled = true;
      document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="source-view" class="do on">' + DO.C.Button.Close + '<h2>Source</h2><textarea id="source-edit" rows="24" cols="80"></textarea><p><button class="create">Update</button></p></aside>'));
      var sourceBox = document.getElementById('source-view');
      var input = document.getElementById('source-edit');
      input.value = doc.getDocument();

      sourceBox.addEventListener('click', function(e) {
        if (e.target.closest('button.create')) {
          var url = window.location.origin + window.location.pathname;
          var data = document.getElementById('source-edit').value;
          document.documentElement.innerHTML = data;
          DO.U.showDocumentInfo();
          DO.U.showDocumentMenu(e);
          DO.U.viewSource();
          document.querySelector('#document-do .resource-source').disabled = true;
        }

        if (e.target.closest('button.close')) {
          document.querySelector('#document-do .resource-source').disabled = false;
        }
      });
    },

    getBaseURLSelection: function() {
      return '<div id="base-url-selection"><label>Location of media resources:</label>\n\
      <select name="base-url">\n\
      <option id="base-url-absolute" value="base-url-absolute" selected="selected">Use references as is</option>\n\
      <option id="base-url-relative" value="base-url-relative">Copy to your storage</option>\n\
      </select>\n\
      </div>';
    },

    rewriteBaseURL: function(nodes, options) {
      options = options || {};
      if (typeof nodes === 'object' && nodes.length > 0) {
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];
          var url, ref;
          switch(node.tagName.toLowerCase()) {
            default:
              url = node.getAttribute('src');
              ref = 'src';
              break;
            case 'link':
              url = node.getAttribute('href');
              ref = 'href';
              break;
            case 'object':
              url = node.getAttribute('data');
              ref = 'data';
              break;
          }

          var s = url.split(':')[0];
          if (s != 'http' && s != 'https' && s != 'file' && s != 'data' && s != 'urn' && document.location.protocol != 'file:') {
            url = DO.U.setBaseURL(url, options);
          }
          else if (url.startsWith('http:') && node.tagName.toLowerCase()) {
            var proxyURL = ('proxyURL' in options) ? options.proxyURL : DO.C.ProxyURL
            url = proxyURL + uri.encodeString(url)
          }
          node.setAttribute(ref, url);
        };
      }

      return nodes;
    },

    setBaseURL: function(url, options) {
      options = options || {};
      var urlType = ('baseURLType' in options) ? options.baseURLType : 'base-url-absolute';

      var matches = [];
      var regexp = /(https?:\/\/([^\/]*)\/|file:\/\/\/|data:|urn:|\/\/)?(.*)/;

      matches = url.match(regexp);

      if (matches) {
        switch(urlType) {
          case 'base-url-absolute': default:
            if(matches[1] == '//' && 'iri' in options){
              url = options.iri.split(':')[0] + ':' + url;
            }
            else {
              href = ('iri' in options) ? uri.getProxyableIRI(options.iri) : document.location.href;
              url = DO.U.getBaseURL(href) + matches[3].replace(/^\//g, '');
            }
            break;
          case 'base-url-relative':
            url = matches[3].replace(/^\//g, '');
            break;
        }
      }

      return url;
    },

    getBaseURL: function(url) {
      if(typeof url === 'string') {
        url = url.substr(0, url.lastIndexOf('/') + 1);
      }

      return url;
    },

    getPathURL: function(url) {
      if(typeof url === 'string') {
        var i  = url.indexOf('?');
        if(i > -1) {
          url = url.substr(0, i);
        }
        i = url.indexOf('#');
        if(i > -1) {
          url = url.substr(0, i);
        }
      }

      return url;
    },

    copyRelativeResources: function copyRelativeResources (storageIRI, relativeNodes) {
      var ref = '';
      var baseURL = DO.U.getBaseURL(storageIRI);

      for (var i = 0; i < relativeNodes.length; i++) {
        var node = relativeNodes[i];
        switch(node.tagName.toLowerCase()) {
          default:
            ref = 'src';
            break;
          case 'link':
            ref = 'href';
            break;
          case 'object':
            ref = 'data';
            break;
        }

        var fromURL = x = node.getAttribute(ref).trim();
        var pathToFile = '';
        var s = fromURL.split(':')[0];

        if (s != 'http' && s != 'https' && s != 'file' && s != 'data' && s != 'urn' && s != 'urn') {
          if (fromURL.startsWith('//')) {
            fromURL = document.location.protocol + fromURL
            toURL = baseURL + fromURL.substr(2)
          }
          else if (fromURL.startsWith('/')) {
            pathToFile = DO.U.setBaseURL(fromURL, {'baseURLType': 'base-url-relative'});
            fromURL = document.location.origin + fromURL
            toURL = baseURL + pathToFile
          }
          else {
            pathToFile = DO.U.setBaseURL(fromURL, {'baseURLType': 'base-url-relative'});
            fromURL = DO.U.getBaseURL(document.location.href) + fromURL
            toURL = baseURL + pathToFile
          }

          fetcher.copyResource(fromURL, toURL);
        }
      };
    },

    createAttributeDateTime: function(element) {
      //Creates datetime attribute.
      //TODO: Include @data-author for the signed in user e.g., WebID or URL.
      var a = util.getDateTimeISO();

      switch(element) {
        case 'mark': case 'article':
          a = 'data-datetime="' + a + '"';
          break;
        case 'del': case 'ins':
          a = 'datetime="' + a + '"';
          break;
        default:
          a = '';
          break;
      }

      return a;
    },

    getCitation: function(i, options) {
      options = options || {};
      var iri = i;
      // if (typeof options !== 'undefined' && 'type' in options && options.type == 'doi') {
      if (i.toLowerCase().slice(0,4) !== 'http') {
//        iri = 'http://dx.doi.org/' + i.trim();
        iri = 'http://data.crossref.org/' + i.trim();
      }
      else {
        var x = iri.toLowerCase().trim().split('/');
        if (x[2] == 'doi.org' || x[2] == 'dx.doi.org') {
          var y = x[0] + '//' + x[2] + '/';
          iri = 'http://data.crossref.org/' + iri.substr(y.length, iri.length);
        }
      }
//console.log(iri);

      return fetcher.getResourceGraph(iri);
    },

    getCitationHTML: function(citationGraph, citationURI, options) {
      options = options || {};
      // var citationId = ('citationId' in options) ? options.citationId : citationURI;
      var subject = citationGraph.child(citationURI);
// console.log(citationGraph);
// console.log('citationGraph.iri().toString(): ' + citationGraph.iri().toString());
// console.log('citationGraph.toString(): ' + citationGraph.toString());
// console.log('options.citationId: ' + options.citationId);
// console.log('citationURI: ' + citationURI);
// console.log('subject.iri().toString(): ' + subject.iri().toString());

      var title = DO.U.getResourceLabel(subject);
      //FIXME: This is a stupid hack because RDFa parser is not setting the base properly.
      if(typeof title == 'undefined') {
        subject = citationGraph.child(options.citationId);

        title = DO.U.getResourceLabel(subject) || '';
      }
      title = title.replace(/ & /g, " &amp; ");
      title = (title.length > 0) ? '<cite>' + title + '</cite>, ' : '';
      var datePublished = subject.schemadatePublished || subject.dctermsissued || subject.dctermsdate || subject.schemadateCreated || subject.dctermscreated || '';
      var dateVersion = subject.schemadateModified || datePublished;
      datePublished = (datePublished) ? datePublished.substr(0,4) + ', ' : '';
      var dateAccessed = 'Accessed: ' + util.getDateTimeISO();
      var authors = [], authorList = [];
// console.log(subject);
// console.log(subject.biboauthorList);
// console.log(subject.schemaauthor);
// console.log(subject.dctermscreator);

      //XXX: FIXME: Putting this off for now because SimpleRDF is not finding the bnode for some reason in citationGraph.child(item), or at least authorItem.rdffirst (undefined)
//       if (subject.biboauthorList) {
//         var traverseRDFList = function(item) {
//           var authorItem = citationGraph.child(item);
// // console.log(authorItem);
// // console.log(authorItem.iri().toString());
// // console.log(authorItem.rdffirst);
// // console.log(authorItem.rdfrest);
//           if (authorItem.rdffirst) {
//             authorList.push(authorItem.rdffirst);
//           }
//           if (authorItem.rdfrest && authorItem.rdfrest !== 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil') {
//             traverseRDFList(authorItem.rdfrest);
//           }
//         };

//         traverseRDFList(subject.biboauthorList);
//       }
//       else
      if (subject.schemaauthor && subject.schemaauthor._array.length > 0) {
        subject.schemaauthor.forEach(function(a) {
          authorList.push(a);
        });
      }
      else if (subject.dctermscreator && subject.dctermscreator._array.length > 0) {
        subject.dctermscreator.forEach(function(a) {
          authorList.push(a);
        });
      }
      else if (subject.asactor && subject.asactor._array.length > 0) {
        subject.asactor.forEach(function(a) {
          authorList.push(a);
        });
      }
// console.log(authorList);

      if(authorList.length > 0) {
        authorList.forEach(function(authorIRI) {
          var s = subject.child(authorIRI);
          var author = auth.getAgentName(s);

          if (s.schemafamilyName && s.schemafamilyName.length > 0 && s.schemagivenName && s.schemagivenName.length > 0) {
            author = DO.U.createRefName(s.schemafamilyName, s.schemagivenName);
          }
          else if (s.foaffamilyName && s.foaffamilyName.length > 0 && s.foafgivenName && s.foafgivenName.length > 0) {
            author = DO.U.createRefName(s.foaffamilyName, s.foafgivenName);
          }

          if (author !== '') {
            authors.push(author);
          }
          else {
            authors.push(authorIRI);
          }
        });
        authors = authors.join(', ') + ': ';
      }

      var dataVersionURL;
      if (subject.memmemento) {
        dataVersionURL = subject.memmemento;
      }
      else if (subject.rellatestversion) {
        dataVersionURL = subject.rellatestversion;
      }

      if (dataVersionURL) {
        dataVersionURL = ' data-versionurl="' + dataVersionURL + '"';
      }
      var dataVersionDate;
      if (dateVersion) {
        dataVersionDate = ' data-versiondate="' + dateVersion + '"';
      }

      var content = ('content' in options && options.content.length > 0) ? options.content + ', ' : '';

      var citationReason = 'Reason: ' + DO.C.Citation[options.citationRelation];

      var citationHTML = authors + title + datePublished + content + '<a about="#' + options.refId + '"' + dataVersionDate + dataVersionURL + ' href="' + options.citationId + '" rel="schema:citation ' + options.citationRelation  + '">' + options.citationId + '</a> [' + dateAccessed + ', ' + citationReason + ']';
//console.log(citationHTML);
      return citationHTML;
    },

    createRefName: function(familyName, givenName, refType) {
      refType = refType || DO.C.DocRefType;
      switch(refType) {
        case 'LNCS': default:
          return familyName + ', ' + givenName.slice(0,1) + '.';
          break;
        case 'ACM':
          return givenName.slice(0,1) + '. ' + familyName;
          break;
        case 'fullName':
          return givenName + ' ' + familyName;
          break;
      }
    },

    highlightItems: function() {
      var highlights = document.body.querySelectorAll('*[class*="highlight-"]');
      for (var i = 0; i < highlights.length; i++) {
        highlights[i].addEventListener('mouseenter', function(e) {
          var c = e.target.getAttribute('class').split(' ')
                    .filter(function(s) { return s.startsWith('highlight-'); });
          var highlightsX = document.body.querySelectorAll('*[class~="'+ c[0] +'"]');
          for (var j = 0; j < highlightsX.length; j++) {
            highlightsX[j].classList.add('do', 'highlight');
          }
        });

        highlights[i].addEventListener('mouseleave', function(e) {
          var c = e.target.getAttribute('class');
          var c = e.target.getAttribute('class').split(' ')
                    .filter(function(s) { return s.startsWith('highlight-'); });
          var highlightsX = document.body.querySelectorAll('*[class~="'+ c[0] +'"]');
          for (var j = 0; j < highlightsX.length; j++) {
            highlightsX[j].classList.remove('do', 'highlight');
          }
        });
      }
    },

    //From http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
    hashCode: function(s){
      var hash = 0;
      if (s.length == 0) return hash;
      for (i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    },

    generateAttributeId: function(prefix, string) {
      prefix = prefix || '';

      if (string) {
        //XXX: I think we want to trim.
        string = string.trim();
        string = string.replace(/\W/g,'-');
        s1 = string.substr(0, 1);
        string = (prefix === '' && s1 == parseInt(s1)) ? 'x-' + string : prefix + string;
        return (document.getElementById(string)) ? string + '-x' : string;
      }
      else {
        return DO.U.generateUUID();
      }
    },

    // MIT license
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    generateUUID: function() {
      var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
      var s = function() {
        var d0 = Math.random()*0xffffffff|0;
        var d1 = Math.random()*0xffffffff|0;
        var d2 = Math.random()*0xffffffff|0;
        var d3 = Math.random()*0xffffffff|0;
        return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
        lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
      };
      return s();
    },

    //http://stackoverflow.com/a/25214113
    fragmentFromString: function(strHTML) {
      return document.createRange().createContextualFragment(strHTML);
    },

    SPARQLQueryURL: {
      getResourcesOfTypeWithLabel: function(sparqlEndpoint, resourceType, textInput, options) {
        options = options || {};
        var labelsPattern = '', resourcePattern = '';

        if(!('lang' in options)) {
          options['lang'] = 'en';
        }

        if ('filter' in options) {
          if(resourceType == '<http://purl.org/linked-data/cube#DataSet>' || resourceType == 'qb:DataSet'
            && 'dimensionRefAreaNotation' in options.filter) {
              var dimensionPattern, dimensionDefault = '';
              var dataSetPattern = "\n\
    [] qb:dataSet ?resource";
            if ('dimensionProperty' in options.filter) {
              dimensionPattern = " ; " + options.filter.dimensionProperty;
            }
            else {
              var dimensionDefault = " .\n\
  { SELECT DISTINCT ?propertyRefArea WHERE { ?propertyRefArea rdfs:subPropertyOf* sdmx-dimension:refArea . } }";
              dimensionPattern = " ; ?propertyRefArea ";

            }
            var notationPattern = " [ skos:notation '" + options.filter.dimensionRefAreaNotation.toUpperCase() + "' ] ."
          }
          resourcePattern = dimensionDefault + dataSetPattern + dimensionPattern + notationPattern;
        }

        labelsPattern = "\n\
  ";
        if ('optional' in options) {
          if('prefLabels' in options.optional) {
            if (options.optional.prefLabels.length == 1) {
              labelsPattern += "  ?resource " + options.optional.prefLabels[0] + " ?prefLabel .";
            }
            else {
              labelsPattern += "  VALUES ?labelProperty {";
              options.optional.prefLabels.forEach(function(property){
                labelsPattern += ' ' + property;
              });
              labelsPattern += " } ?resource ?labelProperty ?prefLabel .";
            }
          }
        }
        else {
          labelsPattern += "  ?resource rdfs:label ?prefLabel .";
        }


//  FILTER (!STRSTARTS(STR(?resource), 'http://purl.org/linked-data/sdmx/'))\n\
      var query = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\
PREFIX dcterms: <http://purl.org/dc/terms/>\n\
PREFIX qb: <http://purl.org/linked-data/cube#>\n\
PREFIX sdmx-dimension: <http://purl.org/linked-data/sdmx/2009/dimension#>\n\
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>\n\
CONSTRUCT {\n\
  ?resource skos:prefLabel ?prefLabel .\n\
}\n\
WHERE {\n\
  ?resource a " + resourceType + " ."
+ labelsPattern + "\n\
  FILTER (CONTAINS(LCASE(?prefLabel), '" + textInput + "') && (LANG(?prefLabel) = '' || LANGMATCHES(LANG(?prefLabel), '" + options.lang + "')))"
+ resourcePattern + "\n\
}";
       return sparqlEndpoint + "?query=" + uri.encodeString(query);
      },

      getObservationsWithDimension: function(sparqlEndpoint, dataset, paramDimension, options) {
        var query = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\
PREFIX dcterms: <http://purl.org/dc/terms/>\n\
PREFIX qb: <http://purl.org/linked-data/cube#>\n\
PREFIX sdmx-dimension: <http://purl.org/linked-data/sdmx/2009/dimension#>\n\
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>\n\
CONSTRUCT {\n\
  ?observation sdmx-dimension:refPeriod ?refPeriod .\n\
  ?observation sdmx-measure:obsValue ?obsValue .\n\
}\n\
WHERE {\n\
  ?observation qb:dataSet <" + dataset + "> .\n\
  " + paramDimension + "\n\
  ?propertyRefPeriod rdfs:subPropertyOf* sdmx-dimension:refPeriod .\n\
  ?observation ?propertyRefPeriod ?refPeriod .\n\
  ?propertyMeasure rdfs:subPropertyOf* sdmx-measure:obsValue .\n\
  ?observation ?propertyMeasure ?obsValue .\n\
}";

        return sparqlEndpoint + "?query=" + uri.encodeString(query);
      },
    },

    getSparkline: function(data, options) {
      options = options || {};
      if(!('cssStroke' in options)) {
        options['cssStroke'] = '#333';
      }

      var svg = '<svg height="100%" prefix="rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# rdfs: http://www.w3.org/2000/01/rdf-schema# xsd: http://www.w3.org/2001/XMLSchema# qb: http://purl.org/linked-data/cube# prov: http://www.w3.org/ns/prov# schema: http://schema.org/" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">/*<![CDATA[*/line { stroke:' + options.cssStroke + '; stroke-width:1px; } circle { stroke:#f00; fill:#f00; }/*]]>*/</style>';

      svg += DO.U.drawSparklineGraph(data, options);
      svg += '</svg>';

      return svg;
    },

    drawSparklineGraph: function(data, options) {
      options = options || {};
      if(!('cssStroke' in options)) {
        options['cssStroke'] = '#333';
      }
      var svg= '';

      var obsValue = 'http://purl.org/linked-data/sdmx/2009/measure#obsValue';
      var observation = 'http://purl.org/linked-data/cube#Observation';

      var dotSize = 1;
      var values = data.map(function(n) { return n[obsValue]; }),
        min = Math.min.apply(null, values),
        max = Math.max.apply(null, values);

      var new_max = 98;
      var new_min = 0;
      var range = new_max - new_min;

      var parts = values.map(function (v) {
        return (new_max - new_min) / (max - min) * (v - min) + new_min || 0;
      });

      var div = 100 / parts.length;
      var x1 = 0, y1 = 0, x2 = div / 2, y2 = range - parts[0];

      var lines = '';
      for (var i=0; i < parts.length; i++) {
        x1 = x2; y1 = y2;
        x2 = range * (i / parts.length) + (div / 2);
        y2 = range - parts[i];

        lines += '<a rel="rdfs:seeAlso" resource="' + data[i][observation] + '" target="_blank" xlink:href="' + data[i][observation] + '"><line' +
          ' x1="' + x1 + '%"' +
          ' x2="' + x2 + '%"' +
          ' y1="' + y1 + '%"' +
          ' y2="' + y2 + '%"' +
          ' /></a>';

        //Last data item
        if(i+1 === parts.length) {
          lines += '<a target="_blank" xlink:href="' + data[i][observation] + '"><circle' +
            ' cx="' + x2 + '%"' +
            ' cy="' + y2 + '%"' +
            ' r="' + dotSize + '"' +
            ' /></a>';
        }
      }

      var wasDerivedFrom = '';
      if(options && 'url' in options) {
        wasDerivedFrom = ' rel="prov:wasDerivedFrom" resource="' + options.url + '"';
      }
      svg += '<g' + wasDerivedFrom + '>';
      svg += '<metadata rel="schema:license" resource="https://creativecommons.org/publicdomain/zero/1.0/" />';
      if (options && 'title' in options) {
        svg += '<title property="schema:name">' + options['title'] + '</title>';
      }
      svg += lines + '</g>';

      return svg;
    },

    getTriplesFromGraph: function(url) {
      return graph.getGraph(url)
        .then(function(i){
          return i.graph();
        })
        .catch(function(error){
          // console.log(error);
          throw error;
        });
    },

    sortTriples: function(triples, options) {
      options = options || {};
      if(!('sortBy' in options)) {
        options['sortBy'] = 'object';
      }

      triples._graph.sort(function (a, b) {
        return a[options.sortBy].nominalValue.toLowerCase().localeCompare(b[options.sortBy].nominalValue.toLowerCase());
      });

      return triples;
    },

    getListHTMLFromTriples: function(triples, options) {
      options = options || {element: 'ul'};
      var elementId = ('elementId' in options) ? ' id="' + options.elementId + '"' : '';
      var elementName = ('elementId' in options) ? ' name="' + options.elementId + '"' : '';
      var elementTitle = ('elementId' in options) ? options.elementId : '';
      var items = '';
      triples.forEach(function(t){
        var s = t.subject.nominalValue;
        var o = t.object.nominalValue;
        switch(options.element) {
          case 'ol': case 'ul': default:
            items += '<li><a href="' + s + '">' + o + '</a></li>';
            break;
          case 'dl':
            items += '<dd><a href="' + s + '">' + o + '</a></dd>';
            break;
          case 'select':
            items += '<option value="' +   s + '">' + o + '</option>';
            break;
        }
      });

      switch(options.element) {
        case 'ul': default:
          return '<ul' + elementId + '>' + items + '</ul>';
        case 'ol':
          return '<ol' + elementId + '>' + items + '</ol>';
        case 'dl':
          return '<dl' + elementId + '><dt>' + elementTitle + '</dt>' + items + '</dl>';
        case 'select':
          return '<select' + elementId + elementName + '>' + items + '</select>';
      }
    },

    showAsTabs: function(id) {
      document.querySelector('#' + id + ' nav').addEventListener('click', function(e) {
        var a = e.target;
        if (a.closest('a')) {
          e.preventDefault();
          e.stopPropagation();

          var li = a.parentNode;
          if(!li.classList.contains('class')) {
            var navLi = document.querySelectorAll('#' + id + ' nav li');
            for (var i = 0; i < navLi.length; i++) {
              navLi[i].classList.remove('selected');
            }
            li.classList.add('selected');
            var figures = document.querySelectorAll('#' + id + ' > figure');
            for (var i = 0; i < figures.length; i++) {
              figures[i].classList.remove('selected');
            }
            document.querySelector('#' + id + ' > figure' + a.hash).classList.add('selected');
          }
        }
      });
    },

    getReferenceLabel: function(motivatedBy) {
      var s = '🗨';
      motivatedBy = motivatedBy || '';
      //TODO: uriToPrefix
      motivatedBy = (motivatedBy.length > 0 && motivatedBy.slice(0, 4) == 'http' && motivatedBy.indexOf('#') > -1) ? 'oa:' + motivatedBy.substr(motivatedBy.lastIndexOf('#') + 1) : motivatedBy;

      switch(motivatedBy) {
        default: break;
        case 'oa:assessing':     s = '✪'; break;
        case 'oa:bookmarking':   s = '🔖'; break;
        case 'oa:commenting':    s = '🗨'; break;
        case 'oa:describing':    s = '※'; break;
        case 'oa:highlighting':  s = '#'; break;        
        case 'oa:replying':      s = '💬'; break;
      }

      return s;
    },

    showRefs: function() {
      var refs = document.querySelectorAll('span.ref');
      for (var i = 0; i < refs.length; i++) {
// console.log(this);
        var ref = refs[i].querySelector('mark[id]');
// console.log(ref);
        if (ref) {
          var refId = ref.id;
// console.log(refId);
          var refA = refs[i].querySelectorAll('[class*=ref-] a');
// console.log(refA);
          for (var j = 0; j < refA.length; j++) {
            //XXX: Assuming this is always an internal anchor?
            var noteId = refA[j].getAttribute('href').substr(1);
// console.log(noteId);
            var refLabel = refA[j].textContent;
// console.log(refLabel);

// console.log(refId + ' ' +  refLabel + ' ' + noteId);
            DO.U.positionNote(refId, refLabel, noteId);
          }
        }
      }
    },

    getTextQuoteHTML: function(refId, exact, docRefType, options){
      options = options || {};

      var doMode = (options.do) ? ' do' : '';

      return '<span class="ref' + doMode + '" rel="schema:hasPart" resource="#' + refId + '" typeof="dctypes:Text"><mark datatype="rdf:HTML" id="'+ refId +'" property="rdf:value">' + exact + '</mark>' + docRefType + '</span>';
    },

    positionNote: function(refId, refLabel, noteId) {
      var ref = document.getElementById(refId);
      var note = document.getElementById(noteId);

      if (note.hasAttribute('style')) {
        note.removeAttribute('style');
      }

      //TODO: If there are articles already in the aside.note , the subsequent top values should come after one another
      var style = [
        'top: ' + Math.ceil(ref.parentNode.offsetTop) + 'px'
      ].join('; ');
      note.setAttribute('style', style);
    },

    positionInteraction: function(noteIRI, containerNode) {
      containerNode = containerNode || document.body;

      return fetcher.getResourceGraph(noteIRI).then(
        function(g){
          DO.U.showAnnotation(noteIRI, g, containerNode);
        });
    },

    showAnnotation: function(noteIRI, g, containerNode) {
      containerNode = containerNode || document.body;

      var documentURL = uri.stripFragmentFromString(document.location.href);

      var note = g.child(noteIRI);

      if (note.asobject && note.asobject.at(0)) {
        note = g.child(note.asobject.at(0))
      }

      var id = String(Math.abs(DO.U.hashCode(noteIRI)));
      var refId = 'r-' + id;
      var refLabel = id;

      var datetime = note.schemadatePublished || note.dctermscreated || note.aspublished;
// console.log(datetime);
      var annotatedBy = note.schemacreator || note.dctermscreator || note.asactor;
      var annotatedByIRI;
// console.log(annotatedBy);
      if (annotatedBy && annotatedBy.at(0)) {
        annotatedByIRI = annotatedBy.at(0);
// console.log(annotatedByIRI);
        annotatedBy = g.child(annotatedByIRI);
// console.log(annotatedBy);
      }
      var annotatedByName = auth.getAgentName(annotatedBy);
// console.log(annotatedByName);
      var annotatedByImage = auth.getAgentImage(annotatedBy);
// console.log(annotatedByImage);
      var annotatedByURL = annotatedBy.schemaurl || '';
      annotatedByURL = (annotatedByURL) ? annotatedByURL : undefined;

      var licenseIRI = note.schemalicense || note.dctermsrights || undefined;
// console.log(licenseIRI);

      var motivatedBy = 'oa:replying';

      var bodyText = note.schemadescription;
      if(!bodyText) {
        bodyText = note.dctermsdescription;
        if(!bodyText)  {
          bodyText = note.ascontent;
        }
      }

      var types = note.rdftype;
// console.log(types);
      var resourceTypes = [];
      types.forEach(function(type){
        resourceTypes.push(type);
// console.log(type);
      });

      if(resourceTypes.indexOf('http://www.w3.org/ns/oa#Annotation') > -1) {
        var body = g.child(note.oahasBody);
// console.log(body);
        var bodyLicenseIRI = body.schemalicense || body.dctermsrights || undefined;
// console.log(bodyLicenseIRI);
        bodyText = body.rdfvalue;
// console.log(bodyText);


        if (note.oahasTarget && !note.oahasTarget.startsWith(documentURL)) {
          return Promise.reject();
        }

        var target = g.child(note.oahasTarget);
// console.log(target);
        var targetIRI = target.iri().toString();
// console.log(targetIRI);

        var source = target.oahasSource;
// console.log(source);
// console.log(note.oamotivatedBy);

        if(note.oamotivatedBy) {
          motivatedBy = note.oamotivatedBy;
          refLabel = DO.U.getReferenceLabel(motivatedBy);
        }

        var exact, prefix, suffix;
        var selector = target.oahasSelector;
        if(selector) {
          selector = g.child(selector);
// console.log(selector);

// console.log(selector.rdftype);
// console.log(selector.rdftype._array);
          //FIXME: This is taking the first rdf:type. There could be multiple.
          var selectorTypes;
          if (selector.rdftype && selector.rdftype.at(0)) {
            selectorTypes = selector.rdftype.at(0);
          }
// console.log(selectorTypes == 'http://www.w3.org/ns/oa#FragmentSelector');
          if(selectorTypes == 'http://www.w3.org/ns/oa#TextQuoteSelector') {
            exact = selector.oaexact;
            prefix = selector.oaprefix;
            suffix = selector.oasuffix;
          }
          else if (selectorTypes == 'http://www.w3.org/ns/oa#FragmentSelector') {
            var refinedBy = g.child(selector.oarefinedBy);
// console.log(refinedBy)
            exact = refinedBy.oaexact;
            prefix = refinedBy.oaprefix;
            suffix = refinedBy.oasuffix;
// console.log(selector.rdfvalue)
            if (selector.rdfvalue && selector.rdfvalue !== '' && selector.dctermsconformsTo && selector.dctermsconformsTo.endsWith('://tools.ietf.org/html/rfc3987')) {
              var fragment = selector.rdfvalue;
              fragment = (fragment.indexOf == 0) ? uri.getFragmentFromString(fragment) : fragment;
// console.log(fragment)
              if (fragment !== '') {
                containerNode = document.querySelector('#' + selector.rdfvalue) || document;
              }
            }
          }
        }
// console.log(exact);
// console.log(prefix);
// console.log(suffix);
// console.log('----')
        var docRefType = '<sup class="ref-annotation"><a rel="cito:hasReplyFrom" href="#' + id + '" resource="' + noteIRI + '">' + refLabel + '</a></sup>';

        var containerNodeTextContent = containerNode.textContent;
        //XXX: Seems better?
        // var containerNodeTextContent = DO.U.fragmentFromString(doc.getDocument(containerNode)).textContent.trim();

//console.log(containerNodeTextContent);
// console.log(prefix + exact + suffix);
        var selectorIndex = containerNodeTextContent.indexOf(prefix + exact + suffix);
// console.log(selectorIndex);
        if (selectorIndex >= 0) {
          var selector =  {
            "prefix": prefix,
            "exact": exact,
            "suffix": suffix
          };

          var selectedParentNode = DO.U.importTextQuoteSelector(containerNode, selector, refId, docRefType, { 'do': true });

          var parentNodeWithId = selectedParentNode.closest('[id]');
          var targetIRI = (parentNodeWithId) ? documentURL + '#' + parentNodeWithId.id : documentURL;

          var noteData = {
            "type": 'article',
            "mode": "read",
            "motivatedByIRI": motivatedBy,
            "id": id,
            "refId": refId,
            "iri": noteIRI, //e.g., https://example.org/path/to/article
            "creator": {},
            "datetime": datetime,
            "target": {
              "iri": targetIRI,
              "source": source,
              "selector": {
                "exact": exact,
                "prefix": prefix,
                "suffix": suffix
              }
              //TODO: state
            },
            "body": bodyText,
            "license": {}
          }
          if (annotatedByIRI) {
            noteData.creator["iri"] = annotatedByIRI;
          }
          if (annotatedByName) {
            noteData.creator["name"] = annotatedByName;
          }
          if (annotatedByImage) {
            noteData.creator["image"] = annotatedByImage;
          }
          if (annotatedByURL) {
            noteData.creator["url"] = annotatedByURL;
          }

          if (licenseIRI) {
            noteData.license["iri"] = licenseIRI;
          }
// console.log(noteData);
          var note = DO.U.createNoteDataHTML(noteData);
          var nES = selectedParentNode.nextElementSibling;
          var asideNote = '\n\
<aside class="note do">\n\
<blockquote cite="' + noteIRI + '">'+ note + '</blockquote>\n\
</aside>\n\
';
          var asideNode = DO.U.fragmentFromString(asideNote);
          var parentSection = MediumEditor.util.getClosestTag(selectedParentNode, 'section')
          || MediumEditor.util.getClosestTag(selectedParentNode, 'div') || MediumEditor.util.getClosestTag(selectedParentNode, 'article') || MediumEditor.util.getClosestTag(selectedParentNode, 'main') || MediumEditor.util.getClosestTag(selectedParentNode, 'body');
          parentSection.appendChild(asideNode);
          //XXX: Keeping this comment around for emergency
//                selectedParentNode.parentNode.insertBefore(asideNode, selectedParentNode.nextSibling);

          if(DO.C.User.IRI) {
            var noteDelete = document.querySelector('aside.do blockquote[cite="' + noteIRI + '"] article button.delete');
            if (noteDelete) {
              noteDelete.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                fetcher.deleteResource(noteIRI)
                  .then(() => {
                    var aside = noteDelete.closest('aside.do')
                    aside.parentNode.removeChild(aside)
                    var span = document.querySelector('span[about="#' + refId + '"]')
                    span.outerHTML = span.querySelector('mark').textContent
                    // TODO: Delete notification or send delete activity
                  })
              });
            }
          }
          DO.U.positionNote(refId, refLabel, id);

          //Perhaps return something more useful?
          return noteIRI;
        }

        //XXX: Annotation without a selection
        else {
          var noteData = {
            "type": 'article',
            "mode": "read",
            "motivatedByIRI": motivatedBy,
            "id": id,
            "refId": refId,
            "refLabel": refLabel,
            "iri": noteIRI,
            "creator": {},
            "datetime": datetime,
            "target": {
              "iri": targetIRI
            },
            "body": bodyText,
            "license": {}
          };

          if (annotatedByIRI) {
            noteData.creator["iri"] = annotatedByIRI;
          }
          if (annotatedByName) {
            noteData.creator["name"] = annotatedByName;
          }
          if (annotatedByImage) {
            noteData.creator["image"] = annotatedByImage;
          }
          if (licenseIRI) {
            noteData.license["iri"] = licenseIRI;
            noteData.license["name"] = DO.C.License[noteData.license["iri"]].name;
          }
          if (datetime) {
            noteData.datetime = datetime;
          }
// console.log(noteData)
          DO.U.addInteraction(noteData);
        }
      }
      else {
        var inReplyTo, inReplyToRel;
        if (note.asinReplyTo && note.asinReplyTo.at(0)) {
          inReplyTo = note.asinReplyTo.at(0);
          inReplyToRel = 'as:inReplyTo';
        }
        else if(note.siocreplyof && note.siocreplyof.at(0)) {
          inReplyTo = note.siocreplyof.at(0);
          inReplyToRel = 'sioc:reply_of';
        }

        if(inReplyTo && inReplyTo.indexOf(window.location.origin + window.location.pathname) >= 0) {
          var noteData = {
            "type": 'article',
            "mode": "read",
            "motivatedByIRI": motivatedBy,
            "id": id,
            "refId": refId,
            "refLabel": refLabel,
            "iri": noteIRI,
            "creator": {},
            "inReplyTo": {
              'iri': inReplyTo,
              'rel': inReplyToRel
            },
            "body": bodyText,
            "license": {}
          };
          if (annotatedByIRI) {
            noteData.creator["iri"] = annotatedByIRI;
          }
          if (annotatedByName) {
            noteData.creator["name"] = annotatedByName;
          }
          if (annotatedByImage) {
            noteData.creator["image"] = annotatedByImage;
          }
          if (licenseIRI) {
            noteData.license["iri"] = licenseIRI;
          }
          if (datetime) {
            noteData.datetime = datetime;
          }
          DO.U.addInteraction(noteData);
        }
        else {
          console.log('Source is not an oa:Annotation and it is not a reply to');
        }
      }
    },

    addInteraction: function(noteData) {
      var interaction = DO.U.createNoteDataHTML(noteData);
      var interactions = document.getElementById('document-interactions');

      if(!interactions) {
        interactions = DO.U.selectArticleNode(document);
        var interactionsSection = '<section id="document-interactions"><h2>Interactions</h2><div>';
// interactionsSection += '<p class="count"><data about="" datatype="xsd:nonNegativeInteger" property="sioc:num_replies" value="' + interactionsCount + '">' + interactionsCount + '</data> interactions</p>';
        interactionsSection += '</div></section>';
        interactions.insertAdjacentHTML('beforeend', interactionsSection);
      }

      interactions = document.querySelector('#document-interactions > div');
      interactions.insertAdjacentHTML('beforeend', interaction);
    },

    getRDFaPrefixHTML: function(prefixes){
      return Object.keys(prefixes).map(function(i){ return i + ': ' + prefixes[i]; }).join(' ');
    },

    createHTML: function(title, main, options) {
      title = title || '';
      options = options || {};
      var prefix = ('prefixes' in options && Object.keys(options.prefixes).length > 0) ? ' prefix="' + DO.U.getRDFaPrefixHTML(options.prefixes) + '"' : '';

      return '<!DOCTYPE html>\n\
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">\n\
  <head>\n\
    <meta charset="utf-8" />\n\
    <title>' + title + '</title>\n\
  </head>\n\
  <body' + prefix + '>\n\
    <main>\n\
' + main + '\n\
    </main>\n\
  </body>\n\
</html>\n\
';
    },

    createActivityHTML: function(o) {
      var prefixes = ' prefix="rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# schema: http://schema.org/ oa: http://www.w3.org/ns/oa# as: https://www.w3.org/ns/activitystreams#"';

      var types = '<dt>Types</dt>'

      o.type.forEach(function (t) {
        types += '<dd><a about="" href="' + DO.C.Prefixes[t.split(':')[0]] + t.split(':')[1] + '" typeof="'+ t +'">' + t.split(':')[1] + '</a></dd>'
      })

      var asObjectTypes = ''
      if ('object' in o && 'objectTypes' in o && o.objectTypes.length > 0) {
        asObjectTypes = '<dl><dt>Types</dt>'
        o.objectTypes.forEach(function(t){
          asObjectTypes += '<dd><a about="' + o.object + '" href="' + t + '" typeof="'+ t +'">' + t + '</a></dd>'
        })
        asObjectTypes += '</dl>'
      }

      var asObjectLicense = ''
      if ('object' in o && 'objectLicense' in o && o.objectLicense.length > 0) {
        asObjectLicense = '<dl><dt>License</dt><dd><a about="' + o.object + '" href="' + o.objectLicense + '" property="schema:license">' + o.objectLicense + '</a></dd></dl>'
      }

      var asobject = ('object' in o) ? '<dt>Object</dt><dd><a href="' + o.object + '" property="as:object">' + o.object + '</a>' + asObjectTypes + asObjectLicense + '</dd>' : ''

      var asinReplyTo = ('inReplyTo' in o) ? '<dt>In reply to</dt><dd><a href="' + o.inReplyTo + '" property="as:inReplyTo">' + o.inReplyTo + '</a></dd>' : ''

      var ascontext = ('context' in o && o.context.length > 0) ? '<dt>Context</dt><dd><a href="' + o.context + '" property="as:context">' + o.context + '</a></dd>' : ''

      var astarget = ('target' in o && o.target.length > 0) ? '<dt>Target</dt><dd><a href="' + o.target + '" property="as:target">' + o.target + '</a></dd>' : ''

      var datetime = util.getDateTimeISO()
      var asupdated = '<dt>Updated</dt><dd><time datetime="' + datetime + '" datatype="xsd:dateTime" property="as:updated" content="' + datetime + '">' + datetime.substr(0,19).replace('T', ' ') + '</time></dd>'

      var assummary = ('summary' in o && o.summary.length > 0) ? '<dt>Summary</dt><dd property="as:summary" datatype="rdf:HTML">' + o.summary + '</dd>' : ''

      var ascontent = ('content' in o && o.content.length > 0) ? '<dt>Content</dt><dd property="as:content" datatype="rdf:HTML">' + o.content + '</dd>' : ''

      var asactor = (DO.C.User.IRI) ? '<dt>Actor</dt><dd><a href="' + DO.C.User.IRI + '" property="as:actor">' + DO.C.User.IRI + '</a></dd>' : ''

      var license = '<dt>License</dt><dd><a href="' + DO.C.NotificationLicense + '" property="schema:license">' + DO.C.NotificationLicense + '</a></dd>'

      var asto = ('to' in o && o.to.length > 0 && !o.to.match(/\s/g) && o.to.match(/^https?:\/\//gi)) ? '<dt>To</dt><dd><a href="' + o.to + '" property="as:to">' + o.to + '</a></dd>' : ''

      var statements = ('statements' in o) ? o.statements : ''

      var dl = [
        types,
        asobject,
        ascontext,
        astarget,
        asupdated,
        assummary,
        ascontent,
        asactor,
        license,
        asto
      ].map(function (n) { if (n !== '') { return '      ' + n + '\n' } }).join('')


      // TODO: Come up with a better title. reuse `types` e.g., Activity Created, Announced..
      var title = 'Notification'
      if(types.indexOf('as:Announce') > -1){
        title += ': Announced'
      } else if (types.indexOf('as:Create') > -1){
        title += ': Created'
      } else if (types.indexOf('as:Like') > -1){
        title += ': Liked'
      } else if (types.indexOf('as:Dislike') > -1){
        title += ': Disliked'
      } else if (types.indexOf('as:Add') > -1){
        title += ': Added'
      }

      var data = '<article'+prefixes+'>\n\
  <h1>' + title + '</h1>\n\
  <section>\n\
    <dl about="">\n\
' + dl +
'    </dl>\n\
  </section>\n\
  <section>\n\
' + statements + '\n\
  </section>\n\
</article>'

      return data
    },

    createNoteDataHTML: function(n) {
// console.log(n);
      var published = '';
      var license = '';
      var creator = '', authors = '', creatorImage = '', creatorNameIRI = '', creatorURLNameIRI = '';
      var hasTarget = '', annotationTextSelector = '', target = '';
      var heading, hX;
      var aAbout = '', aPrefix = '';
      var noteType = '';
      var body = '';
      var buttonDelete = '';
      var note = '';
      var targetLabel = '';
      var articleClass = '';
      var prefixes = ' prefix="rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# schema: http://schema.org/ dcterms: http://purl.org/dc/terms/ oa: http://www.w3.org/ns/oa# as: https://www.w3.org/ns/activitystreams#"';

      var canonicalId = n.canonical || 'urn:uuid:' + DO.U.generateUUID();

      var motivatedByIRI = n.motivatedByIRI || '';
      var motivatedByLabel = '';
      switch(motivatedByIRI) {
        case 'oa:replying': default:
          motivatedByIRI = 'oa:replying';
          motivatedByLabel = 'replies';
          targetLabel = 'In reply to';
          aAbout = ('mode' in n && n.mode == 'object') ? '#' + n.id : '';
          aPrefix = prefixes;
          break;
        case 'oa:assessing':
          motivatedByLabel = 'reviews';
          targetLabel = 'Review of';
          aAbout = ('mode' in n && n.mode == 'object') ? '#' + n.id : '';
          aPrefix = prefixes;
          break;
        case 'oa:describing':
          motivatedByLabel = 'describes';
          targetLabel = 'Describes';
          aAbout = '#' + n.id;
          break;
        case 'oa:commenting':
          motivatedByLabel = 'comments';
          targetLabel = 'Comments on';
          aAbout = '#' + n.id;
          break;
        case 'oa:bookmarking':
          motivatedByLabel = 'bookmarks';
          targetLabel = 'Bookmarked';
          aAbout = ('mode' in n && n.mode == 'object') ? '#' + n.id : '';
          aPrefix = prefixes;
          break;
      }

      switch(n.mode) {
        default:
          hX = 3;
          if ('creator' in n && 'iri' in n.creator && n.creator.iri == DO.C.User.IRI) {
            buttonDelete = '<button class="delete"><i class="fa fa-trash"></i></button>' ;
          }
          articleClass = ' class="do"';
          break;
        case 'write':
          hX = 1;
          break;
        case 'object':
          hX = 2;
          break;
      }

      var creatorName = '';
      var creatorIRI = '#agent';
      if ('creator' in n) {
        if ('image' in n.creator) {
          var img = (n.mode == 'read') ? uri.getProxyableIRI(n.creator.image) : n.creator.image;
          creatorImage = '<img alt="" height="48" rel="schema:image" src="' + img + '" width="48" /> ';
        }
        if('iri' in n.creator) {
          creatorIRI = n.creator.iri;
        }
        if('name' in n.creator) {
          creatorName = n.creator.name;
          creatorNameIRI = '<span about="' + creatorIRI + '" property="schema:name">' + creatorName + '</span>';
        }
        else {
          creatorNameIRI = DO.C.SecretAgentNames[Math.floor(Math.random() * DO.C.SecretAgentNames.length)];
        }

        creatorURLNameIRI = ('url' in n.creator) ? '<a href="' + n.creator.url + '" rel="schema:url">' + creatorNameIRI + '</a>' : '<a href="' + creatorIRI + '">' + creatorNameIRI + '</a>';

        creator = '<span about="' + creatorIRI + '" typeof="schema:Person">' + creatorImage + creatorURLNameIRI + '</span>';

        authors = '<dl class="author-name"><dt>Authors</dt><dd><span rel="schema:creator">' + creator + '</span></dd></dl>';
      }

      heading = '<h' + hX + ' property="schema:name">' + creatorName + ' <span rel="oa:motivatedBy" resource="' + motivatedByIRI + '">' + motivatedByLabel + '</span></h' + hX + '>';

      if ('datetime' in n && typeof n.datetime !== 'undefined'){
        var time = '<time datetime="' + n.datetime + '" datatype="xsd:dateTime" property="schema:datePublished" content="' + n.datetime + '">' + n.datetime.substr(0,19).replace('T', ' ') + '</time>';
        var timeLinked = ('iri' in n) ? '<a href="' + n.iri + '">' + time + '</a>' : time;
        published = '<dl class="published"><dt>Published</dt><dd>' + timeLinked + '</dd></dl>';
      }

      if (n.license && 'iri' in n.license) {
        license = DO.U.createLicenseHTML(n.license);
      }

      switch(n.type) {
        case 'article': case 'note': case 'bookmark': case 'approve': case 'disapprove': case 'specificity':
          if (typeof n.target !== 'undefined' || typeof n.inReplyTo !== 'undefined') { //note, annotation, reply
            //FIXME: Could resourceIRI be a fragment URI or *make sure* it is the document URL without the fragment?
            //TODO: Use n.target.iri?

            if (typeof n.body !== 'undefined') {
              if(typeof n.body === 'object' && 'purpose' in n.body) {
                if ('describing' in n.body.purpose && 'text' in n.body.purpose.describing) {
                  body += '<section id="note-' + n.id + '" rel="oa:hasBody" resource="#note-' + n.id + '"><h' + (hX+1) + ' property="schema:name" rel="oa:hasPurpose" resource="oa:describing">Note</h' + (hX+1) + '><div datatype="rdf:HTML" property="rdf:value schema:description" resource="#note-' + n.id + '" typeof="oa:TextualBody">' + n.body.purpose.describing.text + '</div></section>';
                }
                if ('tagging' in n.body.purpose && 'text' in n.body.purpose.tagging) {
                  var tagsArray = [];
                  n.body.purpose.tagging.text.split(',').forEach(function(i){
                    var tag = DO.U.htmlEntities(i.trim());
                    if(tag.length > 0) {
                      tagsArray.push(tag);
                    }
                  });
                  if (tagsArray.length > 0){
                    tagsArray = util.uniqueArray(tagsArray);

                    body += '<dl id="tags" class="tags"><dt>Tags</dt><dd><ul rel="oa:hasBody">';
                    tagsArray.forEach(function(i){
                      body += '<li about="#tag-' + DO.U.generateAttributeId(null, i) + '" typeof="oa:TextualBody" property="rdf:value" rel="oa:hasPurpose" resource="oa:tagging" datatype="rdf:HTML">' + i + '</li>';
                    })
                    body += '</ul></dd></dl>';
                  }
                }

              }
              else if (n.body.length > 0) {
                if (n.license && 'iri' in n.license) {
                  license = DO.U.createLicenseHTML(n.license, {rel:'dcterms:rights', label:'Rights'});
                }

                body += '<section id="note-' + n.id + '" rel="oa:hasBody" resource="#note-' + n.id + '"><h' + (hX+1) + ' property="schema:name">Note</h' + (hX+1) + '>' + license + '<div datatype="rdf:HTML" property="rdf:value schema:description" resource="#note-' + n.id + '" typeof="oa:TextualBody">' + n.body + '</div></section>';
              }
            }

            var targetIRI = '';
            var targetRelation = 'oa:hasTarget';
            if (typeof n.target !== 'undefined' && 'iri' in n.target) {
              targetIRI = n.target.iri;
              var targetIRIFragment = uri.getFragmentFromString(n.target.iri);
              //TODO: Handle when there is no fragment
              if (typeof n.target.selector !== 'undefined') {
                annotationTextSelector = '<div rel="oa:hasSelector" resource="#fragment-selector" typeof="oa:FragmentSelector"><dl class="conformsto"><dt>Fragment selector conforms to</dt><dd><a content="' + targetIRIFragment + '" lang="" property="rdf:value" rel="dcterms:conformsTo" resource="https://tools.ietf.org/html/rfc3987" xml:lang="">RFC 3987</a></dd></dl><dl rel="oa:refinedBy" resource="#text-quote-selector" typeof="oa:TextQuoteSelector"><dt>Refined by</dt><dd><span lang="en" property="oa:prefix" xml:lang="en">' + n.target.selector.prefix + '</span><mark lang="en" property="oa:exact" xml:lang="en">' + n.target.selector.exact + '</mark><span lang="en" property="oa:suffix" xml:lang="en">' + n.target.selector.suffix + '</span></dd></dl></div>';
              }
            }
            else if(typeof n.inReplyTo !== 'undefined' && 'iri' in n.inReplyTo) {
              targetIRI = n.inReplyTo.iri;
              targetRelation = ('rel' in n.inReplyTo) ? n.inReplyTo.rel : 'as:inReplyTo';
              // TODO: pass document title and maybe author so they can be displayed on the reply too.
            }

            hasTarget = '<a href="' + targetIRI + '" rel="' + targetRelation + '">' + targetLabel + '</a>';
            if (typeof n.target !== 'undefined' && typeof n.target.source !== 'undefined') {
              hasTarget += ' (<a about="' + n.target.iri + '" href="' + n.target.source +'" rel="oa:hasSource" typeof="oa:SpecificResource">part of</a>)';
            }

            target ='<dl class="target"><dt>' + hasTarget + '</dt>';
            if (typeof n.target !== 'undefined' && typeof n.target.selector !== 'undefined') {
              target += '<dd><blockquote about="' + targetIRI + '" cite="' + targetIRI + '">' + annotationTextSelector + '</blockquote></dd>';
            }
            target += '</dl>';

            target += '<dl class="renderedvia"><dt>Rendered via</dt><dd><a about="' + targetIRI + '" href="https://dokie.li/" rel="oa:renderedVia">dokieli</a></dd></dl>';

            var canonical = '<dl class="canonical"><dt>Canonical</dt><dd rel="oa:canonical" resource="' + canonicalId + '">' + canonicalId + '</dd></dl>';

            note = '<article about="' + aAbout + '" id="' + n.id + '" typeof="oa:Annotation' + noteType + '"' + aPrefix + articleClass + '>'+buttonDelete+'\n\
  ' + heading + '\n\
  ' + authors + '\n\
  ' + published + '\n\
  ' + license + '\n\
  ' + canonical + '\n\
  ' + target + '\n\
  ' + body + '\n\
</article>';
          }
          break;

        case 'ref-footnote':
          var citationURL = (typeof n.citationURL !== 'undefined' && n.citationURL != '') ? '<a href="' + n.citationURL + '" rel="rdfs:seeAlso">' + n.citationURL + '</a>' : '';
          var body = (typeof n.body !== 'undefined' && n.body != '') ? ((citationURL) ? ', ' + n.body : n.body) : '';

          note = '\n\
<dl about="#' + n.id +'" id="' + n.id +'" typeof="oa:Annotation">\n\
  <dt><a href="#' + n.refId + '" rel="oa:hasTarget">' + n.refLabel + '</a><meta rel="oa:motivation" resource="' + motivatedByIRI + '" /></dt>\n\
  <dd rel="oa:hasBody" resource="#n-' + n.id + '"><div datatype="rdf:HTML" property="rdf:value" resource="#n-' + n.id + '" typeof="oa:TextualBody">' + citationURL + body + '</div></dd>\n\
</dl>\n\
';
          break;

        default:
          break;
      }

      return note;
    },

    createLicenseHTML: function(n, options) {
      var license = '';
      var rel = (options && options.rel) ? options.rel : 'schema:license';
      var label = (options && options.label) ? options.label : 'License';

      if (typeof n.iri !== 'undefined') {
        license = '<dl class="' + label.toLowerCase() + '"><dt>' + label + '</dt><dd>';
        if('name' in n) {
          var title = ('description' in n) ? ' title="' + n.description + '"' : '';
          license += '<a href="' + n.iri + '" rel="' + rel + '"' + title + '>' + n.name + '</a>';
        }
        else {
          var licenseName = n.iri, licenseDescription = n.iri;
          if (n.iri in DO.C.License) {
            licenseName = DO.C.License[n.iri].name;
            licenseDescription = DO.C.License[n.iri].description;
          }
          license += '<a href="' + n.iri + '" rel="' + rel + '" title="' + licenseDescription + '">' + licenseName + '</a>';
        }
        license += '</dd></dl>';
      }

      return license;
    },

    createRDFaHTML: function(r, mode) {
      var s = '', about = '', property = '', rel = '', resource = '', href = '', content = '', langDatatype = '', typeOf = '', idValue = '', id = '';

      if ('rel' in r && r.rel != '') {
        rel = ' rel="' + r.rel + '"';
      }

      if ('href' in r && r.href != '') {
        href = ' href="' + r.href + '"';
      }

      if(mode == 'expanded') {
        idValue = DO.U.generateAttributeId();
        id = ' id="' + idValue + '"';

        if ('about' in r && r.about != '') {
          about = ' about="' + r.about + '"';
        }
        else {
          about = ' about="#' + idValue + '"';
        }

        if ('property' in r && r.property != '') {
          property = ' property="' + r.property + '"';
        }
        else {
          //TODO: Figure out how to use user's preferred vocabulary.
          property = ' property="rdfs:label"';
        }

        if ('resource' in r && r.resource != '') {
          resource = ' resource="' + r.resource + '"';
        }

        if ('content' in r && r.content != '') {
          content = ' content="' + r.content + '"';
        }

        if ('lang' in r && r.lang != '') {
          langDatatype = ' xml:lang="' + r.lang + '" lang="' + r.lang + '"';
        }
        else {
          if ('datatype' in r && r.datatype != '') {
            langDatatype = ' datatype="' + r.datatype + '"';
          }
        }

        if ('typeOf' in r && r.typeOf != '') {
          typeOf = ' typeof="' + r.typeOf + '"';
        }
      }

      var element = ('datatype' in r && r.datatype == 'xsd:dateTime') ? 'time' : ((href == '') ? 'span' : 'a');
      var textContent = r.textContent || r.href || '';

      s = '<' + element + about + content + href + id + langDatatype + property + rel + resource + typeOf + '>' + textContent + '</' + element + '>';

      return s;
    },

    getAnnotationLocationHTML: function() {
      var s = '', inputs = [], checked = '';
      if(typeof DO.C.AnnotationService !== 'undefined') {
        if (DO.C.User.Storage && DO.C.User.Storage.length > 0 || DO.C.User.Outbox && DO.C.User.Outbox.length > 0) {
          if (DO.C.User.UI && DO.C.User.UI['annotationLocationService'] && DO.C.User.UI.annotationLocationService['checked']) {
            checked = ' checked="checked"';
          }
        }
        else {
          checked = ' checked="checked" disabled="disabled"';
        }

        inputs.push('<input type="checkbox" id="annotation-location-service" name="annotation-location-service"' + checked + ' /><label for="annotation-location-service">Annotation service</label>');
      }

      checked = ' checked="checked"';
      if(DO.C.User.Storage && DO.C.User.Storage.length > 0 || DO.C.User.Outbox && DO.C.User.Outbox.length > 0) {
        if (DO.C.User.UI && DO.C.User.UI['annotationLocationPersonalStorage'] && !DO.C.User.UI.annotationLocationPersonalStorage['checked']) {
            checked = '';
        }

        inputs.push('<input type="checkbox" id="annotation-location-personal-storage" name="annotation-location-personal-storage"' + checked + ' /><label for="annotation-location-personal-storage">Personal storage</label>');
      }
      s = 'Store at: ' + inputs.join('');
      return s;
    },

    getPublicationStatusOptionsHTML: function(options) {
      options = options || {};
      var s = '', selectedIRI = '';

      if ('selected' in options) {
        selectedIRI = options.selected;
        if (selectedIRI == '') {
          s += '<option selected="selected" value="">Choose a publication status</option>';
        }
      }
      else {
        selectedIRI = DO.C.Vocab['psodraft']['@id'];
      }

      Object.keys(DO.C.PublicationStatus).forEach(function(iri){
        var selected = (iri == selectedIRI) ? ' selected="selected"' : '';
        s += '<option value="' + iri + '" title="' + DO.C.PublicationStatus[iri].description  + '"' + selected + '>' + DO.C.PublicationStatus[iri].name  + '</option>';
      })

      return s;
    },

    getLicenseOptionsHTML: function(options) {
      options = options || {};
      var s = '', selectedIRI = '';

      if ('selected' in options) {
        selectedIRI = options.selected;
        if (selectedIRI == '') {
          s += '<option selected="selected" value="">Choose a license</option>';
        }
      }
      else if(typeof DO.C.User.UI.License !== 'undefined') {
        selectedIRI = DO.C.User.UI.License;
      }
      else {
        selectedIRI = 'https://creativecommons.org/licenses/by/4.0/';
      }

      Object.keys(DO.C.License).forEach(function(iri){
        if(iri != 'NoLicense') {
          var selected = (iri == selectedIRI) ? ' selected="selected"' : '';
          s += '<option value="' + iri + '" title="' + DO.C.License[iri].description  + '"' + selected + '>' + DO.C.License[iri].name  + '</option>';
        }
      })

      return s;
    },

    getCitationOptionsHTML: function(type) {
      var type = type || 'cites';

      var s = '';
      Object.keys(DO.C.Citation).forEach(function(iri){
        s += '<option value="' + iri + '">' + DO.C.Citation[iri]  + '</option>';
      })

      return s;
    },

    initMath: function(config) {
      if (!DO.C.MathAvailable) { return; }

      config = config || {
        skipTags: ["script","noscript","style","textarea","pre","code", "math"],
        ignoreClass: "equation",
        MathML: {
          useMathMLspacing: true
        },
        tex2jax: {
          inlineMath: [["$","$"],["\\(","\\)"]],
          processEscapes: true
        },
        asciimath2jax: {
          delimiters: [['$','$'], ['`','`']]
        }
      }

      MathJax.Hub.Config(config);

      MathJax.Hub.Register.StartupHook("End Jax",function () {
        var BROWSER = MathJax.Hub.Browser;
        var jax = "SVG";
        if (BROWSER.isMSIE && BROWSER.hasMathPlayer) jax = "NativeMML";
        if (BROWSER.isFirefox) jax = "NativeMML";
        if (BROWSER.isSafari && BROWSER.versionAtLeast("5.0")) jax = "NativeMML";

        MathJax.Hub.setRenderer(jax);
      });
    },

    setDocumentRelation: function(rootNode, data, options) {
      rootNode = rootNode || document;
      if(!data || !options) { return; }

      var h = [];

      var dl = rootNode.querySelector('#' + options.id);

      data.forEach(function(d){
        var documentRelation = '<dd>' + DO.U.createRDFaHTML(d) + '</dd>';

        if(dl) {
          if (DO.C.DocumentItems.indexOf(options.id) > -1) {
            dd = dl.querySelector('dd');
            dl.removeChild(dd);
          }
          else {
            var relation = dl.querySelector('[rel="' + d.rel +  '"][href="' + d.href  + '"]');

            if(relation) {
              dd = relation.closest('dd');
              if(dd) {
                dl.removeChild(dd);
              }
            }
          }
          dl.insertAdjacentHTML('beforeend', documentRelation);
        }
        else {
          h.push(documentRelation);
        }
      });

      if(h.length > 0) {
        var html = '<dl id="' + options.id + '"><dt>' + options.title + '</dt>' + h.join('') + '</dl>';
        rootNode = DO.U.insertDocumentLevelHTML(rootNode, html, { 'id': options.id });
      }

      return rootNode;
    },

    setEditSelections: function(options) {
      var options = options || {};

      if (!('datetime' in options)) {
        options['datetime'] = new Date();
      }

      var documentLicense = 'document-license';
      var dLS = document.querySelector('#' + documentLicense + ' option:checked');

      if (dLS) {
        var licenseIRI = dLS.value;

        var dl = dLS.closest('#' + documentLicense);
        dl.removeAttribute('contenteditable');

        if(licenseIRI == '') {
          dl.parentNode.removeChild(dl);
        }
        else {
          dl.removeAttribute('class');
          var dd = dLS.closest('dd');
          dd.parentNode.removeChild(dd);
          dd = '<dd><a href="' + licenseIRI+ '" rel="schema:license" title="' + DO.C.License[licenseIRI].description + '">' + DO.C.License[licenseIRI].name + '</a></dd>';
          dl.insertAdjacentHTML('beforeend', dd);
        }
      }


      var documentStatus = 'document-status';
      var dLS = document.querySelector('#' + documentStatus + ' option:checked');

      if (dLS) {
        var statusIRI = dLS.value;

        var dl = dLS.closest('#' + documentStatus);
        dl.removeAttribute('contenteditable');

        if(statusIRI == '') {
          dl.parentNode.removeChild(dl);
        }
        else {
          dl.removeAttribute('class');
          var dd = dLS.closest('dd');
          dd.parentNode.removeChild(dd);
          dd = '<dd prefix="pso: http://purl.org/spar/pso/" rel="pso:holdsStatusInTime" resource="#' + DO.U.generateAttributeId() + '"><span rel="pso:withStatus" resource="' + statusIRI  + '" typeof="pso:PublicationStatus">' + DO.C.PublicationStatus[statusIRI].name + '</span></dd>';

          dl.insertAdjacentHTML('beforeend', dd);

          if (statusIRI == 'http://purl.org/spar/pso/published') {
            DO.U.setDate(document, { 'id': 'document-published', 'property': 'schema:datePublished', 'title': 'Published', 'datetime': options.datetime });
          }
        }
      }
    },

    setDate: function(rootNode, options) {
      rootNode = rootNode || document;
      options = options || {};

      var title = ('title' in options) ? options.title : 'Created';

      var id = (options.id) ? options.id : 'document-' + title.toLowerCase().replace(/\W/g, '-');

      var node = ('property' in options) ? rootNode.querySelector('#' + id + ' [property="' + options.property + '"]') : rootNode.querySelector('#' + id + ' time');

      if(node) {
        var datetime = ('datetime' in options) ? options.datetime.toISOString() : util.getDateTimeISO();

        if(node.getAttribute('datetime')) {
          node.setAttribute('datetime', datetime);
        }
        if(node.getAttribute('content')) {
          node.setAttribute('content', datetime);
        }
        node.textContent = datetime.substr(0, datetime.indexOf('T'));
      }
      else {
        rootNode = DO.U.insertDocumentLevelHTML(rootNode, DO.U.createDateHTML(options), { 'id': id });
      }

      return rootNode;
    },

    createDateHTML: function(options) {
      options = options || {};

      var title = ('title' in options) ? options.title : 'Created';

      var id = ('id' in options && options.id.length > 0) ? ' id="' + options.id + '"' : ' id="document-' + title.toLowerCase().replace(/\W/g, '-') + '"';

      var c = ('class' in options && options.class.length > 0) ? ' class="' + options.class + '"' : '';

      var datetime = ('datetime' in options) ? options.datetime.toISOString() : util.getDateTimeISO();
      var datetimeLabel = datetime.substr(0, datetime.indexOf('T'));

      var time = ('property' in options)
        ? '<time content="' + datetime + '" datatype="xsd:dateTime" datetime="' + datetime + '" property="' + options.property + '">' + datetimeLabel + '</time>'
        : '<time datetime="' + datetime + '">' + datetimeLabel + '</time>';

      var date = '        <dl'+c+id+'>\n\
          <dt>' + title + '</dt>\n\
          <dd>' + time + '</dd>\n\
        </dl>\n\
';

      return date;
    },

    getResourceInfo: function(data, options) {
      data = data || doc.getDocument();

      var info = {
        'state': DO.C.Vocab['ldpRDFSource']['@id'],
        'profile': DO.C.Vocab['ldpRDFSource']['@id']
      };

      options = options || {};

      options['contentType'] = ('contentType' in options) ? options.contentType : 'text/html';
      options['subjectURI'] = ('subjectURI' in options) ? options.subjectURI : uri.stripFragmentFromString(document.location.href);

      return graph.getGraphFromData(data, options).then(
        function(i){
          var s = SimpleRDF(DO.C.Vocab, options['subjectURI'], i, ld.store).child(options['subjectURI']);
// console.log(s);

          info['rdftype'] = s.rdftype._array;
          info['profile'] = DO.C.Vocab['ldpRDFSource']['@id'];

          //Check if the resource is immutable
          s.rdftype.forEach(function(resource) {
            if (resource == DO.C.Vocab['ldpImmutableResource']['@id']) {
              info['state'] = DO.C.Vocab['ldpImmutableResource']['@id'];
            }
          });

          if (s.reloriginal) {
            info['state'] = DO.C.Vocab['ldpImmutableResource']['@id'];
            info['original'] = s.memoriginal;

            if (s.reloriginal == options['subjectURI']) {
              //URI-R (The Original Resource is a Fixed Resource)

              info['profile'] = DO.C.Vocab['memOriginalResource']['@id'];
            }
            else {
              //URI-M
  
              info['profile'] = DO.C.Vocab['memMemento']['@id'];
            }
          }

          if (s.memmemento) {
            //URI-R

            info['profile'] = DO.C.Vocab['memOriginalResource']['@id'];
            info['memento'] = s.memmemento;
          }

          if(s.memoriginal && s.memmemento && s.memoriginal != s.memmemento) {
            //URI-M (Memento without a TimeGate)

            info['profile'] = DO.C.Vocab['memMemento']['@id'];
            info['original'] = s.memoriginal;
            info['memento'] = s.memmement;
          }

          if(s.rellatestversion) {
            info['latest-version'] = s.rellatestversion;
          }

          if(s.relpredecessorversion) {
            info['predecessor-version'] = s.relpredecessorversion;
          }

          if(s.memtimemap) {
            info['timemap'] = s.memtimemap;
          }

          if(s.memtimegate) {
            info['timegate'] = s.memtimegate;
          }

// console.log(info);

          if(!DO.C.OriginalResourceInfo || ('mode' in options && options.mode == 'update' )) {
            DO.C['OriginalResourceInfo'] = info;
          }

          DO.C['ResourceInfo'] = info;

          return info;
      });
    },

    Editor: {
      disableEditor: function(e) {
    //    _mediumEditors[1].destroy();
        DO.C.EditorEnabled = false;
        document.removeEventListener('click', DO.U.updateDocumentTitle);
        return DO.U.Editor.MediumEditor.destroy();
      },

      enableEditor: function(editorMode, e, selector) {
        if (typeof DO.U.Editor.MediumEditor !== 'undefined') {
          DO.U.Editor.disableEditor();
        }

        if (!document.getElementById('document-editor')) {
          document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="document-editor" class="do"></aside>'))
        }

        var editorOptions = {
          author: {
            id: 'author',
            elementsContainer: document.getElementById('document-editor'),
            placeholder: {
              text: ["Make it so!", "This is not a Paper", "Cogito Ergo Sum", "Do One Thing and Do It Well", "Free Your Mind", "Do or Do Not"][Math.floor(Math.random() * 6)]
            },
            disableDoubleReturn: true,
            paste: {
              forcePlainText: false,
              cleanPastedHTML: true,
              cleanReplacements: [],
              cleanAttrs: ['class', 'style', 'dir'],
              cleanTags: ['area', 'basefont', 'br', 'font', 'hr', 'isindex', 'link', 'script', 'style', 'wbr']
            },
            buttonLabels: DO.C.Editor.ButtonLabelType,
            toolbar: {
              buttons: ['h2', 'h3', 'h4', 'em', 'strong', 'orderedlist', 'unorderedlist', 'code', 'pre', 'image', 'anchor', 'q', 'sparkline', 'rdfa', 'cite', 'note'],
              diffLeft: 0,
              diffTop: -10,
              allowMultiParagraphSelection: false
            },
            anchorPreview: false,
            extensions: {
              'h2': new DO.U.Editor.Button({action:'h2', label:'h2'}),
              'h3': new DO.U.Editor.Button({action:'h3', label:'h3'}),
              'h4': new DO.U.Editor.Button({action:'h4', label:'h4'}),
              'em': new DO.U.Editor.Button({action:'em', label:'em'}),
              'strong': new DO.U.Editor.Button({action:'strong', label:'strong'}),
              'code': new DO.U.Editor.Button({action:'code', label:'code'}),
              'q': new DO.U.Editor.Button({action:'q', label:'q'}),
              'sparkline': new DO.U.Editor.Note({action:'sparkline', label:'sparkline'}),
              'rdfa': new DO.U.Editor.Note({action:'rdfa', label:'rdfa'}),
              'cite': new DO.U.Editor.Note({action:'cite', label:'cite'}),
              'note': new DO.U.Editor.Note({action:'note', label:'note'})
            }
          },

          social: {
            id: 'social',
            elementsContainer: document.getElementById('document-editor'),
            buttonLabels: DO.C.Editor.ButtonLabelType,
            toolbar: {
              buttons: ['selector', 'share', 'approve', 'bookmark', 'note'],
              allowMultiParagraphSelection: false
            },
            disableEditing: true,
            anchorPreview: false,
            extensions: {
              'selector': new DO.U.Editor.Note({action:'selector', label:'selector'}),
              'note': new DO.U.Editor.Note({action:'article', label:'note'}),
              'bookmark': new DO.U.Editor.Note({action:'bookmark', label:'bookmark'}),
              'share': new DO.U.Editor.Note({action:'share', label:'share'}),
              'approve': new DO.U.Editor.Note({action:'approve', label:'approve'})
            }
          },

          review: {
            id: 'review',
            elementsContainer: document.getElementById('document-editor'),
            buttonLabels: DO.C.Editor.ButtonLabelType,
            toolbar: {
              buttons: ['approve', 'disapprove', 'specificity'],
              allowMultiParagraphSelection: false
            },
            disableEditing: true,
            anchorPreview: false,
            extensions: {
              'approve': new DO.U.Editor.Note({action:'approve', label:'approve'}),
              'disapprove': new DO.U.Editor.Note({action:'disapprove', label:'disapprove'}),
              'specificity': new DO.U.Editor.Note({action:'specificity', label:'specificity'})
            }
          }
        };

        if('MathJax' in window) {
          editorOptions.author.extensions['math'] = new DO.U.Editor.Button({action:'math', label:'math'});
          editorOptions.author.toolbar.buttons.splice(7, 0, 'math');
        }

        if('MediumEditorTable' in window) {
          editorOptions.author.extensions['table'] = new MediumEditorTable();
          editorOptions.author.toolbar.buttons.splice(10, 0, 'table');
        }

        var eNodes = selector || DO.U.selectArticleNode(document);
        var eOptions = editorOptions[editorMode];
        DO.C.User.Role = editorMode;

        if (typeof MediumEditor !== 'undefined') {
          DO.U.Editor.MediumEditor = new MediumEditor(eNodes, eOptions);
          DO.C.EditorEnabled = true;

          if (e && e.target.closest('button.editor-enable')) {
            DO.C.ContentEditable = true;
            document.addEventListener('click', DO.U.updateDocumentTitle);

            var documentLicense = 'document-license';
            var license = document.getElementById(documentLicense);
            if(!license) {
              var dl = '        <dl class="do" id="' + documentLicense + '"><dt>License</dt><dd><select contenteditable="false" name="license">' + DO.U.getLicenseOptionsHTML({ 'selected': '' }) + '</select></dd></dl>';
              DO.U.insertDocumentLevelHTML(document, dl, { 'id': documentLicense });

              var dLS = document.querySelector('#' + documentLicense + ' select');
              dLS.addEventListener('change', function(e){
                dLS.querySelectorAll('option').forEach(function(o){
                  o.removeAttribute('selected');
                });
                dLS.querySelector('option[value="' + e.target.value + '"]').setAttribute('selected', 'selected');
              });
            }

            var documentStatus = 'document-status';
            var status = document.getElementById(documentStatus);
            if(!status) {
              var dl = '        <dl class="do" id="' + documentStatus + '"><dt>Document Status</dt><dd><select contenteditable="false" name="status">' + DO.U.getPublicationStatusOptionsHTML({ 'selected': '' }) + '</select></dd></dl>';
              DO.U.insertDocumentLevelHTML(document, dl, { 'id': documentStatus });

              var dSS = document.querySelector('#' + documentStatus + ' select');
              dSS.addEventListener('change', function(e){
                dSS.querySelectorAll('option').forEach(function(o){
                  o.removeAttribute('selected');
                });
                dSS.querySelector('option[value="' + e.target.value + '"]').setAttribute('selected', 'selected');
              });
            }

          }
          else if (e && (e.target.closest('button.editor-disable') || e.target.closest('button.review-enable'))) {
            DO.C.ContentEditable = false;

            DO.U.setEditSelections();
          }

          document.querySelectorAll('.do').forEach(function(node){
            node.setAttribute('contenteditable', 'false');
          })

          return DO.U.Editor.MediumEditor;
        }
      },

      Button: (function () {
        if (typeof MediumEditor !== 'undefined') {
          return MediumEditor.extensions.button.extend({
            init: function () {
              this.name = this.label;
              this.action = this.action;
              this.aria = this.label;
              this.tagNames = [this.action];
              this.useQueryState = true;
              this.contentDefault = '<b>' + this.label + '</b>';

              switch(this.action) {
                case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': this.contentFA = '<i class="fa fa-header">' + parseInt(this.action.slice(-1)) + '</i>'; break;
                case 'em': this.contentFA = '<i class="fa fa-italic"></i>'; break;
                case 'strong': this.contentFA = '<i class="fa fa-bold"></i>'; break;
                case 'q': this.contentFA = '<i class="fa fa-quote-right"></i>'; break;
                case 'math': this.contentFA = '<i class="fa fa-calculator"></i>'; break;
                default: break;
              }

              this.button = this.createButton();
              this.on(this.button, 'click', this.handleClick.bind(this));

              //TODO: Listen to section hX changes and update section @id and span @class do.fragment
            },

            // getButton: function() {
            //   console.log('DO.U.Editor.Button.Note.getButton()');
            //   return this.button;
            // },

            handleClick: function(event) { //, editable
        //console.log('DO.U.Editor.Button.handleClick()');
// console.log(this);
              event.preventDefault();
              event.stopPropagation();

              var action = this.getAction();
              var tagNames = this.getTagNames();
              var button = this.getButton();

              if (this.isActive()) {
                return this.base.execAction('removeFormat');
              }
              else {
                var datetime = ' ' + DO.U.createAttributeDateTime(this.action);

                this.base.selectedDocument = this.document;
                this.base.selection = MediumEditor.selection.getSelectionHtml(this.base.selectedDocument);
                //.replace(DO.C.Editor.regexEmptyHTMLTags, '');
// console.log('this.base.selection:');
// console.log(this.base.selection);

                var selectedParentElement = this.base.getSelectedParentElement();
// console.log('getSelectedParentElement:');
// console.log(selectedParentElement);
                var parentSection = MediumEditor.util.getClosestTag(selectedParentElement, 'section');
// console.log(parentSection);

                //XXX: DO NOT REMOVE. Saving the selection should be before inserting/updating HTML.
                this.base.saveSelection();

                switch(this.action) {
                  case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
                    //XXX: Which heading level are we at?
                    var parentSectionHeading = '';
                    for (var i = 0; i < parentSection.childNodes.length; i++) {
                      parentSectionHeading = parentSection.childNodes[i].nodeName.toLowerCase();
                      if(DO.C.Editor.headings.indexOf(parentSectionHeading) > 0) {
// console.log(parentSectionHeading);
                        break;
                      }
                    }
                    var pSH = parseInt(parentSectionHeading.slice(-1));

                    //XXX: Which heading level is the action?
                    var cSH = parseInt(this.action.slice(-1));
// console.log("parentH: " + pSH);
// console.log("currentH: " + cSH);
// console.log(cSH-pSH);

                    var closePreviousSections = '';
                    // if (cSH > pSH) {}
                    for (i = 0; i <= (pSH-cSH); i++) {
                      console.log("i: " + i);
                      closePreviousSections += '</div></section>';
                    }
// console.log(closePreviousSections);
// console.log(this.base.selection);
// var doc = this.document;
                    var selection = window.getSelection();
// console.log(this.base.selection);
// console.log(selection);

                    if (selection.rangeCount) {
                      range = selection.getRangeAt(0);
                      parent = selectedParentElement;

// console.log(range);
                      //Section
                      var sectionId = DO.U.generateAttributeId(null, this.base.selection);
                      var section = document.createElement('section');
                      section.id = sectionId;
                      section.setAttribute('rel', 'schema:hasPart');
                      section.setAttribute('resource', '#' + sectionId);
// console.log(section);


                      //Heading
                      var heading = document.createElement(tagNames[0]);
                      heading.setAttribute('property', 'schema:name');
                      heading.innerHTML = this.base.selection;
// console.log(heading);
// console.log(selection);


                      var divDescription = parentSection.getElementsByTagName('div')[0];
// console.log(divDescription);
// console.log(divDescription.innerHTML);
// console.log(divDescription.childNodes);
// console.log(divDescription.length);
// console.log(selectedParentElement);
// console.log(selectedParentElement.childNodes);
// console.log(selectedParentElement.lastChild);
// console.log(selectedParentElement.lastChild.length);

                      r = selection.getRangeAt(0);
// console.log(r);
// console.log(r.startContainer);
// console.log(r.startOffset);
// console.log(r.endOffset);
                      //Remaining nodes
                      var r = document.createRange();
                      r.setStart(selection.focusNode, selection.focusOffset);
                      r.setEnd(selectedParentElement.lastChild, selectedParentElement.lastChild.length);
// console.log(r.commonAncestorContainer.nodeType);

// console.log(r.startContainer);
// console.log(r.endContainer);
// console.log(selection.anchorNode);
// selection.removeAllRanges(); //XXX: is this doing anything?
// selection.addRange(r);

// console.log(selection.anchorNode);
                      var fragment = r.extractContents();
// console.log(fragment);
// console.log(selection);
// r = selection.getRangeAt(0);
// console.log(r);
// console.log(r.startContainer);
// console.log(r.startOffset);
// console.log(r.endOffset);
                      if (fragment.firstChild.nodeType === 3) {
                        //TODO: trim only if there is one child which is a textnode
                        // fragment.firstChild.nodeValue = fragment.firstChild.nodeValue.trim();

// console.log(fragment);
                        var sPE = selectedParentElement.nodeName.toLowerCase();
                        switch(sPE) {
                          case "p": default:
                            var xSPE = document.createElement(sPE);
                            xSPE.appendChild(fragment.cloneNode(true));
                            fragment = DO.U.fragmentFromString(xSPE.outerHTML);
                            break;
                          //TODO: Other cases?
                        }
                      }
// console.log(fragment);
// console.log(selection);

                      r = selection.getRangeAt(0);
// console.log(r);
// console.log(r.startContainer);
// console.log(r.startOffset);
// console.log(r.endOffset);
// var remainingNodes = document.createElement('div');
// remainingNodes.appendChild(fragment.cloneNode(true));
// console.log(remainingNodes);


                      //Description
                      var div = document.createElement('div');
                      div.setAttribute('property', 'schema:description');
                      div.appendChild(fragment.cloneNode(true));

                      //Put it together
                      section.appendChild(heading);
                      section.appendChild(div);
// console.log(range.startContainer);

                      var selectionUpdated = document.createElement('div');
                      selectionUpdated.appendChild(section);
                      selectionUpdated = selectionUpdated.innerHTML;
// console.log(selectionUpdated);
// range.deleteContents();
// MediumEditor.util.insertHTMLCommand(this.document, closePreviousSections);
// MediumEditor.extensions.paste(closePreviousSections);

                      //Sub-section
                      if (cSH-pSH > 0) {
                        MediumEditor.util.insertHTMLCommand(this.base.selectedDocument, selectionUpdated);

                        // This doesn't seem to be needed anymore?
                        // MediumEditor.selection.select(this.base.selectedDocument, heading, 0);
                      }
                      else {
// console.log(selection);
// console.log(parentSection);
                        MediumEditor.selection.selectNode(parentSection, document);
                        r = selection.getRangeAt(0);
// console.log(r);
// console.log(r.startOffset);
// console.log(r.endOffset);


                        //This selection is based off previous operations; handling remaining Nodes after the selection. So, this is not accurate per se.. the range might be accurate.
                        selection = window.getSelection();
// console.log(selection);
                        r = selection.getRangeAt(0);
// console.log(r);
// console.log(r.startOffset);
// console.log(r.endOffset);


                        r = document.createRange();
                        r.setStartAfter(parentSection);
// console.log(r);
                        r.setEndAfter(parentSection);
// console.log(r);
                        r.collapse(true);
                        selection.removeAllRanges();
                        selection.addRange(r);
// console.log(selection);
                        var foo = document.createElement('div');
                        foo.appendChild(parentSection);
                        parentSection = foo.innerHTML;
// console.log(parentSection + selectionUpdated);
                        MediumEditor.util.insertHTMLCommand(this.base.selectedDocument, parentSection + selectionUpdated);

                        // MediumEditor.selection.select(this.base.selectedDocument, heading, 0);
                        // parentSection.parentNode.insertBefore(section, parentSection.nextSibling);
                      }
                    }

                    this.base.restoreSelection();
                    this.base.checkSelection();
                    break;

                  case 'math':
                    var QUEUE = MathJax.Hub.Queue;  // shorthand for the queue
                    var math = null;                // the element jax for the math output.

                    var selection = this.base.selection;

                    var selectionId = DO.U.generateAttributeId();

                    var selectionUpdated = '<span id="' + selectionId + '">$$</span>';

                    MediumEditor.util.insertHTMLCommand(this.base.selectedDocument, selectionUpdated);

                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, selectionId]);
                    var math = MathJax.Hub.getAllJax(selectionId)[0];
                    MathJax.Hub.Queue(["Text", math, selection]);

                    MediumEditor.selection.selectNode(document.getElementById(selectionId), document);
                    break;

                  default:
                    var selectionUpdated = '<' + tagNames[0] + datetime + '>' + this.base.selection + '</' + tagNames[0] + '>';
                    MediumEditor.util.insertHTMLCommand(this.base.selectedDocument, selectionUpdated);
                    this.base.restoreSelection();
                    this.base.checkSelection();

                    break;
                }

                this.setActive();
              }
            }
          });
        }
      })(),

      //Adapted from MediumEditor's Anchor Form
      Note: (function() {
        if (typeof MediumEditor !== 'undefined') {
          return MediumEditor.extensions.form.extend({
            /* Textarea Form Options */

            /* customClassOption: [string]  (previously options.anchorButton + options.anchorButtonClass)
             * Custom class name the user can optionally have added to their created links (ie 'button').
             * If passed as a non-empty string, a checkbox will be displayed allowing the user to choose
             * whether to have the class added to the created link or not.
             */
            customClassOption: null,

            /* customClassOptionText: [string]
             * text to be shown in the checkbox when the __customClassOption__ is being used.
             */
            customClassOptionText: 'Button',

            /* linkValidation: [boolean]  (previously options.checkLinkFormat)
             * enables/disables check for common URL protocols on anchor links.
             */
            linkValidation: false,

            /* placeholderText: [string]  (previously options.anchorInputPlaceholder)
             * text to be shown as placeholder of the anchor input.
             */
            placeholderText: "What’s up?",

            /* targetCheckbox: [boolean]  (previously options.anchorTarget)
             * enables/disables displaying a "Open in new window" checkbox, which when checked
             * changes the `target` attribute of the created link.
             */
            targetCheckbox: false,

            /* targetCheckboxText: [string]  (previously options.anchorInputCheckboxLabel)
             * text to be shown in the checkbox enabled via the __targetCheckbox__ option.
             */
            targetCheckboxText: 'Open in new window',

            // Options for the Button base class
            // name: this.name,
            // action: 'createLink',
            // aria: 'link',
            // tagNames: ['a'],
            // contentDefault: '<b>#</b>',
            // contentFA: '<i class="fa fa-sticky-note"></i>',

            init: function () {
              this.name = this.label;
              this.action = this.action;
              this.aria = this.label;
              this.tagNames = [this.action];
              this.useQueryState = true;
              this.contentDefault = '<b>' + this.label + '</b>';
              this.signInRequired = false;

              switch(this.action) {
                case 'cite': default:
                  this.contentFA = '<i class="fa fa-hashtag"></i>';
                  break;
                case 'article':
                  this.contentFA = '<i class="fa fa-sticky-note"></i>';
                  this.signInRequired = true;
                  break;
                case 'note':
                  this.contentFA = '<i class="fa fa-sticky-note"></i>';
                  break;
                case 'rdfa':
                  this.contentFA = '<i class="fa fa-rocket"></i>';
                  break;
                case 'selector':
                  this.contentFA = '<i class="fa fa-anchor"></i>';
                  break;
                case 'bookmark':
                  this.contentFA = '<i class="fa fa-bookmark"></i>';
                  this.signInRequired = true;
                  break;
                case 'share':
                  this.contentFA = '<i class="fa fa-bullhorn"></i>';
                  this.signInRequired = true;
                  break;
                case 'approve':
                  this.contentFA = '<i class="fa fa-thumbs-up"></i>';
                  this.signInRequired = true;
                  break;
                case 'disapprove':
                  this.contentFA = '<i class="fa fa-thumbs-down"></i>';
                  this.signInRequired = true;
                  break;
                case 'specificity':
                  this.contentFA = '<i class="fa fa-crosshairs"></i>';
                  this.signInRequired = true;
                  break;
                case 'sparkline':
                  this.contentFA = '<i class="fa fa-line-chart"></i>';
                  break;
              }
              MediumEditor.extensions.form.prototype.init.apply(this, arguments);

        //TODO: Change this bind key
        //      this.subscribe('editableKeydown', this.handleKeydown.bind(this));
        //      this.on(this.button, 'click', this.handleClick.bind(this));
            },

            // Called when the button the toolbar is clicked
            // Overrides ButtonExtension.handleClick
            handleClick: function (event) {
              event.preventDefault();
              event.stopPropagation();
              var _this = this;
              var showAction = function() {
                switch(_this.action) {
                  default:
                    var range = MediumEditor.selection.getSelectionRange(_this.document);

                    if (range.startContainer.nodeName.toLowerCase() === 'a' ||
                      range.endContainer.nodeName.toLowerCase() === 'a' ||
                      MediumEditor.util.getClosestTag(MediumEditor.selection.getSelectedParentElement(range), 'a')) {
                      return _this.execAction('unlink');
                    }

                    if (DO.U.Editor.MediumEditor.options.id == 'social' && (_this.action == 'selector' || _this.action == 'approve')){
                      var opts = {
                        license: 'https://creativecommons.org/licenses/by/4.0/',
                        content: 'Liked'
                      }
                      _this.completeFormSave(opts);
                    }
                    else if (!_this.isDisplayed()) {
                      _this.showForm();
                    }
                    break;

                  case 'share':
                    _this.base.restoreSelection();
                    var resourceIRI = uri.stripFragmentFromString(document.location.href);
                    var id = _this.base.getSelectedParentElement().closest('[id]').id;
                    resourceIRI = (id) ? resourceIRI + '#' + id : resourceIRI;
                    _this.window.getSelection().removeAllRanges();
                    _this.base.checkSelection();
                    DO.U.shareResource(null, resourceIRI);
                    break;
                }
              };

              var updateAnnotationServiceForm = function() {
                var annotationServices = document.querySelectorAll('.annotation-location-selection');
                for (var i = 0; i < annotationServices.length; i++) {
                  annotationServices[i].innerHTML = DO.U.getAnnotationLocationHTML();
                }
              };

              return inbox.getEndpoint(DO.C.Vocab['oaannotationService']['@id']).then(
                function(url) {
                  DO.C.AnnotationService = url[0];
                  updateAnnotationServiceForm();
                  showAction();
                },
                function(reason) {
                  if(_this.signInRequired && !DO.C.User.IRI) {
                    auth.showUserIdentityInput();
                  }
                  else {
                    updateAnnotationServiceForm();
                    showAction();
                  }
                }
              );
            },

            // Called when user hits the defined shortcut (CTRL / COMMAND + K)
            handleKeydown: function (event) {
              if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.K) && MediumEditor.util.isMetaCtrlKey(event) && !event.shiftKey) {
                this.handleClick(event);
              }
            },

            // Called by medium-editor to append form to the toolbar
            getForm: function () {
              if (!this.form) {
                this.form = this.createForm();
              }
              return this.form;
            },

            getTemplate: function () {
              var template = [];
              switch(this.action) {
                case 'rdfa':
                  template = [
                  '<label for="rdfa-about">about</label><input id="rdfa-about" class="medium-editor-toolbar-input" placeholder="https://example.org/foo#bar" /><br/>',
                  '<label for="rdfa-resource">resource</label><input id="rdfa-resource" class="medium-editor-toolbar-input" placeholder="https://example.net/baz" /><br/>',
                  '<label for="rdfa-typeof">typeof</label><input id="rdfa-typeof" class="medium-editor-toolbar-input" placeholder="https://example.net/baz" /><br/>',
                  '<label for="rdfa-rel">rel</label><input id="rdfa-rel" class="medium-editor-toolbar-input" placeholder="schema:url"><br/>',
                  '<label for="rdfa-property">property</label><input id="rdfa-property" class="medium-editor-toolbar-input" placeholder="schema:name" /><br/>',
                  '<label for="rdfa-href">href</label><input id="rdfa-href" class="medium-editor-toolbar-input" placeholder="https://example.net/baz" /><br/>',
                  '<label for="rdfa-content">content</label><input id="rdfa-content" class="medium-editor-toolbar-input" placeholder="Baz" /><br/>',
                  '<label for="rdfa-datatype">datatype</label><input id="rdfa-datatype" class="medium-editor-toolbar-input" placeholder="https://example.net/baz" /><br/>'
                  ];
                  break;
                case 'article':
                  template = [
                  '<textarea id="article-content" name="content" cols="20" rows="5" class="medium-editor-toolbar-textarea" placeholder="', this.placeholderText, '"></textarea>',
                  '<select id="article-license" name="license" class="medium-editor-toolbar-select">',
                  DO.U.getLicenseOptionsHTML(),
                  '</select>',
                  '<span class="annotation-location-selection">' + DO.U.getAnnotationLocationHTML() + '</span>'
                  ];
                  break;
                case 'note':
                  template = [
                  '<label for="bookmark-tagging">Tags</label> <input id="bookmark-tagging" class="medium-editor-toolbar-input" placeholder="Separate tags with commas" /><br/>',
                  '<textarea id="article-content" name="content" cols="20" rows="1" class="medium-editor-toolbar-textarea" placeholder="', this.placeholderText, '"></textarea>',
                  '<select id="article-license" name="license" class="medium-editor-toolbar-select">',
                  DO.U.getLicenseOptionsHTML(),
                  '</select>'
                  ];
                  break;
                case 'approve':
                  template = [
                  '<textarea id="approve-content" name="content" cols="20" rows="2" class="medium-editor-toolbar-textarea" placeholder="Strong point? Convincing argument?"></textarea>',
                  '<select id="approve-license" name="license" class="medium-editor-toolbar-select">',
                  DO.U.getLicenseOptionsHTML(),
                  '</select>',
                  '<span class="annotation-location-selection">' + DO.U.getAnnotationLocationHTML() + '</span>'
                  ];
                  break;
                case 'disapprove':
                  template = [
                  '<textarea id="disapprove-content" name="content" cols="20" rows="2" class="medium-editor-toolbar-textarea" placeholder="Weak point? Error? Inaccurate?"></textarea>',
                  '<select id="disapprove-license" name="license" class="medium-editor-toolbar-select">',
                  DO.U.getLicenseOptionsHTML(),
                  '</select>',
                  '<span class="annotation-location-selection">' + DO.U.getAnnotationLocationHTML() + '</span>'
                  ];
                  break;
                case 'specificity':
                  template = [
                  '<textarea id="specificity-content" name="content" cols="20" rows="2" class="medium-editor-toolbar-textarea" placeholder="Citation or specificity needed?"></textarea>',
                  '<select id="specificity-license" name="license" class="medium-editor-toolbar-select">',
                  DO.U.getLicenseOptionsHTML(),
                  '</select>',
                  '<span class="annotation-location-selection">' + DO.U.getAnnotationLocationHTML() + '</span>'
                  ];
                  break;
                case 'cite':
                  template = [
                  '<input type="radio" name="citation-type" value="ref-footnote" id="ref-footnote" /> <label for="ref-footnote">Footnote</label>',
                  '<input type="radio" name="citation-type" value="ref-reference" id="ref-reference" /> <label for="ref-reference">Reference</label>',
                  '<select id="citation-relation" name="citation-relation" class="medium-editor-toolbar-select">',
                  DO.U.getCitationOptionsHTML(),
                  '</select>',
                  '<input type="text" name="citation-url" value="" id="citation-url" class="medium-editor-toolbar-input" placeholder="http://example.org/article#results" />',
                  '<textarea id="citation-content" cols="20" rows="1" class="medium-editor-toolbar-textarea" placeholder="', this.placeholderText, '"></textarea>'
                  ];
                  break;
                case 'bookmark':
                  template = [
                  '<label for="bookmark-tagging">Tags</label> <input id="bookmark-tagging" class="medium-editor-toolbar-input" placeholder="Separate tags with commas" /><br/>',
                  '<textarea id="bookmark-content" name="content" cols="20" rows="2" class="medium-editor-toolbar-textarea" placeholder="Description"></textarea>'
                  ];
                  break;
                case 'sparkline':
                  template = [
                  '<input type="text" name="sparkline-search" value="" id="sparkline-search" class="medium-editor-toolbar-input" placeholder="Enter search terms" /><br/>',
                  '<input type="hidden" name="sparkline-selection-dataset" value="" id="sparkline-selection-dataset" />',
                  '<input type="hidden" name="sparkline-selection-refarea" value="" id="sparkline-selection-refarea" />'
                  ];
                  break;
                default:
                  template = [
                  '<textarea cols="20" rows="1" class="medium-editor-toolbar-textarea" placeholder="', this.placeholderText, '"></textarea>'
                  ];
                  break;
              }

              template.push(
                '<a href="#" class="medium-editor-toolbar-save" title="Save">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel,
                '</a>'
              );

              template.push(
                '<a href="#" class="medium-editor-toolbar-close" title="Close">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel,
                '</a>'
              );

              // both of these options are slightly moot with the ability to
              // override the various form buildup/serialize functions.

              if (this.targetCheckbox) {
                // fixme: ideally, this targetCheckboxText would be a formLabel too,
                // figure out how to deprecate? also consider `fa-` icon default implcations.
                template.push(
                  '<div class="medium-editor-toolbar-form-row">',
                  '<input type="checkbox" class="medium-editor-toolbar-textarea-target">',
                  '<label>',
                  this.targetCheckboxText,
                  '</label>',
                  '</div>'
                );
              }

              if (this.customClassOption) {
                // fixme: expose this `Button` text as a formLabel property, too
                // and provide similar access to a `fa-` icon default.
                template.push(
                  '<div class="medium-editor-toolbar-form-row">',
                  '<input type="checkbox" class="medium-editor-toolbar-textarea-button">',
                  '<label>',
                  this.customClassOptionText,
                  '</label>',
                  '</div>'
                );
              }

              return template.join('');

            },

            // Used by medium-editor when the default toolbar is to be displayed
            isDisplayed: function () {
              return this.getForm().style.display === 'block';
            },

            hideForm: function () {
              this.getForm().style.display = 'none';
              this.getInput().value = '';
            },

            showForm: function (opts) {
              var _this = this;
              var input = this.getInput(),
                targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox();

              opts = opts || { url: '' };
              // TODO: This is for backwards compatability
              // We don't need to support the 'string' argument in 6.0.0
              if (typeof opts === 'string') {
                opts = {
                  url: opts
                };
              }

              var initialSelectedParentElement = this.base.getSelectedParentElement();
              var initialSelectionState = MediumEditor.selection.exportSelection(initialSelectedParentElement, this.document);

              //XXX: Get this before getForm.
              var selection = MediumEditor.selection.getSelectionHtml(this.document).trim();
              this.base.saveSelection();
              this.hideToolbarDefaultActions();
              var form = this.getForm();
              form.style.display = 'block';
              this.setToolbarPosition();

              input.value = opts.url;

              switch(this.action) {
                case 'rdfa':
                  input.about.focus();
                  break;
                case 'article': case 'note': case 'approve': case 'disapprove': case 'specificity':
                  input.content.focus();
                  break;
                case 'cite':
                  input.url.focus();
                  document.querySelector('.medium-editor-toolbar-form input[name="citation-type"]').checked = true;
                  break;
                case 'sparkline':
                  input.search.focus();
                  input.search.value = selection;

                  var inputSearch = function(e){
                    if(e.which == 13) {
                      e.preventDefault();
                      e.stopPropagation();
                      _this.base.restoreSelection();
                      MediumEditor.util.insertHTMLCommand(document, e.target.value);
                      var selection = { start: initialSelectionState.start, end: (initialSelectionState.start + e.target.value.length) };
                      MediumEditor.selection.importSelection(selection, initialSelectedParentElement, document);
                      _this.base.checkSelection();
                      e.target.setAttribute('data-event-keyup-enter', true);
                      _this.showForm();
                      return;
                    }
                  }
                  if(!input.search.getAttribute('data-event-keyup-enter')) {
                    input.search.addEventListener('keyup', inputSearch, false);
                  }

                  var sparqlEndpoint = 'http://worldbank.270a.info/';
                  var resourceType = '<http://purl.org/linked-data/cube#DataSet>';
                  var sparklineGraphId = 'sparkline-graph';
                  var resultContainerId = 'sparkline-select';
                  //TODO: This should be from user's preference?
                  var lang = 'en';

                  //TODO: What's the best way for user input? ' of '
                  var textInputA = selection.split(' of ')[0];
                  var textInputB = selection.substr(selection.indexOf(' of ') + 4);

                  if(!DO.C.RefAreas[textInputB.toUpperCase()]) {
                    Object.keys(DO.C.RefAreas).forEach(function(key) {
                      if(DO.C.RefAreas[key].toLowerCase() == textInputB.toLowerCase()) {
                        textInputB = key;
                      }
                    });
                  }

                  var sG = document.getElementById(sparklineGraphId);
                  if(sG) {
                    sG.parentNode.removeChild(sG);
                  }

                  if(!DO.C.RefAreas[textInputB.toUpperCase()]) {
                    var refAreas;
                    Object.keys(DO.C.RefAreas).forEach(function(key) {
                      refAreas += '<option value="' + key + '">' + key + ' - ' + DO.C.RefAreas[key] + '</option>';
                    });
                    form.querySelector('.medium-editor-toolbar-save').insertAdjacentHTML('beforebegin', '<div id="' + sparklineGraphId + '">`' + textInputB + '` is not available. Try: ' + '<select name="refAreas"><option>Select a reference area</option>' + refAreas + '</select></div>');
                    var rA = document.querySelector('#' + sparklineGraphId + ' select[name="refAreas"]');
                    rA.addEventListener('change', function(e) {
                      e.preventDefault();
                      e.stopPropagation();
                      textInputB = e.target.value;
                      input.search.value = textInputA + ' of ' + textInputB;
                      form.querySelector('#sparkline-selection-dataset').value = textInputA;
                      form.querySelector('#sparkline-selection-refarea').value = textInputB;

                      _this.base.restoreSelection();
                      MediumEditor.util.insertHTMLCommand(document, input.search.value);
                      var selection = { start: initialSelectionState.start, end: (initialSelectionState.start + input.search.value.length) };
                      MediumEditor.selection.importSelection(selection, initialSelectedParentElement, document);
                      _this.base.checkSelection();
                      _this.showForm();
                    });
                    return;
                  }

                  var options = {};
                  options.filter = {
                    dimensionProperty: 'sdmx-dimension:refArea',
                    dimensionRefAreaNotation: textInputB
                  };
                  options.optional = { prefLabels: ["dcterms:title"] };

                  var queryURL = DO.U.SPARQLQueryURL.getResourcesOfTypeWithLabel(sparqlEndpoint, resourceType, textInputA.toLowerCase(), options);

                  queryURL = uri.getProxyableIRI(queryURL);

                  form.querySelector('.medium-editor-toolbar-save').insertAdjacentHTML('beforebegin', '<div id="' + sparklineGraphId + '"></div><i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');
                  sG = document.getElementById(sparklineGraphId);

                  DO.U.getTriplesFromGraph(queryURL)
                    .then(function(triples){
                      sG.removeAttribute('class');
                      triples = DO.U.sortTriples(triples, { sortBy: 'object' });
                      return DO.U.getListHTMLFromTriples(triples, {element: 'select', elementId: resultContainerId});
                    })
                    .then(function(listHTML){
                      sG.innerHTML = listHTML;
                      form.removeChild(form.querySelector('.fa.fa-circle-o-notch.fa-spin'));
                    })
                    .then(function(x){
                      var rC = document.getElementById(resultContainerId);
                      rC.addEventListener('change', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var sparkline = sG.querySelectorAll('.sparkline, .sparkline-info');
                        for (var i = 0; i < sparkline.length; i++) {
                          sparkline[i].parentNode.removeChild(sparkline[i]);
                        }
                        form.querySelector('.medium-editor-toolbar-save').insertAdjacentHTML('beforebegin', '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');

                        var dataset = e.target.value;
                        var title = e.target.querySelector('*[value="' + e.target.value + '"]').textContent.trim();
                        //XXX: Should this replace the initial search term?
                        form.querySelector('#sparkline-selection-dataset').value = title;
                        form.querySelector('#sparkline-selection-refarea').value = textInputB.toUpperCase();

                        var refArea = textInputB.toUpperCase();
                        var paramDimension = "\n\
  ?propertyRefArea rdfs:subPropertyOf* sdmx-dimension:refArea .\n\
  ?observation ?propertyRefArea [ skos:notation '" + refArea + "' ] .";

// console.log(dataset);
// console.log(refArea);
                        var queryURL = DO.U.SPARQLQueryURL.getObservationsWithDimension(sparqlEndpoint, dataset, paramDimension);
// console.log(queryURL);
                        queryURL = uri.getProxyableIRI(queryURL);

                        DO.U.getTriplesFromGraph(queryURL)
                          .then(function(triples){
// console.log(triples);
                            if(triples.length > 0) {
                              var observations = {};
                              triples.forEach(function(t){
                                var s = t.subject.nominalValue;
                                var p = t.predicate.nominalValue;
                                var o = t.object.nominalValue;
                                observations[s] = observations[s] || {};
                                observations[s][p] = o;
                              });
// console.log(observations);
                              var list = [], item;
                              Object.keys(observations).forEach(function(key) {
                                item = {};
                                observations[key]['http://purl.org/linked-data/cube#Observation'] = key;
                                item[key] = observations[key];
                                list.push(item[key]);
                              });
                              var sortByKey = 'http://purl.org/linked-data/sdmx/2009/dimension#refPeriod';
                              list.sort(function (a, b) {
                                return a[sortByKey].toLowerCase().localeCompare(b[sortByKey].toLowerCase());
                              });
// console.log(list);
                              var options = {
                                url: dataset,
                                title: title ,
                                cssStroke: '#000'
                              };
                              var sparkline = DO.U.getSparkline(list, options);
                              sG.insertAdjacentHTML('beforeend', '<span class="sparkline">' + sparkline + '</span> <span class="sparkline-info">' + triples.length + ' observations</span>');
                                form.removeChild(form.querySelector('.fa.fa-circle-o-notch.fa-spin'));
                            }
                            else {
                              //This shouldn't happen.
                              sG.insertAdjacentHTML('beforeend', '<span class="sparkline-info">0 observations. Select another.</span>');
                            }
                          });
                      });
                    });
                  break;
                case 'bookmark':
                  input.content.focus();
                  break;
                default:
                  input.focus();
                  break;
              }

              // If we have a target checkbox, we want it to be checked/unchecked
              // based on whether the existing link has target=_blank
              if (targetCheckbox) {
                targetCheckbox.checked = opts.target === '_blank';
              }

              // If we have a custom class checkbox, we want it to be checked/unchecked
              // based on whether an existing link already has the class
              if (buttonCheckbox) {
                var classList = opts.buttonClass ? opts.buttonClass.split(' ') : [];
                buttonCheckbox.checked = (classList.indexOf(this.customClassOption) !== -1);
              }
            },

            // Called by core when tearing down medium-editor (destroy)
            destroy: function () {
              if (!this.form) {
                return false;
              }

              if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
              }

              delete this.form;
            },

            // core methods

            getFormOpts: function () {
              // no notion of private functions? wanted `_getFormOpts`
              var targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox();
              var opts = {};

              switch(this.action) {
                case 'rdfa':
                  opts.about = this.getInput().about.value;
                  opts.rel = this.getInput().rel.value;
                  opts.href = this.getInput().href.value;
                  opts.typeOf = this.getInput().typeOf.value;
                  opts.resource = this.getInput().resource.value;
                  opts.property = this.getInput().property.value;
                  opts.content = this.getInput().content.value;
                  opts.datatype = this.getInput().datatype.value;
                  break;
                case 'article': case 'approve': case 'disapprove': case 'specificity':
                  opts.content = this.getInput().content.value;
                  var aLS = this.getInput().annotationLocationService;
                  DO.C.User.UI['annotationLocationService'] = { checked: false }
                  if(aLS) {
                    DO.C.User.UI.annotationLocationService.checked = opts.annotationLocationService = aLS.checked;
                  }
                  var aLPS = this.getInput().annotationLocationPersonalStorage;
                  DO.C.User.UI['annotationLocationPersonalStorage'] = { checked: false }
                  if(aLPS) {
                    DO.C.User.UI.annotationLocationPersonalStorage.checked = opts.annotationLocationPersonalStorage = aLPS.checked;
                  }
                  opts.license = this.getInput().license.value;
                  break;
                case 'note':
                  opts.content = this.getInput().content.value;
                  opts.tagging = this.getInput().tagging.value;
                  opts.license = this.getInput().license.value;
                  break;
                case 'cite':
                  opts.citationType = this.getInput().citationType.value;
                  opts.citationRelation = this.getInput().citationRelation.value;
                  opts.url = this.getInput().url.value;
                  opts.content = this.getInput().content.value;
                  break;
                case 'bookmark':
                  opts.content = this.getInput().content.value;
                  opts.tagging = this.getInput().tagging.value;
                  break;
                case 'sparkline':
                  opts.search = this.getInput().search.value;
                  opts.select = this.getInput().select.value;
                  opts.sparkline = this.getInput().sparkline.innerHTML;
                  opts.selectionDataSet = this.getInput().selectionDataSet.value;
                  opts.selectionRefArea = this.getInput().selectionRefArea.value;
                  break;
                default:
                  opts.url = this.getInput().value;
                  break;

              }

              if (typeof opts.license !== 'undefined') {
                DO.C.User.UI['License'] = opts.license;
              }

              storage.updateStorageProfile(DO.C.User);

              opts.target = '_self';
              if (targetCheckbox && targetCheckbox.checked) {
                opts.target = '_blank';
              }

              if (buttonCheckbox && buttonCheckbox.checked) {
                opts.buttonClass = this.customClassOption;
              }

              Object.keys(opts).forEach(function(key) {
                if(typeof opts[key] === 'string') {
                  opts[key] = opts[key].trim();
                }
              });

              return opts;
            },

            doFormSave: function () {
              var opts = this.getFormOpts();
              this.completeFormSave(opts);
            },

            completeFormSave: function (opts) {
              var _this = this;
// console.log(opts);
// console.log('completeFormSave() with this.action: ' + this.action);
              this.base.restoreSelection();
              var range = MediumEditor.selection.getSelectionRange(this.document);
              var selectedParentElement = this.base.getSelectedParentElement();
// console.log('getSelectedParentElement:');
// console.log(selectedParentElement);

              //Mark the text which the note was left for (with reference to the note?)
              this.base.selectedDocument = this.document;
              this.base.selection = MediumEditor.selection.getSelectionHtml(this.base.selectedDocument); //.replace(DO.C.Editor.regexEmptyHTMLTags, '');
// console.log('this.base.selection:');
// console.log(this.base.selection);

              var exact = this.base.selection;
              var selectionState = MediumEditor.selection.exportSelection(selectedParentElement, this.document);
              var start = selectionState.start;
              var end = selectionState.end;
              var prefixStart = Math.max(0, start - DO.C.ContextLength);
// console.log('pS ' + prefixStart);
              var prefix = selectedParentElement.textContent.substr(prefixStart, start - prefixStart);
// console.log('-' + prefix + '-');
              prefix = DO.U.htmlEntities(prefix);

              var suffixEnd = Math.min(selectedParentElement.textContent.length, end + DO.C.ContextLength);
// console.log('sE ' + suffixEnd);
              var suffix = selectedParentElement.textContent.substr(end, suffixEnd - end);
// console.log('-' + suffix + '-');
              suffix = DO.U.htmlEntities(suffix);

              var datetime = util.getDateTimeISO();
              var id = DO.U.generateAttributeId();
              var refId = 'r-' + id;
              // var noteId = 'i-' + id;

              var resourceIRI = uri.stripFragmentFromString(document.location.href);
              var containerIRI = window.location.href;

              var selectorIRI = resourceIRI + '#selector(type=TextQuoteSelector,prefix=' + encodeURIComponent(prefix) + ',exact=' + encodeURIComponent(exact) + ',suffix=' + encodeURIComponent(suffix) +')';

              var contentType = 'text/html';
              var noteIRI, noteURL;
              var profile, options;
              var annotationDistribution = [] , aLS = {};

              if((opts.annotationLocationPersonalStorage && DO.C.User.Outbox) || (!opts.annotationLocationPersonalStorage && !opts.annotationLocationService && DO.C.User.Outbox)) {
                containerIRI = DO.C.User.Outbox[0];

                var fromContentType = 'text/html';
                // contentType = 'application/ld+json';
                contentType = fromContentType;

                noteURL = noteIRI = containerIRI + id;
                var contextProfile = {
                  '@context': [
                    'https://www.w3.org/ns/activitystreams',
                    { 'oa': 'http://www.w3.org/ns/oa#', 'schema': 'http://schema.org/' }
                  ],
                  // 'subjectURI': noteIRI,
                  'profile': 'https://www.w3.org/ns/activitystreams'
                };
                aLS = { 'id': id, 'containerIRI': containerIRI, 'noteURL': noteURL, 'noteIRI': noteIRI, 'fromContentType': fromContentType, 'contentType': contentType };
                if (typeof DO.C.User.Storage === 'undefined') {
                  aLS['canonical'] = true;
                }

                aLS = Object.assign(aLS, contextProfile)

                annotationDistribution.push(aLS);
              }

              //XXX: Use this as the canonical if available. Note how noteIRI is treated later
              if((opts.annotationLocationPersonalStorage && DO.C.User.Storage) || (!opts.annotationLocationPersonalStorage && !opts.annotationLocationService && DO.C.User.Storage)) {
                containerIRI = DO.C.User.Storage[0];

                var fromContentType = 'text/html';
                // contentType = 'text/html';
                contentType = fromContentType;

                noteURL = noteIRI = containerIRI + id;
                var contextProfile = {
                  // 'subjectURI': noteIRI,
                };
                aLS = { 'id': id, 'containerIRI': containerIRI, 'noteURL': noteURL, 'noteIRI': noteIRI, 'fromContentType': fromContentType, 'contentType': contentType, 'canonical': true };

                annotationDistribution.push(aLS);
              }

              if(opts.annotationLocationService && typeof DO.C.AnnotationService !== 'undefined') {
                containerIRI = DO.C.AnnotationService;
                var fromContentType = 'text/html';
                // contentType = 'application/ld+json';
                contentType = fromContentType;

                var contextProfile = {
                  '@context': [
                    'http://www.w3.org/ns/anno.jsonld',
                    { 'as': 'https://www.w3.org/ns/activitystreams#', 'schema': 'http://schema.org/' }
                  ],
                  // 'subjectURI': noteIRI,
                  'profile': 'http://www.w3.org/ns/anno.jsonld'
                };

                if(!opts.annotationLocationPersonalStorage && opts.annotationLocationService) {
                  noteURL = noteIRI = containerIRI + id;
                  aLS = { 'id': id, 'containerIRI': containerIRI, 'noteURL': noteURL, 'noteIRI': noteIRI, 'fromContentType': fromContentType, 'contentType': contentType, 'canonical': true };
                }
                else if(opts.annotationLocationPersonalStorage) {
                  noteURL = containerIRI + id;
                  aLS = { 'id': id, 'containerIRI': containerIRI, 'noteURL': noteURL, 'noteIRI': noteIRI, 'fromContentType': fromContentType, 'contentType': contentType };
                }
                else {
                  noteURL = noteIRI = containerIRI + id;
                  aLS = { 'id': id, 'containerIRI': containerIRI, 'noteURL': noteURL, 'noteIRI': noteIRI, 'fromContentType': fromContentType, 'contentType': contentType, 'canonical': true };
                }

                aLS = Object.assign(aLS, contextProfile)

                annotationDistribution.push(aLS);
              }

// console.log(annotationDistribution);

              //XXX: Defaulting to id but overwritten by motivation symbol
              var refLabel = id;

              var parentNodeWithId = selectedParentElement.closest('[id]');
              var targetIRI = (parentNodeWithId) ? resourceIRI + '#' + parentNodeWithId.id : resourceIRI;

              //Role/Capability for Authors/Editors
              var ref = '', refType = ''; //TODO: reference types. UI needs input
              //TODO: replace refId and noteIRI IRIs

              //This class is added if it is only for display purposes e.g., loading an external annotation for view, but do not want to save it later on (as it will be stripped when 'do' is found)
              var doClass = '';

              //TODO: oa:TimeState's datetime should equal to hasSource value. Same for oa:HttpRequestState's rdfs:value
              // <span about="[this:#' + refId + ']" rel="oa:hasState">(timeState: <time typeof="oa:TimeState" datetime="' + datetime +'" datatype="xsd:dateTime"property="oa:sourceDate">' + datetime + '</time>)</span>\n\

              var noteData = {};
              var note = '';
              var licenseIRI = '';
              var motivatedBy = 'oa:replying';

              var createNoteData = function(annotation) {
                var id = annotation.id;
                var note = '';
                var mode = '';

                if (annotation && 'profile' in annotation && annotation.profile == 'https://www.w3.org/ns/activitystreams') {
                  mode = 'object'
                }
                else {
                  mode = 'write'
                }

                switch(_this.action) {
                  case 'sparkline':
                    var figureIRI = DO.U.generateAttributeId(null, opts.selectionDataSet);
                    ref = '<span rel="schema:hasPart" resource="#figure-' + figureIRI + '">\n\
                    <a href="' + opts.select + '" property="schema:name" rel="prov:wasDerivedFrom" resource="' + opts.select + '" typeof="qb:DataSet">' + opts.selectionDataSet + '</a> [' + DO.U.htmlEntities(DO.C.RefAreas[opts.selectionRefArea]) + ']\n\
                    <span class="sparkline" rel="schema:image" resource="#' + figureIRI + '">' + opts.sparkline + '</span></span>';
                    break;

                  //External Note
                  case 'article': case 'approve': case 'disapprove': case 'specificity':
                    if (DO.U.Editor.MediumEditor.options.id === 'review') {
                      motivatedBy = 'oa:assessing';
                      refLabel = DO.U.getReferenceLabel(motivatedBy);
                    }

                    ref = _this.base.selection;
                    licenseIRI = opts.license;

                    noteData = {
                      "type": _this.action,
                      "mode": mode,
                      "motivatedByIRI": motivatedBy,
                      "id": id,
                      "canonical": 'urn:uuid:' + id,
                      "refId": refId,
                      "refLabel": refLabel,
                      // "iri": noteIRI, //e.g., https://example.org/path/to/article
                      "creator": {},
                      "datetime": datetime,
                      "target": {
                        "iri": targetIRI,
                        "source": resourceIRI,
                        "selector": {
                          "exact": exact,
                          "prefix": prefix,
                          "suffix": suffix
                        }
                        //TODO: state
                      },
                      "body": opts.content,
                      "license": {}
                    };
                    if (DO.C.User.IRI) {
                      noteData.creator["iri"] = DO.C.User.IRI;
                    }
                    if (DO.C.User.Name) {
                      noteData.creator["name"] = DO.C.User.Name;
                    }
                    if (DO.C.User.Image) {
                      noteData.creator["image"] = DO.C.User.Image;
                    }
                    if (DO.C.User.URL) {
                      noteData.creator["url"] = DO.C.User.URL;
                    }
                    if (opts.license.length > 0) {
                      noteData.license["iri"] = opts.license;
                    }
                    // note = DO.U.createNoteDataHTML(noteData);
                    break;

                  //Internal Note
                  case 'note':
                    motivatedBy = "oa:commenting";
                    refLabel = DO.U.getReferenceLabel(motivatedBy);
                    docRefType = '<sup class="ref-comment"><a rel="cito:isCitedBy" href="#' + id + '">' + refLabel + '</a></sup>';
                    noteType = 'note';
                    noteData = {
                      "type": noteType,
                      "mode": "read",
                      "motivatedByIRI": motivatedBy,
                      "id": id,
                      "refId": refId,
                      "refLabel": refLabel,
                      // "iri": noteIRI, //e.g., https://example.org/path/to/article
                      "creator": {},
                      "datetime": datetime,
                      "target": {
                        "iri": targetIRI,
                        "source": resourceIRI,
                        "selector": {
                          "exact": exact,
                          "prefix": prefix,
                          "suffix": suffix
                        }
                        //TODO: state
                      },
                      "body": {
                        "purpose": {
                          "describing": {
                            "text": opts.content
                          },
                          "tagging": {
                            "text": opts.tagging
                          }
                        }
                      },
                      "license": {}
                    };
                    if (DO.C.User.IRI) {
                      noteData.creator["iri"] = DO.C.User.IRI;
                    }
                    if (DO.C.User.Name) {
                      noteData.creator["name"] = DO.C.User.Name;
                    }
                    if (DO.C.User.Image) {
                      noteData.creator["image"] = DO.C.User.Image;
                    }
                    if (DO.C.User.URL) {
                      noteData.creator["url"] = DO.C.User.URL;
                    }
                    if (opts.license.length > 0) {
                      noteData.license["iri"] = opts.license;
                    }

                    // note = DO.U.createNoteDataHTML(noteData);

                    ref = DO.U.getTextQuoteHTML(refId, exact, docRefType);
                    break;

                  case 'cite': //footnote reference
                    switch(opts.citationType) {
                      case 'ref-footnote': default:
                        motivatedBy = "oa:describing";
                        refLabel = DO.U.getReferenceLabel(motivatedBy);
                        docRefType = '<sup class="' + opts.citationType + '"><a rel="cito:isCitedBy" href="#' + id + '">' + refLabel + '</a></sup>';
                        noteData = {
                          "type": opts.citationType,
                          "mode": mode,
                          "motivatedByIRI": motivatedBy,
                          "id": id,
                          "refId": refId,
                          "refLabel": refLabel,
                          // "iri": noteIRI,
                          "datetime": datetime,
                          "body": opts.content,
                          "citationURL": opts.url
                        };

                        // note = DO.U.createNoteDataHTML(noteData);
                        break;

                      case 'ref-reference':
                        refLabel = DO.U.getReferenceLabel('oa:describing');
                        docRefType = '<span class="' + opts.citationType + '">' + DO.C.RefType[DO.C.DocRefType].InlineOpen + '<a href="#' + id + '">' + refLabel + '</a>' + DO.C.RefType[DO.C.DocRefType].InlineClose + '</span>';
                        break;
                    }

                    ref = DO.U.getTextQuoteHTML(refId, exact, docRefType);
                    break;
                  // case 'reference':
                  //   ref = '<span class="ref" about="[this:#' + refId + ']" typeof="dctypes:Text"><span id="'+ refId +'" property="schema:description">' + this.base.selection + '</span> <span class="ref-reference">' + DO.C.RefType[DO.C.DocRefType].InlineOpen + '<a rel="cito:isCitedBy" href="#' + id + '">' + refLabel + '</a>' + DO.C.RefType[DO.C.DocRefType].InlineClose + '</span></span>';
  //                  break;

                  case 'rdfa':
                    //TODO: inlist, prefix
                    //TODO: lang/xmlllang
                    noteData = {
                      about: opts.about,
                      typeOf: opts.typeOf,
                      rel: opts.rel,
                      href: opts.href,
                      resource: opts.resource,
                      property: opts.property,
                      content: opts.content,
                      datatype: opts.datatype,
                      textContent: _this.base.selection
                      // lang: '' and/or xmllang: ''
                    };
                    ref = DO.U.createRDFaHTML(noteData, 'expanded');
                    break;

                  case 'bookmark':
                    noteType = 'bookmark';
                    motivatedBy = "oa:bookmarking";
                    refLabel = DO.U.getReferenceLabel(motivatedBy);
                    docRefType = '';
                    noteData = {
                      "type": noteType,
                      "mode": mode,
                      "motivatedByIRI": motivatedBy,
                      "id": id,
                      "canonical": 'urn:uuid:' + id,
                      "refId": refId,
                      "refLabel": refLabel,
                      // "iri": noteIRI, //e.g., https://example.org/path/to/article
                      "creator": {},
                      "datetime": datetime,
                      "target": {
                        "iri": targetIRI,
                        "source": resourceIRI,
                        "selector": {
                          "exact": exact,
                          "prefix": prefix,
                          "suffix": suffix
                        }
                        //TODO: state
                      },
                      "body": {
                        "purpose": {
                          "describing": {
                            "text": opts.content
                          },
                          "tagging": {
                            "text": opts.tagging
                          }
                        }
                      },
                      "license": {}
                    };
                    if (DO.C.User.IRI) {
                      noteData.creator["iri"] = DO.C.User.IRI;
                    }
                    if (DO.C.User.Name) {
                      noteData.creator["name"] = DO.C.User.Name;
                    }
                    if (DO.C.User.Image) {
                      noteData.creator["image"] = DO.C.User.Image;
                    }
                    if (DO.C.User.URL) {
                      noteData.creator["url"] = DO.C.User.URL;
                    }
                    // note = DO.U.createNoteDataHTML(noteData);
                    ref = DO.U.getTextQuoteHTML(refId, exact, docRefType, { 'do': true });
                    break;
                }

                var selectionUpdated = ref;
                MediumEditor.util.insertHTMLCommand(_this.base.selectedDocument, selectionUpdated);

                return noteData;
              }

              var createNotificationData = function(annotation, options) {
                options = options || {};
                var notificationType, notificationObject, notificationContext, notificationTarget, notificationStatements;

                var noteIRI = (options.relativeObject) ? '#' + id : annotation['noteIRI'];

                notificationStatements = '    <dl about="' + noteIRI + '">\n\
  <dt>Object type</dt><dd><a about="' + noteIRI + '" typeof="oa:Annotation" href="' + DO.C.Vocab['oaannotation']['@id'] + '">Annotation</a></dd>\n\
  <dt>Motivation</dt><dd><a href="' + DO.C.Prefixes[motivatedBy.split(':')[0]] + motivatedBy.split(':')[1] + '" property="oa:motivation">' + motivatedBy.split(':')[1] + '</a></dd>\n\
</dl>\n\
';

                switch(_this.action) {
                  default: case 'article': case 'specificity':
                    notificationType = ['as:Create'];
                    notificationObject = noteIRI;
                    notificationTarget = targetIRI;
                    break;
                  case 'approve':
                    notificationType = ['as:Like'];
                    notificationObject = targetIRI;
                    notificationContext = noteIRI;
                    break;
                  case 'disapprove':
                    notificationType = ['as:Dislike'];
                    notificationObject = targetIRI;
                    notificationContext = noteIRI;
                    break;
                  case 'bookmark':
                    notificationType = ['as:Add'];
                    notificationObject = noteIRI;
                    notificationTarget = annotation['containerIRI'];
                    break;
                }

                var notificationData = {
                  "type": notificationType,
                  "slug": id,
                  "object": notificationObject,
                  "license": opts.license
                };

                if(typeof notificationContext !== 'undefined') {
                  notificationData['context'] = notificationContext;
                }

                if(typeof notificationTarget !== 'undefined') {
                  notificationData['target'] = notificationTarget;
                }

                notificationData['statements'] = notificationStatements;

                return notificationData;
              }

              var positionActivity = function(annotation) {
                if (!annotation['canonical']) {
                  return Promise.resolve();
                }

                if ('profile' in annotation && annotation.profile == 'https://www.w3.org/ns/activitystreams') {
                  return DO.U.showActivities(annotation['noteIRI'])
                    .catch(() => {
                      return Promise.resolve()
                    })
                }
                else {
                  return DO.U.positionInteraction(annotation[ 'noteIRI' ], document.body)
                    .catch(() => {
                      return Promise.resolve()
                    })
                }
              }

              var sendNotification = function(annotation) {
                if (!annotation['canonical']) {
                  return Promise.resolve();
                }
// console.log(annotation)

                return inbox.getEndpoint(DO.C.Vocab['ldpinbox']['@id'])
                  .catch(error => {
                    console.log('Error fetching ldpinbox endpoint:', error)
                    throw error
                  })
                  .then(inboxes => {
                    // TODO: resourceIRI for getEndpoint should be the
                    // closest IRI (not necessarily the document).

                    if (inboxes.length > 0) {
                      var notificationData = createNotificationData(annotation);

                      notificationData['inbox'] = inboxes[0];

                      // notificationData['type'] = ['as:Announce'];
// console.log(annotation)
                      return inbox.notifyInbox(notificationData)
                        .catch(error => {
                          console.log('Error notifying the inbox:', error)
                        })
                    }
                  })
              }

              switch(this.action) {
                case 'article': case 'approve': case 'disapprove': case 'specificity': case 'bookmark':
                  annotationDistribution.forEach(annotation => {
                    var data = '';

                    var notificationData = createNotificationData(annotation, { 'relativeObject': true });

                    var noteData = createNoteData(annotation)

                    if ('profile' in annotation && annotation.profile == 'https://www.w3.org/ns/activitystreams') {
                      notificationData['statements'] = DO.U.createNoteDataHTML(noteData);
                      note = DO.U.createActivityHTML(notificationData);
                    }
                    else {
                      note = DO.U.createNoteDataHTML(noteData);
                    }

                    data = DO.U.createHTML('', note);
// console.log(data)
// console.log(annotation)

                    fetcher.postActivity(annotation['containerIRI'], id, data, annotation)
                      .catch(error => {
                        // console.log('Error serializing annotation:', error)
                        console.log(error)
                        throw error  // re-throw, break out of promise chain
                      })

                      .then(response => {
                        var location = response.headers.get('Location')

                        if (location) {
                          location = uri.getAbsoluteIRI(annotation['containerIRI'], location)
                          annotation['noteIRI'] = annotation['noteURL'] = location
                        }

// console.log(annotation)
                        return positionActivity(annotation)
                       })

                      .then(() => {
                        if (this.action != 'bookmark') {
                          return sendNotification(annotation)
                        }
                      })

                      .catch(() => {  // catch-all
                        // suppress the error, it was already logged to the console above
                        // nothing else needs to be done, the loop will proceed
                        // to the next annotation
                      })
                  })
                  break;

                case 'note':
                  var noteData = createNoteData({'id': id})
                  note = DO.U.createNoteDataHTML(noteData);
                  var nES = selectedParentElement.nextElementSibling;
                  var asideNote = '\n\
<aside class="note">\n\
'+ note + '\n\
</aside>';
                  var asideNode = DO.U.fragmentFromString(asideNote);
                  var parentSection = MediumEditor.util.getClosestTag(selectedParentElement, 'section');
                  parentSection.appendChild(asideNode);

                  DO.U.positionNote(refId, refLabel, id);
                  break;

                case 'selector':
                  window.history.replaceState({}, null, selectorIRI);
                  DO.U.showActionMessage(document.documentElement, 'Copy URL from address bar')
                  // util.copyTextToClipboard(encodeURI(selectorIRI));
                  break;

                case 'cite': //footnote reference
                  //TODO: Refactor this what's in positionInteraction

                  var noteData = createNoteData({'id': id})
                  note = DO.U.createNoteDataHTML(noteData);

                  switch(opts.citationType) {
                    case 'ref-footnote': default:
                      var nES = selectedParentElement.nextElementSibling;
                      var asideNote = '\n\
<aside class="note">\n\
'+ note + '\n\
</aside>';
                      var asideNode = DO.U.fragmentFromString(asideNote);
                      var parentSection = MediumEditor.util.getClosestTag(selectedParentElement, 'section');
                      parentSection.appendChild(asideNode);

                      DO.U.positionNote(refId, refLabel, id);
                      break;

                    case 'ref-reference':
                      var options = opts;
                      options['citationId'] = opts.url;
                      options['refId'] = refId;

                      DO.U.getCitation(opts.url, options).then(function(citationGraph) {
                        var citationURI = '';
                        if(opts.url.match(/^10\.\d+\//)) {
                          citationURI = 'http://dx.doi.org/' + opts.url;
                          options.citationId = citationURI;
                        }
                        //FIXME: subjectIRI shouldn't be set here. Bug in RDFaProcessor (see also SimpleRDF ES5/6). See also: https://github.com/linkeddata/dokieli/issues/132
                        else if (opts.url.toLowerCase().indexOf('//dx.doi.org/') >= 0) {
                          citationURI = opts.url;
                          if (opts.url.toLowerCase().startsWith('https:')) {
                            citationURI = opts.url.replace(/^https/, 'http');
                          }
                        }
                        else if (uri.stripFragmentFromString(options.citationId) !== uri.getProxyableIRI(options.citationId)) {
                          citationURI = window.location.origin + window.location.pathname;
                        }
                        else {
                          citationURI = options.citationId;
                        }

                        var citation = DO.U.getCitationHTML(citationGraph, citationURI, options);

                        var r = document.querySelector('#references ol');
                        if (!r) {
                          var nodeInsertLocation = DO.U.selectArticleNode(document);
                          var section = '<section id="references"><h2>References</h2><div><ol></ol></div></section>';
                          nodeInsertLocation.insertAdjacentHTML('beforeend', section);
                          r = document.querySelector('#references ol');
                        }
                        var citationHTML = '<li id="' + id + '">' + citation + '</li>';
                        r.insertAdjacentHTML('beforeend', citationHTML);

                        DO.U.showRobustLinks();

// console.log(options.url);
                        var s = citationGraph.child(citationURI);
                        if(s.ldpinbox._array.length == 0) {
                          s = citationGraph.child(options.citationId);
                        }

                        if (s.ldpinbox._array.length > 0) {
                          var inboxURL = s.ldpinbox.at(0);
// console.log(inboxURL);

                          var citedBy = location.href.split(location.search||location.hash||/[?#]/)[0] + '#' + options.refId;

                          var notificationStatements = '    <dl about="' + citedBy + '">\n\
      <dt>Action</dt><dd>Citation</dd>\n\
      <dt>Cited by</dt><dd><a href="' + citedBy + '">' + citedBy + '</a></dd>\n\
      <dt>Cites</dt><dd><a href="' + options.url + '" property="' + options.citationRelation + '">' + options.url + '</a></dd>\n\
      <dt>Citation type</dt><dd><a href="' + options.url + '">' + DO.C.Citation[options.citationRelation] + '</a></dd>\n\
    </dl>\n\
';

                          var notificationData = {
                            "type": ['as:Announce'],
                            "inbox": inboxURL,
                            "object": citedBy,
                            "target": options.url,
                            "statements": notificationStatements
                          };

                          inbox.notifyInbox(notificationData).then(
                            function(s){
                              console.log('Sent Linked Data Notification to ' + inboxURL);
                            });
                        }
                      });
                      break;
                  }
                  break;

                case 'rdfa':
                  //This only updates the DOM. Nothing further. The 'id' is not used.
                  var noteData = createNoteData({'id': id});
                  break;
              }

              this.window.getSelection().removeAllRanges();
              this.base.checkSelection();
            },

            checkLinkFormat: function (value) {
              var re = /^(https?|ftps?|rtmpt?):\/\/|mailto:/;
              return (re.test(value) ? '' : 'http://') + value;
            },

            doFormCancel: function () {
              this.base.restoreSelection();
              this.base.checkSelection();
            },

            // form creation and event handling
            attachFormEvents: function (form) {
              var close = form.querySelector('.medium-editor-toolbar-close'),
                save = form.querySelector('.medium-editor-toolbar-save');

              this.on(form, 'click', this.handleFormClick.bind(this));
              this.on(close, 'click', this.handleCloseClick.bind(this));
              this.on(save, 'click', this.handleSaveClick.bind(this), true);
            },

            createForm: function () {
              var doc = this.document,
                form = doc.createElement('div');

              // Anchor Form (div)
              form.className = 'medium-editor-toolbar-form';
              //FIXME
              form.id = 'medium-editor-toolbar-form-textarea-' + this.getEditorId();
              form.innerHTML = this.getTemplate();
              this.attachFormEvents(form);

              return form;
            },

            getInput: function () {
              var r = {};
              switch(this.action) {
                case 'rdfa':
                  r.about = this.getForm().querySelector('#rdfa-about.medium-editor-toolbar-input');
                  r.rel = this.getForm().querySelector('#rdfa-rel.medium-editor-toolbar-input');
                  r.href = this.getForm().querySelector('#rdfa-href.medium-editor-toolbar-input');
                  r.typeOf = this.getForm().querySelector('#rdfa-typeof.medium-editor-toolbar-input');
                  r.resource = this.getForm().querySelector('#rdfa-resource.medium-editor-toolbar-input');
                  r.property = this.getForm().querySelector('#rdfa-property.medium-editor-toolbar-input');
                  r.content = this.getForm().querySelector('#rdfa-content.medium-editor-toolbar-input');
                  r.datatype = this.getForm().querySelector('#rdfa-datatype.medium-editor-toolbar-input');
                  break;
                case 'article':
                  r.content = this.getForm().querySelector('#article-content.medium-editor-toolbar-textarea');
                  r.annotationLocationService = this.getForm().querySelector('#annotation-location-service');
                  r.annotationLocationPersonalStorage = this.getForm().querySelector('#annotation-location-personal-storage');
                  r.license = this.getForm().querySelector('#article-license.medium-editor-toolbar-select');
                  break;
                case 'note':
                  r.content = this.getForm().querySelector('#article-content.medium-editor-toolbar-textarea');
                  r.tagging = this.getForm().querySelector('#bookmark-tagging.medium-editor-toolbar-input');
                  r.license = this.getForm().querySelector('#article-license.medium-editor-toolbar-select');
                  break;
                case 'approve':
                  r.content = this.getForm().querySelector('#approve-content.medium-editor-toolbar-textarea');
                  r.annotationLocationService = this.getForm().querySelector('#annotation-location-service');
                  r.annotationLocationPersonalStorage = this.getForm().querySelector('#annotation-location-personal-storage');
                  r.license = this.getForm().querySelector('#approve-license.medium-editor-toolbar-select');
                  break;
                case 'disapprove':
                  r.content = this.getForm().querySelector('#disapprove-content.medium-editor-toolbar-textarea');
                  r.annotationLocationService = this.getForm().querySelector('#annotation-location-service');
                  r.annotationLocationPersonalStorage = this.getForm().querySelector('#annotation-location-personal-storage');
                  r.license = this.getForm().querySelector('#disapprove-license.medium-editor-toolbar-select');
                  break;
                case 'specificity':
                  r.content = this.getForm().querySelector('#specificity-content.medium-editor-toolbar-textarea');
                  r.annotationLocationService = this.getForm().querySelector('#annotation-location-service');
                  r.annotationLocationPersonalStorage = this.getForm().querySelector('#annotation-location-personal-storage');
                  r.license = this.getForm().querySelector('#specificity-license.medium-editor-toolbar-select');
                  break;
                case 'cite':
                  r.citationType = this.getForm().querySelector('input[name="citation-type"]:checked');
                  r.citationRelation = this.getForm().querySelector('#citation-relation.medium-editor-toolbar-select');
                  r.url = this.getForm().querySelector('#citation-url.medium-editor-toolbar-input');
                  r.content = this.getForm().querySelector('#citation-content.medium-editor-toolbar-textarea');
                  break;
                case 'bookmark':
                  r.content = this.getForm().querySelector('#bookmark-content.medium-editor-toolbar-textarea');
                  r.tagging = this.getForm().querySelector('#bookmark-tagging.medium-editor-toolbar-input');
                  break;
                case 'sparkline':
                  r.search = this.getForm().querySelector('#sparkline-search.medium-editor-toolbar-input');
                  r.select = this.getForm().querySelector('#sparkline-select');
                  r.sparkline = this.getForm().querySelector('#sparkline-graph .sparkline');
                  r.selectionDataSet = this.getForm().querySelector('#sparkline-selection-dataset');
                  r.selectionRefArea = this.getForm().querySelector('#sparkline-selection-refarea');
                  break;

                default:
                  r = this.getForm().querySelector('textarea.medium-editor-toolbar-textarea');
                  break;
              }

              return r;
            },

            getAnchorTargetCheckbox: function () {
              return this.getForm().querySelector('.medium-editor-toolbar-textarea-target');
            },

            getAnchorButtonCheckbox: function () {
              return this.getForm().querySelector('.medium-editor-toolbar-textarea-button');
            },

            handleTextboxKeyup: function (event) {
              // For ENTER -> create the anchor
              if (event.keyCode === MediumEditor.util.keyCode.ENTER) {
                event.preventDefault();
                this.doFormSave();
                return;
              }

              // For ESCAPE -> close the form
              if (event.keyCode === MediumEditor.util.keyCode.ESCAPE) {
                event.preventDefault();
                this.doFormCancel();
              }
            },

            handleFormClick: function (event) {
              // make sure not to hide form when clicking inside the form
              event.stopPropagation();
            },

            handleSaveClick: function (event) {
              // Clicking Save -> create the anchor
              event.preventDefault();
              this.doFormSave();
            },

            handleCloseClick: function (event) {
              // Click Close -> close the form
              event.preventDefault();
              this.doFormCancel();
            }
          });
        }
      })()

    }, //DO.U.Editor

    init: function() {
      if(document.body) {
        DO.U.initUser();
        DO.U.initCurrentStylesheet();
        DO.U.setPolyfill();
        DO.U.setDocRefType();
        DO.U.showRefs();
        DO.U.buttonClose();
        DO.U.highlightItems();
        DO.U.initDocumentActions();
        DO.U.getResourceInfo();
        DO.U.showTextQuoteSelector();
        DO.U.showDocumentInfo();
        DO.U.showFragment();
        DO.U.showRobustLinks();
        DO.U.setDocumentMode();
        DO.U.showInboxNotifications();
        DO.U.initMath();
      }
    }
  } //DO.U
}; //DO

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function(){ DO.U.init(); });
  }
}

module.exports = DO

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(3)
const doc = __webpack_require__(2)
const uri = __webpack_require__(1)
const graph = __webpack_require__(5)
const fetcher = __webpack_require__(4)
const Config = __webpack_require__(0)

module.exports = {
  getEndpoint,
  getEndpointFromHead,
  getEndpointFromRDF,
  notifyInbox,
  sendNotifications
}

function sendNotifications (tos, note, iri, shareResource) {
  return new Promise((resolve, reject) => {
    var notificationData = {
      'type': ['as:Announce'],
      'object': iri,
      'summary': note,
      'license': 'https://creativecommons.org/licenses/by/4.0/'
    }

    let data = doc.getDocument()

    let options = {
      'contentType': 'text/html',
      'subjectURI': iri
    }
    var spo = {
      'subject': iri,
      'predicate': Config.Vocab['rdftype']['@id']
    }

    graph.getMatchFromData(data, spo, options)
      .then(supplementalData => {
        if (typeof supplementalData !== 'undefined' && supplementalData._array.length > 0) {
          notificationData['objectTypes'] = supplementalData._array
        }

        let spo = {
          'subject': iri,
          'predicate': Config.Vocab['schemalicense']['@id']
        }

        return graph.getMatchFromData(data, spo, options)
          .then(data => {
            if (typeof data !== 'undefined' && data.length > 0) {
              notificationData['objectLicense'] = data
            }
          })
      })
      .then(() => {
        tos.forEach(to => {
          notificationData['to'] = to

          var toInput = shareResource.querySelector('[value="' + to + '"]') ||
            shareResource.querySelector('#share-resource-to')

          toInput.parentNode.insertAdjacentHTML('beforeend',
            '<span class="progress" data-to="' + to +
            '"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>')

          inboxResponse(to, toInput)

            .then(inboxURL => {
              notificationData['inbox'] = inboxURL

              notifyInbox(notificationData)

                .catch(error => {
                  console.log('Error in notifyInbox:', error)
                  toInput
                    .parentNode
                    .querySelector('.progress[data-to="' + to + '"]')
                    .innerHTML = '<i class="fa fa-times-circle fa-fw "></i> Unable to notify. Try later.'
                })

                .then(response => {
                    var location = response.headers.get('Location')

                    if (location) {
                      location = uri.getAbsoluteIRI(inboxURL, location)

                      toInput
                        .parentNode
                        .querySelector('.progress[data-to="' + to + '"]')
                        .innerHTML = '<a target="_blank" href="' +
                        location + '"><i class="fa fa-check-circle fa-fw"></i></a>'
                    }
                  }
                )
            })
        })
      })
  })
}

function inboxResponse (to, toInput) {
  return getEndpoint(Config.Vocab['ldpinbox']['@id'], to)
    .then(inboxes => inboxes[0])

    .catch(error => {
      console.log('Error in inboxResponse:', error)

      toInput
        .parentNode
        .querySelector('.progress[data-to="' + to + '"]')
        .innerHTML = '<i class="fa fa-times-circle fa-fw"></i> Inbox not responding. Try later.'
    })
}

function notifyInbox (o) {
  var slug, inboxURL

  if ('slug' in o) {
    slug = o.slug
  }
  if ('inbox' in o) {
    inboxURL = o.inbox
  }

  if (!inboxURL) {
    return Promise.reject(new Error('No inbox to send notification to'))
  }

  //TODO title
  var title = '';
  var data = DO.U.createActivityHTML(o)

  data = DO.U.createHTML(title, data, { 'prefixes': Config.Prefixes })

  var options = {
    'contentType': 'text/html',
    'profile': 'https://www.w3.org/ns/activitystreams'
  }

  var pIRI = uri.getProxyableIRI(inboxURL)
  return fetcher.postActivity(pIRI, slug, data, options)
}

function getEndpoint (property, url) {
  if (url) {
    return getEndpointFromHead(property, url)
      .catch(() => getEndpointFromRDF(property, url))
  } else {
    var subjectURI = window.location.href.split(window.location.search || window.location.hash || /[?#]/)[0]

    var options = {
      'contentType': 'text/html',
      'subjectURI': subjectURI
    }

    return graph.getGraphFromData(doc.getDocument(), options)
      .then(function (result) {
          // TODO: Should this get all of the inboxes or a given subject's?
          var endpoints = result.match(subjectURI, property).toArray()
          if (endpoints.length > 0) {
            return endpoints.map(function(t){ return t.object.nominalValue })
          }

// console.log(property + ' endpoint was not found in message body')
          return getEndpointFromHead(property, subjectURI)
        })
      .catch(() => getEndpointFromHead(property, subjectURI))
  }
}

function getEndpointFromHead (property, url) {
  var pIRI = uri.getProxyableIRI(url);

  return fetcher.getResourceHead(pIRI, {'header': 'Link'}).then(
    function (i) {
      var linkHeaders = fetcher.parseLinkHeader(i.headers)

      if (property in linkHeaders) {
        return linkHeaders[property]
      }
      return Promise.reject({'message': property + " endpoint was not found in 'Link' header"})
    },
    function (reason) {
      return Promise.reject({'message': "'Link' header not found"})
    }
  );
}

function getEndpointFromRDF (property, url, subjectIRI) {
  url = url || window.location.origin + window.location.pathname
  subjectIRI = subjectIRI || url

  return fetcher.getResourceGraph(subjectIRI)
    .then(function (i) {
        var s = i.child(subjectIRI)

        switch (property) {
          case Config.Vocab['ldpinbox']['@id']:
            if (s.ldpinbox._array.length > 0){
// console.log(s.ldpinbox._array)
              return [s.ldpinbox.at(0)]
            }
            break
          case Config.Vocab['oaannotationService']['@id']:
            if (s.oaannotationService._array.length > 0){
// console.log(s.oaannotationService._array)
              return [s.oaannotationService.at(0)]
            }
            break
          default:
            if (s[property]._array.length > 0) {
              return [s[property].at(0)]
            }
            break
        }

        throw new Error(property + ' endpoint was not found in message body')
      }
    )
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Config = __webpack_require__(0)
const fetcher = __webpack_require__(4)
const util = __webpack_require__(3)
const uri = __webpack_require__(1)
const storage = __webpack_require__(7)

// const { OIDCWebClient } = require('@trust/oidc-web')

module.exports = {
  afterSignIn,
  enableDisableButton,
  getAgentImage,
  getAgentName,
  getAgentURL,
  getAgentStorage,
  getAgentOutbox,
  getAgentInbox,
  getAgentKnows,
  getAgentSupplementalInfo,
  getAgentSeeAlso,
  getUserContacts,
  getUserHTML,
  getUserSignedInHTML,
  setUserInfo,
  showUserIdentityInput,
  showUserSigninSignout,
  submitSignIn,
  processSameAs
}


function getUserHTML () {
  let userName = Config.SecretAgentNames[Math.floor(Math.random() * Config.SecretAgentNames.length)]

  if (Config.User.Name) {
    // XXX: We have the IRI already
    userName = '<span about="' + Config.User.IRI + '" property="schema:name">' +
      Config.User.Name + '</span>'
  }

  let userImage = ''

  if ('Image' in Config.User && typeof Config.User.Image !== 'undefined' && Config.User.Image.length > 0) {
    userImage = '<img alt="" height="48" rel="schema:image" src="' +
      Config.User.Image + '" width="48" /> '
  }

  let user = ''

  if ('IRI' in Config.User && Config.User.IRI !== null && Config.User.IRI.length > 0) {
    user = '<span about="' + Config.User.IRI + '" typeof="schema:Person">' +
      userImage + '<a rel="schema:url" href="' + Config.User.IRI + '"> ' +
      userName + '</a></span>'
  } else {
    user = '<span typeof="schema:Person">' + userName + '</span>'
  }

  return user
}

function getUserSignedInHTML() {
  return getUserHTML() + '<button class="signout-user" title="Live long and prosper"><i class="fa fa-hand-spock-o"></i></button>'
}

function showUserSigninSignout (node) {
  var userInfo = document.getElementById('user-info');

  if (!userInfo) {
    var s = ''

    if (Config.User.IRI) {
      s = getUserSignedInHTML()
    }
    else {
      s = '<button class="signin-user" title="Sign in to authenticate"><i class="fa fa-user-secret fa-2x"></i>Sign in</button>'
    }

    node.insertAdjacentHTML('beforeend', '<section id="user-info">' + s + '</section>')

    userInfo = document.getElementById('user-info')

    userInfo.addEventListener('click', function(e) {
      e.preventDefault()
      e.stopPropagation()

      if (e.target.closest('.signout-user')) {
        storage.removeStorageProfile()

        Config.User = {
          IRI: null,
          Role: null,
          UI: {}
        }

        util.removeChildren(node);

        showUserSigninSignout(document.querySelector('#document-menu header'))
      }
    });

    var su = document.querySelector('#document-menu button.signin-user')
    if (su) {
      su.addEventListener('click', showUserIdentityInput)
    }

    var rA = document.querySelector('#document-menu .resource-activities')
    if(rA) { rA.setAttribute('disabled', 'disabled') }
  }
}

function showUserIdentityInput (e) {
  if (typeof e !== 'undefined') {
    e.target.disabled = true
  }

  document.documentElement.appendChild(DO.U.fragmentFromString('<aside id="user-identity-input" class="do on">' + DO.C.Button.Close + '<h2>Sign in with WebID</h2><label>HTTP(S) IRI</label> <input id="webid" type="text" placeholder="http://csarven.ca/#i" value="" name="webid"/> <button class="signin">Sign in</button></aside>'))

  var buttonSignIn = document.querySelector('#user-identity-input button.signin')
  buttonSignIn.setAttribute('disabled', 'disabled')

  document.querySelector('#user-identity-input').addEventListener('click', e => {
    if (e.target.closest('button.close')) {
      var signinUser = document.querySelector('#document-menu button.signin-user')
      if (signinUser) {
        signinUser.disabled = false
      }
    }
  })

  var inputWebid = document.querySelector('#user-identity-input input#webid')

  buttonSignIn.addEventListener('click', submitSignIn)

  let events = ['keyup', 'cut', 'paste', 'input']

  events.forEach(eventType => {
    inputWebid.addEventListener(eventType, e => { enableDisableButton(e, buttonSignIn) })
  })

  inputWebid.focus()
}


// TODO: Generalize this further so that it is not only for submitSignIn
function enableDisableButton (e, button) {
  var delay = (e.type === 'cut' || e.type === 'paste') ? 250 : 0
  var input

  window.setTimeout(function () {
    input = e.target.value
    if (input.length > 10 && input.match(/^https?:\/\//g)) {
      if (typeof e.which !== 'undefined' && e.which === 13) {
        if (!button.getAttribute('disabled')) {
          button.setAttribute('disabled', 'disabled')
          e.preventDefault()
          e.stopPropagation()
          submitSignIn()
        }
      } else {
        button.removeAttribute('disabled')
      }
    } else {
      if (!button.getAttribute('disabled')) {
        button.setAttribute('disabled', 'disabled')
      }
    }
  }, delay)
}

// FIXME: This parameter value can be an event or a string
function submitSignIn (url) {
  var userIdentityInput = document.getElementById('user-identity-input')

  if (typeof url !== 'string') {
    if (userIdentityInput) {
      userIdentityInput.insertAdjacentHTML('beforeend',
        '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>')
    }

    url = userIdentityInput.querySelector('input#webid').value.trim()
  }

  if (!url) {
    console.log('submitSignIn - no user url input')
    return Promise.resolve()
  }

  return setUserInfo(url)
    .then(() => {
      var uI = document.getElementById('user-info')
      if (uI) {
        util.removeChildren(uI);
        uI.insertAdjacentHTML('beforeend', getUserSignedInHTML());
      }

      if (userIdentityInput) {
        userIdentityInput.parentNode.removeChild(userIdentityInput)
      }

      afterSignIn()
    })
}

/**
 * @param userIRI {string}
 *
 * @returns {Promise}
 */
function setUserInfo (userIRI) {
  if (!userIRI) {
    return Promise.reject(new Error('Could not set user info - no user IRI'))
  }

  return fetcher.getResourceGraph(userIRI)
    .then(g => {
      var s = g.child(userIRI)

      Config.User.Graph = s
      Config.User.IRI = userIRI
      Config.User.Name = getAgentName(s)
      Config.User.Image = getAgentImage(s)
      Config.User.URL = getAgentURL(s)

      Config.User.Contacts = {}
      Config.User.Knows = getAgentKnows(s)
      Config.User.SameAs = []
      Config.User.SeeAlso = []

      Config.User.Storage = getAgentStorage(s)
      Config.User.Outbox = getAgentOutbox(s)
      Config.User.Inbox = getAgentInbox(s)

      var preferredProxy = getAgentPreferredProxy(s)
      Config.ProxyURL = (preferredProxy) ? preferredProxy : Config.ProxyURL

      if (s.preferencesFile && s.preferencesFile.length > 0) {
        Config.User.PreferencesFile = s.preferencesFile

        // TODO: Reconsider if/where to use this.
        // setUserWorkspaces(Config.User.PreferencesFile)
      }
      return Config.User
    })
}

function afterSignIn () {
  var promises = [];

  promises.push(getAgentSupplementalInfo(Config.User.IRI))

  promises.push(getAgentSeeAlso(Config.User.Graph))

  Promise.all(promises)
    .then(function(results) {
      var uI = document.getElementById('user-info')
      if (uI) {
        uI.innerHTML = getUserSignedInHTML()
      }

      return storage.updateStorageProfile(Config.User)
    })
    .catch(function(e) {
      return Promise.resolve();
    });

  var rA = document.querySelector('#document-menu .resource-activities')
  if(rA) { rA.removeAttribute('disabled') }

  var user = document.querySelectorAll('aside.do article *[rel~="schema:creator"] > *[about="' + Config.User.IRI + '"]')
  for (let i = 0; i < user.length; i++) {
    var article = user[i].closest('article')
    article.insertAdjacentHTML('afterbegin', '<button class="delete"><i class="fa fa-trash"></i></button>')
  }

  var buttonDelete = document.querySelectorAll('aside.do blockquote[cite] article button.delete')

  for (let i = 0; i < buttonDelete.length; i++) {
    buttonDelete[i].addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      var article = e.target.closest('article')
      var refId = 'r-' + article.id
      var noteIRI = article.closest('blockquote[cite]')
      noteIRI = noteIRI.getAttribute('cite')

      fetcher.deleteResource(noteIRI)
        .then(() => {
          var aside = e.target.closest('aside.do')
          aside.parentNode.removeChild(aside)
          var span = document.querySelector('span[resource="#' + refId + '"]')
          span.outerHTML = span.querySelector('mark').textContent
          // TODO: Delete notification or send delete activity
        })
    })
  }
}

function getAgentSupplementalInfo(iri) {
  if (iri == Config.User.IRI) {
    return processSameAs(Config.User.Graph, getAgentSupplementalInfo);
  }
  else {
    return fetcher.getResourceGraph(iri).then(
      function(g){
        if(typeof g._graph == 'undefined') {
          return Promise.resolve([]);
        }
        var s = g.child(iri);

        Config.User.Name = Config.User.Name || getAgentName(s);

        Config.User.Image = Config.User.Image || getAgentImage(s);

        var storage = getAgentStorage(s) || [];
        var outbox = getAgentOutbox(s) || [];
        var knows = getAgentKnows(s) || [];

        if (storage.length > 0) {
          Config.User.Storage = (Config.User.Storage)
            ? util.uniqueArray(Config.User.Storage.concat(storage))
            : storage;
        }

        if (outbox.length > 0) {
          Config.User.Outbox = (Config.User.Outbox)
            ? util.uniqueArray(Config.User.Outbox.concat(outbox))
            : outbox;
        }

        if (knows.length > 0) {
          Config.User.Knows = (Config.User.Knows)
            ? util.uniqueArray(Config.User.Knows.concat(knows))
            : knows;
        }

        return processSameAs(s, getAgentSupplementalInfo);
      },
      function(reason){
        return Promise.resolve([]);
      });
  }
}

function getAgentSeeAlso(g, baseURI, subjectURI) {
  if (!g) { return; }

  subjectURI = baseURI = baseURI || g.iri().toString();

  var seeAlso = g.child(baseURI).rdfsseeAlso;

  if (seeAlso && seeAlso._array.length > 0) {
    var iris = [];
    var promises = [];

    seeAlso._array.forEach(function(iri){
      if (Config.User.SeeAlso.indexOf(iri) < 0) {
        iris.push(iri)
      }
    });

    iris.forEach(function(iri){
      Config.User.SeeAlso = util.uniqueArray(Config.User.SeeAlso.concat(iri));

      fetcher.getResourceGraph(iri)
        .then(g => {

          var s = g.child(subjectURI)

          var knows = getAgentKnows(s) || [];

          if (knows.length > 0) {
            Config.User.Knows = (Config.User.Knows)
              ? util.uniqueArray(Config.User.Knows.concat(knows))
              : knows;
          }

          promises.push(getAgentSeeAlso(g, iri, subjectURI))
        })
    });

    Promise.all(promises)
      .then(function(results) {
        return Promise.resolve([]);
      })
      .catch(function(e) {
        return Promise.resolve([]);
      });
  }
  else {
    return Promise.resolve([])
  }
}

function getUserContacts(iri) {
  var fyn = function(iri){
    if ((iri == Config.User.IRI) && Config.User.Graph) {
      return processSameAs(Config.User.Graph, getUserContacts);
    }
    else {
      return fetcher.getResourceGraph(iri).then(
        function(g){
          if(typeof g._graph == 'undefined') {
            return Promise.resolve([]);
          }

          var s = g.child(iri);

          var knows = getAgentKnows(s) || [];

          if (knows.length > 0) {
            Config.User.Knows = (Config.User.Knows)
              ? util.uniqueArray(Config.User.Knows.concat(knows))
              : knows;
          }

          return processSameAs(s, getUserContacts);
        },
        function(reason){
          return Promise.resolve([]);
        });
    }
  }

  return fyn(iri).then(function(i){ return Config.User.Knows || []; });
}

function processSameAs(s, callback) {
  if (s.owlsameAs && s.owlsameAs._array.length > 0){
    var iris = s.owlsameAs._array;
    var promises = [];
    iris.forEach(function(iri){
// console.log(iri);
      if(iri != Config.User.IRI && Config.User.SameAs.indexOf(iri) < 0) {
        Config.User.SameAs = util.uniqueArray(Config.User.SameAs.concat(iri));

        if (typeof callback !== 'undefined') {
          promises.push(callback(iri));
        }
        else {
          promises.push(Promise.resolve(Config.User.SameAs));
        }
      }
    });

    return Promise.all(promises)
      .then(function(results) {
        return Promise.resolve([]);
      })
      .catch(function(e) {
        return Promise.resolve([]);
      });
  }
  else {
    return Promise.resolve([]);
  }
}

function getAgentPreferredProxy (s) {
  return s.solidpreferredProxy || undefined
}

function getAgentImage (s) {
  return s.foafimg || s.schemaimage || s.vcardphoto || s.asimage ||
    s.siocavatar || s.foafdepiction || undefined
}

function getAgentName (s) {
  var name = s.foafname || s.schemaname || s.vcardfn || s.asname || s.rdfslabel || undefined
  if (typeof name === 'undefined') {
    if (s.schemafamilyName && s.schemafamilyName.length > 0 && s.schemagivenName && s.schemagivenName.length > 0) {
      name = s.schemagivenName + ' ' + s.schemafamilyName
    } else if (s.foaffamilyName && s.foaffamilyName.length > 0 && s.foafgivenName && s.foafgivenName.length > 0) {
      name = s.foafgivenName + ' ' + s.foaffamilyName
    } else if (s.vcardfamilyname && s.vcardfamilyname.length > 0 && s.vcardgivenname && s.vcardgivenname.length > 0) {
      name = s.vcardgivenname + ' ' + s.vcardfamilyname
    } else if (s.foafnick && s.foafnick.length > 0) {
      name = s.foafnick
    } else if (s.vcardnickname && s.vcardnickname.length > 0) {
      name = s.vcardnickname
    }
  }
  return name
}

function getAgentURL (s) {
    return s.foafhomepage || s.foafweblog || s.schemaurl || s.vcardurl || undefined
}

function getAgentStorage (s) {
  return (s.pimstorage && s.pimstorage._array.length > 0)
    ? s.pimstorage._array
    : undefined
}

function getAgentOutbox (s) {
  return (s.asoutbox && s.asoutbox._array.length > 0)
    ? s.asoutbox._array
    : undefined
}

function getAgentInbox (s) {
  return (s.ldpinbox && s.ldpinbox._array.length > 0)
    ? s.ldpinbox._array
    : undefined
}

function getAgentKnows (s) {
  var knows = [];

  if(s.foafknows && s.foafknows._array.length > 0){
    knows = knows.concat(s.foafknows._array);
  }
  if(s.schemaknows && s.schemaknows._array.length > 0){
    knows = knows.concat(s.schemaknows._array);
  }

  knows = util.uniqueArray(knows);

  return (knows.length > 0) ? knows : undefined;
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=do.js.map