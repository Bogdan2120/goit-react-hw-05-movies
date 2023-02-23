"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[618],{470:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(791),a=t(87),c=t(689),u={},s=t(184),i=function(e){var r=e.items,t=(0,c.TH)(),n=r.map((function(e){var r=e.id,n=e.title,c=e.original_title;return(0,s.jsx)(a.rU,{to:"/movies/".concat(r),className:u.moviesItem,state:{from:t},children:(0,s.jsx)("li",{children:n||c})},r)}));return(0,s.jsx)("ul",{className:u.moviesList,children:n})},o=(0,n.memo)(i)},618:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(87),f=t(686),p=t.n(f),h={search_btn:"moviesSearch_search_btn__A9VcL",search_input:"moviesSearch_search_input__JxYkr"},v=t(184),l=function(e){var r=e.onSubmit,t=(0,i.useState)(""),n=(0,c.Z)(t,2),a=n[0],u=n[1];return(0,v.jsx)("form",{className:h.form,onSubmit:function(e){if(e.preventdefault(),""===a)return p().Notify.failure("Enter text and try again");r(a)},children:(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{htmlFor:"",children:"Search"}),(0,v.jsx)("input",{className:h.search_input,value:a,onChange:function(e){var r=e.target.value;u(r)},name:"search",placeholder:"Search movie",required:!0}),(0,v.jsx)("button",{className:h.search_btn,type:"submit",children:"Search"})]})})},m=(0,i.memo)(l),d=t(470),_=t(323),x="moviesPage_search_block__p0WWI",b=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],u=r[1],f=(0,o.lr)(),h=(0,c.Z)(f,2),l=h[0],b=h[1],g=l.get("search");(0,i.useEffect)((function(){if(g){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.z1)(g);case 3:r=e.sent,u((0,n.Z)(r.results)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.responce,p().Notify.failure("An error occurred"),console.log(t.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g,u]);return(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)(m,{onSubmit:function(e){var r=e.search;b(r)}}),(0,v.jsx)(d.Z,{items:t})]})}},323:function(e,r,t){t.d(r,{XT:function(){return i},fh:function(){return o},oH:function(){return f},z1:function(){return s}});var n=t(861),a=t(757),c=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"633bd9c8c9bc68a8c4a40449237d5fcd"}}),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"",e.next=3,u.get("/movie/".concat(r).concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=618.f8992b4c.chunk.js.map