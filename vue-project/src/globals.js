import { toast } from 'vue3-toastify'

//default settings for toast
export const toastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT, 
    type: toast.TYPE.ERROR 
}

//api status 
export const STATUSES = {
    PENDING: 'pending', 
    LOADING: 'loading', 
    SUCCESS: 'success',
    ERROR: 'error'
}