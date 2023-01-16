import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let m,v,l,y,t,a,P,c,R,o,z,r,I,i,M,F,n,b,C,D,_,E,N,s,j,f,A,w,S,g,h,T,d,x,O,L,p,u,H,k;return{c(){m=element("section"),v=element("div"),l=element("div"),y=element("div"),t=element("form"),a=element("input"),P=space(),c=element("input"),R=space(),o=element("input"),z=space(),r=element("textarea"),I=space(),i=element("button"),M=text("Send Now"),F=space(),n=element("div"),b=element("h3"),C=text(e[0]),D=space(),_=element("p"),E=text(e[1]),N=space(),s=element("ul"),j=element("li"),f=element("strong"),A=text("Phone: "),w=text(e[2]),S=space(),g=element("li"),h=element("strong"),T=text("Mail: "),d=element("a"),x=text(e[3]),L=space(),p=element("li"),u=element("strong"),H=text("Address: "),k=text(e[4]),this.h()},l(O){m=claim_element(O,"SECTION",{class:!0});var B,V,$,W,U,K,q,Y,G,X,Q,Z,J,se=children(m),ee,te,ne;v=claim_element(se,"DIV",{class:!0}),ee=children(v),l=claim_element(ee,"DIV",{class:!0}),W=children(l),y=claim_element(W,"DIV",{class:!0}),Z=children(y),t=claim_element(Z,"FORM",{action:!0,method:!0}),B=children(t),a=claim_element(B,"INPUT",{type:!0,class:!0,id:!0,name:!0,placeholder:!0}),P=claim_space(B),c=claim_element(B,"INPUT",{type:!0,class:!0,id:!0,name:!0,placeholder:!0}),R=claim_space(B),o=claim_element(B,"INPUT",{type:!0,class:!0,id:!0,name:!0,placeholder:!0}),z=claim_space(B),r=claim_element(B,"TEXTAREA",{name:!0,id:!0,class:!0,placeholder:!0}),children(r).forEach(detach),I=claim_space(B),i=claim_element(B,"BUTTON",{type:!0,class:!0}),X=children(i),M=claim_text(X,"Send Now"),X.forEach(detach),B.forEach(detach),Z.forEach(detach),F=claim_space(W),n=claim_element(W,"DIV",{class:!0}),V=children(n),b=claim_element(V,"H3",{id:!0}),G=children(b),C=claim_text(G,e[0]),G.forEach(detach),D=claim_space(V),_=claim_element(V,"P",{}),Y=children(_),E=claim_text(Y,e[1]),Y.forEach(detach),N=claim_space(V),s=claim_element(V,"UL",{class:!0}),$=children(s),j=claim_element($,"LI",{class:!0}),Q=children(j),f=claim_element(Q,"STRONG",{class:!0}),K=children(f),A=claim_text(K,"Phone: "),w=claim_text(K,e[2]),K.forEach(detach),Q.forEach(detach),S=claim_space($),g=claim_element($,"LI",{class:!0}),J=children(g),h=claim_element(J,"STRONG",{class:!0}),U=children(h),T=claim_text(U,"Mail: "),d=claim_element(U,"A",{href:!0,class:!0}),te=children(d),x=claim_text(te,e[3]),te.forEach(detach),U.forEach(detach),J.forEach(detach),L=claim_space($),p=claim_element($,"LI",{class:!0}),ne=children(p),u=claim_element(ne,"STRONG",{class:!0}),q=children(u),H=claim_text(q,"Address: "),k=claim_text(q,e[4]),q.forEach(detach),ne.forEach(detach),$.forEach(detach),V.forEach(detach),W.forEach(detach),ee.forEach(detach),se.forEach(detach),this.h()},h(){attr(a,"type","text"),attr(a,"class","form-control mb-3"),attr(a,"id","name"),attr(a,"name","name"),attr(a,"placeholder","Your Name"),attr(c,"type","email"),attr(c,"class","form-control mb-3"),attr(c,"id","mail"),attr(c,"name","mail"),attr(c,"placeholder","Your Email"),attr(o,"type","text"),attr(o,"class","form-control mb-3"),attr(o,"id","subject"),attr(o,"name","subject"),attr(o,"placeholder","Subject"),attr(r,"name","message"),attr(r,"id","message"),attr(r,"class","form-control mb-3"),attr(r,"placeholder","Your Message"),attr(i,"type","submit"),i.value="send",attr(i,"class","btn btn-primary"),attr(t,"action","#"),attr(t,"method","POST"),attr(y,"class","col-lg-7 mb-4 mb-lg-0"),attr(b,"id","why-you-should-contact-us"),attr(f,"class","svelte-12tswga"),attr(j,"class","svelte-12tswga"),attr(d,"href",O="mailto:"+e[3]),attr(d,"class","svelte-12tswga"),attr(h,"class","svelte-12tswga"),attr(g,"class","svelte-12tswga"),attr(u,"class","svelte-12tswga"),attr(p,"class","svelte-12tswga"),attr(s,"class","svelte-12tswga"),attr(n,"class","col-lg-5 content svelte-12tswga"),attr(l,"class","row"),attr(v,"class","container"),attr(m,"class","section bg-white")},m(e,O){insert(e,m,O),append(m,v),append(v,l),append(l,y),append(y,t),append(t,a),append(t,P),append(t,c),append(t,R),append(t,o),append(t,z),append(t,r),append(t,I),append(t,i),append(i,M),append(l,F),append(l,n),append(n,b),append(b,C),append(n,D),append(n,_),append(_,E),append(n,N),append(n,s),append(s,j),append(j,f),append(f,A),append(f,w),append(s,S),append(s,g),append(g,h),append(h,T),append(h,d),append(d,x),append(s,L),append(s,p),append(p,u),append(u,H),append(u,k)},p(e,[t]){t&1&&set_data(C,e[0]),t&2&&set_data(E,e[1]),t&4&&set_data(w,e[2]),t&8&&set_data(x,e[3]),t&8&&O!==(O="mailto:"+e[3])&&attr(d,"href",O),t&16&&set_data(k,e[4])},i:noop,o:noop,d(e){e&&detach(m)}}}function instance(e,t,n){let{title:s}=t,{desc:o}=t,{phone:i}=t,{email:a}=t,{address:r}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"desc"in e&&n(1,o=e.desc),"phone"in e&&n(2,i=e.phone),"email"in e&&n(3,a=e.email),"address"in e&&n(4,r=e.address)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,desc:1,phone:2,email:3,address:4})}}export default Component