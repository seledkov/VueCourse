<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '&#9733;' : '' }}</h2>
    <button @click="toggleVisibleDetail">show/hide detail {{ id }}</button>
    <button @click="toggleFavorite">Add Favorite</button>
    <button @click="$emit('delete', id)">Delete</button>
    <ul v-if="isVisibleDetail">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: { friend: Object },
  props: {
    id: {
      type: String,
      required: true,
    },
    friend: {
      type: Object,
      required: true,
      // default: defaultPerson
    },
    isVisibleProps: {
      type: Boolean,
      required: false,
      default: false,
      validator: (value) => {
        return typeof value === 'boolean';
      },
    },
  },
  emits: ['random-name', 'delete'],
  // emits: {
  //   'random-name': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.log('emit random-name does not have id argument');
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      isVisibleDetail: this.isVisibleProps,
    };
  },
  methods: {
    toggleVisibleDetail() {
      this.isVisibleDetail = !this.isVisibleDetail;
    },
    toggleFavorite() {
      this.$emit('random-name', this.id);
    },
    // deleteContact() {
    //   console.log(this.id);
    // },
  },
};
</script>
