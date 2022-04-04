---
lang: zh-CN
title: 作品角色 - 交响诗篇
description: 交响诗篇Eureka seveN 相关角色介绍。
---

# 角色

## 月光洲

<image-text-grid :list="characterList"/>

## 塔州联邦军

<image-text-grid :list="TowerList"/>

## 补陀落

<script setup>
  const characterList = [
    {name:'兰顿‧萨斯顿', image:'/imgs/characters/face_Renton_Thurston.png', url:'./Renton_Thurston'},
    {name:'优莱卡', image:'/imgs/characters/face_Eureka.png', url:'./Eureka'},
    {name:'霍兰德‧诺瓦克', image:'/imgs/characters/face_Holland.png', url:'./Holland'},
    {name:'塔尔荷‧有纪', image:'/imgs/characters/face_Talho.png', url:'./Talho'},
  ]
  const TowerList = [  
    {name:'杜威‧诺瓦克', image:'/imgs/characters/face_Dewey.png', url:'./Dewey'},
    
  ]
</script>
