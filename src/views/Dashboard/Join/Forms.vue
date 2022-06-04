<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الإسم</th>
          <th scope="col">البريد الإلكتروني</th>
          <th scope="col">رقم الجوال</th>
          <th scope="col">الوظيفة</th>
          <th scope="col">السيرة الذاتية</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>محمد عماد</th>
          <th>mohamed085@gmail.com</th>
          <th>01012703497</th>
          <th>Software developer</th>
          <th>
            <div class="table-action">
              <i class="fas fa-download"></i>
            </div>
          </th>
          <th>
            <div class="table-action">
              <i class="fas fa-trash-alt"></i>
            </div>
          </th>
        </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forms"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>