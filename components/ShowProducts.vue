<template>
  <div class="container">
    <h2 class="title section-title">
      <slot name="title"></slot>
    </h2>
    <ul class="shop">
      <li v-for="prod of productsList" class="shop__item">
        <ProductRepresentation :prod="prod" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Product } from 'utils/interfaces';


defineProps<{
  productsList: Product[],
}>()


</script>
