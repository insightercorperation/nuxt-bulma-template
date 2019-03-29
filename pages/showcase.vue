<template>
  <div>
    <!-- Add Sample components below -->
    <sponsor-section
      :title="sponsorSection.title"
      :images="sponsorSection.sponsorImages"
    />
    <jumboSection
      title="선도적인 기술과;데이터를 통한 유의미한 가치 창출"
      image="jumbo.jpeg"
      :full-height="false"
      :split-subtitle-by="';'"
    />
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'
import JumboSection from '~/components/JumboSection.vue'

export default {
  name: 'Showcase',
  components: {
    SponsorSection,
    JumboSection
  },
  data() {
    // Add Sample data under your own namespaces
    return {
      sponsorSection: {
        title: '스폰서',
        // Image path should be relative to assests
        sponsorImages: [
          'img/logo/vpsserver.png',
          'img/logo/hebergeurweb.png',
          'img/logo/tooltwist.png',
          'img/logo/vpsserver.png',
          'img/logo/hebergeurweb.png',
          'img/logo/tooltwist.png'
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
