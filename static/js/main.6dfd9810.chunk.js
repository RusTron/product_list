(this.webpackJsonpreact_pattern=this.webpackJsonpreact_pattern||[]).push([[0],{33:function(e,s,c){},34:function(e,s,c){},36:function(e,s,c){},37:function(e,s,c){},38:function(e,s,c){},39:function(e,s,c){"use strict";c.r(s);var a=c(1),t=(c(0),c(13)),n=c.n(t),l=c(8),r=c(10),i=c(23),o=c(11),j=c(15),d="ADD_PRODUCT";console.log(d);var b={products:[]},p=function(e){return{type:d,payload:e}},m=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,s=arguments.length>1?arguments[1]:void 0;console.log(s);var c=e.products.find((function(e){return e.name===s.payload.name}));if(c){c.amount+=1;var a=c.amount,t=c.price,n=c.sale;c.sum=n?a*t-Math.floor(a/n.kg)*(t*(n.percent/100)):a*t}switch(s.type){case d:return c?Object(o.a)({},e):Object(o.a)(Object(o.a)({},e),{},{products:[].concat(Object(i.a)(e.products),[Object(o.a)(Object(o.a)({},s.payload),{},{amount:1,sum:s.payload.price})])});default:return e}})),h=c(3),u=(c(33),c(34),function(){return Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("li",{className:"App-title",children:Object(a.jsxs)(r.b,{to:"/",exact:!0,activeClassName:"App__active",children:[Object(a.jsx)("span",{children:"Product"}),Object(a.jsx)("span",{className:"App__active--decorator"})]})}),Object(a.jsx)("li",{className:"App-title",children:Object(a.jsxs)(r.b,{to:"/basket",activeClassName:"App__active",children:[Object(a.jsx)("span",{children:"Basket"}),Object(a.jsx)("span",{className:"App__active--decorator"})]})})]})}),O=(c(36),[{name:"banan",price:10,sale:null},{name:"apple",price:8,sale:null},{name:"papaya",price:10,sale:{kg:3,percent:50}}]),x=function(){var e=Object(l.b)(),s=Object(l.c)((function(e){return console.log(e)}));return console.log(s),Object(a.jsx)("div",{className:"products",children:Object(a.jsxs)("div",{className:"list",children:[Object(a.jsx)("div",{className:"list__title",children:"Choose goods!"}),Object(a.jsxs)("div",{className:"list__header",children:[Object(a.jsx)("span",{className:"list__header--number",children:"#"}),Object(a.jsx)("span",{className:"list__header--name",children:"Name"}),Object(a.jsx)("span",{className:"list__header--price",children:"Price"}),Object(a.jsx)("span",{className:"list__header--sale",children:"Sale"}),Object(a.jsx)("span",{className:"list__header--buy",children:"Buy"})]}),Object(a.jsx)("div",{className:"list__body",children:O.map((function(s,c){return Object(a.jsxs)("div",{className:"list__body--row row",children:[Object(a.jsx)("span",{className:"row--number",children:c+1}),Object(a.jsx)("span",{className:"row--name",children:s.name}),Object(a.jsx)("span",{className:"row--price",children:"".concat(s.price,"$")}),Object(a.jsx)("span",{className:"row--sale",children:s.sale?"Each ".concat(s.sale.kg,"kg: -").concat(s.price*(s.sale.percent/100),"$"):""}),Object(a.jsx)("button",{className:s.name,type:"submit",onClick:function(s){return function(s){var c=O.find((function(e){return e.name===s}));console.log(c);var a=p(c);e(a)}(s.target.className)},children:"Add"})]},s.name)}))})]})})},_=(c(37),function(){var e=Object(l.c)((function(e){return e.products}));return console.log(e),Object(a.jsxs)("div",{className:"basket",children:[Object(a.jsx)("div",{className:"basket__title",children:"Choosen Goods"}),Object(a.jsxs)("div",{className:"list",children:[Object(a.jsxs)("div",{className:"list__header",children:[Object(a.jsx)("span",{className:"list__header--number",children:"#"}),Object(a.jsx)("span",{className:"list__header--name",children:"Name"}),Object(a.jsx)("span",{className:"list__header--price",children:"Price"}),Object(a.jsx)("span",{className:"list__header--sale",children:"Amount"}),Object(a.jsx)("span",{className:"list__header--buy",children:"Total"})]}),Object(a.jsx)("div",{className:"list__body",children:e.length?e.map((function(e,s){return Object(a.jsxs)("div",{className:"list__body--row row",children:[Object(a.jsx)("span",{className:"row--number",children:s+1}),Object(a.jsx)("span",{className:"row--name",children:e.name}),Object(a.jsx)("span",{className:"row--price",children:"".concat(e.price,"$")}),Object(a.jsx)("span",{className:"row--sale",children:e.amount}),Object(a.jsx)("span",{className:e.name,children:e.sum})]},e.name)})):Object(a.jsx)("div",{className:"list__empty",children:"No products"})})]}),Object(a.jsx)("div",{className:"basket__footer",children:e.length>1?"You should pay: ".concat(e.reduce((function(e,s){return e.sum+s.sum})),"$"):""})]})});var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/",exact:!0,component:x}),Object(a.jsx)(h.a,{path:"/basket",component:_})]})})]})},v=(c(38),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,n=s.getLCP,l=s.getTTFB;c(e),a(e),t(e),n(e),l(e)}))});n.a.render(Object(a.jsx)(l.a,{store:m,children:Object(a.jsx)(r.a,{children:Object(a.jsx)(N,{})})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.6dfd9810.chunk.js.map