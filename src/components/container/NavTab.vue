<!--
-- @Author: keywin
-- @StartingTime: 2019-11-19 18:42:56
-- @script: navTab
-->
<template>
    <div class="navTab">
		<ul>
			<li v-for="(item, i) in tags" :key="item.name" :class="i == 0 ? 'is-active' : ''">
				{{ item.name }}
				<i class="el-icon-close"></i>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
    name: "NavTab",
    data() {
        return {
			tags: [
				{ name: '标签一' },
				{ name: '标签二' },
				{ name: '标签三' },
				{ name: '标签四' },
				{ name: '标签五' }
			]
		};
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
.navTab{
	height: 36px;
	@include border-color-theme(3, bottom);
	@include border-color-theme(3, left);
	li{
		height: 24px;
		line-height: 24px;
		margin: 5px 0px 5px 5px;
		padding: 0 10px;
		font-size: 12px;
		@include bg-color-theme(7);
		@include font-color-theme(2);
		@include border-color-theme(1);
		border-radius: 2px;
		display: inline-block;
		cursor: pointer;
		&.is-active{
			@include font-color-theme(1);
		}
	}
}
</style>