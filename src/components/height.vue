<template>
  <div class="height">
    <div class="back" @click="back">上一题</div>
    <h3>您的身高是?</h3>
    <div class="form">
      <input type="number" placeholder="请输入身高" /> cm
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    next(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.height {
  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 40px;
  }
  .form {
    text-align: center;
    input {
      width: 200px;
      height: 48px;
      border-radius: 20px;
      border: 3px solid black;
      font-weight: 600;
      font-size: 16px;
      padding: 5px;
      text-align: center;
      background-color: #f5f5f5;
    }
  }
}
</style>
