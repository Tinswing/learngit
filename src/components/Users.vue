<template>
	<div class="users">
		<h1>用户名</h1>
		<ul>
			<li v-for="user in users">
				<h2>{{ user.name }}</h2>
				<h3>{{ user.email }}</h3>
			</li>
		</ul>
		<button v-on:click="deleteUser">删除</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'users',
		// props: ['users']
		// 传值： string number boolean
		// 传引用： array object
		props: {	// 官方传值写法
			users: {
				type: Array,
				required: true
			}
		},
		methods: {
			deleteUser() {
				this.users.pop();
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