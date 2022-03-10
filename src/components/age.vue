<template>
  <div class="age">
    <div class="back" @click="back">返回</div>
    <h3>您的年龄在？</h3>
    <div class="selection" @click="next('/gender')">
      <button>17岁及以下</button>
      <button>18-25岁</button>
      <button>26-35岁</button>
      <button>36-45岁</button>
      <button>46-55岁</button>
      <button>56-65岁</button>
      <button>66岁及以上</button>
    </div>
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

<style lang="scss" scoped>
.age {
  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 42px;
  }
  button {
    width: 228px;
    height: 50px;
    background-color: #fff;
    border-radius: 30px;
    border: none;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    &:active {
      background: #2a2a2a;
      color: #fff;
    }
  }
}
</style>
