<template>
  <div class="navbar">
    <div class="main-nav">
      <!-- Logo container -->
      <div class="logo-wrap">
        <g-link to="/" class="homepage-link">
          <img class="logo" src="../images/gridbase-default.svg" alt="" />
        </g-link>
      </div>
      <!-- Logo container end -->
      <div class="middle-space"></div>
      <!-- Language Switch Container -->
      <div class="lang-switch-wrap">
        <g-link to="/" class="homepage-link">
          <img class="nav-switch" src="../images/lang-switch.svg" alt="" />
          <!-- mobile simplified language switch -->
          <img
            src="../images/lang-switch-simple.svg"
            class="nav-switch-simple"
          />
        </g-link>
      </div>
      <!-- mobile menu nav -->
      <div class="mobile-menu-wrap">
        <img src="../images/burger-menu-classic.svg" class="menu-icon" />
        <!-- open menu wrapper -->
        <div class="open-menu-warp closed-menu-wrap">
          <!-- menu links container -->
          <div class="menu-top-links">
            <g-link to="/" class="menu-link">services</g-link>
            <g-link to="/about/" class="menu-link">about</g-link>
            <g-link to="/work/" class="menu-link">work gallery</g-link>
          </div>
          <!-- menu contact section -->
          <div class="menu-contact-section">
            <img
              src="../images/gridbase-single.svg"
              class="menu-contact-icon"
            />
            <g-link to="/contact/" class="menu-contact-link">Contact Us</g-link>
          </div>
          <!-- menu contact section end -->
        </div>
        <!-- open menu wrapper end -->
      </div>
      <!-- Link One Container -->
      <div class="link-one-wrap">
        <a class="services-link" href="#anchor">services</a>
      </div>
      <!-- Link Two Container -->
      <div class="link-two-wrap">
        <g-link class="about-link" to="/about/">about</g-link>
      </div>
      <!-- Desktop Contact Nav Container -->
      <div class="contact-el-wrap">
        <g-link to="/contact/" class="contact-link">
          <img src="../images/gridbase-single.svg" alt="" class="contact-btn" />
        </g-link>
      </div>
      <!-- Desktop Contact Nav Container end -->
    </div>
    <!-- Main Nav Flex Wrapper End -->
  </div>
  <!-- Vue Navbar Component Root End -->
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
  .nav-switch-simple {
    display: none;
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
    left: 0.3px;
    top: 0.2px;
  }
  // .contact-link {
  //   text-decoration: none;
  //   color: inherit;
  //   font-size: 19px;
  //   font-weight: 200;
  // }
}
.mobile-menu-wrap {
  display: none;
}

// Mobile Responsive Design

@media screen and (min-width: $mob-exslim) and (max-width: 1020px) {
  .navbar {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .main-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      // background-color: $dev-green;
      position: fixed;
      top: -0.1px;
      min-width: 100vw;
      max-width: 100vw;
      width: 100vw;
      // min-height: 50px;
      // max-height: 50px;
      // height: 50px;
      padding: 0 24px 0 12px;
      margin: 0;
      border-bottom: 1px solid $nav-line;
      .logo-wrap {
        // background-color: $dev-orange;
        min-height: 50px;
        max-height: 50px;
        height: 50px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        min-width: 141.5px;
        width: 141.5px;
        .logo {
          // background-color: $dev-teal;
          position: relative;
          top: 1.5px;
          min-width: 127px;
          max-width: 127px;
          width: 127px;
        }
      }
      .middle-space {
        display: none;
      }
      .lang-switch-wrap {
        min-height: 50px;
        max-height: 50px;
        height: 50px;
        min-width: 59px;
        max-width: 59px;
        width: 59px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .nav-switch {
          display: none;
        }
        .nav-switch-simple {
          display: inline;
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
        display: none;
        min-width: 0px;
        max-width: 0px;
        width: 0px;
        min-height: 0px;
        max-height: 0px;
        height: 0px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        .services-link {
          display: none;
          text-decoration: none;
          color: inherit;
          font-size: 19px;
          font-weight: 300;
        }
      }
      .link-two-wrap {
        display: none;
        min-height: 0px;
        max-height: 0px;
        height: 0px;
        min-width: 0px;
        max-width: 0px;
        width: 0px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        .about-link {
          display: none;
          text-decoration: none;
          color: inherit;
          font-size: 19px;
          font-weight: 200;
        }
      }
      .contact-el-wrap {
        background-color: $dev-teal;
        display: none;
        min-height: 0px;
        max-height: 0px;
        height: 0px;
        min-width: 0px;
        max-width: 0px;
        width: 0px;
        border-top: 0;
        border-bottom: 0;
        border-left: 0;
        .contact-link {
          background-color: $dev-orange;
          display: none;
          text-decoration: none;
          color: inherit;
          font-size: 19px;
          font-weight: 200;
          .contact-btn {
            background-color: $dev-blue;
            display: none;
            min-width: 0px;
            max-width: 0px;
            width: 0px;
          }
        }
      }
      .mobile-menu-wrap {
        min-height: 50px;
        max-height: 50px;
        height: 50px;
        min-width: 50px;
        max-width: 50px;
        width: 50px;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .open-menu-warp {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          position: absolute;
          right: 0;
          max-width: 65vw;
          min-width: 65vw;
          width: 65vw;
        }
        .closed-menu-wrap {
          display: none;
        }
      } // current nav wrapper | add new containers after this
    } // main nav end
  } // vue navbar component end
}
</style>