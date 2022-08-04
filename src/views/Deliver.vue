<template>
  <div>
    <SocialMedia></SocialMedia>
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

      <div class="space"></div>
      <div class="space"></div>

      <div class="section step">
        <div class="step-dark"></div>
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">1</div>
              <div class="title-3">تصميم المشروع</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 col-md-3 step__details__title">
              <div class="desc">
                لدينا إجراءات إعداد قوية (مثل قائمة التحقق من بدء المشروع) لضمان البداية السلسة لمشروع التطوير الخاص بك.
              </div>
              <div class="desc mt-4">
                سنستثمر الوقت للتعرف على جميع أصحاب المصلحة من جانبك قبل بدء عملية التطوير. سنعمل كفريق واحد منذ البداية.
              </div>
            </div>
            <div class="col-12 col-md-9 step__details__desc step1-details">
              <div class="title-3">ابدء:</div>
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">الاجتماع مع الشخص المعنى لجمع أكبر قدر من المتطلبات</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">تحديد أهداف و أغراض المشروع</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">تحديد ميزانية المشروع و مدة تنفيذها</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">كتابة تقريرا بمقترحات المختصين لرفع مستوي المشروع</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">5</span>
                    <span class="desc">نحصل على الموافقة للمرحلة القادمة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">2</div>
              <div class="title-3">تنفيذ المشروع</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">تعيين أعضاء الفريق المناسب للتطوير</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">تحليل بيانات المشروع إذا لزم الأمر</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">تطوير خطة المشروع و عرضها على الشخص المعنى</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">نحصل على الموافقة للمتابعة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="step-dark"></div>
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">3</div>
              <div class="title-3">تنفيذ المشروع</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">تنظيم جميع المهام و توزيعها</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">تقرير بشكل دورى للشخص المعنى</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">اجتماع مع الشخص المعنى بعد انتهاء كل مرحلة من العمل لأخذ الموافقة أو الملاحظات</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">الإنتهاء من جميع المراحل و رفعها للتجربة و المراجعه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">4</div>
              <div class="title-3">إنهاء المشروع</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">اخذ الموافقة بإنهاء المشروع من الشخص المعنى بعد المراجعة و التجربة</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">تسليم الشخص المعنى جميع مصادر المشروع</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">اخذ تقييم من العميل</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section deliver row">
        <div class="col-12 col-md-6 deliver__content">
          <div class="title-4">نحن نعمل</div>
          <div class="title-2">تسلم مشروعك</div>
          <div class="break"></div>
          <div class="deliver__content__items">
            <span><i class="fas fa-plus"></i> بسلاسة</span>
            <span><i class="fas fa-plus"></i> في الوقت المحدد</span>
            <span><i class="fas fa-plus"></i> بسرعة</span>
          </div>
        </div>
        <div class="col-12 col-md-6 deliver__img">
          <img src="../assets/img/deliver.jpg">
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

      <div class="space"></div>
      <div class="space"></div>

      <div class="section step">
        <div class="step-dark"></div>
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">1</div>
              <div class="title-3">Project design</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 col-md-3 step__details__title">
              <div class="desc">
                We have robust setup procedures (such as a project initiation checklist) to ensure a smooth start to your development project.
              </div>
              <div class="desc mt-4">
                We will invest the time to get to know all the stakeholders on your side before starting the development process. We will work as a team from the start.
              </div>
            </div>
            <div class="col-12 col-md-9 step__details__desc step1-details">
              <div class="title-3">Start:</div>
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">Meeting with the person concerned to gather as many requirements as possible</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">Defining the goals and objectives of the project</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">Determine the project budget and implementation period</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">Writing a report on the proposals of specialists to raise the level of the project</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">5</span>
                    <span class="desc">We get approval for the next stage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">2</div>
              <div class="title-3">Project execution</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">Appointing the right team members for development</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">Analyze project data if needed</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">Develop a project plan and present it to the person concerned</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">We get approval to continue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="step-dark"></div>
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">3</div>
              <div class="title-3">Project execution</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">Organizing and distributing all tasks</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">Periodically report to the person concerned</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">A meeting with the person concerned after each stage of the work to take approval or feedback</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.4.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">4</span>
                    <span class="desc">Completing all stages and submitting them for testing and review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section step">
        <div class="row step__content">
          <div class="row">
            <div class="col-6 col-md-3 step__title">
              <div class="step__title__num">4</div>
              <div class="title-3">Project finish</div>
              <div class="break"></div>
            </div>
          </div>
          <div class="step__details row">
            <div class="col-12 step__details__desc step1-details">
              <div class="row">
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.1.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">1</span>
                    <span class="desc">Obtaining approval to terminate the project from the person concerned after reviewing and testing</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.2.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">2</span>
                    <span class="desc">Hand over to the person concerned all project resources</span>
                  </div>
                </div>
                <div class="col-6 col-md-3 step1-details__item">
                  <div class="step1-details__item__img">
                    <img src="../assets/img/step-1.3.jpg">
                  </div>
                  <div class="step1-details__item__desc">
                    <span class="step1-details__item__desc__num">3</span>
                    <span class="desc">Take an evaluation from the client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section deliver row">
        <div class="col-12 col-md-6 deliver__content">
          <div class="title-4">We Work</div>
          <div class="title-2">Receive your project</div>
          <div class="break"></div>
          <div class="deliver__content__items">
            <span><i class="fas fa-plus"></i> Smoothly</span>
            <span><i class="fas fa-plus"></i> At the exact time</span>
            <span><i class="fas fa-plus"></i> Quickly</span>
          </div>
        </div>
        <div class="col-12 col-md-6 deliver__img">
          <img src="../assets/img/deliver.jpg">
        </div>
      </div>

    </div>

    <ProjectMessage></ProjectMessage>

    <div class="space"></div>
    <div class="space"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectMessage from "@/components/ProjectMessage";
import SocialMedia from "@/components/ui/SocialMedia";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Deliver",
  components: {
    SocialMedia,
    ProjectMessage,
    Footer, Navbar
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

.deliver {

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 5%;

    &__items {
      margin-top: 3rem;
      display: flex;
      justify-content: center;

      & span {
        margin: 1rem;
        font-size: 1.4rem;
        font-weight: bold;

        & i {
          color: $color-primary-dark-1;
          margin: 0 .5rem;
        }
      }
    }
  }

  &__img img {
    width: 100%;
    height: 100%;
  }
}

.section {
  margin: 3rem 0 1rem;
}

.step {
  position: relative;

  &__content {
    padding: 1rem 5%;
  }

  &__title {
    background-color: $color-primary-dark-1;
    color: $color-white;
    padding: 3rem 3% 5rem;

    &__num {
      font-size: 1.4rem;
    }
  }

  &__details {

    & .col-12, .col-md-9, .col-md-3 {
      padding: 0;
    }

    &__title {
      padding: 1rem 2% !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__desc {
      padding: 1rem 2% !important;
    }

    & .desc {
      width: 100%;
    }
  }
}

.step-dark {
  background-color: $color-primary-dark-1;
  width: 100%;
  height: 5rem;
  position: absolute;
  z-index: -1;
  top: -2rem;
}

.step1-details {
  padding: 0 5%;

  & .col-6, .col-md-3 {
    padding: 0;
    margin-bottom: 1rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
      display: flex;
      justify-content: center;
      margin-bottom: .5rem;

      & img {
        width: 90%;
        max-height: 12rem;
      }
    }

    &__desc {
      display: flex;
      align-items: center;
      padding: 0 .4rem;

      &__num {
        font-size: 1.4rem;
        padding: .2rem .8rem;
        border-left: 2px solid $color-primary-dark-1;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}

.en .step1-details__item__desc__num {
  border: none;
  border-right: 2px solid $color-primary-dark-1;
}

.step-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
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