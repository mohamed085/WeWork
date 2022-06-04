<template>
  <div>
    <div class="title-2">التواصل</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/contact" exact class="filter__item">طلبات التواصل</router-link>
        <router-link to="/dashboard/contact/setting" class="filter__item">إعدادات صفحة التواصل</router-link>
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