<template>
  <div class="weight">
    <div class="back" @click="back">上一题</div>
    <h3>您的体重是?</h3>
    <div class="form">
      <input type="number" placeholder="请输入体重" v-model="weight" @input="inputFn"/>
      <strong>kg</strong>
      <button @click="confirm" :class="{ active: isActive }">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: null,
      isActive: false,
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    inputFn() {
      if (this.weight) {
        this.isActive = true
      }else{
        this.isActive = false
      }
    },
    confirm() {
      if (this.weight) {
        let user = JSON.parse(localStorage.getItem('userInfo'))
        let obj = { ...user, weight: this.weight / 1 }
        localStorage.setItem('userInfo', JSON.stringify(obj))
        this.$router.push('/bodyFatRate')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.weight {
  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 40px;
  }
  .form {
    text-align: center;
    input {
      width: 120px;
      height: 48px;
      border-radius: 20px;
      border: 3px solid black;
      font-weight: 600;
      font-size: 16px;
      padding: 5px;
      text-align: center;
      background-color: #f5f5f5;
      margin-right: 4px;
    }
  }
  button {
    width: 120px;
    height: 50px;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-weight: 600;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
  .active {
    background-color: #fdf052;
  }
}
</style>
