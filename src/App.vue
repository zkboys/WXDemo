<template>
    <div @androidback="back">
        <router-view></router-view>
        <drawer></drawer>
    </div>
</template>
<style>
  .weex-scroller-inner{
    background-color: #eeeeee;
  }
</style>
<script>
  import Drawer from './components/drawer.vue';
  export default {
    components: {Drawer},
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    created() {
        // 进入系统时，同步localStorage中存储信息到store中
        this.$store.dispatch('syncStateFromLocalStorage');
    },
  }

</script>
