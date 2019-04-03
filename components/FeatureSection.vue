<template>
  <section class="hero is-medium">
    <div class="half-block background-color" />
    <header class="ins-section-header">
      <h1 class="subtitle ins-feature-subtitle">{{ sectionTitle }}</h1>
    </header>
    <div class="hero-body columns">
      <feature-card
        v-for="card in featureCards"
        :key="card.title"
        :image="card.image"
        :title="card.title"
        :subtitle="card.subtitle"
        :descs="card.descs"
        :split-desc-by="card.splitDescBy"
        class="column"
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from '~/components/FeatureCard'

export default {
  components: {
    FeatureCard
  },
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
    featureCards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
}
.ins-feature-subtitle {
  margin-top: 4rem;
  margin-bottom: -5rem;
}
.half-block {
  width: 100px;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.background-color {
  width: 100%;
  background-color: #ecf3fc;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>
