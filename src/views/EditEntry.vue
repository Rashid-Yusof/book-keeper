<!-- vue component for edit entry and new entry
if new entry, form appears blank
if edit entry (which would redirect from book details),
form will be pre-filled
initially planned to have update button to send new details
to db.json -->

<template>

  <!-- initially planned to have submit be rehandled to react and send 
  data to db.json -->
  <form @submit.prevent="add">
    <label>Book Name:</label>
    <input v-if=newBook type="text" required v-model="title">
    <select v-else v-model="title">
      <!-- placeholder value -->
            <option value="Narnia">Narnia</option> 
            <option value="Azkaban">Azkaban</option>
    </select>

    <div class="new">
        <input type="checkbox" v-model="newBook">
        <label class="checkbox">New book?</label>
    </div>

    <label>Page Number:</label>
    <input type="text" required v-model="pageNumber">

    <label>Summary:</label>
    <textarea name="textarea" cols="30" rows="10" 
    required v-model="summary" class="summary"></textarea>

    <div class="submit">
        <button>Create New Entry</button>
    </div>

  </form>

  <!-- testing for data binding to ensure data values 
   link with form values

  <p>Book: {{ title }}</p>
  <p>Bookmark: {{ pageNumber }}</p>
  <p>Summary: {{ summary }}</p>
  <p>New Book: {{ newBook }}</p> -->

</template>

<script>
export default {
  data() {
    return {
        title: '',
        pageNumber: '',
        summary: '',
        newBook: false,
        arr: []
    }
  },

  name: 'EditEntry',
  components: {  },
  
  methods: {
    // placeholder submit handler (not working)
      add: function (e) {
          this.arr.push({title: this.title, pageNumber: this.pageNumber, summary: this.summary});
          console.log(1);
      },
      saveFile: function() {
        const data = JSON.stringify(this.arr)
        window.localStorage.setItem('arr', data);
        console.log(JSON.parse(window.localStorage.getItem('arr')))
  }
  }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: #ffffff81;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #2e2e2e;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select, textarea{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.checkbox{
  font-size: 0.8em;
  color: #474747;
}

.submit {
    text-align: center;
}
</style>