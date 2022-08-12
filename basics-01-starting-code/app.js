const app = Vue.createApp({
  data: () => {
    return {
      message: 'Hello Vue!',
      messageA: '<h2>goodbay Vue</h2>',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.message;
      } else {
        return this.messageA;
      }
    },
  },
});

app.mount('#user-goal');
