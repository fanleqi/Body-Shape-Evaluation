<template>
  <div class="height">
    <div class="back" @click="back">上一题</div>
    <h3>请输入您的腰围</h3>
    <div class="form">
      <input type="number" placeholder="请输入腰围" v-model="waistline"/> <strong>cm</strong>
      <button @click="confirm">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      waistline:null
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    confirm(){
      let user = JSON.parse(localStorage.getItem("userInfo"))
      let obj = {...user,"waistline": this.waistline/1}
      localStorage.setItem("userInfo",JSON.stringify(obj));
      //this.$router.push('/height')
    }
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
      width: 120px;
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
  button{
    width: 120px;
    height: 50px;
    background-color: #fdf052;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-weight: 600;
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
}
</style>
