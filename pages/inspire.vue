<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start <b-icon icon="rocket" size="is-large" />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">Antério Vieira</a>
    </h3>
  </section>
</template>

<script>
export default {
  transition: 'tweakOpacity'
}
</script>

<style>
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 0.2s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0;
}
</style>
