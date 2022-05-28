<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#0b2c72"
        text-color="#f9f9f9"
        active-text-color="#43C6AC"
    >
        <!-- <el-menu-item index="0" @click="NavigateLink('home')">Home</el-menu-item>
        <el-menu-item index="1" @click="NavigateLink('milestone1')">Milestone1</el-menu-item>
        <el-menu-item index="2" @click="NavigateLink('milestone2')">Milestone2</el-menu-item>
        <el-menu-item index="3" @click="NavigateLink('exercise')">Exercise</el-menu-item> -->
        <el-menu-item  v-for="(item,index) of NavLink" :key="index.label" :index="item.link" @click="NavigateLink(item.link)">{{item.label}}</el-menu-item>
    </el-menu>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        console.log(router)
        const activeIndex = ref(router.currentRoute._value.matched[1].name)
        const NavigateLink = (link) => {
            router.push({name:link});
        }
        const NavLink = [
            {label: 'Home', link:'home'},
            {label: 'Milestone1', link:'milestone1'},
            {label: 'Milestone2', link:'milestone2'},
            {label: 'Exercise', link:'exercise'},
            ]
        return{
            activeIndex,
            NavigateLink,
            NavLink
        }
    },
};
</script>

<style scoped>
.el-menu-item{
    font-size: 20px;
    font-weight: bold;
}
.el-menu-demo{
    min-height: 7vh;
    z-index: 100;
    position: fixed;
    width: 100vw;
}
</style>
