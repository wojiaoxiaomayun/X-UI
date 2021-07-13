<template>
	<img src="./assets/logo.png" />
	<x-button-group round>
		<x-button>小徐加油</x-button>
		<x-button color="warning">小徐加油</x-button>
		<x-button color="error">小徐加油</x-button>
		<x-button color="success">小徐加油</x-button>
		<x-button color="dark">小徐加油</x-button>
		<x-button color="red" iconPrefix="x-icon-left-circle" loading iconRight="x-icon-right-circle">
			添加人员
		</x-button>
	</x-button-group>
	<x-button color="#8a2be2" plain="dashed" iconPrefix="x-icon-weibo-square-fill">#8a2be2</x-button>
	<br/>
	<x-card title="小徐" :shadow="{type:'hover',color:'rgba(255,0,0,.3)'}" style="width:300px;" border>
		<!-- <template #header>
			中国共产党
		</template> -->
		<!-- <template #extra>
			<x-button-group round>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
				</x-button>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
				</x-button>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
				</x-button>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
				</x-button>
				<x-button size="mini" color="white" fontColor="black">
					<i class="x-icon-left-circle"></i>
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
		</template> -->
		<template #cover>
			<img src="https://img2.baidu.com/it/u=2010980676,2375641500&fm=11&fmt=auto&gp=0.jpg" style="width:100%;">
		</template>
	</x-card>

	<br/>
	<x-avatar text="xhl" scale>
		<div  style="width:15px;height:15px;border-radius:100px;background:var(--bg-color-success);bottom:0px;position:absolute;right:-1px;"></div>
	</x-avatar>
	<br/>
	<br/>
	<br/>
	<x-switch trackColor="var(--bg-color-success)">
		<template #on>a</template>
		<template #off>中</template>
	</x-switch>
	<x-switch>
		<template #circle>
			<i class="x-icon-weibo-square-fill"></i>
		</template>
	</x-switch>
	<x-switch trackColor="var(--bg-color-dark)" square></x-switch>
</template>

<script setup>
	import XButton from './components/ui/button/XButton.vue'
	import XButtonGroup from './components/ui/button/XButtonGroup.vue' 
	import XCard from './components/ui/card/XCard.vue'
	import XAvatar from "./components/ui/avatar/XAvatar.vue";
	import XSwitch from "./components/ui/switch/XSwitch.vue";
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
