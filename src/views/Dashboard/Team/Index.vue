<template>
  <div>
    <div class="title-2">الفريق</div>

    <div class="filter">
      <div class="filter__container">
        <router-link to="/dashboard/team" exact class="filter__item">كل اعضاء الفريق</router-link>
        <router-link to="/dashboard/team/add" class="filter__item">إضافة عضو جديد في الفريق</router-link>
        <router-link to="/dashboard/team/setting" class="filter__item">أعدادات صفحة الفريق</router-link>
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