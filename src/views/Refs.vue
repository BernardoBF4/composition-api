<template>
  <div class="flex mr">
    <h1>O valor é: {{ value }}</h1>
    <input class="input" type="number" v-model="value" />
  </div>
  <div class="flex">
    <h1>O valor 2 é: {{ value2 }}</h1>
    <input class="input" type="number" v-model="value2" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const value = ref<number>(0)
const value2 = 0

watch(value, () => {
  console.log('Tipo:', typeof value)
  console.log('Ref:', value)
})
</script>
