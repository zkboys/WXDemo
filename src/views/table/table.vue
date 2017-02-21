<template>
    <div class="wrapper">
        <menu-header title="座位列表"></menu-header>
        <div class="tab-head">
            <template v-for="tab in tabs">
                <div v-if="currentTab !== tab.id" class="tab-item" @click="handleTabClick(tab.id)">
                    <text class="tab-item-text tab-item">{{tab.text}}</text>
                </div>
                <div v-if="currentTab === tab.id" class="tab-item tab-item-active">
                    <text class="tab-item-text tab-item-text-active">{{tab.text}}</text>
                </div>
            </template>
        </div>
        <template v-for="tab in tabs">
            <scroller class="tab-content" v-if="currentTab === tab.id">
                <text>{{tab.text}}, {{currentTab}}, {{tab.id}}</text>
            </scroller>
        </template>
    </div>
</template>
<style src="./style.css" scope></style>
<script src="./script.js"></script>
