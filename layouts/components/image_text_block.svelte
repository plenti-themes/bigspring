<script>
  export let title, body, link, image, background;

  let textPos = 1;
  let textPosMD = 2;
  let imgPos = 2;
  let imgPosMD = 1;
  if (image.position == "right") {
    textPos = 2;
    textPosMD = 1;
    imgPos = 1;
    imgPosMD = 2;
  }

  let backgroundClass = "";
  if (background == "blue") {
    backgroundClass = " bg-light";
  }

</script>
<section class="section{backgroundClass}">
  <div class="container">
    <div class="row align-items-center">

      <div class="col-md-6 order-{textPos} order-md-{textPosMD}">
        <h2 class="section-title">{title}</h2>
        <p>{body}</p>
        <a href="{link.url}" class="btn-link">{link.title} <i class="ti-arrow-right"></i></a>
      </div>

      <div class="col-md-6 order-{imgPos} order-md-{imgPosMD} mb-4 mb-md-0">
        <div>
          <img src="{image.url}" alt="{image.alt}" class="img-fluid">
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .btn-link {
    color: #0aa8a7;
  }
  .btn-link {
    font-weight: 400;
    text-decoration: none;
  }
  .ti-arrow-right {
    transition: padding-left ease .25s;
  }
  .btn-link:hover {
    color: #1e8685;
  }
  .btn-link:hover .ti-arrow-right {
    padding-left: 5px;
  }
</style>
