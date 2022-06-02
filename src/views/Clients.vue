<template>
  <div>
    <Navbar></Navbar>

    <div class="clients ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="title">عملاءنا</div>
        <div class="title-2">
          استكشف دراسات حالة تطوير البرمجيات من الشركات التي تواجه تحديات مماثلة
        </div>
        <div class="desc">
          طلبوا من نحن نعمل ترقية منتجهم الرقمي وتحديد اتجاه لتطوير البرمجيات المرنة. 98٪ من قادة التكنولوجيا يوصوننا. معظم البقاء أكثر من 3 سنوات.
        </div>
      </div>
    </div>

    <div class="clients en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="title">Our Clients</div>
        <div class="title-2">
          Explore software development case studies from companies with similar challenges
        </div>
        <div class="desc">
          They asked The Software House to upgrade their digital product and set a direction for resilient software development. 98% of tech leaders recommends us. Most stay over 3 years.
        </div>
      </div>
    </div>

    <div class="clients-items row">
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/ع.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/egada-01.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/ui.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/دوناتيلو-01.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/ض.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/نورا-01.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/ya-form.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/yy.png">
      </div>
      <div class="clients-items__item col-6 col-md-3">
        <img src="../assets/img/clients/e.png">
      </div>

    </div>

    <Footer></Footer>
  </div>

</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clients",
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

.clients {
  margin: 4rem 0 0;
}

.intro {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .title-2,
  & .desc {
    width: 55%;
    text-align: center;
  }
}

.clients-items {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;

    & img {
      height: 150px;
      max-width: 100%;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}



@include respond(tab-port) {
  .intro .title-2,
  .intro .desc {
    width: 92%;
  }
}
</style>