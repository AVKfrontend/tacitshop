import{_ as et}from"./PageTitle.9e7cbf1c.js";import{_ as nt}from"./IntroArea.514c35e5.js";import{y as A,B as V,D as s,q as r,o as c,c as _,a as t,F,A as H,t as i,r as d,j as at,C as it,b as N,w as ct,v as lt,I as C,J as dt,K as rt,L as _t,M as I,d as L,N as ut,p as pt,f as vt,O as ht,P as mt,_ as gt}from"./entry.05ce73f3.js";const ft={class:"rating-stars"},bt={class:"rating-stars__items"},xt={class:"rating-stars__item"},yt=t("span",{class:"rating-stars__star"},null,-1),wt=t("div",{class:"rating-stars__blind"},null,-1),Ct=[yt,wt],It=A({__name:"UiRating",props:{rating:{},starColor:{}},setup(h){const m=h;V(p=>({"34374def":s(v),20677684:s(g)}));const g=r(()=>m.rating/.07+"%"),v=m.starColor;return(p,n)=>(c(),_("div",ft,[t("ul",bt,[(c(),_(F,null,H(5,u=>t("li",xt,Ct)),64))]),t("span",null,i(m.rating),1)]))}});const e=h=>(pt("data-v-27a3ef96"),h=h(),vt(),h),kt=["id"],$t={class:"container"},Mt={key:0,class:"product-card"},Tt={class:"product-card__slider"},Lt={class:""},Dt=["srcset"],Rt=["src"],St=e(()=>t("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"12.000000pt",height:"20.000000pt",viewBox:"0 0 12.000000 20.000000",preserveAspectRatio:"xMidYMid meet"},[t("g",{transform:"translate(0.000000,20.000000) scale(0.100000,-0.100000)",fill:"#48689a",stroke:"none"},[t("path",{d:"M14 179 c-3 -6 9 -26 27 -45 l33 -34 -34 -35 c-27 -28 -31 -38 -22 -47 10 -10 22 -2 59 35 l47 47 -44 45 c-47 47 -55 52 -66 34z"})])],-1)),Pt=[St],Bt=e(()=>t("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"12.000000pt",height:"20.000000pt",viewBox:"0 0 12.000000 20.000000",preserveAspectRatio:"xMidYMid meet"},[t("g",{transform:"translate(0.000000,20.000000) scale(0.100000,-0.100000)",fill:"#48689a",stroke:"none"},[t("path",{d:"M14 179 c-3 -6 9 -26 27 -45 l33 -34 -34 -35 c-27 -28 -31 -38 -22 -47 10 -10 22 -2 59 35 l47 47 -44 45 c-47 47 -55 52 -66 34z"})])],-1)),Et=[Bt],Nt={class:"product-card__items"},At=["onClick"],Vt=["src"],Ft=e(()=>t("div",{class:"product-card__blind"},null,-1)),Ht={class:"product-card__summary"},Ut={class:"product-card__price"},zt={class:"product-card__name"},Wt={class:"product-card__rating"},Yt=e(()=>t("div",{class:"product-card__line"},[t("hr",{class:"line",noshade:""})],-1)),qt={class:"product-card__description"},Ot={class:"product-card__options"},jt={class:"product-card__options-quantity"},Jt=e(()=>t("span",null,"–",-1)),Kt=[Jt],Xt=e(()=>t("span",null,"+",-1)),Gt=[Xt],Qt={class:"product-card__submitarea"},Zt={key:1,class:"noproduct"},ts={class:"product-details"},ss={class:"coloring"},os={class:"container"},es={class:"product-details__container"},ns={class:"product-details__buttons"},as=e(()=>t("span",null,null,-1)),is=e(()=>t("span",null,null,-1)),cs=e(()=>t("span",null,null,-1)),ls={class:"container"},ds={class:"product-details__container"},rs={class:"product-details__wrupper"},_s={key:0,class:"product-details__description"},us={key:1,class:"product-details__details"},ps=e(()=>t("tr",null,[t("th",null,"Alias"),t("th",null,"Description")],-1)),vs=e(()=>t("td",null,"Name : ",-1)),hs=e(()=>t("td",null,"Price : ",-1)),ms=e(()=>t("td",null,"Brand : ",-1)),gs=e(()=>t("td",null,"Category : ",-1)),fs=e(()=>t("td",null,"Rating : ",-1)),bs={key:2,class:"product-details__history"},D=.2,xs="#48689A",ys=A({__name:"[id]",setup(h){V(o=>({"4354c13d":s(U),"273f9d1f":s(z),"7d5e58a4":s(W),"4efaa83f":s(Y)}));const m=D*(1-D),g=1+D;let v=document.createElement("DIV");const p=d(-1),n=d({id:-1}),u=d(0),x=d([]),f=d(1),b=d(0),k=d(0),$=d(0),y=d(0),w=d(0),M=r(()=>x.value[u.value]),R=r(()=>n.value.rating),S=r(()=>b.value===0),P=r(()=>b.value===1),B=r(()=>b.value===2),U=r(()=>-k.value*m+"px"),z=r(()=>-$.value*m+"px"),W=r(()=>y.value+"px"),Y=r(()=>w.value+"px");function q(){return+ht().params.id}async function O(o){o<=0||(n.value=await mt(o),j())}function j(){x.value=n.value.images?n.value.images:[]}function J(){u.value=u.value===0?x.value.length-1:u.value-1}function K(){u.value=u.value===x.value.length-1?0:u.value+1}function X(o){u.value=o}function T(){p.value=q(),O(p.value)}function G(o){o.target&&(v=o.target,v.addEventListener("mousemove",E),y.value=v.offsetWidth*g,w.value=v.offsetHeight*g)}function Q(){k.value=0,$.value=0,y.value=y.value/g,w.value=w.value/g,v.removeEventListener("mousemove",E)}const E=function(o){$.value=o.offsetX,k.value=o.offsetY};return at(()=>{window.addEventListener("hashchange",T),T()}),it(()=>window.removeEventListener("hashchange",T)),(o,a)=>{const Z=et,tt=nt,st=It;return c(),_("main",null,[N(tt,null,{page:ct(()=>[N(Z,{"title-text":"Product"})]),_:1}),t("section",{id:`p${s(p)}`,class:"product-hood"},[t("div",$t,[s(p)>0?(c(),_("div",Mt,[t("div",Tt,[t("div",{onMouseenter:G,onMouseleave:Q,class:"product-card__picture"},[t("picture",Lt,[t("source",{srcset:s(M),media:"(min-width: 900px)"},null,8,Dt),t("img",{src:s(M),alt:"",class:"product-card__img"},null,8,Rt)]),t("button",{onClick:K,class:"product-card__rigth",type:"button"},Pt),t("button",{onClick:J,class:"product-card__left",type:"button"},Et)],32),t("ul",Nt,[(c(!0),_(F,null,H(s(x),(l,ot)=>(c(),_("li",{onClick:ws=>X(ot),class:I(["product-card__icon",{"product-card__icon--activ":l===s(M)}])},[t("img",{src:l,alt:""},null,8,Vt),Ft],10,At))),256))])]),t("div",Ht,[t("h2",Ut,"$"+i(s(n).price),1),t("h3",zt,i(s(n).title),1),t("div",Wt,[s(R)?(c(),lt(st,{key:0,rating:s(R),"star-color":xs},null,8,["rating"])):C("",!0)]),Yt,t("p",qt,i(s(n).description),1),t("div",Ot,[t("div",jt,[t("button",{onClick:a[0]||(a[0]=l=>f.value--),class:"product-card__options-btn",type:"button"},Kt),dt(t("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>_t(f)?f.value=l:null),type:"text",class:"product-card__amount"},null,512),[[rt,s(f)]]),t("button",{onClick:a[2]||(a[2]=l=>f.value++),class:"product-card__options-btn",type:"button"},Gt)]),t("div",Qt,[t("button",{onClick:a[3]||(a[3]=l=>("addToCart"in o?o.addToCart:s(ut))(s(p),s(f))),class:"product-card__submitarea-btn",type:"button"},"Add to cart")])])])])):(c(),_("h2",Zt,"Product #"+i(s(p))+" not find",1))])],8,kt),t("section",ts,[t("div",ss,[t("div",os,[t("div",es,[t("div",ns,[t("button",{onClick:a[4]||(a[4]=l=>b.value=0),class:I(["product-details__btn",{"product-details__btn--active":s(S)}]),type:"button"},[L("DESCRIPTION"),as],2),t("button",{onClick:a[5]||(a[5]=l=>b.value=1),class:I(["product-details__btn",{"product-details__btn--active":s(P)}]),type:"button"},[L("DETAILS"),is],2),t("button",{onClick:a[6]||(a[6]=l=>b.value=2),class:I(["product-details__btn",{"product-details__btn--active":s(B)}]),type:"button"},[L("HISTORY"),cs],2)])])])]),t("div",ls,[t("div",ds,[t("div",rs,[s(S)?(c(),_("div",_s,i(s(n).description),1)):C("",!0),s(P)?(c(),_("div",us,[t("table",null,[ps,t("tbody",null,[t("tr",null,[vs,t("td",null,i(s(n).title),1)]),t("tr",null,[hs,t("td",null,i(s(n).price)+" $",1)]),t("tr",null,[ms,t("td",null,i(s(n).brand),1)]),t("tr",null,[gs,t("td",null,i(s(n).category),1)]),t("tr",null,[fs,t("td",null,i(s(n).rating),1)])])])])):C("",!0),s(B)?(c(),_("div",bs,"No data")):C("",!0)])])])])])}}});const $s=gt(ys,[["__scopeId","data-v-27a3ef96"]]);export{$s as default};