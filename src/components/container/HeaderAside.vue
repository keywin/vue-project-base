<!--
-- @Author: keywin
-- @StartingTime: 2019-11-18 19:22:05
-- @script: Header
-->
<template>
	<!-- 导航 -->
	<div class="header-aside-el-menu-foo">
		<el-scrollbar style="height: 100%;">
			<el-menu default-active="1-4-1"  class="header-aside-el-menu" popper-class="header-aside-el-menu" :collapse="isCollapse">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">组件</span>
					</template>
					<el-menu-item-group>
						<el-submenu index="1-1">
							<span slot="title">Elem样式修改</span>
							<el-menu-item index="1-1-1"><router-link to='/comments/resetelmui_pack/button' tag="span">Button 按钮</router-link></el-menu-item>
						</el-submenu>
						<el-submenu index="2-1">
							<span slot="title">Elem组件二次封装</span>
							<el-menu-item index="2-1-1">Button 按钮</el-menu-item>
						</el-submenu>
						<el-submenu index="3-1">
							<span slot="title">我的组件</span>
							<el-menu-item index="3-1-1">Button 按钮</el-menu-item>
						</el-submenu>
						<el-menu-item index="4-1">选项1</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">封装</span>
					</template>
					<el-menu-item-group>
						<el-submenu index="2-1">
							<span slot="title">js</span>
							<el-menu-item index="2-1-1">选项1</el-menu-item>
							<el-menu-item index="2-1-2">选项2</el-menu-item>
						</el-submenu>
						<el-submenu index="2-2">
							<span slot="title">sass</span>
							<el-menu-item index="2-2-1">选项1</el-menu-item>
							<el-menu-item index="2-2-2">选项2</el-menu-item>
						</el-submenu>
						<el-submenu index="2-3">
							<span slot="title">axios</span>
							<el-menu-item index="2-3-1">选项1</el-menu-item>
							<el-menu-item index="2-3-2">选项2</el-menu-item>
						</el-submenu>
						<el-submenu index="2-4">
							<span slot="title">api</span>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
						</el-submenu>
						<el-submenu index="2-5">
							<span slot="title">vuex</span>
							<el-menu-item index="2-5-1">选项1</el-menu-item>
							<el-menu-item index="2-5-2">选项2</el-menu-item>
						</el-submenu>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">模块三</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="3-1">选项1</el-menu-item>
						<el-menu-item index="3-2">选项2</el-menu-item>
						<el-menu-item index="3-3">选项3</el-menu-item>
						<el-submenu index="3-4">
							<span slot="title">选项4</span>
							<el-menu-item index="3-4-1">选项1</el-menu-item>
							<el-menu-item index="3-4-2">选项2</el-menu-item>
						</el-submenu>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-scrollbar>
	</div>
	
</template>
<script>
let menuList = [
	{
		name: '灯效智控',
		jurisdiction: '',
		children: [
			{
				name: '灯效首页',
				path: '/lampEffect/lampHome',
				jurisdiction: ''
			},
			{
				name: 'GIS地图',
				path: '/lampEffect/lampEffectGis',
				jurisdiction: ''
			},
			{
				name: '节点管理',
				path: '/lampEffect/nodeManagement',
				jurisdiction: ''
			},
		]
	},
	{
		name: '强电管理',
		jurisdiction: '',
		children: [
			{
				name: '强电首页',
				path: '/lampEffect/lampHome',
				jurisdiction: ''
			},
			{
				name: '节点管理',
				path: '/lampEffect/lampEffectGis',
				jurisdiction: ''
			},
			{
				name: '场景管理',
				path: '/lampEffect/nodeManagement',
				jurisdiction: ''
			},
		]
	},
	{
		name: '故障监控',
		jurisdiction: '',
		children: [
			{
				name: '视频监控',
				path: '/lampEffect/lampHome',
				jurisdiction: ''
			},
			{
				name: '故障列表',
				path: '/lampEffect/lampEffectGis',
				jurisdiction: ''
			},
			{
				name: '操作日志',
				path: '/lampEffect/nodeManagement',
				jurisdiction: ''
			},
		]
	},
	{
		name: '其他',
		jurisdiction: '',
		children: []
	}
]
export default {
    name: "Header",
    data() {
        return {};
    },
    props: [
		'isCollapse'
	],
    watch: {},
    computed: {},
    components: {},
    created() {},
    methods: {
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang="scss">

</style>
<style lang='scss' scoped>
.header-aside-el-menu-foo{
	height: calc(100vh - 80px - 60px);
	@include box-shadow-theme(0, 2px, 2px, 44px, 2px);
	/deep/ .el-scrollbar__wrap{
		overflow-x: hidden;
	}
	.header-aside-el-menu{
		min-height: calc(100vh - 80px - 60px);
		@include bg-color-theme(1);
		border-right: 0;
		&:not(.el-menu--collapse){
			width: 200px;
		}
		/deep/ .el-submenu__title{
			@include font-color-theme(18);
			i{
				@include font-color-theme(18);
				transition: all .2s;
			}
			&:hover{
				@include bg-color-theme(12);
				@include font-color-theme(19);
				i{
					background: transparent;
					@include font-color-theme(19);
				}
			}
		}
		/deep/ .el-menu--inline{
			background: transparent;
			.el-menu-item{
				@include font-color-theme(18);
				&:hover, &.is-active{
					@include bg-color-theme(12);
					@include font-color-theme(19);
				}
			}
		}
	}
}
</style>
<style lang="scss">
	.el-menu--vertical{
		@include bg-color-theme(1);
		.el-menu{
			@include bg-color-theme(1);
			.el-submenu__title{
				@include font-color-theme(18);
				i{
					@include font-color-theme(18);
					transition: all .2s;
				}
				&:hover{
					@include bg-color-theme(12);
					@include font-color-theme(19);
					i{
						background: transparent;
						@include font-color-theme(19);
					}
				}
			}
			.el-menu-item{
				@include font-color-theme(18);
				&:hover, &.is-active{
					@include bg-color-theme(12);
					@include font-color-theme(19);
				}
			}
		}
	}
</style>
