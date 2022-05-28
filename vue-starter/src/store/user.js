import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id:'user',
    state: () => ({
        count: 0
    }),
    persist:{
        key:'store-key',
        storage: window.localStorage,
        paths:['count']
    },
    getters:{
        getCount: (state) => {
            return state.count
        }
    },
    actions:{
        updateCount(){
            this.count += 1;
        }
    },

})