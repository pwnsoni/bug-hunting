<template>

    <div id="mainDiv">
        <div id="cardContainer1">
            <div v-b-modal.modal-prevent-closing-createIssue id="card-vertical">
                <p id="title">Create an issue!</p>
                <p id="description"> Click me to track a new issue! </p>
            </div>
            <b-modal id="modal-prevent-closing-createIssue" size="xl">
                <CreateIssue />
                <template #modal-footer>
                    <span id="footerNotes"> Click outside the borders to close </span>
                </template>
            </b-modal>  
            <div id="card-vertical" v-for="issue in issues" :key="issue" @click="onClickIssue(issue.id)">
                <p id="title">{{issue.id}}</p>
                <p id="description"> {{issue.summary}} </p>
            </div>
            
        </div>
    </div>

</template>


<script>

export default {
    computed: {
        issues() {
            return this.$store.state.issues;
        }
    },
    methods: {
        onClickIssue(id) {
            this.$router.push(`/issues/${id}`);
        }
    }
}
</script>


<style scoped>

#mainDiv{
    display: flex;
    align-items: center;
    justify-content: center;
}

#cardContainer1{
    padding: 5%;
    padding-top: 1%;
}

#card-vertical{
    display: flex;
    height: 100px;
    width: 500px;
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

#card-vertical:not() {
    margin-left: -20px;
}

#card-vertical:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
  background-color: #332c41;
}

#card-vertical:hover ~ .card {
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
#footerNotes{
    color: rgb(236, 112, 112);
 }
</style>

