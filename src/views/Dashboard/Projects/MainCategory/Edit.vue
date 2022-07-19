<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form v-else @submit.prevent="editMainCategory">
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>ال id</span>
            <b-form-input class="input" type="text" v-model="item.id" disabled></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالعربي</span>
            <b-form-input class="input" type="text" v-model="item.category_name_ar"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="item.category_name_en"></b-form-input>
          </div>
        </div>
        <div class="col-12 justify-content-end">
          <b-button type="submit" class="btn">حفظ</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",
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

      let url = `https://api.we-work.pro/api/user/get-main-category-by-id/` + id;

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
    async editMainCategory() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "category_name_en": this.item.category_name_en,
        "category_name_ar": this.item.category_name_ar,
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = `https://api.we-work.pro/api/admin/auth/update-main-category/` + this.item.id

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/projects/main-categories')
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false


    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/variables";
@import "../../../../assets/css/mixins";
@import "../../../../assets/css/dashboard";


</style>