/*! `leaf` grammar compiled for Highlight.js 11.12.0 */
var hljsGrammar=(()=>{"use strict";return a=>{
const e=/([A-Za-z_][A-Za-z_0-9]*)?/,t={scope:"params",begin:/\(/,
end:/\)(?=\:?)/,endsParent:!0,relevance:7,contains:[{scope:"string",begin:'"',
end:'"'},{scope:"keyword",match:`\\b${a.regex.either("true","false","in")}\\b`
},{scope:"variable",match:/[A-Za-z_][A-Za-z_0-9]*/},{scope:"operator",
match:/\+|\-|\*|\/|\%|\=\=|\=|\!|\>|\<|\&\&|\|\|/}]},n={match:[e,/(?=\()/],
scope:{1:"keyword"},contains:[t]};return t.contains.unshift(n),{name:"Leaf",
contains:[{match:[/#+/,e,/(?=\()/],scope:{1:"punctuation",2:"keyword"},starts:{
contains:[{match:/\:/,scope:"punctuation"}]},contains:[t]},{match:[/#+/,e,/:?/],
scope:{1:"punctuation",2:"keyword",3:"punctuation"}}]}}})()
;export default hljsGrammar;