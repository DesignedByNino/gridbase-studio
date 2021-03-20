<template>
  <div class="navbar">
    <div class="main-nav">
      <div class="logo-wrap">
        <g-link to="/" class="homepage-link">
          <g-image class="logo" src="~/images/gridbase-default.svg" alt="" />
        </g-link>
      </div>
      <div class="middle-space"></div>
      <div class="lang-switch-wrap">
        <g-link to="/" class="homepage-link">
          <g-image class="nav-switch" src="~/images/lang-switch.svg" alt="" />
        </g-link>
      </div>
      <div class="link-one-wrap">
        <a class="services-link" href="#anchor">services</a>
      </div>
      <div class="link-two-wrap">
        <g-link class="about-link" to="/about/">about</g-link>
      </div>
      <div class="contact-el-wrap">
        <g-link to="/contact/" class="contact-link">
          <g-image
            src="~/images/gridbase-single.svg"
            alt=""
            class="contact-btn"
          />
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
.main-nav {
  z-index: 99;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: -0.1px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  background-color: #fff;
}
.logo-wrap {
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  // border: 1px solid #979797;
  border-top: 0;
  border-right: 1px solid $nav-line;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
  min-width: 241.5px;
  width: 241.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    position: relative;
    top: 1px;
    min-width: 127px;
    max-width: 127px;
    width: 127px;
  }
}
.middle-space {
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  min-width: 732px;
  max-width: 732px;
  width: 732px;
  border-top: 0;
  border-right: 1px solid $nav-line;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
}
.lang-switch-wrap {
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  min-width: 59px;
  max-width: 59px;
  width: 59px;
  border-top: 0;
  border-right: 1px solid $nav-line;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav-switch {
    position: relative;
    top: 2px;
    min-width: 29px;
    max-width: 29px;
    width: 29px;
    min-height: 29px;
    max-height: 29px;
    height: 29px;
  }
}
.link-one-wrap {
  min-width: 136px;
  max-width: 136px;
  width: 136px;
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  border-top: 0;
  border-right: 1px solid $nav-line;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .services-link {
    text-decoration: none;
    color: inherit;
    font-size: 19px;
    font-weight: 300;
  }
}
.link-two-wrap {
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  min-width: 134px;
  max-width: 134px;
  width: 134px;
  border-top: 0;
  border-right: 1px solid $nav-line;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .about-link {
    text-decoration: none;
    color: inherit;
    font-size: 19px;
    font-weight: 200;
  }
}
.contact-el-wrap {
  min-height: 53px;
  max-height: 53px;
  height: 53px;
  min-width: 136px;
  max-width: 136px;
  width: 136px;
  border-top: 0;
  border-bottom: 1px solid $nav-line;
  border-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .contact-btn {
    min-width: 32px;
    max-width: 32px;
    width: 32px;
    position: relative;
    left: 0.4px;
    top: 0.2px;
  }
  // .contact-link {
  //   text-decoration: none;
  //   color: inherit;
  //   font-size: 19px;
  //   font-weight: 200;
  // }
}
</style>