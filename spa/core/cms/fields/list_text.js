import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,create_animation,detach,element,fix_and_destroy_block,fix_position,init,insert,listen,noop,prevent_default,run_all,safe_not_equal,set_input_value,space,svg_element,text,update_keyed_each}from"../../../web_modules/svelte/internal/index.mjs";import{flip}from"../../../web_modules/svelte/animate/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[6]=t[n],s[7]=t,s[8]=n,s}function create_each_block(e,t){let s,p,n,h,l,r,c,a,d,u,v,i,j,m,o,f,g,_,y=noop,b,w;function O(){t[2].call(i,t[7],t[8])}function x(){return t[3](t[8],t[6])}function C(){return t[4](t[8])}return{key:e,first:null,c(){s=element("div"),p=element("div"),n=svg_element("svg"),h=svg_element("path"),l=svg_element("circle"),r=svg_element("circle"),c=svg_element("circle"),a=svg_element("circle"),d=svg_element("circle"),u=svg_element("circle"),v=space(),i=element("input"),j=space(),m=element("button"),o=svg_element("svg"),f=svg_element("path"),g=svg_element("path"),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var t,y,_,w,b=children(s);p=claim_element(b,"DIV",{class:!0}),_=children(p),n=claim_element(_,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),t=children(n),h=claim_element(t,"path",{stroke:!0,d:!0,fill:!0},1),children(h).forEach(detach),l=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(l).forEach(detach),r=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(r).forEach(detach),c=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(c).forEach(detach),a=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(a).forEach(detach),d=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(d).forEach(detach),u=claim_element(t,"circle",{cx:!0,cy:!0,r:!0},1),children(u).forEach(detach),t.forEach(detach),_.forEach(detach),v=claim_space(b),i=claim_element(b,"INPUT",{class:!0}),j=claim_space(b),m=claim_element(b,"BUTTON",{class:!0}),w=children(m),o=claim_element(w,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0},1),y=children(o),f=claim_element(y,"path",{d:!0,fill:!0},1),children(f).forEach(detach),g=claim_element(y,"path",{d:!0},1),children(g).forEach(detach),y.forEach(detach),w.forEach(detach),b.forEach(detach),this.h()},h(){attr(h,"stroke","none"),attr(h,"d","M0 0h24v24H0z"),attr(h,"fill","none"),attr(l,"cx","5"),attr(l,"cy","9"),attr(l,"r","1"),attr(r,"cx","5"),attr(r,"cy","15"),attr(r,"r","1"),attr(c,"cx","12"),attr(c,"cy","9"),attr(c,"r","1"),attr(a,"cx","12"),attr(a,"cy","15"),attr(a,"r","1"),attr(d,"cx","19"),attr(d,"cy","9"),attr(d,"r","1"),attr(u,"cx","19"),attr(u,"cy","15"),attr(u,"r","1"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-grip-horizontal"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(p,"class","grip svelte-sq38y9"),attr(i,"class","svelte-sq38y9"),attr(f,"d","M0 0h24v24H0z"),attr(f,"fill","none"),attr(g,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),attr(o,"xmlns","http://www.w3.org/2000/svg"),attr(o,"height","16"),attr(o,"viewBox","0 0 24 24"),attr(o,"width","16"),attr(m,"class","close svelte-sq38y9"),attr(s,"class","list-text-item svelte-sq38y9"),this.first=s},m(e,y){insert(e,s,y),append(s,p),append(p,n),append(n,h),append(n,l),append(n,r),append(n,c),append(n,a),append(n,d),append(n,u),append(s,v),append(s,i),set_input_value(i,t[6]),append(s,j),append(s,m),append(m,o),append(o,f),append(o,g),b||(w=[listen(i,"input",O),listen(i,"keyup",x),listen(m,"click",prevent_default(C))],b=!0)},p(e,n){t=e,n&1&&i.value!==t[6]&&set_input_value(i,t[6])},r(){_=s.getBoundingClientRect()},f(){fix_position(s),y()},a(){y(),y=create_animation(s,_,flip,{duration:200})},d(e){e&&detach(s),b=!1,run_all(w)}}}function create_fragment(e){let n,t=[],l=new Map,i,s,a,r,c,o=e[0];const d=e=>e[8];for(let n=0;n<o.length;n+=1){let s=get_each_context(e,o,n),i=d(s);l.set(i,t[n]=create_each_block(i,s))}return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();i=space(),s=element("button"),a=text("Add Item"),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var r,o=children(n);for(let e=0;e<t.length;e+=1)t[e].l(o);i=claim_space(o),s=claim_element(o,"BUTTON",{}),r=children(s),a=claim_text(r,"Add Item"),r.forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"class","list-text")},m(o,l){insert(o,n,l);for(let e=0;e<t.length;e+=1)t[e].m(n,null);append(n,i),append(n,s),append(s,a),r||(c=listen(s,"click",prevent_default(e[5])),r=!0)},p(e,[s]){if(s&3){o=e[0];for(let e=0;e<t.length;e+=1)t[e].r();t=update_keyed_each(t,s,d,1,e,o,l,n,fix_and_destroy_block,create_each_block,i,get_each_context);for(let e=0;e<t.length;e+=1)t[e].a()}},i:noop,o:noop,d(e){e&&detach(n);for(let e=0;e<t.length;e+=1)t[e].d();r=!1,c()}}}function instance(e,t,n){let{field:s}=t;const o=e=>{n(0,s=s.filter((t,n)=>n!==e))};function i(e,t){e[t]=this.value,n(0,s)}const a=(e,t)=>{n(0,s[e]=t,s)},r=e=>o(e),c=()=>{n(0,s=[...s,""])};return e.$$set=e=>{"field"in e&&n(0,s=e.field)},[s,o,i,a,r,c]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0})}}export default Component