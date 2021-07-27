<template>
  <div class="home">
    <div>
      <h1>All Destinations</h1>
      <div class="destinations">
        <div v-for="destination in destinations" :key="destination.name">
          <router-link :to="{name : 'DestinationDetails', params:{id : destination.id}}">
            <h2>{{ destination.name }}</h2>
          </router-link>
          <figure>
            <router-link :to="{name : 'DestinationDetails', params:{id : destination.id}}">
              <img
                :src="require(`@/assets/${destination.image}`)"
                :alt="destination.name"
              />
            </router-link>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.destinations{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
