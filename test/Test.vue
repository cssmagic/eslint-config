<template>
	<div
		class="test"
		:test="{
			a:   1,
			bbb: 2,
		}"
	>
	</div>
</template>

<script>
export default {
	name: 'Test',
}
</script>

<style lang="scss" scoped>
.test {
	color: red;
}
</style>
