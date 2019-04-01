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
  </div>
</template>

<script>
import SponsorSection from '~/components/SponsorSection.vue'
import DescSection from '~/components/DescSection'
import TeamMemberSection from '~/components/TeamMemberSection'

export default {
  name: 'Showcase',
  components: {
    SponsorSection,
    DescSection,
    TeamMemberSection
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
