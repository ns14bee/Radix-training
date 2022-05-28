<template>
    <div>
        <h1 class="p-t">{{title}}&nbsp;</h1>
        <hr>
        <div class="p-t">onBeforeMount&colon;&nbsp;<span class="s-t">{{name}}</span></div>
        <hr>
        <div class="p-t">onMounted&colon;&nbsp;<span class="s-t">{{name}}</span></div>
        <hr> 
        <div class="p-t">onUpdated&colon;&nbsp; {{count}}
            <el-input name="inputValue" v-model="inputValue" />
            <el-button @click="onChangeValue">Update</el-button>
            <span class="s-t">{{name}}</span>
        </div>
        <hr> 
    </div>
</template>

<script>
import {
    ref,
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
    onUnmounted,
    onUpdated
} from 'vue'
export default {
    setup(){
        let title = "Lifecycle";
        let count = ref('0');
        let name = ref('')
        let inputValue = ref('');
        onMounted(() => {
            name.value = 'Niraj Surati';
            console.log(`onmounted ${name.value}`)
        })
        onBeforeMount(() => {
            name.value = "Bee"
            console.log(`onBeforeMount ${name.value}`)
        })
        onUnmounted(() => {
            console.log(`onUnmounted ${name.value}`)
            name.value = ""
            console.log(`onUnmounted ${name.value}`)
        })
        onBeforeUnmount(() => {
            console.log(`onBeforeUnmount ${name.value}`)
            name.value = "No name"
            console.log(`onBeforeUnmount ${name.value}`)
        })
        onUpdated(() => {
            console.log(`onUpdated ${name.value}`)
        })
        const onChangeValue =() => {
            name.value = inputValue.value
            inputValue.value = ''
            count.value++
        }
        return {
            count,
            title,
            name,
            inputValue,
            onChangeValue
        }
    }
}
</script>

<style scoped>
</style>