<template>
  <div class="my-pro">
    <div class="progress_box">
      <div :style="`width: ${percentage}% ; backgroundColor: ${color}`" :class="status" class="progress">
        <span v-if="textInside">{{ percentage }}%</span>
      </div>
    </div>
    <span style="margin-left: 8px" v-if="!textInside">{{ percentage }}%</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'default',
    },
    'text-inside': {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },
  watch: {
    percentage: {
      immediate: true,
      handler(val) {
        if (val === 100) return this.$emit('ToCompleteFn')
      },
    },
  },
}
</script>

<style scoped lang="less">
.my-pro {
  margin: 5px;
  display: flex;
  align-items: center;
}
.progress_box {
  border-radius: 20px;
  width: 495px;
  height: 35px;
  background-color: #ccc;
  .progress {
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 20px;
    height: 100%;
    color: #fff;
  }
  .default {
    background-color: #409eff;
  }
  .success {
    background-color: #67c23a;
  }
  .warning {
    background-color: #e6a23c;
  }
  .exception {
    background-color: #f56c6c;
  }
}
</style>
