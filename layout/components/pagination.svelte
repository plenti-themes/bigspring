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