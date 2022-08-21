<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/"> Bug </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em class="h4 mb-2"> <b-icon icon="person-fill"></b-icon> </em>
            </template>
            <b-dropdown-item @click="signIn()" v-if="!this.isActiveSession">Sign In</b-dropdown-item>
            <b-dropdown-item  href="#"> {{activeUser}} </b-dropdown-item>
            <b-dropdown-item @click="signOut()" v-if="this.isActiveSession">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>


<script>
export default {
  computed: {
    isActiveSession () {
        return this.$store.state.isActiveSession;
    },
    activeUser() {
        return this.$store.state.activeUser;
    }
  },
  methods: {
    signIn () {
        let data = {"userName": "pwnsoni"};
        this.$store.dispatch('INITIATE_SESSION', data)
        this.$router.push('/')
    },

    signOut () {
        confirm('Clicked Sign Out')
        this.$store.dispatch('RESET_SESSION')
    }
  }
}
</script>
