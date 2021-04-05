<script>
    export let title, desc, phone, email, address;
</script>
<section class="section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 mb-4 mb-lg-0">
        <form action="#" method="POST">
          <input type="text" class="form-control mb-3" id="name" name="name" placeholder="Your Name">
          <input type="email" class="form-control mb-3" id="mail" name="mail" placeholder="Your Email">
          <input type="text" class="form-control mb-3" id="subject" name="subject" placeholder="Subject">
          <textarea name="message" id="message" class="form-control mb-3" placeholder="Your Message"></textarea>
          <button type="submit" value="send" class="btn btn-primary">Send Now</button>
        </form>
     </div>
     <div class="col-lg-5 content">
       <h3 id="why-you-should-contact-us">{title}</h3>
       <p>{desc}</p>
       <ul>
          <li><strong>Phone: {phone}</strong></li>
          <li><strong>Mail: <a href="mailto:{email}">{email}</a></strong></li>
          <li><strong>Address: {address}</strong></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
.content ul {
    padding-left: 0;
    margin-bottom: 20px;
    list-style-type: none;
}
.content ul li {
    padding-left: 20px;
    position: relative;
    margin-bottom: 10px;
}
.content ul li::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #0aa8a7;
    left: 3px;
    top: 5px;
}
.content strong {
    font-weight: 600;
}
.content a {
    color: #777;
    border-bottom: 1px dotted #ececec;
    cursor: pointer;
    transition: .2s ease;
    text-decoration: none;
}
.content a:hover {
    color: #0aa8a7;
}
</style>