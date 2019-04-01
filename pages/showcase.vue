<template>
  <div>
    <!-- Add Sample components below -->
    <sponsor-section
      :title="sponsorSection.title"
      :images="sponsorSection.sponsorImages"
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
    <contact-section
      :map-src="contactSection.mapSrc"
      :adress="contactSection.adress"
      :phone="contactSection.phone"
      :email="contactSection.email"
    />
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'
import DescSection from '~/components/DescSection'
import ContactSection from '~/components/ContactSection.vue'

export default {
  name: 'Showcase',
  components: {
    SponsorSection,
    DescSection,
    ContactSection
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
      ],
      contactSection: {
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.110768497124!2d126.88833755170758!3d37.57600927969696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c991346a0febd%3A0xa13d6751e4b0eec9!2zKOyjvCnsnbjsgqzsnbTthLA!5e0!3m2!1sko!2skr!4v1554083841549!5m2!1sko!2skr',
        adress: '서울특별시 마포구 매봉산로 37 DMC 산학협력연구센터 601',
        phone: '070-7548-9182',
        email: 'contacts@ninestairs.co.kr'
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
