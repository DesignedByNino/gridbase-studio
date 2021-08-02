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
      <div class="feature-id-number">0.2</div>
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