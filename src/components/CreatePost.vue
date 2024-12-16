<template>
    <div class="create-post-container">
        <h2>发布新帖子</h2>
        <input type="text" v-model="title" placeholder="标题">
        <markdown-editor v-model="content"></markdown-editor>
        <input type="file" @change="handleFileUpload">
        <button @click="handleCreatePost">发布</button>
    </div>
</template>

<script>
import MarkdownEditor from './MarkdownEditor.vue'
import { createPost } from '../services/api.js'

export default {
    components: {
        MarkdownEditor
    },
    data() {
        return {
            title: '',
            content: '',
            attachment: null
        }
    },
    methods: {
        handleFileUpload(event) {
            this.attachment = event.target.files[0]
        },
        async handleCreatePost() {
            const formData = new FormData()
            formData.append('title', this.title)
            formData.append('content', this.content)
            if (this.attachment) {
                formData.append('attachment', this.attachment)
            }
            try {
                await createPost(formData)
                this.$router.push('/home')
            } catch (error) {
                console.error('发布帖子失败', error)
            }
        }
    }
}
</script>

<style scoped>
.create-post-container {
    width: 600px;
    margin: 0 auto;
    padding: 20px;
}
</style>