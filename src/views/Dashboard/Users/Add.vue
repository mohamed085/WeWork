<template>
  <div>
    <b-form>
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="form-group">
            <span>الإسم</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>البريد الالكتروني</span>
            <b-form-input class="input" type="email"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الرقم السري</span>
            <b-form-input class="input" type="password"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الصورة</span>
            <b-form-file plain></b-form-file>
          </div>
        </div>
        <div class="col-12 justify-content-end">
          <b-button type="submit" class="btn">حفظ</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Add"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>