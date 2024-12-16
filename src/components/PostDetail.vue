<template>
    <div class="post-detail-container">
        <h2>{{ post.title }}</h2>
        <div v-html="post.content"></div>
        <div class="comments">
            <h3>评论区</h3>
            <CommentList :comments="post.comments" />
            <AddComment :postId="post.id" @newComment="addComment" />
        </div>
        <div class="sidebar">
            <h3>目录</h3>
            <div v-html="post.tableOfContents"></div>
            <h3>群聊</h3>
            <GroupChatList :groupChats="groupChats" />
        </div>
    </div>
</template>

<script>
import CommentList from './CommentList.vue'
import AddComment from './AddComment.vue'
import GroupChatList from './GroupChatList.vue'
import { getPostById, addCommentToPost } from '../services/api.js'

export default {
    components: {
        CommentList,
        AddComment,
        GroupChatList
    },
    data() {
        return {
            post: null,
            groupChats: []
        }
    },
    async mounted() {
        const postId = this.$route.params.id
        try {
            const postResponse = await getPostById(postId)
            this.post = postResponse.data
            // 假设获取群聊列表的API函数为getGroupChats
            const groupChatResponse = await getGroupChats()
            this.groupChats = groupChatResponse.data
        } catch (error) {
            console.error('获取帖子详情失败', error)
        }
    },
    methods: {
        addComment(comment) {
            // 这里需要更新本地的评论数据，并调用API将评论添加到后端
            this.post.comments.push(comment)
            // 调用后端API添加评论
            addCommentToPost(this.post.id, comment)
        }
    }
}
</script>

<style scoped>
.post-detail-container {
    display: flex;
    flex-direction: row;
}

.comments {
    flex: 1;
}

.sidebar {
    width: 300px;
    margin-left: 20px;
}
</style>