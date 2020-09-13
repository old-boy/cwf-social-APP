<template>
    <div class="list">
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
                        <el-form-item label="用户名">
                            <el-input v-model="searchForm.userName" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="用户角色">
                            <el-select v-model="searchForm.role" placeholder="用户角色">
                            <el-option label="美食家" value="50"></el-option>
                            </el-select>
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
                        prop="userName"
                        label="用户名"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="avatar"
                        label="头像"
                    ></el-table-column>
                    <el-table-column
                        prop="role"
                        label="角色"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="userFans"
                        label="粉丝"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="follow"
                        label="关注"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="tags"
                        label="标签"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="称号"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="charm"
                        label="魅力值"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="articles"
                        label="文章数量"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="videos"
                        label="视频数量"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="400"
                    >
                        <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="showInfoModal(scope.$index, scope.row)">员工资料</el-button>
                        <el-button type="info" size="mini"  @click="showPwdModal(scope.$index, scope.row)">重设密码</el-button>
                        <el-button type="warning" size="mini"  @click="showRoleModal(scope.$index, scope.row)">权限设置</el-button>
                        <el-button type="danger" size="mini" @click="showRemoveModal(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                    
            </el-main>
        </el-container>
        

        <!-- add -->
        <addDialog ref="addDialog" :rowdata="rowdata" @userData="userData"/>
    </div>
</template>
<script>
import breadcrumb from '../components/breadcrumb'
import addDialog from './components/dialog/add'

export default {
    name:'userList',
    components: {
        breadcrumb,
        addDialog
    },
    data() {
        return {
            breadcrumbName:'用户列表',
            rowdata:[],
            tableData:[],
            searchForm: {
                userName: '',
                role: '',
            },
            loadingFlag: false,
            
        }
    },
    methods: {
        Add(){
            this.$refs.addDialog.Adduser()
        },
        userData(){

        },
        query(){

        },
        reset(){
            this.searchForm = {}
        },
        showInfoModal(){

        },
        showPwdModal(){

        },
        showRoleModal(){

        },
        showRemoveModal(){

        },
        handleSelectionChange(){

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