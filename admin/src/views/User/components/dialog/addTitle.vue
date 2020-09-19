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
            <el-form :model="userTitleform" :label-width="formLabelWidth">
                <el-form-item label="用户级别">
                    <el-input v-model="userTitleform.titleName" autocomplete="on"></el-input>
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
import {apiUserAddTitle} from '@/request/api'
export default {
    name:'userTag',
    data() {
        return {
            isAdd:true,
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'',
            userTitleform: {
                titleName:''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        OpenTitle(){
            this.centerDialogVisible = true
            this.dialogtitle = '增加用户级别'
        },
        save(){
           this.centerDialogVisible = false

           if(this.isAdd){
               apiUserAddTitle({
                   titleName:this.userTitleform.titleName
               }).then(res => {
                    this.$emit('saveUserTitile')
                    this.$parent.getData()
               }).catch(err => {
                   console.log(err)
               })
           }
        }
    },
}
</script>