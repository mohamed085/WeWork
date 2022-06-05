<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="login ar" v-if="getLang === 'ar'">
      <b-form class="login__form" @submit.prevent="login">
        <div class="title-3 text-center">سجل دخول الان</div>
        <div class="err" v-if="error">{{ error_message_ar }}</div>
        <spinner v-if="is_loading"></spinner>
        <div v-else>
          <div class="col-12">
            <div class="form-group">
              <span>البريد الإلكتروني</span>
              <b-form-input class="input" type="email" v-model="email" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>الرقم السري</span>
              <b-form-input class="input" type="password" v-model="password" required></b-form-input>
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <b-button type="submit" class="btn">تسجيل الدخول</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div class="login en" v-if="getLang === 'en'">
      <b-form class="login__form" @submit.prevent="login">
        <div class="title-3 text-center">Login now</div>
        <div class="err" v-if="error">{{ error_message_en }}</div>
        <spinner v-if="is_loading"></spinner>
        <div v-else>
          <div class="col-12">
            <div class="form-group">
              <span>Email</span>
              <b-form-input class="input" type="email" v-model="email" required></b-form-input>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <span>Password</span>
              <b-form-input class="input" type="password" v-model="password" required></b-form-input>
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <b-button type="submit" class="btn">Login</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <div class="space"></div>
    <Footer></Footer>

  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
import router from "@/router";
import Spinner from "@/components/ui/Spinner";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    Spinner,
    SocialMedia,
    Footer,
    Navbar
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      error_message_en: '',
      email: '',
      password: ''
    }
  },
  created() {
    window.scrollTo(0,0);

    if (this.$store.getters.is_authenticated) {
      router.push("/dashboard")
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async login() {
      this.is_loading = true;
      this.error = false;

      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })

        console.log("asd")
        await router.push('/dashboard')
      } catch (e) {
        console.log(e.message)
        this.error = true
        this.error_message_ar = "اسم المستخدم او الرقم السري غير صحيح من فضلك تاكد من البيانات.";
        this.error_message_en = "The username or password is incorrect, please check the data.";
      }

      this.is_loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";
@import "../assets/css/dashboard";

.login {
  margin: 4rem 0 0;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    width: 60%;
    padding: 3rem 2rem;
    box-shadow: 0 0 1.1rem rgba(0,0,0,0.3);
  }
}

@include respond(tab-port) {
  .login__form {
    width: 100%;
  }
}
</style>