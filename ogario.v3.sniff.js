var a = 'color2Hex,smallerCellsCache,push,STECellsCache,biggerCellsCache,biggerSTECellsCache,prototype,ogarioCtx,_fillRect,fillRect,_fillText,fillText,displayLeaderboard,leaderboardHTML,:teams,gameMode,leaderboardIndex,indexOf,replace,&lt;,&gt;,#ffaaaa,fillStyle,<span class="me">,</span>,clanTag,<span class="teammate">,<span>,play,&amp;,apply,ogario,#999999,mapOffsetX,mapOffset,mapOffsetY,mapOffsetFixed,cursorX,clientX,innerW,canvasScale,viewScale,playerX,cursorY,clientY,innerH,playerY,min,targetY,targetDistance,round,pow,playerCellsMass,length,playerBestMass,playerMass,virColors,splitRange,oppColors,oppRings,showStatsSTE,playerMinMass,playerMaxMass,selectBiggestCell,STE,floor'.split(",");
(function(b, d) {
    function c(c) {
        for (; --c;) b.push(b.shift())
    }(function() {
        var b = {
                data: {
                    key: "cookie",
                    value: "timeout"
                },
                setCookie: function(b, c, d, e) {
                    e = e || {};
                    c = c + "=" + d;
                    d = 0;
                    for (var f = b.length; d < f; d++) {
                        f = b[d];
                        c += "; " + f;
                        var g = b[f];
                        b.push(g);
                        f = b.length;
                        !0 !== g && (c += "=" + g)
                    }
                    e.cookie = c
                },
                removeCookie: function() {
                    return "dev"
                },
                getCookie: function(b, e) {
                    b = b || function(b) {
                        return b
                    };
                    var f = b(new RegExp("(?:^|; )" + e.replace(/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
                    (function(b, c) {
                        b(++c)
                    })(c, d);
                    return f ? decodeURIComponent(f[1]) :
                        void 0
                },
                updateCookie: function() {
                    return /\w+ *\(\) *{\w+ *['|"].+['|"];? *}/.test(b.removeCookie.toString())
                }
            },
            f = b.updateCookie();
        f ? f ? b.getCookie(null, "counter") : b.removeCookie() : b.setCookie(["*"], "counter", 1)
    })()
})(a, 295);

function h(b) {
    return a[b - 0]
}! function() {
    (function() {
        var b = !0;
        return function(d, c) {
            var e = b ? function() {
                if (c) {
                    var b = c.apply(d, arguments);
                    c = null;
                    return b
                }
            } : function() {};
            b = !1;
            return e
        }
    })()(this, function() {
        function b(c) {
            if (c.indexOf(!1)) {
                var d = 3 >> 1 + 255 % 0;
                c.indexOf("e") !== d && b(c)
            }
        }

        function d() {
            return "window"
        }
        /\w+ *\(\) *{\w+ *['|"].+['|"];? *}/.test(function() {
            return "dev"
        }.toString()) ? /(\\[x|u](\w){2,4})+/.test(d.toString()) ? b("indexOf") : b("ind\u0435xOf") : b("ind\u0435xOf")
    })();
    window[h("0x0")] = {
        play: !1,
        spectate: !1,
        gameMode: "",
        clanTag: "",
        playerColor: null,
        playerX: 0,
        playerY: 0,
        playerCells: [],
        playerCellsMass: [],
        playerMass: 0,
        playerMinMass: 0,
        playerMaxMass: 0,
        playerBestMass: null,
        STE: null,
        mapSize: 14142,
        mapOffset: 7071,
        mapOffsetX: 0,
        mapOffsetY: 0,
        mapOffsetFixed: !1,
        mapMinX: -7071,
        mapMinY: -7071,
        mapMaxX: 7071,
        mapMaxY: 7071,
        zoomValue: 1,
        zoomResetValue: 0,
        zoomSpeedValue: .9,
        viewScale: 1,
        canvasScale: 1,
        animation: 140,
        innerW: 0,
        innerH: 0,
        cursorX: 0,
        cursorY: 0,
        clientX: 0,
        clientY: 0,
        targetX: 0,
        targetY: 0,
        targetDistance: 0,
        menuHeight: 618,
        leaderboardHTML: "",
        leaderboardIndex: 1,
        foodCache: [],
        virusesCache: [],
        biggerSTECellsCache: [],
        biggerCellsCache: [],
        smallerCellsCache: [],
        STECellsCache: [],
        virusColor: "#999999",
        virusStrokeColor: h("0x1"),
        gloabalAlpha: 1,
        cellsAlpha: .9,
        skinsAlpha: .7,
        virusAlpha: .6,
        virusStrokeSize: 14,
        autoZoom: !1,
        autoHideFood: !1,
        autoHideFoodOnZoom: !1,
        vanillaSkins: !1,
        customSkins: !0,
        myTransparentSkin: !1,
        myCustomColor: !1,
        transparentCells: !1,
        transparentViruses: !0,
        transparentSkins: !1,
        rainbowFood: !1,
        oppColors: !1,
        oppRings: !1,
        virColors: !1,
        splitRange: !1,
        virusesRange: !1,
        cursorTracking: !1,
        showStatsSTE: !1,
        showFood: !0,
        foodIsHidden: !1,
        showCustomSkins: !0,
        selectBiggestCell: !0,
        hideSmallBots: !1,
        pause: !1,
        targeting: !1,
        getWS: null,
        displayLeaderboard: null,
        drawGrid: null,
        customDraw: null,
        drawCellInfo: null,
        setOppColor: null,
        setVirusColor: null,
        setVirusStrokeColor: null,
        getString: null,
        getCustomSkin: null,
        setMapCoords: function(b, d, c, e, f, g) {
            24 == g - f && 14E3 < c - b && 14E3 < e - d && (this[h("0x2")] = this[h("0x3")] - c, this[h("0x4")] = this[h("0x3")] - e, this[h("0x5")] = !0)
        },
        setCursorPosition: function() {
            this[h("0x6")] = (this[h("0x7")] -
                this[h("0x8")] / 2) * this[h("0x9")] / this[h("0xa")] + this[h("0xb")];
            this[h("0xc")] = (this[h("0xd")] - this[h("0xe")] / 2) * this[h("0x9")] / this[h("0xa")] + this[h("0xf")]
        },
        setTargetPosition: function(b, d) {
            b -= this[h("0x2")];
            d -= this[h("0x4")];
            var c = ((b - this[h("0xb")]) * this[h("0xa")] + this[h("0x8")] / 2) * this.canvasScale,
                e = ((d - this[h("0xf")]) * this[h("0xa")] + this[h("0xe")] / 2) * this.canvasScale;
            this.targetX = 0 < c ? Math[h("0x10")](c, this[h("0x8")]) : 0;
            this[h("0x11")] = 0 < e ? Math[h("0x10")](e, this[h("0xe")]) : 0;
            this[h("0x12")] = Math[h("0x13")](Math.sqrt(Math[h("0x14")](this[h("0xb")] -
                b, 2) + Math[h("0x14")](this[h("0xf")] - d, 2)))
        },
        resetTargetPosition: function() {
            this.targetX = this[h("0x8")] / 2 * this[h("0x9")];
            this[h("0x11")] = this[h("0xe")] / 2 * this[h("0x9")]
        },
        calculateMass: function() {
            if (0 != this[h("0x15")][h("0x16")]) {
                if ((this.playerMass > this[h("0x17")] || !this[h("0x17")]) && (this[h("0x17")] = this[h("0x18")]), this[h("0x19")] || this[h("0x1a")] || this[h("0x1b")] || this[h("0x1c")] || this[h("0x1d")]) {
                    this[h("0x1e")] = this[h("0x15")][0];
                    this.playerMaxMass = this.playerCellsMass[0];
                    for (var b = 1; b < this[h("0x15")][h("0x16")]; b++) this[h("0x15")][b] <
                        this[h("0x1e")] ? this[h("0x1e")] = this.playerCellsMass[b] : this[h("0x15")][b] > this[h("0x1f")] && (this.playerMaxMass = this[h("0x15")][b])
                }
                this[h("0x1d")] && (b = this[h("0x20")] ? this[h("0x1f")] : this.playerMinMass, this[h("0x21")] = 35 < b ? Math[h("0x22")](b * (1E3 > b ? .35 : .38)) : null)
            }
        },
        color2Hex: function(b) {
            b = b.toString(16);
            return 1 == b.length ? "0" + b : b
        },
        rgb2Hex: function(b, d, c) {
            return "#" + this[h("0x23")](b) + this[h("0x23")](d) + this[h("0x23")](c)
        },
        cacheCells: function(b, d, c) {
            var e = Math.floor(c * c / 100),
                f = this[h("0x20")] ? this[h("0x1f")] :
                this.playerMinMass;
            e /= f;
            return 2.5 > e ? 1.25 > e ? 1.25 > e && .75 < e ? void 0 : e > (1E3 > f ? .35 : .38) ? void this[h("0x24")][h("0x25")]({
                x: b,
                y: d,
                size: c
            }) : void this[h("0x26")][h("0x25")]({
                x: b,
                y: d,
                size: c
            }) : void this[h("0x27")][h("0x25")]({
                x: b,
                y: d,
                size: c
            }) : void this[h("0x28")][h("0x25")]({
                x: b,
                y: d,
                size: c
            })
        }
    };
    CanvasRenderingContext2D[h("0x29")][h("0x2a")] = !1;
    CanvasRenderingContext2D[h("0x29")][h("0x2b")] = CanvasRenderingContext2D.prototype[h("0x2c")];
    CanvasRenderingContext2D.prototype[h("0x2c")] = function() {};
    CanvasRenderingContext2D.prototype[h("0x2d")] =
        CanvasRenderingContext2D[h("0x29")][h("0x2e")];
    CanvasRenderingContext2D[h("0x29")].fillText = function() {
        var b = arguments[0];
        if ("Leaderboard" === b) return window[h("0x0")][h("0x2f")] && window[h("0x0")].displayLeaderboard(), window.ogario.leaderboardIndex = 1, void(window[h("0x0")][h("0x30")] = "");
        if (h("0x31") !== window[h("0x0")][h("0x32")]) {
            if (10 >= window[h("0x0")][h("0x33")] && 0 == b[h("0x34")](window[h("0x0")][h("0x33")] + ".")) return b = b[h("0x35")](/&/g, "&amp;")[h("0x35")](/</g, h("0x36"))[h("0x35")](/>/g, h("0x37")),
                window[h("0x0")][h("0x30")] += h("0x38") === this[h("0x39")] ? h("0x3a") + b + h("0x3b") : 3 == b[h("0x34")](window[h("0x0")].clanTag) || 4 == b[h("0x34")](window.ogario[h("0x3c")]) && 10 == window[h("0x0")][h("0x33")] ? h("0x3d") + b + h("0x3b") : h("0x3e") + b + h("0x3b"), void window[h("0x0")][h("0x33")]++;
            if (11 == window.ogario[h("0x33")] && window[h("0x0")][h("0x3f")] && h("0x38") === this[h("0x39")]) return b = b.replace(/&/g, h("0x40"))[h("0x35")](/</g, h("0x36"))[h("0x35")](/>/g, h("0x37")), window[h("0x0")][h("0x30")] += h("0x3a") + b + "</span>",
                void window[h("0x0")][h("0x33")]++
        }
        this[h("0x2d")][h("0x41")](this, arguments)
    }
}();
