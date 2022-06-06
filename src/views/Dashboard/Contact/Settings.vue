<template>
  <div>
    <div class="err">لا تعمل الان</div>

    <b-form>
      <div class="row pe-3 ps-3">
        <div class="col-12">
          <div class="form-group">
            <span>العنوان بالعربي</span>
            <b-form-input className="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>العنوان بالإنجليزي</span>
            <b-form-input className="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوصف بالعربي</span>
            <b-form-input className="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <span>الوصف بالإنجليزي</span>
            <b-form-input className="input" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-12 justify-content-end">
          <b-button type="submit" className="btn">حفظ</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settings"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>