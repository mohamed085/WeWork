<template>
  <spinner v-if="is_loading"></spinner>
  <div v-else class="slider">

    <div class="filter">
      <div class="filter__container">
        <span @click="showSlider(1)" class="filter__item" :class="(display_slider_1) ? 'active' : ''">سليدر 1</span>
        <span @click="showSlider(2)" class="filter__item" :class="(display_slider_2) ? 'active' : ''">سليدر 2</span>
        <span @click="showSlider(3)" class="filter__item" :class="(display_slider_3) ? 'active' : ''">سليدر 3</span>
      </div>
    </div>

    <div v-if="display_slider_1">
      <b-form @submit.prevent="updateSlider_1">
        <div class="row pe-3 ps-3">
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_1.title_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_1.title_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_1.description_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_1.description_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للعربي</span>
              <b-form-file plain @change="addSlider1ArPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_1.image_ar">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للانجليزي</span>
              <b-form-file plain @change="addSlider1EnPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_1.image_en">
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <b-button type="submit" class="btn">حفظ</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div v-if="display_slider_2">
      <b-form @submit.prevent="updateSlider_2">
        <div class="row pe-3 ps-3">
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_2.title_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_2.title_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_2.description_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_2.description_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للعربي</span>
              <b-form-file plain @change="addSlider2ArPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_2.image_ar">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للانجليزي</span>
              <b-form-file plain @change="addSlider2EnPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_2.image_en">
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <b-button type="submit" class="btn">حفظ</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div v-if="display_slider_3">
      <b-form @submit.prevent="updateSlider_3">
        <div class="row pe-3 ps-3">
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_3.title_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>العنوان بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_3.title_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالعربي</span>
              <b-form-input class="input" type="text" v-model="slider_3.description_ar" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الوصف بالانجليزي</span>
              <b-form-input class="input" type="text" v-model="slider_3.description_en" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للعربي</span>
              <b-form-file plain @change="addSlider3ArPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_3.image_ar">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الصورة للانجليزي</span>
              <b-form-file plain @change="addSlider3EnPhoto"></b-form-file>
            </div>
            <div class="img">
              <img :src="slider_3.image_en">
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <b-button type="submit" class="btn">حفظ</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div class="err" v-if="error">{{ error_message_ar }}</div>

  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  components: {
    Spinner
  },
  data() {
    return {
      slider_1: '',
      slider_1_photo_file_ar: '',
      slider_1_photo_file_en: '',
      slider_2: '',
      slider_2_photo_file_ar: '',
      slider_2_photo_file_en: '',
      slider_3: '',
      slider_3_photo_file_ar: '',
      slider_3_photo_file_en: '',
      display_slider_1: true,
      display_slider_2: false,
      display_slider_3: false,
      is_loading: false,
      error: false,
      error_message_ar: '',
    }
  },
  created() {
    this.loadSliders();
  },
  methods: {
    showSlider(slider) {
      if (slider == 1) {
        this.display_slider_2 = false;
        this.display_slider_3 = false;
        this.display_slider_1 = true;
      } else if (slider == 2) {
        this.display_slider_3 = false;
        this.display_slider_1 = false;
        this.display_slider_2 = true;
      } else if (slider == 3) {
        this.display_slider_1 = false;
        this.display_slider_2 = false;
        this.display_slider_3 = true;
      }
    },
    addSlider1ArPhoto(e) {
      this.slider_1_photo_file_ar = e.target.files[0];
      this.$emit('input', this.slider_1_photo_file_ar);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_1_photo_file_ar);
      reader.onload = e => {
        this.slider_1.image_ar = e.target.result;
      }
    },
    addSlider1EnPhoto(e) {
      this.slider_1_photo_file_en = e.target.files[0];
      this.$emit('input', this.slider_1_photo_file_en);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_1_photo_file_en);
      reader.onload = e => {
        this.slider_1.image_en = e.target.result;
      }
    },
    addSlider2ArPhoto(e) {
      this.slider_2_photo_file_ar = e.target.files[0];
      this.$emit('input', this.slider_2_photo_file_ar);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_2_photo_file_ar);
      reader.onload = e => {
        this.slider_2.image_ar = e.target.result;
      }
    },
    addSlider2EnPhoto(e) {
      this.slider_2_photo_file_en = e.target.files[0];
      this.$emit('input', this.slider_2_photo_file_en);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_2_photo_file_en);
      reader.onload = e => {
        this.slider_2.image_en = e.target.result;
      }
    },
    addSlider3ArPhoto(e) {
      this.slider_3_photo_file_ar = e.target.files[0];
      this.$emit('input', this.slider_3_photo_file_ar);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_3_photo_file_ar);
      reader.onload = e => {
        this.slider_3.image_ar = e.target.result;
      }
    },
    addSlider3EnPhoto(e) {
      this.slider_3_photo_file_en = e.target.files[0];
      this.$emit('input', this.slider_3_photo_file_en);
      let reader = new FileReader();
      reader.readAsDataURL(this.slider_3_photo_file_en);
      reader.onload = e => {
        this.slider_3.image_en = e.target.result;
      }
    },
    async loadSliders() {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/user/get-sliders", requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.slider_1 = result.data[0];
              this.slider_2 = result.data[1];
              this.slider_3 = result.data[2];
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    },
    async updateSlider_1() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("title_en", this.slider_1.title_en);
      formdata.append("title_ar", this.slider_1.title_ar);
      formdata.append("description_en", this.slider_1.description_en);
      formdata.append("description_ar", this.slider_1.description_ar);
      formdata.append("image_en", this.slider_1_photo_file_en);
      formdata.append("image_ar", this.slider_1_photo_file_ar);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/admin/auth/update-slider/1", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadSliders();
      this.is_loading = false
    },
    async updateSlider_2() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("title_en", this.slider_2.title_en);
      formdata.append("title_ar", this.slider_2.title_ar);
      formdata.append("description_en", this.slider_2.description_en);
      formdata.append("description_ar", this.slider_2.description_ar);
      formdata.append("image_en", this.slider_2_photo_file_en);
      formdata.append("image_ar", this.slider_2_photo_file_ar);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/admin/auth/update-slider/2", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadSliders();
      this.is_loading = false

    },
    async updateSlider_3() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("title_en", this.slider_3.title_en);
      formdata.append("title_ar", this.slider_3.title_ar);
      formdata.append("description_en", this.slider_3.description_en);
      formdata.append("description_ar", this.slider_3.description_ar);
      formdata.append("image_en", this.slider_3_photo_file_en);
      formdata.append("image_ar", this.slider_3_photo_file_ar);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/admin/auth/update-slider/3", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadSliders();
      this.is_loading = false

    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";
@import "../../assets/css/dashboard";

.filter__item {
  cursor: pointer;
}

</style>