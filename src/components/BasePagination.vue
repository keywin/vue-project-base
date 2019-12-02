<!--
-- @Author: keywin
-- @StartingTime: 2019-12-02 16:52:24
-- @script: 分页组件
-->
<template>
    <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pages.currentPage"
            :page-sizes="pageSizes"
            :page-size="pages.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pages.total"
        ></el-pagination>
    </div>
</template>
<script>
export default {
    name: "Pagination",
    data() {
        return {};
    },
    props: {
		pages: {
			default() {
				return {
					currentPage: 1,
					pageSize: 10,
					total: 0
				}
			}
		},
		pageSizes: {
			default() {
				return [5, 10, 15, 20]
			}
		},
	},
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {
		// pageSize 改变时会触发
		handleSizeChange(val) {
			this.$emit('size-change', val)
		},
		// currentPage 改变时会触发
		handleCurrentChange(val) {
			this.$emit('current-change', val)
		}
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.pagination{
	padding-top: 20px;
	/deep/ .el-pagination{
		// 总计
		.el-pagination__total{
			@include font-color-theme(4)
		}
		// 上一页下一页
		button{
			@include font-color-theme(4);
			background: none;
			&:disabled{
				opacity: .5;
			}
		}
		// 当前页
		.el-pager{
			li {
				@include font-color-theme(4);
				background: none;
				&.active,
				&:hover{
					@include font-color-theme(1);
				}
			}
		}
		// 前往[]页
		.el-pagination__jump{
			@include font-color-theme(4);
			.el-input__inner{
				border: 0;
			}
		}
	}
}
</style>