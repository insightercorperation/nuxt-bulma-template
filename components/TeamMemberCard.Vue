<template>
  <div class="card ins-card">
    <div class="card-image" style="margin-bottom: 20px;">
      <figure class="image is-1by1 swap-on-hover">
        <img
          class="ins-img swap-on-hover__front-image"
          :src="resolvedImageUrl"
          :alt="imageName"
        />
        <img
          class="ins-img swap-on-hover__back-image"
          :src="resolvedHoverImageUrl"
          :alt="imageName"
        />
      </figure>
    </div>
    <div class="media-content">
      <p class="title" style="font-weight: 700;">{{ name }}</p>
      <h2 class="ins-card-job">{{ job }}</h2>
      <h2 class="subtitle">{{ desc }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    hoverImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resolvedImageUrl: require(`../assets/${this.image}`),
      resolvedHoverImageUrl: require(`../assets/${this.hoverImage}`),
      imageName: this.image.split('.')[0]
    }
  }
}
</script>

<style scoped>
.ins-card {
  box-shadow: none;
}
.ins-img {
  border-radius: 8px;
}
.ins-card-job {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: -10px;
}
.swap-on-hover {
  position: relative;
  margin: 0 auto;
}
.swap-on-hover .swap-on-hover__front-image {
  z-index: 9999;
  transition: opacity 0.5s linear;
}
.swap-on-hover:hover > .swap-on-hover__front-image {
  opacity: 0;
}
</style>
