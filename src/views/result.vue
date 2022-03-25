<template>
  <div class="result">
    <div class="block">
      <h1>身体形态报告</h1>
      <p>您的身体形态为【肥胖】，【需要警惕】</p>
      <p>
        【警示】
        您的腰围在80-85之间/大于85（女），属于向心性肥胖前期/向心性肥胖，心血管风险增加。<br />
        身体脂肪的分布与健康有密切的关系。如果脂肪过多地堆积在腰腹部，其患病（如高血压、型糖尿病、高血脂等）的危险性会大大增加。<br />
      </p>
      <h2>针对您的体型给出的生活建议：</h2>
      <p>
        饮食——由专人指导达到饮食减肥。<br />
        运动——加强脂肪燃烧运动，每周至少固定三次运动，每回运动时间在30分钟以上。
      </p>
      <h2>详细解释：</h2>
      <p>bmi指数【25】</p>
      <p>
        您的身体质量指数BMI=【25】kg/m2，属于【超重】，增加了患脂肪肝、糖尿病及其他慢性病的风险。均衡饮食+合理运动是控制体重的唯一健康有效方式。
      </p>
      <p>
        根据【女性】在【18-25】年龄段范围内的标准，您的体脂处于【非常高】的水平，与BMI指数综合得出您的体型为【肥胖】
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.getShapeList()
  },
  methods: {
    getShapeList() {
      let shapeList = JSON.parse(localStorage.getItem('userInfo'))
      let BMI = (shapeList.weight / Math.pow(shapeList.height, 2)).toFixed(1)
      shapeList.bodyFatRate = shapeList.bodyFatRate.toFixed()
      let BMILevel = this.getBMILevel(BMI)
      let bodyFatRateLevel = this.getBodyFatRateLevel(
        shapeList.gender,
        shapeList.age,
        shapeList.bodyFatRate
      )
      console.log(BMILevel, bodyFatRateLevel)
    },
    getBMILevel(bmi) {
      if (bmi < 18.5) {
        return '偏轻'
      } else if (bmi < 24) {
        return '标准'
      } else if (bmi < 28) {
        return '超重'
      } else {
        return '过重'
      }
    },
    getBodyFatRateLevel(gender, age, bodyFatRate) {
      let ageLevel = 0
      if (age < 18) {
        ageLevel = 1
      } else if (age >= 18 && age <= 25) {
        ageLevel = 2
      } else if (age >= 26 && age <= 35) {
        ageLevel = 3
      } else if (age >= 36 && age <= 45) {
        ageLevel = 4
      } else if (age >= 46 && age <= 55) {
        ageLevel = 5
      } else if (age >= 56 && age <= 65) {
        ageLevel = 6
      } else {
        ageLevel = 7
      }
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
      }else{
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
    // getBodyShape(BMILevel,bodyFatRateLevel){
      
    // },
    // getWaistWarn(waistline){

    // }
  },
}
</script>

<style lang="scss" scoped>
.result {
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
