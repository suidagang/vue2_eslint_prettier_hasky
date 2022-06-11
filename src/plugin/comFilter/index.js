export default {
  install(Vue) {
    Vue.mixin({
      filters: {
        $_toFixed: num => {
          return num.toFixed(2)
        }
      }
    })
  }
}
