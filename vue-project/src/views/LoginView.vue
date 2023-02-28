<script setup>
    import Login from '@/components/Login.vue'
</script>

<template>
    <div class="login-wrapper grid place-content-center vh-full">
        <div class="login-container">
            <div class="login-lead">
            <h1 class="m-0 td-underline">Login</h1>
            </div>
            <div class="login-form">
                <Login />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .login-container {
        padding: 1em;
        min-width: 300px;
    }
    .login-form {
        margin: 0.5em 0;
    }
    .login-container h1 {
        font-size: 3.5rem;
    }
</style>