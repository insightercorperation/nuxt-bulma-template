<template>
  <div class="card ins-card">
    <div class="ins-image">
      <img :src="resolvedImageUrl" :alt="imageName" />
    </div>
    <div class="ins-content-container">
      <h1 class="title ins-card-title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <div v-for="desc in descs" :key="desc" class="desc">
        <div v-for="text in splittedDesc(desc)" :key="text">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    },
    descs: {
      type: Array,
      required: true
    },
    splitDescBy: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resolvedImageUrl: require(`../assets/${this.image}`),
      imageName: this.image.split('.')[0]
    }
  },
  methods: {
    splittedDesc(input) {
      return input.split(this.splitDescBy)
    }
  }
}
</script>

<style scoped>
.ins-card-title {
  margin-bottom: 3rem;
}
.ins-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  margin-bottom: 2rem;
}
.ins-title {
  font-size: 1.5rem;
  margin-bottom: 3rem;
}
.ins-descs {
  margin-bottom: 3rem;
}
.ins-desc {
  font-size: 1.1rem;
  margin-bottom: 5px;
}
.ins-card {
  box-shadow: -3px -3px 30px 4px rgba(12, 10, 10, 0.2),
    0 0 0 0px rgba(10, 10, 10, 0.5);
  border-radius: 8px;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding: 3.5rem;
}
</style>
