<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>Esse projeto traz exemplos sobre o que está abaixo, com Vue 3 e Composition API.</h1>
    <br />
    <ul>
      <li>Refs</li>
      <li>Refs do DOM</li>
      <li>Props</li>
      <li>Emits</li>
      <li>Computed</li>
      <li>Watch</li>
      <li>Lifecycle Hooks</li>
      <li>Diretivas</li>
      <li>Composables</li>
    </ul>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
}
</style>
