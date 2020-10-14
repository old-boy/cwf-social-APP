<template>
    <view class="tab-bar">
        <scroll-view class="uni-swiper-tab" scroll-x="true" >
            <block v-for="(tab,index) in tabBars" :key="tab.id">
                <view 
                    class="scroll-view-item" 
                    :class="{'active' : tabIndex==index}"
                    @tap="tabClick(index)"
                    :style="scrollBarItemSytle"
                >
                    {{tab.name}} {{tab.num?tab.num:""}}
                <view 
                    class="swiper-tab-line" 
                    :isShow="isShow"
                    :class="{'show' : isShow==true }"></view>
                </view>
            </block>
        </scroll-view>
    </view>
</template>
<script>
export default {
    name:'navBar',
    props:{
        tabBars: Array,
        tabIndex: Number,
        isShow: Boolean,
        scrollBarItemSytle:{
            type: String,
            default: ''
        }
    },
    methods: {
        tabClick(index){
            this.$emit('tabClick', index)
        }
    },
}
</script>
<style lang="scss" scoped>
    .tab-bar{
        width: 100%;
        height: 80rpx;
        display: flex;
    }
	.scroll-view-item{
		color: #999;
	}
    .uni-scroll-view-content,
    .uni-scroll-view{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .uni-tab-bar{
        width: 100%;
        .active{
            color: #555;
            font-weight: bold;
        }
    }
	.active{
        color: #555;
        font-weight: bold;
        .swiper-tab-line{
            display: none;
            border-bottom: 3rpx solid #555;
            width: 70rpx;
            margin: auto;
            border-top: 3rpx solid #555;
            border-radius: 10rpx;
            &.show{
                display: block;
            }
        }
	}
</style>