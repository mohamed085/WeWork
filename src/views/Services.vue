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
            <div class="strategy__title">خدمات
              <br>
              <span>البرمجة</span>
            </div>
            <div class="strategy__desc">
              نعمل على تطوير موقعك الالكتروني وتطبيقات الهاتف بأحترافيه مع مما يناسب احتياجاتك واحتياجات عملائك للوصول للنجاح الذي تطمح له
            </div>
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <div class="service__categories__category__items">
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">المواقع الالكترونية</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">المواقع الالكترونية</span>
                    <span class="service__categories__category__items__item__desc">
                      موقعك الإلكتروني هو أفضل من يتحدث عنك ويشرح أفكارك ويطرح منتجاتك. لكن حتى يحدث هذا، يجب أن يكون تصميم موقعك الإلكتروني جذاباً وسلساً في التعامل
                    </span>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">المتاجر الالكترونيه</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">المتاجر الالكترونيه</span>
                    <span class="service__categories__category__items__item__desc">
                      هل لديك سلعة او منتجات تريد تسويقها وبيها على الانترنت اذا فالمتجر الالكتروني هو الحل الامثل لك ولعملائك ,نحن متخصصون ونمتلك الخبره الكافيه لتصميم وبرمه المتاجر الالكترونيه لنجعلك تصل لعملائك وتبيع منتجك وتستلم اموالك من خلال الانترنت ,لدينا خطط مدروسه وعمليه لحلول التجاره الالكترونيه
                    </span>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                    <span class="service__categories__category__items__item__desc">
                      تعزز تطبيقات الهاتف وصولك لعملائك بشكل أعمق ، لاسيما وأن الهواتف المحمولة باتت أقرب لأصحابها من أفراد عائلاتهم، حسبما تؤكد الدراسات السوقية الحديث
                    </span>
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
            نعمل على تطوير موقعك الالكتروني وتطبيقات الهاتف بأحترافيه مع مما يناسب احتياجاتك واحتياجات عملائك للوصول للنجاح الذي تطمح له
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المواقع الالكترونية</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المواقع الالكترونية</span>
                  <span class="service__categories__category__items__item__desc">
                      موقعك الإلكتروني هو أفضل من يتحدث عنك ويشرح أفكارك ويطرح منتجاتك. لكن حتى يحدث هذا، يجب أن يكون تصميم موقعك الإلكتروني جذاباً وسلساً في التعامل
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">المتاجر الالكترونيه</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">المتاجر الالكترونيه</span>
                  <span class="service__categories__category__items__item__desc">
                      هل لديك سلعة او منتجات تريد تسويقها وبيها على الانترنت اذا فالمتجر الالكتروني هو الحل الامثل لك ولعملائك ,نحن متخصصون ونمتلك الخبره الكافيه لتصميم وبرمه المتاجر الالكترونيه لنجعلك تصل لعملائك وتبيع منتجك وتستلم اموالك من خلال الانترنت ,لدينا خطط مدروسه وعمليه لحلول التجاره الالكترونيه
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">تطبيقات الجوال</span>
                  <span class="service__categories__category__items__item__desc">
                      تعزز تطبيقات الهاتف وصولك لعملائك بشكل أعمق ، لاسيما وأن الهواتف المحمولة باتت أقرب لأصحابها من أفراد عائلاتهم، حسبما تؤكد الدراسات السوقية الحديث
                    </span>
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
            <span>التصميم والجرافيك</span>
          </div>
          <div class="strategy__desc">
            نركز على انشاء تصاميم جرافيك مميزه من الناحيه الجماله تجذب الانظار وتوصل هدف علامتك التجاريه الى الجمهور المستهدف
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">تصميمات السوشيال ميديا</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">تصميمات السوشيال ميديا</span>
                  <span class="service__categories__category__items__item__desc">
                    تصميماتنا قادرة على توصيل رسالتك ولفت نظر عملائك المحتملين واداه اساسيه لترويج منتجاتك
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">الموشن جرافيك</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">الموشن جرافيك</span>
                  <span class="service__categories__category__items__item__desc">
                     تعتبر فيديوهات الموشن جرافيك من أسهل الأدوات التسويقية لعرض فكرة مشروعك/شركتك او التعريف عنه والذي يبقى في أذهان عملائك طوال الوقت
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">UI/UX تصميمات</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">UI/UX تصميمات</span>
                  <span class="service__categories__category__items__item__desc">
                    تعتبر تجربة المستخدم الجزء الاكثر اهميه في اي مشروع نظرا لتأثيرها الكبير على كيفيه سير المشروع

                  </span>
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
            الإبداع في خلق أفكار استثنائية للتصميم الداخلي والديكور ينتج من شغف الاعتناء بالتفاصيل الصغيرة ,بالفن نُسخِّر مساحات المكان لِتلبية احتياجات الإنسان, بقدراتنا الفنية المتطورة واهتمامنا بالنواحي الجمالية نَهِب الأماكن أرواحها
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">التصميم الداخلي</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">التصميم الداخلي</span>
                  <span class="service__categories__category__items__item__desc">
                    نحن نعمل واحدة من الشركات الرائدة في مجال التصميم الداخلي في المملكة العربية السعودية ، نحن نقدم خدمات وتصميمات رائعة تناسب ذوقك وراحتك
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">التصميم الخارجي</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">التصميم الخارجي</span>
                  <span class="service__categories__category__items__item__desc">
                    التصميم الخارجى للفلل والمنازل يعبر منذ اللحظة الأولى عن ذوقكم الخاص أمام الضيوف لذلك نحن نعمل تتعاون معك للوصول للتصميم الخارجي الذي تحلم به مع ابرع وامهرمهندسين الديكور
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">مخططات تنفيذية</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">مخططات تنفيذية</span>
                  <span class="service__categories__category__items__item__desc">
                    هي التي تحول أفكار التصاميم الداخلية والخارجية إلى رسومات قابلة للتنفيذ على أرض الواقع , نحن نعمل نقدم خدمات رسم المخططات التنفيذية بالدقة المطلوبة حتى تنعكس أفكار التصميم على الواقع من دون أي أخطاء في تنفيذ التصاميم
                  </span>
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
            لدينا فريق قادر على ترويج منتجاتك وتقوية علاقتك بعملائك الحاليين والوصول للعملاء المحتملين وبناء الثقه بينك وبين عملائك وتصدر قوائم المنافسين بطرق تحليله ومدروسة
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">استراتيجية تسويقية</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">استراتيجية تسويقية</span>
                  <span class="service__categories__category__items__item__desc">
                    نقوم بالدراسة وتحليل السوق وتحديد العملاء المستهدفين ووضع الاهداف لوضع الاستراتيجية التسويقيه التي تضمن لك وصول خدماتك ومنتجاتك للعملاء المستهدفين وتحقيق اهدافك
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">حملات اعلانية</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">حملات اعلانية</span>
                  <span class="service__categories__category__items__item__desc">
                    مثل فيسبوك وتويتر وانستجرام وجوجل بلس ويوتيوب.. كل هذه الوسائل وأكثر من خدمات التسويق عبر السوشيال ميديا التي يمكننا استخدامها لتسويق علامتك التجارية من خلالها وتُحقق تفاعلية كبيرة مع الجمهور المستهدف وتحقيق زيادة ملحوظة و سريعه في مبيعاتك
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">SEO</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">SEO</span>
                  <span class="service__categories__category__items__item__desc">
                    نقدم لك حلول لتحسين محركات البحث ليساعد في ظهور موقعك
                  </span>
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
            نساعدك في القيام بالعمليات وتنفيذ المهام المستخدمة لإنشاء والحفاظ على نمو الأعمال والقيمة على المدى الطويل
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">التنفيذ</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">التنفيذ</span>
                  <span class="service__categories__category__items__item__desc">
                    سوف نتعامل مع جميع جوانب التنفيذ وضمان سير العمل بشكل مستمر وسلس
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">التطوير</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">التطوير</span>
                  <span class="service__categories__category__items__item__desc">
                    لدينا فريق التطوير القادر على اكتشاف نقاط الضعف والعمل على تحسينها بطرق مدروسه ومتطوره والعمل على تطوير القوه
                  </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">الاستشارات</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">الاستشارات</span>
                  <span class="service__categories__category__items__item__desc">
                    سوف نقوم بتقييم سير العمل الخاص بك ونقدم لك أفضل الحلول التي تلبي جميع احتياجات عملك
                  </span>
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
              We are working on developing your website and mobile applications professionally with what suits your needs and the needs of your customers to reach the success you aspire to            </div>
          </div>
          <div class="col-md-8">
            <div class="service__categories__category__items">
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">Websites</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title"></span>
                    <span class="service__categories__category__items__item__desc">
                      Your website is the best one to talk about, explain your ideas, and introduce your products. But for this to happen, your website design must be attractive and easy to handle
                    </span>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">E-Commerce stores</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">E-Commerce stores</span>
                    <span class="service__categories__category__items__item__desc">
Do you have a commodity or products that you want to market and sell online, then the online store is the best solution for you and your customers.
                    </span>
                  </div>
                </div>
              </div>
              <div class="service__categories__category__items__item">
                <div class="service__categories__category__items__item__content">
                  <div class="service__categories__category__items__item__front">
                    <i class="fas fa-laptop"></i>
                    <span class="break"></span>
                    <span class="service__categories__category__items__item__title">Mobile applications</span>
                  </div>
                  <div class="service__categories__category__items__item__back">
                    <span class="service__categories__category__items__item__title">Mobile applications</span>
                    <span class="service__categories__category__items__item__desc">
Mobile applications enhance your reach to your customers in a deeper way, especially since mobile phones are closer to their owners than their family members, as recent market studies confirm.
                    </span>
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
            We are working on developing your website and mobile applications professionally with what suits your needs and the needs of your customers to reach the success you aspire to            </div>
          </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Websites</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title"></span>
                  <span class="service__categories__category__items__item__desc">
                      Your website is the best one to talk about, explain your ideas, and introduce your products. But for this to happen, your website design must be attractive and easy to handle
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">E-Commerce stores</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">E-Commerce stores</span>
                  <span class="service__categories__category__items__item__desc">
Do you have a commodity or products that you want to market and sell online, then the online store is the best solution for you and your customers.
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Mobile applications</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Mobile applications</span>
                  <span class="service__categories__category__items__item__desc">
Mobile applications enhance your reach to your customers in a deeper way, especially since mobile phones are closer to their owners than their family members, as recent market studies confirm.
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Design and Graphics</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            We focus on creating distinctive graphic designs in terms of beauty that attract attention and reach the goal of your brand to the target audience.  </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Social media designs</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Social media designs</span>
                  <span class="service__categories__category__items__item__desc">
Our designs are able to communicate your message and draw the attention of your potential customers and an essential tool for promoting your products
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Motion Graphics</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Motion Graphics</span>
                  <span class="service__categories__category__items__item__desc">
Motion graphics videos are one of the easiest marketing tools to present or introduce the idea of your project / company, which remains in the minds of your customers all the time.
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">UI/UX Designs</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">UI/UX Designs</span>
                  <span class="service__categories__category__items__item__desc">
The user experience is the most important part of any project due to its great impact on how the project runs
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Decoration</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            Creativity in creating exceptional ideas for interior design and decoration results from a passion for taking care of small details, art, we harness the spaces of the place to meet human needs, our advanced technical capabilities and our attention to aesthetic aspects rob places of their lives
          </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Interior Design</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Interior Design</span>
                  <span class="service__categories__category__items__item__desc">
We work as one of the leading companies in the field of interior design in the Kingdom of Saudi Arabia, we provide great services and designs that suit your taste and comfort.
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Exterior design</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Exterior design</span>
                  <span class="service__categories__category__items__item__desc">
The exterior design of villas and homes expresses from the first moment your special taste in front of the guests, so we work in cooperation with you to reach the exterior design that you dream of with the most skilled and skilled interior designers
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Executive Drawings</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Executive Drawings</span>
                  <span class="service__categories__category__items__item__desc">
They transform the ideas of interior and exterior designs into drawings that are executable on the ground.
                    </span>
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
            We have a team that is able to promote your products, strengthen your relationship with your current customers, reach potential customers, build trust between you and your customers, and issue lists of competitors in an analytical and thoughtful way. </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Marketing strategy</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Marketing strategy</span>
                  <span class="service__categories__category__items__item__desc">
We study and analyze the market, identify target customers and set goals to develop a marketing strategy that ensures that your services and products reach the target customers and achieve your goals
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Advertising campaigns</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Advertising campaigns</span>
                  <span class="service__categories__category__items__item__desc">
such as Facebook, Twitter, Instagram, Google Plus and YouTube.. All of these means and more than social media marketing services that we can use to market your brand through it and achieve great interaction with the target audience and achieve a noticeable and rapid increase in your sales
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">SEO</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">SEO</span>
                  <span class="service__categories__category__items__item__desc">
We offer you search engine optimization solutions to help your site appear easily in Google search engines, which helps to increase the number of visitors and potential customers for your business, so we adopt search engine optimization as an important element in our marketing strategy
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="strategy strategy-1 row">
        <div class="col-md-4">
          <div class="strategy__title">
            <span>Business development</span>
            <br>
            Services
          </div>
          <div class="strategy__desc">
            We help you run the processes and perform the tasks used to create and maintain long-term business growth and value   </div>
        </div>
        <div class="col-md-8">
          <div class="service__categories__category__items">
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Implementation</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Implementation</span>
                  <span class="service__categories__category__items__item__desc">
We will deal with all aspects of the implementation and ensure the workflow is continuous and smooth
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Development</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Development</span>
                  <span class="service__categories__category__items__item__desc">
We have a development team that is able to discover weaknesses and work to improve them in thoughtful and sophisticated ways and work to develop strength
                    </span>
                </div>
              </div>
            </div>
            <div class="service__categories__category__items__item">
              <div class="service__categories__category__items__item__content">
                <div class="service__categories__category__items__item__front">
                  <i class="fas fa-laptop"></i>
                  <span class="break"></span>
                  <span class="service__categories__category__items__item__title">Consulting</span>
                </div>
                <div class="service__categories__category__items__item__back">
                  <span class="service__categories__category__items__item__title">Consulting</span>
                  <span class="service__categories__category__items__item__desc">
We will evaluate your workflow and provide you with the best solutions that meet all your business needs
                    </span>
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