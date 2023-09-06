<template>
  <div class="shop__info-wrup">
    <h3 class="shop__title">{{ prod.title }}</h3>
    <!-- <p class="shop__info">{{ prod.description }}</p> -->
  </div>
  <div class="shop__img-wrup">
    <span class="shop__price">{{ prod.price }} USD</span>
    <img :src="prod.thumbnail" :alt="`Img of ${prod.title}`" class="shop__img" loading="lazy" decoding="async" />
  </div>
  <NuxtLink :to="`/shop/${prod.id}`" :prod_id="prod.id" class="btn shop__btn details">
    <!-- :to="`/product#p${prod.id}`" -->
    <!-- :to="`/product?p=${prod.id}`" -->
    <span>See details</span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="24"
      viewBox="11 14 20 12">
      <image width="20" height="12"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAYAAACIhL/AAAAFMElEQVRIS5XX6a9dUxjHcW2podTYUlOPGmoqFTNB25jaNF4QCRH+BU38AeI17/gHlBCJIRFCDYl5poZqY6he81BzDS1afp+T9ci+x77ttZJv9jn7rPWsZ17rTNnp/41ZmX5cOCmcGo4Jh4T9wu5h5yburzw3hx/C5+H9sDq8Fd4N30x22yk7mDg9v88Ie4f9w8HhiDAIcwOFdwvmUa7k/Z3PW8Mf4ffwXfg4jIWPwhft3U95/tLm9aqyIwX3zap5gcfOCkc1ZXdpQnnos+C5JfCcQVlKW8/DngzxO6XWh5fC2+3z973a5WWfgt7tGQ4Kg3B8ODGcHPYJmwKBwlTw0tSGvcqDwn5A4OkDgyjMDD+Gd4JwY0P4KvCmtRiOUQV9t9HR4eJwWjgyCPOvTdCrefIAr/ESDx0WBoEBZPDSJx14l2KicUaQJtKGYZR7LTwaPghSY1sYjlKQUsIiFIeHU8JFTaB5cshiIXk5fBsoIw9514a8xBDDxuaMtTWUIEMxnRlEY37g3WnB74+HNwLDROjPsK0U5Im9wsJwReA54RDCp4Pqs/DLtvjQPJe3eQwi59PwcxAe3vHekKOvhAebDHKFm9fl9uIgnShFwfvDm0EUthC8R2AJi85pGxNgQwtWBZ7jEcMGvHBNODZQSitZGzYGCpIndynB09rMHUFhkGOOaC0IlwYti0HWPxJeDOt8pyAhJ4QrA4t2DXLsoUBByTu0JmgzZ4fzwqLwW7g3yCEhFFpDxVJMJK4KovNMeLbBIFHjad6TUsuCLqHS14T7wloKXtt+uKQtUFXPhYeDvOsOFl8dtByCee22wDNyRoIb5Mot864P1vEOz9wZRKQ7KLY0iKC5qvmJsJ4gSV+lTSGK8Zx8M7E7eO+GIHxykmJDS4PK+7c95DPZ5slpGw/avFvyfGFEbrU1NUBRJ5ReO5UQQoVHniiIu4Ie1TcW5eWNQevhjafCY0FK9A3zdIMLwrlt3k1tXd/8SjX7MG7WqII2vHuSCvICg7anoL7XVdAxtz0FKaUWGETZ2d0QCxEvqqKJQixUFWJnKy9WiMedAM09Nry8eU+vVJk3h4lCrD+qBR1FsU6j4HVBKPyg2yuS50Nfkahy7UUuasyq7dam6LgTIO/IViQrgo31OTl7e9BXu0ORaDdVJE6tJ8MGQvSfci0FlL+cqmLpthnHmlw6PwiDc/meoM04X6vNkMHY0wODtJNqMdJC8+5rMxzFUE4SmXXdRq3p8ox+pFHrVULtjNQWFJKhCfOM9qTaKGbDYWMN1ajdGxnveNMdVgYpUXOqUatajVo/9pv9xjVqm4q3ZioUcsYCitRR5+jpHnU2vizwEMGGk0dD7x51zniGamUPBHnrJNJDrbPfkva9jjrz7Mfwzd3Lgr6j+1uos18YVKE5jqf32kJ55CbDgEGQFp42dmwaQm2DsSDfPgxfB15zTJLPw7NDXRY0ZrduRtRlYWsp2OQOlWF19S8eksBuKc5cbYI3PH3neQYV8o6MOp953YYU1ozrukUmZf0tIEsOa1dSwVH3n+tWKehpA8Lk4SDoR65UjqC6sPKok4ZXpIEz2boyuFpOXVjJco6rfAXDAIWgC4CSk7qwdhX1efTK7yJLSWGhFEXlnpDwRvfKz7sKxNWs7oo8U1d+kVB8vFYFOLp/75W/O2n0T5M2IzyarsuqvKNI/WEa9SCF/XFigHC7mFJI1XtHWa3KnN4xmoMTzav3QiXUkrz+ds7JZ2FjDM8aepnbDQWkgRPq9VB/PYVzUuMf2y5+3VX7hi0AAAAASUVORK5CYII="
        data-name="eye-outline" transform="translate(11 14)" />
    </svg>
  </NuxtLink>
  <button type="button" @:click="addToCart(prod.id as number)" class="btn shop__btn">
    <span>Add to card</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="40.033" height="40.033" viewBox="238 281 20.017 20.017">
      <path
        d="M256.441 295.286H243.46l-3.313-12.857H238V281h3.154l3.312 12.857h10.87l1.083-6.428H245.95V286h12.057l-1.566 9.286Zm-13.078 4.106a2.025 2.025 0 0 0 1.925 1.608 1.918 1.918 0 0 0 1.44-.667 2.227 2.227 0 0 0 .547-1.476 2.297 2.297 0 0 0-.062-.534 2.025 2.025 0 0 0-1.925-1.608 1.917 1.917 0 0 0-1.438.665 2.226 2.226 0 0 0-.55 1.477 2.299 2.299 0 0 0 .063.535Zm8.613 0A2.025 2.025 0 0 0 253.9 301a1.918 1.918 0 0 0 1.44-.667 2.227 2.227 0 0 0 .547-1.476 2.297 2.297 0 0 0-.062-.534 2.025 2.025 0 0 0-1.925-1.608 1.917 1.917 0 0 0-1.438.665 2.226 2.226 0 0 0-.55 1.477 2.299 2.299 0 0 0 .063.535Zm.6-6.963h-1.325v-3.572h1.325v3.572Zm-3.976 0h-1.325v-3.572h1.325v3.572Zm5.3 5.714a.675.675 0 0 0-.641.536.767.767 0 0 0-.02.178.742.742 0 0 0 .177.487.64.64 0 0 0 .485.227.675.675 0 0 0 .642-.54.767.767 0 0 0 .02-.174.743.743 0 0 0-.18-.49.64.64 0 0 0-.482-.224Zm-8.612 0a.675.675 0 0 0-.642.536.767.767 0 0 0-.02.178.742.742 0 0 0 .18.49.64.64 0 0 0 .482.224.675.675 0 0 0 .641-.535.766.766 0 0 0 .021-.179.743.743 0 0 0-.18-.49.64.64 0 0 0-.482-.224Z"
        fill="#15232d" fill-rule="evenodd" data-name="Shopping Cart" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { Product } from "~/utils/interfaces";

defineProps<{
  prod: Product,
}>()


</script>
