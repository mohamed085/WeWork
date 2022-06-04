<template>
  <div>
    <div class="title-2">المستخدمون</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/users" exact class="filter__item">كل المستخدمون</router-link>
        <router-link to="/dashboard/users/add" class="filter__item">إضافة مستخدم جديد</router-link>
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