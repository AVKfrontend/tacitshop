<template>
  <main>
    <intro-area>
      <template #page>
        <page-title title-text="Product"></page-title>
      </template>
    </intro-area>
    <section :id="`p${productId}`" class="product-hood">
      <div class="container">
        <div v-if="productId > 0" class="product-card">
          <div class="product-card__slider">
            <div @mouseenter="startMouseFollow" @mouseleave="stopMouseFollow" class="product-card__picture">
              <picture class="">
                <source :srcset="mainImg" media="(min-width: 900px)">
                <img :src="mainImg" alt="" class="product-card__img">
              </picture>
              <button @click="nextImg" class="product-card__rigth" type="button">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="20.000000pt"
                  viewBox="0 0 12.000000 20.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)" fill="#48689a" stroke="none">
                    <path
                      d="M14 179 c-3 -6 9 -26 27 -45 l33 -34 -34 -35 c-27 -28 -31 -38 -22 -47 10 -10 22 -2 59 35 l47 47 -44 45 c-47 47 -55 52 -66 34z" />
                  </g>
                </svg>
              </button>
              <button @click="previousImg" class="product-card__left" type="button">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="20.000000pt"
                  viewBox="0 0 12.000000 20.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)" fill="#48689a" stroke="none">
                    <path
                      d="M14 179 c-3 -6 9 -26 27 -45 l33 -34 -34 -35 c-27 -28 -31 -38 -22 -47 10 -10 22 -2 59 35 l47 47 -44 45 c-47 47 -55 52 -66 34z" />
                  </g>
                </svg>
              </button>
            </div>
            <ul class="product-card__items">
              <li v-for="(image, ind) of imgList" @click="imgChange(ind)" class="product-card__icon "
                :class="{ 'product-card__icon--activ': image === mainImg }">
                <img :src="image" alt="">
                <div class="product-card__blind"></div>
              </li>
            </ul>
          </div>
          <div class="product-card__summary">
            <h2 class="product-card__price">${{ currentProduct.price }}</h2>
            <h3 class="product-card__name">{{ currentProduct.title }}</h3>
            <div class="product-card__rating">
              <UiRating v-if="rating" :rating="(rating as number)" :star-color="ratingStarColor" />
            </div>
            <div class="product-card__line">
              <hr class="line" noshade>
            </div>
            <p class="product-card__description">
              {{ currentProduct.description }}
            </p>
            <div class="product-card__options">
              <div class="product-card__options-quantity">
                <button @click="quantity--" class="product-card__options-btn" type="button"><span>–</span></button>
                <input v-model="quantity" type="text" class="product-card__amount">
                <button @click="quantity++" class="product-card__options-btn" type="button"><span>+</span></button>
              </div>
              <div class="product-card__submitarea">
                <button @click="addToCart(productId, quantity)" class="product-card__submitarea-btn" type="button">Add
                  to
                  cart</button>
              </div>
            </div>
          </div>
        </div>
        <h2 v-else class="noproduct">Product #{{ productId }} not find</h2>
      </div>
    </section>
    <section class="product-details">
      <div class="coloring">
        <div class="container">
          <div class="product-details__container">
            <div class="product-details__buttons">
              <button @click="currentTub = CurrentTub.Description" class="product-details__btn "
                :class="{ 'product-details__btn--active': isDescription }" type=button>DESCRIPTION<span></span></button>
              <button @click="currentTub = CurrentTub.Details" class="product-details__btn"
                :class="{ 'product-details__btn--active': isDetails }" type=button>DETAILS<span></span></button>
              <button @click="currentTub = CurrentTub.History" class="product-details__btn"
                :class="{ 'product-details__btn--active': isHistory }" type=button>HISTORY<span></span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="product-details__container">
          <div class="product-details__wrupper">
            <div v-if="isDescription" class="product-details__description">
              {{ currentProduct.description }}
            </div>
            <div v-if="isDetails" class="product-details__details">
              <table>
                <tr>
                  <th>Alias</th>
                  <th>Description</th>
                </tr>
                <tbody>
                  <tr>
                    <td>Name : </td>
                    <td>{{ currentProduct.title }}</td>
                  </tr>
                  <tr>
                    <td>Price : </td>
                    <td>{{ currentProduct.price }} $</td>
                  </tr>
                  <tr>
                    <td>Brand : </td>
                    <td>{{ currentProduct.brand }}</td>
                  </tr>
                  <tr>
                    <td>Category : </td>
                    <td>{{ currentProduct.category }}</td>
                  </tr>
                  <tr>
                    <td>Rating : </td>
                    <td>{{ currentProduct.rating }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="isHistory" class="product-details__history">No data</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Product } from 'utils/interfaces';

enum CurrentTub {
  Description,
  Details,
  History
}
const imgScaleIndex = .2
const positionIndex = imgScaleIndex * (1 - imgScaleIndex)
const imgSizeIndex = 1 + imgScaleIndex

const ratingStarColor = '#48689A'
let hoverTarget: HTMLElement = document.createElement("DIV")

const productId = ref(-1)
const currentProduct: Ref<Product> = ref({ id: -1 })
const mainImgIndx = ref(0)
const imgList: Ref<Array<string>> = ref([])
const quantity = ref(1)
const currentTub: Ref<CurrentTub> = ref(CurrentTub.Description)
const imgTopIndex = ref(0)
const imgLeftIndex = ref(0)
const imgWidthIndex = ref(0)
const imgHeightIndex = ref(0)

const mainImg = computed(() => imgList.value[mainImgIndx.value])
const rating = computed(() => currentProduct.value.rating)
const isDescription = computed(() => currentTub.value === CurrentTub.Description)
const isDetails = computed(() => currentTub.value === CurrentTub.Details)
const isHistory = computed(() => currentTub.value === CurrentTub.History)
const imgTop = computed(() => (- imgTopIndex.value * positionIndex) + "px")
const imgLeft = computed(() => (- imgLeftIndex.value * positionIndex) + "px")
const imgWidth = computed(() => imgWidthIndex.value + "px")
const imgHeight = computed(() => imgHeightIndex.value + "px")


function getProductID() {
  const route = useRoute()
  return +route.params.id
}
async function setProduct(id: number) {
  if (id <= 0) return
  currentProduct.value = await getProduct(id)
  setImgList()
}
function setImgList() {
  imgList.value = currentProduct.value.images ? currentProduct.value.images : []//.slice(0, 3) 
}
function previousImg() {
  mainImgIndx.value = mainImgIndx.value === 0 ? imgList.value.length - 1 : mainImgIndx.value - 1
}
function nextImg() {
  mainImgIndx.value = mainImgIndx.value === imgList.value.length - 1 ? 0 : mainImgIndx.value + 1
}
function imgChange(ind: number) {
  mainImgIndx.value = ind
}
function productChange() {
  productId.value = getProductID()
  setProduct(productId.value)
}
function startMouseFollow(event: MouseEvent) {
  if (event.target) {
    hoverTarget = event.target as HTMLElement
    hoverTarget.addEventListener("mousemove", mouseFollow)
    imgWidthIndex.value = hoverTarget.offsetWidth * imgSizeIndex
    imgHeightIndex.value = hoverTarget.offsetHeight * imgSizeIndex
  }
}
function stopMouseFollow() {
  imgTopIndex.value = 0
  imgLeftIndex.value = 0
  imgWidthIndex.value = imgWidthIndex.value / imgSizeIndex
  imgHeightIndex.value = imgHeightIndex.value / imgSizeIndex
  hoverTarget.removeEventListener("mousemove", mouseFollow)
}
const mouseFollow = function (event: MouseEvent) {
  imgLeftIndex.value = event.offsetX
  imgTopIndex.value = event.offsetY
}

onMounted(() => {
  window.addEventListener('hashchange', productChange)
  productChange()
})
onUnmounted(() => window.removeEventListener('hashchange', productChange))


</script>

<style scoped lang="scss">
.product-card__picture:hover {
  img {
    top: v-bind(imgTop);
    left: v-bind(imgLeft);
    width: v-bind(imgWidth);
    height: v-bind(imgHeight);
  }
}
</style>