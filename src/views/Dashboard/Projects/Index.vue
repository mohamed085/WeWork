<template>
  <div>
    <div class="title-2">المشاريع</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/projects/main-categories" class="filter__item">الفئات الرئسية</router-link>
        <router-link to="/dashboard/projects/forms" class="filter__item">طلبات المشاريع الجديدة</router-link>
        <router-link to="/dashboard/projects/setting" class="filter__item">إعدادات صفحة المشاريع</router-link>
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
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>