(() => {
  // deno-cache:https://esm.run/preact
  var e;
  var n;
  var t;
  var _;
  var l;
  var o;
  var r;
  var i;
  var u;
  var s = {};
  var c = [];
  var f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function p(e2, n2) {
    for (var t2 in n2)
      e2[t2] = n2[t2];
    return e2;
  }
  function a(e2) {
    var n2 = e2.parentNode;
    n2 && n2.removeChild(e2);
  }
  function d(n2, t2, _2) {
    var l2, o2, r2, i2 = {};
    for (r2 in t2)
      "key" == r2 ? l2 = t2[r2] : "ref" == r2 ? o2 = t2[r2] : i2[r2] = t2[r2];
    if (arguments.length > 2 && (i2.children = arguments.length > 3 ? e.call(arguments, 2) : _2), "function" == typeof n2 && null != n2.defaultProps)
      for (r2 in n2.defaultProps)
        void 0 === i2[r2] && (i2[r2] = n2.defaultProps[r2]);
    return h(n2, i2, l2, o2, null);
  }
  function h(e2, _2, l2, o2, r2) {
    var i2 = { type: e2, props: _2, key: l2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++t : r2 };
    return null == r2 && null != n.vnode && n.vnode(i2), i2;
  }
  function y(e2) {
    return e2.children;
  }
  function m(e2, n2) {
    this.props = e2, this.context = n2;
  }
  function g(e2, n2) {
    if (null == n2)
      return e2.__ ? g(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var t2; n2 < e2.__k.length; n2++)
      if (null != (t2 = e2.__k[n2]) && null != t2.__e)
        return t2.__e;
    return "function" == typeof e2.type ? g(e2) : null;
  }
  function k(e2) {
    var n2, t2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, n2 = 0; n2 < e2.__k.length; n2++)
        if (null != (t2 = e2.__k[n2]) && null != t2.__e) {
          e2.__e = e2.__c.base = t2.__e;
          break;
        }
      return k(e2);
    }
  }
  function b(e2) {
    (!e2.__d && (e2.__d = true) && l.push(e2) && !x.__r++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || r)(x);
  }
  function x() {
    var e2, n2, t2, _2, o2, r2, u2, s2;
    for (l.sort(i); e2 = l.shift(); )
      e2.__d && (n2 = l.length, _2 = void 0, o2 = void 0, u2 = (r2 = (t2 = e2).__v).__e, (s2 = t2.__P) && (_2 = [], (o2 = p({}, r2)).__v = r2.__v + 1, W(s2, r2, o2, t2.__n, void 0 !== s2.ownerSVGElement, null != r2.__h ? [u2] : null, _2, null == u2 ? g(r2) : u2, r2.__h), L(_2, r2), r2.__e != u2 && k(r2)), l.length > n2 && l.sort(i));
    x.__r = 0;
  }
  function C(e2, n2, t2, _2, l2, o2, r2, i2, u2, f2) {
    var p2, a2, d2, v, m2, k2, b2, x2 = _2 && _2.__k || c, C2 = x2.length;
    for (t2.__k = [], p2 = 0; p2 < n2.length; p2++)
      if (null != (v = t2.__k[p2] = null == (v = n2[p2]) || "boolean" == typeof v || "function" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? h(null, v, null, null, v) : Array.isArray(v) ? h(y, { children: v }, null, null, null) : v.__b > 0 ? h(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
        if (v.__ = t2, v.__b = t2.__b + 1, null === (d2 = x2[p2]) || d2 && v.key == d2.key && v.type === d2.type)
          x2[p2] = void 0;
        else
          for (a2 = 0; a2 < C2; a2++) {
            if ((d2 = x2[a2]) && v.key == d2.key && v.type === d2.type) {
              x2[a2] = void 0;
              break;
            }
            d2 = null;
          }
        W(e2, v, d2 = d2 || s, l2, o2, r2, i2, u2, f2), m2 = v.__e, (a2 = v.ref) && d2.ref != a2 && (b2 || (b2 = []), d2.ref && b2.push(d2.ref, null, v), b2.push(a2, v.__c || m2, v)), null != m2 ? (null == k2 && (k2 = m2), "function" == typeof v.type && v.__k === d2.__k ? v.__d = u2 = S(v, u2, e2) : u2 = w(e2, v, d2, x2, m2, u2), "function" == typeof t2.type && (t2.__d = u2)) : u2 && d2.__e == u2 && u2.parentNode != e2 && (u2 = g(d2));
      }
    for (t2.__e = k2, p2 = C2; p2--; )
      null != x2[p2] && ("function" == typeof t2.type && null != x2[p2].__e && x2[p2].__e == t2.__d && (t2.__d = E(_2).nextSibling), H(x2[p2], x2[p2]));
    if (b2)
      for (p2 = 0; p2 < b2.length; p2++)
        F(b2[p2], b2[++p2], b2[++p2]);
  }
  function S(e2, n2, t2) {
    for (var _2, l2 = e2.__k, o2 = 0; l2 && o2 < l2.length; o2++)
      (_2 = l2[o2]) && (_2.__ = e2, n2 = "function" == typeof _2.type ? S(_2, n2, t2) : w(t2, _2, _2, l2, _2.__e, n2));
    return n2;
  }
  function w(e2, n2, t2, _2, l2, o2) {
    var r2, i2, u2;
    if (void 0 !== n2.__d)
      r2 = n2.__d, n2.__d = void 0;
    else if (null == t2 || l2 != o2 || null == l2.parentNode)
      e:
        if (null == o2 || o2.parentNode !== e2)
          e2.appendChild(l2), r2 = null;
        else {
          for (i2 = o2, u2 = 0; (i2 = i2.nextSibling) && u2 < _2.length; u2 += 1)
            if (i2 == l2)
              break e;
          e2.insertBefore(l2, o2), r2 = o2;
        }
    return void 0 !== r2 ? r2 : l2.nextSibling;
  }
  function E(e2) {
    var n2, t2, _2;
    if (null == e2.type || "string" == typeof e2.type)
      return e2.__e;
    if (e2.__k) {
      for (n2 = e2.__k.length - 1; n2 >= 0; n2--)
        if ((t2 = e2.__k[n2]) && (_2 = E(t2)))
          return _2;
    }
    return null;
  }
  function U(e2, n2, t2, _2, l2) {
    var o2;
    for (o2 in t2)
      "children" === o2 || "key" === o2 || o2 in n2 || D(e2, o2, null, t2[o2], _2);
    for (o2 in n2)
      l2 && "function" != typeof n2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || t2[o2] === n2[o2] || D(e2, o2, n2[o2], t2[o2], _2);
  }
  function A(e2, n2, t2) {
    "-" === n2[0] ? e2.setProperty(n2, null == t2 ? "" : t2) : e2[n2] = null == t2 ? "" : "number" != typeof t2 || f.test(n2) ? t2 : t2 + "px";
  }
  function D(e2, n2, t2, _2, l2) {
    var o2;
    e:
      if ("style" === n2)
        if ("string" == typeof t2)
          e2.style.cssText = t2;
        else {
          if ("string" == typeof _2 && (e2.style.cssText = _2 = ""), _2)
            for (n2 in _2)
              t2 && n2 in t2 || A(e2.style, n2, "");
          if (t2)
            for (n2 in t2)
              _2 && t2[n2] === _2[n2] || A(e2.style, n2, t2[n2]);
        }
      else if ("o" === n2[0] && "n" === n2[1])
        o2 = n2 !== (n2 = n2.replace(/Capture$/, "")), n2 = n2.toLowerCase() in e2 ? n2.toLowerCase().slice(2) : n2.slice(2), e2.l || (e2.l = {}), e2.l[n2 + o2] = t2, t2 ? _2 || e2.addEventListener(n2, o2 ? N : T, o2) : e2.removeEventListener(n2, o2 ? N : T, o2);
      else if ("dangerouslySetInnerHTML" !== n2) {
        if (l2)
          n2 = n2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== n2 && "height" !== n2 && "href" !== n2 && "list" !== n2 && "form" !== n2 && "tabIndex" !== n2 && "download" !== n2 && n2 in e2)
          try {
            e2[n2] = null == t2 ? "" : t2;
            break e;
          } catch (e3) {
          }
        "function" == typeof t2 || (null == t2 || false === t2 && -1 == n2.indexOf("-") ? e2.removeAttribute(n2) : e2.setAttribute(n2, t2));
      }
  }
  function T(e2) {
    return this.l[e2.type + false](n.event ? n.event(e2) : e2);
  }
  function N(e2) {
    return this.l[e2.type + true](n.event ? n.event(e2) : e2);
  }
  function W(e2, t2, _2, l2, o2, r2, i2, u2, s2) {
    var c2, f2, a2, d2, h2, v, g2, k2, b2, x2, S2, P, w2, E2, U2, A2 = t2.type;
    if (void 0 !== t2.constructor)
      return null;
    null != _2.__h && (s2 = _2.__h, u2 = t2.__e = _2.__e, t2.__h = null, r2 = [u2]), (c2 = n.__b) && c2(t2);
    try {
      e:
        if ("function" == typeof A2) {
          if (k2 = t2.props, b2 = (c2 = A2.contextType) && l2[c2.__c], x2 = c2 ? b2 ? b2.props.value : c2.__ : l2, _2.__c ? g2 = (f2 = t2.__c = _2.__c).__ = f2.__E : ("prototype" in A2 && A2.prototype.render ? t2.__c = f2 = new A2(k2, x2) : (t2.__c = f2 = new m(k2, x2), f2.constructor = A2, f2.render = O), b2 && b2.sub(f2), f2.props = k2, f2.state || (f2.state = {}), f2.context = x2, f2.__n = l2, a2 = f2.__d = true, f2.__h = [], f2._sb = []), null == f2.__s && (f2.__s = f2.state), null != A2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = p({}, f2.__s)), p(f2.__s, A2.getDerivedStateFromProps(k2, f2.__s))), d2 = f2.props, h2 = f2.state, f2.__v = t2, a2)
            null == A2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && k2 !== d2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(k2, x2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(k2, f2.__s, x2) || t2.__v === _2.__v) {
              for (t2.__v !== _2.__v && (f2.props = k2, f2.state = f2.__s, f2.__d = false), f2.__e = false, t2.__e = _2.__e, t2.__k = _2.__k, t2.__k.forEach(function(e3) {
                e3 && (e3.__ = t2);
              }), S2 = 0; S2 < f2._sb.length; S2++)
                f2.__h.push(f2._sb[S2]);
              f2._sb = [], f2.__h.length && i2.push(f2);
              break e;
            }
            null != f2.componentWillUpdate && f2.componentWillUpdate(k2, f2.__s, x2), null != f2.componentDidUpdate && f2.__h.push(function() {
              f2.componentDidUpdate(d2, h2, v);
            });
          }
          if (f2.context = x2, f2.props = k2, f2.__P = e2, P = n.__r, w2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (f2.state = f2.__s, f2.__d = false, P && P(t2), c2 = f2.render(f2.props, f2.state, f2.context), E2 = 0; E2 < f2._sb.length; E2++)
              f2.__h.push(f2._sb[E2]);
            f2._sb = [];
          } else
            do {
              f2.__d = false, P && P(t2), c2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s;
            } while (f2.__d && ++w2 < 25);
          f2.state = f2.__s, null != f2.getChildContext && (l2 = p(p({}, l2), f2.getChildContext())), a2 || null == f2.getSnapshotBeforeUpdate || (v = f2.getSnapshotBeforeUpdate(d2, h2)), U2 = null != c2 && c2.type === y && null == c2.key ? c2.props.children : c2, C(e2, Array.isArray(U2) ? U2 : [U2], t2, _2, l2, o2, r2, i2, u2, s2), f2.base = t2.__e, t2.__h = null, f2.__h.length && i2.push(f2), g2 && (f2.__E = f2.__ = null), f2.__e = false;
        } else
          null == r2 && t2.__v === _2.__v ? (t2.__k = _2.__k, t2.__e = _2.__e) : t2.__e = M(_2.__e, t2, _2, l2, o2, r2, i2, s2);
      (c2 = n.diffed) && c2(t2);
    } catch (e3) {
      t2.__v = null, (s2 || null != r2) && (t2.__e = u2, t2.__h = !!s2, r2[r2.indexOf(u2)] = null), n.__e(e3, t2, _2);
    }
  }
  function L(e2, t2) {
    n.__c && n.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        n.__e(e3, t3.__v);
      }
    });
  }
  function M(n2, t2, _2, l2, o2, r2, i2, u2) {
    var c2, f2, p2, d2 = _2.props, h2 = t2.props, v = t2.type, y2 = 0;
    if ("svg" === v && (o2 = true), null != r2) {
      for (; y2 < r2.length; y2++)
        if ((c2 = r2[y2]) && "setAttribute" in c2 == !!v && (v ? c2.localName === v : 3 === c2.nodeType)) {
          n2 = c2, r2[y2] = null;
          break;
        }
    }
    if (null == n2) {
      if (null === v)
        return document.createTextNode(h2);
      n2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, h2.is && h2), r2 = null, u2 = false;
    }
    if (null === v)
      d2 === h2 || u2 && n2.data === h2 || (n2.data = h2);
    else {
      if (r2 = r2 && e.call(n2.childNodes), f2 = (d2 = _2.props || s).dangerouslySetInnerHTML, p2 = h2.dangerouslySetInnerHTML, !u2) {
        if (null != r2)
          for (d2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
            d2[n2.attributes[y2].name] = n2.attributes[y2].value;
        (p2 || f2) && (p2 && (f2 && p2.__html == f2.__html || p2.__html === n2.innerHTML) || (n2.innerHTML = p2 && p2.__html || ""));
      }
      if (U(n2, h2, d2, o2, u2), p2)
        t2.__k = [];
      else if (y2 = t2.props.children, C(n2, Array.isArray(y2) ? y2 : [y2], t2, _2, l2, o2 && "foreignObject" !== v, r2, i2, r2 ? r2[0] : _2.__k && g(_2, 0), u2), null != r2)
        for (y2 = r2.length; y2--; )
          null != r2[y2] && a(r2[y2]);
      u2 || ("value" in h2 && void 0 !== (y2 = h2.value) && (y2 !== n2.value || "progress" === v && !y2 || "option" === v && y2 !== d2.value) && D(n2, "value", y2, d2.value, false), "checked" in h2 && void 0 !== (y2 = h2.checked) && y2 !== n2.checked && D(n2, "checked", y2, d2.checked, false));
    }
    return n2;
  }
  function F(e2, t2, _2) {
    try {
      "function" == typeof e2 ? e2(t2) : e2.current = t2;
    } catch (e3) {
      n.__e(e3, _2);
    }
  }
  function H(e2, t2, _2) {
    var l2, o2;
    if (n.unmount && n.unmount(e2), (l2 = e2.ref) && (l2.current && l2.current !== e2.__e || F(l2, null, t2)), null != (l2 = e2.__c)) {
      if (l2.componentWillUnmount)
        try {
          l2.componentWillUnmount();
        } catch (e3) {
          n.__e(e3, t2);
        }
      l2.base = l2.__P = null, e2.__c = void 0;
    }
    if (l2 = e2.__k)
      for (o2 = 0; o2 < l2.length; o2++)
        l2[o2] && H(l2[o2], t2, _2 || "function" != typeof e2.type);
    _2 || null == e2.__e || a(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
  }
  function O(e2, n2, t2) {
    return this.constructor(e2, t2);
  }
  function R(t2, _2, l2) {
    var o2, r2, i2;
    n.__ && n.__(t2, _2), r2 = (o2 = "function" == typeof l2) ? null : l2 && l2.__k || _2.__k, i2 = [], W(_2, t2 = (!o2 && l2 || _2).__k = d(y, null, [t2]), r2 || s, s, void 0 !== _2.ownerSVGElement, !o2 && l2 ? [l2] : r2 ? null : _2.firstChild ? e.call(_2.childNodes) : null, i2, !o2 && l2 ? l2 : r2 ? r2.__e : _2.firstChild, o2), L(i2, t2);
  }
  e = c.slice, n = { __e: function(e2, n2, t2, _2) {
    for (var l2, o2, r2; n2 = n2.__; )
      if ((l2 = n2.__c) && !l2.__)
        try {
          if ((o2 = l2.constructor) && null != o2.getDerivedStateFromError && (l2.setState(o2.getDerivedStateFromError(e2)), r2 = l2.__d), null != l2.componentDidCatch && (l2.componentDidCatch(e2, _2 || {}), r2 = l2.__d), r2)
            return l2.__E = l2;
        } catch (n3) {
          e2 = n3;
        }
    throw e2;
  } }, t = 0, _ = function(e2) {
    return null != e2 && void 0 === e2.constructor;
  }, m.prototype.setState = function(e2, n2) {
    var t2;
    t2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e2 && (e2 = e2(p({}, t2), this.props)), e2 && p(t2, e2), null != e2 && this.__v && (n2 && this._sb.push(n2), b(this));
  }, m.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), b(this));
  }, m.prototype.render = y, l = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = function(e2, n2) {
    return e2.__v.__b - n2.__v.__b;
  }, x.__r = 0, u = 0;

  // src/browser/components/Omnibox.tsx
  var Omnibox_default = class extends m {
    constructor(props) {
      super(props);
      this.state = {
        omni: ""
      };
    }
    doInput(e2) {
      this.state.omni = e2.target.value;
    }
    doSubmit(e2) {
      e2.preventDefault();
      this.props.onEnter(this.state.omni);
      return false;
    }
    doFocus(e2) {
      console.log(0);
      e2.target.select();
    }
    render() {
      return /* @__PURE__ */ d("div", null, /* @__PURE__ */ d(
        "form",
        {
          class: "omnibox-form",
          onSubmit: this.doSubmit.bind(this)
        },
        /* @__PURE__ */ d(
          "input",
          {
            class: "omnibox-input",
            style: {
              width: "90%",
              height: "20px",
              borderRadius: "10px"
            },
            placeholder: "Input URL...",
            onInput: this.doInput.bind(this),
            onFocus: this.doFocus.bind(this)
          }
        )
      ));
    }
  };
  Omnibox_default.defaultProps = {
    onEnter: () => {
    }
  };

  // src/browser/index.tsx
  var browser_default = class extends m {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return /* @__PURE__ */ d("div", null, /* @__PURE__ */ d(Omnibox_default, null));
    }
  };

  // src/components/App.tsx
  var App_default = class extends m {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return /* @__PURE__ */ d("div", null, /* @__PURE__ */ d("h1", null, "WonB"), /* @__PURE__ */ d("p", null, "By Liberluna"), /* @__PURE__ */ d(browser_default, null));
    }
  };

  // src/main.tsx
  function main_default() {
    R(/* @__PURE__ */ d(App_default, null), document.getElementById("app"));
  }

  // src/index.ts
  window.onload = () => main_default();
})();
