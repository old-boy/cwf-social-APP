<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$c-ff:#fff;
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  .container{
    .el-header{
        height: auto;
        padding: 0;
        margin-bottom: 1em;
    }
    .el-main{
      margin-top: 2em;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .search-warp{
      width: auto;
      padding: 1em;
      background: $c-ff;
      margin-top: 1em;
      .el-form-item{
          margin-bottom: 0;
      }
  }
}
</style>
