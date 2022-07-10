<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <NewFriend @get-friend-data="addFriend" />
    <ul>
      <FriendContact
        v-for="item in friends"
        :id="item.id"
        :friend="item"
        :isVisibleProps="item.isVisibleDetail"
        :key="item.id"
        @random-name="toggleFavorite"
        @delete="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: '123',
          name: 'max',
          phone: '0123',
          email: 'max@localhost.com',
          isFavorite: true,
          isVisibleDetail: false,
        },
        {
          id: '124',
          name: 'manu',
          phone: '3210',
          email: 'manu@localhost.com',
          isFavorite: false,
          isVisibleDetail: true,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const foundFriend = this.friends.find((item) => item.id !== friendId);
      foundFriend.isFavorite = !foundFriend.isFavorite;
      alert(friendId);
    },
    addFriend(enteredFrinedData) {
      this.friends.push({
        name: enteredFrinedData.enteredName,
        phone: enteredFrinedData.enteredPhone,
        email: enteredFrinedData.enteredMail,
        id: new Date().toString(),
        isFavorite: false,
        isVisibleDetail: false,
      });
      console.log('add friend', enteredFrinedData);
    },
    deleteContact(id) {
      this.friends = this.friends.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:disabled {
  opacity: 0.4;
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
