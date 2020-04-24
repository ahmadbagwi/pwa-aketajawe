import Api from '@/services/Api'

export default {
  blogs () {
    return Api().get('blogs')
  },
  searchBlog (params) {
    return Api().get('blog/show/' + params.slug)
  }
}
