<template>
  <div>
    <b-form>
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="form-group">
            <span>ال id</span>
            <b-form-input class="input" type="text" disabled></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالعربي</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الإسم بالانجليزي</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالعربي</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالعربي</span>
            <b-form-input class="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>وصف الوظيفة بالانجليزي</span>
            <b-form-input class="input" type="text"></b-form-input>
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
  name: "Edit"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>