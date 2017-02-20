<template>
    <div class="wrapper">
        <menu-header title="标题啊">
            <div slot="left">
                <text>左侧了啊 </text>
            </div>
        </menu-header>
        <scroller class="content">
            <text>开始</text>
            <img style="width: 200px; height: 200px;" src="./8888.jpg"/>
            <div style="width: 100px; height: 1000px; background-color: blue"></div>
            <text>结束</text>
        </scroller>
    </div>
</template>
<script src="./script.js"></script>
<style scope>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .content {
    flex: 1;
    background-color: #eeeeee;
  }
</style>