<script>
  export let title, env;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ title }</title>
  <base href="{ env.local ? "/" : env.baseurl }">

  <script type="module" src="/spa/ejected/main.js" />

  <link rel="stylesheet" href="/assets/themify-icons/themify-icons.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel='stylesheet' href='/spa/bundle.css'>
</head>
