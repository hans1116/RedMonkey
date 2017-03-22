// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 15
(function (w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager');
(function () {


    var __cidage;
    (function () {
        (function (a) {
            __cidage = a;
            __cidage.a = "cidage";
            __cidage.b = [];
            __cidage.isVendorTemplate = !0
        })(function () {
            var a;
            if (ya("true")) {
                var b = p(p("GoogleAnalyticsObject") || "ga"), c = "";
                "" == c && (c = "t0");
                var d = b && b.getByName && b.getByName(c);
                d && (a = d.get("clientIdTime") || (d.get("clientId") || "").split(".")[1])
            } else {
                var e = Pa("_ga"), f = 0 < e.length && e[0].split(".");
                f && (a = f[f.length - 1])
            }
            return a ? Math.ceil(J().getTime() / 1E3) - Number(a) : 0
        })
    })();


    var cb = this;
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var db = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, bb = function (a) {
        if (null == a)return String(a);
        var b = db.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, eb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, wa = function (a) {
        if (!a || "object" != bb(a) || a.nodeType || a == a.window)return !1;
        try {
            if (a.constructor && !eb(a, "constructor") && !eb(a.constructor.prototype, "isPrototypeOf"))return !1
        } catch (c) {
            return !1
        }
        for (var b in a);
        return void 0 ===
            b || eb(a, b)
    }, fb = function (a, b) {
        var c = b || ("array" == bb(a) ? [] : {}), d;
        for (d in a)if (eb(a, d)) {
            var e = a[d];
            "array" == bb(e) ? ("array" != bb(c[d]) && (c[d] = []), c[d] = fb(e, c[d])) : wa(e) ? (wa(c[d]) || (c[d] = {}), c[d] = fb(e, c[d])) : c[d] = e
        }
        return c
    };
    var Sa = null, gb = Math.random(), hb = null, ma = null, Ba = !1, ib = {}, jb = {}, Ca = {};
    var kb, lb, mb, nb, ob, pb, qb, sb, tb, ub, vb, wb, V, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue,
        ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf;
    (function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        kb = a("");
        lb = a("");
        mb = "";
        nb = a("");
        ob = a("");
        pb = a("");
        qb = a("");
        sb = a("");
        tb = a("");
        ub = a("");
        vb = a("");
        wb = a("");
        V = a("");
        xb = a("");
        yb = a("");
        zb = a("");
        Ab = a("");
        Bb = a("");
        Cb = a("");
        Db = a("");
        Eb = a("");
        Fb = a("");
        Gb = a("");
        Hb = a("");
        Ib = a("");
        Jb = a("");
        Kb = a("");
        Lb = a("");
        Mb = a("");
        Ob = a("");
        Pb = a("");
        Qb = a("");
        Rb = a("");
        Sb = a("");
        Tb = a("");
        Ub = a("");
        Vb = a("0");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("");
        bc = a("");
        cc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("");
        uc = a("");
        vc = a("");
        wc = a("");
        xc = a("");
        yc = a("");
        zc = a("");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("1");
        Zc = a("");
        $c = a("6");
        ad = a("7");
        bd = a("");
        cd = a("");
        dd = a("");
        ed = a("");
        fd = a("");
        gd = a("");
        hd = a("");
        id = a("");
        ld = a("2");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae =
            a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = a("");
        We = "";
        Xe = a("4");
        Ye = a("");
        Ze = a("");
        $e = a("");
        af = a("");
        bf = a("");
        cf = a("");
        df = a("");
        ef = a("");
        ff = a("");
        gf = a("");
        hf =
            a("");
        jf = a("");
        kf = a("");
        lf = a("");
        mf = a("")
    })();
    var Ya = function () {
    }, O = function (a) {
        return "function" == typeof a
    }, T = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, nf = function (a) {
        return "number" == bb(a) && !isNaN(a)
    }, of = function (a) {
        return /^[0-9]+$/.test(a)
    }, pf = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++)if (a[d] === b)return d;
        return -1
    }, la = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, Q = function (a) {
        return Math.round(Number(a)) || 0
    }, ya = function (a) {
        return "false" ==
        String(a).toLowerCase() ? !1 : !!a
    }, qf = function (a) {
        var b = [];
        if (T(a))for (var c = 0; c < a.length; c++)b.push(String(a[c]));
        return b
    }, J = function () {
        return new Date
    }, ta = function (a, b) {
        if (!nf(a) || !nf(b) || a > b)a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }, rf = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    rf.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    rf.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    rf.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var sf = function (a, b, c) {
            try {
                if (!a[Bd])return a[Yc](a, b || Ya, c || Ya);
                c && c()
            } catch (d) {
            }
            return !1
        }, tf = function (a, b) {
            function c(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }

            for (var d = la(b).split("&"), e = 0; e < d.length; e++)if (d[e]) {
                var f = d[e].indexOf("=");
                0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
            }
        }, uf = function (a) {
            var b = a ? a.length : 0;
            return 0 < b ? a[b - 1] : ""
        }, vf = function (a) {
            return function () {
                return a("GTM-MMT2NTX")
            }
        }, wf = function (a) {
            for (var b = 0; b < a.length; b++)a[b]()
        }, va = function () {
            return "gtm" + xf()
        },
        xf = function () {
            var a = Sa.sequence || 0;
            Sa.sequence = a + 1;
            return a
        }, xa = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        }, yf = function (a) {
            return null !== a && void 0 !== a && void 0 !== a.length
        }, zf = function (a, b) {
            0 == b ? a.Xa = !0 : a.complete = !0;
            var c = a.g;
            a.s && (a.s.Ha[c] = b);
            ib[c] && (ib[c].state = b)
        }, Af = function (a, b) {
            a.sort(function (a, d) {
                return b(a, d) ? -1 : b(d, a) ? 1 : 0
            })
        };
    var z = window, M = document, Cf = navigator, S = function (a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        }, L = function (a, b, c, d) {
            return (d || "http:" != z.location.protocol ? a : b) + c
        }, Df = function (a) {
            var b = M.getElementsByTagName("script")[0] || M.body || M.head;
            b.parentNode.insertBefore(a, b)
        }, Ra = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, r = function (a, b, c) {
            var d = M.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Ra(d, b);
            c && (d.onerror = c);
            Df(d);
            return d
        }, ea = function (a, b) {
            var c = M.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            Df(c);
            Ra(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, G = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a
        }, U = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, t = function (a) {
            z.setTimeout(a, 0)
        }, Ua = !1,
        Va = [], Ef = function (a) {
            if (!Ua) {
                var b = M.createEventObject, c = "complete" == M.readyState, d = "interactive" == M.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    Ua = !0;
                    for (var e = 0; e < Va.length; e++)Va[e]()
                }
                Va.push = function () {
                    for (var a = 0; a < arguments.length; a++)t(arguments[a]);
                    return 0
                }
            }
        }, Ff = 0, Gf = function () {
            if (!Ua && 140 > Ff) {
                Ff++;
                try {
                    M.documentElement.doScroll("left"), Ef()
                } catch (a) {
                    z.setTimeout(Gf, 50)
                }
            }
        }, ga = function (a) {
            var b = M.getElementById(a);
            if (b && ha(b, "id") != a)for (var c = 1; c < document.all[a].length; c++)if (ha(document.all[a][c],
                    "id") == a)return document.all[a][c];
            return b
        }, ha = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, Na = function (a) {
            return a.target || a.srcElement || {}
        }, ia = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        }, ab = function (a) {
            var b = M.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            for (var b = b.lastChild, c = []; b.firstChild;)c.push(b.removeChild(b.firstChild));
            return c
        },
        Oa = function (a, b) {
            for (var c = {}, d = 0; d < b.length; d++)c[b[d]] = !0;
            for (var e = a, d = 0; e && !c[String(e.tagName).toLowerCase()] && 100 > d; d++)e = e.parentElement;
            e && !c[String(e.tagName).toLowerCase()] && (e = null);
            return e
        }, Hf = !1, If = [], Jf = function () {
            if (!Hf) {
                Hf = !0;
                for (var a = 0; a < If.length; a++)If[a]()
            }
        }, Kf = function (a) {
            a = a || z;
            var b = a.location.href, c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        }, Za = function (a) {
            window.console && window.console.log && window.console.log(a)
        };
    var ra = function (a, b, c, d, e) {
        var f, g = (a.protocol.replace(":", "") || z.location.protocol.replace(":", "")).toLowerCase();
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "protocol":
                f = g;
                break;
            case "host":
                f = (a.hostname || z.location.hostname).split(":")[0].toLowerCase();
                if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substr(h[0].length))
                }
                break;
            case "port":
                f = String(1 * (a.hostname ? a.port : z.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var k =
                    f.split("/");
                0 <= pf(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
                f = k.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                if (e)a:{
                    for (var l = f.split("&"), m = 0; m < l.length; m++) {
                        var n = l[m].split("=");
                        if (decodeURIComponent(n[0]).replace(/\+/g, " ") == e) {
                            f = decodeURIComponent(n.slice(1).join("=")).replace(/\+/g, " ");
                            break a
                        }
                    }
                    f = void 0
                }
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, qa = function (a) {
        var b = "";
        if (a && a.href)var c = a.href.indexOf("#"), b = 0 > c ? a.href : a.href.substr(0, c);
        return b
    }, pa = function (a) {
        var b = M.createElement("a");
        a && (b.href = a);
        return b
    };
    var za = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ca = function (a, b, c) {
        G(a, b, c)
    }, da = function (a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a)return !1;
        var c = ra(pa(a), "host");
        if (!c)return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)return !0
            }
        }
        return !1
    }, N = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var Lf = new rf, Mf = {}, Of = {
        set: function (a, b) {
            fb(Nf(a, b), Mf)
        }, get: function (a) {
            return W(a, 2)
        }, reset: function () {
            Lf = new rf;
            Mf = {}
        }
    }, W = function (a, b) {
        if (2 == b) {
            var c = a.split(".");
            for (var f = Mf, e = 0; e < c.length; e++) {
                if (void 0 === f[c[e]])return;
                f = f[c[e]]
            }
            return f
        }
        return Lf.get(a)
    }, Pf = function (a, b) {
        Lf.set(a, b);
        fb(Nf(a, b), Mf)
    }, Nf = function (a, b) {
        for (var c = {}, d = c, e = a.split("."),
                 f = 0; f < e.length - 1; f++)d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Qf = !1, Rf = !1;
    var Sf = Math.random(), Tf = "0.100000" > Sf;
    var Uf = function (a, b) {
        if (Tf) {
            var c = "//www.googletagmanager.com/a?id=GTM-MMT2NTX&cv=15", d = function (a, b) {
                b && (c += a + encodeURIComponent(b))
            };
            d("&v=", "t");
            d("&n=", a);
            d("&s=", b && b.state);
            d("&h=", b && b.hideLatency);
            d("&g=", b && b.gaLatency);
            d("&p=", b && b.loadBy);
            d("&o=", b && b.timeout);
            d("&l=", J().getTime() - Q(hb));
            c += "&sr=0.100000";
            d("&ps=", Sf);
            d("&cb=", ta());
            G(c)
        }
    }, Vf = Ya, Wf = function () {
        var a = !1;
        a || (Vf = function () {
            var a, c, d, e, f, g = J().getTime(), h;
            a:{
                var k = p(p("GoogleAnalyticsObject") || "ga"), l = "";
                "" == l && (l = "t0");
                var m = k && k.getByName && k.getByName(l), n = m && m.get("&gtm") ? "gtm" : "ga", q, x = J().getTime(), y;
                for (y in k)if (k.hasOwnProperty(y)) {
                    var u = k[y];
                    "l" != y && "answer" != y && "number" == typeof u && 1E5 > x - u && 0 < x - u && (q = u)
                }
                h = {Bb: n, Ra: q};
                break a;
                h = void 0
            }
            h && (e = h.Bb, h.Ra && (d = g - h.Ra));
            var w = z["dataLayer"].hide;
            if (w) {
                if (void 0 === w["GTM-MMT2NTX"])a = "h2"; else {
                    var D = !!M.querySelector("body");
                    a = null !== w.end || !0 !== w["GTM-MMT2NTX"] ? "h1" : D ? "h0" : "h3"
                }
                w.start && !isNaN(w.start) && (c = g - w.start);
                isNaN(w.timeout) || (f = w.timeout)
            }
            Uf("ga", {state: a, hideLatency: c, gaLatency: d, loadBy: e, timeout: f})
        });
    };
    var Xf = Ya, Yf = [], Zf = !1, ua = function (a) {
        return z["dataLayer"].push(a)
    }, $f = function (a) {
        var b = !1;
        return function () {
            !b && O(a) && t(vf(a));
            b = !0
        }
    }, fg = function () {
        for (var a = !1; !Zf && 0 < Yf.length;) {
            Zf = !0;
            var b = Yf.shift();
            if (O(b))try {
                b.call(Of)
            } catch (I) {
            } else if (T(b))a:{
                var c = b;
                if ("string" == bb(c[0])) {
                    for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = Mf, h = 0; h < d.length; h++) {
                        if (void 0 === g[d[h]])break a;
                        g = g[d[h]]
                    }
                    try {
                        g[e].apply(g, f)
                    } catch (I) {
                    }
                }
            } else {
                var m = void 0, n = void 0, q = b;
                for (n in q)q.hasOwnProperty(n) && Pf(n, q[n]);
                var x = !1, y = q.event;
                if (y) {
                    q.hasOwnProperty("gtm.uniqueEventId") || (q["gtm.uniqueEventId"] = xf(), Pf("gtm.uniqueEventId", q["gtm.uniqueEventId"]));
                    m = q["gtm.uniqueEventId"];
                    ma = y;
                    var u = $f(q.eventCallback), w = q.eventTimeout;
                    w && z.setTimeout(u, Number(w));
                    x = Xf(m, y, u, q.eventReporter)
                }
                hb ||
                (hb = q["gtm.start"]) && Vf();
                var D = q, B = m, C = y, K = Mf;
                if (!x) {
                    var A = m, E = y;
                }
                ma = null;
                a = x || a
            }
            var H = b, P = Mf;
            eg();
            Zf = !1
        }
        return !a
    }, gg = function () {
        var a = fg();
        try {
            var b = z["dataLayer"].hide;
            if (b && void 0 !== b["GTM-MMT2NTX"] && b.end) {
                b["GTM-MMT2NTX"] = !1;
                var c = !0, d;
                for (d in b)if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch (e) {
        }
        return a
    }, hg = function () {
        var a = S("dataLayer", []), b = S("google_tag_manager", {}), b = b["dataLayer"] = b["dataLayer"] || {};
        Va.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        If.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (Yf.push.apply(Yf, b); 300 < this.length;)this.shift();
            return fg()
        };
        Yf.push.apply(Yf, a.slice(0));
        t(gg)
    };
    var Ma = function (a, b, c) {
        U(a, b, c, void 0)
    }, ba = function (a, b, c) {
        r(a, b, c)
    }, na = function (a, b) {
        return W(a, b || 2)
    }, aa = function (a, b) {
        z[a] = b
    }, p = function (a, b, c) {
        var d = z;
        b && (void 0 === d[a] || c && !d[a]) && (d[a] = b);
        return d[a]
    }, v = function (a, b, c, d) {
        return (d || "https:" == z.location.protocol ? a : b) + c
    };
    var ig = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), jg = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, kg = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels",
            "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, lg = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++)c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }, mg = function () {
        var a = W("gtm.whitelist");
        var b = a && lg(qf(a), jg), c = W("gtm.blacklist") || W("tagTypeBlacklist") || [];
        ig.test(z.location && z.location.hostname) && (c = qf(c), c.push("nonGooglePixels", "nonGoogleScripts"));
        var d = c && lg(qf(c), kg), e = {};
        return function (f) {
            var g = f && f[Yc];
            if (!g)return !0;
            if (void 0 !== e[g.a])return e[g.a];
            var h = !0;
            if (a)a:{
                if (0 > pf(b, g.a))if (g.b && 0 < g.b.length)for (var k = 0; k < g.b.length; k++) {
                    if (0 > pf(b,
                            g.b[k])) {
                        h = !1;
                        break a
                    }
                } else {
                    h = !1;
                    break a
                }
                h = !0
            }
            var l = !1;
            if (c) {
                var m;
                if (!(m = 0 <= pf(d, g.a)))a:{
                    for (var n = g.b || [], q = new rf, x = 0; x < d.length; x++)q.set(d[x], !0);
                    for (x = 0; x < n.length; x++)if (q.get(n[x])) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                l = m
            }
            return e[g.a] = !h || l
        }
    };
    var fa = function (a) {
        var b = M;
        return ng ? b.querySelectorAll(a) : null
    }, og = !1;
    if (M.querySelectorAll)try {
        var pg = M.querySelectorAll(":root");
        pg && 1 == pg.length && pg[0] == M.documentElement && (og = !0)
    } catch (a) {
    }
    var ng = og;
    var _eu = function (a) {
        var b = String(W("gtm.elementUrl") || a[vc] || ""), c = pa(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var ug = /(^|\.)doubleclick\.net$/i, vg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Pa = function (a) {
        for (var b = String(M.cookie).split(";"), c = [], d = 0; d < b.length; d++) {
            var e = b[d].split("="), f = la(e[0]);
            if (f && f == a) {
                var g = la(e.slice(1).join("="));
                g && (g = decodeURIComponent(g));
                c.push(g)
            }
        }
        return c
    }, wg = function (a, b, c, d, e) {
        if (ug.test(M.location.hostname) || "/" == c && vg.test(d))return !1;
        var f = a + "=" + b + "; ";
        c && (f += "path=" + c + "; ");
        e && (f += "expires=" + e.toGMTString() + "; ");
        d && (f += "domain=" + d + ";");
        var g = M.cookie;
        M.cookie = f;
        return g !=
            M.cookie || 0 <= pf(Pa(a), b)
    }, xg = function (a) {
        if ("none" == a)return 0;
        0 == a.indexOf(".") && (a = a.substr(1));
        return a.split(".").length
    }, yg = function (a) {
        var b = a;
        b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
        return "/" == a ? 1 : a.split("/").length
    }, zg = function () {
        var a = ra(z.location, "host", !0).split(".");
        if (4 == a.length && /^[0-9]*$/.exec(a[3]))return ["none"];
        for (var b = [], c = a.length - 2; 0 <= c; c--)b.push(a.slice(c).join("."));
        b.push("none");
        return b
    };
    var Ag = function (a, b) {
        this.f = a;
        this.j = b
    };
    Ag.prototype.toString = function () {
        var a = "" + this.f;
        1 < this.j && (a = a + "-" + this.j);
        return a
    };
    var Bg = function (a, b) {
        this.Fa = a;
        this.ka = b
    };
    Bg.prototype.toString = function () {
        return "" + this.ka + "." + this.Fa
    };
    var Eg = function (a, b) {
        var c = new Cg(null, a, b);
        Dg(c);
        return c
    }, Cg = function (a, b, c) {
        this.Oa = Math.floor(J().getTime() / 864E5);
        this.ja = b || "auto";
        this.aa = c || "/";
        var d = xg(this.ja), e = yg(this.aa);
        this.F = a || new Ag(d, e);
        this.h = [];
        this.C = new rf
    }, Gg = function (a, b, c) {
        b && ("" == c.Fa ? Fg(a, b) : (a.C.contains(b) || a.h.push(b), a.C.set(b, c)))
    }, Hg = function (a, b) {
        for (var c = 0; c < b.length; c++)Gg(a, b[c][0], b[c][1])
    }, Fg = function (a, b) {
        var c = pf(a.h, b);
        0 <= c && a.h.splice(c, 1);
        a.C.set(b, void 0)
    }, Ig = function (a) {
        for (var b = [], c = 0; c < a.h.length; c++) {
            var d =
                a.h[c];
            b.push([d, a.C.get(d)])
        }
        return b
    }, Jg = function (a) {
        for (var b = 0, c = 0; c < a.h.length; c++)b = Math.max(b, a.C.get(a.h[c]).ka);
        return 864E5 * b
    };
    Cg.prototype.toString = function () {
        if (0 == this.h.length)return "";
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            a.push("" + c + "." + this.C.get(c).toString())
        }
        return "GAX1." + this.F.toString() + "." + a.join("!")
    };
    var Kg = function (a, b) {
        for (var c = new Date, d = yg(a.aa), e = [], f = 0; f < a.h.length; f++) {
            var g = a.h[f];
            a.C.get(g).ka < a.Oa && e.push(g)
        }
        for (f = 0; f < e.length; f++)Fg(a, e[f]);
        if (a.h.length > (b || 10))return !1;
        c.setTime(Jg(a));
        if ("auto" != a.ja)return wg("_gaexp", a.toString(), a.aa, a.ja, c);
        for (var h = zg(), k = 0; k < h.length; k++)if ("none" != h[k] && (a.F = new Ag(xg(h[k]), d), wg("_gaexp", a.toString(), a.aa, h[k], c)))return !0;
        return !1
    }, Dg = function (a) {
        for (var b = a.F.f, c = a.F.j, d = Pa("_gaexp"), e = [], f = 0; f < d.length; f++) {
            var g = Lg(a, d[f]);
            g && e.push(g)
        }
        Af(e,
            function (a, d) {
                var e = a.F, f = d.F;
                return e.f == f.f && e.j == f.j ? !1 : e.f == b && e.j == c ? !0 : f.f == b && f.j == c ? !1 : e.f == b ? f.f != b || e.j < f.j : f.f == b ? !1 : e.j == c ? f.f != b && (f.j != c || e.f < f.f) : f.j == c ? !1 : e.f < f.f || e.f == f.f && e.j < f.j
            });
        a.F = 0 < e.length ? e[0].F : new Ag(b, c);
        for (f = e.length - 1; 0 <= f; f--)Hg(a, Ig(e[f]))
    }, Lg = function (a, b) {
        var c = b.match(/GAX1\.([^.]+).(.*)/);
        if (c) {
            var d;
            a:{
                var e = (c[1] || "").split("-");
                if (!(0 == e.length || 2 < e.length)) {
                    var f = la(e[0]);
                    if (0 != f.length) {
                        var g = 2 == e.length ? la(e[1]) : "1";
                        if (of(f) && of(g)) {
                            d = new Ag(Q(f), Q(g));
                            break a
                        }
                    }
                }
                d = void 0
            }
            if (d) {
                for (var h = new Cg(d, a.ja, a.aa), k = (c[2] || "").split("!"), l = 0; l < k.length; l++) {
                    var m = k[l].split(".");
                    if (3 == m.length) {
                        if (!of(m[1]))return;
                        Gg(h, m[0], new Bg(m[2], Q(m[1])))
                    }
                }
                return h
            }
        }
    };
    var _f = function (a) {
        var b = String(W("gtm.referrer") || M.referrer);
        if (!b)return b;
        var c = pa(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var Pg = function (a) {
        var b = z.location, c;
        (c = a[jc] ? a[jc] : W("gtm.url")) && (b = pa(String(c)));
        var d = b.href, e = d.indexOf("#"), f = 0 > e ? d : d.substr(0, e);
        a[Vb] && (f = ra(b, a[Vb], a[te], a[uc], a[ge]));
        return f
    }, _u = Pg;
    _u.a = "u";
    _u.b = ["google"];
    var _eq = function (a) {
        return String(a[wb]) == String(a[V])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var Qa = new String("undefined"), Wa = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++)c.push(a[d] === Qa ? b : a[d]);
            return c.join("")
        }
    };
    Wa.prototype.toString = function () {
        return this.resolve("undefined")
    };
    Wa.prototype.valueOf = Wa.prototype.toString;
    var Zg = {}, Xa = function (a, b) {
        var c = xf();
        Zg[c] = [a, b];
        return c
    }, $g = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var c = Zg[a];
            if (c && O(c[b]))c[b]();
            Zg[a] = void 0
        }
    };
    var ah = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, bh = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ch;
    a:{
        var dh = cb.navigator;
        if (dh) {
            var eh = dh.userAgent;
            if (eh) {
                ch = eh;
                break a
            }
        }
        ch = ""
    }
    var X = function (a) {
        return -1 != ch.indexOf(a)
    };
    var fh = function () {
        X("iPod")
    }, gh = function () {
        return X("iPhone") && !X("iPod") && !X("iPad")
    };
    var hh = function (a) {
        hh[" "](a);
        return a
    };
    hh[" "] = function () {
    };
    var jh = function (a, b) {
        var c = ih;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var kh = X("Opera"), lh = X("Trident") || X("MSIE"), mh = X("Edge"), nh;
    if (nh = X("Gecko"))nh = !(-1 != ch.toLowerCase().indexOf("webkit") && !X("Edge"));
    var oh = nh && !(X("Trident") || X("MSIE")) && !X("Edge"), ph = -1 != ch.toLowerCase().indexOf("webkit") && !X("Edge");
    ph && X("Mobile");
    X("Macintosh");
    X("Windows");
    X("Linux") || X("CrOS");
    var qh = cb.navigator || null;
    qh && (qh.appVersion || "").indexOf("X11");
    X("Android");
    gh();
    X("iPad");
    fh();
    gh() || X("iPad") || fh();
    var rh = function () {
        var a = cb.document;
        return a ? a.documentMode : void 0
    }, sh;
    a:{
        var th = "", uh = function () {
            var a = ch;
            if (oh)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (mh)return /Edge\/([\d\.]+)/.exec(a);
            if (lh)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (ph)return /WebKit\/(\S+)/.exec(a);
            if (kh)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        uh && (th = uh ? uh[1] : "");
        if (lh) {
            var vh = rh();
            if (null != vh && vh > parseFloat(th)) {
                sh = String(vh);
                break a
            }
        }
        sh = th
    }
    var wh = sh, ih = {}, xh = function (a) {
        return jh(a, function () {
            for (var b = 0, c = ah(String(wh)).split("."), d = ah(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "";
                do {
                    var k = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""], l = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == l[0].length)break;
                    b = bh(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || bh(0 == k[2].length, 0 == l[2].length) || bh(k[2], l[2]);
                    g = k[3];
                    h = l[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, yh;
    var zh = cb.document;
    yh = zh && lh ? rh() || ("CSS1Compat" == zh.compatMode ? parseInt(wh, 10) : 5) : void 0;
    var Ah;
    if (!(Ah = !oh && !lh)) {
        var Bh;
        if (Bh = lh)Bh = 9 <= Number(yh);
        Ah = Bh
    }
    Ah || oh && xh("1.9.1");
    lh && xh("9");
    var $a = function (a, b) {
        var c = "";
        lh && !Ch(a) && (c = '<script>document.domain="' + document.domain + '";\x3c/script>' + c);
        var d = "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" + c + "</head><body>" + b + "</body></html>";
        if (Dh)a.srcdoc = d; else if (Eh) {
            var e = a.contentWindow.document;
            e.open("text/html", "replace");
            e.write(d);
            e.close()
        } else Fh(a, d)
    }, Dh = ph && "srcdoc" in document.createElement("iframe"), Eh = oh || ph || lh && xh(11), Fh = function (a, b) {
        lh && xh(7) && !xh(10) && 6 > Gh() && Hh(b) && (b = Ih(b));
        var c = function () {
            a.contentWindow.goog_content =
                b;
            a.contentWindow.location.replace("javascript:window.goog_content")
        };
        lh && !Ch(a) ? Jh(a, c) : c()
    }, Gh = function () {
        var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
        return a ? parseFloat(a[1]) : 0
    }, Ch = function (a) {
        try {
            var b;
            var c = a.contentWindow;
            try {
                var d;
                if (d = !!c && null != c.location.href)b:{
                    try {
                        hh(c.foo);
                        d = !0;
                        break b
                    } catch (e) {
                    }
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b
        } catch (e) {
            return !1
        }
    }, Kh = 0, Jh = function (a, b) {
        var c = "goog_rendering_callback" + Kh++;
        cb[c] = b;
        a.src = "javascript:'<script>(function() {document.domain = \"" +
            document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
    }, Hh = function (a) {
        for (var b = 0; b < a.length; ++b)if (127 < a.charCodeAt(b))return !0;
        return !1
    }, Ih = function (a) {
        for (var b = unescape(encodeURIComponent(a)), c = Math.floor(b.length / 2), d = [], e = 0; e < c; ++e)d[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
        1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
        return d.join("")
    };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var $h = function (a, b, c, d, e) {
        var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
        e && (f = e + "{" + f + "}");
        var g = document;
        if (g.createStyleSheet) {
            var h = Xh(g), k = h.rules.length;
            h.insertRule(f, k);
            return function () {
                h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                h.insertRule("x {}", k)
            }
        }
        var l = Yh(f, g);
        Zh(l, g);
        var m = l.parentNode;
        return function () {
            m.removeChild(l)
        }
    }, ai = null, Xh = function (a) {
        if (ai)return ai;
        for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
            var c = a.styleSheets[b], d = c.ownerNode;
            if (d && d.parentNode && "HEAD" == d.parentNode.tagName)return ai =
                c
        }
        0 == a.styleSheets.length && a.createStyleSheet();
        return ai = a.styleSheets[0]
    }, Yh = function (a, b) {
        var c = (b || document).createElement("style");
        void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
        return c
    }, Zh = function (a, b) {
        var c = b || document, d = c.getElementsByTagName("head")[0];
        d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
        d.appendChild(a)
    };
    var hi = {}, ii = void 0, ji = function (a) {
        var b = hi[a];
        b || (b = {id: a, v: [], W: 0, Ia: null, za: void 0, Da: !1}, hi[a] = b);
        ii = b
    }, li = function (a, b, c, d) {
        var e = ii;
        if (!ng || !e)return !1;
        var f = {id: e.id + ":" + e.v.length, fb: b, U: [], $a: c, G: a, ua: 0, sa: d || null, Na: 0, V: !1};
        e.v.push(f);
        null === a ? (f.V = !0, b(null)) : ki(e);
        return !0
    }, mi = function (a) {
        var b = $h(a, "visibility", "hidden", !0);
        return function () {
            O(b) && b.apply();
            b = null
        }
    }, ni = function (a, b, c, d) {
        var e = b;
        if (!Ua) {
            var f = mi(a.A);
            Va.push(f);
            e = function (a, c) {
                var d = b(a, c);
                f();
                return d
            }
        }
        return li(a, e,
            c, d)
    }, ki = function (a) {
        if (!a.Da) {
            for (var b = a.W; b < a.v.length; b++) {
                var c = a.v[b], d = b == a.W;
                if (!c.V && !oi(d, c))break;
                c.V && d && a.W++
            }
            a.v.length > a.W ? (a.Ia || (a.Ia = z.setTimeout(function () {
                a.Ia = null;
                ki(a)
            }, 80)), Ua || a.za || (a.za = function () {
                t(function () {
                    ki(a)
                })
            }, U(M, "DOMContentLoaded", a.za))) : pi(a)
        }
    }, pi = function (a) {
        for (var b = 0; b < a.v.length; b++) {
            var c = a.v[b];
            if (c.G)for (var d = fa(c.G.A) || [], e = 0; e < d.length; e++) {
                var f = d[e];
                f.gtmProgressiveApplied && f.gtmProgressiveApplied[c.id] || (qi(f, c.id), c.U.push(ri(f, c.id)))
            }
        }
    }, oi =
        function (a, b) {
            var c = [];
            if (b.G) {
                var d = si(b.G, b.id), e = null;
                b.sa && (e = si(b.sa, b.id + "-t"));
                for (var f = 0; f < d.length; f++) {
                    var g = d[f], h;
                    if (null != e && (h = e.length > f ? e[f] : null, !h && !Ua && (null === b.sa.o || b.Na + c.length < b.sa.o)))break;
                    c.push({element: g, Jb: h})
                }
            }
            if (!Ua && b.$a && (!a || null == b.G.o || b.G.o != b.ua + c.length))return !1;
            for (var k = 0; k < c.length; k++) {
                var l = c[k].element, m = c[k].Jb, n;
                b.ua++;
                qi(l, b.id);
                m && (b.Na++, n = b.id + "-t", qi(m, n));
                var q = b.fb(l, m);
                O(q) && b.U.push(q);
                b.U.push(ri(l, b.id));
                m && n && b.U.push(ri(m, n))
            }
            if (b.G.o &&
                b.G.o == b.ua || Ua)b.V = !0;
            return !0
        }, qi = function (a, b) {
        a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
        a.gtmProgressiveApplied[b] = !0
    }, ri = function (a, b) {
        return function () {
            a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
        }
    }, si = function (a, b) {
        for (var c = fa(a.A) || [], d = [], e = 0; e < c.length; e++) {
            var f = c[e];
            if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                if (a.D && !ti(f))break;
                d.push(f)
            }
        }
        return d
    }, ti = function (a) {
        if (Ua)return !0;
        for (; a;) {
            if (a.nextSibling)return !0;
            a = a.parentNode
        }
        return !1
    };
    var Ea, ui, vi, Ka = /(Firefox\D28\D)/g.test(Cf.userAgent), xi = function (a, b) {
        return function (c) {
            c = c || z.event;
            var d = Na(c), e = !1;
            if (3 !== c.which || "LINK_CLICK" != a) {
                "LINK_CLICK" == a && (d = Oa(d, ["a", "area"]), e = !d || !d.href || wi(d.href) || 2 === c.which || null == c.which && 4 == c.button || c.ctrlKey || c.shiftKey || c.altKey || !0 === c.metaKey);
                var f = "FORM_SUBMIT" == a ? Ea : vi;
                if (c.defaultPrevented || !1 === c.returnValue || c.X && c.X()) {
                    if (d) {
                        var g = {simulateDefault: !1}, h = Fa(f, ["wnc", "nwnc"]);
                        h && Ga(a, d, g, f.wt, h)
                    }
                } else {
                    if (d) {
                        var g = {}, k, l = Fa(f, ["wnc",
                            "nwnc", "nwc", "wc"]);
                        (k = Ga(a, d, g, f.wt, l)) || (Ha(g.eventReport, f) ? b = !0 : e = !0);
                        e = e || k || "LINK_CLICK" == a && Ka;
                        g.simulateDefault = !k && b && !e;
                        g.simulateDefault && (e = La(d, g) || e, !e && c.preventDefault && c.preventDefault());
                        c.returnValue = k || !b || e;
                        return c.returnValue
                    }
                    return !0
                }
            }
        }
    }, Ga = function (a, b, c, d, e) {
        var f = d || 2E3, g = {
            "gtm.element": b,
            "gtm.elementClasses": b.className,
            "gtm.elementId": b["for"] || ha(b, "id") || "",
            "gtm.elementTarget": b.formTarget || b.target || ""
        };
        switch (a) {
            case "LINK_CLICK":
                g["gtm.triggers"] = e || "";
                g.event = "gtm.linkClick";
                g["gtm.elementUrl"] = b.href;
                g.eventTimeout = f;
                g.eventCallback = yi(b, c);
                g.eventReporter = function (a) {
                    c.eventReport = a
                };
                break;
            case "FORM_SUBMIT":
                g["gtm.triggers"] = e || "";
                g.event = "gtm.formSubmit";
                g["gtm.elementUrl"] = zi(b);
                g.eventTimeout = f;
                g.eventCallback = Ai(b, c);
                g.eventReporter = function (a) {
                    c.eventReport = a
                };
                break;
            case "CLICK":
                g.event = "gtm.click";
                g["gtm.elementUrl"] = (b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || b.href || b.src || b.code || b.codebase || "";
                break;
            default:
                return !0
        }
        return ua(g)
    }, zi =
        function (a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(!1).action);
            return b
        }, Ja = function (a) {
        var b = a.target;
        if (!b)switch (String(a.tagName).toLowerCase()) {
            case "a":
            case "area":
            case "form":
                b = "_self"
        }
        return b
    }, La = function (a, b) {
        var c = !1, d = /(iPad|iPhone|iPod)/g.test(Cf.userAgent), e = Ja(a).toLowerCase();
        switch (e) {
            case "":
            case "_self":
            case "_parent":
            case "_top":
                var f;
                f = (e || "_self").substring(1);
                b.targetWindow = z.frames && z.frames[f] || z[f];
                break;
            case "_blank":
                d ? (b.simulateDefault = !1, c = !0) : (b.targetWindowName =
                    "gtm_autoEvent_" + J().getTime(), b.targetWindow = z.open("", b.targetWindowName));
                break;
            default:
                d && !z.frames[e] ? (b.simulateDefault = !1, c = !0) : (z.frames[e] || (b.targetWindowName = e), b.targetWindow = z.frames[e] || z.open("", e))
        }
        return c
    }, yi = function (a, b, c) {
        return function () {
            b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (c = c || J().getTime(), 500 > J().getTime() - c && z.setTimeout(yi(a, b, c), 25)))
        }
    }, Ai = function (a, b, c) {
        return function () {
            if (b.simulateDefault)if (b.targetWindow) {
                var d;
                b.targetWindowName &&
                (d = a.target, a.target = b.targetWindowName);
                M.gtmSubmitFormNow = !0;
                Ia(a).call(a);
                b.targetWindowName && (a.target = d)
            } else c = c || J().getTime(), 500 > J().getTime() - c && z.setTimeout(Ai(a, b, c), 25)
        }
    }, Fa = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = a[b[d]], f;
            for (f in e)e.hasOwnProperty(f) && e[f] && c.push(f)
        }
        return c.join(",")
    }, Bi = function (a, b, c, d, e) {
        var f = e;
        if (!f || "0" == f) {
            if (a.l)return;
            a.l = !0;
            f = "0"
        }
        var g = a.wt;
        b && (!g || g > d) && (a.wt = d);
        a[b ? c ? "wc" : "wnc" : c ? "nwc" : "nwnc"][f] = !0
    }, Ha = function (a, b) {
        if (b.wnc["0"] || b.wc["0"])return !0;
        for (var c = 0; c < Ci.length; c++)if (a.passingRules[c]) {
            var d = Di[c], e = d && d[0] && d[0][0] || d[1] && d[1][0];
            if (e && "0" != e && (b.wc[e] || b.wnc[e]))for (var f = Ci[c][1], g = 0; g < f.length; g++)if (a.resolvedTags[f[g]])return !0
        }
        return !1
    }, sa = function (a, b, c, d, e) {
        var f, g, h = !1;
        switch (a) {
            case "CLICK":
                if (M.gtmHasClickListenerTag)return;
                M.gtmHasClickListenerTag = !0;
                f = "click";
                g = function (a) {
                    var b = Na(a);
                    b && Ga("CLICK", b, {}, d)
                };
                h = !0;
                break;
            case "LINK_CLICK":
                b && !ui && (ui = qa(M.location));
                Bi(vi, b || !1, c || !1, d, e);
                if (M.gtmHasLinkClickListenerTag)return;
                M.gtmHasLinkClickListenerTag = !0;
                f = "click";
                g = xi(a, b || !1);
                break;
            case "FORM_SUBMIT":
                Bi(Ea, b || !1, c || !1, d, e);
                if (M.gtmHasFormSubmitListenerTag)return;
                M.gtmHasFormSubmitListenerTag = !0;
                f = "submit";
                g = xi(a, b || !1);
                break;
            default:
                return
        }
        U(M, f, g, h)
    }, wi = function (a) {
        if (!ui)return !0;
        var b = a.indexOf("#");
        if (0 > b)return !1;
        if (0 == b)return !0;
        var c = pa(a);
        return ui == qa(c)
    }, Ia = function (a) {
        try {
            if (a.constructor && a.constructor.prototype)return a.constructor.prototype.submit
        } catch (b) {
        }
        if (a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
        M.gtmFormElementSubmitter || (M.gtmFormElementSubmitter = M.createElement("form"));
        return M.gtmFormElementSubmitter.submit.call ? M.gtmFormElementSubmitter.submit : a.submit
    }, Ei = function () {
        var a = function (a) {
            var b = S("google_tag_manager", {}), d = b[a];
            d || (d = b[a] = {}, d.nwnc = {}, d.nwc = {}, d.wnc = {}, d.wc = {}, d.wt = null, d.l = !1);
            return d
        };
        vi = a("linkClickMap");
        Ea = a("formSubmitMap")
    };
    var Aa = function (a, b) {
        var c = b || cb, d = c.onerror, e = !1;
        ph && !xh("535.3") && (e = !e);
        c.onerror = function (b, c, h, k, l) {
            d && d(b, c, h, k, l);
            a({message: b, fileName: c, Ta: h, $b: k, error: l});
            return e
        }
    };
    var sj = 13, tj = [], uj = [], vj = [], wj = new rf, xj = [], Z = [], Ci = [], Di = [], yj = function () {
        this.L = []
    };
    yj.prototype.set = function (a, b) {
        this.L.push([a, b]);
        return this
    };
    yj.prototype.resolve = function (a, b) {
        for (var c = {}, d = 0; d < this.L.length; d++) {
            var e = zj(this.L[d][0], a, b), f = zj(this.L[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Aj = function (a) {
        this.index = a
    };
    Aj.prototype.resolve = function (a, b) {
        var c = vj[this.index];
        if (c && !b(c)) {
            var d = c[ld];
            if (a) {
                if (a.get(d))return;
                a.set(d, !0)
            }
            c = zj(c, a, b);
            a && a.set(d, !1);
            return sf(c)
        }
    };
    var _M = function (a) {
        return new Aj(a)
    }, Bj = function (a) {
        this.resolve = function (b, c) {
            for (var d = [], e = !1, f = 0; f < a.length; f++) {
                var g = zj(tj[a[f]], b, c);
                g === Qa && (e = !0);
                d.push(g)
            }
            return e ? new Wa(d) : d.join("")
        }
    }, _T = function (a) {
        return new Bj(arguments)
    }, Cj = function (a) {
        function b(b) {
            for (var c = 1; c < a.length; c++)if (a[c] == b)return !0;
            return !1
        }

        this.resolve =
            function (c, d) {
                var e = zj(a[0], c, d);
                if (a[0] instanceof Aj && b(8) && b(16)) {
                    if (e === Qa)return e;
                    var f = va();
                    wj.set(f, e);
                    return 'google_tag_manager["GTM-MMT2NTX"].macro(\'' + f + "')"
                }
                for (var e = String(e), g = 1; g < a.length; g++)e = Y[a[g]](e);
                return e
            }
    }, _E = function (a, b) {
        return new Cj(arguments)
    }, Dj = function (a, b) {
        this.w = a;
        this.ra = b
    }, _R = function (a, b) {
        return new Dj(a, b)
    }, zj = function (a, b, c) {
        var d = a;
        if (a instanceof Aj || a instanceof yj || a instanceof Bj || a instanceof Cj)return a.resolve(b, c);
        if (!(a instanceof Dj))if (T(a))for (var d =
            [], e = 0; e < a.length; e++)d[e] = zj(a[e], b, c); else if (a && "object" == typeof a) {
            var d = {}, f;
            for (f in a)a.hasOwnProperty(f) && (d[f] = zj(a[f], b, c))
        }
        return d
    }, Fj = function () {
        for (var a = [_u, 'Page URL', 'Page Hostname', 'host', 'Page Path', 'path', 'Page Fragment', 'fragment', _f, 'Referrer', __cidage, 'Client ID Age', '1'], b = [], c = 0; c < a.length; c++)b[c] = Ej(c, a);
        return b
    }, Ej = function (a, b) {
        var c = b[a], d = c;
        if (c instanceof Aj || c instanceof Cj || c instanceof Bj || c instanceof Dj)d = c; else if (T(c))for (var d = [], e = 0; e < c.length; e++)d[e] = Ej(c[e], b); else if ("object" == typeof c) {
            var d = new yj, f;
            for (f in c)c.hasOwnProperty(f) && d.set(b[f],
                Ej(c[f], b))
        }
        return d
    }, Hj = function (a, b) {
        for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
            var e = c[d] = c[d].split(":");
            0 == a && (e[1] = tj[e[1]]);
            if (1 == a)for (var f = Gj(e[0]), e = c[d] = {}, g = 0; g < f.length; g++) {
                var h = uj[f[g]];
                e[h[0]] = h[1]
            }
            if (2 == a)for (g = 0; 4 > g; g++)e[g] = Gj(e[g]);
            3 == a && (c[d] = tj[e[0]]);
            if (4 == a)for (g = 0; 2 > g; g++)if (e[g]) {
                e[g] = e[g].split(".");
                for (var k = 0; k < e[g].length; k++)e[g][k] = tj[e[g][k]]
            } else e[g] = [];
            5 == a && (c[d] = e[0])
        }
        return c
    }, Gj = function (a) {
        var b = [];
        if (!a)return b;
        for (var c = 0, d = 0; d < a.length && c < sj; c +=
            6, d++) {
            var e = a && a.charCodeAt(d) || 65;
            if (65 != e) {
                var f;
                f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                1 & f && b.push(c);
                2 & f && b.push(c + 1);
                4 & f && b.push(c + 2);
                8 & f && b.push(c + 3);
                16 & f && b.push(c + 4);
                32 & f && b.push(c + 5)
            }
        }
        return b
    }, Ij = function (a, b, c) {
        a.push.apply(a, Hj(b, c))
    };
    var bg = function () {
    }, Qj = function (a) {
    }, eg = function () {
    }, Rj = function (a) {
    }, Sj = function (a, b) {
    }, Tj = function (a, b) {
    }, cg = function (a) {
    };
    var Uj, Vj;
    var hk = function (a) {
        return function () {
        }
    }, ik = function (a) {
        return function () {
        }
    };
    var jk = function (a) {
        var b = this;
        this.g = a;
        this.complete = this.Xa = !1;
        this.qa = [];
        this.la = [];
        this.S = function () {
            if (b.s && b.s.event) {
                var c = b.s.event, d = b.g;
            }
            b.complete || wf(b.qa);
            zf(b, 1);
            if (jb[a])for (var e = 0; e < jb[a].length; e++)jb[a].shift().S()
        };
        this.R = function () {
            if (b.s && b.s.event) {
                var c = b.s.event, d = b.g;
            }
            b.complete ||
            wf(b.la);
            zf(b, 2);
            if (jb[a])for (var e = 0; e < jb[a].length; e++)jb[a].shift().R()
        };
        this.B = Ya
    }, kk = function (a, b) {
        a.qa.push(b)
    }, lk = function (a, b) {
        a.la.push(b)
    }, mk = function (a) {
        this.M = [];
        this.Ga = [];
        this.Pa = {};
        this.ya = [];
        this.Y = 0;
        this.Wa = {};
        this.Ya = {};
        this.Ha = {};
        this.event = a
    };
    mk.prototype.addListener = function (a) {
        this.ya.push(a)
    };
    var nk = function (a, b, c, d, e, f) {
        if (!c.complete) {
            a.M[b] = c;
            void 0 == d && (d = []);
            void 0 == e && (e = []);
            void 0 == f && (f = []);
            d = T(d) ? d.slice() : ["or", d];
            e = T(e) ? e.slice() : [e];
            f = T(f) ? f.slice() : [f];
            a.Pa[b] = d;
            a.Wa[b] = 0 < e.length;
            a.Ya[b] = 0 < f.length;
            a.Y++;
            var g = function () {
                0 < a.Y && a.Y--;
                0 < a.Y || wf(a.ya)
            };
            kk(c, g);
            lk(c, g)
        }
    }, uk = function (a) {
        for (var b = [], c = 0; c < a.M.length; c++) {
            var d = a.M[c];
            if (d) {
                var e = a.Pa[c], f = a.Wa[c], g = a.Ya[c];
                if (0 != e.length || f || g) {
                    if (0 < e.length)for (var h = ok(e, d.B), k = 0; k < e.length; k++)e[k] instanceof Dj && e[k].w != c &&
                    pk(a, e[k].w, h);
                    (f || g) && qk(a, c)
                } else b.push(c)
            }
        }
        for (c = 0; c < b.length; c++)a.M[b[c]].B();
        for (c = 0; c < a.Ga.length; c++) {
            for (var l = a.Ga[c], m = void 0, n = l, q = n, x = [], y = 0; y < q.length; y++) {
                var u = q[y], w = u.g, D = ib[w], B = D.firingOption;
                0 != B && (1 == B && void 0 !== u.s.Ha[w] || 2 == B && void 0 !== D.state) && x.push(u)
            }
            var C = rk(x);
            for (m in C)if (C.hasOwnProperty(m)) {
                for (var K = void 0, F = void 0, A = C[m], E = A[0], H = A[A.length - 1], P, I = 0; I < n.length; I++) {
                    var ja = n[I];
                    !K && ja.g == E && 0 < I && (K = n[I - 1]);
                    ja.g == H && I < n.length - 1 && (F = n[I + 1]);
                    if (-1 < pf(A, ja.g))if (P =
                            n.splice(I, 1)[0], ja.g == H)break; else I--
                }
                if (P) {
                    var oa = Number(m), R = K, ka = F;
                    if (R) {
                        var tc = R.qa[0], Nb = R.la[0];
                        R.qa = [];
                        R.la = [];
                        kk(R, tc);
                        lk(R, Nb)
                    }
                    if (R && ka) {
                        var rb = sk(ka);
                        kk(R, rb);
                        var jd = tk(R.g, !1);
                        0 < jd.length && jd[0].w != oa && 0 == jd[0].ra && lk(R, rb);
                        var kd = tk(ka.g, !0);
                        0 < kd.length && kd[0].w != oa && 0 == kd[0].ra && lk(R, rb)
                    }
                }
            }
            0 < l.length && l[0].B()
        }
    }, pk = function (a, b, c) {
        a.M[b] && (kk(a.M[b], function () {
            c(b, !0)
        }), lk(a.M[b], function () {
            c(b, !1)
        }))
    }, ok = function (a, b) {
        var c = Ya, d = !1;
        return function (e, f) {
            var g;
            a:{
                for (var h = 0; h < a.length; h++)if (a[h] instanceof Dj && a[h].w === e || a[h] === e) {
                    g = h;
                    break a
                }
                g = -1
            }
            d || 0 > g || ("or" == a[0] ? f ? (d = !0, b()) : (a.splice(g, 1), 1 == a.length && (d = !0, c())) : f ? (a.splice(g, 1), 1 == a.length && (d = !0, b())) : (d = !0, c()))
        }
    }, qk = function (a, b) {
        var c = [], d = !1, e = function (b) {
            var f, g, h = Z[b];
            if (a.event.c(h)) {
            } else g = vk(h, b, a);
            if (f = g) {
                var k = tk(b, !0);
                0 < k.length && e(k[0].w);
                c.push(f);
                var l = tk(b, !1);
                0 <
                l.length && e(l[0].w)
            } else d = !0
        };
        e(b);
        if (!d) {
            for (var f = 0; f < c.length; f++) {
                var g = c[f], h = tk(g.g, !0);
                if (0 < h.length) {
                    var k = c[f - 1], l = sk(g);
                    kk(k, l);
                    0 == h[0].ra && lk(k, l)
                }
                var m = tk(g.g, !1);
                0 < m.length && (l = sk(c[f + 1]), kk(g, l), 0 == m[0].ra && lk(g, l))
            }
            a.Ga.push(c)
        }
    }, tk = function (a, b) {
        var c = b ? qe : He, d = Z[a], e = void 0 === d[c] ? [] : d[c];
        return T(e) ? e : [e]
    }, sk = function (a) {
        return function () {
            a.B()
        }
    }, rk = function (a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c], e = [], f = function (a) {
                var b = tk(a, !0);
                0 < b.length && f(b[0].w);
                e.push(a);
                var c = tk(a,
                    !1);
                0 < c.length && f(c[0].w)
            };
            f(d.g);
            b[d.g] = e
        }
        wk(a, b);
        return b
    }, wk = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c].g, e;
            for (e in b)if (b.hasOwnProperty(e) && e != d && -1 < pf(b[e], d)) {
                delete b[d];
                break
            }
        }
    };
    var yk = function (a, b) {
        return function () {
            a[$c] = b.S;
            a[ad] = b.R;
            var c = b.g, d = b.s && b.s.Ha[c], e = ib[c] && ib[c].state, f = d ? void 0 !== d : b.Xa || b.ac, g = ib[c] && ib[c].firingOption, h = g && 2 == g, k = g && 1 == g;
            if (!f && void 0 === e || !f && !h || !h && !k) {
                zf(b, 0);
                var l = b.s ? b.s.event : void 0;
                a = xk(a, l ? l.c : mg());
                if (l) {
                    var m = a;
                    Sj(l, c)
                }
                sf(a, b.S, b.R)
            } else h && 0 == e || k && 0 == d ? jb[c].push(b) : h && 1 == e || k && 1 == d ? b.S() : b.R()
        }
    }, xk = function (a, b) {
        a = zj(a, new rf, b);
        return a
    }, vk = function (a, b, c) {
        var d = new jk(b);
        d.s = c;
        kk(d, hk(a));
        lk(d, ik(a));
        d.B = yk(a, d);
        return d
    };
    var Dk = function (a) {
        if (!a)return !1;
        if (a[vb] && T(a[V])) {
            for (var b = a[V], c = 0; c < b.length; c++)if (a[V] = b[c], sf(a))return !0;
            return !1
        }
        return sf(a)
    };
    var Ek = function () {
        var a = [];
        return function (b, c) {
            if (void 0 === a[b]) {
                var d = xj[b] && zj(xj[b], new rf, c), e = d;
                d && (e = Dk(d));
                a[b] = [e, d]
            }
            return a[b]
        }
    }, Pj = function (a, b) {
        for (var c = b[0], d = 0; d < c.length; d++)if (!a.P(c[d], a.c)[0])return !1;
        for (var e = b[2], d = 0; d < e.length; d++)if (a.P(e[d], a.c)[0])return !1;
        return !0
    }, Fk = function (a) {
        for (var b = new mk(a), c = 0; c < sj; c++)if (a.fa[c] && !a.pa[c])if (a.c(Z[c])) {
        } else {
            var d = a.T[c], e = vk(d, c, b);
            nk(b, c, e, d[wc], d[qe], d[He]);
            if (d[kb])break
        }
        b.addListener(a.ha);
        uk(b);
        0 < b.Y || wf(b.ya)
    }, Gk = !1, Xf = function (a, b, c, d) {
        switch (b) {
            case "gtm.js":
                if (Gk)return !1;
                Gk = !0;
                break;
            case "gtm.sync":
                if (W("gtm.snippet") != gb)return !1
        }
        W("tagTypeBlacklist");
        for (var e = {
            id: a,
            name: b,
            ha: c || Ya,
            fa: Gj(),
            pa: Gj(),
            P: Ek(),
            c: mg()
        }, f = [], g = 0; g < Ci.length; g++)if (Pj(e, Ci[g])) {
            f[g] = !0;
            for (var h = e, k = Ci[g], l = k[1], m = 0; m < l.length; m++)h.fa[l[m]] = !0;
            for (var n = k[3], m = 0; m < n.length; m++)h.pa[n[m]] = !0
        } else f[g] = !1;
        Sj(e);
        var x = [];
        for (var y = 0; y < sj; y++)if (e.fa[y] && !e.pa[y])if (e.c(Z[y])) {
        } else {
            x[y] = Z[y];
        }
        e.T = x;
        Fk(e);
        d && O(d) && d({passingRules: f, resolvedTags: e.T});
        if ("gtm.js" == b || "gtm.sync" == b)a:{
            if (Qf || Rf)break a;
            var B = z.GoogleAnalyticsObject || "ga", C = B && z[B];
            O(C) && (C("provide", "GTM-MMT2NTX", Ya), Qf = !0);
        }
        for (var K in e.T)if (e.T.hasOwnProperty(K)) {
            var F = e.T[K], A;
            if (!(A = void 0 == F[ld])) {
                var E = F[ld];
                A = !("function" != typeof String.prototype.startsWith ? 0 === E.indexOf("_implicit") : E.startsWith("_implicit"))
            }
            if (A)return !0
        }
        return !1
    };
    var Ik = function () {
    };
    var Jk = function () {
    };
    var Hk = {
        macro: function (a) {
            if (wj.contains(a))return wj.get(a)
        }
    };
    Hk.dataLayer = Of;
    Hk.onHtmlSuccess = $g(!0);
    Hk.onHtmlFailure = $g(!1);
    Hk.callback = function (a) {
        Ca.hasOwnProperty(a) && O(Ca[a]) && Ca[a]();
        delete Ca[a]
    };
    Hk.kb = function () {
        var a = z.google_tag_manager;
        a || (a = z.google_tag_manager = {});
        Sa = a;
        if (a["GTM-MMT2NTX"]) {
            var b = Sa.zones;
            b && b.registerNatural("GTM-MMT2NTX")
        } else {
            a["GTM-MMT2NTX"] = Hk;
            Ei();
            tj.push.apply(tj, Fj());
            Ij(uj, 0, "1:0,2:1,2:2,0:3,2:4,0:5,2:6,0:7,1:8,2:9,1:10,2:11,5:12");
            Ij(vj, 1, "D,N,x,BD,AM,AwB");
            Ij(xj, 1, "");
            Ij(Z, 1, "");
            Ij(Ci, 2, "");
            Ij(Di, 4, "");
            for (var c = 0; c < Z.length; c++) {
                var d = Z[c],
                    e = 1;
                d[Od] ? e = 2 : d[Ze] && (e = 0);
                ib[c] = {firingOption: e, state: void 0};
                jb[c] = []
            }
            Wf();
            hg();
            var q = z;
            if ("interactive" == M.readyState && !M.createEventObject || "complete" == M.readyState)Ef(); else {
                U(M, "DOMContentLoaded", Ef);
                U(M, "readystatechange", Ef);
                if (M.createEventObject && M.documentElement.doScroll) {
                    var x = !0;
                    try {
                        x = !q.frameElement
                    } catch (y) {
                    }
                    x && Gf()
                }
                U(q,
                    "load", Ef)
            }
            "complete" === M.readyState ? Jf() : U(z, "load", Jf);
            Jk();
            Ik()
        }
    };
    Hk.kb();
    var _vs = "res_ts:1486685860824000,srv_cl:149442816,ds:live,cv:15";
})()