<template>
  <div class="home">
    <div class="line upperline"></div>
    <div class="title">
      <h1>CHINESE ADULT</h1>
      <h1>BODY SHAPE</h1>
      <h1>ASSESSMENT</h1>
      <h1>成人身体形态测评</h1>
    </div>
    <ul>
      <li>● 以下人群可能不适合本测评：</li>
      <li>未满18周岁群体,怀孕或哺乳中群体以及老人群体</li>
    </ul>
    <div class="line downline"></div>
    <button @click="start">开始测评</button>
  </div>
</template>

<script>
export default {
  methods: {
    start(){
      this.$router.push('/age')
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
    margin-top: 36px;
    margin-bottom: 27px;
  }
  .downline {
    margin-top: 36px;
  }
  h1 {
    font-weight: 600;
  }
  button{
    width: 228px;
    height: 50px;
    background-color: #fdf052;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: 600;
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 116px;
  }
}
</style>
