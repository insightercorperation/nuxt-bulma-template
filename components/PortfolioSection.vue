<template>
  <section class="section">
    <header class="ins-section-header">
      <h3 class="title">{{ title }}</h3>
      <h5 class="subtitle">{{ subtitle }}</h5>
    </header>
    <div class="ins-portfolio-container">
      <portfolio-card
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :subtitle="item.subtitle"
        :style="{ width: cardsize + 'px' }"
      />
    </div>
  </section>
</template>
<script>
import MagicGrid from 'magic-grid'
import PortfolioCard from './PortfolioCard.vue'

export default {
  components: {
    PortfolioCard
  },
  props: {
    title: {
      type: String,
      default: 'Portfolio'
    },
    subtitle: {
      type: String,
      default: 'explore our portfolio'
    },
    items: {
      type: Array,
      default: () => []
    },
    cardsize: {
      type: Number,
      default: 240
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      const magicGrid = new MagicGrid({
        container: '.ins-portfolio-container',
        animate: true,
        gutter: 15,
        static: true,
        useMin: true
      })
      magicGrid.listen()
    })
  }
}
</script>
