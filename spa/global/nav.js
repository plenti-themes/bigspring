import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,space,text}from"../web_modules/svelte/internal/index.mjs";function create_fragment(){let n,d,i,A,x,s,g,y,o,t,h,r,j,v,p,u,O,b,f,a,_,w,m,c,C,E,l,k;return{c(){n=element("nav"),d=element("a"),i=element("img"),x=space(),s=element("button"),g=element("i"),y=space(),o=element("div"),t=element("ul"),h=element("li"),r=element("a"),j=text("Blog"),v=space(),p=element("li"),u=element("a"),O=text("Pricing"),b=space(),f=element("li"),a=element("a"),_=text("Contact"),w=space(),m=element("li"),c=element("a"),C=text("FAQ"),E=space(),l=element("a"),k=text("Get Started"),this.h()},l(e){n=claim_element(e,"NAV",{class:!0});var A,M,F,T,z,D,N,L,R,P,H,I,B,S=children(n);d=claim_element(S,"A",{class:!0,href:!0}),N=children(d),i=claim_element(N,"IMG",{width:!0,class:!0,src:!0,alt:!0}),N.forEach(detach),x=claim_space(S),s=claim_element(S,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-expanded":!0}),T=children(s),g=claim_element(T,"I",{class:!0}),children(g).forEach(detach),T.forEach(detach),y=claim_space(S),o=claim_element(S,"DIV",{class:!0,id:!0,style:!0}),M=children(o),t=claim_element(M,"UL",{class:!0}),A=children(t),h=claim_element(A,"LI",{class:!0}),z=children(h),r=claim_element(z,"A",{class:!0,href:!0}),D=children(r),j=claim_text(D,"Blog"),D.forEach(detach),z.forEach(detach),v=claim_space(A),p=claim_element(A,"LI",{class:!0}),F=children(p),u=claim_element(F,"A",{class:!0,href:!0}),L=children(u),O=claim_text(L,"Pricing"),L.forEach(detach),F.forEach(detach),b=claim_space(A),f=claim_element(A,"LI",{class:!0}),R=children(f),a=claim_element(R,"A",{class:!0,href:!0}),P=children(a),_=claim_text(P,"Contact"),P.forEach(detach),R.forEach(detach),w=claim_space(A),m=claim_element(A,"LI",{class:!0}),H=children(m),c=claim_element(H,"A",{class:!0,href:!0}),I=children(c),C=claim_text(I,"FAQ"),I.forEach(detach),H.forEach(detach),A.forEach(detach),E=claim_space(M),l=claim_element(M,"A",{href:!0,class:!0}),B=children(l),k=claim_text(B,"Get Started"),B.forEach(detach),M.forEach(detach),S.forEach(detach),this.h()},h(){attr(i,"width","200px"),attr(i,"class","img-fluid"),i.src!==(A="assets/logo.png")&&attr(i,"src",A),attr(i,"alt","Bigspring Hugo"),attr(d,"class","navbar-brand"),attr(d,"href","."),attr(g,"class","ti-menu h3"),attr(s,"class","navbar-toggler border-0 collapsed"),attr(s,"type","button"),attr(s,"data-toggle","collapse"),attr(s,"data-target","#navigation"),attr(s,"aria-expanded","false"),attr(r,"class","nav-link"),attr(r,"href","blog"),attr(h,"class","nav-item"),attr(u,"class","nav-link"),attr(u,"href","pricing"),attr(p,"class","nav-item"),attr(a,"class","nav-link"),attr(a,"href","contact"),attr(f,"class","nav-item"),attr(c,"class","nav-link"),attr(c,"href","faq"),attr(m,"class","nav-item"),attr(t,"class","navbar-nav mx-auto"),attr(l,"href","contact"),attr(l,"class","btn btn-sm btn-primary ml-3"),attr(o,"class","navbar-collapse text-center collapse"),attr(o,"id","navigation"),attr(n,"class","navbar navbar-expand-lg navbar-light bg-transparent")},m(e,A){insert(e,n,A),append(n,d),append(d,i),append(n,x),append(n,s),append(s,g),append(n,y),append(n,o),append(o,t),append(t,h),append(h,r),append(r,j),append(t,v),append(t,p),append(p,u),append(u,O),append(t,b),append(t,f),append(f,a),append(a,_),append(t,w),append(t,m),append(m,c),append(c,C),append(o,E),append(o,l),append(l,k)},p:noop,i:noop,o:noop,d(e){e&&detach(n)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component