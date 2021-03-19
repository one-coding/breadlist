<template>
  <b-container class="bv-example-row">
    <b-navbar toggleable="lg" class="nav-bar">
      <b-navbar-brand href="#">시네모</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">커뮤니티</b-nav-item>
          <b-nav-item href="#">스토어</b-nav-item>
          <b-nav-item href="#">고객센터</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">로그인</b-nav-item>
          <b-nav-item href="#">회원가입</b-nav-item>
          <b-nav-item href="#">마이페이지</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
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
.nav-bar {
  background: rgb(54, 187, 76);
  color: white;
}
</style>
