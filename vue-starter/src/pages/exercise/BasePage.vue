<template>
	<el-container>
		<el-aside>
			<sidebar :title="title" :data="data" />
		</el-aside>
		<el-main>
			<router-view> </router-view>
		</el-main>
	</el-container>
</template>

<script>
import sidebar from "../../components/sidebar/SidebarComponent.vue";
export default {
	components: {
		sidebar,
	},
	setup() {
		let title = "Exercise";
		let data = [
			{ label: "Intepolation", link: "interpolation" },
			{ label: "Data Binding", link: "data-binding" },
			{ label: "Reactivity", link: "interpolation" },
			{ label: "State", link: "interpolation" },
			{ label: "Components", link: "interpolation" },
			{ label: "Lifecycles", link: "interpolation" },
			{ label: "Directives", link: "interpolation" },
			{ label: "Methods", link: "interpolation" },
			{ label: "Computed", link: "interpolation" },
			{ label: "Watchers", link: "interpolation" },
			{ label: "Template Ref", link: "interpolation" },
		];
		return {
			title,
			data,
		};
	},
};
</script>

<style scoped>
.sideBar-body {
	width: 240px;
}
.sideBar {
	position: fixed !important;
	top: 7vh;
	left: 0;
	height: 93vh;
	z-index: 99;
	min-width: 240px;
	overflow-y: auto;
}
.mainBody {
	z-index: 98;
}
@media (max-width: 576px) {
	.sideBar {
		height: 100%;
	}
}
</style>
