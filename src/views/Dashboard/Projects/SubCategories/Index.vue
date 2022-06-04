<template>
  <div>
    <div class="title-2">الفئة الرئسية: 1 (البرمجيات)</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/projects/sub-categories/items/4556" class="filter__item">كل الفئات الفرعية</router-link>
        <router-link to="/dashboard/projects/sub-categories/add/4556" class="filter__item">إضافة فئه غرعية</router-link>
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