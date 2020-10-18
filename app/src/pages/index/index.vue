<template>
	<view class="home-recommended">
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
		<view class="main-warp">
			<!-- tab menu container -->
			<view class="sub-menu">
				<mTab 
					:tabBars="subTabBars"
					:tabIndex="subTabIndex"
					:isShow="subTabLineShow"
					@tabClick="subTabbarHandle" />
			</view>
			<swiper class="swiper"
					:current="subTabIndex"
					@change="tabChange">
				<swiper-item v-for="(items, index) in contents" :key="index">
					<scroll-view scroll-y 
								 class="list"
								 :refresher-background="refBg"
								 :upper-threshold="50"
								 :lower-threshold="50"
								 :show-scrollbar="showScrollBar"
								 :refresher-enabled="refresherEnabled"
								 :disable-touch="disableTouch">
						<template v-if="items.list.length > 0">
                            <!-- list -->
                            <block v-for="(item,i) in items.list" :key="i">
                                <view v-if="subTabIndex == 0">
									<text>{{item.name}}</text>
								</view>
								<view v-else-if="subTabIndex == 1" class="hot">
									<mHotPerCard />
								</view>
								<view v-else-if="subTabIndex == 2">
									<text>{{item.name}}</text>
								</view>
                            </block>
                        </template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import mIcon from '@/components/icon/icon';
	import mTab from '@/components/tabbar/tabbar';
	import mHotPerCard from '@/components/personnel/baseCard.vue';



	import searchIcon from '@/static/icons/header/sousuo.png';
	import messageIcon from '@/static/icons/header/tishi.png';
	import fabuIcon from '@//static/icons/header/fabu.png';

	export default {
		components:{
			mIcon,
			mTab,
			mHotPerCard
		},
		data() {
			return {
				searchIconUrl:'',
				messageIconUrl:'',
				fabuIconUrl:'',
				disableTouch:true,
				tabLineShow:true,
				subTabLineShow:false,
				showScrollBar:false,
				refresherEnabled:true,
				refBg:'#f2f2f2',
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
				tabIndex:1,
				subTabIndex:0,
				contents:[
					{
						list: [
							{
								name:'aaa'
							}
						]
					},
					{
						list: [
							{
								name:'bb'
							}
						]
					},
					{
						list:[
							{
								name:'ccc'
							}
						]
					}
				]
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
			},
			tabChange(e){
				// console.log(e)
				this.subTabIndex = e.detail.current
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.home-recommended{
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
		.hot{
			width: 100%;
		}
		.sub-menu{
			width: 100%;
			height: 80rpx;
			background: #fff;
			margin: 20rpx 0;
		}
		.list{
			padding: 15rpx;
			background: #fff;
		}
	}
</style>
