import { h, createApp, ref } from '@vue/runtime-dom'

const count = ref(0)

const RootComponent = {
  render() {
    return h('button', {
      innerText: count
    })
  }
}

createApp(RootComponent).mount('#app')