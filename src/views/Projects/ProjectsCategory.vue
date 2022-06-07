<template>
  <div>
    <Navbar></Navbar>

    <spinner class="spinner" v-if="is_loading"></spinner>

    <div v-else>
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


        <div class="main row">
          <div class="project col-12 col-md-4"
               v-for="project in projects" :key="project.id">
          <div class="project__container">
              <div class="project__box-grad"></div>
              <div class="project__content">
                <router-link :to="/project/ + project.id">
                  <img class="project__content__img" :src="project.image.attach">
                  <div class="project__content__title">
                    <router-link to="">{{ project.title_ar }}</router-link>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-apps en" v-if="getLang === 'en'">
        <div class="intro">
          <div class="intro__img">
            <img src="../../assets/img/website-banner.webp">
          </div>
          <div class="intro__title">
            <div class="title-3">{{ category.sub_category_name_en }}</div>
            <div class="title-2">{{ category.title1_en }}</div>
            <div class="title-2">{{ category.title2_en }}</div>
            <div class="break mb-4"></div>
            <div class="desc">{{ category.description2_en }}</div>
          </div>
        </div>

        <div class="main row">
          <div class="project col-12 col-md-4"
               v-for="project in projects" :key="project.id">
            <div class="project__container">
              <div class="project__box-grad"></div>
              <div class="project__content">
                <router-link :to="/project/ + project.id">
                  <img class="project__content__img" :src="project.image.attach">
                  <div class="project__content__title">
                    <router-link to="">{{ project.title_en }}</router-link>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  name: "ProjectsCategory",
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

.mobile-apps {
  margin: 4rem 0 10rem;
}

.spinner{
  margin: 6rem 0 10rem;
}

a {
  text-decoration: none;
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

.main {
  padding: 0 5%;
  display: flex;
  justify-content: center;
}

.project {
  margin-top: 80px;

  &__container {
    position: relative;
    width: 100%;

  }

  &__box-grad {
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 8px;
    bottom: 0;
    width: 100%;
    border-radius: 8px !important;
  }

  &__content {
    background: $color-white;
    padding: 12px 12px 0;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    width: 100%;

    &__img {
      width: 100%;
      height: 250px;
      border-radius: 8px;
    }

    &__title {
      padding: 10px 0;
      display: flex;
      justify-content: center;

      & a {
        text-decoration: none;
        color: #343434;
        font-size: 22px;
        font-family: "We work Bold";
        font-weight: 500;

        &:hover {
          color: $color-primary-dark-1;
        }
      }
    }

    &:hover {
      transform: translate3d(0, -4px, 0);
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