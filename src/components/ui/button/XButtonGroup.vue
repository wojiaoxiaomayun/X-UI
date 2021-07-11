<template>
	<div class="x-button-group" :class="[vertical?'x-button-group-vertical':'x-button-group-horizontal',round && 'x-button-group-round']">
		<slot></slot>
	</div>
</template>

<script setup name="XButtonGroup">
	import {defineProps} from 'vue';

	let props = defineProps({
		vertical:Boolean,
		round:Boolean
	});
</script>

<style scope>
	.x-button-group-horizontal{
		align-items: center;
		flex-wrap: wrap;
	}
	.x-button-group-vertical{
		align-items: center;
		flex-direction: column;
	}
	.x-button-group{display: inline-flex;}
	.x-button-group .x-button{margin:0px;animation: none;}
	.x-button-group-round{border-radius: 1000px;overflow: hidden;}
</style>