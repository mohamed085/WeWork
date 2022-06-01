<template>
  <div class="ar" v-if="getLang === 'ar'">
    <div class="footer">
      <div class="row">
        <div class="col-12 col-md-3 footer__site-map footer__site-map-1">
          <div class="footer__title">خريطة الموقع</div>
          <div class="break"></div>
          <div class="footer__items">
            <router-link to="/" class="footer__items__item">الصفحة الرئيسية</router-link>
            <router-link to="/" class="footer__items__item">الخدمات</router-link>
            <router-link to="/" class="footer__items__item">التسليم</router-link>
            <router-link to="/" class="footer__items__item">المشروعات</router-link>
            <router-link to="/" class="footer__items__item">العملاء</router-link>
            <router-link to="/" class="footer__items__item">الفريق</router-link>
            <router-link to="/" class="footer__items__item">تواصل بنا</router-link>
            <router-link to="/" class="footer__items__item">انضم الينا</router-link>
            <router-link to="/" class="footer__items__item">معلومات عنا</router-link>
            <router-link to="/" class="footer__items__item">المقالات</router-link>
          </div>
        </div>

        <div class="col-12 col-md-3 footer__site-map">
          <div class="footer__title">معلومات عنا</div>
          <div class="break"></div>
          <div class="footer__desc mt-4">نحن نعمل مؤسسة سعودية تأسست عام 2019.</div>
          <div class="footer__desc">بهدف توفير تجربة متميزة لعملائنا ، سوف ترضي رغبات عملائنا ،تماشياً مع رؤية 2030 ، كل ما تحتاجه في مكان واحد بجودة عالية.</div>
        </div>

        <div class="col-12 col-md-3 footer__site-map">
          <div class="footer__title">معلومات عنا</div>
          <div class="break"></div>
          <div class="footer__desc mt-4">نحن نعمل مؤسسة سعودية تأسست عام 2019.</div>
          <div class="footer__desc">بهدف توفير تجربة متميزة لعملائنا ، سوف ترضي رغبات عملائنا ،تماشياً مع رؤية 2030 ، كل ما تحتاجه في مكان واحد بجودة عالية.</div>
        </div>

        <div class="col-12 col-md-3 footer__contact">
          <div class="footer__title">اتصل</div>
          <div class="break"></div>
          <div class="footer__contact__details">
            <p><span>الهاتف: </span>+966 50 352 2883</p>
            <p><span>البريد الالكتروني: </span>info@we-work.pro</p>
          </div>
          <router-link to="/contact-us" class="footer__contact__btn">استخدم نموذج الاتصال <i class="fas fa-arrow-left"></i> </router-link>
        </div>
      </div>
    </div>

    <div class="footer-2">
      <img class="footer-2__logo-site" src="../../assets/img/logo-white-2.png">
      <span class="footer-2__desc">الموقع موثق من قبل منصة <a href="#">معروف</a> التابعة لوزارة التجارة السعودية</span>
      <img class="footer-2__logo-site-2" src="../../assets/img/maroof.png">
      <span class="footer-2__desc">سجل تجاري رقم 4030383581</span>
      <span class="footer-2__desc">جميع الحقوق محفوظة لمؤسسة <router-link to="/">نحن نعمل</router-link>  @٢٠٢٢</span>
    </div>
  </div>

  <div class="en" v-else-if="getLang === 'en'">
    <div class="footer">
      <div class="row">
        <div class="col-12 col-md-3 footer__site-map footer__site-map-1">
          <div class="footer__title">Site map</div>
          <div class="break"></div>
          <div class="footer__items">
            <router-link to="/" class="footer__items__item">Home</router-link>
            <router-link to="/" class="footer__items__item">Service</router-link>
            <router-link to="/" class="footer__items__item">Deliver</router-link>
            <router-link to="/" class="footer__items__item">Projects</router-link>
            <router-link to="/" class="footer__items__item">Clients</router-link>
            <router-link to="/" class="footer__items__item">Team</router-link>
            <router-link to="/" class="footer__items__item">Contact us</router-link>
            <router-link to="/" class="footer__items__item">Join us</router-link>
            <router-link to="/" class="footer__items__item">About us</router-link>
            <router-link to="/" class="footer__items__item">Blogs</router-link>
          </div>
        </div>

        <div class="col-12 col-md-3 footer__site-map">
          <div class="footer__title">About us</div>
          <div class="break"></div>
          <div class="footer__desc mt-4">We work is a Saudi institution Created in 2019.</div>
          <div class="footer__desc">Aiming to provide a premium experience to our customers, it will satisfy our customers' desires , In line with Vision 2030, Everything you need in one place with high quality.</div>
        </div>

        <div class="col-12 col-md-3 footer__site-map">
          <div class="footer__title">About us</div>
          <div class="break"></div>
          <div class="footer__desc mt-4">We work is a Saudi institution Created in 2019.</div>
          <div class="footer__desc">Aiming to provide a premium experience to our customers, it will satisfy our customers' desires , In line with Vision 2030, Everything you need in one place with high quality.</div>
        </div>

        <div class="col-12 col-md-3 footer__contact">
          <div class="footer__title">Contact</div>
          <div class="break"></div>
          <div class="footer__contact__details">
            <p><span>Phone: </span>+966 50 352 2883</p>
            <p><span>Email: </span>info@we-work.pro</p>
          </div>
          <router-link to="/contact-us" class="footer__contact__btn">Use contact form <i class="fas fa-arrow-right"></i> </router-link>
        </div>
      </div>
    </div>

    <div class="footer-2">
      <img class="footer-2__logo-site" src="../../assets/img/logo-white-2.png">
      <span class="footer-2__desc">The site is authenticated by <a href="#">Marouf </a> platform of the Saudi Ministry of Commerce
</span>
      <img class="footer-2__logo-site-2" src="../../assets/img/maroof.png">
      <span class="footer-2__desc">Commercial Registration No. 4030383581</span>
      <span class="footer-2__desc">All rights reserved to the Foundation <router-link to="/">We Work</router-link>  @2022</span>
    </div>
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
  padding: 5rem 5% 3rem;
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

  &__desc{
    font-size: .8rem;
    font-family: "The Sans Arabic";
    font-weight: 400;
    padding: 0 1rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: "The Sans Arabic";
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    &__item {
      text-decoration: none;
      color: $color-white;
      font-size: 1rem;
      font-family: "The Sans Arabic";
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
        font-family: "The Sans Arabic";
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
      font-family: "The Sans Arabic";
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

.footer-2 {
  background-color: $color-primary;
  color: $color-white;
  padding: 2rem 5% 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__logo-site {
    width: 30%;
  }

  &__logo-site-2 {
    width: 20%;
  }

  &__desc {
    font-size: 1rem;
    font-family: "The Sans Arabic";
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
        background-color: $color-primary-dark-1;
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