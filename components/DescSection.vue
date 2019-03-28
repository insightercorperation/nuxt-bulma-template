<template>
  <section class="section">
    <div v-if="imagePosition == 'right'" class="columns is-vcentered">
      <div class="column">
        <h1 class="ins-desc-title">{{ title }}</h1>
        <h2
          v-for="text in splitSemicolon"
          :key="text"
          class="ins-desc-subtitle"
        >
          {{ text }}
        </h2>
        <slot />
      </div>
      <div class="column">
        <img :src="resolvedImageUrl" :alt="imageDesc" />
      </div>
    </div>
    <div v-else class="columns is-vcentered">
      <div class="column">
        <img :src="resolvedImageUrl" :alt="imageDesc" />
      </div>
      <div class="column is-2" />
      <div class="column">
        <h1 class="ins-desc-title">{{ title }}</h1>
        <h2
          v-for="text in splitSemicolon"
          :key="text"
          class="ins-desc-subtitle"
        >
          {{ text }}
        </h2>
        <slot />
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

<style>
.ins-desc-title {
  font-size: 2rem;
  font-weight: 900;
}
.ins-desc-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
