<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <div class="bloc-page display-flex-column align-items-center">
    <Header />
    <RouterView />
  </div>
</template>

<style>
</style>
