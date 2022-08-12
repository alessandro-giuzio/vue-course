const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    };
  },

  methods: {
    handleClick() {
      alert('you clicked!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount('#assignment');
