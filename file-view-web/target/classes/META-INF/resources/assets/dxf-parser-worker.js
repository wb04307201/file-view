var T, Ee, h, O, Ie, R, v, B, F, ee, he, ge, re, ae, Oe, Te, De, L, G, E, ne, xe, l, y, Ne, A, ve, U, H, w, ye, te, k, W, oe, je, Xe, Y, j, Ae, Se, X, Le, Ke, ze, D, K, x, M, Ze, Je, $e, qe, z, P, se, ke, ce, _, Z, C, J;
(T = {})[T.None = 0] = "None", T[T.Anonymous = 1] = "Anonymous", T[T.NonConstant = 2] = "NonConstant", T[T.Xref = 4] = "Xref", T[T.XrefOverlay = 8] = "XrefOverlay", T[T.ExternallyDependent = 16] = "ExternallyDependent", T[T.ResolvedOrDependent = 32] = "ResolvedOrDependent", T[T.ReferencedXref = 64] = "ReferencedXref";
(Ee = {})[Ee.BYBLOCK = 0] = "BYBLOCK", Ee[Ee.BYLAYER = 256] = "BYLAYER";
(h = {})[h.Rotated = 0] = "Rotated", h[h.Aligned = 1] = "Aligned", h[h.Angular = 2] = "Angular", h[h.Diameter = 3] = "Diameter", h[h.Radius = 4] = "Radius", h[h.Angular3Point = 5] = "Angular3Point", h[h.Ordinate = 6] = "Ordinate", h[h.ReferenceIsExclusive = 32] = "ReferenceIsExclusive", h[h.IsOrdinateXTypeFlag = 64] = "IsOrdinateXTypeFlag", h[h.IsCustomTextPositionFlag = 128] = "IsCustomTextPositionFlag";
(O = {})[O.TopLeft = 1] = "TopLeft", O[O.TopCenter = 2] = "TopCenter", O[O.TopRight = 3] = "TopRight", O[O.MiddleLeft = 4] = "MiddleLeft", O[O.MiddleCenter = 5] = "MiddleCenter", O[O.MiddleRight = 6] = "MiddleRight", O[O.BottomLeft = 7] = "BottomLeft", O[O.BottomCenter = 8] = "BottomCenter", O[O.BottomRight = 9] = "BottomRight";
(Ie = {})[Ie.AtLeast = 1] = "AtLeast", Ie[Ie.Exact = 2] = "Exact";
var or = ((R = {})[R.Center = 0] = "Center", R[R.Above = 1] = "Above", R[R.Outside = 2] = "Outside", R[R.JIS = 3] = "JIS", R[R.Below = 4] = "Below", R), me = ((v = {})[v.Feet = 0] = "Feet", v[v.None = 1] = "None", v[v.Inch = 2] = "Inch", v[v.FeetAndInch = 3] = "FeetAndInch", v[v.Leading = 4] = "Leading", v[v.Trailing = 8] = "Trailing", v[v.LeadingAndTrailing = 12] = "LeadingAndTrailing", v), Oa = ((B = {})[B.None = 0] = "None", B[B.Leading = 1] = "Leading", B[B.Trailing = 2] = "Trailing", B[B.LeadingAndTrailing = 3] = "LeadingAndTrailing", B), Ta = ((F = {})[F.Center = 0] = "Center", F[F.Left = 1] = "Left", F[F.Right = 2] = "Right", F[F.OverFirst = 3] = "OverFirst", F[F.OverSecond = 4] = "OverSecond", F), Da = ((ee = {})[ee.Bottom = 0] = "Bottom", ee[ee.Center = 1] = "Center", ee[ee.Top = 2] = "Top", ee);
(he = {})[he.PatternFill = 0] = "PatternFill", he[he.SolidFill = 1] = "SolidFill";
(ge = {})[ge.NonAssociative = 0] = "NonAssociative", ge[ge.Associative = 1] = "Associative";
(re = {})[re.Normal = 0] = "Normal", re[re.Outer = 1] = "Outer", re[re.Ignore = 2] = "Ignore";
(ae = {})[ae.UserDefined = 0] = "UserDefined", ae[ae.Predefined = 1] = "Predefined", ae[ae.Custom = 2] = "Custom";
(Oe = {})[Oe.NotAnnotated = 0] = "NotAnnotated", Oe[Oe.Annotated = 1] = "Annotated";
(Te = {})[Te.Solid = 0] = "Solid", Te[Te.Gradient = 1] = "Gradient";
(De = {})[De.TwoColor = 0] = "TwoColor", De[De.OneColor = 1] = "OneColor";
var xa = ((L = {})[L.Default = 0] = "Default", L[L.External = 1] = "External", L[L.Polyline = 2] = "Polyline", L[L.Derived = 4] = "Derived", L[L.Textbox = 8] = "Textbox", L[L.Outermost = 16] = "Outermost", L), Ce = ((G = {})[G.Line = 1] = "Line", G[G.Circular = 2] = "Circular", G[G.Elliptic = 3] = "Elliptic", G[G.Spline = 4] = "Spline", G), Na = ((E = {})[E.Off = 0] = "Off", E[E.Solid = 1] = "Solid", E[E.Dashed = 2] = "Dashed", E[E.Dotted = 3] = "Dotted", E[E.ShotDash = 4] = "ShotDash", E[E.MediumDash = 5] = "MediumDash", E[E.LongDash = 6] = "LongDash", E[E.DoubleShortDash = 7] = "DoubleShortDash", E[E.DoubleMediumDash = 8] = "DoubleMediumDash", E[E.DoubleLongDash = 9] = "DoubleLongDash", E[E.DoubleMediumLongDash = 10] = "DoubleMediumLongDash", E[E.SparseDot = 11] = "SparseDot", E);
Na.Off;
(ne = {})[ne.Standard = -3] = "Standard", ne[ne.ByLayer = -2] = "ByLayer", ne[ne.ByBlock = -1] = "ByBlock";
(xe = {})[xe.English = 0] = "English", xe[xe.Metric = 1] = "Metric";
(l = {})[l.PERSPECTIVE_MODE = 1] = "PERSPECTIVE_MODE", l[l.FRONT_CLIPPING = 2] = "FRONT_CLIPPING", l[l.BACK_CLIPPING = 4] = "BACK_CLIPPING", l[l.UCS_FOLLOW = 8] = "UCS_FOLLOW", l[l.FRONT_CLIP_NOT_AT_EYE = 16] = "FRONT_CLIP_NOT_AT_EYE", l[l.UCS_ICON_VISIBILITY = 32] = "UCS_ICON_VISIBILITY", l[l.UCS_ICON_AT_ORIGIN = 64] = "UCS_ICON_AT_ORIGIN", l[l.FAST_ZOOM = 128] = "FAST_ZOOM", l[l.SNAP_MODE = 256] = "SNAP_MODE", l[l.GRID_MODE = 512] = "GRID_MODE", l[l.ISOMETRIC_SNAP_STYLE = 1024] = "ISOMETRIC_SNAP_STYLE", l[l.HIDE_PLOT_MODE = 2048] = "HIDE_PLOT_MODE", l[l.K_ISO_PAIR_TOP = 4096] = "K_ISO_PAIR_TOP", l[l.K_ISO_PAIR_RIGHT = 8192] = "K_ISO_PAIR_RIGHT", l[l.VIEWPORT_ZOOM_LOCKING = 16384] = "VIEWPORT_ZOOM_LOCKING", l[l.UNUSED = 32768] = "UNUSED", l[l.NON_RECTANGULAR_CLIPPING = 65536] = "NON_RECTANGULAR_CLIPPING", l[l.VIEWPORT_OFF = 131072] = "VIEWPORT_OFF", l[l.GRID_BEYOND_DRAWING_LIMITS = 262144] = "GRID_BEYOND_DRAWING_LIMITS", l[l.ADAPTIVE_GRID_DISPLAY = 524288] = "ADAPTIVE_GRID_DISPLAY", l[l.SUBDIVISION_BELOW_SPACING = 1048576] = "SUBDIVISION_BELOW_SPACING", l[l.GRID_FOLLOWS_WORKPLANE = 2097152] = "GRID_FOLLOWS_WORKPLANE";
(y = {})[y.OPTIMIZED_2D = 0] = "OPTIMIZED_2D", y[y.WIREFRAME = 1] = "WIREFRAME", y[y.HIDDEN_LINE = 2] = "HIDDEN_LINE", y[y.FLAT_SHADED = 3] = "FLAT_SHADED", y[y.GOURAUD_SHADED = 4] = "GOURAUD_SHADED", y[y.FLAT_SHADED_WITH_WIREFRAME = 5] = "FLAT_SHADED_WITH_WIREFRAME", y[y.GOURAUD_SHADED_WITH_WIREFRAME = 6] = "GOURAUD_SHADED_WITH_WIREFRAME";
(Ne = {})[Ne.UCS_UNCHANGED = 0] = "UCS_UNCHANGED", Ne[Ne.HAS_OWN_UCS = 1] = "HAS_OWN_UCS";
(A = {})[A.NON_ORTHOGRAPHIC = 0] = "NON_ORTHOGRAPHIC", A[A.TOP = 1] = "TOP", A[A.BOTTOM = 2] = "BOTTOM", A[A.FRONT = 3] = "FRONT", A[A.BACK = 4] = "BACK", A[A.LEFT = 5] = "LEFT", A[A.RIGHT = 6] = "RIGHT";
(ve = {})[ve.ONE_DISTANT_LIGHT = 0] = "ONE_DISTANT_LIGHT", ve[ve.TWO_DISTANT_LIGHTS = 1] = "TWO_DISTANT_LIGHTS";
(U = {})[U.ByLayer = 0] = "ByLayer", U[U.ByBlock = 1] = "ByBlock", U[U.ByDictionaryDefault = 2] = "ByDictionaryDefault", U[U.ByObject = 3] = "ByObject";
function u(e, r, n) {
  return e.code === r && (n == null || e.value === n);
}
function m(e) {
  let r = {};
  e.rewind();
  let n = e.next(), t = n.code;
  if (r.x = n.value, (n = e.next()).code !== t + 10) throw Error("Expected code for point value to be 20 but got " + n.code + ".");
  return r.y = n.value, (n = e.next()).code !== t + 20 ? e.rewind() : r.z = n.value, r;
}
let rr = Symbol();
function d(e, r) {
  return (n, t, o) => {
    let s = function(p, S = !1) {
      return p.reduce((N, I) => {
        I.pushContext && N.push({});
        let le = N[N.length - 1];
        for (let be of typeof I.code == "number" ? [I.code] : I.code) {
          let de = le[be] ?? (le[be] = []);
          I.isMultiple && de.length && S && console.warn(`Snippet ${de[de.length - 1].name} for code(${be}) is shadowed by ${I.name}`), de.push(I);
        }
        return N;
      }, [{}]);
    }(e, t.debug), i = !1, g = s.length - 1;
    for (; !u(n, 0, "EOF"); ) {
      let p = function(ue, pe, We) {
        return ue.find((Ye, q) => {
          var V;
          return q >= We && ((V = Ye[pe]) == null ? void 0 : V.length);
        });
      }(s, n.code, g), S = p == null ? void 0 : p[n.code], N = S == null ? void 0 : S[S.length - 1];
      if (!p || !N) {
        t.rewind();
        break;
      }
      N.isMultiple || p[n.code].pop();
      let { name: I, parser: le, isMultiple: be, isReducible: de } = N, He = le == null ? void 0 : le(n, t, o);
      if (He === rr) {
        t.rewind();
        break;
      }
      if (I) {
        let [ue, pe] = function(We, Ye) {
          let q = Ye.split(".");
          if (!q.length) throw Error("[parserGenerator::getObjectByPath] Invalid empty path");
          let V = We;
          for (let Pe = 0; Pe < q.length - 1; ++Pe) {
            let _e = Qe(q[Pe]), ga = Qe(q[Pe + 1]);
            Object.prototype.hasOwnProperty.call(V, _e) || (typeof ga == "number" ? V[_e] = [] : V[_e] = {}), V = V[_e];
          }
          return [V, Qe(q[q.length - 1])];
        }(o, I);
        be && !de ? (Object.prototype.hasOwnProperty.call(ue, pe) || (ue[pe] = []), ue[pe].push(He)) : ue[pe] = He;
      }
      N.pushContext && (g -= 1), i = !0, n = t.next();
    }
    return r && Object.setPrototypeOf(o, r), i;
  };
}
function Qe(e) {
  let r = Number.parseInt(e);
  return Number.isNaN(r) ? e : r;
}
function a({ value: e }) {
  return e;
}
function c(e, r) {
  return m(r);
}
function f({ value: e }) {
  return !!e;
}
let va = [{ code: 1001, name: "xdata", parser: dr }];
function dr(e, r) {
  var o;
  if (!u(e, 1001)) throw Error("XData must starts with code 1001");
  let n = { appName: e.value, value: [] };
  e = r.next();
  let t = [n.value];
  for (; !u(e, 0, "EOF") && e.code >= 1e3; ) {
    let s = t[t.length - 1];
    switch (e.code) {
      case 1002:
        e.value === "{" ? t.push([]) : (t.pop(), (o = t[t.length - 1]) == null || o.push(s));
        break;
      case 1e3:
      case 1004:
      case 1040:
      case 1070:
      case 1071:
        s.push({ type: $(e.code), value: e.value });
        break;
      case 1003:
        s.push({ name: "layer", type: $(e.code), value: e.value });
        break;
      case 1005:
        s.push({ name: "handle", type: $(e.code), value: e.value });
        break;
      case 1010:
        s.push({ type: $(e.code), value: m(r) });
        break;
      case 1011:
        s.push({ name: "worldSpacePosition", type: $(e.code), value: m(r) });
        break;
      case 1012:
        s.push({ name: "worldSpaceDisplacement", type: $(e.code), value: m(r) });
        break;
      case 1013:
        s.push({ name: "worldSpaceDirection", type: $(e.code), value: m(r) });
        break;
      case 1041:
        s.push({ name: "distance", type: $(e.code), value: e.value });
        break;
      case 1042:
        s.push({ name: "scale", type: $(e.code), value: e.value });
    }
    e = r.next();
  }
  return r.rewind(), n;
}
function $(e) {
  switch (e) {
    case 1e3:
    case 1003:
    case 1005:
      return "string";
    case 1004:
      return "hex";
    case 1040:
    case 1041:
    case 1042:
      return "real";
    case 1070:
      return "integer";
    case 1071:
      return "long";
    case 1010:
    case 1011:
    case 1012:
    case 1013:
      return "point";
    default:
      return "";
  }
}
function ie(e, r, n) {
  for (; u(e, 102); ) {
    var t;
    let o = e.value;
    if (e = r.next(), !o.startsWith("{")) {
      r.debug && console.warn(`Invalid application group, expected to start with "{" but received: ${o}`), function(i, g) {
        for (; !u(i, 102) && !u(i, 0, "EOF"); ) i = g.next();
      }(e, r), e = r.next();
      continue;
    }
    let s = o.slice(1).trim();
    n.extensions ?? (n.extensions = {}), (t = n.extensions)[s] ?? (t[s] = []), function(i, g, p) {
      for (; !u(i, 102, "}") && !u(i, 0, "EOF"); ) p.push(i), i = g.next();
    }(e, r, n.extensions[s]), e = r.next();
  }
  r.rewind();
}
let ya = 0;
function ur(e) {
  if (!e) throw TypeError("entity cannot be undefined or null");
  e.handle || (e.handle = ya++);
}
var Aa = [0, 16711680, 16776960, 65280, 65535, 255, 16711935, 16777215, 8421504, 12632256, 16711680, 16744319, 13369344, 13395558, 10027008, 10046540, 8323072, 8339263, 4980736, 4990502, 16727808, 16752511, 13382400, 13401958, 10036736, 10051404, 8331008, 8343359, 4985600, 4992806, 16744192, 16760703, 13395456, 13408614, 10046464, 10056268, 8339200, 8347455, 4990464, 4995366, 16760576, 16768895, 13408512, 13415014, 10056192, 10061132, 8347392, 8351551, 4995328, 4997670, 16776960, 16777087, 13421568, 13421670, 10000384, 10000460, 8355584, 8355647, 5000192, 5000230, 12582656, 14679935, 10079232, 11717734, 7510016, 8755276, 6258432, 7307071, 3755008, 4344870, 8388352, 12582783, 6736896, 10079334, 5019648, 7510092, 4161280, 6258495, 2509824, 3755046, 4194048, 10485631, 3394560, 8375398, 2529280, 6264908, 2064128, 5209919, 1264640, 3099686, 65280, 8388479, 52224, 6736998, 38912, 5019724, 32512, 4161343, 19456, 2509862, 65343, 8388511, 52275, 6737023, 38950, 5019743, 32543, 4161359, 19475, 2509871, 65407, 8388543, 52326, 6737049, 38988, 5019762, 32575, 4161375, 19494, 2509881, 65471, 8388575, 52377, 6737074, 39026, 5019781, 32607, 4161391, 19513, 2509890, 65535, 8388607, 52428, 6737100, 39064, 5019800, 32639, 4161407, 19532, 2509900, 49151, 8380415, 39372, 6730444, 29336, 5014936, 24447, 4157311, 14668, 2507340, 32767, 8372223, 26316, 6724044, 19608, 5010072, 16255, 4153215, 9804, 2505036, 16383, 8364031, 13260, 6717388, 9880, 5005208, 8063, 4149119, 4940, 2502476, 255, 8355839, 204, 6710988, 152, 5000344, 127, 4145023, 76, 2500172, 4129023, 10452991, 3342540, 8349388, 2490520, 6245528, 2031743, 5193599, 1245260, 3089996, 8323327, 12550143, 6684876, 10053324, 4980888, 7490712, 4128895, 6242175, 2490444, 3745356, 12517631, 14647295, 10027212, 11691724, 7471256, 8735896, 6226047, 7290751, 3735628, 4335180, 16711935, 16744447, 13369548, 13395660, 9961624, 9981080, 8323199, 8339327, 4980812, 4990540, 16711871, 16744415, 13369497, 13395634, 9961586, 9981061, 8323167, 8339311, 4980793, 4990530, 16711807, 16744383, 13369446, 13395609, 9961548, 9981042, 8323135, 8339295, 4980774, 4990521, 16711743, 16744351, 13369395, 13395583, 9961510, 9981023, 8323103, 8339279, 4980755, 4990511, 3355443, 5987163, 8684676, 11382189, 14079702, 16777215];
function pr(e) {
  return Aa[e];
}
(H = {})[H.CAST_AND_RECEIVE = 0] = "CAST_AND_RECEIVE", H[H.CAST = 1] = "CAST", H[H.RECEIVE = 2] = "RECEIVE", H[H.IGNORE = 3] = "IGNORE";
let b = [...va, { code: 284, name: "shadowMode", parser: a }, { code: 390, name: "plotStyleHardId", parser: a }, { code: 380, name: "plotStyleType", parser: a }, { code: 440, name: "transparency", parser: a }, { code: 430, name: "colorName", parser: a }, { code: 420, name: "color", parser: a }, { code: 310, name: "proxyEntity", isMultiple: !0, parser: a }, { code: 92, name: "proxyByte", parser: a }, { code: 60, name: "isVisible", parser: f }, { code: 48, name: "lineTypeScale", parser: a }, { code: 370, name: "lineweight", parser: a }, { code: 62, name: "colorIndex", parser(e, r, n) {
  let t = e.value;
  return t > 0 && t < 256 && (n.color = pr(Math.abs(t))), t;
} }, { code: 347, name: "materialObjectHardId", parser: a }, { code: 6, name: "lineType", parser: a }, { code: 8, name: "layer", parser: a }, { code: 410, name: "layoutTabName", parser: a }, { code: 67, name: "isInPaperSpace", parser: f }, { code: 100 }, { code: 160 }, { code: 330, name: "ownerBlockRecordSoftId", parser: a }, { code: 102, parser: ie }, { code: 102, parser: ie }, { code: 102, parser: ie }, { code: 5, name: "handle", parser: a }];
function Ue(e) {
  return [{ code: 3, name: e, parser: (r, n, t) => (t._code3text = (t._code3text ?? "") + r.value, t._code3text + (t._code1text ?? "")), isMultiple: !0, isReducible: !0 }, { code: 1, name: e, parser: (r, n, t) => (t._code1text = r.value, (t._code3text ?? "") + t._code1text) }];
}
function mr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let Sa = { extrusionDirection: { x: 0, y: 0, z: 1 } }, La = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 51, name: "endAngle", parser: a }, { code: 50, name: "startAngle", parser: a }, { code: 100, name: "subclassMarker", parser: a }, { code: 40, name: "radius", parser: a }, { code: 10, name: "center", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 100 }, ...b];
class fr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    mr(this, "parser", d(La, Sa));
  }
}
mr(fr, "ForEntityName", "ARC");
(w = {})[w.NONE = 0] = "NONE", w[w.INVISIBLE = 1] = "INVISIBLE", w[w.CONSTANT = 2] = "CONSTANT", w[w.VERIFICATION_REQUIRED = 4] = "VERIFICATION_REQUIRED", w[w.PRESET = 8] = "PRESET";
(ye = {})[ye.MULTILINE = 2] = "MULTILINE", ye[ye.CONSTANT_MULTILINE = 4] = "CONSTANT_MULTILINE";
(te = {})[te.NONE = 0] = "NONE", te[te.MIRRORED_X = 2] = "MIRRORED_X", te[te.MIRRORED_Y = 4] = "MIRRORED_Y";
var ka = ((k = {})[k.LEFT = 0] = "LEFT", k[k.CENTER = 1] = "CENTER", k[k.RIGHT = 2] = "RIGHT", k[k.ALIGNED = 3] = "ALIGNED", k[k.MIDDLE = 4] = "MIDDLE", k[k.FIT = 5] = "FIT", k), Ma = ((W = {})[W.BASELINE = 0] = "BASELINE", W[W.BOTTOM = 1] = "BOTTOM", W[W.MIDDLE = 2] = "MIDDLE", W[W.TOP = 3] = "TOP", W);
function br(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let Er = { thickness: 0, rotation: 0, xScale: 1, obliqueAngle: 0, styleName: "STANDARD", generationFlag: 0, halign: ka.LEFT, valign: Ma.BASELINE, extrusionDirection: { x: 0, y: 0, z: 1 } }, Ir = [{ code: 73, name: "valign", parser: a }, { code: 100 }, { code: 210, name: "extrusionDirection", parser: c }, { code: 11, name: "endPoint", parser: c }, { code: 72, name: "valign", parser: a }, { code: 72, name: "halign", parser: a }, { code: 71, name: "generationFlag", parser: a }, { code: 7, name: "styleName", parser: a }, { code: 51, name: "obliqueAngle", parser: a }, { code: 41, name: "xScale", parser: a }, { code: 50, name: "rotation", parser: a }, { code: 1, name: "text", parser: a }, { code: 40, name: "textHeight", parser: a }, { code: 10, name: "startPoint", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class hr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    br(this, "parser", d(Ir, Er));
  }
}
function gr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
br(hr, "ForEntityName", "TEXT");
let Pa = { ...Er }, _a = [{ code: 2 }, { code: 40, name: "annotationScale", parser: a }, { code: 10, name: "alignmentPoint", parser: c }, { code: 340, name: "secondaryAttributesHardIds", isMultiple: !0, parser: a }, { code: 70, name: "numberOfSecondaryAttributes", parser: a }, { code: 70, name: "isReallyLocked", parser: f }, { code: 70, name: "mtextFlag", parser: a }, { code: 280, name: "isDuplicatedRecord", parser: f }, { code: 100 }, { code: 280, name: "isLocked", parser: f }, { code: 74, name: "valign", parser: a }, { code: 73 }, { code: 70, name: "attributeFlag", parser: a }, { code: 2, name: "tag", parser: a }, { code: 3, name: "prompt", parser: a }, { code: 280 }, { code: 100, name: "subclassMarker", parser: a }, ...Ir.slice(2)];
class Or {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    gr(this, "parser", d(_a, Pa));
  }
}
gr(Or, "ForEntityName", "ATTDEF");
(oe = {})[oe.LEFT_TO_RIGHT = 1] = "LEFT_TO_RIGHT", oe[oe.TOP_TO_BOTTOM = 3] = "TOP_TO_BOTTOM", oe[oe.BY_STYLE = 5] = "BY_STYLE";
function Ca(e, r) {
  let n = {};
  for (let t of e) {
    let o = r(t);
    o != null && (n[o] ?? (n[o] = []), n[o].push(t));
  }
  return n;
}
function* Ge(e, r = 1 / 0, n = 1) {
  for (let t = e; t !== r; t += n) yield t;
}
function Q(e) {
  return { x: e.x ?? 0, y: e.y ?? 0, z: e.z ?? 0 };
}
function ar(e, r, n) {
  if (u(r, 102)) return ie(r, n, e), !0;
  switch (r.code) {
    case 0:
      e.type = r.value;
      break;
    case 5:
      e.handle = r.value;
      break;
    case 330:
      e.ownerBlockRecordSoftId = r.value;
      break;
    case 67:
      e.isInPaperSpace = !!r.value;
      break;
    case 8:
      e.layer = r.value;
      break;
    case 6:
      e.lineType = r.value;
      break;
    case 347:
      e.materialObjectHardId = r.value;
      break;
    case 62:
      e.colorIndex = r.value, e.color = pr(Math.abs(r.value));
      break;
    case 370:
      e.lineweight = r.value;
      break;
    case 48:
      e.lineTypeScale = r.value;
      break;
    case 60:
      e.isVisible = !!r.value;
      break;
    case 92:
      e.proxyByte = r.value;
      break;
    case 310:
      e.proxyEntity = r.value;
      break;
    case 100:
      break;
    case 420:
      e.color = r.value;
      break;
    case 430:
      e.transparency = r.value;
      break;
    case 390:
      e.plotStyleHardId = r.value;
      break;
    case 284:
      e.shadowMode = r.value;
      break;
    case 1001:
      e.xdata = dr(r, n);
      break;
    default:
      return !1;
  }
  return !0;
}
function Tr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let Ra = { textStyle: "STANDARD", extrusionDirection: { x: 0, y: 0, z: 1 }, rotation: 0 }, Re = [{ code: 46, name: "annotationHeight", parser: a }, { code: 101, parser(e, r) {
  (function(n) {
    n.rewind();
    let t = n.next();
    if (t.code !== 101) throw Error("Bad call for skipEmbeddedObject()");
    do
      t = n.next();
    while (t.code !== 0);
    n.rewind();
  })(r);
} }, { code: 50, name: "columnHeight", parser: a }, { code: 49, name: "columnGutter", parser: a }, { code: 48, name: "columnWidth", parser: a }, { code: 79, name: "columnAutoHeight", parser: a }, { code: 78, name: "columnFlowReversed", parser: a }, { code: 76, name: "columnCount", parser: a }, { code: 75, name: "columnType", parser: a }, { code: 441, name: "backgroundFillTransparency", parser: a }, { code: 63, name: "backgroundFillColor", parser: a }, { code: 45, name: "fillBoxScale", parser: a }, { code: [...Ge(430, 440)], name: "backgroundColor", parser: a }, { code: [...Ge(420, 430)], name: "backgroundColor", parser: a }, { code: 90, name: "backgroundFill", parser: a }, { code: 44, name: "lineSpacing", parser: a }, { code: 73, name: "lineSpacingStyle", parser: a }, { code: 50, name: "rotation", parser: a }, { code: 43 }, { code: 42 }, { code: 11, name: "direction", parser: c }, { code: 210, name: "extrusionDirection", parser: c }, { code: 7, name: "styleName", parser: a }, ...Ue("text"), { code: 72, name: "drawingDirection", parser: a }, { code: 71, name: "attachmentPoint", parser: a }, { code: 41, name: "width", parser: a }, { code: 40, name: "height", parser: a }, { code: 10, name: "insertionPoint", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Dr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Tr(this, "parser", d(Re, Ra));
  }
}
function xr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Tr(Dr, "ForEntityName", "MTEXT");
let Fa = { thickness: 0, rotation: 0, scale: 1, obliqueAngle: 0, textStyle: "STANDARD", textGenerationFlag: 0, horizontalJustification: 0, verticalJustification: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, wa = [...Re.slice(Re.findIndex(({ name: e }) => e === "columnType"), Re.findIndex(({ name: e }) => e === "subclassMarker") + 1), { code: 100 }, { code: 0, parser(e) {
  if (!u(e, 0, "MTEXT")) return rr;
} }, { code: 2, name: "definitionTag", parser: a }, { code: 40, name: "annotationScale", parser: a }, { code: 10, name: "alignmentPoint", parser: c }, { code: 340, name: "secondaryAttributesHardId", parser: a }, { code: 70, name: "numberOfSecondaryAttributes", parser: a }, { code: 70, name: "isReallyLocked", parser: f }, { code: 70, name: "mtextFlag", parser: a }, { code: 280, name: "isDuplicatedEntriesKeep", parser: f }, { code: 100 }, { code: 280, name: "lockPositionFlag", parser: f }, { code: 210, name: "extrusionDirection", parser: c }, { code: 11, name: "alignmentPoint", parser: c }, { code: 74, name: "verticalJustification", parser: a }, { code: 72, name: "horizontalJustification", parser: a }, { code: 71, name: "textGenerationFlag", parser: a }, { code: 7, name: "textStyle", parser: a }, { code: 51, name: "obliqueAngle", parser: a }, { code: 41, name: "scale", parser: a }, { code: 50, name: "rotation", parser: a }, { code: 73 }, { code: 70, name: "attributeFlag", parser: a }, { code: 2, name: "tag", parser: a }, { code: 280 }, { code: 100, name: "subclassMarker", parser: a }, { code: 1, name: "text", parser: a }, { code: 40, name: "textHeight", parser: a }, { code: 10, name: "startPoint", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 100 }, ...b];
class Nr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    xr(this, "parser", d(wa, Fa));
  }
}
function vr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
xr(Nr, "ForEntityName", "ATTRIB");
let Va = [...Ue("data"), { code: 70, name: "version", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class yr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    vr(this, "parser", d(Va));
  }
}
function Ar(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
vr(yr, "ForEntityName", "BODY");
let Ba = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, Ga = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 40, name: "radius", parser: a }, { code: 10, name: "center", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Sr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Ar(this, "parser", d(Ga, Ba));
  }
}
Ar(Sr, "ForEntityName", "CIRCLE");
class Fe {
  parseEntity(r, n) {
    let t = {};
    for (; !u(n, 0, "EOF"); ) {
      if (n.code === 0) {
        r.rewind();
        break;
      }
      (function(o, s, i) {
        switch (s.code) {
          case 100:
            o.subclassMarker = s.value;
            break;
          case 280:
            o.version = s.value;
            break;
          case 2:
            o.name = s.value;
            break;
          case 10:
            o.definitionPoint = m(i);
            break;
          case 11:
            o.textPoint = m(i);
            break;
          case 12:
            o.insertionPoint = m(i);
            break;
          case 13:
            o.subDefinitionPoint1 = m(i);
            break;
          case 14:
            o.subDefinitionPoint2 = m(i);
            break;
          case 15:
            o.centerPoint = m(i);
            break;
          case 16:
            o.arcPoint = m(i);
            break;
          case 70:
            o.dimensionType = s.value;
            break;
          case 71:
            o.attachmentPoint = s.value;
            break;
          case 72:
            o.textLineSpacingStyle = s.value;
            break;
          case 40:
            o.leaderLength = s.value;
            break;
          case 41:
            o.textLineSpacingFactor = s.value;
            break;
          case 42:
            o.measurement = s.value;
            break;
          case 1:
            o.text = s.value;
            break;
          case 50:
            o.rotationAngle = s.value;
            break;
          case 52:
            o.obliqueAngle = s.value;
            break;
          case 53:
            o.textRotation = s.value;
            break;
          case 51:
            o.ocsRotation = s.value;
            break;
          case 210:
            o.extrusionDirection = m(i);
            break;
          case 3:
            o.styleName = s.value;
            break;
          default:
            ar(o, s, i);
        }
      })(t, n, r), n = r.next();
    }
    return t;
  }
}
function Lr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Xe = "DIMENSION", (je = "ForEntityName") in Fe ? Object.defineProperty(Fe, je, { value: Xe, enumerable: !0, configurable: !0, writable: !0 }) : Fe[je] = Xe;
let Ua = { extrusionDirection: { x: 0, y: 0, z: 1 } }, Ha = [{ code: 42, name: "endAngle", parser: a }, { code: 41, name: "startAngle", parser: a }, { code: 40, name: "axisRatio", parser: a }, { code: 210, name: "extrusionDirection", parser: c }, { code: 11, name: "majorAxisEndPoint", parser: c }, { code: 10, name: "center", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class kr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Lr(this, "parser", d(Ha, Ua));
  }
}
Lr(kr, "ForEntityName", "ELLIPSE");
(Y = {})[Y.First = 1] = "First", Y[Y.Second = 2] = "Second", Y[Y.Third = 4] = "Third", Y[Y.Fourth = 8] = "Fourth";
function Mr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let Wa = [{ code: 13, name: "vertices.3", parser: c }, { code: 12, name: "vertices.2", parser: c }, { code: 11, name: "vertices.1", parser: c }, { code: 10, name: "vertices.0", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Pr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Mr(this, "parser", d(Wa));
  }
}
Mr(Pr, "ForEntityName", "3DFACE");
let _r = [{ code: 330, name: "sourceBoundaryObjects", parser: a, isMultiple: !0 }, { code: 97, name: "numberOfSourceBoundaryObjects", parser: a }], Ya = [{ code: 11, name: "end", parser: c }, { code: 10, name: "start", parser: c }], ja = [{ code: 73, name: "isCCW", parser: f }, { code: 51, name: "endAngle", parser: a }, { code: 50, name: "startAngle", parser: a }, { code: 40, name: "radius", parser: a }, { code: 10, name: "center", parser: c }], Xa = [{ code: 73, name: "isCCW", parser: f }, { code: 51, name: "endAngle", parser: a }, { code: 50, name: "startAngle", parser: a }, { code: 40, name: "lengthOfMinorAxis", parser: a }, { code: 11, name: "end", parser: c }, { code: 10, name: "center", parser: c }], Ka = [{ code: 13, name: "endTangent", parser: c }, { code: 12, name: "startTangent", parser: c }, { code: 11, name: "fitDatum", isMultiple: !0, parser: c }, { code: 97, name: "numberOfFitData", parser: a }, { code: 10, name: "controlPoints", isMultiple: !0, parser(e, r) {
  let n = { ...m(r), weight: 1 };
  return (e = r.next()).code === 42 ? n.weight = e.value : r.rewind(), n;
} }, { code: 40, name: "knots", isMultiple: !0, parser: a }, { code: 96, name: "numberOfControlPoints", parser: a }, { code: 95, name: "numberOfKnots", parser: a }, { code: 74, name: "isPeriodic", parser: f }, { code: 73, name: "splineFlag", parser: a }, { code: 94, name: "degree", parser: a }], za = { [Ce.Line]: Ya, [Ce.Circular]: ja, [Ce.Elliptic]: Xa, [Ce.Spline]: Ka }, Za = [..._r, { code: 72, name: "edges", parser(e, r) {
  let n = { type: e.value }, t = d(za[n.type]);
  if (!t) throw Error(`Invalid edge type ${n.type}`);
  return t(e = r.next(), r, n), n;
}, isMultiple: !0 }, { code: 93, name: "numberOfEdges", parser: a }], Ja = [..._r, { code: 10, name: "vertices", parser(e, r) {
  let n = { ...m(r), bulge: 0 };
  return (e = r.next()).code === 42 ? n.bulge = e.value : r.rewind(), n;
}, isMultiple: !0 }, { code: 93, name: "numberOfVertices", parser: a }, { code: 73, name: "isClosed", parser: f }, { code: 72, name: "hasBulge", parser: f }], $a = [{ code: 49, name: "dashLengths", parser: a, isMultiple: !0 }, { code: 79, name: "numberOfDashLengths", parser: a }, { code: 45, name: "offset", parser: sr }, { code: 43, name: "base", parser: sr }, { code: 53, name: "angle", parser: a }];
function sr(e, r) {
  let n = e.code + 1, t = { x: e.value, y: 1 };
  return (e = r.next()).code === n ? t.y = e.value : r.rewind(), t;
}
function Cr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let qa = { extrusionDirection: { x: 0, y: 0, z: 1 }, gradientRotation: 0, colorTint: 0 }, Qa = [{ code: 470 }, { code: 463 }, { code: 462, name: "colorTint", parser: a }, { code: 461, name: "gradientDefinition", parser: a }, { code: 460, name: "gradientRotation", parser: a }, { code: 453, name: "numberOfColors", parser: a }, { code: 452, name: "gradientColorFlag", parser: a }, { code: 451 }, { code: 450, name: "gradientFlag", parser: a }, { code: 10, name: "seedPoints", parser: c, isMultiple: !0 }, { code: 99 }, { code: 11, name: "offsetVector", parser: c }, { code: 98, name: "numberOfSeedPoints", parser: a }, { code: 47, name: "pixelSize", parser: a }, { code: 53, name: "definitionLines", parser: function(e, r) {
  let n = {};
  return d($a)(e, r, n), n;
}, isMultiple: !0 }, { code: 78, name: "numberOfDefinitionLines", parser: a }, { code: 77, name: "isDouble", parser: f }, { code: 73, name: "isAnnotated", parser: f }, { code: 41, name: "patternScale", parser: a }, { code: 52, name: "patternAngle", parser: a }, { code: 76, name: "patternType", parser: a }, { code: 75, name: "hatchStyle", parser: a }, { code: 92, name: "boundaryPaths", parser: function(e, r) {
  let n = { boundaryPathTypeFlag: e.value }, t = n.boundaryPathTypeFlag & xa.Polyline;
  return e = r.next(), t ? d(Ja)(e, r, n) : d(Za)(e, r, n), n;
}, isMultiple: !0 }, { code: 91, name: "numberOfBoundaryPaths", parser: a }, { code: 71, name: "associativity", parser: a }, { code: 63, name: "patternFillColor", parser: a }, { code: 70, name: "solidFill", parser: a }, { code: 2, name: "patternName", parser: a }, { code: 210, name: "extrusionDirection", parser: c }, { code: 10, name: "elevationPoint", parser: c }, { code: 100, name: "subclassMarker", parser: a, pushContext: !0 }, ...b];
class Rr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Cr(this, "parser", d(Qa, qa));
  }
}
Cr(Rr, "ForEntityName", "HATCH");
(j = {})[j.ShowImage = 1] = "ShowImage", j[j.ShowImageWhenNotAlignedWithScreen = 2] = "ShowImageWhenNotAlignedWithScreen", j[j.UseClippingBoundary = 4] = "UseClippingBoundary", j[j.TransparencyIsOn = 8] = "TransparencyIsOn";
(Ae = {})[Ae.Rectangular = 1] = "Rectangular", Ae[Ae.Polygonal = 2] = "Polygonal";
(Se = {})[Se.Outside = 0] = "Outside", Se[Se.Inside = 1] = "Inside";
function Fr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let en = { brightness: 50, contrast: 50, fade: 0, clippingBoundaryPath: [] }, rn = [{ code: 290, name: "clipMode", parser: a }, { code: 14, name: "clippingBoundaryPath", isMultiple: !0, parser: c }, { code: 91, name: "countBoundaryPoints", parser: a }, { code: 71, name: "clippingBoundaryType", parser: a }, { code: 360, name: "imageDefReactorHandle", parser: a }, { code: 283, name: "fade", parser: a }, { code: 282, name: "contrast", parser: a }, { code: 281, name: "brightness", parser: a }, { code: 280, name: "isClipped", parser: f }, { code: 70, name: "flags", parser: a }, { code: 340, name: "imageDefHandle", parser: a }, { code: 13, name: "imageSize", parser: c }, { code: 12, name: "vPixel", parser: c }, { code: 11, name: "uPixel", parser: c }, { code: 10, name: "position", parser: c }, { code: 90, name: "version", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class wr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Fr(this, "parser", d(rn, en));
  }
}
function Vr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Fr(wr, "ForEntityName", "IMAGE");
let an = { xScale: 1, yScale: 1, zScale: 1, rotation: 0, columnCount: 0, rowCount: 0, columnSpacing: 0, rowSpacing: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, nn = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 45, name: "rowSpacing", parser: a }, { code: 44, name: "columnSpacing", parser: a }, { code: 71, name: "rowCount", parser: a }, { code: 70, name: "columnCount", parser: a }, { code: 50, name: "rotation", parser: a }, { code: 43, name: "zScale", parser: a }, { code: 42, name: "yScale", parser: a }, { code: 41, name: "xScale", parser: a }, { code: 10, name: "insertionPoint", parser: c }, { code: 2, name: "name", parser: a }, { code: 66, name: "isVariableAttributes", parser: f }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Br {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Vr(this, "parser", d(nn, an));
  }
}
function Gr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Vr(Br, "ForEntityName", "INSERT");
let tn = { isArrowheadEnabled: !0 }, on = [{ code: 213, name: "offsetFromAnnotation", parser: c }, { code: 212, name: "offsetFromBlock", parser: c }, { code: 211, name: "horizontalDirection", parser: c }, { code: 210, name: "normal", parser: c }, { code: 340, name: "associatedAnnotation", parser: a }, { code: 77, name: "byBlockColor", parser: a }, { code: 10, name: "vertices", parser: c, isMultiple: !0 }, { code: 76, name: "numberOfVertices", parser: a }, { code: 41, name: "textWidth", parser: a }, { code: 40, name: "textHeight", parser: a }, { code: 75, name: "isHooklineExists", parser: f }, { code: 74, name: "isHooklineSameDirection", parser: f }, { code: 73, name: "leaderCreationFlag", parser: a }, { code: 72, name: "isSpline", parser: f }, { code: 71, name: "isArrowheadEnabled", parser: f }, { code: 3, name: "styleName", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Ur {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Gr(this, "parser", d(on, tn));
  }
}
Gr(Ur, "ForEntityName", "LEADER");
(X = {})[X.TextAnnotation = 0] = "TextAnnotation", X[X.ToleranceAnnotation = 1] = "ToleranceAnnotation", X[X.BlockReferenceAnnotation = 2] = "BlockReferenceAnnotation", X[X.NoAnnotation = 3] = "NoAnnotation";
function Hr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let sn = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, cn = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 11, name: "endPoint", parser: c }, { code: 10, name: "startPoint", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Wr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Hr(this, "parser", d(cn, sn));
  }
}
Hr(Wr, "ForEntityName", "LINE");
(Le = {})[Le.IS_CLOSED = 1] = "IS_CLOSED", Le[Le.PLINE_GEN = 128] = "PLINE_GEN";
let ln = { flag: 0, elevation: 0, thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, vertices: [] }, dn = { bulge: 0 }, un = [{ code: 42, name: "bulge", parser: a }, { code: 41, name: "endWidth", parser: a }, { code: 40, name: "startWidth", parser: a }, { code: 91, name: "id", parser: a }, { code: 20, name: "y", parser: a }, { code: 10, name: "x", parser: a }], pn = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 10, name: "vertices", isMultiple: !0, parser(e, r) {
  let n = {};
  return d(un, dn)(e, r, n), n;
} }, { code: 39, name: "thickness", parser: a }, { code: 38, name: "elevation", parser: a }, { code: 43, name: "constantWidth", parser: a }, { code: 70, name: "flag", parser: a }, { code: 90, name: "numberOfVertices", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class we {
  parseEntity(r, n) {
    let t = {};
    return d(pn, ln)(n, r, t), t;
  }
}
function Yr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
ze = "LWPOLYLINE", (Ke = "ForEntityName") in we ? Object.defineProperty(we, Ke, { value: ze, enumerable: !0, configurable: !0, writable: !0 }) : we[Ke] = ze;
let mn = [{ code: 90, name: "overridenSubEntityCount", parser: a }, { code: 140, name: "edgeCreaseWeights", parser: a, isMultiple: !0 }, { code: 95, name: "edgeCreaseCount", parser: a }, { code: 94, parser(e, r, n) {
  n.edgeCount = e.value, n.edgeIndices = [];
  for (let t = 0; t < n.edgeCount; ++t) {
    let o = [];
    e = r.next(), o[0] = e.value, e = r.next(), o[1] = e.value, n.edgeIndices.push(o);
  }
} }, { code: 93, parser(e, r, n) {
  n.totalFaceIndices = e.value, n.faceIndices = [];
  let t = [];
  for (let s = 0; s < n.totalFaceIndices && !u(e, 0); ++s) e = r.next(), t.push(e.value);
  let o = 0;
  for (; o < t.length; ) {
    let s = t[o++], i = [];
    for (let g = 0; g < s; ++g) i.push(t[o++]);
    n.faceIndices.push(i);
  }
} }, { code: 10, name: "vertices", parser: c, isMultiple: !0 }, { code: 92, name: "verticesCount", parser: a }, { code: 91, name: "subdivisionLevel", parser: a }, { code: 40, name: "blendCrease", parser: a }, { code: 72, name: "isBlendCreased", parser: f }, { code: 71, name: "version", parser: a }, { code: 100, name: "subclassMarker", parser: function({ value: e }) {
  return e.trim();
}, pushContext: !0 }, ...b];
class jr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Yr(this, "parser", d(mn));
  }
}
function Xr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Yr(jr, "ForEntityName", "MESH");
let fn = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, angle: 0 }, bn = [{ code: 50, name: "angle", parser: a }, { code: 210, name: "extrusionDirection", parser: c }, { code: 39, name: "thickness", parser: a }, { code: 10, name: "position", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Kr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Xr(this, "parser", d(bn, fn));
  }
}
Xr(Kr, "ForEntityName", "POINT");
(D = {})[D.CLOSED_POLYLINE = 1] = "CLOSED_POLYLINE", D[D.CURVE_FIT = 2] = "CURVE_FIT", D[D.SPLINE_FIT = 4] = "SPLINE_FIT", D[D.POLYLINE_3D = 8] = "POLYLINE_3D", D[D.POLYGON_3D = 16] = "POLYGON_3D", D[D.CLOSED_POLYGON = 32] = "CLOSED_POLYGON", D[D.POLYFACE = 64] = "POLYFACE", D[D.CONTINUOUS = 128] = "CONTINUOUS";
(K = {})[K.NONE = 0] = "NONE", K[K.QUADRATIC = 5] = "QUADRATIC", K[K.CUBIC = 6] = "CUBIC", K[K.BEZIER = 8] = "BEZIER";
(x = {})[x.CREATED_BY_CURVE_FIT = 1] = "CREATED_BY_CURVE_FIT", x[x.TANGENT_DEFINED = 2] = "TANGENT_DEFINED", x[x.NOT_USED = 4] = "NOT_USED", x[x.CREATED_BY_SPLINE_FIT = 8] = "CREATED_BY_SPLINE_FIT", x[x.SPLINE_CONTROL_POINT = 16] = "SPLINE_CONTROL_POINT", x[x.FOR_POLYLINE = 32] = "FOR_POLYLINE", x[x.FOR_POLYGON = 64] = "FOR_POLYGON", x[x.POLYFACE = 128] = "POLYFACE";
function zr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let En = { startWidth: 0, endWidth: 0, bulge: 0 }, In = [{ code: 91, name: "id", parser: a }, { code: [...Ge(71, 75)], name: "faces", isMultiple: !0, parser: a }, { code: 50, name: "tangentDirection", parser: a }, { code: 70, name: "flag", parser: a }, { code: 42, name: "bulge", parser: a }, { code: 41, name: "endWidth", parser: a }, { code: 40, name: "startWidth", parser: a }, { code: 30, name: "z", parser: a }, { code: 20, name: "y", parser: a }, { code: 10, name: "x", parser: a }, { code: 100, name: "subclassMarker", parser: a }, { code: 100 }, ...b];
class nr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    zr(this, "parser", d(In, En));
  }
}
function Zr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
zr(nr, "ForEntityName", "VERTEX");
let hn = { thickness: 0, flag: 0, startWidth: 0, endWidth: 0, meshMVertexCount: 0, meshNVertexCount: 0, surfaceMDensity: 0, surfaceNDensity: 0, smoothType: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, vertices: [] }, gn = [{ code: 0, name: "vertices", isMultiple: !0, parser: (e, r) => u(e, 0, "VERTEX") ? (e = r.next(), new nr().parseEntity(r, e)) : rr }, { code: 210, name: "extrusionDirection", parser: c }, { code: 75, name: "smoothType", parser: a }, { code: 74, name: "surfaceNDensity", parser: a }, { code: 73, name: "surfaceMDensity", parser: a }, { code: 72, name: "meshNVertexCount", parser: a }, { code: 71, name: "meshMVertexCount", parser: a }, { code: 41, name: "endWidth", parser: a }, { code: 40, name: "startWidth", parser: a }, { code: 70, name: "flag", parser: a }, { code: 39, name: "thickness", parser: a }, { code: 30, name: "elevation", parser: a }, { code: 20 }, { code: 10 }, { code: 66 }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class Jr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Zr(this, "parser", d(gn, hn));
  }
}
function $r(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Zr(Jr, "ForEntityName", "POLYLINE");
let On = [{ code: 11, name: "direction", parser: c }, { code: 10, name: "position", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class qr {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    $r(this, "parser", d(On));
  }
}
function Qr(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
$r(qr, "ForEntityName", "RAY");
let Tn = [...Ue("data"), { code: 70, name: "version", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class ea {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    Qr(this, "parser", d(Tn));
  }
}
function ra(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Qr(ea, "ForEntityName", "REGION");
let Dn = { vertices: [], backLineVertices: [] }, xn = [{ code: 360, name: "geometrySettingHardId", parser: a }, { code: 12, name: "backLineVertices", isMultiple: !0, parser: c }, { code: 93, name: "numberOfBackLineVertices", parser: a }, { code: 11, name: "vertices", isMultiple: !0, parser: c }, { code: 92, name: "verticesCount", parser: a }, { code: [63, 411], name: "indicatorColor", parser: a }, { code: 70, name: "indicatorTransparency", parser: a }, { code: 41, name: "bottomHeight", parser: a }, { code: 40, name: "topHeight", parser: a }, { code: 10, name: "verticalDirection", parser: c }, { code: 1, name: "name", parser: a }, { code: 91, name: "flag", parser: a }, { code: 90, name: "state", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class aa {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    ra(this, "parser", d(xn, Dn));
  }
}
function na(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
ra(aa, "ForEntityName", "SECTION");
let Nn = { points: [], thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, vn = [{ code: 210, name: "extrusionDirection", parser: c }, { code: 39, name: "thickness", parser: a }, { code: [...Ge(10, 14)], name: "points", isMultiple: !0, parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class ta {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    na(this, "parser", d(vn, Nn));
  }
}
function oa(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
na(ta, "ForEntityName", "SOLID");
let yn = [{ code: 350, name: "historyObjectSoftId", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...Ue("data"), { code: 70, name: "version", parser: a }, { code: 100 }, ...b];
class sa {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    oa(this, "parser", d(yn));
  }
}
oa(sa, "ForEntityName", "3DSOLID");
(M = {})[M.NONE = 0] = "NONE", M[M.CLOSED = 1] = "CLOSED", M[M.PERIODIC = 2] = "PERIODIC", M[M.RATIONAL = 4] = "RATIONAL", M[M.PLANAR = 8] = "PLANAR", M[M.LINEAR = 16] = "LINEAR";
function ca(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let An = { knotTolerance: 1e-6, controlTolerance: 1e-6, fitTolerance: 1e-9, knotValues: [], controlPoints: [], fitPoints: [] }, Sn = [{ code: 11, name: "fitPoints", isMultiple: !0, parser: c }, { code: 10, name: "controlPoints", isMultiple: !0, parser: c }, { code: 41, name: "weights", isMultiple: !0, parser: a }, { code: 40, name: "knots", isMultiple: !0, parser: a }, { code: 13, name: "endTangent", parser: c }, { code: 12, name: "startTangent", parser: c }, { code: 44, name: "fitTolerance", parser: a }, { code: 43, name: "controlTolerance", parser: a }, { code: 42, name: "knotTolerance", parser: a }, { code: 74, name: "numberOfFitPoints", parser: a }, { code: 73, name: "numberOfControlPoints", parser: a }, { code: 72, name: "numberOfKnots", parser: a }, { code: 71, name: "degree", parser: a }, { code: 70, name: "flag", parser: a }, { code: 210, name: "normal", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class ia {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    ca(this, "parser", d(Sn, An));
  }
}
ca(ia, "ForEntityName", "SPLINE");
class Ve {
  parseEntity(r, n) {
    let t = {};
    for (; !r.isEOF(); ) {
      if (n.code === 0) {
        r.rewind();
        break;
      }
      switch (n.code) {
        case 100:
          t.subclassMarker = n.value, n = r.next();
          break;
        case 2:
          t.name = n.value, n = r.next();
          break;
        case 5:
          t.handle = n.value, n = r.next();
          break;
        case 10:
          t.startPoint = Q(m(r)), n = r.lastReadGroup;
          break;
        case 11:
          t.directionVector = Q(m(r)), n = r.lastReadGroup;
          break;
        case 90:
          t.tableValue = n.value, n = r.next();
          break;
        case 91:
          t.rowCount = n.value, n = r.next();
          break;
        case 92:
          t.columnCount = n.value, n = r.next();
          break;
        case 93:
          t.overrideFlag = n.value, n = r.next();
          break;
        case 94:
          t.borderColorOverrideFlag = n.value, n = r.next();
          break;
        case 95:
          t.borderLineWeightOverrideFlag = n.value, n = r.next();
          break;
        case 96:
          t.borderVisibilityOverrideFlag = n.value, n = r.next();
          break;
        case 141:
          t.rowHeightArr ?? (t.rowHeightArr = []), t.rowHeightArr.push(n.value), n = r.next();
          break;
        case 142:
          t.columnWidthArr ?? (t.columnWidthArr = []), t.columnWidthArr.push(n.value), n = r.next();
          break;
        case 280:
          t.version = n.value, n = r.next();
          break;
        case 310:
          t.bmpPreview ?? (t.bmpPreview = ""), t.bmpPreview += n.value, n = r.next();
          break;
        case 330:
          t.ownerDictionaryId = n.value, n = r.next();
          break;
        case 342:
          t.tableStyleId = n.value, n = r.next();
          break;
        case 343:
          t.blockRecordHandle = n.value, n = r.next();
          break;
        case 170:
          t.attachmentPoint = n.value, n = r.next();
          break;
        case 171:
          t.cells ?? (t.cells = []), t.cells.push(function(o, s) {
            let i = !1, g = !1, p = {};
            for (; !o.isEOF() && s.code !== 0 && !g; ) switch (s.code) {
              case 171:
                if (i) {
                  g = !0;
                  continue;
                }
                p.cellType = s.value, i = !0, s = o.next();
                break;
              case 172:
                p.flagValue = s.value, s = o.next();
                break;
              case 173:
                p.mergedValue = s.value, s = o.next();
                break;
              case 174:
                p.autoFit = s.value, s = o.next();
                break;
              case 175:
                p.borderWidth = s.value, s = o.next();
                break;
              case 176:
                p.borderHeight = s.value, s = o.next();
                break;
              case 91:
                p.overrideFlag = s.value, s = o.next();
                break;
              case 178:
                p.virtualEdgeFlag = s.value, s = o.next();
                break;
              case 145:
                p.rotation = s.value, s = o.next();
                break;
              case 345:
                p.fieldObjetId = s.value, s = o.next();
                break;
              case 340:
                p.blockTableRecordId = s.value, s = o.next();
                break;
              case 146:
                p.blockScale = s.value, s = o.next();
                break;
              case 177:
                p.blockAttrNum = s.value, s = o.next();
                break;
              case 7:
                p.textStyle = s.value, s = o.next();
                break;
              case 140:
                p.textHeight = s.value, s = o.next();
                break;
              case 170:
                p.attachmentPoint = s.value, s = o.next();
                break;
              case 92:
                p.extendedCellFlags = s.value, s = o.next();
                break;
              case 285:
                p.rightBorderVisibility = !!(s.value ?? !0), s = o.next();
                break;
              case 286:
                p.bottomBorderVisibility = !!(s.value ?? !0), s = o.next();
                break;
              case 288:
                p.leftBorderVisibility = !!(s.value ?? !0), s = o.next();
                break;
              case 289:
                p.topBorderVisibility = !!(s.value ?? !0), s = o.next();
                break;
              case 301:
                (function(S, N, I) {
                  for (; I.code !== 304; ) switch (I.code) {
                    case 301:
                    case 93:
                    case 90:
                    case 94:
                      I = N.next();
                      break;
                    case 1:
                      S.text = I.value, I = N.next();
                      break;
                    case 300:
                      S.attrText = I.value, I = N.next();
                      break;
                    case 302:
                      S.text = I.value ? I.value : S.text, I = N.next();
                      break;
                    default:
                      console.log(`Ignore code: ${I.code}, value: ${I.value}`), I = N.next();
                  }
                })(p, o, s), s = o.next();
                break;
              default:
                return p;
            }
            return i = !1, g = !1, p;
          }(r, n)), n = r.lastReadGroup;
          break;
        default:
          ar(t, n, r), n = r.next();
      }
    }
    return t;
  }
}
function la(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
Je = "ACAD_TABLE", (Ze = "ForEntityName") in Ve ? Object.defineProperty(Ve, Ze, { value: Je, enumerable: !0, configurable: !0, writable: !0 }) : Ve[Ze] = Je;
let Ln = [{ code: 11, name: "xAxisDirection", parser: c }, { code: 210, name: "extrusionDirection", parser: c }, { code: 1, name: "text", parser: a }, { code: 10, name: "position", parser: c }, { code: 3, name: "styleName", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class da {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    la(this, "parser", d(Ln));
  }
}
la(da, "ForEntityName", "TOLERANCE");
class Be {
  parseEntity(r, n) {
    let t = {};
    for (; n !== "EOF"; ) {
      if (n.code === 0) {
        r.rewind();
        break;
      }
      !function(o, s, i) {
        if (i === "EOF") return !1;
        switch (i.code) {
          case 0:
            return !1;
          case 8:
            o.layer = i.value;
            break;
          case 100:
            o.subclassMarker = i.value;
            break;
          case 10:
            o.viewportCenter = Q(m(s));
            break;
          case 40:
            o.width = i.value;
            break;
          case 41:
            o.height = i.value;
            break;
          case 68:
            o.status = i.value;
            break;
          case 69:
            o.viewportId = i.value;
            break;
          case 12:
            o.displayCenter = m(s);
            break;
          case 13:
            o.snapBase = m(s);
            break;
          case 14:
            o.snapSpacing = m(s);
            break;
          case 15:
            o.gridSpacing = m(s);
            break;
          case 16:
            o.viewDirection = Q(m(s));
            break;
          case 17:
            o.targetPoint = Q(m(s));
            break;
          case 42:
            o.perspectiveLensLength = i.value;
            break;
          case 43:
            o.frontClipZ = i.value;
            break;
          case 44:
            o.backClipZ = i.value;
            break;
          case 45:
            o.viewHeight = i.value;
            break;
          case 50:
            o.snapAngle = i.value;
            break;
          case 51:
            o.viewTwistAngle = i.value;
            break;
          case 72:
            o.circleZoomPercent = i.value;
            break;
          case 331:
            o.frozenLayerIds ?? (o.frozenLayerIds = []), o.frozenLayerIds.push(i.value);
            break;
          case 90:
            o.statusBitFlags = i.value;
            break;
          case 340:
            o.clippingBoundaryId = i.value;
            break;
          case 1:
            o.sheetName = i.value;
            break;
          case 281:
            o.renderMode = i.value;
            break;
          case 71:
            o.ucsPerViewport = i.value;
            break;
          case 110:
            o.ucsOrigin = Q(m(s));
            break;
          case 111:
            o.ucsXAxis = Q(m(s));
            break;
          case 112:
            o.ucsYAxis = Q(m(s));
            break;
          case 345:
            o.ucsId = i.value;
            break;
          case 346:
            o.ucsBaseId = i.value;
            break;
          case 79:
            o.orthographicType = i.value;
            break;
          case 146:
            o.elevation = i.value;
            break;
          case 170:
            o.shadePlotMode = i.value;
            break;
          case 61:
            o.majorGridFrequency = i.value;
            break;
          case 332:
            o.backgroundId = i.value;
            break;
          case 333:
            o.shadePlotId = i.value;
            break;
          case 348:
            o.visualStyleId = i.value;
            break;
          case 292:
            o.isDefaultLighting = !!i.value;
            break;
          case 282:
            o.defaultLightingType = i.value;
            break;
          case 141:
            o.brightness = i.value;
            break;
          case 142:
            o.contrast = i.value;
            break;
          case 63:
          case 421:
          case 431:
            o.ambientLightColor = i.value;
            break;
          case 361:
            o.sunId = i.value;
            break;
          case 335:
          case 343:
          case 344:
          case 91:
            o.softPointer = i.value;
        }
        return !0;
      }(t, r, n) && ar(t, n, r), n = r.next();
    }
    return t;
  }
}
qe = "VIEWPORT", ($e = "ForEntityName") in Be ? Object.defineProperty(Be, $e, { value: qe, enumerable: !0, configurable: !0, writable: !0 }) : Be[$e] = qe;
(z = {})[z.ShowImage = 1] = "ShowImage", z[z.ShowImageWhenNotAligned = 2] = "ShowImageWhenNotAligned", z[z.UseClippingBoundary = 4] = "UseClippingBoundary", z[z.Transparency = 8] = "Transparency";
function ua(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
let kn = { brightness: 50, constrast: 50, fade: 0 }, Mn = [{ code: 14, name: "boundary", isMultiple: !0, parser: c }, { code: 91, name: "numberOfVertices", parser: a }, { code: 71, name: "boundaryType", parser: a }, { code: 360, name: "imageDefReactorHardId", parser: a }, { code: 283, name: "fade", parser: a }, { code: 282, name: "contrast", parser: a }, { code: 281, name: "brightness", parser: a }, { code: 280, name: "isClipping", parser: f }, { code: 70, name: "displayFlag", parser: a }, { code: 340, name: "imageDefHardId", parser: a }, { code: 13, name: "imageSize", parser: c }, { code: 12, name: "vDirection", parser: c }, { code: 11, name: "uDirection", parser: c }, { code: 10, name: "position", parser: c }, { code: 90, name: "classVersion", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class pa {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    ua(this, "parser", d(Mn, kn));
  }
}
function ma(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
ua(pa, "ForEntityName", "WIPEOUT");
let Pn = [{ code: 11, name: "direction", parser: c }, { code: 10, name: "position", parser: c }, { code: 100, name: "subclassMarker", parser: a }, ...b];
class fa {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    ma(this, "parser", d(Pn));
  }
}
function ba(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
ma(fa, "ForEntityName", "XLINE");
let _n = {}, Cn = [{ code: 170, name: "multileaderType", parser: a }, { code: 291, name: "doglegEnabled", parser: f }, { code: 40, name: "doglegLength", parser: a }, { code: 172, name: "contentType", parser: a }, { code: 3, name: "textContent", parser: a }, { code: 12, name: "textAnchor", parser: c }, { code: 344, name: "blockHandle", parser: a }, { code: 15, name: "blockPosition", parser: c }, { code: 302, name: "leaderSections", parser: function(e, r, n) {
  let t, o = { leaderLines: [] };
  for (; r.hasNext() && (t = r.next()).code !== 303; )
    switch (t.code) {
      case 10:
        o.landingPoint = (t.value, m(r));
        break;
      case 11:
        o.doglegVector = (t.value, m(r));
        break;
      case 40:
        o.doglegLength = t.value;
        break;
      case 304:
        o.leaderLines.push(function(s, i, g) {
          let p, S = { vertices: [] };
          for (; i.hasNext() && (p = i.next()).code !== 305; ) p.code === 10 && S.vertices.push((p.value, m(i)));
          return S;
        }(0, r));
    }
  return o;
}, isMultiple: !0 }, ...b];
class Ea {
  parseEntity(r, n) {
    let t = {};
    return this.parser(n, r, t), t;
  }
  constructor() {
    ba(this, "parser", d(Cn, _n));
  }
}
ba(Ea, "ForEntityName", "MULTILEADER");
let Rn = Object.fromEntries([fr, Or, Nr, yr, Sr, Fe, kr, Pr, wr, Br, Ur, Wr, we, jr, Dr, Ea, Kr, Jr, qr, ea, aa, ta, sa, ia, Ve, hr, da, Rr, nr, Be, pa, fa].map((e) => [e.ForEntityName, new e()]));
function Ia(e, r) {
  let n = [];
  for (; !u(e, 0, "EOF"); ) {
    if (e.code === 0) {
      if (e.value === "ENDBLK" || e.value === "ENDSEC") {
        r.rewind();
        break;
      }
      let t = Rn[e.value];
      if (t) {
        let o = e.value;
        e = r.next();
        let s = t.parseEntity(r, e);
        s.type = o, ur(s), n.push(s);
      } else r.debug && console.warn(`Unsupported ENTITY type: ${e.value}`);
    }
    e = r.next();
  }
  return n;
}
function Fn(e, r) {
  let n = {};
  for (; !u(e, 0, "EOF") && !u(e, 0, "ENDSEC"); ) {
    if (u(e, 0, "BLOCK")) {
      let t = wn(e = r.next(), r);
      ur(t), t.name && (n[t.name] = t);
    }
    e = r.next();
  }
  return n;
}
function wn(e, r) {
  let n = {};
  for (; !u(e, 0, "EOF"); ) {
    if (u(e, 0, "ENDBLK")) {
      for (e = r.next(); !u(e, 0, "EOF"); ) {
        if (u(e, 100, "AcDbBlockEnd")) return n;
        e = r.next();
      }
      break;
    }
    switch (e.code) {
      case 1:
        n.xrefPath = e.value;
        break;
      case 2:
        n.name = e.value;
        break;
      case 3:
        n.name2 = e.value;
        break;
      case 5:
        n.handle = e.value;
        break;
      case 8:
        n.layer = e.value;
        break;
      case 10:
        n.position = m(r);
        break;
      case 67:
        n.paperSpace = !!e.value && e.value == 1;
        break;
      case 70:
        e.value !== 0 && (n.type = e.value);
        break;
      case 100:
        break;
      case 330:
        n.ownerHandle = e.value;
        break;
      case 0:
        n.entities = Ia(e, r);
    }
    e = r.next();
  }
  return n;
}
function Vn(e, r) {
  let n = null, t = {};
  for (; !u(e, 0, "EOF") && !u(e, 0, "ENDSEC"); ) e.code === 9 ? n = e.value : e.code === 10 ? t[n] = m(r) : t[n] = e.value, e = r.next();
  return t;
}
(P = {})[P.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", P[P.KEEP_EXISTING = 1] = "KEEP_EXISTING", P[P.USE_CLONE = 2] = "USE_CLONE", P[P.XREF_VALUE_NAME = 3] = "XREF_VALUE_NAME", P[P.VALUE_NAME = 4] = "VALUE_NAME", P[P.UNMANGLE_NAME = 5] = "UNMANGLE_NAME";
let tr = [{ code: 330, name: "ownerObjectId", parser: a }, { code: 102, parser: ie }, { code: 102, parser: ie }, { code: 102, parser: ie }, { code: 5, name: "handle", parser: a }], Bn = [{ code: 3, name: "entries", parser: (e, r) => {
  let n = { name: e.value };
  return (e = r.next()).code === 350 ? n.objectSoftId = e.value : e.code === 360 ? n.objectHardId = e.value : r.rewind(), n;
}, isMultiple: !0 }, { code: 281, name: "recordCloneFlag", parser: a }, { code: 280, name: "isHardOwned", parser: f }, { code: 100, name: "subclassMarker", parser: a }, ...tr], Gn = [{ code: 330, name: "imageDefReactorIdSoft", isMultiple: !0, parser: a }, { code: 90, name: "version", parser: a }, { code: 1, name: "fileName", parser: a }, { code: 10, name: "size", parser: c }, { code: 11, name: "sizeOfOnePixel", parser: c }, { code: 280, name: "isLoaded", parser: a }, { code: 281, name: "resolutionUnits", parser: a }, { code: 100, name: "subclassMarker", parser: a }];
(se = {})[se.NOUNIT = 0] = "NOUNIT", se[se.CENTIMETERS = 2] = "CENTIMETERS", se[se.INCH = 5] = "INCH";
(ke = {})[ke.PSLTSCALE = 1] = "PSLTSCALE", ke[ke.LIMCHECK = 2] = "LIMCHECK";
(ce = {})[ce.INCHES = 0] = "INCHES", ce[ce.MILLIMETERS = 1] = "MILLIMETERS", ce[ce.PIXELS = 2] = "PIXELS";
(_ = {})[_.LAST_SCREEN_DISPLAY = 0] = "LAST_SCREEN_DISPLAY", _[_.DRAWING_EXTENTS = 1] = "DRAWING_EXTENTS", _[_.DRAWING_LIMITS = 2] = "DRAWING_LIMITS", _[_.VIEW_SPECIFIED = 3] = "VIEW_SPECIFIED", _[_.WINDOW_SPECIFIED = 4] = "WINDOW_SPECIFIED", _[_.LAYOUT_INFORMATION = 5] = "LAYOUT_INFORMATION";
(Z = {})[Z.AS_DISPLAYED = 0] = "AS_DISPLAYED", Z[Z.WIREFRAME = 1] = "WIREFRAME", Z[Z.HIDDEN = 2] = "HIDDEN", Z[Z.RENDERED = 3] = "RENDERED";
(C = {})[C.DRAFT = 0] = "DRAFT", C[C.PREVIEW = 1] = "PREVIEW", C[C.NORMAL = 2] = "NORMAL", C[C.PRESENTATION = 3] = "PRESENTATION", C[C.MAXIMUM = 4] = "MAXIMUM", C[C.CUSTOM = 5] = "CUSTOM";
let ha = [{ code: 333, name: "shadePlotId", parser: a }, { code: 149, name: "imageOriginY", parser: a }, { code: 148, name: "imageOriginX", parser: a }, { code: 147, name: "scaleFactor", parser: a }, { code: 78, name: "shadePlotCustomDPI", parser: a }, { code: 77, name: "shadePlotResolution", parser: a }, { code: 76, name: "shadePlotMode", parser: a }, { code: 75, name: "standardScaleType", parser: a }, { code: 7, name: "currentStyleSheet", parser: a }, { code: 74, name: "plotType", parser: a }, { code: 73, name: "plotRotation", parser: a }, { code: 72, name: "plotPaperUnit", parser: a }, { code: 70, name: "layoutFlag", parser: a }, { code: 143, name: "printScaleDenominator", parser: a }, { code: 142, name: "printScaleNumerator", parser: a }, { code: 141, name: "windowAreaYMax", parser: a }, { code: 140, name: "windowAreaXMax", parser: a }, { code: 49, name: "windowAreaYMin", parser: a }, { code: 48, name: "windowAreaXMin", parser: a }, { code: 47, name: "plotOriginY", parser: a }, { code: 46, name: "plotOriginX", parser: a }, { code: 45, name: "paperHeight", parser: a }, { code: 44, name: "paperWidth", parser: a }, { code: 43, name: "marginTop", parser: a }, { code: 42, name: "marginRight", parser: a }, { code: 41, name: "marginBottom", parser: a }, { code: 40, name: "marginLeft", parser: a }, { code: 6, name: "plotViewName", parser: a }, { code: 4, name: "paperSize", parser: a }, { code: 2, name: "configName", parser: a }, { code: 1, name: "pageSetupName", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...tr], Un = [{ code: 346, name: "orthographicUcsId", parser: a }, { code: 345, name: "namedUcsId", parser: a }, { code: 331, name: "viewportId", parser: a }, { code: 330, name: "paperSpaceTableId", parser: a }, { code: 76, name: "orthographicType", parser: a }, { code: 17, name: "ucsYAxis", parser: c }, { code: 16, name: "ucsXAxis", parser: c }, { code: 13, name: "ucsOrigin", parser: c }, { code: 146, name: "elevation", parser: a }, { code: 15, name: "maxExtent", parser: c }, { code: 14, name: "minExtent", parser: c }, { code: 12, name: "insertionPoint", parser: c }, { code: 11, name: "maxLimit", parser: c }, { code: 10, name: "minLimit", parser: c }, { code: 71, name: "tabOrder", parser: a }, { code: 70, name: "controlFlag", parser: a }, { code: 1, name: "layoutName", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...ha], Hn = [{ code: 40, name: "wcsToOCSTransform", parser: cr }, { code: 40, name: "ocsToWCSTransform", parser: cr }, { code: 41, name: "backClippingDistance", parser: a }, { code: 73, name: "isBackClipping", parser: f, pushContext: !0 }, { code: 40, name: "frontClippingDistance", parser: a }, { code: 72, name: "isFrontClipping", parser: f, pushContext: !0 }, { code: 71, name: "isClipBoundaryDisplayed", parser: f }, { code: 11, name: "position", parser: c }, { code: 210, name: "normal", parser: c }, { code: 10, name: "boundaryVertices", parser: c, isMultiple: !0 }, { code: 70, name: "boundaryCount", parser: a }, { code: 100, name: "subclassMarker", parser: a }, { code: 100 }, ...tr];
function cr(e, r) {
  let n = [];
  for (let t = 0; t < 3 && u(e, 40); ++t) {
    let o = [];
    for (let s = 0; s < 4 && u(e, 40); ++s) o.push(e.value), e = r.next();
    n.push(o);
  }
  return r.rewind(), n;
}
let Wn = { LAYOUT: Un, PLOTSETTINGS: ha, DICTIONARY: Bn, SPATIAL_FILTER: Hn, IMAGEDEF: Gn };
function Yn(e, r) {
  let n = [];
  for (; e.code !== 0 || !["EOF", "ENDSEC"].includes(e.value); ) {
    let t = e.value, o = Wn[t];
    if (e.code === 0 && (o != null && o.length)) {
      let s = d(o), i = { name: t };
      s(e = r.next(), r, i) ? (n.push(i), e = r.peek()) : e = r.next();
    } else e = r.next();
  }
  return { byName: Ca(n, ({ name: t }) => t) };
}
let fe = [{ code: 100, name: "subclassMarker", parser: a }, { code: 330, name: "ownerObjectId", parser: a }, { code: 102, parser(e, r) {
  for (; !u(e, 0, "EOF") && !u(e, 102, "}"); ) e = r.next();
} }, { code: 5, name: "handle", parser: a }], jn = d([{ code: 310, name: "bmpPreview", parser: a }, { code: 281, name: "scalability", parser: a }, { code: 280, name: "explodability", parser: a }, { code: 70, name: "insertionUnits", parser: a }, { code: 340, name: "layoutObjects", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...fe]), Xn = [{ name: "DIMPOST", code: 3 }, { name: "DIMAPOST", code: 4 }, { name: "DIMBLK_OBSOLETE", code: 5 }, { name: "DIMBLK1_OBSOLETE", code: 6 }, { name: "DIMBLK2_OBSOLETE", code: 7 }, { name: "DIMSCALE", code: 40, defaultValue: 1 }, { name: "DIMASZ", code: 41, defaultValue: 0.25 }, { name: "DIMEXO", code: 42, defaultValue: 0.625, defaultValueImperial: 0.0625 }, { name: "DIMDLI", code: 43, defaultValue: 3.75, defaultValueImperial: 0.38 }, { name: "DIMEXE", code: 44, defaultValue: 2.25, defaultValueImperial: 0.28 }, { name: "DIMRND", code: 45, defaultValue: 0 }, { name: "DIMDLE", code: 46, defaultValue: 0 }, { name: "DIMTP", code: 47, defaultValue: 0 }, { name: "DIMTM", code: 48, defaultValue: 0 }, { name: "DIMTXT", code: 140, defaultValue: 2.5, defaultValueImperial: 0.28 }, { name: "DIMCEN", code: 141, defaultValue: 2.5, defaultValueImperial: 0.09 }, { name: "DIMTSZ", code: 142, defaultValue: 0 }, { name: "DIMALTF", code: 143, defaultValue: 25.4 }, { name: "DIMLFAC", code: 144, defaultValue: 1 }, { name: "DIMTVP", code: 145, defaultValue: 0 }, { name: "DIMTFAC", code: 146, defaultValue: 1 }, { name: "DIMGAP", code: 147, defaultValue: 0.625, defaultValueImperial: 0.09 }, { name: "DIMALTRND", code: 148, defaultValue: 0 }, { name: "DIMTOL", code: 71, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMLIM", code: 72, defaultValue: 0 }, { name: "DIMTIH", code: 73, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMTOH", code: 74, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMSE1", code: 75, defaultValue: 0 }, { name: "DIMSE2", code: 76, defaultValue: 0 }, { name: "DIMTAD", code: 77, defaultValue: or.Above, defaultValueImperial: or.Center }, { name: "DIMZIN", code: 78, defaultValue: me.Trailing, defaultValueImperial: me.Feet }, { name: "DIMAZIN", code: 79, defaultValue: Oa.None }, { name: "DIMALT", code: 170, defaultValue: 0 }, { name: "DIMALTD", code: 171, defaultValue: 3, defaultValueImperial: 2 }, { name: "DIMTOFL", code: 172, defaultValue: 1, defaultValueImperial: 0 }, { name: "DIMSAH", code: 173, defaultValue: 0 }, { name: "DIMTIX", code: 174, defaultValue: 0 }, { name: "DIMSOXD", code: 175, defaultValue: 0 }, { name: "DIMCLRD", code: 176, defaultValue: 0 }, { name: "DIMCLRE", code: 177, defaultValue: 0 }, { name: "DIMCLRT", code: 178, defaultValue: 0 }, { name: "DIMADEC", code: 179 }, { name: "DIMUNIT", code: 270 }, { name: "DIMDEC", code: 271, defaultValue: 2, defaultValueImperial: 4 }, { name: "DIMTDEC", code: 272, defaultValue: 2, defaultValueImperial: 4 }, { name: "DIMALTU", code: 273, defaultValue: 2 }, { name: "DIMALTTD", code: 274, defaultValue: 2, defaultValueImperial: 4 }, { name: "DIMAUNIT", code: 275, defaultValue: 0 }, { name: "DIMFRAC", code: 276, defaultValue: 0 }, { name: "DIMLUNIT", code: 277, defaultValue: 2 }, { name: "DIMDSEP", code: 278, defaultValue: ",", defaultValueImperial: "." }, { name: "DIMJUST", code: 280, defaultValue: Ta.Center }, { name: "DIMSD1", code: 281, defaultValue: 0 }, { name: "DIMSD2", code: 282, defaultValue: 0 }, { name: "DIMTOLJ", code: 283, defaultValue: Da.Center }, { name: "DIMTZIN", code: 284, defaultValue: me.Trailing, defaultValueImperial: me.Feet }, { name: "DIMALTZ", code: 285, defaultValue: me.Trailing }, { name: "DIMALTTZ", code: 286, defaultValue: me.Trailing }, { name: "DIMFIT", code: 287 }, { name: "DIMUPT", code: 288, defaultValue: 0 }, { name: "DIMATFIT", code: 289, defaultValue: 3 }, { name: "DIMTXSTY", code: 340 }, { name: "DIMLDRBLK", code: 341 }, { name: "DIMBLK", code: 342 }, { name: "DIMBLK1", code: 343 }, { name: "DIMBLK2", code: 344 }, { name: "DIMLWD", code: 371, defaultValue: -2 }, { name: "DIMLWD", code: 372, defaultValue: -2 }], Kn = d([...Xn.map((e) => ({ ...e, parser: a })), { code: 70, name: "standardFlag", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, { code: 105, name: "handle", parser: a }, ...fe.filter((e) => e.code !== 5)]), zn = d([{ code: 347, name: "materialObjectId", parser: a }, { code: 390, name: "plotStyleNameObjectId", parser: a }, { code: 370, name: "lineweight", parser: a }, { code: 290, name: "isPlotting", parser: f }, { code: 6, name: "lineType", parser: a }, { code: 62, name: "colorIndex", parser: a }, { code: 70, name: "standardFlag", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...fe]);
(J = {})[J.NONE = 0] = "NONE", J[J.AbsoluteRotation = 1] = "AbsoluteRotation", J[J.TextEmbedded = 2] = "TextEmbedded", J[J.ShapeEmbedded = 4] = "ShapeEmbedded";
let Zn = d([{ code: 9, name: "text", parser: a }, { code: 45, name: "offsetY", parser: a }, { code: 44, name: "offsetX", parser: a }, { code: 50, name: "rotation", parser: a }, { code: 46, name: "scale", parser: a }, { code: 340, name: "styleObjectId", parser: a }, { code: 75, name: "shapeNumber", parser: a }, { code: 74, name: "elementTypeFlag", parser: a }, { code: 49, name: "elementLength", parser: a }], { elementTypeFlag: 0, elementLength: 0 }), Jn = d([{ code: 49, name: "pattern", parser(e, r) {
  let n = {};
  return Zn(e, r, n), n;
}, isMultiple: !0 }, { code: 40, name: "totalPatternLength", parser: a }, { code: 73, name: "numberOfLineTypes", parser: a }, { code: 72, parser: a }, { code: 3, name: "description", parser: a }, { code: 70, name: "standardFlag", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...fe]), $n = d([{ code: 1e3, name: "extendedFont", parser: a }, { code: 1001 }, { code: 4, name: "bigFont", parser: a }, { code: 3, name: "font", parser: a }, { code: 42, name: "lastHeight", parser: a }, { code: 71, name: "textGenerationFlag", parser: a }, { code: 50, name: "obliqueAngle", parser: a }, { code: 41, name: "widthFactor", parser: a }, { code: 40, name: "fixedTextHeight", parser: a }, { code: 70, name: "standardFlag", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...fe]), qn = d([{ code: [63, 421, 431], name: "ambientColor", parser: a }, { code: 142, name: "contrast", parser: a }, { code: 141, name: "brightness", parser: a }, { code: 282, name: "defaultLightingType", parser: a }, { code: 292, name: "isDefaultLightingOn", parser: f }, { code: 348, name: "visualStyleObjectId", parser: a }, { code: 333, name: "shadePlotObjectId", parser: a }, { code: 332, name: "backgroundObjectId", parser: a }, { code: 61, name: "majorGridLines", parser: a }, { code: 170, name: "shadePlotSetting", parser: a }, { code: 146, name: "elevation", parser: a }, { code: 79, name: "orthographicType", parser: a }, { code: 112, name: "ucsYAxis", parser: c }, { code: 111, name: "ucsXAxis", parser: c }, { code: 110, name: "ucsOrigin", parser: c }, { code: 74, name: "ucsIconSetting", parser: a }, { code: 71, name: "viewMode", parser: a }, { code: 281, name: "renderMode", parser: a }, { code: 1, name: "styleSheet", parser: a }, { code: [331, 441], name: "frozenLayers", parser: a, isMultiple: !0 }, { code: 72, name: "circleSides", parser: a }, { code: 51, name: "viewTwistAngle", parser: a }, { code: 50, name: "snapRotationAngle", parser: a }, { code: 45, name: "viewHeight", parser: a }, { code: 44, name: "backClippingPlane", parser: a }, { code: 43, name: "frontClippingPlane", parser: a }, { code: 42, name: "lensLength", parser: a }, { code: 17, name: "viewTarget", parser: c }, { code: 16, name: "viewDirectionFromTarget", parser: c }, { code: 15, name: "gridSpacing", parser: c }, { code: 14, name: "snapSpacing", parser: c }, { code: 13, name: "snapBasePoint", parser: c }, { code: 12, name: "center", parser: c }, { code: 11, name: "upperRightCorner", parser: c }, { code: 10, name: "lowerLeftCorner", parser: c }, { code: 70, name: "standardFlag", parser: a }, { code: 2, name: "name", parser: a }, { code: 100, name: "subclassMarker", parser: a }, ...fe]), Qn = { BLOCK_RECORD: jn, DIMSTYLE: Kn, LAYER: zn, LTYPE: Jn, STYLE: $n, VPORT: qn }, et = d([{ code: 70, name: "maxNumberOfEntries", parser: a }, { code: 100, name: "subclassMarker", parser: a }, { code: 330, name: "ownerObjectId", parser: a }, { code: 102 }, { code: 360, isMultiple: !0 }, { code: 102 }, { code: 5, name: "handle", parser: a }, { code: 2, name: "name", parser: a }]);
function rt(e, r) {
  var t;
  let n = {};
  for (; !u(e, 0, "EOF") && !u(e, 0, "ENDSEC"); ) {
    if (u(e, 0, "TABLE")) {
      e = r.next();
      let o = { entries: [] };
      et(e, r, o), n[o.name] = o;
    }
    if (u(e, 0) && !u(e, 0, "ENDTAB")) {
      let o = e.value;
      e = r.next();
      let s = Qn[o];
      if (!s) {
        r.debug && console.warn(`parseTable: Invalid table name '${o}'`), e = r.next();
        continue;
      }
      let i = {};
      s(e, r, i), (t = n[o]) == null || t.entries.push(i);
    }
    e = r.next();
  }
  return n;
}
function Me(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
class ir {
  next() {
    if (!this.hasNext()) return this._eof ? this.debug && console.warn("Cannot call 'next' after EOF group has been read") : this.debug && console.warn("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]), { code: 0, value: "EOF" };
    let r = parseInt(this._data[this._pointer++], 10), n = lr(r, this._data[this._pointer++], this.debug), t = { code: r, value: n };
    return u(t, 0, "EOF") && (this._eof = !0), this.lastReadGroup = t, t;
  }
  peek() {
    if (!this.hasNext())
      throw this._eof ? Error("Cannot call 'next' after EOF group has been read") : Error("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]);
    let r = { code: parseInt(this._data[this._pointer]), value: 0 };
    return r.value = lr(r.code, this._data[this._pointer + 1], this.debug), r;
  }
  rewind(r) {
    r = r || 1, this._pointer = this._pointer - 2 * r;
  }
  hasNext() {
    return !this._eof && !(this._pointer > this._data.length - 2);
  }
  isEOF() {
    return this._eof;
  }
  constructor(r, n = !1) {
    Me(this, "_data", void 0), Me(this, "debug", void 0), Me(this, "_pointer", void 0), Me(this, "_eof", void 0), Me(this, "lastReadGroup", void 0), this._data = r, this.debug = n, this.lastReadGroup = { code: 0, value: 0 }, this._pointer = 0, this._eof = !1;
  }
}
function lr(e, r, n = !1) {
  return e <= 9 ? r : e >= 10 && e <= 59 ? parseFloat(r.trim()) : e >= 60 && e <= 99 ? parseInt(r.trim()) : e >= 100 && e <= 109 ? r : e >= 110 && e <= 149 ? parseFloat(r.trim()) : e >= 160 && e <= 179 ? parseInt(r.trim()) : e >= 210 && e <= 239 ? parseFloat(r.trim()) : e >= 270 && e <= 289 ? parseInt(r.trim()) : e >= 290 && e <= 299 ? function(t) {
    if (t === "0") return !1;
    if (t === "1") return !0;
    throw TypeError("String '" + t + "' cannot be cast to Boolean type");
  }(r.trim()) : e >= 300 && e <= 369 ? r : e >= 370 && e <= 389 ? parseInt(r.trim()) : e >= 390 && e <= 399 ? r : e >= 400 && e <= 409 ? parseInt(r.trim()) : e >= 410 && e <= 419 ? r : e >= 420 && e <= 429 ? parseInt(r.trim()) : e >= 430 && e <= 439 ? r : e >= 440 && e <= 459 ? parseInt(r.trim()) : e >= 460 && e <= 469 ? parseFloat(r.trim()) : e >= 470 && e <= 481 || e === 999 || e >= 1e3 && e <= 1009 ? r : e >= 1010 && e <= 1059 ? parseFloat(r.trim()) : e >= 1060 && e <= 1071 ? parseInt(r.trim()) : (n && console.warn("WARNING: Group code does not have a defined type: %j", { code: e, value: r }), r);
}
function er(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
class at {
  constructor() {
    er(this, "encoding", "utf-8"), er(this, "encodingFailureFatal", !1);
  }
}
class nt extends EventTarget {
  parseSync(r, n = !1) {
    let t = new ir(r.split(/\r\n|\r|\n/g), n);
    if (!t.hasNext()) throw Error("Empty file");
    return this.parseAll(t);
  }
  parseStream(r) {
    let n = "", t = this;
    return new Promise((o, s) => {
      r.on("data", (i) => {
        n += i;
      }), r.on("end", () => {
        try {
          let i = n.split(/\r\n|\r|\n/g), g = new ir(i);
          if (!g.hasNext()) throw Error("Empty file");
          o(t.parseAll(g));
        } catch (i) {
          s(i);
        }
      }), r.on("error", (i) => {
        s(i);
      });
    });
  }
  async parseFromUrl(r, n) {
    let t = await fetch(r, n);
    if (!t.body) return null;
    let o = t.body.getReader(), s = "";
    for (; ; ) {
      let { done: i, value: g } = await o.read();
      if (i) {
        s += this._decoder.decode(new ArrayBuffer(0), { stream: !1 });
        break;
      }
      s += this._decoder.decode(g, { stream: !0 });
    }
    return this.parseSync(s);
  }
  parseAll(r) {
    let n = { header: {}, blocks: {}, entities: [], tables: {}, objects: { byName: {}, byTree: void 0 } }, t = r.next();
    for (; !u(t, 0, "EOF"); ) u(t, 0, "SECTION") && (u(t = r.next(), 2, "HEADER") ? (t = r.next(), n.header = Vn(t, r)) : u(t, 2, "BLOCKS") ? (t = r.next(), n.blocks = Fn(t, r)) : u(t, 2, "ENTITIES") ? (t = r.next(), n.entities = Ia(t, r)) : u(t, 2, "TABLES") ? (t = r.next(), n.tables = rt(t, r)) : u(t, 2, "OBJECTS") && (t = r.next(), n.objects = Yn(t, r))), t = r.next();
    return n;
  }
  constructor(r = new at()) {
    super(), er(this, "_decoder", void 0), this._decoder = new TextDecoder(r.encoding, { fatal: r.encodingFailureFatal });
  }
}
class tt {
  constructor() {
    this.setupMessageHandler();
  }
  /**
   * Set up message handler - called automatically
   */
  setupMessageHandler() {
    self.onmessage = async (r) => {
      const { id: n, input: t } = r.data;
      try {
        const o = await this.executeTask(t);
        this.sendResponse(n, !0, o);
      } catch (o) {
        this.sendResponse(
          n,
          !1,
          void 0,
          o instanceof Error ? o.message : String(o)
        );
      }
    };
  }
  /**
   * Send response back to main thread
   */
  sendResponse(r, n, t, o) {
    const s = {
      id: r,
      success: n,
      data: t,
      error: o
    };
    self.postMessage(s);
  }
}
class ot extends tt {
  async executeTask(r) {
    return new nt().parseSync(r);
  }
}
new ot();
