<template>
  <div class="flex mb">
    <h1 class="title">Computed padrão</h1>
    <input class="input" type="text" v-model="value" />
    <p>Multiplicado: {{ multiplied }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const value = ref(0)
const multiplied = computed(() => value.value * 10)
</script>
