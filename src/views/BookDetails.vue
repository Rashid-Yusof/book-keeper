<!-- vue component initially planned to display entries based on a chosen
drop-down selector by user. User was allowed to select, view and edit
entries from this page. -->

<template>

  <!-- placeholder. Wanted to create v-if to filter books based on id value -->
  <div v-if="books">
    <li v-for="book in books" :key="book.title">
      <h3>{{ book.title }}</h3>
      <p>{{ book.pageNumber }}</p>
      <p>{{ book.summary}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  data() {
    return {
      books: []
    }
  },

  // db fetch
  mounted() {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => this.books = data)
      .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>