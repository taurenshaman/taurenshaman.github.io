require.config({
    baseUrl : "assets",
    paths: {
        "jquery": "js/jquery/jquery-3.3.1.min",
        "metro": "metro/js/metro.min",
        "jsoneditor": "jsoneditor/jsoneditor.min",
        "editor": "editor-codex-team/editor.min",
        "lodash": "js/lodash",
        "site": "js/site",
        "app": "js/editor@codexteam+jsoneditor"
    }
});

require(["jquery", "metro", "jsoneditor", "editor", "lodash", "site", "app"], function () {
    
});