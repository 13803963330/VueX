<template>
  <div>
    <button @click="ChangeThecolor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
      <Button type="default" style="margin: 10px">按钮</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import '@/assets/styles/base.css'
import '@/assets/styles/index.css'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapstaingActions } =
  createNamespacedHelpers('ChangeThecolor')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Button
  },

  created() {},

  methods: {
    ...mapstaingActions(['changeColor']),
    // 传递颜色数据
    ChangeThecolor() {
      this.changeColor('blue')
    }
  }
}
</script>

<style scoped></style>
