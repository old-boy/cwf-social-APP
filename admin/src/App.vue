<template>
  <div id="app">
   <transition>
      <router-link></router-link>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
