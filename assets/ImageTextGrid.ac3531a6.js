import{f as c,r,o as a,a as s,F as d,j as p,b as o,w as i,d as n,g as m,t as u}from"./app.3792b625.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const f=c({name:"ImageTextGrid",props:{list:{type:Array,default:()=>[]},fit:String}}),v={class:"image-text-grid"},x=["src"],y={class:"text"};function h(t,k,$,j,B,b){const l=r("acg-ratio-div"),_=r("router-link");return a(),s("div",v,[(a(!0),s(d,null,p(t.list,e=>(a(),s("div",{class:"image-text-item",key:e.url},[o(_,{to:e.url},{default:i(()=>[o(l,{class:"image"},{default:i(()=>[n("img",{src:t.$withBase(e.image),style:m({"object-fit":t.fit})},null,12,x)]),_:2},1024),n("div",y,u(e.name),1)]),_:2},1032,["to"])]))),128))])}var G=g(f,[["render",h]]);export{G as default};