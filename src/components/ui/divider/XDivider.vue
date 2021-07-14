<template>
    <div :class="[!vertical && 'x-divider',vertical && 'x-divider-vertical']" :style="{justifyContent:justify,borderBottom:vertical?'none':border,borderLeft:vertical?border:'none'}">
        <div class="x-divider-span">
            <slot></slot>
        </div>
    </div>
</template>
<script setup name="Xdivider">
    import {defineProps,computed} from 'vue'
    let props = defineProps({
        textPosition:{
            type:String,
            default:'left',
            validator:(value) => ['left','center','right'].includes(value)
        },
        border:String,
        vertical:Boolean
    });

    let justify = computed(() => {
        return {
            left:'flex-start',
            center:'center',
            right:'flex-end'
        }[props.textPosition]
    })
</script>
<style lang="scss" scoped>
    .x-divider{width: 96%;height: 0px;margin-left: 1%;margin-right:1%;margin-top:16px;margin-bottom:16px;display: flex;border-bottom:1px solid var(--greyLight);align-items: center;padding: 0px 1%;}
    .x-divider .x-divider-span{padding: 8px 16px;color: var(--grey);background: var(--white);}
    .x-divider-vertical{width:0px;height: 96%;margin-top: 1%;margin-bottom:1%;margin-left:16px;margin-right:16px;display: inline-flex;flex-direction: column;border-right:1px solid var(--greyLight);align-items: center;padding: 1% 0px;}
    .x-divider-vertical .x-divider-span{padding: 8px 16px;color: var(--grey);background: var(--white);}
</style>