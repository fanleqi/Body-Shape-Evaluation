<template>
  <div class="result">
    <div class="block">
      <h1>身体形态报告</h1>
      <p>您的身体形态为【{{ bodyShape }}】，{{ bodyShapeEvaluation }}。</p>
      <div v-if="warn">
        <h2>需要注意的潜在健康问题</h2>
        <p>
          您的腰围身高比≥0.5，心血管风险增加。身体脂肪的分布与健康有密切的关系。如果脂肪过多地堆积在腰腹部，其患病（如高血压、型糖尿病、高血脂等）的危险性会大大增加。
        </p>
      </div>
      <div class="suggestion">
        <h2>针对您的体型给出的生活建议：</h2>
        <p style="white-space: pre-line;">{{suggestion}}</p>
      </div>
      <button @click="backHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BMI: null,
      shapeIndex: null,
      shapeList: ['偏瘦', '正常', '超重', '肥胖'],
      shapeEvaluationList: [
        '距离健康体型仍有一定的距离',
        '处于健康的范围内',
        '距离健康体型仍有一定的距离',
        '需要警惕',
      ],
      suggestionList: [
        '体型偏瘦，影响体质，可能导致免疫力低下、月经不调或闭经、骨质疏松、贫血、抑郁等病症。\n饮食方面，适当增加食量，多注意均衡营养的摄取，提高能量摄入。\n运动方面，增加强化肌力的运动，可促进体内新陈代谢以及体力的增加。',
        '体型会随年龄增长及饮食、运动而改变，请注意维持均衡的营养及经常做运动，保持标准的体型。',
        '体型偏胖，患脂肪肝、糖尿病及其他慢性病的风险增加。\n饮食方面，应减少高脂肪、高热量的食物，避免营养过剩。\n运动方面，加强脂肪燃烧运动。',
        '体型偏胖，患脂肪肝、糖尿病及其他慢性病的风险增加。\n饮食方面，制定严格的饮食计划，多摄取高GI食物，尽量不吃高热量食物。\n运动方面，加强脂肪燃烧运动，每周至少固定三次运动，每回运动时间在30分钟以上。',
      ],
      bodyShape: null,
      bodyShapeEvaluation: null,
      suggestion: null,
      warn: false,
    }
  },
  created() {
    this.getShapeList()
    this.bodyShape = this.shapeList[this.shapeIndex]
    this.bodyShapeEvaluation = this.shapeEvaluationList[this.shapeIndex]
    this.suggestion = this.suggestionList[this.shapeIndex]
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
    getShapeList() {
      let shapeList = JSON.parse(localStorage.getItem('userInfo'))
      this.BMI = (shapeList.weight / Math.pow(shapeList.height, 2)).toFixed(1)
      let BMIShape = this.getBMIShape(shapeList.ageGenderType, this.BMI)
      let BFShape = null
      if (typeof shapeList.bodyFatRate !== 'undefined') {
        BFShape = this.getBFShape(
          shapeList.ageGenderType,
          shapeList.bodyFatRate
        )
        this.shapeIndex = Math.max(BFShape, BMIShape)
      } else {
        this.shapeIndex = BMIShape
      }
      let WHtR = shapeList.waistline / (shapeList.height * 100).toFixed(2)
      WHtR >= 0.5 ? (this.warn = true) : ''
      // shapeList.bodyFatRate = shapeList.bodyFatRate.toFixed()
    },
    getBFShape(ageGenderType, BF) {
      if (ageGenderType === 0) {
        if (BF <= 14) {
          return 0 //偏瘦
        } else if (BF <= 20) {
          return 1 //正常
        } else if (BF <= 25) {
          return 2 // 超重
        } else {
          return 3 // 肥胖
        }
      } else if (ageGenderType === 1) {
        if (BF <= 17) {
          return 0 //偏瘦
        } else if (BF <= 24) {
          return 1 //正常
        } else if (BF <= 30) {
          return 2 // 超重
        } else {
          return 3 // 肥胖
        }
      } else if (ageGenderType === 2) {
        if (BF <= 17) {
          return 0 //偏瘦
        } else if (BF <= 23) {
          return 1 //正常
        } else if (BF <= 30) {
          return 2 // 超重
        } else {
          return 3 // 肥胖
        }
      } else {
        if (BF <= 20) {
          return 0 //偏瘦
        } else if (BF <= 27) {
          return 1 //正常
        } else if (BF <= 35) {
          return 2 // 超重
        } else {
          return 3 // 肥胖
        }
      }
    },
    getBMIShape(ageGenderType, BMI) {
      if (BMI <= 18.5) {
        return 0 //偏瘦
      } else {
        if (ageGenderType === 0) {
          if (BMI <= 22) {
            return 1 //正常
          } else if (BMI <= 24.5) {
            return 2 // 超重
          } else {
            return 3 // 肥胖
          }
        } else if (ageGenderType === 1) {
          if (BMI <= 19.5) {
            return 1 //正常
          } else if (BMI <= 22) {
            return 2 // 超重
          } else {
            return 3 // 肥胖
          }
        } else if (ageGenderType === 2) {
          if (BMI <= 24) {
            return 1 //正常
          } else if (BMI <= 27) {
            return 2 // 超重
          } else {
            return 3 // 肥胖
          }
        } else {
          if (BMI <= 21) {
            return 1 //正常
          } else if (BMI <= 25) {
            return 2 // 超重
          } else {
            return 3 // 肥胖
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  padding-top: 20px;
  .block {
    width: 330px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    color: #000;
    border-radius: 5px;
    padding: 15px 20px;
    > * {
      margin-bottom: 10px;
    }
    h2 {
      margin-bottom: 10px;
    }
    button {
      margin-top: 40px;
      background-color: #fdf052;
      font-weight: 600;
    }
  }
}
</style>
