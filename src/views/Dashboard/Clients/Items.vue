<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الصورة</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>
            <div class="table-img">
              <img src="../../../assets/img/clients/e.png">
            </div>
          </th>
          <th>
            <div class="table-action">
              <router-link to="/dashboard/clients/edit/4556"><i class="fas fa-edit"></i></router-link> |
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