<template>
  <button class="button" @click="click">Clique aqui</button>
</template>

<script setup>
const emit = defineEmits(['clicked'])

function click() {
  const msg = 'Cliquei'

  emit('clicked', msg)
}
</script>
