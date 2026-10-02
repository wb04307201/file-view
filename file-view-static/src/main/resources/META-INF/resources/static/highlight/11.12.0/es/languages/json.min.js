/*! `json` grammar compiled for Highlight.js 11.12.0 */
var hljsGrammar=(()=>{"use strict";const e={scope:"number",
match:"([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",
relevance:0};return a=>{const n=["true","false","null"],r={scope:"literal",
beginKeywords:n.join(" ")};return{name:"JSON",aliases:["jsonc","json5"],
keywords:{literal:n},contains:[{className:"attr",
begin:/(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0
},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,r,e,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}}})();export default hljsGrammar;