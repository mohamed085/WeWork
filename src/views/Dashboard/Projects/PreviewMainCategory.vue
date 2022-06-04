<template>
  <div>
    <div class="title-2">الفئة: 1</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/projects/main-category" exact class="filter__item">إضافة فئه أساسية</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PreviewMainCategory"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>