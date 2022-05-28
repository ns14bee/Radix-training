<template>
    <div>
        <!-- text interpolation -->
        <h1 class="p-t">{{title}}</h1>
        <hr>
        <h2 >{{msg}}</h2>
        <div>Text&nbsp;{{title}}&colon;&nbsp;<span class="p-b s-t">{{rawHtml}}</span></div>
        <hr>
        <!-- html interpolation -->
        <div>Html&nbsp;{{title}}&colon;&nbsp;<span class="p-t" v-html="rawHtml"></span></div>
        <hr>
        <!-- attribute bindings -->
        <div>Attribute&nbsp;{{title}}&colon;&nbsp;<span :id='id'>Dynamic ID</span></div>
        <div>Boolean Attribute&colon;&nbsp;<el-button type="primary"  size="large" :disabled="isDisabled">click me</el-button></div>
        <hr>
        <!-- Multiple attribute binding -->
        <div>Multiple Attribute&colon;&nbsp;<span v-bind="objAttr">Multiverse</span></div>
        <hr>
        <!-- Expression binding -->
        <div>Expression&colon;&nbsp;<span :id="id">{{ msg.split('').reverse().join('') }}</span></div>
    </div>
</template>

<script>
export default {
    setup(){
        let msg = "Hello world";
        let title = "Interpolation";
        let rawHtml = "<p> This is the interpolation topic. </p>";
        let id =  'dynamic-id';
        let isDisabled = true;
        let objAttr = {
            id: id,
            class: 's-b'
        }
        return {
            msg,
            rawHtml,
            title,
            id,
            isDisabled,
            objAttr
        }
    }
}
</script>
<style>
#dynamic-id{
    font-size: 20px;
    color: gray;
}

</style>