<template>
  <div class="ins-tln-item-wrapper">
    <div class="ins-tln-line" />
    <header class="ins-tln-year">{{ item.year }}</header>
    <div class="ins-tln-events">
      <div
        v-for="(event, eventIndex) in item.events"
        :key="eventIndex"
        class="ins-tln-event-wrapper"
      >
        <div class="ins-line" />
        <div class="ins-date">{{ event.strDate }}</div>
        <div class="ins-title">{{ event.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/main.scss';

$line-offset: 55px;
$line-width: 10px;

.ins-tln-item-wrapper {
  .ins-tln-line {
    border-left: $line-width solid $primary;
    width: $line-width;
    height: 15px;
    margin-left: $line-offset;
  }
  .ins-tln-year {
    color: $primary;
    font-size: 2rem;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 10px solid $primary;
    text-align: center;
    padding-top: 24px;
    background-color: white;
  }
  .ins-tln-event-wrapper {
    margin-left: $line-offset;
    border-left: 10px solid $primary;
    display: flex;
    font-size: 1.5rem;

    .ins-line {
      height: 10px;
      width: 50px;
      margin-top: 17px;
      border-top: 3px solid $primary;
    }
    .ins-date {
      width: 120px;
      color: $dark;
      text-align: center;
    }

    .ins-title {
      color: $dark;
      font-weight: bold;
    }
  }
}
</style>
