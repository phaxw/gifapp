(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{21:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),r=n(10),c=n.n(r),u=(n(21),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),r(t),c(t)}))}),s=n(2),o=function(t){var e=t.setCategory,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],u=r[1],o=Object(a.useState)(["Search all the GIFs and Stickers","@username + tag to search within a verified channel"]),h=Object(s.a)(o,2),d=h[0],l=(h[1],Object(a.useRef)(null)),f=0,j=d.length;Object(a.useEffect)((function(){var t=setTimeout((function(){c.trim().length>0?e(c):e("")}),500);return function(){return clearTimeout(t)}}),[c,e]);return setInterval((function(){f>=j&&(f=0),l.current.setAttribute("placeholder",d[f]),f++}),2e3),Object(i.jsx)("form",{children:Object(i.jsx)("div",{children:Object(i.jsx)("input",{ref:l,type:"text",value:c,onChange:function(t){u(t.target.value)}})})})},h=n(15),d=n(5),l=n.n(d),f=n(11),j=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,i,a,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=kps4T2oEQ9wtjpq7Dmg4hf6DH0oiQ4uD"),t.next=3,fetch(n);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,r=a.data,c=r.map((function(t){var e,n,i;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.fixed_height.url,height:null===(n=t.images)||void 0===n?void 0:n.fixed_height.height,width:null===(i=t.images)||void 0===i?void 0:i.fixed_height.width}})),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=n(6),b=n(7);n(23);function m(){var t=Object(g.a)(["\n        min-height: ","; \n        min-width:  ",";\n    "]);return m=function(){return t},t}function p(){var t=Object(g.a)(["\n        align-content: center;\n        margin-bottom: 10px;\n        margin-right: 10px;\n        \n    "]);return p=function(){return t},t}var O=b.a.div(p()),v=b.a.img(m(),(function(t){return t.height}),(function(t){return t.width})),x=function(t){t.id;var e=t.title,n=t.url;t.height,t.width;return Object(i.jsx)(O,{className:"card animate__animated animate__fadeIn",children:Object(i.jsx)(v,{src:n,alt:e})})},_=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){j(t).then((function(t){r({data:t,loading:!1})}))}),[t]),i}(e),r=n.data,c=n.loading;return Object(i.jsxs)(i.Fragment,{children:[c&&Object(i.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(i.jsx)("div",{className:"card-grid",children:e?r.map((function(t){return Object(i.jsx)(x,Object(h.a)({},t),t.id)})):Object(i.jsx)("h1",{children:"Nada..."})})]})},w=function(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"title_text",children:"GifExpertApp"}),Object(i.jsx)(o,{setCategory:r}),Object(i.jsx)("hr",{}),Object(i.jsx)(_,{category:n},n)]})};c.a.render(Object(i.jsx)(w,{}),document.getElementById("root")),u()}},[[26,1,2]]]);
//# sourceMappingURL=main.c27bf6e7.chunk.js.map