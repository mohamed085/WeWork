<template>
  <div class="ar footer" v-if="getLang === 'ar'">
    جميع الحقوق محفوظة ل we work
  </div>

  <div class="en" v-else-if="getLang === 'en'">
    All rights reserved to we work
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/typography";
@import "../../assets/css/mixins";

.break {
  background-color: $color-primary;
  width: 60px;
  height: 6px;
  margin: 0 .5rem;
}

.footer {
  color: $color-grey-dark-3;
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  font-size: 1rem;
}

</style>