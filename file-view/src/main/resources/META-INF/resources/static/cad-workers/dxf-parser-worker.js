var A, Ce, S, y, ke, j, fe, K, C, Z, Y, Ie, Ee, be, R, J, _e, we, he, xe, Re, Fe, Pe, F, $, T, Oe, Ve, u, k, Be, _, Ue, q, h, Ge, Q, Te, ir, lr, X, He, ge, P, ee, re, ae, We, je, ne, Se, ve, dr, Ye, Ne, te, ye, D, oe, V, pr, L, ur, se, B, Ae, Xe, De, U, ce, G, ie, mr, Le, H;
(A = {})[A.None = 0] = "None", A[A.Anonymous = 1] = "Anonymous", A[A.NonConstant = 2] = "NonConstant", A[A.Xref = 4] = "Xref", A[A.XrefOverlay = 8] = "XrefOverlay", A[A.ExternallyDependent = 16] = "ExternallyDependent", A[A.ResolvedOrDependent = 32] = "ResolvedOrDependent", A[A.ReferencedXref = 64] = "ReferencedXref";
(Ce = {})[Ce.BYBLOCK = 0] = "BYBLOCK", Ce[Ce.BYLAYER = 256] = "BYLAYER";
(S = {})[S.Rotated = 0] = "Rotated", S[S.Aligned = 1] = "Aligned", S[S.Angular = 2] = "Angular", S[S.Diameter = 3] = "Diameter", S[S.Radius = 4] = "Radius", S[S.Angular3Point = 5] = "Angular3Point", S[S.Ordinate = 6] = "Ordinate", S[S.ReferenceIsExclusive = 32] = "ReferenceIsExclusive", S[S.IsOrdinateXTypeFlag = 64] = "IsOrdinateXTypeFlag", S[S.IsCustomTextPositionFlag = 128] = "IsCustomTextPositionFlag";
(y = {})[y.TopLeft = 1] = "TopLeft", y[y.TopCenter = 2] = "TopCenter", y[y.TopRight = 3] = "TopRight", y[y.MiddleLeft = 4] = "MiddleLeft", y[y.MiddleCenter = 5] = "MiddleCenter", y[y.MiddleRight = 6] = "MiddleRight", y[y.BottomLeft = 7] = "BottomLeft", y[y.BottomCenter = 8] = "BottomCenter", y[y.BottomRight = 9] = "BottomRight";
(ke = {})[ke.AtLeast = 1] = "AtLeast", ke[ke.Exact = 2] = "Exact";
var Or = ((j = {})[j.Center = 0] = "Center", j[j.Above = 1] = "Above", j[j.Outside = 2] = "Outside", j[j.JIS = 3] = "JIS", j[j.Below = 4] = "Below", j);
(fe = {})[fe.WithDimension = 0] = "WithDimension", fe[fe.AddLeader = 1] = "AddLeader", fe[fe.Independent = 2] = "Independent";
(K = {})[K.BothOutside = 0] = "BothOutside", K[K.ArrowFirst = 1] = "ArrowFirst", K[K.TextFirst = 2] = "TextFirst", K[K.Auto = 3] = "Auto";
var Me = ((C = {})[C.Feet = 0] = "Feet", C[C.None = 1] = "None", C[C.Inch = 2] = "Inch", C[C.FeetAndInch = 3] = "FeetAndInch", C[C.Leading = 4] = "Leading", C[C.Trailing = 8] = "Trailing", C[C.LeadingAndTrailing = 12] = "LeadingAndTrailing", C), Wa = ((Z = {})[Z.None = 0] = "None", Z[Z.Leading = 1] = "Leading", Z[Z.Trailing = 2] = "Trailing", Z[Z.LeadingAndTrailing = 3] = "LeadingAndTrailing", Z), ja = ((Y = {})[Y.Center = 0] = "Center", Y[Y.First = 1] = "First", Y[Y.Second = 2] = "Second", Y[Y.OverFirst = 3] = "OverFirst", Y[Y.OverSecond = 4] = "OverSecond", Y), Ya = ((Ie = {})[Ie.Bottom = 0] = "Bottom", Ie[Ie.Center = 1] = "Center", Ie[Ie.Top = 2] = "Top", Ie);
(Ee = {})[Ee.None = 0] = "None", Ee[Ee.UseDrawingBackground = 1] = "UseDrawingBackground", Ee[Ee.Custom = 2] = "Custom";
(be = {})[be.Horizontal = 0] = "Horizontal", be[be.Diagonal = 1] = "Diagonal", be[be.NotStacked = 2] = "NotStacked";
(R = {})[R.Scientific = 1] = "Scientific", R[R.Decimal = 2] = "Decimal", R[R.Engineering = 3] = "Engineering", R[R.Architectural = 4] = "Architectural", R[R.Fractional = 5] = "Fractional", R[R.WindowDesktop = 6] = "WindowDesktop";
(J = {})[J.Decimal = 0] = "Decimal", J[J.DegreesMinutesSecond = 1] = "DegreesMinutesSecond", J[J.Gradian = 2] = "Gradian", J[J.Radian = 3] = "Radian";
(_e = {})[_e.PatternFill = 0] = "PatternFill", _e[_e.SolidFill = 1] = "SolidFill";
(we = {})[we.NonAssociative = 0] = "NonAssociative", we[we.Associative = 1] = "Associative";
(he = {})[he.Normal = 0] = "Normal", he[he.Outer = 1] = "Outer", he[he.Ignore = 2] = "Ignore";
(xe = {})[xe.UserDefined = 0] = "UserDefined", xe[xe.Predefined = 1] = "Predefined", xe[xe.Custom = 2] = "Custom";
(Re = {})[Re.NotAnnotated = 0] = "NotAnnotated", Re[Re.Annotated = 1] = "Annotated";
(Fe = {})[Fe.Solid = 0] = "Solid", Fe[Fe.Gradient = 1] = "Gradient";
(Pe = {})[Pe.TwoColor = 0] = "TwoColor", Pe[Pe.OneColor = 1] = "OneColor";
var Xa = ((F = {})[F.Default = 0] = "Default", F[F.External = 1] = "External", F[F.Polyline = 2] = "Polyline", F[F.Derived = 4] = "Derived", F[F.Textbox = 8] = "Textbox", F[F.Outermost = 16] = "Outermost", F), Je = (($ = {})[$.Line = 1] = "Line", $[$.Circular = 2] = "Circular", $[$.Elliptic = 3] = "Elliptic", $[$.Spline = 4] = "Spline", $), za = ((T = {})[T.Off = 0] = "Off", T[T.Solid = 1] = "Solid", T[T.Dashed = 2] = "Dashed", T[T.Dotted = 3] = "Dotted", T[T.ShotDash = 4] = "ShotDash", T[T.MediumDash = 5] = "MediumDash", T[T.LongDash = 6] = "LongDash", T[T.DoubleShortDash = 7] = "DoubleShortDash", T[T.DoubleMediumDash = 8] = "DoubleMediumDash", T[T.DoubleLongDash = 9] = "DoubleLongDash", T[T.DoubleMediumLongDash = 10] = "DoubleMediumLongDash", T[T.SparseDot = 11] = "SparseDot", T);
za.Off;
(Oe = {})[Oe.Standard = -3] = "Standard", Oe[Oe.ByLayer = -2] = "ByLayer", Oe[Oe.ByBlock = -1] = "ByBlock";
(Ve = {})[Ve.English = 0] = "English", Ve[Ve.Metric = 1] = "Metric";
(u = {})[u.PERSPECTIVE_MODE = 1] = "PERSPECTIVE_MODE", u[u.FRONT_CLIPPING = 2] = "FRONT_CLIPPING", u[u.BACK_CLIPPING = 4] = "BACK_CLIPPING", u[u.UCS_FOLLOW = 8] = "UCS_FOLLOW", u[u.FRONT_CLIP_NOT_AT_EYE = 16] = "FRONT_CLIP_NOT_AT_EYE", u[u.UCS_ICON_VISIBILITY = 32] = "UCS_ICON_VISIBILITY", u[u.UCS_ICON_AT_ORIGIN = 64] = "UCS_ICON_AT_ORIGIN", u[u.FAST_ZOOM = 128] = "FAST_ZOOM", u[u.SNAP_MODE = 256] = "SNAP_MODE", u[u.GRID_MODE = 512] = "GRID_MODE", u[u.ISOMETRIC_SNAP_STYLE = 1024] = "ISOMETRIC_SNAP_STYLE", u[u.HIDE_PLOT_MODE = 2048] = "HIDE_PLOT_MODE", u[u.K_ISO_PAIR_TOP = 4096] = "K_ISO_PAIR_TOP", u[u.K_ISO_PAIR_RIGHT = 8192] = "K_ISO_PAIR_RIGHT", u[u.VIEWPORT_ZOOM_LOCKING = 16384] = "VIEWPORT_ZOOM_LOCKING", u[u.UNUSED = 32768] = "UNUSED", u[u.NON_RECTANGULAR_CLIPPING = 65536] = "NON_RECTANGULAR_CLIPPING", u[u.VIEWPORT_OFF = 131072] = "VIEWPORT_OFF", u[u.GRID_BEYOND_DRAWING_LIMITS = 262144] = "GRID_BEYOND_DRAWING_LIMITS", u[u.ADAPTIVE_GRID_DISPLAY = 524288] = "ADAPTIVE_GRID_DISPLAY", u[u.SUBDIVISION_BELOW_SPACING = 1048576] = "SUBDIVISION_BELOW_SPACING", u[u.GRID_FOLLOWS_WORKPLANE = 2097152] = "GRID_FOLLOWS_WORKPLANE";
(k = {})[k.OPTIMIZED_2D = 0] = "OPTIMIZED_2D", k[k.WIREFRAME = 1] = "WIREFRAME", k[k.HIDDEN_LINE = 2] = "HIDDEN_LINE", k[k.FLAT_SHADED = 3] = "FLAT_SHADED", k[k.GOURAUD_SHADED = 4] = "GOURAUD_SHADED", k[k.FLAT_SHADED_WITH_WIREFRAME = 5] = "FLAT_SHADED_WITH_WIREFRAME", k[k.GOURAUD_SHADED_WITH_WIREFRAME = 6] = "GOURAUD_SHADED_WITH_WIREFRAME";
(Be = {})[Be.UCS_UNCHANGED = 0] = "UCS_UNCHANGED", Be[Be.HAS_OWN_UCS = 1] = "HAS_OWN_UCS";
(_ = {})[_.NON_ORTHOGRAPHIC = 0] = "NON_ORTHOGRAPHIC", _[_.TOP = 1] = "TOP", _[_.BOTTOM = 2] = "BOTTOM", _[_.FRONT = 3] = "FRONT", _[_.BACK = 4] = "BACK", _[_.LEFT = 5] = "LEFT", _[_.RIGHT = 6] = "RIGHT";
(Ue = {})[Ue.ONE_DISTANT_LIGHT = 0] = "ONE_DISTANT_LIGHT", Ue[Ue.TWO_DISTANT_LIGHTS = 1] = "TWO_DISTANT_LIGHTS";
(q = {})[q.ByLayer = 0] = "ByLayer", q[q.ByBlock = 1] = "ByBlock", q[q.ByDictionaryDefault = 2] = "ByDictionaryDefault", q[q.ByObject = 3] = "ByObject";
(h = {})[h.NotAllowed = 0] = "NotAllowed", h[h.AllowErase = 1] = "AllowErase", h[h.AllowTransform = 2] = "AllowTransform", h[h.AllowChangeColor = 4] = "AllowChangeColor", h[h.AllowChangeLayer = 8] = "AllowChangeLayer", h[h.AllowChangeLinetype = 16] = "AllowChangeLinetype", h[h.AllowChangeLinetypeScale = 32] = "AllowChangeLinetypeScale", h[h.AllowChangeVisibility = 64] = "AllowChangeVisibility", h[h.AllowClone = 128] = "AllowClone", h[h.AllowChangeLineweight = 256] = "AllowChangeLineweight", h[h.AllowChangePlotStyleName = 512] = "AllowChangePlotStyleName", h[h.AllowAllExceptClone = 895] = "AllowAllExceptClone", h[h.AllowAll = 1023] = "AllowAll", h[h.DisableProxyWarning = 1024] = "DisableProxyWarning", h[h.R13FormatProxy = 32768] = "R13FormatProxy";
function m(e, a, n) {
  return e.code === a && (n == null || e.value === n);
}
function ue(e) {
  let a = {};
  e.rewind();
  let n = e.next(), t = n.code;
  if (a.x = n.value, (n = e.next()).code !== t + 10) throw Error("Expected code for point value to be 20 but got " + n.code + ".");
  return a.y = n.value, (n = e.next()).code !== t + 20 ? e.rewind() : a.z = n.value, a;
}
let Ze = Symbol();
function l(e, a) {
  return (n, t, s) => {
    let c = function(d, x = !1) {
      return d.reduce((E, b) => {
        b.pushContext && E.push({});
        let g = E[E.length - 1];
        for (let O of typeof b.code == "number" ? [b.code] : b.code) {
          let v = g[O] ?? (g[O] = []);
          b.isMultiple && v.length, v.push(b);
        }
        return E;
      }, [{}]);
    }(e, t.debug), p = !1, f = c.length - 1;
    for (; !m(n, 0, "EOF"); ) {
      let d = function(w, W, me) {
        return w.find((cr, Ha) => {
          var xr;
          return Ha >= me && ((xr = cr[W]) == null ? void 0 : xr.length);
        });
      }(c, n.code, f), x = d == null ? void 0 : d[n.code], E = x == null ? void 0 : x[x.length - 1];
      if (!d || !E) {
        t.rewind();
        break;
      }
      E.isMultiple || d[n.code].pop();
      let { name: b, parser: g, isMultiple: O, isReducible: v } = E, N = g == null ? void 0 : g(n, t, s);
      if (N === Ze) {
        t.rewind();
        break;
      }
      if (b) {
        let [w, W] = Ka(s, b);
        O && !v ? (Object.prototype.hasOwnProperty.call(w, W) || (w[W] = []), w[W].push(N)) : w[W] = N;
      }
      E.pushContext && (f -= 1), p = !0, n = t.next();
    }
    return a && Object.setPrototypeOf(s, a), p;
  };
}
function Ka(e, a) {
  let n = a.split(".");
  if (!n.length) throw Error("[parserGenerator::getObjectByPath] Invalid empty path");
  let t = e;
  for (let s = 0; s < n.length - 1; ++s) {
    let c = fr(n[s]), p = fr(n[s + 1]);
    Object.prototype.hasOwnProperty.call(t, c) || (typeof p == "number" ? t[c] = [] : t[c] = {}), t = t[c];
  }
  return [t, fr(n[n.length - 1])];
}
function fr(e) {
  let a = Number.parseInt(e);
  return Number.isNaN(a) ? e : a;
}
function r({ value: e }) {
  return e;
}
function o(e, a) {
  return ue(a);
}
function i({ value: e }) {
  return !!e;
}
function Za({ value: e }) {
  return e.trim();
}
let Ja = [{ code: 281, name: "isEntity", parser: i }, { code: 280, name: "wasProxy", parser: i }, { code: 91, name: "instanceCount", parser: r }, { code: 90, name: "proxyFlag", parser: r }, { code: 3, name: "appName", parser: r }, { code: 2, name: "cppClassName", parser: r }, { code: 1, name: "name", parser: r }], $a = l(Ja), qa = [{ code: 0, name: "classes", isMultiple: !0, parser(e, a) {
  if (e.value !== "CLASS") return Ze;
  e = a.next();
  let n = {};
  return $a(e, a, n), n;
} }], Qa = l(qa);
(Ge = {})[Ge.RayTrace = 0] = "RayTrace", Ge[Ge.ShadowMap = 1] = "ShadowMap";
function z(e, a, n) {
  for (; m(e, 102); ) {
    var t;
    let s = e.value;
    if (e = a.next(), !s.startsWith("{")) {
      a.debug, function(p, f) {
        for (; !m(p, 102) && !m(p, 0, "EOF"); ) p = f.next();
      }(e, a), e = a.next();
      continue;
    }
    let c = s.slice(1).trim();
    n.extensions ?? (n.extensions = {}), (t = n.extensions)[c] ?? (t[c] = []), function(p, f, d) {
      for (; !m(p, 102, "}") && !m(p, 0, "EOF"); ) d.push(p), p = f.next();
    }(e, a, n.extensions[c]), e = a.next();
  }
  a.rewind();
}
let en = [{ code: 1001, name: "xdata", isMultiple: !0, parser: yr }], rn = /* @__PURE__ */ new Set([1010, 1011, 1012, 1013]);
function yr(e, a) {
  var s;
  if (!m(e, 1001)) throw Error("XData must starts with code 1001");
  let n = { appName: e.value, value: [] };
  e = a.next();
  let t = [n.value];
  for (; !m(e, 0, "EOF") && !m(e, 1001) && e.code >= 1e3; ) {
    let c = t[t.length - 1];
    if (e.code === 1002) {
      e.value === "{" ? t.push([]) : (t.pop(), (s = t[t.length - 1]) == null || s.push(c)), e = a.next();
      continue;
    }
    rn.has(e.code) ? c.push(ue(a)) : c.push(e.value), e = a.next();
  }
  return a.rewind(), n;
}
(Q = {})[Q.CAST_AND_RECEIVE = 0] = "CAST_AND_RECEIVE", Q[Q.CAST = 1] = "CAST", Q[Q.RECEIVE = 2] = "RECEIVE", Q[Q.IGNORE = 3] = "IGNORE";
let I = [...en, { code: 284, name: "shadowMode", parser: r }, { code: 390, name: "plotStyleHardId", parser: r }, { code: 380, name: "plotStyleType", parser: r }, { code: 440, name: "transparency", parser: r }, { code: 430, name: "colorName", parser: r }, { code: 420, name: "color", parser: r }, { code: 310, name: "proxyEntity", isMultiple: !0, isReducible: !0, parser: (e, a, n) => (n.proxyEntity ?? "") + e.value }, { code: [92, 160], name: "proxyByte", parser: r }, { code: 60, name: "isVisible", parser: i }, { code: 48, name: "lineTypeScale", parser: r }, { code: 370, name: "lineweight", parser: r }, { code: 62, name: "colorIndex", parser: r }, { code: 347, name: "materialObjectHardId", parser: r }, { code: 6, name: "lineType", parser: r }, { code: 8, name: "layer", parser: r }, { code: 410, name: "layoutTabName", parser: r }, { code: 67, name: "isInPaperSpace", parser: i }, { code: 100 }, { code: 330, name: "ownerBlockRecordSoftId", parser: r }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 5, name: "handle", parser: r }];
function sr(e) {
  return [{ code: 3, name: e, parser: (a, n, t) => (t._code3text = (t._code3text ?? "") + a.value, t._code3text + (t._code1text ?? "")), isMultiple: !0, isReducible: !0 }, { code: 1, name: e, parser: (a, n, t) => (t._code1text = a.value, (t._code3text ?? "") + t._code1text) }];
}
function Ar(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let an = { extrusionDirection: { x: 0, y: 0, z: 1 } }, nn = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 51, name: "endAngle", parser: r }, { code: 50, name: "startAngle", parser: r }, { code: 100, name: "subclassMarker", parser: r }, { code: 40, name: "radius", parser: r }, { code: 10, name: "center", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 100 }, ...I];
class Dr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Ar(this, "parser", l(nn, an));
  }
}
Ar(Dr, "ForEntityName", "ARC");
(Te = {})[Te.BeforeText = 0] = "BeforeText", Te[Te.AboveText = 1] = "AboveText", Te[Te.None = 2] = "None";
let br = [{ name: "DIMPOST", code: 3 }, { name: "DIMAPOST", code: 4, defaultValue: "" }, { name: "DIMBLK_OBSOLETE", code: 5 }, { name: "DIMBLK1_OBSOLETE", code: 6 }, { name: "DIMBLK2_OBSOLETE", code: 7 }, { name: "DIMSCALE", code: 40, defaultValue: 1 }, { name: "DIMASZ", code: 41, defaultValue: 0.25 }, { name: "DIMEXO", code: 42, defaultValue: 0.625, defaultValueImperial: 0.0625 }, { name: "DIMDLI", code: 43, defaultValue: 3.75, defaultValueImperial: 0.38 }, { name: "DIMEXE", code: 44, defaultValue: 2.25, defaultValueImperial: 0.28 }, { name: "DIMRND", code: 45, defaultValue: 0 }, { name: "DIMDLE", code: 46, defaultValue: 0 }, { name: "DIMTP", code: 47, defaultValue: 0 }, { name: "DIMTM", code: 48, defaultValue: 0 }, { name: "DIMFXL", code: 49, defaultValue: 1 }, { name: "DIMJOGANG", code: 50, defaultValue: 45 }, { name: "DIMTFILL", code: 69, defaultValue: 0 }, { name: "DIMTFILLCLR", code: 70, defaultValue: 0 }, { name: "DIMTOL", code: 71, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMLIM", code: 72, defaultValue: 0 }, { name: "DIMTIH", code: 73, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMTOH", code: 74, defaultValue: 0, defaultValueImperial: 1 }, { name: "DIMSE1", code: 75, defaultValue: 0 }, { name: "DIMSE2", code: 76, defaultValue: 0 }, { name: "DIMTAD", code: 77, defaultValue: Or.Above, defaultValueImperial: Or.Center }, { name: "DIMZIN", code: 78, defaultValue: Me.Trailing, defaultValueImperial: Me.Feet }, { name: "DIMAZIN", code: 79, defaultValue: Wa.None }, { name: "DIMARCSYM", code: 90, defaultValue: 0 }, { name: "DIMTXT", code: 140, defaultValue: 2.5, defaultValueImperial: 0.28 }, { name: "DIMCEN", code: 141, defaultValue: 2.5, defaultValueImperial: 0.09 }, { name: "DIMTSZ", code: 142, defaultValue: 0 }, { name: "DIMALTF", code: 143, defaultValue: 25.4 }, { name: "DIMLFAC", code: 144, defaultValue: 1 }, { name: "DIMTVP", code: 145, defaultValue: 0 }, { name: "DIMTFAC", code: 146, defaultValue: 1 }, { name: "DIMGAP", code: 147, defaultValue: 0.625, defaultValueImperial: 0.09 }, { name: "DIMALTRND", code: 148, defaultValue: 0 }, { name: "DIMALT", code: 170, defaultValue: 0 }, { name: "DIMALTD", code: 171, defaultValue: 3, defaultValueImperial: 2 }, { name: "DIMTOFL", code: 172, defaultValue: 1, defaultValueImperial: 0 }, { name: "DIMSAH", code: 173, defaultValue: 0 }, { name: "DIMTIX", code: 174, defaultValue: 0 }, { name: "DIMSOXD", code: 175, defaultValue: 0 }, { name: "DIMCLRD", code: 176, defaultValue: 0 }, { name: "DIMCLRE", code: 177, defaultValue: 0 }, { name: "DIMCLRT", code: 178, defaultValue: 0 }, { name: "DIMADEC", code: 179, defaultValue: 0 }, { name: "DIMUNIT", code: 270 }, { name: "DIMDEC", code: 271, defaultValue: 2, defaultValueImperial: 4 }, { name: "DIMTDEC", code: 272, defaultValue: 2, defaultValueImperial: 4 }, { name: "DIMALTU", code: 273, defaultValue: 2 }, { name: "DIMALTTD", code: 274, defaultValue: 3, defaultValueImperial: 2 }, { name: "DIMAUNIT", code: 275, defaultValue: 0 }, { name: "DIMFRAC", code: 276, defaultValue: 0 }, { name: "DIMLUNIT", code: 277, defaultValue: 2 }, { name: "DIMDSEP", code: 278, defaultValue: 44, defaultValueImperial: 46 }, { name: "DIMTMOVE", code: 279, defaultValue: 0 }, { name: "DIMJUST", code: 280, defaultValue: ja.Center }, { name: "DIMSD1", code: 281, defaultValue: 0 }, { name: "DIMSD2", code: 282, defaultValue: 0 }, { name: "DIMTOLJ", code: 283, defaultValue: Ya.Center }, { name: "DIMTZIN", code: 284, defaultValue: Me.Trailing, defaultValueImperial: Me.Feet }, { name: "DIMALTZ", code: 285, defaultValue: Me.Trailing }, { name: "DIMALTTZ", code: 286, defaultValue: Me.Trailing }, { name: "DIMFIT", code: 287 }, { name: "DIMUPT", code: 288, defaultValue: 0 }, { name: "DIMATFIT", code: 289, defaultValue: 3 }, { name: "DIMFXLON", code: 290, defaultValue: 0 }, { name: "DIMTXTDIRECTION", code: 294, defaultValue: 0 }, { name: "DIMTXSTY", code: 340, defaultValue: "Standard" }, { name: "DIMLDRBLK", code: 341, defaultValue: "" }, { name: "DIMBLK", code: 342, defaultValue: "" }, { name: "DIMBLK1", code: 343, defaultValue: "" }, { name: "DIMBLK2", code: 344, defaultValue: "" }, { name: "DIMLTYPE", code: 345, defaultValue: "" }, { name: "DIMLTEX1", code: 346, defaultValue: "" }, { name: "DIMLTEX2", code: 347, defaultValue: "" }, { name: "DIMLWD", code: 371, defaultValue: -2 }, { name: "DIMLWE", code: 372, defaultValue: -2 }], Lr = [{ code: 3, name: "styleName", parser: r }, { code: 210, name: "extrusionDirection", parser: o }, { code: 51, name: "ocsRotation", parser: r }, { code: 53, name: "textRotation", parser: r }, { code: 1, name: "text", parser: r }, { code: 42, name: "measurement", parser: r }, { code: 72, name: "textLineSpacingStyle", parser: r }, { code: 71, name: "attachmentPoint", parser: r }, { code: 70, name: "dimensionType", parser: r }, { code: 11, name: "textPoint", parser: o }, { code: 10, name: "definitionPoint", parser: o }, { code: 2, name: "name", parser: r }, { code: 280, name: "version", parser: r }, { code: 100 }], tn = [{ code: 100 }, { code: 52, name: "obliqueAngle", parser: r }, { code: 50, name: "rotationAngle", parser: r }, { code: 14, name: "subDefinitionPoint2", parser: o }, { code: 13, name: "subDefinitionPoint1", parser: o }, { code: 12, name: "insertionPoint", parser: o }, { code: 100, name: "subclassMarker", parser: r }], on = [{ code: 16, name: "arcPoint", parser: o }, { code: 15, name: "centerPoint", parser: o }, { code: 14, name: "subDefinitionPoint2", parser: o }, { code: 13, name: "subDefinitionPoint1", parser: o }, { code: 100, name: "subclassMarker", parser: r }], sn = [{ code: 14, name: "subDefinitionPoint2", parser: o }, { code: 13, name: "subDefinitionPoint1", parser: o }, { code: 100, name: "subclassMarker", parser: r }], cn = [{ code: 40, name: "leaderLength", parser: r }, { code: 15, name: "subDefinitionPoint", parser: o }, { code: 100, name: "subclassMarker", parser: r }], ln = [{ code: 100, parser(e, a, n) {
  let t = function(s) {
    switch (s) {
      case "AcDbAlignedDimension":
        return l(tn);
      case "AcDb3PointAngularDimension":
      case "AcDb2LineAngularDimension":
        return l(on);
      case "AcDbOrdinateDimension":
        return l(sn);
      case "AcDbRadialDimension":
      case "AcDbDiametricDimension":
        return l(cn);
    }
    return null;
  }(e.value);
  if (!t) return Ze;
  t(e, a, n);
}, pushContext: !0 }, ...br.map((e) => ({ ...e, parser: r })), ...Lr, ...I];
class Qe {
  parseEntity(a, n) {
    let t = {};
    return l(ln)(n, a, t), t;
  }
}
(ir = "ForEntityName") in Qe ? Object.defineProperty(Qe, ir, { value: "DIMENSION", enumerable: !0, configurable: !0, writable: !0 }) : Qe[ir] = "DIMENSION";
let dn = [{ code: 73 }, { code: 17, name: "leaderEnd", parser: o }, { code: 16, name: "leaderStart", parser: o }, { code: 71, name: "hasLeader", parser: i }, { code: 41, name: "endAngle", parser: r }, { code: 40, name: "startAngle", parser: r }, { code: 70, name: "isPartial", parser: i }, { code: 15, name: "centerPoint", parser: o }, { code: 14, name: "xline2Point", parser: o }, { code: 13, name: "xline1Point", parser: o }, { code: 100, name: "subclassMarker", parser: r, pushContext: !0 }, ...br.map((e) => ({ ...e, parser: r })), ...Lr, ...I];
class er {
  parseEntity(a, n) {
    let t = {};
    return l(dn)(n, a, t), t;
  }
}
(lr = "ForEntityName") in er ? Object.defineProperty(er, lr, { value: "ARC_DIMENSION", enumerable: !0, configurable: !0, writable: !0 }) : er[lr] = "ARC_DIMENSION";
(X = {})[X.NONE = 0] = "NONE", X[X.INVISIBLE = 1] = "INVISIBLE", X[X.CONSTANT = 2] = "CONSTANT", X[X.VERIFICATION_REQUIRED = 4] = "VERIFICATION_REQUIRED", X[X.PRESET = 8] = "PRESET";
(He = {})[He.MULTILINE = 2] = "MULTILINE", He[He.CONSTANT_MULTILINE = 4] = "CONSTANT_MULTILINE";
(ge = {})[ge.NONE = 0] = "NONE", ge[ge.MIRRORED_X = 2] = "MIRRORED_X", ge[ge.MIRRORED_Y = 4] = "MIRRORED_Y";
var pn = ((P = {})[P.LEFT = 0] = "LEFT", P[P.CENTER = 1] = "CENTER", P[P.RIGHT = 2] = "RIGHT", P[P.ALIGNED = 3] = "ALIGNED", P[P.MIDDLE = 4] = "MIDDLE", P[P.FIT = 5] = "FIT", P), un = ((ee = {})[ee.BASELINE = 0] = "BASELINE", ee[ee.BOTTOM = 1] = "BOTTOM", ee[ee.MIDDLE = 2] = "MIDDLE", ee[ee.TOP = 3] = "TOP", ee);
function Mr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let Cr = { thickness: 0, rotation: 0, xScale: 1, obliqueAngle: 0, styleName: "STANDARD", generationFlag: 0, halign: pn.LEFT, valign: un.BASELINE, extrusionDirection: { x: 0, y: 0, z: 1 } }, kr = [{ code: 73, name: "valign", parser: r }, { code: 100 }, { code: 210, name: "extrusionDirection", parser: o }, { code: 11, name: "endPoint", parser: o }, { code: 72, name: "valign", parser: r }, { code: 72, name: "halign", parser: r }, { code: 71, name: "generationFlag", parser: r }, { code: 7, name: "styleName", parser: r }, { code: 51, name: "obliqueAngle", parser: r }, { code: 41, name: "xScale", parser: r }, { code: 50, name: "rotation", parser: r }, { code: 1, name: "text", parser: r }, { code: 40, name: "textHeight", parser: r }, { code: 10, name: "startPoint", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class _r {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Mr(this, "parser", l(kr, Cr));
  }
}
function wr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Mr(_r, "ForEntityName", "TEXT");
let mn = { ...Cr }, fn = [{ code: 2 }, { code: 40, name: "annotationScale", parser: r }, { code: 10, name: "alignmentPoint", parser: o }, { code: 340, name: "secondaryAttributesHardIds", isMultiple: !0, parser: r }, { code: 70, name: "numberOfSecondaryAttributes", parser: r }, { code: 70, name: "isReallyLocked", parser: i }, { code: 70, name: "mtextFlag", parser: r }, { code: 280, name: "isDuplicatedRecord", parser: i }, { code: 100 }, { code: 280, name: "isLocked", parser: i }, { code: 74, name: "valign", parser: r }, { code: 73 }, { code: 70, name: "attributeFlag", parser: r }, { code: 2, name: "tag", parser: r }, { code: 3, name: "prompt", parser: r }, { code: 280 }, { code: 100, name: "subclassMarker", parser: r }, ...kr.slice(2)];
class Rr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    wr(this, "parser", l(fn, mn));
  }
}
function In(e, a) {
  let n = {};
  for (let t of e) {
    let s = a(t);
    s != null && (n[s] ?? (n[s] = []), n[s].push(t));
  }
  return n;
}
function* or(e, a = 1 / 0, n = 1) {
  for (let t = e; t !== a; t += n) yield t;
}
function Er(e) {
  return { x: e.x ?? 0, y: e.y ?? 0, z: e.z ?? 0 };
}
wr(Rr, "ForEntityName", "ATTDEF");
var En = [0, 16711680, 16776960, 65280, 65535, 255, 16711935, 16777215, 8421504, 12632256, 16711680, 16744319, 13369344, 13395558, 10027008, 10046540, 8323072, 8339263, 4980736, 4990502, 16727808, 16752511, 13382400, 13401958, 10036736, 10051404, 8331008, 8343359, 4985600, 4992806, 16744192, 16760703, 13395456, 13408614, 10046464, 10056268, 8339200, 8347455, 4990464, 4995366, 16760576, 16768895, 13408512, 13415014, 10056192, 10061132, 8347392, 8351551, 4995328, 4997670, 16776960, 16777087, 13421568, 13421670, 10000384, 10000460, 8355584, 8355647, 5000192, 5000230, 12582656, 14679935, 10079232, 11717734, 7510016, 8755276, 6258432, 7307071, 3755008, 4344870, 8388352, 12582783, 6736896, 10079334, 5019648, 7510092, 4161280, 6258495, 2509824, 3755046, 4194048, 10485631, 3394560, 8375398, 2529280, 6264908, 2064128, 5209919, 1264640, 3099686, 65280, 8388479, 52224, 6736998, 38912, 5019724, 32512, 4161343, 19456, 2509862, 65343, 8388511, 52275, 6737023, 38950, 5019743, 32543, 4161359, 19475, 2509871, 65407, 8388543, 52326, 6737049, 38988, 5019762, 32575, 4161375, 19494, 2509881, 65471, 8388575, 52377, 6737074, 39026, 5019781, 32607, 4161391, 19513, 2509890, 65535, 8388607, 52428, 6737100, 39064, 5019800, 32639, 4161407, 19532, 2509900, 49151, 8380415, 39372, 6730444, 29336, 5014936, 24447, 4157311, 14668, 2507340, 32767, 8372223, 26316, 6724044, 19608, 5010072, 16255, 4153215, 9804, 2505036, 16383, 8364031, 13260, 6717388, 9880, 5005208, 8063, 4149119, 4940, 2502476, 255, 8355839, 204, 6710988, 152, 5000344, 127, 4145023, 76, 2500172, 4129023, 10452991, 3342540, 8349388, 2490520, 6245528, 2031743, 5193599, 1245260, 3089996, 8323327, 12550143, 6684876, 10053324, 4980888, 7490712, 4128895, 6242175, 2490444, 3745356, 12517631, 14647295, 10027212, 11691724, 7471256, 8735896, 6226047, 7290751, 3735628, 4335180, 16711935, 16744447, 13369548, 13395660, 9961624, 9981080, 8323199, 8339327, 4980812, 4990540, 16711871, 16744415, 13369497, 13395634, 9961586, 9981061, 8323167, 8339311, 4980793, 4990530, 16711807, 16744383, 13369446, 13395609, 9961548, 9981042, 8323135, 8339295, 4980774, 4990521, 16711743, 16744351, 13369395, 13395583, 9961510, 9981023, 8323103, 8339279, 4980755, 4990511, 3355443, 5987163, 8684676, 11382189, 14079702, 16777215];
function bn(e) {
  return En[e];
}
function hn(e) {
  e.rewind();
  let a = e.next();
  if (a.code !== 101) throw Error("Bad call for skipEmbeddedObject()");
  do
    a = e.next();
  while (a.code !== 0);
  e.rewind();
}
function xn(e, a, n) {
  if (m(a, 102)) return z(a, n, e), !0;
  switch (a.code) {
    case 0:
      e.type = a.value;
      break;
    case 5:
      e.handle = a.value;
      break;
    case 330:
      e.ownerBlockRecordSoftId = a.value;
      break;
    case 67:
      e.isInPaperSpace = !!a.value;
      break;
    case 8:
      e.layer = a.value;
      break;
    case 6:
      e.lineType = a.value;
      break;
    case 347:
      e.materialObjectHardId = a.value;
      break;
    case 62:
      e.colorIndex = a.value, e.color = bn(Math.abs(a.value));
      break;
    case 370:
      e.lineweight = a.value;
      break;
    case 48:
      e.lineTypeScale = a.value;
      break;
    case 60:
      e.isVisible = !!a.value;
      break;
    case 92:
      e.proxyByte = a.value;
      break;
    case 310:
      e.proxyEntity = a.value;
      break;
    case 100:
      break;
    case 420:
      e.color = a.value;
      break;
    case 430:
      e.transparency = a.value;
      break;
    case 390:
      e.plotStyleHardId = a.value;
      break;
    case 284:
      e.shadowMode = a.value;
      break;
    case 1001:
      (e.xdata ?? (e.xdata = [])).push(yr(a, n));
      break;
    default:
      return !1;
  }
  return !0;
}
function Fr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let On = { textStyle: "STANDARD", extrusionDirection: { x: 0, y: 0, z: 1 }, rotation: 0 }, rr = [{ code: 46, name: "annotationHeight", parser: r }, { code: 101, parser(e, a) {
  hn(a);
} }, { code: 50, name: "columnHeight", parser: r }, { code: 49, name: "columnGutter", parser: r }, { code: 48, name: "columnWidth", parser: r }, { code: 79, name: "columnAutoHeight", parser: r }, { code: 78, name: "columnFlowReversed", parser: r }, { code: 76, name: "columnCount", parser: r }, { code: 75, name: "columnType", parser: r }, { code: 441, name: "backgroundFillTransparency", parser: r }, { code: 63, name: "backgroundFillColor", parser: r }, { code: 45, name: "fillBoxScale", parser: r }, { code: [...or(430, 440)], name: "backgroundColor", parser: r }, { code: [...or(420, 430)], name: "backgroundColor", parser: r }, { code: 90, name: "backgroundFill", parser: r }, { code: 44, name: "lineSpacing", parser: r }, { code: 73, name: "lineSpacingStyle", parser: r }, { code: 50, name: "rotation", parser: r }, { code: 43 }, { code: 42 }, { code: 11, name: "direction", parser: o }, { code: 210, name: "extrusionDirection", parser: o }, { code: 7, name: "styleName", parser: r }, ...sr("text"), { code: 72, name: "drawingDirection", parser: r }, { code: 71, name: "attachmentPoint", parser: r }, { code: 41, name: "width", parser: r }, { code: 40, name: "height", parser: r }, { code: 10, name: "insertionPoint", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Pr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Fr(this, "parser", l(rr, On));
  }
}
function Vr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Fr(Pr, "ForEntityName", "MTEXT");
let Tn = { thickness: 0, rotation: 0, scale: 1, obliqueAngle: 0, textStyle: "STANDARD", textGenerationFlag: 0, horizontalJustification: 0, verticalJustification: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, gn = [...rr.slice(rr.findIndex(({ name: e }) => e === "columnType"), rr.findIndex(({ name: e }) => e === "subclassMarker") + 1), { code: 100 }, { code: 0, parser(e) {
  if (!m(e, 0, "MTEXT")) return Ze;
} }, { code: 2, name: "definitionTag", parser: r }, { code: 40, name: "annotationScale", parser: r }, { code: 10, name: "alignmentPoint", parser: o }, { code: 340, name: "secondaryAttributesHardId", parser: r }, { code: 70, name: "numberOfSecondaryAttributes", parser: r }, { code: 70, name: "isReallyLocked", parser: i }, { code: 70, name: "mtextFlag", parser: r }, { code: 280, name: "isDuplicatedEntriesKeep", parser: i }, { code: 100 }, { code: 280, name: "lockPositionFlag", parser: i }, { code: 210, name: "extrusionDirection", parser: o }, { code: 11, name: "alignmentPoint", parser: o }, { code: 74, name: "verticalJustification", parser: r }, { code: 72, name: "horizontalJustification", parser: r }, { code: 71, name: "textGenerationFlag", parser: r }, { code: 7, name: "textStyle", parser: r }, { code: 51, name: "obliqueAngle", parser: r }, { code: 41, name: "scale", parser: r }, { code: 50, name: "rotation", parser: r }, { code: 73 }, { code: 70, name: "attributeFlag", parser: r }, { code: 2, name: "tag", parser: r }, { code: 280 }, { code: 100, name: "subclassMarker", parser: r }, { code: 1, name: "text", parser: r }, { code: 40, name: "textHeight", parser: r }, { code: 10, name: "startPoint", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 100 }, ...I];
class Br {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Vr(this, "parser", l(gn, Tn));
  }
}
function Ur(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Vr(Br, "ForEntityName", "ATTRIB");
let Sn = [...sr("data"), { code: 70, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Gr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Ur(this, "parser", l(Sn));
  }
}
function Hr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Ur(Gr, "ForEntityName", "BODY");
let vn = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, Nn = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 40, name: "radius", parser: r }, { code: 10, name: "center", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Wr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Hr(this, "parser", l(Nn, vn));
  }
}
function jr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Hr(Wr, "ForEntityName", "CIRCLE");
let yn = { extrusionDirection: { x: 0, y: 0, z: 1 } }, An = [{ code: 42, name: "endAngle", parser: r }, { code: 41, name: "startAngle", parser: r }, { code: 40, name: "axisRatio", parser: r }, { code: 210, name: "extrusionDirection", parser: o }, { code: 11, name: "majorAxisEndPoint", parser: o }, { code: 10, name: "center", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Yr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    jr(this, "parser", l(An, yn));
  }
}
function Xr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
jr(Yr, "ForEntityName", "ELLIPSE");
let Dn = [{ code: 13, name: "vertices.3", parser: o }, { code: 12, name: "vertices.2", parser: o }, { code: 11, name: "vertices.1", parser: o }, { code: 10, name: "vertices.0", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class zr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Xr(this, "parser", l(Dn));
  }
}
Xr(zr, "ForEntityName", "3DFACE");
(re = {})[re.First = 1] = "First", re[re.Second = 2] = "Second", re[re.Third = 4] = "Third", re[re.Fourth = 8] = "Fourth";
let Kr = [{ code: 330, name: "sourceBoundaryObjects", parser: r, isMultiple: !0 }, { code: 97, name: "numberOfSourceBoundaryObjects", parser: r }], Ln = [{ code: 11, name: "end", parser: o }, { code: 10, name: "start", parser: o }], Mn = [{ code: 73, name: "isCCW", parser: i }, { code: 51, name: "endAngle", parser: r }, { code: 50, name: "startAngle", parser: r }, { code: 40, name: "radius", parser: r }, { code: 10, name: "center", parser: o }], Cn = [{ code: 73, name: "isCCW", parser: i }, { code: 51, name: "endAngle", parser: r }, { code: 50, name: "startAngle", parser: r }, { code: 40, name: "lengthOfMinorAxis", parser: r }, { code: 11, name: "end", parser: o }, { code: 10, name: "center", parser: o }], kn = [{ code: 13, name: "endTangent", parser: o }, { code: 12, name: "startTangent", parser: o }, { code: 11, name: "fitDatum", isMultiple: !0, parser: o }, { code: 97, name: "numberOfFitData", parser: r }, { code: 10, name: "controlPoints", isMultiple: !0, parser(e, a) {
  let n = { ...ue(a), weight: 1 };
  return (e = a.next()).code === 42 ? n.weight = e.value : a.rewind(), n;
} }, { code: 40, name: "knots", isMultiple: !0, parser: r }, { code: 96, name: "numberOfControlPoints", parser: r }, { code: 95, name: "numberOfKnots", parser: r }, { code: 74, name: "isPeriodic", parser: i }, { code: 73, name: "splineFlag", parser: r }, { code: 94, name: "degree", parser: r }], _n = { [Je.Line]: Ln, [Je.Circular]: Mn, [Je.Elliptic]: Cn, [Je.Spline]: kn }, wn = [...Kr, { code: 72, name: "edges", parser(e, a) {
  let n = { type: e.value }, t = l(_n[n.type]);
  if (!t) throw Error(`Invalid edge type ${n.type}`);
  return t(e = a.next(), a, n), n;
}, isMultiple: !0 }, { code: 93, name: "numberOfEdges", parser: r }], Rn = [...Kr, { code: 10, name: "vertices", parser(e, a) {
  let n = { ...ue(a), bulge: 0 };
  return (e = a.next()).code === 42 ? n.bulge = e.value : a.rewind(), n;
}, isMultiple: !0 }, { code: 93, name: "numberOfVertices", parser: r }, { code: 73, name: "isClosed", parser: i }, { code: 72, name: "hasBulge", parser: i }];
function Fn(e, a) {
  let n = { boundaryPathTypeFlag: e.value }, t = n.boundaryPathTypeFlag & Xa.Polyline;
  return e = a.next(), t ? l(Rn)(e, a, n) : l(wn)(e, a, n), n;
}
let Pn = [{ code: 49, name: "dashLengths", parser: r, isMultiple: !0 }, { code: 79, name: "numberOfDashLengths", parser: r }, { code: 45, name: "offset", parser: Tr }, { code: 43, name: "base", parser: Tr }, { code: 53, name: "angle", parser: r }];
function Tr(e, a) {
  let n = e.code + 1, t = { x: e.value, y: 1 };
  return (e = a.next()).code === n ? t.y = e.value : a.rewind(), t;
}
function Vn(e, a) {
  let n = {};
  return l(Pn)(e, a, n), n;
}
function Bn(e, a) {
  let n = [];
  for (; e.code === 463; ) {
    let t = { reservedField: e.value };
    if ((e = a.next()).code === 63 && (t.colorIndex = e.value, e = a.next()), e.code === 421) t.rgb = e.value, n.push(t), e = a.next();
    else {
      a.rewind();
      break;
    }
  }
  return e.code !== 463 && n.length > 0 && a.rewind(), n;
}
function Zr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let Un = { extrusionDirection: { x: 0, y: 0, z: 1 }, gradientRotation: 0, colorTint: 0 }, Gn = [{ code: 470, name: "gradientName", parser: r }, { code: 463, name: "gradientColors", parser: Bn }, { code: 462, name: "colorTint", parser: r }, { code: 461, name: "gradientDefinition", parser: r }, { code: 460, name: "gradientRotation", parser: r }, { code: 453, name: "numberOfColors", parser: r }, { code: 452, name: "gradientColorFlag", parser: r }, { code: 451 }, { code: 450, name: "gradientFlag", parser: r }, { code: 10, name: "seedPoints", parser: o, isMultiple: !0 }, { code: 99 }, { code: 11, name: "offsetVector", parser: o }, { code: 98, name: "numberOfSeedPoints", parser: r }, { code: 47, name: "pixelSize", parser: r }, { code: 53, name: "definitionLines", parser: Vn, isMultiple: !0 }, { code: 78, name: "numberOfDefinitionLines", parser: r }, { code: 77, name: "isDouble", parser: i }, { code: 73, name: "isAnnotated", parser: i }, { code: 41, name: "patternScale", parser: r }, { code: 52, name: "patternAngle", parser: r }, { code: 76, name: "patternType", parser: r }, { code: 75, name: "hatchStyle", parser: r }, { code: 92, name: "boundaryPaths", parser: Fn, isMultiple: !0 }, { code: 91, name: "numberOfBoundaryPaths", parser: r }, { code: 71, name: "associativity", parser: r }, { code: 63, name: "patternFillColor", parser: r }, { code: 70, name: "solidFill", parser: r }, { code: 2, name: "patternName", parser: r }, { code: 210, name: "extrusionDirection", parser: o }, { code: 10, name: "elevationPoint", parser: o }, { code: 100, name: "subclassMarker", parser: r, pushContext: !0 }, ...I];
class Jr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Zr(this, "parser", l(Gn, Un));
  }
}
function $r(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Zr(Jr, "ForEntityName", "HATCH");
let Hn = { brightness: 50, contrast: 50, fade: 0, clippingBoundaryPath: [] }, Wn = [{ code: 290, name: "clipMode", parser: r }, { code: 14, name: "clippingBoundaryPath", isMultiple: !0, parser: o }, { code: 91, name: "countBoundaryPoints", parser: r }, { code: 71, name: "clippingBoundaryType", parser: r }, { code: 360, name: "imageDefReactorHandle", parser: r }, { code: 283, name: "fade", parser: r }, { code: 282, name: "contrast", parser: r }, { code: 281, name: "brightness", parser: r }, { code: 280, name: "isClipped", parser: i }, { code: 70, name: "flags", parser: r }, { code: 340, name: "imageDefHandle", parser: r }, { code: 13, name: "imageSize", parser: o }, { code: 12, name: "vPixel", parser: o }, { code: 11, name: "uPixel", parser: o }, { code: 10, name: "position", parser: o }, { code: 90, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class qr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    $r(this, "parser", l(Wn, Hn));
  }
}
$r(qr, "ForEntityName", "IMAGE");
(ae = {})[ae.ShowImage = 1] = "ShowImage", ae[ae.ShowImageWhenNotAlignedWithScreen = 2] = "ShowImageWhenNotAlignedWithScreen", ae[ae.UseClippingBoundary = 4] = "UseClippingBoundary", ae[ae.TransparencyIsOn = 8] = "TransparencyIsOn";
(We = {})[We.Rectangular = 1] = "Rectangular", We[We.Polygonal = 2] = "Polygonal";
(je = {})[je.Outside = 0] = "Outside", je[je.Inside = 1] = "Inside";
function Qr(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let jn = { xScale: 1, yScale: 1, zScale: 1, rotation: 0, columnCount: 0, rowCount: 0, columnSpacing: 0, rowSpacing: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, Yn = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 45, name: "rowSpacing", parser: r }, { code: 44, name: "columnSpacing", parser: r }, { code: 71, name: "rowCount", parser: r }, { code: 70, name: "columnCount", parser: r }, { code: 50, name: "rotation", parser: r }, { code: 43, name: "zScale", parser: r }, { code: 42, name: "yScale", parser: r }, { code: 41, name: "xScale", parser: r }, { code: 10, name: "insertionPoint", parser: o }, { code: 2, name: "name", parser: r }, { code: 66, name: "isVariableAttributes", parser: i }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class ea {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Qr(this, "parser", l(Yn, jn));
  }
}
function ra(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Qr(ea, "ForEntityName", "INSERT");
let Xn = { isArrowheadEnabled: !0 }, zn = [{ code: 213, name: "offsetFromAnnotation", parser: o }, { code: 212, name: "offsetFromBlock", parser: o }, { code: 211, name: "horizontalDirection", parser: o }, { code: 210, name: "normal", parser: o }, { code: 340, name: "associatedAnnotation", parser: r }, { code: 77, name: "byBlockColor", parser: r }, { code: 10, name: "vertices", parser: o, isMultiple: !0 }, { code: 76, name: "numberOfVertices", parser: r }, { code: 41, name: "textWidth", parser: r }, { code: 40, name: "textHeight", parser: r }, { code: 75, name: "isHooklineExists", parser: i }, { code: 74, name: "isHooklineSameDirection", parser: i }, { code: 73, name: "leaderCreationFlag", parser: r }, { code: 72, name: "isSpline", parser: i }, { code: 71, name: "isArrowheadEnabled", parser: i }, { code: 3, name: "styleName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class aa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ra(this, "parser", l(zn, Xn));
  }
}
ra(aa, "ForEntityName", "LEADER");
(ne = {})[ne.TextAnnotation = 0] = "TextAnnotation", ne[ne.ToleranceAnnotation = 1] = "ToleranceAnnotation", ne[ne.BlockReferenceAnnotation = 2] = "BlockReferenceAnnotation", ne[ne.NoAnnotation = 3] = "NoAnnotation";
function na(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let Kn = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, Zn = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 11, name: "endPoint", parser: o }, { code: 10, name: "startPoint", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class ta {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    na(this, "parser", l(Zn, Kn));
  }
}
function oa(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
na(ta, "ForEntityName", "LINE");
let Jn = [{ code: 280, name: "shadowMapSoftness", parser: r }, { code: 91, name: "shadowMapSize", parser: r }, { code: 73, name: "shadowType", parser: r }, { code: 293, name: "isShadowCast", parser: i }, { code: 51, name: "falloffAngle", parser: r }, { code: 50, name: "hotspotAngle", parser: r }, { code: 42, name: "limitEnd", parser: r }, { code: 41, name: "limitStart", parser: r }, { code: 292, name: "isAttenuationLimited", parser: i }, { code: 72, name: "attenuationType", parser: r }, { code: 11, name: "target", parser: o }, { code: 10, name: "position", parser: o }, { code: 40, name: "intensity", parser: r }, { code: 291, name: "isPlotGlyph", parser: i }, { code: 290, name: "isOn", parser: i }, { code: 421, name: "lightColorInstance", parser: r }, { code: 63, name: "lightColorIndex", parser: r }, { code: 70, name: "lightType", parser: r }, { code: 1, name: "name", parser: r }, { code: 90, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class sa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    oa(this, "parser", l(Jn));
  }
}
oa(sa, "ForEntityName", "LIGHT");
(Se = {})[Se.Distant = 1] = "Distant", Se[Se.Point = 2] = "Point", Se[Se.Spot = 3] = "Spot";
(ve = {})[ve.None = 0] = "None", ve[ve.InverseLinear = 1] = "InverseLinear", ve[ve.InverseSquare = 2] = "InverseSquare";
let $n = { flag: 0, elevation: 0, thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, vertices: [] }, qn = { bulge: 0 }, Qn = [{ code: 42, name: "bulge", parser: r }, { code: 41, name: "endWidth", parser: r }, { code: 40, name: "startWidth", parser: r }, { code: 91, name: "id", parser: r }, { code: 20, name: "y", parser: r }, { code: 10, name: "x", parser: r }], et = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 10, name: "vertices", isMultiple: !0, parser(e, a) {
  let n = {};
  return l(Qn, qn)(e, a, n), n;
} }, { code: 39, name: "thickness", parser: r }, { code: 38, name: "elevation", parser: r }, { code: 43, name: "constantWidth", parser: r }, { code: 70, name: "flag", parser: r }, { code: 90, name: "numberOfVertices", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class ar {
  parseEntity(a, n) {
    let t = {};
    return l(et, $n)(n, a, t), t;
  }
}
(dr = "ForEntityName") in ar ? Object.defineProperty(ar, dr, { value: "LWPOLYLINE", enumerable: !0, configurable: !0, writable: !0 }) : ar[dr] = "LWPOLYLINE";
(Ye = {})[Ye.IS_CLOSED = 1] = "IS_CLOSED", Ye[Ye.PLINE_GEN = 128] = "PLINE_GEN";
function ca(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let rt = [{ code: 90, name: "overridenSubEntityCount", parser: r }, { code: 140, name: "edgeCreaseWeights", parser: r, isMultiple: !0 }, { code: 95, name: "edgeCreaseCount", parser: r }, { code: 94, parser(e, a, n) {
  n.edgeCount = e.value, n.edgeIndices = [];
  for (let t = 0; t < n.edgeCount; ++t) {
    let s = [];
    e = a.next(), s[0] = e.value, e = a.next(), s[1] = e.value, n.edgeIndices.push(s);
  }
} }, { code: 93, parser(e, a, n) {
  n.totalFaceIndices = e.value, n.faceIndices = [];
  let t = [];
  for (let c = 0; c < n.totalFaceIndices && !m(e, 0); ++c) e = a.next(), t.push(e.value);
  let s = 0;
  for (; s < t.length; ) {
    let c = t[s++], p = [];
    for (let f = 0; f < c; ++f) p.push(t[s++]);
    n.faceIndices.push(p);
  }
} }, { code: 10, name: "vertices", parser: o, isMultiple: !0 }, { code: 92, name: "verticesCount", parser: r }, { code: 91, name: "subdivisionLevel", parser: r }, { code: 40, name: "blendCrease", parser: r }, { code: 72, name: "isBlendCreased", parser: i }, { code: 71, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: Za, pushContext: !0 }, ...I];
class ia {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ca(this, "parser", l(rt));
  }
}
function la(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
ca(ia, "ForEntityName", "MESH");
let at = [{ code: 42, name: "fillParameters", parser: r, isMultiple: !0 }, { code: 75, name: "fillCount", parser: r }, { code: 41, name: "parameters", parser: r, isMultiple: !0 }, { code: 74, name: "parameterCount", parser: r }], nt = [{ code: [74, 41, 75, 42], name: "elements", parser(e, a) {
  let n = l(at), t = {};
  return n(e, a, t), t;
}, isMultiple: !0 }, { code: 13, name: "miterDirection", parser: o }, { code: 12, name: "direction", parser: o }, { code: 11, name: "position", parser: o }], tt = [{ code: [11, 12, 13], name: "segments", parser(e, a) {
  let n = l(nt), t = {};
  return n(e, a, t), t;
}, isMultiple: !0 }, { code: 210, name: "extrusionDirection", parser: o }, { code: 10, name: "startPosition", parser: o }, { code: 73, name: "styleCount", parser: r }, { code: 72, name: "vertexCount", parser: r }, { code: 71, name: "flags", parser: r }, { code: 70, name: "justification", parser: r }, { code: 40, name: "scale", parser: r }, { code: 340, name: "styleObjectHandle", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r, pushContext: !0 }, ...I];
class da {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    la(this, "parser", l(tt));
  }
}
la(da, "ForEntityName", "MLINE");
(Ne = {})[Ne.Top = 0] = "Top", Ne[Ne.Zero = 1] = "Zero", Ne[Ne.Bottom = 2] = "Bottom";
(te = {})[te.HasVertex = 1] = "HasVertex", te[te.Closed = 2] = "Closed", te[te.SuppressStartCaps = 4] = "SuppressStartCaps", te[te.SuppressEndCaps = 8] = "SuppressEndCaps";
(ye = {})[ye.LEFT_TO_RIGHT = 1] = "LEFT_TO_RIGHT", ye[ye.TOP_TO_BOTTOM = 3] = "TOP_TO_BOTTOM", ye[ye.BY_STYLE = 5] = "BY_STYLE";
function pa(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let ot = {}, st = [{ code: 300, parser: function(e, a, n) {
  var c;
  let t;
  if (e.value === "CONTEXT_DATA{") for (; a.hasNext(); ) {
    var s;
    if ((t = a.next()).code === 301) break;
    switch (t.code) {
      case 10:
        n.contentBasePosition = M(t, a);
        break;
      case 11:
        n.normal = M(t, a);
        break;
      case 12:
        n.textAnchor = M(t, a);
        break;
      case 13:
        n.textDirection = M(t, a);
        break;
      case 14:
        le(n).normal = M(t, a);
        break;
      case 15:
        le(n).position = M(t, a);
        break;
      case 16:
        le(n).scale = M(t, a);
        break;
      case 40:
        n.contentScale = t.value;
        break;
      case 41:
      case 44:
        n.textHeight = t.value;
        break;
      case 42:
        n.textRotation = t.value;
        break;
      case 43:
        n.textWidth = t.value;
        break;
      case 45:
        n.textLineSpacingFactor = t.value;
        break;
      case 46:
        le(n).rotation = t.value;
        break;
      case 47:
        (s = le(n)).transformationMatrix ?? (s.transformationMatrix = []), (c = le(n).transformationMatrix) == null || c.push(t.value);
        break;
      case 90:
        n.textColor = t.value;
        break;
      case 91:
        n.textBackgroundColor = t.value;
        break;
      case 92:
        n.textBackgroundTransparency = t.value;
        break;
      case 93:
        le(n).color = t.value;
        break;
      case 110:
        n.planeOrigin = M(t, a);
        break;
      case 111:
        n.planeXAxisDirection = M(t, a);
        break;
      case 112:
        n.planeYAxisDirection = M(t, a);
        break;
      case 140:
        n.arrowheadSize = t.value;
        break;
      case 141:
        n.textBackgroundScaleFactor = t.value;
        break;
      case 142:
        n.textColumnWidth = t.value;
        break;
      case 143:
        n.textColumnGutterWidth = t.value;
        break;
      case 144:
        n.textColumnHeight = t.value;
        break;
      case 145:
        n.landingGap = t.value;
        break;
      case 170:
        n.textLineSpacingStyle = t.value;
        break;
      case 171:
        n.textAttachment = t.value;
        break;
      case 172:
        n.textFlowDirection = t.value;
        break;
      case 173:
        n.textColumnType = t.value;
        break;
      case 290:
        n.hasMText = t.value;
        break;
      case 291:
        n.textBackgroundColorOn = t.value;
        break;
      case 292:
        n.textFillOn = t.value;
        break;
      case 293:
        n.textUseAutoHeight = t.value;
        break;
      case 294:
        n.textColumnFlowReversed = t.value;
        break;
      case 295:
        n.textUseWordBreak = t.value;
        break;
      case 296:
        n.hasBlock = t.value;
        break;
      case 297:
        n.planeNormalReversed = t.value;
        break;
      case 302:
        t.value === "LEADER{" && (n.leaderSections ?? (n.leaderSections = []), n.leaderSections.push(function(p, f) {
          let d, x;
          if (p.value !== "LEADER{") return { leaderLines: [] };
          let E = { leaderLines: [] };
          for (; f.hasNext(); ) {
            if ((x = f.next()).code === 303) {
              $e(E, d);
              break;
            }
            switch (x.code) {
              case 290:
                E.lastLeaderLinePointSet = x.value;
                break;
              case 291:
                E.doglegVectorSet = x.value;
                break;
              case 10:
                E.lastLeaderLinePoint = M(x, f);
                break;
              case 11:
                E.doglegVector = M(x, f);
                break;
              case 12:
                d ?? (d = {}), d.start = M(x, f);
                break;
              case 13:
                d ?? (d = {}), d.end = M(x, f), $e(E, d), d = void 0;
                break;
              case 90:
                E.leaderBranchIndex = x.value;
                break;
              case 40:
                E.doglegLength = x.value;
                break;
              case 304:
                x.value === "LEADER_LINE{" && E.leaderLines.push(function(b, g) {
                  let O, v;
                  if (b.value !== "LEADER_LINE{") return { vertices: [] };
                  let N = { vertices: [] };
                  for (; g.hasNext(); ) {
                    if ((v = g.next()).code === 305) {
                      $e(N, O);
                      break;
                    }
                    switch (v.code) {
                      case 10:
                        N.vertices.push(M(v, g));
                        break;
                      case 11:
                        O ?? (O = {}), O.start = M(v, g);
                        break;
                      case 12:
                        O ?? (O = {}), O.end = M(v, g), $e(N, O), O = void 0;
                        break;
                      case 90:
                        N.breakPointIndexes ?? (N.breakPointIndexes = []), N.breakPointIndexes.push(v.value), O ?? (O = {}), O.index = v.value;
                        break;
                      case 91:
                        N.leaderLineIndex = v.value;
                    }
                  }
                  return N;
                }(x, f));
            }
          }
          return E;
        }(t, a)));
        break;
      case 304:
        t.value !== "LEADER_LINE{" && (n.textContent = t.value, n.contentType ?? (n.contentType = 2));
        break;
      case 340:
        n.textStyleId = t.value;
        break;
      case 341:
        n.blockContentId = t.value, le(n).blockContentId = t.value;
    }
  }
} }, { code: 270, name: "version", parser: r }, { code: 340, name: "leaderStyleId", parser: r }, { code: 90, name: "propertyOverrideFlag", parser: r }, { code: 170, name: "leaderLineType", parser: r }, { code: 91, name: "leaderLineColor", parser: r }, { code: 341, name: "leaderLineTypeId", parser: r }, { code: 171, name: "leaderLineWeight", parser: r }, { code: 290, name: "landingEnabled", parser: i }, { code: 291, name: "doglegEnabled", parser: i }, { code: [40, 41], name: "doglegLength", parser: r }, { code: 342, name: "arrowheadId", parser: r }, { code: 42, name: "arrowheadSize", parser: r }, { code: 172, name: "contentType", parser: r }, { code: 343, name: "textStyleId", parser: r }, { code: 173, name: "textLeftAttachmentType", parser: r }, { code: 95, name: "textRightAttachmentType", parser: r }, { code: 174, name: "textAngleType", parser: r }, { code: 175, name: "textAlignmentType", parser: r }, { code: 92, name: "textColor", parser: r }, { code: 292, name: "textFrameEnabled", parser: i }, { code: 344, parser: function(e, a, n) {
  n.blockContentId = e.value, le(n).blockContentId = e.value;
} }, { code: 93, name: "blockContentColor", parser: r }, { code: 10, name: "blockContentScale", parser: o }, { code: 43, name: "blockContentRotation", parser: r }, { code: 176, name: "blockContentConnectionType", parser: r }, { code: 293, name: "annotativeScaleEnabled", parser: i }, { code: 94, parser: function(e, a, n) {
  n.arrowheadOverrides ?? (n.arrowheadOverrides = []), n.arrowheadOverrides.push({ index: e.value });
}, isMultiple: !0 }, { code: 345, parser: function(e, a, n) {
  var t;
  ((t = n).arrowheadOverrides ?? (t.arrowheadOverrides = []), t.arrowheadOverrides.length || t.arrowheadOverrides.push({}), t.arrowheadOverrides[t.arrowheadOverrides.length - 1]).handle = e.value;
}, isMultiple: !0 }, { code: 330, parser: function(e, a, n) {
  n.blockAttributes ?? (n.blockAttributes = []), n.blockAttributes.push({ id: e.value });
}, isMultiple: !0 }, { code: 177, parser: function(e, a, n) {
  Ir(n).index = e.value;
}, isMultiple: !0 }, { code: 44, parser: function(e, a, n) {
  Ir(n).width = e.value;
}, isMultiple: !0 }, { code: 302, parser: function(e, a, n) {
  Ir(n).text = e.value;
}, isMultiple: !0 }, { code: 294, name: "textDirectionNegative", parser: i }, { code: 178, name: "textAlignInIPE", parser: r }, { code: 179, name: "textAttachmentPoint", parser: r }, { code: 271, name: "textAttachmentDirection", parser: r }, { code: 272, name: "bottomTextAttachmentDirection", parser: r }, { code: 273, name: "topTextAttachmentDirection", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
function M(e, a) {
  return Er(o(e, a));
}
function $e(e, a) {
  (a != null && a.start || a != null && a.end) && (e.breaks ?? (e.breaks = []), e.breaks.push(a));
}
function le(e) {
  return e.blockContent ?? (e.blockContent = {});
}
function Ir(e) {
  return e.blockAttributes ?? (e.blockAttributes = []), e.blockAttributes.length || e.blockAttributes.push({}), e.blockAttributes[e.blockAttributes.length - 1];
}
class ua {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    pa(this, "parser", l(st, ot));
  }
}
function ma(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
pa(ua, "ForEntityName", "MULTILEADER");
let ct = { thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, angle: 0 }, it = [{ code: 50, name: "angle", parser: r }, { code: 210, name: "extrusionDirection", parser: o }, { code: 39, name: "thickness", parser: r }, { code: 10, name: "position", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class fa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ma(this, "parser", l(it, ct));
  }
}
function Ia(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
ma(fa, "ForEntityName", "POINT");
let lt = { startWidth: 0, endWidth: 0, bulge: 0 }, dt = [{ code: 91, name: "id", parser: r }, { code: [...or(71, 75)], name: "faces", isMultiple: !0, parser: r }, { code: 50, name: "tangentDirection", parser: r }, { code: 70, name: "flag", parser: r }, { code: 42, name: "bulge", parser: r }, { code: 41, name: "endWidth", parser: r }, { code: 40, name: "startWidth", parser: r }, { code: 30, name: "z", parser: r }, { code: 20, name: "y", parser: r }, { code: 10, name: "x", parser: r }, { code: 100, name: "subclassMarker", parser: r }, { code: 100 }, ...I];
class hr {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Ia(this, "parser", l(dt, lt));
  }
}
function Ea(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Ia(hr, "ForEntityName", "VERTEX");
let pt = { thickness: 0, flag: 0, startWidth: 0, endWidth: 0, meshMVertexCount: 0, meshNVertexCount: 0, surfaceMDensity: 0, surfaceNDensity: 0, smoothType: 0, extrusionDirection: { x: 0, y: 0, z: 1 }, vertices: [] }, ut = [{ code: 0, name: "vertices", isMultiple: !0, parser: (e, a) => m(e, 0, "VERTEX") ? (e = a.next(), new hr().parseEntity(a, e)) : Ze }, { code: 210, name: "extrusionDirection", parser: o }, { code: 75, name: "smoothType", parser: r }, { code: 74, name: "surfaceNDensity", parser: r }, { code: 73, name: "surfaceMDensity", parser: r }, { code: 72, name: "meshNVertexCount", parser: r }, { code: 71, name: "meshMVertexCount", parser: r }, { code: 41, name: "endWidth", parser: r }, { code: 40, name: "startWidth", parser: r }, { code: 70, name: "flag", parser: r }, { code: 39, name: "thickness", parser: r }, { code: 30, name: "elevation", parser: r }, { code: 20 }, { code: 10 }, { code: 66 }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class ba {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Ea(this, "parser", l(ut, pt));
  }
}
Ea(ba, "ForEntityName", "POLYLINE");
(D = {})[D.CLOSED_POLYLINE = 1] = "CLOSED_POLYLINE", D[D.CURVE_FIT = 2] = "CURVE_FIT", D[D.SPLINE_FIT = 4] = "SPLINE_FIT", D[D.POLYLINE_3D = 8] = "POLYLINE_3D", D[D.POLYGON_3D = 16] = "POLYGON_3D", D[D.CLOSED_POLYGON = 32] = "CLOSED_POLYGON", D[D.POLYFACE = 64] = "POLYFACE", D[D.CONTINUOUS = 128] = "CONTINUOUS";
(oe = {})[oe.NONE = 0] = "NONE", oe[oe.QUADRATIC = 5] = "QUADRATIC", oe[oe.CUBIC = 6] = "CUBIC", oe[oe.BEZIER = 8] = "BEZIER";
function ha(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let mt = [{ code: 11, name: "direction", parser: o }, { code: 10, name: "position", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class xa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ha(this, "parser", l(mt));
  }
}
function Oa(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
ha(xa, "ForEntityName", "RAY");
let ft = [...sr("data"), { code: 70, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Ta {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Oa(this, "parser", l(ft));
  }
}
function ga(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
Oa(Ta, "ForEntityName", "REGION");
let It = { vertices: [], backLineVertices: [] }, Et = [{ code: 360, name: "geometrySettingHardId", parser: r }, { code: 12, name: "backLineVertices", isMultiple: !0, parser: o }, { code: 93, name: "numberOfBackLineVertices", parser: r }, { code: 11, name: "vertices", isMultiple: !0, parser: o }, { code: 92, name: "verticesCount", parser: r }, { code: [63, 411], name: "indicatorColor", parser: r }, { code: 70, name: "indicatorTransparency", parser: r }, { code: 41, name: "bottomHeight", parser: r }, { code: 40, name: "topHeight", parser: r }, { code: 10, name: "verticalDirection", parser: o }, { code: 1, name: "name", parser: r }, { code: 91, name: "flag", parser: r }, { code: 90, name: "state", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Sa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ga(this, "parser", l(Et, It));
  }
}
function va(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
ga(Sa, "ForEntityName", "SECTION");
let bt = { points: [], thickness: 0, extrusionDirection: { x: 0, y: 0, z: 1 } }, ht = [{ code: 210, name: "extrusionDirection", parser: o }, { code: 39, name: "thickness", parser: r }, { code: [...or(10, 14)], name: "points", isMultiple: !0, parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Na {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    va(this, "parser", l(ht, bt));
  }
}
function ya(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
va(Na, "ForEntityName", "SOLID");
let xt = [{ code: 350, name: "historyObjectSoftId", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...sr("data"), { code: 70, name: "version", parser: r }, { code: 100 }, ...I];
class Aa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ya(this, "parser", l(xt));
  }
}
function Da(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
ya(Aa, "ForEntityName", "3DSOLID");
let Ot = { knotTolerance: 1e-6, controlTolerance: 1e-6, fitTolerance: 1e-9, knotValues: [], controlPoints: [], fitPoints: [] }, Tt = [{ code: 11, name: "fitPoints", isMultiple: !0, parser: o }, { code: 10, name: "controlPoints", isMultiple: !0, parser: o }, { code: 41, name: "weights", isMultiple: !0, parser: r }, { code: 40, name: "knots", isMultiple: !0, parser: r }, { code: 13, name: "endTangent", parser: o }, { code: 12, name: "startTangent", parser: o }, { code: 44, name: "fitTolerance", parser: r }, { code: 43, name: "controlTolerance", parser: r }, { code: 42, name: "knotTolerance", parser: r }, { code: 74, name: "numberOfFitPoints", parser: r }, { code: 73, name: "numberOfControlPoints", parser: r }, { code: 72, name: "numberOfKnots", parser: r }, { code: 71, name: "degree", parser: r }, { code: 70, name: "flag", parser: r }, { code: 210, name: "normal", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class La {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Da(this, "parser", l(Tt, Ot));
  }
}
Da(La, "ForEntityName", "SPLINE");
(V = {})[V.NONE = 0] = "NONE", V[V.CLOSED = 1] = "CLOSED", V[V.PERIODIC = 2] = "PERIODIC", V[V.RATIONAL = 4] = "RATIONAL", V[V.PLANAR = 8] = "PLANAR", V[V.LINEAR = 16] = "LINEAR";
function Ma(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let gt = [{ code: 280, name: "shadowMapSoftness", parser: r }, { code: 71, name: "shadowMapSize", parser: r }, { code: 70, name: "shadowType", parser: r }, { code: 292, name: "isSummerTime", parser: i }, { code: 92, name: "time", parser: r }, { code: 91, name: "julianDay", parser: r }, { code: 291, name: "hasShadow", parser: i }, { code: 40, name: "intensity", parser: r }, { code: 421, name: "lightColorInstance", parser: r }, { code: 63, name: "lightColorIndex", parser: r }, { code: 290, name: "isOn", parser: i }, { code: 90, name: "version", parser: r }, { code: 100, name: "subclassMarker", parser: r, pushContext: !0 }, ...I.filter((e) => e.code !== 100)];
class Ca {
  parseEntity(a, n) {
    let t = { layer: "" };
    return this.parser(n, a, t), t;
  }
  constructor() {
    Ma(this, "parser", l(gt));
  }
}
Ma(Ca, "ForEntityName", "SUN");
class nr {
  parseEntity(a, n) {
    let t = {};
    for (; !a.isEOF(); ) {
      if (n.code === 0) {
        a.rewind();
        break;
      }
      switch (n.code) {
        case 100:
          t.subclassMarker = n.value, n = a.next();
          break;
        case 2:
          t.name = n.value, n = a.next();
          break;
        case 5:
          t.handle = n.value, n = a.next();
          break;
        case 10:
          t.startPoint = Er(ue(a)), n = a.lastReadGroup;
          break;
        case 11:
          t.directionVector = Er(ue(a)), n = a.lastReadGroup;
          break;
        case 90:
          t.tableValue = n.value, n = a.next();
          break;
        case 91:
          t.rowCount = n.value, n = a.next();
          break;
        case 92:
          t.columnCount = n.value, n = a.next();
          break;
        case 93:
          t.overrideFlag = n.value, n = a.next();
          break;
        case 94:
          t.borderColorOverrideFlag = n.value, n = a.next();
          break;
        case 95:
          t.borderLineWeightOverrideFlag = n.value, n = a.next();
          break;
        case 96:
          t.borderVisibilityOverrideFlag = n.value, n = a.next();
          break;
        case 141:
          t.rowHeightArr ?? (t.rowHeightArr = []), t.rowHeightArr.push(n.value), n = a.next();
          break;
        case 142:
          t.columnWidthArr ?? (t.columnWidthArr = []), t.columnWidthArr.push(n.value), n = a.next();
          break;
        case 280:
          t.version = n.value, n = a.next();
          break;
        case 310:
          t.bmpPreview ?? (t.bmpPreview = ""), t.bmpPreview += n.value, n = a.next();
          break;
        case 330:
          t.ownerBlockRecordSoftId = n.value, n = a.next();
          break;
        case 342:
          t.tableStyleId = n.value, n = a.next();
          break;
        case 343:
          t.blockRecordHandle = n.value, n = a.next();
          break;
        case 170:
          t.attachmentPoint = n.value, n = a.next();
          break;
        case 171:
          t.cells ?? (t.cells = []), t.cells.push(function(s, c) {
            let p = !1, f = !1, d = {};
            for (; !s.isEOF() && c.code !== 0 && !f; ) switch (c.code) {
              case 171:
                if (p) {
                  f = !0;
                  continue;
                }
                d.cellType = c.value, p = !0, c = s.next();
                break;
              case 172:
                d.flagValue = c.value, c = s.next();
                break;
              case 173:
                d.mergedValue = c.value, c = s.next();
                break;
              case 174:
                d.autoFit = c.value, c = s.next();
                break;
              case 175:
                d.borderWidth = c.value, c = s.next();
                break;
              case 176:
                d.borderHeight = c.value, c = s.next();
                break;
              case 91:
                d.overrideFlag = c.value, c = s.next();
                break;
              case 178:
                d.virtualEdgeFlag = c.value, c = s.next();
                break;
              case 145:
                d.rotation = c.value, c = s.next();
                break;
              case 345:
                d.fieldObjetId = c.value, c = s.next();
                break;
              case 340:
                d.blockTableRecordId = c.value, c = s.next();
                break;
              case 146:
                d.blockScale = c.value, c = s.next();
                break;
              case 177:
                d.blockAttrNum = c.value, c = s.next();
                break;
              case 7:
                d.textStyle = c.value, c = s.next();
                break;
              case 140:
                d.textHeight = c.value, c = s.next();
                break;
              case 170:
                d.attachmentPoint = c.value, c = s.next();
                break;
              case 92:
                d.extendedCellFlags = c.value, c = s.next();
                break;
              case 285:
                d.rightBorderVisibility = !!(c.value ?? !0), c = s.next();
                break;
              case 286:
                d.bottomBorderVisibility = !!(c.value ?? !0), c = s.next();
                break;
              case 288:
                d.leftBorderVisibility = !!(c.value ?? !0), c = s.next();
                break;
              case 289:
                d.topBorderVisibility = !!(c.value ?? !0), c = s.next();
                break;
              case 301:
                (function(x, E, b) {
                  for (; b.code !== 304; ) switch (b.code) {
                    case 301:
                    case 93:
                    case 90:
                    case 94:
                      b = E.next();
                      break;
                    case 1:
                      x.text = b.value, b = E.next();
                      break;
                    case 300:
                      x.attrText = b.value, b = E.next();
                      break;
                    case 302:
                      x.text = b.value ? b.value : x.text, b = E.next();
                      break;
                    default:
                      b = E.next();
                  }
                })(d, s, c), c = s.next();
                break;
              default:
                return d;
            }
            return p = !1, f = !1, d;
          }(a, n)), n = a.lastReadGroup;
          break;
        default:
          xn(t, n, a), n = a.next();
      }
    }
    return t;
  }
}
function ka(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
(pr = "ForEntityName") in nr ? Object.defineProperty(nr, pr, { value: "ACAD_TABLE", enumerable: !0, configurable: !0, writable: !0 }) : nr[pr] = "ACAD_TABLE";
let St = [{ code: 11, name: "xAxisDirection", parser: o }, { code: 210, name: "extrusionDirection", parser: o }, { code: 1, name: "text", parser: r }, { code: 10, name: "position", parser: o }, { code: 3, name: "styleName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class _a {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    ka(this, "parser", l(St));
  }
}
ka(_a, "ForEntityName", "TOLERANCE");
(L = {})[L.CREATED_BY_CURVE_FIT = 1] = "CREATED_BY_CURVE_FIT", L[L.TANGENT_DEFINED = 2] = "TANGENT_DEFINED", L[L.NOT_USED = 4] = "NOT_USED", L[L.CREATED_BY_SPLINE_FIT = 8] = "CREATED_BY_SPLINE_FIT", L[L.SPLINE_CONTROL_POINT = 16] = "SPLINE_CONTROL_POINT", L[L.FOR_POLYLINE = 32] = "FOR_POLYLINE", L[L.FOR_POLYGON = 64] = "FOR_POLYGON", L[L.POLYFACE = 128] = "POLYFACE";
let vt = [{ code: [335, 343, 344, 91], name: "softPointers", isMultiple: !0, parser: r }, { code: 361, name: "sunId", parser: r }, { code: 431, name: "ambientLightColorName", parser: r }, { code: 421, name: "ambientLightColorInstance", parser: r }, { code: 63, name: "ambientLightColorIndex", parser: r }, { code: 142, name: "contrast", parser: r }, { code: 141, name: "brightness", parser: r }, { code: 282, name: "defaultLightingType", parser: r }, { code: 292, name: "isDefaultLighting", parser: i }, { code: 348, name: "visualStyleId", parser: r }, { code: 333, name: "shadePlotId", parser: r }, { code: 332, name: "backgroundId", parser: r }, { code: 61, name: "majorGridFrequency", parser: r }, { code: 170, name: "shadePlotMode", parser: r }, { code: 146, name: "elevation", parser: r }, { code: 79, name: "orthographicType", parser: r }, { code: 346, name: "ucsBaseId", parser: r }, { code: 345, name: "ucsId", parser: r }, { code: 112, name: "ucsYAxis", parser: o }, { code: 111, name: "ucsXAxis", parser: o }, { code: 110, name: "ucsOrigin", parser: o }, { code: 74, name: "iconFlag", parser: r }, { code: 71, name: "ucsPerViewport", parser: r }, { code: 281, name: "renderMode", parser: r }, { code: 1, name: "sheetName", parser: r }, { code: 340, name: "clippingBoundaryId", parser: r }, { code: 90, name: "statusBitFlags", parser: r }, { code: 331, name: "frozenLayerIds", isMultiple: !0, parser: r }, { code: 72, name: "circleZoomPercent", parser: r }, { code: 51, name: "viewTwistAngle", parser: r }, { code: 50, name: "snapAngle", parser: r }, { code: 45, name: "viewHeight", parser: r }, { code: 44, name: "backClipZ", parser: r }, { code: 43, name: "frontClipZ", parser: r }, { code: 42, name: "perspectiveLensLength", parser: r }, { code: 17, name: "targetPoint", parser: o }, { code: 16, name: "viewDirection", parser: o }, { code: 15, name: "gridSpacing", parser: o }, { code: 14, name: "snapSpacing", parser: o }, { code: 13, name: "snapBase", parser: o }, { code: 12, name: "displayCenter", parser: o }, { code: 69, name: "viewportId", parser: r }, { code: 68, name: "status", parser: r }, { code: 41, name: "height", parser: r }, { code: 40, name: "width", parser: r }, { code: 10, name: "viewportCenter", parser: o }, { code: 100, name: "subclassMarker", parser: r, pushContext: !0 }, ...I];
class tr {
  parseEntity(a, n) {
    let t = {};
    return l(vt)(n, a, t), t;
  }
}
function wa(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
(ur = "ForEntityName") in tr ? Object.defineProperty(tr, ur, { value: "VIEWPORT", enumerable: !0, configurable: !0, writable: !0 }) : tr[ur] = "VIEWPORT";
let Nt = { brightness: 50, constrast: 50, fade: 0 }, yt = [{ code: 14, name: "boundary", isMultiple: !0, parser: o }, { code: 91, name: "numberOfVertices", parser: r }, { code: 71, name: "boundaryType", parser: r }, { code: 360, name: "imageDefReactorHardId", parser: r }, { code: 283, name: "fade", parser: r }, { code: 282, name: "contrast", parser: r }, { code: 281, name: "brightness", parser: r }, { code: 280, name: "isClipping", parser: i }, { code: 70, name: "displayFlag", parser: r }, { code: 340, name: "imageDefHardId", parser: r }, { code: 13, name: "imageSize", parser: o }, { code: 12, name: "vDirection", parser: o }, { code: 11, name: "uDirection", parser: o }, { code: 10, name: "position", parser: o }, { code: 90, name: "classVersion", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Ra {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    wa(this, "parser", l(yt, Nt));
  }
}
wa(Ra, "ForEntityName", "WIPEOUT");
(se = {})[se.ShowImage = 1] = "ShowImage", se[se.ShowImageWhenNotAligned = 2] = "ShowImageWhenNotAligned", se[se.UseClippingBoundary = 4] = "UseClippingBoundary", se[se.Transparency = 8] = "Transparency";
function Fa(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
let At = [{ code: 11, name: "direction", parser: o }, { code: 10, name: "position", parser: o }, { code: 100, name: "subclassMarker", parser: r }, ...I];
class Pa {
  parseEntity(a, n) {
    let t = {};
    return this.parser(n, a, t), t;
  }
  constructor() {
    Fa(this, "parser", l(At));
  }
}
Fa(Pa, "ForEntityName", "XLINE");
let Dt = 0;
function Va(e) {
  if (!e) throw TypeError("entity cannot be undefined or null");
  e.handle || (e.handle = Dt++);
}
let Lt = Object.fromEntries([Dr, er, Rr, Br, Gr, Wr, Qe, Yr, zr, qr, ea, aa, ta, sa, ar, ia, da, Pr, ua, fa, ba, xa, Ta, Sa, Na, Aa, La, Ca, nr, _r, _a, Jr, hr, tr, Ra, Pa].map((e) => [e.ForEntityName, new e()]));
function Ba(e, a) {
  let n = [];
  for (; !m(e, 0, "EOF"); ) {
    if (e.code === 0) {
      if (e.value === "ENDBLK" || e.value === "ENDSEC") {
        a.rewind();
        break;
      }
      let t = Lt[e.value];
      if (t) {
        let s = e.value;
        e = a.next();
        let c = t.parseEntity(a, e);
        c.type = s, Va(c), n.push(c);
      } else a.debug;
    }
    e = a.next();
  }
  return n;
}
function ze(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
class gr {
  next() {
    if (!this.hasNext()) return this._eof ? this.debug : this.debug, { code: 0, value: "EOF" };
    let a = parseInt(this._data[this._pointer++], 10), n = Sr(a, this._data[this._pointer++], this.debug), t = { code: a, value: n };
    return m(t, 0, "EOF") && (this._eof = !0), this.lastReadGroup = t, t;
  }
  peek() {
    if (!this.hasNext()) throw this._eof ? Error("Cannot call 'next' after EOF group has been read") : Error("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]);
    let a = { code: parseInt(this._data[this._pointer]), value: 0 };
    return a.value = Sr(a.code, this._data[this._pointer + 1], this.debug), a;
  }
  rewind(a) {
    a = a || 1, this._pointer = this._pointer - 2 * a;
  }
  hasNext() {
    return !this._eof && !(this._pointer > this._data.length - 2);
  }
  isEOF() {
    return this._eof;
  }
  constructor(a, n = !1) {
    ze(this, "_data", void 0), ze(this, "debug", void 0), ze(this, "_pointer", void 0), ze(this, "_eof", void 0), ze(this, "lastReadGroup", void 0), this._data = a, this.debug = n, this.lastReadGroup = { code: 0, value: 0 }, this._pointer = 0, this._eof = !1;
  }
}
function Sr(e, a, n = !1) {
  var t;
  let s = (t = a).endsWith("\r") ? t.slice(0, -1) : t;
  return e <= 9 ? s : e >= 10 && e <= 59 ? parseFloat(a.trim()) : e >= 60 && e <= 99 ? parseInt(a.trim()) : e >= 100 && e <= 109 ? s : e >= 110 && e <= 149 ? parseFloat(a.trim()) : e >= 160 && e <= 179 ? parseInt(a.trim()) : e >= 210 && e <= 239 ? parseFloat(a.trim()) : e >= 270 && e <= 289 ? parseInt(a.trim()) : e >= 290 && e <= 299 ? function(c) {
    if (c === "0") return !1;
    if (c === "1") return !0;
    throw TypeError("String '" + c + "' cannot be cast to Boolean type");
  }(a.trim()) : e >= 300 && e <= 369 ? s : e >= 370 && e <= 389 ? parseInt(a.trim()) : e >= 390 && e <= 399 ? s : e >= 400 && e <= 409 ? parseInt(a.trim()) : e >= 410 && e <= 419 ? s : e >= 420 && e <= 429 ? parseInt(a.trim()) : e >= 430 && e <= 439 ? s : e >= 440 && e <= 459 ? parseInt(a.trim()) : e >= 460 && e <= 469 ? parseFloat(a.trim()) : e >= 470 && e <= 481 || e === 999 || e >= 1e3 && e <= 1009 ? s : e >= 1010 && e <= 1059 ? parseFloat(a.trim()) : e >= 1060 && e <= 1071 ? parseInt(a.trim()) : s;
}
function Mt(e, a) {
  let n = null, t = {};
  for (; !m(e, 0, "EOF") && !m(e, 0, "ENDSEC"); ) e.code === 9 ? n = typeof e.value == "string" ? e.value : null : n != null && (e.code === 10 ? t[n] = ue(a) : t[n] = e.value), e = a.next();
  return t;
}
let de = [{ code: 100, name: "subclassMarker", parser: r }, { code: 330, name: "ownerObjectId", parser: r }, { code: 102, isMultiple: !0, parser(e, a) {
  for (; !m(e, 0, "EOF") && !m(e, 102, "}"); ) e = a.next();
} }, { code: 5, name: "handle", parser: r }], Ct = [{ code: 70, name: "flag", parser: r }, { code: 2, name: "appName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de], kt = l(Ct), _t = l([{ code: 310, name: "bmpPreview", parser: r }, { code: 281, name: "scalability", parser: r }, { code: 280, name: "explodability", parser: r }, { code: 70, name: "insertionUnits", parser: r }, { code: 340, name: "layoutObjects", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de]), wt = l([...br.map((e) => ({ ...e, parser: r })), { code: 70, name: "standardFlag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, { code: 105, name: "handle", parser: r }, ...de.filter((e) => e.code !== 5)]), Rt = l([{ code: 347, name: "materialObjectId", parser: r }, { code: 390, name: "plotStyleNameObjectId", parser: r }, { code: 370, name: "lineweight", parser: r }, { code: 290, name: "isPlotting", parser: i }, { code: 6, name: "lineType", parser: r }, { code: 62, name: "colorIndex", parser: r }, { code: 70, name: "standardFlag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de]), Ft = l([{ code: 9, name: "text", parser: r }, { code: 45, name: "offsetY", parser: r }, { code: 44, name: "offsetX", parser: r }, { code: 50, name: "rotation", parser: r }, { code: 46, name: "scale", parser: r }, { code: 340, name: "styleObjectId", parser: r }, { code: 75, name: "shapeNumber", parser: r }, { code: 74, name: "elementTypeFlag", parser: r }, { code: 49, name: "elementLength", parser: r }], { elementTypeFlag: 0, elementLength: 0 }), Pt = l([{ code: 49, name: "pattern", parser(e, a) {
  let n = {};
  return Ft(e, a, n), n;
}, isMultiple: !0 }, { code: 40, name: "totalPatternLength", parser: r }, { code: 73, name: "numberOfLineTypes", parser: r }, { code: 72, parser: r }, { code: 3, name: "description", parser: r }, { code: 70, name: "standardFlag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de]), Vt = l([{ code: 1e3, name: "extendedFont", parser: r }, { code: 1001 }, { code: 4, name: "bigFont", parser: r }, { code: 3, name: "font", parser: r }, { code: 42, name: "lastHeight", parser: r }, { code: 71, name: "textGenerationFlag", parser: r }, { code: 50, name: "obliqueAngle", parser: r }, { code: 41, name: "widthFactor", parser: r }, { code: 40, name: "fixedTextHeight", parser: r }, { code: 70, name: "standardFlag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de]), Bt = [{ code: 13, name: "orthographicOrigin", parser: o }, { code: 71, name: "orthographicType", parser: r }, { code: 346, name: "baseUcsHandle", parser: r }, { code: 146, name: "elevation", parser: r }, { code: 79, name: "isOrthographic", parser: i }, { code: 12, name: "yAxis", parser: o }, { code: 11, name: "xAxis", parser: o }, { code: 10, name: "origin", parser: o }, { code: 70, name: "flag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de], Ut = l(Bt), Gt = [{ code: 346, name: "baseUcsId", parser: r }, { code: 345, name: "ucsId", parser: r }, { code: 146, name: "elevation", parser: r }, { code: 79, name: "orthographicType", parser: r }, { code: 112, name: "ucsYAxis", parser: o }, { code: 111, name: "ucsXAxis", parser: o }, { code: 110, name: "ucsOrigin", parser: o }, { code: 361, name: "sunHardId", parser: r }, { code: 348, name: "styleHardId", parser: r }, { code: 334, name: "liveSectionSoftId", parser: r }, { code: 332, name: "backgroundSoftId", parser: r }, { code: 73, name: "isPlottable", parser: i }, { code: 72, name: "isUcsAssociated", parser: i }, { code: 281, name: "renderMode", parser: r }, { code: 71, name: "viewMode", parser: r }, { code: 50, name: "twistAngle", parser: r }, { code: 44, name: "backClippingPlane", parser: r }, { code: 43, name: "frontClippingPlane", parser: r }, { code: 42, name: "lensLength", parser: r }, { code: 12, name: "target", parser: o }, { code: 11, name: "direction", parser: o }, { code: 10, name: "center", parser: o }, { code: 41, name: "width", parser: r }, { code: 40, name: "height", parser: r }, { code: 70, name: "flag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de], Ht = l(Gt), Wt = l([{ code: [63, 421, 431], name: "ambientColor", parser: r }, { code: 142, name: "contrast", parser: r }, { code: 141, name: "brightness", parser: r }, { code: 282, name: "defaultLightingType", parser: r }, { code: 292, name: "isDefaultLightingOn", parser: i }, { code: 348, name: "visualStyleObjectId", parser: r }, { code: 333, name: "shadePlotObjectId", parser: r }, { code: 332, name: "backgroundObjectId", parser: r }, { code: 61, name: "majorGridLines", parser: r }, { code: 170, name: "shadePlotSetting", parser: r }, { code: 146, name: "elevation", parser: r }, { code: 79, name: "orthographicType", parser: r }, { code: 112, name: "ucsYAxis", parser: o }, { code: 111, name: "ucsXAxis", parser: o }, { code: 110, name: "ucsOrigin", parser: o }, { code: 74, name: "ucsIconSetting", parser: r }, { code: 71, name: "viewMode", parser: r }, { code: 281, name: "renderMode", parser: r }, { code: 1, name: "styleSheet", parser: r }, { code: [331, 441], name: "frozenLayers", parser: r, isMultiple: !0 }, { code: 72, name: "circleSides", parser: r }, { code: 51, name: "viewTwistAngle", parser: r }, { code: 50, name: "snapRotationAngle", parser: r }, { code: 45, name: "viewHeight", parser: r }, { code: 44, name: "backClippingPlane", parser: r }, { code: 43, name: "frontClippingPlane", parser: r }, { code: 42, name: "lensLength", parser: r }, { code: 17, name: "viewTarget", parser: o }, { code: 16, name: "viewDirectionFromTarget", parser: o }, { code: 15, name: "gridSpacing", parser: o }, { code: 14, name: "snapSpacing", parser: o }, { code: 13, name: "snapBasePoint", parser: o }, { code: 12, name: "center", parser: o }, { code: 11, name: "upperRightCorner", parser: o }, { code: 10, name: "lowerLeftCorner", parser: o }, { code: 70, name: "standardFlag", parser: r }, { code: 2, name: "name", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...de]), jt = { APPID: kt, BLOCK_RECORD: _t, DIMSTYLE: wt, LAYER: Rt, LTYPE: Pt, STYLE: Vt, UCS: Ut, VIEW: Ht, VPORT: Wt }, Yt = l([{ code: 70, name: "maxNumberOfEntries", parser: r }, { code: 100, name: "subclassMarker", parser: r }, { code: 330, name: "ownerObjectId", parser: r }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 360, isMultiple: !0 }, { code: 5, name: "handle", parser: r }, { code: 2, name: "name", parser: r }]);
function Xt(e, a) {
  var t;
  let n = {};
  for (; !m(e, 0, "EOF") && !m(e, 0, "ENDSEC"); ) {
    if (m(e, 0, "TABLE")) {
      e = a.next();
      let s = { entries: [] };
      Yt(e, a, s), n[s.name] = s;
    }
    if (m(e, 0) && !m(e, 0, "ENDTAB")) {
      let s = e.value;
      e = a.next();
      let c = jt[s];
      if (!c) {
        a.debug, e = a.next();
        continue;
      }
      let p = {};
      c(e, a, p), (t = n[s]) == null || t.entries.push(p);
    }
    e = a.next();
  }
  return n;
}
function zt(e, a) {
  let n = {};
  for (; !m(e, 0, "EOF") && !m(e, 0, "ENDSEC"); ) {
    if (m(e, 0, "BLOCK")) {
      let t = Kt(e = a.next(), a);
      Va(t), t.name && (n[t.name] = t);
    }
    e = a.next();
  }
  return n;
}
function Kt(e, a) {
  let n = {};
  for (; !m(e, 0, "EOF"); ) {
    if (m(e, 0, "ENDBLK")) {
      for (e = a.next(); !m(e, 0, "EOF"); ) {
        if (m(e, 100, "AcDbBlockEnd")) return n;
        e = a.next();
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
        n.position = ue(a);
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
        n.entities = Ba(e, a);
    }
    e = a.next();
  }
  return n;
}
let pe = [{ code: 330, name: "ownerObjectId", parser: r }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 102, parser: z }, { code: 5, name: "handle", parser: r }], Ua = [{ code: 333, name: "shadePlotId", parser: r }, { code: 149, name: "imageOriginY", parser: r }, { code: 148, name: "imageOriginX", parser: r }, { code: 147, name: "scaleFactor", parser: r }, { code: 78, name: "shadePlotCustomDPI", parser: r }, { code: 77, name: "shadePlotResolution", parser: r }, { code: 76, name: "shadePlotMode", parser: r }, { code: 75, name: "standardScaleType", parser: r }, { code: 7, name: "currentStyleSheet", parser: r }, { code: 74, name: "plotType", parser: r }, { code: 73, name: "plotRotation", parser: r }, { code: 72, name: "plotPaperUnit", parser: r }, { code: 70, name: "layoutFlag", parser: r }, { code: 143, name: "printScaleDenominator", parser: r }, { code: 142, name: "printScaleNumerator", parser: r }, { code: 141, name: "windowAreaYMax", parser: r }, { code: 140, name: "windowAreaXMax", parser: r }, { code: 49, name: "windowAreaYMin", parser: r }, { code: 48, name: "windowAreaXMin", parser: r }, { code: 47, name: "plotOriginY", parser: r }, { code: 46, name: "plotOriginX", parser: r }, { code: 45, name: "paperHeight", parser: r }, { code: 44, name: "paperWidth", parser: r }, { code: 43, name: "marginTop", parser: r }, { code: 42, name: "marginRight", parser: r }, { code: 41, name: "marginBottom", parser: r }, { code: 40, name: "marginLeft", parser: r }, { code: 6, name: "plotViewName", parser: r }, { code: 4, name: "paperSize", parser: r }, { code: 2, name: "configName", parser: r }, { code: 1, name: "pageSetupName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...pe], Zt = [{ code: 346, name: "orthographicUcsId", parser: r }, { code: 345, name: "namedUcsId", parser: r }, { code: 331, name: "viewportId", parser: r }, { code: 330, name: "paperSpaceTableId", parser: r }, { code: 76, name: "orthographicType", parser: r }, { code: 17, name: "ucsYAxis", parser: o }, { code: 16, name: "ucsXAxis", parser: o }, { code: 13, name: "ucsOrigin", parser: o }, { code: 146, name: "elevation", parser: r }, { code: 15, name: "maxExtent", parser: o }, { code: 14, name: "minExtent", parser: o }, { code: 12, name: "insertionPoint", parser: o }, { code: 11, name: "maxLimit", parser: o }, { code: 10, name: "minLimit", parser: o }, { code: 71, name: "tabOrder", parser: r }, { code: 70, name: "controlFlag", parser: r }, { code: 1, name: "layoutName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...Ua], Jt = [{ code: 3, name: "entries", parser: (e, a) => {
  let n = { name: e.value };
  return (e = a.next()).code === 350 ? n.objectSoftId = e.value : e.code === 360 ? n.objectHardId = e.value : a.rewind(), n;
}, isMultiple: !0 }, { code: 281, name: "recordCloneFlag", parser: r }, { code: 280, name: "isHardOwned", parser: i }, { code: 100, name: "subclassMarker", parser: r }, ...pe], $t = [{ code: 40, name: "wcsToOCSTransform", parser: vr }, { code: 40, name: "ocsToWCSTransform", parser: vr }, { code: 41, name: "backClippingDistance", parser: r }, { code: 73, name: "isBackClipping", parser: i, pushContext: !0 }, { code: 40, name: "frontClippingDistance", parser: r }, { code: 72, name: "isFrontClipping", parser: i, pushContext: !0 }, { code: 71, name: "isClipBoundaryDisplayed", parser: i }, { code: 11, name: "position", parser: o }, { code: 210, name: "normal", parser: o }, { code: 10, name: "boundaryVertices", parser: o, isMultiple: !0 }, { code: 70, name: "boundaryCount", parser: r }, { code: 100, name: "subclassMarker", parser: r }, { code: 100 }, ...pe];
function vr(e, a) {
  let n = [];
  for (let t = 0; t < 3 && m(e, 40); ++t) {
    let s = [];
    for (let c = 0; c < 4 && m(e, 40); ++c) s.push(e.value), e = a.next();
    n.push(s);
  }
  return a.rewind(), n;
}
let qt = [{ code: 330, name: "imageDefReactorIdSoft", isMultiple: !0, parser: r }, { code: 90, name: "version", parser: r }, { code: 1, name: "fileName", parser: r }, { code: 10, name: "size", parser: o }, { code: 11, name: "sizeOfOnePixel", parser: o }, { code: 280, name: "isLoaded", parser: r }, { code: 281, name: "resolutionUnits", parser: r }, { code: 100, name: "subclassMarker", parser: r }], Qt = [{ code: 179, name: "unknown1", parser: r }, { code: 170, name: "contentType", parser: r }, { code: 171, name: "drawMLeaderOrderType", parser: r }, { code: 172, name: "drawLeaderOrderType", parser: r }, { code: 90, name: "maxLeaderSegmentPoints", parser: r }, { code: 40, name: "firstSegmentAngleConstraint", parser: r }, { code: 41, name: "secondSegmentAngleConstraint", parser: r }, { code: 173, name: "leaderLineType", parser: r }, { code: 91, name: "leaderLineColor", parser: r }, { code: 340, name: "leaderLineTypeId", parser: r }, { code: 92, name: "leaderLineWeight", parser: r }, { code: 290, name: "landingEnabled", parser: i }, { code: 42, name: "landingGap", parser: r }, { code: 291, name: "doglegEnabled", parser: i }, { code: 43, name: "doglegLength", parser: r }, { code: 3, name: "description", parser: r }, { code: 341, name: "arrowheadId", parser: r }, { code: 44, name: "arrowheadSize", parser: r }, { code: 300, name: "defaultMTextContents", parser: r }, { code: 342, name: "textStyleId", parser: r }, { code: 174, name: "textLeftAttachmentType", parser: r }, { code: 175, name: "textAngleType", parser: r }, { code: 176, name: "textAlignmentType", parser: r }, { code: 178, name: "textRightAttachmentType", parser: r }, { code: 93, name: "textColor", parser: r }, { code: 45, name: "textHeight", parser: r }, { code: 292, name: "textFrameEnabled", parser: i }, { code: 297, name: "textAlignAlwaysLeft", parser: i }, { code: 46, name: "alignSpace", parser: r }, { code: 343, name: "blockContentId", parser: r }, { code: 94, name: "blockContentColor", parser: r }, { code: 47, name: "blockContentScale.x", parser: r }, { code: 49, name: "blockContentScale.y", parser: r }, { code: 140, name: "blockContentScale.z", parser: r }, { code: 293, name: "blockContentScaleEnabled", parser: i }, { code: 141, name: "blockContentRotation", parser: r }, { code: 294, name: "blockContentRotationEnabled", parser: i }, { code: 177, name: "blockContentConnectionType", parser: r }, { code: 142, name: "scale", parser: r }, { code: 295, name: "overwritePropertyValue", parser: i }, { code: 296, name: "annotative", parser: i }, { code: 143, name: "breakGapSize", parser: r }, { code: 271, name: "textAttachmentDirection", parser: r }, { code: 272, name: "bottomTextAttachmentDirection", parser: r }, { code: 273, name: "topTextAttachmentDirection", parser: r }, { code: 298, name: "unknown2", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...pe];
function qe(e, a, n) {
  e.elements || (e.elements = []);
  let t = e.elements.find((s) => s[a] === void 0);
  if (t) {
    t[a] = n;
    return;
  }
  e.elements.push({ [a]: n });
}
let eo = [{ code: 6, parser: function({ value: e }, a, n) {
  qe(n, "lineType", e);
}, isMultiple: !0 }, { code: 62, parser: function({ value: e }, a, n) {
  var t;
  if (n.fillColorIndex === void 0 && !((t = n.elements) != null && t.length)) {
    n.fillColorIndex = e;
    return;
  }
  qe(n, "colorIndex", e);
}, isMultiple: !0 }, { code: 420, parser: function({ value: e }, a, n) {
  var t;
  if (n.fillColor === void 0 && !((t = n.elements) != null && t.length)) {
    n.fillColor = e;
    return;
  }
  qe(n, "color", e);
}, isMultiple: !0 }, { code: 49, parser: function({ value: e }, a, n) {
  qe(n, "offset", e);
}, isMultiple: !0 }, { code: 71, name: "elementCount", parser: r }, { code: 52, name: "endAngle", parser: r }, { code: 51, name: "startAngle", parser: r }, { code: 3, name: "description", parser: r }, { code: 70, name: "flags", parser: r }, { code: 2, name: "styleName", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...pe], ro = [{ code: 340, name: "entityIds", parser: r, isMultiple: !0 }, { code: 71, name: "isSelectable", parser: i }, { code: 70, name: "isUnnamed", parser: i }, { code: 300, name: "description", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...pe], ao = [{ code: 8, name: "layerNames", parser: r, isMultiple: !0 }, { code: 100, name: "subclassMarker", parser: r }, { code: 100, name: "filterSubclassMarker", parser: r }, ...pe], no = [{ code: 90, name: "idBufferEntryCounts", parser: r, isMultiple: !0 }, { code: 360, name: "idBufferIds", parser: r, isMultiple: !0 }, { code: 8, name: "layerNames", parser: r, isMultiple: !0 }, { code: 100, name: "subclassMarker", parser: r }, { code: 40, name: "timeStamp", parser: r }, { code: 100, name: "indexSubclassMarker", parser: r }, ...pe], to = [{ code: 75, name: "hasLastPointRef", parser: i }, { code: 1, name: "pointRefs", parser: function(e, a) {
  let n = { className: e.value };
  for (; ; ) switch ((e = a.next()).code) {
    case 72:
      n.objectOsnapType = e.value;
      continue;
    case 331:
      n.mainObjectId = e.value;
      continue;
    case 73:
      n.mainObjectSubentityType = e.value;
      continue;
    case 91:
      n.mainObjectGsMarker = e.value;
      continue;
    case 301:
      n.mainObjectXrefHandle = e.value;
      continue;
    case 40:
      n.nearOsnapGeometryParameter = e.value;
      continue;
    case 10:
      {
        let t = o(e, a);
        n.osnapPoint = "z" in t ? t : { ...t, z: 0 };
      }
      continue;
    case 332:
      n.intersectionObjectId = e.value;
      continue;
    case 74:
      n.intersectionObjectSubentityType = e.value;
      continue;
    case 92:
      n.intersectionObjectGsMarker = e.value;
      continue;
    case 302:
      n.intersectionObjectXrefHandle = e.value;
      continue;
    default:
      return a.rewind(), n;
  }
}, isMultiple: !0 }, { code: 71, name: "rotatedDimensionType", parser: r }, { code: 70, name: "transSpaceFlag", parser: i }, { code: 90, name: "associativityFlag", parser: r }, { code: 330, name: "dimensionObjectId", parser: r }, { code: 100, name: "subclassMarker", parser: r }, ...pe], oo = { LAYOUT: Zt, PLOTSETTINGS: Ua, DICTIONARY: Jt, SPATIAL_FILTER: $t, IMAGEDEF: qt, MLEADERSTYLE: Qt, MLINESTYLE: eo, GROUP: ro, LAYER_FILTER: ao, LAYER_INDEX: no, DIMASSOC: to };
function so(e, a) {
  let n = [];
  for (; e.code !== 0 || !["EOF", "ENDSEC"].includes(e.value); ) {
    let t = e.value, s = oo[t];
    if (e.code === 0 && (s != null && s.length)) {
      let c = l(s), p = { name: t };
      c(e = a.next(), a, p) ? (n.push(p), e = a.peek()) : e = a.next();
    } else e = a.next();
  }
  return { byName: In(n, ({ name: t }) => t) };
}
function Ke(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
class co {
  constructor() {
    Ke(this, "encoding", "utf-8"), Ke(this, "encodingFailureFatal", !1), Ke(this, "thumbnailImageFormat", "base64");
  }
}
class io extends EventTarget {
  parseSync(a, n = !1) {
    let t = new gr(a.split(/\r\n|\r|\n/g), n);
    if (!t.hasNext()) throw Error("Empty file");
    return this.parseAll(t);
  }
  parseStream(a) {
    let n = "", t = this;
    return new Promise((s, c) => {
      a.on("data", (p) => {
        n += p;
      }), a.on("end", () => {
        try {
          let p = n.split(/\r\n|\r|\n/g), f = new gr(p);
          if (!f.hasNext()) throw Error("Empty file");
          s(t.parseAll(f));
        } catch (p) {
          c(p);
        }
      }), a.on("error", (p) => {
        c(p);
      });
    });
  }
  async parseFromUrl(a, n) {
    let t = await fetch(a, n);
    if (!t.body) return null;
    let s = t.body.getReader(), c = "";
    for (; ; ) {
      let { done: p, value: f } = await s.read();
      if (p) {
        c += this._decoder.decode(new ArrayBuffer(0), { stream: !1 });
        break;
      }
      c += this._decoder.decode(f, { stream: !0 });
    }
    return this.parseSync(c);
  }
  parseAll(a) {
    let n = { header: {}, blocks: {}, entities: [], tables: {}, objects: { byName: {}, byTree: void 0 } }, t = a.next();
    for (; !m(t, 0, "EOF"); ) m(t, 0, "SECTION") && (m(t = a.next(), 2, "HEADER") ? n.header = Mt(t = a.next(), a) : m(t, 2, "CLASSES") ? Qa(t = a.next(), a, n) : m(t, 2, "BLOCKS") ? n.blocks = zt(t = a.next(), a) : m(t, 2, "ENTITIES") ? n.entities = Ba(t = a.next(), a) : m(t, 2, "TABLES") ? n.tables = Xt(t = a.next(), a) : m(t, 2, "OBJECTS") ? n.objects = so(t = a.next(), a) : m(t, 2, "THUMBNAILIMAGE") && (n.thumbnailImage = function(s, c, p = "base64") {
      let f, d = "", x = 0;
      for (; !m(s, 0, "EOF") && !m(s, 0, "ENDSEC"); ) s.code === 90 ? x = s.value : s.code === 310 && (d += s.value), s = c.next();
      if (p === "hex") f = d;
      else {
        let E = function(b) {
          let g = b.length / 2, O = new Uint8Array(g);
          for (let v = 0; v < g; v++) O[v] = parseInt(b.substr(2 * v, 2), 16);
          return O;
        }(d);
        f = p === "buffer" ? E : function(b) {
          let g = "";
          for (let O = 0; O < b.length; O++) g += String.fromCharCode(b[O]);
          return btoa(g);
        }(E);
      }
      return { size: x, data: f };
    }(t = a.next(), a, this._options.thumbnailImageFormat))), t = a.next();
    return n;
  }
  constructor(a = {}) {
    super(), Ke(this, "_decoder", void 0), Ke(this, "_options", void 0);
    let n = new co();
    this._options = Object.assign(n, a), this._decoder = new TextDecoder(this._options.encoding, { fatal: this._options.encodingFailureFatal });
  }
}
(B = {})[B.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", B[B.KEEP_EXISTING = 1] = "KEEP_EXISTING", B[B.USE_CLONE = 2] = "USE_CLONE", B[B.XREF_VALUE_NAME = 3] = "XREF_VALUE_NAME", B[B.VALUE_NAME = 4] = "VALUE_NAME", B[B.UNMANGLE_NAME = 5] = "UNMANGLE_NAME";
(Ae = {})[Ae.NOUNIT = 0] = "NOUNIT", Ae[Ae.CENTIMETERS = 2] = "CENTIMETERS", Ae[Ae.INCH = 5] = "INCH";
(Xe = {})[Xe.PSLTSCALE = 1] = "PSLTSCALE", Xe[Xe.LIMCHECK = 2] = "LIMCHECK";
(De = {})[De.INCHES = 0] = "INCHES", De[De.MILLIMETERS = 1] = "MILLIMETERS", De[De.PIXELS = 2] = "PIXELS";
(U = {})[U.LAST_SCREEN_DISPLAY = 0] = "LAST_SCREEN_DISPLAY", U[U.DRAWING_EXTENTS = 1] = "DRAWING_EXTENTS", U[U.DRAWING_LIMITS = 2] = "DRAWING_LIMITS", U[U.VIEW_SPECIFIED = 3] = "VIEW_SPECIFIED", U[U.WINDOW_SPECIFIED = 4] = "WINDOW_SPECIFIED", U[U.LAYOUT_INFORMATION = 5] = "LAYOUT_INFORMATION";
(ce = {})[ce.AS_DISPLAYED = 0] = "AS_DISPLAYED", ce[ce.WIREFRAME = 1] = "WIREFRAME", ce[ce.HIDDEN = 2] = "HIDDEN", ce[ce.RENDERED = 3] = "RENDERED";
(G = {})[G.DRAFT = 0] = "DRAFT", G[G.PREVIEW = 1] = "PREVIEW", G[G.NORMAL = 2] = "NORMAL", G[G.PRESENTATION = 3] = "PRESENTATION", G[G.MAXIMUM = 4] = "MAXIMUM", G[G.CUSTOM = 5] = "CUSTOM";
(ie = {})[ie.NONE = 0] = "NONE", ie[ie.AbsoluteRotation = 1] = "AbsoluteRotation", ie[ie.TextEmbedded = 2] = "TextEmbedded", ie[ie.ShapeEmbedded = 4] = "ShapeEmbedded";
(mr = {})[mr.PaperSpace = 1] = "PaperSpace";
(Le = {})[Le.XrefDependent = 16] = "XrefDependent", Le[Le.XrefResolved = 32] = "XrefResolved", Le[Le.Referenced = 64] = "Referenced";
(H = {})[H.Off = 0] = "Off", H[H.Perspective = 1] = "Perspective", H[H.ClipFront = 2] = "ClipFront", H[H.ClipBack = 4] = "ClipBack", H[H.UcsFollow = 8] = "UcsFollow", H[H.ClipFrontByFrontZ = 16] = "ClipFrontByFrontZ";
const Nr = [
  { name: "AC1.2", value: 1 },
  { name: "AC1.40", value: 2 },
  { name: "AC1.50", value: 3 },
  { name: "AC2.20", value: 4 },
  { name: "AC2.10", value: 5 },
  { name: "AC2.21", value: 6 },
  { name: "AC2.22", value: 7 },
  { name: "AC1001", value: 8 },
  { name: "AC1002", value: 9 },
  { name: "AC1003", value: 10 },
  { name: "AC1004", value: 11 },
  { name: "AC1005", value: 12 },
  { name: "AC1006", value: 13 },
  { name: "AC1007", value: 14 },
  { name: "AC1008", value: 15 },
  { name: "AC1009", value: 16 },
  { name: "AC1010", value: 17 },
  { name: "AC1011", value: 18 },
  { name: "AC1012", value: 19 },
  { name: "AC1013", value: 20 },
  { name: "AC1014", value: 21 },
  { name: "AC1500", value: 22 },
  { name: "AC1015", value: 23 },
  { name: "AC1800a", value: 24 },
  { name: "AC1018", value: 25 },
  { name: "AC2100a", value: 26 },
  { name: "AC1021", value: 27 },
  { name: "AC2400a", value: 28 },
  { name: "AC1024", value: 29 },
  { name: "AC1027", value: 31 },
  { name: "AC3200a", value: 32 },
  { name: "AC1032", value: 33 }
];
class lo {
  constructor(a) {
    if (typeof a == "string") {
      const n = Nr.find((t) => t.name === a);
      if (!n)
        throw new Error(`Unknown DWG version name: ${a}`);
      this.name = n.name, this.value = n.value;
      return;
    }
    if (typeof a == "number") {
      const n = Nr.find((t) => t.value === a);
      if (!n)
        throw new Error(`Unknown DWG version value: ${a}`);
      this.name = n.name, this.value = n.value;
      return;
    }
    throw new Error("Invalid constructor argument for AcDbDwgVersion");
  }
}
var Ga = /* @__PURE__ */ ((e) => (e[e.UTF8 = 0] = "UTF8", e[e.US_ASCII = 1] = "US_ASCII", e[e.ISO_8859_1 = 2] = "ISO_8859_1", e[e.ISO_8859_2 = 3] = "ISO_8859_2", e[e.ISO_8859_3 = 4] = "ISO_8859_3", e[e.ISO_8859_4 = 5] = "ISO_8859_4", e[e.ISO_8859_5 = 6] = "ISO_8859_5", e[e.ISO_8859_6 = 7] = "ISO_8859_6", e[e.ISO_8859_7 = 8] = "ISO_8859_7", e[e.ISO_8859_8 = 9] = "ISO_8859_8", e[e.ISO_8859_9 = 10] = "ISO_8859_9", e[e.CP437 = 11] = "CP437", e[e.CP850 = 12] = "CP850", e[e.CP852 = 13] = "CP852", e[e.CP855 = 14] = "CP855", e[e.CP857 = 15] = "CP857", e[e.CP860 = 16] = "CP860", e[e.CP861 = 17] = "CP861", e[e.CP863 = 18] = "CP863", e[e.CP864 = 19] = "CP864", e[e.CP865 = 20] = "CP865", e[e.CP869 = 21] = "CP869", e[e.CP932 = 22] = "CP932", e[e.MACINTOSH = 23] = "MACINTOSH", e[e.BIG5 = 24] = "BIG5", e[e.CP949 = 25] = "CP949", e[e.JOHAB = 26] = "JOHAB", e[e.CP866 = 27] = "CP866", e[e.ANSI_1250 = 28] = "ANSI_1250", e[e.ANSI_1251 = 29] = "ANSI_1251", e[e.ANSI_1252 = 30] = "ANSI_1252", e[e.GB2312 = 31] = "GB2312", e[e.ANSI_1253 = 32] = "ANSI_1253", e[e.ANSI_1254 = 33] = "ANSI_1254", e[e.ANSI_1255 = 34] = "ANSI_1255", e[e.ANSI_1256 = 35] = "ANSI_1256", e[e.ANSI_1257 = 36] = "ANSI_1257", e[e.ANSI_874 = 37] = "ANSI_874", e[e.ANSI_932 = 38] = "ANSI_932", e[e.ANSI_936 = 39] = "ANSI_936", e[e.ANSI_949 = 40] = "ANSI_949", e[e.ANSI_950 = 41] = "ANSI_950", e[e.ANSI_1361 = 42] = "ANSI_1361", e[e.UTF16 = 43] = "UTF16", e[e.ANSI_1258 = 44] = "ANSI_1258", e[e.UNDEFINED = 255] = "UNDEFINED", e))(Ga || {});
const po = [
  "utf-8",
  "utf-8",
  "iso-8859-1",
  "iso-8859-2",
  "iso-8859-3",
  "iso-8859-4",
  "iso-8859-5",
  "iso-8859-6",
  "iso-8859-7",
  "iso-8859-8",
  "iso-8859-9",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "utf-8",
  "shift-jis",
  "macintosh",
  "big5",
  "utf-8",
  "utf-8",
  "ibm866",
  "windows-1250",
  "windows-1251",
  "windows-1252",
  "gbk",
  "windows-1253",
  "windows-1254",
  "windows-1255",
  "windows-1256",
  "windows-1257",
  "windows-874",
  "shift-jis",
  "gbk",
  "euc-kr",
  "big5",
  "utf-8",
  "utf-16le",
  "windows-1258"
], uo = (e) => po[e];
class mo {
  parse(a) {
    const n = new io(), t = this.getDxfInfoFromBuffer(a);
    let s = "";
    return t.version && t.version.value <= 23 && t.encoding ? s = new TextDecoder(t.encoding).decode(a) : s = new TextDecoder().decode(a), n.parseSync(s);
  }
  getDxfInfoFromBuffer(a) {
    var x, E, b;
    const t = new TextDecoder("utf-8");
    let s = 0, c = "", p = null, f = null, d = !1;
    for (; s < a.byteLength; ) {
      const g = Math.min(s + 65536, a.byteLength), O = a.slice(s, g);
      s = g;
      const N = (c + t.decode(O, { stream: !0 })).split(/\r?\n/);
      c = N.pop() ?? "";
      for (let w = 0; w < N.length; w++) {
        const W = N[w].trim();
        if (W === "SECTION" && ((x = N[w + 2]) == null ? void 0 : x.trim()) === "HEADER")
          d = !0;
        else if (W === "ENDSEC" && d)
          return { version: p, encoding: f };
        if (d && W === "$ACADVER") {
          const me = (E = N[w + 2]) == null ? void 0 : E.trim();
          me && (p = new lo(me));
        } else if (d && W === "$DWGCODEPAGE") {
          const me = (b = N[w + 2]) == null ? void 0 : b.trim();
          if (me) {
            const cr = Ga[me];
            f = uo(cr);
          }
        }
        if (p && f)
          return { version: p, encoding: f };
      }
    }
    return { version: p, encoding: f };
  }
}
class fo {
  constructor() {
    this.setupMessageHandler();
  }
  setupMessageHandler() {
    self.onmessage = async (a) => {
      const { id: n, input: t } = a.data;
      try {
        const s = await this.executeTask(t);
        this.sendResponse(n, !0, s);
      } catch (s) {
        this.sendResponse(
          n,
          !1,
          void 0,
          s instanceof Error ? s.message : String(s)
        );
      }
    };
  }
  sendResponse(a, n, t, s) {
    const c = {
      id: a,
      success: n,
      data: t,
      error: s
    };
    self.postMessage(c);
  }
}
class Io extends fo {
  async executeTask(a) {
    return new mo().parse(a);
  }
}
const Eo = new Io();
export {
  Eo as dxfParser
};
