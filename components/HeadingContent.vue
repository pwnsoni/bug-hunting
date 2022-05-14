<template>
    <p id="head1"> {{ content }} </p>    
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            required: false,
        }
    }
}
</script>

<style >
    #head1{
        font-size: 10vh;
        text-align: center;
        justify-content: center;
        margin-top: 5%;
    }
</style>

