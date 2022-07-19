<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="title">تواصل بنا</div>
        <div class="title-3">
          هل لديك فكرة عن حل تكنولوجيا المعلومات أو تبحث عن الإلهام؟
        </div>
        <div class="title-3">
          اتصل بنا ومعا يمكننا إنشاء الحل الذي تحتاجه.
        </div>
        <div class="desc">
          نحن نرحب دائماً بتعاونك معنا ومشاركتنا كل مقترحاتك. يمكنك الاتصال بنا وستسعدنا خدمتك
        </div>
      </div>

        <div class="contact__info">
          <div class="row">
            <div class="col-12">
              <div class="sent" v-if="sent">
                <div class="title-2 text-center">تم إرسال طلب التواصل بنجاح.</div>
                <div class="title-3 text-center">سوف يصلك الرد قريبا.</div>
              </div>
              <div v-else class="contact__info__contact-form">
                <div class="contact__info__title">نموذج التواصل الالكتروني</div>
                <spinner v-if="is_loading"></spinner>
                <b-form v-else @submit.prevent="submitForm">
                  <div class="err" v-if="error">{{ error_message_ar }}</div>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>الإسم*</span>
                        <b-form-input class="input" type="text" placeholder="الإسم" v-model="form.name" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>البريد الإلكتروني*</span>
                        <b-form-input class="input" type="email" placeholder="البريد الإلكتروني" v-model="form.email" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>رقم الجوال*</span>
                        <b-form-input class="input" type="tel" placeholder="رقم الجوال" v-model="form.phone" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>عنوان الرسالة*</span>
                        <b-form-input class="input" type="text" placeholder="عنوان الرسالة" v-model="form.title" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>الرسالة*</span>
                        <b-form-textarea class="input" rows="5" v-model="form.message" required></b-form-textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group form-group-btn">
                        <button type="submit" class="form-btn">إرسال</button>
                      </div>
                    </div>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>

    </div>

    <div class="en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="title">Contact</div>
        <div class="title-3">
          Have an idea for an IT solution or looking for inspiration?
        </div>
        <div class="title-3">
          Contact us and together we can create the solution you need.
        </div>
        <div class="desc">
          We always welcome your cooperation with us and share all your suggestions. You can contact us and we will be happy to serve you        </div>
      </div>

      <div class="contact__info">
        <div class="row">
          <div class="col-12">
            <div class="sent" v-if="sent">
              <div class="title-2 text-center">The contact request has been sent successfully.</div>
              <div class="title-3 text-center">You will receive a reply soon.</div>
            </div>
            <div v-else class="contact__info__contact-form">
              <div class="contact__info__title">Contact Form</div>
              <spinner v-if="is_loading"></spinner>
              <b-form v-else @submit.prevent="submitForm">
                <div class="err" v-if="error">{{ error_message_en }}</div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Name*</span>
                      <b-form-input class="input" type="text" placeholder="Name" v-model="form.name" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Email*</span>
                      <b-form-input class="input" type="email" placeholder="Email" v-model="form.email" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Phone*</span>
                      <b-form-input class="input" type="tel" placeholder="Phone" v-model="form.phone" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <span>Message title*</span>
                      <b-form-input class="input" type="text" placeholder="Message title" v-model="form.title" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <span>Message*</span>
                      <b-form-textarea class="input" rows="5" v-model="form.message" required></b-form-textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group form-group-btn">
                      <button type="submit" class="form-btn">Send</button>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
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
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {
    Spinner,
    SocialMedia,
    Footer, Navbar
  },
  data() {
    return {
      is_loading: false,
      sent: false,
      error: false,
      error_message_ar: '',
      error_message_en: '',
      form: {
        name: '',
        email: '',
        phone: '',
        title: '',
        message: '',
      }
    }
  },
  created() {
    window.scrollTo(0,0)
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async submitForm() {
      this.is_loading = true;
      this.error = false;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "name": this.form.name,
        "email": this.form.email,
        "phone": this.form.phone,
        "title": this.form.title,
        "msg": this.form.message
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/user/contact-us", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
              this.error_message_en = result.msg;
            } else {
              this.sent = true;
            }

          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";

.contact {
  margin-top: 4rem;
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

.contact {

  &__info {
    padding: 0 10%;

    &__title {
      margin-bottom: 40px;
      font-size: 22px;
      font-weight: 500 !important;
      color: #016b68;
      line-height: 1.4;
    }

    &__contact-info {
      padding: 30px 25px;
      background-color: #dfe8e8;
      height: 100%;
      border-radius: 4px !important;

      &__detail {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;

        & span {
          font-size: 16px;
          color: #016b68;
          font-weight: 400;
          line-height: 1.5;
        }

        & p {
          font-size: 16px;
          color: #434343;
          font-weight: 500 !important;
          padding: 5px 0 0;
        }
      }
    }

    &__contact-form {
      padding: 30px 25px;
      background-color: #dfe8e8;
      height: 100%;
      border-radius: 4px !important;
    }
  }

}

.form-group {
  padding: 10px 5px;

  & span {
    color: #6F7070;
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
  }

  & .input {
    padding: 10px 13px;
    border-radius: 10px !important;
    box-shadow: 0 0 20px #0000000d;
    height: auto;
    background: #f5f7f7;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #ffffff;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: #fff;
      outline: 0;
      box-shadow: 0 0 0 1px $color-primary-dark-1 !important;
      border-color: $color-primary-dark-1;
    }
  }
}

.form-group-btn {
  display: flex;
  justify-content: end;
}

.form-btn {
  color: #fff;
  background-color: $color-primary-dark-1;
  border: 1px solid $color-primary-dark-1 !important;
  padding: 9px 78px;
  border-radius: 30px !important;
  font-weight: 500;
  font-size: 1rem;

  &:hover,
  &:checked,
  &:active,
  &:any-link {
    color: $color-primary-dark-1;
    background-color: #fff;
    border: 1px solid $color-primary-dark-1 !important;

  }
}


@include respond(tab-port) {
  .intro .title-3,
  .intro .desc {
    text-align: center;
    padding: 0 5%;
  }
}
</style>