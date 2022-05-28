<template>
    <div>
        <h1 class="p-t">{{title}}</h1>
        <hr>
        <div    >
            <h3 class="s-t">Method Handling</h3>
            <div class="d-flex align-items-center">
                <el-button type="success" class="fontWeight" :icon="Plus" @click="ChangeCounter(true)"/>
                <div class="p-3">{{count}}</div>
                <el-button type="danger" :icon="Minus" @click="ChangeCounter(false)" />
            </div>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Accessing Event Argument in Inline Handlers</h3>
            <el-button type="primary" class="m-2 p-2" @click="warn('Can\'t submit form yet!'),$event">Submit Special</el-button>
            <el-button type="success" class="m-2 p-2" @click="(event) => warn('Can\'t submit form yet!',event)">Submit Arrow</el-button>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Key Modifiers</h3>
            <div>Press PageUp and PageDown</div>
            <el-input  type="number" v-model="count" @keyup.page-up="onPageUp" @keyup.page-down="onPageDown" style="width:auto" /> 
        </div>
        <hr>
    </div>
</template>

<script>
import {ref} from 'vue';
import { Plus, Minus } from '@element-plus/icons-vue'
export default {
    setup(){
        let title = "Event Handling"
        let count = ref(0)
        let ChangeCounter = (value) => {
                if(value){
                    count.value++;
                }else{
                    count.value--;
                }
        }
        let warn = (message, event) => {
            // now we have access to the native event
            if (event) {
            event.preventDefault()
            }
            alert(message)
        }
        let onPageDown = () =>{
            count.value--;
        }
        let onPageUp = () =>{
            count.value++;
        }
        return {
            title,
            count,
            Plus,
            Minus,
            ChangeCounter,
            warn,
            onPageUp,
            onPageDown
        }
    }
}
</script>

<style scoped>
.fontWeight{
    color: white !important;
}
</style>