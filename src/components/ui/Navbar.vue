<template>
  <div class="navbar-component">
    <div class="ar" v-if="getLang === 'ar'">
      <div class="navbar-1">
        <div class="navbar-1__container">
          <span class="navbar-1__welcome-msg">مرحبا بكم في مؤسسة نحن نعمل</span>
          <span class="navbar-1__lang" @click="setLang('en')">
            <span>English</span>
            <img src="../../assets/img/flag-icon.jpg">
          </span>
        </div>
      </div>

      <div class="navbar-2"
          :class="{sticky: scrollPosition > 40}">
          <div class="navbar-2__logo">
            <img src="../../assets/img/blue-logo-2.png">
          </div>
          <div class="navbar-2__content">
            <div class="navbar-2__content__mobile">
              <i v-if="!mobileNav" @click="openMobileNav()" class="fas fa-align-justify"></i>
              <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
            </div>
            <div class="navbar-2__content__bg-screen">
              <div class="navbar-2__content__bg-screen__items">
                <router-link to="/" exact class="navbar-2__content__bg-screen__items__item"><span>الرئيسية</span></router-link>
                <router-link to="/about-us" class="navbar-2__content__bg-screen__items__item"><span>معلومات عنا</span></router-link>
                <router-link to="/services" class="navbar-2__content__bg-screen__items__item"><span>الخدمات</span></router-link>
                <router-link to="/deliver" class="navbar-2__content__bg-screen__items__item"><span>التسليم</span></router-link>
                <router-link to="/projects" class="navbar-2__content__bg-screen__items__item"><span>المشاريع</span></router-link>
                <router-link to="/clients" class="navbar-2__content__bg-screen__items__item"><span>العملاء</span></router-link>
                <router-link to="/team" class="navbar-2__content__bg-screen__items__item"><span>الفريق</span></router-link>
                <router-link to="/contact-us" class="navbar-2__content__bg-screen__items__item"><span>تواصل بنا</span></router-link>
                <router-link to="/join-us" class="navbar-2__content__bg-screen__items__item"><span>انضم الينا</span></router-link>
<!--                <router-link to="/blogs" class="navbar-2__content__bg-screen__items__item"><span>المقالات</span></router-link>-->
              </div>
            </div>
          </div>
      </div>

      <div class="mobile-nav" v-if="mobileNav">
        <div class="mobile-nav__header">
          <img src="../../assets/img/blue-logo-2.png">
          <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
        </div>
        <div class="mobile-nav__items">
          <router-link to="/" exact class="mobile-nav__items__item"><span>الرئيسية</span></router-link>
          <router-link to="/about-us" class="mobile-nav__items__item"><span>معلومات عنا</span></router-link>
          <router-link to="/services" class="mobile-nav__items__item"><span>الخدمات</span></router-link>
          <router-link to="/deliver" class="mobile-nav__items__item"><span>التسليم</span></router-link>
          <router-link to="/projects" class="mobile-nav__items__item"><span>المشاريع</span></router-link>
          <router-link to="/clients" class="mobile-nav__items__item"><span>العملاء</span></router-link>
          <router-link to="/team" class="mobile-nav__items__item"><span>الفريق</span></router-link>
          <router-link to="/contact-us" class="mobile-nav__items__item"><span>تواصل بنا</span></router-link>
          <router-link to="/join-us" class="mobile-nav__items__item"><span>انضم الينا</span></router-link>
<!--          <router-link to="/blogs" class="mobile-nav__items__item"><span>المقالات</span></router-link>-->
        </div>
      </div>

    </div>

    <div class="en" v-if="getLang === 'en'">
      <div class="navbar-1">
        <div class="navbar-1__container">
          <span class="navbar-1__welcome-msg">Welcome to the Foundation We Work</span>
          <span class="navbar-1__lang" @click="setLang('ar')">
            <span>عربي</span>
            <img src="../../assets/img/flag-ar.png">
          </span>
        </div>
      </div>

      <div class="navbar-2"
           :class="{sticky: scrollPosition > 40}">
        <div class="navbar-2__logo">
          <img src="../../assets/img/blue-logo-2.png">
        </div>
        <div class="navbar-2__content">
          <div class="navbar-2__content__mobile">
            <i v-if="!mobileNav" @click="openMobileNav()" class="fas fa-align-justify"></i>
            <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
          </div>
          <div class="navbar-2__content__bg-screen">
            <div class="navbar-2__content__bg-screen__items">
              <router-link to="/" exact class="navbar-2__content__bg-screen__items__item"><span>Home</span></router-link>
              <router-link to="/about-us" class="navbar-2__content__bg-screen__items__item"><span>About us</span></router-link>
              <router-link to="/services" class="navbar-2__content__bg-screen__items__item"><span>Services</span></router-link>
              <router-link to="/deliver" class="navbar-2__content__bg-screen__items__item"><span>Deliver</span></router-link>
              <router-link to="/projects" class="navbar-2__content__bg-screen__items__item"><span>Projects</span></router-link>
              <router-link to="/clients" class="navbar-2__content__bg-screen__items__item"><span>Clients</span></router-link>
              <router-link to="/team" class="navbar-2__content__bg-screen__items__item"><span>Team</span></router-link>
              <router-link to="/contact-us" class="navbar-2__content__bg-screen__items__item"><span>Contact us</span></router-link>
              <router-link to="/join-us" class="navbar-2__content__bg-screen__items__item"><span>Join us</span></router-link>
<!--              <router-link to="/blogs" class="navbar-2__content__bg-screen__items__item"><span>Blogs</span></router-link>-->
            </div>
          </div>
        </div>

      </div>

      <div class="mobile-nav" v-if="mobileNav">
        <div class="mobile-nav__header">
          <img src="../../assets/img/black-logo.png">
          <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
        </div>
        <div class="mobile-nav__items">
          <router-link to="/" exact class="mobile-nav__items__item"><span>Home</span></router-link>
          <router-link to="/about-us" class="mobile-nav__items__item"><span>About us</span></router-link>
          <router-link to="/services" class="mobile-nav__items__item"><span>Services</span></router-link>
          <router-link to="/deliver" class="mobile-nav__items__item"><span>Deliver</span></router-link>
          <router-link to="/projects" class="mobile-nav__items__item"><span>Projects</span></router-link>
          <router-link to="/clients" class="mobile-nav__items__item"><span>Clients</span></router-link>
          <router-link to="/team" class="mobile-nav__items__item"><span>Team</span></router-link>
          <router-link to="/contact-us" class="mobile-nav__items__item"><span>Contact us</span></router-link>
          <router-link to="/join-us" class="mobile-nav__items__item"><span>Join us</span></router-link>
<!--          <router-link to="/blogs" class="mobile-nav__items__item"><span>Blogs</span></router-link>-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      scrollPosition: null,
      mobileNav: false,
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('main/setLang', lang);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    openMobileNav() {
      this.mobileNav = true
    },
    closeMobileNav() {
      this.mobileNav = false
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";

.navbar-1 {
  //background: -webkit-linear-gradient(to left, $color-primary, $color-primary-light); /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to left, $color-primary, $color-primary-light); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-color: $color-primary;
  color: $color-white;
  font-family: "We work Medium";
  z-index: 101;
  font-size: .8rem;

  &__container {
    padding: .6rem 10%;
    display: flex;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  &__welcome-msg {
    display: flex;
    align-items: center;
  }

  &__lang {
    display: flex;
    align-items: center;

    & span {
      cursor: pointer;
      margin: 0 5px;
    }

    & img {
      height: 1.8rem;
      border-radius: 1rem;
    }
  }
}

.navbar-2 {
  position: fixed;
  top: 3rem;
  z-index: 100;
  padding: 0 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__logo {
    padding: .5rem 0;
    width: 25%;

    & img {
      height: 3rem;
      max-width: 100%;
    }
  }

  &__content {

    &__mobile {
      display: none;

      & i {
        cursor: pointer;
        font-size: 2rem;
      }
    }

    &__bg-screen {
      height: 100%;

      &__items {
        display: flex;
        height: 100%;

        &__item {
          padding: 0 .7rem;
          margin: 0 2px;
          font-family: "The Sans Arabic";
          text-decoration: none;
          color: $color-black;
          font-size: 1rem;
          position: relative;
          display: flex;
          align-items: center;

          &::before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: $color-primary;
            transform: translate(-50%,-8px) rotate(45deg);
            transition: .3s cubic-bezier(.55,.17,.05,.85);
            opacity: 0;
            top: -5px;
            left: 50%;
          }

          &:hover,
          &.active,
          &.router-link-active {
            color: $color-primary;
            transition: 0.1s;
            border-bottom: 3px solid $color-primary;
          }

          &:hover::before,
          &.active::before,
          &.router-link-active::before  {
            z-index: 1;
            //opacity: 1;
            transform: translate(-50%,0) rotate(45deg);
          }

        }
      }
    }
  }
}

.sticky {
  position: fixed;
  top: 0;
  opacity: 1;
  background: $color-white;
  z-index: 100;

}

.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  background-color: $color-white;
  width: 60%;
  z-index: 101;
  min-height: 100vh;
  padding: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      width: 60%;
      height: 40px;
    }

    & i {
      font-size: 1.6rem;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    margin: 2rem 0rem 0;

    &__item {
      padding: .5rem 1rem;
      text-decoration: none;
      color: $color-black;
      font-size: 1rem;
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: $color-primary;
        transform: translate(-50%, -8px) rotate(45deg);
        transition: .3s cubic-bezier(.55,.17,.05,.85);
        opacity: 0;
        right: -5px;
      }

      &:hover,
      &.active,
      &.router-link-active {
        color: $color-primary;
        transition: 0.1s;
        border-bottom: 3px solid $color-primary;
      }

      &:hover::before,
      &.active::before,
      &.router-link-active::before  {
        z-index: 1;
        //opacity: 1;
        transform: translate(-50%,0) rotate(45deg);
      }

    }

  }
}

.en .mobile-nav {
  position: fixed;
  top: 0;
  left: 0;

  &__items {
    padding-left: 2rem;

    &__item {

      &::before {

        left: -5px;
      }
    }

  }

}
@include respond(tab-port) {
  .navbar-2__content {
    display: flex;
    align-items: center;
  }

  .navbar-2__content__mobile {
    display: block;
  }

  .navbar-2__content__bg-screen {
    display: none;
  }

  .mobile-nav {
    display: block;
  }
}
</style>