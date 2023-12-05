<template>
  <h1>{{ title }}</h1>
</template>

<script setup>
const props = defineProps(['title'])
// const { title } = defineProps(['title'])

console.log(props.title)
// console.log(title)
</script>
