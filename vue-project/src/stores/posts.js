import { defineStore } from "pinia";
import { getPosts } from "../api/post.api";
import { toast } from 'vue3-toastify'
import { STATUSES, toastOptions } from "../globals";

export const posts = defineStore('posts', {
    state: () => {
        return {
            posts: [],
            total: 0,
            skip: 0,
            limit: 10,
            status: STATUSES.PENDING,
            nextPageStatus: STATUSES.PENDING
        }
    },

    getters: {
        getPosts: (state) => state.posts,
        getStatus: (state) => state.status,
        getSkip: (state) => state.skip,
        getNextPageStatus: (state) => state.nextPageStatus,
        getTotal: (state) => state.total
    },

    actions: {
        async fetchPosts(skip = 0) {
            try {
                skip == 0 
                    ? this.status = STATUSES.LOADING 
                    : this.nextPageStatus = STATUSES.LOADING
                const posts = await getPosts(this.limit, skip)
                skip == 0 
                    ? this.status = STATUSES.SUCCESS
                    : this.nextPageStatus = STATUSES.SUCCESS
                this.posts = [...this.posts, ...posts.data.posts]
                this.total = posts.data.total
                this.skip = skip
                this.limit = posts.data.limit
            } catch (err) {
                toast('Failed to fetch posts', toastOptions)
                skip == 0 
                    ? this.status = STATUSES.ERROR
                    : this.nextPageStatus = STATUSES.ERROR
                throw new Error('Failed to fetch posts!')
            }
        }
    }
})