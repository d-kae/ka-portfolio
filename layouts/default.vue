<template>
  <transition name="page-fade" mode="out-in">
    <div class="h-screen" v-if="isShow">
      <Header class="block lg:hidden" :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
      <!--  Sidebar  -->
      <transition name="sidebar-slide" mode="out-in">
        <div
          v-if="isSidebarOpen || isPC"
          class="fixed w-64 h-full bg-gray-700 text-white p-6 z-10"
        >
          <h1 class="font-bold text-2xl mb-8 tracking-wide">
            <NuxtLink to="/">Kaede Ashizaki's Portfolio</NuxtLink>
          </h1>
          <ul>
            <li @click="isSidebarOpen = false">
              <NuxtLink to="/" class="block pl-2 py-3 hover:opacity-75 tracking-widest">Home</NuxtLink>
            </li>
            <li @click="isSidebarOpen = false">
              <NuxtLink to="/about" class="block pl-2 py-3 hover:opacity-75 tracking-widest">About</NuxtLink>
            </li>
            <li @click="isSidebarOpen = false">
              <NuxtLink to="/works" class="block pl-2 py-3 hover:opacity-75 tracking-widest">Works</NuxtLink>
            </li>
            <li @click="isSidebarOpen = false">
              <NuxtLink to="/contact" class="block pl-2 py-3 hover:opacity-75 tracking-widest">Contact</NuxtLink>
            </li>
          </ul>
          <div class="absolute bottom-8">
            <div class="flex gap-4 ml-1.5 mb-8">
              <a
                href="https://twitter.com/kaede_33"
                class="hover:opacity-75"
                target="_blank"
              >
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </a>
              <a
                href="https://biz-ka.site/"
                class="hover:opacity-75"
                target="_blank"
              >
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" />
                </svg>
              </a>
            </div>
            <p class="text-sm ml-1.5">©︎ Kaede Ashizaki</p>
          </div>
        </div>
      </transition>

      <div class="lg:ml-64 text-white">
        <transition name="page-fade" mode="out-in">
          <Nuxt />
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: "default.vue",
  components: {
    Header
  },
  data() {
    return {
      isSidebarOpen: false,
      isPC: false,
      isShow: false,
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      this.isPC = true
    }
    this.isShow = true
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleSidebar(value) {
      this.isSidebarOpen = value;
    },
    handleResize() {
      this.isPC = window.innerWidth > 1023;
    },
  }
}
</script>

<style scoped>
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity .8s;
}

.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transform: translate(0px, 0px);
  transition: transform 400ms;
}

.sidebar-slide-enter, .sidebar-slide-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
</style>
