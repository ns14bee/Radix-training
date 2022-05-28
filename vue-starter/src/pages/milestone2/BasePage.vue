<template>
    <el-container>
        <el-aside class="sideBar-body" >
            <sidebar class="sideBar" :title="title" :data="data" />
        </el-aside>
        <el-main class="mainBody">
            <router-view> </router-view>
        </el-main>
    </el-container>
</template>

<script>
import sidebar from '../../components/sidebar/SidebarComponent.vue'
export default {
    components:{
        sidebar
    },
    setup(){
        let title = 'Milestone2'
        let data = [
            {label:'Mixin & Store', link:'mixin-store'}
        ]
        return{
            title,
            data
        }
    }
}
</script>

<style scoped>
    .sideBar-body{
        width: 240px;
    }
    .sideBar{
        position: fixed !important;
        top: 7vh;
        left:0;
        height: 93vh;
        z-index: 99;
        min-width: 240px;
    }
    .mainBody{
        z-index: 98;
    }
    @media(max-width: 576px){
        .sideBar{
            height: 100%;
        }
    }

</style>