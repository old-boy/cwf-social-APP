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
            <el-form :model="userInfoform" :label-width="formLabelWidth">
                <el-form-item label="性别">
                    <el-input v-model="userInfoform.gender" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="userInfoform.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="星座">
                    <el-input v-model="userInfoform.constellation" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地区">
                    <el-input v-model="userInfoform.area" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input v-model="userInfoform.company" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="感情状态">
                    <el-select v-model="userInfoform.feelingStatus" placeholder="请选择用户感情状态">
                        <el-option label="热恋中" value="50"></el-option>
                        <el-option label="结婚" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册日期">
                    <el-input v-model="userInfoform.registrationDate"></el-input>
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
export default {
    name:'userInfo',
    data() {
        return {
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'',
            userInfoform: {
                gender: '',
                age: '',
                constellation: '',
                area:'',
                company:'',
                feelingStatus:'',
                registrationDate:''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        AddInfo(){
            this.centerDialogVisible = true
            this.dialogtitle = '增加用户基本信息'
        },
        save(){
            this.centerDialogVisible = false
            this.$emit('saveUserInfo')
        }
    },
}
</script>