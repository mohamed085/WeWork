<template>
  <div>
    <div class="title-2">العملاء</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/clients" exact class="filter__item">كل العملاء</router-link>
        <router-link to="/dashboard/clients/add" class="filter__item">إضافة عميل جديد</router-link>
        <router-link to="/dashboard/clients/setting" class="filter__item">أعدادات صفحة العملاء</router-link>
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