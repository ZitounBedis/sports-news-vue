<template>
  <div id="app">
    <!-- <Signin /> -->
    <Signup />
    <Footer />
  </div>
</template>

<script>
// import Landingpage from "./components/landingpage/Landingpage"
import Signup from "./components/signin-up/Signup"
// import Signin from "./components/signin-up/Signin"
import Footer from "./components/landingpage-and-other/Footer"

export default {
  name: 'App',
  components: {
    // Landingpage,
    Signup,
    // Signin,
    Footer
  },
  data() {
    return{
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
