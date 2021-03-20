<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/MainNav.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
body {
  font-family: "Questrial", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
