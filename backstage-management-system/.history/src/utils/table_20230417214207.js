/*
 * @Date: 2023-04-17 20:50:46
 */
export function getTableList(interfaceFunc, dataStorageName, total, arr) {
  try {
    let res = await interfaceFunc()
    if(res.status === 200) {
      dataStorageName = res.data.data || [];
      total = dataStorageName.length;
      dataStorageName.forEach(item => { // 将该数组中用数字标记状态的值改成中文文本
        arr.forEach((i, index) => {
          !index && (item[(item[i] + '_text')] = item[i] == 1 ? '男' : '女');
          index > 0 && (item[(item[i] + '_text')] = item[i] == 1 ? '已入学' : item[i] == 3 ? '未入学' : '休学中')
        })
      });
    }
  } catch (error) {
    
  }
}