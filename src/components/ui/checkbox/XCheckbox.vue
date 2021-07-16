<template>
    <div class="x-checkbox" :style="{'--checkbox-checked-color':color}">
        <input :id="id" type="checkbox" :checked="checked" :value="value" :disabled="disabled" @change="checkboxChange"/>
        <label :for="id" class="x-checkbox-warp">
            <div class="x-checkbox-btn">
                <div class="x-checkbox-icon">
                    <slot name="icon">
                        <i class="x-icon-check"></i>
                    </slot>
                </div>
            </div>
            <div class="x-checkbox-label" v-if="slots.default">
                <slot>
                </slot>
            </div>
        </label>
    </div>
</template>
<script setup name="XCheckbox">
    import {defineProps,useSlots,getCurrentInstance} from 'vue';
	import Color from 'colorjs.io';
	import {guid} from '../../../utils/xutil'

	let ctx = getCurrentInstance();
	let id = guid();
    let slots = useSlots();

    let props = defineProps({
        color:{
            type:String,
            default:'var(--bg-color-primary)',
            validator:(value) => {
                try{
                    new Color(value);
                    return true;
                }catch(e){
                    
                }
                return false;
            }
        },
        checked:Boolean,
        disabled:Boolean,
        value:String
    });

    const checkboxChange = () => {
        ctx.emit("update:checked",!props.checked)
    }
</script>
<style lang="scss">
    .x-checkbox{
        --checkbox-checked-color:var(--bg-color-primary);
        width: auto;
        max-width: 100%;
        overflow: hidden;
        height: auto;
        display: inline-flex;
        align-items: center;
        color: var(--white);
        margin:8px;
        input[type=checkbox]{
            display: none;
        }

        input[type=checkbox]:disabled ~ .x-checkbox-warp{
            opacity: .7;
            cursor: not-allowed;
            // pointer-events: none;
        }

        input[type=checkbox]:checked ~ .x-checkbox-warp .x-checkbox-btn{
            transform: rotate(0deg);
            transition: all .5s;
        }
        input[type=checkbox]:checked ~ .x-checkbox-warp .x-checkbox-btn::after{
            width: 16px;
            height: 16px;
            transition: all .5s;
        }
    }
    .x-checkbox-warp{
        width: auto;
        height: auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;

        .x-checkbox-btn{
            width: 18px;
            height: 18px;
            position: relative;
            transform: rotate(-90deg);
            transition: all .5s;
            
            .x-checkbox-icon{
                position: relative;
                z-index: 10;
                font-size: 12px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                *{
                    font-size: 12px !important;
                }

                &:hover{
                    box-shadow: 0 3px 15px 0 rgba(var(--checkbox-checked-color),.35)
                }
            }


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
                width: 0px;
                height: 0px;
                border-radius: 4px;
                top: 1px;
                left: 1px;
                right: 1px;
                bottom: 1px;
                // opacity: 0;
                background: var(--checkbox-checked-color);
            }
            &:hover::after{
                box-shadow: 0 2px 12px 0 var(--checkbox-checked-color);
                transform: scale(0.8);
                transition: all .3s;
            }
        }

        .x-checkbox-label{
            flex: 1;
            padding: 8px;
            color: var(--font-color);
            font-size: 14px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            &:hover{
                color:var(--checkbox-checked-color)
            }
        }
    }
</style>