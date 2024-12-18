'use strict';
(() => {
  var gy = Object.create;
  var Ci = Object.defineProperty;
  var yy = Object.getOwnPropertyDescriptor;
  var ky = Object.getOwnPropertyNames;
  var vy = Object.getPrototypeOf,
    jy = Object.prototype.hasOwnProperty;
  var zr = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var Ar = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    by = (e, t) => {
      for (var r in t) Ci(e, r, { get: t[r], enumerable: !0 });
    },
    wy = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of ky(t))
          !jy.call(e, o) &&
            o !== r &&
            Ci(e, o, {
              get: () => t[o],
              enumerable: !(n = yy(t, o)) || n.enumerable,
            });
      return e;
    };
  var Xr = (e, t, r) => (
    (r = e != null ? gy(vy(e)) : {}),
    wy(
      t || !e || !e.__esModule
        ? Ci(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
  var hp = Ar(($) => {
    'use strict';
    var Kn = Symbol.for('react.element'),
      Ey = Symbol.for('react.portal'),
      xy = Symbol.for('react.fragment'),
      Sy = Symbol.for('react.strict_mode'),
      Cy = Symbol.for('react.profiler'),
      _y = Symbol.for('react.provider'),
      zy = Symbol.for('react.context'),
      Ay = Symbol.for('react.forward_ref'),
      Ry = Symbol.for('react.suspense'),
      Py = Symbol.for('react.memo'),
      Oy = Symbol.for('react.lazy'),
      op = Symbol.iterator;
    function Ly(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (op && e[op]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
    }
    var ip = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      up = Object.assign,
      lp = {};
    function Qr(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = lp),
        (this.updater = r || ip);
    }
    Qr.prototype.isReactComponent = {};
    Qr.prototype.setState = function (e, t) {
      if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, e, t, 'setState');
    };
    Qr.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    };
    function cp() {}
    cp.prototype = Qr.prototype;
    function zi(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = lp),
        (this.updater = r || ip);
    }
    var Ai = (zi.prototype = new cp());
    Ai.constructor = zi;
    up(Ai, Qr.prototype);
    Ai.isPureReactComponent = !0;
    var ap = Array.isArray,
      pp = Object.prototype.hasOwnProperty,
      Ri = { current: null },
      mp = { key: !0, ref: !0, __self: !0, __source: !0 };
    function dp(e, t, r) {
      var n,
        o = {},
        a = null,
        s = null;
      if (t != null)
        for (n in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (a = '' + t.key),
        t))
          pp.call(t, n) && !mp.hasOwnProperty(n) && (o[n] = t[n]);
      var i = arguments.length - 2;
      if (i === 1) o.children = r;
      else if (1 < i) {
        for (var u = Array(i), l = 0; l < i; l++) u[l] = arguments[l + 2];
        o.children = u;
      }
      if (e && e.defaultProps)
        for (n in ((i = e.defaultProps), i)) o[n] === void 0 && (o[n] = i[n]);
      return {
        $$typeof: Kn,
        type: e,
        key: a,
        ref: s,
        props: o,
        _owner: Ri.current,
      };
    }
    function Ty(e, t) {
      return {
        $$typeof: Kn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function Pi(e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Kn;
    }
    function Dy(e) {
      var t = { '=': '=0', ':': '=2' };
      return (
        '$' +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var sp = /\/+/g;
    function _i(e, t) {
      return typeof e == 'object' && e !== null && e.key != null
        ? Dy('' + e.key)
        : t.toString(36);
    }
    function va(e, t, r, n, o) {
      var a = typeof e;
      (a === 'undefined' || a === 'boolean') && (e = null);
      var s = !1;
      if (e === null) s = !0;
      else
        switch (a) {
          case 'string':
          case 'number':
            s = !0;
            break;
          case 'object':
            switch (e.$$typeof) {
              case Kn:
              case Ey:
                s = !0;
            }
        }
      if (s)
        return (
          (s = e),
          (o = o(s)),
          (e = n === '' ? '.' + _i(s, 0) : n),
          ap(o)
            ? ((r = ''),
              e != null && (r = e.replace(sp, '$&/') + '/'),
              va(o, t, r, '', function (l) {
                return l;
              }))
            : o != null &&
              (Pi(o) &&
                (o = Ty(
                  o,
                  r +
                    (!o.key || (s && s.key === o.key)
                      ? ''
                      : ('' + o.key).replace(sp, '$&/') + '/') +
                    e,
                )),
              t.push(o)),
          1
        );
      if (((s = 0), (n = n === '' ? '.' : n + ':'), ap(e)))
        for (var i = 0; i < e.length; i++) {
          a = e[i];
          var u = n + _i(a, i);
          s += va(a, t, r, u, o);
        }
      else if (((u = Ly(e)), typeof u == 'function'))
        for (e = u.call(e), i = 0; !(a = e.next()).done; )
          (a = a.value), (u = n + _i(a, i++)), (s += va(a, t, r, u, o));
      else if (a === 'object')
        throw (
          ((t = String(e)),
          Error(
            'Objects are not valid as a React child (found: ' +
              (t === '[object Object]'
                ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                : t) +
              '). If you meant to render a collection of children, use an array instead.',
          ))
        );
      return s;
    }
    function ka(e, t, r) {
      if (e == null) return e;
      var n = [],
        o = 0;
      return (
        va(e, n, '', '', function (a) {
          return t.call(r, a, o++);
        }),
        n
      );
    }
    function Iy(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = r));
            },
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = r));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var De = { current: null },
      ja = { transition: null },
      Fy = {
        ReactCurrentDispatcher: De,
        ReactCurrentBatchConfig: ja,
        ReactCurrentOwner: Ri,
      };
    function fp() {
      throw Error('act(...) is not supported in production builds of React.');
    }
    $.Children = {
      map: ka,
      forEach: function (e, t, r) {
        ka(
          e,
          function () {
            t.apply(this, arguments);
          },
          r,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ka(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ka(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!Pi(e))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return e;
      },
    };
    $.Component = Qr;
    $.Fragment = xy;
    $.Profiler = Cy;
    $.PureComponent = zi;
    $.StrictMode = Sy;
    $.Suspense = Ry;
    $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fy;
    $.act = fp;
    $.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            e +
            '.',
        );
      var n = up({}, e.props),
        o = e.key,
        a = e.ref,
        s = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((a = t.ref), (s = Ri.current)),
          t.key !== void 0 && (o = '' + t.key),
          e.type && e.type.defaultProps)
        )
          var i = e.type.defaultProps;
        for (u in t)
          pp.call(t, u) &&
            !mp.hasOwnProperty(u) &&
            (n[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
      }
      var u = arguments.length - 2;
      if (u === 1) n.children = r;
      else if (1 < u) {
        i = Array(u);
        for (var l = 0; l < u; l++) i[l] = arguments[l + 2];
        n.children = i;
      }
      return {
        $$typeof: Kn,
        type: e.type,
        key: o,
        ref: a,
        props: n,
        _owner: s,
      };
    };
    $.createContext = function (e) {
      return (
        (e = {
          $$typeof: zy,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: _y, _context: e }),
        (e.Consumer = e)
      );
    };
    $.createElement = dp;
    $.createFactory = function (e) {
      var t = dp.bind(null, e);
      return (t.type = e), t;
    };
    $.createRef = function () {
      return { current: null };
    };
    $.forwardRef = function (e) {
      return { $$typeof: Ay, render: e };
    };
    $.isValidElement = Pi;
    $.lazy = function (e) {
      return { $$typeof: Oy, _payload: { _status: -1, _result: e }, _init: Iy };
    };
    $.memo = function (e, t) {
      return { $$typeof: Py, type: e, compare: t === void 0 ? null : t };
    };
    $.startTransition = function (e) {
      var t = ja.transition;
      ja.transition = {};
      try {
        e();
      } finally {
        ja.transition = t;
      }
    };
    $.unstable_act = fp;
    $.useCallback = function (e, t) {
      return De.current.useCallback(e, t);
    };
    $.useContext = function (e) {
      return De.current.useContext(e);
    };
    $.useDebugValue = function () {};
    $.useDeferredValue = function (e) {
      return De.current.useDeferredValue(e);
    };
    $.useEffect = function (e, t) {
      return De.current.useEffect(e, t);
    };
    $.useId = function () {
      return De.current.useId();
    };
    $.useImperativeHandle = function (e, t, r) {
      return De.current.useImperativeHandle(e, t, r);
    };
    $.useInsertionEffect = function (e, t) {
      return De.current.useInsertionEffect(e, t);
    };
    $.useLayoutEffect = function (e, t) {
      return De.current.useLayoutEffect(e, t);
    };
    $.useMemo = function (e, t) {
      return De.current.useMemo(e, t);
    };
    $.useReducer = function (e, t, r) {
      return De.current.useReducer(e, t, r);
    };
    $.useRef = function (e) {
      return De.current.useRef(e);
    };
    $.useState = function (e) {
      return De.current.useState(e);
    };
    $.useSyncExternalStore = function (e, t, r) {
      return De.current.useSyncExternalStore(e, t, r);
    };
    $.useTransition = function () {
      return De.current.useTransition();
    };
    $.version = '18.3.1';
  });
  var Rr = Ar((x1, gp) => {
    'use strict';
    gp.exports = hp();
  });
  var Cp = Ar((K) => {
    'use strict';
    function Di(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r; ) {
        var n = (r - 1) >>> 1,
          o = e[n];
        if (0 < ba(o, t)) (e[n] = t), (e[r] = o), (r = n);
        else break e;
      }
    }
    function ct(e) {
      return e.length === 0 ? null : e[0];
    }
    function Ea(e) {
      if (e.length === 0) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var n = 0, o = e.length, a = o >>> 1; n < a; ) {
          var s = 2 * (n + 1) - 1,
            i = e[s],
            u = s + 1,
            l = e[u];
          if (0 > ba(i, r))
            u < o && 0 > ba(l, i)
              ? ((e[n] = l), (e[u] = r), (n = u))
              : ((e[n] = i), (e[s] = r), (n = s));
          else if (u < o && 0 > ba(l, r)) (e[n] = l), (e[u] = r), (n = u);
          else break e;
        }
      }
      return t;
    }
    function ba(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == 'object' && typeof performance.now == 'function'
      ? ((yp = performance),
        (K.unstable_now = function () {
          return yp.now();
        }))
      : ((Oi = Date),
        (kp = Oi.now()),
        (K.unstable_now = function () {
          return Oi.now() - kp;
        }));
    var yp,
      Oi,
      kp,
      wt = [],
      Qt = [],
      Ny = 1,
      et = null,
      Ce = 3,
      xa = !1,
      Pr = !1,
      Qn = !1,
      bp = typeof setTimeout == 'function' ? setTimeout : null,
      wp = typeof clearTimeout == 'function' ? clearTimeout : null,
      vp = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ii(e) {
      for (var t = ct(Qt); t !== null; ) {
        if (t.callback === null) Ea(Qt);
        else if (t.startTime <= e)
          Ea(Qt), (t.sortIndex = t.expirationTime), Di(wt, t);
        else break;
        t = ct(Qt);
      }
    }
    function Fi(e) {
      if (((Qn = !1), Ii(e), !Pr))
        if (ct(wt) !== null) (Pr = !0), Mi(Ni);
        else {
          var t = ct(Qt);
          t !== null && qi(Fi, t.startTime - e);
        }
    }
    function Ni(e, t) {
      (Pr = !1), Qn && ((Qn = !1), wp(Yn), (Yn = -1)), (xa = !0);
      var r = Ce;
      try {
        for (
          Ii(t), et = ct(wt);
          et !== null && (!(et.expirationTime > t) || (e && !Sp()));

        ) {
          var n = et.callback;
          if (typeof n == 'function') {
            (et.callback = null), (Ce = et.priorityLevel);
            var o = n(et.expirationTime <= t);
            (t = K.unstable_now()),
              typeof o == 'function'
                ? (et.callback = o)
                : et === ct(wt) && Ea(wt),
              Ii(t);
          } else Ea(wt);
          et = ct(wt);
        }
        if (et !== null) var a = !0;
        else {
          var s = ct(Qt);
          s !== null && qi(Fi, s.startTime - t), (a = !1);
        }
        return a;
      } finally {
        (et = null), (Ce = r), (xa = !1);
      }
    }
    var Sa = !1,
      wa = null,
      Yn = -1,
      Ep = 5,
      xp = -1;
    function Sp() {
      return !(K.unstable_now() - xp < Ep);
    }
    function Li() {
      if (wa !== null) {
        var e = K.unstable_now();
        xp = e;
        var t = !0;
        try {
          t = wa(!0, e);
        } finally {
          t ? Xn() : ((Sa = !1), (wa = null));
        }
      } else Sa = !1;
    }
    var Xn;
    typeof vp == 'function'
      ? (Xn = function () {
          vp(Li);
        })
      : typeof MessageChannel < 'u'
        ? ((Ti = new MessageChannel()),
          (jp = Ti.port2),
          (Ti.port1.onmessage = Li),
          (Xn = function () {
            jp.postMessage(null);
          }))
        : (Xn = function () {
            bp(Li, 0);
          });
    var Ti, jp;
    function Mi(e) {
      (wa = e), Sa || ((Sa = !0), Xn());
    }
    function qi(e, t) {
      Yn = bp(function () {
        e(K.unstable_now());
      }, t);
    }
    K.unstable_IdlePriority = 5;
    K.unstable_ImmediatePriority = 1;
    K.unstable_LowPriority = 4;
    K.unstable_NormalPriority = 3;
    K.unstable_Profiling = null;
    K.unstable_UserBlockingPriority = 2;
    K.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    K.unstable_continueExecution = function () {
      Pr || xa || ((Pr = !0), Mi(Ni));
    };
    K.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (Ep = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    K.unstable_getCurrentPriorityLevel = function () {
      return Ce;
    };
    K.unstable_getFirstCallbackNode = function () {
      return ct(wt);
    };
    K.unstable_next = function (e) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = Ce;
      }
      var r = Ce;
      Ce = t;
      try {
        return e();
      } finally {
        Ce = r;
      }
    };
    K.unstable_pauseExecution = function () {};
    K.unstable_requestPaint = function () {};
    K.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var r = Ce;
      Ce = e;
      try {
        return t();
      } finally {
        Ce = r;
      }
    };
    K.unstable_scheduleCallback = function (e, t, r) {
      var n = K.unstable_now();
      switch (
        (typeof r == 'object' && r !== null
          ? ((r = r.delay), (r = typeof r == 'number' && 0 < r ? n + r : n))
          : (r = n),
        e)
      ) {
        case 1:
          var o = -1;
          break;
        case 2:
          o = 250;
          break;
        case 5:
          o = 1073741823;
          break;
        case 4:
          o = 1e4;
          break;
        default:
          o = 5e3;
      }
      return (
        (o = r + o),
        (e = {
          id: Ny++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: o,
          sortIndex: -1,
        }),
        r > n
          ? ((e.sortIndex = r),
            Di(Qt, e),
            ct(wt) === null &&
              e === ct(Qt) &&
              (Qn ? (wp(Yn), (Yn = -1)) : (Qn = !0), qi(Fi, r - n)))
          : ((e.sortIndex = o), Di(wt, e), Pr || xa || ((Pr = !0), Mi(Ni))),
        e
      );
    };
    K.unstable_shouldYield = Sp;
    K.unstable_wrapCallback = function (e) {
      var t = Ce;
      return function () {
        var r = Ce;
        Ce = t;
        try {
          return e.apply(this, arguments);
        } finally {
          Ce = r;
        }
      };
    };
  });
  var zp = Ar((C1, _p) => {
    'use strict';
    _p.exports = Cp();
  });
  var Lf = Ar((Xe) => {
    'use strict';
    var My = Rr(),
      Je = zp();
    function O(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += '&args[]=' + encodeURIComponent(arguments[r]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var Dm = new Set(),
      bo = {};
    function Hr(e, t) {
      vn(e, t), vn(e + 'Capture', t);
    }
    function vn(e, t) {
      for (bo[e] = t, e = 0; e < t.length; e++) Dm.add(t[e]);
    }
    var Mt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
      ),
      lu = Object.prototype.hasOwnProperty,
      qy =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Ap = {},
      Rp = {};
    function By(e) {
      return lu.call(Rp, e)
        ? !0
        : lu.call(Ap, e)
          ? !1
          : qy.test(e)
            ? (Rp[e] = !0)
            : ((Ap[e] = !0), !1);
    }
    function Uy(e, t, r, n) {
      if (r !== null && r.type === 0) return !1;
      switch (typeof t) {
        case 'function':
        case 'symbol':
          return !0;
        case 'boolean':
          return n
            ? !1
            : r !== null
              ? !r.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)),
                e !== 'data-' && e !== 'aria-');
        default:
          return !1;
      }
    }
    function $y(e, t, r, n) {
      if (t === null || typeof t > 'u' || Uy(e, t, r, n)) return !0;
      if (n) return !1;
      if (r !== null)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function Ne(e, t, r, n, o, a, s) {
      (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = o),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = s);
    }
    var we = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        we[e] = new Ne(e, 0, !1, e, null, !1, !1);
      });
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      we[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
    });
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        we[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    );
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      we[e] = new Ne(e, 2, !1, e, null, !1, !1);
    });
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        we[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      we[e] = new Ne(e, 3, !0, e, null, !1, !1);
    });
    ['capture', 'download'].forEach(function (e) {
      we[e] = new Ne(e, 4, !1, e, null, !1, !1);
    });
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      we[e] = new Ne(e, 6, !1, e, null, !1, !1);
    });
    ['rowSpan', 'start'].forEach(function (e) {
      we[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var tl = /[\-:]([a-z])/g;
    function rl(e) {
      return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(tl, rl);
        we[t] = new Ne(t, 1, !1, e, null, !1, !1);
      });
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(tl, rl);
        we[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      });
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(tl, rl);
      we[t] = new Ne(
        t,
        1,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1,
      );
    });
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      we[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    we.xlinkHref = new Ne(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    );
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      we[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function nl(e, t, r, n) {
      var o = we.hasOwnProperty(t) ? we[t] : null;
      (o !== null
        ? o.type !== 0
        : n ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        ($y(t, r, o, n) && (r = null),
        n || o === null
          ? By(t) &&
            (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
          : o.mustUseProperty
            ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
            : ((t = o.attributeName),
              (n = o.attributeNamespace),
              r === null
                ? e.removeAttribute(t)
                : ((o = o.type),
                  (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
                  n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
    }
    var $t = My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Ca = Symbol.for('react.element'),
      en = Symbol.for('react.portal'),
      tn = Symbol.for('react.fragment'),
      ol = Symbol.for('react.strict_mode'),
      cu = Symbol.for('react.profiler'),
      Im = Symbol.for('react.provider'),
      Fm = Symbol.for('react.context'),
      al = Symbol.for('react.forward_ref'),
      pu = Symbol.for('react.suspense'),
      mu = Symbol.for('react.suspense_list'),
      sl = Symbol.for('react.memo'),
      Zt = Symbol.for('react.lazy');
    Symbol.for('react.scope');
    Symbol.for('react.debug_trace_mode');
    var Nm = Symbol.for('react.offscreen');
    Symbol.for('react.legacy_hidden');
    Symbol.for('react.cache');
    Symbol.for('react.tracing_marker');
    var Pp = Symbol.iterator;
    function Zn(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (Pp && e[Pp]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
    }
    var oe = Object.assign,
      Bi;
    function io(e) {
      if (Bi === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          Bi = (t && t[1]) || '';
        }
      return (
        `
` +
        Bi +
        e
      );
    }
    var Ui = !1;
    function $i(e, t) {
      if (!e || Ui) return '';
      Ui = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (l) {
              var n = l;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (l) {
              n = l;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l) {
            n = l;
          }
          e();
        }
      } catch (l) {
        if (l && n && typeof l.stack == 'string') {
          for (
            var o = l.stack.split(`
`),
              a = n.stack.split(`
`),
              s = o.length - 1,
              i = a.length - 1;
            1 <= s && 0 <= i && o[s] !== a[i];

          )
            i--;
          for (; 1 <= s && 0 <= i; s--, i--)
            if (o[s] !== a[i]) {
              if (s !== 1 || i !== 1)
                do
                  if ((s--, i--, 0 > i || o[s] !== a[i])) {
                    var u =
                      `
` + o[s].replace(' at new ', ' at ');
                    return (
                      e.displayName &&
                        u.includes('<anonymous>') &&
                        (u = u.replace('<anonymous>', e.displayName)),
                      u
                    );
                  }
                while (1 <= s && 0 <= i);
              break;
            }
        }
      } finally {
        (Ui = !1), (Error.prepareStackTrace = r);
      }
      return (e = e ? e.displayName || e.name : '') ? io(e) : '';
    }
    function Hy(e) {
      switch (e.tag) {
        case 5:
          return io(e.type);
        case 16:
          return io('Lazy');
        case 13:
          return io('Suspense');
        case 19:
          return io('SuspenseList');
        case 0:
        case 2:
        case 15:
          return (e = $i(e.type, !1)), e;
        case 11:
          return (e = $i(e.type.render, !1)), e;
        case 1:
          return (e = $i(e.type, !0)), e;
        default:
          return '';
      }
    }
    function du(e) {
      if (e == null) return null;
      if (typeof e == 'function') return e.displayName || e.name || null;
      if (typeof e == 'string') return e;
      switch (e) {
        case tn:
          return 'Fragment';
        case en:
          return 'Portal';
        case cu:
          return 'Profiler';
        case ol:
          return 'StrictMode';
        case pu:
          return 'Suspense';
        case mu:
          return 'SuspenseList';
      }
      if (typeof e == 'object')
        switch (e.$$typeof) {
          case Fm:
            return (e.displayName || 'Context') + '.Consumer';
          case Im:
            return (e._context.displayName || 'Context') + '.Provider';
          case al:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ''),
                (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
              e
            );
          case sl:
            return (
              (t = e.displayName || null), t !== null ? t : du(e.type) || 'Memo'
            );
          case Zt:
            (t = e._payload), (e = e._init);
            try {
              return du(e(t));
            } catch {}
        }
      return null;
    }
    function Wy(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return 'Cache';
        case 9:
          return (t.displayName || 'Context') + '.Consumer';
        case 10:
          return (t._context.displayName || 'Context') + '.Provider';
        case 18:
          return 'DehydratedFragment';
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ''),
            t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
          );
        case 7:
          return 'Fragment';
        case 5:
          return t;
        case 4:
          return 'Portal';
        case 3:
          return 'Root';
        case 6:
          return 'Text';
        case 16:
          return du(t);
        case 8:
          return t === ol ? 'StrictMode' : 'Mode';
        case 22:
          return 'Offscreen';
        case 12:
          return 'Profiler';
        case 21:
          return 'Scope';
        case 13:
          return 'Suspense';
        case 19:
          return 'SuspenseList';
        case 25:
          return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == 'function') return t.displayName || t.name || null;
          if (typeof t == 'string') return t;
      }
      return null;
    }
    function dr(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
          return e;
        case 'object':
          return e;
        default:
          return '';
      }
    }
    function Mm(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
      );
    }
    function Vy(e) {
      var t = Mm(e) ? 'checked' : 'value',
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof r < 'u' &&
        typeof r.get == 'function' &&
        typeof r.set == 'function'
      ) {
        var o = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (s) {
              (n = '' + s), a.call(this, s);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (s) {
              n = '' + s;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function _a(e) {
      e._valueTracker || (e._valueTracker = Vy(e));
    }
    function qm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        n = '';
      return (
        e && (n = Mm(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function ts(e) {
      if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function fu(e, t) {
      var r = t.checked;
      return oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function Op(e, t) {
      var r = t.defaultValue == null ? '' : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
      (r = dr(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled:
            t.type === 'checkbox' || t.type === 'radio'
              ? t.checked != null
              : t.value != null,
        });
    }
    function Bm(e, t) {
      (t = t.checked), t != null && nl(e, 'checked', t, !1);
    }
    function hu(e, t) {
      Bm(e, t);
      var r = dr(t.value),
        n = t.type;
      if (r != null)
        n === 'number'
          ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
          : e.value !== '' + r && (e.value = '' + r);
      else if (n === 'submit' || n === 'reset') {
        e.removeAttribute('value');
        return;
      }
      t.hasOwnProperty('value')
        ? gu(e, t.type, r)
        : t.hasOwnProperty('defaultValue') && gu(e, t.type, dr(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Lp(e, t, r) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var n = t.type;
        if (
          !(
            (n !== 'submit' && n !== 'reset') ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        (t = '' + e._wrapperState.initialValue),
          r || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r = e.name),
        r !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== '' && (e.name = r);
    }
    function gu(e, t, r) {
      (t !== 'number' || ts(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
    }
    var uo = Array.isArray;
    function dn(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0;
        for (r = 0; r < e.length; r++)
          (o = t.hasOwnProperty('$' + e[r].value)),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0);
      } else {
        for (r = '' + dr(r), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === r) {
            (e[o].selected = !0), n && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function yu(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
      return oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
      });
    }
    function Tp(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(O(92));
          if (uo(r)) {
            if (1 < r.length) throw Error(O(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ''), (r = t);
      }
      e._wrapperState = { initialValue: dr(r) };
    }
    function Um(e, t) {
      var r = dr(t.value),
        n = dr(t.defaultValue);
      r != null &&
        ((r = '' + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = '' + n);
    }
    function Dp(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t);
    }
    function $m(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function ku(e, t) {
      return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? $m(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : e;
    }
    var za,
      Hm = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
          ? function (t, r, n, o) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, n, o);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
          e.innerHTML = t;
        else {
          for (
            za = za || document.createElement('div'),
              za.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
              t = za.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function wo(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var po = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Gy = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(po).forEach(function (e) {
      Gy.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (po[t] = po[e]);
      });
    });
    function Wm(e, t, r) {
      return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : r ||
            typeof t != 'number' ||
            t === 0 ||
            (po.hasOwnProperty(e) && po[e])
          ? ('' + t).trim()
          : t + 'px';
    }
    function Vm(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf('--') === 0,
            o = Wm(r, t[r], n);
          r === 'float' && (r = 'cssFloat'),
            n ? e.setProperty(r, o) : (e[r] = o);
        }
    }
    var Jy = oe(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function vu(e, t) {
      if (t) {
        if (Jy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(O(60));
          if (
            typeof t.dangerouslySetInnerHTML != 'object' ||
            !('__html' in t.dangerouslySetInnerHTML)
          )
            throw Error(O(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(O(62));
      }
    }
    function ju(e, t) {
      if (e.indexOf('-') === -1) return typeof t.is == 'string';
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var bu = null;
    function il(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var wu = null,
      fn = null,
      hn = null;
    function Ip(e) {
      if ((e = qo(e))) {
        if (typeof wu != 'function') throw Error(O(280));
        var t = e.stateNode;
        t && ((t = As(t)), wu(e.stateNode, e.type, t));
      }
    }
    function Gm(e) {
      fn ? (hn ? hn.push(e) : (hn = [e])) : (fn = e);
    }
    function Jm() {
      if (fn) {
        var e = fn,
          t = hn;
        if (((hn = fn = null), Ip(e), t))
          for (e = 0; e < t.length; e++) Ip(t[e]);
      }
    }
    function Km(e, t) {
      return e(t);
    }
    function Xm() {}
    var Hi = !1;
    function Qm(e, t, r) {
      if (Hi) return e(t, r);
      Hi = !0;
      try {
        return Km(e, t, r);
      } finally {
        (Hi = !1), (fn !== null || hn !== null) && (Xm(), Jm());
      }
    }
    function Eo(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var n = As(r);
      if (n === null) return null;
      r = n[t];
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          (n = !n.disabled) ||
            ((e = e.type),
            (n = !(
              e === 'button' ||
              e === 'input' ||
              e === 'select' ||
              e === 'textarea'
            ))),
            (e = !n);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && typeof r != 'function') throw Error(O(231, t, typeof r));
      return r;
    }
    var Eu = !1;
    if (Mt)
      try {
        (Yr = {}),
          Object.defineProperty(Yr, 'passive', {
            get: function () {
              Eu = !0;
            },
          }),
          window.addEventListener('test', Yr, Yr),
          window.removeEventListener('test', Yr, Yr);
      } catch {
        Eu = !1;
      }
    var Yr;
    function Ky(e, t, r, n, o, a, s, i, u) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, l);
      } catch (c) {
        this.onError(c);
      }
    }
    var mo = !1,
      rs = null,
      ns = !1,
      xu = null,
      Xy = {
        onError: function (e) {
          (mo = !0), (rs = e);
        },
      };
    function Qy(e, t, r, n, o, a, s, i, u) {
      (mo = !1), (rs = null), Ky.apply(Xy, arguments);
    }
    function Yy(e, t, r, n, o, a, s, i, u) {
      if ((Qy.apply(this, arguments), mo)) {
        if (mo) {
          var l = rs;
          (mo = !1), (rs = null);
        } else throw Error(O(198));
        ns || ((ns = !0), (xu = l));
      }
    }
    function Wr(e) {
      var t = e,
        r = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? r : null;
    }
    function Ym(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Fp(e) {
      if (Wr(e) !== e) throw Error(O(188));
    }
    function Zy(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Wr(e)), t === null)) throw Error(O(188));
        return t !== e ? null : e;
      }
      for (var r = e, n = t; ; ) {
        var o = r.return;
        if (o === null) break;
        var a = o.alternate;
        if (a === null) {
          if (((n = o.return), n !== null)) {
            r = n;
            continue;
          }
          break;
        }
        if (o.child === a.child) {
          for (a = o.child; a; ) {
            if (a === r) return Fp(o), e;
            if (a === n) return Fp(o), t;
            a = a.sibling;
          }
          throw Error(O(188));
        }
        if (r.return !== n.return) (r = o), (n = a);
        else {
          for (var s = !1, i = o.child; i; ) {
            if (i === r) {
              (s = !0), (r = o), (n = a);
              break;
            }
            if (i === n) {
              (s = !0), (n = o), (r = a);
              break;
            }
            i = i.sibling;
          }
          if (!s) {
            for (i = a.child; i; ) {
              if (i === r) {
                (s = !0), (r = a), (n = o);
                break;
              }
              if (i === n) {
                (s = !0), (n = a), (r = o);
                break;
              }
              i = i.sibling;
            }
            if (!s) throw Error(O(189));
          }
        }
        if (r.alternate !== n) throw Error(O(190));
      }
      if (r.tag !== 3) throw Error(O(188));
      return r.stateNode.current === r ? e : t;
    }
    function Zm(e) {
      return (e = Zy(e)), e !== null ? ed(e) : null;
    }
    function ed(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = ed(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var td = Je.unstable_scheduleCallback,
      Np = Je.unstable_cancelCallback,
      ek = Je.unstable_shouldYield,
      tk = Je.unstable_requestPaint,
      le = Je.unstable_now,
      rk = Je.unstable_getCurrentPriorityLevel,
      ul = Je.unstable_ImmediatePriority,
      rd = Je.unstable_UserBlockingPriority,
      os = Je.unstable_NormalPriority,
      nk = Je.unstable_LowPriority,
      nd = Je.unstable_IdlePriority,
      Ss = null,
      Ct = null;
    function ok(e) {
      if (Ct && typeof Ct.onCommitFiberRoot == 'function')
        try {
          Ct.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var ht = Math.clz32 ? Math.clz32 : ik,
      ak = Math.log,
      sk = Math.LN2;
    function ik(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((ak(e) / sk) | 0)) | 0;
    }
    var Aa = 64,
      Ra = 4194304;
    function lo(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function as(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var n = 0,
        o = e.suspendedLanes,
        a = e.pingedLanes,
        s = r & 268435455;
      if (s !== 0) {
        var i = s & ~o;
        i !== 0 ? (n = lo(i)) : ((a &= s), a !== 0 && (n = lo(a)));
      } else (s = r & ~o), s !== 0 ? (n = lo(s)) : a !== 0 && (n = lo(a));
      if (n === 0) return 0;
      if (
        t !== 0 &&
        t !== n &&
        !(t & o) &&
        ((o = n & -n),
        (a = t & -t),
        o >= a || (o === 16 && (a & 4194240) !== 0))
      )
        return t;
      if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; )
          (r = 31 - ht(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
      return n;
    }
    function uk(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function lk(e, t) {
      for (
        var r = e.suspendedLanes,
          n = e.pingedLanes,
          o = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;

      ) {
        var s = 31 - ht(a),
          i = 1 << s,
          u = o[s];
        u === -1
          ? (!(i & r) || i & n) && (o[s] = uk(i, t))
          : u <= t && (e.expiredLanes |= i),
          (a &= ~i);
      }
    }
    function Su(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function od() {
      var e = Aa;
      return (Aa <<= 1), !(Aa & 4194240) && (Aa = 64), e;
    }
    function Wi(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function No(e, t, r) {
      (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - ht(t)),
        (e[t] = r);
    }
    function ck(e, t) {
      var r = e.pendingLanes & ~t;
      (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
      var n = e.eventTimes;
      for (e = e.expirationTimes; 0 < r; ) {
        var o = 31 - ht(r),
          a = 1 << o;
        (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~a);
      }
    }
    function ll(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r; ) {
        var n = 31 - ht(r),
          o = 1 << n;
        (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
      }
    }
    var G = 0;
    function ad(e) {
      return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var sd,
      cl,
      id,
      ud,
      ld,
      Cu = !1,
      Pa = [],
      ar = null,
      sr = null,
      ir = null,
      xo = new Map(),
      So = new Map(),
      tr = [],
      pk =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' ',
        );
    function Mp(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          ar = null;
          break;
        case 'dragenter':
        case 'dragleave':
          sr = null;
          break;
        case 'mouseover':
        case 'mouseout':
          ir = null;
          break;
        case 'pointerover':
        case 'pointerout':
          xo.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          So.delete(t.pointerId);
      }
    }
    function eo(e, t, r, n, o, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: a,
            targetContainers: [o],
          }),
          t !== null && ((t = qo(t)), t !== null && cl(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
    }
    function mk(e, t, r, n, o) {
      switch (t) {
        case 'focusin':
          return (ar = eo(ar, e, t, r, n, o)), !0;
        case 'dragenter':
          return (sr = eo(sr, e, t, r, n, o)), !0;
        case 'mouseover':
          return (ir = eo(ir, e, t, r, n, o)), !0;
        case 'pointerover':
          var a = o.pointerId;
          return xo.set(a, eo(xo.get(a) || null, e, t, r, n, o)), !0;
        case 'gotpointercapture':
          return (
            (a = o.pointerId),
            So.set(a, eo(So.get(a) || null, e, t, r, n, o)),
            !0
          );
      }
      return !1;
    }
    function cd(e) {
      var t = Tr(e.target);
      if (t !== null) {
        var r = Wr(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = Ym(r)), t !== null)) {
              (e.blockedOn = t),
                ld(e.priority, function () {
                  id(r);
                });
              return;
            }
          } else if (
            t === 3 &&
            r.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Wa(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = _u(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var n = new r.constructor(r.type, r);
          (bu = n), r.target.dispatchEvent(n), (bu = null);
        } else return (t = qo(r)), t !== null && cl(t), (e.blockedOn = r), !1;
        t.shift();
      }
      return !0;
    }
    function qp(e, t, r) {
      Wa(e) && r.delete(t);
    }
    function dk() {
      (Cu = !1),
        ar !== null && Wa(ar) && (ar = null),
        sr !== null && Wa(sr) && (sr = null),
        ir !== null && Wa(ir) && (ir = null),
        xo.forEach(qp),
        So.forEach(qp);
    }
    function to(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Cu ||
          ((Cu = !0),
          Je.unstable_scheduleCallback(Je.unstable_NormalPriority, dk)));
    }
    function Co(e) {
      function t(o) {
        return to(o, e);
      }
      if (0 < Pa.length) {
        to(Pa[0], e);
        for (var r = 1; r < Pa.length; r++) {
          var n = Pa[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      for (
        ar !== null && to(ar, e),
          sr !== null && to(sr, e),
          ir !== null && to(ir, e),
          xo.forEach(t),
          So.forEach(t),
          r = 0;
        r < tr.length;
        r++
      )
        (n = tr[r]), n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < tr.length && ((r = tr[0]), r.blockedOn === null); )
        cd(r), r.blockedOn === null && tr.shift();
    }
    var gn = $t.ReactCurrentBatchConfig,
      ss = !0;
    function fk(e, t, r, n) {
      var o = G,
        a = gn.transition;
      gn.transition = null;
      try {
        (G = 1), pl(e, t, r, n);
      } finally {
        (G = o), (gn.transition = a);
      }
    }
    function hk(e, t, r, n) {
      var o = G,
        a = gn.transition;
      gn.transition = null;
      try {
        (G = 4), pl(e, t, r, n);
      } finally {
        (G = o), (gn.transition = a);
      }
    }
    function pl(e, t, r, n) {
      if (ss) {
        var o = _u(e, t, r, n);
        if (o === null) Yi(e, t, n, is, r), Mp(e, n);
        else if (mk(o, e, t, r, n)) n.stopPropagation();
        else if ((Mp(e, n), t & 4 && -1 < pk.indexOf(e))) {
          for (; o !== null; ) {
            var a = qo(o);
            if (
              (a !== null && sd(a),
              (a = _u(e, t, r, n)),
              a === null && Yi(e, t, n, is, r),
              a === o)
            )
              break;
            o = a;
          }
          o !== null && n.stopPropagation();
        } else Yi(e, t, n, null, r);
      }
    }
    var is = null;
    function _u(e, t, r, n) {
      if (((is = null), (e = il(n)), (e = Tr(e)), e !== null))
        if (((t = Wr(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = Ym(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (is = e), null;
    }
    function pd(e) {
      switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 4;
        case 'message':
          switch (rk()) {
            case ul:
              return 1;
            case rd:
              return 4;
            case os:
            case nk:
              return 16;
            case nd:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var nr = null,
      ml = null,
      Va = null;
    function md() {
      if (Va) return Va;
      var e,
        t = ml,
        r = t.length,
        n,
        o = 'value' in nr ? nr.value : nr.textContent,
        a = o.length;
      for (e = 0; e < r && t[e] === o[e]; e++);
      var s = r - e;
      for (n = 1; n <= s && t[r - n] === o[a - n]; n++);
      return (Va = o.slice(e, 1 < n ? 1 - n : void 0));
    }
    function Ga(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Oa() {
      return !0;
    }
    function Bp() {
      return !1;
    }
    function Ke(e) {
      function t(r, n, o, a, s) {
        (this._reactName = r),
          (this._targetInst = o),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = s),
          (this.currentTarget = null);
        for (var i in e)
          e.hasOwnProperty(i) && ((r = e[i]), (this[i] = r ? r(a) : a[i]));
        return (
          (this.isDefaultPrevented = (
            a.defaultPrevented != null
              ? a.defaultPrevented
              : a.returnValue === !1
          )
            ? Oa
            : Bp),
          (this.isPropagationStopped = Bp),
          this
        );
      }
      return (
        oe(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
              (this.isDefaultPrevented = Oa));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
              (this.isPropagationStopped = Oa));
          },
          persist: function () {},
          isPersistent: Oa,
        }),
        t
      );
    }
    var Cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      dl = Ke(Cn),
      Mo = oe({}, Cn, { view: 0, detail: 0 }),
      gk = Ke(Mo),
      Vi,
      Gi,
      ro,
      Cs = oe({}, Mo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: fl,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== ro &&
                (ro && e.type === 'mousemove'
                  ? ((Vi = e.screenX - ro.screenX),
                    (Gi = e.screenY - ro.screenY))
                  : (Gi = Vi = 0),
                (ro = e)),
              Vi);
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : Gi;
        },
      }),
      Up = Ke(Cs),
      yk = oe({}, Cs, { dataTransfer: 0 }),
      kk = Ke(yk),
      vk = oe({}, Mo, { relatedTarget: 0 }),
      Ji = Ke(vk),
      jk = oe({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      bk = Ke(jk),
      wk = oe({}, Cn, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Ek = Ke(wk),
      xk = oe({}, Cn, { data: 0 }),
      $p = Ke(xk),
      Sk = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      Ck = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      _k = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function zk(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = _k[e])
          ? !!t[e]
          : !1;
    }
    function fl() {
      return zk;
    }
    var Ak = oe({}, Mo, {
        key: function (e) {
          if (e.key) {
            var t = Sk[e.key] || e.key;
            if (t !== 'Unidentified') return t;
          }
          return e.type === 'keypress'
            ? ((e = Ga(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
            : e.type === 'keydown' || e.type === 'keyup'
              ? Ck[e.keyCode] || 'Unidentified'
              : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: fl,
        charCode: function (e) {
          return e.type === 'keypress' ? Ga(e) : 0;
        },
        keyCode: function (e) {
          return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === 'keypress'
            ? Ga(e)
            : e.type === 'keydown' || e.type === 'keyup'
              ? e.keyCode
              : 0;
        },
      }),
      Rk = Ke(Ak),
      Pk = oe({}, Cs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Hp = Ke(Pk),
      Ok = oe({}, Mo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: fl,
      }),
      Lk = Ke(Ok),
      Tk = oe({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Dk = Ke(Tk),
      Ik = oe({}, Cs, {
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Fk = Ke(Ik),
      Nk = [9, 13, 27, 32],
      hl = Mt && 'CompositionEvent' in window,
      fo = null;
    Mt && 'documentMode' in document && (fo = document.documentMode);
    var Mk = Mt && 'TextEvent' in window && !fo,
      dd = Mt && (!hl || (fo && 8 < fo && 11 >= fo)),
      Wp = ' ',
      Vp = !1;
    function fd(e, t) {
      switch (e) {
        case 'keyup':
          return Nk.indexOf(t.keyCode) !== -1;
        case 'keydown':
          return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function hd(e) {
      return (
        (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
      );
    }
    var rn = !1;
    function qk(e, t) {
      switch (e) {
        case 'compositionend':
          return hd(t);
        case 'keypress':
          return t.which !== 32 ? null : ((Vp = !0), Wp);
        case 'textInput':
          return (e = t.data), e === Wp && Vp ? null : e;
        default:
          return null;
      }
    }
    function Bk(e, t) {
      if (rn)
        return e === 'compositionend' || (!hl && fd(e, t))
          ? ((e = md()), (Va = ml = nr = null), (rn = !1), e)
          : null;
      switch (e) {
        case 'paste':
          return null;
        case 'keypress':
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case 'compositionend':
          return dd && t.locale !== 'ko' ? null : t.data;
        default:
          return null;
      }
    }
    var Uk = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Gp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === 'input' ? !!Uk[e.type] : t === 'textarea';
    }
    function gd(e, t, r, n) {
      Gm(n),
        (t = us(t, 'onChange')),
        0 < t.length &&
          ((r = new dl('onChange', 'change', null, r, n)),
          e.push({ event: r, listeners: t }));
    }
    var ho = null,
      _o = null;
    function $k(e) {
      _d(e, 0);
    }
    function _s(e) {
      var t = an(e);
      if (qm(t)) return e;
    }
    function Hk(e, t) {
      if (e === 'change') return t;
    }
    var yd = !1;
    Mt &&
      (Mt
        ? ((Ta = 'oninput' in document),
          Ta ||
            ((Ki = document.createElement('div')),
            Ki.setAttribute('oninput', 'return;'),
            (Ta = typeof Ki.oninput == 'function')),
          (La = Ta))
        : (La = !1),
      (yd = La && (!document.documentMode || 9 < document.documentMode)));
    var La, Ta, Ki;
    function Jp() {
      ho && (ho.detachEvent('onpropertychange', kd), (_o = ho = null));
    }
    function kd(e) {
      if (e.propertyName === 'value' && _s(_o)) {
        var t = [];
        gd(t, _o, e, il(e)), Qm($k, t);
      }
    }
    function Wk(e, t, r) {
      e === 'focusin'
        ? (Jp(), (ho = t), (_o = r), ho.attachEvent('onpropertychange', kd))
        : e === 'focusout' && Jp();
    }
    function Vk(e) {
      if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return _s(_o);
    }
    function Gk(e, t) {
      if (e === 'click') return _s(t);
    }
    function Jk(e, t) {
      if (e === 'input' || e === 'change') return _s(t);
    }
    function Kk(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var yt = typeof Object.is == 'function' ? Object.is : Kk;
    function zo(e, t) {
      if (yt(e, t)) return !0;
      if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
      )
        return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!lu.call(t, o) || !yt(e[o], t[o])) return !1;
      }
      return !0;
    }
    function Kp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Xp(e, t) {
      var r = Kp(e);
      e = 0;
      for (var n; r; ) {
        if (r.nodeType === 3) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Kp(r);
      }
    }
    function vd(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? vd(e, t.parentNode)
              : 'contains' in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function jd() {
      for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == 'string';
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = ts(e.document);
      }
      return t;
    }
    function gl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === 'input' &&
          (e.type === 'text' ||
            e.type === 'search' ||
            e.type === 'tel' ||
            e.type === 'url' ||
            e.type === 'password')) ||
          t === 'textarea' ||
          e.contentEditable === 'true')
      );
    }
    function Xk(e) {
      var t = jd(),
        r = e.focusedElem,
        n = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        vd(r.ownerDocument.documentElement, r)
      ) {
        if (n !== null && gl(r)) {
          if (
            ((t = n.start),
            (e = n.end),
            e === void 0 && (e = t),
            'selectionStart' in r)
          )
            (r.selectionStart = t),
              (r.selectionEnd = Math.min(e, r.value.length));
          else if (
            ((e =
              ((t = r.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var o = r.textContent.length,
              a = Math.min(n.start, o);
            (n = n.end === void 0 ? a : Math.min(n.end, o)),
              !e.extend && a > n && ((o = n), (n = a), (a = o)),
              (o = Xp(r, a));
            var s = Xp(r, n);
            o &&
              s &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== o.node ||
                e.anchorOffset !== o.offset ||
                e.focusNode !== s.node ||
                e.focusOffset !== s.offset) &&
              ((t = t.createRange()),
              t.setStart(o.node, o.offset),
              e.removeAllRanges(),
              a > n
                ? (e.addRange(t), e.extend(s.node, s.offset))
                : (t.setEnd(s.node, s.offset), e.addRange(t)));
          }
        }
        for (t = [], e = r; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof r.focus == 'function' && r.focus(), r = 0;
          r < t.length;
          r++
        )
          (e = t[r]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var Qk = Mt && 'documentMode' in document && 11 >= document.documentMode,
      nn = null,
      zu = null,
      go = null,
      Au = !1;
    function Qp(e, t, r) {
      var n =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      Au ||
        nn == null ||
        nn !== ts(n) ||
        ((n = nn),
        'selectionStart' in n && gl(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = (
              (n.ownerDocument && n.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (go && zo(go, n)) ||
          ((go = n),
          (n = us(zu, 'onSelect')),
          0 < n.length &&
            ((t = new dl('onSelect', 'select', null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = nn))));
    }
    function Da(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r['Webkit' + e] = 'webkit' + t),
        (r['Moz' + e] = 'moz' + t),
        r
      );
    }
    var on = {
        animationend: Da('Animation', 'AnimationEnd'),
        animationiteration: Da('Animation', 'AnimationIteration'),
        animationstart: Da('Animation', 'AnimationStart'),
        transitionend: Da('Transition', 'TransitionEnd'),
      },
      Xi = {},
      bd = {};
    Mt &&
      ((bd = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete on.animationend.animation,
        delete on.animationiteration.animation,
        delete on.animationstart.animation),
      'TransitionEvent' in window || delete on.transitionend.transition);
    function zs(e) {
      if (Xi[e]) return Xi[e];
      if (!on[e]) return e;
      var t = on[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in bd) return (Xi[e] = t[r]);
      return e;
    }
    var wd = zs('animationend'),
      Ed = zs('animationiteration'),
      xd = zs('animationstart'),
      Sd = zs('transitionend'),
      Cd = new Map(),
      Yp =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' ',
        );
    function hr(e, t) {
      Cd.set(e, t), Hr(t, [e]);
    }
    for (Ia = 0; Ia < Yp.length; Ia++)
      (Fa = Yp[Ia]),
        (Zp = Fa.toLowerCase()),
        (em = Fa[0].toUpperCase() + Fa.slice(1)),
        hr(Zp, 'on' + em);
    var Fa, Zp, em, Ia;
    hr(wd, 'onAnimationEnd');
    hr(Ed, 'onAnimationIteration');
    hr(xd, 'onAnimationStart');
    hr('dblclick', 'onDoubleClick');
    hr('focusin', 'onFocus');
    hr('focusout', 'onBlur');
    hr(Sd, 'onTransitionEnd');
    vn('onMouseEnter', ['mouseout', 'mouseover']);
    vn('onMouseLeave', ['mouseout', 'mouseover']);
    vn('onPointerEnter', ['pointerout', 'pointerover']);
    vn('onPointerLeave', ['pointerout', 'pointerover']);
    Hr(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    );
    Hr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    );
    Hr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
    Hr(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    );
    Hr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    );
    Hr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
    var co =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' ',
        ),
      Yk = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(co),
      );
    function tm(e, t, r) {
      var n = e.type || 'unknown-event';
      (e.currentTarget = r), Yy(n, t, void 0, e), (e.currentTarget = null);
    }
    function _d(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          o = n.event;
        n = n.listeners;
        e: {
          var a = void 0;
          if (t)
            for (var s = n.length - 1; 0 <= s; s--) {
              var i = n[s],
                u = i.instance,
                l = i.currentTarget;
              if (((i = i.listener), u !== a && o.isPropagationStopped()))
                break e;
              tm(o, i, l), (a = u);
            }
          else
            for (s = 0; s < n.length; s++) {
              if (
                ((i = n[s]),
                (u = i.instance),
                (l = i.currentTarget),
                (i = i.listener),
                u !== a && o.isPropagationStopped())
              )
                break e;
              tm(o, i, l), (a = u);
            }
        }
      }
      if (ns) throw ((e = xu), (ns = !1), (xu = null), e);
    }
    function Q(e, t) {
      var r = t[Tu];
      r === void 0 && (r = t[Tu] = new Set());
      var n = e + '__bubble';
      r.has(n) || (zd(t, e, 2, !1), r.add(n));
    }
    function Qi(e, t, r) {
      var n = 0;
      t && (n |= 4), zd(r, e, n, t);
    }
    var Na = '_reactListening' + Math.random().toString(36).slice(2);
    function Ao(e) {
      if (!e[Na]) {
        (e[Na] = !0),
          Dm.forEach(function (r) {
            r !== 'selectionchange' &&
              (Yk.has(r) || Qi(r, !1, e), Qi(r, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Na] || ((t[Na] = !0), Qi('selectionchange', !1, t));
      }
    }
    function zd(e, t, r, n) {
      switch (pd(t)) {
        case 1:
          var o = fk;
          break;
        case 4:
          o = hk;
          break;
        default:
          o = pl;
      }
      (r = o.bind(null, t, r, e)),
        (o = void 0),
        !Eu ||
          (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
          (o = !0),
        n
          ? o !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: o })
            : e.addEventListener(t, r, !0)
          : o !== void 0
            ? e.addEventListener(t, r, { passive: o })
            : e.addEventListener(t, r, !1);
    }
    function Yi(e, t, r, n, o) {
      var a = n;
      if (!(t & 1) && !(t & 2) && n !== null)
        e: for (;;) {
          if (n === null) return;
          var s = n.tag;
          if (s === 3 || s === 4) {
            var i = n.stateNode.containerInfo;
            if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
            if (s === 4)
              for (s = n.return; s !== null; ) {
                var u = s.tag;
                if (
                  (u === 3 || u === 4) &&
                  ((u = s.stateNode.containerInfo),
                  u === o || (u.nodeType === 8 && u.parentNode === o))
                )
                  return;
                s = s.return;
              }
            for (; i !== null; ) {
              if (((s = Tr(i)), s === null)) return;
              if (((u = s.tag), u === 5 || u === 6)) {
                n = a = s;
                continue e;
              }
              i = i.parentNode;
            }
          }
          n = n.return;
        }
      Qm(function () {
        var l = a,
          c = il(r),
          p = [];
        e: {
          var g = Cd.get(e);
          if (g !== void 0) {
            var k = dl,
              h = e;
            switch (e) {
              case 'keypress':
                if (Ga(r) === 0) break e;
              case 'keydown':
              case 'keyup':
                k = Rk;
                break;
              case 'focusin':
                (h = 'focus'), (k = Ji);
                break;
              case 'focusout':
                (h = 'blur'), (k = Ji);
                break;
              case 'beforeblur':
              case 'afterblur':
                k = Ji;
                break;
              case 'click':
                if (r.button === 2) break e;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                k = Up;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                k = kk;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                k = Lk;
                break;
              case wd:
              case Ed:
              case xd:
                k = bk;
                break;
              case Sd:
                k = Dk;
                break;
              case 'scroll':
                k = gk;
                break;
              case 'wheel':
                k = Fk;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                k = Ek;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                k = Hp;
            }
            var j = (t & 4) !== 0,
              w = !j && e === 'scroll',
              d = j ? (g !== null ? g + 'Capture' : null) : g;
            j = [];
            for (var m = l, f; m !== null; ) {
              f = m;
              var y = f.stateNode;
              if (
                (f.tag === 5 &&
                  y !== null &&
                  ((f = y),
                  d !== null &&
                    ((y = Eo(m, d)), y != null && j.push(Ro(m, y, f)))),
                w)
              )
                break;
              m = m.return;
            }
            0 < j.length &&
              ((g = new k(g, h, null, r, c)),
              p.push({ event: g, listeners: j }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (
              ((g = e === 'mouseover' || e === 'pointerover'),
              (k = e === 'mouseout' || e === 'pointerout'),
              g &&
                r !== bu &&
                (h = r.relatedTarget || r.fromElement) &&
                (Tr(h) || h[qt]))
            )
              break e;
            if (
              (k || g) &&
              ((g =
                c.window === c
                  ? c
                  : (g = c.ownerDocument)
                    ? g.defaultView || g.parentWindow
                    : window),
              k
                ? ((h = r.relatedTarget || r.toElement),
                  (k = l),
                  (h = h ? Tr(h) : null),
                  h !== null &&
                    ((w = Wr(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                    (h = null))
                : ((k = null), (h = l)),
              k !== h)
            ) {
              if (
                ((j = Up),
                (y = 'onMouseLeave'),
                (d = 'onMouseEnter'),
                (m = 'mouse'),
                (e === 'pointerout' || e === 'pointerover') &&
                  ((j = Hp),
                  (y = 'onPointerLeave'),
                  (d = 'onPointerEnter'),
                  (m = 'pointer')),
                (w = k == null ? g : an(k)),
                (f = h == null ? g : an(h)),
                (g = new j(y, m + 'leave', k, r, c)),
                (g.target = w),
                (g.relatedTarget = f),
                (y = null),
                Tr(c) === l &&
                  ((j = new j(d, m + 'enter', h, r, c)),
                  (j.target = f),
                  (j.relatedTarget = w),
                  (y = j)),
                (w = y),
                k && h)
              )
                t: {
                  for (j = k, d = h, m = 0, f = j; f; f = Zr(f)) m++;
                  for (f = 0, y = d; y; y = Zr(y)) f++;
                  for (; 0 < m - f; ) (j = Zr(j)), m--;
                  for (; 0 < f - m; ) (d = Zr(d)), f--;
                  for (; m--; ) {
                    if (j === d || (d !== null && j === d.alternate)) break t;
                    (j = Zr(j)), (d = Zr(d));
                  }
                  j = null;
                }
              else j = null;
              k !== null && rm(p, g, k, j, !1),
                h !== null && w !== null && rm(p, w, h, j, !0);
            }
          }
          e: {
            if (
              ((g = l ? an(l) : window),
              (k = g.nodeName && g.nodeName.toLowerCase()),
              k === 'select' || (k === 'input' && g.type === 'file'))
            )
              var b = Hk;
            else if (Gp(g))
              if (yd) b = Jk;
              else {
                b = Vk;
                var C = Wk;
              }
            else
              (k = g.nodeName) &&
                k.toLowerCase() === 'input' &&
                (g.type === 'checkbox' || g.type === 'radio') &&
                (b = Gk);
            if (b && (b = b(e, l))) {
              gd(p, b, r, c);
              break e;
            }
            C && C(e, g, l),
              e === 'focusout' &&
                (C = g._wrapperState) &&
                C.controlled &&
                g.type === 'number' &&
                gu(g, 'number', g.value);
          }
          switch (((C = l ? an(l) : window), e)) {
            case 'focusin':
              (Gp(C) || C.contentEditable === 'true') &&
                ((nn = C), (zu = l), (go = null));
              break;
            case 'focusout':
              go = zu = nn = null;
              break;
            case 'mousedown':
              Au = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              (Au = !1), Qp(p, r, c);
              break;
            case 'selectionchange':
              if (Qk) break;
            case 'keydown':
            case 'keyup':
              Qp(p, r, c);
          }
          var x;
          if (hl)
            e: {
              switch (e) {
                case 'compositionstart':
                  var R = 'onCompositionStart';
                  break e;
                case 'compositionend':
                  R = 'onCompositionEnd';
                  break e;
                case 'compositionupdate':
                  R = 'onCompositionUpdate';
                  break e;
              }
              R = void 0;
            }
          else
            rn
              ? fd(e, r) && (R = 'onCompositionEnd')
              : e === 'keydown' &&
                r.keyCode === 229 &&
                (R = 'onCompositionStart');
          R &&
            (dd &&
              r.locale !== 'ko' &&
              (rn || R !== 'onCompositionStart'
                ? R === 'onCompositionEnd' && rn && (x = md())
                : ((nr = c),
                  (ml = 'value' in nr ? nr.value : nr.textContent),
                  (rn = !0))),
            (C = us(l, R)),
            0 < C.length &&
              ((R = new $p(R, e, null, r, c)),
              p.push({ event: R, listeners: C }),
              x ? (R.data = x) : ((x = hd(r)), x !== null && (R.data = x)))),
            (x = Mk ? qk(e, r) : Bk(e, r)) &&
              ((l = us(l, 'onBeforeInput')),
              0 < l.length &&
                ((c = new $p('onBeforeInput', 'beforeinput', null, r, c)),
                p.push({ event: c, listeners: l }),
                (c.data = x)));
        }
        _d(p, t);
      });
    }
    function Ro(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function us(e, t) {
      for (var r = t + 'Capture', n = []; e !== null; ) {
        var o = e,
          a = o.stateNode;
        o.tag === 5 &&
          a !== null &&
          ((o = a),
          (a = Eo(e, r)),
          a != null && n.unshift(Ro(e, a, o)),
          (a = Eo(e, t)),
          a != null && n.push(Ro(e, a, o))),
          (e = e.return);
      }
      return n;
    }
    function Zr(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function rm(e, t, r, n, o) {
      for (var a = t._reactName, s = []; r !== null && r !== n; ) {
        var i = r,
          u = i.alternate,
          l = i.stateNode;
        if (u !== null && u === n) break;
        i.tag === 5 &&
          l !== null &&
          ((i = l),
          o
            ? ((u = Eo(r, a)), u != null && s.unshift(Ro(r, u, i)))
            : o || ((u = Eo(r, a)), u != null && s.push(Ro(r, u, i)))),
          (r = r.return);
      }
      s.length !== 0 && e.push({ event: t, listeners: s });
    }
    var Zk = /\r\n?/g,
      ev = /\u0000|\uFFFD/g;
    function nm(e) {
      return (typeof e == 'string' ? e : '' + e)
        .replace(
          Zk,
          `
`,
        )
        .replace(ev, '');
    }
    function Ma(e, t, r) {
      if (((t = nm(t)), nm(e) !== t && r)) throw Error(O(425));
    }
    function ls() {}
    var Ru = null,
      Pu = null;
    function Ou(e, t) {
      return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Lu = typeof setTimeout == 'function' ? setTimeout : void 0,
      tv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
      om = typeof Promise == 'function' ? Promise : void 0,
      rv =
        typeof queueMicrotask == 'function'
          ? queueMicrotask
          : typeof om < 'u'
            ? function (e) {
                return om.resolve(null).then(e).catch(nv);
              }
            : Lu;
    function nv(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zi(e, t) {
      var r = t,
        n = 0;
      do {
        var o = r.nextSibling;
        if ((e.removeChild(r), o && o.nodeType === 8))
          if (((r = o.data), r === '/$')) {
            if (n === 0) {
              e.removeChild(o), Co(t);
              return;
            }
            n--;
          } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
        r = o;
      } while (r);
      Co(t);
    }
    function ur(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
          if (t === '/$') return null;
        }
      }
      return e;
    }
    function am(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === '$' || r === '$!' || r === '$?') {
            if (t === 0) return e;
            t--;
          } else r === '/$' && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var _n = Math.random().toString(36).slice(2),
      St = '__reactFiber$' + _n,
      Po = '__reactProps$' + _n,
      qt = '__reactContainer$' + _n,
      Tu = '__reactEvents$' + _n,
      ov = '__reactListeners$' + _n,
      av = '__reactHandles$' + _n;
    function Tr(e) {
      var t = e[St];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[qt] || r[St])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = am(e); e !== null; ) {
              if ((r = e[St])) return r;
              e = am(e);
            }
          return t;
        }
        (e = r), (r = e.parentNode);
      }
      return null;
    }
    function qo(e) {
      return (
        (e = e[St] || e[qt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function an(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(O(33));
    }
    function As(e) {
      return e[Po] || null;
    }
    var Du = [],
      sn = -1;
    function gr(e) {
      return { current: e };
    }
    function Y(e) {
      0 > sn || ((e.current = Du[sn]), (Du[sn] = null), sn--);
    }
    function X(e, t) {
      sn++, (Du[sn] = e.current), (e.current = t);
    }
    var fr = {},
      Re = gr(fr),
      Be = gr(!1),
      Mr = fr;
    function jn(e, t) {
      var r = e.type.contextTypes;
      if (!r) return fr;
      var n = e.stateNode;
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
      var o = {},
        a;
      for (a in r) o[a] = t[a];
      return (
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function Ue(e) {
      return (e = e.childContextTypes), e != null;
    }
    function cs() {
      Y(Be), Y(Re);
    }
    function sm(e, t, r) {
      if (Re.current !== fr) throw Error(O(168));
      X(Re, t), X(Be, r);
    }
    function Ad(e, t, r) {
      var n = e.stateNode;
      if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
        return r;
      n = n.getChildContext();
      for (var o in n)
        if (!(o in t)) throw Error(O(108, Wy(e) || 'Unknown', o));
      return oe({}, r, n);
    }
    function ps(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          fr),
        (Mr = Re.current),
        X(Re, e),
        X(Be, Be.current),
        !0
      );
    }
    function im(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(O(169));
      r
        ? ((e = Ad(e, t, Mr)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          Y(Be),
          Y(Re),
          X(Re, e))
        : Y(Be),
        X(Be, r);
    }
    var Dt = null,
      Rs = !1,
      eu = !1;
    function Rd(e) {
      Dt === null ? (Dt = [e]) : Dt.push(e);
    }
    function sv(e) {
      (Rs = !0), Rd(e);
    }
    function yr() {
      if (!eu && Dt !== null) {
        eu = !0;
        var e = 0,
          t = G;
        try {
          var r = Dt;
          for (G = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
          }
          (Dt = null), (Rs = !1);
        } catch (o) {
          throw (Dt !== null && (Dt = Dt.slice(e + 1)), td(ul, yr), o);
        } finally {
          (G = t), (eu = !1);
        }
      }
      return null;
    }
    var un = [],
      ln = 0,
      ms = null,
      ds = 0,
      tt = [],
      rt = 0,
      qr = null,
      It = 1,
      Ft = '';
    function Or(e, t) {
      (un[ln++] = ds), (un[ln++] = ms), (ms = e), (ds = t);
    }
    function Pd(e, t, r) {
      (tt[rt++] = It), (tt[rt++] = Ft), (tt[rt++] = qr), (qr = e);
      var n = It;
      e = Ft;
      var o = 32 - ht(n) - 1;
      (n &= ~(1 << o)), (r += 1);
      var a = 32 - ht(t) + o;
      if (30 < a) {
        var s = o - (o % 5);
        (a = (n & ((1 << s) - 1)).toString(32)),
          (n >>= s),
          (o -= s),
          (It = (1 << (32 - ht(t) + o)) | (r << o) | n),
          (Ft = a + e);
      } else (It = (1 << a) | (r << o) | n), (Ft = e);
    }
    function yl(e) {
      e.return !== null && (Or(e, 1), Pd(e, 1, 0));
    }
    function kl(e) {
      for (; e === ms; )
        (ms = un[--ln]), (un[ln] = null), (ds = un[--ln]), (un[ln] = null);
      for (; e === qr; )
        (qr = tt[--rt]),
          (tt[rt] = null),
          (Ft = tt[--rt]),
          (tt[rt] = null),
          (It = tt[--rt]),
          (tt[rt] = null);
    }
    var Ge = null,
      Ve = null,
      te = !1,
      ft = null;
    function Od(e, t) {
      var r = nt(5, null, null, 0);
      (r.elementType = 'DELETED'),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function um(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (Ge = e), (Ve = ur(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (Ge = e), (Ve = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = qr !== null ? { id: It, overflow: Ft } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = nt(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (Ge = e),
                (Ve = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function Iu(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Fu(e) {
      if (te) {
        var t = Ve;
        if (t) {
          var r = t;
          if (!um(e, t)) {
            if (Iu(e)) throw Error(O(418));
            t = ur(r.nextSibling);
            var n = Ge;
            t && um(e, t)
              ? Od(n, r)
              : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ge = e));
          }
        } else {
          if (Iu(e)) throw Error(O(418));
          (e.flags = (e.flags & -4097) | 2), (te = !1), (Ge = e);
        }
      }
    }
    function lm(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      Ge = e;
    }
    function qa(e) {
      if (e !== Ge) return !1;
      if (!te) return lm(e), (te = !0), !1;
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== 'head' && t !== 'body' && !Ou(e.type, e.memoizedProps))),
        t && (t = Ve))
      ) {
        if (Iu(e)) throw (Ld(), Error(O(418)));
        for (; t; ) Od(e, t), (t = ur(t.nextSibling));
      }
      if ((lm(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(O(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === '/$') {
                if (t === 0) {
                  Ve = ur(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
            }
            e = e.nextSibling;
          }
          Ve = null;
        }
      } else Ve = Ge ? ur(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ld() {
      for (var e = Ve; e; ) e = ur(e.nextSibling);
    }
    function bn() {
      (Ve = Ge = null), (te = !1);
    }
    function vl(e) {
      ft === null ? (ft = [e]) : ft.push(e);
    }
    var iv = $t.ReactCurrentBatchConfig;
    function no(e, t, r) {
      if (
        ((e = r.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
      ) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(O(309));
            var n = r.stateNode;
          }
          if (!n) throw Error(O(147, e));
          var o = n,
            a = '' + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == 'function' &&
            t.ref._stringRef === a
            ? t.ref
            : ((t = function (s) {
                var i = o.refs;
                s === null ? delete i[a] : (i[a] = s);
              }),
              (t._stringRef = a),
              t);
        }
        if (typeof e != 'string') throw Error(O(284));
        if (!r._owner) throw Error(O(290, e));
      }
      return e;
    }
    function Ba(e, t) {
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          O(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e,
          ),
        ))
      );
    }
    function cm(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Td(e) {
      function t(d, m) {
        if (e) {
          var f = d.deletions;
          f === null ? ((d.deletions = [m]), (d.flags |= 16)) : f.push(m);
        }
      }
      function r(d, m) {
        if (!e) return null;
        for (; m !== null; ) t(d, m), (m = m.sibling);
        return null;
      }
      function n(d, m) {
        for (d = new Map(); m !== null; )
          m.key !== null ? d.set(m.key, m) : d.set(m.index, m), (m = m.sibling);
        return d;
      }
      function o(d, m) {
        return (d = mr(d, m)), (d.index = 0), (d.sibling = null), d;
      }
      function a(d, m, f) {
        return (
          (d.index = f),
          e
            ? ((f = d.alternate),
              f !== null
                ? ((f = f.index), f < m ? ((d.flags |= 2), m) : f)
                : ((d.flags |= 2), m))
            : ((d.flags |= 1048576), m)
        );
      }
      function s(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
      }
      function i(d, m, f, y) {
        return m === null || m.tag !== 6
          ? ((m = iu(f, d.mode, y)), (m.return = d), m)
          : ((m = o(m, f)), (m.return = d), m);
      }
      function u(d, m, f, y) {
        var b = f.type;
        return b === tn
          ? c(d, m, f.props.children, y, f.key)
          : m !== null &&
              (m.elementType === b ||
                (typeof b == 'object' &&
                  b !== null &&
                  b.$$typeof === Zt &&
                  cm(b) === m.type))
            ? ((y = o(m, f.props)), (y.ref = no(d, m, f)), (y.return = d), y)
            : ((y = es(f.type, f.key, f.props, null, d.mode, y)),
              (y.ref = no(d, m, f)),
              (y.return = d),
              y);
      }
      function l(d, m, f, y) {
        return m === null ||
          m.tag !== 4 ||
          m.stateNode.containerInfo !== f.containerInfo ||
          m.stateNode.implementation !== f.implementation
          ? ((m = uu(f, d.mode, y)), (m.return = d), m)
          : ((m = o(m, f.children || [])), (m.return = d), m);
      }
      function c(d, m, f, y, b) {
        return m === null || m.tag !== 7
          ? ((m = Nr(f, d.mode, y, b)), (m.return = d), m)
          : ((m = o(m, f)), (m.return = d), m);
      }
      function p(d, m, f) {
        if ((typeof m == 'string' && m !== '') || typeof m == 'number')
          return (m = iu('' + m, d.mode, f)), (m.return = d), m;
        if (typeof m == 'object' && m !== null) {
          switch (m.$$typeof) {
            case Ca:
              return (
                (f = es(m.type, m.key, m.props, null, d.mode, f)),
                (f.ref = no(d, null, m)),
                (f.return = d),
                f
              );
            case en:
              return (m = uu(m, d.mode, f)), (m.return = d), m;
            case Zt:
              var y = m._init;
              return p(d, y(m._payload), f);
          }
          if (uo(m) || Zn(m))
            return (m = Nr(m, d.mode, f, null)), (m.return = d), m;
          Ba(d, m);
        }
        return null;
      }
      function g(d, m, f, y) {
        var b = m !== null ? m.key : null;
        if ((typeof f == 'string' && f !== '') || typeof f == 'number')
          return b !== null ? null : i(d, m, '' + f, y);
        if (typeof f == 'object' && f !== null) {
          switch (f.$$typeof) {
            case Ca:
              return f.key === b ? u(d, m, f, y) : null;
            case en:
              return f.key === b ? l(d, m, f, y) : null;
            case Zt:
              return (b = f._init), g(d, m, b(f._payload), y);
          }
          if (uo(f) || Zn(f)) return b !== null ? null : c(d, m, f, y, null);
          Ba(d, f);
        }
        return null;
      }
      function k(d, m, f, y, b) {
        if ((typeof y == 'string' && y !== '') || typeof y == 'number')
          return (d = d.get(f) || null), i(m, d, '' + y, b);
        if (typeof y == 'object' && y !== null) {
          switch (y.$$typeof) {
            case Ca:
              return (
                (d = d.get(y.key === null ? f : y.key) || null), u(m, d, y, b)
              );
            case en:
              return (
                (d = d.get(y.key === null ? f : y.key) || null), l(m, d, y, b)
              );
            case Zt:
              var C = y._init;
              return k(d, m, f, C(y._payload), b);
          }
          if (uo(y) || Zn(y))
            return (d = d.get(f) || null), c(m, d, y, b, null);
          Ba(m, y);
        }
        return null;
      }
      function h(d, m, f, y) {
        for (
          var b = null, C = null, x = m, R = (m = 0), L = null;
          x !== null && R < f.length;
          R++
        ) {
          x.index > R ? ((L = x), (x = null)) : (L = x.sibling);
          var T = g(d, x, f[R], y);
          if (T === null) {
            x === null && (x = L);
            break;
          }
          e && x && T.alternate === null && t(d, x),
            (m = a(T, m, R)),
            C === null ? (b = T) : (C.sibling = T),
            (C = T),
            (x = L);
        }
        if (R === f.length) return r(d, x), te && Or(d, R), b;
        if (x === null) {
          for (; R < f.length; R++)
            (x = p(d, f[R], y)),
              x !== null &&
                ((m = a(x, m, R)),
                C === null ? (b = x) : (C.sibling = x),
                (C = x));
          return te && Or(d, R), b;
        }
        for (x = n(d, x); R < f.length; R++)
          (L = k(x, d, R, f[R], y)),
            L !== null &&
              (e &&
                L.alternate !== null &&
                x.delete(L.key === null ? R : L.key),
              (m = a(L, m, R)),
              C === null ? (b = L) : (C.sibling = L),
              (C = L));
        return (
          e &&
            x.forEach(function (I) {
              return t(d, I);
            }),
          te && Or(d, R),
          b
        );
      }
      function j(d, m, f, y) {
        var b = Zn(f);
        if (typeof b != 'function') throw Error(O(150));
        if (((f = b.call(f)), f == null)) throw Error(O(151));
        for (
          var C = (b = null), x = m, R = (m = 0), L = null, T = f.next();
          x !== null && !T.done;
          R++, T = f.next()
        ) {
          x.index > R ? ((L = x), (x = null)) : (L = x.sibling);
          var I = g(d, x, T.value, y);
          if (I === null) {
            x === null && (x = L);
            break;
          }
          e && x && I.alternate === null && t(d, x),
            (m = a(I, m, R)),
            C === null ? (b = I) : (C.sibling = I),
            (C = I),
            (x = L);
        }
        if (T.done) return r(d, x), te && Or(d, R), b;
        if (x === null) {
          for (; !T.done; R++, T = f.next())
            (T = p(d, T.value, y)),
              T !== null &&
                ((m = a(T, m, R)),
                C === null ? (b = T) : (C.sibling = T),
                (C = T));
          return te && Or(d, R), b;
        }
        for (x = n(d, x); !T.done; R++, T = f.next())
          (T = k(x, d, R, T.value, y)),
            T !== null &&
              (e &&
                T.alternate !== null &&
                x.delete(T.key === null ? R : T.key),
              (m = a(T, m, R)),
              C === null ? (b = T) : (C.sibling = T),
              (C = T));
        return (
          e &&
            x.forEach(function (Z) {
              return t(d, Z);
            }),
          te && Or(d, R),
          b
        );
      }
      function w(d, m, f, y) {
        if (
          (typeof f == 'object' &&
            f !== null &&
            f.type === tn &&
            f.key === null &&
            (f = f.props.children),
          typeof f == 'object' && f !== null)
        ) {
          switch (f.$$typeof) {
            case Ca:
              e: {
                for (var b = f.key, C = m; C !== null; ) {
                  if (C.key === b) {
                    if (((b = f.type), b === tn)) {
                      if (C.tag === 7) {
                        r(d, C.sibling),
                          (m = o(C, f.props.children)),
                          (m.return = d),
                          (d = m);
                        break e;
                      }
                    } else if (
                      C.elementType === b ||
                      (typeof b == 'object' &&
                        b !== null &&
                        b.$$typeof === Zt &&
                        cm(b) === C.type)
                    ) {
                      r(d, C.sibling),
                        (m = o(C, f.props)),
                        (m.ref = no(d, C, f)),
                        (m.return = d),
                        (d = m);
                      break e;
                    }
                    r(d, C);
                    break;
                  } else t(d, C);
                  C = C.sibling;
                }
                f.type === tn
                  ? ((m = Nr(f.props.children, d.mode, y, f.key)),
                    (m.return = d),
                    (d = m))
                  : ((y = es(f.type, f.key, f.props, null, d.mode, y)),
                    (y.ref = no(d, m, f)),
                    (y.return = d),
                    (d = y));
              }
              return s(d);
            case en:
              e: {
                for (C = f.key; m !== null; ) {
                  if (m.key === C)
                    if (
                      m.tag === 4 &&
                      m.stateNode.containerInfo === f.containerInfo &&
                      m.stateNode.implementation === f.implementation
                    ) {
                      r(d, m.sibling),
                        (m = o(m, f.children || [])),
                        (m.return = d),
                        (d = m);
                      break e;
                    } else {
                      r(d, m);
                      break;
                    }
                  else t(d, m);
                  m = m.sibling;
                }
                (m = uu(f, d.mode, y)), (m.return = d), (d = m);
              }
              return s(d);
            case Zt:
              return (C = f._init), w(d, m, C(f._payload), y);
          }
          if (uo(f)) return h(d, m, f, y);
          if (Zn(f)) return j(d, m, f, y);
          Ba(d, f);
        }
        return (typeof f == 'string' && f !== '') || typeof f == 'number'
          ? ((f = '' + f),
            m !== null && m.tag === 6
              ? (r(d, m.sibling), (m = o(m, f)), (m.return = d), (d = m))
              : (r(d, m), (m = iu(f, d.mode, y)), (m.return = d), (d = m)),
            s(d))
          : r(d, m);
      }
      return w;
    }
    var wn = Td(!0),
      Dd = Td(!1),
      fs = gr(null),
      hs = null,
      cn = null,
      jl = null;
    function bl() {
      jl = cn = hs = null;
    }
    function wl(e) {
      var t = fs.current;
      Y(fs), (e._currentValue = t);
    }
    function Nu(e, t, r) {
      for (; e !== null; ) {
        var n = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
            : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
          e === r)
        )
          break;
        e = e.return;
      }
    }
    function yn(e, t) {
      (hs = e),
        (jl = cn = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (qe = !0), (e.firstContext = null));
    }
    function at(e) {
      var t = e._currentValue;
      if (jl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
          if (hs === null) throw Error(O(308));
          (cn = e), (hs.dependencies = { lanes: 0, firstContext: e });
        } else cn = cn.next = e;
      return t;
    }
    var Dr = null;
    function El(e) {
      Dr === null ? (Dr = [e]) : Dr.push(e);
    }
    function Id(e, t, r, n) {
      var o = t.interleaved;
      return (
        o === null ? ((r.next = r), El(t)) : ((r.next = o.next), (o.next = r)),
        (t.interleaved = r),
        Bt(e, n)
      );
    }
    function Bt(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t),
          (r = e.alternate),
          r !== null && (r.childLanes |= t),
          (r = e),
          (e = e.return);
      return r.tag === 3 ? r.stateNode : null;
    }
    var er = !1;
    function xl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Fd(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function Nt(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function lr(e, t, r) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), H & 2)) {
        var o = n.pending;
        return (
          o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
          (n.pending = t),
          Bt(e, r)
        );
      }
      return (
        (o = n.interleaved),
        o === null ? ((t.next = t), El(n)) : ((t.next = o.next), (o.next = t)),
        (n.interleaved = t),
        Bt(e, r)
      );
    }
    function Ja(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), ll(e, r);
      }
    }
    function pm(e, t) {
      var r = e.updateQueue,
        n = e.alternate;
      if (n !== null && ((n = n.updateQueue), r === n)) {
        var o = null,
          a = null;
        if (((r = r.firstBaseUpdate), r !== null)) {
          do {
            var s = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null,
            };
            a === null ? (o = a = s) : (a = a.next = s), (r = r.next);
          } while (r !== null);
          a === null ? (o = a = t) : (a = a.next = t);
        } else o = a = t;
        (r = {
          baseState: n.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: a,
          shared: n.shared,
          effects: n.effects,
        }),
          (e.updateQueue = r);
        return;
      }
      (e = r.lastBaseUpdate),
        e === null ? (r.firstBaseUpdate = t) : (e.next = t),
        (r.lastBaseUpdate = t);
    }
    function gs(e, t, r, n) {
      var o = e.updateQueue;
      er = !1;
      var a = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        i = o.shared.pending;
      if (i !== null) {
        o.shared.pending = null;
        var u = i,
          l = u.next;
        (u.next = null), s === null ? (a = l) : (s.next = l), (s = u);
        var c = e.alternate;
        c !== null &&
          ((c = c.updateQueue),
          (i = c.lastBaseUpdate),
          i !== s &&
            (i === null ? (c.firstBaseUpdate = l) : (i.next = l),
            (c.lastBaseUpdate = u)));
      }
      if (a !== null) {
        var p = o.baseState;
        (s = 0), (c = l = u = null), (i = a);
        do {
          var g = i.lane,
            k = i.eventTime;
          if ((n & g) === g) {
            c !== null &&
              (c = c.next =
                {
                  eventTime: k,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var h = e,
                j = i;
              switch (((g = t), (k = r), j.tag)) {
                case 1:
                  if (((h = j.payload), typeof h == 'function')) {
                    p = h.call(k, p, g);
                    break e;
                  }
                  p = h;
                  break e;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = j.payload),
                    (g = typeof h == 'function' ? h.call(k, p, g) : h),
                    g == null)
                  )
                    break e;
                  p = oe({}, p, g);
                  break e;
                case 2:
                  er = !0;
              }
            }
            i.callback !== null &&
              i.lane !== 0 &&
              ((e.flags |= 64),
              (g = o.effects),
              g === null ? (o.effects = [i]) : g.push(i));
          } else
            (k = {
              eventTime: k,
              lane: g,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              c === null ? ((l = c = k), (u = p)) : (c = c.next = k),
              (s |= g);
          if (((i = i.next), i === null)) {
            if (((i = o.shared.pending), i === null)) break;
            (g = i),
              (i = g.next),
              (g.next = null),
              (o.lastBaseUpdate = g),
              (o.shared.pending = null);
          }
        } while (!0);
        if (
          (c === null && (u = p),
          (o.baseState = u),
          (o.firstBaseUpdate = l),
          (o.lastBaseUpdate = c),
          (t = o.shared.interleaved),
          t !== null)
        ) {
          o = t;
          do (s |= o.lane), (o = o.next);
          while (o !== t);
        } else a === null && (o.shared.lanes = 0);
        (Ur |= s), (e.lanes = s), (e.memoizedState = p);
      }
    }
    function mm(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var n = e[t],
            o = n.callback;
          if (o !== null) {
            if (((n.callback = null), (n = r), typeof o != 'function'))
              throw Error(O(191, o));
            o.call(n);
          }
        }
    }
    var Bo = {},
      _t = gr(Bo),
      Oo = gr(Bo),
      Lo = gr(Bo);
    function Ir(e) {
      if (e === Bo) throw Error(O(174));
      return e;
    }
    function Sl(e, t) {
      switch ((X(Lo, t), X(Oo, e), X(_t, Bo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ku(null, '');
          break;
        default:
          (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = ku(t, e));
      }
      Y(_t), X(_t, t);
    }
    function En() {
      Y(_t), Y(Oo), Y(Lo);
    }
    function Nd(e) {
      Ir(Lo.current);
      var t = Ir(_t.current),
        r = ku(t, e.type);
      t !== r && (X(Oo, e), X(_t, r));
    }
    function Cl(e) {
      Oo.current === e && (Y(_t), Y(Oo));
    }
    var re = gr(0);
    function ys(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var r = t.memoizedState;
          if (
            r !== null &&
            ((r = r.dehydrated),
            r === null || r.data === '$?' || r.data === '$!')
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var tu = [];
    function _l() {
      for (var e = 0; e < tu.length; e++)
        tu[e]._workInProgressVersionPrimary = null;
      tu.length = 0;
    }
    var Ka = $t.ReactCurrentDispatcher,
      ru = $t.ReactCurrentBatchConfig,
      Br = 0,
      ne = null,
      he = null,
      ke = null,
      ks = !1,
      yo = !1,
      To = 0,
      uv = 0;
    function _e() {
      throw Error(O(321));
    }
    function zl(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!yt(e[r], t[r])) return !1;
      return !0;
    }
    function Al(e, t, r, n, o, a) {
      if (
        ((Br = a),
        (ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ka.current = e === null || e.memoizedState === null ? mv : dv),
        (e = r(n, o)),
        yo)
      ) {
        a = 0;
        do {
          if (((yo = !1), (To = 0), 25 <= a)) throw Error(O(301));
          (a += 1),
            (ke = he = null),
            (t.updateQueue = null),
            (Ka.current = fv),
            (e = r(n, o));
        } while (yo);
      }
      if (
        ((Ka.current = vs),
        (t = he !== null && he.next !== null),
        (Br = 0),
        (ke = he = ne = null),
        (ks = !1),
        t)
      )
        throw Error(O(300));
      return e;
    }
    function Rl() {
      var e = To !== 0;
      return (To = 0), e;
    }
    function xt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return ke === null ? (ne.memoizedState = ke = e) : (ke = ke.next = e), ke;
    }
    function st() {
      if (he === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = he.next;
      var t = ke === null ? ne.memoizedState : ke.next;
      if (t !== null) (ke = t), (he = e);
      else {
        if (e === null) throw Error(O(310));
        (he = e),
          (e = {
            memoizedState: he.memoizedState,
            baseState: he.baseState,
            baseQueue: he.baseQueue,
            queue: he.queue,
            next: null,
          }),
          ke === null ? (ne.memoizedState = ke = e) : (ke = ke.next = e);
      }
      return ke;
    }
    function Do(e, t) {
      return typeof t == 'function' ? t(e) : t;
    }
    function nu(e) {
      var t = st(),
        r = t.queue;
      if (r === null) throw Error(O(311));
      r.lastRenderedReducer = e;
      var n = he,
        o = n.baseQueue,
        a = r.pending;
      if (a !== null) {
        if (o !== null) {
          var s = o.next;
          (o.next = a.next), (a.next = s);
        }
        (n.baseQueue = o = a), (r.pending = null);
      }
      if (o !== null) {
        (a = o.next), (n = n.baseState);
        var i = (s = null),
          u = null,
          l = a;
        do {
          var c = l.lane;
          if ((Br & c) === c)
            u !== null &&
              (u = u.next =
                {
                  lane: 0,
                  action: l.action,
                  hasEagerState: l.hasEagerState,
                  eagerState: l.eagerState,
                  next: null,
                }),
              (n = l.hasEagerState ? l.eagerState : e(n, l.action));
          else {
            var p = {
              lane: c,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            };
            u === null ? ((i = u = p), (s = n)) : (u = u.next = p),
              (ne.lanes |= c),
              (Ur |= c);
          }
          l = l.next;
        } while (l !== null && l !== a);
        u === null ? (s = n) : (u.next = i),
          yt(n, t.memoizedState) || (qe = !0),
          (t.memoizedState = n),
          (t.baseState = s),
          (t.baseQueue = u),
          (r.lastRenderedState = n);
      }
      if (((e = r.interleaved), e !== null)) {
        o = e;
        do (a = o.lane), (ne.lanes |= a), (Ur |= a), (o = o.next);
        while (o !== e);
      } else o === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function ou(e) {
      var t = st(),
        r = t.queue;
      if (r === null) throw Error(O(311));
      r.lastRenderedReducer = e;
      var n = r.dispatch,
        o = r.pending,
        a = t.memoizedState;
      if (o !== null) {
        r.pending = null;
        var s = (o = o.next);
        do (a = e(a, s.action)), (s = s.next);
        while (s !== o);
        yt(a, t.memoizedState) || (qe = !0),
          (t.memoizedState = a),
          t.baseQueue === null && (t.baseState = a),
          (r.lastRenderedState = a);
      }
      return [a, n];
    }
    function Md() {}
    function qd(e, t) {
      var r = ne,
        n = st(),
        o = t(),
        a = !yt(n.memoizedState, o);
      if (
        (a && ((n.memoizedState = o), (qe = !0)),
        (n = n.queue),
        Pl($d.bind(null, r, n, e), [e]),
        n.getSnapshot !== t || a || (ke !== null && ke.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Io(9, Ud.bind(null, r, n, o, t), void 0, null),
          ve === null)
        )
          throw Error(O(349));
        Br & 30 || Bd(r, t, o);
      }
      return o;
    }
    function Bd(e, t, r) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = ne.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ne.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function Ud(e, t, r, n) {
      (t.value = r), (t.getSnapshot = n), Hd(t) && Wd(e);
    }
    function $d(e, t, r) {
      return r(function () {
        Hd(t) && Wd(e);
      });
    }
    function Hd(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !yt(e, r);
      } catch {
        return !0;
      }
    }
    function Wd(e) {
      var t = Bt(e, 1);
      t !== null && gt(t, e, 1, -1);
    }
    function dm(e) {
      var t = xt();
      return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Do,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = pv.bind(null, ne, e)),
        [t.memoizedState, e]
      );
    }
    function Io(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = ne.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ne.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      );
    }
    function Vd() {
      return st().memoizedState;
    }
    function Xa(e, t, r, n) {
      var o = xt();
      (ne.flags |= e),
        (o.memoizedState = Io(1 | t, r, void 0, n === void 0 ? null : n));
    }
    function Ps(e, t, r, n) {
      var o = st();
      n = n === void 0 ? null : n;
      var a = void 0;
      if (he !== null) {
        var s = he.memoizedState;
        if (((a = s.destroy), n !== null && zl(n, s.deps))) {
          o.memoizedState = Io(t, r, a, n);
          return;
        }
      }
      (ne.flags |= e), (o.memoizedState = Io(1 | t, r, a, n));
    }
    function fm(e, t) {
      return Xa(8390656, 8, e, t);
    }
    function Pl(e, t) {
      return Ps(2048, 8, e, t);
    }
    function Gd(e, t) {
      return Ps(4, 2, e, t);
    }
    function Jd(e, t) {
      return Ps(4, 4, e, t);
    }
    function Kd(e, t) {
      if (typeof t == 'function')
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Xd(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), Ps(4, 4, Kd.bind(null, t, e), r)
      );
    }
    function Ol() {}
    function Qd(e, t) {
      var r = st();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && zl(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function Yd(e, t) {
      var r = st();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && zl(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function Zd(e, t, r) {
      return Br & 21
        ? (yt(r, t) ||
            ((r = od()), (ne.lanes |= r), (Ur |= r), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (qe = !0)),
          (e.memoizedState = r));
    }
    function lv(e, t) {
      var r = G;
      (G = r !== 0 && 4 > r ? r : 4), e(!0);
      var n = ru.transition;
      ru.transition = {};
      try {
        e(!1), t();
      } finally {
        (G = r), (ru.transition = n);
      }
    }
    function ef() {
      return st().memoizedState;
    }
    function cv(e, t, r) {
      var n = pr(e);
      if (
        ((r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        tf(e))
      )
        rf(t, r);
      else if (((r = Id(e, t, r, n)), r !== null)) {
        var o = Fe();
        gt(r, e, n, o), nf(r, t, n);
      }
    }
    function pv(e, t, r) {
      var n = pr(e),
        o = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (tf(e)) rf(t, o);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var s = t.lastRenderedState,
              i = a(s, r);
            if (((o.hasEagerState = !0), (o.eagerState = i), yt(i, s))) {
              var u = t.interleaved;
              u === null
                ? ((o.next = o), El(t))
                : ((o.next = u.next), (u.next = o)),
                (t.interleaved = o);
              return;
            }
          } catch {
          } finally {
          }
        (r = Id(e, t, o, n)),
          r !== null && ((o = Fe()), gt(r, e, n, o), nf(r, t, n));
      }
    }
    function tf(e) {
      var t = e.alternate;
      return e === ne || (t !== null && t === ne);
    }
    function rf(e, t) {
      yo = ks = !0;
      var r = e.pending;
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t);
    }
    function nf(e, t, r) {
      if (r & 4194240) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), ll(e, r);
      }
    }
    var vs = {
        readContext: at,
        useCallback: _e,
        useContext: _e,
        useEffect: _e,
        useImperativeHandle: _e,
        useInsertionEffect: _e,
        useLayoutEffect: _e,
        useMemo: _e,
        useReducer: _e,
        useRef: _e,
        useState: _e,
        useDebugValue: _e,
        useDeferredValue: _e,
        useTransition: _e,
        useMutableSource: _e,
        useSyncExternalStore: _e,
        useId: _e,
        unstable_isNewReconciler: !1,
      },
      mv = {
        readContext: at,
        useCallback: function (e, t) {
          return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: at,
        useEffect: fm,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            Xa(4194308, 4, Kd.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return Xa(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Xa(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = xt();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = xt();
          return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (n.queue = e),
            (e = e.dispatch = cv.bind(null, ne, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = xt();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: dm,
        useDebugValue: Ol,
        useDeferredValue: function (e) {
          return (xt().memoizedState = e);
        },
        useTransition: function () {
          var e = dm(!1),
            t = e[0];
          return (e = lv.bind(null, e[1])), (xt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var n = ne,
            o = xt();
          if (te) {
            if (r === void 0) throw Error(O(407));
            r = r();
          } else {
            if (((r = t()), ve === null)) throw Error(O(349));
            Br & 30 || Bd(n, t, r);
          }
          o.memoizedState = r;
          var a = { value: r, getSnapshot: t };
          return (
            (o.queue = a),
            fm($d.bind(null, n, a, e), [e]),
            (n.flags |= 2048),
            Io(9, Ud.bind(null, n, a, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = xt(),
            t = ve.identifierPrefix;
          if (te) {
            var r = Ft,
              n = It;
            (r = (n & ~(1 << (32 - ht(n) - 1))).toString(32) + r),
              (t = ':' + t + 'R' + r),
              (r = To++),
              0 < r && (t += 'H' + r.toString(32)),
              (t += ':');
          } else (r = uv++), (t = ':' + t + 'r' + r.toString(32) + ':');
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      dv = {
        readContext: at,
        useCallback: Qd,
        useContext: at,
        useEffect: Pl,
        useImperativeHandle: Xd,
        useInsertionEffect: Gd,
        useLayoutEffect: Jd,
        useMemo: Yd,
        useReducer: nu,
        useRef: Vd,
        useState: function () {
          return nu(Do);
        },
        useDebugValue: Ol,
        useDeferredValue: function (e) {
          var t = st();
          return Zd(t, he.memoizedState, e);
        },
        useTransition: function () {
          var e = nu(Do)[0],
            t = st().memoizedState;
          return [e, t];
        },
        useMutableSource: Md,
        useSyncExternalStore: qd,
        useId: ef,
        unstable_isNewReconciler: !1,
      },
      fv = {
        readContext: at,
        useCallback: Qd,
        useContext: at,
        useEffect: Pl,
        useImperativeHandle: Xd,
        useInsertionEffect: Gd,
        useLayoutEffect: Jd,
        useMemo: Yd,
        useReducer: ou,
        useRef: Vd,
        useState: function () {
          return ou(Do);
        },
        useDebugValue: Ol,
        useDeferredValue: function (e) {
          var t = st();
          return he === null
            ? (t.memoizedState = e)
            : Zd(t, he.memoizedState, e);
        },
        useTransition: function () {
          var e = ou(Do)[0],
            t = st().memoizedState;
          return [e, t];
        },
        useMutableSource: Md,
        useSyncExternalStore: qd,
        useId: ef,
        unstable_isNewReconciler: !1,
      };
    function mt(e, t) {
      if (e && e.defaultProps) {
        (t = oe({}, t)), (e = e.defaultProps);
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    function Mu(e, t, r, n) {
      (t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : oe({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var Os = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Wr(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = Fe(),
          o = pr(e),
          a = Nt(n, o);
        (a.payload = t),
          r != null && (a.callback = r),
          (t = lr(e, a, o)),
          t !== null && (gt(t, e, o, n), Ja(t, e, o));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = Fe(),
          o = pr(e),
          a = Nt(n, o);
        (a.tag = 1),
          (a.payload = t),
          r != null && (a.callback = r),
          (t = lr(e, a, o)),
          t !== null && (gt(t, e, o, n), Ja(t, e, o));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = Fe(),
          n = pr(e),
          o = Nt(r, n);
        (o.tag = 2),
          t != null && (o.callback = t),
          (t = lr(e, o, n)),
          t !== null && (gt(t, e, n, r), Ja(t, e, n));
      },
    };
    function hm(e, t, r, n, o, a, s) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
          ? e.shouldComponentUpdate(n, a, s)
          : t.prototype && t.prototype.isPureReactComponent
            ? !zo(r, n) || !zo(o, a)
            : !0
      );
    }
    function of(e, t, r) {
      var n = !1,
        o = fr,
        a = t.contextType;
      return (
        typeof a == 'object' && a !== null
          ? (a = at(a))
          : ((o = Ue(t) ? Mr : Re.current),
            (n = t.contextTypes),
            (a = (n = n != null) ? jn(e, o) : fr)),
        (t = new t(r, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Os),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function gm(e, t, r, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && Os.enqueueReplaceState(t, t.state, null);
    }
    function qu(e, t, r, n) {
      var o = e.stateNode;
      (o.props = r), (o.state = e.memoizedState), (o.refs = {}), xl(e);
      var a = t.contextType;
      typeof a == 'object' && a !== null
        ? (o.context = at(a))
        : ((a = Ue(t) ? Mr : Re.current), (o.context = jn(e, a))),
        (o.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == 'function' && (Mu(e, t, a, r), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' &&
            typeof o.componentWillMount != 'function') ||
          ((t = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && Os.enqueueReplaceState(o, o.state, null),
          gs(e, r, o, n),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
    }
    function xn(e, t) {
      try {
        var r = '',
          n = t;
        do (r += Hy(n)), (n = n.return);
        while (n);
        var o = r;
      } catch (a) {
        o =
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack;
      }
      return { value: e, source: t, stack: o, digest: null };
    }
    function au(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function Bu(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var hv = typeof WeakMap == 'function' ? WeakMap : Map;
    function af(e, t, r) {
      (r = Nt(-1, r)), (r.tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          bs || ((bs = !0), (Qu = n)), Bu(e, t);
        }),
        r
      );
    }
    function sf(e, t, r) {
      (r = Nt(-1, r)), (r.tag = 3);
      var n = e.type.getDerivedStateFromError;
      if (typeof n == 'function') {
        var o = t.value;
        (r.payload = function () {
          return n(o);
        }),
          (r.callback = function () {
            Bu(e, t);
          });
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == 'function' &&
          (r.callback = function () {
            Bu(e, t),
              typeof n != 'function' &&
                (cr === null ? (cr = new Set([this])) : cr.add(this));
            var s = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: s !== null ? s : '',
            });
          }),
        r
      );
    }
    function ym(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new hv();
        var o = new Set();
        n.set(t, o);
      } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
      o.has(r) || (o.add(r), (e = Av.bind(null, e, t, r)), t.then(e, e));
    }
    function km(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function vm(e, t, r, n, o) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (r.flags |= 131072),
              (r.flags &= -52805),
              r.tag === 1 &&
                (r.alternate === null
                  ? (r.tag = 17)
                  : ((t = Nt(-1, 1)), (t.tag = 2), lr(r, t, 1))),
              (r.lanes |= 1)),
          e);
    }
    var gv = $t.ReactCurrentOwner,
      qe = !1;
    function Ie(e, t, r, n) {
      t.child = e === null ? Dd(t, null, r, n) : wn(t, e.child, r, n);
    }
    function jm(e, t, r, n, o) {
      r = r.render;
      var a = t.ref;
      return (
        yn(t, o),
        (n = Al(e, t, r, n, a, o)),
        (r = Rl()),
        e !== null && !qe
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~o),
            Ut(e, t, o))
          : (te && r && yl(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
      );
    }
    function bm(e, t, r, n, o) {
      if (e === null) {
        var a = r.type;
        return typeof a == 'function' &&
          !ql(a) &&
          a.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), uf(e, t, a, n, o))
          : ((e = es(r.type, null, n, t, t.mode, o)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !(e.lanes & o))) {
        var s = a.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : zo),
          r(s, n) && e.ref === t.ref)
        )
          return Ut(e, t, o);
      }
      return (
        (t.flags |= 1),
        (e = mr(a, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function uf(e, t, r, n, o) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (zo(a, n) && e.ref === t.ref)
          if (((qe = !1), (t.pendingProps = n = a), (e.lanes & o) !== 0))
            e.flags & 131072 && (qe = !0);
          else return (t.lanes = e.lanes), Ut(e, t, o);
      }
      return Uu(e, t, r, n, o);
    }
    function lf(e, t, r) {
      var n = t.pendingProps,
        o = n.children,
        a = e !== null ? e.memoizedState : null;
      if (n.mode === 'hidden')
        if (!(t.mode & 1))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            X(mn, We),
            (We |= r);
        else {
          if (!(r & 1073741824))
            return (
              (e = a !== null ? a.baseLanes | r : r),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              X(mn, We),
              (We |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (n = a !== null ? a.baseLanes : r),
            X(mn, We),
            (We |= n);
        }
      else
        a !== null
          ? ((n = a.baseLanes | r), (t.memoizedState = null))
          : (n = r),
          X(mn, We),
          (We |= n);
      return Ie(e, t, o, r), t.child;
    }
    function cf(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Uu(e, t, r, n, o) {
      var a = Ue(r) ? Mr : Re.current;
      return (
        (a = jn(t, a)),
        yn(t, o),
        (r = Al(e, t, r, n, a, o)),
        (n = Rl()),
        e !== null && !qe
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~o),
            Ut(e, t, o))
          : (te && n && yl(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
      );
    }
    function wm(e, t, r, n, o) {
      if (Ue(r)) {
        var a = !0;
        ps(t);
      } else a = !1;
      if ((yn(t, o), t.stateNode === null))
        Qa(e, t), of(t, r, n), qu(t, r, n, o), (n = !0);
      else if (e === null) {
        var s = t.stateNode,
          i = t.memoizedProps;
        s.props = i;
        var u = s.context,
          l = r.contextType;
        typeof l == 'object' && l !== null
          ? (l = at(l))
          : ((l = Ue(r) ? Mr : Re.current), (l = jn(t, l)));
        var c = r.getDerivedStateFromProps,
          p =
            typeof c == 'function' ||
            typeof s.getSnapshotBeforeUpdate == 'function';
        p ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((i !== n || u !== l) && gm(t, s, n, l)),
          (er = !1);
        var g = t.memoizedState;
        (s.state = g),
          gs(t, n, s, o),
          (u = t.memoizedState),
          i !== n || g !== u || Be.current || er
            ? (typeof c == 'function' &&
                (Mu(t, r, c, n), (u = t.memoizedState)),
              (i = er || hm(t, r, i, n, g, u, l))
                ? (p ||
                    (typeof s.UNSAFE_componentWillMount != 'function' &&
                      typeof s.componentWillMount != 'function') ||
                    (typeof s.componentWillMount == 'function' &&
                      s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == 'function' &&
                      s.UNSAFE_componentWillMount()),
                  typeof s.componentDidMount == 'function' &&
                    (t.flags |= 4194308))
                : (typeof s.componentDidMount == 'function' &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = n),
                  (t.memoizedState = u)),
              (s.props = n),
              (s.state = u),
              (s.context = l),
              (n = i))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (n = !1));
      } else {
        (s = t.stateNode),
          Fd(e, t),
          (i = t.memoizedProps),
          (l = t.type === t.elementType ? i : mt(t.type, i)),
          (s.props = l),
          (p = t.pendingProps),
          (g = s.context),
          (u = r.contextType),
          typeof u == 'object' && u !== null
            ? (u = at(u))
            : ((u = Ue(r) ? Mr : Re.current), (u = jn(t, u)));
        var k = r.getDerivedStateFromProps;
        (c =
          typeof k == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((i !== p || g !== u) && gm(t, s, n, u)),
          (er = !1),
          (g = t.memoizedState),
          (s.state = g),
          gs(t, n, s, o);
        var h = t.memoizedState;
        i !== p || g !== h || Be.current || er
          ? (typeof k == 'function' && (Mu(t, r, k, n), (h = t.memoizedState)),
            (l = er || hm(t, r, l, n, g, h, u) || !1)
              ? (c ||
                  (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                    typeof s.componentWillUpdate != 'function') ||
                  (typeof s.componentWillUpdate == 'function' &&
                    s.componentWillUpdate(n, h, u),
                  typeof s.UNSAFE_componentWillUpdate == 'function' &&
                    s.UNSAFE_componentWillUpdate(n, h, u)),
                typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == 'function' &&
                  (t.flags |= 1024))
              : (typeof s.componentDidUpdate != 'function' ||
                  (i === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != 'function' ||
                  (i === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = n),
                (t.memoizedState = h)),
            (s.props = n),
            (s.state = h),
            (s.context = u),
            (n = l))
          : (typeof s.componentDidUpdate != 'function' ||
              (i === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (i === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (n = !1));
      }
      return $u(e, t, r, n, a, o);
    }
    function $u(e, t, r, n, o, a) {
      cf(e, t);
      var s = (t.flags & 128) !== 0;
      if (!n && !s) return o && im(t, r, !1), Ut(e, t, a);
      (n = t.stateNode), (gv.current = t);
      var i =
        s && typeof r.getDerivedStateFromError != 'function'
          ? null
          : n.render();
      return (
        (t.flags |= 1),
        e !== null && s
          ? ((t.child = wn(t, e.child, null, a)), (t.child = wn(t, null, i, a)))
          : Ie(e, t, i, a),
        (t.memoizedState = n.state),
        o && im(t, r, !0),
        t.child
      );
    }
    function pf(e) {
      var t = e.stateNode;
      t.pendingContext
        ? sm(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && sm(e, t.context, !1),
        Sl(e, t.containerInfo);
    }
    function Em(e, t, r, n, o) {
      return bn(), vl(o), (t.flags |= 256), Ie(e, t, r, n), t.child;
    }
    var Hu = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Wu(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function mf(e, t, r) {
      var n = t.pendingProps,
        o = re.current,
        a = !1,
        s = (t.flags & 128) !== 0,
        i;
      if (
        ((i = s) ||
          (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        i
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (o |= 1),
        X(re, o & 1),
        e === null)
      )
        return (
          Fu(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === '$!'
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((s = n.children),
              (e = n.fallback),
              a
                ? ((n = t.mode),
                  (a = t.child),
                  (s = { mode: 'hidden', children: s }),
                  !(n & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = s))
                    : (a = Ds(s, n, 0, null)),
                  (e = Nr(e, n, r, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = Wu(r)),
                  (t.memoizedState = Hu),
                  e)
                : Ll(t, s))
        );
      if (
        ((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null))
      )
        return yv(e, t, s, n, i, o, r);
      if (a) {
        (a = n.fallback), (s = t.mode), (o = e.child), (i = o.sibling);
        var u = { mode: 'hidden', children: n.children };
        return (
          !(s & 1) && t.child !== o
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = u),
              (t.deletions = null))
            : ((n = mr(o, u)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
          i !== null
            ? (a = mr(i, a))
            : ((a = Nr(a, s, r, null)), (a.flags |= 2)),
          (a.return = t),
          (n.return = t),
          (n.sibling = a),
          (t.child = n),
          (n = a),
          (a = t.child),
          (s = e.child.memoizedState),
          (s =
            s === null
              ? Wu(r)
              : {
                  baseLanes: s.baseLanes | r,
                  cachePool: null,
                  transitions: s.transitions,
                }),
          (a.memoizedState = s),
          (a.childLanes = e.childLanes & ~r),
          (t.memoizedState = Hu),
          n
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (n = mr(a, { mode: 'visible', children: n.children })),
        !(t.mode & 1) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n
      );
    }
    function Ll(e, t) {
      return (
        (t = Ds({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Ua(e, t, r, n) {
      return (
        n !== null && vl(n),
        wn(t, e.child, null, r),
        (e = Ll(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function yv(e, t, r, n, o, a, s) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (n = au(Error(O(422)))), Ua(e, t, s, n))
          : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((a = n.fallback),
              (o = t.mode),
              (n = Ds({ mode: 'visible', children: n.children }, o, 0, null)),
              (a = Nr(a, o, s, null)),
              (a.flags |= 2),
              (n.return = t),
              (a.return = t),
              (n.sibling = a),
              (t.child = n),
              t.mode & 1 && wn(t, e.child, null, s),
              (t.child.memoizedState = Wu(s)),
              (t.memoizedState = Hu),
              a);
      if (!(t.mode & 1)) return Ua(e, t, s, null);
      if (o.data === '$!') {
        if (((n = o.nextSibling && o.nextSibling.dataset), n)) var i = n.dgst;
        return (
          (n = i), (a = Error(O(419))), (n = au(a, n, void 0)), Ua(e, t, s, n)
        );
      }
      if (((i = (s & e.childLanes) !== 0), qe || i)) {
        if (((n = ve), n !== null)) {
          switch (s & -s) {
            case 4:
              o = 2;
              break;
            case 16:
              o = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              o = 32;
              break;
            case 536870912:
              o = 268435456;
              break;
            default:
              o = 0;
          }
          (o = o & (n.suspendedLanes | s) ? 0 : o),
            o !== 0 &&
              o !== a.retryLane &&
              ((a.retryLane = o), Bt(e, o), gt(n, e, o, -1));
        }
        return Ml(), (n = au(Error(O(421)))), Ua(e, t, s, n);
      }
      return o.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Rv.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = a.treeContext),
          (Ve = ur(o.nextSibling)),
          (Ge = t),
          (te = !0),
          (ft = null),
          e !== null &&
            ((tt[rt++] = It),
            (tt[rt++] = Ft),
            (tt[rt++] = qr),
            (It = e.id),
            (Ft = e.overflow),
            (qr = t)),
          (t = Ll(t, n.children)),
          (t.flags |= 4096),
          t);
    }
    function xm(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), Nu(e.return, t, r);
    }
    function su(e, t, r, n, o) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailMode: o,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = n),
          (a.tail = r),
          (a.tailMode = o));
    }
    function df(e, t, r) {
      var n = t.pendingProps,
        o = n.revealOrder,
        a = n.tail;
      if ((Ie(e, t, n.children, r), (n = re.current), n & 2))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && xm(e, r, t);
            else if (e.tag === 19) xm(e, r, t);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      if ((X(re, n), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (o) {
          case 'forwards':
            for (r = t.child, o = null; r !== null; )
              (e = r.alternate),
                e !== null && ys(e) === null && (o = r),
                (r = r.sibling);
            (r = o),
              r === null
                ? ((o = t.child), (t.child = null))
                : ((o = r.sibling), (r.sibling = null)),
              su(t, !1, o, r, a);
            break;
          case 'backwards':
            for (r = null, o = t.child, t.child = null; o !== null; ) {
              if (((e = o.alternate), e !== null && ys(e) === null)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = r), (r = o), (o = e);
            }
            su(t, !0, r, null, a);
            break;
          case 'together':
            su(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Qa(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Ut(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ur |= t.lanes),
        !(r & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(O(153));
      if (t.child !== null) {
        for (
          e = t.child, r = mr(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (r = r.sibling = mr(e, e.pendingProps)),
            (r.return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function kv(e, t, r) {
      switch (t.tag) {
        case 3:
          pf(t), bn();
          break;
        case 5:
          Nd(t);
          break;
        case 1:
          Ue(t.type) && ps(t);
          break;
        case 4:
          Sl(t, t.stateNode.containerInfo);
          break;
        case 10:
          var n = t.type._context,
            o = t.memoizedProps.value;
          X(fs, n._currentValue), (n._currentValue = o);
          break;
        case 13:
          if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
              ? (X(re, re.current & 1), (t.flags |= 128), null)
              : r & t.child.childLanes
                ? mf(e, t, r)
                : (X(re, re.current & 1),
                  (e = Ut(e, t, r)),
                  e !== null ? e.sibling : null);
          X(re, re.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return df(e, t, r);
            t.flags |= 128;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            X(re, re.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), lf(e, t, r);
      }
      return Ut(e, t, r);
    }
    var ff, Vu, hf, gf;
    ff = function (e, t) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
          (r.child.return = r), (r = r.child);
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    };
    Vu = function () {};
    hf = function (e, t, r, n) {
      var o = e.memoizedProps;
      if (o !== n) {
        (e = t.stateNode), Ir(_t.current);
        var a = null;
        switch (r) {
          case 'input':
            (o = fu(e, o)), (n = fu(e, n)), (a = []);
            break;
          case 'select':
            (o = oe({}, o, { value: void 0 })),
              (n = oe({}, n, { value: void 0 })),
              (a = []);
            break;
          case 'textarea':
            (o = yu(e, o)), (n = yu(e, n)), (a = []);
            break;
          default:
            typeof o.onClick != 'function' &&
              typeof n.onClick == 'function' &&
              (e.onclick = ls);
        }
        vu(r, n);
        var s;
        r = null;
        for (l in o)
          if (!n.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
            if (l === 'style') {
              var i = o[l];
              for (s in i) i.hasOwnProperty(s) && (r || (r = {}), (r[s] = ''));
            } else
              l !== 'dangerouslySetInnerHTML' &&
                l !== 'children' &&
                l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                l !== 'autoFocus' &&
                (bo.hasOwnProperty(l)
                  ? a || (a = [])
                  : (a = a || []).push(l, null));
        for (l in n) {
          var u = n[l];
          if (
            ((i = o?.[l]),
            n.hasOwnProperty(l) && u !== i && (u != null || i != null))
          )
            if (l === 'style')
              if (i) {
                for (s in i)
                  !i.hasOwnProperty(s) ||
                    (u && u.hasOwnProperty(s)) ||
                    (r || (r = {}), (r[s] = ''));
                for (s in u)
                  u.hasOwnProperty(s) &&
                    i[s] !== u[s] &&
                    (r || (r = {}), (r[s] = u[s]));
              } else r || (a || (a = []), a.push(l, r)), (r = u);
            else
              l === 'dangerouslySetInnerHTML'
                ? ((u = u ? u.__html : void 0),
                  (i = i ? i.__html : void 0),
                  u != null && i !== u && (a = a || []).push(l, u))
                : l === 'children'
                  ? (typeof u != 'string' && typeof u != 'number') ||
                    (a = a || []).push(l, '' + u)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    (bo.hasOwnProperty(l)
                      ? (u != null && l === 'onScroll' && Q('scroll', e),
                        a || i === u || (a = []))
                      : (a = a || []).push(l, u));
        }
        r && (a = a || []).push('style', r);
        var l = a;
        (t.updateQueue = l) && (t.flags |= 4);
      }
    };
    gf = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    };
    function oo(e, t) {
      if (!te)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail;
            for (var r = null; t !== null; )
              t.alternate !== null && (r = t), (t = t.sibling);
            r === null ? (e.tail = null) : (r.sibling = null);
            break;
          case 'collapsed':
            r = e.tail;
            for (var n = null; r !== null; )
              r.alternate !== null && (n = r), (r = r.sibling);
            n === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (n.sibling = null);
        }
    }
    function ze(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
      if (t)
        for (var o = e.child; o !== null; )
          (r |= o.lanes | o.childLanes),
            (n |= o.subtreeFlags & 14680064),
            (n |= o.flags & 14680064),
            (o.return = e),
            (o = o.sibling);
      else
        for (o = e.child; o !== null; )
          (r |= o.lanes | o.childLanes),
            (n |= o.subtreeFlags),
            (n |= o.flags),
            (o.return = e),
            (o = o.sibling);
      return (e.subtreeFlags |= n), (e.childLanes = r), t;
    }
    function vv(e, t, r) {
      var n = t.pendingProps;
      switch ((kl(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ze(t), null;
        case 1:
          return Ue(t.type) && cs(), ze(t), null;
        case 3:
          return (
            (n = t.stateNode),
            En(),
            Y(Be),
            Y(Re),
            _l(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (qa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), ft !== null && (el(ft), (ft = null)))),
            Vu(e, t),
            ze(t),
            null
          );
        case 5:
          Cl(t);
          var o = Ir(Lo.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            hf(e, t, r, n, o),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(O(166));
              return ze(t), null;
            }
            if (((e = Ir(_t.current)), qa(t))) {
              (n = t.stateNode), (r = t.type);
              var a = t.memoizedProps;
              switch (((n[St] = t), (n[Po] = a), (e = (t.mode & 1) !== 0), r)) {
                case 'dialog':
                  Q('cancel', n), Q('close', n);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  Q('load', n);
                  break;
                case 'video':
                case 'audio':
                  for (o = 0; o < co.length; o++) Q(co[o], n);
                  break;
                case 'source':
                  Q('error', n);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Q('error', n), Q('load', n);
                  break;
                case 'details':
                  Q('toggle', n);
                  break;
                case 'input':
                  Op(n, a), Q('invalid', n);
                  break;
                case 'select':
                  (n._wrapperState = { wasMultiple: !!a.multiple }),
                    Q('invalid', n);
                  break;
                case 'textarea':
                  Tp(n, a), Q('invalid', n);
              }
              vu(r, a), (o = null);
              for (var s in a)
                if (a.hasOwnProperty(s)) {
                  var i = a[s];
                  s === 'children'
                    ? typeof i == 'string'
                      ? n.textContent !== i &&
                        (a.suppressHydrationWarning !== !0 &&
                          Ma(n.textContent, i, e),
                        (o = ['children', i]))
                      : typeof i == 'number' &&
                        n.textContent !== '' + i &&
                        (a.suppressHydrationWarning !== !0 &&
                          Ma(n.textContent, i, e),
                        (o = ['children', '' + i]))
                    : bo.hasOwnProperty(s) &&
                      i != null &&
                      s === 'onScroll' &&
                      Q('scroll', n);
                }
              switch (r) {
                case 'input':
                  _a(n), Lp(n, a, !0);
                  break;
                case 'textarea':
                  _a(n), Dp(n);
                  break;
                case 'select':
                case 'option':
                  break;
                default:
                  typeof a.onClick == 'function' && (n.onclick = ls);
              }
              (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
              (s = o.nodeType === 9 ? o : o.ownerDocument),
                e === 'http://www.w3.org/1999/xhtml' && (e = $m(r)),
                e === 'http://www.w3.org/1999/xhtml'
                  ? r === 'script'
                    ? ((e = s.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)))
                    : typeof n.is == 'string'
                      ? (e = s.createElement(r, { is: n.is }))
                      : ((e = s.createElement(r)),
                        r === 'select' &&
                          ((s = e),
                          n.multiple
                            ? (s.multiple = !0)
                            : n.size && (s.size = n.size)))
                  : (e = s.createElementNS(e, r)),
                (e[St] = t),
                (e[Po] = n),
                ff(e, t, !1, !1),
                (t.stateNode = e);
              e: {
                switch (((s = ju(r, n)), r)) {
                  case 'dialog':
                    Q('cancel', e), Q('close', e), (o = n);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Q('load', e), (o = n);
                    break;
                  case 'video':
                  case 'audio':
                    for (o = 0; o < co.length; o++) Q(co[o], e);
                    o = n;
                    break;
                  case 'source':
                    Q('error', e), (o = n);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Q('error', e), Q('load', e), (o = n);
                    break;
                  case 'details':
                    Q('toggle', e), (o = n);
                    break;
                  case 'input':
                    Op(e, n), (o = fu(e, n)), Q('invalid', e);
                    break;
                  case 'option':
                    o = n;
                    break;
                  case 'select':
                    (e._wrapperState = { wasMultiple: !!n.multiple }),
                      (o = oe({}, n, { value: void 0 })),
                      Q('invalid', e);
                    break;
                  case 'textarea':
                    Tp(e, n), (o = yu(e, n)), Q('invalid', e);
                    break;
                  default:
                    o = n;
                }
                vu(r, o), (i = o);
                for (a in i)
                  if (i.hasOwnProperty(a)) {
                    var u = i[a];
                    a === 'style'
                      ? Vm(e, u)
                      : a === 'dangerouslySetInnerHTML'
                        ? ((u = u ? u.__html : void 0), u != null && Hm(e, u))
                        : a === 'children'
                          ? typeof u == 'string'
                            ? (r !== 'textarea' || u !== '') && wo(e, u)
                            : typeof u == 'number' && wo(e, '' + u)
                          : a !== 'suppressContentEditableWarning' &&
                            a !== 'suppressHydrationWarning' &&
                            a !== 'autoFocus' &&
                            (bo.hasOwnProperty(a)
                              ? u != null && a === 'onScroll' && Q('scroll', e)
                              : u != null && nl(e, a, u, s));
                  }
                switch (r) {
                  case 'input':
                    _a(e), Lp(e, n, !1);
                    break;
                  case 'textarea':
                    _a(e), Dp(e);
                    break;
                  case 'option':
                    n.value != null &&
                      e.setAttribute('value', '' + dr(n.value));
                    break;
                  case 'select':
                    (e.multiple = !!n.multiple),
                      (a = n.value),
                      a != null
                        ? dn(e, !!n.multiple, a, !1)
                        : n.defaultValue != null &&
                          dn(e, !!n.multiple, n.defaultValue, !0);
                    break;
                  default:
                    typeof o.onClick == 'function' && (e.onclick = ls);
                }
                switch (r) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    n = !!n.autoFocus;
                    break e;
                  case 'img':
                    n = !0;
                    break e;
                  default:
                    n = !1;
                }
              }
              n && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return ze(t), null;
        case 6:
          if (e && t.stateNode != null) gf(e, t, e.memoizedProps, n);
          else {
            if (typeof n != 'string' && t.stateNode === null)
              throw Error(O(166));
            if (((r = Ir(Lo.current)), Ir(_t.current), qa(t))) {
              if (
                ((n = t.stateNode),
                (r = t.memoizedProps),
                (n[St] = t),
                (a = n.nodeValue !== r) && ((e = Ge), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Ma(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      Ma(n.nodeValue, r, (e.mode & 1) !== 0);
                }
              a && (t.flags |= 4);
            } else
              (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                (n[St] = t),
                (t.stateNode = n);
          }
          return ze(t), null;
        case 13:
          if (
            (Y(re),
            (n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (te && Ve !== null && t.mode & 1 && !(t.flags & 128))
              Ld(), bn(), (t.flags |= 98560), (a = !1);
            else if (((a = qa(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(O(318));
                if (
                  ((a = t.memoizedState),
                  (a = a !== null ? a.dehydrated : null),
                  !a)
                )
                  throw Error(O(317));
                a[St] = t;
              } else
                bn(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              ze(t), (a = !1);
            } else ft !== null && (el(ft), (ft = null)), (a = !0);
            if (!a) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                n &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || re.current & 1 ? ge === 0 && (ge = 3) : Ml())),
              t.updateQueue !== null && (t.flags |= 4),
              ze(t),
              null);
        case 4:
          return (
            En(),
            Vu(e, t),
            e === null && Ao(t.stateNode.containerInfo),
            ze(t),
            null
          );
        case 10:
          return wl(t.type._context), ze(t), null;
        case 17:
          return Ue(t.type) && cs(), ze(t), null;
        case 19:
          if ((Y(re), (a = t.memoizedState), a === null)) return ze(t), null;
          if (((n = (t.flags & 128) !== 0), (s = a.rendering), s === null))
            if (n) oo(a, !1);
            else {
              if (ge !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((s = ys(e)), s !== null)) {
                    for (
                      t.flags |= 128,
                        oo(a, !1),
                        n = s.updateQueue,
                        n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        n = r,
                        r = t.child;
                      r !== null;

                    )
                      (a = r),
                        (e = n),
                        (a.flags &= 14680066),
                        (s = a.alternate),
                        s === null
                          ? ((a.childLanes = 0),
                            (a.lanes = e),
                            (a.child = null),
                            (a.subtreeFlags = 0),
                            (a.memoizedProps = null),
                            (a.memoizedState = null),
                            (a.updateQueue = null),
                            (a.dependencies = null),
                            (a.stateNode = null))
                          : ((a.childLanes = s.childLanes),
                            (a.lanes = s.lanes),
                            (a.child = s.child),
                            (a.subtreeFlags = 0),
                            (a.deletions = null),
                            (a.memoizedProps = s.memoizedProps),
                            (a.memoizedState = s.memoizedState),
                            (a.updateQueue = s.updateQueue),
                            (a.type = s.type),
                            (e = s.dependencies),
                            (a.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (r = r.sibling);
                    return X(re, (re.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              a.tail !== null &&
                le() > Sn &&
                ((t.flags |= 128), (n = !0), oo(a, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = ys(s)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  oo(a, !0),
                  a.tail === null &&
                    a.tailMode === 'hidden' &&
                    !s.alternate &&
                    !te)
                )
                  return ze(t), null;
              } else
                2 * le() - a.renderingStartTime > Sn &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (n = !0), oo(a, !1), (t.lanes = 4194304));
            a.isBackwards
              ? ((s.sibling = t.child), (t.child = s))
              : ((r = a.last),
                r !== null ? (r.sibling = s) : (t.child = s),
                (a.last = s));
          }
          return a.tail !== null
            ? ((t = a.tail),
              (a.rendering = t),
              (a.tail = t.sibling),
              (a.renderingStartTime = le()),
              (t.sibling = null),
              (r = re.current),
              X(re, n ? (r & 1) | 2 : r & 1),
              t)
            : (ze(t), null);
        case 22:
        case 23:
          return (
            Nl(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
              ? We & 1073741824 &&
                (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : ze(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(O(156, t.tag));
    }
    function jv(e, t) {
      switch ((kl(t), t.tag)) {
        case 1:
          return (
            Ue(t.type) && cs(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            En(),
            Y(Be),
            Y(Re),
            _l(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return Cl(t), null;
        case 13:
          if (
            (Y(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(O(340));
            bn();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return Y(re), null;
        case 4:
          return En(), null;
        case 10:
          return wl(t.type._context), null;
        case 22:
        case 23:
          return Nl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var $a = !1,
      Ae = !1,
      bv = typeof WeakSet == 'function' ? WeakSet : Set,
      D = null;
    function pn(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == 'function')
          try {
            r(null);
          } catch (n) {
            se(e, t, n);
          }
        else r.current = null;
    }
    function Gu(e, t, r) {
      try {
        r();
      } catch (n) {
        se(e, t, n);
      }
    }
    var Sm = !1;
    function wv(e, t) {
      if (((Ru = ss), (e = jd()), gl(e))) {
        if ('selectionStart' in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
              r = n.anchorNode;
              var o = n.anchorOffset,
                a = n.focusNode;
              n = n.focusOffset;
              try {
                r.nodeType, a.nodeType;
              } catch {
                r = null;
                break e;
              }
              var s = 0,
                i = -1,
                u = -1,
                l = 0,
                c = 0,
                p = e,
                g = null;
              t: for (;;) {
                for (
                  var k;
                  p !== r || (o !== 0 && p.nodeType !== 3) || (i = s + o),
                    p !== a || (n !== 0 && p.nodeType !== 3) || (u = s + n),
                    p.nodeType === 3 && (s += p.nodeValue.length),
                    (k = p.firstChild) !== null;

                )
                  (g = p), (p = k);
                for (;;) {
                  if (p === e) break t;
                  if (
                    (g === r && ++l === o && (i = s),
                    g === a && ++c === n && (u = s),
                    (k = p.nextSibling) !== null)
                  )
                    break;
                  (p = g), (g = p.parentNode);
                }
                p = k;
              }
              r = i === -1 || u === -1 ? null : { start: i, end: u };
            } else r = null;
          }
        r = r || { start: 0, end: 0 };
      } else r = null;
      for (
        Pu = { focusedElem: e, selectionRange: r }, ss = !1, D = t;
        D !== null;

      )
        if (
          ((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          (e.return = t), (D = e);
        else
          for (; D !== null; ) {
            t = D;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var j = h.memoizedProps,
                        w = h.memoizedState,
                        d = t.stateNode,
                        m = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? j : mt(t.type, j),
                          w,
                        );
                      d.__reactInternalSnapshotBeforeUpdate = m;
                    }
                    break;
                  case 3:
                    var f = t.stateNode.containerInfo;
                    f.nodeType === 1
                      ? (f.textContent = '')
                      : f.nodeType === 9 &&
                        f.documentElement &&
                        f.removeChild(f.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(O(163));
                }
            } catch (y) {
              se(t, t.return, y);
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (D = e);
              break;
            }
            D = t.return;
          }
      return (h = Sm), (Sm = !1), h;
    }
    function ko(e, t, r) {
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var o = (n = n.next);
        do {
          if ((o.tag & e) === e) {
            var a = o.destroy;
            (o.destroy = void 0), a !== void 0 && Gu(t, r, a);
          }
          o = o.next;
        } while (o !== n);
      }
    }
    function Ls(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var r = (t = t.next);
        do {
          if ((r.tag & e) === e) {
            var n = r.create;
            r.destroy = n();
          }
          r = r.next;
        } while (r !== t);
      }
    }
    function Ju(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 5:
            e = r;
            break;
          default:
            e = r;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
      }
    }
    function yf(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), yf(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[St],
            delete t[Po],
            delete t[Tu],
            delete t[ov],
            delete t[av])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function kf(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Cm(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || kf(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ku(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode),
          t
            ? r.nodeType === 8
              ? r.parentNode.insertBefore(e, t)
              : r.insertBefore(e, t)
            : (r.nodeType === 8
                ? ((t = r.parentNode), t.insertBefore(e, r))
                : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = ls));
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Ku(e, t, r), e = e.sibling; e !== null; )
          Ku(e, t, r), (e = e.sibling);
    }
    function Xu(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Xu(e, t, r), e = e.sibling; e !== null; )
          Xu(e, t, r), (e = e.sibling);
    }
    var je = null,
      dt = !1;
    function Yt(e, t, r) {
      for (r = r.child; r !== null; ) vf(e, t, r), (r = r.sibling);
    }
    function vf(e, t, r) {
      if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
        try {
          Ct.onCommitFiberUnmount(Ss, r);
        } catch {}
      switch (r.tag) {
        case 5:
          Ae || pn(r, t);
        case 6:
          var n = je,
            o = dt;
          (je = null),
            Yt(e, t, r),
            (je = n),
            (dt = o),
            je !== null &&
              (dt
                ? ((e = je),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : je.removeChild(r.stateNode));
          break;
        case 18:
          je !== null &&
            (dt
              ? ((e = je),
                (r = r.stateNode),
                e.nodeType === 8
                  ? Zi(e.parentNode, r)
                  : e.nodeType === 1 && Zi(e, r),
                Co(e))
              : Zi(je, r.stateNode));
          break;
        case 4:
          (n = je),
            (o = dt),
            (je = r.stateNode.containerInfo),
            (dt = !0),
            Yt(e, t, r),
            (je = n),
            (dt = o);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !Ae &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
          ) {
            o = n = n.next;
            do {
              var a = o,
                s = a.destroy;
              (a = a.tag),
                s !== void 0 && (a & 2 || a & 4) && Gu(r, t, s),
                (o = o.next);
            } while (o !== n);
          }
          Yt(e, t, r);
          break;
        case 1:
          if (
            !Ae &&
            (pn(r, t),
            (n = r.stateNode),
            typeof n.componentWillUnmount == 'function')
          )
            try {
              (n.props = r.memoizedProps),
                (n.state = r.memoizedState),
                n.componentWillUnmount();
            } catch (i) {
              se(r, t, i);
            }
          Yt(e, t, r);
          break;
        case 21:
          Yt(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((Ae = (n = Ae) || r.memoizedState !== null),
              Yt(e, t, r),
              (Ae = n))
            : Yt(e, t, r);
          break;
        default:
          Yt(e, t, r);
      }
    }
    function _m(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new bv()),
          t.forEach(function (n) {
            var o = Pv.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(o, o));
          });
      }
    }
    function pt(e, t) {
      var r = t.deletions;
      if (r !== null)
        for (var n = 0; n < r.length; n++) {
          var o = r[n];
          try {
            var a = e,
              s = t,
              i = s;
            e: for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  (je = i.stateNode), (dt = !1);
                  break e;
                case 3:
                  (je = i.stateNode.containerInfo), (dt = !0);
                  break e;
                case 4:
                  (je = i.stateNode.containerInfo), (dt = !0);
                  break e;
              }
              i = i.return;
            }
            if (je === null) throw Error(O(160));
            vf(a, s, o), (je = null), (dt = !1);
            var u = o.alternate;
            u !== null && (u.return = null), (o.return = null);
          } catch (l) {
            se(o, t, l);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) jf(t, e), (t = t.sibling);
    }
    function jf(e, t) {
      var r = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((pt(t, e), Et(e), n & 4)) {
            try {
              ko(3, e, e.return), Ls(3, e);
            } catch (j) {
              se(e, e.return, j);
            }
            try {
              ko(5, e, e.return);
            } catch (j) {
              se(e, e.return, j);
            }
          }
          break;
        case 1:
          pt(t, e), Et(e), n & 512 && r !== null && pn(r, r.return);
          break;
        case 5:
          if (
            (pt(t, e),
            Et(e),
            n & 512 && r !== null && pn(r, r.return),
            e.flags & 32)
          ) {
            var o = e.stateNode;
            try {
              wo(o, '');
            } catch (j) {
              se(e, e.return, j);
            }
          }
          if (n & 4 && ((o = e.stateNode), o != null)) {
            var a = e.memoizedProps,
              s = r !== null ? r.memoizedProps : a,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), u !== null))
              try {
                i === 'input' &&
                  a.type === 'radio' &&
                  a.name != null &&
                  Bm(o, a),
                  ju(i, s);
                var l = ju(i, a);
                for (s = 0; s < u.length; s += 2) {
                  var c = u[s],
                    p = u[s + 1];
                  c === 'style'
                    ? Vm(o, p)
                    : c === 'dangerouslySetInnerHTML'
                      ? Hm(o, p)
                      : c === 'children'
                        ? wo(o, p)
                        : nl(o, c, p, l);
                }
                switch (i) {
                  case 'input':
                    hu(o, a);
                    break;
                  case 'textarea':
                    Um(o, a);
                    break;
                  case 'select':
                    var g = o._wrapperState.wasMultiple;
                    o._wrapperState.wasMultiple = !!a.multiple;
                    var k = a.value;
                    k != null
                      ? dn(o, !!a.multiple, k, !1)
                      : g !== !!a.multiple &&
                        (a.defaultValue != null
                          ? dn(o, !!a.multiple, a.defaultValue, !0)
                          : dn(o, !!a.multiple, a.multiple ? [] : '', !1));
                }
                o[Po] = a;
              } catch (j) {
                se(e, e.return, j);
              }
          }
          break;
        case 6:
          if ((pt(t, e), Et(e), n & 4)) {
            if (e.stateNode === null) throw Error(O(162));
            (o = e.stateNode), (a = e.memoizedProps);
            try {
              o.nodeValue = a;
            } catch (j) {
              se(e, e.return, j);
            }
          }
          break;
        case 3:
          if (
            (pt(t, e),
            Et(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Co(t.containerInfo);
            } catch (j) {
              se(e, e.return, j);
            }
          break;
        case 4:
          pt(t, e), Et(e);
          break;
        case 13:
          pt(t, e),
            Et(e),
            (o = e.child),
            o.flags & 8192 &&
              ((a = o.memoizedState !== null),
              (o.stateNode.isHidden = a),
              !a ||
                (o.alternate !== null && o.alternate.memoizedState !== null) ||
                (Il = le())),
            n & 4 && _m(e);
          break;
        case 22:
          if (
            ((c = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((Ae = (l = Ae) || c), pt(t, e), (Ae = l)) : pt(t, e),
            Et(e),
            n & 8192)
          ) {
            if (
              ((l = e.memoizedState !== null),
              (e.stateNode.isHidden = l) && !c && e.mode & 1)
            )
              for (D = e, c = e.child; c !== null; ) {
                for (p = D = c; D !== null; ) {
                  switch (((g = D), (k = g.child), g.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ko(4, g, g.return);
                      break;
                    case 1:
                      pn(g, g.return);
                      var h = g.stateNode;
                      if (typeof h.componentWillUnmount == 'function') {
                        (n = g), (r = g.return);
                        try {
                          (t = n),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount();
                        } catch (j) {
                          se(n, r, j);
                        }
                      }
                      break;
                    case 5:
                      pn(g, g.return);
                      break;
                    case 22:
                      if (g.memoizedState !== null) {
                        Am(p);
                        continue;
                      }
                  }
                  k !== null ? ((k.return = g), (D = k)) : Am(p);
                }
                c = c.sibling;
              }
            e: for (c = null, p = e; ; ) {
              if (p.tag === 5) {
                if (c === null) {
                  c = p;
                  try {
                    (o = p.stateNode),
                      l
                        ? ((a = o.style),
                          typeof a.setProperty == 'function'
                            ? a.setProperty('display', 'none', 'important')
                            : (a.display = 'none'))
                        : ((i = p.stateNode),
                          (u = p.memoizedProps.style),
                          (s =
                            u != null && u.hasOwnProperty('display')
                              ? u.display
                              : null),
                          (i.style.display = Wm('display', s)));
                  } catch (j) {
                    se(e, e.return, j);
                  }
                }
              } else if (p.tag === 6) {
                if (c === null)
                  try {
                    p.stateNode.nodeValue = l ? '' : p.memoizedProps;
                  } catch (j) {
                    se(e, e.return, j);
                  }
              } else if (
                ((p.tag !== 22 && p.tag !== 23) ||
                  p.memoizedState === null ||
                  p === e) &&
                p.child !== null
              ) {
                (p.child.return = p), (p = p.child);
                continue;
              }
              if (p === e) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === e) break e;
                c === p && (c = null), (p = p.return);
              }
              c === p && (c = null),
                (p.sibling.return = p.return),
                (p = p.sibling);
            }
          }
          break;
        case 19:
          pt(t, e), Et(e), n & 4 && _m(e);
          break;
        case 21:
          break;
        default:
          pt(t, e), Et(e);
      }
    }
    function Et(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (kf(r)) {
                var n = r;
                break e;
              }
              r = r.return;
            }
            throw Error(O(160));
          }
          switch (n.tag) {
            case 5:
              var o = n.stateNode;
              n.flags & 32 && (wo(o, ''), (n.flags &= -33));
              var a = Cm(e);
              Xu(e, a, o);
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo,
                i = Cm(e);
              Ku(e, i, s);
              break;
            default:
              throw Error(O(161));
          }
        } catch (u) {
          se(e, e.return, u);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ev(e, t, r) {
      (D = e), bf(e, t, r);
    }
    function bf(e, t, r) {
      for (var n = (e.mode & 1) !== 0; D !== null; ) {
        var o = D,
          a = o.child;
        if (o.tag === 22 && n) {
          var s = o.memoizedState !== null || $a;
          if (!s) {
            var i = o.alternate,
              u = (i !== null && i.memoizedState !== null) || Ae;
            i = $a;
            var l = Ae;
            if ((($a = s), (Ae = u) && !l))
              for (D = o; D !== null; )
                (s = D),
                  (u = s.child),
                  s.tag === 22 && s.memoizedState !== null
                    ? Rm(o)
                    : u !== null
                      ? ((u.return = s), (D = u))
                      : Rm(o);
            for (; a !== null; ) (D = a), bf(a, t, r), (a = a.sibling);
            (D = o), ($a = i), (Ae = l);
          }
          zm(e, t, r);
        } else
          o.subtreeFlags & 8772 && a !== null
            ? ((a.return = o), (D = a))
            : zm(e, t, r);
      }
    }
    function zm(e) {
      for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
          var r = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ae || Ls(5, t);
                  break;
                case 1:
                  var n = t.stateNode;
                  if (t.flags & 4 && !Ae)
                    if (r === null) n.componentDidMount();
                    else {
                      var o =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : mt(t.type, r.memoizedProps);
                      n.componentDidUpdate(
                        o,
                        r.memoizedState,
                        n.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var a = t.updateQueue;
                  a !== null && mm(t, a, n);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((r = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                    mm(t, s, r);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (r === null && t.flags & 4) {
                    r = i;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        u.autoFocus && r.focus();
                        break;
                      case 'img':
                        u.src && (r.src = u.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var l = t.alternate;
                    if (l !== null) {
                      var c = l.memoizedState;
                      if (c !== null) {
                        var p = c.dehydrated;
                        p !== null && Co(p);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(O(163));
              }
            Ae || (t.flags & 512 && Ju(t));
          } catch (g) {
            se(t, t.return, g);
          }
        }
        if (t === e) {
          D = null;
          break;
        }
        if (((r = t.sibling), r !== null)) {
          (r.return = t.return), (D = r);
          break;
        }
        D = t.return;
      }
    }
    function Am(e) {
      for (; D !== null; ) {
        var t = D;
        if (t === e) {
          D = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          (r.return = t.return), (D = r);
          break;
        }
        D = t.return;
      }
    }
    function Rm(e) {
      for (; D !== null; ) {
        var t = D;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Ls(4, t);
              } catch (u) {
                se(t, r, u);
              }
              break;
            case 1:
              var n = t.stateNode;
              if (typeof n.componentDidMount == 'function') {
                var o = t.return;
                try {
                  n.componentDidMount();
                } catch (u) {
                  se(t, o, u);
                }
              }
              var a = t.return;
              try {
                Ju(t);
              } catch (u) {
                se(t, a, u);
              }
              break;
            case 5:
              var s = t.return;
              try {
                Ju(t);
              } catch (u) {
                se(t, s, u);
              }
          }
        } catch (u) {
          se(t, t.return, u);
        }
        if (t === e) {
          D = null;
          break;
        }
        var i = t.sibling;
        if (i !== null) {
          (i.return = t.return), (D = i);
          break;
        }
        D = t.return;
      }
    }
    var xv = Math.ceil,
      js = $t.ReactCurrentDispatcher,
      Tl = $t.ReactCurrentOwner,
      ot = $t.ReactCurrentBatchConfig,
      H = 0,
      ve = null,
      me = null,
      be = 0,
      We = 0,
      mn = gr(0),
      ge = 0,
      Fo = null,
      Ur = 0,
      Ts = 0,
      Dl = 0,
      vo = null,
      Me = null,
      Il = 0,
      Sn = 1 / 0,
      Tt = null,
      bs = !1,
      Qu = null,
      cr = null,
      Ha = !1,
      or = null,
      ws = 0,
      jo = 0,
      Yu = null,
      Ya = -1,
      Za = 0;
    function Fe() {
      return H & 6 ? le() : Ya !== -1 ? Ya : (Ya = le());
    }
    function pr(e) {
      return e.mode & 1
        ? H & 2 && be !== 0
          ? be & -be
          : iv.transition !== null
            ? (Za === 0 && (Za = od()), Za)
            : ((e = G),
              e !== 0 ||
                ((e = window.event), (e = e === void 0 ? 16 : pd(e.type))),
              e)
        : 1;
    }
    function gt(e, t, r, n) {
      if (50 < jo) throw ((jo = 0), (Yu = null), Error(O(185)));
      No(e, r, n),
        (!(H & 2) || e !== ve) &&
          (e === ve && (!(H & 2) && (Ts |= r), ge === 4 && rr(e, be)),
          $e(e, n),
          r === 1 &&
            H === 0 &&
            !(t.mode & 1) &&
            ((Sn = le() + 500), Rs && yr()));
    }
    function $e(e, t) {
      var r = e.callbackNode;
      lk(e, t);
      var n = as(e, e === ve ? be : 0);
      if (n === 0)
        r !== null && Np(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = n & -n), e.callbackPriority !== t)) {
        if ((r != null && Np(r), t === 1))
          e.tag === 0 ? sv(Pm.bind(null, e)) : Rd(Pm.bind(null, e)),
            rv(function () {
              !(H & 6) && yr();
            }),
            (r = null);
        else {
          switch (ad(n)) {
            case 1:
              r = ul;
              break;
            case 4:
              r = rd;
              break;
            case 16:
              r = os;
              break;
            case 536870912:
              r = nd;
              break;
            default:
              r = os;
          }
          r = Af(r, wf.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function wf(e, t) {
      if (((Ya = -1), (Za = 0), H & 6)) throw Error(O(327));
      var r = e.callbackNode;
      if (kn() && e.callbackNode !== r) return null;
      var n = as(e, e === ve ? be : 0);
      if (n === 0) return null;
      if (n & 30 || n & e.expiredLanes || t) t = Es(e, n);
      else {
        t = n;
        var o = H;
        H |= 2;
        var a = xf();
        (ve !== e || be !== t) && ((Tt = null), (Sn = le() + 500), Fr(e, t));
        do
          try {
            _v();
            break;
          } catch (i) {
            Ef(e, i);
          }
        while (!0);
        bl(),
          (js.current = a),
          (H = o),
          me !== null ? (t = 0) : ((ve = null), (be = 0), (t = ge));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((o = Su(e)), o !== 0 && ((n = o), (t = Zu(e, o)))),
          t === 1)
        )
          throw ((r = Fo), Fr(e, 0), rr(e, n), $e(e, le()), r);
        if (t === 6) rr(e, n);
        else {
          if (
            ((o = e.current.alternate),
            !(n & 30) &&
              !Sv(o) &&
              ((t = Es(e, n)),
              t === 2 && ((a = Su(e)), a !== 0 && ((n = a), (t = Zu(e, a)))),
              t === 1))
          )
            throw ((r = Fo), Fr(e, 0), rr(e, n), $e(e, le()), r);
          switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
              throw Error(O(345));
            case 2:
              Lr(e, Me, Tt);
              break;
            case 3:
              if (
                (rr(e, n),
                (n & 130023424) === n && ((t = Il + 500 - le()), 10 < t))
              ) {
                if (as(e, 0) !== 0) break;
                if (((o = e.suspendedLanes), (o & n) !== n)) {
                  Fe(), (e.pingedLanes |= e.suspendedLanes & o);
                  break;
                }
                e.timeoutHandle = Lu(Lr.bind(null, e, Me, Tt), t);
                break;
              }
              Lr(e, Me, Tt);
              break;
            case 4:
              if ((rr(e, n), (n & 4194240) === n)) break;
              for (t = e.eventTimes, o = -1; 0 < n; ) {
                var s = 31 - ht(n);
                (a = 1 << s), (s = t[s]), s > o && (o = s), (n &= ~a);
              }
              if (
                ((n = o),
                (n = le() - n),
                (n =
                  (120 > n
                    ? 120
                    : 480 > n
                      ? 480
                      : 1080 > n
                        ? 1080
                        : 1920 > n
                          ? 1920
                          : 3e3 > n
                            ? 3e3
                            : 4320 > n
                              ? 4320
                              : 1960 * xv(n / 1960)) - n),
                10 < n)
              ) {
                e.timeoutHandle = Lu(Lr.bind(null, e, Me, Tt), n);
                break;
              }
              Lr(e, Me, Tt);
              break;
            case 5:
              Lr(e, Me, Tt);
              break;
            default:
              throw Error(O(329));
          }
        }
      }
      return $e(e, le()), e.callbackNode === r ? wf.bind(null, e) : null;
    }
    function Zu(e, t) {
      var r = vo;
      return (
        e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256),
        (e = Es(e, t)),
        e !== 2 && ((t = Me), (Me = r), t !== null && el(t)),
        e
      );
    }
    function el(e) {
      Me === null ? (Me = e) : Me.push.apply(Me, e);
    }
    function Sv(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
              var o = r[n],
                a = o.getSnapshot;
              o = o.value;
              try {
                if (!yt(a(), o)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
          (r.return = t), (t = r);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function rr(e, t) {
      for (
        t &= ~Dl,
          t &= ~Ts,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var r = 31 - ht(t),
          n = 1 << r;
        (e[r] = -1), (t &= ~n);
      }
    }
    function Pm(e) {
      if (H & 6) throw Error(O(327));
      kn();
      var t = as(e, 0);
      if (!(t & 1)) return $e(e, le()), null;
      var r = Es(e, t);
      if (e.tag !== 0 && r === 2) {
        var n = Su(e);
        n !== 0 && ((t = n), (r = Zu(e, n)));
      }
      if (r === 1) throw ((r = Fo), Fr(e, 0), rr(e, t), $e(e, le()), r);
      if (r === 6) throw Error(O(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Lr(e, Me, Tt),
        $e(e, le()),
        null
      );
    }
    function Fl(e, t) {
      var r = H;
      H |= 1;
      try {
        return e(t);
      } finally {
        (H = r), H === 0 && ((Sn = le() + 500), Rs && yr());
      }
    }
    function $r(e) {
      or !== null && or.tag === 0 && !(H & 6) && kn();
      var t = H;
      H |= 1;
      var r = ot.transition,
        n = G;
      try {
        if (((ot.transition = null), (G = 1), e)) return e();
      } finally {
        (G = n), (ot.transition = r), (H = t), !(H & 6) && yr();
      }
    }
    function Nl() {
      (We = mn.current), Y(mn);
    }
    function Fr(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), tv(r)), me !== null))
        for (r = me.return; r !== null; ) {
          var n = r;
          switch ((kl(n), n.tag)) {
            case 1:
              (n = n.type.childContextTypes), n != null && cs();
              break;
            case 3:
              En(), Y(Be), Y(Re), _l();
              break;
            case 5:
              Cl(n);
              break;
            case 4:
              En();
              break;
            case 13:
              Y(re);
              break;
            case 19:
              Y(re);
              break;
            case 10:
              wl(n.type._context);
              break;
            case 22:
            case 23:
              Nl();
          }
          r = r.return;
        }
      if (
        ((ve = e),
        (me = e = mr(e.current, null)),
        (be = We = t),
        (ge = 0),
        (Fo = null),
        (Dl = Ts = Ur = 0),
        (Me = vo = null),
        Dr !== null)
      ) {
        for (t = 0; t < Dr.length; t++)
          if (((r = Dr[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var o = n.next,
              a = r.pending;
            if (a !== null) {
              var s = a.next;
              (a.next = o), (n.next = s);
            }
            r.pending = n;
          }
        Dr = null;
      }
      return e;
    }
    function Ef(e, t) {
      do {
        var r = me;
        try {
          if ((bl(), (Ka.current = vs), ks)) {
            for (var n = ne.memoizedState; n !== null; ) {
              var o = n.queue;
              o !== null && (o.pending = null), (n = n.next);
            }
            ks = !1;
          }
          if (
            ((Br = 0),
            (ke = he = ne = null),
            (yo = !1),
            (To = 0),
            (Tl.current = null),
            r === null || r.return === null)
          ) {
            (ge = 1), (Fo = t), (me = null);
            break;
          }
          e: {
            var a = e,
              s = r.return,
              i = r,
              u = t;
            if (
              ((t = be),
              (i.flags |= 32768),
              u !== null && typeof u == 'object' && typeof u.then == 'function')
            ) {
              var l = u,
                c = i,
                p = c.tag;
              if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                var g = c.alternate;
                g
                  ? ((c.updateQueue = g.updateQueue),
                    (c.memoizedState = g.memoizedState),
                    (c.lanes = g.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var k = km(s);
              if (k !== null) {
                (k.flags &= -257),
                  vm(k, s, i, a, t),
                  k.mode & 1 && ym(a, l, t),
                  (t = k),
                  (u = l);
                var h = t.updateQueue;
                if (h === null) {
                  var j = new Set();
                  j.add(u), (t.updateQueue = j);
                } else h.add(u);
                break e;
              } else {
                if (!(t & 1)) {
                  ym(a, l, t), Ml();
                  break e;
                }
                u = Error(O(426));
              }
            } else if (te && i.mode & 1) {
              var w = km(s);
              if (w !== null) {
                !(w.flags & 65536) && (w.flags |= 256),
                  vm(w, s, i, a, t),
                  vl(xn(u, i));
                break e;
              }
            }
            (a = u = xn(u, i)),
              ge !== 4 && (ge = 2),
              vo === null ? (vo = [a]) : vo.push(a),
              (a = s);
            do {
              switch (a.tag) {
                case 3:
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var d = af(a, u, t);
                  pm(a, d);
                  break e;
                case 1:
                  i = u;
                  var m = a.type,
                    f = a.stateNode;
                  if (
                    !(a.flags & 128) &&
                    (typeof m.getDerivedStateFromError == 'function' ||
                      (f !== null &&
                        typeof f.componentDidCatch == 'function' &&
                        (cr === null || !cr.has(f))))
                  ) {
                    (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                    var y = sf(a, i, t);
                    pm(a, y);
                    break e;
                  }
              }
              a = a.return;
            } while (a !== null);
          }
          Cf(r);
        } catch (b) {
          (t = b), me === r && r !== null && (me = r = r.return);
          continue;
        }
        break;
      } while (!0);
    }
    function xf() {
      var e = js.current;
      return (js.current = vs), e === null ? vs : e;
    }
    function Ml() {
      (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
        ve === null || (!(Ur & 268435455) && !(Ts & 268435455)) || rr(ve, be);
    }
    function Es(e, t) {
      var r = H;
      H |= 2;
      var n = xf();
      (ve !== e || be !== t) && ((Tt = null), Fr(e, t));
      do
        try {
          Cv();
          break;
        } catch (o) {
          Ef(e, o);
        }
      while (!0);
      if ((bl(), (H = r), (js.current = n), me !== null)) throw Error(O(261));
      return (ve = null), (be = 0), ge;
    }
    function Cv() {
      for (; me !== null; ) Sf(me);
    }
    function _v() {
      for (; me !== null && !ek(); ) Sf(me);
    }
    function Sf(e) {
      var t = zf(e.alternate, e, We);
      (e.memoizedProps = e.pendingProps),
        t === null ? Cf(e) : (me = t),
        (Tl.current = null);
    }
    function Cf(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((r = jv(r, t)), r !== null)) {
            (r.flags &= 32767), (me = r);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (ge = 6), (me = null);
            return;
          }
        } else if (((r = vv(r, t, We)), r !== null)) {
          me = r;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          me = t;
          return;
        }
        me = t = e;
      } while (t !== null);
      ge === 0 && (ge = 5);
    }
    function Lr(e, t, r) {
      var n = G,
        o = ot.transition;
      try {
        (ot.transition = null), (G = 1), zv(e, t, r, n);
      } finally {
        (ot.transition = o), (G = n);
      }
      return null;
    }
    function zv(e, t, r, n) {
      do kn();
      while (or !== null);
      if (H & 6) throw Error(O(327));
      r = e.finishedWork;
      var o = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(O(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var a = r.lanes | r.childLanes;
      if (
        (ck(e, a),
        e === ve && ((me = ve = null), (be = 0)),
        (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
          Ha ||
          ((Ha = !0),
          Af(os, function () {
            return kn(), null;
          })),
        (a = (r.flags & 15990) !== 0),
        r.subtreeFlags & 15990 || a)
      ) {
        (a = ot.transition), (ot.transition = null);
        var s = G;
        G = 1;
        var i = H;
        (H |= 4),
          (Tl.current = null),
          wv(e, r),
          jf(r, e),
          Xk(Pu),
          (ss = !!Ru),
          (Pu = Ru = null),
          (e.current = r),
          Ev(r, e, o),
          tk(),
          (H = i),
          (G = s),
          (ot.transition = a);
      } else e.current = r;
      if (
        (Ha && ((Ha = !1), (or = e), (ws = o)),
        (a = e.pendingLanes),
        a === 0 && (cr = null),
        ok(r.stateNode, n),
        $e(e, le()),
        t !== null)
      )
        for (n = e.onRecoverableError, r = 0; r < t.length; r++)
          (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
      if (bs) throw ((bs = !1), (e = Qu), (Qu = null), e);
      return (
        ws & 1 && e.tag !== 0 && kn(),
        (a = e.pendingLanes),
        a & 1 ? (e === Yu ? jo++ : ((jo = 0), (Yu = e))) : (jo = 0),
        yr(),
        null
      );
    }
    function kn() {
      if (or !== null) {
        var e = ad(ws),
          t = ot.transition,
          r = G;
        try {
          if (((ot.transition = null), (G = 16 > e ? 16 : e), or === null))
            var n = !1;
          else {
            if (((e = or), (or = null), (ws = 0), H & 6)) throw Error(O(331));
            var o = H;
            for (H |= 4, D = e.current; D !== null; ) {
              var a = D,
                s = a.child;
              if (D.flags & 16) {
                var i = a.deletions;
                if (i !== null) {
                  for (var u = 0; u < i.length; u++) {
                    var l = i[u];
                    for (D = l; D !== null; ) {
                      var c = D;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ko(8, c, a);
                      }
                      var p = c.child;
                      if (p !== null) (p.return = c), (D = p);
                      else
                        for (; D !== null; ) {
                          c = D;
                          var g = c.sibling,
                            k = c.return;
                          if ((yf(c), c === l)) {
                            D = null;
                            break;
                          }
                          if (g !== null) {
                            (g.return = k), (D = g);
                            break;
                          }
                          D = k;
                        }
                    }
                  }
                  var h = a.alternate;
                  if (h !== null) {
                    var j = h.child;
                    if (j !== null) {
                      h.child = null;
                      do {
                        var w = j.sibling;
                        (j.sibling = null), (j = w);
                      } while (j !== null);
                    }
                  }
                  D = a;
                }
              }
              if (a.subtreeFlags & 2064 && s !== null) (s.return = a), (D = s);
              else
                e: for (; D !== null; ) {
                  if (((a = D), a.flags & 2048))
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ko(9, a, a.return);
                    }
                  var d = a.sibling;
                  if (d !== null) {
                    (d.return = a.return), (D = d);
                    break e;
                  }
                  D = a.return;
                }
            }
            var m = e.current;
            for (D = m; D !== null; ) {
              s = D;
              var f = s.child;
              if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (D = f);
              else
                e: for (s = m; D !== null; ) {
                  if (((i = D), i.flags & 2048))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ls(9, i);
                      }
                    } catch (b) {
                      se(i, i.return, b);
                    }
                  if (i === s) {
                    D = null;
                    break e;
                  }
                  var y = i.sibling;
                  if (y !== null) {
                    (y.return = i.return), (D = y);
                    break e;
                  }
                  D = i.return;
                }
            }
            if (
              ((H = o),
              yr(),
              Ct && typeof Ct.onPostCommitFiberRoot == 'function')
            )
              try {
                Ct.onPostCommitFiberRoot(Ss, e);
              } catch {}
            n = !0;
          }
          return n;
        } finally {
          (G = r), (ot.transition = t);
        }
      }
      return !1;
    }
    function Om(e, t, r) {
      (t = xn(r, t)),
        (t = af(e, t, 1)),
        (e = lr(e, t, 1)),
        (t = Fe()),
        e !== null && (No(e, 1, t), $e(e, t));
    }
    function se(e, t, r) {
      if (e.tag === 3) Om(e, e, r);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Om(t, e, r);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == 'function' ||
              (typeof n.componentDidCatch == 'function' &&
                (cr === null || !cr.has(n)))
            ) {
              (e = xn(r, e)),
                (e = sf(t, e, 1)),
                (t = lr(t, e, 1)),
                (e = Fe()),
                t !== null && (No(t, 1, e), $e(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function Av(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (t = Fe()),
        (e.pingedLanes |= e.suspendedLanes & r),
        ve === e &&
          (be & r) === r &&
          (ge === 4 || (ge === 3 && (be & 130023424) === be && 500 > le() - Il)
            ? Fr(e, 0)
            : (Dl |= r)),
        $e(e, t);
    }
    function _f(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Ra), (Ra <<= 1), !(Ra & 130023424) && (Ra = 4194304))
          : (t = 1));
      var r = Fe();
      (e = Bt(e, t)), e !== null && (No(e, t, r), $e(e, r));
    }
    function Rv(e) {
      var t = e.memoizedState,
        r = 0;
      t !== null && (r = t.retryLane), _f(e, r);
    }
    function Pv(e, t) {
      var r = 0;
      switch (e.tag) {
        case 13:
          var n = e.stateNode,
            o = e.memoizedState;
          o !== null && (r = o.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        default:
          throw Error(O(314));
      }
      n !== null && n.delete(t), _f(e, r);
    }
    var zf;
    zf = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current) qe = !0;
        else {
          if (!(e.lanes & r) && !(t.flags & 128)) return (qe = !1), kv(e, t, r);
          qe = !!(e.flags & 131072);
        }
      else (qe = !1), te && t.flags & 1048576 && Pd(t, ds, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var n = t.type;
          Qa(e, t), (e = t.pendingProps);
          var o = jn(t, Re.current);
          yn(t, r), (o = Al(null, t, n, e, o, r));
          var a = Rl();
          return (
            (t.flags |= 1),
            typeof o == 'object' &&
            o !== null &&
            typeof o.render == 'function' &&
            o.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                Ue(n) ? ((a = !0), ps(t)) : (a = !1),
                (t.memoizedState =
                  o.state !== null && o.state !== void 0 ? o.state : null),
                xl(t),
                (o.updater = Os),
                (t.stateNode = o),
                (o._reactInternals = t),
                qu(t, n, e, r),
                (t = $u(null, t, n, !0, a, r)))
              : ((t.tag = 0),
                te && a && yl(t),
                Ie(null, t, o, r),
                (t = t.child)),
            t
          );
        case 16:
          n = t.elementType;
          e: {
            switch (
              (Qa(e, t),
              (e = t.pendingProps),
              (o = n._init),
              (n = o(n._payload)),
              (t.type = n),
              (o = t.tag = Lv(n)),
              (e = mt(n, e)),
              o)
            ) {
              case 0:
                t = Uu(null, t, n, e, r);
                break e;
              case 1:
                t = wm(null, t, n, e, r);
                break e;
              case 11:
                t = jm(null, t, n, e, r);
                break e;
              case 14:
                t = bm(null, t, n, mt(n.type, e), r);
                break e;
            }
            throw Error(O(306, n, ''));
          }
          return t;
        case 0:
          return (
            (n = t.type),
            (o = t.pendingProps),
            (o = t.elementType === n ? o : mt(n, o)),
            Uu(e, t, n, o, r)
          );
        case 1:
          return (
            (n = t.type),
            (o = t.pendingProps),
            (o = t.elementType === n ? o : mt(n, o)),
            wm(e, t, n, o, r)
          );
        case 3:
          e: {
            if ((pf(t), e === null)) throw Error(O(387));
            (n = t.pendingProps),
              (a = t.memoizedState),
              (o = a.element),
              Fd(e, t),
              gs(t, n, null, r);
            var s = t.memoizedState;
            if (((n = s.element), a.isDehydrated))
              if (
                ((a = {
                  element: n,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                t.flags & 256)
              ) {
                (o = xn(Error(O(423)), t)), (t = Em(e, t, n, r, o));
                break e;
              } else if (n !== o) {
                (o = xn(Error(O(424)), t)), (t = Em(e, t, n, r, o));
                break e;
              } else
                for (
                  Ve = ur(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    te = !0,
                    ft = null,
                    r = Dd(t, null, n, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
              if ((bn(), n === o)) {
                t = Ut(e, t, r);
                break e;
              }
              Ie(e, t, n, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            Nd(t),
            e === null && Fu(t),
            (n = t.type),
            (o = t.pendingProps),
            (a = e !== null ? e.memoizedProps : null),
            (s = o.children),
            Ou(n, o) ? (s = null) : a !== null && Ou(n, a) && (t.flags |= 32),
            cf(e, t),
            Ie(e, t, s, r),
            t.child
          );
        case 6:
          return e === null && Fu(t), null;
        case 13:
          return mf(e, t, r);
        case 4:
          return (
            Sl(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = wn(t, null, n, r)) : Ie(e, t, n, r),
            t.child
          );
        case 11:
          return (
            (n = t.type),
            (o = t.pendingProps),
            (o = t.elementType === n ? o : mt(n, o)),
            jm(e, t, n, o, r)
          );
        case 7:
          return Ie(e, t, t.pendingProps, r), t.child;
        case 8:
          return Ie(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return Ie(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (
              ((n = t.type._context),
              (o = t.pendingProps),
              (a = t.memoizedProps),
              (s = o.value),
              X(fs, n._currentValue),
              (n._currentValue = s),
              a !== null)
            )
              if (yt(a.value, s)) {
                if (a.children === o.children && !Be.current) {
                  t = Ut(e, t, r);
                  break e;
                }
              } else
                for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                  var i = a.dependencies;
                  if (i !== null) {
                    s = a.child;
                    for (var u = i.firstContext; u !== null; ) {
                      if (u.context === n) {
                        if (a.tag === 1) {
                          (u = Nt(-1, r & -r)), (u.tag = 2);
                          var l = a.updateQueue;
                          if (l !== null) {
                            l = l.shared;
                            var c = l.pending;
                            c === null
                              ? (u.next = u)
                              : ((u.next = c.next), (c.next = u)),
                              (l.pending = u);
                          }
                        }
                        (a.lanes |= r),
                          (u = a.alternate),
                          u !== null && (u.lanes |= r),
                          Nu(a.return, r, t),
                          (i.lanes |= r);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (a.tag === 10)
                    s = a.type === t.type ? null : a.child;
                  else if (a.tag === 18) {
                    if (((s = a.return), s === null)) throw Error(O(341));
                    (s.lanes |= r),
                      (i = s.alternate),
                      i !== null && (i.lanes |= r),
                      Nu(s, r, t),
                      (s = a.sibling);
                  } else s = a.child;
                  if (s !== null) s.return = a;
                  else
                    for (s = a; s !== null; ) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((a = s.sibling), a !== null)) {
                        (a.return = s.return), (s = a);
                        break;
                      }
                      s = s.return;
                    }
                  a = s;
                }
            Ie(e, t, o.children, r), (t = t.child);
          }
          return t;
        case 9:
          return (
            (o = t.type),
            (n = t.pendingProps.children),
            yn(t, r),
            (o = at(o)),
            (n = n(o)),
            (t.flags |= 1),
            Ie(e, t, n, r),
            t.child
          );
        case 14:
          return (
            (n = t.type),
            (o = mt(n, t.pendingProps)),
            (o = mt(n.type, o)),
            bm(e, t, n, o, r)
          );
        case 15:
          return uf(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (n = t.type),
            (o = t.pendingProps),
            (o = t.elementType === n ? o : mt(n, o)),
            Qa(e, t),
            (t.tag = 1),
            Ue(n) ? ((e = !0), ps(t)) : (e = !1),
            yn(t, r),
            of(t, n, o),
            qu(t, n, o, r),
            $u(null, t, n, !0, e, r)
          );
        case 19:
          return df(e, t, r);
        case 22:
          return lf(e, t, r);
      }
      throw Error(O(156, t.tag));
    };
    function Af(e, t) {
      return td(e, t);
    }
    function Ov(e, t, r, n) {
      (this.tag = e),
        (this.key = r),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = n),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function nt(e, t, r, n) {
      return new Ov(e, t, r, n);
    }
    function ql(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Lv(e) {
      if (typeof e == 'function') return ql(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === al)) return 11;
        if (e === sl) return 14;
      }
      return 2;
    }
    function mr(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = nt(e.tag, t, e.key, e.mode)),
            (r.elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.type = e.type),
            (r.flags = 0),
            (r.subtreeFlags = 0),
            (r.deletions = null)),
        (r.flags = e.flags & 14680064),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function es(e, t, r, n, o, a) {
      var s = 2;
      if (((n = e), typeof e == 'function')) ql(e) && (s = 1);
      else if (typeof e == 'string') s = 5;
      else
        e: switch (e) {
          case tn:
            return Nr(r.children, o, a, t);
          case ol:
            (s = 8), (o |= 8);
            break;
          case cu:
            return (
              (e = nt(12, r, t, o | 2)), (e.elementType = cu), (e.lanes = a), e
            );
          case pu:
            return (
              (e = nt(13, r, t, o)), (e.elementType = pu), (e.lanes = a), e
            );
          case mu:
            return (
              (e = nt(19, r, t, o)), (e.elementType = mu), (e.lanes = a), e
            );
          case Nm:
            return Ds(r, o, a, t);
          default:
            if (typeof e == 'object' && e !== null)
              switch (e.$$typeof) {
                case Im:
                  s = 10;
                  break e;
                case Fm:
                  s = 9;
                  break e;
                case al:
                  s = 11;
                  break e;
                case sl:
                  s = 14;
                  break e;
                case Zt:
                  (s = 16), (n = null);
                  break e;
              }
            throw Error(O(130, e == null ? e : typeof e, ''));
        }
      return (
        (t = nt(s, r, t, o)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = a),
        t
      );
    }
    function Nr(e, t, r, n) {
      return (e = nt(7, e, n, t)), (e.lanes = r), e;
    }
    function Ds(e, t, r, n) {
      return (
        (e = nt(22, e, n, t)),
        (e.elementType = Nm),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function iu(e, t, r) {
      return (e = nt(6, e, null, t)), (e.lanes = r), e;
    }
    function uu(e, t, r) {
      return (
        (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Tv(e, t, r, n, o) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Wi(0)),
        (this.expirationTimes = Wi(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Wi(0)),
        (this.identifierPrefix = n),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Bl(e, t, r, n, o, a, s, i, u) {
      return (
        (e = new Tv(e, t, r, i, u)),
        t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
        (a = nt(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        xl(a),
        e
      );
    }
    function Dv(e, t, r) {
      var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: en,
        key: n == null ? null : '' + n,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function Rf(e) {
      if (!e) return fr;
      e = e._reactInternals;
      e: {
        if (Wr(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Ue(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(O(171));
      }
      if (e.tag === 1) {
        var r = e.type;
        if (Ue(r)) return Ad(e, r, t);
      }
      return t;
    }
    function Pf(e, t, r, n, o, a, s, i, u) {
      return (
        (e = Bl(r, n, !0, e, o, a, s, i, u)),
        (e.context = Rf(null)),
        (r = e.current),
        (n = Fe()),
        (o = pr(r)),
        (a = Nt(n, o)),
        (a.callback = t ?? null),
        lr(r, a, o),
        (e.current.lanes = o),
        No(e, o, n),
        $e(e, n),
        e
      );
    }
    function Is(e, t, r, n) {
      var o = t.current,
        a = Fe(),
        s = pr(o);
      return (
        (r = Rf(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Nt(a, s)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        (e = lr(o, t, s)),
        e !== null && (gt(e, o, s, a), Ja(e, o, s)),
        s
      );
    }
    function xs(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Lm(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function Ul(e, t) {
      Lm(e, t), (e = e.alternate) && Lm(e, t);
    }
    function Iv() {
      return null;
    }
    var Of =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            console.error(e);
          };
    function $l(e) {
      this._internalRoot = e;
    }
    Fs.prototype.render = $l.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(O(409));
      Is(e, t, null, null);
    };
    Fs.prototype.unmount = $l.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $r(function () {
          Is(null, e, null, null);
        }),
          (t[qt] = null);
      }
    };
    function Fs(e) {
      this._internalRoot = e;
    }
    Fs.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ud();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < tr.length && t !== 0 && t < tr[r].priority; r++);
        tr.splice(r, 0, e), r === 0 && cd(e);
      }
    };
    function Hl(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Ns(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
      );
    }
    function Tm() {}
    function Fv(e, t, r, n, o) {
      if (o) {
        if (typeof n == 'function') {
          var a = n;
          n = function () {
            var l = xs(s);
            a.call(l);
          };
        }
        var s = Pf(t, n, e, 0, null, !1, !1, '', Tm);
        return (
          (e._reactRootContainer = s),
          (e[qt] = s.current),
          Ao(e.nodeType === 8 ? e.parentNode : e),
          $r(),
          s
        );
      }
      for (; (o = e.lastChild); ) e.removeChild(o);
      if (typeof n == 'function') {
        var i = n;
        n = function () {
          var l = xs(u);
          i.call(l);
        };
      }
      var u = Bl(e, 0, !1, null, null, !1, !1, '', Tm);
      return (
        (e._reactRootContainer = u),
        (e[qt] = u.current),
        Ao(e.nodeType === 8 ? e.parentNode : e),
        $r(function () {
          Is(t, u, r, n);
        }),
        u
      );
    }
    function Ms(e, t, r, n, o) {
      var a = r._reactRootContainer;
      if (a) {
        var s = a;
        if (typeof o == 'function') {
          var i = o;
          o = function () {
            var u = xs(s);
            i.call(u);
          };
        }
        Is(t, s, e, o);
      } else s = Fv(r, t, e, o, n);
      return xs(s);
    }
    sd = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = lo(t.pendingLanes);
            r !== 0 &&
              (ll(t, r | 1),
              $e(t, le()),
              !(H & 6) && ((Sn = le() + 500), yr()));
          }
          break;
        case 13:
          $r(function () {
            var n = Bt(e, 1);
            if (n !== null) {
              var o = Fe();
              gt(n, e, 1, o);
            }
          }),
            Ul(e, 1);
      }
    };
    cl = function (e) {
      if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
          var r = Fe();
          gt(t, e, 134217728, r);
        }
        Ul(e, 134217728);
      }
    };
    id = function (e) {
      if (e.tag === 13) {
        var t = pr(e),
          r = Bt(e, t);
        if (r !== null) {
          var n = Fe();
          gt(r, e, t, n);
        }
        Ul(e, t);
      }
    };
    ud = function () {
      return G;
    };
    ld = function (e, t) {
      var r = G;
      try {
        return (G = e), t();
      } finally {
        G = r;
      }
    };
    wu = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((hu(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n !== e && n.form === e.form) {
                var o = As(n);
                if (!o) throw Error(O(90));
                qm(n), hu(n, o);
              }
            }
          }
          break;
        case 'textarea':
          Um(e, r);
          break;
        case 'select':
          (t = r.value), t != null && dn(e, !!r.multiple, t, !1);
      }
    };
    Km = Fl;
    Xm = $r;
    var Nv = { usingClientEntryPoint: !1, Events: [qo, an, As, Gm, Jm, Fl] },
      ao = {
        findFiberByHostInstance: Tr,
        bundleType: 0,
        version: '18.3.1',
        rendererPackageName: 'react-dom',
      },
      Mv = {
        bundleType: ao.bundleType,
        version: ao.version,
        rendererPackageName: ao.rendererPackageName,
        rendererConfig: ao.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: $t.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = Zm(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: ao.findFiberByHostInstance || Iv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      ((so = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !so.isDisabled && so.supportsFiber)
    )
      try {
        (Ss = so.inject(Mv)), (Ct = so);
      } catch {}
    var so;
    Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nv;
    Xe.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hl(t)) throw Error(O(200));
      return Dv(e, t, null, r);
    };
    Xe.createRoot = function (e, t) {
      if (!Hl(e)) throw Error(O(299));
      var r = !1,
        n = '',
        o = Of;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Bl(e, 1, !1, null, null, r, !1, n, o)),
        (e[qt] = t.current),
        Ao(e.nodeType === 8 ? e.parentNode : e),
        new $l(t)
      );
    };
    Xe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(O(188))
          : ((e = Object.keys(e).join(',')), Error(O(268, e)));
      return (e = Zm(t)), (e = e === null ? null : e.stateNode), e;
    };
    Xe.flushSync = function (e) {
      return $r(e);
    };
    Xe.hydrate = function (e, t, r) {
      if (!Ns(t)) throw Error(O(200));
      return Ms(null, e, t, !0, r);
    };
    Xe.hydrateRoot = function (e, t, r) {
      if (!Hl(e)) throw Error(O(405));
      var n = (r != null && r.hydratedSources) || null,
        o = !1,
        a = '',
        s = Of;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
        (t = Pf(t, null, e, 1, r ?? null, o, !1, a, s)),
        (e[qt] = t.current),
        Ao(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (o = r._getVersion),
            (o = o(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, o])
              : t.mutableSourceEagerHydrationData.push(r, o);
      return new Fs(t);
    };
    Xe.render = function (e, t, r) {
      if (!Ns(t)) throw Error(O(200));
      return Ms(null, e, t, !1, r);
    };
    Xe.unmountComponentAtNode = function (e) {
      if (!Ns(e)) throw Error(O(40));
      return e._reactRootContainer
        ? ($r(function () {
            Ms(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[qt] = null);
            });
          }),
          !0)
        : !1;
    };
    Xe.unstable_batchedUpdates = Fl;
    Xe.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!Ns(r)) throw Error(O(200));
      if (e == null || e._reactInternals === void 0) throw Error(O(38));
      return Ms(e, t, r, !1, n);
    };
    Xe.version = '18.3.1-next-f1338f8080-20240426';
  });
  var If = Ar((z1, Df) => {
    'use strict';
    function Tf() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tf);
        } catch (e) {
          console.error(e);
        }
    }
    Tf(), (Df.exports = Lf());
  });
  var Nf = Ar((Wl) => {
    'use strict';
    var Ff = If();
    (Wl.createRoot = Ff.createRoot), (Wl.hydrateRoot = Ff.hydrateRoot);
    var A1;
  });
  var fy = Xr(Rr()),
    hy = Xr(Nf());
  var Nn = Xr(Rr());
  var Tn = Xr(Rr());
  function Uo(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var { toString: qv } = Object.prototype,
    { getPrototypeOf: Jl } = Object,
    Bs = ((e) => (t) => {
      let r = qv.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    kt = (e) => ((e = e.toLowerCase()), (t) => Bs(t) === e),
    Us = (e) => (t) => typeof t === e,
    { isArray: zn } = Array,
    $o = Us('undefined');
  function Bv(e) {
    return (
      e !== null &&
      !$o(e) &&
      e.constructor !== null &&
      !$o(e.constructor) &&
      Qe(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  var Bf = kt('ArrayBuffer');
  function Uv(e) {
    let t;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Bf(e.buffer)),
      t
    );
  }
  var $v = Us('string'),
    Qe = Us('function'),
    Uf = Us('number'),
    $s = (e) => e !== null && typeof e == 'object',
    Hv = (e) => e === !0 || e === !1,
    qs = (e) => {
      if (Bs(e) !== 'object') return !1;
      let t = Jl(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    Wv = kt('Date'),
    Vv = kt('File'),
    Gv = kt('Blob'),
    Jv = kt('FileList'),
    Kv = (e) => $s(e) && Qe(e.pipe),
    Xv = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == 'function' && e instanceof FormData) ||
          (Qe(e.append) &&
            ((t = Bs(e)) === 'formdata' ||
              (t === 'object' &&
                Qe(e.toString) &&
                e.toString() === '[object FormData]'))))
      );
    },
    Qv = kt('URLSearchParams'),
    [Yv, Zv, ej, tj] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
      kt,
    ),
    rj = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  function Ho(e, t, { allOwnKeys: r = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let n, o;
    if ((typeof e != 'object' && (e = [e]), zn(e)))
      for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
    else {
      let a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
        s = a.length,
        i;
      for (n = 0; n < s; n++) (i = a[n]), t.call(null, e[i], i, e);
    }
  }
  function $f(e, t) {
    t = t.toLowerCase();
    let r = Object.keys(e),
      n = r.length,
      o;
    for (; n-- > 0; ) if (((o = r[n]), t === o.toLowerCase())) return o;
    return null;
  }
  var Vr =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
          ? self
          : typeof window < 'u'
            ? window
            : global,
    Hf = (e) => !$o(e) && e !== Vr;
  function Gl() {
    let { caseless: e } = (Hf(this) && this) || {},
      t = {},
      r = (n, o) => {
        let a = (e && $f(t, o)) || o;
        qs(t[a]) && qs(n)
          ? (t[a] = Gl(t[a], n))
          : qs(n)
            ? (t[a] = Gl({}, n))
            : zn(n)
              ? (t[a] = n.slice())
              : (t[a] = n);
      };
    for (let n = 0, o = arguments.length; n < o; n++)
      arguments[n] && Ho(arguments[n], r);
    return t;
  }
  var nj = (e, t, r, { allOwnKeys: n } = {}) => (
      Ho(
        t,
        (o, a) => {
          r && Qe(o) ? (e[a] = Uo(o, r)) : (e[a] = o);
        },
        { allOwnKeys: n },
      ),
      e
    ),
    oj = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    aj = (e, t, r, n) => {
      (e.prototype = Object.create(t.prototype, n)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, 'super', { value: t.prototype }),
        r && Object.assign(e.prototype, r);
    },
    sj = (e, t, r, n) => {
      let o,
        a,
        s,
        i = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
          (s = o[a]),
            (!n || n(s, e, t)) && !i[s] && ((t[s] = e[s]), (i[s] = !0));
        e = r !== !1 && Jl(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    ij = (e, t, r) => {
      (e = String(e)),
        (r === void 0 || r > e.length) && (r = e.length),
        (r -= t.length);
      let n = e.indexOf(t, r);
      return n !== -1 && n === r;
    },
    uj = (e) => {
      if (!e) return null;
      if (zn(e)) return e;
      let t = e.length;
      if (!Uf(t)) return null;
      let r = new Array(t);
      for (; t-- > 0; ) r[t] = e[t];
      return r;
    },
    lj = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < 'u' && Jl(Uint8Array)),
    cj = (e, t) => {
      let n = (e && e[Symbol.iterator]).call(e),
        o;
      for (; (o = n.next()) && !o.done; ) {
        let a = o.value;
        t.call(e, a[0], a[1]);
      }
    },
    pj = (e, t) => {
      let r,
        n = [];
      for (; (r = e.exec(t)) !== null; ) n.push(r);
      return n;
    },
    mj = kt('HTMLFormElement'),
    dj = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
        return n.toUpperCase() + o;
      }),
    Mf = (
      ({ hasOwnProperty: e }) =>
      (t, r) =>
        e.call(t, r)
    )(Object.prototype),
    fj = kt('RegExp'),
    Wf = (e, t) => {
      let r = Object.getOwnPropertyDescriptors(e),
        n = {};
      Ho(r, (o, a) => {
        let s;
        (s = t(o, a, e)) !== !1 && (n[a] = s || o);
      }),
        Object.defineProperties(e, n);
    },
    hj = (e) => {
      Wf(e, (t, r) => {
        if (Qe(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
          return !1;
        let n = e[r];
        if (Qe(n)) {
          if (((t.enumerable = !1), 'writable' in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + r + "'");
            });
        }
      });
    },
    gj = (e, t) => {
      let r = {},
        n = (o) => {
          o.forEach((a) => {
            r[a] = !0;
          });
        };
      return zn(e) ? n(e) : n(String(e).split(t)), r;
    },
    yj = () => {},
    kj = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    Vl = 'abcdefghijklmnopqrstuvwxyz',
    qf = '0123456789',
    Vf = { DIGIT: qf, ALPHA: Vl, ALPHA_DIGIT: Vl + Vl.toUpperCase() + qf },
    vj = (e = 16, t = Vf.ALPHA_DIGIT) => {
      let r = '',
        { length: n } = t;
      for (; e--; ) r += t[(Math.random() * n) | 0];
      return r;
    };
  function jj(e) {
    return !!(
      e &&
      Qe(e.append) &&
      e[Symbol.toStringTag] === 'FormData' &&
      e[Symbol.iterator]
    );
  }
  var bj = (e) => {
      let t = new Array(10),
        r = (n, o) => {
          if ($s(n)) {
            if (t.indexOf(n) >= 0) return;
            if (!('toJSON' in n)) {
              t[o] = n;
              let a = zn(n) ? [] : {};
              return (
                Ho(n, (s, i) => {
                  let u = r(s, o + 1);
                  !$o(u) && (a[i] = u);
                }),
                (t[o] = void 0),
                a
              );
            }
          }
          return n;
        };
      return r(e, 0);
    },
    wj = kt('AsyncFunction'),
    Ej = (e) => e && ($s(e) || Qe(e)) && Qe(e.then) && Qe(e.catch),
    Gf = ((e, t) =>
      e
        ? setImmediate
        : t
          ? ((r, n) => (
              Vr.addEventListener(
                'message',
                ({ source: o, data: a }) => {
                  o === Vr && a === r && n.length && n.shift()();
                },
                !1,
              ),
              (o) => {
                n.push(o), Vr.postMessage(r, '*');
              }
            ))(`axios@${Math.random()}`, [])
          : (r) => setTimeout(r))(
      typeof setImmediate == 'function',
      Qe(Vr.postMessage),
    ),
    xj =
      typeof queueMicrotask < 'u'
        ? queueMicrotask.bind(Vr)
        : (typeof process < 'u' && process.nextTick) || Gf,
    S = {
      isArray: zn,
      isArrayBuffer: Bf,
      isBuffer: Bv,
      isFormData: Xv,
      isArrayBufferView: Uv,
      isString: $v,
      isNumber: Uf,
      isBoolean: Hv,
      isObject: $s,
      isPlainObject: qs,
      isReadableStream: Yv,
      isRequest: Zv,
      isResponse: ej,
      isHeaders: tj,
      isUndefined: $o,
      isDate: Wv,
      isFile: Vv,
      isBlob: Gv,
      isRegExp: fj,
      isFunction: Qe,
      isStream: Kv,
      isURLSearchParams: Qv,
      isTypedArray: lj,
      isFileList: Jv,
      forEach: Ho,
      merge: Gl,
      extend: nj,
      trim: rj,
      stripBOM: oj,
      inherits: aj,
      toFlatObject: sj,
      kindOf: Bs,
      kindOfTest: kt,
      endsWith: ij,
      toArray: uj,
      forEachEntry: cj,
      matchAll: pj,
      isHTMLForm: mj,
      hasOwnProperty: Mf,
      hasOwnProp: Mf,
      reduceDescriptors: Wf,
      freezeMethods: hj,
      toObjectSet: gj,
      toCamelCase: dj,
      noop: yj,
      toFiniteNumber: kj,
      findKey: $f,
      global: Vr,
      isContextDefined: Hf,
      ALPHABET: Vf,
      generateString: vj,
      isSpecCompliantForm: jj,
      toJSONObject: bj,
      isAsyncFn: wj,
      isThenable: Ej,
      setImmediate: Gf,
      asap: xj,
    };
  function An(e, t, r, n, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      o && ((this.response = o), (this.status = o.status ? o.status : null));
  }
  S.inherits(An, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: S.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  var Jf = An.prototype,
    Kf = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((e) => {
    Kf[e] = { value: e };
  });
  Object.defineProperties(An, Kf);
  Object.defineProperty(Jf, 'isAxiosError', { value: !0 });
  An.from = (e, t, r, n, o, a) => {
    let s = Object.create(Jf);
    return (
      S.toFlatObject(
        e,
        s,
        function (u) {
          return u !== Error.prototype;
        },
        (i) => i !== 'isAxiosError',
      ),
      An.call(s, e.message, t, r, n, o),
      (s.cause = e),
      (s.name = e.name),
      a && Object.assign(s, a),
      s
    );
  };
  var N = An;
  var Hs = null;
  function Kl(e) {
    return S.isPlainObject(e) || S.isArray(e);
  }
  function Qf(e) {
    return S.endsWith(e, '[]') ? e.slice(0, -2) : e;
  }
  function Xf(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (o, a) {
            return (o = Qf(o)), !r && a ? '[' + o + ']' : o;
          })
          .join(r ? '.' : '')
      : t;
  }
  function Sj(e) {
    return S.isArray(e) && !e.some(Kl);
  }
  var Cj = S.toFlatObject(S, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function _j(e, t, r) {
    if (!S.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new (Hs || FormData)()),
      (r = S.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (j, w) {
          return !S.isUndefined(w[j]);
        },
      ));
    let n = r.metaTokens,
      o = r.visitor || c,
      a = r.dots,
      s = r.indexes,
      u = (r.Blob || (typeof Blob < 'u' && Blob)) && S.isSpecCompliantForm(t);
    if (!S.isFunction(o)) throw new TypeError('visitor must be a function');
    function l(h) {
      if (h === null) return '';
      if (S.isDate(h)) return h.toISOString();
      if (!u && S.isBlob(h))
        throw new N('Blob is not supported. Use a Buffer instead.');
      return S.isArrayBuffer(h) || S.isTypedArray(h)
        ? u && typeof Blob == 'function'
          ? new Blob([h])
          : Buffer.from(h)
        : h;
    }
    function c(h, j, w) {
      let d = h;
      if (h && !w && typeof h == 'object') {
        if (S.endsWith(j, '{}'))
          (j = n ? j : j.slice(0, -2)), (h = JSON.stringify(h));
        else if (
          (S.isArray(h) && Sj(h)) ||
          ((S.isFileList(h) || S.endsWith(j, '[]')) && (d = S.toArray(h)))
        )
          return (
            (j = Qf(j)),
            d.forEach(function (f, y) {
              !(S.isUndefined(f) || f === null) &&
                t.append(
                  s === !0 ? Xf([j], y, a) : s === null ? j : j + '[]',
                  l(f),
                );
            }),
            !1
          );
      }
      return Kl(h) ? !0 : (t.append(Xf(w, j, a), l(h)), !1);
    }
    let p = [],
      g = Object.assign(Cj, {
        defaultVisitor: c,
        convertValue: l,
        isVisitable: Kl,
      });
    function k(h, j) {
      if (!S.isUndefined(h)) {
        if (p.indexOf(h) !== -1)
          throw Error('Circular reference detected in ' + j.join('.'));
        p.push(h),
          S.forEach(h, function (d, m) {
            (!(S.isUndefined(d) || d === null) &&
              o.call(t, d, S.isString(m) ? m.trim() : m, j, g)) === !0 &&
              k(d, j ? j.concat(m) : [m]);
          }),
          p.pop();
      }
    }
    if (!S.isObject(e)) throw new TypeError('data must be an object');
    return k(e), t;
  }
  var kr = _j;
  function Yf(e) {
    let t = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
      return t[n];
    });
  }
  function Zf(e, t) {
    (this._pairs = []), e && kr(e, this, t);
  }
  var eh = Zf.prototype;
  eh.append = function (t, r) {
    this._pairs.push([t, r]);
  };
  eh.toString = function (t) {
    let r = t
      ? function (n) {
          return t.call(this, n, Yf);
        }
      : Yf;
    return this._pairs
      .map(function (o) {
        return r(o[0]) + '=' + r(o[1]);
      }, '')
      .join('&');
  };
  var Ws = Zf;
  function zj(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function Wo(e, t, r) {
    if (!t) return e;
    let n = (r && r.encode) || zj,
      o = r && r.serialize,
      a;
    if (
      (o
        ? (a = o(t, r))
        : (a = S.isURLSearchParams(t)
            ? t.toString()
            : new Ws(t, r).toString(n)),
      a)
    ) {
      let s = e.indexOf('#');
      s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
    }
    return e;
  }
  var Xl = class {
      constructor() {
        this.handlers = [];
      }
      use(t, r, n) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: n ? n.synchronous : !1,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        S.forEach(this.handlers, function (n) {
          n !== null && t(n);
        });
      }
    },
    Ql = Xl;
  var Vs = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
  var th = typeof URLSearchParams < 'u' ? URLSearchParams : Ws;
  var rh = typeof FormData < 'u' ? FormData : null;
  var nh = typeof Blob < 'u' ? Blob : null;
  var oh = {
    isBrowser: !0,
    classes: { URLSearchParams: th, FormData: rh, Blob: nh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
  var ec = {};
  by(ec, {
    hasBrowserEnv: () => Zl,
    hasStandardBrowserEnv: () => Aj,
    hasStandardBrowserWebWorkerEnv: () => Rj,
    navigator: () => Yl,
    origin: () => Pj,
  });
  var Zl = typeof window < 'u' && typeof document < 'u',
    Yl = (typeof navigator == 'object' && navigator) || void 0,
    Aj =
      Zl &&
      (!Yl || ['ReactNative', 'NativeScript', 'NS'].indexOf(Yl.product) < 0),
    Rj =
      typeof WorkerGlobalScope < 'u' &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == 'function',
    Pj = (Zl && window.location.href) || 'http://localhost';
  var ce = { ...ec, ...oh };
  function tc(e, t) {
    return kr(
      e,
      new ce.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (r, n, o, a) {
            return ce.isNode && S.isBuffer(r)
              ? (this.append(n, r.toString('base64')), !1)
              : a.defaultVisitor.apply(this, arguments);
          },
        },
        t,
      ),
    );
  }
  function Oj(e) {
    return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === '[]' ? '' : t[1] || t[0],
    );
  }
  function Lj(e) {
    let t = {},
      r = Object.keys(e),
      n,
      o = r.length,
      a;
    for (n = 0; n < o; n++) (a = r[n]), (t[a] = e[a]);
    return t;
  }
  function Tj(e) {
    function t(r, n, o, a) {
      let s = r[a++];
      if (s === '__proto__') return !0;
      let i = Number.isFinite(+s),
        u = a >= r.length;
      return (
        (s = !s && S.isArray(o) ? o.length : s),
        u
          ? (S.hasOwnProp(o, s) ? (o[s] = [o[s], n]) : (o[s] = n), !i)
          : ((!o[s] || !S.isObject(o[s])) && (o[s] = []),
            t(r, n, o[s], a) && S.isArray(o[s]) && (o[s] = Lj(o[s])),
            !i)
      );
    }
    if (S.isFormData(e) && S.isFunction(e.entries)) {
      let r = {};
      return (
        S.forEachEntry(e, (n, o) => {
          t(Oj(n), o, r, 0);
        }),
        r
      );
    }
    return null;
  }
  var Gs = Tj;
  function Dj(e, t, r) {
    if (S.isString(e))
      try {
        return (t || JSON.parse)(e), S.trim(e);
      } catch (n) {
        if (n.name !== 'SyntaxError') throw n;
      }
    return (r || JSON.stringify)(e);
  }
  var rc = {
    transitional: Vs,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
      function (t, r) {
        let n = r.getContentType() || '',
          o = n.indexOf('application/json') > -1,
          a = S.isObject(t);
        if ((a && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
          return o ? JSON.stringify(Gs(t)) : t;
        if (
          S.isArrayBuffer(t) ||
          S.isBuffer(t) ||
          S.isStream(t) ||
          S.isFile(t) ||
          S.isBlob(t) ||
          S.isReadableStream(t)
        )
          return t;
        if (S.isArrayBufferView(t)) return t.buffer;
        if (S.isURLSearchParams(t))
          return (
            r.setContentType(
              'application/x-www-form-urlencoded;charset=utf-8',
              !1,
            ),
            t.toString()
          );
        let i;
        if (a) {
          if (n.indexOf('application/x-www-form-urlencoded') > -1)
            return tc(t, this.formSerializer).toString();
          if ((i = S.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
            let u = this.env && this.env.FormData;
            return kr(
              i ? { 'files[]': t } : t,
              u && new u(),
              this.formSerializer,
            );
          }
        }
        return a || o ? (r.setContentType('application/json', !1), Dj(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        let r = this.transitional || rc.transitional,
          n = r && r.forcedJSONParsing,
          o = this.responseType === 'json';
        if (S.isResponse(t) || S.isReadableStream(t)) return t;
        if (t && S.isString(t) && ((n && !this.responseType) || o)) {
          let s = !(r && r.silentJSONParsing) && o;
          try {
            return JSON.parse(t);
          } catch (i) {
            if (s)
              throw i.name === 'SyntaxError'
                ? N.from(i, N.ERR_BAD_RESPONSE, this, null, this.response)
                : i;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ce.classes.FormData, Blob: ce.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': void 0,
      },
    },
  };
  S.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    rc.headers[e] = {};
  });
  var Rn = rc;
  var Ij = S.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]),
    ah = (e) => {
      let t = {},
        r,
        n,
        o;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (s) {
              (o = s.indexOf(':')),
                (r = s.substring(0, o).trim().toLowerCase()),
                (n = s.substring(o + 1).trim()),
                !(!r || (t[r] && Ij[r])) &&
                  (r === 'set-cookie'
                    ? t[r]
                      ? t[r].push(n)
                      : (t[r] = [n])
                    : (t[r] = t[r] ? t[r] + ', ' + n : n));
            }),
        t
      );
    };
  var sh = Symbol('internals');
  function Vo(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Js(e) {
    return e === !1 || e == null ? e : S.isArray(e) ? e.map(Js) : String(e);
  }
  function Fj(e) {
    let t = Object.create(null),
      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
      n;
    for (; (n = r.exec(e)); ) t[n[1]] = n[2];
    return t;
  }
  var Nj = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function nc(e, t, r, n, o) {
    if (S.isFunction(n)) return n.call(this, t, r);
    if ((o && (t = r), !!S.isString(t))) {
      if (S.isString(n)) return t.indexOf(n) !== -1;
      if (S.isRegExp(n)) return n.test(t);
    }
  }
  function Mj(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
  }
  function qj(e, t) {
    let r = S.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((n) => {
      Object.defineProperty(e, n + r, {
        value: function (o, a, s) {
          return this[n].call(this, t, o, a, s);
        },
        configurable: !0,
      });
    });
  }
  var Pn = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, r, n) {
      let o = this;
      function a(i, u, l) {
        let c = Vo(u);
        if (!c) throw new Error('header name must be a non-empty string');
        let p = S.findKey(o, c);
        (!p || o[p] === void 0 || l === !0 || (l === void 0 && o[p] !== !1)) &&
          (o[p || u] = Js(i));
      }
      let s = (i, u) => S.forEach(i, (l, c) => a(l, c, u));
      if (S.isPlainObject(t) || t instanceof this.constructor) s(t, r);
      else if (S.isString(t) && (t = t.trim()) && !Nj(t)) s(ah(t), r);
      else if (S.isHeaders(t)) for (let [i, u] of t.entries()) a(u, i, n);
      else t != null && a(r, t, n);
      return this;
    }
    get(t, r) {
      if (((t = Vo(t)), t)) {
        let n = S.findKey(this, t);
        if (n) {
          let o = this[n];
          if (!r) return o;
          if (r === !0) return Fj(o);
          if (S.isFunction(r)) return r.call(this, o, n);
          if (S.isRegExp(r)) return r.exec(o);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(t, r) {
      if (((t = Vo(t)), t)) {
        let n = S.findKey(this, t);
        return !!(n && this[n] !== void 0 && (!r || nc(this, this[n], n, r)));
      }
      return !1;
    }
    delete(t, r) {
      let n = this,
        o = !1;
      function a(s) {
        if (((s = Vo(s)), s)) {
          let i = S.findKey(n, s);
          i && (!r || nc(n, n[i], i, r)) && (delete n[i], (o = !0));
        }
      }
      return S.isArray(t) ? t.forEach(a) : a(t), o;
    }
    clear(t) {
      let r = Object.keys(this),
        n = r.length,
        o = !1;
      for (; n--; ) {
        let a = r[n];
        (!t || nc(this, this[a], a, t, !0)) && (delete this[a], (o = !0));
      }
      return o;
    }
    normalize(t) {
      let r = this,
        n = {};
      return (
        S.forEach(this, (o, a) => {
          let s = S.findKey(n, a);
          if (s) {
            (r[s] = Js(o)), delete r[a];
            return;
          }
          let i = t ? Mj(a) : String(a).trim();
          i !== a && delete r[a], (r[i] = Js(o)), (n[i] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      let r = Object.create(null);
      return (
        S.forEach(this, (n, o) => {
          n != null &&
            n !== !1 &&
            (r[o] = t && S.isArray(n) ? n.join(', ') : n);
        }),
        r
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...r) {
      let n = new this(t);
      return r.forEach((o) => n.set(o)), n;
    }
    static accessor(t) {
      let n = (this[sh] = this[sh] = { accessors: {} }).accessors,
        o = this.prototype;
      function a(s) {
        let i = Vo(s);
        n[i] || (qj(o, s), (n[i] = !0));
      }
      return S.isArray(t) ? t.forEach(a) : a(t), this;
    }
  };
  Pn.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
  ]);
  S.reduceDescriptors(Pn.prototype, ({ value: e }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(n) {
        this[r] = n;
      },
    };
  });
  S.freezeMethods(Pn);
  var ye = Pn;
  function Go(e, t) {
    let r = this || Rn,
      n = t || r,
      o = ye.from(n.headers),
      a = n.data;
    return (
      S.forEach(e, function (i) {
        a = i.call(r, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function Jo(e) {
    return !!(e && e.__CANCEL__);
  }
  function ih(e, t, r) {
    N.call(this, e ?? 'canceled', N.ERR_CANCELED, t, r),
      (this.name = 'CanceledError');
  }
  S.inherits(ih, N, { __CANCEL__: !0 });
  var zt = ih;
  function Ko(e, t, r) {
    let n = r.config.validateStatus;
    !r.status || !n || n(r.status)
      ? e(r)
      : t(
          new N(
            'Request failed with status code ' + r.status,
            [N.ERR_BAD_REQUEST, N.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r,
          ),
        );
  }
  function oc(e) {
    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
  }
  function Bj(e, t) {
    e = e || 10;
    let r = new Array(e),
      n = new Array(e),
      o = 0,
      a = 0,
      s;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (u) {
        let l = Date.now(),
          c = n[a];
        s || (s = l), (r[o] = u), (n[o] = l);
        let p = a,
          g = 0;
        for (; p !== o; ) (g += r[p++]), (p = p % e);
        if (((o = (o + 1) % e), o === a && (a = (a + 1) % e), l - s < t))
          return;
        let k = c && l - c;
        return k ? Math.round((g * 1e3) / k) : void 0;
      }
    );
  }
  var uh = Bj;
  function Uj(e, t) {
    let r = 0,
      n = 1e3 / t,
      o,
      a,
      s = (l, c = Date.now()) => {
        (r = c),
          (o = null),
          a && (clearTimeout(a), (a = null)),
          e.apply(null, l);
      };
    return [
      (...l) => {
        let c = Date.now(),
          p = c - r;
        p >= n
          ? s(l, c)
          : ((o = l),
            a ||
              (a = setTimeout(() => {
                (a = null), s(o);
              }, n - p)));
      },
      () => o && s(o),
    ];
  }
  var lh = Uj;
  var On = (e, t, r = 3) => {
      let n = 0,
        o = uh(50, 250);
      return lh((a) => {
        let s = a.loaded,
          i = a.lengthComputable ? a.total : void 0,
          u = s - n,
          l = o(u),
          c = s <= i;
        n = s;
        let p = {
          loaded: s,
          total: i,
          progress: i ? s / i : void 0,
          bytes: u,
          rate: l || void 0,
          estimated: l && i && c ? (i - s) / l : void 0,
          event: a,
          lengthComputable: i != null,
          [t ? 'download' : 'upload']: !0,
        };
        e(p);
      }, r);
    },
    ac = (e, t) => {
      let r = e != null;
      return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
    },
    sc =
      (e) =>
      (...t) =>
        S.asap(() => e(...t));
  var ch = ce.hasStandardBrowserEnv
    ? (function () {
        let t = ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent),
          r = document.createElement('a'),
          n;
        function o(a) {
          let s = a;
          return (
            t && (r.setAttribute('href', s), (s = r.href)),
            r.setAttribute('href', s),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          );
        }
        return (
          (n = o(window.location.href)),
          function (s) {
            let i = S.isString(s) ? o(s) : s;
            return i.protocol === n.protocol && i.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
  var ph = ce.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, o, a) {
          let s = [e + '=' + encodeURIComponent(t)];
          S.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
            S.isString(n) && s.push('path=' + n),
            S.isString(o) && s.push('domain=' + o),
            a === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          let t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
  function ic(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function uc(e, t) {
    return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
  }
  function Xo(e, t) {
    return e && !ic(t) ? uc(e, t) : t;
  }
  var mh = (e) => (e instanceof ye ? { ...e } : e);
  function vt(e, t) {
    t = t || {};
    let r = {};
    function n(l, c, p) {
      return S.isPlainObject(l) && S.isPlainObject(c)
        ? S.merge.call({ caseless: p }, l, c)
        : S.isPlainObject(c)
          ? S.merge({}, c)
          : S.isArray(c)
            ? c.slice()
            : c;
    }
    function o(l, c, p) {
      if (S.isUndefined(c)) {
        if (!S.isUndefined(l)) return n(void 0, l, p);
      } else return n(l, c, p);
    }
    function a(l, c) {
      if (!S.isUndefined(c)) return n(void 0, c);
    }
    function s(l, c) {
      if (S.isUndefined(c)) {
        if (!S.isUndefined(l)) return n(void 0, l);
      } else return n(void 0, c);
    }
    function i(l, c, p) {
      if (p in t) return n(l, c);
      if (p in e) return n(void 0, l);
    }
    let u = {
      url: a,
      method: a,
      data: a,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      withXSRFToken: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: i,
      headers: (l, c) => o(mh(l), mh(c), !0),
    };
    return (
      S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
        let p = u[c] || o,
          g = p(e[c], t[c], c);
        (S.isUndefined(g) && p !== i) || (r[c] = g);
      }),
      r
    );
  }
  var Ks = (e) => {
    let t = vt({}, e),
      {
        data: r,
        withXSRFToken: n,
        xsrfHeaderName: o,
        xsrfCookieName: a,
        headers: s,
        auth: i,
      } = t;
    (t.headers = s = ye.from(s)),
      (t.url = Wo(Xo(t.baseURL, t.url), e.params, e.paramsSerializer)),
      i &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (i.username || '') +
                ':' +
                (i.password ? unescape(encodeURIComponent(i.password)) : ''),
            ),
        );
    let u;
    if (S.isFormData(r)) {
      if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        let [l, ...c] = u
          ? u
              .split(';')
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        s.setContentType([l || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      ce.hasStandardBrowserEnv &&
      (n && S.isFunction(n) && (n = n(t)), n || (n !== !1 && ch(t.url)))
    ) {
      let l = o && a && ph.read(a);
      l && s.set(o, l);
    }
    return t;
  };
  var $j = typeof XMLHttpRequest < 'u',
    dh =
      $j &&
      function (e) {
        return new Promise(function (r, n) {
          let o = Ks(e),
            a = o.data,
            s = ye.from(o.headers).normalize(),
            { responseType: i, onUploadProgress: u, onDownloadProgress: l } = o,
            c,
            p,
            g,
            k,
            h;
          function j() {
            k && k(),
              h && h(),
              o.cancelToken && o.cancelToken.unsubscribe(c),
              o.signal && o.signal.removeEventListener('abort', c);
          }
          let w = new XMLHttpRequest();
          w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout);
          function d() {
            if (!w) return;
            let f = ye.from(
                'getAllResponseHeaders' in w && w.getAllResponseHeaders(),
              ),
              b = {
                data:
                  !i || i === 'text' || i === 'json'
                    ? w.responseText
                    : w.response,
                status: w.status,
                statusText: w.statusText,
                headers: f,
                config: e,
                request: w,
              };
            Ko(
              function (x) {
                r(x), j();
              },
              function (x) {
                n(x), j();
              },
              b,
            ),
              (w = null);
          }
          'onloadend' in w
            ? (w.onloadend = d)
            : (w.onreadystatechange = function () {
                !w ||
                  w.readyState !== 4 ||
                  (w.status === 0 &&
                    !(w.responseURL && w.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(d);
              }),
            (w.onabort = function () {
              w &&
                (n(new N('Request aborted', N.ECONNABORTED, e, w)), (w = null));
            }),
            (w.onerror = function () {
              n(new N('Network Error', N.ERR_NETWORK, e, w)), (w = null);
            }),
            (w.ontimeout = function () {
              let y = o.timeout
                  ? 'timeout of ' + o.timeout + 'ms exceeded'
                  : 'timeout exceeded',
                b = o.transitional || Vs;
              o.timeoutErrorMessage && (y = o.timeoutErrorMessage),
                n(
                  new N(
                    y,
                    b.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
                    e,
                    w,
                  ),
                ),
                (w = null);
            }),
            a === void 0 && s.setContentType(null),
            'setRequestHeader' in w &&
              S.forEach(s.toJSON(), function (y, b) {
                w.setRequestHeader(b, y);
              }),
            S.isUndefined(o.withCredentials) ||
              (w.withCredentials = !!o.withCredentials),
            i && i !== 'json' && (w.responseType = o.responseType),
            l && (([g, h] = On(l, !0)), w.addEventListener('progress', g)),
            u &&
              w.upload &&
              (([p, k] = On(u)),
              w.upload.addEventListener('progress', p),
              w.upload.addEventListener('loadend', k)),
            (o.cancelToken || o.signal) &&
              ((c = (f) => {
                w &&
                  (n(!f || f.type ? new zt(null, e, w) : f),
                  w.abort(),
                  (w = null));
              }),
              o.cancelToken && o.cancelToken.subscribe(c),
              o.signal &&
                (o.signal.aborted
                  ? c()
                  : o.signal.addEventListener('abort', c)));
          let m = oc(o.url);
          if (m && ce.protocols.indexOf(m) === -1) {
            n(new N('Unsupported protocol ' + m + ':', N.ERR_BAD_REQUEST, e));
            return;
          }
          w.send(a || null);
        });
      };
  var Hj = (e, t) => {
      let { length: r } = (e = e ? e.filter(Boolean) : []);
      if (t || r) {
        let n = new AbortController(),
          o,
          a = function (l) {
            if (!o) {
              (o = !0), i();
              let c = l instanceof Error ? l : this.reason;
              n.abort(
                c instanceof N ? c : new zt(c instanceof Error ? c.message : c),
              );
            }
          },
          s =
            t &&
            setTimeout(() => {
              (s = null), a(new N(`timeout ${t} of ms exceeded`, N.ETIMEDOUT));
            }, t),
          i = () => {
            e &&
              (s && clearTimeout(s),
              (s = null),
              e.forEach((l) => {
                l.unsubscribe
                  ? l.unsubscribe(a)
                  : l.removeEventListener('abort', a);
              }),
              (e = null));
          };
        e.forEach((l) => l.addEventListener('abort', a));
        let { signal: u } = n;
        return (u.unsubscribe = () => S.asap(i)), u;
      }
    },
    fh = Hj;
  var Wj = function* (e, t) {
      let r = e.byteLength;
      if (!t || r < t) {
        yield e;
        return;
      }
      let n = 0,
        o;
      for (; n < r; ) (o = n + t), yield e.slice(n, o), (n = o);
    },
    Vj = async function* (e, t) {
      for await (let r of Gj(e)) yield* Wj(r, t);
    },
    Gj = async function* (e) {
      if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
      }
      let t = e.getReader();
      try {
        for (;;) {
          let { done: r, value: n } = await t.read();
          if (r) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    lc = (e, t, r, n) => {
      let o = Vj(e, t),
        a = 0,
        s,
        i = (u) => {
          s || ((s = !0), n && n(u));
        };
      return new ReadableStream(
        {
          async pull(u) {
            try {
              let { done: l, value: c } = await o.next();
              if (l) {
                i(), u.close();
                return;
              }
              let p = c.byteLength;
              if (r) {
                let g = (a += p);
                r(g);
              }
              u.enqueue(new Uint8Array(c));
            } catch (l) {
              throw (i(l), l);
            }
          },
          cancel(u) {
            return i(u), o.return();
          },
        },
        { highWaterMark: 2 },
      );
    };
  var Qs =
      typeof fetch == 'function' &&
      typeof Request == 'function' &&
      typeof Response == 'function',
    gh = Qs && typeof ReadableStream == 'function',
    Jj =
      Qs &&
      (typeof TextEncoder == 'function'
        ? (
            (e) => (t) =>
              e.encode(t)
          )(new TextEncoder())
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    yh = (e, ...t) => {
      try {
        return !!e(...t);
      } catch {
        return !1;
      }
    },
    Kj =
      gh &&
      yh(() => {
        let e = !1,
          t = new Request(ce.origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex() {
              return (e = !0), 'half';
            },
          }).headers.has('Content-Type');
        return e && !t;
      }),
    hh = 64 * 1024,
    cc = gh && yh(() => S.isReadableStream(new Response('').body)),
    Xs = { stream: cc && ((e) => e.body) };
  Qs &&
    ((e) => {
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
        !Xs[t] &&
          (Xs[t] = S.isFunction(e[t])
            ? (r) => r[t]()
            : (r, n) => {
                throw new N(
                  `Response type '${t}' is not supported`,
                  N.ERR_NOT_SUPPORT,
                  n,
                );
              });
      });
    })(new Response());
  var Xj = async (e) => {
      if (e == null) return 0;
      if (S.isBlob(e)) return e.size;
      if (S.isSpecCompliantForm(e))
        return (
          await new Request(ce.origin, {
            method: 'POST',
            body: e,
          }).arrayBuffer()
        ).byteLength;
      if (S.isArrayBufferView(e) || S.isArrayBuffer(e)) return e.byteLength;
      if ((S.isURLSearchParams(e) && (e = e + ''), S.isString(e)))
        return (await Jj(e)).byteLength;
    },
    Qj = async (e, t) => {
      let r = S.toFiniteNumber(e.getContentLength());
      return r ?? Xj(t);
    },
    kh =
      Qs &&
      (async (e) => {
        let {
          url: t,
          method: r,
          data: n,
          signal: o,
          cancelToken: a,
          timeout: s,
          onDownloadProgress: i,
          onUploadProgress: u,
          responseType: l,
          headers: c,
          withCredentials: p = 'same-origin',
          fetchOptions: g,
        } = Ks(e);
        l = l ? (l + '').toLowerCase() : 'text';
        let k = fh([o, a && a.toAbortSignal()], s),
          h,
          j =
            k &&
            k.unsubscribe &&
            (() => {
              k.unsubscribe();
            }),
          w;
        try {
          if (
            u &&
            Kj &&
            r !== 'get' &&
            r !== 'head' &&
            (w = await Qj(c, n)) !== 0
          ) {
            let b = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
              C;
            if (
              (S.isFormData(n) &&
                (C = b.headers.get('content-type')) &&
                c.setContentType(C),
              b.body)
            ) {
              let [x, R] = ac(w, On(sc(u)));
              n = lc(b.body, hh, x, R);
            }
          }
          S.isString(p) || (p = p ? 'include' : 'omit');
          let d = 'credentials' in Request.prototype;
          h = new Request(t, {
            ...g,
            signal: k,
            method: r.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: n,
            duplex: 'half',
            credentials: d ? p : void 0,
          });
          let m = await fetch(h),
            f = cc && (l === 'stream' || l === 'response');
          if (cc && (i || (f && j))) {
            let b = {};
            ['status', 'statusText', 'headers'].forEach((L) => {
              b[L] = m[L];
            });
            let C = S.toFiniteNumber(m.headers.get('content-length')),
              [x, R] = (i && ac(C, On(sc(i), !0))) || [];
            m = new Response(
              lc(m.body, hh, x, () => {
                R && R(), j && j();
              }),
              b,
            );
          }
          l = l || 'text';
          let y = await Xs[S.findKey(Xs, l) || 'text'](m, e);
          return (
            !f && j && j(),
            await new Promise((b, C) => {
              Ko(b, C, {
                data: y,
                headers: ye.from(m.headers),
                status: m.status,
                statusText: m.statusText,
                config: e,
                request: h,
              });
            })
          );
        } catch (d) {
          throw (
            (j && j(),
            d && d.name === 'TypeError' && /fetch/i.test(d.message)
              ? Object.assign(new N('Network Error', N.ERR_NETWORK, e, h), {
                  cause: d.cause || d,
                })
              : N.from(d, d && d.code, e, h))
          );
        }
      });
  var pc = { http: Hs, xhr: dh, fetch: kh };
  S.forEach(pc, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t });
      } catch {}
      Object.defineProperty(e, 'adapterName', { value: t });
    }
  });
  var vh = (e) => `- ${e}`,
    Yj = (e) => S.isFunction(e) || e === null || e === !1,
    Ys = {
      getAdapter: (e) => {
        e = S.isArray(e) ? e : [e];
        let { length: t } = e,
          r,
          n,
          o = {};
        for (let a = 0; a < t; a++) {
          r = e[a];
          let s;
          if (
            ((n = r),
            !Yj(r) && ((n = pc[(s = String(r)).toLowerCase()]), n === void 0))
          )
            throw new N(`Unknown adapter '${s}'`);
          if (n) break;
          o[s || '#' + a] = n;
        }
        if (!n) {
          let a = Object.entries(o).map(
              ([i, u]) =>
                `adapter ${i} ` +
                (u === !1
                  ? 'is not supported by the environment'
                  : 'is not available in the build'),
            ),
            s = t
              ? a.length > 1
                ? `since :
` +
                  a.map(vh).join(`
`)
                : ' ' + vh(a[0])
              : 'as no adapter specified';
          throw new N(
            'There is no suitable adapter to dispatch the request ' + s,
            'ERR_NOT_SUPPORT',
          );
        }
        return n;
      },
      adapters: pc,
    };
  function mc(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new zt(null, e);
  }
  function Zs(e) {
    return (
      mc(e),
      (e.headers = ye.from(e.headers)),
      (e.data = Go.call(e, e.transformRequest)),
      ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1),
      Ys.getAdapter(e.adapter || Rn.adapter)(e).then(
        function (n) {
          return (
            mc(e),
            (n.data = Go.call(e, e.transformResponse, n)),
            (n.headers = ye.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Jo(n) ||
              (mc(e),
              n &&
                n.response &&
                ((n.response.data = Go.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = ye.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
    );
  }
  var ei = '1.7.7';
  var dc = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
      dc[e] = function (n) {
        return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
      };
    },
  );
  var jh = {};
  dc.transitional = function (t, r, n) {
    function o(a, s) {
      return (
        '[Axios v' +
        ei +
        "] Transitional option '" +
        a +
        "'" +
        s +
        (n ? '. ' + n : '')
      );
    }
    return (a, s, i) => {
      if (t === !1)
        throw new N(
          o(s, ' has been removed' + (r ? ' in ' + r : '')),
          N.ERR_DEPRECATED,
        );
      return (
        r &&
          !jh[s] &&
          ((jh[s] = !0),
          console.warn(
            o(
              s,
              ' has been deprecated since v' +
                r +
                ' and will be removed in the near future',
            ),
          )),
        t ? t(a, s, i) : !0
      );
    };
  };
  function Zj(e, t, r) {
    if (typeof e != 'object')
      throw new N('options must be an object', N.ERR_BAD_OPTION_VALUE);
    let n = Object.keys(e),
      o = n.length;
    for (; o-- > 0; ) {
      let a = n[o],
        s = t[a];
      if (s) {
        let i = e[a],
          u = i === void 0 || s(i, a, e);
        if (u !== !0)
          throw new N('option ' + a + ' must be ' + u, N.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (r !== !0) throw new N('Unknown option ' + a, N.ERR_BAD_OPTION);
    }
  }
  var ti = { assertOptions: Zj, validators: dc };
  var vr = ti.validators,
    Ln = class {
      constructor(t) {
        (this.defaults = t),
          (this.interceptors = { request: new Ql(), response: new Ql() });
      }
      async request(t, r) {
        try {
          return await this._request(t, r);
        } catch (n) {
          if (n instanceof Error) {
            let o;
            Error.captureStackTrace
              ? Error.captureStackTrace((o = {}))
              : (o = new Error());
            let a = o.stack ? o.stack.replace(/^.+\n/, '') : '';
            try {
              n.stack
                ? a &&
                  !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, '')) &&
                  (n.stack +=
                    `
` + a)
                : (n.stack = a);
            } catch {}
          }
          throw n;
        }
      }
      _request(t, r) {
        typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
          (r = vt(this.defaults, r));
        let { transitional: n, paramsSerializer: o, headers: a } = r;
        n !== void 0 &&
          ti.assertOptions(
            n,
            {
              silentJSONParsing: vr.transitional(vr.boolean),
              forcedJSONParsing: vr.transitional(vr.boolean),
              clarifyTimeoutError: vr.transitional(vr.boolean),
            },
            !1,
          ),
          o != null &&
            (S.isFunction(o)
              ? (r.paramsSerializer = { serialize: o })
              : ti.assertOptions(
                  o,
                  { encode: vr.function, serialize: vr.function },
                  !0,
                )),
          (r.method = (
            r.method ||
            this.defaults.method ||
            'get'
          ).toLowerCase());
        let s = a && S.merge(a.common, a[r.method]);
        a &&
          S.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            (h) => {
              delete a[h];
            },
          ),
          (r.headers = ye.concat(s, a));
        let i = [],
          u = !0;
        this.interceptors.request.forEach(function (j) {
          (typeof j.runWhen == 'function' && j.runWhen(r) === !1) ||
            ((u = u && j.synchronous), i.unshift(j.fulfilled, j.rejected));
        });
        let l = [];
        this.interceptors.response.forEach(function (j) {
          l.push(j.fulfilled, j.rejected);
        });
        let c,
          p = 0,
          g;
        if (!u) {
          let h = [Zs.bind(this), void 0];
          for (
            h.unshift.apply(h, i),
              h.push.apply(h, l),
              g = h.length,
              c = Promise.resolve(r);
            p < g;

          )
            c = c.then(h[p++], h[p++]);
          return c;
        }
        g = i.length;
        let k = r;
        for (p = 0; p < g; ) {
          let h = i[p++],
            j = i[p++];
          try {
            k = h(k);
          } catch (w) {
            j.call(this, w);
            break;
          }
        }
        try {
          c = Zs.call(this, k);
        } catch (h) {
          return Promise.reject(h);
        }
        for (p = 0, g = l.length; p < g; ) c = c.then(l[p++], l[p++]);
        return c;
      }
      getUri(t) {
        t = vt(this.defaults, t);
        let r = Xo(t.baseURL, t.url);
        return Wo(r, t.params, t.paramsSerializer);
      }
    };
  S.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Ln.prototype[t] = function (r, n) {
      return this.request(
        vt(n || {}, { method: t, url: r, data: (n || {}).data }),
      );
    };
  });
  S.forEach(['post', 'put', 'patch'], function (t) {
    function r(n) {
      return function (a, s, i) {
        return this.request(
          vt(i || {}, {
            method: t,
            headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
            url: a,
            data: s,
          }),
        );
      };
    }
    (Ln.prototype[t] = r()), (Ln.prototype[t + 'Form'] = r(!0));
  });
  var Qo = Ln;
  var fc = class e {
      constructor(t) {
        if (typeof t != 'function')
          throw new TypeError('executor must be a function.');
        let r;
        this.promise = new Promise(function (a) {
          r = a;
        });
        let n = this;
        this.promise.then((o) => {
          if (!n._listeners) return;
          let a = n._listeners.length;
          for (; a-- > 0; ) n._listeners[a](o);
          n._listeners = null;
        }),
          (this.promise.then = (o) => {
            let a,
              s = new Promise((i) => {
                n.subscribe(i), (a = i);
              }).then(o);
            return (
              (s.cancel = function () {
                n.unsubscribe(a);
              }),
              s
            );
          }),
          t(function (a, s, i) {
            n.reason || ((n.reason = new zt(a, s, i)), r(n.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(t) {
        if (this.reason) {
          t(this.reason);
          return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
      }
      unsubscribe(t) {
        if (!this._listeners) return;
        let r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1);
      }
      toAbortSignal() {
        let t = new AbortController(),
          r = (n) => {
            t.abort(n);
          };
        return (
          this.subscribe(r),
          (t.signal.unsubscribe = () => this.unsubscribe(r)),
          t.signal
        );
      }
      static source() {
        let t;
        return {
          token: new e(function (o) {
            t = o;
          }),
          cancel: t,
        };
      }
    },
    bh = fc;
  function hc(e) {
    return function (r) {
      return e.apply(null, r);
    };
  }
  function gc(e) {
    return S.isObject(e) && e.isAxiosError === !0;
  }
  var yc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(yc).forEach(([e, t]) => {
    yc[t] = e;
  });
  var wh = yc;
  function Eh(e) {
    let t = new Qo(e),
      r = Uo(Qo.prototype.request, t);
    return (
      S.extend(r, Qo.prototype, t, { allOwnKeys: !0 }),
      S.extend(r, t, null, { allOwnKeys: !0 }),
      (r.create = function (o) {
        return Eh(vt(e, o));
      }),
      r
    );
  }
  var de = Eh(Rn);
  de.Axios = Qo;
  de.CanceledError = zt;
  de.CancelToken = bh;
  de.isCancel = Jo;
  de.VERSION = ei;
  de.toFormData = kr;
  de.AxiosError = N;
  de.Cancel = de.CanceledError;
  de.all = function (t) {
    return Promise.all(t);
  };
  de.spread = hc;
  de.isAxiosError = gc;
  de.mergeConfig = vt;
  de.AxiosHeaders = ye;
  de.formToJSON = (e) => Gs(S.isHTMLForm(e) ? new FormData(e) : e);
  de.getAdapter = Ys.getAdapter;
  de.HttpStatusCode = wh;
  de.default = de;
  var Yo = de;
  var {
    Axios: LS,
    AxiosError: TS,
    CanceledError: DS,
    isCancel: IS,
    CancelToken: FS,
    VERSION: NS,
    all: MS,
    Cancel: qS,
    isAxiosError: BS,
    spread: US,
    toFormData: $S,
    AxiosHeaders: HS,
    HttpStatusCode: WS,
    formToJSON: VS,
    getAdapter: GS,
    mergeConfig: JS,
  } = Yo;
  var Dn = new Map(),
    In = (e) => {
      let [t, r] = (0, Tn.useState)(() => !Dn.has(e)),
        [n, o] = (0, Tn.useState)(null),
        [a, s] = (0, Tn.useState)(null);
      return (
        (0, Tn.useEffect)(() => {
          if (Dn.has(e)) {
            o(Dn.get(e) || null);
            return;
          }
          (async () => {
            r(!0);
            try {
              let l = (await Yo.get(e)).data;
              o(l), s(null);
            } catch (u) {
              s(u instanceof Error ? u : new Error('An error occurred')),
                o(null);
            } finally {
              r(!1);
            }
          })();
        }, [e]),
        { isLoading: t, data: n, error: a }
      );
    },
    xh = async (e) => {
      try {
        let t = await Yo.get(e);
        Dn.set(e, t.data);
      } catch {
        throw new Error('An error has occurred');
      }
    };
  var Sh = (e) => {
    try {
      let t = JSON.parse(e);
      Object.entries(t).forEach(([r, n]) => {
        Dn.set(r, n);
      });
    } catch (t) {
      console.error('Failed to initialize cache:', t), Dn.clear();
    }
  };
  var Ht = Xr(Rr());
  var e0 = class extends Error {
      issues;
      constructor(e) {
        super(e[0].message), (this.name = 'ValiError'), (this.issues = e);
      }
    },
    YS = Symbol('brand');
  function ni(e, t) {
    return Array.isArray(e) ? [void 0, e] : [e, t];
  }
  var ri;
  function t0(e) {
    return {
      lang: e?.lang ?? ri?.lang,
      message: e?.message,
      abortEarly: e?.abortEarly ?? ri?.abortEarly,
      abortPipeEarly: e?.abortPipeEarly ?? ri?.abortPipeEarly,
      skipPipe: e?.skipPipe ?? ri?.skipPipe,
    };
  }
  var r0;
  function n0(e) {
    return r0?.get(e);
  }
  var o0;
  function a0(e) {
    return o0?.get(e);
  }
  var s0;
  function i0(e, t) {
    return s0?.get(e)?.get(t);
  }
  function Ch(e, t, r, n, o) {
    let a =
      t.message ??
      i0(r, o.lang) ??
      (e ? a0(o.lang) : null) ??
      n?.message ??
      n0(o.lang) ??
      o.message;
    return typeof a == 'function' ? a(o) : a;
  }
  function kc(e, t, r) {
    return { typed: e, output: t, issues: r };
  }
  function _h(e) {
    let t = typeof e;
    return (
      t === 'object' &&
        (t = e ? Object.getPrototypeOf(e).constructor.name : 'null'),
      t === 'string'
        ? `"${e}"`
        : t === 'number' || t === 'bigint' || t === 'boolean'
          ? `${e}`
          : t
    );
  }
  function u0(e, t, r) {
    let n = r.received ?? _h(r.input),
      o = {
        reason: e.type,
        context: r.context.type,
        expected: r.context.expects,
        received: n,
        message: `Invalid ${r.label}: ${r.context.expects ? `Expected ${r.context.expects} but r` : 'R'}eceived ${n}`,
        input: r.input,
        requirement: r.context.requirement,
        path: r.path,
        lang: t?.lang,
        abortEarly: t?.abortEarly,
        abortPipeEarly: t?.abortPipeEarly,
        skipPipe: t?.skipPipe,
      };
    return (o.message = Ch(!1, r.context, r.reference, t, o)), o;
  }
  function vc(e, t, r, n) {
    if (e.pipe && !r?.skipPipe)
      for (let o of e.pipe) {
        let a = o._parse(t);
        if (a.issues) {
          for (let s of a.issues) {
            let i = u0(e, r, s);
            n ? n.push(i) : (n = [i]);
          }
          if (r?.abortEarly || r?.abortPipeEarly) break;
        } else t = a.output;
      }
    return kc(!0, t, n);
  }
  function l0(e, t, r) {
    if (!e || (typeof e == 'object' && !Array.isArray(e))) {
      let [a, s] = ni(t, r);
      return [e, a, s];
    }
    let [n, o] = ni(e, t);
    return [void 0, n, o];
  }
  function jc(e, t, r, n, o) {
    let a = _h(r),
      s = o?.expected ?? e.expects,
      i = {
        reason: o?.reason ?? 'type',
        context: e.type,
        expected: s,
        received: a,
        message: `Invalid type: Expected ${s} but received ${a}`,
        input: r,
        path: o?.path,
        issues: o?.issues,
        lang: n?.lang,
        abortEarly: n?.abortEarly,
        abortPipeEarly: n?.abortPipeEarly,
        skipPipe: n?.skipPipe,
      };
    return (
      (i.message = Ch(!0, e, t, n, i)), { typed: !1, output: r, issues: [i] }
    );
  }
  function bc(e, t, r) {
    let [n, o] = ni(t, r);
    return {
      type: 'array',
      expects: 'Array',
      async: !1,
      item: e,
      message: n,
      pipe: o,
      _parse(a, s) {
        if (Array.isArray(a)) {
          let i = !0,
            u,
            l = [];
          for (let c = 0; c < a.length; c++) {
            let p = a[c],
              g = this.item._parse(p, s);
            if (g.issues) {
              let k = {
                type: 'array',
                origin: 'value',
                input: a,
                key: c,
                value: p,
              };
              for (let h of g.issues)
                h.path ? h.path.unshift(k) : (h.path = [k]), u?.push(h);
              if ((u || (u = g.issues), s?.abortEarly)) {
                i = !1;
                break;
              }
            }
            g.typed || (i = !1), l.push(g.output);
          }
          return i ? vc(this, l, s, u) : kc(!1, l, u);
        }
        return jc(this, bc, a, s);
      },
    };
  }
  function wc(e, t, r, n) {
    let [o, a, s] = l0(t, r, n),
      i;
    return {
      type: 'object',
      expects: 'Object',
      async: !1,
      entries: e,
      rest: o,
      message: a,
      pipe: s,
      _parse(u, l) {
        if (u && typeof u == 'object') {
          i = i ?? Object.entries(this.entries);
          let c = !0,
            p,
            g = {};
          for (let [k, h] of i) {
            let j = u[k],
              w = h._parse(j, l);
            if (w.issues) {
              let d = {
                type: 'object',
                origin: 'value',
                input: u,
                key: k,
                value: j,
              };
              for (let m of w.issues)
                m.path ? m.path.unshift(d) : (m.path = [d]), p?.push(m);
              if ((p || (p = w.issues), l?.abortEarly)) {
                c = !1;
                break;
              }
            }
            w.typed || (c = !1),
              (w.output !== void 0 || k in u) && (g[k] = w.output);
          }
          if (this.rest && !(l?.abortEarly && p)) {
            for (let k in u)
              if (!(k in this.entries)) {
                let h = u[k],
                  j = this.rest._parse(h, l);
                if (j.issues) {
                  let w = {
                    type: 'object',
                    origin: 'value',
                    input: u,
                    key: k,
                    value: h,
                  };
                  for (let d of j.issues)
                    d.path ? d.path.unshift(w) : (d.path = [w]), p?.push(d);
                  if ((p || (p = j.issues), l?.abortEarly)) {
                    c = !1;
                    break;
                  }
                }
                j.typed || (c = !1), (g[k] = j.output);
              }
          }
          return c ? vc(this, g, l, p) : kc(!1, g, p);
        }
        return jc(this, wc, u, l);
      },
    };
  }
  function jr(e, t) {
    let [r, n] = ni(e, t);
    return {
      type: 'string',
      expects: 'string',
      async: !1,
      message: r,
      pipe: n,
      _parse(o, a) {
        return typeof o == 'string' ? vc(this, o, a) : jc(this, jr, o, a);
      },
    };
  }
  function zh(e, t, r) {
    let n = e._parse(t, t0(r));
    if (n.issues) throw new e0(n.issues);
    return n.output;
  }
  var p0 = bc(
      wc({
        first: jr(),
        last: jr(),
        email: jr(),
        address: jr(),
        created: jr(),
        balance: jr(),
      }),
    ),
    Fn = (e) => zh(p0, e);
  var Zo = Xr(Rr());
  var m0 = ({ index: e }) => {
      let {
        data: t,
        isLoading: r,
        error: n,
      } = In(
        'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123',
      );
      if (r) return Zo.default.createElement('div', null, 'Loading...');
      if (n || t === null)
        return Zo.default.createElement('div', null, 'Error: ', n?.message);
      let a = Fn(t)[e];
      return Zo.default.createElement(
        'div',
        null,
        Zo.default.createElement('h2', null, a.first, ' ', a.last),
      );
    },
    Ah = m0;
  var d0 = ({ index: e }) => {
      let {
        data: t,
        isLoading: r,
        error: n,
      } = In(
        'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123',
      );
      if (r) return Ht.default.createElement('div', null, 'Loading...');
      if (n || t === null)
        return Ht.default.createElement('div', null, 'Error: ', n?.message);
      let a = Fn(t)[e];
      return Ht.default.createElement(
        'div',
        null,
        Ht.default.createElement(Ah, { index: e }),
        Ht.default.createElement('p', null, a.email),
        Ht.default.createElement('p', null, a.address),
        Ht.default.createElement('p', null, a.balance),
        Ht.default.createElement('p', null, a.created),
      );
    },
    Rh = d0;
  var Ph = () => {
    let {
      data: e,
      isLoading: t,
      error: r,
    } = In(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123',
    );
    if (t) return Nn.default.createElement('div', null, 'Loading...');
    if (r || e === null)
      return Nn.default.createElement('div', null, 'Error: ', r?.message);
    let n = Fn(e);
    return Nn.default.createElement(
      'div',
      null,
      Nn.default.createElement('h1', null, 'Welcome to the People Directory'),
      n.map((o, a) => Nn.default.createElement(Rh, { key: o.email, index: a })),
    );
  };
  Ph.preLoadServerData = async () => {
    await xh(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123',
    );
  };
  var Oh = Ph;
  var f0 = /(%?)(%([sdijo]))/g;
  function h0(e, t) {
    switch (t) {
      case 's':
        return e;
      case 'd':
      case 'i':
        return Number(e);
      case 'j':
        return JSON.stringify(e);
      case 'o': {
        if (typeof e == 'string') return e;
        let r = JSON.stringify(e);
        return r === '{}' || r === '[]' || /^\[object .+?\]$/.test(r) ? e : r;
      }
    }
  }
  function br(e, ...t) {
    if (t.length === 0) return e;
    let r = 0,
      n = e.replace(f0, (o, a, s, i) => {
        let u = t[r],
          l = h0(u, i);
        return a ? o : (r++, l);
      });
    return (
      r < t.length && (n += ` ${t.slice(r).join(' ')}`),
      (n = n.replace(/%{2,2}/g, '%')),
      n
    );
  }
  var g0 = 2;
  function y0(e) {
    if (!e.stack) return;
    let t = e.stack.split(`
`);
    t.splice(1, g0),
      (e.stack = t.join(`
`));
  }
  var k0 = class extends Error {
      constructor(e, ...t) {
        super(e),
          (this.message = e),
          (this.name = 'Invariant Violation'),
          (this.message = br(e, ...t)),
          y0(this);
      }
    },
    Pe = (e, t, ...r) => {
      if (!e) throw new k0(t, ...r);
    };
  Pe.as = (e, t, r, ...n) => {
    if (!t) {
      let o = n.length === 0 ? r : br(r, ...n),
        a;
      try {
        a = Reflect.construct(e, [o]);
      } catch {
        a = e(o);
      }
      throw a;
    }
  };
  var v0 = '[MSW]';
  function Ec(e, ...t) {
    let r = br(e, ...t);
    return `${v0} ${r}`;
  }
  function j0(e, ...t) {
    console.warn(Ec(e, ...t));
  }
  function b0(e, ...t) {
    console.error(Ec(e, ...t));
  }
  var M = { formatMessage: Ec, warn: j0, error: b0 },
    ea = class extends Error {
      constructor(t) {
        super(t), (this.name = 'InternalError');
      }
    };
  var w0 = /[\/\\]msw[\/\\]src[\/\\](.+)/,
    E0 =
      /(node_modules)?[\/\\]lib[\/\\](core|browser|node|native|iife)[\/\\]|^[^\/\\]*$/;
  function oi(e) {
    let t = e.stack;
    if (!t) return;
    let n = t
      .split(
        `
`,
      )
      .slice(1)
      .find((a) => !(w0.test(a) || E0.test(a)));
    return n
      ? n.replace(/\s*at [^()]*\(([^)]+)\)/, '$1').replace(/^@/, '')
      : void 0;
  }
  function Lh(e) {
    return e
      ? Reflect.has(e, Symbol.iterator) || Reflect.has(e, Symbol.asyncIterator)
      : !1;
  }
  var Mn = class e {
    static cache = new WeakMap();
    __kind;
    info;
    isUsed;
    resolver;
    resolverIterator;
    resolverIteratorResult;
    options;
    constructor(t) {
      (this.resolver = t.resolver), (this.options = t.options);
      let r = oi(new Error());
      (this.info = { ...t.info, callFrame: r }),
        (this.isUsed = !1),
        (this.__kind = 'RequestHandler');
    }
    async parse(t) {
      return {};
    }
    async test(t) {
      let r = await this.parse({
        request: t.request,
        resolutionContext: t.resolutionContext,
      });
      return this.predicate({
        request: t.request,
        parsedResult: r,
        resolutionContext: t.resolutionContext,
      });
    }
    extendResolverArgs(t) {
      return {};
    }
    cloneRequestOrGetFromCache(t) {
      let r = e.cache.get(t);
      if (typeof r < 'u') return r;
      let n = t.clone();
      return e.cache.set(t, n), n;
    }
    async run(t) {
      if (this.isUsed && this.options?.once) return null;
      let r = this.cloneRequestOrGetFromCache(t.request),
        n = await this.parse({
          request: t.request,
          resolutionContext: t.resolutionContext,
        });
      if (
        !this.predicate({
          request: t.request,
          parsedResult: n,
          resolutionContext: t.resolutionContext,
        }) ||
        (this.isUsed && this.options?.once)
      )
        return null;
      this.isUsed = !0;
      let a = this.wrapResolver(this.resolver),
        s = this.extendResolverArgs({ request: t.request, parsedResult: n }),
        u = await a({ ...s, requestId: t.requestId, request: t.request }).catch(
          (c) => {
            if (c instanceof Response) return c;
            throw c;
          },
        );
      return this.createExecutionResult({
        request: r,
        requestId: t.requestId,
        response: u,
        parsedResult: n,
      });
    }
    wrapResolver(t) {
      return async (r) => {
        if (!this.resolverIterator) {
          let s = await t(r);
          if (!Lh(s)) return s;
          this.resolverIterator =
            Symbol.iterator in s
              ? s[Symbol.iterator]()
              : s[Symbol.asyncIterator]();
        }
        this.isUsed = !1;
        let { done: n, value: o } = await this.resolverIterator.next(),
          a = await o;
        return (
          a && (this.resolverIteratorResult = a.clone()),
          n ? ((this.isUsed = !0), this.resolverIteratorResult?.clone()) : a
        );
      };
    }
    createExecutionResult(t) {
      return {
        handler: this,
        request: t.request,
        requestId: t.requestId,
        response: t.response,
        parsedResult: t.parsedResult,
      };
    }
  };
  var Th = async (e) => {
    try {
      return {
        error: null,
        data: await e().catch((r) => {
          throw r;
        }),
      };
    } catch (t) {
      return { error: t, data: null };
    }
  };
  var Dh = async ({
    request: e,
    requestId: t,
    handlers: r,
    resolutionContext: n,
  }) => {
    let o = null,
      a = null;
    for (let s of r)
      if (
        ((a = await s.run({ request: e, requestId: t, resolutionContext: n })),
        a !== null && (o = s),
        a?.response)
      )
        break;
    return o
      ? { handler: o, parsedResult: a?.parsedResult, response: a?.response }
      : null;
  };
  function wr(e) {
    if (typeof location > 'u') return e.toString();
    let t = e instanceof URL ? e : new URL(e);
    return t.origin === location.origin ? t.pathname : t.origin + t.pathname;
  }
  async function ai(e, t = 'warn') {
    let r = new URL(e.url),
      n = wr(r) + r.search,
      o =
        e.method === 'HEAD' || e.method === 'GET'
          ? null
          : await e.clone().text(),
      s = `intercepted a request without a matching request handler:${`

  \u2022 ${e.method} ${n}

${
  o
    ? `  \u2022 Request body: ${o}

`
    : ''
}`}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
    function i(u) {
      switch (u) {
        case 'error':
          throw (
            (M.error('Error: %s', s),
            new ea(
              M.formatMessage(
                'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.',
              ),
            ))
          );
        case 'warn': {
          M.warn('Warning: %s', s);
          break;
        }
        case 'bypass':
          break;
        default:
          throw new ea(
            M.formatMessage(
              'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
              u,
            ),
          );
      }
    }
    if (typeof t == 'function') {
      t(e, { warning: i.bind(null, 'warn'), error: i.bind(null, 'error') });
      return;
    }
    r.protocol !== 'file:' && i(t);
  }
  function qn() {
    if (typeof navigator < 'u' && navigator.product === 'ReactNative')
      return !0;
    if (typeof process < 'u') {
      let e = process.type;
      return e === 'renderer' || e === 'worker'
        ? !1
        : !!(process.versions && process.versions.node);
    }
    return !1;
  }
  var x0 = Object.create,
    Ih = Object.defineProperty,
    S0 = Object.getOwnPropertyDescriptor,
    Fh = Object.getOwnPropertyNames,
    C0 = Object.getPrototypeOf,
    _0 = Object.prototype.hasOwnProperty,
    z0 = ((e) =>
      typeof zr < 'u'
        ? zr
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, r) => (typeof zr < 'u' ? zr : t)[r] })
          : e)(function (e) {
      if (typeof zr < 'u') return zr.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    }),
    Oe = (e, t) =>
      function () {
        return (
          t || (0, e[Fh(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    A0 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Fh(t))
          !_0.call(e, o) &&
            o !== r &&
            Ih(e, o, {
              get: () => t[o],
              enumerable: !(n = S0(t, o)) || n.enumerable,
            });
      return e;
    },
    R0 = (e, t, r) => (
      (r = e != null ? x0(C0(e)) : {}),
      A0(
        t || !e || !e.__esModule
          ? Ih(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    Nh = Oe({
      'node_modules/punycode/punycode.js'(e, t) {
        'use strict';
        var r = 2147483647,
          n = 36,
          o = 1,
          a = 26,
          s = 38,
          i = 700,
          u = 72,
          l = 128,
          c = '-',
          p = /^xn--/,
          g = /[^\0-\x7F]/,
          k = /[\x2E\u3002\uFF0E\uFF61]/g,
          h = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          j = n - o,
          w = Math.floor,
          d = String.fromCharCode;
        function m(z) {
          throw new RangeError(h[z]);
        }
        function f(z, q) {
          let ie = [],
            W = z.length;
          for (; W--; ) ie[W] = q(z[W]);
          return ie;
        }
        function y(z, q) {
          let ie = z.split('@'),
            W = '';
          ie.length > 1 && ((W = ie[0] + '@'), (z = ie[1])),
            (z = z.replace(k, '.'));
          let ae = z.split('.'),
            Ee = f(ae, q).join('.');
          return W + Ee;
        }
        function b(z) {
          let q = [],
            ie = 0,
            W = z.length;
          for (; ie < W; ) {
            let ae = z.charCodeAt(ie++);
            if (ae >= 55296 && ae <= 56319 && ie < W) {
              let Ee = z.charCodeAt(ie++);
              (Ee & 64512) == 56320
                ? q.push(((ae & 1023) << 10) + (Ee & 1023) + 65536)
                : (q.push(ae), ie--);
            } else q.push(ae);
          }
          return q;
        }
        var C = (z) => String.fromCodePoint(...z),
          x = function (z) {
            return z >= 48 && z < 58
              ? 26 + (z - 48)
              : z >= 65 && z < 91
                ? z - 65
                : z >= 97 && z < 123
                  ? z - 97
                  : n;
          },
          R = function (z, q) {
            return z + 22 + 75 * (z < 26) - ((q != 0) << 5);
          },
          L = function (z, q, ie) {
            let W = 0;
            for (
              z = ie ? w(z / i) : z >> 1, z += w(z / q);
              z > (j * a) >> 1;
              W += n
            )
              z = w(z / j);
            return w(W + ((j + 1) * z) / (z + s));
          },
          T = function (z) {
            let q = [],
              ie = z.length,
              W = 0,
              ae = l,
              Ee = u,
              ut = z.lastIndexOf(c);
            ut < 0 && (ut = 0);
            for (let xe = 0; xe < ut; ++xe)
              z.charCodeAt(xe) >= 128 && m('not-basic'),
                q.push(z.charCodeAt(xe));
            for (let xe = ut > 0 ? ut + 1 : 0; xe < ie; ) {
              let Se = W;
              for (let He = 1, Ze = n; ; Ze += n) {
                xe >= ie && m('invalid-input');
                let Te = x(z.charCodeAt(xe++));
                Te >= n && m('invalid-input'),
                  Te > w((r - W) / He) && m('overflow'),
                  (W += Te * He);
                let ee = Ze <= Ee ? o : Ze >= Ee + a ? a : Ze - Ee;
                if (Te < ee) break;
                let Jt = n - ee;
                He > w(r / Jt) && m('overflow'), (He *= Jt);
              }
              let Ye = q.length + 1;
              (Ee = L(W - Se, Ye, Se == 0)),
                w(W / Ye) > r - ae && m('overflow'),
                (ae += w(W / Ye)),
                (W %= Ye),
                q.splice(W++, 0, ae);
            }
            return String.fromCodePoint(...q);
          },
          I = function (z) {
            let q = [];
            z = b(z);
            let ie = z.length,
              W = l,
              ae = 0,
              Ee = u;
            for (let Se of z) Se < 128 && q.push(d(Se));
            let ut = q.length,
              xe = ut;
            for (ut && q.push(c); xe < ie; ) {
              let Se = r;
              for (let He of z) He >= W && He < Se && (Se = He);
              let Ye = xe + 1;
              Se - W > w((r - ae) / Ye) && m('overflow'),
                (ae += (Se - W) * Ye),
                (W = Se);
              for (let He of z)
                if ((He < W && ++ae > r && m('overflow'), He === W)) {
                  let Ze = ae;
                  for (let Te = n; ; Te += n) {
                    let ee = Te <= Ee ? o : Te >= Ee + a ? a : Te - Ee;
                    if (Ze < ee) break;
                    let Jt = Ze - ee,
                      bt = n - ee;
                    q.push(d(R(ee + (Jt % bt), 0))), (Ze = w(Jt / bt));
                  }
                  q.push(d(R(Ze, 0))),
                    (Ee = L(ae, Ye, xe === ut)),
                    (ae = 0),
                    ++xe;
                }
              ++ae, ++W;
            }
            return q.join('');
          },
          Z = function (z) {
            return y(z, function (q) {
              return p.test(q) ? T(q.slice(4).toLowerCase()) : q;
            });
          },
          jt = function (z) {
            return y(z, function (q) {
              return g.test(q) ? 'xn--' + I(q) : q;
            });
          },
          it = {
            version: '2.3.1',
            ucs2: { decode: b, encode: C },
            decode: T,
            encode: I,
            toASCII: jt,
            toUnicode: Z,
          };
        t.exports = it;
      },
    }),
    P0 = Oe({
      'node_modules/requires-port/index.js'(e, t) {
        'use strict';
        t.exports = function (n, o) {
          if (((o = o.split(':')[0]), (n = +n), !n)) return !1;
          switch (o) {
            case 'http':
            case 'ws':
              return n !== 80;
            case 'https':
            case 'wss':
              return n !== 443;
            case 'ftp':
              return n !== 21;
            case 'gopher':
              return n !== 70;
            case 'file':
              return !1;
          }
          return n !== 0;
        };
      },
    }),
    O0 = Oe({
      'node_modules/querystringify/index.js'(e) {
        'use strict';
        var t = Object.prototype.hasOwnProperty,
          r;
        function n(i) {
          try {
            return decodeURIComponent(i.replace(/\+/g, ' '));
          } catch {
            return null;
          }
        }
        function o(i) {
          try {
            return encodeURIComponent(i);
          } catch {
            return null;
          }
        }
        function a(i) {
          for (var u = /([^=?#&]+)=?([^&]*)/g, l = {}, c; (c = u.exec(i)); ) {
            var p = n(c[1]),
              g = n(c[2]);
            p === null || g === null || p in l || (l[p] = g);
          }
          return l;
        }
        function s(i, u) {
          u = u || '';
          var l = [],
            c,
            p;
          typeof u != 'string' && (u = '?');
          for (p in i)
            if (t.call(i, p)) {
              if (
                ((c = i[p]),
                !c && (c === null || c === r || isNaN(c)) && (c = ''),
                (p = o(p)),
                (c = o(c)),
                p === null || c === null)
              )
                continue;
              l.push(p + '=' + c);
            }
          return l.length ? u + l.join('&') : '';
        }
        (e.stringify = s), (e.parse = a);
      },
    }),
    L0 = Oe({
      'node_modules/url-parse/index.js'(e, t) {
        'use strict';
        var r = P0(),
          n = O0(),
          o =
            /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
          a = /[\n\r\t]/g,
          s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          i = /:\d+$/,
          u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
          l = /^[a-zA-Z]:/;
        function c(y) {
          return (y || '').toString().replace(o, '');
        }
        var p = [
            ['#', 'hash'],
            ['?', 'query'],
            function (b, C) {
              return h(C.protocol) ? b.replace(/\\/g, '/') : b;
            },
            ['/', 'pathname'],
            ['@', 'auth', 1],
            [NaN, 'host', void 0, 1, 1],
            [/:(\d*)$/, 'port', void 0, 1],
            [NaN, 'hostname', void 0, 1, 1],
          ],
          g = { hash: 1, query: 1 };
        function k(y) {
          var b;
          typeof window < 'u'
            ? (b = window)
            : typeof global < 'u'
              ? (b = global)
              : typeof self < 'u'
                ? (b = self)
                : (b = {});
          var C = b.location || {};
          y = y || C;
          var x = {},
            R = typeof y,
            L;
          if (y.protocol === 'blob:') x = new d(unescape(y.pathname), {});
          else if (R === 'string') {
            x = new d(y, {});
            for (L in g) delete x[L];
          } else if (R === 'object') {
            for (L in y) L in g || (x[L] = y[L]);
            x.slashes === void 0 && (x.slashes = s.test(y.href));
          }
          return x;
        }
        function h(y) {
          return (
            y === 'file:' ||
            y === 'ftp:' ||
            y === 'http:' ||
            y === 'https:' ||
            y === 'ws:' ||
            y === 'wss:'
          );
        }
        function j(y, b) {
          (y = c(y)), (y = y.replace(a, '')), (b = b || {});
          var C = u.exec(y),
            x = C[1] ? C[1].toLowerCase() : '',
            R = !!C[2],
            L = !!C[3],
            T = 0,
            I;
          return (
            R
              ? L
                ? ((I = C[2] + C[3] + C[4]), (T = C[2].length + C[3].length))
                : ((I = C[2] + C[4]), (T = C[2].length))
              : L
                ? ((I = C[3] + C[4]), (T = C[3].length))
                : (I = C[4]),
            x === 'file:'
              ? T >= 2 && (I = I.slice(2))
              : h(x)
                ? (I = C[4])
                : x
                  ? R && (I = I.slice(2))
                  : T >= 2 && h(b.protocol) && (I = C[4]),
            { protocol: x, slashes: R || h(x), slashesCount: T, rest: I }
          );
        }
        function w(y, b) {
          if (y === '') return b;
          for (
            var C = (b || '/').split('/').slice(0, -1).concat(y.split('/')),
              x = C.length,
              R = C[x - 1],
              L = !1,
              T = 0;
            x--;

          )
            C[x] === '.'
              ? C.splice(x, 1)
              : C[x] === '..'
                ? (C.splice(x, 1), T++)
                : T && (x === 0 && (L = !0), C.splice(x, 1), T--);
          return (
            L && C.unshift(''),
            (R === '.' || R === '..') && C.push(''),
            C.join('/')
          );
        }
        function d(y, b, C) {
          if (((y = c(y)), (y = y.replace(a, '')), !(this instanceof d)))
            return new d(y, b, C);
          var x,
            R,
            L,
            T,
            I,
            Z,
            jt = p.slice(),
            it = typeof b,
            z = this,
            q = 0;
          for (
            it !== 'object' && it !== 'string' && ((C = b), (b = null)),
              C && typeof C != 'function' && (C = n.parse),
              b = k(b),
              R = j(y || '', b),
              x = !R.protocol && !R.slashes,
              z.slashes = R.slashes || (x && b.slashes),
              z.protocol = R.protocol || b.protocol || '',
              y = R.rest,
              ((R.protocol === 'file:' &&
                (R.slashesCount !== 2 || l.test(y))) ||
                (!R.slashes &&
                  (R.protocol || R.slashesCount < 2 || !h(z.protocol)))) &&
                (jt[3] = [/(.*)/, 'pathname']);
            q < jt.length;
            q++
          ) {
            if (((T = jt[q]), typeof T == 'function')) {
              y = T(y, z);
              continue;
            }
            (L = T[0]),
              (Z = T[1]),
              L !== L
                ? (z[Z] = y)
                : typeof L == 'string'
                  ? ((I = L === '@' ? y.lastIndexOf(L) : y.indexOf(L)),
                    ~I &&
                      (typeof T[2] == 'number'
                        ? ((z[Z] = y.slice(0, I)), (y = y.slice(I + T[2])))
                        : ((z[Z] = y.slice(I)), (y = y.slice(0, I)))))
                  : (I = L.exec(y)) &&
                    ((z[Z] = I[1]), (y = y.slice(0, I.index))),
              (z[Z] = z[Z] || (x && T[3] && b[Z]) || ''),
              T[4] && (z[Z] = z[Z].toLowerCase());
          }
          C && (z.query = C(z.query)),
            x &&
              b.slashes &&
              z.pathname.charAt(0) !== '/' &&
              (z.pathname !== '' || b.pathname !== '') &&
              (z.pathname = w(z.pathname, b.pathname)),
            z.pathname.charAt(0) !== '/' &&
              h(z.protocol) &&
              (z.pathname = '/' + z.pathname),
            r(z.port, z.protocol) || ((z.host = z.hostname), (z.port = '')),
            (z.username = z.password = ''),
            z.auth &&
              ((I = z.auth.indexOf(':')),
              ~I
                ? ((z.username = z.auth.slice(0, I)),
                  (z.username = encodeURIComponent(
                    decodeURIComponent(z.username),
                  )),
                  (z.password = z.auth.slice(I + 1)),
                  (z.password = encodeURIComponent(
                    decodeURIComponent(z.password),
                  )))
                : (z.username = encodeURIComponent(decodeURIComponent(z.auth))),
              (z.auth = z.password
                ? z.username + ':' + z.password
                : z.username)),
            (z.origin =
              z.protocol !== 'file:' && h(z.protocol) && z.host
                ? z.protocol + '//' + z.host
                : 'null'),
            (z.href = z.toString());
        }
        function m(y, b, C) {
          var x = this;
          switch (y) {
            case 'query':
              typeof b == 'string' && b.length && (b = (C || n.parse)(b)),
                (x[y] = b);
              break;
            case 'port':
              (x[y] = b),
                r(b, x.protocol)
                  ? b && (x.host = x.hostname + ':' + b)
                  : ((x.host = x.hostname), (x[y] = ''));
              break;
            case 'hostname':
              (x[y] = b), x.port && (b += ':' + x.port), (x.host = b);
              break;
            case 'host':
              (x[y] = b),
                i.test(b)
                  ? ((b = b.split(':')),
                    (x.port = b.pop()),
                    (x.hostname = b.join(':')))
                  : ((x.hostname = b), (x.port = ''));
              break;
            case 'protocol':
              (x.protocol = b.toLowerCase()), (x.slashes = !C);
              break;
            case 'pathname':
            case 'hash':
              if (b) {
                var R = y === 'pathname' ? '/' : '#';
                x[y] = b.charAt(0) !== R ? R + b : b;
              } else x[y] = b;
              break;
            case 'username':
            case 'password':
              x[y] = encodeURIComponent(b);
              break;
            case 'auth':
              var L = b.indexOf(':');
              ~L
                ? ((x.username = b.slice(0, L)),
                  (x.username = encodeURIComponent(
                    decodeURIComponent(x.username),
                  )),
                  (x.password = b.slice(L + 1)),
                  (x.password = encodeURIComponent(
                    decodeURIComponent(x.password),
                  )))
                : (x.username = encodeURIComponent(decodeURIComponent(b)));
          }
          for (var T = 0; T < p.length; T++) {
            var I = p[T];
            I[4] && (x[I[1]] = x[I[1]].toLowerCase());
          }
          return (
            (x.auth = x.password ? x.username + ':' + x.password : x.username),
            (x.origin =
              x.protocol !== 'file:' && h(x.protocol) && x.host
                ? x.protocol + '//' + x.host
                : 'null'),
            (x.href = x.toString()),
            x
          );
        }
        function f(y) {
          (!y || typeof y != 'function') && (y = n.stringify);
          var b,
            C = this,
            x = C.host,
            R = C.protocol;
          R && R.charAt(R.length - 1) !== ':' && (R += ':');
          var L = R + ((C.protocol && C.slashes) || h(C.protocol) ? '//' : '');
          return (
            C.username
              ? ((L += C.username),
                C.password && (L += ':' + C.password),
                (L += '@'))
              : C.password
                ? ((L += ':' + C.password), (L += '@'))
                : C.protocol !== 'file:' &&
                  h(C.protocol) &&
                  !x &&
                  C.pathname !== '/' &&
                  (L += '@'),
            (x[x.length - 1] === ':' || (i.test(C.hostname) && !C.port)) &&
              (x += ':'),
            (L += x + C.pathname),
            (b = typeof C.query == 'object' ? y(C.query) : C.query),
            b && (L += b.charAt(0) !== '?' ? '?' + b : b),
            C.hash && (L += C.hash),
            L
          );
        }
        (d.prototype = { set: m, toString: f }),
          (d.extractProtocol = j),
          (d.location = k),
          (d.trimLeft = c),
          (d.qs = n),
          (t.exports = d);
      },
    }),
    T0 = Oe({
      'node_modules/psl/data/rules.json'(e, t) {
        t.exports = [
          'ac',
          'com.ac',
          'edu.ac',
          'gov.ac',
          'net.ac',
          'mil.ac',
          'org.ac',
          'ad',
          'nom.ad',
          'ae',
          'co.ae',
          'net.ae',
          'org.ae',
          'sch.ae',
          'ac.ae',
          'gov.ae',
          'mil.ae',
          'aero',
          'accident-investigation.aero',
          'accident-prevention.aero',
          'aerobatic.aero',
          'aeroclub.aero',
          'aerodrome.aero',
          'agents.aero',
          'aircraft.aero',
          'airline.aero',
          'airport.aero',
          'air-surveillance.aero',
          'airtraffic.aero',
          'air-traffic-control.aero',
          'ambulance.aero',
          'amusement.aero',
          'association.aero',
          'author.aero',
          'ballooning.aero',
          'broker.aero',
          'caa.aero',
          'cargo.aero',
          'catering.aero',
          'certification.aero',
          'championship.aero',
          'charter.aero',
          'civilaviation.aero',
          'club.aero',
          'conference.aero',
          'consultant.aero',
          'consulting.aero',
          'control.aero',
          'council.aero',
          'crew.aero',
          'design.aero',
          'dgca.aero',
          'educator.aero',
          'emergency.aero',
          'engine.aero',
          'engineer.aero',
          'entertainment.aero',
          'equipment.aero',
          'exchange.aero',
          'express.aero',
          'federation.aero',
          'flight.aero',
          'fuel.aero',
          'gliding.aero',
          'government.aero',
          'groundhandling.aero',
          'group.aero',
          'hanggliding.aero',
          'homebuilt.aero',
          'insurance.aero',
          'journal.aero',
          'journalist.aero',
          'leasing.aero',
          'logistics.aero',
          'magazine.aero',
          'maintenance.aero',
          'media.aero',
          'microlight.aero',
          'modelling.aero',
          'navigation.aero',
          'parachuting.aero',
          'paragliding.aero',
          'passenger-association.aero',
          'pilot.aero',
          'press.aero',
          'production.aero',
          'recreation.aero',
          'repbody.aero',
          'res.aero',
          'research.aero',
          'rotorcraft.aero',
          'safety.aero',
          'scientist.aero',
          'services.aero',
          'show.aero',
          'skydiving.aero',
          'software.aero',
          'student.aero',
          'trader.aero',
          'trading.aero',
          'trainer.aero',
          'union.aero',
          'workinggroup.aero',
          'works.aero',
          'af',
          'gov.af',
          'com.af',
          'org.af',
          'net.af',
          'edu.af',
          'ag',
          'com.ag',
          'org.ag',
          'net.ag',
          'co.ag',
          'nom.ag',
          'ai',
          'off.ai',
          'com.ai',
          'net.ai',
          'org.ai',
          'al',
          'com.al',
          'edu.al',
          'gov.al',
          'mil.al',
          'net.al',
          'org.al',
          'am',
          'co.am',
          'com.am',
          'commune.am',
          'net.am',
          'org.am',
          'ao',
          'ed.ao',
          'gv.ao',
          'og.ao',
          'co.ao',
          'pb.ao',
          'it.ao',
          'aq',
          'ar',
          'bet.ar',
          'com.ar',
          'coop.ar',
          'edu.ar',
          'gob.ar',
          'gov.ar',
          'int.ar',
          'mil.ar',
          'musica.ar',
          'mutual.ar',
          'net.ar',
          'org.ar',
          'senasa.ar',
          'tur.ar',
          'arpa',
          'e164.arpa',
          'in-addr.arpa',
          'ip6.arpa',
          'iris.arpa',
          'uri.arpa',
          'urn.arpa',
          'as',
          'gov.as',
          'asia',
          'at',
          'ac.at',
          'co.at',
          'gv.at',
          'or.at',
          'sth.ac.at',
          'au',
          'com.au',
          'net.au',
          'org.au',
          'edu.au',
          'gov.au',
          'asn.au',
          'id.au',
          'info.au',
          'conf.au',
          'oz.au',
          'act.au',
          'nsw.au',
          'nt.au',
          'qld.au',
          'sa.au',
          'tas.au',
          'vic.au',
          'wa.au',
          'act.edu.au',
          'catholic.edu.au',
          'nsw.edu.au',
          'nt.edu.au',
          'qld.edu.au',
          'sa.edu.au',
          'tas.edu.au',
          'vic.edu.au',
          'wa.edu.au',
          'qld.gov.au',
          'sa.gov.au',
          'tas.gov.au',
          'vic.gov.au',
          'wa.gov.au',
          'schools.nsw.edu.au',
          'aw',
          'com.aw',
          'ax',
          'az',
          'com.az',
          'net.az',
          'int.az',
          'gov.az',
          'org.az',
          'edu.az',
          'info.az',
          'pp.az',
          'mil.az',
          'name.az',
          'pro.az',
          'biz.az',
          'ba',
          'com.ba',
          'edu.ba',
          'gov.ba',
          'mil.ba',
          'net.ba',
          'org.ba',
          'bb',
          'biz.bb',
          'co.bb',
          'com.bb',
          'edu.bb',
          'gov.bb',
          'info.bb',
          'net.bb',
          'org.bb',
          'store.bb',
          'tv.bb',
          '*.bd',
          'be',
          'ac.be',
          'bf',
          'gov.bf',
          'bg',
          'a.bg',
          'b.bg',
          'c.bg',
          'd.bg',
          'e.bg',
          'f.bg',
          'g.bg',
          'h.bg',
          'i.bg',
          'j.bg',
          'k.bg',
          'l.bg',
          'm.bg',
          'n.bg',
          'o.bg',
          'p.bg',
          'q.bg',
          'r.bg',
          's.bg',
          't.bg',
          'u.bg',
          'v.bg',
          'w.bg',
          'x.bg',
          'y.bg',
          'z.bg',
          '0.bg',
          '1.bg',
          '2.bg',
          '3.bg',
          '4.bg',
          '5.bg',
          '6.bg',
          '7.bg',
          '8.bg',
          '9.bg',
          'bh',
          'com.bh',
          'edu.bh',
          'net.bh',
          'org.bh',
          'gov.bh',
          'bi',
          'co.bi',
          'com.bi',
          'edu.bi',
          'or.bi',
          'org.bi',
          'biz',
          'bj',
          'asso.bj',
          'barreau.bj',
          'gouv.bj',
          'bm',
          'com.bm',
          'edu.bm',
          'gov.bm',
          'net.bm',
          'org.bm',
          'bn',
          'com.bn',
          'edu.bn',
          'gov.bn',
          'net.bn',
          'org.bn',
          'bo',
          'com.bo',
          'edu.bo',
          'gob.bo',
          'int.bo',
          'org.bo',
          'net.bo',
          'mil.bo',
          'tv.bo',
          'web.bo',
          'academia.bo',
          'agro.bo',
          'arte.bo',
          'blog.bo',
          'bolivia.bo',
          'ciencia.bo',
          'cooperativa.bo',
          'democracia.bo',
          'deporte.bo',
          'ecologia.bo',
          'economia.bo',
          'empresa.bo',
          'indigena.bo',
          'industria.bo',
          'info.bo',
          'medicina.bo',
          'movimiento.bo',
          'musica.bo',
          'natural.bo',
          'nombre.bo',
          'noticias.bo',
          'patria.bo',
          'politica.bo',
          'profesional.bo',
          'plurinacional.bo',
          'pueblo.bo',
          'revista.bo',
          'salud.bo',
          'tecnologia.bo',
          'tksat.bo',
          'transporte.bo',
          'wiki.bo',
          'br',
          '9guacu.br',
          'abc.br',
          'adm.br',
          'adv.br',
          'agr.br',
          'aju.br',
          'am.br',
          'anani.br',
          'aparecida.br',
          'app.br',
          'arq.br',
          'art.br',
          'ato.br',
          'b.br',
          'barueri.br',
          'belem.br',
          'bhz.br',
          'bib.br',
          'bio.br',
          'blog.br',
          'bmd.br',
          'boavista.br',
          'bsb.br',
          'campinagrande.br',
          'campinas.br',
          'caxias.br',
          'cim.br',
          'cng.br',
          'cnt.br',
          'com.br',
          'contagem.br',
          'coop.br',
          'coz.br',
          'cri.br',
          'cuiaba.br',
          'curitiba.br',
          'def.br',
          'des.br',
          'det.br',
          'dev.br',
          'ecn.br',
          'eco.br',
          'edu.br',
          'emp.br',
          'enf.br',
          'eng.br',
          'esp.br',
          'etc.br',
          'eti.br',
          'far.br',
          'feira.br',
          'flog.br',
          'floripa.br',
          'fm.br',
          'fnd.br',
          'fortal.br',
          'fot.br',
          'foz.br',
          'fst.br',
          'g12.br',
          'geo.br',
          'ggf.br',
          'goiania.br',
          'gov.br',
          'ac.gov.br',
          'al.gov.br',
          'am.gov.br',
          'ap.gov.br',
          'ba.gov.br',
          'ce.gov.br',
          'df.gov.br',
          'es.gov.br',
          'go.gov.br',
          'ma.gov.br',
          'mg.gov.br',
          'ms.gov.br',
          'mt.gov.br',
          'pa.gov.br',
          'pb.gov.br',
          'pe.gov.br',
          'pi.gov.br',
          'pr.gov.br',
          'rj.gov.br',
          'rn.gov.br',
          'ro.gov.br',
          'rr.gov.br',
          'rs.gov.br',
          'sc.gov.br',
          'se.gov.br',
          'sp.gov.br',
          'to.gov.br',
          'gru.br',
          'imb.br',
          'ind.br',
          'inf.br',
          'jab.br',
          'jampa.br',
          'jdf.br',
          'joinville.br',
          'jor.br',
          'jus.br',
          'leg.br',
          'lel.br',
          'log.br',
          'londrina.br',
          'macapa.br',
          'maceio.br',
          'manaus.br',
          'maringa.br',
          'mat.br',
          'med.br',
          'mil.br',
          'morena.br',
          'mp.br',
          'mus.br',
          'natal.br',
          'net.br',
          'niteroi.br',
          '*.nom.br',
          'not.br',
          'ntr.br',
          'odo.br',
          'ong.br',
          'org.br',
          'osasco.br',
          'palmas.br',
          'poa.br',
          'ppg.br',
          'pro.br',
          'psc.br',
          'psi.br',
          'pvh.br',
          'qsl.br',
          'radio.br',
          'rec.br',
          'recife.br',
          'rep.br',
          'ribeirao.br',
          'rio.br',
          'riobranco.br',
          'riopreto.br',
          'salvador.br',
          'sampa.br',
          'santamaria.br',
          'santoandre.br',
          'saobernardo.br',
          'saogonca.br',
          'seg.br',
          'sjc.br',
          'slg.br',
          'slz.br',
          'sorocaba.br',
          'srv.br',
          'taxi.br',
          'tc.br',
          'tec.br',
          'teo.br',
          'the.br',
          'tmp.br',
          'trd.br',
          'tur.br',
          'tv.br',
          'udi.br',
          'vet.br',
          'vix.br',
          'vlog.br',
          'wiki.br',
          'zlg.br',
          'bs',
          'com.bs',
          'net.bs',
          'org.bs',
          'edu.bs',
          'gov.bs',
          'bt',
          'com.bt',
          'edu.bt',
          'gov.bt',
          'net.bt',
          'org.bt',
          'bv',
          'bw',
          'co.bw',
          'org.bw',
          'by',
          'gov.by',
          'mil.by',
          'com.by',
          'of.by',
          'bz',
          'com.bz',
          'net.bz',
          'org.bz',
          'edu.bz',
          'gov.bz',
          'ca',
          'ab.ca',
          'bc.ca',
          'mb.ca',
          'nb.ca',
          'nf.ca',
          'nl.ca',
          'ns.ca',
          'nt.ca',
          'nu.ca',
          'on.ca',
          'pe.ca',
          'qc.ca',
          'sk.ca',
          'yk.ca',
          'gc.ca',
          'cat',
          'cc',
          'cd',
          'gov.cd',
          'cf',
          'cg',
          'ch',
          'ci',
          'org.ci',
          'or.ci',
          'com.ci',
          'co.ci',
          'edu.ci',
          'ed.ci',
          'ac.ci',
          'net.ci',
          'go.ci',
          'asso.ci',
          'a\xE9roport.ci',
          'int.ci',
          'presse.ci',
          'md.ci',
          'gouv.ci',
          '*.ck',
          '!www.ck',
          'cl',
          'co.cl',
          'gob.cl',
          'gov.cl',
          'mil.cl',
          'cm',
          'co.cm',
          'com.cm',
          'gov.cm',
          'net.cm',
          'cn',
          'ac.cn',
          'com.cn',
          'edu.cn',
          'gov.cn',
          'net.cn',
          'org.cn',
          'mil.cn',
          '\u516C\u53F8.cn',
          '\u7F51\u7EDC.cn',
          '\u7DB2\u7D61.cn',
          'ah.cn',
          'bj.cn',
          'cq.cn',
          'fj.cn',
          'gd.cn',
          'gs.cn',
          'gz.cn',
          'gx.cn',
          'ha.cn',
          'hb.cn',
          'he.cn',
          'hi.cn',
          'hl.cn',
          'hn.cn',
          'jl.cn',
          'js.cn',
          'jx.cn',
          'ln.cn',
          'nm.cn',
          'nx.cn',
          'qh.cn',
          'sc.cn',
          'sd.cn',
          'sh.cn',
          'sn.cn',
          'sx.cn',
          'tj.cn',
          'xj.cn',
          'xz.cn',
          'yn.cn',
          'zj.cn',
          'hk.cn',
          'mo.cn',
          'tw.cn',
          'co',
          'arts.co',
          'com.co',
          'edu.co',
          'firm.co',
          'gov.co',
          'info.co',
          'int.co',
          'mil.co',
          'net.co',
          'nom.co',
          'org.co',
          'rec.co',
          'web.co',
          'com',
          'coop',
          'cr',
          'ac.cr',
          'co.cr',
          'ed.cr',
          'fi.cr',
          'go.cr',
          'or.cr',
          'sa.cr',
          'cu',
          'com.cu',
          'edu.cu',
          'org.cu',
          'net.cu',
          'gov.cu',
          'inf.cu',
          'cv',
          'com.cv',
          'edu.cv',
          'int.cv',
          'nome.cv',
          'org.cv',
          'cw',
          'com.cw',
          'edu.cw',
          'net.cw',
          'org.cw',
          'cx',
          'gov.cx',
          'cy',
          'ac.cy',
          'biz.cy',
          'com.cy',
          'ekloges.cy',
          'gov.cy',
          'ltd.cy',
          'mil.cy',
          'net.cy',
          'org.cy',
          'press.cy',
          'pro.cy',
          'tm.cy',
          'cz',
          'de',
          'dj',
          'dk',
          'dm',
          'com.dm',
          'net.dm',
          'org.dm',
          'edu.dm',
          'gov.dm',
          'do',
          'art.do',
          'com.do',
          'edu.do',
          'gob.do',
          'gov.do',
          'mil.do',
          'net.do',
          'org.do',
          'sld.do',
          'web.do',
          'dz',
          'art.dz',
          'asso.dz',
          'com.dz',
          'edu.dz',
          'gov.dz',
          'org.dz',
          'net.dz',
          'pol.dz',
          'soc.dz',
          'tm.dz',
          'ec',
          'com.ec',
          'info.ec',
          'net.ec',
          'fin.ec',
          'k12.ec',
          'med.ec',
          'pro.ec',
          'org.ec',
          'edu.ec',
          'gov.ec',
          'gob.ec',
          'mil.ec',
          'edu',
          'ee',
          'edu.ee',
          'gov.ee',
          'riik.ee',
          'lib.ee',
          'med.ee',
          'com.ee',
          'pri.ee',
          'aip.ee',
          'org.ee',
          'fie.ee',
          'eg',
          'com.eg',
          'edu.eg',
          'eun.eg',
          'gov.eg',
          'mil.eg',
          'name.eg',
          'net.eg',
          'org.eg',
          'sci.eg',
          '*.er',
          'es',
          'com.es',
          'nom.es',
          'org.es',
          'gob.es',
          'edu.es',
          'et',
          'com.et',
          'gov.et',
          'org.et',
          'edu.et',
          'biz.et',
          'name.et',
          'info.et',
          'net.et',
          'eu',
          'fi',
          'aland.fi',
          'fj',
          'ac.fj',
          'biz.fj',
          'com.fj',
          'gov.fj',
          'info.fj',
          'mil.fj',
          'name.fj',
          'net.fj',
          'org.fj',
          'pro.fj',
          '*.fk',
          'com.fm',
          'edu.fm',
          'net.fm',
          'org.fm',
          'fm',
          'fo',
          'fr',
          'asso.fr',
          'com.fr',
          'gouv.fr',
          'nom.fr',
          'prd.fr',
          'tm.fr',
          'aeroport.fr',
          'avocat.fr',
          'avoues.fr',
          'cci.fr',
          'chambagri.fr',
          'chirurgiens-dentistes.fr',
          'experts-comptables.fr',
          'geometre-expert.fr',
          'greta.fr',
          'huissier-justice.fr',
          'medecin.fr',
          'notaires.fr',
          'pharmacien.fr',
          'port.fr',
          'veterinaire.fr',
          'ga',
          'gb',
          'edu.gd',
          'gov.gd',
          'gd',
          'ge',
          'com.ge',
          'edu.ge',
          'gov.ge',
          'org.ge',
          'mil.ge',
          'net.ge',
          'pvt.ge',
          'gf',
          'gg',
          'co.gg',
          'net.gg',
          'org.gg',
          'gh',
          'com.gh',
          'edu.gh',
          'gov.gh',
          'org.gh',
          'mil.gh',
          'gi',
          'com.gi',
          'ltd.gi',
          'gov.gi',
          'mod.gi',
          'edu.gi',
          'org.gi',
          'gl',
          'co.gl',
          'com.gl',
          'edu.gl',
          'net.gl',
          'org.gl',
          'gm',
          'gn',
          'ac.gn',
          'com.gn',
          'edu.gn',
          'gov.gn',
          'org.gn',
          'net.gn',
          'gov',
          'gp',
          'com.gp',
          'net.gp',
          'mobi.gp',
          'edu.gp',
          'org.gp',
          'asso.gp',
          'gq',
          'gr',
          'com.gr',
          'edu.gr',
          'net.gr',
          'org.gr',
          'gov.gr',
          'gs',
          'gt',
          'com.gt',
          'edu.gt',
          'gob.gt',
          'ind.gt',
          'mil.gt',
          'net.gt',
          'org.gt',
          'gu',
          'com.gu',
          'edu.gu',
          'gov.gu',
          'guam.gu',
          'info.gu',
          'net.gu',
          'org.gu',
          'web.gu',
          'gw',
          'gy',
          'co.gy',
          'com.gy',
          'edu.gy',
          'gov.gy',
          'net.gy',
          'org.gy',
          'hk',
          'com.hk',
          'edu.hk',
          'gov.hk',
          'idv.hk',
          'net.hk',
          'org.hk',
          '\u516C\u53F8.hk',
          '\u6559\u80B2.hk',
          '\u654E\u80B2.hk',
          '\u653F\u5E9C.hk',
          '\u500B\u4EBA.hk',
          '\u4E2A\uFFFD\uFFFD.hk',
          '\u7B87\u4EBA.hk',
          '\u7DB2\u7EDC.hk',
          '\u7F51\u7EDC.hk',
          '\u7EC4\u7E54.hk',
          '\u7DB2\u7D61.hk',
          '\u7F51\u7D61.hk',
          '\u7EC4\u7EC7.hk',
          '\u7D44\u7E54.hk',
          '\u7D44\u7EC7.hk',
          'hm',
          'hn',
          'com.hn',
          'edu.hn',
          'org.hn',
          'net.hn',
          'mil.hn',
          'gob.hn',
          'hr',
          'iz.hr',
          'from.hr',
          'name.hr',
          'com.hr',
          'ht',
          'com.ht',
          'shop.ht',
          'firm.ht',
          'info.ht',
          'adult.ht',
          'net.ht',
          'pro.ht',
          'org.ht',
          'med.ht',
          'art.ht',
          'coop.ht',
          'pol.ht',
          'asso.ht',
          'edu.ht',
          'rel.ht',
          'gouv.ht',
          'perso.ht',
          'hu',
          'co.hu',
          'info.hu',
          'org.hu',
          'priv.hu',
          'sport.hu',
          'tm.hu',
          '2000.hu',
          'agrar.hu',
          'bolt.hu',
          'casino.hu',
          'city.hu',
          'erotica.hu',
          'erotika.hu',
          'film.hu',
          'forum.hu',
          'games.hu',
          'hotel.hu',
          'ingatlan.hu',
          'jogasz.hu',
          'konyvelo.hu',
          'lakas.hu',
          'media.hu',
          'news.hu',
          'reklam.hu',
          'sex.hu',
          'shop.hu',
          'suli.hu',
          'szex.hu',
          'tozsde.hu',
          'utazas.hu',
          'video.hu',
          'id',
          'ac.id',
          'biz.id',
          'co.id',
          'desa.id',
          'go.id',
          'mil.id',
          'my.id',
          'net.id',
          'or.id',
          'ponpes.id',
          'sch.id',
          'web.id',
          'ie',
          'gov.ie',
          'il',
          'ac.il',
          'co.il',
          'gov.il',
          'idf.il',
          'k12.il',
          'muni.il',
          'net.il',
          'org.il',
          'im',
          'ac.im',
          'co.im',
          'com.im',
          'ltd.co.im',
          'net.im',
          'org.im',
          'plc.co.im',
          'tt.im',
          'tv.im',
          'in',
          'co.in',
          'firm.in',
          'net.in',
          'org.in',
          'gen.in',
          'ind.in',
          'nic.in',
          'ac.in',
          'edu.in',
          'res.in',
          'gov.in',
          'mil.in',
          'info',
          'int',
          'eu.int',
          'io',
          'com.io',
          'iq',
          'gov.iq',
          'edu.iq',
          'mil.iq',
          'com.iq',
          'org.iq',
          'net.iq',
          'ir',
          'ac.ir',
          'co.ir',
          'gov.ir',
          'id.ir',
          'net.ir',
          'org.ir',
          'sch.ir',
          '\u0627\u06CC\u0631\u0627\u0646.ir',
          '\u0627\u064A\u0631\u0627\u0646.ir',
          'is',
          'net.is',
          'com.is',
          'edu.is',
          'gov.is',
          'org.is',
          'int.is',
          'it',
          'gov.it',
          'edu.it',
          'abr.it',
          'abruzzo.it',
          'aosta-valley.it',
          'aostavalley.it',
          'bas.it',
          'basilicata.it',
          'cal.it',
          'calabria.it',
          'cam.it',
          'campania.it',
          'emilia-romagna.it',
          'emiliaromagna.it',
          'emr.it',
          'friuli-v-giulia.it',
          'friuli-ve-giulia.it',
          'friuli-vegiulia.it',
          'friuli-venezia-giulia.it',
          'friuli-veneziagiulia.it',
          'friuli-vgiulia.it',
          'friuliv-giulia.it',
          'friulive-giulia.it',
          'friulivegiulia.it',
          'friulivenezia-giulia.it',
          'friuliveneziagiulia.it',
          'friulivgiulia.it',
          'fvg.it',
          'laz.it',
          'lazio.it',
          'lig.it',
          'liguria.it',
          'lom.it',
          'lombardia.it',
          'lombardy.it',
          'lucania.it',
          'mar.it',
          'marche.it',
          'mol.it',
          'molise.it',
          'piedmont.it',
          'piemonte.it',
          'pmn.it',
          'pug.it',
          'puglia.it',
          'sar.it',
          'sardegna.it',
          'sardinia.it',
          'sic.it',
          'sicilia.it',
          'sicily.it',
          'taa.it',
          'tos.it',
          'toscana.it',
          'trentin-sud-tirol.it',
          'trentin-s\xFCd-tirol.it',
          'trentin-sudtirol.it',
          'trentin-s\xFCdtirol.it',
          'trentin-sued-tirol.it',
          'trentin-suedtirol.it',
          'trentino-a-adige.it',
          'trentino-aadige.it',
          'trentino-alto-adige.it',
          'trentino-altoadige.it',
          'trentino-s-tirol.it',
          'trentino-stirol.it',
          'trentino-sud-tirol.it',
          'trentino-s\xFCd-tirol.it',
          'trentino-sudtirol.it',
          'trentino-s\xFCdtirol.it',
          'trentino-sued-tirol.it',
          'trentino-suedtirol.it',
          'trentino.it',
          'trentinoa-adige.it',
          'trentinoaadige.it',
          'trentinoalto-adige.it',
          'trentinoaltoadige.it',
          'trentinos-tirol.it',
          'trentinostirol.it',
          'trentinosud-tirol.it',
          'trentinos\xFCd-tirol.it',
          'trentinosudtirol.it',
          'trentinos\xFCdtirol.it',
          'trentinosued-tirol.it',
          'trentinosuedtirol.it',
          'trentinsud-tirol.it',
          'trentins\xFCd-tirol.it',
          'trentinsudtirol.it',
          'trentins\xFCdtirol.it',
          'trentinsued-tirol.it',
          'trentinsuedtirol.it',
          'tuscany.it',
          'umb.it',
          'umbria.it',
          'val-d-aosta.it',
          'val-daosta.it',
          'vald-aosta.it',
          'valdaosta.it',
          'valle-aosta.it',
          'valle-d-aosta.it',
          'valle-daosta.it',
          'valleaosta.it',
          'valled-aosta.it',
          'valledaosta.it',
          'vallee-aoste.it',
          'vall\xE9e-aoste.it',
          'vallee-d-aoste.it',
          'vall\xE9e-d-aoste.it',
          'valleeaoste.it',
          'vall\xE9eaoste.it',
          'valleedaoste.it',
          'vall\xE9edaoste.it',
          'vao.it',
          'vda.it',
          'ven.it',
          'veneto.it',
          'ag.it',
          'agrigento.it',
          'al.it',
          'alessandria.it',
          'alto-adige.it',
          'altoadige.it',
          'an.it',
          'ancona.it',
          'andria-barletta-trani.it',
          'andria-trani-barletta.it',
          'andriabarlettatrani.it',
          'andriatranibarletta.it',
          'ao.it',
          'aosta.it',
          'aoste.it',
          'ap.it',
          'aq.it',
          'aquila.it',
          'ar.it',
          'arezzo.it',
          'ascoli-piceno.it',
          'ascolipiceno.it',
          'asti.it',
          'at.it',
          'av.it',
          'avellino.it',
          'ba.it',
          'balsan-sudtirol.it',
          'balsan-s\xFCdtirol.it',
          'balsan-suedtirol.it',
          'balsan.it',
          'bari.it',
          'barletta-trani-andria.it',
          'barlettatraniandria.it',
          'belluno.it',
          'benevento.it',
          'bergamo.it',
          'bg.it',
          'bi.it',
          'biella.it',
          'bl.it',
          'bn.it',
          'bo.it',
          'bologna.it',
          'bolzano-altoadige.it',
          'bolzano.it',
          'bozen-sudtirol.it',
          'bozen-s\xFCdtirol.it',
          'bozen-suedtirol.it',
          'bozen.it',
          'br.it',
          'brescia.it',
          'brindisi.it',
          'bs.it',
          'bt.it',
          'bulsan-sudtirol.it',
          'bulsan-s\xFCdtirol.it',
          'bulsan-suedtirol.it',
          'bulsan.it',
          'bz.it',
          'ca.it',
          'cagliari.it',
          'caltanissetta.it',
          'campidano-medio.it',
          'campidanomedio.it',
          'campobasso.it',
          'carbonia-iglesias.it',
          'carboniaiglesias.it',
          'carrara-massa.it',
          'carraramassa.it',
          'caserta.it',
          'catania.it',
          'catanzaro.it',
          'cb.it',
          'ce.it',
          'cesena-forli.it',
          'cesena-forl\xEC.it',
          'cesenaforli.it',
          'cesenaforl\xEC.it',
          'ch.it',
          'chieti.it',
          'ci.it',
          'cl.it',
          'cn.it',
          'co.it',
          'como.it',
          'cosenza.it',
          'cr.it',
          'cremona.it',
          'crotone.it',
          'cs.it',
          'ct.it',
          'cuneo.it',
          'cz.it',
          'dell-ogliastra.it',
          'dellogliastra.it',
          'en.it',
          'enna.it',
          'fc.it',
          'fe.it',
          'fermo.it',
          'ferrara.it',
          'fg.it',
          'fi.it',
          'firenze.it',
          'florence.it',
          'fm.it',
          'foggia.it',
          'forli-cesena.it',
          'forl\xEC-cesena.it',
          'forlicesena.it',
          'forl\xECcesena.it',
          'fr.it',
          'frosinone.it',
          'ge.it',
          'genoa.it',
          'genova.it',
          'go.it',
          'gorizia.it',
          'gr.it',
          'grosseto.it',
          'iglesias-carbonia.it',
          'iglesiascarbonia.it',
          'im.it',
          'imperia.it',
          'is.it',
          'isernia.it',
          'kr.it',
          'la-spezia.it',
          'laquila.it',
          'laspezia.it',
          'latina.it',
          'lc.it',
          'le.it',
          'lecce.it',
          'lecco.it',
          'li.it',
          'livorno.it',
          'lo.it',
          'lodi.it',
          'lt.it',
          'lu.it',
          'lucca.it',
          'macerata.it',
          'mantova.it',
          'massa-carrara.it',
          'massacarrara.it',
          'matera.it',
          'mb.it',
          'mc.it',
          'me.it',
          'medio-campidano.it',
          'mediocampidano.it',
          'messina.it',
          'mi.it',
          'milan.it',
          'milano.it',
          'mn.it',
          'mo.it',
          'modena.it',
          'monza-brianza.it',
          'monza-e-della-brianza.it',
          'monza.it',
          'monzabrianza.it',
          'monzaebrianza.it',
          'monzaedellabrianza.it',
          'ms.it',
          'mt.it',
          'na.it',
          'naples.it',
          'napoli.it',
          'no.it',
          'novara.it',
          'nu.it',
          'nuoro.it',
          'og.it',
          'ogliastra.it',
          'olbia-tempio.it',
          'olbiatempio.it',
          'or.it',
          'oristano.it',
          'ot.it',
          'pa.it',
          'padova.it',
          'padua.it',
          'palermo.it',
          'parma.it',
          'pavia.it',
          'pc.it',
          'pd.it',
          'pe.it',
          'perugia.it',
          'pesaro-urbino.it',
          'pesarourbino.it',
          'pescara.it',
          'pg.it',
          'pi.it',
          'piacenza.it',
          'pisa.it',
          'pistoia.it',
          'pn.it',
          'po.it',
          'pordenone.it',
          'potenza.it',
          'pr.it',
          'prato.it',
          'pt.it',
          'pu.it',
          'pv.it',
          'pz.it',
          'ra.it',
          'ragusa.it',
          'ravenna.it',
          'rc.it',
          're.it',
          'reggio-calabria.it',
          'reggio-emilia.it',
          'reggiocalabria.it',
          'reggioemilia.it',
          'rg.it',
          'ri.it',
          'rieti.it',
          'rimini.it',
          'rm.it',
          'rn.it',
          'ro.it',
          'roma.it',
          'rome.it',
          'rovigo.it',
          'sa.it',
          'salerno.it',
          'sassari.it',
          'savona.it',
          'si.it',
          'siena.it',
          'siracusa.it',
          'so.it',
          'sondrio.it',
          'sp.it',
          'sr.it',
          'ss.it',
          'suedtirol.it',
          's\xFCdtirol.it',
          'sv.it',
          'ta.it',
          'taranto.it',
          'te.it',
          'tempio-olbia.it',
          'tempioolbia.it',
          'teramo.it',
          'terni.it',
          'tn.it',
          'to.it',
          'torino.it',
          'tp.it',
          'tr.it',
          'trani-andria-barletta.it',
          'trani-barletta-andria.it',
          'traniandriabarletta.it',
          'tranibarlettaandria.it',
          'trapani.it',
          'trento.it',
          'treviso.it',
          'trieste.it',
          'ts.it',
          'turin.it',
          'tv.it',
          'ud.it',
          'udine.it',
          'urbino-pesaro.it',
          'urbinopesaro.it',
          'va.it',
          'varese.it',
          'vb.it',
          'vc.it',
          've.it',
          'venezia.it',
          'venice.it',
          'verbania.it',
          'vercelli.it',
          'verona.it',
          'vi.it',
          'vibo-valentia.it',
          'vibovalentia.it',
          'vicenza.it',
          'viterbo.it',
          'vr.it',
          'vs.it',
          'vt.it',
          'vv.it',
          'je',
          'co.je',
          'net.je',
          'org.je',
          '*.jm',
          'jo',
          'com.jo',
          'org.jo',
          'net.jo',
          'edu.jo',
          'sch.jo',
          'gov.jo',
          'mil.jo',
          'name.jo',
          'jobs',
          'jp',
          'ac.jp',
          'ad.jp',
          'co.jp',
          'ed.jp',
          'go.jp',
          'gr.jp',
          'lg.jp',
          'ne.jp',
          'or.jp',
          'aichi.jp',
          'akita.jp',
          'aomori.jp',
          'chiba.jp',
          'ehime.jp',
          'fukui.jp',
          'fukuoka.jp',
          'fukushima.jp',
          'gifu.jp',
          'gunma.jp',
          'hiroshima.jp',
          'hokkaido.jp',
          'hyogo.jp',
          'ibaraki.jp',
          'ishikawa.jp',
          'iwate.jp',
          'kagawa.jp',
          'kagoshima.jp',
          'kanagawa.jp',
          'kochi.jp',
          'kumamoto.jp',
          'kyoto.jp',
          'mie.jp',
          'miyagi.jp',
          'miyazaki.jp',
          'nagano.jp',
          'nagasaki.jp',
          'nara.jp',
          'niigata.jp',
          'oita.jp',
          'okayama.jp',
          'okinawa.jp',
          'osaka.jp',
          'saga.jp',
          'saitama.jp',
          'shiga.jp',
          'shimane.jp',
          'shizuoka.jp',
          'tochigi.jp',
          'tokushima.jp',
          'tokyo.jp',
          'tottori.jp',
          'toyama.jp',
          'wakayama.jp',
          'yamagata.jp',
          'yamaguchi.jp',
          'yamanashi.jp',
          '\u6803\u6728.jp',
          '\u611B\u77E5.jp',
          '\u611B\u5A9B.jp',
          '\u5175\u5EAB.jp',
          '\u718A\u672C.jp',
          '\u8328\u57CE.jp',
          '\u5317\u6D77\u9053.jp',
          '\u5343\u8449.jp',
          '\u548C\u6B4C\u5C71.jp',
          '\u9577\u5D0E.jp',
          '\u9577\u91CE.jp',
          '\u65B0\u6F5F.jp',
          '\u9752\u68EE.jp',
          '\u9759\u5CA1.jp',
          '\u6771\u4EAC.jp',
          '\u77F3\u5DDD.jp',
          '\u57FC\u7389.jp',
          '\u4E09\u91CD.jp',
          '\u4EAC\u90FD.jp',
          '\u4F50\u8CC0.jp',
          '\u5927\u5206.jp',
          '\u5927\u962A.jp',
          '\u5948\u826F.jp',
          '\u5BAE\u57CE.jp',
          '\u5BAE\u5D0E.jp',
          '\u5BCC\u5C71.jp',
          '\u5C71\u53E3.jp',
          '\u5C71\u5F62.jp',
          '\u5C71\u68A8.jp',
          '\u5CA9\u624B.jp',
          '\u5C90\u961C.jp',
          '\u5CA1\u5C71.jp',
          '\u5CF6\u6839.jp',
          '\u5E83\u5CF6.jp',
          '\u5FB3\u5CF6.jp',
          '\u6C96\u7E04.jp',
          '\u6ECB\u8CC0.jp',
          '\u795E\u5948\u5DDD.jp',
          '\u798F\u4E95.jp',
          '\u798F\u5CA1.jp',
          '\u798F\u5CF6.jp',
          '\u79CB\u7530.jp',
          '\u7FA4\u99AC.jp',
          '\u9999\u5DDD.jp',
          '\u9AD8\u77E5.jp',
          '\u9CE5\u53D6.jp',
          '\u9E7F\u5150\u5CF6.jp',
          '*.kawasaki.jp',
          '*.kitakyushu.jp',
          '*.kobe.jp',
          '*.nagoya.jp',
          '*.sapporo.jp',
          '*.sendai.jp',
          '*.yokohama.jp',
          '!city.kawasaki.jp',
          '!city.kitakyushu.jp',
          '!city.kobe.jp',
          '!city.nagoya.jp',
          '!city.sapporo.jp',
          '!city.sendai.jp',
          '!city.yokohama.jp',
          'aisai.aichi.jp',
          'ama.aichi.jp',
          'anjo.aichi.jp',
          'asuke.aichi.jp',
          'chiryu.aichi.jp',
          'chita.aichi.jp',
          'fuso.aichi.jp',
          'gamagori.aichi.jp',
          'handa.aichi.jp',
          'hazu.aichi.jp',
          'hekinan.aichi.jp',
          'higashiura.aichi.jp',
          'ichinomiya.aichi.jp',
          'inazawa.aichi.jp',
          'inuyama.aichi.jp',
          'isshiki.aichi.jp',
          'iwakura.aichi.jp',
          'kanie.aichi.jp',
          'kariya.aichi.jp',
          'kasugai.aichi.jp',
          'kira.aichi.jp',
          'kiyosu.aichi.jp',
          'komaki.aichi.jp',
          'konan.aichi.jp',
          'kota.aichi.jp',
          'mihama.aichi.jp',
          'miyoshi.aichi.jp',
          'nishio.aichi.jp',
          'nisshin.aichi.jp',
          'obu.aichi.jp',
          'oguchi.aichi.jp',
          'oharu.aichi.jp',
          'okazaki.aichi.jp',
          'owariasahi.aichi.jp',
          'seto.aichi.jp',
          'shikatsu.aichi.jp',
          'shinshiro.aichi.jp',
          'shitara.aichi.jp',
          'tahara.aichi.jp',
          'takahama.aichi.jp',
          'tobishima.aichi.jp',
          'toei.aichi.jp',
          'togo.aichi.jp',
          'tokai.aichi.jp',
          'tokoname.aichi.jp',
          'toyoake.aichi.jp',
          'toyohashi.aichi.jp',
          'toyokawa.aichi.jp',
          'toyone.aichi.jp',
          'toyota.aichi.jp',
          'tsushima.aichi.jp',
          'yatomi.aichi.jp',
          'akita.akita.jp',
          'daisen.akita.jp',
          'fujisato.akita.jp',
          'gojome.akita.jp',
          'hachirogata.akita.jp',
          'happou.akita.jp',
          'higashinaruse.akita.jp',
          'honjo.akita.jp',
          'honjyo.akita.jp',
          'ikawa.akita.jp',
          'kamikoani.akita.jp',
          'kamioka.akita.jp',
          'katagami.akita.jp',
          'kazuno.akita.jp',
          'kitaakita.akita.jp',
          'kosaka.akita.jp',
          'kyowa.akita.jp',
          'misato.akita.jp',
          'mitane.akita.jp',
          'moriyoshi.akita.jp',
          'nikaho.akita.jp',
          'noshiro.akita.jp',
          'odate.akita.jp',
          'oga.akita.jp',
          'ogata.akita.jp',
          'semboku.akita.jp',
          'yokote.akita.jp',
          'yurihonjo.akita.jp',
          'aomori.aomori.jp',
          'gonohe.aomori.jp',
          'hachinohe.aomori.jp',
          'hashikami.aomori.jp',
          'hiranai.aomori.jp',
          'hirosaki.aomori.jp',
          'itayanagi.aomori.jp',
          'kuroishi.aomori.jp',
          'misawa.aomori.jp',
          'mutsu.aomori.jp',
          'nakadomari.aomori.jp',
          'noheji.aomori.jp',
          'oirase.aomori.jp',
          'owani.aomori.jp',
          'rokunohe.aomori.jp',
          'sannohe.aomori.jp',
          'shichinohe.aomori.jp',
          'shingo.aomori.jp',
          'takko.aomori.jp',
          'towada.aomori.jp',
          'tsugaru.aomori.jp',
          'tsuruta.aomori.jp',
          'abiko.chiba.jp',
          'asahi.chiba.jp',
          'chonan.chiba.jp',
          'chosei.chiba.jp',
          'choshi.chiba.jp',
          'chuo.chiba.jp',
          'funabashi.chiba.jp',
          'futtsu.chiba.jp',
          'hanamigawa.chiba.jp',
          'ichihara.chiba.jp',
          'ichikawa.chiba.jp',
          'ichinomiya.chiba.jp',
          'inzai.chiba.jp',
          'isumi.chiba.jp',
          'kamagaya.chiba.jp',
          'kamogawa.chiba.jp',
          'kashiwa.chiba.jp',
          'katori.chiba.jp',
          'katsuura.chiba.jp',
          'kimitsu.chiba.jp',
          'kisarazu.chiba.jp',
          'kozaki.chiba.jp',
          'kujukuri.chiba.jp',
          'kyonan.chiba.jp',
          'matsudo.chiba.jp',
          'midori.chiba.jp',
          'mihama.chiba.jp',
          'minamiboso.chiba.jp',
          'mobara.chiba.jp',
          'mutsuzawa.chiba.jp',
          'nagara.chiba.jp',
          'nagareyama.chiba.jp',
          'narashino.chiba.jp',
          'narita.chiba.jp',
          'noda.chiba.jp',
          'oamishirasato.chiba.jp',
          'omigawa.chiba.jp',
          'onjuku.chiba.jp',
          'otaki.chiba.jp',
          'sakae.chiba.jp',
          'sakura.chiba.jp',
          'shimofusa.chiba.jp',
          'shirako.chiba.jp',
          'shiroi.chiba.jp',
          'shisui.chiba.jp',
          'sodegaura.chiba.jp',
          'sosa.chiba.jp',
          'tako.chiba.jp',
          'tateyama.chiba.jp',
          'togane.chiba.jp',
          'tohnosho.chiba.jp',
          'tomisato.chiba.jp',
          'urayasu.chiba.jp',
          'yachimata.chiba.jp',
          'yachiyo.chiba.jp',
          'yokaichiba.chiba.jp',
          'yokoshibahikari.chiba.jp',
          'yotsukaido.chiba.jp',
          'ainan.ehime.jp',
          'honai.ehime.jp',
          'ikata.ehime.jp',
          'imabari.ehime.jp',
          'iyo.ehime.jp',
          'kamijima.ehime.jp',
          'kihoku.ehime.jp',
          'kumakogen.ehime.jp',
          'masaki.ehime.jp',
          'matsuno.ehime.jp',
          'matsuyama.ehime.jp',
          'namikata.ehime.jp',
          'niihama.ehime.jp',
          'ozu.ehime.jp',
          'saijo.ehime.jp',
          'seiyo.ehime.jp',
          'shikokuchuo.ehime.jp',
          'tobe.ehime.jp',
          'toon.ehime.jp',
          'uchiko.ehime.jp',
          'uwajima.ehime.jp',
          'yawatahama.ehime.jp',
          'echizen.fukui.jp',
          'eiheiji.fukui.jp',
          'fukui.fukui.jp',
          'ikeda.fukui.jp',
          'katsuyama.fukui.jp',
          'mihama.fukui.jp',
          'minamiechizen.fukui.jp',
          'obama.fukui.jp',
          'ohi.fukui.jp',
          'ono.fukui.jp',
          'sabae.fukui.jp',
          'sakai.fukui.jp',
          'takahama.fukui.jp',
          'tsuruga.fukui.jp',
          'wakasa.fukui.jp',
          'ashiya.fukuoka.jp',
          'buzen.fukuoka.jp',
          'chikugo.fukuoka.jp',
          'chikuho.fukuoka.jp',
          'chikujo.fukuoka.jp',
          'chikushino.fukuoka.jp',
          'chikuzen.fukuoka.jp',
          'chuo.fukuoka.jp',
          'dazaifu.fukuoka.jp',
          'fukuchi.fukuoka.jp',
          'hakata.fukuoka.jp',
          'higashi.fukuoka.jp',
          'hirokawa.fukuoka.jp',
          'hisayama.fukuoka.jp',
          'iizuka.fukuoka.jp',
          'inatsuki.fukuoka.jp',
          'kaho.fukuoka.jp',
          'kasuga.fukuoka.jp',
          'kasuya.fukuoka.jp',
          'kawara.fukuoka.jp',
          'keisen.fukuoka.jp',
          'koga.fukuoka.jp',
          'kurate.fukuoka.jp',
          'kurogi.fukuoka.jp',
          'kurume.fukuoka.jp',
          'minami.fukuoka.jp',
          'miyako.fukuoka.jp',
          'miyama.fukuoka.jp',
          'miyawaka.fukuoka.jp',
          'mizumaki.fukuoka.jp',
          'munakata.fukuoka.jp',
          'nakagawa.fukuoka.jp',
          'nakama.fukuoka.jp',
          'nishi.fukuoka.jp',
          'nogata.fukuoka.jp',
          'ogori.fukuoka.jp',
          'okagaki.fukuoka.jp',
          'okawa.fukuoka.jp',
          'oki.fukuoka.jp',
          'omuta.fukuoka.jp',
          'onga.fukuoka.jp',
          'onojo.fukuoka.jp',
          'oto.fukuoka.jp',
          'saigawa.fukuoka.jp',
          'sasaguri.fukuoka.jp',
          'shingu.fukuoka.jp',
          'shinyoshitomi.fukuoka.jp',
          'shonai.fukuoka.jp',
          'soeda.fukuoka.jp',
          'sue.fukuoka.jp',
          'tachiarai.fukuoka.jp',
          'tagawa.fukuoka.jp',
          'takata.fukuoka.jp',
          'toho.fukuoka.jp',
          'toyotsu.fukuoka.jp',
          'tsuiki.fukuoka.jp',
          'ukiha.fukuoka.jp',
          'umi.fukuoka.jp',
          'usui.fukuoka.jp',
          'yamada.fukuoka.jp',
          'yame.fukuoka.jp',
          'yanagawa.fukuoka.jp',
          'yukuhashi.fukuoka.jp',
          'aizubange.fukushima.jp',
          'aizumisato.fukushima.jp',
          'aizuwakamatsu.fukushima.jp',
          'asakawa.fukushima.jp',
          'bandai.fukushima.jp',
          'date.fukushima.jp',
          'fukushima.fukushima.jp',
          'furudono.fukushima.jp',
          'futaba.fukushima.jp',
          'hanawa.fukushima.jp',
          'higashi.fukushima.jp',
          'hirata.fukushima.jp',
          'hirono.fukushima.jp',
          'iitate.fukushima.jp',
          'inawashiro.fukushima.jp',
          'ishikawa.fukushima.jp',
          'iwaki.fukushima.jp',
          'izumizaki.fukushima.jp',
          'kagamiishi.fukushima.jp',
          'kaneyama.fukushima.jp',
          'kawamata.fukushima.jp',
          'kitakata.fukushima.jp',
          'kitashiobara.fukushima.jp',
          'koori.fukushima.jp',
          'koriyama.fukushima.jp',
          'kunimi.fukushima.jp',
          'miharu.fukushima.jp',
          'mishima.fukushima.jp',
          'namie.fukushima.jp',
          'nango.fukushima.jp',
          'nishiaizu.fukushima.jp',
          'nishigo.fukushima.jp',
          'okuma.fukushima.jp',
          'omotego.fukushima.jp',
          'ono.fukushima.jp',
          'otama.fukushima.jp',
          'samegawa.fukushima.jp',
          'shimogo.fukushima.jp',
          'shirakawa.fukushima.jp',
          'showa.fukushima.jp',
          'soma.fukushima.jp',
          'sukagawa.fukushima.jp',
          'taishin.fukushima.jp',
          'tamakawa.fukushima.jp',
          'tanagura.fukushima.jp',
          'tenei.fukushima.jp',
          'yabuki.fukushima.jp',
          'yamato.fukushima.jp',
          'yamatsuri.fukushima.jp',
          'yanaizu.fukushima.jp',
          'yugawa.fukushima.jp',
          'anpachi.gifu.jp',
          'ena.gifu.jp',
          'gifu.gifu.jp',
          'ginan.gifu.jp',
          'godo.gifu.jp',
          'gujo.gifu.jp',
          'hashima.gifu.jp',
          'hichiso.gifu.jp',
          'hida.gifu.jp',
          'higashishirakawa.gifu.jp',
          'ibigawa.gifu.jp',
          'ikeda.gifu.jp',
          'kakamigahara.gifu.jp',
          'kani.gifu.jp',
          'kasahara.gifu.jp',
          'kasamatsu.gifu.jp',
          'kawaue.gifu.jp',
          'kitagata.gifu.jp',
          'mino.gifu.jp',
          'minokamo.gifu.jp',
          'mitake.gifu.jp',
          'mizunami.gifu.jp',
          'motosu.gifu.jp',
          'nakatsugawa.gifu.jp',
          'ogaki.gifu.jp',
          'sakahogi.gifu.jp',
          'seki.gifu.jp',
          'sekigahara.gifu.jp',
          'shirakawa.gifu.jp',
          'tajimi.gifu.jp',
          'takayama.gifu.jp',
          'tarui.gifu.jp',
          'toki.gifu.jp',
          'tomika.gifu.jp',
          'wanouchi.gifu.jp',
          'yamagata.gifu.jp',
          'yaotsu.gifu.jp',
          'yoro.gifu.jp',
          'annaka.gunma.jp',
          'chiyoda.gunma.jp',
          'fujioka.gunma.jp',
          'higashiagatsuma.gunma.jp',
          'isesaki.gunma.jp',
          'itakura.gunma.jp',
          'kanna.gunma.jp',
          'kanra.gunma.jp',
          'katashina.gunma.jp',
          'kawaba.gunma.jp',
          'kiryu.gunma.jp',
          'kusatsu.gunma.jp',
          'maebashi.gunma.jp',
          'meiwa.gunma.jp',
          'midori.gunma.jp',
          'minakami.gunma.jp',
          'naganohara.gunma.jp',
          'nakanojo.gunma.jp',
          'nanmoku.gunma.jp',
          'numata.gunma.jp',
          'oizumi.gunma.jp',
          'ora.gunma.jp',
          'ota.gunma.jp',
          'shibukawa.gunma.jp',
          'shimonita.gunma.jp',
          'shinto.gunma.jp',
          'showa.gunma.jp',
          'takasaki.gunma.jp',
          'takayama.gunma.jp',
          'tamamura.gunma.jp',
          'tatebayashi.gunma.jp',
          'tomioka.gunma.jp',
          'tsukiyono.gunma.jp',
          'tsumagoi.gunma.jp',
          'ueno.gunma.jp',
          'yoshioka.gunma.jp',
          'asaminami.hiroshima.jp',
          'daiwa.hiroshima.jp',
          'etajima.hiroshima.jp',
          'fuchu.hiroshima.jp',
          'fukuyama.hiroshima.jp',
          'hatsukaichi.hiroshima.jp',
          'higashihiroshima.hiroshima.jp',
          'hongo.hiroshima.jp',
          'jinsekikogen.hiroshima.jp',
          'kaita.hiroshima.jp',
          'kui.hiroshima.jp',
          'kumano.hiroshima.jp',
          'kure.hiroshima.jp',
          'mihara.hiroshima.jp',
          'miyoshi.hiroshima.jp',
          'naka.hiroshima.jp',
          'onomichi.hiroshima.jp',
          'osakikamijima.hiroshima.jp',
          'otake.hiroshima.jp',
          'saka.hiroshima.jp',
          'sera.hiroshima.jp',
          'seranishi.hiroshima.jp',
          'shinichi.hiroshima.jp',
          'shobara.hiroshima.jp',
          'takehara.hiroshima.jp',
          'abashiri.hokkaido.jp',
          'abira.hokkaido.jp',
          'aibetsu.hokkaido.jp',
          'akabira.hokkaido.jp',
          'akkeshi.hokkaido.jp',
          'asahikawa.hokkaido.jp',
          'ashibetsu.hokkaido.jp',
          'ashoro.hokkaido.jp',
          'assabu.hokkaido.jp',
          'atsuma.hokkaido.jp',
          'bibai.hokkaido.jp',
          'biei.hokkaido.jp',
          'bifuka.hokkaido.jp',
          'bihoro.hokkaido.jp',
          'biratori.hokkaido.jp',
          'chippubetsu.hokkaido.jp',
          'chitose.hokkaido.jp',
          'date.hokkaido.jp',
          'ebetsu.hokkaido.jp',
          'embetsu.hokkaido.jp',
          'eniwa.hokkaido.jp',
          'erimo.hokkaido.jp',
          'esan.hokkaido.jp',
          'esashi.hokkaido.jp',
          'fukagawa.hokkaido.jp',
          'fukushima.hokkaido.jp',
          'furano.hokkaido.jp',
          'furubira.hokkaido.jp',
          'haboro.hokkaido.jp',
          'hakodate.hokkaido.jp',
          'hamatonbetsu.hokkaido.jp',
          'hidaka.hokkaido.jp',
          'higashikagura.hokkaido.jp',
          'higashikawa.hokkaido.jp',
          'hiroo.hokkaido.jp',
          'hokuryu.hokkaido.jp',
          'hokuto.hokkaido.jp',
          'honbetsu.hokkaido.jp',
          'horokanai.hokkaido.jp',
          'horonobe.hokkaido.jp',
          'ikeda.hokkaido.jp',
          'imakane.hokkaido.jp',
          'ishikari.hokkaido.jp',
          'iwamizawa.hokkaido.jp',
          'iwanai.hokkaido.jp',
          'kamifurano.hokkaido.jp',
          'kamikawa.hokkaido.jp',
          'kamishihoro.hokkaido.jp',
          'kamisunagawa.hokkaido.jp',
          'kamoenai.hokkaido.jp',
          'kayabe.hokkaido.jp',
          'kembuchi.hokkaido.jp',
          'kikonai.hokkaido.jp',
          'kimobetsu.hokkaido.jp',
          'kitahiroshima.hokkaido.jp',
          'kitami.hokkaido.jp',
          'kiyosato.hokkaido.jp',
          'koshimizu.hokkaido.jp',
          'kunneppu.hokkaido.jp',
          'kuriyama.hokkaido.jp',
          'kuromatsunai.hokkaido.jp',
          'kushiro.hokkaido.jp',
          'kutchan.hokkaido.jp',
          'kyowa.hokkaido.jp',
          'mashike.hokkaido.jp',
          'matsumae.hokkaido.jp',
          'mikasa.hokkaido.jp',
          'minamifurano.hokkaido.jp',
          'mombetsu.hokkaido.jp',
          'moseushi.hokkaido.jp',
          'mukawa.hokkaido.jp',
          'muroran.hokkaido.jp',
          'naie.hokkaido.jp',
          'nakagawa.hokkaido.jp',
          'nakasatsunai.hokkaido.jp',
          'nakatombetsu.hokkaido.jp',
          'nanae.hokkaido.jp',
          'nanporo.hokkaido.jp',
          'nayoro.hokkaido.jp',
          'nemuro.hokkaido.jp',
          'niikappu.hokkaido.jp',
          'niki.hokkaido.jp',
          'nishiokoppe.hokkaido.jp',
          'noboribetsu.hokkaido.jp',
          'numata.hokkaido.jp',
          'obihiro.hokkaido.jp',
          'obira.hokkaido.jp',
          'oketo.hokkaido.jp',
          'okoppe.hokkaido.jp',
          'otaru.hokkaido.jp',
          'otobe.hokkaido.jp',
          'otofuke.hokkaido.jp',
          'otoineppu.hokkaido.jp',
          'oumu.hokkaido.jp',
          'ozora.hokkaido.jp',
          'pippu.hokkaido.jp',
          'rankoshi.hokkaido.jp',
          'rebun.hokkaido.jp',
          'rikubetsu.hokkaido.jp',
          'rishiri.hokkaido.jp',
          'rishirifuji.hokkaido.jp',
          'saroma.hokkaido.jp',
          'sarufutsu.hokkaido.jp',
          'shakotan.hokkaido.jp',
          'shari.hokkaido.jp',
          'shibecha.hokkaido.jp',
          'shibetsu.hokkaido.jp',
          'shikabe.hokkaido.jp',
          'shikaoi.hokkaido.jp',
          'shimamaki.hokkaido.jp',
          'shimizu.hokkaido.jp',
          'shimokawa.hokkaido.jp',
          'shinshinotsu.hokkaido.jp',
          'shintoku.hokkaido.jp',
          'shiranuka.hokkaido.jp',
          'shiraoi.hokkaido.jp',
          'shiriuchi.hokkaido.jp',
          'sobetsu.hokkaido.jp',
          'sunagawa.hokkaido.jp',
          'taiki.hokkaido.jp',
          'takasu.hokkaido.jp',
          'takikawa.hokkaido.jp',
          'takinoue.hokkaido.jp',
          'teshikaga.hokkaido.jp',
          'tobetsu.hokkaido.jp',
          'tohma.hokkaido.jp',
          'tomakomai.hokkaido.jp',
          'tomari.hokkaido.jp',
          'toya.hokkaido.jp',
          'toyako.hokkaido.jp',
          'toyotomi.hokkaido.jp',
          'toyoura.hokkaido.jp',
          'tsubetsu.hokkaido.jp',
          'tsukigata.hokkaido.jp',
          'urakawa.hokkaido.jp',
          'urausu.hokkaido.jp',
          'uryu.hokkaido.jp',
          'utashinai.hokkaido.jp',
          'wakkanai.hokkaido.jp',
          'wassamu.hokkaido.jp',
          'yakumo.hokkaido.jp',
          'yoichi.hokkaido.jp',
          'aioi.hyogo.jp',
          'akashi.hyogo.jp',
          'ako.hyogo.jp',
          'amagasaki.hyogo.jp',
          'aogaki.hyogo.jp',
          'asago.hyogo.jp',
          'ashiya.hyogo.jp',
          'awaji.hyogo.jp',
          'fukusaki.hyogo.jp',
          'goshiki.hyogo.jp',
          'harima.hyogo.jp',
          'himeji.hyogo.jp',
          'ichikawa.hyogo.jp',
          'inagawa.hyogo.jp',
          'itami.hyogo.jp',
          'kakogawa.hyogo.jp',
          'kamigori.hyogo.jp',
          'kamikawa.hyogo.jp',
          'kasai.hyogo.jp',
          'kasuga.hyogo.jp',
          'kawanishi.hyogo.jp',
          'miki.hyogo.jp',
          'minamiawaji.hyogo.jp',
          'nishinomiya.hyogo.jp',
          'nishiwaki.hyogo.jp',
          'ono.hyogo.jp',
          'sanda.hyogo.jp',
          'sannan.hyogo.jp',
          'sasayama.hyogo.jp',
          'sayo.hyogo.jp',
          'shingu.hyogo.jp',
          'shinonsen.hyogo.jp',
          'shiso.hyogo.jp',
          'sumoto.hyogo.jp',
          'taishi.hyogo.jp',
          'taka.hyogo.jp',
          'takarazuka.hyogo.jp',
          'takasago.hyogo.jp',
          'takino.hyogo.jp',
          'tamba.hyogo.jp',
          'tatsuno.hyogo.jp',
          'toyooka.hyogo.jp',
          'yabu.hyogo.jp',
          'yashiro.hyogo.jp',
          'yoka.hyogo.jp',
          'yokawa.hyogo.jp',
          'ami.ibaraki.jp',
          'asahi.ibaraki.jp',
          'bando.ibaraki.jp',
          'chikusei.ibaraki.jp',
          'daigo.ibaraki.jp',
          'fujishiro.ibaraki.jp',
          'hitachi.ibaraki.jp',
          'hitachinaka.ibaraki.jp',
          'hitachiomiya.ibaraki.jp',
          'hitachiota.ibaraki.jp',
          'ibaraki.ibaraki.jp',
          'ina.ibaraki.jp',
          'inashiki.ibaraki.jp',
          'itako.ibaraki.jp',
          'iwama.ibaraki.jp',
          'joso.ibaraki.jp',
          'kamisu.ibaraki.jp',
          'kasama.ibaraki.jp',
          'kashima.ibaraki.jp',
          'kasumigaura.ibaraki.jp',
          'koga.ibaraki.jp',
          'miho.ibaraki.jp',
          'mito.ibaraki.jp',
          'moriya.ibaraki.jp',
          'naka.ibaraki.jp',
          'namegata.ibaraki.jp',
          'oarai.ibaraki.jp',
          'ogawa.ibaraki.jp',
          'omitama.ibaraki.jp',
          'ryugasaki.ibaraki.jp',
          'sakai.ibaraki.jp',
          'sakuragawa.ibaraki.jp',
          'shimodate.ibaraki.jp',
          'shimotsuma.ibaraki.jp',
          'shirosato.ibaraki.jp',
          'sowa.ibaraki.jp',
          'suifu.ibaraki.jp',
          'takahagi.ibaraki.jp',
          'tamatsukuri.ibaraki.jp',
          'tokai.ibaraki.jp',
          'tomobe.ibaraki.jp',
          'tone.ibaraki.jp',
          'toride.ibaraki.jp',
          'tsuchiura.ibaraki.jp',
          'tsukuba.ibaraki.jp',
          'uchihara.ibaraki.jp',
          'ushiku.ibaraki.jp',
          'yachiyo.ibaraki.jp',
          'yamagata.ibaraki.jp',
          'yawara.ibaraki.jp',
          'yuki.ibaraki.jp',
          'anamizu.ishikawa.jp',
          'hakui.ishikawa.jp',
          'hakusan.ishikawa.jp',
          'kaga.ishikawa.jp',
          'kahoku.ishikawa.jp',
          'kanazawa.ishikawa.jp',
          'kawakita.ishikawa.jp',
          'komatsu.ishikawa.jp',
          'nakanoto.ishikawa.jp',
          'nanao.ishikawa.jp',
          'nomi.ishikawa.jp',
          'nonoichi.ishikawa.jp',
          'noto.ishikawa.jp',
          'shika.ishikawa.jp',
          'suzu.ishikawa.jp',
          'tsubata.ishikawa.jp',
          'tsurugi.ishikawa.jp',
          'uchinada.ishikawa.jp',
          'wajima.ishikawa.jp',
          'fudai.iwate.jp',
          'fujisawa.iwate.jp',
          'hanamaki.iwate.jp',
          'hiraizumi.iwate.jp',
          'hirono.iwate.jp',
          'ichinohe.iwate.jp',
          'ichinoseki.iwate.jp',
          'iwaizumi.iwate.jp',
          'iwate.iwate.jp',
          'joboji.iwate.jp',
          'kamaishi.iwate.jp',
          'kanegasaki.iwate.jp',
          'karumai.iwate.jp',
          'kawai.iwate.jp',
          'kitakami.iwate.jp',
          'kuji.iwate.jp',
          'kunohe.iwate.jp',
          'kuzumaki.iwate.jp',
          'miyako.iwate.jp',
          'mizusawa.iwate.jp',
          'morioka.iwate.jp',
          'ninohe.iwate.jp',
          'noda.iwate.jp',
          'ofunato.iwate.jp',
          'oshu.iwate.jp',
          'otsuchi.iwate.jp',
          'rikuzentakata.iwate.jp',
          'shiwa.iwate.jp',
          'shizukuishi.iwate.jp',
          'sumita.iwate.jp',
          'tanohata.iwate.jp',
          'tono.iwate.jp',
          'yahaba.iwate.jp',
          'yamada.iwate.jp',
          'ayagawa.kagawa.jp',
          'higashikagawa.kagawa.jp',
          'kanonji.kagawa.jp',
          'kotohira.kagawa.jp',
          'manno.kagawa.jp',
          'marugame.kagawa.jp',
          'mitoyo.kagawa.jp',
          'naoshima.kagawa.jp',
          'sanuki.kagawa.jp',
          'tadotsu.kagawa.jp',
          'takamatsu.kagawa.jp',
          'tonosho.kagawa.jp',
          'uchinomi.kagawa.jp',
          'utazu.kagawa.jp',
          'zentsuji.kagawa.jp',
          'akune.kagoshima.jp',
          'amami.kagoshima.jp',
          'hioki.kagoshima.jp',
          'isa.kagoshima.jp',
          'isen.kagoshima.jp',
          'izumi.kagoshima.jp',
          'kagoshima.kagoshima.jp',
          'kanoya.kagoshima.jp',
          'kawanabe.kagoshima.jp',
          'kinko.kagoshima.jp',
          'kouyama.kagoshima.jp',
          'makurazaki.kagoshima.jp',
          'matsumoto.kagoshima.jp',
          'minamitane.kagoshima.jp',
          'nakatane.kagoshima.jp',
          'nishinoomote.kagoshima.jp',
          'satsumasendai.kagoshima.jp',
          'soo.kagoshima.jp',
          'tarumizu.kagoshima.jp',
          'yusui.kagoshima.jp',
          'aikawa.kanagawa.jp',
          'atsugi.kanagawa.jp',
          'ayase.kanagawa.jp',
          'chigasaki.kanagawa.jp',
          'ebina.kanagawa.jp',
          'fujisawa.kanagawa.jp',
          'hadano.kanagawa.jp',
          'hakone.kanagawa.jp',
          'hiratsuka.kanagawa.jp',
          'isehara.kanagawa.jp',
          'kaisei.kanagawa.jp',
          'kamakura.kanagawa.jp',
          'kiyokawa.kanagawa.jp',
          'matsuda.kanagawa.jp',
          'minamiashigara.kanagawa.jp',
          'miura.kanagawa.jp',
          'nakai.kanagawa.jp',
          'ninomiya.kanagawa.jp',
          'odawara.kanagawa.jp',
          'oi.kanagawa.jp',
          'oiso.kanagawa.jp',
          'sagamihara.kanagawa.jp',
          'samukawa.kanagawa.jp',
          'tsukui.kanagawa.jp',
          'yamakita.kanagawa.jp',
          'yamato.kanagawa.jp',
          'yokosuka.kanagawa.jp',
          'yugawara.kanagawa.jp',
          'zama.kanagawa.jp',
          'zushi.kanagawa.jp',
          'aki.kochi.jp',
          'geisei.kochi.jp',
          'hidaka.kochi.jp',
          'higashitsuno.kochi.jp',
          'ino.kochi.jp',
          'kagami.kochi.jp',
          'kami.kochi.jp',
          'kitagawa.kochi.jp',
          'kochi.kochi.jp',
          'mihara.kochi.jp',
          'motoyama.kochi.jp',
          'muroto.kochi.jp',
          'nahari.kochi.jp',
          'nakamura.kochi.jp',
          'nankoku.kochi.jp',
          'nishitosa.kochi.jp',
          'niyodogawa.kochi.jp',
          'ochi.kochi.jp',
          'okawa.kochi.jp',
          'otoyo.kochi.jp',
          'otsuki.kochi.jp',
          'sakawa.kochi.jp',
          'sukumo.kochi.jp',
          'susaki.kochi.jp',
          'tosa.kochi.jp',
          'tosashimizu.kochi.jp',
          'toyo.kochi.jp',
          'tsuno.kochi.jp',
          'umaji.kochi.jp',
          'yasuda.kochi.jp',
          'yusuhara.kochi.jp',
          'amakusa.kumamoto.jp',
          'arao.kumamoto.jp',
          'aso.kumamoto.jp',
          'choyo.kumamoto.jp',
          'gyokuto.kumamoto.jp',
          'kamiamakusa.kumamoto.jp',
          'kikuchi.kumamoto.jp',
          'kumamoto.kumamoto.jp',
          'mashiki.kumamoto.jp',
          'mifune.kumamoto.jp',
          'minamata.kumamoto.jp',
          'minamioguni.kumamoto.jp',
          'nagasu.kumamoto.jp',
          'nishihara.kumamoto.jp',
          'oguni.kumamoto.jp',
          'ozu.kumamoto.jp',
          'sumoto.kumamoto.jp',
          'takamori.kumamoto.jp',
          'uki.kumamoto.jp',
          'uto.kumamoto.jp',
          'yamaga.kumamoto.jp',
          'yamato.kumamoto.jp',
          'yatsushiro.kumamoto.jp',
          'ayabe.kyoto.jp',
          'fukuchiyama.kyoto.jp',
          'higashiyama.kyoto.jp',
          'ide.kyoto.jp',
          'ine.kyoto.jp',
          'joyo.kyoto.jp',
          'kameoka.kyoto.jp',
          'kamo.kyoto.jp',
          'kita.kyoto.jp',
          'kizu.kyoto.jp',
          'kumiyama.kyoto.jp',
          'kyotamba.kyoto.jp',
          'kyotanabe.kyoto.jp',
          'kyotango.kyoto.jp',
          'maizuru.kyoto.jp',
          'minami.kyoto.jp',
          'minamiyamashiro.kyoto.jp',
          'miyazu.kyoto.jp',
          'muko.kyoto.jp',
          'nagaokakyo.kyoto.jp',
          'nakagyo.kyoto.jp',
          'nantan.kyoto.jp',
          'oyamazaki.kyoto.jp',
          'sakyo.kyoto.jp',
          'seika.kyoto.jp',
          'tanabe.kyoto.jp',
          'uji.kyoto.jp',
          'ujitawara.kyoto.jp',
          'wazuka.kyoto.jp',
          'yamashina.kyoto.jp',
          'yawata.kyoto.jp',
          'asahi.mie.jp',
          'inabe.mie.jp',
          'ise.mie.jp',
          'kameyama.mie.jp',
          'kawagoe.mie.jp',
          'kiho.mie.jp',
          'kisosaki.mie.jp',
          'kiwa.mie.jp',
          'komono.mie.jp',
          'kumano.mie.jp',
          'kuwana.mie.jp',
          'matsusaka.mie.jp',
          'meiwa.mie.jp',
          'mihama.mie.jp',
          'minamiise.mie.jp',
          'misugi.mie.jp',
          'miyama.mie.jp',
          'nabari.mie.jp',
          'shima.mie.jp',
          'suzuka.mie.jp',
          'tado.mie.jp',
          'taiki.mie.jp',
          'taki.mie.jp',
          'tamaki.mie.jp',
          'toba.mie.jp',
          'tsu.mie.jp',
          'udono.mie.jp',
          'ureshino.mie.jp',
          'watarai.mie.jp',
          'yokkaichi.mie.jp',
          'furukawa.miyagi.jp',
          'higashimatsushima.miyagi.jp',
          'ishinomaki.miyagi.jp',
          'iwanuma.miyagi.jp',
          'kakuda.miyagi.jp',
          'kami.miyagi.jp',
          'kawasaki.miyagi.jp',
          'marumori.miyagi.jp',
          'matsushima.miyagi.jp',
          'minamisanriku.miyagi.jp',
          'misato.miyagi.jp',
          'murata.miyagi.jp',
          'natori.miyagi.jp',
          'ogawara.miyagi.jp',
          'ohira.miyagi.jp',
          'onagawa.miyagi.jp',
          'osaki.miyagi.jp',
          'rifu.miyagi.jp',
          'semine.miyagi.jp',
          'shibata.miyagi.jp',
          'shichikashuku.miyagi.jp',
          'shikama.miyagi.jp',
          'shiogama.miyagi.jp',
          'shiroishi.miyagi.jp',
          'tagajo.miyagi.jp',
          'taiwa.miyagi.jp',
          'tome.miyagi.jp',
          'tomiya.miyagi.jp',
          'wakuya.miyagi.jp',
          'watari.miyagi.jp',
          'yamamoto.miyagi.jp',
          'zao.miyagi.jp',
          'aya.miyazaki.jp',
          'ebino.miyazaki.jp',
          'gokase.miyazaki.jp',
          'hyuga.miyazaki.jp',
          'kadogawa.miyazaki.jp',
          'kawaminami.miyazaki.jp',
          'kijo.miyazaki.jp',
          'kitagawa.miyazaki.jp',
          'kitakata.miyazaki.jp',
          'kitaura.miyazaki.jp',
          'kobayashi.miyazaki.jp',
          'kunitomi.miyazaki.jp',
          'kushima.miyazaki.jp',
          'mimata.miyazaki.jp',
          'miyakonojo.miyazaki.jp',
          'miyazaki.miyazaki.jp',
          'morotsuka.miyazaki.jp',
          'nichinan.miyazaki.jp',
          'nishimera.miyazaki.jp',
          'nobeoka.miyazaki.jp',
          'saito.miyazaki.jp',
          'shiiba.miyazaki.jp',
          'shintomi.miyazaki.jp',
          'takaharu.miyazaki.jp',
          'takanabe.miyazaki.jp',
          'takazaki.miyazaki.jp',
          'tsuno.miyazaki.jp',
          'achi.nagano.jp',
          'agematsu.nagano.jp',
          'anan.nagano.jp',
          'aoki.nagano.jp',
          'asahi.nagano.jp',
          'azumino.nagano.jp',
          'chikuhoku.nagano.jp',
          'chikuma.nagano.jp',
          'chino.nagano.jp',
          'fujimi.nagano.jp',
          'hakuba.nagano.jp',
          'hara.nagano.jp',
          'hiraya.nagano.jp',
          'iida.nagano.jp',
          'iijima.nagano.jp',
          'iiyama.nagano.jp',
          'iizuna.nagano.jp',
          'ikeda.nagano.jp',
          'ikusaka.nagano.jp',
          'ina.nagano.jp',
          'karuizawa.nagano.jp',
          'kawakami.nagano.jp',
          'kiso.nagano.jp',
          'kisofukushima.nagano.jp',
          'kitaaiki.nagano.jp',
          'komagane.nagano.jp',
          'komoro.nagano.jp',
          'matsukawa.nagano.jp',
          'matsumoto.nagano.jp',
          'miasa.nagano.jp',
          'minamiaiki.nagano.jp',
          'minamimaki.nagano.jp',
          'minamiminowa.nagano.jp',
          'minowa.nagano.jp',
          'miyada.nagano.jp',
          'miyota.nagano.jp',
          'mochizuki.nagano.jp',
          'nagano.nagano.jp',
          'nagawa.nagano.jp',
          'nagiso.nagano.jp',
          'nakagawa.nagano.jp',
          'nakano.nagano.jp',
          'nozawaonsen.nagano.jp',
          'obuse.nagano.jp',
          'ogawa.nagano.jp',
          'okaya.nagano.jp',
          'omachi.nagano.jp',
          'omi.nagano.jp',
          'ookuwa.nagano.jp',
          'ooshika.nagano.jp',
          'otaki.nagano.jp',
          'otari.nagano.jp',
          'sakae.nagano.jp',
          'sakaki.nagano.jp',
          'saku.nagano.jp',
          'sakuho.nagano.jp',
          'shimosuwa.nagano.jp',
          'shinanomachi.nagano.jp',
          'shiojiri.nagano.jp',
          'suwa.nagano.jp',
          'suzaka.nagano.jp',
          'takagi.nagano.jp',
          'takamori.nagano.jp',
          'takayama.nagano.jp',
          'tateshina.nagano.jp',
          'tatsuno.nagano.jp',
          'togakushi.nagano.jp',
          'togura.nagano.jp',
          'tomi.nagano.jp',
          'ueda.nagano.jp',
          'wada.nagano.jp',
          'yamagata.nagano.jp',
          'yamanouchi.nagano.jp',
          'yasaka.nagano.jp',
          'yasuoka.nagano.jp',
          'chijiwa.nagasaki.jp',
          'futsu.nagasaki.jp',
          'goto.nagasaki.jp',
          'hasami.nagasaki.jp',
          'hirado.nagasaki.jp',
          'iki.nagasaki.jp',
          'isahaya.nagasaki.jp',
          'kawatana.nagasaki.jp',
          'kuchinotsu.nagasaki.jp',
          'matsuura.nagasaki.jp',
          'nagasaki.nagasaki.jp',
          'obama.nagasaki.jp',
          'omura.nagasaki.jp',
          'oseto.nagasaki.jp',
          'saikai.nagasaki.jp',
          'sasebo.nagasaki.jp',
          'seihi.nagasaki.jp',
          'shimabara.nagasaki.jp',
          'shinkamigoto.nagasaki.jp',
          'togitsu.nagasaki.jp',
          'tsushima.nagasaki.jp',
          'unzen.nagasaki.jp',
          'ando.nara.jp',
          'gose.nara.jp',
          'heguri.nara.jp',
          'higashiyoshino.nara.jp',
          'ikaruga.nara.jp',
          'ikoma.nara.jp',
          'kamikitayama.nara.jp',
          'kanmaki.nara.jp',
          'kashiba.nara.jp',
          'kashihara.nara.jp',
          'katsuragi.nara.jp',
          'kawai.nara.jp',
          'kawakami.nara.jp',
          'kawanishi.nara.jp',
          'koryo.nara.jp',
          'kurotaki.nara.jp',
          'mitsue.nara.jp',
          'miyake.nara.jp',
          'nara.nara.jp',
          'nosegawa.nara.jp',
          'oji.nara.jp',
          'ouda.nara.jp',
          'oyodo.nara.jp',
          'sakurai.nara.jp',
          'sango.nara.jp',
          'shimoichi.nara.jp',
          'shimokitayama.nara.jp',
          'shinjo.nara.jp',
          'soni.nara.jp',
          'takatori.nara.jp',
          'tawaramoto.nara.jp',
          'tenkawa.nara.jp',
          'tenri.nara.jp',
          'uda.nara.jp',
          'yamatokoriyama.nara.jp',
          'yamatotakada.nara.jp',
          'yamazoe.nara.jp',
          'yoshino.nara.jp',
          'aga.niigata.jp',
          'agano.niigata.jp',
          'gosen.niigata.jp',
          'itoigawa.niigata.jp',
          'izumozaki.niigata.jp',
          'joetsu.niigata.jp',
          'kamo.niigata.jp',
          'kariwa.niigata.jp',
          'kashiwazaki.niigata.jp',
          'minamiuonuma.niigata.jp',
          'mitsuke.niigata.jp',
          'muika.niigata.jp',
          'murakami.niigata.jp',
          'myoko.niigata.jp',
          'nagaoka.niigata.jp',
          'niigata.niigata.jp',
          'ojiya.niigata.jp',
          'omi.niigata.jp',
          'sado.niigata.jp',
          'sanjo.niigata.jp',
          'seiro.niigata.jp',
          'seirou.niigata.jp',
          'sekikawa.niigata.jp',
          'shibata.niigata.jp',
          'tagami.niigata.jp',
          'tainai.niigata.jp',
          'tochio.niigata.jp',
          'tokamachi.niigata.jp',
          'tsubame.niigata.jp',
          'tsunan.niigata.jp',
          'uonuma.niigata.jp',
          'yahiko.niigata.jp',
          'yoita.niigata.jp',
          'yuzawa.niigata.jp',
          'beppu.oita.jp',
          'bungoono.oita.jp',
          'bungotakada.oita.jp',
          'hasama.oita.jp',
          'hiji.oita.jp',
          'himeshima.oita.jp',
          'hita.oita.jp',
          'kamitsue.oita.jp',
          'kokonoe.oita.jp',
          'kuju.oita.jp',
          'kunisaki.oita.jp',
          'kusu.oita.jp',
          'oita.oita.jp',
          'saiki.oita.jp',
          'taketa.oita.jp',
          'tsukumi.oita.jp',
          'usa.oita.jp',
          'usuki.oita.jp',
          'yufu.oita.jp',
          'akaiwa.okayama.jp',
          'asakuchi.okayama.jp',
          'bizen.okayama.jp',
          'hayashima.okayama.jp',
          'ibara.okayama.jp',
          'kagamino.okayama.jp',
          'kasaoka.okayama.jp',
          'kibichuo.okayama.jp',
          'kumenan.okayama.jp',
          'kurashiki.okayama.jp',
          'maniwa.okayama.jp',
          'misaki.okayama.jp',
          'nagi.okayama.jp',
          'niimi.okayama.jp',
          'nishiawakura.okayama.jp',
          'okayama.okayama.jp',
          'satosho.okayama.jp',
          'setouchi.okayama.jp',
          'shinjo.okayama.jp',
          'shoo.okayama.jp',
          'soja.okayama.jp',
          'takahashi.okayama.jp',
          'tamano.okayama.jp',
          'tsuyama.okayama.jp',
          'wake.okayama.jp',
          'yakage.okayama.jp',
          'aguni.okinawa.jp',
          'ginowan.okinawa.jp',
          'ginoza.okinawa.jp',
          'gushikami.okinawa.jp',
          'haebaru.okinawa.jp',
          'higashi.okinawa.jp',
          'hirara.okinawa.jp',
          'iheya.okinawa.jp',
          'ishigaki.okinawa.jp',
          'ishikawa.okinawa.jp',
          'itoman.okinawa.jp',
          'izena.okinawa.jp',
          'kadena.okinawa.jp',
          'kin.okinawa.jp',
          'kitadaito.okinawa.jp',
          'kitanakagusuku.okinawa.jp',
          'kumejima.okinawa.jp',
          'kunigami.okinawa.jp',
          'minamidaito.okinawa.jp',
          'motobu.okinawa.jp',
          'nago.okinawa.jp',
          'naha.okinawa.jp',
          'nakagusuku.okinawa.jp',
          'nakijin.okinawa.jp',
          'nanjo.okinawa.jp',
          'nishihara.okinawa.jp',
          'ogimi.okinawa.jp',
          'okinawa.okinawa.jp',
          'onna.okinawa.jp',
          'shimoji.okinawa.jp',
          'taketomi.okinawa.jp',
          'tarama.okinawa.jp',
          'tokashiki.okinawa.jp',
          'tomigusuku.okinawa.jp',
          'tonaki.okinawa.jp',
          'urasoe.okinawa.jp',
          'uruma.okinawa.jp',
          'yaese.okinawa.jp',
          'yomitan.okinawa.jp',
          'yonabaru.okinawa.jp',
          'yonaguni.okinawa.jp',
          'zamami.okinawa.jp',
          'abeno.osaka.jp',
          'chihayaakasaka.osaka.jp',
          'chuo.osaka.jp',
          'daito.osaka.jp',
          'fujiidera.osaka.jp',
          'habikino.osaka.jp',
          'hannan.osaka.jp',
          'higashiosaka.osaka.jp',
          'higashisumiyoshi.osaka.jp',
          'higashiyodogawa.osaka.jp',
          'hirakata.osaka.jp',
          'ibaraki.osaka.jp',
          'ikeda.osaka.jp',
          'izumi.osaka.jp',
          'izumiotsu.osaka.jp',
          'izumisano.osaka.jp',
          'kadoma.osaka.jp',
          'kaizuka.osaka.jp',
          'kanan.osaka.jp',
          'kashiwara.osaka.jp',
          'katano.osaka.jp',
          'kawachinagano.osaka.jp',
          'kishiwada.osaka.jp',
          'kita.osaka.jp',
          'kumatori.osaka.jp',
          'matsubara.osaka.jp',
          'minato.osaka.jp',
          'minoh.osaka.jp',
          'misaki.osaka.jp',
          'moriguchi.osaka.jp',
          'neyagawa.osaka.jp',
          'nishi.osaka.jp',
          'nose.osaka.jp',
          'osakasayama.osaka.jp',
          'sakai.osaka.jp',
          'sayama.osaka.jp',
          'sennan.osaka.jp',
          'settsu.osaka.jp',
          'shijonawate.osaka.jp',
          'shimamoto.osaka.jp',
          'suita.osaka.jp',
          'tadaoka.osaka.jp',
          'taishi.osaka.jp',
          'tajiri.osaka.jp',
          'takaishi.osaka.jp',
          'takatsuki.osaka.jp',
          'tondabayashi.osaka.jp',
          'toyonaka.osaka.jp',
          'toyono.osaka.jp',
          'yao.osaka.jp',
          'ariake.saga.jp',
          'arita.saga.jp',
          'fukudomi.saga.jp',
          'genkai.saga.jp',
          'hamatama.saga.jp',
          'hizen.saga.jp',
          'imari.saga.jp',
          'kamimine.saga.jp',
          'kanzaki.saga.jp',
          'karatsu.saga.jp',
          'kashima.saga.jp',
          'kitagata.saga.jp',
          'kitahata.saga.jp',
          'kiyama.saga.jp',
          'kouhoku.saga.jp',
          'kyuragi.saga.jp',
          'nishiarita.saga.jp',
          'ogi.saga.jp',
          'omachi.saga.jp',
          'ouchi.saga.jp',
          'saga.saga.jp',
          'shiroishi.saga.jp',
          'taku.saga.jp',
          'tara.saga.jp',
          'tosu.saga.jp',
          'yoshinogari.saga.jp',
          'arakawa.saitama.jp',
          'asaka.saitama.jp',
          'chichibu.saitama.jp',
          'fujimi.saitama.jp',
          'fujimino.saitama.jp',
          'fukaya.saitama.jp',
          'hanno.saitama.jp',
          'hanyu.saitama.jp',
          'hasuda.saitama.jp',
          'hatogaya.saitama.jp',
          'hatoyama.saitama.jp',
          'hidaka.saitama.jp',
          'higashichichibu.saitama.jp',
          'higashimatsuyama.saitama.jp',
          'honjo.saitama.jp',
          'ina.saitama.jp',
          'iruma.saitama.jp',
          'iwatsuki.saitama.jp',
          'kamiizumi.saitama.jp',
          'kamikawa.saitama.jp',
          'kamisato.saitama.jp',
          'kasukabe.saitama.jp',
          'kawagoe.saitama.jp',
          'kawaguchi.saitama.jp',
          'kawajima.saitama.jp',
          'kazo.saitama.jp',
          'kitamoto.saitama.jp',
          'koshigaya.saitama.jp',
          'kounosu.saitama.jp',
          'kuki.saitama.jp',
          'kumagaya.saitama.jp',
          'matsubushi.saitama.jp',
          'minano.saitama.jp',
          'misato.saitama.jp',
          'miyashiro.saitama.jp',
          'miyoshi.saitama.jp',
          'moroyama.saitama.jp',
          'nagatoro.saitama.jp',
          'namegawa.saitama.jp',
          'niiza.saitama.jp',
          'ogano.saitama.jp',
          'ogawa.saitama.jp',
          'ogose.saitama.jp',
          'okegawa.saitama.jp',
          'omiya.saitama.jp',
          'otaki.saitama.jp',
          'ranzan.saitama.jp',
          'ryokami.saitama.jp',
          'saitama.saitama.jp',
          'sakado.saitama.jp',
          'satte.saitama.jp',
          'sayama.saitama.jp',
          'shiki.saitama.jp',
          'shiraoka.saitama.jp',
          'soka.saitama.jp',
          'sugito.saitama.jp',
          'toda.saitama.jp',
          'tokigawa.saitama.jp',
          'tokorozawa.saitama.jp',
          'tsurugashima.saitama.jp',
          'urawa.saitama.jp',
          'warabi.saitama.jp',
          'yashio.saitama.jp',
          'yokoze.saitama.jp',
          'yono.saitama.jp',
          'yorii.saitama.jp',
          'yoshida.saitama.jp',
          'yoshikawa.saitama.jp',
          'yoshimi.saitama.jp',
          'aisho.shiga.jp',
          'gamo.shiga.jp',
          'higashiomi.shiga.jp',
          'hikone.shiga.jp',
          'koka.shiga.jp',
          'konan.shiga.jp',
          'kosei.shiga.jp',
          'koto.shiga.jp',
          'kusatsu.shiga.jp',
          'maibara.shiga.jp',
          'moriyama.shiga.jp',
          'nagahama.shiga.jp',
          'nishiazai.shiga.jp',
          'notogawa.shiga.jp',
          'omihachiman.shiga.jp',
          'otsu.shiga.jp',
          'ritto.shiga.jp',
          'ryuoh.shiga.jp',
          'takashima.shiga.jp',
          'takatsuki.shiga.jp',
          'torahime.shiga.jp',
          'toyosato.shiga.jp',
          'yasu.shiga.jp',
          'akagi.shimane.jp',
          'ama.shimane.jp',
          'gotsu.shimane.jp',
          'hamada.shimane.jp',
          'higashiizumo.shimane.jp',
          'hikawa.shimane.jp',
          'hikimi.shimane.jp',
          'izumo.shimane.jp',
          'kakinoki.shimane.jp',
          'masuda.shimane.jp',
          'matsue.shimane.jp',
          'misato.shimane.jp',
          'nishinoshima.shimane.jp',
          'ohda.shimane.jp',
          'okinoshima.shimane.jp',
          'okuizumo.shimane.jp',
          'shimane.shimane.jp',
          'tamayu.shimane.jp',
          'tsuwano.shimane.jp',
          'unnan.shimane.jp',
          'yakumo.shimane.jp',
          'yasugi.shimane.jp',
          'yatsuka.shimane.jp',
          'arai.shizuoka.jp',
          'atami.shizuoka.jp',
          'fuji.shizuoka.jp',
          'fujieda.shizuoka.jp',
          'fujikawa.shizuoka.jp',
          'fujinomiya.shizuoka.jp',
          'fukuroi.shizuoka.jp',
          'gotemba.shizuoka.jp',
          'haibara.shizuoka.jp',
          'hamamatsu.shizuoka.jp',
          'higashiizu.shizuoka.jp',
          'ito.shizuoka.jp',
          'iwata.shizuoka.jp',
          'izu.shizuoka.jp',
          'izunokuni.shizuoka.jp',
          'kakegawa.shizuoka.jp',
          'kannami.shizuoka.jp',
          'kawanehon.shizuoka.jp',
          'kawazu.shizuoka.jp',
          'kikugawa.shizuoka.jp',
          'kosai.shizuoka.jp',
          'makinohara.shizuoka.jp',
          'matsuzaki.shizuoka.jp',
          'minamiizu.shizuoka.jp',
          'mishima.shizuoka.jp',
          'morimachi.shizuoka.jp',
          'nishiizu.shizuoka.jp',
          'numazu.shizuoka.jp',
          'omaezaki.shizuoka.jp',
          'shimada.shizuoka.jp',
          'shimizu.shizuoka.jp',
          'shimoda.shizuoka.jp',
          'shizuoka.shizuoka.jp',
          'susono.shizuoka.jp',
          'yaizu.shizuoka.jp',
          'yoshida.shizuoka.jp',
          'ashikaga.tochigi.jp',
          'bato.tochigi.jp',
          'haga.tochigi.jp',
          'ichikai.tochigi.jp',
          'iwafune.tochigi.jp',
          'kaminokawa.tochigi.jp',
          'kanuma.tochigi.jp',
          'karasuyama.tochigi.jp',
          'kuroiso.tochigi.jp',
          'mashiko.tochigi.jp',
          'mibu.tochigi.jp',
          'moka.tochigi.jp',
          'motegi.tochigi.jp',
          'nasu.tochigi.jp',
          'nasushiobara.tochigi.jp',
          'nikko.tochigi.jp',
          'nishikata.tochigi.jp',
          'nogi.tochigi.jp',
          'ohira.tochigi.jp',
          'ohtawara.tochigi.jp',
          'oyama.tochigi.jp',
          'sakura.tochigi.jp',
          'sano.tochigi.jp',
          'shimotsuke.tochigi.jp',
          'shioya.tochigi.jp',
          'takanezawa.tochigi.jp',
          'tochigi.tochigi.jp',
          'tsuga.tochigi.jp',
          'ujiie.tochigi.jp',
          'utsunomiya.tochigi.jp',
          'yaita.tochigi.jp',
          'aizumi.tokushima.jp',
          'anan.tokushima.jp',
          'ichiba.tokushima.jp',
          'itano.tokushima.jp',
          'kainan.tokushima.jp',
          'komatsushima.tokushima.jp',
          'matsushige.tokushima.jp',
          'mima.tokushima.jp',
          'minami.tokushima.jp',
          'miyoshi.tokushima.jp',
          'mugi.tokushima.jp',
          'nakagawa.tokushima.jp',
          'naruto.tokushima.jp',
          'sanagochi.tokushima.jp',
          'shishikui.tokushima.jp',
          'tokushima.tokushima.jp',
          'wajiki.tokushima.jp',
          'adachi.tokyo.jp',
          'akiruno.tokyo.jp',
          'akishima.tokyo.jp',
          'aogashima.tokyo.jp',
          'arakawa.tokyo.jp',
          'bunkyo.tokyo.jp',
          'chiyoda.tokyo.jp',
          'chofu.tokyo.jp',
          'chuo.tokyo.jp',
          'edogawa.tokyo.jp',
          'fuchu.tokyo.jp',
          'fussa.tokyo.jp',
          'hachijo.tokyo.jp',
          'hachioji.tokyo.jp',
          'hamura.tokyo.jp',
          'higashikurume.tokyo.jp',
          'higashimurayama.tokyo.jp',
          'higashiyamato.tokyo.jp',
          'hino.tokyo.jp',
          'hinode.tokyo.jp',
          'hinohara.tokyo.jp',
          'inagi.tokyo.jp',
          'itabashi.tokyo.jp',
          'katsushika.tokyo.jp',
          'kita.tokyo.jp',
          'kiyose.tokyo.jp',
          'kodaira.tokyo.jp',
          'koganei.tokyo.jp',
          'kokubunji.tokyo.jp',
          'komae.tokyo.jp',
          'koto.tokyo.jp',
          'kouzushima.tokyo.jp',
          'kunitachi.tokyo.jp',
          'machida.tokyo.jp',
          'meguro.tokyo.jp',
          'minato.tokyo.jp',
          'mitaka.tokyo.jp',
          'mizuho.tokyo.jp',
          'musashimurayama.tokyo.jp',
          'musashino.tokyo.jp',
          'nakano.tokyo.jp',
          'nerima.tokyo.jp',
          'ogasawara.tokyo.jp',
          'okutama.tokyo.jp',
          'ome.tokyo.jp',
          'oshima.tokyo.jp',
          'ota.tokyo.jp',
          'setagaya.tokyo.jp',
          'shibuya.tokyo.jp',
          'shinagawa.tokyo.jp',
          'shinjuku.tokyo.jp',
          'suginami.tokyo.jp',
          'sumida.tokyo.jp',
          'tachikawa.tokyo.jp',
          'taito.tokyo.jp',
          'tama.tokyo.jp',
          'toshima.tokyo.jp',
          'chizu.tottori.jp',
          'hino.tottori.jp',
          'kawahara.tottori.jp',
          'koge.tottori.jp',
          'kotoura.tottori.jp',
          'misasa.tottori.jp',
          'nanbu.tottori.jp',
          'nichinan.tottori.jp',
          'sakaiminato.tottori.jp',
          'tottori.tottori.jp',
          'wakasa.tottori.jp',
          'yazu.tottori.jp',
          'yonago.tottori.jp',
          'asahi.toyama.jp',
          'fuchu.toyama.jp',
          'fukumitsu.toyama.jp',
          'funahashi.toyama.jp',
          'himi.toyama.jp',
          'imizu.toyama.jp',
          'inami.toyama.jp',
          'johana.toyama.jp',
          'kamiichi.toyama.jp',
          'kurobe.toyama.jp',
          'nakaniikawa.toyama.jp',
          'namerikawa.toyama.jp',
          'nanto.toyama.jp',
          'nyuzen.toyama.jp',
          'oyabe.toyama.jp',
          'taira.toyama.jp',
          'takaoka.toyama.jp',
          'tateyama.toyama.jp',
          'toga.toyama.jp',
          'tonami.toyama.jp',
          'toyama.toyama.jp',
          'unazuki.toyama.jp',
          'uozu.toyama.jp',
          'yamada.toyama.jp',
          'arida.wakayama.jp',
          'aridagawa.wakayama.jp',
          'gobo.wakayama.jp',
          'hashimoto.wakayama.jp',
          'hidaka.wakayama.jp',
          'hirogawa.wakayama.jp',
          'inami.wakayama.jp',
          'iwade.wakayama.jp',
          'kainan.wakayama.jp',
          'kamitonda.wakayama.jp',
          'katsuragi.wakayama.jp',
          'kimino.wakayama.jp',
          'kinokawa.wakayama.jp',
          'kitayama.wakayama.jp',
          'koya.wakayama.jp',
          'koza.wakayama.jp',
          'kozagawa.wakayama.jp',
          'kudoyama.wakayama.jp',
          'kushimoto.wakayama.jp',
          'mihama.wakayama.jp',
          'misato.wakayama.jp',
          'nachikatsuura.wakayama.jp',
          'shingu.wakayama.jp',
          'shirahama.wakayama.jp',
          'taiji.wakayama.jp',
          'tanabe.wakayama.jp',
          'wakayama.wakayama.jp',
          'yuasa.wakayama.jp',
          'yura.wakayama.jp',
          'asahi.yamagata.jp',
          'funagata.yamagata.jp',
          'higashine.yamagata.jp',
          'iide.yamagata.jp',
          'kahoku.yamagata.jp',
          'kaminoyama.yamagata.jp',
          'kaneyama.yamagata.jp',
          'kawanishi.yamagata.jp',
          'mamurogawa.yamagata.jp',
          'mikawa.yamagata.jp',
          'murayama.yamagata.jp',
          'nagai.yamagata.jp',
          'nakayama.yamagata.jp',
          'nanyo.yamagata.jp',
          'nishikawa.yamagata.jp',
          'obanazawa.yamagata.jp',
          'oe.yamagata.jp',
          'oguni.yamagata.jp',
          'ohkura.yamagata.jp',
          'oishida.yamagata.jp',
          'sagae.yamagata.jp',
          'sakata.yamagata.jp',
          'sakegawa.yamagata.jp',
          'shinjo.yamagata.jp',
          'shirataka.yamagata.jp',
          'shonai.yamagata.jp',
          'takahata.yamagata.jp',
          'tendo.yamagata.jp',
          'tozawa.yamagata.jp',
          'tsuruoka.yamagata.jp',
          'yamagata.yamagata.jp',
          'yamanobe.yamagata.jp',
          'yonezawa.yamagata.jp',
          'yuza.yamagata.jp',
          'abu.yamaguchi.jp',
          'hagi.yamaguchi.jp',
          'hikari.yamaguchi.jp',
          'hofu.yamaguchi.jp',
          'iwakuni.yamaguchi.jp',
          'kudamatsu.yamaguchi.jp',
          'mitou.yamaguchi.jp',
          'nagato.yamaguchi.jp',
          'oshima.yamaguchi.jp',
          'shimonoseki.yamaguchi.jp',
          'shunan.yamaguchi.jp',
          'tabuse.yamaguchi.jp',
          'tokuyama.yamaguchi.jp',
          'toyota.yamaguchi.jp',
          'ube.yamaguchi.jp',
          'yuu.yamaguchi.jp',
          'chuo.yamanashi.jp',
          'doshi.yamanashi.jp',
          'fuefuki.yamanashi.jp',
          'fujikawa.yamanashi.jp',
          'fujikawaguchiko.yamanashi.jp',
          'fujiyoshida.yamanashi.jp',
          'hayakawa.yamanashi.jp',
          'hokuto.yamanashi.jp',
          'ichikawamisato.yamanashi.jp',
          'kai.yamanashi.jp',
          'kofu.yamanashi.jp',
          'koshu.yamanashi.jp',
          'kosuge.yamanashi.jp',
          'minami-alps.yamanashi.jp',
          'minobu.yamanashi.jp',
          'nakamichi.yamanashi.jp',
          'nanbu.yamanashi.jp',
          'narusawa.yamanashi.jp',
          'nirasaki.yamanashi.jp',
          'nishikatsura.yamanashi.jp',
          'oshino.yamanashi.jp',
          'otsuki.yamanashi.jp',
          'showa.yamanashi.jp',
          'tabayama.yamanashi.jp',
          'tsuru.yamanashi.jp',
          'uenohara.yamanashi.jp',
          'yamanakako.yamanashi.jp',
          'yamanashi.yamanashi.jp',
          'ke',
          'ac.ke',
          'co.ke',
          'go.ke',
          'info.ke',
          'me.ke',
          'mobi.ke',
          'ne.ke',
          'or.ke',
          'sc.ke',
          'kg',
          'org.kg',
          'net.kg',
          'com.kg',
          'edu.kg',
          'gov.kg',
          'mil.kg',
          '*.kh',
          'ki',
          'edu.ki',
          'biz.ki',
          'net.ki',
          'org.ki',
          'gov.ki',
          'info.ki',
          'com.ki',
          'km',
          'org.km',
          'nom.km',
          'gov.km',
          'prd.km',
          'tm.km',
          'edu.km',
          'mil.km',
          'ass.km',
          'com.km',
          'coop.km',
          'asso.km',
          'presse.km',
          'medecin.km',
          'notaires.km',
          'pharmaciens.km',
          'veterinaire.km',
          'gouv.km',
          'kn',
          'net.kn',
          'org.kn',
          'edu.kn',
          'gov.kn',
          'kp',
          'com.kp',
          'edu.kp',
          'gov.kp',
          'org.kp',
          'rep.kp',
          'tra.kp',
          'kr',
          'ac.kr',
          'co.kr',
          'es.kr',
          'go.kr',
          'hs.kr',
          'kg.kr',
          'mil.kr',
          'ms.kr',
          'ne.kr',
          'or.kr',
          'pe.kr',
          're.kr',
          'sc.kr',
          'busan.kr',
          'chungbuk.kr',
          'chungnam.kr',
          'daegu.kr',
          'daejeon.kr',
          'gangwon.kr',
          'gwangju.kr',
          'gyeongbuk.kr',
          'gyeonggi.kr',
          'gyeongnam.kr',
          'incheon.kr',
          'jeju.kr',
          'jeonbuk.kr',
          'jeonnam.kr',
          'seoul.kr',
          'ulsan.kr',
          'kw',
          'com.kw',
          'edu.kw',
          'emb.kw',
          'gov.kw',
          'ind.kw',
          'net.kw',
          'org.kw',
          'ky',
          'com.ky',
          'edu.ky',
          'net.ky',
          'org.ky',
          'kz',
          'org.kz',
          'edu.kz',
          'net.kz',
          'gov.kz',
          'mil.kz',
          'com.kz',
          'la',
          'int.la',
          'net.la',
          'info.la',
          'edu.la',
          'gov.la',
          'per.la',
          'com.la',
          'org.la',
          'lb',
          'com.lb',
          'edu.lb',
          'gov.lb',
          'net.lb',
          'org.lb',
          'lc',
          'com.lc',
          'net.lc',
          'co.lc',
          'org.lc',
          'edu.lc',
          'gov.lc',
          'li',
          'lk',
          'gov.lk',
          'sch.lk',
          'net.lk',
          'int.lk',
          'com.lk',
          'org.lk',
          'edu.lk',
          'ngo.lk',
          'soc.lk',
          'web.lk',
          'ltd.lk',
          'assn.lk',
          'grp.lk',
          'hotel.lk',
          'ac.lk',
          'lr',
          'com.lr',
          'edu.lr',
          'gov.lr',
          'org.lr',
          'net.lr',
          'ls',
          'ac.ls',
          'biz.ls',
          'co.ls',
          'edu.ls',
          'gov.ls',
          'info.ls',
          'net.ls',
          'org.ls',
          'sc.ls',
          'lt',
          'gov.lt',
          'lu',
          'lv',
          'com.lv',
          'edu.lv',
          'gov.lv',
          'org.lv',
          'mil.lv',
          'id.lv',
          'net.lv',
          'asn.lv',
          'conf.lv',
          'ly',
          'com.ly',
          'net.ly',
          'gov.ly',
          'plc.ly',
          'edu.ly',
          'sch.ly',
          'med.ly',
          'org.ly',
          'id.ly',
          'ma',
          'co.ma',
          'net.ma',
          'gov.ma',
          'org.ma',
          'ac.ma',
          'press.ma',
          'mc',
          'tm.mc',
          'asso.mc',
          'md',
          'me',
          'co.me',
          'net.me',
          'org.me',
          'edu.me',
          'ac.me',
          'gov.me',
          'its.me',
          'priv.me',
          'mg',
          'org.mg',
          'nom.mg',
          'gov.mg',
          'prd.mg',
          'tm.mg',
          'edu.mg',
          'mil.mg',
          'com.mg',
          'co.mg',
          'mh',
          'mil',
          'mk',
          'com.mk',
          'org.mk',
          'net.mk',
          'edu.mk',
          'gov.mk',
          'inf.mk',
          'name.mk',
          'ml',
          'com.ml',
          'edu.ml',
          'gouv.ml',
          'gov.ml',
          'net.ml',
          'org.ml',
          'presse.ml',
          '*.mm',
          'mn',
          'gov.mn',
          'edu.mn',
          'org.mn',
          'mo',
          'com.mo',
          'net.mo',
          'org.mo',
          'edu.mo',
          'gov.mo',
          'mobi',
          'mp',
          'mq',
          'mr',
          'gov.mr',
          'ms',
          'com.ms',
          'edu.ms',
          'gov.ms',
          'net.ms',
          'org.ms',
          'mt',
          'com.mt',
          'edu.mt',
          'net.mt',
          'org.mt',
          'mu',
          'com.mu',
          'net.mu',
          'org.mu',
          'gov.mu',
          'ac.mu',
          'co.mu',
          'or.mu',
          'museum',
          'academy.museum',
          'agriculture.museum',
          'air.museum',
          'airguard.museum',
          'alabama.museum',
          'alaska.museum',
          'amber.museum',
          'ambulance.museum',
          'american.museum',
          'americana.museum',
          'americanantiques.museum',
          'americanart.museum',
          'amsterdam.museum',
          'and.museum',
          'annefrank.museum',
          'anthro.museum',
          'anthropology.museum',
          'antiques.museum',
          'aquarium.museum',
          'arboretum.museum',
          'archaeological.museum',
          'archaeology.museum',
          'architecture.museum',
          'art.museum',
          'artanddesign.museum',
          'artcenter.museum',
          'artdeco.museum',
          'arteducation.museum',
          'artgallery.museum',
          'arts.museum',
          'artsandcrafts.museum',
          'asmatart.museum',
          'assassination.museum',
          'assisi.museum',
          'association.museum',
          'astronomy.museum',
          'atlanta.museum',
          'austin.museum',
          'australia.museum',
          'automotive.museum',
          'aviation.museum',
          'axis.museum',
          'badajoz.museum',
          'baghdad.museum',
          'bahn.museum',
          'bale.museum',
          'baltimore.museum',
          'barcelona.museum',
          'baseball.museum',
          'basel.museum',
          'baths.museum',
          'bauern.museum',
          'beauxarts.museum',
          'beeldengeluid.museum',
          'bellevue.museum',
          'bergbau.museum',
          'berkeley.museum',
          'berlin.museum',
          'bern.museum',
          'bible.museum',
          'bilbao.museum',
          'bill.museum',
          'birdart.museum',
          'birthplace.museum',
          'bonn.museum',
          'boston.museum',
          'botanical.museum',
          'botanicalgarden.museum',
          'botanicgarden.museum',
          'botany.museum',
          'brandywinevalley.museum',
          'brasil.museum',
          'bristol.museum',
          'british.museum',
          'britishcolumbia.museum',
          'broadcast.museum',
          'brunel.museum',
          'brussel.museum',
          'brussels.museum',
          'bruxelles.museum',
          'building.museum',
          'burghof.museum',
          'bus.museum',
          'bushey.museum',
          'cadaques.museum',
          'california.museum',
          'cambridge.museum',
          'can.museum',
          'canada.museum',
          'capebreton.museum',
          'carrier.museum',
          'cartoonart.museum',
          'casadelamoneda.museum',
          'castle.museum',
          'castres.museum',
          'celtic.museum',
          'center.museum',
          'chattanooga.museum',
          'cheltenham.museum',
          'chesapeakebay.museum',
          'chicago.museum',
          'children.museum',
          'childrens.museum',
          'childrensgarden.museum',
          'chiropractic.museum',
          'chocolate.museum',
          'christiansburg.museum',
          'cincinnati.museum',
          'cinema.museum',
          'circus.museum',
          'civilisation.museum',
          'civilization.museum',
          'civilwar.museum',
          'clinton.museum',
          'clock.museum',
          'coal.museum',
          'coastaldefence.museum',
          'cody.museum',
          'coldwar.museum',
          'collection.museum',
          'colonialwilliamsburg.museum',
          'coloradoplateau.museum',
          'columbia.museum',
          'columbus.museum',
          'communication.museum',
          'communications.museum',
          'community.museum',
          'computer.museum',
          'computerhistory.museum',
          'comunica\xE7\xF5es.museum',
          'contemporary.museum',
          'contemporaryart.museum',
          'convent.museum',
          'copenhagen.museum',
          'corporation.museum',
          'correios-e-telecomunica\xE7\xF5es.museum',
          'corvette.museum',
          'costume.museum',
          'countryestate.museum',
          'county.museum',
          'crafts.museum',
          'cranbrook.museum',
          'creation.museum',
          'cultural.museum',
          'culturalcenter.museum',
          'culture.museum',
          'cyber.museum',
          'cymru.museum',
          'dali.museum',
          'dallas.museum',
          'database.museum',
          'ddr.museum',
          'decorativearts.museum',
          'delaware.museum',
          'delmenhorst.museum',
          'denmark.museum',
          'depot.museum',
          'design.museum',
          'detroit.museum',
          'dinosaur.museum',
          'discovery.museum',
          'dolls.museum',
          'donostia.museum',
          'durham.museum',
          'eastafrica.museum',
          'eastcoast.museum',
          'education.museum',
          'educational.museum',
          'egyptian.museum',
          'eisenbahn.museum',
          'elburg.museum',
          'elvendrell.museum',
          'embroidery.museum',
          'encyclopedic.museum',
          'england.museum',
          'entomology.museum',
          'environment.museum',
          'environmentalconservation.museum',
          'epilepsy.museum',
          'essex.museum',
          'estate.museum',
          'ethnology.museum',
          'exeter.museum',
          'exhibition.museum',
          'family.museum',
          'farm.museum',
          'farmequipment.museum',
          'farmers.museum',
          'farmstead.museum',
          'field.museum',
          'figueres.museum',
          'filatelia.museum',
          'film.museum',
          'fineart.museum',
          'finearts.museum',
          'finland.museum',
          'flanders.museum',
          'florida.museum',
          'force.museum',
          'fortmissoula.museum',
          'fortworth.museum',
          'foundation.museum',
          'francaise.museum',
          'frankfurt.museum',
          'franziskaner.museum',
          'freemasonry.museum',
          'freiburg.museum',
          'fribourg.museum',
          'frog.museum',
          'fundacio.museum',
          'furniture.museum',
          'gallery.museum',
          'garden.museum',
          'gateway.museum',
          'geelvinck.museum',
          'gemological.museum',
          'geology.museum',
          'georgia.museum',
          'giessen.museum',
          'glas.museum',
          'glass.museum',
          'gorge.museum',
          'grandrapids.museum',
          'graz.museum',
          'guernsey.museum',
          'halloffame.museum',
          'hamburg.museum',
          'handson.museum',
          'harvestcelebration.museum',
          'hawaii.museum',
          'health.museum',
          'heimatunduhren.museum',
          'hellas.museum',
          'helsinki.museum',
          'hembygdsforbund.museum',
          'heritage.museum',
          'histoire.museum',
          'historical.museum',
          'historicalsociety.museum',
          'historichouses.museum',
          'historisch.museum',
          'historisches.museum',
          'history.museum',
          'historyofscience.museum',
          'horology.museum',
          'house.museum',
          'humanities.museum',
          'illustration.museum',
          'imageandsound.museum',
          'indian.museum',
          'indiana.museum',
          'indianapolis.museum',
          'indianmarket.museum',
          'intelligence.museum',
          'interactive.museum',
          'iraq.museum',
          'iron.museum',
          'isleofman.museum',
          'jamison.museum',
          'jefferson.museum',
          'jerusalem.museum',
          'jewelry.museum',
          'jewish.museum',
          'jewishart.museum',
          'jfk.museum',
          'journalism.museum',
          'judaica.museum',
          'judygarland.museum',
          'juedisches.museum',
          'juif.museum',
          'karate.museum',
          'karikatur.museum',
          'kids.museum',
          'koebenhavn.museum',
          'koeln.museum',
          'kunst.museum',
          'kunstsammlung.museum',
          'kunstunddesign.museum',
          'labor.museum',
          'labour.museum',
          'lajolla.museum',
          'lancashire.museum',
          'landes.museum',
          'lans.museum',
          'l\xE4ns.museum',
          'larsson.museum',
          'lewismiller.museum',
          'lincoln.museum',
          'linz.museum',
          'living.museum',
          'livinghistory.museum',
          'localhistory.museum',
          'london.museum',
          'losangeles.museum',
          'louvre.museum',
          'loyalist.museum',
          'lucerne.museum',
          'luxembourg.museum',
          'luzern.museum',
          'mad.museum',
          'madrid.museum',
          'mallorca.museum',
          'manchester.museum',
          'mansion.museum',
          'mansions.museum',
          'manx.museum',
          'marburg.museum',
          'maritime.museum',
          'maritimo.museum',
          'maryland.museum',
          'marylhurst.museum',
          'media.museum',
          'medical.museum',
          'medizinhistorisches.museum',
          'meeres.museum',
          'memorial.museum',
          'mesaverde.museum',
          'michigan.museum',
          'midatlantic.museum',
          'military.museum',
          'mill.museum',
          'miners.museum',
          'mining.museum',
          'minnesota.museum',
          'missile.museum',
          'missoula.museum',
          'modern.museum',
          'moma.museum',
          'money.museum',
          'monmouth.museum',
          'monticello.museum',
          'montreal.museum',
          'moscow.museum',
          'motorcycle.museum',
          'muenchen.museum',
          'muenster.museum',
          'mulhouse.museum',
          'muncie.museum',
          'museet.museum',
          'museumcenter.museum',
          'museumvereniging.museum',
          'music.museum',
          'national.museum',
          'nationalfirearms.museum',
          'nationalheritage.museum',
          'nativeamerican.museum',
          'naturalhistory.museum',
          'naturalhistorymuseum.museum',
          'naturalsciences.museum',
          'nature.museum',
          'naturhistorisches.museum',
          'natuurwetenschappen.museum',
          'naumburg.museum',
          'naval.museum',
          'nebraska.museum',
          'neues.museum',
          'newhampshire.museum',
          'newjersey.museum',
          'newmexico.museum',
          'newport.museum',
          'newspaper.museum',
          'newyork.museum',
          'niepce.museum',
          'norfolk.museum',
          'north.museum',
          'nrw.museum',
          'nyc.museum',
          'nyny.museum',
          'oceanographic.museum',
          'oceanographique.museum',
          'omaha.museum',
          'online.museum',
          'ontario.museum',
          'openair.museum',
          'oregon.museum',
          'oregontrail.museum',
          'otago.museum',
          'oxford.museum',
          'pacific.museum',
          'paderborn.museum',
          'palace.museum',
          'paleo.museum',
          'palmsprings.museum',
          'panama.museum',
          'paris.museum',
          'pasadena.museum',
          'pharmacy.museum',
          'philadelphia.museum',
          'philadelphiaarea.museum',
          'philately.museum',
          'phoenix.museum',
          'photography.museum',
          'pilots.museum',
          'pittsburgh.museum',
          'planetarium.museum',
          'plantation.museum',
          'plants.museum',
          'plaza.museum',
          'portal.museum',
          'portland.museum',
          'portlligat.museum',
          'posts-and-telecommunications.museum',
          'preservation.museum',
          'presidio.museum',
          'press.museum',
          'project.museum',
          'public.museum',
          'pubol.museum',
          'quebec.museum',
          'railroad.museum',
          'railway.museum',
          'research.museum',
          'resistance.museum',
          'riodejaneiro.museum',
          'rochester.museum',
          'rockart.museum',
          'roma.museum',
          'russia.museum',
          'saintlouis.museum',
          'salem.museum',
          'salvadordali.museum',
          'salzburg.museum',
          'sandiego.museum',
          'sanfrancisco.museum',
          'santabarbara.museum',
          'santacruz.museum',
          'santafe.museum',
          'saskatchewan.museum',
          'satx.museum',
          'savannahga.museum',
          'schlesisches.museum',
          'schoenbrunn.museum',
          'schokoladen.museum',
          'school.museum',
          'schweiz.museum',
          'science.museum',
          'scienceandhistory.museum',
          'scienceandindustry.museum',
          'sciencecenter.museum',
          'sciencecenters.museum',
          'science-fiction.museum',
          'sciencehistory.museum',
          'sciences.museum',
          'sciencesnaturelles.museum',
          'scotland.museum',
          'seaport.museum',
          'settlement.museum',
          'settlers.museum',
          'shell.museum',
          'sherbrooke.museum',
          'sibenik.museum',
          'silk.museum',
          'ski.museum',
          'skole.museum',
          'society.museum',
          'sologne.museum',
          'soundandvision.museum',
          'southcarolina.museum',
          'southwest.museum',
          'space.museum',
          'spy.museum',
          'square.museum',
          'stadt.museum',
          'stalbans.museum',
          'starnberg.museum',
          'state.museum',
          'stateofdelaware.museum',
          'station.museum',
          'steam.museum',
          'steiermark.museum',
          'stjohn.museum',
          'stockholm.museum',
          'stpetersburg.museum',
          'stuttgart.museum',
          'suisse.museum',
          'surgeonshall.museum',
          'surrey.museum',
          'svizzera.museum',
          'sweden.museum',
          'sydney.museum',
          'tank.museum',
          'tcm.museum',
          'technology.museum',
          'telekommunikation.museum',
          'television.museum',
          'texas.museum',
          'textile.museum',
          'theater.museum',
          'time.museum',
          'timekeeping.museum',
          'topology.museum',
          'torino.museum',
          'touch.museum',
          'town.museum',
          'transport.museum',
          'tree.museum',
          'trolley.museum',
          'trust.museum',
          'trustee.museum',
          'uhren.museum',
          'ulm.museum',
          'undersea.museum',
          'university.museum',
          'usa.museum',
          'usantiques.museum',
          'usarts.museum',
          'uscountryestate.museum',
          'usculture.museum',
          'usdecorativearts.museum',
          'usgarden.museum',
          'ushistory.museum',
          'ushuaia.museum',
          'uslivinghistory.museum',
          'utah.museum',
          'uvic.museum',
          'valley.museum',
          'vantaa.museum',
          'versailles.museum',
          'viking.museum',
          'village.museum',
          'virginia.museum',
          'virtual.museum',
          'virtuel.museum',
          'vlaanderen.museum',
          'volkenkunde.museum',
          'wales.museum',
          'wallonie.museum',
          'war.museum',
          'washingtondc.museum',
          'watchandclock.museum',
          'watch-and-clock.museum',
          'western.museum',
          'westfalen.museum',
          'whaling.museum',
          'wildlife.museum',
          'williamsburg.museum',
          'windmill.museum',
          'workshop.museum',
          'york.museum',
          'yorkshire.museum',
          'yosemite.museum',
          'youth.museum',
          'zoological.museum',
          'zoology.museum',
          '\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD.museum',
          '\u0438\u043A\u043E\u043C.museum',
          'mv',
          'aero.mv',
          'biz.mv',
          'com.mv',
          'coop.mv',
          'edu.mv',
          'gov.mv',
          'info.mv',
          'int.mv',
          'mil.mv',
          'museum.mv',
          'name.mv',
          'net.mv',
          'org.mv',
          'pro.mv',
          'mw',
          'ac.mw',
          'biz.mw',
          'co.mw',
          'com.mw',
          'coop.mw',
          'edu.mw',
          'gov.mw',
          'int.mw',
          'museum.mw',
          'net.mw',
          'org.mw',
          'mx',
          'com.mx',
          'org.mx',
          'gob.mx',
          'edu.mx',
          'net.mx',
          'my',
          'biz.my',
          'com.my',
          'edu.my',
          'gov.my',
          'mil.my',
          'name.my',
          'net.my',
          'org.my',
          'mz',
          'ac.mz',
          'adv.mz',
          'co.mz',
          'edu.mz',
          'gov.mz',
          'mil.mz',
          'net.mz',
          'org.mz',
          'na',
          'info.na',
          'pro.na',
          'name.na',
          'school.na',
          'or.na',
          'dr.na',
          'us.na',
          'mx.na',
          'ca.na',
          'in.na',
          'cc.na',
          'tv.na',
          'ws.na',
          'mobi.na',
          'co.na',
          'com.na',
          'org.na',
          'name',
          'nc',
          'asso.nc',
          'nom.nc',
          'ne',
          'net',
          'nf',
          'com.nf',
          'net.nf',
          'per.nf',
          'rec.nf',
          'web.nf',
          'arts.nf',
          'firm.nf',
          'info.nf',
          'other.nf',
          'store.nf',
          'ng',
          'com.ng',
          'edu.ng',
          'gov.ng',
          'i.ng',
          'mil.ng',
          'mobi.ng',
          'name.ng',
          'net.ng',
          'org.ng',
          'sch.ng',
          'ni',
          'ac.ni',
          'biz.ni',
          'co.ni',
          'com.ni',
          'edu.ni',
          'gob.ni',
          'in.ni',
          'info.ni',
          'int.ni',
          'mil.ni',
          'net.ni',
          'nom.ni',
          'org.ni',
          'web.ni',
          'nl',
          'no',
          'fhs.no',
          'vgs.no',
          'fylkesbibl.no',
          'folkebibl.no',
          'museum.no',
          'idrett.no',
          'priv.no',
          'mil.no',
          'stat.no',
          'dep.no',
          'kommune.no',
          'herad.no',
          'aa.no',
          'ah.no',
          'bu.no',
          'fm.no',
          'hl.no',
          'hm.no',
          'jan-mayen.no',
          'mr.no',
          'nl.no',
          'nt.no',
          'of.no',
          'ol.no',
          'oslo.no',
          'rl.no',
          'sf.no',
          'st.no',
          'svalbard.no',
          'tm.no',
          'tr.no',
          'va.no',
          'vf.no',
          'gs.aa.no',
          'gs.ah.no',
          'gs.bu.no',
          'gs.fm.no',
          'gs.hl.no',
          'gs.hm.no',
          'gs.jan-mayen.no',
          'gs.mr.no',
          'gs.nl.no',
          'gs.nt.no',
          'gs.of.no',
          'gs.ol.no',
          'gs.oslo.no',
          'gs.rl.no',
          'gs.sf.no',
          'gs.st.no',
          'gs.svalbard.no',
          'gs.tm.no',
          'gs.tr.no',
          'gs.va.no',
          'gs.vf.no',
          'akrehamn.no',
          '\xE5krehamn.no',
          'algard.no',
          '\xE5lg\xE5rd.no',
          'arna.no',
          'brumunddal.no',
          'bryne.no',
          'bronnoysund.no',
          'br\xF8nn\xF8ysund.no',
          'drobak.no',
          'dr\xF8bak.no',
          'egersund.no',
          'fetsund.no',
          'floro.no',
          'flor\xF8.no',
          'fredrikstad.no',
          'hokksund.no',
          'honefoss.no',
          'h\xF8nefoss.no',
          'jessheim.no',
          'jorpeland.no',
          'j\xF8rpeland.no',
          'kirkenes.no',
          'kopervik.no',
          'krokstadelva.no',
          'langevag.no',
          'langev\xE5g.no',
          'leirvik.no',
          'mjondalen.no',
          'mj\xF8ndalen.no',
          'mo-i-rana.no',
          'mosjoen.no',
          'mosj\xF8en.no',
          'nesoddtangen.no',
          'orkanger.no',
          'osoyro.no',
          'os\xF8yro.no',
          'raholt.no',
          'r\xE5holt.no',
          'sandnessjoen.no',
          'sandnessj\xF8en.no',
          'skedsmokorset.no',
          'slattum.no',
          'spjelkavik.no',
          'stathelle.no',
          'stavern.no',
          'stjordalshalsen.no',
          'stj\xF8rdalshalsen.no',
          'tananger.no',
          'tranby.no',
          'vossevangen.no',
          'afjord.no',
          '\xE5fjord.no',
          'agdenes.no',
          'al.no',
          '\xE5l.no',
          'alesund.no',
          '\xE5lesund.no',
          'alstahaug.no',
          'alta.no',
          '\xE1lt\xE1.no',
          'alaheadju.no',
          '\xE1laheadju.no',
          'alvdal.no',
          'amli.no',
          '\xE5mli.no',
          'amot.no',
          '\xE5mot.no',
          'andebu.no',
          'andoy.no',
          'and\xF8y.no',
          'andasuolo.no',
          'ardal.no',
          '\xE5rdal.no',
          'aremark.no',
          'arendal.no',
          '\xE5s.no',
          'aseral.no',
          '\xE5seral.no',
          'asker.no',
          'askim.no',
          'askvoll.no',
          'askoy.no',
          'ask\xF8y.no',
          'asnes.no',
          '\xE5snes.no',
          'audnedaln.no',
          'aukra.no',
          'aure.no',
          'aurland.no',
          'aurskog-holand.no',
          'aurskog-h\xF8land.no',
          'austevoll.no',
          'austrheim.no',
          'averoy.no',
          'aver\xF8y.no',
          'balestrand.no',
          'ballangen.no',
          'balat.no',
          'b\xE1l\xE1t.no',
          'balsfjord.no',
          'bahccavuotna.no',
          'b\xE1hccavuotna.no',
          'bamble.no',
          'bardu.no',
          'beardu.no',
          'beiarn.no',
          'bajddar.no',
          'b\xE1jddar.no',
          'baidar.no',
          'b\xE1id\xE1r.no',
          'berg.no',
          'bergen.no',
          'berlevag.no',
          'berlev\xE5g.no',
          'bearalvahki.no',
          'bearalv\xE1hki.no',
          'bindal.no',
          'birkenes.no',
          'bjarkoy.no',
          'bjark\xF8y.no',
          'bjerkreim.no',
          'bjugn.no',
          'bodo.no',
          'bod\xF8.no',
          'badaddja.no',
          'b\xE5d\xE5ddj\xE5.no',
          'budejju.no',
          'bokn.no',
          'bremanger.no',
          'bronnoy.no',
          'br\xF8nn\xF8y.no',
          'bygland.no',
          'bykle.no',
          'barum.no',
          'b\xE6rum.no',
          'bo.telemark.no',
          'b\xF8.telemark.no',
          'bo.nordland.no',
          'b\xF8.nordland.no',
          'bievat.no',
          'biev\xE1t.no',
          'bomlo.no',
          'b\xF8mlo.no',
          'batsfjord.no',
          'b\xE5tsfjord.no',
          'bahcavuotna.no',
          'b\xE1hcavuotna.no',
          'dovre.no',
          'drammen.no',
          'drangedal.no',
          'dyroy.no',
          'dyr\xF8y.no',
          'donna.no',
          'd\xF8nna.no',
          'eid.no',
          'eidfjord.no',
          'eidsberg.no',
          'eidskog.no',
          'eidsvoll.no',
          'eigersund.no',
          'elverum.no',
          'enebakk.no',
          'engerdal.no',
          'etne.no',
          'etnedal.no',
          'evenes.no',
          'evenassi.no',
          'even\xE1\u0161\u0161i.no',
          'evje-og-hornnes.no',
          'farsund.no',
          'fauske.no',
          'fuossko.no',
          'fuoisku.no',
          'fedje.no',
          'fet.no',
          'finnoy.no',
          'finn\xF8y.no',
          'fitjar.no',
          'fjaler.no',
          'fjell.no',
          'flakstad.no',
          'flatanger.no',
          'flekkefjord.no',
          'flesberg.no',
          'flora.no',
          'fla.no',
          'fl\xE5.no',
          'folldal.no',
          'forsand.no',
          'fosnes.no',
          'frei.no',
          'frogn.no',
          'froland.no',
          'frosta.no',
          'frana.no',
          'fr\xE6na.no',
          'froya.no',
          'fr\xF8ya.no',
          'fusa.no',
          'fyresdal.no',
          'forde.no',
          'f\xF8rde.no',
          'gamvik.no',
          'gangaviika.no',
          'g\xE1\u014Bgaviika.no',
          'gaular.no',
          'gausdal.no',
          'gildeskal.no',
          'gildesk\xE5l.no',
          'giske.no',
          'gjemnes.no',
          'gjerdrum.no',
          'gjerstad.no',
          'gjesdal.no',
          'gjovik.no',
          'gj\xF8vik.no',
          'gloppen.no',
          'gol.no',
          'gran.no',
          'grane.no',
          'granvin.no',
          'gratangen.no',
          'grimstad.no',
          'grong.no',
          'kraanghke.no',
          'kr\xE5anghke.no',
          'grue.no',
          'gulen.no',
          'hadsel.no',
          'halden.no',
          'halsa.no',
          'hamar.no',
          'hamaroy.no',
          'habmer.no',
          'h\xE1bmer.no',
          'hapmir.no',
          'h\xE1pmir.no',
          'hammerfest.no',
          'hammarfeasta.no',
          'h\xE1mm\xE1rfeasta.no',
          'haram.no',
          'hareid.no',
          'harstad.no',
          'hasvik.no',
          'aknoluokta.no',
          '\xE1k\u014Boluokta.no',
          'hattfjelldal.no',
          'aarborte.no',
          'haugesund.no',
          'hemne.no',
          'hemnes.no',
          'hemsedal.no',
          'heroy.more-og-romsdal.no',
          'her\xF8y.m\xF8re-og-romsdal.no',
          'heroy.nordland.no',
          'her\xF8y.nordland.no',
          'hitra.no',
          'hjartdal.no',
          'hjelmeland.no',
          'hobol.no',
          'hob\xF8l.no',
          'hof.no',
          'hol.no',
          'hole.no',
          'holmestrand.no',
          'holtalen.no',
          'holt\xE5len.no',
          'hornindal.no',
          'horten.no',
          'hurdal.no',
          'hurum.no',
          'hvaler.no',
          'hyllestad.no',
          'hagebostad.no',
          'h\xE6gebostad.no',
          'hoyanger.no',
          'h\xF8yanger.no',
          'hoylandet.no',
          'h\xF8ylandet.no',
          'ha.no',
          'h\xE5.no',
          'ibestad.no',
          'inderoy.no',
          'inder\xF8y.no',
          'iveland.no',
          'jevnaker.no',
          'jondal.no',
          'jolster.no',
          'j\xF8lster.no',
          'karasjok.no',
          'karasjohka.no',
          'k\xE1r\xE1\u0161johka.no',
          'karlsoy.no',
          'galsa.no',
          'g\xE1ls\xE1.no',
          'karmoy.no',
          'karm\xF8y.no',
          'kautokeino.no',
          'guovdageaidnu.no',
          'klepp.no',
          'klabu.no',
          'kl\xE6bu.no',
          'kongsberg.no',
          'kongsvinger.no',
          'kragero.no',
          'krager\xF8.no',
          'kristiansand.no',
          'kristiansund.no',
          'krodsherad.no',
          'kr\xF8dsherad.no',
          'kvalsund.no',
          'rahkkeravju.no',
          'r\xE1hkker\xE1vju.no',
          'kvam.no',
          'kvinesdal.no',
          'kvinnherad.no',
          'kviteseid.no',
          'kvitsoy.no',
          'kvits\xF8y.no',
          'kvafjord.no',
          'kv\xE6fjord.no',
          'giehtavuoatna.no',
          'kvanangen.no',
          'kv\xE6nangen.no',
          'navuotna.no',
          'n\xE1vuotna.no',
          'kafjord.no',
          'k\xE5fjord.no',
          'gaivuotna.no',
          'g\xE1ivuotna.no',
          'larvik.no',
          'lavangen.no',
          'lavagis.no',
          'loabat.no',
          'loab\xE1t.no',
          'lebesby.no',
          'davvesiida.no',
          'leikanger.no',
          'leirfjord.no',
          'leka.no',
          'leksvik.no',
          'lenvik.no',
          'leangaviika.no',
          'lea\u014Bgaviika.no',
          'lesja.no',
          'levanger.no',
          'lier.no',
          'lierne.no',
          'lillehammer.no',
          'lillesand.no',
          'lindesnes.no',
          'lindas.no',
          'lind\xE5s.no',
          'lom.no',
          'loppa.no',
          'lahppi.no',
          'l\xE1hppi.no',
          'lund.no',
          'lunner.no',
          'luroy.no',
          'lur\xF8y.no',
          'luster.no',
          'lyngdal.no',
          'lyngen.no',
          'ivgu.no',
          'lardal.no',
          'lerdal.no',
          'l\xE6rdal.no',
          'lodingen.no',
          'l\xF8dingen.no',
          'lorenskog.no',
          'l\xF8renskog.no',
          'loten.no',
          'l\xF8ten.no',
          'malvik.no',
          'masoy.no',
          'm\xE5s\xF8y.no',
          'muosat.no',
          'muos\xE1t.no',
          'mandal.no',
          'marker.no',
          'marnardal.no',
          'masfjorden.no',
          'meland.no',
          'meldal.no',
          'melhus.no',
          'meloy.no',
          'mel\xF8y.no',
          'meraker.no',
          'mer\xE5ker.no',
          'moareke.no',
          'mo\xE5reke.no',
          'midsund.no',
          'midtre-gauldal.no',
          'modalen.no',
          'modum.no',
          'molde.no',
          'moskenes.no',
          'moss.no',
          'mosvik.no',
          'malselv.no',
          'm\xE5lselv.no',
          'malatvuopmi.no',
          'm\xE1latvuopmi.no',
          'namdalseid.no',
          'aejrie.no',
          'namsos.no',
          'namsskogan.no',
          'naamesjevuemie.no',
          'n\xE5\xE5mesjevuemie.no',
          'laakesvuemie.no',
          'nannestad.no',
          'narvik.no',
          'narviika.no',
          'naustdal.no',
          'nedre-eiker.no',
          'nes.akershus.no',
          'nes.buskerud.no',
          'nesna.no',
          'nesodden.no',
          'nesseby.no',
          'unjarga.no',
          'unj\xE1rga.no',
          'nesset.no',
          'nissedal.no',
          'nittedal.no',
          'nord-aurdal.no',
          'nord-fron.no',
          'nord-odal.no',
          'norddal.no',
          'nordkapp.no',
          'davvenjarga.no',
          'davvenj\xE1rga.no',
          'nordre-land.no',
          'nordreisa.no',
          'raisa.no',
          'r\xE1isa.no',
          'nore-og-uvdal.no',
          'notodden.no',
          'naroy.no',
          'n\xE6r\xF8y.no',
          'notteroy.no',
          'n\xF8tter\xF8y.no',
          'odda.no',
          'oksnes.no',
          '\xF8ksnes.no',
          'oppdal.no',
          'oppegard.no',
          'oppeg\xE5rd.no',
          'orkdal.no',
          'orland.no',
          '\xF8rland.no',
          'orskog.no',
          '\xF8rskog.no',
          'orsta.no',
          '\xF8rsta.no',
          'os.hedmark.no',
          'os.hordaland.no',
          'osen.no',
          'osteroy.no',
          'oster\xF8y.no',
          'ostre-toten.no',
          '\xF8stre-toten.no',
          'overhalla.no',
          'ovre-eiker.no',
          '\xF8vre-eiker.no',
          'oyer.no',
          '\xF8yer.no',
          'oygarden.no',
          '\xF8ygarden.no',
          'oystre-slidre.no',
          '\xF8ystre-slidre.no',
          'porsanger.no',
          'porsangu.no',
          'pors\xE1\u014Bgu.no',
          'porsgrunn.no',
          'radoy.no',
          'rad\xF8y.no',
          'rakkestad.no',
          'rana.no',
          'ruovat.no',
          'randaberg.no',
          'rauma.no',
          'rendalen.no',
          'rennebu.no',
          'rennesoy.no',
          'rennes\xF8y.no',
          'rindal.no',
          'ringebu.no',
          'ringerike.no',
          'ringsaker.no',
          'rissa.no',
          'risor.no',
          'ris\xF8r.no',
          'roan.no',
          'rollag.no',
          'rygge.no',
          'ralingen.no',
          'r\xE6lingen.no',
          'rodoy.no',
          'r\xF8d\xF8y.no',
          'romskog.no',
          'r\xF8mskog.no',
          'roros.no',
          'r\xF8ros.no',
          'rost.no',
          'r\xF8st.no',
          'royken.no',
          'r\xF8yken.no',
          'royrvik.no',
          'r\xF8yrvik.no',
          'rade.no',
          'r\xE5de.no',
          'salangen.no',
          'siellak.no',
          'saltdal.no',
          'salat.no',
          's\xE1l\xE1t.no',
          's\xE1lat.no',
          'samnanger.no',
          'sande.more-og-romsdal.no',
          'sande.m\xF8re-og-romsdal.no',
          'sande.vestfold.no',
          'sandefjord.no',
          'sandnes.no',
          'sandoy.no',
          'sand\xF8y.no',
          'sarpsborg.no',
          'sauda.no',
          'sauherad.no',
          'sel.no',
          'selbu.no',
          'selje.no',
          'seljord.no',
          'sigdal.no',
          'siljan.no',
          'sirdal.no',
          'skaun.no',
          'skedsmo.no',
          'ski.no',
          'skien.no',
          'skiptvet.no',
          'skjervoy.no',
          'skjerv\xF8y.no',
          'skierva.no',
          'skierv\xE1.no',
          'skjak.no',
          'skj\xE5k.no',
          'skodje.no',
          'skanland.no',
          'sk\xE5nland.no',
          'skanit.no',
          'sk\xE1nit.no',
          'smola.no',
          'sm\xF8la.no',
          'snillfjord.no',
          'snasa.no',
          'sn\xE5sa.no',
          'snoasa.no',
          'snaase.no',
          'sn\xE5ase.no',
          'sogndal.no',
          'sokndal.no',
          'sola.no',
          'solund.no',
          'songdalen.no',
          'sortland.no',
          'spydeberg.no',
          'stange.no',
          'stavanger.no',
          'steigen.no',
          'steinkjer.no',
          'stjordal.no',
          'stj\xF8rdal.no',
          'stokke.no',
          'stor-elvdal.no',
          'stord.no',
          'stordal.no',
          'storfjord.no',
          'omasvuotna.no',
          'strand.no',
          'stranda.no',
          'stryn.no',
          'sula.no',
          'suldal.no',
          'sund.no',
          'sunndal.no',
          'surnadal.no',
          'sveio.no',
          'svelvik.no',
          'sykkylven.no',
          'sogne.no',
          's\xF8gne.no',
          'somna.no',
          's\xF8mna.no',
          'sondre-land.no',
          's\xF8ndre-land.no',
          'sor-aurdal.no',
          's\xF8r-aurdal.no',
          'sor-fron.no',
          's\xF8r-fron.no',
          'sor-odal.no',
          's\xF8r-odal.no',
          'sor-varanger.no',
          's\xF8r-varanger.no',
          'matta-varjjat.no',
          'm\xE1tta-v\xE1rjjat.no',
          'sorfold.no',
          's\xF8rfold.no',
          'sorreisa.no',
          's\xF8rreisa.no',
          'sorum.no',
          's\xF8rum.no',
          'tana.no',
          'deatnu.no',
          'time.no',
          'tingvoll.no',
          'tinn.no',
          'tjeldsund.no',
          'dielddanuorri.no',
          'tjome.no',
          'tj\xF8me.no',
          'tokke.no',
          'tolga.no',
          'torsken.no',
          'tranoy.no',
          'tran\xF8y.no',
          'tromso.no',
          'troms\xF8.no',
          'tromsa.no',
          'romsa.no',
          'trondheim.no',
          'troandin.no',
          'trysil.no',
          'trana.no',
          'tr\xE6na.no',
          'trogstad.no',
          'tr\xF8gstad.no',
          'tvedestrand.no',
          'tydal.no',
          'tynset.no',
          'tysfjord.no',
          'divtasvuodna.no',
          'divttasvuotna.no',
          'tysnes.no',
          'tysvar.no',
          'tysv\xE6r.no',
          'tonsberg.no',
          't\xF8nsberg.no',
          'ullensaker.no',
          'ullensvang.no',
          'ulvik.no',
          'utsira.no',
          'vadso.no',
          'vads\xF8.no',
          'cahcesuolo.no',
          '\u010D\xE1hcesuolo.no',
          'vaksdal.no',
          'valle.no',
          'vang.no',
          'vanylven.no',
          'vardo.no',
          'vard\xF8.no',
          'varggat.no',
          'v\xE1rgg\xE1t.no',
          'vefsn.no',
          'vaapste.no',
          'vega.no',
          'vegarshei.no',
          'veg\xE5rshei.no',
          'vennesla.no',
          'verdal.no',
          'verran.no',
          'vestby.no',
          'vestnes.no',
          'vestre-slidre.no',
          'vestre-toten.no',
          'vestvagoy.no',
          'vestv\xE5g\xF8y.no',
          'vevelstad.no',
          'vik.no',
          'vikna.no',
          'vindafjord.no',
          'volda.no',
          'voss.no',
          'varoy.no',
          'v\xE6r\xF8y.no',
          'vagan.no',
          'v\xE5gan.no',
          'voagat.no',
          'vagsoy.no',
          'v\xE5gs\xF8y.no',
          'vaga.no',
          'v\xE5g\xE5.no',
          'valer.ostfold.no',
          'v\xE5ler.\xF8stfold.no',
          'valer.hedmark.no',
          'v\xE5ler.hedmark.no',
          '*.np',
          'nr',
          'biz.nr',
          'info.nr',
          'gov.nr',
          'edu.nr',
          'org.nr',
          'net.nr',
          'com.nr',
          'nu',
          'nz',
          'ac.nz',
          'co.nz',
          'cri.nz',
          'geek.nz',
          'gen.nz',
          'govt.nz',
          'health.nz',
          'iwi.nz',
          'kiwi.nz',
          'maori.nz',
          'mil.nz',
          'm\u0101ori.nz',
          'net.nz',
          'org.nz',
          'parliament.nz',
          'school.nz',
          'om',
          'co.om',
          'com.om',
          'edu.om',
          'gov.om',
          'med.om',
          'museum.om',
          'net.om',
          'org.om',
          'pro.om',
          'onion',
          'org',
          'pa',
          'ac.pa',
          'gob.pa',
          'com.pa',
          'org.pa',
          'sld.pa',
          'edu.pa',
          'net.pa',
          'ing.pa',
          'abo.pa',
          'med.pa',
          'nom.pa',
          'pe',
          'edu.pe',
          'gob.pe',
          'nom.pe',
          'mil.pe',
          'org.pe',
          'com.pe',
          'net.pe',
          'pf',
          'com.pf',
          'org.pf',
          'edu.pf',
          '*.pg',
          'ph',
          'com.ph',
          'net.ph',
          'org.ph',
          'gov.ph',
          'edu.ph',
          'ngo.ph',
          'mil.ph',
          'i.ph',
          'pk',
          'com.pk',
          'net.pk',
          'edu.pk',
          'org.pk',
          'fam.pk',
          'biz.pk',
          'web.pk',
          'gov.pk',
          'gob.pk',
          'gok.pk',
          'gon.pk',
          'gop.pk',
          'gos.pk',
          'info.pk',
          'pl',
          'com.pl',
          'net.pl',
          'org.pl',
          'aid.pl',
          'agro.pl',
          'atm.pl',
          'auto.pl',
          'biz.pl',
          'edu.pl',
          'gmina.pl',
          'gsm.pl',
          'info.pl',
          'mail.pl',
          'miasta.pl',
          'media.pl',
          'mil.pl',
          'nieruchomosci.pl',
          'nom.pl',
          'pc.pl',
          'powiat.pl',
          'priv.pl',
          'realestate.pl',
          'rel.pl',
          'sex.pl',
          'shop.pl',
          'sklep.pl',
          'sos.pl',
          'szkola.pl',
          'targi.pl',
          'tm.pl',
          'tourism.pl',
          'travel.pl',
          'turystyka.pl',
          'gov.pl',
          'ap.gov.pl',
          'ic.gov.pl',
          'is.gov.pl',
          'us.gov.pl',
          'kmpsp.gov.pl',
          'kppsp.gov.pl',
          'kwpsp.gov.pl',
          'psp.gov.pl',
          'wskr.gov.pl',
          'kwp.gov.pl',
          'mw.gov.pl',
          'ug.gov.pl',
          'um.gov.pl',
          'umig.gov.pl',
          'ugim.gov.pl',
          'upow.gov.pl',
          'uw.gov.pl',
          'starostwo.gov.pl',
          'pa.gov.pl',
          'po.gov.pl',
          'psse.gov.pl',
          'pup.gov.pl',
          'rzgw.gov.pl',
          'sa.gov.pl',
          'so.gov.pl',
          'sr.gov.pl',
          'wsa.gov.pl',
          'sko.gov.pl',
          'uzs.gov.pl',
          'wiih.gov.pl',
          'winb.gov.pl',
          'pinb.gov.pl',
          'wios.gov.pl',
          'witd.gov.pl',
          'wzmiuw.gov.pl',
          'piw.gov.pl',
          'wiw.gov.pl',
          'griw.gov.pl',
          'wif.gov.pl',
          'oum.gov.pl',
          'sdn.gov.pl',
          'zp.gov.pl',
          'uppo.gov.pl',
          'mup.gov.pl',
          'wuoz.gov.pl',
          'konsulat.gov.pl',
          'oirm.gov.pl',
          'augustow.pl',
          'babia-gora.pl',
          'bedzin.pl',
          'beskidy.pl',
          'bialowieza.pl',
          'bialystok.pl',
          'bielawa.pl',
          'bieszczady.pl',
          'boleslawiec.pl',
          'bydgoszcz.pl',
          'bytom.pl',
          'cieszyn.pl',
          'czeladz.pl',
          'czest.pl',
          'dlugoleka.pl',
          'elblag.pl',
          'elk.pl',
          'glogow.pl',
          'gniezno.pl',
          'gorlice.pl',
          'grajewo.pl',
          'ilawa.pl',
          'jaworzno.pl',
          'jelenia-gora.pl',
          'jgora.pl',
          'kalisz.pl',
          'kazimierz-dolny.pl',
          'karpacz.pl',
          'kartuzy.pl',
          'kaszuby.pl',
          'katowice.pl',
          'kepno.pl',
          'ketrzyn.pl',
          'klodzko.pl',
          'kobierzyce.pl',
          'kolobrzeg.pl',
          'konin.pl',
          'konskowola.pl',
          'kutno.pl',
          'lapy.pl',
          'lebork.pl',
          'legnica.pl',
          'lezajsk.pl',
          'limanowa.pl',
          'lomza.pl',
          'lowicz.pl',
          'lubin.pl',
          'lukow.pl',
          'malbork.pl',
          'malopolska.pl',
          'mazowsze.pl',
          'mazury.pl',
          'mielec.pl',
          'mielno.pl',
          'mragowo.pl',
          'naklo.pl',
          'nowaruda.pl',
          'nysa.pl',
          'olawa.pl',
          'olecko.pl',
          'olkusz.pl',
          'olsztyn.pl',
          'opoczno.pl',
          'opole.pl',
          'ostroda.pl',
          'ostroleka.pl',
          'ostrowiec.pl',
          'ostrowwlkp.pl',
          'pila.pl',
          'pisz.pl',
          'podhale.pl',
          'podlasie.pl',
          'polkowice.pl',
          'pomorze.pl',
          'pomorskie.pl',
          'prochowice.pl',
          'pruszkow.pl',
          'przeworsk.pl',
          'pulawy.pl',
          'radom.pl',
          'rawa-maz.pl',
          'rybnik.pl',
          'rzeszow.pl',
          'sanok.pl',
          'sejny.pl',
          'slask.pl',
          'slupsk.pl',
          'sosnowiec.pl',
          'stalowa-wola.pl',
          'skoczow.pl',
          'starachowice.pl',
          'stargard.pl',
          'suwalki.pl',
          'swidnica.pl',
          'swiebodzin.pl',
          'swinoujscie.pl',
          'szczecin.pl',
          'szczytno.pl',
          'tarnobrzeg.pl',
          'tgory.pl',
          'turek.pl',
          'tychy.pl',
          'ustka.pl',
          'walbrzych.pl',
          'warmia.pl',
          'warszawa.pl',
          'waw.pl',
          'wegrow.pl',
          'wielun.pl',
          'wlocl.pl',
          'wloclawek.pl',
          'wodzislaw.pl',
          'wolomin.pl',
          'wroclaw.pl',
          'zachpomor.pl',
          'zagan.pl',
          'zarow.pl',
          'zgora.pl',
          'zgorzelec.pl',
          'pm',
          'pn',
          'gov.pn',
          'co.pn',
          'org.pn',
          'edu.pn',
          'net.pn',
          'post',
          'pr',
          'com.pr',
          'net.pr',
          'org.pr',
          'gov.pr',
          'edu.pr',
          'isla.pr',
          'pro.pr',
          'biz.pr',
          'info.pr',
          'name.pr',
          'est.pr',
          'prof.pr',
          'ac.pr',
          'pro',
          'aaa.pro',
          'aca.pro',
          'acct.pro',
          'avocat.pro',
          'bar.pro',
          'cpa.pro',
          'eng.pro',
          'jur.pro',
          'law.pro',
          'med.pro',
          'recht.pro',
          'ps',
          'edu.ps',
          'gov.ps',
          'sec.ps',
          'plo.ps',
          'com.ps',
          'org.ps',
          'net.ps',
          'pt',
          'net.pt',
          'gov.pt',
          'org.pt',
          'edu.pt',
          'int.pt',
          'publ.pt',
          'com.pt',
          'nome.pt',
          'pw',
          'co.pw',
          'ne.pw',
          'or.pw',
          'ed.pw',
          'go.pw',
          'belau.pw',
          'py',
          'com.py',
          'coop.py',
          'edu.py',
          'gov.py',
          'mil.py',
          'net.py',
          'org.py',
          'qa',
          'com.qa',
          'edu.qa',
          'gov.qa',
          'mil.qa',
          'name.qa',
          'net.qa',
          'org.qa',
          'sch.qa',
          're',
          'asso.re',
          'com.re',
          'nom.re',
          'ro',
          'arts.ro',
          'com.ro',
          'firm.ro',
          'info.ro',
          'nom.ro',
          'nt.ro',
          'org.ro',
          'rec.ro',
          'store.ro',
          'tm.ro',
          'www.ro',
          'rs',
          'ac.rs',
          'co.rs',
          'edu.rs',
          'gov.rs',
          'in.rs',
          'org.rs',
          'ru',
          'rw',
          'ac.rw',
          'co.rw',
          'coop.rw',
          'gov.rw',
          'mil.rw',
          'net.rw',
          'org.rw',
          'sa',
          'com.sa',
          'net.sa',
          'org.sa',
          'gov.sa',
          'med.sa',
          'pub.sa',
          'edu.sa',
          'sch.sa',
          'sb',
          'com.sb',
          'edu.sb',
          'gov.sb',
          'net.sb',
          'org.sb',
          'sc',
          'com.sc',
          'gov.sc',
          'net.sc',
          'org.sc',
          'edu.sc',
          'sd',
          'com.sd',
          'net.sd',
          'org.sd',
          'edu.sd',
          'med.sd',
          'tv.sd',
          'gov.sd',
          'info.sd',
          'se',
          'a.se',
          'ac.se',
          'b.se',
          'bd.se',
          'brand.se',
          'c.se',
          'd.se',
          'e.se',
          'f.se',
          'fh.se',
          'fhsk.se',
          'fhv.se',
          'g.se',
          'h.se',
          'i.se',
          'k.se',
          'komforb.se',
          'kommunalforbund.se',
          'komvux.se',
          'l.se',
          'lanbib.se',
          'm.se',
          'n.se',
          'naturbruksgymn.se',
          'o.se',
          'org.se',
          'p.se',
          'parti.se',
          'pp.se',
          'press.se',
          'r.se',
          's.se',
          't.se',
          'tm.se',
          'u.se',
          'w.se',
          'x.se',
          'y.se',
          'z.se',
          'sg',
          'com.sg',
          'net.sg',
          'org.sg',
          'gov.sg',
          'edu.sg',
          'per.sg',
          'sh',
          'com.sh',
          'net.sh',
          'gov.sh',
          'org.sh',
          'mil.sh',
          'si',
          'sj',
          'sk',
          'sl',
          'com.sl',
          'net.sl',
          'edu.sl',
          'gov.sl',
          'org.sl',
          'sm',
          'sn',
          'art.sn',
          'com.sn',
          'edu.sn',
          'gouv.sn',
          'org.sn',
          'perso.sn',
          'univ.sn',
          'so',
          'com.so',
          'edu.so',
          'gov.so',
          'me.so',
          'net.so',
          'org.so',
          'sr',
          'ss',
          'biz.ss',
          'com.ss',
          'edu.ss',
          'gov.ss',
          'me.ss',
          'net.ss',
          'org.ss',
          'sch.ss',
          'st',
          'co.st',
          'com.st',
          'consulado.st',
          'edu.st',
          'embaixada.st',
          'mil.st',
          'net.st',
          'org.st',
          'principe.st',
          'saotome.st',
          'store.st',
          'su',
          'sv',
          'com.sv',
          'edu.sv',
          'gob.sv',
          'org.sv',
          'red.sv',
          'sx',
          'gov.sx',
          'sy',
          'edu.sy',
          'gov.sy',
          'net.sy',
          'mil.sy',
          'com.sy',
          'org.sy',
          'sz',
          'co.sz',
          'ac.sz',
          'org.sz',
          'tc',
          'td',
          'tel',
          'tf',
          'tg',
          'th',
          'ac.th',
          'co.th',
          'go.th',
          'in.th',
          'mi.th',
          'net.th',
          'or.th',
          'tj',
          'ac.tj',
          'biz.tj',
          'co.tj',
          'com.tj',
          'edu.tj',
          'go.tj',
          'gov.tj',
          'int.tj',
          'mil.tj',
          'name.tj',
          'net.tj',
          'nic.tj',
          'org.tj',
          'test.tj',
          'web.tj',
          'tk',
          'tl',
          'gov.tl',
          'tm',
          'com.tm',
          'co.tm',
          'org.tm',
          'net.tm',
          'nom.tm',
          'gov.tm',
          'mil.tm',
          'edu.tm',
          'tn',
          'com.tn',
          'ens.tn',
          'fin.tn',
          'gov.tn',
          'ind.tn',
          'info.tn',
          'intl.tn',
          'mincom.tn',
          'nat.tn',
          'net.tn',
          'org.tn',
          'perso.tn',
          'tourism.tn',
          'to',
          'com.to',
          'gov.to',
          'net.to',
          'org.to',
          'edu.to',
          'mil.to',
          'tr',
          'av.tr',
          'bbs.tr',
          'bel.tr',
          'biz.tr',
          'com.tr',
          'dr.tr',
          'edu.tr',
          'gen.tr',
          'gov.tr',
          'info.tr',
          'mil.tr',
          'k12.tr',
          'kep.tr',
          'name.tr',
          'net.tr',
          'org.tr',
          'pol.tr',
          'tel.tr',
          'tsk.tr',
          'tv.tr',
          'web.tr',
          'nc.tr',
          'gov.nc.tr',
          'tt',
          'co.tt',
          'com.tt',
          'org.tt',
          'net.tt',
          'biz.tt',
          'info.tt',
          'pro.tt',
          'int.tt',
          'coop.tt',
          'jobs.tt',
          'mobi.tt',
          'travel.tt',
          'museum.tt',
          'aero.tt',
          'name.tt',
          'gov.tt',
          'edu.tt',
          'tv',
          'tw',
          'edu.tw',
          'gov.tw',
          'mil.tw',
          'com.tw',
          'net.tw',
          'org.tw',
          'idv.tw',
          'game.tw',
          'ebiz.tw',
          'club.tw',
          '\u7DB2\u8DEF.tw',
          '\u7D44\u7E54.tw',
          '\u5546\u696D.tw',
          'tz',
          'ac.tz',
          'co.tz',
          'go.tz',
          'hotel.tz',
          'info.tz',
          'me.tz',
          'mil.tz',
          'mobi.tz',
          'ne.tz',
          'or.tz',
          'sc.tz',
          'tv.tz',
          'ua',
          'com.ua',
          'edu.ua',
          'gov.ua',
          'in.ua',
          'net.ua',
          'org.ua',
          'cherkassy.ua',
          'cherkasy.ua',
          'chernigov.ua',
          'chernihiv.ua',
          'chernivtsi.ua',
          'chernovtsy.ua',
          'ck.ua',
          'cn.ua',
          'cr.ua',
          'crimea.ua',
          'cv.ua',
          'dn.ua',
          'dnepropetrovsk.ua',
          'dnipropetrovsk.ua',
          'donetsk.ua',
          'dp.ua',
          'if.ua',
          'ivano-frankivsk.ua',
          'kh.ua',
          'kharkiv.ua',
          'kharkov.ua',
          'kherson.ua',
          'khmelnitskiy.ua',
          'khmelnytskyi.ua',
          'kiev.ua',
          'kirovograd.ua',
          'km.ua',
          'kr.ua',
          'krym.ua',
          'ks.ua',
          'kv.ua',
          'kyiv.ua',
          'lg.ua',
          'lt.ua',
          'lugansk.ua',
          'lutsk.ua',
          'lv.ua',
          'lviv.ua',
          'mk.ua',
          'mykolaiv.ua',
          'nikolaev.ua',
          'od.ua',
          'odesa.ua',
          'odessa.ua',
          'pl.ua',
          'poltava.ua',
          'rivne.ua',
          'rovno.ua',
          'rv.ua',
          'sb.ua',
          'sebastopol.ua',
          'sevastopol.ua',
          'sm.ua',
          'sumy.ua',
          'te.ua',
          'ternopil.ua',
          'uz.ua',
          'uzhgorod.ua',
          'vinnica.ua',
          'vinnytsia.ua',
          'vn.ua',
          'volyn.ua',
          'yalta.ua',
          'zaporizhzhe.ua',
          'zaporizhzhia.ua',
          'zhitomir.ua',
          'zhytomyr.ua',
          'zp.ua',
          'zt.ua',
          'ug',
          'co.ug',
          'or.ug',
          'ac.ug',
          'sc.ug',
          'go.ug',
          'ne.ug',
          'com.ug',
          'org.ug',
          'uk',
          'ac.uk',
          'co.uk',
          'gov.uk',
          'ltd.uk',
          'me.uk',
          'net.uk',
          'nhs.uk',
          'org.uk',
          'plc.uk',
          'police.uk',
          '*.sch.uk',
          'us',
          'dni.us',
          'fed.us',
          'isa.us',
          'kids.us',
          'nsn.us',
          'ak.us',
          'al.us',
          'ar.us',
          'as.us',
          'az.us',
          'ca.us',
          'co.us',
          'ct.us',
          'dc.us',
          'de.us',
          'fl.us',
          'ga.us',
          'gu.us',
          'hi.us',
          'ia.us',
          'id.us',
          'il.us',
          'in.us',
          'ks.us',
          'ky.us',
          'la.us',
          'ma.us',
          'md.us',
          'me.us',
          'mi.us',
          'mn.us',
          'mo.us',
          'ms.us',
          'mt.us',
          'nc.us',
          'nd.us',
          'ne.us',
          'nh.us',
          'nj.us',
          'nm.us',
          'nv.us',
          'ny.us',
          'oh.us',
          'ok.us',
          'or.us',
          'pa.us',
          'pr.us',
          'ri.us',
          'sc.us',
          'sd.us',
          'tn.us',
          'tx.us',
          'ut.us',
          'vi.us',
          'vt.us',
          'va.us',
          'wa.us',
          'wi.us',
          'wv.us',
          'wy.us',
          'k12.ak.us',
          'k12.al.us',
          'k12.ar.us',
          'k12.as.us',
          'k12.az.us',
          'k12.ca.us',
          'k12.co.us',
          'k12.ct.us',
          'k12.dc.us',
          'k12.de.us',
          'k12.fl.us',
          'k12.ga.us',
          'k12.gu.us',
          'k12.ia.us',
          'k12.id.us',
          'k12.il.us',
          'k12.in.us',
          'k12.ks.us',
          'k12.ky.us',
          'k12.la.us',
          'k12.ma.us',
          'k12.md.us',
          'k12.me.us',
          'k12.mi.us',
          'k12.mn.us',
          'k12.mo.us',
          'k12.ms.us',
          'k12.mt.us',
          'k12.nc.us',
          'k12.ne.us',
          'k12.nh.us',
          'k12.nj.us',
          'k12.nm.us',
          'k12.nv.us',
          'k12.ny.us',
          'k12.oh.us',
          'k12.ok.us',
          'k12.or.us',
          'k12.pa.us',
          'k12.pr.us',
          'k12.sc.us',
          'k12.tn.us',
          'k12.tx.us',
          'k12.ut.us',
          'k12.vi.us',
          'k12.vt.us',
          'k12.va.us',
          'k12.wa.us',
          'k12.wi.us',
          'k12.wy.us',
          'cc.ak.us',
          'cc.al.us',
          'cc.ar.us',
          'cc.as.us',
          'cc.az.us',
          'cc.ca.us',
          'cc.co.us',
          'cc.ct.us',
          'cc.dc.us',
          'cc.de.us',
          'cc.fl.us',
          'cc.ga.us',
          'cc.gu.us',
          'cc.hi.us',
          'cc.ia.us',
          'cc.id.us',
          'cc.il.us',
          'cc.in.us',
          'cc.ks.us',
          'cc.ky.us',
          'cc.la.us',
          'cc.ma.us',
          'cc.md.us',
          'cc.me.us',
          'cc.mi.us',
          'cc.mn.us',
          'cc.mo.us',
          'cc.ms.us',
          'cc.mt.us',
          'cc.nc.us',
          'cc.nd.us',
          'cc.ne.us',
          'cc.nh.us',
          'cc.nj.us',
          'cc.nm.us',
          'cc.nv.us',
          'cc.ny.us',
          'cc.oh.us',
          'cc.ok.us',
          'cc.or.us',
          'cc.pa.us',
          'cc.pr.us',
          'cc.ri.us',
          'cc.sc.us',
          'cc.sd.us',
          'cc.tn.us',
          'cc.tx.us',
          'cc.ut.us',
          'cc.vi.us',
          'cc.vt.us',
          'cc.va.us',
          'cc.wa.us',
          'cc.wi.us',
          'cc.wv.us',
          'cc.wy.us',
          'lib.ak.us',
          'lib.al.us',
          'lib.ar.us',
          'lib.as.us',
          'lib.az.us',
          'lib.ca.us',
          'lib.co.us',
          'lib.ct.us',
          'lib.dc.us',
          'lib.fl.us',
          'lib.ga.us',
          'lib.gu.us',
          'lib.hi.us',
          'lib.ia.us',
          'lib.id.us',
          'lib.il.us',
          'lib.in.us',
          'lib.ks.us',
          'lib.ky.us',
          'lib.la.us',
          'lib.ma.us',
          'lib.md.us',
          'lib.me.us',
          'lib.mi.us',
          'lib.mn.us',
          'lib.mo.us',
          'lib.ms.us',
          'lib.mt.us',
          'lib.nc.us',
          'lib.nd.us',
          'lib.ne.us',
          'lib.nh.us',
          'lib.nj.us',
          'lib.nm.us',
          'lib.nv.us',
          'lib.ny.us',
          'lib.oh.us',
          'lib.ok.us',
          'lib.or.us',
          'lib.pa.us',
          'lib.pr.us',
          'lib.ri.us',
          'lib.sc.us',
          'lib.sd.us',
          'lib.tn.us',
          'lib.tx.us',
          'lib.ut.us',
          'lib.vi.us',
          'lib.vt.us',
          'lib.va.us',
          'lib.wa.us',
          'lib.wi.us',
          'lib.wy.us',
          'pvt.k12.ma.us',
          'chtr.k12.ma.us',
          'paroch.k12.ma.us',
          'ann-arbor.mi.us',
          'cog.mi.us',
          'dst.mi.us',
          'eaton.mi.us',
          'gen.mi.us',
          'mus.mi.us',
          'tec.mi.us',
          'washtenaw.mi.us',
          'uy',
          'com.uy',
          'edu.uy',
          'gub.uy',
          'mil.uy',
          'net.uy',
          'org.uy',
          'uz',
          'co.uz',
          'com.uz',
          'net.uz',
          'org.uz',
          'va',
          'vc',
          'com.vc',
          'net.vc',
          'org.vc',
          'gov.vc',
          'mil.vc',
          'edu.vc',
          've',
          'arts.ve',
          'bib.ve',
          'co.ve',
          'com.ve',
          'e12.ve',
          'edu.ve',
          'firm.ve',
          'gob.ve',
          'gov.ve',
          'info.ve',
          'int.ve',
          'mil.ve',
          'net.ve',
          'nom.ve',
          'org.ve',
          'rar.ve',
          'rec.ve',
          'store.ve',
          'tec.ve',
          'web.ve',
          'vg',
          'vi',
          'co.vi',
          'com.vi',
          'k12.vi',
          'net.vi',
          'org.vi',
          'vn',
          'com.vn',
          'net.vn',
          'org.vn',
          'edu.vn',
          'gov.vn',
          'int.vn',
          'ac.vn',
          'biz.vn',
          'info.vn',
          'name.vn',
          'pro.vn',
          'health.vn',
          'vu',
          'com.vu',
          'edu.vu',
          'net.vu',
          'org.vu',
          'wf',
          'ws',
          'com.ws',
          'net.ws',
          'org.ws',
          'gov.ws',
          'edu.ws',
          'yt',
          '\u0627\u0645\u0627\u0631\u0627\u062A',
          '\u0570\u0561\u0575',
          '\u09AC\u09BE\u0982\u09B2\u09BE',
          '\u0431\u0433',
          '\u0627\u0644\u0628\u062D\u0631\u064A\u0646',
          '\u0431\u0435\u043B',
          '\u4E2D\u56FD',
          '\u4E2D\u570B',
          '\u0627\u0644\u062C\u0632\u0627\u0626\u0631',
          '\u0645\u0635\u0631',
          '\u0435\u044E',
          '\u03B5\u03C5',
          '\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627',
          '\u10D2\u10D4',
          '\u03B5\u03BB',
          '\u9999\u6E2F',
          '\u516C\u53F8.\u9999\u6E2F',
          '\u6559\u80B2.\u9999\u6E2F',
          '\u653F\u5E9C.\u9999\u6E2F',
          '\u500B\u4EBA.\u9999\u6E2F',
          '\u7DB2\u7D61.\u9999\u6E2F',
          '\u7D44\u7E54.\u9999\u6E2F',
          '\u0CAD\u0CBE\u0CB0\u0CA4',
          '\u0B2D\u0B3E\u0B30\u0B24',
          '\u09AD\u09BE\u09F0\u09A4',
          '\u092D\u093E\u0930\u0924\u092E\u094D',
          '\u092D\u093E\u0930\u094B\u0924',
          '\u0680\u0627\u0631\u062A',
          '\u0D2D\u0D3E\u0D30\u0D24\u0D02',
          '\u092D\u093E\u0930\u0924',
          '\u0628\u0627\u0631\u062A',
          '\u0628\u06BE\u0627\u0631\u062A',
          '\u0C2D\u0C3E\u0C30\u0C24\u0C4D',
          '\u0AAD\u0ABE\u0AB0\u0AA4',
          '\u0A2D\u0A3E\u0A30\u0A24',
          '\u09AD\u09BE\u09B0\u09A4',
          '\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE',
          '\u0627\u06CC\u0631\u0627\u0646',
          '\u0627\u064A\u0631\u0627\u0646',
          '\u0639\u0631\u0627\u0642',
          '\u0627\u0644\u0627\u0631\u062F\u0646',
          '\uD55C\uAD6D',
          '\u049B\u0430\u0437',
          '\u0EA5\u0EB2\u0EA7',
          '\u0DBD\u0D82\u0D9A\u0DCF',
          '\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8',
          '\u0627\u0644\u0645\u063A\u0631\u0628',
          '\u043C\u043A\u0434',
          '\u043C\u043E\u043D',
          '\u6FB3\u9580',
          '\u6FB3\u95E8',
          '\u0645\u0644\u064A\u0633\u064A\u0627',
          '\u0639\u0645\u0627\u0646',
          '\u067E\u0627\u06A9\u0633\u062A\u0627\u0646',
          '\u067E\u0627\u0643\u0633\u062A\u0627\u0646',
          '\u0641\u0644\u0633\u0637\u064A\u0646',
          '\u0441\u0440\u0431',
          '\u043F\u0440.\u0441\u0440\u0431',
          '\u043E\u0440\u0433.\u0441\u0440\u0431',
          '\u043E\u0431\u0440.\u0441\u0440\u0431',
          '\u043E\u0434.\u0441\u0440\u0431',
          '\u0443\u043F\u0440.\u0441\u0440\u0431',
          '\u0430\u043A.\u0441\u0440\u0431',
          '\u0440\u0444',
          '\u0642\u0637\u0631',
          '\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629',
          '\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u0629',
          '\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u06C3',
          '\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0647',
          '\u0633\u0648\u062F\u0627\u0646',
          '\u65B0\u52A0\u5761',
          '\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD',
          '\u0633\u0648\u0631\u064A\u0629',
          '\u0633\u0648\u0631\u064A\u0627',
          '\u0E44\u0E17\u0E22',
          '\u0E28\u0E36\u0E01\u0E29\u0E32.\u0E44\u0E17\u0E22',
          '\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08.\u0E44\u0E17\u0E22',
          '\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25.\u0E44\u0E17\u0E22',
          '\u0E17\u0E2B\u0E32\u0E23.\u0E44\u0E17\u0E22',
          '\u0E40\u0E19\u0E47\u0E15.\u0E44\u0E17\u0E22',
          '\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23.\u0E44\u0E17\u0E22',
          '\u062A\u0648\u0646\u0633',
          '\u53F0\u7063',
          '\u53F0\u6E7E',
          '\u81FA\u7063',
          '\u0443\u043A\u0440',
          '\u0627\u0644\u064A\u0645\u0646',
          'xxx',
          'ye',
          'com.ye',
          'edu.ye',
          'gov.ye',
          'net.ye',
          'mil.ye',
          'org.ye',
          'ac.za',
          'agric.za',
          'alt.za',
          'co.za',
          'edu.za',
          'gov.za',
          'grondar.za',
          'law.za',
          'mil.za',
          'net.za',
          'ngo.za',
          'nic.za',
          'nis.za',
          'nom.za',
          'org.za',
          'school.za',
          'tm.za',
          'web.za',
          'zm',
          'ac.zm',
          'biz.zm',
          'co.zm',
          'com.zm',
          'edu.zm',
          'gov.zm',
          'info.zm',
          'mil.zm',
          'net.zm',
          'org.zm',
          'sch.zm',
          'zw',
          'ac.zw',
          'co.zw',
          'gov.zw',
          'mil.zw',
          'org.zw',
          'aaa',
          'aarp',
          'abarth',
          'abb',
          'abbott',
          'abbvie',
          'abc',
          'able',
          'abogado',
          'abudhabi',
          'academy',
          'accenture',
          'accountant',
          'accountants',
          'aco',
          'actor',
          'adac',
          'ads',
          'adult',
          'aeg',
          'aetna',
          'afl',
          'africa',
          'agakhan',
          'agency',
          'aig',
          'airbus',
          'airforce',
          'airtel',
          'akdn',
          'alfaromeo',
          'alibaba',
          'alipay',
          'allfinanz',
          'allstate',
          'ally',
          'alsace',
          'alstom',
          'amazon',
          'americanexpress',
          'americanfamily',
          'amex',
          'amfam',
          'amica',
          'amsterdam',
          'analytics',
          'android',
          'anquan',
          'anz',
          'aol',
          'apartments',
          'app',
          'apple',
          'aquarelle',
          'arab',
          'aramco',
          'archi',
          'army',
          'art',
          'arte',
          'asda',
          'associates',
          'athleta',
          'attorney',
          'auction',
          'audi',
          'audible',
          'audio',
          'auspost',
          'author',
          'auto',
          'autos',
          'avianca',
          'aws',
          'axa',
          'azure',
          'baby',
          'baidu',
          'banamex',
          'bananarepublic',
          'band',
          'bank',
          'bar',
          'barcelona',
          'barclaycard',
          'barclays',
          'barefoot',
          'bargains',
          'baseball',
          'basketball',
          'bauhaus',
          'bayern',
          'bbc',
          'bbt',
          'bbva',
          'bcg',
          'bcn',
          'beats',
          'beauty',
          'beer',
          'bentley',
          'berlin',
          'best',
          'bestbuy',
          'bet',
          'bharti',
          'bible',
          'bid',
          'bike',
          'bing',
          'bingo',
          'bio',
          'black',
          'blackfriday',
          'blockbuster',
          'blog',
          'bloomberg',
          'blue',
          'bms',
          'bmw',
          'bnpparibas',
          'boats',
          'boehringer',
          'bofa',
          'bom',
          'bond',
          'boo',
          'book',
          'booking',
          'bosch',
          'bostik',
          'boston',
          'bot',
          'boutique',
          'box',
          'bradesco',
          'bridgestone',
          'broadway',
          'broker',
          'brother',
          'brussels',
          'bugatti',
          'build',
          'builders',
          'business',
          'buy',
          'buzz',
          'bzh',
          'cab',
          'cafe',
          'cal',
          'call',
          'calvinklein',
          'cam',
          'camera',
          'camp',
          'cancerresearch',
          'canon',
          'capetown',
          'capital',
          'capitalone',
          'car',
          'caravan',
          'cards',
          'care',
          'career',
          'careers',
          'cars',
          'casa',
          'case',
          'cash',
          'casino',
          'catering',
          'catholic',
          'cba',
          'cbn',
          'cbre',
          'cbs',
          'center',
          'ceo',
          'cern',
          'cfa',
          'cfd',
          'chanel',
          'channel',
          'charity',
          'chase',
          'chat',
          'cheap',
          'chintai',
          'christmas',
          'chrome',
          'church',
          'cipriani',
          'circle',
          'cisco',
          'citadel',
          'citi',
          'citic',
          'city',
          'cityeats',
          'claims',
          'cleaning',
          'click',
          'clinic',
          'clinique',
          'clothing',
          'cloud',
          'club',
          'clubmed',
          'coach',
          'codes',
          'coffee',
          'college',
          'cologne',
          'comcast',
          'commbank',
          'community',
          'company',
          'compare',
          'computer',
          'comsec',
          'condos',
          'construction',
          'consulting',
          'contact',
          'contractors',
          'cooking',
          'cookingchannel',
          'cool',
          'corsica',
          'country',
          'coupon',
          'coupons',
          'courses',
          'cpa',
          'credit',
          'creditcard',
          'creditunion',
          'cricket',
          'crown',
          'crs',
          'cruise',
          'cruises',
          'cuisinella',
          'cymru',
          'cyou',
          'dabur',
          'dad',
          'dance',
          'data',
          'date',
          'dating',
          'datsun',
          'day',
          'dclk',
          'dds',
          'deal',
          'dealer',
          'deals',
          'degree',
          'delivery',
          'dell',
          'deloitte',
          'delta',
          'democrat',
          'dental',
          'dentist',
          'desi',
          'design',
          'dev',
          'dhl',
          'diamonds',
          'diet',
          'digital',
          'direct',
          'directory',
          'discount',
          'discover',
          'dish',
          'diy',
          'dnp',
          'docs',
          'doctor',
          'dog',
          'domains',
          'dot',
          'download',
          'drive',
          'dtv',
          'dubai',
          'dunlop',
          'dupont',
          'durban',
          'dvag',
          'dvr',
          'earth',
          'eat',
          'eco',
          'edeka',
          'education',
          'email',
          'emerck',
          'energy',
          'engineer',
          'engineering',
          'enterprises',
          'epson',
          'equipment',
          'ericsson',
          'erni',
          'esq',
          'estate',
          'etisalat',
          'eurovision',
          'eus',
          'events',
          'exchange',
          'expert',
          'exposed',
          'express',
          'extraspace',
          'fage',
          'fail',
          'fairwinds',
          'faith',
          'family',
          'fan',
          'fans',
          'farm',
          'farmers',
          'fashion',
          'fast',
          'fedex',
          'feedback',
          'ferrari',
          'ferrero',
          'fiat',
          'fidelity',
          'fido',
          'film',
          'final',
          'finance',
          'financial',
          'fire',
          'firestone',
          'firmdale',
          'fish',
          'fishing',
          'fit',
          'fitness',
          'flickr',
          'flights',
          'flir',
          'florist',
          'flowers',
          'fly',
          'foo',
          'food',
          'foodnetwork',
          'football',
          'ford',
          'forex',
          'forsale',
          'forum',
          'foundation',
          'fox',
          'free',
          'fresenius',
          'frl',
          'frogans',
          'frontdoor',
          'frontier',
          'ftr',
          'fujitsu',
          'fun',
          'fund',
          'furniture',
          'futbol',
          'fyi',
          'gal',
          'gallery',
          'gallo',
          'gallup',
          'game',
          'games',
          'gap',
          'garden',
          'gay',
          'gbiz',
          'gdn',
          'gea',
          'gent',
          'genting',
          'george',
          'ggee',
          'gift',
          'gifts',
          'gives',
          'giving',
          'glass',
          'gle',
          'global',
          'globo',
          'gmail',
          'gmbh',
          'gmo',
          'gmx',
          'godaddy',
          'gold',
          'goldpoint',
          'golf',
          'goo',
          'goodyear',
          'goog',
          'google',
          'gop',
          'got',
          'grainger',
          'graphics',
          'gratis',
          'green',
          'gripe',
          'grocery',
          'group',
          'guardian',
          'gucci',
          'guge',
          'guide',
          'guitars',
          'guru',
          'hair',
          'hamburg',
          'hangout',
          'haus',
          'hbo',
          'hdfc',
          'hdfcbank',
          'health',
          'healthcare',
          'help',
          'helsinki',
          'here',
          'hermes',
          'hgtv',
          'hiphop',
          'hisamitsu',
          'hitachi',
          'hiv',
          'hkt',
          'hockey',
          'holdings',
          'holiday',
          'homedepot',
          'homegoods',
          'homes',
          'homesense',
          'honda',
          'horse',
          'hospital',
          'host',
          'hosting',
          'hot',
          'hoteles',
          'hotels',
          'hotmail',
          'house',
          'how',
          'hsbc',
          'hughes',
          'hyatt',
          'hyundai',
          'ibm',
          'icbc',
          'ice',
          'icu',
          'ieee',
          'ifm',
          'ikano',
          'imamat',
          'imdb',
          'immo',
          'immobilien',
          'inc',
          'industries',
          'infiniti',
          'ing',
          'ink',
          'institute',
          'insurance',
          'insure',
          'international',
          'intuit',
          'investments',
          'ipiranga',
          'irish',
          'ismaili',
          'ist',
          'istanbul',
          'itau',
          'itv',
          'jaguar',
          'java',
          'jcb',
          'jeep',
          'jetzt',
          'jewelry',
          'jio',
          'jll',
          'jmp',
          'jnj',
          'joburg',
          'jot',
          'joy',
          'jpmorgan',
          'jprs',
          'juegos',
          'juniper',
          'kaufen',
          'kddi',
          'kerryhotels',
          'kerrylogistics',
          'kerryproperties',
          'kfh',
          'kia',
          'kids',
          'kim',
          'kinder',
          'kindle',
          'kitchen',
          'kiwi',
          'koeln',
          'komatsu',
          'kosher',
          'kpmg',
          'kpn',
          'krd',
          'kred',
          'kuokgroup',
          'kyoto',
          'lacaixa',
          'lamborghini',
          'lamer',
          'lancaster',
          'lancia',
          'land',
          'landrover',
          'lanxess',
          'lasalle',
          'lat',
          'latino',
          'latrobe',
          'law',
          'lawyer',
          'lds',
          'lease',
          'leclerc',
          'lefrak',
          'legal',
          'lego',
          'lexus',
          'lgbt',
          'lidl',
          'life',
          'lifeinsurance',
          'lifestyle',
          'lighting',
          'like',
          'lilly',
          'limited',
          'limo',
          'lincoln',
          'linde',
          'link',
          'lipsy',
          'live',
          'living',
          'llc',
          'llp',
          'loan',
          'loans',
          'locker',
          'locus',
          'loft',
          'lol',
          'london',
          'lotte',
          'lotto',
          'love',
          'lpl',
          'lplfinancial',
          'ltd',
          'ltda',
          'lundbeck',
          'luxe',
          'luxury',
          'macys',
          'madrid',
          'maif',
          'maison',
          'makeup',
          'man',
          'management',
          'mango',
          'map',
          'market',
          'marketing',
          'markets',
          'marriott',
          'marshalls',
          'maserati',
          'mattel',
          'mba',
          'mckinsey',
          'med',
          'media',
          'meet',
          'melbourne',
          'meme',
          'memorial',
          'men',
          'menu',
          'merckmsd',
          'miami',
          'microsoft',
          'mini',
          'mint',
          'mit',
          'mitsubishi',
          'mlb',
          'mls',
          'mma',
          'mobile',
          'moda',
          'moe',
          'moi',
          'mom',
          'monash',
          'money',
          'monster',
          'mormon',
          'mortgage',
          'moscow',
          'moto',
          'motorcycles',
          'mov',
          'movie',
          'msd',
          'mtn',
          'mtr',
          'music',
          'mutual',
          'nab',
          'nagoya',
          'natura',
          'navy',
          'nba',
          'nec',
          'netbank',
          'netflix',
          'network',
          'neustar',
          'new',
          'news',
          'next',
          'nextdirect',
          'nexus',
          'nfl',
          'ngo',
          'nhk',
          'nico',
          'nike',
          'nikon',
          'ninja',
          'nissan',
          'nissay',
          'nokia',
          'northwesternmutual',
          'norton',
          'now',
          'nowruz',
          'nowtv',
          'nra',
          'nrw',
          'ntt',
          'nyc',
          'obi',
          'observer',
          'office',
          'okinawa',
          'olayan',
          'olayangroup',
          'oldnavy',
          'ollo',
          'omega',
          'one',
          'ong',
          'onl',
          'online',
          'ooo',
          'open',
          'oracle',
          'orange',
          'organic',
          'origins',
          'osaka',
          'otsuka',
          'ott',
          'ovh',
          'page',
          'panasonic',
          'paris',
          'pars',
          'partners',
          'parts',
          'party',
          'passagens',
          'pay',
          'pccw',
          'pet',
          'pfizer',
          'pharmacy',
          'phd',
          'philips',
          'phone',
          'photo',
          'photography',
          'photos',
          'physio',
          'pics',
          'pictet',
          'pictures',
          'pid',
          'pin',
          'ping',
          'pink',
          'pioneer',
          'pizza',
          'place',
          'play',
          'playstation',
          'plumbing',
          'plus',
          'pnc',
          'pohl',
          'poker',
          'politie',
          'porn',
          'pramerica',
          'praxi',
          'press',
          'prime',
          'prod',
          'productions',
          'prof',
          'progressive',
          'promo',
          'properties',
          'property',
          'protection',
          'pru',
          'prudential',
          'pub',
          'pwc',
          'qpon',
          'quebec',
          'quest',
          'racing',
          'radio',
          'read',
          'realestate',
          'realtor',
          'realty',
          'recipes',
          'red',
          'redstone',
          'redumbrella',
          'rehab',
          'reise',
          'reisen',
          'reit',
          'reliance',
          'ren',
          'rent',
          'rentals',
          'repair',
          'report',
          'republican',
          'rest',
          'restaurant',
          'review',
          'reviews',
          'rexroth',
          'rich',
          'richardli',
          'ricoh',
          'ril',
          'rio',
          'rip',
          'rocher',
          'rocks',
          'rodeo',
          'rogers',
          'room',
          'rsvp',
          'rugby',
          'ruhr',
          'run',
          'rwe',
          'ryukyu',
          'saarland',
          'safe',
          'safety',
          'sakura',
          'sale',
          'salon',
          'samsclub',
          'samsung',
          'sandvik',
          'sandvikcoromant',
          'sanofi',
          'sap',
          'sarl',
          'sas',
          'save',
          'saxo',
          'sbi',
          'sbs',
          'sca',
          'scb',
          'schaeffler',
          'schmidt',
          'scholarships',
          'school',
          'schule',
          'schwarz',
          'science',
          'scot',
          'search',
          'seat',
          'secure',
          'security',
          'seek',
          'select',
          'sener',
          'services',
          'ses',
          'seven',
          'sew',
          'sex',
          'sexy',
          'sfr',
          'shangrila',
          'sharp',
          'shaw',
          'shell',
          'shia',
          'shiksha',
          'shoes',
          'shop',
          'shopping',
          'shouji',
          'show',
          'showtime',
          'silk',
          'sina',
          'singles',
          'site',
          'ski',
          'skin',
          'sky',
          'skype',
          'sling',
          'smart',
          'smile',
          'sncf',
          'soccer',
          'social',
          'softbank',
          'software',
          'sohu',
          'solar',
          'solutions',
          'song',
          'sony',
          'soy',
          'spa',
          'space',
          'sport',
          'spot',
          'srl',
          'stada',
          'staples',
          'star',
          'statebank',
          'statefarm',
          'stc',
          'stcgroup',
          'stockholm',
          'storage',
          'store',
          'stream',
          'studio',
          'study',
          'style',
          'sucks',
          'supplies',
          'supply',
          'support',
          'surf',
          'surgery',
          'suzuki',
          'swatch',
          'swiss',
          'sydney',
          'systems',
          'tab',
          'taipei',
          'talk',
          'taobao',
          'target',
          'tatamotors',
          'tatar',
          'tattoo',
          'tax',
          'taxi',
          'tci',
          'tdk',
          'team',
          'tech',
          'technology',
          'temasek',
          'tennis',
          'teva',
          'thd',
          'theater',
          'theatre',
          'tiaa',
          'tickets',
          'tienda',
          'tiffany',
          'tips',
          'tires',
          'tirol',
          'tjmaxx',
          'tjx',
          'tkmaxx',
          'tmall',
          'today',
          'tokyo',
          'tools',
          'top',
          'toray',
          'toshiba',
          'total',
          'tours',
          'town',
          'toyota',
          'toys',
          'trade',
          'trading',
          'training',
          'travel',
          'travelchannel',
          'travelers',
          'travelersinsurance',
          'trust',
          'trv',
          'tube',
          'tui',
          'tunes',
          'tushu',
          'tvs',
          'ubank',
          'ubs',
          'unicom',
          'university',
          'uno',
          'uol',
          'ups',
          'vacations',
          'vana',
          'vanguard',
          'vegas',
          'ventures',
          'verisign',
          'versicherung',
          'vet',
          'viajes',
          'video',
          'vig',
          'viking',
          'villas',
          'vin',
          'vip',
          'virgin',
          'visa',
          'vision',
          'viva',
          'vivo',
          'vlaanderen',
          'vodka',
          'volkswagen',
          'volvo',
          'vote',
          'voting',
          'voto',
          'voyage',
          'vuelos',
          'wales',
          'walmart',
          'walter',
          'wang',
          'wanggou',
          'watch',
          'watches',
          'weather',
          'weatherchannel',
          'webcam',
          'weber',
          'website',
          'wedding',
          'weibo',
          'weir',
          'whoswho',
          'wien',
          'wiki',
          'williamhill',
          'win',
          'windows',
          'wine',
          'winners',
          'wme',
          'wolterskluwer',
          'woodside',
          'work',
          'works',
          'world',
          'wow',
          'wtc',
          'wtf',
          'xbox',
          'xerox',
          'xfinity',
          'xihuan',
          'xin',
          '\u0915\u0949\u092E',
          '\u30BB\u30FC\u30EB',
          '\u4F5B\u5C71',
          '\u6148\u5584',
          '\u96C6\u56E2',
          '\u5728\u7EBF',
          '\u70B9\u770B',
          '\u0E04\u0E2D\u0E21',
          '\u516B\u5366',
          '\u0645\u0648\u0642\u0639',
          '\u516C\u76CA',
          '\u516C\u53F8',
          '\u9999\u683C\u91CC\u62C9',
          '\u7F51\u7AD9',
          '\u79FB\u52A8',
          '\u6211\u7231\u4F60',
          '\u043C\u043E\u0441\u043A\u0432\u0430',
          '\u043A\u0430\u0442\u043E\u043B\u0438\u043A',
          '\u043E\u043D\u043B\u0430\u0439\u043D',
          '\u0441\u0430\u0439\u0442',
          '\u8054\u901A',
          '\u05E7\u05D5\u05DD',
          '\u65F6\u5C1A',
          '\u5FAE\u535A',
          '\u6DE1\u9A6C\u9521',
          '\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3',
          '\u043E\u0440\u0433',
          '\u0928\u0947\u091F',
          '\u30B9\u30C8\u30A2',
          '\u30A2\u30DE\u30BE\u30F3',
          '\uC0BC\uC131',
          '\u5546\u6807',
          '\u5546\u5E97',
          '\u5546\u57CE',
          '\u0434\u0435\u0442\u0438',
          '\u30DD\u30A4\u30F3\u30C8',
          '\u65B0\u95FB',
          '\u5BB6\u96FB',
          '\u0643\u0648\u0645',
          '\u4E2D\u6587\u7F51',
          '\u4E2D\u4FE1',
          '\u5A31\u4E50',
          '\u8C37\u6B4C',
          '\u96FB\u8A0A\u76C8\u79D1',
          '\u8D2D\u7269',
          '\u30AF\u30E9\u30A6\u30C9',
          '\u901A\u8CA9',
          '\u7F51\u5E97',
          '\u0938\u0902\u0917\u0920\u0928',
          '\u9910\u5385',
          '\u7F51\u7EDC',
          '\u043A\u043E\u043C',
          '\u4E9A\u9A6C\u900A',
          '\u8BFA\u57FA\u4E9A',
          '\u98DF\u54C1',
          '\u98DE\u5229\u6D66',
          '\u624B\u673A',
          '\u0627\u0631\u0627\u0645\u0643\u0648',
          '\u0627\u0644\u0639\u0644\u064A\u0627\u0646',
          '\u0627\u062A\u0635\u0627\u0644\u0627\u062A',
          '\u0628\u0627\u0632\u0627\u0631',
          '\u0627\u0628\u0648\u0638\u0628\u064A',
          '\u0643\u0627\u062B\u0648\u0644\u064A\u0643',
          '\u0647\u0645\u0631\u0627\u0647',
          '\uB2F7\uCEF4',
          '\u653F\u5E9C',
          '\u0634\u0628\u0643\u0629',
          '\u0628\u064A\u062A\u0643',
          '\u0639\u0631\u0628',
          '\u673A\u6784',
          '\u7EC4\u7EC7\u673A\u6784',
          '\u5065\u5EB7',
          '\u62DB\u8058',
          '\u0440\u0443\u0441',
          '\u5927\u62FF',
          '\u307F\u3093\u306A',
          '\u30B0\u30FC\u30B0\u30EB',
          '\u4E16\u754C',
          '\u66F8\u7C4D',
          '\u7F51\u5740',
          '\uB2F7\uB137',
          '\u30B3\u30E0',
          '\u5929\u4E3B\u6559',
          '\u6E38\u620F',
          'verm\xF6gensberater',
          'verm\xF6gensberatung',
          '\u4F01\u4E1A',
          '\u4FE1\u606F',
          '\u5609\u91CC\u5927\u9152\u5E97',
          '\u5609\u91CC',
          '\u5E7F\u4E1C',
          '\u653F\u52A1',
          'xyz',
          'yachts',
          'yahoo',
          'yamaxun',
          'yandex',
          'yodobashi',
          'yoga',
          'yokohama',
          'you',
          'youtube',
          'yun',
          'zappos',
          'zara',
          'zero',
          'zip',
          'zone',
          'zuerich',
          'cc.ua',
          'inf.ua',
          'ltd.ua',
          '611.to',
          'graphox.us',
          '*.devcdnaccesso.com',
          'adobeaemcloud.com',
          '*.dev.adobeaemcloud.com',
          'hlx.live',
          'adobeaemcloud.net',
          'hlx.page',
          'hlx3.page',
          'beep.pl',
          'airkitapps.com',
          'airkitapps-au.com',
          'airkitapps.eu',
          'aivencloud.com',
          'barsy.ca',
          '*.compute.estate',
          '*.alces.network',
          'kasserver.com',
          'altervista.org',
          'alwaysdata.net',
          'cloudfront.net',
          '*.compute.amazonaws.com',
          '*.compute-1.amazonaws.com',
          '*.compute.amazonaws.com.cn',
          'us-east-1.amazonaws.com',
          'cn-north-1.eb.amazonaws.com.cn',
          'cn-northwest-1.eb.amazonaws.com.cn',
          'elasticbeanstalk.com',
          'ap-northeast-1.elasticbeanstalk.com',
          'ap-northeast-2.elasticbeanstalk.com',
          'ap-northeast-3.elasticbeanstalk.com',
          'ap-south-1.elasticbeanstalk.com',
          'ap-southeast-1.elasticbeanstalk.com',
          'ap-southeast-2.elasticbeanstalk.com',
          'ca-central-1.elasticbeanstalk.com',
          'eu-central-1.elasticbeanstalk.com',
          'eu-west-1.elasticbeanstalk.com',
          'eu-west-2.elasticbeanstalk.com',
          'eu-west-3.elasticbeanstalk.com',
          'sa-east-1.elasticbeanstalk.com',
          'us-east-1.elasticbeanstalk.com',
          'us-east-2.elasticbeanstalk.com',
          'us-gov-west-1.elasticbeanstalk.com',
          'us-west-1.elasticbeanstalk.com',
          'us-west-2.elasticbeanstalk.com',
          '*.elb.amazonaws.com',
          '*.elb.amazonaws.com.cn',
          'awsglobalaccelerator.com',
          's3.amazonaws.com',
          's3-ap-northeast-1.amazonaws.com',
          's3-ap-northeast-2.amazonaws.com',
          's3-ap-south-1.amazonaws.com',
          's3-ap-southeast-1.amazonaws.com',
          's3-ap-southeast-2.amazonaws.com',
          's3-ca-central-1.amazonaws.com',
          's3-eu-central-1.amazonaws.com',
          's3-eu-west-1.amazonaws.com',
          's3-eu-west-2.amazonaws.com',
          's3-eu-west-3.amazonaws.com',
          's3-external-1.amazonaws.com',
          's3-fips-us-gov-west-1.amazonaws.com',
          's3-sa-east-1.amazonaws.com',
          's3-us-gov-west-1.amazonaws.com',
          's3-us-east-2.amazonaws.com',
          's3-us-west-1.amazonaws.com',
          's3-us-west-2.amazonaws.com',
          's3.ap-northeast-2.amazonaws.com',
          's3.ap-south-1.amazonaws.com',
          's3.cn-north-1.amazonaws.com.cn',
          's3.ca-central-1.amazonaws.com',
          's3.eu-central-1.amazonaws.com',
          's3.eu-west-2.amazonaws.com',
          's3.eu-west-3.amazonaws.com',
          's3.us-east-2.amazonaws.com',
          's3.dualstack.ap-northeast-1.amazonaws.com',
          's3.dualstack.ap-northeast-2.amazonaws.com',
          's3.dualstack.ap-south-1.amazonaws.com',
          's3.dualstack.ap-southeast-1.amazonaws.com',
          's3.dualstack.ap-southeast-2.amazonaws.com',
          's3.dualstack.ca-central-1.amazonaws.com',
          's3.dualstack.eu-central-1.amazonaws.com',
          's3.dualstack.eu-west-1.amazonaws.com',
          's3.dualstack.eu-west-2.amazonaws.com',
          's3.dualstack.eu-west-3.amazonaws.com',
          's3.dualstack.sa-east-1.amazonaws.com',
          's3.dualstack.us-east-1.amazonaws.com',
          's3.dualstack.us-east-2.amazonaws.com',
          's3-website-us-east-1.amazonaws.com',
          's3-website-us-west-1.amazonaws.com',
          's3-website-us-west-2.amazonaws.com',
          's3-website-ap-northeast-1.amazonaws.com',
          's3-website-ap-southeast-1.amazonaws.com',
          's3-website-ap-southeast-2.amazonaws.com',
          's3-website-eu-west-1.amazonaws.com',
          's3-website-sa-east-1.amazonaws.com',
          's3-website.ap-northeast-2.amazonaws.com',
          's3-website.ap-south-1.amazonaws.com',
          's3-website.ca-central-1.amazonaws.com',
          's3-website.eu-central-1.amazonaws.com',
          's3-website.eu-west-2.amazonaws.com',
          's3-website.eu-west-3.amazonaws.com',
          's3-website.us-east-2.amazonaws.com',
          't3l3p0rt.net',
          'tele.amune.org',
          'apigee.io',
          'siiites.com',
          'appspacehosted.com',
          'appspaceusercontent.com',
          'appudo.net',
          'on-aptible.com',
          'user.aseinet.ne.jp',
          'gv.vc',
          'd.gv.vc',
          'user.party.eus',
          'pimienta.org',
          'poivron.org',
          'potager.org',
          'sweetpepper.org',
          'myasustor.com',
          'cdn.prod.atlassian-dev.net',
          'translated.page',
          'myfritz.net',
          'onavstack.net',
          '*.awdev.ca',
          '*.advisor.ws',
          'ecommerce-shop.pl',
          'b-data.io',
          'backplaneapp.io',
          'balena-devices.com',
          'rs.ba',
          '*.banzai.cloud',
          'app.banzaicloud.io',
          '*.backyards.banzaicloud.io',
          'base.ec',
          'official.ec',
          'buyshop.jp',
          'fashionstore.jp',
          'handcrafted.jp',
          'kawaiishop.jp',
          'supersale.jp',
          'theshop.jp',
          'shopselect.net',
          'base.shop',
          '*.beget.app',
          'betainabox.com',
          'bnr.la',
          'bitbucket.io',
          'blackbaudcdn.net',
          'of.je',
          'bluebite.io',
          'boomla.net',
          'boutir.com',
          'boxfuse.io',
          'square7.ch',
          'bplaced.com',
          'bplaced.de',
          'square7.de',
          'bplaced.net',
          'square7.net',
          'shop.brendly.rs',
          'browsersafetymark.io',
          'uk0.bigv.io',
          'dh.bytemark.co.uk',
          'vm.bytemark.co.uk',
          'cafjs.com',
          'mycd.eu',
          'drr.ac',
          'uwu.ai',
          'carrd.co',
          'crd.co',
          'ju.mp',
          'ae.org',
          'br.com',
          'cn.com',
          'com.de',
          'com.se',
          'de.com',
          'eu.com',
          'gb.net',
          'hu.net',
          'jp.net',
          'jpn.com',
          'mex.com',
          'ru.com',
          'sa.com',
          'se.net',
          'uk.com',
          'uk.net',
          'us.com',
          'za.bz',
          'za.com',
          'ar.com',
          'hu.com',
          'kr.com',
          'no.com',
          'qc.com',
          'uy.com',
          'africa.com',
          'gr.com',
          'in.net',
          'web.in',
          'us.org',
          'co.com',
          'aus.basketball',
          'nz.basketball',
          'radio.am',
          'radio.fm',
          'c.la',
          'certmgr.org',
          'cx.ua',
          'discourse.group',
          'discourse.team',
          'cleverapps.io',
          'clerk.app',
          'clerkstage.app',
          '*.lcl.dev',
          '*.lclstage.dev',
          '*.stg.dev',
          '*.stgstage.dev',
          'clickrising.net',
          'c66.me',
          'cloud66.ws',
          'cloud66.zone',
          'jdevcloud.com',
          'wpdevcloud.com',
          'cloudaccess.host',
          'freesite.host',
          'cloudaccess.net',
          'cloudcontrolled.com',
          'cloudcontrolapp.com',
          '*.cloudera.site',
          'pages.dev',
          'trycloudflare.com',
          'workers.dev',
          'wnext.app',
          'co.ca',
          '*.otap.co',
          'co.cz',
          'c.cdn77.org',
          'cdn77-ssl.net',
          'r.cdn77.net',
          'rsc.cdn77.org',
          'ssl.origin.cdn77-secure.org',
          'cloudns.asia',
          'cloudns.biz',
          'cloudns.club',
          'cloudns.cc',
          'cloudns.eu',
          'cloudns.in',
          'cloudns.info',
          'cloudns.org',
          'cloudns.pro',
          'cloudns.pw',
          'cloudns.us',
          'cnpy.gdn',
          'codeberg.page',
          'co.nl',
          'co.no',
          'webhosting.be',
          'hosting-cluster.nl',
          'ac.ru',
          'edu.ru',
          'gov.ru',
          'int.ru',
          'mil.ru',
          'test.ru',
          'dyn.cosidns.de',
          'dynamisches-dns.de',
          'dnsupdater.de',
          'internet-dns.de',
          'l-o-g-i-n.de',
          'dynamic-dns.info',
          'feste-ip.net',
          'knx-server.net',
          'static-access.net',
          'realm.cz',
          '*.cryptonomic.net',
          'cupcake.is',
          'curv.dev',
          '*.customer-oci.com',
          '*.oci.customer-oci.com',
          '*.ocp.customer-oci.com',
          '*.ocs.customer-oci.com',
          'cyon.link',
          'cyon.site',
          'fnwk.site',
          'folionetwork.site',
          'platform0.app',
          'daplie.me',
          'localhost.daplie.me',
          'dattolocal.com',
          'dattorelay.com',
          'dattoweb.com',
          'mydatto.com',
          'dattolocal.net',
          'mydatto.net',
          'biz.dk',
          'co.dk',
          'firm.dk',
          'reg.dk',
          'store.dk',
          'dyndns.dappnode.io',
          '*.dapps.earth',
          '*.bzz.dapps.earth',
          'builtwithdark.com',
          'demo.datadetect.com',
          'instance.datadetect.com',
          'edgestack.me',
          'ddns5.com',
          'debian.net',
          'deno.dev',
          'deno-staging.dev',
          'dedyn.io',
          'deta.app',
          'deta.dev',
          '*.rss.my.id',
          '*.diher.solutions',
          'discordsays.com',
          'discordsez.com',
          'jozi.biz',
          'dnshome.de',
          'online.th',
          'shop.th',
          'drayddns.com',
          'shoparena.pl',
          'dreamhosters.com',
          'mydrobo.com',
          'drud.io',
          'drud.us',
          'duckdns.org',
          'bip.sh',
          'bitbridge.net',
          'dy.fi',
          'tunk.org',
          'dyndns-at-home.com',
          'dyndns-at-work.com',
          'dyndns-blog.com',
          'dyndns-free.com',
          'dyndns-home.com',
          'dyndns-ip.com',
          'dyndns-mail.com',
          'dyndns-office.com',
          'dyndns-pics.com',
          'dyndns-remote.com',
          'dyndns-server.com',
          'dyndns-web.com',
          'dyndns-wiki.com',
          'dyndns-work.com',
          'dyndns.biz',
          'dyndns.info',
          'dyndns.org',
          'dyndns.tv',
          'at-band-camp.net',
          'ath.cx',
          'barrel-of-knowledge.info',
          'barrell-of-knowledge.info',
          'better-than.tv',
          'blogdns.com',
          'blogdns.net',
          'blogdns.org',
          'blogsite.org',
          'boldlygoingnowhere.org',
          'broke-it.net',
          'buyshouses.net',
          'cechire.com',
          'dnsalias.com',
          'dnsalias.net',
          'dnsalias.org',
          'dnsdojo.com',
          'dnsdojo.net',
          'dnsdojo.org',
          'does-it.net',
          'doesntexist.com',
          'doesntexist.org',
          'dontexist.com',
          'dontexist.net',
          'dontexist.org',
          'doomdns.com',
          'doomdns.org',
          'dvrdns.org',
          'dyn-o-saur.com',
          'dynalias.com',
          'dynalias.net',
          'dynalias.org',
          'dynathome.net',
          'dyndns.ws',
          'endofinternet.net',
          'endofinternet.org',
          'endoftheinternet.org',
          'est-a-la-maison.com',
          'est-a-la-masion.com',
          'est-le-patron.com',
          'est-mon-blogueur.com',
          'for-better.biz',
          'for-more.biz',
          'for-our.info',
          'for-some.biz',
          'for-the.biz',
          'forgot.her.name',
          'forgot.his.name',
          'from-ak.com',
          'from-al.com',
          'from-ar.com',
          'from-az.net',
          'from-ca.com',
          'from-co.net',
          'from-ct.com',
          'from-dc.com',
          'from-de.com',
          'from-fl.com',
          'from-ga.com',
          'from-hi.com',
          'from-ia.com',
          'from-id.com',
          'from-il.com',
          'from-in.com',
          'from-ks.com',
          'from-ky.com',
          'from-la.net',
          'from-ma.com',
          'from-md.com',
          'from-me.org',
          'from-mi.com',
          'from-mn.com',
          'from-mo.com',
          'from-ms.com',
          'from-mt.com',
          'from-nc.com',
          'from-nd.com',
          'from-ne.com',
          'from-nh.com',
          'from-nj.com',
          'from-nm.com',
          'from-nv.com',
          'from-ny.net',
          'from-oh.com',
          'from-ok.com',
          'from-or.com',
          'from-pa.com',
          'from-pr.com',
          'from-ri.com',
          'from-sc.com',
          'from-sd.com',
          'from-tn.com',
          'from-tx.com',
          'from-ut.com',
          'from-va.com',
          'from-vt.com',
          'from-wa.com',
          'from-wi.com',
          'from-wv.com',
          'from-wy.com',
          'ftpaccess.cc',
          'fuettertdasnetz.de',
          'game-host.org',
          'game-server.cc',
          'getmyip.com',
          'gets-it.net',
          'go.dyndns.org',
          'gotdns.com',
          'gotdns.org',
          'groks-the.info',
          'groks-this.info',
          'ham-radio-op.net',
          'here-for-more.info',
          'hobby-site.com',
          'hobby-site.org',
          'home.dyndns.org',
          'homedns.org',
          'homeftp.net',
          'homeftp.org',
          'homeip.net',
          'homelinux.com',
          'homelinux.net',
          'homelinux.org',
          'homeunix.com',
          'homeunix.net',
          'homeunix.org',
          'iamallama.com',
          'in-the-band.net',
          'is-a-anarchist.com',
          'is-a-blogger.com',
          'is-a-bookkeeper.com',
          'is-a-bruinsfan.org',
          'is-a-bulls-fan.com',
          'is-a-candidate.org',
          'is-a-caterer.com',
          'is-a-celticsfan.org',
          'is-a-chef.com',
          'is-a-chef.net',
          'is-a-chef.org',
          'is-a-conservative.com',
          'is-a-cpa.com',
          'is-a-cubicle-slave.com',
          'is-a-democrat.com',
          'is-a-designer.com',
          'is-a-doctor.com',
          'is-a-financialadvisor.com',
          'is-a-geek.com',
          'is-a-geek.net',
          'is-a-geek.org',
          'is-a-green.com',
          'is-a-guru.com',
          'is-a-hard-worker.com',
          'is-a-hunter.com',
          'is-a-knight.org',
          'is-a-landscaper.com',
          'is-a-lawyer.com',
          'is-a-liberal.com',
          'is-a-libertarian.com',
          'is-a-linux-user.org',
          'is-a-llama.com',
          'is-a-musician.com',
          'is-a-nascarfan.com',
          'is-a-nurse.com',
          'is-a-painter.com',
          'is-a-patsfan.org',
          'is-a-personaltrainer.com',
          'is-a-photographer.com',
          'is-a-player.com',
          'is-a-republican.com',
          'is-a-rockstar.com',
          'is-a-socialist.com',
          'is-a-soxfan.org',
          'is-a-student.com',
          'is-a-teacher.com',
          'is-a-techie.com',
          'is-a-therapist.com',
          'is-an-accountant.com',
          'is-an-actor.com',
          'is-an-actress.com',
          'is-an-anarchist.com',
          'is-an-artist.com',
          'is-an-engineer.com',
          'is-an-entertainer.com',
          'is-by.us',
          'is-certified.com',
          'is-found.org',
          'is-gone.com',
          'is-into-anime.com',
          'is-into-cars.com',
          'is-into-cartoons.com',
          'is-into-games.com',
          'is-leet.com',
          'is-lost.org',
          'is-not-certified.com',
          'is-saved.org',
          'is-slick.com',
          'is-uberleet.com',
          'is-very-bad.org',
          'is-very-evil.org',
          'is-very-good.org',
          'is-very-nice.org',
          'is-very-sweet.org',
          'is-with-theband.com',
          'isa-geek.com',
          'isa-geek.net',
          'isa-geek.org',
          'isa-hockeynut.com',
          'issmarterthanyou.com',
          'isteingeek.de',
          'istmein.de',
          'kicks-ass.net',
          'kicks-ass.org',
          'knowsitall.info',
          'land-4-sale.us',
          'lebtimnetz.de',
          'leitungsen.de',
          'likes-pie.com',
          'likescandy.com',
          'merseine.nu',
          'mine.nu',
          'misconfused.org',
          'mypets.ws',
          'myphotos.cc',
          'neat-url.com',
          'office-on-the.net',
          'on-the-web.tv',
          'podzone.net',
          'podzone.org',
          'readmyblog.org',
          'saves-the-whales.com',
          'scrapper-site.net',
          'scrapping.cc',
          'selfip.biz',
          'selfip.com',
          'selfip.info',
          'selfip.net',
          'selfip.org',
          'sells-for-less.com',
          'sells-for-u.com',
          'sells-it.net',
          'sellsyourhome.org',
          'servebbs.com',
          'servebbs.net',
          'servebbs.org',
          'serveftp.net',
          'serveftp.org',
          'servegame.org',
          'shacknet.nu',
          'simple-url.com',
          'space-to-rent.com',
          'stuff-4-sale.org',
          'stuff-4-sale.us',
          'teaches-yoga.com',
          'thruhere.net',
          'traeumtgerade.de',
          'webhop.biz',
          'webhop.info',
          'webhop.net',
          'webhop.org',
          'worse-than.tv',
          'writesthisblog.com',
          'ddnss.de',
          'dyn.ddnss.de',
          'dyndns.ddnss.de',
          'dyndns1.de',
          'dyn-ip24.de',
          'home-webserver.de',
          'dyn.home-webserver.de',
          'myhome-server.de',
          'ddnss.org',
          'definima.net',
          'definima.io',
          'ondigitalocean.app',
          '*.digitaloceanspaces.com',
          'bci.dnstrace.pro',
          'ddnsfree.com',
          'ddnsgeek.com',
          'giize.com',
          'gleeze.com',
          'kozow.com',
          'loseyourip.com',
          'ooguy.com',
          'theworkpc.com',
          'casacam.net',
          'dynu.net',
          'accesscam.org',
          'camdvr.org',
          'freeddns.org',
          'mywire.org',
          'webredirect.org',
          'myddns.rocks',
          'blogsite.xyz',
          'dynv6.net',
          'e4.cz',
          'eero.online',
          'eero-stage.online',
          'elementor.cloud',
          'elementor.cool',
          'en-root.fr',
          'mytuleap.com',
          'tuleap-partners.com',
          'encr.app',
          'encoreapi.com',
          'onred.one',
          'staging.onred.one',
          'eu.encoway.cloud',
          'eu.org',
          'al.eu.org',
          'asso.eu.org',
          'at.eu.org',
          'au.eu.org',
          'be.eu.org',
          'bg.eu.org',
          'ca.eu.org',
          'cd.eu.org',
          'ch.eu.org',
          'cn.eu.org',
          'cy.eu.org',
          'cz.eu.org',
          'de.eu.org',
          'dk.eu.org',
          'edu.eu.org',
          'ee.eu.org',
          'es.eu.org',
          'fi.eu.org',
          'fr.eu.org',
          'gr.eu.org',
          'hr.eu.org',
          'hu.eu.org',
          'ie.eu.org',
          'il.eu.org',
          'in.eu.org',
          'int.eu.org',
          'is.eu.org',
          'it.eu.org',
          'jp.eu.org',
          'kr.eu.org',
          'lt.eu.org',
          'lu.eu.org',
          'lv.eu.org',
          'mc.eu.org',
          'me.eu.org',
          'mk.eu.org',
          'mt.eu.org',
          'my.eu.org',
          'net.eu.org',
          'ng.eu.org',
          'nl.eu.org',
          'no.eu.org',
          'nz.eu.org',
          'paris.eu.org',
          'pl.eu.org',
          'pt.eu.org',
          'q-a.eu.org',
          'ro.eu.org',
          'ru.eu.org',
          'se.eu.org',
          'si.eu.org',
          'sk.eu.org',
          'tr.eu.org',
          'uk.eu.org',
          'us.eu.org',
          'eurodir.ru',
          'eu-1.evennode.com',
          'eu-2.evennode.com',
          'eu-3.evennode.com',
          'eu-4.evennode.com',
          'us-1.evennode.com',
          'us-2.evennode.com',
          'us-3.evennode.com',
          'us-4.evennode.com',
          'twmail.cc',
          'twmail.net',
          'twmail.org',
          'mymailer.com.tw',
          'url.tw',
          'onfabrica.com',
          'apps.fbsbx.com',
          'ru.net',
          'adygeya.ru',
          'bashkiria.ru',
          'bir.ru',
          'cbg.ru',
          'com.ru',
          'dagestan.ru',
          'grozny.ru',
          'kalmykia.ru',
          'kustanai.ru',
          'marine.ru',
          'mordovia.ru',
          'msk.ru',
          'mytis.ru',
          'nalchik.ru',
          'nov.ru',
          'pyatigorsk.ru',
          'spb.ru',
          'vladikavkaz.ru',
          'vladimir.ru',
          'abkhazia.su',
          'adygeya.su',
          'aktyubinsk.su',
          'arkhangelsk.su',
          'armenia.su',
          'ashgabad.su',
          'azerbaijan.su',
          'balashov.su',
          'bashkiria.su',
          'bryansk.su',
          'bukhara.su',
          'chimkent.su',
          'dagestan.su',
          'east-kazakhstan.su',
          'exnet.su',
          'georgia.su',
          'grozny.su',
          'ivanovo.su',
          'jambyl.su',
          'kalmykia.su',
          'kaluga.su',
          'karacol.su',
          'karaganda.su',
          'karelia.su',
          'khakassia.su',
          'krasnodar.su',
          'kurgan.su',
          'kustanai.su',
          'lenug.su',
          'mangyshlak.su',
          'mordovia.su',
          'msk.su',
          'murmansk.su',
          'nalchik.su',
          'navoi.su',
          'north-kazakhstan.su',
          'nov.su',
          'obninsk.su',
          'penza.su',
          'pokrovsk.su',
          'sochi.su',
          'spb.su',
          'tashkent.su',
          'termez.su',
          'togliatti.su',
          'troitsk.su',
          'tselinograd.su',
          'tula.su',
          'tuva.su',
          'vladikavkaz.su',
          'vladimir.su',
          'vologda.su',
          'channelsdvr.net',
          'u.channelsdvr.net',
          'edgecompute.app',
          'fastly-terrarium.com',
          'fastlylb.net',
          'map.fastlylb.net',
          'freetls.fastly.net',
          'map.fastly.net',
          'a.prod.fastly.net',
          'global.prod.fastly.net',
          'a.ssl.fastly.net',
          'b.ssl.fastly.net',
          'global.ssl.fastly.net',
          'fastvps-server.com',
          'fastvps.host',
          'myfast.host',
          'fastvps.site',
          'myfast.space',
          'fedorainfracloud.org',
          'fedorapeople.org',
          'cloud.fedoraproject.org',
          'app.os.fedoraproject.org',
          'app.os.stg.fedoraproject.org',
          'conn.uk',
          'copro.uk',
          'hosp.uk',
          'mydobiss.com',
          'fh-muenster.io',
          'filegear.me',
          'filegear-au.me',
          'filegear-de.me',
          'filegear-gb.me',
          'filegear-ie.me',
          'filegear-jp.me',
          'filegear-sg.me',
          'firebaseapp.com',
          'fireweb.app',
          'flap.id',
          'onflashdrive.app',
          'fldrv.com',
          'fly.dev',
          'edgeapp.net',
          'shw.io',
          'flynnhosting.net',
          'forgeblocks.com',
          'id.forgerock.io',
          'framer.app',
          'framercanvas.com',
          '*.frusky.de',
          'ravpage.co.il',
          '0e.vc',
          'freebox-os.com',
          'freeboxos.com',
          'fbx-os.fr',
          'fbxos.fr',
          'freebox-os.fr',
          'freeboxos.fr',
          'freedesktop.org',
          'freemyip.com',
          'wien.funkfeuer.at',
          '*.futurecms.at',
          '*.ex.futurecms.at',
          '*.in.futurecms.at',
          'futurehosting.at',
          'futuremailing.at',
          '*.ex.ortsinfo.at',
          '*.kunden.ortsinfo.at',
          '*.statics.cloud',
          'independent-commission.uk',
          'independent-inquest.uk',
          'independent-inquiry.uk',
          'independent-panel.uk',
          'independent-review.uk',
          'public-inquiry.uk',
          'royal-commission.uk',
          'campaign.gov.uk',
          'service.gov.uk',
          'api.gov.uk',
          'gehirn.ne.jp',
          'usercontent.jp',
          'gentapps.com',
          'gentlentapis.com',
          'lab.ms',
          'cdn-edges.net',
          'ghost.io',
          'gsj.bz',
          'githubusercontent.com',
          'githubpreview.dev',
          'github.io',
          'gitlab.io',
          'gitapp.si',
          'gitpage.si',
          'glitch.me',
          'nog.community',
          'co.ro',
          'shop.ro',
          'lolipop.io',
          'angry.jp',
          'babyblue.jp',
          'babymilk.jp',
          'backdrop.jp',
          'bambina.jp',
          'bitter.jp',
          'blush.jp',
          'boo.jp',
          'boy.jp',
          'boyfriend.jp',
          'but.jp',
          'candypop.jp',
          'capoo.jp',
          'catfood.jp',
          'cheap.jp',
          'chicappa.jp',
          'chillout.jp',
          'chips.jp',
          'chowder.jp',
          'chu.jp',
          'ciao.jp',
          'cocotte.jp',
          'coolblog.jp',
          'cranky.jp',
          'cutegirl.jp',
          'daa.jp',
          'deca.jp',
          'deci.jp',
          'digick.jp',
          'egoism.jp',
          'fakefur.jp',
          'fem.jp',
          'flier.jp',
          'floppy.jp',
          'fool.jp',
          'frenchkiss.jp',
          'girlfriend.jp',
          'girly.jp',
          'gloomy.jp',
          'gonna.jp',
          'greater.jp',
          'hacca.jp',
          'heavy.jp',
          'her.jp',
          'hiho.jp',
          'hippy.jp',
          'holy.jp',
          'hungry.jp',
          'icurus.jp',
          'itigo.jp',
          'jellybean.jp',
          'kikirara.jp',
          'kill.jp',
          'kilo.jp',
          'kuron.jp',
          'littlestar.jp',
          'lolipopmc.jp',
          'lolitapunk.jp',
          'lomo.jp',
          'lovepop.jp',
          'lovesick.jp',
          'main.jp',
          'mods.jp',
          'mond.jp',
          'mongolian.jp',
          'moo.jp',
          'namaste.jp',
          'nikita.jp',
          'nobushi.jp',
          'noor.jp',
          'oops.jp',
          'parallel.jp',
          'parasite.jp',
          'pecori.jp',
          'peewee.jp',
          'penne.jp',
          'pepper.jp',
          'perma.jp',
          'pigboat.jp',
          'pinoko.jp',
          'punyu.jp',
          'pupu.jp',
          'pussycat.jp',
          'pya.jp',
          'raindrop.jp',
          'readymade.jp',
          'sadist.jp',
          'schoolbus.jp',
          'secret.jp',
          'staba.jp',
          'stripper.jp',
          'sub.jp',
          'sunnyday.jp',
          'thick.jp',
          'tonkotsu.jp',
          'under.jp',
          'upper.jp',
          'velvet.jp',
          'verse.jp',
          'versus.jp',
          'vivian.jp',
          'watson.jp',
          'weblike.jp',
          'whitesnow.jp',
          'zombie.jp',
          'heteml.net',
          'cloudapps.digital',
          'london.cloudapps.digital',
          'pymnt.uk',
          'homeoffice.gov.uk',
          'ro.im',
          'goip.de',
          'run.app',
          'a.run.app',
          'web.app',
          '*.0emm.com',
          'appspot.com',
          '*.r.appspot.com',
          'codespot.com',
          'googleapis.com',
          'googlecode.com',
          'pagespeedmobilizer.com',
          'publishproxy.com',
          'withgoogle.com',
          'withyoutube.com',
          '*.gateway.dev',
          'cloud.goog',
          'translate.goog',
          '*.usercontent.goog',
          'cloudfunctions.net',
          'blogspot.ae',
          'blogspot.al',
          'blogspot.am',
          'blogspot.ba',
          'blogspot.be',
          'blogspot.bg',
          'blogspot.bj',
          'blogspot.ca',
          'blogspot.cf',
          'blogspot.ch',
          'blogspot.cl',
          'blogspot.co.at',
          'blogspot.co.id',
          'blogspot.co.il',
          'blogspot.co.ke',
          'blogspot.co.nz',
          'blogspot.co.uk',
          'blogspot.co.za',
          'blogspot.com',
          'blogspot.com.ar',
          'blogspot.com.au',
          'blogspot.com.br',
          'blogspot.com.by',
          'blogspot.com.co',
          'blogspot.com.cy',
          'blogspot.com.ee',
          'blogspot.com.eg',
          'blogspot.com.es',
          'blogspot.com.mt',
          'blogspot.com.ng',
          'blogspot.com.tr',
          'blogspot.com.uy',
          'blogspot.cv',
          'blogspot.cz',
          'blogspot.de',
          'blogspot.dk',
          'blogspot.fi',
          'blogspot.fr',
          'blogspot.gr',
          'blogspot.hk',
          'blogspot.hr',
          'blogspot.hu',
          'blogspot.ie',
          'blogspot.in',
          'blogspot.is',
          'blogspot.it',
          'blogspot.jp',
          'blogspot.kr',
          'blogspot.li',
          'blogspot.lt',
          'blogspot.lu',
          'blogspot.md',
          'blogspot.mk',
          'blogspot.mr',
          'blogspot.mx',
          'blogspot.my',
          'blogspot.nl',
          'blogspot.no',
          'blogspot.pe',
          'blogspot.pt',
          'blogspot.qa',
          'blogspot.re',
          'blogspot.ro',
          'blogspot.rs',
          'blogspot.ru',
          'blogspot.se',
          'blogspot.sg',
          'blogspot.si',
          'blogspot.sk',
          'blogspot.sn',
          'blogspot.td',
          'blogspot.tw',
          'blogspot.ug',
          'blogspot.vn',
          'goupile.fr',
          'gov.nl',
          'awsmppl.com',
          'g\xFCnstigbestellen.de',
          'g\xFCnstigliefern.de',
          'fin.ci',
          'free.hr',
          'caa.li',
          'ua.rs',
          'conf.se',
          'hs.zone',
          'hs.run',
          'hashbang.sh',
          'hasura.app',
          'hasura-app.io',
          'pages.it.hs-heilbronn.de',
          'hepforge.org',
          'herokuapp.com',
          'herokussl.com',
          'ravendb.cloud',
          'myravendb.com',
          'ravendb.community',
          'ravendb.me',
          'development.run',
          'ravendb.run',
          'homesklep.pl',
          'secaas.hk',
          'hoplix.shop',
          'orx.biz',
          'biz.gl',
          'col.ng',
          'firm.ng',
          'gen.ng',
          'ltd.ng',
          'ngo.ng',
          'edu.scot',
          'sch.so',
          'hostyhosting.io',
          'h\xE4kkinen.fi',
          '*.moonscale.io',
          'moonscale.net',
          'iki.fi',
          'ibxos.it',
          'iliadboxos.it',
          'impertrixcdn.com',
          'impertrix.com',
          'smushcdn.com',
          'wphostedmail.com',
          'wpmucdn.com',
          'tempurl.host',
          'wpmudev.host',
          'dyn-berlin.de',
          'in-berlin.de',
          'in-brb.de',
          'in-butter.de',
          'in-dsl.de',
          'in-dsl.net',
          'in-dsl.org',
          'in-vpn.de',
          'in-vpn.net',
          'in-vpn.org',
          'biz.at',
          'info.at',
          'info.cx',
          'ac.leg.br',
          'al.leg.br',
          'am.leg.br',
          'ap.leg.br',
          'ba.leg.br',
          'ce.leg.br',
          'df.leg.br',
          'es.leg.br',
          'go.leg.br',
          'ma.leg.br',
          'mg.leg.br',
          'ms.leg.br',
          'mt.leg.br',
          'pa.leg.br',
          'pb.leg.br',
          'pe.leg.br',
          'pi.leg.br',
          'pr.leg.br',
          'rj.leg.br',
          'rn.leg.br',
          'ro.leg.br',
          'rr.leg.br',
          'rs.leg.br',
          'sc.leg.br',
          'se.leg.br',
          'sp.leg.br',
          'to.leg.br',
          'pixolino.com',
          'na4u.ru',
          'iopsys.se',
          'ipifony.net',
          'iservschule.de',
          'mein-iserv.de',
          'schulplattform.de',
          'schulserver.de',
          'test-iserv.de',
          'iserv.dev',
          'iobb.net',
          'mel.cloudlets.com.au',
          'cloud.interhostsolutions.be',
          'users.scale.virtualcloud.com.br',
          'mycloud.by',
          'alp1.ae.flow.ch',
          'appengine.flow.ch',
          'es-1.axarnet.cloud',
          'diadem.cloud',
          'vip.jelastic.cloud',
          'jele.cloud',
          'it1.eur.aruba.jenv-aruba.cloud',
          'it1.jenv-aruba.cloud',
          'keliweb.cloud',
          'cs.keliweb.cloud',
          'oxa.cloud',
          'tn.oxa.cloud',
          'uk.oxa.cloud',
          'primetel.cloud',
          'uk.primetel.cloud',
          'ca.reclaim.cloud',
          'uk.reclaim.cloud',
          'us.reclaim.cloud',
          'ch.trendhosting.cloud',
          'de.trendhosting.cloud',
          'jele.club',
          'amscompute.com',
          'clicketcloud.com',
          'dopaas.com',
          'hidora.com',
          'paas.hosted-by-previder.com',
          'rag-cloud.hosteur.com',
          'rag-cloud-ch.hosteur.com',
          'jcloud.ik-server.com',
          'jcloud-ver-jpc.ik-server.com',
          'demo.jelastic.com',
          'kilatiron.com',
          'paas.massivegrid.com',
          'jed.wafaicloud.com',
          'lon.wafaicloud.com',
          'ryd.wafaicloud.com',
          'j.scaleforce.com.cy',
          'jelastic.dogado.eu',
          'fi.cloudplatform.fi',
          'demo.datacenter.fi',
          'paas.datacenter.fi',
          'jele.host',
          'mircloud.host',
          'paas.beebyte.io',
          'sekd1.beebyteapp.io',
          'jele.io',
          'cloud-fr1.unispace.io',
          'jc.neen.it',
          'cloud.jelastic.open.tim.it',
          'jcloud.kz',
          'upaas.kazteleport.kz',
          'cloudjiffy.net',
          'fra1-de.cloudjiffy.net',
          'west1-us.cloudjiffy.net',
          'jls-sto1.elastx.net',
          'jls-sto2.elastx.net',
          'jls-sto3.elastx.net',
          'faststacks.net',
          'fr-1.paas.massivegrid.net',
          'lon-1.paas.massivegrid.net',
          'lon-2.paas.massivegrid.net',
          'ny-1.paas.massivegrid.net',
          'ny-2.paas.massivegrid.net',
          'sg-1.paas.massivegrid.net',
          'jelastic.saveincloud.net',
          'nordeste-idc.saveincloud.net',
          'j.scaleforce.net',
          'jelastic.tsukaeru.net',
          'sdscloud.pl',
          'unicloud.pl',
          'mircloud.ru',
          'jelastic.regruhosting.ru',
          'enscaled.sg',
          'jele.site',
          'jelastic.team',
          'orangecloud.tn',
          'j.layershift.co.uk',
          'phx.enscaled.us',
          'mircloud.us',
          'myjino.ru',
          '*.hosting.myjino.ru',
          '*.landing.myjino.ru',
          '*.spectrum.myjino.ru',
          '*.vps.myjino.ru',
          'jotelulu.cloud',
          '*.triton.zone',
          '*.cns.joyent.com',
          'js.org',
          'kaas.gg',
          'khplay.nl',
          'ktistory.com',
          'kapsi.fi',
          'keymachine.de',
          'kinghost.net',
          'uni5.net',
          'knightpoint.systems',
          'koobin.events',
          'oya.to',
          'kuleuven.cloud',
          'ezproxy.kuleuven.be',
          'co.krd',
          'edu.krd',
          'krellian.net',
          'webthings.io',
          'git-repos.de',
          'lcube-server.de',
          'svn-repos.de',
          'leadpages.co',
          'lpages.co',
          'lpusercontent.com',
          'lelux.site',
          'co.business',
          'co.education',
          'co.events',
          'co.financial',
          'co.network',
          'co.place',
          'co.technology',
          'app.lmpm.com',
          'linkyard.cloud',
          'linkyard-cloud.ch',
          'members.linode.com',
          '*.nodebalancer.linode.com',
          '*.linodeobjects.com',
          'ip.linodeusercontent.com',
          'we.bs',
          '*.user.localcert.dev',
          'localzone.xyz',
          'loginline.app',
          'loginline.dev',
          'loginline.io',
          'loginline.services',
          'loginline.site',
          'servers.run',
          'lohmus.me',
          'krasnik.pl',
          'leczna.pl',
          'lubartow.pl',
          'lublin.pl',
          'poniatowa.pl',
          'swidnik.pl',
          'glug.org.uk',
          'lug.org.uk',
          'lugs.org.uk',
          'barsy.bg',
          'barsy.co.uk',
          'barsyonline.co.uk',
          'barsycenter.com',
          'barsyonline.com',
          'barsy.club',
          'barsy.de',
          'barsy.eu',
          'barsy.in',
          'barsy.info',
          'barsy.io',
          'barsy.me',
          'barsy.menu',
          'barsy.mobi',
          'barsy.net',
          'barsy.online',
          'barsy.org',
          'barsy.pro',
          'barsy.pub',
          'barsy.ro',
          'barsy.shop',
          'barsy.site',
          'barsy.support',
          'barsy.uk',
          '*.magentosite.cloud',
          'mayfirst.info',
          'mayfirst.org',
          'hb.cldmail.ru',
          'cn.vu',
          'mazeplay.com',
          'mcpe.me',
          'mcdir.me',
          'mcdir.ru',
          'mcpre.ru',
          'vps.mcdir.ru',
          'mediatech.by',
          'mediatech.dev',
          'hra.health',
          'miniserver.com',
          'memset.net',
          'messerli.app',
          '*.cloud.metacentrum.cz',
          'custom.metacentrum.cz',
          'flt.cloud.muni.cz',
          'usr.cloud.muni.cz',
          'meteorapp.com',
          'eu.meteorapp.com',
          'co.pl',
          '*.azurecontainer.io',
          'azurewebsites.net',
          'azure-mobile.net',
          'cloudapp.net',
          'azurestaticapps.net',
          '1.azurestaticapps.net',
          'centralus.azurestaticapps.net',
          'eastasia.azurestaticapps.net',
          'eastus2.azurestaticapps.net',
          'westeurope.azurestaticapps.net',
          'westus2.azurestaticapps.net',
          'csx.cc',
          'mintere.site',
          'forte.id',
          'mozilla-iot.org',
          'bmoattachments.org',
          'net.ru',
          'org.ru',
          'pp.ru',
          'hostedpi.com',
          'customer.mythic-beasts.com',
          'caracal.mythic-beasts.com',
          'fentiger.mythic-beasts.com',
          'lynx.mythic-beasts.com',
          'ocelot.mythic-beasts.com',
          'oncilla.mythic-beasts.com',
          'onza.mythic-beasts.com',
          'sphinx.mythic-beasts.com',
          'vs.mythic-beasts.com',
          'x.mythic-beasts.com',
          'yali.mythic-beasts.com',
          'cust.retrosnub.co.uk',
          'ui.nabu.casa',
          'pony.club',
          'of.fashion',
          'in.london',
          'of.london',
          'from.marketing',
          'with.marketing',
          'for.men',
          'repair.men',
          'and.mom',
          'for.mom',
          'for.one',
          'under.one',
          'for.sale',
          'that.win',
          'from.work',
          'to.work',
          'cloud.nospamproxy.com',
          'netlify.app',
          '4u.com',
          'ngrok.io',
          'nh-serv.co.uk',
          'nfshost.com',
          '*.developer.app',
          'noop.app',
          '*.northflank.app',
          '*.build.run',
          '*.code.run',
          '*.database.run',
          '*.migration.run',
          'noticeable.news',
          'dnsking.ch',
          'mypi.co',
          'n4t.co',
          '001www.com',
          'ddnslive.com',
          'myiphost.com',
          'forumz.info',
          '16-b.it',
          '32-b.it',
          '64-b.it',
          'soundcast.me',
          'tcp4.me',
          'dnsup.net',
          'hicam.net',
          'now-dns.net',
          'ownip.net',
          'vpndns.net',
          'dynserv.org',
          'now-dns.org',
          'x443.pw',
          'now-dns.top',
          'ntdll.top',
          'freeddns.us',
          'crafting.xyz',
          'zapto.xyz',
          'nsupdate.info',
          'nerdpol.ovh',
          'blogsyte.com',
          'brasilia.me',
          'cable-modem.org',
          'ciscofreak.com',
          'collegefan.org',
          'couchpotatofries.org',
          'damnserver.com',
          'ddns.me',
          'ditchyourip.com',
          'dnsfor.me',
          'dnsiskinky.com',
          'dvrcam.info',
          'dynns.com',
          'eating-organic.net',
          'fantasyleague.cc',
          'geekgalaxy.com',
          'golffan.us',
          'health-carereform.com',
          'homesecuritymac.com',
          'homesecuritypc.com',
          'hopto.me',
          'ilovecollege.info',
          'loginto.me',
          'mlbfan.org',
          'mmafan.biz',
          'myactivedirectory.com',
          'mydissent.net',
          'myeffect.net',
          'mymediapc.net',
          'mypsx.net',
          'mysecuritycamera.com',
          'mysecuritycamera.net',
          'mysecuritycamera.org',
          'net-freaks.com',
          'nflfan.org',
          'nhlfan.net',
          'no-ip.ca',
          'no-ip.co.uk',
          'no-ip.net',
          'noip.us',
          'onthewifi.com',
          'pgafan.net',
          'point2this.com',
          'pointto.us',
          'privatizehealthinsurance.net',
          'quicksytes.com',
          'read-books.org',
          'securitytactics.com',
          'serveexchange.com',
          'servehumour.com',
          'servep2p.com',
          'servesarcasm.com',
          'stufftoread.com',
          'ufcfan.org',
          'unusualperson.com',
          'workisboring.com',
          '3utilities.com',
          'bounceme.net',
          'ddns.net',
          'ddnsking.com',
          'gotdns.ch',
          'hopto.org',
          'myftp.biz',
          'myftp.org',
          'myvnc.com',
          'no-ip.biz',
          'no-ip.info',
          'no-ip.org',
          'noip.me',
          'redirectme.net',
          'servebeer.com',
          'serveblog.net',
          'servecounterstrike.com',
          'serveftp.com',
          'servegame.com',
          'servehalflife.com',
          'servehttp.com',
          'serveirc.com',
          'serveminecraft.net',
          'servemp3.com',
          'servepics.com',
          'servequake.com',
          'sytes.net',
          'webhop.me',
          'zapto.org',
          'stage.nodeart.io',
          'pcloud.host',
          'nyc.mn',
          'static.observableusercontent.com',
          'cya.gg',
          'omg.lol',
          'cloudycluster.net',
          'omniwe.site',
          'service.one',
          'nid.io',
          'opensocial.site',
          'opencraft.hosting',
          'orsites.com',
          'operaunite.com',
          'tech.orange',
          'authgear-staging.com',
          'authgearapps.com',
          'skygearapp.com',
          'outsystemscloud.com',
          '*.webpaas.ovh.net',
          '*.hosting.ovh.net',
          'ownprovider.com',
          'own.pm',
          '*.owo.codes',
          'ox.rs',
          'oy.lc',
          'pgfog.com',
          'pagefrontapp.com',
          'pagexl.com',
          '*.paywhirl.com',
          'bar0.net',
          'bar1.net',
          'bar2.net',
          'rdv.to',
          'art.pl',
          'gliwice.pl',
          'krakow.pl',
          'poznan.pl',
          'wroc.pl',
          'zakopane.pl',
          'pantheonsite.io',
          'gotpantheon.com',
          'mypep.link',
          'perspecta.cloud',
          'lk3.ru',
          'on-web.fr',
          'bc.platform.sh',
          'ent.platform.sh',
          'eu.platform.sh',
          'us.platform.sh',
          '*.platformsh.site',
          '*.tst.site',
          'platter-app.com',
          'platter-app.dev',
          'platterp.us',
          'pdns.page',
          'plesk.page',
          'pleskns.com',
          'dyn53.io',
          'onporter.run',
          'co.bn',
          'postman-echo.com',
          'pstmn.io',
          'mock.pstmn.io',
          'httpbin.org',
          'prequalifyme.today',
          'xen.prgmr.com',
          'priv.at',
          'prvcy.page',
          '*.dweb.link',
          'protonet.io',
          'chirurgiens-dentistes-en-france.fr',
          'byen.site',
          'pubtls.org',
          'pythonanywhere.com',
          'eu.pythonanywhere.com',
          'qoto.io',
          'qualifioapp.com',
          'qbuser.com',
          'cloudsite.builders',
          'instances.spawn.cc',
          'instantcloud.cn',
          'ras.ru',
          'qa2.com',
          'qcx.io',
          '*.sys.qcx.io',
          'dev-myqnapcloud.com',
          'alpha-myqnapcloud.com',
          'myqnapcloud.com',
          '*.quipelements.com',
          'vapor.cloud',
          'vaporcloud.io',
          'rackmaze.com',
          'rackmaze.net',
          'g.vbrplsbx.io',
          '*.on-k3s.io',
          '*.on-rancher.cloud',
          '*.on-rio.io',
          'readthedocs.io',
          'rhcloud.com',
          'app.render.com',
          'onrender.com',
          'repl.co',
          'id.repl.co',
          'repl.run',
          'resindevice.io',
          'devices.resinstaging.io',
          'hzc.io',
          'wellbeingzone.eu',
          'wellbeingzone.co.uk',
          'adimo.co.uk',
          'itcouldbewor.se',
          'git-pages.rit.edu',
          'rocky.page',
          '\u0431\u0438\u0437.\u0440\u0443\u0441',
          '\u043A\u043E\u043C.\u0440\u0443\u0441',
          '\u043A\u0440\u044B\u043C.\u0440\u0443\u0441',
          '\u043C\u0438\u0440.\u0440\u0443\u0441',
          '\u043C\u0441\u043A.\u0440\u0443\u0441',
          '\u043E\u0440\u0433.\u0440\u0443\u0441',
          '\u0441\u0430\u043C\u0430\u0440\u0430.\u0440\u0443\u0441',
          '\u0441\u043E\u0447\u0438.\u0440\u0443\u0441',
          '\u0441\u043F\u0431.\u0440\u0443\u0441',
          '\u044F.\u0440\u0443\u0441',
          '*.builder.code.com',
          '*.dev-builder.code.com',
          '*.stg-builder.code.com',
          'sandcats.io',
          'logoip.de',
          'logoip.com',
          'fr-par-1.baremetal.scw.cloud',
          'fr-par-2.baremetal.scw.cloud',
          'nl-ams-1.baremetal.scw.cloud',
          'fnc.fr-par.scw.cloud',
          'functions.fnc.fr-par.scw.cloud',
          'k8s.fr-par.scw.cloud',
          'nodes.k8s.fr-par.scw.cloud',
          's3.fr-par.scw.cloud',
          's3-website.fr-par.scw.cloud',
          'whm.fr-par.scw.cloud',
          'priv.instances.scw.cloud',
          'pub.instances.scw.cloud',
          'k8s.scw.cloud',
          'k8s.nl-ams.scw.cloud',
          'nodes.k8s.nl-ams.scw.cloud',
          's3.nl-ams.scw.cloud',
          's3-website.nl-ams.scw.cloud',
          'whm.nl-ams.scw.cloud',
          'k8s.pl-waw.scw.cloud',
          'nodes.k8s.pl-waw.scw.cloud',
          's3.pl-waw.scw.cloud',
          's3-website.pl-waw.scw.cloud',
          'scalebook.scw.cloud',
          'smartlabeling.scw.cloud',
          'dedibox.fr',
          'schokokeks.net',
          'gov.scot',
          'service.gov.scot',
          'scrysec.com',
          'firewall-gateway.com',
          'firewall-gateway.de',
          'my-gateway.de',
          'my-router.de',
          'spdns.de',
          'spdns.eu',
          'firewall-gateway.net',
          'my-firewall.org',
          'myfirewall.org',
          'spdns.org',
          'seidat.net',
          'sellfy.store',
          'senseering.net',
          'minisite.ms',
          'magnet.page',
          'biz.ua',
          'co.ua',
          'pp.ua',
          'shiftcrypto.dev',
          'shiftcrypto.io',
          'shiftedit.io',
          'myshopblocks.com',
          'myshopify.com',
          'shopitsite.com',
          'shopware.store',
          'mo-siemens.io',
          '1kapp.com',
          'appchizi.com',
          'applinzi.com',
          'sinaapp.com',
          'vipsinaapp.com',
          'siteleaf.net',
          'bounty-full.com',
          'alpha.bounty-full.com',
          'beta.bounty-full.com',
          'small-web.org',
          'vp4.me',
          'try-snowplow.com',
          'srht.site',
          'stackhero-network.com',
          'musician.io',
          'novecore.site',
          'static.land',
          'dev.static.land',
          'sites.static.land',
          'storebase.store',
          'vps-host.net',
          'atl.jelastic.vps-host.net',
          'njs.jelastic.vps-host.net',
          'ric.jelastic.vps-host.net',
          'playstation-cloud.com',
          'apps.lair.io',
          '*.stolos.io',
          'spacekit.io',
          'customer.speedpartner.de',
          'myspreadshop.at',
          'myspreadshop.com.au',
          'myspreadshop.be',
          'myspreadshop.ca',
          'myspreadshop.ch',
          'myspreadshop.com',
          'myspreadshop.de',
          'myspreadshop.dk',
          'myspreadshop.es',
          'myspreadshop.fi',
          'myspreadshop.fr',
          'myspreadshop.ie',
          'myspreadshop.it',
          'myspreadshop.net',
          'myspreadshop.nl',
          'myspreadshop.no',
          'myspreadshop.pl',
          'myspreadshop.se',
          'myspreadshop.co.uk',
          'api.stdlib.com',
          'storj.farm',
          'utwente.io',
          'soc.srcf.net',
          'user.srcf.net',
          'temp-dns.com',
          'supabase.co',
          'supabase.in',
          'supabase.net',
          'su.paba.se',
          '*.s5y.io',
          '*.sensiosite.cloud',
          'syncloud.it',
          'dscloud.biz',
          'direct.quickconnect.cn',
          'dsmynas.com',
          'familyds.com',
          'diskstation.me',
          'dscloud.me',
          'i234.me',
          'myds.me',
          'synology.me',
          'dscloud.mobi',
          'dsmynas.net',
          'familyds.net',
          'dsmynas.org',
          'familyds.org',
          'vpnplus.to',
          'direct.quickconnect.to',
          'tabitorder.co.il',
          'taifun-dns.de',
          'beta.tailscale.net',
          'ts.net',
          'gda.pl',
          'gdansk.pl',
          'gdynia.pl',
          'med.pl',
          'sopot.pl',
          'site.tb-hosting.com',
          'edugit.io',
          's3.teckids.org',
          'telebit.app',
          'telebit.io',
          '*.telebit.xyz',
          'gwiddle.co.uk',
          '*.firenet.ch',
          '*.svc.firenet.ch',
          'reservd.com',
          'thingdustdata.com',
          'cust.dev.thingdust.io',
          'cust.disrec.thingdust.io',
          'cust.prod.thingdust.io',
          'cust.testing.thingdust.io',
          'reservd.dev.thingdust.io',
          'reservd.disrec.thingdust.io',
          'reservd.testing.thingdust.io',
          'tickets.io',
          'arvo.network',
          'azimuth.network',
          'tlon.network',
          'torproject.net',
          'pages.torproject.net',
          'bloxcms.com',
          'townnews-staging.com',
          'tbits.me',
          '12hp.at',
          '2ix.at',
          '4lima.at',
          'lima-city.at',
          '12hp.ch',
          '2ix.ch',
          '4lima.ch',
          'lima-city.ch',
          'trafficplex.cloud',
          'de.cool',
          '12hp.de',
          '2ix.de',
          '4lima.de',
          'lima-city.de',
          '1337.pictures',
          'clan.rip',
          'lima-city.rocks',
          'webspace.rocks',
          'lima.zone',
          '*.transurl.be',
          '*.transurl.eu',
          '*.transurl.nl',
          'site.transip.me',
          'tuxfamily.org',
          'dd-dns.de',
          'diskstation.eu',
          'diskstation.org',
          'dray-dns.de',
          'draydns.de',
          'dyn-vpn.de',
          'dynvpn.de',
          'mein-vigor.de',
          'my-vigor.de',
          'my-wan.de',
          'syno-ds.de',
          'synology-diskstation.de',
          'synology-ds.de',
          'typedream.app',
          'pro.typeform.com',
          'uber.space',
          '*.uberspace.de',
          'hk.com',
          'hk.org',
          'ltd.hk',
          'inc.hk',
          'name.pm',
          'sch.tf',
          'biz.wf',
          'sch.wf',
          'org.yt',
          'virtualuser.de',
          'virtual-user.de',
          'upli.io',
          'urown.cloud',
          'dnsupdate.info',
          'lib.de.us',
          '2038.io',
          'vercel.app',
          'vercel.dev',
          'now.sh',
          'router.management',
          'v-info.info',
          'voorloper.cloud',
          'neko.am',
          'nyaa.am',
          'be.ax',
          'cat.ax',
          'es.ax',
          'eu.ax',
          'gg.ax',
          'mc.ax',
          'us.ax',
          'xy.ax',
          'nl.ci',
          'xx.gl',
          'app.gp',
          'blog.gt',
          'de.gt',
          'to.gt',
          'be.gy',
          'cc.hn',
          'blog.kg',
          'io.kg',
          'jp.kg',
          'tv.kg',
          'uk.kg',
          'us.kg',
          'de.ls',
          'at.md',
          'de.md',
          'jp.md',
          'to.md',
          'indie.porn',
          'vxl.sh',
          'ch.tc',
          'me.tc',
          'we.tc',
          'nyan.to',
          'at.vg',
          'blog.vu',
          'dev.vu',
          'me.vu',
          'v.ua',
          '*.vultrobjects.com',
          'wafflecell.com',
          '*.webhare.dev',
          'reserve-online.net',
          'reserve-online.com',
          'bookonline.app',
          'hotelwithflight.com',
          'wedeploy.io',
          'wedeploy.me',
          'wedeploy.sh',
          'remotewd.com',
          'pages.wiardweb.com',
          'wmflabs.org',
          'toolforge.org',
          'wmcloud.org',
          'panel.gg',
          'daemon.panel.gg',
          'messwithdns.com',
          'woltlab-demo.com',
          'myforum.community',
          'community-pro.de',
          'diskussionsbereich.de',
          'community-pro.net',
          'meinforum.net',
          'affinitylottery.org.uk',
          'raffleentry.org.uk',
          'weeklylottery.org.uk',
          'wpenginepowered.com',
          'js.wpenginepowered.com',
          'wixsite.com',
          'editorx.io',
          'half.host',
          'xnbay.com',
          'u2.xnbay.com',
          'u2-local.xnbay.com',
          'cistron.nl',
          'demon.nl',
          'xs4all.space',
          'yandexcloud.net',
          'storage.yandexcloud.net',
          'website.yandexcloud.net',
          'official.academy',
          'yolasite.com',
          'ybo.faith',
          'yombo.me',
          'homelink.one',
          'ybo.party',
          'ybo.review',
          'ybo.science',
          'ybo.trade',
          'ynh.fr',
          'nohost.me',
          'noho.st',
          'za.net',
          'za.org',
          'bss.design',
          'basicserver.io',
          'virtualserver.io',
          'enterprisecloud.nu',
        ];
      },
    }),
    D0 = Oe({
      'node_modules/psl/index.js'(e) {
        'use strict';
        var t = Nh(),
          r = {};
        (r.rules = T0().map(function (n) {
          return {
            rule: n,
            suffix: n.replace(/^(\*\.|\!)/, ''),
            punySuffix: -1,
            wildcard: n.charAt(0) === '*',
            exception: n.charAt(0) === '!',
          };
        })),
          (r.endsWith = function (n, o) {
            return n.indexOf(o, n.length - o.length) !== -1;
          }),
          (r.findRule = function (n) {
            var o = t.toASCII(n);
            return r.rules.reduce(function (a, s) {
              return (
                s.punySuffix === -1 && (s.punySuffix = t.toASCII(s.suffix)),
                !r.endsWith(o, '.' + s.punySuffix) && o !== s.punySuffix ? a : s
              );
            }, null);
          }),
          (e.errorCodes = {
            DOMAIN_TOO_SHORT: 'Domain name too short.',
            DOMAIN_TOO_LONG:
              'Domain name too long. It should be no more than 255 chars.',
            LABEL_STARTS_WITH_DASH:
              'Domain name label can not start with a dash.',
            LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
            LABEL_TOO_LONG:
              'Domain name label should be at most 63 chars long.',
            LABEL_TOO_SHORT:
              'Domain name label should be at least 1 character long.',
            LABEL_INVALID_CHARS:
              'Domain name label can only contain alphanumeric characters or dashes.',
          }),
          (r.validate = function (n) {
            var o = t.toASCII(n);
            if (o.length < 1) return 'DOMAIN_TOO_SHORT';
            if (o.length > 255) return 'DOMAIN_TOO_LONG';
            for (var a = o.split('.'), s, i = 0; i < a.length; ++i) {
              if (((s = a[i]), !s.length)) return 'LABEL_TOO_SHORT';
              if (s.length > 63) return 'LABEL_TOO_LONG';
              if (s.charAt(0) === '-') return 'LABEL_STARTS_WITH_DASH';
              if (s.charAt(s.length - 1) === '-') return 'LABEL_ENDS_WITH_DASH';
              if (!/^[a-z0-9\-]+$/.test(s)) return 'LABEL_INVALID_CHARS';
            }
          }),
          (e.parse = function (n) {
            if (typeof n != 'string')
              throw new TypeError('Domain name must be a string.');
            var o = n.slice(0).toLowerCase();
            o.charAt(o.length - 1) === '.' && (o = o.slice(0, o.length - 1));
            var a = r.validate(o);
            if (a)
              return { input: n, error: { message: e.errorCodes[a], code: a } };
            var s = {
                input: n,
                tld: null,
                sld: null,
                domain: null,
                subdomain: null,
                listed: !1,
              },
              i = o.split('.');
            if (i[i.length - 1] === 'local') return s;
            var u = function () {
                return (
                  /xn--/.test(o) &&
                    (s.domain && (s.domain = t.toASCII(s.domain)),
                    s.subdomain && (s.subdomain = t.toASCII(s.subdomain))),
                  s
                );
              },
              l = r.findRule(o);
            if (!l)
              return i.length < 2
                ? s
                : ((s.tld = i.pop()),
                  (s.sld = i.pop()),
                  (s.domain = [s.sld, s.tld].join('.')),
                  i.length && (s.subdomain = i.pop()),
                  u());
            s.listed = !0;
            var c = l.suffix.split('.'),
              p = i.slice(0, i.length - c.length);
            return (
              l.exception && p.push(c.shift()),
              (s.tld = c.join('.')),
              !p.length ||
                (l.wildcard && (c.unshift(p.pop()), (s.tld = c.join('.'))),
                !p.length) ||
                ((s.sld = p.pop()),
                (s.domain = [s.sld, s.tld].join('.')),
                p.length && (s.subdomain = p.join('.'))),
              u()
            );
          }),
          (e.get = function (n) {
            return (n && e.parse(n).domain) || null;
          }),
          (e.isValid = function (n) {
            var o = e.parse(n);
            return !!(o.domain && o.listed);
          });
      },
    }),
    Mh = Oe({
      'node_modules/tough-cookie/lib/pubsuffix-psl.js'(e) {
        'use strict';
        var t = D0(),
          r = ['local', 'example', 'invalid', 'localhost', 'test'],
          n = ['localhost', 'invalid'];
        function o(a, s = {}) {
          let i = a.split('.'),
            u = i[i.length - 1],
            l = !!s.allowSpecialUseDomain,
            c = !!s.ignoreError;
          if (l && r.includes(u)) {
            if (i.length > 1) return `${i[i.length - 2]}.${u}`;
            if (n.includes(u)) return `${u}`;
          }
          if (!c && r.includes(u))
            throw new Error(
              `Cookie has domain set to the public suffix "${u}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`,
            );
          return t.get(a);
        }
        e.getPublicSuffix = o;
      },
    }),
    qh = Oe({
      'node_modules/tough-cookie/lib/store.js'(e) {
        'use strict';
        var t = class {
          constructor() {
            this.synchronous = !1;
          }
          findCookie(r, n, o, a) {
            throw new Error('findCookie is not implemented');
          }
          findCookies(r, n, o, a) {
            throw new Error('findCookies is not implemented');
          }
          putCookie(r, n) {
            throw new Error('putCookie is not implemented');
          }
          updateCookie(r, n, o) {
            throw new Error('updateCookie is not implemented');
          }
          removeCookie(r, n, o, a) {
            throw new Error('removeCookie is not implemented');
          }
          removeCookies(r, n, o) {
            throw new Error('removeCookies is not implemented');
          }
          removeAllCookies(r) {
            throw new Error('removeAllCookies is not implemented');
          }
          getAllCookies(r) {
            throw new Error(
              'getAllCookies is not implemented (therefore jar cannot be serialized)',
            );
          }
        };
        e.Store = t;
      },
    }),
    Bh = Oe({
      'node_modules/universalify/index.js'(e) {
        'use strict';
        (e.fromCallback = function (t) {
          return Object.defineProperty(
            function () {
              if (typeof arguments[arguments.length - 1] == 'function')
                t.apply(this, arguments);
              else
                return new Promise((r, n) => {
                  (arguments[arguments.length] = (o, a) => {
                    if (o) return n(o);
                    r(a);
                  }),
                    arguments.length++,
                    t.apply(this, arguments);
                });
            },
            'name',
            { value: t.name },
          );
        }),
          (e.fromPromise = function (t) {
            return Object.defineProperty(
              function () {
                let r = arguments[arguments.length - 1];
                if (typeof r != 'function') return t.apply(this, arguments);
                delete arguments[arguments.length - 1],
                  arguments.length--,
                  t.apply(this, arguments).then((n) => r(null, n), r);
              },
              'name',
              { value: t.name },
            );
          });
      },
    }),
    Uh = Oe({
      'node_modules/tough-cookie/lib/permuteDomain.js'(e) {
        'use strict';
        var t = Mh();
        function r(n, o) {
          let a = t.getPublicSuffix(n, { allowSpecialUseDomain: o });
          if (!a) return null;
          if (a == n) return [n];
          n.slice(-1) == '.' && (n = n.slice(0, -1));
          let i = n
              .slice(0, -(a.length + 1))
              .split('.')
              .reverse(),
            u = a,
            l = [u];
          for (; i.length; ) (u = `${i.shift()}.${u}`), l.push(u);
          return l;
        }
        e.permuteDomain = r;
      },
    }),
    $h = Oe({
      'node_modules/tough-cookie/lib/pathMatch.js'(e) {
        'use strict';
        function t(r, n) {
          return (
            n === r ||
            (r.indexOf(n) === 0 &&
              (n.substr(-1) === '/' || r.substr(n.length, 1) === '/'))
          );
        }
        e.pathMatch = t;
      },
    }),
    Hh = Oe({
      'node_modules/tough-cookie/lib/utilHelper.js'(e) {
        function t() {
          try {
            return z0('util');
          } catch {
            return null;
          }
        }
        function r() {
          return Symbol.for('nodejs.util.inspect.custom');
        }
        function n(o) {
          let s = (o.requireUtil || t)();
          return s ? s.inspect.custom : null;
        }
        (e.getUtilInspect = function (a, s = {}) {
          let u = (s.requireUtil || t)();
          return function (c, p, g) {
            return u ? u.inspect(c, p, g) : a(c);
          };
        }),
          (e.getCustomInspectSymbol = function (a = {}) {
            return (a.lookupCustomInspectSymbol || r)() || n(a);
          });
      },
    }),
    I0 = Oe({
      'node_modules/tough-cookie/lib/memstore.js'(e) {
        'use strict';
        var { fromCallback: t } = Bh(),
          r = qh().Store,
          n = Uh().permuteDomain,
          o = $h().pathMatch,
          { getCustomInspectSymbol: a, getUtilInspect: s } = Hh(),
          i = class extends r {
            constructor() {
              super(),
                (this.synchronous = !0),
                (this.idx = Object.create(null));
              let p = a();
              p && (this[p] = this.inspect);
            }
            inspect() {
              return `{ idx: ${{ inspect: s(u) }.inspect(this.idx, !1, 2)} }`;
            }
            findCookie(p, g, k, h) {
              return !this.idx[p] || !this.idx[p][g]
                ? h(null, void 0)
                : h(null, this.idx[p][g][k] || null);
            }
            findCookies(p, g, k, h) {
              let j = [];
              if ((typeof k == 'function' && ((h = k), (k = !0)), !p))
                return h(null, []);
              let w;
              g
                ? (w = function (y) {
                    Object.keys(y).forEach((b) => {
                      if (o(g, b)) {
                        let C = y[b];
                        for (let x in C) j.push(C[x]);
                      }
                    });
                  })
                : (w = function (y) {
                    for (let b in y) {
                      let C = y[b];
                      for (let x in C) j.push(C[x]);
                    }
                  });
              let d = n(p, k) || [p],
                m = this.idx;
              d.forEach((f) => {
                let y = m[f];
                y && w(y);
              }),
                h(null, j);
            }
            putCookie(p, g) {
              this.idx[p.domain] || (this.idx[p.domain] = Object.create(null)),
                this.idx[p.domain][p.path] ||
                  (this.idx[p.domain][p.path] = Object.create(null)),
                (this.idx[p.domain][p.path][p.key] = p),
                g(null);
            }
            updateCookie(p, g, k) {
              this.putCookie(g, k);
            }
            removeCookie(p, g, k, h) {
              this.idx[p] &&
                this.idx[p][g] &&
                this.idx[p][g][k] &&
                delete this.idx[p][g][k],
                h(null);
            }
            removeCookies(p, g, k) {
              return (
                this.idx[p] && (g ? delete this.idx[p][g] : delete this.idx[p]),
                k(null)
              );
            }
            removeAllCookies(p) {
              return (this.idx = Object.create(null)), p(null);
            }
            getAllCookies(p) {
              let g = [],
                k = this.idx;
              Object.keys(k).forEach((j) => {
                Object.keys(k[j]).forEach((d) => {
                  Object.keys(k[j][d]).forEach((f) => {
                    f !== null && g.push(k[j][d][f]);
                  });
                });
              }),
                g.sort(
                  (j, w) => (j.creationIndex || 0) - (w.creationIndex || 0),
                ),
                p(null, g);
            }
          };
        [
          'findCookie',
          'findCookies',
          'putCookie',
          'updateCookie',
          'removeCookie',
          'removeCookies',
          'removeAllCookies',
          'getAllCookies',
        ].forEach((p) => {
          i.prototype[p] = t(i.prototype[p]);
        }),
          (e.MemoryCookieStore = i);
        function u(p) {
          let g = Object.keys(p);
          if (g.length === 0) return '[Object: null prototype] {}';
          let k = `[Object: null prototype] {
`;
          return (
            Object.keys(p).forEach((h, j) => {
              (k += l(h, p[h])),
                j < g.length - 1 && (k += ','),
                (k += `
`);
            }),
            (k += '}'),
            k
          );
        }
        function l(p, g) {
          let k = '  ',
            h = `${k}'${p}': [Object: null prototype] {
`;
          return (
            Object.keys(g).forEach((j, w, d) => {
              (h += c(j, g[j])),
                w < d.length - 1 && (h += ','),
                (h += `
`);
            }),
            (h += `${k}}`),
            h
          );
        }
        function c(p, g) {
          let k = '    ',
            h = `${k}'${p}': [Object: null prototype] {
`;
          return (
            Object.keys(g).forEach((j, w, d) => {
              let m = g[j];
              (h += `      ${j}: ${m.inspect()}`),
                w < d.length - 1 && (h += ','),
                (h += `
`);
            }),
            (h += `${k}}`),
            h
          );
        }
        e.inspectFallback = u;
      },
    }),
    F0 = Oe({
      'node_modules/tough-cookie/lib/validators.js'(e) {
        'use strict';
        var t = Object.prototype.toString;
        function r(k) {
          return typeof k == 'function';
        }
        function n(k) {
          return s(k) && k !== '';
        }
        function o(k) {
          return u(k, Date) && c(k.getTime());
        }
        function a(k) {
          return k === '' || (k instanceof String && k.toString() === '');
        }
        function s(k) {
          return typeof k == 'string' || k instanceof String;
        }
        function i(k) {
          return t.call(k) === '[object Object]';
        }
        function u(k, h) {
          try {
            return k instanceof h;
          } catch {
            return !1;
          }
        }
        function l(k) {
          return (
            n(k) ||
            (i(k) && 'hostname' in k && 'pathname' in k && 'protocol' in k) ||
            u(k, URL)
          );
        }
        function c(k) {
          return typeof k == 'number' && k % 1 === 0;
        }
        function p(k, h, j) {
          if (
            (r(h) || ((j = h), (h = null)),
            i(j) || (j = { Error: 'Failed Check' }),
            !k)
          )
            if (h) h(new g(j));
            else throw new g(j);
        }
        var g = class extends Error {
          constructor(...k) {
            super(...k);
          }
        };
        (e.ParameterError = g),
          (e.isFunction = r),
          (e.isNonEmptyString = n),
          (e.isDate = o),
          (e.isEmptyString = a),
          (e.isString = s),
          (e.isObject = i),
          (e.isUrlStringOrObject = l),
          (e.validate = p);
      },
    }),
    N0 = Oe({
      'node_modules/tough-cookie/lib/version.js'(e, t) {
        t.exports = '4.1.4';
      },
    }),
    M0 = Oe({
      'node_modules/tough-cookie/lib/cookie.js'(e) {
        'use strict';
        var t = Nh(),
          r = L0(),
          n = Mh(),
          o = qh().Store,
          a = I0().MemoryCookieStore,
          s = $h().pathMatch,
          i = F0(),
          u = N0(),
          { fromCallback: l } = Bh(),
          { getCustomInspectSymbol: c } = Hh(),
          p = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,
          g = /[\x00-\x1F]/,
          k = [
            `
`,
            '\r',
            '\0',
          ],
          h = /[\x20-\x3A\x3C-\x7E]+/,
          j = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,
          w = {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11,
          },
          d = 2147483647e3,
          m = 0,
          f =
            'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
        function y(_) {
          i.validate(i.isNonEmptyString(_), _);
          let v = String(_).toLowerCase();
          return v === 'none' || v === 'lax' || v === 'strict' ? v : null;
        }
        var b = Object.freeze({
            SILENT: 'silent',
            STRICT: 'strict',
            DISABLED: 'unsafe-disabled',
          }),
          C =
            /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/,
          x = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`
            .replace(/\s*\/\/.*$/gm, '')
            .replace(/\n/g, '')
            .trim(),
          R = new RegExp(`^${x}$`);
        function L(_, v, E, P) {
          let A = 0;
          for (; A < _.length; ) {
            let F = _.charCodeAt(A);
            if (F <= 47 || F >= 58) break;
            A++;
          }
          return A < v || A > E || (!P && A != _.length)
            ? null
            : parseInt(_.substr(0, A), 10);
        }
        function T(_) {
          let v = _.split(':'),
            E = [0, 0, 0];
          if (v.length !== 3) return null;
          for (let P = 0; P < 3; P++) {
            let A = P == 2,
              F = L(v[P], 1, 2, A);
            if (F === null) return null;
            E[P] = F;
          }
          return E;
        }
        function I(_) {
          _ = String(_).substr(0, 3).toLowerCase();
          let v = w[_];
          return v >= 0 ? v : null;
        }
        function Z(_) {
          if (!_) return;
          let v = _.split(j);
          if (!v) return;
          let E = null,
            P = null,
            A = null,
            F = null,
            B = null,
            V = null;
          for (let ue = 0; ue < v.length; ue++) {
            let pe = v[ue].trim();
            if (!pe.length) continue;
            let U;
            if (A === null && ((U = T(pe)), U)) {
              (E = U[0]), (P = U[1]), (A = U[2]);
              continue;
            }
            if (F === null && ((U = L(pe, 1, 2, !0)), U !== null)) {
              F = U;
              continue;
            }
            if (B === null && ((U = I(pe)), U !== null)) {
              B = U;
              continue;
            }
            V === null &&
              ((U = L(pe, 2, 4, !0)),
              U !== null &&
                ((V = U),
                V >= 70 && V <= 99
                  ? (V += 1900)
                  : V >= 0 && V <= 69 && (V += 2e3)));
          }
          if (
            !(
              F === null ||
              B === null ||
              V === null ||
              A === null ||
              F < 1 ||
              F > 31 ||
              V < 1601 ||
              E > 23 ||
              P > 59 ||
              A > 59
            )
          )
            return new Date(Date.UTC(V, B, F, E, P, A));
        }
        function jt(_) {
          return i.validate(i.isDate(_), _), _.toUTCString();
        }
        function it(_) {
          return _ == null
            ? null
            : ((_ = _.trim().replace(/^\./, '')),
              R.test(_) && (_ = _.replace('[', '').replace(']', '')),
              t && /[^\u0001-\u007f]/.test(_) && (_ = t.toASCII(_)),
              _.toLowerCase());
        }
        function z(_, v, E) {
          if (_ == null || v == null) return null;
          if ((E !== !1 && ((_ = it(_)), (v = it(v))), _ == v)) return !0;
          let P = _.lastIndexOf(v);
          return !(
            P <= 0 ||
            _.length !== v.length + P ||
            _.substr(P - 1, 1) !== '.' ||
            C.test(_)
          );
        }
        function q(_) {
          if (!_ || _.substr(0, 1) !== '/') return '/';
          if (_ === '/') return _;
          let v = _.lastIndexOf('/');
          return v === 0 ? '/' : _.slice(0, v);
        }
        function ie(_) {
          if (i.isEmptyString(_)) return _;
          for (let v = 0; v < k.length; v++) {
            let E = _.indexOf(k[v]);
            E !== -1 && (_ = _.substr(0, E));
          }
          return _;
        }
        function W(_, v) {
          (_ = ie(_)), i.validate(i.isString(_), _);
          let E = _.indexOf('=');
          if (v) E === 0 && ((_ = _.substr(1)), (E = _.indexOf('=')));
          else if (E <= 0) return;
          let P, A;
          if (
            (E <= 0
              ? ((P = ''), (A = _.trim()))
              : ((P = _.substr(0, E).trim()), (A = _.substr(E + 1).trim())),
            g.test(P) || g.test(A))
          )
            return;
          let F = new ee();
          return (F.key = P), (F.value = A), F;
        }
        function ae(_, v) {
          if (
            ((!v || typeof v != 'object') && (v = {}),
            i.isEmptyString(_) || !i.isString(_))
          )
            return null;
          _ = _.trim();
          let E = _.indexOf(';'),
            P = E === -1 ? _ : _.substr(0, E),
            A = W(P, !!v.loose);
          if (!A) return;
          if (E === -1) return A;
          let F = _.slice(E + 1).trim();
          if (F.length === 0) return A;
          let B = F.split(';');
          for (; B.length; ) {
            let V = B.shift().trim();
            if (V.length === 0) continue;
            let ue = V.indexOf('='),
              pe,
              U;
            switch (
              (ue === -1
                ? ((pe = V), (U = null))
                : ((pe = V.substr(0, ue)), (U = V.substr(ue + 1))),
              (pe = pe.trim().toLowerCase()),
              U && (U = U.trim()),
              pe)
            ) {
              case 'expires':
                if (U) {
                  let lt = Z(U);
                  lt && (A.expires = lt);
                }
                break;
              case 'max-age':
                if (U && /^-?[0-9]+$/.test(U)) {
                  let lt = parseInt(U, 10);
                  A.setMaxAge(lt);
                }
                break;
              case 'domain':
                if (U) {
                  let lt = U.trim().replace(/^\./, '');
                  lt && (A.domain = lt.toLowerCase());
                }
                break;
              case 'path':
                A.path = U && U[0] === '/' ? U : null;
                break;
              case 'secure':
                A.secure = !0;
                break;
              case 'httponly':
                A.httpOnly = !0;
                break;
              case 'samesite':
                switch (U ? U.toLowerCase() : '') {
                  case 'strict':
                    A.sameSite = 'strict';
                    break;
                  case 'lax':
                    A.sameSite = 'lax';
                    break;
                  case 'none':
                    A.sameSite = 'none';
                    break;
                  default:
                    A.sameSite = void 0;
                    break;
                }
                break;
              default:
                (A.extensions = A.extensions || []), A.extensions.push(V);
                break;
            }
          }
          return A;
        }
        function Ee(_) {
          return (
            i.validate(i.isObject(_), _),
            !_.key.startsWith('__Secure-') || _.secure
          );
        }
        function ut(_) {
          return (
            i.validate(i.isObject(_)),
            !_.key.startsWith('__Host-') ||
              (_.secure && _.hostOnly && _.path != null && _.path === '/')
          );
        }
        function xe(_) {
          let v;
          try {
            v = JSON.parse(_);
          } catch (E) {
            return E;
          }
          return v;
        }
        function Se(_) {
          if (!_ || i.isEmptyString(_)) return null;
          let v;
          if (typeof _ == 'string') {
            if (((v = xe(_)), v instanceof Error)) return null;
          } else v = _;
          let E = new ee();
          for (let P = 0; P < ee.serializableProperties.length; P++) {
            let A = ee.serializableProperties[P];
            v[A] === void 0 ||
              v[A] === Te[A] ||
              (A === 'expires' || A === 'creation' || A === 'lastAccessed'
                ? v[A] === null
                  ? (E[A] = null)
                  : (E[A] = v[A] == 'Infinity' ? 'Infinity' : new Date(v[A]))
                : (E[A] = v[A]));
          }
          return E;
        }
        function Ye(_, v) {
          i.validate(i.isObject(_), _), i.validate(i.isObject(v), v);
          let E = 0,
            P = _.path ? _.path.length : 0;
          if (((E = (v.path ? v.path.length : 0) - P), E !== 0)) return E;
          let F = _.creation ? _.creation.getTime() : d,
            B = v.creation ? v.creation.getTime() : d;
          return (
            (E = F - B), E !== 0 || (E = _.creationIndex - v.creationIndex), E
          );
        }
        function He(_) {
          if ((i.validate(i.isString(_)), _ === '/')) return ['/'];
          let v = [_];
          for (; _.length > 1; ) {
            let E = _.lastIndexOf('/');
            if (E === 0) break;
            (_ = _.substr(0, E)), v.push(_);
          }
          return v.push('/'), v;
        }
        function Ze(_) {
          if (_ instanceof Object) return _;
          try {
            _ = decodeURI(_);
          } catch {}
          return r(_);
        }
        var Te = {
            key: '',
            value: '',
            expires: 'Infinity',
            maxAge: null,
            domain: null,
            path: null,
            secure: !1,
            httpOnly: !1,
            extensions: null,
            hostOnly: null,
            pathIsDefault: null,
            creation: null,
            lastAccessed: null,
            sameSite: void 0,
          },
          ee = class si {
            constructor(v = {}) {
              let E = c();
              E && (this[E] = this.inspect),
                Object.assign(this, Te, v),
                (this.creation = this.creation || new Date()),
                Object.defineProperty(this, 'creationIndex', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: ++si.cookiesCreated,
                });
            }
            inspect() {
              let v = Date.now(),
                E = this.hostOnly != null ? this.hostOnly : '?',
                P = this.creation ? `${v - this.creation.getTime()}ms` : '?',
                A = this.lastAccessed
                  ? `${v - this.lastAccessed.getTime()}ms`
                  : '?';
              return `Cookie="${this.toString()}; hostOnly=${E}; aAge=${A}; cAge=${P}"`;
            }
            toJSON() {
              let v = {};
              for (let E of si.serializableProperties)
                this[E] !== Te[E] &&
                  (E === 'expires' || E === 'creation' || E === 'lastAccessed'
                    ? this[E] === null
                      ? (v[E] = null)
                      : (v[E] =
                          this[E] == 'Infinity'
                            ? 'Infinity'
                            : this[E].toISOString())
                    : E === 'maxAge'
                      ? this[E] !== null &&
                        (v[E] =
                          this[E] == 1 / 0 || this[E] == -1 / 0
                            ? this[E].toString()
                            : this[E])
                      : this[E] !== Te[E] && (v[E] = this[E]));
              return v;
            }
            clone() {
              return Se(this.toJSON());
            }
            validate() {
              if (
                !p.test(this.value) ||
                (this.expires != 1 / 0 &&
                  !(this.expires instanceof Date) &&
                  !Z(this.expires)) ||
                (this.maxAge != null && this.maxAge <= 0) ||
                (this.path != null && !h.test(this.path))
              )
                return !1;
              let v = this.cdomain();
              return !(v && (v.match(/\.$/) || n.getPublicSuffix(v) == null));
            }
            setExpires(v) {
              v instanceof Date
                ? (this.expires = v)
                : (this.expires = Z(v) || 'Infinity');
            }
            setMaxAge(v) {
              v === 1 / 0 || v === -1 / 0
                ? (this.maxAge = v.toString())
                : (this.maxAge = v);
            }
            cookieString() {
              let v = this.value;
              return (
                v == null && (v = ''), this.key === '' ? v : `${this.key}=${v}`
              );
            }
            toString() {
              let v = this.cookieString();
              if (
                (this.expires != 1 / 0 &&
                  (this.expires instanceof Date
                    ? (v += `; Expires=${jt(this.expires)}`)
                    : (v += `; Expires=${this.expires}`)),
                this.maxAge != null &&
                  this.maxAge != 1 / 0 &&
                  (v += `; Max-Age=${this.maxAge}`),
                this.domain &&
                  !this.hostOnly &&
                  (v += `; Domain=${this.domain}`),
                this.path && (v += `; Path=${this.path}`),
                this.secure && (v += '; Secure'),
                this.httpOnly && (v += '; HttpOnly'),
                this.sameSite && this.sameSite !== 'none')
              ) {
                let E = si.sameSiteCanonical[this.sameSite.toLowerCase()];
                v += `; SameSite=${E || this.sameSite}`;
              }
              return (
                this.extensions &&
                  this.extensions.forEach((E) => {
                    v += `; ${E}`;
                  }),
                v
              );
            }
            TTL(v) {
              if (this.maxAge != null)
                return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
              let E = this.expires;
              return E != 1 / 0
                ? (E instanceof Date || (E = Z(E) || 1 / 0),
                  E == 1 / 0 ? 1 / 0 : E.getTime() - (v || Date.now()))
                : 1 / 0;
            }
            expiryTime(v) {
              if (this.maxAge != null) {
                let E = v || this.creation || new Date(),
                  P = this.maxAge <= 0 ? -1 / 0 : this.maxAge * 1e3;
                return E.getTime() + P;
              }
              return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
            }
            expiryDate(v) {
              let E = this.expiryTime(v);
              return E == 1 / 0
                ? new Date(d)
                : E == -1 / 0
                  ? new Date(m)
                  : new Date(E);
            }
            isPersistent() {
              return this.maxAge != null || this.expires != 1 / 0;
            }
            canonicalizedDomain() {
              return this.domain == null ? null : it(this.domain);
            }
            cdomain() {
              return this.canonicalizedDomain();
            }
          };
        (ee.cookiesCreated = 0),
          (ee.parse = ae),
          (ee.fromJSON = Se),
          (ee.serializableProperties = Object.keys(Te)),
          (ee.sameSiteLevel = { strict: 3, lax: 2, none: 1 }),
          (ee.sameSiteCanonical = { strict: 'Strict', lax: 'Lax' });
        function Jt(_) {
          if (_ != null) {
            let v = _.toLowerCase();
            switch (v) {
              case b.STRICT:
              case b.SILENT:
              case b.DISABLED:
                return v;
            }
          }
          return b.SILENT;
        }
        var bt = class ii {
          constructor(v, E = { rejectPublicSuffixes: !0 }) {
            typeof E == 'boolean' && (E = { rejectPublicSuffixes: E }),
              i.validate(i.isObject(E), E),
              (this.rejectPublicSuffixes = E.rejectPublicSuffixes),
              (this.enableLooseMode = !!E.looseMode),
              (this.allowSpecialUseDomain =
                typeof E.allowSpecialUseDomain == 'boolean'
                  ? E.allowSpecialUseDomain
                  : !0),
              (this.store = v || new a()),
              (this.prefixSecurity = Jt(E.prefixSecurity)),
              (this._cloneSync = Kt('clone')),
              (this._importCookiesSync = Kt('_importCookies')),
              (this.getCookiesSync = Kt('getCookies')),
              (this.getCookieStringSync = Kt('getCookieString')),
              (this.getSetCookieStringsSync = Kt('getSetCookieStrings')),
              (this.removeAllCookiesSync = Kt('removeAllCookies')),
              (this.setCookieSync = Kt('setCookie')),
              (this.serializeSync = Kt('serialize'));
          }
          setCookie(v, E, P, A) {
            i.validate(i.isUrlStringOrObject(E), A, P);
            let F;
            if (i.isFunction(E))
              return (A = E), A(new Error('No URL was specified'));
            let B = Ze(E);
            if (
              (i.isFunction(P) && ((A = P), (P = {})),
              i.validate(i.isFunction(A), A),
              !i.isNonEmptyString(v) &&
                !i.isObject(v) &&
                v instanceof String &&
                v.length == 0)
            )
              return A(null);
            let V = it(B.hostname),
              ue = P.loose || this.enableLooseMode,
              pe = null;
            if (P.sameSiteContext && ((pe = y(P.sameSiteContext)), !pe))
              return A(new Error(f));
            if (typeof v == 'string' || v instanceof String) {
              if (((v = ee.parse(v, { loose: ue })), !v))
                return (
                  (F = new Error('Cookie failed to parse')),
                  A(P.ignoreError ? null : F)
                );
            } else if (!(v instanceof ee))
              return (
                (F = new Error(
                  'First argument to setCookie must be a Cookie object or string',
                )),
                A(P.ignoreError ? null : F)
              );
            let U = P.now || new Date();
            if (
              this.rejectPublicSuffixes &&
              v.domain &&
              n.getPublicSuffix(v.cdomain(), {
                allowSpecialUseDomain: this.allowSpecialUseDomain,
                ignoreError: P.ignoreError,
              }) == null &&
              !R.test(v.domain)
            )
              return (
                (F = new Error('Cookie has domain set to a public suffix')),
                A(P.ignoreError ? null : F)
              );
            if (v.domain) {
              if (!z(V, v.cdomain(), !1))
                return (
                  (F = new Error(
                    `Cookie not in this host's domain. Cookie:${v.cdomain()} Request:${V}`,
                  )),
                  A(P.ignoreError ? null : F)
                );
              v.hostOnly == null && (v.hostOnly = !1);
            } else (v.hostOnly = !0), (v.domain = V);
            if (
              ((!v.path || v.path[0] !== '/') &&
                ((v.path = q(B.pathname)), (v.pathIsDefault = !0)),
              P.http === !1 && v.httpOnly)
            )
              return (
                (F = new Error(
                  "Cookie is HttpOnly and this isn't an HTTP API",
                )),
                A(P.ignoreError ? null : F)
              );
            if (
              v.sameSite !== 'none' &&
              v.sameSite !== void 0 &&
              pe &&
              pe === 'none'
            )
              return (
                (F = new Error(
                  'Cookie is SameSite but this is a cross-origin request',
                )),
                A(P.ignoreError ? null : F)
              );
            let ga = this.prefixSecurity === b.SILENT;
            if (!(this.prefixSecurity === b.DISABLED)) {
              let J = !1,
                fe;
              if (
                (Ee(v)
                  ? ut(v) ||
                    ((J = !0),
                    (fe =
                      "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"))
                  : ((J = !0),
                    (fe =
                      'Cookie has __Secure prefix but Secure attribute is not set')),
                J)
              )
                return A(P.ignoreError || ga ? null : new Error(fe));
            }
            let Xt = this.store;
            Xt.updateCookie ||
              (Xt.updateCookie = function (J, fe, Kr) {
                this.putCookie(fe, Kr);
              });
            function Si(J, fe) {
              if (J) return A(J);
              let Kr = function (ya) {
                if (ya) return A(ya);
                A(null, v);
              };
              if (fe) {
                if (P.http === !1 && fe.httpOnly)
                  return (
                    (J = new Error(
                      "old Cookie is HttpOnly and this isn't an HTTP API",
                    )),
                    A(P.ignoreError ? null : J)
                  );
                (v.creation = fe.creation),
                  (v.creationIndex = fe.creationIndex),
                  (v.lastAccessed = U),
                  Xt.updateCookie(fe, v, Kr);
              } else (v.creation = v.lastAccessed = U), Xt.putCookie(v, Kr);
            }
            Xt.findCookie(v.domain, v.path, v.key, Si);
          }
          getCookies(v, E, P) {
            i.validate(i.isUrlStringOrObject(v), P, v);
            let A = Ze(v);
            i.isFunction(E) && ((P = E), (E = {})),
              i.validate(i.isObject(E), P, E),
              i.validate(i.isFunction(P), P);
            let F = it(A.hostname),
              B = A.pathname || '/',
              V = E.secure;
            V == null &&
              A.protocol &&
              (A.protocol == 'https:' || A.protocol == 'wss:') &&
              (V = !0);
            let ue = 0;
            if (E.sameSiteContext) {
              let J = y(E.sameSiteContext);
              if (((ue = ee.sameSiteLevel[J]), !ue)) return P(new Error(f));
            }
            let pe = E.http;
            pe == null && (pe = !0);
            let U = E.now || Date.now(),
              ga = E.expire !== !1,
              lt = !!E.allPaths,
              Xt = this.store;
            function Si(J) {
              if (J.hostOnly) {
                if (J.domain != F) return !1;
              } else if (!z(F, J.domain, !1)) return !1;
              return (!lt && !s(B, J.path)) ||
                (J.secure && !V) ||
                (J.httpOnly && !pe) ||
                (ue && ee.sameSiteLevel[J.sameSite || 'none'] > ue)
                ? !1
                : ga && J.expiryTime() <= U
                  ? (Xt.removeCookie(J.domain, J.path, J.key, () => {}), !1)
                  : !0;
            }
            Xt.findCookies(
              F,
              lt ? null : B,
              this.allowSpecialUseDomain,
              (J, fe) => {
                if (J) return P(J);
                (fe = fe.filter(Si)), E.sort !== !1 && (fe = fe.sort(Ye));
                let Kr = new Date();
                for (let ya of fe) ya.lastAccessed = Kr;
                P(null, fe);
              },
            );
          }
          getCookieString(...v) {
            let E = v.pop();
            i.validate(i.isFunction(E), E);
            let P = function (A, F) {
              A
                ? E(A)
                : E(
                    null,
                    F.sort(Ye)
                      .map((B) => B.cookieString())
                      .join('; '),
                  );
            };
            v.push(P), this.getCookies.apply(this, v);
          }
          getSetCookieStrings(...v) {
            let E = v.pop();
            i.validate(i.isFunction(E), E);
            let P = function (A, F) {
              A
                ? E(A)
                : E(
                    null,
                    F.map((B) => B.toString()),
                  );
            };
            v.push(P), this.getCookies.apply(this, v);
          }
          serialize(v) {
            i.validate(i.isFunction(v), v);
            let E = this.store.constructor.name;
            i.isObject(E) && (E = null);
            let P = {
              version: `tough-cookie@${u}`,
              storeType: E,
              rejectPublicSuffixes: !!this.rejectPublicSuffixes,
              enableLooseMode: !!this.enableLooseMode,
              allowSpecialUseDomain: !!this.allowSpecialUseDomain,
              prefixSecurity: Jt(this.prefixSecurity),
              cookies: [],
            };
            if (
              !(
                this.store.getAllCookies &&
                typeof this.store.getAllCookies == 'function'
              )
            )
              return v(
                new Error(
                  'store does not support getAllCookies and cannot be serialized',
                ),
              );
            this.store.getAllCookies((A, F) =>
              A
                ? v(A)
                : ((P.cookies = F.map(
                    (B) => (
                      (B = B instanceof ee ? B.toJSON() : B),
                      delete B.creationIndex,
                      B
                    ),
                  )),
                  v(null, P)),
            );
          }
          toJSON() {
            return this.serializeSync();
          }
          _importCookies(v, E) {
            let P = v.cookies;
            if (!P || !Array.isArray(P))
              return E(new Error('serialized jar has no cookies array'));
            P = P.slice();
            let A = (F) => {
              if (F) return E(F);
              if (!P.length) return E(F, this);
              let B;
              try {
                B = Se(P.shift());
              } catch (V) {
                return E(V);
              }
              if (B === null) return A(null);
              this.store.putCookie(B, A);
            };
            A();
          }
          clone(v, E) {
            arguments.length === 1 && ((E = v), (v = null)),
              this.serialize((P, A) => {
                if (P) return E(P);
                ii.deserialize(A, v, E);
              });
          }
          cloneSync(v) {
            if (arguments.length === 0) return this._cloneSync();
            if (!v.synchronous)
              throw new Error(
                'CookieJar clone destination store is not synchronous; use async API instead.',
              );
            return this._cloneSync(v);
          }
          removeAllCookies(v) {
            i.validate(i.isFunction(v), v);
            let E = this.store;
            if (
              typeof E.removeAllCookies == 'function' &&
              E.removeAllCookies !== o.prototype.removeAllCookies
            )
              return E.removeAllCookies(v);
            E.getAllCookies((P, A) => {
              if (P) return v(P);
              if (A.length === 0) return v(null);
              let F = 0,
                B = [];
              function V(ue) {
                if ((ue && B.push(ue), F++, F === A.length))
                  return v(B.length ? B[0] : null);
              }
              A.forEach((ue) => {
                E.removeCookie(ue.domain, ue.path, ue.key, V);
              });
            });
          }
          static deserialize(v, E, P) {
            arguments.length !== 3 && ((P = E), (E = null)),
              i.validate(i.isFunction(P), P);
            let A;
            if (typeof v == 'string') {
              if (((A = xe(v)), A instanceof Error)) return P(A);
            } else A = v;
            let F = new ii(E, {
              rejectPublicSuffixes: A.rejectPublicSuffixes,
              looseMode: A.enableLooseMode,
              allowSpecialUseDomain: A.allowSpecialUseDomain,
              prefixSecurity: A.prefixSecurity,
            });
            F._importCookies(A, (B) => {
              if (B) return P(B);
              P(null, F);
            });
          }
          static deserializeSync(v, E) {
            let P = typeof v == 'string' ? JSON.parse(v) : v,
              A = new ii(E, {
                rejectPublicSuffixes: P.rejectPublicSuffixes,
                looseMode: P.enableLooseMode,
              });
            if (!A.store.synchronous)
              throw new Error(
                'CookieJar store is not synchronous; use async API instead.',
              );
            return A._importCookiesSync(P), A;
          }
        };
        (bt.fromJSON = bt.deserializeSync),
          [
            '_importCookies',
            'clone',
            'getCookies',
            'getCookieString',
            'getSetCookieStrings',
            'removeAllCookies',
            'serialize',
            'setCookie',
          ].forEach((_) => {
            bt.prototype[_] = l(bt.prototype[_]);
          }),
          (bt.deserialize = l(bt.deserialize));
        function Kt(_) {
          return function (...v) {
            if (!this.store.synchronous)
              throw new Error(
                'CookieJar store is not synchronous; use async API instead.',
              );
            let E, P;
            if (
              (this[_](...v, (A, F) => {
                (E = A), (P = F);
              }),
              E)
            )
              throw E;
            return P;
          };
        }
        (e.version = u),
          (e.CookieJar = bt),
          (e.Cookie = ee),
          (e.Store = o),
          (e.MemoryCookieStore = a),
          (e.parseDate = Z),
          (e.formatDate = jt),
          (e.parse = ae),
          (e.fromJSON = Se),
          (e.domainMatch = z),
          (e.defaultPath = q),
          (e.pathMatch = s),
          (e.getPublicSuffix = n.getPublicSuffix),
          (e.cookieCompare = Ye),
          (e.permuteDomain = Uh().permuteDomain),
          (e.permutePath = He),
          (e.canonicalDomain = it),
          (e.PrefixSecurityEnum = b),
          (e.ParameterError = i.ParameterError);
      },
    }),
    q0 = R0(M0(), 1),
    Wh = q0.default;
  var {
      Cookie: B0,
      CookieJar: U0,
      Store: $0,
      MemoryCookieStore: H0,
      domainMatch: W0,
      pathMatch: V0,
    } = Wh,
    xc = class extends $0 {
      storage;
      storageKey;
      constructor() {
        super(),
          Pe(
            typeof localStorage < 'u',
            'Failed to create a WebStorageCookieStore: `localStorage` is not available in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues',
          ),
          (this.synchronous = !0),
          (this.storage = localStorage),
          (this.storageKey = '__msw-cookie-store__');
      }
      findCookie(t, r, n, o) {
        try {
          let a = this.getStore(),
            s = this.filterCookiesFromList(a, { domain: t, path: r, key: n });
          o(null, s[0] || null);
        } catch (a) {
          a instanceof Error && o(a, null);
        }
      }
      findCookies(t, r, n, o) {
        if (!t) {
          o(null, []);
          return;
        }
        try {
          let a = this.getStore(),
            s = this.filterCookiesFromList(a, { domain: t, path: r });
          o(null, s);
        } catch (a) {
          a instanceof Error && o(a, []);
        }
      }
      putCookie(t, r) {
        try {
          if (t.maxAge === 0) return;
          let n = this.getStore();
          n.push(t), this.updateStore(n);
        } catch (n) {
          n instanceof Error && r(n);
        }
      }
      updateCookie(t, r, n) {
        if (r.maxAge === 0) {
          this.removeCookie(r.domain || '', r.path || '', r.key, n);
          return;
        }
        this.putCookie(r, n);
      }
      removeCookie(t, r, n, o) {
        try {
          let a = this.getStore(),
            s = this.deleteCookiesFromList(a, { domain: t, path: r, key: n });
          this.updateStore(s), o(null);
        } catch (a) {
          a instanceof Error && o(a);
        }
      }
      removeCookies(t, r, n) {
        try {
          let o = this.getStore(),
            a = this.deleteCookiesFromList(o, { domain: t, path: r });
          this.updateStore(a), n(null);
        } catch (o) {
          o instanceof Error && n(o);
        }
      }
      getAllCookies(t) {
        try {
          t(null, this.getStore());
        } catch (r) {
          r instanceof Error && t(r, []);
        }
      }
      getStore() {
        try {
          let t = this.storage.getItem(this.storageKey);
          if (t == null) return [];
          let r = JSON.parse(t),
            n = [];
          for (let o of r) {
            let a = B0.fromJSON(o);
            a != null && n.push(a);
          }
          return n;
        } catch {
          return [];
        }
      }
      updateStore(t) {
        this.storage.setItem(
          this.storageKey,
          JSON.stringify(t.map((r) => r.toJSON())),
        );
      }
      filterCookiesFromList(t, r) {
        let n = [];
        for (let o of t)
          (r.domain && !W0(r.domain, o.domain || '')) ||
            (r.path && !V0(r.path, o.path || '')) ||
            (r.key && o.key !== r.key) ||
            n.push(o);
        return n;
      }
      deleteCookiesFromList(t, r) {
        let n = this.filterCookiesFromList(t, r);
        return t.filter((o) => !n.includes(o));
      }
    },
    G0 = qn() ? new H0() : new xc(),
    ui = new U0(G0);
  var J0 = Object.create,
    Vh = Object.defineProperty,
    K0 = Object.getOwnPropertyDescriptor,
    Gh = Object.getOwnPropertyNames,
    X0 = Object.getPrototypeOf,
    Q0 = Object.prototype.hasOwnProperty,
    Jh = (e, t) =>
      function () {
        return (
          t || (0, e[Gh(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    Y0 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Gh(t))
          !Q0.call(e, o) &&
            o !== r &&
            Vh(e, o, {
              get: () => t[o],
              enumerable: !(n = K0(t, o)) || n.enumerable,
            });
      return e;
    },
    Z0 = (e, t, r) => (
      (r = e != null ? J0(X0(e)) : {}),
      Y0(
        t || !e || !e.__esModule
          ? Vh(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    eb = Jh({
      'node_modules/statuses/codes.json'(e, t) {
        t.exports = {
          100: 'Continue',
          101: 'Switching Protocols',
          102: 'Processing',
          103: 'Early Hints',
          200: 'OK',
          201: 'Created',
          202: 'Accepted',
          203: 'Non-Authoritative Information',
          204: 'No Content',
          205: 'Reset Content',
          206: 'Partial Content',
          207: 'Multi-Status',
          208: 'Already Reported',
          226: 'IM Used',
          300: 'Multiple Choices',
          301: 'Moved Permanently',
          302: 'Found',
          303: 'See Other',
          304: 'Not Modified',
          305: 'Use Proxy',
          307: 'Temporary Redirect',
          308: 'Permanent Redirect',
          400: 'Bad Request',
          401: 'Unauthorized',
          402: 'Payment Required',
          403: 'Forbidden',
          404: 'Not Found',
          405: 'Method Not Allowed',
          406: 'Not Acceptable',
          407: 'Proxy Authentication Required',
          408: 'Request Timeout',
          409: 'Conflict',
          410: 'Gone',
          411: 'Length Required',
          412: 'Precondition Failed',
          413: 'Payload Too Large',
          414: 'URI Too Long',
          415: 'Unsupported Media Type',
          416: 'Range Not Satisfiable',
          417: 'Expectation Failed',
          418: "I'm a Teapot",
          421: 'Misdirected Request',
          422: 'Unprocessable Entity',
          423: 'Locked',
          424: 'Failed Dependency',
          425: 'Too Early',
          426: 'Upgrade Required',
          428: 'Precondition Required',
          429: 'Too Many Requests',
          431: 'Request Header Fields Too Large',
          451: 'Unavailable For Legal Reasons',
          500: 'Internal Server Error',
          501: 'Not Implemented',
          502: 'Bad Gateway',
          503: 'Service Unavailable',
          504: 'Gateway Timeout',
          505: 'HTTP Version Not Supported',
          506: 'Variant Also Negotiates',
          507: 'Insufficient Storage',
          508: 'Loop Detected',
          509: 'Bandwidth Limit Exceeded',
          510: 'Not Extended',
          511: 'Network Authentication Required',
        };
      },
    }),
    tb = Jh({
      'node_modules/statuses/index.js'(e, t) {
        'use strict';
        var r = eb();
        (t.exports = i),
          (i.message = r),
          (i.code = n(r)),
          (i.codes = o(r)),
          (i.redirect = {
            300: !0,
            301: !0,
            302: !0,
            303: !0,
            305: !0,
            307: !0,
            308: !0,
          }),
          (i.empty = { 204: !0, 205: !0, 304: !0 }),
          (i.retry = { 502: !0, 503: !0, 504: !0 });
        function n(u) {
          var l = {};
          return (
            Object.keys(u).forEach(function (p) {
              var g = u[p],
                k = Number(p);
              l[g.toLowerCase()] = k;
            }),
            l
          );
        }
        function o(u) {
          return Object.keys(u).map(function (c) {
            return Number(c);
          });
        }
        function a(u) {
          var l = u.toLowerCase();
          if (!Object.prototype.hasOwnProperty.call(i.code, l))
            throw new Error('invalid status message: "' + u + '"');
          return i.code[l];
        }
        function s(u) {
          if (!Object.prototype.hasOwnProperty.call(i.message, u))
            throw new Error('invalid status code: ' + u);
          return i.message[u];
        }
        function i(u) {
          if (typeof u == 'number') return s(u);
          if (typeof u != 'string')
            throw new TypeError('code must be a number or string');
          var l = parseInt(u, 10);
          return isNaN(l) ? a(u) : s(l);
        }
      },
    }),
    rb = Z0(tb(), 1),
    li = rb.default;
  var nb = Object.create,
    tg = Object.defineProperty,
    ob = Object.getOwnPropertyDescriptor,
    rg = Object.getOwnPropertyNames,
    ab = Object.getPrototypeOf,
    sb = Object.prototype.hasOwnProperty,
    ib = (e, t) =>
      function () {
        return (
          t || (0, e[rg(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    ub = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of rg(t))
          !sb.call(e, o) &&
            o !== r &&
            tg(e, o, {
              get: () => t[o],
              enumerable: !(n = ob(t, o)) || n.enumerable,
            });
      return e;
    },
    lb = (e, t, r) => (
      (r = e != null ? nb(ab(e)) : {}),
      ub(
        t || !e || !e.__esModule
          ? tg(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    cb = ib({
      'node_modules/set-cookie-parser/lib/set-cookie.js'(e, t) {
        'use strict';
        var r = { decodeValues: !0, map: !1, silent: !1 };
        function n(u) {
          return typeof u == 'string' && !!u.trim();
        }
        function o(u, l) {
          var c = u.split(';').filter(n),
            p = c.shift(),
            g = a(p),
            k = g.name,
            h = g.value;
          l = l ? Object.assign({}, r, l) : r;
          try {
            h = l.decodeValues ? decodeURIComponent(h) : h;
          } catch (w) {
            console.error(
              "set-cookie-parser encountered an error while decoding a cookie with value '" +
                h +
                "'. Set options.decodeValues to false to disable this feature.",
              w,
            );
          }
          var j = { name: k, value: h };
          return (
            c.forEach(function (w) {
              var d = w.split('='),
                m = d.shift().trimLeft().toLowerCase(),
                f = d.join('=');
              m === 'expires'
                ? (j.expires = new Date(f))
                : m === 'max-age'
                  ? (j.maxAge = parseInt(f, 10))
                  : m === 'secure'
                    ? (j.secure = !0)
                    : m === 'httponly'
                      ? (j.httpOnly = !0)
                      : m === 'samesite'
                        ? (j.sameSite = f)
                        : (j[m] = f);
            }),
            j
          );
        }
        function a(u) {
          var l = '',
            c = '',
            p = u.split('=');
          return (
            p.length > 1 ? ((l = p.shift()), (c = p.join('='))) : (c = u),
            { name: l, value: c }
          );
        }
        function s(u, l) {
          if (((l = l ? Object.assign({}, r, l) : r), !u))
            return l.map ? {} : [];
          if (u.headers)
            if (typeof u.headers.getSetCookie == 'function')
              u = u.headers.getSetCookie();
            else if (u.headers['set-cookie']) u = u.headers['set-cookie'];
            else {
              var c =
                u.headers[
                  Object.keys(u.headers).find(function (g) {
                    return g.toLowerCase() === 'set-cookie';
                  })
                ];
              !c &&
                u.headers.cookie &&
                !l.silent &&
                console.warn(
                  'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.',
                ),
                (u = c);
            }
          if (
            (Array.isArray(u) || (u = [u]),
            (l = l ? Object.assign({}, r, l) : r),
            l.map)
          ) {
            var p = {};
            return u.filter(n).reduce(function (g, k) {
              var h = o(k, l);
              return (g[h.name] = h), g;
            }, p);
          } else
            return u.filter(n).map(function (g) {
              return o(g, l);
            });
        }
        function i(u) {
          if (Array.isArray(u)) return u;
          if (typeof u != 'string') return [];
          var l = [],
            c = 0,
            p,
            g,
            k,
            h,
            j;
          function w() {
            for (; c < u.length && /\s/.test(u.charAt(c)); ) c += 1;
            return c < u.length;
          }
          function d() {
            return (g = u.charAt(c)), g !== '=' && g !== ';' && g !== ',';
          }
          for (; c < u.length; ) {
            for (p = c, j = !1; w(); )
              if (((g = u.charAt(c)), g === ',')) {
                for (k = c, c += 1, w(), h = c; c < u.length && d(); ) c += 1;
                c < u.length && u.charAt(c) === '='
                  ? ((j = !0), (c = h), l.push(u.substring(p, k)), (p = c))
                  : (c = k + 1);
              } else c += 1;
            (!j || c >= u.length) && l.push(u.substring(p, u.length));
          }
          return l;
        }
        (t.exports = s),
          (t.exports.parse = s),
          (t.exports.parseString = o),
          (t.exports.splitCookiesString = i);
      },
    }),
    pb = lb(cb()),
    mb = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
  function ta(e) {
    if (mb.test(e) || e.trim() === '')
      throw new TypeError('Invalid character in header field name');
    return e.trim().toLowerCase();
  }
  var Kh = [
      `
`,
      '\r',
      '	',
      ' ',
    ],
    db = new RegExp(`(^[${Kh.join('')}]|$[${Kh.join('')}])`, 'g');
  function Sc(e) {
    return e.replace(db, '');
  }
  function ra(e) {
    if (typeof e != 'string' || e.length === 0) return !1;
    for (let t = 0; t < e.length; t++) {
      let r = e.charCodeAt(t);
      if (r > 127 || !fb(r)) return !1;
    }
    return !0;
  }
  function fb(e) {
    return ![
      127,
      32,
      '(',
      ')',
      '<',
      '>',
      '@',
      ',',
      ';',
      ':',
      '\\',
      '"',
      '/',
      '[',
      ']',
      '?',
      '=',
      '{',
      '}',
    ].includes(e);
  }
  function Xh(e) {
    if (typeof e != 'string' || e.trim() !== e) return !1;
    for (let t = 0; t < e.length; t++) {
      let r = e.charCodeAt(t);
      if (r === 0 || r === 10 || r === 13) return !1;
    }
    return !0;
  }
  var Bn = Symbol('normalizedHeaders'),
    Cc = Symbol('rawHeaderNames'),
    Qh = ', ',
    Yh,
    Zh,
    eg,
    ng = class og {
      constructor(t) {
        (this[Yh] = {}),
          (this[Zh] = new Map()),
          (this[eg] = 'Headers'),
          ['Headers', 'HeadersPolyfill'].includes(t?.constructor.name) ||
          t instanceof og ||
          (typeof globalThis.Headers < 'u' && t instanceof globalThis.Headers)
            ? t.forEach((n, o) => {
                this.append(o, n);
              }, this)
            : Array.isArray(t)
              ? t.forEach(([r, n]) => {
                  this.append(r, Array.isArray(n) ? n.join(Qh) : n);
                })
              : t &&
                Object.getOwnPropertyNames(t).forEach((r) => {
                  let n = t[r];
                  this.append(r, Array.isArray(n) ? n.join(Qh) : n);
                });
      }
      [((Yh = Bn), (Zh = Cc), (eg = Symbol.toStringTag), Symbol.iterator)]() {
        return this.entries();
      }
      *keys() {
        for (let [t] of this.entries()) yield t;
      }
      *values() {
        for (let [, t] of this.entries()) yield t;
      }
      *entries() {
        let t = Object.keys(this[Bn]).sort((r, n) => r.localeCompare(n));
        for (let r of t)
          if (r === 'set-cookie')
            for (let n of this.getSetCookie()) yield [r, n];
          else yield [r, this.get(r)];
      }
      has(t) {
        if (!ra(t)) throw new TypeError(`Invalid header name "${t}"`);
        return this[Bn].hasOwnProperty(ta(t));
      }
      get(t) {
        if (!ra(t)) throw TypeError(`Invalid header name "${t}"`);
        return this[Bn][ta(t)] ?? null;
      }
      set(t, r) {
        if (!ra(t) || !Xh(r)) return;
        let n = ta(t),
          o = Sc(r);
        (this[Bn][n] = Sc(o)), this[Cc].set(n, t);
      }
      append(t, r) {
        if (!ra(t) || !Xh(r)) return;
        let n = ta(t),
          o = Sc(r),
          a = this.has(n) ? `${this.get(n)}, ${o}` : o;
        this.set(t, a);
      }
      delete(t) {
        if (!ra(t) || !this.has(t)) return;
        let r = ta(t);
        delete this[Bn][r], this[Cc].delete(r);
      }
      forEach(t, r) {
        for (let [n, o] of this.entries()) t.call(r, o, n, this);
      }
      getSetCookie() {
        let t = this.get('set-cookie');
        return t === null
          ? []
          : t === ''
            ? ['']
            : (0, pb.splitCookiesString)(t);
      }
    };
  var { message: hb } = li,
    _c = Symbol('kSetCookie');
  function Er(e = {}) {
    let t = e?.status || 200,
      r = e?.statusText || hb[t] || '',
      n = new Headers(e?.headers);
    return { ...e, headers: n, status: t, statusText: r };
  }
  function ag(e, t) {
    t.type &&
      Object.defineProperty(e, 'type', {
        value: t.type,
        enumerable: !0,
        writable: !1,
      });
    let r = t.headers.get('set-cookie');
    if (
      r &&
      (Object.defineProperty(e, _c, { value: r, enumerable: !1, writable: !1 }),
      typeof document < 'u')
    ) {
      let n = ng.prototype.getSetCookie.call(t.headers);
      for (let o of n) document.cookie = o;
    }
    return e;
  }
  function sg(e, t) {
    let r = Reflect.get(t, _c);
    r && ui.setCookie(r, e.url);
  }
  async function ci(e, t, r, n, o, a) {
    if (
      (o.emit('request:start', { request: e, requestId: t }),
      e.headers.get('accept')?.includes('msw/passthrough'))
    ) {
      o.emit('request:end', { request: e, requestId: t }),
        a?.onPassthroughResponse?.(e);
      return;
    }
    let s = await Th(() =>
      Dh({
        request: e,
        requestId: t,
        handlers: r,
        resolutionContext: a?.resolutionContext,
      }),
    );
    if (s.error)
      throw (
        (o.emit('unhandledException', {
          error: s.error,
          request: e,
          requestId: t,
        }),
        s.error)
      );
    if (!s.data) {
      await ai(e, n.onUnhandledRequest),
        o.emit('request:unhandled', { request: e, requestId: t }),
        o.emit('request:end', { request: e, requestId: t }),
        a?.onPassthroughResponse?.(e);
      return;
    }
    let { response: i } = s.data;
    if (!i) {
      o.emit('request:end', { request: e, requestId: t }),
        a?.onPassthroughResponse?.(e);
      return;
    }
    if (
      i.status === 302 &&
      i.headers.get('x-msw-intention') === 'passthrough'
    ) {
      o.emit('request:end', { request: e, requestId: t }),
        a?.onPassthroughResponse?.(e);
      return;
    }
    sg(e, i), o.emit('request:match', { request: e, requestId: t });
    let u = s.data;
    return (
      a?.onMockedResponse?.(i, u),
      o.emit('request:end', { request: e, requestId: t }),
      i
    );
  }
  function ig(e) {
    return {
      status: e.status,
      statusText: e.statusText,
      headers: Object.fromEntries(e.headers.entries()),
    };
  }
  function Un(e) {
    return (t) =>
      t != null && typeof t == 'object' && '__kind' in t && t.__kind === e;
  }
  function zc(e) {
    return e != null && typeof e == 'object' && !Array.isArray(e);
  }
  function Ac(e, t) {
    return Object.entries(t).reduce(
      (r, [n, o]) => {
        let a = r[n];
        return Array.isArray(a) && Array.isArray(o)
          ? ((r[n] = a.concat(o)), r)
          : zc(a) && zc(o)
            ? ((r[n] = Ac(a, o)), r)
            : ((r[n] = o), r);
      },
      Object.assign({}, e),
    );
  }
  var gb = class extends Error {
      constructor(e, t, r) {
        super(
          `Possible EventEmitter memory leak detected. ${r} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`,
        ),
          (this.emitter = e),
          (this.type = t),
          (this.count = r),
          (this.name = 'MaxListenersExceededWarning');
      }
    },
    ug = class {
      static listenerCount(e, t) {
        return e.listenerCount(t);
      }
      constructor() {
        (this.events = new Map()),
          (this.maxListeners = ug.defaultMaxListeners),
          (this.hasWarnedAboutPotentialMemoryLeak = !1);
      }
      _emitInternalEvent(e, t, r) {
        this.emit(e, t, r);
      }
      _getListeners(e) {
        return Array.prototype.concat.apply([], this.events.get(e)) || [];
      }
      _removeListener(e, t) {
        let r = e.indexOf(t);
        return r > -1 && e.splice(r, 1), [];
      }
      _wrapOnceListener(e, t) {
        let r = (...n) => (this.removeListener(e, r), t.apply(this, n));
        return Object.defineProperty(r, 'name', { value: t.name }), r;
      }
      setMaxListeners(e) {
        return (this.maxListeners = e), this;
      }
      getMaxListeners() {
        return this.maxListeners;
      }
      eventNames() {
        return Array.from(this.events.keys());
      }
      emit(e, ...t) {
        let r = this._getListeners(e);
        return (
          r.forEach((n) => {
            n.apply(this, t);
          }),
          r.length > 0
        );
      }
      addListener(e, t) {
        this._emitInternalEvent('newListener', e, t);
        let r = this._getListeners(e).concat(t);
        if (
          (this.events.set(e, r),
          this.maxListeners > 0 &&
            this.listenerCount(e) > this.maxListeners &&
            !this.hasWarnedAboutPotentialMemoryLeak)
        ) {
          this.hasWarnedAboutPotentialMemoryLeak = !0;
          let n = new gb(this, e, this.listenerCount(e));
          console.warn(n);
        }
        return this;
      }
      on(e, t) {
        return this.addListener(e, t);
      }
      once(e, t) {
        return this.addListener(e, this._wrapOnceListener(e, t));
      }
      prependListener(e, t) {
        let r = this._getListeners(e);
        if (r.length > 0) {
          let n = [t].concat(r);
          this.events.set(e, n);
        } else this.events.set(e, r.concat(t));
        return this;
      }
      prependOnceListener(e, t) {
        return this.prependListener(e, this._wrapOnceListener(e, t));
      }
      removeListener(e, t) {
        let r = this._getListeners(e);
        return (
          r.length > 0 &&
            (this._removeListener(r, t),
            this.events.set(e, r),
            this._emitInternalEvent('removeListener', e, t)),
          this
        );
      }
      off(e, t) {
        return this.removeListener(e, t);
      }
      removeAllListeners(e) {
        return e ? this.events.delete(e) : this.events.clear(), this;
      }
      listeners(e) {
        return Array.from(this._getListeners(e));
      }
      listenerCount(e) {
        return this._getListeners(e).length;
      }
      rawListeners(e) {
        return this.listeners(e);
      }
    },
    xr = ug;
  xr.defaultMaxListeners = 10;
  function lg(e, t) {
    let r = e.emit;
    if (r._isPiped) return;
    let n = function (a, ...s) {
      return t.emit(a, ...s), r.call(this, a, ...s);
    };
    (n._isPiped = !0), (e.emit = n);
  }
  function cg(e) {
    let t = [...e];
    return Object.freeze(t), t;
  }
  var pi = class {
    subscriptions = [];
    dispose() {
      let t;
      for (; (t = this.subscriptions.shift()); ) t();
    }
  };
  var Rc = class {
      constructor(t) {
        (this.initialHandlers = t), (this.handlers = [...t]);
      }
      handlers;
      prepend(t) {
        this.handlers.unshift(...t);
      }
      reset(t) {
        this.handlers = t.length > 0 ? [...t] : [...this.initialHandlers];
      }
      currentHandlers() {
        return this.handlers;
      }
    },
    mi = class extends pi {
      handlersController;
      emitter;
      publicEmitter;
      events;
      constructor(...t) {
        super(),
          Pe(
            this.validateHandlers(t),
            M.formatMessage(
              'Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?',
            ),
          ),
          (this.handlersController = new Rc(t)),
          (this.emitter = new xr()),
          (this.publicEmitter = new xr()),
          lg(this.emitter, this.publicEmitter),
          (this.events = this.createLifeCycleEvents()),
          this.subscriptions.push(() => {
            this.emitter.removeAllListeners(),
              this.publicEmitter.removeAllListeners();
          });
      }
      validateHandlers(t) {
        return t.every((r) => !Array.isArray(r));
      }
      use(...t) {
        Pe(
          this.validateHandlers(t),
          M.formatMessage(
            'Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?',
          ),
        ),
          this.handlersController.prepend(t);
      }
      restoreHandlers() {
        this.handlersController.currentHandlers().forEach((t) => {
          'isUsed' in t && (t.isUsed = !1);
        });
      }
      resetHandlers(...t) {
        this.handlersController.reset(t);
      }
      listHandlers() {
        return cg(this.handlersController.currentHandlers());
      }
      createLifeCycleEvents() {
        return {
          on: (...t) => this.publicEmitter.on(...t),
          removeListener: (...t) => this.publicEmitter.removeListener(...t),
          removeAllListeners: (...t) =>
            this.publicEmitter.removeAllListeners(...t),
        };
      }
    };
  function pg(e) {
    let t = Object.getOwnPropertyDescriptor(globalThis, e);
    return typeof t > 'u' ||
      (typeof t.get == 'function' && typeof t.get() > 'u') ||
      (typeof t.get > 'u' && t.value == null)
      ? !1
      : typeof t.set > 'u' && !t.configurable
        ? (console.error(
            `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
          ),
          !1)
        : !0;
  }
  var yb = Object.defineProperty,
    kb = (e, t) => {
      for (var r in t) yb(e, r, { get: t[r], enumerable: !0 });
    },
    Pc = {};
  kb(Pc, {
    blue: () => jb,
    gray: () => Oc,
    green: () => wb,
    red: () => bb,
    yellow: () => vb,
  });
  function vb(e) {
    return `\x1B[33m${e}\x1B[0m`;
  }
  function jb(e) {
    return `\x1B[34m${e}\x1B[0m`;
  }
  function Oc(e) {
    return `\x1B[90m${e}\x1B[0m`;
  }
  function bb(e) {
    return `\x1B[31m${e}\x1B[0m`;
  }
  function wb(e) {
    return `\x1B[32m${e}\x1B[0m`;
  }
  var di = qn(),
    Lc = class {
      constructor(e) {
        (this.name = e), (this.prefix = `[${this.name}]`);
        let t = mg('DEBUG'),
          r = mg('LOG_LEVEL');
        t === '1' || t === 'true' || (typeof t < 'u' && this.name.startsWith(t))
          ? ((this.debug = na(r, 'debug') ? At : this.debug),
            (this.info = na(r, 'info') ? At : this.info),
            (this.success = na(r, 'success') ? At : this.success),
            (this.warning = na(r, 'warning') ? At : this.warning),
            (this.error = na(r, 'error') ? At : this.error))
          : ((this.info = At),
            (this.success = At),
            (this.warning = At),
            (this.error = At),
            (this.only = At));
      }
      prefix;
      extend(e) {
        return new Lc(`${this.name}:${e}`);
      }
      debug(e, ...t) {
        this.logEntry({
          level: 'debug',
          message: Oc(e),
          positionals: t,
          prefix: this.prefix,
          colors: { prefix: 'gray' },
        });
      }
      info(e, ...t) {
        this.logEntry({
          level: 'info',
          message: e,
          positionals: t,
          prefix: this.prefix,
          colors: { prefix: 'blue' },
        });
        let r = new Eb();
        return (n, ...o) => {
          r.measure(),
            this.logEntry({
              level: 'info',
              message: `${n} ${Oc(`${r.deltaTime}ms`)}`,
              positionals: o,
              prefix: this.prefix,
              colors: { prefix: 'blue' },
            });
        };
      }
      success(e, ...t) {
        this.logEntry({
          level: 'info',
          message: e,
          positionals: t,
          prefix: `\u2714 ${this.prefix}`,
          colors: { timestamp: 'green', prefix: 'green' },
        });
      }
      warning(e, ...t) {
        this.logEntry({
          level: 'warning',
          message: e,
          positionals: t,
          prefix: `\u26A0 ${this.prefix}`,
          colors: { timestamp: 'yellow', prefix: 'yellow' },
        });
      }
      error(e, ...t) {
        this.logEntry({
          level: 'error',
          message: e,
          positionals: t,
          prefix: `\u2716 ${this.prefix}`,
          colors: { timestamp: 'red', prefix: 'red' },
        });
      }
      only(e) {
        e();
      }
      createEntry(e, t) {
        return { timestamp: new Date(), level: e, message: t };
      }
      logEntry(e) {
        let {
            level: t,
            message: r,
            prefix: n,
            colors: o,
            positionals: a = [],
          } = e,
          s = this.createEntry(t, r),
          i = o?.timestamp || 'gray',
          u = o?.prefix || 'gray',
          l = { timestamp: Pc[i], prefix: Pc[u] };
        this.getWriter(t)(
          [l.timestamp(this.formatTimestamp(s.timestamp))]
            .concat(n != null ? l.prefix(n) : [])
            .concat(dg(r))
            .join(' '),
          ...a.map(dg),
        );
      }
      formatTimestamp(e) {
        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
      }
      getWriter(e) {
        switch (e) {
          case 'debug':
          case 'success':
          case 'info':
            return xb;
          case 'warning':
            return Sb;
          case 'error':
            return Cb;
        }
      }
    },
    Eb = class {
      startTime;
      endTime;
      deltaTime;
      constructor() {
        this.startTime = performance.now();
      }
      measure() {
        this.endTime = performance.now();
        let e = this.endTime - this.startTime;
        this.deltaTime = e.toFixed(2);
      }
    },
    At = () => {};
  function xb(e, ...t) {
    if (di) {
      process.stdout.write(
        br(e, ...t) +
          `
`,
      );
      return;
    }
    console.log(e, ...t);
  }
  function Sb(e, ...t) {
    if (di) {
      process.stderr.write(
        br(e, ...t) +
          `
`,
      );
      return;
    }
    console.warn(e, ...t);
  }
  function Cb(e, ...t) {
    if (di) {
      process.stderr.write(
        br(e, ...t) +
          `
`,
      );
      return;
    }
    console.error(e, ...t);
  }
  function mg(e) {
    return di ? process.env[e] : globalThis[e]?.toString();
  }
  function na(e, t) {
    return e !== void 0 && e !== t;
  }
  function dg(e) {
    return typeof e > 'u'
      ? 'undefined'
      : e === null
        ? 'null'
        : typeof e == 'string'
          ? e
          : typeof e == 'object'
            ? JSON.stringify(e)
            : e.toString();
  }
  function Tc(e) {
    return globalThis[e] || void 0;
  }
  function _b(e, t) {
    globalThis[e] = t;
  }
  function fg(e) {
    delete globalThis[e];
  }
  var Dc = class {
    constructor(e) {
      (this.symbol = e),
        (this.readyState = 'INACTIVE'),
        (this.emitter = new xr()),
        (this.subscriptions = []),
        (this.logger = new Lc(e.description)),
        this.emitter.setMaxListeners(0),
        this.logger.info('constructing the interceptor...');
    }
    checkEnvironment() {
      return !0;
    }
    apply() {
      let e = this.logger.extend('apply');
      if (
        (e.info('applying the interceptor...'), this.readyState === 'APPLIED')
      ) {
        e.info('intercepted already applied!');
        return;
      }
      if (!this.checkEnvironment()) {
        e.info('the interceptor cannot be applied in this environment!');
        return;
      }
      this.readyState = 'APPLYING';
      let r = this.getInstance();
      if (r) {
        e.info('found a running instance, reusing...'),
          (this.on = (n, o) => (
            e.info('proxying the "%s" listener', n),
            r.emitter.addListener(n, o),
            this.subscriptions.push(() => {
              r.emitter.removeListener(n, o),
                e.info('removed proxied "%s" listener!', n);
            }),
            this
          )),
          (this.readyState = 'APPLIED');
        return;
      }
      e.info('no running instance found, setting up a new instance...'),
        this.setup(),
        this.setInstance(),
        (this.readyState = 'APPLIED');
    }
    setup() {}
    on(e, t) {
      let r = this.logger.extend('on');
      return this.readyState === 'DISPOSING' || this.readyState === 'DISPOSED'
        ? (r.info('cannot listen to events, already disposed!'), this)
        : (r.info('adding "%s" event listener:', e, t),
          this.emitter.on(e, t),
          this);
    }
    once(e, t) {
      return this.emitter.once(e, t), this;
    }
    off(e, t) {
      return this.emitter.off(e, t), this;
    }
    removeAllListeners(e) {
      return this.emitter.removeAllListeners(e), this;
    }
    dispose() {
      let e = this.logger.extend('dispose');
      if (this.readyState === 'DISPOSED') {
        e.info('cannot dispose, already disposed!');
        return;
      }
      if (
        (e.info('disposing the interceptor...'),
        (this.readyState = 'DISPOSING'),
        !this.getInstance())
      ) {
        e.info('no interceptors running, skipping dispose...');
        return;
      }
      if (
        (this.clearInstance(),
        e.info('global symbol deleted:', Tc(this.symbol)),
        this.subscriptions.length > 0)
      ) {
        e.info('disposing of %d subscriptions...', this.subscriptions.length);
        for (let t of this.subscriptions) t();
        (this.subscriptions = []),
          e.info('disposed of all subscriptions!', this.subscriptions.length);
      }
      this.emitter.removeAllListeners(),
        e.info('destroyed the listener!'),
        (this.readyState = 'DISPOSED');
    }
    getInstance() {
      var e;
      let t = Tc(this.symbol);
      return (
        this.logger.info(
          'retrieved global instance:',
          (e = t?.constructor) == null ? void 0 : e.name,
        ),
        t
      );
    }
    setInstance() {
      _b(this.symbol, this),
        this.logger.info('set global instance!', this.symbol.description);
    }
    clearInstance() {
      fg(this.symbol),
        this.logger.info('cleared global instance!', this.symbol.description);
    }
  };
  function oa() {
    return Math.random().toString(16).slice(2);
  }
  function zb() {
    let e = (t, r) => {
      (e.state = 'pending'),
        (e.resolve = (n) => {
          if (e.state !== 'pending') return;
          e.result = n;
          let o = (a) => ((e.state = 'fulfilled'), a);
          return t(n instanceof Promise ? n : Promise.resolve(n).then(o));
        }),
        (e.reject = (n) => {
          if (e.state === 'pending')
            return (
              queueMicrotask(() => {
                e.state = 'rejected';
              }),
              r((e.rejectionReason = n))
            );
        });
    };
    return e;
  }
  var hg = class extends Promise {
    #e;
    resolve;
    reject;
    constructor(e = null) {
      let t = zb();
      super((r, n) => {
        t(r, n), e?.(t.resolve, t.reject);
      }),
        (this.#e = t),
        (this.resolve = this.#e.resolve),
        (this.reject = this.#e.reject);
    }
    get state() {
      return this.#e.state;
    }
    get rejectionReason() {
      return this.#e.rejectionReason;
    }
    then(e, t) {
      return this.#t(super.then(e, t));
    }
    catch(e) {
      return this.#t(super.catch(e));
    }
    finally(e) {
      return this.#t(super.finally(e));
    }
    #t(e) {
      return Object.defineProperties(e, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }
  };
  function Le(e, t) {
    return (
      Object.defineProperties(t, {
        target: { value: e, enumerable: !0, writable: !0 },
        currentTarget: { value: e, enumerable: !0, writable: !0 },
      }),
      t
    );
  }
  var $n = Symbol('kCancelable'),
    Rt = Symbol('kDefaultPrevented'),
    Nc = class extends MessageEvent {
      constructor(e, t) {
        super(e, t), (this[$n] = !!t.cancelable), (this[Rt] = !1);
      }
      get cancelable() {
        return this[$n];
      }
      set cancelable(e) {
        this[$n] = e;
      }
      get defaultPrevented() {
        return this[Rt];
      }
      set defaultPrevented(e) {
        this[Rt] = e;
      }
      preventDefault() {
        this.cancelable && !this[Rt] && (this[Rt] = !0);
      }
    },
    gi = class extends Event {
      constructor(e, t = {}) {
        super(e, t),
          (this.code = t.code === void 0 ? 0 : t.code),
          (this.reason = t.reason === void 0 ? '' : t.reason),
          (this.wasClean = t.wasClean === void 0 ? !1 : t.wasClean);
      }
    },
    gg = class extends gi {
      constructor(e, t = {}) {
        super(e, t), (this[$n] = !!t.cancelable), (this[Rt] = !1);
      }
      get cancelable() {
        return this[$n];
      }
      set cancelable(e) {
        this[$n] = e;
      }
      get defaultPrevented() {
        return this[Rt];
      }
      set defaultPrevented(e) {
        this[Rt] = e;
      }
      preventDefault() {
        this.cancelable && !this[Rt] && (this[Rt] = !0);
      }
    },
    aa = Symbol('kEmitter'),
    fi = Symbol('kBoundListener'),
    Ab = class {
      constructor(e, t) {
        (this.socket = e),
          (this.transport = t),
          (this.id = oa()),
          (this.url = new URL(e.url)),
          (this[aa] = new EventTarget()),
          this.transport.addEventListener('outgoing', (r) => {
            let n = Le(
              this.socket,
              new Nc('message', {
                data: r.data,
                origin: r.origin,
                cancelable: !0,
              }),
            );
            this[aa].dispatchEvent(n), n.defaultPrevented && r.preventDefault();
          }),
          this.transport.addEventListener('close', (r) => {
            this[aa].dispatchEvent(Le(this.socket, new gi('close', r)));
          });
      }
      addEventListener(e, t, r) {
        if (!Reflect.has(t, fi)) {
          let n = t.bind(this.socket);
          Object.defineProperty(t, fi, {
            value: n,
            enumerable: !1,
            configurable: !1,
          });
        }
        this[aa].addEventListener(e, Reflect.get(t, fi), r);
      }
      removeEventListener(e, t, r) {
        this[aa].removeEventListener(e, Reflect.get(t, fi), r);
      }
      send(e) {
        this.transport.send(e);
      }
      close(e, t) {
        this.transport.close(e, t);
      }
    },
    yg = 'InvalidAccessError: close code out of user configurable range',
    sa = Symbol('kPassthroughPromise'),
    Fc = Symbol('kOnSend'),
    ia = Symbol('kClose'),
    ua = class extends EventTarget {
      constructor(e, t) {
        super(),
          (this.CONNECTING = 0),
          (this.OPEN = 1),
          (this.CLOSING = 2),
          (this.CLOSED = 3),
          (this._onopen = null),
          (this._onmessage = null),
          (this._onerror = null),
          (this._onclose = null),
          (this.url = e.toString()),
          (this.protocol = ''),
          (this.extensions = ''),
          (this.binaryType = 'blob'),
          (this.readyState = this.CONNECTING),
          (this.bufferedAmount = 0),
          (this[sa] = new hg()),
          queueMicrotask(async () => {
            (await this[sa]) ||
              ((this.protocol =
                typeof t == 'string'
                  ? t
                  : Array.isArray(t) && t.length > 0
                    ? t[0]
                    : ''),
              this.readyState === this.CONNECTING &&
                ((this.readyState = this.OPEN),
                this.dispatchEvent(Le(this, new Event('open')))));
          });
      }
      set onopen(e) {
        this.removeEventListener('open', this._onopen),
          (this._onopen = e),
          e !== null && this.addEventListener('open', e);
      }
      get onopen() {
        return this._onopen;
      }
      set onmessage(e) {
        this.removeEventListener('message', this._onmessage),
          (this._onmessage = e),
          e !== null && this.addEventListener('message', e);
      }
      get onmessage() {
        return this._onmessage;
      }
      set onerror(e) {
        this.removeEventListener('error', this._onerror),
          (this._onerror = e),
          e !== null && this.addEventListener('error', e);
      }
      get onerror() {
        return this._onerror;
      }
      set onclose(e) {
        this.removeEventListener('close', this._onclose),
          (this._onclose = e),
          e !== null && this.addEventListener('close', e);
      }
      get onclose() {
        return this._onclose;
      }
      send(e) {
        if (this.readyState === this.CONNECTING)
          throw (this.close(), new DOMException('InvalidStateError'));
        this.readyState === this.CLOSING ||
          this.readyState === this.CLOSED ||
          ((this.bufferedAmount += Rb(e)),
          queueMicrotask(() => {
            var t;
            (this.bufferedAmount = 0),
              (t = this[Fc]) == null || t.call(this, e);
          }));
      }
      close(e = 1e3, t) {
        Pe(e, yg), Pe(e === 1e3 || (e >= 3e3 && e <= 4999), yg), this[ia](e, t);
      }
      [ia](e = 1e3, t, r = !0) {
        this.readyState === this.CLOSING ||
          this.readyState === this.CLOSED ||
          ((this.readyState = this.CLOSING),
          queueMicrotask(() => {
            (this.readyState = this.CLOSED),
              this.dispatchEvent(
                Le(this, new gi('close', { code: e, reason: t, wasClean: r })),
              ),
              (this._onopen = null),
              (this._onmessage = null),
              (this._onerror = null),
              (this._onclose = null);
          }));
      }
      addEventListener(e, t, r) {
        return super.addEventListener(e, t, r);
      }
      removeEventListener(e, t, r) {
        return super.removeEventListener(e, t, r);
      }
    };
  ua.CONNECTING = 0;
  ua.OPEN = 1;
  ua.CLOSING = 2;
  ua.CLOSED = 3;
  function Rb(e) {
    return typeof e == 'string'
      ? e.length
      : e instanceof Blob
        ? e.size
        : e.byteLength;
  }
  var Wt = Symbol('kEmitter'),
    hi = Symbol('kBoundListener'),
    Ic = Symbol('kSend'),
    Pb = class {
      constructor(e, t, r) {
        (this.client = e),
          (this.transport = t),
          (this.createConnection = r),
          (this[Wt] = new EventTarget()),
          (this.mockCloseController = new AbortController()),
          (this.realCloseController = new AbortController()),
          this.transport.addEventListener('outgoing', (n) => {
            typeof this.realWebSocket > 'u' ||
              queueMicrotask(() => {
                n.defaultPrevented || this[Ic](n.data);
              });
          }),
          this.transport.addEventListener(
            'incoming',
            this.handleIncomingMessage.bind(this),
          );
      }
      get socket() {
        return (
          Pe(
            this.realWebSocket,
            'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?',
          ),
          this.realWebSocket
        );
      }
      connect() {
        Pe(
          !this.realWebSocket ||
            this.realWebSocket.readyState !== WebSocket.OPEN,
          'Failed to call "connect()" on the original WebSocket instance: the connection already open',
        );
        let e = this.createConnection();
        (e.binaryType = this.client.binaryType),
          e.addEventListener(
            'open',
            (t) => {
              this[Wt].dispatchEvent(
                Le(this.realWebSocket, new Event('open', t)),
              );
            },
            { once: !0 },
          ),
          e.addEventListener('message', (t) => {
            this.transport.dispatchEvent(
              Le(
                this.realWebSocket,
                new MessageEvent('incoming', {
                  data: t.data,
                  origin: t.origin,
                }),
              ),
            );
          }),
          this.client.addEventListener(
            'close',
            (t) => {
              this.handleMockClose(t);
            },
            { signal: this.mockCloseController.signal },
          ),
          e.addEventListener(
            'close',
            (t) => {
              this.handleRealClose(t);
            },
            { signal: this.realCloseController.signal },
          ),
          e.addEventListener('error', () => {
            let t = Le(e, new Event('error', { cancelable: !0 }));
            this[Wt].dispatchEvent(t),
              t.defaultPrevented ||
                this.client.dispatchEvent(Le(this.client, new Event('error')));
          }),
          (this.realWebSocket = e);
      }
      addEventListener(e, t, r) {
        if (!Reflect.has(t, hi)) {
          let n = t.bind(this.client);
          Object.defineProperty(t, hi, { value: n, enumerable: !1 });
        }
        this[Wt].addEventListener(e, Reflect.get(t, hi), r);
      }
      removeEventListener(e, t, r) {
        this[Wt].removeEventListener(e, Reflect.get(t, hi), r);
      }
      send(e) {
        this[Ic](e);
      }
      [Ic](e) {
        let { realWebSocket: t } = this;
        if (
          (Pe(
            t,
            'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',
            this.client.url,
          ),
          !(
            t.readyState === WebSocket.CLOSING ||
            t.readyState === WebSocket.CLOSED
          ))
        ) {
          if (t.readyState === WebSocket.CONNECTING) {
            t.addEventListener(
              'open',
              () => {
                t.send(e);
              },
              { once: !0 },
            );
            return;
          }
          t.send(e);
        }
      }
      close() {
        let { realWebSocket: e } = this;
        Pe(
          e,
          'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',
          this.client.url,
        ),
          this.realCloseController.abort(),
          !(
            e.readyState === WebSocket.CLOSING ||
            e.readyState === WebSocket.CLOSED
          ) &&
            (e.close(),
            queueMicrotask(() => {
              this[Wt].dispatchEvent(
                Le(
                  this.realWebSocket,
                  new gg('close', { code: 1e3, cancelable: !0 }),
                ),
              );
            }));
      }
      handleIncomingMessage(e) {
        let t = Le(
          e.target,
          new Nc('message', { data: e.data, origin: e.origin, cancelable: !0 }),
        );
        this[Wt].dispatchEvent(t),
          t.defaultPrevented ||
            this.client.dispatchEvent(
              Le(
                this.client,
                new MessageEvent('message', { data: e.data, origin: e.origin }),
              ),
            );
      }
      handleMockClose(e) {
        this.realWebSocket && this.realWebSocket.close();
      }
      handleRealClose(e) {
        this.mockCloseController.abort();
        let t = Le(
          this.realWebSocket,
          new gg('close', {
            code: e.code,
            reason: e.reason,
            wasClean: e.wasClean,
            cancelable: !0,
          }),
        );
        this[Wt].dispatchEvent(t),
          t.defaultPrevented || this.client[ia](e.code, e.reason);
      }
    },
    Ob = class extends EventTarget {
      constructor(e) {
        super(),
          (this.socket = e),
          this.socket.addEventListener('close', (t) => {
            this.dispatchEvent(Le(this.socket, new gi('close', t)));
          }),
          (this.socket[Fc] = (t) => {
            this.dispatchEvent(
              Le(
                this.socket,
                new Nc('outgoing', {
                  data: t,
                  origin: this.socket.url,
                  cancelable: !0,
                }),
              ),
            );
          });
      }
      addEventListener(e, t, r) {
        return super.addEventListener(e, t, r);
      }
      dispatchEvent(e) {
        return super.dispatchEvent(e);
      }
      send(e) {
        queueMicrotask(() => {
          if (
            this.socket.readyState === this.socket.CLOSING ||
            this.socket.readyState === this.socket.CLOSED
          )
            return;
          let t = () => {
            this.socket.dispatchEvent(
              Le(
                this.socket,
                new MessageEvent('message', {
                  data: e,
                  origin: this.socket.url,
                }),
              ),
            );
          };
          this.socket.readyState === this.socket.CONNECTING
            ? this.socket.addEventListener(
                'open',
                () => {
                  t();
                },
                { once: !0 },
              )
            : t();
        });
      }
      close(e, t) {
        this.socket[ia](e, t);
      }
    },
    kg = class extends Dc {
      constructor() {
        super(kg.symbol);
      }
      checkEnvironment() {
        return pg('WebSocket');
      }
      setup() {
        let e = Object.getOwnPropertyDescriptor(globalThis, 'WebSocket'),
          t = new Proxy(globalThis.WebSocket, {
            construct: (r, n, o) => {
              let [a, s] = n,
                i = () => Reflect.construct(r, n, o),
                u = new ua(a, s),
                l = new Ob(u);
              return (
                queueMicrotask(() => {
                  try {
                    let c = new Pb(u, l, i);
                    this.emitter.emit('connection', {
                      client: new Ab(u, l),
                      server: c,
                      info: { protocols: s },
                    })
                      ? u[sa].resolve(!1)
                      : (u[sa].resolve(!0),
                        c.connect(),
                        c.addEventListener('open', () => {
                          u.dispatchEvent(Le(u, new Event('open'))),
                            c.realWebSocket &&
                              (u.protocol = c.realWebSocket.protocol);
                        }));
                  } catch (c) {
                    c instanceof Error &&
                      (u.dispatchEvent(new Event('error')),
                      u.readyState !== WebSocket.CLOSING &&
                        u.readyState !== WebSocket.CLOSED &&
                        u[ia](1011, c.message, !1),
                      console.error(c));
                  }
                }),
                u
              );
            },
          });
        Object.defineProperty(globalThis, 'WebSocket', {
          value: t,
          configurable: !0,
        }),
          this.subscriptions.push(() => {
            Object.defineProperty(globalThis, 'WebSocket', e);
          });
      }
    },
    Mc = kg;
  Mc.symbol = Symbol('websocket');
  var la = new Mc();
  var WC = new TextEncoder();
  var Lb = Symbol('isPatchedModule'),
    Hn = class extends Response {
      static isConfigurableStatusCode(e) {
        return e >= 200 && e <= 599;
      }
      static isRedirectResponse(e) {
        return Hn.STATUS_CODES_WITH_REDIRECT.includes(e);
      }
      static isResponseWithBody(e) {
        return !Hn.STATUS_CODES_WITHOUT_BODY.includes(e);
      }
      static setUrl(e, t) {
        e &&
          t.url == '' &&
          Object.defineProperty(t, 'url', {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !1,
          });
      }
      constructor(e, t = {}) {
        var r;
        let n = (r = t.status) != null ? r : 200,
          o = Hn.isConfigurableStatusCode(n) ? n : 200,
          a = Hn.isResponseWithBody(n) ? e : null;
        if ((super(a, { ...t, status: o }), n !== o)) {
          let s = Object.getOwnPropertySymbols(this).find(
            (i) => i.description === 'state',
          );
          if (s) {
            let i = Reflect.get(this, s);
            Reflect.set(i, 'status', n);
          } else
            Object.defineProperty(this, 'status', {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !1,
            });
        }
        Hn.setUrl(t.url, this);
      }
    },
    qc = Hn;
  qc.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
  qc.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
  function vg(e, t = !0) {
    return [t && e.origin, e.pathname].filter(Boolean).join('');
  }
  function Tb(e) {
    for (var t = [], r = 0; r < e.length; ) {
      var n = e[r];
      if (n === '*' || n === '+' || n === '?') {
        t.push({ type: 'MODIFIER', index: r, value: e[r++] });
        continue;
      }
      if (n === '\\') {
        t.push({ type: 'ESCAPED_CHAR', index: r++, value: e[r++] });
        continue;
      }
      if (n === '{') {
        t.push({ type: 'OPEN', index: r, value: e[r++] });
        continue;
      }
      if (n === '}') {
        t.push({ type: 'CLOSE', index: r, value: e[r++] });
        continue;
      }
      if (n === ':') {
        for (var o = '', a = r + 1; a < e.length; ) {
          var s = e.charCodeAt(a);
          if (
            (s >= 48 && s <= 57) ||
            (s >= 65 && s <= 90) ||
            (s >= 97 && s <= 122) ||
            s === 95
          ) {
            o += e[a++];
            continue;
          }
          break;
        }
        if (!o) throw new TypeError('Missing parameter name at '.concat(r));
        t.push({ type: 'NAME', index: r, value: o }), (r = a);
        continue;
      }
      if (n === '(') {
        var i = 1,
          u = '',
          a = r + 1;
        if (e[a] === '?')
          throw new TypeError('Pattern cannot start with "?" at '.concat(a));
        for (; a < e.length; ) {
          if (e[a] === '\\') {
            u += e[a++] + e[a++];
            continue;
          }
          if (e[a] === ')') {
            if ((i--, i === 0)) {
              a++;
              break;
            }
          } else if (e[a] === '(' && (i++, e[a + 1] !== '?'))
            throw new TypeError(
              'Capturing groups are not allowed at '.concat(a),
            );
          u += e[a++];
        }
        if (i) throw new TypeError('Unbalanced pattern at '.concat(r));
        if (!u) throw new TypeError('Missing pattern at '.concat(r));
        t.push({ type: 'PATTERN', index: r, value: u }), (r = a);
        continue;
      }
      t.push({ type: 'CHAR', index: r, value: e[r++] });
    }
    return t.push({ type: 'END', index: r, value: '' }), t;
  }
  function Db(e, t) {
    t === void 0 && (t = {});
    for (
      var r = Tb(e),
        n = t.prefixes,
        o = n === void 0 ? './' : n,
        a = t.delimiter,
        s = a === void 0 ? '/#?' : a,
        i = [],
        u = 0,
        l = 0,
        c = '',
        p = function (L) {
          if (l < r.length && r[l].type === L) return r[l++].value;
        },
        g = function (L) {
          var T = p(L);
          if (T !== void 0) return T;
          var I = r[l],
            Z = I.type,
            jt = I.index;
          throw new TypeError(
            'Unexpected '.concat(Z, ' at ').concat(jt, ', expected ').concat(L),
          );
        },
        k = function () {
          for (var L = '', T; (T = p('CHAR') || p('ESCAPED_CHAR')); ) L += T;
          return L;
        },
        h = function (L) {
          for (var T = 0, I = s; T < I.length; T++) {
            var Z = I[T];
            if (L.indexOf(Z) > -1) return !0;
          }
          return !1;
        },
        j = function (L) {
          var T = i[i.length - 1],
            I = L || (T && typeof T == 'string' ? T : '');
          if (T && !I)
            throw new TypeError(
              'Must have text between two parameters, missing text after "'.concat(
                T.name,
                '"',
              ),
            );
          return !I || h(I)
            ? '[^'.concat(Sr(s), ']+?')
            : '(?:(?!'.concat(Sr(I), ')[^').concat(Sr(s), '])+?');
        };
      l < r.length;

    ) {
      var w = p('CHAR'),
        d = p('NAME'),
        m = p('PATTERN');
      if (d || m) {
        var f = w || '';
        o.indexOf(f) === -1 && ((c += f), (f = '')),
          c && (i.push(c), (c = '')),
          i.push({
            name: d || u++,
            prefix: f,
            suffix: '',
            pattern: m || j(f),
            modifier: p('MODIFIER') || '',
          });
        continue;
      }
      var y = w || p('ESCAPED_CHAR');
      if (y) {
        c += y;
        continue;
      }
      c && (i.push(c), (c = ''));
      var b = p('OPEN');
      if (b) {
        var f = k(),
          C = p('NAME') || '',
          x = p('PATTERN') || '',
          R = k();
        g('CLOSE'),
          i.push({
            name: C || (x ? u++ : ''),
            pattern: C && !x ? j(f) : x,
            prefix: f,
            suffix: R,
            modifier: p('MODIFIER') || '',
          });
        continue;
      }
      g('END');
    }
    return i;
  }
  function jg(e, t) {
    var r = [],
      n = wg(e, r, t);
    return Ib(n, r, t);
  }
  function Ib(e, t, r) {
    r === void 0 && (r = {});
    var n = r.decode,
      o =
        n === void 0
          ? function (a) {
              return a;
            }
          : n;
    return function (a) {
      var s = e.exec(a);
      if (!s) return !1;
      for (
        var i = s[0],
          u = s.index,
          l = Object.create(null),
          c = function (g) {
            if (s[g] === void 0) return 'continue';
            var k = t[g - 1];
            k.modifier === '*' || k.modifier === '+'
              ? (l[k.name] = s[g].split(k.prefix + k.suffix).map(function (h) {
                  return o(h, k);
                }))
              : (l[k.name] = o(s[g], k));
          },
          p = 1;
        p < s.length;
        p++
      )
        c(p);
      return { path: i, index: u, params: l };
    };
  }
  function Sr(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
  }
  function bg(e) {
    return e && e.sensitive ? '' : 'i';
  }
  function Fb(e, t) {
    if (!t) return e;
    for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, o = r.exec(e.source); o; )
      t.push({
        name: o[1] || n++,
        prefix: '',
        suffix: '',
        modifier: '',
        pattern: '',
      }),
        (o = r.exec(e.source));
    return e;
  }
  function Nb(e, t, r) {
    var n = e.map(function (o) {
      return wg(o, t, r).source;
    });
    return new RegExp('(?:'.concat(n.join('|'), ')'), bg(r));
  }
  function Mb(e, t, r) {
    return qb(Db(e, r), t, r);
  }
  function qb(e, t, r) {
    r === void 0 && (r = {});
    for (
      var n = r.strict,
        o = n === void 0 ? !1 : n,
        a = r.start,
        s = a === void 0 ? !0 : a,
        i = r.end,
        u = i === void 0 ? !0 : i,
        l = r.encode,
        c =
          l === void 0
            ? function (T) {
                return T;
              }
            : l,
        p = r.delimiter,
        g = p === void 0 ? '/#?' : p,
        k = r.endsWith,
        h = k === void 0 ? '' : k,
        j = '['.concat(Sr(h), ']|$'),
        w = '['.concat(Sr(g), ']'),
        d = s ? '^' : '',
        m = 0,
        f = e;
      m < f.length;
      m++
    ) {
      var y = f[m];
      if (typeof y == 'string') d += Sr(c(y));
      else {
        var b = Sr(c(y.prefix)),
          C = Sr(c(y.suffix));
        if (y.pattern)
          if ((t && t.push(y), b || C))
            if (y.modifier === '+' || y.modifier === '*') {
              var x = y.modifier === '*' ? '?' : '';
              d += '(?:'
                .concat(b, '((?:')
                .concat(y.pattern, ')(?:')
                .concat(C)
                .concat(b, '(?:')
                .concat(y.pattern, '))*)')
                .concat(C, ')')
                .concat(x);
            } else
              d += '(?:'
                .concat(b, '(')
                .concat(y.pattern, ')')
                .concat(C, ')')
                .concat(y.modifier);
          else {
            if (y.modifier === '+' || y.modifier === '*')
              throw new TypeError(
                'Can not repeat "'.concat(
                  y.name,
                  '" without a prefix and suffix',
                ),
              );
            d += '('.concat(y.pattern, ')').concat(y.modifier);
          }
        else d += '(?:'.concat(b).concat(C, ')').concat(y.modifier);
      }
    }
    if (u)
      o || (d += ''.concat(w, '?')),
        (d += r.endsWith ? '(?='.concat(j, ')') : '$');
    else {
      var R = e[e.length - 1],
        L =
          typeof R == 'string' ? w.indexOf(R[R.length - 1]) > -1 : R === void 0;
      o || (d += '(?:'.concat(w, '(?=').concat(j, '))?')),
        L || (d += '(?='.concat(w, '|').concat(j, ')'));
    }
    return new RegExp(d, bg(r));
  }
  function wg(e, t, r) {
    return e instanceof RegExp
      ? Fb(e, t)
      : Array.isArray(e)
        ? Nb(e, t, r)
        : Mb(e, t, r);
  }
  var Bb = /[\?|#].*$/g;
  function Eg(e) {
    return new URL(`/${e}`, 'http://localhost').searchParams;
  }
  function yi(e) {
    return e.endsWith('?') ? e : e.replace(Bb, '');
  }
  function xg(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  }
  function Sg(e, t) {
    if (xg(e) || e.startsWith('*')) return e;
    let r = t || (typeof document < 'u' && document.baseURI);
    return r ? decodeURI(new URL(encodeURI(e), r).href) : e;
  }
  function Cg(e, t) {
    if (e instanceof RegExp) return e;
    let r = Sg(e, t);
    return yi(r);
  }
  function Ub(e) {
    return e
      .replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (t, r, n) => {
        let o = '(.*)';
        return r ? (r.startsWith(':') ? `${r}${n}` : `${r}${o}`) : o;
      })
      .replace(/([^\/])(:)(?=\d+)/, '$1\\$2')
      .replace(/^([^\/]+)(:)(?=\/\/)/, '$1\\$2');
  }
  function ki(e, t, r) {
    let n = Cg(t, r),
      o = typeof n == 'string' ? Ub(n) : n,
      a = vg(e),
      s = jg(o, { decode: decodeURIComponent })(a),
      i = (s && s.params) || {};
    return { matches: s !== !1, params: i };
  }
  var Bc = Symbol('kEmitter'),
    Uc = Symbol('kDispatchEvent'),
    v_ = Symbol('kSender'),
    _g = Symbol('kStopPropagationPatched'),
    zg = Symbol('KOnStopPropagation'),
    Ag = class {
      constructor(t) {
        (this.url = t),
          (this.id = oa()),
          (this[Bc] = new xr()),
          (this.callFrame = oi(new Error())),
          (this.__kind = 'EventHandler');
      }
      __kind;
      id;
      callFrame;
      [Bc];
      parse(t) {
        let r = t.event.data;
        return { match: ki(r.client.url, this.url) };
      }
      predicate(t) {
        return t.parsedResult.match.matches;
      }
      async [Uc](t) {
        let r = this.parse({ event: t }),
          n = t.data,
          o = { ...n, params: r.match.params || {} };
        n.client.addEventListener('message', Wn(this)),
          n.client.addEventListener('close', Wn(this)),
          n.server.addEventListener('open', Wn(this)),
          n.server.addEventListener('message', Wn(this)),
          n.server.addEventListener('error', Wn(this)),
          n.server.addEventListener('close', Wn(this)),
          this[Bc].emit('connection', o);
      }
    };
  function Wn(e) {
    return function (r) {
      let n = Reflect.get(r, 'kPropagationStoppedAt');
      if (n && e.id !== n) {
        r.stopImmediatePropagation();
        return;
      }
      Object.defineProperty(r, zg, {
        value() {
          Object.defineProperty(r, 'kPropagationStoppedAt', { value: e.id });
        },
        configurable: !0,
      }),
        Reflect.get(r, _g) ||
          ((r.stopPropagation = new Proxy(r.stopPropagation, {
            apply: (o, a, s) => (
              Reflect.get(r, zg)?.call(e), Reflect.apply(o, a, s)
            ),
          })),
          Object.defineProperty(r, _g, { value: !0, configurable: !1 }));
    };
  }
  function Rg(e) {
    la.on('connection', async (t) => {
      let r = e.getHandlers(),
        n = new MessageEvent('connection', { data: t }),
        o = [];
      for (let a of r)
        Un('EventHandler')(a) &&
          a.predicate({ event: n, parsedResult: a.parse({ event: n }) }) &&
          o.push(a);
      if (o.length > 0) {
        e?.onMockedConnection(t);
        for (let a of o) a[Uc](n);
      } else {
        let a = new Request(t.client.url, {
          headers: { upgrade: 'websocket', connection: 'upgrade' },
        });
        await ai(a, e.getUnhandledRequestStrategy()).catch((s) => {
          let i = new Event('error');
          Object.defineProperty(i, 'cause', {
            enumerable: !0,
            configurable: !1,
            value: s,
          }),
            t.client.socket.dispatchEvent(i);
        }),
          e?.onPassthroughConnection(t),
          t.server.connect();
      }
    });
  }
  function Pt(e) {
    let t = new Date(),
      r = `${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}`;
    return e?.milliseconds
      ? `${r}.${t.getMilliseconds().toString().padStart(3, '0')}`
      : r;
  }
  function ca(e) {
    return e instanceof Blob
      ? e.size
      : e instanceof ArrayBuffer
        ? e.byteLength
        : new Blob([e]).size;
  }
  function vi(e) {
    return e.length <= 24 ? e : `${e.slice(0, 24)}\u2026`;
  }
  async function pa(e) {
    if (e instanceof Blob) {
      let t = await e.text();
      return `Blob(${vi(t)})`;
    }
    if (typeof e == 'object' && 'byteLength' in e) {
      let t = new TextDecoder().decode(e);
      return `ArrayBuffer(${vi(t)})`;
    }
    return vi(e);
  }
  var Gr = {
    system: '#3b82f6',
    outgoing: '#22c55e',
    incoming: '#ef4444',
    mocked: '#ff6a33',
  };
  function Pg(e) {
    let { client: t, server: r } = e;
    $b(t),
      t.addEventListener('message', (n) => {
        Vb(n);
      }),
      t.addEventListener('close', (n) => {
        Hb(n);
      }),
      t.socket.addEventListener('error', (n) => {
        Wb(n);
      }),
      (t.send = new Proxy(t.send, {
        apply(n, o, a) {
          let [s] = a,
            i = new MessageEvent('message', { data: s });
          return (
            Object.defineProperties(i, {
              currentTarget: { enumerable: !0, writable: !1, value: t.socket },
              target: { enumerable: !0, writable: !1, value: t.socket },
            }),
            queueMicrotask(() => {
              Jb(i);
            }),
            Reflect.apply(n, o, a)
          );
        },
      })),
      r.addEventListener(
        'open',
        () => {
          r.addEventListener('message', (n) => {
            Kb(n);
          });
        },
        { once: !0 },
      ),
      (r.send = new Proxy(r.send, {
        apply(n, o, a) {
          let [s] = a,
            i = new MessageEvent('message', { data: s });
          return (
            Object.defineProperties(i, {
              currentTarget: { enumerable: !0, writable: !1, value: r.socket },
              target: { enumerable: !0, writable: !1, value: r.socket },
            }),
            Gb(i),
            Reflect.apply(n, o, a)
          );
        },
      }));
  }
  function $b(e) {
    let t = wr(e.url);
    console.groupCollapsed(
      M.formatMessage(`${Pt()} %c\u25B6%c ${t}`),
      `color:${Gr.system}`,
      'color:inherit',
    ),
      console.log('Client:', e.socket),
      console.groupEnd();
  }
  function Hb(e) {
    let t = e.target,
      r = wr(t.url);
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c\u25A0%c ${r}`),
      `color:${Gr.system}`,
      'color:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  function Wb(e) {
    let t = e.target,
      r = wr(t.url);
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c\xD7%c ${r}`),
      `color:${Gr.system}`,
      'color:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  async function Vb(e) {
    let t = ca(e.data),
      r = await pa(e.data),
      n = e.defaultPrevented ? '\u21E1' : '\u2B06';
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c${n}%c ${r} %c${t}%c`),
      `color:${Gr.outgoing}`,
      'color:inherit',
      'color:gray;font-weight:normal',
      'color:inherit;font-weight:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  async function Gb(e) {
    let t = ca(e.data),
      r = await pa(e.data);
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c\u2B06%c ${r} %c${t}%c`),
      `color:${Gr.mocked}`,
      'color:inherit',
      'color:gray;font-weight:normal',
      'color:inherit;font-weight:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  async function Jb(e) {
    let t = ca(e.data),
      r = await pa(e.data);
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c\u2B07%c ${r} %c${t}%c`),
      `color:${Gr.mocked}`,
      'color:inherit',
      'color:gray;font-weight:normal',
      'color:inherit;font-weight:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  async function Kb(e) {
    let t = ca(e.data),
      r = await pa(e.data),
      n = e.defaultPrevented ? '\u21E3' : '\u2B07';
    console.groupCollapsed(
      M.formatMessage(`${Pt({ milliseconds: !0 })} %c${n}%c ${r} %c${t}%c`),
      `color:${Gr.incoming}`,
      'color:inherit',
      'color:gray;font-weight:normal',
      'color:inherit;font-weight:inherit',
    ),
      console.log(e),
      console.groupEnd();
  }
  var Xb = /(%?)(%([sdijo]))/g;
  function Qb(e, t) {
    switch (t) {
      case 's':
        return e;
      case 'd':
      case 'i':
        return Number(e);
      case 'j':
        return JSON.stringify(e);
      case 'o': {
        if (typeof e == 'string') return e;
        let r = JSON.stringify(e);
        return r === '{}' || r === '[]' || /^\[object .+?\]$/.test(r) ? e : r;
      }
    }
  }
  function ha(e, ...t) {
    if (t.length === 0) return e;
    let r = 0,
      n = e.replace(Xb, (o, a, s, i) => {
        let u = t[r],
          l = Qb(u, i);
        return a ? o : (r++, l);
      });
    return (
      r < t.length && (n += ` ${t.slice(r).join(' ')}`),
      (n = n.replace(/%{2,2}/g, '%')),
      n
    );
  }
  var Yb = 2;
  function Zb(e) {
    if (!e.stack) return;
    let t = e.stack.split(`
`);
    t.splice(1, Yb),
      (e.stack = t.join(`
`));
  }
  var ew = class extends Error {
      constructor(e, ...t) {
        super(e),
          (this.message = e),
          (this.name = 'Invariant Violation'),
          (this.message = ha(e, ...t)),
          Zb(this);
      }
    },
    Cr = (e, t, ...r) => {
      if (!e) throw new ew(t, ...r);
    };
  Cr.as = (e, t, r, ...n) => {
    if (!t) {
      let o = n.length === 0 ? r : ha(r, ...n),
        a;
      try {
        a = Reflect.construct(e, [o]);
      } catch {
        a = e(o);
      }
      throw a;
    }
  };
  function Qc() {
    if (typeof navigator < 'u' && navigator.product === 'ReactNative')
      return !0;
    if (typeof process < 'u') {
      let e = process.type;
      return e === 'renderer' || e === 'worker'
        ? !1
        : !!(process.versions && process.versions.node);
    }
    return !1;
  }
  var Gc = async (e) => {
    try {
      return {
        error: null,
        data: await e().catch((r) => {
          throw r;
        }),
      };
    } catch (t) {
      return { error: t, data: null };
    }
  };
  function tw(e) {
    return new URL(e, location.href).href;
  }
  function $c(e, t, r) {
    return (
      [e.active, e.installing, e.waiting]
        .filter((s) => s != null)
        .find((s) => r(s.scriptURL, t)) || null
    );
  }
  var rw = async (e, t = {}, r) => {
    let n = tw(e),
      o = await navigator.serviceWorker
        .getRegistrations()
        .then((i) => i.filter((u) => $c(u, n, r)));
    !navigator.serviceWorker.controller && o.length > 0 && location.reload();
    let [a] = o;
    if (a) return a.update(), [$c(a, n, r), a];
    let s = await Gc(async () => {
      let i = await navigator.serviceWorker.register(e, t);
      return [$c(i, n, r), i];
    });
    if (s.error) {
      if (s.error.message.includes('(404)')) {
        let u = new URL(t?.scope || '/', location.href);
        throw new Error(
          M.formatMessage(`Failed to register a Service Worker for scope ('${u.href}') with script ('${n}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`),
        );
      }
      throw new Error(
        M.formatMessage(
          `Failed to register the Service Worker:

%s`,
          s.error.message,
        ),
      );
    }
    return s.data;
  };
  function Ng(e = {}) {
    if (e.quiet) return;
    let t = e.message || 'Mocking enabled.';
    console.groupCollapsed(
      `%c${M.formatMessage(t)}`,
      'color:orangered;font-weight:bold;',
    ),
      console.log(
        '%cDocumentation: %chttps://mswjs.io/docs',
        'font-weight:bold',
        'font-weight:normal',
      ),
      console.log('Found an issue? https://github.com/mswjs/msw/issues'),
      e.workerUrl && console.log('Worker script URL:', e.workerUrl),
      e.workerScope && console.log('Worker scope:', e.workerScope),
      e.client &&
        console.log('Client ID: %s (%s)', e.client.id, e.client.frameType),
      console.groupEnd();
  }
  async function nw(e, t) {
    e.workerChannel.send('MOCK_ACTIVATE');
    let { payload: r } = await e.events.once('MOCKING_ENABLED');
    if (e.isMockingEnabled) {
      M.warn(
        'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
      );
      return;
    }
    (e.isMockingEnabled = !0),
      Ng({
        quiet: t.quiet,
        workerScope: e.registration?.scope,
        workerUrl: e.worker?.scriptURL,
        client: r.client,
      });
  }
  var ow = class {
    constructor(e) {
      this.port = e;
    }
    postMessage(e, ...t) {
      let [r, n] = t;
      this.port.postMessage({ type: e, data: r }, { transfer: n });
    }
  };
  function aw(e) {
    if (!['HEAD', 'GET'].includes(e.method)) return e.body;
  }
  function sw(e) {
    return new Request(e.url, { ...e, body: aw(e) });
  }
  var iw = (e, t) => async (r, n) => {
    let o = new ow(r.ports[0]),
      a = n.payload.id,
      s = sw(n.payload),
      i = s.clone(),
      u = s.clone();
    Mn.cache.set(s, u), e.requests.set(a, u);
    try {
      await ci(
        s,
        a,
        e.getRequestHandlers().filter(Un('RequestHandler')),
        t,
        e.emitter,
        {
          onPassthroughResponse() {
            o.postMessage('PASSTHROUGH');
          },
          async onMockedResponse(l, { handler: c, parsedResult: p }) {
            let g = l.clone(),
              k = l.clone(),
              h = ig(l);
            if (e.supports.readableStreamTransfer) {
              let j = l.body;
              o.postMessage(
                'MOCK_RESPONSE',
                { ...h, body: j },
                j ? [j] : void 0,
              );
            } else {
              let j = l.body === null ? null : await g.arrayBuffer();
              o.postMessage('MOCK_RESPONSE', { ...h, body: j });
            }
            t.quiet ||
              e.emitter.once('response:mocked', () => {
                c.log({ request: i, response: k, parsedResult: p });
              });
          },
        },
      );
    } catch (l) {
      l instanceof Error &&
        (M.error(
          `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
          s.method,
          s.url,
          l.stack ?? l,
        ),
        o.postMessage('MOCK_RESPONSE', {
          status: 500,
          statusText: 'Request Handler Error',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: l.name,
            message: l.message,
            stack: l.stack,
          }),
        }));
    }
  };
  async function uw(e) {
    e.workerChannel.send('INTEGRITY_CHECK_REQUEST');
    let { payload: t } = await e.events.once('INTEGRITY_CHECK_RESPONSE');
    t.checksum !== '00729d72e3b82faf54ca8b9621dbb96f' &&
      M.warn(`The currently registered Service Worker has been generated by a different version of MSW (${t.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
  }
  var lw = new TextEncoder();
  function cw(e) {
    return lw.encode(e);
  }
  function pw(e, t) {
    return new TextDecoder(t).decode(e);
  }
  function mw(e) {
    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
  }
  var Jn = Symbol('isPatchedModule'),
    Gn = class extends Response {
      static isConfigurableStatusCode(e) {
        return e >= 200 && e <= 599;
      }
      static isRedirectResponse(e) {
        return Gn.STATUS_CODES_WITH_REDIRECT.includes(e);
      }
      static isResponseWithBody(e) {
        return !Gn.STATUS_CODES_WITHOUT_BODY.includes(e);
      }
      static setUrl(e, t) {
        e &&
          t.url == '' &&
          Object.defineProperty(t, 'url', {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !1,
          });
      }
      constructor(e, t = {}) {
        var r;
        let n = (r = t.status) != null ? r : 200,
          o = Gn.isConfigurableStatusCode(n) ? n : 200,
          a = Gn.isResponseWithBody(n) ? e : null;
        if ((super(a, { ...t, status: o }), n !== o)) {
          let s = Object.getOwnPropertySymbols(this).find(
            (i) => i.description === 'state',
          );
          if (s) {
            let i = Reflect.get(this, s);
            Reflect.set(i, 'status', n);
          } else
            Object.defineProperty(this, 'status', {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !1,
            });
        }
        Gn.setUrl(t.url, this);
      }
    },
    Vt = Gn;
  Vt.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
  Vt.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
  var dw = Object.defineProperty,
    fw = (e, t) => {
      for (var r in t) dw(e, r, { get: t[r], enumerable: !0 });
    },
    Jc = {};
  fw(Jc, {
    blue: () => gw,
    gray: () => Kc,
    green: () => kw,
    red: () => yw,
    yellow: () => hw,
  });
  function hw(e) {
    return `\x1B[33m${e}\x1B[0m`;
  }
  function gw(e) {
    return `\x1B[34m${e}\x1B[0m`;
  }
  function Kc(e) {
    return `\x1B[90m${e}\x1B[0m`;
  }
  function yw(e) {
    return `\x1B[31m${e}\x1B[0m`;
  }
  function kw(e) {
    return `\x1B[32m${e}\x1B[0m`;
  }
  var wi = Qc(),
    Mg = class {
      constructor(e) {
        (this.name = e), (this.prefix = `[${this.name}]`);
        let t = Og('DEBUG'),
          r = Og('LOG_LEVEL');
        t === '1' || t === 'true' || (typeof t < 'u' && this.name.startsWith(t))
          ? ((this.debug = ma(r, 'debug') ? Ot : this.debug),
            (this.info = ma(r, 'info') ? Ot : this.info),
            (this.success = ma(r, 'success') ? Ot : this.success),
            (this.warning = ma(r, 'warning') ? Ot : this.warning),
            (this.error = ma(r, 'error') ? Ot : this.error))
          : ((this.info = Ot),
            (this.success = Ot),
            (this.warning = Ot),
            (this.error = Ot),
            (this.only = Ot));
      }
      prefix;
      extend(e) {
        return new Mg(`${this.name}:${e}`);
      }
      debug(e, ...t) {
        this.logEntry({
          level: 'debug',
          message: Kc(e),
          positionals: t,
          prefix: this.prefix,
          colors: { prefix: 'gray' },
        });
      }
      info(e, ...t) {
        this.logEntry({
          level: 'info',
          message: e,
          positionals: t,
          prefix: this.prefix,
          colors: { prefix: 'blue' },
        });
        let r = new vw();
        return (n, ...o) => {
          r.measure(),
            this.logEntry({
              level: 'info',
              message: `${n} ${Kc(`${r.deltaTime}ms`)}`,
              positionals: o,
              prefix: this.prefix,
              colors: { prefix: 'blue' },
            });
        };
      }
      success(e, ...t) {
        this.logEntry({
          level: 'info',
          message: e,
          positionals: t,
          prefix: `\u2714 ${this.prefix}`,
          colors: { timestamp: 'green', prefix: 'green' },
        });
      }
      warning(e, ...t) {
        this.logEntry({
          level: 'warning',
          message: e,
          positionals: t,
          prefix: `\u26A0 ${this.prefix}`,
          colors: { timestamp: 'yellow', prefix: 'yellow' },
        });
      }
      error(e, ...t) {
        this.logEntry({
          level: 'error',
          message: e,
          positionals: t,
          prefix: `\u2716 ${this.prefix}`,
          colors: { timestamp: 'red', prefix: 'red' },
        });
      }
      only(e) {
        e();
      }
      createEntry(e, t) {
        return { timestamp: new Date(), level: e, message: t };
      }
      logEntry(e) {
        let {
            level: t,
            message: r,
            prefix: n,
            colors: o,
            positionals: a = [],
          } = e,
          s = this.createEntry(t, r),
          i = o?.timestamp || 'gray',
          u = o?.prefix || 'gray',
          l = { timestamp: Jc[i], prefix: Jc[u] };
        this.getWriter(t)(
          [l.timestamp(this.formatTimestamp(s.timestamp))]
            .concat(n != null ? l.prefix(n) : [])
            .concat(Lg(r))
            .join(' '),
          ...a.map(Lg),
        );
      }
      formatTimestamp(e) {
        return `${e.toLocaleTimeString('en-GB')}:${e.getMilliseconds()}`;
      }
      getWriter(e) {
        switch (e) {
          case 'debug':
          case 'success':
          case 'info':
            return jw;
          case 'warning':
            return bw;
          case 'error':
            return ww;
        }
      }
    },
    vw = class {
      startTime;
      endTime;
      deltaTime;
      constructor() {
        this.startTime = performance.now();
      }
      measure() {
        this.endTime = performance.now();
        let e = this.endTime - this.startTime;
        this.deltaTime = e.toFixed(2);
      }
    },
    Ot = () => {};
  function jw(e, ...t) {
    if (wi) {
      process.stdout.write(
        ha(e, ...t) +
          `
`,
      );
      return;
    }
    console.log(e, ...t);
  }
  function bw(e, ...t) {
    if (wi) {
      process.stderr.write(
        ha(e, ...t) +
          `
`,
      );
      return;
    }
    console.warn(e, ...t);
  }
  function ww(e, ...t) {
    if (wi) {
      process.stderr.write(
        ha(e, ...t) +
          `
`,
      );
      return;
    }
    console.error(e, ...t);
  }
  function Og(e) {
    return wi ? process.env[e] : globalThis[e]?.toString();
  }
  function ma(e, t) {
    return e !== void 0 && e !== t;
  }
  function Lg(e) {
    return typeof e > 'u'
      ? 'undefined'
      : e === null
        ? 'null'
        : typeof e == 'string'
          ? e
          : typeof e == 'object'
            ? JSON.stringify(e)
            : e.toString();
  }
  var Ew = class extends Error {
      constructor(e, t, r) {
        super(
          `Possible EventEmitter memory leak detected. ${r} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`,
        ),
          (this.emitter = e),
          (this.type = t),
          (this.count = r),
          (this.name = 'MaxListenersExceededWarning');
      }
    },
    qg = class {
      static listenerCount(e, t) {
        return e.listenerCount(t);
      }
      constructor() {
        (this.events = new Map()),
          (this.maxListeners = qg.defaultMaxListeners),
          (this.hasWarnedAboutPotentialMemoryLeak = !1);
      }
      _emitInternalEvent(e, t, r) {
        this.emit(e, t, r);
      }
      _getListeners(e) {
        return Array.prototype.concat.apply([], this.events.get(e)) || [];
      }
      _removeListener(e, t) {
        let r = e.indexOf(t);
        return r > -1 && e.splice(r, 1), [];
      }
      _wrapOnceListener(e, t) {
        let r = (...n) => (this.removeListener(e, r), t.apply(this, n));
        return Object.defineProperty(r, 'name', { value: t.name }), r;
      }
      setMaxListeners(e) {
        return (this.maxListeners = e), this;
      }
      getMaxListeners() {
        return this.maxListeners;
      }
      eventNames() {
        return Array.from(this.events.keys());
      }
      emit(e, ...t) {
        let r = this._getListeners(e);
        return (
          r.forEach((n) => {
            n.apply(this, t);
          }),
          r.length > 0
        );
      }
      addListener(e, t) {
        this._emitInternalEvent('newListener', e, t);
        let r = this._getListeners(e).concat(t);
        if (
          (this.events.set(e, r),
          this.maxListeners > 0 &&
            this.listenerCount(e) > this.maxListeners &&
            !this.hasWarnedAboutPotentialMemoryLeak)
        ) {
          this.hasWarnedAboutPotentialMemoryLeak = !0;
          let n = new Ew(this, e, this.listenerCount(e));
          console.warn(n);
        }
        return this;
      }
      on(e, t) {
        return this.addListener(e, t);
      }
      once(e, t) {
        return this.addListener(e, this._wrapOnceListener(e, t));
      }
      prependListener(e, t) {
        let r = this._getListeners(e);
        if (r.length > 0) {
          let n = [t].concat(r);
          this.events.set(e, n);
        } else this.events.set(e, r.concat(t));
        return this;
      }
      prependOnceListener(e, t) {
        return this.prependListener(e, this._wrapOnceListener(e, t));
      }
      removeListener(e, t) {
        let r = this._getListeners(e);
        return (
          r.length > 0 &&
            (this._removeListener(r, t),
            this.events.set(e, r),
            this._emitInternalEvent('removeListener', e, t)),
          this
        );
      }
      off(e, t) {
        return this.removeListener(e, t);
      }
      removeAllListeners(e) {
        return e ? this.events.delete(e) : this.events.clear(), this;
      }
      listeners(e) {
        return Array.from(this._getListeners(e));
      }
      listenerCount(e) {
        return this._getListeners(e).length;
      }
      rawListeners(e) {
        return this.listeners(e);
      }
    },
    Bg = qg;
  Bg.defaultMaxListeners = 10;
  var xw = 'x-interceptors-internal-request-id';
  function Tg(e) {
    return globalThis[e] || void 0;
  }
  function Sw(e, t) {
    globalThis[e] = t;
  }
  function Cw(e) {
    delete globalThis[e];
  }
  var Yc = class {
    constructor(e) {
      (this.symbol = e),
        (this.readyState = 'INACTIVE'),
        (this.emitter = new Bg()),
        (this.subscriptions = []),
        (this.logger = new Mg(e.description)),
        this.emitter.setMaxListeners(0),
        this.logger.info('constructing the interceptor...');
    }
    checkEnvironment() {
      return !0;
    }
    apply() {
      let e = this.logger.extend('apply');
      if (
        (e.info('applying the interceptor...'), this.readyState === 'APPLIED')
      ) {
        e.info('intercepted already applied!');
        return;
      }
      if (!this.checkEnvironment()) {
        e.info('the interceptor cannot be applied in this environment!');
        return;
      }
      this.readyState = 'APPLYING';
      let r = this.getInstance();
      if (r) {
        e.info('found a running instance, reusing...'),
          (this.on = (n, o) => (
            e.info('proxying the "%s" listener', n),
            r.emitter.addListener(n, o),
            this.subscriptions.push(() => {
              r.emitter.removeListener(n, o),
                e.info('removed proxied "%s" listener!', n);
            }),
            this
          )),
          (this.readyState = 'APPLIED');
        return;
      }
      e.info('no running instance found, setting up a new instance...'),
        this.setup(),
        this.setInstance(),
        (this.readyState = 'APPLIED');
    }
    setup() {}
    on(e, t) {
      let r = this.logger.extend('on');
      return this.readyState === 'DISPOSING' || this.readyState === 'DISPOSED'
        ? (r.info('cannot listen to events, already disposed!'), this)
        : (r.info('adding "%s" event listener:', e, t),
          this.emitter.on(e, t),
          this);
    }
    once(e, t) {
      return this.emitter.once(e, t), this;
    }
    off(e, t) {
      return this.emitter.off(e, t), this;
    }
    removeAllListeners(e) {
      return this.emitter.removeAllListeners(e), this;
    }
    dispose() {
      let e = this.logger.extend('dispose');
      if (this.readyState === 'DISPOSED') {
        e.info('cannot dispose, already disposed!');
        return;
      }
      if (
        (e.info('disposing the interceptor...'),
        (this.readyState = 'DISPOSING'),
        !this.getInstance())
      ) {
        e.info('no interceptors running, skipping dispose...');
        return;
      }
      if (
        (this.clearInstance(),
        e.info('global symbol deleted:', Tg(this.symbol)),
        this.subscriptions.length > 0)
      ) {
        e.info('disposing of %d subscriptions...', this.subscriptions.length);
        for (let t of this.subscriptions) t();
        (this.subscriptions = []),
          e.info('disposed of all subscriptions!', this.subscriptions.length);
      }
      this.emitter.removeAllListeners(),
        e.info('destroyed the listener!'),
        (this.readyState = 'DISPOSED');
    }
    getInstance() {
      var e;
      let t = Tg(this.symbol);
      return (
        this.logger.info(
          'retrieved global instance:',
          (e = t?.constructor) == null ? void 0 : e.name,
        ),
        t
      );
    }
    setInstance() {
      Sw(this.symbol, this),
        this.logger.info('set global instance!', this.symbol.description);
    }
    clearInstance() {
      Cw(this.symbol),
        this.logger.info('cleared global instance!', this.symbol.description);
    }
  };
  function Ug() {
    return Math.random().toString(16).slice(2);
  }
  var Xc = class extends Yc {
    constructor(e) {
      (Xc.symbol = Symbol(e.name)),
        super(Xc.symbol),
        (this.interceptors = e.interceptors);
    }
    setup() {
      let e = this.logger.extend('setup');
      e.info('applying all %d interceptors...', this.interceptors.length);
      for (let t of this.interceptors)
        e.info('applying "%s" interceptor...', t.constructor.name),
          t.apply(),
          e.info('adding interceptor dispose subscription'),
          this.subscriptions.push(() => t.dispose());
    }
    on(e, t) {
      for (let r of this.interceptors) r.on(e, t);
      return this;
    }
    once(e, t) {
      for (let r of this.interceptors) r.once(e, t);
      return this;
    }
    off(e, t) {
      for (let r of this.interceptors) r.off(e, t);
      return this;
    }
    removeAllListeners(e) {
      for (let t of this.interceptors) t.removeAllListeners(e);
      return this;
    }
  };
  function _w(e) {
    return (t, r) => {
      let { payload: n } = r,
        { requestId: o } = n,
        a = e.requests.get(o);
      if ((e.requests.delete(o), n.type?.includes('opaque'))) return;
      let s =
        n.status === 0
          ? Response.error()
          : new Vt(Vt.isResponseWithBody(n.status) ? n.body : null, {
              ...n,
              url: a.url,
            });
      e.emitter.emit(
        n.isMockedResponse ? 'response:mocked' : 'response:bypass',
        { response: s, request: a, requestId: n.requestId },
      );
    };
  }
  function zw(e, t) {
    !t?.quiet &&
      !location.href.startsWith(e.scope) &&
      M.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
  }
  var Aw = (e) =>
    function (r, n) {
      return (async () => {
        e.events.removeAllListeners(),
          e.workerChannel.on('REQUEST', iw(e, r)),
          e.workerChannel.on('RESPONSE', _w(e));
        let s = await rw(
            r.serviceWorker.url,
            r.serviceWorker.options,
            r.findWorker,
          ),
          [i, u] = s;
        if (!i) {
          let l = n?.findWorker
            ? M.formatMessage(
                `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                r.serviceWorker.url,
              )
            : M.formatMessage(
                `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                r.serviceWorker.url,
                location.host,
              );
          throw new Error(l);
        }
        return (
          (e.worker = i),
          (e.registration = u),
          e.events.addListener(window, 'beforeunload', () => {
            i.state !== 'redundant' && e.workerChannel.send('CLIENT_CLOSED'),
              window.clearInterval(e.keepAliveInterval),
              window.postMessage({ type: 'msw/worker:stop' });
          }),
          await uw(e).catch((l) => {
            M.error(
              'Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below.',
            ),
              console.error(l);
          }),
          (e.keepAliveInterval = window.setInterval(
            () => e.workerChannel.send('KEEPALIVE_REQUEST'),
            5e3,
          )),
          zw(u, e.startOptions),
          u
        );
      })().then(async (s) => {
        let i = s.installing || s.waiting;
        return (
          i &&
            (await new Promise((u) => {
              i.addEventListener('statechange', () => {
                if (i.state === 'activated') return u();
              });
            })),
          await nw(e, r).catch((u) => {
            throw new Error(`Failed to enable mocking: ${u?.message}`);
          }),
          s
        );
      });
    };
  function $g(e = {}) {
    e.quiet ||
      console.log(
        `%c${M.formatMessage('Mocking disabled.')}`,
        'color:orangered;font-weight:bold;',
      );
  }
  var Rw = (e) =>
      function () {
        if (!e.isMockingEnabled) {
          M.warn(
            'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.',
          );
          return;
        }
        e.workerChannel.send('MOCK_DEACTIVATE'),
          (e.isMockingEnabled = !1),
          window.clearInterval(e.keepAliveInterval),
          window.postMessage({ type: 'msw/worker:stop' }),
          $g({ quiet: e.startOptions?.quiet });
      },
    Pw = {
      serviceWorker: { url: '/mockServiceWorker.js', options: null },
      quiet: !1,
      waitUntilReady: !0,
      onUnhandledRequest: 'warn',
      findWorker(e, t) {
        return e === t;
      },
    };
  function Ow() {
    let e = (t, r) => {
      (e.state = 'pending'),
        (e.resolve = (n) => {
          if (e.state !== 'pending') return;
          e.result = n;
          let o = (a) => ((e.state = 'fulfilled'), a);
          return t(n instanceof Promise ? n : Promise.resolve(n).then(o));
        }),
        (e.reject = (n) => {
          if (e.state === 'pending')
            return (
              queueMicrotask(() => {
                e.state = 'rejected';
              }),
              r((e.rejectionReason = n))
            );
        });
    };
    return e;
  }
  var Zc = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(e = null) {
        let t = Ow();
        super((r, n) => {
          t(r, n), e?.(t.resolve, t.reject);
        }),
          (this.#e = t),
          (this.resolve = this.#e.resolve),
          (this.reject = this.#e.reject);
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(e, t) {
        return this.#t(super.then(e, t));
      }
      catch(e) {
        return this.#t(super.catch(e));
      }
      finally(e) {
        return this.#t(super.finally(e));
      }
      #t(e) {
        return Object.defineProperties(e, {
          resolve: { configurable: !0, value: this.resolve },
          reject: { configurable: !0, value: this.reject },
        });
      }
    },
    ji = class extends Error {
      constructor(e) {
        super(e),
          (this.name = 'InterceptorError'),
          Object.setPrototypeOf(this, ji.prototype);
      }
    },
    da = Symbol('kRequestHandled'),
    Lt = Symbol('kResponsePromise'),
    ep = class {
      constructor(e) {
        (this.request = e), (this[da] = !1), (this[Lt] = new Zc());
      }
      respondWith(e) {
        Cr.as(
          ji,
          !this[da],
          'Failed to respond to the "%s %s" request: the "request" event has already been handled.',
          this.request.method,
          this.request.url,
        ),
          (this[da] = !0),
          this[Lt].resolve(e);
      }
      errorWith(e) {
        Cr.as(
          ji,
          !this[da],
          'Failed to error the "%s %s" request: the "request" event has already been handled.',
          this.request.method,
          this.request.url,
        ),
          (this[da] = !0),
          this[Lt].resolve(e);
      }
    };
  async function bi(e, t, ...r) {
    let n = e.listeners(t);
    if (n.length !== 0) for (let o of n) await o.apply(e, r);
  }
  function Lw(e, t) {
    try {
      return e[t], !0;
    } catch {
      return !1;
    }
  }
  function Tw(e) {
    return new Response(
      JSON.stringify(
        e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack }
          : e,
      ),
      {
        status: 500,
        statusText: 'Unhandled Exception',
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
  function Dw(e) {
    return Lw(e, 'type') && e.type === 'error';
  }
  function Iw(e) {
    return e == null || !(e instanceof Error)
      ? !1
      : 'code' in e && 'errno' in e;
  }
  async function Hg(e) {
    let t = async (a) => (
        a instanceof Error
          ? e.onError(a)
          : Dw(a)
            ? e.onRequestError(a)
            : await e.onResponse(a),
        !0
      ),
      r = async (a) => {
        if (a instanceof ji) throw o.error;
        return Iw(a)
          ? (e.onError(a), !0)
          : a instanceof Response
            ? await t(a)
            : !1;
      };
    e.emitter.once('request', ({ requestId: a }) => {
      a === e.requestId &&
        e.controller[Lt].state === 'pending' &&
        e.controller[Lt].resolve(void 0);
    });
    let n = new Zc();
    e.request.signal &&
      (e.request.signal.aborted
        ? n.reject(e.request.signal.reason)
        : e.request.signal.addEventListener(
            'abort',
            () => {
              n.reject(e.request.signal.reason);
            },
            { once: !0 },
          ));
    let o = await Gc(async () => {
      let a = bi(e.emitter, 'request', {
        requestId: e.requestId,
        request: e.request,
        controller: e.controller,
      });
      return (
        await Promise.race([n, a, e.controller[Lt]]), await e.controller[Lt]
      );
    });
    if (n.state === 'rejected') return e.onError(n.rejectionReason), !0;
    if (o.error) {
      if (await r(o.error)) return !0;
      if (e.emitter.listenerCount('unhandledException') > 0) {
        let a = new ep(e.request);
        await bi(e.emitter, 'unhandledException', {
          error: o.error,
          request: e.request,
          requestId: e.requestId,
          controller: a,
        }).then(() => {
          a[Lt].state === 'pending' && a[Lt].resolve(void 0);
        });
        let s = await Gc(() => a[Lt]);
        if (s.error) return r(s.error);
        if (s.data) return t(s.data);
      }
      return e.onResponse(Tw(o.error)), !0;
    }
    return o.data ? t(o.data) : !1;
  }
  function Wg(e) {
    let t = Object.getOwnPropertyDescriptor(globalThis, e);
    return typeof t > 'u' ||
      (typeof t.get == 'function' && typeof t.get() > 'u') ||
      (typeof t.get > 'u' && t.value == null)
      ? !1
      : typeof t.set > 'u' && !t.configurable
        ? (console.error(
            `[MSW] Failed to apply interceptor: the global \`${e}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`,
          ),
          !1)
        : !0;
  }
  function Fw(e) {
    try {
      return new URL(e), !0;
    } catch {
      return !1;
    }
  }
  function Jr(e) {
    return Object.assign(new TypeError('Failed to fetch'), { cause: e });
  }
  var Nw = [
      'content-encoding',
      'content-language',
      'content-location',
      'content-type',
      'content-length',
    ],
    Hc = Symbol('kRedirectCount');
  async function Mw(e, t) {
    if (t.status !== 303 && e.body != null) return Promise.reject(Jr());
    let r = new URL(e.url),
      n;
    try {
      n = new URL(t.headers.get('location'), e.url);
    } catch (a) {
      return Promise.reject(Jr(a));
    }
    if (!(n.protocol === 'http:' || n.protocol === 'https:'))
      return Promise.reject(Jr('URL scheme must be a HTTP(S) scheme'));
    if (Reflect.get(e, Hc) > 20)
      return Promise.reject(Jr('redirect count exceeded'));
    if (
      (Object.defineProperty(e, Hc, { value: (Reflect.get(e, Hc) || 0) + 1 }),
      e.mode === 'cors' && (n.username || n.password) && !Dg(r, n))
    )
      return Promise.reject(
        Jr('cross origin not allowed for request mode "cors"'),
      );
    let o = {};
    return (
      (([301, 302].includes(t.status) && e.method === 'POST') ||
        (t.status === 303 && !['HEAD', 'GET'].includes(e.method))) &&
        ((o.method = 'GET'),
        (o.body = null),
        Nw.forEach((a) => {
          e.headers.delete(a);
        })),
      Dg(r, n) ||
        (e.headers.delete('authorization'),
        e.headers.delete('proxy-authorization'),
        e.headers.delete('cookie'),
        e.headers.delete('host')),
      (o.headers = e.headers),
      fetch(new Request(n, o))
    );
  }
  function Dg(e, t) {
    return (
      (e.origin === t.origin && e.origin === 'null') ||
      (e.protocol === t.protocol &&
        e.hostname === t.hostname &&
        e.port === t.port)
    );
  }
  var qw = class extends TransformStream {
      constructor() {
        console.warn(
          '[Interceptors]: Brotli decompression of response streams is not supported in the browser',
        ),
          super({
            transform(e, t) {
              t.enqueue(e);
            },
          });
      }
    },
    Bw = class extends TransformStream {
      constructor(e, ...t) {
        super({}, ...t);
        let r = [super.readable, ...e].reduce((n, o) => n.pipeThrough(o));
        Object.defineProperty(this, 'readable', {
          get() {
            return r;
          },
        });
      }
    };
  function Uw(e) {
    return e
      .toLowerCase()
      .split(',')
      .map((t) => t.trim());
  }
  function $w(e) {
    if (e === '') return null;
    let t = Uw(e);
    if (t.length === 0) return null;
    let r = t.reduceRight(
      (n, o) =>
        o === 'gzip' || o === 'x-gzip'
          ? n.concat(new DecompressionStream('gzip'))
          : o === 'deflate'
            ? n.concat(new DecompressionStream('deflate'))
            : o === 'br'
              ? n.concat(new qw())
              : ((n.length = 0), n),
      [],
    );
    return new Bw(r);
  }
  function Hw(e) {
    if (e.body === null) return null;
    let t = $w(e.headers.get('content-encoding') || '');
    return t ? (e.body.pipeTo(t.writable), t.readable) : null;
  }
  var Vg = class extends Yc {
      constructor() {
        super(Vg.symbol);
      }
      checkEnvironment() {
        return Wg('fetch');
      }
      async setup() {
        let e = globalThis.fetch;
        Cr(!e[Jn], 'Failed to patch the "fetch" module: already patched.'),
          (globalThis.fetch = async (t, r) => {
            let n = Ug(),
              o =
                typeof t == 'string' && typeof location < 'u' && !Fw(t)
                  ? new URL(t, location.origin)
                  : t,
              a = new Request(o, r),
              s = new Zc(),
              i = new ep(a);
            return (
              this.logger.info('[%s] %s', a.method, a.url),
              this.logger.info('awaiting for the mocked response...'),
              this.logger.info(
                'emitting the "request" event for %s listener(s)...',
                this.emitter.listenerCount('request'),
              ),
              (await Hg({
                request: a,
                requestId: n,
                emitter: this.emitter,
                controller: i,
                onResponse: async (l) => {
                  this.logger.info('received mocked response!', {
                    rawResponse: l,
                  });
                  let c = Hw(l),
                    p = c === null ? l : new Vt(c, l);
                  if ((Vt.setUrl(a.url, p), Vt.isRedirectResponse(p.status))) {
                    if (a.redirect === 'error') {
                      s.reject(Jr('unexpected redirect'));
                      return;
                    }
                    if (a.redirect === 'follow') {
                      Mw(a, p).then(
                        (g) => {
                          s.resolve(g);
                        },
                        (g) => {
                          s.reject(g);
                        },
                      );
                      return;
                    }
                  }
                  this.emitter.listenerCount('response') > 0 &&
                    (this.logger.info('emitting the "response" event...'),
                    await bi(this.emitter, 'response', {
                      response: p.clone(),
                      isMockedResponse: !0,
                      request: a,
                      requestId: n,
                    })),
                    s.resolve(p);
                },
                onRequestError: (l) => {
                  this.logger.info('request has errored!', { response: l }),
                    s.reject(Jr(l));
                },
                onError: (l) => {
                  this.logger.info('request has been aborted!', { error: l }),
                    s.reject(l);
                },
              }))
                ? (this.logger.info(
                    'request has been handled, returning mock promise...',
                  ),
                  s)
                : (this.logger.info(
                    'no mocked response received, performing request as-is...',
                  ),
                  e(a).then(async (l) => {
                    if (
                      (this.logger.info('original fetch performed', l),
                      this.emitter.listenerCount('response') > 0)
                    ) {
                      this.logger.info('emitting the "response" event...');
                      let c = l.clone();
                      await bi(this.emitter, 'response', {
                        response: c,
                        isMockedResponse: !1,
                        request: a,
                        requestId: n,
                      });
                    }
                    return l;
                  }))
            );
          }),
          Object.defineProperty(globalThis.fetch, Jn, {
            enumerable: !0,
            configurable: !0,
            value: !0,
          }),
          this.subscriptions.push(() => {
            Object.defineProperty(globalThis.fetch, Jn, { value: void 0 }),
              (globalThis.fetch = e),
              this.logger.info(
                'restored native "globalThis.fetch"!',
                globalThis.fetch.name,
              );
          });
      }
    },
    Gg = Vg;
  Gg.symbol = Symbol('fetch');
  function Ww(e, t) {
    let r = new Uint8Array(e.byteLength + t.byteLength);
    return r.set(e, 0), r.set(t, e.byteLength), r;
  }
  var Jg = class {
      constructor(e, t) {
        (this.NONE = 0),
          (this.CAPTURING_PHASE = 1),
          (this.AT_TARGET = 2),
          (this.BUBBLING_PHASE = 3),
          (this.type = ''),
          (this.srcElement = null),
          (this.currentTarget = null),
          (this.eventPhase = 0),
          (this.isTrusted = !0),
          (this.composed = !1),
          (this.cancelable = !0),
          (this.defaultPrevented = !1),
          (this.bubbles = !0),
          (this.lengthComputable = !0),
          (this.loaded = 0),
          (this.total = 0),
          (this.cancelBubble = !1),
          (this.returnValue = !0),
          (this.type = e),
          (this.target = t?.target || null),
          (this.currentTarget = t?.currentTarget || null),
          (this.timeStamp = Date.now());
      }
      composedPath() {
        return [];
      }
      initEvent(e, t, r) {
        (this.type = e), (this.bubbles = !!t), (this.cancelable = !!r);
      }
      preventDefault() {
        this.defaultPrevented = !0;
      }
      stopPropagation() {}
      stopImmediatePropagation() {}
    },
    Vw = class extends Jg {
      constructor(e, t) {
        super(e),
          (this.lengthComputable = t?.lengthComputable || !1),
          (this.composed = t?.composed || !1),
          (this.loaded = t?.loaded || 0),
          (this.total = t?.total || 0);
      }
    },
    Gw = typeof ProgressEvent < 'u';
  function Jw(e, t, r) {
    let n = [
        'error',
        'progress',
        'loadstart',
        'loadend',
        'load',
        'timeout',
        'abort',
      ],
      o = Gw ? ProgressEvent : Vw;
    return n.includes(t)
      ? new o(t, {
          lengthComputable: !0,
          loaded: r?.loaded || 0,
          total: r?.total || 0,
        })
      : new Jg(t, { target: e, currentTarget: e });
  }
  function Kg(e, t) {
    if (!(t in e)) return null;
    if (Object.prototype.hasOwnProperty.call(e, t)) return e;
    let n = Reflect.getPrototypeOf(e);
    return n ? Kg(n, t) : null;
  }
  function Wc(e, t) {
    return new Proxy(e, Kw(t));
  }
  function Kw(e) {
    let {
        constructorCall: t,
        methodCall: r,
        getProperty: n,
        setProperty: o,
      } = e,
      a = {};
    return (
      typeof t < 'u' &&
        (a.construct = function (s, i, u) {
          let l = Reflect.construct.bind(null, s, i, u);
          return t.call(u, i, l);
        }),
      (a.set = function (s, i, u) {
        let l = () => {
          let c = Kg(s, i) || s,
            p = Reflect.getOwnPropertyDescriptor(c, i);
          return typeof p?.set < 'u'
            ? (p.set.apply(s, [u]), !0)
            : Reflect.defineProperty(c, i, {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: u,
              });
        };
        return typeof o < 'u' ? o.call(s, [i, u], l) : l();
      }),
      (a.get = function (s, i, u) {
        let l = () => s[i],
          c = typeof n < 'u' ? n.call(s, [i, u], l) : l();
        return typeof c == 'function'
          ? (...p) => {
              let g = c.bind(s, ...p);
              return typeof r < 'u' ? r.call(s, [i, p], g) : g();
            }
          : c;
      }),
      a
    );
  }
  function Xw(e) {
    return [
      'application/xhtml+xml',
      'application/xml',
      'image/svg+xml',
      'text/html',
      'text/xml',
    ].some((r) => e.startsWith(r));
  }
  function Qw(e) {
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  function Yw(e, t) {
    let r = Vt.isResponseWithBody(e.status) ? t : null;
    return new Vt(r, {
      url: e.responseURL,
      status: e.status,
      statusText: e.statusText,
      headers: Zw(e.getAllResponseHeaders()),
    });
  }
  function Zw(e) {
    let t = new Headers(),
      r = e.split(/[\r\n]+/);
    for (let n of r) {
      if (n.trim() === '') continue;
      let [o, ...a] = n.split(': '),
        s = a.join(': ');
      t.append(o, s);
    }
    return t;
  }
  async function Ig(e) {
    let t = e.headers.get('content-length');
    return t != null && t !== ''
      ? Number(t)
      : (await e.arrayBuffer()).byteLength;
  }
  var fa = Symbol('kIsRequestHandled'),
    e1 = Qc(),
    Vc = Symbol('kFetchRequest'),
    t1 = class {
      constructor(e, t) {
        (this.initialRequest = e),
          (this.logger = t),
          (this.method = 'GET'),
          (this.url = null),
          (this[fa] = !1),
          (this.events = new Map()),
          (this.uploadEvents = new Map()),
          (this.requestId = Ug()),
          (this.requestHeaders = new Headers()),
          (this.responseBuffer = new Uint8Array()),
          (this.request = Wc(e, {
            setProperty: ([r, n], o) => {
              switch (r) {
                case 'ontimeout': {
                  let a = r.slice(2);
                  return this.request.addEventListener(a, n), o();
                }
                default:
                  return o();
              }
            },
            methodCall: ([r, n], o) => {
              var a;
              switch (r) {
                case 'open': {
                  let [s, i] = n;
                  return (
                    typeof i > 'u'
                      ? ((this.method = 'GET'), (this.url = Fg(s)))
                      : ((this.method = s), (this.url = Fg(i))),
                    (this.logger = this.logger.extend(
                      `${this.method} ${this.url.href}`,
                    )),
                    this.logger.info('open', this.method, this.url.href),
                    o()
                  );
                }
                case 'addEventListener': {
                  let [s, i] = n;
                  return (
                    this.registerEvent(s, i),
                    this.logger.info('addEventListener', s, i),
                    o()
                  );
                }
                case 'setRequestHeader': {
                  let [s, i] = n;
                  return (
                    this.requestHeaders.set(s, i),
                    this.logger.info('setRequestHeader', s, i),
                    o()
                  );
                }
                case 'send': {
                  let [s] = n;
                  this.request.addEventListener('load', () => {
                    if (typeof this.onResponse < 'u') {
                      let c = Yw(this.request, this.request.response);
                      this.onResponse.call(this, {
                        response: c,
                        isMockedResponse: this[fa],
                        request: u,
                        requestId: this.requestId,
                      });
                    }
                  });
                  let i = typeof s == 'string' ? cw(s) : s,
                    u = this.toFetchApiRequest(i);
                  (this[Vc] = u.clone()),
                    (
                      ((a = this.onRequest) == null
                        ? void 0
                        : a.call(this, {
                            request: u,
                            requestId: this.requestId,
                          })) || Promise.resolve()
                    ).finally(() => {
                      if (!this[fa])
                        return (
                          this.logger.info(
                            'request callback settled but request has not been handled (readystate %d), performing as-is...',
                            this.request.readyState,
                          ),
                          e1 &&
                            this.request.setRequestHeader(xw, this.requestId),
                          o()
                        );
                    });
                  break;
                }
                default:
                  return o();
              }
            },
          })),
          Vn(
            this.request,
            'upload',
            Wc(this.request.upload, {
              setProperty: ([r, n], o) => {
                switch (r) {
                  case 'onloadstart':
                  case 'onprogress':
                  case 'onaboart':
                  case 'onerror':
                  case 'onload':
                  case 'ontimeout':
                  case 'onloadend': {
                    let a = r.slice(2);
                    this.registerUploadEvent(a, n);
                  }
                }
                return o();
              },
              methodCall: ([r, n], o) => {
                switch (r) {
                  case 'addEventListener': {
                    let [a, s] = n;
                    return (
                      this.registerUploadEvent(a, s),
                      this.logger.info('upload.addEventListener', a, s),
                      o()
                    );
                  }
                }
              },
            }),
          );
      }
      registerEvent(e, t) {
        let n = (this.events.get(e) || []).concat(t);
        this.events.set(e, n), this.logger.info('registered event "%s"', e, t);
      }
      registerUploadEvent(e, t) {
        let n = (this.uploadEvents.get(e) || []).concat(t);
        this.uploadEvents.set(e, n),
          this.logger.info('registered upload event "%s"', e, t);
      }
      async respondWith(e) {
        if (((this[fa] = !0), this[Vc])) {
          let n = await Ig(this[Vc]);
          this.trigger('loadstart', this.request.upload, {
            loaded: 0,
            total: n,
          }),
            this.trigger('progress', this.request.upload, {
              loaded: n,
              total: n,
            }),
            this.trigger('load', this.request.upload, { loaded: n, total: n }),
            this.trigger('loadend', this.request.upload, {
              loaded: n,
              total: n,
            });
        }
        this.logger.info(
          'responding with a mocked response: %d %s',
          e.status,
          e.statusText,
        ),
          Vn(this.request, 'status', e.status),
          Vn(this.request, 'statusText', e.statusText),
          Vn(this.request, 'responseURL', this.url.href),
          (this.request.getResponseHeader = new Proxy(
            this.request.getResponseHeader,
            {
              apply: (n, o, a) => {
                if (
                  (this.logger.info('getResponseHeader', a[0]),
                  this.request.readyState < this.request.HEADERS_RECEIVED)
                )
                  return (
                    this.logger.info(
                      'headers not received yet, returning null',
                    ),
                    null
                  );
                let s = e.headers.get(a[0]);
                return (
                  this.logger.info('resolved response header "%s" to', a[0], s),
                  s
                );
              },
            },
          )),
          (this.request.getAllResponseHeaders = new Proxy(
            this.request.getAllResponseHeaders,
            {
              apply: () => {
                if (
                  (this.logger.info('getAllResponseHeaders'),
                  this.request.readyState < this.request.HEADERS_RECEIVED)
                )
                  return (
                    this.logger.info(
                      'headers not received yet, returning empty string',
                    ),
                    ''
                  );
                let o = Array.from(e.headers.entries()).map(
                  ([a, s]) => `${a}: ${s}`,
                ).join(`\r
`);
                return (
                  this.logger.info('resolved all response headers to', o), o
                );
              },
            },
          )),
          Object.defineProperties(this.request, {
            response: {
              enumerable: !0,
              configurable: !1,
              get: () => this.response,
            },
            responseText: {
              enumerable: !0,
              configurable: !1,
              get: () => this.responseText,
            },
            responseXML: {
              enumerable: !0,
              configurable: !1,
              get: () => this.responseXML,
            },
          });
        let t = await Ig(e.clone());
        this.logger.info('calculated response body length', t),
          this.trigger('loadstart', this.request, { loaded: 0, total: t }),
          this.setReadyState(this.request.HEADERS_RECEIVED),
          this.setReadyState(this.request.LOADING);
        let r = () => {
          this.logger.info('finalizing the mocked response...'),
            this.setReadyState(this.request.DONE),
            this.trigger('load', this.request, {
              loaded: this.responseBuffer.byteLength,
              total: t,
            }),
            this.trigger('loadend', this.request, {
              loaded: this.responseBuffer.byteLength,
              total: t,
            });
        };
        if (e.body) {
          this.logger.info('mocked response has body, streaming...');
          let n = e.body.getReader(),
            o = async () => {
              let { value: a, done: s } = await n.read();
              if (s) {
                this.logger.info('response body stream done!'), r();
                return;
              }
              a &&
                (this.logger.info('read response body chunk:', a),
                (this.responseBuffer = Ww(this.responseBuffer, a)),
                this.trigger('progress', this.request, {
                  loaded: this.responseBuffer.byteLength,
                  total: t,
                })),
                o();
            };
          o();
        } else r();
      }
      responseBufferToText() {
        return pw(this.responseBuffer);
      }
      get response() {
        if (
          (this.logger.info(
            'getResponse (responseType: %s)',
            this.request.responseType,
          ),
          this.request.readyState !== this.request.DONE)
        )
          return null;
        switch (this.request.responseType) {
          case 'json': {
            let e = Qw(this.responseBufferToText());
            return this.logger.info('resolved response JSON', e), e;
          }
          case 'arraybuffer': {
            let e = mw(this.responseBuffer);
            return this.logger.info('resolved response ArrayBuffer', e), e;
          }
          case 'blob': {
            let e =
                this.request.getResponseHeader('Content-Type') || 'text/plain',
              t = new Blob([this.responseBufferToText()], { type: e });
            return (
              this.logger.info('resolved response Blob (mime type: %s)', t, e),
              t
            );
          }
          default: {
            let e = this.responseBufferToText();
            return (
              this.logger.info(
                'resolving "%s" response type as text',
                this.request.responseType,
                e,
              ),
              e
            );
          }
        }
      }
      get responseText() {
        if (
          (Cr(
            this.request.responseType === '' ||
              this.request.responseType === 'text',
            'InvalidStateError: The object is in invalid state.',
          ),
          this.request.readyState !== this.request.LOADING &&
            this.request.readyState !== this.request.DONE)
        )
          return '';
        let e = this.responseBufferToText();
        return this.logger.info('getResponseText: "%s"', e), e;
      }
      get responseXML() {
        if (
          (Cr(
            this.request.responseType === '' ||
              this.request.responseType === 'document',
            'InvalidStateError: The object is in invalid state.',
          ),
          this.request.readyState !== this.request.DONE)
        )
          return null;
        let e = this.request.getResponseHeader('Content-Type') || '';
        return typeof DOMParser > 'u'
          ? (console.warn(
              'Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.',
            ),
            null)
          : Xw(e)
            ? new DOMParser().parseFromString(this.responseBufferToText(), e)
            : null;
      }
      errorWith(e) {
        (this[fa] = !0),
          this.logger.info('responding with an error'),
          this.setReadyState(this.request.DONE),
          this.trigger('error', this.request),
          this.trigger('loadend', this.request);
      }
      setReadyState(e) {
        if (
          (this.logger.info(
            'setReadyState: %d -> %d',
            this.request.readyState,
            e,
          ),
          this.request.readyState === e)
        ) {
          this.logger.info('ready state identical, skipping transition...');
          return;
        }
        Vn(this.request, 'readyState', e),
          this.logger.info('set readyState to: %d', e),
          e !== this.request.UNSENT &&
            (this.logger.info('triggerring "readystatechange" event...'),
            this.trigger('readystatechange', this.request));
      }
      trigger(e, t, r) {
        let n = t[`on${e}`],
          o = Jw(t, e, r);
        this.logger.info('trigger "%s"', e, r || ''),
          typeof n == 'function' &&
            (this.logger.info('found a direct "%s" callback, calling...', e),
            n.call(t, o));
        let a =
          t instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
        for (let [s, i] of a)
          s === e &&
            (this.logger.info(
              'found %d listener(s) for "%s" event, calling...',
              i.length,
              e,
            ),
            i.forEach((u) => u.call(t, o)));
      }
      toFetchApiRequest(e) {
        this.logger.info('converting request to a Fetch API Request...');
        let t = e instanceof Document ? e.documentElement.innerText : e,
          r = new Request(this.url.href, {
            method: this.method,
            headers: this.requestHeaders,
            credentials: this.request.withCredentials
              ? 'include'
              : 'same-origin',
            body: ['GET', 'HEAD'].includes(this.method.toUpperCase())
              ? null
              : t,
          }),
          n = Wc(r.headers, {
            methodCall: ([o, a], s) => {
              switch (o) {
                case 'append':
                case 'set': {
                  let [i, u] = a;
                  this.request.setRequestHeader(i, u);
                  break;
                }
                case 'delete': {
                  let [i] = a;
                  console.warn(
                    `XMLHttpRequest: Cannot remove a "${i}" header from the Fetch API representation of the "${r.method} ${r.url}" request. XMLHttpRequest headers cannot be removed.`,
                  );
                  break;
                }
              }
              return s();
            },
          });
        return (
          Vn(r, 'headers', n),
          this.logger.info('converted request to a Fetch API Request!', r),
          r
        );
      }
    };
  function Fg(e) {
    return typeof location > 'u'
      ? new URL(e)
      : new URL(e.toString(), location.href);
  }
  function Vn(e, t, r) {
    Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: r });
  }
  function r1({ emitter: e, logger: t }) {
    return new Proxy(globalThis.XMLHttpRequest, {
      construct(n, o, a) {
        t.info('constructed new XMLHttpRequest');
        let s = Reflect.construct(n, o, a),
          i = Object.getOwnPropertyDescriptors(n.prototype);
        for (let l in i) Reflect.defineProperty(s, l, i[l]);
        let u = new t1(s, t);
        return (
          (u.onRequest = async function ({ request: l, requestId: c }) {
            let p = new ep(l);
            this.logger.info('awaiting mocked response...'),
              this.logger.info(
                'emitting the "request" event for %s listener(s)...',
                e.listenerCount('request'),
              ),
              (await Hg({
                request: l,
                requestId: c,
                controller: p,
                emitter: e,
                onResponse: async (k) => {
                  await this.respondWith(k);
                },
                onRequestError: () => {
                  this.errorWith(new TypeError('Network error'));
                },
                onError: (k) => {
                  this.logger.info('request errored!', { error: k }),
                    k instanceof Error && this.errorWith(k);
                },
              })) ||
                this.logger.info(
                  'no mocked response received, performing request as-is...',
                );
          }),
          (u.onResponse = async function ({
            response: l,
            isMockedResponse: c,
            request: p,
            requestId: g,
          }) {
            this.logger.info(
              'emitting the "response" event for %s listener(s)...',
              e.listenerCount('response'),
            ),
              e.emit('response', {
                response: l,
                isMockedResponse: c,
                request: p,
                requestId: g,
              });
          }),
          u.request
        );
      },
    });
  }
  var Xg = class extends Yc {
      constructor() {
        super(Xg.interceptorSymbol);
      }
      checkEnvironment() {
        return Wg('XMLHttpRequest');
      }
      setup() {
        let e = this.logger.extend('setup');
        e.info('patching "XMLHttpRequest" module...');
        let t = globalThis.XMLHttpRequest;
        Cr(
          !t[Jn],
          'Failed to patch the "XMLHttpRequest" module: already patched.',
        ),
          (globalThis.XMLHttpRequest = r1({
            emitter: this.emitter,
            logger: this.logger,
          })),
          e.info(
            'native "XMLHttpRequest" module patched!',
            globalThis.XMLHttpRequest.name,
          ),
          Object.defineProperty(globalThis.XMLHttpRequest, Jn, {
            enumerable: !0,
            configurable: !0,
            value: !0,
          }),
          this.subscriptions.push(() => {
            Object.defineProperty(globalThis.XMLHttpRequest, Jn, {
              value: void 0,
            }),
              (globalThis.XMLHttpRequest = t),
              e.info(
                'native "XMLHttpRequest" module restored!',
                globalThis.XMLHttpRequest.name,
              );
          });
      }
    },
    Qg = Xg;
  Qg.interceptorSymbol = Symbol('xhr');
  function n1(e, t) {
    let r = new Xc({ name: 'fallback', interceptors: [new Gg(), new Qg()] });
    return (
      r.on('request', async ({ request: n, requestId: o, controller: a }) => {
        let s = n.clone(),
          i = await ci(
            n,
            o,
            e.getRequestHandlers().filter(Un('RequestHandler')),
            t,
            e.emitter,
            {
              onMockedResponse(u, { handler: l, parsedResult: c }) {
                t.quiet ||
                  e.emitter.once('response:mocked', ({ response: p }) => {
                    l.log({ request: s, response: p, parsedResult: c });
                  });
              },
            },
          );
        i && a.respondWith(i);
      }),
      r.on(
        'response',
        ({ response: n, isMockedResponse: o, request: a, requestId: s }) => {
          e.emitter.emit(o ? 'response:mocked' : 'response:bypass', {
            response: n,
            request: a,
            requestId: s,
          });
        },
      ),
      r.apply(),
      r
    );
  }
  function o1(e) {
    return async function (r) {
      (e.fallbackInterceptor = n1(e, r)),
        Ng({ message: 'Mocking enabled (fallback mode).', quiet: r.quiet });
    };
  }
  function a1(e) {
    return function () {
      e.fallbackInterceptor?.dispose(), $g({ quiet: e.startOptions?.quiet });
    };
  }
  function s1() {
    try {
      let e = new ReadableStream({ start: (r) => r.close() });
      return new MessageChannel().port1.postMessage(e, [e]), !0;
    } catch {
      return !1;
    }
  }
  var i1 = class extends mi {
    context;
    startHandler = null;
    stopHandler = null;
    listeners;
    constructor(...e) {
      super(...e),
        Cr(
          !Qc(),
          M.formatMessage(
            'Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead.',
          ),
        ),
        (this.listeners = []),
        (this.context = this.createWorkerContext());
    }
    createWorkerContext() {
      let e = {
        isMockingEnabled: !1,
        startOptions: null,
        worker: null,
        getRequestHandlers: () => this.handlersController.currentHandlers(),
        registration: null,
        requests: new Map(),
        emitter: this.emitter,
        workerChannel: {
          on: (t, r) => {
            this.context.events.addListener(
              navigator.serviceWorker,
              'message',
              (n) => {
                if (n.source !== this.context.worker) return;
                let o = n.data;
                o && o.type === t && r(n, o);
              },
            );
          },
          send: (t) => {
            this.context.worker?.postMessage(t);
          },
        },
        events: {
          addListener: (t, r, n) => (
            t.addEventListener(r, n),
            this.listeners.push({ eventType: r, target: t, callback: n }),
            () => {
              t.removeEventListener(r, n);
            }
          ),
          removeAllListeners: () => {
            for (let { target: t, eventType: r, callback: n } of this.listeners)
              t.removeEventListener(r, n);
            this.listeners = [];
          },
          once: (t) => {
            let r = [];
            return new Promise((n, o) => {
              let a = (s) => {
                try {
                  let i = s.data;
                  i.type === t && n(i);
                } catch (i) {
                  o(i);
                }
              };
              r.push(
                this.context.events.addListener(
                  navigator.serviceWorker,
                  'message',
                  a,
                ),
                this.context.events.addListener(
                  navigator.serviceWorker,
                  'messageerror',
                  o,
                ),
              );
            }).finally(() => {
              r.forEach((n) => n());
            });
          },
        },
        supports: {
          serviceWorkerApi:
            !('serviceWorker' in navigator) || location.protocol === 'file:',
          readableStreamTransfer: s1(),
        },
      };
      return (
        (this.startHandler = e.supports.serviceWorkerApi ? o1(e) : Aw(e)),
        (this.stopHandler = e.supports.serviceWorkerApi ? a1(e) : Rw(e)),
        e
      );
    }
    async start(e = {}) {
      return (
        e.waitUntilReady === !0 &&
          M.warn(
            'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.',
          ),
        (this.context.startOptions = Ac(Pw, e)),
        Rg({
          getUnhandledRequestStrategy: () =>
            this.context.startOptions.onUnhandledRequest,
          getHandlers: () => this.handlersController.currentHandlers(),
          onMockedConnection: (t) => {
            this.context.startOptions.quiet || Pg(t);
          },
          onPassthroughConnection() {},
        }),
        la.apply(),
        this.subscriptions.push(() => {
          la.dispose();
        }),
        await this.startHandler(this.context.startOptions, e)
      );
    }
    stop() {
      super.dispose(),
        this.context.events.removeAllListeners(),
        this.context.emitter.removeAllListeners(),
        this.stopHandler();
    }
  };
  function Yg(...e) {
    return new i1(...e);
  }
  function Zg() {
    Pe(
      typeof URL < 'u',
      M.formatMessage(
        `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`,
      ),
    );
  }
  function ey(e, t) {
    return e.toLowerCase() === t.toLowerCase();
  }
  function ty(e) {
    return e < 300 ? '#69AB32' : e < 400 ? '#F0BB4B' : '#E95F5D';
  }
  async function ry(e) {
    let r = await e.clone().text();
    return {
      url: new URL(e.url),
      method: e.method,
      headers: Object.fromEntries(e.headers.entries()),
      body: r,
    };
  }
  var { message: u1 } = li;
  async function ny(e) {
    let t = e.clone(),
      r = await t.text(),
      n = t.status || 200,
      o = t.statusText || u1[n] || 'OK';
    return {
      status: n,
      statusText: o,
      headers: Object.fromEntries(t.headers.entries()),
      body: r,
    };
  }
  var l1 = Object.create,
    oy = Object.defineProperty,
    c1 = Object.getOwnPropertyDescriptor,
    ay = Object.getOwnPropertyNames,
    p1 = Object.getPrototypeOf,
    m1 = Object.prototype.hasOwnProperty,
    d1 = (e, t) =>
      function () {
        return (
          t || (0, e[ay(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    f1 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of ay(t))
          !m1.call(e, o) &&
            o !== r &&
            oy(e, o, {
              get: () => t[o],
              enumerable: !(n = c1(t, o)) || n.enumerable,
            });
      return e;
    },
    h1 = (e, t, r) => (
      (r = e != null ? l1(p1(e)) : {}),
      f1(
        t || !e || !e.__esModule
          ? oy(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    ),
    g1 = d1({
      'node_modules/cookie/index.js'(e) {
        'use strict';
        (e.parse = i), (e.serialize = c);
        var t = Object.prototype.toString,
          r = Object.prototype.hasOwnProperty,
          n = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
          o =
            /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
          a =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          s = /^[\u0020-\u003A\u003D-\u007E]*$/;
        function i(h, j) {
          if (typeof h != 'string')
            throw new TypeError('argument str must be a string');
          var w = {},
            d = h.length;
          if (d < 2) return w;
          var m = (j && j.decode) || p,
            f = 0,
            y = 0,
            b = 0;
          do {
            if (((y = h.indexOf('=', f)), y === -1)) break;
            if (((b = h.indexOf(';', f)), b === -1)) b = d;
            else if (y > b) {
              f = h.lastIndexOf(';', y - 1) + 1;
              continue;
            }
            var C = u(h, f, y),
              x = l(h, y, C),
              R = h.slice(C, x);
            if (!r.call(w, R)) {
              var L = u(h, y + 1, b),
                T = l(h, b, L);
              h.charCodeAt(L) === 34 &&
                h.charCodeAt(T - 1) === 34 &&
                (L++, T--);
              var I = h.slice(L, T);
              w[R] = k(I, m);
            }
            f = b + 1;
          } while (f < d);
          return w;
        }
        function u(h, j, w) {
          do {
            var d = h.charCodeAt(j);
            if (d !== 32 && d !== 9) return j;
          } while (++j < w);
          return w;
        }
        function l(h, j, w) {
          for (; j > w; ) {
            var d = h.charCodeAt(--j);
            if (d !== 32 && d !== 9) return j + 1;
          }
          return w;
        }
        function c(h, j, w) {
          var d = (w && w.encode) || encodeURIComponent;
          if (typeof d != 'function')
            throw new TypeError('option encode is invalid');
          if (!n.test(h)) throw new TypeError('argument name is invalid');
          var m = d(j);
          if (!o.test(m)) throw new TypeError('argument val is invalid');
          var f = h + '=' + m;
          if (!w) return f;
          if (w.maxAge != null) {
            var y = Math.floor(w.maxAge);
            if (!isFinite(y)) throw new TypeError('option maxAge is invalid');
            f += '; Max-Age=' + y;
          }
          if (w.domain) {
            if (!a.test(w.domain))
              throw new TypeError('option domain is invalid');
            f += '; Domain=' + w.domain;
          }
          if (w.path) {
            if (!s.test(w.path)) throw new TypeError('option path is invalid');
            f += '; Path=' + w.path;
          }
          if (w.expires) {
            var b = w.expires;
            if (!g(b) || isNaN(b.valueOf()))
              throw new TypeError('option expires is invalid');
            f += '; Expires=' + b.toUTCString();
          }
          if (
            (w.httpOnly && (f += '; HttpOnly'),
            w.secure && (f += '; Secure'),
            w.partitioned && (f += '; Partitioned'),
            w.priority)
          ) {
            var C =
              typeof w.priority == 'string'
                ? w.priority.toLowerCase()
                : w.priority;
            switch (C) {
              case 'low':
                f += '; Priority=Low';
                break;
              case 'medium':
                f += '; Priority=Medium';
                break;
              case 'high':
                f += '; Priority=High';
                break;
              default:
                throw new TypeError('option priority is invalid');
            }
          }
          if (w.sameSite) {
            var x =
              typeof w.sameSite == 'string'
                ? w.sameSite.toLowerCase()
                : w.sameSite;
            switch (x) {
              case !0:
                f += '; SameSite=Strict';
                break;
              case 'lax':
                f += '; SameSite=Lax';
                break;
              case 'strict':
                f += '; SameSite=Strict';
                break;
              case 'none':
                f += '; SameSite=None';
                break;
              default:
                throw new TypeError('option sameSite is invalid');
            }
          }
          return f;
        }
        function p(h) {
          return h.indexOf('%') !== -1 ? decodeURIComponent(h) : h;
        }
        function g(h) {
          return t.call(h) === '[object Date]';
        }
        function k(h, j) {
          try {
            return j(h);
          } catch {
            return h;
          }
        }
      },
    }),
    y1 = h1(g1(), 1),
    tp = y1.default;
  function iy(e) {
    let t = tp.parse(e),
      r = {};
    for (let n in t) typeof t[n] < 'u' && (r[n] = t[n]);
    return r;
  }
  function sy() {
    return iy(document.cookie);
  }
  function k1(e) {
    if (typeof document > 'u' || typeof location > 'u') return {};
    switch (e.credentials) {
      case 'same-origin': {
        let t = new URL(e.url);
        return location.origin === t.origin ? sy() : {};
      }
      case 'include':
        return sy();
      default:
        return {};
    }
  }
  function uy(e) {
    let t = e.headers.get('cookie'),
      r = t ? iy(t) : {},
      n = k1(e);
    for (let s in n) e.headers.append('cookie', tp.serialize(s, n[s]));
    let o = ui.getCookiesSync(e.url),
      a = Object.fromEntries(o.map((s) => [s.key, s.value]));
    for (let s of o) e.headers.append('cookie', s.toString());
    return { ...n, ...a, ...r };
  }
  var Gt = ((e) => (
      (e.HEAD = 'HEAD'),
      (e.GET = 'GET'),
      (e.POST = 'POST'),
      (e.PUT = 'PUT'),
      (e.PATCH = 'PATCH'),
      (e.OPTIONS = 'OPTIONS'),
      (e.DELETE = 'DELETE'),
      e
    ))(Gt || {}),
    Ei = class extends Mn {
      constructor(t, r, n, o) {
        super({
          info: { header: `${t} ${r}`, path: r, method: t },
          resolver: n,
          options: o,
        }),
          this.checkRedundantQueryParameters();
      }
      checkRedundantQueryParameters() {
        let { method: t, path: r } = this.info;
        if (r instanceof RegExp || yi(r) === r) return;
        let o = Eg(r),
          a = [];
        o.forEach((s, i) => {
          a.push(i);
        }),
          M.warn(
            `Found a redundant usage of query parameters in the request handler URL for "${t} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`,
          );
      }
      async parse(t) {
        let r = new URL(t.request.url),
          n = ki(r, this.info.path, t.resolutionContext?.baseUrl),
          o = uy(t.request);
        return { match: n, cookies: o };
      }
      predicate(t) {
        let r = this.matchMethod(t.request.method),
          n = t.parsedResult.match.matches;
        return r && n;
      }
      matchMethod(t) {
        return this.info.method instanceof RegExp
          ? this.info.method.test(t)
          : ey(this.info.method, t);
      }
      extendResolverArgs(t) {
        return {
          params: t.parsedResult.match?.params || {},
          cookies: t.parsedResult.cookies,
        };
      }
      async log(t) {
        let r = wr(t.request.url),
          n = await ry(t.request),
          o = await ny(t.response),
          a = ty(o.status);
        console.groupCollapsed(
          M.formatMessage(
            `${Pt()} ${t.request.method} ${r} (%c${o.status} ${o.statusText}%c)`,
          ),
          `color:${a}`,
          'color:inherit',
        ),
          console.log('Request', n),
          console.log('Handler:', this),
          console.log('Response', o),
          console.groupEnd();
      }
    };
  function _r(e) {
    return (t, r, n = {}) => new Ei(e, t, r, n);
  }
  var rp = {
    all: _r(/.+/),
    head: _r(Gt.HEAD),
    get: _r(Gt.GET),
    post: _r(Gt.POST),
    put: _r(Gt.PUT),
    delete: _r(Gt.DELETE),
    patch: _r(Gt.PATCH),
    options: _r(Gt.OPTIONS),
  };
  var xi = class e extends Response {
    constructor(t, r) {
      let n = Er(r);
      super(t, n), ag(this, n);
    }
    static text(t, r) {
      let n = Er(r);
      return (
        n.headers.has('Content-Type') ||
          n.headers.set('Content-Type', 'text/plain'),
        n.headers.has('Content-Length') ||
          n.headers.set(
            'Content-Length',
            t ? new Blob([t]).size.toString() : '0',
          ),
        new e(t, n)
      );
    }
    static json(t, r) {
      let n = Er(r);
      n.headers.has('Content-Type') ||
        n.headers.set('Content-Type', 'application/json');
      let o = JSON.stringify(t);
      return (
        n.headers.has('Content-Length') ||
          n.headers.set(
            'Content-Length',
            o ? new Blob([o]).size.toString() : '0',
          ),
        new e(o, n)
      );
    }
    static xml(t, r) {
      let n = Er(r);
      return (
        n.headers.has('Content-Type') ||
          n.headers.set('Content-Type', 'text/xml'),
        new e(t, n)
      );
    }
    static html(t, r) {
      let n = Er(r);
      return (
        n.headers.has('Content-Type') ||
          n.headers.set('Content-Type', 'text/html'),
        new e(t, n)
      );
    }
    static arrayBuffer(t, r) {
      let n = Er(r);
      return (
        n.headers.has('Content-Type') ||
          n.headers.set('Content-Type', 'application/octet-stream'),
        t &&
          !n.headers.has('Content-Length') &&
          n.headers.set('Content-Length', t.byteLength.toString()),
        new e(t, n)
      );
    }
    static formData(t, r) {
      return new e(t, Er(r));
    }
  };
  var np = 2147483647,
    ly = 100,
    v1 = 400,
    j1 = 5;
  function cy() {
    return qn() ? j1 : Math.floor(Math.random() * (v1 - ly) + ly);
  }
  async function py(e) {
    let t;
    if (typeof e == 'string')
      switch (e) {
        case 'infinite': {
          t = np;
          break;
        }
        case 'real': {
          t = cy();
          break;
        }
        default:
          throw new Error(
            `Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`,
          );
      }
    else if (typeof e > 'u') t = cy();
    else {
      if (e > np)
        throw new Error(
          `Failed to delay a response: provided delay duration (${e}) exceeds the maximum allowed duration for "setTimeout" (${np}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`,
        );
      t = e;
    }
    return new Promise((r) => setTimeout(r, t));
  }
  Zg();
  var my = rp.get(
    'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb',
    async () => (
      await py(),
      xi.json(
        JSON.parse(
          '[{"first":"Arturo","last":"Harber","email":"Arturo.Harber@gwendolyn.biz","address":"4505 Bell Isle","created":"September 17, 2021","balance":"$9,632.11"},{"first":"Sibyl","last":"Ritchie","email":"ivorywolf07@gmail.com","address":"05962 Kameron Estate","created":"July 27, 2014","balance":"$5,338.09"},{"first":"Osvaldo","last":"Schaefer","email":"plumsquirrel94@gmail.com","address":"199 Mya Path","created":"July 20, 2015","balance":"$6,308.49"},{"first":"Mike","last":"Connelly","email":"Mike.Connelly@janie.com","address":"42296 Botsford Vista","created":"November 25, 2022","balance":"$8,372.14"},{"first":"Diana","last":"Schultz","email":"Diana.Schultz@tomas.net","address":"60016 Lazaro Tunnel","created":"March 21, 2020","balance":"$5,413.06"},{"first":"Alexanne","last":"Hilpert","email":"Alexanne.Hilpert@dana.biz","address":"1893 Torrey Corners","created":"January 21, 2019","balance":"$6,140.66"},{"first":"Mellie","last":"Powlowski","email":"Mellie.Powlowski@hollis.net","address":"90123 Trever Estate","created":"April 5, 2018","balance":"$2,703.02"},{"first":"Loraine","last":"Dickens","email":"Loraine.Dickens@keven.info","address":"891 Karina Turnpike","created":"May 14, 2018","balance":"$3,787.90"},{"first":"Glen","last":"Schultz","email":"orangewolf28@gmail.com","address":"2706 Braun Junctions","created":"April 28, 2022","balance":"$6,798.42"},{"first":"Blake","last":"Morar","email":"Blake.Morar@anita.biz","address":"511 Simonis Rest","created":"August 30, 2022","balance":"$4,934.01"},{"first":"Paul","last":"Wolf","email":"bluewolf71@gmail.com","address":"750 Waters Drive","created":"September 14, 2022","balance":"$6,258.11"},{"first":"Elmer","last":"Bernier","email":"Elmer.Bernier@shaun.name","address":"875 Dayna Village","created":"January 30, 2015","balance":"$4,903.81"},{"first":"Annabelle","last":"Abshire","email":"mintgreenfrog66@gmail.com","address":"92365 Crooks Ways","created":"January 13, 2020","balance":"$6,568.50"},{"first":"Lavern","last":"Schuster","email":"Lavern.Schuster@emilia.info","address":"6174 Langosh Skyway","created":"October 19, 2021","balance":"$929.11"},{"first":"Frank","last":"Lehner","email":"whitewolf50@gmail.com","address":"51002 Jody Lake","created":"August 1, 2020","balance":"$769.91"},{"first":"Rigoberto","last":"Nikolaus","email":"Rigoberto.Nikolaus@nicolas.name","address":"396 Leonel Harbor","created":"February 19, 2022","balance":"$2,073.85"},{"first":"Oleta","last":"Bailey","email":"Oleta.Bailey@jeramie.info","address":"39516 Schroeder Manor","created":"April 9, 2021","balance":"$9,567.10"},{"first":"Esteban","last":"Kling","email":"purplegiraffe32@gmail.com","address":"2220 Viva Village","created":"July 13, 2020","balance":"$3,714.90"},{"first":"Enoch","last":"Stark","email":"Enoch.Stark@pete.com","address":"06914 Waino Avenue","created":"October 5, 2017","balance":"$9,582.71"},{"first":"Geovanni","last":"Ortiz","email":"tealwolf51@gmail.com","address":"3392 Alexandria Locks","created":"January 4, 2019","balance":"$7,568.33"},{"first":"Arne","last":"Graham","email":"Arne.Graham@celia.com","address":"23069 Daisha Ports","created":"December 29, 2022","balance":"$8,755.32"},{"first":"Sunny","last":"Ullrich","email":"violetsquirrel45@gmail.com","address":"136 Jesse Turnpike","created":"October 7, 2017","balance":"$1,650.83"},{"first":"Jeanie","last":"Frami","email":"purplefrog00@gmail.com","address":"79062 Zetta Brooks","created":"March 6, 2024","balance":"$9,630.05"},{"first":"Lola","last":"Blick","email":"goldturtle16@gmail.com","address":"285 Yadira Turnpike","created":"June 6, 2015","balance":"$8,757.65"},{"first":"Ottis","last":"Powlowski","email":"Ottis.Powlowski@felipa.info","address":"564 Ruecker Harbors","created":"February 26, 2016","balance":"$7,316.92"},{"first":"Ilene","last":"Wiza","email":"Ilene.Wiza@art.biz","address":"176 Nitzsche Isle","created":"March 1, 2023","balance":"$1,551.53"},{"first":"Mikayla","last":"Smitham","email":"Mikayla.Smitham@toney.biz","address":"765 Alessia Rapids","created":"December 27, 2020","balance":"$8,065.87"},{"first":"Don","last":"Smith","email":"magentarabbit27@gmail.com","address":"09634 Langworth Burgs","created":"April 21, 2018","balance":"$179.04"},{"first":"Sonya","last":"Smith","email":"Sonya.Smith@sammy.info","address":"584 Samanta Drive","created":"July 7, 2023","balance":"$5,993.75"},{"first":"Berta","last":"Mraz","email":"ivoryfrog65@gmail.com","address":"153 Trever Flats","created":"November 16, 2021","balance":"$2,659.58"},{"first":"Emie","last":"Rempel","email":"Emie.Rempel@julien.net","address":"841 Aleen Dale","created":"January 26, 2016","balance":"$5,934.47"},{"first":"Henry","last":"Blanda","email":"blacksquirrel87@gmail.com","address":"601 Borer Flats","created":"April 20, 2016","balance":"$1,509.67"},{"first":"Adela","last":"Larkin","email":"turquoiseturtle44@gmail.com","address":"476 Alysson Keys","created":"May 2, 2016","balance":"$5,291.01"},{"first":"Theo","last":"Klein","email":"Theo.Klein@esther.com","address":"2529 Coty Extensions","created":"August 20, 2022","balance":"$290.39"},{"first":"Jefferey","last":"Streich","email":"orchidrabbit30@gmail.com","address":"87592 Bayer Junctions","created":"October 20, 2016","balance":"$9,518.01"},{"first":"Kailey","last":"Prosacco","email":"Kailey.Prosacco@keyon.name","address":"560 Adell Manor","created":"May 21, 2020","balance":"$7,433.87"},{"first":"Alfreda","last":"Pollich","email":"Alfreda.Pollich@katharina.com","address":"8984 Jazlyn Tunnel","created":"September 14, 2023","balance":"$8,582.11"},{"first":"Camylle","last":"Pagac","email":"Camylle.Pagac@adrien.biz","address":"58830 Kohler Valley","created":"September 22, 2017","balance":"$2,035.91"},{"first":"Fernando","last":"OKon","email":"Fernando.OKon@ansel.net","address":"36053 Makenna Knolls","created":"January 16, 2023","balance":"$7,496.45"},{"first":"Eladio","last":"Emard","email":"Eladio.Emard@sammy.org","address":"2416 Consuelo Brooks","created":"July 15, 2016","balance":"$1,673.86"},{"first":"Clifford","last":"Hamill","email":"bluewolf30@gmail.com","address":"582 Quitzon Rapids","created":"July 13, 2021","balance":"$6,798.27"},{"first":"Lura","last":"Schuppe","email":"bluefrog51@gmail.com","address":"74857 Gutmann Point","created":"November 29, 2020","balance":"$7,828.34"},{"first":"Alexys","last":"Collier","email":"Alexys.Collier@floyd.biz","address":"7079 Katrina Islands","created":"November 15, 2014","balance":"$1,671.28"},{"first":"Beau","last":"Stark","email":"Beau.Stark@dane.net","address":"594 Raymond Bridge","created":"December 23, 2021","balance":"$1,545.88"},{"first":"Davin","last":"Heaney","email":"tanrabbit28@gmail.com","address":"72745 Mariane Route","created":"June 5, 2017","balance":"$8,366.03"},{"first":"Lisandro","last":"DAmore","email":"Lisandro.DAmore@ibrahim.org","address":"8348 Felipe Ways","created":"September 10, 2018","balance":"$9,191.20"},{"first":"Dedric","last":"Gislason","email":"Dedric.Gislason@dante.org","address":"5882 Goldner Prairie","created":"August 14, 2018","balance":"$2,129.40"},{"first":"Elva","last":"Ferry","email":"Elva.Ferry@oda.biz","address":"096 Oberbrunner Ports","created":"June 14, 2021","balance":"$3,377.42"},{"first":"Calista","last":"Flatley","email":"Calista.Flatley@abner.net","address":"745 Wunsch Roads","created":"September 24, 2023","balance":"$3,269.18"},{"first":"Nia","last":"Hegmann","email":"Nia.Hegmann@loraine.com","address":"1113 Easton Valley","created":"January 3, 2015","balance":"$58.25"},{"first":"Dawn","last":"Quitzon","email":"fuchsiagiraffe40@gmail.com","address":"807 Reichert Stravenue","created":"July 6, 2016","balance":"$6,934.06"},{"first":"Camylle","last":"Streich","email":"Camylle.Streich@irma.net","address":"091 Effertz Radial","created":"March 9, 2019","balance":"$5,115.30"},{"first":"Lorna","last":"Erdman","email":"Lorna.Erdman@phoebe.com","address":"96606 Lydia Fork","created":"November 16, 2019","balance":"$8,347.33"},{"first":"Abner","last":"Gleason","email":"greenturtle03@gmail.com","address":"37976 Gail Trail","created":"April 11, 2021","balance":"$3,318.92"},{"first":"Audreanne","last":"Haag","email":"Audreanne.Haag@dora.info","address":"759 Luettgen Valleys","created":"November 10, 2016","balance":"$7,854.83"},{"first":"Elinore","last":"Pfeffer","email":"Elinore.Pfeffer@amanda.name","address":"310 Swift Trail","created":"November 29, 2020","balance":"$4,575.51"},{"first":"Jean","last":"Von","email":"Jean.Von@jarrell.name","address":"2282 Casimer Throughway","created":"October 31, 2016","balance":"$7,233.36"},{"first":"Jamie","last":"Harris","email":"cyanturtle05@gmail.com","address":"993 Shanahan Land","created":"August 5, 2023","balance":"$4,004.01"},{"first":"Green","last":"Murray","email":"Green.Murray@marlen.net","address":"926 VonRueden Loop","created":"December 28, 2015","balance":"$3,090.61"},{"first":"Lucious","last":"White","email":"maroonwolf90@gmail.com","address":"295 Delfina Square","created":"December 3, 2017","balance":"$4,794.50"},{"first":"Emmie","last":"Ratke","email":"yellowturtle38@gmail.com","address":"9824 Carroll Trail","created":"October 18, 2019","balance":"$7,052.59"},{"first":"Halle","last":"Grady","email":"bluewolf54@gmail.com","address":"4610 Miller Plaza","created":"December 15, 2017","balance":"$3,607.09"},{"first":"Rylan","last":"Pouros","email":"Rylan.Pouros@royce.com","address":"8369 Schuppe Extensions","created":"February 15, 2023","balance":"$6,908.00"},{"first":"Irma","last":"Spinka","email":"plumrabbit76@gmail.com","address":"2132 Daphney Fort","created":"July 2, 2021","balance":"$2,113.22"},{"first":"Torrey","last":"Tillman","email":"Torrey.Tillman@jairo.com","address":"30870 Leffler Motorway","created":"October 31, 2015","balance":"$8,437.88"},{"first":"Lawson","last":"Quitzon","email":"Lawson.Quitzon@amelia.org","address":"558 Bogisich Causeway","created":"December 11, 2023","balance":"$5,487.51"},{"first":"Cary","last":"Glover","email":"silvergiraffe54@gmail.com","address":"388 Dereck Cliff","created":"June 7, 2015","balance":"$1,597.34"},{"first":"Arvel","last":"Kohler","email":"tangiraffe45@gmail.com","address":"443 Stanton Pines","created":"July 31, 2016","balance":"$5,857.68"},{"first":"Herbert","last":"Johns","email":"Herbert.Johns@zachariah.name","address":"33862 Wuckert Shores","created":"February 6, 2015","balance":"$7,296.36"},{"first":"Kathryne","last":"Bartoletti","email":"plumsquirrel01@gmail.com","address":"69886 Durgan Tunnel","created":"March 12, 2016","balance":"$2,219.68"},{"first":"Vilma","last":"Hayes","email":"Vilma.Hayes@mohammed.biz","address":"35155 Adriel Highway","created":"May 3, 2020","balance":"$486.59"},{"first":"Meredith","last":"Pouros","email":"skyblueturtle73@gmail.com","address":"9972 Lakin Squares","created":"October 3, 2017","balance":"$9,315.14"},{"first":"Missouri","last":"Doyle","email":"Missouri.Doyle@josephine.name","address":"929 Alvera Wells","created":"December 14, 2016","balance":"$1,745.77"},{"first":"Giovanny","last":"Fay","email":"Giovanny.Fay@isabella.com","address":"333 Oliver Mall","created":"August 4, 2020","balance":"$502.66"},{"first":"Kara","last":"Schulist","email":"indigofrog64@gmail.com","address":"201 Durgan Bypass","created":"March 27, 2022","balance":"$8,503.72"}]',
        ),
        { status: 202, statusText: 'Mocked status' },
      )
    ),
  );
  var dy = async () => Yg(my).start();
  var b1 = async () => {
    await dy(),
      typeof window.__INITIAL_DATA__ == 'string' &&
        (Sh(window.__INITIAL_DATA__), delete window.__INITIAL_DATA__);
    let e = document.getElementById('app');
    if (!e) throw new Error('No app element found');
    (0, hy.hydrateRoot)(e, fy.default.createElement(Oh, null));
  };
  b1();
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@bundled-es-modules/tough-cookie/index-esm.js:
  (*! Bundled license information:
  
  tough-cookie/lib/pubsuffix-psl.js:
    (*!
     * Copyright (c) 2018, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  
  tough-cookie/lib/store.js:
    (*!
     * Copyright (c) 2015, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  
  tough-cookie/lib/permuteDomain.js:
    (*!
     * Copyright (c) 2015, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  
  tough-cookie/lib/pathMatch.js:
    (*!
     * Copyright (c) 2015, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  
  tough-cookie/lib/memstore.js:
    (*!
     * Copyright (c) 2015, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  
  tough-cookie/lib/cookie.js:
    (*!
     * Copyright (c) 2015-2020, Salesforce.com, Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * 1. Redistributions of source code must retain the above copyright notice,
     * this list of conditions and the following disclaimer.
     *
     * 2. Redistributions in binary form must reproduce the above copyright notice,
     * this list of conditions and the following disclaimer in the documentation
     * and/or other materials provided with the distribution.
     *
     * 3. Neither the name of Salesforce.com nor the names of its contributors may
     * be used to endorse or promote products derived from this software without
     * specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
     * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
     * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
     * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
     * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     * POSSIBILITY OF SUCH DAMAGE.
     *)
  *)

@bundled-es-modules/statuses/index-esm.js:
  (*! Bundled license information:
  
  statuses/index.js:
    (*!
     * statuses
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     *)
  *)

@bundled-es-modules/cookie/index-esm.js:
  (*! Bundled license information:
  
  cookie/index.js:
    (*!
     * cookie
     * Copyright(c) 2012-2014 Roman Shtylman
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     *)
  *)
*/
