<template>
  <section class="section">
    <header class="ins-section-header">
      <h3 class="title">{{ title }}</h3>
    </header>
    <div class="ins-sponsor-container">
      <div
        v-for="(item, key) of resolvedImages"
        :key="key"
        class="ins-sponsor-element"
      >
        <img :src="item.url" :alt="item.name" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: function() {
        return 'Sponsors'
      }
    },
    images: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      resolvedImages: this.images.map(image => {
        return {
          url: require(`../assets/${image}`),
          name: image.split('.')[0]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ins-sponsor-container {
  display: flex;
  flex-wrap: wrap;

  .ins-sponsor-element {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    min-height: 120px;
    img {
      max-width: 150px;
      filter: grayscale(100%);
      opacity: 0.66;
    }
    img:hover {
      filter: none;
      opacity: 1;
    }
  }
  .ins-sponsor-element:hover {
    filter: none;
    opacity: 1;
  }
}
</style>
