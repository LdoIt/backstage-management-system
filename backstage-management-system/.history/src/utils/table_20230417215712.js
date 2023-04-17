/*
 * @Date: 2023-04-17 20:50:46
 */
export function getTableList(interfaceFunc, dataStorageName, total, arr) {
  interfaceFunc()
  .then(res => {
    if(res.status === 200) {
      dataStorageName = res.data.data || [];
      // console.log(dataStorageName);
      total = dataStorageName.length;
      // console.log(total);
      dataStorageName.forEach(item => { // 将该数组中用数字标记状态的值改成中文文本
        arr.forEach((i, index) => {
          index == 0 && (item[(item[i] + '_text')] = item[i] == 1 ? '男' : '女'); // 第一个需要改变的字段
          index == 1 && (item[(item[i] + '_text')] = item[i] == 1 ? '已入学' : item[i] == 3 ? '未入学' : '休学中'); // 第二个需要改变的字段
        })
      });
      console.log(dataStorageName);
    }
  })
  .catch(error => {
    this.$message({message: error.message, type: 'warning'})
  })
}