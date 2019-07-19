(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(21),t(14)),l=t(2),i=function(e){var n=e.name,t=e.number,a=e.deletePerson;return r.a.createElement("div",null,n," ",t," ",r.a.createElement("button",{onClick:a},"Delete"))},m=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return r.a.createElement("div",null,n.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())||1!==e.number.toLowerCase().indexOf(t.toLowerCase())}).map(function(e){return r.a.createElement(i,{key:e.id,name:e.name,number:e.number,deletePerson:function(){return a(e.id,e.name)}})}))},d=function(e){var n=e.addName,t=e.handleNameChange,a=e.handleNumberChange,o=e.newName,u=e.newNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:a,value:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.handleFilterChange,t=e.newFilter;return r.a.createElement("div",null,"Filter shown with ",r.a.createElement("input",{onChange:n,value:t}))},f=function(e){var n=e.message,t={color:e.success?"green":"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:r.a.createElement("div",{style:t},n)},b=t(3),h=t.n(b),w=function(){return h.a.get("/persons").then(function(e){return e.data})},v=function(e){return h.a.post("/persons",e).then(function(e){return e.data})},p=function(e,n){return h.a.put("".concat("/persons","/").concat(e),n).then(function(e){return e.data})},E=function(e){return h.a.delete("".concat("/persons","/").concat(e)).then(function(e){return e.data})},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),b=i[0],h=i[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),O=C[0],j=C[1],N=Object(a.useState)(""),L=Object(l.a)(N,2),y=L[0],S=L[1],k=Object(a.useState)(null),F=Object(l.a)(k,2),P=F[0],D=F[1],x=Object(a.useState)(!0),A=Object(l.a)(x,2),B=A[0],I=A[1];Object(a.useEffect)(function(){w().then(function(e){o(e)})},[]);var J=function(e,n){D(e),I(n),setTimeout(function(){D(null)},5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:P,success:B}),r.a.createElement(s,{handleFilterChange:function(e){S(e.target.value)},newFilter:y}),r.a.createElement("h3",null,"Add a New"),r.a.createElement(d,{addName:function(e){if(e.preventDefault(),t.map(function(e){return e.name.toLowerCase()}).includes(b.toLowerCase())){if(window.confirm("".concat(b," is already added to the phonebook, would you like to replace the old number with a new one?"))){var n=t.find(function(e){return e.name.toLowerCase()===b.toLowerCase()});p(n.id,Object(c.a)({},n,{number:O})).then(function(e){o(t.map(function(n){return n.id!==e.id?n:e})),h(""),j(""),J("Updated ".concat(e.name),!0)}).catch(function(e){J("Information of ".concat(b," has already been removed from the server."),!1),o(t.filter(function(e){return e.name.toLowerCase()!==b.toLowerCase()}))})}}else v({name:b,number:O}).then(function(e){o(t.concat(e)),h(""),j(""),J("Added ".concat(e.name),!0)})},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){j(e.target.value)},newName:b,newNumber:O}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{persons:t,filter:y,deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&E(e).then(function(a){o(t.filter(function(n){return n.id!==e})),J("Deleted ".concat(n),!0)})}}))};u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85543e15.chunk.js.map