<script>
    export let items;
</script>
<section class="section">
    <div class="container">
      <div class="row">
      {#each items as item}
        <div class="col-md-6 mb-4">
            <div class="p-5 shadow rounded-lg">
            <h3 class="mb-4 check-mark">{item.question}</h3>
            <p>{item.answer}</p>
            </div>
        </div>
      {/each}
      </div>
    </div>
  </section>