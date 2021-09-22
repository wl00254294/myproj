<template>
  <div id="app">
     <vue-extend-layouts />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  // data() {
  //  return {
  //     message: 'test form message'
  //  };
 // },
  components: {
    VueExtendLayouts
  },
  mounted() {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
