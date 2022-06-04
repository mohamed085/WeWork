<template>
  <div class="spinner-container">
    <b-spinner class="spinner"></b-spinner>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Spinner"
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

.spinner-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.spinner {
  color: $color-primary !important;
}
</style>