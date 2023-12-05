<template>
  <div class="flex">
    <Simple title="Título" />
    <Dynamic arriving />
    <Defaults :um_booleano_opcional="true" />
    <Condensed :id="928378" title="Item" />
    <Condensed v-bind="condensed" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Simple from '../components/Props/Simple.vue'
import Dynamic from '../components/Props/Dynamic.vue'
import Defaults from '../components/Props/Defaults.vue'
import Condensed from '../components/Props/Condensed.vue'

const condensed = ref({
  id: 928378,
  title: 'Item',
})
</script>
