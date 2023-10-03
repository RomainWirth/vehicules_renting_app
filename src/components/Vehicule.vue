<script>
export default {
  props: {
    vehiculeType: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    displacement: {
      type: Number,
      required: false
    },
    volumeCapacity: {
      type: Number,
      required: false
    },
    applicationFee: {
      type: Number,
      required: false
    },
    cleaningCost: {
      type: Number,
      required: false
    },
    mileagePrice: {
      type: Number,
      required: true
    },
    mileage: {
      type: Number,
      required: false
    }
  },
  computed: {
    startingPrice() {
      return this.applicationFee + this.cleaningCost
    }
  }
}
</script>

<template>
  <h2>{{vehiculeType}}</h2>
  <p>{{brand}}</p>
  <p>{{model}}</p>
  <p>{{color}}</p>
  <p>{{displacement}}</p>
  <p>{{volumeCapacity}}</p>
  <p>{{startingPrice}}</p>
  <p>{{mileagePrice}}</p>
</template>