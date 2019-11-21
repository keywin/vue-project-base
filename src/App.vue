<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scope>
#app {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	@include bg-color-theme(1);
}
</style>
