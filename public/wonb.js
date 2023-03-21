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
  function p(e3, n3) {
    for (var t3 in n3)
      e3[t3] = n3[t3];
    return e3;
  }
  function a(e3) {
    var n3 = e3.parentNode;
    n3 && n3.removeChild(e3);
  }
  function d(n3, t3, _3) {
    var l3, o3, r3, i3 = {};
    for (r3 in t3)
      "key" == r3 ? l3 = t3[r3] : "ref" == r3 ? o3 = t3[r3] : i3[r3] = t3[r3];
    if (arguments.length > 2 && (i3.children = arguments.length > 3 ? e.call(arguments, 2) : _3), "function" == typeof n3 && null != n3.defaultProps)
      for (r3 in n3.defaultProps)
        void 0 === i3[r3] && (i3[r3] = n3.defaultProps[r3]);
    return h(n3, i3, l3, o3, null);
  }
  function h(e3, _3, l3, o3, r3) {
    var i3 = { type: e3, props: _3, key: l3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++t : r3 };
    return null == r3 && null != n.vnode && n.vnode(i3), i3;
  }
  function v() {
    return { current: null };
  }
  function y(e3) {
    return e3.children;
  }
  function m(e3, n3) {
    this.props = e3, this.context = n3;
  }
  function g(e3, n3) {
    if (null == n3)
      return e3.__ ? g(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
    for (var t3; n3 < e3.__k.length; n3++)
      if (null != (t3 = e3.__k[n3]) && null != t3.__e)
        return t3.__e;
    return "function" == typeof e3.type ? g(e3) : null;
  }
  function k(e3) {
    var n3, t3;
    if (null != (e3 = e3.__) && null != e3.__c) {
      for (e3.__e = e3.__c.base = null, n3 = 0; n3 < e3.__k.length; n3++)
        if (null != (t3 = e3.__k[n3]) && null != t3.__e) {
          e3.__e = e3.__c.base = t3.__e;
          break;
        }
      return k(e3);
    }
  }
  function b(e3) {
    (!e3.__d && (e3.__d = true) && l.push(e3) && !x.__r++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || r)(x);
  }
  function x() {
    var e3, n3, t3, _3, o3, r3, u3, s3;
    for (l.sort(i); e3 = l.shift(); )
      e3.__d && (n3 = l.length, _3 = void 0, o3 = void 0, u3 = (r3 = (t3 = e3).__v).__e, (s3 = t3.__P) && (_3 = [], (o3 = p({}, r3)).__v = r3.__v + 1, W(s3, r3, o3, t3.__n, void 0 !== s3.ownerSVGElement, null != r3.__h ? [u3] : null, _3, null == u3 ? g(r3) : u3, r3.__h), L(_3, r3), r3.__e != u3 && k(r3)), l.length > n3 && l.sort(i));
    x.__r = 0;
  }
  function C(e3, n3, t3, _3, l3, o3, r3, i3, u3, f3) {
    var p3, a3, d3, v2, m3, k2, b3, x2 = _3 && _3.__k || c, C2 = x2.length;
    for (t3.__k = [], p3 = 0; p3 < n3.length; p3++)
      if (null != (v2 = t3.__k[p3] = null == (v2 = n3[p3]) || "boolean" == typeof v2 || "function" == typeof v2 ? null : "string" == typeof v2 || "number" == typeof v2 || "bigint" == typeof v2 ? h(null, v2, null, null, v2) : Array.isArray(v2) ? h(y, { children: v2 }, null, null, null) : v2.__b > 0 ? h(v2.type, v2.props, v2.key, v2.ref ? v2.ref : null, v2.__v) : v2)) {
        if (v2.__ = t3, v2.__b = t3.__b + 1, null === (d3 = x2[p3]) || d3 && v2.key == d3.key && v2.type === d3.type)
          x2[p3] = void 0;
        else
          for (a3 = 0; a3 < C2; a3++) {
            if ((d3 = x2[a3]) && v2.key == d3.key && v2.type === d3.type) {
              x2[a3] = void 0;
              break;
            }
            d3 = null;
          }
        W(e3, v2, d3 = d3 || s, l3, o3, r3, i3, u3, f3), m3 = v2.__e, (a3 = v2.ref) && d3.ref != a3 && (b3 || (b3 = []), d3.ref && b3.push(d3.ref, null, v2), b3.push(a3, v2.__c || m3, v2)), null != m3 ? (null == k2 && (k2 = m3), "function" == typeof v2.type && v2.__k === d3.__k ? v2.__d = u3 = S(v2, u3, e3) : u3 = w(e3, v2, d3, x2, m3, u3), "function" == typeof t3.type && (t3.__d = u3)) : u3 && d3.__e == u3 && u3.parentNode != e3 && (u3 = g(d3));
      }
    for (t3.__e = k2, p3 = C2; p3--; )
      null != x2[p3] && ("function" == typeof t3.type && null != x2[p3].__e && x2[p3].__e == t3.__d && (t3.__d = E(_3).nextSibling), H(x2[p3], x2[p3]));
    if (b3)
      for (p3 = 0; p3 < b3.length; p3++)
        F(b3[p3], b3[++p3], b3[++p3]);
  }
  function S(e3, n3, t3) {
    for (var _3, l3 = e3.__k, o3 = 0; l3 && o3 < l3.length; o3++)
      (_3 = l3[o3]) && (_3.__ = e3, n3 = "function" == typeof _3.type ? S(_3, n3, t3) : w(t3, _3, _3, l3, _3.__e, n3));
    return n3;
  }
  function w(e3, n3, t3, _3, l3, o3) {
    var r3, i3, u3;
    if (void 0 !== n3.__d)
      r3 = n3.__d, n3.__d = void 0;
    else if (null == t3 || l3 != o3 || null == l3.parentNode)
      e:
        if (null == o3 || o3.parentNode !== e3)
          e3.appendChild(l3), r3 = null;
        else {
          for (i3 = o3, u3 = 0; (i3 = i3.nextSibling) && u3 < _3.length; u3 += 1)
            if (i3 == l3)
              break e;
          e3.insertBefore(l3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : l3.nextSibling;
  }
  function E(e3) {
    var n3, t3, _3;
    if (null == e3.type || "string" == typeof e3.type)
      return e3.__e;
    if (e3.__k) {
      for (n3 = e3.__k.length - 1; n3 >= 0; n3--)
        if ((t3 = e3.__k[n3]) && (_3 = E(t3)))
          return _3;
    }
    return null;
  }
  function U(e3, n3, t3, _3, l3) {
    var o3;
    for (o3 in t3)
      "children" === o3 || "key" === o3 || o3 in n3 || D(e3, o3, null, t3[o3], _3);
    for (o3 in n3)
      l3 && "function" != typeof n3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || t3[o3] === n3[o3] || D(e3, o3, n3[o3], t3[o3], _3);
  }
  function A(e3, n3, t3) {
    "-" === n3[0] ? e3.setProperty(n3, null == t3 ? "" : t3) : e3[n3] = null == t3 ? "" : "number" != typeof t3 || f.test(n3) ? t3 : t3 + "px";
  }
  function D(e3, n3, t3, _3, l3) {
    var o3;
    e:
      if ("style" === n3)
        if ("string" == typeof t3)
          e3.style.cssText = t3;
        else {
          if ("string" == typeof _3 && (e3.style.cssText = _3 = ""), _3)
            for (n3 in _3)
              t3 && n3 in t3 || A(e3.style, n3, "");
          if (t3)
            for (n3 in t3)
              _3 && t3[n3] === _3[n3] || A(e3.style, n3, t3[n3]);
        }
      else if ("o" === n3[0] && "n" === n3[1])
        o3 = n3 !== (n3 = n3.replace(/Capture$/, "")), n3 = n3.toLowerCase() in e3 ? n3.toLowerCase().slice(2) : n3.slice(2), e3.l || (e3.l = {}), e3.l[n3 + o3] = t3, t3 ? _3 || e3.addEventListener(n3, o3 ? N : T, o3) : e3.removeEventListener(n3, o3 ? N : T, o3);
      else if ("dangerouslySetInnerHTML" !== n3) {
        if (l3)
          n3 = n3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== n3 && "height" !== n3 && "href" !== n3 && "list" !== n3 && "form" !== n3 && "tabIndex" !== n3 && "download" !== n3 && n3 in e3)
          try {
            e3[n3] = null == t3 ? "" : t3;
            break e;
          } catch (e4) {
          }
        "function" == typeof t3 || (null == t3 || false === t3 && -1 == n3.indexOf("-") ? e3.removeAttribute(n3) : e3.setAttribute(n3, t3));
      }
  }
  function T(e3) {
    return this.l[e3.type + false](n.event ? n.event(e3) : e3);
  }
  function N(e3) {
    return this.l[e3.type + true](n.event ? n.event(e3) : e3);
  }
  function W(e3, t3, _3, l3, o3, r3, i3, u3, s3) {
    var c3, f3, a3, d3, h3, v2, g3, k2, b3, x2, S2, P, w3, E2, U2, A2 = t3.type;
    if (void 0 !== t3.constructor)
      return null;
    null != _3.__h && (s3 = _3.__h, u3 = t3.__e = _3.__e, t3.__h = null, r3 = [u3]), (c3 = n.__b) && c3(t3);
    try {
      e:
        if ("function" == typeof A2) {
          if (k2 = t3.props, b3 = (c3 = A2.contextType) && l3[c3.__c], x2 = c3 ? b3 ? b3.props.value : c3.__ : l3, _3.__c ? g3 = (f3 = t3.__c = _3.__c).__ = f3.__E : ("prototype" in A2 && A2.prototype.render ? t3.__c = f3 = new A2(k2, x2) : (t3.__c = f3 = new m(k2, x2), f3.constructor = A2, f3.render = O), b3 && b3.sub(f3), f3.props = k2, f3.state || (f3.state = {}), f3.context = x2, f3.__n = l3, a3 = f3.__d = true, f3.__h = [], f3._sb = []), null == f3.__s && (f3.__s = f3.state), null != A2.getDerivedStateFromProps && (f3.__s == f3.state && (f3.__s = p({}, f3.__s)), p(f3.__s, A2.getDerivedStateFromProps(k2, f3.__s))), d3 = f3.props, h3 = f3.state, f3.__v = t3, a3)
            null == A2.getDerivedStateFromProps && null != f3.componentWillMount && f3.componentWillMount(), null != f3.componentDidMount && f3.__h.push(f3.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && k2 !== d3 && null != f3.componentWillReceiveProps && f3.componentWillReceiveProps(k2, x2), !f3.__e && null != f3.shouldComponentUpdate && false === f3.shouldComponentUpdate(k2, f3.__s, x2) || t3.__v === _3.__v) {
              for (t3.__v !== _3.__v && (f3.props = k2, f3.state = f3.__s, f3.__d = false), f3.__e = false, t3.__e = _3.__e, t3.__k = _3.__k, t3.__k.forEach(function(e4) {
                e4 && (e4.__ = t3);
              }), S2 = 0; S2 < f3._sb.length; S2++)
                f3.__h.push(f3._sb[S2]);
              f3._sb = [], f3.__h.length && i3.push(f3);
              break e;
            }
            null != f3.componentWillUpdate && f3.componentWillUpdate(k2, f3.__s, x2), null != f3.componentDidUpdate && f3.__h.push(function() {
              f3.componentDidUpdate(d3, h3, v2);
            });
          }
          if (f3.context = x2, f3.props = k2, f3.__P = e3, P = n.__r, w3 = 0, "prototype" in A2 && A2.prototype.render) {
            for (f3.state = f3.__s, f3.__d = false, P && P(t3), c3 = f3.render(f3.props, f3.state, f3.context), E2 = 0; E2 < f3._sb.length; E2++)
              f3.__h.push(f3._sb[E2]);
            f3._sb = [];
          } else
            do {
              f3.__d = false, P && P(t3), c3 = f3.render(f3.props, f3.state, f3.context), f3.state = f3.__s;
            } while (f3.__d && ++w3 < 25);
          f3.state = f3.__s, null != f3.getChildContext && (l3 = p(p({}, l3), f3.getChildContext())), a3 || null == f3.getSnapshotBeforeUpdate || (v2 = f3.getSnapshotBeforeUpdate(d3, h3)), U2 = null != c3 && c3.type === y && null == c3.key ? c3.props.children : c3, C(e3, Array.isArray(U2) ? U2 : [U2], t3, _3, l3, o3, r3, i3, u3, s3), f3.base = t3.__e, t3.__h = null, f3.__h.length && i3.push(f3), g3 && (f3.__E = f3.__ = null), f3.__e = false;
        } else
          null == r3 && t3.__v === _3.__v ? (t3.__k = _3.__k, t3.__e = _3.__e) : t3.__e = M(_3.__e, t3, _3, l3, o3, r3, i3, s3);
      (c3 = n.diffed) && c3(t3);
    } catch (e4) {
      t3.__v = null, (s3 || null != r3) && (t3.__e = u3, t3.__h = !!s3, r3[r3.indexOf(u3)] = null), n.__e(e4, t3, _3);
    }
  }
  function L(e3, t3) {
    n.__c && n.__c(t3, e3), e3.some(function(t4) {
      try {
        e3 = t4.__h, t4.__h = [], e3.some(function(e4) {
          e4.call(t4);
        });
      } catch (e4) {
        n.__e(e4, t4.__v);
      }
    });
  }
  function M(n3, t3, _3, l3, o3, r3, i3, u3) {
    var c3, f3, p3, d3 = _3.props, h3 = t3.props, v2 = t3.type, y3 = 0;
    if ("svg" === v2 && (o3 = true), null != r3) {
      for (; y3 < r3.length; y3++)
        if ((c3 = r3[y3]) && "setAttribute" in c3 == !!v2 && (v2 ? c3.localName === v2 : 3 === c3.nodeType)) {
          n3 = c3, r3[y3] = null;
          break;
        }
    }
    if (null == n3) {
      if (null === v2)
        return document.createTextNode(h3);
      n3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", v2) : document.createElement(v2, h3.is && h3), r3 = null, u3 = false;
    }
    if (null === v2)
      d3 === h3 || u3 && n3.data === h3 || (n3.data = h3);
    else {
      if (r3 = r3 && e.call(n3.childNodes), f3 = (d3 = _3.props || s).dangerouslySetInnerHTML, p3 = h3.dangerouslySetInnerHTML, !u3) {
        if (null != r3)
          for (d3 = {}, y3 = 0; y3 < n3.attributes.length; y3++)
            d3[n3.attributes[y3].name] = n3.attributes[y3].value;
        (p3 || f3) && (p3 && (f3 && p3.__html == f3.__html || p3.__html === n3.innerHTML) || (n3.innerHTML = p3 && p3.__html || ""));
      }
      if (U(n3, h3, d3, o3, u3), p3)
        t3.__k = [];
      else if (y3 = t3.props.children, C(n3, Array.isArray(y3) ? y3 : [y3], t3, _3, l3, o3 && "foreignObject" !== v2, r3, i3, r3 ? r3[0] : _3.__k && g(_3, 0), u3), null != r3)
        for (y3 = r3.length; y3--; )
          null != r3[y3] && a(r3[y3]);
      u3 || ("value" in h3 && void 0 !== (y3 = h3.value) && (y3 !== n3.value || "progress" === v2 && !y3 || "option" === v2 && y3 !== d3.value) && D(n3, "value", y3, d3.value, false), "checked" in h3 && void 0 !== (y3 = h3.checked) && y3 !== n3.checked && D(n3, "checked", y3, d3.checked, false));
    }
    return n3;
  }
  function F(e3, t3, _3) {
    try {
      "function" == typeof e3 ? e3(t3) : e3.current = t3;
    } catch (e4) {
      n.__e(e4, _3);
    }
  }
  function H(e3, t3, _3) {
    var l3, o3;
    if (n.unmount && n.unmount(e3), (l3 = e3.ref) && (l3.current && l3.current !== e3.__e || F(l3, null, t3)), null != (l3 = e3.__c)) {
      if (l3.componentWillUnmount)
        try {
          l3.componentWillUnmount();
        } catch (e4) {
          n.__e(e4, t3);
        }
      l3.base = l3.__P = null, e3.__c = void 0;
    }
    if (l3 = e3.__k)
      for (o3 = 0; o3 < l3.length; o3++)
        l3[o3] && H(l3[o3], t3, _3 || "function" != typeof e3.type);
    _3 || null == e3.__e || a(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
  }
  function O(e3, n3, t3) {
    return this.constructor(e3, t3);
  }
  function R(t3, _3, l3) {
    var o3, r3, i3;
    n.__ && n.__(t3, _3), r3 = (o3 = "function" == typeof l3) ? null : l3 && l3.__k || _3.__k, i3 = [], W(_3, t3 = (!o3 && l3 || _3).__k = d(y, null, [t3]), r3 || s, s, void 0 !== _3.ownerSVGElement, !o3 && l3 ? [l3] : r3 ? null : _3.firstChild ? e.call(_3.childNodes) : null, i3, !o3 && l3 ? l3 : r3 ? r3.__e : _3.firstChild, o3), L(i3, t3);
  }
  e = c.slice, n = { __e: function(e3, n3, t3, _3) {
    for (var l3, o3, r3; n3 = n3.__; )
      if ((l3 = n3.__c) && !l3.__)
        try {
          if ((o3 = l3.constructor) && null != o3.getDerivedStateFromError && (l3.setState(o3.getDerivedStateFromError(e3)), r3 = l3.__d), null != l3.componentDidCatch && (l3.componentDidCatch(e3, _3 || {}), r3 = l3.__d), r3)
            return l3.__E = l3;
        } catch (n4) {
          e3 = n4;
        }
    throw e3;
  } }, t = 0, _ = function(e3) {
    return null != e3 && void 0 === e3.constructor;
  }, m.prototype.setState = function(e3, n3) {
    var t3;
    t3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e3 && (e3 = e3(p({}, t3), this.props)), e3 && p(t3, e3), null != e3 && this.__v && (n3 && this._sb.push(n3), b(this));
  }, m.prototype.forceUpdate = function(e3) {
    this.__v && (this.__e = true, e3 && this.__h.push(e3), b(this));
  }, m.prototype.render = y, l = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = function(e3, n3) {
    return e3.__v.__b - n3.__v.__b;
  }, x.__r = 0, u = 0;

  // src/browser/components/Omnibox.tsx
  var Omnibox_default = class extends m {
    constructor(props) {
      super(props);
      this.state = {
        omni: ""
      };
    }
    doInput(e3) {
      this.setState({
        omni: e3.target.value
      });
    }
    doSubmit(e3) {
      e3.preventDefault();
      this.props.onEnter(this.state.omni);
      return false;
    }
    doFocus(e3) {
      e3.target.select();
    }
    componentDidUpdate() {
    }
    render() {
      return /* @__PURE__ */ d(
        "form",
        {
          class: "omnibox-form",
          onSubmit: this.doSubmit.bind(this),
          style: {
            width: "100%",
            height: "100%"
          }
        },
        /* @__PURE__ */ d(
          "input",
          {
            class: "omnibox-input",
            style: {
              width: "100%",
              height: "20px",
              borderRadius: "10px"
            },
            placeholder: "Input URL...",
            onInput: this.doInput.bind(this),
            onFocus: this.doFocus.bind(this)
          }
        )
      );
    }
  };
  Omnibox_default.defaultProps = {
    onEnter: () => {
    }
  };

  // deno-cache:https://esm.run/ky
  var t2 = class extends Error {
    constructor(t3, e3, s3) {
      const r3 = `${t3.status || 0 === t3.status ? t3.status : ""} ${t3.statusText || ""}`.trim();
      super(`Request failed with ${r3 ? `status code ${r3}` : "an unknown error"}`), Object.defineProperty(this, "response", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "HTTPError", this.response = t3, this.request = e3, this.options = s3;
    }
  };
  var e2 = class extends Error {
    constructor(t3) {
      super("Request timed out"), Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "TimeoutError", this.request = t3;
    }
  };
  var s2 = (t3) => null !== t3 && "object" == typeof t3;
  var r2 = (...t3) => {
    for (const e3 of t3)
      if ((!s2(e3) || Array.isArray(e3)) && void 0 !== e3)
        throw new TypeError("The `options` argument must be an object");
    return n2({}, ...t3);
  };
  var o2 = (t3 = {}, e3 = {}) => {
    const s3 = new globalThis.Headers(t3), r3 = e3 instanceof globalThis.Headers, o3 = new globalThis.Headers(e3);
    for (const [t4, e4] of o3.entries())
      r3 && "undefined" === e4 || void 0 === e4 ? s3.delete(t4) : s3.set(t4, e4);
    return s3;
  };
  var n2 = (...t3) => {
    let e3 = {}, r3 = {};
    for (const i3 of t3)
      if (Array.isArray(i3))
        Array.isArray(e3) || (e3 = []), e3 = [...e3, ...i3];
      else if (s2(i3)) {
        for (let [t4, r4] of Object.entries(i3))
          s2(r4) && t4 in e3 && (r4 = n2(e3[t4], r4)), e3 = { ...e3, [t4]: r4 };
        s2(i3.headers) && (r3 = o2(r3, i3.headers), e3.headers = r3);
      }
    return e3;
  };
  var i2 = (() => {
    let t3 = false, e3 = false;
    const s3 = "function" == typeof globalThis.ReadableStream, r3 = "function" == typeof globalThis.Request;
    return s3 && r3 && (e3 = new globalThis.Request("https://a.com", { body: new globalThis.ReadableStream(), method: "POST", get duplex() {
      return t3 = true, "half";
    } }).headers.has("Content-Type")), t3 && !e3;
  })();
  var a2 = "function" == typeof globalThis.AbortController;
  var u2 = "function" == typeof globalThis.ReadableStream;
  var h2 = "function" == typeof globalThis.FormData;
  var l2 = ["get", "post", "put", "patch", "head", "delete"];
  var p2 = { json: "application/json", text: "text/*", formData: "multipart/form-data", arrayBuffer: "*/*", blob: "*/*" };
  var c2 = Symbol("stop");
  var f2 = (t3) => l2.includes(t3) ? t3.toUpperCase() : t3;
  var d2 = [413, 429, 503];
  var b2 = { limit: 2, methods: ["get", "put", "head", "delete", "options", "trace"], statusCodes: [408, 413, 429, 500, 502, 503, 504], afterStatusCodes: d2, maxRetryAfter: Number.POSITIVE_INFINITY, backoffLimit: Number.POSITIVE_INFINITY };
  var y2 = (t3 = {}) => {
    if ("number" == typeof t3)
      return { ...b2, limit: t3 };
    if (t3.methods && !Array.isArray(t3.methods))
      throw new Error("retry.methods must be an array");
    if (t3.statusCodes && !Array.isArray(t3.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...b2, ...t3, afterStatusCodes: d2 };
  };
  var m2 = Boolean(globalThis.DOMException);
  function _2(t3) {
    if (m2)
      return new DOMException(t3?.reason ?? "The operation was aborted.", "AbortError");
    const e3 = new Error(t3?.reason ?? "The operation was aborted.");
    return e3.name = "AbortError", e3;
  }
  var w2 = class {
    static create(e3, s3) {
      const r3 = new w2(e3, s3), o3 = async () => {
        if (r3._options.timeout > 2147483647)
          throw new RangeError("The `timeout` option cannot be greater than 2147483647");
        await Promise.resolve();
        let e4 = await r3._fetch();
        for (const t3 of r3._options.hooks.afterResponse) {
          const s4 = await t3(r3.request, r3._options, r3._decorateResponse(e4.clone()));
          s4 instanceof globalThis.Response && (e4 = s4);
        }
        if (r3._decorateResponse(e4), !e4.ok && r3._options.throwHttpErrors) {
          let s4 = new t2(e4, r3.request, r3._options);
          for (const t3 of r3._options.hooks.beforeError)
            s4 = await t3(s4);
          throw s4;
        }
        if (r3._options.onDownloadProgress) {
          if ("function" != typeof r3._options.onDownloadProgress)
            throw new TypeError("The `onDownloadProgress` option must be a function");
          if (!u2)
            throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
          return r3._stream(e4.clone(), r3._options.onDownloadProgress);
        }
        return e4;
      }, n3 = r3._options.retry.methods.includes(r3.request.method.toLowerCase()) ? r3._retry(o3) : o3();
      for (const [t3, e4] of Object.entries(p2))
        n3[t3] = async () => {
          r3.request.headers.set("accept", r3.request.headers.get("accept") || e4);
          const o4 = (await n3).clone();
          if ("json" === t3) {
            if (204 === o4.status)
              return "";
            if (0 === (await o4.clone().arrayBuffer()).byteLength)
              return "";
            if (s3.parseJson)
              return s3.parseJson(await o4.text());
          }
          return o4[t3]();
        };
      return n3;
    }
    constructor(t3, e3 = {}) {
      if (Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "abortController", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_retryCount", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_input", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_options", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._input = t3, this._options = { credentials: this._input.credentials || "same-origin", ...e3, headers: o2(this._input.headers, e3.headers), hooks: n2({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, e3.hooks), method: f2(e3.method ?? this._input.method), prefixUrl: String(e3.prefixUrl || ""), retry: y2(e3.retry), throwHttpErrors: false !== e3.throwHttpErrors, timeout: void 0 === e3.timeout ? 1e4 : e3.timeout, fetch: e3.fetch ?? globalThis.fetch.bind(globalThis) }, "string" != typeof this._input && !(this._input instanceof URL || this._input instanceof globalThis.Request))
        throw new TypeError("`input` must be a string, URL, or Request");
      if (this._options.prefixUrl && "string" == typeof this._input) {
        if (this._input.startsWith("/"))
          throw new Error("`input` must not begin with a slash when using `prefixUrl`");
        this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input;
      }
      if (a2) {
        if (this.abortController = new globalThis.AbortController(), this._options.signal) {
          const t4 = this._options.signal;
          this._options.signal.addEventListener("abort", () => {
            this.abortController.abort(t4.reason);
          });
        }
        this._options.signal = this.abortController.signal;
      }
      if (i2 && (this._options.duplex = "half"), this.request = new globalThis.Request(this._input, this._options), this._options.searchParams) {
        const t4 = "?" + ("string" == typeof this._options.searchParams ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()), e4 = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, t4);
        !(h2 && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) || this._options.headers && this._options.headers["content-type"] || this.request.headers.delete("content-type"), this.request = new globalThis.Request(new globalThis.Request(e4, { ...this.request }), this._options);
      }
      void 0 !== this._options.json && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json"), this.request = new globalThis.Request(this.request, { body: this._options.body }));
    }
    _calculateRetryDelay(s3) {
      if (this._retryCount++, this._retryCount < this._options.retry.limit && !(s3 instanceof e2)) {
        if (s3 instanceof t2) {
          if (!this._options.retry.statusCodes.includes(s3.response.status))
            return 0;
          const t3 = s3.response.headers.get("Retry-After");
          if (t3 && this._options.retry.afterStatusCodes.includes(s3.response.status)) {
            let e4 = Number(t3);
            return Number.isNaN(e4) ? e4 = Date.parse(t3) - Date.now() : e4 *= 1e3, void 0 !== this._options.retry.maxRetryAfter && e4 > this._options.retry.maxRetryAfter ? 0 : e4;
          }
          if (413 === s3.response.status)
            return 0;
        }
        const e3 = 0.3;
        return Math.min(this._options.retry.backoffLimit, e3 * 2 ** (this._retryCount - 1) * 1e3);
      }
      return 0;
    }
    _decorateResponse(t3) {
      return this._options.parseJson && (t3.json = async () => this._options.parseJson(await t3.text())), t3;
    }
    async _retry(t3) {
      try {
        return await t3();
      } catch (e3) {
        const s3 = Math.min(this._calculateRetryDelay(e3), 2147483647);
        if (0 !== s3 && this._retryCount > 0) {
          await async function(t4, { signal: e4 }) {
            return new Promise((s4, r3) => {
              if (e4) {
                if (e4.aborted)
                  return void r3(_2(e4));
                e4.addEventListener("abort", o3, { once: true });
              }
              function o3() {
                r3(_2(e4)), clearTimeout(n3);
              }
              const n3 = setTimeout(() => {
                e4?.removeEventListener("abort", o3), s4();
              }, t4);
            });
          }(s3, { signal: this._options.signal });
          for (const t4 of this._options.hooks.beforeRetry) {
            if (await t4({ request: this.request, options: this._options, error: e3, retryCount: this._retryCount }) === c2)
              return;
          }
          return this._retry(t3);
        }
        throw e3;
      }
    }
    async _fetch() {
      for (const t3 of this._options.hooks.beforeRequest) {
        const e3 = await t3(this.request, this._options);
        if (e3 instanceof Request) {
          this.request = e3;
          break;
        }
        if (e3 instanceof Response)
          return e3;
      }
      return false === this._options.timeout ? this._options.fetch(this.request.clone()) : async function(t3, s3, r3) {
        return new Promise((o3, n3) => {
          const i3 = setTimeout(() => {
            s3 && s3.abort(), n3(new e2(t3));
          }, r3.timeout);
          r3.fetch(t3).then(o3).catch(n3).then(() => {
            clearTimeout(i3);
          });
        });
      }(this.request.clone(), this.abortController, this._options);
    }
    _stream(t3, e3) {
      const s3 = Number(t3.headers.get("content-length")) || 0;
      let r3 = 0;
      return 204 === t3.status ? (e3 && e3({ percent: 1, totalBytes: s3, transferredBytes: r3 }, new Uint8Array()), new globalThis.Response(null, { status: t3.status, statusText: t3.statusText, headers: t3.headers })) : new globalThis.Response(new globalThis.ReadableStream({ async start(o3) {
        const n3 = t3.body.getReader();
        e3 && e3({ percent: 0, transferredBytes: 0, totalBytes: s3 }, new Uint8Array()), await async function t4() {
          const { done: i3, value: a3 } = await n3.read();
          if (i3)
            o3.close();
          else {
            if (e3) {
              r3 += a3.byteLength;
              e3({ percent: 0 === s3 ? 0 : r3 / s3, transferredBytes: r3, totalBytes: s3 }, a3);
            }
            o3.enqueue(a3), await t4();
          }
        }();
      } }), { status: t3.status, statusText: t3.statusText, headers: t3.headers });
    }
  };
  var g2 = (t3) => {
    const e3 = (e4, s3) => w2.create(e4, r2(t3, s3));
    for (const s3 of l2)
      e3[s3] = (e4, o3) => w2.create(e4, r2(t3, o3, { method: s3 }));
    return e3.create = (t4) => g2(r2(t4)), e3.extend = (e4) => g2(r2(t3, e4)), e3.stop = c2, e3;
  };
  var T2 = g2();

  // src/browser/vm/proxy.ts
  async function proxy_default({ url }) {
    const res = await T2.get("/proxy", {
      searchParams: {
        "url": url
      }
    });
    const data = await res.json();
    return data;
  }

  // public/home.html
  var home_default = "PCFkb2N0eXBlIEhUTUw+CjxodG1sPgogIDxoZWFkPgogICAgPHN0eWxlPgogICAgICBAaW1wb3J0ICJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAiOwoKICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICJOb3RvIFNhbnMgSlAiLCBzYW5zLXNlcmlmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxoMT5XZWJPbkJyb3dzZXI8L2gxPgogICAgPHA+QnkgTGliZXJsdW5hPC9wPgogIDwvYm9keT4KPC9odG1sPg==";

  // src/browser/vm/pre.ts
  async function pre_default(siteData) {
    return siteData;
  }

  // src/browser/vm/index.tsx
  var vm_default = class extends m {
    constructor() {
      super();
      this.state = {
        omni: "",
        siteData: {
          body: ""
        }
      };
    }
    async enterOmnibox(omni) {
      this.setState({
        omni
      });
      const siteData = await proxy_default({
        url: omni
      });
      this.setState({
        siteData: await pre_default(siteData)
      });
    }
    render() {
      return /* @__PURE__ */ d(
        "iframe",
        {
          class: "browser-vm-iframe",
          src: this.state.omni ? this.state.siteData.body : "data:text/html;base64," + home_default,
          style: {
            width: "90vw",
            height: "50vh"
          }
        }
      );
    }
    componentDidUpdate() {
      this.iframe = document.getElementsByClassName("browser-vm-iframe");
      this.window = this.iframe.contentWindow;
    }
  };

  // src/browser/index.tsx
  var browser_default = class extends m {
    constructor() {
      super();
      this.state = {};
      this.vmRef = v();
    }
    doEnter(omni) {
      console.log(this.vmRef.current);
      this.vmRef.current.enterOmnibox(omni);
    }
    render() {
      return /* @__PURE__ */ d(
        "div",
        {
          style: {
            width: "100%",
            height: "100%"
          }
        },
        /* @__PURE__ */ d(Omnibox_default, { onEnter: this.doEnter.bind(this) }),
        /* @__PURE__ */ d(vm_default, { ref: this.vmRef })
      );
    }
  };

  // src/components/App.tsx
  var App_default = class extends m {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return /* @__PURE__ */ d("div", { style: { width: "100%", height: "100%" } }, /* @__PURE__ */ d(browser_default, null));
    }
  };

  // src/main.tsx
  function main_default() {
    R(/* @__PURE__ */ d(App_default, null), document.getElementById("app"));
  }

  // src/index.ts
  window.onload = () => main_default();
})();
/*! MIT License © Sindre Sorhus */
