<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <div class="bloc-page display-flex-row justify-content-center">
    <Header />
    <RouterView />
  </div>
</template>

<style>
</style>
