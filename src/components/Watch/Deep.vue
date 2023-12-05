<template>
  <h1 class="title">Watch deep</h1>
  <button class="button" @click="person.age++">Clica!</button>
  <p class="big-text" ref="life">A vida de {{ person.name }}: 👶🏻.</p>
  <p>Ele tem {{ person.age }} anos</p>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const life = ref(null)
const person = reactive({
  age: 0,
  name: 'Antônio',
})

watch(
  () => person.age,
  (new_age) => {
    if (new_age > 90) {
      life.value.innerText = `A morte de ${person.name}: ⚰️.`
    } else {
      const emojis = ['👶🏻', '🧒🏻', '🧑🏻', '🧑🏻‍🎓', '🧔🏻', '🤵🏻', '👩🏻‍❤️‍💋‍👨🏻', '👨‍👩‍👧', '👴🏻']
      life.value.innerText = `A vida de ${person.name}: ${emojis[Math.ceil(new_age / 10) - 1]}.`
    }
  }
)
</script>
