// ==UserScript==
// @name         Legend Mod TEST1
// @namespace    Legend Agario Mod
// @version      2.1
// @description  Agario Mod - Legend,Ogario,Kitty,Old Skins,Animated Skins,Language Packs,Manual User Scripts,Chat,60++ Macros/Hotkeys(Tricksplit,Doublesplit,Quick Feeding,Popsplit,Auto Coins,Freeze Cell Macro,Auto respawn)
// @homepage     http://www.legendmod.ml
// @author       Jimboy3100
// @icon         https://jimboy3100.github.io/banners/CropedImage128.gif
// @match        http://agar.io/*
// @match        https://talky.io/*
// @downloadURL  jimboy3100.github.io/legendmod.user.js
// @updateURL    jimboy3100.github.io/legendmod.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// ==/UserScript==

// Legend Mod by Jimboy3100


/*MIT License

Copyright (c) [2017] [The Legend Mod]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Start of script
if (location.host == "agar.io" && location.pathname == "/") {
    location.href = "http://agar.io/legendmod" + window.location.search + location.hash;
    //return;


// Dependencies

var cpickerCSS = '<link href="https://jimboy3100.github.io/bootstrap-colorpicker.min.css" rel="stylesheet"></link>';
var toastrCSS = '<link href="https://jimboy3100.github.io/toastr.min.css" rel="stylesheet"></link>';
var switchCSS = '<link href="https://jimboy3100.github.io/switchery.min.css" rel="stylesheet"></link>';
var rangeCSS = '<link href="https://jimboy3100.github.io/rangeslider.css" rel="stylesheet"></link>';
var perfectCSS = '<link href="https://jimboy3100.github.io/perfect-scrollbar.min.css" rel="stylesheet"></link>';
var faCSS = '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>';
var legendarioCSS = '<link href="http://cdn.ogario.ovh/v3/ogario.v3.css?v=333" rel="stylesheet"></link>';
//var legendarioCSS = '<link href="https://jimboy3100.github.io/legend.css?v=333" rel="stylesheet"></link>';

var ytJS = '<script src="https://jimboy3100.github.io/Youtubeiframe_api.js"></script>';
var keyJS = '<script src="https://jimboy3100.github.io/key-event.js"></script>';
var cpickerJS = '<script src="https://jimboy3100.github.io/bootstrap-colorpicker.min.js"></script>';
var toastrJS = '<script src="https://jimboy3100.github.io/toastr.min.js"></script>';
var switchJS = '<script src="https://jimboy3100.github.io/switchery.min.js"></script>';
var rangeJS = '<script src="https://jimboy3100.github.io/rangeslider.min.js"></script>';
var perfectJS = '<script src="https://jimboy3100.github.io/perfect-scrollbar.jquery.min.js"></script>';
var legendJS = '<script src="https://jimboy3000.github.io/legendmod.js"></script>';
var legendJSniffJS = '<script src="https://jimboy3000.github.io/legend.sniff.js"></script>';
var legendJSniff2JS = '<script src="https://jimboy3000.github.io/legend.sniff2.js"></script>';
var legendJSniff3JS = '<script src="https://jimboy3000.github.io/changedskins.js"></script>';
var legendarioSniffJS = '<script src="http://cdn.ogario.ovh/v3/ogario.v3.sniff.js?v=333"></script>';
var legendarioJS = '<script src="http://cdn.ogario.ovh/v3/ogario.v3.js?v=333" charset="utf-8"></script>';
var modVersion = GM_info.script.version;

// Inject Legend
function inject(page) {
//    var page = page.replace("</head>", cpickerCSS + toastrCSS + switchCSS + rangeCSS + perfectCSS + legendarioCSS  + cpickerJS + toastrJS + switchJS + rangeJS + perfectJS + legendarioSniffJS + legendJSniff2JS + ytJS + keyJS + "</head>");
    var page = page.replace("</head>", cpickerCSS + toastrCSS + switchCSS + rangeCSS + perfectCSS + legendarioCSS  + faCSS + cpickerJS + toastrJS + switchJS + rangeJS + perfectJS + legendJSniff2JS + legendarioSniffJS + ytJS + keyJS + "</head>");
    page = page.replace(/<script.*?>[\s]*?.*?window\.NREUM[\s\S]*?<\/script>/, "");
    page = page.replace(/<script.*?src=".*?agario\.core\.js.*?><\/script>/, "");
    page = page.replace("</body>", legendJSniffJS + legendarioJS + legendJS + legendJSniff3JS + "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}

window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method: "GET",
    url: "http://agar.io/",
    onload: function (e) {
        var doc = inject(e.responseText);
        document.open();
        document.write(doc);
        document.close();
    }
});
// End of Script

(function() {
    'use strict';
    function pre_loop(){
        if(! document.getElementById("message-box")){
            setTimeout(pre_loop, 4000);
            console.log("VoiceDeOChat:wait for Legend load");
            return;
        }
        return initialize();
    }
    return pre_loop();
    function initialize(){
        var lang_hash = { "default":"default", "ja":"日本語", "en-US":"English", "en-US":"Ελληνικά", "zh-CN":"简体中文", "zh-TW":"繁體中文", "ko":"한국어" };
        var cfg = {};
        cfg.prefix = GM_getValue("prefix", "🎤");
        cfg.lang = GM_getValue("lang", "default");
        cfg.unpause = GM_getValue("unpause", false);
        console.log("load prefix="+ cfg.prefix +" lang="+ cfg.lang +" unpause="+ cfg.unpause);
        $("#message-box").mousedown(function(){return false;});
        $(".team-top-menu").mousedown(function(){return false;});
        $("#message-menu").append('<a href="#" class="chatbox-hide icon-close" style="float:right;">X</a>');
        $(".chatbox-hide").click(function(){
            $("#message-box").css("display", "none");
            if(cfg.unpause && $("#pause-hud").css("display") == "block"){
                var code = 82; // 'R'
                $(document).trigger(jQuery.Event('keydown',{ keyCode: code, which: code } ));
            }
        });
        $("#message-menu").append('<a href="#" class="chatbox-clear icon-clear" style="float:right;">C</a>');
        $(".chatbox-clear").click(function(){
            $("#message").val("");
        });
        window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        var recognition = new window.SpeechRecognition();
        if(cfg.lang !== "default"){
            recognition.lang = cfg.lang;
        }
        console.log("cfg.lang/recognition.lang="+ cfg.lang +"/"+ recognition.lang);
        recognition.addEventListener('result', function(event){
            var text_to = event.results.item(0).item(0).transcript;
            var text_pre = $("#message").val();
            if(text_pre === ""){
                text_to = cfg.prefix + text_to;
            }else{
                text_to = text_pre + " " + text_to;
            }
            $("#message").val(text_to);
        }, false);
        recognition.addEventListener('end', function(event){
            fn_recognition_end();
        }, false);
        $("#message-menu").append('<a href="#" class="voice-start icon-mic" style="float:right;">🎤</a>');
        $(".voice-start").click(function(){
            fn_recognition_start();
        });
        function fn_recognition_start(){
            $("#voice-config").css("display", "none");
            $(".voice-start").css("background-color", "green");
            recognition.start();
        }
        function fn_recognition_end(){
            $(".voice-start").css("background-color", "");
        }
        $("#og-options").append('<div id="voice-config" class="options-box voiceGroup"></div>');
        $("#voice-config").append('<h5 class="menu-main-color">Voice</h5>');
        $("#voice-config").append('<label>Voice-Prefix:<input type="text" id="voice-prefix" style="width:4em; float:none;" value="'+ cfg.prefix +'"/></label>');

        function fn_lang_make(){
            $("#voice-config").append('<label>Voice-lang:<select id="voice-lang"/></select></label>');
            for(var code in lang_hash){
                var desc = lang_hash[code];
                var selected = (code === cfg.lang) ? ' selected' : '';
                $("#voice-lang").append('<option value="'+ code +'"'+ selected +'>'+ desc +'</option>');
            }
        }
        fn_lang_make();
        $("#voice-config").append('<label title="Voice UnPause><input type="checkbox" id="voice-unpause"'+ (cfg.unpause ? ' checked' : '') +'/>UnPause</label>');

        var observ_obj = $("#og-settings");
        var observ_cur = observ_obj.css("display");
        var observer = new MutationObserver(function(mutations){
            var observ_pre = observ_cur;
            var observ_new = observ_obj.css("display");
            observ_cur = observ_new;
            if(observ_new == "none" && observ_pre == "block"){
                fn_config_save();
            }
        });
        observer.observe(observ_obj[0], { attributes: true, attributeFilter:['style'] });
        function fn_config_save(){
            cfg.prefix = $("#voice-prefix").val();
            GM_setValue("prefix", cfg.prefix);
            cfg.lang = $("#voice-lang").val();
            GM_setValue("lang", cfg.lang);
            if(cfg.lang !== "default"){
                recognition.lang = cfg.lang;
            }
            cfg.unpause =  $("#voice-unpause").prop('checked');
            GM_setValue("unpause", cfg.unpause);
            console.log("saved prefix="+ cfg.prefix +" lang="+ cfg.lang +" unpause="+ cfg.unpause);
        }
     }
})();
}

if (location.host == "talky.io") {
	
setTimeout(function () {
document.getElementById('skip').click();
document.getElementsByClassName('TalkyButton__text')[0].click();
}, 3500);	
setTimeout(function () {
	
document.getElementsByClassName('message message-info message-full-width')[0].before('Legend Agar.io Mod Chat Rooms:');
document.getElementsByClassName('message message-info message-full-width')[0].style.visibility = 'hidden';  

document.getElementsByClassName('Box _3-HLfCQ5QT5fuKgw4tvBkP')[0].remove();	
document.getElementsByClassName('-ZMXacQm9s80kTx3I-A47')[0].remove();	
	
}, 4000);
setTimeout(function () {	
document.getElementsByClassName('_26dP_7FWLFRnvW8hs-AIzR')[0].remove();
}, 4500);
}
//https://appr.tc/?videofec=false
