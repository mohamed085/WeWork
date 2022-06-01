<template>
  <div>
    <Navbar></Navbar>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="contact row">
        <div class="col-12 col-md-6 contact__desc">
          <div class="title-3">تواصل</div>
          <div class="title">اكتب لنا</div>
          <div class="break"></div>
          <div class="desc">هل لديك فكرة عن حل تكنولوجيا المعلومات أو تبحث عن الإلهام؟</div>
          <div class="desc">اتصل بنا ومعا يمكننا إنشاء الحل الذي تحتاجه.</div>
        </div>
        <div class="col-12 col-md-6 contact__form">
          <div class="title-3">رسالة إلى: نحن نعمل</div>
          <div class="break"></div>
        </div>
      </div>
    </div>

    <div class="en" v-if="getLang === 'en'">
      <div class="contact row">
        <div class="col-12 col-md-6 contact__desc">
          <div class="title-3">Contact</div>
          <div class="title">Write to us</div>
          <div class="break"></div>
          <div class="desc">Have an idea for an IT solution or looking for inspiration?</div>
          <div class="desc">Contact us and together we can create the solution you need.</div>
        </div>
        <div class="col-12 col-md-6 contact__form">
          <div class="title-3">Message to: We Work</div>
          <div class="break"></div>
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
  name: "Contact",
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
.contact {
  margin-top: 4rem;
}

.space {
  margin-bottom: 12rem;
}

.mobile {
  display: none;
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
  font-family: "The Sans Arabic";
}

.title-2 {
  font-size: 2.5rem;
  font-weight: 500;
  font-family: "The Sans Arabic";
}

.title-3 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "The Sans Arabic";
}

.desc {
  font-size: 1rem;
  margin: 1rem 1.5rem;
  font-weight: 500 ;
  font-family: "The Sans Arabic";
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
  font-family: "The Sans Arabic";

  &:hover {
    background-color: $color-primary;
    color: $color-white;
    border: 1px solid $color-primary;
  }
}

.contact {

  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 5%;
  }

  &__form {
    padding: 2rem 2%;
    color: $color-white;
    background-color: $color-primary-dark-1;
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

  .desc {
    width: 100%;
  }

  .contact {

    &__desc {
      padding: 2rem 2%;
    }
  }
}
</style>