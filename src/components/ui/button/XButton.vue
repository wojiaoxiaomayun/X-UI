<template>
	<button ref="xButton" 
		:class="[!plain && 'x-custom-button',plain && 'x-custom-plain-button',littleRound && 'x-little-round',round && 'x-round',block && 'x-button-block','x-button-' + size,circle && 'x-button-circle']" 
		class="x-ripple x-button" 
		:type="Object.values(NativeTypeEnum).includes(nativeType)?nativeType:NativeTypeEnum.BUTTON"
		:disabled="disabled?'disabled':false"
		:loading="loading"
	>	
		<i v-if="loading || iconPrefix" :class="loading?'x-icon-loading':iconPrefix" style="display:inline-block;margin-right:4px;"></i>
		<slot></slot>
		<i v-if="!loading && iconSuffix" :class="iconSuffix" style="display:inline-block;margin-left:4px;"></i>
	</button>
</template>
<script name="XButton" setup>
	import {defineProps,ref,watch,onMounted} from 'vue'
	import { ColorMix } from "../../../utils/xutil";
	import Color from "colorjs.io"

	const ColorEnum = {
		PRIMARY:'primary',
		WARNING:'warning',
		ERROR:'error',
		SUCCESS:'success',
		DARK:'dark',
	}

	const PlainEnum = {
		SOLID:'solid',
		DASHED:'dashed',
		SOLID_BG:'solid_bg',
		DASHED_BG:'dashed_bg'
	}

	const SizeEnum = {
		NORMAL:'normal',
		MEDIUM:'medium',
		SMALL:'small',
		MINI:'mini'
	}

	const NativeTypeEnum = {
		BUTTON:'button',
		SUBMIT:'submit',
		RESET:'reset'
	}

	let props = defineProps({
		color:{
			type:String,
			default:'primary',
			validator:function(value) {
				try{
					if(Object.values({
						PRIMARY:'primary',
						WARNING:'warning',
						ERROR:'error',
						SUCCESS:'success',
						DARK:'dark',
					}).includes(value)){
						return true;
					}
					new Color(value)
					return true;
				}catch(e){
					console.error(e.message)
				}
				return false;
			}
		},
		fontColor:{
			type:String,
			default:'white',
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
		round:Boolean,
		littleRound:Boolean,
		disabled:Boolean,
		// 边框类型：solid dashed solid_bg dashed_bg
		plain:String,
		block:Boolean,
		size:{
			type:String,
			default:'normal',
			validator:(value) => {
				return Object.values({
							NORMAL:'normal',
							MEDIUM:'medium',
							SMALL:'small',
							MINI:'mini'
						}).includes(value);
			}
		},
		nativeType:{
			type:String,
			default:'button',
			validator:(value) => {
				return Object.values({
							BUTTON:'button',
							SUBMIT:'submit',
							RESET:'reset'
						}).includes(value);
			}
		},
		circle:Boolean,
		iconPrefix:String,
		iconSuffix:String,
		loading:Boolean,
	})
	let xButton = ref(null);

	const renderStyle = () => {
		if(xButton.value){
			if(Object.values(ColorEnum).includes(props.color)){
				xButton.value.style.setProperty('--button-custom-bg-color', `var(--bg-color-${props.color})`)
				xButton.value.style.setProperty('--button-custom-hover-color', ColorMix('white',`--bg-color-${props.color}`,0.2))
				xButton.value.style.setProperty('--button-custom-font-color', props.fontColor)
				xButton.value.style.setProperty('--button-custom-hover-font-color', props.fontColor)
				if(props.plain){
					if(Object.values(PlainEnum).includes(props.plain)){
						let bgColor = new Color(`--bg-color-${props.color}`);
						bgColor.alpha = 0.2;
						xButton.value.style.setProperty('--plain', props.plain.split('_')[0])
						xButton.value.style.setProperty('--button-custom-plain-border-color',  `var(--bg-color-${props.color})`)
						xButton.value.style.setProperty('--button-custom-plain-bg-color',  props.plain.includes('_')?bgColor.hex:'transparent')
						xButton.value.style.setProperty('--button-custom-hover-plain-bg-color', ColorMix('white',`--bg-color-${props.color}`,0.2))
						xButton.value.style.setProperty('--button-custom-plain-font-color', props.fontColor == 'white'?`var(--bg-color-${props.color})`:props.fontColor)
					}else{
						console.error('你看看你按文档写了么，明明就只有四個属性，solid-----------dashed---------solid_bg-------------dashed_bg')
					}
				}
			}else{
				try{
					let bgColor = new Color(props.color);
					bgColor.alpha = 0.2;
					xButton.value.style.setProperty('--button-custom-bg-color', props.color)
					xButton.value.style.setProperty('--button-custom-hover-color', ColorMix('white',props.color,0.2))
					xButton.value.style.setProperty('--button-custom-font-color', props.fontColor)
					xButton.value.style.setProperty('--button-custom-hover-font-color',props.fontColor)
					if(props.plain){
						if(Object.values(PlainEnum).includes(props.plain)){
							xButton.value.style.setProperty('--plain', props.plain.split('_')[0])
							xButton.value.style.setProperty('--button-custom-plain-border-color', props.color)
							xButton.value.style.setProperty('--button-custom-plain-bg-color', props.plain.includes('_')?bgColor.hex:'transparent')
							xButton.value.style.setProperty('--button-custom-hover-plain-bg-color', ColorMix('white',props.color,0.2))
							xButton.value.style.setProperty('--button-custom-plain-font-color', props.fontColor == 'white'?`${props.color}`:props.fontColor)
						}else{
							console.error('你看看你按文档写了么，明明就只有四個属性，solid-----------dashed---------solid_bg-------------dashed_bg')
						}
					}
				}catch(e){
					console.error('你这个是颜色值嘛，兄弟')
				}
			}
		}
	}

	onMounted(() => {
		watch(() => props.color,() => {
			renderStyle();
		},{immediate:true})
		watch(() => props.plain,() => {
			renderStyle();
		},{immediate:true})
	})
	

</script>

<style lang="scss" scope>
	@import '../../style/var.scss';
	.x-button{
		padding: 8px 16px;
		margin: 0px 8px;
		display: inline-flex;
		font-size: 14px;
		align-items: center;
		--button-custom-bg-color:var(--bg-color-default);
		--button-custom-hover-color:var(--hover-color-default);
		--button-custom-font-color:black;
		--button-custom-hover-font-color:black;

		--plain:solid;
		--button-custom-plain-border-color:var(--bg-color-default);
		--button-custom-plain-bg-color:var(--bg-color-default);
		--button-custom-hover-plain-bg-color:var(--bg-color-default);
		--button-custom-plain-font-color:black;
	}
	.x-button.x-button-normal{
		padding: 8px 16px;
		
	}
	.x-button.x-button-medium{
		padding: 6px 12px;
	}
	.x-button.x-button-small{
		padding: 4px 8px;
	}
	.x-button.x-button-mini{
		padding: 2px 3px;
	}
	.x-button-block{
		width: calc(100% - 16px);
		height: auto;
		overflow: hidden;
		display: block;
	}

	.x-button-normal.x-button-circle{
		border-radius: 50%;
		padding: 12px;
	}
	.x-button-medium.x-button-circle{
		border-radius: 50%;
		padding: 8px;
	}
	.x-button-small.x-button-circle{
		border-radius: 50%;
		padding: 4px;
	}
	.x-button-mini.x-button-circle{
		border-radius: 50%;
		padding: 2px;
		font-size: 12px;
	}

	.x-button.x-custom-button{
		background-color: var(--button-custom-bg-color);
		color: var(--button-custom-font-color);
	}
	.x-button.x-custom-button:not(.x-button[disabled],.x-button[loading=true]):hover{
		transform: translateY(-3px);
		transition: all .1s;
		box-shadow: 0 10px 20px -10px var(--button-custom-bg-color);
		background: var(--button-custom-hover-color);
		color: var(--button-custom-hover-font-color);
	}
	.x-button.x-custom-button:not(.x-button[disabled],.x-button[loading=true]):active{
		transform: scale(.99);
		transition: all .5s;
	}
	.x-button.x-custom-plain-button{
		border:1px var(--plain) var(--button-custom-bg-color);
		background-color: var(--button-custom-plain-bg-color);
		color: var(--button-custom-plain-font-color);
	}
	.x-button.x-custom-plain-button:not(.x-button[disabled],.x-button[loading=true]):hover{
		transform: translateY(-3px);
		transition: all .1s;
		box-shadow: 0 10px 20px -10px var(--button-custom-bg-color);
	}
	.x-button.x-custom-plain-button:not(.x-button[disabled],.x-button[loading=true]):active{
		transform: scale(.99);
		transition: all .5s;
	}
	.x-button.x-round{border-radius: 1000px;}
	.x-button.x-little-round{border-radius: 4px;}
	.x-button:disabled{
		opacity: .3;
		cursor:  not-allowed;
		pointer-events: none;
	}
	.x-button[loading=true]{
		opacity: .5;
		cursor:  default;
		pointer-events: none;
	}
	.x-ripple {
		overflow: hidden;
		position: relative;
		transition: background-color .3s linear, border .3s linear;

		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			pointer-events: none;
			background-image: radial-gradient(circle, #000 10%, rgba(0, 0, 0, 0) 10.01%);
			background-repeat: no-repeat;
			background-position: 50%;
			transform: scale(10);
			opacity: 0;
			transition: transform .5s, opacity 1s;
		}

		&:active:after {
			transform: scale(0);
			opacity: .2;
			transition: 0s;
		}
	}
</style>