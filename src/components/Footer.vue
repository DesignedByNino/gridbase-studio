<template>
  <div class="main-footer">
    <footer class="flex-foo-cont">
      <!-- Footer top container -->
      <div class="foo-top-wrap">
        <h5 class="foo-top-adj">Uniqueness</h5>
        <img
          src="../images/footer-curved-text.svg"
          alt="creating powerful brands together"
          class="curved-text"
        />
        <h1 class="foo-top-title">Creating powerful brands together</h1>
        <h5 class="foo-top-adj">Creativity</h5>
      </div>
      <!-- Footer body container -->
      <div class="flex-foo-body">
        <!-- inline studio features -->
        <div class="foo-inline-features">
          <h2 class="foo-feature">FRONT-END DEV</h2>
          <h2 class="foo-feature">ART DIRECTION</h2>
          <h2 class="foo-feature">UI/UX</h2>
          <h2 class="foo-feature">PHOTOGRAPHY</h2>
        </div>
        <g-link to="/" class="foo-homepage-link">
          <!-- Logo Display -->
          <img
            src="../images/gridbase-default.svg"
            class="foo-logo"
            alt="logo image"
          />
          <!-- Homepage routing indicator -->
          <div class="flex-foo-home-indicator">
            <img
              src="../images/next.svg"
              class="foo-indicator-arrow"
              alt="small link arrow"
            />
            <h4 class="foo-indicator-text">BACK HOME</h4>
          </div>
        </g-link>
        <!-- Graphic Eight Element -->
        <img
          src="../images/footer-shape.svg"
          alt="graphic element eight footer"
          class="footer-graphic"
        />
        <!-- Public Business Info -->
        <div class="business-info-wrap">
          <h2 class="business-name">ROSE NETWORK SRL</h2>
          <h2 class="business-address">TAX ID | CIF : 41637338</h2>
          <h2 class="business-city">SIBIU | ROMANIA</h2>
        </div>
        <h2 class="foo-public-text">© gridbase™ - 2021 | Trade Mark</h2>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" >
// Questrial - Master font
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
// Arimo
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
// Cormorant Garamond
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
// Darker Grotesque
@import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap");

// color variables
$grid-black: #0b0b0b;
$grid-brown: #2c1608;
$nav-line: #979797;
$dev-green: #b8e1cc;
$dev-blue: #0a437a;
$dev-orange: #e8a64e;
$dev-teal: #008996;

// media breakpoint variables
$mob-exslim: 320px;
$mob-slim: 360px;
$mob-regular: 375px;
$mob-medium: 390px;
$mob-plus: 414px;
$mob-large: 428px;

$tab-small: 719px;
$tab-regular: 768px;
$tab-medium: 834px;
$tab-large: 1024px;
$tab-xlarge: 1366px;

* {
  box-sizing: border-box;
}
body {
  font-family: "Questrial", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

.main-footer {
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 120px 65px 15px;
  width: 100wv;
  .flex-foo-cont {
    // background-color: $dev-orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100vw;
    .foo-top-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: inherit;
      padding: 0 77px;
      border-bottom: 1px solid $nav-line;
      .curved-text {
        z-index: 13;
        max-width: 710px;
        position: relative;
        top: -10px;
      }
      .foo-top-title {
        display: none;
        font-family: "Cormorant Garamond";
        font-weight: 300;
        font-style: italic;
        letter-spacing: -1px;
        font-size: 50px;
        position: relative;
        top: -45px;
        z-index: inherit;
      }
      .foo-top-adj {
        font-weight: 200;
        z-index: 12;
        font-family: "Questrial", sans-serif;
        font-size: 17px;
      }
    }
    .flex-foo-body {
      z-index: 12;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: inherit;
      padding: 65px 77px 0px;
      .foo-inline-features {
        z-index: inherit;
        width: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .foo-feature {
          z-index: inherit;
          font-size: 21px;
          font-weight: 100;
          color: #6d6d6d;
          letter-spacing: 1.7px;
        }
      }
      .foo-homepage-link {
        z-index: 14;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        .foo-logo {
          margin-top: 180px;
          min-width: 607px;
          max-width: 607px;
          width: 607px;
          margin-bottom: 53px;
          position: relative;
          right: 47px;
          cursor: pointer;
        }
        .flex-foo-home-indicator {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          .foo-indicator-arrow {
            max-width: 30px;
          }
          .foo-indicator-text {
            text-align: center;
            font-size: 22px;
            text-decoration: none;
            color: $grid-black;
          }
        }
      }
      .footer-graphic {
        top: -220px;
        position: absolute;
        z-index: 1;
        min-width: 1440px;
        max-width: 1440px;
      }
      .foo-public-text {
        font-size: 29px;
        z-index: inherit;
        margin-top: 200px;
        text-align: center;
        font-weight: 300;
      }
      .business-info-wrap {
        z-index: 13;
        .business-name {
          display: none;
        }
        .business-address {
          display: none;
        }
        .business-city {
          display: none;
        }
      }
    }
  }
}

// Responsive Mobile design || Responsive Mobile design || Responsive Mobile design || Responsive Mobile design ||

// Global ViewPort Changes
@media screen and (min-width: $mob-exslim) and (max-width: 1020px) {
  .main-footer {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    max-width: 100vw;
    padding: 35px 0 0 0;
    position: relative;
    .flex-foo-cont {
      // background-color: $dev-teal;
      max-width: 100vw;
      padding: 0 17px;
      .foo-top-wrap {
        justify-content: center;
        // background-color: $dev-teal;
        max-width: 100vw;
        width: 100%;
        padding: 0;
        border: 0;
        .curved-text {
          justify-self: center;
        }
        .foo-top-title {
          font-size: 22px;
          text-align: center;
        }
        .foo-top-adj {
          display: none;
          font-size: 14px;
        }
      }
      .flex-foo-body {
        max-width: 100vw;
        width: 100%;
        padding: 0;
        .foo-inline-features {
          display: none;
          max-width: 100vw;
          width: 100%;
          .foo-feature {
            display: none;
            font-size: 18px;
            letter-spacing: 1.5px;
          }
        }
        .footer-graphic {
          top: -110px;
          max-width: 870px;
          min-width: 870px;
          width: 870px;
        }
        .foo-homepage-link {
          padding-top: 30px;
          .foo-logo {
            margin-top: 35px;
            min-width: 280px;
            max-width: 280px;
            width: 280px;
            margin-bottom: 19px;
            position: relative;
            right: 0px;
          }
        }
        .flex-foo-home-indicator {
          padding-bottom: 35px;
          .foo-indicator-arrow {
            position: relative;
            top: 17px;
          }
          .foo-indicator-text {
            text-transform: lowercase;
            position: relative;
            top: 10px;
          }
        }
        .foo-public-text {
          margin-top: 80px;
          text-align: center;
          font-weight: 300;
          font-size: 20px;
          padding-bottom: 10px;
        }
        .business-info-wrap {
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .business-name {
            display: block;
            padding: 0;
            margin: 0;
            font-weight: 200;
            // font-size: 19px;
          }
          .business-address {
            display: block;
            padding: 0;
            margin: 0;
            font-weight: 200;
            // font-size: 19px;
          }
          .business-city {
            display: block;
            padding: 0;
            margin: 0;
            font-weight: 200;
            // font-size: 19px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: $mob-plus) {
  .main-footer {
    .foo-top-wrap {
      .curved-text {
        top: 5.3px;
      }
    }
  }
}

// BreakPoint 360px
</style>