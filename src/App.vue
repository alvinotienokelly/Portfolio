<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
export default {
  name: 'App',
  components:{
    navigation,
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

#app {
  font-family: 'Mulish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
