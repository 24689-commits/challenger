<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <footer-comp />
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue'
export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style>

</style>
