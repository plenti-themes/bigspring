<script>
  import Pagination from '../components/pagination.svelte';
  export let title, allContent, content;

  $: currentPage = content.pager;
  let postsPerPage = 3;
  let allPosts = allContent.filter(content => content.type == "posts");
  let totalPosts = allPosts.length;
  let totalPages = Math.ceil(totalPosts / postsPerPage);
  $: postRangeHigh = currentPage * postsPerPage;
  $: postRangeLow = postRangeHigh - postsPerPage;
</script>

<section class="section pb-0">
  <div class="container text-center">
    <h1 class="display-3">{title}</h1>    
  </div>
</section>
<section>
  <div class="container">
    <div class="row">

      {#each allContent.filter(content => content.fields?.featured) as post}
      <div class="col-12 mb-5 pb-5">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="assets/{post.fields.image.src}" alt="{post.fields.image.alt}" class="img-fluid rounded-lg w-100">
          </div>
          <div class="col-md-6">
            <h2><a href="{post.path}" class="post-title">{post.fields.title}</a></h2>
            <p class="card-text">{post.fields.body.substring(0, 175).replace(/(<([^>]+)>)/gi, "")}</p>
            <a href="{post.path}" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/each}
      
      {#each allPosts as post, i}
        {#if i >= postRangeLow && i < postRangeHigh}
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card border-0">
                <img src="assets/{post.fields.image.src}" alt="{post.fields.image.alt}" class="card-img rounded-lg mb-4">
                <div class="card-body p-0">
                    <h3><a href="{post.path}" class="post-title">{post.fields.title}</a></h3>
                    <p class="card-text">{post.fields.body.substring(0, 175).replace(/(<([^>]+)>)/gi, "")}</p>
                    <a href="{post.path}" class="btn btn-primary btn-sm">Read More</a>
                </div>
                </div>
            </div>
        {/if}
      {/each}
      
      <div class="col-12">
        <Pagination {currentPage} {totalPages} />
      </div>
    </div>
  </div>
</section>

<style>
  .display-3 {
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  a.post-title {
    color: #222;
    display: block;
  }
  a, a:hover, a:focus {
    text-decoration: none;
  }
  a.post-title:hover {
    color: #0aa8a7;
  }
</style>
