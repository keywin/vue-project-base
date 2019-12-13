<!--
-- @Author: keywin
-- @StartingTime: 2019-12-13 18:29:41
-- @script: newPage
-->
<template>
<div class="permission"></div>
</template>
<script>
export default {
name: 'Permission',
data () {return {}},
props: [],
watch: {},
computed: {},
components: {},
created () {},
methods: {
	getPermission() {
		this.$http_axios('/api/getPermission', {}, 'get').then(res => {
			console.log(res)
		})
	}
},
mounted () {},
updated () {},
destroyed () {}
}
</script>
<style lang='scss' scoped>
</style>