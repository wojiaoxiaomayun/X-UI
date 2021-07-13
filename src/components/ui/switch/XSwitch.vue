<template>
	<div class="x-switch">
		<input :id="id" type="checkbox" :disabled="disabled"/>
		<label :for="id" class="x-switch-body" :class="[square && 'square']">
			<div class="x-switch-thumb" :class="[square && 'square']" :style="{background:thumbColor}">
				<slot name="circle"></slot>
			</div>
			<div class="x-switch-track-left" :style="{background:trackColor}">
				<div class="x-switch-track-content">
					<slot name="on"></slot>
				</div>
			</div>
			<div class="x-switch-track-right" :style="{background:bodyColor}">
				<div class="x-switch-track-content">
					<slot name="off"></slot>
				</div>
			</div>
		</label>
	</div>
</template>

<script setup name="XSwitch">
	import {defineProps} from 'vue';
	import Color from 'colorjs.io';
	import {guid} from '../../../utils/xutil'
	let id = guid();
	let props = defineProps({
		square:Boolean,
		disabled:Boolean,
		thumbColor:{
			type:String,
			default:'var(--white)',
			validator:(value) => {
				try{
					let color = new Color(value)
					return true;
				}catch(e){
					console.error(e.message)
				}
				return false;
			}
		},
		trackColor:{
			type:String,
			default:'var(--bg-color-primary)',
			validator:(value) => {
				try{
					let color = new Color(value)
					return true;
				}catch(e){
					console.error(e.message)
				}
				return false;
			}
		},
		bodyColor:{
			type:String,
			default:'var(--greyLight)',
			validator:(value) => {
				try{
					let color = new Color(value)
					return true;
				}catch(e){
					console.error(e.message)
				}
				return false;
			}
		}
	});
</script>

<style lang="scss" scope>
	.x-switch{
		display: inline-block;
		width: auto;
		min-width: 48px;
		height: 28px;
		margin: 8px;
		input[type=checkbox]{display: none;}
		input[type=checkbox]:disabled ~ .x-switch-body{opacity: .7;}
		input[type=checkbox]:checked ~ .x-switch-body .x-switch-thumb{
			left: calc(100% - 23px);
			transition: all .5s;
		}
		input[type=checkbox]:checked ~ .x-switch-body .x-switch-track-left{
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: auto;
			min-width: 100%;
			transition: all .3s;
		}
		input[type=checkbox]:checked ~ .x-switch-body .x-switch-track-right{
			width: 0%;
			display: none;
			transition: all .3s;
		}
		&-body{
			width: auto;
			min-width: 48px;
			height: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			user-select: none;
			cursor: pointer;
			position: relative;
			background: var(--gray);
			border-radius: 1000px;
			overflow: hidden;
			box-shadow: -5px 0 25px 0 rgba(var(--black),.6);
			white-space: nowrap;
			.x-switch-thumb{
				position: absolute;
				background: var(--white);
				width: 20px;
				height: 20px;
				top: 4px;
				left: 4px;
				transition: all .5s;
				z-index: 2;
				border-radius: 1000px;
				overflow: hidden;
				font-size: 12px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.x-switch-track-left{
				display: none;
				background: var(--bg-color-success);
				width: 0;
				height: 100%;
				transition: all .3s;
				overflow: hidden;
				.x-switch-track-content{
					width: auto;
					height: 100%;
					color:var(--white);
					display: flex;
					align-items: center;
					padding: 0px 8px;
					flex-flow: 0;
					flex-shrink: 0;
				}
				&::after{
					content: '';
					display: block;
					width: 24px;
					height: 24px;
				}
			}
			.x-switch-track-right{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				background: var(--gray);
				width: auto;
				min-width: 100%;
				height: 100%;
				transition: all .3s;
				overflow: hidden;
				.x-switch-track-content{
					width: auto;
					height: 100%;
					color:var(--black);
					display: flex;
					align-items: center;
					padding: 0px 8px;
					flex-flow: 0;
					flex-shrink: 0;
				}
				&::before{
					content: '';
					display: block;
					width: 24px;
					height: 24px;
				}
			}
		}
		&-body:active{
			transform: scale(.92);
			transition: all .2s;
		}
		.square{
			border-radius: 4px;
		}
	}
</style>