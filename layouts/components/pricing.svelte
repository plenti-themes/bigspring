<script>
    export let items;
</script>
<section class="section">
    <div class="container pricing-container">
      <div class="row justify-content-center align-items-center">

        {#each items as item}
        <div class="col-lg-4 mb-5 mb-lg-0 px-3 pr-3 px-lg-0">
          <div class="card shadow">
            <div class="card-body text-center py-5">
              <h3 class="mb-4">{item.title}</h3>
              <span class="price">{item.price}</span><span>/{item.interval}</span>
              <p class="lead">{item.body}</p>
              <ul class="list-unstyled mb-5">
                {#each item.features as feature}
                    <li>{feature}</li>
                {/each}
              </ul>
              <a href="{item.link.url}" class="btn btn-outline-primary">{item.link.title}</a>
            </div>
          </div>          
        </div>
        {/each}

      </div>
    </div>
  </section>

  <style>
      .price {
        font-size: 50px;
        color: #222;
      }
  </style>