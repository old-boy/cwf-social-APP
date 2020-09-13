<template>
    <div class="user-info">
        <el-row class="source breadcrumb-header">
            <breadcrumb :breadcrumbName="breadcrumbName"></breadcrumb>
            <el-col :span="1" :offset="10">
                <el-button  @click="Add" type="success" size="mini">添加</el-button>
            </el-col>
        </el-row>
        <!-- search -->
        <el-container class="container">
            <el-header>
                <div class="search-warp">
                    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                        <el-form-item label="标签名称">
                            <el-input v-model="searchForm.tagName" placeholder="标签"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="query">查询</el-button>
                            <el-button type="info" @click="reset">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-header>

            <el-main>
                <el-table
                    v-loading="loadingFlag"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    :data="tableData"
                    stripe
                    style="width: 100%"
                    @selection-change="handleSelectionChange">>
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                        prop="tagName"
                        label="标签名称"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="400"
                    >
                        <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="showInfoModal(scope.$index, scope.row)">修改</el-button>
                        <el-button type="danger" size="mini" @click="showRemoveModal(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                    
            </el-main>
        </el-container>
        <addTagDialog ref="addTagDialog" @saveUserTag="addSaveTag" /> 
    </div>
</template>
<script>
import breadcrumb from '../components/breadcrumb'
import addTagDialog from './components/dialog/addTag'
export default {
    name:'userInfo',
    components:{
        breadcrumb,
        addTagDialog
    },
    data() {
        return {
            loadingFlag: false,
            breadcrumbName:'用户标签',
            tableData:[],
            searchForm:{
                tagName:''
            }
        }
    },
    methods: {
        handleSelectionChange(){

        },
        showInfoModal(){

        },
        showRemoveModal(){

        },
        Add(){
            //调用子组件中打开 dialog 的方法
            this.$refs.addTagDialog.OpenTag()
        },
        addSaveTag(){

        },
        query(){

        },
        reset(){
            this.searchForm = {}
        }
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .breadcrumb-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .breadcrumb{
            flex: 1;
            justify-self: start;
        }
    }
</style>