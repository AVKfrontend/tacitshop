<template>
  <swiper :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :speed="600" :parallax="true" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">
    <div slot="container-start" class="parallax-bg" :style="{
      'background-image':
        'url(/img/skate_sneaker_480x300.webp)',
    }" data-swiper-parallax="-23%"></div>
    <swiper-slide>
      <IntroArea>
        <template #home>
          <h1 class="title">fashion is nothing</h1>
          <h2 class="title utp__title">but <span>mischief</span></h2>
          <NuxtLink to="/shop" class="btn">shop now</NuxtLink>
        </template>
      </IntroArea>
    </swiper-slide>
    <swiper-slide>
      <IntroArea>
        <template #home>
          <h1 class="title">fashion is nothing</h1>
          <h2 class="title utp__title"><span>but</span> mischief</h2>
          <NuxtLink to="/shop" class="btn">shop now</NuxtLink>
        </template>
      </IntroArea>
    </swiper-slide>
    <swiper-slide>
      <IntroArea>
        <template #home>
          <h1 class="title">fashion is nothing</h1>
          <h2 class="title utp__title">but <span>mischief</span></h2>
          <NuxtLink to="/shop" class="btn">shop now</NuxtLink>
        </template>
      </IntroArea>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '~/src/css/swiper-style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
};
</script>