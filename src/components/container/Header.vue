<!--
-- @Author: keywin
-- @StartingTime: 2019-11-18 19:22:05
-- @script: Header
-->
<template>
    <div class="header">
		<!-- logo -->
		<div class="header-login">
			<img src="@/assets/img/pic/logo.png" alt="" @click="changeCollapse" class="hand">
			<span>点击logo控制侧边栏状态</span>
		</div>
		<div class="header-el-menu-foo">
			<!-- 导航 -->
			<el-menu :default-active="activeIndex" class="header-el-menu" mode="horizontal">
				<el-submenu :index="item.name" v-for="(item, i) in menuList" :key="i" :popper-class="item.children && item.children.length == 0 ? '' : 'hasChildren'">
					<template slot="title">{{ item.name }}</template>
					<el-menu-item :index="item_sub.name" v-for="(item_sub, j) in item.children" :key="j">{{ item_sub.name }}</el-menu-item>
				</el-submenu>
			</el-menu>
			<el-divider direction="vertical"></el-divider>
			<span class="iconfont icon-zhuye"></span>
			<span class="iconfont icon-xiaoxi hasXiaoxi" @click="showDrawerClick"></span>
			<el-dropdown @command="themeChange">
				<span class="iconfont icon-pifu el-dropdown-link"></span>
				<el-dropdown-menu slot="dropdown" class="el-dropdown-menu-pifu">
					<el-dropdown-item command="theme" class="theme-item-0" :class="{'theme-active': theme === 'theme'}">默认主蹄</el-dropdown-item>
					<el-dropdown-item command="theme1" class="theme-item-1" :class="{'theme-active': theme === 'theme1'}">海洋之灾</el-dropdown-item>
					<el-dropdown-item command="theme2" class="theme-item-2" :class="{'theme-active': theme === 'theme2'}">水晶之患</el-dropdown-item>
					<el-dropdown-item command="theme3" class="theme-item-3" :class="{'theme-active': theme === 'theme3'}">紫禁之癫</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<i class="el-icon-full-screen" @click="handleFullScreen"></i>
			<el-dropdown>
				<span class="el-dropdown-link">
					<el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="vertical-align: middle;"></el-avatar>
					<span style="color: #fff;">{{ getUserInfo.username }}</span>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>奥运塔分区</el-dropdown-item>
					<el-dropdown-item>监督管理员</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
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
        return {
			activeIndex: '灯效首页', // 导航选中
			menuList, // 导航树
			theme: 'theme', // 主题
		};
    },
    props: [
		'isCollapse'
	],
    watch: {},
    computed: {
		...mapGetters(['getUserInfo'])
	},
    components: {},
    created() {},
    methods: {
		// 展开收起左导航
		changeCollapse() {
			this.$emit('changeCollapse', !this.isCollapse)
		},
		// 切换主题
		themeChange(theme) {
			this.theme = theme
			window.document.documentElement.setAttribute('data-theme', theme)
		},
		// 全屏事件
		handleFullScreen() {
			let element = document.documentElement;
			if (this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.msRequestFullscreen) {
				// IE11
				element.msRequestFullscreen();
			}
			}
			this.fullscreen = !this.fullscreen;
		},
		// 打开消息
		showDrawerClick() {
			this.$emit('showDrawerClick')
		}
	},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
<style lang="scss">
// 右侧操作-下拉
	.el-menu--horizontal{
		top: 50px !important;
		.el-menu--popup{
			display: none;
		}
		&.hasChildren {
			.el-menu--popup{
				width: 130px;
				min-width: 130px;
				background: transparent;
				@include box-shadow-theme(1, 0, 0, 18px, 3px);
				display: block;
				.el-menu-item{
					@include bg-color-theme(7);
					@include font-color-theme(2);
					@include border-color-theme(3, bottom);
					&:hover{
						@include font-color-theme(1);
					}
					&.is-active{
						@include font-color-theme(1);
					}
				}
			}
			&:before {
				content: "";
				display: block;
				width: 0;
				height: 0;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: 2px;
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;
				@include border-color-theme(9, bottom, 8px);
			}
		}
	}
	.el-dropdown-menu-pifu{
		.el-dropdown-menu__item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			&:after{
				content: "";
				width: 10px;
				height: 10px;
				margin-top: 12px;
				margin-left: 5px;
				border: 1px solid #fff;
				border-radius: 50%;
				@include bg-color-theme(1);
			}
			&.theme-item-0:after{
				background-color: #001C3B;
			}
			&.theme-item-1:after{
				background-color: #096DD9;
			}
			&.theme-item-2:after{
				background-color: #36CFC9;
			}
			&.theme-item-3:after{
				background-color: #512DA8;
			}
		}
		.theme-active {
			@include font-color-theme(1);
		}
	}
</style>
<style lang='scss' scoped>
.header{
	height: 80px;
	@include border-color-theme(3, bottom);
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	// logo
	.header-login{
		img{
			float: left;
			width: 64px;
			height: 64px;
			margin-top: 8px;
		}
		span{
			float: left;
			margin-left: 20px;
			margin-top: 30px;
			color: #fff;
		}
	}
	// 右侧操作(不含下拉)
	.header-el-menu-foo{
		display: flex;
      	align-items: center;
		.header-el-menu{
			top: auto !important;
			border-bottom: 0;
			background: transparent;
			.el-submenu{
				height: 100%;
				&:hover{
					/deep/ .el-submenu__title{
						@include font-color-theme(11);
					}
					/deep/ .el-submenu__icon-arrow{
						@include font-color-theme(11);
					}
				}
				/deep/ .el-submenu__title{
					height: 100%;
					@include font-color-theme(11);
					background: transparent;
					font-size: 18px;
					/deep/ .el-submenu__icon-arrow{
						@include font-color-theme(11);
					}
				}
				&.is-active /deep/ .el-submenu__title{
					border-bottom: 0;
					@include font-color-theme(12);
				}
				&.is-active /deep/ .el-submenu__icon-arrow{
					border-bottom: 0;
					@include font-color-theme(12);
				}
			}
		}
		.el-divider--vertical{
			height: 1.5em;
			margin-right: 20px;
		}
		.iconfont, .el-icon-full-screen{
			margin-right: 10px;
			color: #fff;
			font-size: 18px;
			cursor: pointer;
		}
		.hasXiaoxi{
			position: relative;
			&:after{
				content: '';
				width: 8px;
				height: 8px;
				background: #f56c6c;
				position: absolute;
				right: -5px;
				border: 1px solid #fff;
				border-radius: 50%;
			}
		}
	}
}
</style>
