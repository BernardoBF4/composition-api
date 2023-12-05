<template>
  <h1>{{ title }}</h1>
  {{ `${um_booleano_opcional}` }}
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

type TypedProp = {
  um_booleano_opcional?: boolean
  title?: string
}

withDefaults(defineProps<TypedProp>(), {
  title: 'Título padrão',
})
</script>
