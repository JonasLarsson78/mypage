<template>
  <div class="aboute">
    <div class="aboute-back">
      <h2 class="aboute-title">{{ title }}</h2>
      <p class="aboute-text" v-html="replaceText()"></p>
    </div>
    <BackImg />
  </div>
</template>

<script>
import BackImg from '../components/BackImg'
export default {
  name: 'Aboute',
  data() {
    return {
      title: 'Om mig',
      text: 'Hej<br><br> Mitt namn är Jonas Larsson och jag kommer från Helsingborg i nordvästra Skåne. Jag är ${år}år gammal och bor med min sambo, dotter och vår hund.<br> Jag har alltid varit intresserad av datorer och teknik och kom i kontakt med programmering ganska tidigt men bara haft det som en hobby. Men 2018 när jag varit arbetslös i ett halvår bestämde jag mig att börja plugga och då var mitt val ganska enkelt. Det blev webb programmering (HTML, CSS och JavaScript) och en vuxenutbildning på högskolenivå i två år.<br><br> Detta var nog en av det roligaste saker som jag gjort och det resulterade i att efter två månader efter examen hade jag fått ett jobb som systemutvecklare. Jag stormtrivs på min arbetsplats och ser bara nya möjligheter.<br><br> Jonas Larsson',
    }
  },
  components: {
    BackImg,
  },
  mounted() {
    document.title = 'MyPage - Om Mig'
  },
  methods: {
    replaceText() {
      const getAge = (birthDate) =>
        Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10)

      const newText = this.text.replace('${år}', getAge('1978-04-18'))
      return newText
    },
  },
}
</script>

<style lang="scss" scoped>
.aboute {
  width: 100%;
  height: calc(100vh - 40px);
  text-align: center;

  &-back {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    top: 100px;
    width: 850px;
    height: 650px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid $meny-color-primary;
    opacity: 0.8;
    z-index: 100;
  }

  &-title {
    color: $meny-color-primary;
    padding: 10px;
    padding-bottom: 40px;
  }

  &-text {
    color: $meny-color-primary;
    text-align: left;
  }
}
</style>
