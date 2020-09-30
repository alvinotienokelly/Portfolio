<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">My process</h1>
        <p class="lead">I employ best practices that helps to connect tech, non-tech team members and project stakeholders to
          transform your exceptional idea into a unique software product or solution.</p>
      </div>
    </div>

    <stepper :options="stepperOptions">
      <div class="text-center" style="margin-top: 50px" slot="step-1">
        <h3>Planning</h3>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
        </p>
      </div>

      <div class="text-center" style="margin-top: 50px" slot="step-2">
        <h3>Design</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
      </div>

      <div class="text-center" style="margin-top: 50px" slot="step-3">
        <h3>Implementation</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
      </div>

      <div class="text-center" style="margin-top: 50px" slot="custom-step-name">
        <h3>Testing</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
      </div>
    </stepper>

  </div>

</template>

<script>
import Stepper from 'vuejs-stepper'

export default {
  name: "Process",
  data(){
    return{
      stepperOptions: {
        headers: [
          {title: 'Planning'},
          {title: 'Design'},
          {title: 'Implementation'},
          {title: 'Launch', stepName: 'custom-step-name'}
        ],
        prevText: 'Previous',
        nextText: 'Next'
      }
    }
  },
  components:{
    Stepper
  }
}
</script>

<style scoped>
h3{
  font-weight: bolder;
}

</style>