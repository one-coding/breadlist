<template>
  <div>
    <nav-bar></nav-bar>
    <sub-bar></sub-bar>
    <slider />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Slider from './components/Slider.vue'
import SubBar from './components/SubBar.vue'
export default {
  components: { NavBar, SubBar, Slider },
}
</script>

<style></style>
