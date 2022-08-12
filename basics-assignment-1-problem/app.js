const app = Vue.createApp({
  data: () => {
    return {
      firstName: 'Alessandro',
      age: 48,
      image: 'https://www.prometeocv.com/shared-img.png',
    };
  },
  methods: {
    calcAge() {
      return this.age + 5;
    },
    favNumber() {
      return Math.floor(Math.random(0, 3));
    },
  },
});

app.mount('#assignment');
