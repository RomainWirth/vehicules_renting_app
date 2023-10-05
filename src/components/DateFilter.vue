<script>
import {mapStores} from "pinia";
import {useRentingPeriodStore} from "../stores/vehicules.js";


export default {
  data() {
    return {
      date: {
        startingDate: Date,
        endingDate: Date
      }
    }
  },
  computed: {
    ...mapStores(useRentingPeriodStore)
  },
  // methods: {
  //   setDates() {
  //     this.rentingPeriodStore.startingDate = this.newStartingDate
  //     this.rentingPeriodStore.endingDate = this.newEndingDate
  //   }
  // }
}
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__dates">
      <div class="search-bar__dates--content">
        <label for="startingDate">Date de début</label>
        <input type="date" id="startingDate" v-model="rentingPeriodStore.startingDate">
      </div>
      <div class="search-bar__dates--content">
        <label for="endingDate">Date de retour</label>
        <input type="date" id="endingDate" v-model="rentingPeriodStore.endingDate">
      </div>
      <div class="search-bar__dates--content">
        <input type="button" value="Rechercher" @click="rentingPeriodStore.getAvailableVehicules()">
      </div>
    </div>
  </div>  
</template>