<template>
    <div class="group-chat-container">
        <h2>{{ groupChat.name }}</h2>
        <ul>
            <li v-for="message in messages" :key="message.id">
                <span>{{ message.sender }}</span>
                <span>{{ message.createdAt }}</span>
                <div v-html="message.content"></div>
            </li>
        </ul>
        <input type="text" v-model="newMessage" placeholder="输入消息">
        <button @click="sendMessage">发送</button>
    </div>
</template>

<script>
import { getGroupChatMessages, sendGroupChatMessage } from '../services/api.js'

export default {
    data() {
        return {
            groupChat: null,
            messages: [],
            newMessage: ''
        }
    },
    async mounted() {
        const groupChatId = this.$route.params.id
        try {
            const response = await getGroupChatMessages(groupChatId)
            this.groupChat = response.data.groupChat
            this.messages = response.data.messages
        } catch (error) {
            console.error('获取群聊消息失败', error)
        }
    },
    methods: {
        async sendMessage() {
            const messageData = {
                content: this.newMessage
            }
            try {
                await sendGroupChatMessage(this.groupChat.id, messageData)
                this.newMessage = ''
                // 更新本地消息列表，可优化为实时获取最新消息
                const response = await getGroupChatMessages(this.groupChat.id)
                this.messages = response.data.messages
            } catch (error) {
                console.error('发送消息失败', error)
            }
        }
    }
}
</script>

<style scoped>
.group-chat-container {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
}
</style>