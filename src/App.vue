<template>
  <div id="app">
    <navigation></navigation>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import navigation from "@/components/navigation";
export default {
  name: 'App',
  components:{
    navigation,
    HelloWorld
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
