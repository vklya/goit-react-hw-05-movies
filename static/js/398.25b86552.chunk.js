"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[398],{961:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(184),a=function(e){return(0,n.jsx)("p",{children:e})}},398:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i=t(87),o=t(689),p=t(390),d=t(602),f=t(184),h=function(e){var r=e.movie,t=r.poster_path,n=r.title,a=r.release_date,c=r.overview,s=r.genres,u=r.vote_average;return(0,f.jsxs)("section",{children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):d,alt:n}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[n," ",a&&(0,f.jsxs)("span",{children:["(",a.slice(0,4),")"]})]}),(0,f.jsxs)("p",{children:["User Score: ",10*u,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:c}),(0,f.jsx)("h4",{children:"Genres"}),s&&(0,f.jsx)("p",{children:s.map((function(e){return e.name})).join(", ")})]})]})},v=t(961),l=t(91),x=t(61),m=function(e){var r=e.to;return(0,f.jsxs)(i.rU,{to:r,children:[(0,f.jsx)(x.PjY,{size:"24"}),(0,f.jsx)("p",{children:"Go back"})]})},j=function(){var e,r=(0,u.useState)([]),t=(0,a.Z)(r,2),c=t[0],d=t[1],x=(0,u.useState)(""),j=(0,a.Z)(x,2),w=j[0],g=j[1],b=(0,u.useState)(!1),k=(0,a.Z)(b,2),Z=k[0],_=k[1],y=(0,o.UO)().id,U=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,_(!0),e.next=6,(0,p.s_)(y);case 6:r=e.sent,d(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g(e.t0.message);case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[y,d]),(0,f.jsxs)("main",{children:[(0,f.jsx)(m,{to:U}),Z&&(0,f.jsx)(l.Z,{}),w&&(0,f.jsx)(v.Z,{text:w}),c&&(0,f.jsx)(h,{movie:c}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(o.j3,{})]})}},390:function(e,r,t){t.d(r,{Hg:function(){return u},Jh:function(){return p},_r:function(){return d},s_:function(){return o},z1:function(){return i}});var n=t(861),a=t(757),c=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ccd8d539caa8bbfd0843a00859c1dd02"}}),u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,u,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n=i.length>2&&void 0!==i[2]&&i[2],e.next=4,s.get("/search/movie",{params:{query:r,page:t,include_adult:n}});case 4:return a=e.sent,u=a.data,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,s.get("movie/".concat(r,"/reviews"),{params:{page:t}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},602:function(e,r,t){e.exports=t.p+"static/media/defaultPoster.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=398.25b86552.chunk.js.map