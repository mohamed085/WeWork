<template>
  <spinner v-if="is_loading"></spinner>

  <div v-else class="contact-form row">
    <div class="err" v-if="error">{{ error_message_ar }}</div>

    <div class="title-2">نموذج تواصل: {{ item.id }}</div>

    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>الإسم*</span>
        <b-form-input class="input" type="text" v-model="item.name" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>البريد الإلكتروني*</span>
        <b-form-input class="input" type="text" v-model="item.email" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>رقم الجوال*</span>
        <b-form-input class="input" type="text" v-model="item.phone" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <span>عنوان الرسالة*</span>
        <b-form-input class="input" type="text" v-model="item.title" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <span>الرسالة*</span>
        <b-form-textarea class="input" rows="5" v-model="item.msg" disabled></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Preview",
  components: {
    Spinner
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      item: '',
    }
  },
  created() {
    this.loadForm(this.$route.params.id)
  },
  methods: {
    async loadForm(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/get-contact-us/` + id;

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
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>