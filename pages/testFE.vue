<template>
  <div>
    <Header />
    <IssuesNew />
    <Footer />
  </div>
</template>

<script>
import IssuesNew from '../components/IssuesNew.vue';
import ProjectNew from '../components/ProjectNew.vue';
export default {
    name: "IndexPage",
    components: { IssuesNew, ProjectNew }
}
</script>
