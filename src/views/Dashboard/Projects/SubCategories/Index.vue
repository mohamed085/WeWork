<template>
  <div>
    <div class="title-2">الفئات الرئسية: 4</div>

    <div class="filter">
      <div class="filter__container">

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index"
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/variables";
@import "../../../../assets/css/mixins";
@import "../../../../assets/css/dashboard";

</style>