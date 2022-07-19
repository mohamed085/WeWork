<template>
  <spinner v-if="is_loading"></spinner>

  <b-form v-else @submit.prevent="editSubCategory">
    <div class="row pe-3 ps-3">
      <div class="col-12">
        <div class="err" v-if="error">{{ error_message_ar }}</div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>ال id</span>
          <b-form-input class="input" type="text" v-model="sub_category.id" disabled></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الإسم بالعربي</span>
          <b-form-input class="input" type="text" v-model="sub_category.sub_category_name_ar" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الإسم بالانجليزي</span>
          <b-form-input class="input" type="text" v-model="sub_category.sub_category_name_en" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>العنوان الاول بالعربي</span>
          <b-form-input class="input" type="text" v-model="sub_category.title1_ar" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>العنوان الاول بالانجليزي</span>
          <b-form-input class="input" type="text" v-model="sub_category.title1_en" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>العنوان الثاني بالعربي</span>
          <b-form-input class="input" type="text" v-model="sub_category.title2_ar" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>العنوان الثاني بالانجليزي</span>
          <b-form-input class="input" type="text" v-model="sub_category.title2_en" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الوصف بالعربي</span>
          <b-form-input class="input" type="text" v-model="sub_category.description1_ar" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الوصف بالانجليزي</span>
          <b-form-input class="input" type="text" v-model="sub_category.description2_en" required></b-form-input>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الاساسية(تظهر في صفحة المشاريع الخاصة بهذا القسم)</span>
          <b-form-file plain @change="addPhotoMainPhoto"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.main_photo" :src="sub_category.main_photo">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الاولي (تظهر في سليدر القسم)</span>
          <b-form-file plain @change="addPhoto1"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.photo1" :src="sub_category.photo1">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الثانية (تظهر في سليدر القسم)</span>
          <b-form-file plain @change="addPhoto2"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.photo2" :src="sub_category.photo2">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الثالثة (تظهر في سليدر القسم)</span>
          <b-form-file plain @change="addPhoto3"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.photo3" :src="sub_category.photo3">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الرابعة (تظهر في سليدر القسم)</span>
          <b-form-file plain @change="addPhoto4"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.photo4" :src="sub_category.photo4">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <span>الصورة الخامسة (تظهر في سليدر القسم)</span>
          <b-form-file plain @change="addPhoto5"></b-form-file>
        </div>
        <div class="img">
          <img v-if="sub_category.photo5" :src="sub_category.photo5">
        </div>
      </div>

      <div class="col-12 justify-content-end">
        <b-button type="submit" class="btn">حفظ</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",
  components: {
    Spinner
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      sub_category: '',
      main_photo_file: '',
      photo1_file: '',
      photo2_file: '',
      photo3_file: '',
      photo4_file: '',
      photo5_file: '',

    }
  },
  created() {
    this.loadSubCategory(this.$route.params.id)
  },
  methods: {
    addPhotoMainPhoto(e) {
      this.main_photo_file = e.target.files[0];
      this.$emit('input', this.main_photo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.main_photo_file);
      reader.onload = e => {
        this.sub_category.main_photo = e.target.result;
      }
    },
    addPhoto1(e) {
      this.photo1_file = e.target.files[0];
      this.$emit('input', this.photo1_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo1_file);
      reader.onload = e => {
        this.sub_category.photo1 = e.target.result;
      }
    },
    addPhoto2(e) {
      this.photo2_file = e.target.files[0];
      this.$emit('input', this.photo2_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo2_file);
      reader.onload = e => {
        this.sub_category.photo2 = e.target.result;
      }
    },
    addPhoto3(e) {
      this.photo3_file = e.target.files[0];
      this.$emit('input', this.photo3_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo3_file);
      reader.onload = e => {
        this.sub_category.photo3 = e.target.result;
      }
    },
    addPhoto4(e) {
      this.photo4_file = e.target.files[0];
      this.$emit('input', this.photo4_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo4_file);
      reader.onload = e => {
        this.sub_category.photo4 = e.target.result;
      }
    },
    addPhoto5(e) {
      this.photo5_file = e.target.files[0];
      this.$emit('input', this.photo5_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.photo5_file);
      reader.onload = e => {
        this.sub_category.photo5 = e.target.result;
      }
    },
    async loadSubCategory(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://api.we-work.pro/api/user/get-sub-category-by-id/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.sub_category = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;

    },
    async editSubCategory() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("sub_category_name_en", this.sub_category.sub_category_name_en);
      formdata.append("sub_category_name_ar", this.sub_category.sub_category_name_ar);
      formdata.append("title1_ar", this.sub_category.title1_ar);
      formdata.append("title1_en", this.sub_category.title1_en);
      formdata.append("title2_ar", this.sub_category.title2_ar);
      formdata.append("title2_en", this.sub_category.title2_en);
      formdata.append("description1_ar", this.sub_category.description1_ar);
      formdata.append("description2_en", this.sub_category.description2_en);
      formdata.append("main_photo", this.main_photo_file);
      formdata.append("photo1", this.photo1_file);
      formdata.append("photo2", this.photo2_file);
      formdata.append("photo3", this.photo3_file);
      formdata.append("photo4", this.photo4_file);
      formdata.append("photo5", this.photo5_file);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      let url = `https://api.we-work.pro/api/admin/auth/update-sub-category/` + this.sub_category.id
      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/projects/sub-categories/items/' + this.$route.params.id)
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