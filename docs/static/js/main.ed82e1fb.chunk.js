(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),u=(a(14),a(1)),o=a(8),l=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("h2",null,"Add Category"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){console.log(e.target.value),l(e.target.value),console.log("HandleInputChange llamado")}}))},s=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__rubberBand"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},m=a(2),p=a.n(m),d=a(5),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=RF7N4yJiAvcqG2DmGcPfk9lk1fJ45KW8"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://montesanto.graciadev.com/api/login/login?user=admin&pass=123456",e.next=3,fetch("http://montesanto.graciadev.com/api/login/login?user=admin&pass=123456");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;g();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__rubberBand"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"}," Loading ..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},h=function(e){var t=e.defaultCategories,a=void 0===t?[]:t,c=Object(n.useState)(a),i=Object(u.a)(c,2),o=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(l,{setCategories:s,categories:o}),r.a.createElement("hr",null),r.a.createElement("ol",null,o.map((function(e){return r.a.createElement(v,{key:e,category:e})}))))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ed82e1fb.chunk.js.map