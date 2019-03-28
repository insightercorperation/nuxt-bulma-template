<template>
  <section class="section">
    <div v-if="imageLocation == 1" class="columns is-vcentered">
      <div class="column">
        <h1 class="ins-title">{{ title }}</h1>
        <div v-if="subtitle">
          <h2 v-for="text in splitComma" :key="text" class="ins-subtitle">
            {{ text }}
          </h2>
        </div>
        <slot />
      </div>
      <div class="column">
        <img :src="require(`@/assets/${image}`)" :alt="imageDesc" />
      </div>
    </div>
    <div v-else class="columns is-vcentered">
      <div class="column">
        <img :src="require(`@/assets/${image}`)" :alt="imageDesc" />
      </div>
      <div class="column is-2" />
      <div class="column">
        <h1 class="ins-title">{{ title }}</h1>
        <div v-if="subtitle">
          <h2 v-for="text in splitComma" :key="text" class="ins-subtitle">
            {{ text }}
          </h2>
        </div>
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
    imageLocation: {
      type: String, // 0: 왼쪽, 1: 오른쪽
      required: true
    }
  },
  computed: {
    splitComma() {
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
.ins-title {
  font-size: 2rem;
  font-weight: 900;
}
.ins-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
