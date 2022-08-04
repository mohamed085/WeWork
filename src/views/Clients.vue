<template>
  <div>
    <SocialMedia></SocialMedia>
    <Navbar></Navbar>

    <div class="clients ar" v-if="getLang === 'ar'">
      <div class="intro">
        <div class="title">عملاءنا</div>
        <div class="title-2">
          استكشف دراسات حالة تطوير البرمجيات من الشركات التي تواجه تحديات مماثلة
        </div>
        <div class="desc">
          عملائنا الكرام سنعدكم كما وعدنا عملائنا السابقين والحاليين بتجربه رائعة سنوفر بها احتياجاتكم وسنسعى لتحقيق اهدافكم مع فريق متميز ورائع مثل فريق نحن نعمل ,كما سنعدكم بتوفير الحلول لجميع المشكلاتو دعم فنى متاح على مدار الساعة للرد عليكم وحل مشاكلهم
        </div>
      </div>
    </div>

    <div class="clients en" v-if="getLang === 'en'">
      <div class="intro">
        <div class="title">Our Clients</div>
        <div class="title-2">
          Explore software development case studies from companies with similar challenges
        </div>
        <div class="desc">
          Our valued customers, we will promise you, as we promised our former and current customers, a wonderful experience, we will provide your needs and we will strive to achieve your goals with a distinguished and wonderful team like the team we work, and we will also promise you to provide solutions to all problems and technical support is available around the clock to respond to you and solve their problems        </div>
      </div>
    </div>

    <spinner v-if="is_loading"></spinner>

    <div v-if="!is_loading && items.length > 0" class="clients-items row">
      <div v-for="client in items" :key="client.id"
           class="clients-items__item col-12 col-md-4">
        <img :src="client.photo">
      </div>

    </div>

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
  name: "Clients",
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
    this.loadClients();
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    async loadClients() {
      this.is_loading = true;

      let myHeaders = new Headers();

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/user/get-all-clients", requestOptions)
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

.clients {
  margin: 4rem 0 0;
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

.clients-items {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  padding: 0 5%;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 0 3rem;
    height: 250px;

    & img {
      max-height: 100%;
      max-width: 100%;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}



@include respond(tab-port) {
  .intro .title-2,
  .intro .desc {
    width: 92%;
  }

  .clients-items__item {
    height: 200px;
  }
}
</style>