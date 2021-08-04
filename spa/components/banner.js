/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div2;
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let img;
	let img_src_value;
	let img_alt_value;

	return {
		c() {
			section = element("section");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			img = element("img");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, /*title*/ ctx[0]);
			h2_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t1 = claim_space(section_nodes);
			img = claim_element(section_nodes, "IMG", { src: true, alt: true, class: true });
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h2, "class", "section-title");
			attr(div0, "class", "col-lg-8 mx-auto text-center");
			attr(div1, "class", "row");
			attr(div2, "class", "container");
			if (img.src !== (img_src_value = "assets" + /*image*/ ctx[1].url)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*image*/ ctx[1].alt);
			attr(img, "class", "img-fluid w-100");
			attr(section, "class", "section pb-0");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, h2);
			append(h2, t0);
			append(section, t1);
			append(section, img);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*image*/ 2 && img.src !== (img_src_value = "assets" + /*image*/ ctx[1].url)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*image*/ 2 && img_alt_value !== (img_alt_value = /*image*/ ctx[1].alt)) {
				attr(img, "alt", img_alt_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { image } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("image" in $$props) $$invalidate(1, image = $$props.image);
	};

	return [title, image];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, image: 1 });
	}
}

export default Component;