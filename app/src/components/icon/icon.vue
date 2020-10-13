<template>
    <view class="icon-warp" @click="clickIcon" :backgroud="backgroud">
        <image :src="src" class="icon"></image>
    </view>
</template>
<script>
export default {
    name:"mIcon",
    props:['src','backgroud'],
    methods: {
        clickIcon(){
            this.$emit('click')
        }
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .icon-warp{
        display: flex;
        justify-content: center;
        align-items: center;
        .icon{
            width: 50rpx;
            height: 50rpx;
        }
    }
</style>