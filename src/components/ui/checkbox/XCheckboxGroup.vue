<template>
    <div ref="group" class="x-checkbox-group" :style="{flexDirection:vertical?'column':'row'}">
        <slot></slot>
    </div>
</template>
<script setup name="XCheckboxGroup">
    import {defineProps,onMounted,ref,onBeforeUnmount,getCurrentInstance} from 'vue';

    let props = defineProps({
        vertical:Boolean,
        values:{
            type:Array,
            default:[]
        }
    });
    let ctx = getCurrentInstance();
    let group = ref(null);
    let checkValues = ref(props.values);
    const change = (e) => {
        let childrens =  group?.value?.querySelectorAll("input[type=checkbox]:checked");
        checkValues.value = [];
        if(childrens){
            for(var i = 0; i < childrens.length; i++){
                childrens[i]?.value && checkValues.value.push(childrens[i]?.value)
            }
        }
        ctx.emit("update:values",checkValues.value)
    }
    onMounted(() => {

        group.value.querySelectorAll("input[type=checkbox]").forEach(element => {
            if(checkValues.value.includes(element.value)){
                element.checked = true
            }else{
                element.checked = false
            }
            element.addEventListener('change',change)
        });
    })
    onBeforeUnmount(() => {
        group.value.querySelectorAll("input[type=checkbox]").forEach(element => {
            element.removeEventListener('change',change)
        });
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