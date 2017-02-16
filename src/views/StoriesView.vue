<template>
    <scroller>
        <text>{{dishCart.message}}</text>
        <text @click="setMessage">设置信息</text>
        <loading class="loading" @loading="onloading" :display="showLoading">
            <text class="indicator">Loading ...</text>
        </loading>
    </scroller>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    data () {
        return {
            message: '测试vuex'
        }
    },

    computed: {
        ...mapState([
            'app',
            'dishCart',
        ])
    },

    methods:{
    ...mapActions([
            'hideDishDetail',
            'setCartDish',
            'getDishDetail',
            'startPointAnimate',
        ]),
            setMessage(){
                this.setCartDish('设置一二');
            },
            onloading (event) {
                modal.toast({ message: 'loading', duration: 1 })
                this.showLoading = 'show'
                setTimeout(() => {
                  const length = this.lists.length
                  for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                    this.lists.push(i + 1)
                  }
                  this.showLoading = 'hide'
                }, 1500)
            }
        },

    created () {
    }
  }




</script>

<style scoped>
  .stories-view {
    height: 100%;
  }
  .story-cell {
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }
  .loading {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
  }




</style>
