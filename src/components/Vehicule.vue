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
  <h2>Modèle : {{model}}</h2>
  <h3>type : {{vehiculeType}}</h3>
  <div class="display-flex-row justify-content-evenly">
    <p class="">Marque : {{brand}}</p>
    <p>Couleur : {{color}}</p>
  </div>
  <div class="display-flex-row justify-content-evenly">
    <p>Cylindrée : {{displacement}} cm3 </p>
    <p>Capacité : {{volumeCapacity}} m3 </p>
  </div>
  <div>
    <p>Prix de base : {{startingPrice}} €</p>
    <p>Prix au km : {{mileagePrice}} €</p>
  </div>
</template>