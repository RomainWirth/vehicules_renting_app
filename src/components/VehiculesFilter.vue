<script>
import AgeFilter from "@/components/AgeFilter.vue";
import VehiculeTypesFilter from "@/components/VehiculeTypesFilter.vue";
import VehiculeBrandFilter from "@/components/VehiculeBrandFilter.vue";
import VolumeCapacityFilter from "@/components/VolumeCapacityFilter.vue";
import DisplacementFilter from "@/components/DisplacementFilter.vue";

export default {
  components: {
    DisplacementFilter,
    VolumeCapacityFilter,
    VehiculeBrandFilter,
    VehiculeTypesFilter,
    AgeFilter
  },

  props: {
    vehiculeType: {
      type: String,
      required: false
    }
  },

  computed: {
    vehiculeTypeFilter() {
      console.log(this.vehiculeType)
      if (this.vehiculeType === "car") {
        return this.vehiculeType = "car"
      } else if(this.vehiculeType === "moto") {
        return this.vehiculeType = "moto"
      } else {
        return this.vehiculeType = "commercial"
      }
    }
  }
};
</script>

<template>


  <VehiculeTypesFilter />

  <VehiculeBrandFilter />

  <VolumeCapacityFilter />

  <DisplacementFilter />

  <div>
    <AgeFilter />
  </div>

</template>

