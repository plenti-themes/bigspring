<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';

  export let layout, content, allContent, allLayouts, env;
</script>

<html lang="en">
  <Head title={content.filename} {env} {...content.fields} />
<body>
  <header class="navigation">
    <div class="container">
      <Nav />
    </div>
  </header>
  <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content} />
  <Footer />
</body>
</html>
