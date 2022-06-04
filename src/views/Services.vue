<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="services-view ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__img">
          <img src="../assets/img/services.jpg">
        </div>
        <div class="intro__title">
          <div class="title-3">الذي نفعله</div>
          <div class="title-2">اكتشف</div>
          <div class="title">خدمات نحن نعمل</div>
          <div class="break"></div>
        </div>
        <div class="strategy bg-screen row">
          <div class="col-md-4">
            <div class="strategy__title">الخدمات
              <br>
              <span>البرمجية</span>
            </div>
            <div class="strategy__desc">
              حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
            </div>
            <div class="strategy__desc">
              نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
            </div>
          </div>
          <div class="col-md-8">
            <div class="service__categories__category__items">
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                    <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-mobile-alt"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                    <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-quidditch"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">تصميمات UI/UX</span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">تصميمات UI/UX</span>
                    <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                    <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 mobile row">
        <div class="col-md-4">
          <div class="strategy__title">الخدمات
            <br>
            <span>البرمجية</span>
          </div>
          <div class="strategy__desc">
            حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
          </div>
          <div class="strategy__desc">
            نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-mobile-alt"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-quidditch"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">تصميمات UI/UX</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">تصميمات UI/UX</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">خدمات
            <br>
            <span>التصميم</span>
          </div>
          <div class="strategy__desc">
            حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
          </div>
          <div class="strategy__desc">
            نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">خدمات
            <br>
            <span>الديكور</span>
          </div>
          <div class="strategy__desc">
            حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
          </div>
          <div class="strategy__desc">
            نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">خدمات
            <br>
            <span>التسويق</span>
          </div>
          <div class="strategy__desc">
            حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
          </div>
          <div class="strategy__desc">
            نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">خدمات
            <br>
            <span>تطوير الاعمال</span>
          </div>
          <div class="strategy__desc">
            حقق أهداف عملك باستخدام التكنولوجيا واحصل على المنتج الذي يتكيف جيدًا مع بيئتك.
          </div>
          <div class="strategy__desc">
            نحن نقدم ورش عمل مع جميع أصحاب المصلحة الرئيسيين ، ونجمع المتطلبات وتصميم الحل الكامل مع خريطة طريق للتسليم.
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
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
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكنرونية</span>
                  <span class="service__categories__category__items__item__desc">النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
                      </span>
                  <router-link to="/" class="service__categories__category__items__item__read-more">قراء المزيد <i class="fas fa-arrow-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="services-view en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__img">
          <img src="../assets/img/services.jpg">
        </div>
        <div class="intro__title">
          <div class="title-3">What we do</div>
          <div class="title-2">Discover</div>
          <div class="title">We work services</div>
          <div class="break"></div>
        </div>
        <div class="strategy bg-screen row">
          <div class="col-md-4">
            <div class="strategy__title">
              <span>Software</span>
              <br>
              Services
            </div>
            <div class="strategy__desc">
              Achieve your business goals with technology and get the product that is well adapted to your environment.
            </div>
            <div class="strategy__desc">
              We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
            </div>
          </div>
          <div class="col-md-8">
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
      </div>

      <div class="strategy strategy-1 mobile row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Software</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Achieve your business goals with technology and get the product that is well adapted to your environment.
          </div>
          <div class="strategy__desc">
            We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
          </div>
        </div>
        <div class="col-md-8">
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

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Software</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Achieve your business goals with technology and get the product that is well adapted to your environment.
          </div>
          <div class="strategy__desc">
            We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
          </div>
        </div>
        <div class="col-md-8">
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

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Design </span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Achieve your business goals with technology and get the product that is well adapted to your environment.
          </div>
          <div class="strategy__desc">
            We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
          </div>
        </div>
        <div class="col-md-8">
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

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Marketing</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Achieve your business goals with technology and get the product that is well adapted to your environment.
          </div>
          <div class="strategy__desc">
            We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
          </div>
        </div>
        <div class="col-md-8">
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

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Business Development</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Achieve your business goals with technology and get the product that is well adapted to your environment.
          </div>
          <div class="strategy__desc">
            We offer workshops with all your key stakeholders, gathering requirements and design of a full solution with a roadmap for delivery.
          </div>
        </div>
        <div class="col-md-8">
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
  name: "Services",
  components: {
    SocialMedia,
    Footer, Navbar
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  created() {
    window.scrollTo(0,0)
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";

.services-view {
  margin: 4rem 0 8rem;
}

.mobile {
  display: none;
}

.intro {
  position: relative;
  padding: 2rem 4rem 0;
  min-height: 3rem;

  &__img {
    display: block;
    position: absolute;
    top: 0;
    left: calc(-.5*(1920px - (1392px + (2*(70px*.75)))));
    bottom: 0;
    right: 45.83333%;
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

}

.en .intro__img {
  top: 0;
  right: calc(-.5*(1920px - (1392px + (2*(70px*.75)))));
  bottom: 0;
  left: 45.83333%;

}

.strategy {
  margin: 1rem 0;
  padding: 0;
  background-color: $color-white;

  &__title {
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem 0 1rem;

    & span {
      font-weight: 700;
    }
  }

  &__desc {
    font-size: 1rem;
    margin: 1rem;
    font-weight: 500 ;
  }
}

.strategy-1 {
  padding: 0 1.5rem;
}

.en .strategy-1 {
  padding: 0 0 0 2.5rem;

}

.service__categories__category__items {
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


@include respond(tab-port) {
  .intro {
    padding: 2rem 2rem 0;
  }
  .intro__title {
    width: 100%;
  }

  .intro__img {
    width: 100%;
    opacity: .3;
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

  .mobile {
    display: block;
  }

  .bg-screen {
    display: none;
  }
}

</style>