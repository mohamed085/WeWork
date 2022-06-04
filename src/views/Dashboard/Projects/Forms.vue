<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">الإسم</th>
        <th scope="col">البريد الإلكتروني</th>
        <th scope="col">رقم الجوال</th>
        <th scope="col">اسم الشركة</th>
        <th scope="col">البريد الالكتروني الخاص بالشركة</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>1</th>
        <th>محمد عماد</th>
        <th>mohamed085@gmail.com</th>
        <th>01012703497</th>
        <th>We work</th>
        <th>mohamed085@gmail.com</th>
        <th>
          <div class="table-action">
            <router-link to="/dashboard/projects/forms/view/4556"><i class="fas fa-eye"></i></router-link> |
            <i class="fas fa-trash-alt"></i>
          </div>
        </th>
      </tr>
      </tbody>

    </table>
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