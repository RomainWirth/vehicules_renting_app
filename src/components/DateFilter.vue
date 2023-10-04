<script>
import {useRentingPeriodStore} from "../stores/rentingPeriod";

const store = useRentingPeriodStore

export default {
  data() {
    return {
      date: {
        startingDate: Date,
        endingDate: Date
      }
    }
  },
  methods: {
    getDates() {
      store.startingDate = this.newStartingDate
      store.endingDate = this.newEndingDate
    }
  }
}
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__dates">
      <div class="search-bar__dates--content">
        <label for="startingDate">Date de début</label>
        <input type="date" id="startingDate" v-model="newStartingDate">
      </div>
      <div class="search-bar__dates--content">
        <label for="endingDate">Date de retour</label>
        <input type="date" id="endingDate" v-model="newEndingDate">
      </div>
      <div class="search-bar__dates--content">
        <input type="button" value="Rechercher" @click="getDates">
      </div>
    </div>
  </div>  
</template>