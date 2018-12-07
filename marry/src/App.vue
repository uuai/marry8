<template>
  <div id="app">
    <app-footer :appear="this.$global.tabbarAppear"></app-footer>
    <router-view></router-view>
    <app-release></app-release>
    <div v-show="this.$global.tabbarAppear" class="temp"></div>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar"
import Release from "./components/Release"
export default {
  name: 'App',
  components: {
     'app-footer':Tabbar,
     'app-release':Release
  },
}
</script>

<style>
  html,body{
    background: #f1f1f1;
  }
  .temp {
    width: 100%;
    height: 50px;
  }
</style>
