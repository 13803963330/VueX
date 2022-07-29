<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      v-for="(item, index) in arr"
      :class="{ completed: item.done }"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="Deletethiss(index)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="Deletethis(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapActions: mapstaingActions } =
  createNamespacedHelpers('DataRendering')

export default {
  computed: {
    ...mapGetters(['arr'])
  },
  methods: {
    // ...mapActions(['DataRendering/delArr']),
    ...mapstaingActions(['delArr', 'replaceArr']),
    Deletethis(index) {
      console.log(index)
      this.delArr(index)
    },
    // 更换状态
    Deletethiss(index) {
      this.replaceArr(index)
    }
  }
}
</script>
