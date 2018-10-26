<template>
	<div class="users">
		<h1>用户名</h1>
		<ul>
			<li v-for="user in users" v-on:click="user.show=!user.show">
				<h2>{{ user.name }}</h2>
				<h3 v-show="user.show">{{ user.position }}</h3>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'users',
		data() {
			return {
				users : [
					{name: 'Henry', position: 'Web开发', show: false},
					{name: 'Bucky', position: 'Web开发', show: false},
					{name: 'Emily', position: 'Web开发', show: false},
					{name: 'Henry', position: 'Web开发', show: false},
					{name: 'Henry', position: 'Web开发', show: false},
					{name: 'Henry', position: 'Web开发', show: false},
					{name: 'Henry', position: 'Web开发', show: false}
				]
			}
		}
	}
</script>

<style scoped>
.users {
	width: 100%;
	max-width:1200px;
	margin: 40px 20px;
	padding: 0 20px;
	box-sizing: border-box;
}
.users ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type:none;
	padding:0;
}
.users li{
	flex-grow: 1;
	flex-bais: 200px;
	text-align: center;
	border: 1px solid black;
	margin: 10px;
	padding: 30px;
}
</style>