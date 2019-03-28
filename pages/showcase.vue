<template>
  <div>
    <!-- Add Sample components below -->
    <sponsor-section
      :title="sponsorSection.title"
      :images="sponsorSection.sponsorImages"
    />
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'

export default {
  name: 'Showcase',
  components: {
    SponsorSection
  },
  data() {
    // Add Sample data under your own namespaces
    return {
      sponsorSection: {
        title: '스폰서',
        // Image path should be relative to assests
        sponsorImages: [
          'vpsserver.png',
          'hebergeurweb.png',
          'tooltwist.png',
          'vpsserver.png',
          'hebergeurweb.png',
          'tooltwist.png'
        ]
      }
    }
  }
}
</script>

<style>
.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-enter,
.page-leave {
  opacity: 0;
}
</style>
