<!--
-- @Author: keywin
-- @StartingTime: 2019-11-20 11:57:04
-- @script: Button
-->
<template>
    <div class="button">
		<!-- <codemirror
              ref="myCm"
              :value="resJson"
              :options="cmOptions"
              class="code"
            ></codemirror> -->
		<el-row>
			<el-col :span="24" class="title-color">按钮</el-col>
			<el-button icon="el-icon-plus" size="mini">默认按钮</el-button>
			<el-button icon="el-icon-delete" type="danger" size="mini">危险按钮</el-button>
			<el-button icon="el-icon-search" class="search-button"></el-button>
			<el-button icon="el-icon-edit" type="text">文字按钮</el-button>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
		<el-row>
			<el-col :span="24" class="title-color">输入框</el-col>
			<el-col :span="6"><el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
		</el-row>
		<el-row>
			<el-col :span="24" class="title-color">Radio 单选框</el-col>
			<el-radio-group v-model="radio">
				<el-radio :label="3">备选项</el-radio>
				<el-radio :label="6">备选项</el-radio>
				<el-radio :label="9">备选项</el-radio>
			</el-radio-group>
		</el-row>
		<el-row>
			<el-col :span="24" class="title-color">Checkbox 多选框</el-col>
			<el-checkbox-group v-model="checkedCities">
				<el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
			</el-checkbox-group>
		</el-row>
		<el-row>
			<el-col :span="24" class="title-color">Select 选择器</el-col>
			<el-select v-model="value2" placeholder="请选择" size="mini">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-col :span="24" class="title-color">Table 表格-指令控制滚动条样式</el-col>
			<el-col :span="12">
				<el-table
					:data="tableData"
					style="width: 100%"
					height="300px"
					 v-scrollBar:table>
					<el-table-column
						prop="date"
						label="日期">
					</el-table-column>
					<el-table-column
						prop="name"
						label="姓名">
					</el-table-column>
					<el-table-column
						prop="state"
						label="关联状态">
						<template slot-scope="scope">
							<span :class="scope.row.state ? 'broject-base-color' : ''">{{ scope.row.state ? '已关联' : '未关联' }}</span>
						</template>
					</el-table-column>
					<el-table-column
						prop="address"
						label="地址">
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作"
						width="140">
						<template>
							<el-button type="text" size="small">查看</el-button>
							<el-button type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" class="broject-danger-color">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<script>
// import axios from 'axios'

// import aaa from '@/assets/json.json'

// console.log(aaa)

// import { codemirror } from 'vue-codemirror'
//   require("codemirror/mode/python/python.js")
//   require('codemirror/addon/fold/foldcode.js')
//   require('codemirror/addon/fold/foldgutter.js')
//   require('codemirror/addon/fold/brace-fold.js')
//   require('codemirror/addon/fold/xml-fold.js')
//   require('codemirror/addon/fold/indent-fold.js')
//   require('codemirror/addon/fold/markdown-fold.js')
//   require('codemirror/addon/fold/comment-fold.js')
export default {
    name: "Button",
    data() {
        return {
			// cmOptions: {
			// 	value:'',
			// 	theme:'rubyblue', //主题
			// 	indentUnit:2,
			// 	smartIndent:true,
			// 	tabSize:4,
			// 	readOnly:true, //只读
			// 	showCursorWhenSelecting:true,
			// 	lineNumbers:true, //是否显示行数
			// 	firstLineNumber: 1
			// },
			// resJson: aaa,
			input: '',
			radio: 3,
			cities: ['上海', '北京', '广州', '深圳'],
			checkedCities: ['上海', '北京'],
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			value2: '',
			tableData: [
				{
					date: '2016-05-02',
					name: '王大虎',
					state: false,
					address: '上海市普陀区 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王二虎',
					state: true,
					address: '上海市普陀区 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王三虎',
					state: true,
					address: '上海市普陀区 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王四虎',
					state: false,
					address: '上海市普陀区 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王五虎',
					state: true,
					address: '上海市普陀区 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					state: false,
					address: '上海市普陀区 1516 弄'
				}
			]
		};
    },
    props: [],
    watch: {},
    computed: {},
    components: {
		// codemirror
	},
    created() {},
    methods: {},
    mounted() {
		// let params = {
		// 	enclosureName: null,
		// 	page: {
		// 		pageNum: 1,
		// 		pageSize: 10
		// 	},
		// 	project: {
		// 		projectName: null,
		// 		projectStatus: null,
		// 		relationState: null
		// 	}
		// }
		// let params = {id: 6087057}
		// this.$http_axios('/api/datalist', {}, 'get').then(res => {
		// 	console.log(res)
		// })
		
// this.$axios.get('/api/datalist').then((res) => {
               
//             })
	},
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