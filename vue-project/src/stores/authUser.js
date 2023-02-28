import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { authenticate } from '../api/auth'
import { toastOptions } from '../globals'
import { router } from '../router/index'

export const authUser = defineStore('authUser', {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            isAuthenticated: !!localStorage.getItem('user')
        }
    }, 
    getters: {
        getUser: (state) => state.user,
        getIsAuthenticated: (state) => state.isAuthenticated
    },
    actions: {
        async authenticateUser(credentials) {
            try {
                const user = await authenticate(credentials)
                this.user = user.data
                localStorage.setItem('user', JSON.stringify(user.data))
                this.isAuthenticated = true
                router.push('/')
            } catch(err) {
                toast('Invalid credentials', toastOptions)
                this.isAuthenticated = false
                throw new Error(err.error.response.data.message)
            }
        },

        logout() {
            this.user = undefined
            this.isAuthenticated = false
            localStorage.removeItem('user')
            router.push('/login')
        }
    }
})