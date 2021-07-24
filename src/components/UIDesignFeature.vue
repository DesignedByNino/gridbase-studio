<template>
  <div class="main-feature-wrapper">
    <div class="feature-card-rounded">
      <!-- <g-image
        src="~/images/studio-features/ui-design.webp"
        class="background-image"
        alt="abstract background image"
      /> -->
      <h1 class="feature-title">UI Design</h1>
      <span class="title-white-line"></span>
      <div class="feature-text-body">
        <p class="feature-paragraph">A visual therapy, no compromise.</p>
        <p class="feature-paragraph">
          Color, Typography, Dimension and Contrast, we pay attention to the
          very essential fundamentals of every design.
        </p>
        <p class="feature-paragraph">
          Creating a sense of ease and communicating a clear message with every
          flow of the user’s attention.
        </p>
      </div>
      <div class="feature-id-number">0.1</div>
    </div>
    <!-- this element below is as large as the top level component, and larger than the background image with rounded corners -->
    <div class="color-blur"></div>
  </div>
</template>

<script>
export default {
  name: "UIDesignFeature",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

.main-feature-wrapper {
  background-color: $dev-teal;
  position: relative;
  width: auto;
  max-width: auto;
  min-width: auto;
  min-height: 446px;
  padding: 0 18.5px;
  display: flex;
  flex-direction: column;
  .feature-card-rounded {
    position: relative;
    min-width: auto;
    width: auto;
    max-width: auto;
    height: auto;
    min-height: 446px;
    max-height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 23px;
    background: url("https://60cf403ac6dfe3000764b85d--gridbase-studio-prod.netlify.app/assets/img/hero-blur-round.beb8ba12.png");
  }
}
</style>