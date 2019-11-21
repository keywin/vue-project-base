<!--
-- @Author: keywin
-- @StartingTime: 2019-11-18 19:24:20
-- @script: 主文件
-->
<template>
    <div class="home">
		<container-header :isCollapse="isCollapse" @changeCollapse="changeCollapse" @showDrawerClick="showDrawerClick"></container-header>
		<div class="container">
			<container-header-aside :isCollapse="isCollapse"></container-header-aside>
			<main>
				<container-nav-tab></container-nav-tab>
				<container-main></container-main>
			</main>
		</div>
		<container-footer></container-footer>
		<container-drawer :showDrawer="showDrawer" @closeDrawerClick="closeDrawerClick"></container-drawer>
	</div>
</template>
<script>
import containerHeader from '@/components/container/Header'
import containerHeaderAside from '@/components/container/HeaderAside'
import containerNavTab from '@/components/container/NavTab'
import containerMain from '@/components/container/Main'
import containerFooter from '@/components/container/Footer'
import containerDrawer from '@/components/container/Drawer'
export default {
    name: "Home",
    data() {
        return {
			showDrawer: false,
			isCollapse: false // 左导航展开状态
		};
    },
    props: [],
    watch: {},
    computed: {},
    components: {
		containerHeader,
		containerHeaderAside,
		containerNavTab,
		containerMain,
		containerFooter,
		containerDrawer,
	},
    created() {},
    methods: {
		showDrawerClick() {
			this.showDrawer = true
			setTimeout(() => {
				this.showDrawer = false
			}, 3000)
		},
		closeDrawerClick() {
			this.showDrawer = false
		},
		changeCollapse(res) {
			this.isCollapse = res
		}
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang='scss' scoped>
.home{
	height: 100%;
	.container{
		height: calc(100% - 80px - 60px);
		display: flex;
		main{
			display: block;
			flex: 1;
		}
	}
}
</style>
