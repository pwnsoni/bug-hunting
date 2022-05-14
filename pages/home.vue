<template>
  <div>
    <Header />


    <HeadingContent content = "Welcome back to your hunt!" />

    <div id = "centered" v-b-modal.modal-prevent-closing>
        <BigButton button = "Admin"/>
        <BigButton button = "Developer"/>
    </div>

    <b-modal
      id="modal-prevent-closing"
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
          :state="nameState"
        >
          <b-form-input
            id="email-input"
            placeholder="Email here"
            v-model="email"
            :state="nameState"
            required
          ></b-form-input>
          <b-form-input
            id="password-input"
            placeholder="Password here"
            type="password"
            v-model="password"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <Footer />
  </div>
</template>


<script>
export default {
//   computed: {
//     cnt () {
//       return this.$store.state.counter;
//     }
//   },
  data() {
      return {
        email: '',
        password: '',
        nameState: null,
        submittedNames: []
      }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style>
#container{
    width: 100%;
        text-align: center;
        justify-content: center;
        /* padding: 10px; */
        word-spacing: 15px;
}
</style>
