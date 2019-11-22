<!--
-- @Author: keywin
-- @StartingTime: 2019-11-19 19:41:02
-- @script; 主页面
-->
<template>
    <div class="main">
		<el-scrollbar style="height: 100%;">
			<router-view />
		</el-scrollbar>
		
		
	</div>
</template>
<script>
export default {
    name: "Main",
    data() {
        return {};
    },
    props: [],
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.main{
	height: calc(100% - 38px);
	padding: 20px;
	padding-right: 10px;
	@include bg-color-theme(2);
	@include box-shadow-theme(2, 0, 2px, 44px, 2px);
	box-sizing: border-box;
	/deep/ .el-scrollbar__wrap{
		padding-right: 4px;
		overflow-x: hidden; 
	}
}
</style>