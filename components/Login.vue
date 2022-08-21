<template>
    <b-modal
      id="modal-prevent-closing-signin"
      ref="modal"
      title="Please enter your credentials"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Enter your email and password"
          label-for="input"
          invalid-feedback="Both are required"
        >
          <b-form-input
            id="email-input"
            placeholder="Email here"
            v-model="userName"
            required
          ></b-form-input>
          <b-form-input
            id="password-input"
            placeholder="Password here"
            type="password"
            v-model="password"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

</template>


<script>
export default {
  data() {
      return {
        userName: '',
        password: ''
      }
  },
  methods: {
    resetModal() {
      this.userName = ''
      this.password = ''
    },
    handleOk() {
      // Prevent modal from closing
      this.$store.dispatch('INITIATE_SESSION', {userName: this.userName})
      this.$router.push('/')
      this.resetModal();
    },
    
  }
}
</script>