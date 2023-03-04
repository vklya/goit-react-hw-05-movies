"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[893],{426:function(t,e,n){n.d(e,{Z:function(){return u}});var r="button_button__zpxkc",a=n(184),u=function(t){var e=t.onClick,n=t.text;return(0,a.jsx)("button",{className:r,onClick:e,children:n})}},961:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(184),a=function(t){return(0,r.jsx)("p",{children:t})}},174:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(791),a=n(87),u=n(689),c=n(602),i=n(184),s=function(t){var e=t.items,n=(0,u.TH)(),r=e.map((function(t){var e=t.id,r=t.poster_path,u=t.title,s=t.release_date.slice(0,4);return(0,i.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:n},children:(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{loading:"lazy",src:r?"https://image.tmdb.org/t/p/w500".concat(r):c,alt:u}),(0,i.jsxs)("h2",{children:[u," (",s,")"]})]})},e)}));return(0,i.jsx)("ul",{children:r})},o=(0,r.memo)(s)},893:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),s=n(791),o=n(390),f=n(596),p=n(961),l=n(91),d=n(61),m={},v=n(184);function h(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,u.Z)(n,2),a=r[0],c=r[1];return(0,v.jsxs)("form",{className:m.form,onSubmit:function(t){t.preventDefault(),""!==a.trim()?(e({query:a}),c("")):f.Am.warning("Enter the title of the film to continue searching")},children:[(0,v.jsx)("input",{className:m.input,type:"text",placeholder:"Search movies",value:a,onChange:function(t){var e=t.target;c(e.value)}}),(0,v.jsx)("button",{type:"submit",className:m.button,children:(0,v.jsx)(d.FKI,{className:m.icon})})]})}var x=n(174),g=n(426),b=function(){var t=(0,s.useState)(""),e=(0,u.Z)(t,2),n=e[0],c=e[1],d=(0,s.useState)([]),m=(0,u.Z)(d,2),b=m[0],Z=m[1],w=(0,s.useState)(!1),j=(0,u.Z)(w,2),k=j[0],y=j[1],_=(0,s.useState)(""),S=(0,u.Z)(_,2),C=S[0],N=S[1],q=(0,s.useState)(1),z=(0,u.Z)(q,2),A=z[0],E=z[1];(0,s.useEffect)((function(){if(n){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,(0,o.z1)(n,A);case 4:e=t.sent,0===(a=e.results).length&&f.Am.error("Sorry, there are no movies matching your search query. Please try again."),Z((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(a))})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),N(t.t0.message);case 13:return t.prev=13,y(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}}),[n,A,N,y,Z]);return(0,v.jsxs)("main",{children:[(0,v.jsx)(h,{onSubmit:function(t){var e=t.query;c(e),Z([]),E(1)}}),C&&(0,v.jsx)(p.Z,{text:C}),k?(0,v.jsx)(l.Z,{}):(0,v.jsx)(x.Z,{items:b}),!(b.length<12)&&(0,v.jsx)(g.Z,{onClick:function(){E((function(t){return t+1}))},text:"Load more"})]})}},390:function(t,e,n){n.d(e,{Hg:function(){return i},Jh:function(){return f},_r:function(){return p},s_:function(){return o},z1:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ccd8d539caa8bbfd0843a00859c1dd02"}}),i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a,i,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r=s.length>2&&void 0!==s[2]&&s[2],t.next=4,c.get("/search/movie",{params:{query:e,page:n,include_adult:r}});case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,c.get("/movie/".concat(e,"/reviews"),{params:{page:n}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},602:function(t,e,n){t.exports=n.p+"static/media/defaultPoster.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=893.19b28a56.chunk.js.map