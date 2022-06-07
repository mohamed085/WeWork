<template>
  <div>
    <spinner v-if="is_loading"></spinner>

    <b-form @submit.prevent="updateNewProject" v-else>
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="err" v-if="error">{{ error_message_ar }}</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالعربي</span>
            <b-form-input className="input" type="text" v-model="app.title_ar" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالانجليزي</span>
            <b-form-input className="input" type="text" v-model="app.title_en" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوصف بالعربي</span>
            <b-form-input className="input" type="text" v-model="app.description_ar" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوصف بالانجليزي</span>
            <b-form-input className="input" type="text" v-model="app.description_en" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>ال url ( في حاله ال mobile app يكون url الاندرويد)</span>
            <b-form-input className="input" type="text" v-model="app.link1" required></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>ال url ( خاص بال mobile app يكون url الايفون)</span>
            <b-form-input className="input" type="text" v-model="app.link2"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>ال url الخاص بفيديو الموشن جرافيك</span>
            <div v-if="display_video">
              <iframe :src="app.video"></iframe>
            </div>
            <div v-else>
              <b-form-input className="input" type="text" v-model="app.video"></b-form-input>
              <button class="btn" @click="addVideo">عرض الفيديو</button>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوجو</span>
            <b-form-file plain @change="addLogoPhoto"></b-form-file>
          </div>
          <div class="img">
            <img v-if="app.logo" :src="app.logo">
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <span>الصور</span>
            <i @click="addNewImage" class="fas fa-plus"></i>
          </div>
          <div class="images">
            <div class="border p-2 m-2"
                 v-for="(image, index) in this.app.attachs" :key="image.id">
              <div class="d-flex justify-content-between align-items-center pe-2 ps-2">
                <i @click="addToRemoveList(image.id, index)" class="fas fa-trash"></i>
              </div>
              <div class="img mt-2">
                <img :src="image.attach">
              </div>
            </div>
          </div>
          <div class="images">
            <div class="border p-2 m-2"
                 v-for="(image, index) in images" :key="image.id">
              <div class="d-flex justify-content-between align-items-center pe-2 ps-2">
                <b-form-file plain @change="addImage($event, index)" required></b-form-file>
                <i @click="deleteImage(index)" class="fas fa-trash"></i>
              </div>
              <div class="img mt-2">
                <img :src="image.image_src">
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 justify-content-end">
          <b-button type="submit" className="btn">حفظ</b-button>
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
      app: '',
      logo_file: '',
      display_video: false,
      images: [
        { id: new Date(), image_src: '', image_file: '' },
      ],
      removeList: [],
    }
  },
  created() {
    this.loadProject(this.$route.params.id);
  },
  methods: {
    addLogoPhoto(e) {
      this.logo_file = e.target.files[0];
      this.$emit('input', this.logo_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.logo_file);
      reader.onload = e => {
        this.app.logo = e.target.result;
      }
    },
    addImage(e, index) {
      this.images[index].image_file = e.target.files[0];
      this.$emit('input', this.images[index].image_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.images[index].image_file);
      reader.onload = e => {
        this.images[index].image_src = e.target.result;
      }
    },
    addNewImage() {
      this.images.push({ id: new Date(), image_src: '', image_file: '' })
    },
    deleteImage(index) {
      this.images.splice(index, 1);
    },
    addToRemoveList(id, index) {
      this.app.attachs.splice(index, 1);
      this.removeList.push({ id: id });
    },
    addVideo() {
      const youtube = `https://www.youtube.com/embed/${this.app.video_link.slice(this.app.video_link.indexOf("=") + 1)}?controls=0`
      this.app.video = youtube;
      this.display_video = true
    },
    async loadProject(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/user/get-project/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.app = result.data.project;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;

    },
    async updateNewProject() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("sub_category_id", this.$route.params.id);
      formdata.append("title_en", this.app.title_en);
      formdata.append("title_ar", this.app.title_ar);
      formdata.append("description_en", this.app.description_en);
      formdata.append("description_ar", this.app.description_ar);
      formdata.append("link1", this.app.link1);
      formdata.append("link2", this.app.link2);
      formdata.append("logo", this.logo_file);

      if (this.images.length > 0) {
        console.log("this.images.length > 0")
        this.images.forEach((value, index) => {
          formdata.append('attach[' + index + ']', value.image_file);
        })
      }

      if (this.removeList.length > 0) {
        console.log("this.removeList.length > 0")
        this.removeList.forEach((value, index) => {
          formdata.append('deleted_attaches[' + index + ']', value.id);
        })
      }

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/update-project/` + this.app.id;
      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              router.push('/dashboard/projects/item/items/' + this.app.sub_category_id)
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

i {
  cursor: pointer;
}

.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>