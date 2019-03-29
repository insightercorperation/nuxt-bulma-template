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
    <desc-section
      v-for="sample in descSection"
      :key="sample.title"
      :title="sample.title"
      :subtitle="sample.subtitle.text"
      :split-subtitle-by="sample.subtitle.splitBy"
      :image="sample.image.path"
      :image-desc="sample.image.desc"
      :image-position="sample.image.position"
    >
      <!-- Add slot in Desc Section -->
      <div style="padding-left: 0;">
        <div class="column">
          <h3>보유 기술 및 데이터</h3>
          <h3>- Social Insighter(소셜 빅데이터 분석 시스템)</h3>
          <h3>- I-Crawler, 소셜 빅데이터</h3>
        </div>
        <div class="column">
          <h3>사업 실적</h3>
          <h3>- 소셜 빅데이터 활용 마케팅 컨설팅</h3>
          <h3>- 바이럴 마케팅</h3>
          <h3>- SNS 활용 홍보</h3>
        </div>
        <div class="column">
          <span class="button is-primary">컨설팅 신청하기</span>
        </div>
      </div>
    </desc-section>
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'
import JumboSection from '~/components/JumboSection.vue'
import DescSection from '~/components/DescSection'

export default {
  name: 'Showcase',
  components: {
    SponsorSection,
    JumboSection,
    DescSection
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
      },
      descSection: [
        {
          title: '빅데이터 활용 컨설팅',
          subtitle: {
            text: 'split-by-semicolon; comma, semicolon; end',
            splitBy: ';'
          },
          image: {
            path: 'img/desc-section-test-1.png',
            desc: '빅데이터 활용 이미지',
            position: 'right'
          }
        },
        {
          title: '에듀테크',
          subtitle: {
            text: 'split-by-comma, comma, semicolon; end',
            splitBy: ','
          },
          image: {
            path: 'img/desc-section-test-2.png',
            desc: '에듀테크용 이미지',
            position: 'left'
          }
        }
      ]
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
