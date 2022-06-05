<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="title">انضم</div>
        <div class="title-3">
          إذا كنت تبحث عن فرصة عمل جديدة انضم إلينا وسوف نقوم بالرد قريبا
        </div>
        <div class="desc">
          نحن نرحب دائماً بكم
        </div>
      </div>

      <div class="contact__info">
        <div class="row">
          <div class="sent" v-if="sent">
            <div class="title-2 text-center">تم إرسال طلب التوظيف بنجاح.</div>
            <div class="title-3 text-center">سوف يصلك الرد قريبا.</div>
          </div>
          <div v-else class="col-12">
            <div class="contact__info__contact-form">
              <div class="contact__info__title">إنشاء سيرة ذاتية جديدة</div>
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
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>الوظيفة*</span>
                      <b-form-input class="input" type="tel" placeholder="الوظيفة" v-model="form.job" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>العنوان*</span>
                      <b-form-input class="input" type="tel" placeholder="العنوان" v-model="form.address" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <span>السيرة الذاتية*</span>
                      <b-form-file
                          class="file"
                          drop-placeholder="Drop file here..."
                          plain
                          required
                          v-model="form.cv"
                      ></b-form-file>
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
        <div class="title">Join</div>
        <div class="title-3">
          If you are looking for a new job opportunity join us we will reply
        </div>
        <div class="desc">
          We always welcome you
        </div>
      </div>

      <div class="contact__info">
        <div class="row">
          <div class="sent" v-if="sent">
            <div class="title-2 text-center">The job application has been sent successfully.</div>
            <div class="title-3 text-center">You will receive a reply soon.</div>
          </div>
          <div v-else class="col-12">
            <div class="contact__info__contact-form">
              <div class="contact__info__title">Create new CV</div>
              <spinner v-if="is_loading"></spinner>
              <b-form v-else @submit.prevent="submitForm">
                <div class="err" v-if="error">{{ error_message_en }}</div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Name*</span>
                      <b-form-input class="input" type="text" placeholder="Name" v-model="form.email" required></b-form-input>
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
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Job*</span>
                      <b-form-input class="input" type="tel" placeholder="Job" v-model="form.job" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <span>Address*</span>
                      <b-form-input class="input" type="tel" placeholder="Address" v-model="form.address" required></b-form-input>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <span>CV*</span>
                      <b-form-file
                          class="file"
                          drop-placeholder="Drop file here..."
                          plain
                          required
                          v-model="form.cv"
                      ></b-form-file>
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
        job: '',
        address: '',
        cv: '',
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

      let formdata = new FormData();
      formdata.append("name", this.form.name);
      formdata.append("email", this.form.email);
      formdata.append("phone", this.form.phone);
      formdata.append("job_title", this.form.title);
      formdata.append("resume", this.form.cv);
      formdata.append("job_description", this.form.job);
      formdata.append("address", this.form.address);

      let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/user/join-us", requestOptions)
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

.file {
  width: 100%;
  padding: 10px;
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