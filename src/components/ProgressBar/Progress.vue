<template>
  <div>
    <!-- 计数进度表 -->
    <div>
      <div class="progress" :style="{ background: color }">
        <div
          class="rate"
          :style="{ width: rate + 'px', background: colorn }"
        ></div>
      </div>
      <div class="nums" v-if="text">
        <div><span v-text="Math.round(rate / 2)"></span>%</div>
        <div><span v-text="100 - Math.round(rate / 2)"></span>%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alley-progress",
  props: {
    rate: {
      type: Number,
      required: false,
      default: 0,
    },
    // 外部颜色
    color: {
      type: String,
      required: false,
      default: "#b5cadd",
    },
    // 内部颜色
    colorn: {
      type: String,
      required: false,
      default: "#5fafd4",
    },
    text: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style>
.progress {
  width: 200px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.rate {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(179, 212, 199);
  width: 0;
}
.nums {
  font-size: 16px;
  width: 200px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5px;
}
.nums div:first-child {
  float: left;
}
.nums div:last-child {
  float: right;
}
</style>
