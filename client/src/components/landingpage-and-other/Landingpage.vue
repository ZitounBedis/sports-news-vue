<template>
        <div id="nav-main-div">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><router-link class="links" to='/'>Sport News</router-link></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item ><router-link class="links" to='/signin'> Sign in </router-link></b-nav-item>
                    <b-nav-item> About Us </b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      <div class="image-div-landing">
        <b-jumbotron class="jonbo-trans" text-variant="white">
          <template #header class="jombo-template">Join the TEAM</template>
          <hr class="my-6">
          <b-button variant="success" size="lg"><router-link class="links" to='/signup'> SignUp for the news </router-link></b-button>
        </b-jumbotron>
      </div> 
    </div>
</template>  
<script>
  export default {
    name: "Landingpage",
  }
</script>
<style>
#nav-main-div{
  width : 100%;
  position: fixed;
  top: 0;
}
.image-div-landing{
  width: 100vw;
  height: 100vh;
  margin:0;
  padding:0;
  background: url("https://free4kwallpapers.com/uploads/originals/2020/02/27/beautiful-stadium-photo-wallpaper.jpg") no-repeat 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jonbo-trans{
  margin-right: 16rem;
  margin-bottom: 12rem;
  background: transparent;
}
</style>