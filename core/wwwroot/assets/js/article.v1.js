var current_article_uri = "";
var articlesData;
var json;

var vueArticlesList;
var viewerMarkdown;
var viewerBlocks;

function init(data) {
	articlesData = data;
	vueArticlesList = new Vue({
		el: '#articles-list',
		data: {
			items: articlesData
		},
		methods: {
			viewItem: function (index) {
				var item = articlesData[index];
				getArticle(item.uri);
			}
		}
	});
	viewerMarkdown = tui.Editor.factory({
		el: document.querySelector('#markdown-viewer'),
		initialEditType: 'markdown',
		previewStyle: 'vertical',
		height: '600px',
		viewer: true,
		exts: ['lorecard.dialog', 'lorecard.mind', 'lorecard.section', 'lorecard.list']
	});
}

function initArticle() {
	document.getElementById("article-title").textContent = json.title;

	var tab = -1;
	if (json.contentType === "markdown" || json.contentType === "md") {
		tab = 1;
		viewerMarkdown.setMarkdown(json.content);
	}
	else if (json.contentType === "JsonBlocks") {
		tab = 2;
		if (viewerBlocks) {
			viewerBlocks.clear();
		}
		viewerBlocks = new EditorJS({
			holder: "json-blocks-viewer",
			tools: {
				header: {
					class: Header,
					inlineToolbar: ['link'],
					config: {
						placeholder: 'Header'
					},
					shortcut: 'CMD+SHIFT+H'
				},
				image: {
					class: ImageTool,
				},
				list: {
					class: List,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+L'
				},
				checklist: {
					class: Checklist,
					inlineToolbar: true,
				},
				quote: {
					class: Quote,
					inlineToolbar: true,
					config: {
						quotePlaceholder: 'Enter a quote',
						captionPlaceholder: 'Quote\'s author',
					},
					shortcut: 'CMD+SHIFT+O'
				},
				warning: Warning,
				marker: {
					class: Marker,
					shortcut: 'CMD+SHIFT+M'
				},
				code: {
					class: CodeTool,
					shortcut: 'CMD+SHIFT+C'
				},
				delimiter: Delimiter,
				inlineCode: {
					class: InlineCode,
					shortcut: 'CMD+SHIFT+C'
				},
				linkTool: LinkTool,
				embed: Embed,
				table: {
					class: Table,
					inlineToolbar: true,
					shortcut: 'CMD+ALT+T'
				},
				loreMind: LoreCard_Mind,
				loreSection: LoreCard_Section,
				loreList: LoreCard_List
			},
			data: json.content
		});
	}
	else {
		console.log("Unknown ContentType/ArticleFormat");
	}
	if (tab > 0) {
		var tabs = $("#tabViewer").data("tabs");
		tabs.open(tab);
	}
}

function getArticle(uri) {
	current_article_uri = uri;
	$.ajax({
		url: current_article_uri,
		dataType: "json",
		type: "GET",
		contentType: 'application/x-www-form-urlencoded',
		data: null,
		async: true,
		processData: false,
		cache: false,
		success: function (data, textStatus, XmlHttpRequest) {
			json = data;
			//json = JSON.parse(XmlHttpRequest.responseText);
			initArticle();
		},
		error: function (XmlHttpRequest, textStatus, errorThrown) {
			var msgError = "【Status】" + textStatus + "【error】" + errorThrown + "【others】" + XmlHttpRequest.responseText;
			showError(msgError);
		}
	});
}

//function onArticleNodeClick(node, listview) {
//	let uri = node.data('uri');
//	getArticle(uri);
//}