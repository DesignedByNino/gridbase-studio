<template>
  <div class="main-footer">
    <footer class="flex-foo-cont">
      <!-- Footer top container -->
      <div class="foo-top-wrap">
        <h1 class="foo-top-title">Creating powerful brands together</h1>
        <h5 class="foo-top-adj">Uniqueness</h5>
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
        <!-- Logo Display -->
        <g-image src="~/images/gridbase-default.svg" class="foo-logo" />
        <!-- Homepage routing indicator -->
        <div class="flex-foo-home-indicator">
          <g-image src="~/images/next.svg" class="foo-indicator-arrow" />
          <h4 class="foo-indicator-text">BACK HOME</h4>
          <!-- Public Business Info -->
          <h2 class="foo-public-text">
            © gridbase™ is a Trade Mark of<br />
            ROSE NETWORK S.R.L.<br />
            Str. Ascanio Damian nr. 16 SIBIU/ROMANIA
          </h2>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

// color variables
$grid-black: #0b0b0b;
$grid-brown: #2c1608;
$nav-line: #979797;
$dev-green: #b8e1cc;
$dev-blue: #0a437a;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  .flex-foo.cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
}
</style>