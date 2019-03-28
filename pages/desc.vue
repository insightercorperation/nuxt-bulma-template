<template>
  <div>
    <desc-section
      title="title test"
      subtitle="sutitle test; subtitle spacing test"
      image="img/logo/buefy.png"
      image-desc="image test"
      image-location="0"
    >
      <div class="column" style="padding-left: 0;">
        <h3>slot test</h3>
      </div>
    </desc-section>
    <desc-section
      title="빅데이터 활용 컨설팅"
      subtitle="평범한 사람을 위한 분석이; 세상을 바꾼다."
      image="img/desc-section-test-1.png"
      image-desc="빅데이터 활용 이미지"
      image-location="1"
    >
      <div class="column" style="padding-left: 0;">
        <h3>보유 기술 및 데이터</h3>
        <h3>- Social Insighter(소셜 빅데이터 분석 시스템)</h3>
        <h3>- I-Crawler, 소셜 빅데이터</h3>
      </div>
      <div class="column" style="padding-left: 0;">
        <h3>사업 실적</h3>
        <h3>- 소셜 빅데이터 활용 마케팅 컨설팅</h3>
        <h3>- 바이럴 마케팅</h3>
        <h3>- SNS 활용 홍보</h3>
      </div>
      <div class="column" style="padding-left: 0;">
        <span class="button is-primary">컨설팅 신청하기</span>
      </div>
    </desc-section>
    <desc-section
      title="에듀테크"
      subtitle="데이터와 분석기술을 활용하여; 사용자 개인의 잠재력을; 최대한 발휘할 수 있도록; 최적화된 맞춤 학습을 제공합니다."
      image="img/desc-section-test-2.png"
      image-desc="에듀테크 이미지"
      image-location="0"
    >
      <div class="column" style="padding-left: 0;">
        <h3>보유 기술 및 데이터</h3>
        <h3>- E-Analysis, 다양한 언어 및 시험 관련 데이터</h3>
      </div>
      <div class="column" style="padding-left: 0;">
        <h3 class="is-primary">사업 실적</h3>
        <h3>- 워드캐스트 앱(사용자, DAU 등)</h3>
        <h3>- 출판(출판된 책 종류, 출판량 등)</h3>
      </div>
    </desc-section>
  </div>
</template>

<script>
import DescSection from '~/components/DescSection'

export default {
  name: 'Test',

  components: {
    DescSection
  }
}
</script>
