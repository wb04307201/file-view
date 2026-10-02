/*! `json` grammar compiled for Highlight.js 11.12.0 */
(()=>{var e=(()=>{"use strict";const e={scope:"number",
match:"([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",
relevance:0};return n=>{const a=["true","false","null"],s={scope:"literal",
beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc","json5"],
keywords:{literal:a},contains:[{className:"attr",
begin:/(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0
},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,s,e,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}}})();hljs.registerLanguage("json",e)})();