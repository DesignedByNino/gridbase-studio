<template>
  <div class="studio-features-container">
    <UIDesignFeature />
  </div>
</template>

<script>
import UIDesignFeature from "~/components/UIDesignFeature.vue";

export default {
  name: "StudioFeatures",
  components: {
    UIDesignFeature,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

.studio-features-container {
  display: flex;
  flex-direction: column;
}
</style>