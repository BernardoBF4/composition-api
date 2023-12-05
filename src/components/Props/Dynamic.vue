<template>
  <h1 v-if="arriving">Oi</h1>
  <h1 v-if="!arriving">Tchau</h1>
</template>

<script setup lang="ts">
type DynamicProps = {
  arriving: boolean
}

defineProps<DynamicProps>()
</script>
