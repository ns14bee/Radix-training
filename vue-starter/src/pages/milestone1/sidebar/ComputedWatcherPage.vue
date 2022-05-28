<template>
    <div>
        <h1 class="p-t">{{title}}&nbsp;</h1>
        <hr>
        <div>
            <h3 class="s-t">Computed</h3>
            <div class="p-t">
                {{computedName}}
            </div>
            <div>
                <el-button type="danger" @click="changeName">Change</el-button> 
            </div>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Watcher</h3>
            <div >
                <el-input v-model="firstName"/> <label>{{firstName}}</label>
                <el-input v-model="lastName"/> <label>{{lastName}}</label>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import {
    ref,
    watch,
    computed
} from 'vue'
export default {
    setup(){
        let title = "Computed"
        let name = ref('Niraj')
        let firstName = ref('Niraj')
        let lastName = ref('Surati')
        let computedName = computed({
            get() {
                return name.value
            },
            set(value){
                name.value = value
            }
        })
        watch([firstName, lastName], (currentValue,oldValue) => {
            console.log(currentValue)
            console.log(oldValue)
        })
        let changeName = () => {
            computedName.value = computedName.value==="Niraj" ? computedName.value="Bee" : computedName.value ="Niraj"
        }
        return {
            title,
            computedName,
            firstName,
            lastName,
            changeName
        }
    }
}
</script>

<style scoped>
</style>