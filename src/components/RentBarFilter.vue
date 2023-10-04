
<template>
  <div class="search-bar">
    <div class="search-bar__content">
      <label for="startingDate">Date de début</label>
      <input type="date" id="startingDate">
    </div>
    <div class="search-bar__content">
      <label for="endingDate">Date de retour</label>
      <input type="date" id="endingDate">
    </div>
    <div class="search-bar__content">
      <label for="estimatedMileage">Nombre de km estimés</label>
      <input type="text" id="estimatedMileage">
    </div>
    <input type="button" value="Rechercher">
  </div>  
</template>
<script setup>
</script>