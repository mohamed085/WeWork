<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="team ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-2">الفريق</div>
          <div class="title">تعرف علي فريق نحن نعمل المميز</div>
          <div class="break"></div>
          <div class="desc">
            في غضون 22 عامًا من خبرتنا ، عملنا مع أكثر من 200 عميل عالمي لمساعدتهم على حل مشاكل أعمالهم وتحويل مؤسساتهم رقميًا.
          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../assets/img/team.webm" type="video/webm">
        </video>
      </div>

      <main class="team-member">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>

    <div class="team en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-3">Team</div>
          <div class="title">Get to know the We Work team</div>
          <div class="break"></div>
          <div class="desc">
            Within 22 years of our experience, we have worked for over 200 global clients helping them solve their business problems and digitally transform their organisation.
          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../assets/img/team.webm" type="video/webm">
        </video>
      </div>

      <main class="team-member">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>

    <div class="space"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Team",
  components: {
    SocialMedia,
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
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";

.team {
  padding: 0;
}

.col-12, .col-md-4 {
  padding: 0;
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

.team-member {
  padding: 2rem 4%;
}

.employee {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 7px 2px rgb(0 0 0 / 20%);
  margin: 2rem 1rem;

  &__img {
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;

    & img {
      width: 100%;
      padding: 5px;
      border-radius: 10px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: #00a3ff;
    }

    &__sub-title {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
      color: #003057;
      margin: 0;
    }

    &__name {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #003057;
      margin: 10px 0 15px;
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

  .team-member {
    padding: 2rem 1%;
  }

}
</style>