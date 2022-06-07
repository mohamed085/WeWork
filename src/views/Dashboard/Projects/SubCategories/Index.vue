<template>
  <spinner v-if="is_loading"></spinner>
  <div v-else>
    <div class="title-2">الفئة الرئسية: {{ item.id }} ({{ item.category_name_ar }})</div>

    <div class="filter">
      <div class="filter__container">
        <router-link :to="'/dashboard/projects/sub-categories/items/' + this.item.id" class="filter__item">كل الفئات الفرعية</router-link>
        <router-link :to="'/dashboard/projects/sub-categories/add/' + this.item.id" class="filter__item">إضافة فئه غرعية</router-link>
      </div>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {Spinner},
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      item: '',
    }
  },
  created() {
    this.loadMainCategory(this.$route.params.id)
  },
  methods: {
    async loadMainCategory(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/user/get-main-category-by-id/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.item = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/variables";
@import "../../../../assets/css/mixins";
@import "../../../../assets/css/dashboard";

</style>