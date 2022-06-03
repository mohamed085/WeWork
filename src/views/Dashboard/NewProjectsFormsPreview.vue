<template>
  <div class="contact-form row">
    <div class="title-2">نموذج طلب عمل مشروع: 5</div>

    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>الإسم*</span>
        <b-form-input class="input" type="text" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>البريد الإلكتروني*</span>
        <b-form-input class="input" type="text" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>رقم الجوال*</span>
        <b-form-input class="input" type="text" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group">
        <span>اسم الشركة*</span>
        <b-form-input class="input" type="text" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <span>عنوان البريد الإلكتروني للشركة*</span>
        <b-form-input class="input" type="text" disabled></b-form-input>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <span>الفكرة*</span>
        <b-form-textarea class="input" rows="5" disabled></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProjectsFormsPreview"
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";
@import "../../assets/css/dashboard";

</style>