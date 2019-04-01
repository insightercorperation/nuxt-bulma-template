<template>
  <section class="hero is-medium background-color">
    <header class="header ins-feature-header">
      <h1 class="title">{{ sectionTitle }}</h1>
    </header>
    <div class="hero-body columns ins-body">
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
.ins-feature-header {
  text-align: center;
  margin: 4rem 0 4rem 0;
}
.ins-body {
  /* padding: 0; */
  padding: 0 5rem 0 5rem;
}
.background-color {
  width: 100%;
  height: 40rem;
  /* height: 45rem; */
  background-color: #ecf3fc;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>
