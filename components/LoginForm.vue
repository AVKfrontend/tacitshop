<template>
  <div class="modal">
    <form action="" @submit.prevent="submitAction('login')" class="login" id="login-form">
      <p>You nickname:</p>
      <input v-model="nicR" type="text" name="login" id="login" placeholder="You nickname" required autofocus="true"
        minlength="3">
      <p>You password:</p>
      <input v-model="pasR" type="password" name="password" id="password" placeholder="You password" required
        minlength="5">
      <button class="btn" type="submit">Enter</button>
      <button @click="submitAction('cancel')" class="btn" type="button">Cancel</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Coordinate } from 'utils/types';

const nicR = ref("kminchelle")
const pasR = ref("0lelplR")
const coordinates = ref({ x: -1000, y: 0 })

let submitAction: (value: string | PromiseLike<string>) => void = () => { }

const cssLeft = computed(() => (coordinates.value.x - 200) + "px")
const cssTop = computed(() => coordinates.value.y + "px")
const innerText = computed(() => `Can't find a pair of nickname <${nicR.value}> with password <${pasR.value}> in the database, 
try one of the ones listed below 

username: atuny0
password: 9uQFF1Lh

username: hbingley1
password: CQutx25i8r

username: rshawe2
password: OWsTbMUgFc

username: kmeus4
password: aUTdmmmbH

username: dpettegre6
password: YVmhktgYVS

username: nloiterton8
password: HTQxxXV9Bq4

username: acharlota
password: M9lbMdydMN

username: lgribbinc
password: ftGj8LZTtv9g

username: vcholdcroftg
password: mSPzYZfR

username: bleveragei
password: UZGAiqPqWQHQ

username: ckensleyk
password: tq7kPXyf`)

async function start(coord: Coordinate): Promise<{ nic: string; pas: string; }> {
  coordinates.value = coord
  const loginPare: { nic: string; pas: string; } = await wait()
  return loginPare
}
async function wait() {
  const waitUserChoice: Promise<string> = new Promise((resolve) => {
    submitAction = resolve
  })
  document.addEventListener('keydown', keyHendlerLoginForm)
  const choice = await waitUserChoice
  document.removeEventListener('keydown', keyHendlerLoginForm)
  const loginPare = { nic: "cancel", pas: "-1" }
  if (choice === "login") {
    loginPare.nic = unref(nicR)
    loginPare.pas = unref(pasR)
  }
  return loginPare
}
function close() {
  removeText()
  nicR.value = ""
  pasR.value = ""
  coordinates.value = { x: -1000, y: 0 }
}
function error() {
  const form = document.getElementById("login-form")
  if (form?.lastElementChild?.nodeName === "P") removeText()
  const paragraf = document.createElement("p")
  paragraf.style.marginTop = "10px"
  paragraf.style.overflowY = "auto"
  paragraf.style.maxHeight = "50vh"
  paragraf.innerText = innerText.value
  form?.appendChild(paragraf)
}
function removeText() {
  const form = document.getElementById("login-form")
  if (form?.lastElementChild?.nodeName !== "P") return
  form?.lastElementChild?.remove()
}
function keyHendlerLoginForm(event: KeyboardEvent): void {
  if (event.key !== 'Escape') return
  submitAction('cancel')
}


defineExpose({
  start,
  wait,
  close,
  error
})

</script>

<style scoped lang="scss">
.modal {
  left: v-bind(cssLeft);
  top: v-bind(cssTop);
}

.login {
  input {
    display: block;
    width: 100%;
    padding: 5px;
    border: 1px solid;
    border-radius: 1px;
    margin-top: 10px;
  }

  p:not(:first-child) {
    margin-top: 10px;
  }
}
</style>