<!--
-- @Author: keywin
-- @StartingTime: 2019-12-03 16:33:35
-->
<template>
  <div class="VuexModel">
    <el-row>
      <el-button
        icon="el-icon-sold-out"
        size="mini"
        @click="setUserInfo"
      >vuex模块化 调用接口获取用户信息并存储, 支持刷新</el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <span>{{ ['女', '男'][scope.row.sex] }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updata" label="更新日期"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "VuexModel",
  data() {
    return {
      tableData: []
    };
  },
  props: [],
  watch: {},
  computed: {
    ...mapGetters(["GET_USERINFO"])
  },
  components: {},
  created() {
    let arr = [];
    arr.push(this.GET_USERINFO);
    this.tableData = arr;
  },
  methods: {
    ...mapMutations({
      SAVE_USER: "SAVE_USER"
    }),
    setUserInfo() {
      this.$http_axios("/api/userinfo").then(res => {
        let arr = [];
        arr.push(res.data.userInfo);
        this.tableData = arr;
        // 存储用户信息
        this.SAVE_USER(res.data.userInfo);
      });
    },
    GET_USERINFO() {}
  },
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
  padding-bottom: 20px;
  @include border-color-theme(6, bottom);
  .title-color {
    padding-bottom: 5px;
    @include font-color-theme(2);
    font-size: 14px;
    font-weight: bold;
  }
}
</style>