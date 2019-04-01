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
    <team-member-section :members="teamMemberSection" />
    <contact-section
      :map-src="contactSection.mapSrc"
      :adress="contactSection.adress"
      :phone="contactSection.phone"
      :email="contactSection.email"
    />
    <history-section
      :title="historySection.title"
      :subtitle="historySection.subtitle"
      :timeline-items="historySection.dataTimeline"
      :message-when-no-items="historySection.messageWhenNoItems"
    />
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'
import DescSection from '~/components/DescSection'
import ContactSection from '~/components/ContactSection.vue'
import HistorySection from '~/components/HistorySection'
import TeamMemberSection from '~/components/TeamMemberSection'

export default {
  name: 'Showcase',
  components: {
    SponsorSection,
    DescSection,
    TeamMemberSection,
    ContactSection,
    HistorySection
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
      teamMemberSection: [
        {
          name: 'Ari',
          job: 'iOS Developer',
          desc:
            '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
          image: 'img/teamMembers/ari.jpg',
          hoverImage: 'img/teamMembers/alex.jpg'
        },
        {
          name: 'Alex',
          job: 'Developer',
          desc: '안녕하세요. 알렉스입니다.',
          image: 'img/teamMembers/alex.jpg',
          hoverImage: 'img/teamMembers/ari.jpg'
        },
        {
          name: 'John',
          job: 'Developer',
          desc:
            '국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
          image: 'img/teamMembers/ari.jpg',
          hoverImage: 'img/teamMembers/ari.jpg'
        },
        {
          name: 'Cindy',
          job: 'Designer',
          desc: '안녕하세요. Cindy입니다.',
          image: 'img/teamMembers/cindy.png',
          hoverImage: 'img/teamMembers/ari.jpg'
        },
        {
          name: 'Maven',
          job: 'Developer',
          desc: '안녕하세요. Maven입니다.',
          image: 'img/teamMembers/maven.png',
          hoverImage: 'img/teamMembers/ari.jpg'
        }
      ],
      contactSection: {
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.110768497124!2d126.88833755170758!3d37.57600927969696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c991346a0febd%3A0xa13d6751e4b0eec9!2zKOyjvCnsnbjsgqzsnbTthLA!5e0!3m2!1sko!2skr!4v1554083841549!5m2!1sko!2skr',
        adress: '서울특별시 마포구 매봉산로 37 DMC 산학협력연구센터 601',
        phone: '070-7548-9182',
        email: 'contacts@ninestairs.co.kr'
      },
      historySection: {
        title: '타임라인',
        subtitle: '인사이터가 걸어온 길입니다.',
        dataTimeline: [
          {
            from: new Date(2014, 11),
            title: '인사이터 설립 (개인사업자)'
          },
          {
            from: new Date(2015, 1),
            title: '빅데이터 교육 사업 시작'
          },
          {
            from: new Date(2015, 5),
            title: 'I-crawler 개발 완료'
          },
          {
            from: new Date(2015, 8),
            title: 'Social Insighter 개발 완료'
          },
          {
            from: new Date(2016, 1),
            title: '(주)인사이터 설립'
          },
          {
            from: new Date(2016, 1),
            title: '2팀원 모집'
          }
        ],
        messageWhenNoItems: 'No articles found.'
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
