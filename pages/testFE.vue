<template>
  <div>
    <Header />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Projects from '../components/Projects.vue';
export default {
    name: "IndexPage",
    components: { Projects }
}
</script>
