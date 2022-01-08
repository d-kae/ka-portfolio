export default {
  head () {
    let headObj = {}
    if (typeof this.meta.titleTemplate !== 'undefined') {
      headObj.titleTemplate = this.meta.titleTemplate
    }

    let meta = []
    if (typeof this.meta.title !== 'undefined') {
      const siteTitle = this.$config.siteName
      headObj.title = this.meta.title + ' | ' + siteTitle
      meta.push({ hid: 'og:title', name: 'og:title', content: this.meta.title + ' | ' + siteTitle })
      meta.push({ hid: 'twitter:title', name: 'twitter:title', content: this.meta.title + ' | ' + siteTitle })
    }

    if (typeof this.meta.description !== 'undefined') {
      meta.push({ hid: 'description', name: 'description', content: this.meta.description })
      meta.push({ hid: 'og:description', name: 'og:description', content: this.meta.description })
      meta.push({ hid: 'twitter:description', name: 'twitter:description', content: this.meta.description })
    }
    if (typeof this.meta.type !== 'undefined') {
      meta.push({ hid: 'og:type', name: 'og:type', content: this.meta.type })
    }
    if (typeof this.meta.url !== 'undefined') {
      meta.push({ hid: 'og:url', name: 'og:url', content: this.meta.url })
    }
    if (typeof this.meta.image !== 'undefined') {
      meta.push({ hid: 'og:image', name: 'og:image', content: this.meta.image })
      meta.push({ hid: 'twitter:image', name: 'twitter:image', content: this.meta.image })
    }
    if (meta.length) {
      headObj.meta = meta
    }
    return headObj
  },
  created() {
    this.meta.url = this.$config.baseUrl + this.$route.fullPath
  }
}
