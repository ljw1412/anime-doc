---
lang: zh-CN
title: PROJECT EUREKA
description: PROJECT EUREKA企划相关信息介绍。
---

# PROJECT EUREKA

<script setup>
const animeList = [
  {name:'交响诗篇优莱卡7', image:'/imgs/cover/Psalms_of_Planets.jpg', url:'./Anime/Psalms_of_Planets/'},
  {name:'优莱卡7 AO', image:'/imgs/cover/ao.jpg', url:'./Anime/AO/'},
]
const movieList = [
  {name:'交响诗篇优莱卡7 满载彩虹', image:'/imgs/cover/poketful.jpg', url:'./Movie/Good_night_Sleep_tight_Young_lovers'},
  {name:'交响诗篇优莱卡7 超进化1', image:'/imgs/cover/HI-EVOLUTION-1.jpg', url:'./Movie/HI-EVOLUTION_1'},
  {name:'安妮莫奈/交响诗篇优莱卡7 超进化', image:'/imgs/cover/HI-EVOLUTION-2.jpg', url:'./Movie/ANEMONE'},
  {name:'优莱卡/交响诗篇优莱卡7 超进化', image:'/imgs/cover/HI-EVOLUTION-3.jpg', url:'./Movie/EUREKA'},
]
const comicList = [
  {name:'优莱卡7 重力少年&滑空少女', image:'/imgs/cover/Gravity_Boys_and_Lifting_Girl.jpg', url:'./Comic/Gravity_Boys_and_Lifting_Girl'},
  {name:'交响诗篇优莱卡7', image:'/imgs/cover/Psalms_of_Planets_comic.jpg', url:'./Comic/EUREKA_SEVEN'},
  {name:'交响诗篇优莱卡7 新秩序', image:'/imgs/cover/new_order_comic.jpg', url:'./Comic/EUREKA_SEVEN_new_order'},
  {name:'优莱卡7 AO', image:'/imgs/cover/AO_comic.jpg', url:'./Comic/AO'},
  {name:'优莱卡7 nAnO', image:'/imgs/cover/AO_nAnO.jpg', url:'./Comic/AO_nAnO'},
  {name:'优莱卡7 AO ~Save A Prayer~', image:'/imgs/cover/AO_Save_A_Prayer.jpg', url:'./Comic/AO_Save_A_Prayer'},
]
const gameList = [
  {name:'优莱卡7 新浪潮', image:'/imgs/cover/ps2_vol_1.png', url:'./Game/PS2_TR'},
  {name:'优莱卡7 新视野', image:'/imgs/cover/ps2_vol_2.png', url:'./Game/PS2_TR'},
  {name:'交响诗篇优莱卡7', image:'/imgs/cover/psp.jpg', url:''},
  {name:'优莱卡7 AO Attack Legend', image:'/imgs/cover/ps3.jpg', url:''},
]
const novelList = [
]
</script>

## 动画

<image-text-grid :list="animeList"/>

## 电影

<image-text-grid :list="movieList"/>

## 漫画

<image-text-grid :list="comicList"/>

## 游戏

<image-text-grid :list="gameList"/>

## 小说

<image-text-grid :list="novelList"/>
