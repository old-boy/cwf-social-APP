<template>
    <view class="personnel-card">
        <mAvatar :titleSrc="titlePicSrc" :avatarSrc="avatarPicSrc"></mAvatar>
    </view>
</template>
<script>
import mAvatar from '@/components/personnel/avatar.vue';

import avatarUrl from '@/static/personnel/weixin@3x.png';
import titleUrl from '@/static/personnel/zs1.png';

export default {
    name:'personnelCard',
    components:{
        mAvatar
    },
    data() {
        return {
            titlePicSrc:'',
            avatarPicSrc:''
        }
    },
    created() {
        this.setUrl()
    },
    methods: {
        setUrl(){
            this.avatarPicSrc = avatarUrl
            this.titlePicSrc = titleUrl
        }
    },
}
</script>