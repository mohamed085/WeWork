<template>
  <div>
    <div class="err" v-if="error">{{ error_message_ar }}</div>

    <b-modal id="modal" hide-footer title="نحن نعمل">
      <div class="d-block text-center">
        <h3 style="font-family: 'We work Bold'">هلا انت متاكد من انك تريد حذف {{ selectedId }}</h3>
      </div>
      <div class="d-flex modal-footer">
        <button class="btn" block @click="$bvModal.hide('modal')">لا</button>
        <button class="btn" block @click="deleteClient(selectedId)">نعم</button>
      </div>
    </b-modal>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">الصورة</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody v-if="!is_loading && items.length > 0">
        <tr v-for="client in items" :key="client.id">
          <th>{{ client.id }}</th>
          <th>
            <div class="table-img">
              <img :src="client.photo">
            </div>
          </th>
          <th>
            <div class="table-action">
              <i @click="deleteItem(client.id)" class="fas fa-trash-alt"></i>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
    </div>

    <div v-if="items.length < 1" class="title-4 text-center">
      لا يوجد عملاء
    </div>

    <spinner v-if="is_loading"></spinner>
  </div>
</template>

<script>
import Spinner from "@/components/ui/Spinner";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items",
  components: {
    Spinner
  },
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
    this.loadClients();
  },
  methods: {
    async loadClients() {
      this.is_loading = true;

      let myHeaders = new Headers();

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://api.we-work.pro/api/user/get-all-clients", requestOptions)
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
    async deleteClient(id) {
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

      let url = `https://api.we-work.pro/api/admin/auth/delete-client/` + id;

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

      await this.loadClients();
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