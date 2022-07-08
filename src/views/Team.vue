<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="team ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-2">الفريق</div>
          <div class="title">تعرف علي فريق نحن نعمل المميز</div>
          <div class="break"></div>
          <div class="desc">
            يتميز فريق نحن نعمل بالتخصص في مجال البرمجه واخرين في مجال التسويق واخرين في مجال الجرافيك ديزاين واخيرا في مجال الديكور ويتم تطوير الفريق بصفة مستمرة ويتم اختيارهذا الفريق بعنايه شديدة حسب مؤهلاتهم وخبراتهم في هذه المجالات ,حيث قدم الكثير من اعضاء الفريق مشاريع ناجحه للمؤسسات والشركات التي تعمل في كثير من المجالات ومنها شركات كبيره ومتوسطة وغيرها
          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../assets/img/team.webm" type="video/webm">
        </video>
      </div>

      <spinner v-if="is_loading"></spinner>
      <main v-else class="team-member">
        <div class="row justify-content-center"
             v-if="!is_loading && items.length > 0">
          <div v-for="user in items" :key="user.id"
               class="col-12 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img :src="user.photo">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">{{ user.job_title_ar }}</span>
                <span class="employee__details__sub-title">{{ user.job_description_ar }}</span>
                <span class="employee__details__name">{{ user.name_ar }}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>

    <div class="team en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="intro__content">
          <div class="title-3">Team</div>
          <div class="title">Get to know the We Work team</div>
          <div class="break"></div>
          <div class="desc">
            The team we work is characterized by specializing in the field of programming, others in the field of marketing, and others in the field of graphic design, and finally in the field of decoration. In many fields, including large and medium companies and others          </div>
        </div>
        <video preload="none" playsinline="" loop="" muted="" autoplay="autoplay" class="intro__video" __idm_id__="1507329">
          <source src="../assets/img/team.webm" type="video/webm">
        </video>
      </div>

      <spinner v-if="is_loading"></spinner>
      <main v-else class="team-member">
        <div class="row justify-content-center"
             v-if="!is_loading && items.length > 0">
        <div v-for="user in items" :key="user.id"
            class="col-12 col-md-4">
          <div class="employee">
            <div class="employee__img">
              <img :src="user.photo">
            </div>
            <div class="employee__details">
              <span class="employee__details__title">{{ user.job_title_en }}</span>
              <span class="employee__details__sub-title">{{ user.job_description_en }}</span>
              <span class="employee__details__name">{{ user.name_en }}</span>
            </div>
          </div>
          </div>
        </div>
      </main>

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
  name: "Team",
  components: {
    Spinner,
    SocialMedia,
    Footer, Navbar
  },
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      items: '',
    }
  },
  created() {
    window.scrollTo(0,0);
    this.loadTeamMembers();
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async loadTeamMembers() {
      this.is_loading = true;

      let myHeaders = new Headers();

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/user/get-teams", requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.items = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "../assets/css/typography";
@import "../assets/css/mixins";

.team {
  padding: 0;
}

.col-12, .col-md-4 {
  padding: 0;
}

.intro {
  margin-top: 4rem !important;
  position: relative;
  background-color: $color-primary;
  min-height: 30rem;

  &__video {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    transition: opacity 0.4s cubic-bezier(0.55, 0.17, 0.05, 0.85);
    object-fit: cover;
    object-position: 25% 10%;
  }

  &__content {
    color: $color-white;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 4rem 3.5rem;

    & .desc {
      width: 50%;
    }
  }
}

.team-member {
  padding: 2rem 4%;
}

.employee {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 7px 2px rgb(0 0 0 / 20%);
  margin: 2rem 1rem;

  &__img {
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;

    & img {
      width: 100%;
      padding: 5px;
      border-radius: 10px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: #00a3ff;
    }

    &__sub-title {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
      color: #003057;
      margin: 0;
    }

    &__name {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #003057;
      margin: 10px 0 15px;
    }
  }
}

@include respond(tab-port) {
  .title {
    font-size: 2.5rem;
  }

  .title-2 {
    font-size: 2rem;
  }

  .title-3 {
    font-size: 1.5rem;
  }

  .intro__content .desc {
    width: 100%;
  }

  .team-member {
    padding: 2rem 1%;
  }

}
</style>