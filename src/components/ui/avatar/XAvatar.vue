<template>
    <div class="x-avatar-warp">
        <div class="x-avatar" :class="[round && 'is-round']" :style="{...avatarStyle}">
            <img class="x-avatar-img" :class="[scale && 'is-scale']" v-if="src" :src="src"/>
            <i v-if="!src && icon" :class="[icon,scale && 'is-scale']" class="x-avatar-icon" :style="iconStyle"></i>
            <div class="x-avatar-text" :class="[icon,scale && 'is-scale']" v-if="!src && !icon && text" :style="textStyle">{{text}}</div>
        </div>
        <div class="x-avatar-slot">
            <slot></slot>
        </div>
    </div>
</template>

<script setup name="XAvatar">
    import { defineProps } from "vue";
    let props = defineProps({
        src:String,
        icon:String,
        text:String,
        scale:Boolean,
        round:Boolean,
        avatarStyle:{
            type:Object,
            default:{
                width:'45px',
                height:'45px',
                background:'var(--bg-color-primary)'
            }
        },
        iconStyle:{
            type:Object,
            default:{
                color:'white',
                fontSize:'24px'
            }
        },
        textStyle:{
            type:Object,
            default:{
                color:'white'
            }
        }
    })
</script>

<style lang="scss" scope>
    .x-avatar-warp{
        display: inline-block;
        position: relative;
        .x-avatar-slot{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            pointer-events: none;
            z-index: 5;
            transform: scaleZ(1);
        }
    }
    .x-avatar{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 4px;
        text-align: center;
        overflow: hidden;
        color: white;
        margin: 8px;
        .x-avatar-img{
            width: 100%;
            height: 100%;
        }
        
        .x-avatar-icon{
            font-size: 24px;
        }

        .is-scale:hover{
            transform: scale(1.1);
            transition: all .1s;
        }
        &.is-round{
            border-radius: 50%;
        }
    }
</style>