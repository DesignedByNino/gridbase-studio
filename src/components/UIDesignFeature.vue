<template>
  <div class="main-feature-wrapper">
    <div class="feature-card-rounded">
      <!-- <g-image
        src="~/images/studio-features/ui-design.webp"
        class="background-image"
        alt="abstract background image"
      /> -->
      <h1 class="feature-title">UI Design</h1>
      <div class="feature-title-underline"></div>
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
    <div class="color-blur">
      <svg
        class="ui-design-orange-blur"
        width="361"
        height="653"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <path
            d="M95 95h148c12.703 0 23 10.297 23 23v417c0 12.703-10.297 23-23 23H95V95z"
            fill="#BF5F36"
            fill-opacity=".7831"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0"
            y="0"
            width="361"
            height="653"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="47.5"
              result="effect1_foregroundBlur"
            />
          </filter>
        </defs>
      </svg>
    </div>
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
  overflow: hidden;
  // background-color: $dev-teal;
  position: relative;
  width: auto;
  max-width: 100%;
  min-width: auto;
  min-height: 446px;
  padding: 0 18.5px;
  display: flex;
  flex-direction: column;
  .feature-card-rounded {
    // mesh gradient
    background-image: #99ffcc;
    background-image: radial-gradient(
        at 48% 98%,
        hsla(29, 83%, 71%, 1) 0,
        transparent 52%
      ),
      radial-gradient(at 47% 76%, hsla(119, 70%, 69%, 1) 0, transparent 59%),
      radial-gradient(at 10% 76%, hsla(109, 71%, 74%, 1) 0, transparent 47%),
      radial-gradient(at 82% 69%, hsla(298, 60%, 73%, 1) 0, transparent 50%),
      radial-gradient(at 10% 42%, hsla(79, 82%, 77%, 1) 0, transparent 40%),
      radial-gradient(at 10% 37%, hsla(191, 98%, 66%, 1) 0, transparent 49%),
      radial-gradient(at 57% 19%, hsla(329, 95%, 78%, 1) 0, transparent 51%);
    // mesh gradient end code
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
    padding: 0 18.5px;
  }
  .feature-title {
    font-style: normal;
    font-size: 46.85px;
    line-height: 48px;
  }
  .feature-title-underline {
    position: absolute;
    top: 110px;
    right: 0px;
    background-color: $grid-black;
    width: 181px;
    height: 4px;
    border-radius: 1.3px;
    opacity: 69%;
  }
  .feature-text-body {
    position: relative;
    left: 125px;
    width: 162px;
    font-size: 14.85px;
    line-height: 19px;
  }
  .feature-id-number {
    position: absolute;
    width: 126px;
    height: 65px;
    left: -12px;
    top: 305px;
    font-style: normal;
    font-size: 81.85px;
    line-height: 84px;
    display: flex;
    align-items: center;
    text-align: center;
    transform: rotate(-90deg);
    opacity: 69%;
  }
  .color-blur {
    display: none;
    // display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 18.5px;
    height: auto;
    max-width: 100%;
    .ui-design-orange-blur {
      position: absolute;
      right: -80px;
      top: -45px;
      height: auto;
    }
  }
}
</style>