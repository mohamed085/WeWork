<template>
  <div class="ar" v-if="getLang === 'ar'">
  </div>

  <div class="en" v-else-if="getLang === 'en'">

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
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

.break {
  background-color: $color-primary;
  width: 60px;
  height: 6px;
  margin: 0 .5rem;
}

.footer {
  background-color: $color-primary-dark-1;
  color: $color-white;
  padding: 2rem 5% 3rem;
  margin-top: 50px;
  position: relative;

  & .col-md-4,
  & .col-6 {
    padding: 1rem;
  }

  &__logo {

    & img {
      max-width: 100%;
    }
  }

  &__desc {
    font-size: .8rem;
    font-weight: 400;
    padding: 0 1rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    &__item {
      text-decoration: none;
      color: $color-white;
      font-size: 1rem;
      font-weight: 500;
      padding: .3rem 0;

      &:hover {
        color: $color-primary;
      }
    }
  }
  
  &__contact {
    position: absolute;
    padding: 2rem 1.5rem 4rem;
    background-color: $color-primary;
    top: -5rem;
    left: 1rem;

    & .break {
      background-color: $color-primary-dark-1;
    }

    &__details {
      padding: 1rem 1.5rem;

      & p {
        font-size: 1rem;
        font-weight: 400;

        & span {
          font-weight: 500;
        }
      }
    }

    &__btn {
      margin: 2rem 1rem;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      background-color: $color-primary-dark-1;
      color: $color-white;
      padding: 1rem 1.5rem;

      &:hover {
        background-color: $color-white;
        color: $color-primary-dark-1;

      }
    }
  }
}

.en .footer__contact {
  right: 1rem;
  left: auto;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo-site {
    width: 12rem;
  }

  &__logo-site-2 {
    width: 10rem;
  }

  &__desc {
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem 0;
    text-align: center;

    & a {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all .2s;
      color: $color-white;

      &:hover,
      &:active {
        box-shadow: 0 1rem 2rem rgba($color-black, .4);
        transform: rotate(5deg) scale(1.3);
        background-color: $color-primary;
      }
    }
  }
}

@include respond(tab-port) {
  .footer__contact {
    left: 0;
  }

  .footer__site-map {
    margin-top: 20px;
  }

  .footer__site-map-1 {
    margin-top: 160px;
  }

  .footer-2 {
    &__logo-site {
      width: 60%;
    }

    &__logo-site-2 {
      width: 40%;
    }
  }
}
</style>