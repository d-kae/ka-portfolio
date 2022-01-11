<template>
  <div>
    <div class="hero h-screen mb-14">
      <div class="relative text-center flex justify-center items-center h-full w-full flex-col tracking-widest">
        <h2 class="text-4xl md:text-6xl mx-2 mb-6">Kaede Ashizaki's Portfolio</h2>
        <h3 class="text-lg mb-8">Web Engineer</h3>
      </div>
    </div>
    <section class="pb-12">
      <h3 class="text-2xl sm:text-3xl font-bold mb-6 leading-normal text-left sm:text-center px-4">Webサイト制作・Webアプリ開発であなたの課題を解決します</h3>
      <div class="flex items-center flex-col xl:flex-row max-w-7xl mx-auto">
        <div class="m-4">
          <img src="~/assets/img/introduction.jpg" alt="" width="500" height="">
        </div>
        <div class="p-4 xl:flex-1 flex-initial">
          <p class="mb-2 font-bold">芦崎 楓</p>
          <p class="mb-2 font-bold">Webエンジニア（エンジニア歴10年以上　プログラミング講師歴2年）</p>
          <p class="mb-8 font-bold">札幌市在住</p>
          <p class="mb-10 leading-7">
            東京のSIer企業でエンジニアとして従事したのちにIT系専門学校の講師となるが、<br />
            「自分のやりたいこと」を見つめ直した結果Webエンジニアとして独立。<br />
            好きなWeb開発をとことん突き詰め、独立後2年半ほどで10以上のWebアプリケーション開発案件に携わる。<br />
            2021年12月から個人でのWebサイト制作、Webアプリケーション開発の受注を開始。<br />
          </p>

          <div class="text-center xl:text-left">
            <NuxtLink
              to="/about"
              class="inline-block bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              <svg class="inline w-6 -ml-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
              <span class="inline-block align-middle">See More</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-600 pt-12 pb-12">
      <h3 class="text-center text-4xl md:text-5xl font-bold tracking-widest mb-12">Menu</h3>
      <div class="flex justify-center items-center flex-row mb-10">
        <div class="mx-4 lg:mx-10">
          <p class="text-center font-bold text-xl lg:text-2xl">Webサイト制作</p>
          <svg class="w-32 lg:w-64 mx-auto" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
          </svg>
        </div>
        <div class="mx-4 lg:mx-10">
          <p class="text-center font-bold text-xl lg:text-2xl">Webアプリ開発</p>
          <svg class="m-2 lg:m-4 w-28 lg:w-56 mx-auto" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z" />
          </svg>
        </div>
      </div>
      <div class="max-w-2xl px-4 mx-auto">
        <p class="mb-10 leading-7">
          Webサイト制作・Webアプリケーション開発についてお受けいたします。<br />
          10年以上のエンジニア経験から、幅広い要望に対応可能です。<br />
          IT知識に自信がないという方でもお客様に寄り添って丁寧にご対応いたします。<br />
          気軽にお問い合わせください。
        </p>
        <p class="mb-10 leading-7">
          【料金目安】<br />
          Webサイト制作：5万円〜 （相談可）<br />
          Webアプリケーション開発：要相談
        </p>
        <div class="text-center">
          <NuxtLink
            to="/contact"
            class="inline-block bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
            <svg class="inline w-6 -ml-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            <span class="inline-block align-middle">Contact</span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="bg-gray-500 pt-12 pb-12">
      <h3 class="text-center text-4xl md:text-5xl font-bold tracking-widest mb-12">Works</h3>
      <div class="flex flex-wrap flex-col md:flex-row items-center justify-center mb-8">
        <div v-for="(work, i) in works" :key="i" class="m-4">
          <NuxtLink :to="{ name: 'works-id', params: { id: work.id }}">
            <img class="hover:opacity-75" :src="getThumbnail(work)" alt="" width="300" height="">
          </NuxtLink>
        </div>
      </div>
      <div class="text-center mb-12">
        <NuxtLink
          to="/works"
          class="inline-block bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
          <svg class="inline w-6 -ml-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
          <span class="inline-block align-middle">See All</span>
        </NuxtLink>
      </div>
      <div class="max-w-2xl px-4 mx-auto">
        <p class="mb-4 leading-7 text-2xl font-bold">
          その他実績
        </p>
        <ul class="leading-7 list-disc ml-8">
          <li>
            ECサイト開発(Vue.js)
          </li>
          <li>
            農業系カーナビアプリケーションのWeb管理画面開発(Vue.js, Spring)
          </li>
          <li>
            データマーケティングWebアプリケーションの開発(Vue.js)
          </li>
          <li>
            英語学習系事業のコーポレートサイトおよびLPの運用・保守(Nuxt.js, Vue.js)
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData(context) {
    return await context.$strapi.find('api/works', {
      populate: '*',
      "pagination[page]": 1,
      "pagination[pageSize]": 3,
      sort: ['date:desc']
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

<style>
.hero {
  background-image: url('~/assets/img/hero.jpg');
}

.hero:before {
  /* 透過した黒を上から重ねるイメージ */
  background-color: rgba(0, 0, 0, 0.6);
  /* 自由に位置指定 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  height: 100vh;
}
</style>
