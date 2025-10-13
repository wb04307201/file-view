var ih = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports);
var md = ih((M) => {
  /**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const Ha = "172", Wa = "", Bt = "srgb", fi = "srgb-linear", pi = "linear", Ln = "srgb";
  class Fn {
    addEventListener(t, e) {
      this._listeners === void 0 && (this._listeners = {});
      const r = this._listeners;
      r[t] === void 0 && (r[t] = []), r[t].indexOf(e) === -1 && r[t].push(e);
    }
    hasEventListener(t, e) {
      if (this._listeners === void 0) return !1;
      const r = this._listeners;
      return r[t] !== void 0 && r[t].indexOf(e) !== -1;
    }
    removeEventListener(t, e) {
      if (this._listeners === void 0) return;
      const s = this._listeners[t];
      if (s !== void 0) {
        const i = s.indexOf(e);
        i !== -1 && s.splice(i, 1);
      }
    }
    dispatchEvent(t) {
      if (this._listeners === void 0) return;
      const r = this._listeners[t.type];
      if (r !== void 0) {
        t.target = this;
        const s = r.slice(0);
        for (let i = 0, a = s.length; i < a; i++)
          s[i].call(this, t);
        t.target = null;
      }
    }
  }
  const dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  function sr() {
    const n = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
    return (dt[n & 255] + dt[n >> 8 & 255] + dt[n >> 16 & 255] + dt[n >> 24 & 255] + "-" + dt[t & 255] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 15 | 64] + dt[t >> 24 & 255] + "-" + dt[e & 63 | 128] + dt[e >> 8 & 255] + "-" + dt[e >> 16 & 255] + dt[e >> 24 & 255] + dt[r & 255] + dt[r >> 8 & 255] + dt[r >> 16 & 255] + dt[r >> 24 & 255]).toLowerCase();
  }
  function Z(n, t, e) {
    return Math.max(t, Math.min(e, n));
  }
  function ah(n, t) {
    return (n % t + t) % t;
  }
  function _n(n, t, e) {
    return (1 - e) * n + e * t;
  }
  function ur(n, t) {
    switch (t.constructor) {
      case Float32Array:
        return n;
      case Uint32Array:
        return n / 4294967295;
      case Uint16Array:
        return n / 65535;
      case Uint8Array:
        return n / 255;
      case Int32Array:
        return Math.max(n / 2147483647, -1);
      case Int16Array:
        return Math.max(n / 32767, -1);
      case Int8Array:
        return Math.max(n / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function xt(n, t) {
    switch (t.constructor) {
      case Float32Array:
        return n;
      case Uint32Array:
        return Math.round(n * 4294967295);
      case Uint16Array:
        return Math.round(n * 65535);
      case Uint8Array:
        return Math.round(n * 255);
      case Int32Array:
        return Math.round(n * 2147483647);
      case Int16Array:
        return Math.round(n * 32767);
      case Int8Array:
        return Math.round(n * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  class D {
    constructor(t = 0, e = 0) {
      D.prototype.isVector2 = !0, this.x = t, this.y = e;
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return this.x = t, this.y = e, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this;
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x, r = this.y, s = t.elements;
      return this.x = s[0] * e + s[3] * r + s[6], this.y = s[1] * e + s[4] * r + s[7], this;
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    }
    clamp(t, e) {
      return this.x = Z(this.x, t.x, e.x), this.y = Z(this.y, t.y, e.y), this;
    }
    clampScalar(t, e) {
      return this.x = Z(this.x, t, e), this.y = Z(this.y, t, e), this;
    }
    clampLength(t, e) {
      const r = this.length();
      return this.divideScalar(r || 1).multiplyScalar(Z(r, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      const r = this.dot(t) / e;
      return Math.acos(Z(r, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x, r = this.y - t.y;
      return e * e + r * r;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    }
    lerpVectors(t, e, r) {
      return this.x = t.x + (e.x - t.x) * r, this.y = t.y + (e.y - t.y) * r, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this;
    }
    rotateAround(t, e) {
      const r = Math.cos(e), s = Math.sin(e), i = this.x - t.x, a = this.y - t.y;
      return this.x = i * r - a * s + t.x, this.y = i * s + a * r + t.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Se {
    constructor(t, e, r, s, i, a, o, h, u) {
      Se.prototype.isMatrix3 = !0, this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], t !== void 0 && this.set(t, e, r, s, i, a, o, h, u);
    }
    set(t, e, r, s, i, a, o, h, u) {
      const l = this.elements;
      return l[0] = t, l[1] = s, l[2] = o, l[3] = e, l[4] = i, l[5] = h, l[6] = r, l[7] = a, l[8] = u, this;
    }
    identity() {
      return this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ), this;
    }
    copy(t) {
      const e = this.elements, r = t.elements;
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], this;
    }
    extractBasis(t, e, r) {
      return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), r.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return this.set(
        e[0],
        e[4],
        e[8],
        e[1],
        e[5],
        e[9],
        e[2],
        e[6],
        e[10]
      ), this;
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const r = t.elements, s = e.elements, i = this.elements, a = r[0], o = r[3], h = r[6], u = r[1], l = r[4], f = r[7], c = r[2], p = r[5], d = r[8], g = s[0], y = s[3], m = s[6], b = s[1], v = s[4], x = s[7], F = s[2], C = s[5], T = s[8];
      return i[0] = a * g + o * b + h * F, i[3] = a * y + o * v + h * C, i[6] = a * m + o * x + h * T, i[1] = u * g + l * b + f * F, i[4] = u * y + l * v + f * C, i[7] = u * m + l * x + f * T, i[2] = c * g + p * b + d * F, i[5] = c * y + p * v + d * C, i[8] = c * m + p * x + d * T, this;
    }
    multiplyScalar(t) {
      const e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
    }
    determinant() {
      const t = this.elements, e = t[0], r = t[1], s = t[2], i = t[3], a = t[4], o = t[5], h = t[6], u = t[7], l = t[8];
      return e * a * l - e * o * u - r * i * l + r * o * h + s * i * u - s * a * h;
    }
    invert() {
      const t = this.elements, e = t[0], r = t[1], s = t[2], i = t[3], a = t[4], o = t[5], h = t[6], u = t[7], l = t[8], f = l * a - o * u, c = o * h - l * i, p = u * i - a * h, d = e * f + r * c + s * p;
      if (d === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const g = 1 / d;
      return t[0] = f * g, t[1] = (s * u - l * r) * g, t[2] = (o * r - s * a) * g, t[3] = c * g, t[4] = (l * e - s * h) * g, t[5] = (s * i - o * e) * g, t[6] = p * g, t[7] = (r * h - u * e) * g, t[8] = (a * e - r * i) * g, this;
    }
    transpose() {
      let t;
      const e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    }
    setUvTransform(t, e, r, s, i, a, o) {
      const h = Math.cos(i), u = Math.sin(i);
      return this.set(
        r * h,
        r * u,
        -r * (h * a + u * o) + a + t,
        -s * u,
        s * h,
        -s * (-u * a + h * o) + o + e,
        0,
        0,
        1
      ), this;
    }
    //
    scale(t, e) {
      return this.premultiply(Rn.makeScale(t, e)), this;
    }
    rotate(t) {
      return this.premultiply(Rn.makeRotation(-t)), this;
    }
    translate(t, e) {
      return this.premultiply(Rn.makeTranslation(t, e)), this;
    }
    // for 2D Transforms
    makeTranslation(t, e) {
      return t.isVector2 ? this.set(
        1,
        0,
        t.x,
        0,
        1,
        t.y,
        0,
        0,
        1
      ) : this.set(
        1,
        0,
        t,
        0,
        1,
        e,
        0,
        0,
        1
      ), this;
    }
    makeRotation(t) {
      const e = Math.cos(t), r = Math.sin(t);
      return this.set(
        e,
        -r,
        0,
        r,
        e,
        0,
        0,
        0,
        1
      ), this;
    }
    makeScale(t, e) {
      return this.set(
        t,
        0,
        0,
        0,
        e,
        0,
        0,
        0,
        1
      ), this;
    }
    //
    equals(t) {
      const e = this.elements, r = t.elements;
      for (let s = 0; s < 9; s++)
        if (e[s] !== r[s]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let r = 0; r < 9; r++)
        this.elements[r] = t[r + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const r = this.elements;
      return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Rn = /* @__PURE__ */ new Se();
  function oh(n) {
    for (let t = n.length - 1; t >= 0; --t)
      if (n[t] >= 65535) return !0;
    return !1;
  }
  function di(n) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", n);
  }
  const gi = /* @__PURE__ */ new Se().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ), mi = /* @__PURE__ */ new Se().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
  function hh() {
    const n = {
      enabled: !0,
      workingColorSpace: fi,
      /**
       * Implementations of supported color spaces.
       *
       * Required:
       *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
       *	- whitePoint: reference white [ x y ]
       *	- transfer: transfer function (pre-defined)
       *	- toXYZ: Matrix3 RGB to XYZ transform
       *	- fromXYZ: Matrix3 XYZ to RGB transform
       *	- luminanceCoefficients: RGB luminance coefficients
       *
       * Optional:
       *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
       *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
       *
       * Reference:
       * - https://www.russellcottrell.com/photo/matrixCalculator.htm
       */
      spaces: {},
      convert: function(s, i, a) {
        return this.enabled === !1 || i === a || !i || !a || (this.spaces[i].transfer === Ln && (s.r = oe(s.r), s.g = oe(s.g), s.b = oe(s.b)), this.spaces[i].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[i].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ln && (s.r = Ke(s.r), s.g = Ke(s.g), s.b = Ke(s.b))), s;
      },
      fromWorkingColorSpace: function(s, i) {
        return this.convert(s, this.workingColorSpace, i);
      },
      toWorkingColorSpace: function(s, i) {
        return this.convert(s, i, this.workingColorSpace);
      },
      getPrimaries: function(s) {
        return this.spaces[s].primaries;
      },
      getTransfer: function(s) {
        return s === Wa ? pi : this.spaces[s].transfer;
      },
      getLuminanceCoefficients: function(s, i = this.workingColorSpace) {
        return s.fromArray(this.spaces[i].luminanceCoefficients);
      },
      define: function(s) {
        Object.assign(this.spaces, s);
      },
      // Internal APIs
      _getMatrix: function(s, i, a) {
        return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(s) {
        return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(s = this.workingColorSpace) {
        return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
      }
    }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], r = [0.3127, 0.329];
    return n.define({
      [fi]: {
        primaries: t,
        whitePoint: r,
        transfer: pi,
        toXYZ: gi,
        fromXYZ: mi,
        luminanceCoefficients: e,
        workingColorSpaceConfig: { unpackColorSpace: Bt },
        outputColorSpaceConfig: { drawingBufferColorSpace: Bt }
      },
      [Bt]: {
        primaries: t,
        whitePoint: r,
        transfer: Ln,
        toXYZ: gi,
        fromXYZ: mi,
        luminanceCoefficients: e,
        outputColorSpaceConfig: { drawingBufferColorSpace: Bt }
      }
    }), n;
  }
  const Lt = /* @__PURE__ */ hh();
  function oe(n) {
    return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
  }
  function Ke(n) {
    return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
  }
  let Ie;
  class uh {
    static getDataURL(t) {
      if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
        return t.src;
      let e;
      if (t instanceof HTMLCanvasElement)
        e = t;
      else {
        Ie === void 0 && (Ie = di("canvas")), Ie.width = t.width, Ie.height = t.height;
        const r = Ie.getContext("2d");
        t instanceof ImageData ? r.putImageData(t, 0, 0) : r.drawImage(t, 0, 0, t.width, t.height), e = Ie;
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
    }
    static sRGBToLinear(t) {
      if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
        const e = di("canvas");
        e.width = t.width, e.height = t.height;
        const r = e.getContext("2d");
        r.drawImage(t, 0, 0, t.width, t.height);
        const s = r.getImageData(0, 0, t.width, t.height), i = s.data;
        for (let a = 0; a < i.length; a++)
          i[a] = oe(i[a] / 255) * 255;
        return r.putImageData(s, 0, 0), e;
      } else if (t.data) {
        const e = t.data.slice(0);
        for (let r = 0; r < e.length; r++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[r] = Math.floor(oe(e[r] / 255) * 255) : e[r] = oe(e[r]);
        return {
          data: e,
          width: t.width,
          height: t.height
        };
      } else
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
    }
  }
  let lh = 0;
  class ch {
    constructor(t = null) {
      this.isSource = !0, Object.defineProperty(this, "id", { value: lh++ }), this.uuid = sr(), this.data = t, this.dataReady = !0, this.version = 0;
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    toJSON(t) {
      const e = t === void 0 || typeof t == "string";
      if (!e && t.images[this.uuid] !== void 0)
        return t.images[this.uuid];
      const r = {
        uuid: this.uuid,
        url: ""
      }, s = this.data;
      if (s !== null) {
        let i;
        if (Array.isArray(s)) {
          i = [];
          for (let a = 0, o = s.length; a < o; a++)
            s[a].isDataTexture ? i.push(Un(s[a].image)) : i.push(Un(s[a]));
        } else
          i = Un(s);
        r.url = i;
      }
      return e || (t.images[this.uuid] = r), r;
    }
  }
  function Un(n) {
    return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? uh.getDataURL(n) : n.data ? {
      data: Array.from(n.data),
      width: n.width,
      height: n.height,
      type: n.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let fh = 0;
  class _e extends Fn {
    constructor(t = _e.DEFAULT_IMAGE, e = _e.DEFAULT_MAPPING, r = 1001, s = 1001, i = 1006, a = 1008, o = 1023, h = 1009, u = _e.DEFAULT_ANISOTROPY, l = Wa) {
      super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: fh++ }), this.uuid = sr(), this.name = "", this.source = new ch(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = r, this.wrapT = s, this.magFilter = i, this.minFilter = a, this.anisotropy = u, this.format = o, this.internalFormat = null, this.type = h, this.offset = new D(0, 0), this.repeat = new D(1, 1), this.center = new D(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Se(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(t = null) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
    }
    toJSON(t) {
      const e = t === void 0 || typeof t == "string";
      if (!e && t.textures[this.uuid] !== void 0)
        return t.textures[this.uuid];
      const r = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (r.userData = this.userData), e || (t.textures[this.uuid] = r), r;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (this.mapping !== 300) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
        switch (this.wrapS) {
          case 1e3:
            t.x = t.x - Math.floor(t.x);
            break;
          case 1001:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case 1002:
            Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            break;
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case 1e3:
            t.y = t.y - Math.floor(t.y);
            break;
          case 1001:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case 1002:
            Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            break;
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      t === !0 && (this.version++, this.source.needsUpdate = !0);
    }
    set needsPMREMUpdate(t) {
      t === !0 && this.pmremVersion++;
    }
  }
  _e.DEFAULT_IMAGE = null;
  _e.DEFAULT_MAPPING = 300;
  _e.DEFAULT_ANISOTROPY = 1;
  class Lr {
    constructor(t = 0, e = 0, r = 0, s = 1) {
      Lr.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = r, this.w = s;
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, r, s) {
      return this.x = t, this.y = e, this.z = r, this.w = s, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setZ(t) {
      return this.z = t, this;
    }
    setW(t) {
      return this.w = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    }
    applyMatrix4(t) {
      const e = this.x, r = this.y, s = this.z, i = this.w, a = t.elements;
      return this.x = a[0] * e + a[4] * r + a[8] * s + a[12] * i, this.y = a[1] * e + a[5] * r + a[9] * s + a[13] * i, this.z = a[2] * e + a[6] * r + a[10] * s + a[14] * i, this.w = a[3] * e + a[7] * r + a[11] * s + a[15] * i, this;
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, r, s, i;
      const h = t.elements, u = h[0], l = h[4], f = h[8], c = h[1], p = h[5], d = h[9], g = h[2], y = h[6], m = h[10];
      if (Math.abs(l - c) < 0.01 && Math.abs(f - g) < 0.01 && Math.abs(d - y) < 0.01) {
        if (Math.abs(l + c) < 0.1 && Math.abs(f + g) < 0.1 && Math.abs(d + y) < 0.1 && Math.abs(u + p + m - 3) < 0.1)
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const v = (u + 1) / 2, x = (p + 1) / 2, F = (m + 1) / 2, C = (l + c) / 4, T = (f + g) / 4, k = (d + y) / 4;
        return v > x && v > F ? v < 0.01 ? (r = 0, s = 0.707106781, i = 0.707106781) : (r = Math.sqrt(v), s = C / r, i = T / r) : x > F ? x < 0.01 ? (r = 0.707106781, s = 0, i = 0.707106781) : (s = Math.sqrt(x), r = C / s, i = k / s) : F < 0.01 ? (r = 0.707106781, s = 0.707106781, i = 0) : (i = Math.sqrt(F), r = T / i, s = k / i), this.set(r, s, i, e), this;
      }
      let b = Math.sqrt((y - d) * (y - d) + (f - g) * (f - g) + (c - l) * (c - l));
      return Math.abs(b) < 1e-3 && (b = 1), this.x = (y - d) / b, this.y = (f - g) / b, this.z = (c - l) / b, this.w = Math.acos((u + p + m - 1) / 2), this;
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
    }
    clamp(t, e) {
      return this.x = Z(this.x, t.x, e.x), this.y = Z(this.y, t.y, e.y), this.z = Z(this.z, t.z, e.z), this.w = Z(this.w, t.w, e.w), this;
    }
    clampScalar(t, e) {
      return this.x = Z(this.x, t, e), this.y = Z(this.y, t, e), this.z = Z(this.z, t, e), this.w = Z(this.w, t, e), this;
    }
    clampLength(t, e) {
      const r = this.length();
      return this.divideScalar(r || 1).multiplyScalar(Z(r, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
    }
    lerpVectors(t, e, r) {
      return this.x = t.x + (e.x - t.x) * r, this.y = t.y + (e.y - t.y) * r, this.z = t.z + (e.z - t.z) * r, this.w = t.w + (e.w - t.w) * r, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class we {
    constructor(t = 0, e = 0, r = 0, s = 1) {
      this.isQuaternion = !0, this._x = t, this._y = e, this._z = r, this._w = s;
    }
    static slerpFlat(t, e, r, s, i, a, o) {
      let h = r[s + 0], u = r[s + 1], l = r[s + 2], f = r[s + 3];
      const c = i[a + 0], p = i[a + 1], d = i[a + 2], g = i[a + 3];
      if (o === 0) {
        t[e + 0] = h, t[e + 1] = u, t[e + 2] = l, t[e + 3] = f;
        return;
      }
      if (o === 1) {
        t[e + 0] = c, t[e + 1] = p, t[e + 2] = d, t[e + 3] = g;
        return;
      }
      if (f !== g || h !== c || u !== p || l !== d) {
        let y = 1 - o;
        const m = h * c + u * p + l * d + f * g, b = m >= 0 ? 1 : -1, v = 1 - m * m;
        if (v > Number.EPSILON) {
          const F = Math.sqrt(v), C = Math.atan2(F, m * b);
          y = Math.sin(y * C) / F, o = Math.sin(o * C) / F;
        }
        const x = o * b;
        if (h = h * y + c * x, u = u * y + p * x, l = l * y + d * x, f = f * y + g * x, y === 1 - o) {
          const F = 1 / Math.sqrt(h * h + u * u + l * l + f * f);
          h *= F, u *= F, l *= F, f *= F;
        }
      }
      t[e] = h, t[e + 1] = u, t[e + 2] = l, t[e + 3] = f;
    }
    static multiplyQuaternionsFlat(t, e, r, s, i, a) {
      const o = r[s], h = r[s + 1], u = r[s + 2], l = r[s + 3], f = i[a], c = i[a + 1], p = i[a + 2], d = i[a + 3];
      return t[e] = o * d + l * f + h * p - u * c, t[e + 1] = h * d + l * c + u * f - o * p, t[e + 2] = u * d + l * p + o * c - h * f, t[e + 3] = l * d - o * f - h * c - u * p, t;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x = t, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y = t, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      this._z = t, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      this._w = t, this._onChangeCallback();
    }
    set(t, e, r, s) {
      return this._x = t, this._y = e, this._z = r, this._w = s, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
    }
    setFromEuler(t, e = !0) {
      const r = t._x, s = t._y, i = t._z, a = t._order, o = Math.cos, h = Math.sin, u = o(r / 2), l = o(s / 2), f = o(i / 2), c = h(r / 2), p = h(s / 2), d = h(i / 2);
      switch (a) {
        case "XYZ":
          this._x = c * l * f + u * p * d, this._y = u * p * f - c * l * d, this._z = u * l * d + c * p * f, this._w = u * l * f - c * p * d;
          break;
        case "YXZ":
          this._x = c * l * f + u * p * d, this._y = u * p * f - c * l * d, this._z = u * l * d - c * p * f, this._w = u * l * f + c * p * d;
          break;
        case "ZXY":
          this._x = c * l * f - u * p * d, this._y = u * p * f + c * l * d, this._z = u * l * d + c * p * f, this._w = u * l * f - c * p * d;
          break;
        case "ZYX":
          this._x = c * l * f - u * p * d, this._y = u * p * f + c * l * d, this._z = u * l * d - c * p * f, this._w = u * l * f + c * p * d;
          break;
        case "YZX":
          this._x = c * l * f + u * p * d, this._y = u * p * f + c * l * d, this._z = u * l * d - c * p * f, this._w = u * l * f - c * p * d;
          break;
        case "XZY":
          this._x = c * l * f - u * p * d, this._y = u * p * f - c * l * d, this._z = u * l * d + c * p * f, this._w = u * l * f + c * p * d;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }
      return e === !0 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const r = e / 2, s = Math.sin(r);
      return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(r), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t) {
      const e = t.elements, r = e[0], s = e[4], i = e[8], a = e[1], o = e[5], h = e[9], u = e[2], l = e[6], f = e[10], c = r + o + f;
      if (c > 0) {
        const p = 0.5 / Math.sqrt(c + 1);
        this._w = 0.25 / p, this._x = (l - h) * p, this._y = (i - u) * p, this._z = (a - s) * p;
      } else if (r > o && r > f) {
        const p = 2 * Math.sqrt(1 + r - o - f);
        this._w = (l - h) / p, this._x = 0.25 * p, this._y = (s + a) / p, this._z = (i + u) / p;
      } else if (o > f) {
        const p = 2 * Math.sqrt(1 + o - r - f);
        this._w = (i - u) / p, this._x = (s + a) / p, this._y = 0.25 * p, this._z = (h + l) / p;
      } else {
        const p = 2 * Math.sqrt(1 + f - r - o);
        this._w = (a - s) / p, this._x = (i + u) / p, this._y = (h + l) / p, this._z = 0.25 * p;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let r = t.dot(e) + 1;
      return r < Number.EPSILON ? (r = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = r)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = r), this.normalize();
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(Z(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const r = this.angleTo(t);
      if (r === 0) return this;
      const s = Math.min(1, e / r);
      return this.slerp(t, s), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t = this.length();
      return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const r = t._x, s = t._y, i = t._z, a = t._w, o = e._x, h = e._y, u = e._z, l = e._w;
      return this._x = r * l + a * o + s * u - i * h, this._y = s * l + a * h + i * o - r * u, this._z = i * l + a * u + r * h - s * o, this._w = a * l - r * o - s * h - i * u, this._onChangeCallback(), this;
    }
    slerp(t, e) {
      if (e === 0) return this;
      if (e === 1) return this.copy(t);
      const r = this._x, s = this._y, i = this._z, a = this._w;
      let o = a * t._w + r * t._x + s * t._y + i * t._z;
      if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
        return this._w = a, this._x = r, this._y = s, this._z = i, this;
      const h = 1 - o * o;
      if (h <= Number.EPSILON) {
        const p = 1 - e;
        return this._w = p * a + e * this._w, this._x = p * r + e * this._x, this._y = p * s + e * this._y, this._z = p * i + e * this._z, this.normalize(), this;
      }
      const u = Math.sqrt(h), l = Math.atan2(u, o), f = Math.sin((1 - e) * l) / u, c = Math.sin(e * l) / u;
      return this._w = a * f + this._w * c, this._x = r * f + this._x * c, this._y = s * f + this._y * c, this._z = i * f + this._z * c, this._onChangeCallback(), this;
    }
    slerpQuaternions(t, e, r) {
      return this.copy(t).slerp(e, r);
    }
    random() {
      const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), r = Math.random(), s = Math.sqrt(1 - r), i = Math.sqrt(r);
      return this.set(
        s * Math.sin(t),
        s * Math.cos(t),
        i * Math.sin(e),
        i * Math.cos(e)
      );
    }
    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    }
    fromArray(t, e = 0) {
      return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
    }
    fromBufferAttribute(t, e) {
      return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class w {
    constructor(t = 0, e = 0, r = 0) {
      w.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = r;
    }
    set(t, e, r) {
      return r === void 0 && (r = this.z), this.x = t, this.y = e, this.z = r, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setZ(t) {
      return this.z = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this.z += t.z, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this;
    }
    multiplyVectors(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    }
    applyEuler(t) {
      return this.applyQuaternion(yi.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(yi.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x, r = this.y, s = this.z, i = t.elements;
      return this.x = i[0] * e + i[3] * r + i[6] * s, this.y = i[1] * e + i[4] * r + i[7] * s, this.z = i[2] * e + i[5] * r + i[8] * s, this;
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x, r = this.y, s = this.z, i = t.elements, a = 1 / (i[3] * e + i[7] * r + i[11] * s + i[15]);
      return this.x = (i[0] * e + i[4] * r + i[8] * s + i[12]) * a, this.y = (i[1] * e + i[5] * r + i[9] * s + i[13]) * a, this.z = (i[2] * e + i[6] * r + i[10] * s + i[14]) * a, this;
    }
    applyQuaternion(t) {
      const e = this.x, r = this.y, s = this.z, i = t.x, a = t.y, o = t.z, h = t.w, u = 2 * (a * s - o * r), l = 2 * (o * e - i * s), f = 2 * (i * r - a * e);
      return this.x = e + h * u + a * f - o * l, this.y = r + h * l + o * u - i * f, this.z = s + h * f + i * l - a * u, this;
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    }
    transformDirection(t) {
      const e = this.x, r = this.y, s = this.z, i = t.elements;
      return this.x = i[0] * e + i[4] * r + i[8] * s, this.y = i[1] * e + i[5] * r + i[9] * s, this.z = i[2] * e + i[6] * r + i[10] * s, this.normalize();
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
    }
    clamp(t, e) {
      return this.x = Z(this.x, t.x, e.x), this.y = Z(this.y, t.y, e.y), this.z = Z(this.z, t.z, e.z), this;
    }
    clampScalar(t, e) {
      return this.x = Z(this.x, t, e), this.y = Z(this.y, t, e), this.z = Z(this.z, t, e), this;
    }
    clampLength(t, e) {
      const r = this.length();
      return this.divideScalar(r || 1).multiplyScalar(Z(r, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    // TODO lengthSquared?
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
    }
    lerpVectors(t, e, r) {
      return this.x = t.x + (e.x - t.x) * r, this.y = t.y + (e.y - t.y) * r, this.z = t.z + (e.z - t.z) * r, this;
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const r = t.x, s = t.y, i = t.z, a = e.x, o = e.y, h = e.z;
      return this.x = s * h - i * o, this.y = i * a - r * h, this.z = r * o - s * a, this;
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (e === 0) return this.set(0, 0, 0);
      const r = t.dot(this) / e;
      return this.copy(t).multiplyScalar(r);
    }
    projectOnPlane(t) {
      return Bn.copy(this).projectOnVector(t), this.sub(Bn);
    }
    reflect(t) {
      return this.sub(Bn.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      const r = this.dot(t) / e;
      return Math.acos(Z(r, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x, r = this.y - t.y, s = this.z - t.z;
      return e * e + r * r + s * s;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, r) {
      const s = Math.sin(e) * t;
      return this.x = s * Math.sin(r), this.y = Math.cos(e) * t, this.z = s * Math.cos(r), this;
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, r) {
      return this.x = t * Math.sin(e), this.y = r, this.z = t * Math.cos(e), this;
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(), r = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = r, this.z = s, this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, e * 4);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, e * 3);
    }
    setFromEuler(t) {
      return this.x = t._x, this.y = t._y, this.z = t._z, this;
    }
    setFromColor(t) {
      return this.x = t.r, this.y = t.g, this.z = t.b, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, r = Math.sqrt(1 - e * e);
      return this.x = r * Math.cos(t), this.y = e, this.z = r * Math.sin(t), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Bn = /* @__PURE__ */ new w(), yi = /* @__PURE__ */ new we();
  class Ue {
    constructor(t = new w(1 / 0, 1 / 0, 1 / 0), e = new w(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = !0, this.min = t, this.max = e;
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, r = t.length; e < r; e += 3)
        this.expandByPoint(_t.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, r = t.count; e < r; e++)
        this.expandByPoint(_t.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, r = t.length; e < r; e++)
        this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const r = _t.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(r), this.max.copy(t).add(r), this;
    }
    setFromObject(t, e = !1) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
      t.updateWorldMatrix(!1, !1);
      const r = t.geometry;
      if (r !== void 0) {
        const i = r.getAttribute("position");
        if (e === !0 && i !== void 0 && t.isInstancedMesh !== !0)
          for (let a = 0, o = i.count; a < o; a++)
            t.isMesh === !0 ? t.getVertexPosition(a, _t) : _t.fromBufferAttribute(i, a), _t.applyMatrix4(t.matrixWorld), this.expandByPoint(_t);
        else
          t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ir.copy(t.boundingBox)) : (r.boundingBox === null && r.computeBoundingBox(), Ir.copy(r.boundingBox)), Ir.applyMatrix4(t.matrixWorld), this.union(Ir);
      }
      const s = t.children;
      for (let i = 0, a = s.length; i < a; i++)
        this.expandByObject(s[i], e);
      return this;
    }
    containsPoint(t) {
      return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
    }
    containsBox(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(t) {
      return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
    }
    intersectsSphere(t) {
      return this.clampPoint(t.center, _t), _t.distanceToSquared(t.center) <= t.radius * t.radius;
    }
    intersectsPlane(t) {
      let e, r;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, r = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, r = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, r += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, r += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, r += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, r += t.normal.z * this.min.z), e <= -t.constant && r >= -t.constant;
    }
    intersectsTriangle(t) {
      if (this.isEmpty())
        return !1;
      this.getCenter(lr), Nr.subVectors(this.max, lr), Ne.subVectors(t.a, lr), Ge.subVectors(t.b, lr), He.subVectors(t.c, lr), ue.subVectors(Ge, Ne), le.subVectors(He, Ge), Te.subVectors(Ne, He);
      let e = [
        0,
        -ue.z,
        ue.y,
        0,
        -le.z,
        le.y,
        0,
        -Te.z,
        Te.y,
        ue.z,
        0,
        -ue.x,
        le.z,
        0,
        -le.x,
        Te.z,
        0,
        -Te.x,
        -ue.y,
        ue.x,
        0,
        -le.y,
        le.x,
        0,
        -Te.y,
        Te.x,
        0
      ];
      return !Pn(e, Ne, Ge, He, Nr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Pn(e, Ne, Ge, He, Nr)) ? !1 : (Gr.crossVectors(ue, le), e = [Gr.x, Gr.y, Gr.z], Pn(e, Ne, Ge, He, Nr));
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, _t).distanceTo(t);
    }
    getBoundingSphere(t) {
      return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(_t).length() * 0.5), t;
    }
    intersect(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return this.isEmpty() ? this : (Kt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Kt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Kt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Kt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Kt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Kt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Kt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Kt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Kt), this);
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  const Kt = [
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w(),
    /* @__PURE__ */ new w()
  ], _t = /* @__PURE__ */ new w(), Ir = /* @__PURE__ */ new Ue(), Ne = /* @__PURE__ */ new w(), Ge = /* @__PURE__ */ new w(), He = /* @__PURE__ */ new w(), ue = /* @__PURE__ */ new w(), le = /* @__PURE__ */ new w(), Te = /* @__PURE__ */ new w(), lr = /* @__PURE__ */ new w(), Nr = /* @__PURE__ */ new w(), Gr = /* @__PURE__ */ new w(), ke = /* @__PURE__ */ new w();
  function Pn(n, t, e, r, s) {
    for (let i = 0, a = n.length - 3; i <= a; i += 3) {
      ke.fromArray(n, i);
      const o = s.x * Math.abs(ke.x) + s.y * Math.abs(ke.y) + s.z * Math.abs(ke.z), h = t.dot(ke), u = e.dot(ke), l = r.dot(ke);
      if (Math.max(-Math.max(h, u, l), Math.min(h, u, l)) > o)
        return !1;
    }
    return !0;
  }
  const ph = /* @__PURE__ */ new Ue(), cr = /* @__PURE__ */ new w(), zn = /* @__PURE__ */ new w();
  class Gs {
    constructor(t = new w(), e = -1) {
      this.isSphere = !0, this.center = t, this.radius = e;
    }
    set(t, e) {
      return this.center.copy(t), this.radius = e, this;
    }
    setFromPoints(t, e) {
      const r = this.center;
      e !== void 0 ? r.copy(e) : ph.setFromPoints(t).getCenter(r);
      let s = 0;
      for (let i = 0, a = t.length; i < a; i++)
        s = Math.max(s, r.distanceToSquared(t[i]));
      return this.radius = Math.sqrt(s), this;
    }
    copy(t) {
      return this.center.copy(t.center), this.radius = t.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const r = this.center.distanceToSquared(t);
      return e.copy(t), r > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t) {
      return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      if (this.isEmpty())
        return this.center.copy(t), this.radius = 0, this;
      cr.subVectors(t, this.center);
      const e = cr.lengthSq();
      if (e > this.radius * this.radius) {
        const r = Math.sqrt(e), s = (r - this.radius) * 0.5;
        this.center.addScaledVector(cr, s / r), this.radius += s;
      }
      return this;
    }
    union(t) {
      return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (zn.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(cr.copy(t.center).add(zn)), this.expandByPoint(cr.copy(t.center).sub(zn))), this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const te = /* @__PURE__ */ new w(), Dn = /* @__PURE__ */ new w(), Hr = /* @__PURE__ */ new w(), ce = /* @__PURE__ */ new w(), In = /* @__PURE__ */ new w(), Wr = /* @__PURE__ */ new w(), Nn = /* @__PURE__ */ new w();
  class Va {
    constructor(t = new w(), e = new w(0, 0, -1)) {
      this.origin = t, this.direction = e;
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, te)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const r = e.dot(this.direction);
      return r < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, r);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = te.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (te.copy(this.origin).addScaledVector(this.direction, e), te.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, r, s) {
      Dn.copy(t).add(e).multiplyScalar(0.5), Hr.copy(e).sub(t).normalize(), ce.copy(this.origin).sub(Dn);
      const i = t.distanceTo(e) * 0.5, a = -this.direction.dot(Hr), o = ce.dot(this.direction), h = -ce.dot(Hr), u = ce.lengthSq(), l = Math.abs(1 - a * a);
      let f, c, p, d;
      if (l > 0)
        if (f = a * h - o, c = a * o - h, d = i * l, f >= 0)
          if (c >= -d)
            if (c <= d) {
              const g = 1 / l;
              f *= g, c *= g, p = f * (f + a * c + 2 * o) + c * (a * f + c + 2 * h) + u;
            } else
              c = i, f = Math.max(0, -(a * c + o)), p = -f * f + c * (c + 2 * h) + u;
          else
            c = -i, f = Math.max(0, -(a * c + o)), p = -f * f + c * (c + 2 * h) + u;
        else
          c <= -d ? (f = Math.max(0, -(-a * i + o)), c = f > 0 ? -i : Math.min(Math.max(-i, -h), i), p = -f * f + c * (c + 2 * h) + u) : c <= d ? (f = 0, c = Math.min(Math.max(-i, -h), i), p = c * (c + 2 * h) + u) : (f = Math.max(0, -(a * i + o)), c = f > 0 ? i : Math.min(Math.max(-i, -h), i), p = -f * f + c * (c + 2 * h) + u);
      else
        c = a > 0 ? -i : i, f = Math.max(0, -(a * c + o)), p = -f * f + c * (c + 2 * h) + u;
      return r && r.copy(this.origin).addScaledVector(this.direction, f), s && s.copy(Dn).addScaledVector(Hr, c), p;
    }
    intersectSphere(t, e) {
      te.subVectors(t.center, this.origin);
      const r = te.dot(this.direction), s = te.dot(te) - r * r, i = t.radius * t.radius;
      if (s > i) return null;
      const a = Math.sqrt(i - s), o = r - a, h = r + a;
      return h < 0 ? null : o < 0 ? this.at(h, e) : this.at(o, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (e === 0)
        return t.distanceToPoint(this.origin) === 0 ? 0 : null;
      const r = -(this.origin.dot(t.normal) + t.constant) / e;
      return r >= 0 ? r : null;
    }
    intersectPlane(t, e) {
      const r = this.distanceToPlane(t);
      return r === null ? null : this.at(r, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      return e === 0 || t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let r, s, i, a, o, h;
      const u = 1 / this.direction.x, l = 1 / this.direction.y, f = 1 / this.direction.z, c = this.origin;
      return u >= 0 ? (r = (t.min.x - c.x) * u, s = (t.max.x - c.x) * u) : (r = (t.max.x - c.x) * u, s = (t.min.x - c.x) * u), l >= 0 ? (i = (t.min.y - c.y) * l, a = (t.max.y - c.y) * l) : (i = (t.max.y - c.y) * l, a = (t.min.y - c.y) * l), r > a || i > s || ((i > r || isNaN(r)) && (r = i), (a < s || isNaN(s)) && (s = a), f >= 0 ? (o = (t.min.z - c.z) * f, h = (t.max.z - c.z) * f) : (o = (t.max.z - c.z) * f, h = (t.min.z - c.z) * f), r > h || o > s) || ((o > r || r !== r) && (r = o), (h < s || s !== s) && (s = h), s < 0) ? null : this.at(r >= 0 ? r : s, e);
    }
    intersectsBox(t) {
      return this.intersectBox(t, te) !== null;
    }
    intersectTriangle(t, e, r, s, i) {
      In.subVectors(e, t), Wr.subVectors(r, t), Nn.crossVectors(In, Wr);
      let a = this.direction.dot(Nn), o;
      if (a > 0) {
        if (s) return null;
        o = 1;
      } else if (a < 0)
        o = -1, a = -a;
      else
        return null;
      ce.subVectors(this.origin, t);
      const h = o * this.direction.dot(Wr.crossVectors(ce, Wr));
      if (h < 0)
        return null;
      const u = o * this.direction.dot(In.cross(ce));
      if (u < 0 || h + u > a)
        return null;
      const l = -o * ce.dot(Nn);
      return l < 0 ? null : this.at(l / a, i);
    }
    applyMatrix4(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class mt {
    constructor(t, e, r, s, i, a, o, h, u, l, f, c, p, d, g, y) {
      mt.prototype.isMatrix4 = !0, this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ], t !== void 0 && this.set(t, e, r, s, i, a, o, h, u, l, f, c, p, d, g, y);
    }
    set(t, e, r, s, i, a, o, h, u, l, f, c, p, d, g, y) {
      const m = this.elements;
      return m[0] = t, m[4] = e, m[8] = r, m[12] = s, m[1] = i, m[5] = a, m[9] = o, m[13] = h, m[2] = u, m[6] = l, m[10] = f, m[14] = c, m[3] = p, m[7] = d, m[11] = g, m[15] = y, this;
    }
    identity() {
      return this.set(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    clone() {
      return new mt().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements, r = t.elements;
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15], this;
    }
    copyPosition(t) {
      const e = this.elements, r = t.elements;
      return e[12] = r[12], e[13] = r[13], e[14] = r[14], this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    extractBasis(t, e, r) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), r.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t, e, r) {
      return this.set(
        t.x,
        e.x,
        r.x,
        0,
        t.y,
        e.y,
        r.y,
        0,
        t.z,
        e.z,
        r.z,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    extractRotation(t) {
      const e = this.elements, r = t.elements, s = 1 / We.setFromMatrixColumn(t, 0).length(), i = 1 / We.setFromMatrixColumn(t, 1).length(), a = 1 / We.setFromMatrixColumn(t, 2).length();
      return e[0] = r[0] * s, e[1] = r[1] * s, e[2] = r[2] * s, e[3] = 0, e[4] = r[4] * i, e[5] = r[5] * i, e[6] = r[6] * i, e[7] = 0, e[8] = r[8] * a, e[9] = r[9] * a, e[10] = r[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t) {
      const e = this.elements, r = t.x, s = t.y, i = t.z, a = Math.cos(r), o = Math.sin(r), h = Math.cos(s), u = Math.sin(s), l = Math.cos(i), f = Math.sin(i);
      if (t.order === "XYZ") {
        const c = a * l, p = a * f, d = o * l, g = o * f;
        e[0] = h * l, e[4] = -h * f, e[8] = u, e[1] = p + d * u, e[5] = c - g * u, e[9] = -o * h, e[2] = g - c * u, e[6] = d + p * u, e[10] = a * h;
      } else if (t.order === "YXZ") {
        const c = h * l, p = h * f, d = u * l, g = u * f;
        e[0] = c + g * o, e[4] = d * o - p, e[8] = a * u, e[1] = a * f, e[5] = a * l, e[9] = -o, e[2] = p * o - d, e[6] = g + c * o, e[10] = a * h;
      } else if (t.order === "ZXY") {
        const c = h * l, p = h * f, d = u * l, g = u * f;
        e[0] = c - g * o, e[4] = -a * f, e[8] = d + p * o, e[1] = p + d * o, e[5] = a * l, e[9] = g - c * o, e[2] = -a * u, e[6] = o, e[10] = a * h;
      } else if (t.order === "ZYX") {
        const c = a * l, p = a * f, d = o * l, g = o * f;
        e[0] = h * l, e[4] = d * u - p, e[8] = c * u + g, e[1] = h * f, e[5] = g * u + c, e[9] = p * u - d, e[2] = -u, e[6] = o * h, e[10] = a * h;
      } else if (t.order === "YZX") {
        const c = a * h, p = a * u, d = o * h, g = o * u;
        e[0] = h * l, e[4] = g - c * f, e[8] = d * f + p, e[1] = f, e[5] = a * l, e[9] = -o * l, e[2] = -u * l, e[6] = p * f + d, e[10] = c - g * f;
      } else if (t.order === "XZY") {
        const c = a * h, p = a * u, d = o * h, g = o * u;
        e[0] = h * l, e[4] = -f, e[8] = u * l, e[1] = c * f + g, e[5] = a * l, e[9] = p * f - d, e[2] = d * f - p, e[6] = o * l, e[10] = g * f + c;
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromQuaternion(t) {
      return this.compose(dh, t, gh);
    }
    lookAt(t, e, r) {
      const s = this.elements;
      return bt.subVectors(t, e), bt.lengthSq() === 0 && (bt.z = 1), bt.normalize(), fe.crossVectors(r, bt), fe.lengthSq() === 0 && (Math.abs(r.z) === 1 ? bt.x += 1e-4 : bt.z += 1e-4, bt.normalize(), fe.crossVectors(r, bt)), fe.normalize(), Vr.crossVectors(bt, fe), s[0] = fe.x, s[4] = Vr.x, s[8] = bt.x, s[1] = fe.y, s[5] = Vr.y, s[9] = bt.y, s[2] = fe.z, s[6] = Vr.z, s[10] = bt.z, this;
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const r = t.elements, s = e.elements, i = this.elements, a = r[0], o = r[4], h = r[8], u = r[12], l = r[1], f = r[5], c = r[9], p = r[13], d = r[2], g = r[6], y = r[10], m = r[14], b = r[3], v = r[7], x = r[11], F = r[15], C = s[0], T = s[4], k = s[8], B = s[12], P = s[1], I = s[5], rt = s[9], V = s[13], W = s[2], Y = s[6], X = s[10], $ = s[14], tt = s[3], j = s[7], et = s[11], q = s[15];
      return i[0] = a * C + o * P + h * W + u * tt, i[4] = a * T + o * I + h * Y + u * j, i[8] = a * k + o * rt + h * X + u * et, i[12] = a * B + o * V + h * $ + u * q, i[1] = l * C + f * P + c * W + p * tt, i[5] = l * T + f * I + c * Y + p * j, i[9] = l * k + f * rt + c * X + p * et, i[13] = l * B + f * V + c * $ + p * q, i[2] = d * C + g * P + y * W + m * tt, i[6] = d * T + g * I + y * Y + m * j, i[10] = d * k + g * rt + y * X + m * et, i[14] = d * B + g * V + y * $ + m * q, i[3] = b * C + v * P + x * W + F * tt, i[7] = b * T + v * I + x * Y + F * j, i[11] = b * k + v * rt + x * X + F * et, i[15] = b * B + v * V + x * $ + F * q, this;
    }
    multiplyScalar(t) {
      const e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
    }
    determinant() {
      const t = this.elements, e = t[0], r = t[4], s = t[8], i = t[12], a = t[1], o = t[5], h = t[9], u = t[13], l = t[2], f = t[6], c = t[10], p = t[14], d = t[3], g = t[7], y = t[11], m = t[15];
      return d * (+i * h * f - s * u * f - i * o * c + r * u * c + s * o * p - r * h * p) + g * (+e * h * p - e * u * c + i * a * c - s * a * p + s * u * l - i * h * l) + y * (+e * u * f - e * o * p - i * a * f + r * a * p + i * o * l - r * u * l) + m * (-s * o * l - e * h * f + e * o * c + s * a * f - r * a * c + r * h * l);
    }
    transpose() {
      const t = this.elements;
      let e;
      return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
    }
    setPosition(t, e, r) {
      const s = this.elements;
      return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = r), this;
    }
    invert() {
      const t = this.elements, e = t[0], r = t[1], s = t[2], i = t[3], a = t[4], o = t[5], h = t[6], u = t[7], l = t[8], f = t[9], c = t[10], p = t[11], d = t[12], g = t[13], y = t[14], m = t[15], b = f * y * u - g * c * u + g * h * p - o * y * p - f * h * m + o * c * m, v = d * c * u - l * y * u - d * h * p + a * y * p + l * h * m - a * c * m, x = l * g * u - d * f * u + d * o * p - a * g * p - l * o * m + a * f * m, F = d * f * h - l * g * h - d * o * c + a * g * c + l * o * y - a * f * y, C = e * b + r * v + s * x + i * F;
      if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const T = 1 / C;
      return t[0] = b * T, t[1] = (g * c * i - f * y * i - g * s * p + r * y * p + f * s * m - r * c * m) * T, t[2] = (o * y * i - g * h * i + g * s * u - r * y * u - o * s * m + r * h * m) * T, t[3] = (f * h * i - o * c * i - f * s * u + r * c * u + o * s * p - r * h * p) * T, t[4] = v * T, t[5] = (l * y * i - d * c * i + d * s * p - e * y * p - l * s * m + e * c * m) * T, t[6] = (d * h * i - a * y * i - d * s * u + e * y * u + a * s * m - e * h * m) * T, t[7] = (a * c * i - l * h * i + l * s * u - e * c * u - a * s * p + e * h * p) * T, t[8] = x * T, t[9] = (d * f * i - l * g * i - d * r * p + e * g * p + l * r * m - e * f * m) * T, t[10] = (a * g * i - d * o * i + d * r * u - e * g * u - a * r * m + e * o * m) * T, t[11] = (l * o * i - a * f * i - l * r * u + e * f * u + a * r * p - e * o * p) * T, t[12] = F * T, t[13] = (l * g * s - d * f * s + d * r * c - e * g * c - l * r * y + e * f * y) * T, t[14] = (d * o * s - a * g * s - d * r * h + e * g * h + a * r * y - e * o * y) * T, t[15] = (a * f * s - l * o * s + l * r * h - e * f * h - a * r * c + e * o * c) * T, this;
    }
    scale(t) {
      const e = this.elements, r = t.x, s = t.y, i = t.z;
      return e[0] *= r, e[4] *= s, e[8] *= i, e[1] *= r, e[5] *= s, e[9] *= i, e[2] *= r, e[6] *= s, e[10] *= i, e[3] *= r, e[7] *= s, e[11] *= i, this;
    }
    getMaxScaleOnAxis() {
      const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, r, s));
    }
    makeTranslation(t, e, r) {
      return t.isVector3 ? this.set(
        1,
        0,
        0,
        t.x,
        0,
        1,
        0,
        t.y,
        0,
        0,
        1,
        t.z,
        0,
        0,
        0,
        1
      ) : this.set(
        1,
        0,
        0,
        t,
        0,
        1,
        0,
        e,
        0,
        0,
        1,
        r,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationX(t) {
      const e = Math.cos(t), r = Math.sin(t);
      return this.set(
        1,
        0,
        0,
        0,
        0,
        e,
        -r,
        0,
        0,
        r,
        e,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t), r = Math.sin(t);
      return this.set(
        e,
        0,
        r,
        0,
        0,
        1,
        0,
        0,
        -r,
        0,
        e,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t), r = Math.sin(t);
      return this.set(
        e,
        -r,
        0,
        0,
        r,
        e,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationAxis(t, e) {
      const r = Math.cos(e), s = Math.sin(e), i = 1 - r, a = t.x, o = t.y, h = t.z, u = i * a, l = i * o;
      return this.set(
        u * a + r,
        u * o - s * h,
        u * h + s * o,
        0,
        u * o + s * h,
        l * o + r,
        l * h - s * a,
        0,
        u * h - s * o,
        l * h + s * a,
        i * h * h + r,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeScale(t, e, r) {
      return this.set(
        t,
        0,
        0,
        0,
        0,
        e,
        0,
        0,
        0,
        0,
        r,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeShear(t, e, r, s, i, a) {
      return this.set(
        1,
        r,
        i,
        0,
        t,
        1,
        a,
        0,
        e,
        s,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    compose(t, e, r) {
      const s = this.elements, i = e._x, a = e._y, o = e._z, h = e._w, u = i + i, l = a + a, f = o + o, c = i * u, p = i * l, d = i * f, g = a * l, y = a * f, m = o * f, b = h * u, v = h * l, x = h * f, F = r.x, C = r.y, T = r.z;
      return s[0] = (1 - (g + m)) * F, s[1] = (p + x) * F, s[2] = (d - v) * F, s[3] = 0, s[4] = (p - x) * C, s[5] = (1 - (c + m)) * C, s[6] = (y + b) * C, s[7] = 0, s[8] = (d + v) * T, s[9] = (y - b) * T, s[10] = (1 - (c + g)) * T, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
    }
    decompose(t, e, r) {
      const s = this.elements;
      let i = We.set(s[0], s[1], s[2]).length();
      const a = We.set(s[4], s[5], s[6]).length(), o = We.set(s[8], s[9], s[10]).length();
      this.determinant() < 0 && (i = -i), t.x = s[12], t.y = s[13], t.z = s[14], Rt.copy(this);
      const u = 1 / i, l = 1 / a, f = 1 / o;
      return Rt.elements[0] *= u, Rt.elements[1] *= u, Rt.elements[2] *= u, Rt.elements[4] *= l, Rt.elements[5] *= l, Rt.elements[6] *= l, Rt.elements[8] *= f, Rt.elements[9] *= f, Rt.elements[10] *= f, e.setFromRotationMatrix(Rt), r.x = i, r.y = a, r.z = o, this;
    }
    makePerspective(t, e, r, s, i, a, o = 2e3) {
      const h = this.elements, u = 2 * i / (e - t), l = 2 * i / (r - s), f = (e + t) / (e - t), c = (r + s) / (r - s);
      let p, d;
      if (o === 2e3)
        p = -(a + i) / (a - i), d = -2 * a * i / (a - i);
      else if (o === 2001)
        p = -a / (a - i), d = -a * i / (a - i);
      else
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
      return h[0] = u, h[4] = 0, h[8] = f, h[12] = 0, h[1] = 0, h[5] = l, h[9] = c, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = p, h[14] = d, h[3] = 0, h[7] = 0, h[11] = -1, h[15] = 0, this;
    }
    makeOrthographic(t, e, r, s, i, a, o = 2e3) {
      const h = this.elements, u = 1 / (e - t), l = 1 / (r - s), f = 1 / (a - i), c = (e + t) * u, p = (r + s) * l;
      let d, g;
      if (o === 2e3)
        d = (a + i) * f, g = -2 * f;
      else if (o === 2001)
        d = i * f, g = -1 * f;
      else
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
      return h[0] = 2 * u, h[4] = 0, h[8] = 0, h[12] = -c, h[1] = 0, h[5] = 2 * l, h[9] = 0, h[13] = -p, h[2] = 0, h[6] = 0, h[10] = g, h[14] = -d, h[3] = 0, h[7] = 0, h[11] = 0, h[15] = 1, this;
    }
    equals(t) {
      const e = this.elements, r = t.elements;
      for (let s = 0; s < 16; s++)
        if (e[s] !== r[s]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let r = 0; r < 16; r++)
        this.elements[r] = t[r + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const r = this.elements;
      return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t[e + 9] = r[9], t[e + 10] = r[10], t[e + 11] = r[11], t[e + 12] = r[12], t[e + 13] = r[13], t[e + 14] = r[14], t[e + 15] = r[15], t;
    }
  }
  const We = /* @__PURE__ */ new w(), Rt = /* @__PURE__ */ new mt(), dh = /* @__PURE__ */ new w(0, 0, 0), gh = /* @__PURE__ */ new w(1, 1, 1), fe = /* @__PURE__ */ new w(), Vr = /* @__PURE__ */ new w(), bt = /* @__PURE__ */ new w(), vi = /* @__PURE__ */ new mt(), xi = /* @__PURE__ */ new we();
  class _r {
    constructor(t = 0, e = 0, r = 0, s = _r.DEFAULT_ORDER) {
      this.isEuler = !0, this._x = t, this._y = e, this._z = r, this._order = s;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x = t, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y = t, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      this._z = t, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      this._order = t, this._onChangeCallback();
    }
    set(t, e, r, s = this._order) {
      return this._x = t, this._y = e, this._z = r, this._order = s, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t, e = this._order, r = !0) {
      const s = t.elements, i = s[0], a = s[4], o = s[8], h = s[1], u = s[5], l = s[9], f = s[2], c = s[6], p = s[10];
      switch (e) {
        case "XYZ":
          this._y = Math.asin(Z(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(c, u), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Z(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(h, u)) : (this._y = Math.atan2(-f, i), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Z(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-a, u)) : (this._y = 0, this._z = Math.atan2(h, i));
          break;
        case "ZYX":
          this._y = Math.asin(-Z(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(c, p), this._z = Math.atan2(h, i)) : (this._x = 0, this._z = Math.atan2(-a, u));
          break;
        case "YZX":
          this._z = Math.asin(Z(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-l, u), this._y = Math.atan2(-f, i)) : (this._x = 0, this._y = Math.atan2(o, p));
          break;
        case "XZY":
          this._z = Math.asin(-Z(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(c, u), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, p), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      return this._order = e, r === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, r) {
      return vi.makeRotationFromQuaternion(t), this.setFromRotationMatrix(vi, e, r);
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return xi.setFromEuler(this), this.setFromQuaternion(xi, t);
    }
    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    }
    fromArray(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
    }
    _onChange(t) {
      return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  _r.DEFAULT_ORDER = "XYZ";
  class mh {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = (1 << t | 0) >>> 0;
    }
    enable(t) {
      this.mask |= 1 << t | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= 1 << t | 0;
    }
    disable(t) {
      this.mask &= ~(1 << t | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return (this.mask & t.mask) !== 0;
    }
    isEnabled(t) {
      return (this.mask & (1 << t | 0)) !== 0;
    }
  }
  let yh = 0;
  const bi = /* @__PURE__ */ new w(), Ve = /* @__PURE__ */ new we(), ee = /* @__PURE__ */ new mt(), qr = /* @__PURE__ */ new w(), fr = /* @__PURE__ */ new w(), vh = /* @__PURE__ */ new w(), xh = /* @__PURE__ */ new we(), Si = /* @__PURE__ */ new w(1, 0, 0), wi = /* @__PURE__ */ new w(0, 1, 0), Fi = /* @__PURE__ */ new w(0, 0, 1), Ti = { type: "added" }, bh = { type: "removed" }, qe = { type: "childadded", child: null }, Gn = { type: "childremoved", child: null };
  class Et extends Fn {
    constructor() {
      super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: yh++ }), this.uuid = sr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
      const t = new w(), e = new _r(), r = new we(), s = new w(1, 1, 1);
      function i() {
        r.setFromEuler(e, !1);
      }
      function a() {
        e.setFromQuaternion(r, void 0, !1);
      }
      e._onChange(i), r._onChange(a), Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: t
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: e
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: r
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: s
        },
        modelViewMatrix: {
          value: new mt()
        },
        normalMatrix: {
          value: new Se()
        }
      }), this.matrix = new mt(), this.matrixWorld = new mt(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new mh(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return Ve.setFromAxisAngle(t, e), this.quaternion.multiply(Ve), this;
    }
    rotateOnWorldAxis(t, e) {
      return Ve.setFromAxisAngle(t, e), this.quaternion.premultiply(Ve), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(Si, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(wi, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(Fi, t);
    }
    translateOnAxis(t, e) {
      return bi.copy(t).applyQuaternion(this.quaternion), this.position.add(bi.multiplyScalar(e)), this;
    }
    translateX(t) {
      return this.translateOnAxis(Si, t);
    }
    translateY(t) {
      return this.translateOnAxis(wi, t);
    }
    translateZ(t) {
      return this.translateOnAxis(Fi, t);
    }
    localToWorld(t) {
      return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ee.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, r) {
      t.isVector3 ? qr.copy(t) : qr.set(t, e, r);
      const s = this.parent;
      this.updateWorldMatrix(!0, !1), fr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ee.lookAt(fr, qr, this.up) : ee.lookAt(qr, fr, this.up), this.quaternion.setFromRotationMatrix(ee), s && (ee.extractRotation(s.matrixWorld), Ve.setFromRotationMatrix(ee), this.quaternion.premultiply(Ve.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++)
          this.add(arguments[e]);
        return this;
      }
      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ti), qe.child = t, this.dispatchEvent(qe), qe.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let r = 0; r < arguments.length; r++)
          this.remove(arguments[r]);
        return this;
      }
      const e = this.children.indexOf(t);
      return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(bh), Gn.child = t, this.dispatchEvent(Gn), Gn.child = null), this;
    }
    removeFromParent() {
      const t = this.parent;
      return t !== null && t.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t) {
      return this.updateWorldMatrix(!0, !1), ee.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ee.multiply(t.parent.matrixWorld)), t.applyMatrix4(ee), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ti), qe.child = t, this.dispatchEvent(qe), qe.child = null, this;
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let r = 0, s = this.children.length; r < s; r++) {
        const a = this.children[r].getObjectByProperty(t, e);
        if (a !== void 0)
          return a;
      }
    }
    getObjectsByProperty(t, e, r = []) {
      this[t] === e && r.push(this);
      const s = this.children;
      for (let i = 0, a = s.length; i < a; i++)
        s[i].getObjectsByProperty(t, e, r);
      return r;
    }
    getWorldPosition(t) {
      return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, t, vh), t;
    }
    getWorldScale(t) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, xh, t), t;
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(t) {
      t(this);
      const e = this.children;
      for (let r = 0, s = e.length; r < s; r++)
        e[r].traverse(t);
    }
    traverseVisible(t) {
      if (this.visible === !1) return;
      t(this);
      const e = this.children;
      for (let r = 0, s = e.length; r < s; r++)
        e[r].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      e !== null && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
      const e = this.children;
      for (let r = 0, s = e.length; r < s; r++)
        e[r].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e) {
      const r = this.parent;
      if (t === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
        const s = this.children;
        for (let i = 0, a = s.length; i < a; i++)
          s[i].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(t) {
      const e = t === void 0 || typeof t == "string", r = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, r.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const s = {};
      s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({
        boxInitialized: o.boxInitialized,
        boxMin: o.box.min.toArray(),
        boxMax: o.box.max.toArray(),
        sphereInitialized: o.sphereInitialized,
        sphereRadius: o.sphere.radius,
        sphereCenter: o.sphere.center.toArray()
      })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = {
        center: s.boundingSphere.center.toArray(),
        radius: s.boundingSphere.radius
      }), this.boundingBox !== null && (s.boundingBox = {
        min: s.boundingBox.min.toArray(),
        max: s.boundingBox.max.toArray()
      }));
      function i(o, h) {
        return o[h.uuid] === void 0 && (o[h.uuid] = h.toJSON(t)), h.uuid;
      }
      if (this.isScene)
        this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        s.geometry = i(t.geometries, this.geometry);
        const o = this.geometry.parameters;
        if (o !== void 0 && o.shapes !== void 0) {
          const h = o.shapes;
          if (Array.isArray(h))
            for (let u = 0, l = h.length; u < l; u++) {
              const f = h[u];
              i(t.shapes, f);
            }
          else
            i(t.shapes, h);
        }
      }
      if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
        if (Array.isArray(this.material)) {
          const o = [];
          for (let h = 0, u = this.material.length; h < u; h++)
            o.push(i(t.materials, this.material[h]));
          s.material = o;
        } else
          s.material = i(t.materials, this.material);
      if (this.children.length > 0) {
        s.children = [];
        for (let o = 0; o < this.children.length; o++)
          s.children.push(this.children[o].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        s.animations = [];
        for (let o = 0; o < this.animations.length; o++) {
          const h = this.animations[o];
          s.animations.push(i(t.animations, h));
        }
      }
      if (e) {
        const o = a(t.geometries), h = a(t.materials), u = a(t.textures), l = a(t.images), f = a(t.shapes), c = a(t.skeletons), p = a(t.animations), d = a(t.nodes);
        o.length > 0 && (r.geometries = o), h.length > 0 && (r.materials = h), u.length > 0 && (r.textures = u), l.length > 0 && (r.images = l), f.length > 0 && (r.shapes = f), c.length > 0 && (r.skeletons = c), p.length > 0 && (r.animations = p), d.length > 0 && (r.nodes = d);
      }
      return r.object = s, r;
      function a(o) {
        const h = [];
        for (const u in o) {
          const l = o[u];
          delete l.metadata, h.push(l);
        }
        return h;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
        for (let r = 0; r < t.children.length; r++) {
          const s = t.children[r];
          this.add(s.clone());
        }
      return this;
    }
  }
  Et.DEFAULT_UP = /* @__PURE__ */ new w(0, 1, 0);
  Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
  Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  const Ut = /* @__PURE__ */ new w(), re = /* @__PURE__ */ new w(), Hn = /* @__PURE__ */ new w(), ne = /* @__PURE__ */ new w(), Xe = /* @__PURE__ */ new w(), Ze = /* @__PURE__ */ new w(), ki = /* @__PURE__ */ new w(), Wn = /* @__PURE__ */ new w(), Vn = /* @__PURE__ */ new w(), qn = /* @__PURE__ */ new w(), Xn = /* @__PURE__ */ new Lr(), Zn = /* @__PURE__ */ new Lr(), Yn = /* @__PURE__ */ new Lr();
  class zt {
    constructor(t = new w(), e = new w(), r = new w()) {
      this.a = t, this.b = e, this.c = r;
    }
    static getNormal(t, e, r, s) {
      s.subVectors(r, e), Ut.subVectors(t, e), s.cross(Ut);
      const i = s.lengthSq();
      return i > 0 ? s.multiplyScalar(1 / Math.sqrt(i)) : s.set(0, 0, 0);
    }
    // static/instance method to calculate barycentric coordinates
    // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    static getBarycoord(t, e, r, s, i) {
      Ut.subVectors(s, e), re.subVectors(r, e), Hn.subVectors(t, e);
      const a = Ut.dot(Ut), o = Ut.dot(re), h = Ut.dot(Hn), u = re.dot(re), l = re.dot(Hn), f = a * u - o * o;
      if (f === 0)
        return i.set(0, 0, 0), null;
      const c = 1 / f, p = (u * h - o * l) * c, d = (a * l - o * h) * c;
      return i.set(1 - p - d, d, p);
    }
    static containsPoint(t, e, r, s) {
      return this.getBarycoord(t, e, r, s, ne) === null ? !1 : ne.x >= 0 && ne.y >= 0 && ne.x + ne.y <= 1;
    }
    static getInterpolation(t, e, r, s, i, a, o, h) {
      return this.getBarycoord(t, e, r, s, ne) === null ? (h.x = 0, h.y = 0, "z" in h && (h.z = 0), "w" in h && (h.w = 0), null) : (h.setScalar(0), h.addScaledVector(i, ne.x), h.addScaledVector(a, ne.y), h.addScaledVector(o, ne.z), h);
    }
    static getInterpolatedAttribute(t, e, r, s, i, a) {
      return Xn.setScalar(0), Zn.setScalar(0), Yn.setScalar(0), Xn.fromBufferAttribute(t, e), Zn.fromBufferAttribute(t, r), Yn.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(Xn, i.x), a.addScaledVector(Zn, i.y), a.addScaledVector(Yn, i.z), a;
    }
    static isFrontFacing(t, e, r, s) {
      return Ut.subVectors(r, e), re.subVectors(t, e), Ut.cross(re).dot(s) < 0;
    }
    set(t, e, r) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(r), this;
    }
    setFromPointsAndIndices(t, e, r, s) {
      return this.a.copy(t[e]), this.b.copy(t[r]), this.c.copy(t[s]), this;
    }
    setFromAttributeAndIndices(t, e, r, s) {
      return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, r), this.c.fromBufferAttribute(t, s), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return Ut.subVectors(this.c, this.b), re.subVectors(this.a, this.b), Ut.cross(re).length() * 0.5;
    }
    getMidpoint(t) {
      return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return zt.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return zt.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getInterpolation(t, e, r, s, i) {
      return zt.getInterpolation(t, this.a, this.b, this.c, e, r, s, i);
    }
    containsPoint(t) {
      return zt.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return zt.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      const r = this.a, s = this.b, i = this.c;
      let a, o;
      Xe.subVectors(s, r), Ze.subVectors(i, r), Wn.subVectors(t, r);
      const h = Xe.dot(Wn), u = Ze.dot(Wn);
      if (h <= 0 && u <= 0)
        return e.copy(r);
      Vn.subVectors(t, s);
      const l = Xe.dot(Vn), f = Ze.dot(Vn);
      if (l >= 0 && f <= l)
        return e.copy(s);
      const c = h * f - l * u;
      if (c <= 0 && h >= 0 && l <= 0)
        return a = h / (h - l), e.copy(r).addScaledVector(Xe, a);
      qn.subVectors(t, i);
      const p = Xe.dot(qn), d = Ze.dot(qn);
      if (d >= 0 && p <= d)
        return e.copy(i);
      const g = p * u - h * d;
      if (g <= 0 && u >= 0 && d <= 0)
        return o = u / (u - d), e.copy(r).addScaledVector(Ze, o);
      const y = l * d - p * f;
      if (y <= 0 && f - l >= 0 && p - d >= 0)
        return ki.subVectors(i, s), o = (f - l) / (f - l + (p - d)), e.copy(s).addScaledVector(ki, o);
      const m = 1 / (y + g + c);
      return a = g * m, o = c * m, e.copy(r).addScaledVector(Xe, a).addScaledVector(Ze, o);
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  const qa = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, pe = { h: 0, s: 0, l: 0 }, Xr = { h: 0, s: 0, l: 0 };
  function Jn(n, t, e) {
    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n;
  }
  class ir {
    constructor(t, e, r) {
      return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, r);
    }
    set(t, e, r) {
      if (e === void 0 && r === void 0) {
        const s = t;
        s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
      } else
        this.setRGB(t, e, r);
      return this;
    }
    setScalar(t) {
      return this.r = t, this.g = t, this.b = t, this;
    }
    setHex(t, e = Bt) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Lt.toWorkingColorSpace(this, e), this;
    }
    setRGB(t, e, r, s = Lt.workingColorSpace) {
      return this.r = t, this.g = e, this.b = r, Lt.toWorkingColorSpace(this, s), this;
    }
    setHSL(t, e, r, s = Lt.workingColorSpace) {
      if (t = ah(t, 1), e = Z(e, 0, 1), r = Z(r, 0, 1), e === 0)
        this.r = this.g = this.b = r;
      else {
        const i = r <= 0.5 ? r * (1 + e) : r + e - r * e, a = 2 * r - i;
        this.r = Jn(a, i, t + 1 / 3), this.g = Jn(a, i, t), this.b = Jn(a, i, t - 1 / 3);
      }
      return Lt.toWorkingColorSpace(this, s), this;
    }
    setStyle(t, e = Bt) {
      function r(i) {
        i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
      }
      let s;
      if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
        let i;
        const a = s[1], o = s[2];
        switch (a) {
          case "rgb":
          case "rgba":
            if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
              return r(i[4]), this.setRGB(
                Math.min(255, parseInt(i[1], 10)) / 255,
                Math.min(255, parseInt(i[2], 10)) / 255,
                Math.min(255, parseInt(i[3], 10)) / 255,
                e
              );
            if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
              return r(i[4]), this.setRGB(
                Math.min(100, parseInt(i[1], 10)) / 100,
                Math.min(100, parseInt(i[2], 10)) / 100,
                Math.min(100, parseInt(i[3], 10)) / 100,
                e
              );
            break;
          case "hsl":
          case "hsla":
            if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
              return r(i[4]), this.setHSL(
                parseFloat(i[1]) / 360,
                parseFloat(i[2]) / 100,
                parseFloat(i[3]) / 100,
                e
              );
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t);
        }
      } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
        const i = s[1], a = i.length;
        if (a === 3)
          return this.setRGB(
            parseInt(i.charAt(0), 16) / 15,
            parseInt(i.charAt(1), 16) / 15,
            parseInt(i.charAt(2), 16) / 15,
            e
          );
        if (a === 6)
          return this.setHex(parseInt(i, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t);
      } else if (t && t.length > 0)
        return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = Bt) {
      const r = qa[t.toLowerCase()];
      return r !== void 0 ? this.setHex(r, e) : console.warn("THREE.Color: Unknown color " + t), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this;
    }
    copySRGBToLinear(t) {
      return this.r = oe(t.r), this.g = oe(t.g), this.b = oe(t.b), this;
    }
    copyLinearToSRGB(t) {
      return this.r = Ke(t.r), this.g = Ke(t.g), this.b = Ke(t.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = Bt) {
      return Lt.fromWorkingColorSpace(gt.copy(this), t), Math.round(Z(gt.r * 255, 0, 255)) * 65536 + Math.round(Z(gt.g * 255, 0, 255)) * 256 + Math.round(Z(gt.b * 255, 0, 255));
    }
    getHexString(t = Bt) {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = Lt.workingColorSpace) {
      Lt.fromWorkingColorSpace(gt.copy(this), e);
      const r = gt.r, s = gt.g, i = gt.b, a = Math.max(r, s, i), o = Math.min(r, s, i);
      let h, u;
      const l = (o + a) / 2;
      if (o === a)
        h = 0, u = 0;
      else {
        const f = a - o;
        switch (u = l <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
          case r:
            h = (s - i) / f + (s < i ? 6 : 0);
            break;
          case s:
            h = (i - r) / f + 2;
            break;
          case i:
            h = (r - s) / f + 4;
            break;
        }
        h /= 6;
      }
      return t.h = h, t.s = u, t.l = l, t;
    }
    getRGB(t, e = Lt.workingColorSpace) {
      return Lt.fromWorkingColorSpace(gt.copy(this), e), t.r = gt.r, t.g = gt.g, t.b = gt.b, t;
    }
    getStyle(t = Bt) {
      Lt.fromWorkingColorSpace(gt.copy(this), t);
      const e = gt.r, r = gt.g, s = gt.b;
      return t !== Bt ? `color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(r * 255)},${Math.round(s * 255)})`;
    }
    offsetHSL(t, e, r) {
      return this.getHSL(pe), this.setHSL(pe.h + t, pe.s + e, pe.l + r);
    }
    add(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this;
    }
    addColors(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    }
    addScalar(t) {
      return this.r += t, this.g += t, this.b += t, this;
    }
    sub(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
    }
    multiply(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    }
    multiplyScalar(t) {
      return this.r *= t, this.g *= t, this.b *= t, this;
    }
    lerp(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
    }
    lerpColors(t, e, r) {
      return this.r = t.r + (e.r - t.r) * r, this.g = t.g + (e.g - t.g) * r, this.b = t.b + (e.b - t.b) * r, this;
    }
    lerpHSL(t, e) {
      this.getHSL(pe), t.getHSL(Xr);
      const r = _n(pe.h, Xr.h, e), s = _n(pe.s, Xr.s, e), i = _n(pe.l, Xr.l, e);
      return this.setHSL(r, s, i), this;
    }
    setFromVector3(t) {
      return this.r = t.x, this.g = t.y, this.b = t.z, this;
    }
    applyMatrix3(t) {
      const e = this.r, r = this.g, s = this.b, i = t.elements;
      return this.r = i[0] * e + i[3] * r + i[6] * s, this.g = i[1] * e + i[4] * r + i[7] * s, this.b = i[2] * e + i[5] * r + i[8] * s, this;
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    }
    fromBufferAttribute(t, e) {
      return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const gt = /* @__PURE__ */ new ir();
  ir.NAMES = qa;
  let Sh = 0;
  class Xa extends Fn {
    constructor() {
      super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Sh++ }), this.uuid = sr(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ir(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
    }
    // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (t !== void 0)
        for (const e in t) {
          const r = t[e];
          if (r === void 0) {
            console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
            continue;
          }
          const s = this[e];
          if (s === void 0) {
            console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
            continue;
          }
          s && s.isColor ? s.set(r) : s && s.isVector3 && r && r.isVector3 ? s.copy(r) : this[e] = r;
        }
    }
    toJSON(t) {
      const e = t === void 0 || typeof t == "string";
      e && (t = {
        textures: {},
        images: {}
      });
      const r = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.color && this.color.isColor && (r.color = this.color.getHex()), this.roughness !== void 0 && (r.roughness = this.roughness), this.metalness !== void 0 && (r.metalness = this.metalness), this.sheen !== void 0 && (r.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (r.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (r.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (r.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (r.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (r.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (r.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (r.shininess = this.shininess), this.clearcoat !== void 0 && (r.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (r.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (r.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (r.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, r.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (r.dispersion = this.dispersion), this.iridescence !== void 0 && (r.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (r.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (r.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (r.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (r.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (r.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (r.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (r.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (r.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (r.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(t).uuid, r.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (r.aoMap = this.aoMap.toJSON(t).uuid, r.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(t).uuid, r.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(t).uuid, r.normalMapType = this.normalMapType, r.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(t).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (r.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (r.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (r.combine = this.combine)), this.envMapRotation !== void 0 && (r.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (r.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (r.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (r.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (r.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (r.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (r.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (r.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (r.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (r.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (r.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (r.size = this.size), this.shadowSide !== null && (r.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (r.blending = this.blending), this.side !== 0 && (r.side = this.side), this.vertexColors === !0 && (r.vertexColors = !0), this.opacity < 1 && (r.opacity = this.opacity), this.transparent === !0 && (r.transparent = !0), this.blendSrc !== 204 && (r.blendSrc = this.blendSrc), this.blendDst !== 205 && (r.blendDst = this.blendDst), this.blendEquation !== 100 && (r.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (r.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (r.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (r.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (r.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (r.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (r.depthFunc = this.depthFunc), this.depthTest === !1 && (r.depthTest = this.depthTest), this.depthWrite === !1 && (r.depthWrite = this.depthWrite), this.colorWrite === !1 && (r.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (r.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (r.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (r.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (r.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (r.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (r.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (r.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (r.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (r.rotation = this.rotation), this.polygonOffset === !0 && (r.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (r.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (r.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (r.linewidth = this.linewidth), this.dashSize !== void 0 && (r.dashSize = this.dashSize), this.gapSize !== void 0 && (r.gapSize = this.gapSize), this.scale !== void 0 && (r.scale = this.scale), this.dithering === !0 && (r.dithering = !0), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), this.alphaHash === !0 && (r.alphaHash = !0), this.alphaToCoverage === !0 && (r.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (r.premultipliedAlpha = !0), this.forceSinglePass === !0 && (r.forceSinglePass = !0), this.wireframe === !0 && (r.wireframe = !0), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (r.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (r.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (r.flatShading = !0), this.visible === !1 && (r.visible = !1), this.toneMapped === !1 && (r.toneMapped = !1), this.fog === !1 && (r.fog = !1), Object.keys(this.userData).length > 0 && (r.userData = this.userData);
      function s(i) {
        const a = [];
        for (const o in i) {
          const h = i[o];
          delete h.metadata, a.push(h);
        }
        return a;
      }
      if (e) {
        const i = s(t.textures), a = s(t.images);
        i.length > 0 && (r.textures = i), a.length > 0 && (r.images = a);
      }
      return r;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      const e = t.clippingPlanes;
      let r = null;
      if (e !== null) {
        const s = e.length;
        r = new Array(s);
        for (let i = 0; i !== s; ++i)
          r[i] = e[i].clone();
      }
      return this.clippingPlanes = r, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
  }
  class Za extends Xa {
    constructor(t) {
      super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ir(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new _r(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
    }
  }
  const ut = /* @__PURE__ */ new w(), Zr = /* @__PURE__ */ new D();
  class Dt {
    constructor(t, e, r = !1) {
      if (Array.isArray(t))
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = r, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    setUsage(t) {
      return this.usage = t, this;
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
    }
    copyAt(t, e, r) {
      t *= this.itemSize, r *= e.itemSize;
      for (let s = 0, i = this.itemSize; s < i; s++)
        this.array[t + s] = e.array[r + s];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (this.itemSize === 2)
        for (let e = 0, r = this.count; e < r; e++)
          Zr.fromBufferAttribute(this, e), Zr.applyMatrix3(t), this.setXY(e, Zr.x, Zr.y);
      else if (this.itemSize === 3)
        for (let e = 0, r = this.count; e < r; e++)
          ut.fromBufferAttribute(this, e), ut.applyMatrix3(t), this.setXYZ(e, ut.x, ut.y, ut.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, r = this.count; e < r; e++)
        ut.fromBufferAttribute(this, e), ut.applyMatrix4(t), this.setXYZ(e, ut.x, ut.y, ut.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, r = this.count; e < r; e++)
        ut.fromBufferAttribute(this, e), ut.applyNormalMatrix(t), this.setXYZ(e, ut.x, ut.y, ut.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, r = this.count; e < r; e++)
        ut.fromBufferAttribute(this, e), ut.transformDirection(t), this.setXYZ(e, ut.x, ut.y, ut.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getComponent(t, e) {
      let r = this.array[t * this.itemSize + e];
      return this.normalized && (r = ur(r, this.array)), r;
    }
    setComponent(t, e, r) {
      return this.normalized && (r = xt(r, this.array)), this.array[t * this.itemSize + e] = r, this;
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = ur(e, this.array)), e;
    }
    setX(t, e) {
      return this.normalized && (e = xt(e, this.array)), this.array[t * this.itemSize] = e, this;
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = ur(e, this.array)), e;
    }
    setY(t, e) {
      return this.normalized && (e = xt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = ur(e, this.array)), e;
    }
    setZ(t, e) {
      return this.normalized && (e = xt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = ur(e, this.array)), e;
    }
    setW(t, e) {
      return this.normalized && (e = xt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
    }
    setXY(t, e, r) {
      return t *= this.itemSize, this.normalized && (e = xt(e, this.array), r = xt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = r, this;
    }
    setXYZ(t, e, r, s) {
      return t *= this.itemSize, this.normalized && (e = xt(e, this.array), r = xt(r, this.array), s = xt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = r, this.array[t + 2] = s, this;
    }
    setXYZW(t, e, r, s, i) {
      return t *= this.itemSize, this.normalized && (e = xt(e, this.array), r = xt(r, this.array), s = xt(s, this.array), i = xt(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = r, this.array[t + 2] = s, this.array[t + 3] = i, this;
    }
    onUpload(t) {
      return this.onUploadCallback = t, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), t;
    }
  }
  class wh extends Dt {
    constructor(t, e, r) {
      super(new Uint16Array(t), e, r);
    }
  }
  class Fh extends Dt {
    constructor(t, e, r) {
      super(new Uint32Array(t), e, r);
    }
  }
  class rr extends Dt {
    constructor(t, e, r) {
      super(new Float32Array(t), e, r);
    }
  }
  let Th = 0;
  const At = /* @__PURE__ */ new mt(), $n = /* @__PURE__ */ new Et(), Ye = /* @__PURE__ */ new w(), St = /* @__PURE__ */ new Ue(), pr = /* @__PURE__ */ new Ue(), ct = /* @__PURE__ */ new w();
  class vt extends Fn {
    constructor() {
      super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Th++ }), this.uuid = sr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return Array.isArray(t) ? this.index = new (oh(t) ? Fh : wh)(t, 1) : this.index = t, this;
    }
    setIndirect(t) {
      return this.indirect = t, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return this.attributes[t] = e, this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return this.attributes[t] !== void 0;
    }
    addGroup(t, e, r = 0) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: r
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
      const r = this.attributes.normal;
      if (r !== void 0) {
        const i = new Se().getNormalMatrix(t);
        r.applyNormalMatrix(i), r.needsUpdate = !0;
      }
      const s = this.attributes.tangent;
      return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t) {
      return At.makeRotationFromQuaternion(t), this.applyMatrix4(At), this;
    }
    rotateX(t) {
      return At.makeRotationX(t), this.applyMatrix4(At), this;
    }
    rotateY(t) {
      return At.makeRotationY(t), this.applyMatrix4(At), this;
    }
    rotateZ(t) {
      return At.makeRotationZ(t), this.applyMatrix4(At), this;
    }
    translate(t, e, r) {
      return At.makeTranslation(t, e, r), this.applyMatrix4(At), this;
    }
    scale(t, e, r) {
      return At.makeScale(t, e, r), this.applyMatrix4(At), this;
    }
    lookAt(t) {
      return $n.lookAt(t), $n.updateMatrix(), this.applyMatrix4($n.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Ye).negate(), this.translate(Ye.x, Ye.y, Ye.z), this;
    }
    setFromPoints(t) {
      const e = this.getAttribute("position");
      if (e === void 0) {
        const r = [];
        for (let s = 0, i = t.length; s < i; s++) {
          const a = t[s];
          r.push(a.x, a.y, a.z || 0);
        }
        this.setAttribute("position", new rr(r, 3));
      } else {
        const r = Math.min(t.length, e.count);
        for (let s = 0; s < r; s++) {
          const i = t[s];
          e.setXYZ(s, i.x, i.y, i.z || 0);
        }
        t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Ue());
      const t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
          new w(-1 / 0, -1 / 0, -1 / 0),
          new w(1 / 0, 1 / 0, 1 / 0)
        );
        return;
      }
      if (t !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(t), e)
          for (let r = 0, s = e.length; r < s; r++) {
            const i = e[r];
            St.setFromBufferAttribute(i), this.morphTargetsRelative ? (ct.addVectors(this.boundingBox.min, St.min), this.boundingBox.expandByPoint(ct), ct.addVectors(this.boundingBox.max, St.max), this.boundingBox.expandByPoint(ct)) : (this.boundingBox.expandByPoint(St.min), this.boundingBox.expandByPoint(St.max));
          }
      } else
        this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Gs());
      const t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new w(), 1 / 0);
        return;
      }
      if (t) {
        const r = this.boundingSphere.center;
        if (St.setFromBufferAttribute(t), e)
          for (let i = 0, a = e.length; i < a; i++) {
            const o = e[i];
            pr.setFromBufferAttribute(o), this.morphTargetsRelative ? (ct.addVectors(St.min, pr.min), St.expandByPoint(ct), ct.addVectors(St.max, pr.max), St.expandByPoint(ct)) : (St.expandByPoint(pr.min), St.expandByPoint(pr.max));
          }
        St.getCenter(r);
        let s = 0;
        for (let i = 0, a = t.count; i < a; i++)
          ct.fromBufferAttribute(t, i), s = Math.max(s, r.distanceToSquared(ct));
        if (e)
          for (let i = 0, a = e.length; i < a; i++) {
            const o = e[i], h = this.morphTargetsRelative;
            for (let u = 0, l = o.count; u < l; u++)
              ct.fromBufferAttribute(o, u), h && (Ye.fromBufferAttribute(t, u), ct.add(Ye)), s = Math.max(s, r.distanceToSquared(ct));
          }
        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t = this.index, e = this.attributes;
      if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const r = e.position, s = e.normal, i = e.uv;
      this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Dt(new Float32Array(4 * r.count), 4));
      const a = this.getAttribute("tangent"), o = [], h = [];
      for (let k = 0; k < r.count; k++)
        o[k] = new w(), h[k] = new w();
      const u = new w(), l = new w(), f = new w(), c = new D(), p = new D(), d = new D(), g = new w(), y = new w();
      function m(k, B, P) {
        u.fromBufferAttribute(r, k), l.fromBufferAttribute(r, B), f.fromBufferAttribute(r, P), c.fromBufferAttribute(i, k), p.fromBufferAttribute(i, B), d.fromBufferAttribute(i, P), l.sub(u), f.sub(u), p.sub(c), d.sub(c);
        const I = 1 / (p.x * d.y - d.x * p.y);
        isFinite(I) && (g.copy(l).multiplyScalar(d.y).addScaledVector(f, -p.y).multiplyScalar(I), y.copy(f).multiplyScalar(p.x).addScaledVector(l, -d.x).multiplyScalar(I), o[k].add(g), o[B].add(g), o[P].add(g), h[k].add(y), h[B].add(y), h[P].add(y));
      }
      let b = this.groups;
      b.length === 0 && (b = [{
        start: 0,
        count: t.count
      }]);
      for (let k = 0, B = b.length; k < B; ++k) {
        const P = b[k], I = P.start, rt = P.count;
        for (let V = I, W = I + rt; V < W; V += 3)
          m(
            t.getX(V + 0),
            t.getX(V + 1),
            t.getX(V + 2)
          );
      }
      const v = new w(), x = new w(), F = new w(), C = new w();
      function T(k) {
        F.fromBufferAttribute(s, k), C.copy(F);
        const B = o[k];
        v.copy(B), v.sub(F.multiplyScalar(F.dot(B))).normalize(), x.crossVectors(C, B);
        const I = x.dot(h[k]) < 0 ? -1 : 1;
        a.setXYZW(k, v.x, v.y, v.z, I);
      }
      for (let k = 0, B = b.length; k < B; ++k) {
        const P = b[k], I = P.start, rt = P.count;
        for (let V = I, W = I + rt; V < W; V += 3)
          T(t.getX(V + 0)), T(t.getX(V + 1)), T(t.getX(V + 2));
      }
    }
    computeVertexNormals() {
      const t = this.index, e = this.getAttribute("position");
      if (e !== void 0) {
        let r = this.getAttribute("normal");
        if (r === void 0)
          r = new Dt(new Float32Array(e.count * 3), 3), this.setAttribute("normal", r);
        else
          for (let c = 0, p = r.count; c < p; c++)
            r.setXYZ(c, 0, 0, 0);
        const s = new w(), i = new w(), a = new w(), o = new w(), h = new w(), u = new w(), l = new w(), f = new w();
        if (t)
          for (let c = 0, p = t.count; c < p; c += 3) {
            const d = t.getX(c + 0), g = t.getX(c + 1), y = t.getX(c + 2);
            s.fromBufferAttribute(e, d), i.fromBufferAttribute(e, g), a.fromBufferAttribute(e, y), l.subVectors(a, i), f.subVectors(s, i), l.cross(f), o.fromBufferAttribute(r, d), h.fromBufferAttribute(r, g), u.fromBufferAttribute(r, y), o.add(l), h.add(l), u.add(l), r.setXYZ(d, o.x, o.y, o.z), r.setXYZ(g, h.x, h.y, h.z), r.setXYZ(y, u.x, u.y, u.z);
          }
        else
          for (let c = 0, p = e.count; c < p; c += 3)
            s.fromBufferAttribute(e, c + 0), i.fromBufferAttribute(e, c + 1), a.fromBufferAttribute(e, c + 2), l.subVectors(a, i), f.subVectors(s, i), l.cross(f), r.setXYZ(c + 0, l.x, l.y, l.z), r.setXYZ(c + 1, l.x, l.y, l.z), r.setXYZ(c + 2, l.x, l.y, l.z);
        this.normalizeNormals(), r.needsUpdate = !0;
      }
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, r = t.count; e < r; e++)
        ct.fromBufferAttribute(t, e), ct.normalize(), t.setXYZ(e, ct.x, ct.y, ct.z);
    }
    toNonIndexed() {
      function t(o, h) {
        const u = o.array, l = o.itemSize, f = o.normalized, c = new u.constructor(h.length * l);
        let p = 0, d = 0;
        for (let g = 0, y = h.length; g < y; g++) {
          o.isInterleavedBufferAttribute ? p = h[g] * o.data.stride + o.offset : p = h[g] * l;
          for (let m = 0; m < l; m++)
            c[d++] = u[p++];
        }
        return new Dt(c, l, f);
      }
      if (this.index === null)
        return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e = new vt(), r = this.index.array, s = this.attributes;
      for (const o in s) {
        const h = s[o], u = t(h, r);
        e.setAttribute(o, u);
      }
      const i = this.morphAttributes;
      for (const o in i) {
        const h = [], u = i[o];
        for (let l = 0, f = u.length; l < f; l++) {
          const c = u[l], p = t(c, r);
          h.push(p);
        }
        e.morphAttributes[o] = h;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let o = 0, h = a.length; o < h; o++) {
        const u = a[o];
        e.addGroup(u.start, u.count, u.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
        const h = this.parameters;
        for (const u in h)
          h[u] !== void 0 && (t[u] = h[u]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      e !== null && (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array)
      });
      const r = this.attributes;
      for (const h in r) {
        const u = r[h];
        t.data.attributes[h] = u.toJSON(t.data);
      }
      const s = {};
      let i = !1;
      for (const h in this.morphAttributes) {
        const u = this.morphAttributes[h], l = [];
        for (let f = 0, c = u.length; f < c; f++) {
          const p = u[f];
          l.push(p.toJSON(t.data));
        }
        l.length > 0 && (s[h] = l, i = !0);
      }
      i && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
      const a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      const o = this.boundingSphere;
      return o !== null && (t.data.boundingSphere = {
        center: o.center.toArray(),
        radius: o.radius
      }), t;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e = {};
      this.name = t.name;
      const r = t.index;
      r !== null && this.setIndex(r.clone(e));
      const s = t.attributes;
      for (const u in s) {
        const l = s[u];
        this.setAttribute(u, l.clone(e));
      }
      const i = t.morphAttributes;
      for (const u in i) {
        const l = [], f = i[u];
        for (let c = 0, p = f.length; c < p; c++)
          l.push(f[c].clone(e));
        this.morphAttributes[u] = l;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const a = t.groups;
      for (let u = 0, l = a.length; u < l; u++) {
        const f = a[u];
        this.addGroup(f.start, f.count, f.materialIndex);
      }
      const o = t.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      const h = t.boundingSphere;
      return h !== null && (this.boundingSphere = h.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Mi = /* @__PURE__ */ new mt(), Me = /* @__PURE__ */ new Va(), Yr = /* @__PURE__ */ new Gs(), Ci = /* @__PURE__ */ new w(), Jr = /* @__PURE__ */ new w(), $r = /* @__PURE__ */ new w(), Qr = /* @__PURE__ */ new w(), Qn = /* @__PURE__ */ new w(), jr = /* @__PURE__ */ new w(), Ai = /* @__PURE__ */ new w(), Kr = /* @__PURE__ */ new w();
  class dn extends Et {
    constructor(t = new vt(), e = new Za()) {
      super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
    }
    copy(t, e) {
      return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes, r = Object.keys(e);
      if (r.length > 0) {
        const s = e[r[0]];
        if (s !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let i = 0, a = s.length; i < a; i++) {
            const o = s[i].name || String(i);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = i;
          }
        }
      }
    }
    getVertexPosition(t, e) {
      const r = this.geometry, s = r.attributes.position, i = r.morphAttributes.position, a = r.morphTargetsRelative;
      e.fromBufferAttribute(s, t);
      const o = this.morphTargetInfluences;
      if (i && o) {
        jr.set(0, 0, 0);
        for (let h = 0, u = i.length; h < u; h++) {
          const l = o[h], f = i[h];
          l !== 0 && (Qn.fromBufferAttribute(f, t), a ? jr.addScaledVector(Qn, l) : jr.addScaledVector(Qn.sub(e), l));
        }
        e.add(jr);
      }
      return e;
    }
    raycast(t, e) {
      const r = this.geometry, s = this.material, i = this.matrixWorld;
      s !== void 0 && (r.boundingSphere === null && r.computeBoundingSphere(), Yr.copy(r.boundingSphere), Yr.applyMatrix4(i), Me.copy(t.ray).recast(t.near), !(Yr.containsPoint(Me.origin) === !1 && (Me.intersectSphere(Yr, Ci) === null || Me.origin.distanceToSquared(Ci) > (t.far - t.near) ** 2)) && (Mi.copy(i).invert(), Me.copy(t.ray).applyMatrix4(Mi), !(r.boundingBox !== null && Me.intersectsBox(r.boundingBox) === !1) && this._computeIntersections(t, e, Me)));
    }
    _computeIntersections(t, e, r) {
      let s;
      const i = this.geometry, a = this.material, o = i.index, h = i.attributes.position, u = i.attributes.uv, l = i.attributes.uv1, f = i.attributes.normal, c = i.groups, p = i.drawRange;
      if (o !== null)
        if (Array.isArray(a))
          for (let d = 0, g = c.length; d < g; d++) {
            const y = c[d], m = a[y.materialIndex], b = Math.max(y.start, p.start), v = Math.min(o.count, Math.min(y.start + y.count, p.start + p.count));
            for (let x = b, F = v; x < F; x += 3) {
              const C = o.getX(x), T = o.getX(x + 1), k = o.getX(x + 2);
              s = tn(this, m, t, r, u, l, f, C, T, k), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = y.materialIndex, e.push(s));
            }
          }
        else {
          const d = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
          for (let y = d, m = g; y < m; y += 3) {
            const b = o.getX(y), v = o.getX(y + 1), x = o.getX(y + 2);
            s = tn(this, a, t, r, u, l, f, b, v, x), s && (s.faceIndex = Math.floor(y / 3), e.push(s));
          }
        }
      else if (h !== void 0)
        if (Array.isArray(a))
          for (let d = 0, g = c.length; d < g; d++) {
            const y = c[d], m = a[y.materialIndex], b = Math.max(y.start, p.start), v = Math.min(h.count, Math.min(y.start + y.count, p.start + p.count));
            for (let x = b, F = v; x < F; x += 3) {
              const C = x, T = x + 1, k = x + 2;
              s = tn(this, m, t, r, u, l, f, C, T, k), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = y.materialIndex, e.push(s));
            }
          }
        else {
          const d = Math.max(0, p.start), g = Math.min(h.count, p.start + p.count);
          for (let y = d, m = g; y < m; y += 3) {
            const b = y, v = y + 1, x = y + 2;
            s = tn(this, a, t, r, u, l, f, b, v, x), s && (s.faceIndex = Math.floor(y / 3), e.push(s));
          }
        }
    }
  }
  function kh(n, t, e, r, s, i, a, o) {
    let h;
    if (t.side === 1 ? h = r.intersectTriangle(a, i, s, !0, o) : h = r.intersectTriangle(s, i, a, t.side === 0, o), h === null) return null;
    Kr.copy(o), Kr.applyMatrix4(n.matrixWorld);
    const u = e.ray.origin.distanceTo(Kr);
    return u < e.near || u > e.far ? null : {
      distance: u,
      point: Kr.clone(),
      object: n
    };
  }
  function tn(n, t, e, r, s, i, a, o, h, u) {
    n.getVertexPosition(o, Jr), n.getVertexPosition(h, $r), n.getVertexPosition(u, Qr);
    const l = kh(n, t, e, r, Jr, $r, Qr, Ai);
    if (l) {
      const f = new w();
      zt.getBarycoord(Ai, Jr, $r, Qr, f), s && (l.uv = zt.getInterpolatedAttribute(s, o, h, u, f, new D())), i && (l.uv1 = zt.getInterpolatedAttribute(i, o, h, u, f, new D())), a && (l.normal = zt.getInterpolatedAttribute(a, o, h, u, f, new w()), l.normal.dot(r.direction) > 0 && l.normal.multiplyScalar(-1));
      const c = {
        a: o,
        b: h,
        c: u,
        normal: new w(),
        materialIndex: 0
      };
      zt.getNormal(Jr, $r, Qr, c.normal), l.face = c, l.barycoord = f;
    }
    return l;
  }
  class Ya extends Xa {
    constructor(t) {
      super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ir(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
    }
  }
  const gn = /* @__PURE__ */ new w(), mn = /* @__PURE__ */ new w(), Ei = /* @__PURE__ */ new mt(), dr = /* @__PURE__ */ new Va(), en = /* @__PURE__ */ new Gs(), jn = /* @__PURE__ */ new w(), Oi = /* @__PURE__ */ new w();
  class Hs extends Et {
    constructor(t = new vt(), e = new Ya()) {
      super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
    }
    copy(t, e) {
      return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
    }
    computeLineDistances() {
      const t = this.geometry;
      if (t.index === null) {
        const e = t.attributes.position, r = [0];
        for (let s = 1, i = e.count; s < i; s++)
          gn.fromBufferAttribute(e, s - 1), mn.fromBufferAttribute(e, s), r[s] = r[s - 1], r[s] += gn.distanceTo(mn);
        t.setAttribute("lineDistance", new rr(r, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t, e) {
      const r = this.geometry, s = this.matrixWorld, i = t.params.Line.threshold, a = r.drawRange;
      if (r.boundingSphere === null && r.computeBoundingSphere(), en.copy(r.boundingSphere), en.applyMatrix4(s), en.radius += i, t.ray.intersectsSphere(en) === !1) return;
      Ei.copy(s).invert(), dr.copy(t.ray).applyMatrix4(Ei);
      const o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), h = o * o, u = this.isLineSegments ? 2 : 1, l = r.index, c = r.attributes.position;
      if (l !== null) {
        const p = Math.max(0, a.start), d = Math.min(l.count, a.start + a.count);
        for (let g = p, y = d - 1; g < y; g += u) {
          const m = l.getX(g), b = l.getX(g + 1), v = rn(this, t, dr, h, m, b);
          v && e.push(v);
        }
        if (this.isLineLoop) {
          const g = l.getX(d - 1), y = l.getX(p), m = rn(this, t, dr, h, g, y);
          m && e.push(m);
        }
      } else {
        const p = Math.max(0, a.start), d = Math.min(c.count, a.start + a.count);
        for (let g = p, y = d - 1; g < y; g += u) {
          const m = rn(this, t, dr, h, g, g + 1);
          m && e.push(m);
        }
        if (this.isLineLoop) {
          const g = rn(this, t, dr, h, d - 1, p);
          g && e.push(g);
        }
      }
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes, r = Object.keys(e);
      if (r.length > 0) {
        const s = e[r[0]];
        if (s !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let i = 0, a = s.length; i < a; i++) {
            const o = s[i].name || String(i);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = i;
          }
        }
      }
    }
  }
  function rn(n, t, e, r, s, i) {
    const a = n.geometry.attributes.position;
    if (gn.fromBufferAttribute(a, s), mn.fromBufferAttribute(a, i), e.distanceSqToSegment(gn, mn, jn, Oi) > r) return;
    jn.applyMatrix4(n.matrixWorld);
    const h = t.ray.origin.distanceTo(jn);
    if (!(h < t.near || h > t.far))
      return {
        distance: h,
        // What do we want? intersection point on the ray or on the segment??
        // point: raycaster.ray.at( distance ),
        point: Oi.clone().applyMatrix4(n.matrixWorld),
        index: s,
        face: null,
        faceIndex: null,
        barycoord: null,
        object: n
      };
  }
  const Li = /* @__PURE__ */ new w(), _i = /* @__PURE__ */ new w();
  class Mh extends Hs {
    constructor(t, e) {
      super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t = this.geometry;
      if (t.index === null) {
        const e = t.attributes.position, r = [];
        for (let s = 0, i = e.count; s < i; s += 2)
          Li.fromBufferAttribute(e, s), _i.fromBufferAttribute(e, s + 1), r[s] = s === 0 ? 0 : r[s - 1], r[s + 1] = r[s] + Li.distanceTo(_i);
        t.setAttribute("lineDistance", new rr(r, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class Ri extends Et {
    constructor() {
      super(), this.isGroup = !0, this.type = "Group";
    }
  }
  class Yt {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    // Virtual base class method to overwrite and implement in subclasses
    //	- t [0 .. 1]
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    // Get point at relative position in curve according to arc length
    // - u [0 .. 1]
    getPointAt(t, e) {
      const r = this.getUtoTmapping(t);
      return this.getPoint(r, e);
    }
    // Get sequence of points using getPoint( t )
    getPoints(t = 5) {
      const e = [];
      for (let r = 0; r <= t; r++)
        e.push(this.getPoint(r / t));
      return e;
    }
    // Get sequence of points using getPointAt( u )
    getSpacedPoints(t = 5) {
      const e = [];
      for (let r = 0; r <= t; r++)
        e.push(this.getPointAt(r / t));
      return e;
    }
    // Get total curve arc length
    getLength() {
      const t = this.getLengths();
      return t[t.length - 1];
    }
    // Get list of cumulative segment lengths
    getLengths(t = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      const e = [];
      let r, s = this.getPoint(0), i = 0;
      e.push(0);
      for (let a = 1; a <= t; a++)
        r = this.getPoint(a / t), i += r.distanceTo(s), e.push(i), s = r;
      return this.cacheArcLengths = e, e;
    }
    updateArcLengths() {
      this.needsUpdate = !0, this.getLengths();
    }
    // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
    getUtoTmapping(t, e) {
      const r = this.getLengths();
      let s = 0;
      const i = r.length;
      let a;
      e ? a = e : a = t * r[i - 1];
      let o = 0, h = i - 1, u;
      for (; o <= h; )
        if (s = Math.floor(o + (h - o) / 2), u = r[s] - a, u < 0)
          o = s + 1;
        else if (u > 0)
          h = s - 1;
        else {
          h = s;
          break;
        }
      if (s = h, r[s] === a)
        return s / (i - 1);
      const l = r[s], c = r[s + 1] - l, p = (a - l) / c;
      return (s + p) / (i - 1);
    }
    // Returns a unit vector tangent at t
    // In case any sub curve does not implement its tangent derivation,
    // 2 points a small delta apart will be used to find its gradient
    // which seems to give a reasonable approximation
    getTangent(t, e) {
      let s = t - 1e-4, i = t + 1e-4;
      s < 0 && (s = 0), i > 1 && (i = 1);
      const a = this.getPoint(s), o = this.getPoint(i), h = e || (a.isVector2 ? new D() : new w());
      return h.copy(o).sub(a).normalize(), h;
    }
    getTangentAt(t, e) {
      const r = this.getUtoTmapping(t);
      return this.getTangent(r, e);
    }
    computeFrenetFrames(t, e) {
      const r = new w(), s = [], i = [], a = [], o = new w(), h = new mt();
      for (let p = 0; p <= t; p++) {
        const d = p / t;
        s[p] = this.getTangentAt(d, new w());
      }
      i[0] = new w(), a[0] = new w();
      let u = Number.MAX_VALUE;
      const l = Math.abs(s[0].x), f = Math.abs(s[0].y), c = Math.abs(s[0].z);
      l <= u && (u = l, r.set(1, 0, 0)), f <= u && (u = f, r.set(0, 1, 0)), c <= u && r.set(0, 0, 1), o.crossVectors(s[0], r).normalize(), i[0].crossVectors(s[0], o), a[0].crossVectors(s[0], i[0]);
      for (let p = 1; p <= t; p++) {
        if (i[p] = i[p - 1].clone(), a[p] = a[p - 1].clone(), o.crossVectors(s[p - 1], s[p]), o.length() > Number.EPSILON) {
          o.normalize();
          const d = Math.acos(Z(s[p - 1].dot(s[p]), -1, 1));
          i[p].applyMatrix4(h.makeRotationAxis(o, d));
        }
        a[p].crossVectors(s[p], i[p]);
      }
      if (e === !0) {
        let p = Math.acos(Z(i[0].dot(i[t]), -1, 1));
        p /= t, s[0].dot(o.crossVectors(i[0], i[t])) > 0 && (p = -p);
        for (let d = 1; d <= t; d++)
          i[d].applyMatrix4(h.makeRotationAxis(s[d], p * d)), a[d].crossVectors(s[d], i[d]);
      }
      return {
        tangents: s,
        normals: i,
        binormals: a
      };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.6,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
    }
    fromJSON(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
  }
  class Ws extends Yt {
    constructor(t = 0, e = 0, r = 1, s = 1, i = 0, a = Math.PI * 2, o = !1, h = 0) {
      super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = r, this.yRadius = s, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = h;
    }
    getPoint(t, e = new D()) {
      const r = e, s = Math.PI * 2;
      let i = this.aEndAngle - this.aStartAngle;
      const a = Math.abs(i) < Number.EPSILON;
      for (; i < 0; ) i += s;
      for (; i > s; ) i -= s;
      i < Number.EPSILON && (a ? i = 0 : i = s), this.aClockwise === !0 && !a && (i === s ? i = -s : i = i - s);
      const o = this.aStartAngle + t * i;
      let h = this.aX + this.xRadius * Math.cos(o), u = this.aY + this.yRadius * Math.sin(o);
      if (this.aRotation !== 0) {
        const l = Math.cos(this.aRotation), f = Math.sin(this.aRotation), c = h - this.aX, p = u - this.aY;
        h = c * l - p * f + this.aX, u = c * f + p * l + this.aY;
      }
      return r.set(h, u);
    }
    copy(t) {
      return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
    }
  }
  class Ch extends Ws {
    constructor(t, e, r, s, i, a) {
      super(t, e, r, r, s, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
    }
  }
  function Vs() {
    let n = 0, t = 0, e = 0, r = 0;
    function s(i, a, o, h) {
      n = i, t = o, e = -3 * i + 3 * a - 2 * o - h, r = 2 * i - 2 * a + o + h;
    }
    return {
      initCatmullRom: function(i, a, o, h, u) {
        s(a, o, u * (o - i), u * (h - a));
      },
      initNonuniformCatmullRom: function(i, a, o, h, u, l, f) {
        let c = (a - i) / u - (o - i) / (u + l) + (o - a) / l, p = (o - a) / l - (h - a) / (l + f) + (h - o) / f;
        c *= l, p *= l, s(a, o, c, p);
      },
      calc: function(i) {
        const a = i * i, o = a * i;
        return n + t * i + e * a + r * o;
      }
    };
  }
  const nn = /* @__PURE__ */ new w(), Kn = /* @__PURE__ */ new Vs(), ts = /* @__PURE__ */ new Vs(), es = /* @__PURE__ */ new Vs();
  class Ah extends Yt {
    constructor(t = [], e = !1, r = "centripetal", s = 0.5) {
      super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = r, this.tension = s;
    }
    getPoint(t, e = new w()) {
      const r = e, s = this.points, i = s.length, a = (i - (this.closed ? 0 : 1)) * t;
      let o = Math.floor(a), h = a - o;
      this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : h === 0 && o === i - 1 && (o = i - 2, h = 1);
      let u, l;
      this.closed || o > 0 ? u = s[(o - 1) % i] : (nn.subVectors(s[0], s[1]).add(s[0]), u = nn);
      const f = s[o % i], c = s[(o + 1) % i];
      if (this.closed || o + 2 < i ? l = s[(o + 2) % i] : (nn.subVectors(s[i - 1], s[i - 2]).add(s[i - 1]), l = nn), this.curveType === "centripetal" || this.curveType === "chordal") {
        const p = this.curveType === "chordal" ? 0.5 : 0.25;
        let d = Math.pow(u.distanceToSquared(f), p), g = Math.pow(f.distanceToSquared(c), p), y = Math.pow(c.distanceToSquared(l), p);
        g < 1e-4 && (g = 1), d < 1e-4 && (d = g), y < 1e-4 && (y = g), Kn.initNonuniformCatmullRom(u.x, f.x, c.x, l.x, d, g, y), ts.initNonuniformCatmullRom(u.y, f.y, c.y, l.y, d, g, y), es.initNonuniformCatmullRom(u.z, f.z, c.z, l.z, d, g, y);
      } else this.curveType === "catmullrom" && (Kn.initCatmullRom(u.x, f.x, c.x, l.x, this.tension), ts.initCatmullRom(u.y, f.y, c.y, l.y, this.tension), es.initCatmullRom(u.z, f.z, c.z, l.z, this.tension));
      return r.set(
        Kn.calc(h),
        ts.calc(h),
        es.calc(h)
      ), r;
    }
    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, r = t.points.length; e < r; e++) {
        const s = t.points[e];
        this.points.push(s.clone());
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
    }
    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, r = this.points.length; e < r; e++) {
        const s = this.points[e];
        t.points.push(s.toArray());
      }
      return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, r = t.points.length; e < r; e++) {
        const s = t.points[e];
        this.points.push(new w().fromArray(s));
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
    }
  }
  function Ui(n, t, e, r, s) {
    const i = (r - t) * 0.5, a = (s - e) * 0.5, o = n * n, h = n * o;
    return (2 * e - 2 * r + i + a) * h + (-3 * e + 3 * r - 2 * i - a) * o + i * n + e;
  }
  function Eh(n, t) {
    const e = 1 - n;
    return e * e * t;
  }
  function Oh(n, t) {
    return 2 * (1 - n) * n * t;
  }
  function Lh(n, t) {
    return n * n * t;
  }
  function yr(n, t, e, r) {
    return Eh(n, t) + Oh(n, e) + Lh(n, r);
  }
  function _h(n, t) {
    const e = 1 - n;
    return e * e * e * t;
  }
  function Rh(n, t) {
    const e = 1 - n;
    return 3 * e * e * n * t;
  }
  function Uh(n, t) {
    return 3 * (1 - n) * n * n * t;
  }
  function Bh(n, t) {
    return n * n * n * t;
  }
  function vr(n, t, e, r, s) {
    return _h(n, t) + Rh(n, e) + Uh(n, r) + Bh(n, s);
  }
  class Ja extends Yt {
    constructor(t = new D(), e = new D(), r = new D(), s = new D()) {
      super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = r, this.v3 = s;
    }
    getPoint(t, e = new D()) {
      const r = e, s = this.v0, i = this.v1, a = this.v2, o = this.v3;
      return r.set(
        vr(t, s.x, i.x, a.x, o.x),
        vr(t, s.y, i.y, a.y, o.y)
      ), r;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
    }
  }
  class Ph extends Yt {
    constructor(t = new w(), e = new w(), r = new w(), s = new w()) {
      super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = r, this.v3 = s;
    }
    getPoint(t, e = new w()) {
      const r = e, s = this.v0, i = this.v1, a = this.v2, o = this.v3;
      return r.set(
        vr(t, s.x, i.x, a.x, o.x),
        vr(t, s.y, i.y, a.y, o.y),
        vr(t, s.z, i.z, a.z, o.z)
      ), r;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
    }
  }
  class $a extends Yt {
    constructor(t = new D(), e = new D()) {
      super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
    }
    getPoint(t, e = new D()) {
      const r = e;
      return t === 1 ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(t).add(this.v1)), r;
    }
    // Line curve is linear, so we can overwrite default getPointAt
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new D()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  }
  class zh extends Yt {
    constructor(t = new w(), e = new w()) {
      super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
    }
    getPoint(t, e = new w()) {
      const r = e;
      return t === 1 ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(t).add(this.v1)), r;
    }
    // Line curve is linear, so we can overwrite default getPointAt
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new w()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  }
  class Qa extends Yt {
    constructor(t = new D(), e = new D(), r = new D()) {
      super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = r;
    }
    getPoint(t, e = new D()) {
      const r = e, s = this.v0, i = this.v1, a = this.v2;
      return r.set(
        yr(t, s.x, i.x, a.x),
        yr(t, s.y, i.y, a.y)
      ), r;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  }
  class Dh extends Yt {
    constructor(t = new w(), e = new w(), r = new w()) {
      super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = r;
    }
    getPoint(t, e = new w()) {
      const r = e, s = this.v0, i = this.v1, a = this.v2;
      return r.set(
        yr(t, s.x, i.x, a.x),
        yr(t, s.y, i.y, a.y),
        yr(t, s.z, i.z, a.z)
      ), r;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  }
  class ja extends Yt {
    constructor(t = []) {
      super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
    }
    getPoint(t, e = new D()) {
      const r = e, s = this.points, i = (s.length - 1) * t, a = Math.floor(i), o = i - a, h = s[a === 0 ? a : a - 1], u = s[a], l = s[a > s.length - 2 ? s.length - 1 : a + 1], f = s[a > s.length - 3 ? s.length - 1 : a + 2];
      return r.set(
        Ui(o, h.x, u.x, l.x, f.x),
        Ui(o, h.y, u.y, l.y, f.y)
      ), r;
    }
    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, r = t.points.length; e < r; e++) {
        const s = t.points[e];
        this.points.push(s.clone());
      }
      return this;
    }
    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, r = this.points.length; e < r; e++) {
        const s = this.points[e];
        t.points.push(s.toArray());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, r = t.points.length; e < r; e++) {
        const s = t.points[e];
        this.points.push(new D().fromArray(s));
      }
      return this;
    }
  }
  var Ss = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcCurve: Ch,
    CatmullRomCurve3: Ah,
    CubicBezierCurve: Ja,
    CubicBezierCurve3: Ph,
    EllipseCurve: Ws,
    LineCurve: $a,
    LineCurve3: zh,
    QuadraticBezierCurve: Qa,
    QuadraticBezierCurve3: Dh,
    SplineCurve: ja
  });
  class Ih extends Yt {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
    }
    add(t) {
      this.curves.push(t);
    }
    closePath() {
      const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t.equals(e)) {
        const r = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Ss[r](e, t));
      }
      return this;
    }
    // To get accurate point with reference to
    // entire path distance at time t,
    // following has to be done:
    // 1. Length of each sub path have to be known
    // 2. Locate and identify type of curve
    // 3. Get t for the curve
    // 4. Return curve.getPointAt(t')
    getPoint(t, e) {
      const r = t * this.getLength(), s = this.getCurveLengths();
      let i = 0;
      for (; i < s.length; ) {
        if (s[i] >= r) {
          const a = s[i] - r, o = this.curves[i], h = o.getLength(), u = h === 0 ? 0 : 1 - a / h;
          return o.getPointAt(u, e);
        }
        i++;
      }
      return null;
    }
    // We cannot use the default THREE.Curve getPoint() with getLength() because in
    // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
    // getPoint() depends on getLength
    getLength() {
      const t = this.getCurveLengths();
      return t[t.length - 1];
    }
    // cacheLengths must be recalculated.
    updateArcLengths() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
    }
    // Compute lengths and cache them
    // We cannot overwrite getLengths() because UtoT mapping uses it.
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      const t = [];
      let e = 0;
      for (let r = 0, s = this.curves.length; r < s; r++)
        e += this.curves[r].getLength(), t.push(e);
      return this.cacheLengths = t, t;
    }
    getSpacedPoints(t = 40) {
      const e = [];
      for (let r = 0; r <= t; r++)
        e.push(this.getPoint(r / t));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t = 12) {
      const e = [];
      let r;
      for (let s = 0, i = this.curves; s < i.length; s++) {
        const a = i[s], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, h = a.getPoints(o);
        for (let u = 0; u < h.length; u++) {
          const l = h[u];
          r && r.equals(l) || (e.push(l), r = l);
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
    }
    copy(t) {
      super.copy(t), this.curves = [];
      for (let e = 0, r = t.curves.length; e < r; e++) {
        const s = t.curves[e];
        this.curves.push(s.clone());
      }
      return this.autoClose = t.autoClose, this;
    }
    toJSON() {
      const t = super.toJSON();
      t.autoClose = this.autoClose, t.curves = [];
      for (let e = 0, r = this.curves.length; e < r; e++) {
        const s = this.curves[e];
        t.curves.push(s.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
      for (let e = 0, r = t.curves.length; e < r; e++) {
        const s = t.curves[e];
        this.curves.push(new Ss[s.type]().fromJSON(s));
      }
      return this;
    }
  }
  let ws = class extends Ih {
    constructor(t) {
      super(), this.type = "Path", this.currentPoint = new D(), t && this.setFromPoints(t);
    }
    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, r = t.length; e < r; e++)
        this.lineTo(t[e].x, t[e].y);
      return this;
    }
    moveTo(t, e) {
      return this.currentPoint.set(t, e), this;
    }
    lineTo(t, e) {
      const r = new $a(this.currentPoint.clone(), new D(t, e));
      return this.curves.push(r), this.currentPoint.set(t, e), this;
    }
    quadraticCurveTo(t, e, r, s) {
      const i = new Qa(
        this.currentPoint.clone(),
        new D(t, e),
        new D(r, s)
      );
      return this.curves.push(i), this.currentPoint.set(r, s), this;
    }
    bezierCurveTo(t, e, r, s, i, a) {
      const o = new Ja(
        this.currentPoint.clone(),
        new D(t, e),
        new D(r, s),
        new D(i, a)
      );
      return this.curves.push(o), this.currentPoint.set(i, a), this;
    }
    splineThru(t) {
      const e = [this.currentPoint.clone()].concat(t), r = new ja(e);
      return this.curves.push(r), this.currentPoint.copy(t[t.length - 1]), this;
    }
    arc(t, e, r, s, i, a) {
      const o = this.currentPoint.x, h = this.currentPoint.y;
      return this.absarc(
        t + o,
        e + h,
        r,
        s,
        i,
        a
      ), this;
    }
    absarc(t, e, r, s, i, a) {
      return this.absellipse(t, e, r, r, s, i, a), this;
    }
    ellipse(t, e, r, s, i, a, o, h) {
      const u = this.currentPoint.x, l = this.currentPoint.y;
      return this.absellipse(t + u, e + l, r, s, i, a, o, h), this;
    }
    absellipse(t, e, r, s, i, a, o, h) {
      const u = new Ws(t, e, r, s, i, a, o, h);
      if (this.curves.length > 0) {
        const f = u.getPoint(0);
        f.equals(this.currentPoint) || this.lineTo(f.x, f.y);
      }
      this.curves.push(u);
      const l = u.getPoint(1);
      return this.currentPoint.copy(l), this;
    }
    copy(t) {
      return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
    }
    toJSON() {
      const t = super.toJSON();
      return t.currentPoint = this.currentPoint.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
    }
  };
  class xr extends ws {
    constructor(t) {
      super(t), this.uuid = sr(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t) {
      const e = [];
      for (let r = 0, s = this.holes.length; r < s; r++)
        e[r] = this.holes[r].getPoints(t);
      return e;
    }
    // get points of shape and holes (keypoints based on segments parameter)
    extractPoints(t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      };
    }
    copy(t) {
      super.copy(t), this.holes = [];
      for (let e = 0, r = t.holes.length; e < r; e++) {
        const s = t.holes[e];
        this.holes.push(s.clone());
      }
      return this;
    }
    toJSON() {
      const t = super.toJSON();
      t.uuid = this.uuid, t.holes = [];
      for (let e = 0, r = this.holes.length; e < r; e++) {
        const s = this.holes[e];
        t.holes.push(s.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
      for (let e = 0, r = t.holes.length; e < r; e++) {
        const s = t.holes[e];
        this.holes.push(new ws().fromJSON(s));
      }
      return this;
    }
  }
  const Nh = {
    triangulate: function(n, t, e = 2) {
      const r = t && t.length, s = r ? t[0] * e : n.length;
      let i = Ka(n, 0, s, e, !0);
      const a = [];
      if (!i || i.next === i.prev) return a;
      let o, h, u, l, f, c, p;
      if (r && (i = qh(n, t, i, e)), n.length > 80 * e) {
        o = u = n[0], h = l = n[1];
        for (let d = e; d < s; d += e)
          f = n[d], c = n[d + 1], f < o && (o = f), c < h && (h = c), f > u && (u = f), c > l && (l = c);
        p = Math.max(u - o, l - h), p = p !== 0 ? 32767 / p : 0;
      }
      return wr(i, a, e, o, h, p, 0), a;
    }
  };
  function Ka(n, t, e, r, s) {
    let i, a;
    if (s === ru(n, t, e, r) > 0)
      for (i = t; i < e; i += r) a = Bi(i, n[i], n[i + 1], a);
    else
      for (i = e - r; i >= t; i -= r) a = Bi(i, n[i], n[i + 1], a);
    return a && Tn(a, a.next) && (Tr(a), a = a.next), a;
  }
  function Be(n, t) {
    if (!n) return n;
    t || (t = n);
    let e = n, r;
    do
      if (r = !1, !e.steiner && (Tn(e, e.next) || nt(e.prev, e, e.next) === 0)) {
        if (Tr(e), e = t = e.prev, e === e.next) break;
        r = !0;
      } else
        e = e.next;
    while (r || e !== t);
    return t;
  }
  function wr(n, t, e, r, s, i, a) {
    if (!n) return;
    !a && i && $h(n, r, s, i);
    let o = n, h, u;
    for (; n.prev !== n.next; ) {
      if (h = n.prev, u = n.next, i ? Hh(n, r, s, i) : Gh(n)) {
        t.push(h.i / e | 0), t.push(n.i / e | 0), t.push(u.i / e | 0), Tr(n), n = u.next, o = u.next;
        continue;
      }
      if (n = u, n === o) {
        a ? a === 1 ? (n = Wh(Be(n), t, e), wr(n, t, e, r, s, i, 2)) : a === 2 && Vh(n, t, e, r, s, i) : wr(Be(n), t, e, r, s, i, 1);
        break;
      }
    }
  }
  function Gh(n) {
    const t = n.prev, e = n, r = n.next;
    if (nt(t, e, r) >= 0) return !1;
    const s = t.x, i = e.x, a = r.x, o = t.y, h = e.y, u = r.y, l = s < i ? s < a ? s : a : i < a ? i : a, f = o < h ? o < u ? o : u : h < u ? h : u, c = s > i ? s > a ? s : a : i > a ? i : a, p = o > h ? o > u ? o : u : h > u ? h : u;
    let d = r.next;
    for (; d !== t; ) {
      if (d.x >= l && d.x <= c && d.y >= f && d.y <= p && je(s, o, i, h, a, u, d.x, d.y) && nt(d.prev, d, d.next) >= 0) return !1;
      d = d.next;
    }
    return !0;
  }
  function Hh(n, t, e, r) {
    const s = n.prev, i = n, a = n.next;
    if (nt(s, i, a) >= 0) return !1;
    const o = s.x, h = i.x, u = a.x, l = s.y, f = i.y, c = a.y, p = o < h ? o < u ? o : u : h < u ? h : u, d = l < f ? l < c ? l : c : f < c ? f : c, g = o > h ? o > u ? o : u : h > u ? h : u, y = l > f ? l > c ? l : c : f > c ? f : c, m = Fs(p, d, t, e, r), b = Fs(g, y, t, e, r);
    let v = n.prevZ, x = n.nextZ;
    for (; v && v.z >= m && x && x.z <= b; ) {
      if (v.x >= p && v.x <= g && v.y >= d && v.y <= y && v !== s && v !== a && je(o, l, h, f, u, c, v.x, v.y) && nt(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= p && x.x <= g && x.y >= d && x.y <= y && x !== s && x !== a && je(o, l, h, f, u, c, x.x, x.y) && nt(x.prev, x, x.next) >= 0)) return !1;
      x = x.nextZ;
    }
    for (; v && v.z >= m; ) {
      if (v.x >= p && v.x <= g && v.y >= d && v.y <= y && v !== s && v !== a && je(o, l, h, f, u, c, v.x, v.y) && nt(v.prev, v, v.next) >= 0) return !1;
      v = v.prevZ;
    }
    for (; x && x.z <= b; ) {
      if (x.x >= p && x.x <= g && x.y >= d && x.y <= y && x !== s && x !== a && je(o, l, h, f, u, c, x.x, x.y) && nt(x.prev, x, x.next) >= 0) return !1;
      x = x.nextZ;
    }
    return !0;
  }
  function Wh(n, t, e) {
    let r = n;
    do {
      const s = r.prev, i = r.next.next;
      !Tn(s, i) && to(s, r, r.next, i) && Fr(s, i) && Fr(i, s) && (t.push(s.i / e | 0), t.push(r.i / e | 0), t.push(i.i / e | 0), Tr(r), Tr(r.next), r = n = i), r = r.next;
    } while (r !== n);
    return Be(r);
  }
  function Vh(n, t, e, r, s, i) {
    let a = n;
    do {
      let o = a.next.next;
      for (; o !== a.prev; ) {
        if (a.i !== o.i && Kh(a, o)) {
          let h = eo(a, o);
          a = Be(a, a.next), h = Be(h, h.next), wr(a, t, e, r, s, i, 0), wr(h, t, e, r, s, i, 0);
          return;
        }
        o = o.next;
      }
      a = a.next;
    } while (a !== n);
  }
  function qh(n, t, e, r) {
    const s = [];
    let i, a, o, h, u;
    for (i = 0, a = t.length; i < a; i++)
      o = t[i] * r, h = i < a - 1 ? t[i + 1] * r : n.length, u = Ka(n, o, h, r, !1), u === u.next && (u.steiner = !0), s.push(jh(u));
    for (s.sort(Xh), i = 0; i < s.length; i++)
      e = Zh(s[i], e);
    return e;
  }
  function Xh(n, t) {
    return n.x - t.x;
  }
  function Zh(n, t) {
    const e = Yh(n, t);
    if (!e)
      return t;
    const r = eo(e, n);
    return Be(r, r.next), Be(e, e.next);
  }
  function Yh(n, t) {
    let e = t, r = -1 / 0, s;
    const i = n.x, a = n.y;
    do {
      if (a <= e.y && a >= e.next.y && e.next.y !== e.y) {
        const c = e.x + (a - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (c <= i && c > r && (r = c, s = e.x < e.next.x ? e : e.next, c === i))
          return s;
      }
      e = e.next;
    } while (e !== t);
    if (!s) return null;
    const o = s, h = s.x, u = s.y;
    let l = 1 / 0, f;
    e = s;
    do
      i >= e.x && e.x >= h && i !== e.x && je(a < u ? i : r, a, h, u, a < u ? r : i, a, e.x, e.y) && (f = Math.abs(a - e.y) / (i - e.x), Fr(e, n) && (f < l || f === l && (e.x > s.x || e.x === s.x && Jh(s, e))) && (s = e, l = f)), e = e.next;
    while (e !== o);
    return s;
  }
  function Jh(n, t) {
    return nt(n.prev, n, t.prev) < 0 && nt(t.next, n, n.next) < 0;
  }
  function $h(n, t, e, r) {
    let s = n;
    do
      s.z === 0 && (s.z = Fs(s.x, s.y, t, e, r)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
    while (s !== n);
    s.prevZ.nextZ = null, s.prevZ = null, Qh(s);
  }
  function Qh(n) {
    let t, e, r, s, i, a, o, h, u = 1;
    do {
      for (e = n, n = null, i = null, a = 0; e; ) {
        for (a++, r = e, o = 0, t = 0; t < u && (o++, r = r.nextZ, !!r); t++)
          ;
        for (h = u; o > 0 || h > 0 && r; )
          o !== 0 && (h === 0 || !r || e.z <= r.z) ? (s = e, e = e.nextZ, o--) : (s = r, r = r.nextZ, h--), i ? i.nextZ = s : n = s, s.prevZ = i, i = s;
        e = r;
      }
      i.nextZ = null, u *= 2;
    } while (a > 1);
    return n;
  }
  function Fs(n, t, e, r, s) {
    return n = (n - e) * s | 0, t = (t - r) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, n | t << 1;
  }
  function jh(n) {
    let t = n, e = n;
    do
      (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
    while (t !== n);
    return e;
  }
  function je(n, t, e, r, s, i, a, o) {
    return (s - a) * (t - o) >= (n - a) * (i - o) && (n - a) * (r - o) >= (e - a) * (t - o) && (e - a) * (i - o) >= (s - a) * (r - o);
  }
  function Kh(n, t) {
    return n.next.i !== t.i && n.prev.i !== t.i && !tu(n, t) && // doesn't intersect other edges
    (Fr(n, t) && Fr(t, n) && eu(n, t) && // locally visible
    (nt(n.prev, n, t.prev) || nt(n, t.prev, t)) || // does not create opposite-facing sectors
    Tn(n, t) && nt(n.prev, n, n.next) > 0 && nt(t.prev, t, t.next) > 0);
  }
  function nt(n, t, e) {
    return (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y);
  }
  function Tn(n, t) {
    return n.x === t.x && n.y === t.y;
  }
  function to(n, t, e, r) {
    const s = an(nt(n, t, e)), i = an(nt(n, t, r)), a = an(nt(e, r, n)), o = an(nt(e, r, t));
    return !!(s !== i && a !== o || s === 0 && sn(n, e, t) || i === 0 && sn(n, r, t) || a === 0 && sn(e, n, r) || o === 0 && sn(e, t, r));
  }
  function sn(n, t, e) {
    return t.x <= Math.max(n.x, e.x) && t.x >= Math.min(n.x, e.x) && t.y <= Math.max(n.y, e.y) && t.y >= Math.min(n.y, e.y);
  }
  function an(n) {
    return n > 0 ? 1 : n < 0 ? -1 : 0;
  }
  function tu(n, t) {
    let e = n;
    do {
      if (e.i !== n.i && e.next.i !== n.i && e.i !== t.i && e.next.i !== t.i && to(e, e.next, n, t)) return !0;
      e = e.next;
    } while (e !== n);
    return !1;
  }
  function Fr(n, t) {
    return nt(n.prev, n, n.next) < 0 ? nt(n, t, n.next) >= 0 && nt(n, n.prev, t) >= 0 : nt(n, t, n.prev) < 0 || nt(n, n.next, t) < 0;
  }
  function eu(n, t) {
    let e = n, r = !1;
    const s = (n.x + t.x) / 2, i = (n.y + t.y) / 2;
    do
      e.y > i != e.next.y > i && e.next.y !== e.y && s < (e.next.x - e.x) * (i - e.y) / (e.next.y - e.y) + e.x && (r = !r), e = e.next;
    while (e !== n);
    return r;
  }
  function eo(n, t) {
    const e = new Ts(n.i, n.x, n.y), r = new Ts(t.i, t.x, t.y), s = n.next, i = t.prev;
    return n.next = t, t.prev = n, e.next = s, s.prev = e, r.next = e, e.prev = r, i.next = r, r.prev = i, r;
  }
  function Bi(n, t, e, r) {
    const s = new Ts(n, t, e);
    return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s;
  }
  function Tr(n) {
    n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
  }
  function Ts(n, t, e) {
    this.i = n, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }
  function ru(n, t, e, r) {
    let s = 0;
    for (let i = t, a = e - r; i < e; i += r)
      s += (n[a] - n[i]) * (n[i + 1] + n[a + 1]), a = i;
    return s;
  }
  class tr {
    // calculate area of the contour polygon
    static area(t) {
      const e = t.length;
      let r = 0;
      for (let s = e - 1, i = 0; i < e; s = i++)
        r += t[s].x * t[i].y - t[i].x * t[s].y;
      return r * 0.5;
    }
    static isClockWise(t) {
      return tr.area(t) < 0;
    }
    static triangulateShape(t, e) {
      const r = [], s = [], i = [];
      Pi(t), zi(r, t);
      let a = t.length;
      e.forEach(Pi);
      for (let h = 0; h < e.length; h++)
        s.push(a), a += e[h].length, zi(r, e[h]);
      const o = Nh.triangulate(r, s);
      for (let h = 0; h < o.length; h += 3)
        i.push(o.slice(h, h + 3));
      return i;
    }
  }
  function Pi(n) {
    const t = n.length;
    t > 2 && n[t - 1].equals(n[0]) && n.pop();
  }
  function zi(n, t) {
    for (let e = 0; e < t.length; e++)
      n.push(t[e].x), n.push(t[e].y);
  }
  class kr extends vt {
    constructor(t = new xr([new D(0.5, 0.5), new D(-0.5, 0.5), new D(-0.5, -0.5), new D(0.5, -0.5)]), e = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = {
        shapes: t,
        options: e
      }, t = Array.isArray(t) ? t : [t];
      const r = this, s = [], i = [];
      for (let o = 0, h = t.length; o < h; o++) {
        const u = t[o];
        a(u);
      }
      this.setAttribute("position", new rr(s, 3)), this.setAttribute("uv", new rr(i, 2)), this.computeVertexNormals();
      function a(o) {
        const h = [], u = e.curveSegments !== void 0 ? e.curveSegments : 12, l = e.steps !== void 0 ? e.steps : 1, f = e.depth !== void 0 ? e.depth : 1;
        let c = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, p = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, d = e.bevelSize !== void 0 ? e.bevelSize : p - 0.1, g = e.bevelOffset !== void 0 ? e.bevelOffset : 0, y = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
        const m = e.extrudePath, b = e.UVGenerator !== void 0 ? e.UVGenerator : nu;
        let v, x = !1, F, C, T, k;
        m && (v = m.getSpacedPoints(l), x = !0, c = !1, F = m.computeFrenetFrames(l, !1), C = new w(), T = new w(), k = new w()), c || (y = 0, p = 0, d = 0, g = 0);
        const B = o.extractPoints(u);
        let P = B.shape;
        const I = B.holes;
        if (!tr.isClockWise(P)) {
          P = P.reverse();
          for (let E = 0, L = I.length; E < L; E++) {
            const R = I[E];
            tr.isClockWise(R) && (I[E] = R.reverse());
          }
        }
        const V = tr.triangulateShape(P, I), W = P;
        for (let E = 0, L = I.length; E < L; E++) {
          const R = I[E];
          P = P.concat(R);
        }
        function Y(E, L, R) {
          return L || console.error("THREE.ExtrudeGeometry: vec does not exist"), E.clone().addScaledVector(L, R);
        }
        const X = P.length, $ = V.length;
        function tt(E, L, R) {
          let H, z, J;
          const Q = E.x - L.x, it = E.y - L.y, yt = R.x - E.x, pt = R.y - E.y, hr = Q * Q + it * it, On = Q * pt - it * yt;
          if (Math.abs(On) > Number.EPSILON) {
            const jt = Math.sqrt(hr), oi = Math.sqrt(yt * yt + pt * pt), hi = L.x - it / jt, ui = L.y + Q / jt, nh = R.x - pt / oi, sh = R.y + yt / oi, li = ((nh - hi) * pt - (sh - ui) * yt) / (Q * pt - it * yt);
            H = hi + Q * li - E.x, z = ui + it * li - E.y;
            const ci = H * H + z * z;
            if (ci <= 2)
              return new D(H, z);
            J = Math.sqrt(ci / 2);
          } else {
            let jt = !1;
            Q > Number.EPSILON ? yt > Number.EPSILON && (jt = !0) : Q < -Number.EPSILON ? yt < -Number.EPSILON && (jt = !0) : Math.sign(it) === Math.sign(pt) && (jt = !0), jt ? (H = -it, z = Q, J = Math.sqrt(hr)) : (H = Q, z = it, J = Math.sqrt(hr / 2));
          }
          return new D(H / J, z / J);
        }
        const j = [];
        for (let E = 0, L = W.length, R = L - 1, H = E + 1; E < L; E++, R++, H++)
          R === L && (R = 0), H === L && (H = 0), j[E] = tt(W[E], W[R], W[H]);
        const et = [];
        let q, st = j.concat();
        for (let E = 0, L = I.length; E < L; E++) {
          const R = I[E];
          q = [];
          for (let H = 0, z = R.length, J = z - 1, Q = H + 1; H < z; H++, J++, Q++)
            J === z && (J = 0), Q === z && (Q = 0), q[H] = tt(R[H], R[J], R[Q]);
          et.push(q), st = st.concat(q);
        }
        for (let E = 0; E < y; E++) {
          const L = E / y, R = p * Math.cos(L * Math.PI / 2), H = d * Math.sin(L * Math.PI / 2) + g;
          for (let z = 0, J = W.length; z < J; z++) {
            const Q = Y(W[z], j[z], H);
            Ct(Q.x, Q.y, -R);
          }
          for (let z = 0, J = I.length; z < J; z++) {
            const Q = I[z];
            q = et[z];
            for (let it = 0, yt = Q.length; it < yt; it++) {
              const pt = Y(Q[it], q[it], H);
              Ct(pt.x, pt.y, -R);
            }
          }
        }
        const ze = d + g;
        for (let E = 0; E < X; E++) {
          const L = c ? Y(P[E], st[E], ze) : P[E];
          x ? (T.copy(F.normals[0]).multiplyScalar(L.x), C.copy(F.binormals[0]).multiplyScalar(L.y), k.copy(v[0]).add(T).add(C), Ct(k.x, k.y, k.z)) : Ct(L.x, L.y, 0);
        }
        for (let E = 1; E <= l; E++)
          for (let L = 0; L < X; L++) {
            const R = c ? Y(P[L], st[L], ze) : P[L];
            x ? (T.copy(F.normals[E]).multiplyScalar(R.x), C.copy(F.binormals[E]).multiplyScalar(R.y), k.copy(v[E]).add(T).add(C), Ct(k.x, k.y, k.z)) : Ct(R.x, R.y, f / l * E);
          }
        for (let E = y - 1; E >= 0; E--) {
          const L = E / y, R = p * Math.cos(L * Math.PI / 2), H = d * Math.sin(L * Math.PI / 2) + g;
          for (let z = 0, J = W.length; z < J; z++) {
            const Q = Y(W[z], j[z], H);
            Ct(Q.x, Q.y, f + R);
          }
          for (let z = 0, J = I.length; z < J; z++) {
            const Q = I[z];
            q = et[z];
            for (let it = 0, yt = Q.length; it < yt; it++) {
              const pt = Y(Q[it], q[it], H);
              x ? Ct(pt.x, pt.y + v[l - 1].y, v[l - 1].x + R) : Ct(pt.x, pt.y, f + R);
            }
          }
        }
        An(), En();
        function An() {
          const E = s.length / 3;
          if (c) {
            let L = 0, R = X * L;
            for (let H = 0; H < $; H++) {
              const z = V[H];
              Jt(z[2] + R, z[1] + R, z[0] + R);
            }
            L = l + y * 2, R = X * L;
            for (let H = 0; H < $; H++) {
              const z = V[H];
              Jt(z[0] + R, z[1] + R, z[2] + R);
            }
          } else {
            for (let L = 0; L < $; L++) {
              const R = V[L];
              Jt(R[2], R[1], R[0]);
            }
            for (let L = 0; L < $; L++) {
              const R = V[L];
              Jt(R[0] + X * l, R[1] + X * l, R[2] + X * l);
            }
          }
          r.addGroup(E, s.length / 3 - E, 0);
        }
        function En() {
          const E = s.length / 3;
          let L = 0;
          De(W, L), L += W.length;
          for (let R = 0, H = I.length; R < H; R++) {
            const z = I[R];
            De(z, L), L += z.length;
          }
          r.addGroup(E, s.length / 3 - E, 1);
        }
        function De(E, L) {
          let R = E.length;
          for (; --R >= 0; ) {
            const H = R;
            let z = R - 1;
            z < 0 && (z = E.length - 1);
            for (let J = 0, Q = l + y * 2; J < Q; J++) {
              const it = X * J, yt = X * (J + 1), pt = L + H + it, hr = L + z + it, On = L + z + yt, jt = L + H + yt;
              rh(pt, hr, On, jt);
            }
          }
        }
        function Ct(E, L, R) {
          h.push(E), h.push(L), h.push(R);
        }
        function Jt(E, L, R) {
          $t(E), $t(L), $t(R);
          const H = s.length / 3, z = b.generateTopUV(r, s, H - 3, H - 2, H - 1);
          Qt(z[0]), Qt(z[1]), Qt(z[2]);
        }
        function rh(E, L, R, H) {
          $t(E), $t(L), $t(H), $t(L), $t(R), $t(H);
          const z = s.length / 3, J = b.generateSideWallUV(r, s, z - 6, z - 3, z - 2, z - 1);
          Qt(J[0]), Qt(J[1]), Qt(J[3]), Qt(J[1]), Qt(J[2]), Qt(J[3]);
        }
        function $t(E) {
          s.push(h[E * 3 + 0]), s.push(h[E * 3 + 1]), s.push(h[E * 3 + 2]);
        }
        function Qt(E) {
          i.push(E.x), i.push(E.y);
        }
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    toJSON() {
      const t = super.toJSON(), e = this.parameters.shapes, r = this.parameters.options;
      return su(e, r, t);
    }
    static fromJSON(t, e) {
      const r = [];
      for (let i = 0, a = t.shapes.length; i < a; i++) {
        const o = e[t.shapes[i]];
        r.push(o);
      }
      const s = t.options.extrudePath;
      return s !== void 0 && (t.options.extrudePath = new Ss[s.type]().fromJSON(s)), new kr(r, t.options);
    }
  }
  const nu = {
    generateTopUV: function(n, t, e, r, s) {
      const i = t[e * 3], a = t[e * 3 + 1], o = t[r * 3], h = t[r * 3 + 1], u = t[s * 3], l = t[s * 3 + 1];
      return [
        new D(i, a),
        new D(o, h),
        new D(u, l)
      ];
    },
    generateSideWallUV: function(n, t, e, r, s, i) {
      const a = t[e * 3], o = t[e * 3 + 1], h = t[e * 3 + 2], u = t[r * 3], l = t[r * 3 + 1], f = t[r * 3 + 2], c = t[s * 3], p = t[s * 3 + 1], d = t[s * 3 + 2], g = t[i * 3], y = t[i * 3 + 1], m = t[i * 3 + 2];
      return Math.abs(o - l) < Math.abs(a - u) ? [
        new D(a, 1 - h),
        new D(u, 1 - f),
        new D(c, 1 - d),
        new D(g, 1 - m)
      ] : [
        new D(o, 1 - h),
        new D(l, 1 - f),
        new D(p, 1 - d),
        new D(y, 1 - m)
      ];
    }
  };
  function su(n, t, e) {
    if (e.shapes = [], Array.isArray(n))
      for (let r = 0, s = n.length; r < s; r++) {
        const i = n[r];
        e.shapes.push(i.uuid);
      }
    else
      e.shapes.push(n.uuid);
    return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
  }
  const Di = {
    enabled: !1,
    files: {},
    add: function(n, t) {
      this.enabled !== !1 && (this.files[n] = t);
    },
    get: function(n) {
      if (this.enabled !== !1)
        return this.files[n];
    },
    remove: function(n) {
      delete this.files[n];
    },
    clear: function() {
      this.files = {};
    }
  };
  class iu {
    constructor(t, e, r) {
      const s = this;
      let i = !1, a = 0, o = 0, h;
      const u = [];
      this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = r, this.itemStart = function(l) {
        o++, i === !1 && s.onStart !== void 0 && s.onStart(l, a, o), i = !0;
      }, this.itemEnd = function(l) {
        a++, s.onProgress !== void 0 && s.onProgress(l, a, o), a === o && (i = !1, s.onLoad !== void 0 && s.onLoad());
      }, this.itemError = function(l) {
        s.onError !== void 0 && s.onError(l);
      }, this.resolveURL = function(l) {
        return h ? h(l) : l;
      }, this.setURLModifier = function(l) {
        return h = l, this;
      }, this.addHandler = function(l, f) {
        return u.push(l, f), this;
      }, this.removeHandler = function(l) {
        const f = u.indexOf(l);
        return f !== -1 && u.splice(f, 2), this;
      }, this.getHandler = function(l) {
        for (let f = 0, c = u.length; f < c; f += 2) {
          const p = u[f], d = u[f + 1];
          if (p.global && (p.lastIndex = 0), p.test(l))
            return d;
        }
        return null;
      };
    }
  }
  const au = /* @__PURE__ */ new iu();
  class ro {
    constructor(t) {
      this.manager = t !== void 0 ? t : au, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t, e) {
      const r = this;
      return new Promise(function(s, i) {
        r.load(t, s, e, i);
      });
    }
    parse() {
    }
    setCrossOrigin(t) {
      return this.crossOrigin = t, this;
    }
    setWithCredentials(t) {
      return this.withCredentials = t, this;
    }
    setPath(t) {
      return this.path = t, this;
    }
    setResourcePath(t) {
      return this.resourcePath = t, this;
    }
    setRequestHeader(t) {
      return this.requestHeader = t, this;
    }
  }
  ro.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  const se = {};
  class ou extends Error {
    constructor(t, e) {
      super(t), this.response = e;
    }
  }
  class hu extends ro {
    constructor(t) {
      super(t);
    }
    load(t, e, r, s) {
      t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
      const i = Di.get(t);
      if (i !== void 0)
        return this.manager.itemStart(t), setTimeout(() => {
          e && e(i), this.manager.itemEnd(t);
        }, 0), i;
      if (se[t] !== void 0) {
        se[t].push({
          onLoad: e,
          onProgress: r,
          onError: s
        });
        return;
      }
      se[t] = [], se[t].push({
        onLoad: e,
        onProgress: r,
        onError: s
      });
      const a = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin"
        // An abort controller could be added within a future PR
      }), o = this.mimeType, h = this.responseType;
      fetch(a).then((u) => {
        if (u.status === 200 || u.status === 0) {
          if (u.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || u.body === void 0 || u.body.getReader === void 0)
            return u;
          const l = se[t], f = u.body.getReader(), c = u.headers.get("X-File-Size") || u.headers.get("Content-Length"), p = c ? parseInt(c) : 0, d = p !== 0;
          let g = 0;
          const y = new ReadableStream({
            start(m) {
              b();
              function b() {
                f.read().then(({ done: v, value: x }) => {
                  if (v)
                    m.close();
                  else {
                    g += x.byteLength;
                    const F = new ProgressEvent("progress", { lengthComputable: d, loaded: g, total: p });
                    for (let C = 0, T = l.length; C < T; C++) {
                      const k = l[C];
                      k.onProgress && k.onProgress(F);
                    }
                    m.enqueue(x), b();
                  }
                }, (v) => {
                  m.error(v);
                });
              }
            }
          });
          return new Response(y);
        } else
          throw new ou(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`, u);
      }).then((u) => {
        switch (h) {
          case "arraybuffer":
            return u.arrayBuffer();
          case "blob":
            return u.blob();
          case "document":
            return u.text().then((l) => new DOMParser().parseFromString(l, o));
          case "json":
            return u.json();
          default:
            if (o === void 0)
              return u.text();
            {
              const f = /charset="?([^;"\s]*)"?/i.exec(o), c = f && f[1] ? f[1].toLowerCase() : void 0, p = new TextDecoder(c);
              return u.arrayBuffer().then((d) => p.decode(d));
            }
        }
      }).then((u) => {
        Di.add(t, u);
        const l = se[t];
        delete se[t];
        for (let f = 0, c = l.length; f < c; f++) {
          const p = l[f];
          p.onLoad && p.onLoad(u);
        }
      }).catch((u) => {
        const l = se[t];
        if (l === void 0)
          throw this.manager.itemError(t), u;
        delete se[t];
        for (let f = 0, c = l.length; f < c; f++) {
          const p = l[f];
          p.onError && p.onError(u);
        }
        this.manager.itemError(t);
      }).finally(() => {
        this.manager.itemEnd(t);
      }), this.manager.itemStart(t);
    }
    setResponseType(t) {
      return this.responseType = t, this;
    }
    setMimeType(t) {
      return this.mimeType = t, this;
    }
  }
  class uu {
    constructor() {
      this.type = "ShapePath", this.color = new ir(), this.subPaths = [], this.currentPath = null;
    }
    moveTo(t, e) {
      return this.currentPath = new ws(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
    }
    lineTo(t, e) {
      return this.currentPath.lineTo(t, e), this;
    }
    quadraticCurveTo(t, e, r, s) {
      return this.currentPath.quadraticCurveTo(t, e, r, s), this;
    }
    bezierCurveTo(t, e, r, s, i, a) {
      return this.currentPath.bezierCurveTo(t, e, r, s, i, a), this;
    }
    splineThru(t) {
      return this.currentPath.splineThru(t), this;
    }
    toShapes(t) {
      function e(m) {
        const b = [];
        for (let v = 0, x = m.length; v < x; v++) {
          const F = m[v], C = new xr();
          C.curves = F.curves, b.push(C);
        }
        return b;
      }
      function r(m, b) {
        const v = b.length;
        let x = !1;
        for (let F = v - 1, C = 0; C < v; F = C++) {
          let T = b[F], k = b[C], B = k.x - T.x, P = k.y - T.y;
          if (Math.abs(P) > Number.EPSILON) {
            if (P < 0 && (T = b[C], B = -B, k = b[F], P = -P), m.y < T.y || m.y > k.y) continue;
            if (m.y === T.y) {
              if (m.x === T.x) return !0;
            } else {
              const I = P * (m.x - T.x) - B * (m.y - T.y);
              if (I === 0) return !0;
              if (I < 0) continue;
              x = !x;
            }
          } else {
            if (m.y !== T.y) continue;
            if (k.x <= m.x && m.x <= T.x || T.x <= m.x && m.x <= k.x) return !0;
          }
        }
        return x;
      }
      const s = tr.isClockWise, i = this.subPaths;
      if (i.length === 0) return [];
      let a, o, h;
      const u = [];
      if (i.length === 1)
        return o = i[0], h = new xr(), h.curves = o.curves, u.push(h), u;
      let l = !s(i[0].getPoints());
      l = t ? !l : l;
      const f = [], c = [];
      let p = [], d = 0, g;
      c[d] = void 0, p[d] = [];
      for (let m = 0, b = i.length; m < b; m++)
        o = i[m], g = o.getPoints(), a = s(g), a = t ? !a : a, a ? (!l && c[d] && d++, c[d] = { s: new xr(), p: g }, c[d].s.curves = o.curves, l && d++, p[d] = []) : p[d].push({ h: o, p: g[0] });
      if (!c[0]) return e(i);
      if (c.length > 1) {
        let m = !1, b = 0;
        for (let v = 0, x = c.length; v < x; v++)
          f[v] = [];
        for (let v = 0, x = c.length; v < x; v++) {
          const F = p[v];
          for (let C = 0; C < F.length; C++) {
            const T = F[C];
            let k = !0;
            for (let B = 0; B < c.length; B++)
              r(T.p, c[B].p) && (v !== B && b++, k ? (k = !1, f[B].push(T)) : m = !0);
            k && f[v].push(T);
          }
        }
        b > 0 && m === !1 && (p = f);
      }
      let y;
      for (let m = 0, b = c.length; m < b; m++) {
        h = c[m].s, u.push(h), y = p[m];
        for (let v = 0, x = y.length; v < x; v++)
          h.holes.push(y[v].h);
      }
      return u;
    }
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: Ha
  } }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ha);
  class lu {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
    }
    /**
     * Returns true if the geometry of the specified character exists in the cache.
     * Otherwise, returns false.
     * @param char One character.
     * @param size The font size.
     * @returns True if the geometry of the specified character exists in the cache.
     * Otherwise, returns false.
     */
    hasGeometry(t, e) {
      const r = this.generateKey(t, e);
      return this.cache.has(r);
    }
    /**
     * Get the geometry for a single character from cache if available.
     * The cache key includes both character and size.
     * @param char The character to get geometry from cache.
     * @param size The font size.
     * @returns The geometry for a single character from cache if avaiable.
     * Return undefined if the character not found in cache.
     */
    getGeometry(t, e) {
      const r = this.generateKey(t, e);
      if (this.cache.has(r))
        return this.cache.get(r);
    }
    /**
     * Set the geometry to cache for a single character.
     * @param char The character to set geometry for.
     * @param size The font size.
     * @param geometry The geometry to set.
     */
    setGeometry(t, e, r) {
      const s = this.generateKey(t, e);
      this.cache.set(s, r);
    }
    /**
     * Dispose all cached geometries.
     */
    dispose() {
      for (const t of this.cache.values())
        t.dispose();
      this.cache.clear();
    }
    /**
     * Generates cache key by character and font size.
     * @param char One character.
     * @param size The font size.
     */
    generateKey(t, e) {
      return `${t}_${e}`;
    }
  }
  class no {
    constructor() {
      this.unsupportedChars = {}, this.cache = new lu();
    }
    /**
     * Records an unsupported character in the font.
     * Increments the count for the given character in unsupportedChars.
     * @param char - The unsupported character to record
     */
    addUnsupportedChar(t) {
      this.unsupportedChars[t] || (this.unsupportedChars[t] = 0), this.unsupportedChars[t]++;
    }
  }
  class so extends xr {
    /**
     * Creates a new instance of BaseTextShape
     * @param char - The character this shape represents   */
    constructor(t) {
      super(), this.width = 0, this.char = t;
    }
  }
  const ks = (n, t) => t.some((e) => n instanceof e);
  let Ii, Ni;
  function cu() {
    return Ii || (Ii = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function fu() {
    return Ni || (Ni = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  const Ms = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap();
  function pu(n) {
    const t = new Promise((e, r) => {
      const s = () => {
        n.removeEventListener("success", i), n.removeEventListener("error", a);
      }, i = () => {
        e(Re(n.result)), s();
      }, a = () => {
        r(n.error), s();
      };
      n.addEventListener("success", i), n.addEventListener("error", a);
    });
    return kn.set(t, n), t;
  }
  function du(n) {
    if (Ms.has(n))
      return;
    const t = new Promise((e, r) => {
      const s = () => {
        n.removeEventListener("complete", i), n.removeEventListener("error", a), n.removeEventListener("abort", a);
      }, i = () => {
        e(), s();
      }, a = () => {
        r(n.error || new DOMException("AbortError", "AbortError")), s();
      };
      n.addEventListener("complete", i), n.addEventListener("error", a), n.addEventListener("abort", a);
    });
    Ms.set(n, t);
  }
  let Cs = {
    get(n, t, e) {
      if (n instanceof IDBTransaction) {
        if (t === "done")
          return Ms.get(n);
        if (t === "store")
          return e.objectStoreNames[1] ? void 0 : e.objectStore(e.objectStoreNames[0]);
      }
      return Re(n[t]);
    },
    set(n, t, e) {
      return n[t] = e, !0;
    },
    has(n, t) {
      return n instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in n;
    }
  };
  function io(n) {
    Cs = n(Cs);
  }
  function gu(n) {
    return fu().includes(n) ? function(...t) {
      return n.apply(As(this), t), Re(this.request);
    } : function(...t) {
      return Re(n.apply(As(this), t));
    };
  }
  function mu(n) {
    return typeof n == "function" ? gu(n) : (n instanceof IDBTransaction && du(n), ks(n, cu()) ? new Proxy(n, Cs) : n);
  }
  function Re(n) {
    if (n instanceof IDBRequest)
      return pu(n);
    if (rs.has(n))
      return rs.get(n);
    const t = mu(n);
    return t !== n && (rs.set(n, t), kn.set(t, n)), t;
  }
  const As = (n) => kn.get(n);
  function yu(n, t, { blocked: e, upgrade: r, blocking: s, terminated: i } = {}) {
    const a = indexedDB.open(n, t), o = Re(a);
    return r && a.addEventListener("upgradeneeded", (h) => {
      r(Re(a.result), h.oldVersion, h.newVersion, Re(a.transaction), h);
    }), e && a.addEventListener("blocked", (h) => e(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      h.oldVersion,
      h.newVersion,
      h
    )), o.then((h) => {
      i && h.addEventListener("close", () => i()), s && h.addEventListener("versionchange", (u) => s(u.oldVersion, u.newVersion, u));
    }).catch(() => {
    }), o;
  }
  const vu = ["get", "getKey", "getAll", "getAllKeys", "count"], xu = ["put", "add", "delete", "clear"], ns = /* @__PURE__ */ new Map();
  function Gi(n, t) {
    if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string"))
      return;
    if (ns.get(t))
      return ns.get(t);
    const e = t.replace(/FromIndex$/, ""), r = t !== e, s = xu.includes(e);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(e in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || vu.includes(e))
    )
      return;
    const i = async function(a, ...o) {
      const h = this.transaction(a, s ? "readwrite" : "readonly");
      let u = h.store;
      return r && (u = u.index(o.shift())), (await Promise.all([
        u[e](...o),
        s && h.done
      ]))[0];
    };
    return ns.set(t, i), i;
  }
  io((n) => ({
    ...n,
    get: (t, e, r) => Gi(t, e) || n.get(t, e, r),
    has: (t, e) => !!Gi(t, e) || n.has(t, e)
  }));
  const bu = ["continue", "continuePrimaryKey", "advance"], Hi = {}, Es = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), Su = {
    get(n, t) {
      if (!bu.includes(t))
        return n[t];
      let e = Hi[t];
      return e || (e = Hi[t] = function(...r) {
        Es.set(this, ao.get(this)[t](...r));
      }), e;
    }
  };
  async function* wu(...n) {
    let t = this;
    if (t instanceof IDBCursor || (t = await t.openCursor(...n)), !t)
      return;
    t = t;
    const e = new Proxy(t, Su);
    for (ao.set(e, t), kn.set(e, As(t)); t; )
      yield e, t = await (Es.get(e) || t.continue()), Es.delete(e);
  }
  function Wi(n, t) {
    return t === Symbol.asyncIterator && ks(n, [IDBIndex, IDBObjectStore, IDBCursor]) || t === "iterate" && ks(n, [IDBIndex, IDBObjectStore]);
  }
  io((n) => ({
    ...n,
    get(t, e, r) {
      return Wi(t, e) ? wu : n.get(t, e, r);
    },
    has(t, e) {
      return Wi(t, e) || n.has(t, e);
    }
  }));
  const $e = {
    fonts: "fonts"
  }, ss = [
    {
      version: 1,
      stores: [
        {
          name: $e.fonts,
          keyPath: "name"
        }
      ]
    }
  ], Ft = class Ft {
    constructor() {
      this.isClosing = !1, typeof window < "u" && window.addEventListener("unload", () => {
        this.close();
      });
    }
    /**
     * Returns the singleton instance of the FontCacheManager
     */
    static get instance() {
      return Ft._instance || (Ft._instance = new Ft()), Ft._instance;
    }
    /**
     * Sets a font in the cache
     * @param fileName The font file name (key)
     * @param fontData The font data to store
     */
    async set(t, e) {
      await (await this.getDatabase()).put($e.fonts, { ...e, name: t });
    }
    /**
     * Gets a font from the cache
     * @param fileName The font file name (key)
     * @returns The font data if found, undefined otherwise
     */
    async get(t) {
      return await (await this.getDatabase()).get($e.fonts, t);
    }
    /**
     * Deletes a font from the cache
     * @param fileName The font file name (key)
     */
    async delete(t) {
      await (await this.getDatabase()).delete($e.fonts, t);
    }
    /**
     * Gets all fonts from the cache
     * @returns An array of all font data in the cache
     */
    async getAll() {
      return await (await this.getDatabase()).getAll($e.fonts);
    }
    /**
     * Clears all fonts from the cache
     */
    async clear() {
      await (await this.getDatabase()).clear($e.fonts);
    }
    /**
     * Checks if a font exists in the cache
     * @param fileName The font file name (key)
     */
    async has(t) {
      return await this.get(t) !== void 0;
    }
    /**
     * Closes the database connection and cleans up resources.
     * After calling this, any further operations will require reopening the database.
     */
    close() {
      if (!this.isClosing) {
        this.isClosing = !0;
        try {
          this.db && (this.db.close(), this.db = void 0);
        } finally {
          this.isClosing = !1;
        }
      }
    }
    /**
     * Destroys the database instance and deletes all data.
     * Use with caution as this operation cannot be undone.
     */
    async destroy() {
      this.close(), await indexedDB.deleteDatabase(Ft.DATABASE_NAME), Ft._instance = void 0;
    }
    // Private methods for database management
    async getDatabase() {
      if (this.isClosing)
        throw new Error("Cannot perform operation while database is closing");
      return this.db ? this.db : (this.db = await yu(
        Ft.DATABASE_NAME,
        Ft.DATABASE_VERSION,
        {
          upgrade: (t, e, r) => this.handleUpgrade(t, e, r),
          blocked() {
            console.warn(
              "Database upgrade blocked - please close other tabs using the application"
            );
          },
          blocking() {
            console.warn("Database blocking newer version - closing connection"), Ft.instance.close();
          }
        }
      ), this.db);
    }
    /**
     * Applies all schema versions that are greater than the old version and less than or equal to the new version
     * @param db The database instance
     * @param oldVersion The old version of the database
     * @param newVersion The new version of the database
     */
    handleUpgrade(t, e, r) {
      const s = ss.filter(
        (i) => i.version > e && (!r || i.version <= r)
      );
      for (const i of s)
        this.applySchemaVersion(t, i);
    }
    /**
     * Applies a single schema version's changes to the database
     * @param db The database instance
     * @param schema The schema version to apply
     */
    applySchemaVersion(t, e) {
      for (const r of e.stores)
        t.objectStoreNames.contains(r.name) || t.createObjectStore(r.name, { keyPath: r.keyPath });
    }
  };
  Ft.DATABASE_NAME = "mlightcad", Ft.DATABASE_VERSION = ss[ss.length - 1].version;
  let br = Ft;
  class Vi {
    constructor() {
      this.listeners = [];
    }
    /**
     * Add the event listener
     * @param listener Input listener to be added
     */
    addEventListener(t) {
      this.listeners.push(t);
    }
    /**
     * Remove the listener
     * @param listener Input listener to be removed
     */
    removeEventListener(t) {
      this.listeners = this.listeners.filter((e) => e !== t);
    }
    /**
     * Remove all listeners bound to the target and add one new listener
     * @param listener Input listener to be added
     */
    replaceEventListener(t) {
      this.removeEventListener(t), this.addEventListener(t);
    }
    /**
     * Notify all listeners
     * @param payload Input payload passed to listener
     */
    dispatch(t, ...e) {
      for (const r of this.listeners)
        r.call(null, t, ...e);
    }
  }
  const Fu = (n) => n.substring(n.lastIndexOf(".") + 1), oo = (n) => n.split("/").pop(), qi = (n) => {
    const t = oo(n);
    if (t) {
      const e = t.lastIndexOf(".");
      return e === -1 ? t : t.substring(0, e);
    }
    return n;
  }, Tu = [
    0,
    16711680,
    16776960,
    65280,
    65535,
    255,
    16711935,
    16777215,
    8421504,
    12632256,
    16711680,
    16744319,
    13369344,
    13395558,
    10027008,
    10046540,
    8323072,
    8339263,
    4980736,
    4990502,
    16727808,
    16752511,
    13382400,
    13401958,
    10036736,
    10051404,
    8331008,
    8343359,
    4985600,
    4992806,
    16744192,
    16760703,
    13395456,
    13408614,
    10046464,
    10056268,
    8339200,
    8347455,
    4990464,
    4995366,
    16760576,
    16768895,
    13408512,
    13415014,
    10056192,
    10061132,
    8347392,
    8351551,
    4995328,
    4997670,
    16776960,
    16777087,
    13421568,
    13421670,
    10000384,
    10000460,
    8355584,
    8355647,
    5000192,
    5000230,
    12582656,
    14679935,
    10079232,
    11717734,
    7510016,
    8755276,
    6258432,
    7307071,
    3755008,
    4344870,
    8388352,
    12582783,
    6736896,
    10079334,
    5019648,
    7510092,
    4161280,
    6258495,
    2509824,
    3755046,
    4194048,
    10485631,
    3394560,
    8375398,
    2529280,
    6264908,
    2064128,
    5209919,
    1264640,
    3099686,
    65280,
    8388479,
    52224,
    6736998,
    38912,
    5019724,
    32512,
    4161343,
    19456,
    2509862,
    65343,
    8388511,
    52275,
    6737023,
    38950,
    5019743,
    32543,
    4161359,
    19475,
    2509871,
    65407,
    8388543,
    52326,
    6737049,
    38988,
    5019762,
    32575,
    4161375,
    19494,
    2509881,
    65471,
    8388575,
    52377,
    6737074,
    39026,
    5019781,
    32607,
    4161391,
    19513,
    2509890,
    65535,
    8388607,
    52428,
    6737100,
    39064,
    5019800,
    32639,
    4161407,
    19532,
    2509900,
    49151,
    8380415,
    39372,
    6730444,
    29336,
    5014936,
    24447,
    4157311,
    14668,
    2507340,
    32767,
    8372223,
    26316,
    6724044,
    19608,
    5010072,
    16255,
    4153215,
    9804,
    2505036,
    16383,
    8364031,
    13260,
    6717388,
    9880,
    5005208,
    8063,
    4149119,
    4940,
    2502476,
    255,
    8355839,
    204,
    6710988,
    152,
    5000344,
    127,
    4145023,
    76,
    2500172,
    4129023,
    10452991,
    3342540,
    8349388,
    2490520,
    6245528,
    2031743,
    5193599,
    1245260,
    3089996,
    8323327,
    12550143,
    6684876,
    10053324,
    4980888,
    7490712,
    4128895,
    6242175,
    2490444,
    3745356,
    12517631,
    14647295,
    10027212,
    11691724,
    7471256,
    8735896,
    6226047,
    7290751,
    3735628,
    4335180,
    16711935,
    16744447,
    13369548,
    13395660,
    9961624,
    9981080,
    8323199,
    8339327,
    4980812,
    4990540,
    16711871,
    16744415,
    13369497,
    13395634,
    9961586,
    9981061,
    8323167,
    8339311,
    4980793,
    4990530,
    16711807,
    16744383,
    13369446,
    13395609,
    9961548,
    9981042,
    8323135,
    8339295,
    4980774,
    4990521,
    16711743,
    16744351,
    13369395,
    13395583,
    9961510,
    9981023,
    8323103,
    8339279,
    4980755,
    4990511,
    3355443,
    5987163,
    8684676,
    11382189,
    14079702,
    16777215,
    0
  ], ku = (n) => Tu[n];
  let Mu = class {
    constructor(t) {
      this.isFont = !0, this.type = "Font", this.data = t;
    }
    generateShapes(t, e = 100) {
      const r = [], s = Cu(t, e, this.data);
      for (let i = 0, a = s.length; i < a; i++)
        r.push(...s[i].toShapes());
      return r;
    }
  };
  function Cu(n, t, e) {
    const r = Array.from(n), s = t / e.resolution, i = (e.boundingBox.yMax - e.boundingBox.yMin + e.underlineThickness) * s, a = [];
    let o = 0, h = 0;
    for (let u = 0; u < r.length; u++) {
      const l = r[u];
      if (l === `
`)
        o = 0, h -= i;
      else {
        const f = Au(l, s, o, h, e);
        o += f.offsetX, a.push(f.path);
      }
    }
    return a;
  }
  function Au(n, t, e, r, s) {
    const i = s.glyphs[n] || s.glyphs["?"];
    if (!i) {
      console.error('THREE.Font: character "' + n + '" does not exists in font family ' + s.familyName + ".");
      return;
    }
    const a = new uu();
    let o, h, u, l, f, c, p, d;
    if (i.o) {
      const g = i._cachedOutline || (i._cachedOutline = i.o.split(" "));
      for (let y = 0, m = g.length; y < m; )
        switch (g[y++]) {
          case "m":
            o = g[y++] * t + e, h = g[y++] * t + r, a.moveTo(o, h);
            break;
          case "l":
            o = g[y++] * t + e, h = g[y++] * t + r, a.lineTo(o, h);
            break;
          case "q":
            u = g[y++] * t + e, l = g[y++] * t + r, f = g[y++] * t + e, c = g[y++] * t + r, a.quadraticCurveTo(f, c, u, l);
            break;
          case "b":
            u = g[y++] * t + e, l = g[y++] * t + r, f = g[y++] * t + e, c = g[y++] * t + r, p = g[y++] * t + e, d = g[y++] * t + r, a.bezierCurveTo(f, c, p, d, u, l);
            break;
        }
    }
    return { offsetX: i.ha * t, path: a };
  }
  /*! https://mths.be/codepointat v0.2.0 by @mathias */
  String.prototype.codePointAt || function() {
    var n = function() {
      try {
        var e = {}, r = Object.defineProperty, s = r(e, e, e) && r;
      } catch {
      }
      return s;
    }(), t = function(e) {
      if (this == null)
        throw TypeError();
      var r = String(this), s = r.length, i = e ? Number(e) : 0;
      if (i != i && (i = 0), !(i < 0 || i >= s)) {
        var a = r.charCodeAt(i), o;
        return (
          // check if it’s the start of a surrogate pair
          a >= 55296 && a <= 56319 && // high surrogate
          s > i + 1 && (o = r.charCodeAt(i + 1), o >= 56320 && o <= 57343) ? (a - 55296) * 1024 + o - 56320 + 65536 : a
        );
      }
    };
    n ? n(String.prototype, "codePointAt", {
      value: t,
      configurable: !0,
      writable: !0
    }) : String.prototype.codePointAt = t;
  }();
  var qs = 0, ho = -3;
  function Mr() {
    this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
  }
  function Eu(n, t) {
    this.source = n, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new Mr(), this.dtree = new Mr();
  }
  var uo = new Mr(), lo = new Mr(), Xs = new Uint8Array(30), Zs = new Uint16Array(30), co = new Uint8Array(30), fo = new Uint16Array(30), Ou = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ]), Xi = new Mr(), Vt = new Uint8Array(320);
  function po(n, t, e, r) {
    var s, i;
    for (s = 0; s < e; ++s)
      n[s] = 0;
    for (s = 0; s < 30 - e; ++s)
      n[s + e] = s / e | 0;
    for (i = r, s = 0; s < 30; ++s)
      t[s] = i, i += 1 << n[s];
  }
  function Lu(n, t) {
    var e;
    for (e = 0; e < 7; ++e)
      n.table[e] = 0;
    for (n.table[7] = 24, n.table[8] = 152, n.table[9] = 112, e = 0; e < 24; ++e)
      n.trans[e] = 256 + e;
    for (e = 0; e < 144; ++e)
      n.trans[24 + e] = e;
    for (e = 0; e < 8; ++e)
      n.trans[168 + e] = 280 + e;
    for (e = 0; e < 112; ++e)
      n.trans[176 + e] = 144 + e;
    for (e = 0; e < 5; ++e)
      t.table[e] = 0;
    for (t.table[5] = 32, e = 0; e < 32; ++e)
      t.trans[e] = e;
  }
  var Zi = new Uint16Array(16);
  function is(n, t, e, r) {
    var s, i;
    for (s = 0; s < 16; ++s)
      n.table[s] = 0;
    for (s = 0; s < r; ++s)
      n.table[t[e + s]]++;
    for (n.table[0] = 0, i = 0, s = 0; s < 16; ++s)
      Zi[s] = i, i += n.table[s];
    for (s = 0; s < r; ++s)
      t[e + s] && (n.trans[Zi[t[e + s]]++] = s);
  }
  function _u(n) {
    n.bitcount-- || (n.tag = n.source[n.sourceIndex++], n.bitcount = 7);
    var t = n.tag & 1;
    return n.tag >>>= 1, t;
  }
  function qt(n, t, e) {
    if (!t)
      return e;
    for (; n.bitcount < 24; )
      n.tag |= n.source[n.sourceIndex++] << n.bitcount, n.bitcount += 8;
    var r = n.tag & 65535 >>> 16 - t;
    return n.tag >>>= t, n.bitcount -= t, r + e;
  }
  function Os(n, t) {
    for (; n.bitcount < 24; )
      n.tag |= n.source[n.sourceIndex++] << n.bitcount, n.bitcount += 8;
    var e = 0, r = 0, s = 0, i = n.tag;
    do
      r = 2 * r + (i & 1), i >>>= 1, ++s, e += t.table[s], r -= t.table[s];
    while (r >= 0);
    return n.tag = i, n.bitcount -= s, t.trans[e + r];
  }
  function Ru(n, t, e) {
    var r, s, i, a, o, h;
    for (r = qt(n, 5, 257), s = qt(n, 5, 1), i = qt(n, 4, 4), a = 0; a < 19; ++a)
      Vt[a] = 0;
    for (a = 0; a < i; ++a) {
      var u = qt(n, 3, 0);
      Vt[Ou[a]] = u;
    }
    for (is(Xi, Vt, 0, 19), o = 0; o < r + s; ) {
      var l = Os(n, Xi);
      switch (l) {
        case 16:
          var f = Vt[o - 1];
          for (h = qt(n, 2, 3); h; --h)
            Vt[o++] = f;
          break;
        case 17:
          for (h = qt(n, 3, 3); h; --h)
            Vt[o++] = 0;
          break;
        case 18:
          for (h = qt(n, 7, 11); h; --h)
            Vt[o++] = 0;
          break;
        default:
          Vt[o++] = l;
          break;
      }
    }
    is(t, Vt, 0, r), is(e, Vt, r, s);
  }
  function Yi(n, t, e) {
    for (; ; ) {
      var r = Os(n, t);
      if (r === 256)
        return qs;
      if (r < 256)
        n.dest[n.destLen++] = r;
      else {
        var s, i, a, o;
        for (r -= 257, s = qt(n, Xs[r], Zs[r]), i = Os(n, e), a = n.destLen - qt(n, co[i], fo[i]), o = a; o < a + s; ++o)
          n.dest[n.destLen++] = n.dest[o];
      }
    }
  }
  function Uu(n) {
    for (var t, e, r; n.bitcount > 8; )
      n.sourceIndex--, n.bitcount -= 8;
    if (t = n.source[n.sourceIndex + 1], t = 256 * t + n.source[n.sourceIndex], e = n.source[n.sourceIndex + 3], e = 256 * e + n.source[n.sourceIndex + 2], t !== (~e & 65535))
      return ho;
    for (n.sourceIndex += 4, r = t; r; --r)
      n.dest[n.destLen++] = n.source[n.sourceIndex++];
    return n.bitcount = 0, qs;
  }
  function Bu(n, t) {
    var e = new Eu(n, t), r, s, i;
    do {
      switch (r = _u(e), s = qt(e, 2, 0), s) {
        case 0:
          i = Uu(e);
          break;
        case 1:
          i = Yi(e, uo, lo);
          break;
        case 2:
          Ru(e, e.ltree, e.dtree), i = Yi(e, e.ltree, e.dtree);
          break;
        default:
          i = ho;
      }
      if (i !== qs)
        throw new Error("Data error");
    } while (!r);
    return e.destLen < e.dest.length ? typeof e.dest.slice == "function" ? e.dest.slice(0, e.destLen) : e.dest.subarray(0, e.destLen) : e.dest;
  }
  Lu(uo, lo);
  po(Xs, Zs, 4, 3);
  po(co, fo, 2, 1);
  Xs[28] = 0;
  Zs[28] = 258;
  var Pu = Bu;
  function Je(n, t, e, r, s) {
    return Math.pow(1 - s, 3) * n + 3 * Math.pow(1 - s, 2) * s * t + 3 * (1 - s) * Math.pow(s, 2) * e + Math.pow(s, 3) * r;
  }
  function Fe() {
    this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
  }
  Fe.prototype.isEmpty = function() {
    return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
  };
  Fe.prototype.addPoint = function(n, t) {
    typeof n == "number" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = n, this.x2 = n), n < this.x1 && (this.x1 = n), n > this.x2 && (this.x2 = n)), typeof t == "number" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
  };
  Fe.prototype.addX = function(n) {
    this.addPoint(n, null);
  };
  Fe.prototype.addY = function(n) {
    this.addPoint(null, n);
  };
  Fe.prototype.addBezier = function(n, t, e, r, s, i, a, o) {
    var h = [n, t], u = [e, r], l = [s, i], f = [a, o];
    this.addPoint(n, t), this.addPoint(a, o);
    for (var c = 0; c <= 1; c++) {
      var p = 6 * h[c] - 12 * u[c] + 6 * l[c], d = -3 * h[c] + 9 * u[c] - 9 * l[c] + 3 * f[c], g = 3 * u[c] - 3 * h[c];
      if (d === 0) {
        if (p === 0)
          continue;
        var y = -g / p;
        0 < y && y < 1 && (c === 0 && this.addX(Je(h[c], u[c], l[c], f[c], y)), c === 1 && this.addY(Je(h[c], u[c], l[c], f[c], y)));
        continue;
      }
      var m = Math.pow(p, 2) - 4 * g * d;
      if (!(m < 0)) {
        var b = (-p + Math.sqrt(m)) / (2 * d);
        0 < b && b < 1 && (c === 0 && this.addX(Je(h[c], u[c], l[c], f[c], b)), c === 1 && this.addY(Je(h[c], u[c], l[c], f[c], b)));
        var v = (-p - Math.sqrt(m)) / (2 * d);
        0 < v && v < 1 && (c === 0 && this.addX(Je(h[c], u[c], l[c], f[c], v)), c === 1 && this.addY(Je(h[c], u[c], l[c], f[c], v)));
      }
    }
  };
  Fe.prototype.addQuad = function(n, t, e, r, s, i) {
    var a = n + 0.6666666666666666 * (e - n), o = t + 2 / 3 * (r - t), h = a + 1 / 3 * (s - n), u = o + 1 / 3 * (i - t);
    this.addBezier(n, t, a, o, h, u, s, i);
  };
  function lt() {
    this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
  }
  lt.prototype.moveTo = function(n, t) {
    this.commands.push({
      type: "M",
      x: n,
      y: t
    });
  };
  lt.prototype.lineTo = function(n, t) {
    this.commands.push({
      type: "L",
      x: n,
      y: t
    });
  };
  lt.prototype.curveTo = lt.prototype.bezierCurveTo = function(n, t, e, r, s, i) {
    this.commands.push({
      type: "C",
      x1: n,
      y1: t,
      x2: e,
      y2: r,
      x: s,
      y: i
    });
  };
  lt.prototype.quadTo = lt.prototype.quadraticCurveTo = function(n, t, e, r) {
    this.commands.push({
      type: "Q",
      x1: n,
      y1: t,
      x: e,
      y: r
    });
  };
  lt.prototype.close = lt.prototype.closePath = function() {
    this.commands.push({
      type: "Z"
    });
  };
  lt.prototype.extend = function(n) {
    if (n.commands)
      n = n.commands;
    else if (n instanceof Fe) {
      var t = n;
      this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), this.close();
      return;
    }
    Array.prototype.push.apply(this.commands, n);
  };
  lt.prototype.getBoundingBox = function() {
    for (var n = new Fe(), t = 0, e = 0, r = 0, s = 0, i = 0; i < this.commands.length; i++) {
      var a = this.commands[i];
      switch (a.type) {
        case "M":
          n.addPoint(a.x, a.y), t = r = a.x, e = s = a.y;
          break;
        case "L":
          n.addPoint(a.x, a.y), r = a.x, s = a.y;
          break;
        case "Q":
          n.addQuad(r, s, a.x1, a.y1, a.x, a.y), r = a.x, s = a.y;
          break;
        case "C":
          n.addBezier(r, s, a.x1, a.y1, a.x2, a.y2, a.x, a.y), r = a.x, s = a.y;
          break;
        case "Z":
          r = t, s = e;
          break;
        default:
          throw new Error("Unexpected path command " + a.type);
      }
    }
    return n.isEmpty() && n.addPoint(0, 0), n;
  };
  lt.prototype.draw = function(n) {
    n.beginPath();
    for (var t = 0; t < this.commands.length; t += 1) {
      var e = this.commands[t];
      e.type === "M" ? n.moveTo(e.x, e.y) : e.type === "L" ? n.lineTo(e.x, e.y) : e.type === "C" ? n.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y) : e.type === "Q" ? n.quadraticCurveTo(e.x1, e.y1, e.x, e.y) : e.type === "Z" && n.closePath();
    }
    this.fill && (n.fillStyle = this.fill, n.fill()), this.stroke && (n.strokeStyle = this.stroke, n.lineWidth = this.strokeWidth, n.stroke());
  };
  lt.prototype.toPathData = function(n) {
    n = n !== void 0 ? n : 2;
    function t(a) {
      return Math.round(a) === a ? "" + Math.round(a) : a.toFixed(n);
    }
    function e() {
      for (var a = arguments, o = "", h = 0; h < arguments.length; h += 1) {
        var u = a[h];
        u >= 0 && h > 0 && (o += " "), o += t(u);
      }
      return o;
    }
    for (var r = "", s = 0; s < this.commands.length; s += 1) {
      var i = this.commands[s];
      i.type === "M" ? r += "M" + e(i.x, i.y) : i.type === "L" ? r += "L" + e(i.x, i.y) : i.type === "C" ? r += "C" + e(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : i.type === "Q" ? r += "Q" + e(i.x1, i.y1, i.x, i.y) : i.type === "Z" && (r += "Z");
    }
    return r;
  };
  lt.prototype.toSVG = function(n) {
    var t = '<path d="';
    return t += this.toPathData(n), t += '"', this.fill && this.fill !== "black" && (this.fill === null ? t += ' fill="none"' : t += ' fill="' + this.fill + '"'), this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), t += "/>", t;
  };
  lt.prototype.toDOMElement = function(n) {
    var t = this.toPathData(n), e = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return e.setAttribute("d", t), e;
  };
  function go(n) {
    throw new Error(n);
  }
  function Ji(n, t) {
    n || go(t);
  }
  var N = { fail: go, argument: Ji, assert: Ji }, $i = 32768, Qi = 2147483648, nr = {}, A = {}, G = {};
  function Ht(n) {
    return function() {
      return n;
    };
  }
  A.BYTE = function(n) {
    return N.argument(n >= 0 && n <= 255, "Byte value should be between 0 and 255."), [n];
  };
  G.BYTE = Ht(1);
  A.CHAR = function(n) {
    return [n.charCodeAt(0)];
  };
  G.CHAR = Ht(1);
  A.CHARARRAY = function(n) {
    typeof n > "u" && (n = "", console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));
    for (var t = [], e = 0; e < n.length; e += 1)
      t[e] = n.charCodeAt(e);
    return t;
  };
  G.CHARARRAY = function(n) {
    return typeof n > "u" ? 0 : n.length;
  };
  A.USHORT = function(n) {
    return [n >> 8 & 255, n & 255];
  };
  G.USHORT = Ht(2);
  A.SHORT = function(n) {
    return n >= $i && (n = -(2 * $i - n)), [n >> 8 & 255, n & 255];
  };
  G.SHORT = Ht(2);
  A.UINT24 = function(n) {
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  };
  G.UINT24 = Ht(3);
  A.ULONG = function(n) {
    return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
  };
  G.ULONG = Ht(4);
  A.LONG = function(n) {
    return n >= Qi && (n = -(2 * Qi - n)), [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
  };
  G.LONG = Ht(4);
  A.FIXED = A.ULONG;
  G.FIXED = G.ULONG;
  A.FWORD = A.SHORT;
  G.FWORD = G.SHORT;
  A.UFWORD = A.USHORT;
  G.UFWORD = G.USHORT;
  A.LONGDATETIME = function(n) {
    return [0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
  };
  G.LONGDATETIME = Ht(8);
  A.TAG = function(n) {
    return N.argument(n.length === 4, "Tag should be exactly 4 ASCII characters."), [
      n.charCodeAt(0),
      n.charCodeAt(1),
      n.charCodeAt(2),
      n.charCodeAt(3)
    ];
  };
  G.TAG = Ht(4);
  A.Card8 = A.BYTE;
  G.Card8 = G.BYTE;
  A.Card16 = A.USHORT;
  G.Card16 = G.USHORT;
  A.OffSize = A.BYTE;
  G.OffSize = G.BYTE;
  A.SID = A.USHORT;
  G.SID = G.USHORT;
  A.NUMBER = function(n) {
    return n >= -107 && n <= 107 ? [n + 139] : n >= 108 && n <= 1131 ? (n = n - 108, [(n >> 8) + 247, n & 255]) : n >= -1131 && n <= -108 ? (n = -n - 108, [(n >> 8) + 251, n & 255]) : n >= -32768 && n <= 32767 ? A.NUMBER16(n) : A.NUMBER32(n);
  };
  G.NUMBER = function(n) {
    return A.NUMBER(n).length;
  };
  A.NUMBER16 = function(n) {
    return [28, n >> 8 & 255, n & 255];
  };
  G.NUMBER16 = Ht(3);
  A.NUMBER32 = function(n) {
    return [29, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
  };
  G.NUMBER32 = Ht(5);
  A.REAL = function(n) {
    var t = n.toString(), e = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
    if (e) {
      var r = parseFloat("1e" + ((e[2] ? +e[2] : 0) + e[1].length));
      t = (Math.round(n * r) / r).toString();
    }
    for (var s = "", i = 0, a = t.length; i < a; i += 1) {
      var o = t[i];
      o === "e" ? s += t[++i] === "-" ? "c" : "b" : o === "." ? s += "a" : o === "-" ? s += "e" : s += o;
    }
    s += s.length & 1 ? "f" : "ff";
    for (var h = [30], u = 0, l = s.length; u < l; u += 2)
      h.push(parseInt(s.substr(u, 2), 16));
    return h;
  };
  G.REAL = function(n) {
    return A.REAL(n).length;
  };
  A.NAME = A.CHARARRAY;
  G.NAME = G.CHARARRAY;
  A.STRING = A.CHARARRAY;
  G.STRING = G.CHARARRAY;
  nr.UTF8 = function(n, t, e) {
    for (var r = [], s = e, i = 0; i < s; i++, t += 1)
      r[i] = n.getUint8(t);
    return String.fromCharCode.apply(null, r);
  };
  nr.UTF16 = function(n, t, e) {
    for (var r = [], s = e / 2, i = 0; i < s; i++, t += 2)
      r[i] = n.getUint16(t);
    return String.fromCharCode.apply(null, r);
  };
  A.UTF16 = function(n) {
    for (var t = [], e = 0; e < n.length; e += 1) {
      var r = n.charCodeAt(e);
      t[t.length] = r >> 8 & 255, t[t.length] = r & 255;
    }
    return t;
  };
  G.UTF16 = function(n) {
    return n.length * 2;
  };
  var Ls = {
    "x-mac-croatian": (
      // Python: 'mac_croatian'
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
    ),
    "x-mac-cyrillic": (
      // Python: 'mac_cyrillic'
      "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю"
    ),
    "x-mac-gaelic": (
      // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ"
    ),
    "x-mac-greek": (
      // Python: 'mac_greek'
      "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­"
    ),
    "x-mac-icelandic": (
      // Python: 'mac_iceland'
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    ),
    "x-mac-inuit": (
      // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
      "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł"
    ),
    "x-mac-ce": (
      // Python: 'mac_latin2'
      "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
    ),
    macintosh: (
      // Python: 'mac_roman'
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    ),
    "x-mac-romanian": (
      // Python: 'mac_romanian'
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    ),
    "x-mac-turkish": (
      // Python: 'mac_turkish'
      "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
    )
  };
  nr.MACSTRING = function(n, t, e, r) {
    var s = Ls[r];
    if (s !== void 0) {
      for (var i = "", a = 0; a < e; a++) {
        var o = n.getUint8(t + a);
        o <= 127 ? i += String.fromCharCode(o) : i += s[o & 127];
      }
      return i;
    }
  };
  var on = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap(), hn, zu = function(n) {
    if (!hn) {
      hn = {};
      for (var t in Ls)
        hn[t] = new String(t);
    }
    var e = hn[n];
    if (e !== void 0) {
      if (on) {
        var r = on.get(e);
        if (r !== void 0)
          return r;
      }
      var s = Ls[n];
      if (s !== void 0) {
        for (var i = {}, a = 0; a < s.length; a++)
          i[s.charCodeAt(a)] = a + 128;
        return on && on.set(e, i), i;
      }
    }
  };
  A.MACSTRING = function(n, t) {
    var e = zu(t);
    if (e !== void 0) {
      for (var r = [], s = 0; s < n.length; s++) {
        var i = n.charCodeAt(s);
        if (i >= 128 && (i = e[i], i === void 0))
          return;
        r[s] = i;
      }
      return r;
    }
  };
  G.MACSTRING = function(n, t) {
    var e = A.MACSTRING(n, t);
    return e !== void 0 ? e.length : 0;
  };
  function _s(n) {
    return n >= -128 && n <= 127;
  }
  function Du(n, t, e) {
    for (var r = 0, s = n.length; t < s && r < 64 && n[t] === 0; )
      ++t, ++r;
    return e.push(128 | r - 1), t;
  }
  function Iu(n, t, e) {
    for (var r = 0, s = n.length, i = t; i < s && r < 64; ) {
      var a = n[i];
      if (!_s(a) || a === 0 && i + 1 < s && n[i + 1] === 0)
        break;
      ++i, ++r;
    }
    e.push(r - 1);
    for (var o = t; o < i; ++o)
      e.push(n[o] + 256 & 255);
    return i;
  }
  function Nu(n, t, e) {
    for (var r = 0, s = n.length, i = t; i < s && r < 64; ) {
      var a = n[i];
      if (a === 0 || _s(a) && i + 1 < s && _s(n[i + 1]))
        break;
      ++i, ++r;
    }
    e.push(64 | r - 1);
    for (var o = t; o < i; ++o) {
      var h = n[o];
      e.push(h + 65536 >> 8 & 255, h + 256 & 255);
    }
    return i;
  }
  A.VARDELTAS = function(n) {
    for (var t = 0, e = []; t < n.length; ) {
      var r = n[t];
      r === 0 ? t = Du(n, t, e) : r >= -128 && r <= 127 ? t = Iu(n, t, e) : t = Nu(n, t, e);
    }
    return e;
  };
  A.INDEX = function(n) {
    for (var t = 1, e = [t], r = [], s = 0; s < n.length; s += 1) {
      var i = A.OBJECT(n[s]);
      Array.prototype.push.apply(r, i), t += i.length, e.push(t);
    }
    if (r.length === 0)
      return [0, 0];
    for (var a = [], o = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, h = [void 0, A.BYTE, A.USHORT, A.UINT24, A.ULONG][o], u = 0; u < e.length; u += 1) {
      var l = h(e[u]);
      Array.prototype.push.apply(a, l);
    }
    return Array.prototype.concat(
      A.Card16(n.length),
      A.OffSize(o),
      a,
      r
    );
  };
  G.INDEX = function(n) {
    return A.INDEX(n).length;
  };
  A.DICT = function(n) {
    for (var t = [], e = Object.keys(n), r = e.length, s = 0; s < r; s += 1) {
      var i = parseInt(e[s], 0), a = n[i];
      t = t.concat(A.OPERAND(a.value, a.type)), t = t.concat(A.OPERATOR(i));
    }
    return t;
  };
  G.DICT = function(n) {
    return A.DICT(n).length;
  };
  A.OPERATOR = function(n) {
    return n < 1200 ? [n] : [12, n - 1200];
  };
  A.OPERAND = function(n, t) {
    var e = [];
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r += 1)
        N.argument(n.length === t.length, "Not enough arguments given for type" + t), e = e.concat(A.OPERAND(n[r], t[r]));
    else if (t === "SID")
      e = e.concat(A.NUMBER(n));
    else if (t === "offset")
      e = e.concat(A.NUMBER32(n));
    else if (t === "number")
      e = e.concat(A.NUMBER(n));
    else if (t === "real")
      e = e.concat(A.REAL(n));
    else
      throw new Error("Unknown operand type " + t);
    return e;
  };
  A.OP = A.BYTE;
  G.OP = G.BYTE;
  var un = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap();
  A.CHARSTRING = function(n) {
    if (un) {
      var t = un.get(n);
      if (t !== void 0)
        return t;
    }
    for (var e = [], r = n.length, s = 0; s < r; s += 1) {
      var i = n[s];
      e = e.concat(A[i.type](i.value));
    }
    return un && un.set(n, e), e;
  };
  G.CHARSTRING = function(n) {
    return A.CHARSTRING(n).length;
  };
  A.OBJECT = function(n) {
    var t = A[n.type];
    return N.argument(t !== void 0, "No encoding function for type " + n.type), t(n.value);
  };
  G.OBJECT = function(n) {
    var t = G[n.type];
    return N.argument(t !== void 0, "No sizeOf function for type " + n.type), t(n.value);
  };
  A.TABLE = function(n) {
    for (var t = [], e = n.fields.length, r = [], s = [], i = 0; i < e; i += 1) {
      var a = n.fields[i], o = A[a.type];
      N.argument(o !== void 0, "No encoding function for field type " + a.type + " (" + a.name + ")");
      var h = n[a.name];
      h === void 0 && (h = a.value);
      var u = o(h);
      a.type === "TABLE" ? (s.push(t.length), t = t.concat([0, 0]), r.push(u)) : t = t.concat(u);
    }
    for (var l = 0; l < r.length; l += 1) {
      var f = s[l], c = t.length;
      N.argument(c < 65536, "Table " + n.tableName + " too big."), t[f] = c >> 8, t[f + 1] = c & 255, t = t.concat(r[l]);
    }
    return t;
  };
  G.TABLE = function(n) {
    for (var t = 0, e = n.fields.length, r = 0; r < e; r += 1) {
      var s = n.fields[r], i = G[s.type];
      N.argument(i !== void 0, "No sizeOf function for field type " + s.type + " (" + s.name + ")");
      var a = n[s.name];
      a === void 0 && (a = s.value), t += i(a), s.type === "TABLE" && (t += 2);
    }
    return t;
  };
  A.RECORD = A.TABLE;
  G.RECORD = G.TABLE;
  A.LITERAL = function(n) {
    return n;
  };
  G.LITERAL = function(n) {
    return n.length;
  };
  function ft(n, t, e) {
    if (t.length && (t[0].name !== "coverageFormat" || t[0].value === 1))
      for (var r = 0; r < t.length; r += 1) {
        var s = t[r];
        this[s.name] = s.value;
      }
    if (this.tableName = n, this.fields = t, e)
      for (var i = Object.keys(e), a = 0; a < i.length; a += 1) {
        var o = i[a], h = e[o];
        this[o] !== void 0 && (this[o] = h);
      }
  }
  ft.prototype.encode = function() {
    return A.TABLE(this);
  };
  ft.prototype.sizeOf = function() {
    return G.TABLE(this);
  };
  function Cr(n, t, e) {
    e === void 0 && (e = t.length);
    var r = new Array(t.length + 1);
    r[0] = { name: n + "Count", type: "USHORT", value: e };
    for (var s = 0; s < t.length; s++)
      r[s + 1] = { name: n + s, type: "USHORT", value: t[s] };
    return r;
  }
  function Rs(n, t, e) {
    var r = t.length, s = new Array(r + 1);
    s[0] = { name: n + "Count", type: "USHORT", value: r };
    for (var i = 0; i < r; i++)
      s[i + 1] = { name: n + i, type: "TABLE", value: e(t[i], i) };
    return s;
  }
  function Ar(n, t, e) {
    var r = t.length, s = [];
    s[0] = { name: n + "Count", type: "USHORT", value: r };
    for (var i = 0; i < r; i++)
      s = s.concat(e(t[i], i));
    return s;
  }
  function yn(n) {
    n.format === 1 ? ft.call(
      this,
      "coverageTable",
      [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(Cr("glyph", n.glyphs))
    ) : n.format === 2 ? ft.call(
      this,
      "coverageTable",
      [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(Ar("rangeRecord", n.ranges, function(t) {
        return [
          { name: "startGlyphID", type: "USHORT", value: t.start },
          { name: "endGlyphID", type: "USHORT", value: t.end },
          { name: "startCoverageIndex", type: "USHORT", value: t.index }
        ];
      }))
    ) : N.assert(!1, "Coverage format must be 1 or 2.");
  }
  yn.prototype = Object.create(ft.prototype);
  yn.prototype.constructor = yn;
  function vn(n) {
    ft.call(
      this,
      "scriptListTable",
      Ar("scriptRecord", n, function(t, e) {
        var r = t.script, s = r.defaultLangSys;
        return N.assert(!!s, "Unable to write GSUB: script " + t.tag + " has no default language system."), [
          { name: "scriptTag" + e, type: "TAG", value: t.tag },
          { name: "script" + e, type: "TABLE", value: new ft("scriptTable", [
            { name: "defaultLangSys", type: "TABLE", value: new ft("defaultLangSys", [
              { name: "lookupOrder", type: "USHORT", value: 0 },
              { name: "reqFeatureIndex", type: "USHORT", value: s.reqFeatureIndex }
            ].concat(Cr("featureIndex", s.featureIndexes))) }
          ].concat(Ar("langSys", r.langSysRecords, function(i, a) {
            var o = i.langSys;
            return [
              { name: "langSysTag" + a, type: "TAG", value: i.tag },
              { name: "langSys" + a, type: "TABLE", value: new ft("langSys", [
                { name: "lookupOrder", type: "USHORT", value: 0 },
                { name: "reqFeatureIndex", type: "USHORT", value: o.reqFeatureIndex }
              ].concat(Cr("featureIndex", o.featureIndexes))) }
            ];
          }))) }
        ];
      })
    );
  }
  vn.prototype = Object.create(ft.prototype);
  vn.prototype.constructor = vn;
  function xn(n) {
    ft.call(
      this,
      "featureListTable",
      Ar("featureRecord", n, function(t, e) {
        var r = t.feature;
        return [
          { name: "featureTag" + e, type: "TAG", value: t.tag },
          { name: "feature" + e, type: "TABLE", value: new ft("featureTable", [
            { name: "featureParams", type: "USHORT", value: r.featureParams }
          ].concat(Cr("lookupListIndex", r.lookupListIndexes))) }
        ];
      })
    );
  }
  xn.prototype = Object.create(ft.prototype);
  xn.prototype.constructor = xn;
  function bn(n, t) {
    ft.call(this, "lookupListTable", Rs("lookup", n, function(e) {
      var r = t[e.lookupType];
      return N.assert(!!r, "Unable to write GSUB lookup type " + e.lookupType + " tables."), new ft("lookupTable", [
        { name: "lookupType", type: "USHORT", value: e.lookupType },
        { name: "lookupFlag", type: "USHORT", value: e.lookupFlag }
      ].concat(Rs("subtable", e.subtables, r)));
    }));
  }
  bn.prototype = Object.create(ft.prototype);
  bn.prototype.constructor = bn;
  var O = {
    Table: ft,
    Record: ft,
    Coverage: yn,
    ScriptList: vn,
    FeatureList: xn,
    LookupList: bn,
    ushortList: Cr,
    tableList: Rs,
    recordList: Ar
  };
  function ji(n, t) {
    return n.getUint8(t);
  }
  function Sn(n, t) {
    return n.getUint16(t, !1);
  }
  function Gu(n, t) {
    return n.getInt16(t, !1);
  }
  function Ys(n, t) {
    return n.getUint32(t, !1);
  }
  function mo(n, t) {
    var e = n.getInt16(t, !1), r = n.getUint16(t + 2, !1);
    return e + r / 65535;
  }
  function Hu(n, t) {
    for (var e = "", r = t; r < t + 4; r += 1)
      e += String.fromCharCode(n.getInt8(r));
    return e;
  }
  function Wu(n, t, e) {
    for (var r = 0, s = 0; s < e; s += 1)
      r <<= 8, r += n.getUint8(t + s);
    return r;
  }
  function Vu(n, t, e) {
    for (var r = [], s = t; s < e; s += 1)
      r.push(n.getUint8(s));
    return r;
  }
  function qu(n) {
    for (var t = "", e = 0; e < n.length; e += 1)
      t += String.fromCharCode(n[e]);
    return t;
  }
  var Xu = {
    byte: 1,
    uShort: 2,
    short: 2,
    uLong: 4,
    fixed: 4,
    longDateTime: 8,
    tag: 4
  };
  function S(n, t) {
    this.data = n, this.offset = t, this.relativeOffset = 0;
  }
  S.prototype.parseByte = function() {
    var n = this.data.getUint8(this.offset + this.relativeOffset);
    return this.relativeOffset += 1, n;
  };
  S.prototype.parseChar = function() {
    var n = this.data.getInt8(this.offset + this.relativeOffset);
    return this.relativeOffset += 1, n;
  };
  S.prototype.parseCard8 = S.prototype.parseByte;
  S.prototype.parseUShort = function() {
    var n = this.data.getUint16(this.offset + this.relativeOffset);
    return this.relativeOffset += 2, n;
  };
  S.prototype.parseCard16 = S.prototype.parseUShort;
  S.prototype.parseSID = S.prototype.parseUShort;
  S.prototype.parseOffset16 = S.prototype.parseUShort;
  S.prototype.parseShort = function() {
    var n = this.data.getInt16(this.offset + this.relativeOffset);
    return this.relativeOffset += 2, n;
  };
  S.prototype.parseF2Dot14 = function() {
    var n = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
    return this.relativeOffset += 2, n;
  };
  S.prototype.parseULong = function() {
    var n = Ys(this.data, this.offset + this.relativeOffset);
    return this.relativeOffset += 4, n;
  };
  S.prototype.parseOffset32 = S.prototype.parseULong;
  S.prototype.parseFixed = function() {
    var n = mo(this.data, this.offset + this.relativeOffset);
    return this.relativeOffset += 4, n;
  };
  S.prototype.parseString = function(n) {
    var t = this.data, e = this.offset + this.relativeOffset, r = "";
    this.relativeOffset += n;
    for (var s = 0; s < n; s++)
      r += String.fromCharCode(t.getUint8(e + s));
    return r;
  };
  S.prototype.parseTag = function() {
    return this.parseString(4);
  };
  S.prototype.parseLongDateTime = function() {
    var n = Ys(this.data, this.offset + this.relativeOffset + 4);
    return n -= 2082844800, this.relativeOffset += 8, n;
  };
  S.prototype.parseVersion = function(n) {
    var t = Sn(this.data, this.offset + this.relativeOffset), e = Sn(this.data, this.offset + this.relativeOffset + 2);
    return this.relativeOffset += 4, n === void 0 && (n = 4096), t + e / n / 10;
  };
  S.prototype.skip = function(n, t) {
    t === void 0 && (t = 1), this.relativeOffset += Xu[n] * t;
  };
  S.prototype.parseULongList = function(n) {
    n === void 0 && (n = this.parseULong());
    for (var t = new Array(n), e = this.data, r = this.offset + this.relativeOffset, s = 0; s < n; s++)
      t[s] = e.getUint32(r), r += 4;
    return this.relativeOffset += n * 4, t;
  };
  S.prototype.parseOffset16List = S.prototype.parseUShortList = function(n) {
    n === void 0 && (n = this.parseUShort());
    for (var t = new Array(n), e = this.data, r = this.offset + this.relativeOffset, s = 0; s < n; s++)
      t[s] = e.getUint16(r), r += 2;
    return this.relativeOffset += n * 2, t;
  };
  S.prototype.parseShortList = function(n) {
    for (var t = new Array(n), e = this.data, r = this.offset + this.relativeOffset, s = 0; s < n; s++)
      t[s] = e.getInt16(r), r += 2;
    return this.relativeOffset += n * 2, t;
  };
  S.prototype.parseByteList = function(n) {
    for (var t = new Array(n), e = this.data, r = this.offset + this.relativeOffset, s = 0; s < n; s++)
      t[s] = e.getUint8(r++);
    return this.relativeOffset += n, t;
  };
  S.prototype.parseList = function(n, t) {
    t || (t = n, n = this.parseUShort());
    for (var e = new Array(n), r = 0; r < n; r++)
      e[r] = t.call(this);
    return e;
  };
  S.prototype.parseList32 = function(n, t) {
    t || (t = n, n = this.parseULong());
    for (var e = new Array(n), r = 0; r < n; r++)
      e[r] = t.call(this);
    return e;
  };
  S.prototype.parseRecordList = function(n, t) {
    t || (t = n, n = this.parseUShort());
    for (var e = new Array(n), r = Object.keys(t), s = 0; s < n; s++) {
      for (var i = {}, a = 0; a < r.length; a++) {
        var o = r[a], h = t[o];
        i[o] = h.call(this);
      }
      e[s] = i;
    }
    return e;
  };
  S.prototype.parseRecordList32 = function(n, t) {
    t || (t = n, n = this.parseULong());
    for (var e = new Array(n), r = Object.keys(t), s = 0; s < n; s++) {
      for (var i = {}, a = 0; a < r.length; a++) {
        var o = r[a], h = t[o];
        i[o] = h.call(this);
      }
      e[s] = i;
    }
    return e;
  };
  S.prototype.parseStruct = function(n) {
    if (typeof n == "function")
      return n.call(this);
    for (var t = Object.keys(n), e = {}, r = 0; r < t.length; r++) {
      var s = t[r], i = n[s];
      e[s] = i.call(this);
    }
    return e;
  };
  S.prototype.parseValueRecord = function(n) {
    if (n === void 0 && (n = this.parseUShort()), n !== 0) {
      var t = {};
      return n & 1 && (t.xPlacement = this.parseShort()), n & 2 && (t.yPlacement = this.parseShort()), n & 4 && (t.xAdvance = this.parseShort()), n & 8 && (t.yAdvance = this.parseShort()), n & 16 && (t.xPlaDevice = void 0, this.parseShort()), n & 32 && (t.yPlaDevice = void 0, this.parseShort()), n & 64 && (t.xAdvDevice = void 0, this.parseShort()), n & 128 && (t.yAdvDevice = void 0, this.parseShort()), t;
    }
  };
  S.prototype.parseValueRecordList = function() {
    for (var n = this.parseUShort(), t = this.parseUShort(), e = new Array(t), r = 0; r < t; r++)
      e[r] = this.parseValueRecord(n);
    return e;
  };
  S.prototype.parsePointer = function(n) {
    var t = this.parseOffset16();
    if (t > 0)
      return new S(this.data, this.offset + t).parseStruct(n);
  };
  S.prototype.parsePointer32 = function(n) {
    var t = this.parseOffset32();
    if (t > 0)
      return new S(this.data, this.offset + t).parseStruct(n);
  };
  S.prototype.parseListOfLists = function(n) {
    for (var t = this.parseOffset16List(), e = t.length, r = this.relativeOffset, s = new Array(e), i = 0; i < e; i++) {
      var a = t[i];
      if (a === 0) {
        s[i] = void 0;
        continue;
      }
      if (this.relativeOffset = a, n) {
        for (var o = this.parseOffset16List(), h = new Array(o.length), u = 0; u < o.length; u++)
          this.relativeOffset = a + o[u], h[u] = n.call(this);
        s[i] = h;
      } else
        s[i] = this.parseUShortList();
    }
    return this.relativeOffset = r, s;
  };
  S.prototype.parseCoverage = function() {
    var n = this.offset + this.relativeOffset, t = this.parseUShort(), e = this.parseUShort();
    if (t === 1)
      return {
        format: 1,
        glyphs: this.parseUShortList(e)
      };
    if (t === 2) {
      for (var r = new Array(e), s = 0; s < e; s++)
        r[s] = {
          start: this.parseUShort(),
          end: this.parseUShort(),
          index: this.parseUShort()
        };
      return {
        format: 2,
        ranges: r
      };
    }
    throw new Error("0x" + n.toString(16) + ": Coverage format must be 1 or 2.");
  };
  S.prototype.parseClassDef = function() {
    var n = this.offset + this.relativeOffset, t = this.parseUShort();
    if (t === 1)
      return {
        format: 1,
        startGlyph: this.parseUShort(),
        classes: this.parseUShortList()
      };
    if (t === 2)
      return {
        format: 2,
        ranges: this.parseRecordList({
          start: S.uShort,
          end: S.uShort,
          classId: S.uShort
        })
      };
    throw new Error("0x" + n.toString(16) + ": ClassDef format must be 1 or 2.");
  };
  S.list = function(n, t) {
    return function() {
      return this.parseList(n, t);
    };
  };
  S.list32 = function(n, t) {
    return function() {
      return this.parseList32(n, t);
    };
  };
  S.recordList = function(n, t) {
    return function() {
      return this.parseRecordList(n, t);
    };
  };
  S.recordList32 = function(n, t) {
    return function() {
      return this.parseRecordList32(n, t);
    };
  };
  S.pointer = function(n) {
    return function() {
      return this.parsePointer(n);
    };
  };
  S.pointer32 = function(n) {
    return function() {
      return this.parsePointer32(n);
    };
  };
  S.tag = S.prototype.parseTag;
  S.byte = S.prototype.parseByte;
  S.uShort = S.offset16 = S.prototype.parseUShort;
  S.uShortList = S.prototype.parseUShortList;
  S.uLong = S.offset32 = S.prototype.parseULong;
  S.uLongList = S.prototype.parseULongList;
  S.struct = S.prototype.parseStruct;
  S.coverage = S.prototype.parseCoverage;
  S.classDef = S.prototype.parseClassDef;
  var Ki = {
    reserved: S.uShort,
    reqFeatureIndex: S.uShort,
    featureIndexes: S.uShortList
  };
  S.prototype.parseScriptList = function() {
    return this.parsePointer(S.recordList({
      tag: S.tag,
      script: S.pointer({
        defaultLangSys: S.pointer(Ki),
        langSysRecords: S.recordList({
          tag: S.tag,
          langSys: S.pointer(Ki)
        })
      })
    })) || [];
  };
  S.prototype.parseFeatureList = function() {
    return this.parsePointer(S.recordList({
      tag: S.tag,
      feature: S.pointer({
        featureParams: S.offset16,
        lookupListIndexes: S.uShortList
      })
    })) || [];
  };
  S.prototype.parseLookupList = function(n) {
    return this.parsePointer(S.list(S.pointer(function() {
      var t = this.parseUShort();
      N.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
      var e = this.parseUShort(), r = e & 16;
      return {
        lookupType: t,
        lookupFlag: e,
        subtables: this.parseList(S.pointer(n[t])),
        markFilteringSet: r ? this.parseUShort() : void 0
      };
    }))) || [];
  };
  S.prototype.parseFeatureVariationsList = function() {
    return this.parsePointer32(function() {
      var n = this.parseUShort(), t = this.parseUShort();
      N.argument(n === 1 && t < 1, "GPOS/GSUB feature variations table unknown.");
      var e = this.parseRecordList32({
        conditionSetOffset: S.offset32,
        featureTableSubstitutionOffset: S.offset32
      });
      return e;
    }) || [];
  };
  var U = {
    getByte: ji,
    getCard8: ji,
    getUShort: Sn,
    getCard16: Sn,
    getShort: Gu,
    getULong: Ys,
    getFixed: mo,
    getTag: Hu,
    getOffset: Wu,
    getBytes: Vu,
    bytesToString: qu,
    Parser: S
  };
  function Zu(n, t) {
    t.parseUShort(), n.length = t.parseULong(), n.language = t.parseULong();
    var e;
    n.groupCount = e = t.parseULong(), n.glyphIndexMap = {};
    for (var r = 0; r < e; r += 1)
      for (var s = t.parseULong(), i = t.parseULong(), a = t.parseULong(), o = s; o <= i; o += 1)
        n.glyphIndexMap[o] = a, a++;
  }
  function Yu(n, t, e, r, s) {
    n.length = t.parseUShort(), n.language = t.parseUShort();
    var i;
    n.segCount = i = t.parseUShort() >> 1, t.skip("uShort", 3), n.glyphIndexMap = {};
    for (var a = new U.Parser(e, r + s + 14), o = new U.Parser(e, r + s + 16 + i * 2), h = new U.Parser(e, r + s + 16 + i * 4), u = new U.Parser(e, r + s + 16 + i * 6), l = r + s + 16 + i * 8, f = 0; f < i - 1; f += 1)
      for (var c = void 0, p = a.parseUShort(), d = o.parseUShort(), g = h.parseShort(), y = u.parseUShort(), m = d; m <= p; m += 1)
        y !== 0 ? (l = u.offset + u.relativeOffset - 2, l += y, l += (m - d) * 2, c = U.getUShort(e, l), c !== 0 && (c = c + g & 65535)) : c = m + g & 65535, n.glyphIndexMap[m] = c;
  }
  function Ju(n, t) {
    var e = {};
    e.version = U.getUShort(n, t), N.argument(e.version === 0, "cmap table version should be 0."), e.numTables = U.getUShort(n, t + 2);
    for (var r = -1, s = e.numTables - 1; s >= 0; s -= 1) {
      var i = U.getUShort(n, t + 4 + s * 8), a = U.getUShort(n, t + 4 + s * 8 + 2);
      if (i === 3 && (a === 0 || a === 1 || a === 10) || i === 0 && (a === 0 || a === 1 || a === 2 || a === 3 || a === 4)) {
        r = U.getULong(n, t + 4 + s * 8 + 4);
        break;
      }
    }
    if (r === -1)
      throw new Error("No valid cmap sub-tables found.");
    var o = new U.Parser(n, t + r);
    if (e.format = o.parseUShort(), e.format === 12)
      Zu(e, o);
    else if (e.format === 4)
      Yu(e, o, n, t, r);
    else
      throw new Error("Only format 4 and 12 cmap tables are supported (found format " + e.format + ").");
    return e;
  }
  function $u(n, t, e) {
    n.segments.push({
      end: t,
      start: t,
      delta: -(t - e),
      offset: 0,
      glyphIndex: e
    });
  }
  function Qu(n) {
    n.segments.push({
      end: 65535,
      start: 65535,
      delta: 1,
      offset: 0
    });
  }
  function ju(n) {
    var t = !0, e;
    for (e = n.length - 1; e > 0; e -= 1) {
      var r = n.get(e);
      if (r.unicode > 65535) {
        console.log("Adding CMAP format 12 (needed!)"), t = !1;
        break;
      }
    }
    var s = [
      { name: "version", type: "USHORT", value: 0 },
      { name: "numTables", type: "USHORT", value: t ? 1 : 2 },
      // CMAP 4 header
      { name: "platformID", type: "USHORT", value: 3 },
      { name: "encodingID", type: "USHORT", value: 1 },
      { name: "offset", type: "ULONG", value: t ? 12 : 20 }
    ];
    t || (s = s.concat([
      // CMAP 12 header
      { name: "cmap12PlatformID", type: "USHORT", value: 3 },
      // We encode only for PlatformID = 3 (Windows) because it is supported everywhere
      { name: "cmap12EncodingID", type: "USHORT", value: 10 },
      { name: "cmap12Offset", type: "ULONG", value: 0 }
    ])), s = s.concat([
      // CMAP 4 Subtable
      { name: "format", type: "USHORT", value: 4 },
      { name: "cmap4Length", type: "USHORT", value: 0 },
      { name: "language", type: "USHORT", value: 0 },
      { name: "segCountX2", type: "USHORT", value: 0 },
      { name: "searchRange", type: "USHORT", value: 0 },
      { name: "entrySelector", type: "USHORT", value: 0 },
      { name: "rangeShift", type: "USHORT", value: 0 }
    ]);
    var i = new O.Table("cmap", s);
    for (i.segments = [], e = 0; e < n.length; e += 1) {
      for (var a = n.get(e), o = 0; o < a.unicodes.length; o += 1)
        $u(i, a.unicodes[o], e);
      i.segments = i.segments.sort(function(b, v) {
        return b.start - v.start;
      });
    }
    Qu(i);
    var h = i.segments.length, u = 0, l = [], f = [], c = [], p = [], d = [], g = [];
    for (e = 0; e < h; e += 1) {
      var y = i.segments[e];
      y.end <= 65535 && y.start <= 65535 ? (l = l.concat({ name: "end_" + e, type: "USHORT", value: y.end }), f = f.concat({ name: "start_" + e, type: "USHORT", value: y.start }), c = c.concat({ name: "idDelta_" + e, type: "SHORT", value: y.delta }), p = p.concat({ name: "idRangeOffset_" + e, type: "USHORT", value: y.offset }), y.glyphId !== void 0 && (d = d.concat({ name: "glyph_" + e, type: "USHORT", value: y.glyphId }))) : u += 1, !t && y.glyphIndex !== void 0 && (g = g.concat({ name: "cmap12Start_" + e, type: "ULONG", value: y.start }), g = g.concat({ name: "cmap12End_" + e, type: "ULONG", value: y.end }), g = g.concat({ name: "cmap12Glyph_" + e, type: "ULONG", value: y.glyphIndex }));
    }
    if (i.segCountX2 = (h - u) * 2, i.searchRange = Math.pow(2, Math.floor(Math.log(h - u) / Math.log(2))) * 2, i.entrySelector = Math.log(i.searchRange / 2) / Math.log(2), i.rangeShift = i.segCountX2 - i.searchRange, i.fields = i.fields.concat(l), i.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }), i.fields = i.fields.concat(f), i.fields = i.fields.concat(c), i.fields = i.fields.concat(p), i.fields = i.fields.concat(d), i.cmap4Length = 14 + // Subtable header
    l.length * 2 + 2 + // reservedPad
    f.length * 2 + c.length * 2 + p.length * 2 + d.length * 2, !t) {
      var m = 16 + // Subtable header
      g.length * 4;
      i.cmap12Offset = 12 + 2 * 2 + 4 + i.cmap4Length, i.fields = i.fields.concat([
        { name: "cmap12Format", type: "USHORT", value: 12 },
        { name: "cmap12Reserved", type: "USHORT", value: 0 },
        { name: "cmap12Length", type: "ULONG", value: m },
        { name: "cmap12Language", type: "ULONG", value: 0 },
        { name: "cmap12nGroups", type: "ULONG", value: g.length / 3 }
      ]), i.fields = i.fields.concat(g);
    }
    return i;
  }
  var yo = { parse: Ju, make: ju }, fn = [
    ".notdef",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "questiondown",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "AE",
    "ordfeminine",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "ae",
    "dotlessi",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
    "onesuperior",
    "logicalnot",
    "mu",
    "trademark",
    "Eth",
    "onehalf",
    "plusminus",
    "Thorn",
    "onequarter",
    "divide",
    "brokenbar",
    "degree",
    "thorn",
    "threequarters",
    "twosuperior",
    "registered",
    "minus",
    "eth",
    "multiply",
    "threesuperior",
    "copyright",
    "Aacute",
    "Acircumflex",
    "Adieresis",
    "Agrave",
    "Aring",
    "Atilde",
    "Ccedilla",
    "Eacute",
    "Ecircumflex",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Ntilde",
    "Oacute",
    "Ocircumflex",
    "Odieresis",
    "Ograve",
    "Otilde",
    "Scaron",
    "Uacute",
    "Ucircumflex",
    "Udieresis",
    "Ugrave",
    "Yacute",
    "Ydieresis",
    "Zcaron",
    "aacute",
    "acircumflex",
    "adieresis",
    "agrave",
    "aring",
    "atilde",
    "ccedilla",
    "eacute",
    "ecircumflex",
    "edieresis",
    "egrave",
    "iacute",
    "icircumflex",
    "idieresis",
    "igrave",
    "ntilde",
    "oacute",
    "ocircumflex",
    "odieresis",
    "ograve",
    "otilde",
    "scaron",
    "uacute",
    "ucircumflex",
    "udieresis",
    "ugrave",
    "yacute",
    "ydieresis",
    "zcaron",
    "exclamsmall",
    "Hungarumlautsmall",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "266 ff",
    "onedotenleader",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "Dotaccentsmall",
    "Macronsmall",
    "figuredash",
    "hypheninferior",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall",
    "001.000",
    "001.001",
    "001.002",
    "001.003",
    "Black",
    "Bold",
    "Book",
    "Light",
    "Medium",
    "Regular",
    "Roman",
    "Semibold"
  ], Ku = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "",
    "questiondown",
    "",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "",
    "ring",
    "cedilla",
    "",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "AE",
    "",
    "ordfeminine",
    "",
    "",
    "",
    "",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "",
    "",
    "",
    "",
    "",
    "ae",
    "",
    "",
    "",
    "dotlessi",
    "",
    "",
    "lslash",
    "oslash",
    "oe",
    "germandbls"
  ], tl = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclamsmall",
    "Hungarumlautsmall",
    "",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "",
    "",
    "isuperior",
    "",
    "",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "",
    "",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "",
    "",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "",
    "Dotaccentsmall",
    "",
    "",
    "Macronsmall",
    "",
    "",
    "figuredash",
    "hypheninferior",
    "",
    "",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "",
    "",
    "",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "",
    "",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall"
  ], Oe = [
    ".notdef",
    ".null",
    "nonmarkingreturn",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quotesingle",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "grave",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "Adieresis",
    "Aring",
    "Ccedilla",
    "Eacute",
    "Ntilde",
    "Odieresis",
    "Udieresis",
    "aacute",
    "agrave",
    "acircumflex",
    "adieresis",
    "atilde",
    "aring",
    "ccedilla",
    "eacute",
    "egrave",
    "ecircumflex",
    "edieresis",
    "iacute",
    "igrave",
    "icircumflex",
    "idieresis",
    "ntilde",
    "oacute",
    "ograve",
    "ocircumflex",
    "odieresis",
    "otilde",
    "uacute",
    "ugrave",
    "ucircumflex",
    "udieresis",
    "dagger",
    "degree",
    "cent",
    "sterling",
    "section",
    "bullet",
    "paragraph",
    "germandbls",
    "registered",
    "copyright",
    "trademark",
    "acute",
    "dieresis",
    "notequal",
    "AE",
    "Oslash",
    "infinity",
    "plusminus",
    "lessequal",
    "greaterequal",
    "yen",
    "mu",
    "partialdiff",
    "summation",
    "product",
    "pi",
    "integral",
    "ordfeminine",
    "ordmasculine",
    "Omega",
    "ae",
    "oslash",
    "questiondown",
    "exclamdown",
    "logicalnot",
    "radical",
    "florin",
    "approxequal",
    "Delta",
    "guillemotleft",
    "guillemotright",
    "ellipsis",
    "nonbreakingspace",
    "Agrave",
    "Atilde",
    "Otilde",
    "OE",
    "oe",
    "endash",
    "emdash",
    "quotedblleft",
    "quotedblright",
    "quoteleft",
    "quoteright",
    "divide",
    "lozenge",
    "ydieresis",
    "Ydieresis",
    "fraction",
    "currency",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "daggerdbl",
    "periodcentered",
    "quotesinglbase",
    "quotedblbase",
    "perthousand",
    "Acircumflex",
    "Ecircumflex",
    "Aacute",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Oacute",
    "Ocircumflex",
    "apple",
    "Ograve",
    "Uacute",
    "Ucircumflex",
    "Ugrave",
    "dotlessi",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "Lslash",
    "lslash",
    "Scaron",
    "scaron",
    "Zcaron",
    "zcaron",
    "brokenbar",
    "Eth",
    "eth",
    "Yacute",
    "yacute",
    "Thorn",
    "thorn",
    "minus",
    "multiply",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "onehalf",
    "onequarter",
    "threequarters",
    "franc",
    "Gbreve",
    "gbreve",
    "Idotaccent",
    "Scedilla",
    "scedilla",
    "Cacute",
    "cacute",
    "Ccaron",
    "ccaron",
    "dcroat"
  ];
  function vo(n) {
    this.font = n;
  }
  vo.prototype.charToGlyphIndex = function(n) {
    var t = n.codePointAt(0), e = this.font.glyphs;
    if (e) {
      for (var r = 0; r < e.length; r += 1)
        for (var s = e.get(r), i = 0; i < s.unicodes.length; i += 1)
          if (s.unicodes[i] === t)
            return r;
    }
    return null;
  };
  function xo(n) {
    this.cmap = n;
  }
  xo.prototype.charToGlyphIndex = function(n) {
    return this.cmap.glyphIndexMap[n.codePointAt(0)] || 0;
  };
  function wn(n, t) {
    this.encoding = n, this.charset = t;
  }
  wn.prototype.charToGlyphIndex = function(n) {
    var t = n.codePointAt(0), e = this.encoding[t];
    return this.charset.indexOf(e);
  };
  function Js(n) {
    switch (n.version) {
      case 1:
        this.names = Oe.slice();
        break;
      case 2:
        this.names = new Array(n.numberOfGlyphs);
        for (var t = 0; t < n.numberOfGlyphs; t++)
          n.glyphNameIndex[t] < Oe.length ? this.names[t] = Oe[n.glyphNameIndex[t]] : this.names[t] = n.names[n.glyphNameIndex[t] - Oe.length];
        break;
      case 2.5:
        this.names = new Array(n.numberOfGlyphs);
        for (var e = 0; e < n.numberOfGlyphs; e++)
          this.names[e] = Oe[e + n.glyphNameIndex[e]];
        break;
      case 3:
        this.names = [];
        break;
      default:
        this.names = [];
        break;
    }
  }
  Js.prototype.nameToGlyphIndex = function(n) {
    return this.names.indexOf(n);
  };
  Js.prototype.glyphIndexToName = function(n) {
    return this.names[n];
  };
  function el(n) {
    for (var t, e = n.tables.cmap.glyphIndexMap, r = Object.keys(e), s = 0; s < r.length; s += 1) {
      var i = r[s], a = e[i];
      t = n.glyphs.get(a), t.addUnicode(parseInt(i));
    }
    for (var o = 0; o < n.glyphs.length; o += 1)
      t = n.glyphs.get(o), n.cffEncoding ? n.isCIDFont ? t.name = "gid" + o : t.name = n.cffEncoding.charset[o] : n.glyphNames.names && (t.name = n.glyphNames.glyphIndexToName(o));
  }
  function rl(n) {
    n._IndexToUnicodeMap = {};
    for (var t = n.tables.cmap.glyphIndexMap, e = Object.keys(t), r = 0; r < e.length; r += 1) {
      var s = e[r], i = t[s];
      n._IndexToUnicodeMap[i] === void 0 ? n._IndexToUnicodeMap[i] = {
        unicodes: [parseInt(s)]
      } : n._IndexToUnicodeMap[i].unicodes.push(parseInt(s));
    }
  }
  function nl(n, t) {
    t.lowMemory ? rl(n) : el(n);
  }
  function sl(n, t, e, r, s) {
    n.beginPath(), n.moveTo(t, e), n.lineTo(r, s), n.stroke();
  }
  var Ce = { line: sl };
  function il(n, t) {
    var e = t || new lt();
    return {
      configurable: !0,
      get: function() {
        return typeof e == "function" && (e = e()), e;
      },
      set: function(r) {
        e = r;
      }
    };
  }
  function Ot(n) {
    this.bindConstructorValues(n);
  }
  Ot.prototype.bindConstructorValues = function(n) {
    this.index = n.index || 0, this.name = n.name || null, this.unicode = n.unicode || void 0, this.unicodes = n.unicodes || n.unicode !== void 0 ? [n.unicode] : [], "xMin" in n && (this.xMin = n.xMin), "yMin" in n && (this.yMin = n.yMin), "xMax" in n && (this.xMax = n.xMax), "yMax" in n && (this.yMax = n.yMax), "advanceWidth" in n && (this.advanceWidth = n.advanceWidth), Object.defineProperty(this, "path", il(this, n.path));
  };
  Ot.prototype.addUnicode = function(n) {
    this.unicodes.length === 0 && (this.unicode = n), this.unicodes.push(n);
  };
  Ot.prototype.getBoundingBox = function() {
    return this.path.getBoundingBox();
  };
  Ot.prototype.getPath = function(n, t, e, r, s) {
    n = n !== void 0 ? n : 0, t = t !== void 0 ? t : 0, e = e !== void 0 ? e : 72;
    var i, a;
    r || (r = {});
    var o = r.xScale, h = r.yScale;
    if (r.hinting && s && s.hinting && (a = this.path && s.hinting.exec(this, e)), a)
      i = s.hinting.getCommands(a), n = Math.round(n), t = Math.round(t), o = h = 1;
    else {
      i = this.path.commands;
      var u = 1 / (this.path.unitsPerEm || 1e3) * e;
      o === void 0 && (o = u), h === void 0 && (h = u);
    }
    for (var l = new lt(), f = 0; f < i.length; f += 1) {
      var c = i[f];
      c.type === "M" ? l.moveTo(n + c.x * o, t + -c.y * h) : c.type === "L" ? l.lineTo(n + c.x * o, t + -c.y * h) : c.type === "Q" ? l.quadraticCurveTo(
        n + c.x1 * o,
        t + -c.y1 * h,
        n + c.x * o,
        t + -c.y * h
      ) : c.type === "C" ? l.curveTo(
        n + c.x1 * o,
        t + -c.y1 * h,
        n + c.x2 * o,
        t + -c.y2 * h,
        n + c.x * o,
        t + -c.y * h
      ) : c.type === "Z" && l.closePath();
    }
    return l;
  };
  Ot.prototype.getContours = function() {
    if (this.points === void 0)
      return [];
    for (var n = [], t = [], e = 0; e < this.points.length; e += 1) {
      var r = this.points[e];
      t.push(r), r.lastPointOfContour && (n.push(t), t = []);
    }
    return N.argument(t.length === 0, "There are still points left in the current contour."), n;
  };
  Ot.prototype.getMetrics = function() {
    for (var n = this.path.commands, t = [], e = [], r = 0; r < n.length; r += 1) {
      var s = n[r];
      s.type !== "Z" && (t.push(s.x), e.push(s.y)), (s.type === "Q" || s.type === "C") && (t.push(s.x1), e.push(s.y1)), s.type === "C" && (t.push(s.x2), e.push(s.y2));
    }
    var i = {
      xMin: Math.min.apply(null, t),
      yMin: Math.min.apply(null, e),
      xMax: Math.max.apply(null, t),
      yMax: Math.max.apply(null, e),
      leftSideBearing: this.leftSideBearing
    };
    return isFinite(i.xMin) || (i.xMin = 0), isFinite(i.xMax) || (i.xMax = this.advanceWidth), isFinite(i.yMin) || (i.yMin = 0), isFinite(i.yMax) || (i.yMax = 0), i.rightSideBearing = this.advanceWidth - i.leftSideBearing - (i.xMax - i.xMin), i;
  };
  Ot.prototype.draw = function(n, t, e, r, s) {
    this.getPath(t, e, r, s).draw(n);
  };
  Ot.prototype.drawPoints = function(n, t, e, r) {
    function s(f, c, p, d) {
      n.beginPath();
      for (var g = 0; g < f.length; g += 1)
        n.moveTo(c + f[g].x * d, p + f[g].y * d), n.arc(c + f[g].x * d, p + f[g].y * d, 2, 0, Math.PI * 2, !1);
      n.closePath(), n.fill();
    }
    t = t !== void 0 ? t : 0, e = e !== void 0 ? e : 0, r = r !== void 0 ? r : 24;
    for (var i = 1 / this.path.unitsPerEm * r, a = [], o = [], h = this.path, u = 0; u < h.commands.length; u += 1) {
      var l = h.commands[u];
      l.x !== void 0 && a.push({ x: l.x, y: -l.y }), l.x1 !== void 0 && o.push({ x: l.x1, y: -l.y1 }), l.x2 !== void 0 && o.push({ x: l.x2, y: -l.y2 });
    }
    n.fillStyle = "blue", s(a, t, e, i), n.fillStyle = "red", s(o, t, e, i);
  };
  Ot.prototype.drawMetrics = function(n, t, e, r) {
    var s;
    t = t !== void 0 ? t : 0, e = e !== void 0 ? e : 0, r = r !== void 0 ? r : 24, s = 1 / this.path.unitsPerEm * r, n.lineWidth = 1, n.strokeStyle = "black", Ce.line(n, t, -1e4, t, 1e4), Ce.line(n, -1e4, e, 1e4, e);
    var i = this.xMin || 0, a = this.yMin || 0, o = this.xMax || 0, h = this.yMax || 0, u = this.advanceWidth || 0;
    n.strokeStyle = "blue", Ce.line(n, t + i * s, -1e4, t + i * s, 1e4), Ce.line(n, t + o * s, -1e4, t + o * s, 1e4), Ce.line(n, -1e4, e + -a * s, 1e4, e + -a * s), Ce.line(n, -1e4, e + -h * s, 1e4, e + -h * s), n.strokeStyle = "green", Ce.line(n, t + u * s, -1e4, t + u * s, 1e4);
  };
  function ln(n, t, e) {
    Object.defineProperty(n, t, {
      get: function() {
        return n.path, n[e];
      },
      set: function(r) {
        n[e] = r;
      },
      enumerable: !0,
      configurable: !0
    });
  }
  function $s(n, t) {
    if (this.font = n, this.glyphs = {}, Array.isArray(t))
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.path.unitsPerEm = n.unitsPerEm, this.glyphs[e] = r;
      }
    this.length = t && t.length || 0;
  }
  $s.prototype.get = function(n) {
    if (this.glyphs[n] === void 0) {
      this.font._push(n), typeof this.glyphs[n] == "function" && (this.glyphs[n] = this.glyphs[n]());
      var t = this.glyphs[n], e = this.font._IndexToUnicodeMap[n];
      if (e)
        for (var r = 0; r < e.unicodes.length; r++)
          t.addUnicode(e.unicodes[r]);
      this.font.cffEncoding ? this.font.isCIDFont ? t.name = "gid" + n : t.name = this.font.cffEncoding.charset[n] : this.font.glyphNames.names && (t.name = this.font.glyphNames.glyphIndexToName(n)), this.glyphs[n].advanceWidth = this.font._hmtxTableData[n].advanceWidth, this.glyphs[n].leftSideBearing = this.font._hmtxTableData[n].leftSideBearing;
    } else
      typeof this.glyphs[n] == "function" && (this.glyphs[n] = this.glyphs[n]());
    return this.glyphs[n];
  };
  $s.prototype.push = function(n, t) {
    this.glyphs[n] = t, this.length++;
  };
  function al(n, t) {
    return new Ot({ index: t, font: n });
  }
  function ol(n, t, e, r, s, i) {
    return function() {
      var a = new Ot({ index: t, font: n });
      return a.path = function() {
        e(a, r, s);
        var o = i(n.glyphs, a);
        return o.unitsPerEm = n.unitsPerEm, o;
      }, ln(a, "xMin", "_xMin"), ln(a, "xMax", "_xMax"), ln(a, "yMin", "_yMin"), ln(a, "yMax", "_yMax"), a;
    };
  }
  function hl(n, t, e, r) {
    return function() {
      var s = new Ot({ index: t, font: n });
      return s.path = function() {
        var i = e(n, s, r);
        return i.unitsPerEm = n.unitsPerEm, i;
      }, s;
    };
  }
  var Zt = { GlyphSet: $s, glyphLoader: al, ttfGlyphLoader: ol, cffGlyphLoader: hl };
  function bo(n, t) {
    if (n === t)
      return !0;
    if (Array.isArray(n) && Array.isArray(t)) {
      if (n.length !== t.length)
        return !1;
      for (var e = 0; e < n.length; e += 1)
        if (!bo(n[e], t[e]))
          return !1;
      return !0;
    } else
      return !1;
  }
  function Us(n) {
    var t;
    return n.length < 1240 ? t = 107 : n.length < 33900 ? t = 1131 : t = 32768, t;
  }
  function me(n, t, e) {
    var r = [], s = [], i = U.getCard16(n, t), a, o;
    if (i !== 0) {
      var h = U.getByte(n, t + 2);
      a = t + (i + 1) * h + 2;
      for (var u = t + 3, l = 0; l < i + 1; l += 1)
        r.push(U.getOffset(n, u, h)), u += h;
      o = a + r[i];
    } else
      o = t + 2;
    for (var f = 0; f < r.length - 1; f += 1) {
      var c = U.getBytes(n, a + r[f], a + r[f + 1]);
      e && (c = e(c)), s.push(c);
    }
    return { objects: s, startOffset: t, endOffset: o };
  }
  function ul(n, t) {
    var e = [], r = U.getCard16(n, t), s, i;
    if (r !== 0) {
      var a = U.getByte(n, t + 2);
      s = t + (r + 1) * a + 2;
      for (var o = t + 3, h = 0; h < r + 1; h += 1)
        e.push(U.getOffset(n, o, a)), o += a;
      i = s + e[r];
    } else
      i = t + 2;
    return { offsets: e, startOffset: t, endOffset: i };
  }
  function ll(n, t, e, r, s) {
    var i = U.getCard16(e, r), a = 0;
    if (i !== 0) {
      var o = U.getByte(e, r + 2);
      a = r + (i + 1) * o + 2;
    }
    var h = U.getBytes(e, a + t[n], a + t[n + 1]);
    return h;
  }
  function cl(n) {
    for (var t = "", e = 15, r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"]; ; ) {
      var s = n.parseByte(), i = s >> 4, a = s & 15;
      if (i === e || (t += r[i], a === e))
        break;
      t += r[a];
    }
    return parseFloat(t);
  }
  function fl(n, t) {
    var e, r, s, i;
    if (t === 28)
      return e = n.parseByte(), r = n.parseByte(), e << 8 | r;
    if (t === 29)
      return e = n.parseByte(), r = n.parseByte(), s = n.parseByte(), i = n.parseByte(), e << 24 | r << 16 | s << 8 | i;
    if (t === 30)
      return cl(n);
    if (t >= 32 && t <= 246)
      return t - 139;
    if (t >= 247 && t <= 250)
      return e = n.parseByte(), (t - 247) * 256 + e + 108;
    if (t >= 251 && t <= 254)
      return e = n.parseByte(), -(t - 251) * 256 - e - 108;
    throw new Error("Invalid b0 " + t);
  }
  function pl(n) {
    for (var t = {}, e = 0; e < n.length; e += 1) {
      var r = n[e][0], s = n[e][1], i = void 0;
      if (s.length === 1 ? i = s[0] : i = s, t.hasOwnProperty(r) && !isNaN(t[r]))
        throw new Error("Object " + t + " already has key " + r);
      t[r] = i;
    }
    return t;
  }
  function So(n, t, e) {
    t = t !== void 0 ? t : 0;
    var r = new U.Parser(n, t), s = [], i = [];
    for (e = e !== void 0 ? e : n.length; r.relativeOffset < e; ) {
      var a = r.parseByte();
      a <= 21 ? (a === 12 && (a = 1200 + r.parseByte()), s.push([a, i]), i = []) : i.push(fl(r, a));
    }
    return pl(s);
  }
  function Sr(n, t) {
    return t <= 390 ? t = fn[t] : t = n[t - 391], t;
  }
  function wo(n, t, e) {
    for (var r = {}, s, i = 0; i < t.length; i += 1) {
      var a = t[i];
      if (Array.isArray(a.type)) {
        var o = [];
        o.length = a.type.length;
        for (var h = 0; h < a.type.length; h++)
          s = n[a.op] !== void 0 ? n[a.op][h] : void 0, s === void 0 && (s = a.value !== void 0 && a.value[h] !== void 0 ? a.value[h] : null), a.type[h] === "SID" && (s = Sr(e, s)), o[h] = s;
        r[a.name] = o;
      } else
        s = n[a.op], s === void 0 && (s = a.value !== void 0 ? a.value : null), a.type === "SID" && (s = Sr(e, s)), r[a.name] = s;
    }
    return r;
  }
  function dl(n, t) {
    var e = {};
    return e.formatMajor = U.getCard8(n, t), e.formatMinor = U.getCard8(n, t + 1), e.size = U.getCard8(n, t + 2), e.offsetSize = U.getCard8(n, t + 3), e.startOffset = t, e.endOffset = t + 4, e;
  }
  var Fo = [
    { name: "version", op: 0, type: "SID" },
    { name: "notice", op: 1, type: "SID" },
    { name: "copyright", op: 1200, type: "SID" },
    { name: "fullName", op: 2, type: "SID" },
    { name: "familyName", op: 3, type: "SID" },
    { name: "weight", op: 4, type: "SID" },
    { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
    { name: "italicAngle", op: 1202, type: "number", value: 0 },
    { name: "underlinePosition", op: 1203, type: "number", value: -100 },
    { name: "underlineThickness", op: 1204, type: "number", value: 50 },
    { name: "paintType", op: 1205, type: "number", value: 0 },
    { name: "charstringType", op: 1206, type: "number", value: 2 },
    {
      name: "fontMatrix",
      op: 1207,
      type: ["real", "real", "real", "real", "real", "real"],
      value: [1e-3, 0, 0, 1e-3, 0, 0]
    },
    { name: "uniqueId", op: 13, type: "number" },
    { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] },
    { name: "strokeWidth", op: 1208, type: "number", value: 0 },
    { name: "xuid", op: 14, type: [], value: null },
    { name: "charset", op: 15, type: "offset", value: 0 },
    { name: "encoding", op: 16, type: "offset", value: 0 },
    { name: "charStrings", op: 17, type: "offset", value: 0 },
    { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
    { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
    { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
    { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
    { name: "cidFontType", op: 1233, type: "number", value: 0 },
    { name: "cidCount", op: 1234, type: "number", value: 8720 },
    { name: "uidBase", op: 1235, type: "number" },
    { name: "fdArray", op: 1236, type: "offset" },
    { name: "fdSelect", op: 1237, type: "offset" },
    { name: "fontName", op: 1238, type: "SID" }
  ], To = [
    { name: "subrs", op: 19, type: "offset", value: 0 },
    { name: "defaultWidthX", op: 20, type: "number", value: 0 },
    { name: "nominalWidthX", op: 21, type: "number", value: 0 }
  ];
  function gl(n, t) {
    var e = So(n, 0, n.byteLength);
    return wo(e, Fo, t);
  }
  function ko(n, t, e, r) {
    var s = So(n, t, e);
    return wo(s, To, r);
  }
  function ta(n, t, e, r) {
    for (var s = [], i = 0; i < e.length; i += 1) {
      var a = new DataView(new Uint8Array(e[i]).buffer), o = gl(a, r);
      o._subrs = [], o._subrsBias = 0, o._defaultWidthX = 0, o._nominalWidthX = 0;
      var h = o.private[0], u = o.private[1];
      if (h !== 0 && u !== 0) {
        var l = ko(n, u + t, h, r);
        if (o._defaultWidthX = l.defaultWidthX, o._nominalWidthX = l.nominalWidthX, l.subrs !== 0) {
          var f = u + l.subrs, c = me(n, f + t);
          o._subrs = c.objects, o._subrsBias = Us(o._subrs);
        }
        o._privateDict = l;
      }
      s.push(o);
    }
    return s;
  }
  function ml(n, t, e, r) {
    var s, i, a = new U.Parser(n, t);
    e -= 1;
    var o = [".notdef"], h = a.parseCard8();
    if (h === 0)
      for (var u = 0; u < e; u += 1)
        s = a.parseSID(), o.push(Sr(r, s));
    else if (h === 1)
      for (; o.length <= e; ) {
        s = a.parseSID(), i = a.parseCard8();
        for (var l = 0; l <= i; l += 1)
          o.push(Sr(r, s)), s += 1;
      }
    else if (h === 2)
      for (; o.length <= e; ) {
        s = a.parseSID(), i = a.parseCard16();
        for (var f = 0; f <= i; f += 1)
          o.push(Sr(r, s)), s += 1;
      }
    else
      throw new Error("Unknown charset format " + h);
    return o;
  }
  function yl(n, t, e) {
    var r, s = {}, i = new U.Parser(n, t), a = i.parseCard8();
    if (a === 0)
      for (var o = i.parseCard8(), h = 0; h < o; h += 1)
        r = i.parseCard8(), s[r] = h;
    else if (a === 1) {
      var u = i.parseCard8();
      r = 1;
      for (var l = 0; l < u; l += 1)
        for (var f = i.parseCard8(), c = i.parseCard8(), p = f; p <= f + c; p += 1)
          s[p] = r, r += 1;
    } else
      throw new Error("Unknown encoding format " + a);
    return new wn(s, e);
  }
  function ea(n, t, e) {
    var r, s, i, a, o = new lt(), h = [], u = 0, l = !1, f = !1, c = 0, p = 0, d, g, y, m;
    if (n.isCIDFont) {
      var b = n.tables.cff.topDict._fdSelect[t.index], v = n.tables.cff.topDict._fdArray[b];
      d = v._subrs, g = v._subrsBias, y = v._defaultWidthX, m = v._nominalWidthX;
    } else
      d = n.tables.cff.topDict._subrs, g = n.tables.cff.topDict._subrsBias, y = n.tables.cff.topDict._defaultWidthX, m = n.tables.cff.topDict._nominalWidthX;
    var x = y;
    function F(k, B) {
      f && o.closePath(), o.moveTo(k, B), f = !0;
    }
    function C() {
      var k;
      k = h.length % 2 !== 0, k && !l && (x = h.shift() + m), u += h.length >> 1, h.length = 0, l = !0;
    }
    function T(k) {
      for (var B, P, I, rt, V, W, Y, X, $, tt, j, et, q = 0; q < k.length; ) {
        var st = k[q];
        switch (q += 1, st) {
          case 1:
            C();
            break;
          case 3:
            C();
            break;
          case 4:
            h.length > 1 && !l && (x = h.shift() + m, l = !0), p += h.pop(), F(c, p);
            break;
          case 5:
            for (; h.length > 0; )
              c += h.shift(), p += h.shift(), o.lineTo(c, p);
            break;
          case 6:
            for (; h.length > 0 && (c += h.shift(), o.lineTo(c, p), h.length !== 0); )
              p += h.shift(), o.lineTo(c, p);
            break;
          case 7:
            for (; h.length > 0 && (p += h.shift(), o.lineTo(c, p), h.length !== 0); )
              c += h.shift(), o.lineTo(c, p);
            break;
          case 8:
            for (; h.length > 0; )
              r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a + h.shift(), o.curveTo(r, s, i, a, c, p);
            break;
          case 10:
            V = h.pop() + g, W = d[V], W && T(W);
            break;
          case 11:
            return;
          case 12:
            switch (st = k[q], q += 1, st) {
              case 35:
                r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), Y = i + h.shift(), X = a + h.shift(), $ = Y + h.shift(), tt = X + h.shift(), j = $ + h.shift(), et = tt + h.shift(), c = j + h.shift(), p = et + h.shift(), h.shift(), o.curveTo(r, s, i, a, Y, X), o.curveTo($, tt, j, et, c, p);
                break;
              case 34:
                r = c + h.shift(), s = p, i = r + h.shift(), a = s + h.shift(), Y = i + h.shift(), X = a, $ = Y + h.shift(), tt = a, j = $ + h.shift(), et = p, c = j + h.shift(), o.curveTo(r, s, i, a, Y, X), o.curveTo($, tt, j, et, c, p);
                break;
              case 36:
                r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), Y = i + h.shift(), X = a, $ = Y + h.shift(), tt = a, j = $ + h.shift(), et = tt + h.shift(), c = j + h.shift(), o.curveTo(r, s, i, a, Y, X), o.curveTo($, tt, j, et, c, p);
                break;
              case 37:
                r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), Y = i + h.shift(), X = a + h.shift(), $ = Y + h.shift(), tt = X + h.shift(), j = $ + h.shift(), et = tt + h.shift(), Math.abs(j - c) > Math.abs(et - p) ? c = j + h.shift() : p = et + h.shift(), o.curveTo(r, s, i, a, Y, X), o.curveTo($, tt, j, et, c, p);
                break;
              default:
                console.log("Glyph " + t.index + ": unknown operator 1200" + st), h.length = 0;
            }
            break;
          case 14:
            h.length > 0 && !l && (x = h.shift() + m, l = !0), f && (o.closePath(), f = !1);
            break;
          case 18:
            C();
            break;
          case 19:
          case 20:
            C(), q += u + 7 >> 3;
            break;
          case 21:
            h.length > 2 && !l && (x = h.shift() + m, l = !0), p += h.pop(), c += h.pop(), F(c, p);
            break;
          case 22:
            h.length > 1 && !l && (x = h.shift() + m, l = !0), c += h.pop(), F(c, p);
            break;
          case 23:
            C();
            break;
          case 24:
            for (; h.length > 2; )
              r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a + h.shift(), o.curveTo(r, s, i, a, c, p);
            c += h.shift(), p += h.shift(), o.lineTo(c, p);
            break;
          case 25:
            for (; h.length > 6; )
              c += h.shift(), p += h.shift(), o.lineTo(c, p);
            r = c + h.shift(), s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a + h.shift(), o.curveTo(r, s, i, a, c, p);
            break;
          case 26:
            for (h.length % 2 && (c += h.shift()); h.length > 0; )
              r = c, s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i, p = a + h.shift(), o.curveTo(r, s, i, a, c, p);
            break;
          case 27:
            for (h.length % 2 && (p += h.shift()); h.length > 0; )
              r = c + h.shift(), s = p, i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a, o.curveTo(r, s, i, a, c, p);
            break;
          case 28:
            B = k[q], P = k[q + 1], h.push((B << 24 | P << 16) >> 16), q += 2;
            break;
          case 29:
            V = h.pop() + n.gsubrsBias, W = n.gsubrs[V], W && T(W);
            break;
          case 30:
            for (; h.length > 0 && (r = c, s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a + (h.length === 1 ? h.shift() : 0), o.curveTo(r, s, i, a, c, p), h.length !== 0); )
              r = c + h.shift(), s = p, i = r + h.shift(), a = s + h.shift(), p = a + h.shift(), c = i + (h.length === 1 ? h.shift() : 0), o.curveTo(r, s, i, a, c, p);
            break;
          case 31:
            for (; h.length > 0 && (r = c + h.shift(), s = p, i = r + h.shift(), a = s + h.shift(), p = a + h.shift(), c = i + (h.length === 1 ? h.shift() : 0), o.curveTo(r, s, i, a, c, p), h.length !== 0); )
              r = c, s = p + h.shift(), i = r + h.shift(), a = s + h.shift(), c = i + h.shift(), p = a + (h.length === 1 ? h.shift() : 0), o.curveTo(r, s, i, a, c, p);
            break;
          default:
            st < 32 ? console.log("Glyph " + t.index + ": unknown operator " + st) : st < 247 ? h.push(st - 139) : st < 251 ? (B = k[q], q += 1, h.push((st - 247) * 256 + B + 108)) : st < 255 ? (B = k[q], q += 1, h.push(-(st - 251) * 256 - B - 108)) : (B = k[q], P = k[q + 1], I = k[q + 2], rt = k[q + 3], q += 4, h.push((B << 24 | P << 16 | I << 8 | rt) / 65536));
        }
      }
    }
    return T(e), t.advanceWidth = x, o;
  }
  function vl(n, t, e, r) {
    var s = [], i, a = new U.Parser(n, t), o = a.parseCard8();
    if (o === 0)
      for (var h = 0; h < e; h++) {
        if (i = a.parseCard8(), i >= r)
          throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + r + ")");
        s.push(i);
      }
    else if (o === 3) {
      var u = a.parseCard16(), l = a.parseCard16();
      if (l !== 0)
        throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + l);
      for (var f, c = 0; c < u; c++) {
        if (i = a.parseCard8(), f = a.parseCard16(), i >= r)
          throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + r + ")");
        if (f > e)
          throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + f);
        for (; l < f; l++)
          s.push(i);
        l = f;
      }
      if (f !== e)
        throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + f);
    } else
      throw new Error("CFF Table CID Font FDSelect table has unsupported format " + o);
    return s;
  }
  function xl(n, t, e, r) {
    e.tables.cff = {};
    var s = dl(n, t), i = me(n, s.endOffset, U.bytesToString), a = me(n, i.endOffset), o = me(n, a.endOffset, U.bytesToString), h = me(n, o.endOffset);
    e.gsubrs = h.objects, e.gsubrsBias = Us(e.gsubrs);
    var u = ta(n, t, a.objects, o.objects);
    if (u.length !== 1)
      throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + u.length);
    var l = u[0];
    if (e.tables.cff.topDict = l, l._privateDict && (e.defaultWidthX = l._privateDict.defaultWidthX, e.nominalWidthX = l._privateDict.nominalWidthX), l.ros[0] !== void 0 && l.ros[1] !== void 0 && (e.isCIDFont = !0), e.isCIDFont) {
      var f = l.fdArray, c = l.fdSelect;
      if (f === 0 || c === 0)
        throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
      f += t;
      var p = me(n, f), d = ta(n, t, p.objects, o.objects);
      l._fdArray = d, c += t, l._fdSelect = vl(n, c, e.numGlyphs, d.length);
    }
    var g = t + l.private[1], y = ko(n, g, l.private[0], o.objects);
    if (e.defaultWidthX = y.defaultWidthX, e.nominalWidthX = y.nominalWidthX, y.subrs !== 0) {
      var m = g + y.subrs, b = me(n, m);
      e.subrs = b.objects, e.subrsBias = Us(e.subrs);
    } else
      e.subrs = [], e.subrsBias = 0;
    var v;
    r.lowMemory ? (v = ul(n, t + l.charStrings), e.nGlyphs = v.offsets.length) : (v = me(n, t + l.charStrings), e.nGlyphs = v.objects.length);
    var x = ml(n, t + l.charset, e.nGlyphs, o.objects);
    if (l.encoding === 0 ? e.cffEncoding = new wn(Ku, x) : l.encoding === 1 ? e.cffEncoding = new wn(tl, x) : e.cffEncoding = yl(n, t + l.encoding, x), e.encoding = e.encoding || e.cffEncoding, e.glyphs = new Zt.GlyphSet(e), r.lowMemory)
      e._push = function(T) {
        var k = ll(T, v.offsets, n, t + l.charStrings);
        e.glyphs.push(T, Zt.cffGlyphLoader(e, T, ea, k));
      };
    else
      for (var F = 0; F < e.nGlyphs; F += 1) {
        var C = v.objects[F];
        e.glyphs.push(F, Zt.cffGlyphLoader(e, F, ea, C));
      }
  }
  function Mo(n, t) {
    var e, r = fn.indexOf(n);
    return r >= 0 && (e = r), r = t.indexOf(n), r >= 0 ? e = r + fn.length : (e = fn.length + t.length, t.push(n)), e;
  }
  function bl() {
    return new O.Record("Header", [
      { name: "major", type: "Card8", value: 1 },
      { name: "minor", type: "Card8", value: 0 },
      { name: "hdrSize", type: "Card8", value: 4 },
      { name: "major", type: "Card8", value: 1 }
    ]);
  }
  function Sl(n) {
    var t = new O.Record("Name INDEX", [
      { name: "names", type: "INDEX", value: [] }
    ]);
    t.names = [];
    for (var e = 0; e < n.length; e += 1)
      t.names.push({ name: "name_" + e, type: "NAME", value: n[e] });
    return t;
  }
  function Co(n, t, e) {
    for (var r = {}, s = 0; s < n.length; s += 1) {
      var i = n[s], a = t[i.name];
      a !== void 0 && !bo(a, i.value) && (i.type === "SID" && (a = Mo(a, e)), r[i.op] = { name: i.name, type: i.type, value: a });
    }
    return r;
  }
  function ra(n, t) {
    var e = new O.Record("Top DICT", [
      { name: "dict", type: "DICT", value: {} }
    ]);
    return e.dict = Co(Fo, n, t), e;
  }
  function na(n) {
    var t = new O.Record("Top DICT INDEX", [
      { name: "topDicts", type: "INDEX", value: [] }
    ]);
    return t.topDicts = [{ name: "topDict_0", type: "TABLE", value: n }], t;
  }
  function wl(n) {
    var t = new O.Record("String INDEX", [
      { name: "strings", type: "INDEX", value: [] }
    ]);
    t.strings = [];
    for (var e = 0; e < n.length; e += 1)
      t.strings.push({ name: "string_" + e, type: "STRING", value: n[e] });
    return t;
  }
  function Fl() {
    return new O.Record("Global Subr INDEX", [
      { name: "subrs", type: "INDEX", value: [] }
    ]);
  }
  function Tl(n, t) {
    for (var e = new O.Record("Charsets", [
      { name: "format", type: "Card8", value: 0 }
    ]), r = 0; r < n.length; r += 1) {
      var s = n[r], i = Mo(s, t);
      e.fields.push({ name: "glyph_" + r, type: "SID", value: i });
    }
    return e;
  }
  function kl(n) {
    var t = [], e = n.path;
    t.push({ name: "width", type: "NUMBER", value: n.advanceWidth });
    for (var r = 0, s = 0, i = 0; i < e.commands.length; i += 1) {
      var a = void 0, o = void 0, h = e.commands[i];
      if (h.type === "Q") {
        var u = 0.3333333333333333, l = 2 / 3;
        h = {
          type: "C",
          x: h.x,
          y: h.y,
          x1: Math.round(u * r + l * h.x1),
          y1: Math.round(u * s + l * h.y1),
          x2: Math.round(u * h.x + l * h.x1),
          y2: Math.round(u * h.y + l * h.y1)
        };
      }
      if (h.type === "M")
        a = Math.round(h.x - r), o = Math.round(h.y - s), t.push({ name: "dx", type: "NUMBER", value: a }), t.push({ name: "dy", type: "NUMBER", value: o }), t.push({ name: "rmoveto", type: "OP", value: 21 }), r = Math.round(h.x), s = Math.round(h.y);
      else if (h.type === "L")
        a = Math.round(h.x - r), o = Math.round(h.y - s), t.push({ name: "dx", type: "NUMBER", value: a }), t.push({ name: "dy", type: "NUMBER", value: o }), t.push({ name: "rlineto", type: "OP", value: 5 }), r = Math.round(h.x), s = Math.round(h.y);
      else if (h.type === "C") {
        var f = Math.round(h.x1 - r), c = Math.round(h.y1 - s), p = Math.round(h.x2 - h.x1), d = Math.round(h.y2 - h.y1);
        a = Math.round(h.x - h.x2), o = Math.round(h.y - h.y2), t.push({ name: "dx1", type: "NUMBER", value: f }), t.push({ name: "dy1", type: "NUMBER", value: c }), t.push({ name: "dx2", type: "NUMBER", value: p }), t.push({ name: "dy2", type: "NUMBER", value: d }), t.push({ name: "dx", type: "NUMBER", value: a }), t.push({ name: "dy", type: "NUMBER", value: o }), t.push({ name: "rrcurveto", type: "OP", value: 8 }), r = Math.round(h.x), s = Math.round(h.y);
      }
    }
    return t.push({ name: "endchar", type: "OP", value: 14 }), t;
  }
  function Ml(n) {
    for (var t = new O.Record("CharStrings INDEX", [
      { name: "charStrings", type: "INDEX", value: [] }
    ]), e = 0; e < n.length; e += 1) {
      var r = n.get(e), s = kl(r);
      t.charStrings.push({ name: r.name, type: "CHARSTRING", value: s });
    }
    return t;
  }
  function Cl(n, t) {
    var e = new O.Record("Private DICT", [
      { name: "dict", type: "DICT", value: {} }
    ]);
    return e.dict = Co(To, n, t), e;
  }
  function Al(n, t) {
    for (var e = new O.Table("CFF ", [
      { name: "header", type: "RECORD" },
      { name: "nameIndex", type: "RECORD" },
      { name: "topDictIndex", type: "RECORD" },
      { name: "stringIndex", type: "RECORD" },
      { name: "globalSubrIndex", type: "RECORD" },
      { name: "charsets", type: "RECORD" },
      { name: "charStringsIndex", type: "RECORD" },
      { name: "privateDict", type: "RECORD" }
    ]), r = 1 / t.unitsPerEm, s = {
      version: t.version,
      fullName: t.fullName,
      familyName: t.familyName,
      weight: t.weightName,
      fontBBox: t.fontBBox || [0, 0, 0, 0],
      fontMatrix: [r, 0, 0, r, 0, 0],
      charset: 999,
      encoding: 0,
      charStrings: 999,
      private: [0, 999]
    }, i = {}, a = [], o, h = 1; h < n.length; h += 1)
      o = n.get(h), a.push(o.name);
    var u = [];
    e.header = bl(), e.nameIndex = Sl([t.postScriptName]);
    var l = ra(s, u);
    e.topDictIndex = na(l), e.globalSubrIndex = Fl(), e.charsets = Tl(a, u), e.charStringsIndex = Ml(n), e.privateDict = Cl(i, u), e.stringIndex = wl(u);
    var f = e.header.sizeOf() + e.nameIndex.sizeOf() + e.topDictIndex.sizeOf() + e.stringIndex.sizeOf() + e.globalSubrIndex.sizeOf();
    return s.charset = f, s.encoding = 0, s.charStrings = s.charset + e.charsets.sizeOf(), s.private[1] = s.charStrings + e.charStringsIndex.sizeOf(), l = ra(s, u), e.topDictIndex = na(l), e;
  }
  var Ao = { parse: xl, make: Al };
  function El(n, t) {
    var e = {}, r = new U.Parser(n, t);
    return e.version = r.parseVersion(), e.fontRevision = Math.round(r.parseFixed() * 1e3) / 1e3, e.checkSumAdjustment = r.parseULong(), e.magicNumber = r.parseULong(), N.argument(e.magicNumber === 1594834165, "Font header has wrong magic number."), e.flags = r.parseUShort(), e.unitsPerEm = r.parseUShort(), e.created = r.parseLongDateTime(), e.modified = r.parseLongDateTime(), e.xMin = r.parseShort(), e.yMin = r.parseShort(), e.xMax = r.parseShort(), e.yMax = r.parseShort(), e.macStyle = r.parseUShort(), e.lowestRecPPEM = r.parseUShort(), e.fontDirectionHint = r.parseShort(), e.indexToLocFormat = r.parseShort(), e.glyphDataFormat = r.parseShort(), e;
  }
  function Ol(n) {
    var t = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800, e = t;
    return n.createdTimestamp && (e = n.createdTimestamp + 2082844800), new O.Table("head", [
      { name: "version", type: "FIXED", value: 65536 },
      { name: "fontRevision", type: "FIXED", value: 65536 },
      { name: "checkSumAdjustment", type: "ULONG", value: 0 },
      { name: "magicNumber", type: "ULONG", value: 1594834165 },
      { name: "flags", type: "USHORT", value: 0 },
      { name: "unitsPerEm", type: "USHORT", value: 1e3 },
      { name: "created", type: "LONGDATETIME", value: e },
      { name: "modified", type: "LONGDATETIME", value: t },
      { name: "xMin", type: "SHORT", value: 0 },
      { name: "yMin", type: "SHORT", value: 0 },
      { name: "xMax", type: "SHORT", value: 0 },
      { name: "yMax", type: "SHORT", value: 0 },
      { name: "macStyle", type: "USHORT", value: 0 },
      { name: "lowestRecPPEM", type: "USHORT", value: 0 },
      { name: "fontDirectionHint", type: "SHORT", value: 2 },
      { name: "indexToLocFormat", type: "SHORT", value: 0 },
      { name: "glyphDataFormat", type: "SHORT", value: 0 }
    ], n);
  }
  var Eo = { parse: El, make: Ol };
  function Ll(n, t) {
    var e = {}, r = new U.Parser(n, t);
    return e.version = r.parseVersion(), e.ascender = r.parseShort(), e.descender = r.parseShort(), e.lineGap = r.parseShort(), e.advanceWidthMax = r.parseUShort(), e.minLeftSideBearing = r.parseShort(), e.minRightSideBearing = r.parseShort(), e.xMaxExtent = r.parseShort(), e.caretSlopeRise = r.parseShort(), e.caretSlopeRun = r.parseShort(), e.caretOffset = r.parseShort(), r.relativeOffset += 8, e.metricDataFormat = r.parseShort(), e.numberOfHMetrics = r.parseUShort(), e;
  }
  function _l(n) {
    return new O.Table("hhea", [
      { name: "version", type: "FIXED", value: 65536 },
      { name: "ascender", type: "FWORD", value: 0 },
      { name: "descender", type: "FWORD", value: 0 },
      { name: "lineGap", type: "FWORD", value: 0 },
      { name: "advanceWidthMax", type: "UFWORD", value: 0 },
      { name: "minLeftSideBearing", type: "FWORD", value: 0 },
      { name: "minRightSideBearing", type: "FWORD", value: 0 },
      { name: "xMaxExtent", type: "FWORD", value: 0 },
      { name: "caretSlopeRise", type: "SHORT", value: 1 },
      { name: "caretSlopeRun", type: "SHORT", value: 0 },
      { name: "caretOffset", type: "SHORT", value: 0 },
      { name: "reserved1", type: "SHORT", value: 0 },
      { name: "reserved2", type: "SHORT", value: 0 },
      { name: "reserved3", type: "SHORT", value: 0 },
      { name: "reserved4", type: "SHORT", value: 0 },
      { name: "metricDataFormat", type: "SHORT", value: 0 },
      { name: "numberOfHMetrics", type: "USHORT", value: 0 }
    ], n);
  }
  var Oo = { parse: Ll, make: _l };
  function Rl(n, t, e, r, s) {
    for (var i, a, o = new U.Parser(n, t), h = 0; h < r; h += 1) {
      h < e && (i = o.parseUShort(), a = o.parseShort());
      var u = s.get(h);
      u.advanceWidth = i, u.leftSideBearing = a;
    }
  }
  function Ul(n, t, e, r, s) {
    n._hmtxTableData = {};
    for (var i, a, o = new U.Parser(t, e), h = 0; h < s; h += 1)
      h < r && (i = o.parseUShort(), a = o.parseShort()), n._hmtxTableData[h] = {
        advanceWidth: i,
        leftSideBearing: a
      };
  }
  function Bl(n, t, e, r, s, i, a) {
    a.lowMemory ? Ul(n, t, e, r, s) : Rl(t, e, r, s, i);
  }
  function Pl(n) {
    for (var t = new O.Table("hmtx", []), e = 0; e < n.length; e += 1) {
      var r = n.get(e), s = r.advanceWidth || 0, i = r.leftSideBearing || 0;
      t.fields.push({ name: "advanceWidth_" + e, type: "USHORT", value: s }), t.fields.push({ name: "leftSideBearing_" + e, type: "SHORT", value: i });
    }
    return t;
  }
  var Lo = { parse: Bl, make: Pl };
  function zl(n) {
    for (var t = new O.Table("ltag", [
      { name: "version", type: "ULONG", value: 1 },
      { name: "flags", type: "ULONG", value: 0 },
      { name: "numTags", type: "ULONG", value: n.length }
    ]), e = "", r = 12 + n.length * 4, s = 0; s < n.length; ++s) {
      var i = e.indexOf(n[s]);
      i < 0 && (i = e.length, e += n[s]), t.fields.push({ name: "offset " + s, type: "USHORT", value: r + i }), t.fields.push({ name: "length " + s, type: "USHORT", value: n[s].length });
    }
    return t.fields.push({ name: "stringPool", type: "CHARARRAY", value: e }), t;
  }
  function Dl(n, t) {
    var e = new U.Parser(n, t), r = e.parseULong();
    N.argument(r === 1, "Unsupported ltag table version."), e.skip("uLong", 1);
    for (var s = e.parseULong(), i = [], a = 0; a < s; a++) {
      for (var o = "", h = t + e.parseUShort(), u = e.parseUShort(), l = h; l < h + u; ++l)
        o += String.fromCharCode(n.getInt8(l));
      i.push(o);
    }
    return i;
  }
  var _o = { make: zl, parse: Dl };
  function Il(n, t) {
    var e = {}, r = new U.Parser(n, t);
    return e.version = r.parseVersion(), e.numGlyphs = r.parseUShort(), e.version === 1 && (e.maxPoints = r.parseUShort(), e.maxContours = r.parseUShort(), e.maxCompositePoints = r.parseUShort(), e.maxCompositeContours = r.parseUShort(), e.maxZones = r.parseUShort(), e.maxTwilightPoints = r.parseUShort(), e.maxStorage = r.parseUShort(), e.maxFunctionDefs = r.parseUShort(), e.maxInstructionDefs = r.parseUShort(), e.maxStackElements = r.parseUShort(), e.maxSizeOfInstructions = r.parseUShort(), e.maxComponentElements = r.parseUShort(), e.maxComponentDepth = r.parseUShort()), e;
  }
  function Nl(n) {
    return new O.Table("maxp", [
      { name: "version", type: "FIXED", value: 20480 },
      { name: "numGlyphs", type: "USHORT", value: n }
    ]);
  }
  var Ro = { parse: Il, make: Nl }, Uo = [
    "copyright",
    // 0
    "fontFamily",
    // 1
    "fontSubfamily",
    // 2
    "uniqueID",
    // 3
    "fullName",
    // 4
    "version",
    // 5
    "postScriptName",
    // 6
    "trademark",
    // 7
    "manufacturer",
    // 8
    "designer",
    // 9
    "description",
    // 10
    "manufacturerURL",
    // 11
    "designerURL",
    // 12
    "license",
    // 13
    "licenseURL",
    // 14
    "reserved",
    // 15
    "preferredFamily",
    // 16
    "preferredSubfamily",
    // 17
    "compatibleFullName",
    // 18
    "sampleText",
    // 19
    "postScriptFindFontName",
    // 20
    "wwsFamily",
    // 21
    "wwsSubfamily"
    // 22
  ], Bo = {
    0: "en",
    1: "fr",
    2: "de",
    3: "it",
    4: "nl",
    5: "sv",
    6: "es",
    7: "da",
    8: "pt",
    9: "no",
    10: "he",
    11: "ja",
    12: "ar",
    13: "fi",
    14: "el",
    15: "is",
    16: "mt",
    17: "tr",
    18: "hr",
    19: "zh-Hant",
    20: "ur",
    21: "hi",
    22: "th",
    23: "ko",
    24: "lt",
    25: "pl",
    26: "hu",
    27: "es",
    28: "lv",
    29: "se",
    30: "fo",
    31: "fa",
    32: "ru",
    33: "zh",
    34: "nl-BE",
    35: "ga",
    36: "sq",
    37: "ro",
    38: "cz",
    39: "sk",
    40: "si",
    41: "yi",
    42: "sr",
    43: "mk",
    44: "bg",
    45: "uk",
    46: "be",
    47: "uz",
    48: "kk",
    49: "az-Cyrl",
    50: "az-Arab",
    51: "hy",
    52: "ka",
    53: "mo",
    54: "ky",
    55: "tg",
    56: "tk",
    57: "mn-CN",
    58: "mn",
    59: "ps",
    60: "ks",
    61: "ku",
    62: "sd",
    63: "bo",
    64: "ne",
    65: "sa",
    66: "mr",
    67: "bn",
    68: "as",
    69: "gu",
    70: "pa",
    71: "or",
    72: "ml",
    73: "kn",
    74: "ta",
    75: "te",
    76: "si",
    77: "my",
    78: "km",
    79: "lo",
    80: "vi",
    81: "id",
    82: "tl",
    83: "ms",
    84: "ms-Arab",
    85: "am",
    86: "ti",
    87: "om",
    88: "so",
    89: "sw",
    90: "rw",
    91: "rn",
    92: "ny",
    93: "mg",
    94: "eo",
    128: "cy",
    129: "eu",
    130: "ca",
    131: "la",
    132: "qu",
    133: "gn",
    134: "ay",
    135: "tt",
    136: "ug",
    137: "dz",
    138: "jv",
    139: "su",
    140: "gl",
    141: "af",
    142: "br",
    143: "iu",
    144: "gd",
    145: "gv",
    146: "ga",
    147: "to",
    148: "el-polyton",
    149: "kl",
    150: "az",
    151: "nn"
  }, Gl = {
    0: 0,
    // langEnglish → smRoman
    1: 0,
    // langFrench → smRoman
    2: 0,
    // langGerman → smRoman
    3: 0,
    // langItalian → smRoman
    4: 0,
    // langDutch → smRoman
    5: 0,
    // langSwedish → smRoman
    6: 0,
    // langSpanish → smRoman
    7: 0,
    // langDanish → smRoman
    8: 0,
    // langPortuguese → smRoman
    9: 0,
    // langNorwegian → smRoman
    10: 5,
    // langHebrew → smHebrew
    11: 1,
    // langJapanese → smJapanese
    12: 4,
    // langArabic → smArabic
    13: 0,
    // langFinnish → smRoman
    14: 6,
    // langGreek → smGreek
    15: 0,
    // langIcelandic → smRoman (modified)
    16: 0,
    // langMaltese → smRoman
    17: 0,
    // langTurkish → smRoman (modified)
    18: 0,
    // langCroatian → smRoman (modified)
    19: 2,
    // langTradChinese → smTradChinese
    20: 4,
    // langUrdu → smArabic
    21: 9,
    // langHindi → smDevanagari
    22: 21,
    // langThai → smThai
    23: 3,
    // langKorean → smKorean
    24: 29,
    // langLithuanian → smCentralEuroRoman
    25: 29,
    // langPolish → smCentralEuroRoman
    26: 29,
    // langHungarian → smCentralEuroRoman
    27: 29,
    // langEstonian → smCentralEuroRoman
    28: 29,
    // langLatvian → smCentralEuroRoman
    29: 0,
    // langSami → smRoman
    30: 0,
    // langFaroese → smRoman (modified)
    31: 4,
    // langFarsi → smArabic (modified)
    32: 7,
    // langRussian → smCyrillic
    33: 25,
    // langSimpChinese → smSimpChinese
    34: 0,
    // langFlemish → smRoman
    35: 0,
    // langIrishGaelic → smRoman (modified)
    36: 0,
    // langAlbanian → smRoman
    37: 0,
    // langRomanian → smRoman (modified)
    38: 29,
    // langCzech → smCentralEuroRoman
    39: 29,
    // langSlovak → smCentralEuroRoman
    40: 0,
    // langSlovenian → smRoman (modified)
    41: 5,
    // langYiddish → smHebrew
    42: 7,
    // langSerbian → smCyrillic
    43: 7,
    // langMacedonian → smCyrillic
    44: 7,
    // langBulgarian → smCyrillic
    45: 7,
    // langUkrainian → smCyrillic (modified)
    46: 7,
    // langByelorussian → smCyrillic
    47: 7,
    // langUzbek → smCyrillic
    48: 7,
    // langKazakh → smCyrillic
    49: 7,
    // langAzerbaijani → smCyrillic
    50: 4,
    // langAzerbaijanAr → smArabic
    51: 24,
    // langArmenian → smArmenian
    52: 23,
    // langGeorgian → smGeorgian
    53: 7,
    // langMoldavian → smCyrillic
    54: 7,
    // langKirghiz → smCyrillic
    55: 7,
    // langTajiki → smCyrillic
    56: 7,
    // langTurkmen → smCyrillic
    57: 27,
    // langMongolian → smMongolian
    58: 7,
    // langMongolianCyr → smCyrillic
    59: 4,
    // langPashto → smArabic
    60: 4,
    // langKurdish → smArabic
    61: 4,
    // langKashmiri → smArabic
    62: 4,
    // langSindhi → smArabic
    63: 26,
    // langTibetan → smTibetan
    64: 9,
    // langNepali → smDevanagari
    65: 9,
    // langSanskrit → smDevanagari
    66: 9,
    // langMarathi → smDevanagari
    67: 13,
    // langBengali → smBengali
    68: 13,
    // langAssamese → smBengali
    69: 11,
    // langGujarati → smGujarati
    70: 10,
    // langPunjabi → smGurmukhi
    71: 12,
    // langOriya → smOriya
    72: 17,
    // langMalayalam → smMalayalam
    73: 16,
    // langKannada → smKannada
    74: 14,
    // langTamil → smTamil
    75: 15,
    // langTelugu → smTelugu
    76: 18,
    // langSinhalese → smSinhalese
    77: 19,
    // langBurmese → smBurmese
    78: 20,
    // langKhmer → smKhmer
    79: 22,
    // langLao → smLao
    80: 30,
    // langVietnamese → smVietnamese
    81: 0,
    // langIndonesian → smRoman
    82: 0,
    // langTagalog → smRoman
    83: 0,
    // langMalayRoman → smRoman
    84: 4,
    // langMalayArabic → smArabic
    85: 28,
    // langAmharic → smEthiopic
    86: 28,
    // langTigrinya → smEthiopic
    87: 28,
    // langOromo → smEthiopic
    88: 0,
    // langSomali → smRoman
    89: 0,
    // langSwahili → smRoman
    90: 0,
    // langKinyarwanda → smRoman
    91: 0,
    // langRundi → smRoman
    92: 0,
    // langNyanja → smRoman
    93: 0,
    // langMalagasy → smRoman
    94: 0,
    // langEsperanto → smRoman
    128: 0,
    // langWelsh → smRoman (modified)
    129: 0,
    // langBasque → smRoman
    130: 0,
    // langCatalan → smRoman
    131: 0,
    // langLatin → smRoman
    132: 0,
    // langQuechua → smRoman
    133: 0,
    // langGuarani → smRoman
    134: 0,
    // langAymara → smRoman
    135: 7,
    // langTatar → smCyrillic
    136: 4,
    // langUighur → smArabic
    137: 26,
    // langDzongkha → smTibetan
    138: 0,
    // langJavaneseRom → smRoman
    139: 0,
    // langSundaneseRom → smRoman
    140: 0,
    // langGalician → smRoman
    141: 0,
    // langAfrikaans → smRoman
    142: 0,
    // langBreton → smRoman (modified)
    143: 28,
    // langInuktitut → smEthiopic (modified)
    144: 0,
    // langScottishGaelic → smRoman (modified)
    145: 0,
    // langManxGaelic → smRoman (modified)
    146: 0,
    // langIrishGaelicScript → smRoman (modified)
    147: 0,
    // langTongan → smRoman
    148: 6,
    // langGreekAncient → smRoman
    149: 0,
    // langGreenlandic → smRoman
    150: 0,
    // langAzerbaijanRoman → smRoman
    151: 0
    // langNynorsk → smRoman
  }, Po = {
    1078: "af",
    1052: "sq",
    1156: "gsw",
    1118: "am",
    5121: "ar-DZ",
    15361: "ar-BH",
    3073: "ar",
    2049: "ar-IQ",
    11265: "ar-JO",
    13313: "ar-KW",
    12289: "ar-LB",
    4097: "ar-LY",
    6145: "ary",
    8193: "ar-OM",
    16385: "ar-QA",
    1025: "ar-SA",
    10241: "ar-SY",
    7169: "aeb",
    14337: "ar-AE",
    9217: "ar-YE",
    1067: "hy",
    1101: "as",
    2092: "az-Cyrl",
    1068: "az",
    1133: "ba",
    1069: "eu",
    1059: "be",
    2117: "bn",
    1093: "bn-IN",
    8218: "bs-Cyrl",
    5146: "bs",
    1150: "br",
    1026: "bg",
    1027: "ca",
    3076: "zh-HK",
    5124: "zh-MO",
    2052: "zh",
    4100: "zh-SG",
    1028: "zh-TW",
    1155: "co",
    1050: "hr",
    4122: "hr-BA",
    1029: "cs",
    1030: "da",
    1164: "prs",
    1125: "dv",
    2067: "nl-BE",
    1043: "nl",
    3081: "en-AU",
    10249: "en-BZ",
    4105: "en-CA",
    9225: "en-029",
    16393: "en-IN",
    6153: "en-IE",
    8201: "en-JM",
    17417: "en-MY",
    5129: "en-NZ",
    13321: "en-PH",
    18441: "en-SG",
    7177: "en-ZA",
    11273: "en-TT",
    2057: "en-GB",
    1033: "en",
    12297: "en-ZW",
    1061: "et",
    1080: "fo",
    1124: "fil",
    1035: "fi",
    2060: "fr-BE",
    3084: "fr-CA",
    1036: "fr",
    5132: "fr-LU",
    6156: "fr-MC",
    4108: "fr-CH",
    1122: "fy",
    1110: "gl",
    1079: "ka",
    3079: "de-AT",
    1031: "de",
    5127: "de-LI",
    4103: "de-LU",
    2055: "de-CH",
    1032: "el",
    1135: "kl",
    1095: "gu",
    1128: "ha",
    1037: "he",
    1081: "hi",
    1038: "hu",
    1039: "is",
    1136: "ig",
    1057: "id",
    1117: "iu",
    2141: "iu-Latn",
    2108: "ga",
    1076: "xh",
    1077: "zu",
    1040: "it",
    2064: "it-CH",
    1041: "ja",
    1099: "kn",
    1087: "kk",
    1107: "km",
    1158: "quc",
    1159: "rw",
    1089: "sw",
    1111: "kok",
    1042: "ko",
    1088: "ky",
    1108: "lo",
    1062: "lv",
    1063: "lt",
    2094: "dsb",
    1134: "lb",
    1071: "mk",
    2110: "ms-BN",
    1086: "ms",
    1100: "ml",
    1082: "mt",
    1153: "mi",
    1146: "arn",
    1102: "mr",
    1148: "moh",
    1104: "mn",
    2128: "mn-CN",
    1121: "ne",
    1044: "nb",
    2068: "nn",
    1154: "oc",
    1096: "or",
    1123: "ps",
    1045: "pl",
    1046: "pt",
    2070: "pt-PT",
    1094: "pa",
    1131: "qu-BO",
    2155: "qu-EC",
    3179: "qu",
    1048: "ro",
    1047: "rm",
    1049: "ru",
    9275: "smn",
    4155: "smj-NO",
    5179: "smj",
    3131: "se-FI",
    1083: "se",
    2107: "se-SE",
    8251: "sms",
    6203: "sma-NO",
    7227: "sms",
    1103: "sa",
    7194: "sr-Cyrl-BA",
    3098: "sr",
    6170: "sr-Latn-BA",
    2074: "sr-Latn",
    1132: "nso",
    1074: "tn",
    1115: "si",
    1051: "sk",
    1060: "sl",
    11274: "es-AR",
    16394: "es-BO",
    13322: "es-CL",
    9226: "es-CO",
    5130: "es-CR",
    7178: "es-DO",
    12298: "es-EC",
    17418: "es-SV",
    4106: "es-GT",
    18442: "es-HN",
    2058: "es-MX",
    19466: "es-NI",
    6154: "es-PA",
    15370: "es-PY",
    10250: "es-PE",
    20490: "es-PR",
    // Microsoft has defined two different language codes for
    // “Spanish with modern sorting” and “Spanish with traditional
    // sorting”. This makes sense for collation APIs, and it would be
    // possible to express this in BCP 47 language tags via Unicode
    // extensions (eg., es-u-co-trad is Spanish with traditional
    // sorting). However, for storing names in fonts, the distinction
    // does not make sense, so we give “es” in both cases.
    3082: "es",
    1034: "es",
    21514: "es-US",
    14346: "es-UY",
    8202: "es-VE",
    2077: "sv-FI",
    1053: "sv",
    1114: "syr",
    1064: "tg",
    2143: "tzm",
    1097: "ta",
    1092: "tt",
    1098: "te",
    1054: "th",
    1105: "bo",
    1055: "tr",
    1090: "tk",
    1152: "ug",
    1058: "uk",
    1070: "hsb",
    1056: "ur",
    2115: "uz-Cyrl",
    1091: "uz",
    1066: "vi",
    1106: "cy",
    1160: "wo",
    1157: "sah",
    1144: "ii",
    1130: "yo"
  };
  function Hl(n, t, e) {
    switch (n) {
      case 0:
        if (t === 65535)
          return "und";
        if (e)
          return e[t];
        break;
      case 1:
        return Bo[t];
      case 3:
        return Po[t];
    }
  }
  var Bs = "utf-16", Wl = {
    0: "macintosh",
    // smRoman
    1: "x-mac-japanese",
    // smJapanese
    2: "x-mac-chinesetrad",
    // smTradChinese
    3: "x-mac-korean",
    // smKorean
    6: "x-mac-greek",
    // smGreek
    7: "x-mac-cyrillic",
    // smCyrillic
    9: "x-mac-devanagai",
    // smDevanagari
    10: "x-mac-gurmukhi",
    // smGurmukhi
    11: "x-mac-gujarati",
    // smGujarati
    12: "x-mac-oriya",
    // smOriya
    13: "x-mac-bengali",
    // smBengali
    14: "x-mac-tamil",
    // smTamil
    15: "x-mac-telugu",
    // smTelugu
    16: "x-mac-kannada",
    // smKannada
    17: "x-mac-malayalam",
    // smMalayalam
    18: "x-mac-sinhalese",
    // smSinhalese
    19: "x-mac-burmese",
    // smBurmese
    20: "x-mac-khmer",
    // smKhmer
    21: "x-mac-thai",
    // smThai
    22: "x-mac-lao",
    // smLao
    23: "x-mac-georgian",
    // smGeorgian
    24: "x-mac-armenian",
    // smArmenian
    25: "x-mac-chinesesimp",
    // smSimpChinese
    26: "x-mac-tibetan",
    // smTibetan
    27: "x-mac-mongolian",
    // smMongolian
    28: "x-mac-ethiopic",
    // smEthiopic
    29: "x-mac-ce",
    // smCentralEuroRoman
    30: "x-mac-vietnamese",
    // smVietnamese
    31: "x-mac-extarabic"
    // smExtArabic
  }, Vl = {
    15: "x-mac-icelandic",
    // langIcelandic
    17: "x-mac-turkish",
    // langTurkish
    18: "x-mac-croatian",
    // langCroatian
    24: "x-mac-ce",
    // langLithuanian
    25: "x-mac-ce",
    // langPolish
    26: "x-mac-ce",
    // langHungarian
    27: "x-mac-ce",
    // langEstonian
    28: "x-mac-ce",
    // langLatvian
    30: "x-mac-icelandic",
    // langFaroese
    37: "x-mac-romanian",
    // langRomanian
    38: "x-mac-ce",
    // langCzech
    39: "x-mac-ce",
    // langSlovak
    40: "x-mac-ce",
    // langSlovenian
    143: "x-mac-inuit",
    // langInuktitut
    146: "x-mac-gaelic"
    // langIrishGaelicScript
  };
  function zo(n, t, e) {
    switch (n) {
      case 0:
        return Bs;
      case 1:
        return Vl[e] || Wl[t];
      case 3:
        if (t === 1 || t === 10)
          return Bs;
        break;
    }
  }
  function ql(n, t, e) {
    for (var r = {}, s = new U.Parser(n, t), i = s.parseUShort(), a = s.parseUShort(), o = s.offset + s.parseUShort(), h = 0; h < a; h++) {
      var u = s.parseUShort(), l = s.parseUShort(), f = s.parseUShort(), c = s.parseUShort(), p = Uo[c] || c, d = s.parseUShort(), g = s.parseUShort(), y = Hl(u, f, e), m = zo(u, l, f);
      if (m !== void 0 && y !== void 0) {
        var b = void 0;
        if (m === Bs ? b = nr.UTF16(n, o + g, d) : b = nr.MACSTRING(n, o + g, d, m), b) {
          var v = r[p];
          v === void 0 && (v = r[p] = {}), v[y] = b;
        }
      }
    }
    return i === 1 && s.parseUShort(), r;
  }
  function as(n) {
    var t = {};
    for (var e in n)
      t[n[e]] = parseInt(e);
    return t;
  }
  function sa(n, t, e, r, s, i) {
    return new O.Record("NameRecord", [
      { name: "platformID", type: "USHORT", value: n },
      { name: "encodingID", type: "USHORT", value: t },
      { name: "languageID", type: "USHORT", value: e },
      { name: "nameID", type: "USHORT", value: r },
      { name: "length", type: "USHORT", value: s },
      { name: "offset", type: "USHORT", value: i }
    ]);
  }
  function Xl(n, t) {
    var e = n.length, r = t.length - e + 1;
    t:
      for (var s = 0; s < r; s++)
        for (; s < r; s++) {
          for (var i = 0; i < e; i++)
            if (t[s + i] !== n[i])
              continue t;
          return s;
        }
    return -1;
  }
  function ia(n, t) {
    var e = Xl(n, t);
    if (e < 0) {
      e = t.length;
      for (var r = 0, s = n.length; r < s; ++r)
        t.push(n[r]);
    }
    return e;
  }
  function Zl(n, t) {
    var e, r = [], s = {}, i = as(Uo);
    for (var a in n) {
      var o = i[a];
      if (o === void 0 && (o = a), e = parseInt(o), isNaN(e))
        throw new Error('Name table entry "' + a + '" does not exist, see nameTableNames for complete list.');
      s[e] = n[a], r.push(e);
    }
    for (var h = as(Bo), u = as(Po), l = [], f = [], c = 0; c < r.length; c++) {
      e = r[c];
      var p = s[e];
      for (var d in p) {
        var g = p[d], y = 1, m = h[d], b = Gl[m], v = zo(y, b, m), x = A.MACSTRING(g, v);
        x === void 0 && (y = 0, m = t.indexOf(d), m < 0 && (m = t.length, t.push(d)), b = 4, x = A.UTF16(g));
        var F = ia(x, f);
        l.push(sa(
          y,
          b,
          m,
          e,
          x.length,
          F
        ));
        var C = u[d];
        if (C !== void 0) {
          var T = A.UTF16(g), k = ia(T, f);
          l.push(sa(
            3,
            1,
            C,
            e,
            T.length,
            k
          ));
        }
      }
    }
    l.sort(function(I, rt) {
      return I.platformID - rt.platformID || I.encodingID - rt.encodingID || I.languageID - rt.languageID || I.nameID - rt.nameID;
    });
    for (var B = new O.Table("name", [
      { name: "format", type: "USHORT", value: 0 },
      { name: "count", type: "USHORT", value: l.length },
      { name: "stringOffset", type: "USHORT", value: 6 + l.length * 12 }
    ]), P = 0; P < l.length; P++)
      B.fields.push({ name: "record_" + P, type: "RECORD", value: l[P] });
    return B.fields.push({ name: "strings", type: "LITERAL", value: f }), B;
  }
  var Do = { parse: ql, make: Zl }, Ps = [
    { begin: 0, end: 127 },
    // Basic Latin
    { begin: 128, end: 255 },
    // Latin-1 Supplement
    { begin: 256, end: 383 },
    // Latin Extended-A
    { begin: 384, end: 591 },
    // Latin Extended-B
    { begin: 592, end: 687 },
    // IPA Extensions
    { begin: 688, end: 767 },
    // Spacing Modifier Letters
    { begin: 768, end: 879 },
    // Combining Diacritical Marks
    { begin: 880, end: 1023 },
    // Greek and Coptic
    { begin: 11392, end: 11519 },
    // Coptic
    { begin: 1024, end: 1279 },
    // Cyrillic
    { begin: 1328, end: 1423 },
    // Armenian
    { begin: 1424, end: 1535 },
    // Hebrew
    { begin: 42240, end: 42559 },
    // Vai
    { begin: 1536, end: 1791 },
    // Arabic
    { begin: 1984, end: 2047 },
    // NKo
    { begin: 2304, end: 2431 },
    // Devanagari
    { begin: 2432, end: 2559 },
    // Bengali
    { begin: 2560, end: 2687 },
    // Gurmukhi
    { begin: 2688, end: 2815 },
    // Gujarati
    { begin: 2816, end: 2943 },
    // Oriya
    { begin: 2944, end: 3071 },
    // Tamil
    { begin: 3072, end: 3199 },
    // Telugu
    { begin: 3200, end: 3327 },
    // Kannada
    { begin: 3328, end: 3455 },
    // Malayalam
    { begin: 3584, end: 3711 },
    // Thai
    { begin: 3712, end: 3839 },
    // Lao
    { begin: 4256, end: 4351 },
    // Georgian
    { begin: 6912, end: 7039 },
    // Balinese
    { begin: 4352, end: 4607 },
    // Hangul Jamo
    { begin: 7680, end: 7935 },
    // Latin Extended Additional
    { begin: 7936, end: 8191 },
    // Greek Extended
    { begin: 8192, end: 8303 },
    // General Punctuation
    { begin: 8304, end: 8351 },
    // Superscripts And Subscripts
    { begin: 8352, end: 8399 },
    // Currency Symbol
    { begin: 8400, end: 8447 },
    // Combining Diacritical Marks For Symbols
    { begin: 8448, end: 8527 },
    // Letterlike Symbols
    { begin: 8528, end: 8591 },
    // Number Forms
    { begin: 8592, end: 8703 },
    // Arrows
    { begin: 8704, end: 8959 },
    // Mathematical Operators
    { begin: 8960, end: 9215 },
    // Miscellaneous Technical
    { begin: 9216, end: 9279 },
    // Control Pictures
    { begin: 9280, end: 9311 },
    // Optical Character Recognition
    { begin: 9312, end: 9471 },
    // Enclosed Alphanumerics
    { begin: 9472, end: 9599 },
    // Box Drawing
    { begin: 9600, end: 9631 },
    // Block Elements
    { begin: 9632, end: 9727 },
    // Geometric Shapes
    { begin: 9728, end: 9983 },
    // Miscellaneous Symbols
    { begin: 9984, end: 10175 },
    // Dingbats
    { begin: 12288, end: 12351 },
    // CJK Symbols And Punctuation
    { begin: 12352, end: 12447 },
    // Hiragana
    { begin: 12448, end: 12543 },
    // Katakana
    { begin: 12544, end: 12591 },
    // Bopomofo
    { begin: 12592, end: 12687 },
    // Hangul Compatibility Jamo
    { begin: 43072, end: 43135 },
    // Phags-pa
    { begin: 12800, end: 13055 },
    // Enclosed CJK Letters And Months
    { begin: 13056, end: 13311 },
    // CJK Compatibility
    { begin: 44032, end: 55215 },
    // Hangul Syllables
    { begin: 55296, end: 57343 },
    // Non-Plane 0 *
    { begin: 67840, end: 67871 },
    // Phoenicia
    { begin: 19968, end: 40959 },
    // CJK Unified Ideographs
    { begin: 57344, end: 63743 },
    // Private Use Area (plane 0)
    { begin: 12736, end: 12783 },
    // CJK Strokes
    { begin: 64256, end: 64335 },
    // Alphabetic Presentation Forms
    { begin: 64336, end: 65023 },
    // Arabic Presentation Forms-A
    { begin: 65056, end: 65071 },
    // Combining Half Marks
    { begin: 65040, end: 65055 },
    // Vertical Forms
    { begin: 65104, end: 65135 },
    // Small Form Variants
    { begin: 65136, end: 65279 },
    // Arabic Presentation Forms-B
    { begin: 65280, end: 65519 },
    // Halfwidth And Fullwidth Forms
    { begin: 65520, end: 65535 },
    // Specials
    { begin: 3840, end: 4095 },
    // Tibetan
    { begin: 1792, end: 1871 },
    // Syriac
    { begin: 1920, end: 1983 },
    // Thaana
    { begin: 3456, end: 3583 },
    // Sinhala
    { begin: 4096, end: 4255 },
    // Myanmar
    { begin: 4608, end: 4991 },
    // Ethiopic
    { begin: 5024, end: 5119 },
    // Cherokee
    { begin: 5120, end: 5759 },
    // Unified Canadian Aboriginal Syllabics
    { begin: 5760, end: 5791 },
    // Ogham
    { begin: 5792, end: 5887 },
    // Runic
    { begin: 6016, end: 6143 },
    // Khmer
    { begin: 6144, end: 6319 },
    // Mongolian
    { begin: 10240, end: 10495 },
    // Braille Patterns
    { begin: 40960, end: 42127 },
    // Yi Syllables
    { begin: 5888, end: 5919 },
    // Tagalog
    { begin: 66304, end: 66351 },
    // Old Italic
    { begin: 66352, end: 66383 },
    // Gothic
    { begin: 66560, end: 66639 },
    // Deseret
    { begin: 118784, end: 119039 },
    // Byzantine Musical Symbols
    { begin: 119808, end: 120831 },
    // Mathematical Alphanumeric Symbols
    { begin: 1044480, end: 1048573 },
    // Private Use (plane 15)
    { begin: 65024, end: 65039 },
    // Variation Selectors
    { begin: 917504, end: 917631 },
    // Tags
    { begin: 6400, end: 6479 },
    // Limbu
    { begin: 6480, end: 6527 },
    // Tai Le
    { begin: 6528, end: 6623 },
    // New Tai Lue
    { begin: 6656, end: 6687 },
    // Buginese
    { begin: 11264, end: 11359 },
    // Glagolitic
    { begin: 11568, end: 11647 },
    // Tifinagh
    { begin: 19904, end: 19967 },
    // Yijing Hexagram Symbols
    { begin: 43008, end: 43055 },
    // Syloti Nagri
    { begin: 65536, end: 65663 },
    // Linear B Syllabary
    { begin: 65856, end: 65935 },
    // Ancient Greek Numbers
    { begin: 66432, end: 66463 },
    // Ugaritic
    { begin: 66464, end: 66527 },
    // Old Persian
    { begin: 66640, end: 66687 },
    // Shavian
    { begin: 66688, end: 66735 },
    // Osmanya
    { begin: 67584, end: 67647 },
    // Cypriot Syllabary
    { begin: 68096, end: 68191 },
    // Kharoshthi
    { begin: 119552, end: 119647 },
    // Tai Xuan Jing Symbols
    { begin: 73728, end: 74751 },
    // Cuneiform
    { begin: 119648, end: 119679 },
    // Counting Rod Numerals
    { begin: 7040, end: 7103 },
    // Sundanese
    { begin: 7168, end: 7247 },
    // Lepcha
    { begin: 7248, end: 7295 },
    // Ol Chiki
    { begin: 43136, end: 43231 },
    // Saurashtra
    { begin: 43264, end: 43311 },
    // Kayah Li
    { begin: 43312, end: 43359 },
    // Rejang
    { begin: 43520, end: 43615 },
    // Cham
    { begin: 65936, end: 65999 },
    // Ancient Symbols
    { begin: 66e3, end: 66047 },
    // Phaistos Disc
    { begin: 66208, end: 66271 },
    // Carian
    { begin: 127024, end: 127135 }
    // Domino Tiles
  ];
  function Yl(n) {
    for (var t = 0; t < Ps.length; t += 1) {
      var e = Ps[t];
      if (n >= e.begin && n < e.end)
        return t;
    }
    return -1;
  }
  function Jl(n, t) {
    var e = {}, r = new U.Parser(n, t);
    e.version = r.parseUShort(), e.xAvgCharWidth = r.parseShort(), e.usWeightClass = r.parseUShort(), e.usWidthClass = r.parseUShort(), e.fsType = r.parseUShort(), e.ySubscriptXSize = r.parseShort(), e.ySubscriptYSize = r.parseShort(), e.ySubscriptXOffset = r.parseShort(), e.ySubscriptYOffset = r.parseShort(), e.ySuperscriptXSize = r.parseShort(), e.ySuperscriptYSize = r.parseShort(), e.ySuperscriptXOffset = r.parseShort(), e.ySuperscriptYOffset = r.parseShort(), e.yStrikeoutSize = r.parseShort(), e.yStrikeoutPosition = r.parseShort(), e.sFamilyClass = r.parseShort(), e.panose = [];
    for (var s = 0; s < 10; s++)
      e.panose[s] = r.parseByte();
    return e.ulUnicodeRange1 = r.parseULong(), e.ulUnicodeRange2 = r.parseULong(), e.ulUnicodeRange3 = r.parseULong(), e.ulUnicodeRange4 = r.parseULong(), e.achVendID = String.fromCharCode(r.parseByte(), r.parseByte(), r.parseByte(), r.parseByte()), e.fsSelection = r.parseUShort(), e.usFirstCharIndex = r.parseUShort(), e.usLastCharIndex = r.parseUShort(), e.sTypoAscender = r.parseShort(), e.sTypoDescender = r.parseShort(), e.sTypoLineGap = r.parseShort(), e.usWinAscent = r.parseUShort(), e.usWinDescent = r.parseUShort(), e.version >= 1 && (e.ulCodePageRange1 = r.parseULong(), e.ulCodePageRange2 = r.parseULong()), e.version >= 2 && (e.sxHeight = r.parseShort(), e.sCapHeight = r.parseShort(), e.usDefaultChar = r.parseUShort(), e.usBreakChar = r.parseUShort(), e.usMaxContent = r.parseUShort()), e;
  }
  function $l(n) {
    return new O.Table("OS/2", [
      { name: "version", type: "USHORT", value: 3 },
      { name: "xAvgCharWidth", type: "SHORT", value: 0 },
      { name: "usWeightClass", type: "USHORT", value: 0 },
      { name: "usWidthClass", type: "USHORT", value: 0 },
      { name: "fsType", type: "USHORT", value: 0 },
      { name: "ySubscriptXSize", type: "SHORT", value: 650 },
      { name: "ySubscriptYSize", type: "SHORT", value: 699 },
      { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
      { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
      { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
      { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
      { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
      { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
      { name: "yStrikeoutSize", type: "SHORT", value: 49 },
      { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
      { name: "sFamilyClass", type: "SHORT", value: 0 },
      { name: "bFamilyType", type: "BYTE", value: 0 },
      { name: "bSerifStyle", type: "BYTE", value: 0 },
      { name: "bWeight", type: "BYTE", value: 0 },
      { name: "bProportion", type: "BYTE", value: 0 },
      { name: "bContrast", type: "BYTE", value: 0 },
      { name: "bStrokeVariation", type: "BYTE", value: 0 },
      { name: "bArmStyle", type: "BYTE", value: 0 },
      { name: "bLetterform", type: "BYTE", value: 0 },
      { name: "bMidline", type: "BYTE", value: 0 },
      { name: "bXHeight", type: "BYTE", value: 0 },
      { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
      { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
      { name: "fsSelection", type: "USHORT", value: 0 },
      { name: "usFirstCharIndex", type: "USHORT", value: 0 },
      { name: "usLastCharIndex", type: "USHORT", value: 0 },
      { name: "sTypoAscender", type: "SHORT", value: 0 },
      { name: "sTypoDescender", type: "SHORT", value: 0 },
      { name: "sTypoLineGap", type: "SHORT", value: 0 },
      { name: "usWinAscent", type: "USHORT", value: 0 },
      { name: "usWinDescent", type: "USHORT", value: 0 },
      { name: "ulCodePageRange1", type: "ULONG", value: 0 },
      { name: "ulCodePageRange2", type: "ULONG", value: 0 },
      { name: "sxHeight", type: "SHORT", value: 0 },
      { name: "sCapHeight", type: "SHORT", value: 0 },
      { name: "usDefaultChar", type: "USHORT", value: 0 },
      { name: "usBreakChar", type: "USHORT", value: 0 },
      { name: "usMaxContext", type: "USHORT", value: 0 }
    ], n);
  }
  var zs = { parse: Jl, make: $l, unicodeRanges: Ps, getUnicodeRange: Yl };
  function Ql(n, t) {
    var e = {}, r = new U.Parser(n, t);
    switch (e.version = r.parseVersion(), e.italicAngle = r.parseFixed(), e.underlinePosition = r.parseShort(), e.underlineThickness = r.parseShort(), e.isFixedPitch = r.parseULong(), e.minMemType42 = r.parseULong(), e.maxMemType42 = r.parseULong(), e.minMemType1 = r.parseULong(), e.maxMemType1 = r.parseULong(), e.version) {
      case 1:
        e.names = Oe.slice();
        break;
      case 2:
        e.numberOfGlyphs = r.parseUShort(), e.glyphNameIndex = new Array(e.numberOfGlyphs);
        for (var s = 0; s < e.numberOfGlyphs; s++)
          e.glyphNameIndex[s] = r.parseUShort();
        e.names = [];
        for (var i = 0; i < e.numberOfGlyphs; i++)
          if (e.glyphNameIndex[i] >= Oe.length) {
            var a = r.parseChar();
            e.names.push(r.parseString(a));
          }
        break;
      case 2.5:
        e.numberOfGlyphs = r.parseUShort(), e.offset = new Array(e.numberOfGlyphs);
        for (var o = 0; o < e.numberOfGlyphs; o++)
          e.offset[o] = r.parseChar();
        break;
    }
    return e;
  }
  function jl() {
    return new O.Table("post", [
      { name: "version", type: "FIXED", value: 196608 },
      { name: "italicAngle", type: "FIXED", value: 0 },
      { name: "underlinePosition", type: "FWORD", value: 0 },
      { name: "underlineThickness", type: "FWORD", value: 0 },
      { name: "isFixedPitch", type: "ULONG", value: 0 },
      { name: "minMemType42", type: "ULONG", value: 0 },
      { name: "maxMemType42", type: "ULONG", value: 0 },
      { name: "minMemType1", type: "ULONG", value: 0 },
      { name: "maxMemType1", type: "ULONG", value: 0 }
    ]);
  }
  var Io = { parse: Ql, make: jl }, It = new Array(9);
  It[1] = function() {
    var t = this.offset + this.relativeOffset, e = this.parseUShort();
    if (e === 1)
      return {
        substFormat: 1,
        coverage: this.parsePointer(S.coverage),
        deltaGlyphId: this.parseUShort()
      };
    if (e === 2)
      return {
        substFormat: 2,
        coverage: this.parsePointer(S.coverage),
        substitute: this.parseOffset16List()
      };
    N.assert(!1, "0x" + t.toString(16) + ": lookup type 1 format must be 1 or 2.");
  };
  It[2] = function() {
    var t = this.parseUShort();
    return N.argument(t === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
      substFormat: t,
      coverage: this.parsePointer(S.coverage),
      sequences: this.parseListOfLists()
    };
  };
  It[3] = function() {
    var t = this.parseUShort();
    return N.argument(t === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
      substFormat: t,
      coverage: this.parsePointer(S.coverage),
      alternateSets: this.parseListOfLists()
    };
  };
  It[4] = function() {
    var t = this.parseUShort();
    return N.argument(t === 1, "GSUB ligature table identifier-format must be 1"), {
      substFormat: t,
      coverage: this.parsePointer(S.coverage),
      ligatureSets: this.parseListOfLists(function() {
        return {
          ligGlyph: this.parseUShort(),
          components: this.parseUShortList(this.parseUShort() - 1)
        };
      })
    };
  };
  var er = {
    sequenceIndex: S.uShort,
    lookupListIndex: S.uShort
  };
  It[5] = function() {
    var t = this.offset + this.relativeOffset, e = this.parseUShort();
    if (e === 1)
      return {
        substFormat: e,
        coverage: this.parsePointer(S.coverage),
        ruleSets: this.parseListOfLists(function() {
          var i = this.parseUShort(), a = this.parseUShort();
          return {
            input: this.parseUShortList(i - 1),
            lookupRecords: this.parseRecordList(a, er)
          };
        })
      };
    if (e === 2)
      return {
        substFormat: e,
        coverage: this.parsePointer(S.coverage),
        classDef: this.parsePointer(S.classDef),
        classSets: this.parseListOfLists(function() {
          var i = this.parseUShort(), a = this.parseUShort();
          return {
            classes: this.parseUShortList(i - 1),
            lookupRecords: this.parseRecordList(a, er)
          };
        })
      };
    if (e === 3) {
      var r = this.parseUShort(), s = this.parseUShort();
      return {
        substFormat: e,
        coverages: this.parseList(r, S.pointer(S.coverage)),
        lookupRecords: this.parseRecordList(s, er)
      };
    }
    N.assert(!1, "0x" + t.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
  };
  It[6] = function() {
    var t = this.offset + this.relativeOffset, e = this.parseUShort();
    if (e === 1)
      return {
        substFormat: 1,
        coverage: this.parsePointer(S.coverage),
        chainRuleSets: this.parseListOfLists(function() {
          return {
            backtrack: this.parseUShortList(),
            input: this.parseUShortList(this.parseShort() - 1),
            lookahead: this.parseUShortList(),
            lookupRecords: this.parseRecordList(er)
          };
        })
      };
    if (e === 2)
      return {
        substFormat: 2,
        coverage: this.parsePointer(S.coverage),
        backtrackClassDef: this.parsePointer(S.classDef),
        inputClassDef: this.parsePointer(S.classDef),
        lookaheadClassDef: this.parsePointer(S.classDef),
        chainClassSet: this.parseListOfLists(function() {
          return {
            backtrack: this.parseUShortList(),
            input: this.parseUShortList(this.parseShort() - 1),
            lookahead: this.parseUShortList(),
            lookupRecords: this.parseRecordList(er)
          };
        })
      };
    if (e === 3)
      return {
        substFormat: 3,
        backtrackCoverage: this.parseList(S.pointer(S.coverage)),
        inputCoverage: this.parseList(S.pointer(S.coverage)),
        lookaheadCoverage: this.parseList(S.pointer(S.coverage)),
        lookupRecords: this.parseRecordList(er)
      };
    N.assert(!1, "0x" + t.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
  };
  It[7] = function() {
    var t = this.parseUShort();
    N.argument(t === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
    var e = this.parseUShort(), r = new S(this.data, this.offset + this.parseULong());
    return {
      substFormat: 1,
      lookupType: e,
      extension: It[e].call(r)
    };
  };
  It[8] = function() {
    var t = this.parseUShort();
    return N.argument(t === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
      substFormat: t,
      coverage: this.parsePointer(S.coverage),
      backtrackCoverage: this.parseList(S.pointer(S.coverage)),
      lookaheadCoverage: this.parseList(S.pointer(S.coverage)),
      substitutes: this.parseUShortList()
    };
  };
  function Kl(n, t) {
    t = t || 0;
    var e = new S(n, t), r = e.parseVersion(1);
    return N.argument(r === 1 || r === 1.1, "Unsupported GSUB table version."), r === 1 ? {
      version: r,
      scripts: e.parseScriptList(),
      features: e.parseFeatureList(),
      lookups: e.parseLookupList(It)
    } : {
      version: r,
      scripts: e.parseScriptList(),
      features: e.parseFeatureList(),
      lookups: e.parseLookupList(It),
      variations: e.parseFeatureVariationsList()
    };
  }
  var ar = new Array(9);
  ar[1] = function(t) {
    return t.substFormat === 1 ? new O.Table("substitutionTable", [
      { name: "substFormat", type: "USHORT", value: 1 },
      { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) },
      { name: "deltaGlyphID", type: "USHORT", value: t.deltaGlyphId }
    ]) : new O.Table("substitutionTable", [
      { name: "substFormat", type: "USHORT", value: 2 },
      { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) }
    ].concat(O.ushortList("substitute", t.substitute)));
  };
  ar[2] = function(t) {
    return N.assert(t.substFormat === 1, "Lookup type 2 substFormat must be 1."), new O.Table("substitutionTable", [
      { name: "substFormat", type: "USHORT", value: 1 },
      { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) }
    ].concat(O.tableList("seqSet", t.sequences, function(e) {
      return new O.Table("sequenceSetTable", O.ushortList("sequence", e));
    })));
  };
  ar[3] = function(t) {
    return N.assert(t.substFormat === 1, "Lookup type 3 substFormat must be 1."), new O.Table("substitutionTable", [
      { name: "substFormat", type: "USHORT", value: 1 },
      { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) }
    ].concat(O.tableList("altSet", t.alternateSets, function(e) {
      return new O.Table("alternateSetTable", O.ushortList("alternate", e));
    })));
  };
  ar[4] = function(t) {
    return N.assert(t.substFormat === 1, "Lookup type 4 substFormat must be 1."), new O.Table("substitutionTable", [
      { name: "substFormat", type: "USHORT", value: 1 },
      { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) }
    ].concat(O.tableList("ligSet", t.ligatureSets, function(e) {
      return new O.Table("ligatureSetTable", O.tableList("ligature", e, function(r) {
        return new O.Table(
          "ligatureTable",
          [{ name: "ligGlyph", type: "USHORT", value: r.ligGlyph }].concat(O.ushortList("component", r.components, r.components.length + 1))
        );
      }));
    })));
  };
  ar[6] = function(t) {
    if (t.substFormat === 1) {
      var e = new O.Table("chainContextTable", [
        { name: "substFormat", type: "USHORT", value: t.substFormat },
        { name: "coverage", type: "TABLE", value: new O.Coverage(t.coverage) }
      ].concat(O.tableList("chainRuleSet", t.chainRuleSets, function(i) {
        return new O.Table("chainRuleSetTable", O.tableList("chainRule", i, function(a) {
          var o = O.ushortList("backtrackGlyph", a.backtrack, a.backtrack.length).concat(O.ushortList("inputGlyph", a.input, a.input.length + 1)).concat(O.ushortList("lookaheadGlyph", a.lookahead, a.lookahead.length)).concat(O.ushortList("substitution", [], a.lookupRecords.length));
          return a.lookupRecords.forEach(function(h, u) {
            o = o.concat({ name: "sequenceIndex" + u, type: "USHORT", value: h.sequenceIndex }).concat({ name: "lookupListIndex" + u, type: "USHORT", value: h.lookupListIndex });
          }), new O.Table("chainRuleTable", o);
        }));
      })));
      return e;
    } else if (t.substFormat === 2)
      N.assert(!1, "lookup type 6 format 2 is not yet supported.");
    else if (t.substFormat === 3) {
      var r = [
        { name: "substFormat", type: "USHORT", value: t.substFormat }
      ];
      r.push({ name: "backtrackGlyphCount", type: "USHORT", value: t.backtrackCoverage.length }), t.backtrackCoverage.forEach(function(i, a) {
        r.push({ name: "backtrackCoverage" + a, type: "TABLE", value: new O.Coverage(i) });
      }), r.push({ name: "inputGlyphCount", type: "USHORT", value: t.inputCoverage.length }), t.inputCoverage.forEach(function(i, a) {
        r.push({ name: "inputCoverage" + a, type: "TABLE", value: new O.Coverage(i) });
      }), r.push({ name: "lookaheadGlyphCount", type: "USHORT", value: t.lookaheadCoverage.length }), t.lookaheadCoverage.forEach(function(i, a) {
        r.push({ name: "lookaheadCoverage" + a, type: "TABLE", value: new O.Coverage(i) });
      }), r.push({ name: "substitutionCount", type: "USHORT", value: t.lookupRecords.length }), t.lookupRecords.forEach(function(i, a) {
        r = r.concat({ name: "sequenceIndex" + a, type: "USHORT", value: i.sequenceIndex }).concat({ name: "lookupListIndex" + a, type: "USHORT", value: i.lookupListIndex });
      });
      var s = new O.Table("chainContextTable", r);
      return s;
    }
    N.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
  };
  function tc(n) {
    return new O.Table("GSUB", [
      { name: "version", type: "ULONG", value: 65536 },
      { name: "scripts", type: "TABLE", value: new O.ScriptList(n.scripts) },
      { name: "features", type: "TABLE", value: new O.FeatureList(n.features) },
      { name: "lookups", type: "TABLE", value: new O.LookupList(n.lookups, ar) }
    ]);
  }
  var No = { parse: Kl, make: tc };
  function ec(n, t) {
    var e = new U.Parser(n, t), r = e.parseULong();
    N.argument(r === 1, "Unsupported META table version."), e.parseULong(), e.parseULong();
    for (var s = e.parseULong(), i = {}, a = 0; a < s; a++) {
      var o = e.parseTag(), h = e.parseULong(), u = e.parseULong(), l = nr.UTF8(n, t + h, u);
      i[o] = l;
    }
    return i;
  }
  function rc(n) {
    var t = Object.keys(n).length, e = "", r = 16 + t * 12, s = new O.Table("meta", [
      { name: "version", type: "ULONG", value: 1 },
      { name: "flags", type: "ULONG", value: 0 },
      { name: "offset", type: "ULONG", value: r },
      { name: "numTags", type: "ULONG", value: t }
    ]);
    for (var i in n) {
      var a = e.length;
      e += n[i], s.fields.push({ name: "tag " + i, type: "TAG", value: i }), s.fields.push({ name: "offset " + i, type: "ULONG", value: r + a }), s.fields.push({ name: "length " + i, type: "ULONG", value: n[i].length });
    }
    return s.fields.push({ name: "stringPool", type: "CHARARRAY", value: e }), s;
  }
  var Go = { parse: ec, make: rc };
  function aa(n) {
    return Math.log(n) / Math.log(2) | 0;
  }
  function Qs(n) {
    for (; n.length % 4 !== 0; )
      n.push(0);
    for (var t = 0, e = 0; e < n.length; e += 4)
      t += (n[e] << 24) + (n[e + 1] << 16) + (n[e + 2] << 8) + n[e + 3];
    return t %= Math.pow(2, 32), t;
  }
  function oa(n, t, e, r) {
    return new O.Record("Table Record", [
      { name: "tag", type: "TAG", value: n !== void 0 ? n : "" },
      { name: "checkSum", type: "ULONG", value: t !== void 0 ? t : 0 },
      { name: "offset", type: "ULONG", value: e !== void 0 ? e : 0 },
      { name: "length", type: "ULONG", value: r !== void 0 ? r : 0 }
    ]);
  }
  function Ho(n) {
    var t = new O.Table("sfnt", [
      { name: "version", type: "TAG", value: "OTTO" },
      { name: "numTables", type: "USHORT", value: 0 },
      { name: "searchRange", type: "USHORT", value: 0 },
      { name: "entrySelector", type: "USHORT", value: 0 },
      { name: "rangeShift", type: "USHORT", value: 0 }
    ]);
    t.tables = n, t.numTables = n.length;
    var e = Math.pow(2, aa(t.numTables));
    t.searchRange = 16 * e, t.entrySelector = aa(e), t.rangeShift = t.numTables * 16 - t.searchRange;
    for (var r = [], s = [], i = t.sizeOf() + oa().sizeOf() * t.numTables; i % 4 !== 0; )
      i += 1, s.push({ name: "padding", type: "BYTE", value: 0 });
    for (var a = 0; a < n.length; a += 1) {
      var o = n[a];
      N.argument(o.tableName.length === 4, "Table name" + o.tableName + " is invalid.");
      var h = o.sizeOf(), u = oa(o.tableName, Qs(o.encode()), i, h);
      for (r.push({ name: u.tag + " Table Record", type: "RECORD", value: u }), s.push({ name: o.tableName + " table", type: "RECORD", value: o }), i += h, N.argument(!isNaN(i), "Something went wrong calculating the offset."); i % 4 !== 0; )
        i += 1, s.push({ name: "padding", type: "BYTE", value: 0 });
    }
    return r.sort(function(l, f) {
      return l.value.tag > f.value.tag ? 1 : -1;
    }), t.fields = t.fields.concat(r), t.fields = t.fields.concat(s), t;
  }
  function ha(n, t, e) {
    for (var r = 0; r < t.length; r += 1) {
      var s = n.charToGlyphIndex(t[r]);
      if (s > 0) {
        var i = n.glyphs.get(s);
        return i.getMetrics();
      }
    }
    return e;
  }
  function nc(n) {
    for (var t = 0, e = 0; e < n.length; e += 1)
      t += n[e];
    return t / n.length;
  }
  function sc(n) {
    for (var t = [], e = [], r = [], s = [], i = [], a = [], o = [], h, u = 0, l = 0, f = 0, c = 0, p = 0, d = 0; d < n.glyphs.length; d += 1) {
      var g = n.glyphs.get(d), y = g.unicode | 0;
      if (isNaN(g.advanceWidth))
        throw new Error("Glyph " + g.name + " (" + d + "): advanceWidth is not a number.");
      (h > y || h === void 0) && y > 0 && (h = y), u < y && (u = y);
      var m = zs.getUnicodeRange(y);
      if (m < 32)
        l |= 1 << m;
      else if (m < 64)
        f |= 1 << m - 32;
      else if (m < 96)
        c |= 1 << m - 64;
      else if (m < 123)
        p |= 1 << m - 96;
      else
        throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
      if (g.name !== ".notdef") {
        var b = g.getMetrics();
        t.push(b.xMin), e.push(b.yMin), r.push(b.xMax), s.push(b.yMax), a.push(b.leftSideBearing), o.push(b.rightSideBearing), i.push(g.advanceWidth);
      }
    }
    var v = {
      xMin: Math.min.apply(null, t),
      yMin: Math.min.apply(null, e),
      xMax: Math.max.apply(null, r),
      yMax: Math.max.apply(null, s),
      advanceWidthMax: Math.max.apply(null, i),
      advanceWidthAvg: nc(i),
      minLeftSideBearing: Math.min.apply(null, a),
      maxLeftSideBearing: Math.max.apply(null, a),
      minRightSideBearing: Math.min.apply(null, o)
    };
    v.ascender = n.ascender, v.descender = n.descender;
    var x = Eo.make({
      flags: 3,
      // 00000011 (baseline for font at y=0; left sidebearing point at x=0)
      unitsPerEm: n.unitsPerEm,
      xMin: v.xMin,
      yMin: v.yMin,
      xMax: v.xMax,
      yMax: v.yMax,
      lowestRecPPEM: 3,
      createdTimestamp: n.createdTimestamp
    }), F = Oo.make({
      ascender: v.ascender,
      descender: v.descender,
      advanceWidthMax: v.advanceWidthMax,
      minLeftSideBearing: v.minLeftSideBearing,
      minRightSideBearing: v.minRightSideBearing,
      xMaxExtent: v.maxLeftSideBearing + (v.xMax - v.xMin),
      numberOfHMetrics: n.glyphs.length
    }), C = Ro.make(n.glyphs.length), T = zs.make(Object.assign({
      xAvgCharWidth: Math.round(v.advanceWidthAvg),
      usFirstCharIndex: h,
      usLastCharIndex: u,
      ulUnicodeRange1: l,
      ulUnicodeRange2: f,
      ulUnicodeRange3: c,
      ulUnicodeRange4: p,
      // See http://typophile.com/node/13081 for more info on vertical metrics.
      // We get metrics for typical characters (such as "x" for xHeight).
      // We provide some fallback characters if characters are unavailable: their
      // ordering was chosen experimentally.
      sTypoAscender: v.ascender,
      sTypoDescender: v.descender,
      sTypoLineGap: 0,
      usWinAscent: v.yMax,
      usWinDescent: Math.abs(v.yMin),
      ulCodePageRange1: 1,
      // FIXME: hard-code Latin 1 support for now
      sxHeight: ha(n, "xyvw", { yMax: Math.round(v.ascender / 2) }).yMax,
      sCapHeight: ha(n, "HIKLEFJMNTZBDPRAGOQSUVWXY", v).yMax,
      usDefaultChar: n.hasChar(" ") ? 32 : 0,
      // Use space as the default character, if available.
      usBreakChar: n.hasChar(" ") ? 32 : 0
      // Use space as the break character, if available.
    }, n.tables.os2)), k = Lo.make(n.glyphs), B = yo.make(n.glyphs), P = n.getEnglishName("fontFamily"), I = n.getEnglishName("fontSubfamily"), rt = P + " " + I, V = n.getEnglishName("postScriptName");
    V || (V = P.replace(/\s/g, "") + "-" + I);
    var W = {};
    for (var Y in n.names)
      W[Y] = n.names[Y];
    W.uniqueID || (W.uniqueID = { en: n.getEnglishName("manufacturer") + ":" + rt }), W.postScriptName || (W.postScriptName = { en: V }), W.preferredFamily || (W.preferredFamily = n.names.fontFamily), W.preferredSubfamily || (W.preferredSubfamily = n.names.fontSubfamily);
    var X = [], $ = Do.make(W, X), tt = X.length > 0 ? _o.make(X) : void 0, j = Io.make(), et = Ao.make(n.glyphs, {
      version: n.getEnglishName("version"),
      fullName: rt,
      familyName: P,
      weightName: I,
      postScriptName: V,
      unitsPerEm: n.unitsPerEm,
      fontBBox: [0, v.yMin, v.ascender, v.advanceWidthMax]
    }), q = n.metas && Object.keys(n.metas).length > 0 ? Go.make(n.metas) : void 0, st = [x, F, C, T, $, B, j, et, k];
    tt && st.push(tt), n.tables.gsub && st.push(No.make(n.tables.gsub)), q && st.push(q);
    for (var ze = Ho(st), An = ze.encode(), En = Qs(An), De = ze.fields, Ct = !1, Jt = 0; Jt < De.length; Jt += 1)
      if (De[Jt].name === "head table") {
        De[Jt].value.checkSumAdjustment = 2981146554 - En, Ct = !0;
        break;
      }
    if (!Ct)
      throw new Error("Could not find head table with checkSum to adjust.");
    return ze;
  }
  var ic = { make: Ho, fontToTable: sc, computeCheckSum: Qs };
  function os(n, t) {
    for (var e = 0, r = n.length - 1; e <= r; ) {
      var s = e + r >>> 1, i = n[s].tag;
      if (i === t)
        return s;
      i < t ? e = s + 1 : r = s - 1;
    }
    return -e - 1;
  }
  function ua(n, t) {
    for (var e = 0, r = n.length - 1; e <= r; ) {
      var s = e + r >>> 1, i = n[s];
      if (i === t)
        return s;
      i < t ? e = s + 1 : r = s - 1;
    }
    return -e - 1;
  }
  function la(n, t) {
    for (var e, r = 0, s = n.length - 1; r <= s; ) {
      var i = r + s >>> 1;
      e = n[i];
      var a = e.start;
      if (a === t)
        return e;
      a < t ? r = i + 1 : s = i - 1;
    }
    if (r > 0)
      return e = n[r - 1], t > e.end ? 0 : e;
  }
  function Rr(n, t) {
    this.font = n, this.tableName = t;
  }
  Rr.prototype = {
    /**
     * Binary search an object by "tag" property
     * @instance
     * @function searchTag
     * @memberof opentype.Layout
     * @param  {Array} arr
     * @param  {string} tag
     * @return {number}
     */
    searchTag: os,
    /**
     * Binary search in a list of numbers
     * @instance
     * @function binSearch
     * @memberof opentype.Layout
     * @param  {Array} arr
     * @param  {number} value
     * @return {number}
     */
    binSearch: ua,
    /**
     * Get or create the Layout table (GSUB, GPOS etc).
     * @param  {boolean} create - Whether to create a new one.
     * @return {Object} The GSUB or GPOS table.
     */
    getTable: function(n) {
      var t = this.font.tables[this.tableName];
      return !t && n && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
    },
    /**
     * Returns all scripts in the substitution table.
     * @instance
     * @return {Array}
     */
    getScriptNames: function() {
      var n = this.getTable();
      return n ? n.scripts.map(function(t) {
        return t.tag;
      }) : [];
    },
    /**
     * Returns the best bet for a script name.
     * Returns 'DFLT' if it exists.
     * If not, returns 'latn' if it exists.
     * If neither exist, returns undefined.
     */
    getDefaultScriptName: function() {
      var n = this.getTable();
      if (n) {
        for (var t = !1, e = 0; e < n.scripts.length; e++) {
          var r = n.scripts[e].tag;
          if (r === "DFLT")
            return r;
          r === "latn" && (t = !0);
        }
        if (t)
          return "latn";
      }
    },
    /**
     * Returns all LangSysRecords in the given script.
     * @instance
     * @param {string} [script='DFLT']
     * @param {boolean} create - forces the creation of this script table if it doesn't exist.
     * @return {Object} An object with tag and script properties.
     */
    getScriptTable: function(n, t) {
      var e = this.getTable(t);
      if (e) {
        n = n || "DFLT";
        var r = e.scripts, s = os(e.scripts, n);
        if (s >= 0)
          return r[s].script;
        if (t) {
          var i = {
            tag: n,
            script: {
              defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
              langSysRecords: []
            }
          };
          return r.splice(-1 - s, 0, i), i.script;
        }
      }
    },
    /**
     * Returns a language system table
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
     * @return {Object}
     */
    getLangSysTable: function(n, t, e) {
      var r = this.getScriptTable(n, e);
      if (r) {
        if (!t || t === "dflt" || t === "DFLT")
          return r.defaultLangSys;
        var s = os(r.langSysRecords, t);
        if (s >= 0)
          return r.langSysRecords[s].langSys;
        if (e) {
          var i = {
            tag: t,
            langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }
          };
          return r.langSysRecords.splice(-1 - s, 0, i), i.langSys;
        }
      }
    },
    /**
     * Get a specific feature table.
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
     * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
     * @return {Object}
     */
    getFeatureTable: function(n, t, e, r) {
      var s = this.getLangSysTable(n, t, r);
      if (s) {
        for (var i, a = s.featureIndexes, o = this.font.tables[this.tableName].features, h = 0; h < a.length; h++)
          if (i = o[a[h]], i.tag === e)
            return i.feature;
        if (r) {
          var u = o.length;
          return N.assert(u === 0 || e >= o[u - 1].tag, "Features must be added in alphabetical order."), i = {
            tag: e,
            feature: { params: 0, lookupListIndexes: [] }
          }, o.push(i), a.push(u), i.feature;
        }
      }
    },
    /**
     * Get the lookup tables of a given type for a script/language/feature.
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {string} feature - 4-letter feature code
     * @param {number} lookupType - 1 to 9
     * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
     * @return {Object[]}
     */
    getLookupTables: function(n, t, e, r, s) {
      var i = this.getFeatureTable(n, t, e, s), a = [];
      if (i) {
        for (var o, h = i.lookupListIndexes, u = this.font.tables[this.tableName].lookups, l = 0; l < h.length; l++)
          o = u[h[l]], o.lookupType === r && a.push(o);
        if (a.length === 0 && s) {
          o = {
            lookupType: r,
            lookupFlag: 0,
            subtables: [],
            markFilteringSet: void 0
          };
          var f = u.length;
          return u.push(o), h.push(f), [o];
        }
      }
      return a;
    },
    /**
     * Find a glyph in a class definition table
     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
     * @param {object} classDefTable - an OpenType Layout class definition table
     * @param {number} glyphIndex - the index of the glyph to find
     * @returns {number} -1 if not found
     */
    getGlyphClass: function(n, t) {
      switch (n.format) {
        case 1:
          return n.startGlyph <= t && t < n.startGlyph + n.classes.length ? n.classes[t - n.startGlyph] : 0;
        case 2:
          var e = la(n.ranges, t);
          return e ? e.classId : 0;
      }
    },
    /**
     * Find a glyph in a coverage table
     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
     * @param {object} coverageTable - an OpenType Layout coverage table
     * @param {number} glyphIndex - the index of the glyph to find
     * @returns {number} -1 if not found
     */
    getCoverageIndex: function(n, t) {
      switch (n.format) {
        case 1:
          var e = ua(n.glyphs, t);
          return e >= 0 ? e : -1;
        case 2:
          var r = la(n.ranges, t);
          return r ? r.index + t - r.start : -1;
      }
    },
    /**
     * Returns the list of glyph indexes of a coverage table.
     * Format 1: the list is stored raw
     * Format 2: compact list as range records.
     * @instance
     * @param  {Object} coverageTable
     * @return {Array}
     */
    expandCoverage: function(n) {
      if (n.format === 1)
        return n.glyphs;
      for (var t = [], e = n.ranges, r = 0; r < e.length; r++)
        for (var s = e[r], i = s.start, a = s.end, o = i; o <= a; o++)
          t.push(o);
      return t;
    }
  };
  function Ur(n) {
    Rr.call(this, n, "gpos");
  }
  Ur.prototype = Rr.prototype;
  Ur.prototype.init = function() {
    var n = this.getDefaultScriptName();
    this.defaultKerningTables = this.getKerningTables(n);
  };
  Ur.prototype.getKerningValue = function(n, t, e) {
    for (var r = 0; r < n.length; r++)
      for (var s = n[r].subtables, i = 0; i < s.length; i++) {
        var a = s[i], o = this.getCoverageIndex(a.coverage, t);
        if (!(o < 0))
          switch (a.posFormat) {
            case 1:
              for (var h = a.pairSets[o], u = 0; u < h.length; u++) {
                var l = h[u];
                if (l.secondGlyph === e)
                  return l.value1 && l.value1.xAdvance || 0;
              }
              break;
            case 2:
              var f = this.getGlyphClass(a.classDef1, t), c = this.getGlyphClass(a.classDef2, e), p = a.classRecords[f][c];
              return p.value1 && p.value1.xAdvance || 0;
          }
      }
    return 0;
  };
  Ur.prototype.getKerningTables = function(n, t) {
    if (this.font.tables.gpos)
      return this.getLookupTables(n, t, "kern", 2);
  };
  function kt(n) {
    Rr.call(this, n, "gsub");
  }
  function ac(n, t) {
    var e = n.length;
    if (e !== t.length)
      return !1;
    for (var r = 0; r < e; r++)
      if (n[r] !== t[r])
        return !1;
    return !0;
  }
  function js(n, t, e) {
    for (var r = n.subtables, s = 0; s < r.length; s++) {
      var i = r[s];
      if (i.substFormat === t)
        return i;
    }
    if (e)
      return r.push(e), e;
  }
  kt.prototype = Rr.prototype;
  kt.prototype.createDefaultTable = function() {
    return {
      version: 1,
      scripts: [{
        tag: "DFLT",
        script: {
          defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
          langSysRecords: []
        }
      }],
      features: [],
      lookups: []
    };
  };
  kt.prototype.getSingle = function(n, t, e) {
    for (var r = [], s = this.getLookupTables(t, e, n, 1), i = 0; i < s.length; i++)
      for (var a = s[i].subtables, o = 0; o < a.length; o++) {
        var h = a[o], u = this.expandCoverage(h.coverage), l = void 0;
        if (h.substFormat === 1) {
          var f = h.deltaGlyphId;
          for (l = 0; l < u.length; l++) {
            var c = u[l];
            r.push({ sub: c, by: c + f });
          }
        } else {
          var p = h.substitute;
          for (l = 0; l < u.length; l++)
            r.push({ sub: u[l], by: p[l] });
        }
      }
    return r;
  };
  kt.prototype.getMultiple = function(n, t, e) {
    for (var r = [], s = this.getLookupTables(t, e, n, 2), i = 0; i < s.length; i++)
      for (var a = s[i].subtables, o = 0; o < a.length; o++) {
        var h = a[o], u = this.expandCoverage(h.coverage), l = void 0;
        for (l = 0; l < u.length; l++) {
          var f = u[l], c = h.sequences[l];
          r.push({ sub: f, by: c });
        }
      }
    return r;
  };
  kt.prototype.getAlternates = function(n, t, e) {
    for (var r = [], s = this.getLookupTables(t, e, n, 3), i = 0; i < s.length; i++)
      for (var a = s[i].subtables, o = 0; o < a.length; o++)
        for (var h = a[o], u = this.expandCoverage(h.coverage), l = h.alternateSets, f = 0; f < u.length; f++)
          r.push({ sub: u[f], by: l[f] });
    return r;
  };
  kt.prototype.getLigatures = function(n, t, e) {
    for (var r = [], s = this.getLookupTables(t, e, n, 4), i = 0; i < s.length; i++)
      for (var a = s[i].subtables, o = 0; o < a.length; o++)
        for (var h = a[o], u = this.expandCoverage(h.coverage), l = h.ligatureSets, f = 0; f < u.length; f++)
          for (var c = u[f], p = l[f], d = 0; d < p.length; d++) {
            var g = p[d];
            r.push({
              sub: [c].concat(g.components),
              by: g.ligGlyph
            });
          }
    return r;
  };
  kt.prototype.addSingle = function(n, t, e, r) {
    var s = this.getLookupTables(e, r, n, 1, !0)[0], i = js(s, 2, {
      // lookup type 1 subtable, format 2, coverage format 1
      substFormat: 2,
      coverage: { format: 1, glyphs: [] },
      substitute: []
    });
    N.assert(i.coverage.format === 1, "Single: unable to modify coverage table format " + i.coverage.format);
    var a = t.sub, o = this.binSearch(i.coverage.glyphs, a);
    o < 0 && (o = -1 - o, i.coverage.glyphs.splice(o, 0, a), i.substitute.splice(o, 0, 0)), i.substitute[o] = t.by;
  };
  kt.prototype.addMultiple = function(n, t, e, r) {
    N.assert(t.by instanceof Array && t.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
    var s = this.getLookupTables(e, r, n, 2, !0)[0], i = js(s, 1, {
      // lookup type 2 subtable, format 1, coverage format 1
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      sequences: []
    });
    N.assert(i.coverage.format === 1, "Multiple: unable to modify coverage table format " + i.coverage.format);
    var a = t.sub, o = this.binSearch(i.coverage.glyphs, a);
    o < 0 && (o = -1 - o, i.coverage.glyphs.splice(o, 0, a), i.sequences.splice(o, 0, 0)), i.sequences[o] = t.by;
  };
  kt.prototype.addAlternate = function(n, t, e, r) {
    var s = this.getLookupTables(e, r, n, 3, !0)[0], i = js(s, 1, {
      // lookup type 3 subtable, format 1, coverage format 1
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      alternateSets: []
    });
    N.assert(i.coverage.format === 1, "Alternate: unable to modify coverage table format " + i.coverage.format);
    var a = t.sub, o = this.binSearch(i.coverage.glyphs, a);
    o < 0 && (o = -1 - o, i.coverage.glyphs.splice(o, 0, a), i.alternateSets.splice(o, 0, 0)), i.alternateSets[o] = t.by;
  };
  kt.prototype.addLigature = function(n, t, e, r) {
    var s = this.getLookupTables(e, r, n, 4, !0)[0], i = s.subtables[0];
    i || (i = {
      // lookup type 4 subtable, format 1, coverage format 1
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      ligatureSets: []
    }, s.subtables[0] = i), N.assert(i.coverage.format === 1, "Ligature: unable to modify coverage table format " + i.coverage.format);
    var a = t.sub[0], o = t.sub.slice(1), h = {
      ligGlyph: t.by,
      components: o
    }, u = this.binSearch(i.coverage.glyphs, a);
    if (u >= 0) {
      for (var l = i.ligatureSets[u], f = 0; f < l.length; f++)
        if (ac(l[f].components, o))
          return;
      l.push(h);
    } else
      u = -1 - u, i.coverage.glyphs.splice(u, 0, a), i.ligatureSets.splice(u, 0, [h]);
  };
  kt.prototype.getFeature = function(n, t, e) {
    if (/ss\d\d/.test(n))
      return this.getSingle(n, t, e);
    switch (n) {
      case "aalt":
      case "salt":
        return this.getSingle(n, t, e).concat(this.getAlternates(n, t, e));
      case "dlig":
      case "liga":
      case "rlig":
        return this.getLigatures(n, t, e);
      case "ccmp":
        return this.getMultiple(n, t, e).concat(this.getLigatures(n, t, e));
      case "stch":
        return this.getMultiple(n, t, e);
    }
  };
  kt.prototype.add = function(n, t, e, r) {
    if (/ss\d\d/.test(n))
      return this.addSingle(n, t, e, r);
    switch (n) {
      case "aalt":
      case "salt":
        return typeof t.by == "number" ? this.addSingle(n, t, e, r) : this.addAlternate(n, t, e, r);
      case "dlig":
      case "liga":
      case "rlig":
        return this.addLigature(n, t, e, r);
      case "ccmp":
        return t.by instanceof Array ? this.addMultiple(n, t, e, r) : this.addLigature(n, t, e, r);
    }
  };
  function oc() {
    return typeof window < "u";
  }
  function hc(n) {
    for (var t = new Buffer(n.byteLength), e = new Uint8Array(n), r = 0; r < t.length; ++r)
      t[r] = e[r];
    return t;
  }
  function gr(n, t) {
    if (!n)
      throw t;
  }
  function ca(n, t, e, r, s) {
    var i;
    return (t & r) > 0 ? (i = n.parseByte(), t & s || (i = -i), i = e + i) : (t & s) > 0 ? i = e : i = e + n.parseShort(), i;
  }
  function Wo(n, t, e) {
    var r = new U.Parser(t, e);
    n.numberOfContours = r.parseShort(), n._xMin = r.parseShort(), n._yMin = r.parseShort(), n._xMax = r.parseShort(), n._yMax = r.parseShort();
    var s, i;
    if (n.numberOfContours > 0) {
      for (var a = n.endPointIndices = [], o = 0; o < n.numberOfContours; o += 1)
        a.push(r.parseUShort());
      n.instructionLength = r.parseUShort(), n.instructions = [];
      for (var h = 0; h < n.instructionLength; h += 1)
        n.instructions.push(r.parseByte());
      var u = a[a.length - 1] + 1;
      s = [];
      for (var l = 0; l < u; l += 1)
        if (i = r.parseByte(), s.push(i), (i & 8) > 0)
          for (var f = r.parseByte(), c = 0; c < f; c += 1)
            s.push(i), l += 1;
      if (N.argument(s.length === u, "Bad flags."), a.length > 0) {
        var p = [], d;
        if (u > 0) {
          for (var g = 0; g < u; g += 1)
            i = s[g], d = {}, d.onCurve = !!(i & 1), d.lastPointOfContour = a.indexOf(g) >= 0, p.push(d);
          for (var y = 0, m = 0; m < u; m += 1)
            i = s[m], d = p[m], d.x = ca(r, i, y, 2, 16), y = d.x;
          for (var b = 0, v = 0; v < u; v += 1)
            i = s[v], d = p[v], d.y = ca(r, i, b, 4, 32), b = d.y;
        }
        n.points = p;
      } else
        n.points = [];
    } else if (n.numberOfContours === 0)
      n.points = [];
    else {
      n.isComposite = !0, n.points = [], n.components = [];
      for (var x = !0; x; ) {
        s = r.parseUShort();
        var F = {
          glyphIndex: r.parseUShort(),
          xScale: 1,
          scale01: 0,
          scale10: 0,
          yScale: 1,
          dx: 0,
          dy: 0
        };
        (s & 1) > 0 ? (s & 2) > 0 ? (F.dx = r.parseShort(), F.dy = r.parseShort()) : F.matchedPoints = [r.parseUShort(), r.parseUShort()] : (s & 2) > 0 ? (F.dx = r.parseChar(), F.dy = r.parseChar()) : F.matchedPoints = [r.parseByte(), r.parseByte()], (s & 8) > 0 ? F.xScale = F.yScale = r.parseF2Dot14() : (s & 64) > 0 ? (F.xScale = r.parseF2Dot14(), F.yScale = r.parseF2Dot14()) : (s & 128) > 0 && (F.xScale = r.parseF2Dot14(), F.scale01 = r.parseF2Dot14(), F.scale10 = r.parseF2Dot14(), F.yScale = r.parseF2Dot14()), n.components.push(F), x = !!(s & 32);
      }
      if (s & 256) {
        n.instructionLength = r.parseUShort(), n.instructions = [];
        for (var C = 0; C < n.instructionLength; C += 1)
          n.instructions.push(r.parseByte());
      }
    }
  }
  function hs(n, t) {
    for (var e = [], r = 0; r < n.length; r += 1) {
      var s = n[r], i = {
        x: t.xScale * s.x + t.scale01 * s.y + t.dx,
        y: t.scale10 * s.x + t.yScale * s.y + t.dy,
        onCurve: s.onCurve,
        lastPointOfContour: s.lastPointOfContour
      };
      e.push(i);
    }
    return e;
  }
  function uc(n) {
    for (var t = [], e = [], r = 0; r < n.length; r += 1) {
      var s = n[r];
      e.push(s), s.lastPointOfContour && (t.push(e), e = []);
    }
    return N.argument(e.length === 0, "There are still points left in the current contour."), t;
  }
  function Vo(n) {
    var t = new lt();
    if (!n)
      return t;
    for (var e = uc(n), r = 0; r < e.length; ++r) {
      var s = e[r], i = null, a = s[s.length - 1], o = s[0];
      if (a.onCurve)
        t.moveTo(a.x, a.y);
      else if (o.onCurve)
        t.moveTo(o.x, o.y);
      else {
        var h = { x: (a.x + o.x) * 0.5, y: (a.y + o.y) * 0.5 };
        t.moveTo(h.x, h.y);
      }
      for (var u = 0; u < s.length; ++u)
        if (i = a, a = o, o = s[(u + 1) % s.length], a.onCurve)
          t.lineTo(a.x, a.y);
        else {
          var l = o;
          i.onCurve || ((a.x + i.x) * 0.5, (a.y + i.y) * 0.5), o.onCurve || (l = { x: (a.x + o.x) * 0.5, y: (a.y + o.y) * 0.5 }), t.quadraticCurveTo(a.x, a.y, l.x, l.y);
        }
      t.closePath();
    }
    return t;
  }
  function qo(n, t) {
    if (t.isComposite)
      for (var e = 0; e < t.components.length; e += 1) {
        var r = t.components[e], s = n.get(r.glyphIndex);
        if (s.getPath(), s.points) {
          var i = void 0;
          if (r.matchedPoints === void 0)
            i = hs(s.points, r);
          else {
            if (r.matchedPoints[0] > t.points.length - 1 || r.matchedPoints[1] > s.points.length - 1)
              throw Error("Matched points out of range in " + t.name);
            var a = t.points[r.matchedPoints[0]], o = s.points[r.matchedPoints[1]], h = {
              xScale: r.xScale,
              scale01: r.scale01,
              scale10: r.scale10,
              yScale: r.yScale,
              dx: 0,
              dy: 0
            };
            o = hs([o], h)[0], h.dx = a.x - o.x, h.dy = a.y - o.y, i = hs(s.points, h);
          }
          t.points = t.points.concat(i);
        }
      }
    return Vo(t.points);
  }
  function lc(n, t, e, r) {
    for (var s = new Zt.GlyphSet(r), i = 0; i < e.length - 1; i += 1) {
      var a = e[i], o = e[i + 1];
      a !== o ? s.push(i, Zt.ttfGlyphLoader(r, i, Wo, n, t + a, qo)) : s.push(i, Zt.glyphLoader(r, i));
    }
    return s;
  }
  function cc(n, t, e, r) {
    var s = new Zt.GlyphSet(r);
    return r._push = function(i) {
      var a = e[i], o = e[i + 1];
      a !== o ? s.push(i, Zt.ttfGlyphLoader(r, i, Wo, n, t + a, qo)) : s.push(i, Zt.glyphLoader(r, i));
    }, s;
  }
  function fc(n, t, e, r, s) {
    return s.lowMemory ? cc(n, t, e, r) : lc(n, t, e, r);
  }
  var Xo = { getPath: Vo, parse: fc }, Zo, Pe, Yo, Ds;
  function Jo(n) {
    this.font = n, this.getCommands = function(t) {
      return Xo.getPath(t).commands;
    }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
  }
  function pc(n) {
    return n;
  }
  function $o(n) {
    return Math.sign(n) * Math.round(Math.abs(n));
  }
  function dc(n) {
    return Math.sign(n) * Math.round(Math.abs(n * 2)) / 2;
  }
  function gc(n) {
    return Math.sign(n) * (Math.round(Math.abs(n) + 0.5) - 0.5);
  }
  function mc(n) {
    return Math.sign(n) * Math.ceil(Math.abs(n));
  }
  function yc(n) {
    return Math.sign(n) * Math.floor(Math.abs(n));
  }
  var Qo = function(n) {
    var t = this.srPeriod, e = this.srPhase, r = this.srThreshold, s = 1;
    return n < 0 && (n = -n, s = -1), n += r - e, n = Math.trunc(n / t) * t, n += e, n < 0 ? e * s : n * s;
  }, Xt = {
    x: 1,
    y: 0,
    axis: "x",
    // Gets the projected distance between two points.
    // o1/o2 ... if true, respective original position is used.
    distance: function(n, t, e, r) {
      return (e ? n.xo : n.x) - (r ? t.xo : t.x);
    },
    // Moves point p so the moved position has the same relative
    // position to the moved positions of rp1 and rp2 than the
    // original positions had.
    //
    // See APPENDIX on INTERPOLATE at the bottom of this file.
    interpolate: function(n, t, e, r) {
      var s, i, a, o, h, u, l;
      if (!r || r === this) {
        if (s = n.xo - t.xo, i = n.xo - e.xo, h = t.x - t.xo, u = e.x - e.xo, a = Math.abs(s), o = Math.abs(i), l = a + o, l === 0) {
          n.x = n.xo + (h + u) / 2;
          return;
        }
        n.x = n.xo + (h * o + u * a) / l;
        return;
      }
      if (s = r.distance(n, t, !0, !0), i = r.distance(n, e, !0, !0), h = r.distance(t, t, !1, !0), u = r.distance(e, e, !1, !0), a = Math.abs(s), o = Math.abs(i), l = a + o, l === 0) {
        Xt.setRelative(n, n, (h + u) / 2, r, !0);
        return;
      }
      Xt.setRelative(n, n, (h * o + u * a) / l, r, !0);
    },
    // Slope of line normal to this
    normalSlope: Number.NEGATIVE_INFINITY,
    // Sets the point 'p' relative to point 'rp'
    // by the distance 'd'.
    //
    // See APPENDIX on SETRELATIVE at the bottom of this file.
    //
    // p   ... point to set
    // rp  ... reference point
    // d   ... distance on projection vector
    // pv  ... projection vector (undefined = this)
    // org ... if true, uses the original position of rp as reference.
    setRelative: function(n, t, e, r, s) {
      if (!r || r === this) {
        n.x = (s ? t.xo : t.x) + e;
        return;
      }
      var i = s ? t.xo : t.x, a = s ? t.yo : t.y, o = i + e * r.x, h = a + e * r.y;
      n.x = o + (n.y - h) / r.normalSlope;
    },
    // Slope of vector line.
    slope: 0,
    // Touches the point p.
    touch: function(n) {
      n.xTouched = !0;
    },
    // Tests if a point p is touched.
    touched: function(n) {
      return n.xTouched;
    },
    // Untouches the point p.
    untouch: function(n) {
      n.xTouched = !1;
    }
  }, ie = {
    x: 0,
    y: 1,
    axis: "y",
    // Gets the projected distance between two points.
    // o1/o2 ... if true, respective original position is used.
    distance: function(n, t, e, r) {
      return (e ? n.yo : n.y) - (r ? t.yo : t.y);
    },
    // Moves point p so the moved position has the same relative
    // position to the moved positions of rp1 and rp2 than the
    // original positions had.
    //
    // See APPENDIX on INTERPOLATE at the bottom of this file.
    interpolate: function(n, t, e, r) {
      var s, i, a, o, h, u, l;
      if (!r || r === this) {
        if (s = n.yo - t.yo, i = n.yo - e.yo, h = t.y - t.yo, u = e.y - e.yo, a = Math.abs(s), o = Math.abs(i), l = a + o, l === 0) {
          n.y = n.yo + (h + u) / 2;
          return;
        }
        n.y = n.yo + (h * o + u * a) / l;
        return;
      }
      if (s = r.distance(n, t, !0, !0), i = r.distance(n, e, !0, !0), h = r.distance(t, t, !1, !0), u = r.distance(e, e, !1, !0), a = Math.abs(s), o = Math.abs(i), l = a + o, l === 0) {
        ie.setRelative(n, n, (h + u) / 2, r, !0);
        return;
      }
      ie.setRelative(n, n, (h * o + u * a) / l, r, !0);
    },
    // Slope of line normal to this.
    normalSlope: 0,
    // Sets the point 'p' relative to point 'rp'
    // by the distance 'd'
    //
    // See APPENDIX on SETRELATIVE at the bottom of this file.
    //
    // p   ... point to set
    // rp  ... reference point
    // d   ... distance on projection vector
    // pv  ... projection vector (undefined = this)
    // org ... if true, uses the original position of rp as reference.
    setRelative: function(n, t, e, r, s) {
      if (!r || r === this) {
        n.y = (s ? t.yo : t.y) + e;
        return;
      }
      var i = s ? t.xo : t.x, a = s ? t.yo : t.y, o = i + e * r.x, h = a + e * r.y;
      n.y = h + r.normalSlope * (n.x - o);
    },
    // Slope of vector line.
    slope: Number.POSITIVE_INFINITY,
    // Touches the point p.
    touch: function(n) {
      n.yTouched = !0;
    },
    // Tests if a point p is touched.
    touched: function(n) {
      return n.yTouched;
    },
    // Untouches the point p.
    untouch: function(n) {
      n.yTouched = !1;
    }
  };
  Object.freeze(Xt);
  Object.freeze(ie);
  function Br(n, t) {
    this.x = n, this.y = t, this.axis = void 0, this.slope = t / n, this.normalSlope = -n / t, Object.freeze(this);
  }
  Br.prototype.distance = function(n, t, e, r) {
    return this.x * Xt.distance(n, t, e, r) + this.y * ie.distance(n, t, e, r);
  };
  Br.prototype.interpolate = function(n, t, e, r) {
    var s, i, a, o, h, u, l;
    if (a = r.distance(n, t, !0, !0), o = r.distance(n, e, !0, !0), s = r.distance(t, t, !1, !0), i = r.distance(e, e, !1, !0), h = Math.abs(a), u = Math.abs(o), l = h + u, l === 0) {
      this.setRelative(n, n, (s + i) / 2, r, !0);
      return;
    }
    this.setRelative(n, n, (s * u + i * h) / l, r, !0);
  };
  Br.prototype.setRelative = function(n, t, e, r, s) {
    r = r || this;
    var i = s ? t.xo : t.x, a = s ? t.yo : t.y, o = i + e * r.x, h = a + e * r.y, u = r.normalSlope, l = this.slope, f = n.x, c = n.y;
    n.x = (l * f - u * o + h - c) / (l - u), n.y = l * (n.x - f) + c;
  };
  Br.prototype.touch = function(n) {
    n.xTouched = !0, n.yTouched = !0;
  };
  function Pr(n, t) {
    var e = Math.sqrt(n * n + t * t);
    return n /= e, t /= e, n === 1 && t === 0 ? Xt : n === 0 && t === 1 ? ie : new Br(n, t);
  }
  function he(n, t, e, r) {
    this.x = this.xo = Math.round(n * 64) / 64, this.y = this.yo = Math.round(t * 64) / 64, this.lastPointOfContour = e, this.onCurve = r, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
  }
  he.prototype.nextTouched = function(n) {
    for (var t = this.nextPointOnContour; !n.touched(t) && t !== this; )
      t = t.nextPointOnContour;
    return t;
  };
  he.prototype.prevTouched = function(n) {
    for (var t = this.prevPointOnContour; !n.touched(t) && t !== this; )
      t = t.prevPointOnContour;
    return t;
  };
  var Er = Object.freeze(new he(0, 0)), vc = {
    cvCutIn: 17 / 16,
    // control value cut in
    deltaBase: 9,
    deltaShift: 0.125,
    loop: 1,
    // loops some instructions
    minDis: 1,
    // minimum distance
    autoFlip: !0
  };
  function ye(n, t) {
    switch (this.env = n, this.stack = [], this.prog = t, n) {
      case "glyf":
        this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
      case "prep":
        this.fv = this.pv = this.dpv = Xt, this.round = $o;
    }
  }
  Jo.prototype.exec = function(n, t) {
    if (typeof t != "number")
      throw new Error("Point size is not a number!");
    if (!(this._errorState > 2)) {
      var e = this.font, r = this._prepState;
      if (!r || r.ppem !== t) {
        var s = this._fpgmState;
        if (!s) {
          ye.prototype = vc, s = this._fpgmState = new ye("fpgm", e.tables.fpgm), s.funcs = [], s.font = e, M.DEBUG && (console.log("---EXEC FPGM---"), s.step = -1);
          try {
            Pe(s);
          } catch (u) {
            console.log("Hinting error in FPGM:" + u), this._errorState = 3;
            return;
          }
        }
        ye.prototype = s, r = this._prepState = new ye("prep", e.tables.prep), r.ppem = t;
        var i = e.tables.cvt;
        if (i)
          for (var a = r.cvt = new Array(i.length), o = t / e.unitsPerEm, h = 0; h < i.length; h++)
            a[h] = i[h] * o;
        else
          r.cvt = [];
        M.DEBUG && (console.log("---EXEC PREP---"), r.step = -1);
        try {
          Pe(r);
        } catch (u) {
          this._errorState < 2 && console.log("Hinting error in PREP:" + u), this._errorState = 2;
        }
      }
      if (!(this._errorState > 1))
        try {
          return Yo(n, r);
        } catch (u) {
          this._errorState < 1 && (console.log("Hinting error:" + u), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
          return;
        }
    }
  };
  Yo = function(n, t) {
    var e = t.ppem / t.font.unitsPerEm, r = e, s = n.components, i, a, o;
    if (ye.prototype = t, !s)
      o = new ye("glyf", n.instructions), M.DEBUG && (console.log("---EXEC GLYPH---"), o.step = -1), Ds(n, o, e, r), a = o.gZone;
    else {
      var h = t.font;
      a = [], i = [];
      for (var u = 0; u < s.length; u++) {
        var l = s[u], f = h.glyphs.get(l.glyphIndex);
        o = new ye("glyf", f.instructions), M.DEBUG && (console.log("---EXEC COMP " + u + "---"), o.step = -1), Ds(f, o, e, r);
        for (var c = Math.round(l.dx * e), p = Math.round(l.dy * r), d = o.gZone, g = o.contours, y = 0; y < d.length; y++) {
          var m = d[y];
          m.xTouched = m.yTouched = !1, m.xo = m.x = m.x + c, m.yo = m.y = m.y + p;
        }
        var b = a.length;
        a.push.apply(a, d);
        for (var v = 0; v < g.length; v++)
          i.push(g[v] + b);
      }
      n.instructions && !o.inhibitGridFit && (o = new ye("glyf", n.instructions), o.gZone = o.z0 = o.z1 = o.z2 = a, o.contours = i, a.push(
        new he(0, 0),
        new he(Math.round(n.advanceWidth * e), 0)
      ), M.DEBUG && (console.log("---EXEC COMPOSITE---"), o.step = -1), Pe(o), a.length -= 2);
    }
    return a;
  };
  Ds = function(n, t, e, r) {
    for (var s = n.points || [], i = s.length, a = t.gZone = t.z0 = t.z1 = t.z2 = [], o = t.contours = [], h, u = 0; u < i; u++)
      h = s[u], a[u] = new he(
        h.x * e,
        h.y * r,
        h.lastPointOfContour,
        h.onCurve
      );
    for (var l, f, c = 0; c < i; c++)
      h = a[c], l || (l = h, o.push(c)), h.lastPointOfContour ? (h.nextPointOnContour = l, l.prevPointOnContour = h, l = void 0) : (f = a[c + 1], h.nextPointOnContour = f, f.prevPointOnContour = h);
    if (!t.inhibitGridFit) {
      if (M.DEBUG) {
        console.log("PROCESSING GLYPH", t.stack);
        for (var p = 0; p < i; p++)
          console.log(p, a[p].x, a[p].y);
      }
      if (a.push(
        new he(0, 0),
        new he(Math.round(n.advanceWidth * e), 0)
      ), Pe(t), a.length -= 2, M.DEBUG) {
        console.log("FINISHED GLYPH", t.stack);
        for (var d = 0; d < i; d++)
          console.log(d, a[d].x, a[d].y);
      }
    }
  };
  Pe = function(n) {
    var t = n.prog;
    if (t) {
      var e = t.length, r;
      for (n.ip = 0; n.ip < e; n.ip++) {
        if (M.DEBUG && n.step++, r = Zo[t[n.ip]], !r)
          throw new Error(
            "unknown instruction: 0x" + Number(t[n.ip]).toString(16)
          );
        r(n);
      }
    }
  };
  function Mn(n) {
    for (var t = n.tZone = new Array(n.gZone.length), e = 0; e < t.length; e++)
      t[e] = new he(0, 0);
  }
  function jo(n, t) {
    var e = n.prog, r = n.ip, s = 1, i;
    do
      if (i = e[++r], i === 88)
        s++;
      else if (i === 89)
        s--;
      else if (i === 64)
        r += e[r + 1] + 1;
      else if (i === 65)
        r += 2 * e[r + 1] + 1;
      else if (i >= 176 && i <= 183)
        r += i - 176 + 1;
      else if (i >= 184 && i <= 191)
        r += (i - 184 + 1) * 2;
      else if (t && s === 1 && i === 27)
        break;
    while (s > 0);
    n.ip = r;
  }
  function fa(n, t) {
    M.DEBUG && console.log(t.step, "SVTCA[" + n.axis + "]"), t.fv = t.pv = t.dpv = n;
  }
  function pa(n, t) {
    M.DEBUG && console.log(t.step, "SPVTCA[" + n.axis + "]"), t.pv = t.dpv = n;
  }
  function da(n, t) {
    M.DEBUG && console.log(t.step, "SFVTCA[" + n.axis + "]"), t.fv = n;
  }
  function ga(n, t) {
    var e = t.stack, r = e.pop(), s = e.pop(), i = t.z2[r], a = t.z1[s];
    M.DEBUG && console.log("SPVTL[" + n + "]", r, s);
    var o, h;
    n ? (o = i.y - a.y, h = a.x - i.x) : (o = a.x - i.x, h = a.y - i.y), t.pv = t.dpv = Pr(o, h);
  }
  function ma(n, t) {
    var e = t.stack, r = e.pop(), s = e.pop(), i = t.z2[r], a = t.z1[s];
    M.DEBUG && console.log("SFVTL[" + n + "]", r, s);
    var o, h;
    n ? (o = i.y - a.y, h = a.x - i.x) : (o = a.x - i.x, h = a.y - i.y), t.fv = Pr(o, h);
  }
  function xc(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "SPVFS[]", e, r), n.pv = n.dpv = Pr(r, e);
  }
  function bc(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "SPVFS[]", e, r), n.fv = Pr(r, e);
  }
  function Sc(n) {
    var t = n.stack, e = n.pv;
    M.DEBUG && console.log(n.step, "GPV[]"), t.push(e.x * 16384), t.push(e.y * 16384);
  }
  function wc(n) {
    var t = n.stack, e = n.fv;
    M.DEBUG && console.log(n.step, "GFV[]"), t.push(e.x * 16384), t.push(e.y * 16384);
  }
  function Fc(n) {
    n.fv = n.pv, M.DEBUG && console.log(n.step, "SFVTPV[]");
  }
  function Tc(n) {
    var t = n.stack, e = t.pop(), r = t.pop(), s = t.pop(), i = t.pop(), a = t.pop(), o = n.z0, h = n.z1, u = o[e], l = o[r], f = h[s], c = h[i], p = n.z2[a];
    M.DEBUG && console.log("ISECT[], ", e, r, s, i, a);
    var d = u.x, g = u.y, y = l.x, m = l.y, b = f.x, v = f.y, x = c.x, F = c.y, C = (d - y) * (v - F) - (g - m) * (b - x), T = d * m - g * y, k = b * F - v * x;
    p.x = (T * (b - x) - k * (d - y)) / C, p.y = (T * (v - F) - k * (g - m)) / C;
  }
  function kc(n) {
    n.rp0 = n.stack.pop(), M.DEBUG && console.log(n.step, "SRP0[]", n.rp0);
  }
  function Mc(n) {
    n.rp1 = n.stack.pop(), M.DEBUG && console.log(n.step, "SRP1[]", n.rp1);
  }
  function Cc(n) {
    n.rp2 = n.stack.pop(), M.DEBUG && console.log(n.step, "SRP2[]", n.rp2);
  }
  function Ac(n) {
    var t = n.stack.pop();
    switch (M.DEBUG && console.log(n.step, "SZP0[]", t), n.zp0 = t, t) {
      case 0:
        n.tZone || Mn(n), n.z0 = n.tZone;
        break;
      case 1:
        n.z0 = n.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
    }
  }
  function Ec(n) {
    var t = n.stack.pop();
    switch (M.DEBUG && console.log(n.step, "SZP1[]", t), n.zp1 = t, t) {
      case 0:
        n.tZone || Mn(n), n.z1 = n.tZone;
        break;
      case 1:
        n.z1 = n.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
    }
  }
  function Oc(n) {
    var t = n.stack.pop();
    switch (M.DEBUG && console.log(n.step, "SZP2[]", t), n.zp2 = t, t) {
      case 0:
        n.tZone || Mn(n), n.z2 = n.tZone;
        break;
      case 1:
        n.z2 = n.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
    }
  }
  function Lc(n) {
    var t = n.stack.pop();
    switch (M.DEBUG && console.log(n.step, "SZPS[]", t), n.zp0 = n.zp1 = n.zp2 = t, t) {
      case 0:
        n.tZone || Mn(n), n.z0 = n.z1 = n.z2 = n.tZone;
        break;
      case 1:
        n.z0 = n.z1 = n.z2 = n.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
    }
  }
  function _c(n) {
    n.loop = n.stack.pop(), M.DEBUG && console.log(n.step, "SLOOP[]", n.loop);
  }
  function Rc(n) {
    M.DEBUG && console.log(n.step, "RTG[]"), n.round = $o;
  }
  function Uc(n) {
    M.DEBUG && console.log(n.step, "RTHG[]"), n.round = gc;
  }
  function Bc(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "SMD[]", t), n.minDis = t / 64;
  }
  function Pc(n) {
    M.DEBUG && console.log(n.step, "ELSE[]"), jo(n, !1);
  }
  function zc(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "JMPR[]", t), n.ip += t - 1;
  }
  function Dc(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "SCVTCI[]", t), n.cvCutIn = t / 64;
  }
  function Ic(n) {
    var t = n.stack;
    M.DEBUG && console.log(n.step, "DUP[]"), t.push(t[t.length - 1]);
  }
  function us(n) {
    M.DEBUG && console.log(n.step, "POP[]"), n.stack.pop();
  }
  function Nc(n) {
    M.DEBUG && console.log(n.step, "CLEAR[]"), n.stack.length = 0;
  }
  function Gc(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "SWAP[]"), t.push(e), t.push(r);
  }
  function Hc(n) {
    var t = n.stack;
    M.DEBUG && console.log(n.step, "DEPTH[]"), t.push(t.length);
  }
  function Wc(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "LOOPCALL[]", e, r);
    var s = n.ip, i = n.prog;
    n.prog = n.funcs[e];
    for (var a = 0; a < r; a++)
      Pe(n), M.DEBUG && console.log(
        ++n.step,
        a + 1 < r ? "next loopcall" : "done loopcall",
        a
      );
    n.ip = s, n.prog = i;
  }
  function Vc(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "CALL[]", t);
    var e = n.ip, r = n.prog;
    n.prog = n.funcs[t], Pe(n), n.ip = e, n.prog = r, M.DEBUG && console.log(++n.step, "returning from", t);
  }
  function qc(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "CINDEX[]", e), t.push(t[t.length - e]);
  }
  function Xc(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "MINDEX[]", e), t.push(t.splice(t.length - e, 1)[0]);
  }
  function Zc(n) {
    if (n.env !== "fpgm")
      throw new Error("FDEF not allowed here");
    var t = n.stack, e = n.prog, r = n.ip, s = t.pop(), i = r;
    for (M.DEBUG && console.log(n.step, "FDEF[]", s); e[++r] !== 45; )
      ;
    n.ip = r, n.funcs[s] = e.slice(i + 1, r);
  }
  function ya(n, t) {
    var e = t.stack.pop(), r = t.z0[e], s = t.fv, i = t.pv;
    M.DEBUG && console.log(t.step, "MDAP[" + n + "]", e);
    var a = i.distance(r, Er);
    n && (a = t.round(a)), s.setRelative(r, Er, a, i), s.touch(r), t.rp0 = t.rp1 = e;
  }
  function va(n, t) {
    var e = t.z2, r = e.length - 2, s, i, a;
    M.DEBUG && console.log(t.step, "IUP[" + n.axis + "]");
    for (var o = 0; o < r; o++)
      s = e[o], !n.touched(s) && (i = s.prevTouched(n), i !== s && (a = s.nextTouched(n), i === a && n.setRelative(s, s, n.distance(i, i, !1, !0), n, !0), n.interpolate(s, i, a, n)));
  }
  function xa(n, t) {
    for (var e = t.stack, r = n ? t.rp1 : t.rp2, s = (n ? t.z0 : t.z1)[r], i = t.fv, a = t.pv, o = t.loop, h = t.z2; o--; ) {
      var u = e.pop(), l = h[u], f = a.distance(s, s, !1, !0);
      i.setRelative(l, l, f, a), i.touch(l), M.DEBUG && console.log(
        t.step,
        (t.loop > 1 ? "loop " + (t.loop - o) + ": " : "") + "SHP[" + (n ? "rp1" : "rp2") + "]",
        u
      );
    }
    t.loop = 1;
  }
  function ba(n, t) {
    var e = t.stack, r = n ? t.rp1 : t.rp2, s = (n ? t.z0 : t.z1)[r], i = t.fv, a = t.pv, o = e.pop(), h = t.z2[t.contours[o]], u = h;
    M.DEBUG && console.log(t.step, "SHC[" + n + "]", o);
    var l = a.distance(s, s, !1, !0);
    do
      u !== s && i.setRelative(u, u, l, a), u = u.nextPointOnContour;
    while (u !== h);
  }
  function Sa(n, t) {
    var e = t.stack, r = n ? t.rp1 : t.rp2, s = (n ? t.z0 : t.z1)[r], i = t.fv, a = t.pv, o = e.pop();
    M.DEBUG && console.log(t.step, "SHZ[" + n + "]", o);
    var h;
    switch (o) {
      case 0:
        h = t.tZone;
        break;
      case 1:
        h = t.gZone;
        break;
      default:
        throw new Error("Invalid zone");
    }
    for (var u, l = a.distance(s, s, !1, !0), f = h.length - 2, c = 0; c < f; c++)
      u = h[c], i.setRelative(u, u, l, a);
  }
  function Yc(n) {
    for (var t = n.stack, e = n.loop, r = n.fv, s = t.pop() / 64, i = n.z2; e--; ) {
      var a = t.pop(), o = i[a];
      M.DEBUG && console.log(
        n.step,
        (n.loop > 1 ? "loop " + (n.loop - e) + ": " : "") + "SHPIX[]",
        a,
        s
      ), r.setRelative(o, o, s), r.touch(o);
    }
    n.loop = 1;
  }
  function Jc(n) {
    for (var t = n.stack, e = n.rp1, r = n.rp2, s = n.loop, i = n.z0[e], a = n.z1[r], o = n.fv, h = n.dpv, u = n.z2; s--; ) {
      var l = t.pop(), f = u[l];
      M.DEBUG && console.log(
        n.step,
        (n.loop > 1 ? "loop " + (n.loop - s) + ": " : "") + "IP[]",
        l,
        e,
        "<->",
        r
      ), o.interpolate(f, i, a, h), o.touch(f);
    }
    n.loop = 1;
  }
  function wa(n, t) {
    var e = t.stack, r = e.pop() / 64, s = e.pop(), i = t.z1[s], a = t.z0[t.rp0], o = t.fv, h = t.pv;
    o.setRelative(i, a, r, h), o.touch(i), M.DEBUG && console.log(t.step, "MSIRP[" + n + "]", r, s), t.rp1 = t.rp0, t.rp2 = s, n && (t.rp0 = s);
  }
  function $c(n) {
    for (var t = n.stack, e = n.rp0, r = n.z0[e], s = n.loop, i = n.fv, a = n.pv, o = n.z1; s--; ) {
      var h = t.pop(), u = o[h];
      M.DEBUG && console.log(
        n.step,
        (n.loop > 1 ? "loop " + (n.loop - s) + ": " : "") + "ALIGNRP[]",
        h
      ), i.setRelative(u, r, 0, a), i.touch(u);
    }
    n.loop = 1;
  }
  function Qc(n) {
    M.DEBUG && console.log(n.step, "RTDG[]"), n.round = dc;
  }
  function Fa(n, t) {
    var e = t.stack, r = e.pop(), s = e.pop(), i = t.z0[s], a = t.fv, o = t.pv, h = t.cvt[r];
    M.DEBUG && console.log(
      t.step,
      "MIAP[" + n + "]",
      r,
      "(",
      h,
      ")",
      s
    );
    var u = o.distance(i, Er);
    n && (Math.abs(u - h) < t.cvCutIn && (u = h), u = t.round(u)), a.setRelative(i, Er, u, o), t.zp0 === 0 && (i.xo = i.x, i.yo = i.y), a.touch(i), t.rp0 = t.rp1 = s;
  }
  function jc(n) {
    var t = n.prog, e = n.ip, r = n.stack, s = t[++e];
    M.DEBUG && console.log(n.step, "NPUSHB[]", s);
    for (var i = 0; i < s; i++)
      r.push(t[++e]);
    n.ip = e;
  }
  function Kc(n) {
    var t = n.ip, e = n.prog, r = n.stack, s = e[++t];
    M.DEBUG && console.log(n.step, "NPUSHW[]", s);
    for (var i = 0; i < s; i++) {
      var a = e[++t] << 8 | e[++t];
      a & 32768 && (a = -((a ^ 65535) + 1)), r.push(a);
    }
    n.ip = t;
  }
  function tf(n) {
    var t = n.stack, e = n.store;
    e || (e = n.store = []);
    var r = t.pop(), s = t.pop();
    M.DEBUG && console.log(n.step, "WS", r, s), e[s] = r;
  }
  function ef(n) {
    var t = n.stack, e = n.store, r = t.pop();
    M.DEBUG && console.log(n.step, "RS", r);
    var s = e && e[r] || 0;
    t.push(s);
  }
  function rf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "WCVTP", e, r), n.cvt[r] = e / 64;
  }
  function nf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "RCVT", e), t.push(n.cvt[e] * 64);
  }
  function Ta(n, t) {
    var e = t.stack, r = e.pop(), s = t.z2[r];
    M.DEBUG && console.log(t.step, "GC[" + n + "]", r), e.push(t.dpv.distance(s, Er, n, !1) * 64);
  }
  function ka(n, t) {
    var e = t.stack, r = e.pop(), s = e.pop(), i = t.z1[r], a = t.z0[s], o = t.dpv.distance(a, i, n, n);
    M.DEBUG && console.log(t.step, "MD[" + n + "]", r, s, "->", o), t.stack.push(Math.round(o * 64));
  }
  function sf(n) {
    M.DEBUG && console.log(n.step, "MPPEM[]"), n.stack.push(n.ppem);
  }
  function af(n) {
    M.DEBUG && console.log(n.step, "FLIPON[]"), n.autoFlip = !0;
  }
  function of(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "LT[]", e, r), t.push(r < e ? 1 : 0);
  }
  function hf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "LTEQ[]", e, r), t.push(r <= e ? 1 : 0);
  }
  function uf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "GT[]", e, r), t.push(r > e ? 1 : 0);
  }
  function lf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "GTEQ[]", e, r), t.push(r >= e ? 1 : 0);
  }
  function cf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "EQ[]", e, r), t.push(e === r ? 1 : 0);
  }
  function ff(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "NEQ[]", e, r), t.push(e !== r ? 1 : 0);
  }
  function pf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "ODD[]", e), t.push(Math.trunc(e) % 2 ? 1 : 0);
  }
  function df(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "EVEN[]", e), t.push(Math.trunc(e) % 2 ? 0 : 1);
  }
  function gf(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "IF[]", t), t || (jo(n, !0), M.DEBUG && console.log(n.step, "EIF[]"));
  }
  function mf(n) {
    M.DEBUG && console.log(n.step, "EIF[]");
  }
  function yf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "AND[]", e, r), t.push(e && r ? 1 : 0);
  }
  function vf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "OR[]", e, r), t.push(e || r ? 1 : 0);
  }
  function xf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "NOT[]", e), t.push(e ? 0 : 1);
  }
  function ls(n, t) {
    var e = t.stack, r = e.pop(), s = t.fv, i = t.pv, a = t.ppem, o = t.deltaBase + (n - 1) * 16, h = t.deltaShift, u = t.z0;
    M.DEBUG && console.log(t.step, "DELTAP[" + n + "]", r, e);
    for (var l = 0; l < r; l++) {
      var f = e.pop(), c = e.pop(), p = o + ((c & 240) >> 4);
      if (p === a) {
        var d = (c & 15) - 8;
        d >= 0 && d++, M.DEBUG && console.log(t.step, "DELTAPFIX", f, "by", d * h);
        var g = u[f];
        s.setRelative(g, g, d * h, i);
      }
    }
  }
  function bf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "SDB[]", e), n.deltaBase = e;
  }
  function Sf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "SDS[]", e), n.deltaShift = Math.pow(0.5, e);
  }
  function wf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "ADD[]", e, r), t.push(r + e);
  }
  function Ff(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "SUB[]", e, r), t.push(r - e);
  }
  function Tf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "DIV[]", e, r), t.push(r * 64 / e);
  }
  function kf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "MUL[]", e, r), t.push(r * e / 64);
  }
  function Mf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "ABS[]", e), t.push(Math.abs(e));
  }
  function Cf(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "NEG[]", e), t.push(-e);
  }
  function Af(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "FLOOR[]", e), t.push(Math.floor(e / 64) * 64);
  }
  function Ef(n) {
    var t = n.stack, e = t.pop();
    M.DEBUG && console.log(n.step, "CEILING[]", e), t.push(Math.ceil(e / 64) * 64);
  }
  function cn(n, t) {
    var e = t.stack, r = e.pop();
    M.DEBUG && console.log(t.step, "ROUND[]"), e.push(t.round(r / 64) * 64);
  }
  function Of(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "WCVTF[]", e, r), n.cvt[r] = e * n.ppem / n.font.unitsPerEm;
  }
  function cs(n, t) {
    var e = t.stack, r = e.pop(), s = t.ppem, i = t.deltaBase + (n - 1) * 16, a = t.deltaShift;
    M.DEBUG && console.log(t.step, "DELTAC[" + n + "]", r, e);
    for (var o = 0; o < r; o++) {
      var h = e.pop(), u = e.pop(), l = i + ((u & 240) >> 4);
      if (l === s) {
        var f = (u & 15) - 8;
        f >= 0 && f++;
        var c = f * a;
        M.DEBUG && console.log(t.step, "DELTACFIX", h, "by", c), t.cvt[h] += c;
      }
    }
  }
  function Lf(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "SROUND[]", t), n.round = Qo;
    var e;
    switch (t & 192) {
      case 0:
        e = 0.5;
        break;
      case 64:
        e = 1;
        break;
      case 128:
        e = 2;
        break;
      default:
        throw new Error("invalid SROUND value");
    }
    switch (n.srPeriod = e, t & 48) {
      case 0:
        n.srPhase = 0;
        break;
      case 16:
        n.srPhase = 0.25 * e;
        break;
      case 32:
        n.srPhase = 0.5 * e;
        break;
      case 48:
        n.srPhase = 0.75 * e;
        break;
      default:
        throw new Error("invalid SROUND value");
    }
    t &= 15, t === 0 ? n.srThreshold = 0 : n.srThreshold = (t / 8 - 0.5) * e;
  }
  function _f(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "S45ROUND[]", t), n.round = Qo;
    var e;
    switch (t & 192) {
      case 0:
        e = Math.sqrt(2) / 2;
        break;
      case 64:
        e = Math.sqrt(2);
        break;
      case 128:
        e = 2 * Math.sqrt(2);
        break;
      default:
        throw new Error("invalid S45ROUND value");
    }
    switch (n.srPeriod = e, t & 48) {
      case 0:
        n.srPhase = 0;
        break;
      case 16:
        n.srPhase = 0.25 * e;
        break;
      case 32:
        n.srPhase = 0.5 * e;
        break;
      case 48:
        n.srPhase = 0.75 * e;
        break;
      default:
        throw new Error("invalid S45ROUND value");
    }
    t &= 15, t === 0 ? n.srThreshold = 0 : n.srThreshold = (t / 8 - 0.5) * e;
  }
  function Rf(n) {
    M.DEBUG && console.log(n.step, "ROFF[]"), n.round = pc;
  }
  function Uf(n) {
    M.DEBUG && console.log(n.step, "RUTG[]"), n.round = mc;
  }
  function Bf(n) {
    M.DEBUG && console.log(n.step, "RDTG[]"), n.round = yc;
  }
  function Pf(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "SCANCTRL[]", t);
  }
  function Ma(n, t) {
    var e = t.stack, r = e.pop(), s = e.pop(), i = t.z2[r], a = t.z1[s];
    M.DEBUG && console.log(t.step, "SDPVTL[" + n + "]", r, s);
    var o, h;
    n ? (o = i.y - a.y, h = a.x - i.x) : (o = a.x - i.x, h = a.y - i.y), t.dpv = Pr(o, h);
  }
  function zf(n) {
    var t = n.stack, e = t.pop(), r = 0;
    M.DEBUG && console.log(n.step, "GETINFO[]", e), e & 1 && (r = 35), e & 32 && (r |= 4096), t.push(r);
  }
  function Df(n) {
    var t = n.stack, e = t.pop(), r = t.pop(), s = t.pop();
    M.DEBUG && console.log(n.step, "ROLL[]"), t.push(r), t.push(e), t.push(s);
  }
  function If(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "MAX[]", e, r), t.push(Math.max(r, e));
  }
  function Nf(n) {
    var t = n.stack, e = t.pop(), r = t.pop();
    M.DEBUG && console.log(n.step, "MIN[]", e, r), t.push(Math.min(r, e));
  }
  function Gf(n) {
    var t = n.stack.pop();
    M.DEBUG && console.log(n.step, "SCANTYPE[]", t);
  }
  function Hf(n) {
    var t = n.stack.pop(), e = n.stack.pop();
    switch (M.DEBUG && console.log(n.step, "INSTCTRL[]", t, e), t) {
      case 1:
        n.inhibitGridFit = !!e;
        return;
      case 2:
        n.ignoreCvt = !!e;
        return;
      default:
        throw new Error("invalid INSTCTRL[] selector");
    }
  }
  function de(n, t) {
    var e = t.stack, r = t.prog, s = t.ip;
    M.DEBUG && console.log(t.step, "PUSHB[" + n + "]");
    for (var i = 0; i < n; i++)
      e.push(r[++s]);
    t.ip = s;
  }
  function ge(n, t) {
    var e = t.ip, r = t.prog, s = t.stack;
    M.DEBUG && console.log(t.ip, "PUSHW[" + n + "]");
    for (var i = 0; i < n; i++) {
      var a = r[++e] << 8 | r[++e];
      a & 32768 && (a = -((a ^ 65535) + 1)), s.push(a);
    }
    t.ip = e;
  }
  function _(n, t, e, r, s, i) {
    var a = i.stack, o = n && a.pop(), h = a.pop(), u = i.rp0, l = i.z0[u], f = i.z1[h], c = i.minDis, p = i.fv, d = i.dpv, g, y, m, b;
    y = g = d.distance(f, l, !0, !0), m = y >= 0 ? 1 : -1, y = Math.abs(y), n && (b = i.cvt[o], r && Math.abs(y - b) < i.cvCutIn && (y = b)), e && y < c && (y = c), r && (y = i.round(y)), p.setRelative(f, l, m * y, d), p.touch(f), M.DEBUG && console.log(
      i.step,
      (n ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (e ? ">" : "_") + (r ? "R" : "_") + (s === 0 ? "Gr" : s === 1 ? "Bl" : s === 2 ? "Wh" : "") + "]",
      n ? o + "(" + i.cvt[o] + "," + b + ")" : "",
      h,
      "(d =",
      g,
      "->",
      m * y,
      ")"
    ), i.rp1 = i.rp0, i.rp2 = h, t && (i.rp0 = h);
  }
  Zo = [
    /* 0x00 */
    fa.bind(void 0, ie),
    /* 0x01 */
    fa.bind(void 0, Xt),
    /* 0x02 */
    pa.bind(void 0, ie),
    /* 0x03 */
    pa.bind(void 0, Xt),
    /* 0x04 */
    da.bind(void 0, ie),
    /* 0x05 */
    da.bind(void 0, Xt),
    /* 0x06 */
    ga.bind(void 0, 0),
    /* 0x07 */
    ga.bind(void 0, 1),
    /* 0x08 */
    ma.bind(void 0, 0),
    /* 0x09 */
    ma.bind(void 0, 1),
    /* 0x0A */
    xc,
    /* 0x0B */
    bc,
    /* 0x0C */
    Sc,
    /* 0x0D */
    wc,
    /* 0x0E */
    Fc,
    /* 0x0F */
    Tc,
    /* 0x10 */
    kc,
    /* 0x11 */
    Mc,
    /* 0x12 */
    Cc,
    /* 0x13 */
    Ac,
    /* 0x14 */
    Ec,
    /* 0x15 */
    Oc,
    /* 0x16 */
    Lc,
    /* 0x17 */
    _c,
    /* 0x18 */
    Rc,
    /* 0x19 */
    Uc,
    /* 0x1A */
    Bc,
    /* 0x1B */
    Pc,
    /* 0x1C */
    zc,
    /* 0x1D */
    Dc,
    /* 0x1E */
    void 0,
    // TODO SSWCI
    /* 0x1F */
    void 0,
    // TODO SSW
    /* 0x20 */
    Ic,
    /* 0x21 */
    us,
    /* 0x22 */
    Nc,
    /* 0x23 */
    Gc,
    /* 0x24 */
    Hc,
    /* 0x25 */
    qc,
    /* 0x26 */
    Xc,
    /* 0x27 */
    void 0,
    // TODO ALIGNPTS
    /* 0x28 */
    void 0,
    /* 0x29 */
    void 0,
    // TODO UTP
    /* 0x2A */
    Wc,
    /* 0x2B */
    Vc,
    /* 0x2C */
    Zc,
    /* 0x2D */
    void 0,
    // ENDF (eaten by FDEF)
    /* 0x2E */
    ya.bind(void 0, 0),
    /* 0x2F */
    ya.bind(void 0, 1),
    /* 0x30 */
    va.bind(void 0, ie),
    /* 0x31 */
    va.bind(void 0, Xt),
    /* 0x32 */
    xa.bind(void 0, 0),
    /* 0x33 */
    xa.bind(void 0, 1),
    /* 0x34 */
    ba.bind(void 0, 0),
    /* 0x35 */
    ba.bind(void 0, 1),
    /* 0x36 */
    Sa.bind(void 0, 0),
    /* 0x37 */
    Sa.bind(void 0, 1),
    /* 0x38 */
    Yc,
    /* 0x39 */
    Jc,
    /* 0x3A */
    wa.bind(void 0, 0),
    /* 0x3B */
    wa.bind(void 0, 1),
    /* 0x3C */
    $c,
    /* 0x3D */
    Qc,
    /* 0x3E */
    Fa.bind(void 0, 0),
    /* 0x3F */
    Fa.bind(void 0, 1),
    /* 0x40 */
    jc,
    /* 0x41 */
    Kc,
    /* 0x42 */
    tf,
    /* 0x43 */
    ef,
    /* 0x44 */
    rf,
    /* 0x45 */
    nf,
    /* 0x46 */
    Ta.bind(void 0, 0),
    /* 0x47 */
    Ta.bind(void 0, 1),
    /* 0x48 */
    void 0,
    // TODO SCFS
    /* 0x49 */
    ka.bind(void 0, 0),
    /* 0x4A */
    ka.bind(void 0, 1),
    /* 0x4B */
    sf,
    /* 0x4C */
    void 0,
    // TODO MPS
    /* 0x4D */
    af,
    /* 0x4E */
    void 0,
    // TODO FLIPOFF
    /* 0x4F */
    void 0,
    // TODO DEBUG
    /* 0x50 */
    of,
    /* 0x51 */
    hf,
    /* 0x52 */
    uf,
    /* 0x53 */
    lf,
    /* 0x54 */
    cf,
    /* 0x55 */
    ff,
    /* 0x56 */
    pf,
    /* 0x57 */
    df,
    /* 0x58 */
    gf,
    /* 0x59 */
    mf,
    /* 0x5A */
    yf,
    /* 0x5B */
    vf,
    /* 0x5C */
    xf,
    /* 0x5D */
    ls.bind(void 0, 1),
    /* 0x5E */
    bf,
    /* 0x5F */
    Sf,
    /* 0x60 */
    wf,
    /* 0x61 */
    Ff,
    /* 0x62 */
    Tf,
    /* 0x63 */
    kf,
    /* 0x64 */
    Mf,
    /* 0x65 */
    Cf,
    /* 0x66 */
    Af,
    /* 0x67 */
    Ef,
    /* 0x68 */
    cn.bind(void 0, 0),
    /* 0x69 */
    cn.bind(void 0, 1),
    /* 0x6A */
    cn.bind(void 0, 2),
    /* 0x6B */
    cn.bind(void 0, 3),
    /* 0x6C */
    void 0,
    // TODO NROUND[ab]
    /* 0x6D */
    void 0,
    // TODO NROUND[ab]
    /* 0x6E */
    void 0,
    // TODO NROUND[ab]
    /* 0x6F */
    void 0,
    // TODO NROUND[ab]
    /* 0x70 */
    Of,
    /* 0x71 */
    ls.bind(void 0, 2),
    /* 0x72 */
    ls.bind(void 0, 3),
    /* 0x73 */
    cs.bind(void 0, 1),
    /* 0x74 */
    cs.bind(void 0, 2),
    /* 0x75 */
    cs.bind(void 0, 3),
    /* 0x76 */
    Lf,
    /* 0x77 */
    _f,
    /* 0x78 */
    void 0,
    // TODO JROT[]
    /* 0x79 */
    void 0,
    // TODO JROF[]
    /* 0x7A */
    Rf,
    /* 0x7B */
    void 0,
    /* 0x7C */
    Uf,
    /* 0x7D */
    Bf,
    /* 0x7E */
    us,
    // actually SANGW, supposed to do only a pop though
    /* 0x7F */
    us,
    // actually AA, supposed to do only a pop though
    /* 0x80 */
    void 0,
    // TODO FLIPPT
    /* 0x81 */
    void 0,
    // TODO FLIPRGON
    /* 0x82 */
    void 0,
    // TODO FLIPRGOFF
    /* 0x83 */
    void 0,
    /* 0x84 */
    void 0,
    /* 0x85 */
    Pf,
    /* 0x86 */
    Ma.bind(void 0, 0),
    /* 0x87 */
    Ma.bind(void 0, 1),
    /* 0x88 */
    zf,
    /* 0x89 */
    void 0,
    // TODO IDEF
    /* 0x8A */
    Df,
    /* 0x8B */
    If,
    /* 0x8C */
    Nf,
    /* 0x8D */
    Gf,
    /* 0x8E */
    Hf,
    /* 0x8F */
    void 0,
    /* 0x90 */
    void 0,
    /* 0x91 */
    void 0,
    /* 0x92 */
    void 0,
    /* 0x93 */
    void 0,
    /* 0x94 */
    void 0,
    /* 0x95 */
    void 0,
    /* 0x96 */
    void 0,
    /* 0x97 */
    void 0,
    /* 0x98 */
    void 0,
    /* 0x99 */
    void 0,
    /* 0x9A */
    void 0,
    /* 0x9B */
    void 0,
    /* 0x9C */
    void 0,
    /* 0x9D */
    void 0,
    /* 0x9E */
    void 0,
    /* 0x9F */
    void 0,
    /* 0xA0 */
    void 0,
    /* 0xA1 */
    void 0,
    /* 0xA2 */
    void 0,
    /* 0xA3 */
    void 0,
    /* 0xA4 */
    void 0,
    /* 0xA5 */
    void 0,
    /* 0xA6 */
    void 0,
    /* 0xA7 */
    void 0,
    /* 0xA8 */
    void 0,
    /* 0xA9 */
    void 0,
    /* 0xAA */
    void 0,
    /* 0xAB */
    void 0,
    /* 0xAC */
    void 0,
    /* 0xAD */
    void 0,
    /* 0xAE */
    void 0,
    /* 0xAF */
    void 0,
    /* 0xB0 */
    de.bind(void 0, 1),
    /* 0xB1 */
    de.bind(void 0, 2),
    /* 0xB2 */
    de.bind(void 0, 3),
    /* 0xB3 */
    de.bind(void 0, 4),
    /* 0xB4 */
    de.bind(void 0, 5),
    /* 0xB5 */
    de.bind(void 0, 6),
    /* 0xB6 */
    de.bind(void 0, 7),
    /* 0xB7 */
    de.bind(void 0, 8),
    /* 0xB8 */
    ge.bind(void 0, 1),
    /* 0xB9 */
    ge.bind(void 0, 2),
    /* 0xBA */
    ge.bind(void 0, 3),
    /* 0xBB */
    ge.bind(void 0, 4),
    /* 0xBC */
    ge.bind(void 0, 5),
    /* 0xBD */
    ge.bind(void 0, 6),
    /* 0xBE */
    ge.bind(void 0, 7),
    /* 0xBF */
    ge.bind(void 0, 8),
    /* 0xC0 */
    _.bind(void 0, 0, 0, 0, 0, 0),
    /* 0xC1 */
    _.bind(void 0, 0, 0, 0, 0, 1),
    /* 0xC2 */
    _.bind(void 0, 0, 0, 0, 0, 2),
    /* 0xC3 */
    _.bind(void 0, 0, 0, 0, 0, 3),
    /* 0xC4 */
    _.bind(void 0, 0, 0, 0, 1, 0),
    /* 0xC5 */
    _.bind(void 0, 0, 0, 0, 1, 1),
    /* 0xC6 */
    _.bind(void 0, 0, 0, 0, 1, 2),
    /* 0xC7 */
    _.bind(void 0, 0, 0, 0, 1, 3),
    /* 0xC8 */
    _.bind(void 0, 0, 0, 1, 0, 0),
    /* 0xC9 */
    _.bind(void 0, 0, 0, 1, 0, 1),
    /* 0xCA */
    _.bind(void 0, 0, 0, 1, 0, 2),
    /* 0xCB */
    _.bind(void 0, 0, 0, 1, 0, 3),
    /* 0xCC */
    _.bind(void 0, 0, 0, 1, 1, 0),
    /* 0xCD */
    _.bind(void 0, 0, 0, 1, 1, 1),
    /* 0xCE */
    _.bind(void 0, 0, 0, 1, 1, 2),
    /* 0xCF */
    _.bind(void 0, 0, 0, 1, 1, 3),
    /* 0xD0 */
    _.bind(void 0, 0, 1, 0, 0, 0),
    /* 0xD1 */
    _.bind(void 0, 0, 1, 0, 0, 1),
    /* 0xD2 */
    _.bind(void 0, 0, 1, 0, 0, 2),
    /* 0xD3 */
    _.bind(void 0, 0, 1, 0, 0, 3),
    /* 0xD4 */
    _.bind(void 0, 0, 1, 0, 1, 0),
    /* 0xD5 */
    _.bind(void 0, 0, 1, 0, 1, 1),
    /* 0xD6 */
    _.bind(void 0, 0, 1, 0, 1, 2),
    /* 0xD7 */
    _.bind(void 0, 0, 1, 0, 1, 3),
    /* 0xD8 */
    _.bind(void 0, 0, 1, 1, 0, 0),
    /* 0xD9 */
    _.bind(void 0, 0, 1, 1, 0, 1),
    /* 0xDA */
    _.bind(void 0, 0, 1, 1, 0, 2),
    /* 0xDB */
    _.bind(void 0, 0, 1, 1, 0, 3),
    /* 0xDC */
    _.bind(void 0, 0, 1, 1, 1, 0),
    /* 0xDD */
    _.bind(void 0, 0, 1, 1, 1, 1),
    /* 0xDE */
    _.bind(void 0, 0, 1, 1, 1, 2),
    /* 0xDF */
    _.bind(void 0, 0, 1, 1, 1, 3),
    /* 0xE0 */
    _.bind(void 0, 1, 0, 0, 0, 0),
    /* 0xE1 */
    _.bind(void 0, 1, 0, 0, 0, 1),
    /* 0xE2 */
    _.bind(void 0, 1, 0, 0, 0, 2),
    /* 0xE3 */
    _.bind(void 0, 1, 0, 0, 0, 3),
    /* 0xE4 */
    _.bind(void 0, 1, 0, 0, 1, 0),
    /* 0xE5 */
    _.bind(void 0, 1, 0, 0, 1, 1),
    /* 0xE6 */
    _.bind(void 0, 1, 0, 0, 1, 2),
    /* 0xE7 */
    _.bind(void 0, 1, 0, 0, 1, 3),
    /* 0xE8 */
    _.bind(void 0, 1, 0, 1, 0, 0),
    /* 0xE9 */
    _.bind(void 0, 1, 0, 1, 0, 1),
    /* 0xEA */
    _.bind(void 0, 1, 0, 1, 0, 2),
    /* 0xEB */
    _.bind(void 0, 1, 0, 1, 0, 3),
    /* 0xEC */
    _.bind(void 0, 1, 0, 1, 1, 0),
    /* 0xED */
    _.bind(void 0, 1, 0, 1, 1, 1),
    /* 0xEE */
    _.bind(void 0, 1, 0, 1, 1, 2),
    /* 0xEF */
    _.bind(void 0, 1, 0, 1, 1, 3),
    /* 0xF0 */
    _.bind(void 0, 1, 1, 0, 0, 0),
    /* 0xF1 */
    _.bind(void 0, 1, 1, 0, 0, 1),
    /* 0xF2 */
    _.bind(void 0, 1, 1, 0, 0, 2),
    /* 0xF3 */
    _.bind(void 0, 1, 1, 0, 0, 3),
    /* 0xF4 */
    _.bind(void 0, 1, 1, 0, 1, 0),
    /* 0xF5 */
    _.bind(void 0, 1, 1, 0, 1, 1),
    /* 0xF6 */
    _.bind(void 0, 1, 1, 0, 1, 2),
    /* 0xF7 */
    _.bind(void 0, 1, 1, 0, 1, 3),
    /* 0xF8 */
    _.bind(void 0, 1, 1, 1, 0, 0),
    /* 0xF9 */
    _.bind(void 0, 1, 1, 1, 0, 1),
    /* 0xFA */
    _.bind(void 0, 1, 1, 1, 0, 2),
    /* 0xFB */
    _.bind(void 0, 1, 1, 1, 0, 3),
    /* 0xFC */
    _.bind(void 0, 1, 1, 1, 1, 0),
    /* 0xFD */
    _.bind(void 0, 1, 1, 1, 1, 1),
    /* 0xFE */
    _.bind(void 0, 1, 1, 1, 1, 2),
    /* 0xFF */
    _.bind(void 0, 1, 1, 1, 1, 3)
  ];
  function or(n) {
    this.char = n, this.state = {}, this.activeState = null;
  }
  function Ks(n, t, e) {
    this.contextName = e, this.startIndex = n, this.endOffset = t;
  }
  function Wf(n, t, e) {
    this.contextName = n, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = e;
  }
  function Nt(n, t) {
    this.context = n, this.index = t, this.length = n.length, this.current = n[t], this.backtrack = n.slice(0, t), this.lookahead = n.slice(t + 1);
  }
  function Cn(n) {
    this.eventId = n, this.subscribers = [];
  }
  function Vf(n) {
    var t = this, e = [
      "start",
      "end",
      "next",
      "newToken",
      "contextStart",
      "contextEnd",
      "insertToken",
      "removeToken",
      "removeRange",
      "replaceToken",
      "replaceRange",
      "composeRUD",
      "updateContextsRanges"
    ];
    e.forEach(function(s) {
      Object.defineProperty(t.events, s, {
        value: new Cn(s)
      });
    }), n && e.forEach(function(s) {
      var i = n[s];
      typeof i == "function" && t.events[s].subscribe(i);
    });
    var r = [
      "insertToken",
      "removeToken",
      "removeRange",
      "replaceToken",
      "replaceRange",
      "composeRUD"
    ];
    r.forEach(function(s) {
      t.events[s].subscribe(
        t.updateContextsRanges
      );
    });
  }
  function at(n) {
    this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], Vf.call(this, n);
  }
  or.prototype.setState = function(n, t) {
    return this.state[n] = t, this.activeState = { key: n, value: this.state[n] }, this.activeState;
  };
  or.prototype.getState = function(n) {
    return this.state[n] || null;
  };
  at.prototype.inboundIndex = function(n) {
    return n >= 0 && n < this.tokens.length;
  };
  at.prototype.composeRUD = function(n) {
    var t = this, e = !0, r = n.map(function(i) {
      return t[i[0]].apply(t, i.slice(1).concat(e));
    }), s = function(i) {
      return typeof i == "object" && i.hasOwnProperty("FAIL");
    };
    if (r.every(s))
      return {
        FAIL: "composeRUD: one or more operations hasn't completed successfully",
        report: r.filter(s)
      };
    this.dispatch("composeRUD", [r.filter(function(i) {
      return !s(i);
    })]);
  };
  at.prototype.replaceRange = function(n, t, e, r) {
    t = t !== null ? t : this.tokens.length;
    var s = e.every(function(a) {
      return a instanceof or;
    });
    if (!isNaN(n) && this.inboundIndex(n) && s) {
      var i = this.tokens.splice.apply(
        this.tokens,
        [n, t].concat(e)
      );
      return r || this.dispatch("replaceToken", [n, t, e]), [i, e];
    } else
      return { FAIL: "replaceRange: invalid tokens or startIndex." };
  };
  at.prototype.replaceToken = function(n, t, e) {
    if (!isNaN(n) && this.inboundIndex(n) && t instanceof or) {
      var r = this.tokens.splice(n, 1, t);
      return e || this.dispatch("replaceToken", [n, t]), [r[0], t];
    } else
      return { FAIL: "replaceToken: invalid token or index." };
  };
  at.prototype.removeRange = function(n, t, e) {
    t = isNaN(t) ? this.tokens.length : t;
    var r = this.tokens.splice(n, t);
    return e || this.dispatch("removeRange", [r, n, t]), r;
  };
  at.prototype.removeToken = function(n, t) {
    if (!isNaN(n) && this.inboundIndex(n)) {
      var e = this.tokens.splice(n, 1);
      return t || this.dispatch("removeToken", [e, n]), e;
    } else
      return { FAIL: "removeToken: invalid token index." };
  };
  at.prototype.insertToken = function(n, t, e) {
    var r = n.every(
      function(s) {
        return s instanceof or;
      }
    );
    return r ? (this.tokens.splice.apply(
      this.tokens,
      [t, 0].concat(n)
    ), e || this.dispatch("insertToken", [n, t]), n) : { FAIL: "insertToken: invalid token(s)." };
  };
  at.prototype.registerModifier = function(n, t, e) {
    this.events.newToken.subscribe(function(r, s) {
      var i = [r, s], a = t === null || t.apply(this, i) === !0, o = [r, s];
      if (a) {
        var h = e.apply(this, o);
        r.setState(n, h);
      }
    }), this.registeredModifiers.push(n);
  };
  Cn.prototype.subscribe = function(n) {
    return typeof n == "function" ? this.subscribers.push(n) - 1 : { FAIL: "invalid '" + this.eventId + "' event handler" };
  };
  Cn.prototype.unsubscribe = function(n) {
    this.subscribers.splice(n, 1);
  };
  Nt.prototype.setCurrentIndex = function(n) {
    this.index = n, this.current = this.context[n], this.backtrack = this.context.slice(0, n), this.lookahead = this.context.slice(n + 1);
  };
  Nt.prototype.get = function(n) {
    switch (!0) {
      case n === 0:
        return this.current;
      case (n < 0 && Math.abs(n) <= this.backtrack.length):
        return this.backtrack.slice(n)[0];
      case (n > 0 && n <= this.lookahead.length):
        return this.lookahead[n - 1];
      default:
        return null;
    }
  };
  at.prototype.rangeToText = function(n) {
    if (n instanceof Ks)
      return this.getRangeTokens(n).map(function(t) {
        return t.char;
      }).join("");
  };
  at.prototype.getText = function() {
    return this.tokens.map(function(n) {
      return n.char;
    }).join("");
  };
  at.prototype.getContext = function(n) {
    var t = this.registeredContexts[n];
    return t || null;
  };
  at.prototype.on = function(n, t) {
    var e = this.events[n];
    return e ? e.subscribe(t) : null;
  };
  at.prototype.dispatch = function(n, t) {
    var e = this, r = this.events[n];
    r instanceof Cn && r.subscribers.forEach(function(s) {
      s.apply(e, t || []);
    });
  };
  at.prototype.registerContextChecker = function(n, t, e) {
    if (this.getContext(n))
      return {
        FAIL: "context name '" + n + "' is already registered."
      };
    if (typeof t != "function")
      return {
        FAIL: "missing context start check."
      };
    if (typeof e != "function")
      return {
        FAIL: "missing context end check."
      };
    var r = new Wf(
      n,
      t,
      e
    );
    return this.registeredContexts[n] = r, this.contextCheckers.push(r), r;
  };
  at.prototype.getRangeTokens = function(n) {
    var t = n.startIndex + n.endOffset;
    return [].concat(
      this.tokens.slice(n.startIndex, t)
    );
  };
  at.prototype.getContextRanges = function(n) {
    var t = this.getContext(n);
    return t ? t.ranges : { FAIL: "context checker '" + n + "' is not registered." };
  };
  at.prototype.resetContextsRanges = function() {
    var n = this.registeredContexts;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var e = n[t];
        e.ranges = [];
      }
  };
  at.prototype.updateContextsRanges = function() {
    this.resetContextsRanges();
    for (var n = this.tokens.map(function(r) {
      return r.char;
    }), t = 0; t < n.length; t++) {
      var e = new Nt(n, t);
      this.runContextCheck(e);
    }
    this.dispatch("updateContextsRanges", [this.registeredContexts]);
  };
  at.prototype.setEndOffset = function(n, t) {
    var e = this.getContext(t).openRange.startIndex, r = new Ks(e, n, t), s = this.getContext(t).ranges;
    return r.rangeId = t + "." + s.length, s.push(r), this.getContext(t).openRange = null, r;
  };
  at.prototype.runContextCheck = function(n) {
    var t = this, e = n.index;
    this.contextCheckers.forEach(function(r) {
      var s = r.contextName, i = t.getContext(s).openRange;
      if (!i && r.checkStart(n) && (i = new Ks(e, null, s), t.getContext(s).openRange = i, t.dispatch("contextStart", [s, e])), i && r.checkEnd(n)) {
        var a = e - i.startIndex + 1, o = t.setEndOffset(a, s);
        t.dispatch("contextEnd", [s, o]);
      }
    });
  };
  at.prototype.tokenize = function(n) {
    this.tokens = [], this.resetContextsRanges();
    var t = Array.from(n);
    this.dispatch("start");
    for (var e = 0; e < t.length; e++) {
      var r = t[e], s = new Nt(t, e);
      this.dispatch("next", [s]), this.runContextCheck(s);
      var i = new or(r);
      this.tokens.push(i), this.dispatch("newToken", [i, s]);
    }
    return this.dispatch("end", [this.tokens]), this.tokens;
  };
  function xe(n) {
    return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n);
  }
  function Ko(n) {
    return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n);
  }
  function be(n) {
    return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n);
  }
  function pn(n) {
    return /[A-z]/.test(n);
  }
  function qf(n) {
    return /\s/.test(n);
  }
  function Mt(n) {
    this.font = n, this.features = {};
  }
  function Le(n) {
    this.id = n.id, this.tag = n.tag, this.substitution = n.substitution;
  }
  function zr(n, t) {
    if (!n)
      return -1;
    switch (t.format) {
      case 1:
        return t.glyphs.indexOf(n);
      case 2:
        for (var e = t.ranges, r = 0; r < e.length; r++) {
          var s = e[r];
          if (n >= s.start && n <= s.end) {
            var i = n - s.start;
            return s.index + i;
          }
        }
        break;
      default:
        return -1;
    }
    return -1;
  }
  function Xf(n, t) {
    var e = zr(n, t.coverage);
    return e === -1 ? null : n + t.deltaGlyphId;
  }
  function Zf(n, t) {
    var e = zr(n, t.coverage);
    return e === -1 ? null : t.substitute[e];
  }
  function fs(n, t) {
    for (var e = [], r = 0; r < n.length; r++) {
      var s = n[r], i = t.current;
      i = Array.isArray(i) ? i[0] : i;
      var a = zr(i, s);
      a !== -1 && e.push(a);
    }
    return e.length !== n.length ? -1 : e;
  }
  function Yf(n, t) {
    var e = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
    if (n.context.length < e)
      return [];
    var r = fs(
      t.inputCoverage,
      n
    );
    if (r === -1)
      return [];
    var s = t.inputCoverage.length - 1;
    if (n.lookahead.length < t.lookaheadCoverage.length)
      return [];
    for (var i = n.lookahead.slice(s); i.length && be(i[0].char); )
      i.shift();
    var a = new Nt(i, 0), o = fs(
      t.lookaheadCoverage,
      a
    ), h = [].concat(n.backtrack);
    for (h.reverse(); h.length && be(h[0].char); )
      h.shift();
    if (h.length < t.backtrackCoverage.length)
      return [];
    var u = new Nt(h, 0), l = fs(
      t.backtrackCoverage,
      u
    ), f = r.length === t.inputCoverage.length && o.length === t.lookaheadCoverage.length && l.length === t.backtrackCoverage.length, c = [];
    if (f)
      for (var p = 0; p < t.lookupRecords.length; p++)
        for (var d = t.lookupRecords[p], g = d.lookupListIndex, y = this.getLookupByIndex(g), m = 0; m < y.subtables.length; m++) {
          var b = y.subtables[m], v = this.getLookupMethod(y, b), x = this.getSubstitutionType(y, b);
          if (x === "12")
            for (var F = 0; F < r.length; F++) {
              var C = n.get(F), T = v(C);
              T && c.push(T);
            }
        }
    return c;
  }
  function Jf(n, t) {
    var e = n.current, r = zr(e, t.coverage);
    if (r === -1)
      return null;
    for (var s, i = t.ligatureSets[r], a = 0; a < i.length; a++) {
      s = i[a];
      for (var o = 0; o < s.components.length; o++) {
        var h = n.lookahead[o], u = s.components[o];
        if (h !== u)
          break;
        if (o === s.components.length - 1)
          return s;
      }
    }
    return null;
  }
  function $f(n, t) {
    var e = zr(n, t.coverage);
    return e === -1 ? null : t.sequences[e];
  }
  Mt.prototype.getDefaultScriptFeaturesIndexes = function() {
    for (var n = this.font.tables.gsub.scripts, t = 0; t < n.length; t++) {
      var e = n[t];
      if (e.tag === "DFLT")
        return e.script.defaultLangSys.featureIndexes;
    }
    return [];
  };
  Mt.prototype.getScriptFeaturesIndexes = function(n) {
    var t = this.font.tables;
    if (!t.gsub)
      return [];
    if (!n)
      return this.getDefaultScriptFeaturesIndexes();
    for (var e = this.font.tables.gsub.scripts, r = 0; r < e.length; r++) {
      var s = e[r];
      if (s.tag === n && s.script.defaultLangSys)
        return s.script.defaultLangSys.featureIndexes;
      var i = s.langSysRecords;
      if (i)
        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          if (o.tag === n) {
            var h = o.langSys;
            return h.featureIndexes;
          }
        }
    }
    return this.getDefaultScriptFeaturesIndexes();
  };
  Mt.prototype.mapTagsToFeatures = function(n, t) {
    for (var e = {}, r = 0; r < n.length; r++) {
      var s = n[r].tag, i = n[r].feature;
      e[s] = i;
    }
    this.features[t].tags = e;
  };
  Mt.prototype.getScriptFeatures = function(n) {
    var t = this.features[n];
    if (this.features.hasOwnProperty(n))
      return t;
    var e = this.getScriptFeaturesIndexes(n);
    if (!e)
      return null;
    var r = this.font.tables.gsub;
    return t = e.map(function(s) {
      return r.features[s];
    }), this.features[n] = t, this.mapTagsToFeatures(t, n), t;
  };
  Mt.prototype.getSubstitutionType = function(n, t) {
    var e = n.lookupType.toString(), r = t.substFormat.toString();
    return e + r;
  };
  Mt.prototype.getLookupMethod = function(n, t) {
    var e = this, r = this.getSubstitutionType(n, t);
    switch (r) {
      case "11":
        return function(s) {
          return Xf.apply(
            e,
            [s, t]
          );
        };
      case "12":
        return function(s) {
          return Zf.apply(
            e,
            [s, t]
          );
        };
      case "63":
        return function(s) {
          return Yf.apply(
            e,
            [s, t]
          );
        };
      case "41":
        return function(s) {
          return Jf.apply(
            e,
            [s, t]
          );
        };
      case "21":
        return function(s) {
          return $f.apply(
            e,
            [s, t]
          );
        };
      default:
        throw new Error(
          "lookupType: " + n.lookupType + " - substFormat: " + t.substFormat + " is not yet supported"
        );
    }
  };
  Mt.prototype.lookupFeature = function(n) {
    var t = n.contextParams, e = t.index, r = this.getFeature({
      tag: n.tag,
      script: n.script
    });
    if (!r)
      return new Error(
        "font '" + this.font.names.fullName.en + "' doesn't support feature '" + n.tag + "' for script '" + n.script + "'."
      );
    for (var s = this.getFeatureLookups(r), i = [].concat(t.context), a = 0; a < s.length; a++)
      for (var o = s[a], h = this.getLookupSubtables(o), u = 0; u < h.length; u++) {
        var l = h[u], f = this.getSubstitutionType(o, l), c = this.getLookupMethod(o, l), p = void 0;
        switch (f) {
          case "11":
            p = c(t.current), p && i.splice(e, 1, new Le({
              id: 11,
              tag: n.tag,
              substitution: p
            }));
            break;
          case "12":
            p = c(t.current), p && i.splice(e, 1, new Le({
              id: 12,
              tag: n.tag,
              substitution: p
            }));
            break;
          case "63":
            p = c(t), Array.isArray(p) && p.length && i.splice(e, 1, new Le({
              id: 63,
              tag: n.tag,
              substitution: p
            }));
            break;
          case "41":
            p = c(t), p && i.splice(e, 1, new Le({
              id: 41,
              tag: n.tag,
              substitution: p
            }));
            break;
          case "21":
            p = c(t.current), p && i.splice(e, 1, new Le({
              id: 21,
              tag: n.tag,
              substitution: p
            }));
            break;
        }
        t = new Nt(i, e), !(Array.isArray(p) && !p.length) && (p = null);
      }
    return i.length ? i : null;
  };
  Mt.prototype.supports = function(n) {
    if (!n.script)
      return !1;
    this.getScriptFeatures(n.script);
    var t = this.features.hasOwnProperty(n.script);
    if (!n.tag)
      return t;
    var e = this.features[n.script].some(function(r) {
      return r.tag === n.tag;
    });
    return t && e;
  };
  Mt.prototype.getLookupSubtables = function(n) {
    return n.subtables || null;
  };
  Mt.prototype.getLookupByIndex = function(n) {
    var t = this.font.tables.gsub.lookups;
    return t[n] || null;
  };
  Mt.prototype.getFeatureLookups = function(n) {
    return n.lookupListIndexes.map(this.getLookupByIndex.bind(this));
  };
  Mt.prototype.getFeature = function(t) {
    if (!this.font)
      return { FAIL: "No font was found" };
    this.features.hasOwnProperty(t.script) || this.getScriptFeatures(t.script);
    var e = this.features[t.script];
    return e ? e.tags[t.tag] ? this.features[t.script].tags[t.tag] : null : { FAIL: "No feature for script " + t.script };
  };
  function Qf(n) {
    var t = n.current, e = n.get(-1);
    return (
      // ? arabic first char
      e === null && xe(t) || // ? arabic char preceded with a non arabic char
      !xe(e) && xe(t)
    );
  }
  function jf(n) {
    var t = n.get(1);
    return (
      // ? last arabic char
      t === null || // ? next char is not arabic
      !xe(t)
    );
  }
  var Kf = {
    startCheck: Qf,
    endCheck: jf
  };
  function tp(n) {
    var t = n.current, e = n.get(-1);
    return (
      // ? an arabic char preceded with a non arabic char
      (xe(t) || be(t)) && !xe(e)
    );
  }
  function ep(n) {
    var t = n.get(1);
    switch (!0) {
      case t === null:
        return !0;
      case (!xe(t) && !be(t)):
        var e = qf(t);
        if (!e)
          return !0;
        if (e) {
          var r = !1;
          if (r = n.lookahead.some(
            function(s) {
              return xe(s) || be(s);
            }
          ), !r)
            return !0;
        }
        break;
      default:
        return !1;
    }
  }
  var rp = {
    startCheck: tp,
    endCheck: ep
  };
  function np(n, t, e) {
    t[e].setState(n.tag, n.substitution);
  }
  function sp(n, t, e) {
    t[e].setState(n.tag, n.substitution);
  }
  function ip(n, t, e) {
    n.substitution.forEach(function(r, s) {
      var i = t[e + s];
      i.setState(n.tag, r);
    });
  }
  function ap(n, t, e) {
    var r = t[e];
    r.setState(n.tag, n.substitution.ligGlyph);
    for (var s = n.substitution.components.length, i = 0; i < s; i++)
      r = t[e + i + 1], r.setState("deleted", !0);
  }
  var Ca = {
    11: np,
    12: sp,
    63: ip,
    41: ap
  };
  function ti(n, t, e) {
    n instanceof Le && Ca[n.id] && Ca[n.id](n, t, e);
  }
  function op(n) {
    for (var t = [].concat(n.backtrack), e = t.length - 1; e >= 0; e--) {
      var r = t[e], s = Ko(r), i = be(r);
      if (!s && !i)
        return !0;
      if (s)
        return !1;
    }
    return !1;
  }
  function hp(n) {
    if (Ko(n.current))
      return !1;
    for (var t = 0; t < n.lookahead.length; t++) {
      var e = n.lookahead[t], r = be(e);
      if (!r)
        return !0;
    }
    return !1;
  }
  function up(n) {
    var t = this, e = "arab", r = this.featuresTags[e], s = this.tokenizer.getRangeTokens(n);
    if (s.length !== 1) {
      var i = new Nt(
        s.map(
          function(o) {
            return o.getState("glyphIndex");
          }
        ),
        0
      ), a = new Nt(
        s.map(
          function(o) {
            return o.char;
          }
        ),
        0
      );
      s.forEach(function(o, h) {
        if (!be(o.char)) {
          i.setCurrentIndex(h), a.setCurrentIndex(h);
          var u = 0;
          op(a) && (u |= 1), hp(a) && (u |= 2);
          var l;
          switch (u) {
            case 1:
              l = "fina";
              break;
            case 2:
              l = "init";
              break;
            case 3:
              l = "medi";
              break;
          }
          if (r.indexOf(l) !== -1) {
            var f = t.query.lookupFeature({
              tag: l,
              script: e,
              contextParams: i
            });
            if (f instanceof Error)
              return console.info(f.message);
            f.forEach(function(c, p) {
              c instanceof Le && (ti(c, s, p), i.context[p] = c.substitution);
            });
          }
        }
      });
    }
  }
  function Aa(n, t) {
    var e = n.map(function(r) {
      return r.activeState.value;
    });
    return new Nt(e, 0);
  }
  function lp(n) {
    var t = this, e = "arab", r = this.tokenizer.getRangeTokens(n), s = Aa(r);
    s.context.forEach(function(i, a) {
      s.setCurrentIndex(a);
      var o = t.query.lookupFeature({
        tag: "rlig",
        script: e,
        contextParams: s
      });
      o.length && (o.forEach(
        function(h) {
          return ti(h, r, a);
        }
      ), s = Aa(r));
    });
  }
  function cp(n) {
    var t = n.current, e = n.get(-1);
    return (
      // ? latin first char
      e === null && pn(t) || // ? latin char preceded with a non latin char
      !pn(e) && pn(t)
    );
  }
  function fp(n) {
    var t = n.get(1);
    return (
      // ? last latin char
      t === null || // ? next char is not latin
      !pn(t)
    );
  }
  var pp = {
    startCheck: cp,
    endCheck: fp
  };
  function Ea(n, t) {
    var e = n.map(function(r) {
      return r.activeState.value;
    });
    return new Nt(e, 0);
  }
  function dp(n) {
    var t = this, e = "latn", r = this.tokenizer.getRangeTokens(n), s = Ea(r);
    s.context.forEach(function(i, a) {
      s.setCurrentIndex(a);
      var o = t.query.lookupFeature({
        tag: "liga",
        script: e,
        contextParams: s
      });
      o.length && (o.forEach(
        function(h) {
          return ti(h, r, a);
        }
      ), s = Ea(r));
    });
  }
  function Wt(n) {
    this.baseDir = n || "ltr", this.tokenizer = new at(), this.featuresTags = {};
  }
  Wt.prototype.setText = function(n) {
    this.text = n;
  };
  Wt.prototype.contextChecks = {
    latinWordCheck: pp,
    arabicWordCheck: Kf,
    arabicSentenceCheck: rp
  };
  function ps(n) {
    var t = this.contextChecks[n + "Check"];
    return this.tokenizer.registerContextChecker(
      n,
      t.startCheck,
      t.endCheck
    );
  }
  function gp() {
    return ps.call(this, "latinWord"), ps.call(this, "arabicWord"), ps.call(this, "arabicSentence"), this.tokenizer.tokenize(this.text);
  }
  function mp() {
    var n = this, t = this.tokenizer.getContextRanges("arabicSentence");
    t.forEach(function(e) {
      var r = n.tokenizer.getRangeTokens(e);
      n.tokenizer.replaceRange(
        e.startIndex,
        e.endOffset,
        r.reverse()
      );
    });
  }
  Wt.prototype.registerFeatures = function(n, t) {
    var e = this, r = t.filter(
      function(s) {
        return e.query.supports({ script: n, tag: s });
      }
    );
    this.featuresTags.hasOwnProperty(n) ? this.featuresTags[n] = this.featuresTags[n].concat(r) : this.featuresTags[n] = r;
  };
  Wt.prototype.applyFeatures = function(n, t) {
    if (!n)
      throw new Error(
        "No valid font was provided to apply features"
      );
    this.query || (this.query = new Mt(n));
    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      this.query.supports({ script: r.script }) && this.registerFeatures(r.script, r.tags);
    }
  };
  Wt.prototype.registerModifier = function(n, t, e) {
    this.tokenizer.registerModifier(n, t, e);
  };
  function ei() {
    if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
      throw new Error(
        "glyphIndex modifier is required to apply arabic presentation features."
      );
  }
  function yp() {
    var n = this, t = "arab";
    if (this.featuresTags.hasOwnProperty(t)) {
      ei.call(this);
      var e = this.tokenizer.getContextRanges("arabicWord");
      e.forEach(function(r) {
        up.call(n, r);
      });
    }
  }
  function vp() {
    var n = this, t = "arab";
    if (this.featuresTags.hasOwnProperty(t)) {
      var e = this.featuresTags[t];
      if (e.indexOf("rlig") !== -1) {
        ei.call(this);
        var r = this.tokenizer.getContextRanges("arabicWord");
        r.forEach(function(s) {
          lp.call(n, s);
        });
      }
    }
  }
  function xp() {
    var n = this, t = "latn";
    if (this.featuresTags.hasOwnProperty(t)) {
      var e = this.featuresTags[t];
      if (e.indexOf("liga") !== -1) {
        ei.call(this);
        var r = this.tokenizer.getContextRanges("latinWord");
        r.forEach(function(s) {
          dp.call(n, s);
        });
      }
    }
  }
  Wt.prototype.checkContextReady = function(n) {
    return !!this.tokenizer.getContext(n);
  };
  Wt.prototype.applyFeaturesToContexts = function() {
    this.checkContextReady("arabicWord") && (yp.call(this), vp.call(this)), this.checkContextReady("latinWord") && xp.call(this), this.checkContextReady("arabicSentence") && mp.call(this);
  };
  Wt.prototype.processText = function(n) {
    (!this.text || this.text !== n) && (this.setText(n), gp.call(this), this.applyFeaturesToContexts());
  };
  Wt.prototype.getBidiText = function(n) {
    return this.processText(n), this.tokenizer.getText();
  };
  Wt.prototype.getTextGlyphs = function(n) {
    this.processText(n);
    for (var t = [], e = 0; e < this.tokenizer.tokens.length; e++) {
      var r = this.tokenizer.tokens[e];
      if (!r.state.deleted) {
        var s = r.activeState.value;
        t.push(Array.isArray(s) ? s[0] : s);
      }
    }
    return t;
  };
  function K(n) {
    n = n || {}, n.tables = n.tables || {}, n.empty || (gr(n.familyName, "When creating a new Font object, familyName is required."), gr(n.styleName, "When creating a new Font object, styleName is required."), gr(n.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), gr(n.ascender, "When creating a new Font object, ascender is required."), gr(n.descender <= 0, "When creating a new Font object, negative descender value is required."), this.names = {
      fontFamily: { en: n.familyName || " " },
      fontSubfamily: { en: n.styleName || " " },
      fullName: { en: n.fullName || n.familyName + " " + n.styleName },
      // postScriptName may not contain any whitespace
      postScriptName: { en: n.postScriptName || (n.familyName + n.styleName).replace(/\s/g, "") },
      designer: { en: n.designer || " " },
      designerURL: { en: n.designerURL || " " },
      manufacturer: { en: n.manufacturer || " " },
      manufacturerURL: { en: n.manufacturerURL || " " },
      license: { en: n.license || " " },
      licenseURL: { en: n.licenseURL || " " },
      version: { en: n.version || "Version 0.1" },
      description: { en: n.description || " " },
      copyright: { en: n.copyright || " " },
      trademark: { en: n.trademark || " " }
    }, this.unitsPerEm = n.unitsPerEm || 1e3, this.ascender = n.ascender, this.descender = n.descender, this.createdTimestamp = n.createdTimestamp, this.tables = Object.assign(n.tables, {
      os2: Object.assign({
        usWeightClass: n.weightClass || this.usWeightClasses.MEDIUM,
        usWidthClass: n.widthClass || this.usWidthClasses.MEDIUM,
        fsSelection: n.fsSelection || this.fsSelectionValues.REGULAR
      }, n.tables.os2)
    })), this.supported = !0, this.glyphs = new Zt.GlyphSet(this, n.glyphs || []), this.encoding = new vo(this), this.position = new Ur(this), this.substitution = new kt(this), this.tables = this.tables || {}, this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", {
      get: function() {
        if (this._hinting)
          return this._hinting;
        if (this.outlinesFormat === "truetype")
          return this._hinting = new Jo(this);
      }
    });
  }
  K.prototype.hasChar = function(n) {
    return this.encoding.charToGlyphIndex(n) !== null;
  };
  K.prototype.charToGlyphIndex = function(n) {
    return this.encoding.charToGlyphIndex(n);
  };
  K.prototype.charToGlyph = function(n) {
    var t = this.charToGlyphIndex(n), e = this.glyphs.get(t);
    return e || (e = this.glyphs.get(0)), e;
  };
  K.prototype.updateFeatures = function(n) {
    return this.defaultRenderOptions.features.map(function(t) {
      return t.script === "latn" ? {
        script: "latn",
        tags: t.tags.filter(function(e) {
          return n[e];
        })
      } : t;
    });
  };
  K.prototype.stringToGlyphs = function(n, t) {
    var e = this, r = new Wt(), s = function(f) {
      return e.charToGlyphIndex(f.char);
    };
    r.registerModifier("glyphIndex", null, s);
    var i = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
    r.applyFeatures(this, i);
    for (var a = r.getTextGlyphs(n), o = a.length, h = new Array(o), u = this.glyphs.get(0), l = 0; l < o; l += 1)
      h[l] = this.glyphs.get(a[l]) || u;
    return h;
  };
  K.prototype.nameToGlyphIndex = function(n) {
    return this.glyphNames.nameToGlyphIndex(n);
  };
  K.prototype.nameToGlyph = function(n) {
    var t = this.nameToGlyphIndex(n), e = this.glyphs.get(t);
    return e || (e = this.glyphs.get(0)), e;
  };
  K.prototype.glyphIndexToName = function(n) {
    return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(n) : "";
  };
  K.prototype.getKerningValue = function(n, t) {
    n = n.index || n, t = t.index || t;
    var e = this.position.defaultKerningTables;
    return e ? this.position.getKerningValue(e, n, t) : this.kerningPairs[n + "," + t] || 0;
  };
  K.prototype.defaultRenderOptions = {
    kerning: !0,
    features: [
      /**
       * these 4 features are required to render Arabic text properly
       * and shouldn't be turned off when rendering arabic text.
       */
      { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
      { script: "latn", tags: ["liga", "rlig"] }
    ]
  };
  K.prototype.forEachGlyph = function(n, t, e, r, s, i) {
    t = t !== void 0 ? t : 0, e = e !== void 0 ? e : 0, r = r !== void 0 ? r : 72, s = Object.assign({}, this.defaultRenderOptions, s);
    var a = 1 / this.unitsPerEm * r, o = this.stringToGlyphs(n, s), h;
    if (s.kerning) {
      var u = s.script || this.position.getDefaultScriptName();
      h = this.position.getKerningTables(u, s.language);
    }
    for (var l = 0; l < o.length; l += 1) {
      var f = o[l];
      if (i.call(this, f, t, e, r, s), f.advanceWidth && (t += f.advanceWidth * a), s.kerning && l < o.length - 1) {
        var c = h ? this.position.getKerningValue(h, f.index, o[l + 1].index) : this.getKerningValue(f, o[l + 1]);
        t += c * a;
      }
      s.letterSpacing ? t += s.letterSpacing * r : s.tracking && (t += s.tracking / 1e3 * r);
    }
    return t;
  };
  K.prototype.getPath = function(n, t, e, r, s) {
    var i = new lt();
    return this.forEachGlyph(n, t, e, r, s, function(a, o, h, u) {
      var l = a.getPath(o, h, u, s, this);
      i.extend(l);
    }), i;
  };
  K.prototype.getPaths = function(n, t, e, r, s) {
    var i = [];
    return this.forEachGlyph(n, t, e, r, s, function(a, o, h, u) {
      var l = a.getPath(o, h, u, s, this);
      i.push(l);
    }), i;
  };
  K.prototype.getAdvanceWidth = function(n, t, e) {
    return this.forEachGlyph(n, 0, 0, t, e, function() {
    });
  };
  K.prototype.draw = function(n, t, e, r, s, i) {
    this.getPath(t, e, r, s, i).draw(n);
  };
  K.prototype.drawPoints = function(n, t, e, r, s, i) {
    this.forEachGlyph(t, e, r, s, i, function(a, o, h, u) {
      a.drawPoints(n, o, h, u);
    });
  };
  K.prototype.drawMetrics = function(n, t, e, r, s, i) {
    this.forEachGlyph(t, e, r, s, i, function(a, o, h, u) {
      a.drawMetrics(n, o, h, u);
    });
  };
  K.prototype.getEnglishName = function(n) {
    var t = this.names[n];
    if (t)
      return t.en;
  };
  K.prototype.validate = function() {
    var n = this;
    function t(r, s) {
    }
    function e(r) {
      var s = n.getEnglishName(r);
      s && s.trim().length > 0;
    }
    e("fontFamily"), e("weightName"), e("manufacturer"), e("copyright"), e("version"), this.unitsPerEm > 0;
  };
  K.prototype.toTables = function() {
    return ic.fontToTable(this);
  };
  K.prototype.toBuffer = function() {
    return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
  };
  K.prototype.toArrayBuffer = function() {
    for (var n = this.toTables(), t = n.encode(), e = new ArrayBuffer(t.length), r = new Uint8Array(e), s = 0; s < t.length; s++)
      r[s] = t[s];
    return e;
  };
  K.prototype.download = function(n) {
    var t = this.getEnglishName("fontFamily"), e = this.getEnglishName("fontSubfamily");
    n = n || t.replace(/\s/g, "") + "-" + e + ".otf";
    var r = this.toArrayBuffer();
    if (oc())
      if (window.URL = window.URL || window.webkitURL, window.URL) {
        var s = new DataView(r), i = new Blob([s], { type: "font/opentype" }), a = document.createElement("a");
        a.href = window.URL.createObjectURL(i), a.download = n;
        var o = document.createEvent("MouseEvents");
        o.initEvent("click", !0, !1), a.dispatchEvent(o);
      } else
        console.warn("Font file could not be downloaded. Try using a different browser.");
    else {
      var h = require("fs"), u = hc(r);
      h.writeFileSync(n, u);
    }
  };
  K.prototype.fsSelectionValues = {
    ITALIC: 1,
    //1
    UNDERSCORE: 2,
    //2
    NEGATIVE: 4,
    //4
    OUTLINED: 8,
    //8
    STRIKEOUT: 16,
    //16
    BOLD: 32,
    //32
    REGULAR: 64,
    //64
    USER_TYPO_METRICS: 128,
    //128
    WWS: 256,
    //256
    OBLIQUE: 512
    //512
  };
  K.prototype.usWidthClasses = {
    ULTRA_CONDENSED: 1,
    EXTRA_CONDENSED: 2,
    CONDENSED: 3,
    SEMI_CONDENSED: 4,
    MEDIUM: 5,
    SEMI_EXPANDED: 6,
    EXPANDED: 7,
    EXTRA_EXPANDED: 8,
    ULTRA_EXPANDED: 9
  };
  K.prototype.usWeightClasses = {
    THIN: 100,
    EXTRA_LIGHT: 200,
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMI_BOLD: 600,
    BOLD: 700,
    EXTRA_BOLD: 800,
    BLACK: 900
  };
  function th(n, t) {
    var e = JSON.stringify(n), r = 256;
    for (var s in t) {
      var i = parseInt(s);
      if (!(!i || i < 256)) {
        if (JSON.stringify(t[s]) === e)
          return i;
        r <= i && (r = i + 1);
      }
    }
    return t[r] = n, r;
  }
  function bp(n, t, e) {
    var r = th(t.name, e);
    return [
      { name: "tag_" + n, type: "TAG", value: t.tag },
      { name: "minValue_" + n, type: "FIXED", value: t.minValue << 16 },
      { name: "defaultValue_" + n, type: "FIXED", value: t.defaultValue << 16 },
      { name: "maxValue_" + n, type: "FIXED", value: t.maxValue << 16 },
      { name: "flags_" + n, type: "USHORT", value: 0 },
      { name: "nameID_" + n, type: "USHORT", value: r }
    ];
  }
  function Sp(n, t, e) {
    var r = {}, s = new U.Parser(n, t);
    return r.tag = s.parseTag(), r.minValue = s.parseFixed(), r.defaultValue = s.parseFixed(), r.maxValue = s.parseFixed(), s.skip("uShort", 1), r.name = e[s.parseUShort()] || {}, r;
  }
  function wp(n, t, e, r) {
    for (var s = th(t.name, r), i = [
      { name: "nameID_" + n, type: "USHORT", value: s },
      { name: "flags_" + n, type: "USHORT", value: 0 }
    ], a = 0; a < e.length; ++a) {
      var o = e[a].tag;
      i.push({
        name: "axis_" + n + " " + o,
        type: "FIXED",
        value: t.coordinates[o] << 16
      });
    }
    return i;
  }
  function Fp(n, t, e, r) {
    var s = {}, i = new U.Parser(n, t);
    s.name = r[i.parseUShort()] || {}, i.skip("uShort", 1), s.coordinates = {};
    for (var a = 0; a < e.length; ++a)
      s.coordinates[e[a].tag] = i.parseFixed();
    return s;
  }
  function Tp(n, t) {
    var e = new O.Table("fvar", [
      { name: "version", type: "ULONG", value: 65536 },
      { name: "offsetToData", type: "USHORT", value: 0 },
      { name: "countSizePairs", type: "USHORT", value: 2 },
      { name: "axisCount", type: "USHORT", value: n.axes.length },
      { name: "axisSize", type: "USHORT", value: 20 },
      { name: "instanceCount", type: "USHORT", value: n.instances.length },
      { name: "instanceSize", type: "USHORT", value: 4 + n.axes.length * 4 }
    ]);
    e.offsetToData = e.sizeOf();
    for (var r = 0; r < n.axes.length; r++)
      e.fields = e.fields.concat(bp(r, n.axes[r], t));
    for (var s = 0; s < n.instances.length; s++)
      e.fields = e.fields.concat(wp(s, n.instances[s], n.axes, t));
    return e;
  }
  function kp(n, t, e) {
    var r = new U.Parser(n, t), s = r.parseULong();
    N.argument(s === 65536, "Unsupported fvar table version.");
    var i = r.parseOffset16();
    r.skip("uShort", 1);
    for (var a = r.parseUShort(), o = r.parseUShort(), h = r.parseUShort(), u = r.parseUShort(), l = [], f = 0; f < a; f++)
      l.push(Sp(n, t + i + f * o, e));
    for (var c = [], p = t + i + a * o, d = 0; d < h; d++)
      c.push(Fp(n, p + d * u, l, e));
    return { axes: l, instances: c };
  }
  var Mp = { make: Tp, parse: kp }, Cp = function() {
    return {
      coverage: this.parsePointer(S.coverage),
      attachPoints: this.parseList(S.pointer(S.uShortList))
    };
  }, Ap = function() {
    var n = this.parseUShort();
    if (N.argument(
      n === 1 || n === 2 || n === 3,
      "Unsupported CaretValue table version."
    ), n === 1)
      return { coordinate: this.parseShort() };
    if (n === 2)
      return { pointindex: this.parseShort() };
    if (n === 3)
      return { coordinate: this.parseShort() };
  }, Ep = function() {
    return this.parseList(S.pointer(Ap));
  }, Op = function() {
    return {
      coverage: this.parsePointer(S.coverage),
      ligGlyphs: this.parseList(S.pointer(Ep))
    };
  }, Lp = function() {
    return this.parseUShort(), this.parseList(S.pointer(S.coverage));
  };
  function _p(n, t) {
    t = t || 0;
    var e = new S(n, t), r = e.parseVersion(1);
    N.argument(
      r === 1 || r === 1.2 || r === 1.3,
      "Unsupported GDEF table version."
    );
    var s = {
      version: r,
      classDef: e.parsePointer(S.classDef),
      attachList: e.parsePointer(Cp),
      ligCaretList: e.parsePointer(Op),
      markAttachClassDef: e.parsePointer(S.classDef)
    };
    return r >= 1.2 && (s.markGlyphSets = e.parsePointer(Lp)), s;
  }
  var Rp = { parse: _p }, Gt = new Array(10);
  Gt[1] = function() {
    var t = this.offset + this.relativeOffset, e = this.parseUShort();
    if (e === 1)
      return {
        posFormat: 1,
        coverage: this.parsePointer(S.coverage),
        value: this.parseValueRecord()
      };
    if (e === 2)
      return {
        posFormat: 2,
        coverage: this.parsePointer(S.coverage),
        values: this.parseValueRecordList()
      };
    N.assert(!1, "0x" + t.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
  };
  Gt[2] = function() {
    var t = this.offset + this.relativeOffset, e = this.parseUShort();
    N.assert(e === 1 || e === 2, "0x" + t.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
    var r = this.parsePointer(S.coverage), s = this.parseUShort(), i = this.parseUShort();
    if (e === 1)
      return {
        posFormat: e,
        coverage: r,
        valueFormat1: s,
        valueFormat2: i,
        pairSets: this.parseList(S.pointer(S.list(function() {
          return {
            // pairValueRecord
            secondGlyph: this.parseUShort(),
            value1: this.parseValueRecord(s),
            value2: this.parseValueRecord(i)
          };
        })))
      };
    if (e === 2) {
      var a = this.parsePointer(S.classDef), o = this.parsePointer(S.classDef), h = this.parseUShort(), u = this.parseUShort();
      return {
        // Class Pair Adjustment
        posFormat: e,
        coverage: r,
        valueFormat1: s,
        valueFormat2: i,
        classDef1: a,
        classDef2: o,
        class1Count: h,
        class2Count: u,
        classRecords: this.parseList(h, S.list(u, function() {
          return {
            value1: this.parseValueRecord(s),
            value2: this.parseValueRecord(i)
          };
        }))
      };
    }
  };
  Gt[3] = function() {
    return { error: "GPOS Lookup 3 not supported" };
  };
  Gt[4] = function() {
    return { error: "GPOS Lookup 4 not supported" };
  };
  Gt[5] = function() {
    return { error: "GPOS Lookup 5 not supported" };
  };
  Gt[6] = function() {
    return { error: "GPOS Lookup 6 not supported" };
  };
  Gt[7] = function() {
    return { error: "GPOS Lookup 7 not supported" };
  };
  Gt[8] = function() {
    return { error: "GPOS Lookup 8 not supported" };
  };
  Gt[9] = function() {
    return { error: "GPOS Lookup 9 not supported" };
  };
  function Up(n, t) {
    t = t || 0;
    var e = new S(n, t), r = e.parseVersion(1);
    return N.argument(r === 1 || r === 1.1, "Unsupported GPOS table version " + r), r === 1 ? {
      version: r,
      scripts: e.parseScriptList(),
      features: e.parseFeatureList(),
      lookups: e.parseLookupList(Gt)
    } : {
      version: r,
      scripts: e.parseScriptList(),
      features: e.parseFeatureList(),
      lookups: e.parseLookupList(Gt),
      variations: e.parseFeatureVariationsList()
    };
  }
  var Bp = new Array(10);
  function Pp(n) {
    return new O.Table("GPOS", [
      { name: "version", type: "ULONG", value: 65536 },
      { name: "scripts", type: "TABLE", value: new O.ScriptList(n.scripts) },
      { name: "features", type: "TABLE", value: new O.FeatureList(n.features) },
      { name: "lookups", type: "TABLE", value: new O.LookupList(n.lookups, Bp) }
    ]);
  }
  var zp = { parse: Up, make: Pp };
  function Dp(n) {
    var t = {};
    n.skip("uShort");
    var e = n.parseUShort();
    N.argument(e === 0, "Unsupported kern sub-table version."), n.skip("uShort", 2);
    var r = n.parseUShort();
    n.skip("uShort", 3);
    for (var s = 0; s < r; s += 1) {
      var i = n.parseUShort(), a = n.parseUShort(), o = n.parseShort();
      t[i + "," + a] = o;
    }
    return t;
  }
  function Ip(n) {
    var t = {};
    n.skip("uShort");
    var e = n.parseULong();
    e > 1 && console.warn("Only the first kern subtable is supported."), n.skip("uLong");
    var r = n.parseUShort(), s = r & 255;
    if (n.skip("uShort"), s === 0) {
      var i = n.parseUShort();
      n.skip("uShort", 3);
      for (var a = 0; a < i; a += 1) {
        var o = n.parseUShort(), h = n.parseUShort(), u = n.parseShort();
        t[o + "," + h] = u;
      }
    }
    return t;
  }
  function Np(n, t) {
    var e = new U.Parser(n, t), r = e.parseUShort();
    if (r === 0)
      return Dp(e);
    if (r === 1)
      return Ip(e);
    throw new Error("Unsupported kern table version (" + r + ").");
  }
  var Gp = { parse: Np };
  function Hp(n, t, e, r) {
    for (var s = new U.Parser(n, t), i = r ? s.parseUShort : s.parseULong, a = [], o = 0; o < e + 1; o += 1) {
      var h = i.call(s);
      r && (h *= 2), a.push(h);
    }
    return a;
  }
  var Wp = { parse: Hp };
  function Oa(n, t) {
    for (var e = [], r = 12, s = 0; s < t; s += 1) {
      var i = U.getTag(n, r), a = U.getULong(n, r + 4), o = U.getULong(n, r + 8), h = U.getULong(n, r + 12);
      e.push({ tag: i, checksum: a, offset: o, length: h, compression: !1 }), r += 16;
    }
    return e;
  }
  function Vp(n, t) {
    for (var e = [], r = 44, s = 0; s < t; s += 1) {
      var i = U.getTag(n, r), a = U.getULong(n, r + 4), o = U.getULong(n, r + 8), h = U.getULong(n, r + 12), u = void 0;
      o < h ? u = "WOFF" : u = !1, e.push({
        tag: i,
        offset: a,
        compression: u,
        compressedLength: o,
        length: h
      }), r += 20;
    }
    return e;
  }
  function ot(n, t) {
    if (t.compression === "WOFF") {
      var e = new Uint8Array(n.buffer, t.offset + 2, t.compressedLength - 2), r = new Uint8Array(t.length);
      if (Pu(e, r), r.byteLength !== t.length)
        throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
      var s = new DataView(r.buffer, 0);
      return { data: s, offset: 0 };
    } else
      return { data: n, offset: t.offset };
  }
  function qp(n, t) {
    t = t ?? {};
    var e, r, s = new K({ empty: !0 }), i = new DataView(n, 0), a, o = [], h = U.getTag(i, 0);
    if (h === "\0\0\0" || h === "true" || h === "typ1")
      s.outlinesFormat = "truetype", a = U.getUShort(i, 4), o = Oa(i, a);
    else if (h === "OTTO")
      s.outlinesFormat = "cff", a = U.getUShort(i, 4), o = Oa(i, a);
    else if (h === "wOFF") {
      var u = U.getTag(i, 4);
      if (u === "\0\0\0")
        s.outlinesFormat = "truetype";
      else if (u === "OTTO")
        s.outlinesFormat = "cff";
      else
        throw new Error("Unsupported OpenType flavor " + h);
      a = U.getUShort(i, 12), o = Vp(i, a);
    } else
      throw new Error("Unsupported OpenType signature " + h);
    for (var l, f, c, p, d, g, y, m, b, v, x, F, C = 0; C < a; C += 1) {
      var T = o[C], k = void 0;
      switch (T.tag) {
        case "cmap":
          k = ot(i, T), s.tables.cmap = yo.parse(k.data, k.offset), s.encoding = new xo(s.tables.cmap);
          break;
        case "cvt ":
          k = ot(i, T), F = new U.Parser(k.data, k.offset), s.tables.cvt = F.parseShortList(T.length / 2);
          break;
        case "fvar":
          f = T;
          break;
        case "fpgm":
          k = ot(i, T), F = new U.Parser(k.data, k.offset), s.tables.fpgm = F.parseByteList(T.length);
          break;
        case "head":
          k = ot(i, T), s.tables.head = Eo.parse(k.data, k.offset), s.unitsPerEm = s.tables.head.unitsPerEm, e = s.tables.head.indexToLocFormat;
          break;
        case "hhea":
          k = ot(i, T), s.tables.hhea = Oo.parse(k.data, k.offset), s.ascender = s.tables.hhea.ascender, s.descender = s.tables.hhea.descender, s.numberOfHMetrics = s.tables.hhea.numberOfHMetrics;
          break;
        case "hmtx":
          y = T;
          break;
        case "ltag":
          k = ot(i, T), r = _o.parse(k.data, k.offset);
          break;
        case "maxp":
          k = ot(i, T), s.tables.maxp = Ro.parse(k.data, k.offset), s.numGlyphs = s.tables.maxp.numGlyphs;
          break;
        case "name":
          v = T;
          break;
        case "OS/2":
          k = ot(i, T), s.tables.os2 = zs.parse(k.data, k.offset);
          break;
        case "post":
          k = ot(i, T), s.tables.post = Io.parse(k.data, k.offset), s.glyphNames = new Js(s.tables.post);
          break;
        case "prep":
          k = ot(i, T), F = new U.Parser(k.data, k.offset), s.tables.prep = F.parseByteList(T.length);
          break;
        case "glyf":
          c = T;
          break;
        case "loca":
          b = T;
          break;
        case "CFF ":
          l = T;
          break;
        case "kern":
          m = T;
          break;
        case "GDEF":
          p = T;
          break;
        case "GPOS":
          d = T;
          break;
        case "GSUB":
          g = T;
          break;
        case "meta":
          x = T;
          break;
      }
    }
    var B = ot(i, v);
    if (s.tables.name = Do.parse(B.data, B.offset, r), s.names = s.tables.name, c && b) {
      var P = e === 0, I = ot(i, b), rt = Wp.parse(I.data, I.offset, s.numGlyphs, P), V = ot(i, c);
      s.glyphs = Xo.parse(V.data, V.offset, rt, s, t);
    } else if (l) {
      var W = ot(i, l);
      Ao.parse(W.data, W.offset, s, t);
    } else
      throw new Error("Font doesn't contain TrueType or CFF outlines.");
    var Y = ot(i, y);
    if (Lo.parse(s, Y.data, Y.offset, s.numberOfHMetrics, s.numGlyphs, s.glyphs, t), nl(s, t), m) {
      var X = ot(i, m);
      s.kerningPairs = Gp.parse(X.data, X.offset);
    } else
      s.kerningPairs = {};
    if (p) {
      var $ = ot(i, p);
      s.tables.gdef = Rp.parse($.data, $.offset);
    }
    if (d) {
      var tt = ot(i, d);
      s.tables.gpos = zp.parse(tt.data, tt.offset), s.position.init();
    }
    if (g) {
      var j = ot(i, g);
      s.tables.gsub = No.parse(j.data, j.offset);
    }
    if (f) {
      var et = ot(i, f);
      s.tables.fvar = Mp.parse(et.data, et.offset, s.names);
    }
    if (x) {
      var q = ot(i, x);
      s.tables.meta = Go.parse(q.data, q.offset), s.metas = s.tables.meta;
    }
    return s;
  }
  function Xp(n) {
    return ((e, r) => {
      const s = Math.round, i = {}, a = e.encoding.cmap.glyphIndexMap, o = Object.keys(a), h = e.glyphs.glyphs[a[65]];
      let u = 1;
      h && (u = e.unitsPerEm / h.yMax);
      for (let l = 0; l < o.length; l++) {
        const f = o[l], c = e.glyphs.glyphs[a[f]];
        if (f !== void 0) {
          const p = {
            ha: s(c.advanceWidth),
            x_min: s(c.xMin),
            x_max: s(c.xMax),
            o: ""
          };
          c.path.commands.forEach(function(d) {
            d.type.toLowerCase() === "c" && (d.type = "b"), p.o += d.type.toLowerCase() + " ", d.x !== void 0 && d.y !== void 0 && (p.o += s(d.x) + " " + s(d.y) + " "), d.x1 !== void 0 && d.y1 !== void 0 && (p.o += s(d.x1) + " " + s(d.y1) + " "), d.x2 !== void 0 && d.y2 !== void 0 && (p.o += s(d.x2) + " " + s(d.y2) + " ");
          }), i[String.fromCodePoint(c.unicode)] = p;
        }
      }
      return {
        glyphs: i,
        familyName: e.getEnglishName("fullName"),
        ascender: s(e.ascender),
        descender: s(e.descender),
        underlinePosition: e.tables.post.underlinePosition,
        underlineThickness: e.tables.post.underlineThickness,
        boundingBox: {
          xMin: e.tables.head.xMin,
          xMax: e.tables.head.xMax,
          yMin: e.tables.head.yMin,
          yMax: e.tables.head.yMax
        },
        resolution: e.unitsPerEm || 1e3,
        scaleFactor: u,
        original_font_information: e.tables.name
      };
    })(qp(n));
  }
  class Zp extends kr {
    constructor(t, e = {}) {
      const r = e.font;
      if (r === void 0)
        super();
      else {
        const s = r.generateShapes(t, e.size);
        e.depth === void 0 && e.height !== void 0 && console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"), e.depth = e.depth !== void 0 ? e.depth : e.height !== void 0 ? e.height : 50, e.bevelThickness === void 0 && (e.bevelThickness = 10), e.bevelSize === void 0 && (e.bevelSize = 8), e.bevelEnabled === void 0 && (e.bevelEnabled = !1), super(s, e);
      }
      this.type = "TextGeometry";
    }
  }
  function La(n, t = !1) {
    const e = n[0].index !== null, r = new Set(Object.keys(n[0].attributes)), s = new Set(Object.keys(n[0].morphAttributes)), i = {}, a = {}, o = n[0].morphTargetsRelative, h = new vt();
    let u = 0;
    for (let l = 0; l < n.length; ++l) {
      const f = n[l];
      let c = 0;
      if (e !== (f.index !== null))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
      for (const p in f.attributes) {
        if (!r.has(p))
          return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + '. All geometries must have compatible attributes; make sure "' + p + '" attribute exists among all geometries, or in none of them.'), null;
        i[p] === void 0 && (i[p] = []), i[p].push(f.attributes[p]), c++;
      }
      if (c !== r.size)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". Make sure all geometries have the same number of attributes."), null;
      if (o !== f.morphTargetsRelative)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
      for (const p in f.morphAttributes) {
        if (!s.has(p))
          return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ".  .morphAttributes must be consistent throughout all geometries."), null;
        a[p] === void 0 && (a[p] = []), a[p].push(f.morphAttributes[p]);
      }
      if (t) {
        let p;
        if (e)
          p = f.index.count;
        else if (f.attributes.position !== void 0)
          p = f.attributes.position.count;
        else
          return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". The geometry must have either an index or a position attribute"), null;
        h.addGroup(u, p, l), u += p;
      }
    }
    if (e) {
      let l = 0;
      const f = [];
      for (let c = 0; c < n.length; ++c) {
        const p = n[c].index;
        for (let d = 0; d < p.count; ++d)
          f.push(p.getX(d) + l);
        l += n[c].attributes.position.count;
      }
      h.setIndex(f);
    }
    for (const l in i) {
      const f = _a(i[l]);
      if (!f)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " attribute."), null;
      h.setAttribute(l, f);
    }
    for (const l in a) {
      const f = a[l][0].length;
      if (f === 0) break;
      h.morphAttributes = h.morphAttributes || {}, h.morphAttributes[l] = [];
      for (let c = 0; c < f; ++c) {
        const p = [];
        for (let g = 0; g < a[l].length; ++g)
          p.push(a[l][g][c]);
        const d = _a(p);
        if (!d)
          return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " morphAttribute."), null;
        h.morphAttributes[l].push(d);
      }
    }
    return h;
  }
  function _a(n) {
    let t, e, r, s = -1, i = 0;
    for (let u = 0; u < n.length; ++u) {
      const l = n[u];
      if (t === void 0 && (t = l.array.constructor), t !== l.array.constructor)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
      if (e === void 0 && (e = l.itemSize), e !== l.itemSize)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
      if (r === void 0 && (r = l.normalized), r !== l.normalized)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
      if (s === -1 && (s = l.gpuType), s !== l.gpuType)
        return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
      i += l.count * e;
    }
    const a = new t(i), o = new Dt(a, e, r);
    let h = 0;
    for (let u = 0; u < n.length; ++u) {
      const l = n[u];
      if (l.isInterleavedBufferAttribute) {
        const f = h / e;
        for (let c = 0, p = l.count; c < p; c++)
          for (let d = 0; d < e; d++) {
            const g = l.getComponent(c, d);
            o.setComponent(c + f, d, g);
          }
      } else
        a.set(l.array, h);
      h += l.count * e;
    }
    return s !== void 0 && (o.gpuType = s), o;
  }
  function Yp(n, t = 1e-4) {
    t = Math.max(t, Number.EPSILON);
    const e = {}, r = n.getIndex(), s = n.getAttribute("position"), i = r ? r.count : s.count;
    let a = 0;
    const o = Object.keys(n.attributes), h = {}, u = {}, l = [], f = ["getX", "getY", "getZ", "getW"], c = ["setX", "setY", "setZ", "setW"];
    for (let b = 0, v = o.length; b < v; b++) {
      const x = o[b], F = n.attributes[x];
      h[x] = new F.constructor(
        new F.array.constructor(F.count * F.itemSize),
        F.itemSize,
        F.normalized
      );
      const C = n.morphAttributes[x];
      C && (u[x] || (u[x] = []), C.forEach((T, k) => {
        const B = new T.array.constructor(T.count * T.itemSize);
        u[x][k] = new T.constructor(B, T.itemSize, T.normalized);
      }));
    }
    const p = t * 0.5, d = Math.log10(1 / t), g = Math.pow(10, d), y = p * g;
    for (let b = 0; b < i; b++) {
      const v = r ? r.getX(b) : b;
      let x = "";
      for (let F = 0, C = o.length; F < C; F++) {
        const T = o[F], k = n.getAttribute(T), B = k.itemSize;
        for (let P = 0; P < B; P++)
          x += `${~~(k[f[P]](v) * g + y)},`;
      }
      if (x in e)
        l.push(e[x]);
      else {
        for (let F = 0, C = o.length; F < C; F++) {
          const T = o[F], k = n.getAttribute(T), B = n.morphAttributes[T], P = k.itemSize, I = h[T], rt = u[T];
          for (let V = 0; V < P; V++) {
            const W = f[V], Y = c[V];
            if (I[Y](a, k[W](v)), B)
              for (let X = 0, $ = B.length; X < $; X++)
                rt[X][Y](a, B[X][W](v));
          }
        }
        e[x] = a, l.push(a), a++;
      }
    }
    const m = n.clone();
    for (const b in n.attributes) {
      const v = h[b];
      if (m.setAttribute(b, new v.constructor(
        v.array.slice(0, a * v.itemSize),
        v.itemSize,
        v.normalized
      )), b in u)
        for (let x = 0; x < u[b].length; x++) {
          const F = u[b][x];
          m.morphAttributes[b][x] = new F.constructor(
            F.array.slice(0, a * F.itemSize),
            F.itemSize,
            F.normalized
          );
        }
    }
    return m.setIndex(l), m;
  }
  const ai = class ai {
    /**
     * Dummy replacement for `computeVertexNormals` that does nothing.
     */
    static dummyComputeVertexNormals() {
    }
    /**
     * Disable vertex normal computation globally.
     *
     * After calling this, all calls to `computeVertexNormals`
     * will do nothing until {@link restore} is called.
     */
    static disable() {
      vt.prototype.computeVertexNormals = this.dummyComputeVertexNormals;
    }
    /**
     * Restore the original `computeVertexNormals` implementation.
     */
    static restore() {
      vt.prototype.computeVertexNormals = this.originalComputeVertexNormals;
    }
    /**
     * Execute a function with normal computation disabled,
     * then automatically restore afterwards.
     *
     * This is the safest way to create geometries without normals.
     *
     * Example:
     * ```ts
     * const geom = NormalComputationToggle.runWithoutNormals(() =>
     *   new TextGeometry("World", { font, size: 1, height: 0.2 })
     * );
     * ```
     *
     * @param fn - A callback that creates the geometry.
     * @returns The result of the callback, e.g., a geometry.
     */
    static runWithoutNormals(t) {
      this.disable();
      try {
        return t();
      } finally {
        this.restore();
      }
    }
  };
  ai.originalComputeVertexNormals = vt.prototype.computeVertexNormals;
  let Is = ai;
  const Ae = new D();
  class Ra extends so {
    constructor(t, e, r) {
      super(t), this.isFound = !1, this.fontSize = e, this.font = r, this.width = this.getCharWidth(t, e, r);
    }
    /**
     * Converts the text shape to a THREE.js geometry.
     * This is used for 3D rendering of the text.
     * @returns A THREE.js BufferGeometry representing the text shape
     */
    toGeometry() {
      let t = this.font.cache.getGeometry(this.char, this.fontSize);
      return t == null && (t = Is.runWithoutNormals(() => {
        const e = new Zp(this.char, {
          font: this.font.font,
          depth: 0,
          size: this.fontSize,
          curveSegments: 3,
          // change this to increase/decrease display precision
          bevelSegments: 3,
          // Pass dummy uv generator to save computation cost because rendering font characters
          // always use color material and don't need 'uv' data.
          UVGenerator: {
            generateTopUV: () => [Ae, Ae, Ae],
            generateSideWallUV: () => [Ae, Ae, Ae, Ae]
          }
        });
        return e.hasAttribute("uv") && e.deleteAttribute("uv"), e.hasAttribute("normal") && e.deleteAttribute("normal"), Yp(e, 1e-6);
      })), t;
    }
    /**
     * Calculates the width of a character in the font.
     * @param char - The character to calculate width for
     * @param fontSize - The size of the font in pixels
     * @param font - The mesh font to use
     * @returns The width of the character in pixels
     */
    getCharWidth(t, e, r) {
      const s = r.data.glyphs[t];
      return s ? (this.isFound = !0, s.ha * e / r.data.resolution) : (this.isFound = !1, 0);
    }
  }
  class Ua extends no {
    /**
     * Creates a new instance of MeshFont.
     * @param data - Either a MeshFontData object containing font information or an ArrayBuffer containing raw font data
     */
    constructor(t) {
      super(), this.type = "mesh", t instanceof ArrayBuffer ? this.data = Xp(t) : this.data = t, this.font = new Mu(this.data);
    }
    /**
     * Return true if this font contains glyph of the specified character. Otherwise, return false.
     * @param char - The character to check
     * @returns True if this font contains glyph of the specified character. Otherwise, return false.
     */
    hasChar(t) {
      return this.data.glyphs[t] != null;
    }
    /**
     * Generates shapes for a text string
     * @param text - The text to generate shapes for
     * @param size - The size of the text
     * @returns Array of shapes representing the text
     */
    generateShapes(t, e) {
      return this.font.generateShapes(t, e);
    }
    /**
     * Gets the shape data for a specific character at a given size.
     * @param char - The character to get the shape for
     * @param size - The desired size of the character
     * @returns The shape data for the character, or undefined if not found
     */
    getCharShape(t, e) {
      if (!this.data.glyphs[t]) {
        this.addUnsupportedChar(t);
        return;
      }
      return new Ra(t, e, this);
    }
    /**
     * Gets the scale factor for this font.
     * This is used to adjust the size of characters when rendering.
     * @returns The scale factor as a number
     */
    getScaleFactor() {
      return this.scaleFactor == null ? (this.scaleFactor = this.data.scaleFactor, this.scaleFactor) : this.scaleFactor;
    }
    /**
     * Gets the shape to display when a character is not found in the font.
     * Uses "?" as a replacement character.
     * @param size - The desired size of the not found shape
     * @returns The shape data for the not found indicator
     */
    getNotFoundTextShape(t) {
      return new Ra("?", t, this);
    }
  }
  class wt {
    /**
     * Converts an unsigned byte to a signed byte as used in SHX format.
     * Values > 127 are converted to their signed equivalent (-128 to -1).
     * @param value - The unsigned byte value to convert
     * @returns The signed byte value
     */
    static byteToSByte(t) {
      return (t & 127) - (t & 128 ? 128 : 0);
    }
    /**
     * Creates a new ShxFileReader instance.
     * @param arraybuffer - The ArrayBuffer to read from
     */
    constructor(t) {
      this.position = 0, this.data = new DataView(t);
    }
    /**
     * Reads a specified number of bytes from the current position.
     * @param length - Number of bytes to read (optional)
     * @returns A Uint8Array containing the read bytes
     * @throws Error if reading beyond buffer bounds
     */
    readBytes(t = 1) {
      this.data.byteLength < this.position + t && this.throwOutOfRangeError(this.position + t);
      const e = new Uint8Array(this.data.buffer, this.position, t);
      return this.position += t, e;
    }
    /**
     * Skips a specified number of bytes from the current position.
     * @param length - Number of bytes to skip
     * @throws Error if skipping beyond buffer bounds
     */
    skip(t) {
      this.data.byteLength < this.position + t && this.throwOutOfRangeError(this.position + t), this.position += t;
    }
    /**
     * Reads an unsigned 8-bit integer.
     * @returns The read uint8 value
     * @throws Error if reading beyond buffer bounds
     */
    readUint8() {
      this.data.byteLength < this.position + 1 && this.throwOutOfRangeError(this.position + 1);
      const t = this.data.getUint8(this.position);
      return this.position += 1, t;
    }
    /**
     * Reads a signed 8-bit integer.
     * @returns The read int8 value
     * @throws Error if reading beyond buffer bounds
     */
    readInt8() {
      this.data.byteLength < this.position + 1 && this.throwOutOfRangeError(this.position + 1);
      const t = this.data.getInt8(this.position);
      return this.position += 1, t;
    }
    /**
     * Reads an unsigned 16-bit integer.
     * @param littleEndian If false, a big-endian value should be read.
     * @returns The read uint16 value
     * @throws Error if reading beyond buffer bounds
     */
    readUint16(t = !0) {
      this.data.byteLength < this.position + 2 && this.throwOutOfRangeError(this.position + 2);
      const e = this.data.getUint16(this.position, t);
      return this.position += 2, e;
    }
    /**
     * Reads a signed 16-bit integer.
     * @returns The read int16 value
     * @throws Error if reading beyond buffer bounds
     */
    readInt16() {
      this.data.byteLength < this.position + 2 && this.throwOutOfRangeError(this.position + 2);
      const t = this.data.getInt16(this.position, !0);
      return this.position += 2, t;
    }
    /**
     * Reads an unsigned 32-bit integer.
     * @returns The read uint32 value
     * @throws Error if reading beyond buffer bounds
     */
    readUint32() {
      this.data.byteLength < this.position + 4 && this.throwOutOfRangeError(this.position + 4);
      const t = this.data.getUint32(this.position, !0);
      return this.position += 4, t;
    }
    /**
     * Reads a signed 32-bit integer.
     * @returns The read int32 value
     * @throws Error if reading beyond buffer bounds
     */
    readInt32() {
      this.data.byteLength < this.position + 4 && this.throwOutOfRangeError(this.position + 4);
      const t = this.data.getInt32(this.position, !0);
      return this.position += 4, t;
    }
    /**
     * Reads a 32-bit floating point number.
     * @returns The read float32 value
     * @throws Error if reading beyond buffer bounds
     */
    readFloat32() {
      this.data.byteLength < this.position + 4 && this.throwOutOfRangeError(this.position + 4);
      const t = this.data.getFloat32(this.position, !0);
      return this.position += 4, t;
    }
    /**
     * Reads a 64-bit floating point number.
     * @returns The read float64 value
     * @throws Error if reading beyond buffer bounds
     */
    readFloat64() {
      this.data.byteLength < this.position + 8 && this.throwOutOfRangeError(this.position + 8);
      const t = this.data.getFloat64(this.position, !0);
      return this.position += 8, t;
    }
    /**
     * Sets the current read position in the buffer.
     * @param position - The new position to set
     */
    setPosition(t) {
      this.data.byteLength < t && this.throwOutOfRangeError(t), this.position = t;
    }
    /**
     * Checks if the current position is at the end of the buffer.
     * @returns True if at the end of the buffer, false otherwise
     */
    isEnd() {
      return this.position === this.data.byteLength - 1;
    }
    /**
     * Gets the current position in the buffer.
     * @returns The current position
     */
    get currentPosition() {
      return this.position;
    }
    /**
     * Gets the total length of the buffer.
     * @returns The buffer length in bytes
     */
    get length() {
      return this.data.byteLength;
    }
    /**
     * Throws an error when attempting to read beyond buffer bounds.
     * @param position - The position that caused the error
     * @throws Error with details about the out of range access
     */
    throwOutOfRangeError(t) {
      throw new Error(
        `Position ${t} is out of range for the data length ${this.data.byteLength}!`
      );
    }
  }
  var Tt = /* @__PURE__ */ ((n) => (n.SHAPES = "shapes", n.BIGFONT = "bigfont", n.UNIFONT = "unifont", n))(Tt || {});
  let Jp = class {
    parse(t) {
      const e = this.parseHeader(t).split(" "), r = e[1].toLocaleLowerCase();
      if (!Object.values(Tt).includes(r))
        throw new Error(`Invalid font type: ${r}`);
      return {
        fileHeader: e[0],
        fontType: r,
        fileVersion: e[2]
      };
    }
    parseHeader(t) {
      let e = "", r = 0;
      for (; t.currentPosition < t.length - 2 && r < 1024; ) {
        const s = t.readUint8();
        if (s === 13) {
          const i = t.currentPosition, a = t.readUint8(), o = t.readUint8();
          if (a === 10 && o === 26)
            break;
          t.setPosition(i), e += String.fromCharCode(s);
        } else
          e += String.fromCharCode(s);
        r++;
      }
      return e.trim();
    }
  };
  class $p {
    parse(t) {
      try {
        t.readBytes(4);
        const e = t.readInt16();
        if (e <= 0)
          throw new Error("Invalid shape count in font file");
        const r = [];
        for (let a = 0; a < e; a++) {
          const o = t.readUint16(), h = t.readUint16();
          h > 0 && r.push({ code: o, length: h });
        }
        const s = {};
        for (const a of r)
          try {
            const o = t.readBytes(a.length);
            if (o.length === a.length) {
              const h = o.indexOf(0);
              let u = 0;
              h >= 0 && h < o.length && (u = h + 1), u < o.length && (s[a.code] = o.subarray(u));
            }
          } catch {
            console.warn(`Failed to read shape data for code ${a.code}`);
          }
        const i = {
          data: s,
          info: "",
          baseUp: 8,
          // Default values
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
        if (0 in s) {
          const a = s[0];
          try {
            const o = new TextDecoder().decode(a);
            let h = o.indexOf("\0");
            h >= 0 && (i.info = o.substring(0, h), h + 3 < a.length && (i.baseUp = a[h + 1], i.baseDown = a[h + 2], i.orientation = a[h + 3] === 0 ? "horizontal" : "vertical"));
          } catch {
            console.warn("Failed to parse font info block");
          }
        }
        return i;
      } catch (e) {
        return console.error("Error parsing shape font:", e), {
          data: {},
          info: "Failed to parse font file",
          baseUp: 8,
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
      }
    }
  }
  class Qp {
    parse(t) {
      try {
        t.readInt16();
        const e = t.readInt16(), r = t.readInt16();
        if (e <= 0)
          throw new Error("Invalid character count in font file");
        t.skip(r * 4);
        const s = [];
        for (let o = 0; o < e; o++) {
          const h = t.readUint16(!1), u = t.readUint16(), l = t.readUint32();
          (h !== 0 || u !== 0 || l !== 0) && s.push({ code: h, length: u, offset: l });
        }
        const i = {};
        for (const o of s)
          try {
            t.setPosition(o.offset);
            const h = t.readBytes(o.length);
            h.length === o.length && (i[o.code] = h);
          } catch {
            console.warn(`Failed to read bigfont data for code ${o.code}`);
          }
        const a = {
          data: i,
          info: "",
          baseUp: 8,
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
        if (0 in i) {
          const o = i[0];
          try {
            const h = this.utf8ArrayToStr(o);
            let u = h.indexOf("\0");
            u >= 0 && (a.info = h.substring(0, u), u++, u + 3 < o.length && (o.length - u === 4 ? (a.baseUp = o[u++], a.baseDown = o[u++], a.orientation = o[u++] === 0 ? "horizontal" : "vertical") : (a.baseUp = o[u++], u++, a.orientation = o[u++] === 0 ? "horizontal" : "vertical", a.baseDown = o[u++], a.isExtended = !0)));
          } catch {
            console.warn("Failed to parse bigfont info block");
          }
        }
        return a;
      } catch (e) {
        return console.error("Error parsing big font:", e), {
          data: {},
          info: "Failed to parse font file",
          baseUp: 8,
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
      }
    }
    utf8ArrayToStr(t) {
      let e = "", r = 0;
      for (; r < t.length; ) {
        const s = t[r++];
        switch (s >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            e += String.fromCharCode(s);
            break;
          case 12:
          case 13: {
            const i = t[r++];
            e += String.fromCharCode((s & 31) << 6 | i & 63);
            break;
          }
          case 14: {
            const i = t[r++], a = t[r++];
            e += String.fromCharCode(
              (s & 15) << 12 | (i & 63) << 6 | (a & 63) << 0
            );
            break;
          }
        }
      }
      return e;
    }
  }
  class jp {
    parse(t) {
      try {
        const e = t.readInt32();
        if (e <= 0)
          throw new Error("Invalid character count in font file");
        const r = t.readInt16(), s = t.readBytes(r), i = {
          data: {},
          info: "",
          baseUp: 8,
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
        try {
          const o = new TextDecoder().decode(s);
          let h = o.indexOf("\0");
          h >= 0 && (i.info = o.substring(0, h), h + 3 < s.length && (i.baseUp = s[h + 1], i.baseDown = s[h + 2], i.orientation = s[h + 3] === 0 ? "horizontal" : "vertical"));
        } catch {
          console.warn("Failed to parse unifont info block");
        }
        const a = {};
        for (let o = 0; o < e - 1; o++)
          try {
            const h = t.readUint16(), u = t.readUint16();
            if (u > 0) {
              const l = t.readBytes(u);
              if (l.length === u) {
                const f = l.indexOf(0);
                let c = 0;
                f >= 0 && f < l.length && (c = f + 1), c < l.length && (a[h] = l.subarray(c));
              }
            }
          } catch {
            console.warn("Failed to read unifont character data");
            break;
          }
        return i.data = a, i;
      } catch (e) {
        return console.error("Error parsing unifont:", e), {
          data: {},
          info: "Failed to parse font file",
          baseUp: 8,
          baseDown: 2,
          orientation: "horizontal",
          isExtended: !1
        };
      }
    }
  }
  class Kp {
    static createParser(t) {
      switch (t) {
        case Tt.SHAPES:
          return new $p();
        case Tt.BIGFONT:
          return new Qp();
        case Tt.UNIFONT:
          return new jp();
        default:
          throw new Error(`Unsupported font type: ${t}`);
      }
    }
  }
  class ht {
    /**
     * Creates a new Point instance.
     * @param x - The x-coordinate (defaults to 0)
     * @param y - The y-coordinate (defaults to 0)
     */
    constructor(t = 0, e = 0) {
      this.x = t, this.y = e;
    }
    /**
     * Sets the coordinates of the point.
     * @param x - The new x-coordinate
     * @param y - The new y-coordinate
     * @returns The point instance for method chaining
     */
    set(t, e) {
      return this.x = t, this.y = e, this;
    }
    /**
     * Calculates the length (magnitude) of the vector from origin to this point.
     * @returns The length of the vector
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Normalizes the point vector to have a length of 1.
     * @returns The point instance for method chaining
     */
    normalize() {
      const t = this.length();
      return t !== 0 && (this.x /= t, this.y /= t), this;
    }
    /**
     * Creates a new Point instance with the same coordinates.
     * @returns A new Point instance with the same x and y values
     */
    clone() {
      return new ht(this.x, this.y);
    }
    /**
     * Adds another point's coordinates to this point.
     * @param point - The point to add
     * @returns The point instance for method chaining
     */
    add(t) {
      return this.x += t.x, this.y += t.y, this;
    }
    /**
     * Subtracts another point's coordinates from this point.
     * @param point - The point to subtract
     * @returns The point instance for method chaining
     */
    subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }
    /**
     * Multiplies both coordinates by a scalar value.
     * @param scalar - The scalar value to multiply by
     * @returns The point instance for method chaining
     */
    multiply(t) {
      return this.x *= t, this.y *= t, this;
    }
    /**
     * Divides both coordinates by a scalar value.
     * @param scalar - The scalar value to divide by
     * @returns The point instance for method chaining
     */
    divide(t) {
      return t !== 0 && (this.x /= t, this.y /= t), this;
    }
    /**
     * Multiplies x and y coordinates by different scalar values.
     * @param xScalar - The scalar value to multiply x-coordinate by
     * @param yScalar - The scalar value to multiply y-coordinate by
     * @returns The point instance for method chaining
     */
    multiplyScalars(t, e) {
      return this.x *= t, this.y *= e, this;
    }
    /**
     * Divides x and y coordinates by different scalar values.
     * @param xScalar - The scalar value to divide x-coordinate by
     * @param yScalar - The scalar value to divide y-coordinate by
     * @returns The point instance for method chaining
     */
    divideScalars(t, e) {
      return t !== 0 && (this.x /= t), e !== 0 && (this.y /= e), this;
    }
    /**
     * Calculates the Euclidean distance to another point.
     * @param point - The point to calculate distance to
     * @returns The distance between the two points
     */
    distanceTo(t) {
      const e = this.x - t.x, r = this.y - t.y;
      return Math.sqrt(e * e + r * r);
    }
  }
  const Ba = Math.PI / 4;
  let Pa = class Ns {
    /**
     * Creates a bulge-defined arc
     * @param start Start point
     * @param end End point
     * @param bulge Bulge factor (-1 to 1, where 1 is a semicircle)
     */
    static fromBulge(t, e, r) {
      const s = Math.max(-1, Math.min(1, r));
      return new Ns({
        start: t,
        end: e,
        bulge: s
      });
    }
    /**
     * Creates an octant-defined arc
     * @param center Center point of the arc
     * @param radius Radius of the arc
     * @param startOctant Starting octant (0-7)
     * @param octantCount Number of octants to span (0-8, where 0 means 8 octants)
     * @param isClockwise Whether the arc goes clockwise
     */
    static fromOctant(t, e, r, s, i) {
      return new Ns({
        center: t,
        radius: e,
        startOctant: r,
        octantCount: s,
        isClockwise: i
      });
    }
    constructor(t) {
      if (t.start && t.end && t.bulge !== void 0) {
        this.start = t.start.clone(), this.end = t.end.clone(), this.bulge = t.bulge, this.isClockwise = t.bulge < 0;
        const e = this.end.clone().subtract(this.start), r = e.length();
        if (Math.abs(this.bulge) * r / 2 === 0) {
          this.radius = 0, this.center = this.start.clone(), this.startAngle = Math.atan2(e.y, e.x), this.endAngle = this.startAngle;
          return;
        }
        const s = 4 * Math.atan(Math.abs(this.bulge));
        this.radius = r / (2 * Math.sin(s / 2));
        const i = this.start.clone().add(e.clone().divide(2)), a = new ht(-e.y, e.x);
        a.normalize(), a.multiply(Math.abs(this.radius * Math.cos(s / 2))), this.center = i.clone(), this.isClockwise ? this.center.subtract(a) : this.center.add(a), this.startAngle = Math.atan2(this.start.y - this.center.y, this.start.x - this.center.x), this.endAngle = Math.atan2(this.end.y - this.center.y, this.end.x - this.center.x), this.isClockwise ? this.endAngle >= this.startAngle && (this.endAngle -= 2 * Math.PI) : this.endAngle <= this.startAngle && (this.endAngle += 2 * Math.PI);
      } else if (t.center && t.radius !== void 0 && t.startOctant !== void 0 && t.octantCount !== void 0 && t.isClockwise !== void 0) {
        this.center = t.center.clone(), this.radius = t.radius, this.isClockwise = t.isClockwise, this.startAngle = t.startOctant * Ba;
        const e = (t.octantCount === 0 ? 8 : t.octantCount) * Ba;
        this.endAngle = this.startAngle + (this.isClockwise ? -e : e), this.start = this.center.clone().add(
          new ht(
            this.radius * Math.cos(this.startAngle),
            this.radius * Math.sin(this.startAngle)
          )
        ), this.end = this.center.clone().add(
          new ht(this.radius * Math.cos(this.endAngle), this.radius * Math.sin(this.endAngle))
        );
      } else
        throw new Error("Invalid arc parameters");
    }
    /**
     * Tessellates the arc into a series of points that approximate the arc.
     * @param circleSpan The angle span between tessellated points (default Math.PI / 18)
     * @returns Array of points representing the tessellated arc
     */
    tessellate(t = Math.PI / 18) {
      if (this.radius === 0)
        return [this.start.clone(), this.end.clone()];
      const e = [this.start.clone()], r = Math.abs(this.endAngle - this.startAngle), s = Math.max(1, Math.floor(r / t));
      for (let i = 1; i < s; i++) {
        const a = i / s, o = this.isClockwise ? this.startAngle - a * r : this.startAngle + a * r;
        e.push(
          this.center.clone().add(new ht(this.radius * Math.cos(o), this.radius * Math.sin(o)))
        );
      }
      return e.push(
        this.end ? this.end.clone() : this.center.clone().add(
          new ht(
            this.radius * Math.cos(this.endAngle),
            this.radius * Math.sin(this.endAngle)
          )
        )
      ), e;
    }
  }, ds = class eh {
    constructor(t, e = []) {
      this.lastPoint = t, this.polylines = e;
    }
    /**
     * Get the bounding box of the shape
     * @returns Bounding box of the shape
     */
    get bbox() {
      let t = 1 / 0, e = -1 / 0, r = 1 / 0, s = -1 / 0;
      return this.polylines.forEach((i) => {
        i.forEach((a) => {
          t = Math.min(t, a.x), e = Math.max(e, a.x), r = Math.min(r, a.y), s = Math.max(s, a.y);
        });
      }), { minX: t, minY: r, maxX: e, maxY: s };
    }
    /**
     * Offset the shape by a point
     * @param p The point to offset the shape by
     * @param isNewInstance Whether to return a new instance of the shape or modify the current instance
     * @returns The offset shape
     */
    offset(t, e = !0) {
      var r, s;
      return e ? new eh(
        (r = this.lastPoint) == null ? void 0 : r.clone().add(t),
        this.polylines.map((i) => i.map((a) => a.clone().add(t)))
      ) : ((s = this.lastPoint) == null || s.add(t), this.polylines.forEach((i) => i.forEach((a) => a.add(t))), this);
    }
    /**
     * Converts the shape to an SVG string
     * @param options SVG rendering options
     * @returns SVG string
     */
    toSVG(t = {}) {
      const { strokeWidth: e = "0.5%", strokeColor: r = "black", isAutoFit: s = !1 } = t;
      let i, a;
      if (s) {
        const o = this.bbox, h = 0.2, u = o.maxX - o.minX, l = o.maxY - o.minY, f = o.minX - u * h, c = o.maxX + u * h, p = o.minY - l * h, d = o.maxY + l * h;
        a = this.polylines.map((g) => {
          let y = "";
          return g.forEach((m, b) => {
            const v = m.x, x = -m.y;
            y += b === 0 ? `M ${v} ${x} ` : `L ${v} ${x} `;
          }), `<path d="${y}" stroke="${r}" stroke-width="${e}" fill="none"/>`;
        }).join(""), i = `${f} ${-d} ${c - f} ${d - p}`;
      } else
        i = "0 0 20 20", a = this.polylines.map((o) => {
          let h = "";
          return o.forEach((u, l) => {
            const f = u.x + 5, c = -u.y + 15;
            h += l === 0 ? `M ${f} ${c} ` : `L ${f} ${c} `;
          }), `<path d="${h}" stroke="${r}" stroke-width="${e}" fill="none"/>`;
        }).join("");
      return `<svg width="100%" height="100%" viewBox="${i}" preserveAspectRatio="xMidYMid meet">${a}</svg>`;
    }
  };
  const td = Math.PI / 18, za = 12;
  let ed = class {
    constructor(t) {
      this.shapeCache = /* @__PURE__ */ new Map(), this.shapeData = /* @__PURE__ */ new Map(), this.fontData = t;
    }
    /**
     * Releases parsed shapes and cached shapes
     */
    release() {
      this.shapeCache.clear(), this.shapeData.clear();
    }
    /**
     * Parses a character's shape
     * @param code - The character code
     * @param size - The font size
     * @returns The parsed shape or undefined if the character is not found
     */
    parse(t, e) {
      var r;
      const s = `${t}_${e}`;
      if (this.shapeCache.has(s))
        return this.shapeCache.get(s);
      if (t === 0)
        return;
      const i = this.fontData.content.data;
      let a;
      if (!this.shapeData.has(t) && i[t]) {
        const o = i[t], h = za / this.fontData.content.baseUp;
        a = this.parseShape(o, h), this.shapeData.set(t, a);
      }
      if (this.shapeData.has(t)) {
        const o = e / za, h = this.shapeData.get(t);
        a = new ds(
          (r = h.lastPoint) == null ? void 0 : r.clone().multiply(o),
          h.polylines.map((u) => u.map((l) => l.clone().multiply(o)))
        );
      }
      return a;
    }
    /**
     * Parses the shape of a character.
     * @param data - The data of the character
     * @param scale - The scale of the font
     * @returns The parsed shape
     */
    parseShape(t, e) {
      const r = {
        currentPoint: new ht(),
        polylines: [],
        currentPolyline: [],
        sp: [],
        isPenDown: !1,
        scale: e
      };
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        i <= 15 ? s = this.handleSpecialCommand(i, t, s, r) : this.handleVectorCommand(i, r);
      }
      return new ds(r.currentPoint, r.polylines);
    }
    /**
     * Please refer to special codes reference in the following link for more information.
     * https://help.autodesk.com/view/OARX/2023/ENU/?guid=GUID-06832147-16BE-4A66-A6D0-3ADF98DC8228
     * @param command - The command byte
     * @param data - The data of the character
     * @param index - The index of the command byte
     * @param state - The state of the parser
     * @returns The index of the next command byte
     */
    handleSpecialCommand(t, e, r, s) {
      let i = r;
      switch (t) {
        case 0:
          s.currentPolyline = [], s.isPenDown = !1;
          break;
        case 1:
          s.isPenDown = !0, s.currentPolyline.push(s.currentPoint.clone());
          break;
        case 2:
          s.isPenDown = !1, s.currentPolyline.length > 1 && s.polylines.push(s.currentPolyline.slice()), s.currentPolyline = [];
          break;
        case 3:
          i++, s.scale /= e[i];
          break;
        case 4:
          i++, s.scale *= e[i];
          break;
        case 5:
          if (s.sp.length === 4)
            throw new Error("The position stack is only four locations deep");
          s.sp.push(s.currentPoint.clone());
          break;
        case 6:
          s.currentPoint = s.sp.pop() ?? s.currentPoint;
          break;
        case 7:
          i = this.handleSubshapeCommand(e, i, s);
          break;
        case 8:
          i = this.handleXYDisplacement(e, i, s);
          break;
        case 9:
          i = this.handleMultipleXYDisplacements(e, i, s);
          break;
        case 10:
          i = this.handleOctantArc(e, i, s);
          break;
        case 11:
          i = this.handleFractionalArc(e, i, s);
          break;
        case 12:
          i = this.handleBulgeArc(e, i, s);
          break;
        case 13:
          i = this.handleMultipleBulgeArcs(e, i, s);
          break;
        case 14:
          i = this.skipCode(e, ++i);
          break;
      }
      return i;
    }
    handleVectorCommand(t, e) {
      const r = (t & 240) >> 4, s = t & 15, i = this.getVectorForDirection(s);
      e.currentPoint.add(i.multiply(r * e.scale)), e.isPenDown && e.currentPolyline.push(e.currentPoint.clone());
    }
    /**
     * Get the vector for the given direction code. Please refer to the following link for more information.
     * https://help.autodesk.com/view/OARX/2023/ENU/?guid=GUID-0A8E12A1-F4AB-44AD-8A9B-2140E0D5FD23
     * @param dir - The direction code of the vector
     * @returns Returns the vector for the given direction code
     */
    getVectorForDirection(t) {
      const e = new ht();
      switch (t) {
        case 0:
          e.x = 1;
          break;
        case 1:
          e.x = 1, e.y = 0.5;
          break;
        case 2:
          e.x = 1, e.y = 1;
          break;
        case 3:
          e.x = 0.5, e.y = 1;
          break;
        case 4:
          e.y = 1;
          break;
        case 5:
          e.x = -0.5, e.y = 1;
          break;
        case 6:
          e.x = -1, e.y = 1;
          break;
        case 7:
          e.x = -1, e.y = 0.5;
          break;
        case 8:
          e.x = -1;
          break;
        case 9:
          e.x = -1, e.y = -0.5;
          break;
        case 10:
          e.x = -1, e.y = -1;
          break;
        case 11:
          e.x = -0.5, e.y = -1;
          break;
        case 12:
          e.y = -1;
          break;
        case 13:
          e.x = 0.5, e.y = -1;
          break;
        case 14:
          e.x = 1, e.y = -1;
          break;
        case 15:
          e.x = 1, e.y = -0.5;
          break;
      }
      return e;
    }
    handleSubshapeCommand(t, e, r) {
      let s = e, i = 0, a, o = r.scale * this.fontData.content.baseUp, h = o;
      const u = r.currentPoint.clone();
      switch (r.currentPolyline.length > 1 && (r.polylines.push(r.currentPolyline.slice()), r.currentPolyline = []), this.fontData.header.fontType) {
        case Tt.SHAPES:
          s++, i = t[s];
          break;
        case Tt.BIGFONT:
          s++, i = t[s], i === 0 && (s++, i = t[s++] | t[s++] << 8, u.x = t[s++] * r.scale, u.y = t[s++] * r.scale, this.fontData.content.isExtended && (h = t[s++] * r.scale), o = t[s] * r.scale);
          break;
        case Tt.UNIFONT:
          s++, i = t[s++] << 8 | t[s++];
          break;
      }
      return i !== 0 && (a = this.getShapeByCodeWithOffset(i, h, o, u), a && (r.polylines.push(...a.polylines.slice()), r.currentPoint = a.lastPoint ? a.lastPoint.clone() : u.clone())), r.currentPolyline = [], s;
    }
    handleXYDisplacement(t, e, r) {
      let s = e;
      const i = new ht();
      return i.x = wt.byteToSByte(t[++s]), i.y = wt.byteToSByte(t[++s]), r.currentPoint.add(i.multiply(r.scale)), r.isPenDown && r.currentPolyline.push(r.currentPoint.clone()), s;
    }
    handleMultipleXYDisplacements(t, e, r) {
      let s = e;
      for (; ; ) {
        const i = new ht();
        if (i.x = wt.byteToSByte(t[++s]), i.y = wt.byteToSByte(t[++s]), i.x === 0 && i.y === 0)
          break;
        r.currentPoint.add(i.multiply(r.scale)), r.isPenDown && r.currentPolyline.push(r.currentPoint.clone());
      }
      return s;
    }
    handleOctantArc(t, e, r) {
      var s;
      let i = e;
      const a = t[++i] * r.scale, o = wt.byteToSByte(t[++i]), h = (o & 112) >> 4;
      let u = o & 7;
      const l = o < 0, f = Math.PI / 4 * h, c = r.currentPoint.clone().subtract(new ht(Math.cos(f) * a, Math.sin(f) * a)), p = Pa.fromOctant(c, a, h, u, l);
      if (r.isPenDown) {
        const d = p.tessellate();
        r.currentPolyline.pop(), r.currentPolyline.push(...d.slice());
      }
      return r.currentPoint = (s = p.tessellate().pop()) == null ? void 0 : s.clone(), i;
    }
    handleFractionalArc(t, e, r) {
      let s = e;
      const i = t[++s], a = t[++s], o = t[++s], h = t[++s], u = (o * 255 + h) * r.scale, l = wt.byteToSByte(t[++s]), f = (l & 112) >> 4;
      let c = l & 7;
      c === 0 && (c = 8), a !== 0 && c--;
      const p = Math.PI / 4;
      let d = p * c, g = td, y = 1;
      l < 0 && (g = -g, d = -d, y = -1);
      let m = p * f, b = m + d;
      m += p * i / 256 * y, b += p * a / 256 * y;
      const v = r.currentPoint.clone().subtract(new ht(u * Math.cos(m), u * Math.sin(m)));
      if (r.currentPoint = v.clone().add(new ht(u * Math.cos(b), u * Math.sin(b))), r.isPenDown) {
        let x = m;
        const F = [];
        if (F.push(
          v.clone().add(new ht(u * Math.cos(x), u * Math.sin(x)))
        ), g > 0)
          for (; x + g < b; )
            x += g, F.push(
              v.clone().add(new ht(u * Math.cos(x), u * Math.sin(x)))
            );
        else
          for (; x + g > b; )
            x += g, F.push(
              v.clone().add(new ht(u * Math.cos(x), u * Math.sin(x)))
            );
        F.push(v.clone().add(new ht(u * Math.cos(b), u * Math.sin(b)))), r.currentPolyline.push(...F);
      }
      return s;
    }
    handleBulgeArc(t, e, r) {
      let s = e;
      const i = new ht();
      i.x = wt.byteToSByte(t[++s]), i.y = wt.byteToSByte(t[++s]);
      const a = wt.byteToSByte(t[++s]);
      return r.currentPoint = this.handleArcSegment(
        r.currentPoint,
        i,
        a,
        r.scale,
        r.isPenDown,
        r.currentPolyline
      ), s;
    }
    handleMultipleBulgeArcs(t, e, r) {
      let s = e;
      for (; ; ) {
        const i = new ht();
        if (i.x = wt.byteToSByte(t[++s]), i.y = wt.byteToSByte(t[++s]), i.x === 0 && i.y === 0)
          break;
        const a = wt.byteToSByte(t[++s]);
        r.currentPoint = this.handleArcSegment(
          r.currentPoint,
          i,
          a,
          r.scale,
          r.isPenDown,
          r.currentPolyline
        );
      }
      return s;
    }
    skipCode(t, e) {
      switch (t[e]) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
        case 4:
          e++;
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          switch (this.fontData.header.fontType) {
            case Tt.SHAPES:
              e++;
              break;
            case Tt.BIGFONT:
              e++, t[e] === 0 && (e += 5);
              break;
            case Tt.UNIFONT:
              e += 2;
              break;
          }
          break;
        case 8:
          e += 2;
          break;
        case 9:
          for (; ; ) {
            const r = t[++e], s = t[++e];
            if (r === 0 && s === 0)
              break;
          }
          break;
        case 10:
          e += 2;
          break;
        case 11:
          e += 5;
          break;
        case 12:
          e += 3;
          break;
        case 13:
          for (; ; ) {
            const r = t[++e], s = t[++e];
            if (r === 0 && s === 0)
              break;
            e++;
          }
          break;
      }
      return e;
    }
    getShapeByCodeWithOffset(t, e, r, s) {
      var i;
      const a = this.parse(t, r);
      if (a) {
        if (e === r)
          return a.offset(s);
        {
          const o = (i = a.lastPoint) == null ? void 0 : i.clone();
          o && (o.x *= e / r);
          const h = a.polylines.map((u) => u.map((l) => l.clone()));
          return h.forEach((u) => u.forEach((l) => l.x *= e / r)), new ds(
            o == null ? void 0 : o.add(s),
            h.map((u) => u.map((l) => l.add(s)))
          );
        }
      }
    }
    /**
     * Handles drawing an arc segment with the given vector and bulge
     * @param currentPoint The starting point of the arc
     * @param vec The displacement vector
     * @param bulge The bulge value (will be normalized by 127.0)
     * @param scale The current scale factor
     * @param isPenDown Whether the pen is currently down (drawing)
     * @param currentPolyline The current polyline being built
     * @returns The new current point after the arc
     */
    handleArcSegment(t, e, r, s, i, a) {
      e.x *= s, e.y *= s, r < -127 && (r = -127);
      const o = t.clone();
      if (i)
        if (r === 0)
          a.push(o.clone().add(e));
        else {
          const h = o.clone().add(e), u = Pa.fromBulge(o, h, r / 127).tessellate();
          a.push(...u.slice(1));
        }
      return o.add(e), o;
    }
  };
  class rd {
    /**
     * Creates a new ShxFont instance.
     * @param data - Either raw binary data of the SHX font file (ArrayBuffer) or pre-parsed font data (ShxFontData)
     * @throws {Error} If the font data is invalid or cannot be parsed
     */
    constructor(t) {
      if (t instanceof ArrayBuffer) {
        const e = new wt(t), r = new Jp().parse(e), s = Kp.createParser(r.fontType).parse(e);
        this.fontData = {
          header: r,
          content: s
        };
      } else
        this.fontData = t;
      this.shapeParser = new ed(this.fontData);
    }
    /**
     * Return true if this font contains glyph of the specified character. Otherwise, return false.
     * @param char - The character to check
     * @returns True if this font contains glyph of the specified character. Otherwise, return false.
     */
    hasChar(t) {
      return this.fontData.content.data[t] !== void 0;
    }
    /**
     * Gets the shape data for a specific character at a given size.
     * @param code - The character code to get the shape for
     * @param size - The desired size of the character in drawing units
     * @returns The shape data for the character, or undefined if the character is not found in the font
     */
    getCharShape(t, e) {
      return this.shapeParser.parse(t, e);
    }
    /**
     * Releases resources used by the font.
     * This should be called when the font is no longer needed to free up memory.
     */
    release() {
      this.shapeParser.release();
    }
  }
  class ri extends so {
    /**
     * Creates a new instance of ShxTextShape
     * @param char - The character this shape represents
     * @param shape - The shape data for this character
     */
    constructor(t, e, r, s) {
      super(t), this.fontSize = e, this.shape = r, this.font = s, this.width = this.calcWidth();
    }
    calcWidth() {
      const t = this.shape.bbox;
      return t.maxX - t.minX;
    }
    offset(t) {
      return new ri(
        this.char,
        this.fontSize,
        this.shape.offset(t),
        this.font
      );
    }
    /**
     * Converts the text shape to a THREE.js geometry
     * @returns A THREE.js BufferGeometry representing the text shape
     */
    toGeometry() {
      let t = this.font.cache.getGeometry(this.char, this.fontSize);
      if (t == null) {
        const e = this.shape.polylines, r = [], s = [];
        let i = 0;
        t = new vt();
        for (let a = 0; a < e.length; a++) {
          const o = e[a];
          for (let h = 0; h < o.length; h++) {
            const u = o[h];
            r.push(u.x, u.y, 0), h === o.length - 1 || s.push(i, i + 1), i++;
          }
        }
        t.setAttribute(
          "position",
          new rr(r, 3)
        ), t.setIndex(s);
      }
      return t;
    }
  }
  class Da extends no {
    constructor(t) {
      super(), this.type = "shx", this.font = new rd(t), this.data = this.font.fontData;
    }
    /**
     * Return true if this font contains glyph of the specified character. Otherwise, return false.
     * @param char - The character to check
     * @returns True if this font contains glyph of the specified character. Otherwise, return false.
     */
    hasChar(t) {
      const e = t.charCodeAt(0);
      return this.font.hasChar(e);
    }
    generateShapes(t, e) {
      const r = [];
      let s = 0;
      for (let i = 0; i < t.length; i++) {
        const a = t[i];
        if (a === " ") {
          s += e;
          continue;
        }
        const o = this.getCharShape(a, e);
        if (!o) {
          s += e, this.addUnsupportedChar(a);
          continue;
        }
        r.push(o.offset(new ht(s, 0))), s += o.width;
      }
      return r;
    }
    /**
     * SHX font always has fixed scale factor 1.
     * @returns Always return value 1
     */
    getScaleFactor() {
      return 1;
    }
    /**
     * Gets the shape data for a specific character at a given size.
     * @param char - The character to get the shape for
     * @param size - The desired size of the character
     * @returns The shape data for the character, or undefined if not found
     */
    getCharShape(t, e) {
      const r = this.getCode(t), s = this.font.getCharShape(r, e);
      return s ? new ri(t, e, s, this) : void 0;
    }
    /**
     * For an unsupported char, use "？" as a replacement.
     */
    getNotFoundTextShape(t) {
      const e = this.font.fontData.header.fontType === Tt.BIGFONT ? "？" : "?";
      return this.getCharShape(e, t);
    }
    getCode(t) {
      if (this.font.fontData.header.fontType === Tt.BIGFONT)
        throw new Error(
          `Can't get font glyph for '${t}' because big font is not supported yet!`
        );
      return t.charCodeAt(0);
    }
  }
  class ve {
    constructor() {
    }
    /**
     * Gets the singleton instance of the FontFactory
     * @returns The FontFactory instance
     */
    static get instance() {
      return ve._instance || (ve._instance = new ve()), ve._instance;
    }
    /**
     * Creates a font instance based on the provided font data.
     * The type of font created (ShxFont or MeshFont) is determined by the font type.
     *
     * @param data - The font data to create the font instance from
     * @returns A new instance of either ShxFont or MeshFont
     * @throws {Error} If the font data type is not supported
     */
    createFont(t) {
      if (t.type === "shx")
        return new Da(t.data);
      if (t.type === "mesh")
        return new Ua(t.data);
      throw new Error("Unsupported font data type");
    }
    /**
     * Creates a font instance from a file name and its ArrayBuffer data.
     * The type of font created is determined by the file extension.
     *
     * @param fileName - The name of the font file
     * @param buffer - The ArrayBuffer containing the font data
     * @returns A new instance of either ShxFont or MeshFont
     * @throws {Error} If the file type is not supported
     */
    createFontFromBuffer(t, e) {
      const r = Fu(t).toLowerCase();
      if (r === "shx")
        return new Da(e);
      if (["ttf", "otf", "woff"].includes(r))
        return new Ua(e);
      throw new Error(`Unsupported font file type: ${r}`);
    }
  }
  class ae {
    constructor() {
      this.fontMapping = {}, this.fontMap = /* @__PURE__ */ new Map(), this.unsupportedChars = {}, this.missedFonts = {}, this.enableFontCache = !0, this.defaultFont = "simkai", this.events = {
        /** Event triggered when a font cannot be found */
        fontNotFound: new Vi(),
        /** Event triggered when a font is successfully loaded */
        fontLoaded: new Vi()
      }, this.loader = new hu(), this.loader.setResponseType("arraybuffer"), this.fileNames = [], this.fontLoader = new nd();
    }
    /**
     * Gets the singleton instance of the FontManager
     * @returns The FontManager instance
     */
    static get instance() {
      return ae._instance || (ae._instance = new ae()), ae._instance;
    }
    /**
     * Sets the font mapping configuration
     * @param mapping - The font mapping to set
     */
    setFontMapping(t) {
      this.fontMapping = t;
    }
    /**
     * Sets the font loader
     * @param fontLoader - The font loader to set
     */
    setFontLoader(t) {
      this.fontLoader = t;
    }
    /**
     * Retrieves information about all available fonts in the system.
     * Loads font metadata from a CDN if not already loaded.
     * @returns Promise that resolves to an array of FontInfo objects
     * @throws {Error} If font metadata cannot be loaded from the CDN
     */
    async getAvaiableFonts() {
      return await this.fontLoader.getAvaiableFonts();
    }
    /**
     * Return true if the default font was loaded.
     * @returns True if the default font was loaded. False otherwise.
     */
    isDefaultFontLoaded() {
      return this.fontMap.get(this.defaultFont.toLowerCase()) != null;
    }
    /**
     * Loads the default font
     * @returns Promise that resolves to the font load statuses
     */
    async loadDefaultFont() {
      return await this.loadFontsByNames(this.defaultFont);
    }
    /**
     * Loads the specified fonts from font names
     * @param names - Font names to load.
     * @returns Promise that resolves to an array of font load statuses
     */
    async loadFontsByNames(t) {
      return t = Array.isArray(t) ? t : [t], (await this.fontLoader.load(t))[0];
    }
    /**
     * Loads the specified fonts from URLs
     * @param urls - URLs of font files to load.
     * @returns Promise that resolves to an array of font load statuses
     */
    async loadFontsByUrls(t) {
      t = Array.isArray(t) ? t : [t];
      const e = [];
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        e.push(this.loadFont(i));
      }
      const r = [];
      return await Promise.allSettled(e).then((s) => {
        s.forEach((i, a) => {
          const o = i.status === "fulfilled", h = t[a], u = qi(h.toLowerCase());
          r.push({
            fontName: u,
            url: h,
            status: o
          }), o && this.fileNames.push(u);
        });
      }), r;
    }
    /**
     * Tries to find the specified font. If not found, uses a replacement font and returns its name.
     * @param fontName - The font name to find
     * @returns The original font name if found, or the replacement font name if not found
     */
    findAndReplaceFont(t) {
      let e = this.fontMap.get(t.toLowerCase());
      if (e == null) {
        const r = this.fontMapping[t];
        if (r)
          return e = this.fontMap.get(r.toLowerCase()), r;
      }
      return e ? t : this.defaultFont;
    }
    /**
     * Gets font by font name. Return undefined if not found.
     * @param fontName - The font name to find
     * @param recordMissedFonts - Record the font name to property `missedFonts` in this class
     * if the specified font name not found.
     * @returns The font with the specified font name, or undefined if not found
     */
    getFontByName(t, e = !0) {
      if (this.fontMap.size === 0)
        return;
      t == null && (t = "");
      const r = this.fontMap.get(t.toLowerCase());
      if (!r) {
        e && this.recordMissedFonts(t);
        return;
      }
      return r;
    }
    /**
     * Gets the first font which contains the specified character.
     * @param char - The character to get the shape for
     * @param fontName - The name of the font to use
     * @param size - The size of the character
     * @returns The text shape for the character, or undefined if not found
     */
    getFontByChar(t) {
      for (const [, e] of this.fontMap)
        if (e.hasChar(t))
          return e;
    }
    /**
     * Gets the text shape for a specific character with the specified font and size
     * @param char - The character to get the shape for
     * @param fontName - The name of the font to use
     * @param size - The size of the character
     * @returns The text shape for the character, or undefined if not found
     */
    getCharShape(t, e, r) {
      let s = this.getFontByName(e);
      return s || (s = this.getFontByChar(t)), s == null ? void 0 : s.getCharShape(t, r);
    }
    /**
     * Gets the scale factor for a specific font
     * @param fontName - The name of the font
     * @returns The scale factor for the font, or 1 if the font is not found
     */
    getFontScaleFactor(t) {
      const e = this.fontMap.get(t.toLowerCase());
      return e ? e.getScaleFactor() : 1;
    }
    /**
     * Gets type of the specific font
     * @param fontName - The name of the font
     * @returns The type of the font. If the specified font can't be found, `undefined` is returned
     */
    getFontType(t) {
      const e = this.fontMap.get(t.toLowerCase());
      return e == null ? void 0 : e.type;
    }
    /**
     * Gets the shape to display when a character is not found
     * @param size - The size of the shape
     * @returns The shape for the not found indicator, or undefined if not available
     */
    getNotFoundTextShape(t) {
      for (const [, e] of this.fontMap) {
        const r = e.getNotFoundTextShape(t);
        if (r) return r;
      }
    }
    /**
     * Checks if a font is already loaded in the system
     * @param fontName - The name of the font to check
     * @returns True if the font is loaded, false otherwise
     */
    isFontLoaded(t) {
      return this.fontMap.has(t.toLowerCase());
    }
    /**
     * Records a font that was requested but not found
     * @param fontName - The name of the font that was not found
     */
    recordMissedFonts(t) {
      t && (this.missedFonts[t] || (this.missedFonts[t] = 0), this.missedFonts[t]++, this.events.fontNotFound.dispatch({
        fontName: t,
        count: this.missedFonts[t]
      }));
    }
    /**
     * Loads a single font from a URL
     * @param url - The URL of the font file to load
     */
    async loadFont(t) {
      const e = oo(t);
      if (!e)
        throw new Error(`Invalid font url: ${t}`);
      const r = qi(t).toLowerCase(), s = await br.instance.get(r);
      if (s) {
        const i = ve.instance.createFont(s);
        this.fontMap.set(r, i);
      } else {
        const i = await this.loader.loadAsync(t), a = ve.instance.createFontFromBuffer(e, i);
        a && (this.fontMap.set(r, a), this.enableFontCache && await br.instance.set(r, {
          name: r,
          type: a.type,
          data: a.data
        }));
      }
      this.events.fontLoaded.dispatch({
        fontName: r
      });
    }
    /**
     * Loads all fonts from the cache
     */
    async getAllFontsFromCache() {
      if (this.fontMap.size !== 0)
        return;
      const t = await br.instance.getAll();
      for (const e of t) {
        const { name: r } = e;
        if (this.fileNames && !this.fileNames.includes(r))
          continue;
        const s = ve.instance.createFont(e);
        this.fontMap.set(r, s);
      }
    }
    /**
     * Gets a record of all unsupported characters across all loaded fonts
     * @returns A record mapping unsupported characters to their occurrence count
     */
    getUnsupportedChar() {
      for (const [, t] of this.fontMap)
        Object.assign(this.unsupportedChars, t.unsupportedChars);
      return this.unsupportedChars;
    }
    /**
     * Releases loaded fonts from memory.
     *
     * - If no argument is provided, all loaded fonts are released and the font map is cleared.
     * - If a font name is provided, only that specific font is released from the font map.
     *
     * This is useful for freeing up memory, especially when working with large font files (e.g., Chinese mesh fonts).
     * Notes: Based on testing, one Chinese mesh font file may take 40M memory.
     *
     * @param fontToRelease - (Optional) The name of the font to release. If omitted, all fonts are released.
     * @returns `true` if the operation succeeded (all fonts released or the specified font was found and deleted), `false` if the specified font was not found.
     */
    release(t) {
      return t == null ? (this.fontMap.clear(), !0) : this.fontMap.delete(t);
    }
  }
  class nd {
    /**
     * Creates a new instance of DefaultFontLoader
     */
    constructor() {
      this._avaiableFonts = [];
    }
    /**
     * Gets the list of available fonts
     * @returns Array of FontInfo objects describing available fonts
     */
    get avaiableFonts() {
      return this._avaiableFonts;
    }
    /**
     * Retrieves information about all available fonts in the system.
     * Loads font metadata from a CDN if not already loaded.
     * @returns Promise that resolves to an array of FontInfo objects
     * @throws {Error} If font metadata cannot be loaded from the CDN
     */
    async getAvaiableFonts() {
      if (this._avaiableFonts.length == 0) {
        const t = "https://cdn.jsdelivr.net/gh/mlight-lee/cad-data/fonts/", e = t + "fonts.json";
        try {
          const r = await fetch(e);
          this._avaiableFonts = await r.json();
        } catch {
          throw new Error(`Filed to get avaiable font from '${e}'`);
        }
        this._avaiableFonts.forEach((r) => {
          r.url = t + r.file;
        });
      }
      return this._avaiableFonts;
    }
    /**
     * Loads the specified fonts into the system. If one font is already loaded,
     * the font will not be loaded again. If no font names are provided, just loads
     * all available fonts information (not fonts).
     * @param fontNames - Array of font names to load
     * @returns Promise that resolves to an array of FontLoadStatus objects
     */
    async load(t) {
      t.length == 0 && await this.getAvaiableFonts();
      const e = [], r = [], s = {};
      this._avaiableFonts.forEach((o) => {
        o.name.forEach((h) => {
          s[h.toLowerCase()] = o.url;
        });
      }), t.forEach((o) => {
        const h = o.toLowerCase(), u = s[h];
        u && (ae.instance.isFontLoaded(h) ? r.push({
          fontName: h,
          url: u,
          status: !0
        }) : e.push(u));
      });
      let i = [];
      e.length > 0 && (i = await ae.instance.loadFontsByUrls(e));
      const a = {};
      return [...r, ...i].forEach((o) => {
        a[o.fontName] = o;
      }), t.map((o) => {
        const h = o.toLowerCase();
        return a[h] || {
          fontName: h,
          url: s[h] || "",
          status: !1
        };
      });
    }
  }
  var Qe = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.WORD = 1] = "WORD", n[n.STACK = 2] = "STACK", n[n.SPACE = 3] = "SPACE", n[n.NBSP = 4] = "NBSP", n[n.TABULATOR = 5] = "TABULATOR", n[n.NEW_PARAGRAPH = 6] = "NEW_PARAGRAPH", n[n.NEW_COLUMN = 7] = "NEW_COLUMN", n[n.WRAP_AT_DIMLINE = 8] = "WRAP_AT_DIMLINE", n[n.PROPERTIES_CHANGED = 9] = "PROPERTIES_CHANGED", n))(Qe || {}), mr = /* @__PURE__ */ ((n) => (n[n.BOTTOM = 0] = "BOTTOM", n[n.MIDDLE = 1] = "MIDDLE", n[n.TOP = 2] = "TOP", n))(mr || {}), Pt = /* @__PURE__ */ ((n) => (n[n.DEFAULT = 0] = "DEFAULT", n[n.LEFT = 1] = "LEFT", n[n.RIGHT = 2] = "RIGHT", n[n.CENTER = 3] = "CENTER", n[n.JUSTIFIED = 4] = "JUSTIFIED", n[n.DISTRIBUTED = 5] = "DISTRIBUTED", n))(Pt || {});
  const sd = {
    c: "Ø",
    d: "°",
    p: "±"
  }, id = {
    l: 1,
    r: 2,
    c: 3,
    j: 4,
    d: 5
    /* DISTRIBUTED */
  };
  function ad(n, t = !1) {
    const e = /* @__PURE__ */ new Set(), r = /\\[fF](.*?)[;|]/g;
    return [...n.matchAll(r)].forEach((s) => {
      let i = s[1].toLowerCase();
      t && (i = i.replace(/\.(ttf|otf|woff|shx)$/, "")), e.add(i);
    }), e;
  }
  class od {
    /**
     * Creates a new ContextStack with an initial context.
     * @param initial The initial MTextContext to use as the base of the stack.
     */
    constructor(t) {
      this.stack = [], this.stack.push(t);
    }
    /**
     * Pushes a copy of the given context onto the stack.
     * @param ctx The MTextContext to push (copied).
     */
    push(t) {
      this.stack.push(t);
    }
    /**
     * Pops the top context from the stack and merges its paragraph properties into the new top context.
     * If only one context remains, nothing is popped.
     * @returns The popped MTextContext, or undefined if the stack has only one context.
     */
    pop() {
      if (this.stack.length <= 1) return;
      const t = this.stack.pop(), e = this.stack[this.stack.length - 1];
      return JSON.stringify(e.paragraph) !== JSON.stringify(t.paragraph) && (e.paragraph = { ...t.paragraph }), t;
    }
    /**
     * Returns the current (top) context on the stack.
     */
    get current() {
      return this.stack[this.stack.length - 1];
    }
    /**
     * Returns the current stack depth (number of nested blocks), not counting the root context.
     */
    get depth() {
      return this.stack.length - 1;
    }
    /**
     * Returns the root (bottom) context, which represents the global formatting state.
     * Used for paragraph property application.
     */
    get root() {
      return this.stack[0];
    }
    /**
     * Replaces the current (top) context with the given context.
     * @param ctx The new context to set as the current context.
     */
    setCurrent(t) {
      this.stack[this.stack.length - 1] = t;
    }
  }
  class hd {
    /**
     * Creates a new MTextParser instance
     * @param content - The MText content to parse
     * @param ctx - Optional initial MText context
     * @param options - Parser options
     */
    constructor(t, e, r = {}) {
      this.continueStroke = !1, this.inStackContext = !1, this.scanner = new gs(t);
      const s = e ?? new Dr();
      this.ctxStack = new od(s), this.yieldPropertyCommands = r.yieldPropertyCommands ?? !1, this.resetParagraphParameters = r.resetParagraphParameters ?? !1;
    }
    /**
     * Decode multi-byte character from hex code
     * @param hex - Hex code string (e.g. "C4E3")
     * @returns Decoded character or empty square if invalid
     */
    decodeMultiByteChar(t) {
      try {
        const e = new Uint8Array([
          parseInt(t.substr(0, 2), 16),
          parseInt(t.substr(2, 2), 16)
        ]), r = new TextDecoder("gbk").decode(e);
        if (r !== "▯")
          return r;
        const s = new TextDecoder("big5").decode(e);
        return s !== "▯" ? s : "▯";
      } catch {
        return "▯";
      }
    }
    /**
     * Push current context onto the stack
     */
    pushCtx() {
      this.ctxStack.push(this.ctxStack.current);
    }
    /**
     * Pop context from the stack
     */
    popCtx() {
      this.ctxStack.pop();
    }
    /**
     * Parse stacking expression (numerator/denominator)
     * @returns Tuple of [TokenType.STACK, [numerator, denominator, type]]
     */
    parseStacking() {
      const t = new gs(this.extractExpression(!0));
      let e = "", r = "", s = "";
      const i = () => {
        let h = t.peek(), u = !1;
        return h.charCodeAt(0) < 32 && (h = " "), h === "\\" && (u = !0, t.consume(1), h = t.peek()), t.consume(1), [h, u];
      }, a = () => {
        let h = "";
        for (; t.hasData; ) {
          const [u, l] = i();
          if (!l && (u === "/" || u === "#" || u === "^"))
            return [h, u];
          h += u;
        }
        return [h, ""];
      }, o = (h) => {
        let u = "", l = h;
        for (; t.hasData; ) {
          const [f, c] = i();
          if (!(l && f === " ")) {
            if (l = !1, !c && f === ";")
              break;
            u += f;
          }
        }
        return u;
      };
      return [e, s] = a(), s && (r = o(s === "^")), e === "" && r.includes("I/") ? [2, [" ", " ", "/"]] : s === "^" ? [2, [e, r, "^"]] : [2, [e, r, s]];
    }
    /**
     * Parse MText properties
     * @param cmd - The property command to parse
     * @returns Property changes if yieldPropertyCommands is true and changes occurred
     */
    parseProperties(t) {
      const e = this.ctxStack.current.copy(), r = this.ctxStack.current.copy();
      switch (t) {
        case "L":
          r.underline = !0, this.continueStroke = !0;
          break;
        case "l":
          r.underline = !1, r.hasAnyStroke || (this.continueStroke = !1);
          break;
        case "O":
          r.overline = !0, this.continueStroke = !0;
          break;
        case "o":
          r.overline = !1, r.hasAnyStroke || (this.continueStroke = !1);
          break;
        case "K":
          r.strikeThrough = !0, this.continueStroke = !0;
          break;
        case "k":
          r.strikeThrough = !1, r.hasAnyStroke || (this.continueStroke = !1);
          break;
        case "A":
          this.parseAlign(r);
          break;
        case "C":
          this.parseAciColor(r);
          break;
        case "c":
          this.parseRgbColor(r);
          break;
        case "H":
          this.parseHeight(r);
          break;
        case "W":
          this.parseWidth(r);
          break;
        case "Q":
          this.parseOblique(r);
          break;
        case "T":
          this.parseCharTracking(r);
          break;
        case "p":
          this.parseParagraphProperties(r);
          break;
        case "f":
        case "F":
          this.parseFontProperties(r);
          break;
        default:
          throw new Error(`Unknown command: ${t}`);
      }
      if (this.continueStroke = r.hasAnyStroke, r.continueStroke = this.continueStroke, this.ctxStack.setCurrent(r), this.yieldPropertyCommands) {
        const s = this.getPropertyChanges(e, r);
        if (Object.keys(s).length > 0)
          return {
            command: t,
            changes: s,
            depth: this.ctxStack.depth
          };
      }
    }
    /**
     * Get property changes between two contexts
     * @param oldCtx - The old context
     * @param newCtx - The new context
     * @returns Object containing changed properties
     */
    getPropertyChanges(t, e) {
      const r = {};
      if (t.underline !== e.underline && (r.underline = e.underline), t.overline !== e.overline && (r.overline = e.overline), t.strikeThrough !== e.strikeThrough && (r.strikeThrough = e.strikeThrough), t.color.aci !== e.color.aci && (r.aci = e.color.aci), t.color.rgbValue !== e.color.rgbValue && (r.rgb = e.color.rgb), t.align !== e.align && (r.align = e.align), JSON.stringify(t.fontFace) !== JSON.stringify(e.fontFace) && (r.fontFace = e.fontFace), (t.capHeight.value !== e.capHeight.value || t.capHeight.isRelative !== e.capHeight.isRelative) && (r.capHeight = e.capHeight), (t.widthFactor.value !== e.widthFactor.value || t.widthFactor.isRelative !== e.widthFactor.isRelative) && (r.widthFactor = e.widthFactor), (t.charTrackingFactor.value !== e.charTrackingFactor.value || t.charTrackingFactor.isRelative !== e.charTrackingFactor.isRelative) && (r.charTrackingFactor = e.charTrackingFactor), t.oblique !== e.oblique && (r.oblique = e.oblique), JSON.stringify(t.paragraph) !== JSON.stringify(e.paragraph)) {
        const s = {};
        t.paragraph.indent !== e.paragraph.indent && (s.indent = e.paragraph.indent), t.paragraph.align !== e.paragraph.align && (s.align = e.paragraph.align), t.paragraph.left !== e.paragraph.left && (s.left = e.paragraph.left), t.paragraph.right !== e.paragraph.right && (s.right = e.paragraph.right), JSON.stringify(t.paragraph.tabs) !== JSON.stringify(e.paragraph.tabs) && (s.tabs = e.paragraph.tabs), Object.keys(s).length > 0 && (r.paragraph = s);
      }
      return r;
    }
    /**
     * Parse alignment property
     * @param ctx - The context to update
     */
    parseAlign(t) {
      const e = this.scanner.get();
      "012".includes(e) ? t.align = parseInt(e) : t.align = 0, this.consumeOptionalTerminator();
    }
    /**
     * Parse height property
     * @param ctx - The context to update
     */
    parseHeight(t) {
      const e = this.extractFloatExpression(!0);
      if (e)
        try {
          e.endsWith("x") ? t.capHeight = {
            value: parseFloat(e.slice(0, -1)),
            isRelative: !0
          } : t.capHeight = {
            value: parseFloat(e),
            isRelative: !1
          };
        } catch {
          this.scanner.consume(-e.length);
          return;
        }
      this.consumeOptionalTerminator();
    }
    /**
     * Parse width property
     * @param ctx - The context to update
     */
    parseWidth(t) {
      const e = this.extractFloatExpression(!0);
      if (e)
        try {
          e.endsWith("x") ? t.widthFactor = {
            value: parseFloat(e.slice(0, -1)),
            isRelative: !0
          } : t.widthFactor = {
            value: parseFloat(e),
            isRelative: !1
          };
        } catch {
          this.scanner.consume(-e.length);
          return;
        }
      this.consumeOptionalTerminator();
    }
    /**
     * Parse character tracking property
     * @param ctx - The context to update
     */
    parseCharTracking(t) {
      const e = this.extractFloatExpression(!0);
      if (e)
        try {
          e.endsWith("x") ? t.charTrackingFactor = {
            value: Math.abs(parseFloat(e.slice(0, -1))),
            isRelative: !0
          } : t.charTrackingFactor = {
            value: Math.abs(parseFloat(e)),
            isRelative: !1
          };
        } catch {
          this.scanner.consume(-e.length);
          return;
        }
      this.consumeOptionalTerminator();
    }
    /**
     * Parse float value or factor
     * @param value - Current value to apply factor to
     * @returns New value
     */
    parseFloatValueOrFactor(t) {
      const e = this.extractFloatExpression(!0);
      if (e)
        if (e.endsWith("x")) {
          const r = parseFloat(e.slice(0, -1));
          t *= r;
        } else
          t = parseFloat(e);
      return t;
    }
    /**
     * Parse oblique angle property
     * @param ctx - The context to update
     */
    parseOblique(t) {
      const e = this.extractFloatExpression(!1);
      e && (t.oblique = parseFloat(e)), this.consumeOptionalTerminator();
    }
    /**
     * Parse ACI color property
     * @param ctx - The context to update
     */
    parseAciColor(t) {
      const e = this.extractIntExpression();
      if (e) {
        const r = parseInt(e);
        r < 257 && (t.color.aci = r);
      }
      this.consumeOptionalTerminator();
    }
    /**
     * Parse RGB color property
     * @param ctx - The context to update
     */
    parseRgbColor(t) {
      const e = this.extractIntExpression();
      if (e) {
        const r = parseInt(e) & 16777215;
        t.color.rgbValue = r;
      }
      this.consumeOptionalTerminator();
    }
    /**
     * Extract float expression from scanner
     * @param relative - Whether to allow relative values (ending in 'x')
     * @returns Extracted expression
     */
    extractFloatExpression(t = !1) {
      const e = t ? /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?x?/ : /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/, r = this.scanner.tail.match(e);
      if (r) {
        const s = r[0];
        return this.scanner.consume(s.length), s;
      }
      return "";
    }
    /**
     * Extract integer expression from scanner
     * @returns Extracted expression
     */
    extractIntExpression() {
      const t = this.scanner.tail.match(/^\d+/);
      if (t) {
        const e = t[0];
        return this.scanner.consume(e.length), e;
      }
      return "";
    }
    /**
     * Extract expression until semicolon or end
     * @param escape - Whether to handle escaped semicolons
     * @returns Extracted expression
     */
    extractExpression(t = !1) {
      const e = this.scanner.find(";", t);
      if (e < 0) {
        const i = this.scanner.tail;
        return this.scanner.consume(i.length), i;
      }
      const r = this.scanner.peek(e - this.scanner.currentIndex - 1) === "\\", s = this.scanner.tail.slice(0, e - this.scanner.currentIndex + (r ? 1 : 0));
      return this.scanner.consume(s.length + 1), s;
    }
    /**
     * Parse font properties
     * @param ctx - The context to update
     */
    parseFontProperties(t) {
      const e = this.extractExpression().split("|");
      if (e.length > 0 && e[0]) {
        const r = e[0];
        let s = "Regular", i = 400;
        for (const a of e.slice(1))
          a.startsWith("b1") ? i = 700 : a === "i" || a.startsWith("i1") ? s = "Italic" : (a === "i0" || a.startsWith("i0")) && (s = "Regular");
        t.fontFace = {
          family: r,
          style: s,
          weight: i
        };
      }
    }
    /**
     * Parse paragraph properties from the MText content
     * Handles properties like indentation, alignment, and tab stops
     * @param ctx - The context to update
     */
    parseParagraphProperties(t) {
      const e = new gs(this.extractExpression());
      let r = t.paragraph.indent, s = t.paragraph.left, i = t.paragraph.right, a = t.paragraph.align, o = [];
      const h = () => {
        const u = e.tail.match(/^[+-]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/);
        if (u) {
          const l = parseFloat(u[0]);
          for (e.consume(u[0].length); e.peek() === ","; )
            e.consume(1);
          return l;
        }
        return 0;
      };
      for (; e.hasData; )
        switch (e.get()) {
          case "i":
            r = h();
            break;
          case "l":
            s = h();
            break;
          case "r":
            i = h();
            break;
          case "x":
            break;
          case "q": {
            const u = e.get();
            for (a = id[u] || 0; e.peek() === ","; )
              e.consume(1);
            break;
          }
          case "t":
            for (o = []; e.hasData; ) {
              const u = e.peek();
              if (u === "r" || u === "c") {
                e.consume(1);
                const l = h();
                o.push(u + l.toString());
              } else {
                const l = h();
                isNaN(l) ? e.consume(1) : o.push(l);
              }
            }
            break;
        }
      t.paragraph = {
        indent: r,
        left: s,
        right: i,
        align: a,
        tabs: o
      };
    }
    /**
     * Consume optional terminator (semicolon)
     */
    consumeOptionalTerminator() {
      this.scanner.peek() === ";" && this.scanner.consume(1);
    }
    /**
     * Parse MText content into tokens
     * @yields MTextToken objects
     */
    *parse() {
      let t = null;
      function e(s) {
        const i = { ...s.paragraph };
        s.paragraph = {
          indent: 0,
          left: 0,
          right: 0,
          align: 0,
          tabs: []
        };
        const a = {};
        return i.indent !== 0 && (a.indent = 0), i.left !== 0 && (a.left = 0), i.right !== 0 && (a.right = 0), i.align !== 0 && (a.align = 0), JSON.stringify(i.tabs) !== JSON.stringify([]) && (a.tabs = []), a;
      }
      const r = () => {
        var s;
        let i = "";
        for (; this.scanner.hasData; ) {
          let a = !1, o = this.scanner.peek();
          const h = this.scanner.currentIndex;
          if (o.charCodeAt(0) < 32) {
            if (this.scanner.consume(1), o === "	")
              return [5, null];
            if (o === `
`)
              return [6, null];
            o = " ";
          }
          if (o === "\\")
            if ("\\{}".includes(this.scanner.peek(1)))
              a = !0, this.scanner.consume(1), o = this.scanner.peek();
            else {
              if (i)
                return [1, i];
              this.scanner.consume(1);
              const u = this.scanner.get();
              switch (u) {
                case "~":
                  return [4, null];
                case "P":
                  return [6, null];
                case "N":
                  return [7, null];
                case "X":
                  return [8, null];
                case "S": {
                  this.inStackContext = !0;
                  const l = this.parseStacking();
                  return this.inStackContext = !1, l;
                }
                case "m":
                case "M":
                  if (this.scanner.peek() === "+") {
                    this.scanner.consume(1);
                    const l = (s = this.scanner.tail.match(/^[0-9A-Fa-f]{4}/)) == null ? void 0 : s[0];
                    if (l) {
                      this.scanner.consume(4);
                      const f = this.decodeMultiByteChar(l);
                      return i ? [1, i] : [1, f];
                    }
                    this.scanner.consume(-1);
                  }
                  i += "\\M";
                  continue;
                case "U":
                  if (this.scanner.peek() === "+") {
                    this.scanner.consume(1);
                    const l = this.scanner.tail.match(/^[0-9A-Fa-f]{4,8}/);
                    if (l) {
                      const f = l[0];
                      this.scanner.consume(f.length);
                      const c = parseInt(f, 16);
                      let p = "";
                      try {
                        p = String.fromCodePoint(c);
                      } catch {
                        p = "▯";
                      }
                      return i ? [1, i] : [1, p];
                    }
                    this.scanner.consume(-1);
                  }
                  i += "\\U";
                  continue;
                default:
                  if (u)
                    try {
                      const l = this.parseProperties(u);
                      if (this.yieldPropertyCommands && l)
                        return [9, l];
                      continue;
                    } catch {
                      const l = this.scanner.tail.slice(
                        h,
                        this.scanner.currentIndex
                      );
                      i += l;
                    }
              }
              continue;
            }
          if (o === "%" && this.scanner.peek(1) === "%") {
            const u = this.scanner.peek(2).toLowerCase(), l = sd[u];
            if (l) {
              this.scanner.consume(3), i += l;
              continue;
            } else {
              this.scanner.consume(3);
              continue;
            }
          }
          if (o === " ")
            return i ? (this.scanner.consume(1), t = 3, [1, i]) : (this.scanner.consume(1), [3, null]);
          if (!a) {
            if (o === "{") {
              if (i)
                return [1, i];
              this.scanner.consume(1), this.pushCtx();
              continue;
            } else if (o === "}") {
              if (i)
                return [1, i];
              if (this.scanner.consume(1), this.yieldPropertyCommands) {
                const u = this.ctxStack.current;
                this.popCtx();
                const l = this.getPropertyChanges(u, this.ctxStack.current);
                if (Object.keys(l).length > 0)
                  return [
                    9,
                    { command: void 0, changes: l, depth: this.ctxStack.depth }
                  ];
              } else
                this.popCtx();
              continue;
            }
          }
          if (!this.inStackContext && o === "^") {
            const u = this.scanner.peek(1);
            if (u) {
              const l = u.charCodeAt(0);
              if (this.scanner.consume(2), l === 32)
                i += "^";
              else {
                if (l === 73)
                  return i ? [1, i] : [5, null];
                if (l === 74)
                  return i ? [1, i] : [6, null];
                if (l === 77)
                  continue;
                i += "▯";
              }
              continue;
            }
          }
          this.scanner.consume(1), o.charCodeAt(0) >= 32 && (i += o);
        }
        return i ? [1, i] : [0, null];
      };
      for (; ; ) {
        const [s, i] = r.call(this);
        if (s) {
          if (yield new ms(s, this.ctxStack.current.copy(), i), s === 6 && this.resetParagraphParameters) {
            const a = this.ctxStack.current, o = e(a);
            this.yieldPropertyCommands && Object.keys(o).length > 0 && (yield new ms(9, a.copy(), {
              command: void 0,
              changes: { paragraph: o },
              depth: this.ctxStack.depth
            }));
          }
          t && (yield new ms(t, this.ctxStack.current.copy(), null), t = null);
        } else
          break;
      }
    }
  }
  class gs {
    /**
     * Create a new text scanner
     * @param text - The text to scan
     */
    constructor(t) {
      this.text = t, this.textLen = t.length, this._index = 0;
    }
    /**
     * Get the current index in the text
     */
    get currentIndex() {
      return this._index;
    }
    /**
     * Check if the scanner has reached the end of the text
     */
    get isEmpty() {
      return this._index >= this.textLen;
    }
    /**
     * Check if there is more text to scan
     */
    get hasData() {
      return this._index < this.textLen;
    }
    /**
     * Get the next character and advance the index
     * @returns The next character, or empty string if at end
     */
    get() {
      if (this.isEmpty)
        return "";
      const t = this.text[this._index];
      return this._index++, t;
    }
    /**
     * Advance the index by the specified count
     * @param count - Number of characters to advance
     */
    consume(t = 1) {
      this._index = Math.max(0, Math.min(this._index + t, this.textLen));
    }
    /**
     * Look at a character without advancing the index
     * @param offset - Offset from current position
     * @returns The character at the offset position, or empty string if out of bounds
     */
    peek(t = 0) {
      const e = this._index + t;
      return e >= this.textLen || e < 0 ? "" : this.text[e];
    }
    /**
     * Find the next occurrence of a character
     * @param char - The character to find
     * @param escape - Whether to handle escaped characters
     * @returns Index of the character, or -1 if not found
     */
    find(t, e = !1) {
      let r = this._index;
      for (; r < this.textLen; ) {
        if (e && this.text[r] === "\\") {
          if (r + 1 < this.textLen) {
            if (this.text[r + 1] === t)
              return r + 1;
            r += 2;
            continue;
          }
          r++;
          continue;
        }
        if (this.text[r] === t)
          return r;
        r++;
      }
      return -1;
    }
    /**
     * Get the remaining text from the current position
     */
    get tail() {
      return this.text.slice(this._index);
    }
    /**
     * Check if the next character is a space
     */
    isNextSpace() {
      return this.peek() === " ";
    }
    /**
     * Consume spaces until a non-space character is found
     * @returns Number of spaces consumed
     */
    consumeSpaces() {
      let t = 0;
      for (; this.isNextSpace(); )
        this.consume(), t++;
      return t;
    }
  }
  class ni {
    // Store as 0xRRGGBB or null
    /**
     * Create a new MTextColor instance.
     * @param color The initial color: number for ACI, [r,g,b] for RGB, or null/undefined for default (ACI=256).
     */
    constructor(t) {
      this._aci = 256, this._rgbValue = null, Array.isArray(t) ? this.rgb = t : typeof t == "number" ? this.aci = t : this.aci = 256;
    }
    /**
     * Get the current ACI color value.
     * @returns The ACI color (0-256), or null if using RGB.
     */
    get aci() {
      return this._aci;
    }
    /**
     * Set the ACI color value. Setting this disables any RGB color.
     * @param value The ACI color (0-256), or null to unset.
     * @throws Error if value is out of range.
     */
    set aci(t) {
      if (t === null)
        this._aci = null;
      else if (t >= 0 && t <= 256)
        this._aci = t, this._rgbValue = null;
      else
        throw new Error("ACI not in range [0, 256]");
    }
    /**
     * Get the current RGB color as a tuple [r, g, b], or null if not set.
     * @returns The RGB color tuple, or null if using ACI.
     */
    get rgb() {
      if (this._rgbValue === null) return null;
      const t = this._rgbValue >> 16 & 255, e = this._rgbValue >> 8 & 255, r = this._rgbValue & 255;
      return [t, e, r];
    }
    /**
     * Set the RGB color. Setting this disables ACI color.
     * @param value The RGB color tuple [r, g, b], or null to use ACI.
     */
    set rgb(t) {
      if (t) {
        const [e, r, s] = t;
        this._rgbValue = (e & 255) << 16 | (r & 255) << 8 | s & 255, this._aci = null;
      } else
        this._rgbValue = null;
    }
    /**
     * Returns true if the color is set by RGB, false if by ACI.
     */
    get isRgb() {
      return this._rgbValue !== null;
    }
    /**
     * Returns true if the color is set by ACI, false if by RGB.
     */
    get isAci() {
      return this._rgbValue === null && this._aci !== null;
    }
    /**
     * Get or set the internal RGB value as a number (0xRRGGBB), or null if not set.
     * Setting this will switch to RGB mode and set ACI to null.
     */
    get rgbValue() {
      return this._rgbValue;
    }
    set rgbValue(t) {
      t === null ? this._rgbValue = null : (this._rgbValue = t & 16777215, this._aci = null);
    }
    /**
     * Returns a deep copy of this color.
     * @returns A new MTextColor instance with the same color state.
     */
    copy() {
      const t = new ni();
      return t._aci = this._aci, t._rgbValue = this._rgbValue, t;
    }
    /**
     * Returns a plain object for serialization.
     * @returns An object with aci, rgb (tuple), and rgbValue (number or null).
     */
    toObject() {
      return { aci: this._aci, rgb: this.rgb, rgbValue: this._rgbValue };
    }
    /**
     * Equality check for color.
     * @param other The other MTextColor to compare.
     * @returns True if both ACI and RGB values are equal.
     */
    equals(t) {
      return this._aci === t._aci && this._rgbValue === t._rgbValue;
    }
  }
  class Dr {
    constructor() {
      this._stroke = 0, this.continueStroke = !1, this.color = new ni(), this.align = 0, this.fontFace = { family: "", style: "Regular", weight: 400 }, this._capHeight = { value: 1, isRelative: !1 }, this._widthFactor = { value: 1, isRelative: !1 }, this._charTrackingFactor = { value: 1, isRelative: !1 }, this.oblique = 0, this.paragraph = {
        indent: 0,
        left: 0,
        right: 0,
        align: 0,
        tabs: []
      };
    }
    /**
     * Get the capital letter height
     */
    get capHeight() {
      return this._capHeight;
    }
    /**
     * Set the capital letter height
     * @param value - Height value
     */
    set capHeight(t) {
      this._capHeight = {
        value: Math.abs(t.value),
        isRelative: t.isRelative
      };
    }
    /**
     * Get the character width factor
     */
    get widthFactor() {
      return this._widthFactor;
    }
    /**
     * Set the character width factor
     * @param value - Width factor value
     */
    set widthFactor(t) {
      this._widthFactor = {
        value: Math.abs(t.value),
        isRelative: t.isRelative
      };
    }
    /**
     * Get the character tracking factor
     */
    get charTrackingFactor() {
      return this._charTrackingFactor;
    }
    /**
     * Set the character tracking factor
     * @param value - Tracking factor value
     */
    set charTrackingFactor(t) {
      this._charTrackingFactor = {
        value: Math.abs(t.value),
        isRelative: t.isRelative
      };
    }
    /**
     * Get the ACI color value
     */
    get aci() {
      return this.color.aci;
    }
    /**
     * Set the ACI color value
     * @param value - ACI color value (0-256)
     * @throws Error if value is out of range
     */
    set aci(t) {
      this.color.aci = t;
    }
    /**
     * Get the RGB color value
     */
    get rgb() {
      return this.color.rgb;
    }
    /**
     * Set the RGB color value
     */
    set rgb(t) {
      this.color.rgb = t;
    }
    /**
     * Gets whether the current text should be rendered in italic style.
     * @returns {boolean} True if the font style is 'Italic', otherwise false.
     */
    get italic() {
      return this.fontFace.style === "Italic";
    }
    /**
     * Sets whether the current text should be rendered in italic style.
     * @param value - If true, sets the font style to 'Italic'; if false, sets it to 'Regular'.
     */
    set italic(t) {
      this.fontFace.style = t ? "Italic" : "Regular";
    }
    /**
     * Gets whether the current text should be rendered in bold style.
     * This is primarily used for mesh fonts and affects font selection.
     * @returns {boolean} True if the font weight is 700 or higher, otherwise false.
     */
    get bold() {
      return (this.fontFace.weight || 400) >= 700;
    }
    /**
     * Sets whether the current text should be rendered in bold style.
     * This is primarily used for mesh fonts and affects font selection.
     * @param value - If true, sets the font weight to 700; if false, sets it to 400.
     */
    set bold(t) {
      this.fontFace.weight = t ? 700 : 400;
    }
    /**
     * Get whether text is underlined
     */
    get underline() {
      return !!(this._stroke & 1);
    }
    /**
     * Set whether text is underlined
     * @param value - Whether to underline
     */
    set underline(t) {
      this._setStrokeState(1, t);
    }
    /**
     * Get whether text has strike-through
     */
    get strikeThrough() {
      return !!(this._stroke & 4);
    }
    /**
     * Set whether text has strike-through
     * @param value - Whether to strike through
     */
    set strikeThrough(t) {
      this._setStrokeState(4, t);
    }
    /**
     * Get whether text has overline
     */
    get overline() {
      return !!(this._stroke & 2);
    }
    /**
     * Set whether text has overline
     * @param value - Whether to overline
     */
    set overline(t) {
      this._setStrokeState(2, t);
    }
    /**
     * Check if any stroke formatting is active
     */
    get hasAnyStroke() {
      return !!this._stroke;
    }
    /**
     * Set the state of a stroke type
     * @param stroke - The stroke type to set
     * @param state - Whether to enable or disable the stroke
     */
    _setStrokeState(t, e = !0) {
      e ? this._stroke |= t : this._stroke &= ~t;
    }
    /**
     * Create a copy of this context
     * @returns A new context with the same properties
     */
    copy() {
      const t = new Dr();
      return t._stroke = this._stroke, t.continueStroke = this.continueStroke, t.color = this.color.copy(), t.align = this.align, t.fontFace = { ...this.fontFace }, t._capHeight = { ...this._capHeight }, t._widthFactor = { ...this._widthFactor }, t._charTrackingFactor = { ...this._charTrackingFactor }, t.oblique = this.oblique, t.paragraph = { ...this.paragraph }, t;
    }
  }
  class ms {
    /**
     * Create a new MText token
     * @param type - The token type
     * @param ctx - The text context at this token
     * @param data - Optional token data
     */
    constructor(t, e, r) {
      this.type = t, this.ctx = e, this.data = r;
    }
  }
  var Or = /* @__PURE__ */ ((n) => (n[n.LEFT_TO_RIGHT = 1] = "LEFT_TO_RIGHT", n[n.RIGHT_TO_LEFT = 2] = "RIGHT_TO_LEFT", n[n.TOP_TO_BOTTOM = 3] = "TOP_TO_BOTTOM", n[n.BOTTOM_TO_TOP = 4] = "BOTTOM_TO_TOP", n[n.BY_STYLE = 5] = "BY_STYLE", n))(Or || {});
  const ud = /* @__PURE__ */ new w(), ld = 1.666666;
  class si extends Dr {
    /**
     * Creates a new RenderContext instance with optional initial values.
     * @param init - Partial object containing initial values for context properties
     */
    constructor(t) {
      super(), this.fontScaleFactor = 1, this.fontSize = 1, this.fontSizeScaleFactor = 1, this.blankWidth = 0, t && Object.assign(this, t);
    }
    /**
     * Creates a deep copy of the current context.
     * This is useful for saving state before applying formatting changes.
     * @returns A new RenderContext instance with identical property values
     */
    clone() {
      const t = new si();
      return t.continueStroke = this.continueStroke, t.color = this.color.copy(), t.align = this.align, t.fontFace = { ...this.fontFace }, t.capHeight = { ...this.capHeight }, t.widthFactor = { ...this.widthFactor }, t.charTrackingFactor = { ...this.charTrackingFactor }, t.oblique = this.oblique, t.paragraph = { ...this.paragraph }, t.fontScaleFactor = this.fontScaleFactor, t.fontSize = this.fontSize, t.fontSizeScaleFactor = this.fontSizeScaleFactor, t.blankWidth = this.blankWidth, t;
    }
    /**
     * Get the current text color as a hexadecimal value for rendering.
     * @returns The color as a hex number (0xRRGGBB)
     */
    getColorAsHex() {
      return this.color.isRgb && this.color.rgbValue !== null ? this.color.rgbValue : this.color.isAci && this.color.aci !== null ? ku(this.color.aci) : 16777215;
    }
    /**
     * Set the color using a hex value for rendering purposes.
     * @param hexColor - The color as a hex number (0xRRGGBB)
     */
    setColorFromHex(t) {
      const e = t >> 16 & 255, r = t >> 8 & 255, s = t & 255;
      this.color.rgb = [e, r, s];
    }
  }
  class cd {
    /**
     * Construct one instance of this class and initialize some properties with default values.
     * @param style Input text style
     * @param styleManager Input text style manager instance
     * @param fontManager Input font manager instance
     * @param options Input formating options
     */
    constructor(t, e, r, s) {
      this._contextStack = [], this._maxFontSize = 0, this._currentIndent = 0, this._currentLeftMargin = 0, this._currentRightMargin = 0, this._style = t, this._styleManager = e, this._fontManager = r, this._options = s, this._totalHeight = 0, this._hOffset = 0, this._vOffset = 0, this._lineCount = 1, this._currentLineObjects = [], this._currentContext = new si({
        fontScaleFactor: this.fontManager.getFontScaleFactor(
          this.textStyle.font.toLowerCase()
        ),
        fontSize: s.fontSize,
        fontSizeScaleFactor: 1,
        italic: !1,
        bold: !1,
        blankWidth: this.calculateBlankWidthForFont(
          this.textStyle.font.toLowerCase(),
          s.fontSize
        )
      }), this._currentContext.setColorFromHex(t.color), this._currentContext.fontFace.family = this.textStyle.font.toLowerCase(), this._currentContext.widthFactor = {
        value: s.widthFactor,
        isRelative: !0
      }, this._currentContext.oblique = t.obliqueAngle || 0, this._maxFontSize = 0, this._currentHorizontalAlignment = s.horizontalAlignment, this._currentIndent = 0, this._currentLeftMargin = 0, this._currentRightMargin = 0, this.initLineParams();
    }
    get fontManager() {
      return this._fontManager;
    }
    get styleManager() {
      return this._styleManager;
    }
    get textStyle() {
      return this._style;
    }
    /**
     * Total height of all lines of text
     */
    get totalHeight() {
      return this._lineCount == 1 ? this.currentMaxFontSize : this._totalHeight + this.currentLineHeight;
    }
    /**
     * The maximum width of one text line
     */
    get maxWidth() {
      return this._options.maxWidth;
    }
    /**
     * The direction that the text string follows from its start to its finish.
     */
    get flowDirection() {
      return this._options.flowDirection;
    }
    /**
     * The default horizontal alignment of one text line
     */
    get defaultHorizontalAlignment() {
      return this._options.horizontalAlignment;
    }
    /**
     * The default scale factor of character width
     */
    get defaultWidthFactor() {
      return this._options.widthFactor;
    }
    /**
     * The default font size of texts
     */
    get defaultFontSize() {
      return this._options.fontSize;
    }
    /**
     * The default line space factor
     */
    get defaultLineSpaceFactor() {
      return this._options.lineSpaceFactor;
    }
    /**
     * Font name of current character
     */
    get currentFont() {
      return this._currentContext.fontFace.family;
    }
    /**
     * The current horizontal alignment of one text line
     */
    get currentHorizontalAlignment() {
      return this._currentHorizontalAlignment;
    }
    /**
     * Font size of current character
     */
    get currentFontSize() {
      return this._currentContext.fontSize;
    }
    /**
     * The height of current line of texts
     */
    get currentLineHeight() {
      return this.defaultLineSpaceFactor * this.currentFontSize * ld + this.currentMaxFontSize;
    }
    /**
     * The maximum font size in current line. Characters in one line may have different font and font
     * size. So we need to store the maximum font size in current line in order to calculate the height
     * of current line.
     */
    get currentMaxFontSize() {
      return this._maxFontSize;
    }
    /**
     * The current space setting between two characters. The meaning of this value is as follows.
     * - 1: no extra spacing (default tracking)
     * - 1.2: increases spacing by 20% of the text height
     * - 0.8: decreases spacing by 20% of the text height
     */
    get currentWordSpace() {
      return this._currentContext.charTrackingFactor.value;
    }
    /**
     * The current scale factor of character width
     */
    get currentWidthFactor() {
      return this._currentContext.widthFactor.value;
    }
    /**
     * All of THREE.js objects in current line. It contains objects in all of sections of this line.
     */
    get currentLineObjects() {
      return this._currentLineObjects;
    }
    /**
     * The horizental offset of current character in this line
     */
    get hOffset() {
      return this._hOffset;
    }
    set hOffset(t) {
      this._hOffset = t;
    }
    /**
     * The vertical offset of current character in this line
     */
    get vOffset() {
      return this._vOffset;
    }
    set vOffset(t) {
      this._vOffset = t;
    }
    get currentIndent() {
      return this._currentIndent;
    }
    get currentLeftMargin() {
      return this._currentLeftMargin;
    }
    get currentRightMargin() {
      return this._currentRightMargin;
    }
    get maxLineWidth() {
      return this.maxWidth - this._currentLeftMargin - this._currentRightMargin;
    }
    /**
     * Process text format information
     * @param item Input mtext inline codes
     */
    processFormat(t) {
      switch (t.command) {
        case "f":
        case "F":
          t.changes.fontFace && (this.changeFont(t.changes.fontFace.family), this.fontManager.getFontType(
            this._currentContext.fontFace.family
          ) === "mesh" ? (this._currentContext.italic = t.changes.fontFace.style === "Italic", this._currentContext.bold = (t.changes.fontFace.weight || 400) >= 700, this._currentContext.oblique = this.textStyle.obliqueAngle || 0) : (this._currentContext.italic = !1, this._currentContext.bold = !1, t.changes.fontFace.style === "Italic" ? this._currentContext.oblique = 15 : this._currentContext.oblique = this.textStyle.obliqueAngle || 0));
          break;
        case "c":
        case "C":
          t.changes.aci ? t.changes.aci === 0 ? this._currentContext.setColorFromHex(this._options.byBlockColor) : t.changes.aci === 256 ? this._currentContext.setColorFromHex(this._options.byLayerColor) : this._currentContext.color.aci = t.changes.aci : t.changes.rgb && (this._currentContext.color.rgb = t.changes.rgb);
          break;
        case "W":
          t.changes.widthFactor && (t.changes.widthFactor.isRelative ? this._currentContext.widthFactor = {
            value: t.changes.widthFactor.value * this.maxWidth,
            isRelative: !1
          } : this._currentContext.widthFactor = {
            value: t.changes.widthFactor.value * 0.93,
            isRelative: !1
          });
          break;
        case "H":
          t.changes.capHeight && (t.changes.capHeight.isRelative ? this.changeFontSizeScaleFactor(t.changes.capHeight.value) : this.changeFontHeight(t.changes.capHeight.value));
          break;
        case "T":
          t.changes.charTrackingFactor && (t.changes.charTrackingFactor.isRelative ? this._currentContext.charTrackingFactor = {
            value: t.changes.charTrackingFactor.value + 1,
            isRelative: !1
          } : this._currentContext.charTrackingFactor = {
            value: t.changes.charTrackingFactor.value,
            isRelative: !1
          });
          break;
        case "p":
          t.changes.paragraph && (t.changes.paragraph.align && (this._currentHorizontalAlignment = t.changes.paragraph.align), typeof t.changes.paragraph.indent == "number" && (this._currentIndent = t.changes.paragraph.indent * this.defaultFontSize, this._hOffset += this._currentIndent), typeof t.changes.paragraph.left == "number" && (this._currentLeftMargin = t.changes.paragraph.left * this.defaultFontSize), typeof t.changes.paragraph.right == "number" && (this._currentRightMargin = t.changes.paragraph.right * this.defaultFontSize));
          break;
        case "L":
          this._currentContext.underline = !0;
          break;
        case "l":
          this._currentContext.underline = !1;
          break;
        case "O":
          this._currentContext.overline = !0;
          break;
        case "o":
          this._currentContext.overline = !1;
          break;
        case "K":
          this._currentContext.strikeThrough = !0;
          break;
        case "k":
          this._currentContext.strikeThrough = !1;
          break;
        case "Q":
          t.changes.oblique !== void 0 && (this._currentContext.oblique = t.changes.oblique);
          break;
      }
    }
    /**
     * Reset paragraph properties to their default values from options.
     */
    resetParagraphProperties() {
      this._currentIndent = 0, this._currentLeftMargin = 0, this._currentRightMargin = 0, this._currentHorizontalAlignment = this._options.horizontalAlignment;
    }
    /**
     * Start a new paragraph by processing current geometries, resetting paragraph properties,
     * and starting a new line with indent applied.
     * @param geometries Current text geometries to process
     * @param lineGeometries Current line geometries to process
     * @param group The group to add processed geometries to
     */
    startNewParagraph(t, e, r) {
      this.processGeometries(t, e, r), this.startNewLine(), this.resetParagraphProperties();
    }
    /**
     * Render the specified texts
     * @param item Input texts to render
     */
    processText(t) {
      const e = [], r = [], s = new Ri();
      for (const i of t)
        if (i.type === Qe.NEW_PARAGRAPH)
          this.startNewParagraph(e, r, s);
        else if (i.type === Qe.WORD) {
          const a = i.data;
          Array.isArray(a) ? a.forEach(
            (o) => this.processWord(o, e, r)
          ) : typeof a == "string" && a.length > 0 && this.processWord(a, e, r);
        } else if (i.type === Qe.SPACE)
          this.processBlank();
        else if (i.type === Qe.PROPERTIES_CHANGED) {
          this.processGeometries(e, r, s);
          const a = i.data;
          a.command === void 0 ? this._contextStack.length > 0 && (this._currentContext = this._contextStack.pop()) : (a.depth > 0 && this._contextStack.push(this._currentContext.clone()), this.processFormat(a));
        } else i.type === Qe.STACK && (this.processStack(i.data, e, r), this.processGeometries(e, r, s));
      return (e.length > 0 || r.length > 0) && this.processGeometries(e, r, s), this.processLastLine(), s;
    }
    processGeometries(t, e, r) {
      if (t.length > 0 || e.length > 0) {
        const s = this.toThreeObject(t, e);
        r.add(s), this._currentLineObjects.push(s), t.length = 0, e.length = 0;
      }
    }
    processWord(t, e, r) {
      let s = 0;
      for (let i = 0; i < t.length; i++) {
        const a = this.getCharShape(t[i]);
        a ? this.currentHorizontalAlignment == Pt.DISTRIBUTED ? s += a.width * this.currentWidthFactor : s += a.width * this.currentWordSpace * this.currentWidthFactor : s += this._currentContext.blankWidth;
      }
      this.hOffset + s > (this.maxLineWidth || 1 / 0) && this.startNewLine();
      for (let i = 0; i < t.length; i++)
        this.processChar(t[i], e, r);
    }
    processStack(t, e, r) {
      const [s, i, a] = t, o = this._hOffset, h = this._vOffset, u = this._currentContext.charTrackingFactor.value, l = this._currentContext.fontSize, f = this._currentContext.fontSizeScaleFactor;
      this._hOffset = o, this._currentContext.charTrackingFactor = { value: 1, isRelative: !1 };
      let c = 0;
      for (let m = 0; m < s.length; m++) {
        const b = this.getCharShape(s[m]);
        b && (c += b.width * this.currentWidthFactor);
      }
      this._hOffset = o;
      let p = 0;
      for (let m = 0; m < i.length; m++) {
        const b = this.getCharShape(i[m]);
        b && (p += b.width * this.currentWidthFactor);
      }
      const d = Math.max(c, p), g = (d - c) / 2, y = (d - p) / 2;
      if (a === "^") {
        if (this._currentContext.fontSizeScaleFactor = f * 0.7, this.calcuateLineParams(), s && !i) {
          const m = [], b = [];
          this._hOffset = o, this._vOffset = h + l * 0.1;
          for (let v = 0; v < s.length; v++)
            this.processChar(
              s[v],
              m,
              b
            );
          e.push(...m), r.push(...b), this._hOffset = o + c;
        } else if (!s && i) {
          const m = [], b = [];
          this._hOffset = o, this._vOffset = h - l * 0.6;
          for (let v = 0; v < i.length; v++)
            this.processChar(
              i[v],
              m,
              b
            );
          e.push(...m), r.push(...b), this._hOffset = o + p;
        }
        this._currentContext.fontSizeScaleFactor = f, this.calcuateLineParams();
      } else {
        const m = [], b = [];
        this._hOffset = o + g, this._vOffset = h + this.currentFontSize * 0.3;
        for (let F = 0; F < s.length; F++)
          this.processChar(
            s[F],
            m,
            b
          );
        e.push(...m), r.push(...b);
        const v = [], x = [];
        this._hOffset = o + y, this._vOffset = h - this.currentFontSize * 0.6;
        for (let F = 0; F < i.length; F++)
          this.processChar(
            i[F],
            v,
            x
          );
        if (e.push(...v), r.push(...x), a === "/" || a === "#") {
          const F = new vt(), C = new Float32Array([
            o,
            h - this.currentFontSize * 0.8,
            0,
            o + d,
            h - this.currentFontSize * 0.8,
            0
          ]);
          F.setAttribute(
            "position",
            new Dt(C, 3)
          ), F.setIndex(null), r.push(F);
        }
        this._hOffset = o + d;
      }
      this._vOffset = h, this._currentContext.charTrackingFactor = {
        value: u,
        isRelative: !1
      };
    }
    processBlank() {
      this._hOffset += this._currentContext.blankWidth;
    }
    processChar(t, e, r) {
      const s = this.getCharShape(t);
      if (!s) {
        this.processBlank();
        return;
      }
      const i = s.toGeometry();
      i.scale(this.currentWidthFactor, 1, 1);
      let a = this._currentContext.oblique;
      if (this._currentContext.italic && (a += 15), a) {
        const d = a * Math.PI / 180, g = new mt();
        g.set(
          1,
          Math.tan(d),
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ), i.applyMatrix4(g);
      }
      const o = this.fontManager.getFontType(this.currentFont);
      this._currentContext.bold && o === "mesh" && i.scale(1.06, 1.06, 1), this.hOffset > (this.maxLineWidth || 1 / 0) && this.startNewLine();
      const h = this.hOffset, u = this.flowDirection == Or.BOTTOM_TO_TOP ? this.vOffset : this.vOffset - this.currentFontSize, l = s.width * this.currentWidthFactor, f = this.currentFontSize;
      i.translate(h, u, 0), this.currentHorizontalAlignment == Pt.DISTRIBUTED ? this._hOffset += s.width * this.currentWidthFactor : this._hOffset += s.width * this.currentWordSpace * this.currentWidthFactor, e.push(i);
      const c = f * 0.05, p = 1e-3;
      if (this._currentContext.underline) {
        const d = new vt(), g = u - c;
        d.setAttribute(
          "position",
          new Dt(
            new Float32Array([
              h,
              g,
              p,
              h + l,
              g,
              p
            ]),
            3
          )
        ), d.setIndex(null), r.push(d);
      }
      if (this._currentContext.overline) {
        const d = new vt(), g = u + f + c;
        d.setAttribute(
          "position",
          new Dt(
            new Float32Array([
              h,
              g,
              p,
              h + l,
              g,
              p
            ]),
            3
          )
        ), d.setIndex(null), r.push(d);
      }
      if (this._currentContext.strikeThrough) {
        const d = new vt(), g = u + f / 2 - f * 0.2;
        d.setAttribute(
          "position",
          new Dt(
            new Float32Array([
              h,
              g,
              p,
              h + l,
              g,
              p
            ]),
            3
          )
        ), d.setIndex(null), r.push(d);
      }
    }
    processLastLine() {
      this.processAlignment();
    }
    initLineParams() {
      this.calcuateLineParams();
    }
    changeFont(t) {
      let e = t;
      this._options.removeFontExtension && (e = t.replace(/\.(ttf|otf|woff|shx)$/, "")), this._currentContext.fontFace.family = this.fontManager.findAndReplaceFont(e), this._currentContext.blankWidth = this.calculateBlankWidthForFont(
        this._currentContext.fontFace.family,
        this._currentContext.fontSize
      ), this.calcuateLineParams();
    }
    /**
     * Calcuate font size, line space, line height and other parameters.
     */
    calcuateLineParams(t) {
      this._currentContext.fontScaleFactor = this.fontManager.getFontScaleFactor(
        this.currentFont
      );
      const e = t || this.defaultFontSize || this.textStyle.fixedTextHeight;
      this._currentContext.fontSize = e * this._currentContext.fontScaleFactor * this._currentContext.fontSizeScaleFactor;
    }
    /**
     * Get text shape of the specified character
     * @param char Input one character
     * @returns Return the text shape of the specified character
     */
    getCharShape(t) {
      let e = this.fontManager.getCharShape(
        t,
        this.currentFont,
        this.currentFontSize
      );
      return this.textStyle.bigFont && !e && (e = this.fontManager.getCharShape(
        t,
        this.textStyle.bigFont,
        this.currentFontSize
      )), e || (e = this.fontManager.getCharShape(t, "", this.currentFontSize)), e || (e = this.fontManager.getNotFoundTextShape(this.currentFontSize)), this.currentFontSize > this._maxFontSize && (this._maxFontSize = this.currentFontSize), e;
    }
    startNewLine() {
      this._hOffset = 0, this.flowDirection == Or.BOTTOM_TO_TOP ? this._vOffset += this.currentLineHeight : this._vOffset -= this.currentLineHeight, this._lineCount++, this.processAlignment(), this._currentLineObjects = [], this._lineCount == 2 ? this._totalHeight = this.currentMaxFontSize : this._totalHeight = this._totalHeight + this.currentLineHeight, this._maxFontSize = 0;
    }
    /**
     * Apply translation on the specified buffer geometries according to text alignment setting
     */
    processAlignment() {
      const t = [];
      if (this.currentLineObjects.forEach(
        (r) => r.traverse((s) => {
          "geometry" in s && t.push(s.geometry);
        })
      ), t.length == 0) return;
      let e;
      if (t.forEach((r, s) => {
        r.boundingBox || r.computeBoundingBox(), s === 0 ? e = r.boundingBox : e.union(r.boundingBox);
      }), e) {
        const r = e.getSize(ud);
        switch (this.currentHorizontalAlignment) {
          case Pt.LEFT:
            t.forEach(
              (s) => s.translate(this._currentLeftMargin - e.min.x, 0, 0)
            );
            break;
          case Pt.CENTER:
            t.forEach(
              (s) => s.translate(
                this._currentLeftMargin + (this.maxLineWidth - r.x) / 2 - e.min.x,
                0,
                0
              )
            );
            break;
          case Pt.RIGHT:
            t.forEach(
              (s) => s.translate(
                this._currentLeftMargin + this.maxLineWidth - r.x - e.min.x,
                0,
                0
              )
            );
            break;
          case Pt.DISTRIBUTED:
            if (t.length > 1) {
              const s = (this.maxLineWidth - r.x) / (t.length - 1);
              for (let i = 1; i < t.length; i++)
                t[i].translate(s * i, 0, 0);
            }
            t.forEach(
              (s) => s.translate(this._currentLeftMargin - e.min.x, 0, 0)
            );
            break;
        }
      }
    }
    /**
     * In AutoCAD, the width of a regular space character (ASCII 32, the space key on the keyboard) in MText
     * depends on the current font and text height, and is not a fixed value.
     * Specifically:
     * - Space width ≈ Text height × space width ratio defined by the font
     * - For common TrueType fonts (like Arial), the space width is typically about 1/4 to 1/3 of the text height.
     * For example, if the text height is 10 (units), the space width would be approximately 2.5 to 3.3 units.
     * - For SHX fonts (AutoCAD's built-in vector fonts, such as txt.shx), the space width is often half the text height.
     * So if the text height is 10, the space width is typically 5 units.
     */
    calculateBlankWidthForFont(t, e) {
      return this.fontManager.getFontType(t) === "shx" ? e * 0.5 : e * 0.3;
    }
    /**
     * Convert the text shape geometries to three.js object
     * @param geometries Input text shape geometries
     * @returns Return three.js object created from the specified text shape geometries
     */
    toThreeObject(t, e) {
      const r = new Ri(), s = this._currentContext.getColorAsHex(), i = t.filter((o) => o instanceof kr);
      if (i.length > 0) {
        const o = new dn();
        o.geometry = La(i), o.material = this.styleManager.getMeshBasicMaterial(s), o.userData.bboxIntersectionCheck = !0, r.add(o);
      }
      const a = [
        ...e,
        ...t.filter((o) => !(o instanceof kr))
      ];
      if (a.length > 0) {
        const o = new Mh();
        o.geometry = La(a), o.material = this.styleManager.getLineBasicMaterial(s), o.userData.bboxIntersectionCheck = !0, r.add(o);
      }
      return r.children.length === 1 ? r.children[0] : r;
    }
    changeFontSizeScaleFactor(t) {
      this._currentContext.fontSizeScaleFactor *= t, this.calcuateLineParams();
    }
    changeFontHeight(t) {
      this._currentContext.fontSize = t * this._currentContext.fontScaleFactor * this._currentContext.fontSizeScaleFactor, this.calcuateLineParams();
    }
  }
  const ys = /* @__PURE__ */ new w(), Ee = /* @__PURE__ */ new w(), vs = /* @__PURE__ */ new w(), xs = /* @__PURE__ */ new we(), bs = /* @__PURE__ */ new mt(), Ia = /* @__PURE__ */ new mt(), Na = /* @__PURE__ */ new w(1, 0, 0);
  class ii extends Et {
    /**
     * Extracts all unique font names used in an MText string.
     * This function searches for font commands in the format \f{fontname}| or \f{fontname}; and returns a set of unique font names.
     * Font names are converted to lowercase to ensure case-insensitive uniqueness.
     *
     * @param mtext - The MText string to analyze for font names
     * @param removeExtension - Whether to remove font file extensions (e.g., .ttf, .shx) from font names. Defaults to false.
     * @returns A Set containing all unique font names found in the MText string, converted to lowercase
     * @example
     * ```ts
     * const mtext = "\\fArial.ttf|Hello\\fTimes New Roman.otf|World";
     * const fonts = getFonts(mtext, true);
     * // Returns: Set(2) { "arial", "times new roman" }
     * ```
     */
    static getFonts(t, e = !1) {
      return ad(t, e);
    }
    /**
     * Creates a new instance of MText.
     * @param text - The MText data containing text content and properties
     * @param style - The text style configuration
     * @param styleManager - The style manager instance
     * @param fontManager - The font manager instance
     * @param colorSettings - Color settings used to decided font color
     */
    constructor(t, e, r, s, i = {
      byLayerColor: 16777215,
      byBlockColor: 16777215
    }) {
      super(), this._style = e, this._styleManager = r, this._fontManager = s, this._colorSettings = {
        byLayerColor: i.byLayerColor,
        byBlockColor: i.byBlockColor
      }, this._box = new Ue(), this._boxes = [], this._mtextData = t;
    }
    /**
     * Gets the font manager instance associated with this MText object.
     * @returns The FontManager instance
     */
    get fontManager() {
      return this._fontManager;
    }
    /**
     * Draw the MText object. This method loads required fonts on demand and builds the object graph.
     */
    async asyncDraw() {
      const t = Array.from(ii.getFonts(this._mtextData.text || "", !0));
      t.length > 0 && await this._fontManager.loadFontsByNames(t), this.syncDraw();
    }
    /**
     * Draw the MText object. This method assumes that fonts needed are loaded. If font needed
     * not found, the default font will be used.
     */
    syncDraw() {
      const t = this.loadMText(this._mtextData, this._style);
      t && (this.getBoxes(t, this._boxes), this._boxes.forEach((e) => this.box.union(e)), this.add(t));
    }
    /**
     * Gets the style manager instance associated with this MText object.
     * @returns The StyleManager instance
     */
    get styleManager() {
      return this._styleManager;
    }
    /**
     * Gets the text style configuration for this MText object.
     * @returns The TextStyle configuration
     */
    get textStyle() {
      return this._style;
    }
    /**
     * Gets or sets the bounding box of this MText object.
     * The bounding box is calculated without considering the transformation matrix.
     * To get the bounding box with transformation, call `applyMatrix4` on this box.
     */
    get box() {
      return this._box;
    }
    set box(t) {
      this._box.copy(t);
    }
    /**
     * Calculates intersections between a ray and this MText object.
     * Overrides the base THREE.Object3D raycast method to use the text's bounding boxes.
     * @param raycaster - The raycaster to use for intersection testing
     * @param intersects - Array to store intersection results
     */
    raycast(t, e) {
      this._boxes.forEach((r) => {
        if (t.ray.intersectBox(r, ys)) {
          const s = t.ray.origin.distanceTo(ys);
          e.push({
            distance: s,
            point: ys.clone(),
            object: this,
            face: null,
            faceIndex: void 0,
            uv: void 0
          });
        }
      });
    }
    /**
     * Loads and processes MText data to create a Three.js object.
     * @param mtextData - The MText data to process
     * @param style - The text style configuration
     * @returns The created Three.js object, or undefined if creation fails
     */
    loadMText(t, e) {
      const { object: r, height: s } = this.createMTextGroup(t, e);
      if (!r)
        return;
      r.matrix.decompose(Ee, xs, vs), t.position && (Ee.x += t.position.x, Ee.y += t.position.y, r.matrix.compose(Ee, xs, vs));
      const i = t.width, a = this.calculateAnchorPoint(
        i,
        s,
        t.attachmentPoint,
        t.drawingDirection
      );
      r.traverse((u) => {
        "geometry" in u && u.geometry.translate(a.x, a.y, 0), u.layers.enableAll();
      });
      let o = t.rotation || 0;
      if (t.directionVector) {
        const u = t.directionVector, l = new w(u.x, u.y, u.z), f = l.clone().cross(Na), c = Na.angleTo(l);
        o = f.z > 0 ? -c : c;
      }
      r.matrix.compose(Ee, xs, vs);
      const h = t.position ? Ee.clone().sub(t.position) : Ee;
      return bs.makeTranslation(-h.x, -h.y, 0), Ia.makeRotationZ(o), r.matrix.multiply(bs), r.matrix.multiply(Ia), r.matrix.multiply(bs.invert()), r.matrix.decompose(r.position, r.quaternion, r.scale), r;
    }
    /**
     * Creates a group of text elements from MText data.
     * @param mtextData - The MText data to process
     * @param style - The text style configuration
     * @returns An object containing the created Three.js object and its height
     */
    createMTextGroup(t, e) {
      if (e && e.font && e.font.endsWith(".shx")) {
        const g = `${e.font}_${e.name}`;
        this.styleManager.unsupportedTextStyles[g] || (this.styleManager.unsupportedTextStyles[g] = 0), this.styleManager.unsupportedTextStyles[g]++;
      }
      const r = t.width || 0;
      let s = Pt.LEFT;
      t.width && t.attachmentPoint && ([1, 4, 7].includes(t.attachmentPoint) ? s = Pt.LEFT : [2, 5, 8].includes(t.attachmentPoint) ? s = Pt.CENTER : [3, 6, 9].includes(t.attachmentPoint) && (s = Pt.RIGHT));
      let i = mr.BOTTOM;
      t.attachmentPoint && ([1, 2, 3].includes(t.attachmentPoint) ? i = mr.TOP : [4, 5, 6].includes(t.attachmentPoint) ? i = mr.MIDDLE : [7, 8, 9].includes(t.attachmentPoint) && (i = mr.BOTTOM));
      const a = t.height || 0, o = t.lineSpaceFactor || 0.3, h = t.drawingDirection ?? Or.LEFT_TO_RIGHT, u = {
        fontSize: a,
        widthFactor: t.widthFactor ?? 1,
        lineSpaceFactor: o,
        horizontalAlignment: s,
        maxWidth: r,
        flowDirection: h,
        byBlockColor: this._colorSettings.byBlockColor,
        byLayerColor: this._colorSettings.byLayerColor,
        removeFontExtension: !0
      }, l = new Dr();
      l.fontFace.family = e.font, l.capHeight = { value: t.height || 1, isRelative: !0 }, l.widthFactor = {
        value: t.widthFactor ?? 1,
        isRelative: !0
      }, l.align = i, l.paragraph.align = s;
      const f = new cd(
        e,
        this.styleManager,
        this.fontManager,
        u
      ), p = new hd(t.text, l, {
        resetParagraphParameters: !0,
        yieldPropertyCommands: !0
      }).parse();
      return {
        object: f.processText(p),
        height: f.totalHeight
      };
    }
    /**
     * Calculates the anchor point for text positioning based on alignment and flow direction.
     * @param width - The width of the text
     * @param height - The height of the text
     * @param attachmentPoint - The attachment point for text alignment
     * @param flowDirection - The text flow direction
     * @returns The calculated anchor point coordinates
     */
    calculateAnchorPoint(t, e, r, s) {
      let i = 0, a = 0;
      switch (r) {
        case void 0:
        case 1:
          i = 0, a = 0;
          break;
        case 2:
          i -= t / 2, a = 0;
          break;
        case 3:
          i -= t, a = 0;
          break;
        case 4:
          i = 0, a += e / 2;
          break;
        case 5:
          i -= t / 2, a += e / 2;
          break;
        case 6:
          i -= t, a += e / 2;
          break;
        case 7:
          i = 0, a += e;
          break;
        case 8:
          i -= t / 2, a += e;
          break;
        case 9:
          i -= t, a += e;
          break;
      }
      return s == Or.BOTTOM_TO_TOP && (a -= e), { x: i, y: a };
    }
    /**
     * Recursively calculates bounding boxes for an object and its children.
     * @param object - The Three.js object to process
     * @param boxes - Array to store the calculated bounding boxes
     */
    getBoxes(t, e) {
      if (t.updateWorldMatrix(!1, !1), t instanceof Hs || t instanceof dn) {
        const s = t.geometry;
        s.boundingBox === null && s.computeBoundingBox();
        const i = new Ue().copy(s.boundingBox);
        i.applyMatrix4(t.matrixWorld), e.push(i);
      }
      const r = t.children;
      for (let s = 0, i = r.length; s < i; s++)
        this.getBoxes(r[s], e);
    }
  }
  class fd {
    constructor() {
      this.lineBasicMaterials = {}, this.meshBasicMaterials = {}, this.unsupportedTextStyles = {};
    }
    getMeshBasicMaterial(t) {
      return this.meshBasicMaterials[t] || (this.meshBasicMaterials[t] = new Za({
        color: t
      })), this.meshBasicMaterials[t];
    }
    getLineBasicMaterial(t) {
      return this.lineBasicMaterials[t] || (this.lineBasicMaterials[t] = new Ya({
        color: t
      })), this.lineBasicMaterials[t];
    }
  }
  const Ga = ae.instance, pd = new fd();
  self.addEventListener("message", async (n) => {
    const { type: t, id: e, data: r } = n.data;
    try {
      switch (t) {
        case "render": {
          if (!r) throw new Error("Missing data for render message");
          const { mtextContent: s, textStyle: i, colorSettings: a } = r, o = new ii(
            s,
            i,
            pd,
            Ga,
            a
          );
          await o.asyncDraw(), o.updateMatrixWorld(!0);
          const { data: h, transferableObjects: u } = dd(o);
          self.postMessage(
            {
              type: "render",
              id: e,
              success: !0,
              data: h
            },
            { transfer: u }
          );
          break;
        }
        case "loadFonts": {
          if (!r) throw new Error("Missing data for loadFonts message");
          const { fonts: s } = r;
          await Ga.loadFontsByNames(s), self.postMessage({
            type: "loadFonts",
            id: e,
            success: !0,
            data: { loaded: s }
          });
          break;
        }
        case "getAvailableFonts": {
          const s = await ae.instance.getAvaiableFonts();
          self.postMessage({
            type: "getAvailableFonts",
            id: e,
            success: !0,
            data: { fonts: s }
          });
          break;
        }
        default:
          throw new Error(`Unknown message type: ${t}`);
      }
    } catch (s) {
      self.postMessage({
        type: t,
        id: e,
        success: !1,
        error: s instanceof Error ? s.message : String(s)
      });
    }
  });
  function dd(n) {
    const t = n.matrixWorld.clone(), e = new w(), r = new we(), s = new w();
    t.decompose(e, r, s);
    const i = n.box.clone();
    i.applyMatrix4(t);
    const { children: a, transferableObjects: o } = gd(n);
    return { data: {
      // Basic properties
      type: "MText",
      position: {
        x: e.x,
        y: e.y,
        z: e.z
      },
      rotation: {
        x: r.x,
        y: r.y,
        z: r.z,
        w: r.w
      },
      scale: {
        x: s.x,
        y: s.y,
        z: s.z
      },
      box: {
        min: {
          x: i.min.x,
          y: i.min.y,
          z: i.min.z
        },
        max: {
          x: i.max.x,
          y: i.max.y,
          z: i.max.z
        }
      },
      // Serialize all child objects as JSON
      children: a
    }, transferableObjects: o };
  }
  function gd(n) {
    const t = [], e = [];
    return n.traverse((r) => {
      if (r instanceof dn || r instanceof Hs) {
        const s = r.geometry, i = r.material;
        if (s instanceof vt) {
          const a = r.matrixWorld.clone(), o = new w(), h = new we(), u = new w();
          a.decompose(o, h, u);
          const l = {};
          s.attributes && Object.keys(s.attributes).forEach((d) => {
            const g = s.attributes[d], b = new Uint8Array(
              g.array.buffer,
              g.array.byteOffset,
              g.array.byteLength
            ).slice().buffer;
            e.push(b), l[d] = {
              arrayBuffer: b,
              byteOffset: 0,
              // Since we copied, offset is 0
              length: g.array.length,
              itemSize: g.itemSize,
              normalized: g.normalized
            };
          });
          let f = null;
          if (s.index) {
            const d = s.index.array, m = new Uint8Array(
              d.buffer,
              d.byteOffset,
              d.byteLength
            ).slice().buffer;
            e.push(m), f = {
              arrayBuffer: m,
              byteOffset: 0,
              length: d.length,
              componentType: d instanceof Uint32Array ? "uint32" : "uint16"
            };
          }
          const c = {
            type: i.type,
            color: i.color ? i.color.getHex() : 16777215,
            transparent: i.transparent,
            opacity: i.opacity
          };
          "side" in i && typeof i.side == "number" && (c.side = i.side), "linewidth" in i && typeof i.linewidth == "number" && (c.linewidth = i.linewidth);
          const p = {
            type: r instanceof dn ? "mesh" : "line",
            position: {
              x: o.x,
              y: o.y,
              z: o.z
            },
            rotation: {
              x: h.x,
              y: h.y,
              z: h.z,
              w: h.w
            },
            scale: {
              x: u.x,
              y: u.y,
              z: u.z
            },
            geometry: {
              attributes: l,
              index: f
            },
            material: c
          };
          t.push(p);
        }
      }
    }), { children: t, transferableObjects: e };
  }
});
export default md();
