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
                        <el-form-item label="级别名称">
                            <el-input v-model="searchForm.titleName" placeholder="级别名称"></el-input>
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
                        prop="filename"
                        label="级别icon"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="titleName"
                        label="级别名称"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="400"
                    >
                        <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="showInfoModal(scope.$index, scope.row)">修改</el-button>
                        <el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                    
            </el-main>
        </el-container>
        <addTitleDialog ref="addTitleDialog" @saveUserTitile="addSaveTitle" /> 
    </div>
</template>
<script>
import breadcrumb from '../components/breadcrumb'
import addTitleDialog from './components/dialog/addTitle'
import {apiUserGetTitle,apiDelTitle} from '@/request/api'


export default {
    name:'userTitle',
    components:{
        breadcrumb,
        addTitleDialog
    },
    data() {
        return {
            id: '',
            loadingFlag: false,
            breadcrumbName:'用户级别',
            tableData:[],
            searchForm:{
                titleName:''
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
        handleSelectionChange(){

        },
        showInfoModal(){

        },
        handleDel(index,row){
            this.id = row._id
            this.$confirm('是否确认要删除?', '提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then( async () => {
                await apiDelTitle({id:this.id});
                this.getData()

                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        Add(){
            //调用子组件中打开 dialog 的方法
            this.$refs.addTitleDialog.OpenTitle()
        },
        async getData(){
            await apiUserGetTitle().then(res => {
                this.tableData = res.result
            })
        },
        addSaveTitle(){

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