<template>
	<div>
		<h1 class="p-t">{{ title }}&nbsp;</h1>
		<hr />
		<div>
			<h3 class="s-t">Mixin demo for calculator</h3>
			<el-form
				ref="refForm"
				:model="formVal"
				:rules="rules"
				label-width="auto"
				label-position="left"
				class="form-body m-2"
			>
				<el-form-item label="Value 1:" prop="value1">
					<el-input
						type="number"
						v-model="formVal.value1"
						class="w-auto"
					/>
				</el-form-item>
				<el-form-item label="Value 2:" prop="value2">
					<el-input
						type="number"
						v-model="formVal.value2"
						class="w-auto"
					/>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submit(refForm)"
						>Calculate</el-button
					>
					<el-button @click="resetCalc(refForm)">Reset</el-button>
				</el-form-item>
				<div v-if="display" class="s-b">
					<div class="p-t pm">
						Addition: <span class="m-t">{{ addition }}</span>
					</div>
					<div class="p-t pm">
						Subtraction:
						<span class="m-t">{{ subtraction }}</span>
					</div>
					<div class="p-t pm">
						Multiplication:
						<span class="m-t">{{ multiplication }}</span>
					</div>
					<div class="p-t pm">
						Division: <span class="m-t">{{ division }}</span>
					</div>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from "vue";
import { FormInstance, ElMessage } from "element-plus";
import CalcMixin from "../../../mixins/CalcMixin.js";
export default {
	setup() {
		let display = ref(false);
		let refForm = ref(FormInstance);
		let title = "Mixin";
		let { formVal, addition, subtraction, multiplication, division } =
			CalcMixin();
		let rules = reactive({
			value1: [
				{
					required: true,
					message: "Please input value 1",
					trigger: "blur",
				},
			],
			value2: [
				{
					required: true,
					message: "Please input value 2",
					trigger: "blur",
				},
			],
		});
		const ErrorMessage = (error) => {
			ElMessage({
				showClose: true,
				message: error,
				type: "error",
			});
		};
		const submit = async (formEl) => {
			console.log(formEl);
			if (!formEl) return;
			try {
				let validate = await formEl.validate();
				if (validate == true) {
					display.value = true;
				} else {
					display.value = false;
				}
			} catch (err) {
				console.log(err);
				console.log("error");
			}
		};
		const resetCalc = (formEl) => {
			if (!formEl) return;
			display.value = false;
			formEl.resetFields();
		};
		return {
			formVal,
			display,
			title,
			addition,
			subtraction,
			multiplication,
			division,
			rules,
			refForm,
			ErrorMessage,
			submit,
			resetCalc,
		};
	},
};
</script>

<style scoped>
.form-body {
	margin: 0 auto !important;
	background-color: var(--primary-color);
	width: 400px;
	padding: 30px;
}
.form {
	padding: 20px;
	box-shadow: 3px 3px 10px 3px #191645;
	border-radius: 5%;
	background-color: white;
}
.el-form-item label {
	color: var(--main-color) !important;
}
.el-form-item__label {
	color: var(--main-color) !important;
}
.pm {
	padding: 5px;
	margin: 5px;
}
</style>
