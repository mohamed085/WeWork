<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">الإسم بالعربي</th>
        <th scope="col">الإسم بالانجليزي</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>1</th>
        <th>البرمجيات</th>
        <th>Software</th>
        <th>
          <div class="table-action">
            <router-link to="/dashboard/projects/main-category/view/165533"><i class="fas fa-eye"></i></router-link> |
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
  name: "MainCategories"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>