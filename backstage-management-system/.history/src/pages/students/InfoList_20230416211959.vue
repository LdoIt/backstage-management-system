<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-button type="primary" class="add" @click="add">新增</el-button>
    <el-dialog title="新增信息" :visible.sync="dialogFormVisible" modal="true" center width="500px">
      <el-form :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="父亲姓名">
          <el-input v-model="form.father"></el-input>
        </el-form-item>
        <el-form-item label="母亲姓名">
          <el-input v-model="form.mather"></el-input>
        </el-form-item>
        <el-form-item label="入校时间">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>    
    <el-table :data="infoList" stripe style="width: 100%" border height="570">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="father" label="父亲姓名" align="center"> </el-table-column>
        <el-table-column prop="mather" label="母亲姓名" align="center"> </el-table-column>
        <el-table-column prop="time" label="入校时间" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="">
            <el-button type="danger" class="el-icon-delete" size="mini"></el-button>
            <el-button type="danger" class="el-icon-edit" size="mini"></el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {getInfo} from '../../api'
export default {
  data() {
    return {
      infoList: [], // 信息列表
      form: {
        name: '',
        age: '',
        sex: '1',
        father: '',
        mather: '',
        time: '',
        address: '',
        phone : '',
      }, // diaglog中的表单数据
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
        father: [{ required: true, message: '请输入父亲姓名', trigger: 'blur' }],
        mather: [{ required: true, message: '请输入母亲姓名', trigger: 'blur' }],
        time: [{ required: true, message: '请输入入学时间', trigger: 'blur' }],
        address: [{ required: true, message: '请输入家庭地址', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
      }, // 表单验证规则
      dialogFormVisible: false, // 控制表格显示与隐藏
    }
  },
  created() {
    this.getInfoList();
  },
  methods: {
    // 获取信息数据
    async getInfoList() {
      let res = await getInfo();
      if(res.status === 200 ) {
        this.infoList = res.data.data;
        this.infoList.forEach(item => {
          item.sex_text = item.sex == 1 ? '男' : '女'
        })
      }
    },
    add() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
  .add {
    margin-bottom: 20px;
  }
</style>