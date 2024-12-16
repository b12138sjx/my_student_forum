//封装与后端 API 交互的函数
import axios from 'axios'

const baseURL = 'http://your-backend-api-url' // 替换为实际后端API地址

export const login = (username, password) => {
    return axios.post(`${baseURL}/login`, { username, password })
}

export const register = (userData) => {
    return axios.post(`${baseURL}/register`, userData)
}

// 其他API函数，如获取帖子列表、创建帖子、点赞评论等
export const getPostList = () => {
    return axios.get(`${baseURL}/posts`)
}

export const createPost = (postData) => {
    return axios.post(`${baseURL}/posts`, postData)
}

// 依此类推，根据后端API定义封装其他函数