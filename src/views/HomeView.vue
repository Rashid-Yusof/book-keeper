
<!-- Vue component for main page. Initially planned this page to display
current books that have entries, as well as its latest entry
It has a "new entry button" that leads to EditEntry component -->
<template>

  <!-- Redirect button -->
  <div class="home">
    <h1>Book Keeper</h1>
    <button @click="newEntry">New Entry</button>
  </div>

  <!-- Display books from json file -->
  <ul v-if=books>
    <li v-for="book in books" :key="book.title">
      <h3>{{ book.title }}</h3>
      <p>{{ book.pageNumber }}</p>
      <p>{{ book.summary}}</p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'HomeView',
  components: {  },
  data() {
    return {
      books: []
    }
  },

  // fetching from db.json
  mounted() {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => this.books = data)
      .catch(err => console.log(err.message))
  },

  // redirect method
  methods: {
    newEntry() {
      this.$router.push({name: 'edit-entry'})
    }

    
  }
}
</script>

<style>
body{
      background: #eee;
      max-width: 960px;
      margin: 20px auto;
    }
p, h3, ul{
      margin: 0;
      padding: 0;
    }
li{
      list-style-type: none;
      background: #fff;
      margin: 20px auto;
      padding: 10px 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
</style>
