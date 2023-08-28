<template>
  <div class="rating-stars">
    <ul class="rating-stars__items">
      <li v-for="star of 5" class="rating-stars__item">
        <span class="rating-stars__star"></span>
        <div class="rating-stars__blind"></div>
      </li>
    </ul>
    <span>{{ props.rating }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  rating: number,
  starColor: string
}>()

const blindWidgth: ComputedRef<string> = computed(() => (props.rating / .07) + '%')
const colir = props.starColor

</script>

<style lang="scss">
$rating_star_color: v-bind(colir);

.rating-stars {
  display: flex;
  align-items: center;
  background-color: transparent;

  &__items {
    display: flex;
    margin-right: 0.5em;
    line-height: 0.77em;
  }

  &__item {
    position: relative;
  }

  &__star {

    &::before {
      content: "★";
      color: #ffffff;
      text-shadow: -1px 0px 1px $rating_star_color, 1px 0px 1px $rating_star_color, 0px -1px 1px $rating_star_color, 0px 1px 1px $rating_star_color;
    }
  }

  &__blind {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: v-bind(blindWidgth);
    overflow: hidden;

    &::before {
      content: "★";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      color: $rating_star_color;
    }
  }

}
</style>