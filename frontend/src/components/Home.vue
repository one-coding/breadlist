<template>
  <div>
    <nav-bar></nav-bar>
    <sub-bar></sub-bar>
    <slider />
  </div>
</template>

<script>
import NavBar from './NavBar'
import Slider from './Slider.vue'
import SubBar from './SubBar.vue'
export default {
  components: { NavBar, SubBar, Slider },
}
</script>

<style></style>
