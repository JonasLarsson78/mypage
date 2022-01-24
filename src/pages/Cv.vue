<template>
  <div class="cv">
    <div class="cv-tab1">
      <img class="cv-tab1__img" src="../assets/me_commputer.png" />
      <div>Jonas Larsson</div>
    </div>
    <BackImg />
  </div>
</template>

<script>
import BackImg from '../components/BackImg'
export default {
  name: 'Cv',
  components: {
    BackImg,
  },
  mounted() {
    document.title = 'MyPage - Cv'
  },
}
</script>

<style lang="scss" scoped>
.cv {
  width: 100%;
  height: calc(100vh - 40px);
  text-align: center;

  &-tab1 {
    position: relative;
    left: 20px;
    top: 20px;
    width: 200px;
    height: 85%;
    background-color: white;
    border-radius: 10px;
    border: 3px solid $meny-color-primary;
    z-index: 100;

    &__img {
      width: 150px;
      border: 3px solid $meny-color-primary;
      border-radius: 75px;
      margin-top: 10px;
      background-color: #00000010;
    }
  }
}
</style>
