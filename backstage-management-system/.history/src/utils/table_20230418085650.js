// 封装一个可以获取表格数据的方法
export function getTableList(interfaceFunc, dataStorageName, total, arr=[], componentInstance={}) {
  interfaceFunc()
  .then(res => {
    if(res.status === 200) {
      componentInstance[dataStorageName] = res.data.data || [];
      componentInstance[total] = dataStorageName.length;
      componentInstance[dataStorageName].forEach(item => { // 将该数组中用数字标记状态的值改成中文文本
        arr.forEach((i, index) => {
          index == 0 && (item[i + '_text'] = item[i] == 1 ? '男' : '女'); // 第一个需要改变的字段
          index == 1 && (item[i + '_text'] = item[i] == 1 ? '已入学' : item[i] == 3 ? '未入学' : '休学中'); // 第二个需要改变的字段
        })
      });
    }
    
    return new Promise((resolve, reject) => {
      reject('jsdkfjskl')
    })
  })
  .catch(error => {
    console.log(error);
    this.$message({message: error, type: 'warning'})
  })
}