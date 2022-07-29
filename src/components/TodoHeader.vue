<template>
  <header class="header">
    <h1 :style="{ color: Color }">
      {{ TODU }}
    </h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="downFn"
      v-model="task"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex'
const { mapActions: mapstaingActions } =
  createNamespacedHelpers('DataRendering')
export default {
  data() {
    return {
      task: ''
    }
  },
  computed: {
    ...mapGetters(['TODU', 'Color'])
  },
  methods: {
    // ...mapActions(['DataRendering/delArr']),
    ...mapstaingActions(['createFn']),
    downFn() {
      this.createFn(this.task)
      this.task = ''
    }
  }
}
</script>
