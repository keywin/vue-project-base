<!--
-- @Author: keywin
-- @StartingTime: 2019-12-03 11:06:30
-->
<template>
    <div class="resetElmUI_pack">
		<el-row>
			<base-pagination :pages="pages" @size-change="handleSizeChange" @current-change="handleCurrentChange"></base-pagination>
		</el-row>
		<el-row>
			<el-button icon="el-icon-magic-stick" size="mini" @click="del_dialogOpen()">打开对话框组件</el-button>
		</el-row>
		<base-dialog :del_dialogVisible.sync="del_dialogVisible" @del_dialogClose="del_dialogClose"></base-dialog>
		<el-row>
			<el-select v-model="province_value" placeholder="请选择" size="mini"  @change="getDegion('city')">
				<el-option v-for="item in province" :key="item.code" :label="item.name" :value="item.province"></el-option>
			</el-select>
			<el-select v-model="city_value" placeholder="请选择" size="mini"  @change="getDegion('area')">
				<el-option v-for="item in city" :key="item.code" :label="item.name" :value="item.city"></el-option>
			</el-select>
			<el-select v-model="area_value" placeholder="请选择" size="mini"  @change="getDegion('town')">
				<el-option v-for="item in area" :key="item.code" :label="item.name" :value="item.area"></el-option>
			</el-select>
		</el-row>
	</div>
</template>
<script>
let {log} = console
// const { province, city, area, town } = require('province-city-china/data')
const province = require('@/assets/json/province-city-china/province.json')
const city = require('@/assets/json/province-city-china/city.json')
const area = require('@/assets/json/province-city-china/area.json')
const town = require('@/assets/json/province-city-china/town.json')
export default {
    name: "ResetElmUI_pack",
    data() {
        return {
			pages: {
				currentPage: 1,
				pageSize: 10,
				total: 100
			},
			del_dialogVisible: false,
			province_value: '',
			province: [],
			city_value: '',
			city: [],
			area_value: '',
			area: [],
			town_value: '',
			town: []
		};
    },
    props: [],
    watch: {},
    computed: {},
    components: {},
    created() {
		this.province = province
	},
    methods: {
		handleSizeChange(pageSize) {
			log(pageSize)
			this.pages.pageSize = pageSize
		},
		handleCurrentChange(currentPage) {
			log(currentPage)
			this.pages.currentPage = currentPage
		},
		del_dialogOpen() {
			this.del_dialogVisible = true
		},
		del_dialogClose(val) {
			this.del_dialogVisible = false
		},
		getDegion(level) {
			switch(level) {
				case 'city':
					this.city = []
					this.city_value = ''
				case 'area':
					this.area = []
					this.area_value = ''
				case 'town':
					this.town = []
					this.town_value = ''
					break
			}
			let zhixiashi = [
				{code: "110000", name: "北京市", province: "11"},
				{code: "120000", name: "天津市", province: "12"},
				{code: "310000", name: "上海市", province: "31"},
				{code: "500000", name: "重庆市", province: "50"}
			]
			if(level == 'city') {
				// 四个直辖市 北京:11, 上海:31，天津:12，重庆市:50
				if((/11|31|12|50/).test(this.province_value)) {
					this.city = zhixiashi.filter(item => item.province == this.province_value).map(item => {
						return {
							city: "01",
							code: item.code,
							name: item.name,
							province: item.province,
						}
					})
				} else {
					this.city = city.filter(item => item.province == this.province_value)
				}
			}
			if(level == 'area') {
				this.area = area.filter(item => item.province == this.province_value && item.city == this.city_value)
			}
			if(level == 'town') {
				this.town = town.filter(item => item.province == this.province_value && item.city == this.city_value && item.area == this.area_value)
			}
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