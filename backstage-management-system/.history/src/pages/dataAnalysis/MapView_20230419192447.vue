<template>
	<div class="mapMain">
		<section class="section">
			<div id="map"/>
		</section>
	</div>
</template>

<script>
// require('echarts/theme/macarons') // echarts theme
import 'echarts/map/js/china.js'

export default {
	data() {
		return {
		
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			// 基于准备好的dom，初始化echarts实例
			let chinaMap = this.$echarts.init(document.getElementById("map"));
			window.onresize = chinaMap.resize; // 窗口或框架被调整大小时执行chinaMap.resize
			chinaMap.setOption({
				tooltip: {
					trigger: 'item',
					formatter: function (e, t, n) {
						return e.value == 'NaN' ? e.name + "：" + '0' : e.name + "：" + e.value
					}
				},
				legend: {
					orient: 'vertical',
					left: 'left',
				},
				visualMap: {
					min: 0,
					max: 10000,
					left: 10,
					bottom: 10,
					showLabel: !0,
					text: ["高", "低"],
					textStyle: {
						color: '#fff',
					},
					pieces: [{
						gt: 100,
						label: "> 100",
						color: "#7f1100"
					}, {
						gte: 10,
						lte: 100,
						label: "10 - 100",
						color: "#ff5428"
					}, {
						gte: 1,
						lt: 10,
						label: "1 - 9",
						color: "#ff8c71"
					}, {
						gt: 0,
						lt: 1,
						label: "1",
						color: "#ffd768"
					}, {
						value: 0,
						color: "#ffffff"
					}],
					show: !0
				},
				toolbox: {
					show: true,
					orient: 'vertical',
					left: 'right',
					top: 'center',
					feature: {
						dataView: { readOnly: false },
						restore: {},
						saveAsImage: {}
					},
				},
				geo: {
					map: "china",
					roam: !1,
					scaleLimit: {
						min: 1,
						max: 2
					},
					zoom: 1.23,
					// top: 120,
					label: {
						normal: {
							show: !0,
							fontSize: "14",
							color: "rgba(0,0,0,0.7)"
						}
					},
					itemStyle: {
						normal: {
							//shadowBlur: 50,
							//shadowColor: 'rgba(0, 0, 0, 0.2)',
							borderColor: "rgba(0, 0, 0, 0.2)"
						},
						emphasis: {
							areaColor: "#f2d5ad",
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							borderWidth: 0
						}
					}
				},
				series: [
					{
						type: 'map',
						mapType: 'china',
						roam: false,
						geoIndex: 0,
						label: {
							normal: {
								show: true
							},
							emphasis: {
								show: true
							}
						},
						data: [
							{ name: '上海', value: 10 },
							{ name: '广东', value: 100 },
						]
					}
				]
			})
		},
	}
}
</script>

<style lang="scss">
  #map {
    width: 100%;
    height: 700px;
  }
</style>