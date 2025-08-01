<template>
  <div class="illusion">
    <h3 id="head">Illusion</h3>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="`/illusion/${post.slug}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import 'core-js/features/date'  

export default {
  name: 'illusionView',
  data(){
    return{
    posts:[
      {id:1,title:'Light flash',slug:'light-flash'},

    ]}
  }
};
</script>

<style scoped>
#head{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.illusion {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}
.post-list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 1rem 0;
}

.post-list a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
}

.post-list a:hover {
  text-shadow: #333 0.5px 0.5px 0.5px;
}
</style>