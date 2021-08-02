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
      <div class="hero-heading-image-container">
        <h1 class="hero-heading">Together building better brands.</h1>
        <div class="hero-image-wrapper">
          <svg
            class="purple-hero-blur"
            width="468"
            height="401"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                x="-47.9%"
                y="-68.9%"
                width="195.9%"
                height="237.8%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feGaussianBlur stdDeviation="42.5" in="SourceGraphic" />
              </filter>
            </defs>
            <path
              filter="url(#a)"
              d="M0 20.5h266v185H0z"
              transform="translate(94 87.5)"
              fill="#8B4B84"
              fill-rule="evenodd"
            />
          </svg>
          <g-image
            class="round-vapors-image desktop-disabled"
            src="~/images/round-vapors-mobile.png"
            alt="round vapors image"
          />
          <g-image
            class="round-vapors-image-desktop mobile-disabled"
            src="~/images/round-vapors-desktop.png"
            alt="round vapors image desktop"
          />
        </div>
      </div>
      <div class="paragraph-center-container">
        <p class="hero-paragraph">
          We provide a seamless solution to express your brand’s identity.
          Improving communication through meaningful design, development & art
          direction.
        </p>
      </div>
      <g-link class="hero-button-container" to="/portfolio/">
        <span class="hero-button-text">see our work</span>
        <svg
          class="hero-button-arrow"
          width="126"
          height="11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#DADADA" fill-rule="evenodd">
            <path
              d="M119.37785352 2.52642696l4.97422544 3.35515742-.27959646.41451878c-.15441685.2289324-.46518283.28933919-.69411523.13492234l-5.38874423-3.63475388c.30883372-.4578648.93036567-.57867838 1.38823048-.26984466z"
            />
            <path
              d="M119.37785352 9.95142904l4.97422544-3.35515742-.27959646-.41451878c-.15441685-.2289324-.46518283-.28933919-.69411523-.13492234l-5.38874423 3.63475388c.30883372.4578648.93036567.57867838 1.38823048.26984466z"
            />
            <path
              d="M125.06962295 6.23723404l-1 .5v-1zM1.39039619 3.18919659c.26366378.69388448.55103759 1.4828713.86212143 2.36696045.10578036.30062402.42489078.42236806.92232586.37179981.26142582-.02657602.61742854-.19072241 1.14730079-.19072241H123.5c.276142 0 .5.22385763.5.5 0 .27614238-.223858.5-.5.5H2.4067404c-.46230429 0-.86434577-.31689558-.97233527-.76641035l-.625143-2.60220687c-.03930609-.16361469.06146594-.32811448.22508063-.36742057.14906656-.03581111.30152561.04471702.35605343.18799994z"
            />
          </g>
        </svg>
      </g-link>
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
    <StudioFeatures />
  </Layout>
</template>

<script>
import StudioFeatures from "~/components/StudioFeatures.vue";

export default {
  name: "Homepage",
  components: {
    StudioFeatures,
  },
  metaInfo() {
    return {
      title: "gridbase studio® | Home",
    };
  },
};
</script>

<style lang="scss">
// Questrial - Master font
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
// Arimo
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
// Cormorant Garamond
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
// Darker Grotesque
@import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-family: "Questrial", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.mobile-disabled {
  display: none;
}
// Homepage Contact Indicator
.contact-indicator {
  display: none;
  flex-direction: column;
  align-items: center;
  max-width: 82px;
  position: absolute;
  top: 66px;
  right: 33px;
  .home-contact-arrow {
    max-width: 15px;
  }
  .home-contact-text {
    color: #9d9d9d;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 300;
  }
}

// HERO SECTION
.hero-wrap {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: auto;
  width: auto;
  max-width: auto;
  min-height: 640px;
  .hero-heading-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: auto;
    width: auto;
    max-width: 100%;
    padding: 88.5px 18.5px 0 18.5px;
    position: relative;
    .hero-heading {
      z-index: 11;
      position: absolute;
      right: 18.5px;
      min-width: 298px;
      width: 298px;
      max-width: 390px;
      font-style: normal;
      font-weight: normal;
      font-size: 33.6px;
      line-height: 35px;
      text-align: right;
      color: #ffffff;
    }
    .hero-image-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      max-width: 100%;
      .purple-hero-blur {
        z-index: 9;
        position: absolute;
        top: -89px;
        left: -55px;
        width: auto;
        height: 385px;
      }
      .round-vapors-image {
        width: auto;
        height: 213px;
        position: relative;
        right: -100px;
      }
    }
  }
  .paragraph-center-container {
    margin-top: 72px;
    padding: 0 0 0 19px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .hero-paragraph {
      z-index: 11;
      min-width: 272px;
      min-height: 120px;
      width: auto;
      height: auto;
      max-width: 60%;
      font-style: normal;
      font-weight: 200;
      font-size: 15px;
      line-height: 26px;
    }
  }
  .hero-button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 191px;
    min-height: 52px;
    background: $grid-black;
    border-radius: 14.5px;
    border: 1px solid #979797;
    box-sizing: border-box;
    text-decoration: none;
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 14.85px;
    line-height: 15px;
    position: relative;
    top: 23px;
    .hero-button-text {
      font-weight: 200;
      font-style: normal;
    }
  }
}

// SERVICES SECTION
#services-provided {
  display: flex;
  flex-direction: column;
  .services-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 19px;
    .services-headline {
      font-size: 70px;
      line-height: 58px;
      font-weight: 400;
      color: $grid-black;
    }
    .services-arrow {
      max-width: 55px;
      //
      width: 26px;
      height: 40px;
      object-fit: contain;
      transform: rotate(180deg);
    }
  }
}

// Desktop styles
@media screen and (min-width: 1025px) and (max-width: 1920px) {
  .desktop-disabled {
    display: none;
  }
  // Homepage Contact Indicator
  .contact-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 82px;
    position: absolute;
    top: 66px;
    right: 33px;
    .home-contact-arrow {
      max-width: 15px;
    }
    .home-contact-text {
      color: #9d9d9d;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 300;
    }
  }
  hero-wrap {
    background-color: $dev-blue;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: auto;
    width: auto;
    max-width: auto;
    .hero-heading-image-container {
      background-color: $dev-green;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: auto;
      width: auto;
      max-width: 100%;
      padding: 88.5px 18.5px 0 18.5px;
      position: relative;
      .hero-heading {
        z-index: 11;
        position: absolute;
        right: 18.5px;
        min-width: 298px;
        width: 298px;
        max-width: 390px;
        font-style: normal;
        font-weight: normal;
        font-size: 33.6px;
        line-height: 35px;
        text-align: right;
        color: #ffffff;
      }
      .hero-image-wrapper {
        background-color: $dev-orange;
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 100%;
        .purple-hero-blur {
          position: static;
          width: auto;
        }
        .round-vapors-image-desktop {
          display: block;
        }
      }
    }
  }
}
</style>
