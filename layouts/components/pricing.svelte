<script>
    export let items;
</script>
<section class="section">
    <div class="container pricing-container">
      <div class="row justify-content-center align-items-center">

        {#each items as item, i}
        <div class="col-lg-4 {item.wrapper_classes}">
          <div class="card shadow{item.card_classes}">
            <div class="card-body text-center py-5">
              <h3 class="mb-4">{item.title}</h3>
              <span class="price">{item.price}</span><span>/{item.interval}</span>
              <p class="lead">{item.body}</p>
              <ul class="list-unstyled mb-5">
                {#each item.features as feature}
                    <li>{feature}</li>
                {/each}
              </ul>
              {#if i == 1}
                <a href="{item.link.url}" class="btn btn-primary">{item.link.title}</a>
              {:else}
                <a href="{item.link.url}" class="btn btn-outline-primary">{item.link.title}</a>
              {/if}
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
      .shadow-lg {
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
      }
      .col-recommended {
        margin: -2rem -1.5rem;
        z-index: 1;
      }
  </style>