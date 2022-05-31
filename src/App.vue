<template>
  <div id="mainContainer">
    <Header />
    <BaseMap />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BaseMap from "./components/BaseMap.vue";

export default {
  name: "App",
  components: {
    Header,
    BaseMap,
  },
  data(){
    return {
      
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}

#mainContainer {
  display: flex;
  height: 100%;
  flex-direction: column;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
