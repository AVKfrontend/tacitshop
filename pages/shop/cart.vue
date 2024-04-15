<template>
  <main>
    <intro-area>
      <template #page>
        <page-title title-text="Cart"></page-title>
      </template>
    </intro-area>
    <section class="cart">
      <div class="container">
        <div class="cart__subwrupper">
          <aside class="cart__asaid">
            <form action="#" class="cart__copoun" @submit="addingCopoun">
              <h3 class="cart__title">Copoun Code</h3>
              <input v-model="copounCode" type="text" name="copouncod" placeholder="#####">
              <button class="btn cart__copoun-btn" type="submit">Submit</button>
            </form>
          </aside>
          <div class="cart__wrupper">
            <div class="cart__list">
              <h3 class="cart__title">Product details</h3>
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody v-if="cart.list.length">
                  <tr v-for="position in cart.list">
                    <td>{{ position.product.title }}</td>
                    <td>{{ position.quantity }}</td>
                    <td>${{ position.product.price }}</td>
                    <td>${{ (position.product.price ?? 0) * position.quantity }}</td>
                    <td>
                      <button @click="deletingPruduct(position, $event)" class="cart__delete-product" type="button">
                        <img src="/img/delete-cross.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td>--//--</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <button class="cart__delete-product" type="button">
                        <img src="/img/delete-cross.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cart__total">
              <h3 class="cart__title">Order total</h3>
              <div class="cart__total-box">
                <ul>
                  <li>
                    <div class="cart__total-row">
                      <span class="cart__total-name">Subtotal</span>
                      <span class="cart__total-volue">${{ cartSum }}</span>
                    </div>
                    <div class="cart__total-line">
                      <hr class="line">
                    </div>
                  </li>
                  <li v-if="copounVolume">
                    <div class="cart__total-row">
                      <span class="cart__total-name">Copoun</span>
                      <span class="cart__total-volue">- ${{ copounVolume }}</span>
                    </div>
                    <div class="cart__total-line">
                      <hr class="line">
                    </div>
                  </li>
                  <li>
                    <div class="cart__total-row">
                      <span class="cart__total-name">Shipping</span>
                      <span v-if="shippingCost" class="cart__total-volue">${{ shippingCost }}</span>
                      <span v-else class="cart__total-volue">free</span>
                    </div>
                    <div class="cart__total-line">
                      <hr class="line">
                    </div>
                  </li>
                  <li>
                    <div class="cart__total-row">
                      <span class="cart__total-name">Total</span>
                      <span class="cart__total-volue">${{ cartTotal }}</span>
                    </div>
                  </li>
                </ul>
                <NuxtLink to="/shop" class="btn cart__return-btn">Continue shopping</NuxtLink>
                <NuxtLink to="#" class="btn cart__check-btn">Procced to checkout</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ChooseQuantity :class="{ 'cart__modal': !deletingModalIsOpen }" ref="choose"></ChooseQuantity>
  </main>
</template>

<script setup lang="ts">
import ChooseQuantity from '~/components/ChooseQuantity.vue'
import { CartInit, CartItem, Copoun } from 'utils/interfaces';

const freeShipingSum = 1000
const shippingPercent = 0.2

const cart: Ref<CartInit> = useCartStorage()

type CQ = InstanceType<typeof ChooseQuantity>
const choose: Ref<CQ | null> = ref(null)

const copounCode = ref('')
const copoun: Ref<Copoun> = ref({ volume: 0 })
const deletingModalIsOpen = ref(false)

const shippingCost = computed(() => {
  return (+cartSum.value < freeShipingSum) ? + (+cartSum.value * shippingPercent).toFixed(2) : 0
})
const cartTotal = computed(() => {
  return +shippingCost.value + +cartSum.value - copounVolume.value
})
const copounVolume = computed(() => copoun.value.volume)

async function addingCopoun(e: Event) {
  e.preventDefault()
  if (copounCode.value === "") return
  copoun.value = await getCopoun(copounCode.value)
}
async function deletingPruduct(item: CartItem, event: MouseEvent) {
  if (!choose.value) return
  const coordinates = {
    x: event.clientX,
    y: event.clientY
  }
  deletingModalIsOpen.value = true
  const deletingQuantity = await choose.value.chooseQuantity(item.quantity, coordinates) as number
  deletingModalIsOpen.value = false
  if (!!deletingQuantity) deleteFromCart(item.product.id, deletingQuantity)
}

onMounted(() => {
})
onUnmounted(() => {
})


</script>