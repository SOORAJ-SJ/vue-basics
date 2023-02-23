<script setup>
    import { ref } from 'vue';

    const count = ref(0);
</script>

<template>
    <h2>Counter</h2>
    <button type="button" class="btn" @click="count++">Click {{ count }}</button>
</template>

<style scoped>

</style>