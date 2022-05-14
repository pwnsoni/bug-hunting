<template>
    <div id="footer">

            <div id="icons_style">
                <b-icon icon="facebook" scale="1.5"></b-icon>
                <b-icon icon="github" scale="1.5"></b-icon>
                <b-icon icon="linkedin" scale="1.5"></b-icon>
            </div>  

            <div id="centered"> Made with 
                    <b-icon
                        icon="heart-fill"
                        variant="dark"
                        scale="0.75"
                    ></b-icon> 
      by Nuxt </div>

            
            
            
            
    </div>
</template>

<style >
    #centered{
        width: 100%;
        text-align: center;
        justify-content: center;
        padding: 10px;
    }

    #icons_style{
        width: 100%;
        text-align: center;
        justify-content: center;
        /* padding: 10px; */
        word-spacing: 15px;
    }
    #footer{
        min-width: 100%;
        position: relative;
        bottom: 0;
    }
</style>

