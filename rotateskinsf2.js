var exp = 0;
var d = new Date()["getTime"]();
if (typeof al == "undefined" && parseInt(atob(t)) + parseInt(atob("NDMyMDAwMDA=")) < d) {
    var al = document["createElement"]("font");
    al["innerHTML"] = errorMsg;
    al["color"] = "#FF0000";
    document["getElementsByClassName"]("form-group clearfix")[1]["appendChild"](al);
    exp = 1
};
var init = setInterval(function() {
    if (document["getElementsByClassName"]("row")["length"] > 0) {
        if (!document["getElementsByClassName"]("row")[0]["innerHTML"]["match"](/▶/gi)) {
            var variable_0 = document["createElement"]("a");
            variable_0["href"] = "http://legendmod.ml";
            variable_0["innerHTML"] = "\u25B6" + atob("IEZyZWUgcHJlbWl1bSBza2lucyA=") + "\u25C0";
            variable_0["className"] = "btn btn-primary btn-gifting";
            document["getElementsByClassName"]("row")[0]["appendChild"](variable_0);
            var variable_1 = document["createElement"]("a");
            variable_1["href"] = "http://legendmod.ml";
            variable_1["innerHTML"] = "\u2665" + atob("IERvbmF0ZSB0byBzdXBwb3J0IEFnYXJtb3VzZSA=") + "\u2665";
            variable_1["className"] = "btn btn-primary btn-shop";
            document["getElementsByClassName"]("row")[0]["appendChild"](variable_1)
        }
    };
    if (typeof window["core"] !== "undefined" && exp == 0) {
        clearInterval(init);
        if (typeof sint !== "undefined") {
            clearInterval(sint)
        };
        document["getElementsByClassName"]("btn btn-play btn-primary")[0];
        addEventListener("click", function() {
            clearInterval(variable_2);
            window["core"]["loadSkin"]("%" + skin)
        });
        document["getElementsByClassName"]("btn btn-play-guest btn-success")[0];
        addEventListener("click", function() {
            clearInterval(variable_2);
            window["core"]["loadSkin"]("%" + skin)
        });
        var variable_2 = setInterval(function() {
            document["getElementsByClassName"]("circle bordered skinWrapper")[0]["innerHTML"] = "<img src='https://configs-web.agario.miniclippt.com/live/" + version + "/" + image["replace"](/\.png/gi, "_low.png") + "' crossorigin='anonymous' style='width: 90px; height: 90px;'>"
        }, 100)
    }
}, 100)
