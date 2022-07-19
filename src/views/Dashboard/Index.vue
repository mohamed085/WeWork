<template>
  <div class="ar home animate__animated animate__fadeInRight">
    <div class="side-bar animate__animated animate__fadeInRight" v-if="sidebar">
      <div class="side-bar__top">
        <router-link to="/">
          <img src="../../assets/img/logo_white.png">
        </router-link>
      </div>
      <div class="side-bar__items">
        <router-link to="/dashboard" class="side-bar__items__item" exact>الرئيسية</router-link>
        <router-link to="/dashboard/users" class="side-bar__items__item">المستخدمون</router-link>
        <router-link to="/dashboard/join" class="side-bar__items__item">الإنضمام</router-link>
        <router-link to="/dashboard/contact" class="side-bar__items__item">التواصل</router-link>
        <router-link to="/dashboard/projects" class="side-bar__items__item">المشاريع</router-link>
        <router-link to="/dashboard/clients" class="side-bar__items__item">العملاء</router-link>
        <router-link to="/dashboard/team" class="side-bar__items__item">الفريق</router-link>
        <router-link to="/dashboard/slider" class="side-bar__items__item">سليدر الصفحة الرئيسية</router-link>
      </div>
    </div>

    <div class="topbar" :class="sidebar ? 'main-sidebar-on' : 'main-sidebar-off'">
      <div class="topbar__right">
        <span class="topbar__icon" @click="closeSidebar()" v-if="sidebar"><i class="fas fa-times"></i></span>
        <span class="topbar__icon" @click="openSidebar()" v-else><i class="fas fa-align-justify"></i></span>
        <span class="topbar__logo">نحن نعمل</span>
      </div>
      <div class="topbar__left">
        <div @click="profileSetting()" class="topbar__profile">
          <span class="topbar__profile__name">{{ this.$store.getters.name }}</span>
          <b-avatar></b-avatar>
        </div>
        <div v-if="profile__setting" class="topbar__profile__setting">
          <router-link to="/" class="topbar__profile__setting__item">
            <i class="fas fa-user"></i>الصفحة الشخصية
          </router-link>
          <router-link to="/" class="topbar__profile__setting__item">
            <i class="fas fa-cog"></i>الإعدادات
          </router-link>
          <span class="topbar__profile__setting__item" @click="$store.dispatch('logout')">
            <i class="fas fa-sign-out-alt"></i>تسجيل الخروج
          </span>
        </div>
      </div>
    </div>

    <div class="main" :class="sidebar ? 'main-sidebar-on' : 'main-sidebar-off'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  data() {
    return {
      sidebar: (window.innerWidth > 900),
      profile__setting: false,
    }
  },
  created() {
    if (!this.$store.getters.is_authenticated) {
      router.push("/login")
    }
  },
  mounted() {
  },
  methods: {
    closeSidebar() {
      this.sidebar = false
    },
    openSidebar() {
      this.sidebar = true
    },
    profileSetting() {
      this.profile__setting = !this.profile__setting
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variables";
@import "../../assets/css/typography";
@import "../../assets/css/mixins";

.home {
  display: flex;
  font-size: 1rem;
}

.animate__animated .animate__fadeInRight {
  --animate-duration: .01s;
}

.side-bar {
  width: 250px;
  min-height: 100vh;
  height: 100%;
  background-color: #15283c;
  color: $color-white;
  box-shadow: 0 0 3px 0px rgb(0 0 0 / 40%);
  background-image: url(../../assets/img/pattern_h.png);
  z-index: 11;
  position: fixed;
  top: 0;
  right: 0;
  overflow-x: hidden;

  &__top {
    padding: 15px 25px;
    background: #214162;

    & img {
      width: 100%;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    margin-top: .5rem;

    &__item {
      padding: .7rem 1.5rem;
      text-decoration: none;
      color: $color-white;
      font-size: 1.1rem;
      cursor: pointer;

      &:hover,
      &.active,
      &.router-link-active {
        background-color: $color-white;
        color: #15283c;

      }
    }
  }
}

.main-sidebar-on {
  margin-right: 250px;
  width: calc(100% - 250px);
}

.main-sidebar-off {
  margin-right: 0;
  width: 100%;
}

.topbar {
  z-index: 2;
  background: #15283c;
  color: $color-white;
  transition: ease all 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  position: fixed;
  top: 0;

  &__right,
  &__left {
    display: flex;
    align-items: center;

  }

  &__icon {
    background-color: $color-primary;
    padding: 0 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 3.5rem;
  }

  &__logo {
    margin: 0 1rem;
    font-size: 1.4rem;
  }

  &__profile {
    background-color: $color-primary;
    padding: 0 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 3.5rem;
    position: relative;

    &__setting {
      z-index: 100;
      background-color: $color-white;
      position: absolute;
      top: 100%;
      left: 1rem;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      box-shadow: 0 0 1.1rem rgba(0,0,0,0.3);

      &__item {
        text-decoration: none;
        color: $color-black;
        padding: .2rem 1.5rem;

        &:hover {
          background: #15283c;
          color: $color-white;

        }

        & i {
          margin-left: .4rem;
        }
      }
    }
  }
}

.main {
  margin-top: 3.5rem;
  min-height: 100vh;
  padding: 2rem 5%;
  transition: all 0.3s;
}


</style>