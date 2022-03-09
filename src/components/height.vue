<template>
  <div class="height">
    <div class="back" @click="back">上一题</div>
    <h3>height</h3>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    next(path){
      this.$router.push(path)
    }
  },
}
</script>

<style lang="scss" scoped></style>
