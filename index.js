

import style from 'bootstrap/scss/bootstrap.scss';
console.log(style);
document.getElementById('root').innerHTML = `
<div class="${style['d-flex']} ${style['flex-column']} ${style['flex-md-row']} ${style['align-items-center']} ${style['p-3']} ${style['px-md-4']} ${style['mb-3']} ${style['bg-white']} ${style['border-bottom']} ${style['box-shadow']}">
  <h5 class="${style['my-0']} ${style['mr-md-auto']} ${style['font-weight-normal']}">Company name</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="${style['p-2']} ${style['text-dark']}" href="#">Features</a>
    <a class="${style['p-2']} ${style['text-dark']}" href="#">Enterprise</a>
    <a class="${style['p-2']} ${style['text-dark']}" href="#">Support</a>
    <a class="${style['p-2']} ${style['text-dark']}" href="#">Pricing</a>
  </nav>
  <a class="${style['btn']} ${style['btn-outline-primary']}" href="#">Sign up</a>
</div>

<div class="${style['pricing-header']} ${style['px-3']} ${style['py-3']} ${style['pt-md-5']} ${style['pb-md-4']} ${style['mx-auto']} ${style['text-center']}">
  <h1 class="${style['display-4']}">Pricing</h1>
  <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
</div>

<div class="${style['container']}">
  <div class="${style['card-deck']} ${style['mb-3']} ${style['text-center']}">
    <div class="${style['card']} ${style['mb-4']} ${style['box-shadow']}">
      <div class="${style['card-header']}">
        <h4 class="${style['my-0']} ${style['font-weight-normal']}">Free</h4>
      </div>
      <div class="${style['card-body']}">
        <h1 class="${style['card-title']} ${style['pricing-card-title']}">$0 <small class="${style['text-muted']}">/ mo</small></h1>
        <ul class="${style['list-unstyled']} ${style['mt-3']} ${style['mb-4']}">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="${style['btn']} ${style['btn-lg']} ${style['btn-block']} ${style['btn-outline-primary']}">Sign up for free</button>
      </div>
    </div>
    <div class="${style['card']} ${style['mb-4']} ${style['box-shadow']}">
      <div class="${style['card-header']}">
        <h4 class="${style['my-0']} ${style['font-weight-normal']}">Pro</h4>
      </div>
      <div class="${style['card-body']}">
        <h1 class="${style['card-title']} ${style['pricing-card-title']}">$15 <small class="${style['text-muted']}">/ mo</small></h1>
        <ul class="${style['list-unstyled']} ${style['mt-3']} ${style['mb-4']}">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="${style['btn']} ${style['btn-lg']} ${style['btn-block']} btn-primary">Get started</button>
      </div>
    </div>
    <div class="${style['card']} ${style['mb-4']} ${style['box-shadow']}">
      <div class="${style['card-header']}">
        <h4 class="${style['my-0']} ${style['font-weight-normal']}">Enterprise</h4>
      </div>
      <div class="${style['card-body']}">
        <h1 class="${style['card-title']} ${style['pricing-card-title']}">$29 <small class="${style['text-muted']}">/ mo</small></h1>
        <ul class="${style['list-unstyled']} ${style['mt-3']} ${style['mb-4']}">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="${style['btn']} ${style['btn-lg']} ${style['btn-block']} btn-primary">Contact us</button>
      </div>
    </div>
  </div>

  <footer class="${style['pt-4']} ${style['my-md-5']} ${style['pt-md-5']} border-top">
    <div class="${style['row']}">
      <div class="${style['col-12']} ${style['col-md']}">
        <img class="${style['mb-2']}" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
        <small class="${style['d-block']} ${style['mb-3']} ${style['text-muted']}">&copy; 2017-2018</small>
      </div>
      <div class="${style['col-6']} ${style['col-md']}">
        <h5>Features</h5>
        <ul class="${style['list-unstyled']} ${style['text-small']}">
          <li><a class="${style['text-muted']}" href="#">Cool stuff</a></li>
          <li><a class="${style['text-muted']}" href="#">Random feature</a></li>
          <li><a class="${style['text-muted']}" href="#">Team feature</a></li>
          <li><a class="${style['text-muted']}" href="#">Stuff for developers</a></li>
          <li><a class="${style['text-muted']}" href="#">Another one</a></li>
          <li><a class="${style['text-muted']}" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="${style['col-6']} ${style['col-md']}">
        <h5>Resources</h5>
        <ul class="${style['list-unstyled']} ${style['text-small']}">
          <li><a class="${style['text-muted']}" href="#">Resource</a></li>
          <li><a class="${style['text-muted']}" href="#">Resource name</a></li>
          <li><a class="${style['text-muted']}" href="#">Another resource</a></li>
          <li><a class="${style['text-muted']}" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="${style['col-6']} ${style['col-md']}">
        <h5>About</h5>
        <ul class="${style['list-unstyled']} ${style['text-small']}">
          <li><a class="${style['text-muted']}" href="#">Team</a></li>
          <li><a class="${style['text-muted']}" href="#">Locations</a></li>
          <li><a class="${style['text-muted']}" href="#">Privacy</a></li>
          <li><a class="${style['text-muted']}" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
`;
