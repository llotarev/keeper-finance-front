(this["webpackJsonpkeeper-finance"]=this["webpackJsonpkeeper-finance"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n(22),s=n.n(r),i=(n(49),n(50),n(24)),o=n(5),j="/",l={root:"/finance"},b=n(12),u=(n(51),n(25)),d=n(17),O=n(7),f=(n(52),n(86)),h=n(3),m=n(8);n(53);var x=function(e){var t="";return Object.entries(e).map((function(e){var n=Object(b.a)(e,2),c=n[0],a=n[1];"undefined"!==c&&a&&(t+=" ".concat(c))})),t.trim()},p=(n(54),function(e){var t,n=e.className,a=e.variant,r=e.color,s=Object(m.a)(e,["className","variant","color"]);return Object(c.jsx)("button",Object(O.a)({className:x((t={},Object(h.a)(t,String(n),!0),Object(h.a)(t,"button",!0),Object(h.a)(t,"button--"+a,Boolean(a)),Object(h.a)(t,"button-color--"+r,Boolean(r)),t))},s))}),v=(n(55),n(56),n(57),n(58),p),N=function(e){e.children;var t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(d.b)((function(){return{transform:"translateX(116px)"}})),o=Object(b.a)(i,2),j=o[0],l=o[1],h=Object(d.b)((function(){return{transform:"translateX(0px)"}})),m=Object(b.a)(h,2),x=m[0],p=m[1],N=Object(u.a)((function(e){e.down;var t=Object(b.a)(e.movement,1)[0],n=[Math.floor(t),116],c=n[0],a=n[1];c>=-a&&c<=0&&(l({transform:"translateX(".concat(c+a,"px)")}),p({transform:"translateX(".concat(c,"px)")}))}));return Object(c.jsx)("ul",{className:"list",children:Object(c.jsxs)("li",Object(O.a)(Object(O.a)({className:"list__item"},N()),{},{children:[Object(c.jsxs)(d.a.div,{className:"list__item__container",style:x,children:[Object(c.jsxs)("aside",{onClick:function(){return s((function(e){return!e}))},children:[Object(c.jsx)("span",{className:"name",children:"Header"}),Object(c.jsx)("span",{className:"date",children:"01.01.2020"})]}),Object(c.jsxs)("aside",{style:{color:"rgb(var(--color-danger)"},children:[Object(c.jsx)("span",{className:"amount",children:"100"}),Object(c.jsx)("span",{className:"status",children:Object(c.jsx)(f.b,{})})]})]}),r&&Object(c.jsxs)("div",{className:"list__item__more",children:[Object(c.jsx)("header",{children:"Header"}),Object(c.jsx)("p",{children:"lorem ipsum dolor sit amet consectetuer adipiscing elit"})]}),Object(c.jsxs)(d.a.div,{className:"list__item__controller",style:j,children:[Object(c.jsx)(v,{variant:"glass",onClick:function(){return alert("Edit")},children:Object(c.jsx)(f.a,{})}),Object(c.jsx)(v,{variant:"glass",color:"danger",onClick:function(){return alert("Trash")},children:Object(c.jsx)(f.c,{})})]})]}))})};function _(){var e=Object(o.e)();Object(a.useEffect)((function(){e.push(l.root)}),[]);var t=Object(d.b)((function(){return{transform:"translateX(0px)"}})),n=Object(b.a)(t,2),r=(n[0],n[1]);Object(u.a)((function(e){var t=e.down,n=Object(b.a)(e.movement,1)[0];n<=0&&t&&r({transform:"translateX(".concat(n,"px)")})}));return Object(c.jsx)("div",{className:"finance",children:Object(c.jsx)(o.a,{path:l.root,children:Object(c.jsx)(N,{})})})}n(63);var g=[{path:l.root,title:""}],k=[].concat(g);function y(){var e=Object(o.f)(),t=Object(a.useState)("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),n=Object(b.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){k.filter((function(t){var n=t.path,c=t.title;n===e.pathname&&s(c)}))}),[e]),Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"header__title",children:Object(c.jsx)("h3",{children:r})})})}function C(){return Object(c.jsx)(i.a,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(o.a,{path:j,children:[Object(c.jsx)(y,{}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(c.jsx)(p,{variant:"link",children:"all"}),Object(c.jsx)(p,{variant:"glass",children:"spending"}),Object(c.jsx)(p,{variant:"link",children:"income"})]}),Object(c.jsx)(_,{})]})})})}var X=n(14),F=n(26),S=(n(16),n(6),n(15),n(41));n.n(S).a.create({baseURL:"http://localhost:4000/api"});var w=Object(F.b)({name:"@financeReducer",initialState:{finance:[]},reducers:{setFinance:function(e,t){var n=t.payload;e.finance=n.finance}}}),B=(w.actions,Object(X.c)({financeReducer:w.reducer})),E=Object(F.a)({reducer:B}),L=n(43),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(c.jsx)(L.a,{store:E,children:Object(c.jsx)(C,{})}),document.getElementById("root")),R()}},[[84,1,2]]]);
//# sourceMappingURL=main.13a54a2d.chunk.js.map