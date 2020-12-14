<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';

  export let route, content, allContent;
</script>

<html lang="en">
<Head title={content.filename} />
<body>
  <header class="navigation">
    <div class="container">
      <Nav />
    </div>
  </header>
  <svelte:component this={route} {...content.fields} {allContent} />
  <Footer />
</body>
</html>