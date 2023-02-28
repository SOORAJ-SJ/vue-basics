<script setup>
    import { authUser } from '../stores/authUser';

    const state = authUser()
</script>

<template>
    <div class="header">
        <nav class="flex justify-content-between align-items-center">
            <div class="brand">
                <h1 class="m-0 td-underline">VU3</h1>
            </div>
            <ul class="nav-menu m-0 flex" v-if="state.isAuthenticated">
                <li class="nav-item flex align-items-center">
                    {{  `${state.user.firstName} ${state.user.lastName}` }}
                    <div class="user-active ms-1"></div>
                </li>
                <li>
                    <button @click="state.logout" class="ms-2">Logout</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .header {
        box-shadow: 0px -6px 11px 6px rgb(0 0 0 / 22%);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--background);
    }
    .header nav {
        padding: 2em;
    }
    .nav-menu {
        list-style-type: none;
    }
    .user-active {
        height: 0.5em;
        width: 0.5em;
        background-color: green;
        border-radius: 50%;
    }
</style>