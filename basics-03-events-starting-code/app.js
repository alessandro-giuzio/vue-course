const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    submitForm(event) {
      alert('submitted');
    },

    setName(event) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
