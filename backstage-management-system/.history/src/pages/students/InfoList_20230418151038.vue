<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-button type="primary" class="add" @click="showDialog(false)">新增</el-button>
    
    <!-- 表单内容 -->
    <el-dialog title="新增信息" :visible.sync="dialogFormVisible" :close-on-click-modal="false" modal center width="500px">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="父亲姓名" prop="father">
          <el-input v-model="form.father"></el-input>
        </el-form-item>
        <el-form-item label="母亲姓名" prop="mather">
          <el-input v-model="form.mather"></el-input>
        </el-form-item>
        <el-form-item label="入校时间" prop="time">
          <div class="block">
            <el-date-picker
              v-model="form.time"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="家庭住址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cance">取 消</el-button>
        <el-button type="primary" @click="confirm('form')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 表格内容 -->
    <el-table :data="infoList.slice((currentPage - 1) * currentSize, currentPage * currentSize)" stripe style="width: 100%" border height="515">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="father" label="父亲姓名" align="center"> </el-table-column>
        <el-table-column prop="mather" label="母亲姓名" align="center"> </el-table-column>
        <el-table-column prop="time" label="入校时间" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
        <el-table-column label="操作" align="center">
          <!-- 用vue中的作用域插槽可以拿到当前行的数据 -->
          <template slot-scope="scope">
            <el-button type="danger" class="el-icon-delete" size="mini" @click="del(scope.row.id)"></el-button>
            <el-button type="danger" class="el-icon-edit" size="mini" ref="editBtn" @click="showDialog(scope.row)"></el-button>
          </template>
        </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div class="block" style="">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper"
      :total="total"></el-pagination>
    </div>

  </div>
</template>

<script>
import {getInfo, addInfo, delInfo, editInfo} from '../../api'
import {getTableList, delTableList, addOrEditTableList} from '@/utils/table'
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
      total: 0, // 总数据条数
      currentSize: 5, // 每页数据条数
      currentPage: 1, // 当前页
      dialogFormVisible: false, // 控制表格显示与隐藏
      row: '', // 每条数据
    }
  },
  created() {
    this.getInfoList();
  },
  methods: {
    // 分页器相关方法
    handleSizeChange(val) {
      this.currentSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 获取信息数据
    async getInfoList() {
      getTableList(getInfo, 'infoList', 'total', ['sex'], this)
    },
    // 取消dialog
    cance() {
      this.dialogFormVisible = false;
      // 关闭表单验证
      this.$refs.form.resetFields();
    },
    // 确认dialog
    confirm(form) {
      this.$refs[form].validate(async (valid) => {
        if(valid) { // 通过验证
          if(!this.row) {
            this.add()
          }else {
            this.edit(this.row);
          }
          // 关闭验证，防止再次打开会有上一次的验证错误
          this.$refs.form.resetFields();
          this.dialogFormVisible = false;
        }else {
          alert('请填入数据')
        }
      })
    },
    showDialog(row) { // 传一个row
      if(row) {
        this.row = {...row};
        this.form = {...row}; // 这里不能直接this.form = row否则会直接更改页面的值，浅拷贝问题
      }
      this.dialogFormVisible = true;
    },
    // 删除数据
    del(id) {
      delTableList(delInfo, this.getInfoList, id, this)
    },
    async add() {
      addOrEditTableList(addInfo, this.getInfoList, 'form', false, this)
    },
    // 编辑数据
    async edit(row) {
      addOrEditTableList(editInfo, this.getInfoList, 'form', row, this)
    },
  }
}
</script>

<style lang="scss">
  .add {
    margin-bottom: 20px;
  }
  .el-pagination {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
</style>