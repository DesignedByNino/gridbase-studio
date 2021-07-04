<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="contact-indicator">
      <img
        src="../images/next.svg"
        class="home-contact-arrow"
        alt="small arrow"
      />
      <h5 class="home-contact-text">contact us</h5>
    </div>
    <!-- main hero wrapper -->
    <div class="hero-wrap">
      <div class="hero-heading-container">
        <h1 class="hero-heading">Together building better brands.</h1>
        <div class="hero-content-image">
          <g-image
            class="purple-hero-blur"
            src="~/images/purple-hero-blur.svg"
            alt="purple blur"
          />
          <g-image
            class="round-vapors-image"
            src="~/images/round-vapors-mobile.png"
            alt="round vapors image"
          />
        </div>
      </div>
    </div>

    <!-- Services section -->
    <a id="services-provided">
      <div class="services-main-container">
        <h1 class="services-headline">Services we proudly provide</h1>
        <g-image
          src="~/images/next.svg"
          class="services-arrow"
          alt="simple gray arrow"
        />
      </div>
    </a>
  </Layout>
</template>

<script>
export default {
  name: "Homepage",
  // components: {
  //   Footer,
  // },
  metaInfo() {
    return {
      title: "gridbase studio® | Home",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
</style>
