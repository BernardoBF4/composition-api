<template>
  <div class="flex">
    <h1 class="title">Watch padrão</h1>
    <input class="input" type="text" v-model="value" />
    <p class="big-text" ref="text">Fica ligado!</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const value = ref(0)
const text = ref(null)

watch(value, (new_value, old_value) => {
  console.log('#############')
  console.log('Velho:', old_value)
  console.log('Novo:', new_value)
})

watch(value, () => {
  const emojis = ['🫥', '😶‍🌫️', '😰', '😦', '😧', '😯', '😮']

  text.value.innerText = `O valor acabou de mudar de novo ${
    emojis[Math.floor(Math.random() * emojis.length)]
  }`
})
</script>
