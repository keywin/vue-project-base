<!--
-- @Author: keywin
-- @StartingTime: 2019-11-18 19:22:05
-- @script: HeaderAside
-->
<template>
	<!-- 导航 -->
	<div class="header-aside-el-menu-foo">
		<el-scrollbar style="height: 100%;">
			<el-menu :default-active="menu_activeIndex" @select="handleSelect" class="header-aside-el-menu" popper-class="header-aside-el-menu" :collapse="isCollapse">
				<el-submenu :index="item.id" v-for="(item, i) in menuList" :key="i">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">{{ item.name }}</span>
					</template>
					<el-menu-item-group>
						<span v-for="(item2, j) in item.children" :key="j">
							<el-menu-item :index="item2.id" v-if="item2.children.length === 0">
								<router-link :to='item2.menuUrl' tag="span">{{ item2.name }}</router-link>
							</el-menu-item>
							<el-submenu :index="item2.id" v-else>
								<span slot="title">{{ item2.name }}</span>
								<el-menu-item v-for="(item3, k) in item3.children" :key="k" :index="item3.id">
									<router-link :to='item3.menuUrl' tag="span">{{ item3.name }}</router-link>
								</el-menu-item>
							</el-submenu>
						</span>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-scrollbar>
	</div>
	
</template>
<script>
export default {
    name: "HeaderAside",
    data() {
        return {
					menuList: [], // 左侧树数据-权限
					menu_activeIndex: '' // 默认选中
				};
    },
    props: [
			'isCollapse'
		],
    watch: {},
    computed: {},
    components: {},
    created() {
			this.getPermission()
		},
    methods: {
			// 获取权限列表数据
			getPermission() {
				this.$http_axios('/api/getPermission', {}, 'get').then(res => {
					this.menuList = res.data
					let menu_activeIndex = this.getSessionStorage('menu_activeIndex')
					this.menu_activeIndex = menu_activeIndex ? menu_activeIndex : res.data[0].children[0].id
				})
			},
			handleSelect(index) {
				this.setSessionStorage('menu_activeIndex', index)
			}
		},
    mounted() {},
    updated() {},
    destroyed() {}
};
</script>
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
