<template>
  <div class="flex">
    <h1 class="title">Computed writable</h1>
    <div class="flex row">
      <div class="flex mr">
        <input class="input mb" type="text" v-model="first_name" />
        <input class="input" type="text" v-model="last_name" />
      </div>
      <input class="input ml" type="text" v-model="name" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const first_name = ref('Pedro')
const last_name = ref('Pedrosa')

const name = computed({
  get() {
    return `${first_name.value} ${last_name.value}`
  },
  set(newValue) {
    ;[first_name.value, last_name.value] = newValue.split(' ')
  },
})
</script>
