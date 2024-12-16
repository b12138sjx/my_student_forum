<!-- <template>
    <div class="personal-center-container">
        <div class="header">
            <img :src="user.avatar" alt="头像">
            <h2>{{ user.username }}</h2>
            <p>{{ user.description }}</p>
            <button @click="editProfile">编辑个人资料</button>
        </div>
        <div class="tabs">
            <span @click="activeTab = 'posts'" :class="{ active: activeTab === 'posts' }">我的帖子</span>
            <span @click="activeTab = 'favorites'" :class="{ active: activeTab === 'favorites' }">收藏</span>
            <span @click="activeTab = 'comments'" :class="{ active: activeTab === 'comments' }">评论</span>
        </div>
        <div class="content">
            <div v-if="activeTab === 'posts'">
                <PostList :posts="user.posts" />
            </div>
            <div v-if="activeTab === 'favorites'">
                <FavoriteList :favorites="user.favorites" />
            </div>
            <div v-if="activeTab === 'comments'">
                <CommentList :comments="user.comments" />
            </div>
        </div>
        <div class="statistics">
            <p>被访问量：{{ user.visitCount }}</p>
            <p>文章数量：{{ user.postCount }}</p>
            <p>总浏览量：{{ user.totalViewCount }}</p>
            <p>点赞量：{{ user.likeCount }}</p> -->