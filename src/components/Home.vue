<template>
    <div class="home-container">
        <Navbar />
        <div class="content">
            <SearchBar />
            <PostList :posts="postList" />
            <Sidebar />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import SearchBar from './SearchBar.vue'
import PostList from './PostList.vue'
import Sidebar from './Sidebar.vue'
import { getPostList } from '../services/api.js'

export default {
    components: {
        Navbar,
        SearchBar,
        PostList,
        Sidebar
    },
    data() {
        return {
            postList: []
        }
    },
    async mounted() {
        try {
            const response = await getPostList()
            this.postList = response.data
        } catch (error) {
            console.error('获取帖子列表失败', error)
        }
    }
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    display: flex;
    flex: 1;
}

/* 其他样式调整，根据实际设计需求 */
</style>