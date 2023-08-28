<template>
        <h1 class="title page-title">
          {{ titleText }}
        </h1>
</template>

<script setup>

defineProps ({
  titleText: String
}) 

const color = ref('yellow');
setInterval(chengeColor, 700);
function chengeColor() {
  if (color.value === 'yellow') color.value = 'blue'
  else color.value = 'yellow';
}
</script>


<style lang="scss">
.page-title {
  color: v-bind(color);

  padding: 4vw;
  transition: color 0.3s ease;
}
</style>