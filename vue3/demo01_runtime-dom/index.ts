import { h, createApp, ref } from '@vue/runtime-dom'

const count = ref(0)
const count1 = ref(count)
console.log('count1=', count1)

const RootComponent = {
  render() {
    return h('button', {
      onclick() {
        count1.value++
      }
    }, [
      'Count = ',
      count1.value
    ])
  }
}

const app = createApp(RootComponent)
;(window as any).app = app
app.mount('#app')
