<template>
  <section :class="classes">
    <div class="hero-body" :style="{ backgroundImage: `url(${url})` }">
      <div class="container">
        <header class="ins-jumbo-header">
          <h1 v-if="Boolean(splitTitleBy)" class="title">
            <div v-for="(token, index) in splittedTitle" :key="index">
              {{ token }}
            </div>
          </h1>
          <h1 v-else class="title">{{ title }}</h1>
          <h2 class="subtitle">{{ subtitle }}</h2>
          <h2 class="desc">{{ desc }}</h2>
        </header>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    fullHeight: {
      type: Boolean,
      default: false
    },
    splitTitleBy: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      url: require(`../assets/${this.image}`),
      classes: this.fullHeight ? 'hero is-fullheight' : 'hero is-large'
    }
  },
  computed: {
    splittedTitle() {
      if (this.splitTitleBy !== '') {
        return this.title.split(this.splitTitleBy)
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.ins-jumbo-title {
  color: white;
  padding-left: 5rem;
}
</style>
