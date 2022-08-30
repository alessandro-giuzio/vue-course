<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },

  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  padding: 8px 14px;
  color: chocolate;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 8px;
  border: 0.5px solid red;
}
</style>
