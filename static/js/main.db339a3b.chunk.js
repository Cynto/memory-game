(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{13:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var c=t(1),s=t.n(c),n=t(7),a=t.n(n),o=(t(13),t(4)),b=t(2),j=t(0);var l=function(e){return Object(j.jsxs)("div",{className:"scoreboard",children:[Object(j.jsxs)("h4",{children:["Score: ",e.score]}),Object(j.jsx)("span",{children:"|"}),Object(j.jsxs)("h4",{children:["Best Score: ",e.bestScore]})]})};var u=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Symbol Memory Game"}),Object(j.jsx)(l,{bestScore:e.bestScore,score:e.score})]})},i=t(8),O=t.n(i);var d=function(e){var r=e.currentSymbolArray,t=e.setCurrentArray,c=e.usedSymbolArray,s=e.setUsedArray,n=e.setGameOver,a=e.setTotalSymbolArray;return Object(j.jsx)("div",{className:"symbol-container",children:r.map((function(e){return Object(j.jsx)("div",{className:"symbol-item",onClick:function(){t((function(e){for(var r,t=e.length;0!==t;){r=Math.floor(Math.random()*t),t--;var c=[e[r],e[t]];e[t]=c[0],e[r]=c[1]}return e})),-1===c.indexOf(e)?(s((function(r){return[].concat(Object(o.a)(r),[e])})),a((function(r){return[].concat(Object(o.a)(r),[e])}))):n(!0)},children:e},O()())}))})};var y=function(e){return Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)(d,{currentSymbolArray:e.currentSymbolArray,setCurrentArray:e.setCurrentArray,usedSymbolArray:e.usedSymbolArray,setUsedArray:e.setUsedArray,setGameOver:e.setGameOver,setTotalSymbolArray:e.setTotalSymbolArray})})};var m=function(e){var r=e.setGameOver,t=e.setScore,c=e.score,s=e.setUsedArray,n=e.setCurrentArray,a=e.setTotalSymbolArray;return Object(j.jsx)("div",{className:"game-over-screen",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Game Over!"}),Object(j.jsxs)("h3",{children:["Score: ",c]}),Object(j.jsx)("button",{onClick:function(){r(!1),t(0),s([]),n(["$","+","-","="]),a([])},children:"New Game"})]})})};var h=function(){var e=Object(c.useState)([]),r=Object(b.a)(e,2),t=r[0],s=r[1],n=Object(c.useState)([]),a=Object(b.a)(n,2),l=a[0],i=a[1],O=Object(c.useState)(["$","+","-","="]),d=Object(b.a)(O,2),h=d[0],S=d[1],f=Object(c.useState)(!1),v=Object(b.a)(f,2),A=v[0],x=v[1],g=Object(c.useState)(l.length),p=Object(b.a)(g,2),G=p[0],C=p[1],N=Object(c.useState)(0),M=Object(b.a)(N,2),T=M[0],U=M[1],k=["!","@","#","^","%","&","*","(",")","_","}","{","|","/"];return Object(c.useEffect)((function(){if(console.log(l),l.length===h.length){!function e(){var r=k[Math.floor(Math.random()*k.length)];-1===h.indexOf(r)?S((function(e){return[].concat(Object(o.a)(e),[r])})):e()}(),i([])}}),[l]),Object(c.useEffect)((function(){C(t.length)}),[t]),Object(c.useEffect)((function(){G>T&&U(G)}),[G]),Object(j.jsx)("div",{className:"App",children:A?Object(j.jsx)(m,{bestScore:T,setBestScore:U,score:G,setScore:C,setGameOver:x,setUsedArray:i,setCurrentArray:S,setTotalSymbolArray:s}):[Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{bestScore:T,score:G}),Object(j.jsx)(y,{currentSymbolArray:h,setCurrentArray:S,usedSymbolArray:l,setUsedArray:i,setGameOver:x,setTotalSymbolArray:s})]},"unique")]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.db339a3b.chunk.js.map