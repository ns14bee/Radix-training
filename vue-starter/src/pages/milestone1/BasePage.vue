<template>
	<el-container>
		<el-aside class="sideBar-body">
			<sidebar class="sideBar" :title="title" :data="data" />
		</el-aside>
		<el-main class="mainBody">
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
		let title = "Milestone1";
		let data = [
			{ label: "Interpolation", link: "interpolation" },
			{ label: "Data Binding", link: "data-binding" },
			{ label: "Reactivity", link: "reactivity" },
			{ label: "State", link: "state" },
			{ label: "Lifecycles", link: "lifecycle" },
			{ label: "Directives", link: "directives" },
			{ label: "Event-handling", link: "event-handling" },
			{ label: "Computed & Watcher", link: "computed-watcher" },
			{ label: "Template Ref", link: "template-ref" },
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
