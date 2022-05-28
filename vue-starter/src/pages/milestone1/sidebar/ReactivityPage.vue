<template>
    <div>
        <h1 class="p-t">{{title}}</h1>
        <hr>

        <!-- on click change reactive -->
        Reactive&colon;&nbsp;
        {{user.name}}
        <el-button type="success" @click="changeData">Click here</el-button>
        <hr>
        Ref&colon;&nbsp;
        <!-- on click change ref -->
        {{user2.name}}
        <el-button type="success" @click="changeData2">Click here</el-button>
        <hr>
    </div>
</template>

<script>
import { reactive, ref} from 'vue';
export default {
    setup(){
        let title = "Reactivity";
        let user = reactive({
            name: 'Niraj',
            age: 23
        })
        let user2 = ref({
            name: 'Sagar',
            age: 23
        })
        let changeData = () => {
            user?.name == "Niraj" ? user.name = 'Bee' : user.name = 'Niraj';
        }
        let changeData2 = () => {
            user2.value?.name == "Sagar" ? user2.value.name = 'Bsaga' : user2.value.name = 'Sagar';
        }
        return {
            title,
            user,
            user2,
            changeData,
            changeData2
        }
    }
}
</script>

<style scoped>
</style>