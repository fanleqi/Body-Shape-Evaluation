<template>
  <div class="body-fat-rate">
    <div class="back" @click="back">&lt;上一题</div>
    <h3>请输入您的体脂率</h3>
    <div class="form">
      <input type="number" placeholder="请输入体脂率" v-model="bodyFatRate" @input="inputFn"/>
      <strong>%</strong>
      <button @click="confirm" :class="{ active: isActive }">确认</button>
      <a @click="skip" class="skip">不清楚，跳过&gt;</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyFatRate: null,
      isActive: false,
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    inputFn() {
      if (this.bodyFatRate) {
        this.isActive = true
      }else{
        this.isActive = false
      }
    },
    skip(){
      this.$router.push('/waistline')
    },
    confirm() {
      if (this.bodyFatRate){
        let user = JSON.parse(localStorage.getItem('userInfo'))
        let obj = { ...user, bodyFatRate: this.bodyFatRate / 1 }
        localStorage.setItem('userInfo', JSON.stringify(obj))
        this.$router.push('/waistline')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.body-fat-rate {
  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 40px;
  }
  .form {
    text-align: center;
    input {
      width: 125px;
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
    margin-bottom: 10px;
  }
  .skip{
    font-size: 14px;
    border-bottom:1px solid grey;
  }
  .active {
    background-color: #fdf052;
  }
}
</style>
