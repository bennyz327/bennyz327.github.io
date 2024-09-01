---
home: true
portfolio: true
navbar: false
sidebar: false
footer: false
bgImage: /assets/images/entry-cover.jpg
bgImageStyle:
  opacity: 0.3
titles:
  - 技術探索
  - 求好求穩
content: portfolio
---
## 關於我

- **本名**：周柏寰
- **學歷**：國立臺中教育大學 數位內容科技學系
- **職涯規劃**：程式設計師、程式架構師、維運管理
- **興趣**：程式設計、網站架設、自動化維運、雲端架構、打羽球

## 教育經歷

<Experiences :items="experiences" />

<script setup lang="ts">
const experiences = [
  {
    type: 'study',
    place: "高雄中學 臺灣",
    title: "",
    time: "2013 年 9 月 - 2016 年 6 月",
    content: "普通科畢業",
  },
  {
    type: 'study',
    place: "臺中教育大學 臺灣",
    title: "",
    time: "2016 年 9 月 - 2022 年 1 月",
    content: "數位內容科技學系畢業",
  },
  {
    type: 'study',
    place: "關西國際大學 日本",
    time: "2019 年 9 月 - 2020 年 9 月",
    title: "交換學生",
    description: "參與為期一年的交換學生計畫",
  },
  {
    type: 'work',
    place: "正旻科技 臺灣",
    time: "2024 年 2 月 - 至今",
    title: "後端工程師",
  },
];
</script>

::: center
[進入部落格](/home)
:::
