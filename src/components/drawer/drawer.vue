<template>
    <div class="drawer-wrapper" v-if="show">
        <div class="cover" ref="cover" @click="hideDrawer"></div>
        <scroller class="drawer" ref="drawer">
            <div class="drawer-header">
                <text class="user-name">{{userName}}</text>
                <text class="user-account">{{userAccount}}</text>
            </div>
            <div class="menu-item" v-for="menu in menus" @click="menuClick(menu.id)">
                <div v-if="menu.id === activeMenuId"  class="menu-item-active-bg"></div>
                <img v-if="menu.id === activeMenuId" :src="menu.iconActive" class="menu-item-icon"/>
                <img v-else :src="menu.icon" class="menu-item-icon"/>
                <text v-if="menu.id === activeMenuId" class="menu-item-text menu-item-text-active">{{menu.text}}</text>
                <text v-else class="menu-item-text">{{menu.text}}</text>
            </div>
        </scroller>
    </div>
</template>
<style src="./style.css" scope></style>
<script src="./script.js"></script>
