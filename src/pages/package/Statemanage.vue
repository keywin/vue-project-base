<!--
-- @Author: keywin
-- @StartingTime: 2019-12-03 09:45:33
-->
<template>
    <div class="statemanage">
<pre>
	// 状态码统一管理: 
	// @/api/statemanage.js 

	let stateCode = {
		200: '成功',
		301: '资源已被转移到其他URL',
		306 : '已被废弃的HTTP状态码',
		401: '用户信息失效',
		404: '找不到',
		414: 'URL过长',
		405: '请求方式有误',
		500: '业务失败',
		600: '系统级别异常, 请联系开发'
	}

	export { stateCode }
</pre>
<pre>
	// 拦截器使用: 
	// @/api/http_axios.js 
	
	import { stateCode } from './statemanage'

	Notification.error({
		duration: 2000,
		message: stateCode[error.response.status] || '服务器正在维护'
	})
</pre>
	<el-row></el-row>
	<el-row>
		<el-button icon="el-icon-magic-stick" size="mini" @click="stateTaste">状态码统一管理体验</el-button>
	</el-row>
	</div>
</template>
<script>
export default {
    name: "Statemanage",
    data() {
        return {};
    },
    props: [],
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {
		stateTaste() {
			let params = {code: 404}
			this.$http_axios('/api/statetaste', params, 'get').then(res => {
				console.log(res)
			})
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