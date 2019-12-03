<!--
-- @Author: keywin
-- @StartingTime: 2019-12-02 16:52:24
-- @script: 分页组件
-->
<template>
    <el-dialog :title="obj.title" :visible.sync="del_dialogVisible_now" width="30%" :before-close="del_dialogClose" class="base-el-dialog">
        <span>{{ obj.message }}</span>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" type="danger" @click="del_dialogClose">{{ obj.cancelButtonText }}</el-button>
            <el-button size="mini" type="primary" @click="del_dialogCloseSave">{{ obj.confirmButtonText }}</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    name: "Dialog",
    data() {
        return {};
    },
    props: {
		obj: {
			default: function () {
				return {
					title: '提示',
					message: '确认删除吗?',
					confirmButtonText: '确 定',
					cancelButtonText: '取 消'
				}
			}
		},
        del_dialogVisible: {
            default: false
        }
    },
    watch: {},
    computed: {
		del_dialogVisible_now: {
			get () {
				return this.del_dialogVisible
			},
			set () {}
		}
	},
    components: {},
    created() {},
    methods: {
        del_dialogClose() {
			this.$emit('del_dialogClose', false)
		},
		del_dialogCloseSave() {
			this.$emit('del_dialogClose', true)
		}
    },
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.base-el-dialog{
	/deep/ .el-dialog__header{
		@include bg-color-theme(4);
		span, .el-dialog__close {
			@include font-color-theme(3);
		}
	}
	/deep/ .el-dialog__body, /deep/ .el-dialog__footer{
		@include font-color-theme(2);
		@include bg-color-theme(5);
	}
}
</style>