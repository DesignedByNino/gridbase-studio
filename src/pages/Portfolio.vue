<template>
  <Layout>
    <div class="work-gallery">
      <h1 class="work-show-heading">Welcome to our work gallery!</h1>
      <p class="work-description">
        Enjoy our selected projects, case studies and see if we speak the same
        design language.
      </p>
      <img
        src="../images/next.svg"
        alt="small arrow pointer"
        class="showcase-arrow"
      />
      <div class="work-img-gallery"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Portfolio",
  metaInfo: {
    title: "Portfolio ➛ gridbase studio®",
  },
};
</script>

<style lang="scss" scoped>
.work-gallery {
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .work-show-heading {
    z-index: 11;
    margin-bottom: -55px;
    font-size: 84px;
    font-weight: 600;
    letter-spacing: 1.9px;
  }
  .work-description {
    font-size: 29px;
    max-width: 850px;
    margin-top: 75px;
    text-align: center;
  }
  .showcase-arrow {
    z-index: 12;
    transform: rotate(180deg);
    max-width: 50px;
    width: 50px;
    min-width: 50px;
    position: relative;
    top: 90px;
  }
  .work-img-gallery {
    margin-top: -75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .first-work-img {
      position: relative;
      left: 760px;
    }
    .second-work-img {
      position: relative;
      left: -760px;
    }
  }
}
</style>