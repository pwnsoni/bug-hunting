<template>

    <div>

        <BigButton button = "Create" />

        <b-card-group deck id="projects">
            
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
import BigButton from './BigButton.vue';

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
    },
    components: { BigButton }
}
</script>


<style>
#projects{
    /* margin: 5%; */
    padding: 3%;
}
</style>

