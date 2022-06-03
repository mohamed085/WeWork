<template>
  <div>
    <SocialMedia></SocialMedia>
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

      <div class="space"></div>

      <div class="about-section facts row">
        <div class="col-12 col-md-4 sub-section facts__title">
          <div class="title-4">حقائق وأرقام</div>
          <div class="title-2 mb-0">تجربتنا تجعلنا شريكًا موثوقًا به</div>
        </div>
        <div class="col-12 col-md-8 sub-section facts__desc">
          <div class="row">
            <div class="col-12 col-md-6 facts__desc__clients">
              <div class="facts__desc__clients__content">
                <div class="title-3 mb-0">لقد عملنا مع أكثر من </div>
                <div class="title-3 mb-2 mt-2">200</div>
                <div class="title-3 mb-0">عميل عالمي في أكثر من</div>
                <div class="title-3 mb-2 mt-2">600</div>
                <div class="title-3 mb-0">مشروع</div>
              </div>
              <i class="facts__desc__clients__icon fas fa-users"></i>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">من أعضاء الفريق بخبرة تزيد عن 5 سنوات</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section values row">
        <div class="col-12 col-md-6 sub-section values__desc">
          <div class="title-4">قيمنا</div>
          <div class="title-5">
            نسعى لخلق مكان استثنائي للعمل ، حيث كل رأي مهم ولا توجد عوائق أمام تقدم المواهب.
          </div>
          <div class="break"></div>
          <div class="desc mt-4">
            يمكن تلخيص الفلسفة التي نتبعها في جملة واحدة:
          </div>
          <div class="title-3 mt-5 pe-5">
            برنامج رائع ... لأننا نضع الناس في المقام الأول
          </div>
        </div>
        <div class="col-12 col-md-6 values__img">
          <img src="../assets/img/about-us.jpg">
        </div>
      </div>

      <div class="about-section properties">
        <i class="properties__icon fas fa-handshake"></i>
        <div class="properties__content row">
          <div class="col-4 col-md-3 properties__content__items">
            <span
                @click="displayProperties('quality')"
                class="properties__content__items__item"
                :class="(quality) ? 'active-item' : ''"
            >الجودة</span>
            <span
                @click="displayProperties('passion')"
                class="properties__content__items__item"
                :class="(passion) ? 'active-item' : ''"
            >الشغف</span>
            <span
                @click="displayProperties('development')"
                class="properties__content__items__item"
                :class="(development) ? 'active-item' : ''"
            >التطوير</span>
            <span
                @click="displayProperties('atmosphere')"
                class="properties__content__items__item"
                :class="(atmosphere) ? 'active-item' : ''"
            >الأَجواء</span>
            <span
                @click="displayProperties('team_spirit')"
                class="properties__content__items__item"
                :class="(team_spirit) ? 'active-item' : ''"
            >روح الفريق</span>
          </div>

          <div class="col-8 col-md-6 properties__content__items-desc">
            <div v-if="quality" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">الجودة</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                الجودة هي جوهر كل ما نقوم به في نحن نعمل. لقد كان هذا مبدأ إرشاديًا منذ يومنا الأول. نعتقد أن هذا التركيز على الحفاظ على أعلى مستويات الجودة هو قوتنا الأساسية.
              </div>
            </div>
            <div v-if="passion" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">الشغف</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                إن الأشخاص المتحمسين لعملهم هم الذين يدفعون باستمرار شركتنا إلى الأمام. نحن متحمسون لتطوير البرمجيات ونحقق ذلك من خلال التزامنا بتقديم أعلى المعايير وأفضل تجربة ممكنة للموردين لعملائنا. نتعلم أيضًا اللغات الأجنبية ونستثمر وقتنا في تنظيم المؤتمرات.
              </div>
            </div>
            <div v-if="development" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">التطوير</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                هذا ما نفعله كل يوم. موظفونا حريصون على توسيع معارفهم ومهاراتهم ومشاركة ذلك مع فرق المشروع الخاصة بهم.
              </div>
            </div>
            <div v-if="atmosphere" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">الأَجواء</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                نحن نؤسس بشكل أساسي على الانفتاح والثقة في الأشخاص الذين نعتقد أنهم في صميم بيئة العمل الإيجابية. عندما لا نستثمر وقتنا في إنشاء حلول موثوقة لإفادة عملائنا ، فإننا ننخرط في أنشطة ما بعد ساعات العمل. أحد أهدافنا هو فريق سعيد ، ولهذا السبب نحاول الاستمتاع قليلاً أثناء العمل أيضًا.
              </div>
            </div>
            <div v-if="team_spirit" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">روح الفريق</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                روح الفريق ليست شيئًا يمكن للشركة أن تخلقه. الأشخاص الذين تقابلهم كل يوم هم الذين يحددون في جزء كبير منهم ما إذا كنت تريد الاستيقاظ في الصباح والذهاب إلى العمل والمضي قدمًا معًا في مستقبل شركتنا.
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mobile-hide"></div>
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

      <div class="space"></div>

      <div class="about-section facts row">
        <div class="col-12 col-md-4 sub-section facts__title">
          <div class="title-4">Facts & Figures</div>
          <div class="title-2 mb-0">Our experience makes us</div>
        </div>
        <div class="col-12 col-md-8 sub-section facts__desc">
          <div class="row">
            <div class="col-12 col-md-6 facts__desc__clients">
              <div class="facts__desc__clients__content">
                <div class="title-3 mb-0">We have worked for</div>
                <div class="title-3 mb-2 mt-2">200</div>
                <div class="title-3 mb-0">global clients on over</div>
                <div class="title-3 mb-2 mt-2">600</div>
                <div class="title-3 mb-0">projects</div>
              </div>
              <i class="facts__desc__clients__icon fas fa-users"></i>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
                <div class="col-6 col-md-6 facts__desc__employee">
                  <div class="desc mb-0">40%</div>
                  <div class="desc mb-0">team members with over 5 years of experience</div>
                  <div class="facts__desc__employee__bg">40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section values row">
        <div class="col-12 col-md-6 sub-section values__desc">
          <div class="title-4">Our values</div>
          <div class="title-5">
            We seek to create an exceptional place to work, where every opinion matters and there are no barriers for talent to progress.
          </div>
          <div class="break"></div>
          <div class="desc mt-4">
            The philosophy we follow can be summarised in one sentence:
          </div>
          <div class="title-3 mt-5 ps-5">
            Great software… because we put people first
          </div>
        </div>
        <div class="col-12 col-md-6 values__img">
          <img src="../assets/img/about-us.jpg">
        </div>
      </div>

      <div class="about-section properties">
        <i class="properties__icon fas fa-handshake"></i>
        <div class="properties__content row">
          <div class="col-4 col-md-3 properties__content__items">
            <span
                @click="displayProperties('quality')"
                class="properties__content__items__item"
                :class="(quality) ? 'active-item' : ''"
            >Quality</span>
            <span
                @click="displayProperties('passion')"
                class="properties__content__items__item"
                :class="(passion) ? 'active-item' : ''"
            >Passion</span>
            <span
                @click="displayProperties('development')"
                class="properties__content__items__item"
                :class="(development) ? 'active-item' : ''"
            >Development</span>
            <span
                @click="displayProperties('atmosphere')"
                class="properties__content__items__item"
                :class="(atmosphere) ? 'active-item' : ''"
            >Atmosphere</span>
            <span
                @click="displayProperties('team_spirit')"
                class="properties__content__items__item"
                :class="(team_spirit) ? 'active-item' : ''"
            >Team Spirit</span>
          </div>

          <div class="col-8 col-md-6 properties__content__items-desc">
            <div v-if="quality" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">Quality</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                Quality is central to everything we do at We Work. This has been a guiding principle from our very first day. We believe that this focus on maintaining the highest quality is our core strength.
              </div>
            </div>
            <div v-if="passion" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">Passion</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                It is the people enthusiastic about their work who continually drive our company forward. We are passionate about software development and realise this through our commitment to deliver the highest standards and best possible supplier experience to our clients. We also learn foreign languages and invest our time in organising conferences.
              </div>
            </div>
            <div v-if="development" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">Development</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                It’s what we do every day. Our people are fervent about expanding their knowledge and skills and share this with their project teams.
              </div>
            </div>
            <div v-if="atmosphere" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">Atmosphere</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                We are based primarily on openness and trust in people which we believe is at the heart of a positive work environment. When we don’t invest our time in creating reliable solutions to benefit our clients, we engage ourselves in after-hours activities. One of our goals is Happy Team, that’s why we try to have a bit of fun while working too.
              </div>
            </div>
            <div v-if="team_spirit" class="properties__content__items-desc__item-desc animate__animated animate__fadeInDown">
              <div class="properties__content__items-desc__item-desc__title">Team Spirit</div>
              <div class="break"></div>
              <div class="properties__content__items-desc__item-desc__desc">
                Team Spirit is not something that a company can just create. It is the people you meet every day that in a large part determine whether you want to get up in the morning and go to work and move forward together in the future of our company.
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 mobile-hide"></div>
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
import SocialMedia from "@/components/ui/SocialMedia";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {
    SocialMedia,
    Footer, Navbar
  },
  data() {
    return {
      intro_1: true,
      intro_2: false,
      intro_3: false,
      quality: true,
      passion: false,
      development: false,
      atmosphere: false,
      team_spirit: false,
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.displayIntro('next')
    }, 5000);

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
    },
    displayProperties(property) {
      if (property == 'quality') {
        this.passion = false;
        this.development = false;
        this.atmosphere = false;
        this.team_spirit = false;
        this.quality = true;
      }
      else if (property == 'passion') {
        this.development = false;
        this.atmosphere = false;
        this.team_spirit = false;
        this.quality = false;
        this.passion = true;
      }
      else if (property == 'development') {
        this.atmosphere = false;
        this.team_spirit = false;
        this.quality = false;
        this.passion = false;
        this.development = true;
      }
      else if (property == 'atmosphere') {
        this.team_spirit = false;
        this.quality = false;
        this.passion = false;
        this.development = false;
        this.atmosphere = true;
      }
      else if (property == 'team_spirit') {
        this.quality = false;
        this.passion = false;
        this.development = false;
        this.atmosphere = false;
        this.team_spirit = true;
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

.title-5 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1rem;
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
      width: 100%;
      height: 80vh;
      object-fit: cover;
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

.sub-section {
  padding: 2rem 3%;
}

.about-section {
  margin: 5rem 0;
  padding: 0 2%;

}

.facts {

  &__desc {

    & .col-6 ,
    & .col-md-6 {
      margin: 0;
    }

    &__clients {
      background-color: $color-primary-dark-1;
      color: $color-white;
      position: relative;
      margin: 0;
      z-index: -1;
      padding: 2rem 5%;

      &__content {
        padding: 3rem 0;
      }

      &__icon {
        color: $color-white;
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        font-size: 10rem;
        opacity: .13;
      }

      &::after {
        content: '';
        position: absolute;
        top: -19px;
        left: -20px;
        z-index: 1;
        width: 40px;
        height: 40px;
        background: url(../assets/img/download.svg);
      }

    }

    &__employee {
      padding: 2rem 2%;
      position: relative;
      box-shadow: inset 0 0 0 1px #dadada;
      background-color: #fff;
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__bg {
        opacity: .13;
        font-size: 5rem;
        position: absolute;
        top: -18px;
        left: 2px;
        display: block;
        user-select: none;
       }
    }
  }
}

.values {

  &__desc {
    padding: 7% 3%;
  }

  &__img {
    padding: 5% 1%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}

.properties {
  background-color: $color-primary-dark-1;
  color: $color-white;
  padding: 6rem 4%;
  position: relative;

  &__icon {
    color: $color-white;
    position: absolute;
    left: 2rem;
    top: 1.5rem;
    font-size: 12rem;
    opacity: .13;
  }

  &__content {

    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__item {
        padding: .5rem 0;
        margin: .5rem 0;
        font-size: 1.4rem;
        font-weight: 700;
        cursor: pointer;

        &:hover {
          color: $color-primary;
          border-bottom: 2px solid $color-primary;

        }
      }

      & .active-item {
        color: $color-primary;
        border-bottom: 2px solid $color-primary;
      }

    }

    &__items-desc {
      display: flex;
      align-items: center;

      &__item-desc {

        &__title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: .5rem;
        }

        &__desc {
          margin-top: 2rem;
          font-size: 1.2rem;
        }
      }
    }
  }
}

.en .properties__icon {
  left: auto;
  top: 1.5rem;
  right: 2rem;
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

  .mobile-hide {
    display: none;
  }

  .properties {
    padding: 6rem 0%;
  }
}

</style>