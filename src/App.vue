<template>
  <div>
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  mounted() {
    document.title = process.env.NODE_ENV === 'production' ? 'MyPage' : 'MyPage - DEV'
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
}

#app {
  font-family: $standard-font;
  color: $color-text;
  font-size: $standard-font-size;
  background: black;
}
</style>
