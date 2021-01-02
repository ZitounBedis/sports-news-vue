<template>
  <div id="app">
    <Landingpage />
  </div>
</template>

<script>
import Landingpage from "./components/landingpage-and-other/Landingpage"

export default {
  name: 'App',
  components: {
    Landingpage
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
