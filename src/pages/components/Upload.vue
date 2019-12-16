<!--
-- @Author: keywin
-- @StartingTime: 2019-12-14 15:21:12
-- @script: upload
-->
<template>
  <div class="upload">
		<!-- <el-row> -->
			<h3 class="title">联选 + 手动上传 + 至指定服务器 + 限制上传个数 + 校验文件格式和大小</h3>
			<div class="uploadPictrue el-col-24">
				<el-upload
					action="#"
					:on-change="uploadPictrue"
					:auto-upload="false"
					list-type="picture-card"
					:file-list="pictrueList"
					:show-file-list="false"
					multiple
					:limit="6"
					:on-exceed="handleExceed"
					class="uploadBtn"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
				<div class="scrollFoo">
					<el-scrollbar style="width: 100%;">
						<ul>
							<li v-for="(item, i) in pictrueList" :key="i">
								<span class="el-icon-circle-close" @click="removePictrue(item)"></span>
								<el-image :src="item.url" fit="cover"></el-image>
							</li>
						</ul>
					</el-scrollbar>
				</div>
				<el-button size="mini" @click="submitPicList">提交并打印要提交的数据</el-button>
			</div>
			<el-table :data="filsList" style="width: 100%">
				<el-table-column prop="file.name" label="文件名"></el-table-column>
				<el-table-column label="上传时间">
					<template slot-scope="scope">
						<span>{{ scope.row.file.uid | formateDate }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="file.size" label="文件格式"></el-table-column>
				<el-table-column prop="file.size" label="文件大小"></el-table-column>
				<el-table-column>
					<template slot="header">
						<el-upload
							action="#"
							:show-file-list="false"
							multiple
							:on-change="uploadFile"
							:auto-upload="false"
						>
							<el-button slot="trigger" icon="el-icon-upload2" type="text">添加文件</el-button>
						</el-upload>
					</template>
					<template>
						<el-button icon="el-icon-download" type="text">下载</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button icon="el-icon-delete" type="text" >删除</el-button>
					</template>
				</el-table-column>
			</el-table>
	</div>
</template>
<script>
export default {
  name: "Upload",
  data() {
    return {
			pictrueList: [], // 储存合规图片的数组
			filsList: []
		};
  },
  props: [],
  watch: {},
  computed: {},
  components: {
	},
  created() {},
  methods: {
		// 上传改变调用
		uploadPictrue(file) {
			this.pictrueList.unshift({
        url: file.url,
        file
      })
		},
		// 上传个数超出限制调用
		handleExceed(files, fileList) {
			this.$message.warning(
        `已选了 ${fileList.length} 张, 本次选择了 ${files.length} 张, 限制最多上传6个, 请删除或重新选择`
      )
		},
		removePictrue() {

		},
		// 提交图片, 并打印处理好要提交的数据
		submitPicList() {
			let picListFormdata = new FormData();
			this.pictrueList.map(item => {
				picListFormdata.append("files", item.file.raw);
			})
			console.log(picListFormdata)
		},
		// 选择文件
		uploadFile(file) {
			console.log(file)
			this.filsList.unshift({
        file
      })
		},
		// 提交文件
		submitFilsList() {
			let fileListFormdata = new FormData();
			this.filsList.map(item => {
				fileListFormdata.append("files", item.file.raw);
			})
			console.log(picListFormdata)
		}

	},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
.upload{
	width: 100%;
}
.el-row{
	width: 100%;
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
.title{
	height: 54px;
	line-height: 54px;
	margin-bottom: 20px;
	padding: 0 24px;
	font-size: 16px;
	@include font-color-theme(2);
	@include bg-color-theme(3);
}
.uploadPictrue{
	width: 100%;
	height: 120px;
	margin-bottom: 20px;
	box-sizing: border-box;
	display: flex;
	.uploadBtn{
		width: 180px;
		height: 100%;
		margin-right: 20px;
		float: left;
		/deep/ .el-upload{
			float: left;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			@include border_color(#caddff);
			border: 1px dashed #caddff; /*no*/
			background: transparent;
			i {
				line-height: 118px;
				@include font-color-theme(1);
				font-size: 49px;
				font-weight: bold;
			}
		}
	}
	.scrollFoo{
		width: 580px;
		height: 100%;
		margin-right: 20px;
		/deep/ .el-scrollbar{
			height: 100%;
			ul{
				width: 100%;
				height: 100%;
				white-space: nowrap;
				li{
					width: 180px;
					height: 120px;
					margin-right: 20px;
					position: relative;
					display: inline-block;
					.el-image{
						width: 100%;
						height: 100%;
					}
					span{
						position: absolute;
						right: 3px;
						top: 3px;
						font-size: 20px;
						color: #fff !important;
						background: rgba(0, 0, 0, 0.2);
						border-radius: 50%;
						cursor: pointer;
						z-index: 1;
					}
				}
				li:last-child{
					margin-right: 0;
				}
			}
			.el-scrollbar__bar.is-vertical{
				display: none;
			}
		}
	}
}
.el-table th div{
	line-height: initial;
}
</style>