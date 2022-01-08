<template>
  <main class="p-4 pt-14 lg:p-10 max-w-4xl">
    <h2 class="text-3xl lg:text-5xl tracking-widest mb-6">About</h2>
    <div class="markdown" v-html="$md.render(about.attributes.text)" />
  </main>
</template>

<script>
import Meta from '~/assets/mixins/meta'

export default {
  name: 'AboutPage',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'About',
      },
    }
  },
  async asyncData(context) {
    return await context.$strapi.find('api/about', {
      populate: '*'
    })
      .then(res => {
        return {
          about: res.data
        }
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    getThumbnail(work) {
      if (!work.attributes.thumbnail.data) {
        return ""
      }
      return work.attributes.thumbnail.data.attributes.url
    },
  }
}
</script>
