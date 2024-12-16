<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <div>
                <span>作者：{{ post.author }}</span>
                <span>发布时间：{{ post.createdAt }}</span>
                <span>点赞数：{{ post.likeCount }}</span>
                <span>评论数：{{ post.commentCount }}</span>
            </div>
            <button @click="goToPostDetail(post.id)">查看详情</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        posts: Array
    },
    methods: {
        goToPostDetail(postId) {
            this.$router.push(`/post/${postId}`)
        }
    }
}
</script>

<style scoped>
/* 帖子列表样式调整 */
</style>