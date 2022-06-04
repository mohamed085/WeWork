<template>
  <div>
    <Navbar></Navbar>

    <div class="mobile-apps ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img src="../../assets/img/mobile_apps-bg.png">
        </div>
        <div class="intro__title">
          <div class="title-3">تطبيقات الهاتف الجوال</div>
          <div class="title-2">4 سنوات من </div>
          <div class="title mb-2">صناعة تطبيقات الهاتف الجوال</div>
          <div class="break mb-4"></div>
          <div class="desc">
            نحن مزيج يعمل بشكل مثالي من مزود ذي خبرة ، مع ما يقرب من 1000 متخصص على متن الطائرة ، وبدء تشغيل متحمس.
          </div>
          <div class="desc">
            يساعدنا هذا ، جنبًا إلى جنب مع طريقتنا الفريدة في العمل مع العملاء ، في بناء شراكات طويلة الأمد وإنشاء حلول برمجية مذهلة تلبي احتياجات الأعمال والمستخدمين.
          </div>
        </div>
      </div>

      <main>
        <div class="apps">
          <div class="row apps__container">
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
                        </p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">قراءة المزيد</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>


    <div class="mobile-apps en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__img">
          <img src="../../assets/img/mobile_apps-bg.png">
        </div>
        <div class="intro__title">
          <div class="title-3">Mobile applications</div>
          <div class="title-2">4 years of</div>
          <div class="title mb-2">Create Mobile applications</div>
          <div class="break mb-4"></div>
          <div class="desc">
            We are a perfectly working hybrid of an experienced provider, with almost 1000 specialists on board, and an enthusiastic start-up.
          </div>
          <div class="desc">
            This, together with our unique way of working with clients, helps us build long-lasting partnerships and create amazing software solutions that satisfy business’ and users’ needs.
          </div>
        </div>
      </div>

      <main>
        <div class="apps">
          <div class="row apps__container">
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="/mobile-application/125653">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <div class="app__content__body__desc__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <router-link to="/mobile-application/125653" class="app__content__body__desc__btn">Read more</router-link>
                      <div class="app__content__body__desc__download">
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/app-store.svg">
                        </router-link>
                        <router-link to="" class="app__content__body__desc__download__link">
                          <img src="../../assets/svg/play-store.svg">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  name: "MobileApps",
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
    left: 10%;
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
  right: 10%;
  bottom: 0;
}


.apps {

  &__container {
    padding: 5%;
  }
}

.app {
  margin-top: 10rem;
  padding: 0;
  position: relative;
  width: 100%;
  user-select: none;

  &__box-grad {
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
    z-index: 0;
    left: 0 !important;
    right: 0 !important;
  }

  &__content {
    background: $color-white;
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    width: 100%;

    &:hover {
      transform: translate3d(0, -8px, 0);
    }

    &__body {
      padding: 10px !important;
      flex: 1 1 auto;
      min-height: 1px;
      display: flex;

      &__img {
        width: 20rem;
        margin: -5rem 5px 0;

        & img {
          width: 100%;
          vertical-align: middle;
          border-style: none;

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      &__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        &__title {
          font-size: 2.4rem;
          color: $color-primary-dark-1;
        }

        &__text {
          max-height: 100px;
          overflow: hidden;
          margin-bottom: 15px;

          & p {
            font-weight: 100 !important;
            font-family: 'The Sans Arabic' !important;
            color: #6f7070;
            line-height: 1.8;
            margin: 0;
            font-size: 14px;
            padding: 0 0 10px;
          }
        }

        &__btn {
          display: inline-block;
          width: max-content;
          font-size: 1rem;
          background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
          color: $color-white;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 10px 0 15px;
          text-decoration: none;

          &:hover {
            background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
            transform: translateY(-3px);
          }
        }

        &__download {
          display: flex;

          &__link {
            margin: 0 3px;
          }
        }

      }

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

  .app {
    margin-top: 240px;
  }

  .app__content__body {
    flex-direction: column;
    align-items: center;
  }

  .app__content__body__img {
    width: 200px;
    margin: -160px 10px 30px;
  }
}
</style>