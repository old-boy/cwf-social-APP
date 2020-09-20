<template>
    <div class="user-dialog">
        <el-dialog
            :visible.sync="centerDialogVisible"
            :show-close="showClo"
            :title="dialogtitle"
            width='30%'
            center
            >
            <div class="el-dialog__header">
                <button type="button" aria-label="Close" class="el-dialog__headerbtn"  @click="centerDialogVisible = false">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                </button>
            </div>
            <el-form :model="userform" :label-width="formLabelWidth">
                <el-form-item label="用户名">
                    <el-input v-model="userform.userName" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userform.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="userform.pwdKey" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-input v-model="userform.avatar" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户基本资料">
                    <el-select v-model="userform.info" placeholder="请选择用户基本资料">
                        <el-option label="性别" value="sex"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="userform.role" placeholder="请选择用户角色">
                        <el-option
                        v-for="item in roleList"
                        :key="item._id"
                        :label="item.roleName"
                        :value="item._id"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="粉丝数量">
                    <el-input v-model="userform.userFans"></el-input>
                </el-form-item>
                <el-form-item label="关注数量">
                    <el-input v-model="userform.follow"></el-input>
                </el-form-item>
                <el-form-item label="用户标签">
                    <el-select v-model="userform.tags" placeholder="请选择用户标签">
                        <el-option 
                            v-for="item in tagList"
                            :key="item._id"
                            :label="item.tagName" 
                            :value="item._id"
                            >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户称号">
                    <el-select v-model="userform.title" placeholder="请选择用户称号">
                        <el-option 
                        v-for="item in titleList"
                        :key="item._id"
                        :label="item.titleName" 
                        :value="item._id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户魅力级别">
                    <el-select v-model="userform.charm" placeholder="请选择用户魅力值">
                        <el-option 
                        v-for="item in charmList"
                        :key="item._id"
                        :label="item.reward" 
                        :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
           
                <el-form-item label="发表文章数量">
                    <el-input v-model="userform.articles"></el-input>
                </el-form-item>
                <el-form-item label="视频数量">
                    <el-input v-model="userform.videos"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

import {
    apiUserGetTag,
    apiUserAdd,
    apiUserGetRole,
    apiUserGetTitle
} from '@/request/api'

export default {
    name:'addDialog',
    props:{
        rowData:{
            type: Object
        }
    },
    data() {
        return {
            roleList:[],
            tagList:[],
            titleList:[],
            charmList:[],
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'增加用户',
            userform: {
                userName: '',
                password: '',
                pwdKey: '',
                avatar:'',
                info:'',
                role:'',
                userFans:'',
                follow:'',
                tags:'',
                title:'',
                charm:'',
                articles:'',
                videos:''
            },
            formLabelWidth: '120px'
        }
    },
    created() {
        this.getRole()
        this.getTag()
        this.getTitle()
    },
    methods: {
        // 添加用户
        Adduser() {
            this.centerDialogVisible = true
            this.dialogtitle = '增加人员'

        },
        getRole(){
            apiUserGetRole().then(res => {
                this.roleList = res.result
            })
        },
        getTag(){
            apiUserGetTag().then(res => {
                this.tagList = res.result
            })
        },
        getTitle(){
            apiUserGetTitle().then(res => {
                this.titleList = res.result
            })
        },
        getCharm(){

        },
        save(){
            this.centerDialogVisible = false;
            // apiUserAdd({

            // })

            this.$emit('userData');
        },
    },
}
</script>
<style lang="scss" scope>
    .user-dialog .dialog-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-button{
          padding: 6px 10px;
        }
      }
</style>