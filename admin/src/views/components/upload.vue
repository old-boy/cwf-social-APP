<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            ref="upload"
            :action="domain"
            :http-request="uploadRequest"
            :file-list="fileList"
            :list-type="picture"
            multiple>
            <el-button size="small" type="primary" @click="uploadFile">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
import { apiUpload } from '@/request/api'
export default {
    name:'upload',
    data() {
        return {
            file:{},
            fileList:[],
            domain:'',
            picture:''
        }
    },
    created() {
        
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        uploadFile(){

            const fileData = new FormData()
            const fileConfig = { headers: { 'Content-Type': 'multipart/form-data' }}

            fileData.append('filename',this.file)

            apiUpload({
                fileData,
                fileConfig
            }).then(res => {
                this.$emit('uploadFile')
            }).catch(err => {
                console.log(err)
            })
            
        },
        uploadRequest(item){
            console.log(item.file)
            this.file = item.file
        }
    },
}
</script>