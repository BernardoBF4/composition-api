<template>
  <button class="button" @click="click">Clique aqui</button>
</template>

<script setup lang="ts">
type Event = {
  (event: 'clicked', msg: string, value: number): void
}

const emit = defineEmits<Event>()

function click(): void {
  const msg = 'Cliquei'

  emit('clicked', msg, 903812784)
}
</script>
