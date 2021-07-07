<style>
  :global(h1), :global(.h1), :global(h2), :global(.h2), :global(h3), :global(.h3), :global(h4), :global(.h4), :global(h5), :global(.h5), :global(h6), :global(.h6) {
    color: #222;
    font-family: lato,sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }
  :global(h4), :global(.h4) {
    font-size: 20px;
  }
  :global(body) {
    color: #777;
  }
  :global(.section) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  :global(.bg-light) {
    background-color: #edf6f5!important;
  }
  :global(p), :global(.paragraph) {
    font-weight: 400;
    color: #777;
    font-size: 16px;
    line-height: 1.7;
    font-family: lato,sans-serif;
  }
  :global(.btn-primary) {
    background-color: #0aa8a7;
    color: #fff;
    border-color: #0aa8a7;
  }
  :global(.btn-sm) {
    padding: 12px 30px;
    font-size: 15px;
  }
  :global(.btn) {
    font-size: 16px;
    font-family: lato,sans-serif;
    font-weight: 600;
    text-transform: capitalize;
    padding: 15px 30px;
    border-radius: 30px;
    border: 0;
    position: relative;
    z-index: 1;
    transition: .2s ease;
    white-space: nowrap;
  }
  :global(.btn-primary:active), :global(.btn-primary:hover), :global(.btn-primary.focus), :global(.btn-primary.active) {
    background-color: #0aa8a7!important;
    border-color: #0aa8a7!important;
  }
  :global(.shadow), :global(.feature-card:hover), :global(.btn:hover), :global(.btn:active), :global(.btn:focus) {
    box-shadow: 0 12px 24px -6px rgba(45,67,121,.1)!important;
  }
  :global(.btn:hover::before), :global(.btn:active::before), :global(.btn:focus::before) {
    height: 110%;
    width: 110%;
  }
  :global(.btn::before) {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    border-radius: inherit;
    transition: inherit;
    background-color: inherit;
    border: 1px solid transparent;
  }
  :global(.btn-outline-primary::before) {
    border-color: #0aa8a7;
  }
  :global(.btn-outline-primary) {
    background-color: initial;
    color: #222;
    border-color: transparent;
  }
  :global(.btn:hover::before), :global(.btn:active::before), :global(.btn:focus::before) {
    height: 110%;
    width: 110%;
  }
  :global(.btn-outline-primary:active), :global(.btn-outline-primary:hover), :global(.btn-outline-primary.focus), :global(.btn-outline-primary.active) {
    background-color: initial !important;
    border-color: #0aa8a7 !important;
    color: #0aa8a7;
  }
  :global(a), :global(a:hover), :global(a:focus) {
    text-decoration: none;
  }
  :global(a), :global(button), :global(select) {
    cursor: pointer;
    transition: .2s ease;
  }
</style>
