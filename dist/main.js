(()=>{"use strict";var e={277:(e,t,n)=>{e.exports=n.p+"e6f5daa3ec3a8212e615.jpg"},584:(e,t,n)=>{e.exports=n.p+"332cce14311f9cfc9f22.jpg"},873:(e,t,n)=>{e.exports=n.p+"6bdf8fa5769da1c5c201.jpg"},879:(e,t,n)=>{e.exports=n.p+"d581daa9c7efb745b07e.jpg"},299:(e,t,n)=>{e.exports=n.p+"4653fa57d299ad604ccf.gif"}},t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(873);var t=n(277),a=n(879),c=n(584);const o=["Home","Menu","Contact"];var r=n(299);let d=1;const l=e=>{d=e},s=()=>d,i=()=>{document.getElementById("content").innerHTML="",(()=>{const e=document.querySelector("#content"),t=document.createElement("nav");t.className="navbar  bg-dark";const n=document.createElement("div");n.className="container-fluid";const a=document.createElement("ul");a.className="nav navbar-nav flex-row d-flex justify-content-around w-100",o.map((e=>{const t=document.createElement("li"),n=document.createElement("a");return n.href="#",n.className="btn btn-light",n.id=e.toLocaleLowerCase(),n.innerHTML=e,t.appendChild(n),a.appendChild(t),!0})),n.appendChild(a),t.appendChild(n),e.appendChild(t)})(),document.getElementById("home").addEventListener("click",(()=>{l(1),i()})),document.getElementById("menu").addEventListener("click",(()=>{l(2),i()})),document.getElementById("contact").addEventListener("click",(()=>{l(3),i()})),1===s()&&(()=>{const t=document.querySelector("#content"),n=new Image;n.className="head-img",n.src=e;const a=document.createElement("h1");a.innerHTML="Vegan Resturant";const c=document.createElement("p");c.innerHTML="Welcome to Neko Vegan Resturant!",t.appendChild(n),t.appendChild(a),t.appendChild(c)})(),2===s()&&(()=>{const e=document.querySelector("#content"),n=document.createElement("img");n.className="head-img",n.src="https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/08/h2slax_w-e1566485538962.jpeg";const o=document.createElement("h1");o.innerHTML="Neko Menu";const r=document.createElement("ul");r.className="p-0 m-0",[["Couscous",t],["Lentil Soup",a],["Cauliflower Flafael",c]].forEach((e=>{const t=document.createElement("li"),n=document.createElement("h3"),a=document.createElement("img");a.className="img-styling",[n.innerHTML,a.src]=[e[0],e[1]],t.appendChild(n),t.appendChild(a),r.appendChild(t)})),e.appendChild(n),e.appendChild(o),e.appendChild(r)})(),3===s()&&(()=>{const e=document.querySelector("#content"),t=new Image;t.className="head-img",t.src=r;const n=document.createElement("h1");n.innerHTML="How To Contact Neko Master";const a=document.createElement("div");a.className="d-flex flex-row justify-content-around";const c=document.createElement("a");c.href="https://www.facebook.com/AliZien1999";const o=document.createElement("i");o.className="fab fa-facebook-square fa-4x",c.appendChild(o);const d=document.createElement("a");d.href="https://www.linkedin.com/in/abdo-amin-ab786a1b0/";const l=document.createElement("i");l.className="fab fa-linkedin fa-4x",d.appendChild(l);const s=document.createElement("a");s.href="https://github.com/AbdelrhmanAmin";const i=document.createElement("i");s.appendChild(i),i.className="fab fa-github-square fa-4x",a.appendChild(c),a.appendChild(d),a.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(a)})()};i()})()})();