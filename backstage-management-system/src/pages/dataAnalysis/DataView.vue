<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div class="echartsContainer">
    <div id="main1">
      <el-card>

      </el-card>
    </div>
    <div id="main2">
      <el-card>

      </el-card>
    </div>
  </div>
</template>

<script>
import {getEchartsList} from '@/api'
export default {
  name: 'DataView',
  data() {
    return {
    }
  },
  mounted() {
    this.drawEcharts1();
    getEchartsList().then(res => {
      if(res.status === 200) {
        const {legend, xAxis, series} = res.data.data
        this.drawEcharts2(legend, xAxis, series);
      }
    })
  },
  methods: {
    drawEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 图表'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    drawEcharts2(legend, xAxis, series) {
      let myChart = this.$echarts.init(document.getElementById('main2'))
      myChart.setOption({
        xAxis: {
          name: '日期',
          axisPointer: {
            show: true, // 鼠标经过时就显示x轴的数据
            label: {
              show: true
            }
          },
          type: 'category',
          data: xAxis
        },
        yAxis: {
          name: '销量',
          axisPointer: {
            show: true // 鼠标经过时就显示y轴的数据
          },
        },
        series: series,
        legend: {
          data: legend
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .echartsContainer {
    display: flex;
    justify-content: space-between;
    #main1,
    #main2 {
      width: 50%;
      height: 500px;
    }
  }
</style>