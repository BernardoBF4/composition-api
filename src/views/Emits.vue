<template>
  <div>
    <div class="flex row">
      <div class="button-wrapper">
        <Emitter @clicked="event" />
        <p class="text-center" v-if="clicked_button && event_args">👆🏻</p>
      </div>
      <div class="button-wrapper">
        <TypedEmitter @clicked="typedEvent" />
        <p class="text-center" v-if="!clicked_button && event_args">👆🏻</p>
      </div>
    </div>
    <p class="content" v-if="event_args">{{ event_args }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Emitter from '../components/Emit/Emitter.vue'
import TypedEmitter from '../components/Emit/TypedEmitter.vue'

const clicked_button = ref(false)
const event_args = ref(null)

function event(msg) {
  event_args.value = JSON.stringify(msg)
  clicked_button.value = true
}

function typedEvent(...args) {
  console.log('Veio do evento --> ', args)
  event_args.value = JSON.stringify(args)
  clicked_button.value = false
}
</script>
