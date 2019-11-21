<!--
-- @Author: keywin
-- @StartingTime: 2019-11-18 19:22:05
-- @script: Footer
-->
<template>
    <div class="footer">
		 <p>
			公司地址：西藏拉萨经济技术开发区林琼岗东一路7号西欣大厦512号
			服务地址：北京市朝阳区北苑路甲13号院2号楼新纪元大厦2102室
		</p>
		<p>Copyright © 2018 西藏朗明. All Rights Reserved   藏ICP备18000272号</p>
	</div>
</template>
<script>
export default {
    name: "Footer",
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
.footer{
	width: 100%;
	height: 60px;
	text-align: center;
	padding-top: 6px;
	font-size: 12px;
	box-sizing: border-box;
	@include font-color-theme(18);
	p{
		line-height: 24px;
	}
}
</style>