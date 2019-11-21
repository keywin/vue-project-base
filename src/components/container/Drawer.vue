<!--
-- @Author: keywin
-- @StartingTime: 2019-11-19 17:43:16
-- @script: 抽屉-消息弹窗
-->
<template>
	<div class="drawer" :class="showDrawer ? 'showDrawer' : ''">
		<div class="drawer-shadow" @click="closeDrawerClick"></div>
		<div class="drawer-content">1234564</div>
	</div>
</template>
<script>
export default {
    name: "Drawer",
    data() {
        return {};
    },
    props: ['showDrawer'],
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {
		closeDrawerClick() {
			this.$emit('closeDrawerClick')
		}
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.drawer{
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 100%;
	top: 0;
	transition: all .5s;
	&.showDrawer{
		left: 0;
	}
	.drawer-shadow{
		width: calc(100% - 300px);
		height: 100%;
	}
	.drawer-content{
		width: 300px;
		height: 100vh;
		position: absolute;
		right: 0;
		top: 0;
		background: #fff;
	}
}
</style>