(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-001dfbba"],{"78c1":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const n={id:"content"};function o(e,t,a,o,i,d){const p=Object(r["resolveComponent"])("WaterMark");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createVNode"])(p)])}const i=Object(r["createStaticVNode"])('<p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p><canvas id="canv" width="862" height="472" style="position:absolute;width:862px;height:472px;left:0;top:0;"></canvas>',16),d=[i];function p(e,t,a,n,o,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,d)}a("14d9");var c=a("e33e"),s=a.n(c),m={data(){return{}},mounted(){this.funcGetData(),s.a.load({watermark_txt:"廖铭杰",watermark_alpha:"1",watermark_color:"rgba(0,0,0,0.01)"})},methods:{funcGetData(){const e=document.getElementById("canv"),t=e.getContext("2d"),a=new Image;let r;a.src="./002.jpg",a.onload=function(){t.drawImage(a,0,0),r=t.getImageData(0,0,t.canvas.width,t.canvas.height);const e=[],n=r.data;for(let t=0;t<n.length;t++)n[t]<255&&(e.push({index:t,data:n[t]}),t%4===3&&255!==n[t]&&(n[t]=255),t%4!==3&&n[t]<255&&(n[t]=0));t.putImageData(r,0,0)}}}},l=a("6b0d"),w=a.n(l);const h=w()(m,[["render",p]]);var k=h,f={components:{WaterMark:k},data(){return{}},mounted(){},methods:{}};const u=w()(f,[["render",o]]);t["default"]=u},e33e:function(module,exports){eval(function(e,t,a,r,n,o){if(n=function(e){return(e<62?"":n(parseInt(e/62)))+((e%=62)>35?String.fromCharCode(e+29):e.toString(36))},0=="0".replace(0,n)){while(a--)o[n(a)]=r[a];r=[function(e){return o[e]||e}],n=function(){return"([3-9a-hk-wzA-Z]|1\\w)"},a=1}while(a--)r[a]&&(e=e.replace(new RegExp("\\b"+n(a)+"\\b","g"),r[a]));return e}("(a(1a,O){7(D X==='a'&&X.amd){X([],O())}c 7(D Y==='Z'&&Y.1b){Y.1b=O()}c{1a['u']=O()}}(this,a(){4 u={};4 3={E:'1c',1d:'mask_div_id',1e:\"测试水印\",f:20,g:20,h:0,k:0,m:50,n:50,1g:'微软雅黑',1h:'black',1i:'18px',1j:0.15,o:1k,p:1k,v:15,1l:0,1m:0,1n:1o,P:Q,};4 w=a(d){7(s.z===1&&D s[0]===\"Z\"){4 9=s[0]||{};R(8 in 9){7(9[8]&&3[8]&&9[8]===3[8])1q;c 7(9[8]||9[8]===0)3[8]=9[8]}}4 q=l.F(3.E);q&&q.10&&q.10.1r(q);4 A=l.F(3.1n);4 e=A?A:l.body;4 G=S.1s(e.scrollWidth,e.clientWidth);4 H=S.1s(e.scrollHeight,e.clientHeight);4 11=s[0]||{};4 t=e;4 B=0;4 C=0;7(11.1l||11.1m){7(t){B=t.1t||0;C=t.1u||0;3.f=3.f+C;3.g=3.g+B}}c{7(t){B=t.1t||0;C=t.1u||0}}4 b=l.F(3.E);4 r=1o;7(!b){b=l.1v('1w');b.id=3.E;b.setAttribute('6','pointer-events: 1y !1z; 1A: 1B !1z');7(D b.1C==='a'){r=b.1C({mode:'open'})}c{r=b}4 T=e.children;4 12=S.floor(S.random()*(T.z-1));7(T[12]){e.insertBefore(b,T[12])}c{e.13(b)}}c 7(b.r){r=b.r}3.k=U((G-3.f)/(3.o+3.m));4 14=U((G-3.f-3.o*3.k)/(3.k));3.m=14?3.m:14;4 I;3.h=U((H-3.g)/(3.p+3.n));4 16=U((H-3.g-3.p*3.h)/(3.h));3.n=16?3.n:16;4 J;7(A){I=3.f+3.o*3.k+3.m*(3.k-1);J=3.g+3.p*3.h+3.n*(3.h-1)}c{I=C+3.f+3.o*3.k+3.m*(3.k-1);J=B+3.g+3.p*3.h+3.n*(3.h-1)}4 x;4 y;R(4 i=0;i<3.h;i++){7(A){y=B+3.g+(H-J)/2+(3.n+3.p)*i}c{y=3.g+(H-J)/2+(3.n+3.p)*i}R(4 j=0;j<3.k;j++){7(A){x=C+3.f+(G-I)/2+(3.o+3.m)*j}c{x=3.f+(G-I)/2+(3.o+3.m)*j}4 5=l.1v('1w');4 1D=l.createTextNode(3.1e);5.13(1D);5.id=3.1d+i+j;5.6.webkitTransform=\"K(-\"+3.v+\"L)\";5.6.MozTransform=\"K(-\"+3.v+\"L)\";5.6.msTransform=\"K(-\"+3.v+\"L)\";5.6.OTransform=\"K(-\"+3.v+\"L)\";5.6.transform=\"K(-\"+3.v+\"L)\";5.6.visibility=\"\";5.6.position=\"absolute\";5.6.left=x+'V';5.6.top=y+'V';5.6.overflow=\"hidden\";5.6.zIndex=\"9999999\";5.6.opacity=3.1j;5.6.fontSize=3.1i;5.6.fontFamily=3.1g;5.6.color=3.1h;5.6.textAlign=\"center\";5.6.width=3.o+'V';5.6.height=3.p+'V';5.6.1A=\"1B\";5.6['-ms-user-select']=\"1y\";r.13(5)}}1E 1F=d.P===undefined?3.P:d.P;7(1F){17.1G(e,18);17.1G(l.F('1c').r,18)}};4 1H=a(){7(s.z===1&&D s[0]===\"Z\"){4 9=s[0]||{};R(8 in 9){7(9[8]&&3[8]&&9[8]===3[8])1q;c 7(9[8]||9[8]===0)3[8]=9[8]}}4 q=l.F(3.E);4 1I=q.10;1I.1r(q)};4 M;u.init=a(d){M=d;w(d);N.1J('onload',a(){w(d)});N.1J('resize',a(){w(d)})};u.load=a(d){M=d;w(d)};u.remove=a(){1H()};4 1K=a(W){7((M&&W.z===1)||W.z===1&&W[0].removedNodes.z>=1){w(M)}};1E 19=N.19||N.WebKitMutationObserver||N.MozMutationObserver;4 17=new 19(1K);4 18={'childList':Q,'attributes':Q,'subtree':Q,};return u}));",0,109,"|||defaultSettings|var|mask_div|style|if|key|src|function|otdiv|else|settings|watermark_hook_element|watermark_x|watermark_y|watermark_rows|||watermark_cols|document|watermark_x_space|watermark_y_space|watermark_width|watermark_height|watermark_element|shadowRoot|arguments|parentEle|watermark|watermark_angle|loadMark|||length|watermark_parent_element|page_offsetTop|page_offsetLeft|typeof|watermark_id|getElementById|page_width|page_height|allWatermarkWidth|allWatermarkHeight|rotate|deg|globalSetting|window|factory|monitor|true|for|Math|nodeList|parseInt|px|records|define|module|object|parentNode|setting|index|appendChild|temp_watermark_x_space||temp_watermark_y_space|watermarkDom|option|MutationObserver|root|exports|wm_div_id|watermark_prefix|watermark_txt||watermark_font|watermark_color|watermark_fontsize|watermark_alpha|100|watermark_parent_width|watermark_parent_height|watermark_parent_node|null||continue|removeChild|max|offsetTop|offsetLeft|createElement|div||none|important|display|block|attachShadow|oText|const|minotor|observe|removeMark|_parentElement|addEventListener|callback".split("|"),0,{}))}}]);