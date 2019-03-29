<template>
  <section class="hero-is-medium">
    <div class="columns is-multiline is-variable is-8">
      <teamMemberCard
        v-for="member in members"
        :key="member.name"
        :name="member.name"
        :job="member.job"
        :desc="member.desc"
        :image="member.image"
        :hover-image="member.hoverImage"
        class="column is-4 ins-card-element"
      >
      </teamMemberCard>
    </div>
  </section>
</template>

<script>
import TeamMemberCard from '~/components/TeamMemberCard'

export default {
  components: {
    TeamMemberCard
  },
  props: {
    members: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.ins-card-element {
  margin: 0 2rem 2rem 2rem;
}

@media screen and (min-width: 769px), print {
  .ins-card-element {
    margin: 0 0rem 5rem 0rem;
  }
}
</style>
