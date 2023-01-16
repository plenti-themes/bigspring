<script>
    export let title, body, image;
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <img src="{image.src}" alt="{image.alt}" class="img-fluid w-100 rounded mb-4">
        <h2 class="mb-4">{title}</h2>
        <p>{@html body}</p>
      </div>
    </div>
  </div>
</section>
