<template>
  <header id="header">
    <div class="coloring">
      <div class="container">
        <div class="contacts">
          <div class="f-wrup">
            <svg class="contacts__img" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1030.000000pt"
              height="1280.000000pt" viewBox="0 0 1030.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M8646 12790 c-60 -16 -149 -67 -194 -113 -71 -72 -2120 -2778 -2157
							-2848 -100 -191 -80 -414 53 -578 19 -24 247 -213 506 -421 488 -391 506 -408
							555 -521 50 -114 66 -279 42 -430 -28 -171 -113 -399 -240 -644 -170 -327
							-201 -370 -1122 -1576 l-874 -1147 -225 -237 c-442 -467 -720 -700 -955 -801
							-87 -38 -93 -39 -205 -39 -123 0 -172 14 -246 70 -17 13 -201 233 -407 488
							-206 255 -390 476 -408 492 -163 138 -410 119 -560 -41 -53 -57 -2097 -2749
							-2136 -2813 -112 -186 -89 -448 55 -608 31 -35 842 -641 1021 -763 282 -192
							781 -290 1278 -250 1399 114 2984 1146 4542 2960 1197 1393 2177 2928 2733
							4280 351 853 541 1627 589 2400 49 785 -113 1575 -418 2037 -50 76 -821 973
							-876 1019 -61 52 -150 86 -235 90 -42 2 -94 -1 -116 -6z" />
              </g>
            </svg>
            <span class="contacts__tel">+38(019) 283 7465</span>
          </div>
          <div class="f-wrup">
            <svg class="contacts__img" version="1.0" xmlns="http://www.w3.org/2000/svg" width="120.000000pt"
              height="90.000000pt" viewBox="0 0 1280.000000 914.000000" preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,914.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1195 9129 c-510 -65 -953 -428 -1121 -921 -71 -209 -65 100 -70
							-3578 -2 -2270 0 -3345 7 -3410 26 -237 116 -468 257 -660 66 -91 204 -229
							290 -290 144 -103 334 -190 511 -232 85 -20 117 -21 2261 -29 1196 -5 3552 -8
							5235 -6 l3060 3 85 21 c137 34 207 60 335 123 409 202 684 594 744 1059 8 59
							11 1079 11 3445 -1 2774 -3 3371 -14 3416 -42 173 -109 327 -202 467 -71 107
							-203 246 -313 329 -88 67 -300 177 -399 208 -30 10 -95 27 -145 39 l-92 22
							-5185 1 c-2961 1 -5215 -2 -5255 -7z m7845 -3165 c-1678 -1678 -2471 -2465
							-2505 -2485 -69 -40 -150 -41 -217 -1 -29 17 -948 928 -2507 2485 l-2461 2457
							5072 0 5073 0 -2455 -2456z m3070 -1326 l-5 -3423 -22 -77 c-58 -204 -153
							-318 -326 -391 l-72 -30 -1727 1734 -1727 1734 1937 1938 c1065 1065 1939
							1937 1942 1937 3 0 3 -1540 0 -3422z m-9430 1487 l1905 -1905 -1747 -1747
							-1747 -1747 -62 29 c-123 59 -208 173 -246 330 -16 65 -18 301 -20 3508 -2
							1890 0 3437 4 3437 5 0 865 -857 1913 -1905z m3005 -3000 c451 -455 620 -619
							649 -631 50 -20 133 -20 182 1 28 11 207 184 634 610 l595 595 1503 -1503
							c826 -826 1502 -1504 1502 -1507 0 -3 -1964 -5 -4365 -5 -2401 0 -4365 2
							-4365 5 0 6 3043 3050 3050 3050 3 0 280 -276 615 -615z" />
              </g>
            </svg>
            <a href="mailto:noanswer@mail.com" class="contacts__mail">noanswer@mail.com</a>
          </div>
        </div>
        <div class="row">
          <div class="logo">TacitShop</div>
          <nav class="menu">
            <ul class="menu__list">
              <li v-for="but in pathsArray" class="menu__item" :class="{
                'menu__item--current': isCurrent(but.path),
                'menu__item--clik': isButtonDown,
              }" @mousedown="[(isButtonDown = true)]" @mouseup="[(isButtonDown = false)]">
                <NuxtLink :to="but.path">{{ but.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="header-cart">
            <NuxtLink to="/shop/cart" class="header-cart__btn">
              <img src="/img/bag-outline.png" alt="bag-outline">
              <span v-if="cartCount" class="header-cart__count">{{ cartCount }}</span>
            </NuxtLink>
            <span class="header-cart__sum">${{ cartSum }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { CartInit } from 'utils/interfaces';

useSeoMeta({
  title: 'Tacit Shop',
  description: 'Most-loved online fashion store featuring new deals',
})

const cart: Ref<CartInit> = useCartStorage()
// console.log(cart)

let isButtonDown: Ref<boolean> = ref(false);

const cartCount = computed(() => cart.value.list.length)

const pathsArray = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/shop", name: "Shop" },
  { id: 3, path: "/shop/cart", name: "Cart" },
];

const route = useRoute();
function isCurrent(currentPath: string): boolean {
  return (currentPath === route.path);
}

</script>
