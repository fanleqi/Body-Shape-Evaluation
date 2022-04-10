<template>
  <div class="age">
    <div class="back" @click="back">&lt;返回</div>
    <h3>您的年龄在？</h3>
    <button v-for="(item, index) in selection" :key="index" @click="storage(index)">
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: [
        '30岁及以下', //0
        '30岁以上', //1
      ],
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    storage(index) {
      let obj = {"age": index}
      localStorage.setItem("userInfo",JSON.stringify(obj));
      this.$router.push('/gender')
    },
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
