(this.webpackJsonphooks_react_js=this.webpackJsonphooks_react_js||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),l=(a(9),a(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(10),a(11);r.a.render(c.a.createElement((function(){var e=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("json/postres.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),a}();return c.a.createElement("div",{className:"container mt-5",align:"center"},c.a.createElement("h4",null,"Lista de Postres"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"ID"),c.a.createElement("th",{scope:"col"},"Nombre"),c.a.createElement("th",{scope:"col"},"Stock"),c.a.createElement("th",{scope:"col"},"Precio"),c.a.createElement("th",{scope:"col"},"Imagen"))),c.a.createElement("tbody",null,e.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.nombre),c.a.createElement("td",null,e.stock),c.a.createElement("td",null,e.precio),c.a.createElement("td",null,c.a.createElement("img",{src:"".concat("","/imagenes/").concat(e.img),alt:e.nombre,width:"30px",className:"img-fluid"})))})))))),c.a.createElement("section",{className:"mt-5 mb-5"},c.a.createElement("div",{align:"center"},"Desarrollado por ",c.a.createElement("a",{href:"http://www.nubecolectiva.com",target:"_blank"},"Nube Colectiva"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(15)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.6dd79e70.chunk.js.map