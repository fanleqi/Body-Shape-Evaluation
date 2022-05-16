<template>
  <div class="home">
    <div class="line upperline"></div>
    <div class="title">
      <h1>CHINESE ADULT</h1>
      <h1>BODY SHAPE</h1>
      <h1>ASSESSMENT</h1>
      <h1>中国成人身体形态测评</h1>
    </div>
    <ul>
      <li>● 以下人群可能不适合本测评：</li>
      <li>未满18周岁群体，怀孕或哺乳中群体以及老人群体</li>
    </ul>
    <div class="line downline"></div>
    <button @click="start" class="start">开始新测评</button>
    <button @click="history" class="history" :class="{ active: hasResult }">我的测评结果</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hasResult:false,
    }
  },
  created(){
    this.getResult()
  },
  methods: {
    start(){
      if(this.hasResult){
        confirm('新测评将覆盖历次测评，确认开始新测评？') ? this.$router.push('/age') : ''
      }else{
        this.$router.push('/age')
      }
    },
    history(){
      this.$router.push('/result')
    },
    getResult(){
      let shapeList = JSON.parse(localStorage.getItem('userInfo'))
      Object.keys(shapeList).length >= 5 ? this.hasResult = true : this.hasResult = false
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 35px;
  .line {
    width: 130px;
    height: 6px;
    background-color: #000;
  }
  .upperline {
    margin-top: 15px;
  }
  .title {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .downline {
    margin-top: 32px;
  }
  h1 {
    margin-bottom: 6px;
  }
  .start{
    margin-top: 116px;
    background-color: #fdf052;
    font-weight: 600;
  }
  .history{
    margin-top: 10px;
    font-weight: 600;
  }
  .active{
    background-color: #fdf052;
  }
}
</style>
