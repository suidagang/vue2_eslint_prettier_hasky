<template>
  <div id="app" ref="allPage">
    <router-view />
  </div>
</template>
<script>
// import scaleHtml from './common/comUtil/scaleHtml';
export default {
  mounted() {}
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  overflow: hidden;
  width: 100%;
  min-height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
