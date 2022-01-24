<template>
  <img class="back-img" src="../assets/code.jpeg" />
</template>

<script>
export default {
  name: 'BackImg',
}
</script>

<style lang="scss" scoped>
.back {
  &-img {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100vh - 40px);
    opacity: 0.5;
  }
}
</style>
