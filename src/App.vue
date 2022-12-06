<script setup>
import { RouterView } from 'vue-router';
import useScalePage from './hooks/useScalePage'

//设计稿尺寸配置
const option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9
}
//大屏适配hook
useScalePage(option)
</script>

<template>
  <RouterView />
</template>

<style lang="less" scoped>

</style>
