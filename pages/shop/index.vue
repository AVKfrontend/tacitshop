<template>
  <main>
    <IntroArea>
      <template #page>
        <page-title title-text="Shop"></page-title>
      </template>
    </IntroArea>
    <div class="shop-wrupper">
      <div class="container">
        <h3 class="title section-title">products list</h3>
        <fieldset class="pagination pagination--space-between">
          <label> Category:
            <select class="pagination__category" v-model="selectedCategory" @change="categoryChange">
              <option value="All" selected>All</option>
              <option v-for="cat of categories" :value="cat">{{ cat }}</option>
            </select>
          </label>
          <label> Shows
            <select v-model="onPage">
              <option v-for="number of numbersItemsOnPage" :value="number">{{ number }}</option>
            </select>
          </label>
        </fieldset>
        <hr class="line line--shop-start">
        <ul class="shop">
          <li v-for="prod of products" class="shop__item">
            <ProductRepresentation :prod="prod" />
          </li>
        </ul>
        <fieldset class="pagination">
          <button @click="page--" class="pagination__btn" :disabled="page <= 1">Prev</button>
          <button class="pagination__btn" disabled>{{ page }}</button>
          <button @click="page++" class="pagination__btn" :disabled="page >= maxPages">Next</button>
        </fieldset>
      </div>
      <hr class="line line--shop-end" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { paths } from "~/src/paths";
import { Product } from "~/utils/interfaces";

const runtimeConfig = useRuntimeConfig()

const numbersItemsOnPage: number[] = [2, 3, 4, 6, 8, 9, 10, 12, 16, 18, 20];


const products: Array<Product> = reactive([]);

const page: Ref<number> = ref(1);
const onPage: Ref<number> = ref(0);
const maxNumberOfProducts: Ref<number> = ref(1);
const selectedCategory: Ref<string> = ref('All');


const lastIndexOnPage = computed(() => page.value * onPage.value);
const lastIndexOnPreviousePage = computed(() => lastIndexOnPage.value - onPage.value);
const maxPages = computed(() => Math.ceil(maxNumberOfProducts.value / onPage.value));
const shopParams = computed(() => { return { 'selectedCategory': selectedCategory.value, 'onPage': onPage.value, 'page': page.value } });


const categories = await useFetch(runtimeConfig.public.baseURL + paths.categoriesPath).then((res) => res.data.value)

onMounted(() => {
  onPage.value = calculateAmount() * 2
  restoreShopParams()
  setProductsList()
})
onUnmounted(() => {
  clearShopParams()
})


async function setProductsList(): Promise<void> {
  const { total, productsArray } = await getProductsList(selectedCategory.value, onPage.value, lastIndexOnPreviousePage.value)
  updateMaxNumberOfProducts(total)
  if (page.value > maxPages.value) page.value = maxPages.value
  products.length = 0
  products.push(...productsArray)
}
function categoryChange(): void {
  setProductsList()
}
function updateMaxNumberOfProducts(total: number): void {
  if (maxNumberOfProducts.value !== total) maxNumberOfProducts.value = unref(total)
}
function saveShopParams(params: object) {
  localStorage.setItem('shopParams', JSON.stringify(params))
}
function restoreShopParams() {
  const params = localStorage.getItem('shopParams')
  if (params) {
    const restoredParams: { 'selectedCategory': string, 'page': number, 'onPage': number } = JSON.parse(params)
    for (let p in restoredParams) {
      if (p === 'selectedCategory') selectedCategory.value = restoredParams[p]
      if (p === 'page') page.value = restoredParams[p]
      if (p === 'onPage') onPage.value = restoredParams[p]
    }
  }
}
function clearShopParams() {
  localStorage.removeItem('shopParams')
}


watch(page, () => setProductsList())
watch(onPage, (newV, oldV) => {
  if (oldV !== 0) {
    const fp = oldV * page.value - oldV
    const np = (fp + newV) / newV
    page.value = newV < oldV ? Math.ceil(np) : Math.floor(np)
  }
  setProductsList()
})
watch(shopParams, (params) => saveShopParams(params))



</script>
