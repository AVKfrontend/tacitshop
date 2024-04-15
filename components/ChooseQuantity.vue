<template>
  <div class="modal">
    <p class="modal__question">Do you really want to delete?</p>
    <button @click="hendler(total)" class="btn" type="button">Yes</button>
    <button v-if="!isQuantityOne" @click="hendler(1)" class="btn" type="button">1 piece</button>
    <button @click="hendler(0)" class="btn" type="button">Cancel</button>
  </div>
</template>

<script setup lang="ts">
import { Coordinate } from "~/utils/types";

let choosed: ((value: number) => void) | null = null

let total = ref(0)
const coordinates = ref({ x: -1000, y: 0 })

const cssTop = computed(() => coordinates.value.y + 'px')
const cssLeft = computed(() => coordinates.value.x - 200 + 'px')
const isQuantityOne = computed(() => total.value < 2)

function chooseQuantity(totalQuantity: number, coord: Coordinate): Promise<number | unknown> {
  setCoordinates(coord)
  coordinates.value = coord
  document.addEventListener('keydown', keyHendler)
  const userChoose = new Promise((resolve) => {
    total.value = totalQuantity
    choosed = resolve
  })
  return userChoose
}
function hendler(quantity: number): void {
  if (typeof (choosed) === 'function') choosed(quantity)
  unsetCoordinates()
  document.removeEventListener('keydown', keyHendler)
}
function setCoordinates(coord: Coordinate) {
  coordinates.value = coord
}
function unsetCoordinates() {
  coordinates.value = { x: -1000, y: 0 }
}
function keyHendler(event: KeyboardEvent): void {
  if (event.key !== 'Escape') return
  hendler(0)
}

defineExpose({
  chooseQuantity,
})

</script>

<style>
.modal {
  position: fixed;
  left: v-bind(cssLeft);
  top: v-bind(cssTop);
  width: fit-content;
  padding: 15px;
  border: solid 2px #eee;
  border-radius: 10px;
  background-color: #f7f7f7;
  color: #3C4852;
  font-size: 14px;
  transition: opacity 0.2s ease;
  z-index: 3;
}

.modal .btn {
  margin: 10px auto 0px;
  color: #fff;
}
</style>
