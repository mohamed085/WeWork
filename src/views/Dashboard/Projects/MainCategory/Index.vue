<template>
  <div>
    <div class="title-2">الفئات الرئسية</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/projects/main-categories" exact class="filter__item">كل الفئات الرئسية</router-link>
        <router-link to="/dashboard/projects/main-categories/add" exact class="filter__item">إضافة فئه رئسية</router-link>
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