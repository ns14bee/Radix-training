<template>
    <div>
        <h1 class="p-t" v-text="title"></h1>
        <hr>
        <div>
            <h3 class="s-t">v-html</h3>
            <div v-html="rawHTML"></div> 
        </div>
        <hr>
        <div>
            <h3 class="s-t">v-show</h3>
            <div v-show="rawHTML" class="p-t">If the v-html works then you should be able to see this message! </div> 
        </div>
        <hr>
        <div>
            <h3 class="s-t">v-if v-else</h3>
            <div v-if="rawHTML" class="p-t">If the v-html works then you should be able to see this message! </div> 
            <div v-else class="text-danger">If you are seeing this message theat means v-html doesn't work </div> 
        </div>
        <hr>
        <div>
            <h3 class="s-t">v-else-if</h3>
            <div v-if="count==0" class="p-t">A</div> 
            <div v-else-if="count==1" class="p-t">B</div> 
            <div v-else-if="count==2" class="p-t">C</div> 
            <div v-else class="p-t">D</div> 
            <el-button type="primary" @click="countPlus">Count+</el-button>
        </div>
        <hr>
        <div>
            <h3 class="s-t">v-for</h3>
            <div class="p-t">Displaying Objext</div>
            <table :style="styleBody">
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
                <tr v-for="(item,index) of obj" :key="index" :class="{'p-b':index%2==0, 'm-t': index%2==0}">
                    <td >{{item.name}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </table>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Dynamic Event</h3>
            <el-button type="success" @click="eventClick"> Click me</el-button> 
            <div id="dbl">{{dblClick}}</div>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Clicked Once</h3>
            <el-button type="danger" @click.once="eventClick"> Click me</el-button> 
            <div id="dbl">{{dblClick}}</div>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Multiple Events</h3>
            <el-input @keyup.up="KeyUp" @keyup.down="KeyDown" /> {{status}}
        </div>
        <hr>
        <div>
            <h3 class="s-t">Slot Demo</h3>
            <slot-demo class="s-t">
                <template v-slot:slot2>This value passed within slot-2</template>
                <template v-slot:slot1>This value passed within slot-1</template>               
            </slot-demo>
        </div>
        <hr>
        <div>
            <h3 class="s-t">Memo Demo</h3>
            <table :style="styleBody">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Status</td>
                </tr>
                <tr v-for="(item,index) of memoObj" :key="index" :class="{'p-b':index%2==0, 'm-t': index%2==0}">
                    <td >{{index}}</td>
                    <td >{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.status}}</td>
                    <td><el-button type="danger" :icon="Edit"  @click="ChangeValue(index,item.status)" cricle /> </td>
                </tr>
            </table>
        </div>
        <hr>
        <div>
            <h3 class="s-t">v-clock</h3>
            <div class="p-t" v-cloak>{{title}}</div>
        </div>
        <hr>
    </div>
</template>

<script>
import {
    ref,
    reactive
} from 'vue'
import SlotDemo from './SlotDemo.vue'
import {Edit}  from '@element-plus/icons-vue'
export default {
    components:{
        SlotDemo
    },
    setup(){
        let title = "Directives";
        let rawHTML = `<p class="p-t"><b>This is the example of the html directive </b></p>`
        let count = ref('0');
        let dblClick = ref('click')
        let dblEvent = ref('click')
        let status = ref('Untouched')
        let obj = [
            {name:"Niraj", age:"24"},
            {name:"Sagar", age:"24"},
            {name:"Harsh", age:"23"},
            {name:"Prit", age:"21"},
        ];
        let memoObj = reactive(
            [{name:"Niraj", age:"24", status:true},
            {name:"Sagar", age:"24", status:true},
            {name:"Harsh", age:"23", status:true},
            {name:"Prit", age:"21", status:true},]
        )
        let styleBody = "width:400px;border:1px solid black";
        let countPlus = () => {
            if(count.value>2){
                count.value = 0
            }else{

                count.value++
            }
        }
        let eventClick = () => {
            if(dblEvent.value =='dblClick'){
                dblEvent.value = "click"
                dblClick.value = "Clicked"
            }else{
                dblEvent.value = "dblClick"
                dblClick.value = "Double Clicked"
            }
        }
        let KeyUp = () => {
            status.value = "UP"
        }
        let KeyDown = () => {
            status.value = "Down"
        }
        let ChangeValue = (index,value) => {
            memoObj[index].status = !value
        }
        return {
            title,
            count,
            rawHTML,
            styleBody,
            obj,
            dblClick,
            status,
            dblEvent,
            memoObj,
            Edit,
            ChangeValue,
            countPlus,
            eventClick,
            KeyUp,
            KeyDown
        }
    }
}
</script>

<style scoped>
[v-cloak]{
    display: none;
}
</style>