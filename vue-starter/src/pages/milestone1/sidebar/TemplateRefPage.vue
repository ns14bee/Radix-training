<template>
	<div>
		<h1 class="p-t">{{ title }}</h1>
		<hr />
		<el-input
			label="Name"
			ref="nameRef"
			v-model="name"
			style="width: 200px"
			placeholder="Enter Name"
		/>
		<hr />
		<div>
			<!-- <router-link :to="{name:'home'}">Go</router-link> -->
			<h3 class="s-t">Form-Validation</h3>
			<div>
				<el-form
					ref="refForm"
					:model="formRule"
					:rules="rules"
					label-width="auto"
					label-position="left"
					class="form-body m-2"
				>
					<el-form-item label="First Name" prop="firstName">
						<el-input
							type="text"
							v-model="formRule.firstName"
							class="w-auto"
						/>
					</el-form-item>
					<el-form-item label="Last name" prop="lastName">
						<el-input
							type="text"
							v-model="formRule.lastName"
							class="w-auto"
						/>
					</el-form-item>
					<el-form-item label="Email" prop="email">
						<el-input
							type="email"
							v-model="formRule.email"
							class="w-auto"
						/>
					</el-form-item>
					<el-form-item label="Password" prop="password">
						<el-input
							type="password"
							v-model="formRule.password"
							class="w-auto"
						/>
					</el-form-item>
					<el-form-item
						label="Confirm Password"
						prop="confirmPassword"
					>
						<el-input
							type="password"
							v-model="formRule.confirmPassword"
							class="w-auto"
						/>
					</el-form-item>
					<el-form-item label="Date of birth" prop="dob">
						<el-date-picker
							v-model="formRule.dob"
							type="date"
							placeholder="Enter your dob"
						/>
					</el-form-item>
					<el-form-item label="Gender" prop="gender">
						<el-radio-group v-model="formRule.gender">
							<el-radio label="Male" />
							<el-radio label="Female" />
						</el-radio-group>
					</el-form-item>
					<el-form-item
						label="Programming Languages"
						prop="languages"
					>
						<el-checkbox-group v-model="formRule.languages">
							<el-checkbox label="PHP" name="languages" />
							<el-checkbox label="Python" name="languages" />
							<el-checkbox label="Javascript" name="languages" />
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="Newsletter subscription" prop="">
						<el-switch v-model="formRule.emailSub" />
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submit(refForm)"
							>Create</el-button
						>
						<el-button @click="resetForm(refForm)">Reset</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive, watch, onBeforeUnmount, onUnmounted } from "vue";
import { FormInstance, ElMessage } from "element-plus";
export default {
	setup() {
		let demo = "abc";
		let title = "Template Ref";
		let name = ref("");
		let nameRef = ref(null);
		let refForm = ref(FormInstance);
		let formRule = reactive({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			gender: "",
			dob: "",
			languages: [],
			emailSub: false,
		});
		const validateEmail = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input email"));
			} else {
				if (validateEmailRgx(value)) {
					callback();
				} else {
					callback(new Error("Please enter proper email"));
				}
			}
		};
		const validateEmailRgx = (email) => {
			return String(email)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);
		};
		const validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input the password again"));
			} else if (value !== formRule.confirmPassword) {
				callback(new Error("Password doesn't not match"));
			} else {
				callback();
			}
		};
		const validateDob = (rule, value, callback) => {
			let age = Math.floor(
				(new Date() - new Date(value).getTime()) / 3.15576e10
			);
			if (age < 18) {
				callback(new Error("Age should be 18 or greater"));
			} else {
				callback();
			}
		};
		let rules = reactive({
			firstName: [
				{
					required: true,
					message: "Please input first name",
					trigger: "blur",
				},
				{
					min: 3,
					message: "Please enter minimum 3 characters",
					trigger: "blur",
				},
			],
			lastName: [
				{
					required: true,
					message: "Please input last name",
					trigger: "blur",
				},
				{
					min: 3,
					message: "Please enter minimum 3 characters",
					trigger: "blur",
				},
			],
			email: [
				{ validator: validateEmail, trigger: "blur" },
				{
					required: true,
					message: "Please input email",
					trigger: "blur",
				},
			],
			password: [
				{
					required: true,
					message: "Please enter password",
					trigger: "blur",
				},
			],
			confirmPassword: [
				{
					required: true,
					message: "Please enter password",
					trigger: "blur",
				},
				{ validator: validatePass, trigger: "blur" },
			],
			gender: [
				{
					required: true,
					message: "Please select gender",
					trigger: "change",
				},
			],
			dob: [
				{
					required: true,
					message: "Please input date of birth",
					trigger: "change",
				},
				{ validator: validateDob, trigger: "blur" },
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
			if (!formEl) return;
			try {
				let validate = await formEl.validate();
				console.log("this is", validate);
				if (validate == true) {
					console.log("valid form");
					console.log(formRule);
					// resetForm(formEl)
				} else {
					console.log("invalid form");
				}
			} catch (err) {
				console.log(err);
				console.log("error");
			}
		};
		const resetForm = (formEl) => {
			if (!formEl) return;
			formEl.resetFields();
		};
		onBeforeUnmount(() => {
			demo = "changed";
			console.log(`${demo} onBeforeUnmount`);
		});
		onUnmounted(() => {
			demo = "destroyed";
			console.log(`${demo} onUnmounted`);
		});
		watch(name, () => {
			nameRef.value.input.style.border = "2px solid  red";
		});
		return {
			title,
			name,
			nameRef,
			refForm,
			formRule,
			ErrorMessage,
			rules,
			demo,
			submit,
			resetForm,
		};
	},
};
</script>

<style>
.form-body {
	margin: 0 auto !important;
	background-color: var(--primary-color);
	width: 500px;
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
</style>
