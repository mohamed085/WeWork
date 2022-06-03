<template>
  <div class="contact-forms">
    <div class="title-2">طلبات التواصل</div>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الإسم</th>
          <th scope="col">البريد الإلكتروني</th>
          <th scope="col">رقم الجوال</th>
          <th scope="col">عنوان الرسالة</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>محمد عماد</th>
          <th>mohamed085@gmail.com</th>
          <th>01012703497</th>
          <th>استفسار</th>
          <th>
            <div class="table-action">
              <router-link to="/dashboard/contact-forms/4556"><i class="fas fa-eye"></i></router-link> |
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
  name: "ContactForms"
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
@import "../../assets/css/mixins";
@import "../../assets/css/dashboard";

</style>