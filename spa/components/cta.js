/* generated by Svelte v3.32.3 */
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
} from '/spa/web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div3;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h2;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let a;
	let t5_value = /*link*/ ctx[3].title + "";
	let t5;
	let a_href_value;

	return {
		c() {
			section = element("section");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h2 = element("h2");
			t1 = text(/*title*/ ctx[0]);
			t2 = space();
			p = element("p");
			t3 = text(/*body*/ ctx[1]);
			t4 = space();
			a = element("a");
			t5 = text(t5_value);
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, /*title*/ ctx[0]);
			h2_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, /*body*/ ctx[1]);
			p_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			a = claim_element(div1_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, t5_value);
			a_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "/assets" + /*image*/ ctx[2].url)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*image*/ ctx[2].alt);
			attr(img, "class", "img-fluid");
			attr(div0, "class", "col-lg-4 col-md-5 mb-4 mb-md-0");
			attr(h2, "class", "section-title");
			attr(p, "class", "mb-4");
			attr(a, "href", a_href_value = /*link*/ ctx[3].url);
			attr(a, "class", "btn btn-primary");
			attr(div1, "class", "col-lg-5 col-md-6");
			attr(div2, "class", "row align-items-center justify-content-center text-center text-md-left");
			attr(div3, "class", "container section shadow rounded-lg px-4");
			attr(section, "class", "section");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, img);
			append(div2, t0);
			append(div2, div1);
			append(div1, h2);
			append(h2, t1);
			append(div1, t2);
			append(div1, p);
			append(p, t3);
			append(div1, t4);
			append(div1, a);
			append(a, t5);
		},
		p(ctx, [dirty]) {
			if (dirty & /*image*/ 4 && img.src !== (img_src_value = "/assets" + /*image*/ ctx[2].url)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*image*/ 4 && img_alt_value !== (img_alt_value = /*image*/ ctx[2].alt)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*title*/ 1) set_data(t1, /*title*/ ctx[0]);
			if (dirty & /*body*/ 2) set_data(t3, /*body*/ ctx[1]);
			if (dirty & /*link*/ 8 && t5_value !== (t5_value = /*link*/ ctx[3].title + "")) set_data(t5, t5_value);

			if (dirty & /*link*/ 8 && a_href_value !== (a_href_value = /*link*/ ctx[3].url)) {
				attr(a, "href", a_href_value);
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
	let { title } = $$props,
		{ body } = $$props,
		{ image } = $$props,
		{ link } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("body" in $$props) $$invalidate(1, body = $$props.body);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("link" in $$props) $$invalidate(3, link = $$props.link);
	};

	return [title, body, image, link];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, body: 1, image: 2, link: 3 });
	}
}

export default Component;