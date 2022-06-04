<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الوجو</th>
          <th scope="col">الاسم بالعربي</th>
          <th scope="col">الاسم بالانجليزي</th>
          <th scope="col">الوصف بالعربي</th>
          <th scope="col">الوصف بالانجليزي</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>
            <div class="table-img-sm">
              <img src="../../../../assets/img/clients/e.png">
            </div>
          </th>
          <th>Mobile Phone Application</th>
          <th>تطبيقات الهاتف الجوال</th>
          <th>Mobile Phone Application</th>
          <th>تطبيقات الهاتف الجوال</th>
          <th>
            <div class="table-action">
              <router-link to="/dashboard/projects/item/view/4556"><i class="fas fa-eye"></i></router-link> |
              <router-link to="/dashboard/projects/sub-categories/edit/98465"><i class="fas fa-edit"></i></router-link> |
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
@import "../../../../assets/css/variables";
@import "../../../../assets/css/mixins";
@import "../../../../assets/css/dashboard";

</style>