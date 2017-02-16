<template>
    <div class="wrapper" @click="update">
        <img :src="logoUrl" style="width:560px;height:60px;" class="logo"></img>
        <img class="logo" style="width:560px;height:560px;" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></img>
        <text class="title">Hello {{target}}</text>
    </div>
</template>
<style src="./style.css" scope></style>
<script>
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
