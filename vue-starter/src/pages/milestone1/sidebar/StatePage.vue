<template>
    <div>
        <h1 class="p-t">{{title}}</h1>
        <hr>
        <h2 class="s-b m-t">Store using pinia and persistent store</h2>
        <hr>
        <h2 class="s-t">Computed&colon;&nbsp;{{countGet}}</h2>
        <h2 class="s-t">StoreToRef:{{count}}</h2>
        <h2 class="s-t">Direct:{{dirCount}}</h2>
        <el-button type="primary" @click="changeStore"> Click me</el-button>
        <hr>
    </div>
</template>

<script>
import {storeToRefs} from 'pinia'
import { computed} from 'vue';
import {useUserStore} from '../../../store/user'
export default {
    setup(){
        let title = "State Management";
        let userStore = useUserStore();
        let dirCount = userStore.count;
        let {count} = storeToRefs(userStore)
        let countGet = computed(() => userStore.count)
        const changeStore = () => {
            userStore.updateCount(); 
        }
        return {
            title,
            changeStore,
            userStore,
            countGet,
            count,
            dirCount

        }
    }
}
</script>

<style scoped>
</style>