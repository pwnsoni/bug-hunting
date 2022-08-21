<template>

    <div>
        <b-card-group deck id="projects">
            
            <b-card bg-variant="light" class="text-center">
                <template #header>
                    <h6 class="mb-0"> Create a New Project</h6>
                </template>
                <b-card-text> Click me to create project and track bugs!</b-card-text>
            </b-card>
            
            <div v-for="proj in projects" :key="proj">
                <b-card bg-variant="light" class="text-center" @click="onClickProject(proj.title)">
                    <template #header>
                        <h6 class="mb-0">{{proj.title}}</h6>
                    </template>
                    <b-card-text>{{proj.description}}</b-card-text>
                </b-card>
            </div>
        </b-card-group>
    </div>

</template>


<script>

export default {
  computed: {
    projects () {
        return this.$store.state.projects;
    }
  },
  methods:{
    onClickProject(title){
        this.$router.push(`/projects/${title}`);
    }
  }
}
</script>


<style>
#projects{
    padding: 10%;
}
</style>

