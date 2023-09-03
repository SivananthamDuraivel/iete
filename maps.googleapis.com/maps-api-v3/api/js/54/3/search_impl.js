google.maps.__gjsload__('search_impl', function(_) {
    var Fhb = function(a) {
            a = a.toArray();
            U$ || (U$ = {
                K: "sssM",
                N: ["ss"]
            });
            return _.Yf(a, U$, 1)
        },
        Ghb = function(a, b) {
            _.z(a.m, 3, b)
        },
        Khb = function(a, b, c) {
            const d = _.vC(new Hhb);
            c.Bh = (0, _.la)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.$Ha(c, _.oJ(b));
            const e = [];
            e.push(_.K(c, "click", (0, _.la)(Ihb, null, a)));
            _.hb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.K(c, f, (0, _.la)(Jhb, null, a, f)))
            });
            e.push(_.K(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Ihb = function(a, b, c, d, e) {
            let f =
                null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.R(e.m, 2) ? new _.I(_.Wn(_.E(e.m, 2, _.ao).m, 1), _.Wn(_.E(e.m, 2, _.ao).m, 2)) : null;
                f.fields = {};
                const g = _.A(e.m, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.gm(e.m, 3, _.wJ, h);
                    f.fields[k.getKey()] = k.Fa()
                }
            }
            _.L(a, "click", b, c, d, f)
        },
        Jhb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.L(a, b, c, d, e, h, g)
        },
        Lhb = function() {},
        Mhb = class extends _.Q {
            constructor() {
                super()
            }
            Mb() {
                return _.H(this.m, 2)
            }
        },
        U$;
    var Nhb = class extends _.Q {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.C(this.m, 1, -1)
        }
    };
    var Hhb = class {
        constructor() {
            var a = _.wk,
                b = _.vk;
            this.h = _.hg;
            this.g = _.Wl(_.Tp, a, _.es + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Nhb(g);
                b(g)
            }
            var d = new Mhb;
            _.z(d.m, 1, a.layerId.split("|")[0]);
            _.z(d.m, 2, a.featureId);
            Ghb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.cg(d.m, 4, _.wJ);
                _.z(f.m, 1, e);
                _.z(f.m, 2, a.parameters[e])
            }
            a = Fhb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Lhb.prototype.kt = function(a) {
        if (_.xj[15]) {
            var b = a.o;
            const t = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().hf(a.g))) : a.g && _.wIa(a.g, b) && (_.hb(a.h || [], _.qh), a.h = null));
            if (t) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds"),
                    e = a.get("styler"),
                    f = a.get("mapsApiLayer"),
                    g = a.get("darkLaunch"),
                    h = a.get("mapFeatures"),
                    k = a.get("clickableCities"),
                    l = a.get("travelMapRequest"),
                    m = a.get("searchPipeMetadata"),
                    n = a.get("overlayLayer"),
                    p = a.get("caseExperimentIds"),
                    q = a.get("airQualityPipeMetadata"),
                    r = a.get("directionsPipeParameters");
                const u = new _.Fp;
                c = c.split("|");
                u.layerId = c[0];
                for (let w = 1; w < c.length; ++w) {
                    const [B, ...D] = c[w].split(":");
                    u.parameters[B] = D.join(":")
                }
                b && (u.spotlightDescription = new _.Op(b));
                d && (u.paintExperimentIds = d.slice(0));
                e && (u.styler = new _.Wo(e));
                l && (u.travelMapRequest = new _.Xja(l));
                f && (u.mapsApiLayer = new _.Gp(f));
                h && (u.mapFeatures = h);
                k && (u.clickableCities = k);
                m && (u.searchPipeMetadata = new _.vr(m));
                n && (u.overlayLayer = new _.Pp(n));
                p && (u.caseExperimentIds = p.slice(0));
                q && (u.airQualityPipeMetadata =
                    new _.Nja(q));
                r && (u.directionsPipeParameters = new _.Kja(r));
                u.darkLaunch = !!g;
                b = u;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = t.__gm.j, a.set(a.get().Gd(b))) : Khb(a, t, b);
                _.O(t, "Lg");
                _.N(t, 148282)
            }
        }
    };
    _.ih("search_impl", new Lhb);
});