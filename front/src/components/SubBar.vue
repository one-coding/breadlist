<template>
  <div>
    <b-container class="bv-example-row">
      <b-navbar
        class="sub-bar"
        type="light
      "
      >
        <b-navbar-nav>
          <b-nav-item href="#">홈</b-nav-item>
          <b-nav-item href="#">사진</b-nav-item>
          <b-nav-item href="#">집들이</b-nav-item>
          <b-nav-item href="#">노하우</b-nav-item>
          <b-nav-item href="#">셀프가이드</b-nav-item>
          <b-nav-item href="#">질문과답변</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello',
    }
  },
}
</script>

<style>
.sub-bar {
  background: coral;
  color: white;
}
</style>
