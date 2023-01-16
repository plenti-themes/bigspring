import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let i,r,o,t,c,b,x,u,m,O,n,l=e[2].title+"",y,w,d,g,v,C,a,h,s,f,j,p,_;return{c(){i=element("section"),r=element("div"),o=element("div"),t=element("div"),c=element("h2"),b=text(e[0]),x=space(),u=element("p"),m=text(e[1]),O=space(),n=element("a"),y=text(l),w=space(),d=element("i"),C=space(),a=element("div"),h=element("div"),s=element("img"),this.h()},l(f){i=claim_element(f,"SECTION",{class:!0});var p,g,v,j,_,E,k,A,S=children(i);r=claim_element(S,"DIV",{class:!0}),j=children(r),o=claim_element(j,"DIV",{class:!0}),v=children(o),t=claim_element(v,"DIV",{class:!0}),p=children(t),c=claim_element(p,"H2",{class:!0}),_=children(c),b=claim_text(_,e[0]),_.forEach(detach),x=claim_space(p),u=claim_element(p,"P",{}),E=children(u),m=claim_text(E,e[1]),E.forEach(detach),O=claim_space(p),n=claim_element(p,"A",{href:!0,class:!0}),g=children(n),y=claim_text(g,l),w=claim_space(g),d=claim_element(g,"I",{class:!0}),children(d).forEach(detach),g.forEach(detach),p.forEach(detach),C=claim_space(v),a=claim_element(v,"DIV",{class:!0}),k=children(a),h=claim_element(k,"DIV",{}),A=children(h),s=claim_element(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(detach),k.forEach(detach),v.forEach(detach),j.forEach(detach),S.forEach(detach),this.h()},h(){attr(c,"class","section-title"),attr(d,"class","ti-arrow-right svelte-1wmgenm"),attr(n,"href",g=e[2].url),attr(n,"class","btn-link svelte-1wmgenm"),attr(t,"class",v="col-md-6 order-"+e[4]+" order-md-"+e[5]+" svelte-1wmgenm"),s.src!==(f=e[3].url)&&attr(s,"src",f),attr(s,"alt",j=e[3].alt),attr(s,"class","img-fluid"),attr(a,"class",p="col-md-6 order-"+e[6]+" order-md-"+e[7]+" mb-4 mb-md-0 svelte-1wmgenm"),attr(o,"class","row align-items-center"),attr(r,"class","container"),attr(i,"class",_="section"+e[8]+" svelte-1wmgenm")},m(e,l){insert(e,i,l),append(i,r),append(r,o),append(o,t),append(t,c),append(c,b),append(t,x),append(t,u),append(u,m),append(t,O),append(t,n),append(n,y),append(n,w),append(n,d),append(o,C),append(o,a),append(a,h),append(h,s)},p(e,[o]){o&1&&set_data(b,e[0]),o&2&&set_data(m,e[1]),o&4&&l!==(l=e[2].title+"")&&set_data(y,l),o&4&&g!==(g=e[2].url)&&attr(n,"href",g),o&48&&v!==(v="col-md-6 order-"+e[4]+" order-md-"+e[5]+" svelte-1wmgenm")&&attr(t,"class",v),o&8&&s.src!==(f=e[3].url)&&attr(s,"src",f),o&8&&j!==(j=e[3].alt)&&attr(s,"alt",j),o&192&&p!==(p="col-md-6 order-"+e[6]+" order-md-"+e[7]+" mb-4 mb-md-0 svelte-1wmgenm")&&attr(a,"class",p),o&256&&_!==(_="section"+e[8]+" svelte-1wmgenm")&&attr(i,"class",_)},i:noop,o:noop,d(e){e&&detach(i)}}}function instance(e,t,n){let{title:i}=t,{body:a}=t,{link:r}=t,{image:s}=t,{background:o}=t,c=1,l=2,d=2,u=1;s.position=="right"&&(c=2,l=1,d=1,u=2);let h="";return o=="blue"&&(h=" bg-light"),e.$$set=e=>{"title"in e&&n(0,i=e.title),"body"in e&&n(1,a=e.body),"link"in e&&n(2,r=e.link),"image"in e&&n(3,s=e.image),"background"in e&&n(9,o=e.background)},[i,a,r,s,c,l,d,u,h,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,body:1,link:2,image:3,background:9})}}export default Component