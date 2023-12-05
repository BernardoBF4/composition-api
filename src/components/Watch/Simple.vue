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

watch(value, () => {
  const emojis = ['🫥', '😶‍🌫️', '😰', '😦', '😧', '😯', '😮']

  if (value === 1) {
  }

  text.value.innerText = `O valor acabou de mudar de novo ${
    emojis[Math.floor(Math.random() * emojis.length)]
  }`
})
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
}
</style>
