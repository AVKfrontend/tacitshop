<template>
  <dialog id="cart-action-select">
    <form action="dialog" @submit.prevent="submitActionHendler" class="action-select">
      <p class="action-select__question">You have previously selected products and new ones, what should you do with
        them?</p>
      <select name="action" id="action" class="action-select__select" autofocus>
        <option value="join">{{ ActionSelect.join }}</option>
        <option value="keep_prev">{{ `${ActionSelect.keep_prev}` }}</option>
        <option value="keep_new">{{ `${ActionSelect.keep_new}` }}</option>
      </select>
      <button class="action-select__submit btn" type="submit" value="join">Select</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">

const enum ActionSelect {
  "join" = "Join",
  "keep_prev" = "Keep previously only",
  "keep_new" = "Keep new only"
}
let submitAction: (value: string | PromiseLike<string>) => void = () => { }

async function cartActionRequest() {
  window.addEventListener("keydown", keyHendlerActionSelect)
  openSelectModal()
  const answerWait = new Promise<string>((resolve) => submitAction = resolve)
  const answer = await answerWait
  // if (answer === ("join" | "keep_prev" | "keep_new")) { }  //?????????????????????????????????
  window.removeEventListener("keydown", keyHendlerActionSelect)
  closeSelectModal()
  return answer
}
function submitActionHendler() {
  const selectElement = document.querySelector(".action-select__select")
  if (selectElement instanceof HTMLSelectElement) {
    submitAction(selectElement.value)
  }
}
function keyHendlerActionSelect(e: KeyboardEvent) {
  if (e.key === 'Escape') e.preventDefault()
}
function openSelectModal() {
  const dialogElement = document.getElementById("cart-action-select")
  if (dialogElement instanceof HTMLDialogElement) {
    dialogElement.showModal()
  } else console.log("Can`t find select element")
}
function closeSelectModal() {
  const dialogElement = document.getElementById("cart-action-select")
  if (dialogElement instanceof HTMLDialogElement) dialogElement.close()
}

defineExpose({
  cartActionRequest,
})

</script>

<style lang="scss">
$br: 5px;

#cart-action-select {
  border-radius: $br;

  &::backdrop {
    background-color: #ffffff80;
    filter: blur($br);
  }
}

.action-select {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  row-gap: 20px;

  &__select {
    width: fit-content;
    border: 1px solid;
    border-radius: $br;
    font-size: 14px;
    padding: 15px;
  }
}
</style>