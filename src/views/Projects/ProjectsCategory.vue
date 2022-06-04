<template>
  <div>
    <Navbar></Navbar>

    <div class="mobile-apps ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img src="../../assets/img/website-banner.webp">
        </div>
        <div class="intro__title">
          <div class="title-3">مواقع الويب</div>
          <div class="title-2">4 سنوات من </div>
          <div class="title mb-2">صناعة تطبيقات مواقع الويب</div>
          <div class="break mb-4"></div>
          <div class="desc">
            نحن مزيج يعمل بشكل مثالي من مزود ذي خبرة ، مع ما يقرب من 1000 متخصص على متن الطائرة ، وبدء تشغيل متحمس.
          </div>
          <div class="desc">
            يساعدنا هذا ، جنبًا إلى جنب مع طريقتنا الفريدة في العمل مع العملاء ، في بناء شراكات طويلة الأمد وإنشاء حلول برمجية مذهلة تلبي احتياجات الأعمال والمستخدمين.
          </div>
        </div>
      </div>

      <div class="main row">
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
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
          <div class="title-3">Websites</div>
          <div class="title-2">4 years of</div>
          <div class="title mb-2">Create Websites applications</div>
          <div class="break mb-4"></div>
          <div class="desc">
            We are a perfectly working hybrid of an experienced provider, with almost 1000 specialists on board, and an enthusiastic start-up.
          </div>
          <div class="desc">
            This, together with our unique way of working with clients, helps us build long-lasting partnerships and create amazing software solutions that satisfy business’ and users’ needs.
          </div>
        </div>
      </div>

      <div class="main row">
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
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

export default {
  name: "ProjectsCategory",
  components: {
    ProjectMessage,
    Footer,
    Navbar
  },
  created() {
    window.scrollTo(0,0)
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/typography";
@import "../../assets/css/mixins";

.mobile-apps {
  margin: 4rem 0 10rem;
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