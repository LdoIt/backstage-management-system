import {Message} from 'element-ui'
// 封装一个可以获取表格数据的方法
export function getTableList(interfaceFunc, dataStorageName, total, arr=[], componentInstance={}) {
  interfaceFunc()
  .then(res => {
    if(res.status === 200) {
      // 将获取到的数据存到组件实例中指定的字段中
      componentInstance[dataStorageName] = res.data.data || [];
      componentInstance[total] = componentInstance[dataStorageName].length;
      componentInstance[dataStorageName].forEach(item => { // 将该数组中用数字标记状态的值改成中文文本
        arr.forEach((i, index) => {
          index == 0 && (item[i + '_text'] = item[i] == 1 ? '男' : '女'); // 第一个需要改变的字段
          index == 1 && (item[i + '_text'] = item[i] == 1 ? '已入学' : item[i] == 3 ? '未入学' : '休学中'); // 第二个需要改变的字段
        })
      });
    }
    // return new Promise((resolve, reject) => {
    //   reject('jsdkfjskl')
    // })
  })
  .catch(error => {
    Message({message: error, type: 'error'})
  })
}

// 删除表格数据的方法
export function delTableList(delApi, getTableListAgain, id, vueComponentInstance) {
  vueComponentInstance.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
      try {
        // 调用api函数执行删除操作
        let res = await delApi(id);
        Message({message: res.data.message, type: 'success'})
        // 重新获取数据,这里的loading加载区域为什们会出现问题,不在mianifo里面加载了
        getTableListAgain();
      } catch (error) {
        Message({message: res.data.message, type: 'error'})
      }
  }).catch(() => {Message({type: 'info', message: '已取消删除'});});
}

