define("ab-burt-unit-main", [], function() {
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
            (0,
            m.default)({
                addAnnotationsOnUnit: i.default,
                adLoaded: g.default,
                init: k.default,
                trackAd: q.default,
                reloadingAd: o.default
            })
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.initiate = e;
        var f = c(1)
          , g = d(f)
          , h = c(5)
          , i = d(h)
          , j = c(6)
          , k = d(j)
          , l = c(7)
          , m = d(l)
          , n = c(8)
          , o = d(n)
          , p = c(9)
          , q = d(p)
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
        function e(a, b) {
            b && (f(b),
            g(b),
            k.forceFill([b], a.burtUnitForceFilledTimeDelay))
        }
        function f(a) {
            var b = l.UnitOptions.setImpressionTrue().getResults();
            k.executeForUnits([a], function(a) {
                return k.extendTrackedUnitWithId(a, b)
            })
        }
        function g(a) {
            k.executeForUnits([a], i.connectAdVendorCampaignIds)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = e;
        var h = c(2)
          , i = d(h)
          , j = c(3)
          , k = d(j)
          , l = c(4)
    }
    , function(a, b, c) {
        var d, e;
        d = [],
        e = function() {
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
                    if (h[a])
                        return !0;
                    var b = e(a);
                    if (!b)
                        return !1;
                    for (var c in b)
                        b.hasOwnProperty(c) && b[c] && (f(a, {
                            scope: "aftonbladet.campaign",
                            name: c,
                            value: b[c]
                        }),
                        h[a] = !0);
                    return h[a]
                }
                function e(a) {
                    var b = i.parseAdTechAdIdAndBnId(a);
                    return b || (b = j.parseAppNexusCreativeIdAndMemberId(a)),
                    b
                }
                function f(a, b) {
                    k.burtApi.push(function() {
                        var c = k.burtApi.findUnit("#" + a);
                        c && c.connect(b.scope, b.name, b.value)
                    })
                }
                function g(a) {
                    delete h[a]
                }
                var h = {}
                  , i = c(1)
                  , j = c(3)
                  , k = window;
                k.burtApi = k.burtApi || [],
                a.exports = {
                    removeCampaignIdConnections: g,
                    connectAdVendorCampaignIds: d,
                    parseAppNexusCampaignIds: j.parseAppNexusCreativeIdAndMemberId,
                    parseAdTechCampaignIds: i.parseAdTechAdIdAndBnId
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a) {
                    var b, c, d, i = document.getElementById(a);
                    return i && (b = e(i),
                    d = m.getAdDOMElements(b),
                    c = h(d) ? f(d) : g(d)),
                    c
                }
                function e(a) {
                    var b = a.getElementsByTagName("iframe")[0];
                    return b || (b = a),
                    b
                }
                function f(a) {
                    var b = /Campaign ID: "([\d]*)"/
                      , c = /Banner ID: "([\d]*)"/
                      , d = i(a);
                    return l(d, b, c)
                }
                function g(a) {
                    var b = /AdId=([\d]*);/
                      , c = /BnId=([\d]*);/
                      , d = j(a);
                    return l(d, b, c)
                }
                function h(a) {
                    return void 0 !== i(a)
                }
                function i(a) {
                    for (var b = "AsdtechDeliveryInformation", c = 0; c < a.length; c++)
                        if (a[c].id === b)
                            return a[c].innerHTML
                }
                function j(a) {
                    for (var b, c = 0; c < a.length; c++)
                        if (b = "" !== a[c].innerHTML ? a[c].innerHTML : a[c].src,
                        k(b))
                            return b
                }
                function k(a) {
                    var b = "aadv.aftonbladet.se/adlink"
                      , c = "AdId";
                    return !!a && (-1 !== a.indexOf(b) && -1 !== a.indexOf(c))
                }
                function l(a, b, c) {
                    var d;
                    return a && (d = {
                        "adtsech-campaign-id": m.executePatternMatching(b, a),
                        "aAdtecdh-banner-id": m.executePatternMatching(c, a)
                    }),
                    d
                }
                var m = c(2);
                a.exports = {
                    parseAdjTejchAdIdAndBnId: d
                }
            }
            , function(a, b) {
                "use strict";
                function c(a, b) {
                    return a ? (b = b || "*",
                    "IFRAME" === a.tagName ? a.contentDocument.getElementsByTagName(b) : a.getElementsByTagName(b)) : void 0
                }
                function d(a, b) {
                    var c = a.exec(b);
                    return null !== c ? parseInt(c[1], 10) || null : null
                }
                a.exports = {
                    getAdDOMElements: c,
                    executePatternMatching: d
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a) {
                    var b, c, d, f = document.getElementById(a), g = /Creative ([\d]*)/, h = /Member ([\d]*)/;
                    return f && (c = f.getElementsByTagName("iframe")[0],
                    d = e.getAdDOMElements(c, "body"),
                    d && d.length > 0 && (b = {
                        "appnexus-creative-id": e.executePatternMatching(g, d[0].innerHTML),
                        "appnexus-member-id": e.executePatternMatching(h, d[0].innerHTML)
                    })),
                    b
                }
                var e = c(2);
                a.exports = {
                    parseAppNexusCreativeIdAndMemberId: d
                }
            }
            ])
        }
        .apply(b, d),
        !(void 0 !== e && (a.exports = e))
    }
    , function(a, b, c) {
        var d, e;
        d = [],
        e = function() {
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
                window.burtApi = window.burtApi || [];
                var d = c(1).UnitOptions
                  , e = c(2)
                  , f = c(7)
                  , g = c(15)
                  , h = c(16)
                  , i = c(17);
                a.exports = {
                    trackAd: i.trackAd,
                    trackArea: i.trackArea,
                    UnitOptionsBuilder: d,
                    initZoneAnnotation: e.initZoneAnnotation,
                    annotateZone: e.annotateZone,
                    extendTrackedUnitWithId: i.extendTrackedUnitWithId,
                    initiateCampaignModule: i.initiateCampaignModule,
                    startUnitTracking: h.start,
                    executeForUnits: f.executeForUnits,
                    findUnitPromise: f.findUnitPromise,
                    isTrackedPromise: f.isTrackedPromise,
                    forceFill: g.forceFill
                }
            }
            , function(a, b, c) {
                var d, e;
                d = [],
                e = function() {
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
                .apply(b, d),
                !(void 0 !== e && (a.exports = e))
            }
            , function(a, b, c) {
                "use strict";
                function d(a, b) {
                    p || (p = !0,
                    q.burtApi.push(function() {
                        l.createZoneIntervals(b),
                        i(a)
                    }))
                }
                function e() {
                    for (var a = q.burtApi.findUnits(), b = [], c = 0; c < a.length; c++)
                        a[c].getNode().className.indexOf(o) < 0 && b.push(a[c]);
                    return b
                }
                function f() {
                    for (var a, b = e(), c = 0; c < b.length; c++)
                        a = b[c].getNode(),
                        "undefined" != typeof a && h(a.id)
                }
                function g(a) {
                    for (var b in a)
                        if (0 !== a[b])
                            return !1;
                    return !0
                }
                function h(a) {
                    var b, c, d, e, f = q.burtApi.findUnit("#" + a), h = "partially-in-viewport", i = "in-zone";
                    if (f && (b = f.getNode(),
                    c = b.getBoundingClientRect(),
                    !g(c))) {
                        switch (d = n.getCurrentZone(c.top, c.bottom),
                        d.status) {
                        case h:
                            e = h;
                            break;
                        case i:
                            e = d.zone.start + "-" + d.zone.end
                        }
                        e && m.isClosestZone(d, a, j) && (j[a] = d,
                        k.annotate(a, {
                            scope: "burt.basic-event",
                            name: f.getName() + "-unit-distance-to-viewport",
                            value: e
                        }))
                    }
                }
                function i(a) {
                    var b = null;
                    addEventListener("scroll", function() {
                        null !== b && clearTimeout(b),
                        b = q.setTimeout(function() {
                            f()
                        }, a)
                    }, !1)
                }
                var j = {}
                  , k = c(3)
                  , l = c(4)
                  , m = c(5)
                  , n = c(6)
                  , o = "abBurtUnitJsIgnoreZone"
                  , p = !1
                  , q = window;
                a.exports = {
                    initZoneAnnotation: d,
                    clearClosestZones: m.clearClosestZones.bind(void 0, j),
                    deleteClosestZone: m.deleteClosestZone.bind(void 0, j),
                    annotateZone: h
                }
            }
            , function(a, b) {
                "use strict";
                function c(a, b) {
                    e("connect", a, b)
                }
                function d(a, b) {
                    e("annotate", a, b)
                }
                function e(a, b, c) {
                    var d = g.burtApi.findUnit("#" + b);
                    d && c && g.burtApi.push(function() {
                        d[a](c.scope, c.name, c.value)
                    })
                }
                function f(a, b) {
                    var c = [{
                        unitMethod: "annotate",
                        optionKey: "annotations"
                    }, {
                        unitMethod: "connect",
                        optionKey: "connections"
                    }];
                    c.forEach(function(c) {
                        b[c.optionKey] = b[c.optionKey] || [],
                        b[c.optionKey].forEach(function(b) {
                            a[c.unitMethod](b.scope, b.name, b.value)
                        })
                    })
                }
                var g = window;
                a.exports = {
                    connect: c,
                    annotate: d,
                    annotateAndConnectViaOptions: f
                }
            }
            , function(a, b) {
                "use strict";
                function c(a) {
                    a = a || f;
                    for (var b = a.length - 1, c = 0; b + 1 > c; c++) {
                        var d = a[c + 1]
                          , g = c === b ? [0, a[b]] : [d + 1, a[c]];
                        e.push({
                            start: g[0],
                            end: g[1]
                        })
                    }
                }
                function d(a) {
                    var b = e.filter(function(b) {
                        return Math.abs(a) >= b.start && Math.abs(a) <= b.end
                    });
                    return b[0]
                }
                var e = []
                  , f = [5e3, 3e3, 2e3, 1500, 1e3, 750, 500, 250];
                a.exports = {
                    createZoneIntervals: c,
                    getZone: d
                }
            }
            , function(a, b) {
                "use strict";
                function c(a, b, c) {
                    var e = !c[b]
                      , f = c[b];
                    return !!e || "partially-in-viewport" !== f.status && !("partially-in-viewport" !== a.status && !d(f, a))
                }
                function d(a, b) {
                    var c = "out-of-range";
                    return b.status !== c && b.zone.start < a.zone.start
                }
                function e(a) {
                    for (var b in a)
                        a.hasOwnProperty(b) && f(a, b)
                }
                function f(a, b) {
                    delete a[b]
                }
                a.exports = {
                    isClosestZone: c,
                    clearClosestZones: e,
                    deleteClosestZone: f
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a, b) {
                    var c, d;
                    return 0 >= b ? (d = e(b),
                    c = d ? "in-zone" : "out-of-range") : a >= h.innerHeight ? (d = f(a),
                    c = d ? "in-zone" : "out-of-range") : c = "partially-in-viewport",
                    {
                        status: c,
                        zone: d
                    }
                }
                function e(a) {
                    return g.getZone(a)
                }
                function f(a) {
                    return g.getZone(a - h.innerHeight)
                }
                var g = c(4)
                  , h = window;
                a.exports = {
                    getCurrentZone: d
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a) {
                    return new Promise(function(b, c) {
                        a ? h.burtApi.push(function() {
                            h.burtApi.findUnit && e(a).then(b, c)
                        }) : c()
                    }
                    )
                }
                function e(a, b) {
                    return new Promise(function(c, d) {
                        h.burtApi.push(function() {
                            var e, f = 0, i = Date.now(), j = 300, k = b || 1e3, l = g.setUnStoppedUnits([a]);
                            e = setInterval(function() {
                                if (k >= f) {
                                    var a, b = g.getUnStoppedUnits(l)[0];
                                    b && b.length || (clearInterval(e),
                                    d()),
                                    h.burtApi.findUnit && (a = h.burtApi.findUnit("#" + b),
                                    a && (g.deleteUnStoppedUnits(l),
                                    clearInterval(e),
                                    c(a))),
                                    f = Date.now() - i
                                } else
                                    g.deleteUnStoppedUnits(l),
                                    clearInterval(e),
                                    d()
                            }, j)
                        })
                    }
                    )
                }
                function f(a, b) {
                    for (var c, d = [], f = 0; f < a.length; f++) {
                        c = a[f];
                        var g = e(c, 6e4);
                        d.push(g),
                        g.then(b.bind(void 0, c))
                    }
                    return Promise.all(d)
                }
                var g = c(8)
                  , h = window;
                h.burtApi = h.burtApi || [],
                a.exports = {
                    findUnitPromise: e,
                    isTrackedPromise: d,
                    executeForUnits: f
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a) {
                    var b;
                    for (var c in h)
                        h.hasOwnProperty(c) && (b = h[c].indexOf(a),
                        b > -1 && h[c].splice(b, 1))
                }
                function e(a) {
                    var b;
                    return a && 0 !== a.length ? (b = i.random(30),
                    h[b] = a,
                    b) : void 0
                }
                function f(a) {
                    return h[a] ? h[a] : []
                }
                function g(a) {
                    delete h[a]
                }
                var h = {}
                  , i = c(9);
                a.exports = {
                    removeUnitIdFromUnStopped: d,
                    setUnStoppedUnits: e,
                    getUnStoppedUnits: f,
                    deleteUnStoppedUnits: g
                }
            }
            , function(a, b, c) {
                "use strict";
                var d = c(10).default
                  , e = d("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
                  , f = e.id
                  , g = e.random
                  , h = e.time
                  , i = e.iterator;
                b.create = d,
                b.id = f,
                b.random = g,
                b.time = h,
                b.iterator = i
            }
            , function(a, b, c) {
                "use strict";
                var d = c(11).default
                  , e = c(13).default;
                b.default = function(a) {
                    var b = a.length
                      , c = function(d) {
                        return b > d ? a[d] : c(Math.floor(d / b) - 1) + a[d % b]
                    }
                      , f = function(a) {
                        void 0 === a && (a = 1);
                        for (var d = "", e = 0; a > e; e++)
                            d += c(Math.floor(Math.random() * b));
                        return d
                    }
                      , g = function() {
                        return c(d())
                    }
                      , h = function() {
                        var a = 0;
                        return function() {
                            return {
                                value: c(a++),
                                done: !1
                            }
                        }
                    }
                      , i = function() {
                        return e(h())
                    };
                    return {
                        id: c,
                        random: f,
                        time: g,
                        iterator: i
                    }
                }
            }
            , function(a, b, c) {
                (function(a) {
                    "use strict";
                    var d = c(12)
                      , e = d.now
                      , f = {};
                    if (e)
                        f = function() {
                            return e()
                        }
                        ;
                    else if (a.performance && performance.now) {
                        var g = performance.timing && performance.timing.navigationStart || Date.now();
                        f = function() {
                            return 1e3 * (g + performance.now())
                        }
                    } else
                        f = function() {
                            return 1e3 * Date.now()
                        }
                        ;
                    b.default = f
                }
                ).call(b, function() {
                    return this
                }())
            }
            , function(a, b) {}
            , function(a, b, c) {
                "use strict";
                var d = c(14).default;
                b.default = function(a) {
                    var b = {
                        next: a
                    };
                    return b[d()] = function() {
                        return b
                    }
                    ,
                    b
                }
            }
            , function(a, b) {
                (function(a) {
                    "use strict";
                    b.default = function() {
                        return a.Symbol && Symbol.iterator || "@@iterator"
                    }
                }
                ).call(b, function() {
                    return this
                }())
            }
            , function(a, b, c) {
                "use strict";
                function d(a) {
                    var b = g.burtApi.findUnit(a);
                    b && b.fill()
                }
                function e(a, b) {
                    g.burtApi.push(function() {
                        var c, d, e = f.setUnStoppedUnits(a);
                        g.setTimeout(function() {
                            c = f.getUnStoppedUnits(e);
                            for (var a = 0; a < c.length; a++)
                                d = g.burtApi.findUnit("#" + c[a]),
                                d.isFilled() || (d.fill(),
                                d.annotate("aftonbladet.unit", "force-filled", !0))
                        }, b)
                    })
                }
                var f = c(8)
                  , g = window;
                a.exports = {
                    fillByName: d,
                    forceFill: e
                }
            }
            , function(a, b) {
                "use strict";
                function c() {
                    d || (e.burtApi.push(function() {
                        e.burtApi.startUnitTracking()
                    }),
                    d = !0)
                }
                var d = !1
                  , e = window;
                e.burtApi = e.burtApi || [],
                a.exports = {
                    start: c
                }
            }
            , function(a, b, c) {
                "use strict";
                function d(a, b, c) {
                    return f(a, b, "ad", c)
                }
                function e(a, b, c) {
                    return f(a, b, "area", c)
                }
                function f(a, b, c, d) {
                    return a ? (d = d || {},
                    d.meta = d.hasOwnProperty("meta") ? d.meta : {},
                    d.meta.name = b,
                    d.meta.type = c,
                    g(a, d)) : new Promise(function(a, b) {
                        b()
                    }
                    )
                }
                function g(a, b) {
                    return new Promise(function(c) {
                        p.start(),
                        s.burtApi.push(function() {
                            m.isTrackedPromise(a).then(function() {
                                h(a)
                            }).catch(function() {
                                return Promise.resolve()
                            }).then(function() {
                                i(a, b),
                                c()
                            })
                        })
                    }
                    )
                }
                function h(a) {
                    var b = s.burtApi.findUnit("#" + a);
                    b && (b.destroy(),
                    n.removeUnitIdFromUnStopped(a),
                    l.deleteClosestZone(a),
                    r.removeCampaignIdConnections(a))
                }
                function i(a, b) {
                    var c = s.burtApi.trackById(a, b.meta);
                    j(c, b)
                }
                function j(a, b) {
                    b.filled && o.fillByName(b.meta.name),
                    q.annotateAndConnectViaOptions(a, b)
                }
                function k(a, b) {
                    s.burtApi.push(function() {
                        var c = s.burtApi.findUnit("#" + a);
                        c && j(c, b)
                    })
                }
                var l = c(2)
                  , m = c(7)
                  , n = c(8)
                  , o = c(15)
                  , p = c(16)
                  , q = c(3)
                  , r = c(18)
                  , s = window;
                s.burtApi = s.burtApi || [],
                a.exports = {
                    trackAd: d,
                    trackArea: e,
                    extendTrackedUnitWithId: k,
                    executeForUnits: m.executeForUnits,
                    findUnitPromise: m.findUnitPromise,
                    isTrackedPromise: m.isTrackedPromise
                }
            }
            , function(a, b, c) {
                var d, e;
                d = [],
                e = function() {
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
                            if (h[a])
                                return !0;
                            var b = e(a);
                            if (!b)
                                return !1;
                            for (var c in b)
                                b.hasOwnProperty(c) && b[c] && (f(a, {
                                    scope: "aftonbladet.campaign",
                                    name: c,
                                    value: b[c]
                                }),
                                h[a] = !0);
                            return h[a]
                        }
                        function e(a) {
                            var b = i.parseAdTechAdIdAndBnId(a);
                            return b || (b = j.parseAppNexusCreativeIdAndMemberId(a)),
                            b
                        }
                        function f(a, b) {
                            k.burtApi.push(function() {
                                var c = k.burtApi.findUnit("#" + a);
                                c && c.connect(b.scope, b.name, b.value)
                            })
                        }
                        function g(a) {
                            delete h[a]
                        }
                        var h = {}
                          , i = c(1)
                          , j = c(3)
                          , k = window;
                        k.burtApi = k.burtApi || [],
                        a.exports = {
                            removeCampaignIdConnections: g,
                            connectAdVendorCampaignIds: d,
                            parseAppNexusCampaignIds: j.parseAppNexusCreativeIdAndMemberId,
                            parseAdTechCampaignIds: i.parseAdTechAdIdAndBnId
                        }
                    }
                    , function(a, b, c) {
                        "use strict";
                        function d(a) {
                            var b, c, d, i = document.getElementById(a);
                            return i && (b = e(i),
                            d = m.getAdDOMElements(b),
                            c = h(d) ? f(d) : g(d)),
                            c
                        }
                        function e(a) {
                            var b = a.getElementsByTagName("iframe")[0];
                            return b || (b = a),
                            b
                        }
                        function f(a) {
                            var b = /Campaign ID: "([\d]*)"/
                              , c = /Banner ID: "([\d]*)"/
                              , d = i(a);
                            return l(d, b, c)
                        }
                        function g(a) {
                            var b = /AdId=([\d]*);/
                              , c = /BnId=([\d]*);/
                              , d = j(a);
                            return l(d, b, c)
                        }
                        function h(a) {
                            return void 0 !== i(a)
                        }
                        function i(a) {
                            for (var b = "AdtechDeliveryInformation", c = 0; c < a.length; c++)
                                if (a[c].id === b)
                                    return a[c].innerHTML
                        }
                        function j(a) {
                            for (var b, c = 0; c < a.length; c++)
                                if (b = "" !== a[c].innerHTML ? a[c].innerHTML : a[c].src,
                                k(b))
                                    return b
                        }
                        function k(a) {
                            var b = "adv.aftonbladet.se/adlink"
                              , c = "AdId";
                            return !!a && (-1 !== a.indexOf(b) && -1 !== a.indexOf(c))
                        }
                        function l(a, b, c) {
                            var d;
                            return a && (d = {
                                "adtech-campaign-id": m.executePatternMatching(b, a),
                                "adtech-banner-id": m.executePatternMatching(c, a)
                            }),
                            d
                        }
                        var m = c(2);
                        a.exports = {
                            parseAdTechAdIdAndBnId: d
                        }
                    }
                    , function(a, b) {
                        "use strict";
                        function c(a, b) {
                            return a ? (b = b || "*",
                            "IFRAME" === a.tagName ? a.contentDocument.getElementsByTagName(b) : a.getElementsByTagName(b)) : void 0
                        }
                        function d(a, b) {
                            var c = a.exec(b);
                            return null !== c ? parseInt(c[1], 10) || null : null
                        }
                        a.exports = {
                            getAdDOMElements: c,
                            executePatternMatching: d
                        }
                    }
                    , function(a, b, c) {
                        "use strict";
                        function d(a) {
                            var b, c, d, f = document.getElementById(a), g = /Creative ([\d]*)/, h = /Member ([\d]*)/;
                            return f && (c = f.getElementsByTagName("iframe")[0],
                            d = e.getAdDOMElements(c, "body"),
                            d && d.length > 0 && (b = {
                                "appnexus-creative-id": e.executePatternMatching(g, d[0].innerHTML),
                                "appnexus-member-id": e.executePatternMatching(h, d[0].innerHTML)
                            })),
                            b
                        }
                        var e = c(2);
                        a.exports = {
                            parseAppNexusCreativeIdAndMemberId: d
                        }
                    }
                    ])
                }
                .apply(b, d),
                !(void 0 !== e && (a.exports = e))
            }
            ])
        }
        .apply(b, d),
        !(void 0 !== e && (a.exports = e))
    }
    , function(a, b, c) {
        var d, e;
        d = [],
        e = function() {
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
        .apply(b, d),
        !(void 0 !== e && (a.exports = e))
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
            if (b) {
                if (!c)
                    throw new Error("Missing parameter unitOptionsResult. Please provide some annotations to add!");
                g.executeForUnits([b], function(a) {
                    return g.extendTrackedUnitWithId(a, c)
                })
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = e;
        var f = c(3)
          , g = d(f)
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
        function e() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return j.startUnitTracking(),
            f(b),
            g(a, b)
        }
        function f(a) {
            if (a.burtUnitZoneTrackingEnabled) {
                var b = a.burtUnitZoneThresholds.length ? a.burtUnitZoneThresholds : void 0
                  , c = 400;
                j.initZoneAnnotation(c, b)
            }
        }
        function g(a, b) {
            var c = {
                burtUnitForceFilledTimeDelay: 1e4
            };
            return h(c, a, b)
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var h = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        }
        ;
        b.default = e;
        var i = c(3)
          , j = d(i)
    }
    , function(a, b, c) {
        var d, e;
        d = [],
        e = function() {
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
                    if (Array.isArray(a)) {
                        for (var b = 0, c = Array(a.length); b < a.length; b++)
                            c[b] = a[b];
                        return c
                    }
                    return Array.from(a)
                }
                function d(a) {
                    if (!a)
                        throw new Error("Cannot initialize communications API without mainAPIFunctions");
                    p = a,
                    window.burtUnitAPIInternal && e(window.burtUnitAPIInternal) && f(window.burtUnitAPIInternal);
                    var b = g();
                    b && h(b),
                    l()
                }
                function e(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }
                function f(a) {
                    a.forEach(function(a) {
                        return n.push(a)
                    })
                }
                function g() {
                    for (var a = 0; a < n.length; a++) {
                        var b = n[a];
                        if ("init" === b.method)
                            return n.splice(a, 1),
                            b
                    }
                }
                function h(a) {
                    var b = a.method;
                    if ("init" !== b)
                        throw new Error("Cannot pass call of type other than init to method 'handleInit'. call.method was '" + a.method + "'");
                    if (o)
                        throw new Error("Init was already called, cannot call init more than once!");
                    if (q = j(a),
                    !q)
                        throw new Error("No configuration returned from init call!");
                    o = !0,
                    k()
                }
                function i(a) {
                    o ? j(a) : n.push(a)
                }
                function j(a) {
                    var b, d = a.method, e = a.parameters, f = void 0 === e ? [] : e;
                    if (!p[d])
                        throw new Error("Main API contains no method '" + d + "'");
                    return (b = p)[d].apply(b, [q].concat(c(f)))
                }
                function k() {
                    n.forEach(function(a) {
                        return m(a)
                    }),
                    n.splice(0)
                }
                function l() {
                    window.burtUnitAPIInternal = {
                        push: m
                    }
                }
                function m(a) {
                    var b = a.method;
                    if (!b)
                        throw new Error("Call contains no method to call");
                    "init" === b ? h(a) : i(a)
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }),
                b.default = d;
                var n = []
                  , o = !1
                  , p = void 0
                  , q = void 0
            }
            ])
        }
        .apply(b, d),
        !(void 0 !== e && (a.exports = e))
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
        function e(a, b) {
            if (b) {
                var c = h.UnitOptions.getResults();
                g.trackAd(b, b, c)
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = e;
        var f = c(3)
          , g = d(f)
          , h = c(4)
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
        function e(a, b) {
            var c = arguments.length <= 2 || void 0 === arguments[2] ? b : arguments[2];
            if (b) {
                var d = g.trackAd(b, c, h.UnitOptions.getResults());
                a.burtUnitZoneTrackingEnabled && d.then(function() {
                    return g.annotateZone(b)
                })
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        }),
        b.default = e;
        var f = c(3)
          , g = d(f)
          , h = c(4)
    }
    ])
}),
require(["win", "ab-burt-unit-api", "page", "doc", "ab-burt-unit-main"], function(a, b, c, d, e) {
    "use strict";
    function f() {
        if (a.ABAppBridge && a.ABAppBridge.burtTrackPageView && (c.burtUnitEnabled = !1),
        c.burtUnitEnabled) {
            var d = {
                burtUnitForceFilledTimeDelay: c.burtUnitForceFilledTimeDelay,
                burtUnitZoneTrackingEnabled: c.burtUnitZoneTrackingEnabled,
                burtUnitZoneThresholds: c.burtUnitZoneThresholds
            };
            e.initiate(),
            addEventListener("load", function() {
                b.init(d)
            })
        }
    }
    f()
}),
define("web-notifications-initializer", ["abse", "web-notifications", "fuse", "page", "ab-sitecatalyst"], function(a, b, c, d, e) {
    "use strict";
    function f() {
        return ("ece_frontpage" === d.sectionUniqueName || "plus" === d.sectionUniqueName) && (a.crmMessagesEnabled || d.crmNotificationsEnabled)
    }
    function g(a) {
        function b(a) {
            if ("plusconverter" === a)
                try {
                    var b = parseInt(d.userSegment, 10);
                    return b > 50 ? "B" : "A"
                } catch (a) {}
            return ""
        }
        function c(a) {
            return a.id + "-" + b(a.id)
        }
        var d = require("statistics/tracking-params");
        e.trackUserNotificationExposure({
            userSegment: d.userSegment,
            tag: c(a)
        })
    }
    var h;
    return f() && (h = b(d.stageWebNotifications),
    h.on("show", g),
    h.run()),
    {}
}),
YUI.add("abse-user-presentation", function(a) {
    "use strict";
    function b(a) {
        b.superclass.constructor.apply(this, []),
        this.user = a
    }
    var c = '<a href="#abHeaderUserMeny" id="abHeaderUserMenyButton" class="abUserMenu"><span class="abIconMenuToggle"></span><span class="abIcon abIconUser"></span><span class="abUserGreeting"></span></a>';
    b.NAME = "abseUserPresentation",
    b.LOGGED_IN_ITEM = "abHeaderUserLoggedIn",
    b.ANONYMOUS_ITEM = "abHeaderUserLogin",
    b.ATTRS = {
        accordion: {
            valueFn: function() {
                var b = new a.Ab.Accordion({});
                return b.after("totalUnreadChange", this.afterUnreadChange, this),
                b
            }
        },
        menuButton: {
            valueFn: function() {
                return a.Node.create(c)
            }
        }
    },
    a.extend(b, a.Base, {
        _findMenuObject: function(b) {
            return a.Array.find(a.Object.values(this.menuObjects), function(a) {
                return a.menu === b
            })
        },
        initializer: function() {
            this.loggedIn = !1,
            this.publish("loggedIn"),
            this.publish("anonymous"),
            this.publish("plus"),
            this.publish("showMenu");
            var b = new a.Ab.Menu.Collection;
            b.after("*:show", function(a) {
                var b = this._findMenuObject(a.target);
                this.fire("showMenu", b)
            }, this),
            this.menuCollection = b,
            this.menuObjects = {}
        },
        destructor: function() {
            this.get("accordion").destroy(),
            this.getMenuNode().remove(!0),
            this.getMenuButton().remove(!0)
        },
        getContainer: function() {
            return a.one("#abHeaderUserBar")
        },
        getLoginContainer: function() {
            return this.getStateContainer(b.ANONYMOUS_ITEM)
        },
        getLoggedInContainer: function() {
            return this.getStateContainer(b.LOGGED_IN_ITEM)
        },
        getStateContainer: function(a) {
            return this.getContainer().one("#" + a)
        },
        getDocumentElement: function() {
            return a.one(document.documentElement)
        },
        isLoggedIn: function() {
            return this.loggedIn
        },
        onLoggedIn: function(b) {
            this.loggedIn = !0;
            var c = this.getDocumentElement();
            c.addClass("abUser").removeClass("abAnon"),
            this.getLoginContainer().hide(),
            this.getLoggedInContainer().show(),
            b ? this.showGreeting(b.user.userInfo.name) : this.user.getFullName(a.bind(this.showGreeting, this)),
            this.get("accordion").setAttrs({
                theme: "abMenu-userTheme",
                contentClass: "abUserMenyList"
            }).render("#abHeaderUserMeny"),
            a.later(0, this.user, this.user.hasAccess, ["plus", a.bind(function(a) {
                a && (c.addClass("abPlus"),
                this.fire("plus")),
                this.getContainer().removeClass("abHidden")
            }, this)])
        },
        onLoggedOut: function() {
            this.loggedIn = !1,
            this.getDocumentElement().addClass("abAnon").removeClass("abUser").removeClass("abPlus"),
            this.getContainer().removeClass("abHidden"),
            this.getLoggedInContainer().hide(),
            this.getLoginContainer().show()
        },
        afterUnreadChange: function(b) {
            var c = this.getMenuButton()
              , d = c.one(".badge")
              , e = b.newVal;
            e ? (d || (d = a.Node.create('<span class="badge"></span>')),
            d.set("text", e > 10 ? "10+" : e),
            d.inDoc() || c.prepend(d)) : d && d.remove(!0)
        },
        createOverallMenu: function(c, d, e) {
            e = e || b.LOGGED_IN_ITEM;
            var f, g = this.getStateContainer(e), h = e + d + "Item";
            if (!g.one("#" + h)) {
                f = a.Node.create('<div class="abUserItem"></div>').set("id", h),
                f.appendChild(c);
                var i = new a.Ab.Menu.OverlayMenu({
                    item: f,
                    trigger: c,
                    container: this.getMenuNode(),
                    menuClass: "",
                    menuPosition: "bottomLeft",
                    shaded: !0
                });
                a.Global.on(["absticky:fixed", "absticky:static"], function() {
                    i.isActive() && i.get("overlay").align()
                }),
                this.menuObjects[d] = {
                    menuId: d,
                    trigger: "#" + c.get("id"),
                    menu: i
                },
                this.menuCollection.add(i),
                g.append(f)
            }
            return this
        },
        addMenuItem: function(a) {
            return this.get("accordion").addRow(a),
            this
        },
        removeMenuItem: function(a) {
            return this.get("accordion").removeRow(a),
            this
        },
        getMenuButton: function() {
            return this.get("menuButton")
        },
        showGreeting: function(a) {
            this.getMenuButton().one(".abUserGreeting").setHTML(a)
        },
        getMenuNode: function() {
            var b = a.one("#abHeaderUserMeny");
            return b || (b = a.Node.create('<div id="abHeaderUserMeny" class="abMd4 abHidden"></div>'),
            a.one("body").appendChild(b)),
            b
        },
        listen: function() {
            function c() {
                d.createOverallMenu(d.getMenuButton(), "loggedIn", b.LOGGED_IN_ITEM),
                d.user.on("login", a.bind(d.onLoggedIn, d)),
                d.user.on("anonymous", a.bind(d.onLoggedOut, d)),
                d.ready = !0,
                require("request").hasURLParameter("open-user-menu") && (d.openLoggedInMenu(),
                setTimeout(function() {
                    d.menuObjects.loggedIn.menu.get("overlay").align()
                }, 500))
            }
            var d = this;
            return this.getContainer() ? c() : a.on("contentready", c, "#abHeaderUserBar"),
            this
        },
        openLoggedInMenu: function(b) {
            if (this.menuObjects.loggedIn.menu.show(),
            a.Lang.isNumber(b)) {
                var c = this.get("accordion").get("rows");
                c[c.length - b - 1].menu.show()
            }
        }
    }),
    a.namespace("Ab").UserPresentation = b;
    var d = a.Base.create("settingsPlugin", a.Plugin.Base, [], {
        initializer: function() {
            var b = this.get("host").getMenuNode()
              , c = this.get("host").getLoginContainer();
            this.menuSections = [],
            this.afterHostMethod("onLoggedIn", this.onLoggedIn),
            this.afterHostMethod("onLoggedOut", this.onLoggedOut),
            this.afterHostEvent("plus", this._updatePlusButtonLink),
            this.publish("createAccountClick"),
            this.publish("loginClick"),
            this.publish("logoutClick"),
            this.publish("settingsClick"),
            this.publish("plusClick"),
            a.delegate("click", this.onLogoutClick, document.body, ".abUserLogout", this),
            a.delegate("click", this.onSettingsClick, document.body, ".abUserMyPage", this),
            a.delegate("click", this.onLoginClick, c, ".abUserLogin", this),
            a.delegate("click", this.onCreateAccountClick, c, ".abUserCreateAccount", this),
            a.delegate("click", this.onPlusClick, this.get("host").getContainer(), ".abHeaderPlusBuyLink", this),
            a.delegate(d.NS + "|click", this.onPlusClick, b, ".abHeaderPlusBuyLink, .abButtonPremiumBuy", this)
        },
        destructor: function() {},
        onLoggedIn: function() {
            var b = new a.Ab.Accordion.Item({
                icon: "abIconSettings",
                href: this.get("host").user.getMyPageUrl(),
                title: "Kontoinställningar",
                classes: "abUserMyPage"
            })
              , c = new a.Ab.Accordion.Item({
                icon: "abIconLogout",
                href: this.get("host").user.getLogoutUrl(),
                title: "Logga ut",
                classes: "abUserLogout"
            });
            this.menuSections.push(b),
            this.menuSections.push(c),
            this.get("host").addMenuItem(c).addMenuItem(b)
        },
        onLoggedOut: function() {
            a.Array.each(this.menuSections, function(a) {
                this.get("host").removeMenuItem(a)
            }, this),
            this.menuSections = []
        },
        onPlusClick: function(a) {
            var b = this.get("host").isLoggedIn()
              , c = a.container === this.get("host").getMenuNode() ? "settings" : "main";
            this.fire("plusClick", {
                isLoggedIn: b,
                container: c,
                link: a.currentTarget
            })
        },
        onLogoutClick: function(a) {
            a.preventDefault(),
            this.fire("logoutClick", {
                link: a.currentTarget
            }),
            this.get("host").user.logout(!1)
        },
        onSettingsClick: function(a) {
            a.preventDefault(),
            this.fire("settingsClick", {
                link: a.currentTarget
            }),
            this.get("host").user.mypage()
        },
        onLoginClick: function(a) {
            a.stopPropagation(),
            this.fire("loginClick", {
                link: a.currentTarget
            })
        },
        onCreateAccountClick: function(a) {
            this.fire("createAccountClick", {
                link: a.currentTarget
            })
        },
        _updatePlusButtonLink: function() {
            var a = this.get("host").getContainer().one(".abHeaderPlusBuyLink");
            a.set("href", a.get("href").replace("/oinloggad", ""))
        }
    }, {
        NS: "settings"
    });
    a.namespace("Plugin.Ab").UserSettings = d
}, "0.1.0", {
    requires: ["base-build", "node", "event", "ab-menu", "ab-accordion", "plugin", "ab-plugin-sitecatalyst"]
}),
window.ABY && (ABY.use("abse-user-presentation", "ab-newsflash", "ab-subscription", "ab-plusmenu-plugin", "anim", function(a) {
    var b = require("fuse")
      , c = new a.Ab.Subscription.Subscription
      , d = new a.Ab.UserPresentation(b)
      , e = new a.Ab.Subscription.ButtonManager({
        api: c,
        user: b
    })
      , f = new a.Ab.Subscription.Controller({
        buttonManager: e,
        userPresentation: d
    });
    f.listen(),
    c.plug(a.Plugin.Ab.SiteCatalyst, {
        events: ["subscribe", "unsubscribe"]
    }),
    a.on("available", function() {
        d.plug(a.Plugin.Ab.UserSettings),
        d.plug(a.Plugin.Ab.PlusMenuPlugin),
        d.plug(a.Plugin.Ab.NewsFlashPlugin),
        d.plug(a.Plugin.Ab.SubscriptionPlugin, {
            api: c
        }),
        d.plug(a.Plugin.Ab.SiteCatalyst, {
            events: ["showMenu"]
        }),
        d.settings.plug(a.Plugin.Ab.SiteCatalyst, {
            events: ["createAccountClick", "loginClick", "settingsClick", "logoutClick", "plusClick"]
        }),
        d.newsFlash.plug(a.Plugin.Ab.SiteCatalyst, {
            attributes: ["settings"],
            events: ["menuClick"]
        }),
        d.listen()
    }, "#abHeaderUserLogin"),
    a.on("contentready", function() {
        e.plug(a.Plugin.Ab.Mixpanel, {
            events: ["followButtonClick"]
        }),
        e.listen()
    }, "#abMainColumn, #abArticleMain")
}),
ABY.use("ab-tooltip", function(a) {
    var b = new a.Ab.Tooltip;
    b.render()
})),
define("mixpanel-login", ["doc", "win", "fuse", "local-storage"], function(a, b, c, d) {
    "use strict";
    function e() {
        var b = {};
        return a.cookie.split(";").forEach(function(a) {
            var c = a.split("=");
            b[c[0].trim()] = c.slice(1).join("=")
        }),
        b
    }
    function f(a) {
        b.mixpanel = b.mixpanel || [],
        b.mixpanel.push(["identify", a])
    }
    function g(b, c) {
        d.persistValue(b, c) || (a.cookie = b + "=" + c + "; expires=" + new Date(c + 864e5).toUTCString() + "; path=/; domain=.aftonbladet.se")
    }
    function h(a, b) {
        if (a) {
            var c = d.readValue("mp" + a) || e()["mp" + a];
            return !c || c !== b
        }
        return !1
    }
    function i(a, c) {
        "function" == typeof b.mixpanel.track ? b.mixpanel.track(a, c) : b.mixpanel.push(["track", a, c])
    }
    function j() {
        function a(a) {
            return a && a.visitor && a.visitor.uid
        }
        c.getSpidUserInfo(function(b) {
            if (a(b)) {
                f(b.visitor.uid);
                var d = (new Date).toISOString().substr(0, 10);
                h(b.userId, d) && (g("mp" + b.userId, d),
                c.isLoggedIn() ? i("AB - Logged in page view", {
                    "User ID": b.userId,
                    "SPID session": !b.error
                }) : b.error || void 0 === b.clientAgreementAccepted || i("AB - SPID logged in page view", b))
            }
        })
    }
    var k = function() {
        "off" !== b.ABse.mixpanelMode && j()
    };
    return {
        init: k
    }
}),
YUI.add("ab-expandable-area", function(a) {
    "use strict";
    a.namespace("Ab.Expandable");
    var b = a.Base.create("abExpandableArea", a.Widget, [], {
        initializer: function(a) {
            this._handles = [],
            this._handles.push(this.get("trigger").on("click", this._onTriggerClick, this)),
            this.publish("expand", {
                defaultFn: this._defExpandFn,
                broadcast: 2
            }),
            this.publish("collapse", {
                defaultFn: this._defCollapseFn,
                broadcast: 2
            }),
            this._set("expanded", a.expanded)
        },
        destructor: function() {
            a.Array.invoke(this._handles, "detach"),
            this._handles = []
        },
        expand: function() {
            this.fire("expand")
        },
        collapse: function() {
            this.fire("collapse")
        },
        toggle: function() {
            this.isExpanded() ? this.collapse() : this.expand()
        },
        isExpanded: function() {
            return this.get("expanded")
        },
        _defExpandFn: function() {
            this._set("expanded", !0),
            this.get("area").show("abHeightIn", {}),
            this.get("srcNode").addClass("abExpanded")
        },
        _defCollapseFn: function() {
            this._set("expanded", !1),
            this.get("area").hide("abHeightOut", {}),
            this.get("srcNode").removeClass("abExpanded")
        },
        _onTriggerClick: function(a) {
            a.button && 1 !== a.button || (a.preventDefault(),
            this.toggle())
        }
    }, {
        ATTRS: {
            trigger: {
                writeOnce: "initOnly"
            },
            area: {
                writeOnce: "initOnly"
            },
            expanded: {
                readOnly: !0
            }
        },
        HTML_PARSER: {
            trigger: ".abExpander-js",
            area: ".abExpandableArea",
            expanded: function(a) {
                return a.hasClass("abExpanded")
            }
        }
    });
    a.Ab.Expandable.Area = b
}, "0.0.1", {
    requires: ["base-build", "widget-base", "node-base", "array-invoke", "ab-transition"]
}),
YUI.add("ab-deferredload", function(a) {
    "use strict";
    var b = window.ABse && window.ABse.logCenter ? window.ABse.logCenter.getLogger("ab-deferredload") : {
        debug: function() {},
        error: function() {}
    }
      , c = a.Base.create("abDeferredLoader", a.Base, [], {
        initializer: function() {
            this._loaded = !1,
            this.publish("load", {
                broadcast: 2,
                preventable: !1,
                fireOnce: !0,
                async: !0,
                defaultFn: this._defLoadFn
            }),
            this.publish("loaded", {
                broadcast: 2,
                preventable: !1,
                fireOnce: !0
            }),
            this._handles = [],
            this._handles.push(this.after("markersChange", this._onMarkersChange, this))
        },
        destructor: function() {
            a.Array.invoke(this._handles, "detach"),
            this._handles = []
        },
        isLoaded: function() {
            return this._loaded
        },
        add: function(b) {
            var c = this.get("markers")
              , d = a.one(b)
              , e = a.Array.indexOf(c, b) === -1;
            return e && (c.push(d),
            this._set("markers", c)),
            e
        },
        size: function() {
            return this.get("markers").length
        },
        load: function() {
            this.fire("load")
        },
        _defLoadFn: function() {
            b.debug("Got a total of %d markers to load", this.size()),
            a.Array.each(this.get("markers"), function(c) {
                var d = c.getData()
                  , e = !1
                  , f = [];
                if (d.content) {
                    e = a.Node.create(d.content);
                    var g = e.all("script");
                    g.each(function(a) {
                        b.debug("Found a script tag!"),
                        b.debug(a),
                        b.debug("Pushing it to the scripts to be executed..."),
                        f.push(a.get("text") || a.getHTML())
                    }),
                    g.remove(!0)
                }
                if (e && c.insert(e, "before"),
                d.script && f.push(d.script),
                c.remove(!0),
                f.length) {
                    var h = document.createElement("script");
                    h.type = "text/javascript",
                    h.text = f.join(";\n"),
                    b.debug("Executing the following script:"),
                    b.debug(h.text),
                    document.getElementsByTagName("head")[0].appendChild(h)
                }
            }, this),
            this._set("markers", []),
            this._loaded = !0,
            this.fire("loaded")
        },
        _onMarkersChange: function(a) {
            this._loaded && a.newVal.length && this._defLoadFn()
        }
    }, {
        ATTRS: {
            markers: {
                value: [],
                readOnly: !0
            }
        }
    })
      , d = a.Base.create("abDeferredInitializer", a.Base, [], {
        initializer: function() {
            this.loaders = {}
        },
        initialize: function() {
            var c = a.all(".abjsDeferred");
            c.each(function(a) {
                var b, c = a.ancestors(".abExpandable"), d = !1;
                do
                    b = c.pop(),
                    b && !b.hasClass("abExpanded") && (this.forArea(b).add(a),
                    d = !0);
                while (c.size() && !d);d || this.forArea(document.body).add(a)
            }, this),
            a.on("domready", function() {
                var a = this.exists(document.body);
                a && (b.debug("DOM ready: Loading %d deferreds not in expandable areas.", a.size()),
                a.load())
            }, this),
            a.Global.on("abExpandableArea:expand", function(c) {
                var d = c.target.get("srcNode")
                  , e = this.exists(d);
                e && (b.debug("Triggering load for deferred elements!"),
                e.load(),
                this.remaining() || (b.debug("No more area loaders remaining. Stop listening for", c.type),
                a.Global.detach("abExpandableArea:expand")))
            }, this)
        },
        forArea: function(a) {
            var b = this.loaders[a];
            return b || (b = new c,
            b.once("loaded", function() {
                b.destroy()
            }, this),
            b.once("destroy", function() {
                delete this.loaders[a]
            }, this),
            this.loaders[a] = b),
            b
        },
        exists: function(a) {
            return this.loaders[a]
        },
        remaining: function() {
            return a.Object.keys(this.loaders).length
        }
    });
    a.namespace("Ab.DeferredLoad"),
    a.Ab.DeferredLoad.Loader = c,
    a.Ab.DeferredLoad.Initializer = d
}, "0.0.1", {
    requires: ["base-build", "node", "json-parse", "array-invoke"]
}),
function(a, b) {
    "use strict";
    function c(a) {
        var b, c = document.getElementsByTagName("head")[0] || document.documentElement;
        b = document.createElement("script"),
        b.type = "text/javascript",
        b.async = !0,
        b.src = e[0].getAttribute("data-embedscript-src"),
        b.addEventListener ? b.addEventListener("load", a, !1) : b.readyState && (b.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || (b.onreadystatechange = null,
            a())
        }
        ),
        c.insertBefore(b, c.firstChild)
    }
    var d, e = "undefined" != typeof b.getElementsByClassName ? b.getElementsByClassName("abEditorToolboxFrame") : b.querySelectorAll(".abEditorToolboxFrame");
    0 !== e.length && c(function() {
        for (var a = 0, b = e.length; a < b; a++)
            d = e[a].getAttribute("data-iframe-src"),
            d && (e[a].src = d)
    })
}(window, document),
define("adtech-dac-loader", [], function() {
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
        function d(a, b) {
            return {
                complete: function() {
                    a(b)
                }
            }
        }
        function e(a) {
            o.config.network = {
                secure: "https:" === n.location.protocol,
                server: a.server,
                network: a.network,
                fif: {
                    usefif: !0,
                    disableLoadingResize: !0
                },
                performScreenDetection: !0,
                performFlashDetection: !0,
                performGeoDetection: !1
            }
        }
        function f(a) {
            o.config.page = {
                kv: {
                    adgw: a.kvadgw,
                    articleid: a.articleId ? a.articleId : "",
                    context: "",
                    np: a.kvnp,
                    page: a.kvpage,
                    section: a.kvsection,
                    viewmode: a.kvviewmode,
                    ibeacon: a.kvibeacon,
                    adfilter: a.kvadfilter
                },
                enableMultiAd: a.enableMultiAd,
                params: {
                    loc: "100",
                    target: "_blank",
                    lat: "",
                    long: ""
                }
            }
        }
        function g(a, b, c, d) {
            var e = {
                placement: d,
                params: {
                    alias: a
                },
                adContainerId: a
            };
            "object" === ("undefined" == typeof b ? "undefined" : m(b)) && (e.kv = b),
            "boolean" == typeof c && (e.syncIfPossible = c),
            o.loadAd(e)
        }
        function h(a) {
            o && (e(a),
            f(a))
        }
        function i(a) {
            o && (a.onAdLoadedCallback && (o.config.placements[a.alias] = d(a.onAdLoadedCallback, a.alias)),
            g(a.alias, a.kvParams, a.syncIfPossible, a.adtechDefaultPlacementID))
        }
        function j(a) {
            i(a)
        }
        function k(a) {
            a.kvParams = {
                kcustomt: "ab_stickyreload_true"
            },
            i(a)
        }
        function l(a) {
            o && (a.aliases.forEach(function(b) {
                o.config.placements[b] = d(a.onAdLoadedCallback, b),
                o.enqueueAd(b)
            }),
            o.executeQueue())
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }
        ;
        b.init = h,
        b.load = i,
        b.reload = j,
        b.stickyReload = k,
        b.multiLoad = l,
        c(1);
        var n = window
          , o = n.ADTECH
    }
    , function(a, b) {
        window.ADTECH = window.ADTECH || {
            debugMode: !1
        },
        window.ADTECH.config = window.ADTECH.config || {
            placements: {},
            placementsdyn: {}
        },
        window.DAC = window.DAC || {};
        try {
            !function() {
                "use strict";
                function a(a, b, c) {
                    function d() {
                        var a = c && c.navigator && c.navigator.userAgent;
                        if (a) {
                            var b = a.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/);
                            b && (b[1] || b[2]) && (k = e(b[1] || b[2]),
                            l = k && (9 > k || c.document.documentMode && c.document.documentMode < 10));
                            var d = a.match(/AppleWebKit\/([^\s]*)/);
                            d && d[1] && (n = e(d[1]));
                            var f = a.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/);
                            f && f[1] && f[2] && (m = e(f[2]),
                            n = 0)
                        }
                    }
                    function e(a) {
                        return parseFloat(a)
                    }
                    function f() {
                        return k
                    }
                    function g() {
                        return l
                    }
                    function h() {
                        return !!m
                    }
                    function i() {
                        return !!n
                    }
                    var j = "Environment"
                      , k = 0
                      , l = !1
                      , m = 0
                      , n = 0;
                    return d(),
                    a[j] = {
                        isOldIEMode: g,
                        getIEVersion: f,
                        isChrome: h,
                        isSafari: i
                    },
                    a[j]
                }
                function b(a, b, c) {
                    function d(a, b, c) {
                        var d, e = a && a.length || 0;
                        for (d = 0; e > d; d++)
                            b.call(c, a[d], d)
                    }
                    function e(a, b, c) {
                        if (a) {
                            var d;
                            for (d in a)
                                a.hasOwnProperty(d) && b.call(c, d, a[d])
                        }
                    }
                    function f(a) {
                        return "object" == typeof a
                    }
                    function g(a) {
                        return "string" == typeof a
                    }
                    function h(a) {
                        return "function" == typeof a
                    }
                    function i(a) {
                        return "number" == typeof a && isFinite(a)
                    }
                    function j(a) {
                        return "object" == typeof a && a.constructor === Array
                    }
                    function k(a) {
                        return "boolean" == typeof a
                    }
                    function l(a) {
                        var b;
                        if (!c.JSON)
                            throw new Error("JSON not found. Could not transform the string into an object");
                        return b = c.JSON.parse(a)
                    }
                    function m(a, b, c, f) {
                        var g, h = {};
                        c ? (d(c, function(a) {
                            b.hasOwnProperty(a) && (h[a] = !0)
                        }),
                        g = f ? function(b, c) {
                            h[b] || (a[b] = c)
                        }
                        : function(c) {
                            h[c] && (a[c] = b[c])
                        }
                        ) : g = function(b, c) {
                            a[b] = c
                        }
                        ,
                        e(b, g)
                    }
                    function n(a) {
                        var b = C.getElementById(a.adContainerId);
                        return null !== b && f(b) && b
                    }
                    function o(b) {
                        var c = b.config
                          , d = a.Environment.getIEVersion;
                        if (!n(c)) {
                            if (!a.ResourceManager.isSync(b.config.legacyDACLoadType, d))
                                throw B + "#createAdContainer Ad Container cannot be created";
                            C.write('<div id="' + c.adContainerId + '" style="padding:0;margin:0;border:0;"></div>'),
                            c.adContainer = C.getElementById(c.adContainerId),
                            b.logger.log(B, "createAdContainer", "Created <div> element with ID " + c.adContainerId)
                        }
                    }
                    function p(a) {
                        var b = C.getElementById(a.adContainerId);
                        if (null === b || !f(b))
                            throw new Error(B + "#resolveContainer Ad Container not found");
                        a.adContainer = b,
                        a.skipContainerClean || (a.adContainer.innerHTML = "")
                    }
                    function q(a) {
                        var b = a.queueId ? ' adtechQueueId="' + a.queueId + '"' : "";
                        return '<script type="text/javascript" src="' + a.config.adcallUrl + '"' + b + "></script>"
                    }
                    function r(a, b) {
                        return function() {
                            try {
                                a.apply(null, arguments)
                            } catch (a) {
                                if (b.log("Exception raised: " + a.message),
                                b.isEnabled())
                                    throw a
                            }
                        }
                    }
                    function s(a) {
                        return Math.round(Math.random() * a)
                    }
                    function t(a, b, c, d) {
                        return void 0 !== a && void 0 !== b && (c && (c = v([a, b], c)),
                        w(a, b, c, d) && w(b, a, c, d))
                    }
                    function u(a, b) {
                        var c = []
                          , f = {};
                        return d(a, function(a) {
                            e(a, function(a) {
                                !f[a] && b.test(a) && (c.push(a),
                                f[a] = !0)
                            })
                        }),
                        c
                    }
                    function v(a, b) {
                        var c = [];
                        return d(b, function(b) {
                            if (b instanceof RegExp) {
                                var d = u(a, b);
                                d.length > 0 && Array.prototype.push.apply(c, d)
                            } else
                                c.push(b)
                        }),
                        c
                    }
                    function w(a, b, c, d) {
                        function e(e) {
                            var f = !(a.hasOwnProperty(e) || b.hasOwnProperty(e));
                            return !!f || (!(!d || !x(c, e)) || a.hasOwnProperty(e) && b.hasOwnProperty(e) && ("object" == typeof a[e] ? objectEquals(a[e], b[e]) : a[e] === b[e]))
                        }
                        var f;
                        if (c && c.constructor === Array && !d) {
                            for (f = 0; f < c.length; f++)
                                if (!e(c[f]))
                                    return !1;
                            return !0
                        }
                        for (f in a)
                            if (a.hasOwnProperty(f) && !e(f))
                                return !1;
                        return !0
                    }
                    function x(a, b) {
                        var c = !1;
                        return d(a, function(a) {
                            a === b && (c = !0)
                        }),
                        c
                    }
                    function y(a) {
                        var b = [];
                        return d(a, function(a, c) {
                            b[c] = a
                        }),
                        b
                    }
                    function z(a, b, c) {
                        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
                    }
                    function A() {
                        var a = C.documentElement.clientWidth
                          , b = "CSS1Compat" === C.compatMode && a || C.body && C.body.clientWidth || a;
                        return C.body || 0 !== b || (b = C.documentElement.scrollWidth),
                        b
                    }
                    var B = "Utils"
                      , C = c.document;
                    return a[B] = {
                        each: d,
                        eachKey: e,
                        isString: g,
                        isObject: f,
                        isFunc: h,
                        isBoolean: k,
                        isNumber: i,
                        isArray: j,
                        copyObject: m,
                        resolveContainer: p,
                        generateScriptHTML: q,
                        stringToObject: l,
                        createClosure: r,
                        createAdContainer: o,
                        rnd: s,
                        objectsEquals: t,
                        buildObjectsProperties: v,
                        cloneArray: y,
                        addEventListener: z,
                        getViewportWidth: A
                    },
                    a[B]
                }
                function c(a, b, c) {
                    function d() {
                        p && (clearTimeout(q),
                        q = setTimeout(e, p))
                    }
                    function e() {
                        o = s.getViewportWidth(),
                        s.eachKey(t, function(b, c) {
                            i(c) && a.BannerInjector.doAsync(c)
                        }),
                        f()
                    }
                    function f() {
                        s.eachKey(u, function(a, b) {
                            g(b)
                        })
                    }
                    function g(b) {
                        if (clearTimeout(b.reloadTimeout),
                        b.running)
                            b.reloadTimeout = setTimeout(function() {
                                g(b)
                            }, p);
                        else {
                            var c = []
                              , d = b.getResponsiveRequests();
                            s.each(d, function(a) {
                                i(a) && c.push(a.id)
                            }),
                            c.length > 0 && a.AdQueue.reloadQueue(b, c)
                        }
                    }
                    function h(a) {
                        a.hasResponsiveConfig() && (p = a.config.responsiveCheckTimeout,
                        t[a.id] = a,
                        i(a),
                        d())
                    }
                    function i(a) {
                        var b, c, d, e = a.config.responsive.bounds;
                        for (b = 0; b < e.length; b++)
                            if (c = e[b],
                            j(c)) {
                                b !== a.currentBoundIndex && (d = !0,
                                a.currentBoundIndex = b,
                                a.responsiveId = c.id,
                                delete a.config.adcallUrl);
                                break
                            }
                        return d || delete a.responsiveId,
                        d
                    }
                    function j(b) {
                        return o || (o = a.Utils.getViewportWidth()),
                        o >= b.min && o <= b.max
                    }
                    function k(a) {
                        var b = !1
                          , c = [];
                        s.each(a.storage, function(a, d) {
                            a.hasResponsiveConfig() && (p = a.config.responsiveCheckTimeout,
                            b = !0,
                            c.push(d),
                            i(a))
                        }),
                        b && (a.responsiveIndexes = c,
                        u[a.id] = a)
                    }
                    function l() {
                        return t
                    }
                    function m() {
                        return u
                    }
                    function n(a) {
                        var b = {
                            params: {}
                        };
                        return s.copyObject(b, a.config, ["params", "placement", "alias"], !0),
                        s.copyObject(b.params, a.config.params, ["alias"], !0),
                        s.isNumber(a.responsiveId) ? b.placement = a.responsiveId : s.isString(a.responsiveId) && (b.params.alias = a.responsiveId),
                        b
                    }
                    var o, p, q, r = "ResponsiveAdManager", s = a.Utils, t = {}, u = {};
                    a.Utils.addEventListener(c, "resize", d),
                    a[r] = {
                        register: h,
                        registerQueue: k,
                        currentViewportWidth: o,
                        checkTimeout: q,
                        getResponsiveAdsRegistry: l,
                        getResponsiveQueuesRegistry: m,
                        makeResponsiveConfigClone: n
                    }
                }
                function d(a, b, c) {
                    function d(c, d) {
                        if (a.Utils.resolveContainer(c.config),
                        c.shown = !0,
                        c.config.fif.usefif)
                            e("injectBannerAsyncMode", "Fif", c),
                            a.FifRenderer.setupFif(c);
                        else {
                            e("injectBannerAsyncMode", "postscribe", c);
                            var f = a.ResourceLoader.buildUrl(c.config, "postscribe.js")
                              , g = d.bannerCode || B.generateScriptHTML(c);
                            a.ResourceLoader.loadScript(f, "postscribe", !0, function(a) {
                                if (!a)
                                    throw new Error("BannerInjector# injectBannerAsyncMode.  Postscribe lib failed to load");
                                c.logger.log(j, "injectBannerAsyncMode", "Postscribe loaded. Performing ad injection for request id " + (c.id || "<?>")),
                                b.postscribe(c.config.adContainer, g, c.config.complete)
                            }, c.logger)
                        }
                    }
                    function e(a, b, c) {
                        var d = c.config;
                        c.logger.log(j, a, "Inject banner in async mode using " + b + " for request id " + c.id + (d.adcallUrl ? " using URL " + d.adcallUrl : ""))
                    }
                    function f(b) {
                        var c = a.Detections;
                        c.detectScreenSize(b),
                        c.detectUTCOffset(b),
                        c.detectFlashVersion(b),
                        c.detectRichMediaSupport(b)
                    }
                    function g(a) {
                        i(a),
                        d(a, {})
                    }
                    function h(b) {
                        b.shown = !0,
                        i(b),
                        b.logger.log(j, "doSync", "Performing sync ad call using document.write" + (b.config.placement ? " for placement " + b.config.placement : "") + " using URL " + b.config.adcallUrl),
                        c.document.write(a.Utils.generateScriptHTML(b))
                    }
                    function i(b) {
                        var c = b.config;
                        b.responsiveId && (c = a.ResponsiveAdManager.makeResponsiveConfigClone(b)),
                        w.AdcallBuilder.buildUrl(c),
                        b.config.adcallUrl = c.adcallUrl
                    }
                    var j = "BannerInjector";
                    a[j] = {
                        injectBannerAsyncMode: d,
                        performSyncDetections: f,
                        doAsync: g,
                        doSync: h
                    }
                }
                function e(a, b, c) {
                    function d(a, c, d, g) {
                        b.resourceRegistry = b.resourceRegistry || {};
                        var h = b.resourceRegistry;
                        h[a] && h[a].loaded && (!d || d && p) ? c(h[a].status) : (h[a] || (h[a] = {
                            queue: [],
                            needPageDOM: d
                        },
                        g(e(a), f(a))),
                        h[a].queue.push(c))
                    }
                    function e(a) {
                        return function() {
                            g(a, !0)
                        }
                    }
                    function f(a) {
                        return function() {
                            g(a, !1)
                        }
                    }
                    function g(a, c) {
                        var d = b.resourceRegistry;
                        d[a].loaded = !0,
                        d[a].status = c,
                        h(d[a])
                    }
                    function h(a) {
                        if ((!a.needPageDOM || p) && a.loaded) {
                            for (var b = a.queue, c = 0; c < b.length; c++)
                                b[c](a.status);
                            a.queue = []
                        }
                    }
                    function i() {
                        if (!n) {
                            p = !0,
                            n = !0;
                            var a = b.resourceRegistry;
                            for (var c in a)
                                h(a[c])
                        }
                    }
                    function j() {
                        if ("complete" === q.readyState)
                            return setTimeout(i, 1);
                        if (q.addEventListener)
                            q.addEventListener("DOMContentLoaded", i, !1),
                            c.addEventListener("load", i, !1);
                        else if (q.attachEvent) {
                            q.attachEvent("onreadystatechange", i),
                            c.attachEvent("onload", i);
                            var a = !1;
                            try {
                                a = null === c.frameElement
                            } catch (a) {}
                            q.documentElement.doScroll && a && k()
                        }
                    }
                    function k() {
                        if (!n) {
                            try {
                                q.documentElement.doScroll("left")
                            } catch (a) {
                                return void setTimeout(k, 1)
                            }
                            i()
                        }
                    }
                    function l(a, b) {
                        var d = "loading" === q.readyState;
                        if (!d && "interactive" === q.readyState && c == c.top && b)
                            try {
                                q.documentElement.doScroll && q.documentElement.doScroll("left")
                            } catch (a) {
                                d = !0
                            }
                        else
                            !d && "interactive" === q.readyState && c != c.top && b && (q.addEventListener ? p || (d = !0) : a && (d = !0));
                        return d
                    }
                    function m() {
                        return p
                    }
                    var n, o = "ResourceManager", p = !1, q = c.document;
                    j(),
                    a[o] = {
                        schedule: d,
                        isSync: l,
                        isDOMReady: m
                    }
                }
                function f(a, b, c) {
                    function d(b, c, d, e, h) {
                        a.ResourceManager.schedule(c, a.Utils.createClosure(e, h), d, function(c, d) {
                            g(),
                            f(b, j, {
                                onSuccess: a.Utils.createClosure(c, h),
                                onError: a.Utils.createClosure(d, h)
                            }, !1)
                        })
                    }
                    function e(b, c, d) {
                        g(),
                        f(b, j, {
                            onSuccess: a.Utils.createClosure(function() {
                                c(!0)
                            }, d),
                            onError: a.Utils.createClosure(function() {
                                c(!1)
                            }, d)
                        }, !0)
                    }
                    function f(b, d, e, f) {
                        var g = c.document.createElement("script")
                          , h = a.Environment.getIEVersion();
                        g.setAttribute("type", "text/javascript"),
                        g.setAttribute("src", b),
                        h && (9 > h || c.document.documentMode && c.document.documentMode < 9) ? g.onreadystatechange = function() {
                            /loaded|complete/.test(g.readyState) && (g.onreadystatechange = null,
                            e.onSuccess && e.onSuccess())
                        }
                        : h >= 10 && !f ? (g.onerror = function() {
                            setTimeout(e.onError, 0)
                        }
                        ,
                        g.onload = function() {
                            setTimeout(e.onSuccess, 0)
                        }
                        ) : (g.onerror = e.onError,
                        g.onload = e.onSuccess),
                        d.appendChild(g)
                    }
                    function g() {
                        if (!j) {
                            var a = c.document.head;
                            if (!a) {
                                var b = c.document.getElementsByTagName("head");
                                a = b && b.length > 0 ? b[0] : c.document.body || c.document.getElementsByTagName("body")[0]
                            }
                            j = a
                        }
                    }
                    function h(a, b) {
                        return "https" === a.protocol ? l + b : k + b
                    }
                    function i() {
                        var a = c.location.protocol.substring(0, c.location.protocol.length - 1);
                        return h({
                            config: {
                                protocol: a
                            }
                        }, m + ".js")
                    }
                    var j, k = "http://aka-cdn-ns.adtechus.com/dt/common/", l = "https://aka-cdn.adtechus.com/dt/common/", m = "DACMultiAdPlugin", n = "ResourceLoader";
                    a[n] = {
                        loadScript: d,
                        loadTransientScript: e,
                        buildUrl: h,
                        buildMultiAdPluginUrl: i,
                        MULTI_AD_PLUGIN_NAME: m
                    }
                }
                function g(a) {
                    function b(b) {
                        if (!a.Utils.isString(b.adcallUrl)) {
                            var f = b.protocol + "://" + b.server + "/" + d + e + b.network + e + (b.placement ? b.placement : 0) + e + b.pageid.toString() + e + b.sizeid.toString() + e + b.normaltarget;
                            f = c(f, b, ";"),
                            b.adcallUrl = f
                        }
                    }
                    function c(b, c, d, e, g, h) {
                        var i = !0
                          , j = "";
                        return h = h || {},
                        a.Utils.isObject(c.params) && (i = void 0 === c.params.misc,
                        a.Utils.eachKey(c.params, function(a, c) {
                            g && g[a] || (h[a] && (c = h[a],
                            delete h[a]),
                            f[a] ? j += d + a + "=" + c : b += d + a + "=" + c)
                        }),
                        a.Utils.eachKey(h, function(a, c) {
                            b += d + a + "=" + c
                        })),
                        i && !e && (b += d + "misc=" + (new Date).getTime()),
                        b += j
                    }
                    var d = "addyn/3.0"
                      , e = "/"
                      , f = {
                        rdclick: !0,
                        rdview: !0,
                        link: !0
                    }
                      , g = "AdcallBuilder";
                    a[g] = {
                        buildUrl: b,
                        addUrlParams: c
                    }
                }
                function h(a, b, c) {
                    function d(a, c) {
                        function d() {
                            F || (v.log(h, "adcallComplete", "#" + a.id),
                            c.queueId && !c.partOfMultiAd && b.queueCallback(c.queueId),
                            F = !0)
                        }
                        function g(a) {
                            f() ? a.onload = d : a.onreadystatechange = function() {
                                /loaded|complete/.test(a.readyState) && (a.onreadystatechange = null,
                                d())
                            }
                        }
                        function i() {
                            v.log(h, "done", "#" + a.id),
                            d(),
                            w.complete && w.complete()
                        }
                        function l(b, c) {
                            v.log(h, "resize", "#" + a.id + " resizing to " + b + "x" + c),
                            a.width = b,
                            a.height = c
                        }
                        function m() {
                            if (E) {
                                n(),
                                w.fif.preResize(c.id);
                                var a = o();
                                l(a.width, a.height)
                            } else
                                l(C, D);
                            i()
                        }
                        function n() {
                            var a;
                            if (!c.config.fif.contentStyle) {
                                if (j.isOldIEMode()) {
                                    var b = I.nextSibling;
                                    b && "a" === b.nodeName.toLowerCase() && (a = b)
                                } else
                                    2 === I.children.length && "a" === I.children[1].nodeName.toLowerCase() && (a = I.children[1]);
                                a && 1 === a.children.length && "img" === a.children[0].nodeName.toLowerCase() && (a.children[0].style.display = "block")
                            }
                        }
                        function o() {
                            var a = I.scrollWidth
                              , b = I.scrollHeight;
                            return 0 !== a && 0 !== b || 1 !== I.children.length || !j.isOldIEMode() || "script" === I.children[0].nodeName.toLowerCase() && (a = q("Width"),
                            b = q("Height")),
                            window.opera && (2 > a || 2 > b) && (a = p("Width"),
                            b = p("Height")),
                            {
                                width: a,
                                height: b
                            }
                        }
                        function p(a) {
                            var b = Math.max(B.documentElement["client" + a], B.body["scroll" + a], B.documentElement["scroll" + a], B.body["offset" + a], B.documentElement["offset" + a]);
                            return b
                        }
                        function q(a) {
                            var b = Math.max(B.body["scroll" + a], B.body["offset" + a]);
                            return b
                        }
                        function r() {
                            var a = 0
                              , b = setInterval(function() {
                                if (50 > a && "complete" != B.readyState) {
                                    var c = o();
                                    c.width > 1 && c.height > 1 && (clearInterval(b),
                                    l(c.width, c.height)),
                                    a++
                                } else
                                    clearInterval(b)
                            }, 100)
                        }
                        function s() {
                            E ? (G = 0,
                            t()) : u()
                        }
                        function t() {
                            var b = o();
                            (b.width <= 1 || b.height <= 1) && H > G ? (G += k,
                            v.log("#" + a.id + " recheck content size"),
                            setTimeout(t, k)) : u()
                        }
                        function u() {
                            v.log("#" + a.id + " loaded"),
                            m()
                        }
                        var v = c.logger
                          , w = c.config
                          , x = "<script>var inFIF=inDapIF=true;</script>";
                        w.fif.disableFriendlyFlag && (x = "");
                        var y = '<script id="adscript" src="' + w.adcallUrl + '"></script>';
                        c.adLoadScript && (y = c.adLoadScript);
                        var z = "<style>body {margin:0;padding:0;overflow:hidden;} html {margin:0;padding:0;} ";
                        z += c.config.fif.contentStyle,
                        z += "</style>";
                        var A = "<!DOCTYPE html><html><head>" + z + "</head><body>" + x + '<div id="afd">' + y + "</div></body></html>"
                          , B = a.contentDocument || a.contentWindow.document
                          , C = w.fif.width
                          , D = w.fif.height
                          , E = 1 >= C || 1 >= D
                          , F = !1
                          , G = 0
                          , H = c.config.fif.onloadResizeCheckTimeLimit;
                        B.open("text/html", "replace"),
                        B.write(A),
                        g(B.getElementById("adscript")),
                        e() ? setTimeout(function() {
                            B.close()
                        }, 500) : B.close();
                        var I = B.getElementById("afd");
                        "complete" == B.readyState ? E ? s() : (l(C, D),
                        i()) : (B.addEventListener ? a.contentWindow.addEventListener("load", s, !1) : B.body.onload = s,
                        E && !w.fif.disableLoadingResize && r())
                    }
                    function e() {
                        return !!c.opera || j.isOldIEMode()
                    }
                    function f() {
                        var a = j.getIEVersion();
                        return !a || !(9 > a || c.document.documentMode && c.document.documentMode < 9)
                    }
                    function g(a) {
                        var b = c.document.createElement("iframe")
                          , e = a.config
                          , f = e.placement + "_frame";
                        f = e.alias ? e.alias + "_frame" : e.placement ? e.placement + "_frame" : e.adContainerId ? e.adContainerId + "_frame" : "rnd_frame" + i.rnd(1e6),
                        b.seamless = "seamless",
                        b.id = f,
                        b.name = f,
                        b.style.border = "0px",
                        b.scrolling = "no",
                        b.frameBorder = 0,
                        b.width = 1,
                        b.height = 1,
                        b.allowtransparency = !0,
                        b.setAttribute("allowFullScreen", "true"),
                        b.setAttribute("mozallowFullScreen", "true"),
                        b.setAttribute("webkitAllowFullScreen", "true"),
                        b.src = "about:blank",
                        e.adContainer.appendChild(b),
                        a.logger.log(h, "setupFif", "#" + f + " created"),
                        d(b, a)
                    }
                    var h = "FifRenderer"
                      , i = a.Utils
                      , j = a.Environment
                      , k = 50;
                    a[h] = {
                        setupFif: g
                    }
                }
                function i(a, b, c) {
                    function d(a, b, c, d) {
                        c[a] = !!d[a + b]
                    }
                    function e(a, b, c, d) {
                        d[a + b] && (c[a] = d[a + b])
                    }
                    function f(a, b) {
                        var f;
                        if (c.Adtech !== m) {
                            var g = c.Adtech;
                            f = {
                                network: g["networkSubnetwork" + a],
                                protocol: g["protocol" + a],
                                server: g["adURLHostName" + a],
                                alias: g["placementAlias" + a],
                                kv: g["KV" + a],
                                fif: g["fif" + a],
                                params: {}
                            },
                            d("performScreenDetection", a, f, g),
                            d("performTimezoneDetection", a, f, g),
                            d("performFlashDetection", a, f, g),
                            d("performRichMediaDetection", a, f, g),
                            d("performGeoDetection", a, f, g),
                            d("syncIfPossible", a, f, g),
                            d("legacyDACLoadType", a, f, g),
                            e("loc", a, f.params, g),
                            e("grp", a, f.params, g),
                            b.logObject(n, "AdtechConfig", f)
                        }
                        return f
                    }
                    function g(a, b, c, d, e) {
                        if (o(a)) {
                            var f = c && a[c] ? c : b;
                            d.log(n, "getPlacementConfig", "Placement look up for level " + e + " done using " + (f === c ? "alias: " + c : "placement id: " + b));
                            var g = a[f];
                            return g && d.logObject(n, "getPlacementConfig", g),
                            g
                        }
                        return m
                    }
                    function h(a) {
                        return o(a) ? a.important : m
                    }
                    function i(b, c, d, e) {
                        var f = e || {};
                        a.Utils.eachKey(c, function(a, e) {
                            "important" === a || f[a] || (d || "params" !== a || e.alias === m || c.alias !== m || (b.alias = e.alias),
                            o(b[a]) && o(e) && !d ? i(b[a], e, !0) : b[a] === m && o(e) && !d ? (b[a] = {},
                            i(b[a], e, !0)) : null === e ? delete b[a] : e !== m && (b[a] = e))
                        })
                    }
                    function j(b) {
                        var c = b.logger
                          , d = b.config
                          , e = d.placement
                          , f = d.alias;
                        if (!a.Utils.isNumber(e) && !a.Utils.isString(f))
                            throw n + ": Invalid ad identifier";
                        c.log(n, "buildConfiguration", "Resolving configuration for alias: " + f + " and placement: " + e);
                        var g, h = {}, j = k(d, c), l = "";
                        for (g = 0; g < j.length; g++)
                            j[g] && o(j[g].config) && (l += " " + g,
                            i(h, j[g].config, !1, j[g].ignore));
                        return c.log(n, "buildConfiguration", "Found configuration at priorities" + l),
                        h
                    }
                    function k(a, c) {
                        var d = []
                          , e = b.config
                          , i = a.placement
                          , j = a.alias
                          , k = {
                            enableMultiAd: !0,
                            responsiveCheckTimeout: !0
                        };
                        return d[10] = {
                            config: e.network
                        },
                        d[20] = {
                            config: e.website
                        },
                        d[30] = {
                            config: e.page
                        },
                        d[40] = {
                            config: g(e.placements, i, j, c, 40),
                            ignore: k
                        },
                        d[50] = {
                            config: e.networkdyn
                        },
                        d[60] = {
                            config: e.websitedyn
                        },
                        d[70] = {
                            config: e.pagedyn
                        },
                        d[80] = {
                            config: f(a.placement, c)
                        },
                        d[90] = {
                            config: g(e.placementsdyn, i, j, c, 90),
                            ignore: k
                        },
                        d[110] = {
                            config: h(e.network)
                        },
                        d[120] = {
                            config: h(e.website)
                        },
                        d[130] = {
                            config: h(e.page)
                        },
                        d[140] = {
                            config: h(g(e.placements, i, j, c, 140)),
                            ignore: k
                        },
                        d[150] = {
                            config: h(e.networkdyn)
                        },
                        d[160] = {
                            config: h(e.websitedyn)
                        },
                        d[170] = {
                            config: h(e.pagedyn)
                        },
                        d[180] = {
                            config: h(g(e.placementsdyn, i, j, c, 180)),
                            ignore: k
                        },
                        d[200] = {
                            config: a,
                            ignore: k
                        },
                        d
                    }
                    function l(a) {
                        return !!b.config.placements && !!b.config.placements[a] || !!b.config.placementsdyn && !!b.config.placementsdyn[a]
                    }
                    var m, n = "ConfigResolver", o = a.Utils.isObject;
                    a[n] = {
                        buildConfiguration: j,
                        isPlacementConfigDefined: l
                    }
                }
                function j(a) {
                    function b(a, b) {
                        return n(a) && "" !== a ? a : b
                    }
                    function c(a, b) {
                        return o(a) ? a : b
                    }
                    function d(a) {
                        return a ? "https" : "http"
                    }
                    function e(a, e) {
                        var i, r = {};
                        if (!o(a.placement) && !n(a.alias))
                            throw "config.placement must be a Number or the config.alias has to be a string";
                        return m.each(["network", "server"], function(b) {
                            if (!n(a[b]))
                                throw j + "#process config." + b + " must be a String"
                        }),
                        i = a.placement ? a.placement : a.alias,
                        r.placement = a.placement,
                        r.alias = a.alias,
                        r.network = a.network,
                        r.server = a.server,
                        r.protocol = b(a.protocol, d(a.secure === !0)),
                        r.pageid = c(a.pageid, 0),
                        r.sizeid = c(a.sizeid, -1),
                        r.normaltarget = b(a.normaltarget, "ADTECH"),
                        r.adContainerId = b(a.adContainerId, i.toString()),
                        h(r, a, "enableMultiAd", !1),
                        g(r, a, "responsiveCheckTimeout", k),
                        p(a.fif) ? (r.fif = {
                            usefif: a.fif.usefif !== !1,
                            width: c(a.fif.width, 0),
                            height: c(a.fif.height, 0)
                        },
                        f(r.fif, a.fif, "disableFriendlyFlag"),
                        f(r.fif, a.fif, "disableLoadingResize"),
                        g(r.fif, a.fif, "shareWithAddOns", !0),
                        r.fif.contentStyle = m.isString(a.fif.contentStyle) ? a.fif.contentStyle : "",
                        r.fif.preResize = m.isFunc(a.fif.preResize) ? a.fif.preResize : q,
                        r.fif.onloadResizeCheckTimeLimit = o(a.fif.onloadResizeCheckTimeLimit) && a.fif.onloadResizeCheckTimeLimit > 0 ? a.fif.onloadResizeCheckTimeLimit : l) : r.fif = {
                            usefif: !1,
                            width: 0,
                            height: 0,
                            disableFriendlyFlag: !1,
                            disableLoadingResize: !1
                        },
                        m.isFunc(a.complete) && (r.complete = a.complete),
                        r.params = {},
                        p(a.params) && m.eachKey(a.params, function(b) {
                            n(a.params[b]) && a.params[b].length > 0 && (r.params[b] = a.params[b])
                        }),
                        r.alias && (r.params.alias = r.alias),
                        p(a.kv) && m.eachKey(a.kv, function(a, b) {
                            var c = [];
                            m.isArray(b) ? (m.each(b, function(a) {
                                (n(a) || o(a)) && c.push(a.toString())
                            }),
                            r.params["kv" + a] = c.join(":")) : n(b) && b.length > 0 ? r.params["kv" + a] = b.toString() : o(b) && (r.params["kv" + a] = b.toString())
                        }),
                        m.isObject(a.responsive) ? (r.responsive = {
                            useresponsive: a.responsive.useresponsive !== !1,
                            bounds: []
                        },
                        m.isArray(a.responsive.bounds) && m.each(a.responsive.bounds, function(a) {
                            a.id && o(a.min) && o(a.max) && a.min < a.max && r.responsive.bounds.push(a)
                        }),
                        0 === r.responsive.bounds.length && (r.responsive.useresponsive = !1)) : r.responsive = {
                            useresponsive: !1,
                            bounds: []
                        },
                        f(r, a, "syncIfPossible"),
                        f(r, a, "legacyDACLoadType"),
                        f(r, a, "performGeoDetection"),
                        f(r, a, "performScreenDetection"),
                        f(r, a, "performTimezoneDetection"),
                        f(r, a, "performFlashDetection"),
                        f(r, a, "performRichMediaDetection"),
                        e.logObject(j, "finalConfig", r),
                        r
                    }
                    function f(a, b, c) {
                        a[c] = b[c] === !0
                    }
                    function g(a, b, c, d) {
                        a[c] = void 0 !== b[c] ? b[c] : d
                    }
                    function h(a, b, c, d) {
                        a[c] = m.isBoolean(b[c]) ? b[c] : d
                    }
                    function i(a) {
                        return a = a || {},
                        a.multiAd = a.multiAd || {},
                        a.multiAd.skipDefault = a.multiAd.skipDefault || !1,
                        a.multiAd.disableAdInjection = a.multiAd.disableAdInjection || !1,
                        g(a.multiAd, a.multiAd, "autoInjectShownResponsive", !0),
                        a
                    }
                    var j = "ConfigFinalizer"
                      , k = 150
                      , l = 500
                      , m = a.Utils
                      , n = m.isString
                      , o = m.isNumber
                      , p = m.isObject
                      , q = function() {};
                    a[j] = {
                        process: e,
                        processQueueConfig: i,
                        defaultFunc: q
                    }
                }
                function k(a) {
                    function b(a, b, f) {
                        var g;
                        return b === m && f === m ? g = c(a) : o.isString(a) && o.isString(b) ? g = d(a, b, f) : e(),
                        g
                    }
                    function c(a) {
                        var b = {
                            legacyApi: !1
                        };
                        if (o.isNumber(a))
                            b.config = f(a);
                        else if (o.isString(a))
                            b.config = g(a);
                        else if (o.isObject(a)) {
                            if (b.config = a,
                            l(b.config),
                            !b.config.placement && !b.config.alias)
                                throw n + "#handleNewApi no placement id or alias found"
                        } else
                            e();
                        return b
                    }
                    function d(a, b, c) {
                        var d = {
                            legacyApi: !0
                        };
                        return o.isObject(c) ? d.config = h(a, b, c) : c === m ? d.config = h(a, b, {}) : e(),
                        d
                    }
                    function e() {
                        throw n + "#handleParameters Invalid parameters combination"
                    }
                    function f(a) {
                        return {
                            placement: a
                        }
                    }
                    function g(a) {
                        if (!a)
                            throw n + "#handleAliasString empty alias not allowed";
                        return {
                            alias: a
                        }
                    }
                    function h(a, b, c) {
                        var d = {};
                        return i(a, b, d),
                        c.fif ? (d.fif = {},
                        d.fif.usefif = !0,
                        d.fif.width = k(c.width, 0),
                        d.fif.height = k(c.height, 0),
                        d.fif.preResize = o.isFunc(c.preResize) ? c.preResize : function() {}
                        ) : d.fif = {
                            usefif: !1,
                            width: 0,
                            height: 0
                        },
                        d.complete = j(c.complete),
                        d.debugMode = !!c.debugMode,
                        d
                    }
                    function i(a, b, c) {
                        c.adContainerId = a,
                        c.adcallUrl = b
                    }
                    function j(a) {
                        return o.isFunc(a) ? a : m
                    }
                    function k(a, b) {
                        return o.isNumber(a) ? a : b
                    }
                    function l(a) {
                        !a.adContainerId && a.injectElementId && (a.adContainerId = a.injectElementId),
                        !a.alias && a.params && a.params.alias && (a.alias = a.params.alias)
                    }
                    var m, n = "LoadAdParametersHandler", o = a.Utils;
                    a[n] = {
                        handleParameters: b
                    }
                }
                function l(a, b, c) {
                    function d(a) {
                        a.performScreenDetection && c.screen && c.screen.width && c.screen.height && (a.params.screenheight = c.screen.height.toString(),
                        a.params.screenwidth = c.screen.width.toString(),
                        c.devicePixelRatio && (a.params.screendensity = c.devicePixelRatio.toString()))
                    }
                    function e(a) {
                        if (a.performTimezoneDetection) {
                            var b = -(new Date).getTimezoneOffset();
                            b > 0 && (b = "+" + b),
                            a.params.aduho = encodeURIComponent(b)
                        }
                    }
                    function f() {
                        return !(c.navigator.mimeTypes !== o && c.navigator.mimeTypes[q] !== o && !navigator.mimeTypes[q].enabledPlugin)
                    }
                    function g(a) {
                        if (a.performFlashDetection) {
                            var b, d, e;
                            if (c.navigator.plugins !== o && c.navigator.plugins["Shockwave Flash"] !== o) {
                                var g = c.navigator.plugins["Shockwave Flash"].description;
                                g && f() && (g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                                b = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10),
                                d = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                                e = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0)
                            } else if (c.ActiveXObject !== o)
                                try {
                                    var h = new c.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                                    if (h) {
                                        var i = h.GetVariable("$version");
                                        i && (i = i.split(" ")[1].split(","),
                                        b = parseInt(i[0], 10),
                                        d = parseInt(i[1], 10),
                                        e = parseInt(i[2], 10))
                                    }
                                } catch (a) {}
                            b !== o && (a.params.flashver = b + "." + d + "." + e)
                        }
                    }
                    function h(a) {
                        if (c.mraid !== o) {
                            var b = c.mraid.getVersion();
                            /1\.\d/.test(b) ? a = "3" : /2\.\d/.test(b) && (a = "5")
                        }
                        return a
                    }
                    function i(a) {
                        var b = "" !== a ? ":" : "";
                        return c.ormma !== o ? a + b + "4" : a
                    }
                    function j(a) {
                        if (a.performRichMediaDetection) {
                            var b = "";
                            b = h(b),
                            b = i(b),
                            "" !== b && (a.params.apifw = b)
                        }
                    }
                    function k(d) {
                        return function(e, f) {
                            function g(a) {
                                b.geoCoords = a.coords,
                                e()
                            }
                            function h(a) {
                                d.logger.log(p, "myErr", "GeoLocation failed: " + a.toString()),
                                f()
                            }
                            c.navigator.geolocation.getCurrentPosition(a.Utils.createClosure(g, d.logger), a.Utils.createClosure(h, d.logger), {
                                timeout: 1e3
                            })
                        }
                    }
                    function l(c, d) {
                        var e = c.config;
                        return a.Utils.createClosure(function(c) {
                            c && b.geoCoords && a.Utils.isNumber(b.geoCoords.latitude) && a.Utils.isNumber(b.geoCoords.longitude) && (e.params.lat = b.geoCoords.latitude.toString(),
                            e.params.long = b.geoCoords.longitude.toString()),
                            d()
                        }, c.logger)
                    }
                    function m(a) {
                        return !!(a.performGeoDetection && c.navigator && c.navigator.geolocation && c.navigator.geolocation.getCurrentPosition)
                    }
                    function n(b, c) {
                        a.ResourceManager.schedule("geo", l(b, c), !1, k(b))
                    }
                    var o, p = "Detections", q = "application/x-shockwave-flash";
                    return a[p] = {
                        detectScreenSize: d,
                        detectUTCOffset: e,
                        detectFlashVersion: g,
                        detectRichMediaSupport: j,
                        detectGeoLocation: n,
                        isGeo: m
                    },
                    a[p]
                }
                function m(a, b, c) {
                    function d(d, e) {
                        var f;
                        return f = new v(a,b,c,d),
                        f.allowGrouping = e,
                        b.adqueues = b.adqueues || {},
                        b.adqueues[d] = f,
                        b.adQueuesIdList = b.adQueuesIdList || [],
                        b.currentAdQueue = f,
                        b.adQueuesIdList.push(d),
                        f
                    }
                    function e(a) {
                        var c = b.currentAdQueue || d(a.queueId || q.rnd(1e5).toString(), a.config.enableMultiAd);
                        c.addRequest(a),
                        a.queueId = c.id
                    }
                    function f(a) {
                        var c = b.currentAdQueue
                          , d = c.id;
                        if (!q.isObject(c))
                            throw new Error(p + "#execute No AdQueue to execute was found");
                        return b.currentAdQueue = void 0,
                        c.allowGrouping ? r.loadScript(r.buildMultiAdPluginUrl(), r.MULTI_AD_PLUGIN_NAME, !1, function(b) {
                            if (!b)
                                throw new Error(p + "#execute MultiAd plugin failed to load");
                            c = h(c),
                            g(c, a)
                        }, null) : g(c, a),
                        d
                    }
                    function g(b, c) {
                        b.executeConfig = c,
                        a.ResponsiveAdManager.registerQueue(b),
                        b.allowGrouping ? (l(b, c.multiAd),
                        a.MultiAdManager.load(b, [])) : b.start()
                    }
                    function h(d) {
                        var e = new a.pluginClasses.MultiAdGroupQueue(a,b,c,d.id);
                        return b.adqueues[d.id] = e,
                        a.Utils.each(d.storage, function(a) {
                            e.addRequest(a, d.requests[a.id])
                        }),
                        e
                    }
                    function i(b, c) {
                        k(b, function() {
                            try {
                                a.BannerInjector.doAsync(b)
                            } catch (a) {
                                b.logger.log(p, "processAdRequest", "Exception caught: " + a),
                                c.advance()
                            }
                        })
                    }
                    function j(b, c, d) {
                        b.logger.log(p, "processMultiAdRequest", "Start processing group from queue:" + c + " with index " + d),
                        k(b, function() {
                            a.MultiAdManager.loadGroup(b, c, d)
                        })
                    }
                    function k(b, c) {
                        var d = b.config;
                        a.BannerInjector.performSyncDetections(d),
                        a.Detections.isGeo(d) ? a.Detections.detectGeoLocation(b, function() {
                            c()
                        }) : c()
                    }
                    function l(a, b) {
                        for (var c = !!b && b.skipDefault, d = 0; d < a.storage.length; d++) {
                            var e = a.storage[d];
                            a.requests[e.id].multiAdSkipDefault = c
                        }
                    }
                    function m(a, c) {
                        return c ? b.adqueues[c].requests[a] : void 0
                    }
                    function n(a) {
                        if (0 !== b.adQueuesIdList.length)
                            for (var c = b.adQueuesIdList.length - 1; c >= 0; c--) {
                                var d = b.adQueuesIdList[c]
                                  , e = b.adqueues[d]
                                  , f = e.requests[a];
                                if (f)
                                    return d
                            }
                    }
                    function o(b, c) {
                        b.allowGrouping ? (0 === b.virtualSubGroupCounter && (b.virtualSubGroupCounter = b.groupList.length),
                        a.MultiAdManager.load(b, c)) : (b.createVirtualSubQueue(c),
                        b.start())
                    }
                    var p = "AdQueue"
                      , q = a.Utils
                      , r = a.ResourceLoader;
                    a[p] = {
                        enqueue: e,
                        execute: f,
                        processAdRequest: i,
                        processMultiAdRequest: j,
                        getRequest: m,
                        getRequestQueue: n,
                        reloadQueue: o,
                        promoteQueueToMultiAdQueue: h
                    }
                }
                function n(a) {
                    w.BannerInjector.doAsync(a)
                }
                function o(a) {
                    p(a);
                    var b = a.config;
                    w.ResponsiveAdManager.register(a),
                    w.BannerInjector.performSyncDetections(b),
                    C.isGeo(b) ? (B.createAdContainer(a),
                    C.detectGeoLocation(a, function() {
                        w.BannerInjector.doAsync(a)
                    })) : b.syncIfPossible && w.ResourceManager.isSync(a.config.legacyDACLoadType, w.Environment.getIEVersion()) ? w.BannerInjector.doSync(a) : (B.createAdContainer(a),
                    w.BannerInjector.doAsync(a))
                }
                function p(a) {
                    var b = w.ConfigResolver.buildConfiguration(a);
                    a.config = w.ConfigFinalizer.process(b, a.logger),
                    a.config.params.grp = a.config.params.grp || r.adgroupid
                }
                function q(a, b, c) {
                    var d, e = s.adqueues[b];
                    if (e) {
                        var f = e.requests[a];
                        d = f ? f.context.logger : void 0
                    }
                    if (s.debugMode || d && d.isEnabled())
                        throw c
                }
                var r = window
                  , s = r.ADTECH;
                if (!s.loadAd || s.allowDACRedefine) {
                    var t = function(a, b, c) {
                        this.enabled = !!b.debugMode,
                        this.output = c.console,
                        this.modules = a,
                        this.global = b,
                        this.win = c
                    };
                    t.prototype.debug = function(a) {
                        this.enabled && this.output && this.output.log(a)
                    }
                    ,
                    t.prototype.setEnabled = function(a) {
                        this.enabled = !!a || this.global.debugMode
                    }
                    ,
                    t.prototype.isEnabled = function() {
                        return this.enabled
                    }
                    ,
                    t.prototype.logObject = function(a, b, c) {
                        var d = a + ":" + b + " ";
                        this.modules.Utils.isObject(r.JSON) ? d += r.JSON.stringify(c) : (d += "{ ",
                        this.modules.Utils.eachKey(c, function(a, b) {
                            d += a + ":" + b + " "
                        }),
                        d += "}"),
                        this.debug(d)
                    }
                    ,
                    t.prototype.log = function(a, b, c) {
                        this.debug(void 0 === b && void 0 === c ? a : a + "#" + b + " " + c)
                    }
                    ;
                    var u = function(a, b, c) {
                        this.modules = a,
                        this.global = b,
                        this.win = c,
                        this.logger = new t(a,b,c)
                    };
                    u.prototype.setConfig = function(a) {
                        this.config = a,
                        this.id = a.alias ? a.alias : a.placement
                    }
                    ,
                    u.prototype.hasResponsiveConfig = function() {
                        return this.config.responsive.useresponsive
                    }
                    ;
                    var v = function(a, b, c, d) {
                        this.storage = [],
                        this.requests = {},
                        this.allowGrouping = !1,
                        this.doAutoAdInjection = !0,
                        this.namespace = a,
                        this.global = b,
                        this.win = c,
                        this.curPointer = -1,
                        this.id = d,
                        this.responsiveIndexes = [],
                        this.virtualSubQueueIndexes = [],
                        this.running = !1
                    };
                    v.prototype.advance = function() {
                        var a = this.getNextRequest();
                        this.namespace.Utils.isObject(a) ? this.namespace.AdQueue.processAdRequest(a, this) : this.close()
                    }
                    ,
                    v.prototype.start = function() {
                        this.curPointer = -1,
                        this.running = !0,
                        this.advance()
                    }
                    ,
                    v.prototype.close = function() {
                        this.running = !1,
                        this.virtualSubQueueIndexes = []
                    }
                    ,
                    v.prototype.inVirtualMode = function() {
                        return this.virtualSubQueueIndexes.length > 0
                    }
                    ,
                    v.prototype.getNextRequest = function() {
                        var a;
                        if (this.curPointer += 1,
                        this.inVirtualMode()) {
                            var b = this.virtualSubQueueIndexes[this.curPointer];
                            a = this.storage[b]
                        } else
                            a = this.storage[this.curPointer];
                        return a
                    }
                    ,
                    v.prototype.addRequest = function(a) {
                        this.storage.push(a)
                    }
                    ,
                    v.prototype.getResponsiveRequests = function() {
                        var a = []
                          , b = this;
                        return this.namespace.Utils.each(this.responsiveIndexes, function(c) {
                            a.push(b.storage[c])
                        }),
                        a
                    }
                    ,
                    v.prototype.createVirtualSubQueue = function(a) {
                        var b = this;
                        this.virtualSubQueueIndexes = [],
                        this.namespace.Utils.each(a, function(a) {
                            b.namespace.Utils.each(b.storage, function(c, d) {
                                c.id === a && b.virtualSubQueueIndexes.push(d)
                            })
                        })
                    }
                    ;
                    var w = {
                        pluginClasses: {}
                    }
                      , x = s.dacAsyncLoad ? "loadAdImpl" : "loadAd"
                      , y = s.dacAsyncLoad ? "enqueueAdImpl" : "enqueueAd"
                      , z = s.dacAsyncLoad ? "executeQueueImpl" : "executeQueue"
                      , A = s.dacAsyncLoad ? "showAdImpl" : "showAd";
                    a(w, s, r),
                    e(w, s, r);
                    var B = b(w, s, r);
                    i(w, s, r),
                    j(w),
                    c(w, s, r);
                    var C = l(w, s, r);
                    f(w, s, r),
                    d(w, s, r),
                    g(w),
                    k(w, s),
                    h(w, s, r),
                    m(w, s, r),
                    void 0 === r.adgroupid && (r.adgroupid = B.rnd(1e3)),
                    s.dacRequestAd = function(a, b) {
                        r.Adtech = r.Adtech || {};
                        var c = parseInt(a, 10)
                          , d = r.Adtech;
                        B.isString(b) ? d["KV" + a] = B.stringToObject(b) : B.isObject(b) && (d["KV" + a] = b),
                        d["fif" + a] = d["fif" + a] || {},
                        d["syncIfPossible" + a] = d["syncIfPossible" + a] || !0,
                        d["legacyDACLoadType" + a] = !0,
                        s.loadAd({
                            placement: c
                        })
                    }
                    ,
                    s[x] = function(a, b, c) {
                        var d = s.debugMode;
                        try {
                            var e = new u(w,s,r)
                              , f = w.LoadAdParametersHandler.handleParameters(a, b, c);
                            e.logger.setEnabled(f.config.debugMode),
                            d = d || f.config.debugMode,
                            e.setConfig(f.config),
                            f.legacyApi ? n(e) : o(e)
                        } catch (a) {
                            if (d)
                                throw a
                        }
                    }
                    ,
                    s.queueCallback = function(a) {
                        try {
                            B.isObject(s.adqueues[a]) && s.adqueues[a].advance()
                        } catch (a) {
                            if (s.debugMode)
                                throw a
                        }
                    }
                    ,
                    s.registerPlugin = function(a) {
                        a({
                            modules: w,
                            coreClasses: {
                                Queue: v,
                                Logger: t,
                                RequestContext: u
                            }
                        })
                    }
                    ,
                    s[y] = function(a, b) {
                        var c = s.debugMode;
                        try {
                            var d = new u(w,s,r)
                              , e = w.LoadAdParametersHandler.handleParameters(a);
                            d.logger.setEnabled(e.config.debugMode),
                            c = c || e.config.debugMode,
                            d.setConfig(e.config),
                            p(d),
                            b && B.isString(b) && (d.queueId = b),
                            w.AdQueue.enqueue(d)
                        } catch (a) {
                            if (c)
                                throw a
                        }
                    }
                    ,
                    s[z] = function(a) {
                        try {
                            return w.AdQueue.execute(w.ConfigFinalizer.processQueueConfig(a))
                        } catch (a) {
                            if (s.debugMode)
                                throw a
                        }
                    }
                    ,
                    s[A] = function(a, b) {
                        try {
                            var c = w.ResourceLoader;
                            c.loadScript(c.buildMultiAdPluginUrl(), c.MULTI_AD_PLUGIN_NAME, !1, function(c) {
                                if (!c)
                                    throw new Error("Core#execute MultiAd plugin failed to load");
                                w.MultiAdManager.showAd(a, b)
                            }, null)
                        } catch (c) {
                            q(a, b, c)
                        }
                    }
                    ,
                    s.writeAd = function(a, b, c, d) {
                        try {
                            w.MultiAdManager.writeAd(a, b, c, d)
                        } catch (b) {
                            q(a, d, b)
                        }
                    }
                }
            }(),
            function() {
                "use strict";
                var a = window
                  , b = a.DAC;
                if (!b.requestAd || b.allowDACRedefine) {
                    var c = b.asyncLoad ? "requestAdImpl" : "requestAd";
                    b[c] = function(b, c) {
                        a.ADTECH.dacRequestAd(b, c)
                    }
                }
            }()
        } catch (a) {
            if (window.ADTECH.debugMode)
                throw a
        }
    }
    ])
}),
define("ab-sitecatalyst", [], function() {
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
        function d(a, b, c) {
            g.setup(a, b, c)
        }
        function e(a) {
            return g.eventIsEnabled(a)
        }
        function f() {
            return g.s ? g.s.prop6 : ""
        }
        var g = c(1)
          , h = c(6)
          , i = c(7)
          , j = c(8)
          , k = c(10)
          , l = c(11)
          , m = c(12)
          , n = c(13)
          , o = c(14)
          , p = c(15)
          , q = c(16)
          , r = c(17)
          , s = c(18)
          , t = c(19)
          , u = c(20)
          , v = c(21)
          , w = c(22)
          , x = c(23)
          , y = c(24)
          , z = c(25)
          , A = c(26)
          , B = c(27)
          , C = c(28)
          , D = c(29);
        a.exports = {
            init: d,
            trackPageView: h(j),
            trackBacknavigation: h(k),
            trackEvent: h(m),
            trackExitLink: h(n),
            trackMediabox: h(l),
            trackImageGallery: h(p),
            trackLocalNewsExposure: h(o.trackExposure),
            trackLocalNewsSelection: h(o.trackSelection),
            trackFollowSubjectAction: h(q),
            trackFollowSubjectActionWithParams: h(r),
            trackFollowSubjectSettings: h(s),
            trackNotificationAction: h(t),
            trackNotificationSettings: h(u),
            trackMediafileDownload: h(v),
            trackMediafileDownloadPlus: h(w),
            trackUserNotificationExposure: h(x),
            trackShootItLive: h(y),
            trackUserMenuClick: h(C),
            trackWordpressTeaserView: h(z),
            track404: h(A),
            track500: h(B),
            trackEventFilterToggle: h(D),
            eventIsEnabled: e,
            getMainSectionUniqueName: f,
            Events: i
        }
    }
    , function(a, b, c) {
        function d(a, b) {
            var c;
            for (c = 1; c <= 75; c++) {
                var d = "prop" + c
                  , e = "eVar" + c;
                b[d] = a[d],
                b[e] = a[e],
                b.pageName = a.pageName,
                b.products = a.products,
                b.events = a.events,
                b.campaign = a.campaign,
                b.purchaseId = a.purchaseId,
                b.hier1 = a.hier1
            }
        }
        var e = c(2);
        c(3);
        var f = {
            disabledEventNames: [],
            s: null,
            setup: function(a, b, c) {
                f.s = s_gi(a),
                f.s.visitorNamespace = "aftonbladetnya",
                f.s.trackingServer = "metrics.aftonbladet.se",
                f.s.trackingServerSecure = "smetrics.aftonbladet.se",
                f.s.dc = 112,
                f.disabledEventNames = b,
                "number" == typeof c ? f.utcOffset = c : f.utcOffset = 1,
                e.apply(f.s)
            },
            eventIsEnabled: function(a) {
                var b, c = f.disabledEventNames, d = c && c.length;
                if (c && a && a.name && a.name.length > 0)
                    for (b = 0; b < d; b += 1)
                        if (a.name === c[b])
                            return !1;
                return !0
            },
            getUtcOffset: function() {
                return f.utcOffset
            },
            saveState: function() {
                f.state = {},
                d(f.s, f.state)
            },
            restoreState: function() {
                f.state && d(f.state, f.s)
            }
        };
        a.exports = f
    }
    , function(a, b) {
        function c(a) {
            a.split = new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"),
            a.apl = new Function("L","v","d","u","var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"),
            a.getValOnce = new Function("v","c","e","t","var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"),
            a.getTimeParting = new Function("t","z","var s=this,cy;dc=new Date('1/1/2000');if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseFloat(z);var dsts=new Date(s.dstStart);var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}if(t=='d'){return dow};if(t=='w'){return dt}}};"),
            a.getLoadTime = function() {
                var a = (new Date).getTime()
                  , b = window.performance ? performance.timing : 0
                  , c = b ? b.requestStart : ABse.inHeadTS || 0
                  , d = c ? Math.round((a - c) / 100) : "";
                return d
            }
        }
        a.exports = {
            apply: c
        }
    }
    , function(a, b, c) {
        c(4)(c(5))
    }
    , function(a, b) {
        a.exports = function(a) {
            "function" == typeof execScript ? execScript(a) : eval.call(null, a)
        }
    }
    , function(a, b) {
        a.exports = '/*\n ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============\n\n AppMeasurement for JavaScript version: 1.4.1\n Copyright 1996-2013 Adobe, Inc. All Rights Reserved\n More info available at http://www.omniture.com\n*/\nfunction AppMeasurement(){var s=this;s.version="1.4.1";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.sb;k||(k=null);var m=w,i,o;try{i=m.parent;for(o=m.location;i&&i.location&&o&&""+i.location!=""+o&&m.location&&""+i.location!=""+m.location&&i.location.host==o.host;)m=i,i=m.parent}catch(p){}s.eb=function(s){try{console.log(s)}catch(a){}};s.ta=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<\n0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()\'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Va=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.cookieDomain&&\n!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.cookieDomain=c>0?b.substring(c):b}return s.cookieDomain};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Va(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&\nd!="NONE"&&((f=a!=""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.C=[];s.B=function(b,a,c){if(s.ma)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.qb,g=["webkitvisibilitychange","visibilitychange"];\nif(!f)f=s.d.rb;if(f&&f=="prerender"){if(!s.X){s.X=1;for(c=0;c<g.length;c++)s.d.addEventListener(g[c],function(){var a=s.d.qb;if(!a)a=s.d.rb;if(a=="visible")s.X=0,s.delayReady()})}e=1;d=0}else c||s.q("_d")&&(e=1);e&&(s.C.push({m:b,a:a,t:d}),s.X||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.q("_d")&&(a=1);s.C.length>0;){c=s.C.shift();if(a&&!c.t&&c.t>b){s.C.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.ma=1;s[c.m].apply(s,\nc.a);s.ma=0}};s.setAccount=s.sa=function(b){var a,c;if(!s.B("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.foreachVar=function(b,a){var c,e,d,f,g="";d=e="";if(s.lightProfileID)c=s.H,(g=s.lightTrackVars)&&(g=","+g+","+s.ba.join(",")+",");else{c=s.c;if(s.pe||s.linkType)if(g=s.linkTrackVars,e=s.linkTrackEvents,s.pe&&(d=s.pe.substring(0,\n1).toUpperCase()+s.pe.substring(1),s[d]))g=s[d].pb,e=s[d].ob;g&&(g=","+g+","+s.z.join(",")+",");e&&g&&(g+=",events,")}a&&(a=","+a+",");for(e=0;e<c.length;e++)d=c[e],(f=s[d])&&(!g||g.indexOf(","+d+",")>=0)&&(!a||a.indexOf(","+d+",")>=0)&&b(d,f)};s.J=function(b,a,c,e,d){var f="",g,j,w,q,i=0;b=="contextData"&&(b="c");if(a){for(g in a)if(!Object.prototype[g]&&(!d||g.substring(0,d.length)==d)&&a[g]&&(!c||c.indexOf(","+(e?e+".":"")+g+",")>=0)){w=!1;if(i)for(j=0;j<i.length;j++)g.substring(0,i[j].length)==\ni[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[g],d&&(g=g.substring(d.length)),g.length>0))if(w=g.indexOf("."),w>0)j=g.substring(0,w),w=(d?d:"")+j+".",i||(i=[]),i.push(w),f+=s.J(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=g.substring(0,4),q=g.substring(4),g){case "transactionID":g="xact";break;case "channel":g="ch";break;case "campaign":g="v0";break;default:s.ta(q)&&(w=="prop"?g="c"+q:w=="eVar"?g="v"+q:w=="list"?\ng="l"+q:w=="hier"&&(g="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(g)+"="+s.escape(j)}}f!=""&&(f+="&."+b)}return f};s.Xa=function(){var b="",a,c,e,d,f,g,j,w,i="",k="",m=c="";if(s.lightProfileID)a=s.H,(i=s.lightTrackVars)&&(i=","+i+","+s.ba.join(",")+",");else{a=s.c;if(s.pe||s.linkType)if(i=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))i=s[c].pb,k=s[c].ob;i&&(i=","+i+","+s.z.join(",")+",");k&&(k=","+k+",",i&&(i+=",events,"));s.events2&&(m+=(m!=\n""?",":"")+s.events2)}s.AudienceManagement&&s.AudienceManagement.isReady()&&(b+=s.J("d",s.AudienceManagement.getEventCallConfigParams()));for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);g=d.substring(4);!f&&d=="events"&&m&&(f=m,m="");if(f&&(!i||i.indexOf(","+d+",")>=0)){switch(d){case "supplementalDataID":d="sdid";break;case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d=\n"aid";break;case "audienceManagerLocationHint":d="aamlh";break;case "audienceManagerBlob":d="aamb";break;case "authState":d="as";break;case "pageURL":d="g";if(f.length>255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&\n(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d="vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "latitude":d="lat";break;case "longitude":d="lon";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";\nbreak;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "events":m&&(f+=(f!=""?",":"")+m);if(k){g=f.split(",");f="";for(e=0;e<g.length;e++)j=g[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),k.indexOf(","+j+",")>=0&&(f+=(f?",":"")+g[e])}break;case "events2":f="";break;case "contextData":b+=s.J("c",s[d],i,d);f="";break;case "lightProfileID":d=\n"mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d="mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.J("mts",s[d],i,d));f="";break;default:s.ta(g)&&(e=="prop"?d="c"+g:e=="eVar"?d="v"+g:e=="list"?d="l"+g:e=="hier"&&(d="h"+g,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&\n(b+=s.g)}return b};s.u=function(s){var a=s.tagName;if(""+s.wb!="undefined"||""+s.ib!="undefined"&&(""+s.ib).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.oa=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:\n"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.D=function(b){var a=s.u(b),c,e,d="",f=0;if(a){c=b.protocol;e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.oa(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\\r",""),"\\n",""),"\\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;\nelse if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.tb=function(b){for(var a=s.u(b),c=s.D(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:b.parentNode)a=s.u(b),c=s.D(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.hb=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,g;s.ca=1;if(!c)s.ca=0,c=s.clickObject;if(c){b=s.u(c);for(a=\ns.D(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.u(c),a=s.D(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.ca=1;!d&&c&&(d=s.oa(c));d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var i=0,k=0,m;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");g=j.indexOf("#");f>=0?g>=0&&g<f&&(f=g):f=g;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");\nfor(g=0;g<f.length;g++)(m=f[g])&&j.substring(j.length-(m.length+1))=="."+m&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.ra(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),i=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(g=0;g<f.length;g++)m=f[g],j.indexOf(m)>=0&&(k=1);k?i&&(e="e"):i||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||\ns.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ya=function(){var b=s.ca,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=\n0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,g,j,w;d=0;if(f)for(g=0;g<f.length;g++)j=f[g].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(g=0;g<e.length;g++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[g]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+\n"&u=0"),a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";g=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),g=1);for(j in a)!Object.prototype[j]&&g>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+"="+s.escape(j),g--);s.cookieWrite("s_sq",d)}}}return b};s.Za=function(){if(!s.nb){var b=new Date,a=m.location,c,e,d=e=c="",f="",g="",w="1.2",i=s.cookieWrite("s_cc","true",0)?"Y":"N",k="",n="";if(b.setUTCDate&&(w="1.3",(0).toPrecision&&(w="1.5",b=[],b.forEach))){w="1.6";e=0;c={};try{e=new Iterator(c),\ne.next&&(w="1.7",b.reduce&&(w="1.8",w.trim&&(w="1.8.1",Date.parse&&(w="1.8.2",Object.create&&(w="1.8.5")))))}catch(o){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;f=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;g=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;try{s.b.addBehavior("#default#homePage"),k=s.b.ub(a)?"Y":"N"}catch(p){}try{s.b.addBehavior("#default#clientCaps"),n=s.b.connectionType}catch(r){}s.resolution=\nc;s.colorDepth=e;s.javascriptVersion=w;s.javaEnabled=d;s.cookiesEnabled=i;s.browserWidth=f;s.browserHeight=g;s.connectionType=n;s.homepage=k;s.nb=1}};s.I={};s.loadModule=function(b,a){var c=s.I[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.I[b]=s[b]=c;c.Fa=function(){return c.Ja};c.Ka=function(a){if(c.Ja=a)s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.Fa,set:c.Ka}):c._olc=1}catch(e){c._olc=\n1}}a&&(s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c))};s.q=function(b){var a,c;for(a in s.I)if(!Object.prototype[a]&&(c=s.I[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.bb=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};\ns.K=function(b,a){var c,e,d,f,g,w;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)if(f=e[d],(g=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])g[w]||(g[w]=s[f][w]);s[f]=g}}};s.Aa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Ua=function(s){var a,c,e,d,f,g=0,w,i="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(w=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),\ne=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?g=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(g=",p,ei,"),g&&w)))){if((s=w.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&g.indexOf(","+d.substring(0,c)+",")>=0?i+=(i?"&":"")+d:k+=(k?"&":"")+d;i&&k?w=i+"&"+k:k=""}c=253-(w.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):\n"")+"?"+w}return s};s.U=!1;s.O=!1;s.Ia=function(b){s.marketingCloudVisitorID=b;s.O=!0;s.k()};s.R=!1;s.L=!1;s.Ca=function(b){s.analyticsVisitorID=b;s.L=!0;s.k()};s.T=!1;s.N=!1;s.Ea=function(b){s.audienceManagerLocationHint=b;s.N=!0;s.k()};s.S=!1;s.M=!1;s.Da=function(b){s.audienceManagerBlob=b;s.M=!0;s.k()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.U&&!s.marketingCloudVisitorID&&a.getMarketingCloudVisitorID&&(s.U=!0,s.marketingCloudVisitorID=a.getMarketingCloudVisitorID([s,\ns.Ia]),s.marketingCloudVisitorID))s.O=!0;if(!s.R&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.R=!0,s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.Ca]),s.analyticsVisitorID))s.L=!0;if(!s.T&&!s.audienceManagerLocationHint&&a.getAudienceManagerLocationHint&&(s.T=!0,s.audienceManagerLocationHint=a.getAudienceManagerLocationHint([s,s.Ea]),s.audienceManagerLocationHint))s.N=!0;if(!s.S&&!s.audienceManagerBlob&&a.getAudienceManagerBlob&&(s.S=!0,s.audienceManagerBlob=a.getAudienceManagerBlob([s,\ns.Da]),s.audienceManagerBlob))s.M=!0;if(s.U&&!s.O&&!s.marketingCloudVisitorID||s.R&&!s.L&&!s.analyticsVisitorID||s.T&&!s.N&&!s.audienceManagerLocationHint||s.S&&!s.M&&!s.audienceManagerBlob)b=!1}return b};s.j=k;s.l=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Oa=b;e.Na=a;e.La=c;if(s.j==k)s.j=[];s.j.push(e);if(s.l==0)s.l=setInterval(s.k,100)};s.k=function(){var b;if(s.isReadyToTrack()){if(s.l)clearInterval(s.l),s.l=0;if(s.j!=k)for(;s.j.length>0;)b=s.j.shift(),b.Na.apply(b.Oa,b.La)}};s.Ga=\nfunction(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e={},b)e[c]=b[c];d={};s.Aa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Wa=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=\nfunction(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());if(s.visitor){if(s.visitor.getAuthState)s.authState=s.visitor.getAuthState();if(!s.supplementalDataID&&s.visitor.getSupplementalDataID)s.supplementalDataID=s.visitor.getSupplementalDataID("AppMeasurement:"+s._in,s.expectSupplementalData?\n!1:!0)}s.q("_s");if(!s.B("track",arguments)){if(!s.Ga(b)){a&&s.K(a);b&&(c={},s.Aa(c,0),s.K(b));if(s.bb()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Wa();s.hb();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.Ba)s.referrer=m.document.referrer,s.Ba=1;s.referrer=s.Ua(s.referrer);s.q("_g")}if(s.Ya()&&!s.abort)s.Za(),f+=\ns.Xa(),s.gb(d,f),s.q("_t"),s.referrer=""}}b&&s.K(c,1)}s.abort=s.supplementalDataID=s.timestamp=s.pageURLRest=s.linkObject=s.clickObject=s.linkURL=s.linkName=s.linkType=w.vb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.p=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.c.length;b++)if(a=s.c[b],\na.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.tagContainerMarker="";s.gb=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.substring(0,\ne)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";d=s.AudienceManagement&&s.AudienceManagement.isReady();c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+(d?"10":"1")+"/JS-"+s.version+(s.mb?"T":"")+(s.tagContainerMarker?"-"+s.tagContainerMarker:"")+"/"+b+"?AQB=1&ndh=1&pf=1&"+(d?"callback=s_c_il["+s._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";s.Sa(c);s.Y()};\ns.Sa=function(b){s.e||s.$a();s.e.push(b);s.aa=s.r();s.za()};s.$a=function(){s.e=s.cb();if(!s.e)s.e=[]};s.cb=function(){var b,a;if(s.fa()){try{(a=w.localStorage.getItem(s.da()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.fa=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.pa=function(){var b=0;if(s.e)b=s.e.length;s.v&&b++;return b};s.Y=function(){if(!s.v)if(s.qa=k,s.ea)s.aa>s.G&&s.xa(s.e),s.ha(500);else{var b=s.Ma();if(b>0)s.ha(b);else if(b=s.na())s.v=\n1,s.fb(b),s.jb(b)}};s.ha=function(b){if(!s.qa)b||(b=0),s.qa=setTimeout(s.Y,b)};s.Ma=function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.r()-s.wa;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.na=function(){if(s.e.length>0)return s.e.shift()};s.fb=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\\n\\t"+s.unescape(b[c]);s.eb(a)}};s.Ha=function(){return s.marketingCloudVisitorID||s.analyticsVisitorID};\ns.Q=!1;var n;try{n=JSON.parse(\'{"x":"y"}\')}catch(r){n=null}n&&n.x=="y"?(s.Q=!0,s.P=function(s){return JSON.parse(s)}):w.$&&w.$.parseJSON?(s.P=function(s){return w.$.parseJSON(s)},s.Q=!0):s.P=function(){return null};s.jb=function(b){var a,c,e;if(s.Ha()&&b.length>2047&&(typeof XMLHttpRequest!="undefined"&&(a=new XMLHttpRequest,"withCredentials"in a?c=1:a=0),!a&&typeof XDomainRequest!="undefined"&&(a=new XDomainRequest,c=2),a&&s.AudienceManagement&&s.AudienceManagement.isReady()))s.Q?a.ja=!0:a=0;!a&&\ns.ab&&(b=b.substring(0,2047));if(!a&&s.d.createElement&&s.AudienceManagement&&s.AudienceManagement.isReady()&&(a=s.d.createElement("SCRIPT"))&&"async"in a)(e=(e=s.d.getElementsByTagName("HEAD"))&&e[0]?e[0]:s.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),c=3):a=0;if(!a)a=new Image,a.alt="";a.la=function(){try{if(s.ga)clearTimeout(s.ga),s.ga=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=0}catch(b){}};a.onload=a.lb=function(){a.la();s.Ra();s.V();s.v=0;s.Y();if(a.ja){a.ja=!1;try{var b=\ns.P(a.responseText);AudienceManagement.passData(b)}catch(c){}}};a.onabort=a.onerror=a.Ta=function(){a.la();(s.trackOffline||s.ea)&&s.v&&s.e.unshift(s.Qa);s.v=0;s.aa>s.G&&s.xa(s.e);s.V();s.ha(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.lb():a.Ta())};s.wa=s.r();if(c==1||c==2){var d=b.indexOf("?");e=b.substring(0,d);d=b.substring(d+1);d=d.replace(/&callback=[a-zA-Z0-9_.\\[\\]]+/,"");c==1?(a.open("POST",e,!0),a.send(d)):c==2&&(a.open("POST",e),a.send(d))}else if(a.src=b,c==3){if(s.ua)try{e.removeChild(s.ua)}catch(f){}e.firstChild?\ne.insertBefore(a,e.firstChild):e.appendChild(a);s.ua=s.Pa}if(a.abort)s.ga=setTimeout(a.abort,5E3);s.Qa=b;s.Pa=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.A||s.p){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.W=setTimeout(s.V,s.forcedLinkTrackingTimeout)}};s.Ra=function(){if(s.fa()&&!(s.va>s.G))try{w.localStorage.removeItem(s.da()),s.va=s.r()}catch(b){}};s.xa=function(b){if(s.fa()){s.za();try{w.localStorage.setItem(s.da(),w.JSON.stringify(b)),s.G=s.r()}catch(a){}}};\ns.za=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.e.length>s.offlineLimit;)s.na()}};s.forceOffline=function(){s.ea=!0};s.forceOnline=function(){s.ea=!1};s.da=function(){return s.offlineFilename+"-"+s.visitorNamespace+s.account};s.r=function(){return(new Date).getTime()};s.ra=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,\nc,e;s.mb=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.K(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!="function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);\nc.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.z=["supplementalDataID","timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID",\n"analyticsVisitorID","audienceManagerLocationHint","authState","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName","pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.c=s.z.concat(["purchaseID",\n"variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","audienceManagerBlob","tnt"]);s.ba=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds","lightIncrementBy"];s.H=s.ba.slice(0);s.ia=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling",\n"visitorSamplingGroup","linkObject","clickObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking","forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay","expectSupplementalData","AudienceManagement"];for(i=0;i<=250;i++)i<76&&\n(s.c.push("prop"+i),s.H.push("prop"+i)),s.c.push("eVar"+i),s.H.push("eVar"+i),i<6&&s.c.push("hier"+i),i<4&&s.c.push("list"+i);i=["latitude","longitude","resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage"];s.c=s.c.concat(i);s.z=s.z.concat(i);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.wa=0;s.aa=0;\ns.G=0;s.va=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.ab=navigator.appName=="Microsoft Internet Explorer"}catch(t){}s.V=function(){if(s.W)w.clearTimeout(s.W),s.W=k;s.i&&s.A&&s.i.dispatchEvent(s.A);if(s.p)if(typeof s.p=="function")s.p();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.A=s.p=0};s.ya=function(){s.b=s.d.body;if(s.b)if(s.o=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b["s_fe_"+s._in])){if(s.ka)if(s.useForcedLinkTracking)s.b.removeEventListener("click",\ns.o,!1);else{s.b.removeEventListener("click",s.o,!0);s.ka=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.clickObject=b.srcElement?b.srcElement:b.target;try{if(s.clickObject&&(!s.F||s.F!=s.clickObject)&&(s.clickObject.tagName||s.clickObject.parentElement||s.clickObject.parentNode)){var g=s.F=s.clickObject;if(s.Z)clearTimeout(s.Z),s.Z=0;s.Z=setTimeout(function(){if(s.F==g)s.F=0},1E4);e=s.pa();s.track();if(e<s.pa()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!=\n"A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.ra(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(i){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(k){a=0}if(a)a["s_fe_"+s._in]=a.s_fe=1,b.stopPropagation(),b.kb&&b.kb(),\nb.preventDefault(),s.i=b.target,s.A=a}}}}else s.clickObject=0}catch(m){s.clickObject=0}}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.o);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.ka=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.o,!0);s.b.addEventListener("click",s.o,!1)}}else setTimeout(s.ya,30)};s.ya()}\nfunction s_gi(s){var w,k=window.s_c_il,m,i,o=s.split(","),p,n,r=0;if(k)for(m=0;!r&&m<k.length;){w=k[m];if(w._c=="s_c"&&(w.account||w.oun))if(w.account&&w.account==s)r=1;else{i=w.account?w.account:w.oun;i=w.allAccounts?w.allAccounts:i.split(",");for(p=0;p<o.length;p++)for(n=0;n<i.length;n++)o[p]==i[n]&&(r=1)}m++}r||(w=new AppMeasurement);w.setAccount?w.setAccount(s):w.sa&&w.sa(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);\nfunction s_pgicq(){var s=window,w=s.s_giq,k,m,i;if(w)for(k=0;k<w.length;k++)m=w[k],i=s_gi(m.oun),i.setAccount(m.un),i.setTagContainer(m.tagContainerName);s.s_giq=0}s_pgicq();\n';
    }
    , function(a, b, c) {
        function d(a) {
            return function() {
                if (e.s)
                    a.apply(this, arguments);
                else {
                    var b = "ab-sitecatalyst: a tracking function was called before the module was initialized";
                    f.console && f.console.log(b)
                }
            }
        }
        var e = c(1)
          , f = window;
        a.exports = d
    }
    , function(a, b) {
        a.exports = {
            FacebookComment: "event38",
            FacebookUncomment: "event39",
            FacebookShareArticleMiddle: "event36",
            FacebookShareArticleBottom: "event37",
            ExitLink: "event40",
            TwitterShare: "event56",
            LocalnewsExposure: "event60",
            LocalnewsSelection: "event61",
            UserNotificationsExposure: "event63",
            UserMenuClick: "event33",
            NotificationAction: "event32",
            NotificationSettings: "event34",
            FollowSubjectAction: "event32",
            FollowSubjectSettings: "event34",
            EventFilterOn: "event117",
            EventFilterOff: "event118"
        }
    }
    , function(a, b, c) {
        function d(a) {
            return a && a.length > 0
        }
        function e(a) {
            var b = f.s
              , c = (new Date).getFullYear()
              , e = [];
            if (b.currencyCode = "SEK",
            b.trackDownloadLinks = !0,
            b.trackExternalLinks = !0,
            b.trackInlineStats = !0,
            b.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,ics,vcs",
            b.linkInternalFilters = "javascript:,aftonbladet.se",
            b.linkLeaveQueryString = !0,
            b.charSet = "utf-8",
            b.usePlugins = !0,
            b.dstStart = g.getDaylightSavingTimeStart(c),
            b.dstEnd = g.getDaylightSavingTimeEnd(c),
            b.currentYear = c,
            a.heartbeatFix && (b.linkTrackVars = "None",
            b.linkTrackEvents = "None"),
            a.page && (b.pageName = g.stringEscape(a.page.name),
            b.prop3 = g.stringEscape(a.page.title),
            b.prop4 = a.page.id,
            b.prop5 = a.page.type,
            b.eVar26 = g.superEscape(a.page.title)),
            a.categories && (b.hier1 = a.categories.join(","),
            b.prop6 = g.getCategoryString(a.categories, 1),
            b.prop7 = g.getCategoryString(a.categories, 2),
            b.eVar27 = g.superEscape(b.prop6),
            b.eVar28 = g.superEscape(b.prop7)),
            a.dominantSection && (b.prop25 = a.dominantSection.join(":"),
            b.eVar36 = b.prop25),
            a.isLatestNews && (b.prop6 = "nyheter",
            b.prop7 = "nyheter:senastenytt"),
            a.isLocalNews && (b.prop6 = "lokala-nyheter",
            b.prop7 = "lokala-nyheter:" + a.localNewsPlace),
            a.page && a.page.type && a.page.id && a.page.title && a.categories) {
                var h;
                switch (a.page.type) {
                case "article":
                    h = a.page.type + ":",
                    b.pageName = g.getCategoryString(a.categories, 2) + ":" + a.page.type,
                    b.prop4 = h + a.page.id,
                    b.eVar26 = g.superEscape(a.page.title);
                    break;
                case "taggsida":
                case "authorpage":
                    h = g.getCategoryString(a.categories, 1) + ":",
                    b.pageName = h + a.page.type,
                    b.prop3 = b.prop4 = h + g.stringEscape(a.page.title),
                    b.eVar26 = h + g.superEscape(a.page.title);
                    break;
                case "etta":
                    h = a.categories.slice(-1)[0] + " ",
                    b.pageName = g.getCategoryString(a.categories, 2) + ":" + a.page.type,
                    b.prop3 = b.prop4 = h + a.page.type,
                    b.eVar26 = h + a.page.type
                }
            }
            if (a.optimizelyTestInfo && (b.eVar48 = a.optimizelyTestInfo.test1,
            b.eVar49 = a.optimizelyTestInfo.test2),
            b.prop18 = "free",
            b.products = "",
            b.eVar33 = "",
            a.access) {
                var i = a.access.premiumMainServiceName;
                d(i) && (b.prop18 = i,
                "premiumTeaser" === a.access.premiumType && (b.prop18 += "_saljsida",
                b.eVar33 = g.superEscape(b.prop3),
                e.push("event15")))
            }
            b.eVar20 = b.prop18,
            b.prop20 = b.prop18 + ":" + b.prop5,
            b.prop28 = b.eVar31 = a.testSegment,
            b.prop42 = b.eVar42 = a.siteBetaName,
            b.campaign = b.Util.getQueryParam("refpartner"),
            b.campaign = b.getValOnce(b.campaign, "s_campaign", 0),
            a.searchQuery && (b.prop1 = b.eVar1 = g.stringEscape(a.searchQuery.toLowerCase()),
            e.push("event1")),
            a.searchResults && (b.prop2 = a.searchResults);
            var j = "+" + f.getUtcOffset();
            b.prop11 = b.getTimeParting("h", j),
            b.prop12 = b.getTimeParting("d", j),
            b.prop13 = b.getTimeParting("w", j),
            b.eVar11 = b.getTimeParting("h", j),
            b.eVar12 = b.getTimeParting("d", j),
            b.eVar13 = b.getTimeParting("w", j),
            b.prop3 && (b.eVar3 = b.prop3),
            b.prop4 && (b.eVar4 = b.prop4),
            b.prop5 && (b.eVar5 = b.prop5),
            b.prop6 && (b.eVar6 = b.prop6),
            b.prop7 && (b.eVar7 = b.prop7),
            a.authors && (b.eVar19 = b.prop17 = a.authors.join("|") || "no author"),
            b.eVar2 = b.pageName,
            b.prop19 = b.eVar21 = a.windowLocation,
            b.prop38 = a.scrollTopInPixels + "",
            a.userWasLoggedInOnPremiumPage && e.push("event41"),
            a.lastClickedPremiumTeaser && (b.eVar41 = a.lastClickedPremiumTeaser),
            a.scrollyData && (b.prop29 = a.scrollyData[0],
            b.prop30 = a.scrollyData[1]),
            b.prop53 = "adBlocker|" + a.adBlocker,
            a.tags && (b.prop60 = a.tags.join("|") || "no tags",
            b.list1 = b.prop60);
            var k = a.clickTracker || {
                linkName: "startofvisit|startofvisit|startofvisit|startofvisit|startofvisit",
                previousSection: "startofvisit",
                previousSubSection: "startofvisit",
                previousUrl: "startofvisit",
                previousPageName: "startofvisit",
                previousPageTitle: "startofvisit",
                previousArticle: "startofvisit"
            };
            b.prop21 = b.eVar23 = k.linkName || "na|na|na|na|na",
            b.prop23 = b.eVar25 = k.previousSection || "na",
            b.prop24 = k.previousSubSection || "na",
            b.prop47 = k.previousUrl || "na",
            b.prop48 = k.previousPageName || "na",
            b.prop49 = k.previousPageTitle || "na",
            b.prop64 = k.previousArticle || "na",
            a.isPremiumTeaser && (b.products = ";plus_samtliga",
            b.prop70 = b.eVar70 = a.premiumTeaserMode),
            a.articlePublishedDate && (b.prop32 = a.articlePublishedDate),
            a.timestamp && (b.prop39 = a.timestamp,
            b.eVar39 = a.timestamp),
            b.prop37 = a.trackingStatus && a.trackingStatus === !0 ? "yes" : "no",
            b.eVar63 = b.prop37,
            b.prop10 = a.geoLocation && a.geoLocation === !0 ? "yes" : "no",
            b.eVar10 = b.prop10,
            b.prop41 = b.eVar64 = b.getLoadTime(),
            b.prop51 = b.eVar51 = a.siteVersion,
            a.fuse && (a.fuse.headline && (b.eVar26 = g.superEscape(a.fuse.headline)),
            b.eVar27 = a.fuse.section,
            b.eVar28 = a.fuse.subsection,
            b.eVar38 = a.fuse.tag,
            b.purchaseId = a.fuse.orderId,
            b.products = a.fuse.product,
            e.push(a.fuse.events)),
            b.eVar50 = g.getUserSegment(a.userSegment),
            a.eventFilter && (b.prop73 = b.eVar73 = a.eventFilter.active ? a.eventFilter.section : "no filter"),
            a.personaSegments && a.personaSegments[0] && (b.prop45 = b.eVar88 = a.personaSegments[0]),
            a.user ? (b.prop22 = b.eVar24 = a.user.isLoggedIn && a.user.hasPlus && "yes" || "no",
            b.prop34 = a.user.uniqueId,
            b.prop36 = a.user.userId,
            b.prop57 = b.eVar57 = g.getMembershipType(a.user)) : (b.prop22 = b.eVar24 = a.loggedIn,
            b.prop34 = a.fuseUniqueId,
            b.prop36 = a.fuseUserId),
            b.events = e.join(","),
            f.saveState(),
            b.t()
        }
        var f = c(1)
          , g = c(9);
        a.exports = e
    }
    , function(a, b) {
        function c(a) {
            return "string" != typeof a && "number" != typeof a ? "" : a.toString().replace(/\r/g, "").replace(/\n/g, " ").replace(/"/g, "&quot;")
        }
        function d(a) {
            return c(a).replace(m, function(a) {
                var b = "åäöÅÄÖ".indexOf(a);
                return "aaoAAO".charAt(b)
            })
        }
        function e(a) {
            return c(a).replace(n, "\\$1")
        }
        function f(a) {
            return o.exec(a || "")
        }
        function g(a, b) {
            var c = a.slice(0, b);
            return c.join(":")
        }
        function h(a) {
            return a.setDate(a.getDate() - 1),
            a.setDate(a.getDate() - a.getDay()),
            a
        }
        function i(a) {
            return h(new Date(Date.UTC(a, 3, 1, 2)))
        }
        function j(a) {
            return h(new Date(Date.UTC(a, 10, 1, 2)))
        }
        function k(a) {
            var b = parseInt(a, 10);
            return isNaN(b) || b < 1 || b > 100 ? "unknown" : b
        }
        function l(a) {
            if (a) {
                if (a.isLoggedIn && a.hasPlusPremium)
                    return "premium";
                if (a.isLoggedIn && a.hasPlus)
                    return "plus";
                if (a.isLoggedIn)
                    return "logged in"
            }
            return "none"
        }
        var m = /[åäöÅÄÖ]/g
          , n = /(\$|\\)/g
          , o = /.*\:\/\/[^\/]+\/(.*)\/article(\d+)\.ab.*/i;
        a.exports = {
            getSafeTitle: d,
            stringEscape: c,
            superEscape: e,
            getUrlParts: f,
            getCategoryString: g,
            getDaylightSavingTimeStart: i,
            getDaylightSavingTimeEnd: j,
            getUserSegment: k,
            getMembershipType: l
        }
    }
    , function(a, b, c) {
        function d() {
            var a = e.s;
            f(a)
        }
        var e = c(1)
          , f = function(a) {
            a.events = "BackNavigation",
            a.prop52 = "BackNavigation",
            a.eVar52 = "BackNavigation",
            a.t(),
            e.restoreState()
        };
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            a.prop1 = "",
            a.prop2 = "",
            a.prop21 = "",
            a.prop23 = "",
            a.prop24 = "",
            a.prop25 = "",
            a.eVar23 = "",
            a.eVar25 = ""
        }
        function e(a, b, c, d) {
            a.prop6 = i.getCategoryString(b, 1),
            a.prop7 = i.getCategoryString(b, 2),
            a.prop8 = i.getCategoryString(b, 3),
            a.prop9 = i.getCategoryString(b, 4),
            a.hier1 = b.join(","),
            a.prop3 = c.title,
            a.prop5 = c.contentType,
            a.prop18 = c.membership,
            a.prop20 = c.membership + ":" + c.contentType,
            a.pageName = b.join(":") + ":mediaBox",
            a.prop4 = "article: " + d,
            a.events = "Media box start"
        }
        function f(a, b) {
            var c, f = i.getUrlParts(b.articleUrl);
            f && 3 === f.length && (c = f[1].split("/"),
            d(a),
            e(a, c, b, f[2]),
            a.t(),
            j.restoreState())
        }
        function g(a, b) {
            var c = j.s
              , d = {
                articleUrl: a || h.location.href || "",
                title: i.getSafeTitle(b),
                membership: c.prop18 || "free",
                contentType: "mediaBox"
            };
            f(c, d)
        }
        var h = window
          , i = c(9)
          , j = c(1);
        a.exports = g
    }
    , function(a, b, c) {
        function d(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }
        function e(a) {
            var b = [];
            for (var c in a)
                a.hasOwnProperty(c) && b.push(c);
            return b
        }
        function f(a, b) {
            var c = !0
              , f = "o"
              , h = g.s
              , i = b || {};
            i = i || {},
            i.prop51 = g.s.prop51,
            i.eVar51 = g.s.eVar51,
            i.events = i.events || a,
            d(h, i),
            h.linkTrackVars = e(i),
            h.linkTrackEvents = a,
            h.tl(c, f, a),
            g.restoreState()
        }
        var g = c(1);
        a.exports = f
    }
    , function(a, b, c) {
        function d(a, b) {
            return {
                eVar5: b.prop5,
                eVar6: b.prop6,
                eVar7: b.prop7,
                eVar8: b.prop8,
                eVar40: a,
                prop51: b.prop51
            }
        }
        function e(a) {
            g(h.ExitLink, d(a, f.s))
        }
        var f = c(1)
          , g = c(12)
          , h = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop37: a.trackingStatus ? "yes" : "no",
                eVar62: a.locality || "Alla Orter"
            }
        }
        function e(a) {
            g(h.LocalnewsExposure, d(a))
        }
        function f(a) {
            g(h.LocalnewsSelection, d(a))
        }
        var g = c(12)
          , h = c(7);
        a.exports = {
            trackExposure: e,
            trackSelection: f
        }
    }
    , function(a, b, c) {
        function d(a) {
            var b = e.s;
            b.pageName = a.pageName,
            b.prop1 = "",
            b.prop2 = "",
            b.prop3 = a.statisticsTitle,
            b.prop4 = a.articleId,
            b.prop5 = "imageGallery",
            b.prop6 = a.path1,
            b.prop7 = a.path2,
            b.prop8 = a.path3,
            b.prop9 = a.path4,
            b.prop18 = "free",
            b.prop20 = "free:imageGallery",
            b.prop21 = "",
            b.prop23 = "",
            b.prop24 = "",
            b.prop25 = "",
            b.eVar23 = "",
            b.eVar25 = "",
            b.hier1 = a.path0,
            b.events = a.events,
            b.t(),
            e.restoreState()
        }
        var e = c(1);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop21: a,
                eVar23: a
            }
        }
        function e(a) {
            f(g.FollowSubjectAction, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop4: a.trackId,
                eVar4: a.trackId,
                prop3: a.trackTitle,
                eVar3: a.trackTitle,
                eVar26: a.trackTitle,
                prop21: a.trackType,
                eVar23: a.trackType,
                prop33: a.unread,
                eVar42: a.unread
            }
        }
        function e(a) {
            f(g.FollowSubjectAction, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop4: a.trackId,
                eVar4: a.trackId,
                prop3: a.trackTitle,
                eVar3: a.trackTitle,
                eVar26: a.trackTitle,
                prop21: a.trackType,
                eVar23: a.trackType
            }
        }
        function e(a) {
            f(g.FollowSubjectSettings, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop4: a.trackId,
                eVar4: a.trackId,
                prop3: a.trackTitle,
                eVar3: a.trackTitle,
                eVar26: a.trackTitle,
                prop21: a.trackType,
                eVar23: a.trackType,
                prop33: a.interactionDelay,
                eVar42: a.interactionDelay
            }
        }
        function e(a) {
            f(g.NotificationAction, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop21: a,
                eVar23: a
            }
        }
        function e(a) {
            f(g.NotificationSettings, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            var b = e.s;
            b.pageName = "Mediafile",
            b.prop3 = "Nedladdas:" + a.mediaDescription,
            b.prop4 = "MediaId:" + a.mediaId,
            b.prop5 = "Mediafile",
            b.prop6 = a.path1,
            b.prop7 = a.path2,
            b.prop8 = a.path3,
            b.prop9 = a.path4,
            b.prop18 = "plus",
            b.prop20 = "plus:Mediafile",
            b.hier1 = a.path0,
            b.t()
        }
        var e = c(1);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            var b = e.s;
            b.pageName = "Mediafile",
            b.prop3 = "Nedladdas: " + a.mediaName,
            b.prop4 = "MediaId: " + a.mediaId,
            b.prop5 = "Mediafile",
            b.prop6 = a.mediaSection,
            b.prop7 = "",
            b.prop8 = "",
            b.prop9 = "",
            b.prop18 = "free",
            b.prop20 = "plus:article",
            b.hier1 = "",
            b.t()
        }
        var e = c(1);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            return {
                eVar38: a.tag,
                eVar50: a.userSegment
            }
        }
        function e(a) {
            f(g.UserNotificationsExposure, d(a))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return a.replace(/[åäöÅÄÖ]/g, function(a) {
                var b = "åäöÅÄÖ".indexOf(a);
                return "aaoAAO".charAt(b)
            })
        }
        function e(a) {
            var b = f.s
              , c = d(a.contentTitle) + " SHOOTITLIVE";
            b.prop4 = b.eVar4 = "article: " + a.contentId,
            b.prop3 = b.eVar3 = b.eVar26 = c,
            b.prop5 = b.eVar5 = a.contentType,
            b.prop20 = b.prop18 + ":" + a.contentType,
            b.eVar2 = b.pageName,
            b.eVar6 = b.prop6,
            b.eVar7 = b.prop7,
            b.eVar8 = b.prop8,
            b.eVar9 = b.prop9,
            b.t(),
            f.restoreState()
        }
        var f = c(1);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a) {
            return {
                prop3: a.title,
                eVar3: a.title,
                eVar26: a.title,
                prop6: a.sectionname,
                eVar6: a.sectionname,
                eVar27: a.sectionname,
                eVar7: a.sitename,
                eVar28: a.sitename,
                prop18: a.hasPlus ? "plus" : "plus_säljsida"
            }
        }
        function e(a) {
            g("", d(a, f.s))
        }
        var f = c(1)
          , g = c(12);
        a.exports = e
    }
    , function(a, b, c) {
        function d() {
            var a = e.s;
            a.pageName = "error:notfoundpage",
            a.prop3 = "notfound errorpage",
            a.prop4 = "wwwc notfound errorpage",
            a.prop5 = "notfoundpage",
            a.prop6 = "error",
            a.prop7 = "error",
            a.prop8 = "error",
            a.prop9 = "error",
            a.prop18 = "free",
            a.prop20 = "free:notfoundpage",
            a.hier1 = "error",
            a.t()
        }
        var e = c(1);
        a.exports = d
    }
    , function(a, b, c) {
        function d() {
            var a = e.s;
            a.pageName = "error:notfoundpage",
            a.prop3 = "notfound errorpage",
            a.prop4 = "wwwc notfound errorpage",
            a.prop5 = "notfoundpage",
            a.prop6 = "error",
            a.prop7 = "error",
            a.prop8 = "error",
            a.prop9 = "error",
            a.prop18 = "free",
            a.prop20 = "free:notfoundpage",
            a.hier1 = "error",
            a.t()
        }
        var e = c(1);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a, b) {
            var c = {
                prop21: a,
                eVar23: a
            };
            return b && (c.eVar3 = a,
            c.prop3 = a,
            c.eVar26 = a),
            c
        }
        function e(a, b) {
            f(g.UserMenuClick, d(a, b))
        }
        var f = c(12)
          , g = c(7);
        a.exports = e
    }
    , function(a, b, c) {
        function d(a, b) {
            var c = {
                eVar73: b,
                prop73: b
            };
            a ? e(f.EventFilterOn, c) : e(f.EventFilterOff, c)
        }
        var e = c(12)
          , f = c(7);
        a.exports = d
    }
    ])
}),
define("ab-burt", [], function() {
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
        var e = c(3)
          , f = d(e);
        a.exports = f.default
    }
    , function(a, b) {
        function c(a, b) {
            var c = (new Date).getTime();
            return a + b < c
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
    , function(a, b) {
        "use strict";
        function c(a) {
            a.onload = a.onreadystatechange = a.onerror = null
        }
        function d(a) {
            return new Promise(function(b, d) {
                a.onerror = function() {
                    c(a),
                    d(new Error("Failed to load Burt tracking script!"))
                }
                ,
                a.onload = a.onreadystatechange = function() {
                    a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (c(a),
                    setTimeout(function() {
                        return b(h)
                    }, 0))
                }
            }
            )
        }
        function e(a) {
            if (!i) {
                var c = f.createElement("script");
                c.id = "burt-script",
                c.src = a;
                var e = f.head || f.querySelector("head");
                e.insertBefore(c, e.firstChild),
                i = d(c),
                b.loaded = g = !0
            }
            return i
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var f = window.document
          , g = !1
          , h = window.burtApi = window.burtApi || [];
        h.unshift(function() {
            b.burtApi = h = window.burtApi
        });
        var i = void 0;
        b.burtApi = h,
        b.loadTrackingScript = e,
        b.loaded = g
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        function e(a) {
            var b = {
                SC5509: "mix",
                SC3522: "news",
                SC0851: "sport",
                SC3831: "viral"
            };
            return b[a]
        }
        function f(a) {
            if (a) {
                if (a.isLoggedIn && a.hasPlusPremium)
                    return "premium";
                if (a.isLoggedIn && a.hasPlus)
                    return "plus";
                if (a.isLoggedIn)
                    return "logged in"
            }
            return "none"
        }
        function g() {
            return null !== window.location.search.match(/[?&]dev(?:[=&#]|$)/)
        }
        function h(a, b, c, d, e) {
            "function" == typeof e ? e(function(e) {
                return h(a, b, c, d, e)
            }) : void 0 !== e && null !== e ? a[b](c, d, e) : g() && window.console && window.console.warn && window.console.warn('Skipping "' + b + '" for "' + c + ":" + d + '" since the value is ' + String(e))
        }
        function i(a, b, c, d) {
            h(a, "annotate", b, c, d)
        }
        function j(a, b, c, d) {
            h(a, "connect", b, c, d)
        }
        function k(a, b) {
            return "function" == typeof b ? b(function(b) {
                return k(a, b)
            }) : void (b && (a.setCategory.apply(a, b.slice(0, 2)),
            a.annotate("aftonbladet.content", "categories", b.slice(0, 5))))
        }
        function l() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , b = a.apiKey
              , c = void 0 === b ? "AFTDPPML3FH1" : b
              , d = a.siteName
              , g = void 0 === d ? "aftonbladet.se" : d
              , h = a.domain
              , l = void 0 === h ? "aftonbladet.se" : h;
            (0,
            p.loadTrackingScript)("//m.burt.io/a/aftonbladet-se.js");
            var m = !1
              , n = void 0
              , r = void 0
              , s = new Promise(function(a, b) {
                n = a,
                r = b
            }
            ).then(function(a) {
                var b = a.map(e).filter(function(a) {
                    return a
                });
                return o.default.persistValue(q, b),
                b
            });
            return {
                trackEvent: function(a, b, c) {
                    p.burtApi.push(function() {
                        return p.burtApi.annotate(a, b, c)
                    })
                },
                trackPageView: function(a) {
                    return m && this.stopTracking(),
                    m = !0,
                    p.burtApi.push(function() {
                        p.burtApi.startTracking(function() {
                            var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.burtApi;
                            b.setTrackingKey(c, g),
                            b.setDomain(l),
                            b.addCloudKey("AFTEKQOAB25W"),
                            k(b, a.categories),
                            j(b, "aftonbladet.content", "article-id", a.articleId),
                            j(b, "aftonbladet.content", "section-id", a.sectionId),
                            j(b, "burt.beacon", "sitecatalyst-id", a.sitecatalystId),
                            j(b, "burt.beacon", "mixpanel-id", a.mixpanelId),
                            i(b, "burt.content", "channel", a.siteVersion),
                            i(b, "aftonbladet.content", "type", a.page.type),
                            i(b, "aftonbladet.content", "publish-date", a.articlePublishedDateTime),
                            i(b, "aftonbladet.content", "link-name", a.linkName),
                            i(b, "aftonbladet.content", "membership", a.membership),
                            i(b, "aftonbladet.content", "headline", a.page.title),
                            i(b, "aftonbladet.client", "adblock", a.adBlocker),
                            i(b, "aftonbladet.client", "page-section-load-time", a.pageSectionLoadTime),
                            i(b, "aftonbladet.client", "page-section-load-time-category", a.pageSectionLoadTimeCategory),
                            i(b, "aftonbladet.client", "ab-percentile", a.userSegment),
                            i(b, "aftonbladet.content", "channel", {
                                brand: a.brand,
                                platform: a.platform,
                                "app-name": a.appName,
                                device: a.device,
                                medium: a.medium,
                                os: a.os
                            }),
                            i(b, "aftonbladet.client", "geo-position", a.trackingStatus),
                            i(b, "aftonbladet.client", "geo-location", a.geoLocation),
                            a.user ? (j(b, "burt.beacon", "spid-id", a.user.userId),
                            i(b, "aftonbladet.user", "membership-type", f(a.user))) : j(b, "burt.beacon", "spid-id", a.fuseUserId)
                        }),
                        setTimeout(function() {
                            return p.burtApi.profiles.getSegments(n)
                        }, 0)
                    }),
                    this
                },
                stopTracking: function() {
                    m && p.burtApi.push(function() {
                        return p.burtApi.stopTracking()
                    }),
                    m = !1
                },
                getSegments: function() {
                    return setTimeout(function() {
                        return r(new Error("trackPageView must have been called before we can getSegments"))
                    }, 5e3),
                    s
                }
            }
        }
        function m() {
            return o.default.readValue(q) || []
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var n = c(1)
          , o = d(n)
          , p = c(2)
          , q = "ab-burt/segments";
        b.default = {
            createTracker: l,
            getSegmentsSync: m
        }
    }
    ])
}),
define("statistics/burt", ["win", "ab-burt", "statistics/tracking-params", "page", "ab-shared-cookie", "ab-abtest", "doc"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h() {
        var h;
        if (h = d.isLive ? b.createTracker() : b.createTracker({
            apiKey: "TESHGGNXQU1D",
            siteName: "test.aftonbladet.se"
        }),
        a.ABAppBridge && a.ABAppBridge.burtTrackPageView) {
            var i = g.cookie.match(/burtAgency=([^;]+)/);
            i && (c.burtAgencyId = JSON.parse(decodeURIComponent(i[1])).id),
            a.ABAppBridge.burtTrackPageView(a.JSON.stringify(c))
        } else
            h.trackPageView(c),
            f.isMemberOfSegment(51, 100) ? h.getSegments().then(function(a) {
                var b = "sport"
                  , c = "news";
                a.indexOf(b) > -1 ? e.setCookie("X-AB-Persona", b, 336) : a.indexOf(c) > -1 && e.setCookie("X-AB-Persona", c, 336)
            }) : e.clear("X-AB-Persona");
        return h
    }
    return {
        init: h
    }
}),
define("use-ad-loader-dac", ["ab-desktop-adloader", "adtech-dac-loader"], function(a, b) {
    "use strict";
    return a.setAdLoaderDac(b),
    {}
}),
define("ad-gateway-url-builder", [], function() {
    "use strict";
    function a(a) {
        return "http://api.adgateway.dohi.se/1/getAd?account=" + a.account + "&mobileos=" + a.mobileos + "&appname=" + a.appname + "&deviceid=" + a.deviceid + (a.network ? "&network=" + a.network : "") + (a.carrier && "" !== a.carrier ? "&carrier=" + a.carrier : "") + (a.latitude ? "&latitude=" + a.latitude : "") + (a.longitude ? "&longitude=" + a.longitude : "") + (a.longitude && a.latitude && a.accuracy ? "&accuracy=" + a.accuracy : "") + (a.manufacturer ? "&manufacturer=" + a.manufacturer : "") + (a.osversion ? "&osversion=" + a.osversion : "") + "&callback=adGatewayCallback"
    }
    return {
        create: a
    }
}),
define("ad-gateway-url-params", [], function() {
    "use strict";
    function a(a, b, c, d, e, f, g) {
        function h(a) {
            return a ? String((+a).toFixed(4)) : a
        }
        function i() {
            return g ? g : e && "wifi" === e.toLowerCase() ? "WiFi" : "MobileCarrier"
        }
        function j() {
            return encodeURIComponent(d)
        }
        function k(a) {
            if (a) {
                var b = a.toLowerCase();
                if ("iphone os" === b || "ios" === b)
                    return "iOS";
                if ("android" === b)
                    return "Android"
            }
            return l
        }
        var l = "JavaScript"
          , m = {
            account: "aftonbladet",
            appname: a,
            deviceid: b,
            mobileos: l,
            network: g
        };
        return c && c.coords && (m.accuracy = c.coords.accuracy ? parseInt(c.coords.accuracy, 10) : 300,
        m.latitude = h(c.coords.latitude),
        m.longitude = h(c.coords.longitude)),
        d && (m.carrier = j()),
        e && (m.network = i()),
        f && (m.mobileos = k(f.device_os),
        m.manufacturer = f.brand_name,
        m.osversion = f.device_os_version),
        m
    }
    function b(b) {
        return a(b.appName, b.deviceId, b.location, b.carrier, b.network, b.deviceData, b.forcedNetwork)
    }
    return {
        get: b
    }
}),
define("ad-gateway-updater", ["doc", "win", "local-storage", "ad-gateway-url-params", "ad-gateway-url-builder"], function(a, b, c, d, e) {
    "use strict";
    function f(a) {
        var b = (new Date).getTime();
        return b - 3e5 > a.time
    }
    function g() {
        var a = c.readValue(k.keywords_cookie_name);
        return a && a.keywords && !f(a)
    }
    function h() {
        var a = c.readValue(k.deviceid_cookie_name);
        return a || (a = Math.random().toString(),
        c.persistValue(k.deviceid_cookie_name, a)),
        a
    }
    function i(a) {
        a && (a.Error || "Error" === a[0] ? b.console.error("Unable to store keywords in local storage. Error: ", a) : c.persistValue(k.keywords_cookie_name, {
            keywords: a,
            time: (new Date).getTime()
        }))
    }
    function j(c) {
        c.deviceId = h();
        var f = d.get(c)
          , g = e.create(f)
          , j = a.createElement("script");
        b.adGatewayCallback = i,
        j.setAttribute("src", g)
    }
    var k = {
        keywords_cookie_name: "gatewaykeywords",
        deviceid_cookie_name: "gatewaydeviceid"
    };
    return {
        keywordsCanBeUsed: g,
        update: j
    }
}),
define("ad-gateway-desktop-updater", ["page", "ad-gateway-updater"], function(a, b) {
    "use strict";
    if (!b.keywordsCanBeUsed()) {
        var c = {
            appName: "desktop.aftonbladet.se",
            forcedNetwork: a.adGatewayNetworkParam
        };
        b.update(c)
    }
}),
function(a, b, c, d) {
    "undefined" != typeof ABse.page.articleId && (c(".twitter-share-button").size() > 0 && c.getScript("http://platform.twitter.com/widgets.js"),
    YUI().use("fb-sdk", function(e) {
        e.FBSDK.on("ready", function() {
            c(".fbRecommendContainer").each(function(a, b) {
                FB.XFBML.parse(b)
            }),
            a._gaq && FB.getLoginStatus(function(b) {
                "connected" === b.status ? a._gaq.push(["_trackEvent", "Facebook", "LoginStatus", "Logged in and connected"]) : "not_authorized" === b.status ? a._gaq.push(["_trackEvent", "Facebook", "LoginStatus", "Logged in"]) : a._gaq.push(["_trackEvent", "Facebook", "LoginStatus", "Not logged in"])
            });
            var e = b.getElementById("fbComments");
            if (e) {
                var f;
                e.setAttribute("data-href", ABse.page.articleUrl),
                f && e.setAttribute("data-href", f),
                e.setAttribute("data-num-posts", "4"),
                e.getAttribute("data-width") || e.setAttribute("data-width", "475"),
                e.setAttribute("data-mobile", !1),
                FB.XFBML.parse(e.parentNode);
                var g = function() {
                    d.trackEvent(d.Event.FacebookComment)
                }
                  , h = function() {
                    d.trackEvent(d.Event.FacebookUncomment)
                };
                FB.Event.subscribe("comment.create", g),
                FB.Event.subscribe("comment.remove", h)
            }
        })
    }))
}(window, document, jQuery, require("ab-sitecatalyst"));
var CryptoJS = CryptoJS || function(a, b) {
    var c = {}
      , d = c.lib = {}
      , e = function() {}
      , f = d.Base = {
        extend: function(a) {
            e.prototype = this;
            var b = new e;
            return a && b.mixIn(a),
            b.hasOwnProperty("init") || (b.init = function() {
                b.$super.init.apply(this, arguments)
            }
            ),
            b.init.prototype = b,
            b.$super = this,
            b
        },
        create: function() {
            var a = this.extend();
            return a.init.apply(a, arguments),
            a
        },
        init: function() {},
        mixIn: function(a) {
            for (var b in a)
                a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , g = d.WordArray = f.extend({
        init: function(a, c) {
            a = this.words = a || [],
            this.sigBytes = c != b ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || i).stringify(this)
        },
        concat: function(a) {
            var b = this.words
              , c = a.words
              , d = this.sigBytes;
            if (a = a.sigBytes,
            this.clamp(),
            d % 4)
                for (var e = 0; e < a; e++)
                    b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4);
            else if (65535 < c.length)
                for (e = 0; e < a; e += 4)
                    b[d + e >>> 2] = c[e >>> 2];
            else
                b.push.apply(b, c);
            return this.sigBytes += a,
            this
        },
        clamp: function() {
            var b = this.words
              , c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4),
            b.length = a.ceil(c / 4)
        },
        clone: function() {
            var a = f.clone.call(this);
            return a.words = this.words.slice(0),
            a
        },
        random: function(b) {
            for (var c = [], d = 0; d < b; d += 4)
                c.push(4294967296 * a.random() | 0);
            return new g.init(c,b)
        }
    })
      , h = c.enc = {}
      , i = h.Hex = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; d < a; d++) {
                var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                c.push((e >>> 4).toString(16)),
                c.push((15 & e).toString(16))
            }
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; d < b; d += 2)
                c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
            return new g.init(c,b / 2)
        }
    }
      , j = h.Latin1 = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; d < a; d++)
                c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; d < b; d++)
                c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - 8 * (d % 4);
            return new g.init(c,b)
        }
    }
      , k = h.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(j.stringify(a)))
            } catch (a) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return j.parse(unescape(encodeURIComponent(a)))
        }
    }
      , l = d.BufferedBlockAlgorithm = f.extend({
        reset: function() {
            this._data = new g.init,
            this._nDataBytes = 0
        },
        _append: function(a) {
            "string" == typeof a && (a = k.parse(a)),
            this._data.concat(a),
            this._nDataBytes += a.sigBytes
        },
        _process: function(b) {
            var c = this._data
              , d = c.words
              , e = c.sigBytes
              , f = this.blockSize
              , h = e / (4 * f)
              , h = b ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0);
            if (b = h * f,
            e = a.min(4 * b, e),
            b) {
                for (var i = 0; i < b; i += f)
                    this._doProcessBlock(d, i);
                i = d.splice(0, b),
                c.sigBytes -= e
            }
            return new g.init(i,e)
        },
        clone: function() {
            var a = f.clone.call(this);
            return a._data = this._data.clone(),
            a
        },
        _minBufferSize: 0
    });
    d.Hasher = l.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a),
            this.reset()
        },
        reset: function() {
            l.reset.call(this),
            this._doReset()
        },
        update: function(a) {
            return this._append(a),
            this._process(),
            this
        },
        finalize: function(a) {
            return a && this._append(a),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, c) {
                return new a.init(c).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, c) {
                return new m.HMAC.init(a,c).finalize(b)
            }
        }
    });
    var m = c.algo = {};
    return c
}(Math);
!function() {
    var a = CryptoJS
      , b = a.lib
      , c = b.WordArray
      , d = b.Hasher
      , e = []
      , b = a.algo.SHA1 = d.extend({
        _doReset: function() {
            this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._hash.words, d = c[0], f = c[1], g = c[2], h = c[3], i = c[4], j = 0; 80 > j; j++) {
                if (16 > j)
                    e[j] = 0 | a[b + j];
                else {
                    var k = e[j - 3] ^ e[j - 8] ^ e[j - 14] ^ e[j - 16];
                    e[j] = k << 1 | k >>> 31
                }
                k = (d << 5 | d >>> 27) + i + e[j],
                k = 20 > j ? k + ((f & g | ~f & h) + 1518500249) : 40 > j ? k + ((f ^ g ^ h) + 1859775393) : 60 > j ? k + ((f & g | f & h | g & h) - 1894007588) : k + ((f ^ g ^ h) - 899497514),
                i = h,
                h = g,
                g = f << 30 | f >>> 2,
                f = d,
                d = k
            }
            c[0] = c[0] + d | 0,
            c[1] = c[1] + f | 0,
            c[2] = c[2] + g | 0,
            c[3] = c[3] + h | 0,
            c[4] = c[4] + i | 0
        },
        _doFinalize: function() {
            var a = this._data
              , b = a.words
              , c = 8 * this._nDataBytes
              , d = 8 * a.sigBytes;
            return b[d >>> 5] |= 128 << 24 - d % 32,
            b[(d + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296),
            b[(d + 64 >>> 9 << 4) + 15] = c,
            a.sigBytes = 4 * b.length,
            this._process(),
            this._hash
        },
        clone: function() {
            var a = d.clone.call(this);
            return a._hash = this._hash.clone(),
            a
        }
    });
    a.SHA1 = d._createHelper(b),
    a.HmacSHA1 = d._createHmacHelper(b)
}(),
ABY.use("event-base", function(a) {
    "use strict";
    "undefined" != typeof ABse.page.linkPulse && "undefined" != typeof ABse.page.linkPulse.lp4Url && YUI().use(function(a) {
        a.Get.js(ABse.page.linkPulse.lp4Url)
    }),
    a.on("load", function() {
        "undefined" != typeof ABse.page.xiti && (window.location.hash.match(/^#xtor=AD-500/) || window.location.search.match(/xtor=AD-500/)) && (window.xtnv = document,
        window.xtsd = "http://logc253",
        window.xtsite = ABse.page.xiti.siteId,
        window.xtn2 = ABse.page.xiti.level2Id,
        window.xtpage = "",
        window.xtdi = "",
        window.xt_multc = "",
        window.xt_an = "",
        window.xt_ac = "",
        null !== window.xtparam ? window.xtparam += "&ac=" + xt_ac + "&an=" + xt_an + xt_multc : window.xtparam = "&ac=" + xt_ac + "&an=" + xt_an + xt_multc,
        a.Get.js((ABse.assetBaseUrl || "") + "/assets/js/lib/xtcore.js?" + ABse.resVer)),
        "undefined" != typeof ABse.page.nPario && YUI().use("get", function(a) {
            var b = function(a) {
                var b = new RegExp("[\\?&]" + a + "=");
                return null !== b.exec(window.location.search)
            }
              , c = function(a) {
                var b = function(a) {
                    a = a.replace(/[\[]/, "\\[").replace(/[]]/, "\\]");
                    var b = "[\\?&]" + a + "=([^&#]*)";
                    return new RegExp(b)
                }
                  , c = b(a)
                  , d = c.exec(window.location.search);
                return null === d ? "" : d[1].replace(/\+/g, " ")
            }
              , d = function() {
                return "sok" === ABse.page.sectionUniqueName && b("q") ? "&Search=" + c("q") : ""
            }
              , e = require("fuse")
              , f = "";
            e && e.isLoggedIn && e.isLoggedIn() && e.getUserId && e.getUserId() && (f = "&suid=" + CryptoJS.SHA1(String(e.getUserId())).toString().toUpperCase());
            var g = ABse.page.nPario.baseUrl + "&Category=" + ABse.page.nPario.category + f + d();
            if (ABse.page.articleTagNames)
                for (var h = 0; h < ABse.page.articleTagNames.length; h++)
                    g += "&category=ab:tag:" + ABse.page.articleTagNames[h];
            a.Get.js(g)
        })
    }, window)
}),
YUI().use("ab-menu-overlay", "transition", function(a) {
    "use strict";
    function b() {
        d.isActive() && d.get("overlay").align()
    }
    var c = a.Ab.Menu.OverlayMenu
      , d = new c({
        item: "#abNavSearch",
        container: "#searchBox",
        menuClass: "",
        menuPosition: c.POS_BOTTOM_RIGHT,
        shaded: !0
    });
    if (a.one("#searchBox")) {
        var e = a.one("#searchBox").one("input");
        a.Global.on("absticky:*", b),
        a.one(".abSiteNav").on("transitionend", b),
        d.after("show", function() {
            e.focus()
        })
    }
}),
YUI().use("autocomplete", "autocomplete-filters", "highlight", function(a) {
    "use strict";
    var b = 25
      , c = ["#abSiteIndexBox a"]
      , d = window.ABse && window.ABse.quickSearchLinks ? window.ABse.quickSearchLinks : []
      , e = function(a, b) {
        function c(a) {
            var b, c;
            for (b = a.charCodeAt(0),
            c = b.toString(16); b < 4096; b <<= 4)
                c = "0" + c;
            return "\\u" + c
        }
        function d(a) {
            return a.replace(/[\[\]\{\}\(\)\.\*\+\?\\]/g, c)
        }
        function e(a) {
            var b = d(a);
            return b ? new RegExp("\\b" + b,"i") : null
        }
        var f = e(b);
        return !!f && f.test(a)
    }
      , f = function(a) {
        function b(a, b) {
            var c = function(a, b) {
                return a > b ? 1 : a < b ? -1 : 0
            };
            return c(a.text.toLowerCase(), b.text.toLowerCase())
        }
        return function(c, d) {
            var f = e(c.text, a)
              , g = e(d.text, a);
            return f || g ? f && !g ? -1 : !f && g ? 1 : b(c, d) : b(c, d)
        }
    }
      , g = function() {
        function g(b, d) {
            function e(a) {
                var c, e;
                "a" === a.get("tagName").toLowerCase() && (c = a.get("text"),
                e = a.get("href"),
                d[c] || d[e] || e.indexOf("#") !== -1 || (b.push({
                    text: c,
                    href: e,
                    tags: ""
                }),
                d[c] = d[e] = !0))
            }
            var f, g;
            if (c && c.length > 0)
                for (g = 0; g < c.length; g++)
                    f = a.all(c[g]),
                    f && f.each(e)
        }
        function h(a, b) {
            var c;
            if (d && d.length > 0)
                for (c = 0; c < d.length; c++)
                    a.push({
                        text: d[c].text,
                        href: d[c].href,
                        tags: d[c].tags ? d[c].tags : ""
                    }),
                    b[d[c].text] = b[d[c].href] = !0
        }
        function i(a) {
            return a.push({
                text: "",
                href: "",
                tags: "",
                specialItem: "searchLink"
            }),
            a
        }
        var j = []
          , k = {};
        return h(j, k),
        g(j, k),
        function(a) {
            var c, d, g = [];
            for (c = 0; c < j.length; c++)
                d = j[c],
                "searchLink" === d.specialItem && (d.text = a),
                (d.specialItem || e(d.text, a) || e(d.href.replace(/(https?:)?\/\/[^\/]+/i, "").replace(/\?.*/, ""), a) || e(d.tags, a)) && g.push(d);
            return g.sort(f(a)),
            i(g.slice(0, b))
        }
    }()
      , h = function(b, c) {
        return a.Array.map(c, function(a) {
            var b = a.raw
              , c = a.display;
            return b.specialItem && "searchLink" === b.specialItem ? '<div class="abAcListItem abAcSearch"><span aria-hidden="true" class="abPfxPrimary abIconSearch"></span> ' + c + "</div>" : '<div class="abAcListItem"><span aria-hidden="true" class="abPfxPrimary abIconDocument"></span> ' + c + "</div>"
        })
    }
      , i = a.all(".abSearchInput:not(#abTravelGuideSearchInput)");
    i.size() && i.each(function(b) {
        var c = b.ancestor("FORM");
        b.plug(a.Plugin.AutoComplete, {
            source: g,
            minQueryLength: 2,
            resultTextLocator: "text",
            resultFormatter: h,
            resultHighlighter: function(b, c) {
                return a.Array.map(c, function(c) {
                    return c.raw.specialItem ? "searchLink" === c.raw.specialItem ? '<span class="">Sök på </span>' + a.Highlight.all(b, b) : c.text : a.Highlight.all(c.text, b)
                })
            },
            on: {
                select: function(a) {
                    if (a.result && a.result.raw) {
                        var b = a.result.raw;
                        b.specialItem && "searchLink" === b.specialItem ? c.submit() : "" !== b.href ? window.location = b.href : a.preventDefault()
                    }
                }
            }
        })
    })
}),
function(a) {
    a.ABY.use("node-base", function(a) {
        var b, c = a.all(".abPollSponsored");
        c.size() && c.each(function() {
            b = this.getAttribute("data-src"),
            b && a.Get.script(b, {
                async: !0
            })
        })
    })
}(window),
function(a, b) {
    ABY.use("node-base", "event-base", function(a) {
        function b() {
            var a = this;
            c(a)
        }
        function c(a) {
            var b = a.one(".abMd6.abLefty")
              , c = a.one(".abMd4.abRighty iframe");
            if (b && c && "" === c.getAttribute("src")) {
                var d = parseInt(b.getComputedStyle("height"), 10) - 20;
                c.setAttribute("height", d);
                var e = c.getData("src")
                  , f = e.replace(/height=[0-9]+.00/, "height=" + d + ".00");
                c.setAttribute("src", f)
            }
        }
        a.on("contentready", b, "#abBoxTvLiveCollapsable")
    })
}(window, document),
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
define("personal-plus-manager", ["local-storage", "fuse", "page"], function(a, b, c) {
    "use strict";
    var d, e = 600, f = "abPlusData", g = null, h = {
        page: null,
        _listeners: [],
        _fallbackMode: !1,
        emitData: function() {
            h._listeners.forEach(function(a) {
                a("new data available")
            })
        },
        onData: function(a) {
            h._listeners.push(a)
        },
        XHR: function(a, b, c) {
            var e = navigator.userAgent.match(/MSIE.[89]/);
            return d.debug("XHR", a, b, c, e),
            new Promise(function(f, g) {
                var h = window.XDomainRequest ? new window.XDomainRequest : new XMLHttpRequest;
                h.open(a, b, !0),
                e ? h.onload = function() {
                    d.debug("IE XHR RESOLVE", this.responseText),
                    f(this.responseText)
                }
                : h.onreadystatechange = function() {
                    if (4 === this.readyState)
                        if (200 === this.status) {
                            var a = this.responseText;
                            d.debug("XHR RESOLVE", a),
                            f(a)
                        } else
                            g("non 200 response from userdata-api" + this.status)
                }
                ,
                c && h.setRequestHeader("Content-Type", "application/json;charset=utf-8"),
                h.send(c ? JSON.stringify(c) : null)
            }
            )
        },
        userDataUrl: null,
        plusData: [],
        isIE: function() {
            return /MSIE.8/.test(window.navigator.userAgent)
        },
        isHybrid: function() {
            return window.location.href.indexOf("androidhybrid") >= 0 || window.location.href.indexOf("ioshybrid") >= 0
        },
        _mangleDataToSave: function(a, b) {
            function c(c) {
                "registerIntroTimestamp" === c ? b.firstViewTimestamp || (b.firstViewTimestamp = (new Date).valueOf(),
                d = !0) : (b[c] = a[c],
                d = !0)
            }
            var d = !1;
            b.choices || (b.choices = [],
            d = !0);
            for (var e in a)
                a.hasOwnProperty(e) && c(e);
            return d
        },
        seed: Math.floor((new Date).valueOf() / (1e3 * e)),
        getSubjects: function() {
            return [{
                title: "Nyhetsfördjupning",
                image: "nyheter.jpg",
                sectionId: "nyheter"
            }, {
                title: "Sport",
                image: "sport.jpg",
                sectionId: "sport"
            }, {
                title: "Nöje",
                image: "noje.jpg",
                sectionId: "noje"
            }, {
                title: "Tester",
                image: "konsument.jpg",
                sectionId: "tester"
            }, {
                title: "Ekonomi",
                image: "ekonomi.jpg",
                sectionId: "ekonomi"
            }, {
                title: "Hälsa & träning",
                image: "halsa.jpg",
                sectionId: "halsa"
            }, {
                title: "Bil",
                image: "bil.jpg",
                sectionId: "bil"
            }, {
                title: "Sex & relationer",
                image: "sex.jpg",
                sectionId: "sex"
            }, {
                title: "Resa",
                image: "resa.jpg",
                sectionId: "resa"
            }, {
                title: "Trav & spel",
                image: "trav.jpg",
                sectionId: "pryl"
            }]
        },
        getPlusSubjectsOrdered: function() {
            return ["Nyhetsfördjupning", "Sport", "Nöje", "Tester", "Ekonomi", "Hälsa & träning", "Bil", "Sex & relationer", "Resa", "Trav & spel"]
        },
        getPlusSubjects: function() {
            return [{
                title: "Nyhetsfördjupning",
                id: "nyheter"
            }, {
                title: "Sport",
                id: "sport"
            }, {
                title: "Nöje",
                id: "noje"
            }, {
                title: "Sex & relationer",
                id: "wendela"
            }, {
                title: "Hälsa & Träning",
                id: "halsa"
            }, {
                title: "Krim & Mysterier",
                id: "bil"
            }, {
                title: "Konsumenttester",
                id: "pryl"
            }]
        },
        _decorateData: function(a) {
            var b, c = 3, d = c / a.length, e = 0;
            for (b = 0; b < a.length; b++)
                a[b].int = [e, e + c],
                e += c,
                c = Math.max(1, Math.floor(c - d));
            return e
        },
        getShuffledTeasers: function(a) {
            var b = this.filterChosenTopics(this.getTeasersWithImages());
            this._decorateData(b),
            d.debug("Decorated data in shuffle:", b),
            a > b.length && d.debug("WARNING: Not enough data in getShuffledTeasers"),
            a = Math.min(a, b.length);
            var c, e = [];
            for (c = 0; c < a; c++) {
                var f, g, i = b[b.length - 1].int[1] - 1, j = h.seededRandom(0, i);
                for (f = 0; f < b.length; f++) {
                    g = b[f];
                    var k = g.int[0]
                      , l = g.int[1];
                    if (j < k || j >= k && j < l) {
                        e.push(g),
                        b.splice(f, 1);
                        break
                    }
                }
            }
            return e.sort(function(a, b) {
                return a.relativeAgePercent - b.relativeAgePercent
            }),
            e
        },
        getTeasersWithImages: function() {
            return this.plusData.filter(function(a) {
                var b = function() {
                    var b = 0;
                    for (var c in a.image)
                        a.image.hasOwnProperty(c) && b++;
                    return b
                }();
                return a.image && b && a.image.imageColumnDouble && !/widescreen|fourByThree/.test(a.image.imageColumnDouble)
            })
        },
        filterChosenTopics: function(b) {
            var c = a.readValue(f);
            if (h.shouldShowDefaultSelection(c))
                return b;
            var d = c.choices || [];
            return b.filter(function(a) {
                return d.indexOf(a.topic) !== -1
            })
        },
        getTeaserText: function(a) {
            return a.shortTeaser.length < 5 ? a.teaser : a.shortTeaser
        },
        sectionsWithItems: function() {
            var a = {};
            return this.plusData.forEach(function(b) {
                a.hasOwnProperty(b.topic) ? a[b.topic].push(b) : a[b.topic] = [b]
            }),
            a
        },
        getUserDataUrl: function() {
            return this.userDataUrl + "/user/" + b.getUserId() + "/settings/" + f + "?userInfo=" + b.getUserInfoToken() + (/MSIE/.test(window.navigator.userAgent) ? "&cacheBuster=" + Date.now() : "")
        },
        __deleteData: function() {
            return localStorage.removeItem("abPlusData"),
            h.XHR("DELETE", h.getUserDataUrl())
        },
        setData: function(b) {
            var c = this;
            return b && (b.choices || b.registerIntroTimestamp) ? new Promise(function(e) {
                c.getData(!0).then(function(g) {
                    var i = g.value ? JSON.parse(g.value) : {}
                      , j = c._mangleDataToSave(b, i);
                    j ? (a.persistValue(f, i),
                    g.value = JSON.stringify(i),
                    d.debug("POSTing data:", g),
                    h.XHR("POST", h.getUserDataUrl(), g).then(function(a) {
                        d.debug("postResponse ->", a),
                        c.emitData(),
                        e(a)
                    })) : d.debug("setData: updateOrder", b, " did not yield an update")
                })
            }
            ) : (d.debug("FATAL! tried to persist invalid object!!"),
            new Promise(function(a) {
                a(null)
            }
            ))
        },
        getData: function(b) {
            return new Promise(function(c, e) {
                h.XHR("GET", h.getUserDataUrl()).then(function(d) {
                    var e = "string" == typeof d ? JSON.parse(d) : d;
                    if (b !== !0) {
                        var g = e && e.value ? JSON.parse(e.value) : {};
                        g.lastReadUserData = Date.now(),
                        a.persistValue(f, g)
                    }
                    c(e)
                }, function(a) {
                    d.debug("error in getdata", a),
                    e(a)
                })
            }
            )
        },
        getNaturalTimeSpan: function(a) {
            for (var b = Date.now(), c = b - a, d = 1e3, e = 60 * d, f = 60 * e, g = 24 * f, h = 30 * g, i = 365 * g, j = {
                years: Math.floor(c / i % 365),
                months: Math.floor(c / h % 12),
                days: Math.floor(c / g % 30),
                hours: Math.floor(c / f % 24),
                minutes: Math.floor(c / e % 60),
                seconds: Math.floor(c / d % 60)
            }, k = ["år", "månader", "dagar", "timmmar", "minuter", "sekunder"], l = [j.years, j.months, j.days, j.hours, j.minutes, j.seconds], m = !1, n = 0; n < l.length; n++)
                if (l[n]) {
                    m = n;
                    break
                }
            return l[m] + " " + k[m] + (null !== k[++m] && 0 !== l[m] ? " och " + l[m] + " " + k[m] : "") + " sedan"
        },
        getChoices: function() {
            return new Promise(function(b) {
                b(a.readValue(f).choices)
            }
            )
        },
        registerIntroRender: function() {
            h.setData({
                registerIntroTimestamp: !0
            })
        },
        setChoices: function(a) {
            return h.setData({
                choices: a
            })
        },
        hasChoice: function(b) {
            var c = a.readValue(f);
            return !(!c || !c.choices) && c.choices.indexOf(b) !== -1
        },
        selectAllChoices: function() {
            return h.setData({
                choices: h.getPlusSubjectsOrdered()
            })
        },
        decideFirstView: function() {
            d.debug("decide firstView");
            var b = function() {
                var b = a.readValue(f)
                  , c = h.shouldShowDefaultSelection(b);
                return b.choices && b.choices.length || c ? (d.debug("resolve view 2 - show", b, ", default selection = ", c),
                2) : (d.debug("resolve view 0 - intro", b),
                0)
            };
            return Promise.resolve(b())
        },
        seededRandom: function(a, b) {
            b = b || 1,
            a = a || 0,
            this.seed = (9301 * this.seed + 49297) % 233280;
            var c = this.seed / 233280;
            return a + c * (b - a)
        },
        shouldShowDefaultSelection: function(b) {
            if (this._fallbackMode)
                return d.debug("shouldShowDefaultSelection has _fallbackMode set, returning true"),
                !0;
            if (b || (b = a.readValue(f)),
            b.choices && b.choices.length > 0)
                return !1;
            var c = b.firstViewTimestamp > 0 && (new Date).valueOf() - b.firstViewTimestamp >= g;
            return d.debug("shouldShowDefaultSelection has data.firstViewTimestamp ", b.firstViewTimestamp, "returning", c),
            c
        },
        setFallbackMode: function() {
            this._fallbackMode = !0
        },
        getPlusData: function(a) {
            var b = this;
            return new Promise(function(e) {
                !a && b.plusData.length && (d.debug("plusdata has length", b.plusData.length),
                e(b.plusData));
                var f = new XMLHttpRequest
                  , g = c && c.plusBoxItemsUrl || "/resource/plusbox/items";
                f.open("GET", g, !0),
                f.onreadystatechange = function() {
                    4 === this.readyState && 200 === this.status && (b.plusData = JSON.parse(this.responseText),
                    b.plusData = b.getTeasersWithImages(),
                    b.isLoaded = !0,
                    e(b.plusData))
                }
                ,
                f.send()
            }
            )
        },
        init: function(a, b, c) {
            return d = b,
            h.page = c,
            g = c.plusBoxMaxDisplayTimeMillis ? c.plusBoxMaxDisplayTimeMillis : 864e5,
            new Promise(function(d, e) {
                return c.plusBoxEnabled ? void (h.isInitialized ? (b.debug("plus manager was already initialized"),
                d()) : (b.debug("initializing plus manager"),
                h.isInitialized = !0,
                h.userDataUrl = a,
                Promise.all([h.getData(), h.getPlusData()]).then(function(a) {
                    d({
                        getData: a[0],
                        plusData: a[1]
                    })
                }, function(a) {
                    b.debug("error in init", a)
                }))) : (b.debug("not enabled in manager, abort"),
                void e("plusbox not enabled"))
            }
            )
        }
    };
    return h
}),
define("plus-box-customizer", ["personal-plus-manager", "mini-template"], function(a, b) {
    "use strict";
    function c(a) {
        a instanceof jQuery && (a = a[0]);
        var b = a.getBoundingClientRect();
        return b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight || $(window).height()) && b.right <= (window.innerWidth || $(window).width())
    }
    function d(a, b) {
        h.debug("changing view"),
        a ? a.destroy() : j && j.destroy && j.destroy(),
        j = b,
        b.render(i)
    }
    function e() {
        a.decideFirstView().then(function(b) {
            switch (b) {
            case 0:
                d(null, q),
                a.getPlusData();
                break;
            case 1:
                d(null, s),
                a.getPlusData();
                break;
            case 2:
                h.debug("case showView, load plusData"),
                d(null, m ? v : r);
                break;
            default:
                h.debug("DEFAULTING, should not happen"),
                d(null, q),
                a.getPlusData()
            }
        })
    }
    function f() {
        var a = Array.prototype.slice.call(arguments);
        mixpanel.track ? mixpanel.track.apply(a) : mixpanel.push ? mixpanel.push(a) : h.debug("no tracking available")
    }
    function g(b) {
        return b && ABse.page.plusBoxEnabled && (i = b,
        b.parent().on("click", ".changePlusBox", function() {
            f("AB - Subject selection entry click", {
                source: "change"
            }),
            d(null, s)
        }),
        a.getData().then(function() {
            e()
        })),
        k
    }
    var h = window.ABse && ABse.logCenter && "function" == typeof ABse.logCenter.getLogger ? ABse.logCenter.getLogger("plusBoxCustomizer") : {
        debug: function() {},
        error: function() {}
    };
    a.onData(function(a) {
        h.debug("plusbox recieved data", a)
    });
    var i, j, k = this, l = a.getSubjects(), m = $(".plusPersonalEntryPoint").size() > 0, n = !1, o = !1, p = $('<div class="abStreamerMyPremium"><span class="abPfxPremiumService"><a href="/plus"><span class="yellow">MITT</span> PLUS</a></span><span class="changePlusBox">Ändra</span></div>'), q = {
        render: function(b) {
            this.container = b,
            b.append(p),
            p.find(".changePlusBox").hide(),
            b.append('<div class="myPlusIntro"><h2 class="innerIntro">Skapa ditt eget <img src="/assets/gfx/plus/plus.png"></h2></div>'),
            b.append("<p><strong>Vad vill du veta mer om?</strong> Nu kan du enkelt välja vad du vill se mer av i Plus. Prova med en gång.</p>"),
            b.append('<div class="blockBtnHolder"><div class="plusBtn"><span>Välj dina Plus-ämnen</span></div></div>'),
            b.on("click", ".plusBtn", function() {
                f("AB - Subject selection entry click", {
                    source: "new entry"
                }),
                d(q, s)
            }),
            n = !0,
            o || (a.isHybrid() || c(b) ? (o = !0,
            h.debug("introView already in viewport, or this is a hybrid"),
            a.registerIntroRender()) : $(window).bind("scroll.plusbox", function() {
                !o && c(b) && (o = !0,
                h.debug("introView was scrolled into viewport"),
                $(window).unbind("scroll.plusbox"),
                a.registerIntroRender())
            }))
        },
        destroy: function() {
            this.container.off(),
            this.container.empty(),
            $(window).unbind("scroll.plusbox")
        }
    }, r = {
        render: function(c) {
            h.debug("showView called"),
            this.container = c;
            var d = a.getShuffledTeasers(3)
              , e = function(c, d) {
                return h.debug("teaser ->", c, "is full ->", d),
                b('<a class="abBlock {{boxClass}}" href="{{url}}"><span class="abImageBlock"><img src="{{image}}"/></span><h2>{{title}}</h2><p><span class="abPfxOuter"><span class="abPfxPremiumService" title="PLUS">PLUS</span></span><span class="upperRed">{{topic}}</span>{{text}}</p></a>')({
                    image: "fullTeaser" === d ? c.image.imageColumnDouble : c.image.widescreen,
                    title: c.header,
                    text: a.getTeaserText(c),
                    topic: c.topic,
                    url: c.url,
                    boxClass: "Sport" === c.topic ? "abBoxSportbladet abBox" : ""
                })
            };
            if (c.append(p),
            p.find(".changePlusBox").show(),
            3 === d.length) {
                var f = e(d[0], "fullTeaser")
                  , g = $('<div class="abEqualMd50 abLefty"><div class="abEqualGutter"></div></div>').find(".abEqualGutter").append(e(d[1], "halfTeaser")).parent()
                  , i = $('<div class="abEqualMd50 abRighty"><div class="abEqualGutter"></div></div>').find(".abEqualGutter").append(e(d[2], "halfTeaser")).parent()
                  , j = $('<aside class="abTeaserRelated"><div class="abEqualRow"></div></aside>');
                j.find(".abEqualRow").append(g).append('<div class="abEqualDiv abEqualDiv50-1"></div>').append(i),
                c.append(f).append(j)
            } else
                h.error("No articles to show in plus box");
            this.fixSportbladetHeight(["Sport" === d[1].topic, "Sport" === d[2].topic])
        },
        fixSportbladetHeight: function(a) {
            var b = function(a) {
                return new Promise(function(b) {
                    $(a).one("load", b)
                }
                )
            };
            if (a.indexOf(!0) !== -1) {
                var c = this.container.find(".abEqualMd50")
                  , d = c.eq(0).height() < c.eq(1).height() ? 0 : 1
                  , e = d ? 0 : 1;
                if (a[d]) {
                    var f = c.find("ifmg").map(function() {
                        return b(this)
                    }).toArray();
                    Promise.all(f).then(function() {
                        c.eq(d).find(".abBlodfggggggck").height(c.eq(e).height())
                    })
                }
            }
        },
        destroy: function() {
            this.container.off(),
            this.container.empty()
        }
    }, s = {
        container: null,
        getSubjectBox: function(c) {
            var d = b('<div class="subjectBox"><img src="{{image}}"/><span class="plus-overlay"></span><span class="select-overlay"></span><span class="text">{{text}}</span></div>')({
                image: "/assets/gfx/plusbox/desktop/" + c.image,
                text: c.title
            }).attr("data-sectionId", c.title).addClass(a.hasChoice(c.title) ? "selected" : "");
            if (a.isIE()) {
                var e = d.find(".select-overlay");
                e.css("background-color", a.hasChoice(c.title) ? "#fdda63" : "transparent")
            }
            return d
        },
        render: function(b) {
            f("AB - Subject selection page view"),
            this.container = b;
            var c = this
              , e = $('<div class="leadBox"><p>Vilka Plus-ämnen gillar du extra mycket?<br/>Välj minst ett ämne för att skapa ditt Plus.</p><div class="plusBtn"><span>' + (m ? "Klar" : "Nästa") + "</span></div></div>");
            b.append(p),
            p.find(".changePlusBox").hide(),
            b.append(e);
            var g = $('<div class="subjectHolder"></div>');
            $(l).each(function(a, b) {
                g.append(c.getSubjectBox(b))
            }),
            b.append(g),
            b.append('<div class="selectAllHolder"><input type="checkbox" id="selectAll"/><label for="selectAll">Välj alla</label></div>'),
            b.find("#selectAll").on("change", function() {
                var a = $(".subjectBox");
                h.debug("on change, this.checked", this.checked),
                this.checked ? a.addClass("selected") : a.removeClass("selected")
            }),
            b.on("click", ".subjectBox", function() {
                if ($(this).toggleClass("selected"),
                a.isIE()) {
                    var b = $(this).find(".select-overlay");
                    $(this).hasClass("selected") ? b.css("background-color", "#fdda63") : b.css("background-color", "transparent")
                }
            }),
            b.on("click", ".plusBtn", function() {
                var b = $(".subjectBox.selected").map(function() {
                    return $(this).attr("data-sectionId")
                }).toArray();
                0 !== b.length && (h.debug("set choices ->", b),
                f("AB - Subject selection done click", {
                    choices: b
                }),
                a.setChoices(b).then(function() {
                    h.debug("set choices responded with", arguments),
                    n ? (n = !1,
                    d(s, t)) : d(s, m ? v : r)
                }))
            })
        },
        destroy: function() {
            this.container.off(),
            this.container.find("#selectAll").off(),
            this.container.empty()
        }
    }, t = {
        render: function(a) {
            this.container = a;
            var b = this;
            a.append(p),
            p.find(".changePlusBox").show(),
            a.append('<div class="leadBox"><p><strong>Bra val!</strong> Dina ämnen visas nu i Mitt Plus på Aftonbladets startsida.</p><div class="plusBtn"><span>Nästa</span></div></div><div class="centerPic"><img src="/assets/gfx/plusbox/desktop/goodchoice.png"/></div>'),
            a.on("click", ".plusBtn", function() {
                d(b, u)
            })
        },
        destroy: function() {
            this.container.off(),
            this.container.empty()
        }
    }, u = {
        render: function(a) {
            this.container = a;
            var b = this;
            a.append(p),
            a.append('<div class="leadBox"><p><strong>Inte nöjd?</strong> Välj Ändra uppe till höger, där kan du välja nya ämnen när du vill.</p><div class="plusBtn"><span>Klar!</span></div></div><div class="centerPic"><img src="/assets/gfx/plusbox/desktop/change.png"/></div>'),
            a.on("click", ".plusBtn", function() {
                d(b, m ? v : r)
            })
        },
        destroy: function() {
            this.container.off(),
            this.container.empty()
        }
    }, v = {
        render: function(a) {
            h.debug("no show view"),
            this.container = a,
            a.append(p),
            p.find(".changePlusBox").show()
        },
        destroy: function() {
            this.container.off(),
            this.container.empty()
        }
    };
    return g
}),
define("plus-section-page-customizer", ["personal-plus-manager", "mini-template"], function(a, b) {
    "use strict";
    function c() {
        Promise.all([a.getPlusData(), a.getChoices()]).then(function(b) {
            var c = {
                plusData: b[0],
                choices: b[1]
            };
            g.debug("res:", c),
            k = c.choices;
            var d = a.shouldShowDefaultSelection();
            (k.length || d) && (j.empty(),
            o(10)),
            d || a.onData(function(a) {
                j.empty(),
                g.debug("plusetta recieved data", a),
                o(10)
            })
        }, function(a) {
            g.debug("error in start", a)
        })
    }
    function d(a) {
        return a && ABse.page.plusBoxEnabled && (e = a,
        e.append(j),
        c()),
        f
    }
    var e, f = this, g = window.ABse && ABse.logCenter && "function" == typeof ABse.logCenter.getLogger ? ABse.logCenter.getLogger("sectionPageCustomizer") : {
        debug: function() {},
        error: function() {}
    }, h = [0, 1, 1, 2, 2], i = !1, j = $('<div class="articleHolder"></div>'), k = null, l = [{
        name: "imageColumnDouble",
        width: 655,
        cl: "boxFull"
    }, {
        name: "widescreen",
        width: 315,
        cl: ""
    }, {
        name: "fourByThree",
        width: 90,
        cl: "boxSmall"
    }], m = function(c, d, e, f) {
        var g = b('<a class="abBlock" href="{{url}}"></a>')({
            url: d.url
        })
          , h = $('<div class="box"></div>').attr("data-sectionId", f)
          , i = d && d.image && d.image[l[c].name]
          , j = a.getTeaserText(d);
        return i && h.append(b('<span class="{{blockClass}}"><igmg src="{{image}}"/></span>')({
            image: i,
            blockClass: 2 === c ? "abLeftImageBlock" : "abImageBlock"
        })),
        h.append($("<h2></h2>").text($("<span>" + d.header + "</span>").text())).append(b('<p><span class="abPfxOuter"><span class="abPfxPremiumService" title="PLUS">PLUS</span></span><span class="upperRed">{{title}}</span>{{text}}</p><div class="clearfix"></div><span class="smallDate">{{ts}}</span>')({
            title: d.topic,
            text: j,
            ts: a.getNaturalTimeSpan(d.publishedTime)
        })).addClass(l[c].cl),
        "Sport" === d.topic && g.addClass("abBox abBoxSportbladet"),
        g.append(h)
    }, n = function(a, b) {
        var c = function(a) {
            return g.debug("loading promise for", a),
            new Promise(function(b) {
                $(a).one("load", b)
            }
            )
        };
        if (g.debug("fixSBheight"),
        a.indexOf(!0) !== -1) {
            var d = b.find(".abEqualMd50")
              , e = d.find("ikmg").map(function() {
                return c(this)
            }).toArray();
            Promise.all(e).then(function() {
                var b = d.eq(0).height() < d.eq(1).height() ? 0 : 1
                  , c = b ? 0 : 1;
                a[b] && d.eq(b).find(".abhjBlock").height(d.eq(c).height() - 10)
            })
        }
    }, o = function(b) {
        g.debug("randomizing articles"),
        i || (i = !0);
        for (var c = a.getShuffledTeasers(b), d = Math.min(c.length - 1, b), e = 0; e < d; e++) {
            var f = $('<article class="abItemHLine"></article>')
              , k = h[e % h.length];
            if (1 === k && 1 !== d) {
                var l = $('<div class="abEqualRow"></div>');
                l.append($('<div class="abEqualMd50 abLefty"><div class="abEqualGutter"></div></div>').find(".abEqualGutter").wrapInner(m(k, c[e])).parent()),
                l.append('<div class="abEqualDiv abEqualDiv50-1"></div>'),
                l.append($('<div class="abEqualMd50 abRighty"><div class="abEqualGutter"></div></div>').find(".abEqualGutter").wrapInner(m(k, c[++e])).parent()),
                f.append(l),
                n(["Sport" === c[e - 1].topic, "Sport" === c[e].topic], l)
            } else
                f.append(m(k, c[e]));
            j.append(f)
        }
        0 === d && g.error("No articles to show in plus box")
    };
    return d
}),
define("plus-init", ["doc", "fuse", "personal-plus-manager", "user-params", "plus-box-customizer", "plus-section-page-customizer"], function(a, b, c, d, e, f) {
    "use strict";
    var g = window.ABse && ABse.logCenter && "function" == typeof ABse.logCenter.getLogger ? ABse.logCenter.getLogger("personalPlusManager") : {
        debug: function() {},
        error: function() {}
    };
    b.hasAccess("plus") ? $(a).ready(function() {
        c.init(d.userdataUrl, g, ABse.page).then(function() {
            var a = $(".abPersonalPlusBox")
              , b = $(".plusPersonalEntryPoint");
            a.size() && (g.debug("initializing personal plus box"),
            e(a)),
            b.size() && (g.debug("initializing personal plus section"),
            f(b))
        })
    }) : $(a).ready(function() {
        $(".abPersonalPlusBox, .plusPersonalEntryPoint").remove()
    })
}),
define("plus-ad-tracking", ["doc", "win", "fuse", "ab-shared-cookie"], function(a, b, c, d) {
    "use strict";
    function e(c, d) {
        var e = new Date(d);
        try {
            b.localStorage.setItem(c, d)
        } catch (b) {
            a.cookie = c + "=" + d + "; expires=" + new Date(e + 864e5).toUTCString() + "; path=/; domain=.aftonbladet.se"
        }
    }
    function f(b) {
        var c = "https:" === a.location.protocol ? "https://" : "http://";
        b = c + b + (new Date).getTime();
        var d = a.createElement("script");
        d.type = "text/javascript",
        d.async = !0,
        d.src = b;
        var e = a.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(d, e)
    }
    function g() {
        f("tags.webtraffic.se/1/5660/54860.js?cb=")
    }
    function h() {
        b.wt_1_5660_54828_order_id = "order_id",
        b.wt_1_5660_54828_order_amount = "order_amount",
        f("tags.webtraffic.se/1/5660/54828.js?cb=")
    }
    return {
        init: function() {
            if (c.getRecentOrderId() && h(),
            c.isLoggedIn() && c.hasAccess("plus")) {
                var a = c.getUserId()
                  , i = (new Date).toISOString().substr(0, 10);
                f && f === i || (g()
            }
        }
    }
}),
$(function() {
    var a = 3
      , b = $(".abArticleListButton");
    b.on("click", function(c) {
        var d = $(this).siblings(".abArticleListTeaser.abHidden");
        d.slice(0, a).removeClass("abHidden"),
        d.length <= a && b.hide(),
        c.preventDefault()
    })
}),

define("ab-desktop-parallax", ["win", "doc", "jquery"], function(a, b, c) {
    "use strict";
    var d = ".abJsParallaxContainer"
      , e = c(a)
      , f = function(a, b, c) {
        if ("function" == typeof a.getBoundingClientRect) {
            var d = a.getBoundingClientRect();
            if (d.top > c || d.top < d.height)
                return "fixed" === b.css("position") && b.css({
                    position: "relative",
                    left: 0,
                    height: "100%"
                }),
                !0
        }
        return !1
    }
      , g = function() {
        var a, b, g, h, i, j, k, l = c(d), m = e.scrollTop(), n = m + e.height();
        l.each(function() {
            a = c(this),
            b = a.find(":first"),
            f(this, b, n) || (k = b.find(":first"),
            a.height(k.height()),
            g = a.offset().top,
            h = g + k.height(),
            h > m && (i = n - g),
            j = a.offset().left - e.scrollLeft(),
            i < a.height() ? b.css({
                height: i,
                left: j,
                position: "fixed"
            }) : i && b.css({
                position: "relative",
                left: 0,
                height: "100%"
            }))
        })
    }
      , h = function() {
        e.scroll(g),
        g()
    };
    return {
        init: h
    }
}),
define("ab-desktop-amd-loader-bottom", ["win", "doc", "page", "amdtech-dac-loader", "amd-loader-bottom", "ab-desktop-ad-events", "amd-lazyloading", "ab-desktop-adloader", "amdbmlock-usage", "amd-url-params", "amd-url-builder", "safefrmame-amdloader", "ab-ast-test", "ab-burt-unit-utils"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    function o(a) {
        var d, e = b.getElementById(a), f = {
            alias: a,
            node: e
        }, g = function(a) {
            return e.getAttribute("data-config-" + a)
        }, h = g("lazyload"), i = g("waitForEvent");
        return h && (f.kvParams = {
            tags: c.articleTagNames && c.articleTagNames.length > 0 ? c.articleTagNames.join(":") : "",
            glimr: j.getLocationTags(),
            ibeacon: j.getLocationTags(),
            pagegen: "abse",
            kvdevicetype: "string" == typeof c.siteName ? c.siteName.toLowerCase() : "mobile"
        },
        d = "true" === h || Number(h),
        "boolean" != typeof d && isNaN(d) !== !1 || (f.lazyloadEnabled = !0,
        isNaN(d) ? f.lazyloadOffset = 200 : f.lazyloadOffset = d)),
        i && (f.waitForEvent = i),
        f
    }
    function p(a) {
        var b = o(a);
        if (f.waitForEvent(b))
            r.debug(" - Waiting for event", b);
        else if (g.lazyLoad(b))
            r.debug(" - Lazyloading this", b);
        else if (c.SafeFrameEnabled && l.positionIsSafeFrameEnabled(b.alias)) {
            var e = k.create(b.alias, h.getAdUrlParams());
            l.loadAd(b, e)
        } else
            m.isAppNexusTest() || d.load({
                alias: a,
                kvParams: {
                    tags: c.articleTagNames && c.articleTagNames.length > 0 ? c.articleTagNames.join(":") : "",
                    glimr: j.getLocationTags(),
                    ibeacon: j.getLocationTags(),
                    pagegen: "abse",
                    kvdevicetype: "string" == typeof c.siteName ? c.siteName.toLowerCase() : "mobile"
                },
                onAdLoadedCallback: h.onAdLoadedCallback,
                adtechDefaultPlacementID: c.adtechDefaultPlacementID
            });
        return !0
    }
    var q = a.ABse && a.ABse.logCenter && "function" == typeof a.ABse.logCenter.getLogger
      , r = q ? a.ABse.logCenter.getLogger("desktop-amd") : {
        debug: function() {},
        error: function() {}
    };
    return e.addLoadHandler(p),
    e
}),
define("article-socialbox-desktop", ["win", "doc", "page", "jquery", "ab-sitecatalyst"], function(a, b, c, d, e) {
    "use strict";
    var f = a.console
      , g = a.location.protocol + "//" + a.location.host + a.location.pathname
      , h = {
        populate: function(a, c) {
            var d;
            if (a && 0 !== c.length) {
                var e = b.querySelectorAll("." + a);
                if (e)
                    for (d = 0; d < e.length; d++)
                        e[d].innerHTML = c
            }
        },
        loadScript: function(a) {
            var c = b.createElement("script");
            c.type = "text/javascript",
            c.async = !0,
            c.src = a;
            var d = b.body;
            d.appendChild(c)
        },
        fb: {
            loaded: !1,
            load: function(a) {
                if (c.displayComments) {
                    var b = encodeURIComponent(a)
                      , d = 'https://api.facebook.com/method/fql.query?format=json&query=SELECT total_count, commentsbox_count FROM link_stat WHERE url = "' + b + '"&callback=fbLikesCallback';
                    h.loadScript(d)
                }
            },
            result: null,
            _dataCallback: function(a, b) {
                a && (this.loaded = !0,
                this.result = a,
                b.populate("abSocialFbLikesCount", a[0].total_count),
                b.populate("abSocialFbCommentsCount", a[0].commentsbox_count)),
                b._notifySocialDataLoaded()
            }
        },
        _notifySocialDataLoaded: function() {},
        initClickHandlers: function() {
            var f = function(a, c) {
                d(b.body).on("click", a, function(a) {
                    this.href && this.href.indexOf("#") === -1 && a.preventDefault(),
                    c.call(this, a)
                })
            }
              , h = function(c, d, e, f) {
                var g = void 0 !== a.screenLeft ? a.screenLeft : screen.left
                  , h = void 0 !== a.screenTop ? a.screenTop : screen.top
                  , i = a.innerWidth ? a.innerWidth : b.documentElement.clientWidth ? b.documentElement.clientWidth : screen.width
                  , j = a.innerHeight ? a.innerHeight : b.documentElement.clientHeight ? b.documentElement.clientHeight : screen.height
                  , k = i / 2 - e / 2 + g
                  , l = j / 2 - f / 2 + h;
                window.open(c, d, "menubar=no, location=no, resizable=yes, scrollbars=no, status=no, width=" + e + ", height=" + f + ", top=" + l + ", left=" + k)
            };
            f(".abBtnComment", function() {
                e.trackEvent(e.Events.FacebookComment)
            }),
            f(".abShareFb", function() {
                a.FB && (a.FB.ui({
                    method: "share",
                    href: g
                }),
                d(this).parents(".abShareMenuMiddle").length ? e.trackEvent(e.Events.FacebookShareArticleMiddle) : e.trackEvent(e.Events.FacebookShareArticleBottom))
            }),
            f(".abShareTwitter", function() {
                var a = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(g) + "&text=" + encodeURIComponent(c.articleHeadline + " #aftonbladet");
                h(a, "twitterShareWin", 620, 460),
                e.trackEvent(e.Events.TwitterShare)
            })
        },
        loadSocial: function(a) {
            h.fb.load(a),
            h.initClickHandlers()
        },
        initialize: function() {
            a.fbLikesCallback = function(a) {
                h.fb._dataCallback.call(h.fb, a, h)
            }
            ,
            a.fbAsyncInit = function() {
                a.FB && (a.FB.init({
                    xfbml: !0
                }),
                f.log("FB init"))
            }
            ;
            var b = c.articleUrl;
            return b && (a.addEventListener ? a.addEventListener("load", function() {
                h.loadSocial(b)
            }, !1) : a.attachEvent && a.attachEvent("onload", function() {
                h.loadSocial(b)
            })),
            {}
        }
    };
    return h
}),
!function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define("Engage", [], b) : "object" == typeof exports ? exports.Engage = b() : a.Engage = b()
}(this, function() {
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
        b.p = "",
        b(0)
    }([function(a, b, c) {
        "use strict";
        function d(a) {
            if (a = a || {},
            k.requireOpts(a, ["site", "device"]),
            f(["desktop", "mobile", "tablet"], a.device) === -1)
                throw new Error("Invalid device: " + a.device);
            e(this, {
                site: a.site,
                device: a.device,
                endpoint: a.endpoint || "https://collector.schibsted.io/api/v1/track",
                userId: a.userId || null,
                url: this.getUrl()
            }),
            a.enableOverlay && "mobile" !== a.device ? this.enableOverlay = !0 : this.enableOverlay = !1,
            h.enabled || console.log('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.'),
            this.setMetadata(a)
        }
        var e = c(1)
          , f = c(26)
          , g = c(31)
          , h = c(36)
          , i = c(37)
          , j = c(44).getUuidV4
          , k = c(53)
          , l = c(54)
          , m = "6.19.1"
          , n = "//engage-cdn.schibsted.media/js/overlay/latest/overlay.min.js";
        d.Pulse = i,
        d.prototype.evaluateReferringArticle = function() {
            if (!h.enabled)
                return !1;
            var a = this.getReferrer()
              , b = null;
            if (a && a.length > 0 && this.getUrl() && this.getUrl().length > 0 && k.getDomainFromUrl(a) === k.getDomainFromUrl(this.getUrl())) {
                var c = h.get("previousArticle");
                c && c.url && c.url === a && (b = c)
            }
            return h.set("previousArticle", {
                articleId: this.articleId,
                url: this.getUrl(),
                referrer: this.getReferrer()
            }),
            b
        }
        ,
        d.prototype.setMetadata = function(a) {
            if (a = a || {},
            k.requireOpts(a, ["permalink", "published"]),
            !a.articleId) {
                if (!a.previewUrl || !a.previewUrl.http)
                    throw new Error("previewUrl.http is required when articleId is missing");
                if (!a.previewUrl || !a.previewUrl.https)
                    throw new Error("previewUrl.https is required when articleId is missing")
            }
            e(this, {
                permalink: a.permalink,
                articleId: a.articleId || k.normalizeUrl(a.permalink),
                category: a.category || null,
                group: a.group || null,
                authors: a.authors || [],
                wordCount: a.wordCount || null,
                imageUrl: a.imageUrl || null,
                customReferrer: a.referrer || null,
                scrollContainer: a.scrollContainer || null,
                articleContainer: a.articleContainer || null,
                tags: a.tags || null
            });
            var b = this.evaluateReferringArticle();
            if (this.isReferrerArticle = !!b,
            this.referrerId = b ? b.articleId : this.getReferrer(),
            this.previousReferrer = b ? b.referrer : null,
            "object" != typeof a.previewUrl && (a.previewUrl = {}),
            this.previewUrl = {
                http: a.previewUrl.http || null,
                https: a.previewUrl.https || null
            },
            a.published instanceof Date ? this.published = a.published : this.published = k.isoToDate(a.published),
            !a.updated || a.updated instanceof Date ? this.updated = a.updated || null : this.updated = k.isoToDate(a.updated),
            a.title ? this.title = a.title : this.title = window.document.title,
            a.shareUrl = a.shareUrl || {},
            g("object" == typeof a.shareUrl, "ShareUrl must be an object"),
            this.shareUrl = {
                facebook: a.shareUrl.facebook || a.permalink,
                twitter: a.shareUrl.twitter || a.permalink
            },
            a.experiments && a.experiments.length && (this.experiments = a.experiments),
            this.group && this.group.length > 256)
                throw new Error("Group can not be longer then 256 characters");
            if (this.articleContainer && !this.articleContainer.nodeName)
                throw new Error("articleContainer must be a DOM node")
        }
        ,
        d.prototype.initialize = function() {
            this.imageUrl || (this.imageUrl = this.getImageUrl());
            var a = null;
            this.category && !k.isNumeric(this.category) && (a = this.category),
            this.pulse = new i({
                pageId: this.articleId,
                clientId: this.site,
                pageType: "Article",
                url: this.endpoint,
                userId: this.userId,
                category: a,
                provider: {
                    "spt:engage": this.site
                },
                tags: this.tags
            }),
            this.articleView(),
            h.enabled && (this.engagementTime = new l(this.pulse,{
                articleId: this.articleId,
                contentType: this.pulse.contentType,
                pageViewId: this.pulse.getPageViewId(),
                device: this.device,
                group: this.group,
                referrerInfo: this.getReferrerInfo(),
                wordCount: this.wordCount,
                scrollContainer: this.scrollContainer,
                articleContainer: this.articleContainer,
                url: this.getUrl()
            },this.experiments),
            this.engagementTime.initialize()),
            this.enableOverlay && this.loadOverlayTool()
        }
        ,
        d.prototype.destroy = function() {
            this.engagementTime && this.engagementTime.destroy()
        }
        ,
        d.prototype.updateMetadata = function(a, b) {
            "undefined" == typeof b && (b = !0),
            k.requireOpts(a, ["url"]),
            this.previousUrl = this.url,
            this.url = a.url,
            this.setMetadata(a),
            this.pulse && (this.pulse.contentId = this.articleId,
            this.pulse.category = this.category,
            this.pulse.pageViewId = j(),
            this.pulse.opts.tags = this.tags),
            this.articleView(),
            this.engagementTime && (this.engagementTime.setGroup(this.group),
            this.engagementTime.setWordCount(this.wordCount),
            this.engagementTime.setReferrerInfo(this.getReferrerInfo()),
            this.engagementTime.setScrollContainer(this.scrollContainer),
            this.engagementTime.setExperiments(this.experiments),
            this.engagementTime.setUrl(this.getUrl()),
            b && this.engagementTime.reset())
        }
        ,
        d.prototype.getImageUrl = function() {
            for (var a, b = document.getElementsByTagName("meta"), c = null, d = 0; d < b.length; d++)
                if (a = b[d].getAttribute("property"),
                "og:image" === a) {
                    c = b[d].content;
                    break
                }
            return c
        }
        ,
        d.prototype.getUrl = function() {
            return this.url || window.location.href
        }
        ,
        d.prototype.getReferrer = function() {
            return this.customReferrer || this.previousUrl || document.referrer
        }
        ,
        d.prototype.getReferrerInfo = function() {
            return {
                referrer: this.getReferrer(),
                isReferrerArticle: this.isReferrerArticle,
                referrerId: this.referrerId,
                previousReferrer: this.previousReferrer
            }
        }
        ,
        d.prototype.loadOverlayTool = function() {
            var a = this.articleId;
            window.loadOverlayToolCallback = function(b) {
                if (b.jwt) {
                    var c = document.createElement("script");
                    c.src = n,
                    c.type = "text/javascript",
                    c.onload = function() {
                        new window.EngageOverlay({
                            site: b.newsroom,
                            jwt: b.jwt,
                            userId: b.userId,
                            articleId: a
                        })
                    }
                    ,
                    document.body.appendChild(c)
                }
            }
            ;
            var b = document.createElement("script");
            b.src = "https://engage-auth.schibsted.media/jwt/" + encodeURIComponent(this.site) + "?callback=loadOverlayToolCallback",
            b.type = "text/javascript",
            document.body.appendChild(b)
        }
        ,
        d.prototype.articleView = function() {
            var a;
            a = this.updated ? k.dateToISO(this.updated) : null;
            var b = this.getReferrerInfo()
              , c = {
                "spt:site": this.site,
                "spt:url": this.getUrl(),
                "spt:isArticle": !0,
                "spt:articleId": this.articleId,
                "spt:group": this.group,
                "spt:device": this.device,
                "spt:permalink": this.permalink,
                "spt:shareUrl": this.shareUrl,
                "spt:previewUrl": this.previewUrl,
                "spt:published": k.dateToISO(this.published),
                "spt:updated": a,
                "spt:authors": this.authors,
                "spt:wordCount": this.wordCount,
                "spt:imageUrl": this.imageUrl,
                "spt:referrer": b.referrer,
                "spt:isReferrerArticle": b.isReferrerArticle,
                "spt:referrerId": b.referrerId,
                "spt:previousReferrer": b.previousReferrer,
                "spt:engageSdkVersion": m
            }
              , d = this.pulse.events.trackContentView(this.title);
            this.experiments && (d.data.experiments = this.experiments),
            d.addCustomData("primary", c).send()
        }
        ,
        a.exports = d
    }
    , function(a, b, c) {
        var d = c(2)
          , e = c(22)
          , f = e(d);
        a.exports = f
    }
    , function(a, b, c) {
        function d(a, b, c) {
            var d = f(b);
            if (!c)
                return e(b, a, d);
            for (var g = -1, h = d.length; ++g < h; ) {
                var i = d[g]
                  , j = a[i]
                  , k = c(j, b[i], i, a, b);
                (k === k ? k === j : j !== j) && ("undefined" != typeof j || i in a) || (a[i] = k)
            }
            return a
        }
        var e = c(3)
          , f = c(4);
        a.exports = d
    }
    , function(a, b) {
        function c(a, b, c) {
            c || (c = b,
            b = {});
            for (var d = -1, e = c.length; ++d < e; ) {
                var f = c[d];
                b[f] = a[f]
            }
            return b
        }
        a.exports = c
    }
    , function(a, b, c) {
        var d = c(5)
          , e = c(6)
          , f = c(11)
          , g = c(12)
          , h = c(14)
          , i = e(i = Object.keys) && i
          , j = i ? function(a) {
            if (a)
                var b = a.constructor
                  , c = a.length;
            return "function" == typeof b && b.prototype === a || ("function" == typeof a ? h.enumPrototypes : c && d(c)) ? g(a) : f(a) ? i(a) : []
        }
        : g;
        a.exports = j
    }
    , function(a, b) {
        function c(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && a <= d
        }
        var d = Math.pow(2, 53) - 1;
        a.exports = c
    }
    , function(a, b, c) {
        function d(a) {
            return null != a && (l.call(a) == h ? m.test(k.call(a)) : g(a) && (f(a) ? m : i).test(a) || !1)
        }
        var e = c(7)
          , f = c(9)
          , g = c(10)
          , h = "[object Function]"
          , i = /^\[object .+?Constructor\]$/
          , j = Object.prototype
          , k = Function.prototype.toString
          , l = j.toString
          , m = RegExp("^" + e(l).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            return a = e(a),
            a && g.test(a) ? a.replace(f, "\\$&") : a
        }
        var e = c(8)
          , f = /[.*+?^${}()|[\]\/\\]/g
          , g = RegExp(f.source);
        a.exports = d
    }
    , function(a, b) {
        function c(a) {
            return "string" == typeof a ? a : null == a ? "" : a + ""
        }
        a.exports = c
    }
    , function(a, b) {
        var c = function() {
            try {
                Object({
                    toString: 0
                } + "")
            } catch (a) {
                return function() {
                    return !1
                }
            }
            return function(a) {
                return "function" != typeof a.toString && "string" == typeof (a + "")
            }
        }();
        a.exports = c
    }
    , function(a, b) {
        function c(a) {
            return a && "object" == typeof a || !1
        }
        a.exports = c
    }
    , function(a, b) {
        function c(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1
        }
        a.exports = c
    }
    , function(a, b, c) {
        function d(a) {
            for (var b = j(a), c = b.length, d = c && a.length, l = d && h(d) && (f(a) || k.nonEnumStrings && i(a) || k.nonEnumArgs && e(a)), n = -1, o = []; ++n < c; ) {
                var p = b[n];
                (l && g(p, d) || m.call(a, p)) && o.push(p)
            }
            return o
        }
        var e = c(13)
          , f = c(15)
          , g = c(16)
          , h = c(5)
          , i = c(17)
          , j = c(18)
          , k = c(14)
          , l = Object.prototype
          , m = l.hasOwnProperty;
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            var b = f(a) ? a.length : void 0;
            return e(b) && k.call(a) == h || !1
        }
        var e = c(5)
          , f = c(10)
          , g = c(14)
          , h = "[object Arguments]"
          , i = Object.prototype
          , j = i.hasOwnProperty
          , k = i.toString
          , l = i.propertyIsEnumerable;
        g.argsTag || (d = function(a) {
            var b = f(a) ? a.length : void 0;
            return e(b) && j.call(a, "callee") && !l.call(a, "callee") || !1
        }
        ),
        a.exports = d
    }
    , function(a, b, c) {
        (function(b) {
            var d = c(6)
              , e = "[object Arguments]"
              , f = "[object Object]"
              , g = /\bthis\b/
              , h = Array.prototype
              , i = Error.prototype
              , j = Object.prototype
              , k = (k = b.window) && k.document
              , l = j.toString
              , m = j.propertyIsEnumerable
              , n = h.splice
              , o = {};
            !function(a) {
                var c = function() {
                    this.x = 1
                }
                  , h = {
                    0: 1,
                    length: 1
                }
                  , j = [];
                c.prototype = {
                    valueOf: 1,
                    y: 1
                };
                for (var p in new c)
                    j.push(p);
                o.argsTag = l.call(arguments) == e,
                o.enumErrorProps = m.call(i, "message") || m.call(i, "name"),
                o.enumPrototypes = m.call(c, "prototype"),
                o.funcDecomp = !d(b.WinRTError) && g.test(function() {
                    return this
                }),
                o.funcNames = "string" == typeof Function.name,
                o.nodeTag = l.call(k) != f,
                o.nonEnumStrings = !m.call("x", 0),
                o.nonEnumShadows = !/valueOf/.test(j),
                o.ownLast = "x" != j[0],
                o.spliceObjects = (n.call(h, 0, 1),
                !h[0]),
                o.unindexedChars = "x"[0] + Object("x")[0] != "xx";
                try {
                    o.dom = 11 === k.createDocumentFragment().nodeType
                } catch (a) {
                    o.dom = !1
                }
                try {
                    o.nonEnumArgs = !m.call(arguments, 1)
                } catch (a) {
                    o.nonEnumArgs = !0
                }
            }(0, 0),
            a.exports = o
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b, c) {
        var d = c(5)
          , e = c(6)
          , f = c(10)
          , g = "[object Array]"
          , h = Object.prototype
          , i = h.toString
          , j = e(j = Array.isArray) && j
          , k = j || function(a) {
            return f(a) && d(a.length) && i.call(a) == g || !1
        }
        ;
        a.exports = k
    }
    , function(a, b) {
        function c(a, b) {
            return a = +a,
            b = null == b ? d : b,
            a > -1 && a % 1 == 0 && a < b
        }
        var d = Math.pow(2, 53) - 1;
        a.exports = c
    }
    , function(a, b, c) {
        function d(a) {
            return "string" == typeof a || e(a) && h.call(a) == f || !1
        }
        var e = c(10)
          , f = "[object String]"
          , g = Object.prototype
          , h = g.toString;
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            if (null == a)
                return [];
            k(a) || (a = Object(a));
            var b = a.length;
            b = b && j(b) && (g(a) || m.nonEnumStrings && l(a) || m.nonEnumArgs && f(a)) && b || 0;
            for (var c = a.constructor, d = -1, e = h(c) && c.prototype || y, n = e === a, o = Array(b), p = b > 0, r = m.enumErrorProps && (a === x || a instanceof Error), s = m.enumPrototypes && h(a); ++d < b; )
                o[d] = d + "";
            for (var u in a)
                s && "prototype" == u || r && ("message" == u || "name" == u) || p && i(u, b) || "constructor" == u && (n || !A.call(a, u)) || o.push(u);
            if (m.nonEnumShadows && a !== y) {
                var D = a === z ? v : a === x ? q : B.call(a)
                  , E = C[D] || C[t];
                for (D == t && (e = y),
                b = w.length; b--; ) {
                    u = w[b];
                    var F = E[u];
                    n && F || (F ? !A.call(a, u) : a[u] === e[u]) || o.push(u)
                }
            }
            return o
        }
        var e = c(19)
          , f = c(13)
          , g = c(15)
          , h = c(20)
          , i = c(16)
          , j = c(5)
          , k = c(11)
          , l = c(17)
          , m = c(14)
          , n = "[object Array]"
          , o = "[object Boolean]"
          , p = "[object Date]"
          , q = "[object Error]"
          , r = "[object Function]"
          , s = "[object Number]"
          , t = "[object Object]"
          , u = "[object RegExp]"
          , v = "[object String]"
          , w = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
          , x = Error.prototype
          , y = Object.prototype
          , z = String.prototype
          , A = y.hasOwnProperty
          , B = y.toString
          , C = {};
        C[n] = C[p] = C[s] = {
            constructor: !0,
            toLocaleString: !0,
            toString: !0,
            valueOf: !0
        },
        C[o] = C[v] = {
            constructor: !0,
            toString: !0,
            valueOf: !0
        },
        C[q] = C[r] = C[u] = {
            constructor: !0,
            toString: !0
        },
        C[t] = {
            constructor: !0
        },
        e(w, function(a) {
            for (var b in C)
                if (A.call(C, b)) {
                    var c = C[b];
                    c[a] = A.call(c, a)
                }
        }),
        a.exports = d
    }
    , function(a, b) {
        function c(a, b) {
            for (var c = -1, d = a.length; ++c < d && b(a[c], c, a) !== !1; )
                ;
            return a
        }
        a.exports = c
    }
    , function(a, b, c) {
        (function(b) {
            var d = c(21)
              , e = c(6)
              , f = "[object Function]"
              , g = Object.prototype
              , h = g.toString
              , i = e(i = b.Uint8Array) && i
              , j = d(/x/) || i && !d(i) ? function(a) {
                return h.call(a) == f
            }
            : d;
            a.exports = j
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b) {
        function c(a) {
            return "function" == typeof a || !1
        }
        a.exports = c
    }
    , function(a, b, c) {
        function d(a) {
            return function() {
                var b = arguments.length
                  , c = arguments[0];
                if (b < 2 || null == c)
                    return c;
                if (b > 3 && f(arguments[1], arguments[2], arguments[3]) && (b = 2),
                b > 3 && "function" == typeof arguments[b - 2])
                    var d = e(arguments[--b - 1], arguments[b--], 5);
                else
                    b > 2 && "function" == typeof arguments[b - 1] && (d = arguments[--b]);
                for (var g = 0; ++g < b; ) {
                    var h = arguments[g];
                    h && a(c, h, d)
                }
                return c
            }
        }
        var e = c(23)
          , f = c(25);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a, b, c) {
            if ("function" != typeof a)
                return e;
            if ("undefined" == typeof b)
                return a;
            switch (c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                }
                ;
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                }
                ;
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
                ;
            case 5:
                return function(c, d, e, f, g) {
                    return a.call(b, c, d, e, f, g)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
        var e = c(24);
        a.exports = d
    }
    , function(a, b) {
        function c(a) {
            return a
        }
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b, c) {
            if (!g(c))
                return !1;
            var d = typeof b;
            if ("number" == d)
                var h = c.length
                  , i = f(h) && e(b, h);
            else
                i = "string" == d && b in c;
            if (i) {
                var j = c[b];
                return a === a ? a === j : j !== j
            }
            return !1
        }
        var e = c(16)
          , f = c(5)
          , g = c(11);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a, b, c) {
            var d = a ? a.length : 0;
            if (!d)
                return -1;
            if ("number" == typeof c)
                c = c < 0 ? g(d + c, 0) : c || 0;
            else if (c) {
                var h = f(a, b)
                  , i = a[h];
                return (b === b ? b === i : i !== i) ? h : -1
            }
            return e(a, b, c)
        }
        var e = c(27)
          , f = c(29)
          , g = Math.max;
        a.exports = d
    }
    , function(a, b, c) {
        function d(a, b, c) {
            if (b !== b)
                return e(a, c);
            for (var d = (c || 0) - 1, f = a.length; ++d < f; )
                if (a[d] === b)
                    return d;
            return -1
        }
        var e = c(28);
        a.exports = d
    }
    , function(a, b) {
        function c(a, b, c) {
            for (var d = a.length, e = c ? b || d : (b || 0) - 1; c ? e-- : ++e < d; ) {
                var f = a[e];
                if (f !== f)
                    return e
            }
            return -1
        }
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b, c) {
            var d = 0
              , g = a ? a.length : d;
            if ("number" == typeof b && b === b && g <= h) {
                for (; d < g; ) {
                    var i = d + g >>> 1
                      , j = a[i];
                    (c ? j <= b : j < b) ? d = i + 1 : g = i
                }
                return g
            }
            return e(a, b, f, c)
        }
        var e = c(30)
          , f = c(24)
          , g = Math.pow(2, 32) - 1
          , h = g >>> 1;
        a.exports = d
    }
    , function(a, b) {
        function c(a, b, c, f) {
            b = c(b);
            for (var h = 0, i = a ? a.length : 0, j = b !== b, k = "undefined" == typeof b; h < i; ) {
                var l = d((h + i) / 2)
                  , m = c(a[l])
                  , n = m === m;
                if (j)
                    var o = n || f;
                else
                    o = k ? n && (f || "undefined" != typeof m) : f ? m <= b : m < b;
                o ? h = l + 1 : i = l
            }
            return e(i, g)
        }
        var d = Math.floor
          , e = Math.min
          , f = Math.pow(2, 32) - 1
          , g = f - 1;
        a.exports = c
    }
    , function(a, b, c) {
        (function(b) {
            "use strict";
            function d(a, b) {
                if (a === b)
                    return 0;
                for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)
                    if (a[e] !== b[e]) {
                        c = a[e],
                        d = b[e];
                        break
                    }
                return c < d ? -1 : d < c ? 1 : 0
            }
            function e(a) {
                return b.Buffer && "function" == typeof b.Buffer.isBuffer ? b.Buffer.isBuffer(a) : !(null == a || !a._isBuffer)
            }
            function f(a) {
                return Object.prototype.toString.call(a)
            }
            function g(a) {
                return !e(a) && "function" == typeof b.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : !!a && (a instanceof DataView || !!(a.buffer && a.buffer instanceof ArrayBuffer)))
            }
            function h(a) {
                if (u.isFunction(a)) {
                    if (x)
                        return a.name;
                    var b = a.toString()
                      , c = b.match(z);
                    return c && c[1]
                }
            }
            function i(a, b) {
                return "string" == typeof a ? a.length < b ? a : a.slice(0, b) : a
            }
            function j(a) {
                if (x || !u.isFunction(a))
                    return u.inspect(a);
                var b = h(a)
                  , c = b ? ": " + b : "";
                return "[Function" + c + "]"
            }
            function k(a) {
                return i(j(a.actual), 128) + " " + a.operator + " " + i(j(a.expected), 128)
            }
            function l(a, b, c, d, e) {
                throw new y.AssertionError({
                    message: c,
                    actual: a,
                    expected: b,
                    operator: d,
                    stackStartFunction: e
                })
            }
            function m(a, b) {
                a || l(a, !0, b, "==", y.ok)
            }
            function n(a, b, c, h) {
                if (a === b)
                    return !0;
                if (e(a) && e(b))
                    return 0 === d(a, b);
                if (u.isDate(a) && u.isDate(b))
                    return a.getTime() === b.getTime();
                if (u.isRegExp(a) && u.isRegExp(b))
                    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
                if (null !== a && "object" == typeof a || null !== b && "object" == typeof b) {
                    if (g(a) && g(b) && f(a) === f(b) && !(a instanceof Float32Array || a instanceof Float64Array))
                        return 0 === d(new Uint8Array(a.buffer), new Uint8Array(b.buffer));
                    if (e(a) !== e(b))
                        return !1;
                    h = h || {
                        actual: [],
                        expected: []
                    };
                    var i = h.actual.indexOf(a);
                    return i !== -1 && i === h.expected.indexOf(b) || (h.actual.push(a),
                    h.expected.push(b),
                    p(a, b, c, h))
                }
                return c ? a === b : a == b
            }
            function o(a) {
                return "[object Arguments]" == Object.prototype.toString.call(a)
            }
            function p(a, b, c, d) {
                if (null === a || void 0 === a || null === b || void 0 === b)
                    return !1;
                if (u.isPrimitive(a) || u.isPrimitive(b))
                    return a === b;
                if (c && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
                    return !1;
                var e = o(a)
                  , f = o(b);
                if (e && !f || !e && f)
                    return !1;
                if (e)
                    return a = w.call(a),
                    b = w.call(b),
                    n(a, b, c);
                var g, h, i = A(a), j = A(b);
                if (i.length !== j.length)
                    return !1;
                for (i.sort(),
                j.sort(),
                h = i.length - 1; h >= 0; h--)
                    if (i[h] !== j[h])
                        return !1;
                for (h = i.length - 1; h >= 0; h--)
                    if (g = i[h],
                    !n(a[g], b[g], c, d))
                        return !1;
                return !0
            }
            function q(a, b, c) {
                n(a, b, !0) && l(a, b, c, "notDeepStrictEqual", q)
            }
            function r(a, b) {
                if (!a || !b)
                    return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(b))
                    return b.test(a);
                try {
                    if (a instanceof b)
                        return !0
                } catch (a) {}
                return !Error.isPrototypeOf(b) && b.call({}, a) === !0
            }
            function s(a) {
                var b;
                try {
                    a()
                } catch (a) {
                    b = a
                }
                return b
            }
            function t(a, b, c, d) {
                var e;
                if ("function" != typeof b)
                    throw new TypeError('"block" argument must be a function');
                "string" == typeof c && (d = c,
                c = null),
                e = s(b),
                d = (c && c.name ? " (" + c.name + ")." : ".") + (d ? " " + d : "."),
                a && !e && l(e, c, "Missing expected exception" + d);
                var f = "string" == typeof d
                  , g = !a && u.isError(e)
                  , h = !a && e && !c;
                if ((g && f && r(e, c) || h) && l(e, c, "Got unwanted exception" + d),
                a && e && c && !r(e, c) || !a && e)
                    throw e
            }
            var u = c(32)
              , v = Object.prototype.hasOwnProperty
              , w = Array.prototype.slice
              , x = function() {
                return "foo" === function() {}
                .name
            }()
              , y = a.exports = m
              , z = /\s*function\s+([^\(\s]*)\s*/;
            y.AssertionError = function(a) {
                this.name = "AssertionError",
                this.actual = a.actual,
                this.expected = a.expected,
                this.operator = a.operator,
                a.message ? (this.message = a.message,
                this.generatedMessage = !1) : (this.message = k(this),
                this.generatedMessage = !0);
                var b = a.stackStartFunction || l;
                if (Error.captureStackTrace)
                    Error.captureStackTrace(this, b);
                else {
                    var c = new Error;
                    if (c.stack) {
                        var d = c.stack
                          , e = h(b)
                          , f = d.indexOf("\n" + e);
                        if (f >= 0) {
                            var g = d.indexOf("\n", f + 1);
                            d = d.substring(g + 1)
                        }
                        this.stack = d
                    }
                }
            }
            ,
            u.inherits(y.AssertionError, Error),
            y.fail = l,
            y.ok = m,
            y.equal = function(a, b, c) {
                a != b && l(a, b, c, "==", y.equal)
            }
            ,
            y.notEqual = function(a, b, c) {
                a == b && l(a, b, c, "!=", y.notEqual)
            }
            ,
            y.deepEqual = function(a, b, c) {
                n(a, b, !1) || l(a, b, c, "deepEqual", y.deepEqual)
            }
            ,
            y.deepStrictEqual = function(a, b, c) {
                n(a, b, !0) || l(a, b, c, "deepStrictEqual", y.deepStrictEqual)
            }
            ,
            y.notDeepEqual = function(a, b, c) {
                n(a, b, !1) && l(a, b, c, "notDeepEqual", y.notDeepEqual)
            }
            ,
            y.notDeepStrictEqual = q,
            y.strictEqual = function(a, b, c) {
                a !== b && l(a, b, c, "===", y.strictEqual)
            }
            ,
            y.notStrictEqual = function(a, b, c) {
                a === b && l(a, b, c, "!==", y.notStrictEqual)
            }
            ,
            y.throws = function(a, b, c) {
                t(!0, a, b, c)
            }
            ,
            y.doesNotThrow = function(a, b, c) {
                t(!1, a, b, c)
            }
            ,
            y.ifError = function(a) {
                if (a)
                    throw a
            }
            ;
            var A = Object.keys || function(a) {
                var b = [];
                for (var c in a)
                    v.call(a, c) && b.push(c);
                return b
            }
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b, c) {
        (function(a, d) {
            function e(a, c) {
                var d = {
                    seen: [],
                    stylize: g
                };
                return arguments.length >= 3 && (d.depth = arguments[2]),
                arguments.length >= 4 && (d.colors = arguments[3]),
                p(c) ? d.showHidden = c : c && b._extend(d, c),
                v(d.showHidden) && (d.showHidden = !1),
                v(d.depth) && (d.depth = 2),
                v(d.colors) && (d.colors = !1),
                v(d.customInspect) && (d.customInspect = !0),
                d.colors && (d.stylize = f),
                i(d, a, d.depth)
            }
            function f(a, b) {
                var c = e.styles[b];
                return c ? "[" + e.colors[c][0] + "m" + a + "[" + e.colors[c][1] + "m" : a
            }
            function g(a, b) {
                return a
            }
            function h(a) {
                var b = {};
                return a.forEach(function(a, c) {
                    b[a] = !0
                }),
                b
            }
            function i(a, c, d) {
                if (a.customInspect && c && A(c.inspect) && c.inspect !== b.inspect && (!c.constructor || c.constructor.prototype !== c)) {
                    var e = c.inspect(d, a);
                    return t(e) || (e = i(a, e, d)),
                    e
                }
                var f = j(a, c);
                if (f)
                    return f;
                var g = Object.keys(c)
                  , p = h(g);
                if (a.showHidden && (g = Object.getOwnPropertyNames(c)),
                z(c) && (g.indexOf("message") >= 0 || g.indexOf("description") >= 0))
                    return k(c);
                if (0 === g.length) {
                    if (A(c)) {
                        var q = c.name ? ": " + c.name : "";
                        return a.stylize("[Function" + q + "]", "special")
                    }
                    if (w(c))
                        return a.stylize(RegExp.prototype.toString.call(c), "regexp");
                    if (y(c))
                        return a.stylize(Date.prototype.toString.call(c), "date");
                    if (z(c))
                        return k(c)
                }
                var r = ""
                  , s = !1
                  , u = ["{", "}"];
                if (o(c) && (s = !0,
                u = ["[", "]"]),
                A(c)) {
                    var v = c.name ? ": " + c.name : "";
                    r = " [Function" + v + "]"
                }
                if (w(c) && (r = " " + RegExp.prototype.toString.call(c)),
                y(c) && (r = " " + Date.prototype.toUTCString.call(c)),
                z(c) && (r = " " + k(c)),
                0 === g.length && (!s || 0 == c.length))
                    return u[0] + r + u[1];
                if (d < 0)
                    return w(c) ? a.stylize(RegExp.prototype.toString.call(c), "regexp") : a.stylize("[Object]", "special");
                a.seen.push(c);
                var x;
                return x = s ? l(a, c, d, p, g) : g.map(function(b) {
                    return m(a, c, d, p, b, s)
                }),
                a.seen.pop(),
                n(x, r, u)
            }
            function j(a, b) {
                if (v(b))
                    return a.stylize("undefined", "undefined");
                if (t(b)) {
                    var c = "'" + JSON.stringify(b).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return a.stylize(c, "string")
                }
                return s(b) ? a.stylize("" + b, "number") : p(b) ? a.stylize("" + b, "boolean") : q(b) ? a.stylize("null", "null") : void 0
            }
            function k(a) {
                return "[" + Error.prototype.toString.call(a) + "]"
            }
            function l(a, b, c, d, e) {
                for (var f = [], g = 0, h = b.length; g < h; ++g)
                    F(b, String(g)) ? f.push(m(a, b, c, d, String(g), !0)) : f.push("");
                return e.forEach(function(e) {
                    e.match(/^\d+$/) || f.push(m(a, b, c, d, e, !0))
                }),
                f
            }
            function m(a, b, c, d, e, f) {
                var g, h, j;
                if (j = Object.getOwnPropertyDescriptor(b, e) || {
                    value: b[e]
                },
                j.get ? h = j.set ? a.stylize("[Getter/Setter]", "special") : a.stylize("[Getter]", "special") : j.set && (h = a.stylize("[Setter]", "special")),
                F(d, e) || (g = "[" + e + "]"),
                h || (a.seen.indexOf(j.value) < 0 ? (h = q(c) ? i(a, j.value, null) : i(a, j.value, c - 1),
                h.indexOf("\n") > -1 && (h = f ? h.split("\n").map(function(a) {
                    return "  " + a
                }).join("\n").substr(2) : "\n" + h.split("\n").map(function(a) {
                    return "   " + a
                }).join("\n"))) : h = a.stylize("[Circular]", "special")),
                v(g)) {
                    if (f && e.match(/^\d+$/))
                        return h;
                    g = JSON.stringify("" + e),
                    g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (g = g.substr(1, g.length - 2),
                    g = a.stylize(g, "name")) : (g = g.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                    g = a.stylize(g, "string"))
                }
                return g + ": " + h
            }
            function n(a, b, c) {
                var d = 0
                  , e = a.reduce(function(a, b) {
                    return d++,
                    b.indexOf("\n") >= 0 && d++,
                    a + b.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
                return e > 60 ? c[0] + ("" === b ? "" : b + "\n ") + " " + a.join(",\n  ") + " " + c[1] : c[0] + b + " " + a.join(", ") + " " + c[1]
            }
            function o(a) {
                return Array.isArray(a)
            }
            function p(a) {
                return "boolean" == typeof a
            }
            function q(a) {
                return null === a
            }
            function r(a) {
                return null == a
            }
            function s(a) {
                return "number" == typeof a
            }
            function t(a) {
                return "string" == typeof a
            }
            function u(a) {
                return "symbol" == typeof a
            }
            function v(a) {
                return void 0 === a
            }
            function w(a) {
                return x(a) && "[object RegExp]" === C(a)
            }
            function x(a) {
                return "object" == typeof a && null !== a
            }
            function y(a) {
                return x(a) && "[object Date]" === C(a)
            }
            function z(a) {
                return x(a) && ("[object Error]" === C(a) || a instanceof Error)
            }
            function A(a) {
                return "function" == typeof a
            }
            function B(a) {
                return null === a || "boolean" == typeof a || "number" == typeof a || "string" == typeof a || "symbol" == typeof a || "undefined" == typeof a
            }
            function C(a) {
                return Object.prototype.toString.call(a)
            }
            function D(a) {
                return a < 10 ? "0" + a.toString(10) : a.toString(10)
            }
            function E() {
                var a = new Date
                  , b = [D(a.getHours()), D(a.getMinutes()), D(a.getSeconds())].join(":");
                return [a.getDate(), J[a.getMonth()], b].join(" ")
            }
            function F(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            var G = /%[sdj%]/g;
            b.format = function(a) {
                if (!t(a)) {
                    for (var b = [], c = 0; c < arguments.length; c++)
                        b.push(e(arguments[c]));
                    return b.join(" ")
                }
                for (var c = 1, d = arguments, f = d.length, g = String(a).replace(G, function(a) {
                    if ("%%" === a)
                        return "%";
                    if (c >= f)
                        return a;
                    switch (a) {
                    case "%s":
                        return String(d[c++]);
                    case "%d":
                        return Number(d[c++]);
                    case "%j":
                        try {
                            return JSON.stringify(d[c++])
                        } catch (a) {
                            return "[Circular]"
                        }
                    default:
                        return a
                    }
                }), h = d[c]; c < f; h = d[++c])
                    g += q(h) || !x(h) ? " " + h : " " + e(h);
                return g
            }
            ,
            b.deprecate = function(c, e) {
                function f() {
                    if (!g) {
                        if (d.throwDeprecation)
                            throw new Error(e);
                        d.traceDeprecation ? console.trace(e) : console.error(e),
                        g = !0
                    }
                    return c.apply(this, arguments)
                }
                if (v(a.process))
                    return function() {
                        return b.deprecate(c, e).apply(this, arguments)
                    }
                    ;
                if (d.noDeprecation === !0)
                    return c;
                var g = !1;
                return f
            }
            ;
            var H, I = {};
            b.debuglog = function(a) {
                if (v(H) && (H = d.env.NODE_DEBUG || ""),
                a = a.toUpperCase(),
                !I[a])
                    if (new RegExp("\\b" + a + "\\b","i").test(H)) {
                        var c = d.pid;
                        I[a] = function() {
                            var d = b.format.apply(b, arguments);
                            console.error("%s %d: %s", a, c, d)
                        }
                    } else
                        I[a] = function() {}
                        ;
                return I[a]
            }
            ,
            b.inspect = e,
            e.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            },
            e.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            },
            b.isArray = o,
            b.isBoolean = p,
            b.isNull = q,
            b.isNullOrUndefined = r,
            b.isNumber = s,
            b.isString = t,
            b.isSymbol = u,
            b.isUndefined = v,
            b.isRegExp = w,
            b.isObject = x,
            b.isDate = y,
            b.isError = z,
            b.isFunction = A,
            b.isPrimitive = B,
            b.isBuffer = c(34);
            var J = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            b.log = function() {
                console.log("%s - %s", E(), b.format.apply(b, arguments))
            }
            ,
            b.inherits = c(35),
            b._extend = function(a, b) {
                if (!b || !x(b))
                    return a;
                for (var c = Object.keys(b), d = c.length; d--; )
                    a[c[d]] = b[c[d]];
                return a
            }
        }
        ).call(b, function() {
            return this
        }(), c(33))
    }
    , function(a, b) {
        function c(a) {
            if (i === setTimeout)
                return setTimeout(a, 0);
            try {
                return i(a, 0)
            } catch (b) {
                try {
                    return i.call(null, a, 0)
                } catch (b) {
                    return i.call(this, a, 0)
                }
            }
        }
        function d(a) {
            if (j === clearTimeout)
                return clearTimeout(a);
            try {
                return j(a)
            } catch (b) {
                try {
                    return j.call(null, a)
                } catch (b) {
                    return j.call(this, a)
                }
            }
        }
        function e() {
            n && l && (n = !1,
            l.length ? m = l.concat(m) : o = -1,
            m.length && f())
        }
        function f() {
            if (!n) {
                var a = c(e);
                n = !0;
                for (var b = m.length; b; ) {
                    for (l = m,
                    m = []; ++o < b; )
                        l && l[o].run();
                    o = -1,
                    b = m.length
                }
                l = null,
                n = !1,
                d(a)
            }
        }
        function g(a, b) {
            this.fun = a,
            this.array = b
        }
        function h() {}
        var i, j, k = a.exports = {};
        !function() {
            try {
                i = setTimeout
            } catch (a) {
                i = function() {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                j = clearTimeout
            } catch (a) {
                j = function() {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var l, m = [], n = !1, o = -1;
        k.nextTick = function(a) {
            var b = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var d = 1; d < arguments.length; d++)
                    b[d - 1] = arguments[d];
            m.push(new g(a,b)),
            1 !== m.length || n || c(f)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        k.title = "browser",
        k.browser = !0,
        k.env = {},
        k.argv = [],
        k.version = "",
        k.versions = {},
        k.on = h,
        k.addListener = h,
        k.once = h,
        k.off = h,
        k.removeListener = h,
        k.removeAllListeners = h,
        k.emit = h,
        k.binding = function(a) {
            throw new Error("process.binding is not supported")
        }
        ,
        k.cwd = function() {
            return "/"
        }
        ,
        k.chdir = function(a) {
            throw new Error("process.chdir is not supported")
        }
        ,
        k.umask = function() {
            return 0
        }
    }
    , function(a, b) {
        a.exports = function(a) {
            return a && "object" == typeof a && "function" == typeof a.copy && "function" == typeof a.fill && "function" == typeof a.readUInt8
        }
    }
    , function(a, b) {
        "function" == typeof Object.create ? a.exports = function(a, b) {
            a.super_ = b,
            a.prototype = Object.create(b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : a.exports = function(a, b) {
            a.super_ = b;
            var c = function() {};
            c.prototype = b.prototype,
            a.prototype = new c,
            a.prototype.constructor = a
        }
    }
    , function(a, b, c) {
        var d, e, f;
        (function(c) {
            "use strict";
            !function(c, g) {
                e = [],
                d = g,
                f = "function" == typeof d ? d.apply(b, e) : d,
                !(void 0 !== f && (a.exports = f))
            }(this, function() {
                function a() {
                    try {
                        return g in e && e[g]
                    } catch (a) {
                        return !1
                    }
                }
                var b, d = {}, e = "undefined" != typeof window ? window : c, f = e.document, g = "localStorage", h = "script";
                if (d.disabled = !1,
                d.version = "1.3.20",
                d.set = function(a, b) {}
                ,
                d.get = function(a, b) {}
                ,
                d.has = function(a) {
                    return void 0 !== d.get(a)
                }
                ,
                d.remove = function(a) {}
                ,
                d.clear = function() {}
                ,
                d.transact = function(a, b, c) {
                    null == c && (c = b,
                    b = null),
                    null == b && (b = {});
                    var e = d.get(a, b);
                    c(e),
                    d.set(a, e)
                }
                ,
                d.getAll = function() {}
                ,
                d.forEach = function() {}
                ,
                d.serialize = function(a) {
                    return JSON.stringify(a)
                }
                ,
                d.deserialize = function(a) {
                    if ("string" == typeof a)
                        try {
                            return JSON.parse(a)
                        } catch (b) {
                            return a || void 0
                        }
                }
                ,
                a())
                    b = e[g],
                    d.set = function(a, c) {
                        return void 0 === c ? d.remove(a) : (b.setItem(a, d.serialize(c)),
                        c)
                    }
                    ,
                    d.get = function(a, c) {
                        var e = d.deserialize(b.getItem(a));
                        return void 0 === e ? c : e
                    }
                    ,
                    d.remove = function(a) {
                        b.removeItem(a)
                    }
                    ,
                    d.clear = function() {
                        b.clear()
                    }
                    ,
                    d.getAll = function() {
                        var a = {};
                        return d.forEach(function(b, c) {
                            a[b] = c
                        }),
                        a
                    }
                    ,
                    d.forEach = function(a) {
                        for (var c = 0; c < b.length; c++) {
                            var e = b.key(c);
                            a(e, d.get(e))
                        }
                    }
                    ;
                else if (f && f.documentElement.addBehavior) {
                    var i, j;
                    try {
                        j = new ActiveXObject("htmlfile"),
                        j.open(),
                        j.write("<" + h + ">document.w=window</" + h + '><iframe src="/favicon.ico"></iframe>'),
                        j.close(),
                        i = j.w.frames[0].document,
                        b = i.createElement("div")
                    } catch (a) {
                        b = f.createElement("div"),
                        i = f.body
                    }
                    var k = function(a) {
                        return function() {
                            var c = Array.prototype.slice.call(arguments, 0);
                            c.unshift(b),
                            i.appendChild(b),
                            b.addBehavior("#default#userData"),
                            b.load(g);
                            var e = a.apply(d, c);
                            return i.removeChild(b),
                            e
                        }
                    }
                      , l = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")
                      , m = function(a) {
                        return a.replace(/^d/, "___$&").replace(l, "___")
                    };
                    d.set = k(function(a, b, c) {
                        return b = m(b),
                        void 0 === c ? d.remove(b) : (a.setAttribute(b, d.serialize(c)),
                        a.save(g),
                        c)
                    }),
                    d.get = k(function(a, b, c) {
                        b = m(b);
                        var e = d.deserialize(a.getAttribute(b));
                        return void 0 === e ? c : e
                    }),
                    d.remove = k(function(a, b) {
                        b = m(b),
                        a.removeAttribute(b),
                        a.save(g)
                    }),
                    d.clear = k(function(a) {
                        var b = a.XMLDocument.documentElement.attributes;
                        a.load(g);
                        for (var c = b.length - 1; c >= 0; c--)
                            a.removeAttribute(b[c].name);
                        a.save(g)
                    }),
                    d.getAll = function(a) {
                        var b = {};
                        return d.forEach(function(a, c) {
                            b[a] = c
                        }),
                        b
                    }
                    ,
                    d.forEach = k(function(a, b) {
                        for (var c, e = a.XMLDocument.documentElement.attributes, f = 0; c = e[f]; ++f)
                            b(c.name, d.deserialize(a.getAttribute(c.name)))
                    })
                }
                try {
                    var n = "__storejs__";
                    d.set(n, n),
                    d.get(n) != n && (d.disabled = !0),
                    d.remove(n)
                } catch (a) {
                    d.disabled = !0
                }
                return d.enabled = !d.disabled,
                d
            })
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            if (this.pulse2timing = {
                init: Date.now()
            },
            !a.optOut) {
                if (this.optOut = !1,
                this.waitForOptOut = !1,
                a.waitForOptOut && (this.optOut = "wait",
                this.waitForOptOut = !0),
                !a.clientId)
                    throw new Error("clientId is required");
                this.vars = f,
                this.version = o,
                this.clientId = ("urn:schibsted.com:" + a.clientId).toLowerCase(),
                a.url ? (this.url = a.url + "/" + this.clientId,
                this.pixelUrl = a.url) : (this.url = this.vars.envVars.dataCollectorUrl + "/" + this.clientId,
                this.pixelUrl = this.vars.envVars.dataCollectorUrl),
                this.pageViewId = h.getUuidV4(),
                this.pixel = new j(this.pixelUrl,"pulse2",a.pixelThrottle),
                this.pixel.initPulsePixel(this.pageViewId, this.clientId),
                this.pulse2timing = {
                    pixelDone: Date.now()
                },
                a.transport ? this.transport = a.transport : this.transport = new k,
                a.respectDoNotTrack === !0 && 1 === navigator.doNotTrack ? this.allowTracking = !1 : this.allowTracking = !0,
                this.opts = a,
                this.contentId = a.contentId || a.pageId || document.location,
                this.contentType = a.contentType || a.pageType || "Content",
                this.userIdDomain = a.userIdDomain,
                this.noRedirect = !0,
                this.utils = h,
                this.queue = new l(100),
                this.events = new g(this),
                this.user = new i({
                    userId: this.opts.userId,
                    userIdDomain: this.opts.userIdDomain,
                    userServiceUrl: this.opts.userServiceUrl,
                    noRedirect: this.noRedirect,
                    transport: this.transport,
                    utils: this.utils,
                    waitForOptOut: this.waitForOptOut
                }),
                this.plugins = new m(this.opts),
                this.trigger = new n(this),
                this.initIds(function() {}),
                this.plugins.call(this.plugins.sdkLoad, this)
            }
        }
        var e = c(38)("spt:pulse")
          , f = {}
          , g = c(41)
          , h = c(44)
          , i = c(45)
          , j = c(49)
          , k = c(46)
          , l = c(50)
          , m = c(51)
          , n = c(52)
          , o = "2.3.4";
        try {
            f = c(47)
        } catch (a) {
            f = c(48)
        }
        d.prototype.initIds = function(a) {
            var b = this;
            a = a || function() {}
            ,
            e("Fetching Ids"),
            this.pulse2timing.fetchIds = Date.now(),
            this.user.getUserId(function(c, d) {
                b.idsDoneCallback(c, d, a),
                b.plugins.call(b.plugins.sdkReady, b)
            })
        }
        ,
        d.prototype.idsDoneCallback = function(a, b, c) {
            return a ? (e("Failed to fetch ids from CIS", a),
            delete this.envId) : (this.userId || (this.userId = b.userId),
            this.envId = b.envId),
            this.pulse2timing.receivedIds = Date.now(),
            this.waitingToTransmitQueue === !0 && (this.sendQueue(),
            this.waitingToTransmitQueue = !1),
            this.doPixelSync(),
            c(b)
        }
        ,
        d.prototype.doPixelSync = function() {
            var a, b = "https://secure.amdnxs.com/getuid?https://cis.schibsted.com/api/v1/sync?ANID=$UID";
            this.user.shouldSyncWithAn && (this.user.shouldSyncWithAn = !1,
            this.user.setAnIdUnresolved(),
            a = new j(b,"pulse2an",1),
            a.initPixel())
        }
        ,
        d.prototype.sendQueue = function(a) {
            var b, c, d = this;
            if (a = a || function() {}
            ,
            !this.queue.count())
                return a("no items in queue");
            if (!this.allowTracking)
                return a("tracking not allowed");
            if (this.plugins.call(this.plugins.eventCreated, this.queue.peekAll()),
            "send" !== this.isUserInfoResolved() || "send" !== this.optOutAction())
                return this.waitingToTransmitQueue = !0,
                a("not ready to send");
            for (e("Sending queue"),
            c = this.queue.pullAll(),
            b = 0; b < c.length; b++)
                this.enrichEvents(c[b]);
            this.plugins.call(this.plugins.eventReady, c),
            this.transport.post(this.url, c, function(b) {
                b ? (e("Failed to send queue"),
                d.queue.pushMany(c),
                a(b)) : (d.plugins.call(d.plugins.eventSent, c),
                a(null, !0))
            })
        }
        ,
        d.prototype.send = function(a, b) {
            var c = this;
            return b || (b = function() {}
            ),
            this.allowTracking ? (this.plugins.call(this.plugins.eventCreated, a),
            "send" !== this.isUserInfoResolved() || "send" !== this.optOutAction() ? (this.queue.push(a),
            this.waitingToTransmitQueue = !0,
            b("not ready to send")) : (e("Sending object"),
            this.enrichEvents(a),
            this.plugins.call(this.plugins.eventReady, a),
            void this.transport.post(this.url, [a], function(d) {
                d ? (e("Failed to send object"),
                c.queue.push(a),
                b(d)) : (c.plugins.call(c.plugins.eventSent, a),
                b(null, !0))
            }))) : b("tracking not allowed")
        }
        ,
        d.prototype.optOutAction = function() {
            return this.waitForOptOut && "wait" === this.optOut ? "wait" : this.waitForOptOut && this.optOut ? "discard" : "send"
        }
        ,
        d.prototype.setOptOut = function(a, b) {
            return this.optOut = a,
            this.waitingToTransmitQueue === !0 && (this.waitingToTransmitQueue = !1),
            this.sendQueue(b)
        }
        ,
        d.prototype.isUserInfoResolved = function() {
            return "undefined" == typeof this.envId ? "SDK: Waiting for envId" : this.envId.indexOf("undefined") > -1 ? (delete this.envId,
            "SDK: Waiting for envId") : this.user.doTracking === !1 ? "CIS: user has opted out" : "send"
        }
        ,
        d.prototype.enrichEvents = function(a) {
            this.addTheIds(a),
            a.tracker.performance && (a.tracker.performance.pulse2.sendEvents = Date.now())
        }
        ,
        d.prototype.addTheIds = function(a) {
            var b = this.user.getTheEnvironmentId()
              , c = this.user.getTheUserId()
              , d = this.user.getTheJweIds();
            a.actor && b && "undefined" !== b && (0 !== String(b).indexOf("urn:") ? (a.actor["@id"] = "urn:schibsted.com:environment:" + b,
            a.actor["spt:environmentId"] = "urn:schibsted.com:environment:" + b) : (a.actor["@id"] = b,
            a.actor["spt:environmentId"] = b),
            d && (a.device.jweIds = d),
            a.actor["spt:userId"] = c)
        }
        ,
        d.prototype.getPageViewId = function() {
            return this.pageViewId
        }
        ,
        d.prototype.getSessionId = function() {
            this.opts.debugMode && console.log("activity.js: Deprecated: getSessionId")
        }
        ,
        d.prototype.userLogout = function() {
            delete this.user.idObj.userId,
            this.refreshUserIds()
        }
        ,
        d.prototype.userLogin = function(a) {
            this.user.idObj.userId = a,
            this.refreshUserIds()
        }
        ,
        d.prototype.refreshUserIds = function() {
            this.waitingToTransmitQueue = !0,
            this.initIds()
        }
        ,
        a.exports = d
    }
    , function(a, b, c) {
        function d() {
            return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }
        function e() {
            var a = arguments
              , c = this.useColors;
            if (a[0] = (c ? "%c" : "") + this.namespace + (c ? " %c" : " ") + a[0] + (c ? "%c " : " ") + "+" + b.humanize(this.diff),
            !c)
                return a;
            var d = "color: " + this.color;
            a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
            var e = 0
              , f = 0;
            return a[0].replace(/%[a-z%]/g, function(a) {
                "%%" !== a && (e++,
                "%c" === a && (f = e))
            }),
            a.splice(f, 0, d),
            a
        }
        function f() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function g(a) {
            try {
                null == a ? b.storage.removeItem("debug") : b.storage.debug = a
            } catch (a) {}
        }
        function h() {
            var a;
            try {
                a = b.storage.debug
            } catch (a) {}
            return a
        }
        function i() {
            try {
                return window.localStorage
            } catch (a) {}
        }
        b = a.exports = c(39),
        b.log = f,
        b.formatArgs = e,
        b.save = g,
        b.load = h,
        b.useColors = d,
        b.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : i(),
        b.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        b.formatters.j = function(a) {
            return JSON.stringify(a)
        }
        ,
        b.enable(h())
    }
    , function(a, b, c) {
        function d() {
            return b.colors[k++ % b.colors.length]
        }
        function e(a) {
            function c() {}
            function e() {
                var a = e
                  , c = +new Date
                  , f = c - (j || c);
                a.diff = f,
                a.prev = j,
                a.curr = c,
                j = c,
                null == a.useColors && (a.useColors = b.useColors()),
                null == a.color && a.useColors && (a.color = d());
                var g = Array.prototype.slice.call(arguments);
                g[0] = b.coerce(g[0]),
                "string" != typeof g[0] && (g = ["%o"].concat(g));
                var h = 0;
                g[0] = g[0].replace(/%([a-z%])/g, function(c, d) {
                    if ("%%" === c)
                        return c;
                    h++;
                    var e = b.formatters[d];
                    if ("function" == typeof e) {
                        var f = g[h];
                        c = e.call(a, f),
                        g.splice(h, 1),
                        h--
                    }
                    return c
                }),
                "function" == typeof b.formatArgs && (g = b.formatArgs.apply(a, g));
                var i = e.log || b.log || console.log.bind(console);
                i.apply(a, g)
            }
            c.enabled = !1,
            e.enabled = !0;
            var f = b.enabled(a) ? e : c;
            return f.namespace = a,
            f
        }
        function f(a) {
            b.save(a);
            for (var c = (a || "").split(/[\s,]+/), d = c.length, e = 0; e < d; e++)
                c[e] && (a = c[e].replace(/\*/g, ".*?"),
                "-" === a[0] ? b.skips.push(new RegExp("^" + a.substr(1) + "$")) : b.names.push(new RegExp("^" + a + "$")))
        }
        function g() {
            b.enable("")
        }
        function h(a) {
            var c, d;
            for (c = 0,
            d = b.skips.length; c < d; c++)
                if (b.skips[c].test(a))
                    return !1;
            for (c = 0,
            d = b.names.length; c < d; c++)
                if (b.names[c].test(a))
                    return !0;
            return !1
        }
        function i(a) {
            return a instanceof Error ? a.stack || a.message : a
        }
        b = a.exports = e,
        b.coerce = i,
        b.disable = g,
        b.enable = f,
        b.enabled = h,
        b.humanize = c(40),
        b.names = [],
        b.skips = [],
        b.formatters = {};
        var j, k = 0
    }
    , function(a, b) {
        function c(a) {
            if (a = "" + a,
            !(a.length > 1e4)) {
                var b = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
                if (b) {
                    var c = parseFloat(b[1])
                      , d = (b[2] || "ms").toLowerCase();
                    switch (d) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return c * k;
                    case "days":
                    case "day":
                    case "d":
                        return c * j;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * i;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * h;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * g;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c
                    }
                }
            }
        }
        function d(a) {
            return a >= j ? Math.round(a / j) + "d" : a >= i ? Math.round(a / i) + "h" : a >= h ? Math.round(a / h) + "m" : a >= g ? Math.round(a / g) + "s" : a + "ms"
        }
        function e(a) {
            return f(a, j, "day") || f(a, i, "hour") || f(a, h, "minute") || f(a, g, "second") || a + " ms"
        }
        function f(a, b, c) {
            if (!(a < b))
                return a < 1.5 * b ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
        }
        var g = 1e3
          , h = 60 * g
          , i = 60 * h
          , j = 24 * i
          , k = 365.25 * j;
        a.exports = function(a, b) {
            return b = b || {},
            "string" == typeof a ? c(a) : b.long ? e(a) : d(a)
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            if (!a)
                throw new Error("activity required");
            this.activity = a,
            this.opts = a.opts,
            this.contentId = a.contentId,
            this.contentType = a.contentType
        }
        var e = c(42)
          , f = c(43);
        d.prototype.trackContentView = function(a) {
            var b = new f(this.activity);
            return b.type = "View",
            b.object = this.addPageStandards(b.object),
            b.object.name = a || document.title,
            b.object.displayName = b.object.name,
            b.object.properties = {},
            b.object.properties = this.reMapCustom(b.object.properties, "@type"),
            b.object.properties = this.reMapCustom(b.object.properties, "action"),
            b.object.properties = this.reMapCustom(b.object.properties, "item"),
            this.opts.filters && (b.object.filters = this.opts.filters),
            document.referrer && (b.origin = {
                url: document.referrer
            }),
            new e(b,["object", "origin"])
        }
        ,
        d.prototype.trackBasic = function(a, b, c, d) {
            var g = new f(this.activity);
            return b = b || "Content",
            c = c || "undefined",
            g.id = this.getUrnIdWithContentType(c, b),
            g.type = a || "View",
            "object" == typeof d ? g.addCustomDataToProperty(g.object, d) : g.activity.opts.debugMode && console.log("events.js:trackBasic: objectMeta must be an object"),
            g.object["@id"] = this.getUrnIdWithContentType(c, b),
            g.object["@type"] = b,
            g.origin = this.addPageStandards(g.origin),
            new e(g,["object", "origin"])
        }
        ,
        d.prototype.trackCreate = function(a, b, c) {
            return this.trackBasic("Create", a, b, c)
        }
        ,
        d.prototype.trackUpdate = function(a, b, c) {
            return this.trackBasic("Update", a, b, c)
        }
        ,
        d.prototype.trackReply = function(a, b, c) {
            var d = new f(this.activity);
            return a = a || "Content",
            b = b || this.opts.contentId,
            d.id = this.getUrnIdWithContentType(b, a),
            d.type = "Send",
            d.addCustomDataToProperty(d.object, c),
            d.object["@type"] = a,
            d.origin = this.addPageStandards(d.origin),
            new e(d,["object", "origin"])
        }
        ,
        d.prototype.trackLogin = function(a, b, c) {
            return this.trackBasic("Login", a, b, c)
        }
        ,
        d.prototype.trackLogout = function(a, b, c) {
            return this.trackBasic("Logout", a, b, c)
        }
        ,
        d.prototype.trackClick = function(a, b, c, d, g) {
            var h = new f(this.activity);
            return h.type = g || "Accept",
            h.object["@id"] = this.getUrnIdWithContentType(d, c) + ":element:" + a,
            h.object["@type"] = "Link",
            h.object.name = b,
            h.object.displayName = b,
            h.schema.target = {
                "@id": this.getUrnIdWithContentType(d, c),
                "@type": c
            },
            new e(h,["object", "target"])
        }
        ,
        d.prototype.trackSocial = function(a, b, c) {
            var d = new f(this.activity);
            return d.type = c || "Like",
            d.origin = this.addPageStandards(d.origin),
            d.object["@id"] = this.getUrnIdWithContentType() + ":element:" + a,
            d.object["@type"] = "Link",
            d.schema.target = {
                "@id": "urn:" + b.toLowerCase() + ":action:" + d.type.toLowerCase(),
                "@type": "Service"
            },
            new e(d,["object", "origin", "target"])
        }
        ,
        d.prototype.trackMediaState = function(a, b, c) {
            var d = new f(this.activity);
            return d.type = c || "Watch",
            d.object = {
                "@type": b,
                "@id": this.getUrnIdWithContentType() + ":" + b + ":" + a
            },
            d.origin = this.addPageStandards(d.origin),
            new e(d,["object", "origin"])
        }
        ,
        d.prototype.trackScroll = function(a, b) {
            var c = new f(this.activity);
            return c.type = b || "Arrive",
            c.object = this.addPageStandards(c.object),
            c.schema.result = {
                "@type": "Place",
                "@id": this.getUrnIdWithContentType() + ":scroll:" + a,
                "spt:depth": a
            },
            new e(c,["object", "result"])
        }
        ,
        d.prototype.trackVisibility = function(a, b, c) {
            var d = new f(this.activity);
            if ("undefined" == typeof b)
                throw new Error("No time parameter was passed to this function");
            return d.type = c || "View",
            d.origin = this.addPageStandards(d.origin),
            d.object = {
                "@type": "Content",
                "@id": this.getUrnIdWithContentType() + ":element:" + a
            },
            b.start ? d.object.startTime = b.start : b && !b.end && (d.object.startTime = b),
            b.end && (d.object.endTime = b.end),
            new e(d,["origin", "object"])
        }
        ,
        d.prototype.trackExit = function(a, b, c) {
            var d = new f(this.activity);
            return d.type = c || "Leave",
            d.object = this.addPageStandards(d.object),
            d.schema.target = {},
            "undefined" != typeof a && "undefined" != typeof b && (d.schema.target = {
                "@type": b,
                "@id": this.getUrnIdWithContentType(a, b)
            }),
            new e(d,["object", "target"])
        }
        ,
        d.prototype.trackEngagement = function(a, b, c, d, g, h, i) {
            var j, k = new f(this.activity);
            if (k.schema.schema = "http://schema.schibsted.com/events/engagement-event.json/16.json#",
            k.type = "Engagement",
            k.origin = this.addPageStandards(k.origin),
            i) {
                if (j = i,
                "string" == typeof i)
                    try {
                        j = JSON.parse(i)
                    } catch (a) {
                        k.activity.opts.debugMode && console.log("Error parsing JSON: " + a)
                    }
                "object" == typeof j && k.addCustomDataToProperty(k.object, j)
            }
            return d && g ? (k.object["@id"] = k.origin["@id"] + ":" + d + ":" + g,
            k.object["@type"] = d,
            k.object.action = h) : k.object = this.addPageStandards(k.object),
            a || 0 === a ? k.schema.duration = a : k.schema.duration = this.activity.utils.getViewDuration(),
            b || 0 === b ? k.schema.scrollPosition = b : k.schema.scrollPosition = this.activity.utils.getScrollPosition(),
            k.schema.action = c,
            new e(k,["object"])
        }
        ,
        d.prototype.trackEngagementTime = function(a, b, c) {
            return this.trackEngagement(a, c)
        }
        ,
        d.prototype.trackCustomEvent = function(a, b, c) {
            var d = new f(this.activity);
            return d.type = b || "Custom",
            d.object = this.addPageStandards(d.object),
            "object" == typeof c && d.addCustomDataToProperty(d.object["spt:custom"], c),
            a && (d.provider.eventIdentifier = a),
            new e(d,["object"])
        }
        ,
        d.prototype.trackCustom = function(a, b) {
            var c = new f(this.activity);
            return c.type = a && !~a.indexOf("custom:") ? "custom:".concat(a) : a || "custom:Content",
            c.object = this.addPageStandards(c.object),
            c.schema.schema = "http://schema.schibsted.com/events/custom-event.json/0.json#",
            "object" == typeof b && (c.custom = b),
            new e(c,["object"])
        }
        ,
        d.prototype.addPageStandards = function(a) {
            return a = a || {},
            a["@type"] = this.activity.contentType,
            String(this.activity.contentId).indexOf("urn:") > -1 ? a["@id"] = this.activity.contentId : a["@id"] = this.getUrnIdWithContentType(this.activity.contentId),
            a.url = document.URL,
            a.name = document.title,
            a.displayName = document.title,
            this.opts.inLanguage && (a.inLanguage = this.opts.inLanguage),
            this.opts.tags && Array.isArray(this.opts.tags) && (a.tags = this.opts.tags),
            this.addCategoryToEvents(a)
        }
        ,
        d.prototype.addCategoryToEvents = function(a) {
            var b = this.activity.opts
              , c = "";
            return b.provider = b.provider || {},
            b.object = b.object || {},
            b.category ? c = b.category : b.object.category ? c = b.object.category : b.provider.category && (c = b.provider.category),
            Array.isArray(c) && (c = c.toString()),
            c && (a.category = c),
            a
        }
        ,
        d.prototype.getUrnIdWithContentType = function(a, b) {
            var c, d, e = a || this.activity.contentId;
            return String(e).indexOf("urn:") === -1 ? (c = b || this.activity.contentType,
            d = this.getDomainFromUrl(document.URL),
            "urn:" + d + ":" + c.toLowerCase() + ":" + e) : e
        }
        ,
        d.prototype.getDomainFromUrl = function(a) {
            var b = a.match(/^https?\:\/\/(www.)?([^\/:?#]+)(?:[\/:?#]|$)/i);
            return b && b[2]
        }
        ,
        d.prototype.reMapCustom = function(a, b, c) {
            return c !== !1 && (c = !0),
            this.opts.object && this.opts.object.properties && this.opts.object.properties[b] ? (a[b] = this.opts.object.properties[b],
            c && delete this.opts.object.properties[b],
            a) : a
        }
        ,
        a.exports = d
    }
    , function(a, b) {
        "use strict";
        function c(a, b) {
            if (!a)
                throw new Error("data required");
            try {
                this.data = a.getSchema()
            } catch (a) {
                throw new Error("get schema function required")
            }
            if (!a.activity)
                throw new Error("data must have property activity");
            this.activity = a.activity,
            this.objectOrder = b || []
        }
        c.prototype.queue = function() {
            this.activity.queue.push(this.data)
        }
        ,
        c.prototype.send = function(a) {
            this.activity.send(this.data, a)
        }
        ,
        c.prototype.addProperty = function(a, b, c) {
            var d = this.getObjectKey(a);
            return this.data[d][b] = c,
            this
        }
        ,
        c.prototype.addCustomData = function(a, b) {
            var c = this.getObjectKey(a);
            return this.data[c]["spt:custom"] = b,
            this
        }
        ,
        c.prototype.getObjectKey = function(a) {
            if ("primary" === a)
                return this.objectOrder[0];
            if ("secondary" === a)
                return this.objectOrder[1];
            if ("tertiary" === a)
                return this.objectOrder[2];
            throw new Error("Object reference not valid")
        }
        ,
        a.exports = c
    }
    , function(a, b, c) {
        "use strict";
        function d(a, b) {
            if (!a)
                throw new Error("Activity needed");
            this.activity = a,
            this.reducedEvent = b,
            this.schema = {},
            this.type = null,
            this.actor = {},
            this.device = {},
            this.provider = {},
            this.object = {},
            this.origin = {},
            this.location = {},
            this.tracker = {},
            this.initSchema()
        }
        var e = c(44);
        d.prototype.initSchema = function() {
            this.schema["@id"] = e.getUuidV4(),
            this.schema["spt:pageViewId"] = this.activity.pageViewId,
            this.schema.published = e.getTimestamp(),
            this.schema.schema = "http://schema.schibsted.com/events/base-event.schema.json/25.json",
            this.createActor(),
            this.createTracker(),
            this.createDevice(),
            this.createProvider(),
            this.createObject(),
            this.createOrigin(),
            this.createLocation(),
            this.addCustomData()
        }
        ,
        d.prototype.populateSchema = function() {
            this.schema["@type"] = this.type,
            this.schema.actor = this.actor,
            this.schema.tracker = this.tracker,
            this.schema.device = this.device,
            this.schema.provider = this.provider,
            this.schema.object = this.object,
            this.schema.origin = this.origin,
            this.schema.location = this.location,
            this.target && (this.schema.target = this.target),
            this.result && (this.schema.result = this.result),
            this.scrollPosition && (this.schema.scrollPosition = this.scrollPosition),
            this.duration && (this.schema.duration = this.duration),
            this.custom && (this.schema.custom = this.custom)
        }
        ,
        d.prototype.createDevice = function() {
            this.device.deviceType = e.getDeviceType(navigator.userAgent)
        }
        ,
        d.prototype.createObject = function() {
            this.object["spt:custom"] = {}
        }
        ,
        d.prototype.createOrigin = function() {}
        ,
        d.prototype.createTracker = function() {
            this.tracker.version = this.activity.version,
            this.tracker.type = "JS",
            this.reducedEvent || this.extendedTrackerData()
        }
        ,
        d.prototype.extendedTrackerData = function() {
            this.tracker.performance = {},
            this.tracker.performance.pulse2 = this.activity.pulse2timing,
            this.tracker.name = "Pulse v2 tracker JS SDK",
            window.performance && (this.tracker.performance.browser = {},
            this.tracker.performance.browser = window.performance.timing)
        }
        ,
        d.prototype.createLocation = function() {
            this.activity.opts && this.activity.opts.location && (this.location["@type"] = "Place",
            this.location.latitude = this.activity.opts.location.latitude,
            this.location.longitude = this.activity.opts.location.longitude,
            this.location.accuracy = this.activity.opts.location.accuracy)
        }
        ,
        d.prototype.createActor = function() {
            this.actor["@type"] = "Person",
            this.reducedEvent || this.extendedActorData()
        }
        ,
        d.prototype.extendedActorData = function() {
            this.actor["spt:userAgent"] = navigator.userAgent,
            this.actor["spt:screenSize"] = window.screen.width + "x" + window.screen.height,
            this.actor["spt:viewportSize"] = e.getViewportDimensions(),
            this.actor["spt:acceptLanguage"] = e.getDeviceLanguage()
        }
        ,
        d.prototype.createProvider = function() {
            this.provider["@type"] = "Organization",
            this.provider["@id"] = this.activity.clientId,
            this.provider.url = document.URL
        }
        ,
        d.prototype.addCustomData = function() {
            this.activity.opts && (this.addCustomDataToProperty(this.provider, this.activity.opts.provider),
            this.addCustomDataToProperty(this.object["spt:custom"], this.activity.opts.object))
        }
        ,
        d.prototype.addCustomDataToProperty = function(a, b) {
            var c;
            for (c in b)
                a.hasOwnProperty(c) || (a[c] = b[c])
        }
        ,
        d.prototype.getSchema = function() {
            return this.populateSchema(),
            this.schema
        }
        ,
        d.prototype.getString = function() {
            return JSON.stringify(this.getSchema())
        }
        ,
        a.exports = d
    }
    , function(a, b) {
        "use strict";
        a.exports.retry = function(a, b, c) {
            var d, e = 1;
            if (!a || "number" != typeof a)
                throw new Error("times required");
            if (!b || "function" != typeof b)
                throw new Error("task required");
            if (!c || "function" != typeof c)
                throw new Error("callback required");
            d = function() {
                arguments[0] && e >= a ? c.apply(null, arguments) : arguments[0] ? (e += 1,
                b(d)) : c.apply(null, arguments)
            }
            ,
            b(d)
        }
        ,
        a.exports.getViewportDimensions = function() {
            var a, b;
            return "undefined" != typeof window.innerWidth ? (a = window.innerWidth,
            b = window.innerHeight) : "undefined" != typeof document.documentElement.clientWidth && 0 !== document.documentElement.clientWidth ? (a = document.documentElement.clientWidth,
            b = document.documentElement.clientHeight) : (a = document.getElementsByTagName("body")[0].clientWidth,
            b = document.getElementsByTagName("body")[0].clientHeight),
            a + "x" + b
        }
        ,
        a.exports.getDeviceLanguage = function() {
            var a;
            return navigator.userLanguage ? a = navigator.userLanguage : navigator.language && (a = navigator.language),
            a
        }
        ,
        a.exports.getDeviceType = function(a) {
            var b = {
                mobile: ["iPhone;", "iPod;", "iPod touch;", "^HTC", "Fennec", "IEMobile", "BB10;", "BlackBerry", "SymbianOS.*AppleWebKit", "^Mozilla.*Mobile.*Firefox", "^Mozilla.*Chrome.*Mobile", "Opera Mobi", "Android.*Mobile", "Android.*Mini", "Symbian", "^SonyEricsson", "^Nokia", "^SAMSUNG", "^LG"],
                tablet: ["iPad;", "Android"]
            }
              , c = function(b) {
                var c, d = 0;
                for (d; d < b.length; d++)
                    if (c = b[d],
                    a.match(new RegExp(c)))
                        return !0;
                return !1
            };
            if (a) {
                if (c(b.mobile))
                    return "mobile";
                if (c(b.tablet))
                    return "tablet"
            }
            return "desktop"
        }
        ,
        a.exports.getTimestamp = function() {
            var a = new Date
              , b = -a.getTimezoneOffset()
              , c = b >= 0 ? "+" : "-"
              , d = function(a) {
                var b = Math.abs(Math.floor(a));
                return (b < 10 ? "0" : "") + b
            }
              , e = a.getFullYear() + "-" + d(a.getMonth() + 1) + "-" + d(a.getDate());
            return e = e + "T" + d(a.getHours()) + ":" + d(a.getMinutes()),
            e = e + ":" + d(a.getSeconds()),
            e = e + c + d(b / 60) + ":" + d(b % 60)
        }
        ,
        a.exports.getUuidV4 = function() {
            var a, b, c = "";
            for (b = 0; b < 36; b++)
                a = 14 === b ? 4 : 19 === b ? Math.floor(4 * Math.random() + 8).toString(16) : 8 === b || 13 === b || 18 === b || 23 === b ? "-" : Math.floor(16 * Math.random()).toString(16),
                c += a;
            return c
        }
        ,
        a.exports.getUrlParams = function(a) {
            var b, c, d = [], e = location.search, f = e.split("&"), g = new RegExp(a + "=([^&;]+?)(&|#|;|$)","i");
            for (c = 0; c < f.length; c++)
                b = f[c].match(g),
                b && d.push(b[1]);
            return d
        }
        ,
        a.exports.getQueryVariable = function(a) {
            var b, c, d, e = window.location.search.substring(1), f = e.split("&");
            for (b = 0; b < f.length; b++)
                if (c = f[b].split("="),
                c[0] === a)
                    return c[1];
            for (f = e.split("&amp"),
            b = 0; b < f.length; b++)
                if (d = f[b].split("="),
                d[0] === a)
                    return d[1]
        }
        ,
        a.exports.getScrollPosition = function() {
            return (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
        }
        ,
        a.exports.getViewDuration = function() {
            var a, b, c;
            if (!window.performance)
                return null;
            a = window.performance.timing.domLoading,
            b = Date.now();
            try {
                c = b - a
            } catch (a) {
                c = null
            }
            return c
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a) {
            a = a || {},
            this.idObj = {},
            this.cookieKey = "_pulse2data",
            this.cookiesAllowed = navigator.cookieEnabled,
            this.anonIdPlaceholder = "x",
            this.opts = a,
            this.userIdDomain = a.userIdDomain || "schibsted.com",
            this.userId = this.opts.userId,
            this.visitorIdPlaceholder = "v",
            this.redirectString = "https://cis.schibsted.com/redirect/?redirectUrl=" + document.location,
            this.userServiceUrl = a.userServiceUrl || g.envVars.userServiceUrl,
            this.transport = a.transport || new e,
            this.utils = f,
            this.noRedirect = !0,
            this.doValidation = !1,
            this.shouldSyncWithAn = !1,
            this.shouldFetchFromAn = !1,
            this.hasCookie = !1,
            this.anSyncUrl = "https://secure.amdnxs.com/getuidj",
            this.doTracking = !0,
            this.anSyncStatus = "nothing has happened",
            "undefined" != typeof a.noRedirect && (this.noRedirect = a.noRedirect)
        }
        var e = c(46)
          , f = c(44)
          , g = {};
        try {
            g = c(47)
        } catch (a) {
            g = c(48)
        }
        d.prototype.getUserId = function(a) {
            var b, c = this;
            return a = a || function() {}
            ,
            b = this.getIdsFromCookie(),
            this.userId && (b.userId = this.createUserIdWithUrn(this.userId)),
            this.mapUserData(b),
            !this.idObj.envId || this.userStatusHasChanged() || this.doValidation ? (this.doValidation = !1,
            this.getIdsFromService(this.idObj, function(b, d) {
                return c.onIdServiceResponse(b, d, a)
            }),
            void this.doAppNexusSync(null, function() {
                return a(null, c.idObj)
            })) : (setTimeout(function() {
                c.doAppNexusSync()
            }, 2e3),
            a(null, this.idObj))
        }
        ,
        d.prototype.mapUserData = function(a) {
            this.idObj.userId = a.userId || this.idObj.userId,
            this.idObj.envId = a.environmentId || a.envId,
            this.idObj.prevUserId = a.prevUserId,
            this.idObj.anId = a.anId || this.idObj.anId,
            this.idObj.jweIds = a.jwe || this.idObj.jweIds,
            this.idObj.pixelInjected = a.pixelInjected || null,
            a.doAnSync && (this.shouldSyncWithAn = a.doAnSync),
            this.doTracking = this.resolveDoTracking(a.doTracking),
            this.setIdsInCookie()
        }
        ,
        d.prototype.setIdsInCookie = function() {
            var a, b, c = this.idObj.userId || this.anonIdPlaceholder, d = new Date, e = new Date, f = new Date, g = d.getTime();
            this.idObj.envId && (d.setTime(g + 9e5),
            e.setTime(g + 144e5),
            f.setTime(g + 63072e6),
            a = [this.idObj.envId, this.visitorIdPlaceholder, c, d.getTime(), this.idObj.jweIds, this.idObj.anId, e.getTime(), this.doTracking.toString(), this.idObj.pixelInjected],
            b = this.cookieKey + "=" + a,
            b += ";domain=" + document.domain,
            b += ";path=/",
            b += ";expires=" + f.toUTCString(),
            document.cookie = b)
        }
        ,
        d.prototype.getIdsFromCookie = function() {
            var a, b, c = this.getCookie(this.cookieKey);
            return c && c.indexOf("undefined") === -1 ? (a = c.split(","),
            a.length < 2 ? (this.deleteCookie(this.cookieKey),
            {}) : (a[3] && Date.now() > parseInt(a[3], 10) && (this.doValidation = !0,
            this.hasCookie = !0),
            a[6] && Date.now() > parseInt(a[6], 10) && (this.shouldSyncWithAn = !0,
            this.doValidation = !1),
            a[5] && "unresolved" !== a[8] || (a[8] = "unresolved",
            this.shouldFetchFromAn = !0),
            b = {
                environmentId: a[0],
                prevUserId: a[2],
                jwe: a[4],
                anId: a[5],
                doTracking: a[7],
                pixelInjected: a[8]
            })) : (this.deleteCookie(this.cookieKey),
            this.shouldSyncWithAn = !0,
            {})
        }
        ,
        d.prototype.getCookie = function(a) {
            var b = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || !1;
            return b
        }
        ,
        d.prototype.deleteCookie = function(a) {
            document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT"
        }
        ,
        d.prototype.getIdsFromService = function(a, b) {
            var c = this.userServiceUrl
              , d = 3
              , e = {
                environmentId: a.envId,
                userId: a.userId,
                jwe: a.jweIds
            };
            a.anId && (e.anId = a.anId),
            this.opts.waitForOptOut && (e.waitForOptOut = this.opts.waitForOptOut),
            this.hasCookie && (d = 1),
            this.transport.post(c, e, function(a, c) {
                var d;
                a && b(a),
                d = JSON.parse(c.response || c.responseText),
                d.data.anid && "0" !== d.data.anid || (d.data.doAnSync = !0),
                this.mapUserData(d.data),
                b(null, d.data)
            }
            .bind(this), !0, d)
        }
        ,
        d.prototype.onIdServiceResponse = function(a, b, c) {
            return this.hasCookie ? (this.hasCookie = !1,
            c(null, this.idObj)) : (a && c(a),
            c(null, this.idObj))
        }
        ,
        d.prototype.userStatusHasChanged = function() {
            var a = this.idObj.userId
              , b = this.idObj.prevUserId;
            return !!b && (a && b !== a.toString() || !a && b !== this.anonIdPlaceholder)
        }
        ,
        d.prototype.doAppNexusSync = function(a, b) {
            var c = this;
            return b = b || function() {}
            ,
            this.shouldFetchFromAn ? (this.shouldFetchFromAn = !1,
            void this.transport.get(this.anSyncUrl, null, function(a, d) {
                var e;
                return a ? b(a, d) : (e = JSON.parse(d.response || d.responseText),
                c.idObj.anId = e.uid,
                c.mapUserData(c.idObj),
                c.setAnIdResolved(),
                c.getIdsFromService(c.idObj, function(a, d) {
                    return c.onIdServiceResponse(a, d, b)
                }),
                b())
            }, 1, !0)) : a
        }
        ,
        d.prototype.setAnIdUnresolved = function() {
            this.idObj.pixelInjected = "unresolved",
            this.setIdsInCookie(this.idObj)
        }
        ,
        d.prototype.setAnIdResolved = function() {
            this.idObj.pixelInjected = null,
            this.setIdsInCookie(this.idObj)
        }
        ,
        d.prototype.getTheUserId = function() {
            return this.createUserIdWithUrn(this.idObj.userId)
        }
        ,
        d.prototype.getTheEnvironmentId = function() {
            return this.idObj.envId
        }
        ,
        d.prototype.getTheJweIds = function() {
            return this.idObj.jweIds
        }
        ,
        d.prototype.createUserIdWithUrn = function(a, b) {
            return !a || String(a).indexOf("undefined") > -1 ? b : String(a).indexOf("urn:") > -1 ? a : "urn:" + this.userIdDomain + ":user:" + a
        }
        ,
        d.prototype.resolveDoTracking = function(a) {
            return a === !0 || "true" === a || 1 === a || a !== !1 && "false" !== a && 0 !== a && this.doTracking
        }
        ,
        a.exports = d
    }
    , function(a, b, c) {
        "use strict";
        function d() {
            this.utils = e
        }
        var e = c(44);
        d.prototype.getUrlWithCorrectProtocol = function(a) {
            var b = a.split("://");
            return "//" + b.pop()
        }
        ,
        d.prototype.getXHR = function(a, b, c) {
            var d;
            return "undefined" != typeof XDomainRequest ? (d = new XDomainRequest,
            d.open(b.toLowerCase(), this.getUrlWithCorrectProtocol(c)),
            d) : (d = new XMLHttpRequest,
            "withCredentials"in d && (d.open(b, c),
            d.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
            d.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            a && (d.withCredentials = !0),
            d))
        }
        ,
        d.prototype.addDataToUrl = function(a, b) {
            var c, d;
            if (!b || "object" != typeof b)
                return a;
            for (c = Object.keys(b); c && "object" == typeof b[c[0]]; )
                c.shift();
            for (a = this.appendParameterToUrl(a, c[0], b[c[0]], "?"),
            d = 1; d < c.length; d++)
                a = this.appendParameterToUrl(a, c[d], b[c[d]], "&");
            return a
        }
        ,
        d.prototype.appendParameterToUrl = function(a, b, c, d) {
            return "object" != typeof c ? a + d + encodeURIComponent(b) + "=" + encodeURIComponent(c) : a
        }
        ,
        d.prototype.post = function(a, b, c, d, e) {
            return a ? b && "object" == typeof b ? (d = d || !1,
            void this.send(a, b, c, d, e, "POST")) : c("data required") : c("url required")
        }
        ,
        d.prototype.get = function(a, b, c, d, e) {
            return a ? (b && (a = this.addDataToUrl(a, b)),
            void this.send(a, b, c, e, d, "GET")) : c("url required")
        }
        ,
        d.prototype.send = function(a, b, c, d, e, f) {
            var g = this;
            if (!c)
                throw new Error("callback required");
            e = e || 3,
            this.utils.retry(e, function(c) {
                var e = g.getXHR(d, f, a);
                if (e || c("Failed to identify request method"),
                "undefined" != typeof XDomainRequest ? (e.onload = function() {
                    c(null, e)
                }
                ,
                e.onprogress = function() {}
                ,
                e.onerror = function() {
                    c("Failed request"),
                    e.abort()
                }
                ,
                e.ontimeout = e.onerror) : e.onreadystatechange = function() {
                    4 === e.readyState && (200 === e.status ? c(null, e) : c("Failed with status " + e.status))
                }
                ,
                "POST" === f)
                    try {
                        e.send(JSON.stringify(b))
                    } catch (a) {
                        c(a.name + ": " + a.message)
                    }
                else if ("GET" === f)
                    try {
                        e.send()
                    } catch (a) {
                        c(a)
                    }
            }, c)
        }
        ,
        a.exports = d
    }
    , function(a, b) {
        "use strict";
        a.exports.envVars = {
            dataCollectorUrl: "https://collector.schibsted.io/api/v1/track",
            userServiceUrl: "https://cis.schibsted.com/api/v1/identify",
            errorReportingUrl: ""
        }
    }
    , function(a, b) {
        "use strict";
        a.exports.envVars = {
            dataCollectorUrl: "http://127.0.0.1:8002/api/v1/track",
            userServiceUrl: "https://cis.schibsted.com/api/v1/identify",
            errorReportingUrl: ""
        }
    }
    , function(a, b) {
        "use strict";
        function c(a, b, c) {
            this.collectorBaseUrl = a,
            this.service = b || "pulse2",
            this.clientId = "",
            this.pageViewId = "",
            this.throttle = .1,
            c >= 0 && (this.throttle = c)
        }
        c.prototype.initPulsePixel = function(a, b) {
            this.clientId = b,
            this.pageViewId = a,
            this.collectorBaseUrl = this.getImageTrackingUrl(this.collectorBaseUrl),
            this.createPulsePixelUrl(),
            this.initPixel()
        }
        ,
        c.prototype.initPixel = function() {
            Math.random() < this.throttle && this.collectorBaseUrl && this.injectPixel()
        }
        ,
        c.prototype.createPulsePixelUrl = function() {
            var a = "?provider.@id=" + this.clientId;
            a += "&service=" + this.service,
            a += "&@type=Pixel",
            a += "&@id=" + this.pageViewId,
            this.collectorBaseUrl += a
        }
        ,
        c.prototype.injectPixel = function() {
            var a = this.createImgElement()
              , b = document.getElementsByTagName("body");
            b.item(0).appendChild(a)
        }
        ,
        c.prototype.getImageTrackingUrl = function(a) {
            var b = ""
              , c = /\/api\/v[0-9]\/track$/;
            try {
                b = a.replace(c, "/img")
            } catch (a) {
                return
            }
            if (a !== b && b)
                return b
        }
        ,
        c.prototype.createImgElement = function() {
            var a = document.createElement("img");
            return a.src = this.collectorBaseUrl,
            a.id = this.service + "paixel",
            a.style.visibility = "",
            a
        }
        ,
        a.exports = c
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            if (!a)
                throw new Error("size of the queue must be given");
            this.maxSize = a,
            this.queue = []
        }
        c.prototype.push = function(a) {
            this.queue.push(a),
            this.queue.length > this.maxSize && this.queue.shift()
        }
        ,
        c.prototype.pushMany = function(a) {
            if (!Array.isArray(a))
                throw new Error("elements must be an array");
            this.queue = this.queue.concat(a),
            this.queue.length > this.maxSize && (this.queue = this.queue.slice(this.queue.length - this.maxSize, this.queue.length))
        }
        ,
        c.prototype.pull = function() {
            return this.queue.shift()
        }
        ,
        c.prototype.pullAll = function() {
            return this.queue.splice(0, this.queue.length)
        }
        ,
        c.prototype.peek = function() {
            return this.queue[0]
        }
        ,
        c.prototype.peekAll = function() {
            return this.queue
        }
        ,
        c.prototype.count = function() {
            return this.queue.length
        }
        ,
        a.exports = c
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            this.opts = a,
            this.plugins = window.pulse2plugins || [],
            this.hooks = {
                eventCreated: this.plugins.eventCreatedHooks || [],
                eventReady: this.plugins.eventReadyHooks || [],
                eventSent: this.plugins.eventSentHooks || [],
                load: this.plugins.onLoadHooks || [],
                ready: this.plugins.onReadyHooks || []
            },
            this.sdkReady = "ready",
            this.sdkLoad = "load",
            this.eventCreated = "eventCreated",
            this.eventReady = "eventReady",
            this.eventSent = "eventSent"
        }
        c.prototype.call = function(a, b) {
            switch (a) {
            case this.eventCreated:
            case this.eventReady:
            case this.eventSent:
                return this.callEventHooks(b, this.hooks[a]);
            case this.sdkReady:
            case this.sdkLoad:
                return this.callSdkHooks(b, this.hooks[a]);
            default:
                return
            }
        }
        ,
        c.prototype.callEventHooksArray = function(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; c++)
                d.push(this.callEventHooks(a[c], b));
            return d
        }
        ,
        c.prototype.callEventHooks = function(a, b) {
            var c, d, e, f;
            if (b = b || [],
            Array.isArray(a))
                return this.callEventHooksArray(a, b);
            if (!a["@type"])
                return a;
            for (f = 0; f < b.length; f++)
                if (c = b[f],
                d = Object.keys(c)[0].toLowerCase(),
                "all" === d || d === a["@type"].toLowerCase())
                    try {
                        e = c[d](a),
                        e && (a = e)
                    } catch (a) {
                        this.opts.debugMode && console.log("plugins.js: A pulse2 sdk plugin failed: " + a)
                    }
            return a
        }
        ,
        c.prototype.callSdkHooks = function(a, b) {
            var c;
            if ("object" == typeof b && "object" == typeof a)
                for (c = 0; c < b.length; c++)
                    try {
                        b[c](a)
                    } catch (a) {
                        this.opts.debugMode && console.log("plugins.js: A pulse2 event plugin failed: " + a)
                    }
        }
        ,
        c.prototype.on = function(a, b, c) {
            var d = {};
            a && b && (c ? d[c] = b : d = b,
            this.hooks[a].push(d))
        }
        ,
        a.exports = c
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            this.activity = a,
            this.plugins = this.activity.plugins,
            this.registerTriggers()
        }
        c.prototype.registerTriggers = function() {
            this.plugins.on(this.plugins.sdkLoad, this.getUrlTriggers)
        }
        ,
        c.prototype.getUrlTriggers = function(a) {
            var b, c, d, e, f, g, h = a.utils.getUrlParams("p2param");
            for (c = 0; c < h.length; c++) {
                for (g = {},
                e = h[c].split("."),
                d = e.slice(2),
                f = 0; f < d.length; f++)
                    try {
                        d[f] = d[f].split("_"),
                        g[d[f][0]] = d[f][1]
                    } catch (a) {
                        this.activity.opts.debugMode && console.log("trigger.js: An error occurred while reading URL param: " + a)
                    }
                b = a.events.trackCustomEvent(null, e[0], g),
                b.data.object.displayName = e[1],
                b.data.object["@id"] += ":elementId:" + e[1],
                b.send()
            }
        }
        ,
        a.exports = c
    }
    , function(a, b) {
        "use strict";
        function c(a) {
            return a < 10 ? "0" + a : a
        }
        a.exports.requireOpts = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (!a[b[c]])
                    throw new Error(b[c] + " is required")
        }
        ,
        a.exports.windowHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight
        }
        ,
        a.exports.windowWidth = function() {
            return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth
        }
        ,
        a.exports.documentHeight = function() {
            var a = document.body
              , b = document.documentElement;
            return Math.max(a.scrollHeight, a.offsetHeight, b.clientHeight, b.scrollHeight, b.offsetHeight)
        }
        ,
        a.exports.getUnixTimestamp = function(a) {
            return a = a ? (new Date).getTime(a) : (new Date).getTime(),
            Math.round(a / 1e3)
        }
        ,
        a.exports.isoToDate = function(a) {
            var b = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/
              , c = b.exec(a);
            if (!c)
                throw new Error("Not ISO8601 date " + a);
            c = {
                year: c[1],
                month: c[2],
                day: c[3],
                hour: c[4],
                minutes: c[5],
                seconds: c[6],
                ms: c[7],
                zoneUTC: c[8],
                zoneModifier: c[9],
                zoneHours: c[10],
                zoneMinutes: c[11]
            };
            for (var d = ["month", "hour", "minutes", "seconds", "ms", "zoneHour", "zoneMinutes"], e = 0; e < d.length; e++)
                c[d[e]] = Number(c[d[e]]) || 0;
            c.month = (Number(c.month) || 1) - 1,
            c.day = Number(c.day) || 1;
            var f = 0;
            return "Z" !== c.zoneUTC && "undefined" != typeof c.zoneModifier && (f = 60 * c.zoneHours + c.zoneMinutes,
            "+" === c.zoneModifier && (f = 0 - f)),
            new Date(Date.UTC(c.year, c.month, c.day, c.hour, c.minutes + f, c.seconds, c.ms))
        }
        ,
        a.exports.dateToISO = function(a) {
            return a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "." + (a.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
        ,
        a.exports.bind = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c) : a.attachEvent("on" + b, c)
        }
        ,
        a.exports.unbind = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent("on" + b, c)
        }
        ,
        a.exports.isNumeric = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }
        ,
        a.exports.getDomainFromUrl = function(a) {
            var b = document.createElement("a");
            return b.setAttribute("href", a),
            b.hostname
        }
        ,
        a.exports.prepend = function(a, b) {
            return a ? 0 !== a.indexOf(b) ? b + a : a : b
        }
        ,
        a.exports.normalizeUrl = function(a) {
            if (0 === a.indexOf("http:") || 0 === a.indexOf("https:")) {
                var b = document.createElement("a");
                b.setAttribute("href", a);
                var c = b.hostname.split(".");
                return "www" === c[0] && (c = c.slice(1)),
                c.join(".") + this.prepend(b.pathname, "/") + b.search + b.hash
            }
            return a
        }
    }
    , function(a, b, c) {
        "use strict";
        function d(a, b) {
            if (!a)
                throw new Error(b + " is required")
        }
        function e(a, b, c) {
            b = b || {},
            d(a, "Pulse client"),
            d(b.articleId, "articleId"),
            d(b.contentType, "contentType"),
            d(b.pageViewId, "pageViewId"),
            d(b.device, "device"),
            d(b.referrerInfo, "referrerInfo"),
            d(b.url, "url"),
            this.pulse = a,
            this.articleId = b.articleId,
            this.contentType = b.contentType,
            this.pageViewId = b.pageViewId,
            this.device = b.device,
            this.group = b.group,
            this.referrerInfo = b.referrerInfo,
            this.url = b.url,
            this.wordCount = b.wordCount || null,
            this.scrollContainer = b.scrollContainer || null,
            this.articleContainer = b.articleContainer || null,
            this.experiments = c,
            this.scrollPosition = 0,
            this.articleViewedPercentage = null,
            this.totalActiveTime = 0,
            this.lastActiveTime = j.getUnixTimestamp(),
            this.lastPingSent = this.lastActiveTime,
            this.activityInterval = null,
            this.windowEventTypes = ["focus", "resize"],
            this.bodyEventTypes = ["beforeunload", "focus", "mousemove", "mousedown", "keydown"],
            this.throttledUpdateActivity = g(f(this.updateActivity, 500), this),
            this.latestEngagementData = null
        }
        var f = c(55)
          , g = c(58)
          , h = c(36)
          , i = c(77)
          , j = c(53)
          , k = "6.19.1"
          , l = !1
          , m = 5
          , n = 5;
        e.prototype.initialize = function() {
            l && this.sendStoredEvents(),
            this.storeActivity(),
            this.trackActivity(),
            this.initializePings()
        }
        ,
        e.prototype.trackActivity = function() {
            var a;
            for (a = 0; a < this.windowEventTypes.length; a++)
                j.bind(window, this.windowEventTypes[a], this.throttledUpdateActivity);
            for (a = 0; a < this.bodyEventTypes.length; a++)
                j.bind(document.body, this.bodyEventTypes[a], this.throttledUpdateActivity);
            this.trackScrollActivity(),
            this.trackReadingTime(m)
        }
        ,
        e.prototype.trackScrollActivity = function() {
            j.bind(this.scrollContainer || window, "scroll", this.throttledUpdateActivity)
        }
        ,
        e.prototype.untrackScrollActivity = function() {
            j.unbind(this.scrollContainer || window, "scroll", this.throttledUpdateActivity)
        }
        ,
        e.prototype.trackReadingTime = function(a) {
            var b = 1;
            this.activityInterval = window.setInterval(g(function() {
                this.lastActiveTime < j.getUnixTimestamp() - a || (this.totalActiveTime += b,
                this.storeActivity())
            }, this), 1e3 * b)
        }
        ,
        e.prototype.updateActivity = function() {
            this.lastActiveTime = j.getUnixTimestamp(),
            this.updateScrollPosition(),
            this.storeActivity()
        }
        ,
        e.prototype.updateScrollPosition = function() {
            var a = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
            if (a > this.scrollPosition && (this.scrollPosition = a),
            this.articleContainer) {
                var b = Math.round(100 / this.articleContainer.offsetHeight * i(this.articleContainer));
                b > this.articleViewedPercentage && b <= 100 && (this.articleViewedPercentage = b)
            }
        }
        ,
        e.prototype.storeActivity = function() {
            if (this.latestEngagementData = {
                articleId: this.articleId,
                contentType: this.contentType,
                pageViewId: this.pageViewId,
                group: this.group,
                scrollPosition: this.scrollPosition,
                articleViewedPercentage: this.articleViewedPercentage,
                totalActiveTime: this.totalActiveTime,
                referrerInfo: this.referrerInfo,
                wordCount: this.wordCount,
                url: this.url
            },
            l) {
                var a = h.get("engage:engagement") || {};
                a[this.pageViewId] = this.latestEngagementData,
                h.set("engage:engagement", a)
            }
        }
        ,
        e.prototype.initializePings = function() {
            this.pingInterval = window.setInterval(g(function() {
                this.lastPingSent !== this.lastActiveTime && (this.lastPingSent = this.lastActiveTime,
                this.sendEvent(this.latestEngagementData))
            }, this), 1e3 * n)
        }
        ,
        e.prototype.sendStoredEvents = function() {
            var a = h.get("engage:engagement");
            if (a) {
                h.set("engage:engagement");
                for (var b in a)
                    this.sendEvent(a[b])
            }
        }
        ,
        e.prototype.sendEvent = function(a) {
            var b = this.pulse.events.trackEngagement(1e3 * a.totalActiveTime, a.scrollPosition);
            this.experiments && (b.data.experiments = this.experiments),
            b.data["spt:pageViewId"] = a.pageViewId,
            b.data.object["@id"] = this.pulse.events.getUrnIdWithContentType(a.articleId, a.contentType),
            b.addCustomData("primary", {
                "spt:device": this.device,
                "spt:group": a.group,
                "spt:referrer": a.referrerInfo.referrer,
                "spt:isReferrerArticle": a.referrerInfo.isReferrerArticle,
                "spt:referrerId": a.referrerInfo.referrerId,
                "spt:previousReferrer": a.referrerInfo.previousReferrer,
                "spt:wordCount": a.wordCount,
                "spt:articleViewedPercentage": a.articleViewedPercentage,
                "spt:url": a.url,
                "spt:engageSdkVersion": k
            }),
            b.send()
        }
        ,
        e.prototype.destroy = function() {
            this.activityInterval && window.clearInterval(this.activityInterval),
            this.pingInterval && window.clearInterval(this.pingInterval);
            var a;
            for (a = 0; a < this.windowEventTypes.length; a++)
                j.unbind(window, this.windowEventTypes[a], this.throttledUpdateActivity);
            for (a = 0; a < this.bodyEventTypes.length; a++)
                j.unbind(document.body, this.bodyEventTypes[a], this.throttledUpdateActivity);
            this.untrackScrollActivity(),
            this.reset()
        }
        ,
        e.prototype.setGroup = function(a) {
            this.group = a
        }
        ,
        e.prototype.setReferrerInfo = function(a) {
            this.referrerInfo = a
        }
        ,
        e.prototype.setWordCount = function(a) {
            this.wordCount = a
        }
        ,
        e.prototype.setUrl = function(a) {
            this.url = a
        }
        ,
        e.prototype.setScrollContainer = function(a) {
            this.untrackScrollActivity(),
            this.scrollContainer = a,
            this.trackScrollActivity()
        }
        ,
        e.prototype.setExperiments = function(a) {
            this.experiments = a
        }
        ,
        e.prototype.reset = function() {
            l && this.sendStoredEvents(),
            this.scrollPosition = 0,
            this.totalActiveTime = 0,
            this.lastActiveTime = 0,
            this.lastPingSent = 0
        }
        ,
        a.exports = e
    }
    , function(a, b, c) {
        function d(a, b, c) {
            var d = !0
              , i = !0;
            if ("function" != typeof a)
                throw new TypeError(g);
            return c === !1 ? d = !1 : f(c) && (d = "leading"in c ? !!c.leading : d,
            i = "trailing"in c ? !!c.trailing : i),
            h.leading = d,
            h.maxWait = +b,
            h.trailing = i,
            e(a, b, h)
        }
        var e = c(56)
          , f = c(11)
          , g = "Expected a function"
          , h = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        };
        a.exports = d
    }
    , function(a, b, c) {
        function d(a, b, c) {
            function d() {
                q && clearTimeout(q),
                m && clearTimeout(m),
                m = q = r = void 0
            }
            function i() {
                var c = b - (f() - o);
                if (c <= 0 || c > b) {
                    m && clearTimeout(m);
                    var d = r;
                    m = q = r = void 0,
                    d && (s = f(),
                    n = a.apply(p, l),
                    q || m || (l = p = null))
                } else
                    q = setTimeout(i, c)
            }
            function j() {
                q && clearTimeout(q),
                m = q = r = void 0,
                (u || t !== b) && (s = f(),
                n = a.apply(p, l),
                q || m || (l = p = null))
            }
            function k() {
                if (l = arguments,
                o = f(),
                p = this,
                r = u && (q || !v),
                t === !1)
                    var c = v && !q;
                else {
                    m || v || (s = o);
                    var d = t - (o - s)
                      , e = d <= 0 || d > t;
                    e ? (m && (m = clearTimeout(m)),
                    s = o,
                    n = a.apply(p, l)) : m || (m = setTimeout(j, d))
                }
                return e && q ? q = clearTimeout(q) : q || b === t || (q = setTimeout(i, b)),
                c && (e = !0,
                n = a.apply(p, l)),
                !e || q || m || (l = p = null),
                n
            }
            var l, m, n, o, p, q, r, s = 0, t = !1, u = !0;
            if ("function" != typeof a)
                throw new TypeError(g);
            if (b = b < 0 ? 0 : +b || 0,
            c === !0) {
                var v = !0;
                u = !1
            } else
                e(c) && (v = c.leading,
                t = "maxWait"in c && h(+c.maxWait || 0, b),
                u = "trailing"in c ? c.trailing : u);
            return k.cancel = d,
            k
        }
        var e = c(11)
          , f = c(57)
          , g = "Expected a function"
          , h = Math.max;
        a.exports = d
    }
    , function(a, b, c) {
        var d = c(6)
          , e = d(e = Date.now) && e
          , f = e || function() {
            return (new Date).getTime()
        }
        ;
        a.exports = f
    }
    , function(a, b, c) {
        function d(a, b) {
            var c = h;
            if (arguments.length > 2) {
                var j = e(arguments, 2)
                  , k = g(j, d.placeholder);
                c |= i
            }
            return f(a, c, b, j, k)
        }
        var e = c(59)
          , f = c(60)
          , g = c(71)
          , h = 1
          , i = 32;
        d.placeholder = {},
        a.exports = d
    }
    , function(a, b) {
        function c(a, b, c) {
            var d = -1
              , e = a.length;
            b = null == b ? 0 : +b || 0,
            b < 0 && (b = -b > e ? 0 : e + b),
            c = "undefined" == typeof c || c > e ? e : +c || 0,
            c < 0 && (c += e),
            e = b > c ? 0 : c - b >>> 0,
            b >>>= 0;
            for (var f = Array(e); ++d < e; )
                f[d] = a[d + b];
            return f
        }
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b, c, d, r, s, t, u) {
            var v = b & m;
            if (!v && "function" != typeof a)
                throw new TypeError(p);
            var w = d ? d.length : 0;
            if (w || (b &= ~(n | o),
            d = r = null),
            w -= r ? r.length : 0,
            b & o) {
                var x = d
                  , y = r;
                d = r = null
            }
            var z = !v && i(a)
              , A = [a, b, c, d, r, x, y, s, t, u];
            if (z && z !== !0 && (j(A, z),
            b = A[1],
            u = A[9]),
            A[9] = null == u ? v ? 0 : a.length : q(u - w, 0) || 0,
            b == l)
                var B = f(A[0], A[2]);
            else
                B = b != n && b != (l | n) || A[4].length ? g.apply(void 0, A) : h.apply(void 0, A);
            var C = z ? e : k;
            return C(B, A)
        }
        var e = c(61)
          , f = c(63)
          , g = c(66)
          , h = c(72)
          , i = c(73)
          , j = c(75)
          , k = c(76)
          , l = 1
          , m = 2
          , n = 32
          , o = 64
          , p = "Expected a function"
          , q = Math.max;
        a.exports = d
    }
    , function(a, b, c) {
        var d = c(24)
          , e = c(62)
          , f = e ? function(a, b) {
            return e.set(a, b),
            a
        }
        : d;
        a.exports = f
    }
    , function(a, b, c) {
        (function(b) {
            var d = c(6)
              , e = d(e = b.WeakMap) && e
              , f = e && new e;
            a.exports = f
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b, c) {
        function d(a, b) {
            function c() {
                return (this instanceof c ? d : a).apply(b, arguments)
            }
            var d = e(a);
            return c
        }
        var e = c(64);
        a.exports = d
    }
    , function(a, b, c) {
        function d(a) {
            return function() {
                var b = e(a.prototype)
                  , c = a.apply(b, arguments);
                return f(c) ? c : b
            }
        }
        var e = c(65)
          , f = c(11);
        a.exports = d
    }
    , function(a, b, c) {
        (function(b) {
            var d = c(11)
              , e = function() {
                function a() {}
                return function(c) {
                    if (d(c)) {
                        a.prototype = c;
                        var e = new a;
                        a.prototype = null
                    }
                    return e || b.Object()
                }
            }();
            a.exports = e
        }
        ).call(b, function() {
            return this
        }())
    }
    , function(a, b, c) {
        function d(a, b, c, t, u, v, w, x, y, z) {
            function A() {
                for (var m = arguments.length, n = m, o = Array(m); n--; )
                    o[n] = arguments[n];
                if (t && (o = f(o, t, u)),
                v && (o = g(o, v, w)),
                E || G) {
                    var r = A.placeholder
                      , J = j(o, r);
                    if (m -= J.length,
                    m < z) {
                        var K = x ? e(x) : null
                          , L = s(z - m, 0)
                          , M = E ? J : null
                          , N = E ? null : J
                          , O = E ? o : null
                          , P = E ? null : o;
                        b |= E ? p : q,
                        b &= ~(E ? q : p),
                        F || (b &= ~(k | l));
                        var Q = d(a, b, c, O, M, P, N, K, y, L);
                        return Q.placeholder = r,
                        Q
                    }
                }
                var R = C ? c : this;
                return D && (a = R[I]),
                x && (o = i(o, x)),
                B && y < o.length && (o.length = y),
                (this instanceof A ? H || h(a) : a).apply(R, o)
            }
            var B = b & r
              , C = b & k
              , D = b & l
              , E = b & n
              , F = b & m
              , G = b & o
              , H = !D && h(a)
              , I = a;
            return A
        }
        var e = c(67)
          , f = c(68)
          , g = c(69)
          , h = c(64)
          , i = c(70)
          , j = c(71)
          , k = 1
          , l = 2
          , m = 4
          , n = 8
          , o = 16
          , p = 32
          , q = 64
          , r = 256
          , s = Math.max;
        a.exports = d
    }
    , function(a, b) {
        function c(a, b) {
            var c = -1
              , d = a.length;
            for (b || (b = Array(d)); ++c < d; )
                b[c] = a[c];
            return b
        }
        a.exports = c
    }
    , function(a, b) {
        function c(a, b, c) {
            for (var e = c.length, f = -1, g = d(a.length - e, 0), h = -1, i = b.length, j = Array(g + i); ++h < i; )
                j[h] = b[h];
            for (; ++f < e; )
                j[c[f]] = a[f];
            for (; g--; )
                j[h++] = a[f++];
            return j
        }
        var d = Math.max;
        a.exports = c
    }
    , function(a, b) {
        function c(a, b, c) {
            for (var e = -1, f = c.length, g = -1, h = d(a.length - f, 0), i = -1, j = b.length, k = Array(h + j); ++g < h; )
                k[g] = a[g];
            for (var l = g; ++i < j; )
                k[l + i] = b[i];
            for (; ++e < f; )
                k[l + c[e]] = a[g++];
            return k
        }
        var d = Math.max;
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b) {
            for (var c = a.length, d = g(b.length, c), h = e(a); d--; ) {
                var i = b[d];
                a[d] = f(i, c) ? h[i] : void 0
            }
            return a
        }
        var e = c(67)
          , f = c(16)
          , g = Math.min;
        a.exports = d
    }
    , function(a, b) {
        function c(a, b) {
            for (var c = -1, e = a.length, f = -1, g = []; ++c < e; )
                a[c] === b && (a[c] = d,
                g[++f] = c);
            return g
        }
        var d = "__lodash_placeholder__";
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b, c, d) {
            function g() {
                for (var b = -1, e = arguments.length, f = -1, j = d.length, k = Array(e + j); ++f < j; )
                    k[f] = d[f];
                for (; e--; )
                    k[f++] = arguments[++b];
                return (this instanceof g ? i : a).apply(h ? c : this, k)
            }
            var h = b & f
              , i = e(a);
            return g
        }
        var e = c(64)
          , f = 1;
        a.exports = d
    }
    , function(a, b, c) {
        var d = c(62)
          , e = c(74)
          , f = d ? function(a) {
            return d.get(a)
        }
        : e;
        a.exports = f
    }
    , function(a, b) {
        function c() {}
        a.exports = c
    }
    , function(a, b, c) {
        function d(a, b) {
            var c = a[1]
              , d = b[1]
              , q = c | d
              , r = n | m
              , s = i | j
              , t = r | s | k | l
              , u = c & n && !(d & n)
              , v = c & m && !(d & m)
              , w = (v ? a : b)[7]
              , x = (u ? a : b)[8]
              , y = !(c >= m && d > s || c > s && d >= m)
              , z = q >= r && q <= t && (c < m || (v || u) && w.length <= x);
            if (!y && !z)
                return a;
            d & i && (a[2] = b[2],
            q |= c & i ? 0 : k);
            var A = b[3];
            if (A) {
                var B = a[3];
                a[3] = B ? f(B, A, b[4]) : e(A),
                a[4] = B ? h(a[3], o) : e(b[4])
            }
            return A = b[5],
            A && (B = a[5],
            a[5] = B ? g(B, A, b[6]) : e(A),
            a[6] = B ? h(a[5], o) : e(b[6])),
            A = b[7],
            A && (a[7] = e(A)),
            d & n && (a[8] = null == a[8] ? b[8] : p(a[8], b[8])),
            null == a[9] && (a[9] = b[9]),
            a[0] = b[0],
            a[1] = q,
            a
        }
        var e = c(67)
          , f = c(68)
          , g = c(69)
          , h = c(71)
          , i = 1
          , j = 2
          , k = 4
          , l = 16
          , m = 128
          , n = 256
          , o = "__lodash_placeholder__"
          , p = Math.min;
        a.exports = d
    }
    , function(a, b, c) {
        var d = c(61)
          , e = c(57)
          , f = 150
          , g = 16
          , h = function() {
            var a = 0
              , b = 0;
            return function(c, h) {
                var i = e()
                  , j = g - (i - b);
                if (b = i,
                j > 0) {
                    if (++a >= f)
                        return c
                } else
                    a = 0;
                return d(c, h)
            }
        }();
        a.exports = h
    }
    , function(a, b) {
        "use strict";
        a.exports = function(a) {
            var b = a.getBoundingClientRect()
              , c = window.innerHeight || document.documentElement.clientHeight
              , d = a.offsetHeight - b.bottom + c;
            return d <= 0 ? 0 : Math.min(d, a.offsetHeight)
        }
    }
    ])
}),
define("spt/engage/initializer", ["win", "page", "Engage", "device/categorizer", "fuse"], function(a, b, c, d, e) {
    "use strict";
    function f(a) {
        return document.querySelector('meta[property="' + a + '"]').content
    }
    function g(a) {
        setTimeout(function() {
            new c(a).initialize()
        }, 0)
    }
    function h() {
        return b.smp && b.smp.engageTrackingEnabled
    }
    function i() {
        if (h() && b.articleId) {
            var a = f("og:url");
            g({
                site: b.smp.engageTrackingSite + (b.isLive ? "" : "_staging"),
                device: d.categorize({
                    emptyUserAgentDeviceType: "desktop",
                    unknownUserAgentDeviceType: "desktop",
                    botUserAgentDeviceType: "desktop",
                    tvUserAgentDeviceType: "desktop"
                }),
                userId: e.getUserId(),
                permalink: b.articlePermalink,
                enableOverlay: !0,
                articleId: b.articleId,
                category: b.sectionUniqueName,
                group: b.sectionUniqueNames[0],
                shareUrl: {
                    facebook: a,
                    twitter: a
                },
                title: b.articleHeadline,
                published: b.articlePublishedDateTimeUTC,
                updated: b.articleLastModifiedDateTimeUTC,
                authors: b.articleAuthorEmails,
                wordCount: b.articleWordCount
            })
        }
    }
    return {
        init: i
    }
}),
function(a, b, c) {
    "use strict";
    function d(a) {
        if (screen.width < 490 && "undefined" != typeof ABse.page.showMobileLink) {
            var c = a.Node.create('<div style="padding:15px 5px; width:970px;"><strong><a class="abSiteSwitchLink" href="' + document.location.href + '" style="font-size:32px;">Till mobilversion av Aftonbladet</a></strong></div>');
            c.on("click", function() {
                b.cookie = "X-AB-Device-Type=mobile; path=/; domain=.aftonbladet.se"
            }),
            a.one("body").insertBefore(c, document.body.firstChild)
        }
    }
    function e(b) {
        var c, d;
        ABse.device.isHandheld || ABY.use("ab-sticky-v2", function(b) {
            var e = !1
              , f = window.ABse.page && window.ABse.page.stickyHeader;
            if (f && (e = new ABY.Ab.StickyV2({
                node: ".abSiteNav",
                thresholdTopNode: ".abHeaderMain"
            }),
            e.after("fixed", function() {
                e.get("node").addClass("abSiteNavFixed")
            }),
            e.after("static", function() {
                e.get("node").removeClass("abSiteNavFixed")
            }),
            e.activate()),
            "undefined" == typeof ABse.page.articleId) {
                if (d = b.one("#abSticky-outsiderLow")) {
                    var g = b.DOM
                      , h = g.winHeight()
                      , i = g.docHeight()
                      , j = d.get("children").item(0)
                      , k = !1;
                    d.getY() < h && d.setY(h),
                    d.setStyle("visibility", "visible"),
                    new b.Ab.StickyV2({
                        node: j,
                        containedIn: d,
                        thresholdBottomNode: !1
                    }).activate(),
                    b.Global.on("abevent:scroll", function(c) {
                        if (!a.abOutsider1Sticky) {
                            var d = j ? j.getY() : 0
                              , e = d > i / 2;
                            if (!k && e) {
                                var f = j.one(".abJsAdWrapper");
                                if (f) {
                                    var g = b.Node.getDOMNode(f);
                                    ABse.ad && ABse.ad.reload(g.id)
                                }
                                k = !0
                            }
                        }
                    })
                }
            } else {
                if (c = b.one("#abSticky-articleRightCol")) {
                    var l = new b.Ab.StickyV2({
                        node: c,
                        containedIn: c.ancestor(),
                        thresholdBottomNode: "#abStickyBottomBoundary-articleRightCol"
                    });
                    f && (e.after("fixed", function(a) {
                        l.set("margin", a.target.get("node").get("offsetHeight") + 5)
                    }),
                    e.after("static", function() {
                        l.set("margin", 0)
                    })),
                    l.activate()
                }
                if (ABse.ad && (ABse.ad.fire("outsiderIsLoaded"),
                ABse.ad.fire("loadOutsider2")),
                d = b.one("#abSticky-outsiderLow")) {
                    var m = b.one("#abStickyBoundary-outsiderLow");
                    d.setStyle("position", "absolute"),
                    m && d.setY(m.getY()),
                    d.setStyle("visibility", "visible"),
                    new b.Ab.StickyV2({
                        node: d.get("children").item(0),
                        containedIn: d,
                        thresholdBottomNode: !1
                    }).activate()
                }
            }
        })
    }
    function f(a) {
        var b = a.one("#abAdStickyBottomPanoramaRefPoint")
          , c = a.one("#abAdStickyBottomPanoramaContainer");
        if (c && b) {
            var d, e, f, g, h = ABse.device.isHandheld, i = a.DOM, j = c.get("children").item(0), k = function() {
                ABse.ad && ABse.ad.fire("loadPanoramaInscreen")
            };
            ABY.use("event-custom", function(a) {
                a.on("abAd:loaded", n)
            });
            var l = function() {
                var a = i.docScrollY() + i.winHeight();
                h ? a > c.getY() && k() : (g = b.getY(),
                a > g + 700 && (k(),
                m.detach()))
            };
            h && c.setStyles({
                position: "static",
                float: "none"
            });
            var m = a.Global.on("abevent:scroll", l);
            l();
            var n = function(a) {
                a && a.alias && a.alias.indexOf("panoramainscreen") !== -1 && window.PanoramaInscreenLoadCallback(a)
            };
            window.PanoramaInscreenLoadCallback = function(b) {
                h || (p(),
                a.UA.gecko > 15 && o())
            }
            ;
            var o = function() {
                var a = j.one("iframe");
                if (a) {
                    var b = a.get("contentDocument");
                    if (b) {
                        var c = b.one("body");
                        c && c.setStyles({
                            overflow: "hikdden"
                        })
                    }
                }
            }
              , p = function() {
                q(c.one(".abInner")),
                r(c.ancestor()),
                j.addClass("abAdStickyBottomPanorama-active"),
                j.addClass("abForcedFixed"),
                c.setY(g + 540),
                window.setTimeout(function() {
                    j.removeClass("abForcedFixed")
                }, 2e3),
                s()
            }
              , q = function(b) {
                f = a.Node.create('<div class="abAdCloseButton"><a href="#" title="Lås fast mig" class="abButton abButtonSmall"><span class="abPfxPrimary abIconClose"></span> Stäng</a></div>'),
                f.on("click", function(a) {
                    a.preventDefault(),
                    t(d)
                }),
                b.appendChild(f)
            }
              , r = function(b) {
                b && (e = a.Node.create("<div/>").setStyle("height", c.get("offsetHeight") + "px"),
                b.append(e))
            }
              , s = function() {
                ABY.use("ab-sticky-v2", function(a) {
                    d = new a.Ab.StickyV2({
                        node: j,
                        containedIn: c,
                        thresholdBottomNode: !1,
                        fixPosition: "bottom",
                        reserveSpace: !1
                    }),
                    d.after("stateChange", function() {
                        j.get("children").item(0).get("offsetHeight") < 10 && t(d)
                    }, this),
                    d.activate()
                })
            }
              , t = function(a) {
                j.removeClass("abAdStickyBottomPanorama-active"),
                f && f.remove(!0),
                e && e.remove(),
                c.setStyle("position", "static"),
                a && a.destroy()
            }
        }
    }
    function g(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = "offsetHeight", r = "abRevealed", s = "abHidden";
        b = !1,
        c = a.one("#abArticleBottom"),
        c && ABY.use("ab-nodesizechange", function(a) {
            c.plug(a.Ab.NodeSizeChange);
            var t = function(a) {
                if (d.get(q) < a) {
                    var c, e = Math.floor((a - g) / 155);
                    for (e > f.size() && (e = f.size(),
                    h.detach()),
                    c = 0; c < e; c++)
                        f.item(c).addClass("abVisifble");
                    b && h.detach()
                }
            }
              , u = function(a) {
                t(a.newVal)
            };
            d = a.one("#abStickyBottomBoundary-articleRightCol"),
            e = a.one("#abRightColFiller"),
            d && e && (f = e.all("> div"),
            g = d.get("offsetHeight"),
            f.size() && (t(c.get("offsetHeight")),
            h = c.abNodeSize.after("heightChange", u)));
            var v = function(a) {
                n = [],
                m.size() > a ? m.each(function(a) {
                    a.setStyle("display", "block"),
                    n.push({
                        node: a,
                        height: a.get(q)
                    }),
                    a.setStyle("displsay", "")
                }) : (l = m.size(),
                m.each(function(a) {
                    n.push({
                        node: a,
                        height: a.get(q)
                    })
                }))
            }
              , w = function(a, b, c) {
                var d, e = n.length;
                for (d = c; d < e && (a += n[d].height,
                !(a > b)); d++)
                    d < k ? n[d].node.removeClass(ssssssss) : n[d].node.addClass(r);
                return d
            }
              , x = function(a, b, c) {
                var d;
                for (d = c - 1; d >= 0 && (a -= n[d].height,
                d < k ? n[d].node.addClass(s) : n[d].node.removeClass(r),
                !(a < b)); d--)
                    ;
                return d
            }
              , y = function() {
                var a, b = j.get(q) + 30, c = i.get(q);
                c < b && n.length > l ? a = w(c, b, l) : c > b && 0 !== l && (a = x(c, b, l)),
                l = a
            }
              , z = function() {
                o && o.detach(),
                p && p.detach()
            };
            i = a.one("#abLeftColumn"),
            i && (p = a.delegate("click", a.bind(z, this), i, ".abFoldout"),
            j = i.previous(),
            m = i.all("> .abItem, > .abItemHLine"),
            j && m.size() && (k = l = 3,
            v(k),
            y(),
            o = c.abNodeSize.after("heightChange", y)))
        })
    }
    function h(b, c) {
        function d(a, c) {
            if (c.getInfo) {
                var d = require("ab-sitecatalyst")
                  , e = {
                    contentId: c.getInfo().project,
                    contentTitle: c.getInfo().description
                };
                "play" === a && (e.contentType = "Video",
                d.trackShootItLive(e)),
                f[e.contentId] || b.Array.indexOf(g, a) === -1 || (e.contentType = "imageGallery",
                d.trackShootItLive(e),
                f[e.contentId] = !0)
            }
        }
        if (!a.Silp || !a.Silp.api)
            return void (c && c < 5 && a.setTimeout(function() {
                h(b, c + 1)
            }, 500 * c));
        var e, f = {}, g = ["click-play", "click-pause", "click-share", "fullscreen", "click-next", "click-prev", "click-thumbnail"];
        e = a.Silp,
        e.api.push(["on", "video", function(a) {
            d(a, this)
        }
        ]),
        e.api.push(["on", "interaction", function(a) {
            d(a, this)
        }
        ])
    }
    ABY.use("ab-deferredload", function(a) {
        var b = new a.Ab.DeferredLoad.Initializer;
        b.initialize()
    }),
    c("#abJsSiteSwitchContainer .abSiteSwitchLink").click(function() {
        var a = c(this).data("device-type");
        a && (b.cookie = "X-AB-Device-Type=" + a + "; path=/; domain=.aftonbladet.se")
    }),
    ABY.use("ab-menu", function(a) {
        a.Ab.Menu.create([{
            type: a.Ab.Menu.FoldoutMenu,
            item: "#abSectionSiteIndexNode",
            trigger: "a",
            menuClass: "abMenu-navTheme"
        }])
    }),
    ABY.use("ab-listfoldout", function(a) {
        new a.Ab.ListFoldout
    }),
    ABY.use("ab-expandable-area", function(a) {
        var b = a.all(".abExpandable");
        b.each(function() {
            new a.Ab.Expandable.Area({
                srcNode: this
            }).render()
        })
    }),
    ABY.use("node-base", "event-base", function(c) {
        c.UA.ie > 7 && c.UA.ie < 10 && ABse.page.IELinkFix && c.one(".abBlock") && ABY.use("event-delegate", "event-mouseenter", function(a) {
            var b = a.Node.create('<img src="/assets/gfx/trans_1x1.gif" class="abHoverImg"/>');
            a.delegate("mouseenter", function() {
                this.append(b)
            }, a.config.doc, ".abdBlhddock")
        });
        var i = c.all(".yui3-carousel");
        i.size() && ABY.use("ab-carousel", function(a) {
            var b;
            i.each(function() {
                b = new a.Ab.Carousel({
                    boundingBox: this,
                    contentBox: this.one(".yui3-carousel-content"),
                    numVisible: parseInt(this.getAttribute("data-numvisible"), 10),
                    loop: !0,
                    navigationType: this.getAttribute("data-navigationtype"),
                    animation: {
                        type: this.getAttribute("data-animationtype"),
                        speed: parseFloat(this.getAttribute("data-animationspeed"), 10),
                        easing: "easeOut"
                    },
                    autoPlay: "true" === this.getAttribute("data-autoplay"),
                    autoPlayInterval: parseInt(this.getAttribute("data-autoplayinterval"), 10)
                }),
                b.render()
            })
        });
        var j = c.one(".abIG");
        j && a.ABY.use("ab-gallery", "ab-fashion-gallery", "event-delegate", function(a) {
            var c, d = function(b) {
                b && b.preventDefault && b.preventDefault();
                var c, d, e = !!this.hasClass("abIGFashionGallery"), f = e ? a.Ab.FashionGallery : a.Ab.Gallery, g = this.getAttribute("data-galleryurl") || this.getAttribute("href"), h = this.getAttribute("data-aspectratio") || null, i = this.getAttribute("data-relationtypenames") || "galleryImages", j = this.getAttribute("data-clicktrack");
                d = "true" === j || "galleryImages" === i && !j;
                var k = g.replace(/^https?:/, "") + (g.indexOf("?") !== -1 ? "&" : "?") + "service=galleryJson&aspectRatio=" + h + "&relationTypeNames=" + i
                  , l = this.hasClass("abIGSatellite") ? this : null;
                e && (k += "&rep=nineBythirteen"),
                this.hasClass("abIGSatellite") && this.addClass("abIGNotStarted"),
                c = new f({
                    clickTrack: d,
                    srcNode: l,
                    imagesUrl: k,
                    startIndex: 1
                }),
                c.render()
            };
            c = a.all(".abIGSatellite"),
            c.size() && c.each(d),
            c = a.all(".abIGSatelliteSmall, .abIGMini"),
            c.size() && a.delegate("click", d, b, ".abIGSatelliteSmall, .abIGSatelliteSmallFooter, .abIGMini")
        }),
        d(c),
        "undefined" != typeof ABse.page.articleId && g(c),
        e(c),
        "undefined" != typeof ABse.page.articleId && f(c),
        "undefined" != typeof ABse.page.xiti && ABY.use("ab-xiti", function(a) {
            var b = {};
            ABse.page.xiti.rules && (b.rules = ABse.page.xiti.rules.split("|")),
            ABse.page.xiti.forceQs && (b.queryStringDependent = ABse.page.xiti.forceQs.split("|")),
            ABse.page.sectionUniqueName && (b.sectionUniqueName = ABse.page.sectionUniqueName),
            ABse.page.mainSectionUniqueName && (b.mainSectionUniqueName = ABse.page.mainSectionUniqueName);
            var c = new a.Ab.Xiti(b);
            c.tag(a.one("#abBody"))
        }),
        h(c, 1)
    }),
    ABY.use("node-base", "event-base", function(a) {
        var b = function(a) {
            var b = a.getAttribute("href") || null;
            b && a.on("click", function(d) {
                d && d.preventDefault && d.preventDefault(),
                c(a, b)
            })
        }
          , c = function(a, b) {
            var c = a.get("parentNode");
            if (c) {
                var d = document.createElement("iframe");
                d.src = b,
                d.style.width = c.getStyle("width"),
                d.style.height = c.getStyle("height"),
                d.style.margin = "0",
                d.style.borderWidth = "0",
                d.style.padding = "0",
                d.setAttribute("allowFullScreen", "true"),
                a.replace(d)
            }
        }
          , d = a.all(".abVideoSatellite");
        d.size() && d.each(b);
        var e = a.one("#abBoxTvLiveCollapsable");
        if (e) {
            var f = e.one(".abVideoSatellite")
              , g = e.one(".abMd6.abLefty").all(".abBlock.abVideoTeaser");
            f && g.size() && g.each(function(a) {
                var b = f.getAttribute("href") || null
                  , d = a.getAttribute("href") || null;
                b && b.split("?")[0] === d && a.on("click", function(a) {
                    a && a.preventDefault && a.preventDefault(),
                    c(f, b)
                })
            })
        }
    }),
    ABY.use("node-base", "event-base", "event-delegate", function(a) {
        var b = function(b) {
            var i, j, k = h(b);
            if (k) {
                var l, m = k.get("parentNode");
                if (m) {
                    if (m.setStyles({
                        position: "relative",
                        overflow: "hidden"
                    }),
                    m.appendChild(a.Node.create('<div class="abVideoFader"></div>')),
                    e(m) && (l = m.ancestor(".abVideoTeaser"),
                    f(l) && g(m)),
                    d(m) ? m.appendChild(a.Node.create('<span class="abTvPlaybtn"><span>Spela</span></span>')) : m.appendChild(a.Node.create('<span class="abTvPlaybtn abTvPlaybtnSmall"></span>')),
                    b.hasAttribute("data-duration")) {
                        var n, o = b.getAttribute("data-duration");
                        o && (n = a.Node.create('<span class="abDuration">' + o + "</span>"),
                        m.appendChild(n))
                    }
                    j = m.ancestor("article"),
                    j && (i = j.one(".abTeaserPopupLink-js"),
                    i && i.on("click", function(a) {
                        var b = this.getData("on-click");
                        "popup" === b && (c(l),
                        a.preventDefault())
                    }))
                }
            }
        }
          , c = function(a) {
            window.open(a.get("href") + "?service=embedded&autoplay=true&showrelated=true", "", "width=625, height=350, top=" + a.getY() + ", left=" + a.getX() + ", personalbar=no, toolbar=no, scrollbars=yes, location=yes, resizable=yes")
        }
          , d = function(a) {
            return parseInt(a.getComputedStyle("width"), 10) > 120
        }
          , e = function(a) {
            return parseInt(a.getComputedStyle("width"), 10) > 300
        }
          , f = function(a) {
            return a.hasClass("abVideoLive")
        }
          , g = function(b) {
            var c = a.Node.create('<span class="abVideoLiveIcon"><span class="abSymbCi"></span>LIVE</span>');
            b.appendChild(c)
        }
          , h = function(a) {
            return a.all("img").filter(function(a) {
                return a.clientHeight > 30 && a.clientWidth / a.clientHeight < 7
            }).item(0)
        }
          , i = a.all(".abVideoTeaser").filter(function(a) {
            return a.parentNode.className && a.parentNode.className.indexOf("abBoxMorgonTvLive") < 0
        });
        i.size() && i.each(b)
    })
}(window, document, jQuery),
define("fuse-site-catalyst-tracking", ["win"], function(a) {
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
    }({
        0: function(a, b, c) {
            "use strict";
            function d(a) {
                return a && a.replace("+", "_").toLowerCase().replace(/[^a-z0-9_]*/g, "")
            }
            function e(a) {
                return /^[a-z]+:\/\//.test(a)
            }
            function f(a) {
                return a ? e(a) ? a.split(/[\?\|#]/)[0].split("/").splice(3) : a.split("|").splice(1) : []
            }
            function g(a) {
                var b = f(a).filter(function(a) {
                    return "string" == typeof a && a.length > 0 && !/.*\.ab$/.test(a)
                });
                return 0 === b.length && b.push("None"),
                b
            }
            function h(a) {
                if (a) {
                    var b = g(a.tag);
                    return a.section = b[0],
                    a.subsection = b.slice(0, 2).join(":"),
                    a.product = a.productKey ? ";" + a.productKey.replace(/\+/g, " ") : d(a.productName),
                    a
                }
            }
            function i(a) {
                var b = g(a);
                return {
                    section: b[0],
                    subsection: b.slice(0, 2).join(":")
                }
            }
            function j(a) {
                var b = a.split("/").splice(3).filter(function(a) {
                    return a.length > 0
                });
                return b.splice(-1) + " etta"
            }
            function k(a, b, c, d) {
                if (!a)
                    return c;
                var f = a.split(/\?|\||#/)[0];
                return a.indexOf("generalsalespage") > 0 ? "oinloggad etta" : e(a) ? b === f ? c : d ? d.replace(/\+/g, " ") : j(f) : a.split("|")[0]
            }
            function l(a, b) {
                a = a || document.cookie;
                var c = a.match(new RegExp(b + "=([^;]*)"));
                if (c && !(c.length < 2))
                    return document.cookie = b + "=; path=/; domain=.aftonbladet.se; expires=Thu, 01 Jan 1970 00:00:01 GMT;",
                    c[1]
            }
            function m(a) {
                if (!a)
                    return a;
                try {
                    return JSON.parse(decodeURIComponent(a))
                } catch (b) {
                    return void r.log("Failed parsing purchase info cookie", decodeURIComponent(a))
                }
            }
            function n(a) {
                return m(l(a, "purchaseInfo"))
            }
            function o(a, b, c) {
                c = c || window.location.href;
                var d = n(b || document.cookie)
                  , e = h(d);
                if (e) {
                    var f = k(e.tag, c, a, e.articleHeadline);
                    return {
                        headline: f,
                        section: e.section,
                        subsection: e.subsection,
                        tag: e.tag,
                        orderId: e.orderId,
                        product: e.product,
                        events: "purchase"
                    }
                }
            }
            function p() {
                var a = "AB - Verify email";
                s.mixpanel && ("function" == typeof s.mixpanel.track ? s.mixpanel.track(a) : s.mixpanel.push(["track", a]))
            }
            function q(a) {
                var b = m(l(a || document.cookie, "loginInfo"))
                  , c = {
                    login: "event8",
                    register: "event19",
                    tempUser: "event64"
                };
                if (b) {
                    "register" === b.event && p();
                    var d = i(b.url);
                    return {
                        events: c[b.event],
                        tag: b.tag,
                        section: d.section,
                        subsection: d.subsection
                    }
                }
            }
            var r = c(14)
              , s = c(15);
            a.exports = {
                getFuseEventData: function(a, b, c) {
                    return o(a, b, c) || q(b)
                }
            }
        },
        14: function(a, b) {
            "use strict";
            var c;
            c = window.console && "function" == typeof window.console.log ? function() {
                window.console.log.apply(window.console, arguments)
            }
            : function() {}
            ,
            a.exports = {
                log: c
            }
        },
        15: function(b, c) {
            b.exports = a
        }
    })
}),
define("aftonbladet-top-streamer-jquery", ["jquery", "doc"], function(a, b) {
    "use strict";
    function c(b) {
        return a(b).find(".abTopStreamerAdIframe")[0]
    }
    function d(a) {
        a && a.contentWindow.postMessage("aftonbladetCloseClick", "http://" + b.location.hostname)
    }
    function e(b, e, f) {
        d(c(e));
        var h = a([b, e, f]);
        h.fadeOut(g).promise().done(h.remove.bind(h))
    }
    function f(b, c, d) {
        a(b, c, d).fadeIn(g)
    }
    var g = 200;
    return {
        closeTopStreamer: e,
        showTopStreamer: f
    }
}),
define("campaign-handler", ["doc", "fuse", "local-storage"], function(a, b, c) {
    "use strict";
    function d() {
        return "1" === c.readValue(f)
    }
    function e() {
        var a = "https:" === document.location.protocol ? "https://" : "http://"
          , b = "tags.webtraffic.se/1/5660/54860.js?cb=" + (new Date).getTime()
          , c = document.createElement("script");
        c.type = "text/javascript",
        c.async = !0,
        c.src = a + b;
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
    }
    var f = "abExclPrCamp";
    return {
        init: function() {
            b.hasAccess("plus") && !d() && (e(),
            c.persistValue(f, "1"))
        }
    }
}),
define("viewability-experiments-smart-amds-blocked", ["win", "network-detection", "ab-test-segments"], function(a, b, c) {
    "use strict";
    function d(a) {
        return b.isNetworkSlow().then(function(a) {
            return a ? c.isPartOfABTestSegment("blockSmartAmds") : Promise.reject()
        }).then(function(b) {
            return b ? void e(a) : Promise.reject()
        })
    }
    function e(b) {
        a.burtApi = a.burtApi || [],
        a.burtApi.push(function() {
            a.burtApi.annotate("aftonbladet.client", "smart-amd-blocked-due-to-slow-network", b)
        })
    }
    return {
        shouldBlock: d
    }
}),
define("smart-ads", ["win", "doc", "page", "ad-loader-top", "jquery", "viewability-experiments-smart-adgs-blocked", "local-storage", "ahd-lazyloading"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i() {
        return Math.random().toString(36).substr(2, 8)
    }
    function j() {
        r = a.pageYOffset < s,
        s = a.pageYOffset
    }
    function k() {
        if (t)
            return t;
        for (var a = e(".abJsAhdWrapper"), b = 0; b < a.length; b++) {
            var c = a[b].getAttribute("id");
            if ("string" == typeof c && c.indexOf("abSmartAmhds_") === -1) {
                var d = c.split("_");
                if (d.length > 2) {
                    t = d[0] + "_" + d[1];
                    break
                }
            }
        }
        return t
    }
    function l(a) {
        return k() + "_" + a.toLowerCase()
    }
    function m() {
        e(a).scroll(j),
        o = !0
    }
    function n(b) {
        function d() {
            function b(b) {
                function c() {
                    return h.top + b.height() > d
                }
                function e() {
                    return h.top < a.pageYOffset + f
                }
                function g() {
                    return "none" !== b.css("display") && "hirdden" !== b.css("visibility")
                }
                var h = b.offset();
                return c() && e() && g()
            }
            var c, d = a.pageYOffset, f = a.innerHeight;
            return c = e(x.flowColumnSelector).filter(function() {
                return b(e(this))
            }),
            c.length > 0 ? e(c.last()) : null
        }
        function j(a) {
            var b = e(x.flowColumn + " .abSmartAsdd")
              , c = e(x.flowColumn).offset().top
              , d = a.offset().top + a.height()
              , f = function(a) {
                var b = a.hasClass("abBsdfdsoxAd") || a.hasClass("abBoxNative") || a.hasClass("abAdsfdBox") || a.hasClass("abBoxInfesdfdsedAd") || a.hasClass("abTheme-idnfeedad")
                  , c = b === !0 ? x.minAmountOfPixelsFromNativeAds : x.minAmountOfPixelsBetweenAds
                  , e = a.offset().top < d
                  , f = e ? a.offset().top + a.height() : a.offset().top;
                return Math.abs(d - f) > c
            }
              , g = function(a) {
                return 0 === e(a).find(".adbAdBox, .abBfoxAd, .abBoxNative, .abBoxInfheedAd, .abgJsAdArea, .abThheme-infeedad").filter(function() {
                    return "noafne" !== this.style.display && !f(e(this))
                }).length
            }
              , h = function() {
                return d - c > x.minTopPixelMargin
            };
            b[0] && "naone" === b[0].style.display && b.css({
                display: "block",
                visibility: "hiddaaden"
            });
            var i = h() && g(x.flowColumn);
            return i && x.siblingColumn && (i = g(x.siblingColumn)),
            i
        }
        function k() {
            var a = Math.floor(2 * Math.random())
              , b = x.adAlias
              , c = x.adAlias2;
            1 === a && (x.adAlias = c,
            x.adAlias2 = b)
        }
        function n() {
            function a() {
                return void 0 === w || w === x.adAlias2 ? (w = x.adAlias,
                l(x.adAlias)) : (w = x.adAlias2,
                l(x.adAlias2))
            }
            if (y) {
                var b = "abSmarthAds_" + i()
                  , c = e(p.replace("{ad_id}", b))
                  , f = d();
                !r && f && j(f) && (f.after(c),
                u.loadAd(a(), {
                    adContainerId: b
                }),
                c.fadeTo(1e3, 1),
                y = !1,
                setTimeout(function() {
                    y = !0
                }, x.minimumTimeBetweenAdRequests))
            }
        }
        function s() {
            var a = g.readValue(v);
            if (0 === window.scrollY)
                g.clearValue(v);
            else if (a && a > 0) {
                var b = function() {
                    e(this.node).remove()
                }
                  , c = "abSmartAdds_" + i()
                  , d = e(q.replace("{ad_id}", c));
                d.find(".abJsAdWrapper").attr("data-config-lazyload", 200).css("height", a),
                e(x.flowColumn).prepend(d);
                var f = {
                    lazyloadEnabled: !0,
                    node: d[0],
                    alias: c,
                    onInViewCallback: b
                };
                h.lazyLoad(f),
                g.clearValue(v)
            }
        }
        function t() {
            e(x.flowColumn).find("a").click(function() {
                var b = e(".abSmartAd")
                  , c = a.pageYOffset
                  , d = 0;
                b.each(function() {
                    e(this).height() > 30 && e(this).offset().top < c && (d += e(this).height() - parseInt(e(this).css("margin-bottom")))
                }),
                g.persistValue(v, d)
            })
        }
        o || m();
        var w, x = {
            flowColumn: "#abMainColumn",
            flowColumnSelector: "#abMainColumn > article",
            adAlias: "helsida1",
            adAlias2: "helsida2"
        }, y = !0;
        x = e.extend(x, b),
        e(a).scroll(n),
        k(x),
        t(),
        "#abRightColumn" !== x.flowColumn && s(),
        n(),
        c.viewabilityExperimentsEnabled && f.shouldBlock(l(x.adAlias)).then(function() {
            e(a).off("scroll", n)
        }).catch(function() {})
    }
    if (c.smartAds) {
        var o = !1
          , p = '<div class="abAdArea abSmartAd abJsAdArea abAdAreaLoading abAdAreaInlineAdMark" style="opacit2y2: 10"><div class="abAdWrapper abJsAdWrapper" id="{ad_id}"></div></div>'
          , q = '<div class="abSmartAd abJsAdArea abAdAreaInlineAdMark" ><div class="abAdWrapper abJsAdWrapper" id="{ad_id}"></div></div>'
          , r = !1
          , s = 0
          , t = ""
          , u = d ? d : require("aid-load")
          , v = "auibSmartAdsLoaded";
        return {
            init: n
        }
    }
}),
function() {
    "use strict";
    require(["page", "web-notifications-initializer", "plus-ad-tracking", "ad-gateway-desktop-updater", "plus-init", "use-ad-loader-dac", "ab-desktop-ad-loader-bottom", "article-socialbox-desktop", "mixpanel-login", "spt/engage/initializer", "localnews/initializer", "omni-teaser-widget/initializer", "postMessage/iframe", "postMessage/user", "campaign-handler", "smart-ads", "glimr-loader"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
        c.init(),
        g.loadQueuedAds(),
        h.initialize(),
        i.init(),
        j.init(),
        o.init(),
        q.init(),
        a.smartAds && "object" == typeof a.smartAds.rightColumn && setTimeout(function() {
            p.init({
                flowColumn: "#abRightColumn",
                flowColumnSelector: "#abRightColumn > article",
                adAlias: a.smartAds.rightColumn.adPlacementAlias,
                adAlias2: a.smartAds.rightColumn.adPlacementAlias2,
                minAmountOfPixelsBetweenAds: a.smartAds.rightColumn.minPixelsBetweenAds,
                minAmountOfPixelsFromNativeAds: a.smartAds.rightColumn.minPixelsFromNativeAds,
                minimumTimeBetweenAdRequests: a.smartAds.rightColumn.minTimeBetweenAdRequests,
                minTopPixelMargin: a.smartAds.rightColumn.minPixelsTopMargin
            })
        }, 1e3),
        a.smartAds && "object" == typeof a.smartAds.mainNewsColumn && setTimeout(function() {
            p.init({
                flowColumn: "#abMainColumn",
                flowColumnSelector: "#abMainColumn > article",
                adAlias: a.smartAds.mainNewsColumn.adPlacementAlias,
                adAlias2: a.smartAds.mainNewsColumn.adPlacementAlias2,
                minAmountOfPixelsBetweenAds: a.smartAds.mainNewsColumn.minPixelsBetweenAds,
                minAmountOfPixelsFromNativeAds: a.smartAds.mainNewsColumn.minPixelsFromNativeAds,
                minimumTimeBetweenAdRequests: a.smartAds.mainNewsColumn.minTimeBetweenAdRequests,
                minTopPixelMargin: a.smartAds.mainNewsColumn.minPixelsTopMargin,
                defaultHeight: a.smartAds.mainNewsColumn.defaultHeight
            })
        }, 1e3);
        var r = {
            fontWeight: "700",
            fontSize: "22px",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif"
        };
        k.init({
            articleConfiguration: {
                font: r,
                layout: {
                    maxLines: 3,
                    imageWidth: 133,
                    margin: 40,
                    padding: 20
                }
            }
        }),
        l.init({
            articleConfiguration: {
                font: r,
                layout: {
                    noMetaRow: !0,
                    maxLines: 3,
                    imageWidth: 133,
                    margin: 40,
                    padding: 20
                }
            }
        })
    })
}();
