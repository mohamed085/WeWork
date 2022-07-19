<template>
  <div>
    <Navbar></Navbar>

    <spinner class="spinner" v-if="is_loading"></spinner>

    <div v-else>

      <div class="mobile-apps ar" v-if="getLang === 'ar'">
        <div class="intro row">
          <div class="intro__title col-12 col-md-6">
            <div class="title-3">{{ category.sub_category_name_ar }}</div>
            <div class="title-2">{{ category.title1_ar }}</div>
            <div class="title-2">{{ category.title2_ar }}</div>
            <div class="break mb-4"></div>
            <div class="desc">{{ category.description1_ar }}</div>
          </div>
          <div class="intro__img col-12 col-md-6">
            <img :src="category.main_photo">
          </div>
        </div>

        <main>
          <div class="apps">
            <div class="row apps__container">
              <div class="col-12 col-md-6"
                   v-for="project in projects" :key="project.id">
                <div class="app">
                  <div class="app__box-grad"></div>
                  <div class="app__content">
                    <div class="app__content__body">
                      <div class="app__content__body__img">
                        <router-link :to="'/mobile-application/' + project.id">
                          <img :src="project.image.attach">
                        </router-link>
                      </div>
                      <div class="app__content__body__desc">
                        <h3 class="app__content__body__desc__title">{{ project.title_ar }}</h3>
                        <div class="app__content__body__desc__text">
                          <p>{{ project.description_ar }}</p>
                        </div>
                        <router-link :to="'/mobile-application/' +  project.id" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                        <div class="app__content__body__desc__download">
                          <a target="_blank" :href="project.link2" class="app__content__body__desc__download__link">
                            <img src="../../assets/svg/app-store.svg">
                          </a>
                          <a target="_blank" :href="project.link1" class="app__content__body__desc__download__link">
                            <img src="../../assets/svg/play-store.svg">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>


      <div class="mobile-apps en" v-if="getLang === 'en'">
        <div class="intro row">
          <div class="intro__title col-12 col-md-6">
            <div class="title-3">{{ category.sub_category_name_en }}</div>
            <div class="title-2">{{ category.title1_en }}</div>
            <div class="title-2">{{ category.title2_en }}</div>
            <div class="break mb-4"></div>
            <div class="desc">{{ category.description2_en }}</div>
          </div>
          <div class="intro__img col-12 col-md-6">
            <img :src="category.main_photo">
          </div>
        </div>

        <main>
          <div class="apps">
            <div class="row apps__container">
              <div class="col-12 col-md-6"
                   v-for="project in projects" :key="project.id">
                <div class="app">
                  <div class="app__box-grad"></div>
                  <div class="app__content">
                    <div class="app__content__body">
                      <div class="app__content__body__img">
                        <router-link to="/mobile-application/125653">
                          <img :src="project.image.attach">
                        </router-link>
                      </div>
                      <div class="app__content__body__desc">
                        <h3 class="app__content__body__desc__title">{{ project.title_ar }}</h3>
                        <div class="app__content__body__desc__text">
                          <p>{{ project.description_ar }}</p>
                        </div>
                        <router-link :to="'/mobile-application/' +  project.id" class="app__content__body__desc__btn">Read more</router-link>
                        <div class="app__content__body__desc__download">
                          <a target="_blank" :href="project.link2" class="app__content__body__desc__download__link">
                            <img src="../../assets/svg/app-store.svg">
                          </a>
                          <a target="_blank" :href="project.link1" class="app__content__body__desc__download__link">
                            <img src="../../assets/svg/play-store.svg">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
  name: "MobileApps",
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

      let url = `https://api.we-work.pro/api/user/get-projects/` + id

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

.mobile-apps,  {
  margin: 4rem 0 10rem;
}

.spinner{
  margin: 6rem 0 10rem;
}

.intro {
  padding: 2rem 4rem 0;

  &__img {

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__title {
    padding: 4rem 0;
    margin-bottom: 2rem;
  }
}


.apps {

  &__container {
    padding: 5%;
  }
}

.app {
  margin-top: 10rem;
  padding: 0;
  position: relative;
  width: 100%;
  user-select: none;

  &__box-grad {
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
    z-index: 0;
    left: 0 !important;
    right: 0 !important;
  }

  &__content {
    background: $color-white;
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    width: 100%;

    &:hover {
      transform: translate3d(0, -8px, 0);
    }

    &__body {
      padding: 10px !important;
      flex: 1 1 auto;
      min-height: 1px;
      display: flex;

      &__img {
        width: 20rem;
        margin: -5rem 5px 0;

        & img {
          width: 100%;
          vertical-align: middle;
          border-style: none;

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      &__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        &__title {
          font-size: 2.4rem;
          color: $color-primary-dark-1;
        }

        &__text {
          max-height: 100px;
          overflow: hidden;
          margin-bottom: 15px;

          & p {
            font-weight: 100 !important;
            font-family: 'The Sans Arabic' !important;
            color: #6f7070;
            line-height: 1.8;
            margin: 0;
            font-size: 14px;
            padding: 0 0 10px;
          }
        }

        &__btn {
          display: inline-block;
          width: max-content;
          font-size: 1rem;
          background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
          color: $color-white;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 10px 0 15px;
          text-decoration: none;

          &:hover {
            background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
            transform: translateY(-3px);
          }
        }

        &__download {
          display: flex;

          &__link {
            margin: 0 3px;
          }
        }

      }

    }
  }
}

@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }

  .intro__img {
    margin: 0;
    padding: 0;
    height: 0;
    display: none;
  }

  .app {
    margin-top: 240px;
  }

  .app__content__body {
    flex-direction: column;
    align-items: center;
  }

  .app__content__body__img {
    width: 200px;
    margin: -160px 10px 30px;
  }
}
</style>