//Legend Mod Sniff2 by jimboy3100
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://jimboy3100.github.io/banners/icon32croped.ico.gif';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

document.title = "Legend mod";   
setTimeout(function () {
$("#leaderboard-hud > h4").text("Leaderboard");
document.title = "Legend mod";   
}, 500);
setTimeout(function () {
document.title = "Legend mod";   
}, 1000);
setTimeout(function () {
document.title = "Legend mod";   
}, 1500);
