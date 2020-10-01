<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-custom fixed-top" >
    <a class="navbar-brand" href="#">

    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/" style="color: white;font-weight: bold">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/services" style="color: white;font-weight: bold">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/work" style="color: white;font-weight: bold">Work</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about" style="color: white;font-weight: bold">Resume</router-link>

        <li class="nav-item">
          <router-link class="nav-link" to="/process" style="color: white;font-weight: bold">Process</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about" style="color: white;font-weight: bold">About</router-link>
        </li>

        <li class="nav-item" style="margin-top: 5px">
          <router-link class="btn btn-primary btn-md my-2 my-sm-0" to="/contacts"
                       style="color: white;font-weight: bold">Contacts</router-link>
        </li>




      </ul>

    </div>
  </nav>
</div>
</template>

<script>
export default {
name: "navigation"
}
</script>

<style scoped>

.nav-link{
  font-weight: bold;
  font-size: 20px;
}
.navbar-custom {
  background-color: #001a33;
}

/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: rgba(255,255,255,.8);
}
/* change the link color */
.navbar-custom .navbar-nav .nav-link {
  color: rgba(255,255,255,.5);
}
/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:hover .nav-link {
  color: #ffffff;
}
.navbar-nav > li{
  padding-right:20px;
}

</style>