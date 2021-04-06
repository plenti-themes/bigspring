<script>
    export let items;
</script>

<section class="section">
  <div class="container">
    {#each items as item}
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="content">
          <h4>{item.title}</h4>
          {#each item.paragraphs as p}
            <p>{@html p}</p>
          {/each}
        </div>
      </div>
    </div>
    {/each}
  </div>
</section>