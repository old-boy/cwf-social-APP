<template>
	<view class="home-text-recommended">
		<!-- header -->
		<view class="header">
			<view class="search">
				<mIcon :src="searchIconUrl" :click="searchClick" />
			</view>
			<view class="tab-menu">
				<mTab 
					:tabBars="tabBars"
					:tabIndex="tabIndex"
					:isShow="tabLineShow"
					@tabClick="tabbarHandle" />
			</view>
			<view class="fun-btns">
				<mIcon :src="messageIconUrl" :click="messageClick" />
				<mIcon :src="fabuIconUrl" :click="fabuClick" />
			</view>
		</view>
		<view class="sub-menu">
			<mTab 
				:tabBars="subTabBars"
				:tabIndex="subTabIndex"
				:isShow="subTabLineShow"
				@tabClick="subTabbarHandle" />
		</view>
		<view class="main">
			
		</view>
	</view>
</template>

<script>
	import mIcon from '@/components/icon/icon';
	import mTab from '@/components/tabbar/tabbar';
	import mPerCard from '@/components/personnel/baseCard.vue';


	import searchIcon from '@/static/icons/header/sousuo.png';
	import messageIcon from '@/static/icons/header/tishi.png';
	import fabuIcon from '@//static/icons/header/fabu.png';

	export default {
		components:{
			mIcon,
			mTab,
			mPerCard
		},
		data() {
			return {
				searchIconUrl:'',
				messageIconUrl:'',
				fabuIconUrl:'',
				tabLineShow:true,
				subTabLineShow:false,
				tabBars:[{
					name:'关注',
					id:'guanzhu'
				},{
					name:'推荐',
					id:'tuijian'
				}],
				subTabBars:[
					{
						name: '热门',
						id:'hot'
					},
					{
						name: '同城',
						id:'sameCity'
					},
					{
						name: '榜单',
						id: 'goldList'
					}
				],
				tabIndex:0,
				subTabIndex:0
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
			tabbarHandle(index){
				console.log('index    ' + index)
				this.tabIndex = index
			},
			subTabbarHandle(index){
				console.log('subindex    ' + index)
				this.subTabIndex = index
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
		width: 100%;
		height: 100%;
		.header{
			width: 100%;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.search{
				width: 150rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.tab-menu{
				flex: 1;
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
		.sub-menu{
			width: 100%;
			height: 80rpx;
			background: #fff;
			margin: 20rpx 0;
		}
		.main{
			height: calc(100% - 80rpx);
			padding: 15rpx;
			background: #fff;
		}
	}
</style>
