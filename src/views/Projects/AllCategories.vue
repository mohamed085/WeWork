<template>
  <div class="all-categories ar" v-if="getLang === 'ar'">

    <spinner v-if="is_loading"></spinner>

    <div v-else>
      <div v-for="category in items" :key="category.id">
        <div v-if="category.sub_category_name_en == 'mobile application'" class="section">
          <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-4">
              <div class="section__title">
                <h3 class="section__title__heading">{{ category.sub_category_name_ar }}</h3>
                <router-link to="/mobile-applications" class="section__title__btn mt-3">اكتشف الكل</router-link>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-8">
              <div class="section__content">
                <div class="mobile-apps">
                  <img class="mobile-apps__app" :src="category.photo1">
                  <img class="mobile-apps__app" :src="category.photo2">
                  <img class="mobile-apps__app" :src="category.photo3">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div v-else-if="category.sub_category_name_en == 'website'" class="section">
          <div class="section__container row">
            <div class="composition-container col-12 col-md-8">
              <div class="composition">
                <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 1"
                     class="composition__photo composition__photo--p1"
                     :src="category.photo1">
                <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 1"
                     class="composition__photo composition__photo--p1"
                     :src="category.photo2">
                <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 1"
                     class="composition__photo composition__photo--p1"
                     :src="category.photo2">
              </div>
            </div>
            <div class="section__sub section__sub-2 col-12 col-md-4">
              <div class="section__title">
                <h3 class="section__title__heading">{{ category.sub_category_name_ar }}</h3>
                <router-link to="/websites" class="section__title__btn mt-3">اكتشف الكل</router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="section">
          <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">{{ category.sub_category_name_ar }}</h3>
                <router-link
                    v-if="category.sub_category_name_en == 'motion graphics'"
                    to="/motion-graphics" class="section__title__btn mt-3">اكتشف الكل</router-link>
                <router-link
                    v-else
                    :to="'projects/' + category.id" class="section__title__btn mt-3">اكتشف الكل</router-link>

              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content mobile-hidden">
                <div class="designs">
                  <div v-if="lg_screen.slide_1" class="design-item animate__animated animate__slideInLeft">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content pb-4">
                      <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                    </div>
                  </div>
                  <div v-if="lg_screen.slide_1 || lg_screen.slide_2" class="design-item animate__animated animate__slideInLeft">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content pb-4">
                      <img class="design-item__content__img" src="../../assets/img/interior-design/BadRooM2.jpg">
                    </div>
                  </div>
                  <div v-if="lg_screen.slide_1 || lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content pb-4">
                      <img class="design-item__content__img" src="../../assets/img/interior-design/bathRoom.jpg">
                    </div>
                  </div>
                  <div v-if="lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content pb-4">
                      <img class="design-item__content__img" src="../../assets/img/interior-design/dressing-room.jpg">
                    </div>
                  </div>
                  <div v-if="lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content pb-4">
                      <img class="design-item__content__img" src="../../assets/img/interior-design/living-room.jpg">
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div @click="displaySlider('last')" class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                  <div class="owl-dots__slide">
                    <div @click="displaySlider('slider_1')" class="owl-dots__slide__item" :class="(lg_screen.slide_1) ? 'active' : ''"></div>
                    <div @click="displaySlider('slider_2')" class="owl-dots__slide__item" :class="(lg_screen.slide_2) ? 'active' : ''"></div>
                    <div @click="displaySlider('slider_3')" class="owl-dots__slide__item" :class="(lg_screen.slide_3) ? 'active' : ''"></div>
                  </div>
                  <div @click="displaySlider('next')" class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="all-categories en" v-else-if="getLang === 'en'">

    <spinner v-if="is_loading"></spinner>

    <div v-else>
      <div v-for="category in items" :key="category.id">

        <!-- Mobile apps -->
        <div v-if="category.sub_category_name_en == 'mobile application'" class="section">
          <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-4">
              <div class="section__title">
                <h3 class="section__title__heading">{{ category.sub_category_name_en }}</h3>
                <router-link to="/mobile-applications" class="section__title__btn mt-3">Discover all</router-link>

              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-8">
              <div class="section__content">
                <div class="mobile-apps">
                  <img class="mobile-apps__app" :src="category.photo1">
                  <img class="mobile-apps__app" :src="category.photo2">
                  <img class="mobile-apps__app" :src="category.photo3">
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Websites -->
        <div class="section">
          <div class="section__container row">
            <div class="composition-container col-12 col-md-8">
              <div class="composition">
                <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                     sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 1"
                     class="composition__photo composition__photo--p1"
                     src="../../assets/img/websites/2.jpg">
                <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                     sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 2"
                     class="composition__photo composition__photo--p2"
                     src="../../assets/img/websites/2.jpg">
                <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                     sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                     alt="Photo 3"
                     class="composition__photo composition__photo--p3"
                     src="../../assets/img/websites/2.jpg">
              </div>
            </div>
            <div class="section__sub section__sub-2 col-12 col-md-4">
              <div class="section__title">
                <h3 class="section__title__heading">See all We Work websites</h3>
                <router-link to="/websites" class="section__title__btn mt-3">Discover all</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <router-link to="/motion-graphic">
            <div class="section__container row">
              <div class="section__sub-1 col-12 col-md-3">
                <div class="section__title">
                  <h3 class="section__title__heading">Latest motion graphics work</h3>
                </div>
              </div>
              <div class="section__sub-2 col-12 col-md-9">
                <div class="section__content">
                  <div class="designs">
                    <div class="design-item">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">Test project</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">Test project</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">Test project</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-dots">
                    <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                    <div class="owl-dots__slide">
                      <div class="owl-dots__slide__item active"></div>
                      <div class="owl-dots__slide__item"></div>
                      <div class="owl-dots__slide__item"></div>
                    </div>
                    <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  name: "AllCategories",
  components: {Spinner},
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      items: '',
      lg_screen: {
        slide_1: true,
        slide_2: false,
        slide_3: false,
      }
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  created() {
    this.loadAllSubCategories();
  },
  methods: {
    displaySlider(slider) {
      if (slider == '1') {
        this.lg_screen.slide_3 = false
        this.lg_screen.slide_2 = false
        this.lg_screen.slide_1 = true
      }
      else if (slider == '2') {
        this.lg_screen.slide_3 = false
        this.lg_screen.slide_1 = false
        this.lg_screen.slide_2 = true
      }
      else if (slider == '3') {
        this.lg_screen.slide_1 = false
        this.lg_screen.slide_2 = false
        this.lg_screen.slide_3 = true
      }
      else if (slider == 'next') {
        if (this.lg_screen.slide_1) {
          this.lg_screen.slide_3 = false
          this.lg_screen.slide_1 = false
          this.lg_screen.slide_2 = true
        }
        else if (this.lg_screen.slide_2) {
          console.log(slider);
          this.lg_screen.slide_2 = false
          this.lg_screen.slide_1 = false
          this.lg_screen.slide_3 = true
        }
        else if (this.lg_screen.slide_3) {
          this.lg_screen.slide_2 = false
          this.lg_screen.slide_3 = false
          this.lg_screen.slide_1 = true
        }
      }
      else if (slider == 'last') {
        if (this.lg_screen.slide_1) {
          this.lg_screen.slide_1 = false
          this.lg_screen.slide_2 = false
          this.lg_screen.slide_3 = true
        }
        else if (this.lg_screen.slide_2) {
          this.lg_screen.slide_2 = false
          this.lg_screen.slide_3 = false
          this.lg_screen.slide_1 = true
        }
        else if (this.lg_screen.slide_3) {
          this.lg_screen.slide_3 = false
          this.lg_screen.slide_1 = false
          this.lg_screen.slide_2 = true
        }

      }
    },
    async loadAllSubCategories() {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/user/get-all-sub-categories", requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.items = result.data;
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
@import "../../assets/css/mixins";
@import "../../assets/css/composition";
@import "../../assets/css/figure";

* {
  transition: .4s all;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.projects {
  background: $color-grey-light-4;
}

.ar {
  text-align: right;
  direction: rtl;
}

.page-header {
  padding-top: 100px;
}

.section {
  background: $color-white;
  margin: 1rem 0;

  &__container {
    padding: 5%;
  }

  &__sub-1,
  &__sub-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__sub-1  {
    margin-bottom: 1rem;
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    &__heading {
      text-align: center !important;
      color: $color-primary-dark;
      font-weight: 700 !important;
      line-height: 1.4;
      font-size: 34px;
    }

    &__btn {
      text-decoration: none;
      background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
      color: $color-white;
      padding: 12px 30px;
      border-radius: 100px !important;

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba($color-black,.2);
      }

      &:hover {
        background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
      }
    }

  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.row  {
  margin: 0;
}

.mobile-apps {
  display: flex;
  justify-content: center;
  align-items: center;

  &__app {
    margin: 10px 10px 0;
    padding: 0;
    max-height: 25rem;
    max-width: 100%;

    &:hover {
      transform: scale(1.2);
    }

  }
}

.composition-container {
  height: 400px;
}

.designs {
  display: flex;
}

.design-item {
  position: relative;
  width: 275px;
  margin: 10px;

  &__box-grad {
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
  }

  &__content {
    background: $color-white;
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;

    &__img {
      width: 100%;
      height: 200px;
      border-radius: 8px;
    }

    &__title {
      margin: 7px;

      & a {
        text-decoration: none;
        color: #343434;
        font-size: 18px;
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

.owl-dots {
  display: flex;
  width: 100%;
  margin-top: 60px;

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

@media (max-width: 1024px) {
  .composition-container {
    height: auto;
    padding: 40px 0;
  }

  .section__container {
    padding: 10% 5%;
  }

  .mobile-hidden {
    display: none;
  }

  .owl-dots__slide__item {
    width: 40px;

  }
}


</style>