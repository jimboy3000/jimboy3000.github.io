$("#main-menu").hide();
$("#skins-panel").hide();
$("#quick-menu").hide();
$("#exp-bar").hide();


//var a="https://jimboy3100.github.io/legend.github.io/banners/galaxybanner.jpg"

$("#menu-footer").after('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/legend.github.io/banners/grey-08.jpg); border: 1px solid black; height: 450px; width: 600px;">'+
	'<div id="tutorial1" style="display:block;">'+
	'<p style="color:blue; font-size:24px"; align="middle">Welcome to Legendmod!</p>'+
	'<p style="color:white; font-size:18px";" align="middle">Legend mod for agar.io multiplayer action Chrome browser game (combines all). <br> This Mod is BIG!'+
	'<br>'+
	'Do you want a quick toor through the mod and selection of your settings?</p>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="starttutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="starttutorial(); return false" align="middle">YES</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">NO THANKS</u>'+
	'</div>'+
	
	
	'<div id="tutorial2" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">Why Legend? (This is your last mod)</p>'+
	'<p style="color:white; font-size:18px";" align="middle">1. This mod offers players all ogario feautures that include rendering of the game canvas'+
													  '<br>2. IS ALIVE! Auto updates (sometimes may need manual updates) '+
													  '<br>3. FFA/EXP/TEAM/PARTY integrated chat and minimap '+
													  '<br>4. Unlimited FPS - Unlocked, gameplay is quicker than Vanilla '+
													  '<br>5. Handlers for SIP (compatible with other mods/vanilla), party tokens, IP'+
													  '<br>6. Handlers for message commands, settings, locations, modes, etc'+
													  '<br>7. Copy Tokens/SIP (Tokens for party, SIP locked servers for other modes), IP(search), leaderboard from the leaderboard hud'+
													  '<br>8. Leaderboard and Minimap huds and many settings '+
													  '<br>9. Game is very moddable, make your own settings'+
													  
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue1tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue1tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	'<div id="tutorial3" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">How to find the same server?</p>'+
	'<p style="color:white; font-size:18px";" align="middle">1. SIP-TOKENS: Under the leaderboard click COPY->TOKEN. This copies the TOKEN if mode is party, or the SIP locked server for other modes.'+
													    '<br>This mod can create SIPs that are compatible with other mods and vanilla but also provide other information. (Use on URL) '+
													    '<br> '+
													    '<br>2. IP: COPY->IP, handlers of mod can search the IP/region/mode of the IP URL, or you can search a token from friend, IP, leaderboard or clan tag by using the Search button found onbuttom left of the leaderboard hud'+
													    '<br> '+
													    '<br>3. Change Server button'+
													    '<br> '+
													    '<br> Communication only Activates by rejoining server SIP-TOKEN, so use TOKEN instead of IP URL. For party communication just choose party '+
													   
													  
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue2tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue2tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+

	'<div id="tutorial4" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">HelloContainer Tabs</p>'+
	'<p style="color:white; font-size:18px";" align="middle"><i class="icon-home active"></i> Used for changing name, password, region, mode, login, play, spectace. Might also have manual imgur Weblink for skin, main tools and main banner if enabled'+
													    '<br><i class="icon-user"></i> Agario stuff, quests, skins, logout, etc, plus reference to other scripts being used by mod '+
													    '<br><i class="icon-cog"></i> Canvas rendering tools, very helpful for game!'+
													    '<br><i class="icon-droplet"></i> Settings about the interface of the mod, including 6 minitabs'+
													    '<br><i class="hotkeys-link icon-keyboard"></i> Hotkeys, for keypress uses of commands'+
													    '<br><i class="quick-yt icon-youtube2"></i> Youtube with url of your choice, can autostart when game starts if chosen'+
													    '<br><i class="fa fa-cogs"></i> Tools, the light blue buttons are suggested to be opened, do not open the red, the purple are optional.'+
													   
													  
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue3tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue3tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	'<div id="tutorial5" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">More Stuff</p>'+
	'<p style="color:white; font-size:18px";" align="middle">Hide/Show everything/timer calculator are request by youtubers/quest players'+
													    '<i class="fa fa-cogs"></i>Also... <br> You can change your minimap/leaderboard/teamboard/main canvas with a picture url and the message icons with imgur pictures e.g http://i.imgur.com/RVBi3T1.gif .Also you can change your chat position.'+
													    '<br> On <i class="fa fa-cogs"></i>TOOLS tab , the <i class="fa fa-puzzle-piece"></i>Shortcuts must be opened. You can use binoculars on specate mode (or press Q), use copy tools, youtube button or fullscreen '+
													    '<br> There is Chat button to hide/show to team, 6 message icons that you can send the default imgure icons or yours, and 6 message commands, mod gives direct commands to the script of your team player.'+
													    
													  
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue4tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue4tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	'<div id="tutorial6" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">More Stuff(2)</p>'+
	'<p style="color:white; font-size:18px";" align="middle"><br> Also you can find 2 side containers, the left is a small pannel of things and the right is to choose ogario or imgur images. '+
													    '<br> At last you can use your import/export your own settings by <i class="fa fa-puzzle-piece"></i>Settings->IMPORT/EXPORT SETTINGS-> Paste your code (and import) or export it'+
													   
													    '<br>'+
													  
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue5tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue5tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	'<div id="tutorial7" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">Frequently asked questions</p>'+
	'<p style="color:white; font-size:18px";" align="middle"><br><i class="fa fa-question-circle"></i> Mod uses party mode and cannot change, or other important Bug <i class="icon-bubbles"></i> Delete cookies chrome://settings/clearBrowserData.'+
													    '<br><i class="fa fa-question-circle"></i> I clicked a button that changed my settings <i class="icon-bubbles"></i> Restore settings on 3rd,4th and 5th tab, or delete cookies chrome://settings/clearBrowserData.'+
													    '<br><i class="fa fa-question-circle"></i> I like agario canvas interface <i class="icon-bubbles"></i> Choose <i class="icon-droplet active"></i> -> <i class="active icon-paint-format"></i> -> Theme preset-> Agario Light.'+
													    '<br><i class="fa fa-question-circle"></i> Does game cheat? Is it accepted by miniclip? <i class="icon-bubbles"></i> Mod is ACCEPTED by miniclip. SIP is a function of agario, mod does not use bots or hacks/cheats.'+
													    '<br><i class="fa fa-question-circle></i> Does mod collect personal innformation <i class="icon-bubbles"></i> Mod does not collect any information of users.'+
														'<br><i class="fa fa-question-circle"></i> In which language it is written? Is it a virus? <i class="icon-bubbles"></i> It is written in javascript, it is not a virus.'+
													  '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue6tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue6tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	
	'<div id="tutorial8" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">Scripts used - Special thanks</p>'+
	'<p style="color:white; font-size:18px";" align="middle"><br> Mod is written by Jimboy3100 '+
													    '<br> Uses ogario.ovh by Smyzy'+
													    '<br> Uses kittymod.tk by Kind Kitty'+
													    '<br> Uses many other scripts/codes found on https://greasyfork.org/en/scripts/by-site/agar.io'+
													    '<br>'+
														'<br> Special thanks to teodor bob (Guard) ,hanygohary, Hendrik Schönfelder (Destroyer), Interstellar'+
														'<br> and all playerS of ℄ FFA Legend Clan'+
													    '</p>'+
													  
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconyes.png" alt="Search Servers" id= "iconyes" onclick="continue7tutorial(); return false" class="img-rounded" alt="Cinque Terre" width=25% height="80">' +
	'<u style="color:blue; font-size:18px"; onclick="continue7tutorial(); return false" align="middle">Continue</u>'+
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+
	'</div>'+
	
	'<div id="tutorial9" style="display:none;">'+
	'<p style="color:blue; font-size:24px"; align="middle">Choose your settings</p>'+

	
	'<div id="settingbanners"><img src="https://jimboy3100.github.io/legend.github.io/banners/iconagario.png" alt="Search Servers" id= "searchicon" onclick="dosearch(); return false" class="img-rounded" alt="Cinque Terre" width=30% height="50">' +
	'<i style="color:blue; font-size:22px"; align="left">AgarioWhite</i><br>'+	
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/vanillapic.jpg" alt="Vanilla Like Settings" id = "vanillaset" onclick="vanillasettings(); return false" class="img-rounded"  return false" width=30% height="50" >' +
	'<i style="color:blue; font-size:22px"; align="right">Vanillabetter</i><br>'+	
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/galaxybanner.jpg" alt="Vanilla Like Settings" id = "galaxyset" onclick="galaxysettings(); return false" class="img-rounded"  return false" width=30%" height="50"  >' +
	'<i style="color:blue; font-size:22px"; align="left">Galaxy</i><br>'+	
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconmod.png" alt="Vanilla Like Settings" id = "legendclanbanner" class="img-rounded" return false" width=30% height="50" onclick="gotolegendml(); return false" > '+
	'<i style="color:blue; font-size:22px"; align="right">Legend Default</i><br>'+
	'</div>'+
													  
	
	'<img src="https://jimboy3100.github.io/legend.github.io/banners/iconno.png" alt="Vanilla Like Settings" id = "iconno" onclick="stoptutorial(); return false" class="img-rounded"  width=25% height="80" >' +
	'<u style="color:blue; font-size:18px"; onclick="stoptutorial(); return false" align="middle">Exit</u>'+	
	'</div></div>');

	
function stoptutorial(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#tutorial").hide();
}


function starttutorial(){
	$("#tutorial1").hide();
	$("#tutorial2").show();
}
function continue1tutorial(){
	$("#tutorial2").hide();	
	$("#tutorial3").show();
}
function continue2tutorial(){
	$("#tutorial3").hide();	
	$("#tutorial4").show();
}

function continue3tutorial(){
	$("#tutorial4").hide();	
	$("#tutorial5").show();
}

function continue4tutorial(){
	$("#tutorial5").hide();	
	$("#tutorial6").show();
}

function continue5tutorial(){
	$("#tutorial6").hide();	
	$("#tutorial7").show();
}

function continue6tutorial(){
	$("#tutorial7").hide();	
	$("#tutorial8").show();
}

function continue7tutorial(){
	$("#tutorial8").hide();	
	$("#tutorial9").show();
}


function agariowhitesettings(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"agario-light","darkTheme":false,"mainColor":"#ffffff","bgColor":"#f2fbff","gridColor":"#ced6d9","bordersColor":"#858a8c","foodColor":"#2de52d","virusColor":"#33ff33","virusStrokeColor":"#2de52d","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#ffffff","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#ffffff","top5MassColor":"#ffffff","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#ffffff","commandsColor":"rgba(255,255,255,0.9)","commandsTextColor":"#000000","commandsTimeColor":"#ffffff","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#ffffff","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#ffffff","miniMapTeammatesColor":"#ffffff","miniMapDeathLocationColor":"#ffffff","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.25,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
	$('#import-settings-btn').click();
}	


function legenddefaultsettings(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Feed me!","comm2":"Split into me!","comm3":"Need backup at %currentSector%!","comm4":"Enemy spotted at %currentSector%!","comm5":"Need a teammate!","comm6":"Tank the virus!","comm7":"Eat the virus!","comm8":"Lets bait!","comm9":"Fake tricksplit!","comm0":"Fuck!","comm10":"Tricksplit!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"Profile #1","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #2","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #3","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #4","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #5","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #6","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #7","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #8","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #9","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #10","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":true,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":true,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":false,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":false,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":false,"oppRings":false,"virColors":false,"splitRange":false,"virusesRange":false,"textStroke":false,"namesStroke":false,"massStroke":false,"cursorTracking":true,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":false,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":false,"showStatsN16":false,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#000a11","gridColor":"#00243e","bordersColor":"#01d9cc","foodColor":"#5000ff","virusColor":"#002f52","virusStrokeColor":"#00b9e8","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#01d9cc","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#01d9cc","top5MassColor":"#bf00aa","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#01d9cc","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Ubuntu","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.1,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
	$('#import-settings-btn').click();
}		



function vanillalike(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"Jim","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/legend.github.io/banners/grey-08.jpg","menuOpacity":0.97,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_20.cur"}}'
	$('#import-settings-btn').click();
}

