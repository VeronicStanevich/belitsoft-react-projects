(this.webpackJsonpfootball=this.webpackJsonpfootball||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o=n(1),u=n(13),s=n.n(u),d=n(0),l=n.n(d),f=n(5),j=n(9),v=n(15);!function(e){e.ADD="favorite/add",e.REMOVE="favorite/remove"}(r||(r={})),function(e){e.SET="teams"}(a||(a={})),function(e){e.ADD="favorite-player/add",e.REMOVE="favorite-player/remove"}(c||(c={})),function(e){e.SET_SELECTED_TEAM="selected-team"}(i||(i={}));var m=Object(j.c)({favoriteTeams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.ADD:return e.find((function(e){return e.id===t.value.id}))?e:[].concat(Object(v.a)(e),[t.value]);case r.REMOVE:return e.filter((function(e){return e.id!==t.value}));default:return e}},favoritePlayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.ADD:var n=t.value;return e.find((function(e){return e.id===n.id}))?e:[].concat(Object(v.a)(e),[t.value]);case c.REMOVE:var r=t.value;return e.filter((function(e){return e.id!==r}));default:return e}},teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET:return t.value;default:return e}},selectedTeamPlayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_SELECTED_TEAM:return t.value;default:return e}}}),b=n(23),h=Object(j.a)(b.a,(function(e){return function(t){return function(n){var r=t(n);return localStorage.setItem("store-state",JSON.stringify(e.getState())),r}}})),O=JSON.parse(localStorage.getItem("store-state")||"{}")||{},p=Object(j.d)(m,O,h),x=n(10),_=n(3);function g(){return function(){var e=new Headers;return e.append("X-Auth-Token","f113f557ce2a428e8a46dc9e659212f8"),fetch("https://api.football-data.org/v2/teams",{method:"GET",headers:e}).then((function(e){return e.json()}))}().then((function(e){return e.teams})).catch(alert)}var y=function(){var e=Object(f.c)((function(e){return e.favoriteTeams})),t=Object(f.c)((function(e){return e.teams})),n=Object(f.b)();return l.a.useEffect((function(){n((function(e){return g().then((function(t){e({type:"teams",value:t})}))}))}),[]),Object(o.jsx)("div",{className:"teams",children:t.map((function(t){return Object(o.jsxs)("div",{className:"team__card ".concat(e.find((function(e){return e.id===t.id}))?"team__card_favorite":""),children:[Object(o.jsx)("button",{className:"team__add_to_favourite",onClick:function(e){e.stopPropagation(),n({type:"favorite/add",value:{id:t.id,name:t.name}})},children:"add to favorite"}),Object(o.jsx)("button",{className:"team__remove_from_favourite",onClick:function(e){e.stopPropagation(),n({type:"favorite/remove",value:t.id})},children:"remove from favorite"}),Object(o.jsxs)(x.b,{className:"team__link",to:"/squad/".concat(t.id),children:[Object(o.jsx)("img",{className:"team__logo",alt:t.name,src:t.crestUrl}),Object(o.jsx)("p",{children:t.name})]},t.id)]},t.id)}))})},E=(n(34),function(){var e=Object(f.c)((function(e){return e.favoriteTeams})),t=Object(f.c)((function(e){return e.favoritePlayers}));return Object(o.jsx)(o.Fragment,{children:e.map((function(e){var n=t.filter((function(t){return t.teamId===e.id}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)("li",{children:e.player},e.id)}))})]},e.id)}))})});function T(e){return function(t){return function(e){var t=new Headers;return t.append("X-Auth-Token","f113f557ce2a428e8a46dc9e659212f8"),fetch("https://api.football-data.org/v2/teams/".concat(e),{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(e){return e.squad}))}(String(e)).then((function(e){t({type:"selected-team",value:e})}))}}var N=function(e){var t=Object(_.f)(),n=Object(f.c)((function(e){return e.selectedTeamPlayers})),r=Object(f.c)((function(e){return e.favoritePlayers})),a=Object(f.b)();return l.a.useEffect((function(){return a(T(Number(t.id))),function(){a({type:"selected-team",value:[]})}}),[]),Object(o.jsx)(o.Fragment,{children:n.map((function(e){return Object(o.jsxs)("div",{className:"".concat(r.find((function(t){return t.id===e.id}))?"team__card_favorite":""),children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("button",{onClick:function(){a({type:"favorite-player/add",value:{id:e.id,player:e.name,teamId:t.id}})},children:"add player"}),Object(o.jsx)("button",{onClick:function(){a({type:"favorite-player/remove",value:e.id})},children:"remove player"})]},e.id)}))})},S=function(){return Object(o.jsx)(f.a,{store:p,children:Object(o.jsxs)(x.a,{basename:"/VeronicStanevich/belitsoft-react-projects/",children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"router-navigation-list",children:[Object(o.jsx)("li",{className:"router-navigation-list__item",children:Object(o.jsx)(x.b,{to:"/",children:"Teams"})}),Object(o.jsx)("li",{className:"router-navigation-list__item",children:Object(o.jsx)(x.b,{to:"/user",children:"User"})})]})}),Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{path:"/squad/:id",children:Object(o.jsx)(N,{})}),Object(o.jsx)(_.a,{path:"/user",children:Object(o.jsx)(E,{})}),Object(o.jsx)(_.a,{path:"/",children:Object(o.jsx)(y,{})})]})]})})};s.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.30325501.chunk.js.map