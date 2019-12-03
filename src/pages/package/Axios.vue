<!--
-- @Author: keywin
-- @StartingTime: 2019-11-19 19:25:10
-->
<template>
    <div class="page_01">
		<el-row>
			<el-col :span="12">
				<el-table
					empty-text="请点击按钮获取数据"
					:data="tableData"
					style="width: 100%"
					height="500px"
					 v-scrollBar:table>
					<el-table-column
						prop="title"
						label="名称">
					</el-table-column>
					<el-table-column
						prop="rate"
						label="评分">
					</el-table-column>
					<el-table-column
						prop="state"
						label="是否新片">
						<template slot-scope="scope">
							<span :class="scope.row.is_new ? 'broject-base-color' : ''">{{ scope.row.is_new ? '新鲜好剧' : '怀古' }}</span>
						</template>
					</el-table-column>
					<el-table-column
						prop="url"
						label="详情"
						width="350">
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作"
						width="140">
						<template slot="header">
							<el-button icon="el-icon-magic-stick" size="mini" @click="getTableData(true)">刷新数据</el-button>
						</template>
						<template>
							<el-button type="text" size="small">查看</el-button>
							<el-button type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" class="broject-danger-color">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<base-pagination :pages="pages" @size-change="handleSizeChange" @current-change="handleCurrentChange"></base-pagination>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
    name: "Page_01",
    data() {
        return {
			tableData: [],
			pages: {
				currentPage: 1,
				pageSize: 10,
				total: 0
			}
		};
    },
    props: [],
    watch: {},
    computed: {},
    components: {},
    created() {
		this.getTableData(true)
	},
    methods: {
		getTableData(isNewData=false) {
			isNewData && (this.pages.currentPage = 1)
			let params = JSON.parse(JSON.stringify(this.pages))
			params.isNewData = isNewData
			this.$http_axios('/api/datalist', params).then(res => {
				let a = []
				res.data.list.map(item => {
					a.push(item.id)
				})
				console.log(a)
				this.tableData = res.data.list
				this.pages.total = res.data.total
			})
		},
		handleSizeChange(pageSize) {
			this.pages.currentPage = 1
			this.pages.pageSize = pageSize
			this.getTableData()
		},
		handleCurrentChange(currentPage) {
			this.pages.currentPage = currentPage
			this.getTableData()
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