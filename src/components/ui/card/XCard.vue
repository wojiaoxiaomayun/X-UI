<template>
	<!-- TODO: 后期加入vuesax4 中的卡片 -->
    <div ref="XCard" class="x-card" :class="[shadowStatus == 'never'?'':shadowStatus == 'always'?'x-card-shadow':shadowStatus == 'hover'?'x-card-shadow-hover':'']" :style="{border:border?'':'none'}">
		<div v-if="title || slots?.header" class="x-card-head" :style="{...headerStyle,border:border?'':'none'}">
			<slot name="header">
				{{title}}
			</slot>
			<slot name="extra"></slot>
		</div>
		<div v-if="slots?.cover" class="x-card-cover" :style="{...coverStyle,border:border?'':'none'}">
			<slot name="cover"></slot>
		</div>
		<div v-if="slots?.default" class="x-card-content" :style="{...contentStyle,border:border?'':'none'}">
			<slot></slot>
		</div>
		<div v-if="slots?.footer" class="x-card-footer" :style="{...footerStyle,border:border?'':'none'}">
			<slot name="footer"></slot>
		</div>
		<div v-if="slots?.action" class="x-card-action" :style="{...actionStyle,border:border?'':'none'}">
			<slot name="action"></slot>
		</div>
    </div>
</template>

<script setup name="XCard">
	import {defineProps,useSlots,onMounted,ref,watch} from 'vue'
	import Color from 'colorjs.io'

	const props = defineProps({
		title:String,
		shadow:{
			type:[String,Object],
			default:'never'
		},
		border:Boolean,
		headerStyle:Object,
		coverStyle:Object,
		contentStyle:Object,
		footerStyle:Object,
		actionStyle:Object
	});

	let ShadowEnum = {
		NEVER:'never',
		ALWAYS:'always',
		HOVER:'hover'
	};
	let XCard = ref(null);
	let slots = ref(null);
	let shadowStatus = ref(null);

	onMounted(() => {
		slots.value = useSlots();
		watch(() => props.shadow,val => {
			if(typeof val == 'string'){
				shadowStatus.value = Object.values(ShadowEnum).includes(val)?val:ShadowEnum.NEVER;
			}else if(typeof val == 'object'){
				shadowStatus.value = Object.values(ShadowEnum).includes(val?.type)?val?.type:ShadowEnum.NEVER;
				if(val?.color){
					try{
						let color = new Color(val?.color);
						XCard.value.style.setProperty('--shadow-color', color.hex)
					}catch(e){
						console.error('你输个颜色有那么难么')
					}
				}
			}
		},{immediate:true})
	});
</script>

<style lang="scss" scoped>
    .x-card{
		--shadow-color:rgba(0, 0, 0, 0.1);
        width: 100%;
        display: inline-flex;
        flex-direction: column;
		border:1px solid var(--border-color);
		background: var(--bg-color);
		color: var(--font-color);

		.x-card-head{
			display: inline-flex;
			padding: 16px 24px;
			flex-direction: row;
			justify-content: space-between;
			user-select: none;
			font-size: 16px;
			// border-bottom: 1px solid var(--border-color);
			.x-card-head-header{
				flex: 1;
			}
		}
		.x-card-content{
			padding: 16px 24px;
			text-align: left;
			// border-bottom: 1px solid var(--border-color);
		}
		.x-card-footer{
			padding: 16px 24px;
			text-align: left;
			// border-bottom: 1px solid var(--border-color);
		}
		.x-card-action{
			padding: 16px 24px;
			text-align: left;
		}
    }
	.x-card.x-card-shadow{
		box-shadow: 0 2px 12px 0 var(--shadow-color)
	}
	.x-card.x-card-shadow-hover:hover{
		transform: translateY(-3px);
		transition: all .1s;
		box-shadow: 0 2px 12px 0 var(--shadow-color)
	}
</style>