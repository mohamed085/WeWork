<template>
  <div>
    <Navbar></Navbar>

    <div class="deliver-view ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img src="../assets/img/deliver-view-en.jpg">
        </div>
        <div class="intro__title">
          <div class="title-3">كيف تقدم نحن نعمل</div>
          <div class="title-2">4 سنوات من </div>
          <div class="title mb-2">المعرفة والطاقة الإيجابية</div>
          <div class="break mb-4"></div>
          <div class="desc">
            نحن مزيج يعمل بشكل مثالي من مزود ذي خبرة ، مع ما يقرب من 1000 متخصص على متن الطائرة ، وبدء تشغيل متحمس.
          </div>
          <div class="desc">
            يساعدنا هذا ، جنبًا إلى جنب مع طريقتنا الفريدة في العمل مع العملاء ، في بناء شراكات طويلة الأمد وإنشاء حلول برمجية مذهلة تلبي احتياجات الأعمال والمستخدمين.
          </div>
          <div class="intro__how">
            <span class="title-2">كيف نفعلها؟</span>
            <span class="intro__how__1">اقرأ أدناه</span>
          </div>
        </div>
      </div>

    </div>

    <div class="deliver-view en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__img">
          <img src="../assets/img/deliver-view.jpg">
        </div>
        <div class="intro__title">
          <div class="title-3">How We Work deliver</div>
          <div class="title-2">4 years of </div>
          <div class="title mb-2">know how & positive energy</div>
          <div class="break mb-4"></div>
          <div class="desc">
            We are a perfectly working hybrid of an experienced provider, with almost 1000 specialists on board, and an enthusiastic start-up.
          </div>
          <div class="desc">
            This, together with our unique way of working with clients, helps us build long-lasting partnerships and create amazing software solutions that satisfy business’ and users’ needs.
          </div>
          <div class="intro__how">
            <span class="title-2">How we do it?</span>
            <span class="intro__how__1">Read below</span>
          </div>
        </div>
      </div>
    </div>

    <div class="space"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Deliver",
  components: {
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

.deliver-view {
  margin: 4rem 0 10rem;
}


.intro {
  position: relative;
  padding: 2rem 4rem 0;

  &__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    z-index: 1;
    width: 41.66667%;
    margin-bottom: 2rem;
  }

  &__how {
    margin: 15rem 0 0;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    &__1 {
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-primary;
    }
  }

}

.en .intro__img {
  top: 0;
  right: 0;
  left: auto;
}


@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }

  .intro__img {
    width: 100%;
    opacity: .3;
  }

  .intro__title {
    width: 100%;
  }
  .intro__how {
    margin: 4rem 0 0;
  }
}


</style>