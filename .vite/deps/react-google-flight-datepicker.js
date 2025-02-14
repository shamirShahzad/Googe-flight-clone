import {
  require_react_dom
} from "./chunk-UP6LQVYV.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-google-flight-datepicker/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-google-flight-datepicker/dist/index.js"(exports, module) {
    !function(e, t) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = t(require_react(), require_react_dom());
      else if ("function" == typeof define && define.amd) define(["react", "react-dom"], t);
      else {
        var n = "object" == typeof exports ? t(require_react(), require_react_dom()) : t(e.react, e.ReactDOM);
        for (var a in n) ("object" == typeof exports ? exports : e)[a] = n[a];
      }
    }(exports, function(e, t) {
      return function(e2) {
        var t2 = {};
        function n(a) {
          if (t2[a]) return t2[a].exports;
          var r = t2[a] = { i: a, l: false, exports: {} };
          return e2[a].call(r.exports, r, r.exports, n), r.l = true, r.exports;
        }
        return n.m = e2, n.c = t2, n.d = function(e3, t3, a) {
          n.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: a });
        }, n.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, n.t = function(e3, t3) {
          if (1 & t3 && (e3 = n(e3)), 8 & t3) return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
          var a = /* @__PURE__ */ Object.create(null);
          if (n.r(a), Object.defineProperty(a, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var r in e3) n.d(a, r, (function(t4) {
            return e3[t4];
          }).bind(null, r));
          return a;
        }, n.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return n.d(t3, "a", t3), t3;
        }, n.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, n.p = "", n(n.s = 7);
      }([function(t2, n) {
        t2.exports = e;
      }, function(e2, t2, n) {
        e2.exports = function() {
          "use strict";
          var e3 = 6e4, t3 = 36e5, n2 = "millisecond", a = "second", r = "minute", o = "hour", i = "day", l = "week", s = "month", c = "quarter", u = "year", d = "date", f = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(e4) {
            var t4 = ["th", "st", "nd", "rd"], n3 = e4 % 100;
            return "[" + e4 + (t4[(n3 - 20) % 10] || t4[n3] || t4[0]) + "]";
          } }, v = function(e4, t4, n3) {
            var a2 = String(e4);
            return !a2 || a2.length >= t4 ? e4 : "" + Array(t4 + 1 - a2.length).join(n3) + e4;
          }, g = { s: v, z: function(e4) {
            var t4 = -e4.utcOffset(), n3 = Math.abs(t4), a2 = Math.floor(n3 / 60), r2 = n3 % 60;
            return (t4 <= 0 ? "+" : "-") + v(a2, 2, "0") + ":" + v(r2, 2, "0");
          }, m: function e4(t4, n3) {
            if (t4.date() < n3.date()) return -e4(n3, t4);
            var a2 = 12 * (n3.year() - t4.year()) + (n3.month() - t4.month()), r2 = t4.clone().add(a2, s), o2 = n3 - r2 < 0, i2 = t4.clone().add(a2 + (o2 ? -1 : 1), s);
            return +(-(a2 + (n3 - r2) / (o2 ? r2 - i2 : i2 - r2)) || 0);
          }, a: function(e4) {
            return e4 < 0 ? Math.ceil(e4) || 0 : Math.floor(e4);
          }, p: function(e4) {
            return { M: s, y: u, w: l, d: i, D: d, h: o, m: r, s: a, ms: n2, Q: c }[e4] || String(e4 || "").toLowerCase().replace(/s$/, "");
          }, u: function(e4) {
            return void 0 === e4;
          } }, y = "en", D = {};
          D[y] = p;
          var b = function(e4) {
            return e4 instanceof O;
          }, _ = function e4(t4, n3, a2) {
            var r2;
            if (!t4) return y;
            if ("string" == typeof t4) {
              var o2 = t4.toLowerCase();
              D[o2] && (r2 = o2), n3 && (D[o2] = n3, r2 = o2);
              var i2 = t4.split("-");
              if (!r2 && i2.length > 1) return e4(i2[0]);
            } else {
              var l2 = t4.name;
              D[l2] = t4, r2 = l2;
            }
            return !a2 && r2 && (y = r2), r2 || !a2 && y;
          }, S = function(e4, t4) {
            if (b(e4)) return e4.clone();
            var n3 = "object" == typeof t4 ? t4 : {};
            return n3.date = e4, n3.args = arguments, new O(n3);
          }, w = g;
          w.l = _, w.i = b, w.w = function(e4, t4) {
            return S(e4, { locale: t4.$L, utc: t4.$u, x: t4.$x, $offset: t4.$offset });
          };
          var O = function() {
            function p2(e4) {
              this.$L = _(e4.locale, null, true), this.parse(e4);
            }
            var v2 = p2.prototype;
            return v2.parse = function(e4) {
              this.$d = function(e5) {
                var t4 = e5.date, n3 = e5.utc;
                if (null === t4) return /* @__PURE__ */ new Date(NaN);
                if (w.u(t4)) return /* @__PURE__ */ new Date();
                if (t4 instanceof Date) return new Date(t4);
                if ("string" == typeof t4 && !/Z$/i.test(t4)) {
                  var a2 = t4.match(h);
                  if (a2) {
                    var r2 = a2[2] - 1 || 0, o2 = (a2[7] || "0").substring(0, 3);
                    return n3 ? new Date(Date.UTC(a2[1], r2, a2[3] || 1, a2[4] || 0, a2[5] || 0, a2[6] || 0, o2)) : new Date(a2[1], r2, a2[3] || 1, a2[4] || 0, a2[5] || 0, a2[6] || 0, o2);
                  }
                }
                return new Date(t4);
              }(e4), this.$x = e4.x || {}, this.init();
            }, v2.init = function() {
              var e4 = this.$d;
              this.$y = e4.getFullYear(), this.$M = e4.getMonth(), this.$D = e4.getDate(), this.$W = e4.getDay(), this.$H = e4.getHours(), this.$m = e4.getMinutes(), this.$s = e4.getSeconds(), this.$ms = e4.getMilliseconds();
            }, v2.$utils = function() {
              return w;
            }, v2.isValid = function() {
              return !(this.$d.toString() === f);
            }, v2.isSame = function(e4, t4) {
              var n3 = S(e4);
              return this.startOf(t4) <= n3 && n3 <= this.endOf(t4);
            }, v2.isAfter = function(e4, t4) {
              return S(e4) < this.startOf(t4);
            }, v2.isBefore = function(e4, t4) {
              return this.endOf(t4) < S(e4);
            }, v2.$g = function(e4, t4, n3) {
              return w.u(e4) ? this[t4] : this.set(n3, e4);
            }, v2.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }, v2.valueOf = function() {
              return this.$d.getTime();
            }, v2.startOf = function(e4, t4) {
              var n3 = this, c2 = !!w.u(t4) || t4, f2 = w.p(e4), h2 = function(e5, t5) {
                var a2 = w.w(n3.$u ? Date.UTC(n3.$y, t5, e5) : new Date(n3.$y, t5, e5), n3);
                return c2 ? a2 : a2.endOf(i);
              }, m2 = function(e5, t5) {
                return w.w(n3.toDate()[e5].apply(n3.toDate("s"), (c2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t5)), n3);
              }, p3 = this.$W, v3 = this.$M, g2 = this.$D, y2 = "set" + (this.$u ? "UTC" : "");
              switch (f2) {
                case u:
                  return c2 ? h2(1, 0) : h2(31, 11);
                case s:
                  return c2 ? h2(1, v3) : h2(0, v3 + 1);
                case l:
                  var D2 = this.$locale().weekStart || 0, b2 = (p3 < D2 ? p3 + 7 : p3) - D2;
                  return h2(c2 ? g2 - b2 : g2 + (6 - b2), v3);
                case i:
                case d:
                  return m2(y2 + "Hours", 0);
                case o:
                  return m2(y2 + "Minutes", 1);
                case r:
                  return m2(y2 + "Seconds", 2);
                case a:
                  return m2(y2 + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }, v2.endOf = function(e4) {
              return this.startOf(e4, false);
            }, v2.$set = function(e4, t4) {
              var l2, c2 = w.p(e4), f2 = "set" + (this.$u ? "UTC" : ""), h2 = (l2 = {}, l2[i] = f2 + "Date", l2[d] = f2 + "Date", l2[s] = f2 + "Month", l2[u] = f2 + "FullYear", l2[o] = f2 + "Hours", l2[r] = f2 + "Minutes", l2[a] = f2 + "Seconds", l2[n2] = f2 + "Milliseconds", l2)[c2], m2 = c2 === i ? this.$D + (t4 - this.$W) : t4;
              if (c2 === s || c2 === u) {
                var p3 = this.clone().set(d, 1);
                p3.$d[h2](m2), p3.init(), this.$d = p3.set(d, Math.min(this.$D, p3.daysInMonth())).$d;
              } else h2 && this.$d[h2](m2);
              return this.init(), this;
            }, v2.set = function(e4, t4) {
              return this.clone().$set(e4, t4);
            }, v2.get = function(e4) {
              return this[w.p(e4)]();
            }, v2.add = function(n3, c2) {
              var d2, f2 = this;
              n3 = Number(n3);
              var h2 = w.p(c2), m2 = function(e4) {
                var t4 = S(f2);
                return w.w(t4.date(t4.date() + Math.round(e4 * n3)), f2);
              };
              if (h2 === s) return this.set(s, this.$M + n3);
              if (h2 === u) return this.set(u, this.$y + n3);
              if (h2 === i) return m2(1);
              if (h2 === l) return m2(7);
              var p3 = (d2 = {}, d2[r] = e3, d2[o] = t3, d2[a] = 1e3, d2)[h2] || 1, v3 = this.$d.getTime() + n3 * p3;
              return w.w(v3, this);
            }, v2.subtract = function(e4, t4) {
              return this.add(-1 * e4, t4);
            }, v2.format = function(e4) {
              var t4 = this, n3 = this.$locale();
              if (!this.isValid()) return n3.invalidDate || f;
              var a2 = e4 || "YYYY-MM-DDTHH:mm:ssZ", r2 = w.z(this), o2 = this.$H, i2 = this.$m, l2 = this.$M, s2 = n3.weekdays, c2 = n3.months, u2 = function(e5, n4, r3, o3) {
                return e5 && (e5[n4] || e5(t4, a2)) || r3[n4].slice(0, o3);
              }, d2 = function(e5) {
                return w.s(o2 % 12 || 12, e5, "0");
              }, h2 = n3.meridiem || function(e5, t5, n4) {
                var a3 = e5 < 12 ? "AM" : "PM";
                return n4 ? a3.toLowerCase() : a3;
              }, p3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: l2 + 1, MM: w.s(l2 + 1, 2, "0"), MMM: u2(n3.monthsShort, l2, c2, 3), MMMM: u2(c2, l2), D: this.$D, DD: w.s(this.$D, 2, "0"), d: String(this.$W), dd: u2(n3.weekdaysMin, this.$W, s2, 2), ddd: u2(n3.weekdaysShort, this.$W, s2, 3), dddd: s2[this.$W], H: String(o2), HH: w.s(o2, 2, "0"), h: d2(1), hh: d2(2), a: h2(o2, i2, true), A: h2(o2, i2, false), m: String(i2), mm: w.s(i2, 2, "0"), s: String(this.$s), ss: w.s(this.$s, 2, "0"), SSS: w.s(this.$ms, 3, "0"), Z: r2 };
              return a2.replace(m, function(e5, t5) {
                return t5 || p3[e5] || r2.replace(":", "");
              });
            }, v2.utcOffset = function() {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, v2.diff = function(n3, d2, f2) {
              var h2, m2 = w.p(d2), p3 = S(n3), v3 = (p3.utcOffset() - this.utcOffset()) * e3, g2 = this - p3, y2 = w.m(this, p3);
              return y2 = (h2 = {}, h2[u] = y2 / 12, h2[s] = y2, h2[c] = y2 / 3, h2[l] = (g2 - v3) / 6048e5, h2[i] = (g2 - v3) / 864e5, h2[o] = g2 / t3, h2[r] = g2 / e3, h2[a] = g2 / 1e3, h2)[m2] || g2, f2 ? y2 : w.a(y2);
            }, v2.daysInMonth = function() {
              return this.endOf(s).$D;
            }, v2.$locale = function() {
              return D[this.$L];
            }, v2.locale = function(e4, t4) {
              if (!e4) return this.$L;
              var n3 = this.clone(), a2 = _(e4, t4, true);
              return a2 && (n3.$L = a2), n3;
            }, v2.clone = function() {
              return w.w(this.$d, this);
            }, v2.toDate = function() {
              return new Date(this.valueOf());
            }, v2.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }, v2.toISOString = function() {
              return this.$d.toISOString();
            }, v2.toString = function() {
              return this.$d.toUTCString();
            }, p2;
          }(), E = O.prototype;
          return S.prototype = E, [["$ms", n2], ["$s", a], ["$m", r], ["$H", o], ["$W", i], ["$M", s], ["$y", u], ["$D", d]].forEach(function(e4) {
            E[e4[1]] = function(t4) {
              return this.$g(t4, e4[0], e4[1]);
            };
          }), S.extend = function(e4, t4) {
            return e4.$i || (e4(t4, O, S), e4.$i = true), S;
          }, S.locale = _, S.isDayjs = b, S.unix = function(e4) {
            return S(1e3 * e4);
          }, S.en = D[y], S.Ls = D, S.p = {}, S;
        }();
      }, function(e2, t2, n) {
        var a;
        !function() {
          "use strict";
          var n2 = {}.hasOwnProperty;
          function r() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) {
              var a2 = arguments[t3];
              if (a2) {
                var o = typeof a2;
                if ("string" === o || "number" === o) e3.push(a2);
                else if (Array.isArray(a2)) {
                  if (a2.length) {
                    var i = r.apply(null, a2);
                    i && e3.push(i);
                  }
                } else if ("object" === o) {
                  if (a2.toString !== Object.prototype.toString && !a2.toString.toString().includes("[native code]")) {
                    e3.push(a2.toString());
                    continue;
                  }
                  for (var l in a2) n2.call(a2, l) && a2[l] && e3.push(l);
                }
              }
            }
            return e3.join(" ");
          }
          e2.exports ? (r.default = r, e2.exports = r) : void 0 === (a = (function() {
            return r;
          }).apply(t2, [])) || (e2.exports = a);
        }();
      }, function(e2, t2, n) {
      }, function(e2, n) {
        e2.exports = t;
      }, function(e2, t2, n) {
        "use strict";
        (function(e3) {
          var a = n(0), r = function(e4, t3) {
            if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }, o = /* @__PURE__ */ function() {
            function e4(e5, t3) {
              for (var n2 = 0; n2 < t3.length; n2++) {
                var a2 = t3[n2];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e5, a2.key, a2);
              }
            }
            return function(t3, n2, a2) {
              return n2 && e4(t3.prototype, n2), a2 && e4(t3, a2), t3;
            };
          }(), i = Object.assign || function(e4) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var a2 in n2) Object.prototype.hasOwnProperty.call(n2, a2) && (e4[a2] = n2[a2]);
            }
            return e4;
          }, l = function(e4, t3) {
            if (!e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
          }, s = function(e4, t3) {
            if (Array.isArray(e4)) return e4;
            if (Symbol.iterator in Object(e4)) return function(e5, t4) {
              var n2 = [], a2 = true, r2 = false, o2 = void 0;
              try {
                for (var i2, l2 = e5[Symbol.iterator](); !(a2 = (i2 = l2.next()).done) && (n2.push(i2.value), !t4 || n2.length !== t4); a2 = true) ;
              } catch (e6) {
                r2 = true, o2 = e6;
              } finally {
                try {
                  !a2 && l2.return && l2.return();
                } finally {
                  if (r2) throw o2;
                }
              }
              return n2;
            }(e4, t3);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }, c = void 0;
          c = "undefined" != typeof window ? window : "undefined" != typeof self ? self : e3;
          var u = null, d = null, f = c.clearTimeout, h = c.setTimeout, m = c.cancelAnimationFrame || c.mozCancelAnimationFrame || c.webkitCancelAnimationFrame, p = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame;
          function v(e4) {
            var t3 = void 0, n2 = void 0, a2 = void 0, r2 = void 0, o2 = void 0, i2 = void 0, l2 = void 0, s2 = "undefined" != typeof document && document.attachEvent;
            if (!s2) {
              i2 = function(e5) {
                var t4 = e5.__resizeTriggers__, n3 = t4.firstElementChild, a3 = t4.lastElementChild, r3 = n3.firstElementChild;
                a3.scrollLeft = a3.scrollWidth, a3.scrollTop = a3.scrollHeight, r3.style.width = n3.offsetWidth + 1 + "px", r3.style.height = n3.offsetHeight + 1 + "px", n3.scrollLeft = n3.scrollWidth, n3.scrollTop = n3.scrollHeight;
              }, o2 = function(e5) {
                return e5.offsetWidth !== e5.__resizeLast__.width || e5.offsetHeight !== e5.__resizeLast__.height;
              }, l2 = function(e5) {
                if (!(e5.target.className && "function" == typeof e5.target.className.indexOf && e5.target.className.indexOf("contract-trigger") < 0 && e5.target.className.indexOf("expand-trigger") < 0)) {
                  var t4 = this;
                  i2(this), this.__resizeRAF__ && u(this.__resizeRAF__), this.__resizeRAF__ = d(function() {
                    o2(t4) && (t4.__resizeLast__.width = t4.offsetWidth, t4.__resizeLast__.height = t4.offsetHeight, t4.__resizeListeners__.forEach(function(n3) {
                      n3.call(t4, e5);
                    }));
                  });
                }
              };
              var f2 = false, h2 = "";
              a2 = "animationstart";
              var m2 = "Webkit Moz O ms".split(" "), p2 = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), v2 = document.createElement("fakeelement");
              if (void 0 !== v2.style.animationName && (f2 = true), false === f2) {
                for (var g2 = 0; g2 < m2.length; g2++) if (void 0 !== v2.style[m2[g2] + "AnimationName"]) {
                  h2 = "-" + m2[g2].toLowerCase() + "-", a2 = p2[g2], f2 = true;
                  break;
                }
              }
              t3 = "@" + h2 + "keyframes " + (n2 = "resizeanim") + " { from { opacity: 0; } to { opacity: 0; } } ", r2 = h2 + "animation: 1ms " + n2 + "; ";
            }
            return { addResizeListener: function(o3, u2) {
              if (s2) o3.attachEvent("onresize", u2);
              else {
                if (!o3.__resizeTriggers__) {
                  var d2 = o3.ownerDocument, f3 = c.getComputedStyle(o3);
                  f3 && "static" === f3.position && (o3.style.position = "relative"), function(n3) {
                    if (!n3.getElementById("detectElementResize")) {
                      var a3 = (t3 || "") + ".resize-triggers { " + (r2 || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', o4 = n3.head || n3.getElementsByTagName("head")[0], i3 = n3.createElement("style");
                      i3.id = "detectElementResize", i3.type = "text/css", null != e4 && i3.setAttribute("nonce", e4), i3.styleSheet ? i3.styleSheet.cssText = a3 : i3.appendChild(n3.createTextNode(a3)), o4.appendChild(i3);
                    }
                  }(d2), o3.__resizeLast__ = {}, o3.__resizeListeners__ = [], (o3.__resizeTriggers__ = d2.createElement("div")).className = "resize-triggers";
                  var h3 = d2.createElement("div");
                  h3.className = "expand-trigger", h3.appendChild(d2.createElement("div"));
                  var m3 = d2.createElement("div");
                  m3.className = "contract-trigger", o3.__resizeTriggers__.appendChild(h3), o3.__resizeTriggers__.appendChild(m3), o3.appendChild(o3.__resizeTriggers__), i2(o3), o3.addEventListener("scroll", l2, true), a2 && (o3.__resizeTriggers__.__animationListener__ = function(e5) {
                    e5.animationName === n2 && i2(o3);
                  }, o3.__resizeTriggers__.addEventListener(a2, o3.__resizeTriggers__.__animationListener__));
                }
                o3.__resizeListeners__.push(u2);
              }
            }, removeResizeListener: function(e5, t4) {
              if (s2) e5.detachEvent("onresize", t4);
              else if (e5.__resizeListeners__.splice(e5.__resizeListeners__.indexOf(t4), 1), !e5.__resizeListeners__.length) {
                e5.removeEventListener("scroll", l2, true), e5.__resizeTriggers__.__animationListener__ && (e5.__resizeTriggers__.removeEventListener(a2, e5.__resizeTriggers__.__animationListener__), e5.__resizeTriggers__.__animationListener__ = null);
                try {
                  e5.__resizeTriggers__ = !e5.removeChild(e5.__resizeTriggers__);
                } catch (e6) {
                }
              }
            } };
          }
          null == m || null == p ? (u = f, d = function(e4) {
            return h(e4, 20);
          }) : (u = function(e4) {
            var t3 = s(e4, 2), n2 = t3[0], a2 = t3[1];
            m(n2), f(a2);
          }, d = function(e4) {
            var t3 = p(function() {
              f(n2), e4();
            }), n2 = h(function() {
              m(t3), e4();
            }, 20);
            return [t3, n2];
          });
          var g = function(e4) {
            function t3() {
              var e5, n2, a2;
              r(this, t3);
              for (var o2 = arguments.length, i2 = Array(o2), s2 = 0; s2 < o2; s2++) i2[s2] = arguments[s2];
              return n2 = a2 = l(this, (e5 = t3.__proto__ || Object.getPrototypeOf(t3)).call.apply(e5, [this].concat(i2))), a2.state = { height: a2.props.defaultHeight || 0, width: a2.props.defaultWidth || 0 }, a2._onResize = function() {
                var e6 = a2.props, t4 = e6.disableHeight, n3 = e6.disableWidth, r2 = e6.onResize;
                if (a2._parentNode) {
                  var o3 = a2._parentNode.offsetHeight || 0, i3 = a2._parentNode.offsetWidth || 0, l2 = window.getComputedStyle(a2._parentNode) || {}, s3 = parseInt(l2.paddingLeft, 10) || 0, c2 = parseInt(l2.paddingRight, 10) || 0, u2 = parseInt(l2.paddingTop, 10) || 0, d2 = parseInt(l2.paddingBottom, 10) || 0, f2 = o3 - u2 - d2, h2 = i3 - s3 - c2;
                  (!t4 && a2.state.height !== f2 || !n3 && a2.state.width !== h2) && (a2.setState({ height: o3 - u2 - d2, width: i3 - s3 - c2 }), r2({ height: o3, width: i3 }));
                }
              }, a2._setRef = function(e6) {
                a2._autoSizer = e6;
              }, l(a2, n2);
            }
            return function(e5, t4) {
              if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function, not " + typeof t4);
              e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, enumerable: false, writable: true, configurable: true } }), t4 && (Object.setPrototypeOf ? Object.setPrototypeOf(e5, t4) : e5.__proto__ = t4);
            }(t3, e4), o(t3, [{ key: "componentDidMount", value: function() {
              var e5 = this.props.nonce;
              this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = v(e5), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize());
            } }, { key: "componentWillUnmount", value: function() {
              this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
            } }, { key: "render", value: function() {
              var e5 = this.props, t4 = e5.children, n2 = e5.className, r2 = e5.disableHeight, o2 = e5.disableWidth, l2 = e5.style, s2 = this.state, c2 = s2.height, u2 = s2.width, d2 = { overflow: "visible" }, f2 = {}, h2 = false;
              return r2 || (0 === c2 && (h2 = true), d2.height = 0, f2.height = c2), o2 || (0 === u2 && (h2 = true), d2.width = 0, f2.width = u2), Object(a.createElement)("div", { className: n2, ref: this._setRef, style: i({}, d2, l2) }, !h2 && t4(f2));
            } }]), t3;
          }(a.PureComponent);
          g.defaultProps = { onResize: function() {
          }, disableHeight: false, disableWidth: false, style: {} }, t2.a = g;
        }).call(this, n(6));
      }, function(e2, t2) {
        var n;
        n = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (e3) {
          "object" == typeof window && (n = window);
        }
        e2.exports = n;
      }, function(e2, t2, n) {
        "use strict";
        function a(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, a2 = new Array(t3); n2 < t3; n2++) a2[n2] = e3[n2];
          return a2;
        }
        function r(e3, t3) {
          if (e3) {
            if ("string" == typeof e3) return a(e3, t3);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(n2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e3, t3) : void 0;
          }
        }
        function o(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4)) return e4;
          }(e3) || function(e4, t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
              var n2 = [], a2 = true, r2 = false, o2 = void 0;
              try {
                for (var i2, l2 = e4[Symbol.iterator](); !(a2 = (i2 = l2.next()).done) && (n2.push(i2.value), !t4 || n2.length !== t4); a2 = true) ;
              } catch (e5) {
                r2 = true, o2 = e5;
              } finally {
                try {
                  a2 || null == l2.return || l2.return();
                } finally {
                  if (r2) throw o2;
                }
              }
              return n2;
            }
          }(e3, t3) || r(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        n.r(t2), n.d(t2, "RangeDatePicker", function() {
          return fe;
        }), n.d(t2, "SingleDatePicker", function() {
          return me;
        });
        var i = n(0), l = n.n(i), s = n(2), c = n.n(s), u = n(1), d = n.n(u);
        function f(e3, t3, n2) {
          var a2 = [], r2 = new Date(e3, t3, 1), o2 = new Date(e3, t3 + 1, 0).getDate(), i2 = 1, l2 = 0 === r2.getDay() ? 1 : 7 - r2.getDay() + 1;
          for ("sunday" === n2 && (l2 = 7 - r2.getDay()); i2 <= o2; ) a2.push({ start: i2, days: l2 - i2 + 1 }), i2 = l2 + 1, l2 += 7, (l2 = 1 === i2 && 8 === l2 ? 1 : l2) > o2 && (l2 = o2);
          return { totalWeek: a2, totalDay: o2 };
        }
        function h(e3, t3) {
          var n2 = "dd" === t3 ? ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] : "ddd" === t3 ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          if ("sunday" === e3) {
            var a2 = n2.pop();
            n2.unshift(a2);
          }
          return n2;
        }
        function m(e3, t3) {
          var n2;
          return function() {
            for (var a2 = arguments.length, r2 = new Array(a2), o2 = 0; o2 < a2; o2++) r2[o2] = arguments[o2];
            var i2 = function() {
              n2 = null, e3.apply(void 0, r2);
            };
            clearTimeout(n2), n2 = setTimeout(i2, t3);
          };
        }
        n(3);
        function p(e3, t3) {
          if (null == e3) return {};
          var n2, a2, r2 = function(e4, t4) {
            if (null == e4) return {};
            var n3, a3, r3 = {}, o3 = Object.keys(e4);
            for (a3 = 0; a3 < o3.length; a3++) n3 = o3[a3], t4.indexOf(n3) >= 0 || (r3[n3] = e4[n3]);
            return r3;
          }(e3, t3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            for (a2 = 0; a2 < o2.length; a2++) n2 = o2[a2], t3.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (r2[n2] = e3[n2]);
          }
          return r2;
        }
        var v = ["styles"], g = function(e3) {
          e3.styles;
          var t3 = p(e3, v);
          return l.a.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, t3), l.a.createElement("path", { d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" }));
        }, y = ["styles"], D = function(e3) {
          e3.styles;
          var t3 = p(e3, y);
          return l.a.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, t3), l.a.createElement("path", { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" }));
        }, b = ["styles"], _ = function(e3) {
          e3.styles;
          var t3 = p(e3, b);
          return l.a.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, t3), l.a.createElement("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }));
        }, S = function(e3) {
          var t3 = e3.handleClickDateInput, n2 = e3.showIcon, a2 = e3.tabIndex, r2 = e3.isFocus, s2 = e3.value, u2 = e3.placeholder, f2 = e3.handleChangeDate, h2 = e3.dateFormat, m2 = e3.isSingle, p2 = e3.onFocus, v2 = e3.name, y2 = e3.nonFocusable, b2 = e3.fromDate, S2 = e3.minDate, w2 = e3.maxDate, O2 = o(Object(i.useState)(null), 2), E2 = O2[0], x2 = O2[1], k2 = o(Object(i.useState)(false), 2), I2 = k2[0], C2 = k2[1], F2 = o(Object(i.useState)(false), 2), j2 = F2[0], M2 = F2[1];
          return Object(i.useEffect)(function() {
            if (s2) {
              var e4 = s2.format("ddd, DD MMM");
              h2 && (e4 = s2.format(h2)), x2(e4), S2 && d()(S2).add(1, "day").isAfter(s2, "date") || "END_DATE" === v2 && s2.isBefore(b2.add(1, "day"), "date") ? C2(true) : C2(false), w2 && d()(w2).subtract(1, "day").isBefore(s2, "date") ? M2(true) : M2(false);
            } else x2(null);
          }, [s2, b2]), l.a.createElement("div", { className: c()("date", { "is-focus": r2, "is-single": m2 }), role: "button", tabIndex: y2 ? "-1" : a2, onClick: t3, onFocus: function() {
            p2 && p2(v2);
          }, id: "START_DATE" === v2 ? "start-date-input-button" : "end-date-input-button" }, n2 && l.a.createElement(g, { className: "icon-calendar", viewBox: "0 0 24 24" }), l.a.createElement("div", { className: "selected-date" }, E2 || l.a.createElement("div", { className: "date-placeholder" }, u2)), E2 && l.a.createElement("div", { className: "change-date-group" }, l.a.createElement("button", { type: "button", className: "btn-outline change-date-button", onClick: function(e4) {
            e4.stopPropagation(), f2("prev", s2);
          }, tabIndex: y2 ? "-1" : "0", disabled: I2 }, l.a.createElement(D, { viewBox: "0 0 24 24", className: "icon-arrow" })), l.a.createElement("button", { type: "button", className: "btn-outline change-date-button", onClick: function(e4) {
            e4.stopPropagation(), f2("next", s2);
          }, tabIndex: y2 ? "-1" : "0", disabled: j2 }, l.a.createElement(_, { viewBox: "0 0 24 24", className: "icon-arrow" }))));
        };
        S.defaultProps = { handleClickDateInput: function() {
        }, showIcon: false, tabIndex: "", isFocus: false, value: null, placeholder: null, handleChangeDate: function() {
        }, dateFormat: "", isSingle: false, onFocus: function() {
        }, name: "", nonFocusable: false, fromDate: null, minDate: null, maxDate: null };
        var w = S, O = function(e3) {
          var t3 = e3.showCalendarIcon, n2 = e3.inputFocus, a2 = e3.handleClickDateInput, r2 = e3.fromDate, o2 = e3.toDate, i2 = e3.minDate, s2 = e3.maxDate, c2 = e3.handleChangeDate, u2 = e3.startDatePlaceholder, f2 = e3.endDatePlaceholder, h2 = e3.dateFormat, m2 = e3.isSingle, p2 = e3.onFocus, v2 = e3.nonFocusable, y2 = e3.dateInputSeperator;
          function D2(e4, t4) {
            return "prev" === e4 ? d()(t4).subtract(1, "day") : d()(t4).add(1, "day");
          }
          return l.a.createElement("div", { className: "date-picker-input" }, t3 && l.a.createElement(g, { className: "icon-calendar mobile", viewBox: "0 0 24 24" }), l.a.createElement("div", { className: "date-picker-date-group" }, l.a.createElement(w, { handleClickDateInput: function() {
            a2("from");
          }, showIcon: true, tabIndex: v2 ? "-1" : "0", isFocus: "from" === n2, value: r2, placeholder: u2, handleChangeDate: function(e4, t4) {
            var n3 = D2(e4, t4);
            c2(n3, "from");
          }, dateFormat: h2, isSingle: m2, name: "START_DATE", onFocus: p2, nonFocusable: v2, minDate: i2, maxDate: s2 }), !m2 && y2 && l.a.createElement("div", { className: "date-input-separator" }, y2), !m2 && l.a.createElement(w, { handleClickDateInput: function() {
            a2("to");
          }, tabIndex: "0", isFocus: "to" === n2, value: o2, placeholder: f2, handleChangeDate: function(e4, t4) {
            var n3 = D2(e4, t4);
            c2(n3, "to");
          }, dateFormat: h2, name: "END_DATE", nonFocusable: v2, minDate: i2, maxDate: s2, fromDate: r2 })));
        };
        O.defaultProps = { handleClickDateInput: function() {
        }, showCalendarIcon: false, inputFocus: null, fromDate: null, toDate: null, minDate: null, maxDate: null, handleChangeDate: function() {
        }, startDatePlaceholder: null, endDatePlaceholder: null, dateFormat: "", isSingle: false, onFocus: function() {
        }, nonFocusable: false, dateInputSeperator: null };
        var E = O, x = n(4), k = function(e3) {
          var t3 = e3.children;
          return e3.isMobile ? Object(x.createPortal)(l.a.createElement("div", { className: "react-google-flight-datepicker" }, t3), document.querySelector("body")) : l.a.createElement(l.a.Fragment, null, t3);
        };
        k.defaultProps = { children: null, isMobile: false };
        var I = k, C = ["styles"], F = function(e3) {
          e3.styles;
          var t3 = p(e3, C);
          return l.a.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 492 492" }, t3), l.a.createElement("path", { d: "M464.3 207.4l.8.2H136l103.5-103.7c5-5.1 7.8-12 7.8-19.2 0-7.2-2.7-14-7.8-19l-16.1-16.2c-5-5-11.8-7.8-19-7.8-7.2 0-14 2.8-19 7.8L7.8 227c-5 5-7.8 11.8-7.8 19 0 7.3 2.8 14 7.8 19.2l177.5 177.4c5 5 11.8 7.8 19 7.8 7.2 0 14-2.8 19-7.8l16-16.1a26.6 26.6 0 000-37.7L134.8 284.4h330a27.9 27.9 0 0027.3-27.6V234a27.3 27.3 0 00-27.7-26.6z" }));
        };
        function j() {
          return (j = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var a2 in n2) Object.prototype.hasOwnProperty.call(n2, a2) && (e3[a2] = n2[a2]);
            }
            return e3;
          }).apply(this, arguments);
        }
        function M(e3) {
          if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function z(e3, t3) {
          return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function T(e3, t3) {
          e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, z(e3, t3);
        }
        var N = Number.isNaN || function(e3) {
          return "number" == typeof e3 && e3 != e3;
        };
        function $(e3, t3) {
          if (e3.length !== t3.length) return false;
          for (var n2 = 0; n2 < e3.length; n2++) if (a2 = e3[n2], r2 = t3[n2], !(a2 === r2 || N(a2) && N(r2))) return false;
          var a2, r2;
          return true;
        }
        var R = function(e3, t3) {
          var n2;
          void 0 === t3 && (t3 = $);
          var a2, r2 = [], o2 = false;
          return function() {
            for (var i2 = [], l2 = 0; l2 < arguments.length; l2++) i2[l2] = arguments[l2];
            return o2 && n2 === this && t3(i2, r2) || (a2 = e3.apply(this, i2), o2 = true, n2 = this, r2 = i2), a2;
          };
        };
        var P = "object" == typeof performance && "function" == typeof performance.now ? function() {
          return performance.now();
        } : function() {
          return Date.now();
        };
        function A(e3) {
          cancelAnimationFrame(e3.id);
        }
        function L(e3, t3) {
          var n2 = P();
          var a2 = { id: requestAnimationFrame(function r2() {
            P() - n2 >= t3 ? e3.call(null) : a2.id = requestAnimationFrame(r2);
          }) };
          return a2;
        }
        var W = null;
        function H(e3) {
          if (void 0 === e3 && (e3 = false), null === W || e3) {
            var t3 = document.createElement("div"), n2 = t3.style;
            n2.width = "50px", n2.height = "50px", n2.overflow = "scroll", n2.direction = "rtl";
            var a2 = document.createElement("div"), r2 = a2.style;
            return r2.width = "100px", r2.height = "100px", t3.appendChild(a2), document.body.appendChild(t3), t3.scrollLeft > 0 ? W = "positive-descending" : (t3.scrollLeft = 1, W = 0 === t3.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(t3), W;
          }
          return W;
        }
        var B = function(e3, t3) {
          return e3;
        };
        function q(e3) {
          var t3, n2 = e3.getItemOffset, a2 = e3.getEstimatedTotalSize, r2 = e3.getItemSize, o2 = e3.getOffsetForIndexAndAlignment, l2 = e3.getStartIndexForOffset, s2 = e3.getStopIndexForStartIndex, c2 = e3.initInstanceProps, u2 = e3.shouldResetStyleCacheOnItemSizeChange, d2 = e3.validateProps;
          return (t3 = function(e4) {
            function t4(t5) {
              var a3;
              return (a3 = e4.call(this, t5) || this)._instanceProps = c2(a3.props, M(a3)), a3._outerRef = void 0, a3._resetIsScrollingTimeoutId = null, a3.state = { instance: M(a3), isScrolling: false, scrollDirection: "forward", scrollOffset: "number" == typeof a3.props.initialScrollOffset ? a3.props.initialScrollOffset : 0, scrollUpdateWasRequested: false }, a3._callOnItemsRendered = void 0, a3._callOnItemsRendered = R(function(e5, t6, n3, r3) {
                return a3.props.onItemsRendered({ overscanStartIndex: e5, overscanStopIndex: t6, visibleStartIndex: n3, visibleStopIndex: r3 });
              }), a3._callOnScroll = void 0, a3._callOnScroll = R(function(e5, t6, n3) {
                return a3.props.onScroll({ scrollDirection: e5, scrollOffset: t6, scrollUpdateWasRequested: n3 });
              }), a3._getItemStyle = void 0, a3._getItemStyle = function(e5) {
                var t6, o3 = a3.props, i2 = o3.direction, l3 = o3.itemSize, s3 = o3.layout, c3 = a3._getItemStyleCache(u2 && l3, u2 && s3, u2 && i2);
                if (c3.hasOwnProperty(e5)) t6 = c3[e5];
                else {
                  var d3 = n2(a3.props, e5, a3._instanceProps), f3 = r2(a3.props, e5, a3._instanceProps), h2 = "horizontal" === i2 || "horizontal" === s3, m2 = "rtl" === i2, p2 = h2 ? d3 : 0;
                  c3[e5] = t6 = { position: "absolute", left: m2 ? void 0 : p2, right: m2 ? p2 : void 0, top: h2 ? 0 : d3, height: h2 ? "100%" : f3, width: h2 ? f3 : "100%" };
                }
                return t6;
              }, a3._getItemStyleCache = void 0, a3._getItemStyleCache = R(function(e5, t6, n3) {
                return {};
              }), a3._onScrollHorizontal = function(e5) {
                var t6 = e5.currentTarget, n3 = t6.clientWidth, r3 = t6.scrollLeft, o3 = t6.scrollWidth;
                a3.setState(function(e6) {
                  if (e6.scrollOffset === r3) return null;
                  var t7 = a3.props.direction, i2 = r3;
                  if ("rtl" === t7) switch (H()) {
                    case "negative":
                      i2 = -r3;
                      break;
                    case "positive-descending":
                      i2 = o3 - n3 - r3;
                  }
                  return i2 = Math.max(0, Math.min(i2, o3 - n3)), { isScrolling: true, scrollDirection: e6.scrollOffset < r3 ? "forward" : "backward", scrollOffset: i2, scrollUpdateWasRequested: false };
                }, a3._resetIsScrollingDebounced);
              }, a3._onScrollVertical = function(e5) {
                var t6 = e5.currentTarget, n3 = t6.clientHeight, r3 = t6.scrollHeight, o3 = t6.scrollTop;
                a3.setState(function(e6) {
                  if (e6.scrollOffset === o3) return null;
                  var t7 = Math.max(0, Math.min(o3, r3 - n3));
                  return { isScrolling: true, scrollDirection: e6.scrollOffset < t7 ? "forward" : "backward", scrollOffset: t7, scrollUpdateWasRequested: false };
                }, a3._resetIsScrollingDebounced);
              }, a3._outerRefSetter = function(e5) {
                var t6 = a3.props.outerRef;
                a3._outerRef = e5, "function" == typeof t6 ? t6(e5) : null != t6 && "object" == typeof t6 && t6.hasOwnProperty("current") && (t6.current = e5);
              }, a3._resetIsScrollingDebounced = function() {
                null !== a3._resetIsScrollingTimeoutId && A(a3._resetIsScrollingTimeoutId), a3._resetIsScrollingTimeoutId = L(a3._resetIsScrolling, 150);
              }, a3._resetIsScrolling = function() {
                a3._resetIsScrollingTimeoutId = null, a3.setState({ isScrolling: false }, function() {
                  a3._getItemStyleCache(-1, null);
                });
              }, a3;
            }
            T(t4, e4), t4.getDerivedStateFromProps = function(e5, t5) {
              return U(e5, t5), d2(e5), null;
            };
            var f2 = t4.prototype;
            return f2.scrollTo = function(e5) {
              e5 = Math.max(0, e5), this.setState(function(t5) {
                return t5.scrollOffset === e5 ? null : { scrollDirection: t5.scrollOffset < e5 ? "forward" : "backward", scrollOffset: e5, scrollUpdateWasRequested: true };
              }, this._resetIsScrollingDebounced);
            }, f2.scrollToItem = function(e5, t5) {
              void 0 === t5 && (t5 = "auto");
              var n3 = this.props.itemCount, a3 = this.state.scrollOffset;
              e5 = Math.max(0, Math.min(e5, n3 - 1)), this.scrollTo(o2(this.props, e5, t5, a3, this._instanceProps));
            }, f2.componentDidMount = function() {
              var e5 = this.props, t5 = e5.direction, n3 = e5.initialScrollOffset, a3 = e5.layout;
              if ("number" == typeof n3 && null != this._outerRef) {
                var r3 = this._outerRef;
                "horizontal" === t5 || "horizontal" === a3 ? r3.scrollLeft = n3 : r3.scrollTop = n3;
              }
              this._callPropsCallbacks();
            }, f2.componentDidUpdate = function() {
              var e5 = this.props, t5 = e5.direction, n3 = e5.layout, a3 = this.state, r3 = a3.scrollOffset;
              if (a3.scrollUpdateWasRequested && null != this._outerRef) {
                var o3 = this._outerRef;
                if ("horizontal" === t5 || "horizontal" === n3) if ("rtl" === t5) switch (H()) {
                  case "negative":
                    o3.scrollLeft = -r3;
                    break;
                  case "positive-ascending":
                    o3.scrollLeft = r3;
                    break;
                  default:
                    var i2 = o3.clientWidth, l3 = o3.scrollWidth;
                    o3.scrollLeft = l3 - i2 - r3;
                }
                else o3.scrollLeft = r3;
                else o3.scrollTop = r3;
              }
              this._callPropsCallbacks();
            }, f2.componentWillUnmount = function() {
              null !== this._resetIsScrollingTimeoutId && A(this._resetIsScrollingTimeoutId);
            }, f2.render = function() {
              var e5 = this.props, t5 = e5.children, n3 = e5.className, r3 = e5.direction, o3 = e5.height, l3 = e5.innerRef, s3 = e5.innerElementType, c3 = e5.innerTagName, u3 = e5.itemCount, d3 = e5.itemData, f3 = e5.itemKey, h2 = void 0 === f3 ? B : f3, m2 = e5.layout, p2 = e5.outerElementType, v2 = e5.outerTagName, g2 = e5.style, y2 = e5.useIsScrolling, D2 = e5.width, b2 = this.state.isScrolling, _2 = "horizontal" === r3 || "horizontal" === m2, S2 = _2 ? this._onScrollHorizontal : this._onScrollVertical, w2 = this._getRangeToRender(), O2 = w2[0], E2 = w2[1], x2 = [];
              if (u3 > 0) for (var k2 = O2; k2 <= E2; k2++) x2.push(Object(i.createElement)(t5, { data: d3, key: h2(k2, d3), index: k2, isScrolling: y2 ? b2 : void 0, style: this._getItemStyle(k2) }));
              var I2 = a2(this.props, this._instanceProps);
              return Object(i.createElement)(p2 || v2 || "div", { className: n3, onScroll: S2, ref: this._outerRefSetter, style: j({ position: "relative", height: o3, width: D2, overflow: "auto", WebkitOverflowScrolling: "touch", willChange: "transform", direction: r3 }, g2) }, Object(i.createElement)(s3 || c3 || "div", { children: x2, ref: l3, style: { height: _2 ? "100%" : I2, pointerEvents: b2 ? "none" : void 0, width: _2 ? I2 : "100%" } }));
            }, f2._callPropsCallbacks = function() {
              if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
                var e5 = this._getRangeToRender(), t5 = e5[0], n3 = e5[1], a3 = e5[2], r3 = e5[3];
                this._callOnItemsRendered(t5, n3, a3, r3);
              }
              if ("function" == typeof this.props.onScroll) {
                var o3 = this.state, i2 = o3.scrollDirection, l3 = o3.scrollOffset, s3 = o3.scrollUpdateWasRequested;
                this._callOnScroll(i2, l3, s3);
              }
            }, f2._getRangeToRender = function() {
              var e5 = this.props, t5 = e5.itemCount, n3 = e5.overscanCount, a3 = this.state, r3 = a3.isScrolling, o3 = a3.scrollDirection, i2 = a3.scrollOffset;
              if (0 === t5) return [0, 0, 0, 0];
              var c3 = l2(this.props, i2, this._instanceProps), u3 = s2(this.props, c3, i2, this._instanceProps), d3 = r3 && "backward" !== o3 ? 1 : Math.max(1, n3), f3 = r3 && "forward" !== o3 ? 1 : Math.max(1, n3);
              return [Math.max(0, c3 - d3), Math.max(0, Math.min(t5 - 1, u3 + f3)), c3, u3];
            }, t4;
          }(i.PureComponent)).defaultProps = { direction: "ltr", itemData: void 0, layout: "vertical", overscanCount: 2, useIsScrolling: false }, t3;
        }
        var U = function(e3, t3) {
          e3.children, e3.direction, e3.height, e3.layout, e3.innerTagName, e3.outerTagName, e3.width, t3.instance;
        }, Y = function(e3, t3, n2) {
          var a2 = e3.itemSize, r2 = n2.itemMetadataMap, o2 = n2.lastMeasuredIndex;
          if (t3 > o2) {
            var i2 = 0;
            if (o2 >= 0) {
              var l2 = r2[o2];
              i2 = l2.offset + l2.size;
            }
            for (var s2 = o2 + 1; s2 <= t3; s2++) {
              var c2 = a2(s2);
              r2[s2] = { offset: i2, size: c2 }, i2 += c2;
            }
            n2.lastMeasuredIndex = t3;
          }
          return r2[t3];
        }, V = function(e3, t3, n2, a2, r2) {
          for (; a2 <= n2; ) {
            var o2 = a2 + Math.floor((n2 - a2) / 2), i2 = Y(e3, o2, t3).offset;
            if (i2 === r2) return o2;
            i2 < r2 ? a2 = o2 + 1 : i2 > r2 && (n2 = o2 - 1);
          }
          return a2 > 0 ? a2 - 1 : 0;
        }, J = function(e3, t3, n2, a2) {
          for (var r2 = e3.itemCount, o2 = 1; n2 < r2 && Y(e3, n2, t3).offset < a2; ) n2 += o2, o2 *= 2;
          return V(e3, t3, Math.min(n2, r2 - 1), Math.floor(n2 / 2), a2);
        }, K = function(e3, t3) {
          var n2 = e3.itemCount, a2 = t3.itemMetadataMap, r2 = t3.estimatedItemSize, o2 = t3.lastMeasuredIndex, i2 = 0;
          if (o2 >= n2 && (o2 = n2 - 1), o2 >= 0) {
            var l2 = a2[o2];
            i2 = l2.offset + l2.size;
          }
          return i2 + (n2 - o2 - 1) * r2;
        }, Z = q({ getItemOffset: function(e3, t3, n2) {
          return Y(e3, t3, n2).offset;
        }, getItemSize: function(e3, t3, n2) {
          return n2.itemMetadataMap[t3].size;
        }, getEstimatedTotalSize: K, getOffsetForIndexAndAlignment: function(e3, t3, n2, a2, r2) {
          var o2 = e3.direction, i2 = e3.height, l2 = e3.layout, s2 = e3.width, c2 = "horizontal" === o2 || "horizontal" === l2 ? s2 : i2, u2 = Y(e3, t3, r2), d2 = K(e3, r2), f2 = Math.max(0, Math.min(d2 - c2, u2.offset)), h2 = Math.max(0, u2.offset - c2 + u2.size);
          switch ("smart" === n2 && (n2 = a2 >= h2 - c2 && a2 <= f2 + c2 ? "auto" : "center"), n2) {
            case "start":
              return f2;
            case "end":
              return h2;
            case "center":
              return Math.round(h2 + (f2 - h2) / 2);
            case "auto":
            default:
              return a2 >= h2 && a2 <= f2 ? a2 : a2 < h2 ? h2 : f2;
          }
        }, getStartIndexForOffset: function(e3, t3, n2) {
          return function(e4, t4, n3) {
            var a2 = t4.itemMetadataMap, r2 = t4.lastMeasuredIndex;
            return (r2 > 0 ? a2[r2].offset : 0) >= n3 ? V(e4, t4, r2, 0, n3) : J(e4, t4, Math.max(0, r2), n3);
          }(e3, n2, t3);
        }, getStopIndexForStartIndex: function(e3, t3, n2, a2) {
          for (var r2 = e3.direction, o2 = e3.height, i2 = e3.itemCount, l2 = e3.layout, s2 = e3.width, c2 = "horizontal" === r2 || "horizontal" === l2 ? s2 : o2, u2 = Y(e3, t3, a2), d2 = n2 + c2, f2 = u2.offset + u2.size, h2 = t3; h2 < i2 - 1 && f2 < d2; ) h2++, f2 += Y(e3, h2, a2).size;
          return h2;
        }, initInstanceProps: function(e3, t3) {
          var n2 = { itemMetadataMap: {}, estimatedItemSize: e3.estimatedItemSize || 50, lastMeasuredIndex: -1 };
          return t3.resetAfterIndex = function(e4, a2) {
            void 0 === a2 && (a2 = true), n2.lastMeasuredIndex = Math.min(n2.lastMeasuredIndex, e4 - 1), t3._getItemStyleCache(-1), a2 && t3.forceUpdate();
          }, n2;
        }, shouldResetStyleCacheOnItemSizeChange: false, validateProps: function(e3) {
          e3.itemSize;
        } });
        var Q = n(5);
        function X(e3) {
          return function(e4) {
            if (Array.isArray(e4)) return a(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) return Array.from(e4);
          }(e3) || r(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        var G = Object(i.forwardRef)(function(e3, t3) {
          var n2 = e3.dateIndex, a2 = e3.dateValue, r2 = e3.selected, o2 = e3.hovered, s2 = e3.disabled, u2 = e3.onSelectDate, d2 = e3.onHoverDate, f2 = e3.isEndDay, h2 = e3.totalDay, m2 = e3.highlight, p2 = e3.handleHoverDay, v2 = Object(i.useRef)();
          var g2 = Object(i.useCallback)(function() {
            var e4 = t3.current;
            e4 && (e4.style.left = "".concat(v2.current.offsetLeft - e4.offsetWidth + 135, "px"), e4.style.top = "".concat(v2.current.offsetTop - e4.offsetHeight - 15, "px"), e4.style.visibility = "visible");
          }, []), y2 = Object(i.useCallback)(function() {
            var e4 = t3.current;
            e4 && (e4.style.visibility = "hidden");
          }, []);
          return Object(i.useEffect)(function() {
            return v2.current && (v2.current.addEventListener("mouseover", g2), v2.current.addEventListener("mouseleave", y2)), function() {
              document.removeEventListener("mouseover", g2), document.removeEventListener("mouseleave", y2);
            };
          }, [v2]), l.a.createElement("div", { className: c()("day", { selected: r2, hovered: o2, disabled: s2, highlight: m2, end: f2 }), onClick: function(e4) {
            e4.stopPropagation(), e4.preventDefault(), s2 || u2(a2);
          }, onMouseEnter: function() {
            !s2 && d2 && (d2(a2), p2(a2));
          }, role: "button", tabIndex: "-1", "data-day-index": n2, "data-date-value": a2, ref: v2 }, o2 && !(f2 && n2 === h2) && !(1 === n2 && r2 && !f2) && l.a.createElement("div", { className: c()("background-day", { "first-day": 1 === n2, "last-day": n2 === h2 }) }), l.a.createElement("div", { className: "text-day" }, n2));
        });
        G.defaultProps = { dateIndex: null, dateValue: null, isEndDay: false, selected: false, hovered: false, disabled: false, totalDay: null, onSelectDate: function() {
        }, onHoverDate: function() {
        }, highlight: false, handleHoverDay: function() {
        } };
        var ee = G, te = Object(i.forwardRef)(function(e3, t3) {
          var n2 = e3.isFirst, a2 = e3.week, r2 = e3.month, o2 = e3.year, i2 = e3.fromDate, s2 = e3.toDate, u2 = e3.hoverDate, f2 = e3.onSelectDate, h2 = e3.onHoverDate, m2 = e3.totalDay, p2 = e3.minDate, v2 = e3.maxDate, g2 = e3.isSingle, y2 = e3.weekIndex, D2 = e3.highlightToday, b2 = e3.handleHoverDay;
          return l.a.createElement("div", { className: c()("week", { first: n2 }) }, X(Array(a2.days).keys()).map(function(e4) {
            var n3 = e4 + a2.start, c2 = d()("".concat(o2, "-").concat(r2 + 1, "-").concat(n3)), _2 = p2 && c2.isBefore(p2, "date") || v2 && c2.isAfter(v2, "date"), S2 = c2.isSame(i2, "date") || c2.isSame(s2, "date"), w2 = false, O2 = D2 && c2.isSame(/* @__PURE__ */ new Date(), "date");
            !i2 || i2.isSame(s2, "date") || g2 || (!s2 || i2.isAfter(c2, "date") || s2.isBefore(c2, "date") || (w2 = true), s2 || c2.isBefore(i2, "date") || u2 && u2.isBefore(c2, "date") || !i2.isBefore(u2, "date") || (w2 = true));
            var E2 = false;
            return (c2.isSame(s2, "date") || !s2 && c2.isSame(u2, "date")) && (E2 = true), l.a.createElement(ee, { key: e4, dateIndex: n3, dateValue: c2, hoverDate: u2, onSelectDate: f2, onHoverDate: h2, selected: S2, hovered: w2, highlight: O2, disabled: _2, isEndDay: E2, totalDay: m2, weekDayIndex: e4, weekIndex: y2, handleHoverDay: b2, ref: t3 });
          }));
        });
        te.defaultProps = { isFirst: false, week: {}, month: null, year: null, fromDate: null, toDate: null, totalDay: null, hoverDate: null, onSelectDate: function() {
        }, onHoverDate: function() {
        }, minDate: null, maxDate: null, isSingle: false, weekIndex: 0, highlightToday: false, handleHoverDay: function() {
        } };
        var ne = te, ae = Object(i.forwardRef)(function(e3, t3) {
          var n2, a2, r2, o2 = e3.hidden, i2 = e3.month, s2 = e3.year, u2 = e3.onSelectDate, m2 = e3.onHoverDate, p2 = e3.fromDate, v2 = e3.toDate, g2 = e3.hoverDate, y2 = e3.isAnimating, D2 = e3.startWeekDay, b2 = e3.minDate, _2 = e3.maxDate, S2 = e3.monthFormat, w2 = e3.weekDayFormat, O2 = e3.isSingle, E2 = e3.highlightToday, x2 = e3.singleCalendar, k2 = e3.handleHoverDay;
          return l.a.createElement("div", { className: c()("month-calendar", { isAnimating: y2, hidden: o2, single: x2 }), "data-month-index": i2 + 1 }, l.a.createElement("div", { className: "month-name" }, S2 ? d()("".concat(s2, "-").concat(i2 + 1, "-1")).format(S2) : d()("".concat(s2, "-").concat(i2 + 1, "-1")).format("MMMM - YYYY")), l.a.createElement("div", { className: "weekdays" }, h(D2, w2).map(function(e4, t4) {
            return l.a.createElement("div", { className: "weekday", key: t4 }, e4);
          })), l.a.createElement("div", { className: "week-container" }, (n2 = f(s2, i2, D2), a2 = n2.totalWeek, r2 = n2.totalDay, a2.map(function(e4, n3) {
            return l.a.createElement(ne, { key: n3, week: e4, month: i2, year: s2, isFirst: 0 === n3, onSelectDate: u2, onHoverDate: m2, fromDate: p2, toDate: v2, hoverDate: g2, totalDay: r2, minDate: b2, maxDate: _2, isSingle: O2, weekIndex: n3, highlightToday: E2, handleHoverDay: k2, ref: t3 });
          }))));
        });
        ae.defaultProps = { month: null, year: null, onSelectDate: function() {
        }, onHoverDate: function() {
        }, fromDate: null, toDate: null, hoverDate: null, hidden: false, isAnimating: false, startWeekDay: null, weekDayFormat: "", minDate: null, maxDate: null, monthFormat: "", isSingle: false, highlightToday: false, singleCalendar: false, handleHoverDay: function() {
        } };
        var re = ae, oe = function(e3) {
          var t3 = e3.fromDate, n2 = e3.toDate, a2 = e3.hoverDate, r2 = e3.onSelectDate, s2 = e3.startWeekDay, c2 = e3.minDate, u2 = e3.maxDate, m2 = e3.monthFormat, p2 = e3.weekDayFormat, v2 = e3.complsOpen, g2 = e3.isSingle, y2 = e3.highlightToday, D2 = e3.tooltip, b2 = o(Object(i.useState)(2400), 2), _2 = b2[0], S2 = b2[1], w2 = c2 ? d()(c2).year() : 1900, O2 = c2 ? d()(c2).month() : 0, E2 = Object(i.useRef)();
          function x2(e4) {
            var t4 = e4 + O2;
            return { year: w2 + Math.floor(t4 / 12), month: t4 % 12 };
          }
          Object(i.useEffect)(function() {
            if (u2) {
              var e4 = c2 ? d()(c2) : d()("1900-01-01");
              S2(d()(u2).diff(e4, "month") + 1);
            }
          }, []), Object(i.useEffect)(function() {
            if (E2.current && v2) {
              var e4 = t3 ? d()(t3) : d()(), n3 = e4.diff(d()("1900-01-01"), "month");
              c2 && (n3 = e4.diff(d()(c2), "month")), E2.current.scrollToItem(n3 + 1, "smart");
            }
          }, [v2]);
          var k2 = function(e4) {
            var o2 = e4.index, i2 = e4.style, d2 = x2(o2), f2 = d2.year, h2 = d2.month;
            return l.a.createElement("div", { style: i2 }, l.a.createElement(re, { month: h2, year: f2, onSelectDate: r2, fromDate: t3, toDate: n2, hoverDate: a2, startWeekDay: s2, minDate: c2, maxDate: u2, monthFormat: m2, isSingle: g2, highlightToday: y2, tooltip: D2 }));
          };
          function I2(e4) {
            var t4 = x2(e4);
            return 48 * f(t4.year, t4.month, "monday").totalWeek.length + 34;
          }
          return l.a.createElement("div", { className: "calendar-wrapper" }, l.a.createElement("div", { className: "calendar-content" }, l.a.createElement("div", { className: "weekdays mobile" }, h(s2, p2).map(function(e4, t4) {
            return l.a.createElement("div", { className: "weekday", key: t4 }, e4);
          })), l.a.createElement(Q.a, null, function(e4) {
            var t4 = e4.height, n3 = e4.width;
            return l.a.createElement(Z, { ref: E2, width: n3, height: t4 - 36, itemCount: _2, itemSize: I2 }, k2);
          })));
        };
        oe.defaultProps = { fromDate: null, toDate: null, hoverDate: null, onSelectDate: function() {
        }, startWeekDay: null, minDate: null, maxDate: null, monthFormat: "", complsOpen: false, isSingle: false, highlightToday: false, weekDayFormat: "", tooltip: "" };
        var ie = oe, le = function(e3) {
          var t3 = e3.fromDate, n2 = e3.toDate, a2 = e3.hoverDate, r2 = e3.onSelectDate, s2 = e3.onHoverDate, u2 = e3.startWeekDay, f2 = e3.minDate, h2 = e3.maxDate, m2 = e3.monthFormat, p2 = e3.weekDayFormat, v2 = e3.isSingle, g2 = e3.complsOpen, y2 = e3.dateChanged, b2 = e3.highlightToday, S2 = e3.singleCalendar, w2 = e3.tooltip, O2 = Object(i.useRef)(), E2 = Object(i.useRef)(), x2 = o(Object(i.useState)(0), 2), k2 = x2[0], I2 = x2[1], C2 = o(Object(i.useState)([]), 2), F2 = C2[0], j2 = C2[1], M2 = o(Object(i.useState)(d()()), 2), z2 = M2[0], T2 = M2[1], N2 = o(Object(i.useState)(false), 2), $2 = N2[0], R2 = N2[1], P2 = o(Object(i.useState)(false), 2), A2 = P2[0], L2 = P2[1], W2 = o(Object(i.useState)(0), 2), H2 = W2[0], B2 = W2[1], q2 = o(Object(i.useState)(0), 2), U2 = q2[0], Y2 = q2[1];
          var V2 = Object(i.useCallback)(function(e4) {
            Y2(e4);
          }, []);
          function J2(e4) {
            A2 || (I2(-H2), setTimeout(function() {
              !function(e5) {
                if (d.a.isDayjs(e5)) T2(e5);
                else {
                  var t4 = d()(z2).add(1, "month");
                  T2(t4);
                }
              }(e4), I2(0);
            }, 200));
          }
          function K2(e4) {
            $2 || (I2(H2), setTimeout(function() {
              !function(e5) {
                if (d.a.isDayjs(e5)) T2(e5);
                else {
                  var t4 = d()(z2).subtract(1, "month");
                  T2(t4);
                }
              }(e4), I2(0);
            }, 200));
          }
          return Object(i.useEffect)(function() {
            if (O2.current) {
              var e4 = window.getComputedStyle(O2.current), t4 = S2 ? O2.current.offsetWidth + parseInt(e4.marginLeft) - 8 : O2.current.offsetWidth / 2;
              B2(t4);
            }
          }, [O2.current]), Object(i.useEffect)(function() {
            T2(t3 || d()());
          }, [g2]), Object(i.useEffect)(function() {
            f2 && z2.isBefore(d()(f2).add(1, "month"), "month") ? R2(true) : R2(false), h2 && z2.isAfter(d()(h2).subtract(2, "month"), "month") ? L2(true) : L2(false);
            var e4 = function(e5, t4) {
              var n3 = d()(e5).subtract(1, "month"), a3 = d()(e5).add(1, "month"), r3 = d()(e5).add(2, "month");
              return t4 ? [n3, z2, a3] : [n3, z2, a3, r3];
            }(z2, S2);
            j2(e4);
          }, [z2]), Object(i.useEffect)(function() {
            y2 && (d()(y2).isBefore(z2, "month", true) && K2(y2), d()(y2).isAfter(z2.add(1, "month"), "month", true) && J2(d()(y2).subtract(1, "month")));
          }, [y2]), l.a.createElement("div", { style: { position: "relative" } }, w2 && l.a.createElement("div", { id: "day-tooltip", className: "tooltip-text", ref: E2 }, "function" == typeof w2 ? w2(U2.$d ? new Date(U2.$d) : /* @__PURE__ */ new Date()) : w2), l.a.createElement("div", { className: c()("calendar-wrapper", { single: S2 }), ref: O2, onKeyDown: function(e4) {
            if (-1 === [9, 32, 37, 38, 39, 40].indexOf(e4.keyCode) || !e4.target.getAttribute("data-day-index")) return true;
            e4.preventDefault();
            var t4, n3 = e4.target.parentElement.parentElement.parentElement.parentElement, a3 = parseInt(e4.target.getAttribute("data-day-index")), r3 = parseInt(e4.target.getAttribute("data-date-value")), o2 = d()(r3), i2 = o2.add(1, "month").set("date", 0).get("date"), l2 = 0;
            switch (e4.keyCode) {
              case 9:
                var s3 = n3.parentElement.parentElement.parentElement.querySelector(".submit-button");
                if (s3) return s3.focus(), true;
                break;
              case 32:
                e4.target.click();
                break;
              case 37:
                l2 = -1;
                break;
              case 38:
                l2 = -7;
                break;
              case 39:
                l2 = 1;
                break;
              case 40:
                l2 = 7;
            }
            if ((t4 = a3 + l2) > 0 && t4 <= i2) {
              var c2 = '.day[data-day-index="'.concat(t4, '"]'), u3 = e4.target.parentElement.parentElement.querySelector(c2);
              u3 && u3.focus();
            } else {
              var m3 = o2.add(l2, "day");
              if (l2 > 0 && Math.ceil(m3.diff(z2, "month", true)) > 1) {
                if (h2 && d()(m3).isAfter(h2, "month")) return false;
                J2();
              } else if (l2 < 0 && Math.ceil(z2.diff(m3, "month", true)) > 0) {
                if (f2 && d()(m3).isBefore(f2, "month")) return false;
                K2();
              }
              setTimeout(function() {
                var e5 = '.month-calendar[data-month-index="'.concat(m3.get("month") + 1, '"] .day[data-day-index="').concat(m3.get("date"), '"]'), t5 = n3.querySelector(e5);
                t5 && t5.focus();
              }, 200);
            }
            return false;
          } }, l.a.createElement("div", { className: c()("calendar-content", { isAnimating: 0 !== k2, single: S2 }), style: { transform: "translateX(".concat(k2, "px)") } }, F2.map(function(e4, o2) {
            return l.a.createElement(re, { key: o2, hidden: 0 === o2 && k2 <= 0, isAnimating: 0 === o2 && k2 > 0, month: d()(e4).get("month"), year: d()(e4).get("year"), onSelectDate: r2, onHoverDate: s2, fromDate: t3, toDate: n2, hoverDate: a2, startWeekDay: u2, minDate: f2, maxDate: h2, weekDayFormat: p2, monthFormat: m2, isSingle: v2, highlightToday: b2, singleCalendar: S2, handleHoverDay: V2, ref: E2 });
          })), l.a.createElement("div", { className: "calendar-flippers" }, l.a.createElement("div", { className: c()("flipper-button", { disabled: $2 }), onClick: K2, onKeyDown: function(e4) {
            if (32 === e4.keyCode || 13 === e4.keyCode) return e4.preventDefault(), K2(), false;
          }, role: "button", tabIndex: "0" }, l.a.createElement(D, { viewBox: "0 0 24 24" })), l.a.createElement("div", { className: c()("flipper-button", { disabled: A2 }), onClick: J2, onKeyDown: function(e4) {
            if (32 === e4.keyCode || 13 === e4.keyCode) return e4.preventDefault(), J2(), false;
          }, role: "button", tabIndex: "0", onBlur: function() {
            if (O2 && O2.current) {
              var e4 = O2.current.querySelector(".day.selected");
              e4 || (e4 = O2.current.querySelector(".month-calendar:not(.hidden) .day:not(.disabled)")), e4 && e4.focus();
            }
          } }, l.a.createElement(_, { viewBox: "0 0 24 24" })))));
        };
        le.defaultProps = { fromDate: null, toDate: null, hoverDate: null, onSelectDate: function() {
        }, onHoverDate: function() {
        }, startWeekDay: null, minDate: null, maxDate: null, monthFormat: "", isSingle: false, complsOpen: false, dateChanged: null, highlightToday: false, singleCalendar: false, weekDayFormat: "", tooltip: "" };
        var se = le, ce = function(e3) {
          var t3 = e3.toggleDialog, n2 = e3.complsOpen, a2 = e3.fromDate, r2 = e3.toDate, s2 = e3.hoverDate, u2 = e3.onSelectDate, d2 = e3.onHoverDate, f2 = e3.handleReset, h2 = e3.handleClickDateInput, m2 = e3.inputFocus, p2 = e3.handleChangeDate, v2 = e3.startDatePlaceholder, g2 = e3.endDatePlaceholder, y2 = e3.startWeekDay, D2 = e3.minDate, b2 = e3.maxDate, _2 = e3.dateFormat, S2 = e3.weekDayFormat, w2 = e3.monthFormat, O2 = e3.isSingle, x2 = e3.isMobile, k2 = e3.highlightToday, I2 = e3.hideDialogHeader, C2 = e3.hideDialogFooter, j2 = e3.dateInputSeperator, M2 = e3.singleCalendar, z2 = e3.tooltip, T2 = o(Object(i.useState)(false), 2), N2 = T2[0], $2 = T2[1], R2 = o(Object(i.useState)(), 2), P2 = R2[0], A2 = R2[1], L2 = Object(i.useRef)();
          return Object(i.useEffect)(function() {
            n2 && !N2 && $2(true), n2 && setTimeout(function() {
              if (L2.current && L2.current.getElementById) {
                var e4 = L2.current.getElementById("start-date-input-button");
                e4 && e4.focus();
              }
            }, 50);
          }, [n2]), l.a.createElement("div", { className: c()("dialog-date-picker", { open: n2, hide: !n2 && N2, single: M2 && !x2 }), ref: L2 }, !I2 && l.a.createElement("div", { className: "dialog-header" }, l.a.createElement("button", { type: "button", className: "btn-outline back-button", onClick: t3 }, l.a.createElement(F, { viewBox: "0 0 492 492" })), l.a.createElement(E, { inputFocus: m2, handleClickDateInput: h2, fromDate: a2, toDate: r2, minDate: D2, maxDate: b2, handleChangeDate: function(e4, t4) {
            A2(e4), p2(e4, t4);
          }, startDatePlaceholder: v2, endDatePlaceholder: g2, dateFormat: _2, isSingle: O2, nonFocusable: !n2, dateInputSeperator: j2 }), l.a.createElement("button", { type: "button", className: "btn-outline reset-button", onClick: f2 }, "Reset")), l.a.createElement("div", { className: "dialog-content" }, x2 ? l.a.createElement(ie, { fromDate: a2, toDate: r2, hoverDate: s2, onSelectDate: u2, startWeekDay: y2, minDate: D2, maxDate: b2, dateFormat: _2, weekDayFormat: S2, monthFormat: w2, complsOpen: n2, isSingle: O2, highlightToday: k2, tooltip: z2 }) : l.a.createElement(se, { fromDate: a2, toDate: r2, hoverDate: s2, onSelectDate: u2, onHoverDate: d2, startWeekDay: y2, minDate: D2, maxDate: b2, dateFormat: _2, weekDayFormat: S2, monthFormat: w2, isSingle: O2, complsOpen: n2, dateChanged: P2, highlightToday: k2, singleCalendar: M2, tooltip: z2 })), !C2 && l.a.createElement("div", { className: "dialog-footer" }, l.a.createElement("button", { type: "button", className: "submit-button", onClick: t3, tabIndex: "0" }, "Done"), l.a.createElement("button", { type: "button", className: "btn-outline reset-button mobile", onClick: f2 }, "Reset")));
        };
        ce.defaultProps = { complsOpen: false, inputFocus: null, fromDate: null, toDate: null, hoverDate: null, toggleDialog: function() {
        }, handleClickDateInput: function() {
        }, onSelectDate: function() {
        }, onHoverDate: function() {
        }, handleReset: function() {
        }, handleChangeDate: function() {
        }, startDatePlaceholder: null, endDatePlaceholder: null, startWeekDay: null, minDate: null, maxDate: null, dateFormat: "", monthFormat: "", isSingle: false, isMobile: false, highlightToday: false, weekDayFormat: "", hideDialogHeader: false, hideDialogFooter: false, dateInputSeperator: null, singleCalendar: false, tooltip: "" };
        var ue = ce, de = function(e3) {
          var t3 = e3.startDate, n2 = e3.endDate, a2 = e3.startDatePlaceholder, r2 = e3.endDatePlaceholder, s2 = e3.className, u2 = e3.disabled, f2 = e3.onChange, h2 = e3.onFocus, p2 = e3.startWeekDay, v2 = e3.minDate, g2 = e3.maxDate, y2 = e3.dateFormat, D2 = e3.weekDayFormat, b2 = e3.monthFormat, _2 = e3.highlightToday, S2 = e3.hideDialogHeader, w2 = e3.hideDialogFooter, O2 = e3.dateInputSeperator, x2 = e3.hideDialogAfterSelectEndDate, k2 = e3.isOpen, C2 = e3.onCloseCalendar, F2 = e3.tooltip, j2 = o(Object(i.useState)(false), 2), M2 = j2[0], z2 = j2[1], T2 = Object(i.useRef)(null), N2 = o(Object(i.useState)("from"), 2), $2 = N2[0], R2 = N2[1], P2 = o(Object(i.useState)(), 2), A2 = P2[0], L2 = P2[1], W2 = o(Object(i.useState)(), 2), H2 = W2[0], B2 = W2[1], q2 = Object(i.useRef)(), U2 = Object(i.useRef)(), Y2 = o(Object(i.useState)(), 2), V2 = Y2[0], J2 = Y2[1], K2 = o(Object(i.useState)(false), 2), Z2 = K2[0], Q2 = K2[1], X2 = o(Object(i.useState)(false), 2), G2 = X2[0], ee2 = X2[1];
          function te2() {
            "undefined" != typeof window && window.innerWidth < 768 ? ee2(true) : ee2(false);
          }
          function ne2(e4) {
            T2.current && false === T2.current.contains(e4.target) && window.innerWidth >= 768 && z2(false);
          }
          Object(i.useLayoutEffect)(function() {
            if (te2(), "undefined" != typeof window) return window.addEventListener("resize", te2), function() {
              return window.removeEventListener("resize", te2);
            };
          }, []);
          var ae2 = m(function() {
            var e4 = q2.current ? q2.current.toDate() : null, t4 = U2.current ? U2.current.toDate() : null;
            f2(e4, t4);
          }, 20);
          function re2(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            L2(e4), q2.current = e4, t4 && ae2();
          }
          function oe2(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            B2(e4), U2.current = e4, t4 && ae2();
          }
          function ie2(e4) {
            "to" === e4 && !A2 || u2 || (M2 || z2(true), R2(e4));
          }
          function le2(e4, t4) {
            v2 && d()(v2).isAfter(e4, "date") || g2 && d()(g2).isBefore(e4, "date") || ("from" === t4 ? (R2("from"), re2(e4, true), e4 > H2 && oe2(null, true)) : (R2("to"), oe2(e4, true)));
          }
          return Object(i.useEffect)(function() {
            return Q2(true), document.addEventListener("click", ne2), function() {
              return document.removeEventListener("click", ne2);
            };
          }, []), Object(i.useEffect)(function() {
            var e4 = t3 ? d()(t3) : null;
            q2.current = e4, re2(e4, false);
          }, [t3]), Object(i.useEffect)(function() {
            var e4 = n2 ? d()(n2) : null;
            U2.current = e4, oe2(e4, false);
          }, [n2]), Object(i.useEffect)(function() {
            !M2 && Z2 && C2(t3, n2);
          }, [M2]), Object(i.useEffect)(function() {
            z2(k2);
          }, [k2]), Object(i.useEffect)(function() {
            Z2 && h2("from" === $2 ? "Start Date" : "to" === $2 ? "End Date" : "");
          }, [$2]), l.a.createElement("div", { className: "react-google-flight-datepicker" }, l.a.createElement("div", { className: c()("date-picker", s2, { disabled: u2 }), ref: T2 }, l.a.createElement(E, { handleClickDateInput: ie2, showCalendarIcon: true, fromDate: A2, toDate: H2, minDate: v2, maxDate: g2, handleChangeDate: le2, startDatePlaceholder: a2, endDatePlaceholder: r2, dateFormat: y2, onFocus: function() {
            ie2("from");
          }, nonFocusable: M2, dateInputSeperator: O2, inputFocus: $2 }), l.a.createElement(I, { isMobile: G2 }, l.a.createElement(ue, { complsOpen: M2, toggleDialog: function() {
            z2(!M2);
          }, handleClickDateInput: ie2, inputFocus: $2, setInputFocus: R2, onSelectDate: function(e4) {
            $2 ? "from" === $2 || A2 && e4.isBefore(A2, "date") ? (re2(e4, true), H2 && e4.isAfter(H2, "date") && oe2(null, true), R2("to")) : (oe2(e4, true), R2(null), x2 && setTimeout(function() {
              z2(false);
            }, 50)) : (re2(e4, true), R2("to"), H2 && e4.isAfter(H2, "date") && oe2(null, true));
          }, onHoverDate: function(e4) {
            J2(e4);
          }, fromDate: A2, toDate: H2, hoverDate: V2, handleReset: function() {
            R2("from"), J2(null), re2(null, true), oe2(null, true);
          }, handleChangeDate: le2, startDatePlaceholder: a2, endDatePlaceholder: r2, startWeekDay: p2, minDate: v2, maxDate: g2, weekDayFormat: D2, dateFormat: y2, monthFormat: b2, isMobile: G2, highlightToday: _2, hideDialogHeader: S2, hideDialogFooter: w2, dateInputSeperator: O2, tooltip: F2 }))));
        };
        de.defaultProps = { startDate: null, endDate: null, className: "", disabled: false, startDatePlaceholder: "Start date", endDatePlaceholder: "End date", onChange: function() {
        }, onFocus: function() {
        }, startWeekDay: "monday", minDate: null, maxDate: null, weekDayFormat: "dd", dateFormat: "", monthFormat: "", highlightToday: false, dateInputSeperator: null, hideDialogHeader: false, hideDialogFooter: false, hideDialogAfterSelectEndDate: false, isOpen: false, onCloseCalendar: function() {
        }, tooltip: "" };
        var fe = de, he = function(e3) {
          var t3 = e3.startDate, n2 = e3.startDatePlaceholder, a2 = e3.className, r2 = e3.disabled, s2 = e3.onChange, u2 = e3.onFocus, f2 = e3.startWeekDay, h2 = e3.minDate, p2 = e3.maxDate, v2 = e3.dateFormat, g2 = e3.monthFormat, y2 = e3.highlightToday, D2 = e3.isOpen, b2 = e3.onCloseCalendar, _2 = e3.singleCalendar, S2 = e3.weekDayFormat, w2 = e3.tooltip, O2 = o(Object(i.useState)(false), 2), x2 = O2[0], k2 = O2[1], C2 = Object(i.useRef)(null), F2 = o(Object(i.useState)(), 2), j2 = F2[0], M2 = F2[1], z2 = Object(i.useRef)(), T2 = o(Object(i.useState)(), 2), N2 = T2[0], $2 = T2[1], R2 = o(Object(i.useState)(false), 2), P2 = R2[0], A2 = R2[1], L2 = o(Object(i.useState)(false), 2), W2 = L2[0], H2 = L2[1];
          function B2() {
            "undefined" != typeof window && window.innerWidth < 768 ? A2(true) : A2(false);
          }
          function q2(e4) {
            C2.current && false === C2.current.contains(e4.target) && window.innerWidth >= 768 && k2(false);
          }
          Object(i.useLayoutEffect)(function() {
            if (B2(), "undefined" != typeof window) return window.addEventListener("resize", B2), function() {
              return window.removeEventListener("resize", B2);
            };
          }, []);
          var U2 = m(function() {
            var e4 = z2.current ? z2.current.toDate() : null;
            s2(e4);
          }, 20);
          function Y2(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            M2(e4), z2.current = e4, t4 && U2();
          }
          function V2() {
            r2 || (x2 || k2(true), u2("Start Date"));
          }
          function J2(e4) {
            h2 && d()(h2).isAfter(e4, "date") || p2 && d()(p2).isBefore(e4, "date") || Y2(e4, true);
          }
          return Object(i.useEffect)(function() {
            return k2(D2), H2(true), t3 && Y2(d()(t3), false), document.addEventListener("click", q2), function() {
              return document.removeEventListener("click", q2);
            };
          }, []), Object(i.useEffect)(function() {
            var e4 = t3 ? d()(t3) : null;
            z2.current = e4, M2(e4);
          }, [t3]), Object(i.useEffect)(function() {
            !x2 && W2 && b2(t3);
          }, [x2]), Object(i.useEffect)(function() {
            k2(D2);
          }, [D2]), l.a.createElement("div", { className: "react-google-flight-datepicker" }, l.a.createElement("div", { className: c()("date-picker", a2, { disabled: r2 }), ref: C2 }, l.a.createElement(E, { handleClickDateInput: V2, showCalendarIcon: true, fromDate: j2, minDate: h2, maxDate: p2, handleChangeDate: J2, startDatePlaceholder: n2, dateFormat: v2, onFocus: function() {
            V2();
          }, isSingle: true }), l.a.createElement(I, { isMobile: P2 }, l.a.createElement(ue, { complsOpen: x2, toggleDialog: function() {
            k2(!x2);
          }, handleClickDateInput: V2, inputFocus: "from", onSelectDate: J2, onHoverDate: function(e4) {
            $2(e4);
          }, fromDate: j2, hoverDate: N2, handleReset: function() {
            Y2(null, true), $2(null);
          }, handleChangeDate: J2, startDatePlaceholder: n2, startWeekDay: f2, minDate: h2, maxDate: p2, dateFormat: v2, monthFormat: g2, isMobile: P2, highlightToday: y2, isSingle: true, weekDayFormat: S2, singleCalendar: _2, tooltip: w2 }))));
        };
        he.defaultProps = { startDate: null, className: "", disabled: false, startDatePlaceholder: "Date", onChange: function() {
        }, onFocus: function() {
        }, startWeekDay: "monday", weekDayFormat: "dd", minDate: null, maxDate: null, dateFormat: "", monthFormat: "", highlightToday: false, isOpen: false, onCloseCalendar: function() {
        }, singleCalendar: false, tooltip: "" };
        var me = he;
      }]);
    });
  }
});
export default require_dist();
/*! Bundled license information:

react-google-flight-datepicker/dist/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-google-flight-datepicker.js.map
