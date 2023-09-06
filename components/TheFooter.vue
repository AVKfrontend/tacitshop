<template>
  <footer id="footer">
    <section class="partners">
      <div class="container">
        <div class="partners__imgs">
          <div class="partners__imgs-item">
            <img src="/img/6.png" alt="partner6">
          </div>
          <div class="partners__imgs-item">
            <img src="/img/5.png" alt="partner5">
          </div>
          <div class="partners__imgs-item">
            <img src="/img/4.png" alt="partner4">
          </div>
          <div class="partners__imgs-item">
            <img src="/img/3.png" alt="partner3">
          </div>
          <div class="partners__imgs-item">
            <img src="/img/2.png" alt="partner2">
          </div>
          <div class="partners__imgs-item">
            <img src="/img/1.png" alt="partner1">
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="footer">
        <div class="footer__box footer__about">
          <NuxtLink to="/">
            <div class="logo">TacitShop</div>
          </NuxtLink>
          <p>Most-loved online fashion store featuring new deals.</p>
          <p>When it comes to trend, we all love being in it — Seeping every bit of it in TacitShop.com</p>
        </div>
        <div class="footer__links">
          <div class="footer__box footer__support">
            <h3 class="title footer__title">support</h3>
            <NuxtLink to="#">How to Order?</NuxtLink>
            <NuxtLink to="#">Payments</NuxtLink>
            <NuxtLink to="#">Assistance</NuxtLink>
            <NuxtLink to="#">Delivery</NuxtLink>
          </div>
          <div class="footer__box footer__duties">
            <h3 class="title footer__title">duties</h3>
            <NuxtLink to="#">Terms and Conditions</NuxtLink>
            <NuxtLink to="#">Shop Policy</NuxtLink>
            <NuxtLink to="#">Contact Us</NuxtLink>
          </div>
        </div>
        <div class="footer__box footer__rest">
          <h3 class="title footer__title">instagram feed</h3>
          <div class="footer__feed">
            <div class="footer__feed-item"></div>
            <div class="footer__feed-item"></div>
            <div class="footer__feed-item"></div>
            <div class="footer__feed-item"></div>
          </div>
          <hr class="line" noshade>
          <div class="footer__payvar">
            <img src="/img/visa.png" alt="visa">
            <img src="/img/pay-pal.png" alt="pay-pal">
            <img src="/img/mastercard.png" alt="mastercard">
            <img src="/img/citi.png" alt="citi">
            <img src="/img/amazon-payments.png" alt="amazon-payments">
          </div>
          <hr class="line" noshade>
        </div>
      </section>
    </div>


    <div class="social">
      <div class="social__box">
        <!-- noindex -->
        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
          <img src="/img/facebook-logo.png" alt="facebook">
        </a>
        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
          <img src="/img/twitter-bird-logo.png" alt="twitter">
        </a>
        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
          <img src="/img/linkedin-logo.png" alt="linkedin">
        </a>
        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
          <img src="/img/big-youtube-logo.png" alt="youtube">
        </a>
        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
          <img src="/img/google-plus.png" alt="google">
        </a>
        <!-- /noindex -->
      </div>
      <hr class="line" noshade>
    </div>

    <div class="coloring">
      <section class="post-footer">
        <div class="rigths">
          Developed :
          <a href="http://oleksandr-kuk.pp.ua/" rel="nofollow noopener noreferrer" target="_blank">AVKfrontend</a>
        </div>
        <div class="rigths">
          Created in :
          <a href="https://nuxt.com/" rel="nofollow noopener noreferrer" target="_blank">Nuxt 3</a>
          on
          <a href="https://ua.vuejs.org/" rel="nofollow noopener noreferrer" target="_blank">Vue 3</a>
        </div>
      </section>
    </div>
  </footer>
</template>
