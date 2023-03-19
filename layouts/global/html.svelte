<script>
  import { onMount } from 'svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import Login from './login.svelte';

  export let layout, content, allContent, allLayouts, env, user;

  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });
</script>

<html lang="en">
  <Head title={content.filename} {env} {...content.fields} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} {user} bind:content={content} />
    {/if}
    <Login bind:hash {user} />
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
