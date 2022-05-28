<template>
    <div class="p-t">Home</div>
    <el-form
        ref="formRef"
        :model="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
    >
        <el-form-item
            prop="email"
            label="Email"
            :rules="[
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                },
            ]"
        >
            <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :key="domain.key"
            :label="'Domain' + index"
            :prop="'domains.' + index + '.value'"
            :rules="{
                required: true,
                message: 'domain can not be null',
                trigger: 'blur',
            }"
        >
            <el-input v-model="domain.value" />
            <el-button class="mt-2" @click.prevent="removeDomain(domain)"
                >Delete</el-button
            >
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)"
                >Submit</el-button
            >
            <el-button @click="addDomain">New domain</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import { FormInstance } from "element-plus";
export default {
    setup() {
        const formRef = ref(FormInstance);
        const dynamicValidateForm = reactive({
            domains: [
                {
                    key: 1,
                    value: "",
                },
            ],
            email: "",
        });

        const removeDomain = (item) => {
            const index = dynamicValidateForm.domains.indexOf(item);
            if (index !== -1) {
                dynamicValidateForm.domains.splice(index, 1);
            }
        };

        const addDomain = () => {
            dynamicValidateForm.domains.push({
                key: Date.now(),
                value: "",
            });
        };

        const submitForm = (formEl) => {
            if (!formEl) return;
            formEl.validate((valid) => {
                if (valid) {
                    console.log("submit!");
                } else {
                    console.log("error submit!");
                    return false;
                }
            });
        };

        const resetForm = (formEl) => {
            if (!formEl) return;
            formEl.resetFields();
        };
        return{
            formRef,
            dynamicValidateForm,
            removeDomain,
            addDomain,
            submitForm,
            resetForm,
        }
    }
    
};
</script>

<style scoped></style>
