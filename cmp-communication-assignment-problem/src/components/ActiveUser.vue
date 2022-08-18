<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} years</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  padding: 4rem 2rem;
  border: 2px solid #ccc;
  max-width: 30rem;
  border-radius: 12px;
}
</style>
