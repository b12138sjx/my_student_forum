//路由配置文件
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
// 其他视图导入

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/home', component: HomeView },
    // 其他路由配置，如帖子详情页、个人中心页等
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router