<template>
  <div>
    <div class="err" v-if="error">{{ error_message_ar }}</div>

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
        <tbody v-if="!is_loading && items.length > 0">
        <tr v-for="user in items" :key="user.id">
          <th>{{ user.id }}</th>
          <th>
            <div class="table-img-sm">
              <img :src="user.photo">
            </div>
          </th>
          <th>{{ user.name_ar }}</th>
          <th>{{ user.name_en }}</th>
          <th>{{ user.job_title_ar }}</th>
          <th>{{ user.job_title_en }}</th>
          <th>{{ user.job_description_ar }}</th>
          <th>{{ user.job_description_en }}</th>
          <th>
            <div class="table-action">
              <router-link :to="'/dashboard/team/edit/' + user.id"><i class="fas fa-edit"></i></router-link> |
              <i @click="deleteTeamMember(user.id)" class="fas fa-trash-alt"></i>
            </div>
          </th>
        </tr>
        </tbody>
      </table>

      <div v-if="items.length < 1" class="title-4 text-center">
        لا يوجد اعضاء في الفريق
      </div>

      <spinner v-if="is_loading"></spinner>

    </div>
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
    }
  },
  created() {
    this.loadTeamMembers();
  },
  methods: {
    async loadTeamMembers() {
      this.is_loading = true;

      let myHeaders = new Headers();

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://backend-elbanna.we-work.pro/api/user/get-teams", requestOptions)
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
    async deleteTeamMember(id) {
      this.is_loading = true;

      let myHeaders = new Headers();
      let token = this.$store.getters.token;
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://backend-elbanna.we-work.pro/api/admin/auth/delete-team-member/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.status) {
              this.error = true;
              this.error_message_ar = result.msg;
            }
          })
          .catch(error => {
            this.error = true;
            this.error_message_ar = error.message;
          });

      await this.loadTeamMembers();
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