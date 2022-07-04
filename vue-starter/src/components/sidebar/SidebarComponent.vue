<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo sidebar"
		mode="vertical"
		background-color="#43C6AC"
		text-color="#0b2c72"
		active-text-color="#f9f9f9"
	>
		<div class="m-t title">{{ title }}</div>
		<el-menu-item
			v-for="(item, index) of data"
			:key="index"
			:index="item.link"
			@click="NavigateLink(item.link)"
			>{{ item.label }}</el-menu-item
		>
	</el-menu>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
	props: {
		title: {
			type: String,
		},
		data: {
			type: Array,
		},
	},
	setup() {
		const router = useRouter();
		const activeIndex = ref(router.currentRoute._value.name);
		const NavigateLink = (link) => {
			router.push({ name: link });
		};
		return {
			activeIndex,
			NavigateLink,
		};
	},
};
</script>

<style scoped>
.title {
	font-size: 24px;
	padding: 20px;
	font-weight: bold;
	border-bottom: 3px solid #0b2c72;
}
.el-menu-item {
	font-size: 18px;
	font-weight: bold;
}
</style>
