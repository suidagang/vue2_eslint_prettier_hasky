<template>
  <div id="app" ref="allPage">
    <router-view />
  </div>
</template>
<script>
// import scaleHtml from './common/comUtil/scaleHtml';
export default {
  mounted() {
    let   b    = 222;
    console.log(b);
    // scaleHtml(this.$refs.allPage);
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
