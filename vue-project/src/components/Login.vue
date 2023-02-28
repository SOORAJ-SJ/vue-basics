<script setup>
    import { ref, reactive, computed } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import { authUser } from '../stores/authUser'

    const store = authUser()
    let loading = ref(false)
    const loginForm = reactive({
        username: "",
        password: ""
    })

    const loginButtonText = computed(() => loading.value ? 'Loading...' : 'Login')

    const rules = computed(() => ({
        username: { required, $autoDirty: true },
        password: { required, $autoDirty: true }
    }))

    const v$ = useVuelidate(rules, loginForm)


    async function handleSubmit() {
        const result = await v$.value.$validate()
        if (!result) return
        try {
            loading.value = true
            await store.authenticateUser(loginForm)
            loading.value = false
        } catch (err) {
            loading.value = false
        }
    }
</script>

<template>
    <form @submit.prevent="handleSubmit()">
        <div class="form">
            <div class="form-group">
                <label for="username">
                    Username
                </label>
                <input type="text" id="username" name="username" v-model="loginForm.username">
                <div v-if="v$.username.$error">
                    Username is required
                </div>
            </div>
            <div class="form-group">
                <label for="password">
                    Password
                </label>
                <input type="password" id="password" name="password" v-model="loginForm.password">
                <div v-if="v$.password.$error">
                    Password is required
                </div>
            </div>
            <button type="submit" :disabled="v$.$invalid || loading">
                {{ loginButtonText }}
            </button>
        </div>
    </form>
</template>

<style scoped>
    
</style>