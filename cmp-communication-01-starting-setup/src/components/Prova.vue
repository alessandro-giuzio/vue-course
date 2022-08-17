<template>
  <section>
    <div class="box">
      <h2>{{ title }}</h2>
    </div>
    <input type="text" ref="name" />
    <button @click="handleClick">Click Me</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'My First App',
    };
  },
  methods: {
    handleClick() {
      this.title = this.$refs.name.value;
    },
  },
};
</script>

<style>
section {
  margin-inline: auto;
  padding: 20px;
  overflow: hidden;
}
button {
  margin-left: 10px;
}

.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  background: #ddd;
  margin: 20px;
  display: inline-block;
}

h2 {
  color: #58004d;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  display: inline-block;
}
</style>
