<template>
  <form @submit.prevent="submitFiendData">
    <input type="text" minlength="3" placeholder="Name" v-model="enteredName" />
    <input type="tel" minlength="4" v-model="enteredPhone" />
    <input type="email" minlength="4" placeholder="Mail" v-model="enteredMail" />
    <button :disabled="!hasValidForm">Add Friend {{ hasValidForm }}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredMail: '',
    };
  },
  computed: {
    hasValidForm() {
      return !!(this.enteredName && this.enteredPhone && this.enteredMail);
    },
  },
  methods: {
    submitFiendData() {
      const newFriend = {
        enteredName: this.enteredName,
        enteredPhone: this.enteredPhone,
        enteredMail: this.enteredMail,
      };
      console.log(newFriend);
      this.$emit('get-friend-data', newFriend);
    },
  },
  emits: ['get-friend-data'],
};
</script>
