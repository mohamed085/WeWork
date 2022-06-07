<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="projects-view ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-3">المشاريع</div>
          <div class="title">اكتشف دراسات الحالة لدينا</div>
          <div class="break"></div>
          <div class="desc">
            في غضون 22 عامًا من خبرتنا ، عملنا مع أكثر من 200 عميل عالمي لمساعدتهم على حل مشاكل أعمالهم وتحويل مؤسساتهم رقميًا.
          </div>
          <div class="desc">
            لقد قمنا ببناء شراكات طويلة الأمد مبنية على الثقة من خلال تقديم حلول برمجية قوية ، مطابقة أو حتى تجاوز توقعات عملائنا.
          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../../assets/img/Banner.webm" type="video/webm">
        </video>
      </div>

      <div class="main-projects">
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">أعادت إعادة تصميم UX / UI تنشيط سوق يضم أكثر من 58000 مستخدم</div>
            <div class="desc">
              بلغ بحر ذروة الاهتمام ولم يتمكن من تنمية قاعدته. نما التحويل بنسبة 53٪ بعد أن قدمنا تصميمًا جديدًا للواجهة قائم على الأبحاث.
            </div>
            <router-link to="/" class="btn"> قراءه المزيد  <i class="fas fa-arrow-left"></i></router-link>
          </div>
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">
          </div>
        </div>
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">
          </div>
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">أعادت إعادة تصميم UX / UI تنشيط سوق يضم أكثر من 58000 مستخدم</div>
            <div class="desc">
              بلغ بحر ذروة الاهتمام ولم يتمكن من تنمية قاعدته. نما التحويل بنسبة 53٪ بعد أن قدمنا تصميمًا جديدًا للواجهة قائم على الأبحاث.
            </div>
            <router-link to="/" class="btn"> قراءه المزيد  <i class="fas fa-arrow-left"></i></router-link>
          </div>
        </div>
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">أعادت إعادة تصميم UX / UI تنشيط سوق يضم أكثر من 58000 مستخدم</div>
            <div class="desc">
              بلغ بحر ذروة الاهتمام ولم يتمكن من تنمية قاعدته. نما التحويل بنسبة 53٪ بعد أن قدمنا تصميمًا جديدًا للواجهة قائم على الأبحاث.
            </div>
            <router-link to="/" class="btn"> قراءه المزيد  <i class="fas fa-arrow-left"></i></router-link>
          </div>
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">
          </div>
        </div>
      </div>

      <spinner v-if="is_loading"></spinner>

      <div v-else class="filter">
        <div class="filter__container">
          <div @click="loadAllSubCategories"
              class="filter__container__item" :class="(active_all) ? 'active' : ''">الكل
          </div>
          <div v-for="(item, index) in items" :key="item.id"
               class="filter__container__item"
               :class="(active_index === index) ? 'active' : ''"
               @click="loadAllSubCategoriesById(item.id, index)"
            >{{ item.category_name_ar }}</div>
        </div>
      </div>

      <div class="all-categories">

        <spinner v-if="categories_is_loading"></spinner>

        <div v-else>
          <div v-for="category in sub_categories" :key="category.id">
            <div v-if="category.sub_category_name_en == 'Mobile Application'" class="section">
              <div class="section__container row">
                <div class="section__sub-1 col-12 col-md-4">
                  <div class="section__title">
                    <h3 class="section__title__heading">{{ category.sub_category_name_ar }}</h3>
                    <router-link :to="'/mobile-applications/' + category.id" class="section__title__btn mt-3">اكتشف الكل</router-link>
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

            <div v-else-if="category.sub_category_name_en == 'Websites'" class="section">
              <div class="section__container row">
                <div class="composition-container col-12 col-md-8">
                  <div class="composition">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p1"
                         :src="category.photo1">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p2"
                         :src="category.photo2">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p3"
                         :src="category.photo2">
                  </div>
                </div>
                <div class="section__sub section__sub-2 col-12 col-md-4">
                  <div class="section__title">
                    <h3 class="section__title__heading">{{ category.sub_category_name_ar }}</h3>
                    <router-link :to="'/websites/' + category.id" class="section__title__btn mt-3">اكتشف الكل</router-link>
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
                        v-if="category.sub_category_name_en == 'Motion Graphics'"
                        :to="'/motion-graphics/' + category.id" class="section__title__btn mt-3">اكتشف الكل</router-link>
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
                          <img class="design-item__content__img" :src="category.photo1">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_1 || lg_screen.slide_2" class="design-item animate__animated animate__slideInLeft">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo2">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_1 || lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo3">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo4">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_3" class="design-item animate__animated animate__slideInLeft">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo5">
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

    </div>

    <div class="projects-view en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-3">Projects</div>
          <div class="title">Discover our case studies</div>
          <div class="break"></div>
          <div class="desc">
            Within 22 years of our experience, we have worked for over 200 global clients helping them solve their business problems and digitally transform their organisation.
          </div>
          <div class="desc">
            We have built long-term partnerships based on trust by delivering robust software solutions, matching or even exceeding our clients’ expectations.
          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../../assets/img/Banner.webm" type="video/webm">
        </video>
      </div>

      <div class="main-projects">
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">A UX/UI redesign reactivated a marketplace with 58,000+ users</div>
            <div class="desc">
              Bahr reached peak interest and couldn’t grow its base. Conversion grew by 53% after we introduced a new and research-based interface design.
            </div>
            <router-link to="/" class="btn">Read more <i class="fas fa-arrow-right"></i></router-link>
          </div>
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">

          </div>
        </div>
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">

          </div>
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">A UX/UI redesign reactivated a marketplace with 58,000+ users</div>
            <div class="desc">
              Bahr reached peak interest and couldn’t grow its base. Conversion grew by 53% after we introduced a new and research-based interface design.
            </div>
            <router-link to="/" class="btn">Read more <i class="fas fa-arrow-right"></i></router-link>
          </div>
        </div>
        <div class="main-projects__project row">
          <div class="col-12 col-md-6 main-projects__project__desc">
            <div class="main-projects__project__desc__logo">
              <img src="../../assets/img/clients/نورا-01.png">
            </div>
            <div class="title-3">A UX/UI redesign reactivated a marketplace with 58,000+ users</div>
            <div class="desc">
              Bahr reached peak interest and couldn’t grow its base. Conversion grew by 53% after we introduced a new and research-based interface design.
            </div>
            <router-link to="/" class="btn">Read more <i class="fas fa-arrow-right"></i></router-link>
          </div>
          <div class="col-12 col-md-6 main-projects__project__img">
            <img src="../../assets/img/CBR2-544x318.png">

          </div>
        </div>
      </div>

      <spinner v-if="is_loading"></spinner>

      <div v-else class="filter">
        <div class="filter__container">
          <div @click="loadAllSubCategories"
               class="filter__container__item" :class="(active_all) ? 'active' : ''"
          >All</div>
          <div v-for="(item, index) in items" :key="item.id"
               class="filter__container__item"
               :class="(active_index === index) ? 'active' : ''"
               @click="loadAllSubCategoriesById(item.id, index)"
          >{{ item.category_name_en }}</div>
        </div>
      </div>

      <div class="all-categories">

        <spinner v-if="categories_is_loading"></spinner>

        <div v-else>
          <div v-for="category in sub_categories" :key="category.id">
            <div v-if="category.sub_category_name_en == 'Mobile Application'" class="section">
              <div class="section__container row">
                <div class="section__sub-1 col-12 col-md-4">
                  <div class="section__title">
                    <h3 class="section__title__heading">{{ category.sub_category_name_en }}</h3>
                    <router-link :to="'/mobile-applications/' + category.id" class="section__title__btn mt-3">Discover more</router-link>
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

            <div v-else-if="category.sub_category_name_en == 'Websites'" class="section">
              <div class="section__container row">
                <div class="composition-container col-12 col-md-8">
                  <div class="composition">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p1"
                         :src="category.photo1">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p2"
                         :src="category.photo2">
                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                         alt="Photo 1"
                         class="composition__photo composition__photo--p3"
                         :src="category.photo2">
                  </div>
                </div>
                <div class="section__sub section__sub-2 col-12 col-md-4">
                  <div class="section__title">
                    <h3 class="section__title__heading">{{ category.sub_category_name_en }}</h3>
                    <router-link :to="'/websites/' + category.id" class="section__title__btn mt-3">Discover more</router-link>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="section">
              <div class="section__container row">
                <div class="section__sub-1 col-12 col-md-3">
                  <div class="section__title">
                    <h3 class="section__title__heading">{{ category.sub_category_name_en }}</h3>
                    <router-link
                        v-if="category.sub_category_name_en == 'Motion Graphics'"
                        :to="'/motion-graphics/' + category.id" class="section__title__btn mt-3">Discover more</router-link>
                    <router-link
                        v-else
                        :to="'projects/' + category.id" class="section__title__btn mt-3">Discover more</router-link>
                  </div>
                </div>
                <div class="section__sub-2 col-12 col-md-9">
                  <div class="section__content mobile-hidden">
                    <div class="designs">
                      <div v-if="lg_screen.slide_1" class="design-item animate__animated animate__slideInRight">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo1">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_1 || lg_screen.slide_2" class="design-item animate__animated animate__slideInRight">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo2">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_1 || lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInRight">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo3">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_2 || lg_screen.slide_3" class="design-item animate__animated animate__slideInRight">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo4">
                        </div>
                      </div>
                      <div v-if="lg_screen.slide_3" class="design-item animate__animated animate__slideInRight">
                        <div class="design-item__box-grad"></div>
                        <div class="design-item__content pb-4">
                          <img class="design-item__content__img" :src="category.photo5">
                        </div>
                      </div>
                    </div>
                    <div class="owl-dots">
                      <div @click="displaySlider('next')" class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                      <div class="owl-dots__slide">
                        <div @click="displaySlider('slider_1')" class="owl-dots__slide__item" :class="(lg_screen.slide_1) ? 'active' : ''"></div>
                        <div @click="displaySlider('slider_2')" class="owl-dots__slide__item" :class="(lg_screen.slide_2) ? 'active' : ''"></div>
                        <div @click="displaySlider('slider_3')" class="owl-dots__slide__item" :class="(lg_screen.slide_3) ? 'active' : ''"></div>
                      </div>
                      <div @click="displaySlider('last')" class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="space"></div>
    <ProjectMessage></ProjectMessage>
    <div class="space"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectMessage from "@/components/ProjectMessage";
import SocialMedia from "@/components/ui/SocialMedia";
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    Spinner,
    SocialMedia,
    ProjectMessage,
    Footer, Navbar
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      items: '',
      categories_is_loading: false,
      sub_categories: '',
      active_all: true,
      active_index: -1,
      lg_screen: {
        slide_1: true,
        slide_2: false,
        slide_3: false,
      }
    }
  },
  created() {
    window.scrollTo(0,0);
    this.loadMainCategories();
    this.loadAllSubCategories();
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async loadMainCategories() {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/user/get-main-categories", requestOptions)
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
      this.categories_is_loading = true;
      this.active_all = true;

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
              this.sub_categories = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.categories_is_loading = false;
    },
    async loadAllSubCategoriesById(id, index) {
      this.categories_is_loading = true;
      this.active_all = false;
      this.active_index = index;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/user/get-sub-categories/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.sub_categories = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.categories_is_loading = false;
    },

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";
@import "../../assets/css/composition";
@import "../../assets/css/figure";

.projects-view {
  padding: 0;
}

.space {
  margin-bottom: 10rem;
}

.col-12, .col-md-6 {
  padding: 0 1%;
}

.intro {
  margin-top: 4rem !important;
  position: relative;
  background-color: $color-primary;
  min-height: 30rem;

  &__video {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    transition: opacity 0.4s cubic-bezier(0.55, 0.17, 0.05, 0.85);
    object-fit: cover;
    object-position: 25% 10%;
  }

  &__content {
    color: $color-white;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 4rem 3.5rem;

    & .desc {
      width: 50%;
    }
  }
}

.main-projects {
  margin: 3rem 5rem;

  & .btn:hover {
    color: $color-white;
  }

  &__project {
    padding: 2rem 5%;
    margin-bottom: 3rem;

    &__desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;

      &__logo img {
        width: 6rem;
      }
    }

    &__img img {
      width: 100%;
    }
  }

}

.filter {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  & * {
    transition: 0s;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $color-primary;
    border-radius: 1rem;

    &__item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: $color-primary;
      border-right: 1px solid $color-primary;
      padding: .5rem 1.5rem;
      height: 100% !important;


      &:hover,
      &.active,
      &.router-link-active {
        color: $color-white;
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
      }

      &:first-child {
        border: none;
        border-radius: 0;
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      &:last-child {
        border-radius: 0;
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
      }
    }
  }
}


.en .filter__container__item {
  border-left: 1px solid $color-primary;

  &:first-child {
    border: none;
    border-radius: 0;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  &:last-child {
    border-radius: 0;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }

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

@include respond(tab-port) {
  .title {
    font-size: 2.5rem;
  }

  .title-2 {
    font-size: 2rem;
  }

  .title-3 {
    font-size: 1.5rem;
  }

  .intro__content .desc {
    width: 100%;
  }

  .categories__filter__item {
    font-size: 1rem;
    padding: .5rem;
    margin: 0 .5rem;
  }

  .categories,
  .main-projects__project {
    padding: 1rem 0;
  }

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