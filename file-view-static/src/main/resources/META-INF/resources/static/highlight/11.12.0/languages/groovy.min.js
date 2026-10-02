/*! `groovy` grammar compiled for Highlight.js 11.12.0 */
(()=>{var e=(()=>{"use strict"
;var e="[0-9](_*[0-9])*",a=`\\.(${e})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",t={
className:"number",variants:[{
begin:`(\\b(${e})((${a})|\\.)?|(${a}))[eE][+-]?(${e})[fFdD]?\\b`},{
begin:`\\b(${e})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`
},{begin:`\\b(${e})[fFdD]\\b`},{
begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${e})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function r(e,a={}){return a.variants=e,a}return e=>{
const a=e.regex,n="[A-Za-z0-9_$]+",i=r([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{
relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",
begin:"@[A-Za-z]+"}]})]),s={className:"regexp",begin:/~?\/[^\/\n]+\//,
contains:[e.BACKSLASH_ESCAPE]},l=t,b=r([{begin:/"""/,end:/"""/},{begin:/'''/,
end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"}),c={
match:[/(class|interface|trait|enum|record|extends|implements)/,/\s+/,e.UNDERSCORE_IDENT_RE],
scope:{1:"keyword",3:"title.class"}};return{name:"Groovy",keywords:{
"variable.language":"this super",literal:"true false null",
type:["byte","short","char","int","long","boolean","float","double","void"],
keyword:["def","as","in","assert","trait","abstract","static","volatile","transient","public","private","protected","synchronized","final","class","interface","enum","if","else","for","while","switch","case","break","default","continue","throw","throws","try","catch","finally","implements","extends","new","import","package","return","instanceof","var"]
},contains:[e.SHEBANG({binary:"groovy",relevance:10}),i,b,s,l,c,{
className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",
begin:n+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,
contains:[i,b,s,l,"self"]},{className:"symbol",
begin:"^[ \t]*"+a.lookahead(n+":"),excludeBegin:!0,end:n+":",relevance:0}],
illegal:/#|<\//}}})();hljs.registerLanguage("groovy",e)})();