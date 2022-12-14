(() => {
  // node_modules/.pnpm/keen-slider@6.8.3/node_modules/keen-slider/keen-slider.es.js
  var n = function() {
    return n = Object.assign || function(n2) {
      for (var t2, i2 = 1, e2 = arguments.length; i2 < e2; i2++)
        for (var r2 in t2 = arguments[i2])
          Object.prototype.hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
      return n2;
    }, n.apply(this, arguments);
  };
  function t(n2, t2, i2) {
    if (i2 || 2 === arguments.length)
      for (var e2, r2 = 0, a2 = t2.length; r2 < a2; r2++)
        !e2 && r2 in t2 || (e2 || (e2 = Array.prototype.slice.call(t2, 0, r2)), e2[r2] = t2[r2]);
    return n2.concat(e2 || Array.prototype.slice.call(t2));
  }
  function i(n2) {
    return Array.prototype.slice.call(n2);
  }
  function e(n2, t2) {
    var i2 = Math.floor(n2);
    return i2 === t2 || i2 + 1 === t2 ? n2 : t2;
  }
  function r() {
    return Date.now();
  }
  function a(n2, t2, i2) {
    if (t2 = "data-keen-slider-" + t2, null === i2)
      return n2.removeAttribute(t2);
    n2.setAttribute(t2, i2 || "");
  }
  function o(n2, t2) {
    return t2 = t2 || document, "function" == typeof n2 && (n2 = n2(t2)), Array.isArray(n2) ? n2 : "string" == typeof n2 ? i(t2.querySelectorAll(n2)) : n2 instanceof HTMLElement ? [n2] : n2 instanceof NodeList ? i(n2) : [];
  }
  function u(n2) {
    n2.raw && (n2 = n2.raw), n2.cancelable && !n2.defaultPrevented && n2.preventDefault();
  }
  function s(n2) {
    n2.raw && (n2 = n2.raw), n2.stopPropagation && n2.stopPropagation();
  }
  function c() {
    var n2 = [];
    return { add: function(t2, i2, e2, r2) {
      t2.addListener ? t2.addListener(e2) : t2.addEventListener(i2, e2, r2), n2.push([t2, i2, e2, r2]);
    }, input: function(n3, t2, i2, e2) {
      this.add(n3, t2, function(n4) {
        return function(t3) {
          t3.nativeEvent && (t3 = t3.nativeEvent);
          var i3 = t3.changedTouches || [], e3 = t3.targetTouches || [], r2 = t3.detail && t3.detail.x ? t3.detail : null;
          return n4({ id: r2 ? r2.identifier ? r2.identifier : "i" : e3[0] ? e3[0] ? e3[0].identifier : "e" : "d", idChanged: r2 ? r2.identifier ? r2.identifier : "i" : i3[0] ? i3[0] ? i3[0].identifier : "e" : "d", raw: t3, x: r2 && r2.x ? r2.x : e3[0] ? e3[0].screenX : r2 ? r2.x : t3.pageX, y: r2 && r2.y ? r2.y : e3[0] ? e3[0].screenY : r2 ? r2.y : t3.pageY });
        };
      }(i2), e2);
    }, purge: function() {
      n2.forEach(function(n3) {
        n3[0].removeListener ? n3[0].removeListener(n3[2]) : n3[0].removeEventListener(n3[1], n3[2], n3[3]);
      }), n2 = [];
    } };
  }
  function d(n2, t2, i2) {
    return Math.min(Math.max(n2, t2), i2);
  }
  function l(n2) {
    return (n2 > 0 ? 1 : 0) - (n2 < 0 ? 1 : 0) || +n2;
  }
  function f(n2) {
    var t2 = n2.getBoundingClientRect();
    return { height: e(t2.height, n2.offsetHeight), width: e(t2.width, n2.offsetWidth) };
  }
  function p(n2, t2, i2, e2) {
    var r2 = n2 && n2[t2];
    return null == r2 ? i2 : e2 && "function" == typeof r2 ? r2() : r2;
  }
  function v(n2) {
    return Math.round(1e6 * n2) / 1e6;
  }
  function h(n2) {
    var t2, i2, e2, r2, a2, o2;
    function u2(t3) {
      o2 || (o2 = t3), s2(true);
      var a3 = t3 - o2;
      a3 > e2 && (a3 = e2);
      var l3 = r2[i2];
      if (l3[3] < a3)
        return i2++, u2(t3);
      var f2 = l3[2], p2 = l3[4], v2 = l3[0], h2 = l3[1] * (0, l3[5])(0 === p2 ? 1 : (a3 - f2) / p2);
      if (h2 && n2.track.to(v2 + h2), a3 < e2)
        return d2();
      o2 = null, s2(false), c2(null), n2.emit("animationEnded");
    }
    function s2(n3) {
      t2.active = n3;
    }
    function c2(n3) {
      t2.targetIdx = n3;
    }
    function d2() {
      var n3;
      n3 = u2, a2 = window.requestAnimationFrame(n3);
    }
    function l2() {
      var t3;
      t3 = a2, window.cancelAnimationFrame(t3), s2(false), c2(null), o2 && n2.emit("animationStopped"), o2 = null;
    }
    return t2 = { active: false, start: function(t3) {
      if (l2(), n2.track.details) {
        var a3 = 0, o3 = n2.track.details.position;
        i2 = 0, e2 = 0, r2 = t3.map(function(n3) {
          var t4, i3 = o3, r3 = null !== (t4 = n3.earlyExit) && void 0 !== t4 ? t4 : n3.duration, u3 = n3.easing, s3 = n3.distance * u3(r3 / n3.duration) || 0;
          o3 += s3;
          var c3 = e2;
          return e2 += r3, a3 += s3, [i3, n3.distance, c3, e2, n3.duration, u3];
        }), c2(n2.track.distToIdx(a3)), d2(), n2.emit("animationStarted");
      }
    }, stop: l2, targetIdx: null };
  }
  function m(n2) {
    var i2, e2, a2, o2, u2, s2, c2, f2, h2, m2, g2, b2, x2, k2, y2 = 1 / 0, w = [], M = null, T = 0;
    function C(n3) {
      _(T + n3);
    }
    function E(n3) {
      var t2 = z(T + n3).abs;
      return D(t2) ? t2 : null;
    }
    function z(n3) {
      var i3 = Math.floor(Math.abs(v(n3 / e2))), r2 = v((n3 % e2 + e2) % e2);
      r2 === e2 && (r2 = 0);
      var a3 = l(n3), o3 = c2.indexOf(t([], c2, true).reduce(function(n4, t2) {
        return Math.abs(t2 - r2) < Math.abs(n4 - r2) ? t2 : n4;
      })), u3 = o3;
      return a3 < 0 && i3++, o3 === s2 && (u3 = 0, i3 += a3 > 0 ? 1 : -1), { abs: u3 + i3 * s2 * a3, origin: o3, rel: u3 };
    }
    function I(n3, t2, i3) {
      var e3;
      if (t2 || !S())
        return A(n3, i3);
      if (!D(n3))
        return null;
      var r2 = z(null != i3 ? i3 : T), a3 = r2.abs, o3 = n3 - r2.rel, u3 = a3 + o3;
      e3 = A(u3);
      var c3 = A(u3 - s2 * l(o3));
      return (null !== c3 && Math.abs(c3) < Math.abs(e3) || null === e3) && (e3 = c3), v(e3);
    }
    function A(n3, t2) {
      if (null == t2 && (t2 = v(T)), !D(n3) || null === n3)
        return null;
      n3 = Math.round(n3);
      var i3 = z(t2), r2 = i3.abs, a3 = i3.rel, o3 = i3.origin, u3 = O(n3), d2 = (t2 % e2 + e2) % e2, l2 = c2[o3], f3 = Math.floor((n3 - (r2 - a3)) / s2) * e2;
      return v(l2 - d2 - l2 + c2[u3] + f3 + (o3 === s2 ? e2 : 0));
    }
    function D(n3) {
      return L(n3) === n3;
    }
    function L(n3) {
      return d(n3, h2, m2);
    }
    function S() {
      return o2.loop;
    }
    function O(n3) {
      return (n3 % s2 + s2) % s2;
    }
    function _(t2) {
      var i3;
      i3 = t2 - T, w.push({ distance: i3, timestamp: r() }), w.length > 6 && (w = w.slice(-6)), T = v(t2);
      var e3 = H().abs;
      if (e3 !== M) {
        var a3 = null !== M;
        M = e3, a3 && n2.emit("slideChanged");
      }
    }
    function H(t2) {
      var r2 = t2 ? null : function() {
        if (s2) {
          var n3 = S(), t3 = n3 ? (T % e2 + e2) % e2 : T, i3 = (n3 ? T % e2 : T) - u2[0][2], r3 = 0 - (i3 < 0 && n3 ? e2 - Math.abs(i3) : i3), c3 = 0, d2 = z(T), f3 = d2.abs, p2 = d2.rel, v2 = u2[p2][2], y3 = u2.map(function(t4, i4) {
            var a3 = r3 + c3;
            (a3 < 0 - t4[0] || a3 > 1) && (a3 += (Math.abs(a3) > e2 - 1 && n3 ? e2 : 0) * l(-a3));
            var u3 = i4 - p2, d3 = l(u3), h3 = u3 + f3;
            n3 && (-1 === d3 && a3 > v2 && (h3 += s2), 1 === d3 && a3 < v2 && (h3 -= s2), null !== g2 && h3 < g2 && (a3 += e2), null !== b2 && h3 > b2 && (a3 -= e2));
            var m3 = a3 + t4[0] + t4[1], x3 = Math.max(a3 >= 0 && m3 <= 1 ? 1 : m3 < 0 || a3 > 1 ? 0 : a3 < 0 ? Math.min(1, (t4[0] + a3) / t4[0]) : (1 - a3) / t4[0], 0);
            return c3 += t4[0] + t4[1], { abs: h3, distance: o2.rtl ? -1 * a3 + 1 - t4[0] : a3, portion: x3, size: t4[0] };
          });
          return f3 = L(f3), p2 = O(f3), { abs: L(f3), length: a2, max: k2, maxIdx: m2, min: x2, minIdx: h2, position: T, progress: n3 ? t3 / e2 : T / a2, rel: p2, slides: y3, slidesLength: e2 };
        }
      }();
      return i2.details = r2, n2.emit("detailsChanged"), r2;
    }
    return i2 = { absToRel: O, add: C, details: null, distToIdx: E, idxToDist: I, init: function(t2) {
      if (function() {
        if (o2 = n2.options, u2 = (o2.trackConfig || []).map(function(n3) {
          return [p(n3, "size", 1), p(n3, "spacing", 0), p(n3, "origin", 0)];
        }), s2 = u2.length) {
          e2 = v(u2.reduce(function(n3, t4) {
            return n3 + t4[0] + t4[1];
          }, 0));
          var t3, i4 = s2 - 1;
          a2 = v(e2 + u2[0][2] - u2[i4][0] - u2[i4][2] - u2[i4][1]), c2 = u2.reduce(function(n3, i5) {
            if (!n3)
              return [0];
            var e3 = u2[n3.length - 1], r2 = n3[n3.length - 1] + (e3[0] + e3[2]) + e3[1];
            return r2 -= i5[2], n3[n3.length - 1] > r2 && (r2 = n3[n3.length - 1]), r2 = v(r2), n3.push(r2), (!t3 || t3 < r2) && (f2 = n3.length - 1), t3 = r2, n3;
          }, null), 0 === a2 && (f2 = 0), c2.push(v(e2));
        }
      }(), !s2)
        return H(true);
      var i3;
      !function() {
        var t3 = n2.options.range, i4 = n2.options.loop;
        g2 = h2 = i4 ? p(i4, "min", -1 / 0) : 0, b2 = m2 = i4 ? p(i4, "max", y2) : f2;
        var e3 = p(t3, "min", null), r2 = p(t3, "max", null);
        e3 && (h2 = e3), r2 && (m2 = r2), x2 = h2 === -1 / 0 ? h2 : n2.track.idxToDist(h2 || 0, true, 0), k2 = m2 === y2 ? m2 : I(m2, true, 0), null === r2 && (b2 = m2), p(t3, "align", false) && m2 !== y2 && 0 === u2[O(m2)][2] && (k2 -= 1 - u2[O(m2)][0], m2 = E(k2 - T)), x2 = v(x2), k2 = v(k2);
      }(), i3 = t2, Number(i3) === i3 ? C(A(L(t2))) : H();
    }, to: _, velocity: function() {
      var n3 = r(), t2 = w.reduce(function(t3, i3) {
        var e3 = i3.distance, r2 = i3.timestamp;
        return n3 - r2 > 200 || (l(e3) !== l(t3.distance) && t3.distance && (t3 = { distance: 0, lastTimestamp: 0, time: 0 }), t3.time && (t3.distance += e3), t3.lastTimestamp && (t3.time += r2 - t3.lastTimestamp), t3.lastTimestamp = r2), t3;
      }, { distance: 0, lastTimestamp: 0, time: 0 });
      return t2.distance / t2.time || 0;
    } };
  }
  function g(n2) {
    var t2, i2, e2, r2, a2, o2, u2, s2;
    function c2(n3) {
      return 2 * n3;
    }
    function f2(n3) {
      return d(n3, u2, s2);
    }
    function p2(n3) {
      return 1 - Math.pow(1 - n3, 3);
    }
    function v2() {
      return e2 ? n2.track.velocity() : 0;
    }
    function h2() {
      b2();
      var t3 = "free-snap" === n2.options.mode, i3 = n2.track, e3 = v2();
      r2 = l(e3);
      var u3 = n2.track.details, s3 = [];
      if (e3 || !t3) {
        var d2 = m2(e3), h3 = d2.dist, g3 = d2.dur;
        if (g3 = c2(g3), h3 *= r2, t3) {
          var x2 = i3.idxToDist(i3.distToIdx(h3), true);
          x2 && (h3 = x2);
        }
        s3.push({ distance: h3, duration: g3, easing: p2 });
        var k2 = u3.position, y2 = k2 + h3;
        if (y2 < a2 || y2 > o2) {
          var w = y2 < a2 ? a2 - k2 : o2 - k2, M = 0, T = e3;
          if (l(w) === r2) {
            var C = Math.min(Math.abs(w) / Math.abs(h3), 1), E = function(n3) {
              return 1 - Math.pow(1 - n3, 1 / 3);
            }(C) * g3;
            s3[0].earlyExit = E, T = e3 * (1 - C);
          } else
            s3[0].earlyExit = 0, M += w;
          var z = m2(T, 100), I = z.dist * r2;
          n2.options.rubberband && (s3.push({ distance: I, duration: c2(z.dur), easing: p2 }), s3.push({ distance: -I + M, duration: 500, easing: p2 }));
        }
        n2.animator.start(s3);
      } else
        n2.moveToIdx(f2(u3.abs), true, { duration: 500, easing: function(n3) {
          return 1 + --n3 * n3 * n3 * n3 * n3;
        } });
    }
    function m2(n3, t3) {
      void 0 === t3 && (t3 = 1e3);
      var i3 = 147e-9 + (n3 = Math.abs(n3)) / t3;
      return { dist: Math.pow(n3, 2) / i3, dur: n3 / i3 };
    }
    function g2() {
      var t3 = n2.track.details;
      t3 && (a2 = t3.min, o2 = t3.max, u2 = t3.minIdx, s2 = t3.maxIdx);
    }
    function b2() {
      n2.animator.stop();
    }
    n2.on("updated", g2), n2.on("optionsChanged", g2), n2.on("created", g2), n2.on("dragStarted", function() {
      e2 = false, b2(), t2 = i2 = n2.track.details.abs;
    }), n2.on("dragChecked", function() {
      e2 = true;
    }), n2.on("dragEnded", function() {
      var e3 = n2.options.mode;
      "snap" === e3 && function() {
        var e4 = n2.track, r3 = n2.track.details, u3 = r3.position, s3 = l(v2());
        (u3 > o2 || u3 < a2) && (s3 = 0);
        var c3 = t2 + s3;
        0 === r3.slides[e4.absToRel(c3)].portion && (c3 -= s3), t2 !== i2 && (c3 = i2), l(e4.idxToDist(c3, true)) !== s3 && (c3 += s3), c3 = f2(c3);
        var d2 = e4.idxToDist(c3, true);
        n2.animator.start([{ distance: d2, duration: 500, easing: function(n3) {
          return 1 + --n3 * n3 * n3 * n3 * n3;
        } }]);
      }(), "free" !== e3 && "free-snap" !== e3 || h2();
    }), n2.on("dragged", function() {
      i2 = n2.track.details.abs;
    });
  }
  function b(n2) {
    var t2, i2, e2, r2, a2, f2, p2, v2, h2, m2, g2, b2, x2, k2, y2, w, M, T, C = c();
    function E(t3) {
      if (f2 && v2 === t3.id) {
        var o2 = D(t3);
        if (h2) {
          if (!A(t3))
            return I(t3);
          m2 = o2, h2 = false, n2.emit("dragChecked");
        }
        if (w)
          return m2 = o2;
        u(t3);
        var c2 = function(t4) {
          if (M === -1 / 0 && T === 1 / 0)
            return t4;
          var e3 = n2.track.details, o3 = e3.length, u2 = e3.position, s2 = d(t4, M - u2, T - u2);
          if (0 === o3)
            return 0;
          if (!n2.options.rubberband)
            return s2;
          if (u2 <= T && u2 >= M)
            return t4;
          if (u2 < M && i2 > 0 || u2 > T && i2 < 0)
            return t4;
          var c3 = (u2 < M ? u2 - M : u2 - T) / o3, l2 = r2 * o3, f3 = Math.abs(c3 * l2), p3 = Math.max(0, 1 - f3 / a2 * 2);
          return p3 * p3 * t4;
        }(p2(m2 - o2) / r2 * e2);
        i2 = l(c2);
        var x3 = n2.track.details.position;
        (x3 > M && x3 < T || x3 === M && i2 > 0 || x3 === T && i2 < 0) && s(t3), g2 += c2, !b2 && Math.abs(g2 * r2) > 5 && (b2 = true), n2.track.add(c2), m2 = o2, n2.emit("dragged");
      }
    }
    function z(t3) {
      !f2 && n2.track.details && n2.track.details.length && (g2 = 0, f2 = true, b2 = false, h2 = true, v2 = t3.id, A(t3), m2 = D(t3), n2.emit("dragStarted"));
    }
    function I(t3) {
      f2 && v2 === t3.idChanged && (f2 = false, n2.emit("dragEnded"));
    }
    function A(n3) {
      var t3 = L(), i3 = t3 ? n3.y : n3.x, e3 = t3 ? n3.x : n3.y, r3 = void 0 !== x2 && void 0 !== k2 && Math.abs(k2 - e3) <= Math.abs(x2 - i3);
      return x2 = i3, k2 = e3, r3;
    }
    function D(n3) {
      return L() ? n3.y : n3.x;
    }
    function L() {
      return n2.options.vertical;
    }
    function S() {
      r2 = n2.size, a2 = L() ? window.innerHeight : window.innerWidth;
      var t3 = n2.track.details;
      t3 && (M = t3.min, T = t3.max);
    }
    function O(n3) {
      b2 && (s(n3), u(n3));
    }
    function _() {
      if (C.purge(), n2.options.drag && !n2.options.disabled) {
        var i3;
        i3 = n2.options.dragSpeed || 1, p2 = "function" == typeof i3 ? i3 : function(n3) {
          return n3 * i3;
        }, e2 = n2.options.rtl ? -1 : 1, S(), t2 = n2.container, function() {
          var n3 = "data-keen-slider-clickable";
          o("[".concat(n3, "]:not([").concat(n3, "=false])"), t2).map(function(n4) {
            C.add(n4, "dragstart", s), C.add(n4, "mousedown", s), C.add(n4, "touchstart", s);
          });
        }(), C.add(t2, "dragstart", function(n3) {
          u(n3);
        }), C.add(t2, "click", O, { capture: true }), C.input(t2, "ksDragStart", z), C.input(t2, "ksDrag", E), C.input(t2, "ksDragEnd", I), C.input(t2, "mousedown", z), C.input(t2, "mousemove", E), C.input(t2, "mouseleave", I), C.input(t2, "mouseup", I), C.input(t2, "touchstart", z, { passive: true }), C.input(t2, "touchmove", E, { passive: false }), C.input(t2, "touchend", I), C.input(t2, "touchcancel", I), C.add(window, "wheel", function(n3) {
          f2 && u(n3);
        });
        var r3 = "data-keen-slider-scrollable";
        o("[".concat(r3, "]:not([").concat(r3, "=false])"), n2.container).map(function(n3) {
          return function(n4) {
            var t3;
            C.input(n4, "touchstart", function(n5) {
              t3 = D(n5), w = true, y2 = true;
            }, { passive: true }), C.input(n4, "touchmove", function(i4) {
              var e3 = L(), r4 = e3 ? n4.scrollHeight - n4.clientHeight : n4.scrollWidth - n4.clientWidth, a3 = t3 - D(i4), o2 = e3 ? n4.scrollTop : n4.scrollLeft, s2 = e3 && "scroll" === n4.style.overflowY || !e3 && "scroll" === n4.style.overflowX;
              if (t3 = D(i4), (a3 < 0 && o2 > 0 || a3 > 0 && o2 < r4) && y2 && s2)
                return w = true;
              y2 = false, u(i4), w = false;
            }), C.input(n4, "touchend", function() {
              w = false;
            });
          }(n3);
        });
      }
    }
    n2.on("updated", S), n2.on("optionsChanged", _), n2.on("created", _), n2.on("destroyed", C.purge);
  }
  function x(n2) {
    var t2, i2, e2 = null;
    function r2(t3, i3, e3) {
      n2.animator.active ? o2(t3, i3, e3) : requestAnimationFrame(function() {
        return o2(t3, i3, e3);
      });
    }
    function a2() {
      r2(false, false, i2);
    }
    function o2(i3, r3, a3) {
      var o3 = 0, u3 = n2.size, d3 = n2.track.details;
      if (d3 && t2) {
        var l3 = d3.slides;
        t2.forEach(function(n3, t3) {
          if (i3)
            !e2 && r3 && s2(n3, null, a3), c2(n3, null, a3);
          else {
            if (!l3[t3])
              return;
            var d4 = l3[t3].size * u3;
            !e2 && r3 && s2(n3, d4, a3), c2(n3, l3[t3].distance * u3 - o3, a3), o3 += d4;
          }
        });
      }
    }
    function u2(t3) {
      return "performance" === n2.options.renderMode ? Math.round(t3) : t3;
    }
    function s2(n3, t3, i3) {
      var e3 = i3 ? "height" : "width";
      null !== t3 && (t3 = u2(t3) + "px"), n3.style["min-" + e3] = t3, n3.style["max-" + e3] = t3;
    }
    function c2(n3, t3, i3) {
      if (null !== t3) {
        t3 = u2(t3);
        var e3 = i3 ? t3 : 0;
        t3 = "translate3d(".concat(i3 ? 0 : t3, "px, ").concat(e3, "px, 0)");
      }
      n3.style.transform = t3, n3.style["-webkit-transform"] = t3;
    }
    function d2() {
      t2 && (o2(true, true, i2), t2 = null), n2.on("detailsChanged", a2, true);
    }
    function l2() {
      r2(false, true, i2);
    }
    function f2() {
      d2(), i2 = n2.options.vertical, n2.options.disabled || "custom" === n2.options.renderMode || (e2 = "auto" === p(n2.options.slides, "perView", null), n2.on("detailsChanged", a2), (t2 = n2.slides).length && l2());
    }
    n2.on("created", f2), n2.on("optionsChanged", f2), n2.on("beforeOptionsChanged", function() {
      d2();
    }), n2.on("updated", l2), n2.on("destroyed", d2);
  }
  function k(t2, i2) {
    return function(e2) {
      var r2, u2, s2, d2, l2, v2, h2 = c();
      function m2(n2) {
        var t3;
        a(e2.container, "reverse", "rtl" !== (t3 = e2.container, window.getComputedStyle(t3, null).getPropertyValue("direction")) || n2 ? null : ""), a(e2.container, "v", e2.options.vertical && !n2 ? "" : null), a(e2.container, "disabled", e2.options.disabled && !n2 ? "" : null);
      }
      function g2() {
        b2() && M();
      }
      function b2() {
        var t3 = null;
        if (d2.forEach(function(n2) {
          n2.matches && (t3 = n2.__media);
        }), t3 === r2)
          return false;
        r2 || e2.emit("beforeOptionsChanged"), r2 = t3;
        var i3 = t3 ? s2.breakpoints[t3] : s2;
        return e2.options = n(n({}, s2), i3), m2(), I(), A(), C(), true;
      }
      function x2(n2) {
        var t3 = f(n2);
        return (e2.options.vertical ? t3.height : t3.width) / e2.size || 1;
      }
      function k2() {
        return e2.options.trackConfig.length;
      }
      function y2(t3) {
        for (var a2 in r2 = false, s2 = n(n({}, i2), t3), h2.purge(), u2 = e2.size, d2 = [], s2.breakpoints || []) {
          var o2 = window.matchMedia(a2);
          o2.__media = a2, d2.push(o2), h2.add(o2, "change", g2);
        }
        h2.add(window, "orientationchange", z), h2.add(window, "resize", E), b2();
      }
      function w(n2) {
        e2.animator.stop();
        var t3 = e2.track.details;
        e2.track.init(null != n2 ? n2 : t3 ? t3.abs : 0);
      }
      function M(n2) {
        w(n2), e2.emit("optionsChanged");
      }
      function T(n2, t3) {
        if (n2)
          return y2(n2), void M(t3);
        I(), A();
        var i3 = k2();
        C(), k2() !== i3 ? M(t3) : w(t3), e2.emit("updated");
      }
      function C() {
        var n2 = e2.options.slides;
        if ("function" == typeof n2)
          return e2.options.trackConfig = n2(e2.size, e2.slides);
        for (var t3 = e2.slides, i3 = t3.length, r3 = "number" == typeof n2 ? n2 : p(n2, "number", i3, true), a2 = [], o2 = p(n2, "perView", 1, true), u3 = p(n2, "spacing", 0, true) / e2.size || 0, s3 = "auto" === o2 ? u3 : u3 / o2, c2 = p(n2, "origin", "auto"), d3 = 0, l3 = 0; l3 < r3; l3++) {
          var f2 = "auto" === o2 ? x2(t3[l3]) : 1 / o2 - u3 + s3, v3 = "center" === c2 ? 0.5 - f2 / 2 : "auto" === c2 ? 0 : c2;
          a2.push({ origin: v3, size: f2, spacing: u3 }), d3 += f2;
        }
        if (d3 += u3 * (r3 - 1), "auto" === c2 && !e2.options.loop && 1 !== o2) {
          var h3 = 0;
          a2.map(function(n3) {
            var t4 = d3 - h3;
            return h3 += n3.size + u3, t4 >= 1 || (n3.origin = 1 - t4 - (d3 > 1 ? 0 : 1 - d3)), n3;
          });
        }
        e2.options.trackConfig = a2;
      }
      function E() {
        I();
        var n2 = e2.size;
        e2.options.disabled || n2 === u2 || (u2 = n2, T());
      }
      function z() {
        E(), setTimeout(E, 500), setTimeout(E, 2e3);
      }
      function I() {
        var n2 = f(e2.container);
        e2.size = (e2.options.vertical ? n2.height : n2.width) || 1;
      }
      function A() {
        e2.slides = o(e2.options.selector, e2.container);
      }
      e2.container = (v2 = o(t2, l2 || document)).length ? v2[0] : null, e2.destroy = function() {
        h2.purge(), e2.emit("destroyed"), m2(true);
      }, e2.prev = function() {
        e2.moveToIdx(e2.track.details.abs - 1, true);
      }, e2.next = function() {
        e2.moveToIdx(e2.track.details.abs + 1, true);
      }, e2.update = T, y2(e2.options);
    };
  }
  var y = function(n2, i2, e2) {
    try {
      return function(n3, t2) {
        var i3, e3 = {};
        return i3 = { emit: function(n4) {
          e3[n4] && e3[n4].forEach(function(n5) {
            n5(i3);
          });
          var t3 = i3.options && i3.options[n4];
          t3 && t3(i3);
        }, moveToIdx: function(n4, t3, e4) {
          var r2 = i3.track.idxToDist(n4, t3);
          if (r2) {
            var a2 = i3.options.defaultAnimation;
            i3.animator.start([{ distance: r2, duration: p(e4 || a2, "duration", 500), easing: p(e4 || a2, "easing", function(n5) {
              return 1 + --n5 * n5 * n5 * n5 * n5;
            }) }]);
          }
        }, on: function(n4, t3, i4) {
          void 0 === i4 && (i4 = false), e3[n4] || (e3[n4] = []);
          var r2 = e3[n4].indexOf(t3);
          r2 > -1 ? i4 && delete e3[n4][r2] : i4 || e3[n4].push(t3);
        }, options: n3 }, function() {
          if (i3.track = m(i3), i3.animator = h(i3), t2)
            for (var n4 = 0, e4 = t2; n4 < e4.length; n4++)
              (0, e4[n4])(i3);
          i3.track.init(i3.options.initial || 0), i3.emit("created");
        }(), i3;
      }(i2, t([k(n2, { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }), x, b, g], e2 || [], true));
    } catch (n3) {
      console.error(n3);
    }
  };

  // src/slider.js
  var slider_default = class {
    constructor(wrapper, config = {}) {
      this.wrapper = wrapper;
      this.element = wrapper.querySelector('[data-slider="container"]');
      this.config(config);
      this.ui = {
        dots: [],
        current: 0
      };
      this.init();
    }
    config(config) {
      if (this.element.dataset.duration)
        this.element.dataset.duration *= 1e3;
      const loop = evalStr(this.element.dataset.loop);
      const rubberband = evalStr(this.element.dataset.rubberband);
      const drag = evalStr(this.element.dataset.drag);
      const centered = evalStr(this.element.dataset.centered);
      const perview = () => {
        const { perview: perview2 } = this.element.dataset;
        if (perview2 === void 0 || perview2 === "0") {
          return "auto";
        } else {
          return Number(perview2);
        }
      };
      const spacing = () => {
        const { spacing: spacing2 } = this.element.dataset;
        if (spacing2 === void 0 || spacing2 === "0") {
          return 0;
        } else {
          return Number(spacing2);
        }
      };
      this.config = {
        loop,
        mode: this.element.dataset.mode || "free-snap",
        renderMode: "precision",
        rubberband,
        drag,
        dragSpeed: +this.element.dataset.rubberband || 1,
        defaultAnimation: {
          duration: +this.element.dataset.duration || 100
        },
        initial: 0,
        slides: {
          origin: centered ? "center" : "auto",
          perView: perview(),
          spacing: spacing()
        },
        range: {},
        ...config
      };
      console.log("-- config ", this.config);
    }
    init() {
      this.slider = new y(this.element, {
        selector: () => [...this.element.children],
        ...this.config
      });
      this.initDom();
      this.slider.on("slideChanged", this.update.bind(this));
    }
    initDom() {
      const arrowLeft = this.wrapper.querySelector('[data-slider="left"]');
      const arrowRight = this.wrapper.querySelector('[data-slider="right"]');
      if (arrowLeft || arrowRight)
        this.createArrows(arrowLeft, arrowRight);
      const dotsWrapper = this.wrapper.querySelector('[data-slider="dots"]');
      if (dotsWrapper)
        this.createDots(dotsWrapper);
      this.onStart(0);
    }
    createArrows(left, right) {
      this.ui.hasArrows = true;
      if (left)
        left.onclick = () => this.slider.prev();
      if (right)
        right.onclick = () => this.slider.next();
    }
    createDots(wrapper) {
      this.ui.hasDots = true;
      const children = [...wrapper.children];
      if (children.length < 1)
        return;
      const activeDot = wrapper.querySelector(".active");
      if (!activeDot)
        return;
      const dot = activeDot.cloneNode(true);
      dot.classList.remove("active");
      children.forEach((child) => child.remove());
      this.slider.slides.forEach((slide, i2) => {
        const newDot = dot.cloneNode(true);
        newDot.onclick = () => this.slider.moveToIdx(i2);
        this.ui.dots.push(newDot);
        wrapper.appendChild(newDot);
      });
    }
    onStart(rel) {
      this.ui.dots[rel].classList.add("active");
      this.ui.current = rel;
    }
    update(e2 = 0) {
      const rel = typeof e2 === "number" ? e2 : e2.track.details.rel;
      this.updateDots(rel);
      this.updateSlides(rel);
      this.updateArrows(rel);
      this.ui.current = rel;
    }
    updateSlides(rel) {
      this.slider.slides[this.ui.current].classList.remove("active");
      this.slider.slides[rel].classList.add("active");
    }
    updateDots(rel) {
      if (!this.ui.hasDots)
        return;
      this.ui.dots[this.ui.current].classList.remove("active");
      this.ui.dots[rel].classList.add("active");
    }
    updateArrows(rel) {
      if (!this.ui.hasArrows)
        return;
      if (rel === 0)
        console.log("edge left");
      if (rel === this.slider.slides.length)
        console.log("edge right");
    }
  };
  function evalStr(str) {
    return str === "true";
  }

  // src/app.js
  var el = document.querySelector("[data-slider='wrapper']");
  window.slider = new slider_default(el);
})();
