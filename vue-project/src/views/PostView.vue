<script setup>
    import { storeToRefs } from 'pinia';
    import { onMounted, computed } from 'vue';
    import Post from '../components/Post.vue';
    import { posts } from '../stores/posts';
    import { STATUSES } from '../globals'
    import Loader from '../components/Loader.vue'

    const postStore = posts()
    const { getPosts, getStatus, getSkip, getNextPageStatus, getTotal } = storeToRefs(postStore)
    const loadingButtonText = computed(() => getNextPageStatus.value == STATUSES.LOADING ? 'Loading...' : 'Load more')

    onMounted(async () => {
        try {
            await postStore.fetchPosts()
            console.log(getPosts.value)
        } catch (err) {
            console.log(err)
        }
    })
</script>

<template>
    <div v-if="getStatus == STATUSES.PENDING || getStatus == STATUSES.LOADING">
        <Loader>Waiting for posts...</Loader>
    </div>
    <div v-else-if="getStatus == STATUSES.ERROR" class="p-4 text-center">
        <p class="m-1">Failed to fetch posts!</p>
        <button class="block m-auto" @click="postStore.fetchPosts()">Try again!</button>
    </div>
    <div v-else>
        <Post v-for="post of getPosts" :post="post" :key="post.id" />
        <div class="pb-4">
            <button 
            v-if="getPosts.length != getTotal"
            class="m-auto block" 
            @click="postStore.fetchPosts(getSkip + 1)"
            :disabled="getNextPageStatus == STATUSES.LOADING">
                {{ loadingButtonText }}
            </button>
        </div>
    </div>
</template>