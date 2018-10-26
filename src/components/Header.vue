<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>
<script type="text/javascript">
	export default {
		name: 'app-header',
		data() {
			return {
				title: '头部'
			}
		}
	}
</script>

<style scoped>
	header {
		background:lightgreen;
		padding: 10px;
	}
</style>