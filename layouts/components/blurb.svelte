<script>
    export let title, paragraphs;
</script>

    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="content">
<h4>{title}</h4>

{#each paragraphs as p}
    <p>{@html p}</p>
{/each}

</div>
</div>
</div>
</div>