(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{21:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(22),l=a.n(s),i=(a(29),a(10)),r=a(20),o=a(8),m=(a(30),a(3)),j=a(24),b=(a(31),a(9)),d=a(2);var u=function(e){var t=e.items,a=e.handleDeleteItem,n=e.filterItemsDate,s=c.a.useState(new Date),l=Object(o.a)(s,2),i=l[0],r=l[1];return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("div",{className:"main__calendar",children:[Object(d.jsx)(j.a,{onChange:function(e){r(e)},value:i,className:"react-calendar",onClickDay:function(){n(i)}}),Object(d.jsx)(b.b,{className:"link",to:"/form",children:Object(d.jsx)("button",{className:"main__button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(d.jsx)("div",{className:"main__list",children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"info",item:e,children:[Object(d.jsxs)("div",{className:"info__container",children:[Object(d.jsx)(b.b,{to:"editeform/".concat(t),children:Object(d.jsx)("button",{className:"info__edit",children:Object(d.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M6 18.2499H1.5C1.30109 18.2499 1.11032 18.1709 0.96967 18.0302C0.829018 17.8896 0.75 17.6988 0.75 17.4999V13.3105C0.75 13.2121 0.769399 13.1145 0.80709 13.0235C0.844781 12.9325 0.900026 12.8499 0.96967 12.7802L12.2197 1.53022C12.3603 1.38956 12.5511 1.31055 12.75 1.31055C12.9489 1.31055 13.1397 1.38956 13.2803 1.53022L17.4697 5.71956C17.6103 5.86021 17.6893 6.05097 17.6893 6.24989C17.6893 6.4488 17.6103 6.63956 17.4697 6.78022L6 18.2499Z",stroke:"#555960",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),Object(d.jsx)("button",{className:"info__del",onClick:function(){a(t)},children:Object(d.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z",fill:"#555960"})})})]}),Object(d.jsx)("p",{className:"info__type",children:e.type}),Object(d.jsx)("h1",{className:"info__title",children:e.name}),Object(d.jsxs)("p",{className:"info__mesto",children:["\u041c\u0435\u0441\u0442\u043e:",e.where]}),Object(d.jsxs)("p",{className:"info__time",children:["\u0414\u0430\u0442\u0430: ",h(e.date)]})]},t.toString())}))})]})},h=function(e){var t=new Date(Date.parse(e));return t.toLocaleString("ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})+", "+t.getFullYear()},f=a(12);a(21);var O=function(e){var t=e.onAddItem,a=Object(m.f)(),n=c.a.useState({name:"",type:"",where:"",date:""}),s=Object(o.a)(n,2),l=s[0],r=s[1];function j(e){var t=e.target,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},l),{},Object(f.a)({},a,n)))}return Object(d.jsxs)("div",{className:"form__content",children:[Object(d.jsx)("h1",{className:"form__title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(l)},children:[Object(d.jsxs)("label",{htmlFor:"name-event",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(d.jsx)("input",{id:"name-event",type:"text",name:"name",className:"form__imput",value:l.name||"",onChange:j})]}),Object(d.jsxs)("label",{htmlFor:"name-event",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u0422\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(d.jsxs)("select",{className:"form__select",name:"type",value:l.type||" ",onChange:j,children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"\u041f\u0440\u0430\u0437\u0434\u043d\u0435\u0447\u043d\u044b\u0435 \u0434\u043d\u0438",children:"\u041f\u0440\u0430\u0437\u0434\u043d\u0435\u0447\u043d\u044b\u0435 \u0434\u043d\u0438"}),Object(d.jsx)("option",{value:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",children:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"}),Object(d.jsx)("option",{value:"\u041f\u043e\u043c\u0435\u0442\u043a\u0438/\u0414\u0440\u0443\u0433\u043e\u0435",children:"\u041f\u043e\u043c\u0435\u0442\u043a\u0438/\u0414\u0440\u0443\u0433\u043e\u0435"})]})]}),Object(d.jsxs)("label",{htmlFor:"where-go",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u041a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?"}),Object(d.jsx)("input",{id:"where-go",type:"text",name:"where",className:"form__imput",value:l.where||"",onChange:j})]}),Object(d.jsxs)("label",{htmlFor:"localdate",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e?"}),Object(d.jsx)("input",{type:"datetime-local",id:"localdate",name:"date",className:"form__imput",value:l.date||"",onChange:j})]}),Object(d.jsxs)("div",{className:"form__button-container",children:[Object(d.jsx)("button",{className:"form__button",onClick:function(){a.push("/")},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})};var x=function(e){var t=c.a.useState({name:"",type:"",where:"",date:""}),a=Object(o.a)(t,2),s=a[0],l=a[1],r=Object(m.f)(),j=Object(m.g)().index,b=e.items.find((function(e,t){return t.toString()===j}));function u(e){var t=e.target,a=t.name,n=t.value;l(Object(i.a)(Object(i.a)({},s),{},Object(f.a)({},a,n)))}return Object(n.useEffect)((function(){void 0!==b&&l(b)}),[]),Object(d.jsxs)("div",{className:"form__content",children:[Object(d.jsx)("h1",{className:"form__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"}),Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onEditeItem(s,j)},children:[Object(d.jsxs)("label",{htmlFor:"name-event",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(d.jsx)("input",{id:"name-event",type:"text",name:"name",className:"form__imput",value:s.name||"",onChange:u})]}),Object(d.jsxs)("label",{htmlFor:"name-event",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u0422\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(d.jsxs)("select",{className:"form__select",name:"type",value:s.type||" ",onChange:u,children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"\u041f\u0440\u0430\u0437\u0434\u043d\u0435\u0447\u043d\u044b\u0435 \u0434\u043d\u0438",children:"\u041f\u0440\u0430\u0437\u0434\u043d\u0435\u0447\u043d\u044b\u0435 \u0434\u043d\u0438"}),Object(d.jsx)("option",{value:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",children:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"}),Object(d.jsx)("option",{value:"\u041f\u043e\u043c\u0435\u0442\u043a\u0438/\u0414\u0440\u0443\u0433\u043e\u0435",children:"\u041f\u043e\u043c\u0435\u0442\u043a\u0438/\u0414\u0440\u0443\u0433\u043e\u0435"})]})]}),Object(d.jsxs)("label",{htmlFor:"where-go",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u041a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?"}),Object(d.jsx)("input",{id:"where-go",type:"text",name:"where",className:"form__imput",value:s.where||"",onChange:u})]}),Object(d.jsxs)("label",{htmlFor:"localdate",className:"form__lable",children:[Object(d.jsx)("span",{className:"form__lable-text",children:"\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e?"}),Object(d.jsx)("input",{type:"datetime-local",id:"localdate",name:"date",className:"form__imput",value:s.date||"",onChange:u})]}),Object(d.jsxs)("div",{className:"form__button-container",children:[Object(d.jsx)("button",{className:"form__button",onClick:function(){r.push("/")},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})},_=function(e){var t=new Date(Date.parse(e));return t.toLocaleString("ru",{month:"long",day:"numeric"})+" "+t.getFullYear()},p=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=c.a.useState([]),l=Object(o.a)(s,2),j=l[0],b=l[1],h=c.a.useState(!1),f=Object(o.a)(h,2),p=f[0],v=f[1],N=Object(m.f)();return c.a.useEffect((function(){var e=localStorage.getItem("items");n(JSON.parse(e))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{exact:!0,path:"/TodoList",children:Object(d.jsx)(u,{items:p?j:a,handleDeleteItem:function(e){var t=a.filter((function(t,a){return a!==e}));n(t),localStorage.setItem("items",JSON.stringify(t))},filterItemsDate:function(e){var t=a.filter((function(t){return _(t.date)===_(e)}));v(!0),b(t)}})}),Object(d.jsx)(m.a,{path:"/form",children:Object(d.jsx)(O,{onAddItem:function(e){n([].concat(Object(r.a)(a),[e])),localStorage.setItem("items",JSON.stringify([].concat(Object(r.a)(a),[e]))),N.push("/")}})}),Object(d.jsx)(m.a,{path:"/editeform/:index",children:Object(d.jsx)(x,{items:a,onEditeItem:function(e,t){var c=a.map((function(a,n){return n.toString()===t&&(a=Object(i.a)({},e)),a}));n(c),localStorage.setItem("items",JSON.stringify(c)),N.push("/")}})})]})})};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(p,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.524a2763.chunk.js.map