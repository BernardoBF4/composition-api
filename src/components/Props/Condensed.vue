<template>
  <h1>{{ title }} #{{ id }}</h1>
</template>

<script setup lang="ts">
type CondensedProps = {
  id: number
  title: string
}

defineProps<CondensedProps>()
</script>
