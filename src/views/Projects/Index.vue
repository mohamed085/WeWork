<template>
  <div>
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

      <div class="categories">
        <div class="categories__filter">
          <router-link class="categories__filter__item" exact to="/projects">الكل</router-link>
          <router-link class="categories__filter__item" to="/projects/software">البرمجيات</router-link>
          <router-link class="categories__filter__item" to="/projects/decoration">الزخرفة</router-link>
          <router-link class="categories__filter__item" to="/projects/marketing">التسويق</router-link>
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

      <div class="categories">
        <div class="title text-center">Discover all projects</div>
        <div class="categories__filter">
          <router-link class="categories__filter__item" exact to="/projects">All</router-link>
          <router-link class="categories__filter__item" to="/projects/software">Software </router-link>
          <router-link class="categories__filter__item" to="/projects/decoration">Decoration</router-link>
          <router-link class="categories__filter__item" to="/projects/marketing">Marketing</router-link>
        </div>
      </div>
    </div>

    <router-view />

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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    ProjectMessage,
    Footer, Navbar
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

.categories {
  padding: 1rem 5%;
  display: flex;
  justify-content: center;

  &__filter {
    display: flex;
    justify-content: center;
    border: 1px solid $color-primary;
    border-radius: 1rem;
    padding: 0 !important;

    &__item {
      text-decoration: none;
      font-size: 1.4rem;
      padding: .5rem 1rem;
      font-weight: 500;
      color: $color-primary;
      border-right: 1px solid $color-primary;

      &:first-child {
        border: none;
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      &:last-child {
        border: none;
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
      }

      &:hover,
      &.active,
      &.router-link-active {
        color: $color-white;
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
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
}
</style>