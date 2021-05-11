<template>
  <footer class="main-footer">
    <div class="top-statement-box">
      <h2 class="footer-brand-statement">Creating powerful brands together</h2>
    </div>
    <div class="home-link-and-qualities">
      <div class="qualities-box">
        <span class="top-left-span">uniqueness</span>
        <span class="top-right-span">creativity</span>
      </div>
      <div class="middle-link-box">
        <g-link class="footer-index-link" to="/">
          <g-image
            src="~/images/gridbase-default-s.svg"
            alt="brand logo"
            class="footer-logo-image"
          />
          <div class="back-home-link-text-and-arrow">
            <g-image class="small-link-arrow" src="~/images/next.svg" />
            <h6 class="small-link-text">BACK HOME</h6>
          </div>
        </g-link>
      </div>
      <div class="qualities-box">
        <span class="top-left-span">boldness</span>
        <span class="top-right-span">precision</span>
      </div>
    </div>
    <div class="design-development-credits">
      <h2 class="credit-title">Design & Development Credits</h2>
    </div>
  </footer>
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
$grid-gray: #888889;
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
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  .top-statement-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75px;
    border-bottom: 1px solid $nav-line;
    .footer-brand-statement {
      text-align: center;
      font-style: italic;
      font-weight: 400;
      font-size: 1.6em;
      font-family: "Cormorant Garamond";
      letter-spacing: -0.84;
    }
  }
  .home-link-and-qualities {
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 0 19px 25px 19px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $nav-line;
    .qualities-box {
      max-width: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .middle-link-box {
      position: relative;
      margin-top: 85px;
      text-decoration: none;
      min-height: 175px;
      max-width: inherit;
      .footer-index-link {
        position: relative;
        text-decoration: none;
        max-width: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer-logo-image {
          max-width: 70vw;
        }
        .back-home-link-text-and-arrow {
          position: relative;
          left: 8.5px;
          margin-top: 20px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          max-width: 100vw;
          .small-link-arrow {
            max-width: 4%;
          }
          .small-link-text {
            color: $grid-black;
            margin: 10px 0 0 0;
            padding: 0;
          }
        }
      }
    }
  }
  .design-development-credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    .credit-title {
      text-align: center;
      max-width: 70vw;
    }
  }
}
</style>