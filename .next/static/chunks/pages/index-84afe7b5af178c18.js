(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1713)}])},1713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var u=n(5893),a=n(7294),s=()=>{let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)(1),i=async t=>{t.preventDefault(),await fetch("/api/queue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,peopleCount:n})}),alert("You have been added to the queue!")};return(0,u.jsxs)("form",{onSubmit:i,className:"flex flex-col gap-4",children:[(0,u.jsx)("input",{type:"text",placeholder:"Your Name",value:e,onChange:e=>t(e.target.value)}),(0,u.jsx)("input",{type:"number",min:"1",value:n,onChange:e=>s(e.target.value)}),(0,u.jsx)("button",{type:"submit",className:"bg-blue-500 text-white p-2",children:"Join Queue"})]})},i=()=>(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{className:"text-xl font-bold mb-4",children:"Join the Queue"}),(0,u.jsx)(s,{})]})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);