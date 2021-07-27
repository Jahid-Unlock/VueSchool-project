<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'brazil' }">Brazil</router-link>
    <router-link :to="{ name: 'panama' }">Panama</router-link>
    <router-link :to="{ name: 'hawaii' }">Hawaii</router-link>
    <router-link :to="{ name: 'jamaica' }">Jamaica</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #011d38;
  padding: 12px 25px;
  text-decoration: none;
  margin: 0 5px;
}

#nav a.router-link-exact-active {
  color: #fff;
  background: darkblue;
  border-radius: 6px;
}
</style>