<template>
    <view class="icon-warp" @click="clickIcon" :backgroud="backgroud">
        <image :size="size" :color="color" :src="src" class="icon"></image>
    </view>
</template>
<script>
export default {
    data(){
        return {
            size:String,
            color:String,
            src:String,
            backgroud:String
        }
    },
    methods: {
        clickIcon(){
            
        }
    },
}
</script>
<style lang="scss" scoped>
    .icon-warp{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .icon{
            width: 50px;
        }
    }
</style>