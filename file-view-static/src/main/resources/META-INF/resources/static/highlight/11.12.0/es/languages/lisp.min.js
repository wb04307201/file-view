/*! `lisp` grammar compiled for Highlight.js 11.12.0 */
var hljsGrammar=(()=>{"use strict";return e=>{
const n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={
className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{
begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{
begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{
begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},r=e.inherit(e.QUOTE_STRING_MODE,{
illegal:null}),b=e.COMMENT(";","$",{relevance:0}),t={scope:"variable",
match:/\*[^\s()*]+\*/},g={className:"symbol",begin:"[:&]"+n},c={begin:n,
relevance:0},m={begin:a},d={contains:[l,r,t,g,{begin:"\\(",end:"\\)",
contains:["self",s,r,l,c]},c],variants:[{begin:"['`]\\(",end:"\\)"},{
begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},o={
variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},v={begin:"\\(\\s*",
end:"\\)"},u={endsWithParent:!0,relevance:0};return v.contains=[{
className:"name",variants:[{begin:n,relevance:0},{begin:a}]
},u],u.contains=[d,o,v,s,l,r,b,t,g,m,c],{name:"Lisp",illegal:/\S/,
contains:[l,e.SHEBANG(),s,r,b,d,o,v,c]}}})();export default hljsGrammar;