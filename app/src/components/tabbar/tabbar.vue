<template>
    <view class="tab-bar">
        <navigator 
            :url="url" 
            :hover-class="hoverClass"
            :animation-type="animationType"
            :animation-duration="200"
            class="tab"
        >{{tabName}}</navigator>
    </view>
</template>
<script>
export default {
    name:'navBar',
    props:['hoverClass','tabName','url'],
    data() {
        return {
            animationType: 'pop-in'
        }
    }
}
</script>
<style lang="scss" scoped>
    .tab-bar{
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab{
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 18px;
            color: #555;
        }
    }
</style>