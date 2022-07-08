<template>
  <div>
    <b-modal id="modal" hide-footer title="نحن نعمل">
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('modal')">Close Me</b-button>
    </b-modal>

    <button @click="test">click</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  methods: {
    test() {
      this.$bvModal.show('modal');
    }
  }
}
</script>

<style scoped>

</style>