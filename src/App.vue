<template>
  <div id="app">
      <header>
          <router-link to="/" class="logo">论坛名称</router-link>
          <nav>
              <router-link to="/Users/sjx/my_student_forum/src/components/Login.vue" exact>首页</router-link>
              <router-link to="/create-post">发帖</router-link>
              <router-link to="/personal-center">个人中心</router-link>
              <!-- 根据用户登录状态显示不同的导航链接 -->
              <span v-if="isLoggedIn">
                  <router-link to="/group-chat">群聊</router-link>
                  <button @click="logout">退出登录</button>
              </span>
              <span v-else>
                  <router-link to="/login">登录</router-link>
                  <router-link to="/register">注册</router-link>
              </span>
          </nav>
      </header>
      <main>
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
      isLoggedIn() {
          return this.user!== null
      }
  },
  methods: {
      logout() {
          // 清除用户信息，例如从Vuex中移除用户数据并清除本地存储中的令牌
          this.$store.commit('setUser', null)
          localStorage.removeItem('token')
          this.$router.push('/login')
      }
  },
  created() {
      // 在这里可以进行一些初始化操作，如检查用户登录状态等
  }
}
</script>

<style lang="scoped">
#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

main {
  flex: 1;
  padding: 20px;
}
</style>