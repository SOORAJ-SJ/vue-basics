<script setup>
  import Header from './components/Header.vue';
  import { authUser } from './stores/authUser';
  const state = authUser()
</script>

<template>
  <Header />
  <router-view></router-view>
</template>