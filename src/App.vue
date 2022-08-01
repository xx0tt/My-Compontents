<template>
  <div>
    <my-progress :percentage="20" :text-inside="true" @ToCompleteFn="Fn" />
    <my-progress :percentage="40" status="success" :text-inside="true" @ToCompleteFn="Fn" />
    <my-progress :percentage="60" status="warning" :text-inside="true" @ToCompleteFn="Fn" />
    <my-progress :percentage="80" status="exception" :text-inside="true" @ToCompleteFn="Fn" />
    <my-progress :percentage="100" status="exception" :text-inside="true" color="#234ea4" @ToCompleteFn="Fn" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {},

  methods: {
    Fn() {
      console.log('haha')
    },
  },
}
</script>

<style scoped></style>
