<template>
    <view class="personnel-avatar">
        <image :src="titleSrc" class="title"></image>
        <image :src="avatarSrc" class="avatar" :mode="imageMode"></image>
    </view>
</template>
<script>
export default {
    data() {
        return {
            imageMode:'scaleToFill'
        }
    },
    props:['titleSrc','avatarSrc']
}
</script>
<style lang="scss" scoped>
    .personnel-avatar{
        width: 200rpx;
        height: 200rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .avatar{
            width: 150rpx;
            height: 150rpx;
            border-radius: 50%;
            position: relative;
        }
        .title{
            width: 60rpx;
            height: 60rpx;
            position: absolute;
            left: 20rpx;
            top: 0;
        }
    }
</style>