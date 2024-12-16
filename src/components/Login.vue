<template>
    <div class="login-container">
        <h2>登录你的账号</h2>
        <input type="text" v-model="username" placeholder="请输入用户名">
        <input type="password" v-model="password" placeholder="请输入密码">
        <button @click="handleLogin">登录</button>
        <a href="/register">注册账号</a>
        <a href="/forgot-password">忘记密码</a>
    </div>
</template>

<script>
import { login } from '../services/api.js'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async handleLogin() {
            try {
                const response = await login(this.username, this.password)
                // 假设后端登录成功返回包含用户信息和JWT令牌的对象
                const { user, token } = response.data
                // 存储用户信息和令牌，例如使用Vuex或本地存储
                this.$store.commit('setUser', user)
                localStorage.setItem('token', token)
                this.$router.push('/home')
            } catch (error) {
                console.error('登录失败', error)
                // 提示用户登录失败
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>