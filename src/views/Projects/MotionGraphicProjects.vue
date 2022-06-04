<template>
  <div>
    <Navbar></Navbar>

    <div class="mobile-apps ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img src="../../assets/img/website-banner.webp">
        </div>
        <div class="intro__title">
          <div class="title-3">الرسوم المتحركة</div>
          <div class="title-2">4 سنوات من </div>
          <div class="title mb-2">صناعة تطبيقات الرسوم المتحركة</div>
          <div class="break mb-4"></div>
          <div class="desc">
            نحن مزيج يعمل بشكل مثالي من مزود ذي خبرة ، مع ما يقرب من 1000 متخصص على متن الطائرة ، وبدء تشغيل متحمس.
          </div>
          <div class="desc">
            يساعدنا هذا ، جنبًا إلى جنب مع طريقتنا الفريدة في العمل مع العملاء ، في بناء شراكات طويلة الأمد وإنشاء حلول برمجية مذهلة تلبي احتياجات الأعمال والمستخدمين.
          </div>
        </div>
      </div>

      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>


    <div class="mobile-apps en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__img">
          <img src="../../assets/img/website-banner.webp">
        </div>
        <div class="intro__title">
          <div class="title-3">Motion graphic</div>
          <div class="title-2">4 years of</div>
          <div class="title mb-2">Create motion graphic videos</div>
          <div class="break mb-4"></div>
          <div class="desc">
            We are a perfectly working hybrid of an experienced provider, with almost 1000 specialists on board, and an enthusiastic start-up.
          </div>
          <div class="desc">
            This, together with our unique way of working with clients, helps us build long-lasting partnerships and create amazing software solutions that satisfy business’ and users’ needs.
          </div>
        </div>
      </div>


      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>

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
  name: "MotionGraphicProjects",
  components: {
    ProjectMessage,
    Footer,
    Navbar
  },
  created() {
    window.scrollTo(0,0)
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

.mobile-apps {
  margin: 4rem 0 10rem;
}

.intro {
  position: relative;
  padding: 2rem 4rem 0;

  &__img {
    display: block;
    position: absolute;
    top: 2%;
    left: 0;
    right: 50%;
    bottom: 0;
    z-index: -1;

    & img {
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    padding: 4rem 0;
    z-index: 1;
    width: 50%;
    margin-bottom: 2rem;
  }
}

.en .intro__img {
  top: 2%;
  left: 50%;
  right: 0;
  bottom: 0;
}

.motion-graphic__items {
  padding: 70px 5%;

  & .col-12, .col-md-4 {
    margin-top: 40px;
  }

  &__item {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px !important;
    box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "The Sans Arabic";

    &__title {
      padding: 0 3%;
      margin: 15px 0;
      color: $color-primary-dark-1;
      font-weight: 700 !important;
      font-size: 24px;
      line-height: 1.4;
    }

    &__desc {
      padding: 0 3%;
      text-align: justify;
      margin-bottom: 15px;
      font-size: 14px;
      color: #656565;
      font-weight: 400;
    }
  }
}

@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }

  .intro__img {
    width: 100%;
    opacity: .3;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
  }

  .intro__title {
    width: 100%;
  }
}
</style>