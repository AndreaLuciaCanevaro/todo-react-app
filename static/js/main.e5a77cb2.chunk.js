(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,o){t.exports={header:"style_header__7UYv-",todoform:"style_todoform__1zZD0",todoinput:"style_todoinput__92Lrr",todobutton:"style_todobutton__DT-Ik",todoitem:"style_todoitem__vfg-b",todoname:"style_todoname__uuqOr",deletebutton:"style_deletebutton__lEUp_"}},27:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(5),c=o.n(r),l=o(3),d=o(7);function s(){return a.a.createElement("button",{onClick:function(){fetch("https://jsonplaceholder.typicode.com/posts").then(function(t){return t.json()}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},a.a.createElement(d.a,null),"Bring data")}var u=o(8),i=o(6),m=o.n(i),f=o(1),p=o.n(f);function E(t){var e=t.todo,o=t.setTodo,n=t.todoList,r=t.setTodoList;return a.a.createElement("div",{className:p.a.todoform},a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r([].concat(Object(u.a)(n),[{name:e,id:m.a.generate()}])),o(""),console.log(n)}},a.a.createElement("input",{value:e,onChange:function(t){o(t.target.value)},className:p.a.todoinput,placeholder:"Add To Do Item"}),a.a.createElement("button",{type:"submit",className:p.a.todobutton},"Add")))}var _=function(){return a.a.createElement("div",{className:p.a.header},"To Do App")};function v(t){var e=t.todoItem,o=t.todoList,n=t.setTodoList;return a.a.createElement("div",null,a.a.createElement("div",{className:p.a.todoitem},a.a.createElement("h3",{className:p.a.todoname},e.name),a.a.createElement("button",{onClick:function(){n(o.filter(function(t){return t.id!==e.id}))},className:p.a.deletebutton},"Done")))}var b=function(t){var e=t.todoList,o=t.setTodoList;return a.a.createElement("div",null,e.map(function(t){return a.a.createElement(v,{setTodoList:o,key:t.id,todoItem:t,todoList:e})}))};var h=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),o=e[0],r=e[1],c=Object(n.useState)([]),d=Object(l.a)(c,2),u=d[0],i=d[1];return a.a.createElement("div",{className:"App"},a.a.createElement(_,null),a.a.createElement(E,{todo:o,setTodo:r,todoList:u,setTodoList:i}),a.a.createElement(b,{setTodoList:i,todoList:u}),a.a.createElement(s,null))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)))},9:function(t,e,o){t.exports=o(27)}},[[9,2,1]]]);
//# sourceMappingURL=main.e5a77cb2.chunk.js.map