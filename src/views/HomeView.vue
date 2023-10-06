<script >
import {mapStores} from "pinia";
import DateFilter from "../components/DateFilter.vue";
import VehiculesFilter from "../components/VehiculesFilter.vue"
import Vehicule from '../components/Vehicule.vue'
import {useRentingPeriodStore} from "../stores/vehicules.js";

export default {
  // created(){
  //   this.fetchAllVehicules()
  // },
  components: {
    DateFilter,
    VehiculesFilter,
    Vehicule,
  },
  // data() {
  //   return {
  //     dataVehicules: []
  //   }
  // },
  computed: {
    ...mapStores(useRentingPeriodStore)
  },
  // methods: {
  //   async fetchAllVehicules() {
  //       const vehiculesRequest = new Request(
  //           import.meta.env.VITE_API_VEHICULES_ENDPOINT + '/vehicules',
  //           {
  //             method: "GET",
  //             headers: new Headers(),
  //             mode: "cors",
  //             cache: "default"
  //           }
  //       )
  //       try {
  //         const response = await fetch(vehiculesRequest)
  //         if (!response.ok) {
  //           throw new Error('Request failed with status : ' + response.status)
  //         }
  //         const data = await response.json();
  //         console.log(data)
  //         this.dataVehicules = data
  //       } catch (error) {
  //         console.log('Error : ' + error)
  //       }
  //     },
  // }
}
</script>

<template>
  <main class="display-flex-column align-items-center">
    <div class="home-view">
      <DateFilter />

      <div>
        <VehiculesFilter />
      </div>

<!--      <div v-for="dataVehicule in dataVehicules" :key="dataVehicules.id" class="display-flex-column align-items-start vehicule-card">-->
      <div v-for="dataVehicule in rentingPeriodStore.dataVehicules" :key="rentingPeriodStore.dataVehicules.id" class="display-flex-column align-items-start vehicule-card">
        <Vehicule
            :vehiculeType="dataVehicule.type"
            :brand="dataVehicule.brand"
            :model="dataVehicule.model"
            :color="dataVehicule.color"
            :displacement="dataVehicule.displacement"
            :volumeCapacity="dataVehicule.volumeCapacity"
            :applicationFee="dataVehicule.applicationFee"
            :cleaningCost="dataVehicule.cleaningCost"
            :startingPrice="dataVehicule.startingPrice"
            :mileagePrice="dataVehicule.mileagePrice"
        />
      </div>
    </div>
  </main>
</template>