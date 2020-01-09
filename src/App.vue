<template>
  <div id="app">
    <Header></Header>
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import sidebar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';

@Component({
  components:{
    sidebar, Header
  }
})
export default class App extends Vue{
  
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
</style>
