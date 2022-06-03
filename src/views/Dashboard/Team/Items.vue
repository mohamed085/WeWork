<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الصورة</th>
          <th scope="col">الاسم بالعربي</th>
          <th scope="col">الاسم بالانجليزي</th>
          <th scope="col">الوظيفة بالعربي</th>
          <th scope="col">الوظيفة بالانجليزي</th>
          <th scope="col">وصف الوظيفة بالعربي</th>
          <th scope="col">وصف الوظيفة بالانجليزي</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>
            <div class="table-img-sm">
              <img src="../../../assets/img/clients/e.png">
            </div>
          </th>
          <th>محمد عماد</th>
          <th>مطور برامج</th>
          <th>مطور الواجهة الأمامية</th>
          <th>Mohamed Emad</th>
          <th>Software Developer</th>
          <th>Front-end developer</th>
          <th>
            <div class="table-action">
              <router-link to="/dashboard/team/edit/4556"><i class="fas fa-edit"></i></router-link> |
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
  name: "Items"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>