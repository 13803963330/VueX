<template>
  <div>
    <div>
      <ProgressBar :rate="rate1" :color="colora" :text="false"
        >进度条</ProgressBar
      >
      <br>
      <ProgressBar :rate="rate2" @click.native="timeaa">进度条</ProgressBar>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      rate1: 50,
      rate2: 40,
      colora: "#b3d4c7",
    };
  },

  created() {},

  methods: {
    timeaa() {
      this.timer = setInterval(() => {
        // 改变div的宽度
        this.rate2++;
        // 关闭定时器
        if (this.rate2 >= 200) {
          clearInterval(this.timer);
        }
      }, 50);
    },
  },
};
</script>

<style lang="less" scoped></style>
