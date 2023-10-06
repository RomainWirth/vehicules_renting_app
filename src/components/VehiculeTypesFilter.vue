<script>
  import { ref } from 'vue'

  export default {
    data() {
      return {
        model: '',

        options: [
          'Voitures', 'Motos', 'Utilitaires'
        ]
      }
    },
    // props: {
    //   Voitures,
    //   Moros,
    //   Utilitaires
    // }
  }

</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-select
          clearable
          filled
          color="blue-12"
          v-model="model"
          :options="options"
          label="Type de véhicule"
      />

      <!-- equivalent -->
<!--      <q-select color="orange" filled v-model="model" :options="options" label="Label">-->
<!--        <template v-if="model" v-slot:append>-->
<!--          <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />-->
<!--        </template>-->
<!--      </q-select>-->
    </div>
  </div>
</template>