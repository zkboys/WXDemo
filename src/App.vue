<template>
    <div @androidback="back">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
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
