<template>

    <div id="mainDiv">
        <div id="cardContainer">
            <div id="card" v-for="proj in projects" :key="proj" @click="onClickProject(proj.title)">
                <p id="title">{{proj.projectId}}</p>
                <p id="description"> {{proj.description}} </p>
            </div>
            <div v-b-modal.modal-prevent-closing-createProject id="card">
                <p id="title">Initiate a new project!</p>
                <p id="description"> Click me to create a new project! </p>
            </div>
            <b-modal id="modal-prevent-closing-createProject" size="xl">
                <CreateProject />
                <template #modal-footer>
                    <span id="footerNotes"> Click outside the borders to close </span>
                </template>
            </b-modal>  
        </div>
    </div>

</template>


<script>

export default {
    computed: {
        projects() {
            return this.$store.state.projects;
        }
    },
    methods: {
        onClickProject(title) {
            this.$router.push(`/projects/${title}`);
        }
    }
}
</script>


<style>
#cardContainer{
    display: flex;
    padding: 5%;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 1%;
}

#card{
    display: flex;
    height: 300px;
    width: 280px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
}
#projects{
    /* margin: 5%; */
    padding: 3%;
}

#card:not(:first-child) {
    margin-left: -20px;
}

#card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
  background-color: #332c41;
}

#card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

#title {
  color: white;
  font-weight: 400;
  font-size: large;
  position: absolute;
  /* left: 50%; */
  top: 30%;
  padding-left: 5%;
}

#description {
  color: white;
  font-weight: 300;
  position: absolute;
  /* left: 50%; */
  top: 50%;
  padding-left: 5%;
}
</style>

