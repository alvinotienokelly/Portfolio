<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Have some Questions ?</h1>
      </div>
    </div>
    <div class="row col-lg-12" style="margin-top: 100px">
      <div class="col-lg-4 col-md-4">
        <div class="location">
          <i class="fas fa-map-marked-alt fa-2x"></i>
          <span ></span>
          <p style="font-weight: bold;margin-top: 20px">Nairobi, Kenya</p>
        </div>
        <span style="margin-top: 70px"></span>
        <div class="Email">
          <i class="fas fa-envelope fa-2x"></i>
          <span style="margin-top: 40px"></span>
          <p style="font-weight: bold;margin-top: 20px">info@alvin.com</p>
        </div>
        <span style="margin-top: 20px"></span>
        <div class="phone">
          <i class="fas fa-phone "></i>
          <span style="margin-top: 20px"></span>
          <p style="font-weight: bold;margin-top: 20px">+254799581989</p>
        </div>

      </div>
      <div class="col">
        <form>
          <div class="row">
            <div class="col form-group">
              <input type="text" class="form-control" placeholder="First name" required>
            </div>
            <div class="col form-group">
              <input type="email" class="form-control" placeholder="Email" required>
            </div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Subject" class="form-control" required>

          </div>
          <div class="form-group">
            <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" style="background-color: #001a33;font-weight: bold"
                  class="btn btn-primary btn-lg form-control">SEND</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "Contacts"
}
</script>

<style scoped>

</style>