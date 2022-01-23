<template>
  <div class="menu">
    <div class="flex1">
      <div class="flex2">
        <svg
          class="menu-burger"
          viewBox="0 0 100 80"
          width="20"
          height="20"
          @click="toggleMenu"
        >
          <rect width="100" height="20" rx="15"></rect>
          <rect y="30" width="100" height="20" rx="15"></rect>
          <rect y="60" width="100" height="20" rx="15"></rect>
        </svg>
        <div class="menu-name">{{ getRouteTitle }}</div>
      </div>
      <div class="menu-name"><b>Jonas Larsson</b></div>
    </div>
    <div id="menu" class="menu-list">
      <div class="menu-list__text" @click="clickMenu('/', 'Hem')">Hem</div>
      <div class="menu-list__text" @click="clickMenu('cv', 'Cv')">Cv</div>
      <div class="menu-list__text" @click="clickMenu('portfolio', 'Portfolio')">
        Portfolio
      </div>
      <div class="menu-list__text" @click="clickMenu('aboute', 'Om Oss')">
        Om Mig
      </div>
      <div class="menu-list__text" @click="clickMenu('contact', 'Kontakt')">
        Kontakt
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Menu',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    const pathname = location.pathname
    switch (pathname) {
      case '/portfolio':
        this.setRouteTitle('Portfolio')
        break
      case '/cv':
        this.setRouteTitle('Cv')
        break
      case '/aboute':
        this.setRouteTitle('Om Oss')
        break
      case '/contact':
        this.setRouteTitle('Kontakt')
        break
      default:
        this.setRouteTitle('Hem')
        break
    }
  },
  computed: {
    ...mapGetters(['getRouteTitle'])
  },
  methods: {
    ...mapActions(['setRouteTitle']),
    toggleMenu() {
      const menu = document.querySelector('#menu')
      menu.classList.toggle('menu-list__show')
      const text = document.querySelectorAll('.menu-list__text')
      for (let element of text) {
        element.classList.toggle('menu-list__text__show')
      }
    },
    clickMenu(route, name) {
      this.toggleMenu()
      this.setRouteTitle(name)
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 40px;
  background-color: $meny-color-primary;

  &-burger {
    cursor: pointer;
    fill: $meny-color-secondary;

    &:hover {
      opacity: 0.7;
    }
  }

  &-name {
    color: $meny-color-secondary;
    margin-bottom: 3px;
    margin-left: 8px;
  }

  &-list {
    opacity: 0;
    position: relative;
    width: 150px;
    height: 160px;
    background-color: $meny-color-primary;
    top: -5px;
    left: 5px;
    padding: 5px;
    color: $meny-color-secondary;
    font-size: $standard-font-size;
    border-radius: 5px;
    transition-property: opacity, cursor;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
    z-index: 1000;
  }

  &-list__show {
    opacity: 1;
    transition-property: opacity, cursor;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
  }

  &-list__text {
    cursor: default;
    padding: 5px;
  }

  &-list__text:hover {
    opacity: 0.7;
  }

  &-list__text__show {
    cursor: pointer;
  }
}

.flex1 {
  height: 100%;
  width: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
}

.flex2 {
  height: 100%;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
