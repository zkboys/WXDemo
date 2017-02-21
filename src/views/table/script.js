import MenuHeader from '../../components/menu-header.vue'
const animation = weex.requireModule('animation');

export default{
    components: {MenuHeader},
    data(){
        return {
            currentTab: 'vip',
            tabs: [
                {
                    id: 'all',
                    text: '全部',
                },
                {
                    id: 'vip',
                    text: 'VIP区域',
                },
                {
                    id: 'summer',
                    text: '夏季区',
                },
                {
                    id: 'summer1',
                    text: '夏季区1',
                },
                {
                    id: 'summer2',
                    text: '夏季区2',
                },
                {
                    id: 'summer3',
                    text: '夏季区3',
                },
            ]
        }
    },
    methods: {
        handleTabClick(tabId){
            this.currentTab = tabId;
        },
    },
    mounted(){
    },
}