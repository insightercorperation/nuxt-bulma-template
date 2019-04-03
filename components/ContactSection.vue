<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-6">
          <iframe
            :src="mapSrc"
            width="100%"
            frameborder="0"
            style="border:0; height: 600px;"
            allowfullscreen
          />
        </div>
        <div class="column is-offset-1">
          <article>
            <header class="ins-section-header has-text-left">
              <h3 class="title">Contact Us</h3>
            </header>
            <div class="ins-content-container">
              <div class="title ins-contact-title">Address</div>
              <div class="desc">{{ address }}</div>
            </div>
            <div class="ins-content-container">
              <div class="title ins-contact-title">Phone</div>
              <div class="desc">{{ phone }}</div>
            </div>
            <div class="ins-content-container">
              <div class="title ins-contact-title">Email</div>
              <div class="desc">{{ email }}</div>
            </div>
          </article>
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
.ins-contact-title {
  margin-top: 3rem;
}
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
