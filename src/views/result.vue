<template>
  <div class="result">
    <div class="block">
      <h1>身体形态报告</h1>
      <p>您的身体形态为【{{ bodyShape }}】，{{ bodyShapeEvaluation }}。</p>
      <div v-if="waistlineWarn">
        <h2>需要注意的潜在健康问题</h2>
        <p>
          您的腰围在{{ waistlineRange }}（{{ gender }}），属于{{
            waistlineWarn
          }}，心血管风险增加。<br />
          身体脂肪的分布与健康有密切的关系。如果脂肪过多地堆积在腰腹部，其患病（如高血压、型糖尿病、高血脂等）的危险性会大大增加。<br />
        </p>
      </div>
      <h2>针对您的体型给出的生活建议：</h2>
      <p>
        {{ bodyShapeSuggestion }}
      </p>
      <h2>详细解释：</h2>
      <p>bmi指数【{{ BMI }}】</p>
      <p>
        您的身体质量指数BMI=【{{ BMI }}】kg/㎡，属于【{{ BMILevel }}】，{{
          BMILevelWarn
        }}
      </p>
      <p>
        根据【{{ gender }}】在【{{
          ageGroup
        }}】年龄段范围内的标准，您的体脂处于【{{
          bodyFatRateLevel
        }}】的水平，与BMI指数综合得出您的体型为【{{ bodyShape }}】
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyShape: null,
      bodyShapeEvaluation: null,
      bodyShapeSuggestion: null,
      waistlineWarn: null,
      BMI: null,
      BMILevel: null,
      BMILevelWarn: null,
      bodyFatRateLevel: null,
      gender: null,
      ageLevel: null,
      ageGroup: null,
      waistlineRange: null,
      ageGroupList: [
        '<=17',
        '18-25',
        '26-35',
        '36-45',
        '46-55',
        '56-65',
        '>=66',
      ],
      bodyShapeList: [
        '消瘦',
        '低体重',
        '低脂肪肌肉型',
        '标准',
        '低体重高脂肪',
        '运动型',
        '肌肉型超重',
        '超重',
        '临界肥胖',
        '脂肪过量',
        '肥胖',
      ],
      bodyShapeSuggestionList: [
        '饮食——多注意均衡营养的摄取。运动——增加强化肌力的运动，可帮助体力的训练及体力的增加。',
        '加强肌力训练，多做强化肌力运动，可促进体内新陈代谢。',
        '通常低脂肪肌肉型的人为运动族中的一员，请继续保持运动的习惯，以维持让人羡慕的身材！',
        '体型会随年龄增长及饮食、运动而改变，请注意维持均衡的营养及经常做运动，保持标准的体型~',
        '饮食——均衡地摄取营养，尤其是蛋白质的补充，但应减少高脂肪与甜食的摄取。运动——一方面加强脂肪燃烧，降低体内脂肪量，一方面强化肌力，培养运动习惯，可改善体力不足的问题。',
        '请继续维持固定的运动，避免长时间不运动造成脂肪堆积~',
        '通常本体型的人应属于运动型的人，若能多做燃烧脂肪运动，降低脂肪，体型将更健美~',
        '饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。',
        '饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。',
        '饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。',
        '饮食——由专人指导达到饮食减肥。运动——加强脂肪燃烧运动，每周至少固定三次运动，每回运动时间在30分钟以上。',
      ],
    }
  },
  created() {
    this.getShapeList()
    this.getAgeGroup(this.ageLevel - 1)
    this.getBMILevel(this.BMI)
    this.getBMILevelWarn(this.BMILevel)
  },
  methods: {
    getShapeList() {
      let shapeList = JSON.parse(localStorage.getItem('userInfo'))
      this.BMI = (shapeList.weight / Math.pow(shapeList.height, 2)).toFixed(1)
      shapeList.bodyFatRate = shapeList.bodyFatRate.toFixed()
      this.ageLevel = shapeList.age + 1
      this.getGender(shapeList.gender)
      this.bodyFatRateLevel = this.getBodyFatRateLevel(
        shapeList.gender,
        this.ageLevel,
        shapeList.bodyFatRate
      )
      let bodyShapeNum = this.getBodyShapeNum(this.BMILevel, this.bodyFatRateLevel) - 1
      this.getBodyShape(bodyShapeNum)
      this.getBodyShapeEvaluation(bodyShapeNum)
      this.getBodyShapeSuggestion(bodyShapeNum)
      this.getWaistWarn(shapeList.gender, shapeList.waistline)
    },
    getBMILevel(bmi) {
      if (bmi < 18.5) {
        this.BMILevel = '偏轻'
      } else if (bmi < 24) {
        this.BMILevel = '标准'
      } else if (bmi < 28) {
        this.BMILevel = '超重'
      } else {
        this.BMILevel = '过重'
      }
    },
    getAgeGroup(ageLevel) {
      this.ageGroup = this.ageGroupList[ageLevel]
    },
    getBodyFatRateLevel(gender, ageLevel, bodyFatRate) {
      if (gender === 0) {
        if (ageLevel === 1) {
          if (bodyFatRate <= 5) {
            return '非常低'
          } else if (bodyFatRate <= 10) {
            return '低'
          } else if (bodyFatRate <= 25) {
            return '平均'
          } else if (bodyFatRate <= 31) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 2) {
          if (bodyFatRate <= 7) {
            return '非常低'
          } else if (bodyFatRate <= 10) {
            return '低'
          } else if (bodyFatRate <= 13) {
            return '偏低'
          } else if (bodyFatRate <= 17) {
            return '平均'
          } else if (bodyFatRate <= 21) {
            return '偏高'
          } else if (bodyFatRate <= 27) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 3) {
          if (bodyFatRate <= 12) {
            return '非常低'
          } else if (bodyFatRate <= 15) {
            return '低'
          } else if (bodyFatRate <= 18) {
            return '偏低'
          } else if (bodyFatRate <= 21) {
            return '平均'
          } else if (bodyFatRate <= 24) {
            return '偏高'
          } else if (bodyFatRate <= 29) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 4) {
          if (bodyFatRate <= 15) {
            return '非常低'
          } else if (bodyFatRate <= 18) {
            return '低'
          } else if (bodyFatRate <= 21) {
            return '偏低'
          } else if (bodyFatRate <= 24) {
            return '平均'
          } else if (bodyFatRate <= 26) {
            return '偏高'
          } else if (bodyFatRate <= 29) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 5) {
          if (bodyFatRate <= 17) {
            return '非常低'
          } else if (bodyFatRate <= 20) {
            return '低'
          } else if (bodyFatRate <= 23) {
            return '偏低'
          } else if (bodyFatRate <= 25) {
            return '平均'
          } else if (bodyFatRate <= 28) {
            return '偏高'
          } else if (bodyFatRate <= 31) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 6) {
          if (bodyFatRate <= 18) {
            return '非常低'
          } else if (bodyFatRate <= 21) {
            return '低'
          } else if (bodyFatRate <= 24) {
            return '偏低'
          } else if (bodyFatRate <= 26) {
            return '平均'
          } else if (bodyFatRate <= 28) {
            return '偏高'
          } else if (bodyFatRate <= 31) {
            return '高'
          } else {
            return '非常高'
          }
        } else {
          if (bodyFatRate <= 18) {
            return '非常低'
          } else if (bodyFatRate <= 21) {
            return '低'
          } else if (bodyFatRate <= 23) {
            return '偏低'
          } else if (bodyFatRate <= 25) {
            return '平均'
          } else if (bodyFatRate <= 27) {
            return '偏高'
          } else if (bodyFatRate <= 30) {
            return '高'
          } else {
            return '非常高'
          }
        }
      } else {
        if (ageLevel === 1) {
          if (bodyFatRate <= 12) {
            return '非常低'
          } else if (bodyFatRate <= 15) {
            return '低'
          } else if (bodyFatRate <= 30) {
            return '平均'
          } else if (bodyFatRate <= 36) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 2) {
          if (bodyFatRate <= 17) {
            return '非常低'
          } else if (bodyFatRate <= 20) {
            return '低'
          } else if (bodyFatRate <= 23) {
            return '偏低'
          } else if (bodyFatRate <= 25) {
            return '平均'
          } else if (bodyFatRate <= 28) {
            return '偏高'
          } else if (bodyFatRate <= 32) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 3) {
          if (bodyFatRate <= 18) {
            return '非常低'
          } else if (bodyFatRate <= 21) {
            return '低'
          } else if (bodyFatRate <= 23) {
            return '偏低'
          } else if (bodyFatRate <= 26) {
            return '平均'
          } else if (bodyFatRate <= 30) {
            return '偏高'
          } else if (bodyFatRate <= 35) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 4) {
          if (bodyFatRate <= 19) {
            return '非常低'
          } else if (bodyFatRate <= 23) {
            return '低'
          } else if (bodyFatRate <= 26) {
            return '偏低'
          } else if (bodyFatRate <= 29) {
            return '平均'
          } else if (bodyFatRate <= 32) {
            return '偏高'
          } else if (bodyFatRate <= 38) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 5) {
          if (bodyFatRate <= 22) {
            return '非常低'
          } else if (bodyFatRate <= 25) {
            return '低'
          } else if (bodyFatRate <= 28) {
            return '偏低'
          } else if (bodyFatRate <= 31) {
            return '平均'
          } else if (bodyFatRate <= 35) {
            return '偏高'
          } else if (bodyFatRate <= 38) {
            return '高'
          } else {
            return '非常高'
          }
        } else if (ageLevel === 6) {
          if (bodyFatRate <= 23) {
            return '非常低'
          } else if (bodyFatRate <= 27) {
            return '低'
          } else if (bodyFatRate <= 30) {
            return '偏低'
          } else if (bodyFatRate <= 33) {
            return '平均'
          } else if (bodyFatRate <= 36) {
            return '偏高'
          } else if (bodyFatRate <= 38) {
            return '高'
          } else {
            return '非常高'
          }
        } else {
          if (bodyFatRate <= 21) {
            return '非常低'
          } else if (bodyFatRate <= 26) {
            return '低'
          } else if (bodyFatRate <= 29) {
            return '偏低'
          } else if (bodyFatRate <= 32) {
            return '平均'
          } else if (bodyFatRate <= 35) {
            return '偏高'
          } else if (bodyFatRate <= 38) {
            return '高'
          } else {
            return '非常高'
          }
        }
      }
    },
    getBodyShapeNum(BMILevel, bodyFatRateLevel) {
      if (BMILevel === '偏轻') {
        if (bodyFatRateLevel === '非常低' || bodyFatRateLevel === '低') {
          return 1
        } else if (bodyFatRateLevel === '偏低' || bodyFatRateLevel === '平均') {
          return 2
        } else {
          return 5
        }
      } else if (BMILevel === '标准') {
        if (bodyFatRateLevel === '非常低' || bodyFatRateLevel === '低') {
          return 3
        } else if (bodyFatRateLevel === '偏低' || bodyFatRateLevel === '平均') {
          return 4
        } else if (bodyFatRateLevel === '偏高' || bodyFatRateLevel === '高') {
          return 10
        } else {
          return 11
        }
      } else if (BMILevel === '超重') {
        if (bodyFatRateLevel === '非常低') {
          return 6
        } else if (bodyFatRateLevel === '低' || bodyFatRateLevel === '偏低') {
          return 7
        } else if (bodyFatRateLevel === '平均') {
          return 8
        } else if (bodyFatRateLevel === '偏高') {
          return 9
        } else {
          return 11
        }
      } else {
        if (
          bodyFatRateLevel === '非常低' ||
          bodyFatRateLevel === '低' ||
          bodyFatRateLevel === '偏低'
        ) {
          return 6
        } else if (bodyFatRateLevel === '平均') {
          return 9
        } else {
          return 11
        }
      }
    },
    getWaistWarn(gender, waistline) {
      if (gender === 0) {
        if (waistline >= 85 && waistline < 90) {
          this.waistlineWarn = '向心性肥胖前期'
          this.waistlineRange = '85-90之间'
        } else if (waistline >= 90) {
          this.waistlineWarn = '向心性肥胖'
          this.waistlineRange = '大于等于90'
        }
      } else {
        if (waistline >= 80 && waistline < 85) {
          this.waistlineWarn = '向心性肥胖前期'
          this.waistlineRange = '80-85之间'
        } else if (waistline >= 85) {
          this.waistlineWarn = '向心性肥胖'
          this.waistlineRange = '大于等于85'
        }
      }
    },
    getBodyShape(num) {
      this.bodyShape = this.bodyShapeList[num]
    },
    getBodyShapeEvaluation(num) {
      if (num === 3 || num === 4 || num === 6 || num === 7) {
        this.bodyShapeEvaluation = '处于健康的范围内'
      } else if (num === 2 || num === 8 || num === 9) {
        this.bodyShapeEvaluation = '距离健康的体型仍有一定的距离'
      } else {
        this.bodyShapeEvaluation = '需要警惕'
      }
    },
    getBodyShapeSuggestion(num) {
      this.bodyShapeSuggestion =  this.bodyShapeSuggestionList[num]
    },
    getBMILevelWarn(BMILevel) {
      if (BMILevel === '超重' || BMILevel === '过重') {
        this.BMILevelWarn =
          '增加了患脂肪肝、糖尿病及其他慢性病的风险。均衡饮食+合理运动是控制体重的唯一健康有效方式。'
      } else if (BMILevel === '标准') {
        this.BMILevelWarn = '属于正常范围，请继续均衡饮食+合理运动~'
      } else {
        this.BMILevelWarn =
          '体重过轻，影响体质，可能导致免疫力低下、月经不调或闭经、骨质疏松、贫血、抑郁等病症。'
      }
    },
    getGender(gender) {
      this.gender = gender === 0 ? '男性' : '女性'
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  padding-top: 20px;
  .block {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    color: #000;
    border-radius: 5px;
    padding: 15px 20px;
    > * {
      margin-bottom: 10px;
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
}
</style>
