<template>
    <div class="header">
        <div class="left">
            <slot name="left">
                <text class="left-text">返回</text>
            </slot>
        </div>
        <div class="center">
            <text class="center-text">{{title}}</text>
        </div>
        <div class="right">
            <slot name="right">
                <text class="right-text">右侧</text>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .left, .header, .right{
    height: 50px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
    background-color: #f5f5f5;
    justify-content: center;
  }
  .header {
    flex-direction: row;
  }
  .left{
    position: absolute;
    left: 0;
  }
  .center {
    flex: 1;
    justify-content: center;
    align-items:center;
  }
  .right{
    position: absolute;
    right: 0;
    padding-right: 20px;
  }
  .left-text,.center-text,.right-text{
    font-size: 18px;
  }
</style>
