/*
 * @Date: 2023-04-17 20:50:46
 */
export function getTableList(interfaceFunc, dataStorageName, total, arr=[], componentInstance={}) {
  console.log(componentInstance);
  interfaceFunc()
  .then(res => {
    throw new Error('niisdfsafs')
  })
  .catch(error => {
    this.$message({message: error.message, type: 'warning'})
  })
}