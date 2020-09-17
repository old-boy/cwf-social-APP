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
            <el-form :model="userTagform" :label-width="formLabelWidth">
                <el-form-item label="标签名称">
                    <el-input v-model="userTagform.tagName" autocomplete="on"></el-input>
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
import { apiUserAddTag } from '@/request/api'


export default {
    name:'userTag',
    data() {
        return {
            isAdd: true,
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'',
            userTagform: {
                tagName:''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        OpenTag(){
            this.centerDialogVisible = true
            this.dialogtitle = '增加用户标签'
        },
        save(){
            this.centerDialogVisible = false

            let action = ''
            if(this.isAdd){
                apiUserAddTag({
                    tagName: this.userTagform.tagName
                }).then(response => {
                    this.$emit('saveUserTag')
                    this.$parent.getData()
                })
            }else{
                //更新接口
            }
        }
    },
}
</script>