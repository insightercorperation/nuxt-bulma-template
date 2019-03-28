<template>
  <section class="section">
    <jumboSection
      title="선도적인 기술과<br>데이터를 통한 유의미한 가치 창출"
      image-height="10"
      image-url="jumbo.jpeg"
    />
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub</a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/">Vue.js</a> and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import JumboSection from '~/components/JumboSection'

export default {
  name: 'HomePage',

  components: {
    Card,
    JumboSection
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
