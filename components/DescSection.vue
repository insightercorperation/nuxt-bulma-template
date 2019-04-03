<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div v-if="imagePosition == 'right'" class="columns is-vcentered">
        <div class="column is-5">
          <header class="ins-section-header has-text-left">
            <h3 class="title">{{ title }}</h3>
            <div v-if="splitSubtitleBy">
              <h5 v-for="text in splittedSubtitle" :key="text" class="subtitle">
                {{ text }}
              </h5>
            </div>
            <div v-else>
              <h2 class="subtitle">{{ subtitle }}</h2>
            </div>
          </header>
          <div class="ins-content-container">
            <slot />
          </div>
        </div>
        <div class="column is-6">
          <img :src="resolvedImageUrl" :alt="imageDesc" />
        </div>
      </div>
      <div v-else class="columns is-vcentered">
        <div class="column is-5 is-offset-1 top">
          <header class="ins-section-header has-text-left">
            <h3 class="title">{{ title }}</h3>
            <div v-if="splitSubtitleBy">
              <h5 v-for="text in splittedSubtitle" :key="text" class="subtitle">
                {{ text }}
              </h5>
            </div>
            <div v-else>
              <h5 class="subtitle">{{ subtitle }}</h5>
            </div>
          </header>
          <slot />
        </div>
        <div class="column is-6 bottom">
          <img :src="resolvedImageUrl" :alt="imageDesc" />
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
    subtitle: {
      type: String,
      required: true
    },
    splitSubtitleBy: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageDesc: {
      type: String,
      required: true
    },
    imagePosition: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resolvedImageUrl: require(`../assets/${this.image}`)
    }
  },
  computed: {
    splittedSubtitle() {
      if (this.splitSubtitleBy) {
        return this.subtitle.split(this.splitSubtitleBy)
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.top {
  order: 1;
}
.bottom {
  order: 3;
}

@media screen and (min-width: 769px), print {
  .top {
    order: 3;
  }
  .bottom {
    order: 1;
  }
}
</style>
