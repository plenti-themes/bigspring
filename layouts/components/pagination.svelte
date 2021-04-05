<script>
    export let currentPage, totalPages;
</script>

<ul class="pagination">
    {#if (currentPage - 1) > 0}
    <li class="page-item">
        <a href="/blog" class="page-link" aria-label="First"><span aria-hidden="true">««</span></a>
    </li>
    <li class="page-item">
        <a href="/blog/{currentPage - 1}" class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a>
    </li>
    {:else}
    <li class="page-item disabled">
        <a href="/blog" class="page-link" aria-label="First"><span aria-hidden="true">««</span></a>
    </li>
    <li class="page-item disabled">
        <a href="/blog/{currentPage - 1}" class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a>
    </li>
    {/if}
    {#each Array(totalPages) as _, i}
        {#if currentPage == i+1}
            <li class="page-item active"><a class="page-link" href="/blog/{i+1}">{i+1}</a></li>
        {:else}
            <li class="page-item"><a class="page-link" href="/blog/{i+1}">{i+1}</a></li>
        {/if}
    {/each}
    {#if (currentPage + 1) <= totalPages}
    <li class="page-item">
        <a href="/blog/{currentPage + 1}" class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a>
    </li>
    <li class="page-item">
        <a href="/blog/{totalPages}" class="page-link" aria-label="Last"><span aria-hidden="true">»»</span></a>
    </li>
    {:else}
    <li class="page-item disabled">
        <a href="/blog/{currentPage + 1}" class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a>
    </li>
    <li class="page-item disabled">
        <a href="/blog/{totalPages}" class="page-link" aria-label="Last"><span aria-hidden="true">»»</span></a>
    </li>
    {/if}
</ul>

<style>
  .pagination {
    margin-top: 30px;
    justify-content: center;
  }
  .pagination .page-item:first-child .page-link, .pagination .page-item:last-child .page-link {
    border-radius: 5px;
  }
  .pagination .page-item .page-link {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: #edf6f5;
    text-align: center;
    padding: 0;
    margin-right: 10px;
    border: 0;
    color: #777;
  }
  .pagination .page-item.active .page-link {
    background: #0aa8a7;
    color: #fff;
  }
  .pagination .page-item .page-link:hover {
    background: #0aa8a7;
    color: #fff;
  }
</style>