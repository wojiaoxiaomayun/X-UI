<template>
	<img src="./assets/logo.png" />
	<x-divider></x-divider>
	<x-button-group round>
		<x-button>小徐加油</x-button>
		<x-button color="error">小徐加油</x-button>
		<x-button color="success">小徐加油</x-button>
		<x-button color="dark">小徐加油</x-button>
		<x-button color="red" iconPrefix="x-icon-left-circle" loading iconRight="x-icon-right-circle">
			添加人员
		</x-button>
	</x-button-group>
	<x-divider></x-divider>
	<x-button color="#8a2be2">小徐加油</x-button>
	<x-button color="#8a2be2" plain="dashed" iconPrefix="x-icon-weibo-square-fill">#8a2be2</x-button>
	<x-button color="#8a2be2" plain="dashed" iconPrefix="x-icon-weibo-square-fill" littleRound>#8a2be2</x-button>
	<x-button color="#8a2be2" plain="dashed" iconPrefix="x-icon-weibo-square-fill" round>#8a2be2</x-button>
	<x-button color="#8a2be2" plain="dashed" iconPrefix="x-icon-weibo-square-fill" round size="mini">#8a2be2</x-button>
	<x-divider></x-divider>
	<x-card title="小徐" :shadow="{type:'hover'}" style="width:300px;" border>
		<template #header>
			标题
		</template>
		 <template #extra>
			<x-button-group round>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
				</x-button>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-weibo-square-fill"></i>
				</x-button>
			</x-button-group>
		</template>
		啥玩意啊
		<br/>
		掉的不行
		<template #footer>
			哈哈
		</template>
		<template #action>
			<x-button>好屌啊</x-button>
		</template>
		<!-- <template #cover>
			<img src="https://img2.baidu.com/it/u=2010980676,2375641500&fm=11&fmt=auto&gp=0.jpg" style="width:100%;">
		</template> -->
	</x-card>
	<x-divider></x-divider>
	<x-avatar text="xhl" scale>
		<!-- <div  style="width:15px;height:15px;border-radius:100px;background:var(--bg-color-success);bottom:0px;position:absolute;right:-1px;"></div> -->
	</x-avatar>
	<x-avatar icon="x-icon-weibo-square-fill" scale round>
		<!-- <div  style="width:15px;height:15px;border-radius:100px;background:var(--bg-color-success);bottom:0px;position:absolute;right:-1px;"></div> -->
	</x-avatar>
	<x-avatar src="https://img2.baidu.com/it/u=2010980676,2375641500&fm=11&fmt=auto&gp=0.jpg" scale>
		<!-- <div  style="width:15px;height:15px;border-radius:100px;background:var(--bg-color-success);bottom:0px;position:absolute;right:-1px;"></div> -->
	</x-avatar>
	<x-divider textPosition="right">中国共产党万岁</x-divider>
	<x-switch trackColor="var(--bg-color-success)">
		<template #on>
			<i class="x-icon-weibo-square-fill"></i>
		</template>
		<template #off>中国共产党万岁</template>
	</x-switch>
	<x-switch>
		<template #circle>
			<i class="x-icon-weibo-square-fill"></i>
		</template>
	</x-switch>
	<x-switch trackColor="var(--gradualBlue)" disabled square v-model:checked="checked"></x-switch>
	<x-divider textPosition="left" border="1px dotted red">
		<x-button-group round>
			<x-button size="mini" color="white" fontColor="black">
				<i class="x-icon-left-circle"></i>
			</x-button>
			<x-button size="mini" color="white" fontColor="black">
				<i class="x-icon-weibo-square-fill"></i>
			</x-button>
		</x-button-group>
	</x-divider>
	<x-checkbox></x-checkbox>
	<x-checkbox color="var(--bg-color-warning)">
		<template #icon>
			<i class="x-icon">&#xe88c;</i>
		</template>
		<x-button size="mini" color="white" fontColor="black">
			<i class="x-icon-weibo-square-fill"></i>
		</x-button>
	</x-checkbox>
	<x-checkbox checked  color="var(--bg-color-primary)">
		<template #icon>
			<i class="x-icon">&#xe99c;</i>
		</template>
		中国共产党万岁
	</x-checkbox>
	<x-divider textPosition="right">中国共产党万岁</x-divider>
	<x-checkbox-group vertical>
		<x-checkbox hideBox v-for="i in 20" :key="i" checked :value="i + ''"  color="var(--bg-color-success)">
			<template #icon>
				<i class="x-icon">&#xe99c;</i>
			</template>
			中国共产党万岁
		</x-checkbox>
	</x-checkbox-group>
</template>

<script setup>
	import { ref,watch } from "vue";
	import XButton from './components/ui/button/XButton.vue'
	import XButtonGroup from './components/ui/button/XButtonGroup.vue' 
	import XCard from './components/ui/card/XCard.vue'
	import XAvatar from "./components/ui/avatar/XAvatar.vue";
	import XSwitch from "./components/ui/switch/XSwitch.vue";
	import XDivider from './components/ui/divider/XDivider.vue'
	import XCheckbox from "./components/ui/checkbox/XCheckbox.vue";
	import XCheckboxGroup from "./components/ui/checkbox/XCheckboxGroup.vue";
	let checked = ref(true)
	watch(checked,val => {
		console.log(val)
	})
</script>

<style>
	html,body{background: var(--bg-color);color: var(--font-color);}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
