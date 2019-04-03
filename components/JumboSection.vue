<template>
  <section :class="classes">
    <div class="hero-body" :style="{ backgroundImage: `url(${url})` }">
      <div class="container">
        <div v-if="splitSubtitleBy">
          <h1
            v-for="text in splittedSubtitle"
            :key="text"
            class="title ins-jumbo-title"
          >
            {{ text }}
          </h1>
        </div>
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
    image: {
      type: String,
      required: true
    },
    fullHeight: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    splitSubtitleBy: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      url: require(`../assets/${this.image}`),
      classes: this.fullHeight ? 'hero is-fullheight' : 'hero is-large'
    }
  },
  computed: {
    splittedSubtitle() {
      if (this.splitSubtitleBy) {
        return this.title.split(this.splitSubtitleBy)
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
