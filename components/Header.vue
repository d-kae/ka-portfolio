<template>
  <div class="fixed right-0 top-0 z-10 text-white opacity-80">
<!--    <button class="m-4 cursor-pointer" @click="toggleSidebar">-->
<!--      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">-->
<!--      <path v-show="!isSidebarOpen" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />-->
<!--      <path v-show="isSidebarOpen"-->
<!--            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />-->
<!--    </svg>-->
<!--    </button>-->
    <button class="menu-trigger m-5" :class="{ 'active' : isSidebarOpen}" @click="toggleSidebar">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar', !this.isSidebarOpen)
    }
  }
}
</script>

<style scoped>
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 38px;
  height: 30px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 13px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(13px) rotate(-315deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-13px) rotate(315deg);
}
</style>
