/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            l = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            o = function (t) {
              return e({}, r, t);
            },
            a = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            g = "loading",
            m = "loaded",
            f = "applied",
            v = "error",
            y = "native",
            b = "data-",
            w = "ll-status",
            S = function (e, t) {
              return e.getAttribute(b + t);
            },
            C = function (e) {
              return S(e, w);
            },
            E = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            x = function (e) {
              return E(e, null);
            },
            T = function (e) {
              return null === C(e);
            },
            _ = function (e) {
              return C(e) === y;
            },
            L = [g, m, f, v],
            I = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            A = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            O = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            k = function (e) {
              return e.llTempImage;
            },
            $ = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            P = function (e, t) {
              e && (e.loadingCount += t);
            },
            M = function (e, t) {
              e && (e.toLoadCount = t);
            },
            B = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            z = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && B(s).forEach(t);
            },
            D = function (e, t) {
              B(e).forEach(t);
            },
            G = [c],
            H = [c, h],
            q = [c, d, u],
            V = function (e) {
              return !!e[p];
            },
            N = function (e) {
              return e[p];
            },
            F = function (e) {
              return delete e[p];
            },
            j = function (e, t) {
              if (!V(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            W = function (e, t) {
              if (V(e)) {
                var s = N(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            R = function (e, t, s) {
              A(e, t.class_loading),
                E(e, g),
                s && (P(s, 1), I(t.callback_loading, e, s));
            },
            Y = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            X = function (e, t) {
              Y(e, u, S(e, t.data_sizes)),
                Y(e, d, S(e, t.data_srcset)),
                Y(e, c, S(e, t.data_src));
            },
            U = {
              IMG: function (e, t) {
                z(e, function (e) {
                  j(e, q), X(e, t);
                }),
                  j(e, q),
                  X(e, t);
              },
              IFRAME: function (e, t) {
                j(e, G), Y(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                D(e, function (e) {
                  j(e, G), Y(e, c, S(e, t.data_src));
                }),
                  j(e, H),
                  Y(e, h, S(e, t.data_poster)),
                  Y(e, c, S(e, t.data_src)),
                  e.load();
              },
            },
            K = ["IMG", "IFRAME", "VIDEO"],
            Z = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                I(e.callback_finish, t);
            },
            Q = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            J = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  J(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            se = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                P(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                O(e, t.class_loading),
                t.unobserve_completed && $(e, s);
            },
            ie = function (e, t, s) {
              var i = k(e) || e;
              ee(i) ||
                (function (e, t, s) {
                  ee(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  Q(e, i, t), Q(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = _(t);
                      se(t, s, i),
                        A(t, s.class_loaded),
                        E(t, m),
                        I(s.callback_loaded, t, i),
                        n || Z(s, i);
                    })(0, e, t, s),
                      te(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = _(t);
                      se(t, s, i),
                        A(t, s.class_error),
                        E(t, v),
                        I(s.callback_error, t, i),
                        n || Z(s, i);
                    })(0, e, t, s),
                      te(i);
                  }
                );
            },
            ne = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ie(e, t, s),
                (function (e) {
                  V(e) || (e[p] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var i = S(e, t.data_bg),
                    n = S(e, t.data_bg_hidpi),
                    r = l && n ? n : i;
                  r &&
                    ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                    k(e).setAttribute(c, r),
                    R(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var i = S(e, t.data_bg_multi),
                    n = S(e, t.data_bg_multi_hidpi),
                    r = l && n ? n : i;
                  r &&
                    ((e.style.backgroundImage = r),
                    (function (e, t, s) {
                      A(e, t.class_applied),
                        E(e, f),
                        s &&
                          (t.unobserve_completed && $(e, t),
                          I(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            le = function (e, t, s) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? ne(e, t, s)
                : (function (e, t, s) {
                    ie(e, t, s),
                      (function (e, t, s) {
                        var i = U[e.tagName];
                        i && (i(e, t), R(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            re = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            oe = function (e) {
              z(e, function (e) {
                W(e, q);
              }),
                W(e, q);
            },
            ae = {
              IMG: oe,
              IFRAME: function (e) {
                W(e, G);
              },
              VIDEO: function (e) {
                D(e, function (e) {
                  W(e, G);
                }),
                  W(e, H),
                  e.load();
              },
            },
            ce = function (e, t) {
              (function (e) {
                var t = ae[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (V(e)) {
                        var t = N(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  T(e) ||
                    _(e) ||
                    (O(e, t.class_entered),
                    O(e, t.class_exited),
                    O(e, t.class_applied),
                    O(e, t.class_loading),
                    O(e, t.class_loaded),
                    O(e, t.class_error));
                })(e, t),
                x(e),
                F(e);
            },
            de = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            he = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return L.indexOf(C(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        A(e, s.class_entered),
                        O(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && $(e, s);
                        })(e, s, i),
                        I(s.callback_enter, e, t, i),
                        n || le(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      T(e) ||
                        (A(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return C(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              z(e, function (e) {
                                re(e);
                              }),
                                re(e);
                            })(e),
                            oe(e),
                            O(e, s.class_loading),
                            P(i, -1),
                            x(e),
                            I(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        I(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            pe = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            me = function (e) {
              return (function (e) {
                return C(e) === v;
              })(e);
            },
            fe = function (e, t) {
              return (function (e) {
                return pe(e).filter(T);
              })(e || ge(t));
            },
            ve = function (e, s) {
              var n = o(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        he(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), pe(s).filter(me)).forEach(function (t) {
                          O(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(n, this),
                this.update(s);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  n,
                  l = this._settings,
                  r = fe(e, l);
                M(this, r.length),
                  !s && i
                    ? ue(l)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== de.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ie(e, t, s),
                                  (function (e, t) {
                                    var s = U[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  E(e, y);
                              })(e, t, s);
                          }),
                            M(s, 0);
                        })(r, l, this)
                      : ((n = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ge(this._settings).forEach(function (e) {
                    F(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                fe(e, s).forEach(function (e) {
                  $(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ce(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var s = o(t);
              le(e, s);
            }),
            (ve.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) a(e, s);
                  else a(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var l = (t[i] = { exports: {} });
    return e[i].call(l.exports, l, l.exports, s), l.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    function i() {
      if (location.hash) return location.hash.replace("#", "");
    }
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      l = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? l(e, t) : n(e, t)),
      o = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? c(e) : d(e);
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function h(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = h(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                l = s[2],
                r = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === l) return !0;
                });
              n.push({ itemsArray: o, matchMedia: r });
            }),
            n
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("??????????????????"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("???????????? ??????????");
        } else
          this.popupLogging(
            "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("???????????? ??????????"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && u(`[??????????????]: ${e}`);
      }
    })({});
    let g = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let l = "",
          r = 0;
        t &&
          ((l = "header.header"), (r = document.querySelector(l).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: l,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (c(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", o);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          (e = r ? e - r : e),
            (e = i ? e - i : e),
            window.scrollTo({ top: e, behavior: "smooth" });
        }
        u(`[gotoBlock]: ????????...???????? ?? ${e}`);
      } else u(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
    };
    let m = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                m.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function f(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function v(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : f(t[s]) && f(e[s]) && Object.keys(t[s]).length > 0 && v(e[s], t[s]);
      });
    }
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
            : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selects??lose();
        } else this.selects??lose();
      }
      selects??lose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          l = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += l
            ? `<a ${r} ${i} href="${l}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += l ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && m.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && u(`[select]: ${e}`);
      }
    })({});
    const y = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function b() {
      const e = "undefined" != typeof document ? document : {};
      return v(e, y), e;
    }
    const w = {
      document: y,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function S() {
      const e = "undefined" != typeof window ? window : {};
      return v(e, w), e;
    }
    class C extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function E(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...E(e)) : t.push(e);
        }),
        t
      );
    }
    function x(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function T(e, t) {
      const s = S(),
        i = b();
      let n = [];
      if (!t && e instanceof C) return e;
      if (!e) return new C(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof C) return e;
        n = e;
      }
      return new C(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    T.fn = C.prototype;
    const _ = "resize scroll".split(" ");
    function L(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            _.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : T(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    L("click"),
      L("blur"),
      L("focus"),
      L("focusin"),
      L("focusout"),
      L("keyup"),
      L("keydown"),
      L("keypress"),
      L("submit"),
      L("change"),
      L("mousedown"),
      L("mousemove"),
      L("mouseup"),
      L("mouseenter"),
      L("mouseleave"),
      L("mouseout"),
      L("mouseover"),
      L("touchstart"),
      L("touchend"),
      L("touchmove"),
      L("resize"),
      L("scroll");
    const I = {
      addClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        return (
          x(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = E(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function l(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), T(t).is(s))) i.apply(t, n);
          else {
            const e = T(t).parents();
            for (let t = 0; t < e.length; t += 1)
              T(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const o = t.split(" ");
        let a;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (a = 0; a < o.length; a += 1) {
              const e = o[a];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: l }),
                t.addEventListener(e, l, n);
            }
          else
            for (a = 0; a < o.length; a += 1) {
              const e = o[a];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const l = t.split(" ");
        for (let e = 0; e < l.length; e += 1) {
          const t = l[e];
          for (let e = 0; e < this.length; e += 1) {
            const l = this[e];
            let r;
            if (
              (!s && l.dom7Listeners
                ? (r = l.dom7Listeners[t])
                : s && l.dom7LiveListeners && (r = l.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (l.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1))
                  : i ||
                    (l.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = S(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const l = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(l, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = S();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = S(),
            t = b(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            l = s.clientTop || n.clientTop || 0,
            r = s.clientLeft || n.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            a = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + o - l, left: i.left + a - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = S();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = S(),
          s = b(),
          i = this[0];
        let n, l;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = T(e), l = 0; l < n.length; l += 1) if (n[l] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof C) {
          for (n = e.nodeType ? [e] : e, l = 0; l < n.length; l += 1)
            if (n[l] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return T([]);
        if (e < 0) {
          const s = t + e;
          return T(s < 0 ? [] : [this[s]]);
        }
        return T([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = b();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof C)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = b();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof C)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e)
              ? T([this[0].nextElementSibling])
              : T([])
            : this[0].nextElementSibling
            ? T([this[0].nextElementSibling])
            : T([])
          : T([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && T(t.previousElementSibling).is(e)
              ? T([t.previousElementSibling])
              : T([])
            : t.previousElementSibling
            ? T([t.previousElementSibling])
            : T([]);
        }
        return T([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? T(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return T(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? T(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return T(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? T([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return T(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !T(i[s]).is(e)) || t.push(i[s]);
        }
        return T(t);
      },
      filter: function (e) {
        return T(x(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(I).forEach((e) => {
      Object.defineProperty(T.fn, e, { value: I[e], writable: !0 });
    });
    const A = T;
    function O(e, t = 0) {
      return setTimeout(e, t);
    }
    function k() {
      return Date.now();
    }
    function $(e, t = "x") {
      const s = S();
      let i, n, l;
      const r = (function (e) {
        const t = S();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (l = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((l =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = l.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? l.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? l.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function P(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function M(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const l = e[n];
        if (
          null != l &&
          ((i = l),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(l)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(l, i);
            void 0 !== n &&
              n.enumerable &&
              (P(t[i]) && P(l[i])
                ? l[i].__swiper__
                  ? (t[i] = l[i])
                  : M(t[i], l[i])
                : !P(t[i]) && P(l[i])
                ? ((t[i] = {}), l[i].__swiper__ ? (t[i] = l[i]) : M(t[i], l[i]))
                : (t[i] = l[i]));
          }
        }
      }
      var i;
      return t;
    }
    function B(e, t, s) {
      e.style.setProperty(t, s);
    }
    function z({ swiper: e, targetPosition: t, side: s }) {
      const i = S(),
        n = -e.translate;
      let l,
        r = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const a = t > n ? "next" : "prev",
        c = (e, t) => ("next" === a && e >= t) || ("prev" === a && e <= t),
        d = () => {
          (l = new Date().getTime()), null === r && (r = l);
          const a = Math.max(Math.min((l - r) / o, 1), 0),
            u = 0.5 - Math.cos(a * Math.PI) / 2;
          let h = n + u * (t - n);
          if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [s]: h }), c(h, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: h });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(d);
        };
      d();
    }
    let D, G, H;
    function q() {
      return (
        D ||
          (D = (function () {
            const e = S(),
              t = b();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        D
      );
    }
    function V(e = {}) {
      return (
        G ||
          (G = (function ({ userAgent: e } = {}) {
            const t = q(),
              s = S(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              l = { ios: !1, android: !1 },
              r = s.screen.width,
              o = s.screen.height,
              a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let p = "MacIntel" === i;
            return (
              !c &&
                p &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${o}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (p = !1)),
              a && !h && ((l.os = "android"), (l.android = !0)),
              (c || u || d) && ((l.os = "ios"), (l.ios = !0)),
              l
            );
          })(e)),
        G
      );
    }
    function N() {
      return (
        H ||
          (H = (function () {
            const e = S();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        H
      );
    }
    const F = {
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const j = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: l, rtlTranslate: r, wrongRTL: o } = e,
          a = e.virtual && i.virtual.enabled,
          c = a ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          u = a ? e.virtual.slides.length : d.length;
        let h = [];
        const p = [],
          g = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let f = i.slidesOffsetAfter;
        "function" == typeof f && (f = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = i.spaceBetween,
          w = -m,
          S = 0,
          C = 0;
        if (void 0 === l) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * l),
          (e.virtualSize = -b),
          r
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (B(e.wrapperEl, "--swiper-centered-offset-before", ""),
            B(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = i.grid && i.grid.rows > 1 && e.grid;
        let x;
        E && e.grid.initSlides(u);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < u; n += 1) {
          x = 0;
          const r = d.eq(n);
          if (
            (E && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const l = getComputedStyle(r[0]),
                o = r[0].style.transform,
                a = r[0].style.webkitTransform;
              if (
                (o && (r[0].style.transform = "none"),
                a && (r[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                x = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(l, "width"),
                  t = s(l, "padding-left"),
                  i = s(l, "padding-right"),
                  n = s(l, "margin-left"),
                  o = s(l, "margin-right"),
                  a = l.getPropertyValue("box-sizing");
                if (a && "border-box" === a) x = e + n + o;
                else {
                  const { clientWidth: s, offsetWidth: l } = r[0];
                  x = e + t + i + n + o + (l - s);
                }
              }
              o && (r[0].style.transform = o),
                a && (r[0].style.webkitTransform = a),
                i.roundLengths && (x = Math.floor(x));
            } else
              (x = (l - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (x = Math.floor(x)),
                d[n] && (d[n].style[t("width")] = `${x}px`);
            d[n] && (d[n].swiperSlideSize = x),
              g.push(x),
              i.centeredSlides
                ? ((w = w + x / 2 + S / 2 + b),
                  0 === S && 0 !== n && (w = w - l / 2 - b),
                  0 === n && (w = w - l / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  C % i.slidesPerGroup == 0 && h.push(w),
                  p.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  p.push(w),
                  (w = w + x + b)),
              (e.virtualSize += x + b),
              (S = x),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, l) + f),
          r &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(x, h, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < h.length; s += 1) {
            let n = h[s];
            i.roundLengths && (n = Math.floor(n)),
              h[s] <= e.virtualSize - l && t.push(n);
          }
          (h = t),
            Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - l);
        }
        if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          g.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - l;
          h = h.map((e) => (e < 0 ? -m : e > t ? t + f : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (g.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < l)
          ) {
            const t = (l - e) / 2;
            h.forEach((e, s) => {
              h[s] = e - t;
            }),
              p.forEach((e, s) => {
                p[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: g,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          B(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
            B(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - g[g.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        u !== c && e.emit("slidesLengthChange"),
          h.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          l = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            l = e > l ? e : l;
          }
        (l || 0 === l) && t.$wrapperEl.css("height", `${l}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: l } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let a = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (a -= i[0].swiperSlideOffset);
          const c =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - a) /
              (o.swiperSlideSize + s.spaceBetween),
            d =
              (r - l[0] + (s.centeredSlides ? t.minTranslate() : 0) - a) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(r - a),
            h = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = n ? -c : c),
            (o.originalProgress = n ? -d : d);
        }
        t.visibleSlides = A(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: l, isEnd: r } = t;
        const o = l,
          a = r;
        0 === i
          ? ((n = 0), (l = !0), (r = !0))
          : ((n = (e - t.minTranslate()) / i), (l = n <= 0), (r = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: l, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          l && !o && t.emit("reachBeginning toEdge"),
          r && !a && t.emit("reachEnd toEdge"),
          ((o && !l) || (a && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: l,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let a = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === a.length &&
          ((a = t.eq(0)), a.addClass(s.slideNextClass));
        let c = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${a.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${a.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: l,
            activeIndex: r,
            realIndex: o,
            snapIndex: a,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          l.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(s) >= 0) c = n.indexOf(s);
        else {
          const e = Math.min(l.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / l.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === r))
          return void (
            c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = A(e).closest(`.${s.slideClass}`)[0];
        let n,
          l = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (l = !0), (n = e);
              break;
            }
        if (!i || !l)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                A(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const W = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let l = $(n[0], e);
        return s && (l = -l), l || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: l,
            wrapperEl: r,
            progress: o,
          } = s;
        let a,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              l.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (a = 0 === u ? 0 : (e - s.minTranslate()) / u),
          a !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const l = this,
          { params: r, wrapperEl: o } = l;
        if (l.animating && r.preventInteractionOnTransition) return !1;
        const a = l.minTranslate(),
          c = l.maxTranslate();
        let d;
        if (
          ((d = i && e > a ? a : i && e < c ? c : e),
          l.updateProgress(d),
          r.cssMode)
        ) {
          const e = l.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!l.support.smoothScroll)
              return (
                z({ swiper: l, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (l.setTransition(0),
              l.setTranslate(d),
              s &&
                (l.emit("beforeTransitionStart", t, n),
                l.emit("transitionEnd")))
            : (l.setTransition(t),
              l.setTranslate(d),
              s &&
                (l.emit("beforeTransitionStart", t, n),
                l.emit("transitionStart")),
              l.animating ||
                ((l.animating = !0),
                l.onTranslateToWrapperTransitionEnd ||
                  (l.onTranslateToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        l.onTranslateToWrapperTransitionEnd
                      ),
                      (l.onTranslateToWrapperTransitionEnd = null),
                      delete l.onTranslateToWrapperTransitionEnd,
                      s && l.emit("transitionEnd"));
                  }),
                l.$wrapperEl[0].addEventListener(
                  "transitionend",
                  l.onTranslateToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  l.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function R({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: l } = e;
      let r = s;
      if (
        (r || (r = n > l ? "next" : n < l ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== l)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === r
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const Y = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const l = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: o,
          snapGrid: a,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: g,
        } = l;
        if (
          (l.animating && o.preventInteractionOnTransition) ||
          (!g && !i && !n)
        )
          return !1;
        const m = Math.min(l.params.slidesPerGroupSkip, r);
        let f = m + Math.floor((r - m) / l.params.slidesPerGroup);
        f >= a.length && (f = a.length - 1),
          (u || o.initialSlide || 0) === (d || 0) &&
            s &&
            l.emit("beforeSlideChangeStart");
        const v = -a[f];
        if ((l.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (l.initialized && r !== u) {
          if (!l.allowSlideNext && v < l.translate && v < l.minTranslate())
            return !1;
          if (
            !l.allowSlidePrev &&
            v > l.translate &&
            v > l.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let y;
        if (
          ((y = r > u ? "next" : r < u ? "prev" : "reset"),
          (h && -v === l.translate) || (!h && v === l.translate))
        )
          return (
            l.updateActiveIndex(r),
            o.autoHeight && l.updateAutoHeight(),
            l.updateSlidesClasses(),
            "slide" !== o.effect && l.setTranslate(v),
            "reset" !== y && (l.transitionStart(s, y), l.transitionEnd(s, y)),
            !1
          );
        if (o.cssMode) {
          const e = l.isHorizontal(),
            s = h ? v : -v;
          if (0 === t) {
            const t = l.virtual && l.params.virtual.enabled;
            t &&
              ((l.wrapperEl.style.scrollSnapType = "none"),
              (l._immediateVirtual = !0)),
              (p[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (l.wrapperEl.style.scrollSnapType = ""),
                    (l._swiperImmediateVirtual = !1);
                });
          } else {
            if (!l.support.smoothScroll)
              return (
                z({ swiper: l, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          l.setTransition(t),
          l.setTranslate(v),
          l.updateActiveIndex(r),
          l.updateSlidesClasses(),
          l.emit("beforeTransitionStart", t, i),
          l.transitionStart(s, y),
          0 === t
            ? l.transitionEnd(s, y)
            : l.animating ||
              ((l.animating = !0),
              l.onSlideToWrapperTransitionEnd ||
                (l.onSlideToWrapperTransitionEnd = function (e) {
                  l &&
                    !l.destroyed &&
                    e.target === this &&
                    (l.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    ),
                    l.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      l.onSlideToWrapperTransitionEnd
                    ),
                    (l.onSlideToWrapperTransitionEnd = null),
                    delete l.onSlideToWrapperTransitionEnd,
                    l.transitionEnd(s, y));
                }),
              l.$wrapperEl[0].addEventListener(
                "transitionend",
                l.onSlideToWrapperTransitionEnd
              ),
              l.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                l.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        const n = this;
        let l = e;
        return n.params.loop && (l += n.loopedSlides), n.slideTo(l, t, s, i);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { animating: n, enabled: l, params: r } = i;
        if (!l) return i;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o;
        if (r.loop) {
          if (n && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + a, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            animating: l,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: c,
          } = i;
        if (!c) return i;
        if (n.loop) {
          if (l && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(a ? i.translate : -i.translate),
          h = r.map((e) => d(e));
        let p = r[h.indexOf(u) - 1];
        if (void 0 === p && n.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (p = r[e > 0 ? e - 1 : e]);
        }
        let g = 0;
        return (
          void 0 !== p &&
            ((g = o.indexOf(p)),
            g < 0 && (g = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
              (g = Math.max(g, 0)))),
          n.rewind && i.isBeginning
            ? i.slideTo(i.slides.length - 1, e, t, s)
            : i.slideTo(g, e, t, s)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let l = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, l),
          o = r + Math.floor((l - r) / n.params.slidesPerGroup),
          a = n.rtlTranslate ? n.translate : -n.translate;
        if (a >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          a - e > (n.snapGrid[o + 1] - e) * i && (l += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          a - e <= (n.snapGrid[o] - e) * i && (l -= n.params.slidesPerGroup);
        }
        return (
          (l = Math.max(l, 0)),
          (l = Math.min(l, n.slidesGrid.length - 1)),
          n.slideTo(l, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          l = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? l < e.loopedSlides - i / 2 ||
                l > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (l = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  O(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l)
              : l > e.slides.length - i
              ? (e.loopFix(),
                (l = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                O(() => {
                  e.slideTo(l);
                }))
              : e.slideTo(l);
        } else e.slideTo(l);
      },
    };
    const X = {
      loopCreate: function () {
        const e = this,
          t = b(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? A(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let l = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (l.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = A(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            l = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = l.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > l.length && (e.loopedSlides = l.length);
        const r = [],
          o = [];
        l.each((t, s) => {
          const i = A(t);
          s < e.loopedSlides && o.push(t),
            s < l.length && s >= l.length - e.loopedSlides && r.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          n.append(A(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          n.prepend(A(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: l,
          snapGrid: r,
          rtlTranslate: o,
        } = e;
        let a;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < i) {
          (a = s.length - 3 * i + t), (a += i);
          e.slideTo(a, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (a = -s.length + t + i), (a += i);
          e.slideTo(a, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = l), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function U(e) {
      const t = this,
        s = b(),
        i = S(),
        n = t.touchEventsData,
        { params: l, touches: r, enabled: o } = t;
      if (!o) return;
      if (t.animating && l.preventInteractionOnTransition) return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      let c = A(a.target);
      if ("wrapper" === l.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === a.type),
        !n.isTouchEvent && "which" in a && 3 === a.which)
      )
        return;
      if (!n.isTouchEvent && "button" in a && a.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!l.noSwipingClass &&
        "" !== l.noSwipingClass &&
        a.target &&
        a.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = A(e.path[0]));
      const d = l.noSwipingSelector
          ? l.noSwipingSelector
          : `.${l.noSwipingClass}`,
        u = !(!a.target || !a.target.shadowRoot);
      if (
        l.noSwiping &&
        (u
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== b() && s !== S()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(d, a.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (l.swipeHandler && !c.closest(l.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
        (r.currentY =
          "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
      const h = r.currentX,
        p = r.currentY,
        g = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        m = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
      if (g && (h <= m || h >= i.innerWidth - m)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = h),
        (r.startY = p),
        (n.touchStartTime = k()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== a.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) && (e = !1),
          s.activeElement &&
            A(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && l.touchStartPreventDefault;
        (!l.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          a.preventDefault();
      }
      t.emit("touchStart", a);
    }
    function K(e) {
      const t = b(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: l, rtlTranslate: r, enabled: o } = s;
      if (!o) return;
      let a = e;
      if ((a.originalEvent && (a = a.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", a)
        );
      if (i.isTouchEvent && "touchmove" !== a.type) return;
      const c =
          "touchmove" === a.type &&
          a.targetTouches &&
          (a.targetTouches[0] || a.changedTouches[0]),
        d = "touchmove" === a.type ? c.pageX : a.pageX,
        u = "touchmove" === a.type ? c.pageY : a.pageY;
      if (a.preventedByNestedSwiper) return (l.startX = d), void (l.startY = u);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(l, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = k()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < l.startY && s.translate <= s.maxTranslate()) ||
            (u > l.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < l.startX && s.translate <= s.maxTranslate()) ||
          (d > l.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        a.target === t.activeElement &&
        A(a.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", a),
        a.targetTouches && a.targetTouches.length > 1)
      )
        return;
      (l.currentX = d), (l.currentY = u);
      const h = l.currentX - l.startX,
        p = l.currentY - l.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + p ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && l.currentY === l.startY) ||
        (s.isVertical() && l.currentX === l.startX)
          ? (i.isScrolling = !1)
          : h * h + p * p >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", a),
        void 0 === i.startMoving &&
          ((l.currentX === l.startX && l.currentY === l.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && a.cancelable && a.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && a.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", a)),
        s.emit("sliderMove", a),
        (i.isMoved = !0);
      let g = s.isHorizontal() ? h : p;
      (l.diff = g),
        (g *= n.touchRatio),
        r && (g = -g),
        (s.swipeDirection = g > 0 ? "prev" : "next"),
        (i.currentTranslate = g + i.startTranslate);
      let m = !0,
        f = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (f = 0),
        g > 0 && i.currentTranslate > s.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + g) ** f))
          : g < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - g) ** f)),
        m && (a.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (l.startX = l.currentX),
            (l.startY = l.currentY),
            (i.currentTranslate = i.startTranslate),
            void (l.diff = s.isHorizontal()
              ? l.currentX - l.startX
              : l.currentY - l.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Z(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: l,
          slidesGrid: r,
          enabled: o,
        } = t;
      if (!o) return;
      let a = e;
      if (
        (a.originalEvent && (a = a.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", a),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = k(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = a.path || (a.composedPath && a.composedPath());
        t.updateClickedSlide((e && e[0]) || a.target),
          t.emit("tap click", a),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", a);
      }
      if (
        ((s.lastClickTime = k()),
        O(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = i.followFinger
          ? l
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let h = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== r[e + t]
          ? u >= r[e] && u < r[e + t] && ((h = e), (p = r[e + t] - r[e]))
          : u >= r[e] && ((h = e), (p = r[r.length - 1] - r[r.length - 2]));
      }
      const g = (u - r[h]) / p,
        m = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio ? t.slideTo(h + m) : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio ? t.slideTo(h + m) : t.slideTo(h));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
          ? a.target === t.navigation.nextEl
            ? t.slideTo(h + m)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(h + m),
            "prev" === t.swipeDirection && t.slideTo(h));
      }
    }
    function Q() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: l } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
    }
    function J(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const l = e.maxTranslate() - e.minTranslate();
      (n = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let te = !1;
    function se() {}
    const ie = (e, t) => {
      const s = b(),
        {
          params: i,
          touchEvents: n,
          el: l,
          wrapperEl: r,
          device: o,
          support: a,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (a.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !a.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        l[d](n.start, e.onTouchStart, t),
          l[d](
            n.move,
            e.onTouchMove,
            a.passiveListener ? { passive: !1, capture: c } : c
          ),
          l[d](n.end, e.onTouchEnd, t),
          n.cancel && l[d](n.cancel, e.onTouchEnd, t);
      } else
        l[d](n.start, e.onTouchStart, !1),
          s[d](n.move, e.onTouchMove, c),
          s[d](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        l[d]("click", e.onClick, !0),
        i.cssMode && r[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Q,
              !0
            )
          : e[u]("observerUpdate", Q, !0);
    };
    const ne = {
        attachEvents: function () {
          const e = this,
            t = b(),
            { params: s, support: i } = e;
          (e.onTouchStart = U.bind(e)),
            (e.onTouchMove = K.bind(e)),
            (e.onTouchEnd = Z.bind(e)),
            s.cssMode && (e.onScroll = ee.bind(e)),
            (e.onClick = J.bind(e)),
            i.touch && !te && (t.addEventListener("touchstart", se), (te = !0)),
            ie(e, "on");
        },
        detachEvents: function () {
          ie(this, "off");
        },
      },
      le = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const re = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: l,
          } = e,
          r = n.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const a = (o in r ? r[o] : void 0) || e.originalParams,
          c = le(e, n),
          d = le(e, a),
          u = n.enabled;
        c && !d
          ? (l.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (l.addClass(`${n.containerModifierClass}grid`),
            ((a.grid.fill && "column" === a.grid.fill) ||
              (!a.grid.fill && "column" === n.grid.fill)) &&
              l.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const h = a.direction && a.direction !== n.direction,
          p = n.loop && (a.slidesPerView !== n.slidesPerView || h);
        h && s && e.changeDirection(), M(e.params, a);
        const g = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !g ? e.disable() : !u && g && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", a),
          p &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", a);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let i = !1;
        const n = S(),
          l = "window" === t ? n.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: l * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: l, value: o } = r[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = l)
            : o <= s.clientWidth && (i = l);
        }
        return i || "max";
      },
    };
    const oe = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: l,
            support: r,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: l.android },
              { ios: l.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ae = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ce(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                M(t, s))
              : M(t, s))
          : M(t, s);
      };
    }
    const de = {
        eventsEmitter: F,
        update: j,
        translate: W,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Y,
        loop: X,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ne,
        breakpoints: re,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: oe,
        images: {
          loadImage: function (e, t, s, i, n, l) {
            const r = S();
            let o;
            function a() {
              l && l();
            }
            A(e).parent("picture")[0] || (e.complete && n)
              ? a()
              : t
              ? ((o = new r.Image()),
                (o.onload = a),
                (o.onerror = a),
                i && (o.sizes = i),
                s && (o.srcset = s),
                t && (o.src = t))
              : a();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ue = {};
    class he {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = M({}, s)),
          t && !s.el && (s.el = t),
          s.el && A(s.el).length > 1)
        ) {
          const e = [];
          return (
            A(s.el).each((t) => {
              const i = M({}, s, { el: t });
              e.push(new he(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = q()),
          (i.device = V({ userAgent: s.userAgent })),
          (i.browser = N()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
        const n = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: ce(s, n),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const l = M({}, ae, n);
        return (
          (i.params = M({}, l, ue, s)),
          (i.originalParams = M({}, i.params)),
          (i.passedParams = M({}, s)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = A),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: A(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: k(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: l,
          size: r,
          activeIndex: o,
        } = this;
        let a = 1;
        if (s.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (a += 1), t > r && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (a += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? n[e] + l[e] - n[o] < r : n[e] - n[o] < r) && (a += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < r && (a += 1);
          }
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = A(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = A(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = b().createElement("div");
          (n = A(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, $el: n, $wrapperEl: l, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              l.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        M(ue, e);
      }
      static get extendedDefaults() {
        return ue;
      }
      static get defaults() {
        return ae;
      }
      static installModule(e) {
        he.prototype.__modules__ || (he.prototype.__modules__ = []);
        const t = he.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => he.installModule(e)), he)
          : (he.installModule(e), he);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        he.prototype[t] = de[e][t];
      });
    }),
      he.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = S();
          let n = null;
          const l = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            r = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  const { width: s, height: i } = e;
                  let n = s,
                    r = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((n = s ? s.width : (t[0] || t).inlineSize),
                        (r = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === s && r === i) || l();
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", l),
                i.addEventListener("orientationchange", r));
          }),
            t("destroy", () => {
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", l),
                i.removeEventListener("orientationchange", r);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            l = S(),
            r = (e, t = {}) => {
              const s = new (l.MutationObserver || l.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  l.requestAnimationFrame
                    ? l.requestAnimationFrame(t)
                    : l.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.$el[0], { childList: e.params.observeSlideChildren }),
                  r(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const pe = he;
    function ge(e, t, s, i) {
      const n = b();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((l) => {
            if (!s[l] && !0 === s.auto) {
              let r = e.$el.children(`.${i[l]}`)[0];
              r ||
                ((r = n.createElement("div")),
                (r.className = i[l]),
                e.$el.append(r)),
                (s[l] = r),
                (t[l] = r);
            }
          }),
        s
      );
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      function n(t) {
        let s;
        return (
          t &&
            ((s = A(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function l(t, s) {
        const i = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](i.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function r() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        l(s, e.isBeginning && !e.params.rewind),
          l(t, e.isEnd && !e.params.rewind);
      }
      function o(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
      }
      function a(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = ge(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = n(t.nextEl),
          i = n(t.prevEl);
        s && s.length > 0 && s.on("click", a),
          i && i.length > 0 && i.on("click", o),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
      }
      function d() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", a), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", o),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          c(), r();
        }),
        s("toEdge fromEdge lock unlock", () => {
          r();
        }),
        s("destroy", () => {
          d();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: n, $prevEl: l } = e.navigation,
            r = s.target;
          if (e.params.navigation.hideOnClick && !A(r).is(l) && !A(r).is(n)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === r || e.pagination.el.contains(r))
            )
              return;
            let t;
            n
              ? (t = n.hasClass(e.params.navigation.hiddenClass))
              : l && (t = l.hasClass(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(e.params.navigation.hiddenClass),
              l && l.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: r, init: c, destroy: d });
    }
    function fe(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ve({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let l;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let r = 0;
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function a(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function c() {
        const t = e.rtl,
          s = e.params.pagination;
        if (o()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > n - 1 - 2 * e.loopedSlides && (d -= n - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let n, o, u;
          if (
            (s.dynamicBullets &&
              ((l = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                l * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += d - (e.previousIndex - e.loopedSlides || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (n = Math.max(d - r, 0)),
              (o = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (o + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            i.each((e) => {
              const t = A(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && a(t, "prev"),
                  i === o && a(t, "next"));
            });
          else {
            const t = i.eq(d),
              l = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = i.eq(n),
                r = i.eq(o);
              for (let e = n; e <= o; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (l >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else a(t, "prev"), a(r, "next");
              else a(t, "prev"), a(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (l * n - l) / 2 - u * l,
              o = t ? "right" : "left";
            i.css(e.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (c.find(fe(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            c.find(fe(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / u;
          let n = 1,
            l = 1;
          "horizontal" === t ? (n = i) : (l = i),
            c
              .find(fe(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (c.html(s.renderCustom(e, d + 1, u)), i("paginationRender", c[0]))
          : i("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function d() {
        const t = e.params.pagination;
        if (o()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          n = e.pagination.$el;
        let l = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (l += t.renderBullet.call(e, s, t.bulletClass))
              : (l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          n.html(l), (e.pagination.bullets = n.find(fe(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((l = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          n.html(l)),
          "progressbar" === t.type &&
            ((l = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            n.html(l)),
          "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = ge(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = A(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => A(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (r = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", fe(t.bulletClass), function (t) {
              t.preventDefault();
              let s = A(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function h() {
        const t = e.params.pagination;
        if (o()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", fe(t.bulletClass));
      }
      s("init", () => {
        u(), d(), c();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        s("snapIndexChange", () => {
          e.params.loop || c();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (d(), c());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (d(), c());
        }),
        s("destroy", () => {
          h();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          c();
        }),
        s("click", (t, s) => {
          const n = s.target,
            { $el: l } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            l.length > 0 &&
            !A(n).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = l.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              l.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: d,
          update: c,
          init: u,
          destroy: h,
        });
    }
    function ye() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ye(),
        document.querySelector(".courses__slider") &&
          new pe(".courses__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !0,
            pagination: {
              el: ".slider-courses__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".slider-courses__controll-next",
              prevEl: ".slider-courses__controll-prev",
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: !0,
                centeredSlides: !1,
              },
              768: { slidesPerView: 1.3, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: !0 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".school-gallery__slider") &&
          new pe(".school-gallery__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-school-gallery__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".school-gallery-swiper-button-next",
              prevEl: ".school-gallery-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".masters__slider") &&
          new pe(".masters__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            pagination: {
              el: ".slider-masters__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.6, spaceBetween: 10, autoHeight: !0 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".feedbacks__slider") &&
          new pe(".feedbacks__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-feedbacks__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".feedbacks-swiper-button-next",
              prevEl: ".feedbacks-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1, spaceBetween: 10 },
              992: { slidesPerView: 1, spaceBetween: 20 },
              1268: { slidesPerView: 1, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".manic-gallery__slider") &&
          new pe(".manic-gallery__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-manik-gallery__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".manik-gallery-swiper-button-next",
              prevEl: ".manik-gallery-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".visage__slider") &&
          new pe(".visage__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-visage-gallery__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".services-gallery-swiper-button-next",
              prevEl: ".services-gallery-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".depilation__slider") &&
          new pe(".depilation__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-depilation-gallery__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".depilation-gallery-swiper-button-next",
              prevEl: ".depilation-gallery-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".solarium__slider") &&
          new pe(".solarium__slider", {
            modules: [me, ve],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 40,
            autoHeight: !1,
            speed: 800,
            loop: !0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            pagination: {
              el: ".slider-solarium-gallery__controll",
              clickable: !0,
              type: "fraction",
              renderFraction: (e, t) =>
                `\n      <span class="${e}"></span> /\n      <span class="${t}"></span>`,
            },
            navigation: {
              nextEl: ".solarium-gallery-swiper-button-next",
              prevEl: ".solarium-gallery-swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          });
    });
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
          ),
            h(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                l = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, l);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && u(`[??????????????????????]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let be = !1;
    setTimeout(() => {
      if (be) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var we = function () {
      return (
        (we =
          Object.assign ||
          function (e) {
            for (var t, s = 1, i = arguments.length; s < i; s++)
              for (var n in (t = arguments[s]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        we.apply(this, arguments)
      );
    };
    var Se = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, s) {
          var i = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(i)
            ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
              (e.style["webkit" + i] = s),
              (e.style["moz" + i] = s),
              (e.style["ms" + i] = s),
              (e.style["o" + i] = s))
            : (e.style[i] = s);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var s = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== s.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (s) {
                s.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return Ce(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? Ce(this.selector[0])
            : Ce(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return Ce(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return Ce(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var s = this;
          return (
            this._each(function (i) {
              s._setCssVendorPrefix(i, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, s) {
          var i = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(s),
                  i.selector.addEventListener(t.split(".")[0], s);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var s = this;
          return (
            this.on(e, function () {
              s.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var s = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (i) {
                s.isEventMatched(t, i) &&
                  (e.eventListeners[i].forEach(function (e) {
                    s.selector.removeEventListener(i.split(".")[0], e);
                  }),
                  (e.eventListeners[i] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var s = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(s), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e).then(function (e) {
              t.selector.innerHTML = e;
            }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = Ce("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function Ce(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new Se(e)
      );
    }
    var Ee = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function xe(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Te = function (e, t, s, i) {
        void 0 === s && (s = 0);
        var n = Ce(e).attr("data-lg-size") || i;
        if (n) {
          var l = n.split(",");
          if (l[1])
            for (var r = window.innerWidth, o = 0; o < l.length; o++) {
              var a = l[o];
              if (parseInt(a.split("-")[2], 10) > r) {
                n = a;
                break;
              }
              o === l.length - 1 && (n = a);
            }
          var c = n.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            h = t.width(),
            p = t.height() - s,
            g = Math.min(h, d),
            m = Math.min(p, u),
            f = Math.min(g / d, m / u);
          return { width: d * f, height: u * f };
        }
      },
      _e = function (e, t, s, i, n) {
        if (n) {
          var l = Ce(e).find("img").first();
          if (l.get()) {
            var r = t.get().getBoundingClientRect(),
              o = r.width,
              a = t.height() - (s + i),
              c = l.width(),
              d = l.height(),
              u = l.style(),
              h =
                (o - c) / 2 -
                l.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                Ce(window).scrollLeft() +
                r.left,
              p =
                (a - d) / 2 -
                l.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                Ce(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (h *= -1) +
              "px, " +
              (p *= -1) +
              "px, 0) scale3d(" +
              c / n.width +
              ", " +
              d / n.height +
              ", 1)"
            );
          }
        }
      },
      Le = function (e, t, s, i, n, l) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          s +
          "; height: " +
          t +
          "; max-height:" +
          i +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (l ? 'title="' + l + '"' : "") +
          ' src="' +
          n +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      Ie = function (e, t, s, i, n, l) {
        var r =
            "<img " +
            s +
            " " +
            (i ? 'srcset="' + i + '"' : "") +
            "  " +
            (n ? 'sizes="' + n + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          o = "";
        l &&
          (o = ("string" == typeof l ? JSON.parse(l) : l).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (s) {
                t += " " + s + '="' + e[s] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + o + r;
      },
      Ae = function (e) {
        for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
          var l = e[n].split(" ");
          "" === l[0] && l.splice(0, 1), s.push(l[0]), t.push(l[1]);
        }
        for (var r = window.innerWidth, o = 0; o < t.length; o++)
          if (parseInt(t[o], 10) > r) {
            i = s[o];
            break;
          }
        return i;
      },
      Oe = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      ke = function (e, t, s, i) {
        return (
          '<div class="lg-video-cont ' +
          (i && i.youtube
            ? "lg-has-youtube"
            : i && i.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          s +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      $e = function (e, t, s, i) {
        var n = [],
          l = (function () {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
              e += arguments[t].length;
            var i = Array(e),
              n = 0;
            for (t = 0; t < s; t++)
              for (var l = arguments[t], r = 0, o = l.length; r < o; r++, n++)
                i[n] = l[r];
            return i;
          })(Ee, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, r = 0; r < e.attributes.length; r++) {
              var o = e.attributes[r];
              if (o.specified) {
                var a = xe(o.name),
                  c = "";
                l.indexOf(a) > -1 && (c = a), c && (t[c] = o.value);
              }
            }
            var d = Ce(e),
              u = d.find("img").first().attr("alt"),
              h = d.attr("title"),
              p = i ? d.attr(i) : d.find("img").first().attr("src");
            (t.thumb = p),
              s && !t.subHtml && (t.subHtml = h || u || ""),
              (t.alt = u || h || ""),
              n.push(t);
          }),
          n
        );
      },
      Pe = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      Me = function (e, t, s) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (s + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var i = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          n = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          l = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return i
          ? { youtube: i }
          : n
          ? { vimeo: n }
          : l
          ? { wistia: l }
          : void 0;
      },
      Be = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
      },
      ze = "lgAfterAppendSlide",
      De = "lgInit",
      Ge = "lgHasVideo",
      He = "lgContainerResize",
      qe = "lgUpdateSlides",
      Ve = "lgAfterAppendSubHtml",
      Ne = "lgBeforeOpen",
      Fe = "lgAfterOpen",
      je = "lgSlideItemLoad",
      We = "lgBeforeSlide",
      Re = "lgAfterSlide",
      Ye = "lgPosterClick",
      Xe = "lgDragStart",
      Ue = "lgDragMove",
      Ke = "lgDragEnd",
      Ze = "lgBeforeNextSlide",
      Qe = "lgBeforePrevSlide",
      Je = "lgBeforeClose",
      et = "lgAfterClose",
      tt = 0,
      st = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (tt++,
            (this.lgId = tt),
            (this.el = e),
            (this.LGel = Ce(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = we(we({}, Be), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : Pe())
            ) {
              var t = we(
                we({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = we(we({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(De, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var i = s.items[t],
                    n = Ce(i),
                    l = Se.generateUUID();
                  n.attr("data-lg-id", l).on(
                    "click.lgcustom-item-" + l,
                    function (s) {
                      s.preventDefault();
                      var n = e.settings.index || t;
                      e.openGallery(n, i);
                    }
                  );
                },
                s = this,
                i = 0;
              i < this.items.length;
              i++
            )
              t(i);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, Ce));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return Ce(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return Ce("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                s = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="Previous slide" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="Next slide" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var i = "";
              this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
              var n = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                l = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                r =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                o =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="Close gallery" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                a = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="Toggle maximize" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                c =
                  '\n        <div class="' +
                  r +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  n +
                  " " +
                  l +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  i +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  a +
                  "\n                    " +
                  o +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              Ce(this.settings.container).css("position", "relative").append(c),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="Download" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                Ce(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                s = t.top,
                i = t.bottom;
              if (
                ((this.currentImageSize = Te(
                  this.items[this.index],
                  this.outer,
                  s + i,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(He);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var s = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var s = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var i = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === s && ((i = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                this.loadContent(i, !0),
                this.getSlideItem(i).addClass("lg-current"),
                (this.index = i),
                this.updateCurrentCounter(i),
                this.LGel.trigger(qe);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = Ce(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return $e(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (e.prototype.openGallery = function (e, t) {
            var s = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.get().focus(),
                this.outer.removeClass("lg-hide-items"),
                this.$container.addClass("lg-show");
              var i = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = i;
              var n = "";
              i.forEach(function (e) {
                n = n + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(n),
                this.addHtml(e);
              var l = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var r = this.mediaContainerPosition,
                o = r.top,
                a = r.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(o, a);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Te(
                  t,
                  this.outer,
                  o + a,
                  c && this.settings.videoMaxSize
                )),
                (l = _e(t, this.outer, o, a, this.currentImageSize))),
                (this.zoomFromOrigin && l) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(Ne),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = Ce(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && l) {
                    var t = s.getSlideItem(e);
                    t.css("transform", l),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms"
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    (s.zoomFromOrigin && l) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(e, !1, !1, !1),
                    s.LGel.trigger(Fe);
                }),
                document.body === this.settings.container &&
                  Ce("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              s =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              i = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (i ? i.clientHeight : 0) + s };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    }
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, s;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (s = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !s)
            )
              if (t) {
                var i = t.substring(0, 1);
                ("." !== i && "#" !== i) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? Ce(this.items).eq(e).find(t).first().html()
                      : Ce(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var n = Ce(this.getSlideItemId(e));
              s
                ? n.load(s)
                : n.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(Ve, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
              this.loadContent(e - s, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, s) {
            var i;
            if ((this.settings.dynamic || (i = Ce(this.items).eq(t)), i)) {
              var n = void 0;
              if (
                !(n = this.settings.exThumbImage
                  ? i.attr(this.settings.exThumbImage)
                  : i.find("img").first().attr("src"))
              )
                return "";
              var l =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                n +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                l
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, s) {
            var i = this.galleryItems[s],
              n = i.alt,
              l = i.srcset,
              r = i.sizes,
              o = i.sources,
              a = n ? 'alt="' + n + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, s, a)
                  : Ie(s, e, a, l, r, o)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
            var n = e.find(".lg-object").first();
            Oe(n.get()) || t
              ? s()
              : (n.on("load.lg error.lg", function () {
                  s && s();
                }),
                n.on("error.lg", function () {
                  i && i();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, s, i, n, l) {
            var r = this;
            this.onSlideObjectLoad(
              e,
              l,
              function () {
                r.triggerSlideItemLoad(e, t, s, i, n);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
            var l = this,
              r = this.galleryItems[t],
              o = n && "video" === this.getSlideType(r) && !r.poster ? i : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                l.LGel.trigger(je, {
                  index: t,
                  delay: s || 0,
                  isFirstSlide: n,
                });
            }, o);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, s) {
              (e.__slideVideoInfo = Me(e.src, !!e.video, s)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var s = this,
              i = this.galleryItems[e],
              n = Ce(this.getSlideItemId(e)),
              l = i.poster,
              r = i.srcset,
              o = i.sizes,
              a = i.sources,
              c = i.src,
              d = i.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (i.responsive) {
              var h = i.responsive.split(",");
              c = Ae(h) || c;
            }
            var p = i.__slideVideoInfo,
              g = "",
              m = !!i.iframe,
              f = !this.lGalleryOn,
              v = 0;
            if (
              (f &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !n.hasClass("lg-loaded"))
            ) {
              if (p) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  S = Te(
                    this.items[e],
                    this.outer,
                    b + w,
                    p && this.settings.videoMaxSize
                  );
                g = this.getVideoContStyle(S);
              }
              if (m) {
                var C = Le(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  i.iframeTitle
                );
                n.prepend(C);
              } else if (l) {
                var E = "";
                f &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (E = this.getDummyImageContent(n, e, ""));
                C = ke(l, E || "", g, p);
                n.prepend(C);
              } else if (p) {
                C = '<div class="lg-video-cont " style="' + g + '"></div>';
                n.prepend(C);
              } else if ((this.setImgMarkup(c, n, e), r || a)) {
                var x = n.find(".lg-object");
                this.initPictureFill(x);
              }
              (l || p) &&
                this.LGel.trigger(Ge, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!l,
                }),
                this.LGel.trigger(ze, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var T = 0;
            v && !Ce(document.body).hasClass("lg-from-hash") && (T = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  n.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                n.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      "image" === s.getSlideType(i) &&
                      (n
                        .find(".lg-img-wrap")
                        .append(Ie(e, c, "", r, o, i.sources)),
                      r || a)
                    ) {
                      var t = n.find(".lg-object");
                      s.initPictureFill(t);
                    }
                    ("image" === s.getSlideType(i) ||
                      ("video" === s.getSlideType(i) && l)) &&
                      (s.onLgObjectLoad(n, e, v, T, !0, !1),
                      s.onSlideObjectLoad(
                        n,
                        !(!p || !p.html5 || l),
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        },
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              n.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(i) || l)) ||
                this.onLgObjectLoad(n, e, v, T, f, !(!p || !p.html5 || l)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !n.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  n.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (n.hasClass("lg-complete_")
                  ? this.preload(e)
                  : n
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
            var i = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                i.outer.removeClass("lg-first-slide-loading"),
                (i.isDummyImageRemoved = !0),
                i.preload(e);
            }, s + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
            var i = this;
            void 0 === s && (s = 0);
            var n = [],
              l = Math.max(s, 3);
            l = Math.min(l, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  n.push("lg-item-" + i.lgId + "-" + t);
                }),
                n
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var o = e; o > e - l / 2 && o >= 0; o--)
                n.push("lg-item-" + this.lgId + "-" + o);
              var a = n.length;
              for (o = 0; o < l - a; o++)
                n.push("lg-item-" + this.lgId + "-" + (e + o + 1));
            } else {
              for (
                o = e;
                o <= this.galleryItems.length - 1 && o < e + l / 2;
                o++
              )
                n.push("lg-item-" + this.lgId + "-" + o);
              for (a = n.length, o = 0; o < l - a; o++)
                n.push("lg-item-" + this.lgId + "-" + (e - o - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t),
              n
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var s = this,
              i = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              i.forEach(function (e) {
                -1 === s.currentItemsInDom.indexOf(e) &&
                  s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === i.indexOf(e) && Ce("#" + e).remove();
              }),
              i
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  s.attr("href", t.downloadUrl || t.src),
                  t.download && s.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, s) {
            var i = this;
            this.lGalleryOn && s.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  i.outer.addClass("lg-no-trans"),
                    i.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        s.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        s.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      i.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        i.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (e.prototype.slide = function (e, t, s, i) {
            var n = this,
              l = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, l)),
              !this.lGalleryOn || l !== e)
            ) {
              var r = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var o = this.getSlideItem(e),
                  a = this.getSlideItem(l),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    h = u.top,
                    p = u.bottom,
                    g = Te(
                      this.items[e],
                      this.outer,
                      h + p,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, g);
                }
                if (
                  (this.LGel.trigger(We, {
                    prevIndex: l,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!s,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  i || (e < l ? (i = "prev") : e > l && (i = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var m = void 0,
                    f = void 0;
                  r > 2
                    ? ((m = e - 1),
                      (f = e + 1),
                      ((0 === e && l === r - 1) || (e === r - 1 && 0 === l)) &&
                        ((f = 0), (m = r - 1)))
                    : ((m = 0), (f = 1)),
                    "prev" === i
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(m).addClass("lg-prev-slide"),
                    o.addClass("lg-current");
                } else this.makeSlideAnimation(i, o, a);
                this.lGalleryOn
                  ? setTimeout(function () {
                      n.loadContent(e, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo &&
                          n.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (n.lgBusy = !1),
                      a.removeClass("lg-slide-progress"),
                      n.LGel.trigger(Re, {
                        prevIndex: l,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay));
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, s) {
            var i = t.pageX - e.pageX,
              n = t.pageY - e.pageY,
              l = !1;
            if (
              (this.swipeDirection
                ? (l = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (l = !0))
                : Math.abs(n) > 15 &&
                  ((this.swipeDirection = "vertical"), (l = !0)),
              l)
            ) {
              var r = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == s || s.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(r, i, 0);
                var o = r.get().offsetWidth,
                  a = (15 * o) / 100 - Math.abs((10 * i) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -o + i - a,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    o + i + a,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == s || s.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var c = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                this.setTranslate(r, 0, n, d, d),
                  Math.abs(n) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, s) {
            var i,
              n = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                n.$container.removeClass("lg-dragging-vertical"),
                  n.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var l = !0;
                if ("horizontal" === n.swipeDirection) {
                  i = e.pageX - t.pageX;
                  var r = Math.abs(e.pageX - t.pageX);
                  i < 0 && r > n.settings.swipeThreshold
                    ? (n.goToNextSlide(!0), (l = !1))
                    : i > 0 &&
                      r > n.settings.swipeThreshold &&
                      (n.goToPrevSlide(!0), (l = !1));
                } else if ("vertical" === n.swipeDirection) {
                  if (
                    ((i = Math.abs(e.pageY - t.pageY)),
                    n.settings.closable && n.settings.swipeToClose && i > 100)
                  )
                    return void n.closeGallery();
                  n.$backdrop.css("opacity", 1);
                }
                if (
                  (n.outer.find(".lg-item").removeAttr("style"),
                  l && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var o = Ce(s.target);
                  n.isPosterElement(o) && n.LGel.trigger(Ye);
                }
                n.swipeDirection = void 0;
              }),
              setTimeout(function () {
                n.outer.hasClass("lg-dragging") ||
                  "lg-slide" === n.settings.mode ||
                  n.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var i = e.getSlideItem(e.index);
                (!Ce(s.target).hasClass("lg-item") &&
                  !i.get().contains(s.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== s.targetTouches.length ||
                  ((n = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: s.targetTouches[0].pageX,
                    pageY: s.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (l) {
                n &&
                  "swipe" === e.touchAction &&
                  1 === l.targetTouches.length &&
                  ((s = {
                    pageX: l.targetTouches[0].pageX,
                    pageY: l.targetTouches[0].pageY,
                  }),
                  e.touchMove(t, s, l),
                  (i = !0));
              }),
              this.$inner.on("touchend.lg", function (l) {
                if ("swipe" === e.touchAction) {
                  if (i) (i = !1), e.touchEnd(s, t, l);
                  else if (n) {
                    var r = Ce(l.target);
                    e.isPosterElement(r) && e.LGel.trigger(Ye);
                  }
                  (e.touchAction = void 0), (n = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (Ce(s.target).hasClass("lg-item") ||
                  n.get().contains(s.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (s.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: s.pageX, pageY: s.pageY }),
                      (i = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(Xe))));
              }),
              Ce(window).on("mousemove.lg.global" + this.lgId, function (l) {
                i &&
                  e.lgOpened &&
                  ((n = !0),
                  (s = { pageX: l.pageX, pageY: l.pageY }),
                  e.touchMove(t, s),
                  e.LGel.trigger(Ue));
              }),
              Ce(window).on("mouseup.lg.global" + this.lgId, function (l) {
                if (e.lgOpened) {
                  var r = Ce(l.target);
                  n
                    ? ((n = !1), e.touchEnd(s, t, l), e.LGel.trigger(Ke))
                    : e.isPosterElement(r) && e.LGel.trigger(Ye),
                    i &&
                      ((i = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(Ce(t.target)) &&
                e.LGel.trigger(Ye);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Ze, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : s
                  ? ((this.index = 0),
                    this.LGel.trigger(Ze, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Qe, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : s
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Qe, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            Ce(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                s = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? s.attr("disabled", "disabled").addClass("disabled")
                : s.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, s, i, n) {
            void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  s +
                  "px, 0px) scale3d(" +
                  i +
                  ", " +
                  n +
                  ", 1)"
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (s) {
              if (s.deltaY && !(e.galleryItems.length < 2)) {
                s.preventDefault();
                var i = new Date().getTime();
                i - t < 1e3 ||
                  ((t = i),
                  s.deltaY > 0
                    ? e.goToNextSlide()
                    : s.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = Ce(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var i = Ce(s.target);
                    t = !!e.isSlideElement(i);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var i = Ce(s.target);
                    e.isSlideElement(i) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Je), Ce(window).scrollTop(this.prevScrollTop);
            var s,
              i = this.items[this.index];
            if (this.zoomFromOrigin && i) {
              var n = this.mediaContainerPosition,
                l = n.top,
                r = n.bottom,
                o = this.galleryItems[this.index],
                a = o.__slideVideoInfo,
                c = o.poster,
                d = Te(
                  i,
                  this.outer,
                  l + r,
                  a && c && this.settings.videoMaxSize
                );
              s = _e(i, this.outer, l, r, d);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              Ce("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  s &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms"
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(et, { instance: t }),
                  t.outer.get() && t.outer.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(qe);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroy = function () {
            var e = this,
              t = this.closeGallery(!0);
            return (
              setTimeout(function () {
                e.destroyModules(!0),
                  e.settings.dynamic || e.invalidateItems(),
                  Ce(window).off(".lg.global" + e.lgId),
                  e.LGel.off(".lg"),
                  e.$container.remove();
              }, t),
              t
            );
          }),
          e
        );
      })();
    const it = function (e, t) {
        return new st(e, t);
      },
      nt = document.querySelectorAll("[data-gallery]");
    if (nt.length) {
      let t = [];
      nt.forEach((e) => {
        t.push({
          gallery: e,
          galleryClass: it(e, {
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          }),
        });
      }),
        (e.gallery = t);
    }
    function lt(e) {
      this.type = e;
    }
    (lt.prototype.init = function () {
      const e = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.??bjects.push(i);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          l = i[1],
          r = Array.prototype.filter.call(this.??bjects, function (e) {
            return e.breakpoint === l;
          });
        n.addListener(function () {
          e.mediaHandler(n, r);
        }),
          this.mediaHandler(n, r);
      }
    }),
      (lt.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (lt.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (lt.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (lt.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (lt.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    if ((new lt("max").init(), document.querySelector(".video-module"))) {
      document.addEventListener("watcherCallback", function (e) {
        const t = e.detail.entry,
          s = t.target;
        "video" !== s.dataset.watch ||
          s.classList.contains("_init") ||
          (t.isIntersecting
            ? s.querySelector("video").play()
            : s.querySelector("video").pause());
      });
      const e = document.querySelector(".video-module");
      e.addEventListener("click", function (t) {
        e.classList.contains("_init")
          ? (e.querySelector("video").paused
              ? e.querySelector("video").play()
              : e.querySelector("video").pause(),
            e.classList.toggle("_active"))
          : ((e.querySelector("video").src =
              e.querySelector("video").dataset.full),
            e.classList.add("_active"),
            e.classList.add("_init"),
            e.querySelector("video").play(),
            (e.querySelector("video").muted = !1));
      });
    }
    let rt = document.getElementsByClassName("menu__link"),
      ot = document.location.href;
    for (let e = 0; e < rt.length; e++)
      ot == rt[e].href && rt[e].classList.add("active-menu");
    const at = document.querySelectorAll("._anim-items");
    if (at.length > 0) {
      function e() {
        for (let e = 0; e < at.length; e++) {
          const s = at[e],
            i = s.offsetHeight,
            n = t(s).top,
            l = 4;
          let r = window.innerHeight - i / l;
          i > window.innerHeight &&
            (r = window.innerHeight - window.innerHeight / l),
            pageYOffset > n - r && pageYOffset < n + i
              ? s.classList.add("_active")
              : s.classList.contains("_anim-no-hide") ||
                s.classList.remove("_active");
        }
      }
      function t(e) {
        const t = e.getBoundingClientRect(),
          s = window.pageXOffset || document.documentElement.scrollLeft,
          i = window.pageYOffset || document.documentElement.scrollTop;
        return { top: t.top + i, left: t.left + s };
      }
      window.addEventListener("scroll", e),
        setTimeout(() => {
          e();
        }, 300);
    }
    (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (a(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = p(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    l(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    l(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function l(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                n = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && a(i),
                s.classList.toggle("_spoller-active"),
                r(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function a(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const n = i();
          n && n.startsWith("tab-") && (t = n.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", o),
                (function (e) {
                  let s = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*");
                  const n = e.dataset.tabsIndex,
                    l = t[0] == n;
                  if (l) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  i.length &&
                    ((i = Array.from(i).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (s = Array.from(s).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    i.forEach((e, i) => {
                      s[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        l && i == t[1] && s[i].classList.add("_tab-active"),
                        (e.hidden = !s[i].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let l = p(e, "tabs");
          l &&
            l.length &&
            l.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]"),
              l = e.querySelectorAll("[data-tabs-item]");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (l = Array.from(l).filter((t) => t.closest("[data-tabs]") === e)),
              l.forEach((l, r) => {
                t.matches
                  ? (n.append(i[r]),
                    n.append(l),
                    e.classList.add("_tab-spoller"))
                  : (s.append(i[r]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function r(e) {
          let t = e.querySelectorAll("[data-tabs-title]"),
            s = e.querySelectorAll("[data-tabs-item]");
          const i = e.dataset.tabsIndex;
          const r = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (s.length > 0) {
            const o = e.hasAttribute("data-tabs-hash");
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              (t = Array.from(t).filter((t) => t.closest("[data-tabs]") === e)),
              s.forEach((e, s) => {
                var a;
                t[s].classList.contains("_tab-active")
                  ? (r ? l(e, r) : (e.hidden = !1),
                    o &&
                      !e.closest(".popup") &&
                      ((a = (a = `tab-${i}-${s}`)
                        ? `#${a}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", a)))
                  : r
                  ? n(e, r)
                  : (e.hidden = !0);
              });
          }
        }
        function o(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelector("._slide")
            ) {
              let e = i.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === i
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                r(i);
            }
            e.preventDefault();
          }
        }
      })(),
      window.addEventListener("load", function (e) {
        const t = document.querySelectorAll("[data-showmore]");
        let s, i;
        function r(e) {
          e.forEach((e) => {
            o(e.itemsArray, e.matchMedia);
          });
        }
        function o(e, t) {
          e.forEach((e) => {
            !(function (e, t = !1) {
              let s = (e = t ? e.item : e).querySelectorAll(
                  "[data-showmore-content]"
                ),
                i = e.querySelectorAll("[data-showmore-button]");
              (s = Array.from(s).filter(
                (t) => t.closest("[data-showmore]") === e
              )[0]),
                (i = Array.from(i).filter(
                  (t) => t.closest("[data-showmore]") === e
                )[0]);
              const r = a(e, s);
              (t.matches || !t) &&
              r <
                (function (e) {
                  let t,
                    s = e.offsetHeight;
                  e.style.removeProperty("height"),
                    e.closest("[hidden]") &&
                      ((t = e.closest("[hidden]")), (t.hidden = !1));
                  let i = e.offsetHeight;
                  return t && (t.hidden = !0), (e.style.height = `${s}px`), i;
                })(s)
                ? (n(s, 0, r), (i.hidden = !1))
                : (l(s, 0, r), (i.hidden = !0));
            })(e, t);
          });
        }
        function a(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (
              let t = 1;
              t < i.length && ((s += i[t - 1].offsetHeight), t != e);
              t++
            );
          } else s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          return s;
        }
        function c(e) {
          const t = e.target,
            c = e.type;
          if ("click" === c) {
            if (t.closest("[data-showmore-button]")) {
              const e = t
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                s = e.querySelector("[data-showmore-content]"),
                i = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = a(e, s);
              s.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? n(s, i, r)
                  : l(s, i, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === c && (s && s.length && o(s), i && i.length && r(i));
        }
        t.length &&
          ((s = Array.from(t).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          s.length && o(s),
          document.addEventListener("click", c),
          window.addEventListener("resize", c),
          (i = p(t, "showmoreMedia")),
          i &&
            i.length &&
            (i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              });
            }),
            r(i)));
      }),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                n = !!s.hasAttribute("data-goto-header"),
                l = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : 500,
                r = s.dataset.gotoTop ? parseInt(s.dataset.gotoTop) : 0;
              g(i, n, l, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              document.querySelector("[data-goto]._navigator-active");
              let e;
              if (s.id && document.querySelector(`[data-goto="#${s.id}"]`))
                e = document.querySelector(`[data-goto="#${s.id}"]`);
              else if (s.classList.length)
                for (let t = 0; t < s.classList.length; t++) {
                  const i = s.classList[t];
                  if (document.querySelector(`[data-goto=".${i}"]`)) {
                    e = document.querySelector(`[data-goto=".${i}"]`);
                    break;
                  }
                }
              t.isIntersecting
                ? e && e.classList.add("_navigator-active")
                : e && e.classList.remove("_navigator-active");
            }
          }
        }
        if (
          (document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e),
          i())
        ) {
          let e;
          document.querySelector(`#${i()}`)
            ? (e = `#${i()}`)
            : document.querySelector(`.${i()}`) && (e = `.${i()}`),
            e && g(e, !0, 500, 20);
        }
      })(),
      (function () {
        be = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let n,
          l = 0;
        document.addEventListener("windowScroll", function (r) {
          const o = window.scrollY;
          clearTimeout(n),
            o >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (o > l
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (n = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (l = o <= 0 ? 0 : o);
        });
      })();
  })();
})();
