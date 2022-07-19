<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form v-else @submit.prevent="addNewSubCategory">
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
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
            <b-form-file plain @change="addPhotoMainPhoto" required></b-form-file>
          </div>
          <div class="img">
            <img v-if="sub_category.main_photo" :src="sub_category.main_photo">
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة الاولي (تظهر في سليدر القسم)</span>
            <b-form-file plain @change="addPhoto1" required></b-form-file>
          </div>
          <div class="img">
            <img v-if="sub_category.photo1" :src="sub_category.photo1">
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة الثانية (تظهر في سليدر القسم)</span>
            <b-form-file plain @change="addPhoto2" required></b-form-file>
          </div>
          <div class="img">
            <img v-if="sub_category.photo2" :src="sub_category.photo2">
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة الثالثة (تظهر في سليدر القسم)</span>
            <b-form-file plain @change="addPhoto3" required></b-form-file>
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
      sub_category: {
        sub_category_name_en: '',
        sub_category_name_ar: '',
        main_photo: '',
        main_photo_file: '',
        title1_ar: '',
        title1_en: '',
        title2_ar: '',
        title2_en: '',
        description1_ar: '',
        description2_en: '',
        photo1: '',
        photo1_file: '',
        photo2: '',
        photo2_file: '',
        photo3: '',
        photo3_file: '',
        photo4: '',
        photo4_file: '',
        photo5: '',
        photo5_file: '',
      }
    }
  },
  methods: {
    addPhotoMainPhoto(e) {
      this.sub_category.main_photo_file = e.target.files[0];
      this.$emit('input', this.sub_category.main_photo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.main_photo_file);
      reader.onload = e => {
        this.sub_category.main_photo = e.target.result;
      }
    },
    addPhoto1(e) {
      this.sub_category.photo1_file = e.target.files[0];
      this.$emit('input', this.sub_category.photo1_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.photo1_file);
      reader.onload = e => {
        this.sub_category.photo1 = e.target.result;
      }
    },
    addPhoto2(e) {
      this.sub_category.photo2_file = e.target.files[0];
      this.$emit('input', this.sub_category.photo2_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.photo2_file);
      reader.onload = e => {
        this.sub_category.photo2 = e.target.result;
      }
    },
    addPhoto3(e) {
      this.sub_category.photo3_file = e.target.files[0];
      this.$emit('input', this.sub_category.photo3_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.photo3_file);
      reader.onload = e => {
        this.sub_category.photo3 = e.target.result;
      }
    },
    addPhoto4(e) {
      this.sub_category.photo4_file = e.target.files[0];
      this.$emit('input', this.sub_category.photo4_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.photo4_file);
      reader.onload = e => {
        this.sub_category.photo4 = e.target.result;
      }
    },
    addPhoto5(e) {
      this.sub_category.photo5_file = e.target.files[0];
      this.$emit('input', this.sub_category.photo5_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.sub_category.photo5_file);
      reader.onload = e => {
        this.sub_category.photo5 = e.target.result;
      }
    },
    async addNewSubCategory() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("category_id", this.$route.params.id);
      formdata.append("sub_category_name_en", this.sub_category.sub_category_name_en);
      formdata.append("sub_category_name_ar", this.sub_category.sub_category_name_ar);
      formdata.append("title1_ar", this.sub_category.title1_ar);
      formdata.append("title1_en", this.sub_category.title1_en);
      formdata.append("title2_ar", this.sub_category.title2_ar);
      formdata.append("title2_en", this.sub_category.title2_en);
      formdata.append("description1_ar", this.sub_category.description1_ar);
      formdata.append("description2_en", this.sub_category.description2_en);
      formdata.append("main_photo", this.sub_category.main_photo_file);
      formdata.append("photo1", this.sub_category.photo1_file);
      formdata.append("photo2", this.sub_category.photo2_file);
      formdata.append("photo3", this.sub_category.photo3_file);
      formdata.append("photo4", this.sub_category.photo4_file);
      formdata.append("photo5", this.sub_category.photo5_file);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/admin/auth/creare-sub-category", requestOptions)
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