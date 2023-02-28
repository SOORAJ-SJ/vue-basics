<script>
    export default {
        props: ['post'],
        setup() {
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-title">{{ post.title }}</div>
        <div class="card-body">{{ post.body }}</div>
        <div class="card-footer">
            <div class="tags flex my-2">
                <span>Tags:</span><div class="chip me-1 ms-1" v-for="tag in post.tags">#{{ tag }}</div>
            </div>
            <div class="reactions">
                <span>Reactions: {{ post.reactions }}</span>
            </div>
        </div>
    </div>
</template>