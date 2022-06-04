<template>
  <div>
    <div class="title-2">المشاريع</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/projects" exact class="filter__item">الفئات الاساسية</router-link>
        <router-link to="/dashboard/projects/main-category/add" exact class="filter__item">إضافة فئه أساسية</router-link>
        <router-link to="/dashboard/projects/forms" exact class="filter__item">طلبات المشاريع الجديدة</router-link>
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