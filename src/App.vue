<template>
  <div id="app">
    <h1> FASEEH AHMAD</h1>
    <p id="description">
      <b>(Software Developer)</b>
    </p>
    <Profile/>
  </div>
</template>
npm
<script>
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    Profile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: black;
}
#description{
  text-align: center;
  margin-top: -20px;
}

</style>
