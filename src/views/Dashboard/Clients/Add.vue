<template>
  <div>
    <spinner v-if="is_loading"></spinner>
    <b-form v-else @submit.prevent="addClient">
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة</span>
            <b-form-file plain @change="addPhoto"></b-form-file>
          </div>
          <div class="img">
            <img v-if="photo" :src="photo">
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
import router from "@/router";
import Spinner from "@/components/ui/Spinner";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Add",
  components: {Spinner},
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      photo: '',
      photo_file: ''
    }
  },
  methods: {
    addPhoto(e) {
      this.photo_file = e.target.files[0];
      this.$emit('input', this.photo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo_file);
      reader.onload = e => {
        this.photo = e.target.result;
      }
    },
    async addClient() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("photo", this.photo_file);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/admin/auth/add-client", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/clients')
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
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>