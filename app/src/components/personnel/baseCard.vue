<template>
    <view class="personnel-card">
        <view class="header">
            <mAvatar :titleSrc="titlePicSrc" :avatarSrc="avatarPicSrc"></mAvatar>
            <view class="info">
                <view class="top">
                    <view class="left">
                        <text class="name">{{info.name}}</text>
                        <view class="titles">
                            <image :src="titleOne" :mode="iconModel" class="title-pic"></image>
                            <image :src="titleTwo" :mode="iconModel" class="title-pic"></image>
                        </view>
                    </view>
                    <view class="right">
                        <text class="time">{{info.loginTime}}</text>
                    </view>
                </view>
                <view class="tags">
                    <text class="tag" v-for="(item,index) in info.tags" :key="index">{{item}}</text>
                </view>
            </view>
        </view>
        
        <view class="post">
            <view class="des">
                <text>{{post.description}}</text>
            </view>
            <view class="list">
                
                
            </view>
        </view>
    </view>
    
</template>
<script>


import mAvatar from '@/components/personnel/avatar.vue';

import avatarUrl from '@/static/avatar/xujaqi.jpeg';
import titleUrl from '@/static/personnel/zs1@3x.png';

import titleOne from '@/static/personnel/zs3@3x.png';
import titleTwo from '@/static/personnel/zs4@3x.png';

import urlOne from '@/static/post/01.jpg';
import urlTwo from '@/static/post/02.jpg';
import urlThree from '@/static/post/03.jpg';
import urlFour from '@/static/post/04.jpg';
import urlFive from '@/static/post/05.jpg';
import urlSix from '@/static/post/06.jpg';

export default {
    name:'personnelCard',
    components:{
        mAvatar
    },
    data() {
        return {
            titlePicSrc:'',
            avatarPicSrc:'',
            titleOne:titleOne,
            titleTwo:titleTwo,
            iconModel:'scaleToFill',
            info:{
                name:'许佳琪',
                title:[
                    {
                        name:'vip',
                        url:''
                    },
                    {
                        name:'皇冠',
                        url:''
                    }
                ],
                loginTime:'39分钟前',
                tags:['来自 iphone 11','吃货','书虫','宅女']
                
            },
            post:{
                description:'在东北马家花了900元吃了一顿无国界的料理是一种怎样的体验',
                tags:['美食','东北马家','马家菜'],
                imagesList:[
                    
                ]
            }
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
<style lang="scss" scoped>
    .personnel-card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 30rpx;
        .header{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
        .post{
            padding-right: 30rpx;
            list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;
                .pic{
                    width: 150rpx;
                    height:150rpx;
                    margin: 20rpx;
                }
            }
        }
        .info{
            flex: 1;
            padding-right: 40rpx;
            .top{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 16rpx;
                .left{
                    display: flex;
                    align-items: center;
                    flex-basis: 70%;
                }
                .right{
                    flex-basis: 30%;
                    align-items: center;
                }
                .titles{
                    display: flex;
                    .title-pic{
                        width: 40rpx;
                        height: 40rpx;
                    }
                }
                .name{
                    color: #111;
                    font-weight: 400;
                    margin-right: 20rpx;
                }
                .time{
                    color: #999;
                }   
            }
            .tags{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                .tag{
                    padding: 6rpx 20rpx;
                    text-align: center;
                    font-size: 18rpx;
                    color: #aaa;
                    background: #e5e5e5;
                    border-radius: 20rpx;
                    margin: 8rpx 10rpx 10rpx 0;
                }
            }
        }
    }
</style>