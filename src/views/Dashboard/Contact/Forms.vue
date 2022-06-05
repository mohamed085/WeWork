<template>
  <div>
    <div class="err" v-if="error">{{ error_message_ar }}</div>

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
        <tbody v-if="!is_loading && items.length > 0">
        <tr v-for="form in items" :key="form.id">
          <th>{{ form.id }}</th>
          <th>{{ form.name }}</th>
          <th>{{ form.email }}</th>
          <th>{{ form.phone }}</th>
          <th>{{ form.title }}</th>
          <th>
            <div class="table-action">
              <router-link :to="'/dashboard/contact/view/' + form.id"><i class="fas fa-eye"></i></router-link> |
              <i @click="deleteForm(form.id)" class="fas fa-trash-alt"></i>
            </div>
          </th>
        </tr>
        </tbody>

      </table>

    </div>

    <div v-if="items.length < 1" class="title-4 text-center">
      لا يوجد طلبات تواصل
    </div>

    <spinner v-if="is_loading"></spinner>

  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forms",
  components: {Spinner},
  data() {
    return {
      is_loading: false,
      error: false,
      error_message_ar: '',
      items: '',
    }
  },
  created() {
    this.loadForms();
  },
  methods: {
    async loadForms() {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/admin/auth/get-all-contact-us", requestOptions)
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
    async deleteForm(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/delete-contact-us/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then()
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadForms();
      this.is_loading = false;
    },
  }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
@import "../../../assets/css/mixins";
@import "../../../assets/css/dashboard";

</style>