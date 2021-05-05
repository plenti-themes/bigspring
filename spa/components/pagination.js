/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (13:4) {:else}
function create_else_block_2(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("««");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("«");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "««");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "«");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", "/blog");
			attr(a0, "class", "page-link svelte-1dhwyyn");
			attr(a0, "aria-label", "First");
			attr(li0, "class", "page-item disabled");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "/blog/" + (/*currentPage*/ ctx[0] - 1));
			attr(a1, "class", "page-link svelte-1dhwyyn");
			attr(a1, "aria-label", "Previous");
			attr(li1, "class", "page-item disabled");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a1_href_value !== (a1_href_value = "/blog/" + (/*currentPage*/ ctx[0] - 1))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (6:4) {#if (currentPage - 1) > 0}
function create_if_block_2(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("««");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("«");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "««");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "«");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", "/blog");
			attr(a0, "class", "page-link svelte-1dhwyyn");
			attr(a0, "aria-label", "First");
			attr(li0, "class", "page-item");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "/blog/" + (/*currentPage*/ ctx[0] - 1));
			attr(a1, "class", "page-link svelte-1dhwyyn");
			attr(a1, "aria-label", "Previous");
			attr(li1, "class", "page-item");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a1_href_value !== (a1_href_value = "/blog/" + (/*currentPage*/ ctx[0] - 1))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (24:8) {:else}
function create_else_block_1(ctx) {
	let li;
	let a;
	let t_value = /*i*/ ctx[4] + 1 + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "page-link svelte-1dhwyyn");
			attr(a, "href", a_href_value = "/blog/" + (/*i*/ ctx[4] + 1));
			attr(li, "class", "page-item");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (22:8) {#if currentPage == i+1}
function create_if_block_1(ctx) {
	let li;
	let a;
	let t_value = /*i*/ ctx[4] + 1 + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "page-link svelte-1dhwyyn");
			attr(a, "href", a_href_value = "/blog/" + (/*i*/ ctx[4] + 1));
			attr(li, "class", "page-item active");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (21:4) {#each Array(totalPages) as _, i}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*currentPage*/ ctx[0] == /*i*/ ctx[4] + 1) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type !== (current_block_type = select_block_type_1(ctx, dirty))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (35:4) {:else}
function create_else_block(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let a0_href_value;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("»");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("»»");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "»");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "»»");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", a0_href_value = "/blog/" + (/*currentPage*/ ctx[0] + 1));
			attr(a0, "class", "page-link svelte-1dhwyyn");
			attr(a0, "aria-label", "Next");
			attr(li0, "class", "page-item disabled");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "/blog/" + /*totalPages*/ ctx[1]);
			attr(a1, "class", "page-link svelte-1dhwyyn");
			attr(a1, "aria-label", "Last");
			attr(li1, "class", "page-item disabled");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a0_href_value !== (a0_href_value = "/blog/" + (/*currentPage*/ ctx[0] + 1))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*totalPages*/ 2 && a1_href_value !== (a1_href_value = "/blog/" + /*totalPages*/ ctx[1])) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

// (28:4) {#if (currentPage + 1) <= totalPages}
function create_if_block(ctx) {
	let li0;
	let a0;
	let span0;
	let t0;
	let a0_href_value;
	let t1;
	let li1;
	let a1;
	let span1;
	let t2;
	let a1_href_value;

	return {
		c() {
			li0 = element("li");
			a0 = element("a");
			span0 = element("span");
			t0 = text("»");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			span1 = element("span");
			t2 = text("»»");
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { "aria-hidden": true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "»");
			span0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, "»»");
			span1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "aria-hidden", "true");
			attr(a0, "href", a0_href_value = "/blog/" + (/*currentPage*/ ctx[0] + 1));
			attr(a0, "class", "page-link svelte-1dhwyyn");
			attr(a0, "aria-label", "Next");
			attr(li0, "class", "page-item");
			attr(span1, "aria-hidden", "true");
			attr(a1, "href", a1_href_value = "/blog/" + /*totalPages*/ ctx[1]);
			attr(a1, "class", "page-link svelte-1dhwyyn");
			attr(a1, "aria-label", "Last");
			attr(li1, "class", "page-item");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, a0);
			append(a0, span0);
			append(span0, t0);
			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, a1);
			append(a1, span1);
			append(span1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*currentPage*/ 1 && a0_href_value !== (a0_href_value = "/blog/" + (/*currentPage*/ ctx[0] + 1))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*totalPages*/ 2 && a1_href_value !== (a1_href_value = "/blog/" + /*totalPages*/ ctx[1])) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
		}
	};
}

function create_fragment(ctx) {
	let ul;
	let t0;
	let t1;

	function select_block_type(ctx, dirty) {
		if (/*currentPage*/ ctx[0] - 1 > 0) return create_if_block_2;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let each_value = Array(/*totalPages*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	function select_block_type_2(ctx, dirty) {
		if (/*currentPage*/ ctx[0] + 1 <= /*totalPages*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block1 = current_block_type_1(ctx);

	return {
		c() {
			ul = element("ul");
			if_block0.c();
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			if_block1.c();
			this.h();
		},
		l(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if_block0.l(ul_nodes);
			t0 = claim_space(ul_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			t1 = claim_space(ul_nodes);
			if_block1.l(ul_nodes);
			ul_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(ul, "class", "pagination svelte-1dhwyyn");
		},
		m(target, anchor) {
			insert(target, ul, anchor);
			if_block0.m(ul, null);
			append(ul, t0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append(ul, t1);
			if_block1.m(ul, null);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(ul, t0);
				}
			}

			if (dirty & /*currentPage, totalPages*/ 3) {
				each_value = Array(/*totalPages*/ ctx[1]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, t1);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx, dirty)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(ul, null);
				}
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(ul);
			if_block0.d();
			destroy_each(each_blocks, detaching);
			if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { currentPage } = $$props, { totalPages } = $$props;

	$$self.$$set = $$props => {
		if ("currentPage" in $$props) $$invalidate(0, currentPage = $$props.currentPage);
		if ("totalPages" in $$props) $$invalidate(1, totalPages = $$props.totalPages);
	};

	return [currentPage, totalPages];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { currentPage: 0, totalPages: 1 });
	}
}

export default Component;