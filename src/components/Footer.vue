<template>
	<footer>
		<h3>{{ info }}</h3>
	</footer>
</template>
<script type="text/javascript">
	export default {
		name: 'app-footer',
		data() {
			return {
				info: 'copyright @用vue webpack框架 开发组件项目'
			}
		},
		// 父组件传值
		props: ['message']
	}
</script>

<style scoped>
	h3 {
		text-align: center;
		background: pink;
	}
</style>