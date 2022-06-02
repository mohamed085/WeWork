<template>
  <div id="app">
    <div class="social-media">
      <div class="social-media__initi-grad-bg"></div>
      <div class="social-media__content">
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-youtube"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-snapchat"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div class="hidden" :class="{scroll: scrollPosition > 200}">
      <button @click="upToTop" class="arrow-btn"><i class="fas fa-chevron-up"></i></button>
    </div>

    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created() {
    this.$store.dispatch('main/tryToGetLang');
    console.log("App -- Lang = " , this.$store.getters["main/getLang"])
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    upToTop() {
      window.scrollTo(0,0)
    },
  }
}
</script>

<style lang="scss">
@import 'animate.css';
@import "assets/css/variables";
@import "assets/css/mixins";

@font-face {
  font-family: 'We work Regular';
  src: url(assets/fonts/SWCC-2-Regular.ttf);
}

@font-face {
  font-family: 'We work Medium';
  src: url(assets/fonts/SWCC-3-Medium.ttf);
}

@font-face {
  font-family: 'We work Bold';
  src: url(assets/fonts/SWCC-4-Bold.ttf);
}

@font-face {
  font-family: 'The Sans Arabic';
  src: url(assets/fonts/THESANSARABIC-BOLD.ttf);
}


#app {
  box-sizing: border-box;
  font-family: "We work Bold";

  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) { // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) { // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  transition: .4s all;
}

::selection {
  background-color: $color-primary;
  color: $color-white;
}

.ar {
  text-align: right;
  direction: rtl;
}

.en {
  text-align: left;
  direction: ltr;
}

.hidden {
  display: none;
}


.space {
  height: 5rem;
}


.break {
  background-color: $color-primary;
  width: 5rem;
  height: 6px;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.title-2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.title-3 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.title-4 {
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: $color-grey-dark-2;
}

.desc {
  font-size: 1rem;
  margin: .5rem 1rem;
  font-weight: 500;
  width: 60%;
}

.btn {
  background-color: $color-white;
  color: $color-primary;
  border: 1px solid $color-white;
  text-decoration: none;
  padding: .6rem 1rem;
  border-radius: .5rem;
  font-size: 1rem;

  &:hover {
    background-color: $color-primary;
    color: $color-white;
    border: 1px solid $color-primary;
  }
}

.btn-bg {
  background-color: $color-primary !important;
  color: $color-white !important;
  border: 1px solid $color-primary !important;

  &:hover {
    background-color: $color-white !important;
    color: $color-primary !important;
    border: 1px solid $color-primary !important;
  }
}

.scroll {
  display: block;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 10000;
}

.arrow-btn {
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);

  &:hover {
    transform: scale(1.2);
  }

  & i {
    color: $color-white;
    font-size: 30px;
  }
}

.social-media {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0, -35%);
  z-index: 1000;
  height: auto;
  width: auto;
  transition: 0.3s;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .5rem .5rem .8rem;
    background: white;
    border-radius: 0 .8rem 4rem 0 !important;
    background-position-x: 0 !important;
    background-size: 100% !important;
    box-shadow: 0 0 2rem #0000000d;
    position: relative;
    word-wrap: break-word;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: .5rem;
      color: $color-white;
      width: 2rem;
      height: 2rem;
      background: $color-grey-dark-2;
      border-radius: 10rem !important;
      text-decoration: none;
      text-decoration: none;

      &:hover {
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
        text-decoration: none;
      }
    }

    & i {
      font-size: 1.1rem;
      color: $color-white;
      transition: 0.4s all;
    }
  }

  &__initi-grad-bg {
    z-index: -1;
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
    display: block;
    height: 100%;
    position: absolute;
    top: .5rem;
    bottom: 0;
    border-radius: .5rem !important;
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
    font-size: 1.6rem;
  }

  .title-4 {
    font-size: 1.4rem;
  }

  .desc {
    padding: 0 5%;
    font-size: .8rem;
    width: 100%;
  }
}
</style>
