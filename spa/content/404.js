/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	children,
	claim_element,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let h1;
	let t;

	return {
		c() {
			h1 = element("h1");
			t = text("404 Not Found");
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "404 Not Found");
			h1_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;