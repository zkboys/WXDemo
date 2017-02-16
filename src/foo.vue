<style scope>
</style>

<template>
    <div class="wrapper" @click="update">
        <image :src="logoUrl" class="logo"></image>
        <text class="title">Hello {{target}}</text>
    </div>
</template>

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
