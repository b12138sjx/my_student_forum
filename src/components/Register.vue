<template>
    <div class="register-container">
        <h2>注册你的账号</h2>
        <input type="text" v-model="username" placeholder="请输入用户名">
        <input type="password" v-model="password" placeholder="请输入密码">
        <input type="password" v-model="confirmPassword" placeholder="请再次输入密码">
        <input type="email" v-model="email" placeholder="请输入你的邮箱">
        <input type="text" v-model="emailCode" placeholder="验证码">
        <button @click="sendCode">发送验证码</button>
        <button @click="handleRegister">注册</button>
        <a href="/login">登录账号</a>
    </div>
</template>

<script>
import { register } from '../services/api.js'

export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            emailCode: '',
            codeSent: false,
            countdown: 60
        }
    },
    methods: {
        async sendCode() {
            // 发送验证码逻辑，这里简单打印，实际需调用后端API发送验证码
            console.log('发送验证码到', this.email)
            this.codeSent = true
            this.startCountdown()
        },
        startCountdown() {
            const interval = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--
                } else {
                    clearInterval(interval)
                    this.codeSent = false
                    this.countdown = 60
                }
            }, 1000)
        },
        async handleRegister() {
            if (this.password!== this.confirmPassword) {
                console.error('两次密码不一致')
                return
            }
            try {
                const userData = {
                    username: this.username,
                    password: this.password,
                    email: this.email
                }
                await register(userData)
                this.$router.push('/login')
            } catch (error) {
                console.error('注册失败', error)
                // 提示用户注册失败
            }
        }
    }
}
</script>

<style scoped>
.register-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>