<template>
  <div>
    <div class="err" v-if="error">{{ error_message_ar }}</div>

    <b-modal id="modal" hide-footer title="نحن نعمل">
      <div class="d-block text-center">
        <h3 style="font-family: 'We work Bold'">هلا انت متاكد من انك تريد حذف {{ selectedId }}</h3>
      </div>
      <div class="d-flex modal-footer">
        <button class="btn" block @click="$bvModal.hide('modal')">لا</button>
        <button class="btn" block @click="deleteSubCategories(selectedId)">نعم</button>
      </div>
    </b-modal>

    <div class="col-12">
      <div class="err">في حاله حذف فئه فرعية سوف يتم حف كل المشاريع الموجوده بها</div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الصورة الاساسية</th>
          <th scope="col">الاسم بالعربي</th>
          <th scope="col">الاسم بالانجليزي</th>
          <th scope="col">العنوان الاول بالعربي</th>
          <th scope="col">العنوان الاول بالانجليزي</th>
          <th scope="col">العنوان الثاني بالعربي</th>
          <th scope="col">العنوان الثاني بالانجليزي</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody v-if="!is_loading && items.length > 0">
        <tr v-for="category in items" :key="category.id">
          <th>{{ category.id }}</th>
          <th>
            <div class="img">
              <img :src="category.main_photo">
            </div>
          </th>
          <th>{{ category.sub_category_name_ar }}</th>
          <th>{{ category.sub_category_name_en }}</th>
          <th>{{ category.title1_ar }}</th>
          <th>{{ category.title1_en }}</th>
          <th>{{ category.title2_ar }}</th>
          <th>{{ category.title2_en }}</th>
          <th>
            <div class="table-action">
              <router-link :to="'/dashboard/projects/item/items/' + category.id"><i class="fas fa-eye"></i></router-link> |
              <router-link :to="'/dashboard/projects/sub-categories/edit/' + category.id"><i class="fas fa-edit"></i></router-link> |
              <i @click="deleteItem(category.id)" class="fas fa-trash-alt"></i>
            </div>
          </th>
        </tr>
        </tbody>

      </table>
    </div>

    <div v-if="items.length < 1" class="title-4 text-center">
      لا يوجد فئات فرعية في هذ القسم
    </div>


    <spinner v-if="is_loading"></spinner>

  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items",
  components: {Spinner},
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      items: '',
      selectedId: ''
    }
  },
  created() {
    this.loadSubCategories(this.$route.params.id);
  },
  methods: {
    async loadSubCategories(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/user/get-sub-categories/` + id

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {

            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            } else {
              this.items = result.data;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      this.is_loading = false;
    },
    deleteItem(id) {
      this.selectedId = id;
      this.$bvModal.show('modal');
    },
    async deleteSubCategories(id) {
      this.$bvModal.hide('modal');
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/delete-sub-category/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then()
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadSubCategories(this.$route.params.id);
      this.is_loading = false;
    },

  }

}
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/variables";
@import "../../../../assets/css/mixins";
@import "../../../../assets/css/dashboard";

</style>