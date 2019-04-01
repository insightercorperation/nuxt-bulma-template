<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <iframe
            :src="mapSrc"
            width="100%"
            frameborder="0"
            style="border:0; height: 600px;"
            allowfullscreen
          />
        </div>
        <div class="column ins-text-column is-offset-1">
          <p class="ins-header ins-text-spacing">Contact Us</p>
          <div class="ins-text-spacing">
            <h1 class="ins-title">Address</h1>
            <h2 class="ins-subtitle">{{ address }}</h2>
          </div>
          <div class="ins-text-spacing">
            <h1 class="ins-title">Phone</h1>
            <h2 class="ins-subtitle">{{ phone }}</h2>
          </div>
          <div class="ins-text-spacing">
            <h1 class="ins-title">Email</h1>
            <h2 class="ins-subtitle">{{ email }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mapSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.ins-header {
  font-size: 3rem;
  font-weight: 600;
}
.ins-title {
  font-size: 1.3rem;
  font-weight: 450;
}
.ins-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  padding-top: 5px;
}
.ins-text-spacing {
  padding-bottom: 20px;
}
.ins-text-column {
  margin-bottom: 0px;
}

@media screen and (min-width: 769px), print {
  .ins-text-spacing {
    padding-bottom: 70px;
  }
  .ins-text-column {
    margin-bottom: 70px;
  }
  .ins-subtitle {
    padding-top: 10px;
  }
}
</style>
