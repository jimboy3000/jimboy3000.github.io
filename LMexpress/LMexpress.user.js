// ==UserScript==
// @name         Legend Express Agar.io Extension
// @namespace    Legend Express Agario Mod
// @version      1.5
// @description  Agario Mod - Legend,Ogario,Kitty,Old Skins,Animated Skins,Language Packs,Manual User Scripts,Chat,60++ Macros/Hotkeys(Tricksplit,Doublesplit,Quick Feeding,Popsplit,Auto Coins,Freeze Cell Macro,Auto respawn)
// @homepage     http://www.legendmod.ml
// @author       Jimboy3100
// @license      MIT
// @icon         https://jimboy3100.github.io/banners/CropedImage128.gif
// @match        *://agar.io/*
// @match        https://play.google.com/*
// @downloadURL  jimboy3100.github.io/legendmod.user.js
// @updateURL    jimboy3100.github.io/legendmod.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_deleteValue
// @connect      jimboy3000.github.io
// ==/UserScript==

// Copyright (c) [The Legend Mod]

// Start of script
GM_registerMenuCommand('Legend Mod Website', function() {
    window.open("http://legendmod.ml");
}, 'r');
GM_registerMenuCommand('LM Library', function() {
    window.open("https://github.com/jimboy3100/jimboy3100.github.io/");
}, 'r');
GM_registerMenuCommand('Donate for Legend Mod', function() {
    window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CM3GDVCW6PBF6");
}, 'r');


var url = window.location.href;
if (location.pathname == "/LMoldskins"){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"u v";k(2(){2 e(){g e=p.x("F"),a=b;G(e){H{a=I.z(e)}A(e){6.J(!1,e)}a&&a.5&&(C.B(a.5),6.D("%c[9] d E y...","n: m"))}}g a,t,o;a="//l.q/r.w/f/j.h.f",t=2(){6.s("[9] O 11...")},(o=3.10("Z")).K="X/Y",o.12="13-8",o.4?o.i=2(){"d"!=o.4&&"14"!=o.4||(o.i=b,t&&t())}:(3.7&&3.7.15("V-j-h",a),t&&(o.W=t,o.N=e)),o.5=a+"?M="+~~(L.P()/Q/U),3.T("S")[0].R(o)},0);',62,68,'||function|document|readyState|src|console|body||VANILLA||null||loaded||js|var|core|onreadystatechange|vanilla|setTimeout|imaster|darkorange|color||localStorage|space|agar|info||use|strict|io|getItem|cache|parse|catch|eval|window|log|from|cachedVanilla|if|try|JSON|assert|type|Date|_|onerror|inject|now|1e3|appendChild|head|getElementsByTagName|60|data|onload|text|javascript|script|createElement|success|charset|utf|complete|setAttribute'.split('|'),0,{}))

setTimeout(function() {

document.body.style.background = "#f3f3f3 url('https://jimboy3100.github.io/banners/iconmod3.png') no-repeat center fixed";
$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimated1oldskins.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');
}, 4000);
setTimeout(function() {
$("#canvas").remove();$("#adsBottom").remove();$("#rightPanel").remove();$(".agario-panel.agario-side-panel.agario-profile-panel").remove();$("#dailyquests-panel").remove();$("#v-ex-menu").remove();$("#service-message-area").remove();$(".radio-module").remove();$(".tosBox.right").remove();$(".tosBox.left").remove();$(".form-group.clearfix").remove();$("#skinCustomButton").remove();$("#settings").remove();$("#vanilla-home-link").remove();$("#settingsButton").remove();$("#instructions").remove();$(".btn.btn-play.btn-primary").remove();$(".btn.btn-play-guest.btn-success").remove();$(".btn.btn-warning.btn-login-play").text("Login");$(".btn.btn-warning.btn-login-play").css("margin-left", "80px");$("#helloContainer").css("margin-left", "-150px");$('.agario-panel.agario-side-panel.agario-shop-panel').append('<button id="logoutbtn" onclick="logout(); return false;" class="btn btn-danger btn-logout" data-itr="page_logout">Logout</button>');$("#imagebig").remove();
}, 10000);
}
else if(getParameterByName("mod", url)=="tiny"){
var tinyJS = '<script src="https://jimboy3100.github.io/ExampleScripts/LMTiny.user.js"></script>';
	    function inject(page) {
        page = page.replace("</body>", tinyJS + "</body>");
        return page;
    }
    window.stop();
    document.documentElement.innerHTML = "";
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://agar.io/",
        onload: function(e) {
            var doc = inject(e.responseText);
            document.open();
            document.write(doc);
			document.close();
        }
    });

}




// Check location
if (location.host === "agar.io" && location.pathname === "/") {
   location.href = "https://agar.io/TheLegendModProject" + location.hash;
    return;
}

	var modVersion = GM_info.script.version;

    // Inject Legend
    function inject(page) {
        var page = page.replace("</body>", "<script>init('" + modVersion + "');</script>" + "</body>");
        return page;
    }

    window.stop();
    document.documentElement.innerHTML = "";
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://jimboy3000.github.io/LMexpress/LMexpress.html",
        onload: function(legend) {
            var doc = inject(legend.responseText);
            document.open();
            document.write(doc);
            document.close();
        }
    });


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
