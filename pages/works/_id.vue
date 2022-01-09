<template>
  <div class="p-4 pt-14 lg:p-10 max-w-4xl">
    <NuxtLink class="inline-block hover:opacity-75 mb-8" to="/works"><< Works</NuxtLink>
    <h2 class="text-3xl md:text-5xl mb-6">{{ work.attributes.title }}</h2>
    <img class="mb-6" :src="getThumbnail(work)" width="750" alt="">
    <div class="markdown mb-12" v-html="$md.render(work.attributes.text)" />
    <div class="border-b md:w-52 w-full my-4"></div>
    <div class="flex justify-between md:w-52 w-full">
      <NuxtLink
        v-if="prevId"
        :to="{ name: 'works-id', params: { id: prevId } }"
        class="hover:opacity-75"
      >
        <svg class="inline w-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
        <span class="-mr-2 text-xl inline-block align-middle">Prev</span>
      </NuxtLink>
      <div v-else></div>
      <NuxtLink
        v-if="nextId"
        :to="{ name: 'works-id', params: { id: nextId } }"
        class="hover:opacity-75"
      >
        <span class="-ml-2 text-xl inline-block align-middle">Next</span>
        <svg class="inline w-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'

export default {
  name: "works-id",
  mixins: [Meta],

  data() {
    return {
      // 前の記事ID
      prevId: null,
      // 次の記事ID
      nextId: null
    }
  },
  mounted() {
    const currentId = Number(this.$route.params.id)
    const works = this.$store.state.works

    // 「前の記事」と「次の記事」のIDを取得
    for (let i = 0; i < works.length; i++) {
      if(works[i].id === currentId) {
        if (i > 0) {
          this.nextId = works[i - 1].id
        }
        if (i < works.length - 1) {
          this.prevId = works[i + 1].id
        }
      }
    }
  },

  async asyncData(context) {
    return await context.$strapi.findOne('api/works', context.params.id, {
      populate: '*'
    })
      .then(res => {
        const work = res.data
        const meta = {
          title:  work.attributes.title,
          description: work.attributes.description || '',
          image: work.attributes.thumbnail.data.attributes.url
        }
        return {
          work,
          meta
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

<style scoped>

</style>
