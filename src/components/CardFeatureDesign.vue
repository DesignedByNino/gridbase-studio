<template>
  <div class="main-feature-wrapper">
    <div class="feature-card-rounded">
      <!-- <g-image
        src="~/images/studio-features/feature-background-01.png"
        class="background-image"
        alt="abstract background image"
      /> -->
      <h1 class="feature-title">Design & Art Direction</h1>
      <div class="feature-id-number">0.1</div>
      <div class="feature-title-underline"></div>
      <div class="feature-text-body">
        <p class="feature-paragraph">
          A visual story without compromise, bringing joy to every user
          experience & interaction.
        </p>
      </div>
      <svg
        class="vertical-blur-01"
        width="363"
        height="570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <path
            d="M96 28h148c12.703 0 23 10.2975 23 23v400c0 12.703-10.297 23-23 23H96V28z"
            fill="#CD4732"
            fill-opacity=".5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x=".860138"
            y="-67.1399"
            width="361.28"
            height="636.28"
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
              stdDeviation="47.5699"
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
  name: "CardFeatureDesign",
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
  margin: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  .feature-card-rounded {
    background-image: url(../images/studio-features/feature-background-01.png);
    background-position: center;
    background-size: cover;
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
    overflow: hidden;
    .feature-title {
      font-style: normal;
      font-size: 46.85px;
      line-height: 48px;
      font-weight: 100;
      z-index: 11;
      color: $grid-black;
    }
    .feature-id-number {
      position: absolute;
      width: 126px;
      right: 10px;
      top: 50%;
      bottom: 35.43%;
      font-style: normal;
      font-weight: normal;
      font-size: 99px;
      line-height: 84px;
      display: flex;
      align-items: center;
      color: $grid-black;
      opacity: 0.8;
      z-index: 11;
    }
    .feature-title-underline {
      position: absolute;
      top: 68.4%;
      right: 0px;
      bottom: 30.49%;
      background-color: $grid-black;
      width: 181px;
      height: 3.5px;
      color: $grid-black;
      z-index: 11;
    }
    .feature-text-body {
      position: absolute;
      right: 24px;
      top: 69%;
      bottom: 5.38%;
      font-style: normal;
      font-weight: 100;
      font-size: 16px;
      line-height: 22px;
      text-align: right;
      max-width: 234px;
      margin: 0;
      padding: 0;
      z-index: 11;
      color: $grid-black;
    }
    .vertical-blur-01 {
      position: absolute;
      left: 59px;
    }
  }
}

// large phone breakpoint - iPhone Plus series & iPhone Max series
@media screen and (min-width: 1025px) and (max-width: 1920px) {
}
</style>