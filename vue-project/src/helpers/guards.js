import { authUser } from "../stores/authUser"

//prevent unauthenticated users from accessing protected routes
export const authGuard = (to, from) => {
    const state = authUser()
    if (to.name !== 'login' && !state.getIsAuthenticated)
        return { name: 'login' }
}

//prevent authenticated users from accessing unauthenticated pages
export const loginGuard = (to, from) => {
    const state = authUser()
    if (state.getIsAuthenticated)
        return { name: 'home' }
}