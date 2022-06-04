<template>
  <div class="social-media">
    <div class="social-media__initi-grad-bg"></div>
    <div class="social-media__content">
      <a href="https://www.instagram.com/we_work.pro/" target="_blank" class="social-media__content__button"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/channel/UCkdffzul5ViURf-vlrbC0bg" target="_blank" class="social-media__content__button"><i class="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com/company/weworksa/" target="_blank" class="social-media__content__button"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://twitter.com/Weworkpro" target="_blank" class="social-media__content__button"><i class="fab fa-twitter"></i></a>
      <a href="https://www.snapchat.com/add/weworkpro" target="_blank" class="social-media__content__button"><i class="fab fa-snapchat"></i></a>
      <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-whatsapp"></i></a>
    </div>
  </div>

</template>

<script>
export default {
  name: "SocialMedia"
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";

.social-media {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0, -35%);
  z-index: 1000;
  height: auto;
  width: auto;
  transition: 0.3s;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .5rem .5rem .8rem;
    background: white;
    border-radius: 0 .8rem 4rem 0 !important;
    background-position-x: 0 !important;
    background-size: 100% !important;
    box-shadow: 0 0 2rem #0000000d;
    position: relative;
    word-wrap: break-word;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: .5rem;
      color: $color-white;
      width: 2rem;
      height: 2rem;
      background: $color-grey-dark-2;
      border-radius: 10rem !important;
      text-decoration: none;
      text-decoration: none;

      &:hover {
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
        text-decoration: none;
      }
    }

    & i {
      font-size: 1.1rem;
      color: $color-white;
      transition: 0.4s all;
    }
  }

  &__initi-grad-bg {
    z-index: -1;
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
    display: block;
    height: 100%;
    position: absolute;
    top: .5rem;
    bottom: 0;
    border-radius: .5rem !important;
  }

}

</style>