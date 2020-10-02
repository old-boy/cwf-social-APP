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
                    <el-upload
                        class="upload-demo"
                        action=""
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-change="handleChange"
                        :file-list="fileList"
                        :http-request="uploadObj"
                        :headers="headers"
                        :name="uploadName"
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
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
import {apiUserAddTitle,apiUpload } from '@/request/api'

export default {
    name:'userTitle',
    data() {
        return {
            isAdd:true,
            fileData:null,
            centerDialogVisible: false,
            showClo:false,
            dialogtitle:'',
            userTitleform: {
                titleName:'',
                image:''
            },
            fileList:[],
            uploadName:'upload',
            formLabelWidth: '120px'
        }
    },
    computed: {
        //设置请求头
        headers() {
            return {
                // 设置Content-Type类型为multipart/form-data
                'ContentType': 'multipart/form-data'
            }
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
        handleChange(file, fileList){
            this.fileList = fileList
            this.fileData = file

            console.log('aaa ' + this.fileData)
        },
        handleRemove(file, fileList) {
            
        },
        handlePreview(file) {
            
        },
        uploadObj(item){
            // console.log('submitFile  ' + item)
            var fileObj = {
                name: item.file.name,
                size: item.file.size,
                type: item.file.type,
                uid: item.file.uid,
                lastModified: item.file.lastModified
            }

            apiUpload(fileObj).then(response => {
                console.log('uploadResponse   ' + response)
            })
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleResponse (response, file, fileList) {
            // return file.url
            this.image = file.url
            console.log('imageUrl  ' + JSON.stringify(this.image))
            return file.url
        },
        save(){
           this.centerDialogVisible = false
           let filename = this.fileData.name
           let size = this.fileData.size
           let type = this.fileData.type
           let uid = this.fileData.uid
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
        },
        upload(){
            
        }
    },
}
</script>
<style lang="scss" scope>
    .upload-btn{

    }
</style>