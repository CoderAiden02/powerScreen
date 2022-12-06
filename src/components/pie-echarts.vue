<script setup>
import { onMounted, ref, watch } from 'vue';
import useEchart from '@/hooks/useEchart';

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  echartsDatas: {
    type: Array,
    dafault: []
  }
})

const divRef = ref()

let chart = null

onMounted(() => {
  setupEchart(props.echartsDatas)
})

watch(() => props.echartsDatas, (newV) => {
  setupEchart(newV)
})

function setupEchart(echartDatas) {
  if (!chart) {
    chart = useEchart(divRef.value)
  }
  const option = getOption(echartDatas)
  chart.setOption(option)
}

function getOption(pieDatas = []) {
  const colors = pieDatas.map((item) => {
    return item.color;
  });

  const data = pieDatas.map((item) => {
    return {
      value: item.value,
      name: item.name,
    };
  });

  const total = pieDatas.reduce((a, b) => {
    return a + b.value * 1;
  }, 0);

  const option = {
    color: colors,
    title: {
      text: `{nameSty| 充电桩总数}\n{number|${total}}`,
      top: "48%",
      left: "29.5%",
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 19,
            color: "white",
            padding: [8, 0],
          },
          number: {
            fontSize: 24,
            color: "white",
            padding: [4, 0, 0, 24],
          },
        },
      },
    },
    legend: {
      orient: "vertical",
      right: "10%",
      top: "18%",
      itemGap: 20,
      itemWidth: 16,
      itemHeigth: 16,
      icon: "rect",
      formatter: function (name) {
        var currentItem = pieDatas.find((item) => item.name === name);
        return (
          "{nameSty|" +
          currentItem.name +
          "}\n" +
          "{numberSty|" +
          currentItem.value +
          "个 }" +
          "{preSty|" +
          currentItem.percentage +
          "}"
        );
      },
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 12,
            color: "#FFFFFF",
            padding: [10, 14],
          },
          numberSty: {
            fontSize: 12,
            color: "#40E6ff",
            padding: [0, 0, 0, 14],
          },
          preSty: {
            fontSize: 12,
            color: "#40E6ff",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        center: ["40%", "57%"],
        radius: ["30%", "75%"],
        label: {
          show: false,
        },
        data: data,
        roseType: "area",
      },

    ],
    tooltip: {}
  };

  return option
}
</script>

<template>
  <div ref="divRef" class="pie-echarts" :style="{ width, height }">
  </div>
</template>

<style scoped>

</style>