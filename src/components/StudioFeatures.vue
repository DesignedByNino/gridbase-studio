<template>
  <div class="studio-features-container">
    <CardFeatureDesign />
    <CardFeatureArtDirection />
    <CardFeatureDevelopment />
    <CardFeatureContentCreation />
  </div>
</template>

<script>
import CardFeatureDesign from "~/components/CardFeatureDesign.vue";
import CardFeatureArtDirection from "~/components/CardFeatureArtDirection.vue";
import CardFeatureDevelopment from "~/components/CardFeatureDevelopment.vue";
import CardFeatureContentCreation from "~/components/CardFeatureContentCreation.vue";

export default {
  name: "StudioFeatures",
  components: {
    CardFeatureDesign,
    CardFeatureArtDirection,
    CardFeatureDevelopment,
    CardFeatureContentCreation,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

.studio-features-container {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
</style>