var topic_uri = "";
var json;
var graph;

var ractiveItems;
var ractiveContextList;

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

function initDefaultNodes(nodes) {
	var nodeTopicItemType_JsonDoc = {
		id: "doc-type-json-document",
		key: "document",
		type: "string",
		value: "JSON文档",
		icon: null
	};
	nodes.push(nodeTopicItemType_JsonDoc);

	var nodeTopicItemType_Mind = {
		id: "doc-type-mind",
		key: "mind",
		type: "string",
		value: "思维导图",
		icon: null
	};
	nodes.push(nodeTopicItemType_Mind);

	var nodeTopicItemType_Section = {
		id: "doc-type-section",
		key: "section",
		type: "string",
		value: "摘抄",
		icon: null
	};
	nodes.push(nodeTopicItemType_Section);

	// var nodeTopicItemType_DialogFlow = {
	// id: "doc-type-dialog-flow",
	// type: "string",
	// value: "对话流",
	// icon: null
	// };
	// var nodeTopicItemType = {
	// id: "doc-type-",
	// type: "string",
	// value: "",
	// icon: null
	// };
}

function searchFirst(items, itemKey, searchValue) {
	// _.forEach(items, function(item) {
	// if(item[itemKey] === searchValue){
	// return item;
	// }
	// });
	let found = _.find(items, function (item) {
		return item[itemKey] === searchValue;
	});
	return found;
}

function convertToLoreGraph(data) {
	let nodes = [];
	let relations = [];
	let edges = [];

	initDefaultNodes(nodes);

	let root = {
		id: topic_uri,
		type: "string",
		value: "徐公子胜治-方外",
		icon: null
	};
	nodes.push(root);

	// let relationTitle = {
	// url: "https://www.chuci.info/schema/lore/topic/title",
	// title: "title",
	// description: null
	// };
	// relations.push(relationTitle);

	let relationUri = {
		url: "https://www.chuci.info/schema/lore/topic/uri",
		title: "uri",
		description: null
	};
	relations.push(relationUri);

	let relationType = {
		url: "https://www.chuci.info/schema/lore/topic/type",
		title: "type",
		description: null
	};
	relations.push(relationType);

	let relationChapter = {
		url: "https://www.chuci.info/schema/lore/topic/chapter",
		title: "chapter",
		description: null
	};
	relations.push(relationChapter);

	let relationContains = {
		url: "https://www.chuci.info/schema/lore/topic/contains",
		title: "contains",
		description: null
	};
	relations.push(relationContains);

	_.forEach(data.items, function (dataItem) {
		let nodeTitle = {
			id: _.uniqueId("item_"),
			type: "string",
			value: dataItem.title,
			icon: null
		};
		nodes.push(nodeTitle);
		edges.push({
			source: root.id,
			relation: relationContains.url,
			target: nodeTitle.id
		});

		let nodeUri = searchFirst(nodes, "value", dataItem.uri);
		if (nodeUri === null) {
			nodeUri = {
				id: dataItem.uri,
				type: "uri",
				value: dataItem.uri,
				icon: null
			};
			nodes.push(nodeUri);
			edges.push({
				source: nodeTitle.id,
				relation: relationUri.url,
				target: nodeUri.id
			});
		}

		if (dataItem.chapter !== null && dataItem.chapter !== undefined) {
			let nodeChapter = searchFirst(nodes, "value", dataItem.chapter);
			if (nodeChapter === null || nodeChapter === undefined) {
				nodeChapter = {
					id: _.uniqueId("chapter_"),
					type: "number",
					value: dataItem.chapter,
					icon: null
				};
				nodes.push(nodeChapter);
			}
			edges.push({
				source: nodeTitle.id,
				relation: relationChapter.url,
				target: nodeChapter.id
			});
		}

		let nodeTopicItemType = searchFirst(nodes, "key", dataItem.type);
		edges.push({
			source: nodeTitle.id,
			relation: relationType.url,
			target: nodeTopicItemType.id
		});
	});

	let graphData = {
		object_uri: topic_uri,
		nodes: nodes,
		relations: relations,
		edges: edges
	};
	//console.log(graphData);
	return graphData;
}

function initGraph() {
	var params = {
		svgContainer: "canvasContainer",
		width: 500,
		height: 600,
	};
	LoreGraph = $.extend(LoreGraph, params);
	LoreGraph.init();
	graph = convertToLoreGraph(json);
	LoreGraph.processJsonData(graph);
}


function refresh(updateContextList) {
	_.forEach(json.items, function (item) {
		switch (item.type) {
			case 'document':
				item["icon"] = "mif-file-code";
				break;
			case 'mind':
				item["icon"] = "mif-share";
				break;
			case 'section':
				item["icon"] = "mif-book-reference";
				break;
			case 'xy':
				item["icon"] = "mif-windows";
				break;
		}
	});
	if (updateContextList) {
		let contextList = json.contextList;
		ractiveContextList = new Ractive({
			target: '#context-list',
			template: '#tplContextList',
			data: {
				items: contextList
			}
		}
		);
	}

	ractiveItems = new Ractive({
		target: '#list-view',
		template: '#tplTopicsList',
		data: json
	});
}

function initContext(contextData) {
	ractiveContextList = new Ractive({
		target: '#context-list',
		template: '#tplContextList',
		data: {
			items: contextData
		}
	});
}

function initTopics(uri, updateContextList){
	topic_uri = uri;
	$.ajax({
		url: topic_uri,
		dataType: "json",
		type: "GET",
		contentType: 'application/x-www-form-urlencoded',
		data: null,
		async: true,
		processData: false,
		cache: false,
		success: function (data, textStatus, XmlHttpRequest) {
			json = JSON.parse(XmlHttpRequest.responseText);
			refresh(updateContextList);
		},
		error: function (XmlHttpRequest, textStatus, errorThrown) {
			var msgError = "【Status】" + textStatus + "【error】" + errorThrown + "【others】" + XmlHttpRequest.responseText;
			showError(msgError);
		}
	});
}

function onContextNodeClick(node, listview){
	let uri = node.data('uri');
	initTopics(uri, false);
}