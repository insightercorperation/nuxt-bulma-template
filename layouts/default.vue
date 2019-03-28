<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="~assets/img/logo/buefy.png" alt="Buefy" height="28" />
          </a>

          <div
            class="navbar-burger"
            :class="{ 'is-active': showNav }"
            @click="showNav = !showNav"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <nuxt-link
              v-for="(item, key) of items"
              :key="key"
              :to="item.to"
              exact-active-class="is-active"
              class="navbar-item"
            >
              {{ item.title }}
            </nuxt-link>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-outlined is-success">Sign up</a>
                <a class="button is-outlined">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        },
        {
          title: 'Showcase',
          icon: 'lightbulb',
          to: { name: 'showcase' }
        }
      ]
    }
  }
}
</script>
