<template>
  <div class="contact">
    <div>CONTACT</div>
    <BackImg />
  </div>
</template>

<script>
import BackImg from '../components/BackImg'
export default {
  name: 'Portfolio',
  components: {
    BackImg,
  },
  mounted() {
    document.title = 'MyPage - Portfolio'
  },
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: calc(100vh - 40px);
  text-align: center;
}
</style>
