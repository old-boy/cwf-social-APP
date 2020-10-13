<template>
	<view class="home-text-recommended">
		<!-- header -->
		<view class="header">
			<view class="search">
				<mIcon :src="searchIconUrl" :click="searchClick" />
			</view>
			<view class="tab-menu">
				<mTab 
					:hoverClass="hoverClass"
					:tabName="followName"
					:url="followUrl" />
				<mTab 
					:hoverClass="hoverClass"
					:tabName="recommendName"
					:url="recommendUrl" />
			</view>
			<view class="fun-btns">
				<mIcon :src="messageIconUrl" :click="messageClick" />
				<mIcon :src="fabuIconUrl" :click="fabuClick" />
			</view>
		</view>
	</view>
</template>

<script>
	import mIcon from '@/components/icon/icon';
	import mTab from '@/components/tabbar/tabbar';


	import searchIcon from '@/static/icons/header/sousuo.png';
	import messageIcon from '@/static/icons/header/tishi.png';
	import fabuIcon from '@//static/icons/header/fabu.png';

	export default {
		components:{
			mIcon,
			mTab
		},
		data() {
			return {
				searchIconUrl:'',
				messageIconUrl:'',
				fabuIconUrl:'',
				hoverClass:'tab-active',
				followUrl:'',
				followName:'关注',
				recommendUrl:'',
				recommendName:'推荐'
			}
		},
		onShow() {
			this.setIcon()
		},
		methods: {
			setIcon(){
				this.searchIconUrl = searchIcon
				this.messageIconUrl = messageIcon
				this.fabuIconUrl = fabuIcon
			},
			setTabUrl(){
				this.followUrl=""
			},
			searchClick(){
				console.log('search')
			},
			messageClick(){
				console.log('message')
			},
			fabuClick(){
				console.log('fabu')
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.home-text-recommended{
		.header{
			width: 100%;
			height: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.search{width: 80rpx;}
			.tab-menu{
				flex-basis: 50%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.tab-active{
					color: blue;
				}
			}
			.fun-btns{
				width: 150rpx;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
		}
	}
</style>
