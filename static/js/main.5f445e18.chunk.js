(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),n=r(7),a=r.n(n),o=(r(13),r(4)),b=r(2),j=r(0);var l=function(e){return Object(j.jsxs)("div",{className:"scoreboard",children:[Object(j.jsxs)("h4",{children:["Score: ",e.score]}),Object(j.jsx)("span",{children:"|"}),Object(j.jsxs)("h4",{children:["Best Score: ",e.bestScore]})]})};var i=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Symbol Memory Game"}),Object(j.jsx)(l,{bestScore:e.bestScore,score:e.score})]})},u=r(8),O=r.n(u);var m=function(e){var t=e.currentSymbolArray,r=e.setCurrentArray,c=e.usedSymbolArray,s=e.setUsedArray,n=e.setGameOver,a=e.setTotalSymbolArray;return Object(j.jsx)("div",{className:"symbol-container",children:t.map((function(e){return Object(j.jsx)("div",{className:"symbol-item",onClick:function(){r((function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var c=[e[t],e[r]];e[r]=c[0],e[t]=c[1]}return e})),-1===c.indexOf(e)?(s((function(t){return[].concat(Object(o.a)(t),[e])})),a((function(t){return[].concat(Object(o.a)(t),[e])}))):n(!0)},children:e},O()())}))})};var y=function(e){return Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("div",{className:"level-container",children:Object(j.jsxs)("h3",{children:["Choose your next symbol! Level ",e.level]})}),Object(j.jsx)(m,{currentSymbolArray:e.currentSymbolArray,setCurrentArray:e.setCurrentArray,usedSymbolArray:e.usedSymbolArray,setUsedArray:e.setUsedArray,setGameOver:e.setGameOver,setTotalSymbolArray:e.setTotalSymbolArray})]})};var d=function(e){var t=e.setGameOver,r=e.setScore,c=e.score,s=e.setUsedArray,n=e.setCurrentArray,a=e.setTotalSymbolArray,o=e.setLevel;return Object(j.jsx)("div",{className:"game-over-screen",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Game Over!"}),Object(j.jsxs)("h3",{children:["Score: ",c]}),Object(j.jsx)("button",{onClick:function(){t(!1),o(1),r(0),s([]),n(["$","+","-","="]),a([])},children:"New Game"})]})})};var h=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),r=t[0],s=t[1],n=Object(c.useState)([]),a=Object(b.a)(n,2),l=a[0],u=a[1],O=Object(c.useState)(["$","+","-","="]),m=Object(b.a)(O,2),h=m[0],v=m[1],S=Object(c.useState)(!1),f=Object(b.a)(S,2),x=f[0],A=f[1],g=Object(c.useState)(l.length),p=Object(b.a)(g,2),C=p[0],G=p[1],N=Object(c.useState)(0),M=Object(b.a)(N,2),T=M[0],U=M[1],k=Object(c.useState)(1),E=Object(b.a)(k,2),w=E[0],B=E[1],L=["!","@","#","^","%","&","*","(",")","_","}","{","|","/"];return Object(c.useEffect)((function(){if(l.length===h.length){B(w+1);!function e(){var t=L[Math.floor(Math.random()*L.length)];-1===h.indexOf(t)?v((function(e){return[].concat(Object(o.a)(e),[t])})):e()}(),u([])}}),[l]),Object(c.useEffect)((function(){G(r.length)}),[r]),Object(c.useEffect)((function(){C>T&&U(C)}),[C]),Object(j.jsx)("div",{className:"App",children:x?Object(j.jsx)(d,{bestScore:T,setBestScore:U,score:C,setScore:G,setGameOver:A,setUsedArray:u,setCurrentArray:v,setTotalSymbolArray:s,setLevel:B}):[Object(j.jsxs)("div",{children:[Object(j.jsx)(i,{bestScore:T,score:C}),Object(j.jsx)(y,{currentSymbolArray:h,setCurrentArray:v,usedSymbolArray:l,setUsedArray:u,setGameOver:A,setTotalSymbolArray:s,level:w})]},"unique")]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f445e18.chunk.js.map