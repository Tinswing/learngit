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
				info: 'copyright @vue'
			}
		}
	}
</script>

<style scoped>
	h3 {
		text-align: center;
		background: pink;
	}
</style>