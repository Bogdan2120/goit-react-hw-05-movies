"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[363],{363:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),i=r.n(c),o=r(689),u=r(791),s=r(742),p=r(630),f=r(404),v=r(184);t.default=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],d=(0,o.UO)().id,h=(0,u.useState)(!1),l=(0,a.Z)(h,2),g=l[0],m=l[1];(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,p.oH)(d,"/credits");case 4:t=e.sent,c(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.responce,console.log(r.data.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);return function(e){var t=e.cast;if(t){if(0===t.length)return(0,v.jsx)("p",{children:"Nobody auditioned for this movie \ud83d\ude10"});var r=t.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{alt:"actors",width:"120px",src:r?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(r):f}),(0,v.jsxs)("p",{children:["Name: ",n]}),(0,v.jsxs)("p",{children:["Character: ",a]})]},t)}));return(0,v.jsxs)("ul",{children:[g?s.Loading.standard("Loading..."):s.Loading.remove(),r]})}}(r)}},630:function(e,t,r){r.d(t,{XT:function(){return u},fh:function(){return s},oH:function(){return p},z1:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"633bd9c8c9bc68a8c4a40449237d5fcd"}}),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,i.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,o,u,s,p,f,v,d,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,a=n.original_title,o=void 0===a?"n/a":a,u=n.poster_path,s=n.vote_average,p=n.overview,f=n.release_date,v=void 0===f?"n/a":f,d=n.genres,h={original_title:o,poster_path:u?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(u):null,vote_average:s,overview:p,release_date:v.slice(0,4),genres:d.map((function(e){return e.name})).join(", ")},e.abrupt("return",h);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",e.next=3,i.get("/movie/".concat(t).concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},404:function(e,t,r){e.exports=r.p+"static/media/no_photo.c68589f4dc97c93d9bab.jpg"}}]);
//# sourceMappingURL=363.6c76ae00.chunk.js.map