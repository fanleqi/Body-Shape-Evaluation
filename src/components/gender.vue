<template>
  <div class="gender">
    <div class="back" @click="back">&lt;上一题</div>
    <h3>您的性别是？</h3>
    <div class="selection">
      <button v-for="(item, index) in selection" :key="index" @click="storage(index)">
      {{ item }}
    </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: [
        '男', //0
        '女', //1
      ],
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    storage(index) {
      let user = JSON.parse(localStorage.getItem("userInfo"))
      let ageGenderType = null
      if(user.age == 0){
        if(index == 0){
          ageGenderType = 0 //30岁及以下男性
        }else{
          ageGenderType = 1 //30岁及以下女性
        }
      }else{
        if(index == 0){
          ageGenderType = 2 //30岁以上男性
        }else{
          ageGenderType = 3 //30岁以上女性
        }
      }
      let obj = {...user, "ageGenderType": ageGenderType}
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
