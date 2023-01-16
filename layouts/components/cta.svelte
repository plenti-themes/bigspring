<script>
  export let title, body, image, link;
</script>
<section class="section">
  <div class="container section shadow rounded-lg px-4">
    <div class="row align-items-center justify-content-center text-center text-md-left">
      <div class="col-lg-4 col-md-5 mb-4 mb-md-0">
        <img src="{image.url}" alt={image.alt} class="img-fluid">
      </div>
      <div class="col-lg-5 col-md-6">
        <h2 class="section-title">{title}</h2>
        <p class="mb-4">{body}</p>
    
        <a href="{link.url}" class="btn btn-primary">{link.title}</a>
    
      </div>
    </div>
  </div>
</section>
