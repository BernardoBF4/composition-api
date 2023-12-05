<template>
  <button v-click-outside="handleCLick" class="button">Clica aqui e depois fora</button>
</template>

<script setup>
function handleCLick() {
  alert('Clique fora do botão!')
}
</script>
