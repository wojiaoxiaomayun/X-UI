<template>
    <div ref="group" class="x-checkbox-group" :style="{flexDirection:vertical?'column':'row'}">
        <slot></slot>
    </div>
</template>
<script setup name="XCheckboxGroup">
    import {defineProps,onMounted,ref,onBeforeUnmount} from 'vue';

    let props = defineProps({
        vertical:Boolean,
        value:Array
    })
    let group = ref(null)
    const change = (e) => {

    }
    onMounted(() => {
        let childrens =  group.value.children;
        for(var i = 0; i < childrens.length; i++){
            childrens[i].addEventListener('change',change)
        }
    })
    onBeforeUnmount(() => {
        let childrens =  group.value.children;
        for(var i = 0; i < childrens.length; i++){
            childrens[i].removeEventListener('change',change)
        }
    })
</script>
<style lang="scss">
    .x-checkbox-group{
        width: 100%;
        height: auto;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        .x-checkbox{
            margin:0px 4px;
        }
    }
</style>