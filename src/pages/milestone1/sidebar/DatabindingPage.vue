<template>
    <div>
        <h1 class="p-t">{{title}}</h1>
        <hr>
        <!-- class and style binding -->
        <div>Class binding&colon;&nbsp;<div :class="{[classBind]:isActive,borderBody:isActive }">{{title}}</div></div>
        
        <div>Class Array&colon;&nbsp;<div :class="[[classBind], borderBody, marginBody]">Array of class</div></div>
        <hr>
        <!-- link binding -->
        <div>Link binding&colon;&nbsp;<a :href="hyperLink" target="_blank"> Google</a></div>
    </div>
</template>

<script>
export default {
    setup(){
        let title = "Databinding";
        let classBind = "p-b s-t p-3";
        let isActive = true;
        let hyperLink = "http://www.google.co.in";
        return {
            title,
            classBind,
            hyperLink,
            isActive,
            borderBody: 'borderBody',
        }
    }
}
</script>

<style scoped>
    .borderBody{
        border: 1px solid red;
    }
</style>