<template>
  <div>
    <div class="title-2">انضم</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/join" exact class="filter__item">طلبات الإنضمام</router-link>
        <router-link to="/dashboard/join/setting" class="filter__item">إعدادات صفحة إنضم إالينا</router-link>
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