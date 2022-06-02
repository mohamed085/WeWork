<template>
  <div>
    <Navbar></Navbar>

    <div class="ar about" v-if="getLang === 'ar'">
      <div class="intro">
        <div v-if="intro_1">
          <div class="intro__img">
            <img src="../assets/img/about-us-1.jpg">
          </div>
          <div class="intro__title">
            <div class="title">نحن خبراء تطوير البرمجيات</div>
            <div class="break mb-4"></div>
            <div class="desc">
              الذين يستفيدون من التكنولوجيا ويطرحون الأسئلة الصحيحة ليقدموا لك نتائج ملموسة في شكل برامج موثوقة وعالية الجودة ومستدامة يتم تسليمها في الوقت المحدد وفي المرة الأولى الصحيحة.
            </div>
          </div>
        </div>
        <div v-if="intro_2">
          <div class="intro__img">
            <img src="../assets/img/about-us-2.jpg">
          </div>
          <div class="intro__title">
            <div class="title">نبني شراكات طويلة الأمد</div>
            <div class="break mb-4"></div>
            <div class="desc">
              من خلال الصدق والشفافية والتواصل المفتوح. نحن نتمتع بالثقة في التعامل مع مشاكل الأعمال والتكنولوجيا لعملائنا ، مما يسعدهم بفريقنا الموهوب والرشيق والقابل للتكيف.
            </div>
          </div>
        </div>
        <div v-if="intro_3">
          <div class="intro__img">
            <img src="../assets/img/about-us-3.jpg">
          </div>
          <div class="intro__title">
            <div class="title">العمل معنا يشبه وجود شريك في الجوار</div>
            <div class="break mb-4"></div>
            <div class="desc">
              يخلق موقفنا الذي يمكننا فعله وجونا الإيجابي ونهجنا النشط ثقافة فريدة تعزز الانفتاح الذهني وتؤدي إلى النجاح.
            </div>
          </div>
        </div>

        <div class="intro__owl-dots">
          <div @click="displayIntro('last')" class="intro__owl-dots__next"><i class="fas fa-angle-right"></i></div>
          <div class="intro__owl-dots__slide">
            <div @click="displayIntro('intro_1')" :class="{active: intro_1}" class="intro__owl-dots__slide__item"></div>
            <div @click="displayIntro('intro_2')" :class="{active: intro_2}" class="intro__owl-dots__slide__item"></div>
            <div @click="displayIntro('intro_3')" :class="{active: intro_3}" class="intro__owl-dots__slide__item"></div>
          </div>
          <div @click="displayIntro('next')"  class="intro__owl-dots__previous"><i class="fas fa-angle-left"></i></div>
        </div>
      </div>
    </div>


    <div class="en about" v-if="getLang === 'en'">
      <div class="intro">
        <div v-if="intro_1">
          <div class="intro__img">
            <img src="../assets/img/about-us-1.jpg">
          </div>
          <div class="intro__title">
            <div class="title">We are software development experts</div>
            <div class="break mb-4"></div>
            <div class="desc">
              who leverage technology and ask the right questions to bring you tangible results in the form of reliable, high quality, sustainable software that is delivered on time, right first time.
            </div>
          </div>
        </div>
        <div v-if="intro_2">
          <div class="intro__img">
            <img src="../assets/img/about-us-2.jpg">
          </div>
          <div class="intro__title">
            <div class="title">We build long-lasting partnerships</div>
            <div class="break mb-4"></div>
            <div class="desc">
              through honesty, transparency and open communication. We are trusted with our clients’ business and technology problems, delighting them with our talented, agile and adaptable team.
            </div>
          </div>
        </div>
        <div v-if="intro_3">
          <div class="intro__img">
            <img src="../assets/img/about-us-3.jpg">
          </div>
          <div class="intro__title">
            <div class="title">Working with us is like having a partner next door</div>
            <div class="break mb-4"></div>
            <div class="desc">
              Our can-do attitude, positive atmosphere and energetic approach create a unique culture that fosters open-mindedness and drive to succeed.
            </div>
          </div>
        </div>
        <div class="intro__owl-dots">
          <div @click="displayIntro('last')" class="intro__owl-dots__next"><i class="fas fa-angle-left"></i></div>
          <div class="intro__owl-dots__slide">
            <div @click="displayIntro('intro_1')" :class="{active: intro_1}" class="intro__owl-dots__slide__item"></div>
            <div @click="displayIntro('intro_2')" :class="{active: intro_2}" class="intro__owl-dots__slide__item"></div>
            <div @click="displayIntro('intro_3')" :class="{active: intro_3}" class="intro__owl-dots__slide__item"></div>
          </div>
          <div @click="displayIntro('next')"  class="intro__owl-dots__previous"><i class="fas fa-angle-right"></i></div>
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
  name: "About",
  components: {
    Footer, Navbar
  },
  data() {
    return {
      intro_1: true,
      intro_2: false,
      intro_3: false,
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    displayIntro(intro) {
      if (intro == 'intro_1') {
        this.intro_3 = false
        this.intro_2 = false
        this.intro_1 = true
      }
      else if (intro == 'intro_2') {
        this.intro_3 = false
        this.intro_1 = false
        this.intro_2 = true
      }
      else if (intro == 'intro_3') {
        this.intro_1 = false
        this.intro_2 = false
        this.intro_3 = true
      }
      else if (intro == 'next') {
        if (this.intro_1) {
          this.intro_3 = false
          this.intro_1 = false
          this.intro_2 = true
        }
        else if (this.intro_2) {
          this.intro_2 = false
          this.intro_1 = false
          this.intro_3 = true
        }
        else if (this.intro_3) {
          this.intro_2 = false
          this.intro_3 = false
          this.intro_1 = true
        }
      }
      else if (intro == 'last') {
        if (this.intro_1) {
          this.intro_1 = false
          this.intro_2 = false
          this.intro_3 = true
        }
        else if (this.intro_2) {
          this.intro_2 = false
          this.intro_3 = false
          this.intro_1 = true
        }
        else if (this.intro_3) {
          this.intro_3 = false
          this.intro_1 = false
          this.intro_2 = true
        }

      }
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";

.about {
  margin-top: 4rem;
}

.desc {
  width: 90%;
}

.intro {
  position: relative;
  padding: 2rem 4rem 0;

  &__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 45%;
    z-index: -1;

    & img {
      height: 100%;
      width: 100%;
    }
  }

  &__title {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    width: 45%;
    margin-bottom: 2rem;
    height: 20rem;
  }

  &__owl-dots {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: -5rem;

    &__next,
    &__previous {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      width: 3rem;
      height: 3rem;
      background-color: $color-white;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }

      i {
        font-size: 3rem;
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

      &__item {
        width: 4rem;
        height: .2rem;
        background-color: $color-primary-dark-1;

        &.active {
          height: .7rem;
          border-radius: .8rem;
        }
      }
    }

  }
}

.intro .title,
.intro .break {
  animation: moveInLeft 1s ease-out;
}

.intro .desc {
  animation: moveInRight 1s ease-out;
}

.en .intro__img {
  top: 0;
  left: 45%;
  right: 0;
}

@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }

  .intro__img {
    width: 100%;
    right: auto;
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