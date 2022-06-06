<template>
  <div>
    <div class="title-2">الفئة الفرعية: 1 (البرمجيات)</div>

    <div class="filter">
      <div class="filter__container">
        <router-link :to="'/dashboard/projects/item/items/' + this.$route.params.id" class="filter__item">كل المشاريع</router-link>
        <router-link :to="'/dashboard/projects/item/add/' + this.$route.params.id" class="filter__item">إضافة مشروع جديد</router-link>
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