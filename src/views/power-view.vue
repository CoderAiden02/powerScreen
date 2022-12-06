<script setup>
import { ref } from 'vue'
import pieEcharts from '../components/pie-echarts.vue';
import LineEcharts from '@/components/line-echarts.vue';

import rightTopPanel from '@/components/right-top-panel.vue';
import barEcharts from '@/components/bar-echarts.vue'
import RightBottomSVG from '@/components/right-bottom-svg.vue'

import centerSvg from '@/components/center-svg.vue';
import bottomPanel from '@/components/bottom-panel.vue';

import { getPowerScreenData } from '@/services/index'
import { chargingPileData, processMonitoringData, chargingStatisticsData, exceptionMonitoringData, dataAnalysisData, chargingTop4Data } from './config/home-data'

const chargingPile = ref(chargingPileData)
const processMonitoring = ref(processMonitoringData)
const chargingStatistics = ref(chargingStatisticsData)
const chargingTop4 = ref(chargingTop4Data)
const dataAnalysis = ref(dataAnalysisData)
const exceptionMonitoring = ref(exceptionMonitoringData)
const percentage = ref(0)
getPowerScreenData().then((res) => {
  chargingPile.value = res.data.chargingPile.data
  processMonitoring.value = res.data.processMonitoring.data
  chargingStatistics.value = res.data.chargingStatistics.data
  chargingTop4.value = res.data.chargingTop4.data
  dataAnalysis.value = res.data.dataAnalysis.data
  exceptionMonitoring.value = res.data.exceptionMonitoring.data
  percentage.value = res.data.chargingTop4.totalPercentage
})
</script>

<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pieEcharts :echartsDatas="chargingPile" />
    </div>
    <div class="left-bottom">
      <LineEcharts :echartsDatas="processMonitoring" />
    </div>

    <div class="right-top">
      <rightTopPanel :panel-items="chargingTop4" :percentage="percentage" />
    </div>
    <div class="right-center">
      <barEcharts :echartsDatas="chargingStatistics" />
    </div>
    <div class="right-bottom">
      <RightBottomSVG :dots="exceptionMonitoring" />
    </div>

    <div class="center">
      <centerSvg />
    </div>
    <div class="bottom">
      <bottomPanel :panelItems="dataAnalysis" />
    </div>
  </main>
</template>

<style lang="less" scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-color: #070a3c;
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;

  /* 背景 */
  background-image: url(@/assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(@/assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(@/assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(@/assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.center {
  position: absolute;
  right: 530px;
  bottom: 272px;
  width: 823px;
  height: 710px;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(@/assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>