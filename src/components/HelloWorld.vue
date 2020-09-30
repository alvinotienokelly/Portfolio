<template>
  <div class="" style="background-color: #001a33" >
    <div style="z-index: 2">
      <vue-particles
                     color="#ffffff"
                     :particleOpacity="0.1"
                     :particlesNumber="80"
                     shapeType="circle"
                     :particleSize="4"
                     linesColor="#ffffff"
                     :linesWidth="1"
                     :lineLinked="true"
                     :lineOpacity="0.0"
                     :linesDistance="150"
                     :moveSpeed="3"
                     :hoverEffect="true"
                     erase-style='clear'
                     hoverMode="repulse"
                     :clickEffect="true"
                     clickMode="repulse"
      >
      </vue-particles>
    </div>
    <div  style="z-index: 1;margin-top: -500px" class=" row col-lg-12 col-md-12 ">
      <div class="col-lg-6">
      <img src="../assets/developer.svg" height="500" width="500" style="margin-top: -70px">
      </div>
      <div class="col text-justify" style="margin-top: 40px;margin-left: 30px">

      <h3>HI , I'M ALVIN ODIWUOR</h3>
      <div style="margin-top: 20px">
        <vue-typed-js :strings="['I design and develop mobile apps',
         'I do payment integration','I create elegant web applications' ,'I create UI/UX']" :loop="true">
          <h5  class="typing"></h5>
        </vue-typed-js>
      </div>
        <div style="margin-top: 30px">
          <button type="button"  class="btn btn-outline-light btn-lg" style="float: left">Get in Touch</button>
        </div>
      </div>
    </div>
    <services></services>

  </div>
</template>

<script>
import Services from "@/components/services";
export default {
  name: 'HelloWorld',
  components: {Services},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');


h3 {
  font-family: 'Quicksand', sans-serif;
  margin: 40px 0 0;
  color: ghostwhite;
  font-size: 35px;
  font-weight: bolder;
}
button{
  font-weight: bolder;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h5{
  color: whitesmoke;
}
a {
  color: #42b983;
}
</style>
