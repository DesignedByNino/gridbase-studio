<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="contact-indicator">
      <g-image src="~/images/next-bl.svg" class="home-contact-arrow" />
      <h5 class="home-contact-text">contact us</h5>
    </div>
    <!-- main hero wrapper -->
    <div class="hero-wrap">
      <!-- mobile development start -->
      <div class="mobile-title">
        <!-- top flex container -->
        <div class="flex-left">
          <h2 class="mobile-h2">Împreună construim firme mai capabile.</h2>
          <g-image src="~/images/hero-blur-round.png" class="mobile-hero-img" />
        </div>
        <!-- top flex container end -->
        <p class="mobile-hero-p">
          Lucrăm pentru a stabili o conexiune armonioasă între oameni și ideile
          lor, prin design, programare-web, direcție artistică și fotografie.
        </p>
        <!-- mobile CTA button -->
        <g-link to="/" class="mobile-hero-btn">
          <span class="mobile-btn-text">galerie proiecte</span>
          <g-image
            src="~/images/gird-custom-arrow.svg"
            class="mobile-btn-arrow"
          />
        </g-link>
        <!-- mobile CTA button end -->
      </div>
      <!-- mobile development end -->
      <div class="left-side">
        <g-image
          src="~/images/down-right-arrow.svg"
          alt=""
          class="hero-arrow"
        />
        <g-image
          class="main-img"
          src="~/images/new-hero-img-asset.png"
          alt=""
        />
      </div>
      <div class="right-side">
        <h1 class="main-heading">Împreună construim firme mai capabile.</h1>
        <p class="hero-descrip">
          Lucrăm pentru a stabili o conexiune armonioasă între oameni și ideile
          lor, prin design, programare-web, direcție artistică și fotografie.
        </p>
        <div class="button-wrap">
          <button class="hero-btn">galerie proiecte</button>
          <g-image class="btn-arrow" src="~/images/curved-arrow.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- ideas section -->
    <div class="ideas">
      <h1 class="massive-h1">
        FIND YOUR IDEA
        <h3 class="ideas-h3">AND VOICE</h3>
      </h1>
      <g-image src="~/images/graphic-eight.svg" class="graphic-eight" />
      <p class="idea-one">
        We believe every story has right to be told on fare grounds. Design,
        development and visuals are just small gears in a constantly moving
        mechanism. It is the purposeful craftsmanship that pulls them to work
        efficiently together, this is our job, our mission.
      </p>
      <p class="idea-two">
        Explore below the ideas we have put together to help our partners
        understand their position in the digital world and made their message a
        clear voice .
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Homepage-Ro",
  // components: {
  //   Footer,
  // },
  metaInfo() {
    return {
      title: "gridbase studio® | Acasă",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
</style>