<template>
  <section class="hero is-large">
    <div class="hero-body" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div class="container">
        <h1 class="title" v-html="title">
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- <div
      class="centered"
      :style="{
        backgroundImage: 'url(' + image + ')',
        height: imageHeight + 'px'
      }"
    >
      <div
        class="title"
        :style="{ 'padding-top': paddingTop + 'px' }"
        v-html="title"
      ></div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageHeight: {
      type: null,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      image: require('../assets/' + this.imageUrl + '.jpeg')
      // paddingTop: this.imageHeight / 2
    }
  }
}
</script>

<style scoped>
.title {
  color: white;
  padding-left: 5rem;
}
</style>
