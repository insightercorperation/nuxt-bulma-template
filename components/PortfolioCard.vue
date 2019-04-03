<template>
  <div class="ins-card">
    <figure class="swap-on-hover">
      <img
        :src="resolvedImageURL"
        :alt="imageName"
        class="ins-img swap-on-hover__front-image"
      />
      <div class="ins-img-desc swap-on-hover__back-image">
        <div class="ins-content-container">
          <span class="subtitle has-text-white">{{ title }}</span
          ><br /><span class="desc has-text-white">{{ subtitle }}</span>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resolvedImageURL: require(`../assets/${this.image}`),
      imageName: this.image.split('.')[0]
    }
  },
  mounted() {
    // const img = this.$el.children[0]
    // this.height = img.naturalHeight
  }
}
</script>

<style lang="scss" scoped>
.ins-card {
  object-fit: none;
  display: inline-block;

  .swap-on-hover {
    position: relative;
    width: 100%;

    .ins-img-desc {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .swap-on-hover .swap-on-hover__front-image {
    z-index: 9999;
    transition: opacity 0.1s linear;
  }
  .swap-on-hover .swap-on-hover__back-image {
    opacity: 0;
  }

  .swap-on-hover:hover > .swap-on-hover__front-image {
    opacity: 0.1;
  }

  .swap-on-hover:hover > .swap-on-hover__back-image {
    opacity: 0.7;
    background-color: black;
    color: white;
  }

  .ins-img {
    width: 100%;
  }
}
</style>
