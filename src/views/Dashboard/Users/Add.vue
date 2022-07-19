<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form v-else @submit.prevent="addNewUser">
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم</span>
            <b-form-input class="input" type="text" v-model="user.name" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>البريد الالكتروني</span>
            <b-form-input class="input" type="email" v-model="user.email" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الرقم السري</span>
            <b-form-input class="input" type="password" v-model="user.password" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة</span>
            <b-form-file plain @change="addPhoto"></b-form-file>
          </div>
          <div class="img">
            <img v-if="user.photo" :src="user.photo">
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
  name: "Add",
  components: {
    Spinner
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      user: {
        name: '',
        email: '',
        password: '',
        photo: '',
        photo_file: '',
      }
    }
  },
  methods: {
    addPhoto(e) {
      this.user.photo_file = e.target.files[0];
      this.$emit('input', this.user.photo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.user.photo_file);
      reader.onload = e => {
        this.user.photo = e.target.result;
      }
    },
    async addNewUser() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("name", this.user.name);
      formdata.append("email", this.user.email);
      formdata.append("password", this.user.password);
      formdata.append("photo", this.user.photo_file);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/admin/auth/create-admin", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/users')
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