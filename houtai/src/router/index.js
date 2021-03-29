import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/login.vue"
Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "login"
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: "log/operLog",
            name: "conLog",
            component: () =>
                import ("../components/系统管理/conLog.vue")
        }, {
            path: "dict/page",
            name: "dict",
            component: () =>
                import ("../components/系统管理/dict.vue")
        }, {
            path: "menu/page",
            name: "menus",
            component: () =>
                import ("../components/系统管理/menu.vue")
        }, {
            path: "role/page",
            name: "roles",
            component: () =>
                import ("../components/系统管理/role.vue")
        }, {
            path: "log/loginLog",
            name: "uLog",
            component: () =>
                import ("../components/系统管理/uLog.vue")
        }, {
            path: "user/page",
            name: "users",
            component: () =>
                import ("../components/系统管理/user.vue")
        }, {
            path: "member/page",
            name: "member",
            component: () =>
                import ("../components/客户管理/member.vue")
        }, {
            path: "level/page",
            name: "level",
            component: () =>
                import ("../components/客户管理/memberLv.vue")
        }, {
            path: "integration/page",
            name: "integration",
            component: () =>
                import ("../components/客户管理/scoreJl.vue")
        }, {
            path: "mks/coupon",
            name: "memberYh",
            component: () =>
                import ("../components/客户管理/memberYh.vue")
        }, {
            path: "mks/coupon_history",
            name: "youhuijilu",
            component: () =>
                import ("../components/客户管理/youhuijilu.vue")
        }, {
            path: "car/car",
            name: "allcar",
            component: () =>
                import ("../components/租赁管理/allcar.vue")
        }, {
            path: "car/type",
            name: "cartype",
            component: () =>
                import ("../components/租赁管理/cartype.vue")
        }, {
            path: "car/typeConfig",
            name: "carconfig",
            component: () =>
                import ("../components/租赁管理/carconfig.vue")
        }, {
            path: "car/brand",
            name: "carbrand",
            component: () =>
                import ("../components/租赁管理/carbrand.vue")
        }, {
            path: "car/shop",
            name: "carshop",
            component: () =>
                import ("../components/租赁管理/carshop.vue")
        }, {
            path: "carComment/page",
            name: "carComment",
            component: () =>
                import ("../components/租赁管理/carComment.vue")
        }, {
            path: "order/page",
            name: "carorder",
            component: () =>
                import ("../components/租赁管理/carorder.vue")
        }, {
            path: "car/MaintainShop",
            name: "MaintainShop",
            component: () =>
                import ("../components/维护记录/MaintainShop.vue")
        }, {
            path: "maintainRecord",
            name: "maintainRecord",
            component: () =>
                import ("../components/维护记录/maintainRecord.vue")
        }, {
            path: "echarts/web-income-show",
            name: "webincomeshow",
            component: () =>
                import ("../components/统计处理/webincomeshow.vue")
        }, {
            path: "echarts/login-log-show",
            name: "loginlogshow",
            component: () =>
                import ("../components/统计处理/loginlogshow.vue")
        }, {
            path: "echarts/oper-log-show",
            name: "operlogshow",
            component: () =>
                import ("../components/统计处理/operlogshow.vue")
        }, {
            path: "mks/customer_issues",
            name: "customer_issues",
            component: () =>
                import ("../components/营销管理/customer_issues.vue")
        }, {
            path: "mks/advertise",
            name: "advertise",
            component: () =>
                import ("../components/营销管理/advertise.vue")
        }, {
            path: "mks/advertise_position",
            name: "advertise_position",
            component: () =>
                import ("../components/营销管理/advertise_position.vue")
        }, {
            path: "mks/",
            name: "mks",
            component: () =>
                import ("../components/营销管理/mks.vue")
        }]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }

]

const router = new VueRouter({
    routes
})

export default router