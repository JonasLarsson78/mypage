<template>
  <div class="footer">
    <div>
      {{ 'Copyright © Jonas Larsson - '
      }}<a
        class="footer-github"
        href="https://github.com/JonasLarsson78/mypage"
        target="_blank"
        >Github</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: $meny-color-primary;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $meny-color-secondary;
  z-index: 100;

  &-github {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
