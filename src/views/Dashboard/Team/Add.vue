<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form v-else @submit.prevent="addNewTeamMember">
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالعربي</span>
            <b-form-input class="input" type="text" v-model="user.name_ar" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="user.name_en" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالعربي</span>
            <b-form-input class="input" type="text" v-model="user.job_title_ar" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="user.job_title_en" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالعربي</span>
            <b-form-input class="input" type="text" v-model="user.job_description_ar" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="user.job_description_en" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة</span>
            <b-form-file @change="addPhoto" plain></b-form-file>
          </div>
          <div v-if="user.photo" class="img">
            <img :src="user.photo">
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
      user: {
        name_en: '',
        name_ar: '',
        job_title_en: '',
        job_title_ar: '',
        job_description_en: '',
        job_description_ar: '',
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
    async addNewTeamMember() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("name_en", this.user.name_en);
      formdata.append("name_ar", this.user.name_ar);
      formdata.append("job_title_en", this.user.job_title_en);
      formdata.append("job_title_ar", this.user.job_title_ar);
      formdata.append("job_description_en", this.user.job_description_en);
      formdata.append("job_description_ar", this.user.job_description_ar);
      formdata.append("photo", this.user.photo_file);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/admin/auth/add-team-member", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/team')
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