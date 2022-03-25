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
export default {}
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
