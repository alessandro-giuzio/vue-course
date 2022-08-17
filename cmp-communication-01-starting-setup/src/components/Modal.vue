<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }"></div>
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.modal p {
  font-weight: bold;
  text-align: center;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  text-align: center;
  color: blue;
}

.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1,
.modal.sale p {
  color: white;
}
</style>
