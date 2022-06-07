<template>
  <div>
    <Navbar></Navbar>

    <spinner class="spinner" v-if="is_loading"></spinner>

    <div class="ar" v-if="getLang === 'ar'">
      <main class="app">
        <div class="row">
          <div class="col-12">
            <div class="app__details">
              <div class="row">
                <div class="col-12 col-md-4 app__details__info">
                  <div class="app__details__info__logo">
                    <img :src="project.logo">
                  </div>
                  <span class="app__details__info__title">{{ project.title_ar }}</span>
                  <span class="app__details__info__sub-title">عن الموقع</span>
                  <span class="app__details__info__about">{{ project.description_ar }}</span>
                  <span class="app__details__info__sub-title">عرض </span>
                  <a target="_blank" :href="project.link1">{{ project.link1 }}</a>
                </div>
                <div class="col-12 col-md-8 app__details__img">
                  <div class="app__details__img__slider">
                    <img :src="project.attachs[currentPhoto].attach">
                  </div>
                  <div class="app__details__img__owl">
                    <div @click="displayPrevious" class="app__details__img__owl__previous"><i class="fas fa-angle-right"></i></div>
                    <div class="app__details__img__owl__slide">
                      <div class="app__details__img__owl__slide__item"
                           v-for="(item, index) in project.attachs" :key="item.id"
                           :class="(currentPhoto == index) ? 'active' : ''"
                           @click="displayItem(index)"></div>
                    </div>
                    <div @click="displayNext" class="app__details__img__owl__next"><i class="fas fa-angle-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div class="en" v-if="getLang === 'en'">
      <main class="app">
        <div class="row">
          <div class="col-12">
            <div class="app__details">
              <div class="row">
                <div class="col-12 col-md-4 app__details__info">
                  <div class="app__details__info__logo">
                    <img :src="project.logo">
                  </div>
                  <span class="app__details__info__title">{{ project.title_en }}</span>
                  <span class="app__details__info__sub-title">about website</span>
                  <span class="app__details__info__about">{{ project.description_en }}</span>
                  <span class="app__details__info__sub-title">View</span>
                  <a target="_blank" :href="project.link1">{{ project.link1 }}</a>
                </div>
                <div class="col-12 col-md-8 app__details__img">
                  <div class="app__details__img__slider">
                    <img :src="project.attachs[currentPhoto].attach">
                  </div>
                  <div class="app__details__img__owl">
                    <div @click="displayPrevious" class="app__details__img__owl__previous"><i class="fas fa-angle-left"></i></div>
                    <div class="app__details__img__owl__slide">
                      <div class="app__details__img__owl__slide__item"
                           v-for="(item, index) in project.attachs" :key="item.id"
                           :class="(currentPhoto == index) ? 'active' : ''"
                           @click="displayItem(index)"></div>
                    </div>
                    <div @click="displayNext" class="app__details__img__owl__next"><i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Website",
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
      project: '',
      currentPhoto: 0,
    }
  },
  created() {
    window.scrollTo(0,0);
    this.loadProject(this.$route.params.id);
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    displayPrevious() {
      if (this.currentPhoto > 0) {
        this.currentPhoto--;
      }
      else {
        this.currentPhoto = this.project.attachs.length - 1
      }
    },
    displayNext() {
      if (this.currentPhoto == this.project.attachs.length - 1) {
        this.currentPhoto = 0;
      }
      else {
        this.currentPhoto++;
      }
    },
    displayItem(index) {
      this.currentPhoto = index;
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
              this.project = result.data.project;
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

.spinner {
  margin: 6rem 0 10rem;
}

.app {
  padding: 2rem 5% 10px;
  margin: 4rem 0;

  &__details,
  &__suggest {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px !important;
    box-shadow: 0 0 1.1rem rgba(0,0,0,0.3);
    height: 100%;
  }

  &__details {

    &__info {
      display: flex;
      flex-direction: column;
      padding: 0 15px;

      &__logo {
        margin-bottom: 20px;

        & img {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }

      &__title {
        color: $color-primary-dark-1;
        font-weight: 700 !important;
        font-size: 30px;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      &__sub-title {
        margin-bottom: 10px;
        font-size: 18px;
        color: #656565;
        font-weight: 500;
      }

      &__about {
        text-align: justify;
        margin-bottom: 20px;
        font-size: 14px;
        color: #818181;
        font-weight: 200;
      }

      &__download {
        display: flex;

        & a {
          margin: 0 5px;
        }
      }
    }

    &__img {

      &__slider {
        display: flex;
        padding: 0 3%;
        height: 85%;

        & img {
          width: 100%;
          height: 100%;
        }
      }

      &__owl {
        display: flex;
        width: 100%;
        margin-top: 30px;

        &__next,
        &__previous {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background-color: $color-white;
          border-radius: 50%;
          cursor: pointer;

          &:hover {
            transform: scale(1.2);
          }

          i {
            font-size: 40px;
            font-weight: 100;
            color: $color-primary-dark-1;
          }
        }

        &__slide {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto 0;
          cursor: pointer;
          width: calc(100% - 50px);

          &__item {
            width: 60px;
            height: 3px;
            background-color: $color-primary-dark-1;
            border-radius: 10px;

            &.active {
              height: 9px;
            }
          }
        }
      }

    }

  }

  &__suggest {
    display: flex;
    flex-direction: column;

    &__title {
      margin-bottom: 10px;
      font-size: 22px;
      color: #656565;
      font-weight: 500;
    }

    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        padding: 3%;
        width: 100%;
        border-bottom: 1px solid #cccccc;

        &__logo {
          margin-bottom: 10px;

          & img {
            border-radius: 10px;
          }
        }

        &__title {
          color: $color-primary-dark-1;
          font-weight: 700 !important;
          font-size: 24px;
          line-height: 1.4;
        }
      }

      &__btn {
        padding-top: 20px;
        & a {
          display: block;
          background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
          color: $color-white;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 10px 0 15px;
          text-decoration: none;
          font-size: 1rem;

          &:hover {
            background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
            transform: translateY(-3px);
          }
        }
      }
    }

  }
}

@media (max-width: 1024px) {
  .app__details__img,
  .app__suggest {
    margin-top: 40px;
  }

}
</style>