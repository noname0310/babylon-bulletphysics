"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[1958],{

/***/ 72156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FG: () => (/* binding */ ReverseLutFromBitmap),
/* harmony export */   Kq: () => (/* binding */ ApplyLut),
/* harmony export */   ZR: () => (/* binding */ HufUncompress),
/* harmony export */   tb: () => (/* binding */ Wav2Decode)
/* harmony export */ });
/* harmony import */ var _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86700);
/* harmony import */ var _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3687);


/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const NBITS = 16;
const A_OFFSET = 1 << (NBITS - 1);
const MOD_MASK = (1 << NBITS) - 1;
/** @internal */
function ReverseLutFromBitmap(bitmap, lut) {
    let k = 0;
    for (let i = 0; i < _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .USHORT_RANGE */ .Ez; ++i) {
        if (i == 0 || bitmap[i >> 3] & (1 << (i & 7))) {
            lut[k++] = i;
        }
    }
    const n = k - 1;
    while (k < _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .USHORT_RANGE */ .Ez)
        lut[k++] = 0;
    return n;
}
function HufClearDecTable(hdec) {
    for (let i = 0; i < _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECSIZE */ .A_; i++) {
        hdec[i] = {};
        hdec[i].len = 0;
        hdec[i].lit = 0;
        hdec[i].p = null;
    }
}
function GetBits(nBits, c, lc, array, offset) {
    while (lc < nBits) {
        c = (c << 8) | (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint8Array */ .fz)(array, offset);
        lc += 8;
    }
    lc -= nBits;
    return {
        l: (c >> lc) & ((1 << nBits) - 1),
        c,
        lc,
    };
}
function GetChar(c, lc, array, offset) {
    c = (c << 8) | (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint8Array */ .fz)(array, offset);
    lc += 8;
    return {
        c,
        lc,
    };
}
function GetCode(po, rlc, c, lc, array, offset, outBuffer, outBufferOffset, outBufferEndOffset) {
    if (po == rlc) {
        if (lc < 8) {
            const gc = GetChar(c, lc, array, offset);
            c = gc.c;
            lc = gc.lc;
        }
        lc -= 8;
        let cs = c >> lc;
        cs = new Uint8Array([cs])[0];
        if (outBufferOffset.value + cs > outBufferEndOffset) {
            return null;
        }
        const s = outBuffer[outBufferOffset.value - 1];
        while (cs-- > 0) {
            outBuffer[outBufferOffset.value++] = s;
        }
    }
    else if (outBufferOffset.value < outBufferEndOffset) {
        outBuffer[outBufferOffset.value++] = po;
    }
    else {
        return null;
    }
    return { c, lc };
}
const HufTableBuffer = new Array(59);
function HufCanonicalCodeTable(hcode) {
    for (let i = 0; i <= 58; ++i)
        HufTableBuffer[i] = 0;
    for (let i = 0; i < _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_ENCSIZE */ .U0; ++i)
        HufTableBuffer[hcode[i]] += 1;
    let c = 0;
    for (let i = 58; i > 0; --i) {
        const nc = (c + HufTableBuffer[i]) >> 1;
        HufTableBuffer[i] = c;
        c = nc;
    }
    for (let i = 0; i < _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_ENCSIZE */ .U0; ++i) {
        const l = hcode[i];
        if (l > 0)
            hcode[i] = l | (HufTableBuffer[l]++ << 6);
    }
}
function HufUnpackEncTable(array, offset, ni, im, iM, hcode) {
    const p = offset;
    let c = 0;
    let lc = 0;
    for (; im <= iM; im++) {
        if (p.value - offset.value > ni) {
            return;
        }
        let gb = GetBits(6, c, lc, array, p);
        const l = gb.l;
        c = gb.c;
        lc = gb.lc;
        hcode[im] = l;
        if (l == _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .LONG_ZEROCODE_RUN */ .Hh) {
            if (p.value - offset.value > ni) {
                throw new Error("Error in HufUnpackEncTable");
            }
            gb = GetBits(8, c, lc, array, p);
            let zerun = gb.l + _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .SHORTEST_LONG_RUN */ .gn;
            c = gb.c;
            lc = gb.lc;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while (zerun--)
                hcode[im++] = 0;
            im--;
        }
        else if (l >= _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .SHORT_ZEROCODE_RUN */ .LU) {
            let zerun = l - _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .SHORT_ZEROCODE_RUN */ .LU + 2;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while (zerun--)
                hcode[im++] = 0;
            im--;
        }
    }
    HufCanonicalCodeTable(hcode);
}
function HufLength(code) {
    return code & 63;
}
function HufCode(code) {
    return code >> 6;
}
function HufBuildDecTable(hcode, im, iM, hdecod) {
    for (; im <= iM; im++) {
        const c = HufCode(hcode[im]);
        const l = HufLength(hcode[im]);
        if (c >> l) {
            throw new Error("Invalid table entry");
        }
        if (l > _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK) {
            const pl = hdecod[c >> (l - _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK)];
            if (pl.len) {
                throw new Error("Invalid table entry");
            }
            pl.lit++;
            if (pl.p) {
                const p = pl.p;
                pl.p = new Array(pl.lit);
                for (let i = 0; i < pl.lit - 1; ++i) {
                    pl.p[i] = p[i];
                }
            }
            else {
                pl.p = new Array(1);
            }
            pl.p[pl.lit - 1] = im;
        }
        else if (l) {
            let plOffset = 0;
            for (let i = 1 << (_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK - l); i > 0; i--) {
                const pl = hdecod[(c << (_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK - l)) + plOffset];
                if (pl.len || pl.p) {
                    throw new Error("Invalid table entry");
                }
                pl.len = l;
                pl.lit = im;
                plOffset++;
            }
        }
    }
    return true;
}
function HufDecode(encodingTable, decodingTable, array, offset, ni, rlc, no, outBuffer, outOffset) {
    let c = 0;
    let lc = 0;
    const outBufferEndOffset = no;
    const inOffsetEnd = Math.trunc(offset.value + (ni + 7) / 8);
    while (offset.value < inOffsetEnd) {
        let gc = GetChar(c, lc, array, offset);
        c = gc.c;
        lc = gc.lc;
        while (lc >= _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK) {
            const index = (c >> (lc - _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK)) & _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECMASK */ .lR;
            const pl = decodingTable[index];
            if (pl.len) {
                lc -= pl.len;
                const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                if (gCode) {
                    c = gCode.c;
                    lc = gCode.lc;
                }
            }
            else {
                if (!pl.p) {
                    throw new Error("hufDecode issues");
                }
                let j;
                for (j = 0; j < pl.lit; j++) {
                    const l = HufLength(encodingTable[pl.p[j]]);
                    while (lc < l && offset.value < inOffsetEnd) {
                        gc = GetChar(c, lc, array, offset);
                        c = gc.c;
                        lc = gc.lc;
                    }
                    if (lc >= l) {
                        if (HufCode(encodingTable[pl.p[j]]) == ((c >> (lc - l)) & ((1 << l) - 1))) {
                            lc -= l;
                            const gCode = GetCode(pl.p[j], rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                            if (gCode) {
                                c = gCode.c;
                                lc = gCode.lc;
                            }
                            break;
                        }
                    }
                }
                if (j == pl.lit) {
                    throw new Error("HufDecode issues");
                }
            }
        }
    }
    const i = (8 - ni) & 7;
    c >>= i;
    lc -= i;
    while (lc > 0) {
        const pl = decodingTable[(c << (_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECBITS */ .LK - lc)) & _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECMASK */ .lR];
        if (pl.len) {
            lc -= pl.len;
            const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
            if (gCode) {
                c = gCode.c;
                lc = gCode.lc;
            }
        }
        else {
            throw new Error("HufDecode issues");
        }
    }
    return true;
}
/** @internal */
function HufUncompress(array, dataView, offset, nCompressed, outBuffer, nRaw) {
    const outOffset = { value: 0 };
    const initialInOffset = offset.value;
    const im = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint32 */ .PX)(dataView, offset);
    const iM = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint32 */ .PX)(dataView, offset);
    offset.value += 4;
    const nBits = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint32 */ .PX)(dataView, offset);
    offset.value += 4;
    if (im < 0 || im >= _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_ENCSIZE */ .U0 || iM < 0 || iM >= _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_ENCSIZE */ .U0) {
        throw new Error("Wrong HUF_ENCSIZE");
    }
    const freq = new Array(_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_ENCSIZE */ .U0);
    const hdec = new Array(_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .HUF_DECSIZE */ .A_);
    HufClearDecTable(hdec);
    const ni = nCompressed - (offset.value - initialInOffset);
    HufUnpackEncTable(array, offset, ni, im, iM, freq);
    if (nBits > 8 * (nCompressed - (offset.value - initialInOffset))) {
        throw new Error("Wrong hufUncompress");
    }
    HufBuildDecTable(freq, im, iM, hdec);
    HufDecode(freq, hdec, array, offset, nBits, iM, nRaw, outBuffer, outOffset);
}
function UInt16(value) {
    return value & 0xffff;
}
function Int16(value) {
    const ref = UInt16(value);
    return ref > 0x7fff ? ref - 0x10000 : ref;
}
function Wdec14(l, h) {
    const ls = Int16(l);
    const hs = Int16(h);
    const hi = hs;
    const ai = ls + (hi & 1) + (hi >> 1);
    const as = ai;
    const bs = ai - hi;
    return { a: as, b: bs };
}
function Wdec16(l, h) {
    const m = UInt16(l);
    const d = UInt16(h);
    const bb = (m - (d >> 1)) & MOD_MASK;
    const aa = (d + bb - A_OFFSET) & MOD_MASK;
    return { a: aa, b: bb };
}
/** @internal */
function Wav2Decode(buffer, j, nx, ox, ny, oy, mx) {
    const w14 = mx < 1 << 14;
    const n = nx > ny ? ny : nx;
    let p = 1;
    let p2;
    let py;
    while (p <= n)
        p <<= 1;
    p >>= 1;
    p2 = p;
    p >>= 1;
    while (p >= 1) {
        py = 0;
        const ey = py + oy * (ny - p2);
        const oy1 = oy * p;
        const oy2 = oy * p2;
        const ox1 = ox * p;
        const ox2 = ox * p2;
        let i00, i01, i10, i11;
        for (; py <= ey; py += oy2) {
            let px = py;
            const ex = py + ox * (nx - p2);
            for (; px <= ex; px += ox2) {
                const p01 = px + ox1;
                const p10 = px + oy1;
                const p11 = p10 + ox1;
                if (w14) {
                    let result = Wdec14(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec14(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec14(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec14(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                }
                else {
                    let result = Wdec16(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec16(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec16(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec16(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                }
            }
            if (nx & p) {
                const p10 = px + oy1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p10 + j]);
                }
                else {
                    result = Wdec16(buffer[px + j], buffer[p10 + j]);
                }
                i00 = result.a;
                buffer[p10 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        if (ny & p) {
            let px = py;
            const ex = py + ox * (nx - p2);
            for (; px <= ex; px += ox2) {
                const p01 = px + ox1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p01 + j]);
                }
                else {
                    result = Wdec16(buffer[px + j], buffer[p01 + j]);
                }
                i00 = result.a;
                buffer[p01 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        p2 = p;
        p >>= 1;
    }
    return py;
}
/** @internal */
function ApplyLut(lut, data, nData) {
    for (let i = 0; i < nData; ++i) {
        data[i] = lut[data[i]];
    }
}
//# sourceMappingURL=exrLoader.compression.huf.js.map

/***/ }),

/***/ 52093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S4: () => (/* binding */ UncompressRAW),
/* harmony export */   VE: () => (/* binding */ UncompressZIP),
/* harmony export */   _k: () => (/* binding */ UncompressPXR),
/* harmony export */   r: () => (/* binding */ UncompressRLE),
/* harmony export */   tg: () => (/* binding */ UncompressPIZ)
/* harmony export */ });
/* harmony import */ var _exrLoader_compression_huf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72156);
/* harmony import */ var _exrLoader_compression_rle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64942);
/* harmony import */ var _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86700);
/* harmony import */ var _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3687);




/**
 * No compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressRAW(decoder) {
    return new DataView(decoder.array.buffer, decoder.offset.value, decoder.size);
}
/**
 * RLE compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressRLE(decoder) {
    const compressed = decoder.viewer.buffer.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = new Uint8Array((0,_exrLoader_compression_rle_js__WEBPACK_IMPORTED_MODULE_1__/* .DecodeRunLength */ ._)(compressed));
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .Predictor */ .XE)(rawBuffer);
    (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .InterleaveScalar */ .KA)(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
/**
 * Zip compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressZIP(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .Predictor */ .XE)(rawBuffer);
    (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .InterleaveScalar */ .KA)(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
/**
 * PXR compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressPXR(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const sz = decoder.lines * decoder.channels * decoder.width;
    const tmpBuffer = decoder.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
    let tmpBufferEnd = 0;
    let writePtr = 0;
    const ptr = new Array(4);
    for (let y = 0; y < decoder.lines; y++) {
        for (let c = 0; c < decoder.channels; c++) {
            let pixel = 0;
            switch (decoder.type) {
                case 1:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    tmpBufferEnd = ptr[1] + decoder.width;
                    for (let j = 0; j < decoder.width; ++j) {
                        const diff = (rawBuffer[ptr[0]++] << 8) | rawBuffer[ptr[1]++];
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
                case 2:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    ptr[2] = ptr[1] + decoder.width;
                    tmpBufferEnd = ptr[2] + decoder.width;
                    for (let j = 0; j < decoder.width; ++j) {
                        const diff = (rawBuffer[ptr[0]++] << 24) | (rawBuffer[ptr[1]++] << 16) | (rawBuffer[ptr[2]++] << 8);
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
            }
        }
    }
    return new DataView(tmpBuffer.buffer);
}
/**
 * PIZ compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressPIZ(decoder) {
    const inDataView = decoder.viewer;
    const inOffset = { value: decoder.offset.value };
    const outBuffer = new Uint16Array(decoder.width * decoder.scanlineBlockSize * (decoder.channels * decoder.type));
    const bitmap = new Uint8Array(_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .BITMAP_SIZE */ .cQ);
    // Setup channel info
    let outBufferEnd = 0;
    const pizChannelData = new Array(decoder.channels);
    for (let i = 0; i < decoder.channels; i++) {
        pizChannelData[i] = {};
        pizChannelData[i]["start"] = outBufferEnd;
        pizChannelData[i]["end"] = pizChannelData[i]["start"];
        pizChannelData[i]["nx"] = decoder.width;
        pizChannelData[i]["ny"] = decoder.lines;
        pizChannelData[i]["size"] = decoder.type;
        outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
    }
    // Read range compression data
    const minNonZero = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .ParseUint16 */ .Jn)(inDataView, inOffset);
    const maxNonZero = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .ParseUint16 */ .Jn)(inDataView, inOffset);
    if (maxNonZero >= _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .BITMAP_SIZE */ .cQ) {
        throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
    }
    if (minNonZero <= maxNonZero) {
        for (let i = 0; i < maxNonZero - minNonZero + 1; i++) {
            bitmap[i + minNonZero] = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .ParseUint8 */ ._S)(inDataView, inOffset);
        }
    }
    // Reverse LUT
    const lut = new Uint16Array(_exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .USHORT_RANGE */ .Ez);
    const maxValue = (0,_exrLoader_compression_huf_js__WEBPACK_IMPORTED_MODULE_0__/* .ReverseLutFromBitmap */ .FG)(bitmap, lut);
    const length = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_2__/* .ParseUint32 */ .PX)(inDataView, inOffset);
    // Huffman decoding
    (0,_exrLoader_compression_huf_js__WEBPACK_IMPORTED_MODULE_0__/* .HufUncompress */ .ZR)(decoder.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
    // Wavelet decoding
    for (let i = 0; i < decoder.channels; ++i) {
        const cd = pizChannelData[i];
        for (let j = 0; j < pizChannelData[i].size; ++j) {
            (0,_exrLoader_compression_huf_js__WEBPACK_IMPORTED_MODULE_0__/* .Wav2Decode */ .tb)(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
        }
    }
    // Expand the pixel data to their original range
    (0,_exrLoader_compression_huf_js__WEBPACK_IMPORTED_MODULE_0__/* .ApplyLut */ .Kq)(lut, outBuffer, outBufferEnd);
    // Rearrange the pixel data into the format expected by the caller.
    let tmpOffset = 0;
    const tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
    for (let y = 0; y < decoder.lines; y++) {
        for (let c = 0; c < decoder.channels; c++) {
            const cd = pizChannelData[c];
            const n = cd.nx * cd.size;
            const cp = new Uint8Array(outBuffer.buffer, cd.end * _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .INT16_SIZE */ .JH, n * _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .INT16_SIZE */ .JH);
            tmpBuffer.set(cp, tmpOffset);
            tmpOffset += n * _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .INT16_SIZE */ .JH;
            cd.end += n;
        }
    }
    return new DataView(tmpBuffer.buffer);
}
//# sourceMappingURL=exrLoader.compression.js.map

/***/ }),

/***/ 64942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ DecodeRunLength)
/* harmony export */ });
/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/** @internal */
function DecodeRunLength(source) {
    let size = source.byteLength;
    const out = new Array();
    let p = 0;
    const reader = new DataView(source);
    while (size > 0) {
        const l = reader.getInt8(p++);
        if (l < 0) {
            const count = -l;
            size -= count + 1;
            for (let i = 0; i < count; i++) {
                out.push(reader.getUint8(p++));
            }
        }
        else {
            const count = l;
            size -= 2;
            const value = reader.getUint8(p++);
            for (let i = 0; i < count + 1; i++) {
                out.push(value);
            }
        }
    }
    return out;
}
//# sourceMappingURL=exrLoader.compression.rle.js.map

/***/ }),

/***/ 9629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EXROutputType),
/* harmony export */   u: () => (/* binding */ ExrLoaderGlobalConfiguration)
/* harmony export */ });
var EXROutputType;
(function (EXROutputType) {
    EXROutputType[EXROutputType["Float"] = 0] = "Float";
    EXROutputType[EXROutputType["HalfFloat"] = 1] = "HalfFloat";
})(EXROutputType || (EXROutputType = {}));
/**
 * Class used to store configuration of the exr loader
 */
class ExrLoaderGlobalConfiguration {
}
/**
 * Defines the default output type to use (Half float by default)
 */
ExrLoaderGlobalConfiguration.DefaultOutputType = EXROutputType.HalfFloat;
/**
 * Url to use to load the fflate library (for zip decompression)
 */
ExrLoaderGlobalConfiguration.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
//# sourceMappingURL=exrLoader.configuration.js.map

/***/ }),

/***/ 86700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ff: () => (/* binding */ ParseFloat32),
/* harmony export */   Jn: () => (/* binding */ ParseUint16),
/* harmony export */   KA: () => (/* binding */ InterleaveScalar),
/* harmony export */   LD: () => (/* binding */ ParseFloat16),
/* harmony export */   PX: () => (/* binding */ ParseUint32),
/* harmony export */   Sn: () => (/* binding */ DecodeFloat32),
/* harmony export */   T$: () => (/* binding */ ParseNullTerminatedString),
/* harmony export */   XE: () => (/* binding */ Predictor),
/* harmony export */   _S: () => (/* binding */ ParseUint8),
/* harmony export */   cL: () => (/* binding */ ParseInt32),
/* harmony export */   fz: () => (/* binding */ ParseUint8Array),
/* harmony export */   he: () => (/* binding */ CompressionCodes),
/* harmony export */   tB: () => (/* binding */ ParseInt64),
/* harmony export */   zX: () => (/* binding */ ParseValue)
/* harmony export */ });
/* harmony import */ var _Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84867);
/* harmony import */ var _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3687);


/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
var CompressionCodes;
(function (CompressionCodes) {
    CompressionCodes[CompressionCodes["NO_COMPRESSION"] = 0] = "NO_COMPRESSION";
    CompressionCodes[CompressionCodes["RLE_COMPRESSION"] = 1] = "RLE_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIPS_COMPRESSION"] = 2] = "ZIPS_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIP_COMPRESSION"] = 3] = "ZIP_COMPRESSION";
    CompressionCodes[CompressionCodes["PIZ_COMPRESSION"] = 4] = "PIZ_COMPRESSION";
    CompressionCodes[CompressionCodes["PXR24_COMPRESSION"] = 5] = "PXR24_COMPRESSION";
})(CompressionCodes || (CompressionCodes = {}));
var LineOrders;
(function (LineOrders) {
    LineOrders[LineOrders["INCREASING_Y"] = 0] = "INCREASING_Y";
    LineOrders[LineOrders["DECREASING_Y"] = 1] = "DECREASING_Y";
})(LineOrders || (LineOrders = {}));
const _tables = _GenerateTables();
// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf
function _GenerateTables() {
    // float32 to float16 helpers
    const buffer = new ArrayBuffer(4);
    const floatView = new Float32Array(buffer);
    const uint32View = new Uint32Array(buffer);
    const baseTable = new Uint32Array(512);
    const shiftTable = new Uint32Array(512);
    for (let i = 0; i < 256; ++i) {
        const e = i - 127;
        // very small number (0, -0)
        if (e < -27) {
            baseTable[i] = 0x0000;
            baseTable[i | 0x100] = 0x8000;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
            // small number (denorm)
        }
        else if (e < -14) {
            baseTable[i] = 0x0400 >> (-e - 14);
            baseTable[i | 0x100] = (0x0400 >> (-e - 14)) | 0x8000;
            shiftTable[i] = -e - 1;
            shiftTable[i | 0x100] = -e - 1;
            // normal number
        }
        else if (e <= 15) {
            baseTable[i] = (e + 15) << 10;
            baseTable[i | 0x100] = ((e + 15) << 10) | 0x8000;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
            // large number (Infinity, -Infinity)
        }
        else if (e < 128) {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
            // stay (NaN, Infinity, -Infinity)
        }
        else {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
        }
    }
    // float16 to float32 helpers
    const mantissaTable = new Uint32Array(2048);
    const exponentTable = new Uint32Array(64);
    const offsetTable = new Uint32Array(64);
    for (let i = 1; i < 1024; ++i) {
        let m = i << 13; // zero pad mantissa bits
        let e = 0; // zero exponent
        // normalized
        while ((m & 0x00800000) === 0) {
            m <<= 1;
            e -= 0x00800000; // decrement exponent
        }
        m &= ~0x00800000; // clear leading 1 bit
        e += 0x38800000; // adjust bias
        mantissaTable[i] = m | e;
    }
    for (let i = 1024; i < 2048; ++i) {
        mantissaTable[i] = 0x38000000 + ((i - 1024) << 13);
    }
    for (let i = 1; i < 31; ++i) {
        exponentTable[i] = i << 23;
    }
    exponentTable[31] = 0x47800000;
    exponentTable[32] = 0x80000000;
    for (let i = 33; i < 63; ++i) {
        exponentTable[i] = 0x80000000 + ((i - 32) << 23);
    }
    exponentTable[63] = 0xc7800000;
    for (let i = 1; i < 64; ++i) {
        if (i !== 32) {
            offsetTable[i] = 1024;
        }
    }
    return {
        floatView: floatView,
        uint32View: uint32View,
        baseTable: baseTable,
        shiftTable: shiftTable,
        mantissaTable: mantissaTable,
        exponentTable: exponentTable,
        offsetTable: offsetTable,
    };
}
/**
 * Parse a null terminated string from the buffer
 * @param buffer buffer to read from
 * @param offset current offset in the buffer
 * @returns a string
 */
function ParseNullTerminatedString(buffer, offset) {
    const uintBuffer = new Uint8Array(buffer);
    let endOffset = 0;
    while (uintBuffer[offset.value + endOffset] != 0) {
        endOffset += 1;
    }
    const stringValue = new TextDecoder().decode(uintBuffer.slice(offset.value, offset.value + endOffset));
    offset.value = offset.value + endOffset + 1;
    return stringValue;
}
/**
 * Parse an int32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an int32
 */
function ParseInt32(dataView, offset) {
    const value = dataView.getInt32(offset.value, true);
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .INT32_SIZE */ .b7;
    return value;
}
/**
 * Parse an uint32 from the buffer
 * @param dataView data view to read from
 * @param offset offset in the data view
 * @returns an uint32
 */
function ParseUint32(dataView, offset) {
    const value = dataView.getUint32(offset.value, true);
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .INT32_SIZE */ .b7;
    return value;
}
/**
 * Parse an uint8 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an uint8
 */
function ParseUint8(dataView, offset) {
    const value = dataView.getUint8(offset.value);
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .INT8_SIZE */ .aN;
    return value;
}
/**
 * Parse an uint16 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an uint16
 */
function ParseUint16(dataView, offset) {
    const value = dataView.getUint16(offset.value, true);
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .INT16_SIZE */ .JH;
    return value;
}
/**
 * Parse an uint8 from an array buffer
 * @param array array buffer
 * @param offset current offset in the data view
 * @returns an uint16
 */
function ParseUint8Array(array, offset) {
    const value = array[offset.value];
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .INT8_SIZE */ .aN;
    return value;
}
/**
 * Parse an int64 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an int64
 */
function ParseInt64(dataView, offset) {
    let int;
    if ("getBigInt64" in DataView.prototype) {
        int = Number(dataView.getBigInt64(offset.value, true));
    }
    else {
        int = dataView.getUint32(offset.value + 4, true) + Number(dataView.getUint32(offset.value, true) << 32);
    }
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .ULONG_SIZE */ .Kl;
    return int;
}
/**
 * Parse a float32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float32
 */
function ParseFloat32(dataView, offset) {
    const value = dataView.getFloat32(offset.value, true);
    offset.value += _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .FLOAT32_SIZE */ .Y3;
    return value;
}
/**
 * Parse a float16 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float16
 */
function ParseFloat16(dataView, offset) {
    return DecodeFloat16(ParseUint16(dataView, offset));
}
function DecodeFloat16(binary) {
    const exponent = (binary & 0x7c00) >> 10;
    const fraction = binary & 0x03ff;
    return ((binary >> 15 ? -1 : 1) *
        (exponent ? (exponent === 0x1f ? (fraction ? NaN : Infinity) : Math.pow(2, exponent - 15) * (1 + fraction / 0x400)) : 6.103515625e-5 * (fraction / 0x400)));
}
function ToHalfFloat(value) {
    if (Math.abs(value) > 65504) {
        throw new Error("Value out of range.Consider using float instead of half-float.");
    }
    value = (0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_0__.Clamp)(value, -65504, 65504);
    _tables.floatView[0] = value;
    const f = _tables.uint32View[0];
    const e = (f >> 23) & 0x1ff;
    return _tables.baseTable[e] + ((f & 0x007fffff) >> _tables.shiftTable[e]);
}
/**
 * Decode a float32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float32
 */
function DecodeFloat32(dataView, offset) {
    return ToHalfFloat(ParseFloat32(dataView, offset));
}
function ParseFixedLengthString(buffer, offset, size) {
    const stringValue = new TextDecoder().decode(new Uint8Array(buffer).slice(offset.value, offset.value + size));
    offset.value = offset.value + size;
    return stringValue;
}
function ParseRational(dataView, offset) {
    const x = ParseInt32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [x, y];
}
function ParseTimecode(dataView, offset) {
    const x = ParseUint32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [x, y];
}
function ParseV2f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    return [x, y];
}
function ParseV3f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    const z = ParseFloat32(dataView, offset);
    return [x, y, z];
}
function ParseChlist(dataView, offset, size) {
    const startOffset = offset.value;
    const channels = [];
    while (offset.value < startOffset + size - 1) {
        const name = ParseNullTerminatedString(dataView.buffer, offset);
        const pixelType = ParseInt32(dataView, offset);
        const pLinear = ParseUint8(dataView, offset);
        offset.value += 3; // reserved, three chars
        const xSampling = ParseInt32(dataView, offset);
        const ySampling = ParseInt32(dataView, offset);
        channels.push({
            name: name,
            pixelType: pixelType,
            pLinear: pLinear,
            xSampling: xSampling,
            ySampling: ySampling,
        });
    }
    offset.value += 1;
    return channels;
}
function ParseChromaticities(dataView, offset) {
    const redX = ParseFloat32(dataView, offset);
    const redY = ParseFloat32(dataView, offset);
    const greenX = ParseFloat32(dataView, offset);
    const greenY = ParseFloat32(dataView, offset);
    const blueX = ParseFloat32(dataView, offset);
    const blueY = ParseFloat32(dataView, offset);
    const whiteX = ParseFloat32(dataView, offset);
    const whiteY = ParseFloat32(dataView, offset);
    return { redX: redX, redY: redY, greenX: greenX, greenY: greenY, blueX: blueX, blueY: blueY, whiteX: whiteX, whiteY: whiteY };
}
function ParseCompression(dataView, offset) {
    return ParseUint8(dataView, offset);
}
function ParseBox2i(dataView, offset) {
    const xMin = ParseInt32(dataView, offset);
    const yMin = ParseInt32(dataView, offset);
    const xMax = ParseInt32(dataView, offset);
    const yMax = ParseInt32(dataView, offset);
    return { xMin: xMin, yMin: yMin, xMax: xMax, yMax: yMax };
}
function ParseLineOrder(dataView, offset) {
    const lineOrder = ParseUint8(dataView, offset);
    return LineOrders[lineOrder];
}
/**
 * Parse a value from the data view
 * @param dataView defines the data view to read from
 * @param offset defines the current offset in the data view
 * @param type defines the type of the value to read
 * @param size defines the size of the value to read
 * @returns the parsed value
 */
function ParseValue(dataView, offset, type, size) {
    switch (type) {
        case "string":
        case "stringvector":
        case "iccProfile":
            return ParseFixedLengthString(dataView.buffer, offset, size);
        case "chlist":
            return ParseChlist(dataView, offset, size);
        case "chromaticities":
            return ParseChromaticities(dataView, offset);
        case "compression":
            return ParseCompression(dataView, offset);
        case "box2i":
            return ParseBox2i(dataView, offset);
        case "lineOrder":
            return ParseLineOrder(dataView, offset);
        case "float":
            return ParseFloat32(dataView, offset);
        case "v2f":
            return ParseV2f(dataView, offset);
        case "v3f":
            return ParseV3f(dataView, offset);
        case "int":
            return ParseInt32(dataView, offset);
        case "rational":
            return ParseRational(dataView, offset);
        case "timecode":
            return ParseTimecode(dataView, offset);
        case "preview":
            offset.value += size;
            return "skipped";
        default:
            offset.value += size;
            return undefined;
    }
}
/**
 * Revert the endianness of the data
 * @param source defines the source
 */
function Predictor(source) {
    for (let t = 1; t < source.length; t++) {
        const d = source[t - 1] + source[t] - 128;
        source[t] = d;
    }
}
/**
 * Interleave pixels
 * @param source defines the data source
 * @param out defines the output
 */
function InterleaveScalar(source, out) {
    let t1 = 0;
    let t2 = Math.floor((source.length + 1) / 2);
    let s = 0;
    const stop = source.length - 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (s > stop) {
            break;
        }
        out[s++] = source[t1++];
        if (s > stop) {
            break;
        }
        out[s++] = source[t2++];
    }
}
//# sourceMappingURL=exrLoader.core.js.map

/***/ }),

/***/ 50863:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CreateDecoderAsync),
/* harmony export */   u: () => (/* binding */ ScanData)
/* harmony export */ });
/* harmony import */ var _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86700);
/* harmony import */ var _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52093);
/* harmony import */ var _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3687);
/* harmony import */ var _Misc_tools_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(998);
/* harmony import */ var _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9629);






/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/**
 * Create a decoder for the exr file
 * @param header header of the exr file
 * @param dataView dataview of the exr file
 * @param offset current offset
 * @param outputType expected output type (float or half float)
 * @returns a promise that resolves with the decoder
 */
async function CreateDecoderAsync(header, dataView, offset, outputType) {
    const decoder = {
        size: 0,
        viewer: dataView,
        array: new Uint8Array(dataView.buffer),
        offset: offset,
        width: header.dataWindow.xMax - header.dataWindow.xMin + 1,
        height: header.dataWindow.yMax - header.dataWindow.yMin + 1,
        channels: header.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: false,
        textureType: 0,
    };
    switch (header.compression) {
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.NO_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressRAW */ .S4;
            break;
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.RLE_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressRLE */ .r;
            break;
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.ZIPS_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressZIP */ .VE;
            await _Misc_tools_js__WEBPACK_IMPORTED_MODULE_3__/* .Tools */ .S0.LoadScriptAsync(_exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .ExrLoaderGlobalConfiguration */ .u.FFLATEUrl);
            break;
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.ZIP_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressZIP */ .VE;
            await _Misc_tools_js__WEBPACK_IMPORTED_MODULE_3__/* .Tools */ .S0.LoadScriptAsync(_exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .ExrLoaderGlobalConfiguration */ .u.FFLATEUrl);
            break;
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.PIZ_COMPRESSION:
            decoder.lines = 32;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressPIZ */ .tg;
            break;
        case _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he.PXR24_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = _exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressPXR */ ._k;
            await _Misc_tools_js__WEBPACK_IMPORTED_MODULE_3__/* .Tools */ .S0.LoadScriptAsync(_exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .ExrLoaderGlobalConfiguration */ .u.FFLATEUrl);
            break;
        default:
            throw new Error(_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .CompressionCodes */ .he[header.compression] + " is unsupported");
    }
    decoder.scanlineBlockSize = decoder.lines;
    const channels = {};
    for (const channel of header.channels) {
        switch (channel.name) {
            case "Y":
            case "R":
            case "G":
            case "B":
            case "A":
                channels[channel.name] = true;
                decoder.type = channel.pixelType;
        }
    }
    // RGB images will be converted to RGBA format, preventing software emulation in select devices.
    let fillAlpha = false;
    if (channels.R && channels.G && channels.B) {
        fillAlpha = !channels.A;
        decoder.outputChannels = 4;
        decoder.decodeChannels = { R: 0, G: 1, B: 2, A: 3 };
    }
    else if (channels.Y) {
        decoder.outputChannels = 1;
        decoder.decodeChannels = { Y: 0 };
    }
    else {
        throw new Error("EXRLoader.parse: file contains unsupported data channels.");
    }
    if (decoder.type === 1) {
        // half
        switch (outputType) {
            case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.Float:
                decoder.getter = _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseFloat16 */ .LD;
                decoder.inputSize = _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .INT16_SIZE */ .JH;
                break;
            case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.HalfFloat:
                decoder.getter = _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint16 */ .Jn;
                decoder.inputSize = _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .INT16_SIZE */ .JH;
                break;
        }
    }
    else if (decoder.type === 2) {
        // float
        switch (outputType) {
            case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.Float:
                decoder.getter = _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseFloat32 */ .Ff;
                decoder.inputSize = _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .FLOAT32_SIZE */ .Y3;
                break;
            case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.HalfFloat:
                decoder.getter = _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .DecodeFloat32 */ .Sn;
                decoder.inputSize = _exrLoader_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .FLOAT32_SIZE */ .Y3;
        }
    }
    else {
        throw new Error("Unsupported pixelType " + decoder.type + " for " + header.compression);
    }
    decoder.blockCount = decoder.height / decoder.scanlineBlockSize;
    for (let i = 0; i < decoder.blockCount; i++) {
        (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseInt64 */ .tB)(dataView, offset); // scanlineOffset
    }
    // we should be passed the scanline offset table, ready to start reading pixel data.
    const size = decoder.width * decoder.height * decoder.outputChannels;
    switch (outputType) {
        case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.Float:
            decoder.byteArray = new Float32Array(size);
            decoder.textureType = 1;
            // Fill initially with 1s for the alpha value if the texture is not RGBA, RGB values will be overwritten
            if (fillAlpha) {
                decoder.byteArray.fill(1, 0, size);
            }
            break;
        case _exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .EXROutputType */ .V.HalfFloat:
            decoder.byteArray = new Uint16Array(size);
            decoder.textureType = 2;
            if (fillAlpha) {
                decoder.byteArray.fill(0x3c00, 0, size); // Uint16Array holds half float data, 0x3C00 is 1
            }
            break;
        default:
            throw new Error("Unsupported type: " + outputType);
    }
    let byteOffset = 0;
    for (const channel of header.channels) {
        if (decoder.decodeChannels[channel.name] !== undefined) {
            decoder.channelLineOffsets[channel.name] = byteOffset * decoder.width;
        }
        byteOffset += channel.pixelType * 2;
    }
    decoder.bytesPerLine = decoder.width * byteOffset;
    decoder.outLineWidth = decoder.width * decoder.outputChannels;
    if (header.lineOrder === "INCREASING_Y") {
        decoder.scanOrder = (y) => y;
    }
    else {
        decoder.scanOrder = (y) => decoder.height - 1 - y;
    }
    if (decoder.outputChannels == 4) {
        decoder.format = 5;
        decoder.linearSpace = true;
    }
    else {
        decoder.format = 6;
        decoder.linearSpace = false;
    }
    return decoder;
}
/**
 * Scan the data of the exr file
 * @param decoder decoder to use
 * @param header header of the exr file
 * @param dataView dataview of the exr file
 * @param offset current offset
 */
function ScanData(decoder, header, dataView, offset) {
    const tmpOffset = { value: 0 };
    for (let scanlineBlockIdx = 0; scanlineBlockIdx < decoder.height / decoder.scanlineBlockSize; scanlineBlockIdx++) {
        const line = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseInt32 */ .cL)(dataView, offset) - header.dataWindow.yMin; // line_no
        decoder.size = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_0__/* .ParseUint32 */ .PX)(dataView, offset); // data_len
        decoder.lines = line + decoder.scanlineBlockSize > decoder.height ? decoder.height - line : decoder.scanlineBlockSize;
        const isCompressed = decoder.size < decoder.lines * decoder.bytesPerLine;
        const viewer = isCompressed && decoder.uncompress ? decoder.uncompress(decoder) : (0,_exrLoader_compression_js__WEBPACK_IMPORTED_MODULE_1__/* .UncompressRAW */ .S4)(decoder);
        offset.value += decoder.size;
        for (let line_y = 0; line_y < decoder.scanlineBlockSize; line_y++) {
            const scan_y = scanlineBlockIdx * decoder.scanlineBlockSize;
            const true_y = line_y + decoder.scanOrder(scan_y);
            if (true_y >= decoder.height) {
                continue;
            }
            const lineOffset = line_y * decoder.bytesPerLine;
            const outLineOffset = (decoder.height - 1 - true_y) * decoder.outLineWidth;
            for (let channelID = 0; channelID < decoder.channels; channelID++) {
                const name = header.channels[channelID].name;
                const lOff = decoder.channelLineOffsets[name];
                const cOff = decoder.decodeChannels[name];
                if (cOff === undefined) {
                    continue;
                }
                tmpOffset.value = lineOffset + lOff;
                for (let x = 0; x < decoder.width; x++) {
                    const outIndex = outLineOffset + x * decoder.outputChannels + cOff;
                    if (decoder.byteArray) {
                        decoder.byteArray[outIndex] = decoder.getter(viewer, tmpOffset);
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=exrLoader.decoder.js.map

/***/ }),

/***/ 98078:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ GetExrHeader)
/* harmony export */ });
/* harmony import */ var _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51137);
/* harmony import */ var _exrLoader_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86700);
/* eslint-disable @typescript-eslint/naming-convention */


/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const EXR_MAGIC = 20000630;
/**
 * Gets the EXR header
 * @param dataView defines the data view to read from
 * @param offset defines the offset to start reading from
 * @returns the header
 */
function GetExrHeader(dataView, offset) {
    if (dataView.getUint32(0, true) != EXR_MAGIC) {
        throw new Error("Incorrect OpenEXR format");
    }
    const version = dataView.getUint8(4);
    const specData = dataView.getUint8(5); // fullMask
    const spec = {
        singleTile: !!(specData & 2),
        longName: !!(specData & 4),
        deepFormat: !!(specData & 8),
        multiPart: !!(specData & 16),
    };
    offset.value = 8;
    const headerData = {};
    let keepReading = true;
    while (keepReading) {
        const attributeName = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_1__/* .ParseNullTerminatedString */ .T$)(dataView.buffer, offset);
        if (!attributeName) {
            keepReading = false;
        }
        else {
            const attributeType = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_1__/* .ParseNullTerminatedString */ .T$)(dataView.buffer, offset);
            const attributeSize = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_1__/* .ParseUint32 */ .PX)(dataView, offset);
            const attributeValue = (0,_exrLoader_core_js__WEBPACK_IMPORTED_MODULE_1__/* .ParseValue */ .zX)(dataView, offset, attributeType, attributeSize);
            if (attributeValue === undefined) {
                _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Warn(`Unknown header attribute type ${attributeType}'.`);
            }
            else {
                headerData[attributeName] = attributeValue;
            }
        }
    }
    if ((specData & ~0x04) != 0) {
        throw new Error("Unsupported file format");
    }
    return { version: version, spec: spec, ...headerData };
}
//# sourceMappingURL=exrLoader.header.js.map

/***/ }),

/***/ 3687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ HUF_DECSIZE),
/* harmony export */   Ez: () => (/* binding */ USHORT_RANGE),
/* harmony export */   Hh: () => (/* binding */ LONG_ZEROCODE_RUN),
/* harmony export */   JH: () => (/* binding */ INT16_SIZE),
/* harmony export */   Kl: () => (/* binding */ ULONG_SIZE),
/* harmony export */   LK: () => (/* binding */ HUF_DECBITS),
/* harmony export */   LU: () => (/* binding */ SHORT_ZEROCODE_RUN),
/* harmony export */   U0: () => (/* binding */ HUF_ENCSIZE),
/* harmony export */   Y3: () => (/* binding */ FLOAT32_SIZE),
/* harmony export */   aN: () => (/* binding */ INT8_SIZE),
/* harmony export */   b7: () => (/* binding */ INT32_SIZE),
/* harmony export */   cQ: () => (/* binding */ BITMAP_SIZE),
/* harmony export */   gn: () => (/* binding */ SHORTEST_LONG_RUN),
/* harmony export */   lR: () => (/* binding */ HUF_DECMASK)
/* harmony export */ });
/* unused harmony export HUF_ENCBITS */
const INT32_SIZE = 4;
const FLOAT32_SIZE = 4;
const INT8_SIZE = 1;
const INT16_SIZE = 2;
const ULONG_SIZE = 8;
const USHORT_RANGE = 1 << 16;
const BITMAP_SIZE = USHORT_RANGE >> 3;
const HUF_ENCBITS = 16;
const HUF_DECBITS = 14;
const HUF_ENCSIZE = (1 << HUF_ENCBITS) + 1;
const HUF_DECSIZE = 1 << HUF_DECBITS;
const HUF_DECMASK = HUF_DECSIZE - 1;
const SHORT_ZEROCODE_RUN = 59;
const LONG_ZEROCODE_RUN = 63;
const SHORTEST_LONG_RUN = 2 + LONG_ZEROCODE_RUN - SHORT_ZEROCODE_RUN;
//# sourceMappingURL=exrLoader.interfaces.js.map

/***/ }),

/***/ 51958:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ExrTextureLoader: () => (/* binding */ _ExrTextureLoader)
/* harmony export */ });
/* harmony import */ var _EXR_exrLoader_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var _EXR_exrLoader_decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50863);
/* harmony import */ var _EXR_exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9629);



/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/**
 * Loader for .exr file format
 * #4RN0VF#151: PIZ compression
 * #4RN0VF#146: ZIP compression
 * #4RN0VF#149: RLE compression
 * #4RN0VF#150: PXR24 compression
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _ExrTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param _data contains the texture data
     * @param _texture defines the BabylonJS internal texture
     * @param _createPolynomials will be true if polynomials have been requested
     * @param _onLoad defines the callback to trigger once the texture is ready
     * @param _onError defines the callback to trigger in case of error
     * Cube texture are not supported by .exr files
     */
    loadCubeData(_data, _texture, _createPolynomials, _onLoad, _onError) {
        // eslint-disable-next-line no-throw-literal
        throw ".exr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    async loadData(data, texture, callback) {
        const dataView = new DataView(data.buffer);
        const offset = { value: 0 };
        const header = (0,_EXR_exrLoader_header_js__WEBPACK_IMPORTED_MODULE_0__/* .GetExrHeader */ .V)(dataView, offset);
        const decoder = await (0,_EXR_exrLoader_decoder_js__WEBPACK_IMPORTED_MODULE_1__/* .CreateDecoderAsync */ .d)(header, dataView, offset, _EXR_exrLoader_configuration_js__WEBPACK_IMPORTED_MODULE_2__/* .ExrLoaderGlobalConfiguration */ .u.DefaultOutputType);
        (0,_EXR_exrLoader_decoder_js__WEBPACK_IMPORTED_MODULE_1__/* .ScanData */ .u)(decoder, header, dataView, offset);
        // Updating texture
        const width = header.dataWindow.xMax - header.dataWindow.xMin + 1;
        const height = header.dataWindow.yMax - header.dataWindow.yMin + 1;
        callback(width, height, texture.generateMipMaps, false, () => {
            const engine = texture.getEngine();
            texture.format = header.format;
            texture.type = decoder.textureType;
            texture.invertY = false;
            texture._gammaSpace = !header.linearSpace;
            if (decoder.byteArray) {
                engine._uploadDataToTextureDirectly(texture, decoder.byteArray, 0, 0, undefined, true);
            }
        });
    }
}
//# sourceMappingURL=exrTextureLoader.js.map

/***/ })

}]);