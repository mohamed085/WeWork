<template>
  <div class="home_view">
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="slider">
        <div class="slider__owl-main">
          <div class="slider__owl-main__slide-items">
            <div v-if="slider_1" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_2" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_3" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
          </div>


          <div class="slider__owl-dots">
            <div  @click="displaySlider('last')" class="slider__owl-dots__next"><i class="fas fa-angle-right"></i></div>
            <div class="slider__owl-dots__slide">
              <div @click="displaySlider('slider_1')" :class="{active: slider_1}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_2')" :class="{active: slider_2}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_3')" :class="{active: slider_3}" class="slider__owl-dots__slide__item"></div>
            </div>
            <div @click="displaySlider('next')"  class="slider__owl-dots__previous"><i class="fas fa-angle-left"></i></div>
          </div>
        </div>

      </div>

      <div class="section section-bg who-we-are">
        <div class="section__container">
          <div class="section__title">نحن خبراء تطوير البرمجيات</div>
          <div class="section__title-2">نبني شراكات طويلة الأمد</div>
          <div class="section__desc">الذين يستفيدون من التكنولوجيا ويطرحون الأسئلة الصحيحة ليقدموا لك نتائج ملموسة في شكل برامج موثوقة وعالية الجودة ومستدامة يتم تسليمها في الوقت المحدد وفي المرة الأولى الصحيحة.</div>
          <div class="who-we-are__service row">
            <div class="who-we-are__service__left col-12 col-md-5">
              <img src="../assets/img/MacbookPro1.png">
            </div>
            <div class="who-we-are__service__center col-12 col-md-2">
              <span>ابدأ بتنفيذ مشروعك الآن</span>
              <router-link to="/contact-us" class="section__btn">ابدأ الآن</router-link>
            </div>
            <div class="who-we-are__service__right col-12 col-md-5">
              <img src="../assets/img/iMacProLeftSideViewMockup1.png">
            </div>
          </div>

        </div>
      </div>

      <div class="section service">
        <div class="service__container ">
          <div class="section__title">خدماتنا</div>
          <div class="section__desc">السبب الوحيد لعملنا هو جعل الحياة أقل صعوبة لعملائنا.</div>
          <div class="service__categories">
            <div class="service__categories__category">
              <div class="service__categories__category__title">
                <span class="service__categories__category__title__main">خدمات نحن نعمل</span>
                <span class="break"></span>
                <span class="service__categories__category__title__desc">يهتم بتطوير وإنشاء برمجيات عالية الجودة ، مع مراعاة اهتمامات المستخدم واحتياجاته ومتطلباته على جميع المستويات ، ويهتم بشكل عام بتحليل البرامج والتصاميم وكيفية بنائها ، ويعمل على التحقق منها ، وحتى إدارتها ، حتى نقوم بتصميم البرامج الصحيحة والسليمة.</span>
              </div>
              <div class="service__categories__category__items">
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">الخدمات البرمجية</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">الخدمات البرمجية</span>
                      <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                  </div>
                </div>
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">الخدمات التسويقية</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">الخدمات التسويقية</span>
                      <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                  </div>
                </div>
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">الخدمات التصميمية</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">الخدمات التصميمية</span>
                      <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/services" class="btn btn-bg">تعرف علي المزيد</router-link>
        </div>
      </div>

      <div class="section section-bg blogs">
        <div class="section__container">
          <div class="section__title">قيمة العميل والثقة</div>
          <div class="blogs__items row">
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">بمجرد أن بدأت العمل معهم ، كان من الواضح أنهم كانوا مشاركين ، وقادرون تقنيًا ، ومتفهمون للغاية.</div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">تعتبر موثوقيتها وسرعتها أفضل بكثير مما تمكنت من ملاحظته مع مقدمي الخدمات الآخرين.</div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">فريق منخرط للغاية ومهني مع أطنان من المعرفة الصناعية والخبرة العملية في قطاع التنقل الإلكتروني.</div>
              </div>
            </div>
          </div>
          <router-link to="/blogs" class="section__btn mt-5">اكتشف المزيد من الاراء</router-link>
        </div>
      </div>

      <div class="section clients">
        <div class="section__container">
          <div class="section__title">عملائنا</div>
          <div class="clients__items row">
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ع.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/egada-01.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ui.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/دوناتيلو-01.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ض.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/نورا-01.png">
            </div>
          </div>
          <router-link class="section__btn section__btn-bg" to="/clients">تعرف علي المزيد</router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="section">
            <div class="section__container sub-section">
              <div class="sub-section__title">لنصنع معًا</div>
              <div class="sub-section__title-2">أخبرنا عن مشاكلك وسنبحث عن الحل الأفضل!</div>
              <router-link to="/contact-us" class="sub-section__btn">لنتحدث</router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="section section-bg">
            <div class="section__container sub-section">
              <div class="sub-section__title">نحن نوظف</div>
              <div class="sub-section__title-2">أرسل لنا سيرتك الذاتية وكن عضوًا في نحن نعمل!</div>
              <router-link to="/join-us" class="sub-section__btn sub-section__btn-2">قدم الآن</router-link>
            </div>
          </div>

        </div>
      </div>

      <div class="section work-with">
        <div class="section__container">
          <div class="section__title">العمل مع تقنيات المستقبل</div>
          <div class="row work-with__technologies">
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/vuejs.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/aws.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/golang.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/laravel.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/nodejs.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/react.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/typescript.svg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="en" v-if="getLang === 'en'">
      <div class="slider">
        <div class="slider__owl-main">
          <div class="slider__owl-main__slide-items">
            <div v-if="slider_1" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_en.png">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_2" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_en.png">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_3" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_en.png">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="slider__owl-dots">
            <div @click="displaySlider('last')"  class="slider__owl-dots__previous"><i class="fas fa-angle-left"></i></div>
            <div class="slider__owl-dots__slide">
              <div @click="displaySlider('slider_1')" :class="{active: slider_1}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_2')" :class="{active: slider_2}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_3')" :class="{active: slider_3}" class="slider__owl-dots__slide__item"></div>
            </div>
            <div  @click="displaySlider('next')" class="slider__owl-dots__next"><i class="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>

      <div class="section section-bg who-we-are">
        <div class="section__container">
          <div class="section__title">We are software development experts</div>
          <div class="section__title-2">We build long-lasting partnerships</div>
          <div class="section__desc">who leverage technology and ask the right questions to bring you tangible results in the form of reliable, high quality, sustainable software that is delivered on time, right first time.</div>
          <div class="who-we-are__service row">
            <div class="who-we-are__service__left col-12 col-md-5">
              <img src="../assets/img/iMacProLeftSideViewMockup1.png">
            </div>
            <div class="who-we-are__service__center col-12 col-md-2">
              <span>Start your project now</span>
              <router-link class="section__btn" to="/contact-us">Start now</router-link>
            </div>
            <div class="who-we-are__service__right col-12 col-md-5">
              <img src="../assets/img/MacbookPro1.png">
            </div>
          </div>
        </div>
      </div>

      <div class="section service">
        <div class="service__container">
          <div class="section__title">Our services</div>
          <div class="section__desc">The sole reason we are in business is to make life less difficult for our clients.</div>
          <div class="service__categories">
            <div class="service__categories__category">
              <div class="service__categories__category__title">
                <span class="service__categories__category__title__main">Software engineering services</span>
                <span class="break"></span>
                <span class="service__categories__category__title__desc">It is concerned with developing and creating high-quality software, taking into account the user's interests, needs and requirements at all levels, and it is generally concerned with analyzing software, designs and how to build them, and works to verify them, and even manage them, until we engineer correct and sound software.</span>
              </div>
              <div class="service__categories__category__items">
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <span class="service__categories__category__items__item__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                  </div>
                </div>
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <span class="service__categories__category__items__item__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                  </div>
                </div>
                <div class="service__categories__category__items__item">
                  <div class="service__categories__category__items__item__content">
                    <div class="service__categories__category__items__item__front">
                      <i class="fas fa-laptop"></i>
                      <span class="break"></span>
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                    <div class="service__categories__category__items__item__back">
                      <span class="service__categories__category__items__item__title">Websites</span>
                      <span class="service__categories__category__items__item__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                      <router-link to="/" class="service__categories__category__items__item__read-more">Read more <i class="fas fa-arrow-right"></i></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/services" class="btn btn-bg">Read more</router-link>
        </div>
      </div>

      <div class="section section-bg blogs">
        <div class="section__container">
          <div class="section__title">Client Value & Trust</div>
          <div class="blogs__items row">
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">Once I started working with them, it was clear that they were engaged, technically capable, and very understanding.</div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">Their dependability and speed are significantly better than what I’ve been able to observe with other providers.
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="blogs__items__item">
                <div class="blogs__items__item__name">
                  <b-avatar size="3rem"></b-avatar>
                  <span>Mohamed Emad</span>
                </div>
                <div class="blogs__items__item__content">Very engaged and professional team with tons of industry knowledge and hands on experience in the e-mobility sector.</div>
              </div>
            </div>
          </div>
          <router-link to="/blogs" class="section__btn mt-5">Find out more reviews</router-link>
        </div>
      </div>

      <div class="section clients">
        <div class="section__container">
          <div class="section__title">Our clients</div>
          <div class="clients__items row">
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ع.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/egada-01.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ui.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/دوناتيلو-01.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/ض.png">
            </div>
            <div class="clients__items__item col-6 col-md-2">
              <img src="../assets/img/clients/نورا-01.png">
            </div>
          </div>
          <router-link class="section__btn section__btn-bg" to="/clients">Discover more</router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="section">
            <div class="section__container sub-section">
              <div class="sub-section__title">Let's craft together</div>
              <div class="sub-section__title-2">Tell us about your issues and we will brainstorm the best solution!</div>
              <router-link to="/contact-us" class="sub-section__btn">Let's talk</router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="section section-bg">
            <div class="section__container sub-section">
              <div class="sub-section__title">We are Hiring</div>
              <div class="sub-section__title-2"> Send us your resume and become a member of We Work!</div>
              <router-link to="/join-us" class="sub-section__btn sub-section__btn-2">Apply now</router-link>
            </div>
          </div>

        </div>
      </div>

      <div class="section work-with">
        <div class="section__container">
          <div class="section__title">Work with future-proof technologies</div>
          <div class="row work-with__technologies">
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/vuejs.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/aws.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/golang.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/laravel.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/nodejs.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/react.svg">
            </div>
            <div class="col-6 col-md-3 work-with__technologies__item">
              <img src="../assets/img/technologies/typescript.svg">
            </div>
          </div>
        </div>
      </div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    SocialMedia,
    Footer,
    Navbar,
  },
  data() {
    return {
      slider_1: true,
      slider_2: false,
      slider_3: false,
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.displaySlider('next')
    }, 5000);
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('main/setLang', lang);
    },
    displaySlider(slider) {
      if (slider == 'slider_1') {
        this.slider_3 = false
        this.slider_2 = false
        this.slider_1 = true
      }
      else if (slider == 'slider_2') {
        this.slider_3 = false
        this.slider_1 = false
        this.slider_2 = true
      }
      else if (slider == 'slider_3') {
        this.slider_1 = false
        this.slider_2 = false
        this.slider_3 = true
      }
      else if (slider == 'next') {
        if (this.slider_1) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_1 = false
          this.slider_3 = true
        }
        else if (this.slider_3) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
      }
      else if (slider == 'last') {
        if (this.slider_1) {
          this.slider_1 = false
          this.slider_2 = false
          this.slider_3 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
        else if (this.slider_3) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
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

.home_view {
}

.slider {
  height: 100vh;
  position: relative;
  z-index: 90;
  opacity: 1;

  &__owl-main {
    height: 100%;

    &__slide-items {
      height: 100%;

      &__item {
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(45deg, rgba(194, 233, 221, 0.5) 1%, rgba(104, 119, 132, 0.5) 100%), linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%);

        &__bg {
          height: 100%;
          width: 100%;
          object-fit: cover;
          vertical-align: middle;
          border-style: none;
        }

        &__overlay {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;

          &:after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            content: "";
            background: -webkit-linear-gradient(90deg, rgba(127, 191, 65, 0) 0%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 1) 100%);
            background: linear-gradient(90deg, rgba(127, 191, 65, 0) 0%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 1) 100%);
            background-image: url(../assets/img/hero-after.png);
            background-size: cover;
            background-repeat: no-repeat;
          }
        }

        &__content {
          z-index: 4;
          opacity: 1 !important;
          height: 100%;
          width: 50%;
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 12% 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: none;

          &__main-title {
            color: $color-primary-dark-1;
            font-size: 2.25rem;
            animation-name: moveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }

          &__sub-title {
            text-align: justify;
            margin: 1.1rem 0;
            font-weight: 200 !important;
            padding: 0 15px;
            color: #656565;
            line-height: 1.8;
            font-size: 1rem;
            animation: moveInRight 1s ease-out;
            line-height: 1.8;
          }

          &__btn a {
            text-decoration: none;
            background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
            border: 0;
            padding: 0.7rem 2rem;
            border-radius: 100px !important;
            color: $color-white;
            font-size: 1rem;
            width: max-content;
            box-shadow: 0 .8rem 1.8rem rgba($color-black,.2);

            &:hover,
            &:active,
            &:focus {
              background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
              transform: translateY(-3px);
              box-shadow: 0 20px 30px rgba($color-black,.2);
            }

          }
        }
      }
    }

  }

  &__owl-dots {
    display: flex;
    position: absolute;
    bottom: 10%;
    right: 10%;
    z-index: 5;

    &__next,
    &__previous {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1.8rem;
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

.en {
  & .slider__owl-dots {
    left: 10%;
  }

  & .slider {
    &__owl-main {

      &__slide-items {

        &__item {
          background-image: linear-gradient(45deg, rgba(104, 119, 132, 0.5) 1%, rgba(194, 233, 221, 0.5) 100%), linear-gradient(-45deg, rgba(217, 230, 185, 0.5) 0%, #494d71 80%);

          &__content {
            top: 0;
            left: 0;
            padding: 0 0 0 12%;

            &__btn a {
              background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);

              &:hover,
              &:active,
              &:focus {
                background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
              }
            }
          }

          &__overlay {
            background-image: url(../assets/img/hero-after-en.png);
          }

        }
      }
    }

    &__owl-dots {
      right: 10%;
    }
  }
}

.btn--animated {
  animation: moveInBottom .5s ease-out .75s;
  animation-fill-mode: backwards;
}

.section {
  padding: 6rem 0;

  &__container {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  &__title-2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }

  &__desc {
    width: 60%;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 500 ;
  }

  &__btn {
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

  &__btn-bg {
    background-color: $color-primary;
    color: $color-white;
    border: 1px solid $color-primary;

    &:hover {
      background-color: $color-white;
      color: $color-primary;
      border: 1px solid $color-primary;
    }
  }

}

.section-bg {
  background-color: #255d9a;
  color: $color-white;
}

.who-we-are {
  &__service {
    display: flex;
    justify-content: center;
    align-items: center;

    &__center {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & span {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
      }

    }

    &__left,
    &__right {
      padding: 0 4.5%;

      & img {
        width: 90%;
      }
    }
  }

}

.service {
  margin-bottom: 20px;

  &__container {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__categories {

    &__category {
      display: flex;
      margin: 1.6rem 0 3rem;

      &__title {
        width: 25%;
        display: flex;
        flex-direction: column;
        padding: 2rem .7rem .6rem;

        &__main {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: .5rem;
          color: $color-primary-dark-1;
        }

        &__desc {
          margin-top: 1rem;
          font-size: .8rem;
          color: $color-primary-dark-1;
        }
      }

      &__items {
        width: 100%;
        padding: 0 1%;
        display: flex;
        flex-wrap: wrap;

        &__item {
          margin: 1.8rem 1.5%;
          position: relative;
          width: 30%;
          height: 20rem;
          border-radius: 1rem;
          perspective: 500rem;

          &__content {
            position: absolute;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 1.1rem rgba(0,0,0,0.3);
            transition: transform 1s;
            transform-style: preserve-3d;
            border-radius: 15px;
          }

          &:hover .service__categories__category__items__item__content {
            transform: rotateY(180deg);
            transition: transform 0.5s;
          }

          &__front,
          &__back {
            position: absolute;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
            border-radius: 15px;
            padding: 15% 5% 10%;
            display: flex;
            flex-direction: column;
          }

          &__back {
            transform: rotateY(180deg);
            background-color: $color-primary;
            color: $color-white;
          }

          & i {
            font-size: 80px;
            color: $color-grey-dark-2;
            margin-bottom: 20px;
          }

          &__title {
            font-size: 1.6rem;
            font-weight: 600;
            margin: 1rem 0;
            color: $color-primary-dark-1;
          }

          &__desc {
            font-size: .8rem;
            margin: 10px;
            text-align: justify;
          }

          &__read-more {
            font-size: 18px;
            color: $color-primary-dark-1;
            text-decoration: none;
            margin-top: auto;

            & i {
              color: $color-primary-dark-1;
              font-size: 18px;
              margin: auto;
            }
          }
        }
      }
    }
  }
}

.service__categories__category__items__item__front .service__categories__category__items__item__title,
.service__categories__category__items__item__back .service__categories__category__items__item__read-more {
  margin-top: auto;
}

.service__categories__category__items__item__back .service__categories__category__items__item__title,
.service__categories__category__items__item__back .service__categories__category__items__item__read-more,
.service__categories__category__items__item__back .service__categories__category__items__item__read-more i {
  color: $color-white;
}

.service__categories__category__items__item__back .service__categories__category__items__item__title {
  margin-top: 0;
}

.blogs {

  &__items {
    width: 100%;

    &__item {
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
      padding: 1.5rem .5rem;
      margin: .5rem;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }

      &__name {
        direction: ltr;
        margin-left: 10px;
        display: flex;
        align-items: center;

        & span {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
      }

      &__content {
        padding: 0 5% 0 7%;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

.clients {

  &__items {
    width: 100%;
    display: flex;
    justify-content: center;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        height: 150px;
        max-width: 100%;
      }
    }
  }

  &__btn {
    margin-top: 20px;
    background-color: $color-primary;
    color: $color-white;
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 10px;

    &:hover {
      background-color: $color-white;
      color: $color-primary;
    }
  }
}

.work-with {

  &__technologies {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1.6rem 0;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3.5rem 0;
    }
  }
}


.sub-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__title-2 {
    padding: 0 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  &__btn {
    text-decoration: none;
    margin: 1.5rem;
    padding: .5rem 1rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    background-color: $color-primary-dark-1;
    color: $color-white;
    border: 1px solid $color-primary-dark-1;

    &:hover {
      background-color: $color-white;
      color: $color-primary-dark-1;
      border: 1px solid $color-primary-dark-1;
    }
  }

  &__btn-2 {
    background-color: $color-white;
    color: $color-primary-dark-1;
    border: 1px solid $color-white;

    &:hover {
      background-color: $color-primary-dark-1;
      color: $color-white;
      border: 1px solid $color-primary-dark-1;
    }

  }
}

@include respond(tab-port) {
  .slider__owl-main__slide-items__item__content {
    width: 100%;
  }

  .slider__owl-main__slide-items__item__bg {
    opacity: .3;
  }

  .slider__owl-dots {
    right: 5%;
    bottom: 15%;
  }

  .en {
    & .slider__owl-dots {
      left: 5%;
      bottom: 15%;
    }

    & .slider__owl-dots__next i,
    & .slider__owl-dots__previous i {
      padding: .8rem;
    }
  }

  .section {

    &__title {
      text-align: center;
      font-size: 2.5rem;
    }

    &__title-2 {
      text-align: center;
      font-size: 2rem;
    }

    &__desc {
      text-align: center;
      width: 90%;
      font-size: 1rem;
    }
  }

  .service__categories__category {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

    &__title {
      width: 100%;
      margin-bottom: 20px;
    }

    &__items {
      display: flex;
      flex-direction: column;

      &__item {
        width: 100%;
      }
    }
  }

}
</style>