import { onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

export default function useScalePage(option) {
  const resizeFunc = _.throttle(function () {
    triggerScale()
  }, 100)

  onMounted(() => {
    window.addEventListener('resize', resizeFunc)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeFunc)
  })

  function triggerScale() {
    const { targetX, targetY, targetRatio } = option

    const currentX = document.documentElement.clientWidth || document.body.clientWidth
    const currentY = document.documentElement.clientHeight || document.body.clientHeight

    let scaleRatio = currentX / targetX
    const currentRatio = currentX / currentY
    if (currentRatio > targetRatio) {
      scaleRatio = currentY / targetY
      document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio}) translateX(-50%);left:50%`
    } else {
      document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio})`
    }
  }
}
