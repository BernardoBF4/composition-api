<template>
  <div class="flex">
    <div class="flex mb">
      <p class="big-text">Valor: {{ value }}</p>
      <button class="button" @click="value++">Atualize o DOM!</button>
    </div>
    <p class="big-text" ref="am_i_here">Eu to no DOM!</p>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const am_i_here = ref<HTMLElement | null>(null)
const value = ref<number>(0)

console.log('Estou criado')

onBeforeMount(() => {
  console.log(
    'O componente está quase montado e o DOM ainda não pode ser acessado. O ref é null -->',
    am_i_here.value
  )
})

onMounted(() => {
  console.log(
    'O componente está montado e o DOM pode ser acessado. O ref é um HTMLElement -->',
    am_i_here.value
  )
})

onBeforeUpdate(() => {
  console.log('Alguma coisa vai atualizar, fica vendo...')
})

onUpdated(() => {
  console.log('Atualizou!')
})

onBeforeUnmount(() => {
  console.log(
    'Não vá, por favooooooor. (Mas você ainda tem o DOM disponível -->',
    am_i_here.value,
    ')'
  )
})

onUnmounted(() => {
  console.log('Se é assim, então até mais!(Sem DOM disponível -->', am_i_here.value, ')')
})
</script>
