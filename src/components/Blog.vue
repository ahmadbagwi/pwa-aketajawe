<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
        <b-container>
            <b-row>
              <b-col>
                <input type="text" name="slug" v-model="slug">
                <b-button variant="danger" @click="findBlog">Button</b-button>
              </b-col>
            </b-row>
            <b-row>
                <b-col col lg="4" xs="12" v-for="dataBlog in blog" :key="dataBlog.id">
                    <b-card :title="dataBlog.title" :img-src="dataBlog.featured">
                        <b-card-text v-html="dataBlog.content.substring(0,150)">
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Blog Aketajawe',
      blog: {},
      slug: null
    }
  },
  created () {
    BlogService.blogs({})
      .then(response => {
        this.blog = response.data.blogs
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    async findBlog () {
      await BlogService.searchBlog({
        slug: this.slug
      }).then(response => {
        this.blog = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
