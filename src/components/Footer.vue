<template>
  <div class="main-footer">
    <footer class="flex-foo-cont">
      <!-- Footer top container -->
      <div class="foo-top-wrap">
        <h5 class="foo-top-adj">Uniqueness</h5>
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
          <g-image src="~/images/gridbase-default.svg" class="foo-logo" />
          <!-- Homepage routing indicator -->
          <div class="flex-foo-home-indicator">
            <g-image src="~/images/next.svg" class="foo-indicator-arrow" />
            <h4 class="foo-indicator-text">BACK HOME</h4>
          </div>
        </g-link>
        <!-- Public Business Info -->
        <h2 class="foo-public-text">
          © gridbase™ is a Trade Mark of<br />
          ROSE NETWORK S.R.L.<br />
          Str. Ascanio Damian nr. 16 SIBIU/ROMANIA
        </h2>
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
  // background-color: $dev-green;
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
  }
  .foo-top-wrap {
    // background-color: $dev-blue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    padding: 0 77px;
    border-bottom: 1px solid $nav-line;
    .foo-top-title {
      font-family: "Cormorant Garamond";
      font-weight: 300;
      font-style: italic;
      letter-spacing: -1px;
      font-size: 50px;
      position: relative;
      top: -24px;
    }
    .foo-top-adj {
      font-family: "Questrial", sans-serif;
      font-size: 17px;
    }
  }
  .flex-foo-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    padding: 65px 77px 0px;
    .foo-inline-features {
      width: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .foo-feature {
        font-size: 21px;
        font-weight: 100;
        opacity: 50%;
        letter-spacing: 1.7px;
      }
    }
    .foo-homepage-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      .foo-logo {
        margin-top: 180px;
        min-width: 607px;
        margin-bottom: 53px;
        position: relative;
        right: 47px;
      }
      .flex-foo-home-indicator {
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
    .foo-public-text {
      margin-top: 85px;
      text-align: center;
      font-weight: 300;
    }
  }
}
</style>