$(document)
    .ready(function () {
        // insert header
        $("<div/>").load("/header.html").insertBefore($("#headerline"));
        //$("<div/>").load("header.html").replaceAll($("header"));
        //$('.header').load('header.html');
        // insert footer
        $("<div/>").load("/footer.html").insertAfter($("#footerline"));
        //$("<div/>").load("footer.html").replaceAll($("footer"));
        //$('.footer').load('footer.html');
    });

// 百度统计
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?5bb0b276425e871aa8646d16547e504f";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();