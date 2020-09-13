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
                        <el-form-item label="性别">
                            <el-input v-model="searchForm.gender" placeholder="性别"></el-input>
                        </el-form-item>
                        <el-form-item label="星座">
                            <el-input v-model="searchForm.constellation" placeholder="星座"></el-input>
                        </el-form-item>
                        <el-form-item label="公司">
                            <el-input v-model="searchForm.company" placeholder="公司"></el-input>
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
                        prop="gender"
                        label="性别"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                    ></el-table-column>
                    <el-table-column
                        prop="constellation"
                        label="星座"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="area"
                        label="地区"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="company"
                        label="公司"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="feelingStatus"
                        label="感情状态"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="registrationDate"
                        label="注册时间"
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
        <addInfoDialog ref="addInfoDialog" @saveUserInfo="addSaveInfo" /> 
    </div>
</template>
<script>
import breadcrumb from '../components/breadcrumb'
import addInfoDialog from './components/dialog/addInfo'
export default {
    name:'userInfo',
    components:{
        breadcrumb,
        addInfoDialog
    },
    data() {
        return {
            loadingFlag: false,
            breadcrumbName:'用户基本信息',
            tableData:[],
            searchForm:{
                gender:'',
                constellation:'',
                company:''
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
            this.$refs.addInfoDialog.AddInfo()
        },
        addSaveInfo(){

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