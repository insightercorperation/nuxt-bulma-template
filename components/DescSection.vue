<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div v-if="imagePosition == 'right'" class="columns is-vcentered">
        <div class="column is-5">
          <h1 class="ins-desc-title">{{ title }}</h1>
          <h2 class="ins-desc-subtitle" v-html="subtitle"></h2>
          <slot />
        </div>
        <div class="column is-7">
          <img :src="resolvedImageUrl" :alt="imageDesc" />
        </div>
      </div>
      <div v-else class="columns is-vcentered">
        <div class="column is-5 top">
          <h1 class="ins-desc-title">{{ title }}</h1>
          <h2 class="ins-desc-subtitle" v-html="subtitle"></h2>
          <slot />
        </div>
        <div class="column is-2" style="order: 2;" />
        <div class="column is-7 bottom">
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
    splitSemicolon() {
      if (this.subtitle) {
        return this.subtitle.split(';')
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.ins-desc-title {
  font-size: 2rem;
  font-weight: 900;
}
.ins-desc-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
}
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
