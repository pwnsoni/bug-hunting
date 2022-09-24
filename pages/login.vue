<template>
  <div>
    <Header />


    <HeadingContent content = "Login to begin your hunt!" />

    <div id = "centered" >
        <BigButton v-b-modal.modal-prevent-closing-signin1 button = "Admin"/>
        <BigButton v-b-modal.modal-prevent-closing-signin1 button = "Developer"/>
    </div>

    <b-modal id="modal-prevent-closing-signin1" size="xl">
      <LoginNew />
      <template #modal-footer>
        <span id="footerNotes"> Click outside the borders to close </span>
      </template>
    </b-modal>  

    <Login />

    <Footer />
  </div>
</template>


<script>
import Login from '../components/Login.vue'
export default {
    //   computed: {
    //     cnt () {
    //       return this.$store.state.counter;
    //     }
    //   },
    data() {
        return {
            email: "",
            password: "",
            nameState: null,
            submittedNames: []
        };
    },
    components: { Login }
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
#footerNotes{
    color: rgb(236, 112, 112);
 }
</style>
