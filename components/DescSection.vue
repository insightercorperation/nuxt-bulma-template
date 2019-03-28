<template>
  <section class="section">
    <div v-if="image.location == 'right'" class="columns is-vcentered">
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
        <img :src="require(`@/assets/${image.path}`)" :alt="image.desc" />
      </div>
    </div>
    <div v-else class="columns is-vcentered">
      <div class="column">
        <img :src="require(`@/assets/${image.path}`)" :alt="image.desc" />
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
      path: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      type: Object,
      required: true
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
