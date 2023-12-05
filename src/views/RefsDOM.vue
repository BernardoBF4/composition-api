<template>
  <div class="flex">
    <input class="input" placeholder="Digite algo" ref="input" type="text" />
    <br />
    <br />
    <br />
    <button class="button" @click="focus">🦭 Foca 🦭</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref(null)

function focus() {
  input.value?.focus()
}
</script>
