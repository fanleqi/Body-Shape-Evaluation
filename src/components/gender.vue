<template>
  <div class="gender">
    <div class="back" @click="back">上一题</div>
    <h3>您的性别是？</h3>
    <div class="selection">
      <button @click="log(0)">男</button>
      <button @click="log(1)">女</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    log(index) {
      let user = JSON.parse(localStorage.getItem("userInfo"))
      let obj = {...user,"gender": index}
      localStorage.setItem("userInfo",JSON.stringify(obj));
      this.$router.push('/height')
    },
  },
}
</script>

<style lang="scss" scoped>
.gender {
  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 85px;
  }
  .selection {
    display: flex;
    justify-content: space-between;
    width: 261px;
    margin-left: auto;
    margin-right: auto;
    button {
      width: 120px;
      height: 120px;
      background-color: #fff;
      border-radius: 50%;
      border: none;
      text-align: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 16px;
      font-size: 24px;
      &:active {
        background: #2a2a2a;
        color: #fff;
      }
    }
  }
}
</style>
