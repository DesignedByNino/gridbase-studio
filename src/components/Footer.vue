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
            <g-image
              class="small-link-arrow"
              src="~/images/next.svg"
              alt="small link arrow"
            />
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
      <h2 class="credits-title">Design & Development Credits</h2>
      <p class="credits-paragraph">
        Visual narrative & design concepts<br />
        by
        <span class="cormorand-italic">founder Nino.P</span>
      </p>
      <p class="credits-paragraph">
        Development & implmentation architecture<br />
        by
        <span class="cormorand-italic">gridbase® studio</span>
      </p>
      <p class="credits-paragraph">
        Photography by <span class="cormorand-italic">Paweł Czerwiński</span>
      </p>
      <g-link to="/work/" class="footer-arrow-link">
        <span class="footer-link-text">see our work</span>
        <g-image
          src="~/images/curved-arrow.svg"
          alt="link-arrow"
          class="button-link-arrow"
        />
      </g-link>
    </div>
    <div class="general-enquiries">
      <h2 class="enquries-title">
        General Enquiries<br />
        & Business Info
      </h2>
      <g-link to="/contact/" class="footer-arrow-link">
        <span class="footer-link-text">contact us</span>
        <g-image
          src="~/images/curved-arrow.svg"
          alt="link-arrow"
          class="button-link-arrow"
        />
      </g-link>
      <h5 class="direct-option-text">Or</h5>
      <p class="direct-email-options">
        Don’t fancy contact forms ?<br />
        Say hello! → nino@gridbase.studio
      </p>
    </div>
    <div class="gradient-footer-end">
      <h3 class="copyright">©2021 - gridbase® studio</h3>
      <div class="legal-link-container">
        <g-link class="legal-link">Privacy Policy<br />↗︎</g-link>
        <g-link class="legal-link">Terms & Conditions<br />↗︎</g-link>
      </div>
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
    padding-bottom: 55px;
    border-bottom: 1px solid $nav-line;
    .credits-title {
      text-align: center;
      max-width: 70vw;
    }
    .credits-paragraph {
      font-family: "Questrial";
      font-size: 1em;
      text-align: center;
      .cormorand-italic {
        font-family: "Cormorant Garamond";
        font-style: italic;
        font-size: 1.38em;
      }
    }
    .footer-arrow-link {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: $grid-black;
      .footer-link-text {
        font-size: 1.4em;
      }
    }
  }
  .general-enquiries {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 30px;
    .enquries-title {
      max-width: 70vw;
      text-align: center;
    }
    .footer-arrow-link {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: $grid-black;
      .footer-link-text {
        font-size: 1.4em;
      }
    }
    .direct-option-text {
      font-size: 1em;
      margin-top: 55px;
      margin-bottom: 20px;
    }
    .direct-email-options {
      font-size: 1em;
      text-align: center;
    }
  }
  .gradient-footer-end {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 202px;
    padding: 0 19px 22px 19px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(186, 186, 186, 0.2) 17%,
      rgba(118, 118, 118, 0.42) 39%,
      rgba(83, 83, 83, 0.67) 59%,
      rgba(70, 70, 70, 0.75) 66%,
      rgba(54, 54, 54, 0.82) 76%,
      #1a1a1a 100%
    );
    .copyright {
      font-size: 1.3em;
      text-decoration: none;
      position: relative;
      top: 52px;
      font-weight: 400;
      color: #fff;
      margin-bottom: 10px;
    }
    .legal-link-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .legal-link {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>