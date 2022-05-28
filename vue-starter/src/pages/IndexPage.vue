<template>
    <div class="common-layout">
        <el-container>
            <el-header class="p-0">
                <navbar />  
            </el-header>
            <el-main class="p-0">
                <router-view> </router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Navbar from '../components/navbar/NavbarComponent.vue'
export default {
    components:{
        Navbar
    }
}
</script>

<style scoped>
</style>