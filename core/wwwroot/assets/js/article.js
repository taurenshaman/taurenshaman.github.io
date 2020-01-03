var current_article_uri = "";
var json;

var ractiveArticlesList;
var viewer;

function init(articlesData) {
	ractiveArticlesList = new Ractive({
		target: '#articles-list',
		template: '#tplArticlesList',
		data: {
			items: articlesData
		}
	});
	viewer = tui.Editor.factory({
		el: document.querySelector('#article-viewer'),
		initialEditType: 'markdown',
		previewStyle: 'vertical',
		height: '600px',
		viewer: true,
		exts: ['lorecard.dialog', 'lorecard.mind', 'lorecard.section']//'colorSyntax',
	});
}

function initArticle(){
	$("#article-title").val(json.title);
	viewer.setMarkdown(json.content);
}

function getArticle(uri){
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

function onArticleNodeClick(node, listview){
	let uri = node.data('uri');
	getArticle(uri);
}