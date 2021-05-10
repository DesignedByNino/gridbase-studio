<template>
  <footer class="main-footer"></footer>
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
</style>