<template>
  <main class="p-4 pt-14 lg:p-10">
    <h2 class="text-3xl lg:text-5xl tracking-widest mb-8">Works</h2>
    <div class="flex flex-wrap justify-center sm:justify-start">
      <div v-for="(work, i) in works" :key="i" class="m-4">
        <NuxtLink :to="{ name: 'works-id', params: { id: work.id }}">
          <img class="hover:opacity-75" :src="getThumbnail(work)" alt="" width="280" height="">
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
import Meta from '~/assets/mixins/meta'

export default {
  name: 'WorksPage',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Works',
      },
    }
  },
  async asyncData(context) {
    return await context.$strapi.find('api/works', {
      populate: '*',
      sort: ['date:desc'],
    })
      .then(res => {
        return {
          works: res.data
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
