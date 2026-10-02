/*! `freedesktop` grammar compiled for Highlight.js 11.12.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,n={scope:"string",
begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]
},i=["Desktop Entry","Unit","Service","Install","Socket","Mount","Automount","Swap","Path","Timer","Slice","Scope","Manager","connection","ipv4","wifi-security","wifi","ipv6","802-11-wireless-security","802-11-wireless","802-3-ethernet","vpn","Journal","Bridge","Desktop Action\\s+[A-Za-z0-9_-]+"]
;i.sort().reverse();return{name:"FreeDesktop config",
aliases:["desktop","systemd"],case_insensitive:!1,contains:[{scope:"comment",
begin:/#/,end:/$/},{scope:"section",begin:RegExp("^\\[("+i.join("|")+")\\]$")},{
begin:t.concat(/^[A-Za-z0-9_-]+(\[[A-Za-z0-9_@.]+\])?/,t.lookahead(/\s*=/)),
beginScope:"attr",end:/$/,contains:[{scope:"operator",match:/=/},n,{
scope:"literal",
match:/\b(Application|Link|Directory|forking|oneshot|OneShot|true|false|True|False)\b/
},{scope:"variable",match:/%[a-zA-Z]/}]}]}}})()
;hljs.registerLanguage("freedesktop",e)})();