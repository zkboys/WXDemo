<template>
    <div class="splash">
        <img style="width: 187px; height: 66px" src="./xiaoyage.png"/>
    </div>
</template>
<style>
    .splash{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted(){
            setTimeout(() => {
                this.$router.replace('/')
            }, 3000);
        }
    }
</script>
