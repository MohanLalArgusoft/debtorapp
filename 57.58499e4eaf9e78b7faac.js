(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"6foE":function(e,t,s){"use strict";s.r(t),s.d(t,"scopeCss",function(){return j});const r="-shadowcsshost",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),n=new RegExp("(-shadowcsscontext"+o,"gim"),l=new RegExp("(-shadowcssslotted"+o,"gim"),a="-shadowcsshost-no-combinator",i=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,u=/:host/gim,d=/::slotted/gim,g=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,x=/([{}])/g,$="%BLOCK%",_=(e,t)=>{const s=b(e);let r=0;return s.escapedString.replace(w,(...e)=>{const o=e[2];let c="",n=e[4],l="";n&&n.startsWith("{%BLOCK%")&&(c=s.blocks[r++],n=n.substring($.length+1),l="{");const a=t({selector:o,content:c});return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`})},b=e=>{const t=e.split(x),s=[],r=[];let o=0,c=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&o--,o>0?c.push(e):(c.length>0&&(r.push(c.join("")),s.push($),c=[]),s.push(e)),"{"===e&&o++}return c.length>0&&(r.push(c.join("")),s.push($)),{escapedString:s.join(""),blocks:r}},S=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let o=0;o<t.length;o++){const c=t[o].trim();if(!c)break;r.push(s(a,c,e[3]))}return r.join(",")}return a+e[3]}),O=(e,t,s)=>e+t.replace(r,"")+s,W=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t,s,r,o)=>_(e,e=>{let o=e.selector,c=e.content;return"@"!==e.selector[0]?o=((e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e))(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(e,...t)=>t[0])),o=e=>{let o=e.trim();if(!o)return"";if(e.indexOf(a)>-1)o=((e,t,s)=>{if(h.lastIndex=0,h.test(e)){const t="."+s;return e.replace(i,(e,s)=>s.replace(/([^:]*)(:*)(.*)/,(e,s,r,o)=>s+t+r+o)).replace(h,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(h,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(o=e[1]+r+e[2]+e[3])}}return o},c=(e=>{const t=[];let s,r=0;return s=(e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{const o=`__ph-${r}__`;return t.push(s),r++,o})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,o)=>{const c=`__ph-${r}__`;return t.push(o),r++,s+c}),{content:s,placeholders:t}})(e);let n,l="",p=0;const u=/( |>|\+|~(?!=))\s*/g;let d=!((e=c.content).indexOf(a)>-1);for(;null!==(n=u.exec(e));){const t=n[1],s=e.slice(p,n.index).trim();d=d||s.indexOf(a)>-1,l+=`${d?o(s):s} ${t} `,p=u.lastIndex}const g=e.substring(p);return d=d||g.indexOf(a)>-1,l+=d?o(g):g,m=c.placeholders,l.replace(/__ph-(\d+)__/g,(e,t)=>m[+t]);var m})(e,t,s).trim():e.trim()).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=E(e.content,t,s,r)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}),j=(e,t,s)=>{const o=t+"-h",i=t+"-s",h=e.match(f)||[];e=e.replace(m,"");const w=[];if(s){const t=e=>{const t=`/*!@___${w.length}___*/`;return w.push({placeholder:t,comment:`/*!@${e.selector}*/`}),e.selector=t+e.selector,e};e=_(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=_(e.content,t),e):e)}const x=((e,t,s,o,i)=>{const h=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(l,(...e)=>{if(e[2]){const t=e[2].trim(),o=s+t+e[3];let c="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;c=t+c}const n=c+o,l=`${c.trimRight()}${o.trim()}`;return n.trim()!==l.trim()&&r.push({orgSelector:n,updatedSelector:`${l}, ${n}`}),o}return a+e[3]}),{selectors:r,cssText:e}})(e=(e=>S(e,n,W))(e=(e=>S(e,c,O))(e=e.replace(g,"-shadowcsscontext").replace(u,r).replace(d,"-shadowcssslotted"))),o);return e=(e=>p.reduce((e,t)=>e.replace(t," "),e))(e=h.cssText),t&&(e=E(e,t,s,o)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}})(e,t,o,i);return e=[x.cssText,...h].join("\n"),s&&w.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),x.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);