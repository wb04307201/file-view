/*! `java` grammar compiled for Highlight.js 11.12.0 */
var hljsGrammar=(()=>{"use strict"
;var e="[0-9](_*[0-9])*",a=`\\.(${e})`,s="[0-9a-fA-F](_*[0-9a-fA-F])*",n={
className:"number",variants:[{
begin:`(\\b(${e})((${a})|\\.)?|(${a}))[eE][+-]?(${e})[fFdD]?\\b`},{
begin:`\\b(${e})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`
},{begin:`\\b(${e})[fFdD]\\b`},{
begin:`\\b0[xX]((${s})\\.?|(${s})?\\.(${s}))[pP][+-]?(${e})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${s})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function t(e,a,s){return-1===s?"":e.replace(a,n=>t(e,a,s-1))}
return e=>{
const a=e.regex,s="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",r="(?:(?:\\s*\\[\\s*])+)?",i=s+"<@@@>"+r,l="(?:\\?(?:\\s+(?:extends|super)\\s+"+i+")?|"+i+")",c=t("(?:\\s*<\\s*"+l+"(?:\\s*,\\s*"+l+")*\\s*>)?",/<@@@>/g,2),o={
keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],
literal:["false","true","null"],
type:["char","boolean","long","float","int","byte","short","double"],
built_in:["super","this"]},b={className:"meta",begin:"@"+s,contains:[{
begin:/\(/,end:/\)/,contains:["self"]}]},_={className:"params",begin:/\(/,
end:/\)/,keywords:o,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
;return{name:"Java",aliases:["jsp"],keywords:o,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
className:"string",contains:[e.BACKSLASH_ESCAPE]
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,s],className:{
1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
beginKeywords:"new throw return else yield assert",relevance:0},{
begin:[s,a.concat(c,r,/\s+/),s,r,/\s*/,/=(?!=)/],className:{1:"type",
3:"variable",6:"operator"}},{begin:[/record/,/\s+/,s],className:{1:"keyword",
3:"title.class"},contains:[_,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
begin:[s,a.concat(c,r,/\s+/),s,/\s*(?=\()/],className:{1:"type",
3:"title.function"},keywords:o,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:o,relevance:0,
contains:[b,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,n,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},n,b]}}})()
;export default hljsGrammar;