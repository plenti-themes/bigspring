<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';

  export let layout, content, allContent, allLayouts, env, user, adminMenu;
</script>

<html lang="en">
  <Head title={content.filename} {env} {...content.fields} />
<body>
  {#if user && $user.isAuthenticated}
    <svelte:component this={adminMenu} {user} bind:content={content} />
  {/if}
  <main>
    <header class="navigation">
      <div class="container">
        <Nav />
      </div>
    </header>
    <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content} />
    <Footer />
  </main>
</body>
</html>
