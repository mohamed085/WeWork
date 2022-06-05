<template>
  <div>
    <div class="ar" v-if="getLang === 'ar'">
      <div class="row">
        <div v-if="sent" class="col-12 col-md-7 contact-form">
          <div class="title-2">تم إرسال طلب المشروع.</div>
          <div class="title-3">سوف يصلك الرد قريبا.</div>
          <div class="title-3">شكرا علي اختيارك لنا.</div>
        </div>
        <div v-else class="col-12 col-md-7 contact-form">
          <div class="title-2">هل تحتاج إلى برنامج من شأنه أن يفيد عملك؟</div>
          <div class="title-3">لنبدأ مشروعًا معًا.</div>
          <div class="row">
            <div class="col-12">
              <div class="contact__info__contact-form">
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
                        <span>رقم الجوال</span>
                        <b-form-input class="input" type="tel" placeholder="رقم الجوال" v-model="form.phone"></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>اسم الشركة</span>
                        <b-form-input class="input" type="tel" placeholder="اسم الشركة" v-model="form.company_name"></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>عنوان البريد الإلكتروني للشركة *</span>
                        <b-form-input class="input" type="text" placeholder="عنوان البريد الإلكتروني للشركة"  v-model="form.company_mail" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>صِف فكرتك*</span>
                        <b-form-textarea class="input" rows="5" v-model="form.idea" required></b-form-textarea>
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
        <div class="col-12 col-md-5 hide contact-img">
          <img src="../assets/img/contact-form_future-processing.jpg">
        </div>
      </div>
    </div>

    <div class="en" v-if="getLang === 'en'">
      <div class="row">
        <div v-if="sent" class="col-12 col-md-7 contact-form">
          <div class="title-2">Project request sent</div>
          <div class="title-3">You will receive a reply soon</div>
          <div class="title-3">Thank you for choosing us</div>
        </div>
        <div v-else class="col-12 col-md-7 contact-form">
          <div class="title-2">Need software that will benefit your business?</div>
          <div class="title-3">Let’s start a project together.</div>
          <div class="row">
            <div class="col-12">
              <div class="contact__info__contact-form">
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
                        <span>Phone</span>
                        <b-form-input class="input" type="tel" placeholder="Phone" v-model="form.phone"></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>Company name</span>
                        <b-form-input class="input" type="tel" placeholder="Company name" v-model="form.company_name"></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>Company e-mail address*</span>
                        <b-form-input class="input" type="text" placeholder="Company e-mail address" v-model="form.company_mail" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>Describe your idea*</span>
                        <b-form-textarea class="input" rows="5" v-model="form.idea" required></b-form-textarea>
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
        <div class="col-12 col-md-5 hide contact-img">
          <img src="../assets/img/contact-form_future-processing.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  name: "ProjectMessage",
  components: {
    Spinner
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
        company_name: '',
        company_mail: '',
        idea: ''
      }
    }
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

      console.log(this.form)

      this.is_loading = false;
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/mixins";

.col-md-7,
.col-md-5 {
  padding: 0;
}

.contact-img img {
  width: 100%;
  height: 100%;
}

.contact-form {
  background-color: $color-primary-dark-1;
  color: $color-white;
  padding: 5rem 4% 5rem 7%;
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
  margin-top: 1rem;
  background-color: $color-white;
  border: 1px solid $color-white !important;
  padding: 9px 78px;
  border-radius: 30px !important;
  font-weight: 500;
  font-size: 1rem;
  color: $color-primary-dark-1;

  &:hover,
  &:checked,
  &:active,
  &:any-link {
    background-color: $color-primary-dark-1;
    border: 1px solid $color-white !important;
    color: $color-white;

  }
}


@include respond(tab-port) {
  .hide {
    display: none;
  }

}
</style>