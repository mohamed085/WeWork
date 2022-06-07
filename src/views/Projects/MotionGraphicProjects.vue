<template>
  <div>
    <Navbar></Navbar>

    <spinner class="spinner" v-if="is_loading"></spinner>

    <div class="mobile-apps ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img :src="category.main_photo">
        </div>
        <div class="intro__title">
          <div class="title-3">{{ category.sub_category_name_ar }}</div>
          <div class="title-2">{{ category.title1_ar }}</div>
          <div class="title-2">{{ category.title2_ar }}</div>
          <div class="break mb-4"></div>
          <div class="desc">{{ category.description1_ar }}</div>
        </div>
      </div>

      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-6"
               v-for="project in projects" :key="project.id">
          <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <iframe :src="project.video"></iframe>
              </div>
              <span class="motion-graphic__items__item__title">{{ project.title_ar }}</span>
              <span class="motion-graphic__items__item__desc">{{ project.description_ar }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div class="mobile-apps en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__img">
          <img :src="category.main_photo">
        </div>
        <div class="intro__title">
          <div class="title-3">{{ category.sub_category_name_en }}</div>
          <div class="title-2">{{ category.title1_en }}</div>
          <div class="title-2">{{ category.title2_en }}</div>
          <div class="break mb-4"></div>
          <div class="desc">{{ category.description2_en }}</div>
        </div>
      </div>

      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-6"
               v-for="project in projects" :key="project.id">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <iframe :src="project.video"></iframe>
              </div>
              <span class="motion-graphic__items__item__title">{{ project.title_en }}</span>
              <span class="motion-graphic__items__item__desc">{{ project.description_en }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>

    <ProjectMessage></ProjectMessage>

    <div class="space"></div>
    <Footer></Footer>
  </div>

</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectMessage from "@/components/ProjectMessage";
import Spinner from "@/components/ui/Spinner";

export default {
  name: "MotionGraphicProjects",
  components: {
    Spinner,
    ProjectMessage,
    Footer,
    Navbar
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      projects: '',
      category: '',
    }
  },
  created() {
    window.scrollTo(0,0);
    this.loadProjects(this.$route.params.id);
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async loadProjects(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/user/get-projects/` + id

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.projects = result.data.projects;
              this.category = result.data.category;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    },
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/typography";
@import "../../assets/css/mixins";

.spinner{
  margin: 6rem 0 10rem;
}

.mobile-apps {
  margin: 4rem 0 10rem;
}

.intro {
  position: relative;
  padding: 2rem 4rem 0;

  &__img {
    display: block;
    position: absolute;
    top: 2%;
    left: 0;
    right: 50%;
    bottom: 0;
    z-index: -1;

    & img {
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    padding: 4rem 0;
    z-index: 1;
    width: 50%;
    margin-bottom: 2rem;
  }
}

.en .intro__img {
  top: 2%;
  left: 50%;
  right: 0;
  bottom: 0;
}

.motion-graphic__items {
  padding: 70px 5%;

  & .col-12, .col-md-4 {
    margin-top: 40px;
  }

  &__item {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px !important;
    box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "The Sans Arabic";

    &__video iframe {
      width: 100%;
      height: 20rem
    }

    &__title {
      padding: 0 3%;
      margin: 15px 0;
      color: $color-primary-dark-1;
      font-weight: 700 !important;
      font-size: 24px;
      line-height: 1.4;
    }

    &__desc {
      padding: 0 3%;
      text-align: justify;
      margin-bottom: 15px;
      font-size: 14px;
      color: #656565;
      font-weight: 400;
    }
  }
}

@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }

  .intro__img {
    width: 100%;
    opacity: .3;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
  }

  .intro__title {
    width: 100%;
  }
}
</style>