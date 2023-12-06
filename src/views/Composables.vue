<template>
  <div>
    <h1>Minha Aplicação de Mapa</h1>
    <div v-if="location">
      <p>Sua localização atual: {{ location.latitude }}, {{ location.longitude }}</p>
      <Map :latitude="location.latitude" :longitude="location.longitude" />
    </div>
    <div v-else>
      <p>Carregando localização...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useGeolocation from '../composables/useGeolocation'

const location = ref(null)
const { getCurrentLocation } = useGeolocation()

onMounted(async () => (location.value = await getCurrentLocation()))
</script>
