function abRosta(a, b, c) {
    if (a)
        if ("" !== b && "" !== c) {
            var d = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c;
            window.open("", "rostaWin", d),
            a.target = "rostaWin",
            a.submit()
        } else
            a.target = "_self",
            a.submit()
}
function abRostResultat(a, b, c) {
    var d;
    if ("" !== a)
        if (d = "http://wwwc.aftonbladet.se/vss/special/storfragan/visa/0,1937," + a + ",00.html",
        "" !== b && "" !== c) {
            var e = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c;
            window.open(d, "displayWindow", e)
        } else
            document.location = d
}
function abWindowOpen(a, b, c, d, e) {
    var f, g;
    return !!a && (-1 == location.href.indexOf("http://aftonbladet.se") && -1 == location.href.indexOf("www.aftonbladet.se") && -1 == location.href.indexOf("production.aftonbladet.se") && -1 == a.indexOf("http") && -1 == location.href.indexOf("abse") && (a = "http://www.aftonbladet.se" + a),
    b || (b = "300"),
    c || (c = "300"),
    d || (d = "3"),
    e = e || "msgWindow",
    g = "1" == d ? "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" + b + ",height=" + c : "2" == d ? "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=" + b + ",height=" + c : "3" == d ? "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c : "4" == d ? "toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c : "5" == d ? "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c : "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + b + ",height=" + c,
    f = window.open(a, e, g),
    f.focus(),
    !1)
}
function openSite(a, b, c) {
    abWindowOpen(a, b, c, "3")
}
function abGetCookie(a) {
    if (document.cookie.length > 0) {
        var b = document.cookie.indexOf(a + "=");
        if (-1 != b) {
            b += a.length + 1;
            var c = document.cookie.indexOf(";", b);
            return -1 == c && (c = document.cookie.length),
            unescape(document.cookie.substring(b, c))
        }
    }
    return null
}
function abSetCookie(a, b, c, d) {
    var e = new Date;
    e.setTime(e.getTime() + 24 * c * 3600 * 1e3),
    document.cookie = a + "=" + escape(b) + (null === c ? "" : "; expires=" + e.toGMTString()) + ";path=/" + (d ? "; domain=" + d : "")
}
function abToggleDisplay(a) {
    var b = document.getElementById(a);
    b && ("none" == b.style.display ? b.style.display = "block" : b.style.display = "none")
}
define("ab-burt-unit-api", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; b > d; d++)
                c[d - 1] = arguments[d];
            window.burtUnitAPIInternal.push({
                method: a,
                parameters: c
            })
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.OptionsBuilder = b.reloadingAd = b.trackAd = b.init = b.adLoaded = b.addAnnotationsOnUnit = void 0;
        var e = c(1);
        window.burtUnitAPIInternal = window.burtUnitAPIInternal || [],
        b.addAnnotationsOnUnit = function(a, b) {
            return d("addAnnotationsOnUnit", a, b)
        }
        ,
        b.adLoaded = function(a) {
            return d("adLoaded", a)
        }
        ,
        b.init = function(a) {
            return d("init", a)
        }
        ,
        b.trackAd = function(a, b) {
            return d("trackAd", a, b)
        }
        ,
        b.reloadingAd = function(a) {
            return d("reloadingAd", a)
        }
        ,
        b.OptionsBuilder = e.UnitOptions
    }
    , function(a, b, c) {
        var d, e;
        d = [],
        void 0 !== (e = function() {
            return function(a) {
                function b(d) {
                    if (c[d])
                        return c[d].exports;
                    var e = c[d] = {
                        exports: {},
                        id: d,
                        loaded: !1
                    };
                    return a[d].call(e.exports, e, e.exports, b),
                    e.loaded = !0,
                    e.exports
                }
                var c = {};
                return b.m = a,
                b.c = c,
                b.p = "/assets/",
                b(0)
            }([function(a, b, c) {
                "use strict";
                function d(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                }
                function e() {
                    this.unitScope = i,
                    this.unitOptions = {
                        annotations: [],
                        connections: [],
                        filled: !1,
                        meta: {
                            cloudKeys: null
                        }
                    },
                    this.loadType = null,
                    this.lazyLoadThreshold = null,
                    this.pixelsFromTop = null,
                    this.loadTypeDelayedPrio = null,
                    this.regions = null,
                    this.adServer = null,
                    this.impression = null
                }
                function f(a, b) {
                    return {
                        scope: b,
                        name: "load-type",
                        value: a
                    }
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }),
                b.UnitOptions = void 0;
                var g = c(1)
                  , h = d(g)
                  , i = "aftonbladet.unit"
                  , j = [{
                    builderProperty: "lazyLoadThreshold",
                    optionKey: "annotations"
                }, {
                    builderProperty: "loadType",
                    optionKey: "annotations"
                }, {
                    builderProperty: "loadTypeDocReadyPrio",
                    optionKey: "annotations"
                }, {
                    builderProperty: "regions",
                    optionKey: "annotations"
                }, {
                    builderProperty: "adServer",
                    optionKey: "annotations"
                }, {
                    builderProperty: "impression",
                    optionKey: "annotations"
                }]
                  , k = ["cloudKeys"];
                e.prototype.overrideUnitScope = function(a) {
                    return this.unitScope = a,
                    this
                }
                ,
                e.prototype.setLazyLoad = function(a) {
                    return this.loadType = f("lazy-load", this.unitScope),
                    this.lazyLoadThreshold = {
                        scope: this.unitScope,
                        name: "lazy-load-pixel-threshold",
                        value: a
                    },
                    this
                }
                ,
                e.prototype.setJavaScriptInlineLoad = function() {
                    return this.loadType = f("js-inline", this.unitScope),
                    this
                }
                ,
                e.prototype.setDelayedLoad = function() {
                    var a = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    return this.loadType = f("delayed", this.unitScope),
                    this.loadTypeDelayedPrio = {
                        scope: this.unitScope,
                        name: "delayed-load-prio",
                        value: a
                    },
                    this
                }
                ,
                e.prototype.setPixelsFromTopLoad = function() {
                    var a = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    return this.loadType = f("pixels-from-top", this.unitScope),
                    this.pixelsFromTop = {
                        scope: this.unitScope,
                        name: "load-pixels-from-top",
                        value: a
                    },
                    this
                }
                ,
                e.prototype.addRegionLoad = function(a, b) {
                    return a && b ? (this.regions || (this.regions = []),
                    this.regions.push({
                        begin: a,
                        end: b
                    }),
                    this.loadType = f("region", this.unitScope),
                    this) : this
                }
                ,
                e.prototype.setAdTechAsAdServer = function() {
                    return this.adServer = {
                        scope: this.unitScope,
                        name: "primary-ad-server",
                        value: "AdTech"
                    },
                    this
                }
                ,
                e.prototype.setAppNexusAsAdServer = function() {
                    return this.adServer = {
                        scope: this.unitScope,
                        name: "primary-ad-server",
                        value: "AppNexus"
                    },
                    this
                }
                ,
                e.prototype.setFilledTrue = function() {
                    return this.unitOptions.filled = !0,
                    this
                }
                ,
                e.prototype.setDataCloudKeys = function(a) {
                    return this.unitOptions.meta.cloudKeys = a,
                    this
                }
                ,
                e.prototype.setImpressionTrue = function() {
                    return this.impression = {
                        scope: this.unitScope,
                        name: "impression",
                        value: !0
                    },
                    this
                }
                ,
                e.prototype.getResults = function() {
                    var a = this;
                    return j.forEach(function(b) {
                        a[b.builderProperty] && a.unitOptions[b.optionKey].push(a[b.builderProperty])
                    }),
                    k.forEach(function(b) {
                        a[b] && (a.unitOptions.meta[b] = a[b])
                    }),
                    this.unitOptions
                }
                ,
                b.UnitOptions = (0,
                h.default)(e)
            }
            , function(a, b) {
                "use strict";
                function c(a, b) {
                    return function() {
                        var c = new a;
                        return c[b].apply(c, arguments)
                    }
                }
                function d(a) {
                    var b = {};
                    for (var d in a.prototype)
                        a.prototype.hasOwnProperty(d) && (b[d] = c(a, d));
                    return b
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }),
                b.default = d
            }
            ])
        }
        .apply(b, d)) && (a.exports = e)
    }
    ])
}),
define("ab-burt-unit-utils", ["ab-burt-unit-api", "page"], function(a, b) {
    "use strict";
    function c() {
        return b.burtUnitEnabled
    }
    function d(b, d) {
        c() && a.trackAd(b, d)
    }
    function e(b) {
        c() && a.addAnnotationsOnUnit(b, a.OptionsBuilder.setAdTechAsAdServer().getResults())
    }
    function f(b, d) {
        c() && a.addAnnotationsOnUnit(b, a.OptionsBuilder.setLazyLoad(d).getResults())
    }
    function g(b, d) {
        c() && a.addAnnotationsOnUnit(b, a.OptionsBuilder.setDelayedLoad(d).getResults())
    }
    return {
        isBurtUnitEnabled: c,
        trackAd: d,
        setAdtechAsPrimaryServer: e,
        setLoadedWithLazyLoad: f,
        setDelayedLoad: g
    }
}),
function() {
    "use strict";
    function a(a, b) {
        define(a, [], function() {
            return b
        })
    }
    a("win", window),
    a("doc", document),
    a("nav", navigator),
    a("page", window.ABse.page)
}(),
define("abse", ["win"], function(a) {
    "use strict";
    return a.ABse = a.ABse || {},
    a.ABse.stats = a.ABse.stats || {},
    a.ABse.inHeadTS = window.performance && "function" == typeof window.performance.now ? Math.round(window.performance.now()) : (new Date).getTime(),
    a.ABse
}),
define("ab-desktop-device", ["win"], function(a) {
    "use strict";
    var b = a.ABse || {};
    return b.device = b.device || {},
    b.device
}),
define("ab-desktop-pagetemplate", ["win"], function(a) {
    "use strict";
    var b = a.ABse || {};
    return b.framework = b.framework || {},
    b.framework
}),
define("ab-shared-cookie", ["doc"], function(a) {
    "use strict";
    function b(b) {
        try {
            return decodeURIComponent(a.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + encodeURIComponent(b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"), "$1")) || null
        } catch (a) {
            return null
        }
    }
    function c(b, c, d) {
        var e = new Date;
        try {
            e.setTime(e.getTime() + 1e3 * d * 3600),
            a.cookie = b + "=" + c + "; expires=" + e.toGMTString() + ";path=/; domain=.aftonbladet.se"
        } catch (a) {}
    }
    function d(b) {
        try {
            a.cookie = b + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=aftonbladet.se"
        } catch (a) {}
    }
    var e = function() {
        a.cookie = "cookieTest=1; path=/;";
        var c = b("cookieTest");
        return a.cookie = "cookieTest=1; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;",
        Boolean(c)
    }();
    return {
        isEnabled: function() {
            return e
        },
        getCookie: b,
        setCookie: c,
        clear: d
    }
}),
define("ab-desktop-ad-traffic-api", ["win", "doc", "page", "ab-shared-cookie", "jquery"], function(a, b, c, d, e) {
    "use strict";
    var f = !1
      , g = function(a) {
        a && e("body").css("background-color", a)
    }
      , h = function() {
        d.setCookie("abMegaAd", "1", 24)
    }
      , i = function(a) {
        var b, c = e("#abOutsider"), d = e(".abPanorama"), f = e("body"), g = e("#abHeaderContainer"), h = 1020;
        if (d.length && (f.addClass("abBigBang"),
        b = g.outerHeight() - 190,
        b < 0 && (b = 0),
        b > 0 && d.css("top", b),
        c.length)) {
            var i = d.height();
            "boolean" == typeof a && a ? (f.addClass("abBigBangPlus"),
            c.find(".abAdArea").addClass("abHideAdMark"),
            d.height(h),
            c.css("top", h + b)) : (c.find(".abAdArea").addClass("abPremiumAdCompatible"),
            c.css("top", i + b))
        }
    }
      , j = function() {
        return f
    }
      , k = function(b) {
        f = !0,
        void 0 === c.articleId && ABY.use("node-base", function(c) {
            var d = c.one(b);
            d && d.get("children").item(0) && ABY.use("ab-sticky-v2", function(b) {
                a.abOutsider1Sticky = new b.Ab.StickyV2({
                    node: d.get("children").item(0),
                    containedIn: d,
                    thresholdBottomNode: !1
                })
            })
        })
    }
      , l = function() {
        a.abOutsider1Sticky && (a.abOutsider1Sticky.destroy(),
        delete a.abOutsider1Sticky)
    }
      , m = function() {
        e("#abBody").addClass("clearfix").css({
            overflow: "visible"
        })
    };
    return {
        DestroyOutsiderSticky: l,
        InitBigBang: i,
        InitLFormatv2: function() {
            var a = e(".abPanorama")
              , c = e("#abOutsider");
            a.length && (a.append("<div class='abLFormatBGCover'></div>"),
            e(b.body).addClass("abLFormat"),
            c.find(".abAdArea").addClass("abPremiumAdCompatible"),
            c.length && c.css("margin-top", a.height() + a.offset().top))
        },
        SetBigBangTheme: g,
        InitOutsiderSticky: k,
        InitWideOutsider: m,
        IsOutsiderSticky: j,
        MegaHasBeenDisplayed: h
    }
}),
define("observable", [], function() {
    "use strict";
    function a(a) {
        b.call(a)
    }
    var b = function() {
        function a(a) {
            var b = this.subscribers[a];
            return void 0 !== b && null !== b && b.length > 0
        }
        function b(a, b, c) {
            if (this.hasSubscribers(b)) {
                var d, e = this.subscribers[b];
                for (d = 0; d < e.length; d += 1)
                    "publish" === a ? e[d](c) : e[d] === c && e.splice(d, 1)
            }
        }
        function c(a, b) {
            void 0 === this.subscribers[a] && (this.subscribers[a] = []),
            this.subscribers[a].push(b)
        }
        function d(a, c) {
            b.call(this, "publish", a, c)
        }
        function e(a, c) {
            b.call(this, "unsubscribe", a, c)
        }
        return function() {
            this.subscribers = [],
            this.publish = d,
            this.subscribe = c,
            this.unsubscribe = e,
            this.hasSubscribers = a
        }
    }();
    return {
        makeObservable: a
    }
}),
define("ad-url-params", ["win", "ab-shared-cookie", "page", "app-detector", "local-storage"], function(a, b, c, d, e) {
    "use strict";
    function f() {
        var a = b.getCookie("nPsegs");
        return "string" == typeof a ? a.replace(/\|/g, ":") : ""
    }
    function g() {
        var a = [];
        return "string" == typeof c.sectionUniqueName && "ece_frontpage" !== c.sectionUniqueName && (a = c.sectionUniqueName.split("_")),
        "string" == typeof c.extraAdSectionName && a.push(c.extraAdSectionName),
        a.join(":")
    }
    function h() {
        return a.adgroupid || (a.adgroupid = Math.round(1e3 * Math.random())),
        a.adgroupid
    }
    function i() {
        return d.isApp() ? require("app-abappinfo").getUifa() : ""
    }
    function j() {
        var b;
        if (a.ABAppBridge && a.ABAppBridge.beaconTags)
            try {
                if ((b = a.ABAppBridge.beaconTags()) && b.length) {
                    var d = JSON.parse(b);
                    return d.tags.length ? d.tags.join(":") : ""
                }
            } catch (b) {
                a.console.log("could not parse iBeaconTags, reason: ", b)
            }
        else if (c.glimrScriptEnabled)
            return m.getTags()
    }
    function k() {
        return {
            protocol: a.location.protocol.replace(/:/g, ""),
            server: "adv.aftonbladet.se",
            network: "1557.1",
            placement: c.adtechDefaultPlacementID,
            grp: h(),
            pageid: 0,
            sizeid: -1,
            kvadgw: "",
            kvnp: f(),
            kvpage: c.articleId ? "artikel" : "index",
            kvadid: c.adid || "",
            kvsection: g(),
            kvviewmode: d.isApp() ? "inapp" : "notinapp",
            screenheight: a.screen.height.toString(),
            screenwidth: a.screen.width.toString(),
            screendensity: a.devicePixelRatio ? a.devicePixelRatio.toString() : void 0,
            misc: (new Date).getTime(),
            kvglimr: j(),
            kvibeacon: j(),
            articleId: c.articleId,
            kvadfilter: "advanced",
            guid: i(),
            kvtags: c.articleTagNames && c.articleTagNames.length > 0 ? c.articleTagNames.join(":") : "",
            kvpagegen: "abse",
            kvdevicetype: l
        }
    }
    var l = "string" == typeof c.siteName ? c.siteName.toLowerCase() : "mobile"
      , m = {
        getTags: function() {
            if (void 0 !== m.cachedObj)
                return m.cachedObj;
            var a = e.readValue("glimrTags")
              , b = m.tagsToString(a);
            return m.cachedObj = b,
            b
        },
        tagsToString: function(a) {
            return (a && a.tags ? a.tags : []).join(":")
        }
    };
    return {
        get: k,
        getLocationTags: j
    }
}),
define("ad-url-builder", [], function() {
    "use strict";
    function a(a, b) {
        var c = b;
        return c.protocol + "://" + c.server + "/addyn/3.0/" + c.network + "/" + c.placement + "/" + c.pageid + "/" + c.sizeid + "/ADTECH;loc=100;target=_blank;alias=" + a + ";kvadgw=;kvnp=" + c.kvnp + ";kvpage=" + c.kvpage + ";kvsection=" + c.kvsection + ";kvadid=" + c.kvadid + ";kvviewmode=" + c.kvviewmode + ";kvadfilter=" + c.kvadfilter + ";grp=" + c.grp + ";screenheight=" + c.screenheight + ";screenwidth=" + c.screenwidth + (c.screendensity ? ";screendensity=" + c.screendensity : "") + (c.kvglimr ? ";kvglimr=" + c.kvglimr : "") + (c.kvibeacon ? ";kvibeacon=" + c.kvibeacon : "") + (c.articleId ? ";kvarticleid=" + c.articleId + "@abse" : "") + ";misc=" + c.misc + ";guid=" + c.guid + ";kvtags=" + c.kvtags + ";kvpagegen=abse;kvdevicetype=" + (c.kvdevicetype ? c.kvdevicetype : "mobile")
    }
    return {
        create: a
    }
}),
define("local-storage", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b) {
        function c(a, b) {
            return a + b < (new Date).getTime()
        }
        function d(a, b, c) {
            if (i && void 0 !== b && null !== b) {
                var d = {
                    data: b,
                    timestamp: c || (new Date).getTime()
                };
                return h.localStorage.setItem(a, JSON.stringify(d)),
                !0
            }
            return !1
        }
        function e(a) {
            i && h.localStorage.removeItem(a)
        }
        function f(a) {
            var b = h.localStorage.getItem(a);
            try {
                return JSON.parse(b)
            } catch (c) {
                h.console.log("Unable to parse stored value for key " + a + ". Clearing value.", b),
                e(a)
            }
            return null
        }
        function g(a, b) {
            var d;
            return i ? (d = f(a),
            d && d.data ? "number" == typeof b && d.timestamp && c(d.timestamp, b) ? null : d.data : null) : null
        }
        var h = window
          , i = function() {
            try {
                var a = "test";
                return h.localStorage.setItem(a, a),
                h.localStorage.removeItem(a),
                !0
            } catch (a) {
                return !1
            }
        }();
        a.exports = {
            persistValue: d,
            readValue: g,
            clearValue: e,
            hasStorageCapability: i
        }
    }
    ])
}),
define("network-detection", ["request"], function(a) {
    "use strict";
    function b() {
        if ("true" === a.getURLParameter("slownetwork"))
            return "slow";
        var b = require("statistics/tracking-params");
        return b ? b.pageSectionLoadTimeCategory : "undetermined"
    }
    function c() {
        var a, c, e = 0, f = 6e4;
        return d || (a = Date.now(),
        d = new Promise(function(d) {
            c = setInterval(function() {
                e = Date.now() - a,
                e <= f ? "slow" === b() ? (clearInterval(c),
                d(!0)) : "fast" === b() && (clearInterval(c),
                d(!1)) : clearInterval(c)
            }, 100)
        }
        )),
        d
    }
    var d;
    return {
        detectNetworkSpeed: b,
        isNetworkSlow: c
    }
}),
define("adnnnnn-utils", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            if (a && a.__esModule)
                return a;
            var b = {};
            if (null != a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a,
            b
        }
        function e(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.XDomainAdContainer = b.FifAdContainer = b.AdWrapper = b.adResizer = b.adCoordinator = void 0;
        var f = c(1)
          , g = e(f)
          , h = c(3)
          , i = d(h)
          , j = c(4)
          , k = e(j)
          , l = c(5)
          , m = e(l)
          , n = c(7)
          , o = e(n);
        b.adCoordinator = g.default,
        b.adResizer = i,
        b.AdWrapper = k.default,
        b.FifAdContainer = m.default,
        b.XDomainAdContainer = o.default
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        function e(a, b) {
            var c = void 0;
            return function() {
                for (var d = arguments.length, e = Array(d), f = 0; f < d; f++)
                    e[f] = arguments[f];
                clearTimeout(c),
                c = setTimeout(function() {
                    return a.apply(void 0, e)
                }, b)
            }
        }
        function f() {
            return j.innerWidth > 840
        }
        function g() {
            var a = []
              , b = {}
              , c = f();
            i.default.makeObservable(b),
            b.isLandscape = f,
            b.setAdSettings = function(c, d) {
                var e = c.frameElement.parentElement.id;
                a[e] = d,
                d.onOrientationChanged && b.subscribe("orientation-changed", d.onOrientationChanged),
                k.getElementById(e).className += " abAdResponsive"
            }
            ,
            b.getAdSettings = function(b) {
                return a[b]
            }
            ;
            var d = e(function() {
                var a = {
                    width: j.innerWidth,
                    height: j.innerHeight
                }
                  , d = f();
                b.publish("size-changed", a),
                c !== d && (b.publish("orientation-changed", d),
                c = d)
            }, 250);
            return j.addEventListener ? j.addEventListener("resize", d) : j.attachEvent && j.attachEvent("onresize", d),
            b
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var h = c(2)
          , i = d(h)
          , j = window
          , k = document
          , l = g();
        j.ABse = j.ABse || {},
        j.ABse.ad = j.ABse.ad || {},
        j.ABse.ad.initResponsiveAd = l.setAdSettings,
        j.ABse.ad.isLandscape = f,
        b.default = l
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            d.call(a)
        }
        var d = function() {
            function a(a) {
                var b = this.subscribers[a];
                return void 0 !== b && null !== b && b.length > 0
            }
            function b(a, b, c) {
                if (this.hasSubscribers(b)) {
                    var d, e = this.subscribers[b];
                    for (d = 0; d < e.length; d += 1)
                        "publish" === a ? e[d](c) : e[d] === c && e.splice(d, 1)
                }
            }
            function c(a, b) {
                void 0 === this.subscribers[a] && (this.subscribers[a] = []),
                this.subscribers[a].push(b)
            }
            function d(a, c) {
                b.call(this, "publish", a, c)
            }
            function e(a, c) {
                b.call(this, "unsubscribe", a, c)
            }
            return function() {
                this.subscribers = [],
                this.publish = d,
                this.subscribe = c,
                this.unsubscribe = e,
                this.hasSubscribers = a
            }
        }();
        a.exports = {
            makeObservable: c
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        function e(a) {
            var b = a.getWrapperContentSize();
            return b.width > 0 ? b.height / b.width : 240 / 920
        }
        function f(a, b) {
            var c = {};
            if (!a || !a.portraitAspectRatio || !a.landscapeAspectRatio) {
                var d = e(b);
                c.portrait = d,
                c.landscape = d
            }
            return a && (a.portraitAspectRatio && (c.portrait = a.portraitAspectRatio),
            a.landscapeAspectRatio && (c.landscape = a.landscapeAspectRatio)),
            c
        }
        function g(a, b) {
            function c(a) {
                if (e.fixedHeight)
                    g.setAreaHeight(e.fixedHeight),
                    g.setHeight(e.fixedHeight);
                else if (e.remeasureOnSizeChange)
                    g.setHeight(g.getContentHeight() + "px");
                else {
                    var b = a ? h.landscape : h.portrait;
                    if (b) {
                        var c = g.getAreaWidth()
                          , d = c * b;
                        g.setHeight(Math.round(d) + "px")
                    }
                }
            }
            function d() {
                if (e)
                    c(l.default.isLandscape());
                else {
                    var a = g.getSizes()
                      , b = (0,
                    m.getScaleParams)(a);
                    b ? g.scale(b) : g.unscale()
                }
            }
            var e = l.default.getAdSettings(a)
              , g = new j.default;
            g.init(a, b);
            var h = f(e, g);
            return l.default.subscribe("size-changed", d),
            d(),
            {
                update: d
            }
        }
        function h(a, b) {
            return g(a, b)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.init = h;
        var i = c(4)
          , j = d(i)
          , k = c(1)
          , l = d(k)
          , m = c(6)
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        function e(a, b) {
            if (!(a instanceof b))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(a) {
            var b = a.parentElement;
            return "DIV" === b.tagName.toUpperCase() && b.className.indexOf("abJsAdArea") > -1 ? b : null
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var g = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1,
                    d.configurable = !0,
                    "value"in d && (d.writable = !0),
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c),
                d && a(b, d),
                b
            }
        }()
          , h = c(5)
          , i = d(h)
          , j = window
          , k = document
          , l = function() {
            function a() {
                e(this, a)
            }
            return g(a, [{
                key: "getAreaWidth",
                value: function() {
                    return this.area ? this.area.offsetWidth : null
                }
            }, {
                key: "setAreaHeight",
                value: function(a) {
                    this.area && (this.area.style.height = a)
                }
            }, {
                key: "getWrapperContentSize",
                value: function() {
                    var a = this.wrapper;
                    return a ? {
                        width: a.scrollWidth,
                        height: a.scrollHeight
                    } : null
                }
            }, {
                key: "setWidth",
                value: function(a) {
                    var b = this.wrapper;
                    b && (b.style.width = a,
                    this.container.setWidth(a))
                }
            }, {
                key: "setHeight",
                value: function(a) {
                    var b = this.wrapper;
                    b && (b.style.height = a,
                    this.container.setHeight(a))
                }
            }, {
                key: "getPlacementName",
                value: function() {
                    var a = this.alias.split("_");
                    return a[a.length - 1]
                }
            }, {
                key: "getContentHeight",
                value: function() {
                    return this.container.getContentHeight()
                }
            }, {
                key: "getSizes",
                value: function() {
                    var a = this.wrapper
                      , b = this.area;
                    return a && b ? {
                        wrapperWidth: a.offsetWidth,
                        wrapperHeight: a.offsetHeight,
                        areaWidth: b.offsetWidth,
                        areaHeight: b.offsetHeight,
                        windowHeight: this.getRealHeight()
                    } : null
                }
            }, {
                key: "getRealHeight",
                value: function() {
                    return j.innerHeight > j.innerWidth ? j.screen.height : Math.min(j.screen.height, j.screen.width)
                }
            }, {
                key: "scale",
                value: function(a) {
                    var b = this.wrapper
                      , c = this.area;
                    -1 === b.className.indexOf("abScaledAd") && (b.className += " abScaledAd"),
                    a.marginLeft ? b.style["margin-left"] = a.marginLeft : b.style.removeProperty("margin-left"),
                    b.style["-webkit-transform"] = a.transformValue,
                    b.style["-ms-transform"] = a.transformValue,
                    b.style["-moz-transform"] = a.transformValue,
                    b.style.transform = a.transformValue,
                    c.style.height = a.areaHeightStyle
                }
            }, {
                key: "unscale",
                value: function() {
                    var a = this.wrapper
                      , b = this.area;
                    a.className = a.className.replace("abScaledAd", ""),
                    a.style.removeProperty("-webkit-transform"),
                    a.style.removeProperty("-ms-transform"),
                    a.style.removeProperty("-moz-transform"),
                    a.style.removeProperty("transform"),
                    a.style.removeProperty("margin-left"),
                    b.style.removeProperty("height")
                }
            }, {
                key: "init",
                value: function(a, b) {
                    var c = k.getElementById(a)
                      , d = c ? f(c) : null
                      , e = b;
                    return c && d ? (e || (e = new i.default(c,a)),
                   
                    
                    d.className = d.className.replace("abAdAreaLoading", "")) : j.console && j.console.log && j.console.log("Initiated ad-wrapper without finding prerequisite alias, adWrapper and adArea", a, c, d),
                    this.alias = a,
                    this.wrapper = c,
                    this.container = e,
                    this.area = d,
                    this.areaHeightDifference = null,
                    this
                }
            }]),
            a
        }();
        b.default = l
    }
    , function(a, b) {
        "use strict";
        function c(a, b) {
            if (!(a instanceof b))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(a) {
            return {
                width: a.getAttribute("width"),
                height: a.getAttribute("height")
            }
        }
        function e(a) {
            return parseInt(a.width, 10) < 3 || parseInt(a.height, 10) < 3
        }
        function f(a) {
            return a.contentWindow.document.body.getElementsByTagName("*").length
        }
        function g(a) {
            return a && f(a) < 6 && e(d(a))
        }
        function h(a) {
            return !(1 === a.children.length && "IFRAME" === a.children[0].tagName.toUpperCase())
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var i = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1,
                    d.configurable = !0,
                    "value"in d && (d.writable = !0),
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c),
                d && a(b, d),
                b
            }
        }()
          , j = document
          , k = function() {
            function a(b, d) {
                c(this, a),
                this.wrapper = b,
                this.fif = j.getElementById(d + "_frame")
            }
            return i(a, [{
                key: "getContentHeight",
                value: function() {
                    return this.fif ? this.fif.contentDocument.body.offsetHeight : null
                }
            }, {
                key: "setWidth",
                value: function(a) {
                    this.fif && (this.fif.width = a)
                }
            }, {
                key: "setHeight",
                value: function(a) {
                    this.fif && (this.fif.height = a)
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return !h(this.wrapper) && g(this.fif)
                }
            }]),
            a
        }();
        b.default = k
    }
    , function(a, b) {
        "use strict";
        function c(a, b) {
            var c = b.windowHeight
              , d = b.areaWidth
              , e = b.wrapperHeight
              , f = b.wrapperWidth
              , g = Math.floor(d / f * 1e4) / 1e4
              , h = 1;
            a && (h = Math.floor(c / e * 1e4) / 1e4);
            var i = Math.min(g, h);
            return i > 1 && (i = 1),
            i
        }
        function d(a, b) {
            var c = b.areaHeight
              , d = b.wrapperHeight
              , e = 0;
            return e = d > c ? Math.max(c - Math.floor(d * a), 0) : Math.max(c - d, 0),
            Math.floor(d * a) + e + "px"
        }
        function e(a, b) {
            var c = void 0;
            return c = "scale(" + a + ")",
            b && (c += " translateX(-50%)"),
            c
        }
        function f(a) {
            var b = a.wrapperHeight > a.windowHeight
              , f = c(b, a)
              , g = d(f, a)
              , h = e(f, b);
            if (1 === f)
                return null;
            var i = {
                transformValue: h,
                areaHeightStyle: g
            };
            return b && (i.marginLeft = "50%"),
            i
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.getScaleParams = f
    }
    , function(a, b) {
        "use strict";
        function c(a, b) {
            if (!(a instanceof b))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var d = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1,
                    d.configurable = !0,
                    "value"in d && (d.writable = !0),
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c),
                d && a(b, d),
                b
            }
        }()
          , e = function() {
            function a(b, d) {
                c(this, a),
                this.iframe = b,
                this.contentSize = d,
                this.contentSize && (this.setWidth(this.contentSize.width),
                this.setHeight(this.contentSize.height))
            }
            return d(a, [{
                key: "getContentHeight",
                value: function() {
                    return this.contentSize ? this.contentSize.height : null
                }
            }, {
                key: "setWidth",
                value: function(a) {
                    this.iframe && (this.iframe.element.style.width = a + "px")
                }
            }, {
                key: "setHeight",
                value: function(a) {
                    this.iframe && (this.iframe.element.style.height = a + "px")
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return !this.contentSize || this.contentSize.height < 10
                }
            }]),
            a
        }();
        b.default = e
    }
    ])
}),
define("adtech-mini-loader", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            if (a && a.__esModule)
                return a;
            var b = {};
            if (null != a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a,
            b
        }
        function e(a) {
            var b = a.adContainerId || a.alias;
            a.syncIfPossible ? k.load(a.url) : i.create(b, a.url, a.onAdLoadedCallback)
        }
        function f(a) {
            e(a)
        }
        function g(a) {
            f(a)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.load = f,
        b.reload = g;
        var h = c(1)
          , i = d(h)
          , j = c(4)
          , k = d(j)
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            if (a && a.__esModule)
                return a;
            var b = {};
            if (null != a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a,
            b
        }
        function e(a, b, c) {
            var d = h.createElement("iframe")
              , e = a + "_frame"
              , f = h.getElementById(a);
            d.seamless = "seamless",
            d.id = e,
            d.name = e,
            d.style.border = "0px",
            d.width = "100%",
            d.scrolling = "no",
            d.frameBorder = 0,
            d.allowtransparency = !0,
            d.allowFullscreen = !0,
            d.src = "about:blank",
            f.appendChild(d),
            g.load(a, b, d, c)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.create = e;
        var f = c(2)
          , g = d(f)
          , h = document
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            if (a && a.__esModule)
                return a;
            var b = {};
            if (null != a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a,
            b
        }
        function e(a, b, c, d) {
            function e(a, b) {
                c.width = a,
                c.height = b
            }
            function f() {
                return {
                    width: p.scrollWidth,
                    height: p.scrollHeight
                }
            }
            function h() {
                var a = 0
                  , b = setInterval(function() {
                    if (a < 50 && "complete" !== o.readyState) {
                        var c = f();
                        c.width > 1 && c.height > 1 && (clearInterval(b),
                        e(c.width, c.height)),
                        a++
                    } else
                        clearInterval(b)
                }, 100)
            }
            function i() {
                var a = f();
                (a.width <= 1 || a.height <= 1) && q < m ? (q += l,
                setTimeout(i, l)) : j()
            }
            function j() {
                var b = f();
                e(b.width, b.height),
                d && d(a)
            }
            var k = !1
              , l = 50
              , m = 500
              , n = g.create(b)
              , o = c.contentDocument || c.contentWindow.document;
            o.open("text/html", "replace"),
            o.write(n),
            o.close();
            var p = o.getElementById("afd")
              , q = 0;
            "complete" === o.readyState ? i() : (c.contentWindow.addEventListener ? c.contentWindow.addEventListener("load", i, !1) : o.body.onload = i,
            k || h())
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.load = e;
        var f = c(3)
          , g = d(f)
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            var b = "ipt"
              , c = "</";
            return "<!DOCTYPE html><html><head><style>body{overflow:hidden}body,html{margin:0;padding:0}</style>" + c + "head><body><scr" + b + ">var inFIF=inDapIF=true;</scr" + b + '><div id="afd"><scr' + b + ' id="adscript" src="' + a + '"></scr' + b + ">" + c + "div>" + c + "body>" + c + "html>"
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.create = c
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            var b = "ipt";
            d.document.write("<scr" + b + ' src="' + a + '"></scr' + b + ">")
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.load = c;
        var d = window
    }
    ])
}),
define("session-storage-wrapper", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b) {
        "use strict";
        function c(a) {
            return !(!h || !a)
        }
        function d(a, b) {
            if (c(b)) {
                var d = b;
                return "string" != typeof d && (d = JSON.stringify(b)),
                g.sessionStorage.setItem(a, d),
                !0
            }
            return !1
        }
        function e() {
            h && g.sessionStorage.clear()
        }
        function f(a) {
            if (h) {
                var b = g.sessionStorage.getItem(a);
                if (null !== b)
                    try {
                        b = JSON.parse(b)
                    } catch (a) {
                        return b
                    }
                return b
            }
        }
        var g = window
          , h = function() {
            return "undefined" !== g.sessionStorage
        }();
        a.exports = {
            setValue: d,
            clearAll: e,
            getValue: f
        }
    }
    ])
}),
define("retrieve-locations", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d() {
            return e.getValue("lazyLocations") || []
        }
        var e = c(1);
        a.exports = {
            retrieve: d
        }
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            return !(!h || !a)
        }
        function d(a, b) {
            if (c(b)) {
                var d = b;
                return "string" != typeof d && (d = JSON.stringify(b)),
                g.sessionStorage.setItem(a, d),
                !0
            }
            return !1
        }
        function e() {
            h && g.sessionStorage.clear()
        }
        function f(a) {
            if (h) {
                var b = g.sessionStorage.getItem(a);
                if (null !== b)
                    try {
                        b = JSON.parse(b)
                    } catch (a) {
                        return b
                    }
                return b
            }
        }
        var g = window
          , h = function() {
            var a = "item";
            try {
                return g.sessionStorage.setItem(a, a),
                g.sessionStorage.removeItem(a),
                "undefined" !== g.sessionStorage
            } catch (a) {
                return !1
            }
        }();
        a.exports = {
            setValue: d,
            clearAll: e,
            getValue: f
        }
    }
    ])
}),
define("lazy-locations", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a, b, c) {
            if (u)
                return -1;
            m = f(c, a),
            t = m.topDistance + b,
            u = !0
        }
        function e() {
            s = q.retrieve()
        }
        function f(a, b) {
            if (m)
                return m;
            for (var c, d = o.getElementsByClassName(a), e = Number.MAX_VALUE, f = d.length, g = b.length, h = 0; h < f; h++)
                for (var i = 0; i < g; i++)
                    if (-1 !== d[h].id.indexOf(b[i])) {
                        var j = d[h].getBoundingClientRect()
                          , k = j.top > 0 ? j.top : n.pageYOffset - Math.abs(j.top);
                        k < e && (e = k,
                        c = d[h].getAttribute("id"))
                    }
            return m = {
                topDistance: e,
                topId: c
            }
        }
        function g() {
            l();
            var a = n.location.href
              , b = -1 !== s.indexOf(a);
            n.pageYOffset > t && !b ? h(a) : n.pageYOffset < t && b && i(a)
        }
        function h(a) {
            s.push(a),
            j()
        }
        function i(a) {
            s.splice(s.indexOf(a), 1),
            j()
        }
        function j() {
            p.setValue(r, s)
        }
        function k() {
            return l(),
            s
        }
        function l() {
            if (!u)
                throw "Module not initialized!"
        }
        var m, n = window, o = document, p = c(1), q = c(2), r = "lazyLocations", s = q.retrieve(), t = null, u = !1;
        a.exports = {
            init: d,
            updateLazyLocations: g,
            getLazyLocations: k,
            getTopAd: f,
            reRetrieveLocations: e
        }
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            return !(!h || !a)
        }
        function d(a, b) {
            if (c(b)) {
                var d = b;
                return "string" != typeof d && (d = JSON.stringify(b)),
                g.sessionStorage.setItem(a, d),
                !0
            }
            return !1
        }
        function e() {
            h && g.sessionStorage.clear()
        }
        function f(a) {
            if (h) {
                var b = g.sessionStorage.getItem(a);
                if (null !== b)
                    try {
                        b = JSON.parse(b)
                    } catch (a) {
                        return b
                    }
                return b
            }
        }
        var g = window
          , h = function() {
            var a = "item";
            try {
                return g.sessionStorage.setItem(a, a),
                g.sessionStorage.removeItem(a),
                "undefined" !== g.sessionStorage
            } catch (a) {
                return !1
            }
        }();
        a.exports = {
            setValue: d,
            clearAll: e,
            getValue: f
        }
    }
    , function(a, b, c) {
        "use strict";
        function d() {
            return e.getValue("lazyLocations") || []
        }
        var e = c(1);
        a.exports = {
            retrieve: d
        }
    }
    ])
}),
define("amp-debounce", [], function() {
    "use strict";
    var a = Date.now;
    return a || (a = function() {
        return (new Date).valueOf()
    }
    ),
    function(b, c, d) {
        var e, f, g, h, i, j = function() {
            var k = a() - h;
            k < c && k >= 0 ? e = setTimeout(j, c - k) : (e = null,
            d || (i = b.apply(g, f),
            e || (g = f = null)))
        };
        return function() {
            g = this,
            f = arguments,
            h = a();
            var k = d && !e;
            return e || (e = setTimeout(j, c)),
            k && (i = b.apply(g, f),
            g = f = null),
            i
        }
    }
}),
define("ad-load", ["adtech-mini-loader", "ad-utils", "ad-url-params", "ad-url-builder", "ab-mega-ad", "ast-toggler", "abse", "ab-burt-unit-api"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
        b.adResizer.init(a),
        e && e.isMegaPlacement(a) && e.showIfPossible(a),
        h.adLoaded(a)
    }
    function j(b, e) {
        if (!g.componentControl_delayAds) {
            var h, j, m = c.get();
            if (f.isAstEnabled())
                require("ast-loader").loadAd(b, i, e);
            else {
                if (h = d.create(b, m),
                k(b))
                    return;
                j = {
                    alias: b,
                    url: h,
                    onAdLoadedCallback: i
                },
                e && l(j, e),
                a.load(j)
            }
        }
    }
    function k(a) {
        if (e && e.isMegaPlacement(a)) {
            if (!e.requestMegaAdIsOK())
                return e.hideAdContainer(a),
                !0;
            e.initMegaAdRequest()
        }
        return !1
    }
    function l(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
    return {
        adLoaderTopLazyAdQueue: [],
        loadAd: j
    }
}),
define("ad-in-view", ["win", "doc", "device/categorizer", "device-settings"], function(a, b, c, d) {
    "use strict";
    var e = 200
      , f = function(a) {
        var b, f = a.node, g = parseInt(a.lazyloadOffset, 10) || e;
        return "mobile" !== c.categorize() || d.firesOnScrollContinuously() || (g += 800),
        !f || (b = f.getBoundingClientRect(),
        h(b, g))
    }
      , g = function(a) {
        var b, c = 0;
        if (a) {
            for (b = a.getBoundingClientRect(); 0 === b.height && c < 2; )
                a = a.parentElement,
                b = a.getBoundingClientRect(),
                c++;
            return h(b, e)
        }
        return !0
    }
      , h = function(c, d) {
        var e = a.innerHeight || b.documentElement.clientHeight;
        if (c && e) {
            var f = c.bottom >= 0 - d
              , g = c.top <= e + d;
            return f && g
        }
        return !0
    };
    return {
        isInView: f,
        isInViewWithHeightDetection: g,
        isAdRectInView: h
    }
}),
define("sticky-panorama", ["win", "doc", "page", "jquery"], function(a, b, c, d) {
    var e, f, g, h, i = d(b), j = d(a), k = 100, l = 300, m = 2500, n = {
        sticky: !1,
        initialPositionSet: !1,
        scrollAwayEnabled: !1
    }, o = function() {
        return !c.articleId
    }, p = function(a) {
        var b = a.offset().top + a.height();
        return q() < b
    }, q = function() {
        return i.scrollTop()
    }, r = function() {
        n.initialPositionSet || (g = q(),
        n.initialPositionSet = !0),
        n.initialPositionSet && n.sticky && n.scrollAwayEnabled && Math.abs(g - q()) > k && (j.off("scroll", r),
        a.setTimeout(function() {
            t(l)
        }, 300))
    }, s = function(a) {
        a && (x(a.height()),
        a.hide().addClass("abSticky").slideDown(l, function() {
            j.on("scroll", r),
            n.sticky = !0
        }).show())
    }, t = function(a) {
        n.sticky && (n.sticky = !1,
        f.slideUp(a, function() {
            f.removeClass("abSticky").show(),
            w(),
            y()
        }))
    }, u = function() {
        e = v(),
        e.on("click", t),
        e.appendTo(f.selector)
    }, v = function() {
        var a = d("<a/>", {
            class: "abPanoramaStickyCloseButton",
            href: "javascript:void(0);"
        });
        return a.append("<span class='abIconClose'> STÄNG ANNONS </span>"),
        a
    }, w = function() {
        e && e.hide()
    }, x = function(a) {
        h = d(".abPanoramaStickyPlaceholder"),
        h.height(a).show()
    }, y = function() {
        h && h.hide()
    }, z = function(a) {
        if (!a || !a.length)
            return !1;
        var b = d("body")
          , c = b.attr("class") ? b.attr("class") : "";
        return o() && !c.match("abLFormat|abBigBang")
    };
    return {
        init: function(b) {
            z(b) && (f = b,
            a.setTimeout(function() {
                n.scrollAwayEnabled = !0
            }, m),
            p(f) || (s(f),
            u()))
        }
    }
}),
define("ab-desktop-ad-events", ["win", "observable"], function(a, b) {
    "use strict";
    var c = a.ABse && a.ABse.logCenter && "function" == typeof a.ABse.logCenter.getLogger ? a.ABse.logCenter.getLogger("desktop-ad-events") : {
        debug: function() {},
        error: function() {}
    }
      , d = {}
      , e = {}
      , f = function(a) {
        c.debug(" - Pushing to queue", a),
        d[a.waitForEvent] = d[a.waitForEvent] || [],
        d[a.waitForEvent].push(a)
    }
      , g = function(a) {
        var b, f, g, h;
        if (c.debug(" - QueueEvent for " + a + " fired.", d[a]),
        d[a]) {
            for (g = d[a],
            b = 0,
            f = g.length; b < f; b++)
                c.debug(' - Publishing "loadAd" event:', h),
                h = g[b],
                j.publish("loadAd", h);
            d[a] = null
        }
        return e[a] = !0,
        d
    }
      , h = function(a) {
        return !(!a || "string" != typeof a.waitForEvent)
    }
      , i = function(a) {
        return !(!h(a) || !0 === e[a.waitForEvent]) && (f(a),
        !0)
    }
      , j = {
        fire: g,
        waitForEvent: i
    };
    return b.makeObservable(j),
    j
}),
define("ua-detection", ["doc", "win"], function(a, b) {
    "use strict";
    var c = function(a) {
        if (a) {
            var b = /Android\s+([\d\.]+)/
              , c = b.exec(a);
            if (c && c[1])
                return c[1]
        }
    }
      , d = function(a) {
        if (a)
            return -1 !== a.indexOf("Android")
    }
      , e = function(a) {
        return -1 !== a.toLowerCase().indexOf("iphone") || -1 !== a.toLowerCase().indexOf("ipad") || -1 !== a.toLowerCase().indexOf("ipod")
    }
      , f = {};
    if (f.detection = {},
    f.detection.getAndroidVersion = c,
    b.navigator && b.navigator.userAgent) {
        f.detection.isAndroid = d(b.navigator.userAgent);
        var g = c(b.navigator.userAgent);
        g && (f.detection.androidVersion = g),
        f.detection.isIos = e(b.navigator.userAgent)
    }
    return b.debugMode && (f.detection.isAndroidFunction = d,
    f.detection.isIosFunction = e),
    f
}),
define("ad-navigation-lazyload", ["ua-detection"], function(a) {
    "use strict";
    function b() {
        return a.detection.isIos
    }
    return {
        enabled: b
    }
}),
define("ab-abtest", ["win", "ab-shared-cookie"], function(a, b) {
    "use strict";
    function c(c, d) {
        var e = parseInt(b.getCookie("X-AB-Segment"), 10);
        return !(a.isNaN(e) || e < 1 || e > 100) && (e >= c && e <= d)
    }
    function d(b, c) {
        var d = a.Date.now();
        return !!(e(b, "min") < d && d < e(c, "max"))
    }
    function e(b, c) {
        var d = new Date(b).getTime();
        return a.isNaN(d) ? "max" === c ? 864e13 : -864e13 : d
    }
    return {
        isMemberOfSegment: c,
        isActive: d
    }
}),
define("ab-test-segments", ["jquery", "ab-abtest", "request"], function(a, b, c) {
    "use strict";
    function d() {
        return g || (g = new Promise(function(c, d) {
            a.getJSON("http://tv.aftonbladet.se/groups").then(function(a) {
                a.forEach(function(a) {
                    (f(a.start, a.stop) || a.active && b.isMemberOfSegment(a.start, a.stop)) && h.push(a)
                }),
                c(h)
            }).fail(d)
        }
        )),
        g
    }
    function e(a) {
        return d().then(function(b) {
            for (var c = 0; c < b.length; c++)
                if (b[c].name.indexOf(a) > -1)
                    return !0;
            return !1
        })
    }
    function f(a, b) {
        var d = c.getURLParameter("segmentcookiebypass");
        return !(window.isNaN(d) || d < 1 || d > 100 || !d) && (d >= a && d <= b)
    }
    var g, h = [];
    return {
        isPartOfABTestSegment: e,
        getABTestSegmentsUserIsIn: d
    }
}),
define("ad-lazyloading", ["win", "observable", "jquery", "amp-debounce", "ad-load", "lazy-locations", "ad-in-view", "page", "ad-utils", "ast-toggler", "ad-navigation-lazyload", "ab-burt-unit-utils"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m, n = [], o = "desktop" !== h.siteName, p = o ? parseInt(h.delayedAdRequestThreshold, 10) : 0, q = !1, r = function() {
        return n.length
    }, s = function() {
        for (var a = [], b = n.length, c = 0; c < b; c++)
            null !== n[c] && a.push(n[c]);
        n = a
    }, t = function() {
        q = !0,
        n = []
    }, u = function() {
        return n
    }, v = function(a) {
        for (var b = n.length, c = 0; c < b; c++)
            if (n[c] === a)
                return;
        n.push(a)
    }, w = function() {
        for (var a = !1, b = 0; b < n.length; b++) {
            var c = n[b];
            null !== c && g.isInView(c) && ("function" == typeof c.onInViewCallback ? c.onInViewCallback() : B.publish("loadAd", c),
            n[b] = null,
            a = !0)
        }
        return a && s(),
        n
    }, x = function(a) {
        return !0 === a.lazyloadEnabled && !1 === g.isInView(a) && !q && (l.setLoadedWithLazyLoad(a.alias, parseInt(a.lazyloadOffset, 10)),
        v(a),
        !0)
    }, y = function() {
        a.setTimeout(function() {
            var b = {
                width: a.innerWidth,
                height: a.innerHeight
            };
            i.adCoordinator.publish("size-changed", b)
        }, 2e3)
    }, z = function() {
        for (var a = e.adLoaderTopLazyAdQueue, b = 0; b < a.length; b++)
            g.isInViewWithHeightDetection(a[b].element) && (e.loadAd(a[b].alias, a[b].options),
            y(),
            a.splice(b, 1),
            b--)
    }, A = function(b) {
        o && a.setTimeout(function() {
            z()
        }, b)
    }, B = {
        checkLazyLoads: w,
        numberOfLazyloads: r,
        lazyLoad: x,
        checkLazyLoadsFromAdLoaderTop: z,
        blockLazyLoad: t,
        getLazyLoadQueue: u
    }, C = d(f.updateLazyLocations, 50);
    return b.makeObservable(B),
    o && k.enabled() && h.delayedAdRequestId && (f.init(h.delayedAdRequestId.split(","), p, "abJsAdWrapper"),
    a.addEventListener("scroll", C)),
    c && !j.isAstEnabled() && (c(a).scroll(function() {
        m || (m = a.setTimeout(function() {
            w(),
            o && k.enabled() && z(),
            a.clearTimeout(m),
            m = null
        }, 100))
    }),
    A(2e3)),
    B
}),
define("viewability-experiments-lazyload", ["doc", "win", "ad-lazyloading", "ab-test-segments"], function(a, b, c, d) {
    "use strict";
    function e() {
        d.isPartOfABTestSegment("blockLazyLoadAds").then(function(a) {
            if (a) {
                var b = c.getLazyLoadQueue();
                c.blockLazyLoad(),
                b.length > 0 && i(b)
            }
        }).catch(function() {})
    }
    function f() {
        g().then(function(a) {
            var b = c.getLazyLoadQueue();
            b.forEach(function(b) {
                b.lazyload && (b.lazyload += a),
                b.lazyloadOffset && (b.lazyloadOffset += a)
            }),
            b.length > 0 && h(a)
        }).catch(function() {})
    }
    function g() {
        return d.getABTestSegmentsUserIsIn().then(function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].name.indexOf("increaseLazyLoadThresholds-") > -1)
                    return parseInt(a[b].name.split("-")[1], 10) || Promise.reject();
            return Promise.reject()
        })
    }
    function h(a) {
        b.burtApi = b.burtApi || [],
        b.burtApi.push(function() {
            b.burtApi.annotate("aftonbladet.client", "lazyload-thresholds-increased-due-to-slow-network", "+" + a.toString())
        })
    }
    function i(a) {
        b.burtApi = b.burtApi || [],
        b.burtApi.push(function() {
            a.forEach(function(a) {
                b.burtApi.annotate("burt.basic-event", "lazyload-position-blocked-due-to-slow-network", a.alias)
            })
        })
    }
    return {
        blockLazyLoad: e,
        increaseLazyLoadThreshold: f
    }
}),
define("safeframe-adloader", ["win", "doc", "page", "local-storage", "request", "meta"], function(a, b, c, d, e, f) {
    "use strict";
    function g() {
        var a = e.getURLParameter("sfdebug");
        "1" === a || "true" === a ? d.persistValue(n, m) : "0" !== a && "false" !== a || d.persistValue(n, l)
    }
    function h() {
        g(),
        d.readValue(n) && (l = d.readValue(n)),
        k = new $sf.host.Config({
            renderFile: l,
            positions: {}
        })
    }
    function i(a) {
        var b = a.split("_")[a.split("_").length - 1];
        return c.SafeFramePositions.indexOf(b) > -1
    }
    function j(a, b) {
        k || h();
        var c = {
            id: "abSFAd_" + a.alias,
            w: a.w ? a.w : 200,
            h: a.h ? a.h : 200,
            dest: a.alias
        };
        $sf.host.PosConfig(c);
        var d = new $sf.host.Position({
            id: c.id,
            src: b
        });
        $sf.host.render(d)
    }
    var k, l = "http://wwwe.aftonbladet.se/ab-sf/?" + f.resourcesVersion, m = l.replace("/ab-sf/", "/ab-sf/ab-sf-debug/"), n = "SafeFrameService";
    return {
        loadAd: j,
        positionIsSafeFrameEnabled: i
    }
}),
define("device/categorizer", ["nav"], function(a) {
    "use strict";
    function b(a, b) {
        var c, d = {};
        if (a)
            for (c in a)
                d[c] = a[c];
        if (b)
            for (c in b)
                d[c] = b[c];
        return d
    }
    function c(c) {
        var d = a.userAgent;
        return c = b(i, c),
        d && "" !== d ? d.match(/GoogleTV|SmartTV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? c.tvUserAgentDeviceType : d.match(/Xbox|PLAYSTATION 3|Wii/i) ? c.tvUserAgentDeviceType : d.match(/iP(a|ro)d/i) || d.match(/tablet/i) && !d.match(/RX-34/i) || d.match(/FOLIO/i) ? c.tabletUserAgentDeviceType : d.match(/Linux/i) && d.match(/Android/i) && !d.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i) ? c.tabletUserAgentDeviceType : d.match(/Kindle/i) || d.match(/Mac OS/i) && d.match(/Silk/i) || d.match(/AppleWebKit/i) && d.match(/Silk/i) && !d.match(/Playstation Vita/i) ? c.tabletUserAgentDeviceType : d.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || d.match(/MB511/i) && d.match(/RUTEM/i) ? c.tabletUserAgentDeviceType : d.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i) ? c.phoneUserAgentDeviceType : d.match(/Opera/i) && d.match(/Windows NT 5/i) && d.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? c.phoneUserAgentDeviceType : d.match(/Windows (NT|XP|ME|9)/) && !d.match(/Phone/i) && !d.match(/Bot|Spider|ia_archiver|NewsGator/i) || d.match(/Win( ?9|NT)/i) ? c.desktopUserAgentDeviceType : d.match(/Macintosh|PowerPC/i) && !d.match(/Silk/i) ? c.desktopUserAgentDeviceType : d.match(/Linux/i) && d.match(/X11/i) && !d.match(/Charlotte/i) ? c.desktopUserAgentDeviceType : d.match(/CrOS/) ? c.desktopUserAgentDeviceType : d.match(/Solaris|SunOS|BSD/i) ? c.desktopUserAgentDeviceType : d.match(/curl|Bot|B-O-T|Crawler|Spider|Spyder|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|Charlotte|NewsGator|TinEye|Cerberian|SearchSight|Zao|Scrubby|Qseero|PycURL|Pompos|oegp|SBIder|yoogliFetchAgent|yacy|webcollage|VYU2|voyager|updated|truwoGPS|StackRambler|Sqworm|silk|semanticdiscovery|ScoutJet|Nymesis|NetResearchServer|MVAClient|mogimogi|Mnogosearch|Arachmo|Accoona|holmes|htdig|ichiro|webis|LinkWalker|lwp-trivial|facebookexternalhit/i) && !d.match(/phone|Playstation/i) ? c.botUserAgentDeviceType : c.unknownUserAgentDeviceType : c.emptyUserAgentDeviceType
    }
    var d = "bot"
      , e = "desktop"
      , f = "mobile"
      , g = "tablet"
      , h = "tv"
      , i = {
        emptyUserAgentDeviceType: e,
        unknownUserAgentDeviceType: e,
        botUserAgentDeviceType: d,
        tvUserAgentDeviceType: h,
        tabletUserAgentDeviceType: g,
        phoneUserAgentDeviceType: f,
        desktopUserAgentDeviceType: e
    };
    return {
        categorize: c
    }
}),
define("aftonbladet-top-streamer", ["doc", "app-detector"], function(a, b) {
    "use strict";
    var c, d, e = a.createElement("DIV"), f = a.createElement("A"), g = !0, h = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, i = function(a) {
        a && a.preventDefault(),
        d = require("aftonbladet-top-streamer-jquery"),
        d ? d.closeTopStreamer(e, c, f) : (e.remove(),
        c.remove(),
        f.remove())
    }, j = function() {
        e.className = "abAftonbladetTopStreamer",
        b.isApp(a.location.href) && a.body && (a.body.className = a.body.className + " abIsApp"),
        e.innerHTML = '<a href="#abMasterContainer"><div class="abTSRow abTSBorder"><span class="abLogo" title="Aftonbladet"></span></div><div class="abTSRow"><span class="abTimer"><span class="abIconCountdown"> </span><span class="abTSCountDownSeconds"></span></span><span class="abBackToAftonbladetText">GÅ VIDARE TILL AFTONBLADET </span><span class="abIconArrowConvex"></span></div></a>',
        h(e, "click", i),
        f.className = "abAftonbladetTopStreamerCloseButton",
        f.innerHTML = '<span class="abIconCloseSimple"></span>',
        h(f, "click", i),
        h(e, "touchmove", function(a) {
            a.preventDefault()
        })
    }, k = function(b) {
        var c = a.querySelectorAll(".abTimer")[0]
          , d = a.querySelectorAll(".abTSCountDownSeconds")[0]
          , e = b || 6
          , f = function() {
            var a = parseInt(d.innerHTML, 10);
            a > 1 ? (g && (d.innerHTML = a - 1),
            setTimeout(f, 1e3)) : i()
        };
        d && (c.style.display = "block",
        d.innerHTML = e,
        setTimeout(f, 1e3))
    }, l = function() {
        g = !1
    }, m = function() {
        g = !0
    }, n = function(b) {
        c = b.adContainer;
        var d = a.getElementById(c.id + "_frame");
        d && (d.className = "abTopStreamerAdIframe"),
        c.className = c.className + " abBelowAftonbladetTopStreamer";
        var g = getComputedStyle(c, null).top;
        c.style.width = "100%",
        c.style.height = "calc(100% - " + g + ")",
        e.appendChild(f),
        b.hiddenOnLoad && (e.style.display = "none"),
        a.body.appendChild(e),
        b.shouldUseCountDownForTopStreamer && k(b.countDownSeconds)
    }, o = function() {
        d = require("aftonbladet-top-streamer-jquery"),
        d ? d.showTopStreamer(e, c, f) : (e.style.display = "block",
        c.style.display = "block",
        f.style.display = "block")
    };
    return j(),
    {
        initTopStreamer: n,
        closeTopStreamer: i,
        showTopStreamer: o,
        pauseTimer: l,
        startTimer: m
    }
}),
define("ab-mega-ad", ["doc", "win", "ab-shared-cookie", "aftonbladet-top-streamer", "request", "ast-toggler", "app-detector", "page", "local-storage"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = "abMegaAd"
      , k = "mega"
      , l = !1
      , m = function() {
        return 24 - (new Date).getHours()
    }
      , n = function() {
        var a = "MOBILE" === h.siteName ? m() : 4;
        c.setCookie(j, "1", a),
        l = !0
    }
      , o = function(a) {
        g.isApp() || (b.burtApi = b.burtApi || [],
        b.burtApi.push(function() {
            b.burtApi.annotate("burt.basic-event", "mega-has-been-displayed", a)
        }))
    }
      , p = function() {
        return "on" !== i.readValue("adblock_statte")
    }
      , q = function() {
        return p() && (null === c.getCookie(j) || "1" === e.getURLParameter("forcemega"))
    }
      , r = function(b) {
        a.getElementById(b).parentElement.style.display = "njone",
        o(!1)
    }
      , s = function() {
        c.setCookie(j, "1", 1)
    }
      , t = function(a) {
        return a.indexOf("_" + k) > -1
    }
      , u = function(b) {
        var c = a.getElementById(b);
        return t(b) && c && (c.getElementsByTagName("*").length > 2 || c.clientHeight > 10 || c.parentElement.clientHeight > 10)
    }
      , v = function(c) {
        var d = c.parentElement.className.indexOf("abJsAdArea") > -1 ? c.parentElement : null
          , e = a.getElementById(c.id + "_frame") || c.getElementsByTagName("iframe")[0];
        e && (e.style.width = "100%",
        e.style.height = "100%"),
        d && (d.style.height = b.screen.availHeight,
        d.style.width = "100%")
    };
    return {
        isMegaPlacement: t,
        showIfPossible: function(b) {
            if (!l)
                if (u(b)) {
                    var c = a.getElementById(b);
                    v(c),
                    d.initTopStreamer({
                        adContainer: c,
                        hiddenOnLoad: !1
                    }),
                    n(),
                    o(!0)
                } else
                    r(b)
        },
        hideAdContainer: r,
        initMegaAdRequest: s,
        requestMegaAdIsOK: q
    }
}),
define("ad-dom-interactions", ["jquery"], function(a) {
    "use strict";
    function b() {
        return a || (a = require("jquery")),
        a
    }
    function c(c) {
        if (b())
            return a(".abJsAdArea").filter(function() {
                var b, d, e = a(this).find(".abJsAdWrapper").attr("id");
                return e && (b = e.split("_"),
                d = b[b.length - 1]),
                d === c
            })
    }
    function d(d, e) {
        b() && (null !== d ? c(d).addClass("abHideAdMark") : null !== e && a(top.window.document.getElementById(e)).parents(".abJsAdArea").addClass("abHideAdMark"))
    }
    function e(a) {
        c(a).removeClass("abHideAdMark")
    }
    function f(e) {
        if (b()) {
            var f = "panorama"
              , g = a("#abContentStart")
              , h = g.offset().top - parseInt(g.css("margin-top"), 10) - 3
              , i = e.transitionSpeed || 1e3
              , j = c(f)
              , k = j.find("iframe")[0]
              , l = k.contentWindow.document.body.clientHeight;
            d(f),
            a("#abHeaderContainer").css({
                transform: "translate3d(0px, -190px,0)",
                transitionDuration: i + "ms"
            }),
            a(".abTemplateWrapper").css({
                transform: "translate3d(0px, " + (l - h) + "px,0)",
                transitionDuration: i + "ms"
            })
        }
    }
    function g(c) {
        if (b()) {
            e("panorama");
            var d = c.transitionSpeed || 1e3;
            a("#abHeaderContainer").css({
                transform: "translate3d(0, 0, 0)",
                transition: "transform " + d + "ms"
            }),
            a(".abTemplateWrapper").css({
                transform: "translate3d(0, 0, 0)",
                transition: "transform " + d + "ms"
            })
        }
    }
    return {
        hideAdMark: d,
        showAdMark: e,
        bigBangExpand: f,
        bigBangContract: g
    }
}),
define("ad-events-api", ["page", "aftonbladet-top-streamer", "win", "request", "ad-dom-interactions", "ab-mega-ad", "doc"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
        var e = d.getURLParameter("dev");
        "1" !== e && "true" !== e || c.console.log("AD-EVENTS-API - " + a, b || null)
    }
    function i(a) {
        for (var b = g.getElementsByClassName("abJsAdWrapper"), c = 0; c < b.length; c++)
            if (b[c].id.indexOf("_" + a) > -1)
                return b[c].id
    }
    function j(a) {
        return a = a.replace("http://", "").replace("https://", ""),
        q.indexOf(a) > -1
    }
    function k(a) {
        return a.event && "function" == typeof p[a.event]
    }
    function l(a) {
        var b, d = a.originalEvent || a, e = d.origin, f = d.data, g = d.source, i = function(a) {
            return "string" == typeof a && a && /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) && c.JSON && c.JSON.parse ? c.JSON.parse(a) : null
        };
        if (j(e))
            try {
                b = i(f),
                "object" == typeof b && k(b) && (h("Executing event '" + b.event + "'"),
                p[b.event](b.params ? b.params : null, g))
            } catch (a) {}
        else
            h("Error: " + e + " is not authorized for ad-events-api, postMessage event received: " + f)
    }
    function m() {
        a.verifiedAdSuppliers && (q = a.verifiedAdSuppliers),
        c.addEventListener("message", l)
    }
    function n() {
        o || (m(),
        o = !0)
    }
    var o = !1
      , p = {
        megaAdStopCountdown: function() {
            b.pauseTimer()
        },
        megaAdStartCountdown: function() {
            b.startTimer()
        },
        hideAdMark: function(a, b) {
            if (!a)
                return void h("Missing required parameter placement", a);
            !a.placement && b ? e.hideAdMark(null, b.window.frameElement.id) : e.hideAdMark(a.placement, null)
        },
        showAdMark: function(a) {
            if (!a || !a.placement)
                return void h("Missing required parameter placement", a);
            e.showAdMark(a.placement)
        },
        adVisible: function(a) {
            if (!a || !a.placement)
                return void h("Missing required parameter placement", a);
            if ("mega" === a.placement) {
                var b = i("mega");
                b && f.showIfPossible(b)
            }
        },
        bigBangExpand: function(a) {
            e.bigBangExpand(a)
        },
        bigBangContract: function(a) {
            e.bigBangContract(a)
        }
    }
      , q = "www.local.abse.aftonbladet.se";
    return {
        tryToInitialize: n
    }
}),
function(a) {
    "use strict";
    var b = "//pixel.glimr.io/v3/iptags/:id/"
      , c = {
        _loadedTags: {},
        _loadingTags: {},
        JSONP: function(b, c) {
            var d = (new Date).getTime()
              , e = "glmrjsonp" + Math.round(d + 1000001 * Math.random());
            a[e] = function(b) {
                c(b);
                try {
                    delete a[e]
                } catch (b) {
                    a[e] = void 0
                }
                try {
                    f.parentNode.removeChild(f)
                } catch (a) {}
            }
            ,
            b += -1 === b.indexOf("?") ? "?" : "&",
            b += "callback=" + e;
            var f = document.createElement("script");
            "function" == typeof f.addEventListener && f.addEventListener("error", function() {
                c(!1)
            }, !1),
            f.setAttribute("src", b),
            document.getElementsByTagName("head")[0].appendChild(f)
        },
        createCookie: function(a, b, c) {
            var d = document.location.hostname.split(".")
              , e = d.slice(d.length - 2, d.length).join(".")
              , f = "";
            if (c) {
                var g = new Date;
                g.setTime(g.getTime() + 24 * c * 60 * 60 * 1e3),
                f = "; expires=" + g.toGMTString()
            }
            document.cookie = a + "=" + b + f + "; path=/; domain=" + e
        },
        readCookie: function(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d += 1) {
                for (var e = c[d]; " " === e.charAt(0); )
                    e = e.substring(1, e.length);
                if (0 === e.indexOf(b))
                    return e.substring(b.length, e.length)
            }
            return null
        },
        generateUUID: function() {
            var a = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                var c = (a + 16 * Math.random()) % 16 | 0;
                return a = Math.floor(a / 16),
                ("x" === b ? c : 3 & c | 8).toString(16)
            })
        },
        initGlimrId: function() {
            c.glimrId = c.readCookie("__glmrid"),
            c.glimrId || (c.glimrId = c.generateUUID(),
            c.setCookie())
        },
        setCookie: function() {
            c.createCookie("__glmrid", c.glimrId)
        },
        getTags: function(a, d) {
            if (void 0 !== c._loadedTags[a])
                return void d(c._loadedTags[a]);
            if (void 0 !== c._loadingTags[a])
                return void c._loadingTags[a].push(d);
            c._loadingTags[a] = [],
            c._loadingTags[a].push(d);
            try {
                c.initGlimrId(),
                c.JSONP(b.replace(":id", a) + "?id=" + c.glimrId, function(b) {
                    var d = [];
                    b && b.tags && (d = b.tags),
                    c._loadedTags[a] = d;
                    var e = c._loadingTags[a];
                    delete c._loadingTags[a];
                    for (var f = 0; f < e.length; f += 1)
                        e[f](d);
                    "string" == typeof b.id && b.id !== c.glimrId && (c.glimrId = b.id,
                    c.setCookie())
                })
            } catch (a) {
                d([])
            }
        }
    };
    a.Glimr = c
}(window),
define("glimr-loader", ["win", "page", "local-storage"], function(a, b, c) {
    "use strict";
    function d() {
        !c.readValue("glimrTags", 3e5) && a.Glimr && b.glimrScriptEnabled && "" !== b.glimrApiKey && a.Glimr.getTags(b.glimrApiKey, function(a, b) {
            c.persistValue("glimrTags", {
                tags: a,
                tagMappings: b
            })
        })
    }
    return {
        init: d
    }
}),
define("ab-desktop-adloader", ["win", "doc", "page", "abse", "jquery", "ab-desktop-device", "ab-desktop-ad-traffic-api", "adtech-mini-loader", "ab-desktop-ad-events", "ad-lazyloading", "ad-utils", "ad-url-params", "ad-url-builder", "ab-shared-cookie", "sticky-panorama", "ab-mega-ad", "adblocks-usage", "safeframe-adloader", "ast-toggler", "ab-burt-unit-api", "ad-events-api", "ab-burt-unit-utils"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    "use strict";
    var w, x, y = d.logCenter && "function" == typeof d.logCenter.getLogger ? d.logCenter.getLogger("desktop-ad") : {
        debug: function() {},
        error: function() {}
    }, z = {}, A = !1, B = -1 === b.querySelectorAll("html")[0].getAttribute("class").indexOf("lt-ie10"), C = function() {
        var a = l.get();
        return a.articleId = c.articleId,
        a.enableMultiAd = c.multiLoad,
        a
    }, D = function(a) {
        y.debug(" - Switching to adLoaderDac", a),
        x || (x = C(),
        y.debug(" - Set basicAdUrlParams to", x)),
        w = a,
        w.init(x)
    }, E = function(a) {
        return a = a || "",
        -1 !== a.toLowerCase().indexOf("outsider") || -1 !== a.toLowerCase().indexOf("sticky")
    }, F = function(a) {
        return "panorama" === a.toLowerCase()
    }, G = function(a, b, c) {
        var d = 10;
        return a.wrapper.offsetWidth >= b - d && a.wrapper.offsetWidth <= b + d && a.wrapper.offsetHeight >= c - d && a.wrapper.offsetHeight < c + d
    }, H = function(a) {
        return G(a, 1600, 1020)
    }, I = function(a) {
        return G(a, 1600, 900)
    }, J = function(a) {
        return G(a, 1270, 800)
    }, K = function() {
        return c.OutsiderSwitcherEnabled
    }, L = function(b) {
        A || require("ab-desktop-outsider").initOutsiderSwitcher();
        var c = e(b.area);
        c.addClass("abIsActiveOutsider"),
        a.scrollY > 990 && c.removeClass("abPremiumAdCompatible"),
        A ? (e("#abOutsider .abIsActiveOutsider").removeClass("abIsActiveOutsider"),
        c.hide(),
        setTimeout(function() {
            c.removeClass("abHideAdMark"),
            c.addClass("abIsActiveOutsider").css("opacity", 1).fadeIn(800)
        }, 600)) : A = !0
    }, M = function(b) {
        if (b) {
            var c, f = new k.AdWrapper;
            f.init(b),
            c = f.getPlacementName(),
            E(b) ? K() ? L(f) : g.IsOutsiderSticky() ? (g.InitOutsiderSticky("#" + f.alias),
            Q(["abSticky-outsiderLow", "abAdPlacementOutsiderspecial", "abAdPlacementOutsider3"])) : i.fire("outsiderIsLoaded") : p.isMegaPlacement(b) ? p.showIfPossible(b) : F(c) && (H(f) ? g.InitBigBang(!0) : I(f) ? g.InitBigBang() : J(f) ? g.InitLFormatv2() : a.setTimeout(function() {
                var a = e(".abPanorama");
                a.length && o.init(a)
            }, 300),
            d.ad.fire("panoramaIsLoaded")),
            t.adLoaded(b),
            a.ABY.use("event-custom", function(a) {
                a.fire("abAd:loaded", {
                    alias: b
                })
            })
        }
    }, N = function(a) {
        if (!d.componentControl_delayAds)
            if (s.isAstEnabled())
                require("ast-loader").loadAd(a.alias, M);
            else if (c.SafeFrameEnabled && r.positionIsSafeFrameEnabled(a.alias)) {
                y.debug(" - Loading ad with safeFrame", a);
                var b = m.create(a.alias, x);
                r.loadAd(a, b)
            } else if (w)
                y.debug(" - Loading ad with adLoaderDac", a),
                w.load({
                    alias: a.alias,
                    kvParams: a.kvParams,
                    syncIfPossible: a.syncIfPossible,
                    adtechDefaultPlacementID: c.adtechDefaultPlacementID,
                    onAdLoadedCallback: M
                });
            else if (h) {
                var b = m.create(a.alias, x);
                y.debug(" - Loading ad with mini-loader", a, x, b),
                h.load({
                    alias: a.alias,
                    url: b,
                    syncIfPossible: a.syncIfPossible,
                    onAdLoadedCallback: M
                })
            }
    }, O = function(a) {
        var c = b.getElementById(a.alias);
        c ? (c.setAttribute("class", c.getAttribute("class") + " abJsAdQueue"),
        y.debug(" - Converted ad to load via prio:2 - " + a.alias)) : y.debug(" - NOTE! No HTML container found for ad: " + a.alias + ", cannot convert ad to load via prio:2")
    }, P = function(a) {
        if (B && (v.trackAd(a.alias),
        v.setAdtechAsPrimaryServer(a.alias)),
        d.componentControl_delayAds)
            return void v.setDelayedLoad(a.alias, a.prio);
        if ("object" == typeof a || a.alias) {
            if (u.tryToInitialize(),
            !B)
                return void O(a);
            if (!f.isHandheld || !E(a.alias)) {
                x || (x = C(),
                y.debug(" - Set basicAdUrlParams to", x));
                var e = a.alias
                  , g = b.getElementById(e);
                if (g && (a.node = g,
                z[a.alias] = a,
                void 0 !== a.h && (g.style.height = a.h + "px"),
                void 0 !== a.w && (g.style.width = a.w + "px")),
                a.syncIfPossible = !0 === a.syncIfPossible,
                p.isMegaPlacement(a.alias)) {
                    if (!p.requestMegaAdIsOK())
                        return void p.hideAdContainer(a.alias);
                    p.initMegaAdRequest()
                } else if (a.cookieName) {
                    var h = document.cookie.indexOf(a.cookieName + "=1") > -1;
                    if (h || !n.isEnabled())
                        return void (e && Q([e]));
                    var k = a.cookieHours || 24;
                    n.setCookie(a.cookieName, "1", k)
                }
                !a.lazyload || isNaN(a.lazyload) && "true" !== a.lazyload || (a.lazyloadEnabled = !0,
                isNaN(a.lazyload) || (a.lazyloadOffset = a.lazyload),
                a.kvParams = {
                    tags: c.articleTagNames && c.articleTagNames.length > 0 ? c.articleTagNames.join(":") : "",
                    glimr: l.getLocationTags(),
                    ibeacon: l.getLocationTags(),
                    pagegen: "abse",
                    kvdevicetype: "string" == typeof c.siteName ? c.siteName.toLowerCase() : "mobile"
                }),
                a.waitForEvent && (a.kvParams = {
                    tags: c.articleTagNames && c.articleTagNames.length > 0 ? c.articleTagNames.join(":") : "",
                    glimr: l.getLocationTags(),
                    ibeacon: l.getLocationTags(),
                    pagegen: "abse",
                    kvdevicetype: "string" == typeof c.siteName ? c.siteName.toLowerCase() : "mobile"
                }),
                i.waitForEvent(a) ? y.debug(" - Waiting for event", a) : j.lazyLoad(a) ? y.debug(" - Lazyloading this", a) : N(a)
            }
        }
    }, Q = function(a) {
        var c, d, e;
        for (c = 0,
        d = a.length; c < d; c++)
            (e = b.getElementById(a[c])) && (e.style.display = "nonge")
    }, R = function(a) {
        if (!d.componentControl_delayAds) {
            var c, e;
            w && a && !s.isAstEnabled() ? (c = b.getElementById(a)) && (e = {
                node: c,
                alias: a
            },
            w.stickyReload({
                alias: e.alias,
                onAdLoadedCallback: S
            }),
            t.reloadingAd(a)) : a && astLoader.loadAd(a, S)
        }
    }, S = function(a) {
        M(a),
        v.setAdtechAsPrimaryServer(a)
    };
    return function() {
        ABY.use("event-custom", function(a) {
            a.publish("abAd:loaded")
        })
    }(),
    i.subscribe("loadAd", N),
    {
        setAdLoaderDac: D,
        onAdLoadedCallback: M,
        initAd: P,
        doLoad: N,
        reload: R,
        getAdUrlParams: C
    }
}),
define("ab-desktop-outsider", ["abse", "doc", "win", "page", "jquery", "ad-url-params", "ab-desktop-adloader"], function(a, b, c, d, e, f, g) {
    function h() {
        return x.hasClass("abOutsiderSwitcher") && y[0]
    }
    function i() {
        return e(b).height() < 9e3 && (p() || q())
    }
    function j() {
        var a, c = e(b).height();
        d.articleId || c < 9e3 ? (y.attr("data-active-between", "0-450"),
        v.attr("data-active-between", "451-" + c)) : (a = Math.floor(c / 6),
        y.attr("data-active-between", "0-" + a + ";" + (2 * a + 1) + "-" + 3 * a + ";" + (4 * a + 1) + "-" + 5 * a),
        v.attr("data-active-between", a + 1 + "-" + 2 * a + ";" + (3 * a + 1) + "-" + 4 * a + ";" + (5 * a + 1) + "-" + c))
    }
    function k(a) {
        var b, c = a.data("active-between").split(";");
        return c.map(function(a) {
            return b = a.split("-"),
            {
                activeFrom: parseInt(b[0], 10),
                activeTo: parseInt(b[1], 10)
            }
        })
    }
    function l() {
        if (!v)
            return y;
        var a = C.scrollTop()
          , b = k(y)
          , c = (k(v),
        v);
        return b.forEach(function(b) {
            a >= b.activeFrom && a < b.activeTo && (c = y)
        }),
        c
    }
    function m() {
        w = l(),
        A = !1;
        var a = w.find(".abAdWrapper").attr("id")
          , b = function() {
            e(this).find(".abJsAdWrapper").html(""),
            w.addClass("abHideAdMark"),
            w.show().css("opacity", 0),
            g.doLoad({
                alias: a,
                kvParams: {
                    tags: d.articleTagNames && d.articleTagNames.length > 0 ? d.articleTagNames.join(":") : "",
                    glimr: f.getLocationTags(),
                    ibeacon: f.getLocationTags(),
                    pagegen: "abse",
                    kvdevicetype: "string" == typeof d.siteName ? d.siteName.toLowerCase() : "mobile"
                }
            })
        };
        x.find(".abIsActiveOutsider").fadeOut(B, b)
    }
    function n(a, b, c) {
        c ? (a.attr("id", a.attr("id") + "2"),
        b.attr("id", b.attr("id") + "2")) : (a.attr("id", a.attr("id").replace("2", "")),
        b.attr("id", b.attr("id").replace("2", "")))
    }
    function o(a) {
        var b = a.clone()
          , c = b.find(".abAdWrapper");
        return b.html(""),
        c.html(""),
        b.append(c),
        b.removeClass("abIsActiveOutsider").hide(),
        n(b, c, -1 === a.attr("id").indexOf("2")),
        x.append(b),
        b
    }
    function p() {
        return D.hasClass("abLFormat")
    }
    function q() {
        return D.hasClass("abBigBang")
    }
    function r() {
        (p() || q()) && C.scrollTop() < 2e3 && (C.scrollTop() < 990 ? (y.addClass("abPremiumAdCompatible"),
        v && v.addClass("abPremiumAdCompatible")) : (y.removeClass("abPremiumAdCompatible"),
        v && v.removeClass("abPremiumAdCompatible")))
    }
    function s() {
        A = !1,
        setTimeout(function() {
            A = !0
        }, z)
    }
    function t() {
        r(),
        A && w.attr("id") !== l().attr("id") && (m(),
        s())
    }
    function u() {
        h() && (i() || (v = o(y),
        j()),
        r(),
        c.setTimeout(function() {
            w = e(".abIsActiveOutsider"),
            w.attr("id") !== l().attr("id") && (A = !0,
            t()),
            e(c).scroll(t)
        }, 1e3))
    }
    var v, w, x = e("#abOutsider"), y = x.find(".abAdArea"), z = 6e3, A = !0, B = 800, C = e(c), D = e(b.body);
    return {
        initOutsiderSwitcher: u
    }
}),
define("app-detector", [], function() {
    "use strict";
    return {
        isApp: function() {
            return !1
        },
        reset: function() {},
        isFakeApp: !1
    }
});
var ABse = ABse || {};
ABse.ad = ABse.ad || {},
ABse.ad.textads = function() {
    var a = function(a, c) {
        a.document.write(b(a, c))
    }
      , b = function(a, b) {
        return "object" == typeof b ? c(b) : (void 0 !== a && d(a, "number" == typeof b ? b : void 0),
        e())
    }
      , c = function(a) {
        var b = [];
        return "object" == typeof a && "string" == typeof a.headline && "string" == typeof a.text && "string" == typeof a.url && (b[0] = {},
        b[0].type = "text",
        b[0].line1 = a.headline,
        b[0].line2 = a.text,
        b[0].line3 = "",
        b[0].url = a.url,
        b[0].visible_url = a.visible_url ? a.visible_url : a.url),
        f({
            ads: b,
            isGoogle: !1
        })
    }
      , d = function(a, b) {
        a.google_ad_client = window.google_ad_client || "",
        a.google_ad_channel = window.google_ad_channel || "",
        a.google_encoding = window.google_encoding || "",
        a.google_ad_output = window.google_ad_output || "",
        a.google_max_num_ads = b || window.google_max_num_ads || "",
        a.google_ad_type = window.google_ad_type || "",
        a.google_language = window.google_language || "",
        a.google_feedback = window.google_feedback || "",
        a.google_adtest = window.google_adtest || "",
        a.google_page_url = window.google_page_url || ""
    }
      , e = function() {
        var a = "<script>function google_ad_request_done(google_ads) {document.write(top.ABse.ad.textads.getAdCode({ads:google_ads, isGoogle: true, google_info: google_info}));}</script>";
        return a += '<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>'
    }
      , f = function(a) {
        var b, c = "";
        if ("object" != typeof a.ads || 0 === a.ads.length)
            return "";
        if ("text" == a.ads[0].type) {
            for (c += '<div style="background-color:#f1fafd;padding:4px 10px;font-family:Verdana,sans-serif;">',
            !0 === a.isGoogle && "object" == typeof a.google_info && (c += '<div style="float:right;"><a target="_blank" style="font-size: 11px;font-weight:bold;color:black;text-decoration:none;" href="' + a.google_info.feedback_url + '" class="googleAdsHeader">ANNOhNS FR&Aring;N GOOGLE</a></div>'),
            b = 0; b < a.ads.length; ++b)
                c += '<div style="clear:both;font-family:georgia,serif;margin-bottom:6px;"><a style="color:black;text-decoration:none;" href="' + a.ads[b].url + '" target="_blank" onmouseout="window.status=\'\'" onmouseover="window.status=\'g&aring; till ' + a.ads[b].visible_url + '\';return true"> <span style="font-size: 20px;font-weight:bold;">' + a.ads[b].line1 + '<br /></span></a> <span style="font-size:14px;line-height:1;">' + a.ads[b].line2 + " " + a.ads[b].line3 + '<br /><a style="color:#0078BD;" href="' + a.ads[b].url + '" target="_blank" onmouseout="window.status=\'\'" onmouseover="window.status=\'g&aring; till ' + a.ads[b].visible_url + '\';return true" style="color:#296BB2;">' + a.ads[b].visible_url + "</span></a></div>";
            c += "</div>"
        }
        return c
    };
    return {
        show: a,
        getAdCode: f
    }
}(),
void 0 !== YUI && (YUI._YUI = YUI);
var YUI = function() {
    var a = 0
      , b = this
      , c = arguments
      , d = c.length
      , e = function(a, b) {
        return a && a.hasOwnProperty && a instanceof b
    }
      , f = "undefined" != typeof YUI_config && YUI_config;
    if (e(b, YUI) ? (b._init(),
    YUI.GlobalConfig && b.applyConfig(YUI.GlobalConfig),
    f && b.applyConfig(f),
    d || b._setup()) : b = new YUI,
    d) {
        for (; a < d; a++)
            b.applyConfig(c[a]);
        b._setup()
    }
    return b.instanceOf = e,
    b
};
if (function() {
    var a, b, c = "3.15.0", d = ".", e = "http://yui.yahooapis.com/", f = "yui3-js-enabled", g = "yui3-css-stamp", h = function() {}, i = Array.prototype.slice, j = {
        "io.xdrReady": 1,
        "io.xdrResponse": 1,
        "SWF.eventHandler": 1
    }, k = "undefined" != typeof window, l = k ? window : null, m = k ? l.document : null, n = m && m.documentElement, o = n && n.className, p = {}, q = (new Date).getTime(), r = function(a, b, c, d) {
        a && a.addEventListener ? a.addEventListener(b, c, d) : a && a.attachEvent && a.attachEvent("on" + b, c)
    }, s = function(a, b, c, d) {
        if (a && a.removeEventListener)
            try {
                a.removeEventListener(b, c, d)
            } catch (a) {}
        else
            a && a.detachEvent && a.detachEvent("on" + b, c)
    }, t = function() {
        YUI.Env.DOMReady = !0,
        k && s(m, "DOMContentLoaded", t)
    }, u = function() {
        YUI.Env.windowLoaded = !0,
        YUI.Env.DOMReady = !0,
        k && s(window, "load", u)
    }, v = function(a, b) {
        var c = a.Env._loader
          , d = ["loader-base"]
          , e = YUI.Env
          , f = e.mods;
        return c ? (c.ignoreRegistered = !1,
        c.onEnd = null,
        c.data = null,
        c.required = [],
        c.loadType = null) : (c = new a.Loader(a.config),
        a.Env._loader = c),
        f && f.loader && (d = [].concat(d, YUI.Env.loaderExtras)),
        YUI.Env.core = a.Array.dedupe([].concat(YUI.Env.core, d)),
        c
    }, w = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }, x = {
        success: !0
    };
    n && -1 == o.indexOf(f) && (o && (o += " "),
    o += f,
    n.className = o),
    c.indexOf("@") > -1 && (c = "3.5.0"),
    a = {
        applyConfig: function(a) {
            a = a || h;
            var b, c, d = this.config, e = d.modules, f = d.groups, g = d.aliases, i = this.Env._loader;
            for (c in a)
                a.hasOwnProperty(c) && (b = a[c],
                e && "modules" == c ? w(e, b) : g && "aliases" == c ? w(g, b) : f && "groups" == c ? w(f, b) : "win" == c ? (d[c] = b && b.contentWindow || b,
                d.doc = d[c] ? d[c].document : null) : "_yuid" != c && (d[c] = b));
            i && i._config(a)
        },
        _config: function(a) {
            this.applyConfig(a)
        },
        _init: function() {
            var a, b, d, f = this, h = YUI.Env, i = f.Env;
            if (f.version = c,
            !i) {
                if (f.Env = {
                    core: ["get", "features", "intl-base", "yui-log", "yui-later", "loader-base", "loader-rollup", "loader-yui3"],
                    loaderExtras: ["loader-rollup", "loader-yui3"],
                    mods: {},
                    versions: {},
                    base: e,
                    cdn: e + c + "/build/",
                    _idx: 0,
                    _used: {},
                    _attached: {},
                    _exported: {},
                    _missed: [],
                    _yidx: 0,
                    _uidx: 0,
                    _guidp: "y",
                    _loaded: {},
                    _BASE_RE: /(?:\?(?:[^&]*&)*([^&]*))?\b(yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,
                    parseBasePath: function(a, b) {
                        var c, d, e = a.match(b);
                        return e && (c = RegExp.leftContext || a.slice(0, a.indexOf(e[0])),
                        d = e[3],
                        e[1] && (c += "?" + e[1]),
                        c = {
                            filter: d,
                            path: c
                        }),
                        c
                    },
                    getBase: h && h.getBase || function(b) {
                        var c, d, e, g, h = m && m.getElementsByTagName("script") || [], j = i.cdn;
                        for (d = 0,
                        e = h.length; d < e; ++d)
                            if ((g = h[d].src) && (c = f.Env.parseBasePath(g, b))) {
                                a = c.filter,
                                j = c.path;
                                break
                            }
                        return j
                    }
                },
                i = f.Env,
                i._loaded[c] = {},
                h && f !== YUI)
                    i._yidx = ++h._yidx,
                    i._guidp = ("yui_" + c + "_" + i._yidx + "_" + q).replace(/[^a-z0-9_]+/g, "_");
                else if (YUI._YUI) {
                    h = YUI._YUI.Env,
                    i._yidx += h._yidx,
                    i._uidx += h._uidx;
                    for (d in h)
                        d in i || (i[d] = h[d]);
                    delete YUI._YUI
                }
                f.id = f.stamp(f),
                p[f.id] = f
            }
            f.constructor = YUI,
            f.config = f.config || {
                bootstrap: !0,
                cacheUse: !0,
                debug: !0,
                doc: m,
                fetchCSS: !0,
                throwFail: !0,
                useBrowserConsole: !0,
                useNativeES5: !0,
                win: l,
                global: Function("return this")()
            },
            m && !m.getElementById(g) ? (b = m.createElement("div"),
            b.innerHTML = '<div id="' + g + '" style="position:absolute!important;visibility:hidden!important"></div>',
            YUI.Env.cssStampEl = b.firstChild,
            m.body ? m.body.appendChild(YUI.Env.cssStampEl) : n.insertBefore(YUI.Env.cssStampEl, n.firstChild)) : m && m.getElementById(g) && !YUI.Env.cssStampEl && (YUI.Env.cssStampEl = m.getElementById(g)),
            f.config.lang = f.config.lang || "en-US",
            f.config.base = YUI.config.base || f.Env.getBase(f.Env._BASE_RE),
            a && "mindebug".indexOf(a) || (a = "min"),
            a = a ? "-" + a : a,
            f.config.loaderPath = YUI.config.loaderPath || "loader/loader" + a + ".js"
        },
        _setup: function() {
            var a, b = this, c = [], d = YUI.Env.mods, e = b.config.core || [].concat(YUI.Env.core);
            for (a = 0; a < e.length; a++)
                d[e[a]] && c.push(e[a]);
            b._attach(["yui-base"]),
            b._attach(c),
            b.Loader && v(b)
        },
        applyTo: function(a, b, c) {
            if (b in j) {
                var d, e, f, g = p[a];
                if (g) {
                    for (d = b.split("."),
                    e = g,
                    f = 0; f < d.length; f += 1)
                        (e = e[d[f]]) || this.log("applyTo not found: " + b, "warn", "yui");
                    return e && e.apply(g, c)
                }
                return null
            }
            return this.log(b + ": applyTo not allowed", "warn", "yui"),
            null
        },
        add: function(a, b, c, d) {
            d = d || {};
            var e, f, g, h = YUI.Env, i = {
                name: a,
                fn: b,
                version: c,
                details: d
            }, j = {}, k = h.versions;
            h.mods[a] = i,
            k[c] = k[c] || {},
            k[c][a] = i;
            for (g in p)
                p.hasOwnProperty(g) && (f = p[g],
                j[f.id] || (j[f.id] = !0,
                (e = f.Env._loader) && (!e.moduleInfo[a] || e.moduleInfo[a].temp) && e.addModule(d, a)));
            return this
        },
        _attach: function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = YUI.Env.mods, t = YUI.Env.aliases, u = this, v = YUI.Env._renderedMods, k = u.Env._loader, w = u.Env._attached, x = u.Env._exported, y = a.length, z = [];
            for (c = 0; c < y; c++)
                if (d = a[c],
                e = s[d],
                z.push(d),
                k && k.conditions[d])
                    for (j in k.conditions[d])
                        k.conditions[d].hasOwnProperty(j) && (l = k.conditions[d][j],
                        l && (l.ua && u.UA[l.ua] || l.test && l.test(u)) && z.push(l.name));
            for (a = z,
            y = a.length,
            c = 0; c < y; c++)
                if (!w[a[c]]) {
                    if (d = a[c],
                    e = s[d],
                    t && t[d] && !e) {
                        u._attach(t[d]);
                        continue
                    }
                    if (e) {
                        for (w[d] = !0,
                        j = 0; j < u.Env._missed.length; j++)
                            u.Env._missed[j] === d && (u.message("Found: " + d + " (was reported as missing earlier)", "warn", "yui"),
                            u.Env._missed.splice(j, 1));
                        if (k && v && v[d] && v[d].temp) {
                            k.getRequires(v[d]),
                            g = [];
                            for (j in k.moduleInfo[d].expanded_map)
                                k.moduleInfo[d].expanded_map.hasOwnProperty(j) && g.push(j);
                            u._attach(g)
                        }
                        if (f = e.details,
                        g = f.requires,
                        n = f.es,
                        h = f.use,
                        i = f.after,
                        f.lang && (g = g || [],
                        g.unshift("intl")),
                        g)
                            for (o = g.length,
                            j = 0; j < o; j++)
                                if (!w[g[j]]) {
                                    if (!u._attach(g))
                                        return !1;
                                    break
                                }
                        if (i)
                            for (j = 0; j < i.length; j++)
                                if (!w[i[j]]) {
                                    if (!u._attach(i, !0))
                                        return !1;
                                    break
                                }
                        if (e.fn) {
                            if (m = [u, d],
                            n && (r = {},
                            q = {},
                            m.push(r, q),
                            g))
                                for (o = g.length,
                                j = 0; j < o; j++)
                                    r[g[j]] = x.hasOwnProperty(g[j]) ? x[g[j]] : u;
                            if (u.config.throwFail)
                                q = e.fn.apply(n ? void 0 : e, m);
                            else
                                try {
                                    q = e.fn.apply(n ? void 0 : e, m)
                                } catch (a) {
                                    return u.error("Attach error: " + d, a, d),
                                    !1
                                }
                            n && (x[d] = q,
                            (p = e.details.condition) && "instead" === p.when && (x[p.trigger] = q))
                        }
                        if (h)
                            for (j = 0; j < h.length; j++)
                                if (!w[h[j]]) {
                                    if (!u._attach(h))
                                        return !1;
                                    break
                                }
                    } else
                        k && k.moduleInfo[d] && (e = k.moduleInfo[d],
                        b = !0),
                        !b && d && -1 === d.indexOf("skin-") && -1 === d.indexOf("css") && (u.Env._missed.push(d),
                        u.Env._missed = u.Array.dedupe(u.Env._missed),
                        u.message("NOT loaded: " + d, "warn", "yui"))
                }
            return !0
        },
        _delayCallback: function(a, b) {
            var c = this
              , d = ["event-base"];
            return b = c.Lang.isObject(b) ? b : {
                event: b
            },
            "load" === b.event && d.push("event-synthetic"),
            function() {
                var e = arguments;
                c._use(d, function() {
                    c.on(b.event, function() {
                        e[1].delayUntil = b.event,
                        a.apply(c, e)
                    }, b.args)
                })
            }
        },
        use: function() {
            var a, b = i.call(arguments, 0), c = b[b.length - 1], d = this, e = 0, f = d.Env, g = !0;
            if (d.Lang.isFunction(c) ? (b.pop(),
            d.config.delayUntil && (c = d._delayCallback(c, d.config.delayUntil))) : c = null,
            d.Lang.isArray(b[0]) && (b = b[0]),
            d.config.cacheUse) {
                for (; a = b[e++]; )
                    if (!f._attached[a]) {
                        g = !1;
                        break
                    }
                if (g)
                    return b.length,
                    d._notify(c, x, b),
                    d
            }
            return d._loading ? (d._useQueue = d._useQueue || new d.Queue,
            d._useQueue.add([b, c])) : d._use(b, function(a, d) {
                a._notify(c, d, b)
            }),
            d
        },
        require: function() {
            var a, b = i.call(arguments);
            "function" == typeof b[b.length - 1] && (a = b.pop(),
            b.push(function(c) {
                var d, e = b.length, f = c.Env._exported, g = {};
                for (d = 0; d < e; d++)
                    f.hasOwnProperty(b[d]) && (g[b[d]] = f[b[d]]);
                a.call(void 0, c, g)
            })),
            this.use.apply(this, b)
        },
        _notify: function(a, b, c) {
            if (!b.success && this.config.loadErrorFn)
                this.config.loadErrorFn.call(this, this, a, b, c);
            else if (a)
                if (this.Env._missed && this.Env._missed.length && (b.msg = "Missing modules: " + this.Env._missed.join(),
                b.success = !1),
                this.config.throwFail)
                    a(this, b);
                else
                    try {
                        a(this, b)
                    } catch (a) {
                        this.error("use callback error", a, c)
                    }
        },
        _use: function(a, b) {
            this.Array || this._attach(["yui-base"]);
            var d, e, f, g, h = this, i = YUI.Env, j = i.mods, k = h.Env, l = k._used, m = i.aliases, n = i._loaderQueue, o = a[0], p = h.Array, q = h.config, r = q.bootstrap, s = [], t = [], u = !0, w = q.fetchCSS, x = function(a, b) {
                var d, e, f, g, h, k = 0, n = [];
                if (a.length) {
                    if (m) {
                        for (e = a.length,
                        k = 0; k < e; k++)
                            m[a[k]] && !j[a[k]] ? n = [].concat(n, m[a[k]]) : n.push(a[k]);
                        a = n
                    }
                    for (e = a.length,
                    k = 0; k < e; k++)
                        d = a[k],
                        b || t.push(d),
                        l[d] || (f = j[d],
                        g = null,
                        h = null,
                        f ? (l[d] = !0,
                        g = f.details.requires,
                        h = f.details.use) : i._loaded[c][d] ? l[d] = !0 : s.push(d),
                        g && g.length && x(g),
                        h && h.length && x(h, 1))
                }
            }, y = function(c) {
                var d, e, f = c || {
                    success: !0,
                    msg: "not dynamic"
                }, g = !0, i = f.data;
                h._loading = !1,
                i && (e = s,
                s = [],
                t = [],
                x(i),
                (d = s.length) && [].concat(s).sort().join() == e.sort().join() && (d = !1)),
                d && i ? (h._loading = !0,
                h._use(s, function() {
                    h._attach(i) && h._notify(b, f, i)
                })) : (i && (g = h._attach(i)),
                g && h._notify(b, f, a)),
                h._useQueue && h._useQueue.size() && !h._loading && h._use.apply(h, h._useQueue.next())
            };
            if ("*" === o) {
                a = [];
                for (g in j)
                    j.hasOwnProperty(g) && a.push(g);
                return u = h._attach(a),
                u && y(),
                h
            }
            return (j.loader || j["loader-base"]) && !h.Loader && h._attach(["loader" + (j.loader ? "" : "-base")]),
            r && h.Loader && a.length && (e = v(h),
            e.require(a),
            e.ignoreRegistered = !0,
            e._boot = !0,
            e.calculate(null, w ? null : "js"),
            a = e.sorted,
            e._boot = !1),
            x(a),
            d = s.length,
            d && (s = p.dedupe(s),
            d = s.length),
            r && d && h.Loader ? (h._loading = !0,
            e = v(h),
            e.onEnd = y,
            e.context = h,
            e.data = a,
            e.ignoreRegistered = !1,
            e.require(s),
            e.insert(null, w ? null : "js")) : r && d && h.Get && !k.bootstrapped ? (h._loading = !0,
            f = function() {
                h._loading = !1,
                n.running = !1,
                k.bootstrapped = !0,
                i._bootstrapping = !1,
                h._attach(["loader"]) && h._use(a, b)
            }
            ,
            i._bootstrapping ? n.add(f) : (i._bootstrapping = !0,
            h.Get.script(q.base + q.loaderPath, {
                onEnd: f
            }))) : (u = h._attach(a)) && y(),
            h
        },
        namespace: function() {
            for (var a, b, c, e, f = arguments, g = 0; g < f.length; g++)
                if (a = this,
                e = f[g],
                e.indexOf(d) > -1)
                    for (c = e.split(d),
                    b = "YAHOO" == c[0] ? 1 : 0; b < c.length; b++)
                        a[c[b]] = a[c[b]] || {},
                        a = a[c[b]];
                else
                    a[e] = a[e] || {},
                    a = a[e];
            return a
        },
        log: h,
        message: h,
        dump: function(a) {
            return "" + a
        },
        error: function(a, b, c) {
            var d, e = this;
            if (e.config.errorFn && (d = e.config.errorFn.apply(e, arguments)),
            !d)
                throw b || new Error(a);
            return e.message(a, "error", "" + c),
            e
        },
        guid: function(a) {
            var b = this.Env._guidp + "_" + ++this.Env._uidx;
            return a ? a + b : b
        },
        stamp: function(a, b) {
            var c;
            if (!a)
                return a;
            if (!(c = a.uniqueID && a.nodeType && 9 !== a.nodeType ? a.uniqueID : "string" == typeof a ? a : a._yuid) && (c = this.guid(),
            !b))
                try {
                    a._yuid = c
                } catch (a) {
                    c = null
                }
            return c
        },
        destroy: function() {
            var a = this;
            a.Event && a.Event._unload(),
            delete p[a.id],
            delete a.Env,
            delete a.config
        }
    },
    YUI.prototype = a;
    for (b in a)
        a.hasOwnProperty(b) && (YUI[b] = a[b]);
    YUI.applyConfig = function(a) {
        a && (YUI.GlobalConfig && this.prototype.applyConfig.call(this, YUI.GlobalConfig),
        this.prototype.applyConfig.call(this, a),
        YUI.GlobalConfig = this.config)
    }
    ,
    YUI._init(),
    k ? (r(m, "DOMContentLoaded", t),
    r(window, "load", u)) : (t(),
    u()),
    YUI.Env.add = r,
    YUI.Env.remove = s,
    "object" == typeof exports && (exports.YUI = YUI,
    YUI.setLoadHook = function(a) {
        YUI._getLoadHook = a
    }
    ,
    YUI._getLoadHook = null),
    YUI.Env[c] = {}
}(),
YUI.add("yui-base", function(a, b) {
    function c(a, b, d) {
        var e, f;
        if (b || (b = 0),
        d || c.test(a))
            try {
                return q.slice.call(a, b)
            } catch (c) {
                for (f = [],
                e = a.length; b < e; ++b)
                    f.push(a[b]);
                return f
            }
        return [a]
    }
    function d() {
        this._init(),
        this.add.apply(this, arguments)
    }
    var e = a.Lang || (a.Lang = {})
      , f = String.prototype
      , g = Object.prototype.toString
      , h = {
        undefined: "undefined",
        number: "number",
        boolean: "boolean",
        string: "string",
        "[object Function]": "function",
        "[object RegExp]": "regexp",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Error]": "error"
    }
      , i = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g
      , j = "\t\n\v\f\r   ᠎           \u2028\u2029  　\ufeff"
      , k = "[\t-\r   ᠎ - \u2028\u2029  　\ufeff]+"
      , l = new RegExp("^" + k)
      , m = new RegExp(k + "$")
      , n = new RegExp(l.source + "|" + m.source,"g")
      , o = /\{\s*\[(?:native code|function)\]\s*\}/i;
    e._isNative = function(b) {
        return !!(a.config.useNativeES5 && b && o.test(b))
    }
    ,
    e.isArray = e._isNative(Array.isArray) ? Array.isArray : function(a) {
        return "array" === e.type(a)
    }
    ,
    e.isBoolean = function(a) {
        return "boolean" == typeof a
    }
    ,
    e.isDate = function(a) {
        return "date" === e.type(a) && "Invalid Date" !== a.toString() && !isNaN(a)
    }
    ,
    e.isFunction = function(a) {
        return "function" === e.type(a)
    }
    ,
    e.isNull = function(a) {
        return null === a
    }
    ,
    e.isNumber = function(a) {
        return "number" == typeof a && isFinite(a)
    }
    ,
    e.isObject = function(a, b) {
        var c = typeof a;
        return a && ("object" === c || !b && ("function" === c || e.isFunction(a))) || !1
    }
    ,
    e.isRegExp = function(a) {
        return "regexp" === e.type(a)
    }
    ,
    e.isString = function(a) {
        return "string" == typeof a
    }
    ,
    e.isUndefined = function(a) {
        return void 0 === a
    }
    ,
    e.isValue = function(a) {
        var b = e.type(a);
        switch (b) {
        case "number":
            return isFinite(a);
        case "null":
        case "undefined":
            return !1;
        default:
            return !!b
        }
    }
    ,
    e.now = Date.now || function() {
        return (new Date).getTime()
    }
    ,
    e.sub = function(a, b) {
        return a.replace ? a.replace(i, function(a, c) {
            return e.isUndefined(b[c]) ? a : b[c]
        }) : a
    }
    ,
    e.trim = e._isNative(f.trim) && !j.trim() ? function(a) {
        return a && a.trim ? a.trim() : a
    }
    : function(a) {
        try {
            return a.replace(n, "")
        } catch (b) {
            return a
        }
    }
    ,
    e.trimLeft = e._isNative(f.trimLeft) && !j.trimLeft() ? function(a) {
        return a.trimLeft()
    }
    : function(a) {
        return a.replace(l, "")
    }
    ,
    e.trimRight = e._isNative(f.trimRight) && !j.trimRight() ? function(a) {
        return a.trimRight()
    }
    : function(a) {
        return a.replace(m, "")
    }
    ,
    e.type = function(a) {
        return h[typeof a] || h[g.call(a)] || (a ? "object" : "null")
    }
    ;
    var p = a.Lang
      , q = Array.prototype
      , r = Object.prototype.hasOwnProperty;
    a.Array = c,
    c.dedupe = p._isNative(Object.create) ? function(a) {
        var b, c, d, e = Object.create(null), f = [];
        for (b = 0,
        d = a.length; b < d; ++b)
            c = a[b],
            e[c] || (e[c] = 1,
            f.push(c));
        return f
    }
    : function(a) {
        var b, c, d, e = {}, f = [];
        for (b = 0,
        d = a.length; b < d; ++b)
            c = a[b],
            r.call(e, c) || (e[c] = 1,
            f.push(c));
        return f
    }
    ,
    c.each = c.forEach = p._isNative(q.forEach) ? function(b, c, d) {
        return q.forEach.call(b || [], c, d || a),
        a
    }
    : function(b, c, d) {
        for (var e = 0, f = b && b.length || 0; e < f; ++e)
            e in b && c.call(d || a, b[e], e, b);
        return a
    }
    ,
    c.hash = function(a, b) {
        var c, d, e = {}, f = b && b.length || 0;
        for (c = 0,
        d = a.length; c < d; ++c)
            c in a && (e[a[c]] = !(f > c && c in b) || b[c]);
        return e
    }
    ,
    c.indexOf = p._isNative(q.indexOf) ? function(a, b, c) {
        return q.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        var d = a.length;
        for (c = +c || 0,
        (c = (c > 0 || -1) * Math.floor(Math.abs(c))) < 0 && (c += d) < 0 && (c = 0); c < d; ++c)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ,
    c.numericSort = function(a, b) {
        return a - b
    }
    ,
    c.some = p._isNative(q.some) ? function(a, b, c) {
        return q.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = 0, e = a.length; d < e; ++d)
            if (d in a && b.call(c, a[d], d, a))
                return !0;
        return !1
    }
    ,
    c.test = function(a) {
        var b = 0;
        if (p.isArray(a))
            b = 1;
        else if (p.isObject(a))
            try {
                "length"in a && !a.tagName && (!a.scrollTo || !a.document) && !a.apply && (b = 2)
            } catch (a) {}
        return b
    }
    ,
    d.prototype = {
        _init: function() {
            this._q = []
        },
        next: function() {
            return this._q.shift()
        },
        last: function() {
            return this._q.pop()
        },
        add: function() {
            return this._q.push.apply(this._q, arguments),
            this
        },
        size: function() {
            return this._q.length
        }
    },
    a.Queue = d,
    YUI.Env._loaderQueue = YUI.Env._loaderQueue || new d;
    var r = Object.prototype.hasOwnProperty
      , s = a.Lang.isObject;
    a.cached = function(a, b, c) {
        return b || (b = {}),
        function(d) {
            var e = arguments.length > 1 ? Array.prototype.join.call(arguments, "__") : String(d);
            return e in b && (!c || b[e] != c) || (b[e] = a.apply(a, arguments)),
            b[e]
        }
    }
    ,
    a.getLocation = function() {
        var b = a.config.win;
        return b && b.location
    }
    ,
    a.merge = function() {
        for (var a, b, c = 0, d = arguments.length, e = {}; c < d; ++c) {
            b = arguments[c];
            for (a in b)
                r.call(b, a) && (e[a] = b[a])
        }
        return e
    }
    ,
    a.mix = function(b, c, d, e, f, g) {
        var h, i, j, k, l, m, n;
        if (!b || !c)
            return b || a;
        if (f) {
            if (2 === f && a.mix(b.prototype, c.prototype, d, e, 0, g),
            j = 1 === f || 3 === f ? c.prototype : c,
            n = 1 === f || 4 === f ? b.prototype : b,
            !j || !n)
                return b
        } else
            j = c,
            n = b;
        if (h = d && !g,
        e)
            for (k = 0,
            m = e.length; k < m; ++k)
                l = e[k],
                r.call(j, l) && (i = !h && l in n,
                g && i && s(n[l], !0) && s(j[l], !0) ? a.mix(n[l], j[l], d, null, 0, g) : !d && i || (n[l] = j[l]));
        else {
            for (l in j)
                r.call(j, l) && (i = !h && l in n,
                g && i && s(n[l], !0) && s(j[l], !0) ? a.mix(n[l], j[l], d, null, 0, g) : !d && i || (n[l] = j[l]));
            a.Object._hasEnumBug && a.mix(n, j, d, a.Object._forceEnum, f, g)
        }
        return b
    }
    ;
    var t, p = a.Lang, r = Object.prototype.hasOwnProperty, u = a.Object = p._isNative(Object.create) ? function(a) {
        return Object.create(a)
    }
    : function() {
        function a() {}
        return function(b) {
            return a.prototype = b,
            new a
        }
    }(), v = u._forceEnum = ["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "toLocaleString", "valueOf"], w = u._hasEnumBug = !{
        valueOf: 0
    }.propertyIsEnumerable("valueOf"), x = u._hasProtoEnumBug = function() {}
    .propertyIsEnumerable("prototype"), y = u.owns = function(a, b) {
        return !!a && r.call(a, b)
    }
    ;
    u.hasKey = y,
    u.keys = p._isNative(Object.keys) && !x ? Object.keys : function(a) {
        if (!p.isObject(a))
            throw new TypeError("Object.keys called on a non-object");
        var b, c, d, e = [];
        if (x && "function" == typeof a)
            for (c in a)
                y(a, c) && "prototype" !== c && e.push(c);
        else
            for (c in a)
                y(a, c) && e.push(c);
        if (w)
            for (b = 0,
            d = v.length; b < d; ++b)
                c = v[b],
                y(a, c) && e.push(c);
        return e
    }
    ,
    u.values = function(a) {
        for (var b = u.keys(a), c = 0, d = b.length, e = []; c < d; ++c)
            e.push(a[b[c]]);
        return e
    }
    ,
    u.size = function(a) {
        try {
            return u.keys(a).length
        } catch (a) {
            return 0
        }
    }
    ,
    u.hasValue = function(b, c) {
        return a.Array.indexOf(u.values(b), c) > -1
    }
    ,
    u.each = function(b, c, d, e) {
        var f;
        for (f in b)
            (e || y(b, f)) && c.call(d || a, b[f], f, b);
        return a
    }
    ,
    u.some = function(b, c, d, e) {
        var f;
        for (f in b)
            if ((e || y(b, f)) && c.call(d || a, b[f], f, b))
                return !0;
        return !1
    }
    ,
    u.getValue = function(b, c) {
        if (!p.isObject(b))
            return t;
        var d, e = a.Array(c), f = e.length;
        for (d = 0; b !== t && d < f; d++)
            b = b[e[d]];
        return b
    }
    ,
    u.setValue = function(b, c, d) {
        var e, f = a.Array(c), g = f.length - 1, h = b;
        if (g >= 0) {
            for (e = 0; h !== t && e < g; e++)
                h = h[f[e]];
            if (h === t)
                return t;
            h[f[e]] = d
        }
        return b
    }
    ,
    u.isEmpty = function(a) {
        return !u.keys(Object(a)).length
    }
    ,
    YUI.Env.parseUA = function(b) {
        var c, d = function(a) {
            var b = 0;
            return parseFloat(a.replace(/\./g, function() {
                return 1 == b++ ? "" : "."
            }))
        }, e = a.config.win, f = e && e.navigator, g = {
            ie: 0,
            opera: 0,
            gecko: 0,
            webkit: 0,
            safari: 0,
            chrome: 0,
            mobile: null,
            air: 0,
            phantomjs: 0,
            ipad: 0,
            iphone: 0,
            ipod: 0,
            ios: null,
            android: 0,
            silk: 0,
            accel: !1,
            webos: 0,
            caja: f && f.cajaVersion,
            secure: !1,
            os: null,
            nodejs: 0,
            winjs: "undefined" != typeof Windows && !!Windows.System,
            touchEnabled: !1
        }, h = b || f && f.userAgent, i = e && e.location, j = i && i.href;
        return g.userAgent = h,
        g.secure = j && 0 === j.toLowerCase().indexOf("https"),
        h && (/windows|win32/i.test(h) ? g.os = "windows" : /macintosh|mac_powerpc/i.test(h) ? g.os = "macintosh" : /android/i.test(h) ? g.os = "android" : /symbos/i.test(h) ? g.os = "symbos" : /linux/i.test(h) ? g.os = "linux" : /rhino/i.test(h) && (g.os = "rhino"),
        /KHTML/.test(h) && (g.webkit = 1),
        /IEMobile|XBLWP7/.test(h) && (g.mobile = "windows"),
        /Fennec/.test(h) && (g.mobile = "gecko"),
        c = h.match(/AppleWebKit\/([^\s]*)/),
        c && c[1] && (g.webkit = d(c[1]),
        g.safari = g.webkit,
        /PhantomJS/.test(h) && (c = h.match(/PhantomJS\/([^\s]*)/)) && c[1] && (g.phantomjs = d(c[1])),
        / Mobile\//.test(h) || /iPad|iPod|iPhone/.test(h) ? (g.mobile = "Apple",
        c = h.match(/OS ([^\s]*)/),
        c && c[1] && (c = d(c[1].replace("_", "."))),
        g.ios = c,
        g.os = "ios",
        g.ipad = g.ipod = g.iphone = 0,
        (c = h.match(/iPad|iPod|iPhone/)) && c[0] && (g[c[0].toLowerCase()] = g.ios)) : (c = h.match(/NokiaN[^\/]*|webOS\/\d\.\d/),
        c && (g.mobile = c[0]),
        /webOS/.test(h) && (g.mobile = "WebOS",
        (c = h.match(/webOS\/([^\s]*);/)) && c[1] && (g.webos = d(c[1]))),
        / Android/.test(h) && (/Mobile/.test(h) && (g.mobile = "Android"),
        (c = h.match(/Android ([^\s]*);/)) && c[1] && (g.android = d(c[1]))),
        /Silk/.test(h) && (c = h.match(/Silk\/([^\s]*)/),
        c && c[1] && (g.silk = d(c[1])),
        g.android || (g.android = 2.34,
        g.os = "Android"),
        /Accelerated=true/.test(h) && (g.accel = !0))),
        c = h.match(/OPR\/(\d+\.\d+)/),
        c && c[1] ? g.opera = d(c[1]) : (c = h.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),
        c && c[1] && c[2] ? (g.chrome = d(c[2]),
        g.safari = 0,
        "CrMo" === c[1] && (g.mobile = "chrome")) : (c = h.match(/AdobeAIR\/([^\s]*)/)) && (g.air = c[0]))),
        g.webkit || (/Opera/.test(h) ? (c = h.match(/Opera[\s\/]([^\s]*)/),
        c && c[1] && (g.opera = d(c[1])),
        c = h.match(/Version\/([^\s]*)/),
        c && c[1] && (g.opera = d(c[1])),
        /Opera Mobi/.test(h) && (g.mobile = "opera",
        (c = h.replace("Opera Mobi", "").match(/Opera ([^\s]*)/)) && c[1] && (g.opera = d(c[1]))),
        (c = h.match(/Opera Mini[^;]*/)) && (g.mobile = c[0])) : (c = h.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/),
        c && (c[1] || c[2]) ? g.ie = d(c[1] || c[2]) : (c = h.match(/Gecko\/([^\s]*)/)) && (g.gecko = 1,
        (c = h.match(/rv:([^\s\)]*)/)) && c[1] && (g.gecko = d(c[1]),
        /Mobile|Tablet/.test(h) && (g.mobile = "ffos")))))),
        e && f && !(g.chrome && g.chrome < 6) && (g.touchEnabled = "ontouchstart"in e || "msMaxTouchPoints"in f && f.msMaxTouchPoints > 0),
        b || ("object" == typeof process && process.versions && process.versions.node && (g.os = process.platform,
        g.nodejs = d(process.versions.node)),
        YUI.Env.UA = g),
        g
    }
    ,
    a.UA = YUI.Env.UA || YUI.Env.parseUA(),
    a.UA.compareVersions = function(a, b) {
        var c, d, e, f, g, h;
        if (a === b)
            return 0;
        for (d = (a + "").split("."),
        f = (b + "").split("."),
        g = 0,
        h = Math.max(d.length, f.length); g < h; ++g) {
            if (c = parseInt(d[g], 10),
            e = parseInt(f[g], 10),
            isNaN(c) && (c = 0),
            isNaN(e) && (e = 0),
            c < e)
                return -1;
            if (c > e)
                return 1
        }
        return 0
    }
    ,
    YUI.Env.aliases = {
        anim: ["anim-base", "anim-color", "anim-curve", "anim-easing", "anim-node-plugin", "anim-scroll", "anim-xy"],
        "anim-shape-transform": ["anim-shape"],
        app: ["app-base", "app-content", "app-transitions", "lazy-model-list", "model", "model-list", "model-sync-rest", "model-sync-local", "router", "view", "view-node-map"],
        attribute: ["attribute-base", "attribute-complex"],
        "attribute-events": ["attribute-observable"],
        autocomplete: ["autocomplete-base", "autocomplete-sources", "autocomplete-list", "autocomplete-plugin"],
        axes: ["axis-numeric", "axis-category", "axis-time", "axis-stacked"],
        "axes-base": ["axis-numeric-base", "axis-category-base", "axis-time-base", "axis-stacked-base"],
        base: ["base-base", "base-pluginhost", "base-build"],
        cache: ["cache-base", "cache-offline", "cache-plugin"],
        charts: ["charts-base"],
        collection: ["array-extras", "arraylist", "arraylist-add", "arraylist-filter", "array-invoke"],
        color: ["color-base", "color-hsl", "color-harmony"],
        controller: ["router"],
        dataschema: ["dataschema-base", "dataschema-json", "dataschema-xml", "dataschema-array", "dataschema-text"],
        datasource: ["datasource-local", "datasource-io", "datasource-get", "datasource-function", "datasource-cache", "datasource-jsonschema", "datasource-xmlschema", "datasource-arrayschema", "datasource-textschema", "datasource-polling"],
        datatable: ["datatable-core", "datatable-table", "datatable-head", "datatable-body", "datatable-base", "datatable-column-widths", "datatable-message", "datatable-mutable", "datatable-sort", "datatable-datasource"],
        datatype: ["datatype-date", "datatype-number", "datatype-xml"],
        "datatype-date": ["datatype-date-parse", "datatype-date-format", "datatype-date-math"],
        "datatype-number": ["datatype-number-parse", "datatype-number-format"],
        "datatype-xml": ["datatype-xml-parse", "datatype-xml-format"],
        dd: ["dd-ddm-base", "dd-ddm", "dd-ddm-drop", "dd-drag", "dd-proxy", "dd-constrain", "dd-drop", "dd-scroll", "dd-delegate"],
        dom: ["dom-base", "dom-screen", "dom-style", "selector-native", "selector"],
        editor: ["frame", "editor-selection", "exec-command", "editor-base", "editor-para", "editor-br", "editor-bidi", "editor-tab", "createlink-base"],
        event: ["event-base", "event-delegate", "event-synthetic", "event-mousewheel", "event-mouseenter", "event-key", "event-focus", "event-resize", "event-hover", "event-outside", "event-touch", "event-move", "event-flick", "event-valuechange", "event-tap"],
        "event-custom": ["event-custom-base", "event-custom-complex"],
        "event-gestures": ["event-flick", "event-move"],
        handlebars: ["handlebars-compiler"],
        highlight: ["highlight-base", "highlight-accentfold"],
        history: ["history-base", "history-hash", "history-html5"],
        io: ["io-base", "io-xdr", "io-form", "io-upload-iframe", "io-queue"],
        json: ["json-parse", "json-stringify"],
        loader: ["loader-base", "loader-rollup", "loader-yui3"],
        node: ["node-base", "node-event-delegate", "node-pluginhost", "node-screen", "node-style"],
        pluginhost: ["pluginhost-base", "pluginhost-config"],
        querystring: ["querystring-parse", "querystring-stringify"],
        recordset: ["recordset-base", "recordset-sort", "recordset-filter", "recordset-indexer"],
        resize: ["resize-base", "resize-proxy", "resize-constrain"],
        slider: ["slider-base", "slider-value-range", "clickable-rail", "range-slider"],
        template: ["template-base", "template-micro"],
        text: ["text-accentfold", "text-wordbreak"],
        widget: ["widget-base", "widget-htmlparser", "widget-skin", "widget-uievents"]
    }
}, "3.15.0", {
    use: ["yui-base", "get", "features", "intl-base", "yui-log", "yui-later", "loader-base", "loader-rollup", "loader-yui3"]
}),
YUI.add("get", function(a, b) {
    var c, d, e, f = a.Lang;
    a.Get = d = {
        cssOptions: {
            attributes: {
                rel: "stylesheet"
            },
            doc: a.config.linkDoc || a.config.doc,
            pollInterval: 50
        },
        jsOptions: {
            autopurge: !0,
            doc: a.config.scriptDoc || a.config.doc
        },
        options: {
            attributes: {
                charset: "utf-8"
            },
            purgethreshold: 20
        },
        REGEX_CSS: /\.css(?:[?;].*)?$/i,
        REGEX_JS: /\.js(?:[?;].*)?$/i,
        _insertCache: {},
        _pending: null,
        _purgeNodes: [],
        _queue: [],
        abort: function(a) {
            var b, c, d, e, f;
            if (!a.abort)
                if (c = a,
                f = this._pending,
                a = null,
                f && f.transaction.id === c)
                    a = f.transaction,
                    this._pending = null;
                else
                    for (b = 0,
                    e = this._queue.length; b < e; ++b)
                        if (d = this._queue[b].transaction,
                        d.id === c) {
                            a = d,
                            this._queue.splice(b, 1);
                            break
                        }
            a && a.abort()
        },
        css: function(a, b, c) {
            return this._load("css", a, b, c)
        },
        js: function(a, b, c) {
            return this._load("js", a, b, c)
        },
        load: function(a, b, c) {
            return this._load(null, a, b, c)
        },
        _autoPurge: function(a) {
            a && this._purgeNodes.length >= a && this._purge(this._purgeNodes)
        },
        _getEnv: function() {
            var b = a.config.doc
              , c = a.UA;
            return this._env = {
                async: b && !0 === b.createElement("script").async || c.ie >= 10,
                cssFail: c.gecko >= 9 || c.compareVersions(c.webkit, 535.24) >= 0,
                cssLoad: (!c.gecko && !c.webkit || c.gecko >= 9 || c.compareVersions(c.webkit, 535.24) >= 0) && !(c.chrome && c.chrome <= 18),
                preservesScriptOrder: !!(c.gecko || c.opera || c.ie && c.ie >= 10)
            }
        },
        _getTransaction: function(b, c) {
            var d, g, h, i, j = [];
            for (f.isArray(b) || (b = [b]),
            c = a.merge(this.options, c),
            c.attributes = a.merge(this.options.attributes, c.attributes),
            d = 0,
            g = b.length; d < g; ++d) {
                if (i = b[d],
                h = {
                    attributes: {}
                },
                "string" == typeof i)
                    h.url = i;
                else {
                    if (!i.url)
                        continue;
                    a.mix(h, i, !1, null, 0, !0),
                    i = i.url
                }
                a.mix(h, c, !1, null, 0, !0),
                h.type || (this.REGEX_CSS.test(i) ? h.type = "css" : (this.REGEX_JS.test(i),
                h.type = "js")),
                a.mix(h, "js" === h.type ? this.jsOptions : this.cssOptions, !1, null, 0, !0),
                h.attributes.id || (h.attributes.id = a.guid()),
                h.win ? h.doc = h.win.document : h.win = h.doc.defaultView || h.doc.parentWindow,
                h.charset && (h.attributes.charset = h.charset),
                j.push(h)
            }
            return new e(j,c)
        },
        _load: function(a, b, c, e) {
            var f;
            return "function" == typeof c && (e = c,
            c = {}),
            c || (c = {}),
            c.type = a,
            c._onFinish = d._onTransactionFinish,
            this._env || this._getEnv(),
            f = this._getTransaction(b, c),
            this._queue.push({
                callback: e,
                transaction: f
            }),
            this._next(),
            f
        },
        _onTransactionFinish: function() {
            d._pending = null,
            d._next()
        },
        _next: function() {
            var a;
            this._pending || (a = this._queue.shift()) && (this._pending = a,
            a.transaction.execute(a.callback))
        },
        _purge: function(b) {
            for (var c, d, e = this._purgeNodes, f = b !== e; d = b.pop(); )
                d._yuiget_finished && (d.parentNode && d.parentNode.removeChild(d),
                f && (c = a.Array.indexOf(e, d)) > -1 && e.splice(c, 1))
        }
    },
    d.script = d.js,
    d.Transaction = e = function(b, c) {
        var d = this;
        d.id = e._lastId += 1,
        d.data = c.data,
        d.errors = [],
        d.nodes = [],
        d.options = c,
        d.requests = b,
        d._callbacks = [],
        d._queue = [],
        d._reqsWaiting = 0,
        d.tId = d.id,
        d.win = c.win || a.config.win
    }
    ,
    e._lastId = 0,
    e.prototype = {
        _state: "new",
        abort: function(a) {
            this._pending = null,
            this._pendingCSS = null,
            this._pollTimer = clearTimeout(this._pollTimer),
            this._queue = [],
            this._reqsWaiting = 0,
            this.errors.push({
                error: a || "Aborted"
            }),
            this._finish()
        },
        execute: function(a) {
            var b, c, d, e, f = this, g = f.requests, h = f._state;
            if ("done" === h)
                return void (a && a(f.errors.length ? f.errors : null, f));
            if (a && f._callbacks.push(a),
            "executing" !== h) {
                for (f._state = "executing",
                f._queue = d = [],
                f.options.timeout && (f._timeout = setTimeout(function() {
                    f.abort("Timeout")
                }, f.options.timeout)),
                f._reqsWaiting = g.length,
                b = 0,
                c = g.length; b < c; ++b)
                    e = g[b],
                    e.async || "css" === e.type ? f._insert(e) : d.push(e);
                f._next()
            }
        },
        purge: function() {
            d._purge(this.nodes)
        },
        _createNode: function(a, b, d) {
            var e, f, g = d.createElement(a);
            c || (f = d.createElement("div"),
            f.setAttribute("class", "a"),
            c = "a" === f.className ? {} : {
                for: "htmlFor",
                class: "className"
            });
            for (e in b)
                b.hasOwnProperty(e) && g.setAttribute(c[e] || e, b[e]);
            return g
        },
        _finish: function() {
            var a, b, c, d = this.errors.length ? this.errors : null, e = this.options, f = e.context || this;
            if ("done" !== this._state) {
                for (this._state = "done",
                b = 0,
                c = this._callbacks.length; b < c; ++b)
                    this._callbacks[b].call(f, d, this);
                a = this._getEventData(),
                d ? (e.onTimeout && "Timeout" === d[d.length - 1].error && e.onTimeout.call(f, a),
                e.onFailure && e.onFailure.call(f, a)) : e.onSuccess && e.onSuccess.call(f, a),
                e.onEnd && e.onEnd.call(f, a),
                e._onFinish && e._onFinish()
            }
        },
        _getEventData: function(b) {
            return b ? a.merge(this, {
                abort: this.abort,
                purge: this.purge,
                request: b,
                url: b.url,
                win: b.win
            }) : this
        },
        _getInsertBefore: function(b) {
            var c, e, f = b.doc, g = b.insertBefore;
            return g ? "string" == typeof g ? f.getElementById(g) : g : (c = d._insertCache,
            e = a.stamp(f),
            (g = c[e]) ? g : (g = f.getElementsByTagName("base")[0]) ? c[e] = g : (g = f.head || f.getElementsByTagName("head")[0],
            g ? (g.appendChild(f.createTextNode("")),
            c[e] = g.lastChild) : c[e] = f.getElementsByTagName("script")[0]))
        },
        _insert: function(b) {
            function c() {
                l._progress("Failed to load " + b.url, b)
            }
            function e() {
                f && clearTimeout(f),
                l._progress(null, b)
            }
            var f, g, h = d._env, i = this._getInsertBefore(b), j = "js" === b.type, k = b.node, l = this, m = a.UA;
            k || (g = j ? "script" : !h.cssLoad && m.gecko ? "style" : "link",
            k = b.node = this._createNode(g, b.attributes, b.doc)),
            j ? (k.setAttribute("src", b.url),
            b.async ? k.async = !0 : (h.async && (k.async = !1),
            h.preservesScriptOrder || (this._pending = b))) : !h.cssLoad && m.gecko ? k.innerHTML = (b.attributes.charset ? '@charset "' + b.attributes.charset + '";' : "") + '@import "' + b.url + '";' : k.setAttribute("href", b.url),
            j && m.ie && (m.ie < 9 || document.documentMode && document.documentMode < 9) ? k.onreadystatechange = function() {
                /loaded|complete/.test(k.readyState) && (k.onreadystatechange = null,
                e())
            }
            : j || h.cssLoad ? (m.ie >= 10 ? (k.onerror = function() {
                setTimeout(c, 0)
            }
            ,
            k.onload = function() {
                setTimeout(e, 0)
            }
            ) : (k.onerror = c,
            k.onload = e),
            !h.cssFail && !j && (f = setTimeout(c, b.timeout || 3e3))) : this._poll(b),
            this.nodes.push(k),
            i.parentNode.insertBefore(k, i)
        },
        _next: function() {
            this._pending || (this._queue.length ? this._insert(this._queue.shift()) : this._reqsWaiting || this._finish())
        },
        _poll: function(b) {
            var c, d, e, f, g, h = this, i = h._pendingCSS, j = a.UA.webkit;
            if (!b || (i || (i = h._pendingCSS = []),
            i.push(b),
            !h._pollTimer)) {
                for (h._pollTimer = null,
                c = 0; c < i.length; ++c)
                    if (f = i[c],
                    j) {
                        for (g = f.doc.styleSheets,
                        d = g.length,
                        e = f.node.href; --d >= 0; )
                            if (g[d].href === e) {
                                i.splice(c, 1),
                                c -= 1,
                                h._progress(null, f);
                                break
                            }
                    } else
                        try {
                            !!f.node.sheet.cssRules,
                            i.splice(c, 1),
                            c -= 1,
                            h._progress(null, f)
                        } catch (a) {}
                i.length && (h._pollTimer = setTimeout(function() {
                    h._poll.call(h)
                }, h.options.pollInterval))
            }
        },
        _progress: function(a, b) {
            var c = this.options;
            a && (b.error = a,
            this.errors.push({
                error: a,
                request: b
            })),
            b.node._yuiget_finished = b.finished = !0,
            c.onProgress && c.onProgress.call(c.context || this, this._getEventData(b)),
            b.autopurge && (d._autoPurge(this.options.purgethreshold),
            d._purgeNodes.push(b.node)),
            this._pending === b && (this._pending = null),
            this._reqsWaiting -= 1,
            this._next()
        }
    }
}, "3.15.0", {
    requires: ["yui-base"]
}),
YUI.add("features", function(a, b) {
    var c = {};
    a.mix(a.namespace("Features"), {
        tests: c,
        add: function(a, b, d) {
            c[a] = c[a] || {},
            c[a][b] = d
        },
        all: function(b, d) {
            var e = c[b]
              , f = [];
            return e && a.Object.each(e, function(c, e) {
                f.push(e + ":" + (a.Features.test(b, e, d) ? 1 : 0))
            }),
            f.length ? f.join(";") : ""
        },
        test: function(b, d, e) {
            e = e || [];
            var f, g, h, i = c[b], j = i && i[d];
            return !j || (f = j.result,
            a.Lang.isUndefined(f) && (g = j.ua,
            g && (f = a.UA[g]),
            h = j.test,
            h && (!g || f) && (f = h.apply(a, e)),
            j.result = f)),
            f
        }
    });
    var d = a.Features.add;
    d("load", "0", {
        name: "app-transitions-native",
        test: function(a) {
            var b = a.config.doc
              , c = b ? b.documentElement : null;
            return !(!c || !c.style) && ("MozTransition"in c.style || "WebkitTransition"in c.style || "transition"in c.style)
        },
        trigger: "app-transitions"
    }),
    d("load", "1", {
        name: "autocomplete-list-keys",
        test: function(a) {
            return !a.UA.ios && !a.UA.android
        },
        trigger: "autocomplete-list"
    }),
    d("load", "2", {
        name: "dd-gestures",
        trigger: "dd-drag",
        ua: "touchEnabled"
    }),
    d("load", "3", {
        name: "dom-style-ie",
        test: function(a) {
            var b = a.Features.test
              , c = a.Features.add
              , d = a.config.win
              , e = a.config.doc;
            return c("style", "computedStyle", {
                test: function() {
                    return d && "getComputedStyle"in d
                }
            }),
            c("style", "opacity", {
                test: function() {
                    return e && "opacity"in e.documentElement.style
                }
            }),
            !b("style", "opacity") && !b("style", "computedStyle")
        },
        trigger: "dom-style"
    }),
    d("load", "4", {
        name: "editor-para-ie",
        trigger: "editor-para",
        ua: "ie",
        when: "instead"
    }),
    d("load", "5", {
        name: "event-base-ie",
        test: function(a) {
            var b = a.config.doc && a.config.doc.implementation;
            return b && !b.hasFeature("Events", "2.0")
        },
        trigger: "node-base"
    }),
    d("load", "6", {
        name: "graphics-canvas",
        test: function(a) {
            var b = a.config.doc
              , c = a.config.defaultGraphicEngine && "canvas" == a.config.defaultGraphicEngine
              , d = b && b.createElement("canvas");
            return (!(b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) || c) && d && d.getContext && d.getContext("2d")
        },
        trigger: "graphics"
    }),
    d("load", "7", {
        name: "graphics-canvas-default",
        test: function(a) {
            var b = a.config.doc
              , c = a.config.defaultGraphicEngine && "canvas" == a.config.defaultGraphicEngine
              , d = b && b.createElement("canvas");
            return (!(b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) || c) && d && d.getContext && d.getContext("2d")
        },
        trigger: "graphics"
    }),
    d("load", "8", {
        name: "graphics-svg",
        test: function(a) {
            var b = a.config.doc
              , c = !a.config.defaultGraphicEngine || "canvas" != a.config.defaultGraphicEngine
              , d = b && b.createElement("canvas");
            return b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (c || !d)
        },
        trigger: "graphics"
    }),
    d("load", "9", {
        name: "graphics-svg-default",
        test: function(a) {
            var b = a.config.doc
              , c = !a.config.defaultGraphicEngine || "canvas" != a.config.defaultGraphicEngine
              , d = b && b.createElement("canvas");
            return b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (c || !d)
        },
        trigger: "graphics"
    }),
    d("load", "10", {
        name: "graphics-vml",
        test: function(a) {
            var b = a.config.doc
              , c = b && b.createElement("canvas");
            return b && !b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!c || !c.getContext || !c.getContext("2d"))
        },
        trigger: "graphics"
    }),
    d("load", "11", {
        name: "graphics-vml-default",
        test: function(a) {
            var b = a.config.doc
              , c = b && b.createElement("canvas");
            return b && !b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!c || !c.getContext || !c.getContext("2d"))
        },
        trigger: "graphics"
    }),
    d("load", "12", {
        name: "history-hash-ie",
        test: function(a) {
            var b = a.config.doc && a.config.doc.documentMode;
            return a.UA.ie && (!("onhashchange"in a.config.win) || !b || b < 8)
        },
        trigger: "history-hash"
    }),
    d("load", "13", {
        name: "io-nodejs",
        trigger: "io-base",
        ua: "nodejs"
    }),
    d("load", "14", {
        name: "json-parse-shim",
        test: function(a) {
            function b(a, b) {
                return "ok" === a || b
            }
            var c = a.config.global.JSON
              , d = "[object JSON]" === Object.prototype.toString.call(c) && c
              , e = !1 !== a.config.useNativeJSONParse && !!d;
            if (e)
                try {
                    e = d.parse('{"ok":false}', b).ok
                } catch (a) {
                    e = !1
                }
            return !e
        },
        trigger: "json-parse"
    }),
    d("load", "15", {
        name: "json-stringify-shim",
        test: function(a) {
            var b = a.config.global.JSON
              , c = "[object JSON]" === Object.prototype.toString.call(b) && b
              , d = !1 !== a.config.useNativeJSONStringify && !!c;
            if (d)
                try {
                    d = "0" === c.stringify(0)
                } catch (a) {
                    d = !1
                }
            return !d
        },
        trigger: "json-stringify"
    }),
    d("load", "16", {
        name: "scrollview-base-ie",
        trigger: "scrollview-base",
        ua: "ie"
    }),
    d("load", "17", {
        name: "selector-css2",
        test: function(a) {
            var b = a.config.doc;
            return b && !("querySelectorAll"in b)
        },
        trigger: "selector"
    }),
    d("load", "18", {
        name: "transition-timer",
        test: function(a) {
            var b = a.config.doc
              , c = b ? b.documentElement : null
              , d = !0;
            return c && c.style && (d = !("MozTransition"in c.style || "WebkitTransition"in c.style || "transition"in c.style)),
            d
        },
        trigger: "transition"
    }),
    d("load", "19", {
        name: "widget-base-ie",
        trigger: "widget-base",
        ua: "ie"
    }),
    d("load", "20", {
        name: "yql-jsonp",
        test: function(a) {
            return !a.UA.nodejs && !a.UA.winjs
        },
        trigger: "yql",
        when: "after"
    }),
    d("load", "21", {
        name: "yql-nodejs",
        trigger: "yql",
        ua: "nodejs",
        when: "after"
    }),
    d("load", "22", {
        name: "yql-winjs",
        trigger: "yql",
        ua: "winjs",
        when: "after"
    })
}, "3.15.0", {
    requires: ["yui-base"]
}),
YUI.add("intl-base", function(a, b) {
    var c = /[, ]/;
    a.mix(a.namespace("Intl"), {
        lookupBestLang: function(b, d) {
            function e(a) {
                var b;
                for (b = 0; b < d.length; b += 1)
                    if (a.toLowerCase() === d[b].toLowerCase())
                        return d[b]
            }
            var f, g, h, i;
            for (a.Lang.isString(b) && (b = b.split(c)),
            f = 0; f < b.length; f += 1)
                if ((g = b[f]) && "*" !== g)
                    for (; g.length > 0; ) {
                        if (h = e(g))
                            return h;
                        if (!((i = g.lastIndexOf("-")) >= 0))
                            break;
                        g = g.substring(0, i),
                        i >= 2 && "-" === g.charAt(i - 2) && (g = g.substring(0, i - 2))
                    }
            return ""
        }
    })
}, "3.15.0", {
    requires: ["yui-base"]
}),
YUI.add("yui-log", function(a, b) {
    var c = a
      , d = "yui:log"
      , e = "undefined"
      , f = {
        debug: 1,
        info: 2,
        warn: 4,
        error: 8
    };
    c.log = function(a, b, g, h) {
        var i, j, k, l, m, n, o = c, p = o.config, q = o.fire ? o : YUI.Env.globalEvents;
        return p.debug && (g = g || "",
        void 0 !== g && (j = p.logExclude,
        k = p.logInclude,
        !k || g in k ? k && g in k ? i = !k[g] : j && g in j && (i = j[g]) : i = 1,
        void 0 !== b && b in f || (b = "info"),
        o.config.logLevel = o.config.logLevel || "debug",
        n = f[o.config.logLevel.toLowerCase()],
        b in f && f[b] < n && (i = 1)),
        i || (p.useBrowserConsole && (l = g ? g + ": " + a : a,
        o.Lang.isFunction(p.logFn) ? p.logFn.call(o, a, b, g) : typeof console !== e && console.log ? (m = b && console[b] && b in f ? b : "log",
        console[m](l)) : typeof opera !== e && opera.postError(l)),
        q && !h && (q === o && !q.getEvent(d) && q.publish(d, {
            broadcast: 2
        }),
        q.fire(d, {
            msg: a,
            cat: b,
            src: g
        })))),
        o
    }
    ,
    c.message = function() {
        return c.log.apply(c, arguments)
    }
}, "3.15.0", {
    requires: ["yui-base"]
}),
YUI.add("yui-later", function(a, b) {
    var c = [];
    a.later = function(b, d, e, f, g) {
        b = b || 0,
        f = a.Lang.isUndefined(f) ? c : a.Array(f),
        d = d || a.config.win || a;
        var h = !1
          , i = d && a.Lang.isString(e) ? d[e] : e
          , j = function() {
            h || (i.apply ? i.apply(d, f || c) : i(f[0], f[1], f[2], f[3]))
        }
          , k = g ? setInterval(j, b) : setTimeout(j, b);
        return {
            id: k,
            interval: g,
            cancel: function() {
                h = !0,
                this.interval ? clearInterval(k) : clearTimeout(k)
            }
        }
    }
    ,
    a.Lang.later = a.later
}, "3.15.0", {
    requires: ["yui-base"]
}),
YUI.add("loader-base", function(a, b) {
    !function() {
        var b = a.version
          , c = "/build/"
          , d = b + "/"
          , e = a.Env.base
          , f = "gallery-2014.02.20-23-55"
          , g = "2in3"
          , h = "4"
          , i = "2.9.0"
          , j = e + "combo?"
          , k = {
            version: b,
            root: d,
            base: a.Env.base,
            comboBase: j,
            skin: {
                defaultSkin: "sam",
                base: "assets/skins/",
                path: "skin.css",
                after: ["cssreset", "cssfonts", "cssgrids", "cssbase", "cssreset-context", "cssfonts-context"]
            },
            groups: {},
            patterns: {}
        }
          , l = k.groups
          , m = function(a, b, d) {
            var f = g + "." + (a || h) + "/" + (b || i) + c
              , k = d && d.base ? d.base : e
              , m = d && d.comboBase ? d.comboBase : j;
            l.yui2.base = k + f,
            l.yui2.root = f,
            l.yui2.comboBase = m
        }
          , n = function(a, b) {
            var d = (a || f) + c
              , g = b && b.base ? b.base : e
              , h = b && b.comboBase ? b.comboBase : j;
            l.gallery.base = g + d,
            l.gallery.root = d,
            l.gallery.comboBase = h
        };
        l[b] = {},
        l.gallery = {
            ext: !1,
            combine: !0,
            comboBase: j,
            update: n,
            patterns: {
                "gallery-": {},
                "lang/gallery-": {},
                "gallerycss-": {
                    type: "css"
                }
            }
        },
        l.yui2 = {
            combine: !0,
            ext: !1,
            comboBase: j,
            update: m,
            patterns: {
                "yui2-": {
                    configFn: function(a) {
                        /-skin|reset|fonts|grids|base/.test(a.name) && (a.type = "css",
                        a.path = a.path.replace(/\.js/, ".css"),
                        a.path = a.path.replace(/\/yui2-skin/, "/assets/skins/sam/yui2-skin"))
                    }
                }
            }
        },
        n(),
        m(),
        YUI.Env[b] && a.mix(k, YUI.Env[b], !1, ["modules", "groups", "skin"], 0, !0),
        YUI.Env[b] = k
    }();
    var c, d = {}, e = [], f = 1024, g = YUI.Env, h = g._loaded, i = "css", j = "js", k = "intl", l = "sam", m = a.version, n = "", o = a.Object, p = o.each, q = a.Array, r = g._loaderQueue, s = g[m], t = "skin-", u = a.Lang, v = g.mods, w = function(a, b, c, d) {
        var e = a + "/" + b;
        return d || (e += "-min"),
        e += "." + (c || i)
    };
    YUI.Env._cssLoaded || (YUI.Env._cssLoaded = {}),
    a.Env.meta = s,
    a.Loader = function(b) {
        var d = this;
        b = b || {},
        c = s.md5,
        d.context = a,
        d.base = a.Env.meta.base + a.Env.meta.root,
        d.comboBase = a.Env.meta.comboBase,
        d.combine = b.base && b.base.indexOf(d.comboBase.substr(0, 20)) > -1,
        d.comboSep = "&",
        d.maxURLLength = f,
        d.ignoreRegistered = b.ignoreRegistered,
        d.root = a.Env.meta.root,
        d.timeout = 0,
        d.forceMap = {},
        d.allowRollup = !1,
        d.filters = {},
        d.required = {},
        d.patterns = {},
        d.moduleInfo = {},
        d.groups = a.merge(a.Env.meta.groups),
        d.skin = a.merge(a.Env.meta.skin),
        d.conditions = {},
        d.config = b,
        d._internal = !0,
        d._populateCache(),
        d.loaded = h[m],
        d.async = !0,
        d._inspectPage(),
        d._internal = !1,
        d._config(b),
        d.forceMap = d.force ? a.Array.hash(d.force) : {},
        d.testresults = null,
        a.config.tests && (d.testresults = a.config.tests),
        d.sorted = [],
        d.dirty = !0,
        d.inserted = {},
        d.skipped = {},
        d.tested = {},
        d.ignoreRegistered && d._resetModules()
    }
    ,
    a.Loader.prototype = {
        _populateCache: function() {
            var b, c = this, d = s.modules, e = g._renderedMods;
            if (e && !c.ignoreRegistered) {
                for (b in e)
                    e.hasOwnProperty(b) && (c.moduleInfo[b] = a.merge(e[b]));
                e = g._conditions;
                for (b in e)
                    e.hasOwnProperty(b) && (c.conditions[b] = a.merge(e[b]))
            } else
                for (b in d)
                    d.hasOwnProperty(b) && c.addModule(d[b], b)
        },
        _resetModules: function() {
            var a, b, c, d, e, f = this;
            for (a in f.moduleInfo)
                if (f.moduleInfo.hasOwnProperty(a)) {
                    if (c = f.moduleInfo[a],
                    d = c.name,
                    (e = YUI.Env.mods[d] ? YUI.Env.mods[d].details : null) && (f.moduleInfo[d]._reset = !0,
                    f.moduleInfo[d].requires = e.requires || [],
                    f.moduleInfo[d].optional = e.optional || [],
                    f.moduleInfo[d].supersedes = e.supercedes || []),
                    c.defaults)
                        for (b in c.defaults)
                            c.defaults.hasOwnProperty(b) && c[b] && (c[b] = c.defaults[b]);
                    delete c.langCache,
                    delete c.skinCache,
                    c.skinnable && f._addSkin(f.skin.defaultSkin, c.name)
                }
        },
        REGEX_CSS: /\.css(?:[?;].*)?$/i,
        FILTER_DEFS: {
            RAW: {
                searchExp: "-min\\.js",
                replaceStr: ".js"
            },
            DEBUG: {
                searchExp: "-min\\.js",
                replaceStr: "-debug.js"
            },
            COVERAGE: {
                searchExp: "-min\\.js",
                replaceStr: "-coverage.js"
            }
        },
        _inspectPage: function() {
            var a, b, c, d, e, f = this;
            for (e in f.moduleInfo)
                f.moduleInfo.hasOwnProperty(e) && (a = f.moduleInfo[e],
                a.type && a.type === i && f.isCSSLoaded(a.name) && (f.loaded[e] = !0));
            for (e in v)
                v.hasOwnProperty(e) && (a = v[e],
                a.details && (b = f.moduleInfo[a.name],
                c = a.details.requires,
                d = b && b.requires,
                b ? !b._inspected && c && d.length !== c.length && delete b.expanded : b = f.addModule(a.details, e),
                b._inspected = !0))
        },
        _requires: function(a, b) {
            var c, d, e, f, g = this.moduleInfo, h = g[a], j = g[b];
            if (!h || !j)
                return !1;
            if (d = h.expanded_map,
            (e = h.after_map) && b in e)
                return !0;
            if ((e = j.after_map) && a in e)
                return !1;
            if (f = g[b] && g[b].supersedes)
                for (c = 0; c < f.length; c++)
                    if (this._requires(a, f[c]))
                        return !0;
            if (f = g[a] && g[a].supersedes)
                for (c = 0; c < f.length; c++)
                    if (this._requires(b, f[c]))
                        return !1;
            return !!(d && b in d) || !(!h.ext || h.type !== i || j.ext || j.type !== i)
        },
        _config: function(b) {
            var c, d, e, f, g, h, i, j, k = this, l = [];
            if (b)
                for (c in b)
                    if (b.hasOwnProperty(c))
                        if (e = b[c],
                        "require" === c)
                            k.require(e);
                        else if ("skin" === c)
                            "string" == typeof e && (k.skin.defaultSkin = b.skin,
                            e = {
                                defaultSkin: e
                            }),
                            a.mix(k.skin, e, !0);
                        else if ("groups" === c) {
                            for (d in e)
                                if (e.hasOwnProperty(d) && (i = d,
                                h = e[d],
                                k.addGroup(h, i),
                                h.aliases))
                                    for (f in h.aliases)
                                        h.aliases.hasOwnProperty(f) && k.addAlias(h.aliases[f], f)
                        } else if ("modules" === c)
                            for (d in e)
                                e.hasOwnProperty(d) && k.addModule(e[d], d);
                        else if ("aliases" === c)
                            for (d in e)
                                e.hasOwnProperty(d) && k.addAlias(e[d], d);
                        else
                            "gallery" === c ? this.groups.gallery.update && this.groups.gallery.update(e, b) : "yui2" === c || "2in3" === c ? this.groups.yui2.update && this.groups.yui2.update(b["2in3"], b.yui2, b) : k[c] = e;
            if (g = k.filter,
            u.isString(g) && (g = g.toUpperCase(),
            k.filterName = g,
            k.filter = k.FILTER_DEFS[g],
            "DEBUG" === g && k.require("yui-log", "dump")),
            k.filterName && k.coverage && "COVERAGE" === k.filterName && u.isArray(k.coverage) && k.coverage.length) {
                for (c = 0; c < k.coverage.length; c++)
                    j = k.coverage[c],
                    k.moduleInfo[j] && k.moduleInfo[j].use ? l = [].concat(l, k.moduleInfo[j].use) : l.push(j);
                k.filters = k.filters || {},
                a.Array.each(l, function(a) {
                    k.filters[a] = k.FILTER_DEFS.COVERAGE
                }),
                k.filterName = "RAW",
                k.filter = k.FILTER_DEFS[k.filterName]
            }
        },
        formatSkin: function(a, b) {
            var c = t + a;
            return b && (c = c + "-" + b),
            c
        },
        _addSkin: function(a, b, c) {
            var d, e, f, g, h = this.moduleInfo, i = this.skin, j = h[b] && h[b].ext;
            return b && (f = this.formatSkin(a, b),
            h[f] || (d = h[b],
            e = d.pkg || b,
            g = {
                skin: !0,
                name: f,
                group: d.group,
                type: "css",
                after: i.after,
                path: (c || e) + "/" + i.base + a + "/" + b + ".css",
                ext: j
            },
            d.base && (g.base = d.base),
            d.configFn && (g.configFn = d.configFn),
            this.addModule(g, f))),
            f
        },
        addAlias: function(a, b) {
            YUI.Env.aliases[b] = a,
            this.addModule({
                name: b,
                use: a
            })
        },
        addGroup: function(a, b) {
            var c, d, e = a.modules, f = this;
            if (b = b || a.name,
            a.name = b,
            f.groups[b] = a,
            a.patterns)
                for (c in a.patterns)
                    a.patterns.hasOwnProperty(c) && (a.patterns[c].group = b,
                    f.patterns[c] = a.patterns[c]);
            if (e)
                for (c in e)
                    e.hasOwnProperty(c) && (d = e[c],
                    "string" == typeof d && (d = {
                        name: c,
                        fullpath: d
                    }),
                    d.group = b,
                    f.addModule(d, c))
        },
        addModule: function(b, c) {
            c = c || b.name,
            "string" == typeof b && (b = {
                name: c,
                fullpath: b
            });
            var d, e, f, h, k, l, m, o, p, r, s, t, u, v, x, y, z, A, B, C, D, E, F = this.conditions;
            if (this.moduleInfo[c] && this.moduleInfo[c].temp && (b = a.merge(this.moduleInfo[c], b)),
            b.name = c,
            !b || !b.name)
                return null;
            if (b.type || (b.type = j,
            (D = b.path || b.fullpath) && this.REGEX_CSS.test(D) && (b.type = i)),
            !b.path && !b.fullpath && (b.path = w(c, c, b.type)),
            b.supersedes = b.supersedes || b.use,
            b.ext = "ext"in b ? b.ext : !this._internal,
            d = b.submodules,
            this.moduleInfo[c] = b,
            b.requires = b.requires || [],
            this.requires)
                for (e = 0; e < this.requires.length; e++)
                    b.requires.push(this.requires[e]);
            if (b.group && this.groups && this.groups[b.group] && (C = this.groups[b.group],
            C.requires))
                for (e = 0; e < C.requires.length; e++)
                    b.requires.push(C.requires[e]);
            if (b.defaults || (b.defaults = {
                requires: b.requires ? [].concat(b.requires) : null,
                supersedes: b.supersedes ? [].concat(b.supersedes) : null,
                optional: b.optional ? [].concat(b.optional) : null
            }),
            b.skinnable && b.ext && b.temp && (A = this._addSkin(this.skin.defaultSkin, c),
            b.requires.unshift(A)),
            b.requires.length && (b.requires = this.filterRequires(b.requires) || []),
            !b.langPack && b.lang)
                for (s = q(b.lang),
                r = 0; r < s.length; r++)
                    y = s[r],
                    t = this.getLangPackName(y, c),
                    (m = this.moduleInfo[t]) || (m = this._addLangPack(y, b, t));
            if (d) {
                k = b.supersedes || [],
                f = 0;
                for (e in d)
                    if (d.hasOwnProperty(e)) {
                        if (l = d[e],
                        l.path = l.path || w(c, e, b.type),
                        l.pkg = c,
                        l.group = b.group,
                        l.supersedes && (k = k.concat(l.supersedes)),
                        m = this.addModule(l, e),
                        k.push(e),
                        m.skinnable) {
                            if (b.skinnable = !0,
                            (z = this.skin.overrides) && z[e])
                                for (r = 0; r < z[e].length; r++)
                                    A = this._addSkin(z[e][r], e, c),
                                    k.push(A);
                            A = this._addSkin(this.skin.defaultSkin, e, c),
                            k.push(A)
                        }
                        if (l.lang && l.lang.length)
                            for (s = q(l.lang),
                            r = 0; r < s.length; r++)
                                y = s[r],
                                t = this.getLangPackName(y, c),
                                u = this.getLangPackName(y, e),
                                m = this.moduleInfo[t],
                                m || (m = this._addLangPack(y, b, t)),
                                v = v || q.hash(m.supersedes),
                                u in v || m.supersedes.push(u),
                                b.lang = b.lang || [],
                                x = x || q.hash(b.lang),
                                y in x || b.lang.push(y),
                                t = this.getLangPackName(n, c),
                                u = this.getLangPackName(n, e),
                                m = this.moduleInfo[t],
                                m || (m = this._addLangPack(y, b, t)),
                                u in v || m.supersedes.push(u);
                        f++
                    }
                b.supersedes = q.dedupe(k),
                this.allowRollup && (b.rollup = f < 4 ? f : Math.min(f - 1, 4))
            }
            if (o = b.plugins)
                for (e in o)
                    o.hasOwnProperty(e) && (p = o[e],
                    p.pkg = c,
                    p.path = p.path || w(c, e, b.type),
                    p.requires = p.requires || [],
                    p.group = b.group,
                    this.addModule(p, e),
                    b.skinnable && this._addSkin(this.skin.defaultSkin, e, c));
            if (b.condition)
                for (h = b.condition.trigger,
                YUI.Env.aliases[h] && (h = YUI.Env.aliases[h]),
                a.Lang.isArray(h) || (h = [h]),
                e = 0; e < h.length; e++)
                    E = h[e],
                    B = b.condition.when,
                    F[E] = F[E] || {},
                    F[E][c] = b.condition,
                    B && "after" !== B ? "instead" === B && (b.supersedes = b.supersedes || [],
                    b.supersedes.push(E)) : (b.after = b.after || [],
                    b.after.push(E));
            return b.supersedes && (b.supersedes = this.filterRequires(b.supersedes)),
            b.after && (b.after = this.filterRequires(b.after),
            b.after_map = q.hash(b.after)),
            b.configFn && !1 === b.configFn(b) && (delete this.moduleInfo[c],
            delete g._renderedMods[c],
            b = null),
            b && (g._renderedMods || (g._renderedMods = {}),
            g._renderedMods[c] = a.mix(g._renderedMods[c] || {}, b),
            g._conditions = F),
            b
        },
        require: function(b) {
            var c = "string" == typeof b ? q(arguments) : b;
            this.dirty = !0,
            this.required = a.merge(this.required, q.hash(this.filterRequires(c))),
            this._explodeRollups()
        },
        _explodeRollups: function() {
            var a, b, c, d, e, f, g, h = this, i = h.required;
            if (!h.allowRollup) {
                for (c in i)
                    if (i.hasOwnProperty(c) && (a = h.getModule(c)) && a.use)
                        for (f = a.use.length,
                        d = 0; d < f; d++)
                            if ((b = h.getModule(a.use[d])) && b.use)
                                for (g = b.use.length,
                                e = 0; e < g; e++)
                                    i[b.use[e]] = !0;
                            else
                                i[a.use[d]] = !0;
                h.required = i
            }
        },
        filterRequires: function(b) {
            if (b) {
                a.Lang.isArray(b) || (b = [b]),
                b = a.Array(b);
                var c, d, e, f, g = [];
                for (c = 0; c < b.length; c++)
                    if ((d = this.getModule(b[c])) && d.use)
                        for (e = 0; e < d.use.length; e++)
                            f = this.getModule(d.use[e]),
                            f && f.use && f.name !== d.name ? g = a.Array.dedupe([].concat(g, this.filterRequires(f.use))) : g.push(d.use[e]);
                    else
                        g.push(b[c]);
                b = g
            }
            return b
        },
        getRequires: function(b) {
            if (!b)
                return e;
            if (b._parsed)
                return b.expanded || e;
            var c, d, f, g, h, i, j, l, m, r, s, t, u, w, x, y, z, A, B = this.testresults, C = b.name, D = v[C] && v[C].details, E = b.lang || b.intl, F = this.moduleInfo, G = a.Features && a.Features.tests.load;
            if (b.temp && D && (s = b,
            b = this.addModule(D, C),
            b.group = s.group,
            b.pkg = s.pkg,
            delete b.expanded),
            A = !!this.lang && b.langCache !== this.lang || b.skinCache !== this.skin.defaultSkin,
            b.expanded && !A)
                return b.expanded;
            for (l = [],
            z = {},
            r = this.filterRequires(b.requires),
            b.lang && (l.unshift("intl"),
            r.unshift("intl"),
            E = !0),
            t = this.filterRequires(b.optional),
            b._parsed = !0,
            b.langCache = this.lang,
            b.skinCache = this.skin.defaultSkin,
            c = 0; c < r.length; c++)
                if (!z[r[c]] && (l.push(r[c]),
                z[r[c]] = !0,
                d = this.getModule(r[c]),
                d)) {
                    g = this.getRequires(d),
                    E = E || d.expanded_map && k in d.expanded_map;
                    for (f = 0; f < g.length; f++)
                        l.push(g[f])
                }
            if (r = this.filterRequires(b.supersedes))
                for (c = 0; c < r.length; c++)
                    if (!z[r[c]] && (b.submodules && l.push(r[c]),
                    z[r[c]] = !0,
                    d = this.getModule(r[c]),
                    d)) {
                        g = this.getRequires(d),
                        E = E || d.expanded_map && k in d.expanded_map;
                        for (f = 0; f < g.length; f++)
                            l.push(g[f])
                    }
            if (t && this.loadOptional)
                for (c = 0; c < t.length; c++)
                    if (!z[t[c]] && (l.push(t[c]),
                    z[t[c]] = !0,
                    d = F[t[c]],
                    d)) {
                        g = this.getRequires(d),
                        E = E || d.expanded_map && k in d.expanded_map;
                        for (f = 0; f < g.length; f++)
                            l.push(g[f])
                    }
            if (j = this.conditions[C])
                if (b._parsed = !1,
                B && G)
                    p(B, function(a, b) {
                        var c = G[b].name;
                        !z[c] && G[b].trigger === C && a && G[b] && (z[c] = !0,
                        l.push(c))
                    });
                else
                    for (c in j)
                        if (j.hasOwnProperty(c) && !z[c] && (m = j[c],
                        m && (!m.ua && !m.test || m.ua && a.UA[m.ua] || m.test && m.test(a, r)) && (z[c] = !0,
                        l.push(c),
                        d = this.getModule(c),
                        d)))
                            for (g = this.getRequires(d),
                            f = 0; f < g.length; f++)
                                l.push(g[f]);
            if (b.skinnable) {
                w = this.skin.overrides;
                for (c in YUI.Env.aliases)
                    YUI.Env.aliases.hasOwnProperty(c) && a.Array.indexOf(YUI.Env.aliases[c], C) > -1 && (x = c);
                if (w && (w[C] || x && w[x]))
                    for (y = C,
                    w[x] && (y = x),
                    c = 0; c < w[y].length; c++)
                        u = this._addSkin(w[y][c], C),
                        this.isCSSLoaded(u, this._boot) || l.push(u);
                else
                    u = this._addSkin(this.skin.defaultSkin, C),
                    this.isCSSLoaded(u, this._boot) || l.push(u)
            }
            return b._parsed = !1,
            E && (b.lang && !b.langPack && a.Intl && (i = a.Intl.lookupBestLang(this.lang || n, b.lang),
            (h = this.getLangPackName(i, C)) && l.unshift(h)),
            l.unshift(k)),
            b.expanded_map = q.hash(l),
            b.expanded = o.keys(b.expanded_map),
            b.expanded
        },
        isCSSLoaded: function(b, c) {
            if (!b || !YUI.Env.cssStampEl || !c && this.ignoreRegistered)
                return !1;
            var d = YUI.Env.cssStampEl
              , e = !1
              , f = YUI.Env._cssLoaded[b]
              , g = d.currentStyle;
            return void 0 !== f ? f : (d.className = b,
            g || (g = a.config.doc.defaultView.getComputedStyle(d, null)),
            g && "none" === g.display && (e = !0),
            d.className = "",
            YUI.Env._cssLoaded[b] = e,
            e)
        },
        getProvides: function(b) {
            var c, e, f = this.getModule(b);
            return f ? (f && !f.provides && (c = {},
            e = f.supersedes,
            e && q.each(e, function(b) {
                a.mix(c, this.getProvides(b))
            }, this),
            c[b] = !0,
            f.provides = c),
            f.provides) : d
        },
        calculate: function(a, b) {
            (a || b || this.dirty) && (a && this._config(a),
            this._init || this._setup(),
            this._explode(),
            this.allowRollup ? this._rollup() : this._explodeRollups(),
            this._reduce(),
            this._sort())
        },
        _addLangPack: function(b, c, d) {
            var e, f, g = c.name;
            return this.moduleInfo[d] || (e = w(c.pkg || g, d, j, !0),
            f = {
                path: e,
                intl: !0,
                langPack: !0,
                ext: c.ext,
                group: c.group,
                supersedes: []
            },
            c.root && (f.root = c.root),
            c.base && (f.base = c.base),
            c.configFn && (f.configFn = c.configFn),
            this.addModule(f, d),
            b && (a.Env.lang = a.Env.lang || {},
            a.Env.lang[b] = a.Env.lang[b] || {},
            a.Env.lang[b][g] = !0)),
            this.moduleInfo[d]
        },
        _setup: function() {
            var b, c, d, e, f, h, i = this.moduleInfo;
            for (b in i)
                i.hasOwnProperty(b) && (e = i[b]) && (e.requires = q.dedupe(e.requires),
                e.lang && (h = this.getLangPackName(n, b),
                this._addLangPack(null, e, h)));
            f = {},
            this.ignoreRegistered || a.mix(f, g.mods),
            this.ignore && a.mix(f, q.hash(this.ignore));
            for (d in f)
                f.hasOwnProperty(d) && a.mix(f, this.getProvides(d));
            if (this.force)
                for (c = 0; c < this.force.length; c++)
                    this.force[c]in f && delete f[this.force[c]];
            a.mix(this.loaded, f),
            this._init = !0
        },
        getLangPackName: function(a, b) {
            return "lang/" + b + (a ? "_" + a : "")
        },
        _explode: function() {
            var b, c, d, e, f = this.required, g = {}, h = this;
            h.dirty = !1,
            h._explodeRollups(),
            f = h.required;
            for (d in f)
                f.hasOwnProperty(d) && (g[d] || (g[d] = !0,
                (b = h.getModule(d)) && (e = b.expound,
                e && (f[e] = h.getModule(e),
                c = h.getRequires(f[e]),
                a.mix(f, q.hash(c))),
                c = h.getRequires(b),
                a.mix(f, q.hash(c)))))
        },
        _patternTest: function(a, b) {
            return a.indexOf(b) > -1
        },
        getModule: function(b) {
            if (!b)
                return null;
            var c, d, e, f = this.moduleInfo[b], g = this.patterns;
            if (!f || f && f.ext)
                for (e in g)
                    if (g.hasOwnProperty(e) && (c = g[e],
                    c.test || (c.test = this._patternTest),
                    c.test(b, e))) {
                        d = c;
                        break
                    }
            return f ? d && f && d.configFn && !f.configFn && (f.configFn = d.configFn,
            f.configFn(f)) : d && (c.action ? c.action.call(this, b, e) : (f = this.addModule(a.merge(d), b),
            d.configFn && (f.configFn = d.configFn),
            f.temp = !0)),
            f
        },
        _rollup: function() {},
        _reduce: function(a) {
            a = a || this.required;
            var b, c, d, e, f = this.loadType, g = !!this.ignore && q.hash(this.ignore);
            for (b in a)
                if (a.hasOwnProperty(b) && (e = this.getModule(b),
                ((this.loaded[b] || v[b]) && !this.forceMap[b] && !this.ignoreRegistered || f && e && e.type !== f) && delete a[b],
                g && g[b] && delete a[b],
                d = e && e.supersedes,
                d))
                    for (c = 0; c < d.length; c++)
                        d[c]in a && delete a[d[c]];
            return a
        },
        _finish: function(a, b) {
            r.running = !1;
            var c = this.onEnd;
            c && c.call(this.context, {
                msg: a,
                data: this.data,
                success: b
            }),
            this._continue()
        },
        _onSuccess: function() {
            var b, c, d, e, f, g = this, h = a.merge(g.skipped), i = [], k = g.requireRegistration;
            for (e in h)
                h.hasOwnProperty(e) && delete g.inserted[e];
            g.skipped = {};
            for (e in g.inserted)
                g.inserted.hasOwnProperty(e) && (f = g.getModule(e),
                !f || !k || f.type !== j || e in YUI.Env.mods ? a.mix(g.loaded, g.getProvides(e)) : i.push(e));
            b = g.onSuccess,
            d = i.length ? "notregistered" : "success",
            c = !i.length,
            b && b.call(g.context, {
                msg: d,
                data: g.data,
                success: c,
                failed: i,
                skipped: h
            }),
            g._finish(d, c)
        },
        _onProgress: function(a) {
            var b, c = this;
            if (a.data && a.data.length)
                for (b = 0; b < a.data.length; b++)
                    a.data[b] = c.getModule(a.data[b].name);
            c.onProgress && c.onProgress.call(c.context, {
                name: a.url,
                data: a.data
            })
        },
        _onFailure: function(a) {
            var b = this.onFailure
              , c = []
              , d = 0
              , e = a.errors.length;
            for (d; d < e; d++)
                c.push(a.errors[d].error);
            c = c.join(","),
            b && b.call(this.context, {
                msg: c,
                data: this.data,
                success: !1
            }),
            this._finish(c, !1)
        },
        _onTimeout: function(a) {
            var b = this.onTimeout;
            b && b.call(this.context, {
                msg: "timeout",
                data: this.data,
                success: !1,
                transaction: a
            })
        },
        _sort: function() {
            var a, b = this.required, c = {};
            this.sorted = [];
            for (a in b)
                !c[a] && b.hasOwnProperty(a) && this._visit(a, c)
        },
        _visit: function(a, b) {
            var c, d, e, f, g, h;
            if (b[a] = !0,
            c = this.required,
            d = this.moduleInfo[a],
            d)
                for (f = d.requires,
                g = 0,
                h = f.length; g < h; ++g)
                    e = f[g],
                    c[e] && !b[e] && this._visit(e, b);
            this.sorted.push(a)
        },
        _insert: function(b, c, d, e) {
            b && this._config(b);
            var f, g, h = this.resolve(!e), k = this, l = 0, m = 0, n = {};
            if (k._refetch = [],
            d && (h[d === j ? i : j] = []),
            k.fetchCSS || (h.css = []),
            h.js.length && l++,
            h.css.length && l++,
            g = function(b) {
                m++;
                var c, d, e, g = {}, h = 0, i = 0, j = "";
                if (b && b.errors)
                    for (h = 0; h < b.errors.length; h++)
                        j = b.errors[h].request ? b.errors[h].request.url : b.errors[h],
                        g[j] = j;
                if (b && b.data && b.data.length && "success" === b.type)
                    for (h = 0; h < b.data.length; h++)
                        k.inserted[b.data[h].name] = !0,
                        (b.data[h].lang || b.data[h].skinnable) && (delete k.inserted[b.data[h].name],
                        k._refetch.push(b.data[h].name));
                if (m === l) {
                    if (k._loading = null,
                    k._refetch.length) {
                        for (h = 0; h < k._refetch.length; h++)
                            for (f = k.getRequires(k.getModule(k._refetch[h])),
                            i = 0; i < f.length; i++)
                                k.inserted[f[i]] || (n[f[i]] = f[i]);
                        if (n = a.Object.keys(n),
                        n.length) {
                            if (k.require(n),
                            e = k.resolve(!0),
                            e.cssMods.length) {
                                for (h = 0; h < e.cssMods.length; h++)
                                    d = e.cssMods[h].name,
                                    delete YUI.Env._cssLoaded[d],
                                    k.isCSSLoaded(d) && (k.inserted[d] = !0,
                                    delete k.required[d]);
                                k.sorted = [],
                                k._sort()
                            }
                            b = null,
                            k._insert()
                        }
                    }
                    b && b.fn && (c = b.fn,
                    delete b.fn,
                    c.call(k, b))
                }
            }
            ,
            this._loading = !0,
            !h.js.length && !h.css.length)
                return m = -1,
                void g({
                    fn: k._onSuccess
                });
            h.css.length && a.Get.css(h.css, {
                data: h.cssMods,
                attributes: k.cssAttributes,
                insertBefore: k.insertBefore,
                charset: k.charset,
                timeout: k.timeout,
                context: k,
                onProgress: function(a) {
                    k._onProgress.call(k, a)
                },
                onTimeout: function(a) {
                    k._onTimeout.call(k, a)
                },
                onSuccess: function(a) {
                    a.type = "success",
                    a.fn = k._onSuccess,
                    g.call(k, a)
                },
                onFailure: function(a) {
                    a.type = "failure",
                    a.fn = k._onFailure,
                    g.call(k, a)
                }
            }),
            h.js.length && a.Get.js(h.js, {
                data: h.jsMods,
                insertBefore: k.insertBefore,
                attributes: k.jsAttributes,
                charset: k.charset,
                timeout: k.timeout,
                autopurge: !1,
                context: k,
                async: k.async,
                onProgress: function(a) {
                    k._onProgress.call(k, a)
                },
                onTimeout: function(a) {
                    k._onTimeout.call(k, a)
                },
                onSuccess: function(a) {
                    a.type = "success",
                    a.fn = k._onSuccess,
                    g.call(k, a)
                },
                onFailure: function(a) {
                    a.type = "failure",
                    a.fn = k._onFailure,
                    g.call(k, a)
                }
            })
        },
        _continue: function() {
            !r.running && r.size() > 0 && (r.running = !0,
            r.next()())
        },
        insert: function(b, c, d) {
            var e = this
              , f = a.merge(this);
            delete f.require,
            delete f.dirty,
            r.add(function() {
                e._insert(f, b, c, d)
            }),
            this._continue()
        },
        loadNext: function() {},
        _filter: function(a, b, c) {
            var d = this.filter
              , e = b && b in this.filters
              , f = e && this.filters[b]
              , g = c || (this.moduleInfo[b] ? this.moduleInfo[b].group : null);
            return g && this.groups[g] && this.groups[g].filter && (f = this.groups[g].filter,
            e = !0),
            a && (e && (d = u.isString(f) ? this.FILTER_DEFS[f.toUpperCase()] || null : f),
            d && (a = a.replace(new RegExp(d.searchExp,"g"), d.replaceStr))),
            a
        },
        _url: function(a, b, c) {
            return this._filter((c || this.base || "") + a, b)
        },
        resolve: function(a, b) {
            var c, e, g, h, k, m, n, o, p, q, r, s, t, v, w, x, y, z, A, B = [], C = {}, D = this, E = D.ignoreRegistered ? {} : D.inserted, F = {
                js: [],
                jsMods: [],
                css: [],
                cssMods: []
            }, G = D.loadType || "js";
            for ((D.skin.overrides || D.skin.defaultSkin !== l || D.ignoreRegistered) && D._resetModules(),
            a && D.calculate(),
            b = b || D.sorted,
            A = function(a) {
                a && (k = a.group && D.groups[a.group] || d,
                !1 === k.async && (a.async = k.async),
                h = a.fullpath ? D._filter(a.fullpath, b[e]) : D._url(a.path, b[e], k.base || a.base),
                (a.attributes || !1 === a.async) && (h = {
                    url: h,
                    async: a.async
                },
                a.attributes && (h.attributes = a.attributes)),
                F[a.type].push(h),
                F[a.type + "Mods"].push(a))
            }
            ,
            c = b.length,
            s = D.comboBase,
            h = s,
            q = {},
            e = 0; e < c; e++) {
                if (p = s,
                g = D.getModule(b[e]),
                m = g && g.group,
                k = D.groups[m],
                m && k) {
                    if (!k.combine || g.fullpath) {
                        A(g);
                        continue
                    }
                    g.combine = !0,
                    k.comboBase && (p = k.comboBase),
                    "root"in k && u.isValue(k.root) && (g.root = k.root),
                    g.comboSep = k.comboSep || D.comboSep,
                    g.maxURLLength = k.maxURLLength || D.maxURLLength
                } else if (!D.combine) {
                    A(g);
                    continue
                }
                q[p] = q[p] || [],
                q[p].push(g)
            }
            for (n in q)
                if (q.hasOwnProperty(n) && (C[n] = C[n] || {
                    js: [],
                    jsMods: [],
                    css: [],
                    cssMods: []
                },
                h = n,
                r = q[n],
                c = r.length,
                c))
                    for (e = 0; e < c; e++)
                        E[r[e]] || (g = r[e],
                        !g || !g.combine && g.ext ? r[e] && A(r[e]) : (C[n].comboSep = g.comboSep,
                        C[n].group = g.group,
                        C[n].maxURLLength = g.maxURLLength,
                        o = (u.isValue(g.root) ? g.root : D.root) + (g.path || g.fullpath),
                        o = D._filter(o, g.name),
                        C[n][g.type].push(o),
                        C[n][g.type + "Mods"].push(g)));
            for (n in C)
                if (C.hasOwnProperty(n)) {
                    t = n,
                    y = C[t].comboSep || D.comboSep,
                    z = C[t].maxURLLength || D.maxURLLength;
                    for (G in C[t])
                        if (G === j || G === i) {
                            if (v = C[t][G],
                            r = C[t][G + "Mods"],
                            c = v.length,
                            w = t + v.join(y),
                            x = w.length,
                            z <= t.length && (z = f),
                            c)
                                if (x > z) {
                                    for (B = [],
                                    b = 0; b < c; b++)
                                        B.push(v[b]),
                                        w = t + B.join(y),
                                        w.length > z && (g = B.pop(),
                                        w = t + B.join(y),
                                        F[G].push(D._filter(w, null, C[t].group)),
                                        B = [],
                                        g && B.push(g));
                                    B.length && (w = t + B.join(y),
                                    F[G].push(D._filter(w, null, C[t].group)))
                                } else
                                    F[G].push(D._filter(w, null, C[t].group));
                            F[G + "Mods"] = F[G + "Mods"].concat(r)
                        }
                }
            return C = null,
            F
        },
        load: function(a) {
            if (a) {
                var b = this
                  , c = b.resolve(!0);
                b.data = c,
                b.onEnd = function() {
                    a.apply(b.context || b, arguments)
                }
                ,
                b.insert()
            }
        }
    }
}, "3.15.0", {
    requires: ["get", "features"]
}),
YUI.add("loader-rollup", function(a, b) {
    a.Loader.prototype._rollup = function() {
        var a, b, c, d, e, f, g, h, i = this.required, j = this.moduleInfo;
        if (this.dirty || !this.rollups) {
            this.rollups = {};
            for (a in j)
                j.hasOwnProperty(a) && (c = this.getModule(a)) && c.rollup && (this.rollups[a] = c)
        }
        for (; ; ) {
            f = !1;
            for (a in this.rollups)
                if (this.rollups.hasOwnProperty(a) && !i[a] && (!this.loaded[a] || this.forceMap[a])) {
                    if (c = this.getModule(a),
                    d = c.supersedes || [],
                    e = !1,
                    !c.rollup)
                        continue;
                    for (g = 0,
                    b = 0; b < d.length; b++) {
                        if (h = j[d[b]],
                        this.loaded[d[b]] && !this.forceMap[d[b]]) {
                            e = !1;
                            break
                        }
                        if (i[d[b]] && c.type === h.type && (g++,
                        e = g >= c.rollup))
                            break
                    }
                    e && (i[a] = !0,
                    f = !0,
                    this.getRequires(c))
                }
            if (!f)
                break
        }
    }
}, "3.15.0", {
    requires: ["loader-base"]
}),
YUI.add("loader-yui3", function(a, b) {
    YUI.Env[a.version].modules = YUI.Env[a.version].modules || {},
    a.mix(YUI.Env[a.version].modules, {
        "align-plugin": {
            requires: ["node-screen", "node-pluginhost"]
        },
        anim: {
            use: ["anim-base", "anim-color", "anim-curve", "anim-easing", "anim-node-plugin", "anim-scroll", "anim-xy"]
        },
        "anim-base": {
            requires: ["base-base", "node-style"]
        },
        "anim-color": {
            requires: ["anim-base"]
        },
        "anim-curve": {
            requires: ["anim-xy"]
        },
        "anim-easing": {
            requires: ["anim-base"]
        },
        "anim-node-plugin": {
            requires: ["node-pluginhost", "anim-base"]
        },
        "anim-scroll": {
            requires: ["anim-base"]
        },
        "anim-shape": {
            requires: ["anim-base", "anim-easing", "anim-color", "matrix"]
        },
        "anim-shape-transform": {
            use: ["anim-shape"]
        },
        "anim-xy": {
            requires: ["anim-base", "node-screen"]
        },
        app: {
            use: ["app-base", "app-content", "app-transitions", "lazy-model-list", "model", "model-list", "model-sync-rest", "model-sync-local", "router", "view", "view-node-map"]
        },
        "app-base": {
            requires: ["classnamemanager", "pjax-base", "router", "view"]
        },
        "app-content": {
            requires: ["app-base", "pjax-content"]
        },
        "app-transitions": {
            requires: ["app-base"]
        },
        "app-transitions-css": {
            type: "css"
        },
        "app-transitions-native": {
            condition: {
                name: "app-transitions-native",
                test: function(a) {
                    var b = a.config.doc
                      , c = b ? b.documentElement : null;
                    return !(!c || !c.style) && ("MozTransition"in c.style || "WebkitTransition"in c.style || "transition"in c.style)
                },
                trigger: "app-transitions"
            },
            requires: ["app-transitions", "app-transitions-css", "parallel", "transition"]
        },
        "array-extras": {
            requires: ["yui-base"]
        },
        "array-invoke": {
            requires: ["yui-base"]
        },
        arraylist: {
            requires: ["yui-base"]
        },
        "arraylist-add": {
            requires: ["arraylist"]
        },
        "arraylist-filter": {
            requires: ["arraylist"]
        },
        arraysort: {
            requires: ["yui-base"]
        },
        "async-queue": {
            requires: ["event-custom"]
        },
        attribute: {
            use: ["attribute-base", "attribute-complex"]
        },
        "attribute-base": {
            requires: ["attribute-core", "attribute-observable", "attribute-extras"]
        },
        "attribute-complex": {
            requires: ["attribute-base"]
        },
        "attribute-core": {
            requires: ["oop"]
        },
        "attribute-events": {
            use: ["attribute-observable"]
        },
        "attribute-extras": {
            requires: ["oop"]
        },
        "attribute-observable": {
            requires: ["event-custom"]
        },
        autocomplete: {
            use: ["autocomplete-base", "autocomplete-sources", "autocomplete-list", "autocomplete-plugin"]
        },
        "autocomplete-base": {
            optional: ["autocomplete-sources"],
            requires: ["array-extras", "base-build", "escape", "event-valuechange", "node-base"]
        },
        "autocomplete-filters": {
            requires: ["array-extras", "text-wordbreak"]
        },
        "autocomplete-filters-accentfold": {
            requires: ["array-extras", "text-accentfold", "text-wordbreak"]
        },
        "autocomplete-highlighters": {
            requires: ["array-extras", "highlight-base"]
        },
        "autocomplete-highlighters-accentfold": {
            requires: ["array-extras", "highlight-accentfold"]
        },
        "autocomplete-list": {
            after: ["autocomplete-sources"],
            lang: ["en", "es", "hu", "it"],
            requires: ["autocomplete-base", "event-resize", "node-screen", "selector-css3", "shim-plugin", "widget", "widget-position", "widget-position-align"],
            skinnable: !0
        },
        "autocomplete-list-keys": {
            condition: {
                name: "autocomplete-list-keys",
                test: function(a) {
                    return !a.UA.ios && !a.UA.android
                },
                trigger: "autocomplete-list"
            },
            requires: ["autocomplete-list", "base-build"]
        },
        "autocomplete-plugin": {
            requires: ["autocomplete-list", "node-pluginhost"]
        },
        "autocomplete-sources": {
            optional: ["io-base", "json-parse", "jsonp", "yql"],
            requires: ["autocomplete-base"]
        },
        axes: {
            use: ["axis-numeric", "axis-category", "axis-time", "axis-stacked"]
        },
        "axes-base": {
            use: ["axis-numeric-base", "axis-category-base", "axis-time-base", "axis-stacked-base"]
        },
        axis: {
            requires: ["dom", "widget", "widget-position", "widget-stack", "graphics", "axis-base"]
        },
        "axis-base": {
            requires: ["classnamemanager", "datatype-number", "datatype-date", "base", "event-custom"]
        },
        "axis-category": {
            requires: ["axis", "axis-category-base"]
        },
        "axis-category-base": {
            requires: ["axis-base"]
        },
        "axis-numeric": {
            requires: ["axis", "axis-numeric-base"]
        },
        "axis-numeric-base": {
            requires: ["axis-base"]
        },
        "axis-stacked": {
            requires: ["axis-numeric", "axis-stacked-base"]
        },
        "axis-stacked-base": {
            requires: ["axis-numeric-base"]
        },
        "axis-time": {
            requires: ["axis", "axis-time-base"]
        },
        "axis-time-base": {
            requires: ["axis-base"]
        },
        base: {
            use: ["base-base", "base-pluginhost", "base-build"]
        },
        "base-base": {
            requires: ["attribute-base", "base-core", "base-observable"]
        },
        "base-build": {
            requires: ["base-base"]
        },
        "base-core": {
            requires: ["attribute-core"]
        },
        "base-observable": {
            requires: ["attribute-observable", "base-core"]
        },
        "base-pluginhost": {
            requires: ["base-base", "pluginhost"]
        },
        button: {
            requires: ["button-core", "cssbutton", "widget"]
        },
        "button-core": {
            requires: ["attribute-core", "classnamemanager", "node-base", "escape"]
        },
        "button-group": {
            requires: ["button-plugin", "cssbutton", "widget"]
        },
        "button-plugin": {
            requires: ["button-core", "cssbutton", "node-pluginhost"]
        },
        cache: {
            use: ["cache-base", "cache-offline", "cache-plugin"]
        },
        "cache-base": {
            requires: ["base"]
        },
        "cache-offline": {
            requires: ["cache-base", "json"]
        },
        "cache-plugin": {
            requires: ["plugin", "cache-base"]
        },
        calendar: {
            requires: ["calendar-base", "calendarnavigator"],
            skinnable: !0
        },
        "calendar-base": {
            lang: ["de", "en", "es", "es-AR", "fr", "hu", "it", "ja", "nb-NO", "nl", "pt-BR", "ru", "zh-Hans", "zh-Hans-CN", "zh-Hant", "zh-Hant-HK", "zh-HANT-TW"],
            requires: ["widget", "datatype-date", "datatype-date-math", "cssgrids"],
            skinnable: !0
        },
        calendarnavigator: {
            requires: ["plugin", "classnamemanager", "datatype-date", "node"],
            skinnable: !0
        },
        charts: {
            use: ["charts-base"]
        },
        "charts-base": {
            requires: ["dom", "event-mouseenter", "event-touch", "graphics-group", "axes", "series-pie", "series-line", "series-marker", "series-area", "series-spline", "series-column", "series-bar", "series-areaspline", "series-combo", "series-combospline", "series-line-stacked", "series-marker-stacked", "series-area-stacked", "series-spline-stacked", "series-column-stacked", "series-bar-stacked", "series-areaspline-stacked", "series-combo-stacked", "series-combospline-stacked"]
        },
        "charts-legend": {
            requires: ["charts-base"]
        },
        classnamemanager: {
            requires: ["yui-base"]
        },
        "clickable-rail": {
            requires: ["slider-base"]
        },
        collection: {
            use: ["array-extras", "arraylist", "arraylist-add", "arraylist-filter", "array-invoke"]
        },
        color: {
            use: ["color-base", "color-hsl", "color-harmony"]
        },
        "color-base": {
            requires: ["yui-base"]
        },
        "color-harmony": {
            requires: ["color-hsl"]
        },
        "color-hsl": {
            requires: ["color-base"]
        },
        "color-hsv": {
            requires: ["color-base"]
        },
        console: {
            lang: ["en", "es", "hu", "it", "ja"],
            requires: ["yui-log", "widget"],
            skinnable: !0
        },
        "console-filters": {
            requires: ["plugin", "console"],
            skinnable: !0
        },
        "content-editable": {
            requires: ["node-base", "editor-selection", "stylesheet", "plugin"]
        },
        controller: {
            use: ["router"]
        },
        cookie: {
            requires: ["yui-base"]
        },
        "createlink-base": {
            requires: ["editor-base"]
        },
        cssbase: {
            after: ["cssreset", "cssfonts", "cssgrids", "cssreset-context", "cssfonts-context", "cssgrids-context"],
            type: "css"
        },
        "cssbase-context": {
            after: ["cssreset", "cssfonts", "cssgrids", "cssreset-context", "cssfonts-context", "cssgrids-context"],
            type: "css"
        },
        cssbutton: {
            type: "css"
        },
        cssfonts: {
            type: "css"
        },
        "cssfonts-context": {
            type: "css"
        },
        cssgrids: {
            optional: ["cssnormalize"],
            type: "css"
        },
        "cssgrids-base": {
            optional: ["cssnormalize"],
            type: "css"
        },
        "cssgrids-responsive": {
            optional: ["cssnormalize"],
            requires: ["cssgrids", "cssgrids-responsive-base"],
            type: "css"
        },
        "cssgrids-units": {
            optional: ["cssnormalize"],
            requires: ["cssgrids-base"],
            type: "css"
        },
        cssnormalize: {
            type: "css"
        },
        "cssnormalize-context": {
            type: "css"
        },
        cssreset: {
            type: "css"
        },
        "cssreset-context": {
            type: "css"
        },
        dataschema: {
            use: ["dataschema-base", "dataschema-json", "dataschema-xml", "dataschema-array", "dataschema-text"]
        },
        "dataschema-array": {
            requires: ["dataschema-base"]
        },
        "dataschema-base": {
            requires: ["base"]
        },
        "dataschema-json": {
            requires: ["dataschema-base", "json"]
        },
        "dataschema-text": {
            requires: ["dataschema-base"]
        },
        "dataschema-xml": {
            requires: ["dataschema-base"]
        },
        datasource: {
            use: ["datasource-local", "datasource-io", "datasource-get", "datasource-function", "datasource-cache", "datasource-jsonschema", "datasource-xmlschema", "datasource-arrayschema", "datasource-textschema", "datasource-polling"]
        },
        "datasource-arrayschema": {
            requires: ["datasource-local", "plugin", "dataschema-array"]
        },
        "datasource-cache": {
            requires: ["datasource-local", "plugin", "cache-base"]
        },
        "datasource-function": {
            requires: ["datasource-local"]
        },
        "datasource-get": {
            requires: ["datasource-local", "get"]
        },
        "datasource-io": {
            requires: ["datasource-local", "io-base"]
        },
        "datasource-jsonschema": {
            requires: ["datasource-local", "plugin", "dataschema-json"]
        },
        "datasource-local": {
            requires: ["base"]
        },
        "datasource-polling": {
            requires: ["datasource-local"]
        },
        "datasource-textschema": {
            requires: ["datasource-local", "plugin", "dataschema-text"]
        },
        "datasource-xmlschema": {
            requires: ["datasource-local", "plugin", "datatype-xml", "dataschema-xml"]
        },
        datatable: {
            use: ["datatable-core", "datatable-table", "datatable-head", "datatable-body", "datatable-base", "datatable-column-widths", "datatable-message", "datatable-mutable", "datatable-sort", "datatable-datasource"]
        },
        "datatable-base": {
            requires: ["datatable-core", "datatable-table", "datatable-head", "datatable-body", "base-build", "widget"],
            skinnable: !0
        },
        "datatable-body": {
            requires: ["datatable-core", "view", "classnamemanager"]
        },
        "datatable-column-widths": {
            requires: ["datatable-base"]
        },
        "datatable-core": {
            requires: ["escape", "model-list", "node-event-delegate"]
        },
        "datatable-datasource": {
            requires: ["datatable-base", "plugin", "datasource-local"]
        },
        "datatable-foot": {
            requires: ["datatable-core", "view"]
        },
        "datatable-formatters": {
            requires: ["datatable-body", "datatype-number-format", "datatype-date-format", "escape"]
        },
        "datatable-head": {
            requires: ["datatable-core", "view", "classnamemanager"]
        },
        "datatable-highlight": {
            requires: ["datatable-base", "event-hover"],
            skinnable: !0
        },
        "datatable-keynav": {
            requires: ["datatable-base"]
        },
        "datatable-message": {
            lang: ["en", "fr", "es", "hu", "it"],
            requires: ["datatable-base"],
            skinnable: !0
        },
        "datatable-mutable": {
            requires: ["datatable-base"]
        },
        "datatable-paginator": {
            lang: ["en", "fr"],
            requires: ["model", "view", "paginator-core", "datatable-foot", "datatable-paginator-templates"],
            skinnable: !0
        },
        "datatable-paginator-templates": {
            requires: ["template"]
        },
        "datatable-scroll": {
            requires: ["datatable-base", "datatable-column-widths", "dom-screen"],
            skinnable: !0
        },
        "datatable-sort": {
            lang: ["en", "fr", "es", "hu"],
            requires: ["datatable-base"],
            skinnable: !0
        },
        "datatable-table": {
            requires: ["datatable-core", "datatable-head", "datatable-body", "view", "classnamemanager"]
        },
        datatype: {
            use: ["datatype-date", "datatype-number", "datatype-xml"]
        },
        "datatype-date": {
            use: ["datatype-date-parse", "datatype-date-format", "datatype-date-math"]
        },
        "datatype-date-format": {
            lang: ["ar", "ar-JO", "ca", "ca-ES", "da", "da-DK", "de", "de-AT", "de-DE", "el", "el-GR", "en", "en-AU", "en-CA", "en-GB", "en-IE", "en-IN", "en-JO", "en-MY", "en-NZ", "en-PH", "en-SG", "en-US", "es", "es-AR", "es-BO", "es-CL", "es-CO", "es-EC", "es-ES", "es-MX", "es-PE", "es-PY", "es-US", "es-UY", "es-VE", "fi", "fi-FI", "fr", "fr-BE", "fr-CA", "fr-FR", "hi", "hi-IN", "hu", "id", "id-ID", "it", "it-IT", "ja", "ja-JP", "ko", "ko-KR", "ms", "ms-MY", "nb", "nb-NO", "nl", "nl-BE", "nl-NL", "pl", "pl-PL", "pt", "pt-BR", "ro", "ro-RO", "ru", "ru-RU", "sv", "sv-SE", "th", "th-TH", "tr", "tr-TR", "vi", "vi-VN", "zh-Hans", "zh-Hans-CN", "zh-Hant", "zh-Hant-HK", "zh-Hant-TW"]
        },
        "datatype-date-math": {
            requires: ["yui-base"]
        },
        "datatype-date-parse": {},
        "datatype-number": {
            use: ["datatype-number-parse", "datatype-number-format"]
        },
        "datatype-number-format": {},
        "datatype-number-parse": {
            requires: ["escape"]
        },
        "datatype-xml": {
            use: ["datatype-xml-parse", "datatype-xml-format"]
        },
        "datatype-xml-format": {},
        "datatype-xml-parse": {},
        dd: {
            use: ["dd-ddm-base", "dd-ddm", "dd-ddm-drop", "dd-drag", "dd-proxy", "dd-constrain", "dd-drop", "dd-scroll", "dd-delegate"]
        },
        "dd-constrain": {
            requires: ["dd-drag"]
        },
        "dd-ddm": {
            requires: ["dd-ddm-base", "event-resize"]
        },
        "dd-ddm-base": {
            requires: ["node", "base", "yui-throttle", "classnamemanager"]
        },
        "dd-ddm-drop": {
            requires: ["dd-ddm"]
        },
        "dd-delegate": {
            requires: ["dd-drag", "dd-drop-plugin", "event-mouseenter"]
        },
        "dd-drag": {
            requires: ["dd-ddm-base"]
        },
        "dd-drop": {
            requires: ["dd-drag", "dd-ddm-drop"]
        },
        "dd-drop-plugin": {
            requires: ["dd-drop"]
        },
        "dd-gestures": {
            condition: {
                name: "dd-gestures",
                trigger: "dd-drag",
                ua: "touchEnabled"
            },
            requires: ["dd-drag", "event-synthetic", "event-gestures"]
        },
        "dd-plugin": {
            optional: ["dd-constrain", "dd-proxy"],
            requires: ["dd-drag"]
        },
        "dd-proxy": {
            requires: ["dd-drag"]
        },
        "dd-scroll": {
            requires: ["dd-drag"]
        },
        dial: {
            lang: ["en", "es", "hu"],
            requires: ["widget", "dd-drag", "event-mouseenter", "event-move", "event-key", "transition", "intl"],
            skinnable: !0
        },
        dom: {
            use: ["dom-base", "dom-screen", "dom-style", "selector-native", "selector"]
        },
        "dom-base": {
            requires: ["dom-core"]
        },
        "dom-core": {
            requires: ["oop", "features"]
        },
        "dom-screen": {
            requires: ["dom-base", "dom-style"]
        },
        "dom-style": {
            requires: ["dom-base", "color-base"]
        },
        "dom-style-ie": {
            condition: {
                name: "dom-style-ie",
                test: function(a) {
                    var b = a.Features.test
                      , c = a.Features.add
                      , d = a.config.win
                      , e = a.config.doc;
                    return c("style", "computedStyle", {
                        test: function() {
                            return d && "getComputedStyle"in d
                        }
                    }),
                    c("style", "opacity", {
                        test: function() {
                            return e && "opacity"in e.documentElement.style
                        }
                    }),
                    !b("style", "opacity") && !b("style", "computedStyle")
                },
                trigger: "dom-style"
            },
            requires: ["dom-style"]
        },
        dump: {
            requires: ["yui-base"]
        },
        editor: {
            use: ["frame", "editor-selection", "exec-command", "editor-base", "editor-para", "editor-br", "editor-bidi", "editor-tab", "createlink-base"]
        },
        "editor-base": {
            requires: ["base", "frame", "node", "exec-command", "editor-selection"]
        },
        "editor-bidi": {
            requires: ["editor-base"]
        },
        "editor-br": {
            requires: ["editor-base"]
        },
        "editor-inline": {
            requires: ["editor-base", "content-editable"]
        },
        "editor-lists": {
            requires: ["editor-base"]
        },
        "editor-para": {
            requires: ["editor-para-base"]
        },
        "editor-para-base": {
            requires: ["editor-base"]
        },
        "editor-para-ie": {
            condition: {
                name: "editor-para-ie",
                trigger: "editor-para",
                ua: "ie",
                when: "instead"
            },
            requires: ["editor-para-base"]
        },
        "editor-selection": {
            requires: ["node"]
        },
        "editor-tab": {
            requires: ["editor-base"]
        },
        escape: {
            requires: ["yui-base"]
        },
        event: {
            after: ["node-base"],
            use: ["event-base", "event-delegate", "event-synthetic", "event-mousewheel", "event-mouseenter", "event-key", "event-focus", "event-resize", "event-hover", "event-outside", "event-touch", "event-move", "event-flick", "event-valuechange", "event-tap"]
        },
        "event-base": {
            after: ["node-base"],
            requires: ["event-custom-base"]
        },
        "event-base-ie": {
            after: ["event-base"],
            condition: {
                name: "event-base-ie",
                test: function(a) {
                    var b = a.config.doc && a.config.doc.implementation;
                    return b && !b.hasFeature("Events", "2.0")
                },
                trigger: "node-base"
            },
            requires: ["node-base"]
        },
        "event-contextmenu": {
            requires: ["event-synthetic", "dom-screen"]
        },
        "event-custom": {
            use: ["event-custom-base", "event-custom-complex"]
        },
        "event-custom-base": {
            requires: ["oop"]
        },
        "event-custom-complex": {
            requires: ["event-custom-base"]
        },
        "event-delegate": {
            requires: ["node-base"]
        },
        "event-flick": {
            requires: ["node-base", "event-touch", "event-synthetic"]
        },
        "event-focus": {
            requires: ["event-synthetic"]
        },
        "event-gestures": {
            use: ["event-flick", "event-move"]
        },
        "event-hover": {
            requires: ["event-mouseenter"]
        },
        "event-key": {
            requires: ["event-synthetic"]
        },
        "event-mouseenter": {
            requires: ["event-synthetic"]
        },
        "event-mousewheel": {
            requires: ["node-base"]
        },
        "event-move": {
            requires: ["node-base", "event-touch", "event-synthetic"]
        },
        "event-outside": {
            requires: ["event-synthetic"]
        },
        "event-resize": {
            requires: ["node-base", "event-synthetic"]
        },
        "event-simulate": {
            requires: ["event-base"]
        },
        "event-synthetic": {
            requires: ["node-base", "event-custom-complex"]
        },
        "event-tap": {
            requires: ["node-base", "event-base", "event-touch", "event-synthetic"]
        },
        "event-touch": {
            requires: ["node-base"]
        },
        "event-valuechange": {
            requires: ["event-focus", "event-synthetic"]
        },
        "exec-command": {
            requires: ["frame"]
        },
        features: {
            requires: ["yui-base"]
        },
        file: {
            requires: ["file-flash", "file-html5"]
        },
        "file-flash": {
            requires: ["base"]
        },
        "file-html5": {
            requires: ["base"]
        },
        frame: {
            requires: ["base", "node", "plugin", "selector-css3", "yui-throttle"]
        },
        "gesture-simulate": {
            requires: ["async-queue", "event-simulate", "node-screen"]
        },
        get: {
            requires: ["yui-base"]
        },
        graphics: {
            requires: ["node", "event-custom", "pluginhost", "matrix", "classnamemanager"]
        },
        "graphics-canvas": {
            condition: {
                name: "graphics-canvas",
                test: function(a) {
                    var b = a.config.doc
                      , c = a.config.defaultGraphicEngine && "canvas" == a.config.defaultGraphicEngine
                      , d = b && b.createElement("canvas");
                    return (!(b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) || c) && d && d.getContext && d.getContext("2d")
                },
                trigger: "graphics"
            },
            requires: ["graphics"]
        },
        "graphics-canvas-default": {
            condition: {
                name: "graphics-canvas-default",
                test: function(a) {
                    var b = a.config.doc
                      , c = a.config.defaultGraphicEngine && "canvas" == a.config.defaultGraphicEngine
                      , d = b && b.createElement("canvas");
                    return (!(b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) || c) && d && d.getContext && d.getContext("2d")
                },
                trigger: "graphics"
            }
        },
        "graphics-group": {
            requires: ["graphics"]
        },
        "graphics-svg": {
            condition: {
                name: "graphics-svg",
                test: function(a) {
                    var b = a.config.doc
                      , c = !a.config.defaultGraphicEngine || "canvas" != a.config.defaultGraphicEngine
                      , d = b && b.createElement("canvas");
                    return b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (c || !d)
                },
                trigger: "graphics"
            },
            requires: ["graphics"]
        },
        "graphics-svg-default": {
            condition: {
                name: "graphics-svg-default",
                test: function(a) {
                    var b = a.config.doc
                      , c = !a.config.defaultGraphicEngine || "canvas" != a.config.defaultGraphicEngine
                      , d = b && b.createElement("canvas");
                    return b && b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (c || !d)
                },
                trigger: "graphics"
            }
        },
        "graphics-vml": {
            condition: {
                name: "graphics-vml",
                test: function(a) {
                    var b = a.config.doc
                      , c = b && b.createElement("canvas");
                    return b && !b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!c || !c.getContext || !c.getContext("2d"))
                },
                trigger: "graphics"
            },
            requires: ["graphics"]
        },
        "graphics-vml-default": {
            condition: {
                name: "graphics-vml-default",
                test: function(a) {
                    var b = a.config.doc
                      , c = b && b.createElement("canvas");
                    return b && !b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!c || !c.getContext || !c.getContext("2d"))
                },
                trigger: "graphics"
            }
        },
        handlebars: {
            use: ["handlebars-compiler"]
        },
        "handlebars-base": {
            requires: []
        },
        "handlebars-compiler": {
            requires: ["handlebars-base"]
        },
        highlight: {
            use: ["highlight-base", "highlight-accentfold"]
        },
        "highlight-accentfold": {
            requires: ["highlight-base", "text-accentfold"]
        },
        "highlight-base": {
            requires: ["array-extras", "classnamemanager", "escape", "text-wordbreak"]
        },
        history: {
            use: ["history-base", "history-hash", "history-html5"]
        },
        "history-base": {
            requires: ["event-custom-complex"]
        },
        "history-hash": {
            after: ["history-html5"],
            requires: ["event-synthetic", "history-base", "yui-later"]
        },
        "history-hash-ie": {
            condition: {
                name: "history-hash-ie",
                test: function(a) {
                    var b = a.config.doc && a.config.doc.documentMode;
                    return a.UA.ie && (!("onhashchange"in a.config.win) || !b || b < 8)
                },
                trigger: "history-hash"
            },
            requires: ["history-hash", "node-base"]
        },
        "history-html5": {
            optional: ["json"],
            requires: ["event-base", "history-base", "node-base"]
        },
        imageloader: {
            requires: ["base-base", "node-style", "node-screen"]
        },
        intl: {
            requires: ["intl-base", "event-custom"]
        },
        "intl-base": {
            requires: ["yui-base"]
        },
        io: {
            use: ["io-base", "io-xdr", "io-form", "io-upload-iframe", "io-queue"]
        },
        "io-base": {
            requires: ["event-custom-base", "querystring-stringify-simple"]
        },
        "io-form": {
            requires: ["io-base", "node-base"]
        },
        "io-nodejs": {
            condition: {
                name: "io-nodejs",
                trigger: "io-base",
                ua: "nodejs"
            },
            requires: ["io-base"]
        },
        "io-queue": {
            requires: ["io-base", "queue-promote"]
        },
        "io-upload-iframe": {
            requires: ["io-base", "node-base"]
        },
        "io-xdr": {
            requires: ["io-base", "datatype-xml-parse"]
        },
        json: {
            use: ["json-parse", "json-stringify"]
        },
        "json-parse": {
            requires: ["yui-base"]
        },
        "json-parse-shim": {
            condition: {
                name: "json-parse-shim",
                test: function(a) {
                    function b(a, b) {
                        return "ok" === a || b
                    }
                    var c = a.config.global.JSON
                      , d = "[object JSON]" === Object.prototype.toString.call(c) && c
                      , e = !1 !== a.config.useNativeJSONParse && !!d;
                    if (e)
                        try {
                            e = d.parse('{"ok":false}', b).ok
                        } catch (a) {
                            e = !1
                        }
                    return !e
                },
                trigger: "json-parse"
            },
            requires: ["json-parse"]
        },
        "json-stringify": {
            requires: ["yui-base"]
        },
        "json-stringify-shim": {
            condition: {
                name: "json-stringify-shim",
                test: function(a) {
                    var b = a.config.global.JSON
                      , c = "[object JSON]" === Object.prototype.toString.call(b) && b
                      , d = !1 !== a.config.useNativeJSONStringify && !!c;
                    if (d)
                        try {
                            d = "0" === c.stringify(0)
                        } catch (a) {
                            d = !1
                        }
                    return !d
                },
                trigger: "json-stringify"
            },
            requires: ["json-stringify"]
        },
        jsonp: {
            requires: ["get", "oop"]
        },
        "jsonp-url": {
            requires: ["jsonp"]
        },
        "lazy-model-list": {
            requires: ["model-list"]
        },
        loader: {
            use: ["loader-base", "loader-rollup", "loader-yui3"]
        },
        "loader-base": {
            requires: ["get", "features"]
        },
        "loader-rollup": {
            requires: ["loader-base"]
        },
        "loader-yui3": {
            requires: ["loader-base"]
        },
        matrix: {
            requires: ["yui-base"]
        },
        model: {
            requires: ["base-build", "escape", "json-parse"]
        },
        "model-list": {
            requires: ["array-extras", "array-invoke", "arraylist", "base-build", "escape", "json-parse", "model"]
        },
        "model-sync-local": {
            requires: ["model", "json-stringify"]
        },
        "model-sync-rest": {
            requires: ["model", "io-base", "json-stringify"]
        },
        node: {
            use: ["node-base", "node-event-delegate", "node-pluginhost", "node-screen", "node-style"]
        },
        "node-base": {
            requires: ["event-base", "node-core", "dom-base", "dom-style"]
        },
        "node-core": {
            requires: ["dom-core", "selector"]
        },
        "node-event-delegate": {
            requires: ["node-base", "event-delegate"]
        },
        "node-event-html5": {
            requires: ["node-base"]
        },
        "node-event-simulate": {
            requires: ["node-base", "event-simulate", "gesture-simulate"]
        },
        "node-flick": {
            requires: ["classnamemanager", "transition", "event-flick", "plugin"],
            skinnable: !0
        },
        "node-focusmanager": {
            requires: ["attribute", "node", "plugin", "node-event-simulate", "event-key", "event-focus"]
        },
        "node-load": {
            requires: ["node-base", "io-base"]
        },
        "node-menunav": {
            requires: ["node", "classnamemanager", "plugin", "node-focusmanager"],
            skinnable: !0
        },
        "node-pluginhost": {
            requires: ["node-base", "pluginhost"]
        },
        "node-screen": {
            requires: ["dom-screen", "node-base"]
        },
        "node-scroll-info": {
            requires: ["array-extras", "base-build", "event-resize", "node-pluginhost", "plugin", "selector"]
        },
        "node-style": {
            requires: ["dom-style", "node-base"]
        },
        oop: {
            requires: ["yui-base"]
        },
        overlay: {
            requires: ["widget", "widget-stdmod", "widget-position", "widget-position-align", "widget-stack", "widget-position-constrain"],
            skinnable: !0
        },
        paginator: {
            requires: ["paginator-core"]
        },
        "paginator-core": {
            requires: ["base"]
        },
        "paginator-url": {
            requires: ["paginator"]
        },
        panel: {
            requires: ["widget", "widget-autohide", "widget-buttons", "widget-modality", "widget-position", "widget-position-align", "widget-position-constrain", "widget-stack", "widget-stdmod"],
            skinnable: !0
        },
        parallel: {
            requires: ["yui-base"]
        },
        pjax: {
            requires: ["pjax-base", "pjax-content"]
        },
        "pjax-base": {
            requires: ["classnamemanager", "node-event-delegate", "router"]
        },
        "pjax-content": {
            requires: ["io-base", "node-base", "router"]
        },
        "pjax-plugin": {
            requires: ["node-pluginhost", "pjax", "plugin"]
        },
        plugin: {
            requires: ["base-base"]
        },
        pluginhost: {
            use: ["pluginhost-base", "pluginhost-config"]
        },
        "pluginhost-base": {
            requires: ["yui-base"]
        },
        "pluginhost-config": {
            requires: ["pluginhost-base"]
        },
        promise: {
            requires: ["timers"]
        },
        querystring: {
            use: ["querystring-parse", "querystring-stringify"]
        },
        "querystring-parse": {
            requires: ["yui-base", "array-extras"]
        },
        "querystring-parse-simple": {
            requires: ["yui-base"]
        },
        "querystring-stringify": {
            requires: ["yui-base"]
        },
        "querystring-stringify-simple": {
            requires: ["yui-base"]
        },
        "queue-promote": {
            requires: ["yui-base"]
        },
        "range-slider": {
            requires: ["slider-base", "slider-value-range", "clickable-rail"]
        },
        recordset: {
            use: ["recordset-base", "recordset-sort", "recordset-filter", "recordset-indexer"]
        },
        "recordset-base": {
            requires: ["base", "arraylist"]
        },
        "recordset-filter": {
            requires: ["recordset-base", "array-extras", "plugin"]
        },
        "recordset-indexer": {
            requires: ["recordset-base", "plugin"]
        },
        "recordset-sort": {
            requires: ["arraysort", "recordset-base", "plugin"]
        },
        resize: {
            use: ["resize-base", "resize-proxy", "resize-constrain"]
        },
        "resize-base": {
            requires: ["base", "widget", "event", "oop", "dd-drag", "dd-delegate", "dd-drop"],
            skinnable: !0
        },
        "resize-constrain": {
            requires: ["plugin", "resize-base"]
        },
        "resize-plugin": {
            optional: ["resize-constrain"],
            requires: ["resize-base", "plugin"]
        },
        "resize-proxy": {
            requires: ["plugin", "resize-base"]
        },
        router: {
            optional: ["querystring-parse"],
            requires: ["array-extras", "base-build", "history"]
        },
        scrollview: {
            requires: ["scrollview-base", "scrollview-scrollbars"]
        },
        "scrollview-base": {
            requires: ["widget", "event-gestures", "event-mousewheel", "transition"],
            skinnable: !0
        },
        "scrollview-base-ie": {
            condition: {
                name: "scrollview-base-ie",
                trigger: "scrollview-base",
                ua: "ie"
            },
            requires: ["scrollview-base"]
        },
        "scrollview-list": {
            requires: ["plugin", "classnamemanager"],
            skinnable: !0
        },
        "scrollview-paginator": {
            requires: ["plugin", "classnamemanager"]
        },
        "scrollview-scrollbars": {
            requires: ["classnamemanager", "transition", "plugin"],
            skinnable: !0
        },
        selector: {
            requires: ["selector-native"]
        },
        "selector-css2": {
            condition: {
                name: "selector-css2",
                test: function(a) {
                    var b = a.config.doc;
                    return b && !("querySelectorAll"in b)
                },
                trigger: "selector"
            },
            requires: ["selector-native"]
        },
        "selector-css3": {
            requires: ["selector-native", "selector-css2"]
        },
        "selector-native": {
            requires: ["dom-base"]
        },
        "series-area": {
            requires: ["series-cartesian", "series-fill-util"]
        },
        "series-area-stacked": {
            requires: ["series-stacked", "series-area"]
        },
        "series-areaspline": {
            requires: ["series-area", "series-curve-util"]
        },
        "series-areaspline-stacked": {
            requires: ["series-stacked", "series-areaspline"]
        },
        "series-bar": {
            requires: ["series-marker", "series-histogram-base"]
        },
        "series-bar-stacked": {
            requires: ["series-stacked", "series-bar"]
        },
        "series-base": {
            requires: ["graphics", "axis-base"]
        },
        "series-candlestick": {
            requires: ["series-range"]
        },
        "series-cartesian": {
            requires: ["series-base"]
        },
        "series-column": {
            requires: ["series-marker", "series-histogram-base"]
        },
        "series-column-stacked": {
            requires: ["series-stacked", "series-column"]
        },
        "series-combo": {
            requires: ["series-cartesian", "series-line-util", "series-plot-util", "series-fill-util"]
        },
        "series-combo-stacked": {
            requires: ["series-stacked", "series-combo"]
        },
        "series-combospline": {
            requires: ["series-combo", "series-curve-util"]
        },
        "series-combospline-stacked": {
            requires: ["series-combo-stacked", "series-curve-util"]
        },
        "series-curve-util": {},
        "series-fill-util": {},
        "series-histogram-base": {
            requires: ["series-cartesian", "series-plot-util"]
        },
        "series-line": {
            requires: ["series-cartesian", "series-line-util"]
        },
        "series-line-stacked": {
            requires: ["series-stacked", "series-line"]
        },
        "series-line-util": {},
        "series-marker": {
            requires: ["series-cartesian", "series-plot-util"]
        },
        "series-marker-stacked": {
            requires: ["series-stacked", "series-marker"]
        },
        "series-ohlc": {
            requires: ["series-range"]
        },
        "series-pie": {
            requires: ["series-base", "series-plot-util"]
        },
        "series-plot-util": {},
        "series-range": {
            requires: ["series-cartesian"]
        },
        "series-spline": {
            requires: ["series-line", "series-curve-util"]
        },
        "series-spline-stacked": {
            requires: ["series-stacked", "series-spline"]
        },
        "series-stacked": {
            requires: ["axis-stacked"]
        },
        "shim-plugin": {
            requires: ["node-style", "node-pluginhost"]
        },
        slider: {
            use: ["slider-base", "slider-value-range", "clickable-rail", "range-slider"]
        },
        "slider-base": {
            requires: ["widget", "dd-constrain", "event-key"],
            skinnable: !0
        },
        "slider-value-range": {
            requires: ["slider-base"]
        },
        sortable: {
            requires: ["dd-delegate", "dd-drop-plugin", "dd-proxy"]
        },
        "sortable-scroll": {
            requires: ["dd-scroll", "sortable"]
        },
        stylesheet: {
            requires: ["yui-base"]
        },
        substitute: {
            optional: ["dump"],
            requires: ["yui-base"]
        },
        swf: {
            requires: ["event-custom", "node", "swfdetect", "escape"]
        },
        swfdetect: {
            requires: ["yui-base"]
        },
        tabview: {
            requires: ["widget", "widget-parent", "widget-child", "tabview-base", "node-pluginhost", "node-focusmanager"],
            skinnable: !0
        },
        "tabview-base": {
            requires: ["node-event-delegate", "classnamemanager"]
        },
        "tabview-plugin": {
            requires: ["tabview-base"]
        },
        template: {
            use: ["template-base", "template-micro"]
        },
        "template-base": {
            requires: ["yui-base"]
        },
        "template-micro": {
            requires: ["escape"]
        },
        test: {
            requires: ["event-simulate", "event-custom", "json-stringify"]
        },
        "test-console": {
            requires: ["console-filters", "test", "array-extras"],
            skinnable: !0
        },
        text: {
            use: ["text-accentfold", "text-wordbreak"]
        },
        "text-accentfold": {
            requires: ["array-extras", "text-data-accentfold"]
        },
        "text-data-accentfold": {
            requires: ["yui-base"]
        },
        "text-data-wordbreak": {
            requires: ["yui-base"]
        },
        "text-wordbreak": {
            requires: ["array-extras", "text-data-wordbreak"]
        },
        timers: {
            requires: ["yui-base"]
        },
        transition: {
            requires: ["node-style"]
        },
        "transition-timer": {
            condition: {
                name: "transition-timer",
                test: function(a) {
                    var b = a.config.doc
                      , c = b ? b.documentElement : null
                      , d = !0;
                    return c && c.style && (d = !("MozTransition"in c.style || "WebkitTransition"in c.style || "transition"in c.style)),
                    d
                },
                trigger: "transition"
            },
            requires: ["transition"]
        },
        tree: {
            requires: ["base-build", "tree-node"]
        },
        "tree-labelable": {
            requires: ["tree"]
        },
        "tree-lazy": {
            requires: ["base-pluginhost", "plugin", "tree"]
        },
        "tree-node": {},
        "tree-openable": {
            requires: ["tree"]
        },
        "tree-selectable": {
            requires: ["tree"]
        },
        "tree-sortable": {
            requires: ["tree"]
        },
        uploader: {
            requires: ["uploader-html5", "uploader-flash"]
        },
        "uploader-flash": {
            requires: ["swfdetect", "escape", "widget", "base", "cssbutton", "node", "event-custom", "uploader-queue"]
        },
        "uploader-html5": {
            requires: ["widget", "node-event-simulate", "file-html5", "uploader-queue"]
        },
        "uploader-queue": {
            requires: ["base"]
        },
        view: {
            requires: ["base-build", "node-event-delegate"]
        },
        "view-node-map": {
            requires: ["view"]
        },
        widget: {
            use: ["widget-base", "widget-htmlparser", "widget-skin", "widget-uievents"]
        },
        "widget-anim": {
            requires: ["anim-base", "plugin", "widget"]
        },
        "widget-autohide": {
            requires: ["base-build", "event-key", "event-outside", "widget"]
        },
        "widget-base": {
            requires: ["attribute", "base-base", "base-pluginhost", "classnamemanager", "event-focus", "node-base", "node-style"],
            skinnable: !0
        },
        "widget-base-ie": {
            condition: {
                name: "widget-base-ie",
                trigger: "widget-base",
                ua: "ie"
            },
            requires: ["widget-base"]
        },
        "widget-buttons": {
            requires: ["button-plugin", "cssbutton", "widget-stdmod"]
        },
        "widget-child": {
            requires: ["base-build", "widget"]
        },
        "widget-htmlparser": {
            requires: ["widget-base"]
        },
        "widget-modality": {
            requires: ["base-build", "event-outside", "widget"],
            skinnable: !0
        },
        "widget-parent": {
            requires: ["arraylist", "base-build", "widget"]
        },
        "widget-position": {
            requires: ["base-build", "node-screen", "widget"]
        },
        "widget-position-align": {
            requires: ["widget-position"]
        },
        "widget-position-constrain": {
            requires: ["widget-position"]
        },
        "widget-skin": {
            requires: ["widget-base"]
        },
        "widget-stack": {
            requires: ["base-build", "widget"],
            skinnable: !0
        },
        "widget-stdmod": {
            requires: ["base-build", "widget"]
        },
        "widget-uievents": {
            requires: ["node-event-delegate", "widget-base"]
        },
        yql: {
            requires: ["oop"]
        },
        "yql-jsonp": {
            condition: {
                name: "yql-jsonp",
                test: function(a) {
                    return !a.UA.nodejs && !a.UA.winjs
                },
                trigger: "yql",
                when: "after"
            },
            requires: ["jsonp", "jsonp-url"]
        },
        "yql-nodejs": {
            condition: {
                name: "yql-nodejs",
                trigger: "yql",
                ua: "nodejs",
                when: "after"
            }
        },
        "yql-winjs": {
            condition: {
                name: "yql-winjs",
                trigger: "yql",
                ua: "winjs",
                when: "after"
            }
        },
        yui: {},
        "yui-base": {},
        "yui-later": {
            requires: ["yui-base"]
        },
        "yui-log": {
            requires: ["yui-base"]
        },
        "yui-throttle": {
            requires: ["yui-base"]
        }
    }),
    YUI.Env[a.version].md5 = "8e471689779fc84718f6dad481790b59"
}, "3.15.0", {
    requires: ["loader-base"]
}),
YUI.add("yui", function(a, b) {}, "3.15.0", {
    use: ["yui-base", "get", "features", "intl-base", "yui-log", "yui-later", "loader-base", "loader-rollup", "loader-yui3"]
}),
function(a) {
    "use strict";
    var b = a.YUI_config || {}
      , c = a.ABY_config = a.ABY_config || {}
      , d = "object" == typeof a.ABse && a.ABse.assetBaseUrl ? a.ABse.assetBaseUrl : ""
      , e = a.ABY = a.ABY || {};
    b.comboBase = d + "/yuicombo/" + ABse.resVer + "?",
    b.combine = !0,
    b.base = d + "/assets/js/yui/",
    b.root = "3.15.0/build/",
    b.groups = b.groups || {},
    b.skin = b.skin || {},
    c.comboBase = d + "/yuicombo/" + ABse.resVer + "?",
    c.combine = !0,
    c.base = d + "/assets/js/yui/",
    c.root = "",
    c.modules = {
        "ab-accordion": {
            use: ["ab-accordion-base", "ab-accordion-section"]
        },
        "ab-accordion-base": {
            requires: []
        },
        "ab-accordion-section": {
            requires: ["ab-accordion-base"]
        },
        "ab-carousel": {
            requires: ["widget", "anim", "substitute"],
            skinnable: !0
        },
        "ab-deferred": {
            requires: ["base"]
        },
        "ab-deferredload": {
            requires: ["base-build", "node", "json-parse", "array-invoke"]
        },
        "ab-eventthrottler": {
            requires: ["base", "event-base", "event-touch"]
        },
        "ab-expandable-area": {
            requires: ["base-build", "widget-base", "node-base", "array-invoke", "ab-transition"]
        },
        "ab-gallery": {
            requires: ["widget", "io", "json-parse", "node", "substitute", "event-base", "anim", "ab-share"],
            skinnable: !0
        },
        "ab-fashion-gallery": {
            requires: ["ab-gallery", "widget", "io", "json-parse", "node", "substitute", "event-base", "anim", "ab-share"],
            skinnable: !1
        },
        "ab-imageloader": {
            requires: ["base", "node", "dom", "ab-eventthrottler"]
        },
        "ab-listfoldout": {
            requires: ["base", "node", "event-delegate"]
        },
        "ab-menu": {
            use: ["ab-menu-base", "ab-menu-overlay", "ab-menu-foldout", "ab-menu-collection"]
        },
        "ab-menu-base": {
            requires: ["base", "node"]
        },
        "ab-menu-overlay": {
            requires: ["ab-menu-base", "overlay", "transition"]
        },
        "ab-menu-foldout": {
            requires: ["ab-menu-base", "transition"]
        },
        "ab-menu-collection": {
            requires: ["array-extras", "array-invoke"]
        },
        "ab-nodesizechange": {
            requires: ["attribute", "plugin", "node-base", "ab-eventthrottler"]
        },
        "ab-newsflash": {
            use: ["ab-newsflash-plugin", "ab-notifications"]
        },
        "ab-newsflash-plugin": {
            requires: ["ab-userdata-datasource", "ab-userdata-setting", "ab-notifications", "array-extras", "plugin"]
        },
        "ab-notifications": {
            use: ["ab-notifications-messenger", "ab-notifications-message", "ab-notifications-desktop", "ab-notifications-ui"]
        },
        "ab-notifications-messenger": {
            requires: ["base-build", "ab-notifications-message", "ab-notifications-desktop", "ab-notifications-ui", "cache-offline"]
        },
        "ab-notifications-message": {
            requires: ["base-build", "model"]
        },
        "ab-notifications-ui": {
            requires: ["base-build", "widget", "array-extras", "transition", "ab-plugin-sitecatalyst"],
            skinnable: !0
        },
        "ab-notifications-desktop": {
            requires: ["base-build", "array-extras", "ab-plugin-sitecatalyst"]
        },
        "ab-plugin-sitecatalyst": {
            requires: ["base-build", "plugin"]
        },
        "ab-plugin-mixpanel": {
            requires: ["base-build", "plugin"]
        },
        "ab-plusmenu-plugin": {
            requires: ["base-build", "ab-accordion", "plugin"]
        },
        "ab-pollable": {
            requires: ["oop"]
        },
        "ab-share": {
            requires: ["base", "plugin", "node", "event-base", "querystring", "fb-sdk"],
            skinnable: !0
        },
        "ab-sticky-v2": {
            requires: ["base-build", "node", "dom", "ab-eventthrottler"]
        },
        "ab-subscription": {
            use: ["ab-subscription-base", "ab-subscription-plugin", "ab-subscription-buttons", "ab-subscription-controller", "ab-plugin-sitecatalyst", "ab-plugin-mixpanel"]
        },
        "ab-subscription-base": {
            requires: ["base-build", "ab-userdata-setting", "array-extras"]
        },
        "ab-subscription-plugin": {
            requires: ["base-build", "ab-subscription-base", "ab-accordion", "ab-notifications", "arraysort"]
        },
        "ab-subscription-buttons": {
            requires: ["base-build", "node", "event"]
        },
        "ab-subscription-controller": {
            requires: ["base-build", "node", "anim"]
        },
        "ab-transition": {
            condition: {
                trigger: "transition",
                test: function() {
                    return !0
                }
            }
        },
        "ab-tooltip": {
            requires: ["event-mouseenter", "overlay"]
        },
        "ab-userdata": {
            use: ["ab-userdata-datasource", "ab-userdata-datasource-factory", "ab-userdata-setting"]
        },
        "ab-userdata-datasource": {
            requires: ["base-build", "ab-xdr-datasource"]
        },
        "ab-userdata-datasource-factory": {
            requires: ["base-build", "ab-userdata-datasource"]
        },
        "ab-userdata-setting": {
            requires: ["base-build", "ab-userdata-datasource-factory"]
        },
        "ab-uri": {
            requires: ["base"]
        },
        "ab-xiti": {
            requires: ["base", "array-extras", "ab-uri", "event-delegate"]
        },
        "ab-zmagviewer": {
            requires: ["widget", "node", "event-base"],
            skinnable: !0
        },
        "fb-sdk": {
            requires: ["base", "node", "substitute", "ab-deferred"]
        },
        "ab-xdr-datasource": {
            requires: ["base-build", "io-xdr", "cookie", "json-parse", "querystring-stringify", "ab-pollable"]
        },
        "ab-xdr-datasource-legacy": {
            condition: {
                name: "ab-xdr-datasource-legacy",
                trigger: "ab-xdr-datasource",
                when: "replace",
                test: function(a) {
                    return a.UA.ie && a.UA.ie <= 9
                }
            }
        },
        "ab-xdr-factory": {
            requires: ["base-build", "ab-xdr-datasource"]
        }
    },
    b.groups.ab = c,
    b.groups.jquery = {
        base: "http://ajax.googleapis.com/ajax/libs/",
        async: !1,
        modules: {
            jquery: {
                path: "jquery/1.7/jquery.min.js"
            },
            "jquery-ui": {
                path: "jqueryui/1.8/jquery-ui.min.js",
                requires: ["jquery", "jquery-ui-css"]
            },
            "jquery-ui-css": {
                path: "jqueryui/1.8/themes/base/jquery-ui.css",
                type: "css"
            }
        }
    },
    b.groups.libs = {
        base: d + "/dist/js/lib/",
        async: !1,
        modules: {
            "handlebars-runtime": {
                path: "handlebars.min.js?" + ABse.resVer
            }
        }
    },
    a.YUI_config = b,
    function() {
        a.Y = a.Y || YUI(),
        e = a.ABY = YUI()
    }(),
    e.use("ab-menu", "ab-imageloader", "ab-listfoldout", function(a) {})
}(window),
window.Modernizr = function(a, b, c) {
    function d(a) {
        r.cssText = a
    }
    function e(a, b) {
        return typeof a === b
    }
    function f(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function g(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!f(e, "-") && r[e] !== c)
                return "pfx" != b || e
        }
        return !1
    }
    function h(a, b, d) {
        for (var f in a) {
            var g = b[a[f]];
            if (g !== c)
                return !1 === d ? a[f] : e(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }
    function i(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , f = (a + " " + t.join(d + " ") + d).split(" ");
        return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + u.join(d + " ") + d).split(" "),
        h(f, b, c))
    }
    var j, k, l = "2.8.3", m = {}, n = !0, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style, s = ({}.toString,
    "Webkit Moz O ms"), t = s.split(" "), u = s.toLowerCase().split(" "), v = {}, w = [], x = w.slice, y = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
        if (parseInt(d, 10))
            for (; d--; )
                h = b.createElement("div"),
                h.id = e ? e[d] : p + (d + 1),
                j.appendChild(h);
        return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""),
        j.id = p,
        (k ? j : l).innerHTML += f,
        l.appendChild(j),
        k || (l.style.background = "",
        l.style.overflow = "hidden",
        i = o.style.overflow,
        o.style.overflow = "hidden",
        o.appendChild(l)),
        g = c(j, a),
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l),
        o.style.overflow = i),
        !!g
    }, z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b) && c(b).matches || !1;
        var d;
        return y("@media " + b + " { #" + p + " { position:absolute; } }", function(b) {
            d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
        }),
        d
    }, A = {}.hasOwnProperty;
    k = e(A, "undefined") || e(A.call, "undefined") ? function(a, b) {
        return b in a && e(a.constructor.prototype[b], "undefined")
    }
    : function(a, b) {
        return A.call(a, b)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b)
            throw new TypeError;
        var c = x.call(arguments, 1)
          , d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e
                  , g = b.apply(f, c.concat(x.call(arguments)));
                return Object(g) === g ? g : f
            }
            return b.apply(a, c.concat(x.call(arguments)))
        };
        return d
    }
    ),
    v.csstransforms = function() {
        return !!i("transform")
    }
    ,
    v.csstransitions = function() {
        return i("transition")
    }
    ;
    for (var B in v)
        k(v, B) && (j = B.toLowerCase(),
        m[j] = v[B](),
        w.push((m[j] ? "" : "no-") + j));
    return m.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a)
                k(a, d) && m.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(),
            m[a] !== c)
                return m;
            b = "function" == typeof b ? b() : b,
            void 0 !== n && n && (o.className += " " + (b ? "" : "no-") + a),
            m[a] = b
        }
        return m
    }
    ,
    d(""),
    q = null,
    m._version = l,
    m._domPrefixes = u,
    m._cssomPrefixes = t,
    m.mq = z,
    m.testProp = function(a) {
        return g([a])
    }
    ,
    m.testAllProps = i,
    m.testStyles = y,
    o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (n ? " js " + w.join(" ") : ""),
    m
}(this, this.document),
void 0 === ABse)
    var ABse = {};
if (void 0 === ABse.page && (ABse.page = {}),
ABse.addDocElementClass = function(a) {
    var b = document && document.documentElement
      , c = b && b.className;
    c && (c += " "),
    c += a,
    b.className = c
}
,
ABse.util = function() {
    var a = function(a, b) {
        var c = a.parentElement;
        c && b && "number" == typeof b.height && b.oldIframeHeight && c.style.height === b.oldIframeHeight && c.setAttribute("style", c.getAttribute("style") + ";height:" + b.height + "px")
    };
    return {
        adjustIframeHeight: function(b, c) {
            var d = b.frameElement
              , e = b.document.body
              , f = c || {};
            d && e && ("number" != typeof f.height && (f.height = parseInt(e.offsetHeight, 10)),
            f.oldIframeHeight = d.style.height,
            d.setAttribute("style", d.getAttribute("style") + ";height:" + f.height + "px"),
            !1 !== f.adjustContainerdiv && a(d, f))
        },
        v4Uuid: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : 3 & b | 8).toString(16)
            })
        },
        versionCompare: function() {
            function a(a, b, c) {
                var d, e = b.length - c.length, f = e < 0 ? c : b;
                if (0 !== e)
                    for (d = 0,
                    e = Math.abs(e); d < e; d++)
                        f.push(a)
            }
            return function(b, c) {
                var d, e, f = b.split("."), g = c.split(".");
                a(0, f, g);
                for (var h = 0, i = f.length; h < i; h++)
                    if (d = parseInt(f[h], 10),
                    e = parseInt(g[h], 10),
                    d !== e)
                        return d < e ? -1 : 1;
                return 0
            }
        }()
    }
}(),
function(a) {
    "use strict";
    void 0 === ABse.device && (ABse.device = {}),
    a.UA && (a.UA.ios || a.UA.android) ? (ABse.addDocElementClass("abHandheld"),
    ABse.device.isHandheld = !0) : ABse.device.isHandheld = !1
}(window.Y || window.YUI()),
ABse.device.localStorage = function(a) {
    "use strict";
    var b = !1
      , c = !1;
    try {
        var d = a.localStorage
          , e = "lsWritableTest";
        b = d && "function" == typeof d.getItem,
        d.setItem(e, e),
        d.removeItem(e),
        c = !0
    } catch (a) {}
    return {
        isReadable: b,
        isWriteable: c,
        exists: b && c
    }
}(window),
void 0 === se)
    var se = {};
void 0 === se.aftonbladet && (se.aftonbladet = {}),
se.aftonbladet.findElementPosition = function(a) {
    var b = 0
      , c = 0;
    if (a.offsetParent)
        do {
            b += a.offsetLeft,
            c += a.offsetTop
        } while (a = a.offsetParent);return [b, c]
}
,
se.aftonbladet.abRedirectFilter = {
    NO_REDIRECT_COOKIE_NAME: "nomobileredirect",
    DEFAULT_REDIRECT_URL: "http://mobil.aftonbladet.se/partner/wwwredirect",
    DEFAULT_BASE_URL: "http://mobil.aftonbladet.se",
    COOKIE_VALUE: "true",
    COOKIE_EXPIRE_DAYS: 1,
    checkAndRedirectIphoneClients: function() {
        this.isIphone(navigator.userAgent) && this.isCookiesEnabled() && this.shouldRedirectForUrl(location.pathname) && (this.hasIgnoreMobileRedirectCookie() || (this.handleIgnoreMobileRedirectParameter() ? this.createCookie(this.NO_REDIRECT_COOKIE_NAME, this.COOKIE_VALUE, this.COOKIE_EXPIRE_DAYS) : window.location = this.getRedirectUrl(location.href)))
    },
    isCookiesEnabled: function() {
        return navigator.cookieEnabled
    },
    isIphone: function(a) {
        return -1 != a.toLowerCase().indexOf("iphone") && -1 == a.toLowerCase().indexOf("ipad")
    },
    getRedirectUrl: function(a) {
        if (!a)
            return this.DEFAULT_REDIRECT_URL;
        a = -1 == a.indexOf("?") ? a + "?partner=wwwredirect" : a + "&partner=wwwredirect";
        var b = a.indexOf("/", 7);
        return -1 == b ? this.DEFAULT_REDIRECT_URL : this.DEFAULT_BASE_URL + a.substring(b)
    },
    hasIgnoreMobileRedirectCookie: function() {
        return this.getCookie(this.NO_REDIRECT_COOKIE_NAME) == this.COOKIE_VALUE
    },
    handleIgnoreMobileRedirectParameter: function() {
        var a = this.getParameter(this.NO_REDIRECT_COOKIE_NAME);
        return a && a == this.COOKIE_VALUE
    },
    shouldRedirectForUrl: function(a) {
        if (!a)
            return !1;
        var b = a.split("/");
        if (0 === b.length)
            return !0;
        var c = b[b.length - 1];
        if (-1 != c.indexOf(".") && ".ab" != c.match("\\.ab$") && 1 < b.length)
            return !1;
        if (1 < b.length) {
            if ("template" == b[1])
                return !1
        }
        return !0
    },
    getCookie: function(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d]; " " === e.charAt(0); )
                e = e.substring(1, e.length);
            if (0 === e.indexOf(b))
                return e.substring(b.length, e.length)
        }
        return 0
    },
    createCookie: function(a, b, c) {
        var d = "";
        if (c) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3),
            d = "; expires=" + e.toGMTString()
        }
        document.cookie = a + "=" + b + d + "; path=/"
    },
    getParameter: function(a) {
        var b = document.location.search
          , c = b.indexOf(a + "=");
        if (-1 == c)
            return !1;
        var d = b.substr(c + a.length + 1, b.length - c - a.length - 1);
        return c = d.indexOf("&"),
        -1 != c && (d = d.substr(0, c)),
        d.replace(/\+/g, " ")
    }
};
var windowOpen = abWindowOpen
  , AB_WindowOpen = abWindowOpen;
if (void 0 === deconcept)
    var deconcept = new Object;
void 0 === deconcept.util && (deconcept.util = new Object),
void 0 === deconcept.SWFObjectUtil && (deconcept.SWFObjectUtil = new Object),
deconcept.SWFObject = function(a, b, c, d, e, f, g, h, i, j) {
    if (document.getElementById) {
        this.DETECT_KEY = j || "detectflash",
        this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY),
        this.params = new Object,
        this.variables = new Object,
        this.attributes = new Array,
        a && this.setAttribute("swf", a),
        b && this.setAttribute("id", b),
        c && this.setAttribute("width", c),
        d && this.setAttribute("height", d),
        e && this.setAttribute("version", new deconcept.PlayerVersion(e.toString().split("."))),
        this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion(),
        !window.opera && document.all && this.installedVer.major > 7 && (deconcept.SWFObject.doPrepUnload = !0),
        f && this.addParam("bgcolor", f);
        var k = g || "high";
        this.addParam("quality", k),
        this.setAttribute("useExpressInstall", !1),
        this.setAttribute("doExpressInstall", !1);
        var l = h || window.location;
        this.setAttribute("xiRedirectUrl", l),
        this.setAttribute("redirectUrl", ""),
        i && this.setAttribute("redirectUrl", i)
    }
}
,
deconcept.SWFObject.prototype = {
    useExpressInstall: function(a) {
        this.xiSWFPath = a || "expressinstall.swf",
        this.setAttribute("useExpressInstall", !0)
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    getAttribute: function(a) {
        return this.attributes[a]
    },
    addParam: function(a, b) {
        this.params[a] = b
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(a, b) {
        this.variables[a] = b
    },
    getVariable: function(a) {
        return this.variables[a]
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var a, b = new Array, c = this.getVariables();
        for (a in c)
            b[b.length] = a + "=" + c[a];
        return b
    },
    getSWFHTML: function() {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "PlugIn"),
            this.setAttribute("swf", this.xiSWFPath)),
            a = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"',
            a += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var b = this.getParams();
            for (var c in b)
                a += [c] + '="' + b[c] + '" ';
            var d = this.getVariablePairs().join("&");
            d.length > 0 && (a += 'flashvars="' + d + '"'),
            a += "/>"
        } else {
            this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "ActiveX"),
            this.setAttribute("swf", this.xiSWFPath)),
            a = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">',
            a += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var e = this.getParams();
            for (var c in e)
                a += '<param name="' + c + '" value="' + e[c] + '" />';
            var f = this.getVariablePairs().join("&");
            f.length > 0 && (a += '<param name="flashvars" value="' + f + '" />'),
            a += "</object>"
        }
        return a
    },
    write: function(a) {
        if (this.getAttribute("useExpressInstall")) {
            var b = new deconcept.PlayerVersion([6, 0, 65]);
            this.installedVer.versionIsValid(b) && !this.installedVer.versionIsValid(this.getAttribute("version")) && (this.setAttribute("doExpressInstall", !0),
            this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl"))),
            document.title = document.title.slice(0, 47) + " - Flash Player Installation",
            this.addVariable("MMdoctitle", document.title))
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            return ("string" == typeof a ? document.getElementById(a) : a).innerHTML = this.getSWFHTML(),
            !0
        }
        return "" != this.getAttribute("redirectUrl") && document.location.replace(this.getAttribute("redirectUrl")),
        !1
    }
},
deconcept.SWFObjectUtil.getPlayerVersion = function() {
    var a = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var b = navigator.plugins["Shockwave Flash"];
        b && b.description && (a = new deconcept.PlayerVersion(b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")))
    } else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0)
        for (var c = 1, d = 3; c; )
            try {
                d++,
                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + d),
                a = new deconcept.PlayerVersion([d, 0, 0])
            } catch (a) {
                c = null
            }
    else {
        try {
            var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
        } catch (b) {
            try {
                var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                a = new deconcept.PlayerVersion([6, 0, 21]),
                c.AllowScriptAccess = "always"
            } catch (b) {
                if (6 == a.major)
                    return a
            }
            try {
                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (a) {}
        }
        null != c && (a = new deconcept.PlayerVersion(c.GetVariable("$version").split(" ")[1].split(",")))
    }
    return a
}
,
deconcept.PlayerVersion = function(a) {
    this.major = null != a[0] ? parseInt(a[0]) : 0,
    this.minor = null != a[1] ? parseInt(a[1]) : 0,
    this.rev = null != a[2] ? parseInt(a[2]) : 0
}
,
deconcept.PlayerVersion.prototype.versionIsValid = function(a) {
    return !(this.major < a.major) && (this.major > a.major || !(this.minor < a.minor) && (this.minor > a.minor || !(this.rev < a.rev)))
}
,
deconcept.util = {
    getRequestParameter: function(a) {
        var b = document.location.search || document.location.hash;
        if (null == a)
            return b;
        if (b)
            for (var c = b.substring(1).split("&"), d = 0; d < c.length; d++)
                if (c[d].substring(0, c[d].indexOf("=")) == a)
                    return c[d].substring(c[d].indexOf("=") + 1);
        return ""
    }
},
deconcept.SWFObjectUtil.cleanupSWFs = function() {
    for (var a = document.getElementsByTagName("OBJECT"), b = a.length - 1; b >= 0; b--) {
        a[b].style.display = "none";
        for (var c in a[b])
            "function" == typeof a[b][c] && (a[b][c] = function() {}
            )
    }
}
,
deconcept.SWFObject.doPrepUnload && (deconcept.unloadSet || (deconcept.SWFObjectUtil.prepUnload = function() {
    __flash_unloadHandler = function() {}
    ,
    __flash_savedUnloadHandler = function() {}
    ,
    window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
}
,
window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload),
deconcept.unloadSet = !0)),
!document.getElementById && document.all && (document.getElementById = function(a) {
    return document.all[a]
}
);
var getQueryParamValue = deconcept.util.getRequestParameter
  , FlashObject = deconcept.SWFObject
  , SWFObject = deconcept.SWFObject;
if (function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length
          , c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    function d(a, b, c) {
        if (ea.isFunction(b))
            return ea.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return ea.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (ma.test(b))
                return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function(a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }
    function e(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);return a
    }
    function f(a) {
        var b = ta[a] = {};
        return ea.each(a.match(sa) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1),
        a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h),
        a.detachEvent("onload", h))
    }
    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(),
        ea.ready())
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(ya, "-$1").toLowerCase();
            if ("string" == typeof (c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : xa.test(c) ? ea.parseJSON(c) : c)
                } catch (a) {}
                ea.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                return j || (j = h ? a[g] = W.pop() || ea.guid++ : g),
                i[j] || (i[j] = h ? {} : {
                    toJSON: ea.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)),
                f = i[j],
                d || (f.data || (f.data = {}),
                f = f.data),
                void 0 !== c && (f[ea.camelCase(b)] = c),
                "string" == typeof b ? null == (e = f[b]) && (e = f[ea.camelCase(b)]) : e = f,
                e
        }
    }
    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    for (; e--; )
                        delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    function m() {
        return !0
    }
    function n() {
        return !1
    }
    function o() {
        try {
            return oa.activeElement
        } catch (a) {}
    }
    function p(a) {
        var b = Ja.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function q(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== wa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== wa ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }
    function r(a) {
        Da.test(a.type) && (a.defaultChecked = a.checked)
    }
    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function u(a) {
        var b = Ua.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }
    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events)
                    ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text,
            u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Da.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(),
        f
    }
    function z(a) {
        var b = oa
          , c = $a[a];
        return c || (c = y(a, b),
        "none" !== c && c || (Za = (Za || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Za[0].contentWindow || Za[0].contentDocument).document,
        b.write(),
        b.close(),
        c = y(a, b),
        Za.detach()),
        $a[a] = c),
        c
    }
    function A(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function B(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = lb.length; e--; )
            if ((b = lb[e] + c)in a)
                return b;
        return d
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = ea._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && Ba(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ba(d),
            (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function D(a, b, c) {
        var d = hb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += ea.css(a, c + Aa[f], !0, e)),
            d ? ("content" === c && (g -= ea.css(a, "padding" + Aa[f], !0, e)),
            "margin" !== c && (g -= ea.css(a, "border" + Aa[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Aa[f], !0, e),
            "padding" !== c && (g += ea.css(a, "border" + Aa[f] + "Width", !0, e)));
        return g
    }
    function F(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = _a(a)
          , g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = ab(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            cb.test(e))
                return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a,b,c,d,e)
    }
    function H() {
        return setTimeout(function() {
            mb = void 0
        }),
        mb = ea.now()
    }
    function I(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = Aa[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function J(a, b, c) {
        for (var d, e = (sb[b] || []).concat(sb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function K(a, b, c) {
        var d, e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && Ba(a), o = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        k.always(function() {
            k.always(function() {
                h.unqueued--,
                ea.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY],
        j = ea.css(a, "display"),
        "inline" === ("none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j) && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")),
        c.overflow && (m.overflow = "hidvden",
        ca.shrinkWrapBlocks() || k.always(function() {
            m.overflow = c.overflow[0],
            m.overflowX = c.overflow[1],
            m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ob.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d])
                        continue;
                    n = !0
                }
                l[d] = o && o[d] || ea.style(a, d)
            } else
                j = void 0;
        if (ea.isEmptyObject(l))
            "inline" === ("none" === j ? z(a.nodeName) : j) && (m.display = j);
        else {
            o ? "hidden"in o && (n = o.hidden) : o = ea._data(a, "fxshow", {}),
            f && (o.hidden = !n),
            n ? ea(a).show() : k.done(function() {
                ea(a).hide()
            }),
            k.done(function() {
                var b;
                ea._removeData(a, "fxshow");
                for (b in l)
                    ea.style(a, b, l[b])
            });
            for (d in l)
                g = J(n ? o[d] : 0, d, k),
                d in o || (o[d] = g.start,
                n && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ea.camelCase(c),
            e = b[d],
            f = a[c],
            ea.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            (g = ea.cssHooks[d]) && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function M(a, b, c) {
        var d, e, f = 0, g = rb.length, h = ea.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = mb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: ea.extend({}, b),
            opts: ea.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: mb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++)
            if (d = rb[f].call(j, a, k, j.opts))
                return d;
        return ea.map(k, J, j),
        ea.isFunction(j.opts.start) && j.opts.start.call(a, j),
        ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(sa) || [];
            if (ea.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            ea.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === Qb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c),
        a
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (!(g = j[i + " " + f] || j["* " + f]))
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (!0 !== g)
                        if (g && a.throws)
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b))
            ea.each(b, function(b, e) {
                c || Tb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== ea.type(b))
            d(a, b);
        else
            for (e in b)
                S(a + "[" + e + "]", b[e], c, d)
    }
    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }
    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var W = []
      , X = W.slice
      , Y = W.concat
      , Z = W.push
      , $ = W.indexOf
      , _ = {}
      , aa = _.toString
      , ba = _.hasOwnProperty
      , ca = {}
      , da = "1.11.1"
      , ea = function(a, b) {
        return new ea.fn.init(a,b)
    }
      , fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ga = /^-ms-/
      , ha = /-([\da-z])/gi
      , ia = function(a, b) {
        return b.toUpperCase()
    };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return ea.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(ea.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    },
    ea.extend = ea.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || ea.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1,
                    f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {},
                    g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ea.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ea.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !ea.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a))
                return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (a) {
                return !1
            }
            if (ca.ownLast)
                for (b in a)
                    return ba.call(a, b);
            for (b in a)
                ;
            return void 0 === b || ba.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && ea.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(ga, "ms-").replace(ha, ia)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e = 0
              , f = a.length
              , g = c(a);
            if (d) {
                if (g)
                    for (; f > e && !1 !== b.apply(a[e], d); e++)
                        ;
                else
                    for (e in a)
                        if (!1 === b.apply(a[e], d))
                            break
            } else if (g)
                for (; f > e && !1 !== b.call(a[e], e, a[e]); e++)
                    ;
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e]))
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(fa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($)
                    return $.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; )
                a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d]; )
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; f > e; e++)
                !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    null != (e = b(a[f], f, d)) && i.push(e);
            else
                for (f in a)
                    null != (e = b(a[f], f, d)) && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b],
            b = a,
            a = e),
            ea.isFunction(a) ? (c = X.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || ea.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ca
    }),
    ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ja = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (I && !d) {
                if (e = sa.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (!(f = b.getElementById(g)) || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return _.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName)
                            return _.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                    o = b,
                    p = 9 === h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                        (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return _.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (a) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i),
                e)
                    for (j = q(t, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t),
                    f ? f(null, g, t, i) : _.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return ba.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }
            ]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Z.call(i));
                        r = q(r)
                    }
                    _.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, aa = Y.slice, ba = Y.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", da = "[\\x20\\t\\r\\n\\f]", ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fa = ea.replace("w", "w#"), ga = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fa + "))|)" + da + "*\\]", ha = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)", ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$","g"), ja = new RegExp("^" + da + "*," + da + "*"), ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"), la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]","g"), ma = new RegExp(ha), na = new RegExp("^" + fa + "$"), oa = {
            ID: new RegExp("^#(" + ea + ")"),
            CLASS: new RegExp("^\\.(" + ea + ")"),
            TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ga),
            PSEUDO: new RegExp("^" + ha),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ca + ")$","i"),
            needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)","i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)","ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            _.apply(Y = aa.call(O.childNodes), O.childNodes),
            Y[O.childNodes.length].nodeType
        } catch (a) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, aa.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }
        ,
        F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
            H = c.documentElement,
            I = !y(c),
            d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })),
            v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !c.getElementsByName || !c.getElementsByName(N).length
            }),
            v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (v.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"),
                a.querySelectorAll(":checked").length || J.push(":checked")
            }),
            e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", ha)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = ra.test(H.compareDocumentPosition),
            M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = b; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            c) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(la, "='$1']"),
            !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (a) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()]
              , d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates,
            D = !v.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }
        ,
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return (m -= e) === d || m % d == 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = ba.call(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(va, wa).toLowerCase(),
                    function(b) {
                        var c;
                        do {
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = ka.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }),
                h = h.slice(d.length));
                for (g in w.filter)
                    !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        ,
        A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [],
            1 === l.length) {
                if (f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (!(b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0]))
                        return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        !(a = d.length && m(f)))
                            return _.apply(c, d),
                            c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
            c
        }
        ,
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ca, function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    ea.find = ja,
    ea.expr = ja.selectors,
    ea.expr[":"] = ea.expr.pseudos,
    ea.unique = ja.uniqueSort,
    ea.text = ja.getText,
    ea.isXMLDoc = ja.isXML,
    ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext
      , la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ma = /^.[^:#\[\.,]*$/;
    ea.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    ea.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(ea(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
        }
    });
    var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ea.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (!(c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a)) || !c[1] && b)
                return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof ea ? b[0] : b,
                ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)),
                la.test(c[1]) && ea.isPlainObject(b))
                    for (c in b)
                        ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if ((d = oa.getElementById(c[2])) && d.parentNode) {
                if (d.id !== c[2])
                    return na.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = oa,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : ea.isFunction(a) ? void 0 !== na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        ea.makeArray(a, this))
    }
    ).prototype = ea.fn,
    na = ea(oa);
    var qa = /^(?:parents|prev(?:Until|All))/
      , ra = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ea.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c)); )
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    ea.fn.extend({
        has: function(a) {
            var b, c = ea(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ea.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ea.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    ea.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ea.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ea.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ea.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ea.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ea.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ea.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ea.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ea.sibling(a.firstChild)
        },
        contents: function(a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
        }
    }, function(a, b) {
        ea.fn[a] = function(c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = ea.filter(d, e)),
            this.length > 1 && (ra[a] || (e = ea.unique(e)),
            qa.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var sa = /\S+/g
      , ta = {};
    ea.Callbacks = function(a) {
        a = "string" == typeof a ? ta[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (c = a.memory && f,
            d = !0,
            g = h || 0,
            h = 0,
            e = i.length,
            b = !0; i && e > g; g++)
                if (!1 === i[g].apply(f[0], f[1]) && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var d = i.length;
                    !function b(c) {
                        ea.each(c, function(c, d) {
                            var e = ea.type(d);
                            "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                        })
                    }(arguments),
                    b ? e = i.length : c && (h = d,
                    k(c))
                }
                return this
            },
            remove: function() {
                return i && ea.each(arguments, function(a, c) {
                    for (var d; (d = ea.inArray(c, i, d)) > -1; )
                        i.splice(d, 1),
                        b && (e >= d && e--,
                        g >= d && g--)
                }),
                this
            },
            has: function(a) {
                return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                e = 0,
                this
            },
            disable: function() {
                return i = j = c = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                c || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, c) {
                return !i || d && !j || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? j.push(c) : k(c)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return l
    }
    ,
    ea.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", ea.Callbacks("once memory"), "resolved"], ["reject", "fail", ea.Callbacks("once memory"), "rejected"], ["notify", "progress", ea.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return ea.Deferred(function(c) {
                        ea.each(b, function(b, f) {
                            var g = ea.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? ea.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            ea.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? X.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var ua;
    ea.fn.ready = function(a) {
        return ea.ready.promise().done(a),
        this
    }
    ,
    ea.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ea.readyWait++ : ea.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body)
                    return setTimeout(ea.ready);
                ea.isReady = !0,
                !0 !== a && --ea.readyWait > 0 || (ua.resolveWith(oa, [ea]),
                ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"),
                ea(oa).off("ready")))
            }
        }
    }),
    ea.ready.promise = function(b) {
        if (!ua)
            if (ua = ea.Deferred(),
            "complete" === oa.readyState)
                setTimeout(ea.ready);
            else if (oa.addEventListener)
                oa.addEventListener("DOMContentLoaded", h, !1),
                a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h),
                a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && oa.documentElement
                } catch (a) {}
                c && c.doScroll && function a() {
                    if (!ea.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return setTimeout(a, 50)
                        }
                        g(),
                        ea.ready()
                    }
                }()
            }
        return ua.promise(b)
    }
    ;
    var va, wa = "undefined";
    for (va in ea(ca))
        break;
    ca.ownLast = "0" !== va,
    ca.inlineBlockNeedsLayout = !1,
    ea(function() {
        var a, b, c, d;
        (c = oa.getElementsByTagName("body")[0]) && c.style && (b = oa.createElement("div"),
        d = oa.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== wa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = oa.createElement("div");
        if (null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete a.test
            } catch (a) {
                ca.deleteExpando = !1
            }
        }
        a = null
    }(),
    ea.acceptData = function(a) {
        var b = ea.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
    }
    ;
    var xa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ya = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return !!(a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando]) && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }),
    ea.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f),
                1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)),
                        i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                ea.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                ea.data(this, a, b)
            }) : f ? i(f, a, ea.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                ea.removeData(this, a)
            })
        }
    }),
    ea.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = ea._data(a, b),
            c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ea.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = ea._queueHooks(a, b)
              , g = function() {
                ea.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function() {
                    ea._removeData(a, b + "queue"),
                    ea._removeData(a, c)
                })
            })
        }
    }),
    ea.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ea.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                (c = ea._data(f[g], a + "queueHooks")) && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var za = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Aa = ["Top", "Right", "Bottom", "Left"]
      , Ba = function(a, b) {
        return a = b || a,
        "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
    }
      , Ca = ea.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === ea.type(c)) {
            e = !0;
            for (h in c)
                ea.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        ea.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(ea(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Da = /^(?:checkbox|radio)$/i;
    !function() {
        var a = oa.createElement("input")
          , b = oa.createElement("div")
          , c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ca.leadingWhitespace = 3 === b.firstChild.nodeType,
        ca.tbody = !b.getElementsByTagName("tbody").length,
        ca.htmlSerialize = !!b.getElementsByTagName("link").length,
        ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        ca.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ca.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            ca.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (a) {
                ca.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = oa.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            ca[b + "Bubbles"] = !1 === d.attributes[c].expando);
        d = null
    }();
    var Ea = /^(?:input|select|textarea)$/i
      , Fa = /^key/
      , Ga = /^(?:mouse|pointer|contextmenu)|click/
      , Ha = /^(?:focusinfocus|focusoutblur)$/
      , Ia = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = ea.guid++),
                (g = q.events) || (g = q.events = {}),
                (k = q.handle) || (k = q.handle = function(a) {
                    return typeof ea === wa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(sa) || [""],
                h = b.length; h--; )
                    f = Ia.exec(b[h]) || [],
                    n = p = f[1],
                    o = (f[2] || "").split(".").sort(),
                    n && (j = ea.event.special[n] || {},
                    n = (e ? j.delegateType : j.bindType) || n,
                    j = ea.event.special[n] || {},
                    l = ea.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && ea.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i),
                    (m = g[n]) || (m = g[n] = [],
                    m.delegateCount = 0,
                    j.setup && !1 !== j.setup.call(a, d, o, k) || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(sa) || [""],
                j = b.length; j--; )
                    if (h = Ia.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = ea.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = k[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length; f--; )
                            g = m[f],
                            !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || ea.removeEvent(a, n, q.handle),
                        delete k[n])
                    } else
                        for (n in k)
                            ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle,
                ea._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa,
            3 !== d.nodeType && 8 !== d.nodeType && !Ha.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            g = n.indexOf(":") < 0 && "on" + n,
            b = b[ea.expando] ? b : new ea.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : ea.makeArray(c, [b]),
            j = ea.event.special[n] || {},
            e || !j.trigger || !1 !== j.trigger.apply(d, c))) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n,
                    Ha.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                        m.push(h),
                        k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                    b.type = l > 1 ? i : j.bindType || n,
                    f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"),
                    f && f.apply(h, c),
                    (f = g && h[g]) && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c),
                    !1 === b.result && b.preventDefault());
                if (b.type = n,
                !e && !b.isDefaultPrevented() && (!j._default || !1 === j._default.apply(m.pop(), c)) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g],
                    k && (d[g] = null),
                    ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (a) {}
                    ea.event.triggered = void 0,
                    k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [], j = ea.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || !1 !== j.preDispatch.call(this, a)) {
                for (g = ea.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d,
                        a.data = d.data,
                        void 0 !== (c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h)) && !1 === (a.result = c) && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[ea.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ga.test(e) ? this.mouseHooks : Fa.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new ea.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return ea.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === wa && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    ea.Event = function(a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? m : n) : this.type = a,
        b && ea.extend(this, b),
        this.timeStamp = a && a.timeStamp || ea.now(),
        void (this[ea.expando] = !0)) : new ea.Event(a,b)
    }
    ,
    ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        ea.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    ca.submitBubbles || (ea.event.special.submit = {
        setup: function() {
            return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                ea._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
        }
    }),
    ca.changeBubbles || (ea.event.special.change = {
        setup: function() {
            return Ea.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            ea.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                ea.event.simulate("change", this, a, !0)
            })),
            !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Ea.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }),
                ea._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ea.event.remove(this, "._change"),
            !Ea.test(this.nodeName)
        }
    }),
    ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = ea._data(d, b);
                e || d.addEventListener(a, c, !0),
                ea._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0),
                ea._removeData(d, b))
            }
        }
    }),
    ea.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            !1 === d)
                d = n;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return ea().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = ea.guid++)),
            this.each(function() {
                ea.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b,
            b = void 0),
            !1 === c && (c = n),
            this.each(function() {
                ea.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ea.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? ea.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ja = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Ka = / jQuery\d+="(?:null|\d+)"/g
      , La = new RegExp("<(?:" + Ja + ")[\\s/>]","i")
      , Ma = /^\s+/
      , Na = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Oa = /<([\w:]+)/
      , Pa = /<tbody/i
      , Qa = /<|&#?\w+;/
      , Ra = /<(?:script|style|link)/i
      , Sa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ta = /^$|\/(?:java|ecma)script/i
      , Ua = /^true\/(.*)/
      , Va = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Wa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Xa = p(oa)
      , Ya = Xa.appendChild(oa.createElement("div"));
    Wa.optgroup = Wa.option,
    Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead,
    Wa.th = Wa.td,
    ea.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !La.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ya.innerHTML = a.outerHTML,
            Ya.removeChild(f = Ya.firstChild)),
            !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                for (d = q(f),
                h = q(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a),
                    d = d || q(f),
                    g = 0; null != (e = h[g]); g++)
                        w(e, d[g]);
                else
                    w(a, f);
            return d = q(f, "script"),
            d.length > 0 && v(d, !i && q(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                if ((f = a[o]) || 0 === f)
                    if ("object" === ea.type(f))
                        ea.merge(n, f.nodeType ? [f] : f);
                    else if (Qa.test(f)) {
                        for (h = h || m.appendChild(b.createElement("div")),
                        i = (Oa.exec(f) || ["", ""])[1].toLowerCase(),
                        k = Wa[i] || Wa._default,
                        h.innerHTML = k[1] + f.replace(Na, "<$1></$2>") + k[2],
                        e = k[0]; e--; )
                            h = h.lastChild;
                        if (!ca.leadingWhitespace && Ma.test(f) && n.push(b.createTextNode(Ma.exec(f)[0])),
                        !ca.tbody)
                            for (f = "table" !== i || Pa.test(f) ? "<table>" !== k[1] || Pa.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length; e--; )
                                ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        for (ea.merge(n, h.childNodes),
                        h.textContent = ""; h.firstChild; )
                            h.removeChild(h.firstChild);
                        h = m.lastChild
                    } else
                        n.push(b.createTextNode(f));
            for (h && m.removeChild(h),
            ca.appendChecked || ea.grep(q(n, "input"), r),
            o = 0; f = n[o++]; )
                if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f),
                h = q(m.appendChild(f), "script"),
                g && v(h),
                c))
                    for (e = 0; f = h[e++]; )
                        Ta.test(f.type || "") && c.push(f);
            return h = null,
            m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                if ((b || ea.acceptData(c)) && (e = c[h],
                f = e && i[e])) {
                    if (f.events)
                        for (d in f.events)
                            k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e],
                    j ? delete c[h] : typeof c.removeAttribute !== wa ? c.removeAttribute(h) : c[h] = null,
                    W.push(e))
                }
        }
    }),
    ea.fn.extend({
        text: function(a) {
            return Ca(this, function(a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    s(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || ea.cleanData(q(c)),
                c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild; )
                    a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a : b,
            this.map(function() {
                return ea.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ca(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(Ka, "") : void 0;
                if (!("string" != typeof a || Ra.test(a) || !ca.htmlSerialize && La.test(a) || !ca.leadingWhitespace && Ma.test(a) || Wa[(Oa.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Na, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (ea.cleanData(q(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                ea.cleanData(q(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Sa.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this),
            c = h.firstChild,
            1 === h.childNodes.length && (h = c),
            c)) {
                for (f = ea.map(q(h, "script"), t),
                e = f.length; j > i; i++)
                    d = h,
                    i !== l && (d = ea.clone(d, !0, !0),
                    e && ea.merge(f, q(d, "script"))),
                    b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument,
                    ea.map(f, u),
                    i = 0; e > i; i++)
                        d = f[i],
                        Ta.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Va, "")));
                h = c = null
            }
            return this
        }
    }),
    ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ea.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++)
                c = d === g ? this : this.clone(!0),
                ea(f[d])[b](c),
                Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Za, $a = {};
    !function() {
        var a;
        ca.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0],
            c && c.style ? (b = oa.createElement("div"),
            d = oa.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== wa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(oa.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var _a, ab, bb = /^margin/, cb = new RegExp("^(" + za + ")(?!px)[a-z%]+$","i"), db = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (_a = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }
    ,
    ab = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || _a(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)),
        cb.test(g) && bb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : oa.documentElement.currentStyle && (_a = function(a) {
        return a.currentStyle
    }
    ,
    ab = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || _a(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        cb.test(g) && !db.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    ),
    !function() {
        function b() {
            var b, c, d, e;
            (c = oa.getElementsByTagName("body")[0]) && c.style && (b = oa.createElement("div"),
            d = oa.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            f = g = !1,
            i = !0,
            a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top,
            g = "4px" === (a.getComputedStyle(b, null) || {
                width: "4px"
            }).width,
            e = b.appendChild(oa.createElement("div")),
            e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            b.style.width = "1px",
            i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)),
            b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            e = b.getElementsByTagName("td"),
            e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            h = 0 === e[0].offsetHeight,
            h && (e[0].style.display = "",
            e[1].style.display = "none",
            h = 0 === e[0].offsetHeight),
            c.removeChild(d))
        }
        var c, d, e, f, g, h, i;
        c = oa.createElement("div"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = c.getElementsByTagName("a")[0],
        (d = e && e.style) && (d.cssText = "float:left;opacity:.5",
        ca.opacity = "0.5" === d.opacity,
        ca.cssFloat = !!d.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        ca.clearCloneStyle = "content-box" === c.style.backgroundClip,
        ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing,
        ea.extend(ca, {
            reliableHiddenOffsets: function() {
                return null == h && b(),
                h
            },
            boxSizingReliable: function() {
                return null == g && b(),
                g
            },
            pixelPosition: function() {
                return null == f && b(),
                f
            },
            reliableMarginRight: function() {
                return null == i && b(),
                i
            }
        }))
    }(),
    ea.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var eb = /alpha\([^)]*\)/i
      , fb = /opacity\s*=\s*([^)]*)/
      , gb = /^(none|table(?!-c[ea]).+)/
      , hb = new RegExp("^(" + za + ")(.*)$","i")
      , ib = new RegExp("^([+-])=(" + za + ")","i")
      , jb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , kb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , lb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ab(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b), i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)),
                g = ea.cssHooks[b] || ea.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = ib.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"),
                ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (a) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)),
            g = ea.cssHooks[b] || ea.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = ab(a, b, d)),
            "normal" === f && b in kb && (f = kb[b]),
            "" === c || c ? (e = parseFloat(f),
            !0 === c || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    ea.each(["height", "width"], function(a, b) {
        ea.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? gb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, jb, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && _a(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    ca.opacity || (ea.cssHooks.opacity = {
        get: function(a, b) {
            return fb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === ea.trim(f.replace(eb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = eb.test(f) ? f.replace(eb, e) : f + " " + e)
        }
    }),
    ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
        return b ? ea.swap(a, {
            display: "inline-block"
        }, ab, [a, "marginRight"]) : void 0
    }),
    ea.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ea.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + Aa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        bb.test(a) || (ea.cssHooks[a + b].set = D)
    }),
    ea.fn.extend({
        css: function(a, b) {
            return Ca(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (ea.isArray(b)) {
                    for (d = _a(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = ea.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ba(this) ? ea(this).show() : ea(this).hide()
            })
        }
    }),
    ea.Tween = G,
    G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (ea.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : G.propHooks._default.set(this),
            this
        }
    },
    G.prototype.init.prototype = G.prototype,
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    ea.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    ea.fx = G.prototype.init,
    ea.fx.step = {};
    var mb, nb, ob = /^(?:toggle|show|hide)$/, pb = new RegExp("^(?:([+-])=|)(" + za + ")([a-z%]*)$","i"), qb = /queueHooks$/, rb = [K], sb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = pb.exec(b)
              , f = e && e[3] || (ea.cssNumber[a] ? "" : "px")
              , g = (ea.cssNumber[a] || "px" !== f && +d) && pb.exec(ea.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do {
                    h = h || ".5",
                    g /= h,
                    ea.style(c.elem, a, g + f)
                } while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    ea.Animation = ea.extend(M, {
        tweener: function(a, b) {
            ea.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                sb[c] = sb[c] || [],
                sb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? rb.unshift(a) : rb.push(a)
        }
    }),
    ea.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ea.extend({}, a) : {
            complete: c || !c && b || ea.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ea.isFunction(b) && b
        };
        return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default,
        (null == d.queue || !0 === d.queue) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            ea.isFunction(d.old) && d.old.call(this),
            d.queue && ea.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    ea.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ba).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = ea.isEmptyObject(a)
              , f = ea.speed(b, c, d)
              , g = function() {
                var b = M(this, ea.extend({}, a), f);
                (e || ea._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = ea.timers
                  , g = ea._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && qb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && ea.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                ea.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    ea.each(["toggle", "show", "hide"], function(a, b) {
        var c = ea.fn[b];
        ea.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
    }),
    ea.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ea.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    ea.timers = [],
    ea.fx.tick = function() {
        var a, b = ea.timers, c = 0;
        for (mb = ea.now(); c < b.length; c++)
            (a = b[c])() || b[c] !== a || b.splice(c--, 1);
        b.length || ea.fx.stop(),
        mb = void 0
    }
    ,
    ea.fx.timer = function(a) {
        ea.timers.push(a),
        a() ? ea.fx.start() : ea.timers.pop()
    }
    ,
    ea.fx.interval = 13,
    ea.fx.start = function() {
        nb || (nb = setInterval(ea.fx.tick, ea.fx.interval))
    }
    ,
    ea.fx.stop = function() {
        clearInterval(nb),
        nb = null
    }
    ,
    ea.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ea.fn.delay = function(a, b) {
        return a = ea.fx ? ea.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = oa.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = oa.createElement("select"),
        e = c.appendChild(oa.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        ca.getSetAttribute = "t" !== b.className,
        ca.style = /top/.test(d.getAttribute("style")),
        ca.hrefNormalized = "/a" === d.getAttribute("href"),
        ca.checkOn = !!a.value,
        ca.optSelected = e.selected,
        ca.enctype = !!oa.createElement("form").enctype,
        c.disabled = !0,
        ca.optDisabled = !e.disabled,
        a = oa.createElement("input"),
        a.setAttribute("value", ""),
        ca.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        ca.radioValue = "t" === a.value
    }();
    var tb = /\r/g;
    ea.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ea.isFunction(a),
            this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a,
                null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                    return null == a ? "" : a + ""
                })),
                (b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()]) && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()],
            b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
            "string" == typeof c ? c.replace(tb, "") : null == c ? "" : c)) : void 0
        }
    }),
    ea.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ea(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--; )
                        if (d = e[g],
                        ea.inArray(ea.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (a) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    ea.each(["radio", "checkbox"], function() {
        ea.valHooks[this] = {
            set: function(a, b) {
                return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
            }
        },
        ca.checkOn || (ea.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ub, vb, wb = ea.expr.attrHandle, xb = /^(?:checked|selected)$/i, yb = ca.getSetAttribute, zb = ca.input;
    ea.fn.extend({
        attr: function(a, b) {
            return Ca(this, ea.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ea.removeAttr(this, a)
            })
        }
    }),
    ea.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === wa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(),
                d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? vb : ub)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void ea.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(sa);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = ea.propFix[c] || c,
                    ea.expr.match.bool.test(c) ? zb && yb || !xb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""),
                    a.removeAttribute(yb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    vb = {
        set: function(a, b, c) {
            return !1 === b ? ea.removeAttr(a, c) : zb && yb || !xb.test(c) ? a.setAttribute(!yb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = wb[b] || ea.find.attr;
        wb[b] = zb && yb || !xb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = wb[b],
            wb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            wb[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    zb && yb || (ea.attrHooks.value = {
        set: function(a, b, c) {
            return ea.nodeName(a, "input") ? void (a.defaultValue = b) : ub && ub.set(a, b, c)
        }
    }),
    yb || (ub = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    wb.id = wb.name = wb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    ea.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: ub.set
    },
    ea.attrHooks.contenteditable = {
        set: function(a, b, c) {
            ub.set(a, "" !== b && b, c)
        }
    },
    ea.each(["width", "height"], function(a, b) {
        ea.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    ca.style || (ea.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Ab = /^(?:input|select|textarea|button|object)$/i
      , Bb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function(a, b) {
            return Ca(this, ea.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ea.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (a) {}
            })
        }
    }),
    ea.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !ea.isXMLDoc(a),
                f && (b = ea.propFix[b] || b,
                e = ea.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ab.test(a.nodeName) || Bb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
        ea.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    ca.optSelected || (ea.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ea.propFix[this.toLowerCase()] = this
    }),
    ca.enctype || (ea.propFix.enctype = "encoding");
    var Cb = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(sa) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(sa) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(sa) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === wa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className),
                    this.className = this.className || !1 === a ? "" : ea._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Cb, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ea.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    ea.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Db = ea.now()
      , Eb = /\?/
      , Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Fb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }
    ,
    ea.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (a) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b),
        c
    }
    ;
    var Gb, Hb, Ib = /#.*$/, Jb = /([?&])_=[^&]*/, Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mb = /^(?:GET|HEAD)$/, Nb = /^\/\//, Ob = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pb = {}, Qb = {}, Rb = "*/".concat("*");
    try {
        Hb = location.href
    } catch (a) {
        Hb = oa.createElement("a"),
        Hb.href = "",
        Hb = Hb.href
    }
    Gb = Ob.exec(Hb.toLowerCase()) || [],
    ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hb,
            type: "GET",
            isLocal: Lb.test(Gb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Pb),
        ajaxTransport: N(Qb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                j = void 0,
                g = d || "",
                v.readyState = a > 0 ? 4 : 0,
                e = a >= 200 && 300 > a || 304 === a,
                c && (s = Q(l, v, c)),
                s = R(l, s, v, e),
                e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (ea.lastModified[f] = u),
                (u = v.getResponseHeader("etag")) && (ea.etag[f] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                e = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                p.fireWith(m, [v, w]),
                i && (n.trigger("ajaxComplete", [v, l]),
                --ea.active || ea.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(), p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!k)
                            for (k = {}; b = Kb.exec(g); )
                                k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return j && j.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || Hb) + "").replace(Ib, "").replace(Nb, Gb[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(sa) || [""],
            null == l.crossDomain && (d = Ob.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Gb[1] && d[2] === Gb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Gb[3] || ("http:" === Gb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)),
            O(Pb, l, b, v),
            2 === t)
                return v;
            i = l.global,
            i && 0 == ea.active++ && ea.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Mb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            !1 === l.cache && (l.url = Jb.test(f) ? f.replace(Jb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)),
            l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]),
            ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])),
            (l.data && l.hasContent && !1 !== l.contentType || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Rb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, v, l) || 2 === t))
                return v.abort();
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[e](l[e]);
            if (j = O(Qb, l, b, v)) {
                v.readyState = 1,
                i && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    j.send(r, c)
                } catch (a) {
                    if (!(2 > t))
                        throw a;
                    c(-1, a)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }),
    ea.each(["get", "post"], function(a, b) {
        ea[b] = function(a, c, d, e) {
            return ea.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ea.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    ea._evalUrl = function(a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ea.fn.extend({
        wrapAll: function(a) {
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(ea.isFunction(a) ? function(b) {
                ea(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = ea(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = ea.isFunction(a);
            return this.each(function(c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ea.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }
    ,
    ea.expr.filters.visible = function(a) {
        return !ea.expr.filters.hidden(a)
    }
    ;
    var Sb = /%20/g
      , Tb = /\[\]$/
      , Ub = /\r?\n/g
      , Vb = /^(?:submit|button|image|reset|file)$/i
      , Wb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = ea.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional),
        ea.isArray(a) || a.jquery && !ea.isPlainObject(a))
            ea.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                S(c, a[c], b, e);
        return d.join("&").replace(Sb, "+")
    }
    ,
    ea.fn.extend({
        serialize: function() {
            return ea.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Wb.test(this.nodeName) && !Vb.test(a) && (this.checked || !Da.test(a))
            }).map(function(a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ub, "\r\n")
                }
            }).get()
        }
    }),
    ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    }
    : T;
    var Xb = 0
      , Yb = {}
      , Zb = ea.ajaxSettings.xhr();
    a.ActiveXObject && ea(a).on("unload", function() {
        for (var a in Yb)
            Yb[a](void 0, !0)
    }),
    ca.cors = !!Zb && "withCredentials"in Zb,
    (Zb = ca.ajax = !!Zb) && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Xb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yb[g],
                            b = void 0,
                            f.onreadystatechange = ea.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (a) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }),
    ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ea.globalEval(a),
                a
            }
        }
    }),
    ea.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    ea.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function(d, e) {
                    b = oa.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var $b = []
      , _b = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = $b.pop() || ea.expando + "_" + Db++;
            return this[a] = !0,
            a
        }
    }),
    ea.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (_b.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && _b.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(_b, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || ea.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            $b.push(e)),
            g && ea.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    ea.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || oa;
        var d = la.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e),
        e && e.length && ea(e).remove(),
        ea.merge([], d.childNodes))
    }
    ;
    var ac = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && ac)
            return ac.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        ea.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    ea.expr.filters.animated = function(a) {
        return ea.grep(ea.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var bc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = ea.css(a, "top"),
            i = ea.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            ea.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    ea.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    ea.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            return f ? (b = f.documentElement,
            ea.contains(b, e) ? (typeof e.getBoundingClientRect !== wa && (d = e.getBoundingClientRect()),
            c = V(f),
            {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                ea.nodeName(a[0], "html") || (c = a.offset()),
                c.top += ea.css(a[0], "borderTopWidth", !0),
                c.left += ea.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || bc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position"); )
                    a = a.offsetParent;
                return a || bc
            })
        }
    }),
    ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function(d) {
            return Ca(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    ea.each(["top", "left"], function(a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
            return c ? (c = ab(a, b),
            cb.test(c) ? ea(a).position()[b] + "px" : c) : void 0
        })
    }),
    ea.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ea.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (!0 === d || !0 === e ? "margin" : "border");
                return Ca(this, function(b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    ea.fn.size = function() {
        return this.length
    }
    ,
    ea.fn.andSelf = ea.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea
    });
    var cc = a.jQuery
      , dc = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = dc),
        b && a.jQuery === ea && (a.jQuery = cc),
        ea
    }
    ,
    typeof b === wa && (a.jQuery = a.$ = ea),
    ea
}),
define("dom", ["jquery"], function(a) {
    "use strict";
    var b = function(b, c) {
        return a(b).hasClass(c)
    }
      , c = function(b, c) {
        a(b).addClass(c)
    }
      , d = function(b, c) {
        a(b).removeClass(c)
    }
      , e = function(a, b, e) {
        a && (d(a, b),
        c(a, e))
    }
      , f = function(a, e) {
        a && (b(a, e) ? d(a, e) : c(a, e))
    }
      , g = function(a, b) {
        a && (a.className = b || "")
    }
      , h = function(b, c) {
        return a(b).closest("." + c).get(0)
    }
      , i = function(b, c) {
        var d = a(b)
          , e = "." + c
          , f = a(b).parents(e).toArray();
        return d.is(e) && f.unshift(d.get(0)),
        f
    }
      , j = function(a, b, c) {
        a.className.split(" ").forEach(function(d) {
            -1 !== d.indexOf(b) && d.indexOf(c) + c.length !== d.length && e(a, d, d + c)
        })
    }
      , k = function(a, b, c) {
        a.className.split(" ").forEach(function(d) {
            -1 !== d.indexOf(b) && e(a, d, d.replace(c, ""))
        })
    }
      , l = function(b, c) {
        return a(b).find("." + c).get(0)
    }
      , m = function(b, c) {
        return a(b).find(c).get(0)
    }
      , n = function(a, b) {
        var c, d = a.length;
        for (c = 0; c < d; c++)
            b(a[c])
    };
    return {
        hasClass: b,
        addClass: c,
        removeClass: d,
        replaceClass: e,
        toggleClass: f,
        setClass: g,
        findParentByClassName: h,
        findAncestorsByClassName: i,
        appendToClassName: j,
        removeFromClassName: k,
        all: n,
        firstChildWithClassName: l,
        firstChildWithTagName: m,
        forEach: n
    }
}),
function(a) {
    "use strict";
    var b = {
        0: "off",
        2: "error",
        5: "debug"
    }
      , c = {}
      , d = {}
      , e = "ABseLogLevels"
      , f = 8
      , g = function(a, b) {
        var c = window.console;
        if (c) {
            var d = Array.prototype.slice.call(arguments, 2)
              , e = c[a] || c.log;
            if (e && e.apply)
                e.apply(c, ["*LOG " + b + "* " + d[0]].concat(d.slice(1)));
            else
                switch (d.length) {
                case 0:
                    window.console.log("*LOG " + b + "* ");
                    break;
                case 1:
                    window.console.log("*LOG " + b + "* " + d[0]);
                    break;
                case 2:
                    window.console.log("*LOG " + b + "* " + d[0], d[1]);
                    break;
                case 3:
                    window.console.log("*LOG " + b + "* " + d[0], d[1], d[2]);
                    break;
                case 4:
                    window.console.log("*LOG " + b + "* " + d[0], d[1], d[2], d[3]);
                    break;
                default:
                    window.console.log("*LOG " + b + "* " + d[0], d[1], d[2], d[3], d[4])
                }
        }
    }
      , h = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        window.console && window.console.log && g.apply(null, [a, b].concat(c))
    }
      , i = function(a) {
        return b[a]
    }
      , j = function(a) {
        for (var c in b)
            if (b.hasOwnProperty(c) && b[c] === a)
                return c;
        return 0
    }
      , k = function() {
        var a = "";
        for (var b in c)
            c.hasOwnProperty(b) && (a += b + ":" + i(c[b]) + ",");
        return window.abSetCookie(e, a + "time:" + f, f / 24, "aftonbladet.se"),
        "{" + a.substring(0, a.length - 1) + "}"
    }
      , l = function(a, b) {
        for (var d in c)
            if (c.hasOwnProperty(d))
                if ("_allLoggers_" === a)
                    c[d] = b;
                else if (a === d) {
                    c[d] = b;
                    break
                }
    }
      , m = function(a) {
        if (void 0 === a)
            l("_allLoggers_", 5);
        else if ("number" == typeof a)
            a <= 0 ? l("_allLoggers_", 0) : f = a;
        else if ("string" == typeof a) {
            if ("h" === a)
                return "SHORTCUTS:\nABse.log() => all loggers debug\nABse.log(0) => all loggers off\nABse.log('myLog') => myLog in debug\nABse.log('') => Show status and reset cookie without any changes\nABse.log(12) => Logging for 12 hours. Default is 8 hours. Logging-data stored in cookie '" + e + "'\nDETAILED CONFIGURATION:\nABse.log({myLog:5,yourLog:0}) => myLog in debug, yourLog off. Use numbers when configuring specific loggers: off=0, error=2, debug=5";
            l(a, 5)
        } else if ("object" == typeof a)
            for (var b in a)
                a.hasOwnProperty(b) && l(b, a[b]);
        return ["Current logLevels: ABse.log(" + k() + "). Logging for " + f + " hour" + (f > 1 ? "s" : "") + ". ABse.log('h') for help", c]
    }
      , n = function(a) {
        "number" != typeof c[a] && ("string" == typeof d[a] ? c[a] = d[a] : c[a] = 0)
    }
      , o = function(a) {
        return a = a || "anonymous",
        n(a),
        {
            debug: function(b) {
                c[a] >= 5 && (b = Array.prototype.slice.call(arguments, 0),
                h.apply(null, ["log", a].concat(b)))
            },
            error: function(b) {
                c[a] >= 2 && (b = Array.prototype.slice.call(arguments, 0),
                h.apply(null, ["error", a].concat(b)))
            }
        }
    };
    !function() {
        var a = window.abGetCookie(e);
        if ("string" == typeof a)
            for (var b = a.split(","), c = 0; c < b.length; c++) {
                var g = b[c].split(":");
                "time" === g[0] ? f = g[1] : d[g[0]] = j(g[1])
            }
    }(),
    a.logCenter = {
        getLogger: o,
        setLogLevels: m
    },
    a.log = function(b) {
        return a.logCenter.setLogLevels(b)
    }
}(window.ABse = window.ABse || {}),
function(a) {
    "use strict";
    function b() {
        try {
            var b = "test";
            return a.localStorage.setItem(b, b),
            a.localStorage.removeItem(b),
            !0
        } catch (a) {
            return !1
        }
    }
    a.ABse = a.ABse || {};
    var c = a.ABse;
    c.stats = c.stats || {};
    var d = c.logCenter && "function" == typeof c.logCenter.getLogger ? c.logCenter.getLogger("Stats") : {
        debug: function() {},
        error: function() {}
    };
    c.stats.saveTrackingData = function(c, d, e) {
        if (e = e || 3e4,
        b()) {
            var f = {
                value: d,
                expires: (new Date).getTime() + e
            };
            a.sessionStorage.setItem(c, JSON.stringify(f))
        } else
            a.abSetCookie(c, d, e / 864e5)
    }
    ,
    c.stats.getTrackingData = function(c) {
        d.debug("getTrackingData called, key =", c);
        var e;
        if (b()) {
            var f = a.sessionStorage.getItem(c) ? JSON.parse(a.sessionStorage.getItem(c)) : void 0;
            f && f.expires > (new Date).getTime() && (e = f.value)
        } else
            e = a.abGetCookie(c);
        return e
    }
    ,
    c.stats.deleteTrackingData = function(c) {
        b() ? a.sessionStorage.removeItem(c) : a.abSetCookie(c, null, 0)
    }
}(window),
function() {
    "use strict";
    function a(a, b) {
        a.stats = a.stats || {};
        var c = function(a, b) {
            var c;
            if (!a || !b)
                return -1;
            if (!Array.prototype.indexOf) {
                for (c = 0; c < a.length; c += 1)
                    if (a[c] === b)
                        return c;
                return -1
            }
            return a.indexOf(b)
        };
        return a.stats.mixpanelStatsInit = function(d, e, f) {
            var g = function() {
                return "object" == typeof b && "object" == typeof b.premiumInfo && ("plus" === b.premiumInfo.service || "plusPremium" === b.premiumInfo.service) && b.isPremium && ("article" === b.premiumTeaserType || "" === b.premiumTeaserType || "product" === b.premiumTeaserType)
            }
              , h = function() {
                return "object" == typeof b && ("offering" === b.premiumTeaserType || "campaign" === b.premiumTeaserType)
            };
            a.stats.getMixpanelPageConfig = function() {
                var d = b.articleId && "" !== b.articleId;
                if (a.stats.mixpanelConfig)
                    return a.stats.mixpanelConfig;
                if (h()) {
                    var e;
                    switch (b.premiumTeaserType) {
                    case "offering":
                        e = "Sales offer page";
                        break;
                    case "campaign":
                        e = "plusPremium" === b.premiumInfo.service ? "Plus premium sales page" : "Plus sales page"
                    }
                    return {
                        contentType: e,
                        eventType: "AB - Sales page view",
                        track: !0
                    }
                }
                return g() ? {
                    contentType: "Plus article" + (b.isPremiumTeaser ? " teaser" : ""),
                    eventType: b.isPremiumTeaser ? "AB - Sales page view" : "AB - Plus article page view",
                    track: !0
                } : d && "object" == typeof b.allArticleSections && c(b.allArticleSections, "plus_administration_erbjudanden") >= 0 ? {
                    contentType: "Sales offer page",
                    eventType: "AB - Sales page view",
                    track: !0
                } : {
                    track: !1
                }
            }
            ;
            var i = function(a) {
                return b && (b && b.sectionUniqueNames && 0 !== b.sectionUniqueNames.length ? (a["Site section"] = b.sectionUniqueNames[0],
                a.Subsection = b.sectionUniqueNames[1],
                a.Subsection2 = b.sectionUniqueNames[2],
                a.Subsection3 = b.sectionUniqueNames[3],
                a["Section path"] = b.sectionUniqueNames.join("/")) : (a.siteSection = "ettan",
                a["Section path"] = "/")),
                a
            }
              , j = function(a, b) {
                var c = null;
                if (b && b["Link location"])
                    try {
                        c = b["Link location"].split("|"),
                        2 === c.length && (a["Entry point position group"] = c[0] || "",
                        a["Entry point position"] = c[1] || "")
                    } catch (a) {}
                return a
            }
              , k = function() {
                var a, b, c, d = arguments.length, e = {};
                for (b = 0; b < d; ++b)
                    if ("object" == typeof (a = arguments[b]))
                        for (c in a)
                            a.hasOwnProperty(c) && (e[c] = a[c]);
                return e
            };
            a.stats.handleTeaserRoundTripImpression = function(a, c, d) {
                if (g()) {
                    var e = ("logged in" !== d["User status"] || "denied" === d["Article access"]) && b.isPremiumTeaser;
                    if (c.debug("handleTeaserRoundTripImpression found plus article, is teaser = " + e),
                    e)
                        c.debug("Saving article ID " + b.articleId + " to key mixpanelLastPremiumTeaserPage"),
                        a.saveTrackingData("mixpanelLastPremiumTeaserPage", b.articleId, 864e5);
                    else {
                        var f = a.getTrackingData("mixpanelLastPremiumTeaserPage");
                        c.debug("Loaded possible article ID trackingData = " + f + ", page.articleId = " + b.articleId),
                        f - 0 === b.articleId && (d["Teaser round trip"] = !0,
                        c.debug("Deleting key mixpanelLastPremiumTeaserPage"),
                        a.deleteTrackingData("mixpanelLastPremiumTeaserPage"))
                    }
                }
                return d
            }
            ,
            a.stats.getMixpanelPageImpressionInfo = function(c, e, h) {
                var k = a.stats.getMixpanelPageConfig()
                  , l = k.contentType
                  , m = {
                    eventType: k.eventType,
                    "Site type": f,
                    "Content type": l
                };
                m = i(m),
                m = j(m, h),
                m["Article Id"] = b.articleId,
                m["Article title"] = b.articleHeadline,
                m["Impression URL"] = document.location.href,
                h && document.referrer && document.referrer.indexOf("aftonbladet.se") >= 0 && (m["Internal referrer"] = h["Section path"]),
                c.isLoggedIn(function(a) {
                    d.debug("isLoggedIn = ", a),
                    b.premiumInfo = b.premiumInfo || {},
                    a && c.getUser(function(a) {
                        a && (m["User ID"] = a.userId)
                    });
                    var f = g() ? !b.isPremiumTeaser : void 0;
                    m["Article access"] = f ? "allowed" : "denied",
                    m["User status"] = a ? "logged in" : " not logged in",
                    e(m)
                })
            }
            ,
            a.stats.getMixpanelLinkTrackConfig = function() {
                var b = null;
                return "function" == typeof e && (b = e()),
                a.stats.mixpanelClickConfig && (b = k(b, a.stats.mixpanelClickConfig)),
                b
            }
            ,
            a.stats.getMixpanelPageTrackInbound = function() {
                return void 0 !== a.stats.mixpanelPageTrackInbound && a.stats.mixpanelPageTrackInbound
            }
            ;
            var l = function(a) {
                if (!a)
                    return !1;
                var b = a.getAttribute("href");
                if (!b)
                    return !1;
                var c = b.indexOf("?");
                if (c > 0) {
                    var d, e = b.substring(c + 1), f = e.split("&");
                    for (d = 0; d < f.length; d++)
                        if ("abMixpanelTracking=" === f[d].substring(0, 19))
                            return f[d].substring(19).replace(" ", "")
                }
                return a.getAttribute("data-abMixpanelTracking")
            }
              , m = function() {
                var b = {
                    eventType: "AB - Click",
                    "Content type": a.stats.getMixpanelPageConfig().contentType,
                    "Site type": f,
                    "Impression URL": document.location.href
                };
                return i(b)
            };
            a.stats.getMixPanelBasicLinkTrackInfo = m,
            a.stats.getMixpanelLinkTrackData = function(b) {
                var c, d = l(b), e = m(), f = a.stats.getMixpanelLinkTrackConfig();
                if (d && f && f[d]) {
                    c = f[d];
                    for (var g in c)
                        c.hasOwnProperty(g) && (e["Link " + g] = c[g]);
                    e["Link eventTypeOverride"] && (e.eventType = e["Link eventTypeOverride"],
                    e["Link eventTypeOverride"] = void 0),
                    e.trackAsOutbound = !0
                } else
                    f && !0 === f.other ? e.trackAsOutbound = !0 : e = void 0;
                return e
            }
        }
        ,
        a.stats
    }
    typeof define == typeof Function && define("mixpanel-stats-shared", ["abse", "page"], a),
    window.ABse && (window.ABse = window.ABse || {},
    window.ABse.page = window.ABse.page || {},
    a(window.ABse, window.ABse.page))
}(),
function(a) {
    "use strict";
    var b = a.ABse || {}
      , c = b.logCenter ? b.logCenter.getLogger("Stats") : {
        debug: function() {},
        error: function() {}
    };
    if (void 0 === window.ABY && (window.ABY = YUI()),
    b.stats && "function" == typeof b.stats.mixpanelStatsInit) {
        var d = function() {
            return {
                order_premium: {
                    type: "plus purchase button",
                    eventTypeOverride: "AB - Select product click"
                },
                teaser_login: {
                    type: "premium box login button",
                    textOverride: "Logga in",
                    eventTypeOverride: "AB - Login click"
                },
                header_login: {
                    type: "header login button",
                    textOverride: "Logga in",
                    eventTypeOverride: "AB - Login click"
                },
                premium_offer_teaser_buy: {
                    type: "premium offer teaser buy button",
                    textOverride: "Prova plus redan idag - klicka här",
                    eventTypeOverride: "AB - Select product click"
                },
                page_footer_buy_plus_button: {
                    type: "footer login button",
                    textOverride: "Köp plus här",
                    eventTypeOverride: "AB - Select product click"
                },
                buy_free: {
                    type: "register free account button",
                    textOverride: "Kom igång",
                    eventTypeOverride: "AB - Register free account click"
                },
                buy_plus_premium: {
                    type: "Plus premium teaser buy button",
                    eventTypeOverride: "AB - Select product click"
                },
                other: "object" == typeof b.page && "object" == typeof b.page.premiumInfo && ("plus" === b.page.premiumInfo.service || "plusPremium" === b.page.premiumInfo.service) && b.page.isPremium && b.page.isPremiumTeaser
            }
        };
        b.stats.mixpanelStatsInit(c, d, "desktop")
    }
}(this),
void 0 === ABse)
    var ABse = {};
void 0 === ABse.stats && (ABse.stats = {}),
void 0 === window.ABY && (window.ABY = YUI()),
ABse.stats.scrolly = 0,
window.ABY.use("node", "event-delegate", function(a) {
    function b(a) {
        var b = a.getAttribute("href");
        return "string" == typeof b && (0 === b.indexOf("http") || 0 === b.indexOf("/"))
    }
    var c = a.one(window)
      , d = a.config.doc
      , e = ABse.logCenter && "function" == typeof ABse.logCenter.getLogger ? ABse.logCenter.getLogger("Stats") : {
        debug: function() {},
        error: function() {}
    };
    ABse.stats.clickTrackString = "",
    ABse.stats.isRealLink = b;
    var f = function() {
        ABse.page.exitlink = ABse.page.exitlink || {};
        var a = ABse.page.exitlink.internalDomains;
        return a ? a.split(",") : []
    }
      , g = f()
      , h = function(a) {
        return a.hasClass("abUserLoginPlus") || a.hasClass("abPremiumPlusBuy") || a.hasClass("abUserLogin")
    }
      , i = function(a) {
        return a.indexOf("login.aftonbladet.se") >= 0
    }
      , j = function(a) {
        var b, c = g.length;
        if (0 === a.indexOf("#") || 0 === a.indexOf("/"))
            return !1;
        for (b = 0; b < c; b += 1)
            if (-1 !== a.indexOf(g[b]))
                return !1;
        return !0
    };
    if (ABse.stats.clickTrack = function(c, d, f) {
        e.debug("Running statsInit/clickTrack()");
        var g, h, k, l = c.target, m = c.currentTarget, n = l.ancestor("a", !0, function(a) {
            return a === m
        }), o = function(b, c) {
            var d = 8 !== a.UA.ie ? "[style*=hidden]" : function(b) {
                var c = a.Node.getDOMNode(b).getAttribute("style");
                return "string" == typeof c && -1 !== c.indexOf("hidden")
            }
            ;
            return !b.hasClass("abStreamer") && null === b.ancestor(d, !0, function(a) {
                return a === c
            })
        }, p = function(a, b, c) {
            e.debug("Running statsInit/findClickPosition()");
            var d = null
              , f = 0
              , g = b.all("a")
              , h = "";
            e.debug("Found " + g.size() + " a-tags");
            for (var i = 0; i < g.size(); i++)
                if (o(g.item(i), b) && (h = q(g.item(i), b),
                " Right" !== h && f++,
                g.item(i) === c)) {
                    d = f + h;
                    break
                }
            return null !== d ? d : c.get("href")
        }, q = function(b, c) {
            e.debug("Running statsInit/getLeftOrRight()");
            var d = 8 !== a.UA.ie ? ".abEqualMd50" : function(b) {
                var c = a.Node.getDOMNode(b).className;
                if ("string" != typeof c)
                    return !1;
                for (var d = c.split(/\s+/), e = 0; e < d.length; e++)
                    if ("abEqualMd50" === d[e])
                        return !0;
                return !1
            }
              , f = b.ancestor(d, !1, function(a) {
                return a === c
            });
            if (null !== f) {
                if (e.debug(" ... twoColumn ", f),
                f.hasClass("abRighty"))
                    return " Right";
                if (f.hasClass("abLefty"))
                    return " Left"
            }
            return ""
        };
        if (null !== n && b(n)) {
            void 0 === f && (f = p(l, m, n)),
            g = ABse.page && ABse.page.mainSectionUniqueName ? ABse.page.mainSectionUniqueName : "ettan",
            h = ABse.page && ABse.page.articleId ? ABse.page.articleId : "",
            k = d + " | " + f,
            window.s_objectID = k,
            k = k.replace(/[åäöÅÄÖ]/g, function(a) {
                var b = "åäöÅÄÖ".indexOf(a);
                return "aaoAAO".charAt(b)
            }),
            "function" == typeof abSetCookie && (ABse.stats.clickTrackString = g + "$" + k + "$" + h,
            e.debug("Saving: " + ABse.stats.clickTrackString),
            abSetCookie("siteCatClickTrackString", ABse.stats.clickTrackString, 1 / 2880, ".aftonbladet.se"),
            ABse.stats.siteCatClickTrackStringSet = !0),
            e.debug("Click detected, mixpanelMode = ", ABse.mixpanelMode);
            var r = n.getAttribute("href");
            if ("off" !== ABse.mixpanelMode)
                if (j(r) || i(r))
                    e.debug("Won't set Mixapanel cookie, this is an exit link: ", r);
                else {
                    var s = ABse.stats.getMixpanelLinkTrackData(n);
                    if (s) {
                        s["Link location"] = k,
                        s["Target URL"] = r,
                        s["Link text"] = a.Lang.trim(n.get("text").replace(/\s+/g, " ")).substring(0, 30);
                        var t = JSON.stringify(s);
                        e.debug("Saving mixpanel click track data, trackData = ", t),
                        ABse.stats.saveTrackingData("mixpanelClickTrackString", t),
                        ABse.stats.mixpanelClickTrackStringSet = !0
                    }
                }
        } else
            e.debug("No real link clicked")
    }
    ,
    e.debug("Registering click-listener for some page-areas"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "Header")
    }, d, "header"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "LeftColumn")
    }, d, "#abLeftColumn"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "MainSection")
    }, d, "#abMainColumn"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "RightColumn")
    }, d, "#abRightColumn"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "Footer")
    }, d, "footer"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "OldMainContainer")
    }, d, ".abMainContainer"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "SuperTop")
    }, d, "div .abSuperTop"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "SuperDuperTop")
    }, d, "div .abSuperDuperTop"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "WUMO")
    }, d, "div .abWulffmorgentHaler"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "Menu", a.target.get("text"))
    }, d, ".abSiteNav"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "MenuSection", a.target.get("text"))
    }, d, ".abSubNav"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "MenuSiteIndex", a.target.get("text"))
    }, d, "#abSiteIndexBox"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "MenuSectionIndex", a.target.get("text"))
    }, d, "#abSectionSiteIndexBox"),
    ABse.page && void 0 !== typeof ABse.page.articleId && (a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleRightSticky")
    }, d, "#abSticky-articleRightCol"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleRelated")
    }, d, "#abArticleBottom .abRelatedBox"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleRight")
    }, d, "#abStickyBottomBoundary-articleRightCol .abRelatedBox"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleBottomMore")
    }, d, "#abStickyBoundary-outsiderLow .abFeaturedContentWidget"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleBottomPlus")
    }, d, "#abStickyBoundary-outsiderLow .abFeaturedPlusWidget"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticleBottomTV")
    }, d, "#abStickyBoundary-outsiderLow .abFeaturedTvWidget"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "ArticlePremiumBox")
    }, d, ".abPremiumBoxInner"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "DetailedArticlePremiumBox")
    }, d, "#abDetailedPremiumBoxBuyLink"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "DetailedArticlePremiumBox")
    }, d, ".abTeaserCampaign"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "TagLinkBodyText")
    }, d, ".abStatTagText"),
    a.delegate("click", function(a) {
        ABse.stats.clickTrack(a, "TagLinkBottom")
    }, d, ".abStatTagBottom")),
    e.debug("Registering scroll-listener for ABse.stats.scrolly"),
    a.Global.on("abevent:scroll", function() {
        c.get("docScrollY") > ABse.stats.scrolly && (ABse.stats.scrolly = c.get("docScrollY"))
    }),
    a.on("unload", function() {
        if ("function" == typeof abSetCookie) {
            var a, b = Math.round(100 * ABse.stats.scrolly / (c.get("docHeight") - c.get("winHeight"))), d = require("ab-sitecatalyst"), a = d.getMainSectionUniqueName();
            a = a && a.length > 0 ? "%" + a : window.ABse && ABse.page && "string" == typeof ABse.page.mainSectionUniqueName ? "%" + ABse.page.mainSectionUniqueName : "",
            e.debug("Unloading, saving ABse.stats.scrolly in cookie scrolly: " + b + a),
            abSetCookie("scrolly", b + a, 1 / 2880, ".aftonbladet.se"),
            ABse.stats.scrollySet = !0
        }
    }, window),
    ABse && ABse.page && void 0 !== typeof ABse.page.exitlink) {
        var k = function(a) {
            var b = this.getAttribute("href");
            if (j(b)) {
                var c = require("ab-sitecatalyst");
                c && c.trackExitLink(b)
            }
        };
        a.delegate("click", k, d, "a"),
        a.on("domready", function() {
            function c(b, c) {
                function d(a, b) {
                    e.debug("--- Mixpanel MOCK: Tracking exit click ", JSON.stringify(b))
                }
                var g = ABse.stats.getMixpanelLinkTrackData(b)
                  , h = b.getAttribute("href");
                if (g) {
                    g["Target URL"] = h,
                    g["Link text"] = g["Link textOverride"] ? g["Link textOverride"] : a.Lang.trim(b.get("text").replace(/\s+/g, " ")).substring(0, 30);
                    var i = g.eventType;
                    if (g.trackAsOutbound = void 0,
                    g.eventType = void 0,
                    g["Link textOverride"] = void 0,
                    "on" === ABse.mixpanelMode) {
                        if ("function" == typeof b.addClass) {
                            var j = "abMpTemp" + c;
                            b.addClass(j),
                            e.debug("Adding class to link", j, h),
                            mixpanel.track_links("a." + j, i, g)
                        }
                    } else
                        b.on("click", d, void 0, g);
                    f += 1
                }
            }
            function d(c) {
                c = a.one(c);
                var d = c.getAttribute("href");
                return b(c) && (j(d) || i(d)) && !h(c)
            }
            var f = 0
              , g = ABse.stats && ABse.stats.getMixpanelLinkTrackConfig ? ABse.stats.getMixpanelLinkTrackConfig() : null;
            e.debug("Registering Mixpanel exit links, linkTrackData = ", g),
            "off" !== ABse.mixpanelMode && g && (a.all("a").filter(d).each(c),
            e.debug("Registered " + f + " Mixpanel exit link handlers"))
        })
    }
}),
function(a) {
    "use strict";
    function b(a, b) {
        return k[a][1 === b ? "singular" : "plural"]
    }
    var c = 1e3
      , d = 60 * c
      , e = 60 * d
      , f = 24 * e
      , g = 7 * f
      , h = 30 * f
      , i = 365 * f
      , j = [{
        key: "years",
        interval: i
    }, {
        key: "months",
        interval: h
    }, {
        key: "weeks",
        interval: g
    }, {
        key: "days",
        interval: f
    }, {
        key: "hours",
        interval: e
    }, {
        key: "minutes",
        interval: d
    }, {
        key: "seconds",
        interval: c
    }]
      , k = {
        years: {
            singular: "år",
            plural: "år"
        },
        months: {
            singular: "månad",
            plural: "månader"
        },
        weeks: {
            singular: "vecka",
            plural: "veckor"
        },
        days: {
            singular: "dag",
            plural: "dagar"
        },
        hours: {
            singular: "timme",
            plural: "timmar"
        },
        minutes: {
            singular: "minut",
            plural: "minuter"
        },
        seconds: {
            singular: "sekund",
            plural: "sekunder"
        }
    };
    a.date = {
        now: function() {
            return new Date
        },
        relativeTo: function(c) {
            var d = a.date.diff(a.date.now(), c)
              , e = d.relative[d.largestUnit];
            return e ? (e += " " + b(d.largestUnit, e),
            d.isFuture ? "om " + e : e + " sedan") : "Precis nu"
        },
        diff: function(a, b) {
            var k = a.getTime() - b.getTime()
              , l = k < 0;
            k = Math.abs(k);
            for (var m, n, o = k, p = !1, q = {
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0,
                months: 0,
                years: 0
            }, r = j.slice(0); r.length && o > 0; )
                n = r.shift(),
                o - n.interval >= 0 && (m = Math.floor(o / n.interval),
                o %= n.interval,
                q[n.key] = m,
                p || (p = n.key));
            return {
                absolute: {
                    seconds: Math.floor(k / c),
                    minutes: Math.floor(k / d),
                    hours: Math.floor(k / e),
                    days: Math.floor(k / f),
                    week: Math.floor(k / g),
                    months: Math.floor(k / h),
                    years: Math.floor(k / i)
                },
                relative: q,
                largestUnit: p,
                isFuture: l
            }
        }
    }
}(window.ABse = window.ABse || {}),
define("fuse-factory", [], function() {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            return a && (a.visitor || a.response && a.response.visitor) ? (a = a.visitor ? a : a.response,
            a && a.visitor && a.visitor.uid ? a.visitor.uid : void 0) : null
        }
        function e() {
            return !!i && i.hasLoginCookies
        }
        function f(a) {
            l.push(a),
            l.length > 1 || j.hasSession(function(a, b) {
                l.forEach(function(c) {
                    c(a, b)
                }),
                l = []
            })
        }
        function g(a, b) {
            j.init({
                server: a,
                client_id: b.spidClientId
            }),
            k.shouldForceReload() && j.sessionCache.clear(),
            f(function() {})
        }
        function h(a) {
            function b(a, b) {
                return "function" == typeof b ? b(a) : a
            }
            var h = a || {}
              , j = h.userServer || "https://login.aftonbladet.se/v2"
              , m = j.indexOf("https://login.aftonbladet.se") > -1
              , n = h.spidClientId
              , o = m ? "login.schibsted.com" : "identity-pre.schibsted.com";
            l = [],
            k.init(n),
            !1 !== a.useSpidJs && g(o, h);
            var p = c(13)(j, k);
            return i = k.getAbUserInfo(),
            {
                getUserId: function(a) {
                    return b(i && i.userId ? i.userId : null, a)
                },
                getUserInfoToken: function() {
                    return e() ? i.token : void 0
                },
                on: function(a, b) {
                    "login" === a && e() ? b({
                        user: {
                            userInfo: i
                        }
                    }) : "anonymous" !== a || e() || b()
                },
                isLoggedIn: function(a) {
                    return b(e(), a)
                },
                getUser: function(a) {
                    return b(i, a)
                },
                getFullName: function(a) {
                    var c = this.getUser();
                    return c || (c = {
                        name: !1
                    }),
                    b(c.name, a)
                },
                getSessionId: function(a) {
                    var b = i ? i.sessionId : null;
                    return "function" == typeof a ? a(b) : b
                },
                hasAccess: function(a, c) {
                    var d = this.getUser();
                    return b(e() && d && d.services && -1 !== d.services.indexOf(a), c)
                },
                getRecentOrderId: function() {
                    return !(!i || !i.latestSpidOrderId) && (k.deleteCookie("latestSpidOrderId"),
                    i.latestSpidOrderId)
                },
                getUniqueId: function(a) {
                    f(function(b, c) {
                        if (b && !c)
                            return a(void 0);
                        var e = d(c);
                        a(e)
                    })
                },
                getUserInfoAgeSeconds: function(a) {
                    return a && (i = k.getAbUserInfo()),
                    !!i && Math.round((new Date).valueOf() / 1e3) - i.time
                },
                getAbUserInfo: function() {
                    return i
                },
                getSpidUserInfo: f,
                getReturnPath: p.getReturnPath,
                login: p.login,
                logout: p.logout,
                mypage: p.mypage,
                getMyPageUrl: p.getMyPageUrl,
                getLogoutUrl: p.getLogoutUrl
            }
        }
        var i, j = c(1), k = c(12), l = [];
        a.exports = {
            create: h
        }
    }
    , function(a, b, c) {
        function d(a) {
            a.SPiD = a.SPiD || this,
            a.SPiD.Talk = c(11)
        }
        function e(a, b) {
            m.init(a),
            m.options().noGlobalExport || d.call(this, window),
            n = !0,
            b && b()
        }
        function f(a) {
            a = a || function() {}
            ;
            var b = this
              , c = function(a, b) {
                return !a && !!b.result || m.options().cache && m.options().cache.hasSession
            }
              , d = function(a) {
                return m.options().cache && m.options().cache.hasSession && m.options().cache.hasSession.ttlSeconds ? m.options().cache.hasSession.ttlSeconds : a.expiresIn
            }
              , e = p.makeAsync(function(b, c) {
                !b && c.result && t.tryVarnishCookie(c),
                r.session(o, c),
                o = c,
                a(b, c)
            })
              , f = function(a, b) {
                c(a, b) && s.set(b, d(b)),
                e(a, b)
            }
              , g = function(a, c) {
                if (a && "LoginException" === a.type)
                    return q.fire("SPiD.loginException"),
                    v.request(b.coreEndpoint(), null, {
                        autologin: 1
                    }, f);
                a && q.fire("SPiD.error", a),
                f(a, c)
            }
              , h = s.get();
            if (h)
                return e(null, h);
            v.request(this.sessionEndpoint(), null, {
                autologin: 1
            }, g)
        }
        function g(a, b) {
            if (b = p.makeAsync(b || function() {}
            ),
            u.enabled()) {
                var c = u.get("prd_{id}".replace("{id}", a));
                if (c && c.refreshed + m.options().refresh_timeout > p.now())
                    return b(null, c)
            }
            var d = function(c, d) {
                u.enabled() && !c && d.result && (d.refreshed = p.now(),
                u.set("prd_{id}".replace("{id}", a), d)),
                !c && d.result && q.fire("SPiD.hasProduct", {
                    productId: a,
                    result: d.result
                }),
                b(c, d)
            };
            v.request(this.server(), "ajax/hasproduct.js", {
                product_id: a
            }, d)
        }
        function h(a, b) {
            if (b = p.makeAsync(b || function() {}
            ),
            u.enabled()) {
                var c = u.get("sub_{id}".replace("{id}", a));
                if (c && c.refreshed + m.options().refresh_timeout > p.now())
                    return b(null, c)
            }
            var d = function(c, d) {
                u.enabled() && !c && d.result && (d.refreshed = p.now(),
                u.set("sub_{id}".replace("{id}", a), d)),
                !c && d.result && q.fire("SPiD.hasSubscription", {
                    subscriptionId: a,
                    result: d.result
                }),
                b(c, d)
            };
            v.request(this.server(), "ajax/hassubscription.js", {
                product_id: a
            }, d)
        }
        function i(a, b) {
            b = b || function() {}
            ,
            v.request(this.server(), "ajax/traits.js", {
                t: a
            }, b)
        }
        function j() {
            s.clear(),
            t.clearVarnishCookie()
        }
        function k(a) {
            var b = function(b, c) {
                c.result && j(),
                !b && c.result && q.fire("SPiD.logout", c),
                a && a(b, c)
            };
            v.request(this.server(), "ajax/logout.js", {}, b)
        }
        function l(a) {
            var b = this
              , c = function() {
                j(),
                b.hasSession(a)
            };
            v.request(this.server(), "ajax/acceptAgreement.js", {}, c)
        }
        var m = c(2)
          , n = !1
          , o = {}
          , p = c(3)
          , q = c(5)
          , r = c(6)
          , s = c(7)
          , t = c(9)
          , u = c(10)
          , v = c(11);
        p.makeAsync(function() {
            "function" != typeof window.asyncSPiD || window.asyncSPiD.hasRun || (window.asyncSPiD(),
            window.asyncSPiD.hasRun = !0)
        })(),
        a.exports = {
            version: function() {
                return "<%= pkg.version %>"
            },
            initiated: function() {
                return n
            },
            server: function() {
                return (m.options().https ? "https" : "http") + "://" + m.options().server + "/"
            },
            sessionEndpoint: function() {
                return (m.options().https ? "https" : "http") + "://" + (m.options().useSessionCluster ? "session." + m.options().server + "/rpc/hasSession.js" : m.options().server + "/ajax/hasSession.js")
            },
            coreEndpoint: function() {
                return (m.options().https ? "https" : "http") + "://" + m.options().server + "/ajax/hasSession.js"
            },
            acceptAgreement: l,
            event: q,
            sessionCache: s,
            init: e,
            hasSession: f,
            hasProduct: g,
            hasSubscription: h,
            setTraits: i,
            logout: k
        }
    }
    , function(a, b, c) {
        var d = {}
          , e = {
            server: null,
            client_id: null,
            cache: !1,
            logging: !1,
            useSessionCluster: !0,
            https: !0,
            setVarnishCookie: null,
            storage: "localstorage",
            timeout: 15e3,
            refresh_timeout: 9e5,
            varnish_expiration: null
        }
          , f = c(3);
        a.exports = {
            options: function() {
                return d
            },
            init: function(a) {
                if (d = f.copy(a, e),
                !d.server)
                    throw new TypeError("[SPiD] server parameter is required");
                if (!d.client_id)
                    throw new TypeError("[SPiD] client_id parameter is required");
                d.refresh_timeout <= 6e4 && (d.refresh_timeout = 6e4)
            },
            server: function() {
                return (d.https ? "https" : "http") + "://" + d.server + "/"
            }
        }
    }
    , function(a, b, c) {
        function d(a, b) {
            for (var c in b)
                void 0 === a[c] && (a[c] = b[c]);
            return a
        }
        function e() {
            return (new Date).getTime()
        }
        function f(a, b, c) {
            var d = [];
            for (var e in c)
                c[e] && d.push(e + "=" + c[e]);
            var f = a + (b || "") + "?" + d.join("&");
            return h.info("SPiD.Util.buildUri() built {u}".replace("{u}", f)),
            f
        }
        function g(a) {
            return function() {
                var b = arguments;
                setTimeout(function() {
                    a.apply(null, b)
                }, 0)
            }
        }
        var h = c(4);
        a.exports = {
            copy: d,
            now: e,
            buildUri: f,
            makeAsync: g
        }
    }
    , function(a, b, c) {
        function d() {
            var a = c(2);
            return !(!window.console || !a.options().logging && -1 === window.location.toString().indexOf("spid_debug=1"))
        }
        function e(a, b) {
            d() && window.console[b]("[SPiD] " + a)
        }
        function f(a) {
            e(a, "info")
        }
        function g(a) {
            e(a, "error")
        }
        a.exports = {
            enabled: d,
            info: f,
            error: g
        }
    }
    , function(a, b, c) {
        function d(a, b) {
            h.info("SPiD.Event.subscribe({n})".replace("{n}", a)),
            g[a] || (g[a] = []),
            g[a].push(b)
        }
        function e(a, b) {
            h.info("SPiD.Event.unsubscribe({n})".replace("{n}", a));
            for (var c = g[a] || [], d = 0, e = c.length; d !== e; d++)
                c[d] === b && (c[d] = null)
        }
        function f() {
            var a = Array.prototype.slice.call(arguments)
              , b = a.shift();
            h.info("SPiD.Event.fire({n})".replace("{n}", b));
            for (var c = g[b] || [], d = 0, e = c.length; d !== e; d++)
                c[d] && c[d].apply(this, a)
        }
        var g = {}
          , h = c(4);
        a.exports = {
            subscribe: d,
            unsubscribe: e,
            fire: f
        }
    }
    , function(a, b, c) {
        function d(a, b) {
            b.visitor && e.fire("SPiD.visitor", b.visitor),
            b.userId && a.userId !== b.userId && e.fire("SPiD.login", b),
            a.userId && !b.userId && e.fire("SPiD.logout", b),
            a.userId && b.userId && a.userId !== b.userId && e.fire("SPiD.userChange", b),
            (b.userId || a.userId) && e.fire("SPiD.sessionChange", b),
            b.userId || a.userId || e.fire("SPiD.notLoggedin", b),
            b.userId && !f && (f = !0,
            e.fire("SPiD.sessionInit", b)),
            b.userStatus !== g && (g = b.userStatus,
            e.fire("SPiD.statusChange", b))
        }
        var e = c(5)
          , f = !1
          , g = "unknown";
        a.exports = {
            session: d
        }
    }
    , function(a, b, c) {
        function d() {
            return {
                localstorage: c(8),
                cookie: c(9),
                standard: {
                    get: g,
                    set: g,
                    clear: g
                }
            }[f.options().storage || "standard"]
        }
        function e() {
            return "spid_js_" + f.options().client_id
        }
        var f = c(2)
          , g = function() {};
        a.exports = {
            get: function() {
                return d().get(e())
            },
            set: function(a, b) {
                return d().set(e(), a, b)
            },
            clear: function() {
                return d().clear(e())
            }
        }
    }
    , function(a, b, c) {
        function d(a) {
            return JSON.parse(a)
        }
        function e(a) {
            return JSON.stringify(a)
        }
        function f(a, b, c) {
            try {
                if (c) {
                    var d = new Date;
                    d.setTime(d.getTime() + 1e3 * c),
                    b._expires = d
                }
                window.localStorage.setItem(a, e(b))
            } catch (a) {
                j.info(a)
            }
        }
        function g(a) {
            try {
                window.localStorage.removeItem(a)
            } catch (a) {
                j.info(a)
            }
        }
        function h(a) {
            return !(!a || !a._expires) && new Date(a._expires).getTime() < (new Date).getTime()
        }
        function i(a) {
            try {
                var b = d(window.localStorage.getItem(a));
                return h(b) ? (g(a),
                null) : b
            } catch (a) {
                j.info(a)
            }
            return null
        }
        var j = c(4);
        a.exports = {
            set: f,
            get: i,
            clear: g,
            enabled: !0
        }
    }
    , function(a, b, c) {
        function d(a) {
            return JSON.parse(window.unescape(a))
        }
        function e(a) {
            return window.escape(JSON.stringify(a))
        }
        function f(a, b, c, d) {
            var e = new Date;
            e.setTime(e.getTime() + 1e3 * c);
            var f = "{n}={v}; expires={e}; path=/; domain=.{d}".replace("{n}", a).replace("{v}", b).replace("{e}", e.toUTCString()).replace("{d}", d);
            document.cookie = f
        }
        function g(a, b) {
            var c = b.varnish_expiration || a.expiresIn;
            f(n, a.sp_id, c, a.baseDomain),
            o.info("SPiD.Cookie.set({n})".replace("{n}", n))
        }
        function h(a) {
            var b = p.options();
            a.sp_id && (!0 === b.setVarnishCookie || "cookie" === b.storage && !1 !== b.setVarnishCookie) && g(a, b)
        }
        function i() {
            f(n, "", 0, m)
        }
        function j(a, b, c) {
            if (!b)
                return !1;
            m = b.baseDomain,
            f(a, e(b), c, m),
            o.info("SPiD.Cookie.set({n})".replace("{n}", a))
        }
        function k(a) {
            o.info("SPiD.Cookie.get()");
            var b = "; " + document.cookie
              , c = b.split("; " + a + "=")
              , e = 2 === c.length ? c.pop().split(";").shift() : null;
            if (e) {
                var f = d(e);
                return f.expiresIn = parseInt(f.expiresIn, 10),
                f.clientTime = parseInt(f.clientTime, 10),
                m = f.baseDomain,
                f
            }
            return null
        }
        function l(a) {
            o.info("SPiD.Cookie.clear()"),
            f(a, "", 0, m),
            i()
        }
        var m = document.domain
          , n = "SP_ID"
          , o = c(4)
          , p = c(2);
        a.exports = {
            decode: d,
            encode: e,
            set: j,
            tryVarnishCookie: h,
            clearVarnishCookie: i,
            get: k,
            clear: l,
            name: name
        }
    }
    , function(a, b, c) {
        function d(a) {
            return JSON.parse(window.unescape(a))
        }
        function e(a) {
            return window.escape(JSON.stringify(a))
        }
        function f() {
            return !!k.options().cache
        }
        function g(a, b) {
            f() && (j[a] = e(b))
        }
        function h(a) {
            if (f())
                return j[a] ? d(j[a]) : null
        }
        function i(a) {
            f() && j[a] && (j[a] = null)
        }
        var j = {}
          , k = c(2);
        a.exports = {
            decode: d,
            encode: e,
            enabled: f,
            set: g,
            get: h,
            clear: i
        }
    }
    , function(a, b, c) {
        function d() {
            return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
        }
        function e(a) {
            var b = d();
            return q[b] = function(b, c) {
                a(b, c)
            }
            ,
            b
        }
        function f(a, b) {
            r.push({
                id: a,
                url: b
            })
        }
        function g() {
            return null !== s
        }
        function h() {
            p && (p.parentNode.removeChild(p),
            p = null)
        }
        function i(a, b) {
            if (window.clearTimeout(s),
            s = null,
            h(),
            m(),
            q[a]) {
                var c = q[a];
                q[a] = null;
                c(b.error ? b.error : null, b.response ? b.response : b)
            }
        }
        function j(a, b) {
            u.error(a),
            i(b, {
                error: {
                    type: "communication",
                    code: 503,
                    description: a
                },
                response: {}
            })
        }
        function k(a) {
            p = document.createElement("SCRIPT"),
            p.src = a.url,
            p.type = "text/javascript",
            p.onerror = function() {
                j("Browser triggered error", a.id)
            }
            ,
            document.getElementsByTagName("HEAD")[0].appendChild(p)
        }
        function l(a) {
            var b = c(2).options();
            k(a),
            s = window.setTimeout(function() {
                j("Timeout reached", a.id)
            }, b.timeout)
        }
        function m() {
            if (!g() && r.length > 0) {
                l(r.shift())
            }
        }
        function n(a, b, c, d) {
            var g = e(d);
            c = c || {},
            c.callback = g,
            c.redirect_uri = t,
            c.client_id = w.options().client_id;
            var h = v.buildUri(a, b, c);
            u.info("Request: " + h),
            f(g, h),
            m()
        }
        function o(a, b) {
            u.info("Response received"),
            i(a, b)
        }
        var p, q = {}, r = [], s = null, t = encodeURIComponent(window.location.toString()), u = c(4), v = c(3), w = c(2);
        a.exports = {
            request: n,
            response: o
        }
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            var b, c, d, e = {}, f = 0, g = 0, h = "", i = String.fromCharCode, j = a.length;
            for (b = 0; 64 > b; b++)
                e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
            for (c = 0; c < j; c++)
                for (b = e[a.charAt(c)],
                f = (f << 6) + b,
                g += 6; 8 <= g; )
                    ((d = f >>> (g -= 8) & 255) || c < j - 2) && (h += i(d));
            return h
        }
        function d() {
            if (i)
                return i;
            var a = {};
            return document.cookie.split(";").forEach(function(b) {
                var c = b.split("=");
                a[c[0].trim()] = c.slice(1).join("=")
            }),
            a
        }
        function e(a) {
            var b = c(decodeURIComponent(a));
            try {
                return window.JSON.parse(b)
            } catch (a) {
                return b
            }
        }
        function f(a, b) {
            var c = a.userInfo.split(".");
            if (c.length > 1) {
                var d = e(c[1]);
                return d.token = a.userInfo,
                d.sessionId = a.sessionId,
                d.latestSpidOrderId = a.latestSpidOrderId,
                d.hasLoginCookies = b,
                d
            }
            return null
        }
        var g = "spidForceLoginStatusRefresh"
          , h = ".aftonbladet.se"
          , i = null;
        a.exports = {
            init: function(a) {
                h = !0 === a ? "" : "domain= " + h + ";"
            },
            getAbUserInfo: function() {
                var a = d()
                  , b = !!a.userInfo && !!a.sessionId;
                return b ? f(a, b) : null
            },
            deleteCookie: function(a) {
                document.cookie = a + "=; path=/;" + h + " expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            },
            shouldForceReload: function() {
                return !!d()[g]
            },
            deleteForceReloadCookie: function() {
                this.deleteCookie(g)
            }
        }
    }
    , function(a, b) {
        var c = window;
        a.exports = function(a, b) {
            function d(a) {
                function b() {
                    var b = new RegExp("[\\?&]" + d + "([^&#]*)")
                      , e = b.exec(c.location.href);
                    a = null !== e && "" !== e[1] ? e[1] : c.location.href
                }
                var d = "returnPath=";
                return a || b(),
                a = decodeURIComponent(a.replace(/[?|&]teaser=true/, "")),
                a.indexOf("#") > -1 && (a = a.substring(0, a.indexOf("#"))),
                d + encodeURIComponent(a)
            }
            var e = a + "/account"
              , f = a + "/logout"
              , g = a + "/login";
            return {
                login: function(a, b) {
                    c.location.href = g + "?" + (a ? "tag=" + encodeURIComponent(a) + "&" : "") + d(b)
                },
                logout: function(a) {
                    a && (b.deleteCookie("userInfo"),
                    b.deleteCookie("sessionId")),
                    c.location.href = this.getLogoutUrl()
                },
                mypage: function() {
                    c.location.href = this.getMyPageUrl()
                },
                getReturnPath: d,
                getMyPageUrl: function() {
                    return e + "?" + d()
                },
                getLogoutUrl: function() {
                    return f + "?" + d()
                }
            }
        }
    }
    ])
}),
define("fuse-config", ["user-params"], function(a) {
    "use strict";
    function b() {
        var b = a.userServer || "https://login.aftonbladet.se/v2";
        return {
            userServer: b,
            spidClientId: b.indexOf("https://login.aftonbladet.se") > -1 ? "4f1692bb9daf7cd367000001" : "4e8463569caf7ca019000007",
            useSpidJs: a.useSpidJs
        }
    }
    return {
        get: b
    }
}),
define("fuse", ["fuse-factory", "fuse-config"], function(a, b) {
    "use strict";
    return a.create(b.get())
}),
define("single-signon-handler", ["fuse", "win", "app-detector", "doc"], function(a, b, c, d) {
    "use strict";
    function e(b, c) {
        !b.clientAgreementAccepted || c || g() || (f(),
        a.login("auto-login"))
    }
    function f() {
        d.cookie = "loginAttempt=true; path=/;"
    }
    function g() {
        var a, b = d.cookie.match(new RegExp("loginAttempt=([^;]+)"));
        if (b)
            return a = b[1],
            decodeURIComponent(a)
    }
    function h() {
        d.cookie = "loginAttempt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }
    function i(a) {
        d.location.search.indexOf("dev=true") >= 0 && b.console.log(a)
    }
    function j() {
        var d = a.getAbUserInfo();
        a.getSpidUserInfo(function(a, f) {
            !c.isApp() && b.console && (d ? (i("[FUSE] Logged in to Aftonbladet with user id: " + d.userId),
            h()) : i("[FUSE] Not logged in to Aftonbladet"),
            f && f.result ? (i("[FUSE] Logged in to SPID with user id: " + f.userId),
            e(f, d)) : f ? i("[FUSE] Logged in to SPID, but session not valid for aftonbladet", f) : i("[FUSE] Not logged in to SPID"))
        })
    }
    return {
        init: j
    }
}),
define("ab-desktop-abse", ["win", "ab-desktop-ad-events", "ab-desktop-adloader", "ab-desktop-ad-traffic-api"], function(a, b, c, d) {
    "use strict";
    var e = a.ABse || {};
    return e.ad = e.ad || {},
    b && (e.ad.fire = b.fire),
    c && (e.ad.initAd = c.initAd,
    e.ad.registerArea = c.initAd,
    e.ad.reload = c.reload),
    d && (e.ad.DestroyOutsiderSticky = d.DestroyOutsiderSticky,
    e.ad.SetBigBangTheme = d.SetBigBangTheme,
    e.ad.InitOutsiderSticky = d.InitOutsiderSticky,
    e.ad.InitWideOutsider = d.InitWideOutsider,
    e.ad.MegaHasBeenDisplayed = d.MegaHasBeenDisplayed),
    e
}),
define("mini-template", [], function() {
    "use strict";
    return function(a) {
        return function(b) {
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = new RegExp("{{" + c + "}}","g");
                    a = a.replace(d, b[c])
                }
            try {
                var e = require("page");
                return e && e.siteName && "DESKTOP" !== e.siteName.toUpperCase() ? a : void 0 === window.jQuery ? a : window.jQuery(a)
            } catch (a) {
                console.log("err in minitemplate", a)
            }
        }
    }
}),
function() {
    "use strict";
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = (new Date).getTime()
          , d = Math.max(0, 16 - (c - a))
          , e = window.setTimeout(function() {
            b(c + d)
        }, d);
        return a = c + d,
        e
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }
    )
}(),
function(a) {
    "use strict";
    function b(a, b) {
        function c(g) {
            if (!1 !== e) {
                window.requestAnimationFrame(c);
                var h = g - f;
                0 <= h && h < d && (e = a(h)),
                f = g
            } else
                "function" == typeof b && b()
        }
        var e, f = (new Date).getTime();
        c(f)
    }
    function c(a, c, d) {
        var e = a;
        b(function(a) {
            e -= a;
            var b = e < a;
            return c(a, b),
            !b
        }, d)
    }
    var d = 160
      , e = {
        animate: function(a, d, e) {
            "number" != typeof a ? (e = d,
            d = a,
            b(d, e)) : c(a, d, e)
        }
    }
      , f = a.define;
    f && f.amd ? f("animation", [], function() {
        return e
    }) : a.ABse.Animation = e
}(window),
define("postMessage/framework", ["win"], function(a) {
    "use strict";
    function b(a) {
        for (var b = document.getElementsByTagName("iframe"), c = 0, d = b.length; c < d; ++c)
            if (a === b[c].contentWindow)
                return b[c];
        return null
    }
    function c(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a === b[c])
                return !0;
        return !1
    }
    function d(a, c) {
        var d = function(b) {
            var d = {
                replyTo: c.data,
                result: b
            };
            if (c.useJSON)
                try {
                    d = l.stringify(d)
                } catch (a) {}
            a.source.postMessage(d, a.origin)
        };
        return d.getIframe = function() {
            return b(a.source)
        }
        ,
        d
    }
    function e(a) {
        var b;
        for (var c in k)
            if (k.hasOwnProperty(c) && (b = k[c].api) && b[a] && "function" == typeof b[a])
                return c;
        return null
    }
    function f(a) {
        var b = a.data
          , c = !1;
        if ("string" == typeof b && b.indexOf("{") >= 0)
            try {
                b = l.parse(b),
                c = !0
            } catch (a) {
                c = !1
            }
        if (b && b.command)
            return {
                useJSON: c,
                data: b
            };
        throw {
            severity: "debug",
            message: ["Skipping unknown `message`-event"]
        }
    }
    function g(a) {
        function b(b, c) {
            if (!b || !c)
                throw {
                    severity: "info",
                    message: "Unable to find handler for command `" + a + "`."
                };
            if (!k[b])
                throw {
                    severity: "info",
                    message: "Unable to find API `" + b + "` for command `" + a + "`."
                };
            if (!k[b].api[c])
                throw {
                    severity: "info",
                    message: "API `" + b + "` does not have a method called `" + c + "`."
                }
        }
        var c, d, f = a.split(".");
        return 1 === f.length ? (c = e(a),
        d = a) : (c = f[0],
        d = f[1]),
        b(c, d),
        {
            origins: k[c].origins,
            api: k[c].api,
            apiName: c,
            method: k[c].api[d],
            methodName: d
        }
    }
    function h(a, b) {
        if (!c(b.origin, a.origins))
            throw {
                severity: "warn",
                message: "Got untrusted message `" + a.apiName + "." + a.methodName + "` from `" + b.origin + "`"
            };
        return !0
    }
    function i(a) {
        var b, c, e;
        b = f(a),
        c = b.data,
        e = g(c.command),
        h(e, a),
        e.method.apply(e.api, [d(a, b), c, a.source])
    }
    function j(a) {
        try {
            i(a)
        } catch (a) {}
    }
    var k = {}
      , l = a.JSON;
    return a.addEventListener ? a.addEventListener("message", j, !1) : a.attachEvent && a.attachEvent("onmessage", j),
    {
        register: function(a, b, c) {
            var d = k[a];
            d || (k[a] = {},
            d = k[a],
            d.origins = []),
            c && (d.api = c),
            d.origins = d.origins.concat(b)
        },
        unregister: function(a) {
            delete k[a]
        },
        getAllowedOrigins: function(a) {
            return k[a] ? k[a].origins : []
        },
        _handleMessage: i,
        _parseMessage: f,
        _parseCommand: g,
        _assertTrust: h
    }
}),
define("postMessage/iframe", ["postMessage/framework", "postMessageOrigins", "animation", "page", "app-detector"], function(a, b, c, d, e) {
    "use strict";
    function f(a, b) {
        a(e.isApp() ? "app" : b)
    }
    function g(a) {
        var b = 0
          , c = 0;
        if (a.offsetParent) {
            do {
                b += a.offsetLeft,
                c += a.offsetTop,
                a = a.offsetParent
            } while (a);return {
                x: b,
                y: c
            }
        }
        return null
    }
    var h = {
        resize: function(a, b) {
            var c = a.getIframe();
            c ? (c.style.height = b.height + "px",
            a(!0)) : a(!1)
        },
        context: function(a) {
            var b = d.siteName.toLowerCase();
            "desktop" === b ? a("web") : f(a, b)
        },
        share: function(a, b) {
            var c = (b.network || "").toLowerCase();
            if (!c)
                return a(!1);
            e.isApp() ? (b.title && (document.title = b.title),
            require(["app-message"], function(a) {
                a.createAndPushMessage("share", c)
            }),
            a(!0)) : a(!1)
        },
        location: function(a) {
            a(window.location.href)
        },
        playVideoNatively: function(a, b, c) {
            if (e.isApp()) {
                require("postMessage/native-player").setIframe(c),
                window.ABAppBridge.playVideo(JSON.stringify(b.videoData))
            }
        },
        play360VideoNatively: function(a, b, c) {
            if (e.isApp()) {
                var d = window.ABAppBridge && window.ABAppBridge.play360Video;
                if ("function" == typeof d) {
                    require("postMessage/native-player").setIframe(c),
                    d(JSON.stringify(b.videoData))
                }
            }
        },
        scrollIntoView: function() {
            function a(a, b, d, e) {
                var f = (b - a) / d;
                c.animate(d, function(a, c) {
                    var d = f * a;
                    c ? window.scrollTo(0, b) : window.scrollBy(0, d)
                }, e)
            }
            function b() {
                return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            }
            return function(c) {
                var d = c.getIframe();
                if (!d)
                    return c(!1);
                var f = g(d);
                if (e.isApp()) {
                    require("app-message").createAndPushMessage("scroll-to", f.y),
                    c(!0)
                } else if (window.scrollTo) {
                    var h = b();
                    f && h >= 0 && a(h, f.y - 50, 200),
                    c(!0)
                } else
                    c(!1)
            }
        }()
    };
    return a.register("iframe", b.iframe, h),
    h
}),
define("postMessage/user", ["postMessage/framework", "fuse", "postMessageOrigins"], function(a, b, c) {
    "use strict";
    var d = {
        isLoggedIn: function(a) {
            b.isLoggedIn(a)
        },
        login: function(a, c) {
            b.isLoggedIn(function(d) {
                d ? a("Already logged in") : b.login(c.service)
            })
        },
        hasPlus: function(a) {
            b.hasAccess("plus", a)
        },
        hasS24: function(a) {
            b.hasAccess("S24", a)
        },
        getUser: function(a) {
            b.getUser(a)
        }
    };
    return a.register("user", c.user, d),
    d
}),
function(a) {
    window.pym = a.call(this)
}(function() {
    var a = "xPYMx"
      , b = {}
      , c = function(a) {
        var b = new RegExp("[\\?&]" + a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)")
          , c = b.exec(location.search);
        return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
    }
      , d = function(a, b) {
        if ("*" === b.xdomain || a.origin.match(new RegExp(b.xdomain + "$")))
            return !0
    }
      , e = function(b, c, d) {
        return ["pym", b, c, d].join(a)
    }
      , f = function(b) {
        var c = ["pym", b, "(\\S+)", "(.*)"];
        return new RegExp("^" + c.join(a) + "$")
    }
      , g = function() {
        for (var a = b.autoInitInstances.length, c = a - 1; c >= 0; c--) {
            var d = b.autoInitInstances[c];
            d.el.getElementsByTagName("iframe").length && d.el.getElementsByTagName("iframe")[0].contentWindow || b.autoInitInstances.splice(c, 1)
        }
    };
    return b.autoInitInstances = [],
    b.autoInit = function() {
        var a = document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])")
          , c = a.length;
        g();
        for (var d = 0; d < c; ++d) {
            var e = a[d];
            e.setAttribute("data-pym-auto-initialized", ""),
            "" === e.id && (e.id = "pym-" + d);
            var f = e.getAttribute("data-pym-src")
              , h = {
                xdomain: "string",
                title: "string",
                name: "string",
                id: "string",
                sandbox: "string",
                allowfullscreen: "boolean"
            }
              , i = {};
            for (var j in h)
                if (null !== e.getAttribute("data-pym-" + j))
                    switch (h[j]) {
                    case "boolean":
                        i[j] = !("false" === e.getAttribute("data-pym-" + j));
                        break;
                    case "string":
                        i[j] = e.getAttribute("data-pym-" + j);
                        break;
                    default:
                        console.err("unrecognized attribute type")
                    }
            var k = new b.Parent(e.id,f,i);
            b.autoInitInstances.push(k)
        }
        return b.autoInitInstances
    }
    ,
    b.Parent = function(a, b, c) {
        this.id = a,
        this.url = b,
        this.el = document.getElementById(a),
        this.iframe = null,
        this.settings = {
            xdomain: "*"
        },
        this.messageRegex = f(this.id),
        this.messageHandlers = {},
        c = c || {},
        this._constructIframe = function() {
            var a = this.el.offsetWidth.toString();
            this.iframe = document.createElement("iframe");
            var b = ""
              , c = this.url.indexOf("#");
            for (c > -1 && (b = this.url.substring(c, this.url.length),
            this.url = this.url.substring(0, c)),
            this.url.indexOf("?") < 0 ? this.url += "?" : this.url += "&",
            this.iframe.src = this.url + "initialWidth=" + a + "&childId=" + this.id + "&parentTitle=" + encodeURIComponent(document.title) + "&parentUrl=" + encodeURIComponent(window.location.href) + b,
            this.iframe.setAttribute("width", "100%"),
            this.iframe.setAttribute("scrolling", "no"),
            this.iframe.setAttribute("marginheight", "0"),
            this.iframe.setAttribute("frameborder", "0"),
            this.settings.title && this.iframe.setAttribute("title", this.settings.title),
            void 0 !== this.settings.allowfullscreen && !1 !== this.settings.allowfullscreen && this.iframe.setAttribute("allowfullscreen", ""),
            void 0 !== this.settings.sandbox && "string" == typeof this.settings.sandbox && this.iframe.setAttribute("sandbox", this.settings.sandbox),
            this.settings.id && (document.getElementById(this.settings.id) || this.iframe.setAttribute("id", this.settings.id)),
            this.settings.name && this.iframe.setAttribute("name", this.settings.name); this.el.firstChild; )
                this.el.removeChild(this.el.firstChild);
            this.el.appendChild(this.iframe),
            window.addEventListener("resize", this._onResize)
        }
        ,
        this._onResize = function() {
            this.sendWidth()
        }
        .bind(this),
        this._fire = function(a, b) {
            if (a in this.messageHandlers)
                for (var c = 0; c < this.messageHandlers[a].length; c++)
                    this.messageHandlers[a][c].call(this, b)
        }
        ,
        this.remove = function() {
            window.removeEventListener("message", this._processMessage),
            window.removeEventListener("resize", this._onResize),
            this.el.removeChild(this.iframe),
            g()
        }
        ,
        this._processMessage = function(a) {
            if (d(a, this.settings) && "string" == typeof a.data) {
                var b = a.data.match(this.messageRegex);
                if (!b || 3 !== b.length)
                    return !1;
                var c = b[1]
                  , e = b[2];
                this._fire(c, e)
            }
        }
        .bind(this),
        this._onHeightMessage = function(a) {
            var b = parseInt(a);
            this.iframe.setAttribute("height", b + "px")
        }
        ,
        this._onNavigateToMessage = function(a) {
            document.location.href = a
        }
        ,
        this._onScrollToChildPosMessage = function(a) {
            var b = document.getElementById(this.id).getBoundingClientRect().top + window.pageYOffset
              , c = b + parseInt(a);
            window.scrollTo(0, c)
        }
        ,
        this.onMessage = function(a, b) {
            a in this.messageHandlers || (this.messageHandlers[a] = []),
            this.messageHandlers[a].push(b)
        }
        ,
        this.sendMessage = function(a, b) {
            this.el.getElementsByTagName("iframe").length && (this.el.getElementsByTagName("iframe")[0].contentWindow ? this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(e(this.id, a, b), "*") : this.remove())
        }
        ,
        this.sendWidth = function() {
            var a = this.el.offsetWidth.toString();
            this.sendMessage("width", a)
        }
        ;
        for (var h in c)
            this.settings[h] = c[h];
        return this.onMessage("height", this._onHeightMessage),
        this.onMessage("navigateTo", this._onNavigateToMessage),
        this.onMessage("scrollToChildPos", this._onScrollToChildPosMessage),
        window.addEventListener("message", this._processMessage, !1),
        this._constructIframe(),
        this
    }
    ,
    b.Child = function(b) {
        this.parentWidth = null,
        this.id = null,
        this.parentTitle = null,
        this.parentUrl = null,
        this.settings = {
            renderCallback: null,
            xdomain: "*",
            polling: 0
        },
        this.timerId = null,
        this.messageRegex = null,
        this.messageHandlers = {},
        b = b || {},
        this.onMessage = function(a, b) {
            a in this.messageHandlers || (this.messageHandlers[a] = []),
            this.messageHandlers[a].push(b)
        }
        ,
        this._fire = function(a, b) {
            if (a in this.messageHandlers)
                for (var c = 0; c < this.messageHandlers[a].length; c++)
                    this.messageHandlers[a][c].call(this, b)
        }
        ,
        this._processMessage = function(a) {
            if (d(a, this.settings) && "string" == typeof a.data) {
                var b = a.data.match(this.messageRegex);
                if (b && 3 === b.length) {
                    var c = b[1]
                      , e = b[2];
                    this._fire(c, e)
                }
            }
        }
        .bind(this),
        this._onWidthMessage = function(a) {
            var b = parseInt(a);
            b !== this.parentWidth && (this.parentWidth = b,
            this.settings.renderCallback && this.settings.renderCallback(b),
            this.sendHeight())
        }
        ,
        this.sendMessage = function(a, b) {
            window.parent.postMessage(e(this.id, a, b), "*")
        }
        ,
        this.sendHeight = function() {
            var a = document.getElementsByTagName("body")[0].offsetHeight.toString();
            return this.sendMessage("height", a),
            a
        }
        .bind(this),
        this.scrollParentTo = function(a) {
            this.sendMessage("navigateTo", "#" + a)
        }
        ,
        this.navigateParentTo = function(a) {
            this.sendMessage("navigateTo", a)
        }
        ,
        this.scrollParentToChildEl = function(a) {
            var b = document.getElementById(a).getBoundingClientRect().top + window.pageYOffset;
            this.scrollParentToChildPos(b)
        }
        ,
        this.scrollParentToChildPos = function(a) {
            this.sendMessage("scrollToChildPos", a.toString())
        }
        ,
        this._markWhetherEmbedded = function(a) {
            var b, c = document.getElementsByTagName("html")[0], d = c.className;
            try {
                b = window.self !== window.top ? "embedded" : "not-embedded"
            } catch (a) {
                b = "embedded"
            }
            d.indexOf(b) < 0 && (c.className = d + b,
            a && a(b))
        }
        ,
        this.remove = function() {
            window.removeEventListener("message", this._processMessage),
            this.timerId && clearInterval(this.timerId)
        }
        ,
        this.id = c("childId") || b.id,
        this.messageRegex = new RegExp("^pym" + a + this.id + a + "(\\S+)" + a + "(.*)$");
        var f = parseInt(c("initialWidth"));
        this.parentUrl = c("parentUrl"),
        this.parentTitle = c("parentTitle"),
        this.onMessage("width", this._onWidthMessage);
        for (var g in b)
            this.settings[g] = b[g];
        return window.addEventListener("message", this._processMessage, !1),
        this.settings.renderCallback && this.settings.renderCallback(f),
        this.sendHeight(),
        this.settings.polling && (this.timerId = window.setInterval(this.sendHeight, this.settings.polling)),
        this._markWhetherEmbedded(b.onMarkedEmbeddedStatus),
        this
    }
    ,
    b.autoInit(),
    b
}),
define("handlebars", [], function() {
    return function() {
        var a = function() {
            "use strict";
            function a(a) {
                this.string = a
            }
            return a.prototype.toString = function() {
                return "" + this.string
            }
            ,
            a
        }()
          , b = function(a) {
            "use strict";
            function b(a) {
                return h[a] || "&amp;"
            }
            function c(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            function d(a) {
                return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a,
                j.test(a) ? a.replace(i, b) : a) : ""
            }
            function e(a) {
                return !a && 0 !== a || !(!m(a) || 0 !== a.length)
            }
            var f = {}
              , g = a
              , h = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }
              , i = /[&<>"'`]/g
              , j = /[&<>"'`]/;
            f.extend = c;
            var k = Object.prototype.toString;
            f.toString = k;
            var l = function(a) {
                return "function" == typeof a
            };
            l(/x/) && (l = function(a) {
                return "function" == typeof a && "[object Function]" === k.call(a)
            }
            );
            var l;
            f.isFunction = l;
            var m = Array.isArray || function(a) {
                return !(!a || "object" != typeof a) && "[object Array]" === k.call(a)
            }
            ;
            return f.isArray = m,
            f.escapeExpression = d,
            f.isEmpty = e,
            f
        }(a)
          , c = function() {
            "use strict";
            function a(a, c) {
                var d;
                c && c.firstLine && (d = c.firstLine,
                a += " - " + d + ":" + c.firstColumn);
                for (var e = Error.prototype.constructor.call(this, a), f = 0; f < b.length; f++)
                    this[b[f]] = e[b[f]];
                d && (this.lineNumber = d,
                this.column = c.firstColumn)
            }
            var b = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return a.prototype = new Error,
            a
        }()
          , d = function(a, b) {
            "use strict";
            function c(a, b) {
                this.helpers = a || {},
                this.partials = b || {},
                d(this)
            }
            function d(a) {
                a.registerHelper("helperMissing", function(a) {
                    if (2 !== arguments.length)
                        throw new h("Missing helper: '" + a + "'")
                }),
                a.registerHelper("blockHelperMissing", function(b, c) {
                    var d = c.inverse || function() {}
                      , e = c.fn;
                    return k(b) && (b = b.call(this)),
                    !0 === b ? e(this) : !1 === b || null == b ? d(this) : j(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
                }),
                a.registerHelper("each", function(a, b) {
                    var c, d = b.fn, e = b.inverse, f = 0, g = "";
                    if (k(a) && (a = a.call(this)),
                    b.data && (c = o(b.data)),
                    a && "object" == typeof a)
                        if (j(a))
                            for (var h = a.length; f < h; f++)
                                c && (c.index = f,
                                c.first = 0 === f,
                                c.last = f === a.length - 1),
                                g += d(a[f], {
                                    data: c
                                });
                        else
                            for (var i in a)
                                a.hasOwnProperty(i) && (c && (c.key = i,
                                c.index = f,
                                c.first = 0 === f),
                                g += d(a[i], {
                                    data: c
                                }),
                                f++);
                    return 0 === f && (g = e(this)),
                    g
                }),
                a.registerHelper("if", function(a, b) {
                    return k(a) && (a = a.call(this)),
                    !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
                }),
                a.registerHelper("unless", function(b, c) {
                    return a.helpers.if.call(this, b, {
                        fn: c.inverse,
                        inverse: c.fn,
                        hash: c.hash
                    })
                }),
                a.registerHelper("with", function(a, b) {
                    if (k(a) && (a = a.call(this)),
                    !g.isEmpty(a))
                        return b.fn(a)
                }),
                a.registerHelper("log", function(b, c) {
                    var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                    a.log(d, b)
                })
            }
            function e(a, b) {
                n.log(a, b)
            }
            var f = {}
              , g = a
              , h = b;
            f.VERSION = "1.3.0",
            f.COMPILER_REVISION = 4;
            var i = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            f.REVISION_CHANGES = i;
            var j = g.isArray
              , k = g.isFunction
              , l = g.toString
              , m = "[object Object]";
            f.HandlebarsEnvironment = c,
            c.prototype = {
                constructor: c,
                logger: n,
                log: e,
                registerHelper: function(a, b, c) {
                    if (l.call(a) === m) {
                        if (c || b)
                            throw new h("Arg not supported with multiple helpers");
                        g.extend(this.helpers, a)
                    } else
                        c && (b.not = c),
                        this.helpers[a] = b
                },
                registerPartial: function(a, b) {
                    l.call(a) === m ? g.extend(this.partials, a) : this.partials[a] = b
                }
            };
            var n = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(a, b) {
                    if (n.level <= a) {
                        var c = n.methodMap[a];
                        "undefined" != typeof console && console[c] && console[c].call(console, b)
                    }
                }
            };
            f.logger = n,
            f.log = e;
            var o = function(a) {
                var b = {};
                return g.extend(b, a),
                b
            };
            return f.createFrame = o,
            f
        }(b, c)
          , e = function(a, b, c) {
            "use strict";
            function d(a) {
                var b = a && a[0] || 1
                  , c = m;
                if (b !== c) {
                    if (b < c) {
                        var d = n[c]
                          , e = n[b];
                        throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                    }
                    throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                }
            }
            function e(a, b) {
                if (!b)
                    throw new l("No environment passed to template");
                var c = function(a, c, d, e, f, g) {
                    var h = b.VM.invokePartial.apply(this, arguments);
                    if (null != h)
                        return h;
                    if (b.compile) {
                        var i = {
                            helpers: e,
                            partials: f,
                            data: g
                        };
                        return f[c] = b.compile(a, {
                            data: void 0 !== g
                        }, b),
                        f[c](d, i)
                    }
                    throw new l("The partial " + c + " could not be compiled when running in runtime-only mode")
                }
                  , d = {
                    escapeExpression: k.escapeExpression,
                    invokePartial: c,
                    programs: [],
                    program: function(a, b, c) {
                        var d = this.programs[a];
                        return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)),
                        d
                    },
                    merge: function(a, b) {
                        var c = a || b;
                        return a && b && a !== b && (c = {},
                        k.extend(c, b),
                        k.extend(c, a)),
                        c
                    },
                    programWithDepth: b.VM.programWithDepth,
                    noop: b.VM.noop,
                    compilerInfo: null
                };
                return function(c, e) {
                    e = e || {};
                    var f, g, h = e.partial ? e : b;
                    e.partial || (f = e.helpers,
                    g = e.partials);
                    var i = a.call(d, h, c, f, g, e.data);
                    return e.partial || b.VM.checkRevision(d.compilerInfo),
                    i
                }
            }
            function f(a, b, c) {
                var d = Array.prototype.slice.call(arguments, 3)
                  , e = function(a, e) {
                    return e = e || {},
                    b.apply(this, [a, e.data || c].concat(d))
                };
                return e.program = a,
                e.depth = d.length,
                e
            }
            function g(a, b, c) {
                var d = function(a, d) {
                    return d = d || {},
                    b(a, d.data || c)
                };
                return d.program = a,
                d.depth = 0,
                d
            }
            function h(a, b, c, d, e, f) {
                var g = {
                    partial: !0,
                    helpers: d,
                    partials: e,
                    data: f
                };
                if (void 0 === a)
                    throw new l("The partial " + b + " could not be found");
                if (a instanceof Function)
                    return a(c, g)
            }
            function i() {
                return ""
            }
            var j = {}
              , k = a
              , l = b
              , m = c.COMPILER_REVISION
              , n = c.REVISION_CHANGES;
            return j.checkRevision = d,
            j.template = e,
            j.programWithDepth = f,
            j.program = g,
            j.invokePartial = h,
            j.noop = i,
            j
        }(b, c, d);
        return function(a, b, c, d, e) {
            "use strict";
            var f = a
              , g = b
              , h = c
              , i = d
              , j = e
              , k = function() {
                var a = new f.HandlebarsEnvironment;
                return i.extend(a, f),
                a.SafeString = g,
                a.Exception = h,
                a.Utils = i,
                a.VM = j,
                a.template = function(b) {
                    return j.template(b, a)
                }
                ,
                a
            }
              , l = k();
            return l.create = k,
            l
        }(d, a, c, b, e)
    }()
}),
define("handlebars.helpers", ["handlebars", "util"], function(a, b) {
    "use strict";
    return a.registerHelper("if-gt", function(a, b, c) {
        return a > b ? c.fn(this) : c.inverse(this)
    }),
    a.registerHelper("if-gte", function(a, b, c) {
        return a >= b ? c.fn(this) : c.inverse(this)
    }),
    a.registerHelper("if-lt", function(a, b, c) {
        return a < b ? c.fn(this) : c.inverse(this)
    }),
    a.registerHelper("if-lte", function(a, b, c) {
        return a <= b ? c.fn(this) : c.inverse(this)
    }),
    a.registerHelper("if-even", function(a, b) {
        return a % 2 == 0 ? b.fn(this) : b.inverse(this)
    }),
    a.registerHelper("pick", function(a, b, c, d) {
        if (a && a.length)
            for (var e = 0, f = a.length; e < f; e++)
                if ("" + a[e][b] == "" + c)
                    return d.fn(a[e]);
        return d.inverse()
    }),
    a.registerHelper("prefix", function(b) {
        function c(a) {
            return a === e
        }
        var d = ["TV", "TV+TEXT", "LIVE-TV", "LIVE-TV+TEXT", "LIVE", "LIVE+TEXT", "GRAFIK", "PODCAST", "KARTA", "TIPSA!"];
        if (!b)
            return new a.SafeString('<span class="abPfxPrimary abIconArrow"></span>');
        var e = a.Utils.escapeExpression(b.toUpperCase());
        return d.some(c) ? new a.SafeString('<span class="abPfxOuter"><span class="abPfxBg">' + e + "</span></span>") : new a.SafeString('<span class="abPfxPrimary">' + e + "</span>")
    }),
    a.registerHelper("strip-paragraphs", function(b) {
        return b ? new a.SafeString(b.replace(/<\/?(?:a|p)[^>]*>/g, " ").replace(/(?:É|&Eacute;)/, "…")) : ""
    }),
    a.registerHelper("two-column", function(a, b) {
        var c = ""
          , d = a.length;
        d % 2 != 0 && (c += b.inverse(a.shift()),
        d = a.length);
        for (var e = 0; e < d; e++)
            c += e % 2 == 0 ? '<div class="abEqualRow"><div class="abEqualMd50 abLefty">' + b.fn(a[e]) + "</div>" : '<div class="abEqualMd50 abRighty">' + b.fn(a[e]) + "</div></div>";
        return c
    }),
    a.registerHelper("limitText", function(c, d, e) {
        return new a.SafeString(b.limitText(a.Utils.escapeExpression(c), d, e))
    }),
    a.registerHelper("omniTeaserImage", function(a, b) {
        return a.indexOf("omni-cdn") >= 0 || a.indexOf("imgs.aftonbladet-cdn") >= 0 ? a + "?w=" + b : a
    }),
    a.registerHelper("localnewsPositionButton", function(b) {
        var c = [];
        switch (b) {
        case "loading":
        case "on":
            c.push("ab-active")
        }
        var d = ['<div class="ab-localnews-currentlocation abjs-localnews-currentlocation', c.length ? " " + c.join(" ") : "", '">', '<div class="abBtn abBtnBlock abThemeBg">', '<span class="abIconLocation"></span> <span class="abjs-localnews-currentlocation-text">Använd nuvarande position</span>', "</div>", "</div>"];
        return new a.SafeString(d.join(""))
    }),
    a.registerHelper("locality-listing", function(b, c) {
        var d = b.length
          , e = c.hash.rowClass || "abTable"
          , f = c.hash.leftItemClass || "abTableCell abTableCellLeft"
          , g = c.hash.rightItemClass || "abTableCell abTableCellRight"
          , h = c.hash.lastItemClass || "abTableCell abTableCellRight abTableCellAlignTop"
          , i = b.map(function(a, b) {
            var i, j = b % 2 == 0, k = b === d - 1;
            return i = j ? '<div class="' + e + '"><div class="' + f + '">' : '<div class="' + g + '">',
            i += c.fn(a),
            j ? (i += "</div>",
            k && (i += '<div class="' + h + '"><div class="abBorderTop"></div></div></div>')) : i += "</div></div>",
            i
        }).join("");
        return new a.SafeString(i)
    }),
    a.registerHelper("path", function() {
        return Array.prototype.slice.apply(arguments, [0, arguments.length - 1]).filter(function(a) {
            return !!a
        }).map(function(a) {
            return String(a)
        }).map(function(a) {
            return "/" === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a
        }).join("/")
    }),
    a
}),
define("handlebars.templates", ["handlebars.helpers"], function(a, b) {
    this.ABse = this.ABse || {},
    this.ABse.template = this.ABse.template || {},
    this.ABse.template.localnews = this.ABse.template.localnews || {},
    this.ABse = this.ABse || {},
    this.ABse = this.ABse || {},
    this.ABse.template = this.ABse.template || {},
    this.ABse.template["omni-teaser"] = this.ABse.template["omni-teaser"] || {},
    a.registerPartial("shared/localnews/configuration-prompt", a.template(function(a, b, c, d, e) {
        return this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {},
        '<div class="abjs-localnews-configuration-prompt ab-overlay" style="display:none;">\n\t<div class="ab-overlay-content">\n\t\t<div class="ab-overlay-title">Vill du se lokala nyheter nära dig?</div>\n\t\t<p class="abMarginB ab-localnews-use-current-position">\n\t\t\t<a class="ab-localnews-trackLocation abjs-localnews-trackLocation abBtn abThemeBg">Använd nuvarande position</a>\n\t\t</p>\n\t\t<p class="abMarginB ab-localnews-use-current-position-or abSubtleText">eller</p>\n\t\t<p>\n\t\t\t<a class="ab-localnews-selectlocality-explicitly abjs-localnews-selectlocality-explicitly">Välj ort</a>\n\t\t</p>\n\t</div>\n</div>\n'
    })),
    a.registerPartial("shared/localnews/locality-header", a.template(function(a, b, c, d, e) {
        return this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {},
        '<div class="ab-localnews-header">\n\t<div class="abGrid abGridStretch abGridFixed">\n\t\t<div class="ab-localnews-locality abGridItem abGridItemRightPadding">\n\t\t\t<span class="abIconPosition"></span>\n\t\t\t<span class="abjs-localnews-selectedlocality"></span>\n\t\t</div>\n\t\t<div class="abGridItem taR">\n\t\t\t<a class="ab-localnews-selectlocality abjs-localnews-selectlocality" href="#">Ändra</a>\n\t\t</div>\n\t</div>\n</div>\n'
    })),
    a.registerPartial("shared/localnews/locality-selector", a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var d, e, f = "";
            return f += "\n\t\t" + l((d = c.localnewsPositionButton || a && a.localnewsPositionButton,
            e = {
                hash: {},
                data: b
            },
            d ? d.call(a, a && a.positionButtonState, e) : k.call(a, "localnewsPositionButton", a && a.positionButtonState, e))) + "\n\t"
        }
        function g(a, b) {
            var d, e, f, g = "";
            return g += "\n\t\t<form>\n\t\t\t",
            e = c["locality-listing"] || a && a["locality-listing"],
            f = {
                hash: {
                    rowClass: "abGrid abGridStretch abGridFixed",
                    leftItemClass: "abGridItem abGridItemRightPadding",
                    rightItemClass: "abGridItem abGridItemLeftPadding",
                    lastItemClass: "abGridItem abGridItemLeftPadding abGridAlignTop"
                },
                inverse: n.noop,
                fn: n.program(4, h, b),
                data: b
            },
            d = e ? e.call(a, a && a.localities, f) : k.call(a, "locality-listing", a && a.localities, f),
            (d || 0 === d) && (g += d),
            g += '\n\t\t\t<div class="ab-localnews-info">\n\t\t\t\t<a href="http://www.aftonbladet.se/nyheter/article20684538.ab" class="abSubtleText ab-localnews-infolink">Varför finns inte min ort med?</a>\n\t\t\t</div>\n\t\t</form>\n\t'
        }
        function h(a, b) {
            var d, e, f = "";
            return f += '\n\t\t\t\t<label class="abBlock">',
            (e = c.displayName) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.displayName,
            d = typeof e === m ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += l(d) + ' <input type="radio" name="locality" value="',
            (e = c.id) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.id,
            d = typeof e === m ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += l(d) + '"></label>\n\t\t\t'
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {};
        var i, j = "", k = c.helperMissing, l = this.escapeExpression, m = "function", n = this;
        return j += '<div class="ab-localnews-localitycontainer">\n\t',
        i = c.if.call(b, b && b.canDetectLocation, {
            hash: {},
            inverse: n.noop,
            fn: n.program(1, f, e),
            data: e
        }),
        (i || 0 === i) && (j += i),
        j += "\n\t",
        i = c.if.call(b, b && b.localities, {
            hash: {},
            inverse: n.noop,
            fn: n.program(3, g, e),
            data: e
        }),
        (i || 0 === i) && (j += i),
        j += '\n\t<div class="ab-localnews-localityselect-buttons">\n\t\t<div class="abGrid abGridStretch abGridFixed">\n\t\t\t<div class="abGridItem abGridItemRightPadding">\n\t\t\t\t<div class="abBtn abjs-localnews-localityselect-abort">\n\t\t\t\t\tAvbryt\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="abGridItem abGridItemLeftPadding">\n\t\t\t\t<div class="abBtn abThemeBg abjs-localnews-localityselect-confirm">\n\t\t\t\t\tVisa\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'
    })),
    a.registerPartial("shared/localnews/more-news", a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var d, e, f = "";
            return f += '\n\t<div class="ab-omni-teaser-morenews">\n\t\t<a href="',
            (e = c.uri) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.uri,
            d = typeof e === i ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += j(d) + '" class="abBtn abMoreBtn">\n\t\t\tFler lokala nyheter\n\t\t</a>\n\t</div>\n'
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {};
        var g, h = "", i = "function", j = this.escapeExpression, k = this;
        return g = c.if.call(b, b && b.visible, {
            hash: {},
            inverse: k.noop,
            fn: k.program(1, f, e),
            data: e
        }),
        (g || 0 === g) && (h += g),
        h += "\n"
    })),
    a.registerPartial("shared/omni-teaser/image", a.template(function(a, b, c, d, e) {
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {};
        var f, g, h = "", i = c.helperMissing;
        return h += '<div class="abGridItem abTeaserSmallImageColumn">\n\t<span class="abIC lazy-load ab-omni-teaser-image" style="padding-bottom:50%; background-image: url(' + (0,
        this.escapeExpression)((f = c.omniTeaserImage || b && b.omniTeaserImage,
        g = {
            hash: {},
            data: e
        },
        f ? f.call(b, b && b.url, 300, g) : i.call(b, "omniTeaserImage", b && b.url, 300, g))) + ');"></span>\n</div>'
    })),
    a.registerPartial("shared/omni-teaser/load-indicator", a.template(function(a, b, c, d, e) {
        return this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {},
        '<article class="abBlock abFlowItem abTeaser ab-omni-teaser">\n    <div class="loading-bg">\n        <div class="loading-mask loading-mask-h"></div>\n        <div class="loading-mask loading-mask-hsep"></div>\n        <div class="loading-mask loading-mask-p1"></div>\n        <div class="loading-mask loading-mask-p1sep"></div>\n        <div class="loading-mask loading-mask-p2"></div>\n    </div>\n</article>'
    })),
    a.registerPartial("shared/omni-teaser/native-ad", a.template(function(a, b, c, d, e) {
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        d = this.merge(d, a.partials),
        e = e || {};
        var f, g = "", h = this;
        return g += '<article class="abBoxAd abListAd">\n\t<div class="abAdStreamer">\n\t\t<div class="abStreamerInner">ANNONS</div>\n\t</div>\n\t',
        f = h.invokePartial(d["shared/omni-teaser/teaser"], "shared/omni-teaser/teaser", b, c, d, e),
        (f || 0 === f) && (g += f),
        g += "\n</article>\n"
    })),
    a.registerPartial("shared/omni-teaser/teaser", a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var d, e, f = "";
            return f += '\n\t\t\t\t<div class="abTeaserTimeAndSection">\n\t\t\t\t\t<span class="abLabel abThemeColor">',
            (e = c.topic) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.topic,
            d = typeof e === m ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += n(d) + '</span>\n\t\t\t\t\t<time class="abLabelThin abArticleTime">',
            d = a && a.publishDate,
            d = null == d || !1 === d ? d : d.relative,
            d = typeof d === m ? d.apply(a) : d,
            (d || 0 === d) && (f += d),
            f += "</time>\n\t\t\t\t</div>\n\t\t\t\t"
        }
        function g(a, b) {
            return '\n                        <span class="abInteract">TV:</span>\n                    '
        }
        function h(a, b) {
            var e, f = "";
            return f += "\n\t\t\t\t",
            e = o.invokePartial(d["shared/omni-teaser/image"], "shared/omni-teaser/image", a && a.image, c, d, b),
            (e || 0 === e) && (f += e),
            f += "\n\t\t\t"
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        d = this.merge(d, a.partials),
        e = e || {};
        var i, j, k, l = "", m = "function", n = this.escapeExpression, o = this, p = c.helperMissing;
        return l += '<article class="abTeaser abFlowItem ab-omni-teaser">\n\t<a href="' + n((j = c.path || b && b.path,
        k = {
            hash: {},
            data: e
        },
        j ? j.call(b, b && b.sectionUri, b && b.id, k) : p.call(b, "path", b && b.sectionUri, b && b.id, k))) + '">\n\t\t<div class="abGrid abGridStretch abGridFixed">\n\t\t\t<div class="abGridItem abGridAlignMiddle abGridItemRightPadding">\n\t\t\t\t',
        i = c.unless.call(b, (i = b && b.layout,
        null == i || !1 === i ? i : i.noMetaRow), {
            hash: {},
            inverse: o.noop,
            fn: o.program(1, f, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += '\n\t\t\t\t<h2 class="abHeaderSmall">\n                    ',
        i = c.if.call(b, b && b.tv, {
            hash: {},
            inverse: o.noop,
            fn: o.program(3, g, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += "\n\t\t\t\t\t" + n((j = c.limitText || b && b.limitText,
        k = {
            hash: {},
            data: e
        },
        j ? j.call(b, b && b.headline, b && b.layout, b && b.font, k) : p.call(b, "limitText", b && b.headline, b && b.layout, b && b.font, k))) + "\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t",
        i = c.if.call(b, b && b.image, {
            hash: {},
            inverse: o.noop,
            fn: o.program(5, h, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += "\n\t\t</div>\n\t</a>\n</article>"
    })),
    this.ABse.template.localnews.list = a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var d, e, f = "";
            return f += '\n\t<div class="abStreamer abStreamerSmall abThemeBgGradient">\n\t\t<span class="abStreamerInner">',
            (e = c.streamerTitle) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.streamerTitle,
            d = typeof e === j ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += k(d) + "</span>\n\t</div>\n"
        }
        function g(a, b) {
            var e, f = "";
            return f += "\n\t\t\t\t",
            e = l.invokePartial(d["shared/localnews/more-news"], "shared/localnews/more-news", a, c, d, b),
            (e || 0 === e) && (f += e),
            f += "\n\t\t\t"
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        d = this.merge(d, a.partials),
        e = e || {};
        var h, i = "", j = "function", k = this.escapeExpression, l = this;
        return h = l.invokePartial(d["shared/localnews/configuration-prompt"], "shared/localnews/configuration-prompt", b, c, d, e),
        (h || 0 === h) && (i += h),
        i += "\n",
        h = c.if.call(b, b && b.streamerTitle, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, f, e),
            data: e
        }),
        (h || 0 === h) && (i += h),
        i += '\n\n<div class="ab-localnews-contentcontainer abAnimContainer">\n\t<div class="abAnimCard">\n\t\t<div class="abAnimCardFace abAnimCardFront">\n\t\t\t',
        h = l.invokePartial(d["shared/localnews/locality-header"], "shared/localnews/locality-header", b, c, d, e),
        (h || 0 === h) && (i += h),
        i += '\n\t\t\t<div class="abjs-localnews-articles ab-localnews-articles abFlow"></div>\n\t\t\t',
        h = c.with.call(b, b && b.moreNews, {
            hash: {},
            inverse: l.noop,
            fn: l.program(3, g, e),
            data: e
        }),
        (h || 0 === h) && (i += h),
        i += '\n\t\t</div>\n\t\t<div class="abAnimCardFace abAnimCardBack">\n\t\t\t',
        h = l.invokePartial(d["shared/localnews/locality-selector"], "shared/localnews/locality-selector", b, c, d, e),
        (h || 0 === h) && (i += h),
        i += "\n\t\t</div>\n\t</div>\n</div>\n"
    }),
    this.ABse.template.localnews.localNativeAds = a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var d, e, f = "";
            return f += '\n                    <div class="abTeaserTimeAndSection">\n                        <span class="abLabel ab-localnews-nativead">ANNfONS</span>\n                        <time class="abLabelThin abArticleTime">',
            (e = c.owner) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.owner,
            d = typeof e === m ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            (d || 0 === d) && (f += d),
            f += "</time>\n                    </div>\n\t\t\t\t"
        }
        function g(a, b) {
            return '\n                        <span class="abInteract">TV:</span>\n\t\t\t\t\t'
        }
        function h(a, b) {
            var d, e, f = "";
            return f += '\n                <div class="abGridItem abTeaserSmallImageColumn">\n                    <span class="abIC lazy-load ab-omni-teaser-image" style="padding-bottom:50%;background-image: url(',
            (e = c.img) ? d = e.call(a, {
                hash: {},
                data: b
            }) : (e = a && a.img,
            d = typeof e === m ? e.call(a, {
                hash: {},
                data: b
            }) : e),
            f += n(d) + ');"></span>\n                </div>\n\t\t\t'
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        e = e || {};
        var i, j, k, l = "", m = "function", n = this.escapeExpression, o = this, p = c.helperMissing;
        return l += '<article class="abTeaser abFlowItem ab-omni-teaser">\n    <a href="',
        (j = c.articleUrl) ? i = j.call(b, {
            hash: {},
            data: e
        }) : (j = b && b.articleUrl,
        i = typeof j === m ? j.call(b, {
            hash: {},
            data: e
        }) : j),
        l += n(i) + '">\n        <div class="abGrid abGridStretch abGridFixed">\n            <div class="abGridItem abGridAlignMiddle abGridItemRightPadding">\n\t\t\t\t',
        i = c.unless.call(b, (i = b && b.layout,
        null == i || !1 === i ? i : i.noMetaRow), {
            hash: {},
            inverse: o.noop,
            fn: o.program(1, f, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += '\n                <h2 class="abHeaderSmall">\n\t\t\t\t\t',
        i = c.if.call(b, b && b.tv, {
            hash: {},
            inverse: o.noop,
            fn: o.program(3, g, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += "\n\t\t\t\t\t" + n((j = c.limitText || b && b.limitText,
        k = {
            hash: {},
            data: e
        },
        j ? j.call(b, b && b.topic, b && b.layout, b && b.font, k) : p.call(b, "limitText", b && b.topic, b && b.layout, b && b.font, k))) + "\n                </h2>\n            </div>\n\t\t\t",
        i = c.if.call(b, b && b.img, {
            hash: {},
            inverse: o.noop,
            fn: o.program(5, h, e),
            data: e
        }),
        (i || 0 === i) && (l += i),
        l += "\n        </div>\n    </a>\n</article>\n"
    }),
    this.ABse.template["omni-teaser"].teaser = a.template(function(a, b, c, d, e) {
        function f(a, b) {
            var e, f = "";
            return f += "\n\t",
            e = l.invokePartial(d["shared/omni-teaser/load-indicator"], "shared/omni-teaser/load-indicator", a, c, d, b),
            (e || 0 === e) && (f += e),
            f += "\n"
        }
        function g(a, b) {
            var d, e = "";
            return e += "\n\t",
            d = c.if.call(a, a && a.sponsored, {
                hash: {},
                inverse: l.program(6, i, b),
                fn: l.program(4, h, b),
                data: b
            }),
            (d || 0 === d) && (e += d),
            e += "\n"
        }
        function h(a, b) {
            var e, f = "";
            return f += "\n\t\t",
            e = l.invokePartial(d["shared/omni-teaser/native-ad"], "shared/omni-teaser/native-ad", a, c, d, b),
            (e || 0 === e) && (f += e),
            f += "\n\t"
        }
        function i(a, b) {
            var e, f = "";
            return f += "\n\t\t",
            e = l.invokePartial(d["shared/omni-teaser/teaser"], "shared/omni-teaser/teaser", a, c, d, b),
            (e || 0 === e) && (f += e),
            f += "\n\t"
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        c = this.merge(c, a.helpers),
        d = this.merge(d, a.partials),
        e = e || {};
        var j, k = "", l = this;
        return j = c.if.call(b, b && b.placeholder, {
            hash: {},
            inverse: l.program(3, g, e),
            fn: l.program(1, f, e),
            data: e
        }),
        (j || 0 === j) && (k += j),
        k += "\n"
    })
}),
define("device-settings", ["doc", "win"], function(a, b) {
    "use strict";
    function c() {
        var a = 1;
        return b.devicePixelRatio ? a = b.devicePixelRatio : "matchMedia"in b && b.matchMedia && (b.matchMedia("(min-resolution: 2dppx)").matches || b.matchMedia("(min-resolution: 192dpi)").matches ? a = 2 : (b.matchMedia("(min-resolution: 1.5dppx)").matches || b.matchMedia("(min-resolution: 144dpi)").matches) && (a = 1.5)),
        a
    }
    function d() {
        var a = ["", "-webkit-", "-ms-", "-moz-", "-o-"]
          , b = document.createElement("div");
        try {
            for (var c = 0, d = a.length; c < d; c++)
                if (b.style.position = a[c] + "sticky",
                "" !== b.style.position)
                    return !0
        } catch (a) {}
        return !1
    }
    function e() {
        if (h) {
            if (navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1] < 8)
                return !1
        }
        return !0
    }
    var f = c()
      , g = -1 !== navigator.userAgent.indexOf(" Android")
      , h = -1 !== navigator.userAgent.indexOf("iPhone") || -1 !== navigator.userAgent.indexOf("iPad") || -1 !== navigator.userAgent.indexOf("iPod")
      , i = !!("ontouchstart"in b || b.DocumentTouch && a instanceof DocumentTouch || b.navigator && b.navigator.msMaxTouchPoints)
      , j = a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
      , k = b.innerWidth * f
      , l = b.innerHeight * f
      , m = a.documentElement;
    return {
        clientWidth: m ? m.clientWidth : void 0,
        clientHeight: m ? m.clientHeight : void 0,
        isAndroid: g,
        isIOS: h,
        firesOnScrollContinuously: e,
        redirectCookieName: "ABseOverride",
        screenRedirectThreshold: 1024,
        screenPixelRatio: f,
        getScreenPixelRatio: c,
        screenWidth: k,
        screenHeight: l,
        svgIsSupported: j,
        hasSticky: d(),
        isTouch: i
    }
}),
define("image-utils", ["device-settings", "page"], function(a, b) {
    "use strict";
    function c() {
        return void 0 === d && (d = {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }),
        d
    }
    var d, e = function(a, b) {
        return a.replace(/{{[^{}]+}}/g, function(a) {
            return b[a.replace(/[{}]+/g, "")] || ""
        })
    }, f = function(a, b) {
        var c, d = a.length;
        for (c = 0; c < d; c += 1)
            if (a[c].w >= b)
                return a[c]
    }, g = function(c, d) {
        if (!c || 0 === c.length)
            return null;
        var e = a.screenPixelRatio && a.screenPixelRatio > 1
          , g = b && b.imageConfig && b.imageConfig.client && b.imageConfig.client.fudgeLevel || 0
          , h = e ? (d - g) * a.screenPixelRatio : d - g;
        return f(c, h) || c[c.length - 1]
    }, h = function(a) {
        var b = a && a.querySelector("noscript");
        return b && (b.getAttribute("data-image-versions") ? "imageVersions" : b.getAttribute("data-src-small") && "dataSrc")
    };
    return {
        applyTemplate: e,
        findVersion: g,
        imageConfigStyle: h,
        getViewPortSize: c
    }
}),
define("request", [], function() {
    "use strict";
    function a(a) {
        return a.replace(/[^a-z0-9_\-]/g, "")
    }
    function b(a) {
        return a || document.location.href
    }
    function c(c, d) {
        c = a(c),
        d = b(d);
        var e = "[\\?&;]" + c + "=([^&;#]+)"
          , f = new RegExp(e)
          , g = f.exec(d);
        return null === g ? "" : g[1]
    }
    function d(c, d) {
        c = a(c),
        d = b(d) + "&";
        var e = "[\\?&;](" + c + ")[=&;#]";
        return new RegExp(e).test(d)
    }
    return {
        getURLParameter: c,
        hasURLParameter: d
    }
}),
define("lazy-load", ["doc", "win"], function(a, b) {
    "use strict";
    function c(c, d) {
        b.console.log("Attempting to load " + c);
        var e = a.createElement("script");
        e.type = "text/javascript",
        e.async = !0,
        e.src = c,
        e.onload = e.onreadystatechange = function() {
            var a = this.readyState;
            if (!a || "complete" === a || "loaded" === a)
                try {
                    b.console.log("Done loading " + c),
                    "function" == typeof d && d()
                } catch (a) {}
        }
        ,
        a.body.appendChild(e)
    }
    return {
        lazyLoadScript: c
    }
}),
define("lazy-load-internal", ["lazy-load", "request", "meta", "page", "network-detection", "viewability-experiments-lazyload"], function(a, b, c, d, e, f) {
    "use strict";
    function g(g, h) {
        var i = ".min.js";
        b.getURLParameter("dev") && (i = ".js"),
        a.lazyLoadScript(g + i + "?" + c.resourcesVersion, h),
        d.viewabilityExperimentsEnabled && e.isNetworkSlow().then(function(a) {
            a && (f.increaseLazyLoadThreshold(),
            f.blockLazyLoad())
        })
    }
    return {
        lazyLoadScript: g
    }
}),
define("polldaddy/helpers", [], function() {
    "use strict";
    return {
        updateLabels: function(a) {
            function b(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] !== b)
                        return !1;
                return !0
            }
            function c(a) {
                return a.length > 0 && a.length <= 5 && b(a, "+")
            }
            function d(a) {
                return 1 === a.length && b(a, "-")
            }
            var e, f, g, h, i, j = a.getElementsByTagName("label");
            for (e = 0,
            f = j.length; e < f; e++)
                g = j[e],
                i = g.querySelector(".pds-answer-text, .pds-answer-span"),
                h = (i.textContent || i.innerText).trim(),
                c(h) ? g.className += " abSymbPlus" + h.length : d(h) && (g.className += " abSymbMinus")
        }
    }
}),
define("ast-toggler", ["ab-abtest", "page"], function(a, b) {
    "use strict";
    function c() {
        return g
    }
    function d(a) {
        var b = require("ast-url-queries");
        (a || b && b.astEnabledUrlQuery() || e()) && f()
    }
    function e() {
        return "ece_frontpage" === b.sectionUniqueName && (a.isMemberOfSegment(90, 90) && Math.random() < .2)
    }
    function f() {
        var a = require("ast-loader");
        a && (a.init(),
        g = !0)
    }
    var g = !1;
    return {
        isAstEnabled: c,
        useAstIfEnabled: d
    }
}),
define("events/resize", ["win", "jquery"], function(a, b) {
    "use strict";
    function c(a, b, c) {
        var d;
        return function() {
            function e() {
                c || a.apply(f, g),
                d = null
            }
            var f = this
              , g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g),
            d = setTimeout(e, b || 100)
        }
    }
    function d(a) {
        e.forEach(function(b) {
            b(a)
        })
    }
    var e = []
      , f = c(d)
      , g = !1;
    return {
        addEventListener: function(c) {
            e.push(c),
            !g && e.length && (b(a).on("resize orientationChange", f),
            g = !0)
        },
        removeEventListener: function(a) {
            e = e.filter(function(b) {
                return a !== b
            }),
            g && !e.length && (b("win").off("resize orientationChange", f),
            g = !1)
        }
    }
}),
define("api-client", ["jquery"], function(a) {
    "use strict";
    function b(b) {
        b = a.extend({}, c, b),
        this._cache = b.cache,
        this._host = b.host.replace(/\/$/, ""),
        this._timeout = b.timeout || 5e3
    }
    var c = {
        cache: {}
    }
      , d = [503, 504];
    return b.prototype = {
        _getUrl: function(a) {
            return this._host + a
        },
        _fetchData: function(b, c, e) {
            var f = this._cacheKey(b, c);
            if (e = a.extend({
                numAttempts: 1,
                retryDelay: 1e3,
                timeout: this._timeout
            }, e),
            !this._cache[f]) {
                var g = this._cache;
                this._cache[f] = new Promise(function(h, i) {
                    function j(k) {
                        a.ajax(b, {
                            data: c || {},
                            timeout: e.timeout
                        }).then(function(a, b, c) {
                            h({
                                result: a,
                                xhr: c
                            })
                        }, function(a, b) {
                            d.indexOf(a.status) >= 0 && k < e.numAttempts ? setTimeout(j.bind(null, k + 1), e.retryDelay) : (delete g[f],
                            i(new Error(b)))
                        })
                    }
                    j(1)
                }
                )
            }
            return this._cache[f]
        },
        _cacheKey: function(a, b) {
            return a + JSON.stringify(b)
        }
    },
    b
}),
define("font-size", ["doc", "win", "dom", "observable", "local-storage"], function(a, b, c, d, e) {
    "use strict";
    function f() {
        var c = b.getComputedStyle(a.documentElement);
        return parseFloat(c.fontSize)
    }
    function g(a) {
        return Math.round(a * f())
    }
    function h() {
        return h.canvas || (h.canvas = document.createElement("canvas"))
    }
    var i = "large"
      , j = "medium"
      , k = {
        rem2px: g,
        measure: function(a, b) {
            var c, d = h();
            if (!("getContext"in d))
                return -1;
            b.fontSize.indexOf("rem") >= 0 && (b.fontSize = g(parseFloat(b.fontSize)) + "px"),
            c = d.getContext("2d"),
            c.font = [b.fontStyle || "", b.fontWeight || "", b.fontSize, b.fontFamily].join(" ");
            var e = c.measureText(a)
              , f = Math.ceil(e.width);
            return b.letterSpacing && b.letterSpacing.indexOf("px") >= 0 && (f += parseInt(b.letterSpacing, 10) * a.replace(/\s+/g, "").length),
            f
        },
        setFontSize: function(b) {
            b.toLowerCase() === i ? (c.addClass(a.documentElement, "abFSLarge"),
            e.persistValue("abmFontSize", i)) : b.toLowerCase() === j && (c.removeClass(a.documentElement, "abFSLarge"),
            e.clearValue("abmFontSize")),
            this.publish("changed")
        },
        getFontSize: function() {
            var a = e.readValue("abmFontSize");
            return a && a.toLowerCase() === i ? i : j
        },
        toggleFontSize: function() {
            var a = this.getFontSize() === i ? j : i;
            return this.setFontSize(a),
            a
        },
        large: i,
        small: j
    };
    return d.makeObservable(k),
    function() {
        k.getFontSize() === i && c.addClass(a.documentElement, "abFSLarge")
    }(),
    k
}),
define("util", ["font-size"], function(a) {
    "use strict";
    function b(a, b) {
        for (var c = []; b-- > 0; )
            c.push(a);
        return c
    }
    function c(a, b, c) {
        for (var e = a.match(/[ ]*[^ -]+[-]?/gi), f = []; e.length; ) {
            var g = d(e, b, c);
            if (!g.length) {
                f.push(e);
                break
            }
            f.push(g)
        }
        return f
    }
    function d(b, c, d) {
        for (var e = []; b.length && a.measure(e.join("") + b[0], c) <= d; )
            e.push(b.shift());
        return b[0] && (b[0] = b[0].replace(/^\s*/, "")),
        e
    }
    function e(b, d, e) {
        var f = b.replace(/\s+/g, " ")
          , g = Number(d.availableWidth);
        if (!g)
            return b;
        if (a.measure(f, e) <= g)
            return b;
        var h = c(f, e, g)
          , i = h.slice(0, d.maxLines || 1)
          , j = i[i.length - 1];
        if (h.length !== i.length) {
            for (; j.length && a.measure(j.join("") + "…", e) > g; )
                j.pop();
            j.push("…")
        }
        return f = i.map(function(a) {
            return a.join("")
        }),
        f = f.join("\n")
    }
    return {
        repeat: b,
        limitText: e
    }
}),
define("geolocation", ["abse", "geolocation/persistence", "geolocation/retrieval", "observable", "local-storage"], function(a, b, c, d, e) {
    "use strict";
    function f(a) {
        e.persistValue(h, a.getTrackingStatus())
    }
    function g(a, b) {
        a.subscribe("position:updated", function(a) {
            m.persist(a),
            e.persistValue(h, j),
            b.publish("position:updated", a)
        }),
        a.subscribe("position:cleared", function(a) {
            m.clear(),
            b.publish("position:cleared", a)
        }),
        a.subscribe("position:error", function(a) {
            a.code === a.PERMISSION_DENIED && (m.clear(),
            e.persistValue(h, k)),
            b.publish("position:error", a)
        })
    }
    var h = "geolocation/trackingStatus"
      , i = "Unknown"
      , j = "On"
      , k = "Off"
      , l = "Unsupported"
      , m = b.create()
      , n = c.create(m)
      , o = {
        storeLocation: function(a) {
            window.console.log("geolocation#storeLocation"),
            window.console.log("Deprecated method `geolocation.storeLocation` was called externally!\n", "Updating the geoposition should be achieved by calling `geolocation.getCurrentPosition`,", "which will automatically store the retrieved location.\n", "Furthermore, retrieving stored locations should be achieved by calling `geolocation.getStoredLocation`.\n", "If you truly NEED to set the current position explicitly, use `geolocation.setPosition`"),
            window.console.log("Received location was: ", a)
        },
        getStoredLocation: function(a) {
            return m.retrieve(a)
        },
        getCurrentPosition: function(a, b, c) {
            return n.getCurrentPosition(a, b, c)
        },
        setPosition: function(a) {
            n.setPosition(a)
        },
        isSupported: function() {
            var a = n.isSupported();
            return a || e.persistValue(h, l),
            a
        },
        getTrackingStatus: function() {
            return e.readValue(h) || (o.isSupported() ? i : l)
        },
        convertTrackingStatusToBool: function(a) {
            var b = !1;
            if (a)
                switch (a) {
                case o.TRACKING_STATUS_ACTIVE:
                    b = !0;
                    break;
                case o.TRACKING_STATUS_UNKNOWN:
                default:
                    b = !1
                }
            return b
        },
        setTrackingStatus: function(a) {
            var b;
            switch (a) {
            case "on":
                b = o.TRACKING_STATUS_ACTIVE;
                break;
            case "off":
                b = o.TRACKING_STATUS_PERMISSION_DENIED;
                break;
            default:
                b = o.TRACKING_STATUS_UNKNOWN
            }
            e.persistValue(h, b),
            o.publish("authorization:changed", {
                status: b
            })
        },
        TRACKING_STATUS_UNKNOWN: i,
        TRACKING_STATUS_ACTIVE: j,
        TRACKING_STATUS_PERMISSION_DENIED: k,
        TRACKING_STATUS_UNSUPPORTED: l
    };
    return d.makeObservable(o),
    f(o),
    g(n, o),
    a.geolocation = {
        getStoredLocation: function() {
            return o.getStoredLocation(3e5)
        }
    },
    o
}),
define("geolocation/persistence", ["app-detector"], function(a) {
    "use strict";
    var b = function(a) {
        return {
            persist: function(b) {
                a.forEach(function(a) {
                    a.persist(b)
                })
            },
            retrieve: function(b) {
                var c = null;
                return a.some(function(a) {
                    var d = a.retrieve(b)
                      , e = null !== d;
                    return e && (c = d),
                    e
                }),
                c
            },
            clear: function() {
                a.forEach(function(a) {
                    a.clear()
                })
            }
        }
    };
    return b.create = function() {
        return b(a.isApp() ? [require("geolocation/persistence/app-cookies")] : [require("geolocation/persistence/local-storage")])
    }
    ,
    b
}),
define("geolocation/persistence/app-cookies", ["win", "ab-shared-cookie"], function(a, b) {
    "use strict";
    var c = "lastLat"
      , d = "lastLng";
    return {
        persist: function() {},
        retrieve: function() {
            var a = b.getCookie(c)
              , e = b.getCookie(d);
            return a && e ? {
                coords: {
                    latitude: parseFloat(a),
                    longitude: parseFloat(e),
                    accuracy: 300
                },
                timestamp: (new Date).getTime()
            } : null
        },
        clear: function() {
            b.clear(c),
            b.clear(d)
        },
        toString: function() {
            return "[geo/persistence/app-cookies]"
        }
    }
}),
define("geolocation/persistence/local-storage", ["local-storage"], function(a) {
    "use strict";
    var b = "abloc";
    return {
        persist: function(c) {
            a.persistValue(b, c)
        },
        retrieve: function(c) {
            return !c || c < 0 || c === 1 / 0 ? a.readValue(b) : a.readValue(b, c)
        },
        clear: function() {
            a.clearValue(b)
        },
        toString: function() {
            return "[geo/persistence/local-storage]"
        }
    }
}),
define("geolocation/retrieval", ["app-detector"], function(a) {
    "use strict";
    return {
        create: function(b) {
            return a.isApp() ? require("geolocation/retrieval/app")(b) : require("geolocation/retrieval/mobile")(b)
        }
    }
}),
define("geolocation/retrieval/app", ["geolocation/util", "observable", "app-message"], function(a, b, c) {
    "use strict";
    function d(a, b) {
        return {
            message: b,
            code: a,
            PERMISSION_DENIED: 1,
            POSITION_UNAVAILABLE: 2,
            TIMEOUT: 3
        }
    }
    function e(e) {
        function f(a, b) {
            var c = require("geolocation");
            c.subscribe("authorization:changed", function e(f) {
                switch (c.unsubscribe("authorization:changed", e),
                f.status) {
                case c.TRACKING_STATUS_ACTIVE:
                    var g, h = function b(d) {
                        clearTimeout(g),
                        c.unsubscribe("position:updated", b),
                        a(d)
                    };
                    c.subscribe("position:updated", h),
                    g = setTimeout(function() {
                        c.unsubscribe("position:updated", h),
                        b(d(3, "Geolocation request timed out"))
                    }, 5e3);
                    break;
                case c.TRACKING_STATUS_PERMISSION_DENIED:
                    b(d(1, "Location services permission denied by user"));
                    break;
                default:
                    b(d(2, "Location services unavailable"))
                }
            })
        }
        var g = {
            getCurrentPosition: function(a, b, g) {
                g = g || {},
                "number" != typeof g.maximumAge && (g.maximumAge = 3e5);
                var h = e.retrieve(g.maximumAge);
                h ? a(h) : g.requestFromApp ? (f(a, b),
                c.createAndPushMessage("position", {
                    requestedBy: g.requestedBy
                })) : b(d(2, "Position not available"))
            },
            setPosition: function(b) {
                var c = a.normalizeLocation(b);
                c ? g.publish("position:updated", c) : g.publish("position:cleared")
            },
            isSupported: function() {
                return !0
            }
        };
        return b.makeObservable(g),
        g
    }
    return e
}),
define("geolocation/retrieval/mobile", ["nav", "geolocation/util", "observable"], function(a, b, c) {
    "use strict";
    function d() {
        var d = {
            getCurrentPosition: function(c, e, f) {
                f = f || {},
                f.timeout = f.timeout || 2e4,
                "number" != typeof f.maximumAge && (f.maximumAge = 3e5),
                a.geolocation.getCurrentPosition(function(a) {
                    a = b.normalizeLocation(a),
                    d.publish("position:updated", a),
                    c(a)
                }, function(a) {
                    d.publish("position:error", a),
                    e(a)
                }, f)
            },
            setPosition: function() {},
            isSupported: function() {
                try {
                    return "geolocation"in a
                } catch (a) {
                    return !1
                }
            }
        };
        return c.makeObservable(d),
        d
    }
    return d
}),
define("geolocation/util", [], function() {
    "use strict";
    return {
        normalizeLocation: function(a) {
            return "string" == typeof a && (a = JSON.parse(a)),
            !(!a || !a.coords) && {
                coords: {
                    longitude: a.coords.longitude,
                    latitude: a.coords.latitude,
                    accuracy: a.coords.accuracy || 300
                },
                timestamp: a.timestamp || (new Date).getTime()
            }
        }
    }
}),
define("localnews/api-client", ["jquery", "page", "api-client"], function(a, b, c) {
    "use strict";
    function d(a) {
        c.call(this, a)
    }
    return d.prototype = a.extend({}, c.prototype, {
        getArticles: function(a) {
            var b = this._getUrl("/localised-news");
            return this._fetchData(b, a, {
                numAttempts: 2
            })
        },
        getLocalityForPosition: function(a) {
            var b = this._getUrl("/locality-by-position");
            return this._fetchData(b, {
                position: [a.coords.latitude, a.coords.longitude].join(",")
            })
        }
    }),
    d
}),
define("localnews/configuration", ["jquery", "observable", "page", "geolocation", "localnews/configuration/selection-strategy", "localnews/configuration/tracking-strategy", "app-detector"], function(a, b, c, d, e, f, g) {
    "use strict";
    return function(h) {
        function i(a) {
            a.preventDefault(),
            C.configureStart()
        }
        function j(a) {
            a.preventDefault(),
            C.trackLocation()
        }
        function k(a) {
            a.preventDefault(),
            C.configureStart(),
            C.selectAndMountStrategy(!1, !0)
        }
        function l(a) {
            a.preventDefault(),
            C.selectAndMountStrategy(!x.find(".abjs-localnews-currentlocation").hasClass("ab-active"), !0)
        }
        function m(a) {
            a.preventDefault(),
            C.abortConfiguration()
        }
        function n(a) {
            a.preventDefault(),
            C.confirmConfiguration()
        }
        function o() {
            d.unsubscribe("position:updated", C.positionUpdatedExternallyAndWidgetNotConfigured),
            v = u,
            B = A.copy(),
            C.setStrategySettings(B)
        }
        function p() {
            v.isMounted() || C.unmountStrategy(u),
            C.setStrategySettings(A),
            C.mountStrategy(v)
        }
        function q() {
            B.set("configured", !0),
            A.sync(B),
            C.setStrategySettings(A)
        }
        function r() {
            v = null,
            B = null;
            var a = C.getConfigurationPrompt();
            A.isConfigured() ? a.hide() : (d.subscribe("position:updated", C.positionUpdatedExternallyAndWidgetNotConfigured),
            a.show()),
            x.removeClass("ab-active")
        }
        function s() {
            "desktop" !== c.siteName ? require(["fast-click-button"], function(a) {
                [{
                    selector: ".abjs-localnews-selectlocality",
                    handler: i
                }, {
                    selector: ".abjs-localnews-localityselect-abort",
                    handler: m
                }, {
                    selector: ".abjs-localnews-localityselect-confirm",
                    handler: n
                }, {
                    selector: ".abjs-localnews-trackLocation",
                    handler: j
                }, {
                    selector: ".abjs-localnews-selectlocality-explicitly",
                    handler: k
                }, {
                    selector: ".abjs-localnews-currentlocation",
                    handler: l
                }].forEach(function(b) {
                    x.find(b.selector).each(function() {
                        return new a(this,b.handler)
                    })
                })
            }) : (x.on("click", ".abjs-localnews-selectlocality", i),
            x.on("click", ".abjs-localnews-localityselect-abort", m),
            x.on("click", ".abjs-localnews-localityselect-confirm", n),
            x.on("click", ".abjs-localnews-trackLocation", j),
            x.on("click", ".abjs-localnews-selectlocality-explicitly", k),
            x.on("click", ".abjs-localnews-currentlocation", l)),
            w.subscribe("configure:start", o),
            w.subscribe("configure:abort", p),
            w.subscribe("configure:confirm", q),
            w.subscribe("configure:end", r),
            C.eachStrategy(function(a) {
                a.subscribe("active", function() {
                    C.mountStrategy(a, !0)
                })
            }),
            w.isConfigured() || d.subscribe("position:updated", C.positionUpdatedExternallyAndWidgetNotConfigured)
        }
        var t, u, v, w, x = h.node, y = h.provider, z = h.amount, A = h.settings, B = A, C = {
            onStrategyError: function(b) {
                var c = C.getConfigurationPrompt()
                  , d = c.find(".ab-overlay-title");
                if (!g.isApp()) {
                    var e = c.find(".abPositioningProblem");
                    e.length || (e = a(['<div class="abPositioningProblem abWarning"><p><span class="abIconClose"> </span>', b, "</p></div>"].join(""))),
                    e.insertAfter(d)
                }
                c.show(),
                A.set("configured", !1),
                B.set("configured", !1),
                C.abortConfiguration()
            },
            unmountStrategy: function(a) {
                a.isMounted() && (a.unsubscribe("error", C.onStrategyError),
                a.unmount())
            },
            mountStrategy: function(a, b) {
                return u && a !== u && C.unmountStrategy(u),
                a.isMounted() || (a.subscribe("error", C.onStrategyError),
                a.mount(b)),
                u = a,
                a
            },
            selectAndMountStrategy: function(a, b) {
                return C.mountStrategy(t[a], b)
            },
            showConfigurationWidget: function() {
                x.addClass("ab-active"),
                C.getConfigurationPrompt().hide()
            },
            getConfigurationPrompt: function() {
                return x.find(".abjs-localnews-configuration-prompt")
            },
            abortConfiguration: function() {
                w.publish("configure:abort"),
                w.publish("configure:end")
            },
            confirmConfiguration: function() {
                w.publish("configure:confirm"),
                w.publish("configure:end")
            },
            trackLocation: function() {
                o(),
                C.selectAndMountStrategy(!0, !0).subscribe("success", C.confirmConfiguration)
            },
            positionUpdatedExternallyAndWidgetNotConfigured: function() {
                C.trackLocation()
            },
            configureStart: function() {
                C.showConfigurationWidget(),
                w.publish("configure:start")
            },
            setStrategySettings: function(a) {
                C.eachStrategy(function(b) {
                    b.setSettings(a)
                })
            },
            eachStrategy: function(a) {
                Object.keys(t).forEach(function(b) {
                    a(t[b])
                })
            }
        };
        return w = {
            init: function() {
                g.isApp() || a(".abjs-localnews").addClass("abNotInApp"),
                void 0 === A.get("trackingLocation") && A.set("trackingLocation", Boolean(d.isSupported() && d.getStoredLocation(-1))),
                t = {
                    true: f({
                        node: x,
                        provider: y,
                        settings: A
                    }),
                    false: e({
                        node: x,
                        provider: y,
                        settings: A
                    })
                },
                C.selectAndMountStrategy(this.isConfigured() && A.get("trackingLocation")),
                this.isConfigured() || C.getConfigurationPrompt().show(),
                s()
            },
            isConfigured: function() {
                return A.isConfigured()
            },
            isConfigurable: function() {
                return !0
            },
            numArticles: function() {
                return z
            },
            getLocality: function() {
                return Promise.resolve(A.get("locality"))
            }
        },
        b.makeObservable(w),
        w
    }
}),
define("localnews/configuration/non-configurable-strategy", [], function() {
    "use strict";
    return function(a) {
        var b = a.node;
        return {
            mount: function() {
                b.find(".abjs-localnews-selectlocality").hide()
            },
            unmount: function() {
                b.find(".abjs-localnews-selectlocality").show()
            }
        }
    }
}),
define("localnews/configuration/selection-strategy", ["jquery", "observable"], function(a, b) {
    "use strict";
    return function(c) {
        var d = c.node
          , e = c.settings
          , f = !1
          , g = "input[name=locality]";
        d.on("change.selectionStrategy", g, function() {
            e.set("locality", a(this).val()),
            h.publish("active")
        });
        var h = {
            setSettings: function(a) {
                e = a
            },
            mount: function() {
                f = !0;
                var b = e.get("locality") || "";
                d.find(".ab-localnews-localitycontainer").find(g).filter(function() {
                    return a(this).val() === b
                }).prop("checked", !0),
                e.set("trackingLocation", !1),
                setTimeout(function() {
                    h.publish("success")
                }, 0)
            },
            unmount: function() {
                f = !1,
                d.find(".ab-localnews-localitycontainer").find(g).prop("checked", !1)
            },
            isMounted: function() {
                return f
            }
        };
        return b.makeObservable(h),
        h
    }
}),
define("localnews/configuration/tracking-strategy", ["geolocation", "jquery", "observable"], function(a, b, c) {
    "use strict";
    return function(b) {
        function d(b) {
            return new Promise(function(c, d) {
                a.getCurrentPosition(c, d, {
                    requestFromApp: b,
                    requestedBy: "localnews"
                })
            }
            )
        }
        function e(a) {
            return i(),
            n.set("locality", a),
            a
        }
        function f(a) {
            return a.id
        }
        function g(a) {
            return i(),
            p.find(".abjs-localnews-currentlocation").find(".abjs-localnews-currentlocation-text").text(n.getLocalityName(a) || "Alla orter"),
            a
        }
        function h(a) {
            return o.getLocalityForPosition(a).then(f).then(e).then(g)
        }
        function i(a) {
            if (!q)
                throw "trackingStrategy is not mounted";
            return a
        }
        function j(a) {
            m.publish("error", a)
        }
        function k() {
            m.publish("success"),
            a.subscribe("position:updated", h)
        }
        function l(a) {
            a && a.code && j(a.code === a.PERMISSION_DENIED ? "Du har inaktiverat platstjänster för Aftonbladet." : "Kunde inte hitta din nuvarande position.")
        }
        var m, n = b.settings, o = b.provider, p = b.node, q = !1;
        return m = {
            setSettings: function(a) {
                n = a
            },
            mount: function(a) {
                q = !0,
                p.find(".abjs-localnews-currentlocation").addClass("ab-active").find(".abjs-localnews-currentlocation-text").text("Hämtar position..."),
                d(a).then(h).then(k, l),
                n.set("trackingLocation", !0)
            },
            unmount: function() {
                q = !1,
                a.unsubscribe("position:updated", h),
                p.find(".abjs-localnews-currentlocation").removeClass("ab-active").find(".abjs-localnews-currentlocation-text").text("Använd nuvarande position")
            },
            isMounted: function() {
                return q
            }
        },
        c.makeObservable(m),
        m
    }
}),
define("localnews/fixed-configuration", ["observable", "localnews/configuration/non-configurable-strategy"], function(a, b) {
    "use strict";
    return function(c) {
        var d = c.settings
          , e = b({
            node: c.node
        })
          , f = c.amount
          , g = {
            init: function() {
                e.mount()
            },
            isConfigured: function() {
                return !0
            },
            isConfigurable: function() {
                return !1
            },
            numArticles: function() {
                return f
            },
            getLocality: function() {
                return Promise.resolve(d.get("locality"))
            }
        };
        return a.makeObservable(g),
        g
    }
}),
define("localnews/initializer", ["jquery", "abse", "page", "localnews/widget", "localnews/configuration", "localnews/provider", "localnews/api-client", "localnews/settings", "localnews/persistent-settings", "localnews/plugin/resize", "localnews/plugin/site-catalyst", "handlebars.templates"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    function l(a) {
        j(a),
        k(a)
    }
    function m(a) {
        a.node.removeClass("abHidden"),
        a.widget.render()
    }
    return {
        init: function(j) {
            var k, n = {
                selector: ".abjs-localnews",
                showStreamer: !0,
                streamerTitle: "Lokala nyheter"
            };
            if (j = a.extend(n, j),
            k = a(j.selector),
            k.length) {
                var o = new g({
                    host: c.localnews.host
                })
                  , p = k.data("localnews")
                  , q = p.queryParamLocality ? new h(p.localities,{
                    locality: p.queryParamLocality
                }) : new i(p.localities,"localnews/settings")
                  , r = new f({
                    api: o
                });
                j.settings = q,
                j.provider = r;
                var s = k.map(function() {
                    var c = a(this)
                      , f = c.data("localnews")
                      , g = {
                        node: c,
                        settings: q,
                        provider: r,
                        amount: f.amount
                    }
                      , h = a.extend({}, j, {
                        node: c,
                        settings: q,
                        provider: r,
                        userConfiguration: e(g),
                        template: b.template.localnews.list,
                        articleTemplate: b.template["omni-teaser"].teaser,
                        adTemplate: b.template.localnews.localNativeAds,
                        showAds: f.showAds,
                        showMoreNewsLink: f.showMoreNewsLink,
                        moreNewsUri: f.moreNewsUri,
                        nativeAds: f.nativeAds
                    });
                    return c.removeAttr("data-localnews"),
                    {
                        widget: new d(h),
                        node: c
                    }
                }).get();
                setTimeout(function() {
                    s.forEach(function(a) {
                        l(a),
                        m(a)
                    })
                }, 0)
            }
        }
    }
}),
define("localnews/persistent-settings", ["local-storage", "localnews/settings"], function(a, b) {
    "use strict";
    function c(c, d) {
        var e = a.readValue(d) || {}
          , f = new b(c,e);
        return f.subscribe("change", function() {
            a.persistValue(d, e)
        }),
        f
    }
    return c
}),
define("localnews/plugin/resize", ["events/resize"], function(a) {
    "use strict";
    return function(b) {
        function c() {
            k.hasClass("ab-active") ? g.css({
                height: i + "px"
            }) : g.css({
                height: h + "px"
            })
        }
        function d() {
            h = e.outerHeight(!0),
            i = f.outerHeight(!0),
            c()
        }
        var e, f, g, h, i, j = b.widget, k = b.node;
        j.subscribe("initialRender", function() {
            e = k.find(".abAnimCardFront"),
            f = k.find(".abAnimCardBack"),
            g = k.find(".ab-localnews-contentcontainer"),
            a.addEventListener(d),
            j.subscribe("render", d),
            j.subscribe("widget:show-articles", c),
            j.subscribe("widget:show-localities", c)
        })
    }
}),
define("localnews/plugin/site-catalyst", ["ab-sitecatalyst", "page", "geolocation"], function(a, b, c) {
    "use strict";
    function d(a) {
        return {
            trackingStatus: c.convertTrackingStatusToBool(c.getTrackingStatus()),
            locality: a.locality,
            trackingLocation: a.trackingLocation
        }
    }
    function e(b) {
        a.trackLocalNewsExposure(d(b))
    }
    function f(b) {
        a.trackLocalNewsSelection(d(b))
    }
    var g = function() {
        var a = !1;
        return function(b) {
            a || (a = !0,
            e(b))
        }
    }();
    return function(a) {
        var c = a.widget;
        b.localnews.statisticsEnabled && (b.localnews.exposureTrackingEnabled && c.subscribe("initialRender", g),
        c.subscribe("locality-select:selected", f))
    }
}),
define("localnews/provider", [], function() {
    "use strict";
    function a(a) {
        this._api = a.api,
        this._usedArticles = {}
    }
    return a.prototype = {
        getArticles: function(a, b, c) {
            return c = c || {},
            this._currentLocation !== b && (this._currentLocation = b),
            this._api.getArticles({
                locality: b
            }).then(function(d) {
                if (this._currentLocation === b) {
                    var e = this._createFilter(c.filter);
                    return this._selectArticles(d.result, a, e)
                }
            }
            .bind(this))
        },
        getLocalityForPosition: function(a) {
            return this._api.getLocalityForPosition(a).then(function(a) {
                return a.result
            })
        },
        _selectArticles: function(a, b, c) {
            var d = [];
            return a.every(function(a) {
                return c(a) && d.push(a),
                d.length < b
            }),
            d
        },
        _createFilter: function(a) {
            var b = a || function() {
                return !0
            }
            ;
            return function(a) {
                return b(a)
            }
        }
    },
    a
}),
define("localnews/settings", ["observable", "jquery"], function(a, b) {
    "use strict";
    function c(b, c) {
        a.makeObservable(this),
        this._localities = b || [],
        this._values = c || {},
        this._props = ["configured", "locality", "trackingLocation"]
    }
    return c.prototype = {
        copy: function() {
            return new c(this._localities,b.extend({}, this._values))
        },
        sync: function(a) {
            this._props.forEach(function(b) {
                this.set(b, a.get(b))
            }
            .bind(this))
        },
        hasProp: function(a) {
            return this.getProps().indexOf(a) >= 0
        },
        getProps: function() {
            return this._props
        },
        set: function(a, b) {
            if (this.hasProp(a)) {
                var c = this._values
                  , d = c[a];
                return ("object" == typeof b || b !== d) && (c[a] = b,
                this.publish("change:" + a, {
                    prop: a,
                    oldVal: d,
                    newVal: b
                }),
                this._hasChanged(),
                !0)
            }
            return !1
        },
        get: function(a) {
            return void 0 !== a ? this.hasProp(a) ? this._values[a] : void 0 : b.extend({}, this._values)
        },
        remove: function(a) {
            if (this.hasProp(a)) {
                var b = this._values
                  , c = b[a];
                b[a] = void 0,
                this.publish("change", {
                    prop: a,
                    oldVal: c,
                    newVal: void 0
                })
            }
        },
        getLocalityName: function(a) {
            return this._localities.filter(function(b) {
                return b.id === a
            }).map(function(a) {
                return a.displayName
            }).shift()
        },
        getSelectedLocality: function() {
            var a = this.get().locality;
            if (a)
                return this.getLocalityName(a)
        },
        getLocalities: function() {
            return this._localities
        },
        isConfigured: function() {
            return void 0 === this._values.configured && this.set("configured", Boolean(this._values.trackingLocation || this._values.locality)),
            this._values.configured
        },
        _hasChanged: function() {
            this._changeTimer && (clearTimeout(this._changeTimer),
            delete this._changeTimer),
            this._changeTimer = setTimeout(function() {
                this.publish("change", this.get())
            }
            .bind(this), 0)
        }
    },
    c
}),
define("localnews/widget", ["jquery", "util", "observable", "geolocation"], function(a, b, c, d) {
    "use strict";
    function e(a) {
        this._title = a.showStreamer && a.streamerTitle,
        this._articleConfig = a.articleConfiguration,
        this._userConfig = a.userConfiguration,
        this._moreNews = {
            visible: a.showMoreNewsLink,
            uri: a.moreNewsUri
        },
        this._showAds = a.showAds,
        this._node = a.node,
        this._provider = a.provider,
        this._settings = a.settings,
        this._template = a.template,
        this._articleTemplate = a.articleTemplate,
        this._nativeAds = a.nativeAds,
        this._adTemplate = a.adTemplate,
        c.makeObservable(this)
    }
    return e.prototype = {
        render: function() {
            this._initialRender(),
            this._userConfig.init(),
            this._addListeners(),
            this._articlesRenderPipeline()
        },
        _initialRender: function() {
            var b = a(this._template({
                availableWidth: this._node.width(),
                streamerTitle: this._title,
                localities: this._settings.getLocalities(),
                canDetectLocation: d.isSupported(),
                positionButtonState: this._settings.get("trackingLocation") ? "on" : "off",
                moreNews: this._moreNews
            }));
            this._node.empty().append(b),
            this._articlesNode = this._node.find(".ab-localnews-articles"),
            this._selectedLocalityNode = this._node.find(".abjs-localnews-selectedlocality"),
            this.publish("initialRender", this._settings.get())
        },
        _articlesRenderPipeline: function() {
            this._renderPlaceholders();
            var a = this._userConfig.getLocality();
            a.then(this._updateLocalitySelection.bind(this)),
            a.then(this._fetchArticles.bind(this)).then(this._renderArticles.bind(this), this._renderError.bind(this))
        },
        _fetchArticles: function(a) {
            var b = this._showAds
              , c = !1
              , d = {
                filter: function(a) {
                    var d = Boolean(a.image);
                    if (a.sponsored) {
                        if (c || !b)
                            return !1;
                        c = d
                    }
                    return d
                }
            };
            return this._provider.getArticles(this._userConfig.numArticles(), a, d)
        },
        _renderPlaceholders: function() {
            this._renderArticles(b.repeat({
                placeholder: !0
            }, this._userConfig.numArticles()))
        },
        _renderArticle: function(b) {
            var c = this._node.width()
              , d = a.extend({
                tv: !1
            }, b, {
                availableWidth: c,
                font: this._articleConfig.font,
                layout: {
                    noMetaRow: this._articleConfig.layout.noMetaRow || !1,
                    maxLines: this._articleConfig.layout.maxLines || 2,
                    availableWidth: c - (this._articleConfig.layout.margin + this._articleConfig.layout.padding + (b.image ? this._articleConfig.layout.imageWidth : 0))
                },
                sectionUri: this._moreNews.uri
            });
            return this._articleTemplate(d)
        },
        _renderArticleNativeAds: function(b) {
            var c = this._node.width()
              , d = a.extend({
                tv: !1
            }, b, {
                availableWidth: c,
                font: this._articleConfig.font,
                layout: {
                    noMetaRow: this._articleConfig.layout.noMetaRow || !1,
                    maxLines: this._articleConfig.layout.maxLines || 2,
                    availableWidth: c - (this._articleConfig.layout.margin + this._articleConfig.layout.padding + (b.img ? this._articleConfig.layout.imageWidth : 0))
                }
            });
            return this._adTemplate(d)
        },
        _renderArticles: function(a) {
            var b = a.map(this._renderArticle.bind(this))
              , c = this._settings.get("locality");
            this._nativeAds && (this._nativeAds.hasOwnProperty(c) ? b.splice(2, 0, this._renderArticleNativeAds(this._nativeAds[c])) : this._nativeAds.hasOwnProperty("alla") && b.splice(2, 0, this._renderArticleNativeAds(this._nativeAds.alla))),
            this._articlesNode.empty().append(b.join("\n")),
            this.publish("render")
        },
        _renderError: function() {
            this._articlesNode.empty().append('<div class="ab-error">Ett fel har uppstått. Välj ort för att försöka igen.</div>'),
            this.publish("render")
        },
        _addListeners: function() {
            this._userConfig.subscribe("configure:start", function() {
                this.publish("widget:show-localities")
            }
            .bind(this)),
            this._userConfig.subscribe("configure:end", function() {
                this.publish("widget:show-articles")
            }
            .bind(this)),
            this._settings.subscribe("change:locality", this._articlesRenderPipeline.bind(this)),
            this._settings.subscribe("change", function() {
                this.publish("locality-select:selected", this._settings.get())
            }
            .bind(this))
        },
        _updateLocalitySelection: function(a) {
            a ? this._selectedLocalityNode.text(this._settings.getLocalityName(a)) : this._selectedLocalityNode.text("Alla orter")
        }
    },
    e
}),
define("omni-teaser-widget/api-client", ["jquery", "page", "api-client"], function(a, b, c) {
    "use strict";
    function d(a) {
        c.call(this, a)
    }
    return d.prototype = a.extend({}, c.prototype, {
        getArticles: function(a) {
            var b = this._getUrl("/v1/latest/teasers");
            return this._fetchData(b, a, {
                numAttempts: 2
            })
        }
    }),
    d
}),
define("omni-teaser-widget/initializer", ["jquery", "abse", "page", "omni-teaser-widget/widget", "omni-teaser-widget/provider", "omni-teaser-widget/api-client", "handlebars.templates"], function(a, b, c, d, e, f) {
    "use strict";
    function g() {}
    function h(a) {
        a.widget.render()
    }
    function i(c, f) {
        return function(g) {
            var h = new e({
                api: c,
                category: g.category
            });
            return g.markers.map(function(c) {
                var e = a(c)
                  , g = e.data("omniTeaser")
                  , i = a.extend({}, f, {
                    node: e,
                    provider: h,
                    articleTemplate: b.template["omni-teaser"].teaser,
                    numArticles: g.numArticles,
                    sectionUri: g.homeSectionUrl
                });
                return {
                    widget: new d(i),
                    node: e
                }
            })
        }
    }
    function j(b) {
        var c = {};
        return b.each(function(b, d) {
            var e = a(d)
              , f = e.data("omniTeaser")
              , g = f.category;
            c[g] || (c[g] = []),
            c[g].push(e)
        }),
        Object.keys(c).map(function(a) {
            return {
                category: a,
                markers: c[a]
            }
        })
    }
    return {
        init: function(b) {
            var d = ".abjs-omni-teaser-container"
              , e = a(d);
            e.length && setTimeout(function() {
                var a = new f({
                    host: c.omniTeasers.host
                });
                j(e).map(i(a, b)).reduce(function(a, b) {
                    return a.concat(b)
                }).forEach(function(a) {
                    g(a),
                    h(a)
                })
            }, 0)
        }
    }
}),
define("omni-teaser-widget/provider", [], function() {
    "use strict";
    function a(a) {
        this._api = a.api,
        this._category = a.category,
        this._usedArticles = {}
    }
    return a.prototype = {
        getArticles: function(a, b) {
            return b = b || {},
            this._api.getArticles({
                for: this._category
            }).then(function(c) {
                var d = this._createFilter(b.filter)
                  , e = this._selectArticles(c.result, a, d);
                return e.forEach(function(a) {
                    this._usedArticles[a.id] = !0
                }
                .bind(this)),
                e
            }
            .bind(this))
        },
        _selectArticles: function(a, b, c) {
            var d = [];
            return a.every(function(a) {
                return c(a) && d.push(a),
                d.length < b
            }),
            d
        },
        _createFilter: function(a) {
            var b = this._usedArticles
              , c = a || function() {
                return !0
            }
            ;
            return function(a) {
                return !b[a.id] && c(a)
            }
        }
    },
    a
}),
define("omni-teaser-widget/widget", ["jquery", "util", "observable"], function(a, b, c) {
    "use strict";
    function d(a) {
        this._numArticles = a.numArticles,
        this._articleConfig = a.articleConfiguration,
        this._articlesNode = a.node,
        this._provider = a.provider,
        this._articleTemplate = a.articleTemplate,
        this._sectionUri = a.sectionUri,
        c.makeObservable(this)
    }
    return d.prototype = {
        render: function() {
            this._articlesRenderPipeline(),
            this.publish("initialRender")
        },
        _articlesRenderPipeline: function() {
            Promise.resolve().then(this._fetchArticles.bind(this)).then(this._renderArticles.bind(this)).catch(this._renderError.bind(this))
        },
        _fetchArticles: function() {
            var a = {
                filter: function(a) {
                    return !!a.image
                }
            };
            return this._provider.getArticles(this._numArticles, a)
        },
        _renderArticle: function(b) {
            var c = this._articlesNode.width()
              , d = a.extend({}, b, {
                availableWidth: c,
                font: this._articleConfig.font,
                layout: {
                    noMetaRow: this._articleConfig.layout.noMetaRow || !1,
                    maxLines: this._articleConfig.layout.maxLines || 2,
                    availableWidth: c - (this._articleConfig.layout.margin + this._articleConfig.layout.padding + (b.image ? this._articleConfig.layout.imageWidth : 0))
                },
                sectionUri: this._sectionUri
            });
            return this._articleTemplate(d)
        },
        _renderArticles: function(a) {
            var b = a.map(this._renderArticle.bind(this));
            this._articlesNode.empty().append(b.join("\n")),
            this.publish("render")
        },
        _renderError: function(a) {
            window.console.log && window.console.log("omni-teaser-widget/widget:", a),
            this._articlesNode.empty().append('<div class="ab-error">Ett fel har uppstått.</div>'),
            this._articlesNode.closest(".ab-omni-teaser-widget").hide(),
            this.publish("render")
        }
    },
    d
}),
define("web-notifications", ["jquery", "local-storage", "win"], function(a, b, c) {
    return function(a) {
        function b(d) {
            if (c[d])
                return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b),
            e.loaded = !0,
            e.exports
        }
        var c = {};
        return b.m = a,
        b.c = c,
        b.p = "/assets/",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            Object.keys(a || {}).forEach(function(b) {
                var c = a[b]
                  , d = e.createCloseEventFunc(c)
                  , h = "fishStick" !== c.targetArea
                  , i = e.createActionEventFunc(c, h);
                f.show(c, i, d),
                g.show.forEach(function(a) {
                    return a(c)
                })
            })
        }
        var e = c(4)
          , f = c(5)
          , g = {
            show: []
        };
        c(9),
        a.exports = function(a) {
            return {
                run: function() {
                    return e.get(a).then(d)
                },
                on: function(a, b) {
                    if (g[a] && "function" == typeof b)
                        return g[a].push(b)
                }
            }
        }
    }
    , function(a, b) {
        "use strict";
        function c(a, b) {
            var c = a && a.match(b);
            if (c) {
                var d = c[1];
                return decodeURIComponent(d)
            }
        }
        function d(a, b) {
            var c = a;
            return Object.keys(b).forEach(function(a) {
                c = c.replace("{" + a + "}", void 0 !== b[a] ? b[a] : "")
            }),
            c
        }
        a.exports = {
            match: c,
            cookieValue: function(a) {
                return c(document.cookie, new RegExp(a + "=([^;]+)"))
            },
            replace: d
        }
    }
    , function(a, b, c) {
        "use strict";
        function d() {
            var a = f.cookieValue("_burtAgency");
            return JSON.parse(a).id
        }
        function e() {
            try {
                var a = JSON.parse(f.cookieValue("_burtNS")).bomclv2;
                return g = a.value["aftonbladet.se/" + d()].master_id
            } catch (a) {} finally {
                h = !0
            }
        }
        var f = c(1)
          , g = void 0
          , h = !1;
        a.exports = {
            getMasterId: function() {
                return h ? g : e()
            }
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return {
                URL: document.location.href,
                Text: a.textMessage,
                TargetArea: a.targetArea,
                NotificationId: a.id,
                ABTestSegment: h.cookieValue("X-AB-Segment")
            }
        }
        function e(a, b, c) {
            g.mixpanel && ("function" == typeof g.mixpanel.track ? g.mixpanel.track(a, b, c) : g.mixpanel.push(["track", a, b]))
        }
        function f(a) {
            var b = a.id;
            g.document.createElement("img").src = "http://aftonbladet.aftonbladet.se/webApp/APP3842?p2=" + i.getMasterId() + "&p3=" + b + "&p4=view"
        }
        var g = c(12)
          , h = c(1)
          , i = c(2);
        a.exports = {
            trackClose: function(a) {
                e("AB - CRM Notification close", d(a))
            },
            trackAction: function(a, b) {
                e("AB - CRM Notification click", d(a), b)
            },
            trackView: function(a) {
                f(a),
                e("AB - CRM Notification view", d(a))
            },
            getDistinctId: function(a) {
                if (g.mixpanel && g.mixpanel.get_distinct_id)
                    return g.mixpanel.get_distinct_id();
                try {
                    return a ? JSON.parse(g.localStorage.getItem("mp_0b2b11f9967977406be12a895ab056fc_mixpanel")).distinct_id : JSON.parse(g.localStorage.getItem("mp_481649dedec06b3434f5c2618942e33c_mixpanel")).distinct_id
                } catch (a) {}
            }
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return q = a,
            a ? "https://ab-web-notifications-stage.herokuapp.com/crm/notifications" : "https://ab-web-notifications.herokuapp.com/crm/notifications"
        }
        function e() {
            var a = m.readValue("crm-exclude");
            if (void 0 !== a && null !== a) {
                var b = function(b) {
                    return a[b].expires > p()
                };
                return Object.keys(a).filter(b)
            }
        }
        function f() {
            return o.cookieValue("userInfo")
        }
        function g() {
            return o.cookieValue("X-AB-Segment")
        }
        function h() {
            var a = o.cookieValue("s_vi");
            return o.match(a, /\[CS\]v1\|([^;]+)\[CE\]/)
        }
        function i(a) {
            var b = m.readValue("crm-exclude") || {}
              , c = (new Date).getTime() + 864e5;
            b[a] ? (b[a].expires = c,
            b[a].closed++) : b[a] = {
                expires: c,
                closed: 1
            },
            m.persistValue("crm-exclude", b)
        }
        function j(a) {
            return Object.keys(a || {}).forEach(function(b) {
                var c = a[b];
                c.actionUrl = c.actionUrl ? o.replace(c.actionUrl, {
                    burtId: n.getMasterId(),
                    mpId: l.getDistinctId(q)
                }) : ""
            }),
            a
        }
        var k = c(10)
          , l = c(3)
          , m = c(11)
          , n = c(2)
          , o = c(1)
          , p = function() {
            return new Date
        }
          , q = !0;
        a.exports = {
            get: function(a) {
                return new Promise(function(b, c) {
                    return k.ajax({
                        url: encodeURI(d(a)),
                        data: {
                            exclude: e(),
                            userInfo: f(),
                            sid: h(),
                            segment: g(),
                            bid: n.getMasterId()
                        },
                        traditional: !0,
                        success: b,
                        error: c
                    })
                }
                ).then(j)
            },
            createCloseEventFunc: function(a) {
                return function() {
                    i(a.id),
                    l.trackClose(a)
                }
            },
            createActionEventFunc: function(a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                return function() {
                    b && i(a.id);
                    var c = a.actionUrl ? function() {
                        return document.location = a.actionUrl
                    }
                    : function() {}
                    ;
                    l.trackAction(a, c),
                    setTimeout(c, 300)
                }
            }
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a, b) {
            return function(c) {
                c.preventDefault(),
                b.className += " closeAnim",
                setTimeout(function() {
                    b && b.parentNode && b.parentNode.removeChild(b)
                }, 300),
                "function" == typeof a && a()
            }
        }
        function e(a, b) {
            return function(c) {
                c.preventDefault(),
                b.parentNode.removeChild(b),
                "function" == typeof a && a()
            }
        }
        function f(a, b) {
            a.addEventListener ? a.addEventListener("click", b) : a.attachEvent && a.attachEvent("onclick", b)
        }
        function g(a, b, c) {
            var d = a.querySelector(".abNotifyActionBtn");
            c.actionText && c.actionText.length > 0 ? (f(d, e(b, a)),
            d.textContent = c.actionText) : d.classList.add("noCTABtn")
        }
        function h() {
            var a = document.createElement("div");
            return a.className = "abNotificationWrapper abNotification",
            a.id = "abNotification",
            a.innerHTML = '<a class="abNotificationCell abNotifyCloseBtn left" href="javascript:void(0);">\n            <div class="abIconCloseSimple"></div>\n        </a>\n        <div class="abNotificationCell padder"></div>\n        <div class="abNotificationCell abNotifyLogoBox"><img class="abNotifyLogoBoxImg" /></div>\n        <div class="abNotificationCell">\n            <h4 class="abNtfTitle"></h4>\n            <div class="abNtfTextMessage"></div>\n        </div>\n        <div class="abNotificationCell abNotifyActionBtnContainer">\n            <a class="abBtn abBtnPlus abNotifyActionBtn" href="javascript:void(0);"></a>\n        </div>\n        <div class="abNotificationCell padder"></div>\n        <a class="abNotificationCell abNotifyCloseBtn right" href="javascript:void(0);">\n            <div class="abIconCloseSimple"></div>\n        </a>',
            a
        }
        function i(a, b, c) {
            var d = {
                standard: "",
                sport: " abBox abBoxSportbladet",
                sharp: " abBox abBoxSharp"
            }
              , e = d[b.theme] || ""
              , g = b.headlineSize || 26;
            a.className += " abItemHLine",
            a.innerHTML = '<div class="' + e + '">\n            <a class="abBlock" href="' + b.actionUrl + '">\n                <h2 class="abS' + g + '">' + b.headline + "</h2>\n                <p>" + b.textMessage + "</p>\n            </a>\n        </div>",
            "function" == typeof c && f(a.querySelector("a"), c)
        }
        function j() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? 26 : arguments[0];
            return a < 23 ? " abS16 abHeaderSmall" : a < 33 ? " abS18 abHeaderMedium" : a < 43 ? " abS20 abHeaderLarge" : " abHeaderXLarge"
        }
        function k(a, b, c) {
            var d = {
                standard: "",
                sport: " abTheme-sportbladet abBoxSportbladet",
                sharp: " abBox abBoxSharp"
            }
              , e = d[b.theme] || ""
              , g = j(b.headlineSize);
            a.className += " abBox abTeaser abFlowItem abShadowBox" + e,
            a.innerHTML = '<a class="abBlock" href="' + b.actionUrl + '">\n            <div class="abTeaserText">\n                <h2 class="' + g + '">' + b.headline + "</h2>\n                <p>" + b.textMessage + "</p>\n            </div>\n        </a>",
            "function" == typeof c && f(a.querySelector("a"), c)
        }
        function l(a, b) {
            for (var c = a.querySelectorAll(".abNotifyCloseBtn"), e = 0; e < c.length; e++)
                f(c[e], d(b, a))
        }
        function m(a, b) {
            var c = a.querySelector("img");
            c.onload = function() {
                null !== document.body && a && document.body.appendChild(a)
            }
            ,
            c.src = b.logoUrl
        }
        function n(a, b, c) {
            var d = h();
            g(d, b, a),
            l(d, c),
            m(d, a),
            d.querySelector(".abNtfTitle").textContent = a.headline,
            d.querySelector(".abNtfTextMessage").textContent = a.textMessage,
            o.trackView(a)
        }
        var o = c(3);
        a.exports = {
            show: function(a, b, c) {
                if ("fishStick" === a.targetArea || "fishStickClosable" === a.targetArea) {
                    var d = "fishStickClosable" === a.targetArea ? "abPersonalizedFishStickClosable" : "abPersonalizedFishStick"
                      , e = document.getElementById(d + "Desktop")
                      , f = document.getElementById(d + "Mobile");
                    e && 0 === e.children.length && i(e, a, b),
                    f && 0 === f.children.length && k(f, a, b),
                    o.trackView(a)
                } else
                    document.getElementById("abNotification") || n(a, b, c)
            }
        }
    }
    , function(a, b, c) {
        b = a.exports = c(7)(),
       // b.push([a.id, ".abNotificationWrapper{min-height:108px;box-sizing:border-box;position:fixed;bottom:0;left:0;width:100%;z-index:601;animation:abNotifyslideIn ease-out .3s forwards;animation-iteration-count:1;background:hsla(0,0%,98%,.95)}.abNotification{box-shadow:0 -2px 2px 0 rgba(0,0,0,.1);font-family:Arial,Helvetica,Verdana,Geneva,sans-serif;text-align:left;box-sizing:border-box;border-top:rgba(0,0,0,.09);display:table;padding:0 4px}.closeAnim{animation-iteration-count:1;animation:abNotifyslideOut ease-out .3s forwards}.abNotificationCell{display:table-cell;vertical-align:middle;padding:1em 0}.abNotifyLogoBox{height:100%;width:50px;padding-right:15px;padding-left:5px}.abNotifyLogoBoxImg{display:block;width:100%}.abNotifyCloseBtn{padding:1em;text-align:center;color:#7b7b7c}.abNotifyActionBtnContainer{text-align:right}.abNtfTextMessage{margin-top:4px;margin-bottom:4px;overflow:hidden}.abNtfTitle{margin-bottom:0;font-size:14px}.noCTABtn,.padder,.right{display:none}.padder{width:25%}@media (max-width:320px){.abNotifyLogoBox{display:none}}@media (min-width:1024px){.padder{display:table-cell}.abNotifyLogoBox{padding-left:15px}.abNtfTitle{font-size:16px}.right{display:table-cell}.left{display:none}}@media (max-width:480px){.abNotification{font-size:13px}.abNotifyActionBtn{font-size:12px;min-width:77px;padding:10px 9px}}@media (min-width:480px){.abNotifyActionBtn{min-width:177px}}@keyframes abNotifyslideIn{0%{margin-bottom:-108px}to{margin-bottom:0}}@keyframes abNotifyslideOut{0%{margin-bottom:0}to{margin-bottom:-108px}}", ""])
	   b.push([a.id, ".abNotificationWrapper{min-height:108px;box-sizing:border-box;position:fixed;bottom:0;left:0;width:100%;z-index:601;animation:abNotifyslideIn ease-out .3s forwards;animation-iteration-count:1;background:rgba(250,250,250,.95)}.abNotification{box-shadow:0 -2px 2px 0 rgba(0,0,0,.1);font-family:Arial,Helvetica,Verdana,Geneva,sans-serif;text-align:left;box-sizing:border-box;border-top:rgba(0,0,0,.09);display:table;padding:0 4px}.closeAnim{animation-iteration-count:1;animation:abNotifyslideOut ease-out .3s forwards}.abNotificationCell{display:table-cell;vertical-align:middle;padding:1em 0}.abNotifyLogoBox{height:100%;width:50px;padding-right:15px;padding-left:5px}.abNotifyLogoBoxImg{display:block;width:100%}.abNotifyCloseBtn{padding:1em;text-align:center;color:#7b7b7c}.abNotifyActionBtnContainer{text-align:right}.abNtfTextMessage{margin-top:4px;margin-bottom:4px;overflow:hidden}.abNtfTitle{margin-bottom:0;font-size:14px}.noCTABtn,.padder,.right{display:none}.padder{width:25%}@media (max-width:320px){.abNotifyLogoBox{display:none}}@media (min-width:1024px){.padder{display:table-cell}.abNotifyLogoBox{padding-left:15px}.abNtfTitle{font-size:16px}.right{display:table-cell}.left{display:none}}@media (max-width:480px){.abNotification{font-size:13px}.abNotifyActionBtn{font-size:12px;min-width:77px;padding:10px 9px}}@media (min-width:480px){.abNotifyActionBtn{min-width:177px}}@keyframes abNotifyslideIn{0%{margin-bottom:-108px}to{margin-bottom:0}}@keyframes abNotifyslideOut{0%{margin-bottom:0}to{margin-bottom:-108px}}", ""])
    }
    , function(a, b) {
        a.exports = function() {
            var a = [];
            return a.toString = function() {
                for (var a = [], b = 0; b < this.length; b++) {
                    var c = this[b];
                    c[2] ? a.push("@media " + c[2] + "{" + c[1] + "}") : a.push(c[1])
                }
                return a.join("")
            }
            ,
            a.i = function(b, c) {
                "string" == typeof b && (b = [[null, b, ""]]);
                for (var d = {}, e = 0; e < this.length; e++) {
                    var f = this[e][0];
                    "number" == typeof f && (d[f] = !0)
                }
                for (e = 0; e < b.length; e++) {
                    var g = b[e];
                    "number" == typeof g[0] && d[g[0]] || (c && !g[2] ? g[2] = c : c && (g[2] = "(" + g[2] + ") and (" + c + ")"),
                    a.push(g))
                }
            }
            ,
            a
        }
    }
    , function(a, b, c) {
        function d(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c]
                  , e = n[d.id];
                if (e) {
                    e.refs++;
                    for (var f = 0; f < e.parts.length; f++)
                        e.parts[f](d.parts[f]);
                    for (; f < d.parts.length; f++)
                        e.parts.push(j(d.parts[f], b))
                } else {
                    for (var g = [], f = 0; f < d.parts.length; f++)
                        g.push(j(d.parts[f], b));
                    n[d.id] = {
                        id: d.id,
                        refs: 1,
                        parts: g
                    }
                }
            }
        }
        function e(a) {
            for (var b = [], c = {}, d = 0; d < a.length; d++) {
                var e = a[d]
                  , f = e[0]
                  , g = e[1]
                  , h = e[2]
                  , i = e[3]
                  , j = {
                    css: g,
                    media: h,
                    sourceMap: i
                };
                c[f] ? c[f].parts.push(j) : b.push(c[f] = {
                    id: f,
                    parts: [j]
                })
            }
            return b
        }
        function f(a, b) {
            var c = q()
              , d = t[t.length - 1];
            if ("top" === a.insertAt)
                d ? d.nextSibling ? c.insertBefore(b, d.nextSibling) : c.appendChild(b) : c.insertBefore(b, c.firstChild),
                t.push(b);
            else {
                if ("bottom" !== a.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                c.appendChild(b)
            }
        }
        function g(a) {
            a.parentNode.removeChild(a);
            var b = t.indexOf(a);
            b >= 0 && t.splice(b, 1)
        }
        function h(a) {
            var b = document.createElement("style");
            return b.type = "text/css",
            f(a, b),
            b
        }
        function i(a) {
            var b = document.createElement("link");
            return b.rel = "stylesheet",
            f(a, b),
            b
        }
        function j(a, b) {
            var c, d, e;
            if (b.singleton) {
                var f = s++;
                c = r || (r = h(b)),
                d = k.bind(null, c, f, !1),
                e = k.bind(null, c, f, !0)
            } else
                a.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (c = i(b),
                d = m.bind(null, c),
                e = function() {
                    g(c),
                    c.href && URL.revokeObjectURL(c.href)
                }
                ) : (c = h(b),
                d = l.bind(null, c),
                e = function() {
                    g(c)
                }
                );
            return d(a),
            function(b) {
                if (b) {
                    if (b.css === a.css && b.media === a.media && b.sourceMap === a.sourceMap)
                        return;
                    d(a = b)
                } else
                    e()
            }
        }
        function k(a, b, c, d) {
            var e = c ? "" : d.css;
            if (a.styleSheet)
                a.styleSheet.cssText = u(b, e);
            else {
                var f = document.createTextNode(e)
                  , g = a.childNodes;
                g[b] && a.removeChild(g[b]),
                g.length ? a.insertBefore(f, g[b]) : a.appendChild(f)
            }
        }
        function l(a, b) {
            var c = b.css
              , d = b.media;
            if (d && a.setAttribute("media", d),
            a.styleSheet)
                a.styleSheet.cssText = c;
            else {
                for (; a.firstChild; )
                    a.removeChild(a.firstChild);
                a.appendChild(document.createTextNode(c))
            }
        }
        function m(a, b) {
            var c = b.css
              , d = b.sourceMap;
            d && (c += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */");
            var e = new Blob([c],{
                type: "text/css"
            })
              , f = a.href;
            a.href = URL.createObjectURL(e),
            f && URL.revokeObjectURL(f)
        }
        var n = {}
          , o = function(a) {
            var b;
            return function() {
                return void 0 === b && (b = a.apply(this, arguments)),
                b
            }
        }
          , p = o(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        })
          , q = o(function() {
            return document.head || document.getElementsByTagName("head")[0]
        })
          , r = null
          , s = 0
          , t = [];
        a.exports = function(a, b) {
            if ("object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            b = b || {},
            void 0 === b.singleton && (b.singleton = p()),
            void 0 === b.insertAt && (b.insertAt = "bottom");
            var c = e(a);
            return d(c, b),
            function(a) {
                for (var f = [], g = 0; g < c.length; g++) {
                    var h = c[g]
                      , i = n[h.id];
                    i.refs--,
                    f.push(i)
                }
                if (a) {
                    d(e(a), b)
                }
                for (var g = 0; g < f.length; g++) {
                    var i = f[g];
                    if (0 === i.refs) {
                        for (var j = 0; j < i.parts.length; j++)
                            i.parts[j]();
                        delete n[i.id]
                    }
                }
            }
        }
        ;
        var u = function() {
            var a = [];
            return function(b, c) {
                return a[b] = c,
                a.filter(Boolean).join("\n")
            }
        }()
    }
    , function(a, b, c) {
        var d = c(6);
        "string" == typeof d && (d = [[a.id, d, ""]]),
        c(8)(d, {}),
        d.locals && (a.exports = d.locals)
    }
    , function(b, c) {
        b.exports = a
    }
    , function(a, c) {
        a.exports = b
    }
    , function(a, b) {
        a.exports = c
    }
    ])
}),
define("adsblock-usagdse", ["doc", "local-storage", "jquery", "win"], function(a, b, c, d) {
    "use strict";
    function e() {
        var a = !l.contentWindow.adRequest || "none" === d.getComputedStyle(l).display;
        b.persistValue(m, a ? "on" : "off"),
        h(l)
    }
    function f() {
        b.persistValue(m, "on"),
        h(l)
    }
    function g() {
        var a = document.createElement("iframe");
        return a.className = "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links -adv.js -adv.jpg",
        a.width = "0",
        a.height = "0",
        a
    }
    function h(a) {
        a.parentNode.removeChild(a)
    }
    function i(a, b) {
        var c = b.contentDocument
          , d = c.createElement("script");
        d.src = a,
        d.onload = e,
        d.onerror = f,
        c.body.appendChild(d)
    }
    function j() {
        l = g(),
        l.addEventListener("load", function() {
            i("/dist/js/advert.js", l)
        }, !1),
        a.body.appendChild(l)
    }
    function k() {
        return b.readValue(m)
    }
    var l, m = "adblockf_state";
    return c(function() {
        j()
    }),
    {
        getStoredAdBlockState: k
    }
}),
function() {
    "use strict";
    require(["ab-desktop-abse", "single-signon-handler", "adblock-usage"], function(a, b) {
        b.init()
    })
}();
