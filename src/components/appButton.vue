<template>
	<a href="#">{{ Buttontext }}</a>
</template>

<script>
	export default {
		name:'appButton',
		props:{
			Buttontext:String
		}
	};
</script>