<template>
  <section class="hero-is-medium">
    <header
      :class="{ 'no-display': !Boolean(title) }"
      class="ins-section-header"
    >
      <h3 class="title">{{ title }}</h3>
      <h5 class="subtitle">{{ subtitle }}</h5>
    </header>
    <div class="columns is-multiline is-variable">
      <team-member-card
        v-for="member in members"
        :key="member.name"
        :name="member.name"
        :job="member.job"
        :desc="member.desc"
        :image="member.image"
        :hover-image="member.hoverImage"
        class="column is-4 ins-card-element"
      >
      </team-member-card>
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
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    members: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.no-display {
  display: none;
}
.ins-card-element {
  margin: 0 0rem 2rem rem;
}

@media screen and (min-width: 769px), print {
  .ins-card-element {
    margin: 0 0rem 5rem 0rem;
  }
}
</style>
