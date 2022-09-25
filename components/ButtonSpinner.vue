<template>
    <div id="centerThisDiv">
        <b-button type="submit" id="spinButton" disabled>
        <b-spinner small type="grow"></b-spinner>
            Loading...
        </b-button>
    </div> 
</template>

<script>
export default {
}
</script>

<style >

    #spinButton{
        background-color: #dad4e6;
        color: #17141d;
        border: none;
        padding: 15px 32px;
        margin: 2%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        width: 50%;
        transition: 0.6s;
    }
</style>




