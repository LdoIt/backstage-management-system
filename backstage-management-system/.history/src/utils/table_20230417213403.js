export function getTableList(interfaceFunc, dataStorageName, total, arr) {
  try {
    let res = await interfaceFunc()
    if(res.status === 200) {
      dataStorageName = res.data.data || [];
      total = dataStorageName.length;
      dataStorageName.forEach(item => { // 将该数组中用数字标记状态的值改成中文文本
        arr.forEach(i => {
          item[(item[i] + '_text')] = item[i] == 1 ? '男' : '女';
        })
      });
    }
  } catch (error) {
    
  }
}