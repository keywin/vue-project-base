<!--
-- @Author: keywin
-- @StartingTime: 2019-12-03 11:06:30
-->
<template>
    <div class="resetElmUI_pack">
		<el-row>
			<base-pagination :pages="pages" @size-change="handleSizeChange" @current-change="handleCurrentChange"></base-pagination>
		</el-row>
		<el-row>
			<el-button icon="el-icon-magic-stick" size="mini" @click="del_dialogOpen()">打开对话框组件</el-button>
		</el-row>
		<base-dialog :del_dialogVisible.sync="del_dialogVisible" @del_dialogClose="del_dialogClose"></base-dialog>
	</div>
</template>
<script>
let {log} = console
export default {
    name: "ResetElmUI_pack",
    data() {
        return {
			pages: {
				currentPage: 1,
				pageSize: 10,
				total: 100
			},
			del_dialogVisible: true
		};
    },
    props: [],
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {
		handleSizeChange(pageSize) {
			log(pageSize)
			this.pages.pageSize = pageSize
		},
		handleCurrentChange(currentPage) {
			log(currentPage)
			this.pages.currentPage = currentPage
		},
		del_dialogOpen() {
			this.del_dialogVisible = true
		},
		del_dialogClose(val) {
			console.log(val)
			this.del_dialogVisible = false
		}
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.el-row{
	margin-bottom: 20px;
	padding-bottom: 20px;
	@include border-color-theme(6, bottom);
	.title-color{
		padding-bottom: 5px;
		@include font-color-theme(2);
		font-size: 14px;
		font-weight: bold;
	}
}
</style>