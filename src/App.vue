<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/assets/style/reset.scss';
body {
  text-align: left;
  background: #f5f5f5;
  color: #201917;
  padding: 10px;
  font-size: 16px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  button{
    width: 228px;
    height: 50px;
    border-radius: 10px;
    border: none;
    text-align: center;
    display:block;
    margin-left: auto;
    margin-right: auto;
    color: #201917;
  }
  h1 {
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 18px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
