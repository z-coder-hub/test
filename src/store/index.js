import {createPinia, defineStore} from 'pinia'

const pinia = createPinia()

const useUser =  defineStore('abc', {
    state: () => {
        return {
            num: 1
        }
    },
    getters:{

    },
    actions:{
        changeNum(data){
            this.num += data
        }
    }
})

export {useUser}
export default pinia