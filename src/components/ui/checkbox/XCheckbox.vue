<template>
    <div class="x-checkbox">
        <input :id="id" type="checkbox"/>
        <label :for="id" class="x-checkbox-warp">
            <div class="x-checkbox-btn"></div>
        </label>
    </div>
</template>
<script setup name="XCheckbox">
    import {defineProps,nextTick,getCurrentInstance} from 'vue';
	import Color from 'colorjs.io';
	import {guid} from '../../../utils/xutil'
	let ctx = getCurrentInstance();
	let id = guid();
</script>
<style scoped lang="scss">
    .x-checkbox{
        --checkbox-checked-color:var(--bg-color-primary);
        width: auto;
        overflow: hidden;
        height: auto;
        display: inline-flex;
        align-items: center;
        color: var(--white);
        margin:8px;
        input[type=checkbox]:checked ~ .x-checkbox-warp .x-checkbox-btn::after{
            opacity: 1;
            transition: all 1s;
        }
    }
    .x-checkbox-warp{
        width: auto;
        height: auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        cursor: pointer;
        .x-checkbox-btn{
            width: 18px;
            height: 18px;
            position: relative;

            &::before{
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                border-radius: 4px;
                top: 0px;
                left: 0px;
                border: 1px solid var(--gray);
            }
            &:hover::before{
                // background: var(--greyLight);
                border-color: var(--checkbox-checked-color);
            }
            &::after{
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                border-radius: 4px;
                top: 1px;
                left: 1px;
                right: 1px;
                bottom: 1px;
                opacity: 0;
                background: var(--checkbox-checked-color);
            }
            &:hover::after{
                box-shadow: 0 2px 12px 0 var(--checkbox-checked-color);
            }
        }
    }
</style>