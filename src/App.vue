<template>
  <nav>
    <!-- router to enable movement between pages. using vue's ability
    to route between pages without interacting with server -->
    <router-link class="links" to="/">Home</router-link>
    <router-link class="links" :to="{name: 'book-details'}">Books</router-link>
    <router-link class="links" :to="{name: 'edit-entry'}">New Entry</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.links{
  background-color: #04AA6D;
  border: black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
