<script >
import Vehicule from '../components/Vehicule.vue'

export default {
  created(){
    this.fetchAllVehicules()
  },
  components: {
    Vehicule,
  },
  data(){
    return {
      dataVehicules: []
    }
  },
  methods: {
    async fetchAllVehicules() {
      const vehiculesRequest = new Request(
          import.meta.env.VITE_API_VEHICULES_ENDPOINT + '/vehicules',
          {
            method: "GET",
            headers: new Headers(),
            mode: "cors",
            cache: "default"
          }
      )
      try {
        const response = await fetch(vehiculesRequest)
        if (!response.ok) {
          throw new Error('Request failed with status : ' + response.status)
        }
        const data = await response.json();
        console.log(data);
        this.dataVehicules = data
      } catch (error) {
        console.log('Error : ' + error)
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="display-flex-row flex-wrap">
      <div v-for="dataVehicule in dataVehicules" :key="dataVehicules.id" class="display-flex-column vehicule-card">
        <Vehicule
            :vehiculeType="dataVehicule.type"
            :brand="dataVehicule.brand"
            :model="dataVehicule.model"
            :color="dataVehicule.color"
            :displacement="dataVehicule.displacement"
            :volumeCapacity="dataVehicule.volumeCapacity"
            :startingPrice="dataVehicule.startingPrice"
            :mileagePrice="dataVehicule.mileagePrice"
        />
      </div>
    </div>
  </main>
</template>