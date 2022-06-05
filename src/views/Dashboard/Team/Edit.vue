<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form v-else @submit.prevent="editTeamMember">
      <div class="err" v-if="error">{{ error_message_ar }}</div>

      <div class="title-2">العضو: {{ item.id }}</div>

      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="form-group">
            <span>ال id</span>
            <b-form-input class="input" type="text" v-model="item.id" disabled></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالعربي</span>
            <b-form-input class="input" type="text" v-model="item.name_ar"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="item.name_en"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالعربي</span>
            <b-form-input class="input" type="text" v-model="item.job_title_ar"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="item.job_title_en"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالعربي</span>
            <b-form-input class="input" type="text" v-model="item.job_description_ar"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text" v-model="item.job_description_en"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة</span>
            <b-form-file plain @change="addPhoto"></b-form-file>
          </div>
          <div class="img">
            <img :src="item.photo">
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
      photo_file: '',
    }
  },
  created() {
    this.loadTeamMember(this.$route.params.id)
  },
  methods: {
    addPhoto(e) {
      this.photo_file = e.target.files[0];
      this.$emit('input', this.photo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo_file);
      reader.onload = e => {
        this.item.photo = e.target.result;
      }
    },
    async loadTeamMember(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/get-team-member/` + id;

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
    async editTeamMember() {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("name_en", this.item.name_en);
      formdata.append("name_ar", this.item.name_ar);
      formdata.append("photo", this.photo_file);
      formdata.append("job_title_en", this.item.job_title_en);
      formdata.append("job_title_ar", this.item.job_title_ar);
      formdata.append("job_description_en", this.item.job_description_en);
      formdata.append("job_description_ar", this.item.job_description_ar);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/update-team-member/` + this.item.id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push("/dashboard/team")
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