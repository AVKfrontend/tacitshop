<template>
  <section class="slider">
    <img ref="imageElement" :src="currentImgPath" alt="" class="slider__img">
    <div class="slider__overley">
      <button @click="slideChange('')" class="slider__rigth" type="button">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="30.000000pt"
          viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#9AA6B9" stroke="none">
            <path
              d="M0 150 l0 -150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 -150z m219 93 c3 -2 -15 -24 -39 -48 l-44 -45 43 -44 c41 -42 43 -46 27 -62 -17 -16 -21 -14 -79 44 l-62 62 60 60 c49 49 61 57 74 48 9 -7 18 -14 20 -15z" />
          </g>
        </svg>
      </button>
      <button @click="slideChange(' ')" class="slider__left" type="button">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="30.000000pt"
          viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#9AA6B9" stroke="none">
            <path
              d="M0 150 l0 -150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 -150z m219 93 c3 -2 -15 -24 -39 -48 l-44 -45 43 -44 c41 -42 43 -46 27 -62 -17 -16 -21 -14 -79 44 l-62 62 60 60 c49 49 61 57 74 48 9 -7 18 -14 20 -15z" />
          </g>
        </svg>
      </button>
      <div class="slider__textbox">
        <h2 class="title section__title slider__title">PERSONAL <span>ASSISTENT</span></h2>
        <p class="slider__text">You don’t know what to choose? We will help you.</p>
        <NuxtLink to="/shop" class="btn slider__btn">view collection</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExtendedElement } from 'utils/interfaces';
import { sliderImgPaths } from '~/src/slider_img';

const transitionDuration = 200 // duration of transition in CSS

const imageElement: Ref<ExtendedElement | null> = ref(null)
const currentImgIndx: Ref<number> = ref(0);

const currentImgPath = computed(() => (sliderImgPaths[currentImgIndx.value]))

async function slideChange(direction: string): Promise<void> {
  if (!imageElement.value) return
  imageElement.value.style.opacity = '0'
  await new Promise((resolve) => setTimeout(resolve, transitionDuration))
  direction ? nextSlide() : previousSlide()
  await nextTick()
  imageElement.value.style.opacity = '1'
}
function nextSlide() {
  currentImgIndx.value = (currentImgIndx.value === sliderImgPaths.length - 1) ? 0 : currentImgIndx.value + 1
}
function previousSlide() {
  currentImgIndx.value = (currentImgIndx.value === 0) ? sliderImgPaths.length - 1 : currentImgIndx.value - 1
}


</script>
