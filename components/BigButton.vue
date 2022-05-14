<template>
    <button id="button"> {{ button }} </button>    
</template>

<script>
export default {
    props: {
        button: {
            type: String,
            required: false,
        }
    }
}
</script>

<style >

    #button{
        width: 20%;
        padding: 1.5%;
        background: rgb(40, 41, 41);
        margin: 5%;
        transition: 0.3s;
        color: white;
        display: inline-block;
        font-size: 20px;
        border-block-color: white;
    }

    #button:hover{
        background: white;
        color: rgb(40, 41, 41);
        border-block-color: rgb(40, 41, 41);
    }
</style>

