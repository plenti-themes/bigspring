import{SvelteComponent,append,children,claim_element,claim_text,detach,element,init,insert,noop,safe_not_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let t,n;return{c(){t=element("h1"),n=text("404 Not Found")},l(e){t=claim_element(e,"H1",{});var s=children(t);n=claim_text(s,"404 Not Found"),s.forEach(detach)},m(e,s){insert(e,t,s),append(t,n)},p:noop,i:noop,o:noop,d(e){e&&detach(t)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component