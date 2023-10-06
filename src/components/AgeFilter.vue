<script>
import { ref, computed } from 'vue'
export default {
  setup () {
    const model = ref(2)

    return {
      model,
      objMarkerLabel: { 0: '18+', 1: '21+', 2: '25+'},
    }
  }
}
</script>

<template>
  <div>
      <div class="q-px-lg q-pt-md q-pb-xl display-flex-column align-items-center">
        <p>Âge</p>
        <q-slider
            v-model="model"
            color="blue"
            :marker-labels="objMarkerLabel"
            :min="0"
            :max="2"
        />
      </div>
  </div>
</template>