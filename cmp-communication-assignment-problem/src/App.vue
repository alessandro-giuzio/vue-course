<template>
  <section>
    <h1>Prova titolo</h1>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @setdata="setUserData"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Alessandro Giuzio',
        age: 48,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  background: teal;
}
</style>
