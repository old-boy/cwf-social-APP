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
                <el-form-item label="选择icon">
                    <ele-upload-image
                        :fileSize="0.1"
                        :isShowTip="false"
                        :lazy="true"
                        :responseFn="handleResponse"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        title="单张图片"
                        v-model="userTitleform.image"
                        :httpRequest="upload"
                        class="upload-btn"
                        >
                    </ele-upload-image>
                </el-form-item>
                
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
import {apiUserAddTitle,apiUpload} from '@/request/api'
import EleUploadImage from "vue-ele-upload-image";
export default {
    name:'userTag',
    components:{
        EleUploadImage
    },
    data() {
        return {
            isAdd:true,
            fileData:{},
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'',
            userTitleform: {
                titleName:'',
                image:''
            },
            image: "",
            formLabelWidth: '120px'
        }
    },
    methods: {
        OpenTitle(){
            this.centerDialogVisible = true
            this.dialogtitle = '增加用户级别'
        },
        handlePreview(){

        },
        handleRemove(){

        },
        handleResponse (response, file, fileList) {
            // return file.url
            this.image = file.url
            console.log('imageUrl  ' + JSON.stringify(this.image))
        },
        save(){
           this.centerDialogVisible = false
           let filename = this.fileData.name
           let size = this.fileData.size
           let type = this.fileData.type
           let uid = this.fileData.uid
           if(this.isAdd){
               apiUserAddTitle({
                   titleName:this.userTitleform.titleName,
                    filename,
                    size,
                    type,
                    uid
               }).then(res => {
                    this.$emit('saveUserTitile')
                    this.$parent.getData()
               }).catch(err => {
                   console.log(err)
               })
           }
        },
        upload(){
            apiUpload({
                file: this.image
            }).then(response => {
                console.log(response)
            })
        }
    },
}
</script>
<style lang="scss" scope>
    .upload-btn{

    }
</style>