<template>
  <div class="home">
    <div class="home-question">
      <div>How about javascript code?</div>
      <div class="home-text">
        <div>
          JA!!! -> Då har du kommit rätt. Webbutveckling när det är<br />
          som bäst och roligast. Med kunskaper inom HTML, Css och
          <br />JavaScript kan du bygga fantastiska webbapplikationer.
          <br /><br />
          Detta är början på min resa och utvekling.
          <br /><br />
          - Cv och Portfolio finns i menyn -
        </div>
      </div>
    </div>
    <img class="home-img" src="../assets/code.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  mounted() {
    document.title = 'MyPage - Hem'
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 40px);
  /*   background-image: url('../assets/code.jpeg');
  background-size: 100%;
  background-repeat: no-repeat; */
  text-align: center;

  &-img {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
    z-index: 0;
    opacity: 0.5;
  }

  &-question {
    position: relative;
    top: 280px;
    padding-bottom: 20px;
    padding-top: 10px;
    font-size: 50px;
    color: $meny-color-primary;
    background-color: white;
    opacity: 0.75;
    z-index: 10;
  }

  &-text {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: $standard-font-size + 4px;
    margin-top: 20px;
  }
}
</style>
