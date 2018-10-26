<template>
	<header>
		<h1>{{ title }}</h1>
		<h3>author: tinswing</h3>
	</header>
</template>
<script type="text/javascript">
	export default {
		name: 'app-header',
		data() {
			return {
				title: 'Vue init webpack vue-playlist'
			}
		}
	}
</script>

<style scoped>
	header {
		background:lightgreen;
		padding: 10px;
	}
	h3 {
		color:yellow;
	}
</style>